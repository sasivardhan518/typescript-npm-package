import { AggregationType } from "../../enums/aggregation-type.enum";

export interface CAggregationParams {
    matchingTokensForAgg: string[];
    aggType: AggregationType;
    maxAggregations: number;
    conjuctionsOptions: string[];
    makeSubjectPlural: boolean;
    isModifierPresent: boolean;
}
