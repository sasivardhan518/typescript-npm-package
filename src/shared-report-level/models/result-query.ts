import { AttributeValue } from './attribute-value';

export interface ResultQuery {
    query: string;
    reportName: string;
    executionDuration: number;
    filters: AppliedFiltersUsed[];
    attributes: string[];
    measures: MeasureParameterInfo[];
    quickFilters: AppliedFiltersUsed[];
    data: Object[];
}

export interface AppliedFiltersUsed {
    attributeName: string;
    filterValues: AttributeValue[];
    listId: number;
}

export interface MeasureParameterInfo {
    measureCreatorId: string;
    parameterInfo: {
        [parameterName: string]: string | number;
    };
}
