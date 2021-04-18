import React from "react";
import {ensurePluginOrder, Hooks, TableInstance, Row, ColumnInstance, HeaderProps, Column} from "react-table";

import {jsPDF} from "jspdf";
import autoTable from "jspdf-autotable";

const defaultFilename = (filetype: string) :string => {
    return "bcms-data";
}

export interface UseExportDataInstanceProps<D extends object> {
    initialRows: Row[];
    disableExport: boolean;
    getExportFilename: (filetype: string) => string;
    getExportBlob: (data: any[][], columns: ColumnInstance<{}>[], filename: string, filetype: string) => Blob | null;
    exportData: any;
};

export interface UseExportDataColumnProps<D extends Object> {
    exportValue?: string | number | {};
    getColumnExportValue: (column: ColumnInstance) => (string | number | {});
    getCellExportValue: (row: Row, column: ColumnInstance) => any;
}

const getColumnExportValueDefault = (column: ColumnInstance) => {
    let name = column.Header;

    if(!name || typeof name === 'object' || typeof name === 'function')
        name = column.id;
    
    return name;
}

const getCellExportValueDefault = (row: Row, col: ColumnInstance) => {
    return row.values[col.id];
}

const convertDataToBlob = (data: any[][], columns: ColumnInstance<{}>[], filename: string, filetype: string): Blob | null => {
    switch(filetype) {
        case "pdf":
            const headerNames: string[] = columns.map((column) => column.exportValue ? column.exportValue.toString() : "");
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
                cellPadding: 3
              },
            });
            doc.save(`${filename}.pdf`);

            return null;
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
}

const useInstance = (instance: TableInstance) => {
    const {
        rows,
        allColumns,
        plugins,
        getExportFilename = defaultFilename,
        getExportBlob = convertDataToBlob,
        initialRows,
        disableExport
    } = instance;

    ensurePluginOrder(plugins, ["useSortBy"], "useExportData");


    allColumns.forEach(column => {
        const {
            getColumnExportValue = getColumnExportValueDefault
        } = column;

        column.exportValue = getColumnExportValue(column);
    });

    console.log(allColumns);

    const exportData = React.useCallback(
        (filetype: string, omitColumns?: string[]) => {
            const exportableColumns = allColumns.filter(
                (col) => col.isVisible && !omitColumns?.includes(col.exportValue?.toString() || "")
            );

            const exportableRows = (rows).map((row) => {
                return exportableColumns.map((col) => {
                  const { getCellExportValue = getCellExportValueDefault } = col;
        
                  return getCellExportValue(row, col);
                });
            });

            const filename = getExportFilename(filetype);

            const fileblob = getExportBlob(exportableRows, exportableColumns, filename, filetype);

            if(fileblob)
                downloadBlobAsFile(fileblob, filename, filetype);

        },
        [getExportBlob, getExportFilename, initialRows, rows, allColumns]
    );

    Object.assign(instance, {exportData});
}

const useExportData = (hooks: Hooks) => {
    hooks.useInstance.push(useInstance);
}
useExportData.pluginName = "useExportData";

export {
    useExportData,
    convertDataToBlob
}