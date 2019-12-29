/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
export class CmacsOptionComponent {
    constructor() {
        this.changes = new Subject();
        this.nzDisabled = false;
        this.nzCustomContent = false;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.changes.next();
    }
}
CmacsOptionComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line: component-selector
                selector: 'cmacs-option',
                exportAs: 'cmacsOption',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "<ng-template>\r\n  <ng-content></ng-content>\r\n</ng-template>"
            }] }
];
CmacsOptionComponent.propDecorators = {
    template: [{ type: ViewChild, args: [TemplateRef,] }],
    nzLabel: [{ type: Input, args: ['label',] }],
    divider: [{ type: Input, args: ['divider',] }],
    nzValue: [{ type: Input, args: ['value',] }],
    nzDisabled: [{ type: Input, args: ['disabled',] }],
    nzCustomContent: [{ type: Input, args: ['customContent',] }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsOptionComponent.prototype, "nzDisabled", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsOptionComponent.prototype, "nzCustomContent", void 0);
if (false) {
    /** @type {?} */
    CmacsOptionComponent.prototype.changes;
    /** @type {?} */
    CmacsOptionComponent.prototype.template;
    /** @type {?} */
    CmacsOptionComponent.prototype.nzLabel;
    /** @type {?} */
    CmacsOptionComponent.prototype.divider;
    /** @type {?} */
    CmacsOptionComponent.prototype.nzValue;
    /** @type {?} */
    CmacsOptionComponent.prototype.nzDisabled;
    /** @type {?} */
    CmacsOptionComponent.prototype.nzCustomContent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtb3B0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mtc2VsZWN0L2NtYWNzLW9wdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBRUwsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFVL0IsTUFBTSxPQUFPLG9CQUFvQjtJQVJqQztRQVNFLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBT1csZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNkLG9CQUFlLEdBQUcsS0FBSyxDQUFDO0lBS2xFLENBQUM7Ozs7SUFIQyxXQUFXO1FBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7WUFyQkYsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsMEVBQTRDO2FBQzdDOzs7dUJBR0UsU0FBUyxTQUFDLFdBQVc7c0JBRXJCLEtBQUssU0FBQyxPQUFPO3NCQUNiLEtBQUssU0FBQyxTQUFTO3NCQUVmLEtBQUssU0FBQyxPQUFPO3lCQUNiLEtBQUssU0FBQyxVQUFVOzhCQUNoQixLQUFLLFNBQUMsZUFBZTs7QUFEYTtJQUFmLFlBQVksRUFBRTs7d0RBQW9CO0FBQ2Q7SUFBZixZQUFZLEVBQUU7OzZEQUF5Qjs7O0lBUmhFLHVDQUF3Qjs7SUFDeEIsd0NBQW9EOztJQUVwRCx1Q0FBZ0M7O0lBQ2hDLHVDQUFrQzs7SUFFbEMsdUNBQTZCOztJQUM3QiwwQ0FBc0Q7O0lBQ3RELCtDQUFnRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnY21hY3Mtb3B0aW9uJyxcclxuICBleHBvcnRBczogJ2NtYWNzT3B0aW9uJyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1vcHRpb24uY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc09wdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgY2hhbmdlcyA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWlucHV0LXJlbmFtZVxyXG4gIEBJbnB1dCgnbGFiZWwnKSBuekxhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KCdkaXZpZGVyJykgZGl2aWRlcjogc3RyaW5nO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBASW5wdXQoJ3ZhbHVlJykgbnpWYWx1ZTogYW55O1xyXG4gIEBJbnB1dCgnZGlzYWJsZWQnKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgnY3VzdG9tQ29udGVudCcpIEBJbnB1dEJvb2xlYW4oKSBuekN1c3RvbUNvbnRlbnQgPSBmYWxzZTtcclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoYW5nZXMubmV4dCgpO1xyXG4gIH1cclxufVxyXG4iXX0=