/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FocusMonitor } from '@angular/cdk/a11y';
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Optional, Output, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { isEmpty, InputBoolean } from 'ng-zorro-antd/core';
import { CmacsCheckboxWrapperComponent } from './cmacs-checkbox-wrapper.component';
var CmacsCheckboxComponent = /** @class */ (function () {
    function CmacsCheckboxComponent(elementRef, renderer, cmacsCheckboxWrapperComponent, cdr, focusMonitor) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.cmacsCheckboxWrapperComponent = cmacsCheckboxWrapperComponent;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        // tslint:disable-next-line:no-any
        this.onChange = (/**
         * @return {?}
         */
        function () { return null; });
        // tslint:disable-next-line:no-any
        this.onTouched = (/**
         * @return {?}
         */
        function () { return null; });
        this.checkedChange = new EventEmitter();
        this.theme = 'light';
        this.autoFocus = false;
        this.disabled = false;
        this.indeterminate = false;
        this.checked = false;
        renderer.addClass(elementRef.nativeElement, 'ant-checkbox-wrapper');
    }
    /**
     * @param {?} e
     * @return {?}
     */
    CmacsCheckboxComponent.prototype.hostClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.preventDefault();
        this.focus();
        this.innerCheckedChange(!this.checked);
    };
    /**
     * @param {?} checked
     * @return {?}
     */
    CmacsCheckboxComponent.prototype.innerCheckedChange = /**
     * @param {?} checked
     * @return {?}
     */
    function (checked) {
        if (!this.disabled) {
            this.checked = checked;
            this.onChange(this.checked);
            this.checkedChange.emit(this.checked);
            if (this.cmacsCheckboxWrapperComponent) {
                this.cmacsCheckboxWrapperComponent.onChange();
            }
        }
    };
    /**
     * @return {?}
     */
    CmacsCheckboxComponent.prototype.updateAutoFocus = /**
     * @return {?}
     */
    function () {
        if (this.inputElement && this.autoFocus) {
            this.renderer.setAttribute(this.inputElement.nativeElement, 'autofocus', 'autofocus');
        }
        else {
            this.renderer.removeAttribute(this.inputElement.nativeElement, 'autofocus');
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsCheckboxComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.checked = value;
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CmacsCheckboxComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CmacsCheckboxComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    CmacsCheckboxComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    CmacsCheckboxComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.focusMonitor.focusVia(this.inputElement, 'keyboard');
    };
    /**
     * @return {?}
     */
    CmacsCheckboxComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        this.inputElement.nativeElement.blur();
    };
    /**
     * @return {?}
     */
    CmacsCheckboxComponent.prototype.checkContent = /**
     * @return {?}
     */
    function () {
        if (isEmpty(this.contentElement.nativeElement)) {
            this.renderer.setStyle(this.contentElement.nativeElement, 'display', 'none');
        }
        else {
            this.renderer.removeStyle(this.contentElement.nativeElement, 'display');
        }
    };
    /**
     * @return {?}
     */
    CmacsCheckboxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.focusMonitor.monitor(this.elementRef, true).subscribe((/**
         * @param {?} focusOrigin
         * @return {?}
         */
        function (focusOrigin) {
            if (!focusOrigin) {
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () { return _this.onTouched(); }));
            }
        }));
        if (this.cmacsCheckboxWrapperComponent) {
            this.cmacsCheckboxWrapperComponent.addCheckbox(this);
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsCheckboxComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzAutoFocus) {
            this.updateAutoFocus();
        }
    };
    /**
     * @return {?}
     */
    CmacsCheckboxComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.updateAutoFocus();
        this.checkContent();
    };
    /**
     * @return {?}
     */
    CmacsCheckboxComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.focusMonitor.stopMonitoring(this.elementRef);
        if (this.cmacsCheckboxWrapperComponent) {
            this.cmacsCheckboxWrapperComponent.removeCheckbox(this);
        }
    };
    CmacsCheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: '[cmacs-checkbox]',
                    exportAs: 'cmacsCheckbox',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "<span class=\"ant-checkbox\"\r\n  [class.ant-checkbox-checked]=\"checked && !indeterminate\"\r\n  [class.ant-checkbox-disabled]=\"disabled\"\r\n  [class.cmacs-dark-theme]=\"theme === 'dark'\"\r\n  [class.ant-checkbox-indeterminate]=\"indeterminate\">\r\n  <input #inputElement [checked]=\"checked\" [ngModel]=\"checked\" [disabled]=\"disabled\" (ngModelChange)=\"innerCheckedChange($event)\" (click)=\"$event.stopPropagation();\" type=\"checkbox\" class=\"ant-checkbox-input\">\r\n  <span class=\"ant-checkbox-inner\"></span>\r\n</span>\r\n<span #contentElement (cdkObserveContent)=\"checkContent()\"><ng-content></ng-content></span>\r\n",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return CmacsCheckboxComponent; })),
                            multi: true
                        }
                    ],
                    host: {
                        '(click)': 'hostClick($event)'
                    },
                    styles: [".ant-checkbox-wrapper{font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#97a0ae}.ant-checkbox-checked .ant-checkbox-inner::after{border-color:#2a7cff}.ant-checkbox-checked .ant-checkbox-inner{background-color:#fff;border-color:#dee0e5}.ant-checkbox-indeterminate .ant-checkbox-inner::after{width:10px;height:10px;background-color:#2a7cff}.ant-checkbox-disabled .ant-checkbox-inner{background-color:#f6f7fb;border-color:#dee0e5!important}.ant-checkbox-input:focus+.ant-checkbox-inner,.ant-checkbox-wrapper:hover .ant-checkbox-inner,.ant-checkbox:hover .ant-checkbox-inner{border-color:#bec4cd}.ant-checkbox-input:focus+.ant-checkbox-inner{box-shadow:0 0 0 3px rgba(190,196,205,.08)}.ant-checkbox-checked:hover .ant-checkbox-inner,.ant-checkbox-indeterminate:hover .ant-checkbox-inner{border-color:#2a7cff}.cmacs-dark-theme.ant-checkbox-checked .ant-checkbox-inner{background-color:#0d1e3b;border-color:#2d3d5a}.cmacs-dark-theme .ant-checkbox-inner{background-color:#0d1e3b;border:1px solid #2d3d5a}.cmacs-dark-theme.ant-checkbox-indeterminate .ant-checkbox-inner::after{width:10px;height:10px;background-color:#2a7cff}.cmacs-dark-theme.ant-checkbox-disabled .ant-checkbox-inner{background-color:#6a7693;border-color:#2d3d5a!important}.cmacs-dark-theme.ant-checkbox-input:focus+.ant-checkbox-inner,.cmacs-dark-theme.ant-checkbox-wrapper:hover .ant-checkbox-inner,.cmacs-dark-theme.ant-checkbox:hover .ant-checkbox-inner{border-color:#2d3d5a}.cmacs-dark-theme.ant-checkbox-input:focus+.ant-checkbox-inner{box-shadow:0 0 0 3px rgba(190,196,205,.08)}.cmacs-dark-theme.ant-checkbox-checked:hover .ant-checkbox-inner,.cmacs-dark-theme.ant-checkbox-indeterminate:hover .ant-checkbox-inner{border-color:#2a7cff}"]
                }] }
    ];
    /** @nocollapse */
    CmacsCheckboxComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: CmacsCheckboxWrapperComponent, decorators: [{ type: Optional }] },
        { type: ChangeDetectorRef },
        { type: FocusMonitor }
    ]; };
    CmacsCheckboxComponent.propDecorators = {
        inputElement: [{ type: ViewChild, args: ['inputElement',] }],
        contentElement: [{ type: ViewChild, args: ['contentElement',] }],
        checkedChange: [{ type: Output }],
        value: [{ type: Input }],
        theme: [{ type: Input }],
        autoFocus: [{ type: Input }],
        disabled: [{ type: Input }],
        indeterminate: [{ type: Input }],
        checked: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsCheckboxComponent.prototype, "autoFocus", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsCheckboxComponent.prototype, "disabled", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsCheckboxComponent.prototype, "indeterminate", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsCheckboxComponent.prototype, "checked", void 0);
    return CmacsCheckboxComponent;
}());
export { CmacsCheckboxComponent };
if (false) {
    /** @type {?} */
    CmacsCheckboxComponent.prototype.onChange;
    /** @type {?} */
    CmacsCheckboxComponent.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    CmacsCheckboxComponent.prototype.inputElement;
    /**
     * @type {?}
     * @private
     */
    CmacsCheckboxComponent.prototype.contentElement;
    /** @type {?} */
    CmacsCheckboxComponent.prototype.checkedChange;
    /** @type {?} */
    CmacsCheckboxComponent.prototype.value;
    /** @type {?} */
    CmacsCheckboxComponent.prototype.theme;
    /** @type {?} */
    CmacsCheckboxComponent.prototype.autoFocus;
    /** @type {?} */
    CmacsCheckboxComponent.prototype.disabled;
    /** @type {?} */
    CmacsCheckboxComponent.prototype.indeterminate;
    /** @type {?} */
    CmacsCheckboxComponent.prototype.checked;
    /**
     * @type {?}
     * @private
     */
    CmacsCheckboxComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    CmacsCheckboxComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    CmacsCheckboxComponent.prototype.cmacsCheckboxWrapperComponent;
    /**
     * @type {?}
     * @private
     */
    CmacsCheckboxComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    CmacsCheckboxComponent.prototype.focusMonitor;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1jaGVja2JveC9jbWFjcy1jaGVja2JveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUNMLFVBQVUsRUFFVix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFFVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTNELE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBSW5GO0lBNkZFLGdDQUNVLFVBQW1DLEVBQ25DLFFBQW1CLEVBQ1AsNkJBQTRELEVBQ3hFLEdBQXNCLEVBQ3RCLFlBQTBCO1FBSjFCLGVBQVUsR0FBVixVQUFVLENBQXlCO1FBQ25DLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDUCxrQ0FBNkIsR0FBN0IsNkJBQTZCLENBQStCO1FBQ3hFLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLGlCQUFZLEdBQVosWUFBWSxDQUFjOztRQTdFcEMsYUFBUTs7O1FBQXlCLGNBQU0sT0FBQSxJQUFJLEVBQUosQ0FBSSxFQUFDOztRQUU1QyxjQUFTOzs7UUFBYyxjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksRUFBQztRQUdmLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUV0RCxVQUFLLEdBQWUs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bSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xyXG5pbXBvcnQge1xyXG4gIGZvcndhcmRSZWYsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBpc0VtcHR5LCBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ21hY3NDaGVja2JveFdyYXBwZXJDb21wb25lbnQgfSBmcm9tICcuL2NtYWNzLWNoZWNrYm94LXdyYXBwZXIuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCB0eXBlIENtYWNzVGhlbWUgPSAnbGlnaHQnIHwgJ2RhcmsnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdbY21hY3MtY2hlY2tib3hdJyxcclxuICBleHBvcnRBczogJ2NtYWNzQ2hlY2tib3gnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWNoZWNrYm94LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1jaGVja2JveC5jb21wb25lbnQuY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDbWFjc0NoZWNrYm94Q29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdLFxyXG4gIGhvc3Q6IHtcclxuICAgICcoY2xpY2spJzogJ2hvc3RDbGljaygkZXZlbnQpJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzQ2hlY2tib3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIG9uQ2hhbmdlOiAodmFsdWU6IGFueSkgPT4gdm9pZCA9ICgpID0+IG51bGw7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIG9uVG91Y2hlZDogKCkgPT4gYW55ID0gKCkgPT4gbnVsbDtcclxuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnKSBwcml2YXRlIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdjb250ZW50RWxlbWVudCcpIHByaXZhdGUgY29udGVudEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoZWNrZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZztcclxuICBASW5wdXQoKSB0aGVtZTogQ21hY3NUaGVtZSA9ICdsaWdodCc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGF1dG9Gb2N1cyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBpbmRldGVybWluYXRlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNoZWNrZWQgPSBmYWxzZTtcclxuXHJcbiAgaG9zdENsaWNrKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuZm9jdXMoKTtcclxuICAgIHRoaXMuaW5uZXJDaGVja2VkQ2hhbmdlKCF0aGlzLmNoZWNrZWQpO1xyXG4gIH1cclxuXHJcbiAgaW5uZXJDaGVja2VkQ2hhbmdlKGNoZWNrZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLmNoZWNrZWQgPSBjaGVja2VkO1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuY2hlY2tlZCk7XHJcbiAgICAgIHRoaXMuY2hlY2tlZENoYW5nZS5lbWl0KHRoaXMuY2hlY2tlZCk7XHJcbiAgICAgIGlmICh0aGlzLmNtYWNzQ2hlY2tib3hXcmFwcGVyQ29tcG9uZW50KSB7XHJcbiAgICAgICAgdGhpcy5jbWFjc0NoZWNrYm94V3JhcHBlckNvbXBvbmVudC5vbkNoYW5nZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVBdXRvRm9jdXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQgJiYgdGhpcy5hdXRvRm9jdXMpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2F1dG9mb2N1cycsICdhdXRvZm9jdXMnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdhdXRvZm9jdXMnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuY2hlY2tlZCA9IHZhbHVlO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYm9vbGVhbikgPT4ge30pOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIGZvY3VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5mb2N1c01vbml0b3IuZm9jdXNWaWEodGhpcy5pbnB1dEVsZW1lbnQsICdrZXlib2FyZCcpO1xyXG4gIH1cclxuXHJcbiAgYmx1cigpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tDb250ZW50KCk6IHZvaWQge1xyXG4gICAgaWYgKGlzRW1wdHkodGhpcy5jb250ZW50RWxlbWVudC5uYXRpdmVFbGVtZW50KSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmNvbnRlbnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGNtYWNzQ2hlY2tib3hXcmFwcGVyQ29tcG9uZW50OiBDbWFjc0NoZWNrYm94V3JhcHBlckNvbXBvbmVudCxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3JcclxuICApIHtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1jaGVja2JveC13cmFwcGVyJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9jdXNNb25pdG9yLm1vbml0b3IodGhpcy5lbGVtZW50UmVmLCB0cnVlKS5zdWJzY3JpYmUoZm9jdXNPcmlnaW4gPT4ge1xyXG4gICAgICBpZiAoIWZvY3VzT3JpZ2luKSB7XHJcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLm9uVG91Y2hlZCgpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAodGhpcy5jbWFjc0NoZWNrYm94V3JhcHBlckNvbXBvbmVudCkge1xyXG4gICAgICB0aGlzLmNtYWNzQ2hlY2tib3hXcmFwcGVyQ29tcG9uZW50LmFkZENoZWNrYm94KHRoaXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubnpBdXRvRm9jdXMpIHtcclxuICAgICAgdGhpcy51cGRhdGVBdXRvRm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlQXV0b0ZvY3VzKCk7XHJcbiAgICB0aGlzLmNoZWNrQ29udGVudCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5zdG9wTW9uaXRvcmluZyh0aGlzLmVsZW1lbnRSZWYpO1xyXG4gICAgaWYgKHRoaXMuY21hY3NDaGVja2JveFdyYXBwZXJDb21wb25lbnQpIHtcclxuICAgICAgdGhpcy5jbWFjc0NoZWNrYm94V3JhcHBlckNvbXBvbmVudC5yZW1vdmVDaGVja2JveCh0aGlzKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19