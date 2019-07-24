/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnDestroy, OnInit, QueryList, TemplateRef } from '@angular/core';
import { CmacsOptionGroupComponent } from './cmacs-option-group.component';
import { CmacsOptionLiComponent } from './cmacs-option-li.component';
import { CmacsOptionComponent } from './cmacs-option.component';
import { CmacsSelectService } from './cmacs-select.service';
export declare class CmacsOptionContainerComponent implements OnDestroy, OnInit {
    nzSelectService: CmacsSelectService;
    private cdr;
    private ngZone;
    private destroy$;
    private lastScrollTop;
    inputValue: string;
    listOfNzOptionLiComponent: QueryList<CmacsOptionLiComponent>;
    dropdownUl: ElementRef;
    inputElement: ElementRef;
    nzNotFoundContent: string;
    showSearch: boolean;
    nzMenuItemSelectedIcon: TemplateRef<void>;
    readonly nzScrollToBottom: EventEmitter<void>;
    readonly onSearch: EventEmitter<string>;
    scrollIntoViewIfNeeded(option: CmacsOptionComponent): void;
    setInputValue(value: string): void;
    trackLabel(_index: number, option: CmacsOptionGroupComponent): string | TemplateRef<void>;
    trackValue(_index: number, option: CmacsOptionComponent): any;
    constructor(nzSelectService: CmacsSelectService, cdr: ChangeDetectorRef, ngZone: NgZone);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
