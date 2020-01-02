import { EventEmitter } from '@angular/core';
import { UploadFile } from "ng-zorro-antd";
export interface CmacsConfigItemLoader {
    PropertyId: string;
    DisplayName: string;
    Required: boolean;
    MatchedColumn: string;
}
export declare class CmacsXlsxLoaderComponent {
    headers: any[];
    data: any[];
    files: UploadFile[];
    visible: boolean;
    configuration: CmacsConfigItemLoader[];
    modalTitle: string;
    saveBtnLabel: string;
    uploadBtnLabel: string;
    placeholder: string;
    cmacsStyle: {};
    width: number | string;
    configurationChange: EventEmitter<any>;
    onsave: EventEmitter<any>;
    constructor();
    beforeUpload: (file: UploadFile) => boolean;
    onVisibleChange($event: any): void;
    saveConfig(): void;
    parseXlsx(): void;
    createHeaders(data: any): void;
    onSelectionChange($event: any, header: any): void;
    disableSaveBtn(): boolean;
    getLabel(config: any): any;
}
