import { AfterContentInit, ElementRef, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges, TemplateRef, EventEmitter } from '@angular/core';
import { NgClassType, NzSizeDSType } from 'ng-zorro-antd/core';
import { CmacsStepComponent } from './cmacs-step.component';
export declare type NzDirectionType = 'horizontal' | 'vertical';
export declare type NzStatusType = 'wait' | 'process' | 'finish' | 'error';
export declare class CmacsWizardComponent implements OnChanges, OnInit, OnDestroy, AfterContentInit {
    private elem;
    steps: QueryList<CmacsStepComponent>;
    current: number;
    direction: NzDirectionType;
    labelPlacement: 'horizontal' | 'vertical';
    size: NzSizeDSType;
    startIndex: number;
    clickable: boolean;
    status: NzStatusType;
    indexChange: EventEmitter<number>;
    nzProgressDot: boolean | TemplateRef<{
        $implicit: TemplateRef<void>;
        status: string;
        index: number;
    }>;
    showProcessDot: boolean;
    customProcessDotTemplate: TemplateRef<{
        $implicit: TemplateRef<void>;
        status: string;
        index: number;
    }>;
    classMap: NgClassType;
    private destroy$;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
    private updateChildrenSteps;
    constructor(elem: ElementRef);
    private setClassMap;
}
