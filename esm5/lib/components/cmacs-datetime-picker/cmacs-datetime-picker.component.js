/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { isNotNil, slideMotion, toBoolean, NzUpdateHostClassService as UpdateCls } from 'ng-zorro-antd/core';
var CmacsDateTimePickerComponent = /** @class */ (function () {
    function CmacsDateTimePickerComponent(element, renderer, updateCls, cdr) {
        this.element = element;
        this.renderer = renderer;
        this.updateCls = updateCls;
        this.cdr = cdr;
        this._disabled = false;
        this._value = null;
        this._allowEmpty = true;
        this._autoFocus = false;
        this._hideDisabledOptions = false;
        this.isInit = false;
        this.overlayPositions = [
            {
                originX: 'start',
                originY: 'top',
                overlayX: 'end',
                overlayY: 'top',
                offsetX: 0,
                offsetY: 0
            }
        ];
        this.size = null;
        this.hourStep = 1;
        this.minuteStep = 1;
        this.secondStep = 1;
        this.clearText = 'clear';
        this.popupClassName = '';
        this.placeHolder = '';
        this.defaultOpenValue = new Date();
        this.format = 'HH:mm';
        this.cmacsOpen = false;
        this.use12Hours = false;
        this.openChange = new EventEmitter();
    }
    Object.defineProperty(CmacsDateTimePickerComponent.prototype, "hideDisabledOptions", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hideDisabledOptions;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hideDisabledOptions = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsDateTimePickerComponent.prototype, "allowEmpty", {
        get: /**
         * @return {?}
         */
        function () {
            return this._allowEmpty;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._allowEmpty = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsDateTimePickerComponent.prototype, "autoFocus", {
        get: /**
         * @return {?}
         */
        function () {
            return this._autoFocus;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._autoFocus = toBoolean(value);
            this.updateAutoFocus();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsDateTimePickerComponent.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = toBoolean(value);
            /** @type {?} */
            var input = (/** @type {?} */ (this.inputRef.nativeElement));
            if (this._disabled) {
                this.renderer.setAttribute(input, 'disabled', '');
            }
            else {
                this.renderer.removeAttribute(input, 'disabled');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsDateTimePickerComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._value = value;
            if (this._onChange) {
                this._onChange(this.value);
            }
            if (this._onTouched) {
                this._onTouched();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CmacsDateTimePickerComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        if (this.disabled) {
            return;
        }
        this.cmacsOpen = true;
        this.openChange.emit(this.cmacsOpen);
    };
    /**
     * @return {?}
     */
    CmacsDateTimePickerComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.cmacsOpen = false;
        this.openChange.emit(this.cmacsOpen);
    };
    /**
     * @return {?}
     */
    CmacsDateTimePickerComponent.prototype.updateAutoFocus = /**
     * @return {?}
     */
    function () {
        if (this.isInit && !this.disabled) {
            if (this.autoFocus) {
                this.renderer.setAttribute(this.inputRef.nativeElement, 'autofocus', 'autofocus');
            }
            else {
                this.renderer.removeAttribute(this.inputRef.nativeElement, 'autofocus');
            }
        }
    };
    /**
     * @return {?}
     */
    CmacsDateTimePickerComponent.prototype.onClickClearBtn = /**
     * @return {?}
     */
    function () {
        this.value = null;
    };
    /**
     * @private
     * @return {?}
     */
    CmacsDateTimePickerComponent.prototype.setClassMap = /**
     * @private
     * @return {?}
     */
    function () {
        var _a;
        this.updateCls.updateHostClass(this.element.nativeElement, (_a = {},
            _a["ant-time-picker"] = true,
            _a["ant-time-picker-" + this.size] = isNotNil(this.size),
            _a));
    };
    /**
     * @return {?}
     */
    CmacsDateTimePickerComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        if (this.inputRef.nativeElement) {
            this.inputRef.nativeElement.focus();
        }
    };
    /**
     * @return {?}
     */
    CmacsDateTimePickerComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        if (this.inputRef.nativeElement) {
            this.inputRef.nativeElement.blur();
        }
    };
    /**
     * @return {?}
     */
    CmacsDateTimePickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
        this.origin = new CdkOverlayOrigin(this.element);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsDateTimePickerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var use12Hours = changes.use12Hours, format = changes.format;
        if (use12Hours && !use12Hours.previousValue && use12Hours.currentValue && !format) {
            this.format = 'h:mm:ss a';
        }
    };
    /**
     * @return {?}
     */
    CmacsDateTimePickerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.isInit = true;
        this.updateAutoFocus();
    };
    /**
     * @param {?} time
     * @return {?}
     */
    CmacsDateTimePickerComponent.prototype.writeValue = /**
     * @param {?} time
     * @return {?}
     */
    function (time) {
        this._value = time;
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CmacsDateTimePickerComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CmacsDateTimePickerComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    CmacsDateTimePickerComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
        this.cdr.markForCheck();
    };
    CmacsDateTimePickerComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'cmacs-datetime-picker',
                    exportAs: 'cmacsDateTimePicker',
                    template: "<input\r\n  type=\"text\"\r\n  [nzTime]=\"format\"\r\n  class=\"ant-time-picker-input\"\r\n  [placeholder]=\"placeHolder || ('TimePicker.placeholder' | nzI18n)\"\r\n  [(ngModel)]=\"value\"\r\n  readonly=\"readonly\"\r\n  (click)=\"open()\"\r\n  #inputElement>\r\n<span class=\"ant-time-picker-icon\">\r\n  <i nz-icon type=\"clock-circle\"></i>\r\n</span>\r\n<i\r\n  *ngIf=\"allowEmpty && value\"\r\n  nz-icon\r\n  type=\"close-circle\"\r\n  theme=\"fill\"\r\n  class=\"anticon anticon-close-circle ant-time-picker-clear\"\r\n  tabindex=\"-1\"\r\n  [attr.aria-label]=\"clearText\"\r\n  [attr.title]=\"clearText\"\r\n  (click)=\"onClickClearBtn()\"\r\n></i>\r\n\r\n<ng-template\r\n  cdkConnectedOverlay\r\n  nzConnectedOverlay\r\n  cdkConnectedOverlayHasBackdrop\r\n  [cdkConnectedOverlayPositions]=\"overlayPositions\"\r\n  [cdkConnectedOverlayOrigin]=\"origin\"\r\n  [cdkConnectedOverlayOpen]=\"cmacsOpen\"\r\n  [cdkConnectedOverlayOffsetY]=\"-2\"\r\n  (detach)=\"close()\"\r\n  (backdropClick)=\"close()\">\r\n  <cmacs-datetime-picker-panel\r\n    [ngClass]=\"popupClassName\"\r\n    [@slideMotion]=\"'bottom'\"\r\n    [format]=\"format\"\r\n    [nzHourStep]=\"hourStep\"\r\n    [nzMinuteStep]=\"minuteStep\"\r\n    [nzSecondStep]=\"secondStep\"\r\n    [nzDisabledHours]=\"disabledHours\"\r\n    [nzDisabledMinutes]=\"disabledMinutes\"\r\n    [nzDisabledSeconds]=\"disabledSeconds\"\r\n    [nzPlaceHolder]=\"placeHolder || ('TimePicker.placeholder' | nzI18n)\"\r\n    [nzHideDisabledOptions]=\"hideDisabledOptions\"\r\n    [nzUse12Hours]=\"use12Hours\"\r\n    [nzDefaultOpenValue]=\"defaultOpenValue\"\r\n    [nzAddOn]=\"addOn\"\r\n    [opened]=\"cmacsOpen\"\r\n    [nzClearText]=\"clearText\"\r\n    [nzAllowEmpty]=\"allowEmpty\"\r\n    [(ngModel)]=\"value\">\r\n  </cmacs-datetime-picker-panel>\r\n</ng-template>\r\n\r\n",
                    animations: [slideMotion],
                    providers: [UpdateCls, { provide: NG_VALUE_ACCESSOR, useExisting: CmacsDateTimePickerComponent, multi: true }]
                }] }
    ];
    /** @nocollapse */
    CmacsDateTimePickerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: UpdateCls },
        { type: ChangeDetectorRef }
    ]; };
    CmacsDateTimePickerComponent.propDecorators = {
        inputRef: [{ type: ViewChild, args: ['inputElement',] }],
        size: [{ type: Input }],
        hourStep: [{ type: Input }],
        minuteStep: [{ type: Input }],
        secondStep: [{ type: Input }],
        clearText: [{ type: Input }],
        popupClassName: [{ type: Input }],
        placeHolder: [{ type: Input }],
        addOn: [{ type: Input }],
        defaultOpenValue: [{ type: Input }],
        disabledHours: [{ type: Input }],
        disabledMinutes: [{ type: Input }],
        disabledSeconds: [{ type: Input }],
        format: [{ type: Input }],
        cmacsOpen: [{ type: Input }],
        use12Hours: [{ type: Input }],
        openChange: [{ type: Output }],
        hideDisabledOptions: [{ type: Input }],
        allowEmpty: [{ type: Input }],
        autoFocus: [{ type: Input }],
        disabled: [{ type: Input }]
    };
    return CmacsDateTimePickerComponent;
}());
export { CmacsDateTimePickerComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CmacsDateTimePickerComponent.prototype._disabled;
    /**
     * @type {?}
     * @private
     */
    CmacsDateTimePickerComponent.prototype._value;
    /**
     * @type {?}
     * @private
     */
    CmacsDateTimePickerComponent.prototype._allowEmpty;
    /**
     * @type {?}
     * @private
     */
    CmacsDateTimePickerComponent.prototype._autoFocus;
    /**
     * @type {?}
     * @private
     */
    CmacsDateTimePickerComponent.prototype._onChange;
    /**
     * @type {?}
     * @private
     */
    CmacsDateTimePickerComponent.prototype._onTouched;
    /**
     * @type {?}
     * @private
     */
    CmacsDateTimePickerComponent.prototype._hideDisabledOptions;
    /** @type {?} */
    CmacsDateTimePickerComponent.prototype.isInit;
    /** @type {?} */
    CmacsDateTimePickerComponent.prototype.origin;
    /** @type {?} */
    CmacsDateTimePickerComponent.prototype.overlayPositions;
    /** @type {?} */
    CmacsDateTimePickerComponent.prototype.inputRef;
    /** @type {?} */
    CmacsDateTimePickerComponent.prototype.size;
    /** @type {?} */
    CmacsDateTimePickerComponent.prototype.hourStep;
    /** @type {?} */
    CmacsDateTimePickerComponent.prototype.minuteStep;
    /** @type {?} */
    CmacsDateTimePickerComponent.prototype.secondStep;
    /** @type {?} */
    CmacsDateTimePickerComponent.prototype.clearText;
    /** @type {?} */
    CmacsDateTimePickerComponent.prototype.popupClassName;
    /** @type {?} */
    CmacsDateTimePickerComponent.prototype.placeHolder;
    /** @type {?} */
    CmacsDateTimePickerComponent.prototype.addOn;
    /** @type {?} */
    CmacsDateTimePickerComponent.prototype.defaultOpenValue;
    /** @type {?} */
    CmacsDateTimePickerComponent.prototype.disabledHours;
    /** @type {?} */
    CmacsDateTimePickerComponent.prototype.disabledMinutes;
    /** @type {?} */
    CmacsDateTimePickerComponent.prototype.disabledSeconds;
    /** @type {?} */
    CmacsDateTimePickerComponent.prototype.format;
    /** @type {?} */
    CmacsDateTimePickerComponent.prototype.cmacsOpen;
    /** @type {?} */
    CmacsDateTimePickerComponent.prototype.use12Hours;
    /** @type {?} */
    CmacsDateTimePickerComponent.prototype.openChange;
    /**
     * @type {?}
     * @private
     */
    CmacsDateTimePickerComponent.prototype.element;
    /**
     * @type {?}
     * @private
     */
    CmacsDateTimePickerComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    CmacsDateTimePickerComponent.prototype.updateCls;
    /** @type {?} */
    CmacsDateTimePickerComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZGF0ZXRpbWUtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtZGF0ZXRpbWUtcGlja2VyL2NtYWNzLWRhdGV0aW1lLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQTBCLE1BQU0sc0JBQXNCLENBQUM7QUFDaEYsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBRVQsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSx3QkFBd0IsSUFBSSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU3RztJQXNKRSxzQ0FDVSxPQUFtQixFQUNuQixRQUFtQixFQUNuQixTQUFvQixFQUNyQixHQUFzQjtRQUhyQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNyQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWhKdkIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixXQUFNLEdBQWdCLElBQUksQ0FBQztRQUMzQixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBR25CLHlCQUFvQixHQUFHLEtBQUssQ0FBQztRQUNyQyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRWYscUJBQWdCLEdBQTZCO1lBQzNDO2dCQUNF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eEIsa0RBQXdCOztJQUN4QixpREFBNkI7O0lBQzdCLHNEQUE2Qjs7SUFDN0IsbURBQTBCOztJQUMxQiw2Q0FBa0M7O0lBQ2xDLHdEQUF1Qzs7SUFDdkMscURBQXVDOztJQUN2Qyx1REFBcUQ7O0lBQ3JELHVEQUFxRTs7SUFDckUsOENBQTBCOztJQUMxQixpREFBMkI7O0lBQzNCLGtEQUE0Qjs7SUFDNUIsa0RBQTREOzs7OztJQTBHMUQsK0NBQTJCOzs7OztJQUMzQixnREFBMkI7Ozs7O0lBQzNCLGlEQUE0Qjs7SUFDNUIsMkNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDZGtPdmVybGF5T3JpZ2luLCBDb25uZWN0aW9uUG9zaXRpb25QYWlyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBpc05vdE5pbCwgc2xpZGVNb3Rpb24sIHRvQm9vbGVhbiwgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIGFzIFVwZGF0ZUNscyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHNlbGVjdG9yOiAnY21hY3MtZGF0ZXRpbWUtcGlja2VyJyxcclxuICBleHBvcnRBczogJ2NtYWNzRGF0ZVRpbWVQaWNrZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1kYXRldGltZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGFuaW1hdGlvbnM6IFtzbGlkZU1vdGlvbl0sXHJcbiAgcHJvdmlkZXJzOiBbVXBkYXRlQ2xzLCB7IHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCB1c2VFeGlzdGluZzogQ21hY3NEYXRlVGltZVBpY2tlckNvbXBvbmVudCwgbXVsdGk6IHRydWUgfV1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzRGF0ZVRpbWVQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xyXG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfdmFsdWU6IERhdGUgfCBudWxsID0gbnVsbDtcclxuICBwcml2YXRlIF9hbGxvd0VtcHR5ID0gdHJ1ZTtcclxuICBwcml2YXRlIF9hdXRvRm9jdXMgPSBmYWxzZTtcclxuICBwcml2YXRlIF9vbkNoYW5nZTogKHZhbHVlOiBEYXRlIHwgbnVsbCkgPT4gdm9pZDtcclxuICBwcml2YXRlIF9vblRvdWNoZWQ6ICgpID0+IHZvaWQ7XHJcbiAgcHJpdmF0ZSBfaGlkZURpc2FibGVkT3B0aW9ucyA9IGZhbHNlO1xyXG4gIGlzSW5pdCA9IGZhbHNlO1xyXG4gIG9yaWdpbjogQ2RrT3ZlcmxheU9yaWdpbjtcclxuICBvdmVybGF5UG9zaXRpb25zOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10gPSBbXHJcbiAgICB7XHJcbiAgICAgIG9yaWdpblg6ICdzdGFydCcsXHJcbiAgICAgIG9yaWdpblk6ICd0b3AnLFxyXG4gICAgICBvdmVybGF5WDogJ2VuZCcsXHJcbiAgICAgIG92ZXJsYXlZOiAndG9wJyxcclxuICAgICAgb2Zmc2V0WDogMCxcclxuICAgICAgb2Zmc2V0WTogMFxyXG4gICAgfVxyXG4gIF07XHJcbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JykgaW5wdXRSZWY6IEVsZW1lbnRSZWY7XHJcbiAgQElucHV0KCkgc2l6ZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgaG91clN0ZXAgPSAxO1xyXG4gIEBJbnB1dCgpIG1pbnV0ZVN0ZXAgPSAxO1xyXG4gIEBJbnB1dCgpIHNlY29uZFN0ZXAgPSAxO1xyXG4gIEBJbnB1dCgpIGNsZWFyVGV4dCA9ICdjbGVhcic7XHJcbiAgQElucHV0KCkgcG9wdXBDbGFzc05hbWUgPSAnJztcclxuICBASW5wdXQoKSBwbGFjZUhvbGRlciA9ICcnO1xyXG4gIEBJbnB1dCgpIGFkZE9uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBkZWZhdWx0T3BlblZhbHVlID0gbmV3IERhdGUoKTtcclxuICBASW5wdXQoKSBkaXNhYmxlZEhvdXJzOiAoKSA9PiBudW1iZXJbXTtcclxuICBASW5wdXQoKSBkaXNhYmxlZE1pbnV0ZXM6IChob3VyOiBudW1iZXIpID0+IG51bWJlcltdO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkU2Vjb25kczogKGhvdXI6IG51bWJlciwgbWludXRlOiBudW1iZXIpID0+IG51bWJlcltdO1xyXG4gIEBJbnB1dCgpIGZvcm1hdCA9ICdISDptbSc7XHJcbiAgQElucHV0KCkgY21hY3NPcGVuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgdXNlMTJIb3VycyA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBoaWRlRGlzYWJsZWRPcHRpb25zKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9oaWRlRGlzYWJsZWRPcHRpb25zID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBoaWRlRGlzYWJsZWRPcHRpb25zKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hpZGVEaXNhYmxlZE9wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBhbGxvd0VtcHR5KHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9hbGxvd0VtcHR5ID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBhbGxvd0VtcHR5KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FsbG93RW1wdHk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBhdXRvRm9jdXModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2F1dG9Gb2N1cyA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgICB0aGlzLnVwZGF0ZUF1dG9Gb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGF1dG9Gb2N1cygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9hdXRvRm9jdXM7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbiB8IHN0cmluZykge1xyXG4gICAgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gICAgY29uc3QgaW5wdXQgPSB0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGlmICh0aGlzLl9kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShpbnB1dCwgJ2Rpc2FibGVkJywgJycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUoaW5wdXQsICdkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4gfCBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgc2V0IHZhbHVlKHZhbHVlOiBEYXRlIHwgbnVsbCkge1xyXG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuICAgIGlmICh0aGlzLl9vbkNoYW5nZSkge1xyXG4gICAgICB0aGlzLl9vbkNoYW5nZSh0aGlzLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9vblRvdWNoZWQpIHtcclxuICAgICAgdGhpcy5fb25Ub3VjaGVkKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgdmFsdWUoKTogRGF0ZSB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gIH1cclxuXHJcbiAgb3BlbigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuY21hY3NPcGVuID0gdHJ1ZTtcclxuICAgIHRoaXMub3BlbkNoYW5nZS5lbWl0KHRoaXMuY21hY3NPcGVuKTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jbWFjc09wZW4gPSBmYWxzZTtcclxuICAgIHRoaXMub3BlbkNoYW5nZS5lbWl0KHRoaXMuY21hY3NPcGVuKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUF1dG9Gb2N1cygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzSW5pdCAmJiAhdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICBpZiAodGhpcy5hdXRvRm9jdXMpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQsICdhdXRvZm9jdXMnLCAnYXV0b2ZvY3VzJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50LCAnYXV0b2ZvY3VzJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2xpY2tDbGVhckJ0bigpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlQ2xzLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwge1xyXG4gICAgICBbYGFudC10aW1lLXBpY2tlcmBdOiB0cnVlLFxyXG4gICAgICBbYGFudC10aW1lLXBpY2tlci0ke3RoaXMuc2l6ZX1gXTogaXNOb3ROaWwodGhpcy5zaXplKVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmb2N1cygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBibHVyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudCkge1xyXG4gICAgICB0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIHVwZGF0ZUNsczogVXBkYXRlQ2xzLFxyXG4gICAgcHVibGljIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgdGhpcy5vcmlnaW4gPSBuZXcgQ2RrT3ZlcmxheU9yaWdpbih0aGlzLmVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3QgeyB1c2UxMkhvdXJzLCBmb3JtYXQgfSA9IGNoYW5nZXM7XHJcbiAgICBpZiAodXNlMTJIb3VycyAmJiAhdXNlMTJIb3Vycy5wcmV2aW91c1ZhbHVlICYmIHVzZTEySG91cnMuY3VycmVudFZhbHVlICYmICFmb3JtYXQpIHtcclxuICAgICAgdGhpcy5mb3JtYXQgPSAnaDptbTpzcyBhJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNJbml0ID0gdHJ1ZTtcclxuICAgIHRoaXMudXBkYXRlQXV0b0ZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHRpbWU6IERhdGUgfCBudWxsKTogdm9pZCB7XHJcbiAgICB0aGlzLl92YWx1ZSA9IHRpbWU7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh0aW1lOiBEYXRlIHwgbnVsbCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5fb25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==