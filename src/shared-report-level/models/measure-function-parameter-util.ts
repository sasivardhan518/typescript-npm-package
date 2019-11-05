import { FunctionParameters } from './function-type-to-params-map';
import { FunctionParametersEnum } from '../enums/function-parameters.enum';
import { SortOnEnum } from '../enums/sort-on.enum';
import { SortOrder } from '../enums/sort-order.enum';
import { WindowFrameEnum } from '../enums/window-frame.enum';
import { MeasureFunctionTypeEnum } from '../enums/measure-function- type.enum';
export class MeasureFunctionParameterUtil {
    public static functionParameters = {
        get [MeasureFunctionTypeEnum.Windowing](): FunctionParameters {
            return {
                [FunctionParametersEnum.Attributes]: [],
                [FunctionParametersEnum.SortOn]: SortOnEnum.Measure,
                [FunctionParametersEnum.SortOrder]: SortOrder.Asc,
                [FunctionParametersEnum.WindowStart]: WindowFrameEnum.UnboundedPreceding,
                [FunctionParametersEnum.WindowEnd]: WindowFrameEnum.UnboundedFollowing
            };
        },
        get [MeasureFunctionTypeEnum.RunningTotal](): FunctionParameters {
            return {
                [FunctionParametersEnum.Attributes]: [],
                [FunctionParametersEnum.SortOn]: SortOnEnum.Measure,
                [FunctionParametersEnum.SortOrder]: SortOrder.Asc
            };
        },
        get [MeasureFunctionTypeEnum.Ranking](): FunctionParameters {
            return {
                [FunctionParametersEnum.Attributes]: [],
                [FunctionParametersEnum.SortOn]: SortOnEnum.Measure,
                [FunctionParametersEnum.SortOrder]: SortOrder.Asc
            };
        },
        get [MeasureFunctionTypeEnum.Lead](): FunctionParameters {
            return {
                [FunctionParametersEnum.Attributes]: [],
                [FunctionParametersEnum.SortOn]: SortOnEnum.Measure,
                [FunctionParametersEnum.SortOrder]: SortOrder.Asc,
                [FunctionParametersEnum.Offset]: 1
            };
        },
        get [MeasureFunctionTypeEnum.NTile](): FunctionParameters {
            return {
                [FunctionParametersEnum.Attributes]: [],
                [FunctionParametersEnum.SortOn]: SortOnEnum.Measure,
                [FunctionParametersEnum.SortOrder]: SortOrder.Asc,
                [FunctionParametersEnum.GroupCount]: 1
            };
        },
        get [MeasureFunctionTypeEnum.Regular](): FunctionParameters {
            return {
                [FunctionParametersEnum.Attributes]: []
            };
        },
        get [MeasureFunctionTypeEnum.Percentile](): FunctionParameters {
            return {
                [FunctionParametersEnum.Attributes]: [],
                [FunctionParametersEnum.SortOrder]: SortOrder.Asc,
                [FunctionParametersEnum.PercentileValue]: 0.5
            };
        },
        get [MeasureFunctionTypeEnum.Contribution](): FunctionParameters {
            return {
                [FunctionParametersEnum.Attributes]: [],
                [FunctionParametersEnum.SortOrder]: SortOrder.Asc,
                [FunctionParametersEnum.ContributionPct]: 0.5
            };
        }
    };
}
