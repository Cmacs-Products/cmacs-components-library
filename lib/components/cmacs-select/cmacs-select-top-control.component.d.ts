import { ChangeDetectorRef, ElementRef, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, TemplateRef } from '@angular/core';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { CmacsSelectService } from './cmacs-select.service';
import { CmacsOptionComponent } from './cmacs-option.component';
export declare class CmacsSelectTopControlComponent implements OnInit, OnDestroy, OnChanges {
    private renderer;
    nzSelectService: CmacsSelectService;
    private cdr;
    noAnimation?: NzNoAnimationDirective;
    inputValue: string;
    searchValue: string;
    isComposing: boolean;
    private destroy$;
    inputElement: ElementRef;
    nzShowSearch: boolean;
    showCustomSearch: boolean;
    showCmacsSearch: boolean;
    nzPlaceHolder: string;
    nzOpen: boolean;
    action: boolean;
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
    constructor(renderer: Renderer2, nzSelectService: CmacsSelectService, cdr: ChangeDetectorRef, noAnimation?: NzNoAnimationDirective);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
