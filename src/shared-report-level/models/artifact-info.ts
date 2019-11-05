import { ArtifactType } from '../../shared-app-level/enums/artifact-type.enum';
import { MeasureDataTypeEnum } from '../enums/measure-data-type.enum';
import { MeasureFormatInfo } from './measure-format-info';
export interface ArtifactInfo {
    key: string;
    name: string;
    format: MeasureFormatInfo;
    dataType: MeasureDataTypeEnum;
    domainId: number;
    type: ArtifactType;
}
