export interface ConditionalListGroup {
    start: number;
    end: number;
    level: number;
}

export interface ConditionGrouping {
    className: string;
    colSpan: number;
    level: number;
    width: number;
    levelLabel: string;
    iconInfo?: any;
    data: ConditionalListGroup;
}
