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
export class CmacsDropdownComponent {
    /**
     * @param {?} cdr
     * @param {?} cmacsMenuDropdownService
     * @param {?=} noAnimation
     */
    constructor(cdr, cmacsMenuDropdownService, noAnimation) {
        this.cdr = cdr;
        this.cmacsMenuDropdownService = cmacsMenuDropdownService;
        this.noAnimation = noAnimation;
        this.triggerWidth = 0;
        this.updatedPosition = 'bottom';
        this.updatedOverLay = 'end';
        this.updatedOrigin = 'end';
        this.dropDownPosition = 'bottom';
        this.positions = [...CMACS_DROPDOWN_POSITIONS];
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
    setVisibleStateWhen(visible, trigger = 'all') {
        if (this.trigger === trigger || trigger === 'all') {
            this.visible$.next(visible);
        }
    }
    /**
     * @param {?} position
     * @return {?}
     */
    onPositionChange(position) {
        this.dropDownPosition = position.connectionPair.originY;
        this.updatedOverLay = position.connectionPair.overlayX;
        this.updatedOrigin = position.connectionPair.originX;
        this.updatedPosition = this.dropDownPosition;
        this.cdr.detectChanges();
        this.cdr.markForCheck();
    }
    /**
     * @param {?} observable$
     * @return {?}
     */
    startSubscribe(observable$) {
        /** @type {?} */
        const click$ = this.clickHide ? this.cmacsMenuDropdownService.menuItemClick$.pipe(mapTo(false)) : EMPTY;
        combineLatest(merge(observable$, click$), this.cmacsMenuDropdownService.menuOpen$)
            .pipe(map((/**
         * @param {?} value
         * @return {?}
         */
        value => value[0] || value[1])), debounceTime(50), distinctUntilChanged(), takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} visible
         * @return {?}
         */
        visible => {
            if (!this.disabled && this.visible !== visible) {
                this.visible = visible;
                this.visibleChange.emit(this.visible);
                this.triggerWidth = this.cmacsDropdownDirective.elementRef.nativeElement.getBoundingClientRect().width;
                this.cdr.markForCheck();
            }
        }));
    }
    /**
     * @return {?}
     */
    updateDisabledState() {
        if (this.cmacsDropdownDirective) {
            this.cmacsDropdownDirective.setDisabled(this.disabled);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.startSubscribe(merge(this.visible$, this.trigger === 'hover' ? this.cmacsDropdownDirective.hover$ : this.cmacsDropdownDirective.$click));
        this.updateDisabledState();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.visible) {
            this.visible$.next(this.visible);
        }
        if (changes.disabled) {
            this.updateDisabledState();
        }
        if (changes.placement) {
            this.dropDownPosition = this.placement.indexOf('top') !== -1 ? 'top' : 'bottom';
            this.positions = [POSITION_MAP[this.placement], ...this.positions];
        }
    }
}
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
                template: "<ng-content select=\"[cmacs-dropdown]\"></ng-content>\r\n<ng-template\r\n  cdkConnectedOverlay\r\n  nzConnectedOverlay\r\n  [cdkConnectedOverlayHasBackdrop]=\"trigger === 'click'\"\r\n  [cdkConnectedOverlayPositions]=\"positions\"\r\n  [cdkConnectedOverlayOrigin]=\"cmacsDropdownDirective\"\r\n  [cdkConnectedOverlayMinWidth]=\"triggerWidth\"\r\n  [cdkConnectedOverlayOpen]=\"visible\"\r\n  (backdropClick)=\"setVisibleStateWhen(false)\"\r\n  (detach)=\"setVisibleStateWhen(false)\"\r\n  (positionChange)=\"onPositionChange($event)\">\r\n  <div #dropdown class=\"{{'cmacs-dropdown ant-dropdown ant-dropdown-placement-'+placement}}\"\r\n    [class.cmacs-dropdown-updated-position-bottom-top]=\"updatedPosition === 'top'\"\r\n    [class.cmacs-dropdown-updated-position-top-bottom]=\"updatedPosition === 'bottom'\"\r\n    [class.cmacs-dropdown-updated-overlay-end-start]=\"updatedOverLay === 'start'\"\r\n    [class.cmacs-dropdown-updated-origin-end-start]=\"updatedOrigin === 'start'\"\r\n    [class.cmacs-dropdown-open]=\"cmacsOpen\"\r\n    [ngClass]=\"overlayClassName\"\r\n    [ngStyle]=\"overlayStyle\"\r\n    [@slideMotion]=\"dropDownPosition\"\r\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n    [style.minWidth.px]=\"triggerWidth\"\r\n    (mouseenter)=\"setVisibleStateWhen(true,'hover')\"\r\n    (mouseleave)=\"setVisibleStateWhen(false,'hover')\">\r\n    <div [class.ant-table-filter-dropdown]=\"tableFilter\">\r\n      <ng-content select=\"[cmacs-menu]\"></ng-content>\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n",
                styles: [":root{--bg-color:white}.cmacs-dropdown .ant-dropdown-menu-item{padding:8px 10px 8px 5px;border-top:1px solid #dee0e5}.cmacs-dropdown .ant-dropdown-menu-item:first-child{border-top:none}.cmacs-dropdown ul{padding:0;border:1px solid #dee0e5}.cmacs-dropdown.ant-dropdown-placement-bottomCenter ul{top:8px}.cmacs-dropdown.ant-dropdown-placement-topCenter ul{top:-8px}.cmacs-dropdown.ant-dropdown-placement-leftTop ul{left:-7px;top:-5px}.cmacs-dropdown.ant-dropdown-placement-rightTop ul{right:-6px;top:-5px}.cmacs-dropdown.ant-dropdown-placement-bottomCenter .ant-dropdown-menu-item:first-child::before{content:'';opacity:1;margin:0 auto;display:table;width:10px;position:absolute;border:1px solid #dee0e5;border-top:transparent;border-left:transparent;height:10px;background-color:#fff;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);top:-6px;-webkit-transition:.3s;transition:.3s;left:calc(50% - 10px)}.cmacs-dropdown-updated-position-bottom-top.cmacs-dropdown.ant-dropdown-placement-bottomCenter .ant-dropdown-menu-item:last-child:hover::after,.cmacs-dropdown-updated-position-top-bottom.cmacs-dropdown.ant-dropdown-placement-topCenter .ant-dropdown-menu-item:first-child:hover::before,.cmacs-dropdown.ant-dropdown-placement-bottomCenter .ant-dropdown-menu-item:first-child:hover::before,.cmacs-dropdown.ant-dropdown-placement-leftTop .ant-dropdown-menu-item:first-child:hover::before,.cmacs-dropdown.ant-dropdown-placement-rightTop .ant-dropdown-menu-item:first-child:hover::before,.cmacs-dropdown.ant-dropdown-placement-topCenter .ant-dropdown-menu-item:last-child:hover::after{background-color:#f6f7fb;-webkit-transition:.3s;transition:.3s}.cmacs-dropdown-updated-position-bottom-top.cmacs-dropdown.ant-dropdown-placement-bottomCenter .ant-dropdown-menu-item:first-child::before,.cmacs-dropdown-updated-position-top-bottom.cmacs-dropdown.ant-dropdown-placement-topCenter .ant-dropdown-menu-item:last-child::after{display:none}.cmacs-dropdown-updated-position-bottom-top.cmacs-dropdown.ant-dropdown-placement-bottomCenter .ant-dropdown-menu-item:last-child::after{width:10px;border:1px solid #dee0e5;border-bottom:#dee0e5;border-right:#dee0e5;height:10px;background-color:#fff;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);content:'';opacity:1;left:calc(50% - 5px);position:fixed;margin-top:4px;-webkit-transition:.3s;transition:.3s}.cmacs-dropdown-updated-position-top-bottom.cmacs-dropdown.ant-dropdown-placement-topCenter .ant-dropdown-menu-item:first-child::before{content:'';opacity:1;margin:0 auto;display:table;width:10px;position:absolute;border:1px solid #dee0e5;border-top:transparent;border-left:transparent;height:10px;background-color:#fff;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);top:-6px;-webkit-transition:.3s;transition:.3s;left:calc(50% - 10px)}.cmacs-dropdown.ant-dropdown-placement-topCenter .ant-dropdown-menu-item:last-child::after{width:10px;border:1px solid #dee0e5;border-bottom:#dee0e5;border-right:#dee0e5;height:10px;background-color:#fff;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);content:'';opacity:1;left:calc(50% - 5px);position:fixed;margin-top:4px;-webkit-transition:.3s;transition:.3s}.cmacs-dropdown.ant-dropdown-placement-leftTop .ant-dropdown-menu-item:first-child::before{content:'';opacity:1;margin:0 auto;display:table;width:10px;position:absolute;border:1px solid #dee0e5;border-top:transparent;border-right:transparent;height:10px;background-color:#fff;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);top:10px;left:calc(100% - 4px);-webkit-transition:.3s;transition:.3s}.cmacs-dropdown.ant-dropdown-placement-rightTop .ant-dropdown-menu-item:first-child::before{content:'';opacity:1;margin:0 auto;display:table;width:10px;position:absolute;border:1px solid #dee0e5;border-left:transparent;border-bottom:transparent;height:10px;background-color:#fff;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);top:10px;right:calc(100% - 5px);-webkit-transition:.3s;transition:.3s}.cmacs-dropdown-updated-overlay-end-start.cmacs-dropdown.ant-dropdown-placement-leftTop ul{left:calc(-100% - 8px);top:38px}.cmacs-dropdown-updated-origin-end-start.cmacs-dropdown.ant-dropdown-placement-rightTop ul{left:calc(80% - 5px);top:38px}.cmacs-dropdown-updated-origin-end-start.cmacs-dropdown.ant-dropdown-placement-rightTop .ant-dropdown-menu-item:first-child::before,.cmacs-dropdown-updated-overlay-end-start.cmacs-dropdown.ant-dropdown-placement-leftTop .ant-dropdown-menu-item:first-child::before{display:none}.cmacs-dropdown-updated-overlay-end-start.cmacs-dropdown.ant-dropdown-placement-leftTop .ant-dropdown-menu-item:last-child::after{content:'';opacity:1;display:table;width:10px;position:fixed;border:1px solid #dee0e5;border-top:transparent;border-right:transparent;height:10px;background-color:#fff;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);left:calc(100% - 4px);-webkit-transition:.3s;transition:.3s;margin-top:-12px}.cmacs-dropdown-updated-origin-end-start.cmacs-dropdown.ant-dropdown-placement-rightTop .ant-dropdown-menu-item:last-child::after{content:'';opacity:1;display:table;width:10px;position:fixed;border:1px solid #dee0e5;border-left:transparent;border-bottom:transparent;height:10px;background-color:#fff;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);right:calc(100% - 5px);-webkit-transition:.3s;transition:.3s;margin-top:-12px}.cmacs-dropdown-updated-origin-end-start.cmacs-dropdown.ant-dropdown-placement-rightTop .ant-dropdown-menu-item:last-child:hover::after,.cmacs-dropdown-updated-overlay-end-start.cmacs-dropdown.ant-dropdown-placement-leftTop .ant-dropdown-menu-item:last-child:hover::after{background-color:#f6f7fb;-webkit-transition:.3s;transition:.3s}.ant-dropdown-menu-item:hover{background-color:#f6f7fb}.cmacs-dropdown-open li{border-top:none!important}.cmacs-open-dropdown-wrapper{font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.33;letter-spacing:normal;color:#656c79;border-bottom:2px dotted #656c79}.cmacs-open-dropdown-wrapper i{float:right}.cmacs-open-dropdown-label{color:#acb3bf;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.33;letter-spacing:normal;display:-webkit-inline-box;display:inline-flex;margin-right:5px}", `
      .ant-dropdown {
        top: 100%;
        left: 0;
        position: relative;
        width: 100%;
        margin-top: 4px;
        margin-bottom: 4px;
      }
    `]
            }] }
];
/** @nocollapse */
CmacsDropdownComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: CmacsMenuDropdownService },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1kcm9wZG93bi9jbWFjcy1kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsbUJBQW1CLEVBQTBELE1BQU0sc0JBQXNCLENBQUM7QUFDbkgsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osSUFBSSxFQUNKLFFBQVEsRUFDUixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFDTixJQUFJLEVBRUosU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzRixPQUFPLEVBQ0wsV0FBVyxFQUVYLFlBQVksRUFDWixpQ0FBaUMsRUFFakMsc0JBQXNCLEVBQ3RCLFlBQVksRUFDYixNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7QUFJekUsTUFBTSxLQUFLLHdCQUF3QixHQUFHO0lBQ3BDLFlBQVksQ0FBQyxVQUFVO0lBQ3ZCLFlBQVksQ0FBQyxXQUFXO0lBQ3hCLFlBQVksQ0FBQyxPQUFPO0lBQ3BCLFlBQVksQ0FBQyxRQUFRO0lB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U0FBQyxtQkFBbUI7c0JBQzdCLEtBQUs7K0JBQ0wsS0FBSzsyQkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzt1QkFDTCxLQUFLO3NCQUNMLEtBQUs7d0JBQ0wsS0FBSzswQkFDTCxLQUFLOzRCQUNMLE1BQU07O0FBTGtCO0lBQWYsWUFBWSxFQUFFOzt5REFBa0I7QUFDakI7SUFBZixZQUFZLEVBQUU7O3dEQUFrQjtBQUNqQjtJQUFmLFlBQVksRUFBRTs7dURBQWlCO0FBQ2hCO0lBQWYsWUFBWSxFQUFFOzt5REFBbUI7QUFDbEI7SUFBZixZQUFZLEVBQUU7OzJEQUFxQjs7O0lBbkI3Qyw4Q0FBaUI7O0lBQ2pCLGlEQUEyQjs7SUFDM0IsZ0RBQXVCOztJQUN2QiwrQ0FBc0I7O0lBQ3RCLGtEQUF5RDs7SUFDekQsMkNBQW9FOztJQUNwRSwwQ0FBa0M7Ozs7O0lBQ2xDLDBDQUF1Qzs7SUFDdkMsd0RBQXFGOztJQUNyRixpREFBZ0U7O0lBQ2hFLHFEQUF5RTs7SUFDekUseUNBQThDOztJQUM5QyxrREFBK0I7O0lBQy9CLDhDQUFzRDs7SUFDdEQsMkNBQTZDOztJQUM3QywyQ0FBMEM7O0lBQzFDLDBDQUEwQzs7SUFDMUMseUNBQXlDOztJQUN6QywyQ0FBMkM7O0lBQzNDLDZDQUE2Qzs7SUFDN0MsK0NBQTZFOzs7OztJQTJDM0UscUNBQWdDOzs7OztJQUNoQywwREFBMEQ7O0lBQzFELDZDQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka0Nvbm5lY3RlZE92ZXJsYXksIENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSwgQ29ubmVjdGlvblBvc2l0aW9uUGFpciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGQsIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3QsIEhvc3RCaW5kaW5nLFxyXG4gIEluamVjdG9yLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFNlbGYsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIG1lcmdlLCBFTVBUWSwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAsIG1hcFRvLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIHNsaWRlTW90aW9uLFxyXG4gIERFRkFVTFRfRFJPUERPV05fUE9TSVRJT05TLFxyXG4gIElucHV0Qm9vbGVhbixcclxuICBOekRyb3Bkb3duSGlnaGVyT3JkZXJTZXJ2aWNlVG9rZW4sXHJcbiAgTnpNZW51QmFzZVNlcnZpY2UsXHJcbiAgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSxcclxuICBQT1NJVElPTl9NQVBcclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOek1lbnVEaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL21lbnUnO1xyXG5cclxuaW1wb3J0IHsgQ21hY3NEcm9wZG93bkRpcmVjdGl2ZSB9IGZyb20gJy4vY21hY3MtZHJvcGRvd24uZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQ21hY3NNZW51RHJvcGRvd25TZXJ2aWNlIH0gZnJvbSAnLi9jbWFjcy1tZW51LWRyb3Bkb3duLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IHR5cGUgcGxhY2VtZW50ID0gJ2JvdHRvbUxlZnQnIHwgJ2JvdHRvbUNlbnRlcicgfCAnYm90dG9tUmlnaHQnIHwgJ3RvcExlZnQnIHwgJ3RvcENlbnRlcicgfCAndG9wUmlnaHQnIHwgJ2xlZnRUb3AnIHwgJ3JpZ2h0VG9wJztcclxuXHJcbmV4cG9ydCB2YXIgQ01BQ1NfRFJPUERPV05fUE9TSVRJT05TID0gW1xyXG4gIFBPU0lUSU9OX01BUC5ib3R0b21MZWZ0LFxyXG4gIFBPU0lUSU9OX01BUC5ib3R0b21SaWdodCxcclxuICBQT1NJVElPTl9NQVAudG9wTGVmdCxcclxuICBQT1NJVElPTl9NQVAudG9wUmlnaHQsXHJcbiAgUE9TSVRJT05fTUFQLmxlZnRUb3AsXHJcbiAgUE9TSVRJT05fTUFQLnJpZ2h0VG9wXHJcbl07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWVudVNlcnZpY2VGYWN0b3J5KGluamVjdG9yOiBJbmplY3Rvcik6IE56TWVudUJhc2VTZXJ2aWNlIHtcclxuICByZXR1cm4gaW5qZWN0b3IuZ2V0KENtYWNzTWVudURyb3Bkb3duU2VydmljZSk7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtZHJvcGRvd24nLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NEcm9wZG93bicsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBDbWFjc01lbnVEcm9wZG93blNlcnZpY2UsXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE56RHJvcGRvd25IaWdoZXJPcmRlclNlcnZpY2VUb2tlbixcclxuICAgICAgdXNlRmFjdG9yeTogbWVudVNlcnZpY2VGYWN0b3J5LFxyXG4gICAgICBkZXBzOiBbW25ldyBTZWxmKCksIEluamVjdG9yXV1cclxuICAgIH1cclxuICBdLFxyXG4gIGFuaW1hdGlvbnM6IFtzbGlkZU1vdGlvbl0sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtZHJvcGRvd24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWRyb3Bkb3dtLmNvbXBvbmVudC5jc3MnXSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgLmFudC1kcm9wZG93biB7XHJcbiAgICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0Ryb3Bkb3duQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMge1xyXG4gIHRyaWdnZXJXaWR0aCA9IDA7XHJcbiAgdXBkYXRlZFBvc2l0aW9uID0gJ2JvdHRvbSc7XHJcbiAgdXBkYXRlZE92ZXJMYXkgPSAnZW5kJztcclxuICB1cGRhdGVkT3JpZ2luID0gJ2VuZCc7XHJcbiAgZHJvcERvd25Qb3NpdGlvbjogJ3RvcCcgfCAnY2VudGVyJyB8ICdib3R0b20nID0gJ2JvdHRvbSc7XHJcbiAgcG9zaXRpb25zOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10gPSBbLi4uQ01BQ1NfRFJPUERPV05fUE9TSVRJT05TXTtcclxuICB2aXNpYmxlJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgQENvbnRlbnRDaGlsZChDbWFjc0Ryb3Bkb3duRGlyZWN0aXZlKSBjbWFjc0Ryb3Bkb3duRGlyZWN0aXZlOiBDbWFjc0Ryb3Bkb3duRGlyZWN0aXZlO1xyXG4gIEBDb250ZW50Q2hpbGQoTnpNZW51RGlyZWN0aXZlKSBuek1lbnVEaXJlY3RpdmU6IE56TWVudURpcmVjdGl2ZTtcclxuICBAVmlld0NoaWxkKENka0Nvbm5lY3RlZE92ZXJsYXkpIGNka0Nvbm5lY3RlZE92ZXJsYXk6IENka0Nvbm5lY3RlZE92ZXJsYXk7XHJcbiAgQElucHV0KCkgdHJpZ2dlcjogJ2NsaWNrJyB8ICdob3ZlcicgPSAnaG92ZXInO1xyXG4gIEBJbnB1dCgpIG92ZXJsYXlDbGFzc05hbWUgPSAnJztcclxuICBASW5wdXQoKSBvdmVybGF5U3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuICBASW5wdXQoKSBwbGFjZW1lbnQ6IHBsYWNlbWVudCA9ICdib3R0b21MZWZ0JztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgY2xpY2tIaWRlID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdmlzaWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjbWFjc09wZW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdGFibGVGaWx0ZXIgPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgdmlzaWJsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBzZXRWaXNpYmxlU3RhdGVXaGVuKHZpc2libGU6IGJvb2xlYW4sIHRyaWdnZXI6ICdjbGljaycgfCAnaG92ZXInIHwgJ2FsbCcgPSAnYWxsJyk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudHJpZ2dlciA9PT0gdHJpZ2dlciB8fCB0cmlnZ2VyID09PSAnYWxsJykge1xyXG4gICAgICB0aGlzLnZpc2libGUkLm5leHQodmlzaWJsZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblBvc2l0aW9uQ2hhbmdlKHBvc2l0aW9uOiBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UpOiB2b2lkIHtcclxuICAgIHRoaXMuZHJvcERvd25Qb3NpdGlvbiA9IHBvc2l0aW9uLmNvbm5lY3Rpb25QYWlyLm9yaWdpblk7XHJcbiAgICB0aGlzLnVwZGF0ZWRPdmVyTGF5ID0gcG9zaXRpb24uY29ubmVjdGlvblBhaXIub3ZlcmxheVg7XHJcbiAgICB0aGlzLnVwZGF0ZWRPcmlnaW4gPSBwb3NpdGlvbi5jb25uZWN0aW9uUGFpci5vcmlnaW5YO1xyXG4gICAgdGhpcy51cGRhdGVkUG9zaXRpb24gPSB0aGlzLmRyb3BEb3duUG9zaXRpb247XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHN0YXJ0U3Vic2NyaWJlKG9ic2VydmFibGUkOiBPYnNlcnZhYmxlPGJvb2xlYW4+KTogdm9pZCB7XHJcbiAgICBjb25zdCBjbGljayQgPSB0aGlzLmNsaWNrSGlkZSA/IHRoaXMuY21hY3NNZW51RHJvcGRvd25TZXJ2aWNlLm1lbnVJdGVtQ2xpY2skLnBpcGUobWFwVG8oZmFsc2UpKSA6IEVNUFRZO1xyXG4gICAgY29tYmluZUxhdGVzdChtZXJnZShvYnNlcnZhYmxlJCwgY2xpY2skKSwgdGhpcy5jbWFjc01lbnVEcm9wZG93blNlcnZpY2UubWVudU9wZW4kKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBtYXAodmFsdWUgPT4gdmFsdWVbMF0gfHwgdmFsdWVbMV0pLFxyXG4gICAgICAgIGRlYm91bmNlVGltZSg1MCksXHJcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcclxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKHZpc2libGUgPT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiB0aGlzLnZpc2libGUgIT09IHZpc2libGUpIHtcclxuICAgICAgICAgIHRoaXMudmlzaWJsZSA9IHZpc2libGU7XHJcbiAgICAgICAgICB0aGlzLnZpc2libGVDaGFuZ2UuZW1pdCh0aGlzLnZpc2libGUpO1xyXG4gICAgICAgICAgdGhpcy50cmlnZ2VyV2lkdGggPSB0aGlzLmNtYWNzRHJvcGRvd25EaXJlY3RpdmUuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG4gICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZURpc2FibGVkU3RhdGUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5jbWFjc0Ryb3Bkb3duRGlyZWN0aXZlKSB7XHJcbiAgICAgIHRoaXMuY21hY3NEcm9wZG93bkRpcmVjdGl2ZS5zZXREaXNhYmxlZCh0aGlzLmRpc2FibGVkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJvdGVjdGVkIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGNtYWNzTWVudURyb3Bkb3duU2VydmljZTogQ21hY3NNZW51RHJvcGRvd25TZXJ2aWNlLFxyXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zdGFydFN1YnNjcmliZShcclxuICAgICAgbWVyZ2UoXHJcbiAgICAgICAgdGhpcy52aXNpYmxlJCxcclxuICAgICAgICB0aGlzLnRyaWdnZXIgPT09ICdob3ZlcicgPyB0aGlzLmNtYWNzRHJvcGRvd25EaXJlY3RpdmUuaG92ZXIkIDogdGhpcy5jbWFjc0Ryb3Bkb3duRGlyZWN0aXZlLiRjbGlja1xyXG4gICAgICApXHJcbiAgICApO1xyXG4gICAgdGhpcy51cGRhdGVEaXNhYmxlZFN0YXRlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy52aXNpYmxlKSB7XHJcbiAgICAgIHRoaXMudmlzaWJsZSQubmV4dCh0aGlzLnZpc2libGUpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMuZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy51cGRhdGVEaXNhYmxlZFN0YXRlKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5wbGFjZW1lbnQpIHtcclxuICAgICAgdGhpcy5kcm9wRG93blBvc2l0aW9uID0gdGhpcy5wbGFjZW1lbnQuaW5kZXhPZigndG9wJykgIT09IC0xID8gJ3RvcCcgOiAnYm90dG9tJztcclxuICAgICAgdGhpcy5wb3NpdGlvbnMgPSBbUE9TSVRJT05fTUFQW3RoaXMucGxhY2VtZW50XSwgLi4udGhpcy5wb3NpdGlvbnNdO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=