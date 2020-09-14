/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { isNotNil, slideMotion, toBoolean, NzUpdateHostClassService as UpdateCls, InputBoolean } from 'ng-zorro-antd/core';
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
        this.hideSeconds = false;
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
                template: "<input\r\n  type=\"text\"\r\n  [nzTime]=\"format\"\r\n  class=\"ant-time-picker-input\"\r\n  [placeholder]=\"placeHolder || ('TimePicker.placeholder' | nzI18n)\"\r\n  [(ngModel)]=\"value\"\r\n  readonly=\"readonly\"\r\n  (click)=\"open()\"\r\n  #inputElement>\r\n<span class=\"ant-time-picker-icon\">\r\n  <i nz-icon type=\"clock-circle\"></i>\r\n</span>\r\n<i\r\n  *ngIf=\"allowEmpty && value\"\r\n  nz-icon\r\n  type=\"close-circle\"\r\n  theme=\"fill\"\r\n  class=\"anticon anticon-close-circle ant-time-picker-clear\"\r\n  tabindex=\"-1\"\r\n  [attr.aria-label]=\"clearText\"\r\n  [attr.title]=\"clearText\"\r\n  (click)=\"onClickClearBtn()\"\r\n></i>\r\n\r\n<ng-template\r\n  cdkConnectedOverlay\r\n  nzConnectedOverlay\r\n  cdkConnectedOverlayHasBackdrop\r\n  [cdkConnectedOverlayPositions]=\"overlayPositions\"\r\n  [cdkConnectedOverlayOrigin]=\"origin\"\r\n  [cdkConnectedOverlayOpen]=\"cmacsOpen\"\r\n  [cdkConnectedOverlayOffsetY]=\"-2\"\r\n  (detach)=\"close()\"\r\n  (backdropClick)=\"close()\">\r\n  <cmacs-datetime-picker-panel\r\n    [ngClass]=\"popupClassName\"\r\n    [@slideMotion]=\"'bottom'\"\r\n    [format]=\"format\"\r\n    [nzHourStep]=\"hourStep\"\r\n    [hideSeconds]=\"hideSeconds\"\r\n    [nzMinuteStep]=\"minuteStep\"\r\n    [nzSecondStep]=\"secondStep\"\r\n    [nzDisabledHours]=\"disabledHours\"\r\n    [nzDisabledMinutes]=\"disabledMinutes\"\r\n    [nzDisabledSeconds]=\"disabledSeconds\"\r\n    [nzPlaceHolder]=\"placeHolder || ('TimePicker.placeholder' | nzI18n)\"\r\n    [nzHideDisabledOptions]=\"hideDisabledOptions\"\r\n    [nzUse12Hours]=\"use12Hours\"\r\n    [nzDefaultOpenValue]=\"defaultOpenValue\"\r\n    [nzAddOn]=\"addOn\"\r\n    [opened]=\"cmacsOpen\"\r\n    [nzClearText]=\"clearText\"\r\n    [nzAllowEmpty]=\"allowEmpty\"\r\n    [(ngModel)]=\"value\">\r\n  </cmacs-datetime-picker-panel>\r\n</ng-template>\r\n\r\n",
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
    hideSeconds: [{ type: Input }],
    format: [{ type: Input }],
    openChange: [{ type: Output }],
    hideDisabledOptions: [{ type: Input }],
    allowEmpty: [{ type: Input }],
    autoFocus: [{ type: Input }],
    disabled: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsDateTimePickerComponent.prototype, "hideSeconds", void 0);
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
    CmacsDateTimePickerComponent.prototype.hideSeconds;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZGF0ZXRpbWUtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtZGF0ZXRpbWUtcGlja2VyL2NtYWNzLWRhdGV0aW1lLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQTBCLE1BQU0sc0JBQXNCLENBQUM7QUFDaEYsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBRVQsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSx3QkFBd0IsSUFBSSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFZM0gsTUFBTSxPQUFPLDRCQUE0Qjs7Ozs7OztJQThJdkMsWUFDVSxPQUFtQixFQUNuQixRQUFtQixFQUNuQixTQUFvQixFQUNyQixHQUFzQjtRQUhyQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNyQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWpKdkIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixXQUFNLEdBQWdCLElBQUksQ0FBQztRQUMzQixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBR25CLHlCQUFvQixHQUFHLEtBQUssQ0FBQztRQUNyQyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FB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Q0FBZTs7SUFDZiw4Q0FBeUI7O0lBQ3pCLHdEQVNFOztJQUNGLGdEQUFnRDs7SUFDaEQsNENBQW9DOztJQUNwQyxnREFBc0I7O0lBQ3RCLGtEQUF3Qjs7SUFDeEIsa0RBQXdCOztJQUN4QixpREFBNkI7O0lBQzdCLHNEQUE2Qjs7SUFDN0IsbURBQTBCOztJQUMxQiw2Q0FBa0M7O0lBQ2xDLHdEQUF1Qzs7SUFDdkMscURBQXVDOztJQUN2Qyx1REFBcUQ7O0lBQ3JELHVEQUFxRTs7SUFDckUsaURBQTJCOztJQUMzQixrREFBNEI7O0lBQzVCLG1EQUE2Qzs7SUFDN0MsOENBQXVCOztJQUN2QixrREFBNEQ7Ozs7O0lBMEcxRCwrQ0FBMkI7Ozs7O0lBQzNCLGdEQUEyQjs7Ozs7SUFDM0IsaURBQTRCOztJQUM1QiwyQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZGtPdmVybGF5T3JpZ2luLCBDb25uZWN0aW9uUG9zaXRpb25QYWlyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBpc05vdE5pbCwgc2xpZGVNb3Rpb24sIHRvQm9vbGVhbiwgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIGFzIFVwZGF0ZUNscywgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnc3NmL3R5cGVzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1kYXRldGltZS1waWNrZXInLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NEYXRlVGltZVBpY2tlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWRhdGV0aW1lLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgYW5pbWF0aW9uczogW3NsaWRlTW90aW9uXSxcclxuICBwcm92aWRlcnM6IFtVcGRhdGVDbHMsIHsgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIHVzZUV4aXN0aW5nOiBDbWFjc0RhdGVUaW1lUGlja2VyQ29tcG9uZW50LCBtdWx0aTogdHJ1ZSB9XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NEYXRlVGltZVBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XHJcbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcclxuICBwcml2YXRlIF92YWx1ZTogRGF0ZSB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgX2FsbG93RW1wdHkgPSB0cnVlO1xyXG4gIHByaXZhdGUgX2F1dG9Gb2N1cyA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX29uQ2hhbmdlOiAodmFsdWU6IERhdGUgfCBudWxsKSA9PiB2b2lkO1xyXG4gIHByaXZhdGUgX29uVG91Y2hlZDogKCkgPT4gdm9pZDtcclxuICBwcml2YXRlIF9oaWRlRGlzYWJsZWRPcHRpb25zID0gZmFsc2U7XHJcbiAgaXNJbml0ID0gZmFsc2U7XHJcbiAgb3JpZ2luOiBDZGtPdmVybGF5T3JpZ2luO1xyXG4gIG92ZXJsYXlQb3NpdGlvbnM6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXSA9IFtcclxuICAgIHtcclxuICAgICAgb3JpZ2luWDogJ3N0YXJ0JyxcclxuICAgICAgb3JpZ2luWTogJ3RvcCcsXHJcbiAgICAgIG92ZXJsYXlYOiAnZW5kJyxcclxuICAgICAgb3ZlcmxheVk6ICd0b3AnLFxyXG4gICAgICBvZmZzZXRYOiAwLFxyXG4gICAgICBvZmZzZXRZOiAwXHJcbiAgICB9XHJcbiAgXTtcclxuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnKSBpbnB1dFJlZjogRWxlbWVudFJlZjtcclxuICBASW5wdXQoKSBzaXplOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBob3VyU3RlcCA9IDE7XHJcbiAgQElucHV0KCkgbWludXRlU3RlcCA9IDE7XHJcbiAgQElucHV0KCkgc2Vjb25kU3RlcCA9IDE7XHJcbiAgQElucHV0KCkgY2xlYXJUZXh0ID0gJ2NsZWFyJztcclxuICBASW5wdXQoKSBwb3B1cENsYXNzTmFtZSA9ICcnO1xyXG4gIEBJbnB1dCgpIHBsYWNlSG9sZGVyID0gJyc7XHJcbiAgQElucHV0KCkgYWRkT246IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIGRlZmF1bHRPcGVuVmFsdWUgPSBuZXcgRGF0ZSgpO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkSG91cnM6ICgpID0+IG51bWJlcltdO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkTWludXRlczogKGhvdXI6IG51bWJlcikgPT4gbnVtYmVyW107XHJcbiAgQElucHV0KCkgZGlzYWJsZWRTZWNvbmRzOiAoaG91cjogbnVtYmVyLCBtaW51dGU6IG51bWJlcikgPT4gbnVtYmVyW107XHJcbiAgQElucHV0KCkgY21hY3NPcGVuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgdXNlMTJIb3VycyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBoaWRlU2Vjb25kcyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGZvcm1hdCA9IG51bGw7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGhpZGVEaXNhYmxlZE9wdGlvbnModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2hpZGVEaXNhYmxlZE9wdGlvbnMgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGhpZGVEaXNhYmxlZE9wdGlvbnMoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faGlkZURpc2FibGVkT3B0aW9ucztcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGFsbG93RW1wdHkodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2FsbG93RW1wdHkgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGFsbG93RW1wdHkoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fYWxsb3dFbXB0eTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGF1dG9Gb2N1cyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fYXV0b0ZvY3VzID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICAgIHRoaXMudXBkYXRlQXV0b0ZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgYXV0b0ZvY3VzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2F1dG9Gb2N1cztcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuIHwgc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgICBjb25zdCBpbnB1dCA9IHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGlucHV0LCAnZGlzYWJsZWQnLCAnJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZShpbnB1dCwgJ2Rpc2FibGVkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB8IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBzZXQgdmFsdWUodmFsdWU6IERhdGUgfCBudWxsKSB7XHJcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG4gICAgaWYgKHRoaXMuX29uQ2hhbmdlKSB7XHJcbiAgICAgIHRoaXMuX29uQ2hhbmdlKHRoaXMudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuX29uVG91Y2hlZCkge1xyXG4gICAgICB0aGlzLl9vblRvdWNoZWQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCB2YWx1ZSgpOiBEYXRlIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgfVxyXG5cclxuICBvcGVuKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jbWFjc09wZW4gPSB0cnVlO1xyXG4gICAgdGhpcy5vcGVuQ2hhbmdlLmVtaXQodGhpcy5jbWFjc09wZW4pO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNtYWNzT3BlbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5vcGVuQ2hhbmdlLmVtaXQodGhpcy5jbWFjc09wZW4pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQXV0b0ZvY3VzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNJbml0ICYmICF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIGlmICh0aGlzLmF1dG9Gb2N1cykge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudCwgJ2F1dG9mb2N1cycsICdhdXRvZm9jdXMnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQsICdhdXRvZm9jdXMnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DbGlja0NsZWFyQnRuKCk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVDbHMudXBkYXRlSG9zdENsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCB7XHJcbiAgICAgIFtgYW50LXRpbWUtcGlja2VyYF06IHRydWUsXHJcbiAgICAgIFtgYW50LXRpbWUtcGlja2VyLSR7dGhpcy5zaXplfWBdOiBpc05vdE5pbCh0aGlzLnNpemUpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZvY3VzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudCkge1xyXG4gICAgICB0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJsdXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudC5ibHVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgdXBkYXRlQ2xzOiBVcGRhdGVDbHMsXHJcbiAgICBwdWJsaWMgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICB0aGlzLm9yaWdpbiA9IG5ldyBDZGtPdmVybGF5T3JpZ2luKHRoaXMuZWxlbWVudCk7XHJcbiAgICB0aGlzLmZvcm1hdCA9ICF0aGlzLmZvcm1hdCA/IHRoaXMudXNlMTJIb3VycyA/ICdISDptbScgOiAnSEg6bW06c3MnIDogdGhpcy5mb3JtYXQ7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IHVzZTEySG91cnMsIGZvcm1hdCB9ID0gY2hhbmdlcztcclxuICAgIGlmICh1c2UxMkhvdXJzICYmICF1c2UxMkhvdXJzLnByZXZpb3VzVmFsdWUgJiYgdXNlMTJIb3Vycy5jdXJyZW50VmFsdWUgJiYgIWZvcm1hdCkge1xyXG4gICAgICB0aGlzLmZvcm1hdCA9ICdoOm1tOnNzIGEnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0luaXQgPSB0cnVlO1xyXG4gICAgdGhpcy51cGRhdGVBdXRvRm9jdXMoKTtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodGltZTogRGF0ZSB8IG51bGwpOiB2b2lkIHtcclxuICAgIHRoaXMuX3ZhbHVlID0gdGltZTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHRpbWU6IERhdGUgfCBudWxsKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLl9vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19