import { AssetAccessedFromEnum } from '../../shared-app-level/enums/asset-accessed-from.enum';
import { AttributeDataItemsMap } from './attribute-data-item';
import { CurrentLevelReportFormat } from './current-level-report-format';
import { ExecuteReportDto } from './execute-report-dto';
import { KpiDetails } from './kpi-details';

export interface ReportDataInfo {
    reportInfo: ExecuteReportDto;
    allAttribsDataItemMap: AttributeDataItemsMap;
    outputFormat: CurrentLevelReportFormat;
    filters: ReportFilters;
    resultData?: Object;
    columnOptions?: Object;
    customKpiInfo?: KpiDetails[];
    nestedFilters: Object;
    nestedExpandedLevel: number;
    isMainVisual: boolean;
    mainVisualOutputFormat: CurrentLevelReportFormat;
    assetAccessedFrom: AssetAccessedFromEnum;
    groupInfo: {
        [groupId: string]: string;
    };
}

export interface ReportFilters {
    displayFilters?: Object;
    pageFilters?: Object[];
}
