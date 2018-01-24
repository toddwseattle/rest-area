export interface IHttpCall {
    rawURL: string;
    dnsName?: string;
    pathFragments?: string[];
    headers: Map<string, string>;
    params: Map<string, string>;
}
