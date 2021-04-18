import {
    UseSortByColumnOptions,
    UseSortByColumnProps,
    UseSortByInstanceProps,
    UseSortByOptions,
    UseSortByState
  } from 'react-table';
  
  import {
    UseExportDataInstanceProps,
    UseExportDataColumnProps
  } from './export-table';

  declare module 'react-table' {
    export interface TableOptions<D extends object> extends UseSortByOptions<D> {}
  
    export interface TableInstance<D extends object = {}>
      extends UseSortByInstanceProps<D> {}

    export interface TableInstance<D extends object = {}>
      extends UseExportDataInstanceProps<D> {}

    export interface TableState<D extends object = {}>
      extends UseSortByState<D> {}
  
    export interface Column<D extends object = {}>
      extends UseSortByColumnOptions<D> {}
  
    export interface ColumnInstance<D extends object = {}>
      extends UseSortByColumnProps<D> {}

    export interface ColumnInstance<D extends object = {}> 
      extends UseExportDataColumnProps<D> {}
  }
  