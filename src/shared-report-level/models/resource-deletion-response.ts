export interface ResourceDeletionResponse {
    hasDependants: boolean;
    impactedDependants: ImpactingResourceTypesEnum[];
    isDeleted: boolean;
}

interface ImpactingResourceTypesEnum {
    [key: string]: number[];
}
