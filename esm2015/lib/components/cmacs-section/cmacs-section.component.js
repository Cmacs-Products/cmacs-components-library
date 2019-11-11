/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
export class CmacsSectionComponent {
    constructor() {
        this.widgetSpan = '24';
        this.title = '';
        this.showCollapse = true;
        // collapse
        this.collapsed = false;
        this.collapsedIcon = 'iconArrowSmall-Chevron-Down';
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    collapseSection() {
        this.collapsed = !this.collapsed;
        this.collapsedIcon = this.collapsed ? 'iconArrowSmall-Chevron-Right' : 'iconArrowSmall-Chevron-Down';
    }
}
CmacsSectionComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmacs-section',
                template: "<div nz-col [nzSpan]=\"widgetSpan\" class=\"widget-container\">\r\n    <div nz-row class=\"widget-container-bar\" nzType=\"flex\" nzJustify=\"space-between\">\r\n      <div nz-col>\r\n        <div nz-row class=\"widget-container-bar-title\">\r\n          <i *ngIf=\"titleIcon\" [ngClass]=\"titleIcon\"></i><span>{{title}}</span>\r\n        </div>\r\n      </div>\r\n      <div nz-col>\r\n        <div nz-row *ngIf=\"extra\" class=\"widget-container-bar-btns\">\r\n          <ng-container *ngTemplateOutlet=\"extra; context: { data: extraData}\">{{ extra }}</ng-container>\r\n          <button cmacs-button class=\"log-action-btn\"\r\n                  (click)=\"collapseSection()\"\r\n                  [action]=\"true\"\r\n                  ghost>\r\n            <i [ngClass]=\"collapsedIcon\"></i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"!collapsed\" class=\"widget-container-content\" >\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n",
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".widget-container-bar-title i{margin-right:8px}.widget-container-bar-title span{color:#3b3f46;font-weight:600;line-height:1.67;letter-spacing:.03em}.widget-container{border-top:3px solid #00cda1;padding:23px 40px;margin-top:15px;margin-bottom:15px;background-color:#f6f7fb;box-shadow:0 3px 7px -3px rgba(5,6,6,.18)}.widget-container-content{overflow-x:auto;overflow-y:hidden}"]
            }] }
];
/** @nocollapse */
CmacsSectionComponent.ctorParameters = () => [];
CmacsSectionComponent.propDecorators = {
    extra: [{ type: Input }],
    widgetSpan: [{ type: Input }],
    title: [{ type: Input }],
    titleIcon: [{ type: Input }],
    showCollapse: [{ type: Input }],
    extraData: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CmacsSectionComponent.prototype.extra;
    /** @type {?} */
    CmacsSectionComponent.prototype.widgetSpan;
    /** @type {?} */
    CmacsSectionComponent.prototype.title;
    /** @type {?} */
    CmacsSectionComponent.prototype.titleIcon;
    /** @type {?} */
    CmacsSectionComponent.prototype.showCollapse;
    /** @type {?} */
    CmacsSectionComponent.prototype.extraData;
    /** @type {?} */
    CmacsSectionComponent.prototype.collapsed;
    /** @type {?} */
    CmacsSectionComponent.prototype.collapsedIcon;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2VjdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXNlY3Rpb24vY21hY3Mtc2VjdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVUsS0FBSyxFQUF3Qix1QkFBdUIsRUFBYyxNQUFNLGVBQWUsQ0FBQztBQVVuSCxNQUFNLE9BQU8scUJBQXFCO0lBYWhDO1FBVlMsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBRVgsaUJBQVksR0FBRyxJQUFJLENBQUM7O1FBSTdCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsa0JBQWEsR0FBRyw2QkFBNkIsQ0FBQztJQUU5QixDQUFDOzs7O0lBRWpCLFFBQVEsS0FBSyxDQUFDOzs7O0lBRWQsZUFBZTtRQUNiLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFDLDZCQUE2QixDQUFDO0lBQ3ZHLENBQUM7OztZQTVCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLHkvQkFBMkM7Z0JBRTNDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7Ozs7b0JBSUUsS0FBSzt5QkFDTCxLQUFLO29CQUNMLEtBQUs7d0JBQ0wsS0FBSzsyQkFDTCxLQUFLO3dCQUNMLEtBQUs7Ozs7SUFMTixzQ0FBMkM7O0lBQzNDLDJDQUEyQjs7SUFDM0Isc0NBQW9COztJQUNwQiwwQ0FBNEI7O0lBQzVCLDZDQUE2Qjs7SUFDN0IsMENBQXlCOztJQUd6QiwwQ0FBa0I7O0lBQ2xCLDhDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFRlbXBsYXRlUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3Mtc2VjdGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICdjbWFjcy1zZWN0aW9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnY21hY3Mtc2VjdGlvbi5jb21wb25lbnQuY3NzJ10sXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1NlY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBleHRyYTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgd2lkZ2V0U3BhbiA9ICcyNCc7XHJcbiAgQElucHV0KCkgdGl0bGUgPSAnJztcclxuICBASW5wdXQoKSB0aXRsZUljb24hOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc2hvd0NvbGxhcHNlID0gdHJ1ZTtcclxuICBASW5wdXQoKSBleHRyYURhdGEhOiBhbnk7XHJcblxyXG4gIC8vIGNvbGxhcHNlXHJcbiAgY29sbGFwc2VkID0gZmFsc2U7XHJcbiAgY29sbGFwc2VkSWNvbiA9ICdpY29uQXJyb3dTbWFsbC1DaGV2cm9uLURvd24nO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgfVxyXG5cclxuICBjb2xsYXBzZVNlY3Rpb24oKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbGxhcHNlZCA9ICF0aGlzLmNvbGxhcHNlZDtcclxuICAgIHRoaXMuY29sbGFwc2VkSWNvbiA9IHRoaXMuY29sbGFwc2VkID8gJ2ljb25BcnJvd1NtYWxsLUNoZXZyb24tUmlnaHQnIDogJ2ljb25BcnJvd1NtYWxsLUNoZXZyb24tRG93bic7XHJcbiAgfVxyXG59XHJcbiJdfQ==