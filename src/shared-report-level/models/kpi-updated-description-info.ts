export interface UpdatedKpiInformation {
    updatedKpiKeys: string[];
    kpiUpdatedDescriptionInfo: KpiUpdatedDescriptionInfo;
}

export interface KpiUpdatedDescriptionInfo {
    [kpiKey: string]: {
        prevMsrName: string;
        crntMsrName: string;
        newDesc: string;
    };
}
