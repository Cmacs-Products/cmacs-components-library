import { ElementRef, OnInit, AfterContentInit, QueryList } from '@angular/core';
import { NzSizeLDSType, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { CmacsButtonComponent } from './cmacs-button.component';
export declare class CmacsButtonGroupComponent implements OnInit, AfterContentInit {
    private nzUpdateHostClassService;
    private elementRef;
    nzSize: NzSizeLDSType;
    overlap: boolean;
    disabled: boolean;
    disabledNav: boolean;
    constructor(nzUpdateHostClassService: NzUpdateHostClassService, elementRef: ElementRef);
    private _size;
    private prefixCls;
    buttons: CmacsButtonComponent[];
    indexBtn: number;
    contentButtons: QueryList<CmacsButtonComponent>;
    setClassMap(): void;
    ngOnInit(): void;
    ngAfterContentInit(): void;
    moveLeft(): void;
    moveRight(): void;
    isDisableLeft(): boolean;
    isDisableRight(): boolean;
}
