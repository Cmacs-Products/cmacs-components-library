import { EventEmitter, OnChanges, OnInit, SimpleChanges, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { NzI18nService } from "ng-zorro-antd";
import { MoveableListItem } from "../cmacs-moveable-list/cmacs-moveable-list.component";
import { CookieService } from "ngx-cookie-service";
export declare class CmacsGridConfigurationModalComponent implements OnInit, OnChanges, OnDestroy {
    private cookies;
    private cdr;
    private i18n;
    visible: boolean;
    modalTitle: string;
    header: string;
    saveBtnLabel: string;
    cmacsStyle: {};
    gridID: string;
    data: any;
    visibleChange: EventEmitter<boolean>;
    dataChange: EventEmitter<any>;
    origin: any;
    private destroy$;
    constructor(cookies: CookieService, cdr: ChangeDetectorRef, i18n: NzI18nService);
    ngOnDestroy(): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onDataChange($event: MoveableListItem[]): void;
    saveConfig(): void;
    getIndexCookie(): boolean;
    onVisibleChange($event: any): void;
}
