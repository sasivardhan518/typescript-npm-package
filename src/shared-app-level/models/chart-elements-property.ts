import { ChartDependencyConditionsEnum } from '../enums/chart-properties-dependency-actions.enum';
import { ControlTypesEnum } from '../enums/control-types.enum';

export interface ChartElementsProperty {
    name: string;
    displayName: string;
    type?: ControlTypesEnum;
    inputValues?: ChartElementsPropertiesInputValues[] | (number | string)[];
    dependency?: ChartPropertiesDependency;
    chartPropertyName?: string;
    value?: number | string | boolean | object;
    children?: { [name: string]: ChartElementsProperty };
    autoValue?: number | string | boolean | object;
    defaultValue?: number | string | boolean | object;
    allowNegativeValues?: boolean;
    isValidationRequired?: boolean;
    allowFloatValues?: boolean;
}

export interface ChartElementsPropertiesInputValues {
    name: string | boolean | number;
    displayText: string;
    children?: ChartElementsPropertiesInputValues[];
}

export interface ChartPropertiesDependency {
    [ChartDependencyConditionsEnum.OrConditions]?: Condition[];
    [ChartDependencyConditionsEnum.AndConditions]?: Condition[];
    actions?: ConditionalActions;
}

export interface Condition {
    [ChartDependencyConditionsEnum.OrConditions]?: ConditionLiteral[];
    [ChartDependencyConditionsEnum.AndConditions]?: ConditionLiteral[];
    actions?: ConditionalActions;
}

export interface ConditionLiteral {
    field: string;
    valueIf: any;
}

export interface ConditionalActions {
    [name: string]: boolean;
}
