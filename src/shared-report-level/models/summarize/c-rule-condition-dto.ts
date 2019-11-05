import { SummaryComparisonType } from '../../enums/summary-comparison-type.enum';
export interface CRuleConditionDto {
    token: string;
    comparisonType: SummaryComparisonType;
    value: number;
    options: any[];
}
