import { GroupValue } from '../../shared-report-level/models/group-value-info';
import { MeasureFormatInfo } from '../../shared-report-level/models/measure-format-info';

export interface GroupInfo {
    dbId?: number;
    name: string;
    description: string;
    attributeId: string;
    groupValues: GroupValue[];
    foldername?: string;
    datatype?: string;
    defaultFormat?: MeasureFormatInfo;
    domainId?: number;
    lastModified?: string;
}
