export interface CurrentLevelReportFormat {
    rows: string[];
    pages: string[];
    columns: string[];
    gridRows?: string[];
    gridColumns?: string[];
    groupedAttrs: string[];
    drilldownFilters?: any;
}