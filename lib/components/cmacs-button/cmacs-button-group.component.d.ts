import { ElementRef, OnInit } from '@angular/core';
import { NzSizeLDSType, NzUpdateHostClassService } from 'ng-zorro-antd/core';
export declare class CmacsButtonGroupComponent implements OnInit {
    private nzUpdateHostClassService;
    private elementRef;
    nzSize: NzSizeLDSType;
    constructor(nzUpdateHostClassService: NzUpdateHostClassService, elementRef: ElementRef);
    private _size;
    private prefixCls;
    setClassMap(): void;
    ngOnInit(): void;
}
