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
            console.log(this.extraFooter);
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
    showWeek: [{ type: Input }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1kYXRlLXBpY2tlci9kYXRlLXJhbmdlLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFHUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFnQixZQUFZLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0SCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdEUsT0FBTyxFQUFFLHVCQUF1QixFQUFrQixNQUFNLDZCQUE2QixDQUFDO0FBT3RGLE1BQU0sT0FBTyw2QkFBOEIsU0FBUSx1QkFBdUI7Ozs7Ozs7SUFtQ3hFLFlBQ0UsSUFBbUIsRUFDbkIsR0FBc0IsRUFDdEIsVUFBNkIsRUFDN0IsV0FBb0M7UUFFcEMsS0FBSyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBeENuQyxhQUFRLEdBQUcsS0FBSyxDQUFDLENBQUMsNkJBQTZCO1FBSy9CLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFHeEIsdUJBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQTJCLENBQUM7UUFDakUsMEJBQXFCLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUU3RCxvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQix1QkFBa0IsR0FBRyxFQUFFLENBQUM7UUFDeEIsMkJBQXNCLEdBQUcsRUFBRSxDQUFDO1FBQzVCLDRCQUF1QixHQUFHLEVBQUUsQ0FBQztRQVduQixjQUFTLEdBQUcsSUFBSSxZQUFZLEVB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MUIsbURBQThEOztJQUM5RCxxREFBc0M7O0lBQ3RDLDBEQUFxRTs7SUFDckUsa0RBQTJDOztJQUMzQyw2Q0FBdUM7O0lBQ3ZDLCtDQUE4Qjs7SUFDOUIsMkRBQW9GOztJQUNwRiw4REFBc0U7O0lBRXRFLHdEQUE4Qjs7SUFDOUIsMkRBQWlDOztJQUNqQywrREFBcUM7O0lBQ3JDLGdFQUFzQzs7Ozs7SUFHdEMsa0RBQW9DOztJQVFwQyxrREFBeUU7O0lBTXpFLG9EQUFvQjs7SUFDcEIsb0RBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IHRvQm9vbGVhbiwgdmFsdWVGdW5jdGlvblByb3AsIEZ1bmN0aW9uUHJvcCwgSW5wdXRCb29sZWFuLCBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UsIE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5cclxuaW1wb3J0IHsgQWJzdHJhY3RQaWNrZXJDb21wb25lbnQsIENvbXBhdGlibGVEYXRlIH0gZnJvbSAnLi9hYnN0cmFjdC1waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnLi9saWIvY2FuZHktZGF0ZS9jYW5keS1kYXRlJztcclxuaW1wb3J0IHsgRGlzYWJsZWRUaW1lRm4sIFBhbmVsTW9kZSwgUHJlc2V0UmFuZ2VzIH0gZnJvbSAnLi9zdGFuZGFyZC10eXBlcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICB0ZW1wbGF0ZTogYGAgLy8gSnVzdCBmb3Igcm9sbHVwXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0RhdGVSYW5nZVBpY2tlckNvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0UGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIHNob3dXZWVrID0gZmFsc2U7IC8vIFNob3VsZCBzaG93IGFzIHdlZWsgcGlja2VyXHJcblxyXG4gIEBJbnB1dCgpIGRhdGVSZW5kZXI6IEZ1bmN0aW9uUHJvcDxUZW1wbGF0ZVJlZjxEYXRlPiB8IHN0cmluZz47XHJcbiAgQElucHV0KCkgZGlzYWJsZWRUaW1lOiBEaXNhYmxlZFRpbWVGbjtcclxuICBASW5wdXQoKSByZW5kZXJFeHRyYUZvb3RlcjogRnVuY3Rpb25Qcm9wPFRlbXBsYXRlUmVmPHZvaWQ+IHwgc3RyaW5nPjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1RvZGF5ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbW9kZTogUGFuZWxNb2RlIHwgUGFuZWxNb2RlW107XHJcbiAgQElucHV0KCkgcmFuZ2VzOiBQcmVzZXRSYW5nZXM7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNtYWNzT25QYW5lbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8UGFuZWxNb2RlIHwgUGFuZWxNb2RlW10+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNtYWNzT25DYWxlbmRhckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZVtdPigpO1xyXG5cclxuICBASW5wdXQoKSBvcGVuUGlja2VyVGl0bGUgPSAnJztcclxuICBASW5wdXQoKSBvcGVuUGlja2VyU3VidGl0bGUgPSAnJztcclxuICBASW5wdXQoKSBvcGVuUGlja2VyTGVmdFJhbmdlU3ViID0gJyc7XHJcbiAgQElucHV0KCkgb3BlblBpY2tlclJpZ2h0UmFuZ2VTdWIgPSAnJztcclxuXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdmFyaWFibGUtbmFtZVxyXG4gIHByaXZhdGUgX3Nob3dUaW1lOiBvYmplY3QgfCBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGdldCBzaG93VGltZSgpOiBvYmplY3QgfCBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9zaG93VGltZTtcclxuICB9XHJcbiAgc2V0IHNob3dUaW1lKHZhbHVlOiBvYmplY3QgfCBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9zaG93VGltZSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyB2YWx1ZSA6IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY21hY3NPbk9rID0gbmV3IEV2ZW50RW1pdHRlcjxDb21wYXRpYmxlRGF0ZSB8IG51bGw+KCk7XHJcblxyXG4gIGdldCByZWFsU2hvd1RvZGF5KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICF0aGlzLmlzUmFuZ2UgJiYgdGhpcy5zaG93VG9kYXk7XHJcbiAgfVxyXG5cclxuICBwaWNrZXJTdHlsZTogb2JqZWN0OyAvLyBGaW5hbCBwaWNrZXIgc3R5bGUgdGhhdCBjb250YWlucyB3aWR0aCBmaXggY29ycmVjdGlvbnMgZXRjLlxyXG4gIGV4dHJhRm9vdGVyOiBUZW1wbGF0ZVJlZjx2b2lkPiB8IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBpMThuOiBOekkxOG5TZXJ2aWNlLFxyXG4gICAgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIGRhdGVIZWxwZXI6IERhdGVIZWxwZXJTZXJ2aWNlLFxyXG4gICAgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXHJcbiAgKSB7XHJcbiAgICBzdXBlcihpMThuLCBjZHIsIGRhdGVIZWxwZXIsIG5vQW5pbWF0aW9uKTtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUgYXMgQ2FuZHlEYXRlW107XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZSBhcyBDYW5keURhdGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nT25Jbml0KCk7XHJcblxyXG4gICAgLy8gRGVmYXVsdCBmb3JtYXQgd2hlbiBpdCdzIGVtcHR5XHJcbiAgICBpZiAoIXRoaXMuZm9ybWF0KSB7XHJcbiAgICAgIGlmICh0aGlzLnNob3dXZWVrKSB7XHJcbiAgICAgICAgdGhpcy5mb3JtYXQgPSB0aGlzLmRhdGVIZWxwZXIucmVseU9uRGF0ZVBpcGUgPyAneXl5eS13dycgOiAnWVlZWS1XVyc7IC8vIEZvcm1hdCBmb3Igd2Vla1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGVIZWxwZXIucmVseU9uRGF0ZVBpcGUpIHtcclxuICAgICAgICAgIHRoaXMuZm9ybWF0ID0gdGhpcy5zaG93VGltZSA/ICd5eXl5LU1NLWRkIEhIOm1tOnNzJyA6ICd5eXl5LU1NLWRkJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5mb3JtYXQgPSB0aGlzLnNob3dUaW1lID8gJ1lZWVktTU0tREQgSEg6bW06c3MnIDogJ1lZWVktTU0tREQnO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XHJcblxyXG4gICAgaWYgKGNoYW5nZXMucmVuZGVyRXh0cmFGb290ZXIpIHtcclxuICAgICAgdGhpcy5leHRyYUZvb3RlciA9IHZhbHVlRnVuY3Rpb25Qcm9wKHRoaXMucmVuZGVyRXh0cmFGb290ZXIpO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmV4dHJhRm9vdGVyKVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzLnNob3dUaW1lIHx8IGNoYW5nZXMuY21hY3NTdHlsZSkge1xyXG4gICAgICB0aGlzLnNldEZpeGVkUGlja2VyU3R5bGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIElmIGhhcyBubyB0aW1lcGlja2VyIGFuZCB0aGUgdXNlciBzZWxlY3QgYSBkYXRlIGJ5IGRhdGUgcGFuZWwsIHRoZW4gY2xvc2UgcGlja2VyXHJcbiAgb25WYWx1ZUNoYW5nZSh2YWx1ZTogQ2FuZHlEYXRlKTogdm9pZCB7XHJcbiAgICBzdXBlci5vblZhbHVlQ2hhbmdlKHZhbHVlKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuc2hvd1RpbWUpIHtcclxuICAgICAgdGhpcy5jbG9zZU92ZXJsYXkoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEVtaXQgbnpPbkNhbGVuZGFyQ2hhbmdlIHdoZW4gc2VsZWN0IGRhdGUgYnkgbnotcmFuZ2UtcGlja2VyXHJcbiAgb25DYWxlbmRhckNoYW5nZSh2YWx1ZTogQ2FuZHlEYXRlW10pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgY29uc3QgcmFuZ2VWYWx1ZSA9IHZhbHVlLm1hcCh4ID0+IHgubmF0aXZlRGF0ZSk7XHJcbiAgICAgIHRoaXMuY21hY3NPbkNhbGVuZGFyQ2hhbmdlLmVtaXQocmFuZ2VWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBFbWl0dGVkIHdoZW4gZG9uZSB3aXRoIGRhdGUgc2VsZWN0aW5nXHJcbiAgb25SZXN1bHRPaygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlIGFzIENhbmR5RGF0ZVtdO1xyXG4gICAgICBpZiAodmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5jbWFjc09uT2suZW1pdChbdmFsdWVbMF0ubmF0aXZlRGF0ZSwgdmFsdWVbMV0ubmF0aXZlRGF0ZV0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY21hY3NPbk9rLmVtaXQoW10pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy52YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuY21hY3NPbk9rLmVtaXQoKHRoaXMudmFsdWUgYXMgQ2FuZHlEYXRlKS5uYXRpdmVEYXRlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNtYWNzT25Pay5lbWl0KG51bGwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmNsb3NlT3ZlcmxheSgpO1xyXG4gIH1cclxuXHJcbiAgb25PcGVuQ2hhbmdlKG9wZW46IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuY21hY3NPbk9wZW5DaGFuZ2UuZW1pdChvcGVuKTtcclxuICB9XHJcblxyXG4gIC8vIFNldHVwIGZpeGVkIHN0eWxlIGZvciBwaWNrZXJcclxuICBwcml2YXRlIHNldEZpeGVkUGlja2VyU3R5bGUoKTogdm9pZCB7XHJcbiAgICBjb25zdCBzaG93VGltZUZpeGVzOiB7IHdpZHRoPzogc3RyaW5nIH0gPSB7fTtcclxuICAgIGlmICh0aGlzLnNob3dUaW1lKSB7XHJcbiAgICAgIHNob3dUaW1lRml4ZXMud2lkdGggPSB0aGlzLmlzUmFuZ2UgPyAnMzUwcHgnIDogJzE5NXB4JztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBpY2tlclN0eWxlID0geyAuLi5zaG93VGltZUZpeGVzLCAuLi50aGlzLmNtYWNzU3R5bGUgfTtcclxuICB9XHJcblxyXG4gIHBhcnNlRGF0ZSgpIHtcclxuICAgIGlmICghdGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIGNvbnN0IHBhcnNlZFZhbHVlID0gdGhpcy52YWx1ZSBhcyBDYW5keURhdGU7XHJcbiAgICAgIHJldHVybiBgJHt0aGlzLmdldE1vbnRoKHBhcnNlZFZhbHVlLmdldE1vbnRoKCkpfSAke3BhcnNlZFZhbHVlLmdldERhdGUoKX0sICR7cGFyc2VkVmFsdWUuZ2V0WWVhcigpfWA7XHJcbiAgICB9XHJcbiAgICBsZXQgcGFyc2VkVmFsdWVzID0gW107XHJcbiAgICBjb25zdCBjb2VyY2VWYWx1ZXMgPSB0aGlzLnZhbHVlIGFzIENhbmR5RGF0ZVtdO1xyXG5cclxuICAgIGZvcihsZXQgdmFsIG9mIGNvZXJjZVZhbHVlcykge1xyXG4gICAgICBjb25zdCBwYXJzZWRWYWx1ZSA9IHZhbCBhcyBDYW5keURhdGU7XHJcbiAgICAgIHBhcnNlZFZhbHVlcy5wdXNoKGAke3RoaXMuZ2V0TW9udGgocGFyc2VkVmFsdWUuZ2V0TW9udGgoKSl9ICR7cGFyc2VkVmFsdWUuZ2V0RGF0ZSgpfSwgJHtwYXJzZWRWYWx1ZS5nZXRZZWFyKCl9YCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFyc2VkVmFsdWVzO1xyXG4gIH1cclxuXHJcbiAgZ2V0TW9udGgoaWR4KSB7XHJcbiAgICBjb25zdCBtb250aHMgPSBbXHJcbiAgICAgICdKYW4nLFxyXG4gICAgICAnRmViJyxcclxuICAgICAgJ01hcicsXHJcbiAgICAgICdBcHInLFxyXG4gICAgICAnTWF5JyxcclxuICAgICAgJ0p1bicsXHJcbiAgICAgICdKdWwnLFxyXG4gICAgICAnQXVnJyxcclxuICAgICAgJ1NlcCcsXHJcbiAgICAgICdPY3QnLFxyXG4gICAgICAnTm92JyxcclxuICAgICAgJ0RlYydcclxuICAgIF07XHJcbiAgICByZXR1cm4gbW9udGhzW2lkeF07XHJcbiAgfVxyXG59XHJcbiJdfQ==