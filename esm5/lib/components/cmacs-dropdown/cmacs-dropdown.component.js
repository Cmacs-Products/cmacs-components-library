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
        this.dropdownTriggerWidth = 0;
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
        this.cmacsOpen = false;
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
        this.dropdownTriggerWidth = this.cmacsDropdownDirective.elementRef.nativeElement.offsetWidth;
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
                    template: "<ng-content select=\"[cmacs-dropdown]\"></ng-content>\r\n<ng-template\r\n  cdkConnectedOverlay\r\n  nzConnectedOverlay\r\n  [cdkConnectedOverlayHasBackdrop]=\"trigger === 'click'\"\r\n  [cdkConnectedOverlayPositions]=\"positions\"\r\n  [cdkConnectedOverlayOrigin]=\"cmacsDropdownDirective\"\r\n  [cdkConnectedOverlayMinWidth]=\"triggerWidth\"\r\n  [cdkConnectedOverlayOpen]=\"visible\"\r\n  (backdropClick)=\"setVisibleStateWhen(false)\"\r\n  (detach)=\"setVisibleStateWhen(false)\"\r\n  (positionChange)=\"onPositionChange($event)\">\r\n  <div #dropdown class=\"{{'cmacs-dropdown ant-dropdown ant-dropdown-placement-'+placement}}\"\r\n    [class.cmacs-dropdown-updated-position-bottom-top]=\"updatedPosition === 'top'\"\r\n    [class.cmacs-dropdown-updated-position-top-bottom]=\"updatedPosition === 'bottom'\"\r\n    [class.cmacs-dropdown-updated-overlay-end-start]=\"updatedOverLay === 'start'\"\r\n    [class.cmacs-dropdown-updated-origin-end-start]=\"updatedOrigin === 'start'\"\r\n    [style.left.px]=\"placement === 'rightTop' && updatedOrigin === 'start'? dropdownTriggerWidth : 0\"\r\n    [class.cmacs-dropdown-open]=\"cmacsOpen\"\r\n    [ngClass]=\"overlayClassName\"\r\n    [ngStyle]=\"overlayStyle\"\r\n    [@slideMotion]=\"dropDownPosition\"\r\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n    [style.minWidth.px]=\"triggerWidth\"\r\n    (mouseenter)=\"setVisibleStateWhen(true,'hover')\"\r\n    (mouseleave)=\"setVisibleStateWhen(false,'hover')\">\r\n    <div [class.ant-table-filter-dropdown]=\"tableFilter\">\r\n      <ng-content select=\"[cmacs-menu]\"></ng-content>\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n",
                    styles: [":root{--bg-color:#ffffff}cmacs-select.ant-select{width:100%;color:#656c79}.cmacs-dropdown .ant-dropdown-menu-item{padding:8px 10px 8px 5px;border-top:1px solid #dee0e5}.cmacs-dropdown .ant-dropdown-menu-submenu-title{padding:8px 26px 8px 5px}.cmacs-dropdown .ant-dropdown-menu-item:first-child{border-top:none}.ant-dropdown-menu-item-disabled.ant-dropdown-menu-item>a,.ant-dropdown-menu-submenu-title-disabled.ant-dropdown-menu-submenu-title>a{color:rgba(0,0,0,.25);cursor:not-allowed}.cmacs-dropdown ul{padding:0;border:1px solid #dee0e5}.cmacs-dropdown.ant-dropdown-placement-bottomCenter ul{top:8px}.cmacs-dropdown.ant-dropdown-placement-topCenter ul{top:-8px}.cmacs-dropdown.ant-dropdown-placement-leftTop ul{left:-7px;top:-5px}.cmacs-dropdown.ant-dropdown-placement-rightTop ul{right:-6px;top:-5px}.cmacs-dropdown.ant-dropdown-placement-bottomCenter .ant-dropdown-menu-item:first-child::before{content:'';opacity:1;margin:0 auto;display:table;width:10px;position:absolute;border:1px solid #dee0e5;border-top:transparent;border-left:transparent;height:10px;background-color:#fff;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);top:-5px;-webkit-transition:.3s;transition:.3s;left:calc(50% - 5px)}.cmacs-dropdown-updated-position-bottom-top.cmacs-dropdown.ant-dropdown-placement-bottomCenter .ant-dropdown-menu-item:last-child:hover::after,.cmacs-dropdown-updated-position-top-bottom.cmacs-dropdown.ant-dropdown-placement-topCenter .ant-dropdown-menu-item:first-child:hover::before,.cmacs-dropdown.ant-dropdown-placement-bottomCenter .ant-dropdown-menu-item:first-child:hover::before,.cmacs-dropdown.ant-dropdown-placement-leftTop .ant-dropdown-menu-item:first-child:hover::before,.cmacs-dropdown.ant-dropdown-placement-rightTop .ant-dropdown-menu-item:first-child:hover::before,.cmacs-dropdown.ant-dropdown-placement-topCenter .ant-dropdown-menu-item:last-child:hover::after{background-color:#f6f7fb;-webkit-transition:.3s;transition:.3s}.cmacs-dropdown-updated-position-bottom-top.cmacs-dropdown.ant-dropdown-placement-bottomCenter .ant-dropdown-menu-item:first-child::before,.cmacs-dropdown-updated-position-top-bottom.cmacs-dropdown.ant-dropdown-placement-topCenter .ant-dropdown-menu-item:last-child::after{display:none}.cmacs-dropdown-updated-position-bottom-top.cmacs-dropdown.ant-dropdown-placement-bottomCenter .ant-dropdown-menu-item:last-child::after{width:10px;border:1px solid #dee0e5;border-bottom:#dee0e5;border-right:#dee0e5;height:10px;background-color:#fff;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);content:'';opacity:1;left:calc(50% - 5px);position:fixed;margin-top:4px;-webkit-transition:.3s;transition:.3s}.cmacs-dropdown-updated-position-top-bottom.cmacs-dropdown.ant-dropdown-placement-topCenter .ant-dropdown-menu-item:first-child::before{content:'';opacity:1;margin:0 auto;display:table;width:10px;position:absolute;border:1px solid #dee0e5;border-top:transparent;border-left:transparent;height:10px;background-color:#fff;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);top:-5px;-webkit-transition:.3s;transition:.3s;left:calc(50% - 5px)}.cmacs-dropdown.ant-dropdown-placement-topCenter .ant-dropdown-menu-item:last-child::after{width:10px;border:1px solid #dee0e5;border-bottom:#dee0e5;border-right:#dee0e5;height:10px;background-color:#fff;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);content:'';opacity:1;left:calc(50% - 5px);position:fixed;margin-top:4px;-webkit-transition:.3s;transition:.3s}.cmacs-dropdown.ant-dropdown-placement-leftTop .ant-dropdown-menu-item:first-child::before{content:'';opacity:1;margin:0 auto;display:table;width:10px;position:absolute;border:1px solid #dee0e5;border-top:transparent;border-right:transparent;height:10px;background-color:#fff;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);top:10px;left:calc(100% - 4px);-webkit-transition:.3s;transition:.3s}.cmacs-dropdown.ant-dropdown-placement-rightTop .ant-dropdown-menu-item:first-child::before{content:'';opacity:1;margin:0 auto;display:table;width:10px;position:absolute;border:1px solid #dee0e5;border-left:transparent;border-bottom:transparent;height:10px;background-color:#fff;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);top:10px;right:calc(100% - 5px);-webkit-transition:.3s;transition:.3s}.cmacs-dropdown-updated-overlay-end-start.cmacs-dropdown.ant-dropdown-placement-leftTop ul{left:calc(-100% - 8px);top:38px}.cmacs-dropdown-updated-origin-end-start.cmacs-dropdown.ant-dropdown-placement-rightTop ul{top:38px}.cmacs-dropdown-updated-origin-end-start.cmacs-dropdown.ant-dropdown-placement-rightTop .ant-dropdown-menu-item:first-child::before,.cmacs-dropdown-updated-overlay-end-start.cmacs-dropdown.ant-dropdown-placement-leftTop .ant-dropdown-menu-item:first-child::before{display:none}.cmacs-dropdown-updated-overlay-end-start.cmacs-dropdown.ant-dropdown-placement-leftTop .ant-dropdown-menu-item:last-child::after{content:'';opacity:1;display:table;width:10px;position:fixed;border:1px solid #dee0e5;border-top:transparent;border-right:transparent;height:10px;background-color:#fff;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);left:calc(100% - 4px);-webkit-transition:.3s;transition:.3s;margin-top:-12px}.cmacs-dropdown-updated-origin-end-start.cmacs-dropdown.ant-dropdown-placement-rightTop .ant-dropdown-menu-item:last-child::after{content:'';opacity:1;display:table;width:10px;position:fixed;border:1px solid #dee0e5;border-left:transparent;border-bottom:transparent;height:10px;background-color:#fff;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);right:calc(100% - 5px);-webkit-transition:.3s;transition:.3s;margin-top:-12px}.cmacs-dropdown-updated-origin-end-start.cmacs-dropdown.ant-dropdown-placement-rightTop .ant-dropdown-menu-item:last-child:hover::after,.cmacs-dropdown-updated-overlay-end-start.cmacs-dropdown.ant-dropdown-placement-leftTop .ant-dropdown-menu-item:last-child:hover::after{background-color:#f6f7fb;-webkit-transition:.3s;transition:.3s}.ant-dropdown-menu-item:hover{background-color:#f6f7fb}.cmacs-dropdown-open li{border-top:none!important}.cmacs-open-dropdown-wrapper{font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.33;letter-spacing:normal;color:#656c79;border-bottom:2px dotted #656c79}.cmacs-open-dropdown-wrapper i{float:right}.cmacs-open-dropdown-label{color:#acb3bf;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.33;letter-spacing:normal;display:-webkit-inline-box;display:inline-flex;margin-right:5px}nz-dropdown-context .ant-dropdown-menu{border-radius:3px;padding:9px 0;box-shadow:0 3px 7px rgba(59,63,70,.2);border:1px solid #dee0e5}.ant-menu-submenu.ant-menu-submenu-popup .ant-dropdown-menu .ant-dropdown-menu-item,nz-dropdown-context .ant-dropdown-menu-submenu-title{padding:7px 30px 7px 10px}.ant-menu-submenu.ant-menu-submenu-popup{border-radius:3px}.ant-menu-submenu.ant-menu-submenu-placement-rightTop{left:0;top:-10px}.ant-menu-submenu.ant-menu-submenu-popup.ant-menu-submenu-placement-rightTop .ant-dropdown-menu{padding:9px 0;border:1px solid #dee0e5;box-shadow:0 3px 7px rgba(59,63,70,.2);-webkit-clip-path:inset(-10% -10% -10% 0);clip-path:inset(-10% -10% -10% 0)}.ant-menu-submenu.ant-menu-submenu-placement-leftTop{right:0;top:-10px}.ant-menu-submenu.ant-menu-submenu-popup.ant-menu-submenu-placement-leftTop .ant-dropdown-menu{padding:9px 0;border:1px solid #dee0e5;box-shadow:0 3px 7px rgba(59,63,70,.2);-webkit-clip-path:inset(-10% 0 -10% -10%);clip-path:inset(-10% 0 -10% -10%)}.ant-select-disabled .ant-select-selection{background:#f6f7fb;cursor:default}.ant-select-disabled .ant-select-selection .ant-select-arrow{color:#bec4cd}.ant-select-arrow{color:#656c79}.ant-select-dropdown-menu-item-selected{background-color:transparent}.ant-select-dropdown-menu-item-selected:hover{font-weight:400}.ant-select-dropdown-menu-item-disabled,.ant-select-dropdown-menu-item-disabled:hover{cursor:default;background-color:#f6f7fb}.ant-select-search__field__placeholder,.ant-select-selection__placeholder,.ant-select.ant-select-disabled{color:#acb3bf}.cmacs-dropdown .ant-dropdown-menu-item i::before,.cmacs-dropdown .ant-dropdown-menu-submenu-title i::before{position:relative;top:2px}.ant-select-dropdown button{width:calc(100% - 28px);margin:9px 14px}", "\n      .ant-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "]
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
        cmacsOpen: [{ type: Input }],
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
    ], CmacsDropdownComponent.prototype, "cmacsOpen", void 0);
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
    CmacsDropdownComponent.prototype.dropdownTriggerWidth;
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
    CmacsDropdownComponent.prototype.cmacsOpen;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1kcm9wZG93bi9jbWFjcy1kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsbUJBQW1CLEVBQTBELE1BQU0sc0JBQXNCLENBQUM7QUFDbkgsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osSUFBSSxFQUNKLFFBQVEsRUFDUixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFDTixJQUFJLEVBRUosU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzRixPQUFPLEVBQ0wsV0FBVyxFQUVYLFlBQVksRUFDWixpQ0FBaUMsRUFFakMsc0JBQXNCLEVBQ3RCLFlBQVksRUFDYixNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7QUFJekUsTUFBTSxLQUFLLHdCQUF3QixHQUFHO0lBQ3BDLFlBQVksQ0FBQyxVQUFVO0lBQ3ZCLFlBQVksQ0FBQyxXQUFXO0lBQ3hCLFlBQVksQ0FBQyxPQUFPO0lBQ3BCLFlBQVksQ0FBQyxRQUFRO0lB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LHVwREFBOEM7dXBRQUc1Qyx3TEFTQztpQkFFSjs7OztnQkE5RUMsaUJBQWlCO2dCQWdDVix3QkFBd0I7Z0JBTi9CLHNCQUFzQix1QkF3SG5CLElBQUksWUFBSSxRQUFROzs7eUNBekRsQixZQUFZLFNBQUMsc0JBQXNCO2tDQUNuQyxZQUFZLFNBQUMsZUFBZTtzQ0FDNUIsU0FBUyxTQUFDLG1CQUFtQjswQkFDN0IsS0FBSzttQ0FDTCxLQUFLOytCQUNMLEtBQUs7NEJBQ0wsS0FBSzs0QkFDTCxLQUFLOzJCQUNMLEtBQUs7MEJBQ0wsS0FBSzs0QkFDTCxLQUFLOzhCQUNMLEtBQUs7Z0NBQ0wsTUFBTTs7SUFMa0I7UUFBZixZQUFZLEVBQUU7OzZEQUFrQjtJQUNqQjtRQUFmLFlBQVksRUFBRTs7NERBQWtCO0lBQ2pCO1FBQWYsWUFBWSxFQUFFOzsyREFBaUI7SUFDaEI7UUFBZixZQUFZLEVBQUU7OzZEQUFtQjtJQUNsQjtRQUFmLFlBQVksRUFBRTs7K0RBQXFCO0lBNkUvQyw2QkFBQztDQUFBLEFBaElELElBZ0lDO1NBbEdZLHNCQUFzQjs7O0lBQ2pDLDhDQUFpQjs7SUFDakIsc0RBQXlCOztJQUN6QixpREFBMkI7O0lBQzNCLGdEQUF1Qjs7SUFDdkIsK0NBQXNCOztJQUN0QixrREFBeUQ7O0lBQ3pELDJDQUFvRTs7SUFDcEUsMENBQWtDOzs7OztJQUNsQywwQ0FBdUM7O0lBQ3ZDLHdEQUFxRjs7SUFDckYsaURBQWdFOztJQUNoRSxxREFBeUU7O0lBQ3pFLHlDQUE4Qzs7SUFDOUMsa0RBQStCOztJQUMvQiw4Q0FBc0Q7O0lBQ3RELDJDQUE2Qzs7SUFDN0MsMkNBQTBDOztJQUMxQywwQ0FBMEM7O0lBQzFDLHlDQUF5Qzs7SUFDekMsMkNBQTJDOztJQUMzQyw2Q0FBNkM7O0lBQzdDLCtDQUE2RTs7Ozs7SUEyQzNFLHFDQUFnQzs7Ozs7SUFDaEMsMERBQTBEOztJQUMxRCw2Q0FBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZGtDb25uZWN0ZWRPdmVybGF5LCBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UsIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLCBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0LCBIb3N0QmluZGluZyxcclxuICBJbmplY3RvcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBTZWxmLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBtZXJnZSwgRU1QVFksIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwLCBtYXBUbywgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBzbGlkZU1vdGlvbixcclxuICBERUZBVUxUX0RST1BET1dOX1BPU0lUSU9OUyxcclxuICBJbnB1dEJvb2xlYW4sXHJcbiAgTnpEcm9wZG93bkhpZ2hlck9yZGVyU2VydmljZVRva2VuLFxyXG4gIE56TWVudUJhc2VTZXJ2aWNlLFxyXG4gIE56Tm9BbmltYXRpb25EaXJlY3RpdmUsXHJcbiAgUE9TSVRJT05fTUFQXHJcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpNZW51RGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9tZW51JztcclxuXHJcbmltcG9ydCB7IENtYWNzRHJvcGRvd25EaXJlY3RpdmUgfSBmcm9tICcuL2NtYWNzLWRyb3Bkb3duLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IENtYWNzTWVudURyb3Bkb3duU2VydmljZSB9IGZyb20gJy4vY21hY3MtbWVudS1kcm9wZG93bi5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCB0eXBlIHBsYWNlbWVudCA9ICdib3R0b21MZWZ0JyB8ICdib3R0b21DZW50ZXInIHwgJ2JvdHRvbVJpZ2h0JyB8ICd0b3BMZWZ0JyB8ICd0b3BDZW50ZXInIHwgJ3RvcFJpZ2h0JyB8ICdsZWZ0VG9wJyB8ICdyaWdodFRvcCc7XHJcblxyXG5leHBvcnQgdmFyIENNQUNTX0RST1BET1dOX1BPU0lUSU9OUyA9IFtcclxuICBQT1NJVElPTl9NQVAuYm90dG9tTGVmdCxcclxuICBQT1NJVElPTl9NQVAuYm90dG9tUmlnaHQsXHJcbiAgUE9TSVRJT05fTUFQLnRvcExlZnQsXHJcbiAgUE9TSVRJT05fTUFQLnRvcFJpZ2h0LFxyXG4gIFBPU0lUSU9OX01BUC5sZWZ0VG9wLFxyXG4gIFBPU0lUSU9OX01BUC5yaWdodFRvcFxyXG5dO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1lbnVTZXJ2aWNlRmFjdG9yeShpbmplY3RvcjogSW5qZWN0b3IpOiBOek1lbnVCYXNlU2VydmljZSB7XHJcbiAgcmV0dXJuIGluamVjdG9yLmdldChDbWFjc01lbnVEcm9wZG93blNlcnZpY2UpO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWRyb3Bkb3duJyxcclxuICBleHBvcnRBczogJ2NtYWNzRHJvcGRvd24nLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgQ21hY3NNZW51RHJvcGRvd25TZXJ2aWNlLFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOekRyb3Bkb3duSGlnaGVyT3JkZXJTZXJ2aWNlVG9rZW4sXHJcbiAgICAgIHVzZUZhY3Rvcnk6IG1lbnVTZXJ2aWNlRmFjdG9yeSxcclxuICAgICAgZGVwczogW1tuZXcgU2VsZigpLCBJbmplY3Rvcl1dXHJcbiAgICB9XHJcbiAgXSxcclxuICBhbmltYXRpb25zOiBbc2xpZGVNb3Rpb25dLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWRyb3Bkb3duLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1kcm9wZG93bS5jb21wb25lbnQuY3NzJ10sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIC5hbnQtZHJvcGRvd24ge1xyXG4gICAgICAgIHRvcDogMTAwJTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NEcm9wZG93bkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzIHtcclxuICB0cmlnZ2VyV2lkdGggPSAwO1xyXG4gIGRyb3Bkb3duVHJpZ2dlcldpZHRoID0gMDtcclxuICB1cGRhdGVkUG9zaXRpb24gPSAnYm90dG9tJztcclxuICB1cGRhdGVkT3ZlckxheSA9ICdlbmQnO1xyXG4gIHVwZGF0ZWRPcmlnaW4gPSAnZW5kJztcclxuICBkcm9wRG93blBvc2l0aW9uOiAndG9wJyB8ICdjZW50ZXInIHwgJ2JvdHRvbScgPSAnYm90dG9tJztcclxuICBwb3NpdGlvbnM6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXSA9IFsuLi5DTUFDU19EUk9QRE9XTl9QT1NJVElPTlNdO1xyXG4gIHZpc2libGUkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBAQ29udGVudENoaWxkKENtYWNzRHJvcGRvd25EaXJlY3RpdmUpIGNtYWNzRHJvcGRvd25EaXJlY3RpdmU6IENtYWNzRHJvcGRvd25EaXJlY3RpdmU7XHJcbiAgQENvbnRlbnRDaGlsZChOek1lbnVEaXJlY3RpdmUpIG56TWVudURpcmVjdGl2ZTogTnpNZW51RGlyZWN0aXZlO1xyXG4gIEBWaWV3Q2hpbGQoQ2RrQ29ubmVjdGVkT3ZlcmxheSkgY2RrQ29ubmVjdGVkT3ZlcmxheTogQ2RrQ29ubmVjdGVkT3ZlcmxheTtcclxuICBASW5wdXQoKSB0cmlnZ2VyOiAnY2xpY2snIHwgJ2hvdmVyJyA9ICdob3Zlcic7XHJcbiAgQElucHV0KCkgb3ZlcmxheUNsYXNzTmFtZSA9ICcnO1xyXG4gIEBJbnB1dCgpIG92ZXJsYXlTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xyXG4gIEBJbnB1dCgpIHBsYWNlbWVudDogcGxhY2VtZW50ID0gJ2JvdHRvbUxlZnQnO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjbGlja0hpZGUgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB2aXNpYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNtYWNzT3BlbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB0YWJsZUZpbHRlciA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSB2aXNpYmxlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIHNldFZpc2libGVTdGF0ZVdoZW4odmlzaWJsZTogYm9vbGVhbiwgdHJpZ2dlcjogJ2NsaWNrJyB8ICdob3ZlcicgfCAnYWxsJyA9ICdhbGwnKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy50cmlnZ2VyID09PSB0cmlnZ2VyIHx8IHRyaWdnZXIgPT09ICdhbGwnKSB7XHJcbiAgICAgIHRoaXMudmlzaWJsZSQubmV4dCh2aXNpYmxlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uUG9zaXRpb25DaGFuZ2UocG9zaXRpb246IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSk6IHZvaWQge1xyXG4gICAgdGhpcy5kcm9wRG93blBvc2l0aW9uID0gcG9zaXRpb24uY29ubmVjdGlvblBhaXIub3JpZ2luWTtcclxuICAgIHRoaXMudXBkYXRlZE92ZXJMYXkgPSBwb3NpdGlvbi5jb25uZWN0aW9uUGFpci5vdmVybGF5WDtcclxuICAgIHRoaXMudXBkYXRlZE9yaWdpbiA9IHBvc2l0aW9uLmNvbm5lY3Rpb25QYWlyLm9yaWdpblg7XHJcbiAgICB0aGlzLnVwZGF0ZWRQb3NpdGlvbiA9IHRoaXMuZHJvcERvd25Qb3NpdGlvbjtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgc3RhcnRTdWJzY3JpYmUob2JzZXJ2YWJsZSQ6IE9ic2VydmFibGU8Ym9vbGVhbj4pOiB2b2lkIHtcclxuICAgIGNvbnN0IGNsaWNrJCA9IHRoaXMuY2xpY2tIaWRlID8gdGhpcy5jbWFjc01lbnVEcm9wZG93blNlcnZpY2UubWVudUl0ZW1DbGljayQucGlwZShtYXBUbyhmYWxzZSkpIDogRU1QVFk7XHJcbiAgICBjb21iaW5lTGF0ZXN0KG1lcmdlKG9ic2VydmFibGUkLCBjbGljayQpLCB0aGlzLmNtYWNzTWVudURyb3Bkb3duU2VydmljZS5tZW51T3BlbiQpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIG1hcCh2YWx1ZSA9PiB2YWx1ZVswXSB8fCB2YWx1ZVsxXSksXHJcbiAgICAgICAgZGVib3VuY2VUaW1lKDUwKSxcclxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxyXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUodmlzaWJsZSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmIHRoaXMudmlzaWJsZSAhPT0gdmlzaWJsZSkge1xyXG4gICAgICAgICAgdGhpcy52aXNpYmxlID0gdmlzaWJsZTtcclxuICAgICAgICAgIHRoaXMudmlzaWJsZUNoYW5nZS5lbWl0KHRoaXMudmlzaWJsZSk7XHJcbiAgICAgICAgICB0aGlzLnRyaWdnZXJXaWR0aCA9IHRoaXMuY21hY3NEcm9wZG93bkRpcmVjdGl2ZS5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XHJcbiAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlRGlzYWJsZWRTdGF0ZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmNtYWNzRHJvcGRvd25EaXJlY3RpdmUpIHtcclxuICAgICAgdGhpcy5jbWFjc0Ryb3Bkb3duRGlyZWN0aXZlLnNldERpc2FibGVkKHRoaXMuZGlzYWJsZWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgY21hY3NNZW51RHJvcGRvd25TZXJ2aWNlOiBDbWFjc01lbnVEcm9wZG93blNlcnZpY2UsXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHt9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0YXJ0U3Vic2NyaWJlKFxyXG4gICAgICBtZXJnZShcclxuICAgICAgICB0aGlzLnZpc2libGUkLFxyXG4gICAgICAgIHRoaXMudHJpZ2dlciA9PT0gJ2hvdmVyJyA/IHRoaXMuY21hY3NEcm9wZG93bkRpcmVjdGl2ZS5ob3ZlciQgOiB0aGlzLmNtYWNzRHJvcGRvd25EaXJlY3RpdmUuJGNsaWNrXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgICB0aGlzLmRyb3Bkb3duVHJpZ2dlcldpZHRoID0gdGhpcy5jbWFjc0Ryb3Bkb3duRGlyZWN0aXZlLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcclxuICAgIHRoaXMudXBkYXRlRGlzYWJsZWRTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMudmlzaWJsZSkge1xyXG4gICAgICB0aGlzLnZpc2libGUkLm5leHQodGhpcy52aXNpYmxlKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLmRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlRGlzYWJsZWRTdGF0ZSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMucGxhY2VtZW50KSB7XHJcbiAgICAgIHRoaXMuZHJvcERvd25Qb3NpdGlvbiA9IHRoaXMucGxhY2VtZW50LmluZGV4T2YoJ3RvcCcpICE9PSAtMSA/ICd0b3AnIDogJ2JvdHRvbSc7XHJcbiAgICAgIHRoaXMucG9zaXRpb25zID0gW1BPU0lUSU9OX01BUFt0aGlzLnBsYWNlbWVudF0sIC4uLnRoaXMucG9zaXRpb25zXTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19