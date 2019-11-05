import { MeasureResponse } from './measure-response';
import { KpiInfo } from './kpi-info';

export interface ReportSummarizeContract {
    execResponse: MeasureResponse;
    reportDetails: SummarizeReportDetails;
}

export interface SummarizeReportDetails {
    rows: string[];
    pages: string[];
    columns: string[];
    KPIs: KpiInfo[];
    reportDomainId: number;
}
