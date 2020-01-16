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
export class CmacsSubMenuComponent {
    /**
     * @param {?} elementRef
     * @param {?} menuService
     * @param {?} cdr
     * @param {?} submenuService
     * @param {?} updateHostClassService
     * @param {?} platform
     * @param {?=} noAnimation
     */
    constructor(elementRef, menuService, cdr, submenuService, updateHostClassService, platform, noAnimation) {
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
        this.overlayPositions = [...DEFAULT_SUBMENU_POSITIONS];
        this.destroy$ = new Subject();
        this.isChildMenuSelected = false;
        this.isMouseHover = false;
    }
    /**
     * @param {?} open
     * @return {?}
     */
    setOpenState(open) {
        this.submenuService.setOpenState(open);
    }
    /**
     * @return {?}
     */
    clickSubMenuTitle() {
        if (this.submenuService.mode === 'inline' && !this.menuService.isInDropDown && !this.disabled) {
            this.setOpenState(!this.open);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setMouseEnterState(value) {
        this.isMouseHover = value;
        this.setClassMap();
        this.submenuService.setMouseEnterState(value);
    }
    /**
     * @return {?}
     */
    setTriggerWidth() {
        if (this.submenuService.mode === 'horizontal' && this.platform.isBrowser) {
            this.triggerWidth = this.cdkOverlayOrigin.nativeElement.getBoundingClientRect().width;
        }
    }
    /**
     * @param {?} position
     * @return {?}
     */
    onPositionChange(position) {
        // tslint:disable-next-line: no-non-null-assertion
        this.placement = (/** @type {?} */ (getPlacementName(position)));
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    setClassMap() {
        /** @type {?} */
        const prefixName = this.menuService.isInDropDown ? 'ant-dropdown-menu-submenu' : 'ant-menu-submenu';
        this.updateHostClassService.updateHostClass(this.elementRef.nativeElement, {
            [`${prefixName}`]: true,
            [`${prefixName}-disabled`]: this.disabled,
            [`${prefixName}-open`]: this.open,
            [`${prefixName}-selected`]: this.isChildMenuSelected,
            [`${prefixName}-${this.submenuService.mode}`]: true,
            [`${prefixName}-active`]: this.isMouseHover && !this.disabled
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        combineLatest(this.submenuService.mode$, this.submenuService.open$)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            /** @type {?} */
            const mode = data[0];
            /** @type {?} */
            const open = data[1];
            if (open && mode === 'inline') {
                this.expandState = 'expanded';
            }
            else if (open && mode === 'horizontal') {
                this.expandState = 'bottom';
            }
            else if (open && mode === 'vertical') {
                this.expandState = 'active';
            }
            else {
                this.expandState = 'collapsed';
            }
            this.overlayPositions =
                mode === 'horizontal' ? [POSITION_MAP.bottomLeft] : [POSITION_MAP.rightTop, POSITION_MAP.leftTop];
            if (open !== this.open) {
                this.open = open;
                this.openChange.emit(this.open);
            }
            this.setClassMap();
            this.setTriggerWidth();
        }));
        this.submenuService.menuOpen$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this.menuService.menuOpen$.next(data);
        }));
        merge(this.menuService.mode$, this.menuService.inlineIndent$, this.submenuService.level$, this.submenuService.open$, this.submenuService.mode$)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.cdr.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.setTriggerWidth();
        this.listOfCmacsMenuItemDirective.changes
            .pipe(startWith(true), flatMap((/**
         * @return {?}
         */
        () => merge(this.listOfCmacsMenuItemDirective.changes, ...this.listOfCmacsMenuItemDirective.map((/**
         * @param {?} menu
         * @return {?}
         */
        menu => menu.selected$))))), map((/**
         * @return {?}
         */
        () => this.listOfCmacsMenuItemDirective.some((/**
         * @param {?} e
         * @return {?}
         */
        e => e.selected)))), takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} selected
         * @return {?}
         */
        selected => {
            this.isChildMenuSelected = selected;
            this.setClassMap();
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.open) {
            this.submenuService.setOpenState(this.open);
        }
        if (changes.disabled) {
            this.submenuService.disabled = this.disabled;
            this.setClassMap();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
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
                styles: [`
      .ant-menu-submenu-placement-bottomLeft {
        top: 6px;
        position: relative;
      }

      .ant-menu-submenu-placement-rightTop {
        left: 4px;
        position: relative;
      }

      .ant-menu-submenu-placement-leftTop {
        right: 4px;
        position: relative;
      }
    `]
            }] }
];
/** @nocollapse */
CmacsSubMenuComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NzMenuBaseService },
    { type: ChangeDetectorRef },
    { type: CmacsSubmenuService },
    { type: NzUpdateHostClassService },
    { type: Platform },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc3VibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLW1lbnUvY21hY3Mtc3VibWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQWtDLE1BQU0sc0JBQXNCLENBQUM7QUFDN0csT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUlMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUVULFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRSxPQUFPLEVBQ0wsY0FBYyxFQUNkLGdCQUFnQixFQUNoQixXQUFXLEVBQ1gsYUFBYSxFQUNiLHlCQUF5QixFQUN6QixZQUFZLEVBQ1osaUJBQWlCLEVBQ2pCLHNCQUFzQixFQUN0Qix3QkFBd0IsRUFDeEIsWUFBWSxFQUNiLE1BQU0sb0JBQW9CLENBQUM7QUFFNUIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUErQjlELE1BQU0sT0FBTyxxQkFBcUI7Ozs7Ozs7Ozs7SUErRGhDLFlBQ1UsVUFBc0IsRUFDdkIsV0FBOEIsRUFDN0IsR0FB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O3lCQUUzQzs7Ozs7Ozs7Ozs7Ozs7O0tBZUM7YUFFSjs7OztZQTlEQyxVQUFVO1lBeUJWLGlCQUFpQjtZQTVCakIsaUJBQWlCO1lBbUNWLG1CQUFtQjtZQUwxQix3QkFBd0I7WUFsQ2pCLFFBQVE7WUFpQ2Ysc0JBQXNCLHVCQTJHbkIsSUFBSSxZQUFJLFFBQVE7Ozs0QkFyRWxCLEtBQUs7MEJBQ0wsS0FBSzttQkFDTCxLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsTUFBTTtrQ0FFTixTQUFTLFNBQUMsbUJBQW1COytCQUM3QixTQUFTLFNBQUMsZ0JBQWdCLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFOzBDQUNoRCxlQUFlLFNBQUMscUJBQXFCLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFOzJDQUU1RCxlQUFlLFNBQUMsc0JBQXNCLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFOztBQVJyQztJQUFmLFlBQVksRUFBRTs7bURBQWM7QUFDYjtJQUFmLFlBQVksRUFBRTs7dURBQWtCOzs7SUFIMUMsOENBQStCOztJQUMvQiw0Q0FBNkI7O0lBQzdCLHFDQUFzQzs7SUFDdEMseUNBQTBDOztJQUMxQywyQ0FBMEU7O0lBRTFFLG9EQUF5RTs7SUFDekUsaURBQWdGOztJQUNoRiw0REFDOEQ7O0lBQzlELDZEQUNnRTs7SUFFaEUsMENBQXVCOztJQUN2Qiw2Q0FBcUI7O0lBQ3JCLDRDQUEwQjs7SUFDMUIsaURBQWtEOzs7OztJQUVsRCx5Q0FBdUM7Ozs7O0lBQ3ZDLG9EQUFvQzs7Ozs7SUFDcEMsNkNBQTZCOzs7OztJQTJDM0IsMkNBQThCOztJQUM5Qiw0Q0FBcUM7Ozs7O0lBQ3JDLG9DQUE4Qjs7SUFDOUIsK0NBQTBDOzs7OztJQUMxQyx1REFBd0Q7Ozs7O0lBQ3hELHlDQUEwQjs7SUFDMUIsNENBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2RrQ29ubmVjdGVkT3ZlcmxheSwgQ2RrT3ZlcmxheU9yaWdpbiwgQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgbWVyZ2UsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmxhdE1hcCwgbWFwLCBzdGFydFdpdGgsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgY29sbGFwc2VNb3Rpb24sXHJcbiAgZ2V0UGxhY2VtZW50TmFtZSxcclxuICBzbGlkZU1vdGlvbixcclxuICB6b29tQmlnTW90aW9uLFxyXG4gIERFRkFVTFRfU1VCTUVOVV9QT1NJVElPTlMsXHJcbiAgSW5wdXRCb29sZWFuLFxyXG4gIE56TWVudUJhc2VTZXJ2aWNlLFxyXG4gIE56Tm9BbmltYXRpb25EaXJlY3RpdmUsXHJcbiAgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLFxyXG4gIFBPU0lUSU9OX01BUFxyXG59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDbWFjc01lbnVJdGVtRGlyZWN0aXZlIH0gZnJvbSAnLi9jbWFjcy1tZW51LWl0ZW0uZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQ21hY3NTdWJtZW51U2VydmljZSB9IGZyb20gJy4vY21hY3Mtc3VibWVudS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnW2NtYWNzLXN1Ym1lbnVdJyxcclxuICBleHBvcnRBczogJ2NtYWNzU3VibWVudScsXHJcbiAgcHJvdmlkZXJzOiBbQ21hY3NTdWJtZW51U2VydmljZSwgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXSxcclxuICBhbmltYXRpb25zOiBbY29sbGFwc2VNb3Rpb24sIHpvb21CaWdNb3Rpb24sIHNsaWRlTW90aW9uXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1zdWJtZW51LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgLmFudC1tZW51LXN1Ym1lbnUtcGxhY2VtZW50LWJvdHRvbUxlZnQge1xyXG4gICAgICAgIHRvcDogNnB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmFudC1tZW51LXN1Ym1lbnUtcGxhY2VtZW50LXJpZ2h0VG9wIHtcclxuICAgICAgICBsZWZ0OiA0cHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYW50LW1lbnUtc3VibWVudS1wbGFjZW1lbnQtbGVmdFRvcCB7XHJcbiAgICAgICAgcmlnaHQ6IDRweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1N1Yk1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBtZW51Q2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcGFkZGluZ0xlZnQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgb3BlbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvcGVuQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoQ2RrQ29ubmVjdGVkT3ZlcmxheSkgY2RrQ29ubmVjdGVkT3ZlcmxheTogQ2RrQ29ubmVjdGVkT3ZlcmxheTtcclxuICBAVmlld0NoaWxkKENka092ZXJsYXlPcmlnaW4sIHsgcmVhZDogRWxlbWVudFJlZiB9KSBjZGtPdmVybGF5T3JpZ2luOiBFbGVtZW50UmVmO1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oQ21hY3NTdWJNZW51Q29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pXHJcbiAgbGlzdE9mQ21hY3NTdWJNZW51Q29tcG9uZW50OiBRdWVyeUxpc3Q8Q21hY3NTdWJNZW51Q29tcG9uZW50PjtcclxuICBAQ29udGVudENoaWxkcmVuKENtYWNzTWVudUl0ZW1EaXJlY3RpdmUsIHsgZGVzY2VuZGFudHM6IHRydWUgfSlcclxuICBsaXN0T2ZDbWFjc01lbnVJdGVtRGlyZWN0aXZlOiBRdWVyeUxpc3Q8Q21hY3NNZW51SXRlbURpcmVjdGl2ZT47XHJcblxyXG4gIHBsYWNlbWVudCA9ICdyaWdodFRvcCc7XHJcbiAgdHJpZ2dlcldpZHRoOiBudW1iZXI7XHJcbiAgZXhwYW5kU3RhdGUgPSAnY29sbGFwc2VkJztcclxuICBvdmVybGF5UG9zaXRpb25zID0gWy4uLkRFRkFVTFRfU1VCTUVOVV9QT1NJVElPTlNdO1xyXG5cclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBwcml2YXRlIGlzQ2hpbGRNZW51U2VsZWN0ZWQgPSBmYWxzZTtcclxuICBwcml2YXRlIGlzTW91c2VIb3ZlciA9IGZhbHNlO1xyXG5cclxuICBzZXRPcGVuU3RhdGUob3BlbjogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5zdWJtZW51U2VydmljZS5zZXRPcGVuU3RhdGUob3Blbik7XHJcbiAgfVxyXG5cclxuICBjbGlja1N1Yk1lbnVUaXRsZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnN1Ym1lbnVTZXJ2aWNlLm1vZGUgPT09ICdpbmxpbmUnICYmICF0aGlzLm1lbnVTZXJ2aWNlLmlzSW5Ecm9wRG93biAmJiAhdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLnNldE9wZW5TdGF0ZSghdGhpcy5vcGVuKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldE1vdXNlRW50ZXJTdGF0ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5pc01vdXNlSG92ZXIgPSB2YWx1ZTtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgIHRoaXMuc3VibWVudVNlcnZpY2Uuc2V0TW91c2VFbnRlclN0YXRlKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHNldFRyaWdnZXJXaWR0aCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnN1Ym1lbnVTZXJ2aWNlLm1vZGUgPT09ICdob3Jpem9udGFsJyAmJiB0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xyXG4gICAgICB0aGlzLnRyaWdnZXJXaWR0aCA9IHRoaXMuY2RrT3ZlcmxheU9yaWdpbi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Qb3NpdGlvbkNoYW5nZShwb3NpdGlvbjogQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlKTogdm9pZCB7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICB0aGlzLnBsYWNlbWVudCA9IGdldFBsYWNlbWVudE5hbWUocG9zaXRpb24pITtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICBjb25zdCBwcmVmaXhOYW1lID0gdGhpcy5tZW51U2VydmljZS5pc0luRHJvcERvd24gPyAnYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudScgOiAnYW50LW1lbnUtc3VibWVudSc7XHJcbiAgICB0aGlzLnVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB7XHJcbiAgICAgIFtgJHtwcmVmaXhOYW1lfWBdOiB0cnVlLFxyXG4gICAgICBbYCR7cHJlZml4TmFtZX0tZGlzYWJsZWRgXTogdGhpcy5kaXNhYmxlZCxcclxuICAgICAgW2Ake3ByZWZpeE5hbWV9LW9wZW5gXTogdGhpcy5vcGVuLFxyXG4gICAgICBbYCR7cHJlZml4TmFtZX0tc2VsZWN0ZWRgXTogdGhpcy5pc0NoaWxkTWVudVNlbGVjdGVkLFxyXG4gICAgICBbYCR7cHJlZml4TmFtZX0tJHt0aGlzLnN1Ym1lbnVTZXJ2aWNlLm1vZGV9YF06IHRydWUsXHJcbiAgICAgIFtgJHtwcmVmaXhOYW1lfS1hY3RpdmVgXTogdGhpcy5pc01vdXNlSG92ZXIgJiYgIXRoaXMuZGlzYWJsZWRcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwdWJsaWMgbWVudVNlcnZpY2U6IE56TWVudUJhc2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHVibGljIHN1Ym1lbnVTZXJ2aWNlOiBDbWFjc1N1Ym1lbnVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB1cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcclxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBjb21iaW5lTGF0ZXN0KHRoaXMuc3VibWVudVNlcnZpY2UubW9kZSQsIHRoaXMuc3VibWVudVNlcnZpY2Uub3BlbiQpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICBjb25zdCBtb2RlID0gZGF0YVswXTtcclxuICAgICAgICBjb25zdCBvcGVuID0gZGF0YVsxXTtcclxuICAgICAgICBpZiAob3BlbiAmJiBtb2RlID09PSAnaW5saW5lJykge1xyXG4gICAgICAgICAgdGhpcy5leHBhbmRTdGF0ZSA9ICdleHBhbmRlZCc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvcGVuICYmIG1vZGUgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgdGhpcy5leHBhbmRTdGF0ZSA9ICdib3R0b20nO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3BlbiAmJiBtb2RlID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICB0aGlzLmV4cGFuZFN0YXRlID0gJ2FjdGl2ZSc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZXhwYW5kU3RhdGUgPSAnY29sbGFwc2VkJztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vdmVybGF5UG9zaXRpb25zID1cclxuICAgICAgICAgIG1vZGUgPT09ICdob3Jpem9udGFsJyA/IFtQT1NJVElPTl9NQVAuYm90dG9tTGVmdF0gOiBbUE9TSVRJT05fTUFQLnJpZ2h0VG9wLCBQT1NJVElPTl9NQVAubGVmdFRvcF07XHJcbiAgICAgICAgaWYgKG9wZW4gIT09IHRoaXMub3Blbikge1xyXG4gICAgICAgICAgdGhpcy5vcGVuID0gb3BlbjtcclxuICAgICAgICAgIHRoaXMub3BlbkNoYW5nZS5lbWl0KHRoaXMub3Blbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgICAgICB0aGlzLnNldFRyaWdnZXJXaWR0aCgpO1xyXG4gICAgICB9KTtcclxuICAgIHRoaXMuc3VibWVudVNlcnZpY2UubWVudU9wZW4kLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRhdGE6IGJvb2xlYW4pID0+IHtcclxuICAgICAgdGhpcy5tZW51U2VydmljZS5tZW51T3BlbiQubmV4dChkYXRhKTtcclxuICAgIH0pO1xyXG4gICAgbWVyZ2UoXHJcbiAgICAgIHRoaXMubWVudVNlcnZpY2UubW9kZSQsXHJcbiAgICAgIHRoaXMubWVudVNlcnZpY2UuaW5saW5lSW5kZW50JCxcclxuICAgICAgdGhpcy5zdWJtZW51U2VydmljZS5sZXZlbCQsXHJcbiAgICAgIHRoaXMuc3VibWVudVNlcnZpY2Uub3BlbiQsXHJcbiAgICAgIHRoaXMuc3VibWVudVNlcnZpY2UubW9kZSRcclxuICAgIClcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldFRyaWdnZXJXaWR0aCgpO1xyXG4gICAgdGhpcy5saXN0T2ZDbWFjc01lbnVJdGVtRGlyZWN0aXZlLmNoYW5nZXNcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgc3RhcnRXaXRoKHRydWUpLFxyXG4gICAgICAgIGZsYXRNYXAoKCkgPT5cclxuICAgICAgICAgIG1lcmdlKHRoaXMubGlzdE9mQ21hY3NNZW51SXRlbURpcmVjdGl2ZS5jaGFuZ2VzLCAuLi50aGlzLmxpc3RPZkNtYWNzTWVudUl0ZW1EaXJlY3RpdmUubWFwKG1lbnUgPT4gbWVudS5zZWxlY3RlZCQpKVxyXG4gICAgICAgICksXHJcbiAgICAgICAgbWFwKCgpID0+IHRoaXMubGlzdE9mQ21hY3NNZW51SXRlbURpcmVjdGl2ZS5zb21lKGUgPT4gZS5zZWxlY3RlZCkpLFxyXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoc2VsZWN0ZWQgPT4ge1xyXG4gICAgICAgIHRoaXMuaXNDaGlsZE1lbnVTZWxlY3RlZCA9IHNlbGVjdGVkO1xyXG4gICAgICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5vcGVuKSB7XHJcbiAgICAgIHRoaXMuc3VibWVudVNlcnZpY2Uuc2V0T3BlblN0YXRlKHRoaXMub3Blbik7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLnN1Ym1lbnVTZXJ2aWNlLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZDtcclxuICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIl19