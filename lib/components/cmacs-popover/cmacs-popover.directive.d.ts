import { ComponentFactory, ComponentFactoryResolver, ElementRef, Renderer2, ViewContainerRef } from '@angular/core';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { CmacsPopoverComponent } from "./cmacs-popover.component";
import { CmacsTooltipDirective } from "../cmacs-tooltip/cmacs-tooltip.directive";
export declare class CmacsPopoverDirective extends CmacsTooltipDirective {
    noAnimation?: NzNoAnimationDirective;
    factory: ComponentFactory<CmacsPopoverComponent>;
    constructor(elementRef: ElementRef, hostView: ViewContainerRef, resolver: ComponentFactoryResolver, renderer: Renderer2, tooltip: CmacsPopoverComponent, noAnimation?: NzNoAnimationDirective);
}
