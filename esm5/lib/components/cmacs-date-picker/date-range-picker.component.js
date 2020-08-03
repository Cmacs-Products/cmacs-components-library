/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { toBoolean, valueFunctionProp, InputBoolean, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { DateHelperService, NzI18nService } from 'ng-zorro-antd/i18n';
import { AbstractPickerComponent } from './abstract-picker.component';
var CmacsDateRangePickerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CmacsDateRangePickerComponent, _super);
    function CmacsDateRangePickerComponent(i18n, cdr, dateHelper, noAnimation) {
        var _this = _super.call(this, i18n, cdr, dateHelper, noAnimation) || this;
        _this.showWeek = false; // Should show as week picker
        _this.showToday = false;
        _this.cmacsOnPanelChange = new EventEmitter();
        _this.cmacsOnCalendarChange = new EventEmitter();
        _this.openPickerTitle = '';
        _this.openPickerSubtitle = '';
        _this.openPickerLeftRangeSub = '';
        _this.openPickerRightRangeSub = '';
        _this.cmacsOnOk = new EventEmitter();
        if (_this.isRange) {
            _this.value = (/** @type {?} */ (_this.value));
        }
        else {
            _this.value = (/** @type {?} */ (_this.value));
        }
        return _this;
    }
    Object.defineProperty(CmacsDateRangePickerComponent.prototype, "showTime", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showTime;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showTime = typeof value === 'object' ? value : toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsDateRangePickerComponent.prototype, "realShowToday", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.isRange && this.showToday;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CmacsDateRangePickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
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
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsDateRangePickerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        if (changes.renderExtraFooter) {
            this.extraFooter = valueFunctionProp(this.renderExtraFooter);
            console.log(this.extraFooter);
        }
        if (changes.showTime || changes.cmacsStyle) {
            this.setFixedPickerStyle();
        }
    };
    // If has no timepicker and the user select a date by date panel, then close picker
    // If has no timepicker and the user select a date by date panel, then close picker
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsDateRangePickerComponent.prototype.onValueChange = 
    // If has no timepicker and the user select a date by date panel, then close picker
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        _super.prototype.onValueChange.call(this, value);
        if (!this.showTime) {
            this.closeOverlay();
        }
    };
    // Emit nzOnCalendarChange when select date by nz-range-picker
    // Emit nzOnCalendarChange when select date by nz-range-picker
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsDateRangePickerComponent.prototype.onCalendarChange = 
    // Emit nzOnCalendarChange when select date by nz-range-picker
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.isRange) {
            /** @type {?} */
            var rangeValue = value.map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.nativeDate; }));
            this.cmacsOnCalendarChange.emit(rangeValue);
        }
    };
    // Emitted when done with date selecting
    // Emitted when done with date selecting
    /**
     * @return {?}
     */
    CmacsDateRangePickerComponent.prototype.onResultOk = 
    // Emitted when done with date selecting
    /**
     * @return {?}
     */
    function () {
        if (this.isRange) {
            /** @type {?} */
            var value = (/** @type {?} */ (this.value));
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
    };
    /**
     * @param {?} open
     * @return {?}
     */
    CmacsDateRangePickerComponent.prototype.onOpenChange = /**
     * @param {?} open
     * @return {?}
     */
    function (open) {
        this.cmacsOnOpenChange.emit(open);
    };
    // Setup fixed style for picker
    // Setup fixed style for picker
    /**
     * @private
     * @return {?}
     */
    CmacsDateRangePickerComponent.prototype.setFixedPickerStyle = 
    // Setup fixed style for picker
    /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var showTimeFixes = {};
        if (this.showTime) {
            showTimeFixes.width = this.isRange ? '350px' : '195px';
        }
        this.pickerStyle = tslib_1.__assign({}, showTimeFixes, this.cmacsStyle);
    };
    /**
     * @return {?}
     */
    CmacsDateRangePickerComponent.prototype.parseDate = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        if (!this.isRange) {
            /** @type {?} */
            var parsedValue = (/** @type {?} */ (this.value));
            return this.getMonth(parsedValue.getMonth()) + " " + parsedValue.getDate() + ", " + parsedValue.getYear();
        }
        /** @type {?} */
        var parsedValues = [];
        /** @type {?} */
        var coerceValues = (/** @type {?} */ (this.value));
        try {
            for (var coerceValues_1 = tslib_1.__values(coerceValues), coerceValues_1_1 = coerceValues_1.next(); !coerceValues_1_1.done; coerceValues_1_1 = coerceValues_1.next()) {
                var val = coerceValues_1_1.value;
                /** @type {?} */
                var parsedValue = (/** @type {?} */ (val));
                parsedValues.push(this.getMonth(parsedValue.getMonth()) + " " + parsedValue.getDate() + ", " + parsedValue.getYear());
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (coerceValues_1_1 && !coerceValues_1_1.done && (_a = coerceValues_1.return)) _a.call(coerceValues_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return parsedValues;
    };
    /**
     * @param {?} idx
     * @return {?}
     */
    CmacsDateRangePickerComponent.prototype.getMonth = /**
     * @param {?} idx
     * @return {?}
     */
    function (idx) {
        /** @type {?} */
        var months = [
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
    };
    CmacsDateRangePickerComponent.decorators = [
        { type: Component, args: [{
                    template: "" // Just for rollup
                }] }
    ];
    /** @nocollapse */
    CmacsDateRangePickerComponent.ctorParameters = function () { return [
        { type: NzI18nService },
        { type: ChangeDetectorRef },
        { type: DateHelperService },
        { type: NzNoAnimationDirective }
    ]; };
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
    return CmacsDateRangePickerComponent;
}(AbstractPickerComponent));
export { CmacsDateRangePickerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1kYXRlLXBpY2tlci9kYXRlLXJhbmdlLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFHUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFnQixZQUFZLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0SCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdEUsT0FBTyxFQUFFLHVCQUF1QixFQUFrQixNQUFNLDZCQUE2QixDQUFDO0FBSXRGO0lBR21ELHlEQUF1QjtJQW1DeEUsdUNBQ0UsSUFBbUIsRUFDbkIsR0FBc0IsRUFDdEIsVUFBNkIsRUFDN0IsV0FBb0M7UUFKdEMsWUFNRSxrQkFBTSxJQUFJLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxXQUFXLENBQUMsU0FNMUM7UUE5Q1EsY0FBUSxHQUFHLEtBQUssQ0FBQyxDQUFDLDZCQUE2QjtRQUsvQixlQUFTLEdBQUcsS0FBSyxDQUFDO1FBR3hCLHdCQUFrQixHQUFHLElBQUksWUFBWSxFQUEyQixDQUFDO1FBQ2pFLDJCQUFxQixHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFN0QscUJBQWUsR0FBRyxFQUFFLENBQUM7UUFDckIsd0JBQWtCLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLDRCQUFzQixHQUFHLEVBQUUsQ0FBQztRQUM1Qiw2QkFBdUIsR0FBRyxFQUFFLENBQUM7UUFXbkIsZUFBUyxHQUFHLElBQUksWUFBWSxFQUF5QixDQUFDO1FBZ0J2RSxJQUFJ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Q0wsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7cUNBQ0wsTUFBTTt3Q0FDTixNQUFNO2tDQUVOLEtBQUs7cUNBQ0wsS0FBSzt5Q0FDTCxLQUFLOzBDQUNMLEtBQUs7MkJBSUwsS0FBSzs0QkFPTCxNQUFNOztJQXBCa0I7UUFBZixZQUFZLEVBQUU7O29FQUFtQjtJQTJKN0Msb0NBQUM7Q0FBQSxBQXBLRCxDQUdtRCx1QkFBdUIsR0FpS3pFO1NBaktZLDZCQUE2Qjs7O0lBQ3hDLGlEQUEwQjs7SUFFMUIsbURBQThEOztJQUM5RCxxREFBc0M7O0lBQ3RDLDBEQUFxRTs7SUFDckUsa0RBQTJDOztJQUMzQyw2Q0FBdUM7O0lBQ3ZDLCtDQUE4Qjs7SUFDOUIsMkRBQW9GOztJQUNwRiw4REFBc0U7O0lBRXRFLHdEQUE4Qjs7SUFDOUIsMkRBQWlDOztJQUNqQywrREFBcUM7O0lBQ3JDLGdFQUFzQzs7Ozs7SUFHdEMsa0RBQW9DOztJQVFwQyxrREFBeUU7O0lBTXpFLG9EQUFvQjs7SUFDcEIsb0RBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IHRvQm9vbGVhbiwgdmFsdWVGdW5jdGlvblByb3AsIEZ1bmN0aW9uUHJvcCwgSW5wdXRCb29sZWFuLCBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UsIE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5cclxuaW1wb3J0IHsgQWJzdHJhY3RQaWNrZXJDb21wb25lbnQsIENvbXBhdGlibGVEYXRlIH0gZnJvbSAnLi9hYnN0cmFjdC1waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnLi9saWIvY2FuZHktZGF0ZS9jYW5keS1kYXRlJztcclxuaW1wb3J0IHsgRGlzYWJsZWRUaW1lRm4sIFBhbmVsTW9kZSwgUHJlc2V0UmFuZ2VzIH0gZnJvbSAnLi9zdGFuZGFyZC10eXBlcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICB0ZW1wbGF0ZTogYGAgLy8gSnVzdCBmb3Igcm9sbHVwXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0RhdGVSYW5nZVBpY2tlckNvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0UGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIHNob3dXZWVrID0gZmFsc2U7IC8vIFNob3VsZCBzaG93IGFzIHdlZWsgcGlja2VyXHJcblxyXG4gIEBJbnB1dCgpIGRhdGVSZW5kZXI6IEZ1bmN0aW9uUHJvcDxUZW1wbGF0ZVJlZjxEYXRlPiB8IHN0cmluZz47XHJcbiAgQElucHV0KCkgZGlzYWJsZWRUaW1lOiBEaXNhYmxlZFRpbWVGbjtcclxuICBASW5wdXQoKSByZW5kZXJFeHRyYUZvb3RlcjogRnVuY3Rpb25Qcm9wPFRlbXBsYXRlUmVmPHZvaWQ+IHwgc3RyaW5nPjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1RvZGF5ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbW9kZTogUGFuZWxNb2RlIHwgUGFuZWxNb2RlW107XHJcbiAgQElucHV0KCkgcmFuZ2VzOiBQcmVzZXRSYW5nZXM7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNtYWNzT25QYW5lbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8UGFuZWxNb2RlIHwgUGFuZWxNb2RlW10+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNtYWNzT25DYWxlbmRhckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZVtdPigpO1xyXG5cclxuICBASW5wdXQoKSBvcGVuUGlja2VyVGl0bGUgPSAnJztcclxuICBASW5wdXQoKSBvcGVuUGlja2VyU3VidGl0bGUgPSAnJztcclxuICBASW5wdXQoKSBvcGVuUGlja2VyTGVmdFJhbmdlU3ViID0gJyc7XHJcbiAgQElucHV0KCkgb3BlblBpY2tlclJpZ2h0UmFuZ2VTdWIgPSAnJztcclxuXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdmFyaWFibGUtbmFtZVxyXG4gIHByaXZhdGUgX3Nob3dUaW1lOiBvYmplY3QgfCBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGdldCBzaG93VGltZSgpOiBvYmplY3QgfCBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9zaG93VGltZTtcclxuICB9XHJcbiAgc2V0IHNob3dUaW1lKHZhbHVlOiBvYmplY3QgfCBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9zaG93VGltZSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyB2YWx1ZSA6IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY21hY3NPbk9rID0gbmV3IEV2ZW50RW1pdHRlcjxDb21wYXRpYmxlRGF0ZSB8IG51bGw+KCk7XHJcblxyXG4gIGdldCByZWFsU2hvd1RvZGF5KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICF0aGlzLmlzUmFuZ2UgJiYgdGhpcy5zaG93VG9kYXk7XHJcbiAgfVxyXG5cclxuICBwaWNrZXJTdHlsZTogb2JqZWN0OyAvLyBGaW5hbCBwaWNrZXIgc3R5bGUgdGhhdCBjb250YWlucyB3aWR0aCBmaXggY29ycmVjdGlvbnMgZXRjLlxyXG4gIGV4dHJhRm9vdGVyOiBUZW1wbGF0ZVJlZjx2b2lkPiB8IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBpMThuOiBOekkxOG5TZXJ2aWNlLFxyXG4gICAgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIGRhdGVIZWxwZXI6IERhdGVIZWxwZXJTZXJ2aWNlLFxyXG4gICAgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXHJcbiAgKSB7XHJcbiAgICBzdXBlcihpMThuLCBjZHIsIGRhdGVIZWxwZXIsIG5vQW5pbWF0aW9uKTtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUgYXMgQ2FuZHlEYXRlW107XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZSBhcyBDYW5keURhdGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nT25Jbml0KCk7XHJcblxyXG4gICAgLy8gRGVmYXVsdCBmb3JtYXQgd2hlbiBpdCdzIGVtcHR5XHJcbiAgICBpZiAoIXRoaXMuZm9ybWF0KSB7XHJcbiAgICAgIGlmICh0aGlzLnNob3dXZWVrKSB7XHJcbiAgICAgICAgdGhpcy5mb3JtYXQgPSB0aGlzLmRhdGVIZWxwZXIucmVseU9uRGF0ZVBpcGUgPyAneXl5eS13dycgOiAnWVlZWS1XVyc7IC8vIEZvcm1hdCBmb3Igd2Vla1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGVIZWxwZXIucmVseU9uRGF0ZVBpcGUpIHtcclxuICAgICAgICAgIHRoaXMuZm9ybWF0ID0gdGhpcy5zaG93VGltZSA/ICd5eXl5LU1NLWRkIEhIOm1tOnNzJyA6ICd5eXl5LU1NLWRkJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5mb3JtYXQgPSB0aGlzLnNob3dUaW1lID8gJ1lZWVktTU0tREQgSEg6bW06c3MnIDogJ1lZWVktTU0tREQnO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XHJcblxyXG4gICAgaWYgKGNoYW5nZXMucmVuZGVyRXh0cmFGb290ZXIpIHtcclxuICAgICAgdGhpcy5leHRyYUZvb3RlciA9IHZhbHVlRnVuY3Rpb25Qcm9wKHRoaXMucmVuZGVyRXh0cmFGb290ZXIpO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmV4dHJhRm9vdGVyKVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzLnNob3dUaW1lIHx8IGNoYW5nZXMuY21hY3NTdHlsZSkge1xyXG4gICAgICB0aGlzLnNldEZpeGVkUGlja2VyU3R5bGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIElmIGhhcyBubyB0aW1lcGlja2VyIGFuZCB0aGUgdXNlciBzZWxlY3QgYSBkYXRlIGJ5IGRhdGUgcGFuZWwsIHRoZW4gY2xvc2UgcGlja2VyXHJcbiAgb25WYWx1ZUNoYW5nZSh2YWx1ZTogQ2FuZHlEYXRlKTogdm9pZCB7XHJcbiAgICBzdXBlci5vblZhbHVlQ2hhbmdlKHZhbHVlKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuc2hvd1RpbWUpIHtcclxuICAgICAgdGhpcy5jbG9zZU92ZXJsYXkoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEVtaXQgbnpPbkNhbGVuZGFyQ2hhbmdlIHdoZW4gc2VsZWN0IGRhdGUgYnkgbnotcmFuZ2UtcGlja2VyXHJcbiAgb25DYWxlbmRhckNoYW5nZSh2YWx1ZTogQ2FuZHlEYXRlW10pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgY29uc3QgcmFuZ2VWYWx1ZSA9IHZhbHVlLm1hcCh4ID0+IHgubmF0aXZlRGF0ZSk7XHJcbiAgICAgIHRoaXMuY21hY3NPbkNhbGVuZGFyQ2hhbmdlLmVtaXQocmFuZ2VWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBFbWl0dGVkIHdoZW4gZG9uZSB3aXRoIGRhdGUgc2VsZWN0aW5nXHJcbiAgb25SZXN1bHRPaygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlIGFzIENhbmR5RGF0ZVtdO1xyXG4gICAgICBpZiAodmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5jbWFjc09uT2suZW1pdChbdmFsdWVbMF0ubmF0aXZlRGF0ZSwgdmFsdWVbMV0ubmF0aXZlRGF0ZV0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY21hY3NPbk9rLmVtaXQoW10pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy52YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuY21hY3NPbk9rLmVtaXQoKHRoaXMudmFsdWUgYXMgQ2FuZHlEYXRlKS5uYXRpdmVEYXRlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNtYWNzT25Pay5lbWl0KG51bGwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmNsb3NlT3ZlcmxheSgpO1xyXG4gIH1cclxuXHJcbiAgb25PcGVuQ2hhbmdlKG9wZW46IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuY21hY3NPbk9wZW5DaGFuZ2UuZW1pdChvcGVuKTtcclxuICB9XHJcblxyXG4gIC8vIFNldHVwIGZpeGVkIHN0eWxlIGZvciBwaWNrZXJcclxuICBwcml2YXRlIHNldEZpeGVkUGlja2VyU3R5bGUoKTogdm9pZCB7XHJcbiAgICBjb25zdCBzaG93VGltZUZpeGVzOiB7IHdpZHRoPzogc3RyaW5nIH0gPSB7fTtcclxuICAgIGlmICh0aGlzLnNob3dUaW1lKSB7XHJcbiAgICAgIHNob3dUaW1lRml4ZXMud2lkdGggPSB0aGlzLmlzUmFuZ2UgPyAnMzUwcHgnIDogJzE5NXB4JztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBpY2tlclN0eWxlID0geyAuLi5zaG93VGltZUZpeGVzLCAuLi50aGlzLmNtYWNzU3R5bGUgfTtcclxuICB9XHJcblxyXG4gIHBhcnNlRGF0ZSgpIHtcclxuICAgIGlmICghdGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIGNvbnN0IHBhcnNlZFZhbHVlID0gdGhpcy52YWx1ZSBhcyBDYW5keURhdGU7XHJcbiAgICAgIHJldHVybiBgJHt0aGlzLmdldE1vbnRoKHBhcnNlZFZhbHVlLmdldE1vbnRoKCkpfSAke3BhcnNlZFZhbHVlLmdldERhdGUoKX0sICR7cGFyc2VkVmFsdWUuZ2V0WWVhcigpfWA7XHJcbiAgICB9XHJcbiAgICBsZXQgcGFyc2VkVmFsdWVzID0gW107XHJcbiAgICBjb25zdCBjb2VyY2VWYWx1ZXMgPSB0aGlzLnZhbHVlIGFzIENhbmR5RGF0ZVtdO1xyXG5cclxuICAgIGZvcihsZXQgdmFsIG9mIGNvZXJjZVZhbHVlcykge1xyXG4gICAgICBjb25zdCBwYXJzZWRWYWx1ZSA9IHZhbCBhcyBDYW5keURhdGU7XHJcbiAgICAgIHBhcnNlZFZhbHVlcy5wdXNoKGAke3RoaXMuZ2V0TW9udGgocGFyc2VkVmFsdWUuZ2V0TW9udGgoKSl9ICR7cGFyc2VkVmFsdWUuZ2V0RGF0ZSgpfSwgJHtwYXJzZWRWYWx1ZS5nZXRZZWFyKCl9YCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFyc2VkVmFsdWVzO1xyXG4gIH1cclxuXHJcbiAgZ2V0TW9udGgoaWR4KSB7XHJcbiAgICBjb25zdCBtb250aHMgPSBbXHJcbiAgICAgICdKYW4nLFxyXG4gICAgICAnRmViJyxcclxuICAgICAgJ01hcicsXHJcbiAgICAgICdBcHInLFxyXG4gICAgICAnTWF5JyxcclxuICAgICAgJ0p1bicsXHJcbiAgICAgICdKdWwnLFxyXG4gICAgICAnQXVnJyxcclxuICAgICAgJ1NlcCcsXHJcbiAgICAgICdPY3QnLFxyXG4gICAgICAnTm92JyxcclxuICAgICAgJ0RlYydcclxuICAgIF07XHJcbiAgICByZXR1cm4gbW9udGhzW2lkeF07XHJcbiAgfVxyXG59XHJcbiJdfQ==