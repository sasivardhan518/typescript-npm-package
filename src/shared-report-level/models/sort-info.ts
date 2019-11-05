import { ColumnFunctionInfo } from './column-function-info';
import { SortType } from '../enums/sort-type-enum';

export interface SortInfo {
    sortedColumns: SortedColumns[];
}

export interface SortedColumns extends ColumnFunctionInfo {
    sortType: SortType;
    isRowAttribute: boolean;
}
