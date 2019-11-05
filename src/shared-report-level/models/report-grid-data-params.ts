export interface ReportGridDataParams {
    isRecreateGrid?: boolean;
    callBackFunction?: (data: object[], isError?: boolean) => void;
    isColDefsRequired?: boolean;
    nestedFilters?: Object;
    nestedExpandedLevel?: number;
}