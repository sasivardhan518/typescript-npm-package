import { LabelType } from '../enums/label-type.enum';
import { MeasureDataTypeEnum } from '../../shared-report-level/enums/measure-data-type.enum';
import { MeasureFormatInfo } from '../../shared-report-level/models/measure-format-info';

export interface StandardReportLabelInfo {
    name: string;
    columnName: string;
    attribGId: string;
    labelType: LabelType;
    aliasName: string;
    format: MeasureFormatInfo;
    datatype: MeasureDataTypeEnum;
}
