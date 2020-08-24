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
    Object.defineProperty(CmacsTooltipDirective.prototype, "setCmacsTitle", {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXRvb2x0aXAvY21hY3MtdG9vbHRpcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFHTCx3QkFBd0IsRUFDeEIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFHVCxnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFbEU7SUFxREUsK0JBQ1MsVUFBc0IsRUFDdEIsUUFBMEIsRUFDMUIsUUFBa0MsRUFDbEMsUUFBbUIsRUFDUCxPQUE4QixFQUN0QixXQUFvQztRQUx4RCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQWtCO1FBQzFCLGFBQVEsR0FBUixRQUFRLENBQTBCO1FBQ2xDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDUCxZQUFPLEdBQVAsT0FBTyxDQUF1QjtRQUN0QixnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7O1FBbERqRSxrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUMvQixxQkFBZ0IsR0FBRyxLQUFLLENBQUMsQ0FBQyxzREFBc0Q7UUFHaEYsWUFBTyxHQUE0QyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLHFCQUFxQixDQUFDLENBQUM7Ozs7UUFHdEcsd0JB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QUFpQjtvQkFDM0IsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLElBQUksRUFBRTt3QkFDSiwwQkFBMEIsRUFBRSxlQUFlO3FCQUM1QztpQkFDRjs7OztnQkE1QkMsVUFBVTtnQkFZVixnQkFBZ0I7Z0JBZGhCLHdCQUF3QjtnQkFXeEIsU0FBUztnQkFXRixxQkFBcUIsdUJBNER6QixRQUFRO2dCQTlETSxzQkFBc0IsdUJBK0RwQyxJQUFJLFlBQUksUUFBUTs7O3FDQTdCbEIsTUFBTTt3QkFFTixLQUFLLFNBQUMsZUFBZTsyQkFFckIsS0FBSyxTQUFDLE9BQU87Z0NBSWIsS0FBSyxTQUFDLGFBQWE7MEJBSW5CLEtBQUs7a0NBQ0wsS0FBSztrQ0FDTCxLQUFLO21DQUNMLEtBQUs7K0JBQ0wsS0FBSzswQkFDTCxLQUFLOytCQUNMLEtBQUs7NEJBQ0wsS0FBSzs7SUEwSFIsNEJBQUM7Q0FBQSxBQTNLRCxJQTJLQztTQXBLWSxxQkFBcUI7OztJQUVoQyw4Q0FBK0I7O0lBQy9CLGlEQUF5Qjs7SUFDekIsMkNBQTBCOztJQUMxQix3Q0FBaUI7O0lBQ2pCLHdDQUFnSDs7Ozs7O0lBR2hILG9EQVVFOzs7OztJQUVGLHNDQUFxQzs7SUFFckMsbURBQW9FOztJQUVwRSxzQ0FBaUU7O0lBVWpFLHdDQUE2Qzs7SUFDN0MsZ0RBQWlDOztJQUNqQyxnREFBaUM7O0lBQ2pDLGlEQUFrQzs7SUFDbEMsNkNBQWlEOztJQUNqRCx3Q0FBeUI7O0lBQ3pCLDZDQUErQjs7SUFDL0IsMENBQTJCOztJQUt6QiwyQ0FBNkI7O0lBQzdCLHlDQUFpQzs7SUFDakMseUNBQXlDOztJQUN6Qyx5Q0FBMEI7O0lBQzFCLHdDQUFpRDs7SUFDakQsNENBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENvbXBvbmVudEZhY3RvcnksXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBpc05vdE5pbCwgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDbWFjc1Rvb2x0aXBDb21wb25lbnQgfSBmcm9tICcuL2NtYWNzLXRvb2x0aXAuY29tcG9uZW50JztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2NtYWNzLXRvb2x0aXBdJyxcclxuICBleHBvcnRBczogJ2NtYWNzVG9vbHRpcCcsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtdG9vbHRpcC1vcGVuXSc6ICdpc1Rvb2x0aXBPcGVuJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzVG9vbHRpcERpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIC8vIFtOT1RFXSBIZXJlIGhhcmQgY29kZWQsIGFuZCBuelRpdGxlIHVzZWQgb25seSB1bmRlciBOelRvb2x0aXBEaXJlY3RpdmUgY3VycmVudGx5LlxyXG4gIGlzVG9vbHRpcE9wZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICBpc0R5bmFtaWNUb29sdGlwID0gZmFsc2U7IC8vIEluZGljYXRlIHdoZXRoZXIgY3VycmVudCB0b29sdGlwIGlzIGR5bmFtaWMgY3JlYXRlZFxyXG4gIGRlbGF5VGltZXI6IG51bWJlciB8IG51bGw7IC8vIFRpbWVyIGZvciBkZWxheSBlbnRlci9sZWF2ZVxyXG4gIHZpc2libGU6IGJvb2xlYW47XHJcbiAgZmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxDbWFjc1Rvb2x0aXBDb21wb25lbnQ+ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShDbWFjc1Rvb2x0aXBDb21wb25lbnQpO1xyXG5cclxuICAvKiogTmFtZXMgb2YgcHJvcGVydGllcyB0aGF0IHNob3VsZCBiZSBwcm94eSB0byBjaGlsZCBjb21wb25lbnQuICovXHJcbiAgcHJvdGVjdGVkIG5lZWRQcm94eVByb3BlcnRpZXMgPSBbXHJcbiAgICAndGl0bGUnLFxyXG4gICAgJ2NvbnRlbnQnLFxyXG4gICAgJ292ZXJsYXlDbGFzc05hbWUnLFxyXG4gICAgJ292ZXJsYXlTdHlsZScsXHJcbiAgICAnbW91c2VFbnRlckRlbGF5JyxcclxuICAgICdtb3VzZUxlYXZlRGVsYXknLFxyXG4gICAgJ2NtYWNzVmlzaWJsZScsXHJcbiAgICAndHJpZ2dlcicsXHJcbiAgICAncGxhY2VtZW50J1xyXG4gIF07XHJcblxyXG4gIHByb3RlY3RlZCBzdWJzXyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNtYWNzVmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgQElucHV0KCdjbWFjcy10b29sdGlwJykgdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbDtcclxuXHJcbiAgQElucHV0KCd0aXRsZScpIHNldCBzZXRUaXRsZSh0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ2NtYWNzLXRpdGxlJykgc2V0IHNldENtYWNzVGl0bGUodGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbCkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbW91c2VFbnRlckRlbGF5OiBudW1iZXI7XHJcbiAgQElucHV0KCkgbW91c2VMZWF2ZURlbGF5OiBudW1iZXI7XHJcbiAgQElucHV0KCkgb3ZlcmxheUNsYXNzTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG92ZXJsYXlTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuICBASW5wdXQoKSB0cmlnZ2VyOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY21hY3NWaXNpYmxlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHBsYWNlbWVudDogc3RyaW5nO1xyXG5cclxuICBbcHJvcGVydHk6IHN0cmluZ106IGFueTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHB1YmxpYyBob3N0VmlldzogVmlld0NvbnRhaW5lclJlZixcclxuICAgIHB1YmxpYyByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgdG9vbHRpcDogQ21hY3NUb29sdGlwQ29tcG9uZW50LFxyXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZVByb3hpZXMoY2hhbmdlcyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIFN1cHBvcnQgZmFzdGVyIHRvb2x0aXAgbW9kZTogPGEgbnotdG9vbHRpcD1cInh4eFwiPjwvYT4uIFtOT1RFXSBVc2VkIG9ubHkgdW5kZXIgTnpUb29sdGlwRGlyZWN0aXZlIGN1cnJlbnRseS5cclxuICAgIGlmICghdGhpcy50b29sdGlwKSB7XHJcbiAgICAgIGNvbnN0IHRvb2x0aXBDb21wb25lbnQgPSB0aGlzLmhvc3RWaWV3LmNyZWF0ZUNvbXBvbmVudCh0aGlzLmZhY3RvcnkpO1xyXG4gICAgICB0aGlzLnRvb2x0aXAgPSB0b29sdGlwQ29tcG9uZW50Lmluc3RhbmNlO1xyXG4gICAgICB0aGlzLnRvb2x0aXAubm9BbmltYXRpb24gPSB0aGlzLm5vQW5pbWF0aW9uO1xyXG4gICAgICAvLyBSZW1vdmUgZWxlbWVudCB3aGVuIHVzZSBkaXJlY3RpdmUgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvaXNzdWVzLzE5NjdcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZChcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnBhcmVudE5vZGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLFxyXG4gICAgICAgIHRvb2x0aXBDb21wb25lbnQubG9jYXRpb24ubmF0aXZlRWxlbWVudFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmlzRHluYW1pY1Rvb2x0aXAgPSB0cnVlO1xyXG4gICAgICB0aGlzLm5lZWRQcm94eVByb3BlcnRpZXMuZm9yRWFjaChwcm9wZXJ0eSA9PiB0aGlzLnVwZGF0ZUNvbXBWYWx1ZShwcm9wZXJ0eSwgdGhpc1twcm9wZXJ0eV0pKTtcclxuICAgICAgY29uc3QgdmlzaWJsZV8gPSB0aGlzLnRvb2x0aXAuY21hY3NWaXNpYmxlQ2hhbmdlLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy5jbWFjc1Zpc2libGVDaGFuZ2UuZW1pdChkYXRhKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuc3Vic18uYWRkKHZpc2libGVfKTtcclxuICAgIH1cclxuICAgIHRoaXMudG9vbHRpcC5zZXRPdmVybGF5T3JpZ2luKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudG9vbHRpcC50cmlnZ2VyID09PSAnaG92ZXInKSB7XHJcbiAgICAgIGxldCBvdmVybGF5RWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbW91c2VlbnRlcicsICgpID0+XHJcbiAgICAgICAgdGhpcy5kZWxheUVudGVyTGVhdmUodHJ1ZSwgdHJ1ZSwgdGhpcy50b29sdGlwLm1vdXNlRW50ZXJEZWxheSlcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZGVsYXlFbnRlckxlYXZlKHRydWUsIGZhbHNlLCB0aGlzLnRvb2x0aXAubW91c2VMZWF2ZURlbGF5KTtcclxuICAgICAgICBpZiAodGhpcy50b29sdGlwLm92ZXJsYXkub3ZlcmxheVJlZiAmJiAhb3ZlcmxheUVsZW1lbnQpIHtcclxuICAgICAgICAgIC8vIE5PVEU6IHdlIGJpbmQgZXZlbnRzIHVuZGVyIFwibW91c2VsZWF2ZVwiIGR1ZSB0byB0aGUgb3ZlcmxheVJlZiBpcyBvbmx5IGNyZWF0ZWQgYWZ0ZXIgdGhlIG92ZXJsYXkgd2FzIGNvbXBsZXRlbHkgc2hvd24gdXBcclxuICAgICAgICAgIG92ZXJsYXlFbGVtZW50ID0gdGhpcy50b29sdGlwLm92ZXJsYXkub3ZlcmxheVJlZi5vdmVybGF5RWxlbWVudDtcclxuICAgICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKG92ZXJsYXlFbGVtZW50LCAnbW91c2VlbnRlcicsICgpID0+IHRoaXMuZGVsYXlFbnRlckxlYXZlKGZhbHNlLCB0cnVlKSk7XHJcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihvdmVybGF5RWxlbWVudCwgJ21vdXNlbGVhdmUnLCAoKSA9PiB0aGlzLmRlbGF5RW50ZXJMZWF2ZShmYWxzZSwgZmFsc2UpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnRvb2x0aXAudHJpZ2dlciA9PT0gJ2ZvY3VzJykge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2ZvY3VzJywgKCkgPT4gdGhpcy5zaG93KCkpO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2JsdXInLCAoKSA9PiB0aGlzLmhpZGUoKSk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMudG9vbHRpcC50cmlnZ2VyID09PSAnY2xpY2snKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnY2xpY2snLCBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnN1YnNfLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgcHJvdGVjdGVkIHVwZGF0ZUNvbXBWYWx1ZShrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNEeW5hbWljVG9vbHRpcCAmJiBpc05vdE5pbCh2YWx1ZSkpIHtcclxuICAgICAgdGhpcy50b29sdGlwW2tleV0gPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2hvdygpOiB2b2lkIHtcclxuICAgIHRoaXMudG9vbHRpcC5zaG93KCk7XHJcbiAgICB0aGlzLmlzVG9vbHRpcE9wZW4gPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoaWRlKCk6IHZvaWQge1xyXG4gICAgdGhpcy50b29sdGlwLmhpZGUoKTtcclxuICAgIHRoaXMuaXNUb29sdGlwT3BlbiA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkZWxheUVudGVyTGVhdmUoaXNPcmlnaW46IGJvb2xlYW4sIGlzRW50ZXI6IGJvb2xlYW4sIGRlbGF5OiBudW1iZXIgPSAtMSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZGVsYXlUaW1lcikge1xyXG4gICAgICAvLyBDbGVhciB0aW1lciBkdXJpbmcgdGhlIGRlbGF5IHRpbWVcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVsYXlUaW1lcik7XHJcbiAgICAgIHRoaXMuZGVsYXlUaW1lciA9IG51bGw7XHJcbiAgICB9IGVsc2UgaWYgKGRlbGF5ID4gMCkge1xyXG4gICAgICB0aGlzLmRlbGF5VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLmRlbGF5VGltZXIgPSBudWxsO1xyXG4gICAgICAgIGlzRW50ZXIgPyB0aGlzLnNob3coKSA6IHRoaXMuaGlkZSgpO1xyXG4gICAgICB9LCBkZWxheSAqIDEwMDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaXNFbnRlciAmJiBpc09yaWdpbiA/IHRoaXMuc2hvdygpIDogdGhpcy5oaWRlKCk7IC8vIFtDb21wYXRpYmxlXSBUaGUgXCJpc09yaWdpblwiIGlzIHVzZWQgZHVlIHRvIHRoZSB0b29sdGlwIHdpbGwgbm90IGhpZGUgaW1tZWRpYXRlbHkgKG1heSBjYXVzZWQgYnkgdGhlIGZhZGUtb3V0IGFuaW1hdGlvbilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCBpbnB1dHMgb2YgY2hpbGQgY29tcG9uZW50cyB3aGVuIHRoaXMgY29tcG9uZW50J3MgaW5wdXRzIGNoYW5nZS5cclxuICAgKiBAcGFyYW0gY2hhbmdlc1xyXG4gICAqL1xyXG4gIHByaXZhdGUgdXBkYXRlUHJveGllcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy50b29sdGlwKSB7XHJcbiAgICAgIE9iamVjdC5rZXlzKGNoYW5nZXMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICBjb25zdCBjaGFuZ2UgPSBjaGFuZ2VzW2tleV07XHJcbiAgICAgICAgaWYgKGNoYW5nZSkge1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVDb21wVmFsdWUoa2V5LCBjaGFuZ2UuY3VycmVudFZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKGNoYW5nZXMuc2V0VGl0bGUpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gY2hhbmdlcy5zZXRUaXRsZS5jdXJyZW50VmFsdWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDb21wVmFsdWUoJ3RpdGxlJywgY2hhbmdlcy5zZXRUaXRsZS5jdXJyZW50VmFsdWUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnRvb2x0aXAuY2RyLm1hcmtGb3JDaGVjaygpOyAvLyBNYW51YWxseSB0cmlnZ2VyIGNoYW5nZSBkZXRlY3Rpb24gb2YgY29tcG9uZW50LlxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=