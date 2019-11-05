import { ColorShapeType } from '../enums/color-shape-type.enum';
import { DisplayFiltersInfoWithDesc } from './display-filters';
import { ScalesInfo } from '../../shared-app-level/models/rds-extra-params';
import { SortInfo } from './sort-info';

export type TransformedData = UniqueValues & {
    data: Object[];
    cols: Object[][];
    additionalData?: RowColumnsMetaData;
    scalesInfo?: ScalesInfo;
    appliedDisplayFilters?: Object;
    appliedPageFilters?: Object[];
    gridData?: GridRowData[];
    appliedDisplayFiltersForUI: DisplayFiltersInfoWithDesc;
    appliedSortInfoForUI?: SortInfo;
    defaultSortInfo?: SortInfo;
    isDefaultSortApplied: boolean;
    logicalDsInfo?: LogicalDsInfo;
    logicalDsColInfo?: string[];
    validatedSortInfo?: SortInfo;
    colorColumnRangeSet?: ColorColumnInfo;
};

export interface LogicalDsInfo {
    [key: string]: ValidColorCondition;
}

export interface ValidColorCondition {
    [measureName: string]: KpiSpecificColorCondition | GridSpecificLogicalDsInfo;
}

export interface KpiSpecificColorCondition {
    [colorConditionId: string]: number;
}

export interface GridSpecificLogicalDsInfo {
    cellColor: string;
    textColor: string;
    shape: ColorShapeType;
    shapeColor: string;
    isHideCell: boolean;
}

export interface UniqueValues {
    [key: string]: Object[];
}

export interface RowColumnsMetaData {
    rowName: string;
    colName: string;
    rowDescription: string;
    colDescription: string;
    rowVals: Object[];
    colVals: Object[];
}

export interface GridRowData {
    rowName: string;
    rowDescription: string;
    min: number;
    max: number;
    rowVal: Object;
    cols: GridColumnData[];
    customChartPadding?: number;
}

export interface GridColumnData {
    colName: string;
    colDescription: string;
    colVal: Object;
    data: Object[];
    cols: Object[];
    min: number;
    max: number;
}

export interface ColorRangeSet {
    min: number;
    max: number;
    slotNumber: number;
}

export interface ColorColumnInfo {
    [colId: string]: ColorRangeSet[];
}

export interface RangeSetMapping {
    colorColumnInfo: ColorColumnInfo;
    nestedFilters: Object;
}
