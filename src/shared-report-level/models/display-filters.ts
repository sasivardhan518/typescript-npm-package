import { ReportFilterValue } from './report-format';

export interface DisplayFiltersInfo {
    [key: string]: AttributeDisplayInfo;
}

export interface AttributeDisplayInfo {
    hiddenValues: ReportFilterValue[];
    orderedValues: ReportFilterValue[];
    showValues: ReportFilterValue[];
    enableSort: boolean;
}

export interface DisplayFiltersInfoWithDesc {
    [key: string]: AttributeDisplayInfoWithDesc;
}

export interface AttributeDisplayInfoWithDesc {
    hiddenValues: ReportFilterValue[];
    orderedValues: ReportFilterValue[];
    showValues: ReportFilterValue[];
    resultValues: ReportFilterValue[];
}
