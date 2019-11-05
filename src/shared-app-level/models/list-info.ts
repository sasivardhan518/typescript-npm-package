import { ConditionalListUiInfo } from './conditional-list-ui-info';
import { FilterInfo, ListType } from '../../shared-report-level/models/filter-info';

export interface ListInfo {
    dbId?: number;
    name: string;
    attribOrGroupId: string;
    domainId: number;
    filterInfo?: FilterInfo;
    lastModified?: string;
    userId?: string;
    uiInfo?: ConditionalListUiInfo;
    type: ListType;
}
