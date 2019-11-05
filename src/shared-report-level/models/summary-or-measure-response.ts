import { MeasureResponse } from './measure-response';

export interface SummaryOrMeasureReposnse {
    isDataAvailable: boolean;
    isSummary: boolean;
    summary: object;
    measureResponse: MeasureResponse;
}
