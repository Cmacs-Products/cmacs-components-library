import { ElementRef, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { NzMenuBaseService, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { CmacsSubmenuService } from './cmacs-submenu.service';
export declare class CmacsMenuItemDirective implements OnInit, OnChanges, OnDestroy {
    private updateHostClassService;
    private menuService;
    private submenuService;
    private renderer;
    private elementRef;
    private el;
    private destroy$;
    private originalPadding;
    selected$: Subject<boolean>;
    paddingLeft: number;
    disabled: boolean;
    selected: boolean;
    /** clear all item selected status except this */
    clickMenuItem(e: MouseEvent): void;
    setClassMap(): void;
    setSelectedState(value: boolean): void;
    constructor(updateHostClassService: NzUpdateHostClassService, menuService: NzMenuBaseService, submenuService: CmacsSubmenuService, renderer: Renderer2, elementRef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
