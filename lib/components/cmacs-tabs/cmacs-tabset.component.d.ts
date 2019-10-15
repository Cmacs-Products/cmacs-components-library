/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/** get some code from https://github.com/angular/material2 */
import { AfterContentChecked, AfterContentInit, AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, QueryList, Renderer2, SimpleChanges, TemplateRef } from '@angular/core';
import { NzSizeLDSType, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { CmacsTabComponent } from './cmacs-tab.component';
import { CmacsTabsNavComponent } from './cmacs-tabs-nav.component';
export interface AnimatedInterface {
    inkBar: boolean;
    tabPane: boolean;
}
export declare class TabChangeEvent {
    index: number;
    tab: CmacsTabComponent;
}
export declare type TabPosition = 'top' | 'bottom' | 'left' | 'right';
export declare type TabPositionMode = 'horizontal' | 'vertical';
export declare type TabType = 'line' | 'card';
export declare type CmacsTabType = 'text' | 'icon' | 'ems' | 'schedule' | 'property';
export declare class CmacsTabsetComponent implements AfterContentChecked, OnInit, AfterViewInit, OnChanges, AfterContentInit, OnDestroy {
    private renderer;
    private nzUpdateHostClassService;
    private elementRef;
    private cdr;
    private indexToSelect;
    private el;
    private _selectedIndex;
    /** Subscription to tabs being added/removed. */
    private tabsSubscription;
    /** Subscription to changes in the tab labels. */
    private tabLabelSubscription;
    tabPositionMode: TabPositionMode;
    listOfNzTabComponent: QueryList<CmacsTabComponent>;
    tabsNavComponent: CmacsTabsNavComponent;
    tabContent: ElementRef;
    tabBarExtraContent: TemplateRef<void>;
    showPagination: boolean;
    animated: AnimatedInterface | boolean;
    hideAll: boolean;
    tabPosition: TabPosition;
    size: NzSizeLDSType;
    tabBarGutter: number;
    tabBarStyle: {
        [key: string]: string;
    };
    type: TabType;
    cmacsType: CmacsTabType;
    readonly onNextClick: EventEmitter<void>;
    readonly onPrevClick: EventEmitter<void>;
    readonly selectChange: EventEmitter<TabChangeEvent>;
    readonly selectedIndexChange: EventEmitter<number>;
    selectedIndex: number | null;
    readonly inkBarAnimated: boolean;
    readonly tabPaneAnimated: boolean;
    setPosition(value: TabPosition): void;
    setClassMap(): void;
    clickLabel(index: number, disabled: boolean): void;
    createChangeEvent(index: number): TabChangeEvent;
    /** Clamps the given index to the bounds of 0 and the tabs length. */
    private clampTabIndex;
    private subscribeToTabLabels;
    constructor(renderer: Renderer2, nzUpdateHostClassService: NzUpdateHostClassService, elementRef: ElementRef, cdr: ChangeDetectorRef);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngAfterContentChecked(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
}
