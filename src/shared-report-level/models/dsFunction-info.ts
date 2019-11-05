import { DsFuncType } from '../enums/ds-func-type.enum';
export interface DsFunctionInfo {
    key: string;
    name: string;
    description: string;
    dSFuncType: DsFuncType;
}
