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
    CmacsOptionComponent.prototype.nzValue;
    /** @type {?} */
    CmacsOptionComponent.prototype.nzDisabled;
    /** @type {?} */
    CmacsOptionComponent.prototype.nzCustomContent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtb3B0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mtc2VsZWN0L2NtYWNzLW9wdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBRUwsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFVL0IsTUFBTSxPQUFPLG9CQUFvQjtJQVJqQztRQVNFLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBTVcsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNkLG9CQUFlLEdBQUcsS0FBSyxDQUFDO0lBS2xFLENBQUM7Ozs7SUFIQyxXQUFXO1FBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7WUFwQkYsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsMEVBQTRDO2FBQzdDOzs7dUJBR0UsU0FBUyxTQUFDLFdBQVc7c0JBRXJCLEtBQUssU0FBQyxPQUFPO3NCQUViLEtBQUssU0FBQyxPQUFPO3lCQUNiLEtBQUssU0FBQyxVQUFVOzhCQUNoQixLQUFLLFNBQUMsZUFBZTs7QUFEYTtJQUFmLFlBQVksRUFBRTs7d0RBQW9CO0FBQ2Q7SUFBZixZQUFZLEVBQUU7OzZEQUF5Qjs7O0lBUGhFLHVDQUF3Qjs7SUFDeEIsd0NBQW9EOztJQUVwRCx1Q0FBZ0M7O0lBRWhDLHVDQUE2Qjs7SUFDN0IsMENBQXNEOztJQUN0RCwrQ0FBZ0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2NtYWNzLW9wdGlvbicsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc09wdGlvbicsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mtb3B0aW9uLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NPcHRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIGNoYW5nZXMgPSBuZXcgU3ViamVjdCgpO1xyXG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1pbnB1dC1yZW5hbWVcclxuICBASW5wdXQoJ2xhYmVsJykgbnpMYWJlbDogc3RyaW5nO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBASW5wdXQoJ3ZhbHVlJykgbnpWYWx1ZTogYW55O1xyXG4gIEBJbnB1dCgnZGlzYWJsZWQnKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgnY3VzdG9tQ29udGVudCcpIEBJbnB1dEJvb2xlYW4oKSBuekN1c3RvbUNvbnRlbnQgPSBmYWxzZTtcclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoYW5nZXMubmV4dCgpO1xyXG4gIH1cclxufVxyXG4iXX0=