import { SummaryComparisonType } from '../../enums/summary-comparison-type.enum';
export interface BVDetailDto {
    comparison: SummaryComparisonType;
    value: object;
    options: string[];
    outputs: string[];
}
