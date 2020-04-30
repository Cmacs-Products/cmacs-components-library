/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean, NzUpdateHostClassService } from 'ng-zorro-antd/core';
var CmacsDividerComponent = /** @class */ (function () {
    function CmacsDividerComponent(elementRef, nzUpdateHostClassService) {
        this.elementRef = elementRef;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.type = 'vertical';
        this.orientation = '';
        this.dashed = false;
    }
    /**
     * @private
     * @return {?}
     */
    CmacsDividerComponent.prototype.setClass = /**
     * @private
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var orientationPrefix = this.orientation.length > 0 ? '-' + this.orientation : this.orientation;
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, (_a = {},
            _a['ant-divider'] = true,
            _a["ant-divider-" + this.type] = true,
            _a["ant-divider-with-text" + orientationPrefix] = this.text,
            _a["ant-divider-dashed"] = this.dashed,
            _a));
    };
    /**
     * @return {?}
     */
    CmacsDividerComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.setClass();
    };
    /**
     * @return {?}
     */
    CmacsDividerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClass();
    };
    CmacsDividerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-divider',
                    exportAs: 'cmacsDivider',
                    template: "<span *ngIf=\"text\" class=\"ant-divider-inner-text\">\r\n  <ng-container *cmacsStringTemplateOutlet=\"text\">{{ text }}</ng-container>\r\n</span>\r\n",
                    preserveWhitespaces: false,
                    providers: [NzUpdateHostClassService],
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".ant-divider-vertical{height:1em!important}"]
                }] }
    ];
    /** @nocollapse */
    CmacsDividerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NzUpdateHostClassService }
    ]; };
    CmacsDividerComponent.propDecorators = {
        text: [{ type: Input }],
        type: [{ type: Input }],
        orientation: [{ type: Input }],
        dashed: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsDividerComponent.prototype, "dashed", void 0);
    return CmacsDividerComponent;
}());
export { CmacsDividerComponent };
if (false) {
    /** @type {?} */
    CmacsDividerComponent.prototype.text;
    /** @type {?} */
    CmacsDividerComponent.prototype.type;
    /** @type {?} */
    CmacsDividerComponent.prototype.orientation;
    /** @type {?} */
    CmacsDividerComponent.prototype.dashed;
    /** @type {?} */
    CmacsDividerComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    CmacsDividerComponent.prototype.nzUpdateHostClassService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZGl2aWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLWRpdmlkZXIvY21hY3MtZGl2aWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUlMLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsWUFBWSxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFNUU7SUEwQkUsK0JBQW1CLFVBQXNCLEVBQVUsd0JBQWtEO1FBQWxGLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBZDVGLFNBQUksR0FBOEIsVUFBVSxDQUFDO1FBQzdDLGdCQUFXLEdBQTBCLEVBQUUsQ0FBQztRQUN4QixXQUFNLEdBQUcsS0FBSyxDQUFDO0lBWWlFLENBQUM7Ozs7O0lBVmxHLHdDQUFROzs7O0lBQWhCOzs7WUFDUSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVztRQUNqRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYTtZQUN6RSxHQUFDLGFBQWEsSUFBRyxJQUFJO1lBQ3JCLEdBQUMsaUJBQWUsSUFBSSxDQUFDLElBQU0sSUFBRyxJQUFJO1lBQ2xDLEdBQUMsMEJBQXdCLGlCQUFtQixJQUFHLElBQUksQ0FBQyxJQUFJO1lBQ3hELEdBQUMsb0JBQW9CLElBQUcsSUFBSSxDQUFDLE1BQU07Z0JBQ25DLENBQUM7SUFDTCxDQUFDOzs7O0lBSUQsMkNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCx3Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7Z0JBbENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLGtLQUE2QztvQkFFN0MsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7b0JBQ3JDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOzs7O2dCQW5CQyxVQUFVO2dCQVFXLHdCQUF3Qjs7O3VCQWE1QyxLQUFLO3VCQUNMLEtBQUs7OEJBQ0wsS0FBSzt5QkFDTCxLQUFLOztJQUFtQjtRQUFmLFlBQVksRUFBRTs7eURBQWdCO0lBcUIxQyw0QkFBQztDQUFBLEFBbkNELElBbUNDO1NBekJZLHFCQUFxQjs7O0lBQ2hDLHFDQUEwQzs7SUFDMUMscUNBQXNEOztJQUN0RCw0Q0FBaUQ7O0lBQ2pELHVDQUF3Qzs7SUFZNUIsMkNBQTZCOzs7OztJQUFFLHlEQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uSW5pdCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1kaXZpZGVyJyxcclxuICBleHBvcnRBczogJ2NtYWNzRGl2aWRlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWRpdmlkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWRpdmlkZXIuY29tcG9uZW50LmNzcyddLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NEaXZpZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHRleHQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIHR5cGU6ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcgPSAndmVydGljYWwnO1xyXG4gIEBJbnB1dCgpIG9yaWVudGF0aW9uOiAnbGVmdCcgfCAncmlnaHQnIHwgJycgPSAnJztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGFzaGVkID0gZmFsc2U7XHJcblxyXG4gIHByaXZhdGUgc2V0Q2xhc3MoKTogdm9pZCB7XHJcbiAgICBjb25zdCBvcmllbnRhdGlvblByZWZpeCA9IHRoaXMub3JpZW50YXRpb24ubGVuZ3RoID4gMCA/ICctJyArIHRoaXMub3JpZW50YXRpb24gOiB0aGlzLm9yaWVudGF0aW9uO1xyXG4gICAgdGhpcy5uelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB7XHJcbiAgICAgIFsnYW50LWRpdmlkZXInXTogdHJ1ZSxcclxuICAgICAgW2BhbnQtZGl2aWRlci0ke3RoaXMudHlwZX1gXTogdHJ1ZSxcclxuICAgICAgW2BhbnQtZGl2aWRlci13aXRoLXRleHQke29yaWVudGF0aW9uUHJlZml4fWBdOiB0aGlzLnRleHQsXHJcbiAgICAgIFtgYW50LWRpdmlkZXItZGFzaGVkYF06IHRoaXMuZGFzaGVkXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldENsYXNzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0Q2xhc3MoKTtcclxuICB9XHJcbn1cclxuIl19