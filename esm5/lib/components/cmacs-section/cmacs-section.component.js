/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
var CmacsSectionComponent = /** @class */ (function () {
    function CmacsSectionComponent() {
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
    CmacsSectionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    CmacsSectionComponent.prototype.collapseSection = /**
     * @return {?}
     */
    function () {
        this.collapsed = !this.collapsed;
        this.collapsedIcon = this.collapsed ? 'iconArrowSmall-Chevron-Right' : 'iconArrowSmall-Chevron-Down';
    };
    CmacsSectionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-section',
                    template: "<div nz-col [nzSpan]=\"widgetSpan\" class=\"widget-container\">\r\n    <div nz-row class=\"widget-container-bar\" nzType=\"flex\" nzJustify=\"space-between\">\r\n      <div nz-col>\r\n        <div nz-row class=\"widget-container-bar-title\">\r\n          <i *ngIf=\"titleIcon\" [ngClass]=\"titleIcon\"></i><span>{{title}}</span>\r\n        </div>\r\n      </div>\r\n      <div nz-col>\r\n        <div nz-row *ngIf=\"extra\" class=\"widget-container-bar-btns\">\r\n          <ng-container *cmacsStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\r\n          <button cmacs-button class=\"log-action-btn\"\r\n                  (click)=\"collapseSection()\"\r\n                  [action]=\"true\"\r\n                  ghost>\r\n            <i [ngClass]=\"collapsedIcon\"></i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"!collapsed\" class=\"widget-container-content\" >\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n",
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".widget-container-bar-title i{margin-right:8px}.widget-container-bar-title span{color:#3b3f46;font-weight:600;line-height:1.67;letter-spacing:.03em}.widget-container{border-top:3px solid #00cda1;padding:23px 40px;margin-top:15px;margin-bottom:15px;background-color:#f6f7fb;box-shadow:0 3px 7px -3px rgba(5,6,6,.18)}.widget-container-content{overflow-x:auto;overflow-y:hidden}"]
                }] }
    ];
    /** @nocollapse */
    CmacsSectionComponent.ctorParameters = function () { return []; };
    CmacsSectionComponent.propDecorators = {
        extra: [{ type: Input }],
        widgetSpan: [{ type: Input }],
        title: [{ type: Input }],
        titleIcon: [{ type: Input }],
        showCollapse: [{ type: Input }]
    };
    return CmacsSectionComponent;
}());
export { CmacsSectionComponent };
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
    CmacsSectionComponent.prototype.collapsed;
    /** @type {?} */
    CmacsSectionComponent.prototype.collapsedIcon;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2VjdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXNlY3Rpb24vY21hY3Mtc2VjdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVUsS0FBSyxFQUF3Qix1QkFBdUIsRUFBYyxNQUFNLGVBQWUsQ0FBQztBQUVuSDtJQW9CRTtRQVRTLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUVYLGlCQUFZLEdBQUcsSUFBSSxDQUFDOztRQUc3QixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGtCQUFhLEdBQUcsNkJBQTZCLENBQUM7SUFFOUIsQ0FBQzs7OztJQUVqQix3Q0FBUTs7O0lBQVIsY0FBYSxDQUFDOzs7O0lBRWQsK0NBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUMsNkJBQTZCLENBQUM7SUFDdkcsQ0FBQzs7Z0JBM0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIscStCQUEyQztvQkFFM0MsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7Ozs7d0JBSUUsS0FBSzs2QkFDTCxLQUFLO3dCQUNMLEtBQUs7NEJBQ0wsS0FBSzsrQkFDTCxLQUFLOztJQWNSLDRCQUFDO0NBQUEsQUE1QkQsSUE0QkM7U0FwQlkscUJBQXFCOzs7SUFFaEMsc0NBQTJDOztJQUMzQywyQ0FBMkI7O0lBQzNCLHNDQUFvQjs7SUFDcEIsMENBQTRCOztJQUM1Qiw2Q0FBNkI7O0lBRzdCLDBDQUFrQjs7SUFDbEIsOENBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVGVtcGxhdGVSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1zZWN0aW9uJyxcclxuICB0ZW1wbGF0ZVVybDogJ2NtYWNzLXNlY3Rpb24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydjbWFjcy1zZWN0aW9uLmNvbXBvbmVudC5jc3MnXSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENtYWNzU2VjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGV4dHJhOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSB3aWRnZXRTcGFuID0gJzI0JztcclxuICBASW5wdXQoKSB0aXRsZSA9ICcnO1xyXG4gIEBJbnB1dCgpIHRpdGxlSWNvbiE6IHN0cmluZztcclxuICBASW5wdXQoKSBzaG93Q29sbGFwc2UgPSB0cnVlO1xyXG5cclxuICAvLyBjb2xsYXBzZVxyXG4gIGNvbGxhcHNlZCA9IGZhbHNlO1xyXG4gIGNvbGxhcHNlZEljb24gPSAnaWNvbkFycm93U21hbGwtQ2hldnJvbi1Eb3duJztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7IH1cclxuXHJcbiAgY29sbGFwc2VTZWN0aW9uKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb2xsYXBzZWQgPSAhdGhpcy5jb2xsYXBzZWQ7XHJcbiAgICB0aGlzLmNvbGxhcHNlZEljb24gPSB0aGlzLmNvbGxhcHNlZCA/ICdpY29uQXJyb3dTbWFsbC1DaGV2cm9uLVJpZ2h0JyA6ICdpY29uQXJyb3dTbWFsbC1DaGV2cm9uLURvd24nO1xyXG4gIH1cclxufVxyXG4iXX0=