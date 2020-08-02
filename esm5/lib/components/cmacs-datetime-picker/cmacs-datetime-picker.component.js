/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.cmacsOpen = false;
        this.use12Hours = false;
        this.format = null;
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
        this.format = !this.format ? this.use12Hours ? 'HH:mm' : 'HH:mm:ss' : this.format;
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
        cmacsOpen: [{ type: Input }],
        use12Hours: [{ type: Input }],
        format: [{ type: Input }],
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
    CmacsDateTimePickerComponent.prototype.cmacsOpen;
    /** @type {?} */
    CmacsDateTimePickerComponent.prototype.use12Hours;
    /** @type {?} */
    CmacsDateTimePickerComponent.prototype.format;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZGF0ZXRpbWUtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtZGF0ZXRpbWUtcGlja2VyL2NtYWNzLWRhdGV0aW1lLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBMEIsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRixPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFFVCxXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLHdCQUF3QixJQUFJLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRzdHO0lBc0pFLHNDQUNVLE9BQW1CLEVBQ25CLFFBQW1CLEVBQ25CLFNBQW9CLEVBQ3JCLEdBQXNCO1FBSHJCLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3JCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBaEp2QixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLFdBQU0sR0FBZ0IsSUFBSSxDQUFDO1FBQzNCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFHbkIseUJBQW9CLEdBQUcsS0FBSyxDQUFDO1FBQ3JDLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFFZixxQkFBZ0IsR0FBNkI7WUFDM0M7Z0JBQ0UsT0FBTyxF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QUMzQixpREFBZ0Q7Ozs7O0lBQ2hELGtEQUErQjs7Ozs7SUFDL0IsNERBQXFDOztJQUNyQyw4Q0FBZTs7SUFDZiw4Q0FBeUI7O0lBQ3pCLHdEQVNFOztJQUNGLGdEQUFnRDs7SUFDaEQsNENBQW9DOztJQUNwQyxnREFBc0I7O0lBQ3RCLGtEQUF3Qjs7SUFDeEIsa0RBQXdCOztJQUN4QixpREFBNkI7O0lBQzdCLHNEQUE2Qjs7SUFDN0IsbURBQTBCOztJQUMxQiw2Q0FBa0M7O0lBQ2xDLHdEQUF1Qzs7SUFDdkMscURBQXVDOztJQUN2Qyx1REFBcUQ7O0lBQ3JELHVEQUFxRTs7SUFDckUsaURBQTJCOztJQUMzQixrREFBNEI7O0lBQzVCLDhDQUF1Qjs7SUFDdkIsa0RBQTREOzs7OztJQTBHMUQsK0NBQTJCOzs7OztJQUMzQixnREFBMkI7Ozs7O0lBQzNCLGlEQUE0Qjs7SUFDNUIsMkNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2RrT3ZlcmxheU9yaWdpbiwgQ29ubmVjdGlvblBvc2l0aW9uUGFpciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgaXNOb3ROaWwsIHNsaWRlTW90aW9uLCB0b0Jvb2xlYW4sIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSBhcyBVcGRhdGVDbHMgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdzc2YvdHlwZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBzZWxlY3RvcjogJ2NtYWNzLWRhdGV0aW1lLXBpY2tlcicsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0RhdGVUaW1lUGlja2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtZGF0ZXRpbWUtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcclxuICBhbmltYXRpb25zOiBbc2xpZGVNb3Rpb25dLFxyXG4gIHByb3ZpZGVyczogW1VwZGF0ZUNscywgeyBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IENtYWNzRGF0ZVRpbWVQaWNrZXJDb21wb25lbnQsIG11bHRpOiB0cnVlIH1dXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0RhdGVUaW1lUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcclxuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX3ZhbHVlOiBEYXRlIHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBfYWxsb3dFbXB0eSA9IHRydWU7XHJcbiAgcHJpdmF0ZSBfYXV0b0ZvY3VzID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfb25DaGFuZ2U6ICh2YWx1ZTogRGF0ZSB8IG51bGwpID0+IHZvaWQ7XHJcbiAgcHJpdmF0ZSBfb25Ub3VjaGVkOiAoKSA9PiB2b2lkO1xyXG4gIHByaXZhdGUgX2hpZGVEaXNhYmxlZE9wdGlvbnMgPSBmYWxzZTtcclxuICBpc0luaXQgPSBmYWxzZTtcclxuICBvcmlnaW46IENka092ZXJsYXlPcmlnaW47XHJcbiAgb3ZlcmxheVBvc2l0aW9uczogQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdID0gW1xyXG4gICAge1xyXG4gICAgICBvcmlnaW5YOiAnc3RhcnQnLFxyXG4gICAgICBvcmlnaW5ZOiAndG9wJyxcclxuICAgICAgb3ZlcmxheVg6ICdlbmQnLFxyXG4gICAgICBvdmVybGF5WTogJ3RvcCcsXHJcbiAgICAgIG9mZnNldFg6IDAsXHJcbiAgICAgIG9mZnNldFk6IDBcclxuICAgIH1cclxuICBdO1xyXG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcpIGlucHV0UmVmOiBFbGVtZW50UmVmO1xyXG4gIEBJbnB1dCgpIHNpemU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGhvdXJTdGVwID0gMTtcclxuICBASW5wdXQoKSBtaW51dGVTdGVwID0gMTtcclxuICBASW5wdXQoKSBzZWNvbmRTdGVwID0gMTtcclxuICBASW5wdXQoKSBjbGVhclRleHQgPSAnY2xlYXInO1xyXG4gIEBJbnB1dCgpIHBvcHVwQ2xhc3NOYW1lID0gJyc7XHJcbiAgQElucHV0KCkgcGxhY2VIb2xkZXIgPSAnJztcclxuICBASW5wdXQoKSBhZGRPbjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgZGVmYXVsdE9wZW5WYWx1ZSA9IG5ldyBEYXRlKCk7XHJcbiAgQElucHV0KCkgZGlzYWJsZWRIb3VyczogKCkgPT4gbnVtYmVyW107XHJcbiAgQElucHV0KCkgZGlzYWJsZWRNaW51dGVzOiAoaG91cjogbnVtYmVyKSA9PiBudW1iZXJbXTtcclxuICBASW5wdXQoKSBkaXNhYmxlZFNlY29uZHM6IChob3VyOiBudW1iZXIsIG1pbnV0ZTogbnVtYmVyKSA9PiBudW1iZXJbXTtcclxuICBASW5wdXQoKSBjbWFjc09wZW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSB1c2UxMkhvdXJzID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZm9ybWF0ID0gbnVsbDtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgaGlkZURpc2FibGVkT3B0aW9ucyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5faGlkZURpc2FibGVkT3B0aW9ucyA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgaGlkZURpc2FibGVkT3B0aW9ucygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9oaWRlRGlzYWJsZWRPcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgYWxsb3dFbXB0eSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fYWxsb3dFbXB0eSA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgYWxsb3dFbXB0eSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9hbGxvd0VtcHR5O1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgYXV0b0ZvY3VzKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9hdXRvRm9jdXMgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gICAgdGhpcy51cGRhdGVBdXRvRm9jdXMoKTtcclxuICB9XHJcblxyXG4gIGdldCBhdXRvRm9jdXMoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fYXV0b0ZvY3VzO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4gfCBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICAgIGNvbnN0IGlucHV0ID0gdGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBpZiAodGhpcy5fZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoaW5wdXQsICdkaXNhYmxlZCcsICcnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKGlucHV0LCAnZGlzYWJsZWQnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHwgc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIHNldCB2YWx1ZSh2YWx1ZTogRGF0ZSB8IG51bGwpIHtcclxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcbiAgICBpZiAodGhpcy5fb25DaGFuZ2UpIHtcclxuICAgICAgdGhpcy5fb25DaGFuZ2UodGhpcy52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fb25Ub3VjaGVkKSB7XHJcbiAgICAgIHRoaXMuX29uVG91Y2hlZCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHZhbHVlKCk6IERhdGUgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICB9XHJcblxyXG4gIG9wZW4oKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmNtYWNzT3BlbiA9IHRydWU7XHJcbiAgICB0aGlzLm9wZW5DaGFuZ2UuZW1pdCh0aGlzLmNtYWNzT3Blbik7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY21hY3NPcGVuID0gZmFsc2U7XHJcbiAgICB0aGlzLm9wZW5DaGFuZ2UuZW1pdCh0aGlzLmNtYWNzT3Blbik7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVBdXRvRm9jdXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc0luaXQgJiYgIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgaWYgKHRoaXMuYXV0b0ZvY3VzKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50LCAnYXV0b2ZvY3VzJywgJ2F1dG9mb2N1cycpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudCwgJ2F1dG9mb2N1cycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrQ2xlYXJCdG4oKTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlID0gbnVsbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZUNscy51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHtcclxuICAgICAgW2BhbnQtdGltZS1waWNrZXJgXTogdHJ1ZSxcclxuICAgICAgW2BhbnQtdGltZS1waWNrZXItJHt0aGlzLnNpemV9YF06IGlzTm90TmlsKHRoaXMuc2l6ZSlcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZm9jdXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYmx1cigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50LmJsdXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSB1cGRhdGVDbHM6IFVwZGF0ZUNscyxcclxuICAgIHB1YmxpYyBjZHI6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgIHRoaXMub3JpZ2luID0gbmV3IENka092ZXJsYXlPcmlnaW4odGhpcy5lbGVtZW50KTtcclxuICAgIHRoaXMuZm9ybWF0ID0gIXRoaXMuZm9ybWF0ID8gdGhpcy51c2UxMkhvdXJzID8gJ0hIOm1tJyA6ICdISDptbTpzcycgOiB0aGlzLmZvcm1hdDtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgdXNlMTJIb3VycywgZm9ybWF0IH0gPSBjaGFuZ2VzO1xyXG4gICAgaWYgKHVzZTEySG91cnMgJiYgIXVzZTEySG91cnMucHJldmlvdXNWYWx1ZSAmJiB1c2UxMkhvdXJzLmN1cnJlbnRWYWx1ZSAmJiAhZm9ybWF0KSB7XHJcbiAgICAgIHRoaXMuZm9ybWF0ID0gJ2g6bW06c3MgYSc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzSW5pdCA9IHRydWU7XHJcbiAgICB0aGlzLnVwZGF0ZUF1dG9Gb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh0aW1lOiBEYXRlIHwgbnVsbCk6IHZvaWQge1xyXG4gICAgdGhpcy5fdmFsdWUgPSB0aW1lO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodGltZTogRGF0ZSB8IG51bGwpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=