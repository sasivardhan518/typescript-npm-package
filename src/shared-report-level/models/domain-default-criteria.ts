import { FilterInfo } from './filter-info';
import { KpiInfo } from './kpi-info';
export interface DomainDefaultCriteria {
    domainDefaults: DomainDefaults;
    domainID: number;
    name: string;
    lastUpdated: Date;
    configLastUpdated: Date;
    dataLastUpdated: Date[];
    languagePropertyBag: object;
}

export interface DomainDefaults {
    dbId: number;
    labels: string[];
    filters: FilterInfo[];
    measures: KpiInfo[];
}



