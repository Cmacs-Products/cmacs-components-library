/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Host, Input, Optional, Renderer2, ViewEncapsulation } from '@angular/core';
import { toBoolean, InputBoolean, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { NzColDirective, NzRowDirective } from 'ng-zorro-antd/grid';
import { CmacsFormItemComponent } from './cmacs-form-item.component';
export class CmacsFormLabelComponent extends NzColDirective {
    /**
     * @param {?} nzUpdateHostClassService
     * @param {?} elementRef
     * @param {?} cmacsFormItemComponent
     * @param {?} nzRowDirective
     * @param {?} renderer
     * @param {?} cdr
     */
    constructor(nzUpdateHostClassService, elementRef, cmacsFormItemComponent, nzRowDirective, renderer, cdr) {
        super(nzUpdateHostClassService, elementRef, cmacsFormItemComponent || nzRowDirective, renderer);
        this.cdr = cdr;
        this.cmacsRequired = false;
        this.defaultNoColon = false;
        this.noColon = 'default';
        renderer.addClass(elementRef.nativeElement, 'ant-form-item-label');
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set cmacsNoColon(value) {
        this.noColon = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get cmacsNoColon() {
        return !!this.noColon;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setDefaultNoColon(value) {
        this.defaultNoColon = toBoolean(value);
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        super.ngAfterViewInit();
    }
}
CmacsFormLabelComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmacs-form-label',
                exportAs: 'cmacsFormLabel',
                providers: [NzUpdateHostClassService],
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "<label [attr.for]=\"cmacsFor\"\r\n  [class.ant-form-item-no-colon]=\"noColon === 'default' ? defaultNoColon : cmacsNoColon\"\r\n  [class.ant-form-item-required]=\"cmacsRequired\">\r\n  <ng-content></ng-content>\r\n</label>\r\n"
            }] }
];
/** @nocollapse */
CmacsFormLabelComponent.ctorParameters = () => [
    { type: NzUpdateHostClassService },
    { type: ElementRef },
    { type: CmacsFormItemComponent, decorators: [{ type: Optional }, { type: Host }] },
    { type: NzRowDirective, decorators: [{ type: Optional }, { type: Host }] },
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
CmacsFormLabelComponent.propDecorators = {
    cmacsFor: [{ type: Input }],
    cmacsRequired: [{ type: Input }],
    cmacsNoColon: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsFormLabelComponent.prototype, "cmacsRequired", void 0);
if (false) {
    /** @type {?} */
    CmacsFormLabelComponent.prototype.cmacsFor;
    /** @type {?} */
    CmacsFormLabelComponent.prototype.cmacsRequired;
    /** @type {?} */
    CmacsFormLabelComponent.prototype.defaultNoColon;
    /** @type {?} */
    CmacsFormLabelComponent.prototype.noColon;
    /**
     * @type {?}
     * @private
     */
    CmacsFormLabelComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZm9ybS1sYWJlbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLWZvcm0vY21hY3MtZm9ybS1sYWJlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLElBQUksRUFDSixLQUFLLEVBRUwsUUFBUSxFQUNSLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RixPQUFPLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXBFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBV3JFLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxjQUFjOzs7Ozs7Ozs7SUFjekQsWUFDRSx3QkFBa0QsRUFDbEQsVUFBc0IsRUFDRixzQkFBOEMsRUFDOUMsY0FBOEIsRUFDbEQsUUFBbUIsRUFDWCxHQUFzQjtRQUU5QixLQUFLLENBQUMsd0JBQXdCLEVBQUUsVUFBVSxFQUFFLHNCQUFzQixJQUFJLGNBQWMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUZ4RixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWxCUCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQVMvQyxtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUNoQyxZQUFPLEdBQXFCLFNBQVMsQ0FBQztRQVdwQyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUscUJBQXFCLENBQUMsQ0FBQztJQUNyRSxDQUFDOzs7OztJQXJCRCxJQUNJLFlBQVksQ0FBQyxLQUFjO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFDRCxJQUFJLFlBQVk7UUFDZCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBaUJELGlCQUFpQixDQUFDLEtBQWM7UUFDOUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsV0FBVztRQUNULEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7WUE5Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2dCQUNyQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLDhPQUFnRDthQUNqRDs7OztZQWJpQyx3QkFBd0I7WUFUeEQsVUFBVTtZQVlILHNCQUFzQix1QkE0QjFCLFFBQVEsWUFBSSxJQUFJO1lBOUJJLGNBQWMsdUJBK0JsQyxRQUFRLFlBQUksSUFBSTtZQXBDbkIsU0FBUztZQVBULGlCQUFpQjs7O3VCQTBCaEIsS0FBSzs0QkFDTCxLQUFLOzJCQUNMLEtBQUs7O0FBRG1CO0lBQWYsWUFBWSxFQUFFOzs4REFBdUI7OztJQUQvQywyQ0FBMEI7O0lBQzFCLGdEQUErQzs7SUFTL0MsaURBQWdDOztJQUNoQywwQ0FBc0M7Ozs7O0lBUXBDLHNDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPcHRpb25hbCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IHRvQm9vbGVhbiwgSW5wdXRCb29sZWFuLCBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOekNvbERpcmVjdGl2ZSwgTnpSb3dEaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2dyaWQnO1xyXG5cclxuaW1wb3J0IHsgQ21hY3NGb3JtSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY21hY3MtZm9ybS1pdGVtLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWZvcm0tbGFiZWwnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NGb3JtTGFiZWwnLFxyXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtZm9ybS1sYWJlbC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzRm9ybUxhYmVsQ29tcG9uZW50IGV4dGVuZHMgTnpDb2xEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xyXG4gIEBJbnB1dCgpIGNtYWNzRm9yOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNtYWNzUmVxdWlyZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKVxyXG4gIHNldCBjbWFjc05vQ29sb24odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMubm9Db2xvbiA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG4gIGdldCBjbWFjc05vQ29sb24oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gISF0aGlzLm5vQ29sb247XHJcbiAgfVxyXG5cclxuICBkZWZhdWx0Tm9Db2xvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIG5vQ29sb246IGJvb2xlYW4gfCBzdHJpbmcgPSAnZGVmYXVsdCc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsXHJcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgQE9wdGlvbmFsKCkgQEhvc3QoKSBjbWFjc0Zvcm1JdGVtQ29tcG9uZW50OiBDbWFjc0Zvcm1JdGVtQ29tcG9uZW50LFxyXG4gICAgQE9wdGlvbmFsKCkgQEhvc3QoKSBuelJvd0RpcmVjdGl2ZTogTnpSb3dEaXJlY3RpdmUsXHJcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7XHJcbiAgICBzdXBlcihuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsIGVsZW1lbnRSZWYsIGNtYWNzRm9ybUl0ZW1Db21wb25lbnQgfHwgbnpSb3dEaXJlY3RpdmUsIHJlbmRlcmVyKTtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1mb3JtLWl0ZW0tbGFiZWwnKTtcclxuICB9XHJcblxyXG4gIHNldERlZmF1bHROb0NvbG9uKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlZmF1bHROb0NvbG9uID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgc3VwZXIubmdBZnRlclZpZXdJbml0KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==