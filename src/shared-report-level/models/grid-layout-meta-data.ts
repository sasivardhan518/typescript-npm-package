import { ChartDataInfo } from '../../shared-app-level/models/chart-data-info';
import { ScalesInfo } from '../../shared-app-level/models/rds-extra-params';

export interface GridLayoutMetaData {
    visualData: ChartDataInfo;
    hideXAxis: boolean;
    hideYAxis: boolean;
    hideChart: boolean;
    cellWidth: number;
    cellHeight: number;
    scalesInfo: ScalesInfo;
}
