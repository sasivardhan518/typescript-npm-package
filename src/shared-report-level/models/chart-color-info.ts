import { LogicalDsInfo } from './transformed-data';
export interface DSFInfo {
    rowKey: string;
    colKey: string;
    gridKey: string;
    measureValue: string;
    chartTypesInfo: any;
    dsFunctions: LogicalDsInfo;
    isMeasureOnPages: boolean;
    isMeasureOnRows: boolean;
    selectedColumn: object;
}

export interface NestedColorInfo {
    [parentIndex: string]: {
        'children': {
            'childIndex': number;
            'value': number;
        }[];
        'parentColor': string;
    };
}
