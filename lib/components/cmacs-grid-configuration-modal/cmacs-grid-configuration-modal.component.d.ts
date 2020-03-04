import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MoveableListItem } from "../cmacs-moveable-list/cmacs-moveable-list.component";
import { CookieService } from "ngx-cookie-service";
export declare class CmacsGridConfigurationModalComponent implements OnInit, OnChanges {
    private cookies;
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
    constructor(cookies: CookieService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onDataChange($event: MoveableListItem[]): void;
    saveConfig(): void;
    onVisibleChange($event: any): void;
}
