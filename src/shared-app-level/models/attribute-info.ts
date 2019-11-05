import { DisplayTypeEnum } from '../enums/display-type.enum';
import { FolderInfo } from './folder-info';
import { GroupInfo } from './group-info';
import { LanguageMap } from './language-map';
import { ListInfo } from './list-info';
import { MeasureFormatInfo } from '../../shared-report-level/models/measure-format-info';
import { PropertyDataType } from './property-data-type';
import { PropertyType } from './property-type';

export interface AttributeInfo {
    domainId: number;
    attributeName: string;
    attributeDescription: string;
    folder: FolderInfo;
    dataType: string;
    defaultFormat: MeasureFormatInfo;
    isRole: boolean;
    sourceAttributeId: number;
    isCompound: boolean;
    constituentAttributeIds: string[];
    sortAscending: boolean;
    isGroup: boolean;
    isDisplayAttribute: boolean;
    // isPairedAttribute: boolean;
    isTimeRelative: boolean;
    lists?: ListInfo[];
    groups?: GroupInfo[];
    properties: PropertyType[];
    propertyDataTypes: PropertyDataType;
    isContinuous: boolean;
    minAllowedValue: number;
    maxAllowedValue: number;
    interval: number;
    // pairedAttributeId: string;
    displayType: DisplayTypeEnum;
    // Added for storing groupName in case of a custom attribute
    groupName?: string;
    groupId?: string;
    languagePropertyBag: LanguageMap;
    shapeFileName?: string;
    centerLatitude?: number;
    centerLongitude?: number;
    geoJson?: string;
    canAccessAttribute: boolean;
}






