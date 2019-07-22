import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { AfterContentInit, ChangeDetectorRef, ElementRef, NgZone, OnChanges, OnDestroy, OnInit, QueryList, Renderer2, SimpleChanges } from '@angular/core';
import { NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { NzRowDirective } from 'ng-zorro-antd/grid';
import { CmacsFormExplainComponent } from './cmacs-form-explain.component';
/** should add nz-row directive to host, track https://github.com/angular/angular/issues/8785 **/
export declare class CmacsFormItemComponent extends NzRowDirective implements AfterContentInit, OnDestroy, OnChanges, OnInit, OnDestroy {
    private cdr;
    flex: boolean;
    listOfNzFormExplainComponent: QueryList<CmacsFormExplainComponent>;
    updateFlexStyle(): void;
    constructor(elementRef: ElementRef, renderer: Renderer2, nzUpdateHostClassService: NzUpdateHostClassService, mediaMatcher: MediaMatcher, ngZone: NgZone, platform: Platform, cdr: ChangeDetectorRef);
    ngAfterContentInit(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
