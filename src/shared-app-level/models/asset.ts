import { AssetProperties } from './asset-properties';
export interface Asset {
    dbId: number;
    name: string;
    userFullName: string;
    description: string;
    type: string;
    owner: string;
    createdOn: string;
    lastAccessed: string;
    lastExecutionTime: string;
    lastModified: string;
    isStarred: boolean;
    parentFolderId?: number;
    domains?: number[];
    children?: Asset[];
    path: string;
    isPublished: boolean;
    properties?: AssetProperties;
    originalAssetProperties?: AssetProperties;
    isHidden?: boolean;
    isReportTab?: boolean;
    isLastAccessedAsset?: boolean;
}
