/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, EventEmitter, Host, Input, Optional, Output, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { getPlacementName, isNotNil, toBoolean, zoomBigMotion, DEFAULT_TOOLTIP_POSITIONS, NzNoAnimationDirective, POSITION_MAP } from 'ng-zorro-antd/core';
export class CmacsTooltipComponent {
    // tslint:disable-line:no-any
    /**
     * @param {?} cdr
     * @param {?=} noAnimation
     */
    constructor(cdr, noAnimation) {
        this.cdr = cdr;
        this.noAnimation = noAnimation;
        this._hasBackdrop = false;
        this._prefix = 'ant-tooltip-placement';
        this._positions = [...DEFAULT_TOOLTIP_POSITIONS];
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
    // second
    /**
     * @param {?} value
     * @return {?}
     */
    set cmacsVisible(value) {
        /** @type {?} */
        const visible = toBoolean(value);
        if (this.visibleSource.value !== visible) {
            this.visibleSource.next(visible);
            this.cmacsVisibleChange.emit(visible);
        }
    }
    /**
     * @return {?}
     */
    get cmacsVisible() {
        return this.visibleSource.value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set trigger(value) {
        this._trigger = value;
        this._hasBackdrop = this._trigger === 'click';
    }
    /**
     * @return {?}
     */
    get trigger() {
        return this._trigger;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set placement(value) {
        if (value !== this._placement) {
            this._placement = value;
            this._positions = [POSITION_MAP[this.placement], ...this._positions];
        }
    }
    /**
     * @return {?}
     */
    get placement() {
        return this._placement;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        Promise.resolve().then((/**
         * @return {?}
         */
        () => {
            this.updatePosition();
        }));
    }
    // Manually force updating current overlay's position
    /**
     * @return {?}
     */
    updatePosition() {
        if (this.overlay && this.overlay.overlayRef) {
            this.overlay.overlayRef.updatePosition();
        }
    }
    /**
     * @param {?} position
     * @return {?}
     */
    onPositionChange(position) {
        this.placement = (/** @type {?} */ (getPlacementName(position)));
        this.setClassMap();
        this.cdr.detectChanges(); // TODO: performance?
    }
    /**
     * @return {?}
     */
    show() {
        if (!this.isContentEmpty()) {
            this.cmacsVisible = true;
        }
    }
    /**
     * @return {?}
     */
    hide() {
        this.cmacsVisible = false;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    _afterVisibilityAnimation(e) {
        if (e.toState === 'false' && !this.cmacsVisible) {
            this.cmacsVisibleChange.emit(false);
        }
        if (e.toState === 'true' && this.cmacsVisible) {
            this.cmacsVisibleChange.emit(true);
        }
    }
    /**
     * @return {?}
     */
    setClassMap() {
        this._classMap = {
            [this.overlayClassName]: true,
            [`${this._prefix}-${this._placement}`]: true
        };
    }
    /**
     * @param {?} origin
     * @return {?}
     */
    setOverlayOrigin(origin) {
        this.overlayOrigin = origin;
    }
    /**
     * @protected
     * @return {?}
     */
    isContentEmpty() {
        return this.title instanceof TemplateRef ? false : this.title === '' || !isNotNil(this.title);
    }
}
CmacsTooltipComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmacs-tooltip',
                exportAs: 'cmacsTooltipComponent',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                animations: [zoomBigMotion],
                template: "<ng-content></ng-content>\r\n<ng-template\r\n  #overlay=\"cdkConnectedOverlay\"\r\n  cdkConnectedOverlay\r\n  nzConnectedOverlay\r\n  [cdkConnectedOverlayOrigin]=\"overlayOrigin\"\r\n  [cdkConnectedOverlayOpen]=\"visible$ | async\"\r\n  [cdkConnectedOverlayHasBackdrop]=\"_hasBackdrop\"\r\n  [cdkConnectedOverlayPositions]=\"_positions\"\r\n  (backdropClick)=\"hide()\"\r\n  (detach)=\"hide()\"\r\n  (positionChange)=\"onPositionChange($event)\">\r\n  <div\r\n    class=\"ant-tooltip\"\r\n    [ngClass]=\"_classMap\"\r\n    [ngStyle]=\"overlayStyle\"\r\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n    [@zoomBigMotion]=\"'active'\"\r\n    (@zoomBigMotion.done)=\"_afterVisibilityAnimation($event)\">\r\n    <div class=\"ant-tooltip-content\">\r\n      <div class=\"ant-tooltip-arrow\"></div>\r\n      <div class=\"ant-tooltip-inner\">\r\n        <ng-container *cmacsStringTemplateOutlet=\"title\">{{ title }}</ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n",
                preserveWhitespaces: false,
                styles: [".ant-tooltip-content{background-color:#0d1e3b;color:#fff;max-width:160px;border-radius:3px}.ant-tooltip-placement-top .ant-tooltip-arrow{border-top-color:#0d1e3b;opacity:1!important}.ant-tooltip-placement-topLeft .ant-tooltip-arrow,.ant-tooltip-placement-topRight .ant-tooltip-arrow{border-top-color:#0d1e3b!important;opacity:1!important}.ant-tooltip-placement-left .ant-tooltip-arrow,.ant-tooltip-placement-leftBottom .ant-tooltip-arrow,.ant-tooltip-placement-leftTop .ant-tooltip-arrow{border-left-color:#0d1e3b!important;opacity:1!important}.ant-tooltip-placement-right .ant-tooltip-arrow,.ant-tooltip-placement-rightBottom .ant-tooltip-arrow,.ant-tooltip-placement-rightTop .ant-tooltip-arrow{border-right-color:#0d1e3b!important;opacity:1!important}.ant-tooltip-placement-bottom .ant-tooltip-arrow{border-bottom-color:#0d1e3b;opacity:1!important}.ant-tooltip-placement-bottomLeft .ant-tooltip-arrow,.ant-tooltip-placement-bottomRight .ant-tooltip-arrow{border-bottom-color:#0d1e3b!important;opacity:1!important}", `
      .ant-tooltip {
        position: relative;
      }
    `]
            }] }
];
/** @nocollapse */
CmacsTooltipComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXRvb2x0aXAvY21hY3MtdG9vbHRpcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFDTCxtQkFBbUIsRUFJcEIsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUVMLFFBQVEsRUFDUixNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUVuRCxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLFFBQVEsRUFDUixTQUFTLEVBQ1QsYUFBYSxFQUNiLHlCQUF5QixFQUN6QixzQkFBc0IsRUFDdEIsWUFBWSxFQUNiLE1BQU0sb0JBQW9CLENBQUM7QUFtQjVCLE1BQU0sT0FBTyxxQkFBcUI7Ozs7OztJQXdEaEMsWUFBbUIsR0FBc0IsRUFBNkIsV0FBb0M7UUFBdkYsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBNkIsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO1FBdkQxRyxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixZQUFPLEdBQUcsdUJBQXVCLENBQUM7UUFDbEMsZUFBVSxHQUE2QixDQUFDLEdBQUcseUJBQXlCLENBQUMsQ0FBQztRQUN0RSxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixhQUFRLEdBQUcsT0FBTyxDQUFDO1FBRW5CLGtCQUFhLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7UUFDcEQsYUFBUSxHQUF3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LEtBQUs7d0JBVUwsS0FBSztpQ0FZTCxNQUFNOzs7O0lBbkRQLDZDQUFxQjs7SUFDckIsd0NBQWtDOztJQUNsQywyQ0FBc0U7O0lBQ3RFLDBDQUFlOztJQUNmLDJDQUFtQjs7SUFDbkIseUNBQW1COztJQUNuQiw4Q0FBZ0M7O0lBQ2hDLDhDQUFvRDs7SUFDcEQseUNBQWtFOztJQUNsRSx3Q0FBbUQ7O0lBQ25ELHNDQUE4RTs7SUFDOUUsaURBQStCOztJQUMvQiw2Q0FBc0Q7O0lBQ3RELGdEQUFnQzs7SUFDaEMsZ0RBQStCOztJQXFDL0IsbURBQW9FOztJQUl4RCxvQ0FBNkI7O0lBQUUsNENBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW5pbWF0aW9uRXZlbnQgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHtcclxuICBDZGtDb25uZWN0ZWRPdmVybGF5LFxyXG4gIENka092ZXJsYXlPcmlnaW4sXHJcbiAgQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlLFxyXG4gIENvbm5lY3Rpb25Qb3NpdGlvblBhaXJcclxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgZ2V0UGxhY2VtZW50TmFtZSxcclxuICBpc05vdE5pbCxcclxuICB0b0Jvb2xlYW4sXHJcbiAgem9vbUJpZ01vdGlvbixcclxuICBERUZBVUxUX1RPT0xUSVBfUE9TSVRJT05TLFxyXG4gIE56Tm9BbmltYXRpb25EaXJlY3RpdmUsXHJcbiAgUE9TSVRJT05fTUFQXHJcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtdG9vbHRpcCcsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1Rvb2x0aXBDb21wb25lbnQnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgYW5pbWF0aW9uczogW3pvb21CaWdNb3Rpb25dLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy10b29sdGlwLmNvbXBvbmVudC5odG1sJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy10b29sdGlwLmNvbXBvbmVudC5jc3MnXSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgLmFudC10b29sdGlwIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1Rvb2x0aXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIF9oYXNCYWNrZHJvcCA9IGZhbHNlO1xyXG4gIF9wcmVmaXggPSAnYW50LXRvb2x0aXAtcGxhY2VtZW50JztcclxuICBfcG9zaXRpb25zOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10gPSBbLi4uREVGQVVMVF9UT09MVElQX1BPU0lUSU9OU107XHJcbiAgX2NsYXNzTWFwID0ge307XHJcbiAgX3BsYWNlbWVudCA9ICd0b3AnO1xyXG4gIF90cmlnZ2VyID0gJ2hvdmVyJztcclxuICBvdmVybGF5T3JpZ2luOiBDZGtPdmVybGF5T3JpZ2luO1xyXG4gIHZpc2libGVTb3VyY2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcclxuICB2aXNpYmxlJDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMudmlzaWJsZVNvdXJjZS5hc09ic2VydmFibGUoKTtcclxuICBAVmlld0NoaWxkKCdvdmVybGF5Jykgb3ZlcmxheTogQ2RrQ29ubmVjdGVkT3ZlcmxheTtcclxuICBASW5wdXQoKSBAQ29udGVudENoaWxkKCduelRlbXBsYXRlJykgdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbDtcclxuICBASW5wdXQoKSBvdmVybGF5Q2xhc3NOYW1lID0gJyc7XHJcbiAgQElucHV0KCkgb3ZlcmxheVN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XHJcbiAgQElucHV0KCkgbW91c2VFbnRlckRlbGF5ID0gMC4xNTsgLy8gc2Vjb25kXHJcbiAgQElucHV0KCkgbW91c2VMZWF2ZURlbGF5ID0gMC4xOyAvLyBzZWNvbmRcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgY21hY3NWaXNpYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICBjb25zdCB2aXNpYmxlID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICAgIGlmICh0aGlzLnZpc2libGVTb3VyY2UudmFsdWUgIT09IHZpc2libGUpIHtcclxuICAgICAgdGhpcy52aXNpYmxlU291cmNlLm5leHQodmlzaWJsZSk7XHJcbiAgICAgIHRoaXMuY21hY3NWaXNpYmxlQ2hhbmdlLmVtaXQodmlzaWJsZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgY21hY3NWaXNpYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMudmlzaWJsZVNvdXJjZS52YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHRyaWdnZXIodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fdHJpZ2dlciA9IHZhbHVlO1xyXG4gICAgdGhpcy5faGFzQmFja2Ryb3AgPSB0aGlzLl90cmlnZ2VyID09PSAnY2xpY2snO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRyaWdnZXIoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl90cmlnZ2VyO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgcGxhY2VtZW50KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fcGxhY2VtZW50KSB7XHJcbiAgICAgIHRoaXMuX3BsYWNlbWVudCA9IHZhbHVlO1xyXG4gICAgICB0aGlzLl9wb3NpdGlvbnMgPSBbUE9TSVRJT05fTUFQW3RoaXMucGxhY2VtZW50XSwgLi4udGhpcy5fcG9zaXRpb25zXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBwbGFjZW1lbnQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9wbGFjZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY21hY3NWaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBbcHJvcGVydHk6IHN0cmluZ106IGFueTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSkge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcclxuICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBNYW51YWxseSBmb3JjZSB1cGRhdGluZyBjdXJyZW50IG92ZXJsYXkncyBwb3NpdGlvblxyXG4gIHVwZGF0ZVBvc2l0aW9uKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMub3ZlcmxheSAmJiB0aGlzLm92ZXJsYXkub3ZlcmxheVJlZikge1xyXG4gICAgICB0aGlzLm92ZXJsYXkub3ZlcmxheVJlZi51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Qb3NpdGlvbkNoYW5nZShwb3NpdGlvbjogQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlKTogdm9pZCB7XHJcbiAgICB0aGlzLnBsYWNlbWVudCA9IGdldFBsYWNlbWVudE5hbWUocG9zaXRpb24pITtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTsgLy8gVE9ETzogcGVyZm9ybWFuY2U/XHJcbiAgfVxyXG5cclxuICBzaG93KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmlzQ29udGVudEVtcHR5KCkpIHtcclxuICAgICAgdGhpcy5jbWFjc1Zpc2libGUgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGlkZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY21hY3NWaXNpYmxlID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBfYWZ0ZXJWaXNpYmlsaXR5QW5pbWF0aW9uKGU6IEFuaW1hdGlvbkV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoZS50b1N0YXRlID09PSAnZmFsc2UnICYmICF0aGlzLmNtYWNzVmlzaWJsZSkge1xyXG4gICAgICB0aGlzLmNtYWNzVmlzaWJsZUNoYW5nZS5lbWl0KGZhbHNlKTtcclxuICAgIH1cclxuICAgIGlmIChlLnRvU3RhdGUgPT09ICd0cnVlJyAmJiB0aGlzLmNtYWNzVmlzaWJsZSkge1xyXG4gICAgICB0aGlzLmNtYWNzVmlzaWJsZUNoYW5nZS5lbWl0KHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9jbGFzc01hcCA9IHtcclxuICAgICAgW3RoaXMub3ZlcmxheUNsYXNzTmFtZV06IHRydWUsXHJcbiAgICAgIFtgJHt0aGlzLl9wcmVmaXh9LSR7dGhpcy5fcGxhY2VtZW50fWBdOiB0cnVlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc2V0T3ZlcmxheU9yaWdpbihvcmlnaW46IENka092ZXJsYXlPcmlnaW4pOiB2b2lkIHtcclxuICAgIHRoaXMub3ZlcmxheU9yaWdpbiA9IG9yaWdpbjtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBpc0NvbnRlbnRFbXB0eSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnRpdGxlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYgPyBmYWxzZSA6IHRoaXMudGl0bGUgPT09ICcnIHx8ICFpc05vdE5pbCh0aGlzLnRpdGxlKTtcclxuICB9XHJcbn1cclxuIl19