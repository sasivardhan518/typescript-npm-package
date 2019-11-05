
export interface DataHolder {
    resultData: ResultData;
    requestedAttrib: string;
    numOfRows: number;
}

export interface ResultData {
    columnMap: ColumnMap;
    _data?: string[][] | number[][];
    attribColumns?: string[];
    measureColumns?: string[];
    columnDataType: ColumnDataType;
}

export interface ColumnMap {
    [attributeName: string]: number;
}

export interface ColumnDataType {
    [attributeName: string]: string;
}
