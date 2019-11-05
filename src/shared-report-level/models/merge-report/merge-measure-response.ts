import { MeasureResponse } from '../measure-response';
import { MergeReportInfo } from './merge-report-info';

export interface MergeMeasureResponse extends MeasureResponse {
    labelColumnMapping: LabelColumnMapping;
    metadata: MergeReportInfo;
}

export interface LabelColumnMapping {
    [labelKey: string]: string[];
}
