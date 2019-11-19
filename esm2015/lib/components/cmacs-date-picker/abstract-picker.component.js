/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InputBoolean } from 'ng-zorro-antd/core';
import { CandyDate } from './lib/candy-date/candy-date';
import { CmacsPickerComponent } from './picker.component';
// tslint:disable-next-line: max-line-length
/** @type {?} */
const POPUP_STYLE_PATCH = { position: 'relative' };
// Aim to override antd's style to support overlay's position strategy (position:absolute will cause it not working beacuse the overlay can't get the height/width of it's content)
/**
 * The base picker for all common APIs
 * @abstract
 */
export class AbstractPickerComponent {
    // Use picker's real open state to let re-render the picker's content when shown up
    /**
     * @param {?} i18n
     * @param {?} cdr
     * @param {?} dateHelper
     * @param {?=} noAnimation
     */
    constructor(i18n, cdr, dateHelper, noAnimation) {
        this.i18n = i18n;
        this.cdr = cdr;
        this.dateHelper = dateHelper;
        this.noAnimation = noAnimation;
        // --- Common API
        this.allowClear = true;
        this.autoFocus = false;
        this.disabled = false;
        this.popupStyle = POPUP_STYLE_PATCH;
        this.cmacsOpen = false;
        this.width = 'initial';
        this.cmacsOnOpenChange = new EventEmitter();
        this.isRange = false; // Indicate whether the value is a range value
        // Indicate whether the value is a range value
        this.destroyed$ = new Subject();
        this.isCustomPlaceHolder = false;
        // ------------------------------------------------------------------------
        // | Control value accessor implements
        // ------------------------------------------------------------------------
        // NOTE: onChangeFn/onTouchedFn will not be assigned if user not use as ngModel
        this.onChangeFn = (/**
         * @return {?}
         */
        () => void 0);
        this.onTouchedFn = (/**
         * @return {?}
         */
        () => void 0);
    }
    /**
     * @return {?}
     */
    get realOpenState() {
        return this.picker.animationOpenState;
    } // Use picker's real open state to let re-render the picker's content when shown up
    /**
     * @return {?}
     */
    initValue() {
        this.value = this.isRange ? [] : null;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // Subscribe the every locale change if the Locale is not handled by user
        if (!this.locale) {
            this.i18n.localeChange.pipe(takeUntil(this.destroyed$)).subscribe((/**
             * @return {?}
             */
            () => this.setLocale()));
        }
        // Default value
        this.initValue();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.popupStyle) {
            // Always assign the popup style patch
            this.popupStyle = this.popupStyle ? Object.assign({}, this.popupStyle, POPUP_STYLE_PATCH) : POPUP_STYLE_PATCH;
        }
        // Mark as customized placeholder by user once PlaceHolder assigned at the first time
        if (changes.placeHolder && changes.placeHolder.firstChange && typeof this.placeHolder !== 'undefined') {
            this.isCustomPlaceHolder = true;
        }
        if (changes.locale) {
            this.setDefaultPlaceHolder();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyed$.next();
        this.destroyed$.complete();
    }
    /**
     * @return {?}
     */
    closeOverlay() {
        this.picker.hideOverlay();
    }
    /**
     * Common handle for value changes
     * @param {?} value changed value
     * @return {?}
     */
    onValueChange(value) {
        this.value = value;
        if (this.isRange) {
            /** @type {?} */
            const vAsRange = (/** @type {?} */ (this.value));
            if (vAsRange.length) {
                this.onChangeFn([vAsRange[0].nativeDate, vAsRange[1].nativeDate]);
            }
            else {
                this.onChangeFn([]);
            }
        }
        else {
            if (this.value) {
                this.onChangeFn(((/** @type {?} */ (this.value))).nativeDate);
            }
            else {
                this.onChangeFn(null);
            }
        }
        this.onTouchedFn();
    }
    /**
     * Triggered when overlayOpen changes (different with realOpenState)
     * @param {?} open The overlayOpen in picker component
     * @return {?}
     */
    onOpenChange(open) {
        this.cmacsOnOpenChange.emit(open);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.setValue(value);
        this.cdr.markForCheck();
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeFn = fn;
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedFn = fn;
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    setDisabledState(disabled) {
        this.disabled = disabled;
        this.cdr.markForCheck();
    }
    // ------------------------------------------------------------------------
    // | Internal methods
    // ------------------------------------------------------------------------
    // Reload locale from i18n with side effects
    /**
     * @private
     * @return {?}
     */
    setLocale() {
        this.locale = this.i18n.getLocaleData('DatePicker', {});
        this.setDefaultPlaceHolder();
        this.cdr.markForCheck();
    }
    /**
     * @private
     * @return {?}
     */
    setDefaultPlaceHolder() {
        if (!this.isCustomPlaceHolder && this.locale) {
            this.placeHolder = this.isRange ? this.locale.lang.rangePlaceholder : this.locale.lang.placeholder;
        }
    }
    // Safe way of setting value with default
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    setValue(value) {
        if (this.isRange) {
            this.value = value ? ((/** @type {?} */ (value))).map((/**
             * @param {?} val
             * @return {?}
             */
            val => new CandyDate(val))) : [];
        }
        else {
            this.value = value ? new CandyDate((/** @type {?} */ (value))) : null;
        }
    }
}
AbstractPickerComponent.propDecorators = {
    allowClear: [{ type: Input }],
    autoFocus: [{ type: Input }],
    disabled: [{ type: Input }],
    open: [{ type: Input }],
    className: [{ type: Input }],
    disabledDate: [{ type: Input }],
    locale: [{ type: Input }],
    placeHolder: [{ type: Input }],
    popupStyle: [{ type: Input }],
    dropdownClassName: [{ type: Input }],
    size: [{ type: Input }],
    cmacsStyle: [{ type: Input }],
    format: [{ type: Input }],
    cmacsOpen: [{ type: Input }],
    value: [{ type: Input }],
    width: [{ type: Input }],
    cmacsOnOpenChange: [{ type: Output }],
    picker: [{ type: ViewChild, args: [CmacsPickerComponent,] }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], AbstractPickerComponent.prototype, "allowClear", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], AbstractPickerComponent.prototype, "autoFocus", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], AbstractPickerComponent.prototype, "disabled", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], AbstractPickerComponent.prototype, "open", void 0);
if (false) {
    /** @type {?} */
    AbstractPickerComponent.prototype.allowClear;
    /** @type {?} */
    AbstractPickerComponent.prototype.autoFocus;
    /** @type {?} */
    AbstractPickerComponent.prototype.disabled;
    /** @type {?} */
    AbstractPickerComponent.prototype.open;
    /** @type {?} */
    AbstractPickerComponent.prototype.className;
    /** @type {?} */
    AbstractPickerComponent.prototype.disabledDate;
    /** @type {?} */
    AbstractPickerComponent.prototype.locale;
    /** @type {?} */
    AbstractPickerComponent.prototype.placeHolder;
    /** @type {?} */
    AbstractPickerComponent.prototype.popupStyle;
    /** @type {?} */
    AbstractPickerComponent.prototype.dropdownClassName;
    /** @type {?} */
    AbstractPickerComponent.prototype.size;
    /** @type {?} */
    AbstractPickerComponent.prototype.cmacsStyle;
    /** @type {?} */
    AbstractPickerComponent.prototype.format;
    /** @type {?} */
    AbstractPickerComponent.prototype.cmacsOpen;
    /** @type {?} */
    AbstractPickerComponent.prototype.value;
    /** @type {?} */
    AbstractPickerComponent.prototype.width;
    /** @type {?} */
    AbstractPickerComponent.prototype.cmacsOnOpenChange;
    /**
     * @type {?}
     * @protected
     */
    AbstractPickerComponent.prototype.picker;
    /** @type {?} */
    AbstractPickerComponent.prototype.isRange;
    /**
     * @type {?}
     * @protected
     */
    AbstractPickerComponent.prototype.destroyed$;
    /**
     * @type {?}
     * @protected
     */
    AbstractPickerComponent.prototype.isCustomPlaceHolder;
    /** @type {?} */
    AbstractPickerComponent.prototype.onChangeFn;
    /** @type {?} */
    AbstractPickerComponent.prototype.onTouchedFn;
    /**
     * @type {?}
     * @protected
     */
    AbstractPickerComponent.prototype.i18n;
    /**
     * @type {?}
     * @protected
     */
    AbstractPickerComponent.prototype.cdr;
    /**
     * @type {?}
     * @protected
     */
    AbstractPickerComponent.prototype.dateHelper;
    /** @type {?} */
    AbstractPickerComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtZGF0ZS1waWNrZXIvYWJzdHJhY3QtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTCxZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFFTixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLFlBQVksRUFBMEIsTUFBTSxvQkFBb0IsQ0FBQztBQUcxRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDeEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztNQUdwRCxpQkFBaUIsR0FBRyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUU7Ozs7OztBQUtsRCxNQUFNLE9BQWdCLHVCQUF1Qjs7Ozs7Ozs7SUFNM0MsWUFDWSxJQUFtQixFQUNuQixHQUFzQixFQUN0QixVQUE2QixFQUNoQyxXQUFvQztRQUhqQyxTQUFJLEdBQUosSUFBSSxDQUFlO1FBQ25CLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBQ2hDLGdCQUFXLEdBQVgsV0FBVyxDQUF5Qjs7UUFHcEIsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFNakMsZUFBVSxHQUFXLGlCQUFpQixDQUFDO1FBS3ZDLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsVUFBSyxHQUFRLFNBQVMsQ0FBQztRQUViLHNCQUFpQixHQUFH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LHlDQUF3Qjs7SUFDeEIsNENBQTJCOztJQUMzQix3Q0FBb0I7O0lBQ3BCLHdDQUFnQzs7SUFFaEMsb0RBQW1FOzs7OztJQUVuRSx5Q0FBd0U7O0lBRXhFLDBDQUFnQjs7Ozs7SUFFaEIsNkNBQW9EOzs7OztJQUNwRCxzREFBc0M7O0lBNkV0Qyw2Q0FBZ0U7O0lBQ2hFLDhDQUF1Qzs7Ozs7SUE1R3JDLHVDQUE2Qjs7Ozs7SUFDN0Isc0NBQWdDOzs7OztJQUNoQyw2Q0FBdUM7O0lBQ3ZDLDhDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdDaGlsZFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSwgTnpEYXRlUGlja2VySTE4bkludGVyZmFjZSwgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcblxyXG5pbXBvcnQgeyBDYW5keURhdGUgfSBmcm9tICcuL2xpYi9jYW5keS1kYXRlL2NhbmR5LWRhdGUnO1xyXG5pbXBvcnQgeyBDbWFjc1BpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vcGlja2VyLmNvbXBvbmVudCc7XHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1saW5lLWxlbmd0aFxyXG5jb25zdCBQT1BVUF9TVFlMRV9QQVRDSCA9IHsgcG9zaXRpb246ICdyZWxhdGl2ZScgfTsgLy8gQWltIHRvIG92ZXJyaWRlIGFudGQncyBzdHlsZSB0byBzdXBwb3J0IG92ZXJsYXkncyBwb3NpdGlvbiBzdHJhdGVneSAocG9zaXRpb246YWJzb2x1dGUgd2lsbCBjYXVzZSBpdCBub3Qgd29ya2luZyBiZWFjdXNlIHRoZSBvdmVybGF5IGNhbid0IGdldCB0aGUgaGVpZ2h0L3dpZHRoIG9mIGl0J3MgY29udGVudClcclxuXHJcbi8qKlxyXG4gKiBUaGUgYmFzZSBwaWNrZXIgZm9yIGFsbCBjb21tb24gQVBJc1xyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0UGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG5cclxuICBnZXQgcmVhbE9wZW5TdGF0ZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnBpY2tlci5hbmltYXRpb25PcGVuU3RhdGU7XHJcbiAgfSAvLyBVc2UgcGlja2VyJ3MgcmVhbCBvcGVuIHN0YXRlIHRvIGxldCByZS1yZW5kZXIgdGhlIHBpY2tlcidzIGNvbnRlbnQgd2hlbiBzaG93biB1cFxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByb3RlY3RlZCBpMThuOiBOekkxOG5TZXJ2aWNlLFxyXG4gICAgcHJvdGVjdGVkIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcm90ZWN0ZWQgZGF0ZUhlbHBlcjogRGF0ZUhlbHBlclNlcnZpY2UsXHJcbiAgICBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXHJcbiAgKSB7fVxyXG4gIC8vIC0tLSBDb21tb24gQVBJXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGFsbG93Q2xlYXIgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhdXRvRm9jdXMgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgb3BlbjogYm9vbGVhbjtcclxuICBASW5wdXQoKSBjbGFzc05hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBkaXNhYmxlZERhdGU6IChkOiBEYXRlKSA9PiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGxvY2FsZTogTnpEYXRlUGlja2VySTE4bkludGVyZmFjZTtcclxuICBASW5wdXQoKSBwbGFjZUhvbGRlcjogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgQElucHV0KCkgcG9wdXBTdHlsZTogb2JqZWN0ID0gUE9QVVBfU1RZTEVfUEFUQ0g7XHJcbiAgQElucHV0KCkgZHJvcGRvd25DbGFzc05hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBzaXplOiAnbGFyZ2UnIHwgJ3NtYWxsJztcclxuICBASW5wdXQoKSBjbWFjc1N0eWxlOiBvYmplY3Q7XHJcbiAgQElucHV0KCkgZm9ybWF0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY21hY3NPcGVuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgdmFsdWU6IGFueTtcclxuICBASW5wdXQoKSB3aWR0aDogYW55ID0gJ2luaXRpYWwnO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY21hY3NPbk9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoQ21hY3NQaWNrZXJDb21wb25lbnQpIHByb3RlY3RlZCBwaWNrZXI6IENtYWNzUGlja2VyQ29tcG9uZW50O1xyXG5cclxuICBpc1JhbmdlID0gZmFsc2U7IC8vIEluZGljYXRlIHdoZXRoZXIgdGhlIHZhbHVlIGlzIGEgcmFuZ2UgdmFsdWVcclxuXHJcbiAgcHJvdGVjdGVkIGRlc3Ryb3llZCQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByb3RlY3RlZCBpc0N1c3RvbVBsYWNlSG9sZGVyID0gZmFsc2U7XHJcblxyXG4gIGluaXRWYWx1ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUgPSB0aGlzLmlzUmFuZ2UgPyBbXSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIFN1YnNjcmliZSB0aGUgZXZlcnkgbG9jYWxlIGNoYW5nZSBpZiB0aGUgTG9jYWxlIGlzIG5vdCBoYW5kbGVkIGJ5IHVzZXJcclxuICAgIGlmICghdGhpcy5sb2NhbGUpIHtcclxuICAgICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zZXRMb2NhbGUoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGVmYXVsdCB2YWx1ZVxyXG4gICAgdGhpcy5pbml0VmFsdWUoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLnBvcHVwU3R5bGUpIHtcclxuICAgICAgLy8gQWx3YXlzIGFzc2lnbiB0aGUgcG9wdXAgc3R5bGUgcGF0Y2hcclxuICAgICAgdGhpcy5wb3B1cFN0eWxlID0gdGhpcy5wb3B1cFN0eWxlID8geyAuLi50aGlzLnBvcHVwU3R5bGUsIC4uLlBPUFVQX1NUWUxFX1BBVENIIH0gOiBQT1BVUF9TVFlMRV9QQVRDSDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNYXJrIGFzIGN1c3RvbWl6ZWQgcGxhY2Vob2xkZXIgYnkgdXNlciBvbmNlIFBsYWNlSG9sZGVyIGFzc2lnbmVkIGF0IHRoZSBmaXJzdCB0aW1lXHJcbiAgICBpZiAoY2hhbmdlcy5wbGFjZUhvbGRlciAmJiBjaGFuZ2VzLnBsYWNlSG9sZGVyLmZpcnN0Q2hhbmdlICYmIHR5cGVvZiB0aGlzLnBsYWNlSG9sZGVyICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICB0aGlzLmlzQ3VzdG9tUGxhY2VIb2xkZXIgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzLmxvY2FsZSkge1xyXG4gICAgICB0aGlzLnNldERlZmF1bHRQbGFjZUhvbGRlcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95ZWQkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBjbG9zZU92ZXJsYXkoKTogdm9pZCB7XHJcbiAgICB0aGlzLnBpY2tlci5oaWRlT3ZlcmxheSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29tbW9uIGhhbmRsZSBmb3IgdmFsdWUgY2hhbmdlc1xyXG4gICAqIEBwYXJhbSB2YWx1ZSBjaGFuZ2VkIHZhbHVlXHJcbiAgICovXHJcbiAgb25WYWx1ZUNoYW5nZSh2YWx1ZTogQ29tcGF0aWJsZVZhbHVlKTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIGNvbnN0IHZBc1JhbmdlID0gdGhpcy52YWx1ZSBhcyBDYW5keURhdGVbXTtcclxuICAgICAgaWYgKHZBc1JhbmdlLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VGbihbdkFzUmFuZ2VbMF0ubmF0aXZlRGF0ZSwgdkFzUmFuZ2VbMV0ubmF0aXZlRGF0ZV0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VGbihbXSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLnZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZUZuKCh0aGlzLnZhbHVlIGFzIENhbmR5RGF0ZSkubmF0aXZlRGF0ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZUZuKG51bGwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLm9uVG91Y2hlZEZuKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUcmlnZ2VyZWQgd2hlbiBvdmVybGF5T3BlbiBjaGFuZ2VzIChkaWZmZXJlbnQgd2l0aCByZWFsT3BlblN0YXRlKVxyXG4gICAqIEBwYXJhbSBvcGVuIFRoZSBvdmVybGF5T3BlbiBpbiBwaWNrZXIgY29tcG9uZW50XHJcbiAgICovXHJcbiAgb25PcGVuQ2hhbmdlKG9wZW46IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuY21hY3NPbk9wZW5DaGFuZ2UuZW1pdChvcGVuKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIC8vIHwgQ29udHJvbCB2YWx1ZSBhY2Nlc3NvciBpbXBsZW1lbnRzXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gIC8vIE5PVEU6IG9uQ2hhbmdlRm4vb25Ub3VjaGVkRm4gd2lsbCBub3QgYmUgYXNzaWduZWQgaWYgdXNlciBub3QgdXNlIGFzIG5nTW9kZWxcclxuICBvbkNoYW5nZUZuOiAodmFsOiBDb21wYXRpYmxlRGF0ZSB8IG51bGwpID0+IHZvaWQgPSAoKSA9PiB2b2lkIDA7XHJcbiAgb25Ub3VjaGVkRm46ICgpID0+IHZvaWQgPSAoKSA9PiB2b2lkIDA7XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IENvbXBhdGlibGVEYXRlKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZUZuID0gZm47XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWRGbiA9IGZuO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGRpc2FibGVkO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAvLyB8IEludGVybmFsIG1ldGhvZHNcclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgLy8gUmVsb2FkIGxvY2FsZSBmcm9tIGkxOG4gd2l0aCBzaWRlIGVmZmVjdHNcclxuICBwcml2YXRlIHNldExvY2FsZSgpOiB2b2lkIHtcclxuICAgIHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ0RhdGVQaWNrZXInLCB7fSk7XHJcbiAgICB0aGlzLnNldERlZmF1bHRQbGFjZUhvbGRlcigpO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldERlZmF1bHRQbGFjZUhvbGRlcigpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5pc0N1c3RvbVBsYWNlSG9sZGVyICYmIHRoaXMubG9jYWxlKSB7XHJcbiAgICAgIHRoaXMucGxhY2VIb2xkZXIgPSB0aGlzLmlzUmFuZ2UgPyB0aGlzLmxvY2FsZS5sYW5nLnJhbmdlUGxhY2Vob2xkZXIgOiB0aGlzLmxvY2FsZS5sYW5nLnBsYWNlaG9sZGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gU2FmZSB3YXkgb2Ygc2V0dGluZyB2YWx1ZSB3aXRoIGRlZmF1bHRcclxuICBwcml2YXRlIHNldFZhbHVlKHZhbHVlOiBDb21wYXRpYmxlRGF0ZSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWUgPyAodmFsdWUgYXMgRGF0ZVtdKS5tYXAodmFsID0+IG5ldyBDYW5keURhdGUodmFsKSkgOiBbXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZSA/IG5ldyBDYW5keURhdGUodmFsdWUgYXMgRGF0ZSkgOiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQ29tcGF0aWJsZVZhbHVlID0gQ2FuZHlEYXRlIHwgQ2FuZHlEYXRlW107XHJcblxyXG5leHBvcnQgdHlwZSBDb21wYXRpYmxlRGF0ZSA9IERhdGUgfCBEYXRlW107XHJcbiJdfQ==