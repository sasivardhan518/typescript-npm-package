import { ArtifactInfo } from '../../shared-report-level/models/artifact-info';
import { LabelInfo } from './label-info';
import { ResultData } from '../../shared-report-level/models/data-holder';

export interface UserFilterDetails {
    resultData: ResultData;
    labelDetails: LabelInfo[];
    artifactInfo: ArtifactInfo;
}
