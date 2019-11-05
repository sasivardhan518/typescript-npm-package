import { AttributeInfo } from '../../shared-app-level/models/attribute-info';
import { MeasureFormatInfo } from './measure-format-info';

export interface CustomAttribsInfo {
    [totalName: string]: CustomAttrib;
}

export interface CustomAttrib extends AttributeInfo {
    domainId: number;
    attributeName: string;
    attributeDescription: string;
    dataType: string;
    defaultFormat: MeasureFormatInfo;
}
