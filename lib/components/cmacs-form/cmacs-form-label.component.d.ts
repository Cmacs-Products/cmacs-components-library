import { AfterViewInit, ChangeDetectorRef, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { NzColDirective, NzRowDirective } from 'ng-zorro-antd/grid';
import { CmacsFormItemComponent } from './cmacs-form-item.component';
export declare class CmacsFormLabelComponent extends NzColDirective implements OnDestroy, AfterViewInit {
    private cdr;
    cmacsFor: string;
    cmacsRequired: boolean;
    cmacsNoColon: boolean;
    defaultNoColon: boolean;
    noColon: boolean | string;
    constructor(nzUpdateHostClassService: NzUpdateHostClassService, elementRef: ElementRef, cmacsFormItemComponent: CmacsFormItemComponent, nzRowDirective: NzRowDirective, renderer: Renderer2, cdr: ChangeDetectorRef);
    setDefaultNoColon(value: boolean): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
}
