import { DataType } from '../../enums/data-type.enum';
import { MeasureFormatInfo } from '../measure-format-info';
import { ReportComponent } from './report-component';
import { ServiceDataType } from '../../../shared-app-level/enums/service-data-type.enum';

export interface StackLabel {
    reportAttribs: ReportComponent[];
    sHierKey: string;
    level: number;
    isAligned: boolean;
    attribGId: string;
    aliasName: string;
    columns: StackColumn[];
    dataType: ServiceDataType;
    format: MeasureFormatInfo;
}


export interface StackColumn {
    stackLabel: string;
    applicableReports: number[];
    domain: number;
    compoundAttrib: string;
    element: string;
    columnName: string;
    columnIndex: number;
    dataType: DataType;
    columnType: number;
    format: string;
}
