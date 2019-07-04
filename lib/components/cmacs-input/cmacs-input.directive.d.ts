import { ElementRef, Renderer2 } from '@angular/core';
import { NgControl } from '@angular/forms';
import { NzSizeLDSType } from 'ng-zorro-antd/core';
export declare class CmacsInputDirective {
    ngControl: NgControl;
    private _disabled;
    size: NzSizeLDSType;
    disabled: boolean;
    constructor(ngControl: NgControl, renderer: Renderer2, elementRef: ElementRef);
}
