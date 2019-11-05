import { HierarchyIndex, HierarchyState } from './report-info';
import { SimpleFilterInfo } from './simple-filter-info';
import { TupleCompVal } from './tuple-comp-val';
import { UserFilterDetails } from '../../shared-app-level/models/user-filter-details';
import { UserFilterInfo } from '../../shared-app-level/models/user-filter-info';

export interface UserSimpleFilterInfo extends SimpleFilterInfo {
    key?: string;
    userFilterDetails?: UserFilterDetails;
}

export interface ReportExecInput {
    quickFilterValues?: UserSimpleFilterInfo[];
    selectedPages?: TupleCompVal[];
    hierarchyStates?: HierarchyState[];
    ignoredAttributes?: string[];
    previousHierarchyIndex?: HierarchyIndex;
    execFilters?: UserFilterInfo[];
    isDefaultReport?: boolean;
}
