import { ElementRef, OnChanges, OnInit, TemplateRef } from '@angular/core';
import { NzUpdateHostClassService } from 'ng-zorro-antd/core';
export declare class CmacsDividerComponent implements OnChanges, OnInit {
    elementRef: ElementRef;
    private nzUpdateHostClassService;
    text: string | TemplateRef<void>;
    type: 'horizontal' | 'vertical';
    orientation: 'left' | 'right' | '';
    dashed: boolean;
    private setClass;
    constructor(elementRef: ElementRef, nzUpdateHostClassService: NzUpdateHostClassService);
    ngOnChanges(): void;
    ngOnInit(): void;
}
