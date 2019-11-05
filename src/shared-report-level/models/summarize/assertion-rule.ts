export interface AssertionRule {
    outputNames: string[];
    ruleName: string;
    weight: number;
    myAssertionType: string;
    isAggregateAssertionCreator: boolean;
    description: string;
}
