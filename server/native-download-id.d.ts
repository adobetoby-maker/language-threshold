export declare function nativeDownloadId(site: string, email: string, resourceId: string, bucket: number, key: string): string | null

export declare const PRODUCT_MARKETING_VERSION: string
export declare const PRODUCT_MARKETING_COPY: string
export declare function productMarketingId(site: string,email: string,resourceId: string,bucket: number,key: string): string | null
export declare function marketingGateState(site: string): Promise<{enabled:boolean}>
