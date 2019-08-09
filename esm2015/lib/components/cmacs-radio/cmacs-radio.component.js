/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FocusMonitor } from '@angular/cdk/a11y';
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, Input, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { InputBoolean } from 'ng-zorro-antd/core';
export class CmacsRadioComponent {
    /* tslint:disable-next-line:no-any */
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
        this.select$ = new Subject();
        this.touched$ = new Subject();
        this.checked = false;
        this.isNgModel = false;
        this.disabled = false;
        this.autoFocus = false;
        this.onChange = (/**
         * @return {?}
         */
        () => null);
        this.onTouched = (/**
         * @return {?}
         */
        () => null);
        this.renderer.addClass(elementRef.nativeElement, 'ant-radio-wrapper');
    }
    /**
     * @return {?}
     */
    updateAutoFocus() {
        if (this.inputElement) {
            if (this.autoFocus) {
                this.renderer.setAttribute(this.inputElement.nativeElement, 'autofocus', 'autofocus');
            }
            else {
                this.renderer.removeAttribute(this.inputElement.nativeElement, 'autofocus');
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        // Prevent label click triggered twice.
        event.stopPropagation();
        event.preventDefault();
        if (!this.disabled && !this.checked) {
            this.select$.next(this);
            if (this.isNgModel) {
                this.checked = true;
                this.onChange(true);
            }
        }
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
    markForCheck() {
        this.cdr.markForCheck();
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
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.checked = value;
        this.cdr.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.isNgModel = true;
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
     * @return {?}
     */
    ngAfterViewInit() {
        this.focusMonitor.monitor(this.elementRef, true).subscribe((/**
         * @param {?} focusOrigin
         * @return {?}
         */
        focusOrigin => {
            if (!focusOrigin) {
                Promise.resolve().then((/**
                 * @return {?}
                 */
                () => this.onTouched()));
                this.touched$.next();
            }
        }));
        this.updateAutoFocus();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzAutoFocus) {
            this.updateAutoFocus();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.elementRef);
    }
}
CmacsRadioComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line: component-selector
                selector: '[cmacs-radio]',
                exportAs: 'cmacsRadio',
                preserveWhitespaces: false,
                template: "<span class=\"ant-radio\" [class.ant-radio-checked]=\"checked\" [class.ant-radio-disabled]=\"disabled\">\r\n  <input #inputElement type=\"radio\" class=\"ant-radio-input\" [disabled]=\"disabled\" [checked]=\"checked\" [attr.name]=\"name\">\r\n  <span class=\"ant-radio-inner\"></span>\r\n</span>\r\n<span><ng-content></ng-content></span>\r\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => CmacsRadioComponent)),
                        multi: true
                    }
                ],
                // tslint:disable-next-line: use-host-property-decorator
                host: {
                    '[class.ant-radio-wrapper-checked]': 'checked',
                    '[class.ant-radio-wrapper-disabled]': 'disabled'
                },
                styles: [".ant-radio-inner::after{top:1px;left:1px;width:12px;height:12px;background-color:#2a7cff}.ant-radio-checked .ant-radio-inner,.ant-radio-checked .ant-radio-inner:focus,.ant-radio-input:focus+.ant-radio-inner,.ant-radio-wrapper:hover .ant-radio,.ant-radio:hover .ant-radio-inner{border-color:#bec4cd}.ant-radio-input:focus+.ant-radio-inner{box-shadow:0 0 0 3px rgba(190,196,205,.08)}.ant-radio-checked:hover .ant-radio-inner{border-color:#2a7cff}.ant-radio-wrapper{font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#97a0ae}"]
            }] }
];
/** @nocollapse */
CmacsRadioComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: FocusMonitor }
];
CmacsRadioComponent.propDecorators = {
    inputElement: [{ type: ViewChild, args: ['inputElement',] }],
    value: [{ type: Input }],
    disabled: [{ type: Input }],
    autoFocus: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsRadioComponent.prototype, "disabled", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsRadioComponent.prototype, "autoFocus", void 0);
if (false) {
    /** @type {?} */
    CmacsRadioComponent.prototype.select$;
    /** @type {?} */
    CmacsRadioComponent.prototype.touched$;
    /** @type {?} */
    CmacsRadioComponent.prototype.checked;
    /** @type {?} */
    CmacsRadioComponent.prototype.name;
    /** @type {?} */
    CmacsRadioComponent.prototype.isNgModel;
    /** @type {?} */
    CmacsRadioComponent.prototype.inputElement;
    /** @type {?} */
    CmacsRadioComponent.prototype.value;
    /** @type {?} */
    CmacsRadioComponent.prototype.disabled;
    /** @type {?} */
    CmacsRadioComponent.prototype.autoFocus;
    /** @type {?} */
    CmacsRadioComponent.prototype.onChange;
    /** @type {?} */
    CmacsRadioComponent.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    CmacsRadioComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    CmacsRadioComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    CmacsRadioComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    CmacsRadioComponent.prototype.focusMonitor;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtcmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1yYWRpby9jbWFjcy1yYWRpby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUNMLFVBQVUsRUFFVix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFHTCxTQUFTLEVBRVQsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUF3QmxELE1BQU0sT0FBTyxtQkFBbUI7Ozs7Ozs7O0lBRzlCLFlBQ1UsVUFBc0IsRUFDdEIsUUFBbUIsRUFDbkIsR0FBc0IsRUFDdEIsWUFBMEI7UUFIMUIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBSXBDLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBdUIsQ0FBQztRQUM3QyxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUMvQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBRWhCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFJTyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0MsYUFBUTs7O1FBQXlCLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBQztRQUM1QyxjQUFTOzs7UUFBZSxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUM7UUFiakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Ozs7SUFjRCxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO2FBQ3ZGO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO2FBQzdFO1NBQ0Y7SUFDSCxDQUFDOzs7OztJQUdELE9BQU8sQ0FBQyxLQUFpQjtRQUN2Qix1Q0FBdUM7UUFDdkMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNyQjtTQUNGO0lBQ0gsQ0FBQzs7OztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDekMsQ0FBQzs7OztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxLQUFjO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFzQjtRQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLEVBQVk7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxXQUFXLENBQUMsRUFBRTtZQUN2RSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNoQixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSTs7O2dCQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBQyxDQUFDO2dCQUMvQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3RCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsV0FBVyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3BELENBQUM7OztZQXZIRixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsaVdBQTJDO2dCQUUzQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVTs7O3dCQUFDLEdBQUcsRUFBRSxDQUFDLG1CQUFtQixFQUFDO3dCQUNsRCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjs7Z0JBRUQsSUFBSSxFQUFFO29CQUNKLG1DQUFtQyxFQUFFLFNBQVM7b0JBQzlDLG9DQUFvQyxFQUFFLFVBQVU7aUJBQ2pEOzthQUNGOzs7O1lBcENDLFVBQVU7WUFLVixTQUFTO1lBUFQsaUJBQWlCO1lBTFYsWUFBWTs7OzJCQTREbEIsU0FBUyxTQUFDLGNBQWM7b0JBRXhCLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3NCQWNMLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0FBZlI7SUFBZixZQUFZLEVBQUU7O3FEQUFrQjtBQUNqQjtJQUFmLFlBQVksRUFBRTs7c0RBQW1COzs7SUFUM0Msc0NBQTZDOztJQUM3Qyx1Q0FBK0I7O0lBQy9CLHNDQUFnQjs7SUFDaEIsbUNBQWE7O0lBQ2Isd0NBQWtCOztJQUNsQiwyQ0FBb0Q7O0lBRXBELG9DQUFvQjs7SUFDcEIsdUNBQTBDOztJQUMxQyx3Q0FBMkM7O0lBQzNDLHVDQUE0Qzs7SUFDNUMsd0NBQW1DOzs7OztJQWxCakMseUNBQThCOzs7OztJQUM5Qix1Q0FBMkI7Ozs7O0lBQzNCLGtDQUE4Qjs7Ozs7SUFDOUIsMkNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9jdXNNb25pdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xyXG5pbXBvcnQge1xyXG4gIGZvcndhcmRSZWYsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdbY21hY3MtcmFkaW9dJyxcclxuICBleHBvcnRBczogJ2NtYWNzUmFkaW8nLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1yYWRpby5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtcmFkaW8uY29tcG9uZW50LmNzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDbWFjc1JhZGlvQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdLFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHVzZS1ob3N0LXByb3BlcnR5LWRlY29yYXRvclxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LXJhZGlvLXdyYXBwZXItY2hlY2tlZF0nOiAnY2hlY2tlZCcsXHJcbiAgICAnW2NsYXNzLmFudC1yYWRpby13cmFwcGVyLWRpc2FibGVkXSc6ICdkaXNhYmxlZCdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1JhZGlvQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBmb2N1c01vbml0b3I6IEZvY3VzTW9uaXRvclxyXG4gICkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtcmFkaW8td3JhcHBlcicpO1xyXG4gIH1cclxuICBzZWxlY3QkID0gbmV3IFN1YmplY3Q8Q21hY3NSYWRpb0NvbXBvbmVudD4oKTtcclxuICB0b3VjaGVkJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgY2hlY2tlZCA9IGZhbHNlO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBpc05nTW9kZWwgPSBmYWxzZTtcclxuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnKSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIEBJbnB1dCgpIHZhbHVlOiBhbnk7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGF1dG9Gb2N1cyA9IGZhbHNlO1xyXG4gIG9uQ2hhbmdlOiAoXzogYm9vbGVhbikgPT4gdm9pZCA9ICgpID0+IG51bGw7XHJcbiAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcclxuXHJcbiAgdXBkYXRlQXV0b0ZvY3VzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50KSB7XHJcbiAgICAgIGlmICh0aGlzLmF1dG9Gb2N1cykge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdhdXRvZm9jdXMnLCAnYXV0b2ZvY3VzJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2F1dG9mb2N1cycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgb25DbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgLy8gUHJldmVudCBsYWJlbCBjbGljayB0cmlnZ2VyZWQgdHdpY2UuXHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgIXRoaXMuY2hlY2tlZCkge1xyXG4gICAgICB0aGlzLnNlbGVjdCQubmV4dCh0aGlzKTtcclxuICAgICAgaWYgKHRoaXMuaXNOZ01vZGVsKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlKHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb2N1cygpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9jdXNNb25pdG9yLmZvY3VzVmlhKHRoaXMuaW5wdXRFbGVtZW50LCAna2V5Ym9hcmQnKTtcclxuICB9XHJcblxyXG4gIGJsdXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmJsdXIoKTtcclxuICB9XHJcblxyXG4gIG1hcmtGb3JDaGVjaygpOiB2b2lkIHtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5jaGVja2VkID0gdmFsdWU7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBib29sZWFuKSA9PiB7fSk6IHZvaWQge1xyXG4gICAgdGhpcy5pc05nTW9kZWwgPSB0cnVlO1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5mb2N1c01vbml0b3IubW9uaXRvcih0aGlzLmVsZW1lbnRSZWYsIHRydWUpLnN1YnNjcmliZShmb2N1c09yaWdpbiA9PiB7XHJcbiAgICAgIGlmICghZm9jdXNPcmlnaW4pIHtcclxuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMub25Ub3VjaGVkKCkpO1xyXG4gICAgICAgIHRoaXMudG91Y2hlZCQubmV4dCgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMudXBkYXRlQXV0b0ZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5uekF1dG9Gb2N1cykge1xyXG4gICAgICB0aGlzLnVwZGF0ZUF1dG9Gb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5zdG9wTW9uaXRvcmluZyh0aGlzLmVsZW1lbnRSZWYpO1xyXG4gIH1cclxufVxyXG4iXX0=