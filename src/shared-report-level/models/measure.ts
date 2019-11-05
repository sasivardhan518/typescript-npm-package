import { LanguageMap } from '../../shared-app-level/models/language-map';
import { MeasureDataTypeEnum } from '../enums/measure-data-type.enum';
import { MeasureFormatInfo } from './measure-format-info';
import { MeasuresControlType } from '../enums/measures-control-type.enum';

export interface Measure {
    dbId: string;
    name: string;
    domainID: number;
    parameterDefs: ParameterDef[];
    upgradedParameterDefs: ParameterDef[];
    dataType: MeasureDataTypeEnum;
    format: string;
    isDisplayed: boolean;
    displayProperties: PropertiesParameterDef;
    languagePropertyBag: LanguageMap;
    canAccessMeasure: boolean;
}


export interface ParameterDef {
    description: string;
    measureCreator: string;
    parameterName: string;
    type: MeasuresControlType;
    constituentParamDefs: ParameterDef[];
    conditions: Object;
    outputParamDefs: ParameterDef[];
    parameterBucket: string;
    defaultValue?: string;
    isOptional: boolean;
    isMultiple: boolean;
    lessThan?: number;
    greaterThan?: number;
    options: any[];
    attributeName: string;
    languagePropertyBag: LanguageMap;
    dbId?: string;
    displayProperties: PropertiesParameterDef;
    format: string;
}

export interface PropertiesParameterDef {
    dataType: MeasureDataTypeEnum;
    format: MeasureFormatInfo;
    attributeParameter: string;
}
