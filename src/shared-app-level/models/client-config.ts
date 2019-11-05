export interface ClientConfig {
    lastAccessedAssetsCount: number;
    shortDateFormat: string;
    fullDateFormat: string;
    unreadNotificationsMaxCountDisplay: number;
    userIdleTimeInMinutes: number;
    defaultLanguage: string;
    minInputNameLength: number;
    maxInputNameLength: number;
    defaultColorPickerCode: string;
    defaultTextColor: string;
    homePageTileColors: string[];
    presetColors: string[];
    notificationTimeoutInMilliSeconds: number;
    reportGridMaxColumns: number;
    recentColorsMaxCountInPicker: number;
    isEnableSummarize: boolean;
    exclusiveBoundItems: object[];
    exclusiveInitialBoundItems: object[];
    maxLegendsCount: number;
    isEnableOfflineViewer: boolean;
    exportNotificationTimeoutInMilliSeconds: number;
    tileChartMaxAllowedColCount: number;
    bridgeChartStepCount: number;
    dataPointsLimit: object;
}


