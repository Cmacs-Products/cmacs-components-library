import { ChangeDetectorRef, ElementRef, Renderer2, TemplateRef } from '@angular/core';
import { NgClassType } from 'ng-zorro-antd/core';
export declare class CmacsStepComponent {
    private cdr;
    processDotTemplate: TemplateRef<void>;
    title: string | TemplateRef<void>;
    secondary: boolean;
    description: string | TemplateRef<void>;
    status: string;
    isCustomStatus: boolean;
    private _status;
    nzIcon: NgClassType | TemplateRef<void>;
    oldAPIIcon: boolean;
    isIconString: boolean;
    private _icon;
    customProcessTemplate: TemplateRef<{
        $implicit: TemplateRef<void>;
        status: string;
        index: number;
    }>;
    direction: string;
    index: number;
    last: boolean;
    outStatus: string;
    showProcessDot: boolean;
    currentIndex: number;
    private _currentIndex;
    constructor(cdr: ChangeDetectorRef, renderer: Renderer2, elementRef: ElementRef);
    markForCheck(): void;
}
