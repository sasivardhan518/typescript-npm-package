import { FilterType } from '../enums/filter-type.enum';
import { LinkedArtifacts } from './linked-artifacts';
import { ListType } from './filter-info';
import { QuickFilterConfiguration } from '../../shared-app-level/models/quick-filter-configuration';
import { QuickFilterDisplayTypeEnum } from '../../shared-app-level/enums/quick-filter-display-type.enum';
import { SimpleFilterInfo } from './simple-filter-info';
export interface QuickFilterInfo {
    attributeDescription: string;
    attribGId: string;
    isGroup: boolean;
    selectedValues: { [key: string]: string | number }[] | string[] | object | object[] | null;
    isSingleSelect: boolean;
    bindProperty: string;
    controlType: QuickFilterDisplayTypeEnum;
    isForceGenerate: boolean;
    restrictedValues: { [key: string]: string | number }[] | string[] | object[] | null;
    modifiedRestrcitedValues: { [key: string]: string | number }[] | string[] | object[] | null;
    isAutoGenerate: boolean;
    displayInFilterPanel: boolean;
    domainId: number;
    isOpen?: boolean;
    quickFilterKey?: string;
    listId: number | string;
    isList: boolean;
    listType: ListType;
    filterType: FilterType;
}

export interface AttributeQuickFilterConfig {
    [attributeName: string]: {
        filterConfig: QuickFilterConfiguration,
        domainId: number
    };
}

export interface QuickFilterValueUpdateParams {
    attribGId: string;
    domainId: number;
    filterValues: any[];
    quickFiltersInfo: QuickFilterInfo[];
    quickFilterValues: SimpleFilterInfo[];
    isQuickFilter: boolean;
    isExcludeFilterValues?: boolean;
    listId?: string | number;
    sourceAttributeName?: string;
    linkedArtifacts?: LinkedArtifacts;
}
