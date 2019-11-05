import { MergeReportInfo } from './merge-report-info';
import { StackHier } from './stack-hier';
import { StackLabel } from './stack-label';
export interface MergeSpecificInfo {
    invalidMergeReport: MergeReportInfo;
    reportsInvolved: number[];
    hierAlignment: StackHier[];
    attribAlignment: StackLabel[];
    reportIdentifyingHier: StackHier;
    reportIdentifyingLabel: StackLabel;
}
