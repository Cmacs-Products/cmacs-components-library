/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean, NzUpdateHostClassService } from 'ng-zorro-antd/core';
export class CmacsDividerComponent {
    /**
     * @param {?} elementRef
     * @param {?} nzUpdateHostClassService
     */
    constructor(elementRef, nzUpdateHostClassService) {
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
    setClass() {
        /** @type {?} */
        const orientationPrefix = this.orientation.length > 0 ? '-' + this.orientation : this.orientation;
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, {
            ['ant-divider']: true,
            [`ant-divider-${this.type}`]: true,
            [`ant-divider-with-text${orientationPrefix}`]: this.text,
            [`ant-divider-dashed`]: this.dashed
        });
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.setClass();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClass();
    }
}
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
CmacsDividerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NzUpdateHostClassService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZGl2aWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLWRpdmlkZXIvY21hY3MtZGl2aWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUlMLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsWUFBWSxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFZNUUsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7SUFnQmhDLFlBQW1CLFVBQXNCLEVBQVUsd0JBQWtEO1FBQWxGLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBZDVGLFNBQUksR0FBOEIsVUFBVSxDQUFDO1FBQzdDLGdCQUFXLEdBQTBCLEVBQUUsQ0FBQztRQUN4QixXQUFNLEdBQUcsS0FBSyxDQUFDO0lBWWlFLENBQUM7Ozs7O0lBVmxHLFFBQVE7O2NBQ1IsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVc7UUFDakcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTtZQUMzRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUk7WUFDckIsQ0FBQyxlQUFlLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUk7WUFDbEMsQ0FBQyx3QkFBd0IsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ3hELENBQUMsb0JBQW9CLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTTtTQUNwQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBSUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7WUFsQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUUsY0FBYztnQkFDeEIsa0tBQTZDO2dCQUU3QyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDckMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7OztZQW5CQyxVQUFVO1lBUVcsd0JBQXdCOzs7bUJBYTVDLEtBQUs7bUJBQ0wsS0FBSzswQkFDTCxLQUFLO3FCQUNMLEtBQUs7O0FBQW1CO0lBQWYsWUFBWSxFQUFFOztxREFBZ0I7OztJQUh4QyxxQ0FBMEM7O0lBQzFDLHFDQUFzRDs7SUFDdEQsNENBQWlEOztJQUNqRCx1Q0FBd0M7O0lBWTVCLDJDQUE2Qjs7Ozs7SUFBRSx5REFBMEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtZGl2aWRlcicsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0RpdmlkZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1kaXZpZGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1kaXZpZGVyLmNvbXBvbmVudC5jc3MnXSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzRGl2aWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcclxuICBASW5wdXQoKSB0ZXh0OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSB0eXBlOiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnID0gJ3ZlcnRpY2FsJztcclxuICBASW5wdXQoKSBvcmllbnRhdGlvbjogJ2xlZnQnIHwgJ3JpZ2h0JyB8ICcnID0gJyc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRhc2hlZCA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIHNldENsYXNzKCk6IHZvaWQge1xyXG4gICAgY29uc3Qgb3JpZW50YXRpb25QcmVmaXggPSB0aGlzLm9yaWVudGF0aW9uLmxlbmd0aCA+IDAgPyAnLScgKyB0aGlzLm9yaWVudGF0aW9uIDogdGhpcy5vcmllbnRhdGlvbjtcclxuICAgIHRoaXMubnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwge1xyXG4gICAgICBbJ2FudC1kaXZpZGVyJ106IHRydWUsXHJcbiAgICAgIFtgYW50LWRpdmlkZXItJHt0aGlzLnR5cGV9YF06IHRydWUsXHJcbiAgICAgIFtgYW50LWRpdmlkZXItd2l0aC10ZXh0JHtvcmllbnRhdGlvblByZWZpeH1gXTogdGhpcy50ZXh0LFxyXG4gICAgICBbYGFudC1kaXZpZGVyLWRhc2hlZGBdOiB0aGlzLmRhc2hlZFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzcygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldENsYXNzKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==