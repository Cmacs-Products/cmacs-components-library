import { ChangeDetectorRef, ElementRef, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { NzSelectService } from 'ng-zorro-antd';
import { CmacsOptionComponent } from './cmacs-option.component';
export declare class CmacsSelectTopControlComponent implements OnInit, OnDestroy {
    private renderer;
    nzSelectService: NzSelectService;
    private cdr;
    noAnimation?: NzNoAnimationDirective;
    inputValue: string;
    isComposing: boolean;
    private destroy$;
    inputElement: ElementRef;
    nzShowSearch: boolean;
    showCustomSearch: boolean;
    nzPlaceHolder: string;
    nzOpen: boolean;
    nzMaxTagCount: number;
    nzAllowClear: boolean;
    nzShowArrow: boolean;
    nzLoading: boolean;
    nzSuffixIcon: TemplateRef<void>;
    nzClearIcon: TemplateRef<void>;
    nzRemoveIcon: TemplateRef<void>;
    nzMaxTagPlaceholder: TemplateRef<{
        $implicit: any[];
    }>;
    nzTokenSeparators: string[];
    onClearSelection(e: MouseEvent): void;
    setInputValue(value: string): void;
    readonly placeHolderDisplay: string;
    readonly selectedValueStyle: {
        [key: string]: string;
    };
    readonly showCustomSearchStyle: {
        [key: string]: string;
    };
    trackValue(_index: number, option: CmacsOptionComponent): any;
    updateWidth(): void;
    removeSelectedValue(option: CmacsOptionComponent, e: MouseEvent): void;
    constructor(renderer: Renderer2, nzSelectService: NzSelectService, cdr: ChangeDetectorRef, noAnimation?: NzNoAnimationDirective);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
