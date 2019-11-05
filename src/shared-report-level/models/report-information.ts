import { AttributeDrillInfo } from './attribute-drill-info';
import { MeasureDisplayAttributeEnum } from '../enums/measure-attribute.enum';
import { ReportFormatHierarchyType } from './report-format';
export interface ReportInformation {
    name: string;
    rows: HierarchyInformation[];
    columns: HierarchyInformation[];
    pages: HierarchyInformation[];
    filters: AttributeFiltersInformation[];
    quickFilters: AttributeFiltersInformation[];
    [MeasureDisplayAttributeEnum.Description]: MeasureInfo;
}

export interface HierarchyInformation {
    isHierarchy: boolean;
    hierarchyName: string;
    hierarchyType: ReportFormatHierarchyType;
    currentAttribute: string;
    attributeNames: string[];
    drillDownValue: AttributeDrillInfo[];
    displayOrderValues: string[];
    displayHiddenValues: string[];
}

export interface AttributeFiltersInformation {
    attributeName: string;
    appliedFilters: string[];
}

export interface ReportKpiInformation {
    kpiName: string;
    kpiType: string;
}

export interface MeasureInfo {
    measureNames: string[];
    measureOrderValues: string[];
    measureHiddenValues: string[];
}
