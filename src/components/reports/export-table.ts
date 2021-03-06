import React from "react";

import {
  ensurePluginOrder,
  Hooks,
  TableInstance,
  Row,
  ColumnInstance,
} from "react-table";

import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

import { unparse } from "papaparse";

const defaultFilename = (filetype: string): string => {
  return "bcms-data";
};

// eslint-disable-next-line
export interface UseExportDataInstanceProps<D extends object> {
  initialRows: Row[];
  disableExport: boolean;
  getExportFilename: (filetype: string) => string;
  getExportBlob: (
    data: any[][],
    columns: ColumnInstance<{}>[],
    filename: string,
    filetype: string
  ) => Blob | null;
  exportData: any;
}

// eslint-disable-next-line
export interface UseExportDataColumnProps<D extends Object> {
  exportValue?: string | number | {};
  getColumnExportValue: (column: ColumnInstance) => string | number | {};
  getCellExportValue: (row: Row, column: ColumnInstance) => any;
}

const getColumnExportValueDefault = (column: ColumnInstance) => {
  let name = column.Header;

  if (!name || typeof name === "object" || typeof name === "function")
    name = column.id;

  return name;
};

const getCellExportValueDefault = (row: Row, col: ColumnInstance) => {
  return row.values[col.id];
};

const convertDataToBlob = (
  data: any[][],
  columns: ColumnInstance<{}>[],
  filename: string,
  filetype: string
): Blob | null => {
  const headerNames: string[] = columns.map((column) =>
    column.exportValue ? column.exportValue.toString() : ""
  );

  switch (filetype) {
    case "pdf":
      const doc = new jsPDF();
      autoTable(doc, {
        head: [headerNames],
        body: data,
        margin: { top: 20 },
        styles: {
          minCellHeight: 0,
          minCellWidth: 5,
          halign: "left",
          valign: "middle",
          fontSize: 8,
          cellPadding: 3,
        },
      });
      doc.save(`${filename}.pdf`);

      return null;

    case "csv":
      const csvString = unparse({ fields: headerNames, data });
      return new Blob([csvString], { type: "text/csv" });
  }

  return null;
};

const downloadBlobAsFile = (blob: Blob, filename: string, type: string) => {
  if (blob) {
    const dataUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = `${filename}.${type}`;
    link.href = dataUrl;
    link.click();
  }
};

const useInstance = (instance: TableInstance) => {
  const {
    rows,
    allColumns,
    plugins,
    getExportFilename = defaultFilename,
    getExportBlob = convertDataToBlob,
  } = instance;

  ensurePluginOrder(plugins, ["useSortBy"], "useExportData");

  allColumns.forEach((column) => {
    const { getColumnExportValue = getColumnExportValueDefault } = column;

    column.exportValue = getColumnExportValue(column);
  });

  console.log(allColumns);

  const exportData = React.useCallback(
    (filetype: string, omitColumns?: string[]) => {
      const exportableColumns = allColumns.filter(
        (col) =>
          col.isVisible &&
          !omitColumns?.includes(col.exportValue?.toString() || "")
      );

      const exportableRows = rows.map((row) => {
        return exportableColumns.map((col) => {
          const { getCellExportValue = getCellExportValueDefault } = col;

          return getCellExportValue(row, col);
        });
      });

      const filename = getExportFilename(filetype);

      const fileblob = getExportBlob(
        exportableRows,
        exportableColumns,
        filename,
        filetype
      );

      if (fileblob) downloadBlobAsFile(fileblob, filename, filetype);
    },
    [getExportBlob, getExportFilename, rows, allColumns]
  );

  Object.assign(instance, { exportData });
};

const useExportData = (hooks: Hooks) => {
  hooks.useInstance.push(useInstance);
};
useExportData.pluginName = "useExportData";

export { useExportData, convertDataToBlob };
