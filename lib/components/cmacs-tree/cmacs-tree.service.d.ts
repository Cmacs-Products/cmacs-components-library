import { NzTreeBaseService } from 'ng-zorro-antd/core';
export declare class CmacsTreeService extends NzTreeBaseService {
    nzMultiple?: boolean;
    /**
     * search value & expand node
     * should add expandlist
     */
    searchExpand(value: string): void;
}
