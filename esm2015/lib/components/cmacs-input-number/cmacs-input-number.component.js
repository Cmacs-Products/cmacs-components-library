/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FocusMonitor } from '@angular/cdk/a11y';
import { DOWN_ARROW, ENTER, UP_ARROW } from '@angular/cdk/keycodes';
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { isNotNil, InputBoolean } from 'ng-zorro-antd/core';
export class CmacsInputNumberComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} cdr
     * @param {?} focusMonitor
     */
    constructor(elementRef, renderer, cdr, focusMonitor) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        this.isFocused = false;
        this.disabledUp = false;
        this.disabledDown = false;
        this.onChange = (/**
         * @return {?}
         */
        () => null);
        this.onTouched = (/**
         * @return {?}
         */
        () => null);
        // tslint:disable-next-line: member-ordering
        this.cmacsBlur = new EventEmitter();
        // tslint:disable-next-line: member-ordering
        this.cmacsFocus = new EventEmitter();
        // tslint:disable-next-line: member-ordering
        this.size = 'default';
        // tslint:disable-next-line: member-ordering
        this.min = -Infinity;
        // tslint:disable-next-line: member-ordering
        this.max = Infinity;
        this.parser = (/**
         * @param {?} value
         * @return {?}
         */
        (value) => value); // tslint:disable-line:no-any
        // tslint:disable-next-line: member-ordering
        this.placeHolder = '';
        // tslint:disable-next-line: member-ordering
        this.cmacsStep = 1;
        // tslint:disable-next-line: member-ordering
        this.disabled = false;
        // tslint:disable-next-line: member-ordering
        this.autoFocus = false;
        this.formatter = (/**
         * @param {?} value
         * @return {?}
         */
        value => value);
        renderer.addClass(elementRef.nativeElement, 'ant-input-number');
    }
    // tslint:disable-line:no-any
    /**
     * @return {?}
     */
    updateAutoFocus() {
        if (this.autoFocus) {
            this.renderer.setAttribute(this.inputElement.nativeElement, 'autofocus', 'autofocus');
        }
        else {
            this.renderer.removeAttribute(this.inputElement.nativeElement, 'autofocus');
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onModelChange(value) {
        this.actualValue = this.parser(value
            .trim()
            .replace(/。/g, '.')
            .replace(/[^\w\.-]+/g, ''));
        this.inputElement.nativeElement.value = this.actualValue;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getCurrentValidValue(value) {
        /** @type {?} */
        let val = value;
        if (val === '') {
            val = '';
        }
        else if (!this.isNotCompleteNumber(val)) {
            val = (/** @type {?} */ (this.getValidValue(val)));
        }
        else {
            val = this.value;
        }
        return this.toNumber(val);
    }
    // '1.' '1x' 'xx' '' => are not complete numbers
    /**
     * @param {?} num
     * @return {?}
     */
    isNotCompleteNumber(num) {
        return (isNaN((/** @type {?} */ (num))) ||
            num === '' ||
            num === null ||
            !!(num && num.toString().indexOf('.') === num.toString().length - 1));
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    getValidValue(value) {
        /** @type {?} */
        let val = parseFloat((/** @type {?} */ (value)));
        if (isNaN(val)) {
            return value;
        }
        if (val < this.min) {
            val = this.min;
        }
        if (val > this.max) {
            val = this.max;
        }
        return val;
    }
    /**
     * @param {?} num
     * @return {?}
     */
    toNumber(num) {
        if (this.isNotCompleteNumber(num)) {
            return (/** @type {?} */ (num));
        }
        if (isNotNil(this.precision)) {
            return Number(Number(num).toFixed(this.precision));
        }
        return Number(num);
    }
    /**
     * @return {?}
     */
    setValidateValue() {
        /** @type {?} */
        const value = this.getCurrentValidValue(this.actualValue);
        this.setValue(value, `${this.value}` !== `${value}`);
    }
    /**
     * @return {?}
     */
    onBlur() {
        this.isFocused = false;
        this.setValidateValue();
    }
    /**
     * @return {?}
     */
    onFocus() {
        this.isFocused = true;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    getRatio(e) {
        /** @type {?} */
        let ratio = 1;
        if (e.metaKey || e.ctrlKey) {
            ratio = 0.1;
        }
        else if (e.shiftKey) {
            ratio = 10;
        }
        return ratio;
    }
    /**
     * @param {?} e
     * @param {?=} ratio
     * @return {?}
     */
    down(e, ratio) {
        if (!this.isFocused) {
            this.focus();
        }
        this.step('down', e, ratio);
    }
    /**
     * @param {?} e
     * @param {?=} ratio
     * @return {?}
     */
    up(e, ratio) {
        if (!this.isFocused) {
            this.focus();
        }
        this.step('up', e, ratio);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getPrecision(value) {
        /** @type {?} */
        const valueString = value.toString();
        if (valueString.indexOf('e-') >= 0) {
            return parseInt(valueString.slice(valueString.indexOf('e-') + 2), 10);
        }
        /** @type {?} */
        let precision = 0;
        if (valueString.indexOf('.') >= 0) {
            precision = valueString.length - valueString.indexOf('.') - 1;
        }
        return precision;
    }
    /**
     * @param {?} currentValue
     * @param {?} ratio
     * @return {?}
     */
    getMaxPrecision(currentValue, ratio) {
        if (isNotNil(this.precision)) {
            return this.precision;
        }
        /** @type {?} */
        const ratioPrecision = this.getPrecision(ratio);
        /** @type {?} */
        const stepPrecision = this.getPrecision(this.cmacsStep);
        /** @type {?} */
        const currentValuePrecision = this.getPrecision((/** @type {?} */ (currentValue)));
        if (!currentValue) {
            return ratioPrecision + stepPrecision;
        }
        return Math.max(currentValuePrecision, ratioPrecision + stepPrecision);
    }
    /**
     * @param {?} currentValue
     * @param {?} ratio
     * @return {?}
     */
    getPrecisionFactor(currentValue, ratio) {
        /** @type {?} */
        const precision = this.getMaxPrecision(currentValue, ratio);
        return Math.pow(10, precision);
    }
    /**
     * @param {?} val
     * @param {?} rat
     * @return {?}
     */
    upStep(val, rat) {
        /** @type {?} */
        const precisionFactor = this.getPrecisionFactor(val, rat);
        /** @type {?} */
        const precision = Math.abs(this.getMaxPrecision(val, rat));
        /** @type {?} */
        let result;
        if (typeof val === 'number') {
            result = ((precisionFactor * val + precisionFactor * this.cmacsStep * rat) / precisionFactor).toFixed(precision);
        }
        else {
            result = this.min === -Infinity ? this.cmacsStep : this.min;
        }
        return this.toNumber(result);
    }
    /**
     * @param {?} val
     * @param {?} rat
     * @return {?}
     */
    downStep(val, rat) {
        /** @type {?} */
        const precisionFactor = this.getPrecisionFactor(val, rat);
        /** @type {?} */
        const precision = Math.abs(this.getMaxPrecision(val, rat));
        /** @type {?} */
        let result;
        if (typeof val === 'number') {
            result = ((precisionFactor * val - precisionFactor * this.cmacsStep * rat) / precisionFactor).toFixed(precision);
        }
        else {
            result = this.min === -Infinity ? -this.cmacsStep : this.min;
        }
        return this.toNumber(result);
    }
    /**
     * @param {?} type
     * @param {?} e
     * @param {?=} ratio
     * @return {?}
     */
    step(type, e, ratio = 1) {
        this.stop();
        e.preventDefault();
        if (this.disabled) {
            return;
        }
        /** @type {?} */
        const value = this.getCurrentValidValue(this.actualValue) || 0;
        /** @type {?} */
        let val = 0;
        if (type === 'up') {
            val = this.upStep(value, ratio);
        }
        else if (type === 'down') {
            val = this.downStep(value, ratio);
        }
        /** @type {?} */
        const outOfRange = val > this.max || val < this.min;
        if (val > this.max) {
            val = this.max;
        }
        else if (val < this.min) {
            val = this.min;
        }
        this.setValue(val, true);
        this.isFocused = true;
        if (outOfRange) {
            return;
        }
        this.autoStepTimer = window.setTimeout((/**
         * @return {?}
         */
        () => {
            this[type](e, ratio, true);
        }), 600);
    }
    /**
     * @return {?}
     */
    stop() {
        if (this.autoStepTimer) {
            clearTimeout(this.autoStepTimer);
        }
    }
    /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    setValue(value, emit) {
        if (emit && `${this.value}` !== `${value}`) {
            this.onChange(value);
        }
        this.value = value;
        this.actualValue = value;
        /** @type {?} */
        const displayValue = isNotNil(this.formatter(this.value)) ? this.formatter(this.value) : '';
        this.displayValue = displayValue;
        this.inputElement.nativeElement.value = displayValue;
        this.disabledUp = this.disabledDown = false;
        if (value || value === 0) {
            /** @type {?} */
            const val = Number(value);
            if (val >= this.max) {
                this.disabledUp = true;
            }
            if (val <= this.min) {
                this.disabledDown = true;
            }
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
        // tslint:disable-next-line: deprecation
        if (e.code === 'ArrowUp' || e.keyCode === UP_ARROW) {
            /** @type {?} */
            const ratio = this.getRatio(e);
            this.up(e, ratio);
            this.stop();
            // tslint:disable-next-line: deprecation
        }
        else if (e.code === 'ArrowDown' || e.keyCode === DOWN_ARROW) {
            /** @type {?} */
            const ratio = this.getRatio(e);
            this.down(e, ratio);
            this.stop();
            // tslint:disable-next-line: deprecation
        }
        else if (e.keyCode === ENTER) {
            this.setValidateValue();
        }
    }
    /**
     * @return {?}
     */
    onKeyUp() {
        this.stop();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.setValue(value, false);
        this.cdr.markForCheck();
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
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    focus() {
        this.focusMonitor.focusVia(this.inputElement, 'keyboard');
    }
    /**
     * @return {?}
     */
    blur() {
        this.inputElement.nativeElement.blur();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.focusMonitor.monitor(this.elementRef, true).subscribe((/**
         * @param {?} focusOrigin
         * @return {?}
         */
        focusOrigin => {
            if (!focusOrigin) {
                this.onBlur();
                this.cmacsBlur.emit();
                Promise.resolve().then((/**
                 * @return {?}
                 */
                () => this.onTouched()));
            }
            else {
                this.onFocus();
                this.cmacsFocus.emit();
            }
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.autoFocus) {
            this.updateAutoFocus();
        }
        if (changes.formatter) {
            /** @type {?} */
            const value = this.getCurrentValidValue(this.actualValue);
            this.setValue(value, true);
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.autoFocus) {
            this.focus();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.elementRef);
    }
}
CmacsInputNumberComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line: component-selector
                selector: 'cmacs-input-number',
                exportAs: 'cmacsInputNumber',
                template: "<div class=\"ant-input-number-handler-wrap\">\r\n  <span unselectable=\"unselectable\"\r\n    class=\"ant-input-number-handler ant-input-number-handler-up\"\r\n    (mousedown)=\"up($event)\"\r\n    (mouseup)=\"stop()\"\r\n    (mouseleave)=\"stop()\"\r\n    [class.ant-input-number-handler-up-disabled]=\"disabledUp\">\r\n    <i nz-icon type=\"caret-up\" class=\"ant-input-number-handler-up-inner\"></i>\r\n  </span>\r\n  <span unselectable=\"unselectable\"\r\n    class=\"ant-input-number-handler ant-input-number-handler-down\"\r\n    (mousedown)=\"down($event)\"\r\n    (mouseup)=\"stop()\"\r\n    (mouseleave)=\"stop()\"\r\n    [class.ant-input-number-handler-down-disabled]=\"disabledDown\">\r\n    <i nz-icon type=\"caret-down\" class=\"ant-input-number-handler-down-inner\"></i>\r\n  </span>\r\n</div>\r\n<div class=\"ant-input-number-input-wrap\">\r\n  <input #inputElement\r\n    autocomplete=\"off\"\r\n    class=\"ant-input-number-input\"\r\n    [disabled]=\"disabled\"\r\n    [attr.min]=\"min\"\r\n    [attr.max]=\"max\"\r\n    [placeholder]=\"placeHolder\"\r\n    [attr.step]=\"step\"\r\n    (keydown)=\"onKeyDown($event)\"\r\n    (keyup)=\"onKeyUp()\"\r\n    [ngModel]=\"displayValue\"\r\n    (ngModelChange)=\"onModelChange($event)\"/>\r\n</div>\r\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => CmacsInputNumberComponent)),
                        multi: true
                    }
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                // tslint:disable-next-line: use-host-property-decorator
                host: {
                    '[class.ant-input-number-focused]': 'isFocused',
                    '[class.ant-input-number-lg]': `size === 'large'`,
                    '[class.ant-input-number-sm]': `size === 'small'`,
                    '[class.ant-input-number-disabled]': 'disabled'
                },
                styles: [".ant-input-number-handler-wrap{opacity:1!important;border:none}.ant-input-number-handler-down{border:none}.ant-input-number-handler-down-inner svg,.ant-input-number-handler-up-inner svg{font-size:18px;color:#bec4cd}.ant-input-number-handler-down-inner{margin-top:-10px}.ant-input-number:not(.cmacs-datetime-picker-input-number){height:34px;border:1px solid #dee0e5;color:#acb3bf;box-shadow:none;outline:0;border-radius:3px;width:100%}.ant-input-number:focus-within{color:#656c79;border:1px solid #dee0e5;box-shadow:none}.ant-input-number:hover{border:1px solid #bec4cd;box-shadow:none}.ant-input-number:hover .ant-input-number-handler-down-inner svg,.ant-input-number:hover .ant-input-number-handler-up-inner svg{color:#656c79;box-shadow:none}.ant-input-number:focus-within .ant-input-number-handler-down-inner svg,.ant-input-number:focus-within .ant-input-number-handler-up-inner svg{color:#656c79;box-shadow:none}.ant-input-number-handler-down-inner svg:hover,.ant-input-number-handler-up-inner svg:hover{color:#2a7cff!important}.ant-input-number-disabled{background-color:#f6f7fb!important;border-color:#dee0e5;cursor:not-allowed}.ant-input-number-disabled:hover{border-color:#dee0e5}.ant-input-number-disabled .ant-input-number-handler-wrap{display:inherit;background-color:#f6f7fb}.ant-input-number-handler-wrap:hover .ant-input-number-handler{height:50%}.ant-input-number-handler-down:hover,.ant-input-number-handler-up:hover{height:50%!important}.ant-input-number-disabled .ant-input-number-handler-wrap .ant-input-number-handler-down svg,.ant-input-number-disabled .ant-input-number-handler-wrap .ant-input-number-handler-up svg{color:#bec4cd!important}.ant-input-number-disabled .ant-input-number-handler-wrap .ant-input-number-handler:hover{cursor:not-allowed!important}"]
            }] }
];
/** @nocollapse */
CmacsInputNumberComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: FocusMonitor }
];
CmacsInputNumberComponent.propDecorators = {
    cmacsBlur: [{ type: Output }],
    cmacsFocus: [{ type: Output }],
    inputElement: [{ type: ViewChild, args: ['inputElement',] }],
    size: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    parser: [{ type: Input }],
    precision: [{ type: Input }],
    placeHolder: [{ type: Input }],
    cmacsStep: [{ type: Input }],
    disabled: [{ type: Input }],
    autoFocus: [{ type: Input }],
    formatter: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsInputNumberComponent.prototype, "disabled", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsInputNumberComponent.prototype, "autoFocus", void 0);
if (false) {
    /**
     * @type {?}
     * @private
     */
    CmacsInputNumberComponent.prototype.autoStepTimer;
    /**
     * @type {?}
     * @private
     */
    CmacsInputNumberComponent.prototype.actualValue;
    /**
     * @type {?}
     * @private
     */
    CmacsInputNumberComponent.prototype.value;
    /** @type {?} */
    CmacsInputNumberComponent.prototype.displayValue;
    /** @type {?} */
    CmacsInputNumberComponent.prototype.isFocused;
    /** @type {?} */
    CmacsInputNumberComponent.prototype.disabledUp;
    /** @type {?} */
    CmacsInputNumberComponent.prototype.disabledDown;
    /** @type {?} */
    CmacsInputNumberComponent.prototype.onChange;
    /** @type {?} */
    CmacsInputNumberComponent.prototype.onTouched;
    /** @type {?} */
    CmacsInputNumberComponent.prototype.cmacsBlur;
    /** @type {?} */
    CmacsInputNumberComponent.prototype.cmacsFocus;
    /** @type {?} */
    CmacsInputNumberComponent.prototype.inputElement;
    /** @type {?} */
    CmacsInputNumberComponent.prototype.size;
    /** @type {?} */
    CmacsInputNumberComponent.prototype.min;
    /** @type {?} */
    CmacsInputNumberComponent.prototype.max;
    /** @type {?} */
    CmacsInputNumberComponent.prototype.parser;
    /** @type {?} */
    CmacsInputNumberComponent.prototype.precision;
    /** @type {?} */
    CmacsInputNumberComponent.prototype.placeHolder;
    /** @type {?} */
    CmacsInputNumberComponent.prototype.cmacsStep;
    /** @type {?} */
    CmacsInputNumberComponent.prototype.disabled;
    /** @type {?} */
    CmacsInputNumberComponent.prototype.autoFocus;
    /** @type {?} */
    CmacsInputNumberComponent.prototype.formatter;
    /**
     * @type {?}
     * @private
     */
    CmacsInputNumberComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    CmacsInputNumberComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    CmacsInputNumberComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    CmacsInputNumberComponent.prototype.focusMonitor;
    /* Skipping unhandled member: [property: string]: any;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtaW5wdXQtbnVtYmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtaW5wdXQtbnVtYmVyL2NtYWNzLWlucHV0LW51bWJlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEUsT0FBTyxFQUNMLFVBQVUsRUFFVix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBQ04sU0FBUyxFQUVULFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFpQixNQUFNLG9CQUFvQixDQUFDO0FBeUIzRSxNQUFNLE9BQU8seUJBQXlCOzs7Ozs7O0lBd1NwQyxZQUNVLFVBQXNCLEVBQ3RCLFFBQW1CLEVBQ25CLEdBQXNCLEVBQ3RCLFlBQTBCO1FBSDFCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQXZTcEMsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLGFBQVE7OztRQUE0QixHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUM7UUFDL0MsY0FBUzs7O1FBQWUsR0FBRyxFQUFF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RXBELHlDQUF5Qzs7SUFFekMsd0NBQXlCOztJQUV6Qix3Q0FBd0I7O0lBQ3hCLDJDQUF3Qzs7SUFFeEMsOENBQTJCOztJQUUzQixnREFBMEI7O0lBRTFCLDhDQUF1Qjs7SUFFdkIsNkNBQTBDOztJQUUxQyw4Q0FBMkM7O0lBQzNDLDhDQUF3RTs7Ozs7SUF3UXRFLCtDQUE4Qjs7Ozs7SUFDOUIsNkNBQTJCOzs7OztJQUMzQix3Q0FBOEI7Ozs7O0lBQzlCLGlEQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcclxuaW1wb3J0IHsgRE9XTl9BUlJPVywgRU5URVIsIFVQX0FSUk9XIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHtcclxuICBmb3J3YXJkUmVmLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgaXNOb3ROaWwsIElucHV0Qm9vbGVhbiwgTnpTaXplTERTVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2NtYWNzLWlucHV0LW51bWJlcicsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0lucHV0TnVtYmVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtaW5wdXQtbnVtYmVyLmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENtYWNzSW5wdXROdW1iZXJDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB1c2UtaG9zdC1wcm9wZXJ0eS1kZWNvcmF0b3JcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1udW1iZXItZm9jdXNlZF0nOiAnaXNGb2N1c2VkJyxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LW51bWJlci1sZ10nOiBgc2l6ZSA9PT0gJ2xhcmdlJ2AsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1udW1iZXItc21dJzogYHNpemUgPT09ICdzbWFsbCdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtbnVtYmVyLWRpc2FibGVkXSc6ICdkaXNhYmxlZCdcclxuICB9LFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWlucHV0LW51bWJlci5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0lucHV0TnVtYmVyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgYXV0b1N0ZXBUaW1lcjogbnVtYmVyO1xyXG4gIHByaXZhdGUgYWN0dWFsVmFsdWU6IHN0cmluZyB8IG51bWJlcjtcclxuICBwcml2YXRlIHZhbHVlOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgZGlzcGxheVZhbHVlOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgaXNGb2N1c2VkID0gZmFsc2U7XHJcbiAgZGlzYWJsZWRVcCA9IGZhbHNlO1xyXG4gIGRpc2FibGVkRG93biA9IGZhbHNlO1xyXG4gIG9uQ2hhbmdlOiAodmFsdWU6IG51bWJlcikgPT4gdm9pZCA9ICgpID0+IG51bGw7XHJcbiAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY21hY3NCbHVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBjbWFjc0ZvY3VzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcpIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBzaXplOiBOelNpemVMRFNUeXBlID0gJ2RlZmF1bHQnO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIG1pbiA9IC1JbmZpbml0eTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIG1heCA9IEluZmluaXR5O1xyXG4gIEBJbnB1dCgpIHBhcnNlciA9ICh2YWx1ZTogYW55KSA9PiB2YWx1ZTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIHByZWNpc2lvbjogbnVtYmVyO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQElucHV0KCkgcGxhY2VIb2xkZXIgPSAnJztcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIGNtYWNzU3RlcCA9IDE7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhdXRvRm9jdXMgPSBmYWxzZTtcclxuICBASW5wdXQoKSBmb3JtYXR0ZXI6ICh2YWx1ZTogbnVtYmVyKSA9PiBzdHJpbmcgfCBudW1iZXIgPSB2YWx1ZSA9PiB2YWx1ZTtcclxuXHJcbiAgW3Byb3BlcnR5OiBzdHJpbmddOiBhbnk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcblxyXG4gIHVwZGF0ZUF1dG9Gb2N1cygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmF1dG9Gb2N1cykge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnYXV0b2ZvY3VzJywgJ2F1dG9mb2N1cycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2F1dG9mb2N1cycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Nb2RlbENoYW5nZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmFjdHVhbFZhbHVlID0gdGhpcy5wYXJzZXIoXHJcbiAgICAgIHZhbHVlXHJcbiAgICAgICAgLnRyaW0oKVxyXG4gICAgICAgIC5yZXBsYWNlKC/jgIIvZywgJy4nKVxyXG4gICAgICAgIC5yZXBsYWNlKC9bXlxcd1xcLi1dKy9nLCAnJylcclxuICAgICk7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlID0gdGhpcy5hY3R1YWxWYWx1ZTtcclxuICB9XHJcblxyXG4gIGdldEN1cnJlbnRWYWxpZFZhbHVlKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgbGV0IHZhbCA9IHZhbHVlO1xyXG4gICAgaWYgKHZhbCA9PT0gJycpIHtcclxuICAgICAgdmFsID0gJyc7XHJcbiAgICB9IGVsc2UgaWYgKCF0aGlzLmlzTm90Q29tcGxldGVOdW1iZXIodmFsKSkge1xyXG4gICAgICB2YWwgPSB0aGlzLmdldFZhbGlkVmFsdWUodmFsKSBhcyBzdHJpbmc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YWwgPSB0aGlzLnZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMudG9OdW1iZXIodmFsKTtcclxuICB9XHJcblxyXG4gIC8vICcxLicgJzF4JyAneHgnICcnID0+IGFyZSBub3QgY29tcGxldGUgbnVtYmVyc1xyXG4gIGlzTm90Q29tcGxldGVOdW1iZXIobnVtOiBzdHJpbmcgfCBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIGlzTmFOKG51bSBhcyBudW1iZXIpIHx8XHJcbiAgICAgIG51bSA9PT0gJycgfHxcclxuICAgICAgbnVtID09PSBudWxsIHx8XHJcbiAgICAgICEhKG51bSAmJiBudW0udG9TdHJpbmcoKS5pbmRleE9mKCcuJykgPT09IG51bS50b1N0cmluZygpLmxlbmd0aCAtIDEpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0VmFsaWRWYWx1ZSh2YWx1ZT86IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB8IG51bWJlciB8IHVuZGVmaW5lZCB7XHJcbiAgICBsZXQgdmFsID0gcGFyc2VGbG9hdCh2YWx1ZSBhcyBzdHJpbmcpO1xyXG4gICAgaWYgKGlzTmFOKHZhbCkpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbCA8IHRoaXMubWluKSB7XHJcbiAgICAgIHZhbCA9IHRoaXMubWluO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbCA+IHRoaXMubWF4KSB7XHJcbiAgICAgIHZhbCA9IHRoaXMubWF4O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbDtcclxuICB9XHJcblxyXG4gIHRvTnVtYmVyKG51bTogc3RyaW5nIHwgbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGlmICh0aGlzLmlzTm90Q29tcGxldGVOdW1iZXIobnVtKSkge1xyXG4gICAgICByZXR1cm4gbnVtIGFzIG51bWJlcjtcclxuICAgIH1cclxuICAgIGlmIChpc05vdE5pbCh0aGlzLnByZWNpc2lvbikpIHtcclxuICAgICAgcmV0dXJuIE51bWJlcihOdW1iZXIobnVtKS50b0ZpeGVkKHRoaXMucHJlY2lzaW9uKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTnVtYmVyKG51bSk7XHJcbiAgfVxyXG5cclxuICBzZXRWYWxpZGF0ZVZhbHVlKCk6IHZvaWQge1xyXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldEN1cnJlbnRWYWxpZFZhbHVlKHRoaXMuYWN0dWFsVmFsdWUpO1xyXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSwgYCR7dGhpcy52YWx1ZX1gICE9PSBgJHt2YWx1ZX1gKTtcclxuICB9XHJcblxyXG4gIG9uQmx1cigpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNGb2N1c2VkID0gZmFsc2U7XHJcbiAgICB0aGlzLnNldFZhbGlkYXRlVmFsdWUoKTtcclxuICB9XHJcblxyXG4gIG9uRm9jdXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBnZXRSYXRpbyhlOiBLZXlib2FyZEV2ZW50KTogbnVtYmVyIHtcclxuICAgIGxldCByYXRpbyA9IDE7XHJcbiAgICBpZiAoZS5tZXRhS2V5IHx8IGUuY3RybEtleSkge1xyXG4gICAgICByYXRpbyA9IDAuMTtcclxuICAgIH0gZWxzZSBpZiAoZS5zaGlmdEtleSkge1xyXG4gICAgICByYXRpbyA9IDEwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJhdGlvO1xyXG4gIH1cclxuXHJcbiAgZG93bihlOiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudCwgcmF0aW8/OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5pc0ZvY3VzZWQpIHtcclxuICAgICAgdGhpcy5mb2N1cygpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdGVwKCdkb3duJywgZSwgcmF0aW8pO1xyXG4gIH1cclxuXHJcbiAgdXAoZTogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQsIHJhdGlvPzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuaXNGb2N1c2VkKSB7XHJcbiAgICAgIHRoaXMuZm9jdXMoKTtcclxuICAgIH1cclxuICAgIHRoaXMuc3RlcCgndXAnLCBlLCByYXRpbyk7XHJcbiAgfVxyXG5cclxuICBnZXRQcmVjaXNpb24odmFsdWU6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICBpZiAodmFsdWVTdHJpbmcuaW5kZXhPZignZS0nKSA+PSAwKSB7XHJcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZVN0cmluZy5zbGljZSh2YWx1ZVN0cmluZy5pbmRleE9mKCdlLScpICsgMiksIDEwKTtcclxuICAgIH1cclxuICAgIGxldCBwcmVjaXNpb24gPSAwO1xyXG4gICAgaWYgKHZhbHVlU3RyaW5nLmluZGV4T2YoJy4nKSA+PSAwKSB7XHJcbiAgICAgIHByZWNpc2lvbiA9IHZhbHVlU3RyaW5nLmxlbmd0aCAtIHZhbHVlU3RyaW5nLmluZGV4T2YoJy4nKSAtIDE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJlY2lzaW9uO1xyXG4gIH1cclxuXHJcbiAgZ2V0TWF4UHJlY2lzaW9uKGN1cnJlbnRWYWx1ZTogc3RyaW5nIHwgbnVtYmVyLCByYXRpbzogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGlmIChpc05vdE5pbCh0aGlzLnByZWNpc2lvbikpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucHJlY2lzaW9uO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmF0aW9QcmVjaXNpb24gPSB0aGlzLmdldFByZWNpc2lvbihyYXRpbyk7XHJcbiAgICBjb25zdCBzdGVwUHJlY2lzaW9uID0gdGhpcy5nZXRQcmVjaXNpb24odGhpcy5jbWFjc1N0ZXApO1xyXG4gICAgY29uc3QgY3VycmVudFZhbHVlUHJlY2lzaW9uID0gdGhpcy5nZXRQcmVjaXNpb24oY3VycmVudFZhbHVlIGFzIG51bWJlcik7XHJcbiAgICBpZiAoIWN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICByZXR1cm4gcmF0aW9QcmVjaXNpb24gKyBzdGVwUHJlY2lzaW9uO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIE1hdGgubWF4KGN1cnJlbnRWYWx1ZVByZWNpc2lvbiwgcmF0aW9QcmVjaXNpb24gKyBzdGVwUHJlY2lzaW9uKTtcclxuICB9XHJcblxyXG4gIGdldFByZWNpc2lvbkZhY3RvcihjdXJyZW50VmFsdWU6IHN0cmluZyB8IG51bWJlciwgcmF0aW86IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCBwcmVjaXNpb24gPSB0aGlzLmdldE1heFByZWNpc2lvbihjdXJyZW50VmFsdWUsIHJhdGlvKTtcclxuICAgIHJldHVybiBNYXRoLnBvdygxMCwgcHJlY2lzaW9uKTtcclxuICB9XHJcblxyXG4gIHVwU3RlcCh2YWw6IHN0cmluZyB8IG51bWJlciwgcmF0OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgY29uc3QgcHJlY2lzaW9uRmFjdG9yID0gdGhpcy5nZXRQcmVjaXNpb25GYWN0b3IodmFsLCByYXQpO1xyXG4gICAgY29uc3QgcHJlY2lzaW9uID0gTWF0aC5hYnModGhpcy5nZXRNYXhQcmVjaXNpb24odmFsLCByYXQpKTtcclxuICAgIGxldCByZXN1bHQ7XHJcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcclxuICAgICAgcmVzdWx0ID0gKChwcmVjaXNpb25GYWN0b3IgKiB2YWwgKyBwcmVjaXNpb25GYWN0b3IgKiB0aGlzLmNtYWNzU3RlcCAqIHJhdCkgLyBwcmVjaXNpb25GYWN0b3IpLnRvRml4ZWQocHJlY2lzaW9uKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc3VsdCA9IHRoaXMubWluID09PSAtSW5maW5pdHkgPyB0aGlzLmNtYWNzU3RlcCA6IHRoaXMubWluO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMudG9OdW1iZXIocmVzdWx0KTtcclxuICB9XHJcblxyXG4gIGRvd25TdGVwKHZhbDogc3RyaW5nIHwgbnVtYmVyLCByYXQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCBwcmVjaXNpb25GYWN0b3IgPSB0aGlzLmdldFByZWNpc2lvbkZhY3Rvcih2YWwsIHJhdCk7XHJcbiAgICBjb25zdCBwcmVjaXNpb24gPSBNYXRoLmFicyh0aGlzLmdldE1heFByZWNpc2lvbih2YWwsIHJhdCkpO1xyXG4gICAgbGV0IHJlc3VsdDtcclxuICAgIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xyXG4gICAgICByZXN1bHQgPSAoKHByZWNpc2lvbkZhY3RvciAqIHZhbCAtIHByZWNpc2lvbkZhY3RvciAqIHRoaXMuY21hY3NTdGVwICogcmF0KSAvIHByZWNpc2lvbkZhY3RvcikudG9GaXhlZChwcmVjaXNpb24pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzdWx0ID0gdGhpcy5taW4gPT09IC1JbmZpbml0eSA/IC10aGlzLmNtYWNzU3RlcCA6IHRoaXMubWluO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMudG9OdW1iZXIocmVzdWx0KTtcclxuICB9XHJcblxyXG4gIHN0ZXAodHlwZTogc3RyaW5nLCBlOiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudCwgcmF0aW86IG51bWJlciA9IDEpOiB2b2lkIHtcclxuICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldEN1cnJlbnRWYWxpZFZhbHVlKHRoaXMuYWN0dWFsVmFsdWUpIHx8IDA7XHJcbiAgICBsZXQgdmFsID0gMDtcclxuICAgIGlmICh0eXBlID09PSAndXAnKSB7XHJcbiAgICAgIHZhbCA9IHRoaXMudXBTdGVwKHZhbHVlLCByYXRpbyk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdkb3duJykge1xyXG4gICAgICB2YWwgPSB0aGlzLmRvd25TdGVwKHZhbHVlLCByYXRpbyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBvdXRPZlJhbmdlID0gdmFsID4gdGhpcy5tYXggfHwgdmFsIDwgdGhpcy5taW47XHJcbiAgICBpZiAodmFsID4gdGhpcy5tYXgpIHtcclxuICAgICAgdmFsID0gdGhpcy5tYXg7XHJcbiAgICB9IGVsc2UgaWYgKHZhbCA8IHRoaXMubWluKSB7XHJcbiAgICAgIHZhbCA9IHRoaXMubWluO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWwsIHRydWUpO1xyXG4gICAgdGhpcy5pc0ZvY3VzZWQgPSB0cnVlO1xyXG4gICAgaWYgKG91dE9mUmFuZ2UpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5hdXRvU3RlcFRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzW3R5cGVdKGUsIHJhdGlvLCB0cnVlKTtcclxuICAgIH0sIDYwMCk7XHJcbiAgfVxyXG5cclxuICBzdG9wKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuYXV0b1N0ZXBUaW1lcikge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5hdXRvU3RlcFRpbWVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldFZhbHVlKHZhbHVlOiBudW1iZXIsIGVtaXQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmIChlbWl0ICYmIGAke3RoaXMudmFsdWV9YCAhPT0gYCR7dmFsdWV9YCkge1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcclxuICAgIH1cclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMuYWN0dWFsVmFsdWUgPSB2YWx1ZTtcclxuICAgIGNvbnN0IGRpc3BsYXlWYWx1ZSA9IGlzTm90TmlsKHRoaXMuZm9ybWF0dGVyKHRoaXMudmFsdWUpKSA/IHRoaXMuZm9ybWF0dGVyKHRoaXMudmFsdWUpIDogJyc7XHJcbiAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IGRpc3BsYXlWYWx1ZTtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSBkaXNwbGF5VmFsdWU7XHJcbiAgICB0aGlzLmRpc2FibGVkVXAgPSB0aGlzLmRpc2FibGVkRG93biA9IGZhbHNlO1xyXG4gICAgaWYgKHZhbHVlIHx8IHZhbHVlID09PSAwKSB7XHJcbiAgICAgIGNvbnN0IHZhbCA9IE51bWJlcih2YWx1ZSk7XHJcbiAgICAgIGlmICh2YWwgPj0gdGhpcy5tYXgpIHtcclxuICAgICAgICB0aGlzLmRpc2FibGVkVXAgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh2YWwgPD0gdGhpcy5taW4pIHtcclxuICAgICAgICB0aGlzLmRpc2FibGVkRG93biA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb25cclxuICAgIGlmIChlLmNvZGUgPT09ICdBcnJvd1VwJyB8fCBlLmtleUNvZGUgPT09IFVQX0FSUk9XKSB7XHJcbiAgICAgIGNvbnN0IHJhdGlvID0gdGhpcy5nZXRSYXRpbyhlKTtcclxuICAgICAgdGhpcy51cChlLCByYXRpbyk7XHJcbiAgICAgIHRoaXMuc3RvcCgpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uXHJcbiAgICB9IGVsc2UgaWYgKGUuY29kZSA9PT0gJ0Fycm93RG93bicgfHwgZS5rZXlDb2RlID09PSBET1dOX0FSUk9XKSB7XHJcbiAgICAgIGNvbnN0IHJhdGlvID0gdGhpcy5nZXRSYXRpbyhlKTtcclxuICAgICAgdGhpcy5kb3duKGUsIHJhdGlvKTtcclxuICAgICAgdGhpcy5zdG9wKCk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb25cclxuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSBFTlRFUikge1xyXG4gICAgICB0aGlzLnNldFZhbGlkYXRlVmFsdWUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uS2V5VXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0b3AoKTtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogbnVtYmVyKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIGZvY3VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5mb2N1c01vbml0b3IuZm9jdXNWaWEodGhpcy5pbnB1dEVsZW1lbnQsICdrZXlib2FyZCcpO1xyXG4gIH1cclxuXHJcbiAgYmx1cigpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yXHJcbiAgKSB7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtaW5wdXQtbnVtYmVyJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9jdXNNb25pdG9yLm1vbml0b3IodGhpcy5lbGVtZW50UmVmLCB0cnVlKS5zdWJzY3JpYmUoZm9jdXNPcmlnaW4gPT4ge1xyXG4gICAgICBpZiAoIWZvY3VzT3JpZ2luKSB7XHJcbiAgICAgICAgdGhpcy5vbkJsdXIoKTtcclxuICAgICAgICB0aGlzLmNtYWNzQmx1ci5lbWl0KCk7XHJcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLm9uVG91Y2hlZCgpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm9uRm9jdXMoKTtcclxuICAgICAgICB0aGlzLmNtYWNzRm9jdXMuZW1pdCgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLmF1dG9Gb2N1cykge1xyXG4gICAgICB0aGlzLnVwZGF0ZUF1dG9Gb2N1cygpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMuZm9ybWF0dGVyKSB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRDdXJyZW50VmFsaWRWYWx1ZSh0aGlzLmFjdHVhbFZhbHVlKTtcclxuICAgICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5hdXRvRm9jdXMpIHtcclxuICAgICAgdGhpcy5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5zdG9wTW9uaXRvcmluZyh0aGlzLmVsZW1lbnRSZWYpO1xyXG4gIH1cclxufVxyXG4iXX0=