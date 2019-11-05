import { AssetTypeEnum } from '../../shared-app-level/enums/asset-type.enum';

export interface TargetAssetInfo {
    assetId: string;
    name: string;
    domain?: number;
    tabName?: string;
    type?: AssetTypeEnum;
    parentFolderId?: number;
}
