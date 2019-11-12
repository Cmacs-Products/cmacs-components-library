/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
var CmacsSectionComponent = /** @class */ (function () {
    function CmacsSectionComponent() {
        this.widgetSpan = '24';
        this.title = '';
        this.showCollapse = true;
        this.collapsed = false;
        this.validate = false;
        this.onbeforecollapse = new EventEmitter();
        this.oncollapse = new EventEmitter();
        this.onbeforeexpand = new EventEmitter();
        this.onexpand = new EventEmitter();
    }
    /**
     * @return {?}
     */
    CmacsSectionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    CmacsSectionComponent.prototype.collapseSection = /**
     * @return {?}
     */
    function () {
        if (!this.validate) {
            this.collapsed = !this.collapsed;
            this.triggerCollapseEvents(false);
        }
        else {
            this.triggerCollapseEvents(true);
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsSectionComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.collapsed && changes.collapsed.previousValue !== undefined) {
            this.triggerCollapseEvents(false);
        }
    };
    /**
     * @param {?} before
     * @return {?}
     */
    CmacsSectionComponent.prototype.triggerCollapseEvents = /**
     * @param {?} before
     * @return {?}
     */
    function (before) {
        if (before) {
            if (this.collapsed) {
                this.onbeforeexpand.emit();
            }
            else {
                this.onbeforecollapse.emit();
            }
        }
        else if (this.collapsed) {
            this.oncollapse.emit();
        }
        else {
            this.onexpand.emit();
        }
    };
    CmacsSectionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-section',
                    template: "<div nz-col [nzSpan]=\"widgetSpan\" class=\"widget-container\">\r\n    <div nz-row class=\"widget-container-bar\" nzType=\"flex\" nzJustify=\"space-between\">\r\n      <div nz-col>\r\n        <div nz-row class=\"widget-container-bar-title\">\r\n          <i *ngIf=\"titleIcon\" [ngClass]=\"titleIcon\"></i><span>{{title}}</span>\r\n        </div>\r\n      </div>\r\n      <div nz-col>\r\n        <div nz-row *ngIf=\"extra\" class=\"widget-container-bar-btns\">\r\n          <ng-container *ngTemplateOutlet=\"extra; context: { data: extraData}\">{{ extra }}</ng-container>\r\n          <button cmacs-button class=\"log-action-btn\"\r\n                  (click)=\"collapseSection()\"\r\n                  [action]=\"true\"\r\n                  ghost>\r\n            <i [class.iconArrowSmall-Chevron-Right]=\"collapsed\"></i>\r\n            <i [class.iconArrowSmall-Chevron-Down]=\"!collapsed\"></i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"!collapsed\" class=\"widget-container-content\" >\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n",
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
        showCollapse: [{ type: Input }],
        extraData: [{ type: Input }],
        collapsed: [{ type: Input }],
        validate: [{ type: Input }],
        onbeforecollapse: [{ type: Output }],
        oncollapse: [{ type: Output }],
        onbeforeexpand: [{ type: Output }],
        onexpand: [{ type: Output }]
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
    CmacsSectionComponent.prototype.extraData;
    /** @type {?} */
    CmacsSectionComponent.prototype.collapsed;
    /** @type {?} */
    CmacsSectionComponent.prototype.validate;
    /** @type {?} */
    CmacsSectionComponent.prototype.onbeforecollapse;
    /** @type {?} */
    CmacsSectionComponent.prototype.oncollapse;
    /** @type {?} */
    CmacsSectionComponent.prototype.onbeforeexpand;
    /** @type {?} */
    CmacsSectionComponent.prototype.onexpand;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2VjdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXNlY3Rpb24vY21hY3Mtc2VjdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osdUJBQXVCLEVBSXhCLE1BQU0sZUFBZSxDQUFDO0FBRXZCO0lBd0JFO1FBYlMsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBRVgsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFFcEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWhCLHFCQUFnQixHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzlELGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN4RCxtQkFBYyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzVELGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUVoRCxDQUFDOzs7O0lBRWpCLHdDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFFRCwrQ0FBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNqQyxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkM7YUFBTTtZQUNMLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNsQztJQUNILENBQUM7Ozs7O0lBRUQsMkNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLFNBQVMsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLGFBQWEsS0FBSyxTQUFTLEVBQUU7WUFDdEUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25DO0lBRUgsQ0FBQzs7Ozs7SUFFRCxxREFBcUI7Ozs7SUFBckIsVUFBc0IsTUFBZTtRQUNuQyxJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUM1QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDOUI7U0FDRjthQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUN6QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3hCO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3RCO0lBR0gsQ0FBQzs7Z0JBM0RGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsMGxDQUEyQztvQkFFM0MsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7Ozs7d0JBSUUsS0FBSzs2QkFDTCxLQUFLO3dCQUNMLEtBQUs7NEJBQ0wsS0FBSzsrQkFDTCxLQUFLOzRCQUNMLEtBQUs7NEJBQ0wsS0FBSzsyQkFDTCxLQUFLO21DQUVMLE1BQU07NkJBQ04sTUFBTTtpQ0FDTixNQUFNOzJCQUNOLE1BQU07O0lBc0NULDRCQUFDO0NBQUEsQUE1REQsSUE0REM7U0FwRFkscUJBQXFCOzs7SUFFaEMsc0NBQTJDOztJQUMzQywyQ0FBMkI7O0lBQzNCLHNDQUFvQjs7SUFDcEIsMENBQTRCOztJQUM1Qiw2Q0FBNkI7O0lBQzdCLDBDQUF5Qjs7SUFDekIsMENBQTJCOztJQUMzQix5Q0FBMEI7O0lBRTFCLGlEQUF3RTs7SUFDeEUsMkNBQWtFOztJQUNsRSwrQ0FBc0U7O0lBQ3RFLHlDQUFnRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBTaW1wbGVDaGFuZ2VzXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLXNlY3Rpb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnY21hY3Mtc2VjdGlvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2NtYWNzLXNlY3Rpb24uY29tcG9uZW50LmNzcyddLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ21hY3NTZWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG5cclxuICBASW5wdXQoKSBleHRyYTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgd2lkZ2V0U3BhbiA9ICcyNCc7XHJcbiAgQElucHV0KCkgdGl0bGUgPSAnJztcclxuICBASW5wdXQoKSB0aXRsZUljb24hOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc2hvd0NvbGxhcHNlID0gdHJ1ZTtcclxuICBASW5wdXQoKSBleHRyYURhdGEhOiBhbnk7XHJcbiAgQElucHV0KCkgY29sbGFwc2VkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgdmFsaWRhdGUgPSBmYWxzZTtcclxuXHJcbiAgQE91dHB1dCgpIG9uYmVmb3JlY29sbGFwc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uY29sbGFwc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uYmVmb3JlZXhwYW5kOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbmV4cGFuZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBjb2xsYXBzZVNlY3Rpb24oKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMudmFsaWRhdGUpIHtcclxuICAgICAgdGhpcy5jb2xsYXBzZWQgPSAhdGhpcy5jb2xsYXBzZWQ7XHJcbiAgICAgIHRoaXMudHJpZ2dlckNvbGxhcHNlRXZlbnRzKGZhbHNlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudHJpZ2dlckNvbGxhcHNlRXZlbnRzKHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMuY29sbGFwc2VkICYmIGNoYW5nZXMuY29sbGFwc2VkLnByZXZpb3VzVmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnRyaWdnZXJDb2xsYXBzZUV2ZW50cyhmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgdHJpZ2dlckNvbGxhcHNlRXZlbnRzKGJlZm9yZTogYm9vbGVhbikge1xyXG4gICAgaWYgKGJlZm9yZSkge1xyXG4gICAgICBpZiAodGhpcy5jb2xsYXBzZWQpIHtcclxuICAgICAgICB0aGlzLm9uYmVmb3JlZXhwYW5kLmVtaXQoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm9uYmVmb3JlY29sbGFwc2UuZW1pdCgpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29sbGFwc2VkKSB7XHJcbiAgICAgIHRoaXMub25jb2xsYXBzZS5lbWl0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm9uZXhwYW5kLmVtaXQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gIH1cclxufVxyXG4iXX0=