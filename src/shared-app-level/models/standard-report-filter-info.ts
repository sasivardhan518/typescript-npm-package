import { StandardReportRepresentationType } from '../enums/standard-report-representation-type.enum';

export interface StandardReportFilterInfo {
    qfkey: string;
    paramName: string;
    representationType: StandardReportRepresentationType;
    isHidden: boolean;
    type: string;
}
