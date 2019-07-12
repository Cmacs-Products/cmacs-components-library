/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, forwardRef } from '@angular/core';
import { InputBoolean, isNotNil } from 'ng-zorro-antd';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export class CmacsSearchComponent {
    constructor() {
        this.disabled = false;
        this.allowClear = false;
        this.showSearch = false;
        this.size = 'default';
        this.placeholder = 'placeholder';
        this.mode = 'default';
        this.onChange = (/**
         * @return {?}
         */
        () => null);
        this.onTouched = (/**
         * @return {?}
         */
        () => null);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.selected = value;
        /** @type {?} */
        let listValue = [];
        if (isNotNil(value)) {
            if (Array.isArray(value)) {
                listValue = value;
            }
            else {
                listValue = [value];
            }
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    trackByFn(index, item) {
        return item.value;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log(this.options);
    }
}
CmacsSearchComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line: component-selector
                selector: 'cmacs-search',
                template: "<cmacs-dropdown class=\"cmacs-search\" style=\"width: 100%\" [(ngModel)]=\"selected\" [disabled]=disabled [allowClear]=allowClear\r\n    placeHolder={{placeholder}} [size]=size mode={{mode}} showSearch showCustomSearch>\r\n    <cmacs-option *ngFor=\"let item of options; index as i; trackBy: trackByFn\" value=\"{{item.value}}\"\r\n        label=\"{{item.label}}\"></cmacs-option>\r\n</cmacs-dropdown>\r\n\r\n<!-- <cmacs-dropdown style=\"width: 100%\" [(ngModel)]=\"selected\" [disabled]=disabled allowClear placeHolder=\"Choose\" showSearch\r\n    showCustomSearch>\r\n    <cmacs-option *ngFor=\"let item of options; index as i; trackBy: trackByFn\" value=\"{{item.value}}\" label=\"{{item.label}}\"></cmacs-option>\r\n</cmacs-dropdown> -->\r\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => CmacsSearchComponent)),
                        multi: true
                    }
                ],
                styles: [""]
            }] }
];
/** @nocollapse */
CmacsSearchComponent.ctorParameters = () => [];
CmacsSearchComponent.propDecorators = {
    options: [{ type: Input }],
    disabled: [{ type: Input }],
    allowClear: [{ type: Input }],
    showSearch: [{ type: Input }],
    size: [{ type: Input }],
    placeholder: [{ type: Input }],
    selected: [{ type: Input }, { type: Output }],
    mode: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsSearchComponent.prototype, "disabled", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsSearchComponent.prototype, "allowClear", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsSearchComponent.prototype, "showSearch", void 0);
if (false) {
    /** @type {?} */
    CmacsSearchComponent.prototype.options;
    /** @type {?} */
    CmacsSearchComponent.prototype.disabled;
    /** @type {?} */
    CmacsSearchComponent.prototype.allowClear;
    /** @type {?} */
    CmacsSearchComponent.prototype.showSearch;
    /** @type {?} */
    CmacsSearchComponent.prototype.size;
    /** @type {?} */
    CmacsSearchComponent.prototype.placeholder;
    /** @type {?} */
    CmacsSearchComponent.prototype.selected;
    /** @type {?} */
    CmacsSearchComponent.prototype.mode;
    /** @type {?} */
    CmacsSearchComponent.prototype.onChange;
    /** @type {?} */
    CmacsSearchComponent.prototype.onTouched;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mtc2VhcmNoL2NtYWNzLXNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBRSxZQUFZLEVBQWlCLFFBQVEsRUFBbUIsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBZ0J6RSxNQUFNLE9BQU8sb0JBQW9CO0lBb0MvQjtRQWpDeUIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkMsU0FBSSxHQUFrQixTQUFTLENBQUM7UUFDaEMsZ0JBQVcsR0FBRyxhQUFhLENBQUM7UUFFNUIsU0FBSSxHQUEyQixTQUFTLENBQUM7UUFFbEQsYUFBUTs7O1FBQXVDLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBQztRQUMxRCxjQUFTOzs7UUFBZSxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUM7SUF3Qm5CLENBQUM7Ozs7O0lBckJqQixVQUFVLENBQUMsS0FBa0I7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7O1lBQ2xCLFNBQVMsR0FBVSxFQUFFO1FBQ3pCLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ25CLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDeEIsU0FBUyxHQUFHLEtBQUssQ0FBQzthQUNuQjtpQkFBTTtnQkFDTCxTQUFTLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNyQjtTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFzQztRQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLEVBQWM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7O0lBS0QsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFZO1FBQzNCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVCLENBQUM7OztZQXpERixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixxdkJBQTRDO2dCQUM1QyxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVU7Ozt3QkFBQyxHQUFHLEVBQUUsQ0FBQyxvQkFBb0IsRUFBQzt3QkFDbkQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7O2FBRUY7Ozs7O3NCQUdFLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7bUJBQ0wsS0FBSzswQkFDTCxLQUFLO3VCQUNMLEtBQUssWUFBSSxNQUFNO21CQUNmLEtBQUs7O0FBTm1CO0lBQWYsWUFBWSxFQUFFOztzREFBa0I7QUFDakI7SUFBZixZQUFZLEVBQUU7O3dEQUFvQjtBQUNuQjtJQUFmLFlBQVksRUFBRTs7d0RBQW9COzs7SUFINUMsdUNBQTJCOztJQUMzQix3Q0FBMEM7O0lBQzFDLDBDQUE0Qzs7SUFDNUMsMENBQTRDOztJQUM1QyxvQ0FBeUM7O0lBQ3pDLDJDQUFxQzs7SUFDckMsd0NBQWlDOztJQUNqQyxvQ0FBa0Q7O0lBRWxELHdDQUEwRDs7SUFDMUQseUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBOelNpemVMRFNUeXBlLCBpc05vdE5pbCwgTnpTZWxlY3RTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgT3B0aW9uIH0gZnJvbSAnLi4vY29yZS9pbnRlcmZhY2VzL29wdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1zZWFyY2gnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1zZWFyY2guY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ21hY3NTZWFyY2hDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF0sXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3Mtc2VhcmNoLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgb3B0aW9uczogT3B0aW9uW107XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGFsbG93Q2xlYXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1NlYXJjaCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNpemU6IE56U2l6ZUxEU1R5cGUgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSAncGxhY2Vob2xkZXInO1xyXG4gIEBJbnB1dCgpIEBPdXRwdXQoKSBzZWxlY3RlZDogYW55O1xyXG4gIEBJbnB1dCgpIG1vZGU6ICdkZWZhdWx0JyB8ICdtdWx0aXBsZScgPSAnZGVmYXVsdCc7XHJcblxyXG4gIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcclxuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xyXG5cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55IHwgYW55W10pOiB2b2lkIHtcclxuICAgIHRoaXMuc2VsZWN0ZWQgPSB2YWx1ZTtcclxuICAgIGxldCBsaXN0VmFsdWU6IGFueVtdID0gW107IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICAgIGxpc3RWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxpc3RWYWx1ZSA9IFt2YWx1ZV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10pID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIHRyYWNrQnlGbihpbmRleCwgaXRlbTogT3B0aW9uKSB7XHJcbiAgICByZXR1cm4gaXRlbS52YWx1ZTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5vcHRpb25zKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==