import { AssetAccessedFromEnum } from '../../shared-app-level/enums/asset-accessed-from.enum';
import { ExecuteReportDtoTypeEnum } from '../enums/execute-report-dto-type.enum';
import { ReportExecInput } from './report-exec-input';
import { ReportInfo } from './report-info';

export interface ExecuteReportDto {
    reportInfo: ReportInfo;
    assetAccessedFrom: AssetAccessedFromEnum;
    ignoredAttributes: string[] | object;
    reportExecInput: ReportExecInput;
    responseType?: ExecuteReportDtoTypeEnum;
}
