/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, EventEmitter, Host, Injector, Input, Optional, Output, Self, ViewChild, ViewEncapsulation } from '@angular/core';
import { combineLatest, merge, EMPTY, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, mapTo, takeUntil } from 'rxjs/operators';
import { slideMotion, InputBoolean, NzDropdownHigherOrderServiceToken, NzNoAnimationDirective, POSITION_MAP } from 'ng-zorro-antd/core';
import { NzMenuDirective } from 'ng-zorro-antd/menu';
import { CmacsDropdownDirective } from './cmacs-dropdown.directive';
import { CmacsMenuDropdownService } from './cmacs-menu-dropdown.service';
/** @type {?} */
export var CMACS_DROPDOWN_POSITIONS = [
    POSITION_MAP.bottomLeft,
    POSITION_MAP.bottomRight,
    POSITION_MAP.topLeft,
    POSITION_MAP.topRight,
    POSITION_MAP.leftTop,
    POSITION_MAP.rightTop
];
/**
 * @param {?} injector
 * @return {?}
 */
export function menuServiceFactory(injector) {
    return injector.get(CmacsMenuDropdownService);
}
var CmacsDropdownComponent = /** @class */ (function () {
    function CmacsDropdownComponent(cdr, cmacsMenuDropdownService, noAnimation) {
        this.cdr = cdr;
        this.cmacsMenuDropdownService = cmacsMenuDropdownService;
        this.noAnimation = noAnimation;
        this.triggerWidth = 0;
        this.updatedPosition = 'bottom';
        this.updatedOverLay = 'end';
        this.updatedOrigin = 'end';
        this.dropDownPosition = 'bottom';
        this.positions = tslib_1.__spread(CMACS_DROPDOWN_POSITIONS);
        this.visible$ = new Subject();
        this.destroy$ = new Subject();
        this.trigger = 'hover';
        this.overlayClassName = '';
        this.overlayStyle = {};
        this.placement = 'bottomLeft';
        this.clickHide = true;
        this.disabled = false;
        this.visible = false;
        this.tableFilter = false;
        this.visibleChange = new EventEmitter();
    }
    /**
     * @param {?} visible
     * @param {?=} trigger
     * @return {?}
     */
    CmacsDropdownComponent.prototype.setVisibleStateWhen = /**
     * @param {?} visible
     * @param {?=} trigger
     * @return {?}
     */
    function (visible, trigger) {
        if (trigger === void 0) { trigger = 'all'; }
        if (this.trigger === trigger || trigger === 'all') {
            this.visible$.next(visible);
        }
    };
    /**
     * @param {?} position
     * @return {?}
     */
    CmacsDropdownComponent.prototype.onPositionChange = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        this.dropDownPosition = position.connectionPair.originY;
        this.updatedOverLay = position.connectionPair.overlayX;
        this.updatedOrigin = position.connectionPair.originX;
        this.updatedPosition = this.dropDownPosition;
        this.cdr.detectChanges();
        this.cdr.markForCheck();
    };
    /**
     * @param {?} observable$
     * @return {?}
     */
    CmacsDropdownComponent.prototype.startSubscribe = /**
     * @param {?} observable$
     * @return {?}
     */
    function (observable$) {
        var _this = this;
        /** @type {?} */
        var click$ = this.clickHide ? this.cmacsMenuDropdownService.menuItemClick$.pipe(mapTo(false)) : EMPTY;
        combineLatest(merge(observable$, click$), this.cmacsMenuDropdownService.menuOpen$)
            .pipe(map((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return value[0] || value[1]; })), debounceTime(50), distinctUntilChanged(), takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} visible
         * @return {?}
         */
        function (visible) {
            if (!_this.disabled && _this.visible !== visible) {
                _this.visible = visible;
                _this.visibleChange.emit(_this.visible);
                _this.triggerWidth = _this.cmacsDropdownDirective.elementRef.nativeElement.getBoundingClientRect().width;
                _this.cdr.markForCheck();
            }
        }));
    };
    /**
     * @return {?}
     */
    CmacsDropdownComponent.prototype.updateDisabledState = /**
     * @return {?}
     */
    function () {
        if (this.cmacsDropdownDirective) {
            this.cmacsDropdownDirective.setDisabled(this.disabled);
        }
    };
    /**
     * @return {?}
     */
    CmacsDropdownComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @return {?}
     */
    CmacsDropdownComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.startSubscribe(merge(this.visible$, this.trigger === 'hover' ? this.cmacsDropdownDirective.hover$ : this.cmacsDropdownDirective.$click));
        this.updateDisabledState();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsDropdownComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.visible) {
            this.visible$.next(this.visible);
        }
        if (changes.disabled) {
            this.updateDisabledState();
        }
        if (changes.placement) {
            this.dropDownPosition = this.placement.indexOf('top') !== -1 ? 'top' : 'bottom';
            this.positions = tslib_1.__spread([POSITION_MAP[this.placement]], this.positions);
        }
    };
    CmacsDropdownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-dropdown',
                    exportAs: 'cmacsDropdown',
                    preserveWhitespaces: false,
                    providers: [
                        CmacsMenuDropdownService,
                        {
                            provide: NzDropdownHigherOrderServiceToken,
                            useFactory: menuServiceFactory,
                            deps: [[new Self(), Injector]]
                        }
                    ],
                    animations: [slideMotion],
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "<ng-content select=\"[cmacs-dropdown]\"></ng-content>\r\n<ng-template\r\n  cdkConnectedOverlay\r\n  nzConnectedOverlay\r\n  [cdkConnectedOverlayHasBackdrop]=\"trigger === 'click'\"\r\n  [cdkConnectedOverlayPositions]=\"positions\"\r\n  [cdkConnectedOverlayOrigin]=\"cmacsDropdownDirective\"\r\n  [cdkConnectedOverlayMinWidth]=\"triggerWidth\"\r\n  [cdkConnectedOverlayOpen]=\"visible\"\r\n  (backdropClick)=\"setVisibleStateWhen(false)\"\r\n  (detach)=\"setVisibleStateWhen(false)\"\r\n  (positionChange)=\"onPositionChange($event)\">\r\n  <div #dropdown class=\"{{'cmacs-dropdown ant-dropdown ant-dropdown-placement-'+placement}}\"\r\n    [class.cmacs-dropdown-updated-position-bottom-top]=\"updatedPosition === 'top'\"\r\n    [class.cmacs-dropdown-updated-position-top-bottom]=\"updatedPosition === 'bottom'\"\r\n    [class.cmacs-dropdown-updated-overlay-end-start]=\"updatedOverLay === 'start'\"\r\n    [class.cmacs-dropdown-updated-origin-end-start]=\"updatedOrigin === 'start'\"\r\n    [ngClass]=\"overlayClassName\"\r\n    [ngStyle]=\"overlayStyle\"\r\n    [@slideMotion]=\"dropDownPosition\"\r\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n    [style.minWidth.px]=\"triggerWidth\"\r\n    (mouseenter)=\"setVisibleStateWhen(true,'hover')\"\r\n    (mouseleave)=\"setVisibleStateWhen(false,'hover')\">\r\n    <div [class.ant-table-filter-dropdown]=\"tableFilter\">\r\n      <ng-content select=\"[cmacs-menu]\"></ng-content>\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n",
                    styles: [":root{--bg-color:white}.cmacs-dropdown .ant-dropdown-menu-item{padding:8px 10px 8px 5px;border-top:1px solid #dee0e5}.cmacs-dropdown .ant-dropdown-menu-item:first-child{border-top:none}.cmacs-dropdown ul{padding:0;border:1px solid #dee0e5}.cmacs-dropdown.ant-dropdown-placement-bottomCenter ul{top:8px}.cmacs-dropdown.ant-dropdown-placement-topCenter ul{top:-8px}.cmacs-dropdown.ant-dropdown-placement-leftTop ul{left:-7px;top:-5px}.cmacs-dropdown.ant-dropdown-placement-rightTop ul{right:-6px;top:-5px}.cmacs-dropdown.ant-dropdown-placement-bottomCenter .ant-dropdown-menu-item:first-child::before{content:'';opacity:1;margin:0 auto;display:table;width:10px;position:absolute;border:1px solid #dee0e5;border-top:transparent;border-left:transparent;height:10px;background-color:#fff;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);top:-6px;-webkit-transition:.3s;transition:.3s;left:calc(50% - 10px)}.cmacs-dropdown-updated-position-bottom-top.cmacs-dropdown.ant-dropdown-placement-bottomCenter .ant-dropdown-menu-item:last-child:hover::after,.cmacs-dropdown-updated-position-top-bottom.cmacs-dropdown.ant-dropdown-placement-topCenter .ant-dropdown-menu-item:first-child:hover::before,.cmacs-dropdown.ant-dropdown-placement-bottomCenter .ant-dropdown-menu-item:first-child:hover::before,.cmacs-dropdown.ant-dropdown-placement-leftTop .ant-dropdown-menu-item:first-child:hover::before,.cmacs-dropdown.ant-dropdown-placement-rightTop .ant-dropdown-menu-item:first-child:hover::before,.cmacs-dropdown.ant-dropdown-placement-topCenter .ant-dropdown-menu-item:last-child:hover::after{background-color:#f6f7fb;-webkit-transition:.3s;transition:.3s}.cmacs-dropdown-updated-position-bottom-top.cmacs-dropdown.ant-dropdown-placement-bottomCenter .ant-dropdown-menu-item:first-child::before,.cmacs-dropdown-updated-position-top-bottom.cmacs-dropdown.ant-dropdown-placement-topCenter .ant-dropdown-menu-item:last-child::after{display:none}.cmacs-dropdown-updated-position-bottom-top.cmacs-dropdown.ant-dropdown-placement-bottomCenter .ant-dropdown-menu-item:last-child::after{width:10px;border:1px solid #dee0e5;border-bottom:#dee0e5;border-right:#dee0e5;height:10px;background-color:#fff;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);content:'';opacity:1;left:calc(50% - 5px);position:fixed;margin-top:4px;-webkit-transition:.3s;transition:.3s}.cmacs-dropdown-updated-position-top-bottom.cmacs-dropdown.ant-dropdown-placement-topCenter .ant-dropdown-menu-item:first-child::before{content:'';opacity:1;margin:0 auto;display:table;width:10px;position:absolute;border:1px solid #dee0e5;border-top:transparent;border-left:transparent;height:10px;background-color:#fff;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);top:-6px;-webkit-transition:.3s;transition:.3s;left:calc(50% - 10px)}.cmacs-dropdown.ant-dropdown-placement-topCenter .ant-dropdown-menu-item:last-child::after{width:10px;border:1px solid #dee0e5;border-bottom:#dee0e5;border-right:#dee0e5;height:10px;background-color:#fff;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);content:'';opacity:1;left:calc(50% - 5px);position:fixed;margin-top:4px;-webkit-transition:.3s;transition:.3s}.cmacs-dropdown.ant-dropdown-placement-leftTop .ant-dropdown-menu-item:first-child::before{content:'';opacity:1;margin:0 auto;display:table;width:10px;position:absolute;border:1px solid #dee0e5;border-top:transparent;border-right:transparent;height:10px;background-color:#fff;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);top:10px;left:calc(100% - 4px);-webkit-transition:.3s;transition:.3s}.cmacs-dropdown.ant-dropdown-placement-rightTop .ant-dropdown-menu-item:first-child::before{content:'';opacity:1;margin:0 auto;display:table;width:10px;position:absolute;border:1px solid #dee0e5;border-left:transparent;border-bottom:transparent;height:10px;background-color:#fff;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);top:10px;right:calc(100% - 5px);-webkit-transition:.3s;transition:.3s}.cmacs-dropdown-updated-overlay-end-start.cmacs-dropdown.ant-dropdown-placement-leftTop ul{left:calc(-100% - 8px);top:38px}.cmacs-dropdown-updated-origin-end-start.cmacs-dropdown.ant-dropdown-placement-rightTop ul{left:calc(80% - 5px);top:38px}.cmacs-dropdown-updated-origin-end-start.cmacs-dropdown.ant-dropdown-placement-rightTop .ant-dropdown-menu-item:first-child::before,.cmacs-dropdown-updated-overlay-end-start.cmacs-dropdown.ant-dropdown-placement-leftTop .ant-dropdown-menu-item:first-child::before{display:none}.cmacs-dropdown-updated-overlay-end-start.cmacs-dropdown.ant-dropdown-placement-leftTop .ant-dropdown-menu-item:last-child::after{content:'';opacity:1;display:table;width:10px;position:fixed;border:1px solid #dee0e5;border-top:transparent;border-right:transparent;height:10px;background-color:#fff;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);left:calc(100% - 4px);-webkit-transition:.3s;transition:.3s;margin-top:-12px}.cmacs-dropdown-updated-origin-end-start.cmacs-dropdown.ant-dropdown-placement-rightTop .ant-dropdown-menu-item:last-child::after{content:'';opacity:1;display:table;width:10px;position:fixed;border:1px solid #dee0e5;border-left:transparent;border-bottom:transparent;height:10px;background-color:#fff;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);right:calc(100% - 5px);-webkit-transition:.3s;transition:.3s;margin-top:-12px}.cmacs-dropdown-updated-origin-end-start.cmacs-dropdown.ant-dropdown-placement-rightTop .ant-dropdown-menu-item:last-child:hover::after,.cmacs-dropdown-updated-overlay-end-start.cmacs-dropdown.ant-dropdown-placement-leftTop .ant-dropdown-menu-item:last-child:hover::after{background-color:#f6f7fb;-webkit-transition:.3s;transition:.3s}", "\n      .ant-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    CmacsDropdownComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: CmacsMenuDropdownService },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    CmacsDropdownComponent.propDecorators = {
        cmacsDropdownDirective: [{ type: ContentChild, args: [CmacsDropdownDirective,] }],
        nzMenuDirective: [{ type: ContentChild, args: [NzMenuDirective,] }],
        cdkConnectedOverlay: [{ type: ViewChild, args: [CdkConnectedOverlay,] }],
        trigger: [{ type: Input }],
        overlayClassName: [{ type: Input }],
        overlayStyle: [{ type: Input }],
        placement: [{ type: Input }],
        clickHide: [{ type: Input }],
        disabled: [{ type: Input }],
        visible: [{ type: Input }],
        tableFilter: [{ type: Input }],
        visibleChange: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsDropdownComponent.prototype, "clickHide", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsDropdownComponent.prototype, "disabled", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsDropdownComponent.prototype, "visible", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsDropdownComponent.prototype, "tableFilter", void 0);
    return CmacsDropdownComponent;
}());
export { CmacsDropdownComponent };
if (false) {
    /** @type {?} */
    CmacsDropdownComponent.prototype.triggerWidth;
    /** @type {?} */
    CmacsDropdownComponent.prototype.updatedPosition;
    /** @type {?} */
    CmacsDropdownComponent.prototype.updatedOverLay;
    /** @type {?} */
    CmacsDropdownComponent.prototype.updatedOrigin;
    /** @type {?} */
    CmacsDropdownComponent.prototype.dropDownPosition;
    /** @type {?} */
    CmacsDropdownComponent.prototype.positions;
    /** @type {?} */
    CmacsDropdownComponent.prototype.visible$;
    /**
     * @type {?}
     * @private
     */
    CmacsDropdownComponent.prototype.destroy$;
    /** @type {?} */
    CmacsDropdownComponent.prototype.cmacsDropdownDirective;
    /** @type {?} */
    CmacsDropdownComponent.prototype.nzMenuDirective;
    /** @type {?} */
    CmacsDropdownComponent.prototype.cdkConnectedOverlay;
    /** @type {?} */
    CmacsDropdownComponent.prototype.trigger;
    /** @type {?} */
    CmacsDropdownComponent.prototype.overlayClassName;
    /** @type {?} */
    CmacsDropdownComponent.prototype.overlayStyle;
    /** @type {?} */
    CmacsDropdownComponent.prototype.placement;
    /** @type {?} */
    CmacsDropdownComponent.prototype.clickHide;
    /** @type {?} */
    CmacsDropdownComponent.prototype.disabled;
    /** @type {?} */
    CmacsDropdownComponent.prototype.visible;
    /** @type {?} */
    CmacsDropdownComponent.prototype.tableFilter;
    /** @type {?} */
    CmacsDropdownComponent.prototype.visibleChange;
    /**
     * @type {?}
     * @protected
     */
    CmacsDropdownComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    CmacsDropdownComponent.prototype.cmacsMenuDropdownService;
    /** @type {?} */
    CmacsDropdownComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1kcm9wZG93bi9jbWFjcy1kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsbUJBQW1CLEVBQTBELE1BQU0sc0JBQXNCLENBQUM7QUFDbkgsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osSUFBSSxFQUNKLFFBQVEsRUFDUixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFDTixJQUFJLEVBRUosU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzRixPQUFPLEVBQ0wsV0FBVyxFQUVYLFlBQVksRUFDWixpQ0FBaUMsRUFFakMsc0JBQXNCLEVBQ3RCLFlBQVksRUFDYixNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7QUFJekUsTUFBTSxLQUFLLHdCQUF3QixHQUFHO0lBQ3BDLFlBQVksQ0FBQyxVQUFVO0lBQ3ZCLFlBQVksQ0FBQyxXQUFXO0lBQ3hCLFlBQVksQ0FBQyxPQUFPO0lBQ3BCLFlBQVksQ0FBQyxRQUFRO0lB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WSxTQUFDLGVBQWU7c0NBQzVCLFNBQVMsU0FBQyxtQkFBbUI7MEJBQzdCLEtBQUs7bUNBQ0wsS0FBSzsrQkFDTCxLQUFLOzRCQUNMLEtBQUs7NEJBQ0wsS0FBSzsyQkFDTCxLQUFLOzBCQUNMLEtBQUs7OEJBQ0wsS0FBSztnQ0FDTCxNQUFNOztJQUprQjtRQUFmLFlBQVksRUFBRTs7NkRBQWtCO0lBQ2pCO1FBQWYsWUFBWSxFQUFFOzs0REFBa0I7SUFDakI7UUFBZixZQUFZLEVBQUU7OzJEQUFpQjtJQUNoQjtRQUFmLFlBQVksRUFBRTs7K0RBQXFCO0lBNEUvQyw2QkFBQztDQUFBLEFBN0hELElBNkhDO1NBL0ZZLHNCQUFzQjs7O0lBQ2pDLDhDQUFpQjs7SUFDakIsaURBQTJCOztJQUMzQixnREFBdUI7O0lBQ3ZCLCtDQUFzQjs7SUFDdEIsa0RBQXlEOztJQUN6RCwyQ0FBb0U7O0lBQ3BFLDBDQUFrQzs7Ozs7SUFDbEMsMENBQXVDOztJQUN2Qyx3REFBcUY7O0lBQ3JGLGlEQUFnRTs7SUFDaEUscURBQXlFOztJQUN6RSx5Q0FBOEM7O0lBQzlDLGtEQUErQjs7SUFDL0IsOENBQXNEOztJQUN0RCwyQ0FBNkM7O0lBQzdDLDJDQUEwQzs7SUFDMUMsMENBQTBDOztJQUMxQyx5Q0FBeUM7O0lBQ3pDLDZDQUE2Qzs7SUFDN0MsK0NBQTZFOzs7OztJQTJDM0UscUNBQWdDOzs7OztJQUNoQywwREFBMEQ7O0lBQzFELDZDQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka0Nvbm5lY3RlZE92ZXJsYXksIENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSwgQ29ubmVjdGlvblBvc2l0aW9uUGFpciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGQsIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3QsIEhvc3RCaW5kaW5nLFxyXG4gIEluamVjdG9yLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFNlbGYsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIG1lcmdlLCBFTVBUWSwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAsIG1hcFRvLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIHNsaWRlTW90aW9uLFxyXG4gIERFRkFVTFRfRFJPUERPV05fUE9TSVRJT05TLFxyXG4gIElucHV0Qm9vbGVhbixcclxuICBOekRyb3Bkb3duSGlnaGVyT3JkZXJTZXJ2aWNlVG9rZW4sXHJcbiAgTnpNZW51QmFzZVNlcnZpY2UsXHJcbiAgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSxcclxuICBQT1NJVElPTl9NQVBcclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOek1lbnVEaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL21lbnUnO1xyXG5cclxuaW1wb3J0IHsgQ21hY3NEcm9wZG93bkRpcmVjdGl2ZSB9IGZyb20gJy4vY21hY3MtZHJvcGRvd24uZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQ21hY3NNZW51RHJvcGRvd25TZXJ2aWNlIH0gZnJvbSAnLi9jbWFjcy1tZW51LWRyb3Bkb3duLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IHR5cGUgcGxhY2VtZW50ID0gJ2JvdHRvbUxlZnQnIHwgJ2JvdHRvbUNlbnRlcicgfCAnYm90dG9tUmlnaHQnIHwgJ3RvcExlZnQnIHwgJ3RvcENlbnRlcicgfCAndG9wUmlnaHQnIHwgJ2xlZnRUb3AnIHwgJ3JpZ2h0VG9wJztcclxuXHJcbmV4cG9ydCB2YXIgQ01BQ1NfRFJPUERPV05fUE9TSVRJT05TID0gW1xyXG4gIFBPU0lUSU9OX01BUC5ib3R0b21MZWZ0LFxyXG4gIFBPU0lUSU9OX01BUC5ib3R0b21SaWdodCxcclxuICBQT1NJVElPTl9NQVAudG9wTGVmdCxcclxuICBQT1NJVElPTl9NQVAudG9wUmlnaHQsXHJcbiAgUE9TSVRJT05fTUFQLmxlZnRUb3AsXHJcbiAgUE9TSVRJT05fTUFQLnJpZ2h0VG9wXHJcbl07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWVudVNlcnZpY2VGYWN0b3J5KGluamVjdG9yOiBJbmplY3Rvcik6IE56TWVudUJhc2VTZXJ2aWNlIHtcclxuICByZXR1cm4gaW5qZWN0b3IuZ2V0KENtYWNzTWVudURyb3Bkb3duU2VydmljZSk7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtZHJvcGRvd24nLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NEcm9wZG93bicsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBDbWFjc01lbnVEcm9wZG93blNlcnZpY2UsXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE56RHJvcGRvd25IaWdoZXJPcmRlclNlcnZpY2VUb2tlbixcclxuICAgICAgdXNlRmFjdG9yeTogbWVudVNlcnZpY2VGYWN0b3J5LFxyXG4gICAgICBkZXBzOiBbW25ldyBTZWxmKCksIEluamVjdG9yXV1cclxuICAgIH1cclxuICBdLFxyXG4gIGFuaW1hdGlvbnM6IFtzbGlkZU1vdGlvbl0sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtZHJvcGRvd24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWRyb3Bkb3dtLmNvbXBvbmVudC5jc3MnXSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgLmFudC1kcm9wZG93biB7XHJcbiAgICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0Ryb3Bkb3duQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMge1xyXG4gIHRyaWdnZXJXaWR0aCA9IDA7XHJcbiAgdXBkYXRlZFBvc2l0aW9uID0gJ2JvdHRvbSc7XHJcbiAgdXBkYXRlZE92ZXJMYXkgPSAnZW5kJztcclxuICB1cGRhdGVkT3JpZ2luID0gJ2VuZCc7XHJcbiAgZHJvcERvd25Qb3NpdGlvbjogJ3RvcCcgfCAnY2VudGVyJyB8ICdib3R0b20nID0gJ2JvdHRvbSc7XHJcbiAgcG9zaXRpb25zOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10gPSBbLi4uQ01BQ1NfRFJPUERPV05fUE9TSVRJT05TXTtcclxuICB2aXNpYmxlJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgQENvbnRlbnRDaGlsZChDbWFjc0Ryb3Bkb3duRGlyZWN0aXZlKSBjbWFjc0Ryb3Bkb3duRGlyZWN0aXZlOiBDbWFjc0Ryb3Bkb3duRGlyZWN0aXZlO1xyXG4gIEBDb250ZW50Q2hpbGQoTnpNZW51RGlyZWN0aXZlKSBuek1lbnVEaXJlY3RpdmU6IE56TWVudURpcmVjdGl2ZTtcclxuICBAVmlld0NoaWxkKENka0Nvbm5lY3RlZE92ZXJsYXkpIGNka0Nvbm5lY3RlZE92ZXJsYXk6IENka0Nvbm5lY3RlZE92ZXJsYXk7XHJcbiAgQElucHV0KCkgdHJpZ2dlcjogJ2NsaWNrJyB8ICdob3ZlcicgPSAnaG92ZXInO1xyXG4gIEBJbnB1dCgpIG92ZXJsYXlDbGFzc05hbWUgPSAnJztcclxuICBASW5wdXQoKSBvdmVybGF5U3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuICBASW5wdXQoKSBwbGFjZW1lbnQ6IHBsYWNlbWVudCA9ICdib3R0b21MZWZ0JztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgY2xpY2tIaWRlID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdmlzaWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB0YWJsZUZpbHRlciA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSB2aXNpYmxlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIHNldFZpc2libGVTdGF0ZVdoZW4odmlzaWJsZTogYm9vbGVhbiwgdHJpZ2dlcjogJ2NsaWNrJyB8ICdob3ZlcicgfCAnYWxsJyA9ICdhbGwnKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy50cmlnZ2VyID09PSB0cmlnZ2VyIHx8IHRyaWdnZXIgPT09ICdhbGwnKSB7XHJcbiAgICAgIHRoaXMudmlzaWJsZSQubmV4dCh2aXNpYmxlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uUG9zaXRpb25DaGFuZ2UocG9zaXRpb246IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSk6IHZvaWQge1xyXG4gICAgdGhpcy5kcm9wRG93blBvc2l0aW9uID0gcG9zaXRpb24uY29ubmVjdGlvblBhaXIub3JpZ2luWTtcclxuICAgIHRoaXMudXBkYXRlZE92ZXJMYXkgPSBwb3NpdGlvbi5jb25uZWN0aW9uUGFpci5vdmVybGF5WDtcclxuICAgIHRoaXMudXBkYXRlZE9yaWdpbiA9IHBvc2l0aW9uLmNvbm5lY3Rpb25QYWlyLm9yaWdpblg7XHJcbiAgICB0aGlzLnVwZGF0ZWRQb3NpdGlvbiA9IHRoaXMuZHJvcERvd25Qb3NpdGlvbjtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgc3RhcnRTdWJzY3JpYmUob2JzZXJ2YWJsZSQ6IE9ic2VydmFibGU8Ym9vbGVhbj4pOiB2b2lkIHtcclxuICAgIGNvbnN0IGNsaWNrJCA9IHRoaXMuY2xpY2tIaWRlID8gdGhpcy5jbWFjc01lbnVEcm9wZG93blNlcnZpY2UubWVudUl0ZW1DbGljayQucGlwZShtYXBUbyhmYWxzZSkpIDogRU1QVFk7XHJcbiAgICBjb21iaW5lTGF0ZXN0KG1lcmdlKG9ic2VydmFibGUkLCBjbGljayQpLCB0aGlzLmNtYWNzTWVudURyb3Bkb3duU2VydmljZS5tZW51T3BlbiQpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIG1hcCh2YWx1ZSA9PiB2YWx1ZVswXSB8fCB2YWx1ZVsxXSksXHJcbiAgICAgICAgZGVib3VuY2VUaW1lKDUwKSxcclxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxyXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUodmlzaWJsZSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmIHRoaXMudmlzaWJsZSAhPT0gdmlzaWJsZSkge1xyXG4gICAgICAgICAgdGhpcy52aXNpYmxlID0gdmlzaWJsZTtcclxuICAgICAgICAgIHRoaXMudmlzaWJsZUNoYW5nZS5lbWl0KHRoaXMudmlzaWJsZSk7XHJcbiAgICAgICAgICB0aGlzLnRyaWdnZXJXaWR0aCA9IHRoaXMuY21hY3NEcm9wZG93bkRpcmVjdGl2ZS5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XHJcbiAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlRGlzYWJsZWRTdGF0ZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmNtYWNzRHJvcGRvd25EaXJlY3RpdmUpIHtcclxuICAgICAgdGhpcy5jbWFjc0Ryb3Bkb3duRGlyZWN0aXZlLnNldERpc2FibGVkKHRoaXMuZGlzYWJsZWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgY21hY3NNZW51RHJvcGRvd25TZXJ2aWNlOiBDbWFjc01lbnVEcm9wZG93blNlcnZpY2UsXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHt9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0YXJ0U3Vic2NyaWJlKFxyXG4gICAgICBtZXJnZShcclxuICAgICAgICB0aGlzLnZpc2libGUkLFxyXG4gICAgICAgIHRoaXMudHJpZ2dlciA9PT0gJ2hvdmVyJyA/IHRoaXMuY21hY3NEcm9wZG93bkRpcmVjdGl2ZS5ob3ZlciQgOiB0aGlzLmNtYWNzRHJvcGRvd25EaXJlY3RpdmUuJGNsaWNrXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgICB0aGlzLnVwZGF0ZURpc2FibGVkU3RhdGUoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLnZpc2libGUpIHtcclxuICAgICAgdGhpcy52aXNpYmxlJC5uZXh0KHRoaXMudmlzaWJsZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZURpc2FibGVkU3RhdGUoKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLnBsYWNlbWVudCkge1xyXG4gICAgICB0aGlzLmRyb3BEb3duUG9zaXRpb24gPSB0aGlzLnBsYWNlbWVudC5pbmRleE9mKCd0b3AnKSAhPT0gLTEgPyAndG9wJyA6ICdib3R0b20nO1xyXG4gICAgICB0aGlzLnBvc2l0aW9ucyA9IFtQT1NJVElPTl9NQVBbdGhpcy5wbGFjZW1lbnRdLCAuLi50aGlzLnBvc2l0aW9uc107XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==