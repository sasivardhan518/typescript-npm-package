import { ColorConditionDsInfo } from './color-condition-ds-info';
import { NewAttribMsrDSFunctions } from './new-attrib-msrds-functions';

export interface DsFunctions {
    newAttribMsrDSFunctions: NewAttribMsrDSFunctions[];
    logicalDSFunctions: ColorConditionDsInfo[];
}
