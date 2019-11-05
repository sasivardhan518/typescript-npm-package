import { FilterInfo, ListType } from './filter-info';
export interface ReportFormat {
    pages: ReportFormatHierarchiesInfo;
    rows: ReportFormatHierarchiesInfo;
    filters: ReportFormatFiltersInfo;
    columns: ReportFormatHierarchiesInfo;
    gridRows?: ReportFormatHierarchiesInfo;
    gridColumns?: ReportFormatHierarchiesInfo;
}

export interface ReportFormatHierarchiesInfo {
    hierarchies: ReportFormatHierarchy[];
}

export interface ReportFormatFiltersInfo {
    attributes: ReportFormatAttribute[];
}

export enum ReportFormatHierarchyType {
    Nested = 'Nested',
    Replacement = 'Replacement',
    Tabular = 'Tabular'
}

export interface ReportFormatHierarchy {
    attributes: ReportFormatAttribute[];
    currentAttribute: string;
    type: ReportFormatHierarchyType;
    hierarchyName?: string;
    key: string;
    totalAttribName?: string;
}

export interface ReportFormatBaseAttribute {
    name: string; // In case of group, name will be of type groupId.
    description: string;
    domainId: number;
}

export interface ReportFormatAttribute extends ReportFormatBaseAttribute {
    drilldownValue?: ReportFilterValue;
    filterValues: ReportFilterValue[];
    isGroup: boolean;
    appliedLists?: ReportFormatFilterList[];
    isQuickFilter?: boolean;
    isMeasure?: boolean;
    groupName?: string;
    groupId?: string;
    pageFilterValue?: ReportFilterValue;
    groupAttributeName: string;
    advancedFiltersInfo?: AdvancedFiltersInfo;
    isExcludeFilterValues: boolean;
    filterDependentAttribute?: string;
    appliedOnProperty?: string;
}

export interface AdvancedFiltersInfo {
    startValue?: ReportFilterValue;
    endValue?: ReportFilterValue;
    isStartValueRelative?: boolean;
    isEndValueRelative?: boolean;
    isStartValueEqual?: boolean;
    isEndValueEqual?: boolean;
    isPeriodic: boolean;
    periodCount?: number;
    periodFrequency?: number;
    periodicRangeType?: PeriodRangeType;
}

export enum PeriodRangeType {
    Start = 'start',
    End = 'end'
}


export interface ReportFilterValue {
    [key: string]: number | string | Date;
}

export interface ReportFormatFilterList {
    id: string;
    name: string;
    type: ListType;
    // values: ReportFilterValue[];
}
