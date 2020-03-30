import { EventEmitter, OnChanges, SimpleChanges, OnInit, ElementRef } from '@angular/core';
export interface CmacsConfigItemLoader {
    PropertyId: string;
    DisplayName: string;
    Required: boolean;
    MatchedColumn: string;
}
export declare class CmacsXlsxLoaderComponent implements OnInit, OnChanges {
    headers: any[];
    data: any[];
    configuration: CmacsConfigItemLoader[];
    modalTitle: string;
    visible: boolean;
    saveBtnLabel: string;
    cancelBtnLabel: string;
    placeholder: string;
    cmacsStyle: {};
    files: any[];
    width: number | string;
    infoTemplate: ElementRef;
    configurationChange: EventEmitter<any>;
    onsave: EventEmitter<any>;
    visibleChange: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onVisibleChange($event: any): void;
    saveConfig(): void;
    handleCancel(): void;
    parseXlsx(): void;
    createHeaders(data: any): void;
    onSelectionChange($event: any, header: any): void;
    disableSaveBtn(): boolean;
    getLabel(config: any): any;
}
