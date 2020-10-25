/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { toBoolean, valueFunctionProp, InputBoolean, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { DateHelperService, NzI18nService } from 'ng-zorro-antd/i18n';
import { AbstractPickerComponent } from './abstract-picker.component';
import { takeUntil } from 'rxjs/operators';
import * as moment_ from 'moment';
/** @type {?} */
var moment = moment_;
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
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this.i18n.localeChange.pipe(takeUntil(this.destroyed$)).subscribe((/**
         * @return {?}
         */
        function () {
            switch (_this.i18n.getLocale().locale) {
                case 'de':
                    _this.format = _this.showTime ? 'dd.MM.yyyy hh:mm' : 'dd.MM.yyyy';
                    break;
                case 'en':
                    _this.format = _this.showTime ? 'MM/dd/yyyy hh:mm' : 'MM/dd/yyyy';
                    break;
                default:
                    _this.format = _this.showTime ? 'MM/dd/yyyy hh:mm' : 'MM/dd/yyyy';
            }
            _this.cdr.markForCheck();
        }));
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
            /** @type {?} */
            var date = moment(parsedValue.nativeDate).locale(this.i18n.getLocale().locale);
            return date.format(this.i18n.getLocale().locale === 'de' ? 'DD. MMM YYYY' : 'MMM DD, YYYY');
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
                /** @type {?} */
                var date = moment(parsedValue.nativeDate).locale(this.i18n.getLocale().locale);
                parsedValues.push(date.format(this.i18n.getLocale().locale === 'de' ? 'DD. MMM YYYY' : 'MMM DD, YYYY'));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1kYXRlLXBpY2tlci9kYXRlLXJhbmdlLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFHUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFnQixZQUFZLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0SCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdEUsT0FBTyxFQUFFLHVCQUF1QixFQUFrQixNQUFNLDZCQUE2QixDQUFDO0FBR3RGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEtBQUssT0FBTyxNQUFNLFFBQVEsQ0FBQzs7SUFDNUIsTUFBTSxHQUFHLE9BQU87QUFFdEI7SUFHbUQseURBQXVCO0lBbUN4RSx1Q0FDRSxJQUFtQixFQUNuQixHQUFzQixFQUN0QixVQUE2QixFQUM3QixXQUFvQztRQUp0QyxZQU1FLGtCQUFNLElBQUksRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLFdBQVcsQ0FBQyxTQU0xQztRQTlDUSxjQUFRLEdBQUcsS0FBSyxDQUFDLENBQUMsNkJBQTZCO1FBSy9CLGVBQVMsR0FBRyxLQUFLLENBQUM7UUFHeEIsd0JBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQTJCLENBQUM7UUFDakUsMkJBQXFCLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUU3RCxxQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQix3QkFBa0IsR0FBRyxFQUFFLENBQUM7UUFD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OztJQUNwQixvREFBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgdG9Cb29sZWFuLCB2YWx1ZUZ1bmN0aW9uUHJvcCwgRnVuY3Rpb25Qcm9wLCBJbnB1dEJvb2xlYW4sIE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSwgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcblxyXG5pbXBvcnQgeyBBYnN0cmFjdFBpY2tlckNvbXBvbmVudCwgQ29tcGF0aWJsZURhdGUgfSBmcm9tICcuL2Fic3RyYWN0LXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDYW5keURhdGUgfSBmcm9tICcuL2xpYi9jYW5keS1kYXRlL2NhbmR5LWRhdGUnO1xyXG5pbXBvcnQgeyBEaXNhYmxlZFRpbWVGbiwgUGFuZWxNb2RlLCBQcmVzZXRSYW5nZXMgfSBmcm9tICcuL3N0YW5kYXJkLXR5cGVzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgKiBhcyBtb21lbnRfIGZyb20gJ21vbWVudCc7XHJcbmNvbnN0IG1vbWVudCA9IG1vbWVudF87XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICB0ZW1wbGF0ZTogYGAgLy8gSnVzdCBmb3Igcm9sbHVwXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0RhdGVSYW5nZVBpY2tlckNvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0UGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIHNob3dXZWVrID0gZmFsc2U7IC8vIFNob3VsZCBzaG93IGFzIHdlZWsgcGlja2VyXHJcblxyXG4gIEBJbnB1dCgpIGRhdGVSZW5kZXI6IEZ1bmN0aW9uUHJvcDxUZW1wbGF0ZVJlZjxEYXRlPiB8IHN0cmluZz47XHJcbiAgQElucHV0KCkgZGlzYWJsZWRUaW1lOiBEaXNhYmxlZFRpbWVGbjtcclxuICBASW5wdXQoKSByZW5kZXJFeHRyYUZvb3RlcjogRnVuY3Rpb25Qcm9wPFRlbXBsYXRlUmVmPHZvaWQ+IHwgc3RyaW5nPjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1RvZGF5ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbW9kZTogUGFuZWxNb2RlIHwgUGFuZWxNb2RlW107XHJcbiAgQElucHV0KCkgcmFuZ2VzOiBQcmVzZXRSYW5nZXM7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNtYWNzT25QYW5lbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8UGFuZWxNb2RlIHwgUGFuZWxNb2RlW10+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNtYWNzT25DYWxlbmRhckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZVtdPigpO1xyXG5cclxuICBASW5wdXQoKSBvcGVuUGlja2VyVGl0bGUgPSAnJztcclxuICBASW5wdXQoKSBvcGVuUGlja2VyU3VidGl0bGUgPSAnJztcclxuICBASW5wdXQoKSBvcGVuUGlja2VyTGVmdFJhbmdlU3ViID0gJyc7XHJcbiAgQElucHV0KCkgb3BlblBpY2tlclJpZ2h0UmFuZ2VTdWIgPSAnJztcclxuXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdmFyaWFibGUtbmFtZVxyXG4gIHByaXZhdGUgX3Nob3dUaW1lOiBvYmplY3QgfCBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGdldCBzaG93VGltZSgpOiBvYmplY3QgfCBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9zaG93VGltZTtcclxuICB9XHJcbiAgc2V0IHNob3dUaW1lKHZhbHVlOiBvYmplY3QgfCBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9zaG93VGltZSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyB2YWx1ZSA6IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY21hY3NPbk9rID0gbmV3IEV2ZW50RW1pdHRlcjxDb21wYXRpYmxlRGF0ZSB8IG51bGw+KCk7XHJcblxyXG4gIGdldCByZWFsU2hvd1RvZGF5KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICF0aGlzLmlzUmFuZ2UgJiYgdGhpcy5zaG93VG9kYXk7XHJcbiAgfVxyXG5cclxuICBwaWNrZXJTdHlsZTogb2JqZWN0OyAvLyBGaW5hbCBwaWNrZXIgc3R5bGUgdGhhdCBjb250YWlucyB3aWR0aCBmaXggY29ycmVjdGlvbnMgZXRjLlxyXG4gIGV4dHJhRm9vdGVyOiBUZW1wbGF0ZVJlZjx2b2lkPiB8IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBpMThuOiBOekkxOG5TZXJ2aWNlLFxyXG4gICAgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIGRhdGVIZWxwZXI6IERhdGVIZWxwZXJTZXJ2aWNlLFxyXG4gICAgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXHJcbiAgKSB7XHJcbiAgICBzdXBlcihpMThuLCBjZHIsIGRhdGVIZWxwZXIsIG5vQW5pbWF0aW9uKTtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUgYXMgQ2FuZHlEYXRlW107XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZSBhcyBDYW5keURhdGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nT25Jbml0KCk7XHJcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSkge1xyXG4gICAgICAgIGNhc2UgJ2RlJzpcclxuICAgICAgICAgIHRoaXMuZm9ybWF0ID0gdGhpcy5zaG93VGltZSA/ICdkZC5NTS55eXl5IGhoOm1tJyA6ICdkZC5NTS55eXl5JztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2VuJzpcclxuICAgICAgICAgIHRoaXMuZm9ybWF0ID0gdGhpcy5zaG93VGltZSA/ICdNTS9kZC95eXl5IGhoOm1tJyA6ICdNTS9kZC95eXl5JztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICB0aGlzLmZvcm1hdCA9IHRoaXMuc2hvd1RpbWUgPyAnTU0vZGQveXl5eSBoaDptbScgOiAnTU0vZGQveXl5eSc7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nT25DaGFuZ2VzKGNoYW5nZXMpO1xyXG5cclxuICAgIGlmIChjaGFuZ2VzLnJlbmRlckV4dHJhRm9vdGVyKSB7XHJcbiAgICAgIHRoaXMuZXh0cmFGb290ZXIgPSB2YWx1ZUZ1bmN0aW9uUHJvcCh0aGlzLnJlbmRlckV4dHJhRm9vdGVyKTtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5leHRyYUZvb3RlcilcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhbmdlcy5zaG93VGltZSB8fCBjaGFuZ2VzLmNtYWNzU3R5bGUpIHtcclxuICAgICAgdGhpcy5zZXRGaXhlZFBpY2tlclN0eWxlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBJZiBoYXMgbm8gdGltZXBpY2tlciBhbmQgdGhlIHVzZXIgc2VsZWN0IGEgZGF0ZSBieSBkYXRlIHBhbmVsLCB0aGVuIGNsb3NlIHBpY2tlclxyXG4gIG9uVmFsdWVDaGFuZ2UodmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQge1xyXG4gICAgc3VwZXIub25WYWx1ZUNoYW5nZSh2YWx1ZSk7XHJcblxyXG4gICAgaWYgKCF0aGlzLnNob3dUaW1lKSB7XHJcbiAgICAgIHRoaXMuY2xvc2VPdmVybGF5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBFbWl0IG56T25DYWxlbmRhckNoYW5nZSB3aGVuIHNlbGVjdCBkYXRlIGJ5IG56LXJhbmdlLXBpY2tlclxyXG4gIG9uQ2FsZW5kYXJDaGFuZ2UodmFsdWU6IENhbmR5RGF0ZVtdKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIGNvbnN0IHJhbmdlVmFsdWUgPSB2YWx1ZS5tYXAoeCA9PiB4Lm5hdGl2ZURhdGUpO1xyXG4gICAgICB0aGlzLmNtYWNzT25DYWxlbmRhckNoYW5nZS5lbWl0KHJhbmdlVmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gRW1pdHRlZCB3aGVuIGRvbmUgd2l0aCBkYXRlIHNlbGVjdGluZ1xyXG4gIG9uUmVzdWx0T2soKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZSBhcyBDYW5keURhdGVbXTtcclxuICAgICAgaWYgKHZhbHVlLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMuY21hY3NPbk9rLmVtaXQoW3ZhbHVlWzBdLm5hdGl2ZURhdGUsIHZhbHVlWzFdLm5hdGl2ZURhdGVdKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNtYWNzT25Pay5lbWl0KFtdKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMudmFsdWUpIHtcclxuICAgICAgICB0aGlzLmNtYWNzT25Pay5lbWl0KCh0aGlzLnZhbHVlIGFzIENhbmR5RGF0ZSkubmF0aXZlRGF0ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jbWFjc09uT2suZW1pdChudWxsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5jbG9zZU92ZXJsYXkoKTtcclxuICB9XHJcblxyXG4gIG9uT3BlbkNoYW5nZShvcGVuOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmNtYWNzT25PcGVuQ2hhbmdlLmVtaXQob3Blbik7XHJcbiAgfVxyXG5cclxuICAvLyBTZXR1cCBmaXhlZCBzdHlsZSBmb3IgcGlja2VyXHJcbiAgcHJpdmF0ZSBzZXRGaXhlZFBpY2tlclN0eWxlKCk6IHZvaWQge1xyXG4gICAgY29uc3Qgc2hvd1RpbWVGaXhlczogeyB3aWR0aD86IHN0cmluZyB9ID0ge307XHJcbiAgICBpZiAodGhpcy5zaG93VGltZSkge1xyXG4gICAgICBzaG93VGltZUZpeGVzLndpZHRoID0gdGhpcy5pc1JhbmdlID8gJzM1MHB4JyA6ICcxOTVweCc7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5waWNrZXJTdHlsZSA9IHsgLi4uc2hvd1RpbWVGaXhlcywgLi4udGhpcy5jbWFjc1N0eWxlIH07XHJcbiAgfVxyXG5cclxuICBwYXJzZURhdGUoKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNSYW5nZSkge1xyXG4gICAgICBjb25zdCBwYXJzZWRWYWx1ZSA9IHRoaXMudmFsdWUgYXMgQ2FuZHlEYXRlO1xyXG4gICAgICBjb25zdCBkYXRlID0gbW9tZW50KHBhcnNlZFZhbHVlLm5hdGl2ZURhdGUpLmxvY2FsZSh0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlKTtcclxuICAgICAgcmV0dXJuIGRhdGUuZm9ybWF0KHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUgPT09ICdkZScgPyAnREQuIE1NTSBZWVlZJyA6ICdNTU0gREQsIFlZWVknKTtcclxuICAgIH1cclxuICAgIGxldCBwYXJzZWRWYWx1ZXMgPSBbXTtcclxuICAgIGNvbnN0IGNvZXJjZVZhbHVlcyA9IHRoaXMudmFsdWUgYXMgQ2FuZHlEYXRlW107XHJcblxyXG4gICAgZm9yKGxldCB2YWwgb2YgY29lcmNlVmFsdWVzKSB7XHJcbiAgICAgIGNvbnN0IHBhcnNlZFZhbHVlID0gdmFsIGFzIENhbmR5RGF0ZTtcclxuICAgICAgY29uc3QgZGF0ZSA9IG1vbWVudChwYXJzZWRWYWx1ZS5uYXRpdmVEYXRlKS5sb2NhbGUodGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSk7XHJcbiAgICAgIHBhcnNlZFZhbHVlcy5wdXNoKGRhdGUuZm9ybWF0KHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUgPT09ICdkZScgPyAnREQuIE1NTSBZWVlZJyA6ICdNTU0gREQsIFlZWVknKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFyc2VkVmFsdWVzO1xyXG4gIH1cclxuXHJcbiAgZ2V0TW9udGgoaWR4KSB7XHJcbiAgICBjb25zdCBtb250aHMgPSBbXHJcbiAgICAgICdKYW4nLFxyXG4gICAgICAnRmViJyxcclxuICAgICAgJ01hcicsXHJcbiAgICAgICdBcHInLFxyXG4gICAgICAnTWF5JyxcclxuICAgICAgJ0p1bicsXHJcbiAgICAgICdKdWwnLFxyXG4gICAgICAnQXVnJyxcclxuICAgICAgJ1NlcCcsXHJcbiAgICAgICdPY3QnLFxyXG4gICAgICAnTm92JyxcclxuICAgICAgJ0RlYydcclxuICAgIF07XHJcbiAgICByZXR1cm4gbW9udGhzW2lkeF07XHJcbiAgfVxyXG59XHJcbiJdfQ==