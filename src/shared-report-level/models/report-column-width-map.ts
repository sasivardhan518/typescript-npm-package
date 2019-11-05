export interface ReportColumnWidthMap {
    [colId: string]: ReportColumnWidthInfo;
}

export interface ReportColumnWidthInfo {
    suppressSizeToFit?: boolean;
    autoSizeColumn?: boolean;
    width?: number;
}
