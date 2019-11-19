/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { toBoolean, valueFunctionProp, InputBoolean, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { DateHelperService, NzI18nService } from 'ng-zorro-antd/i18n';
import { AbstractPickerComponent } from './abstract-picker.component';
export class CmacsDateRangePickerComponent extends AbstractPickerComponent {
    /**
     * @param {?} i18n
     * @param {?} cdr
     * @param {?} dateHelper
     * @param {?=} noAnimation
     */
    constructor(i18n, cdr, dateHelper, noAnimation) {
        super(i18n, cdr, dateHelper, noAnimation);
        this.showWeek = false; // Should show as week picker
        this.showToday = false;
        this.cmacsOnPanelChange = new EventEmitter();
        this.cmacsOnCalendarChange = new EventEmitter();
        this.openPickerTitle = '';
        this.openPickerSubtitle = '';
        this.openPickerLeftRangeSub = '';
        this.openPickerRightRangeSub = '';
        this.cmacsOnOk = new EventEmitter();
        if (this.isRange) {
            this.value = (/** @type {?} */ (this.value));
        }
        else {
            this.value = (/** @type {?} */ (this.value));
        }
    }
    /**
     * @return {?}
     */
    get showTime() {
        return this._showTime;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set showTime(value) {
        this._showTime = typeof value === 'object' ? value : toBoolean(value);
    }
    /**
     * @return {?}
     */
    get realShowToday() {
        return !this.isRange && this.showToday;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        // Default format when it's empty
        if (!this.format) {
            if (this.showWeek) {
                this.format = this.dateHelper.relyOnDatePipe ? 'yyyy-ww' : 'YYYY-WW'; // Format for week
            }
            else {
                if (this.dateHelper.relyOnDatePipe) {
                    this.format = this.showTime ? 'yyyy-MM-dd HH:mm:ss' : 'yyyy-MM-dd';
                }
                else {
                    this.format = this.showTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD';
                }
            }
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        if (changes.renderExtraFooter) {
            this.extraFooter = valueFunctionProp(this.renderExtraFooter);
        }
        if (changes.showTime || changes.cmacsStyle) {
            this.setFixedPickerStyle();
        }
    }
    // If has no timepicker and the user select a date by date panel, then close picker
    /**
     * @param {?} value
     * @return {?}
     */
    onValueChange(value) {
        super.onValueChange(value);
        if (!this.showTime) {
            this.closeOverlay();
        }
    }
    // Emit nzOnCalendarChange when select date by nz-range-picker
    /**
     * @param {?} value
     * @return {?}
     */
    onCalendarChange(value) {
        if (this.isRange) {
            /** @type {?} */
            const rangeValue = value.map((/**
             * @param {?} x
             * @return {?}
             */
            x => x.nativeDate));
            this.cmacsOnCalendarChange.emit(rangeValue);
        }
    }
    // Emitted when done with date selecting
    /**
     * @return {?}
     */
    onResultOk() {
        if (this.isRange) {
            /** @type {?} */
            const value = (/** @type {?} */ (this.value));
            if (value.length) {
                this.cmacsOnOk.emit([value[0].nativeDate, value[1].nativeDate]);
            }
            else {
                this.cmacsOnOk.emit([]);
            }
        }
        else {
            if (this.value) {
                this.cmacsOnOk.emit(((/** @type {?} */ (this.value))).nativeDate);
            }
            else {
                this.cmacsOnOk.emit(null);
            }
        }
        this.closeOverlay();
    }
    /**
     * @param {?} open
     * @return {?}
     */
    onOpenChange(open) {
        this.cmacsOnOpenChange.emit(open);
    }
    // Setup fixed style for picker
    /**
     * @private
     * @return {?}
     */
    setFixedPickerStyle() {
        /** @type {?} */
        const showTimeFixes = {};
        if (this.showTime) {
            showTimeFixes.width = this.isRange ? '350px' : '195px';
        }
        this.pickerStyle = Object.assign({}, showTimeFixes, this.cmacsStyle);
    }
    /**
     * @return {?}
     */
    parseDate() {
        if (!this.isRange) {
            /** @type {?} */
            const parsedValue = (/** @type {?} */ (this.value));
            return `${this.getMonth(parsedValue.getMonth())} ${parsedValue.getDate()}, ${parsedValue.getYear()}`;
        }
        /** @type {?} */
        let parsedValues = [];
        /** @type {?} */
        const coerceValues = (/** @type {?} */ (this.value));
        for (let val of coerceValues) {
            /** @type {?} */
            const parsedValue = (/** @type {?} */ (val));
            parsedValues.push(`${this.getMonth(parsedValue.getMonth())} ${parsedValue.getDate()}, ${parsedValue.getYear()}`);
        }
        return parsedValues;
    }
    /**
     * @param {?} idx
     * @return {?}
     */
    getMonth(idx) {
        /** @type {?} */
        const months = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ];
        return months[idx];
    }
}
CmacsDateRangePickerComponent.decorators = [
    { type: Component, args: [{
                template: `` // Just for rollup
            }] }
];
/** @nocollapse */
CmacsDateRangePickerComponent.ctorParameters = () => [
    { type: NzI18nService },
    { type: ChangeDetectorRef },
    { type: DateHelperService },
    { type: NzNoAnimationDirective }
];
CmacsDateRangePickerComponent.propDecorators = {
    dateRender: [{ type: Input }],
    disabledTime: [{ type: Input }],
    renderExtraFooter: [{ type: Input }],
    showToday: [{ type: Input }],
    mode: [{ type: Input }],
    ranges: [{ type: Input }],
    cmacsOnPanelChange: [{ type: Output }],
    cmacsOnCalendarChange: [{ type: Output }],
    openPickerTitle: [{ type: Input }],
    openPickerSubtitle: [{ type: Input }],
    openPickerLeftRangeSub: [{ type: Input }],
    openPickerRightRangeSub: [{ type: Input }],
    showTime: [{ type: Input }],
    cmacsOnOk: [{ type: Output }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsDateRangePickerComponent.prototype, "showToday", void 0);
if (false) {
    /** @type {?} */
    CmacsDateRangePickerComponent.prototype.showWeek;
    /** @type {?} */
    CmacsDateRangePickerComponent.prototype.dateRender;
    /** @type {?} */
    CmacsDateRangePickerComponent.prototype.disabledTime;
    /** @type {?} */
    CmacsDateRangePickerComponent.prototype.renderExtraFooter;
    /** @type {?} */
    CmacsDateRangePickerComponent.prototype.showToday;
    /** @type {?} */
    CmacsDateRangePickerComponent.prototype.mode;
    /** @type {?} */
    CmacsDateRangePickerComponent.prototype.ranges;
    /** @type {?} */
    CmacsDateRangePickerComponent.prototype.cmacsOnPanelChange;
    /** @type {?} */
    CmacsDateRangePickerComponent.prototype.cmacsOnCalendarChange;
    /** @type {?} */
    CmacsDateRangePickerComponent.prototype.openPickerTitle;
    /** @type {?} */
    CmacsDateRangePickerComponent.prototype.openPickerSubtitle;
    /** @type {?} */
    CmacsDateRangePickerComponent.prototype.openPickerLeftRangeSub;
    /** @type {?} */
    CmacsDateRangePickerComponent.prototype.openPickerRightRangeSub;
    /**
     * @type {?}
     * @private
     */
    CmacsDateRangePickerComponent.prototype._showTime;
    /** @type {?} */
    CmacsDateRangePickerComponent.prototype.cmacsOnOk;
    /** @type {?} */
    CmacsDateRangePickerComponent.prototype.pickerStyle;
    /** @type {?} */
    CmacsDateRangePickerComponent.prototype.extraFooter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1kYXRlLXBpY2tlci9kYXRlLXJhbmdlLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFHUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFnQixZQUFZLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0SCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdEUsT0FBTyxFQUFFLHVCQUF1QixFQUFrQixNQUFNLDZCQUE2QixDQUFDO0FBT3RGLE1BQU0sT0FBTyw2QkFBOEIsU0FBUSx1QkFBdUI7Ozs7Ozs7SUFtQ3hFLFlBQ0UsSUFBbUIsRUFDbkIsR0FBc0IsRUFDdEIsVUFBNkIsRUFDN0IsV0FBb0M7UUFFcEMsS0FBSyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBeEM1QyxhQUFRLEdBQUcsS0FBSyxDQUFDLENBQUMsNkJBQTZCO1FBS3RCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFHeEIsdUJBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQTJCLENBQUM7UUFDakUsMEJBQXFCLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUU3RCxvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQix1QkFBa0IsR0FBRyxFQUFFLENBQUM7UUFDeEIsMkJBQXNCLEdBQUcsRUFBRSxDQUFDO1FBQzVCLDRCQUF1QixHQUFHLEVBQUUsQ0FBQztRQVduQixjQUFTLEdBQUcsSUFBSSxZQUFZLEVB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QXVDOztJQUN2QywrQ0FBOEI7O0lBQzlCLDJEQUFvRjs7SUFDcEYsOERBQXNFOztJQUV0RSx3REFBOEI7O0lBQzlCLDJEQUFpQzs7SUFDakMsK0RBQXFDOztJQUNyQyxnRUFBc0M7Ozs7O0lBR3RDLGtEQUFvQzs7SUFRcEMsa0RBQXlFOztJQU16RSxvREFBb0I7O0lBQ3BCLG9EQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyB0b0Jvb2xlYW4sIHZhbHVlRnVuY3Rpb25Qcm9wLCBGdW5jdGlvblByb3AsIElucHV0Qm9vbGVhbiwgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IERhdGVIZWxwZXJTZXJ2aWNlLCBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuXHJcbmltcG9ydCB7IEFic3RyYWN0UGlja2VyQ29tcG9uZW50LCBDb21wYXRpYmxlRGF0ZSB9IGZyb20gJy4vYWJzdHJhY3QtcGlja2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJy4vbGliL2NhbmR5LWRhdGUvY2FuZHktZGF0ZSc7XHJcbmltcG9ydCB7IERpc2FibGVkVGltZUZuLCBQYW5lbE1vZGUsIFByZXNldFJhbmdlcyB9IGZyb20gJy4vc3RhbmRhcmQtdHlwZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgdGVtcGxhdGU6IGBgIC8vIEp1c3QgZm9yIHJvbGx1cFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NEYXRlUmFuZ2VQaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdFBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBzaG93V2VlayA9IGZhbHNlOyAvLyBTaG91bGQgc2hvdyBhcyB3ZWVrIHBpY2tlclxyXG5cclxuICBASW5wdXQoKSBkYXRlUmVuZGVyOiBGdW5jdGlvblByb3A8VGVtcGxhdGVSZWY8RGF0ZT4gfCBzdHJpbmc+O1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkVGltZTogRGlzYWJsZWRUaW1lRm47XHJcbiAgQElucHV0KCkgcmVuZGVyRXh0cmFGb290ZXI6IEZ1bmN0aW9uUHJvcDxUZW1wbGF0ZVJlZjx2b2lkPiB8IHN0cmluZz47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dUb2RheSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG1vZGU6IFBhbmVsTW9kZSB8IFBhbmVsTW9kZVtdO1xyXG4gIEBJbnB1dCgpIHJhbmdlczogUHJlc2V0UmFuZ2VzO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBjbWFjc09uUGFuZWxDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFBhbmVsTW9kZSB8IFBhbmVsTW9kZVtdPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBjbWFjc09uQ2FsZW5kYXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGVbXT4oKTtcclxuXHJcbiAgQElucHV0KCkgb3BlblBpY2tlclRpdGxlID0gJyc7XHJcbiAgQElucHV0KCkgb3BlblBpY2tlclN1YnRpdGxlID0gJyc7XHJcbiAgQElucHV0KCkgb3BlblBpY2tlckxlZnRSYW5nZVN1YiA9ICcnO1xyXG4gIEBJbnB1dCgpIG9wZW5QaWNrZXJSaWdodFJhbmdlU3ViID0gJyc7XHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHZhcmlhYmxlLW5hbWVcclxuICBwcml2YXRlIF9zaG93VGltZTogb2JqZWN0IHwgYm9vbGVhbjtcclxuICBASW5wdXQoKSBnZXQgc2hvd1RpbWUoKTogb2JqZWN0IHwgYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2hvd1RpbWU7XHJcbiAgfVxyXG4gIHNldCBzaG93VGltZSh2YWx1ZTogb2JqZWN0IHwgYm9vbGVhbikge1xyXG4gICAgdGhpcy5fc2hvd1RpbWUgPSB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gdmFsdWUgOiB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNtYWNzT25PayA9IG5ldyBFdmVudEVtaXR0ZXI8Q29tcGF0aWJsZURhdGUgfCBudWxsPigpO1xyXG5cclxuICBnZXQgcmVhbFNob3dUb2RheSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhdGhpcy5pc1JhbmdlICYmIHRoaXMuc2hvd1RvZGF5O1xyXG4gIH1cclxuXHJcbiAgcGlja2VyU3R5bGU6IG9iamVjdDsgLy8gRmluYWwgcGlja2VyIHN0eWxlIHRoYXQgY29udGFpbnMgd2lkdGggZml4IGNvcnJlY3Rpb25zIGV0Yy5cclxuICBleHRyYUZvb3RlcjogVGVtcGxhdGVSZWY8dm9pZD4gfCBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgaTE4bjogTnpJMThuU2VydmljZSxcclxuICAgIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZSxcclxuICAgIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge1xyXG4gICAgc3VwZXIoaTE4biwgY2RyLCBkYXRlSGVscGVyLCBub0FuaW1hdGlvbik7XHJcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlIGFzIENhbmR5RGF0ZVtdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUgYXMgQ2FuZHlEYXRlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xyXG5cclxuICAgIC8vIERlZmF1bHQgZm9ybWF0IHdoZW4gaXQncyBlbXB0eVxyXG4gICAgaWYgKCF0aGlzLmZvcm1hdCkge1xyXG4gICAgICBpZiAodGhpcy5zaG93V2Vlaykge1xyXG4gICAgICAgIHRoaXMuZm9ybWF0ID0gdGhpcy5kYXRlSGVscGVyLnJlbHlPbkRhdGVQaXBlID8gJ3l5eXktd3cnIDogJ1lZWVktV1cnOyAvLyBGb3JtYXQgZm9yIHdlZWtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAodGhpcy5kYXRlSGVscGVyLnJlbHlPbkRhdGVQaXBlKSB7XHJcbiAgICAgICAgICB0aGlzLmZvcm1hdCA9IHRoaXMuc2hvd1RpbWUgPyAneXl5eS1NTS1kZCBISDptbTpzcycgOiAneXl5eS1NTS1kZCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZm9ybWF0ID0gdGhpcy5zaG93VGltZSA/ICdZWVlZLU1NLUREIEhIOm1tOnNzJyA6ICdZWVlZLU1NLUREJztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nT25DaGFuZ2VzKGNoYW5nZXMpO1xyXG5cclxuICAgIGlmIChjaGFuZ2VzLnJlbmRlckV4dHJhRm9vdGVyKSB7XHJcbiAgICAgIHRoaXMuZXh0cmFGb290ZXIgPSB2YWx1ZUZ1bmN0aW9uUHJvcCh0aGlzLnJlbmRlckV4dHJhRm9vdGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhbmdlcy5zaG93VGltZSB8fCBjaGFuZ2VzLmNtYWNzU3R5bGUpIHtcclxuICAgICAgdGhpcy5zZXRGaXhlZFBpY2tlclN0eWxlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBJZiBoYXMgbm8gdGltZXBpY2tlciBhbmQgdGhlIHVzZXIgc2VsZWN0IGEgZGF0ZSBieSBkYXRlIHBhbmVsLCB0aGVuIGNsb3NlIHBpY2tlclxyXG4gIG9uVmFsdWVDaGFuZ2UodmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQge1xyXG4gICAgc3VwZXIub25WYWx1ZUNoYW5nZSh2YWx1ZSk7XHJcblxyXG4gICAgaWYgKCF0aGlzLnNob3dUaW1lKSB7XHJcbiAgICAgIHRoaXMuY2xvc2VPdmVybGF5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBFbWl0IG56T25DYWxlbmRhckNoYW5nZSB3aGVuIHNlbGVjdCBkYXRlIGJ5IG56LXJhbmdlLXBpY2tlclxyXG4gIG9uQ2FsZW5kYXJDaGFuZ2UodmFsdWU6IENhbmR5RGF0ZVtdKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIGNvbnN0IHJhbmdlVmFsdWUgPSB2YWx1ZS5tYXAoeCA9PiB4Lm5hdGl2ZURhdGUpO1xyXG4gICAgICB0aGlzLmNtYWNzT25DYWxlbmRhckNoYW5nZS5lbWl0KHJhbmdlVmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gRW1pdHRlZCB3aGVuIGRvbmUgd2l0aCBkYXRlIHNlbGVjdGluZ1xyXG4gIG9uUmVzdWx0T2soKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZSBhcyBDYW5keURhdGVbXTtcclxuICAgICAgaWYgKHZhbHVlLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMuY21hY3NPbk9rLmVtaXQoW3ZhbHVlWzBdLm5hdGl2ZURhdGUsIHZhbHVlWzFdLm5hdGl2ZURhdGVdKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNtYWNzT25Pay5lbWl0KFtdKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMudmFsdWUpIHtcclxuICAgICAgICB0aGlzLmNtYWNzT25Pay5lbWl0KCh0aGlzLnZhbHVlIGFzIENhbmR5RGF0ZSkubmF0aXZlRGF0ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jbWFjc09uT2suZW1pdChudWxsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5jbG9zZU92ZXJsYXkoKTtcclxuICB9XHJcblxyXG4gIG9uT3BlbkNoYW5nZShvcGVuOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmNtYWNzT25PcGVuQ2hhbmdlLmVtaXQob3Blbik7XHJcbiAgfVxyXG5cclxuICAvLyBTZXR1cCBmaXhlZCBzdHlsZSBmb3IgcGlja2VyXHJcbiAgcHJpdmF0ZSBzZXRGaXhlZFBpY2tlclN0eWxlKCk6IHZvaWQge1xyXG4gICAgY29uc3Qgc2hvd1RpbWVGaXhlczogeyB3aWR0aD86IHN0cmluZyB9ID0ge307XHJcbiAgICBpZiAodGhpcy5zaG93VGltZSkge1xyXG4gICAgICBzaG93VGltZUZpeGVzLndpZHRoID0gdGhpcy5pc1JhbmdlID8gJzM1MHB4JyA6ICcxOTVweCc7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5waWNrZXJTdHlsZSA9IHsgLi4uc2hvd1RpbWVGaXhlcywgLi4udGhpcy5jbWFjc1N0eWxlIH07XHJcbiAgfVxyXG5cclxuICBwYXJzZURhdGUoKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNSYW5nZSkge1xyXG4gICAgICBjb25zdCBwYXJzZWRWYWx1ZSA9IHRoaXMudmFsdWUgYXMgQ2FuZHlEYXRlO1xyXG4gICAgICByZXR1cm4gYCR7dGhpcy5nZXRNb250aChwYXJzZWRWYWx1ZS5nZXRNb250aCgpKX0gJHtwYXJzZWRWYWx1ZS5nZXREYXRlKCl9LCAke3BhcnNlZFZhbHVlLmdldFllYXIoKX1gO1xyXG4gICAgfVxyXG4gICAgbGV0IHBhcnNlZFZhbHVlcyA9IFtdO1xyXG4gICAgY29uc3QgY29lcmNlVmFsdWVzID0gdGhpcy52YWx1ZSBhcyBDYW5keURhdGVbXTtcclxuXHJcbiAgICBmb3IobGV0IHZhbCBvZiBjb2VyY2VWYWx1ZXMpIHtcclxuICAgICAgY29uc3QgcGFyc2VkVmFsdWUgPSB2YWwgYXMgQ2FuZHlEYXRlO1xyXG4gICAgICBwYXJzZWRWYWx1ZXMucHVzaChgJHt0aGlzLmdldE1vbnRoKHBhcnNlZFZhbHVlLmdldE1vbnRoKCkpfSAke3BhcnNlZFZhbHVlLmdldERhdGUoKX0sICR7cGFyc2VkVmFsdWUuZ2V0WWVhcigpfWApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhcnNlZFZhbHVlcztcclxuICB9XHJcblxyXG4gIGdldE1vbnRoKGlkeCkge1xyXG4gICAgY29uc3QgbW9udGhzID0gW1xyXG4gICAgICAnSmFuJyxcclxuICAgICAgJ0ZlYicsXHJcbiAgICAgICdNYXInLFxyXG4gICAgICAnQXByJyxcclxuICAgICAgJ01heScsXHJcbiAgICAgICdKdW4nLFxyXG4gICAgICAnSnVsJyxcclxuICAgICAgJ0F1ZycsXHJcbiAgICAgICdTZXAnLFxyXG4gICAgICAnT2N0JyxcclxuICAgICAgJ05vdicsXHJcbiAgICAgICdEZWMnXHJcbiAgICBdO1xyXG4gICAgcmV0dXJuIG1vbnRoc1tpZHhdO1xyXG4gIH1cclxufVxyXG4iXX0=