import { ColumnType } from '../enums/column-type.enum';
import { MeasureDataTypeEnum } from '../../shared-report-level/enums/measure-data-type.enum';
import { MeasureFormatInfo } from '../../shared-report-level/models/measure-format-info';


export interface SimpleColumnDef { // extends IColumnDef {
    columnName: string;
    aliasName: string;
    columnIndex: Int16Array;
    columnType: ColumnType;
    dataType: MeasureDataTypeEnum;
    format: MeasureFormatInfo;
}
