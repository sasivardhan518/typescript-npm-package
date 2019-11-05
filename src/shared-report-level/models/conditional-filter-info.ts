import { CombiningConditionType, FilterInfo } from './filter-info';
import { ComparisionType } from '../enums/comparision-type.enum';
import { KpiInfo } from './kpi-info';

export interface ConditionalFilterInfo extends FilterInfo {
    selected: boolean;
    value: number;
    isComparedToMsr: boolean;
    firstMeasureFilters: FilterInfo[];
    secondMeasureFilters: FilterInfo[];
    firstMeasure: KpiInfo;
    secondMeasure: KpiInfo;
    comparisonType: ComparisionType;
    combiningType: CombiningConditionType;
}
