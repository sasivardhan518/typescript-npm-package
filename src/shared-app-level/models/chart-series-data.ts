import { ChartIntervalData } from '../../shared-report-level/models/chart-interval-data';
import { ChartItemProperty } from './chart-properties';
import { ChartMetaData } from './chart-data-info';
export interface ChartSeriesData {
    columnValue: ChartItemProperty | Object;
    metaData: ChartMetaData;
    scale: string;
    chartSettings: any;
    precision: number;
    intervalData?: ChartIntervalData;
    isHorizontal?: boolean;
    colorField?: string;
    interval?: number;
}
