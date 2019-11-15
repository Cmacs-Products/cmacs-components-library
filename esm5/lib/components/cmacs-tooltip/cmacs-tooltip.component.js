/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, EventEmitter, Host, Input, Optional, Output, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { getPlacementName, isNotNil, toBoolean, zoomBigMotion, DEFAULT_TOOLTIP_POSITIONS, NzNoAnimationDirective, POSITION_MAP } from 'ng-zorro-antd/core';
var CmacsTooltipComponent = /** @class */ (function () {
    function CmacsTooltipComponent(cdr, noAnimation) {
        this.cdr = cdr;
        this.noAnimation = noAnimation;
        this._hasBackdrop = false;
        this._prefix = 'ant-tooltip-placement';
        this._positions = tslib_1.__spread(DEFAULT_TOOLTIP_POSITIONS);
        this._classMap = {};
        this._placement = 'top';
        this._trigger = 'hover';
        this.visibleSource = new BehaviorSubject(false);
        this.visible$ = this.visibleSource.asObservable();
        this.overlayClassName = '';
        this.overlayStyle = {};
        this.mouseEnterDelay = 0.15; // second
        // second
        this.mouseLeaveDelay = 0.1; // second
        this.cmacsVisibleChange = new EventEmitter();
    }
    Object.defineProperty(CmacsTooltipComponent.prototype, "cmacsVisible", {
        get: /**
         * @return {?}
         */
        function () {
            return this.visibleSource.value;
        },
        set: 
        // second
        /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var visible = toBoolean(value);
            if (this.visibleSource.value !== visible) {
                this.visibleSource.next(visible);
                this.cmacsVisibleChange.emit(visible);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTooltipComponent.prototype, "trigger", {
        get: /**
         * @return {?}
         */
        function () {
            return this._trigger;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._trigger = value;
            this._hasBackdrop = this._trigger === 'click';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTooltipComponent.prototype, "placement", {
        get: /**
         * @return {?}
         */
        function () {
            return this._placement;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== this._placement) {
                this._placement = value;
                this._positions = tslib_1.__spread([POSITION_MAP[this.placement]], this._positions);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CmacsTooltipComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        Promise.resolve().then((/**
         * @return {?}
         */
        function () {
            _this.updatePosition();
        }));
    };
    // Manually force updating current overlay's position
    // Manually force updating current overlay's position
    /**
     * @return {?}
     */
    CmacsTooltipComponent.prototype.updatePosition = 
    // Manually force updating current overlay's position
    /**
     * @return {?}
     */
    function () {
        if (this.overlay && this.overlay.overlayRef) {
            this.overlay.overlayRef.updatePosition();
        }
    };
    /**
     * @param {?} position
     * @return {?}
     */
    CmacsTooltipComponent.prototype.onPositionChange = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        this.placement = (/** @type {?} */ (getPlacementName(position)));
        this.setClassMap();
        this.cdr.detectChanges(); // TODO: performance?
    };
    /**
     * @return {?}
     */
    CmacsTooltipComponent.prototype.show = /**
     * @return {?}
     */
    function () {
        if (!this.isContentEmpty()) {
            this.cmacsVisible = true;
        }
    };
    /**
     * @return {?}
     */
    CmacsTooltipComponent.prototype.hide = /**
     * @return {?}
     */
    function () {
        this.cmacsVisible = false;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    CmacsTooltipComponent.prototype._afterVisibilityAnimation = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.toState === 'false' && !this.cmacsVisible) {
            this.cmacsVisibleChange.emit(false);
        }
        if (e.toState === 'true' && this.cmacsVisible) {
            this.cmacsVisibleChange.emit(true);
        }
    };
    /**
     * @return {?}
     */
    CmacsTooltipComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this._classMap = (_a = {},
            _a[this.overlayClassName] = true,
            _a[this._prefix + "-" + this._placement] = true,
            _a);
    };
    /**
     * @param {?} origin
     * @return {?}
     */
    CmacsTooltipComponent.prototype.setOverlayOrigin = /**
     * @param {?} origin
     * @return {?}
     */
    function (origin) {
        this.overlayOrigin = origin;
    };
    /**
     * @protected
     * @return {?}
     */
    CmacsTooltipComponent.prototype.isContentEmpty = /**
     * @protected
     * @return {?}
     */
    function () {
        return this.title instanceof TemplateRef ? false : this.title === '' || !isNotNil(this.title);
    };
    CmacsTooltipComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-tooltip',
                    exportAs: 'cmacsTooltipComponent',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    animations: [zoomBigMotion],
                    template: "<ng-content></ng-content>\r\n<ng-template\r\n  #overlay=\"cdkConnectedOverlay\"\r\n  cdkConnectedOverlay\r\n  nzConnectedOverlay\r\n  [cdkConnectedOverlayOrigin]=\"overlayOrigin\"\r\n  [cdkConnectedOverlayOpen]=\"visible$ | async\"\r\n  [cdkConnectedOverlayHasBackdrop]=\"_hasBackdrop\"\r\n  [cdkConnectedOverlayPositions]=\"_positions\"\r\n  (backdropClick)=\"hide()\"\r\n  (detach)=\"hide()\"\r\n  (positionChange)=\"onPositionChange($event)\">\r\n  <div\r\n    class=\"ant-tooltip\"\r\n    [ngClass]=\"_classMap\"\r\n    [ngStyle]=\"overlayStyle\"\r\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n    [@zoomBigMotion]=\"'active'\"\r\n    (@zoomBigMotion.done)=\"_afterVisibilityAnimation($event)\">\r\n    <div class=\"ant-tooltip-content\">\r\n      <div class=\"ant-tooltip-arrow\"></div>\r\n      <div class=\"ant-tooltip-inner\">\r\n        <ng-container *cmacsStringTemplateOutlet=\"title\">{{ title }}</ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n",
                    preserveWhitespaces: false,
                    styles: [".ant-tooltip-content{background-color:#0d1e3b;color:#fff;max-width:160px;border-radius:3px}.ant-tooltip-placement-top .ant-tooltip-arrow{border-top-color:#0d1e3b;opacity:1!important}.ant-tooltip-placement-topLeft .ant-tooltip-arrow,.ant-tooltip-placement-topRight .ant-tooltip-arrow{border-top-color:#0d1e3b!important;opacity:1!important}.ant-tooltip-placement-left .ant-tooltip-arrow,.ant-tooltip-placement-leftBottom .ant-tooltip-arrow,.ant-tooltip-placement-leftTop .ant-tooltip-arrow{border-left-color:#0d1e3b!important;opacity:1!important}.ant-tooltip-placement-right .ant-tooltip-arrow,.ant-tooltip-placement-rightBottom .ant-tooltip-arrow,.ant-tooltip-placement-rightTop .ant-tooltip-arrow{border-right-color:#0d1e3b!important;opacity:1!important}.ant-tooltip-placement-bottom .ant-tooltip-arrow{border-bottom-color:#0d1e3b;opacity:1!important}.ant-tooltip-placement-bottomLeft .ant-tooltip-arrow,.ant-tooltip-placement-bottomRight .ant-tooltip-arrow{border-bottom-color:#0d1e3b!important;opacity:1!important}", "\n      .ant-tooltip {\n        position: relative;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    CmacsTooltipComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    CmacsTooltipComponent.propDecorators = {
        overlay: [{ type: ViewChild, args: ['overlay',] }],
        title: [{ type: Input }, { type: ContentChild, args: ['nzTemplate',] }],
        overlayClassName: [{ type: Input }],
        overlayStyle: [{ type: Input }],
        mouseEnterDelay: [{ type: Input }],
        mouseLeaveDelay: [{ type: Input }],
        cmacsVisible: [{ type: Input }],
        trigger: [{ type: Input }],
        placement: [{ type: Input }],
        cmacsVisibleChange: [{ type: Output }]
    };
    return CmacsTooltipComponent;
}());
export { CmacsTooltipComponent };
if (false) {
    /** @type {?} */
    CmacsTooltipComponent.prototype._hasBackdrop;
    /** @type {?} */
    CmacsTooltipComponent.prototype._prefix;
    /** @type {?} */
    CmacsTooltipComponent.prototype._positions;
    /** @type {?} */
    CmacsTooltipComponent.prototype._classMap;
    /** @type {?} */
    CmacsTooltipComponent.prototype._placement;
    /** @type {?} */
    CmacsTooltipComponent.prototype._trigger;
    /** @type {?} */
    CmacsTooltipComponent.prototype.overlayOrigin;
    /** @type {?} */
    CmacsTooltipComponent.prototype.visibleSource;
    /** @type {?} */
    CmacsTooltipComponent.prototype.visible$;
    /** @type {?} */
    CmacsTooltipComponent.prototype.overlay;
    /** @type {?} */
    CmacsTooltipComponent.prototype.title;
    /** @type {?} */
    CmacsTooltipComponent.prototype.overlayClassName;
    /** @type {?} */
    CmacsTooltipComponent.prototype.overlayStyle;
    /** @type {?} */
    CmacsTooltipComponent.prototype.mouseEnterDelay;
    /** @type {?} */
    CmacsTooltipComponent.prototype.mouseLeaveDelay;
    /** @type {?} */
    CmacsTooltipComponent.prototype.cmacsVisibleChange;
    /** @type {?} */
    CmacsTooltipComponent.prototype.cdr;
    /** @type {?} */
    CmacsTooltipComponent.prototype.noAnimation;
    /* Skipping unhandled member: [property: string]: any;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXRvb2x0aXAvY21hY3MtdG9vbHRpcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQ0wsbUJBQW1CLEVBSXBCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFFTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFFbkQsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixRQUFRLEVBQ1IsU0FBUyxFQUNULGFBQWEsRUFDYix5QkFBeUIsRUFDekIsc0JBQXNCLEVBQ3RCLFlBQVksRUFDYixNQUFNLG9CQUFvQixDQUFDO0FBRTVCO0lBeUVFLCtCQUFtQixHQUFzQixFQUE2QixXQUFvQztRQUF2RixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUE2QixnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUF2RDFHLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLFlBQU8sR0FBRyx1QkFBdUIsQ0FBQztRQUNsQyxlQUFVLG9CQUFpQyx5QkFBeUIsRUFBRTtRQUN0RSxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixhQUFRLEdBQUcsT0FBTyxDQUFDO1FBRW5CLGtCQUFhLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7UUFDcEQsYUFBUSxHQUF3QixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFD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QUNMLEtBQUs7a0NBQ0wsS0FBSztrQ0FDTCxLQUFLOytCQUVMLEtBQUs7MEJBYUwsS0FBSzs0QkFVTCxLQUFLO3FDQVlMLE1BQU07O0lBMERULDRCQUFDO0NBQUEsQUEvSEQsSUErSEM7U0E5R1kscUJBQXFCOzs7SUFDaEMsNkNBQXFCOztJQUNyQix3Q0FBa0M7O0lBQ2xDLDJDQUFzRTs7SUFDdEUsMENBQWU7O0lBQ2YsMkNBQW1COztJQUNuQix5Q0FBbUI7O0lBQ25CLDhDQUFnQzs7SUFDaEMsOENBQW9EOztJQUNwRCx5Q0FBa0U7O0lBQ2xFLHdDQUFtRDs7SUFDbkQsc0NBQThFOztJQUM5RSxpREFBK0I7O0lBQy9CLDZDQUFzRDs7SUFDdEQsZ0RBQWdDOztJQUNoQyxnREFBK0I7O0lBcUMvQixtREFBb0U7O0lBSXhELG9DQUE2Qjs7SUFBRSw0Q0FBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbmltYXRpb25FdmVudCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQge1xyXG4gIENka0Nvbm5lY3RlZE92ZXJsYXksXHJcbiAgQ2RrT3ZlcmxheU9yaWdpbixcclxuICBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UsXHJcbiAgQ29ubmVjdGlvblBvc2l0aW9uUGFpclxyXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBnZXRQbGFjZW1lbnROYW1lLFxyXG4gIGlzTm90TmlsLFxyXG4gIHRvQm9vbGVhbixcclxuICB6b29tQmlnTW90aW9uLFxyXG4gIERFRkFVTFRfVE9PTFRJUF9QT1NJVElPTlMsXHJcbiAgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSxcclxuICBQT1NJVElPTl9NQVBcclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy10b29sdGlwJyxcclxuICBleHBvcnRBczogJ2NtYWNzVG9vbHRpcENvbXBvbmVudCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBhbmltYXRpb25zOiBbem9vbUJpZ01vdGlvbl0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXRvb2x0aXAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXRvb2x0aXAuY29tcG9uZW50LmNzcyddLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICAuYW50LXRvb2x0aXAge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzVG9vbHRpcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgX2hhc0JhY2tkcm9wID0gZmFsc2U7XHJcbiAgX3ByZWZpeCA9ICdhbnQtdG9vbHRpcC1wbGFjZW1lbnQnO1xyXG4gIF9wb3NpdGlvbnM6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXSA9IFsuLi5ERUZBVUxUX1RPT0xUSVBfUE9TSVRJT05TXTtcclxuICBfY2xhc3NNYXAgPSB7fTtcclxuICBfcGxhY2VtZW50ID0gJ3RvcCc7XHJcbiAgX3RyaWdnZXIgPSAnaG92ZXInO1xyXG4gIG92ZXJsYXlPcmlnaW46IENka092ZXJsYXlPcmlnaW47XHJcbiAgdmlzaWJsZVNvdXJjZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIHZpc2libGUkOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy52aXNpYmxlU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIEBWaWV3Q2hpbGQoJ292ZXJsYXknKSBvdmVybGF5OiBDZGtDb25uZWN0ZWRPdmVybGF5O1xyXG4gIEBJbnB1dCgpIEBDb250ZW50Q2hpbGQoJ256VGVtcGxhdGUnKSB0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsO1xyXG4gIEBJbnB1dCgpIG92ZXJsYXlDbGFzc05hbWUgPSAnJztcclxuICBASW5wdXQoKSBvdmVybGF5U3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuICBASW5wdXQoKSBtb3VzZUVudGVyRGVsYXkgPSAwLjE1OyAvLyBzZWNvbmRcclxuICBASW5wdXQoKSBtb3VzZUxlYXZlRGVsYXkgPSAwLjE7IC8vIHNlY29uZFxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBjbWFjc1Zpc2libGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIGNvbnN0IHZpc2libGUgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gICAgaWYgKHRoaXMudmlzaWJsZVNvdXJjZS52YWx1ZSAhPT0gdmlzaWJsZSkge1xyXG4gICAgICB0aGlzLnZpc2libGVTb3VyY2UubmV4dCh2aXNpYmxlKTtcclxuICAgICAgdGhpcy5jbWFjc1Zpc2libGVDaGFuZ2UuZW1pdCh2aXNpYmxlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBjbWFjc1Zpc2libGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy52aXNpYmxlU291cmNlLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgdHJpZ2dlcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl90cmlnZ2VyID0gdmFsdWU7XHJcbiAgICB0aGlzLl9oYXNCYWNrZHJvcCA9IHRoaXMuX3RyaWdnZXIgPT09ICdjbGljayc7XHJcbiAgfVxyXG5cclxuICBnZXQgdHJpZ2dlcigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RyaWdnZXI7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBwbGFjZW1lbnQodmFsdWU6IHN0cmluZykge1xyXG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLl9wbGFjZW1lbnQpIHtcclxuICAgICAgdGhpcy5fcGxhY2VtZW50ID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuX3Bvc2l0aW9ucyA9IFtQT1NJVElPTl9NQVBbdGhpcy5wbGFjZW1lbnRdLCAuLi50aGlzLl9wb3NpdGlvbnNdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHBsYWNlbWVudCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BsYWNlbWVudDtcclxuICB9XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBjbWFjc1Zpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIFtwcm9wZXJ0eTogc3RyaW5nXTogYW55OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIE1hbnVhbGx5IGZvcmNlIHVwZGF0aW5nIGN1cnJlbnQgb3ZlcmxheSdzIHBvc2l0aW9uXHJcbiAgdXBkYXRlUG9zaXRpb24oKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vdmVybGF5ICYmIHRoaXMub3ZlcmxheS5vdmVybGF5UmVmKSB7XHJcbiAgICAgIHRoaXMub3ZlcmxheS5vdmVybGF5UmVmLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblBvc2l0aW9uQ2hhbmdlKHBvc2l0aW9uOiBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UpOiB2b2lkIHtcclxuICAgIHRoaXMucGxhY2VtZW50ID0gZ2V0UGxhY2VtZW50TmFtZShwb3NpdGlvbikhO1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpOyAvLyBUT0RPOiBwZXJmb3JtYW5jZT9cclxuICB9XHJcblxyXG4gIHNob3coKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuaXNDb250ZW50RW1wdHkoKSkge1xyXG4gICAgICB0aGlzLmNtYWNzVmlzaWJsZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoaWRlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jbWFjc1Zpc2libGUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIF9hZnRlclZpc2liaWxpdHlBbmltYXRpb24oZTogQW5pbWF0aW9uRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChlLnRvU3RhdGUgPT09ICdmYWxzZScgJiYgIXRoaXMuY21hY3NWaXNpYmxlKSB7XHJcbiAgICAgIHRoaXMuY21hY3NWaXNpYmxlQ2hhbmdlLmVtaXQoZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgaWYgKGUudG9TdGF0ZSA9PT0gJ3RydWUnICYmIHRoaXMuY21hY3NWaXNpYmxlKSB7XHJcbiAgICAgIHRoaXMuY21hY3NWaXNpYmxlQ2hhbmdlLmVtaXQodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2NsYXNzTWFwID0ge1xyXG4gICAgICBbdGhpcy5vdmVybGF5Q2xhc3NOYW1lXTogdHJ1ZSxcclxuICAgICAgW2Ake3RoaXMuX3ByZWZpeH0tJHt0aGlzLl9wbGFjZW1lbnR9YF06IHRydWVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzZXRPdmVybGF5T3JpZ2luKG9yaWdpbjogQ2RrT3ZlcmxheU9yaWdpbik6IHZvaWQge1xyXG4gICAgdGhpcy5vdmVybGF5T3JpZ2luID0gb3JpZ2luO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGlzQ29udGVudEVtcHR5KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMudGl0bGUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZiA/IGZhbHNlIDogdGhpcy50aXRsZSA9PT0gJycgfHwgIWlzTm90TmlsKHRoaXMudGl0bGUpO1xyXG4gIH1cclxufVxyXG4iXX0=