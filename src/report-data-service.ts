import { ReportAdditonalDataService as ReportAdditionalDataService } from './report-additional-data-service';

export class ReportDataService {
    private reportAdditionalDataService: ReportAdditionalDataService;

    constructor() {
        this.reportAdditionalDataService = new ReportAdditionalDataService();
    }
    fetchData(dataObject: any) {
        console.log(this.reportAdditionalDataService.getColsVals());
        return { a: 1, b: 3, c: 4, d: 45, e: 88 };
    }
}