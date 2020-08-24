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
     * @param {?} title
     * @return {?}
     */
    set setCmacsTitle(title) {
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
    setCmacsTitle: [{ type: Input, args: ['cmacs-title',] }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXRvb2x0aXAvY21hY3MtdG9vbHRpcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFHTCx3QkFBd0IsRUFDeEIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFHVCxnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFTbEUsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7Ozs7OztJQThDaEMsWUFDUyxVQUFzQixFQUN0QixRQUEwQixFQUMxQixRQUFrQyxFQUNsQyxRQUFtQixFQUNQLE9BQThCLEVBQ3RCLFdBQW9DO1FBTHhELGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7UUFDMUIsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7UUFDbEMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNQLFlBQU8sR0FBUCxPQUFPLENBQXVCO1FBQ3RCLGdCQUFXLEdBQVgsV0FBVyxDQUF5Qjs7UUFsRGpFLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBQy9CLHFCQUFnQixHQUFHLEtBQUssQ0FBQyxDQUFDLHNEQUFzRDtRQUdoRixZQUFPLEdBQTRDLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMscUJB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QkFFTixLQUFLLFNBQUMsZUFBZTt1QkFFckIsS0FBSyxTQUFDLE9BQU87NEJBSWIsS0FBSyxTQUFDLGFBQWE7c0JBSW5CLEtBQUs7OEJBQ0wsS0FBSzs4QkFDTCxLQUFLOytCQUNMLEtBQUs7MkJBQ0wsS0FBSztzQkFDTCxLQUFLOzJCQUNMLEtBQUs7d0JBQ0wsS0FBSzs7OztJQXhDTiw4Q0FBK0I7O0lBQy9CLGlEQUF5Qjs7SUFDekIsMkNBQTBCOztJQUMxQix3Q0FBaUI7O0lBQ2pCLHdDQUFnSDs7Ozs7O0lBR2hILG9EQVVFOzs7OztJQUVGLHNDQUFxQzs7SUFFckMsbURBQW9FOztJQUVwRSxzQ0FBaUU7O0lBVWpFLHdDQUE2Qzs7SUFDN0MsZ0RBQWlDOztJQUNqQyxnREFBaUM7O0lBQ2pDLGlEQUFrQzs7SUFDbEMsNkNBQWlEOztJQUNqRCx3Q0FBeUI7O0lBQ3pCLDZDQUErQjs7SUFDL0IsMENBQTJCOztJQUt6QiwyQ0FBNkI7O0lBQzdCLHlDQUFpQzs7SUFDakMseUNBQXlDOztJQUN6Qyx5Q0FBMEI7O0lBQzFCLHdDQUFpRDs7SUFDakQsNENBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENvbXBvbmVudEZhY3RvcnksXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBpc05vdE5pbCwgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDbWFjc1Rvb2x0aXBDb21wb25lbnQgfSBmcm9tICcuL2NtYWNzLXRvb2x0aXAuY29tcG9uZW50JztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2NtYWNzLXRvb2x0aXBdJyxcclxuICBleHBvcnRBczogJ2NtYWNzVG9vbHRpcCcsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtdG9vbHRpcC1vcGVuXSc6ICdpc1Rvb2x0aXBPcGVuJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzVG9vbHRpcERpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIC8vIFtOT1RFXSBIZXJlIGhhcmQgY29kZWQsIGFuZCBuelRpdGxlIHVzZWQgb25seSB1bmRlciBOelRvb2x0aXBEaXJlY3RpdmUgY3VycmVudGx5LlxyXG4gIGlzVG9vbHRpcE9wZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICBpc0R5bmFtaWNUb29sdGlwID0gZmFsc2U7IC8vIEluZGljYXRlIHdoZXRoZXIgY3VycmVudCB0b29sdGlwIGlzIGR5bmFtaWMgY3JlYXRlZFxyXG4gIGRlbGF5VGltZXI6IG51bWJlciB8IG51bGw7IC8vIFRpbWVyIGZvciBkZWxheSBlbnRlci9sZWF2ZVxyXG4gIHZpc2libGU6IGJvb2xlYW47XHJcbiAgZmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxDbWFjc1Rvb2x0aXBDb21wb25lbnQ+ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShDbWFjc1Rvb2x0aXBDb21wb25lbnQpO1xyXG5cclxuICAvKiogTmFtZXMgb2YgcHJvcGVydGllcyB0aGF0IHNob3VsZCBiZSBwcm94eSB0byBjaGlsZCBjb21wb25lbnQuICovXHJcbiAgcHJvdGVjdGVkIG5lZWRQcm94eVByb3BlcnRpZXMgPSBbXHJcbiAgICAndGl0bGUnLFxyXG4gICAgJ2NvbnRlbnQnLFxyXG4gICAgJ292ZXJsYXlDbGFzc05hbWUnLFxyXG4gICAgJ292ZXJsYXlTdHlsZScsXHJcbiAgICAnbW91c2VFbnRlckRlbGF5JyxcclxuICAgICdtb3VzZUxlYXZlRGVsYXknLFxyXG4gICAgJ2NtYWNzVmlzaWJsZScsXHJcbiAgICAndHJpZ2dlcicsXHJcbiAgICAncGxhY2VtZW50J1xyXG4gIF07XHJcblxyXG4gIHByb3RlY3RlZCBzdWJzXyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNtYWNzVmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgQElucHV0KCdjbWFjcy10b29sdGlwJykgdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbDtcclxuXHJcbiAgQElucHV0KCd0aXRsZScpIHNldCBzZXRUaXRsZSh0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ2NtYWNzLXRpdGxlJykgc2V0IHNldENtYWNzVGl0bGUodGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbCkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbW91c2VFbnRlckRlbGF5OiBudW1iZXI7XHJcbiAgQElucHV0KCkgbW91c2VMZWF2ZURlbGF5OiBudW1iZXI7XHJcbiAgQElucHV0KCkgb3ZlcmxheUNsYXNzTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG92ZXJsYXlTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuICBASW5wdXQoKSB0cmlnZ2VyOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY21hY3NWaXNpYmxlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHBsYWNlbWVudDogc3RyaW5nO1xyXG5cclxuICBbcHJvcGVydHk6IHN0cmluZ106IGFueTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHB1YmxpYyBob3N0VmlldzogVmlld0NvbnRhaW5lclJlZixcclxuICAgIHB1YmxpYyByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgdG9vbHRpcDogQ21hY3NUb29sdGlwQ29tcG9uZW50LFxyXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZVByb3hpZXMoY2hhbmdlcyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIFN1cHBvcnQgZmFzdGVyIHRvb2x0aXAgbW9kZTogPGEgbnotdG9vbHRpcD1cInh4eFwiPjwvYT4uIFtOT1RFXSBVc2VkIG9ubHkgdW5kZXIgTnpUb29sdGlwRGlyZWN0aXZlIGN1cnJlbnRseS5cclxuICAgIGlmICghdGhpcy50b29sdGlwKSB7XHJcbiAgICAgIGNvbnN0IHRvb2x0aXBDb21wb25lbnQgPSB0aGlzLmhvc3RWaWV3LmNyZWF0ZUNvbXBvbmVudCh0aGlzLmZhY3RvcnkpO1xyXG4gICAgICB0aGlzLnRvb2x0aXAgPSB0b29sdGlwQ29tcG9uZW50Lmluc3RhbmNlO1xyXG4gICAgICB0aGlzLnRvb2x0aXAubm9BbmltYXRpb24gPSB0aGlzLm5vQW5pbWF0aW9uO1xyXG4gICAgICAvLyBSZW1vdmUgZWxlbWVudCB3aGVuIHVzZSBkaXJlY3RpdmUgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvaXNzdWVzLzE5NjdcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZChcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnBhcmVudE5vZGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLFxyXG4gICAgICAgIHRvb2x0aXBDb21wb25lbnQubG9jYXRpb24ubmF0aXZlRWxlbWVudFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmlzRHluYW1pY1Rvb2x0aXAgPSB0cnVlO1xyXG4gICAgICB0aGlzLm5lZWRQcm94eVByb3BlcnRpZXMuZm9yRWFjaChwcm9wZXJ0eSA9PiB0aGlzLnVwZGF0ZUNvbXBWYWx1ZShwcm9wZXJ0eSwgdGhpc1twcm9wZXJ0eV0pKTtcclxuICAgICAgY29uc3QgdmlzaWJsZV8gPSB0aGlzLnRvb2x0aXAuY21hY3NWaXNpYmxlQ2hhbmdlLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy5jbWFjc1Zpc2libGVDaGFuZ2UuZW1pdChkYXRhKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuc3Vic18uYWRkKHZpc2libGVfKTtcclxuICAgIH1cclxuICAgIHRoaXMudG9vbHRpcC5zZXRPdmVybGF5T3JpZ2luKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudG9vbHRpcC50cmlnZ2VyID09PSAnaG92ZXInKSB7XHJcbiAgICAgIGxldCBvdmVybGF5RWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbW91c2VlbnRlcicsICgpID0+XHJcbiAgICAgICAgdGhpcy5kZWxheUVudGVyTGVhdmUodHJ1ZSwgdHJ1ZSwgdGhpcy50b29sdGlwLm1vdXNlRW50ZXJEZWxheSlcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZGVsYXlFbnRlckxlYXZlKHRydWUsIGZhbHNlLCB0aGlzLnRvb2x0aXAubW91c2VMZWF2ZURlbGF5KTtcclxuICAgICAgICBpZiAodGhpcy50b29sdGlwLm92ZXJsYXkub3ZlcmxheVJlZiAmJiAhb3ZlcmxheUVsZW1lbnQpIHtcclxuICAgICAgICAgIC8vIE5PVEU6IHdlIGJpbmQgZXZlbnRzIHVuZGVyIFwibW91c2VsZWF2ZVwiIGR1ZSB0byB0aGUgb3ZlcmxheVJlZiBpcyBvbmx5IGNyZWF0ZWQgYWZ0ZXIgdGhlIG92ZXJsYXkgd2FzIGNvbXBsZXRlbHkgc2hvd24gdXBcclxuICAgICAgICAgIG92ZXJsYXlFbGVtZW50ID0gdGhpcy50b29sdGlwLm92ZXJsYXkub3ZlcmxheVJlZi5vdmVybGF5RWxlbWVudDtcclxuICAgICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKG92ZXJsYXlFbGVtZW50LCAnbW91c2VlbnRlcicsICgpID0+IHRoaXMuZGVsYXlFbnRlckxlYXZlKGZhbHNlLCB0cnVlKSk7XHJcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihvdmVybGF5RWxlbWVudCwgJ21vdXNlbGVhdmUnLCAoKSA9PiB0aGlzLmRlbGF5RW50ZXJMZWF2ZShmYWxzZSwgZmFsc2UpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnRvb2x0aXAudHJpZ2dlciA9PT0gJ2ZvY3VzJykge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2ZvY3VzJywgKCkgPT4gdGhpcy5zaG93KCkpO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2JsdXInLCAoKSA9PiB0aGlzLmhpZGUoKSk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMudG9vbHRpcC50cmlnZ2VyID09PSAnY2xpY2snKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnY2xpY2snLCBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnN1YnNfLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgcHJvdGVjdGVkIHVwZGF0ZUNvbXBWYWx1ZShrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNEeW5hbWljVG9vbHRpcCAmJiBpc05vdE5pbCh2YWx1ZSkpIHtcclxuICAgICAgdGhpcy50b29sdGlwW2tleV0gPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2hvdygpOiB2b2lkIHtcclxuICAgIHRoaXMudG9vbHRpcC5zaG93KCk7XHJcbiAgICB0aGlzLmlzVG9vbHRpcE9wZW4gPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoaWRlKCk6IHZvaWQge1xyXG4gICAgdGhpcy50b29sdGlwLmhpZGUoKTtcclxuICAgIHRoaXMuaXNUb29sdGlwT3BlbiA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkZWxheUVudGVyTGVhdmUoaXNPcmlnaW46IGJvb2xlYW4sIGlzRW50ZXI6IGJvb2xlYW4sIGRlbGF5OiBudW1iZXIgPSAtMSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZGVsYXlUaW1lcikge1xyXG4gICAgICAvLyBDbGVhciB0aW1lciBkdXJpbmcgdGhlIGRlbGF5IHRpbWVcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVsYXlUaW1lcik7XHJcbiAgICAgIHRoaXMuZGVsYXlUaW1lciA9IG51bGw7XHJcbiAgICB9IGVsc2UgaWYgKGRlbGF5ID4gMCkge1xyXG4gICAgICB0aGlzLmRlbGF5VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLmRlbGF5VGltZXIgPSBudWxsO1xyXG4gICAgICAgIGlzRW50ZXIgPyB0aGlzLnNob3coKSA6IHRoaXMuaGlkZSgpO1xyXG4gICAgICB9LCBkZWxheSAqIDEwMDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaXNFbnRlciAmJiBpc09yaWdpbiA/IHRoaXMuc2hvdygpIDogdGhpcy5oaWRlKCk7IC8vIFtDb21wYXRpYmxlXSBUaGUgXCJpc09yaWdpblwiIGlzIHVzZWQgZHVlIHRvIHRoZSB0b29sdGlwIHdpbGwgbm90IGhpZGUgaW1tZWRpYXRlbHkgKG1heSBjYXVzZWQgYnkgdGhlIGZhZGUtb3V0IGFuaW1hdGlvbilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCBpbnB1dHMgb2YgY2hpbGQgY29tcG9uZW50cyB3aGVuIHRoaXMgY29tcG9uZW50J3MgaW5wdXRzIGNoYW5nZS5cclxuICAgKiBAcGFyYW0gY2hhbmdlc1xyXG4gICAqL1xyXG4gIHByaXZhdGUgdXBkYXRlUHJveGllcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy50b29sdGlwKSB7XHJcbiAgICAgIE9iamVjdC5rZXlzKGNoYW5nZXMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICBjb25zdCBjaGFuZ2UgPSBjaGFuZ2VzW2tleV07XHJcbiAgICAgICAgaWYgKGNoYW5nZSkge1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVDb21wVmFsdWUoa2V5LCBjaGFuZ2UuY3VycmVudFZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKGNoYW5nZXMuc2V0VGl0bGUpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gY2hhbmdlcy5zZXRUaXRsZS5jdXJyZW50VmFsdWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDb21wVmFsdWUoJ3RpdGxlJywgY2hhbmdlcy5zZXRUaXRsZS5jdXJyZW50VmFsdWUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnRvb2x0aXAuY2RyLm1hcmtGb3JDaGVjaygpOyAvLyBNYW51YWxseSB0cmlnZ2VyIGNoYW5nZSBkZXRlY3Rpb24gb2YgY29tcG9uZW50LlxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=