/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ComponentFactoryResolver, Directive, ElementRef, EventEmitter, Host, Input, Optional, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { isNotNil, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { CmacsTooltipComponent } from './cmacs-tooltip.component';
var CmacsTooltipDirective = /** @class */ (function () {
    function CmacsTooltipDirective(elementRef, hostView, resolver, renderer, tooltip, noAnimation) {
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
    Object.defineProperty(CmacsTooltipDirective.prototype, "setTitle", {
        set: /**
         * @param {?} title
         * @return {?}
         */
        function (title) {
            this.title = title;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsTooltipDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.updateProxies(changes);
    };
    /**
     * @return {?}
     */
    CmacsTooltipDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Support faster tooltip mode: <a nz-tooltip="xxx"></a>. [NOTE] Used only under NzTooltipDirective currently.
        if (!this.tooltip) {
            /** @type {?} */
            var tooltipComponent = this.hostView.createComponent(this.factory);
            this.tooltip = tooltipComponent.instance;
            this.tooltip.noAnimation = this.noAnimation;
            // Remove element when use directive https://github.com/NG-ZORRO/ng-zorro-antd/issues/1967
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), tooltipComponent.location.nativeElement);
            this.isDynamicTooltip = true;
            this.needProxyProperties.forEach((/**
             * @param {?} property
             * @return {?}
             */
            function (property) { return _this.updateCompValue(property, _this[property]); }));
            /** @type {?} */
            var visible_ = this.tooltip.cmacsVisibleChange.pipe(distinctUntilChanged()).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                _this.visible = data;
                _this.cmacsVisibleChange.emit(data);
            }));
            this.subs_.add(visible_);
        }
        this.tooltip.setOverlayOrigin(this);
    };
    /**
     * @return {?}
     */
    CmacsTooltipDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.tooltip.trigger === 'hover') {
            /** @type {?} */
            var overlayElement_1;
            this.renderer.listen(this.elementRef.nativeElement, 'mouseenter', (/**
             * @return {?}
             */
            function () {
                return _this.delayEnterLeave(true, true, _this.tooltip.mouseEnterDelay);
            }));
            this.renderer.listen(this.elementRef.nativeElement, 'mouseleave', (/**
             * @return {?}
             */
            function () {
                _this.delayEnterLeave(true, false, _this.tooltip.mouseLeaveDelay);
                if (_this.tooltip.overlay.overlayRef && !overlayElement_1) {
                    // NOTE: we bind events under "mouseleave" due to the overlayRef is only created after the overlay was completely shown up
                    overlayElement_1 = _this.tooltip.overlay.overlayRef.overlayElement;
                    _this.renderer.listen(overlayElement_1, 'mouseenter', (/**
                     * @return {?}
                     */
                    function () { return _this.delayEnterLeave(false, true); }));
                    _this.renderer.listen(overlayElement_1, 'mouseleave', (/**
                     * @return {?}
                     */
                    function () { return _this.delayEnterLeave(false, false); }));
                }
            }));
        }
        else if (this.tooltip.trigger === 'focus') {
            this.renderer.listen(this.elementRef.nativeElement, 'focus', (/**
             * @return {?}
             */
            function () { return _this.show(); }));
            this.renderer.listen(this.elementRef.nativeElement, 'blur', (/**
             * @return {?}
             */
            function () { return _this.hide(); }));
        }
        else if (this.tooltip.trigger === 'click') {
            this.renderer.listen(this.elementRef.nativeElement, 'click', (/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                e.preventDefault();
                _this.show();
            }));
        }
    };
    /**
     * @return {?}
     */
    CmacsTooltipDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subs_.unsubscribe();
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @protected
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    CmacsTooltipDirective.prototype.updateCompValue = 
    // tslint:disable-next-line:no-any
    /**
     * @protected
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        if (this.isDynamicTooltip && isNotNil(value)) {
            this.tooltip[key] = value;
        }
    };
    /**
     * @private
     * @return {?}
     */
    CmacsTooltipDirective.prototype.show = /**
     * @private
     * @return {?}
     */
    function () {
        this.tooltip.show();
        this.isTooltipOpen = true;
    };
    /**
     * @private
     * @return {?}
     */
    CmacsTooltipDirective.prototype.hide = /**
     * @private
     * @return {?}
     */
    function () {
        this.tooltip.hide();
        this.isTooltipOpen = false;
    };
    /**
     * @private
     * @param {?} isOrigin
     * @param {?} isEnter
     * @param {?=} delay
     * @return {?}
     */
    CmacsTooltipDirective.prototype.delayEnterLeave = /**
     * @private
     * @param {?} isOrigin
     * @param {?} isEnter
     * @param {?=} delay
     * @return {?}
     */
    function (isOrigin, isEnter, delay) {
        var _this = this;
        if (delay === void 0) { delay = -1; }
        if (this.delayTimer) {
            // Clear timer during the delay time
            clearTimeout(this.delayTimer);
            this.delayTimer = null;
        }
        else if (delay > 0) {
            this.delayTimer = setTimeout((/**
             * @return {?}
             */
            function () {
                _this.delayTimer = null;
                isEnter ? _this.show() : _this.hide();
            }), delay * 1000);
        }
        else {
            isEnter && isOrigin ? this.show() : this.hide(); // [Compatible] The "isOrigin" is used due to the tooltip will not hide immediately (may caused by the fade-out animation)
        }
    };
    /**
     * Set inputs of child components when this component's inputs change.
     * @param changes
     */
    /**
     * Set inputs of child components when this component's inputs change.
     * @private
     * @param {?} changes
     * @return {?}
     */
    CmacsTooltipDirective.prototype.updateProxies = /**
     * Set inputs of child components when this component's inputs change.
     * @private
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        if (this.tooltip) {
            Object.keys(changes).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                /** @type {?} */
                var change = changes[key];
                if (change) {
                    _this.updateCompValue(key, change.currentValue);
                }
            }));
            if (changes.setTitle) {
                this.title = changes.setTitle.currentValue;
                this.updateCompValue('title', changes.setTitle.currentValue);
            }
            this.tooltip.cdr.markForCheck(); // Manually trigger change detection of component.
        }
    };
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
    CmacsTooltipDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ViewContainerRef },
        { type: ComponentFactoryResolver },
        { type: Renderer2 },
        { type: CmacsTooltipComponent, decorators: [{ type: Optional }] },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
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
    return CmacsTooltipDirective;
}());
export { CmacsTooltipDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXRvb2x0aXAvY21hY3MtdG9vbHRpcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFHTCx3QkFBd0IsRUFDeEIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFHVCxnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFbEU7SUFpREUsK0JBQ1MsVUFBc0IsRUFDdEIsUUFBMEIsRUFDMUIsUUFBa0MsRUFDbEMsUUFBbUIsRUFDUCxPQUE4QixFQUN0QixXQUFvQztRQUx4RCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQWtCO1FBQzFCLGFBQVEsR0FBUixRQUFRLENBQTBCO1FBQ2xDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDUCxZQUFPLEdBQVAsT0FBTyxDQUF1QjtRQUN0QixnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7O1FBOUNqRSxrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUMvQixxQkFBZ0IsR0FBRyxLQUFLLENBQUMsQ0FBQyxzREFBc0Q7UUFHaEYsWUFBTyxHQUE0QyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLHFCQUFxQixDQUFDLENBQUM7Ozs7UUFHdEcsd0JB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O2dCQVlWLGdCQUFnQjtnQkFkaEIsd0JBQXdCO2dCQVd4QixTQUFTO2dCQVdGLHFCQUFxQix1QkF3RHpCLFFBQVE7Z0JBMURNLHNCQUFzQix1QkEyRHBDLElBQUksWUFBSSxRQUFROzs7cUNBekJsQixNQUFNO3dCQUVOLEtBQUssU0FBQyxlQUFlOzJCQUVyQixLQUFLLFNBQUMsT0FBTzswQkFJYixLQUFLO2tDQUNMLEtBQUs7a0NBQ0wsS0FBSzttQ0FDTCxLQUFLOytCQUNMLEtBQUs7MEJBQ0wsS0FBSzsrQkFDTCxLQUFLOzRCQUNMLEtBQUs7O0lBMEhSLDRCQUFDO0NBQUEsQUF2S0QsSUF1S0M7U0FoS1kscUJBQXFCOzs7SUFFaEMsOENBQStCOztJQUMvQixpREFBeUI7O0lBQ3pCLDJDQUEwQjs7SUFDMUIsd0NBQWlCOztJQUNqQix3Q0FBZ0g7Ozs7OztJQUdoSCxvREFVRTs7Ozs7SUFFRixzQ0FBcUM7O0lBRXJDLG1EQUFvRTs7SUFFcEUsc0NBQWlFOztJQU1qRSx3Q0FBNkM7O0lBQzdDLGdEQUFpQzs7SUFDakMsZ0RBQWlDOztJQUNqQyxpREFBa0M7O0lBQ2xDLDZDQUFpRDs7SUFDakQsd0NBQXlCOztJQUN6Qiw2Q0FBK0I7O0lBQy9CLDBDQUEyQjs7SUFLekIsMkNBQTZCOztJQUM3Qix5Q0FBaUM7O0lBQ2pDLHlDQUF5Qzs7SUFDekMseUNBQTBCOztJQUMxQix3Q0FBaUQ7O0lBQ2pELDRDQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDb21wb25lbnRGYWN0b3J5LFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgaXNOb3ROaWwsIE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ21hY3NUb29sdGlwQ29tcG9uZW50IH0gZnJvbSAnLi9jbWFjcy10b29sdGlwLmNvbXBvbmVudCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tjbWFjcy10b29sdGlwXScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1Rvb2x0aXAnLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LXRvb2x0aXAtb3Blbl0nOiAnaXNUb29sdGlwT3BlbidcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1Rvb2x0aXBEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAvLyBbTk9URV0gSGVyZSBoYXJkIGNvZGVkLCBhbmQgbnpUaXRsZSB1c2VkIG9ubHkgdW5kZXIgTnpUb29sdGlwRGlyZWN0aXZlIGN1cnJlbnRseS5cclxuICBpc1Rvb2x0aXBPcGVuOiBib29sZWFuID0gZmFsc2U7XHJcbiAgaXNEeW5hbWljVG9vbHRpcCA9IGZhbHNlOyAvLyBJbmRpY2F0ZSB3aGV0aGVyIGN1cnJlbnQgdG9vbHRpcCBpcyBkeW5hbWljIGNyZWF0ZWRcclxuICBkZWxheVRpbWVyOiBudW1iZXIgfCBudWxsOyAvLyBUaW1lciBmb3IgZGVsYXkgZW50ZXIvbGVhdmVcclxuICB2aXNpYmxlOiBib29sZWFuO1xyXG4gIGZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8Q21hY3NUb29sdGlwQ29tcG9uZW50PiA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoQ21hY3NUb29sdGlwQ29tcG9uZW50KTtcclxuXHJcbiAgLyoqIE5hbWVzIG9mIHByb3BlcnRpZXMgdGhhdCBzaG91bGQgYmUgcHJveHkgdG8gY2hpbGQgY29tcG9uZW50LiAqL1xyXG4gIHByb3RlY3RlZCBuZWVkUHJveHlQcm9wZXJ0aWVzID0gW1xyXG4gICAgJ3RpdGxlJyxcclxuICAgICdjb250ZW50JyxcclxuICAgICdvdmVybGF5Q2xhc3NOYW1lJyxcclxuICAgICdvdmVybGF5U3R5bGUnLFxyXG4gICAgJ21vdXNlRW50ZXJEZWxheScsXHJcbiAgICAnbW91c2VMZWF2ZURlbGF5JyxcclxuICAgICdjbWFjc1Zpc2libGUnLFxyXG4gICAgJ3RyaWdnZXInLFxyXG4gICAgJ3BsYWNlbWVudCdcclxuICBdO1xyXG5cclxuICBwcm90ZWN0ZWQgc3Vic18gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBjbWFjc1Zpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIEBJbnB1dCgnY21hY3MtdG9vbHRpcCcpIHRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGw7XHJcblxyXG4gIEBJbnB1dCgndGl0bGUnKSBzZXQgc2V0VGl0bGUodGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbCkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbW91c2VFbnRlckRlbGF5OiBudW1iZXI7XHJcbiAgQElucHV0KCkgbW91c2VMZWF2ZURlbGF5OiBudW1iZXI7XHJcbiAgQElucHV0KCkgb3ZlcmxheUNsYXNzTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG92ZXJsYXlTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuICBASW5wdXQoKSB0cmlnZ2VyOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY21hY3NWaXNpYmxlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHBsYWNlbWVudDogc3RyaW5nO1xyXG5cclxuICBbcHJvcGVydHk6IHN0cmluZ106IGFueTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHB1YmxpYyBob3N0VmlldzogVmlld0NvbnRhaW5lclJlZixcclxuICAgIHB1YmxpYyByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgdG9vbHRpcDogQ21hY3NUb29sdGlwQ29tcG9uZW50LFxyXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZVByb3hpZXMoY2hhbmdlcyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIFN1cHBvcnQgZmFzdGVyIHRvb2x0aXAgbW9kZTogPGEgbnotdG9vbHRpcD1cInh4eFwiPjwvYT4uIFtOT1RFXSBVc2VkIG9ubHkgdW5kZXIgTnpUb29sdGlwRGlyZWN0aXZlIGN1cnJlbnRseS5cclxuICAgIGlmICghdGhpcy50b29sdGlwKSB7XHJcbiAgICAgIGNvbnN0IHRvb2x0aXBDb21wb25lbnQgPSB0aGlzLmhvc3RWaWV3LmNyZWF0ZUNvbXBvbmVudCh0aGlzLmZhY3RvcnkpO1xyXG4gICAgICB0aGlzLnRvb2x0aXAgPSB0b29sdGlwQ29tcG9uZW50Lmluc3RhbmNlO1xyXG4gICAgICB0aGlzLnRvb2x0aXAubm9BbmltYXRpb24gPSB0aGlzLm5vQW5pbWF0aW9uO1xyXG4gICAgICAvLyBSZW1vdmUgZWxlbWVudCB3aGVuIHVzZSBkaXJlY3RpdmUgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvaXNzdWVzLzE5NjdcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZChcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnBhcmVudE5vZGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLFxyXG4gICAgICAgIHRvb2x0aXBDb21wb25lbnQubG9jYXRpb24ubmF0aXZlRWxlbWVudFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmlzRHluYW1pY1Rvb2x0aXAgPSB0cnVlO1xyXG4gICAgICB0aGlzLm5lZWRQcm94eVByb3BlcnRpZXMuZm9yRWFjaChwcm9wZXJ0eSA9PiB0aGlzLnVwZGF0ZUNvbXBWYWx1ZShwcm9wZXJ0eSwgdGhpc1twcm9wZXJ0eV0pKTtcclxuICAgICAgY29uc3QgdmlzaWJsZV8gPSB0aGlzLnRvb2x0aXAuY21hY3NWaXNpYmxlQ2hhbmdlLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy5jbWFjc1Zpc2libGVDaGFuZ2UuZW1pdChkYXRhKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuc3Vic18uYWRkKHZpc2libGVfKTtcclxuICAgIH1cclxuICAgIHRoaXMudG9vbHRpcC5zZXRPdmVybGF5T3JpZ2luKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudG9vbHRpcC50cmlnZ2VyID09PSAnaG92ZXInKSB7XHJcbiAgICAgIGxldCBvdmVybGF5RWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbW91c2VlbnRlcicsICgpID0+XHJcbiAgICAgICAgdGhpcy5kZWxheUVudGVyTGVhdmUodHJ1ZSwgdHJ1ZSwgdGhpcy50b29sdGlwLm1vdXNlRW50ZXJEZWxheSlcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZGVsYXlFbnRlckxlYXZlKHRydWUsIGZhbHNlLCB0aGlzLnRvb2x0aXAubW91c2VMZWF2ZURlbGF5KTtcclxuICAgICAgICBpZiAodGhpcy50b29sdGlwLm92ZXJsYXkub3ZlcmxheVJlZiAmJiAhb3ZlcmxheUVsZW1lbnQpIHtcclxuICAgICAgICAgIC8vIE5PVEU6IHdlIGJpbmQgZXZlbnRzIHVuZGVyIFwibW91c2VsZWF2ZVwiIGR1ZSB0byB0aGUgb3ZlcmxheVJlZiBpcyBvbmx5IGNyZWF0ZWQgYWZ0ZXIgdGhlIG92ZXJsYXkgd2FzIGNvbXBsZXRlbHkgc2hvd24gdXBcclxuICAgICAgICAgIG92ZXJsYXlFbGVtZW50ID0gdGhpcy50b29sdGlwLm92ZXJsYXkub3ZlcmxheVJlZi5vdmVybGF5RWxlbWVudDtcclxuICAgICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKG92ZXJsYXlFbGVtZW50LCAnbW91c2VlbnRlcicsICgpID0+IHRoaXMuZGVsYXlFbnRlckxlYXZlKGZhbHNlLCB0cnVlKSk7XHJcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihvdmVybGF5RWxlbWVudCwgJ21vdXNlbGVhdmUnLCAoKSA9PiB0aGlzLmRlbGF5RW50ZXJMZWF2ZShmYWxzZSwgZmFsc2UpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnRvb2x0aXAudHJpZ2dlciA9PT0gJ2ZvY3VzJykge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2ZvY3VzJywgKCkgPT4gdGhpcy5zaG93KCkpO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2JsdXInLCAoKSA9PiB0aGlzLmhpZGUoKSk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMudG9vbHRpcC50cmlnZ2VyID09PSAnY2xpY2snKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnY2xpY2snLCBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnN1YnNfLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgcHJvdGVjdGVkIHVwZGF0ZUNvbXBWYWx1ZShrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNEeW5hbWljVG9vbHRpcCAmJiBpc05vdE5pbCh2YWx1ZSkpIHtcclxuICAgICAgdGhpcy50b29sdGlwW2tleV0gPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2hvdygpOiB2b2lkIHtcclxuICAgIHRoaXMudG9vbHRpcC5zaG93KCk7XHJcbiAgICB0aGlzLmlzVG9vbHRpcE9wZW4gPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoaWRlKCk6IHZvaWQge1xyXG4gICAgdGhpcy50b29sdGlwLmhpZGUoKTtcclxuICAgIHRoaXMuaXNUb29sdGlwT3BlbiA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkZWxheUVudGVyTGVhdmUoaXNPcmlnaW46IGJvb2xlYW4sIGlzRW50ZXI6IGJvb2xlYW4sIGRlbGF5OiBudW1iZXIgPSAtMSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZGVsYXlUaW1lcikge1xyXG4gICAgICAvLyBDbGVhciB0aW1lciBkdXJpbmcgdGhlIGRlbGF5IHRpbWVcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVsYXlUaW1lcik7XHJcbiAgICAgIHRoaXMuZGVsYXlUaW1lciA9IG51bGw7XHJcbiAgICB9IGVsc2UgaWYgKGRlbGF5ID4gMCkge1xyXG4gICAgICB0aGlzLmRlbGF5VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLmRlbGF5VGltZXIgPSBudWxsO1xyXG4gICAgICAgIGlzRW50ZXIgPyB0aGlzLnNob3coKSA6IHRoaXMuaGlkZSgpO1xyXG4gICAgICB9LCBkZWxheSAqIDEwMDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaXNFbnRlciAmJiBpc09yaWdpbiA/IHRoaXMuc2hvdygpIDogdGhpcy5oaWRlKCk7IC8vIFtDb21wYXRpYmxlXSBUaGUgXCJpc09yaWdpblwiIGlzIHVzZWQgZHVlIHRvIHRoZSB0b29sdGlwIHdpbGwgbm90IGhpZGUgaW1tZWRpYXRlbHkgKG1heSBjYXVzZWQgYnkgdGhlIGZhZGUtb3V0IGFuaW1hdGlvbilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCBpbnB1dHMgb2YgY2hpbGQgY29tcG9uZW50cyB3aGVuIHRoaXMgY29tcG9uZW50J3MgaW5wdXRzIGNoYW5nZS5cclxuICAgKiBAcGFyYW0gY2hhbmdlc1xyXG4gICAqL1xyXG4gIHByaXZhdGUgdXBkYXRlUHJveGllcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy50b29sdGlwKSB7XHJcbiAgICAgIE9iamVjdC5rZXlzKGNoYW5nZXMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICBjb25zdCBjaGFuZ2UgPSBjaGFuZ2VzW2tleV07XHJcbiAgICAgICAgaWYgKGNoYW5nZSkge1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVDb21wVmFsdWUoa2V5LCBjaGFuZ2UuY3VycmVudFZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKGNoYW5nZXMuc2V0VGl0bGUpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gY2hhbmdlcy5zZXRUaXRsZS5jdXJyZW50VmFsdWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDb21wVmFsdWUoJ3RpdGxlJywgY2hhbmdlcy5zZXRUaXRsZS5jdXJyZW50VmFsdWUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnRvb2x0aXAuY2RyLm1hcmtGb3JDaGVjaygpOyAvLyBNYW51YWxseSB0cmlnZ2VyIGNoYW5nZSBkZXRlY3Rpb24gb2YgY29tcG9uZW50LlxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=