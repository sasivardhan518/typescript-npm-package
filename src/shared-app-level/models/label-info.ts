import { LabelType } from '../enums/label-type.enum';
import { SimpleColumnDef } from './simple-column-def';

export interface LabelInfo {
    name: string;
    attribGId: string;
    labelType: LabelType;
    aliasName: string;
    columns: SimpleColumnDef[];
    // moving below properties to IColumnDef
    // added below properties, for export case
    // public DataType DataType { get; set; }

    // public string Format { get; set; }
}
