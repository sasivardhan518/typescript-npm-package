import { DomainDbType } from '../enums/domain-db-type.enum';

export interface Domain {
    domainID: number;
    name: string;
    lastModified?: string;
    configLastUpdated?: string;
    dataLastUpdated?: string;
    dbtype: DomainDbType;
    languagePropertyBag?: {
        name: {
            [key: string]: string
        }
    };
    activePassiveLastUpdated?: string;
    stateLastUpdated?: string;
    lastUpdatedDate?: string;
}
