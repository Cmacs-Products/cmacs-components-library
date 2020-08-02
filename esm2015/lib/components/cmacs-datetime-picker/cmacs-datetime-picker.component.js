/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { isNotNil, slideMotion, toBoolean, NzUpdateHostClassService as UpdateCls } from 'ng-zorro-antd/core';
export class CmacsDateTimePickerComponent {
    /**
     * @param {?} element
     * @param {?} renderer
     * @param {?} updateCls
     * @param {?} cdr
     */
    constructor(element, renderer, updateCls, cdr) {
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
    /**
     * @param {?} value
     * @return {?}
     */
    set hideDisabledOptions(value) {
        this._hideDisabledOptions = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get hideDisabledOptions() {
        return this._hideDisabledOptions;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set allowEmpty(value) {
        this._allowEmpty = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get allowEmpty() {
        return this._allowEmpty;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set autoFocus(value) {
        this._autoFocus = toBoolean(value);
        this.updateAutoFocus();
    }
    /**
     * @return {?}
     */
    get autoFocus() {
        return this._autoFocus;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = toBoolean(value);
        /** @type {?} */
        const input = (/** @type {?} */ (this.inputRef.nativeElement));
        if (this._disabled) {
            this.renderer.setAttribute(input, 'disabled', '');
        }
        else {
            this.renderer.removeAttribute(input, 'disabled');
        }
    }
    /**
     * @return {?}
     */
    get disabled() {
        return this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this._value = value;
        if (this._onChange) {
            this._onChange(this.value);
        }
        if (this._onTouched) {
            this._onTouched();
        }
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @return {?}
     */
    open() {
        if (this.disabled) {
            return;
        }
        this.cmacsOpen = true;
        this.openChange.emit(this.cmacsOpen);
    }
    /**
     * @return {?}
     */
    close() {
        this.cmacsOpen = false;
        this.openChange.emit(this.cmacsOpen);
    }
    /**
     * @return {?}
     */
    updateAutoFocus() {
        if (this.isInit && !this.disabled) {
            if (this.autoFocus) {
                this.renderer.setAttribute(this.inputRef.nativeElement, 'autofocus', 'autofocus');
            }
            else {
                this.renderer.removeAttribute(this.inputRef.nativeElement, 'autofocus');
            }
        }
    }
    /**
     * @return {?}
     */
    onClickClearBtn() {
        this.value = null;
    }
    /**
     * @private
     * @return {?}
     */
    setClassMap() {
        this.updateCls.updateHostClass(this.element.nativeElement, {
            [`ant-time-picker`]: true,
            [`ant-time-picker-${this.size}`]: isNotNil(this.size)
        });
    }
    /**
     * @return {?}
     */
    focus() {
        if (this.inputRef.nativeElement) {
            this.inputRef.nativeElement.focus();
        }
    }
    /**
     * @return {?}
     */
    blur() {
        if (this.inputRef.nativeElement) {
            this.inputRef.nativeElement.blur();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClassMap();
        this.origin = new CdkOverlayOrigin(this.element);
        this.format = !this.format ? this.use12Hours ? 'HH:mm' : 'HH:mm:ss' : this.format;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { use12Hours, format } = changes;
        if (use12Hours && !use12Hours.previousValue && use12Hours.currentValue && !format) {
            this.format = 'h:mm:ss a';
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.isInit = true;
        this.updateAutoFocus();
    }
    /**
     * @param {?} time
     * @return {?}
     */
    writeValue(time) {
        this._value = time;
        this.cdr.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.cdr.markForCheck();
    }
}
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
CmacsDateTimePickerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: UpdateCls },
    { type: ChangeDetectorRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZGF0ZXRpbWUtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtZGF0ZXRpbWUtcGlja2VyL2NtYWNzLWRhdGV0aW1lLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBMEIsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRixPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFFVCxXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLHdCQUF3QixJQUFJLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBWTdHLE1BQU0sT0FBTyw0QkFBNEI7Ozs7Ozs7SUE2SXZDLFlBQ1UsT0FBbUIsRUFDbkIsUUFBbUIsRUFDbkIsU0FBb0IsRUFDckIsR0FBc0I7UUFIckIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDckIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFoSnZCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsV0FBTSxHQUFnQixJQUFJLENBQUM7UUFDM0IsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUduQix5QkFBb0IsR0FBRyxLQUFLLENBQUM7UUFDckMsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUVmLHFCQUFnQixH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a0RBQXdCOztJQUN4QixrREFBd0I7O0lBQ3hCLGlEQUE2Qjs7SUFDN0Isc0RBQTZCOztJQUM3QixtREFBMEI7O0lBQzFCLDZDQUFrQzs7SUFDbEMsd0RBQXVDOztJQUN2QyxxREFBdUM7O0lBQ3ZDLHVEQUFxRDs7SUFDckQsdURBQXFFOztJQUNyRSxpREFBMkI7O0lBQzNCLGtEQUE0Qjs7SUFDNUIsOENBQXVCOztJQUN2QixrREFBNEQ7Ozs7O0lBMEcxRCwrQ0FBMkI7Ozs7O0lBQzNCLGdEQUEyQjs7Ozs7SUFDM0IsaURBQTRCOztJQUM1QiwyQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZGtPdmVybGF5T3JpZ2luLCBDb25uZWN0aW9uUG9zaXRpb25QYWlyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBpc05vdE5pbCwgc2xpZGVNb3Rpb24sIHRvQm9vbGVhbiwgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIGFzIFVwZGF0ZUNscyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ3NzZi90eXBlcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHNlbGVjdG9yOiAnY21hY3MtZGF0ZXRpbWUtcGlja2VyJyxcclxuICBleHBvcnRBczogJ2NtYWNzRGF0ZVRpbWVQaWNrZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1kYXRldGltZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGFuaW1hdGlvbnM6IFtzbGlkZU1vdGlvbl0sXHJcbiAgcHJvdmlkZXJzOiBbVXBkYXRlQ2xzLCB7IHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCB1c2VFeGlzdGluZzogQ21hY3NEYXRlVGltZVBpY2tlckNvbXBvbmVudCwgbXVsdGk6IHRydWUgfV1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzRGF0ZVRpbWVQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xyXG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfdmFsdWU6IERhdGUgfCBudWxsID0gbnVsbDtcclxuICBwcml2YXRlIF9hbGxvd0VtcHR5ID0gdHJ1ZTtcclxuICBwcml2YXRlIF9hdXRvRm9jdXMgPSBmYWxzZTtcclxuICBwcml2YXRlIF9vbkNoYW5nZTogKHZhbHVlOiBEYXRlIHwgbnVsbCkgPT4gdm9pZDtcclxuICBwcml2YXRlIF9vblRvdWNoZWQ6ICgpID0+IHZvaWQ7XHJcbiAgcHJpdmF0ZSBfaGlkZURpc2FibGVkT3B0aW9ucyA9IGZhbHNlO1xyXG4gIGlzSW5pdCA9IGZhbHNlO1xyXG4gIG9yaWdpbjogQ2RrT3ZlcmxheU9yaWdpbjtcclxuICBvdmVybGF5UG9zaXRpb25zOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10gPSBbXHJcbiAgICB7XHJcbiAgICAgIG9yaWdpblg6ICdzdGFydCcsXHJcbiAgICAgIG9yaWdpblk6ICd0b3AnLFxyXG4gICAgICBvdmVybGF5WDogJ2VuZCcsXHJcbiAgICAgIG92ZXJsYXlZOiAndG9wJyxcclxuICAgICAgb2Zmc2V0WDogMCxcclxuICAgICAgb2Zmc2V0WTogMFxyXG4gICAgfVxyXG4gIF07XHJcbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JykgaW5wdXRSZWY6IEVsZW1lbnRSZWY7XHJcbiAgQElucHV0KCkgc2l6ZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgaG91clN0ZXAgPSAxO1xyXG4gIEBJbnB1dCgpIG1pbnV0ZVN0ZXAgPSAxO1xyXG4gIEBJbnB1dCgpIHNlY29uZFN0ZXAgPSAxO1xyXG4gIEBJbnB1dCgpIGNsZWFyVGV4dCA9ICdjbGVhcic7XHJcbiAgQElucHV0KCkgcG9wdXBDbGFzc05hbWUgPSAnJztcclxuICBASW5wdXQoKSBwbGFjZUhvbGRlciA9ICcnO1xyXG4gIEBJbnB1dCgpIGFkZE9uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBkZWZhdWx0T3BlblZhbHVlID0gbmV3IERhdGUoKTtcclxuICBASW5wdXQoKSBkaXNhYmxlZEhvdXJzOiAoKSA9PiBudW1iZXJbXTtcclxuICBASW5wdXQoKSBkaXNhYmxlZE1pbnV0ZXM6IChob3VyOiBudW1iZXIpID0+IG51bWJlcltdO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkU2Vjb25kczogKGhvdXI6IG51bWJlciwgbWludXRlOiBudW1iZXIpID0+IG51bWJlcltdO1xyXG4gIEBJbnB1dCgpIGNtYWNzT3BlbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHVzZTEySG91cnMgPSBmYWxzZTtcclxuICBASW5wdXQoKSBmb3JtYXQgPSBudWxsO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBoaWRlRGlzYWJsZWRPcHRpb25zKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9oaWRlRGlzYWJsZWRPcHRpb25zID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBoaWRlRGlzYWJsZWRPcHRpb25zKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hpZGVEaXNhYmxlZE9wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBhbGxvd0VtcHR5KHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9hbGxvd0VtcHR5ID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBhbGxvd0VtcHR5KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FsbG93RW1wdHk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBhdXRvRm9jdXModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2F1dG9Gb2N1cyA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgICB0aGlzLnVwZGF0ZUF1dG9Gb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGF1dG9Gb2N1cygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9hdXRvRm9jdXM7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbiB8IHN0cmluZykge1xyXG4gICAgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gICAgY29uc3QgaW5wdXQgPSB0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGlmICh0aGlzLl9kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShpbnB1dCwgJ2Rpc2FibGVkJywgJycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUoaW5wdXQsICdkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4gfCBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgc2V0IHZhbHVlKHZhbHVlOiBEYXRlIHwgbnVsbCkge1xyXG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuICAgIGlmICh0aGlzLl9vbkNoYW5nZSkge1xyXG4gICAgICB0aGlzLl9vbkNoYW5nZSh0aGlzLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9vblRvdWNoZWQpIHtcclxuICAgICAgdGhpcy5fb25Ub3VjaGVkKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgdmFsdWUoKTogRGF0ZSB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gIH1cclxuXHJcbiAgb3BlbigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuY21hY3NPcGVuID0gdHJ1ZTtcclxuICAgIHRoaXMub3BlbkNoYW5nZS5lbWl0KHRoaXMuY21hY3NPcGVuKTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jbWFjc09wZW4gPSBmYWxzZTtcclxuICAgIHRoaXMub3BlbkNoYW5nZS5lbWl0KHRoaXMuY21hY3NPcGVuKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUF1dG9Gb2N1cygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzSW5pdCAmJiAhdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICBpZiAodGhpcy5hdXRvRm9jdXMpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQsICdhdXRvZm9jdXMnLCAnYXV0b2ZvY3VzJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50LCAnYXV0b2ZvY3VzJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2xpY2tDbGVhckJ0bigpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlQ2xzLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwge1xyXG4gICAgICBbYGFudC10aW1lLXBpY2tlcmBdOiB0cnVlLFxyXG4gICAgICBbYGFudC10aW1lLXBpY2tlci0ke3RoaXMuc2l6ZX1gXTogaXNOb3ROaWwodGhpcy5zaXplKVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmb2N1cygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBibHVyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudCkge1xyXG4gICAgICB0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIHVwZGF0ZUNsczogVXBkYXRlQ2xzLFxyXG4gICAgcHVibGljIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgdGhpcy5vcmlnaW4gPSBuZXcgQ2RrT3ZlcmxheU9yaWdpbih0aGlzLmVsZW1lbnQpO1xyXG4gICAgdGhpcy5mb3JtYXQgPSAhdGhpcy5mb3JtYXQgPyB0aGlzLnVzZTEySG91cnMgPyAnSEg6bW0nIDogJ0hIOm1tOnNzJyA6IHRoaXMuZm9ybWF0O1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3QgeyB1c2UxMkhvdXJzLCBmb3JtYXQgfSA9IGNoYW5nZXM7XHJcbiAgICBpZiAodXNlMTJIb3VycyAmJiAhdXNlMTJIb3Vycy5wcmV2aW91c1ZhbHVlICYmIHVzZTEySG91cnMuY3VycmVudFZhbHVlICYmICFmb3JtYXQpIHtcclxuICAgICAgdGhpcy5mb3JtYXQgPSAnaDptbTpzcyBhJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNJbml0ID0gdHJ1ZTtcclxuICAgIHRoaXMudXBkYXRlQXV0b0ZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHRpbWU6IERhdGUgfCBudWxsKTogdm9pZCB7XHJcbiAgICB0aGlzLl92YWx1ZSA9IHRpbWU7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh0aW1lOiBEYXRlIHwgbnVsbCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5fb25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==