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
var POPUP_STYLE_PATCH = { position: 'relative' };
// Aim to override antd's style to support overlay's position strategy (position:absolute will cause it not working beacuse the overlay can't get the height/width of it's content)
/**
 * The base picker for all common APIs
 * @abstract
 */
var AbstractPickerComponent = /** @class */ (function () {
    function AbstractPickerComponent(i18n, cdr, dateHelper, noAnimation) {
        this.i18n = i18n;
        this.cdr = cdr;
        this.dateHelper = dateHelper;
        this.noAnimation = noAnimation;
        // --- Common API
        this.allowClear = true;
        this.autoFocus = false;
        this.disabled = false;
        this.popupStyle = POPUP_STYLE_PATCH;
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
        function () { return void 0; });
        this.onTouchedFn = (/**
         * @return {?}
         */
        function () { return void 0; });
    }
    Object.defineProperty(AbstractPickerComponent.prototype, "realOpenState", {
        get: /**
         * @return {?}
         */
        function () {
            return this.picker.animationOpenState;
        } // Use picker's real open state to let re-render the picker's content when shown up
        ,
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AbstractPickerComponent.prototype.initValue = /**
     * @return {?}
     */
    function () {
        this.value = this.isRange ? [] : null;
    };
    /**
     * @return {?}
     */
    AbstractPickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Subscribe the every locale change if the Locale is not handled by user
        if (!this.locale) {
            this.i18n.localeChange.pipe(takeUntil(this.destroyed$)).subscribe((/**
             * @return {?}
             */
            function () { return _this.setLocale(); }));
        }
        // Default value
        this.initValue();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    AbstractPickerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.popupStyle) {
            // Always assign the popup style patch
            this.popupStyle = this.popupStyle ? tslib_1.__assign({}, this.popupStyle, POPUP_STYLE_PATCH) : POPUP_STYLE_PATCH;
        }
        // Mark as customized placeholder by user once PlaceHolder assigned at the first time
        if (changes.placeHolder && changes.placeHolder.firstChange && typeof this.placeHolder !== 'undefined') {
            this.isCustomPlaceHolder = true;
        }
        if (changes.locale) {
            this.setDefaultPlaceHolder();
        }
    };
    /**
     * @return {?}
     */
    AbstractPickerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyed$.next();
        this.destroyed$.complete();
    };
    /**
     * @return {?}
     */
    AbstractPickerComponent.prototype.closeOverlay = /**
     * @return {?}
     */
    function () {
        this.picker.hideOverlay();
    };
    /**
     * Common handle for value changes
     * @param value changed value
     */
    /**
     * Common handle for value changes
     * @param {?} value changed value
     * @return {?}
     */
    AbstractPickerComponent.prototype.onValueChange = /**
     * Common handle for value changes
     * @param {?} value changed value
     * @return {?}
     */
    function (value) {
        this.value = value;
        if (this.isRange) {
            /** @type {?} */
            var vAsRange = (/** @type {?} */ (this.value));
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
    };
    /**
     * Triggered when overlayOpen changes (different with realOpenState)
     * @param open The overlayOpen in picker component
     */
    /**
     * Triggered when overlayOpen changes (different with realOpenState)
     * @param {?} open The overlayOpen in picker component
     * @return {?}
     */
    AbstractPickerComponent.prototype.onOpenChange = /**
     * Triggered when overlayOpen changes (different with realOpenState)
     * @param {?} open The overlayOpen in picker component
     * @return {?}
     */
    function (open) {
        this.cmacsOnOpenChange.emit(open);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AbstractPickerComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.setValue(value);
        this.cdr.markForCheck();
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} fn
     * @return {?}
     */
    AbstractPickerComponent.prototype.registerOnChange = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeFn = fn;
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} fn
     * @return {?}
     */
    AbstractPickerComponent.prototype.registerOnTouched = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchedFn = fn;
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    AbstractPickerComponent.prototype.setDisabledState = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        this.disabled = disabled;
        this.cdr.markForCheck();
    };
    // ------------------------------------------------------------------------
    // | Internal methods
    // ------------------------------------------------------------------------
    // Reload locale from i18n with side effects
    // ------------------------------------------------------------------------
    // | Internal methods
    // ------------------------------------------------------------------------
    // Reload locale from i18n with side effects
    /**
     * @private
     * @return {?}
     */
    AbstractPickerComponent.prototype.setLocale = 
    // ------------------------------------------------------------------------
    // | Internal methods
    // ------------------------------------------------------------------------
    // Reload locale from i18n with side effects
    /**
     * @private
     * @return {?}
     */
    function () {
        this.locale = this.i18n.getLocaleData('DatePicker', {});
        this.setDefaultPlaceHolder();
        this.cdr.markForCheck();
    };
    /**
     * @private
     * @return {?}
     */
    AbstractPickerComponent.prototype.setDefaultPlaceHolder = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.isCustomPlaceHolder && this.locale) {
            this.placeHolder = this.isRange ? this.locale.lang.rangePlaceholder : this.locale.lang.placeholder;
        }
    };
    // Safe way of setting value with default
    // Safe way of setting value with default
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    AbstractPickerComponent.prototype.setValue = 
    // Safe way of setting value with default
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.isRange) {
            this.value = value ? ((/** @type {?} */ (value))).map((/**
             * @param {?} val
             * @return {?}
             */
            function (val) { return new CandyDate(val); })) : [];
        }
        else {
            this.value = value ? new CandyDate((/** @type {?} */ (value))) : null;
        }
    };
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
        style: [{ type: Input }],
        format: [{ type: Input }],
        value: [{ type: Input }],
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
    return AbstractPickerComponent;
}());
export { AbstractPickerComponent };
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
    AbstractPickerComponent.prototype.style;
    /** @type {?} */
    AbstractPickerComponent.prototype.format;
    /** @type {?} */
    AbstractPickerComponent.prototype.value;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtZGF0ZS1waWNrZXIvYWJzdHJhY3QtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTCxZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFFTixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLFlBQVksRUFBMEIsTUFBTSxvQkFBb0IsQ0FBQztBQUcxRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDeEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztJQUdwRCxpQkFBaUIsR0FBRyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUU7Ozs7OztBQUtsRDtJQU1FLGlDQUNZLElBQW1CLEVBQ25CLEdBQXNCLEVBQ3RCLFVBQTZCLEVBQ2hDLFdBQW9DO1FBSGpDLFNBQUksR0FBSixJQUFJLENBQWU7UUFDbkIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQXlCOztRQUdwQixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQU1qQyxlQUFVLEdBQVcsaUJBQWlCLENBQUM7UUFPN0Isc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUluRSxZQUFPLEdBQUcsS0FBSyxDQUFDLENBQUMsOENBQThDOztRQUVyRCxlQUFVLEdBQWtCLElBQUksT0FBTyxFQUFFLENBQUM7UUFDMUMsd0JBQW1CLEdBQUcsS0FBSyxDQUFDOzs7OztRQTZFdEMsZUFBVTs7O1FBQXlDLGNBQU0sT0FBQSxLQUFLLENBQUMsRUFBTixDQUFNLEVBQUM7UUFDaEUsZ0JBQVc7OztRQUFlLGNBQU0sT0FBQSxLQUFLLENBQUMsRUFBTixDQUFNLEVBQUM7SUF0R3BDLENBQUM7SUFUSixzQkFBSSxrREFBYTs7OztRQUFqQjtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztRQUN4QyxDQUFDLENBQUMsbUZBQW1GOzs7O09BQXBGOzs7O0lBaUNELDJDQUFTOzs7SUFBVDtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVELDBDQUFROzs7SUFBUjtRQUFBLGlCQVFDO1FBUEMseUVBQXlFO1FBQ3pFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUzs7O1lBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxTQUFTLEVBQUUsRUFBaEIsQ0FBZ0IsRUFBQyxDQUFDO1NBQzNGO1FBRUQsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVELDZDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7WUFDdEIsc0NBQXNDO1lBQ3RDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLHNCQUFNLElBQUksQ0FBQyxVQUFVLEVBQUssaUJBQWlCLEVBQUcsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO1NBQ3RHO1FBRUQscUZBQXFGO1FBQ3JGLElBQUksT0FBTyxDQUFDLFdBQVcsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLFdBQVcsSUFBSSxPQUFPLElBQUksQ0FBQyxXQUFXLEtBQUssV0FBVyxFQUFFO1lBQ3JHLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7U0FDakM7UUFFRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDbEIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7U0FDOUI7SUFDSCxDQUFDOzs7O0lBRUQsNkNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCw4Q0FBWTs7O0lBQVo7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILCtDQUFhOzs7OztJQUFiLFVBQWMsS0FBc0I7UUFDbEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFOztnQkFDVixRQUFRLEdBQUcsbUJBQUEsSUFBSSxDQUFDLEtBQUssRUFBZTtZQUMxQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2FBQ25FO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDckI7U0FDRjthQUFNO1lBQ0wsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNkLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxtQkFBQSxJQUFJLENBQUMsS0FBSyxFQUFhLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUN2RDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3ZCO1NBQ0Y7UUFDRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsOENBQVk7Ozs7O0lBQVosVUFBYSxJQUFhO1FBQ3hCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFVRCw0Q0FBVTs7OztJQUFWLFVBQVcsS0FBcUI7UUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxrQ0FBa0M7Ozs7OztJQUNsQyxrREFBZ0I7Ozs7OztJQUFoQixVQUFpQixFQUFPO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxrQ0FBa0M7Ozs7OztJQUNsQyxtREFBaUI7Ozs7OztJQUFqQixVQUFrQixFQUFPO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsa0RBQWdCOzs7O0lBQWhCLFVBQWlCLFFBQWlCO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELDJFQUEyRTtJQUMzRSxxQkFBcUI7SUFDckIsMkVBQTJFO0lBRTNFLDRDQUE0Qzs7Ozs7Ozs7O0lBQ3BDLDJDQUFTOzs7Ozs7Ozs7SUFBakI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRU8sdURBQXFCOzs7O0lBQTdCO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQzVDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUNwRztJQUNILENBQUM7SUFFRCx5Q0FBeUM7Ozs7Ozs7SUFDakMsMENBQVE7Ozs7Ozs7SUFBaEIsVUFBaUIsS0FBcUI7UUFDcEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFBLEtBQUssRUFBVSxDQUFDLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsSUFBSSxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQWxCLENBQWtCLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1NBQzVFO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUMsbUJBQUEsS0FBSyxFQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1NBQzFEO0lBQ0gsQ0FBQzs7NkJBbEpBLEtBQUs7NEJBQ0wsS0FBSzsyQkFDTCxLQUFLO3VCQUNMLEtBQUs7NEJBQ0wsS0FBSzsrQkFDTCxLQUFLO3lCQUNMLEtBQUs7OEJBQ0wsS0FBSzs2QkFDTCxLQUFLO29DQUNMLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSztvQ0FFTCxNQUFNO3lCQUVOLFNBQVMsU0FBQyxvQkFBb0I7O0lBakJOO1FBQWYsWUFBWSxFQUFFOzsrREFBbUI7SUFDbEI7UUFBZixZQUFZLEVBQUU7OzhEQUFtQjtJQUNsQjtRQUFmLFlBQVksRUFBRTs7NkRBQWtCO0lBQ2pCO1FBQWYsWUFBWSxFQUFFOzt5REFBZTtJQWdKekMsOEJBQUM7Q0FBQSxBQWhLRCxJQWdLQztTQWhLcUIsdUJBQXVCOzs7SUFhM0MsNkNBQTJDOztJQUMzQyw0Q0FBMkM7O0lBQzNDLDJDQUEwQzs7SUFDMUMsdUNBQXVDOztJQUN2Qyw0Q0FBMkI7O0lBQzNCLCtDQUE0Qzs7SUFDNUMseUNBQTJDOztJQUMzQyw4Q0FBd0M7O0lBQ3hDLDZDQUFnRDs7SUFDaEQsb0RBQW1DOztJQUNuQyx1Q0FBaUM7O0lBQ2pDLHdDQUF1Qjs7SUFDdkIseUNBQXdCOztJQUN4Qix3Q0FBdUM7O0lBRXZDLG9EQUFtRTs7Ozs7SUFFbkUseUNBQXdFOztJQUV4RSwwQ0FBZ0I7Ozs7O0lBRWhCLDZDQUFvRDs7Ozs7SUFDcEQsc0RBQXNDOztJQTZFdEMsNkNBQWdFOztJQUNoRSw4Q0FBdUM7Ozs7O0lBMUdyQyx1Q0FBNkI7Ozs7O0lBQzdCLHNDQUFnQzs7Ozs7SUFDaEMsNkNBQXVDOztJQUN2Qyw4Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UsIE56RGF0ZVBpY2tlckkxOG5JbnRlcmZhY2UsIE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5cclxuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnLi9saWIvY2FuZHktZGF0ZS9jYW5keS1kYXRlJztcclxuaW1wb3J0IHsgQ21hY3NQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL3BpY2tlci5jb21wb25lbnQnO1xyXG5cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtYXgtbGluZS1sZW5ndGhcclxuY29uc3QgUE9QVVBfU1RZTEVfUEFUQ0ggPSB7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH07IC8vIEFpbSB0byBvdmVycmlkZSBhbnRkJ3Mgc3R5bGUgdG8gc3VwcG9ydCBvdmVybGF5J3MgcG9zaXRpb24gc3RyYXRlZ3kgKHBvc2l0aW9uOmFic29sdXRlIHdpbGwgY2F1c2UgaXQgbm90IHdvcmtpbmcgYmVhY3VzZSB0aGUgb3ZlcmxheSBjYW4ndCBnZXQgdGhlIGhlaWdodC93aWR0aCBvZiBpdCdzIGNvbnRlbnQpXHJcblxyXG4vKipcclxuICogVGhlIGJhc2UgcGlja2VyIGZvciBhbGwgY29tbW9uIEFQSXNcclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdFBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuXHJcbiAgZ2V0IHJlYWxPcGVuU3RhdGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5waWNrZXIuYW5pbWF0aW9uT3BlblN0YXRlO1xyXG4gIH0gLy8gVXNlIHBpY2tlcidzIHJlYWwgb3BlbiBzdGF0ZSB0byBsZXQgcmUtcmVuZGVyIHRoZSBwaWNrZXIncyBjb250ZW50IHdoZW4gc2hvd24gdXBcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgaTE4bjogTnpJMThuU2VydmljZSxcclxuICAgIHByb3RlY3RlZCBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJvdGVjdGVkIGRhdGVIZWxwZXI6IERhdGVIZWxwZXJTZXJ2aWNlLFxyXG4gICAgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge31cclxuICAvLyAtLS0gQ29tbW9uIEFQSVxyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhbGxvd0NsZWFyID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYXV0b0ZvY3VzID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG9wZW46IGJvb2xlYW47XHJcbiAgQElucHV0KCkgY2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZGlzYWJsZWREYXRlOiAoZDogRGF0ZSkgPT4gYm9vbGVhbjtcclxuICBASW5wdXQoKSBsb2NhbGU6IE56RGF0ZVBpY2tlckkxOG5JbnRlcmZhY2U7XHJcbiAgQElucHV0KCkgcGxhY2VIb2xkZXI6IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gIEBJbnB1dCgpIHBvcHVwU3R5bGU6IG9iamVjdCA9IFBPUFVQX1NUWUxFX1BBVENIO1xyXG4gIEBJbnB1dCgpIGRyb3Bkb3duQ2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc2l6ZTogJ2xhcmdlJyB8ICdzbWFsbCc7XHJcbiAgQElucHV0KCkgc3R5bGU6IG9iamVjdDtcclxuICBASW5wdXQoKSBmb3JtYXQ6IHN0cmluZztcclxuICBASW5wdXQoKSB2YWx1ZTogQ29tcGF0aWJsZVZhbHVlIHwgbnVsbDtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNtYWNzT25PcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBAVmlld0NoaWxkKENtYWNzUGlja2VyQ29tcG9uZW50KSBwcm90ZWN0ZWQgcGlja2VyOiBDbWFjc1BpY2tlckNvbXBvbmVudDtcclxuXHJcbiAgaXNSYW5nZSA9IGZhbHNlOyAvLyBJbmRpY2F0ZSB3aGV0aGVyIHRoZSB2YWx1ZSBpcyBhIHJhbmdlIHZhbHVlXHJcblxyXG4gIHByb3RlY3RlZCBkZXN0cm95ZWQkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcclxuICBwcm90ZWN0ZWQgaXNDdXN0b21QbGFjZUhvbGRlciA9IGZhbHNlO1xyXG5cclxuICBpbml0VmFsdWUoKTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5pc1JhbmdlID8gW10gOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAvLyBTdWJzY3JpYmUgdGhlIGV2ZXJ5IGxvY2FsZSBjaGFuZ2UgaWYgdGhlIExvY2FsZSBpcyBub3QgaGFuZGxlZCBieSB1c2VyXHJcbiAgICBpZiAoIXRoaXMubG9jYWxlKSB7XHJcbiAgICAgIHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2V0TG9jYWxlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERlZmF1bHQgdmFsdWVcclxuICAgIHRoaXMuaW5pdFZhbHVlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5wb3B1cFN0eWxlKSB7XHJcbiAgICAgIC8vIEFsd2F5cyBhc3NpZ24gdGhlIHBvcHVwIHN0eWxlIHBhdGNoXHJcbiAgICAgIHRoaXMucG9wdXBTdHlsZSA9IHRoaXMucG9wdXBTdHlsZSA/IHsgLi4udGhpcy5wb3B1cFN0eWxlLCAuLi5QT1BVUF9TVFlMRV9QQVRDSCB9IDogUE9QVVBfU1RZTEVfUEFUQ0g7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWFyayBhcyBjdXN0b21pemVkIHBsYWNlaG9sZGVyIGJ5IHVzZXIgb25jZSBQbGFjZUhvbGRlciBhc3NpZ25lZCBhdCB0aGUgZmlyc3QgdGltZVxyXG4gICAgaWYgKGNoYW5nZXMucGxhY2VIb2xkZXIgJiYgY2hhbmdlcy5wbGFjZUhvbGRlci5maXJzdENoYW5nZSAmJiB0eXBlb2YgdGhpcy5wbGFjZUhvbGRlciAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgdGhpcy5pc0N1c3RvbVBsYWNlSG9sZGVyID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhbmdlcy5sb2NhbGUpIHtcclxuICAgICAgdGhpcy5zZXREZWZhdWx0UGxhY2VIb2xkZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95ZWQkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveWVkJC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VPdmVybGF5KCk6IHZvaWQge1xyXG4gICAgdGhpcy5waWNrZXIuaGlkZU92ZXJsYXkoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbW1vbiBoYW5kbGUgZm9yIHZhbHVlIGNoYW5nZXNcclxuICAgKiBAcGFyYW0gdmFsdWUgY2hhbmdlZCB2YWx1ZVxyXG4gICAqL1xyXG4gIG9uVmFsdWVDaGFuZ2UodmFsdWU6IENvbXBhdGlibGVWYWx1ZSk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICBjb25zdCB2QXNSYW5nZSA9IHRoaXMudmFsdWUgYXMgQ2FuZHlEYXRlW107XHJcbiAgICAgIGlmICh2QXNSYW5nZS5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlRm4oW3ZBc1JhbmdlWzBdLm5hdGl2ZURhdGUsIHZBc1JhbmdlWzFdLm5hdGl2ZURhdGVdKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlRm4oW10pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy52YWx1ZSkge1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VGbigodGhpcy52YWx1ZSBhcyBDYW5keURhdGUpLm5hdGl2ZURhdGUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VGbihudWxsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5vblRvdWNoZWRGbigpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHJpZ2dlcmVkIHdoZW4gb3ZlcmxheU9wZW4gY2hhbmdlcyAoZGlmZmVyZW50IHdpdGggcmVhbE9wZW5TdGF0ZSlcclxuICAgKiBAcGFyYW0gb3BlbiBUaGUgb3ZlcmxheU9wZW4gaW4gcGlja2VyIGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIG9uT3BlbkNoYW5nZShvcGVuOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmNtYWNzT25PcGVuQ2hhbmdlLmVtaXQob3Blbik7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAvLyB8IENvbnRyb2wgdmFsdWUgYWNjZXNzb3IgaW1wbGVtZW50c1xyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAvLyBOT1RFOiBvbkNoYW5nZUZuL29uVG91Y2hlZEZuIHdpbGwgbm90IGJlIGFzc2lnbmVkIGlmIHVzZXIgbm90IHVzZSBhcyBuZ01vZGVsXHJcbiAgb25DaGFuZ2VGbjogKHZhbDogQ29tcGF0aWJsZURhdGUgfCBudWxsKSA9PiB2b2lkID0gKCkgPT4gdm9pZCAwO1xyXG4gIG9uVG91Y2hlZEZuOiAoKSA9PiB2b2lkID0gKCkgPT4gdm9pZCAwO1xyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBDb21wYXRpYmxlRGF0ZSk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2VGbiA9IGZuO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkRm4gPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBkaXNhYmxlZDtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgLy8gfCBJbnRlcm5hbCBtZXRob2RzXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gIC8vIFJlbG9hZCBsb2NhbGUgZnJvbSBpMThuIHdpdGggc2lkZSBlZmZlY3RzXHJcbiAgcHJpdmF0ZSBzZXRMb2NhbGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdEYXRlUGlja2VyJywge30pO1xyXG4gICAgdGhpcy5zZXREZWZhdWx0UGxhY2VIb2xkZXIoKTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXREZWZhdWx0UGxhY2VIb2xkZXIoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuaXNDdXN0b21QbGFjZUhvbGRlciAmJiB0aGlzLmxvY2FsZSkge1xyXG4gICAgICB0aGlzLnBsYWNlSG9sZGVyID0gdGhpcy5pc1JhbmdlID8gdGhpcy5sb2NhbGUubGFuZy5yYW5nZVBsYWNlaG9sZGVyIDogdGhpcy5sb2NhbGUubGFuZy5wbGFjZWhvbGRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFNhZmUgd2F5IG9mIHNldHRpbmcgdmFsdWUgd2l0aCBkZWZhdWx0XHJcbiAgcHJpdmF0ZSBzZXRWYWx1ZSh2YWx1ZTogQ29tcGF0aWJsZURhdGUpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlID8gKHZhbHVlIGFzIERhdGVbXSkubWFwKHZhbCA9PiBuZXcgQ2FuZHlEYXRlKHZhbCkpIDogW107XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWUgPyBuZXcgQ2FuZHlEYXRlKHZhbHVlIGFzIERhdGUpIDogbnVsbDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIENvbXBhdGlibGVWYWx1ZSA9IENhbmR5RGF0ZSB8IENhbmR5RGF0ZVtdO1xyXG5cclxuZXhwb3J0IHR5cGUgQ29tcGF0aWJsZURhdGUgPSBEYXRlIHwgRGF0ZVtdO1xyXG4iXX0=