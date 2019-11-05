import { AssetAccessedFromEnum } from '../../shared-app-level/enums/asset-accessed-from.enum';
import { ReportExecInput } from './report-exec-input';

export interface ReportInfoParams {
    reportId: number;
    assetAccessedFrom: AssetAccessedFromEnum;
}

export interface StoryboardInfoParams {
    storyboardId: number;
    assetAccessedFrom: AssetAccessedFromEnum;
    reportExecInput: ReportExecInput;
}

