import { BVDetailDto } from './BV-detail-dto';
import { PhraseItemFeature } from '../../enums/phrase-item-feature.enum';
import { PhraseItemIdentifier } from '../../enums/phrase-item-identifier.enum';
import { PhraseItemType } from '../../enums/phrase-item-type.enum';
export interface SummarizeItem {
    type: PhraseItemType;
    phrase: string;
    baseTokenName: string;
    branchVariantsToken?: string;
    identifier: PhraseItemIdentifier;
    feature?: PhraseItemFeature;
    branches?: BVDetailDto[];
}
