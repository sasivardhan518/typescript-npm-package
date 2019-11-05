import { ChartElementsProperty } from './chart-elements-property';

export interface ChartElementsGroup {
    name: string;
    properties: {
        [name: string]: ChartElementsProperty
    };
}
