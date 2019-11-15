import { AfterViewInit, ComponentFactory, ComponentFactoryResolver, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { CmacsTooltipComponent } from './cmacs-tooltip.component';
export declare class CmacsTooltipDirective implements AfterViewInit, OnChanges, OnInit, OnDestroy {
    elementRef: ElementRef;
    hostView: ViewContainerRef;
    resolver: ComponentFactoryResolver;
    renderer: Renderer2;
    tooltip: CmacsTooltipComponent;
    noAnimation?: NzNoAnimationDirective;
    isTooltipOpen: boolean;
    isDynamicTooltip: boolean;
    delayTimer: number | null;
    visible: boolean;
    factory: ComponentFactory<CmacsTooltipComponent>;
    /** Names of properties that should be proxy to child component. */
    protected needProxyProperties: string[];
    protected subs_: Subscription;
    readonly cmacsVisibleChange: EventEmitter<boolean>;
    title: string | TemplateRef<void> | null;
    setTitle: string | TemplateRef<void> | null;
    content: string | TemplateRef<void>;
    mouseEnterDelay: number;
    mouseLeaveDelay: number;
    overlayClassName: string;
    overlayStyle: {
        [key: string]: string;
    };
    trigger: string;
    cmacsVisible: boolean;
    placement: string;
    [property: string]: any;
    constructor(elementRef: ElementRef, hostView: ViewContainerRef, resolver: ComponentFactoryResolver, renderer: Renderer2, tooltip: CmacsTooltipComponent, noAnimation?: NzNoAnimationDirective);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    protected updateCompValue(key: string, value: any): void;
    private show;
    private hide;
    private delayEnterLeave;
    /**
     * Set inputs of child components when this component's inputs change.
     * @param changes
     */
    private updateProxies;
}
