/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, ElementRef, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { CmacsOptionComponent } from './cmacs-option.component';
import { CmacsSelectService } from './cmacs-select.service';
export declare class CmacsOptionLiComponent implements OnInit, OnDestroy {
    private elementRef;
    nzSelectService: CmacsSelectService;
    private cdr;
    el: HTMLElement;
    selected: boolean;
    active: boolean;
    destroy$: Subject<{}>;
    highlightKeys: any[];
    nzOption: CmacsOptionComponent;
    nzMenuItemSelectedIcon: TemplateRef<void>;
    clickOption(): void;
    constructor(elementRef: ElementRef, nzSelectService: CmacsSelectService, cdr: ChangeDetectorRef, renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
