/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { NzUpdateHostClassService } from 'ng-zorro-antd/core';
export class CmacsButtonGroupComponent {
    /**
     * @param {?} nzUpdateHostClassService
     * @param {?} elementRef
     */
    constructor(nzUpdateHostClassService, elementRef) {
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.prefixCls = 'ant-btn-group';
    }
    /**
     * @return {?}
     */
    get nzSize() {
        return this._size;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSize(value) {
        this._size = value;
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    setClassMap() {
        /** @type {?} */
        const classMap = {
            [this.prefixCls]: true,
            [`${this.prefixCls}-lg`]: this.nzSize === 'large',
            [`${this.prefixCls}-sm`]: this.nzSize === 'small'
        };
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, classMap);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClassMap();
    }
}
CmacsButtonGroupComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line: component-selector
                selector: 'cmacs-button-group',
                exportAs: 'cmacsButtonGroup',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                providers: [NzUpdateHostClassService],
                template: "<ng-content></ng-content>\r\n"
            }] }
];
/** @nocollapse */
CmacsButtonGroupComponent.ctorParameters = () => [
    { type: NzUpdateHostClassService },
    { type: ElementRef }
];
CmacsButtonGroupComponent.propDecorators = {
    nzSize: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    CmacsButtonGroupComponent.prototype._size;
    /**
     * @type {?}
     * @private
     */
    CmacsButtonGroupComponent.prototype.prefixCls;
    /**
     * @type {?}
     * @private
     */
    CmacsButtonGroupComponent.prototype.nzUpdateHostClassService;
    /**
     * @type {?}
     * @private
     */
    CmacsButtonGroupComponent.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtYnV0dG9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtYnV0dG9uL2NtYWNzLWJ1dHRvbi1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqSCxPQUFPLEVBQWlCLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFZN0UsTUFBTSxPQUFPLHlCQUF5Qjs7Ozs7SUFXcEMsWUFBb0Isd0JBQWtELEVBQVUsVUFBc0I7UUFBbEYsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFJOUYsY0FBUyxHQUFHLGVBQWUsQ0FBQztJQUpxRSxDQUFDOzs7O0lBVjFHLElBQ0ksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7OztJQUVELElBQUksTUFBTSxDQUFDLEtBQW9CO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7O0lBUUQsV0FBVzs7Y0FDSCxRQUFRLEdBQUc7WUFDZixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJO1lBQ3RCLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxLQUFLLE9BQU87WUFDakQsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEtBQUssT0FBTztTQUNsRDtRQUNELElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDekYsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7O1lBdENGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDckMseUNBQWtEO2FBQ25EOzs7O1lBWHVCLHdCQUF3QjtZQUZILFVBQVU7OztxQkFlcEQsS0FBSzs7Ozs7OztJQWFOLDBDQUE2Qjs7Ozs7SUFDN0IsOENBQW9DOzs7OztJQUp4Qiw2REFBMEQ7Ozs7O0lBQUUsK0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56U2l6ZUxEU1R5cGUsIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2NtYWNzLWJ1dHRvbi1ncm91cCcsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0J1dHRvbkdyb3VwJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWJ1dHRvbi1ncm91cC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzQnV0dG9uR3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IG56U2l6ZSgpOiBOelNpemVMRFNUeXBlIHtcclxuICAgIHJldHVybiB0aGlzLl9zaXplO1xyXG4gIH1cclxuXHJcbiAgc2V0IG56U2l6ZSh2YWx1ZTogTnpTaXplTERTVHlwZSkge1xyXG4gICAgdGhpcy5fc2l6ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxyXG5cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB2YXJpYWJsZS1uYW1lXHJcbiAgcHJpdmF0ZSBfc2l6ZTogTnpTaXplTERTVHlwZTtcclxuICBwcml2YXRlIHByZWZpeENscyA9ICdhbnQtYnRuLWdyb3VwJztcclxuXHJcbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcclxuICAgICAgW3RoaXMucHJlZml4Q2xzXTogdHJ1ZSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1sZ2BdOiB0aGlzLm56U2l6ZSA9PT0gJ2xhcmdlJyxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1zbWBdOiB0aGlzLm56U2l6ZSA9PT0gJ3NtYWxsJ1xyXG4gICAgfTtcclxuICAgIHRoaXMubnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY2xhc3NNYXApO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==