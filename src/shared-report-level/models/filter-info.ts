import { FilterType } from '../enums/filter-type.enum';
import { PropertyType } from '../../shared-app-level/models/property-type';
import { ResponseTypeEnum } from '../enums/response-type.enum';
import { ResultData } from './data-holder';
import { UserFilterDetails } from '../../shared-app-level/models/user-filter-details';

export enum CombiningConditionType {
    AND = 1,
    OR = 2
}

export interface FilterInfo {
    domainId: number;
    attribGId?: string | number;
    appliedOnProperty?: string;
    isNotExists?: boolean;
    filterType: FilterType;
    listId?: number | string;
    attribValues?: ResultData;
    dependentFilterInfo?: FilterInfo;
    combiningFilters?: FilterInfo[];
    combiningCondition?: CombiningConditionType;
    type?: ListType;
    fromRange?: RangeConditionInfo;
    toRange?: RangeConditionInfo;
    wildCardBegins?: string;
    wildCardEnds?: string;
    wildCardContains?: string;
    isSingleSelect?: boolean;
    key?: string;
    userFilterDetails?: UserFilterDetails;
}

export interface RangeConditionInfo {
    isEqualToConsidered: boolean;
    isValueOrFilter: boolean;
    value: number;
    interval?: number;
    numValues?: number;
    filter?: FilterInfo;
}

export enum ListType {
    Regular = 0,
    Conditional = 1,
    Imported = 2
}

export interface MultipleAttributeValues {
    attribOrGroupValues: AttributeRequestInfo[];
}

export interface AttributeRequestInfo {
    domainId: number;
    attribGId: string;
    filterInfos: FilterInfo[];
    isConditionalFilterRequest?: boolean;
    responseType?: ResponseTypeEnum;
    properties?: PropertyType[];
}
