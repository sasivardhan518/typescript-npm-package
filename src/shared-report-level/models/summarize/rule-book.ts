import { AssertionRuleVariant } from './assertion-rule-variant';
import { CAggregationParams } from './c-aggregation-params';
export interface RuleBook {
    rules: AssertionRuleVariant[];
    crossRuleAggBehavior: CAggregationParams[];
    bookId: number;
    bookName: string;
    domainId: number;
}
