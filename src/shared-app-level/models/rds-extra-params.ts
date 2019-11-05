import { ReportFilterValue } from '../../shared-report-level/models/report-format';

export interface RDSExtraParams {
    isValueConcatenationRequired: boolean;
    isGridDataRequired: boolean;
    isDataRequired: boolean;
    isRowColumnDataRequired: boolean;
    isGridLayout?: boolean;
    scalesInfo?: ScalesInfo;
    isNested?: boolean;
    nestedFilters?: Object;
    gridLayoutSortRowAttribIds?: string[];
    isMap?: boolean;
}

export interface ScalesInfo {
    [key: string]: ScaleInfo;
}

export interface ScaleInfo {
    axisValues: ReportFilterValue[];
    min: number;
    max: number;
    isCustomScalingRequired: boolean;
}


