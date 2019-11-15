/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ComponentFactoryResolver, Directive, ElementRef, EventEmitter, Host, Input, Optional, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { isNotNil, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { CmacsTooltipComponent } from './cmacs-tooltip.component';
export class CmacsTooltipDirective {
    // tslint:disable-line:no-any
    /**
     * @param {?} elementRef
     * @param {?} hostView
     * @param {?} resolver
     * @param {?} renderer
     * @param {?} tooltip
     * @param {?=} noAnimation
     */
    constructor(elementRef, hostView, resolver, renderer, tooltip, noAnimation) {
        this.elementRef = elementRef;
        this.hostView = hostView;
        this.resolver = resolver;
        this.renderer = renderer;
        this.tooltip = tooltip;
        this.noAnimation = noAnimation;
        // [NOTE] Here hard coded, and nzTitle used only under NzTooltipDirective currently.
        this.isTooltipOpen = false;
        this.isDynamicTooltip = false; // Indicate whether current tooltip is dynamic created
        this.factory = this.resolver.resolveComponentFactory(CmacsTooltipComponent);
        /**
         * Names of properties that should be proxy to child component.
         */
        this.needProxyProperties = [
            'title',
            'content',
            'overlayClassName',
            'overlayStyle',
            'mouseEnterDelay',
            'mouseLeaveDelay',
            'cmacsVisible',
            'trigger',
            'placement'
        ];
        this.subs_ = new Subscription();
        this.cmacsVisibleChange = new EventEmitter();
    }
    /**
     * @param {?} title
     * @return {?}
     */
    set setTitle(title) {
        this.title = title;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.updateProxies(changes);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // Support faster tooltip mode: <a nz-tooltip="xxx"></a>. [NOTE] Used only under NzTooltipDirective currently.
        if (!this.tooltip) {
            /** @type {?} */
            const tooltipComponent = this.hostView.createComponent(this.factory);
            this.tooltip = tooltipComponent.instance;
            this.tooltip.noAnimation = this.noAnimation;
            // Remove element when use directive https://github.com/NG-ZORRO/ng-zorro-antd/issues/1967
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), tooltipComponent.location.nativeElement);
            this.isDynamicTooltip = true;
            this.needProxyProperties.forEach((/**
             * @param {?} property
             * @return {?}
             */
            property => this.updateCompValue(property, this[property])));
            /** @type {?} */
            const visible_ = this.tooltip.cmacsVisibleChange.pipe(distinctUntilChanged()).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            data => {
                this.visible = data;
                this.cmacsVisibleChange.emit(data);
            }));
            this.subs_.add(visible_);
        }
        this.tooltip.setOverlayOrigin(this);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.tooltip.trigger === 'hover') {
            /** @type {?} */
            let overlayElement;
            this.renderer.listen(this.elementRef.nativeElement, 'mouseenter', (/**
             * @return {?}
             */
            () => this.delayEnterLeave(true, true, this.tooltip.mouseEnterDelay)));
            this.renderer.listen(this.elementRef.nativeElement, 'mouseleave', (/**
             * @return {?}
             */
            () => {
                this.delayEnterLeave(true, false, this.tooltip.mouseLeaveDelay);
                if (this.tooltip.overlay.overlayRef && !overlayElement) {
                    // NOTE: we bind events under "mouseleave" due to the overlayRef is only created after the overlay was completely shown up
                    overlayElement = this.tooltip.overlay.overlayRef.overlayElement;
                    this.renderer.listen(overlayElement, 'mouseenter', (/**
                     * @return {?}
                     */
                    () => this.delayEnterLeave(false, true)));
                    this.renderer.listen(overlayElement, 'mouseleave', (/**
                     * @return {?}
                     */
                    () => this.delayEnterLeave(false, false)));
                }
            }));
        }
        else if (this.tooltip.trigger === 'focus') {
            this.renderer.listen(this.elementRef.nativeElement, 'focus', (/**
             * @return {?}
             */
            () => this.show()));
            this.renderer.listen(this.elementRef.nativeElement, 'blur', (/**
             * @return {?}
             */
            () => this.hide()));
        }
        else if (this.tooltip.trigger === 'click') {
            this.renderer.listen(this.elementRef.nativeElement, 'click', (/**
             * @param {?} e
             * @return {?}
             */
            e => {
                e.preventDefault();
                this.show();
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subs_.unsubscribe();
    }
    // tslint:disable-next-line:no-any
    /**
     * @protected
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    updateCompValue(key, value) {
        if (this.isDynamicTooltip && isNotNil(value)) {
            this.tooltip[key] = value;
        }
    }
    /**
     * @private
     * @return {?}
     */
    show() {
        this.tooltip.show();
        this.isTooltipOpen = true;
    }
    /**
     * @private
     * @return {?}
     */
    hide() {
        this.tooltip.hide();
        this.isTooltipOpen = false;
    }
    /**
     * @private
     * @param {?} isOrigin
     * @param {?} isEnter
     * @param {?=} delay
     * @return {?}
     */
    delayEnterLeave(isOrigin, isEnter, delay = -1) {
        if (this.delayTimer) {
            // Clear timer during the delay time
            clearTimeout(this.delayTimer);
            this.delayTimer = null;
        }
        else if (delay > 0) {
            this.delayTimer = setTimeout((/**
             * @return {?}
             */
            () => {
                this.delayTimer = null;
                isEnter ? this.show() : this.hide();
            }), delay * 1000);
        }
        else {
            isEnter && isOrigin ? this.show() : this.hide(); // [Compatible] The "isOrigin" is used due to the tooltip will not hide immediately (may caused by the fade-out animation)
        }
    }
    /**
     * Set inputs of child components when this component's inputs change.
     * @private
     * @param {?} changes
     * @return {?}
     */
    updateProxies(changes) {
        if (this.tooltip) {
            Object.keys(changes).forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => {
                /** @type {?} */
                const change = changes[key];
                if (change) {
                    this.updateCompValue(key, change.currentValue);
                }
            }));
            if (changes.setTitle) {
                this.title = changes.setTitle.currentValue;
                this.updateCompValue('title', changes.setTitle.currentValue);
            }
            this.tooltip.cdr.markForCheck(); // Manually trigger change detection of component.
        }
    }
}
CmacsTooltipDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cmacs-tooltip]',
                exportAs: 'cmacsTooltip',
                host: {
                    '[class.ant-tooltip-open]': 'isTooltipOpen'
                }
            },] }
];
/** @nocollapse */
CmacsTooltipDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver },
    { type: Renderer2 },
    { type: CmacsTooltipComponent, decorators: [{ type: Optional }] },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
CmacsTooltipDirective.propDecorators = {
    cmacsVisibleChange: [{ type: Output }],
    title: [{ type: Input, args: ['cmacs-tooltip',] }],
    setTitle: [{ type: Input, args: ['title',] }],
    content: [{ type: Input }],
    mouseEnterDelay: [{ type: Input }],
    mouseLeaveDelay: [{ type: Input }],
    overlayClassName: [{ type: Input }],
    overlayStyle: [{ type: Input }],
    trigger: [{ type: Input }],
    cmacsVisible: [{ type: Input }],
    placement: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CmacsTooltipDirective.prototype.isTooltipOpen;
    /** @type {?} */
    CmacsTooltipDirective.prototype.isDynamicTooltip;
    /** @type {?} */
    CmacsTooltipDirective.prototype.delayTimer;
    /** @type {?} */
    CmacsTooltipDirective.prototype.visible;
    /** @type {?} */
    CmacsTooltipDirective.prototype.factory;
    /**
     * Names of properties that should be proxy to child component.
     * @type {?}
     * @protected
     */
    CmacsTooltipDirective.prototype.needProxyProperties;
    /**
     * @type {?}
     * @protected
     */
    CmacsTooltipDirective.prototype.subs_;
    /** @type {?} */
    CmacsTooltipDirective.prototype.cmacsVisibleChange;
    /** @type {?} */
    CmacsTooltipDirective.prototype.title;
    /** @type {?} */
    CmacsTooltipDirective.prototype.content;
    /** @type {?} */
    CmacsTooltipDirective.prototype.mouseEnterDelay;
    /** @type {?} */
    CmacsTooltipDirective.prototype.mouseLeaveDelay;
    /** @type {?} */
    CmacsTooltipDirective.prototype.overlayClassName;
    /** @type {?} */
    CmacsTooltipDirective.prototype.overlayStyle;
    /** @type {?} */
    CmacsTooltipDirective.prototype.trigger;
    /** @type {?} */
    CmacsTooltipDirective.prototype.cmacsVisible;
    /** @type {?} */
    CmacsTooltipDirective.prototype.placement;
    /** @type {?} */
    CmacsTooltipDirective.prototype.elementRef;
    /** @type {?} */
    CmacsTooltipDirective.prototype.hostView;
    /** @type {?} */
    CmacsTooltipDirective.prototype.resolver;
    /** @type {?} */
    CmacsTooltipDirective.prototype.renderer;
    /** @type {?} */
    CmacsTooltipDirective.prototype.tooltip;
    /** @type {?} */
    CmacsTooltipDirective.prototype.noAnimation;
    /* Skipping unhandled member: [property: string]: any;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXRvb2x0aXAvY21hY3MtdG9vbHRpcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFHTCx3QkFBd0IsRUFDeEIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFHVCxnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFTbEUsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7Ozs7OztJQTBDaEMsWUFDUyxVQUFzQixFQUN0QixRQUEwQixFQUMxQixRQUFrQyxFQUNsQyxRQUFtQixFQUNQLE9BQThCLEVBQ3RCLFdBQW9DO1FBTHhELGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7UUFDMUIsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7UUFDbEMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNQLFlBQU8sR0FBUCxPQUFPLENBQXVCO1FBQ3RCLGdCQUFXLEdBQVgsV0FBVyxDQUF5Qjs7UUE5Q2pFLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBQy9CLHFCQUFnQixHQUFHLEtBQUssQ0FBQyxDQUFDLHNEQUFzRDtRQUdoRixZQUFPLEdBQTRDLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMscUJB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Q0wsS0FBSzsyQkFDTCxLQUFLO3NCQUNMLEtBQUs7MkJBQ0wsS0FBSzt3QkFDTCxLQUFLOzs7O0lBcENOLDhDQUErQjs7SUFDL0IsaURBQXlCOztJQUN6QiwyQ0FBMEI7O0lBQzFCLHdDQUFpQjs7SUFDakIsd0NBQWdIOzs7Ozs7SUFHaEgsb0RBVUU7Ozs7O0lBRUYsc0NBQXFDOztJQUVyQyxtREFBb0U7O0lBRXBFLHNDQUFpRTs7SUFNakUsd0NBQTZDOztJQUM3QyxnREFBaUM7O0lBQ2pDLGdEQUFpQzs7SUFDakMsaURBQWtDOztJQUNsQyw2Q0FBaUQ7O0lBQ2pELHdDQUF5Qjs7SUFDekIsNkNBQStCOztJQUMvQiwwQ0FBMkI7O0lBS3pCLDJDQUE2Qjs7SUFDN0IseUNBQWlDOztJQUNqQyx5Q0FBeUM7O0lBQ3pDLHlDQUEwQjs7SUFDMUIsd0NBQWlEOztJQUNqRCw0Q0FBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ29tcG9uZW50RmFjdG9yeSxcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IGlzTm90TmlsLCBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IENtYWNzVG9vbHRpcENvbXBvbmVudCB9IGZyb20gJy4vY21hY3MtdG9vbHRpcC5jb21wb25lbnQnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbY21hY3MtdG9vbHRpcF0nLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NUb29sdGlwJyxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC10b29sdGlwLW9wZW5dJzogJ2lzVG9vbHRpcE9wZW4nXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NUb29sdGlwRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgLy8gW05PVEVdIEhlcmUgaGFyZCBjb2RlZCwgYW5kIG56VGl0bGUgdXNlZCBvbmx5IHVuZGVyIE56VG9vbHRpcERpcmVjdGl2ZSBjdXJyZW50bHkuXHJcbiAgaXNUb29sdGlwT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGlzRHluYW1pY1Rvb2x0aXAgPSBmYWxzZTsgLy8gSW5kaWNhdGUgd2hldGhlciBjdXJyZW50IHRvb2x0aXAgaXMgZHluYW1pYyBjcmVhdGVkXHJcbiAgZGVsYXlUaW1lcjogbnVtYmVyIHwgbnVsbDsgLy8gVGltZXIgZm9yIGRlbGF5IGVudGVyL2xlYXZlXHJcbiAgdmlzaWJsZTogYm9vbGVhbjtcclxuICBmYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PENtYWNzVG9vbHRpcENvbXBvbmVudD4gPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KENtYWNzVG9vbHRpcENvbXBvbmVudCk7XHJcblxyXG4gIC8qKiBOYW1lcyBvZiBwcm9wZXJ0aWVzIHRoYXQgc2hvdWxkIGJlIHByb3h5IHRvIGNoaWxkIGNvbXBvbmVudC4gKi9cclxuICBwcm90ZWN0ZWQgbmVlZFByb3h5UHJvcGVydGllcyA9IFtcclxuICAgICd0aXRsZScsXHJcbiAgICAnY29udGVudCcsXHJcbiAgICAnb3ZlcmxheUNsYXNzTmFtZScsXHJcbiAgICAnb3ZlcmxheVN0eWxlJyxcclxuICAgICdtb3VzZUVudGVyRGVsYXknLFxyXG4gICAgJ21vdXNlTGVhdmVEZWxheScsXHJcbiAgICAnY21hY3NWaXNpYmxlJyxcclxuICAgICd0cmlnZ2VyJyxcclxuICAgICdwbGFjZW1lbnQnXHJcbiAgXTtcclxuXHJcbiAgcHJvdGVjdGVkIHN1YnNfID0gbmV3IFN1YnNjcmlwdGlvbigpO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY21hY3NWaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBASW5wdXQoJ2NtYWNzLXRvb2x0aXAnKSB0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsO1xyXG5cclxuICBASW5wdXQoJ3RpdGxlJykgc2V0IHNldFRpdGxlKHRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIGNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG1vdXNlRW50ZXJEZWxheTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG1vdXNlTGVhdmVEZWxheTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG92ZXJsYXlDbGFzc05hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBvdmVybGF5U3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbiAgQElucHV0KCkgdHJpZ2dlcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGNtYWNzVmlzaWJsZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBwbGFjZW1lbnQ6IHN0cmluZztcclxuXHJcbiAgW3Byb3BlcnR5OiBzdHJpbmddOiBhbnk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwdWJsaWMgaG9zdFZpZXc6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwdWJsaWMgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHRvb2x0aXA6IENtYWNzVG9vbHRpcENvbXBvbmVudCxcclxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVQcm94aWVzKGNoYW5nZXMpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAvLyBTdXBwb3J0IGZhc3RlciB0b29sdGlwIG1vZGU6IDxhIG56LXRvb2x0aXA9XCJ4eHhcIj48L2E+LiBbTk9URV0gVXNlZCBvbmx5IHVuZGVyIE56VG9vbHRpcERpcmVjdGl2ZSBjdXJyZW50bHkuXHJcbiAgICBpZiAoIXRoaXMudG9vbHRpcCkge1xyXG4gICAgICBjb25zdCB0b29sdGlwQ29tcG9uZW50ID0gdGhpcy5ob3N0Vmlldy5jcmVhdGVDb21wb25lbnQodGhpcy5mYWN0b3J5KTtcclxuICAgICAgdGhpcy50b29sdGlwID0gdG9vbHRpcENvbXBvbmVudC5pbnN0YW5jZTtcclxuICAgICAgdGhpcy50b29sdGlwLm5vQW5pbWF0aW9uID0gdGhpcy5ub0FuaW1hdGlvbjtcclxuICAgICAgLy8gUmVtb3ZlIGVsZW1lbnQgd2hlbiB1c2UgZGlyZWN0aXZlIGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2lzc3Vlcy8xOTY3XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQoXHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5wYXJlbnROb2RlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSxcclxuICAgICAgICB0b29sdGlwQ29tcG9uZW50LmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnRcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5pc0R5bmFtaWNUb29sdGlwID0gdHJ1ZTtcclxuICAgICAgdGhpcy5uZWVkUHJveHlQcm9wZXJ0aWVzLmZvckVhY2gocHJvcGVydHkgPT4gdGhpcy51cGRhdGVDb21wVmFsdWUocHJvcGVydHksIHRoaXNbcHJvcGVydHldKSk7XHJcbiAgICAgIGNvbnN0IHZpc2libGVfID0gdGhpcy50b29sdGlwLmNtYWNzVmlzaWJsZUNoYW5nZS5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSBkYXRhO1xyXG4gICAgICAgIHRoaXMuY21hY3NWaXNpYmxlQ2hhbmdlLmVtaXQoZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnN1YnNfLmFkZCh2aXNpYmxlXyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRvb2x0aXAuc2V0T3ZlcmxheU9yaWdpbih0aGlzKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnRvb2x0aXAudHJpZ2dlciA9PT0gJ2hvdmVyJykge1xyXG4gICAgICBsZXQgb3ZlcmxheUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21vdXNlZW50ZXInLCAoKSA9PlxyXG4gICAgICAgIHRoaXMuZGVsYXlFbnRlckxlYXZlKHRydWUsIHRydWUsIHRoaXMudG9vbHRpcC5tb3VzZUVudGVyRGVsYXkpXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbW91c2VsZWF2ZScsICgpID0+IHtcclxuICAgICAgICB0aGlzLmRlbGF5RW50ZXJMZWF2ZSh0cnVlLCBmYWxzZSwgdGhpcy50b29sdGlwLm1vdXNlTGVhdmVEZWxheSk7XHJcbiAgICAgICAgaWYgKHRoaXMudG9vbHRpcC5vdmVybGF5Lm92ZXJsYXlSZWYgJiYgIW92ZXJsYXlFbGVtZW50KSB7XHJcbiAgICAgICAgICAvLyBOT1RFOiB3ZSBiaW5kIGV2ZW50cyB1bmRlciBcIm1vdXNlbGVhdmVcIiBkdWUgdG8gdGhlIG92ZXJsYXlSZWYgaXMgb25seSBjcmVhdGVkIGFmdGVyIHRoZSBvdmVybGF5IHdhcyBjb21wbGV0ZWx5IHNob3duIHVwXHJcbiAgICAgICAgICBvdmVybGF5RWxlbWVudCA9IHRoaXMudG9vbHRpcC5vdmVybGF5Lm92ZXJsYXlSZWYub3ZlcmxheUVsZW1lbnQ7XHJcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihvdmVybGF5RWxlbWVudCwgJ21vdXNlZW50ZXInLCAoKSA9PiB0aGlzLmRlbGF5RW50ZXJMZWF2ZShmYWxzZSwgdHJ1ZSkpO1xyXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4ob3ZlcmxheUVsZW1lbnQsICdtb3VzZWxlYXZlJywgKCkgPT4gdGhpcy5kZWxheUVudGVyTGVhdmUoZmFsc2UsIGZhbHNlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy50b29sdGlwLnRyaWdnZXIgPT09ICdmb2N1cycpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdmb2N1cycsICgpID0+IHRoaXMuc2hvdygpKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdibHVyJywgKCkgPT4gdGhpcy5oaWRlKCkpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnRvb2x0aXAudHJpZ2dlciA9PT0gJ2NsaWNrJykge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zdWJzXy51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHByb3RlY3RlZCB1cGRhdGVDb21wVmFsdWUoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzRHluYW1pY1Rvb2x0aXAgJiYgaXNOb3ROaWwodmFsdWUpKSB7XHJcbiAgICAgIHRoaXMudG9vbHRpcFtrZXldID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNob3coKTogdm9pZCB7XHJcbiAgICB0aGlzLnRvb2x0aXAuc2hvdygpO1xyXG4gICAgdGhpcy5pc1Rvb2x0aXBPcGVuID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGlkZSgpOiB2b2lkIHtcclxuICAgIHRoaXMudG9vbHRpcC5oaWRlKCk7XHJcbiAgICB0aGlzLmlzVG9vbHRpcE9wZW4gPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGVsYXlFbnRlckxlYXZlKGlzT3JpZ2luOiBib29sZWFuLCBpc0VudGVyOiBib29sZWFuLCBkZWxheTogbnVtYmVyID0gLTEpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRlbGF5VGltZXIpIHtcclxuICAgICAgLy8gQ2xlYXIgdGltZXIgZHVyaW5nIHRoZSBkZWxheSB0aW1lXHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlbGF5VGltZXIpO1xyXG4gICAgICB0aGlzLmRlbGF5VGltZXIgPSBudWxsO1xyXG4gICAgfSBlbHNlIGlmIChkZWxheSA+IDApIHtcclxuICAgICAgdGhpcy5kZWxheVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5kZWxheVRpbWVyID0gbnVsbDtcclxuICAgICAgICBpc0VudGVyID8gdGhpcy5zaG93KCkgOiB0aGlzLmhpZGUoKTtcclxuICAgICAgfSwgZGVsYXkgKiAxMDAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlzRW50ZXIgJiYgaXNPcmlnaW4gPyB0aGlzLnNob3coKSA6IHRoaXMuaGlkZSgpOyAvLyBbQ29tcGF0aWJsZV0gVGhlIFwiaXNPcmlnaW5cIiBpcyB1c2VkIGR1ZSB0byB0aGUgdG9vbHRpcCB3aWxsIG5vdCBoaWRlIGltbWVkaWF0ZWx5IChtYXkgY2F1c2VkIGJ5IHRoZSBmYWRlLW91dCBhbmltYXRpb24pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXQgaW5wdXRzIG9mIGNoaWxkIGNvbXBvbmVudHMgd2hlbiB0aGlzIGNvbXBvbmVudCdzIGlucHV0cyBjaGFuZ2UuXHJcbiAgICogQHBhcmFtIGNoYW5nZXNcclxuICAgKi9cclxuICBwcml2YXRlIHVwZGF0ZVByb3hpZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudG9vbHRpcCkge1xyXG4gICAgICBPYmplY3Qua2V5cyhjaGFuZ2VzKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2hhbmdlID0gY2hhbmdlc1trZXldO1xyXG4gICAgICAgIGlmIChjaGFuZ2UpIHtcclxuICAgICAgICAgIHRoaXMudXBkYXRlQ29tcFZhbHVlKGtleSwgY2hhbmdlLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChjaGFuZ2VzLnNldFRpdGxlKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IGNoYW5nZXMuc2V0VGl0bGUuY3VycmVudFZhbHVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ29tcFZhbHVlKCd0aXRsZScsIGNoYW5nZXMuc2V0VGl0bGUuY3VycmVudFZhbHVlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy50b29sdGlwLmNkci5tYXJrRm9yQ2hlY2soKTsgLy8gTWFudWFsbHkgdHJpZ2dlciBjaGFuZ2UgZGV0ZWN0aW9uIG9mIGNvbXBvbmVudC5cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19