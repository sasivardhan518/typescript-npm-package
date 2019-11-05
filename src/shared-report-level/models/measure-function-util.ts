import { AggregateFunctionEnum } from '../enums/aggregate-function.enum';
import { MeasureFormatTypesEnum } from '../enums/measure-format-types.enum';
import { MeasureFunction } from './measure-function';
import { WindowFunctionEnum } from '../enums/window-function.enum';
import { MeasureFunctionTypeEnum } from '../enums/measure-function- type.enum';
export class MeasureFunctionUtil {
    public static measureFunctions = {
        get sumW(): MeasureFunction {
            return {
                name: WindowFunctionEnum.SumW,
                type: MeasureFunctionTypeEnum.Windowing,
                functionType: MeasureFunctionTypeEnum.Windowing,
                description: 'sumWindowing',
                formatType: MeasureFormatTypesEnum.General
            };
        },
        get avgW(): MeasureFunction {
            return {
                name: WindowFunctionEnum.AvgW,
                type: MeasureFunctionTypeEnum.Windowing,
                functionType: MeasureFunctionTypeEnum.Windowing,
                description: 'avgWindowing',
                formatType: MeasureFormatTypesEnum.Float
            };
        },
        get countW(): MeasureFunction {
            return {
                name: WindowFunctionEnum.CountW,
                type: MeasureFunctionTypeEnum.Windowing,
                functionType: MeasureFunctionTypeEnum.Windowing,
                description: 'countWindowing',
                formatType: MeasureFormatTypesEnum.Number
            };
        },
        get minW(): MeasureFunction {
            return {
                name: WindowFunctionEnum.MinW,
                type: MeasureFunctionTypeEnum.Windowing,
                functionType: MeasureFunctionTypeEnum.Windowing,
                description: 'minWindowing',
                formatType: MeasureFormatTypesEnum.General
            };
        },
        get maxW(): MeasureFunction {
            return {
                name: WindowFunctionEnum.MaxW,
                type: MeasureFunctionTypeEnum.Windowing,
                functionType: MeasureFunctionTypeEnum.Windowing,
                description: 'maxWindowing',
                formatType: MeasureFormatTypesEnum.General
            };
        },
        get varW(): MeasureFunction {
            return {
                name: WindowFunctionEnum.VarW,
                type: MeasureFunctionTypeEnum.Windowing,
                functionType: MeasureFunctionTypeEnum.Windowing,
                description: 'varWindowing',
                formatType: MeasureFormatTypesEnum.Float
            };
        },
        get firstW(): MeasureFunction {
            return {
                name: WindowFunctionEnum.FirstW,
                type: MeasureFunctionTypeEnum.Windowing,
                functionType: MeasureFunctionTypeEnum.Windowing,
                description: 'firstWindowing',
                formatType: MeasureFormatTypesEnum.General
            };
        },
        get lastW(): MeasureFunction {
            return {
                name: WindowFunctionEnum.LastW,
                type: MeasureFunctionTypeEnum.Windowing,
                functionType: MeasureFunctionTypeEnum.Windowing,
                description: 'lastWindowing',
                formatType: MeasureFormatTypesEnum.General
            };
        },
        get sumRT(): MeasureFunction {
            return {
                name: WindowFunctionEnum.SumRT,
                type: MeasureFunctionTypeEnum.RunningTotal,
                functionType: MeasureFunctionTypeEnum.Windowing,
                description: 'sumRunningTotal',
                formatType: MeasureFormatTypesEnum.General
            };
        },
        get avgRT(): MeasureFunction {
            return {
                name: WindowFunctionEnum.AvgRT,
                type: MeasureFunctionTypeEnum.RunningTotal,
                functionType: MeasureFunctionTypeEnum.Windowing,
                description: 'avgRunningTotal',
                formatType: MeasureFormatTypesEnum.Float
            };
        },
        get countRT(): MeasureFunction {
            return {
                name: WindowFunctionEnum.CountRT,
                type: MeasureFunctionTypeEnum.RunningTotal,
                functionType: MeasureFunctionTypeEnum.Windowing,
                description: 'countRunningTotal',
                formatType: MeasureFormatTypesEnum.Number
            };
        },
        get minRT(): MeasureFunction {
            return {
                name: WindowFunctionEnum.MinRT,
                type: MeasureFunctionTypeEnum.RunningTotal,
                functionType: MeasureFunctionTypeEnum.Windowing,
                description: 'minRunningTotal',
                formatType: MeasureFormatTypesEnum.General
            };
        },
        get maxRT(): MeasureFunction {
            return {
                name: WindowFunctionEnum.MaxRT,
                type: MeasureFunctionTypeEnum.RunningTotal,
                functionType: MeasureFunctionTypeEnum.Windowing,
                description: 'maxRunningTotal',
                formatType: MeasureFormatTypesEnum.General
            };
        },
        get varRT(): MeasureFunction {
            return {
                name: WindowFunctionEnum.VarRT,
                type: MeasureFunctionTypeEnum.RunningTotal,
                functionType: MeasureFunctionTypeEnum.Windowing,
                description: 'varRunningTotal',
                formatType: MeasureFormatTypesEnum.Float
            };
        },
        get rank(): MeasureFunction {
            return {
                name: WindowFunctionEnum.Rank,
                type: MeasureFunctionTypeEnum.Ranking,
                functionType: MeasureFunctionTypeEnum.Windowing,
                description: 'rank',
                formatType: MeasureFormatTypesEnum.Number
            };
        },
        get denseRank(): MeasureFunction {
            return {
                name: WindowFunctionEnum.DenseRank,
                type: MeasureFunctionTypeEnum.Ranking,
                functionType: MeasureFunctionTypeEnum.Windowing,
                description: 'denseRank',
                formatType: MeasureFormatTypesEnum.Number
            };
        },
        get rowNumber(): MeasureFunction {
            return {
                name: WindowFunctionEnum.RowNumber,
                type: MeasureFunctionTypeEnum.Ranking,
                functionType: MeasureFunctionTypeEnum.Windowing,
                description: 'rowNumber',
                formatType: MeasureFormatTypesEnum.Number
            };
        },
        get lead(): MeasureFunction {
            return {
                name: WindowFunctionEnum.Lead,
                type: MeasureFunctionTypeEnum.Lead,
                functionType: MeasureFunctionTypeEnum.Windowing,
                description: 'lead',
                formatType: MeasureFormatTypesEnum.General
            };
        },
        get lag(): MeasureFunction {
            return {
                name: WindowFunctionEnum.Lag,
                type: MeasureFunctionTypeEnum.Lead,
                functionType: MeasureFunctionTypeEnum.Windowing,
                description: 'lag',
                formatType: MeasureFormatTypesEnum.General
            };
        },
        get nTile(): MeasureFunction {
            return {
                name: WindowFunctionEnum.NTile,
                type: MeasureFunctionTypeEnum.NTile,
                functionType: MeasureFunctionTypeEnum.Windowing,
                description: 'nTile',
                formatType: MeasureFormatTypesEnum.Number
            };
        },
        get sum(): MeasureFunction {
            return {
                name: AggregateFunctionEnum.Sum,
                type: MeasureFunctionTypeEnum.Regular,
                functionType: MeasureFunctionTypeEnum.Aggregate,
                description: 'sum',
                formatType: MeasureFormatTypesEnum.General
            };
        },
        get avg(): MeasureFunction {
            return {
                name: AggregateFunctionEnum.Avg,
                type: MeasureFunctionTypeEnum.Regular,
                functionType: MeasureFunctionTypeEnum.Aggregate,
                description: 'avg',
                formatType: MeasureFormatTypesEnum.Float
            };
        },
        get min(): MeasureFunction {
            return {
                name: AggregateFunctionEnum.Min,
                type: MeasureFunctionTypeEnum.Regular,
                functionType: MeasureFunctionTypeEnum.Aggregate,
                description: 'min',
                formatType: MeasureFormatTypesEnum.General
            };
        },
        get count(): MeasureFunction {
            return {
                name: AggregateFunctionEnum.Count,
                type: MeasureFunctionTypeEnum.Regular,
                functionType: MeasureFunctionTypeEnum.Aggregate,
                description: 'count',
                formatType: MeasureFormatTypesEnum.Number
            };
        },
        get max(): MeasureFunction {
            return {
                name: AggregateFunctionEnum.Max,
                type: MeasureFunctionTypeEnum.Regular,
                functionType: MeasureFunctionTypeEnum.Aggregate,
                description: 'max',
                formatType: MeasureFormatTypesEnum.General
            };
        },
        get var(): MeasureFunction {
            return {
                name: AggregateFunctionEnum.Var,
                type: MeasureFunctionTypeEnum.Regular,
                functionType: MeasureFunctionTypeEnum.Aggregate,
                description: 'var',
                formatType: MeasureFormatTypesEnum.Float
            };
        },
        get first(): MeasureFunction {
            return {
                name: AggregateFunctionEnum.First,
                type: MeasureFunctionTypeEnum.Regular,
                functionType: MeasureFunctionTypeEnum.Aggregate,
                description: 'first',
                formatType: MeasureFormatTypesEnum.General
            };
        },
        get last(): MeasureFunction {
            return {
                name: AggregateFunctionEnum.Last,
                type: MeasureFunctionTypeEnum.Regular,
                functionType: MeasureFunctionTypeEnum.Aggregate,
                description: 'last',
                formatType: MeasureFormatTypesEnum.General
            };
        },
        get percentile(): MeasureFunction {
            return {
                name: AggregateFunctionEnum.Percentile,
                type: MeasureFunctionTypeEnum.Percentile,
                functionType: MeasureFunctionTypeEnum.Aggregate,
                description: 'percentile',
                formatType: MeasureFormatTypesEnum.General
            };
        },
        get contribution(): MeasureFunction {
            return {
                name: AggregateFunctionEnum.Contribution,
                type: MeasureFunctionTypeEnum.Contribution,
                functionType: MeasureFunctionTypeEnum.Aggregate,
                description: 'contribution',
                formatType: MeasureFormatTypesEnum.Float
            };
        }
    };
}
