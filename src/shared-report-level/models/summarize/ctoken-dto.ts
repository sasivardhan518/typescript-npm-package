import { TokenOutputType } from '../../enums/token-output-type.enum';
import { BVDetailDto } from './BV-detail-dto';
export interface CtokenDto {
    name: string;
    outputType: TokenOutputType;
    options: any[];
    baseTokenForBranch: string;
    branch: BVDetailDto[];
}
