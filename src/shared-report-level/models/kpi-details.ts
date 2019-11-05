import { DataType } from '../enums/data-type.enum';
export interface KpiDetails {
    applicableReports: number[];
    columnIndex: number;
    columnName: string;
    dataType: DataType;
    domainId: number;
    format: string;
    key: string;
    measureName: string;
}