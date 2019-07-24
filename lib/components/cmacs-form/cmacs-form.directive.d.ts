import { AfterContentInit, ElementRef, OnChanges, OnDestroy, OnInit, QueryList, Renderer2, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { CmacsFormLabelComponent } from './cmacs-form-label.component';
export declare class CmacsFormDirective implements OnInit, OnChanges, AfterContentInit, OnDestroy {
    private elementRef;
    private renderer;
    private nzUpdateHostClassService;
    layout: string;
    cmacsNoColon: boolean;
    cmacsFormLabelComponent: QueryList<CmacsFormLabelComponent>;
    destroy$: Subject<{}>;
    setClassMap(): void;
    updateItemsDefaultColon(): void;
    constructor(elementRef: ElementRef, renderer: Renderer2, nzUpdateHostClassService: NzUpdateHostClassService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
}
