export interface AssetProperties {
    tabsInfo: TabInfo[];
    lockActions: string[];
    mergeReportIds?: number[];
}

export interface TabInfo {
    name: string;
    displayText: string;
    type: string;
    reportIds?: number[];
}
