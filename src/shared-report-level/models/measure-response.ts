import { AttributeResultInfo, ReportInfo } from './report-info';
import { KpiDetails } from './kpi-details';
import { LabelInfo } from '../../shared-app-level/models/label-info';
import { NonFatalError } from '../../shared-app-level/models/non-fatal-error';
import { ResultData } from './data-holder';

export interface MeasureResponse {
    resultData: ResultData;
    reportExecutionDuration: number;
    uniqueLabelValues: AttributeResultInfo[];
    idForFullMeasureResponse: number;
    cachedStateId?: number;
    metaData: ReportInfo;
    queryString?: string;
    isRetrievedFromCache?: boolean;
    kpiDetails?: KpiDetails[];
    labelDetails?: LabelInfo;
    nonFatalErrors?: NonFatalError[];
    reportSummary?: { [key: string]: string }
}

