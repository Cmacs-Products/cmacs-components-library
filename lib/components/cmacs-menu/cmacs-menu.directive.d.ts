import { AfterContentInit, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges } from '@angular/core';
import { NzDirectionVHIType, NzMenuBaseService, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { CmacsMenuItemDirective } from './cmacs-menu-item.directive';
import { CmacsSubMenuComponent } from './cmacs-submenu.component';
export declare class CmacsMenuDirective implements AfterContentInit, OnInit, OnChanges, OnDestroy {
    elementRef: ElementRef;
    private menuService;
    private updateHostClassService;
    private destroy$;
    private cacheMode;
    private listOfOpenedCmacsSubMenuComponent;
    listOfCmacsMenuItemDirective: QueryList<CmacsMenuItemDirective>;
    listOfCmacsSubMenuComponent: QueryList<CmacsSubMenuComponent>;
    inlineIndent: number;
    theme: 'light' | 'dark';
    mode: NzDirectionVHIType;
    inDropDown: boolean;
    inlineCollapsed: boolean;
    selectable: boolean;
    readonly click: EventEmitter<CmacsMenuItemDirective>;
    updateInlineCollapse(): void;
    setClassMap(): void;
    constructor(elementRef: ElementRef, menuService: NzMenuBaseService, updateHostClassService: NzUpdateHostClassService);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
