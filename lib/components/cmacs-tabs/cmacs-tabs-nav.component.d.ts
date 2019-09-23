/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/** code from https://github.com/angular/material2 */
import { Direction, Directionality } from '@angular/cdk/bidi';
import { AfterContentChecked, AfterContentInit, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnDestroy, QueryList, Renderer2, TemplateRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { CmacsTabLabelDirective } from './cmacs-tab-label.directive';
import { CmacsTabsInkBarDirective } from './cmacs-tabs-ink-bar.directive';
import { TabPositionMode } from './cmacs-tabset.component';
export declare type ScrollDirection = 'after' | 'before';
export declare class CmacsTabsNavComponent implements AfterContentChecked, AfterContentInit, OnDestroy {
    elementRef: ElementRef;
    private ngZone;
    private renderer;
    private cdr;
    private dir;
    private _tabPositionMode;
    private _scrollDistance;
    private _selectedIndex;
    /** Cached text content of the header. */
    private currentTextContent;
    showPaginationControls: boolean;
    disableScrollAfter: boolean;
    disableScrollBefore: boolean;
    selectedIndexChanged: boolean;
    realignInkBar: Subscription | null;
    tabLabelCount: number;
    scrollDistanceChanged: boolean;
    listOfNzTabLabelDirective: QueryList<CmacsTabLabelDirective>;
    tabsInkBarDirective: CmacsTabsInkBarDirective;
    navContainerElement: ElementRef;
    navListElement: ElementRef;
    scrollListElement: ElementRef;
    readonly onNextClick: EventEmitter<void>;
    readonly onPrevClick: EventEmitter<void>;
    tabBarExtraContent: TemplateRef<void>;
    animated: boolean;
    hideBar: boolean;
    showPagination: boolean;
    type: string;
    cmacsType: string;
    positionMode: TabPositionMode;
    selectedIndex: number;
    constructor(elementRef: ElementRef, ngZone: NgZone, renderer: Renderer2, cdr: ChangeDetectorRef, dir: Directionality);
    onContentChanges(): void;
    scrollHeader(scrollDir: ScrollDirection): void;
    ngAfterContentChecked(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    updateTabScrollPosition(): void;
    updatePagination(): void;
    checkPaginationEnabled(): void;
    scrollToLabel(labelIndex: number): void;
    checkScrollingControls(): void;
    /**
     * Determines what is the maximum length in pixels that can be set for the scroll distance. This
     * is equal to the difference in width between the tab list container and tab header container.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */
    getMaxScrollDistance(): number;
    /** Sets the distance in pixels that the tab header should be transformed in the X-axis. */
    scrollDistance: number;
    readonly viewWidthHeightPix: number;
    readonly tabListScrollWidthHeightPix: number;
    readonly tabListScrollOffSetWidthHeight: number;
    getLayoutDirection(): Direction;
    alignInkBarToSelectedTab(): void;
    isCmacsType(type: string): boolean;
}
