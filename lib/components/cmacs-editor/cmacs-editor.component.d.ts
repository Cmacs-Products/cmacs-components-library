import { EventEmitter, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { NzI18nService } from 'ng-zorro-antd';
export declare class CmacsEditorComponent implements OnDestroy, OnInit {
    private i18n;
    private cdr;
    showEditor: boolean;
    oninit: EventEmitter<any>;
    onchange: EventEmitter<any>;
    onblur: EventEmitter<any>;
    onkeyup: EventEmitter<any>;
    disabled: boolean;
    height: string;
    statusbar: boolean;
    resize: boolean;
    toolbarmobile: string[];
    toolbar: string;
    tinyMceSettings: any;
    private destroy$;
    constructor(i18n: NzI18nService, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
