/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewEncapsulation, ContentChildren, QueryList } from '@angular/core';
import { NzUpdateHostClassService, InputBoolean } from 'ng-zorro-antd/core';
import { CmacsButtonComponent } from './cmacs-button.component';
export class CmacsButtonGroupComponent {
    /**
     * @param {?} nzUpdateHostClassService
     * @param {?} elementRef
     */
    constructor(nzUpdateHostClassService, elementRef) {
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.overlap = false;
        this.disabled = false;
        this.disabledNav = false;
        this.prefixCls = 'ant-btn-group';
        this.buttons = [];
        this.indexBtn = 0;
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
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.buttons = this.contentButtons.toArray();
        if (this.overlap) {
            for (let index = 1; index < this.buttons.length; index++) {
                this.buttons[index].hideBtn();
            }
        }
        if (this.disabled) {
            for (const iterator of this.buttons) {
                iterator.disabledBtn();
            }
        }
    }
    /**
     * @return {?}
     */
    moveLeft() {
        this.buttons[this.indexBtn--].hideBtn();
        this.buttons[this.indexBtn].showBtn();
    }
    /**
     * @return {?}
     */
    moveRight() {
        this.buttons[this.indexBtn++].hideBtn();
        this.buttons[this.indexBtn].showBtn();
    }
    /**
     * @return {?}
     */
    isDisableLeft() {
        return this.indexBtn === 0 || this.disabled || this.disabledNav;
    }
    /**
     * @return {?}
     */
    isDisableRight() {
        return this.indexBtn === this.buttons.length - 1 || this.disabled || this.disabledNav;
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
                template: "<button cmacs-button [disabled]=\"isDisableLeft()\" *ngIf=\"overlap\" (click)=\"moveLeft()\">\r\n    <i class=\"iconArrowLarge-Chevron-Left\"></i>\r\n</button>\r\n\r\n<ng-content></ng-content>\r\n\r\n<button cmacs-button [disabled]=\"isDisableRight()\" *ngIf=\"overlap\" (click)=\"moveRight()\">\r\n    <i class=\"iconArrowLarge-Chevron-Right\"></i>\r\n</button>\r\n",
                styles: [""]
            }] }
];
/** @nocollapse */
CmacsButtonGroupComponent.ctorParameters = () => [
    { type: NzUpdateHostClassService },
    { type: ElementRef }
];
CmacsButtonGroupComponent.propDecorators = {
    nzSize: [{ type: Input }],
    overlap: [{ type: Input }],
    disabled: [{ type: Input }],
    disabledNav: [{ type: Input }],
    contentButtons: [{ type: ContentChildren, args: [CmacsButtonComponent,] }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsButtonGroupComponent.prototype, "overlap", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsButtonGroupComponent.prototype, "disabled", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsButtonGroupComponent.prototype, "disabledNav", void 0);
if (false) {
    /** @type {?} */
    CmacsButtonGroupComponent.prototype.overlap;
    /** @type {?} */
    CmacsButtonGroupComponent.prototype.disabled;
    /** @type {?} */
    CmacsButtonGroupComponent.prototype.disabledNav;
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
    /** @type {?} */
    CmacsButtonGroupComponent.prototype.buttons;
    /** @type {?} */
    CmacsButtonGroupComponent.prototype.indexBtn;
    /** @type {?} */
    CmacsButtonGroupComponent.prototype.contentButtons;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtYnV0dG9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtYnV0dG9uL2NtYWNzLWJ1dHRvbi1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsaUJBQWlCLEVBQWtDLGVBQWUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0ssT0FBTyxFQUFpQix3QkFBd0IsRUFBZSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQWFoRSxNQUFNLE9BQU8seUJBQXlCOzs7OztJQWNwQyxZQUFvQix3QkFBa0QsRUFBVSxVQUFzQjtRQUFsRiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUo3RSxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFNckMsY0FBUyxHQUFHLGVBQWUsQ0FBQztRQUNwQyxZQUFPLEdBQTJCLEVBQUUsQ0FBQztRQUNyQyxhQUFRLEdBQUcsQ0FBQyxDQUFDO0lBTjRGLENBQUM7Ozs7SUFiMUcsSUFDSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRUQsSUFBSSxNQUFNLENBQUMsS0FBb0I7UUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFlRCxXQUFXOztjQUNILFFBQVEsR0FBRztZQUNmLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUk7WUFDdEIsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEtBQUssT0FBTztZQUNqRCxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sS0FBSyxPQUFPO1NBQ2xEO1FBQ0QsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN6RixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM3QyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUN4RCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQy9CO1NBQ0Y7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsS0FBSyxNQUFNLFFBQVEsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNuQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDeEI7U0FDRjtJQUNILENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QyxDQUFDOzs7O0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVELGFBQWE7UUFDWCxPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUNsRSxDQUFDOzs7O0lBRUQsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3hGLENBQUM7OztZQTlFRixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7Z0JBRXJDLDBYQUFrRDs7YUFDbkQ7Ozs7WUFidUIsd0JBQXdCO1lBRkgsVUFBVTs7O3FCQWlCcEQsS0FBSztzQkFTTCxLQUFLO3VCQUNMLEtBQUs7MEJBQ0wsS0FBSzs2QkFVTCxlQUFlLFNBQUMsb0JBQW9COztBQVpaO0lBQWYsWUFBWSxFQUFFOzswREFBaUI7QUFDaEI7SUFBZixZQUFZLEVBQUU7OzJEQUFrQjtBQUNqQjtJQUFmLFlBQVksRUFBRTs7OERBQXFCOzs7SUFGN0MsNENBQXlDOztJQUN6Qyw2Q0FBMEM7O0lBQzFDLGdEQUE2Qzs7Ozs7SUFLN0MsMENBQTZCOzs7OztJQUM3Qiw4Q0FBb0M7O0lBQ3BDLDRDQUFxQzs7SUFDckMsNkNBQWE7O0lBRWIsbURBQXVGOzs7OztJQVIzRSw2REFBMEQ7Ozs7O0lBQUUsK0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24sIEFmdGVyQ29udGVudEluaXQsIFZpZXdDaGlsZHJlbiwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56U2l6ZUxEU1R5cGUsIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSwgSW5wdXROdW1iZXIsIElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IENtYWNzQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9jbWFjcy1idXR0b24uY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnY21hY3MtYnV0dG9uLWdyb3VwJyxcclxuICBleHBvcnRBczogJ2NtYWNzQnV0dG9uR3JvdXAnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgcHJvdmlkZXJzOiBbTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXSxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1idXR0b24tZ3JvdXAuY29tcG9uZW50LmNzcyddLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1idXR0b24tZ3JvdXAuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0J1dHRvbkdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0IHtcclxuICBASW5wdXQoKVxyXG4gIGdldCBuelNpemUoKTogTnpTaXplTERTVHlwZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcclxuICB9XHJcblxyXG4gIHNldCBuelNpemUodmFsdWU6IE56U2l6ZUxEU1R5cGUpIHtcclxuICAgIHRoaXMuX3NpemUgPSB2YWx1ZTtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICB9XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG92ZXJsYXAgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGlzYWJsZWROYXYgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxyXG5cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB2YXJpYWJsZS1uYW1lXHJcbiAgcHJpdmF0ZSBfc2l6ZTogTnpTaXplTERTVHlwZTtcclxuICBwcml2YXRlIHByZWZpeENscyA9ICdhbnQtYnRuLWdyb3VwJztcclxuICBidXR0b25zOiBDbWFjc0J1dHRvbkNvbXBvbmVudFtdID0gW107XHJcbiAgaW5kZXhCdG4gPSAwO1xyXG5cclxuICBAQ29udGVudENoaWxkcmVuKENtYWNzQnV0dG9uQ29tcG9uZW50KSBjb250ZW50QnV0dG9uczogUXVlcnlMaXN0PENtYWNzQnV0dG9uQ29tcG9uZW50PjtcclxuXHJcbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcclxuICAgICAgW3RoaXMucHJlZml4Q2xzXTogdHJ1ZSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1sZ2BdOiB0aGlzLm56U2l6ZSA9PT0gJ2xhcmdlJyxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1zbWBdOiB0aGlzLm56U2l6ZSA9PT0gJ3NtYWxsJ1xyXG4gICAgfTtcclxuICAgIHRoaXMubnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY2xhc3NNYXApO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmJ1dHRvbnMgPSB0aGlzLmNvbnRlbnRCdXR0b25zLnRvQXJyYXkoKTtcclxuICAgIGlmICh0aGlzLm92ZXJsYXApIHtcclxuICAgICAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8IHRoaXMuYnV0dG9ucy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICB0aGlzLmJ1dHRvbnNbaW5kZXhdLmhpZGVCdG4oKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgZm9yIChjb25zdCBpdGVyYXRvciBvZiB0aGlzLmJ1dHRvbnMpIHtcclxuICAgICAgICBpdGVyYXRvci5kaXNhYmxlZEJ0bigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtb3ZlTGVmdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuYnV0dG9uc1t0aGlzLmluZGV4QnRuLS1dLmhpZGVCdG4oKTtcclxuICAgIHRoaXMuYnV0dG9uc1t0aGlzLmluZGV4QnRuXS5zaG93QnRuKCk7XHJcbiAgfVxyXG5cclxuICBtb3ZlUmlnaHQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmJ1dHRvbnNbdGhpcy5pbmRleEJ0bisrXS5oaWRlQnRuKCk7XHJcbiAgICB0aGlzLmJ1dHRvbnNbdGhpcy5pbmRleEJ0bl0uc2hvd0J0bigpO1xyXG4gIH1cclxuXHJcbiAgaXNEaXNhYmxlTGVmdCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmluZGV4QnRuID09PSAwIHx8IHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5kaXNhYmxlZE5hdjtcclxuICB9XHJcblxyXG4gIGlzRGlzYWJsZVJpZ2h0KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5kZXhCdG4gPT09IHRoaXMuYnV0dG9ucy5sZW5ndGggLSAxIHx8IHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5kaXNhYmxlZE5hdjtcclxuICB9XHJcbn1cclxuIl19