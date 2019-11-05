import { CAggregationParams } from './c-aggregation-params';
import { CRuleConditionDto } from './c-rule-condition-dto';
import { SummarizeItem } from './summarize-item';


export interface AssertionRuleVariant {
    ruleId: string;
    isEnabled: boolean;
    assertionRuleId: string;
    ruleConditions: CRuleConditionDto[];
    aggBehavior: CAggregationParams[];
    items: SummarizeItem[];
}
