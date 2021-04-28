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
                template: "<div cdkOverlayOrigin\r\n  #origin=\"cdkOverlayOrigin\"\r\n  [class.ant-dropdown-menu-submenu-title]=\"menuService.isInDropDown\"\r\n  [class.ant-menu-submenu-title]=\"!menuService.isInDropDown\"\r\n  [style.paddingLeft.px]=\"menuService.mode === 'inline'? (paddingLeft ? paddingLeft : submenuService.level * menuService.inlineIndent) : null\"\r\n  (mouseenter)=\"setMouseEnterState(true)\"\r\n  (mouseleave)=\"setMouseEnterState(false)\"\r\n  (click)=\"clickSubMenuTitle()\">\r\n  <ng-content select=\"[title]\"></ng-content>\r\n  <span *ngIf=\"menuService.isInDropDown; else notDropdownTpl\" class=\"ant-dropdown-menu-submenu-arrow\">\r\n    <i nz-icon type=\"right\" class=\"anticon-right ant-dropdown-menu-submenu-arrow-icon\"></i>\r\n  </span>\r\n  <ng-template #notDropdownTpl><i class=\"ant-menu-submenu-arrow-cmacs\"></i></ng-template>\r\n</div>\r\n<ul *ngIf=\"menuService.mode === 'inline'\"\r\n  [@collapseMotion]=\"expandState\"\r\n  [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n  [ngClass]=\"menuClassName\"\r\n  class=\"ant-menu ant-menu-inline ant-menu-sub\">\r\n  <ng-template [ngTemplateOutlet]=\"subMenuTemplate\"></ng-template>\r\n</ul>\r\n<ng-template cdkConnectedOverlay\r\n  (positionChange)=\"onPositionChange($event)\"\r\n  [cdkConnectedOverlayPositions]=\"overlayPositions\"\r\n  [cdkConnectedOverlayOrigin]=\"origin\"\r\n  [cdkConnectedOverlayWidth]=\"triggerWidth\"\r\n  [cdkConnectedOverlayOpen]=\"open && menuService.mode !== 'inline'\">\r\n  <div class=\"ant-menu-submenu ant-menu-submenu-popup\"\r\n    [@slideMotion]=\"expandState\"\r\n    [@zoomBigMotion]=\"expandState\"\r\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n    [class.ant-menu-light]=\"menuService.theme === 'light'\"\r\n    [class.ant-menu-dark]=\"menuService.theme === 'dark'\"\r\n    [class.ant-menu-submenu-placement-bottomLeft]=\"submenuService.mode === 'horizontal'\"\r\n    [class.ant-menu-submenu-placement-rightTop]=\"submenuService.mode === 'vertical' && placement === 'rightTop'\"\r\n    [class.ant-menu-submenu-placement-leftTop]=\"submenuService.mode === 'vertical' && placement === 'leftTop'\"\r\n    (mouseleave)=\"setMouseEnterState(false)\"\r\n    (mouseenter)=\"setMouseEnterState(true)\">\r\n    <ul [class.ant-dropdown-menu]=\"menuService.isInDropDown\"\r\n      [class.ant-menu]=\"!menuService.isInDropDown\"\r\n      [class.ant-dropdown-menu-vertical]=\"menuService.isInDropDown\"\r\n      [class.ant-menu-vertical]=\"!menuService.isInDropDown\"\r\n      [class.ant-dropdown-menu-sub]=\"menuService.isInDropDown\"\r\n      [class.ant-menu-sub]=\"!menuService.isInDropDown\"\r\n      [ngClass]=\"menuClassName\">\r\n      <ng-template [ngTemplateOutlet]=\"subMenuTemplate\"></ng-template>\r\n    </ul>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #subMenuTemplate>\r\n  <ng-content></ng-content>\r\n</ng-template>\r\n",
                styles: [`
      .ant-menu-submenu-arrow-cmacs {
        position: absolute;
        top: 50%;
        right: 16px;
        transform: translateY(-50%);
        font-size: 16px;
        transition: all .3s;
      }

      .ant-menu-submenu-arrow-cmacs:before {
        font-family: 'ArrowLarge' !important;
        content: '\\e917';
      }

      .ant-menu-inline-collapsed>.ant-menu-submenu>.ant-menu-submenu-title .ant-menu-submenu-arrow-cmacs {
          display: none;
      }

      .ant-menu-submenu-horizontal .ant-menu-submenu-arrow-cmacs {
          display: none;
      }

      .ant-menu-submenu-open.ant-menu-submenu-inline>.ant-menu-submenu-title .ant-menu-submenu-arrow-cmacs:before {
          font-family: 'ArrowLarge' !important;
          content: "\\e912";
      }

      .ant-menu-submenu:not(.ant-menu-submenu-inline):not(.ant-menu-inline-collapsed):not(.ant-menu-submenu-horizontal) > .ant-menu-submenu-title .ant-menu-submenu-arrow-cmacs:before {
          font-family: 'ArrowLarge' !important;
          content: "\\e916";
      }

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc3VibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLW1lbnUvY21hY3Mtc3VibWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQWtDLE1BQU0sc0JBQXNCLENBQUM7QUFDN0csT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUlMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUVULFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRSxPQUFPLEVBQ0wsY0FBYyxFQUNkLGdCQUFnQixFQUNoQixXQUFXLEVBQ1gsYUFBYSxFQUNiLHlCQUF5QixFQUN6QixZQUFZLEVBQ1osaUJBQWlCLEVBQ2pCLHNCQUFzQixFQUN0Qix3QkFBd0IsRUFDeEIsWUFBWSxFQUNiLE1BQU0sb0JBQW9CLENBQUM7QUFFNUIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUErRDlELE1BQU0sT0FBTyxxQkFBcUI7Ozs7Ozs7Ozs7SUErRGhDLFlBQ1UsVUFBc0IsRUFDdkIsV0FBOEIsRUFDN0IsR0FB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O3lCQUUzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0ErQ0M7YUFFSjs7OztZQTlGQyxVQUFVO1lBeUJWLGlCQUFpQjtZQTVCakIsaUJBQWlCO1lBbUNWLG1CQUFtQjtZQUwxQix3QkFBd0I7WUFsQ2pCLFFBQVE7WUFpQ2Ysc0JBQXNCLHVCQTJJbkIsSUFBSSxZQUFJLFFBQVE7Ozs0QkFyRWxCLEtBQUs7MEJBQ0wsS0FBSzttQkFDTCxLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsTUFBTTtrQ0FFTixTQUFTLFNBQUMsbUJBQW1COytCQUM3QixTQUFTLFNBQUMsZ0JBQWdCLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFOzBDQUNoRCxlQUFlLFNBQUMscUJBQXFCLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFOzJDQUU1RCxlQUFlLFNBQUMsc0JBQXNCLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFOztBQVJyQztJQUFmLFlBQVksRUFBRTs7bURBQWM7QUFDYjtJQUFmLFlBQVksRUFBRTs7dURBQWtCOzs7SUFIMUMsOENBQStCOztJQUMvQiw0Q0FBNkI7O0lBQzdCLHFDQUFzQzs7SUFDdEMseUNBQTBDOztJQUMxQywyQ0FBMEU7O0lBRTFFLG9EQUF5RTs7SUFDekUsaURBQWdGOztJQUNoRiw0REFDOEQ7O0lBQzlELDZEQUNnRTs7SUFFaEUsMENBQXVCOztJQUN2Qiw2Q0FBcUI7O0lBQ3JCLDRDQUEwQjs7SUFDMUIsaURBQWtEOzs7OztJQUVsRCx5Q0FBdUM7Ozs7O0lBQ3ZDLG9EQUFvQzs7Ozs7SUFDcEMsNkNBQTZCOzs7OztJQTJDM0IsMkNBQThCOztJQUM5Qiw0Q0FBcUM7Ozs7O0lBQ3JDLG9DQUE4Qjs7SUFDOUIsK0NBQTBDOzs7OztJQUMxQyx1REFBd0Q7Ozs7O0lBQ3hELHlDQUEwQjs7SUFDMUIsNENBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2RrQ29ubmVjdGVkT3ZlcmxheSwgQ2RrT3ZlcmxheU9yaWdpbiwgQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgbWVyZ2UsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmxhdE1hcCwgbWFwLCBzdGFydFdpdGgsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgY29sbGFwc2VNb3Rpb24sXHJcbiAgZ2V0UGxhY2VtZW50TmFtZSxcclxuICBzbGlkZU1vdGlvbixcclxuICB6b29tQmlnTW90aW9uLFxyXG4gIERFRkFVTFRfU1VCTUVOVV9QT1NJVElPTlMsXHJcbiAgSW5wdXRCb29sZWFuLFxyXG4gIE56TWVudUJhc2VTZXJ2aWNlLFxyXG4gIE56Tm9BbmltYXRpb25EaXJlY3RpdmUsXHJcbiAgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLFxyXG4gIFBPU0lUSU9OX01BUFxyXG59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDbWFjc01lbnVJdGVtRGlyZWN0aXZlIH0gZnJvbSAnLi9jbWFjcy1tZW51LWl0ZW0uZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQ21hY3NTdWJtZW51U2VydmljZSB9IGZyb20gJy4vY21hY3Mtc3VibWVudS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnW2NtYWNzLXN1Ym1lbnVdJyxcclxuICBleHBvcnRBczogJ2NtYWNzU3VibWVudScsXHJcbiAgcHJvdmlkZXJzOiBbQ21hY3NTdWJtZW51U2VydmljZSwgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXSxcclxuICBhbmltYXRpb25zOiBbY29sbGFwc2VNb3Rpb24sIHpvb21CaWdNb3Rpb24sIHNsaWRlTW90aW9uXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1zdWJtZW51LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgLmFudC1tZW51LXN1Ym1lbnUtYXJyb3ctY21hY3Mge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICByaWdodDogMTZweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hbnQtbWVudS1zdWJtZW51LWFycm93LWNtYWNzOmJlZm9yZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdBcnJvd0xhcmdlJyAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbnRlbnQ6ICdcXFxcZTkxNyc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hbnQtbWVudS1pbmxpbmUtY29sbGFwc2VkPi5hbnQtbWVudS1zdWJtZW51Pi5hbnQtbWVudS1zdWJtZW51LXRpdGxlIC5hbnQtbWVudS1zdWJtZW51LWFycm93LWNtYWNzIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hbnQtbWVudS1zdWJtZW51LWhvcml6b250YWwgLmFudC1tZW51LXN1Ym1lbnUtYXJyb3ctY21hY3Mge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmFudC1tZW51LXN1Ym1lbnUtb3Blbi5hbnQtbWVudS1zdWJtZW51LWlubGluZT4uYW50LW1lbnUtc3VibWVudS10aXRsZSAuYW50LW1lbnUtc3VibWVudS1hcnJvdy1jbWFjczpiZWZvcmUge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdBcnJvd0xhcmdlJyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgY29udGVudDogXCJcXFxcZTkxMlwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYW50LW1lbnUtc3VibWVudTpub3QoLmFudC1tZW51LXN1Ym1lbnUtaW5saW5lKTpub3QoLmFudC1tZW51LWlubGluZS1jb2xsYXBzZWQpOm5vdCguYW50LW1lbnUtc3VibWVudS1ob3Jpem9udGFsKSA+IC5hbnQtbWVudS1zdWJtZW51LXRpdGxlIC5hbnQtbWVudS1zdWJtZW51LWFycm93LWNtYWNzOmJlZm9yZSB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ0Fycm93TGFyZ2UnICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBjb250ZW50OiBcIlxcXFxlOTE2XCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hbnQtbWVudS1zdWJtZW51LXBsYWNlbWVudC1ib3R0b21MZWZ0IHtcclxuICAgICAgICB0b3A6IDZweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hbnQtbWVudS1zdWJtZW51LXBsYWNlbWVudC1yaWdodFRvcCB7XHJcbiAgICAgICAgbGVmdDogNHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmFudC1tZW51LXN1Ym1lbnUtcGxhY2VtZW50LWxlZnRUb3Age1xyXG4gICAgICAgIHJpZ2h0OiA0cHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NTdWJNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgbWVudUNsYXNzTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHBhZGRpbmdMZWZ0OiBudW1iZXI7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG9wZW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb3BlbkNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBAVmlld0NoaWxkKENka0Nvbm5lY3RlZE92ZXJsYXkpIGNka0Nvbm5lY3RlZE92ZXJsYXk6IENka0Nvbm5lY3RlZE92ZXJsYXk7XHJcbiAgQFZpZXdDaGlsZChDZGtPdmVybGF5T3JpZ2luLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgY2RrT3ZlcmxheU9yaWdpbjogRWxlbWVudFJlZjtcclxuICBAQ29udGVudENoaWxkcmVuKENtYWNzU3ViTWVudUNvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxyXG4gIGxpc3RPZkNtYWNzU3ViTWVudUNvbXBvbmVudDogUXVlcnlMaXN0PENtYWNzU3ViTWVudUNvbXBvbmVudD47XHJcbiAgQENvbnRlbnRDaGlsZHJlbihDbWFjc01lbnVJdGVtRGlyZWN0aXZlLCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pXHJcbiAgbGlzdE9mQ21hY3NNZW51SXRlbURpcmVjdGl2ZTogUXVlcnlMaXN0PENtYWNzTWVudUl0ZW1EaXJlY3RpdmU+O1xyXG5cclxuICBwbGFjZW1lbnQgPSAncmlnaHRUb3AnO1xyXG4gIHRyaWdnZXJXaWR0aDogbnVtYmVyO1xyXG4gIGV4cGFuZFN0YXRlID0gJ2NvbGxhcHNlZCc7XHJcbiAgb3ZlcmxheVBvc2l0aW9ucyA9IFsuLi5ERUZBVUxUX1NVQk1FTlVfUE9TSVRJT05TXTtcclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgcHJpdmF0ZSBpc0NoaWxkTWVudVNlbGVjdGVkID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBpc01vdXNlSG92ZXIgPSBmYWxzZTtcclxuXHJcbiAgc2V0T3BlblN0YXRlKG9wZW46IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuc3VibWVudVNlcnZpY2Uuc2V0T3BlblN0YXRlKG9wZW4pO1xyXG4gIH1cclxuXHJcbiAgY2xpY2tTdWJNZW51VGl0bGUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zdWJtZW51U2VydmljZS5tb2RlID09PSAnaW5saW5lJyAmJiAhdGhpcy5tZW51U2VydmljZS5pc0luRHJvcERvd24gJiYgIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5zZXRPcGVuU3RhdGUoIXRoaXMub3Blbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRNb3VzZUVudGVyU3RhdGUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuaXNNb3VzZUhvdmVyID0gdmFsdWU7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICB0aGlzLnN1Ym1lbnVTZXJ2aWNlLnNldE1vdXNlRW50ZXJTdGF0ZSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBzZXRUcmlnZ2VyV2lkdGgoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zdWJtZW51U2VydmljZS5tb2RlID09PSAnaG9yaXpvbnRhbCcgJiYgdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgdGhpcy50cmlnZ2VyV2lkdGggPSB0aGlzLmNka092ZXJsYXlPcmlnaW4ubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uUG9zaXRpb25DaGFuZ2UocG9zaXRpb246IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSk6IHZvaWQge1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgdGhpcy5wbGFjZW1lbnQgPSBnZXRQbGFjZW1lbnROYW1lKHBvc2l0aW9uKSE7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcHJlZml4TmFtZSA9IHRoaXMubWVudVNlcnZpY2UuaXNJbkRyb3BEb3duID8gJ2FudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUnIDogJ2FudC1tZW51LXN1Ym1lbnUnO1xyXG4gICAgdGhpcy51cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwge1xyXG4gICAgICBbYCR7cHJlZml4TmFtZX1gXTogdHJ1ZSxcclxuICAgICAgW2Ake3ByZWZpeE5hbWV9LWRpc2FibGVkYF06IHRoaXMuZGlzYWJsZWQsXHJcbiAgICAgIFtgJHtwcmVmaXhOYW1lfS1vcGVuYF06IHRoaXMub3BlbixcclxuICAgICAgW2Ake3ByZWZpeE5hbWV9LXNlbGVjdGVkYF06IHRoaXMuaXNDaGlsZE1lbnVTZWxlY3RlZCxcclxuICAgICAgW2Ake3ByZWZpeE5hbWV9LSR7dGhpcy5zdWJtZW51U2VydmljZS5tb2RlfWBdOiB0cnVlLFxyXG4gICAgICBbYCR7cHJlZml4TmFtZX0tYWN0aXZlYF06IHRoaXMuaXNNb3VzZUhvdmVyICYmICF0aGlzLmRpc2FibGVkXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHVibGljIG1lbnVTZXJ2aWNlOiBOek1lbnVCYXNlU2VydmljZSxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHB1YmxpYyBzdWJtZW51U2VydmljZTogQ21hY3NTdWJtZW51U2VydmljZSxcclxuICAgIHByaXZhdGUgdXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgY29tYmluZUxhdGVzdCh0aGlzLnN1Ym1lbnVTZXJ2aWNlLm1vZGUkLCB0aGlzLnN1Ym1lbnVTZXJ2aWNlLm9wZW4kKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgY29uc3QgbW9kZSA9IGRhdGFbMF07XHJcbiAgICAgICAgY29uc3Qgb3BlbiA9IGRhdGFbMV07XHJcbiAgICAgICAgaWYgKG9wZW4gJiYgbW9kZSA9PT0gJ2lubGluZScpIHtcclxuICAgICAgICAgIHRoaXMuZXhwYW5kU3RhdGUgPSAnZXhwYW5kZWQnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3BlbiAmJiBtb2RlID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgIHRoaXMuZXhwYW5kU3RhdGUgPSAnYm90dG9tJztcclxuICAgICAgICB9IGVsc2UgaWYgKG9wZW4gJiYgbW9kZSA9PT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICAgICAgdGhpcy5leHBhbmRTdGF0ZSA9ICdhY3RpdmUnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmV4cGFuZFN0YXRlID0gJ2NvbGxhcHNlZCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub3ZlcmxheVBvc2l0aW9ucyA9XHJcbiAgICAgICAgICBtb2RlID09PSAnaG9yaXpvbnRhbCcgPyBbUE9TSVRJT05fTUFQLmJvdHRvbUxlZnRdIDogW1BPU0lUSU9OX01BUC5yaWdodFRvcCwgUE9TSVRJT05fTUFQLmxlZnRUb3BdO1xyXG4gICAgICAgIGlmIChvcGVuICE9PSB0aGlzLm9wZW4pIHtcclxuICAgICAgICAgIHRoaXMub3BlbiA9IG9wZW47XHJcbiAgICAgICAgICB0aGlzLm9wZW5DaGFuZ2UuZW1pdCh0aGlzLm9wZW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICAgICAgdGhpcy5zZXRUcmlnZ2VyV2lkdGgoKTtcclxuICAgICAgfSk7XHJcbiAgICB0aGlzLnN1Ym1lbnVTZXJ2aWNlLm1lbnVPcGVuJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkYXRhOiBib29sZWFuKSA9PiB7XHJcbiAgICAgIHRoaXMubWVudVNlcnZpY2UubWVudU9wZW4kLm5leHQoZGF0YSk7XHJcbiAgICB9KTtcclxuICAgIG1lcmdlKFxyXG4gICAgICB0aGlzLm1lbnVTZXJ2aWNlLm1vZGUkLFxyXG4gICAgICB0aGlzLm1lbnVTZXJ2aWNlLmlubGluZUluZGVudCQsXHJcbiAgICAgIHRoaXMuc3VibWVudVNlcnZpY2UubGV2ZWwkLFxyXG4gICAgICB0aGlzLnN1Ym1lbnVTZXJ2aWNlLm9wZW4kLFxyXG4gICAgICB0aGlzLnN1Ym1lbnVTZXJ2aWNlLm1vZGUkXHJcbiAgICApXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRUcmlnZ2VyV2lkdGgoKTtcclxuICAgIHRoaXMubGlzdE9mQ21hY3NNZW51SXRlbURpcmVjdGl2ZS5jaGFuZ2VzXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHN0YXJ0V2l0aCh0cnVlKSxcclxuICAgICAgICBmbGF0TWFwKCgpID0+XHJcbiAgICAgICAgICBtZXJnZSh0aGlzLmxpc3RPZkNtYWNzTWVudUl0ZW1EaXJlY3RpdmUuY2hhbmdlcywgLi4udGhpcy5saXN0T2ZDbWFjc01lbnVJdGVtRGlyZWN0aXZlLm1hcChtZW51ID0+IG1lbnUuc2VsZWN0ZWQkKSlcclxuICAgICAgICApLFxyXG4gICAgICAgIG1hcCgoKSA9PiB0aGlzLmxpc3RPZkNtYWNzTWVudUl0ZW1EaXJlY3RpdmUuc29tZShlID0+IGUuc2VsZWN0ZWQpKSxcclxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKHNlbGVjdGVkID0+IHtcclxuICAgICAgICB0aGlzLmlzQ2hpbGRNZW51U2VsZWN0ZWQgPSBzZWxlY3RlZDtcclxuICAgICAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMub3Blbikge1xyXG4gICAgICB0aGlzLnN1Ym1lbnVTZXJ2aWNlLnNldE9wZW5TdGF0ZSh0aGlzLm9wZW4pO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMuZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5zdWJtZW51U2VydmljZS5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XHJcbiAgICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==