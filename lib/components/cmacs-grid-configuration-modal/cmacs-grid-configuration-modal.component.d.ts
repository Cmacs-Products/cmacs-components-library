import { EventEmitter } from '@angular/core';
import { MoveableListItem } from "../cmacs-moveable-list/cmacs-moveable-list.component";
import { CookieService } from "ngx-cookie-service";
export declare class CmacsGridConfigurationModalComponent {
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
    constructor(cookies: CookieService);
    onDataChange($event: MoveableListItem[]): void;
    saveConfig(): void;
    onVisibleChange($event: any): void;
}
