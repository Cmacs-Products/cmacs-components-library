/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Host, Input, Optional, Output, QueryList, ViewChild, ViewEncapsulation } from '@angular/core';
import { combineLatest, merge, Subject } from 'rxjs';
import { flatMap, map, startWith, takeUntil } from 'rxjs/operators';
import { collapseMotion, getPlacementName, slideMotion, zoomBigMotion, DEFAULT_SUBMENU_POSITIONS, InputBoolean, NzMenuBaseService, NzNoAnimationDirective, NzUpdateHostClassService, POSITION_MAP } from 'ng-zorro-antd/core';
import { CmacsMenuItemDirective } from './cmacs-menu-item.directive';
import { CmacsSubmenuService } from './cmacs-submenu.service';
var CmacsSubMenuComponent = /** @class */ (function () {
    function CmacsSubMenuComponent(elementRef, menuService, cdr, submenuService, updateHostClassService, platform, noAnimation) {
        this.elementRef = elementRef;
        this.menuService = menuService;
        this.cdr = cdr;
        this.submenuService = submenuService;
        this.updateHostClassService = updateHostClassService;
        this.platform = platform;
        this.noAnimation = noAnimation;
        this.open = false;
        this.disabled = false;
        this.openChange = new EventEmitter();
        this.placement = 'rightTop';
        this.expandState = 'collapsed';
        this.overlayPositions = tslib_1.__spread(DEFAULT_SUBMENU_POSITIONS);
        this.destroy$ = new Subject();
        this.isChildMenuSelected = false;
        this.isMouseHover = false;
    }
    /**
     * @param {?} open
     * @return {?}
     */
    CmacsSubMenuComponent.prototype.setOpenState = /**
     * @param {?} open
     * @return {?}
     */
    function (open) {
        this.submenuService.setOpenState(open);
    };
    /**
     * @return {?}
     */
    CmacsSubMenuComponent.prototype.clickSubMenuTitle = /**
     * @return {?}
     */
    function () {
        if (this.submenuService.mode === 'inline' && !this.menuService.isInDropDown && !this.disabled) {
            this.setOpenState(!this.open);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsSubMenuComponent.prototype.setMouseEnterState = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.isMouseHover = value;
        this.setClassMap();
        this.submenuService.setMouseEnterState(value);
    };
    /**
     * @return {?}
     */
    CmacsSubMenuComponent.prototype.setTriggerWidth = /**
     * @return {?}
     */
    function () {
        if (this.submenuService.mode === 'horizontal' && this.platform.isBrowser) {
            this.triggerWidth = this.cdkOverlayOrigin.nativeElement.getBoundingClientRect().width;
        }
    };
    /**
     * @param {?} position
     * @return {?}
     */
    CmacsSubMenuComponent.prototype.onPositionChange = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        // tslint:disable-next-line: no-non-null-assertion
        this.placement = (/** @type {?} */ (getPlacementName(position)));
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    CmacsSubMenuComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var prefixName = this.menuService.isInDropDown ? 'ant-dropdown-menu-submenu' : 'ant-menu-submenu';
        this.updateHostClassService.updateHostClass(this.elementRef.nativeElement, (_a = {},
            _a["" + prefixName] = true,
            _a[prefixName + "-disabled"] = this.disabled,
            _a[prefixName + "-open"] = this.open,
            _a[prefixName + "-selected"] = this.isChildMenuSelected,
            _a[prefixName + "-" + this.submenuService.mode] = true,
            _a[prefixName + "-active"] = this.isMouseHover && !this.disabled,
            _a));
    };
    /**
     * @return {?}
     */
    CmacsSubMenuComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        combineLatest(this.submenuService.mode$, this.submenuService.open$)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            /** @type {?} */
            var mode = data[0];
            /** @type {?} */
            var open = data[1];
            if (open && mode === 'inline') {
                _this.expandState = 'expanded';
            }
            else if (open && mode === 'horizontal') {
                _this.expandState = 'bottom';
            }
            else if (open && mode === 'vertical') {
                _this.expandState = 'active';
            }
            else {
                _this.expandState = 'collapsed';
            }
            _this.overlayPositions =
                mode === 'horizontal' ? [POSITION_MAP.bottomLeft] : [POSITION_MAP.rightTop, POSITION_MAP.leftTop];
            if (open !== _this.open) {
                _this.open = open;
                _this.openChange.emit(_this.open);
            }
            _this.setClassMap();
            _this.setTriggerWidth();
        }));
        this.submenuService.menuOpen$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.menuService.menuOpen$.next(data);
        }));
        merge(this.menuService.mode$, this.menuService.inlineIndent$, this.submenuService.level$, this.submenuService.open$, this.submenuService.mode$)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    CmacsSubMenuComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.setTriggerWidth();
        this.listOfCmacsMenuItemDirective.changes
            .pipe(startWith(true), flatMap((/**
         * @return {?}
         */
        function () {
            return merge.apply(void 0, tslib_1.__spread([_this.listOfCmacsMenuItemDirective.changes], _this.listOfCmacsMenuItemDirective.map((/**
             * @param {?} menu
             * @return {?}
             */
            function (menu) { return menu.selected$; }))));
        })), map((/**
         * @return {?}
         */
        function () { return _this.listOfCmacsMenuItemDirective.some((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e.selected; })); })), takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} selected
         * @return {?}
         */
        function (selected) {
            _this.isChildMenuSelected = selected;
            _this.setClassMap();
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsSubMenuComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzOpen) {
            this.submenuService.setOpenState(this.open);
        }
        if (changes.nzDisabled) {
            this.submenuService.disabled = this.disabled;
            this.setClassMap();
        }
    };
    /**
     * @return {?}
     */
    CmacsSubMenuComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    CmacsSubMenuComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line: component-selector
                    selector: '[cmacs-submenu]',
                    exportAs: 'cmacsSubmenu',
                    providers: [CmacsSubmenuService, NzUpdateHostClassService],
                    animations: [collapseMotion, zoomBigMotion, slideMotion],
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    template: "<div cdkOverlayOrigin\r\n  #origin=\"cdkOverlayOrigin\"\r\n  [class.ant-dropdown-menu-submenu-title]=\"menuService.isInDropDown\"\r\n  [class.ant-menu-submenu-title]=\"!menuService.isInDropDown\"\r\n  [style.paddingLeft.px]=\"menuService.mode === 'inline'? (paddingLeft ? paddingLeft : submenuService.level * menuService.inlineIndent) : null\"\r\n  (mouseenter)=\"setMouseEnterState(true)\"\r\n  (mouseleave)=\"setMouseEnterState(false)\"\r\n  (click)=\"clickSubMenuTitle()\">\r\n  <ng-content select=\"[title]\"></ng-content>\r\n  <span *ngIf=\"menuService.isInDropDown; else notDropdownTpl\" class=\"ant-dropdown-menu-submenu-arrow\">\r\n    <i nz-icon type=\"right\" class=\"anticon-right ant-dropdown-menu-submenu-arrow-icon\"></i>\r\n  </span>\r\n  <ng-template #notDropdownTpl><i class=\"ant-menu-submenu-arrow\"></i></ng-template>\r\n</div>\r\n<ul *ngIf=\"menuService.mode === 'inline'\"\r\n  [@collapseMotion]=\"expandState\"\r\n  [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n  [ngClass]=\"menuClassName\"\r\n  class=\"ant-menu ant-menu-inline ant-menu-sub\">\r\n  <ng-template [ngTemplateOutlet]=\"subMenuTemplate\"></ng-template>\r\n</ul>\r\n<ng-template cdkConnectedOverlay\r\n  (positionChange)=\"onPositionChange($event)\"\r\n  [cdkConnectedOverlayPositions]=\"overlayPositions\"\r\n  [cdkConnectedOverlayOrigin]=\"origin\"\r\n  [cdkConnectedOverlayWidth]=\"triggerWidth\"\r\n  [cdkConnectedOverlayOpen]=\"open && menuService.mode !== 'inline'\">\r\n  <div class=\"ant-menu-submenu ant-menu-submenu-popup\"\r\n    [@slideMotion]=\"expandState\"\r\n    [@zoomBigMotion]=\"expandState\"\r\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n    [class.ant-menu-light]=\"menuService.theme === 'light'\"\r\n    [class.ant-menu-dark]=\"menuService.theme === 'dark'\"\r\n    [class.ant-menu-submenu-placement-bottomLeft]=\"submenuService.mode === 'horizontal'\"\r\n    [class.ant-menu-submenu-placement-rightTop]=\"submenuService.mode === 'vertical' && placement === 'rightTop'\"\r\n    [class.ant-menu-submenu-placement-leftTop]=\"submenuService.mode === 'vertical' && placement === 'leftTop'\"\r\n    (mouseleave)=\"setMouseEnterState(false)\"\r\n    (mouseenter)=\"setMouseEnterState(true)\">\r\n    <ul [class.ant-dropdown-menu]=\"menuService.isInDropDown\"\r\n      [class.ant-menu]=\"!menuService.isInDropDown\"\r\n      [class.ant-dropdown-menu-vertical]=\"menuService.isInDropDown\"\r\n      [class.ant-menu-vertical]=\"!menuService.isInDropDown\"\r\n      [class.ant-dropdown-menu-sub]=\"menuService.isInDropDown\"\r\n      [class.ant-menu-sub]=\"!menuService.isInDropDown\"\r\n      [ngClass]=\"menuClassName\">\r\n      <ng-template [ngTemplateOutlet]=\"subMenuTemplate\"></ng-template>\r\n    </ul>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #subMenuTemplate>\r\n  <ng-content></ng-content>\r\n</ng-template>",
                    styles: ["\n      .ant-menu-submenu-placement-bottomLeft {\n        top: 6px;\n        position: relative;\n      }\n\n      .ant-menu-submenu-placement-rightTop {\n        left: 4px;\n        position: relative;\n      }\n\n      .ant-menu-submenu-placement-leftTop {\n        right: 4px;\n        position: relative;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    CmacsSubMenuComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NzMenuBaseService },
        { type: ChangeDetectorRef },
        { type: CmacsSubmenuService },
        { type: NzUpdateHostClassService },
        { type: Platform },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    CmacsSubMenuComponent.propDecorators = {
        menuClassName: [{ type: Input }],
        paddingLeft: [{ type: Input }],
        open: [{ type: Input }],
        disabled: [{ type: Input }],
        openChange: [{ type: Output }],
        cdkConnectedOverlay: [{ type: ViewChild, args: [CdkConnectedOverlay,] }],
        cdkOverlayOrigin: [{ type: ViewChild, args: [CdkOverlayOrigin, { read: ElementRef },] }],
        listOfCmacsSubMenuComponent: [{ type: ContentChildren, args: [CmacsSubMenuComponent, { descendants: true },] }],
        listOfCmacsMenuItemDirective: [{ type: ContentChildren, args: [CmacsMenuItemDirective, { descendants: true },] }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsSubMenuComponent.prototype, "open", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsSubMenuComponent.prototype, "disabled", void 0);
    return CmacsSubMenuComponent;
}());
export { CmacsSubMenuComponent };
if (false) {
    /** @type {?} */
    CmacsSubMenuComponent.prototype.menuClassName;
    /** @type {?} */
    CmacsSubMenuComponent.prototype.paddingLeft;
    /** @type {?} */
    CmacsSubMenuComponent.prototype.open;
    /** @type {?} */
    CmacsSubMenuComponent.prototype.disabled;
    /** @type {?} */
    CmacsSubMenuComponent.prototype.openChange;
    /** @type {?} */
    CmacsSubMenuComponent.prototype.cdkConnectedOverlay;
    /** @type {?} */
    CmacsSubMenuComponent.prototype.cdkOverlayOrigin;
    /** @type {?} */
    CmacsSubMenuComponent.prototype.listOfCmacsSubMenuComponent;
    /** @type {?} */
    CmacsSubMenuComponent.prototype.listOfCmacsMenuItemDirective;
    /** @type {?} */
    CmacsSubMenuComponent.prototype.placement;
    /** @type {?} */
    CmacsSubMenuComponent.prototype.triggerWidth;
    /** @type {?} */
    CmacsSubMenuComponent.prototype.expandState;
    /** @type {?} */
    CmacsSubMenuComponent.prototype.overlayPositions;
    /**
     * @type {?}
     * @private
     */
    CmacsSubMenuComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    CmacsSubMenuComponent.prototype.isChildMenuSelected;
    /**
     * @type {?}
     * @private
     */
    CmacsSubMenuComponent.prototype.isMouseHover;
    /**
     * @type {?}
     * @private
     */
    CmacsSubMenuComponent.prototype.elementRef;
    /** @type {?} */
    CmacsSubMenuComponent.prototype.menuService;
    /**
     * @type {?}
     * @private
     */
    CmacsSubMenuComponent.prototype.cdr;
    /** @type {?} */
    CmacsSubMenuComponent.prototype.submenuService;
    /**
     * @type {?}
     * @private
     */
    CmacsSubMenuComponent.prototype.updateHostClassService;
    /**
     * @type {?}
     * @private
     */
    CmacsSubMenuComponent.prototype.platform;
    /** @type {?} */
    CmacsSubMenuComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc3VibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLW1lbnUvY21hY3Mtc3VibWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQWtDLE1BQU0sc0JBQXNCLENBQUM7QUFDN0csT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUlMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUVULFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRSxPQUFPLEVBQ0wsY0FBYyxFQUNkLGdCQUFnQixFQUNoQixXQUFXLEVBQ1gsYUFBYSxFQUNiLHlCQUF5QixFQUN6QixZQUFZLEVBQ1osaUJBQWlCLEVBQ2pCLHNCQUFzQixFQUN0Qix3QkFBd0IsRUFDeEIsWUFBWSxFQUNiLE1BQU0sb0JBQW9CLENBQUM7QUFFNUIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFOUQ7SUE0RkUsK0JBQ1UsVUFBc0IsRUFDdkIsV0FBOEIsRUFDN0IsR0FBc0IsRUFDdkIsY0FBbUMsRUFDbEMsc0JBQWdE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QWVDO2lCQUVKOzs7O2dCQTlEQyxVQUFVO2dCQXlCVixpQkFBaUI7Z0JBNUJqQixpQkFBaUI7Z0JBbUNWLG1CQUFtQjtnQkFMMUIsd0JBQXdCO2dCQWxDakIsUUFBUTtnQkFpQ2Ysc0JBQXNCLHVCQTJHbkIsSUFBSSxZQUFJLFFBQVE7OztnQ0FyRWxCLEtBQUs7OEJBQ0wsS0FBSzt1QkFDTCxLQUFLOzJCQUNMLEtBQUs7NkJBQ0wsTUFBTTtzQ0FFTixTQUFTLFNBQUMsbUJBQW1CO21DQUM3QixTQUFTLFNBQUMsZ0JBQWdCLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFOzhDQUNoRCxlQUFlLFNBQUMscUJBQXFCLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFOytDQUU1RCxlQUFlLFNBQUMsc0JBQXNCLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFOztJQVJyQztRQUFmLFlBQVksRUFBRTs7dURBQWM7SUFDYjtRQUFmLFlBQVksRUFBRTs7MkRBQWtCO0lBNEk1Qyw0QkFBQztDQUFBLEFBN0tELElBNktDO1NBaEpZLHFCQUFxQjs7O0lBQ2hDLDhDQUErQjs7SUFDL0IsNENBQTZCOztJQUM3QixxQ0FBc0M7O0lBQ3RDLHlDQUEwQzs7SUFDMUMsMkNBQTBFOztJQUUxRSxvREFBeUU7O0lBQ3pFLGlEQUFnRjs7SUFDaEYsNERBQzhEOztJQUM5RCw2REFDZ0U7O0lBRWhFLDBDQUF1Qjs7SUFDdkIsNkNBQXFCOztJQUNyQiw0Q0FBMEI7O0lBQzFCLGlEQUFrRDs7Ozs7SUFFbEQseUNBQXVDOzs7OztJQUN2QyxvREFBb0M7Ozs7O0lBQ3BDLDZDQUE2Qjs7Ozs7SUEyQzNCLDJDQUE4Qjs7SUFDOUIsNENBQXFDOzs7OztJQUNyQyxvQ0FBOEI7O0lBQzlCLCtDQUEwQzs7Ozs7SUFDMUMsdURBQXdEOzs7OztJQUN4RCx5Q0FBMEI7O0lBQzFCLDRDQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka0Nvbm5lY3RlZE92ZXJsYXksIENka092ZXJsYXlPcmlnaW4sIENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBRdWVyeUxpc3QsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIG1lcmdlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZsYXRNYXAsIG1hcCwgc3RhcnRXaXRoLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGNvbGxhcHNlTW90aW9uLFxyXG4gIGdldFBsYWNlbWVudE5hbWUsXHJcbiAgc2xpZGVNb3Rpb24sXHJcbiAgem9vbUJpZ01vdGlvbixcclxuICBERUZBVUxUX1NVQk1FTlVfUE9TSVRJT05TLFxyXG4gIElucHV0Qm9vbGVhbixcclxuICBOek1lbnVCYXNlU2VydmljZSxcclxuICBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLFxyXG4gIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSxcclxuICBQT1NJVElPTl9NQVBcclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ21hY3NNZW51SXRlbURpcmVjdGl2ZSB9IGZyb20gJy4vY21hY3MtbWVudS1pdGVtLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IENtYWNzU3VibWVudVNlcnZpY2UgfSBmcm9tICcuL2NtYWNzLXN1Ym1lbnUuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ1tjbWFjcy1zdWJtZW51XScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1N1Ym1lbnUnLFxyXG4gIHByb3ZpZGVyczogW0NtYWNzU3VibWVudVNlcnZpY2UsIE56VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXHJcbiAgYW5pbWF0aW9uczogW2NvbGxhcHNlTW90aW9uLCB6b29tQmlnTW90aW9uLCBzbGlkZU1vdGlvbl0sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mtc3VibWVudS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIC5hbnQtbWVudS1zdWJtZW51LXBsYWNlbWVudC1ib3R0b21MZWZ0IHtcclxuICAgICAgICB0b3A6IDZweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hbnQtbWVudS1zdWJtZW51LXBsYWNlbWVudC1yaWdodFRvcCB7XHJcbiAgICAgICAgbGVmdDogNHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmFudC1tZW51LXN1Ym1lbnUtcGxhY2VtZW50LWxlZnRUb3Age1xyXG4gICAgICAgIHJpZ2h0OiA0cHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NTdWJNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgbWVudUNsYXNzTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHBhZGRpbmdMZWZ0OiBudW1iZXI7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG9wZW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb3BlbkNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBAVmlld0NoaWxkKENka0Nvbm5lY3RlZE92ZXJsYXkpIGNka0Nvbm5lY3RlZE92ZXJsYXk6IENka0Nvbm5lY3RlZE92ZXJsYXk7XHJcbiAgQFZpZXdDaGlsZChDZGtPdmVybGF5T3JpZ2luLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgY2RrT3ZlcmxheU9yaWdpbjogRWxlbWVudFJlZjtcclxuICBAQ29udGVudENoaWxkcmVuKENtYWNzU3ViTWVudUNvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxyXG4gIGxpc3RPZkNtYWNzU3ViTWVudUNvbXBvbmVudDogUXVlcnlMaXN0PENtYWNzU3ViTWVudUNvbXBvbmVudD47XHJcbiAgQENvbnRlbnRDaGlsZHJlbihDbWFjc01lbnVJdGVtRGlyZWN0aXZlLCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pXHJcbiAgbGlzdE9mQ21hY3NNZW51SXRlbURpcmVjdGl2ZTogUXVlcnlMaXN0PENtYWNzTWVudUl0ZW1EaXJlY3RpdmU+O1xyXG5cclxuICBwbGFjZW1lbnQgPSAncmlnaHRUb3AnO1xyXG4gIHRyaWdnZXJXaWR0aDogbnVtYmVyO1xyXG4gIGV4cGFuZFN0YXRlID0gJ2NvbGxhcHNlZCc7XHJcbiAgb3ZlcmxheVBvc2l0aW9ucyA9IFsuLi5ERUZBVUxUX1NVQk1FTlVfUE9TSVRJT05TXTtcclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgcHJpdmF0ZSBpc0NoaWxkTWVudVNlbGVjdGVkID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBpc01vdXNlSG92ZXIgPSBmYWxzZTtcclxuXHJcbiAgc2V0T3BlblN0YXRlKG9wZW46IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuc3VibWVudVNlcnZpY2Uuc2V0T3BlblN0YXRlKG9wZW4pO1xyXG4gIH1cclxuXHJcbiAgY2xpY2tTdWJNZW51VGl0bGUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zdWJtZW51U2VydmljZS5tb2RlID09PSAnaW5saW5lJyAmJiAhdGhpcy5tZW51U2VydmljZS5pc0luRHJvcERvd24gJiYgIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5zZXRPcGVuU3RhdGUoIXRoaXMub3Blbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRNb3VzZUVudGVyU3RhdGUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuaXNNb3VzZUhvdmVyID0gdmFsdWU7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICB0aGlzLnN1Ym1lbnVTZXJ2aWNlLnNldE1vdXNlRW50ZXJTdGF0ZSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBzZXRUcmlnZ2VyV2lkdGgoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zdWJtZW51U2VydmljZS5tb2RlID09PSAnaG9yaXpvbnRhbCcgJiYgdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgdGhpcy50cmlnZ2VyV2lkdGggPSB0aGlzLmNka092ZXJsYXlPcmlnaW4ubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uUG9zaXRpb25DaGFuZ2UocG9zaXRpb246IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSk6IHZvaWQge1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgdGhpcy5wbGFjZW1lbnQgPSBnZXRQbGFjZW1lbnROYW1lKHBvc2l0aW9uKSE7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcHJlZml4TmFtZSA9IHRoaXMubWVudVNlcnZpY2UuaXNJbkRyb3BEb3duID8gJ2FudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUnIDogJ2FudC1tZW51LXN1Ym1lbnUnO1xyXG4gICAgdGhpcy51cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwge1xyXG4gICAgICBbYCR7cHJlZml4TmFtZX1gXTogdHJ1ZSxcclxuICAgICAgW2Ake3ByZWZpeE5hbWV9LWRpc2FibGVkYF06IHRoaXMuZGlzYWJsZWQsXHJcbiAgICAgIFtgJHtwcmVmaXhOYW1lfS1vcGVuYF06IHRoaXMub3BlbixcclxuICAgICAgW2Ake3ByZWZpeE5hbWV9LXNlbGVjdGVkYF06IHRoaXMuaXNDaGlsZE1lbnVTZWxlY3RlZCxcclxuICAgICAgW2Ake3ByZWZpeE5hbWV9LSR7dGhpcy5zdWJtZW51U2VydmljZS5tb2RlfWBdOiB0cnVlLFxyXG4gICAgICBbYCR7cHJlZml4TmFtZX0tYWN0aXZlYF06IHRoaXMuaXNNb3VzZUhvdmVyICYmICF0aGlzLmRpc2FibGVkXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHVibGljIG1lbnVTZXJ2aWNlOiBOek1lbnVCYXNlU2VydmljZSxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHB1YmxpYyBzdWJtZW51U2VydmljZTogQ21hY3NTdWJtZW51U2VydmljZSxcclxuICAgIHByaXZhdGUgdXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgY29tYmluZUxhdGVzdCh0aGlzLnN1Ym1lbnVTZXJ2aWNlLm1vZGUkLCB0aGlzLnN1Ym1lbnVTZXJ2aWNlLm9wZW4kKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgY29uc3QgbW9kZSA9IGRhdGFbMF07XHJcbiAgICAgICAgY29uc3Qgb3BlbiA9IGRhdGFbMV07XHJcbiAgICAgICAgaWYgKG9wZW4gJiYgbW9kZSA9PT0gJ2lubGluZScpIHtcclxuICAgICAgICAgIHRoaXMuZXhwYW5kU3RhdGUgPSAnZXhwYW5kZWQnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3BlbiAmJiBtb2RlID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgIHRoaXMuZXhwYW5kU3RhdGUgPSAnYm90dG9tJztcclxuICAgICAgICB9IGVsc2UgaWYgKG9wZW4gJiYgbW9kZSA9PT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICAgICAgdGhpcy5leHBhbmRTdGF0ZSA9ICdhY3RpdmUnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmV4cGFuZFN0YXRlID0gJ2NvbGxhcHNlZCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub3ZlcmxheVBvc2l0aW9ucyA9XHJcbiAgICAgICAgICBtb2RlID09PSAnaG9yaXpvbnRhbCcgPyBbUE9TSVRJT05fTUFQLmJvdHRvbUxlZnRdIDogW1BPU0lUSU9OX01BUC5yaWdodFRvcCwgUE9TSVRJT05fTUFQLmxlZnRUb3BdO1xyXG4gICAgICAgIGlmIChvcGVuICE9PSB0aGlzLm9wZW4pIHtcclxuICAgICAgICAgIHRoaXMub3BlbiA9IG9wZW47XHJcbiAgICAgICAgICB0aGlzLm9wZW5DaGFuZ2UuZW1pdCh0aGlzLm9wZW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICAgICAgdGhpcy5zZXRUcmlnZ2VyV2lkdGgoKTtcclxuICAgICAgfSk7XHJcbiAgICB0aGlzLnN1Ym1lbnVTZXJ2aWNlLm1lbnVPcGVuJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkYXRhOiBib29sZWFuKSA9PiB7XHJcbiAgICAgIHRoaXMubWVudVNlcnZpY2UubWVudU9wZW4kLm5leHQoZGF0YSk7XHJcbiAgICB9KTtcclxuICAgIG1lcmdlKFxyXG4gICAgICB0aGlzLm1lbnVTZXJ2aWNlLm1vZGUkLFxyXG4gICAgICB0aGlzLm1lbnVTZXJ2aWNlLmlubGluZUluZGVudCQsXHJcbiAgICAgIHRoaXMuc3VibWVudVNlcnZpY2UubGV2ZWwkLFxyXG4gICAgICB0aGlzLnN1Ym1lbnVTZXJ2aWNlLm9wZW4kLFxyXG4gICAgICB0aGlzLnN1Ym1lbnVTZXJ2aWNlLm1vZGUkXHJcbiAgICApXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRUcmlnZ2VyV2lkdGgoKTtcclxuICAgIHRoaXMubGlzdE9mQ21hY3NNZW51SXRlbURpcmVjdGl2ZS5jaGFuZ2VzXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHN0YXJ0V2l0aCh0cnVlKSxcclxuICAgICAgICBmbGF0TWFwKCgpID0+XHJcbiAgICAgICAgICBtZXJnZSh0aGlzLmxpc3RPZkNtYWNzTWVudUl0ZW1EaXJlY3RpdmUuY2hhbmdlcywgLi4udGhpcy5saXN0T2ZDbWFjc01lbnVJdGVtRGlyZWN0aXZlLm1hcChtZW51ID0+IG1lbnUuc2VsZWN0ZWQkKSlcclxuICAgICAgICApLFxyXG4gICAgICAgIG1hcCgoKSA9PiB0aGlzLmxpc3RPZkNtYWNzTWVudUl0ZW1EaXJlY3RpdmUuc29tZShlID0+IGUuc2VsZWN0ZWQpKSxcclxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKHNlbGVjdGVkID0+IHtcclxuICAgICAgICB0aGlzLmlzQ2hpbGRNZW51U2VsZWN0ZWQgPSBzZWxlY3RlZDtcclxuICAgICAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubnpPcGVuKSB7XHJcbiAgICAgIHRoaXMuc3VibWVudVNlcnZpY2Uuc2V0T3BlblN0YXRlKHRoaXMub3Blbik7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5uekRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuc3VibWVudVNlcnZpY2UuZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkO1xyXG4gICAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=