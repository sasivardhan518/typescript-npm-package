import { FilterInfo } from './filter-info';

export interface GroupValue {
    dbId?: number;
    name: string;
    filterInfo: FilterInfo;
    key?: string;
}
