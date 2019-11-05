import { AssetFiltersEnum } from '../enums/asset-filters.enum';
import { AssetSelectionMode } from './asset-selection-mode';
import { AssetTypeEnum } from '../enums/asset-type.enum';

export interface AssetSelectionConfig {
    mode: AssetSelectionMode;
    assetTypesToInclude?: AssetTypeConfiguration[];
    navigatedFolderId?: number;
    isShowPublishedFolder?: boolean;
    isShowLastAccessedFolder?: boolean;
    assetsToExclude?: number[];
    assetsToPreSelect?: number[];
    minimumSelection?: number;
    maximumSelection?: number;
    assetType?: AssetTypeEnum; // In order for validate the name
}

export interface AssetTypeConfiguration {
    assetType: AssetFiltersEnum;
    displayConfig: AssetTypeDisplayConfiguration;
}

interface AssetTypeDisplayConfiguration {
    isShowVisuals?: boolean;
    isShowReports?: boolean;
    isShowDashboards?: boolean;
}

