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
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { isNonEmptyString, isTemplateRef } from 'ng-zorro-antd/core';
var CalendarFooterComponent = /** @class */ (function () {
    function CalendarFooterComponent() {
        this.showToday = false;
        this.hasTimePicker = false;
        this.isRange = false;
        this.showTimePicker = false;
        this.showTimePickerChange = new EventEmitter();
        this.timePickerDisabled = false;
        this.okDisabled = false;
        this.clickOk = new EventEmitter();
        this.clickToday = new EventEmitter();
        this.prefixCls = 'ant-calendar';
        this.isTemplateRef = isTemplateRef;
        this.isNonEmptyString = isNonEmptyString;
    }
    CalendarFooterComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line:component-selector
                    selector: 'calendar-footer',
                    exportAs: 'calendarFooter',
                    template: "<div class=\"{{ prefixCls }}-footer {{ isRange ? prefixCls + '-range-bottom' : '' }} {{ hasTimePicker ? prefixCls + '-footer-show-ok' : '' }}\">\r\n  <div *ngIf=\"rangeQuickSelector\" class=\"{{ prefixCls }}-footer-extra {{ prefixCls }}-range-quick-selector\">\r\n    <ng-container *ngTemplateOutlet=\"rangeQuickSelector\"></ng-container>\r\n  </div>\r\n  <div *ngIf=\"extraFooter\" class=\"{{ prefixCls }}-footer-extra {{ isRange ? prefixCls + '-range-quick-selector' : '' }}\">\r\n    <ng-container [ngSwitch]=\"true\">\r\n      <ng-container *ngSwitchCase=\"isTemplateRef(extraFooter)\">\r\n        <ng-container *ngTemplateOutlet=\"extraFooter\"></ng-container>\r\n      </ng-container>\r\n      <ng-container *ngSwitchCase=\"isNonEmptyString(extraFooter)\">\r\n        <span [innerHTML]=\"extraFooter\"></span>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n  <span *ngIf=\"showToday || hasTimePicker\" class=\"{{ prefixCls }}-footer-btn\">\r\n    <today-button\r\n      *ngIf=\"showToday\"\r\n      [locale]=\"locale\"\r\n      [disabledDate]=\"disabledDate\"\r\n      [hasTimePicker]=\"hasTimePicker\"\r\n      (clickToday)=\"clickToday.emit($event)\"\r\n    ></today-button>\r\n    <time-picker-button\r\n      *ngIf=\"hasTimePicker\"\r\n      [locale]=\"locale\"\r\n      [timePickerDisabled]=\"timePickerDisabled\"\r\n      [showTimePicker]=\"showTimePicker\"\r\n      (showTimePickerChange)=\"showTimePickerChange.emit($event)\"\r\n    ></time-picker-button>\r\n    <ok-button\r\n      *ngIf=\"hasTimePicker\"\r\n      [okDisabled]=\"okDisabled\"\r\n      [locale]=\"locale\"\r\n      (clickOk)=\"clickOk.emit()\"\r\n    ></ok-button>\r\n  </span>\r\n</div>"
                }] }
    ];
    CalendarFooterComponent.propDecorators = {
        locale: [{ type: Input }],
        showToday: [{ type: Input }],
        hasTimePicker: [{ type: Input }],
        isRange: [{ type: Input }],
        showTimePicker: [{ type: Input }],
        showTimePickerChange: [{ type: Output }],
        timePickerDisabled: [{ type: Input }],
        okDisabled: [{ type: Input }],
        disabledDate: [{ type: Input }],
        extraFooter: [{ type: Input }],
        rangeQuickSelector: [{ type: Input }],
        clickOk: [{ type: Output }],
        clickToday: [{ type: Output }]
    };
    return CalendarFooterComponent;
}());
export { CalendarFooterComponent };
if (false) {
    /** @type {?} */
    CalendarFooterComponent.prototype.locale;
    /** @type {?} */
    CalendarFooterComponent.prototype.showToday;
    /** @type {?} */
    CalendarFooterComponent.prototype.hasTimePicker;
    /** @type {?} */
    CalendarFooterComponent.prototype.isRange;
    /** @type {?} */
    CalendarFooterComponent.prototype.showTimePicker;
    /** @type {?} */
    CalendarFooterComponent.prototype.showTimePickerChange;
    /** @type {?} */
    CalendarFooterComponent.prototype.timePickerDisabled;
    /** @type {?} */
    CalendarFooterComponent.prototype.okDisabled;
    /** @type {?} */
    CalendarFooterComponent.prototype.disabledDate;
    /** @type {?} */
    CalendarFooterComponent.prototype.extraFooter;
    /** @type {?} */
    CalendarFooterComponent.prototype.rangeQuickSelector;
    /** @type {?} */
    CalendarFooterComponent.prototype.clickOk;
    /** @type {?} */
    CalendarFooterComponent.prototype.clickToday;
    /** @type {?} */
    CalendarFooterComponent.prototype.prefixCls;
    /** @type {?} */
    CalendarFooterComponent.prototype.isTemplateRef;
    /** @type {?} */
    CalendarFooterComponent.prototype.isNonEmptyString;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtZGF0ZS1waWNrZXIvbGliL2NhbGVuZGFyL2NhbGVuZGFyLWZvb3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUlyRTtJQUFBO1FBVVcsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUMvQixZQUFPLEdBQVksS0FBSyxDQUFDO1FBRXpCLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ3RCLHlCQUFvQixHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFFN0QsdUJBQWtCLEdBQVksS0FBSyxDQUFDO1FBQ3BDLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFLbEIsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDbkMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7UUFFOUQsY0FBUyxHQUFXLGNBQWMsQ0FBQztRQUNuQyxrQkFBYSxHQUFHLGFBQWEsQ0FBQztRQUM5QixxQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztJQUN0QyxDQUFDOztnQkE3QkEsU0FBUyxTQUFDO29CQUNULGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7b0JBRS9DLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLGdxREFBNkM7aUJBQzlDOzs7eUJBRUUsS0FBSzs0QkFDTCxLQUFLO2dDQUNMLEtBQUs7MEJBQ0wsS0FBSztpQ0FFTCxLQUFLO3VDQUNMLE1BQU07cUNBRU4sS0FBSzs2QkFDTCxLQUFLOytCQUNMLEtBQUs7OEJBQ0wsS0FBSztxQ0FDTCxLQUFLOzBCQUVMLE1BQU07NkJBQ04sTUFBTTs7SUFLVCw4QkFBQztDQUFBLEFBN0JELElBNkJDO1NBckJZLHVCQUF1Qjs7O0lBQ2xDLHlDQUF5Qzs7SUFDekMsNENBQW9DOztJQUNwQyxnREFBd0M7O0lBQ3hDLDBDQUFrQzs7SUFFbEMsaURBQXlDOztJQUN6Qyx1REFBc0U7O0lBRXRFLHFEQUE2Qzs7SUFDN0MsNkNBQXFDOztJQUNyQywrQ0FBNEM7O0lBQzVDLDhDQUFpRDs7SUFDakQscURBQStDOztJQUUvQywwQ0FBc0Q7O0lBQ3RELDZDQUE4RDs7SUFFOUQsNENBQW1DOztJQUNuQyxnREFBOEI7O0lBQzlCLG1EQUFvQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgaXNOb25FbXB0eVN0cmluZywgaXNUZW1wbGF0ZVJlZiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnLi4vY2FuZHktZGF0ZS9jYW5keS1kYXRlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnY2FsZW5kYXItZm9vdGVyJyxcclxuICBleHBvcnRBczogJ2NhbGVuZGFyRm9vdGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJ2NhbGVuZGFyLWZvb3Rlci5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENhbGVuZGFyRm9vdGVyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBsb2NhbGU6IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlO1xyXG4gIEBJbnB1dCgpIHNob3dUb2RheTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGhhc1RpbWVQaWNrZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBpc1JhbmdlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIHNob3dUaW1lUGlja2VyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNob3dUaW1lUGlja2VyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBASW5wdXQoKSB0aW1lUGlja2VyRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBva0Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZGlzYWJsZWREYXRlOiAoZDogRGF0ZSkgPT4gYm9vbGVhbjtcclxuICBASW5wdXQoKSBleHRyYUZvb3RlcjogVGVtcGxhdGVSZWY8dm9pZD4gfCBzdHJpbmc7XHJcbiAgQElucHV0KCkgcmFuZ2VRdWlja1NlbGVjdG9yOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNsaWNrT2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNsaWNrVG9kYXkgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4oKTtcclxuXHJcbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW50LWNhbGVuZGFyJztcclxuICBpc1RlbXBsYXRlUmVmID0gaXNUZW1wbGF0ZVJlZjtcclxuICBpc05vbkVtcHR5U3RyaW5nID0gaXNOb25FbXB0eVN0cmluZztcclxufVxyXG4iXX0=