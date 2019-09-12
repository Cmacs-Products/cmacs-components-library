/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core';
import { isConfigAObject } from './cmacs-slider-definitions';
var CmacsSliderMarksComponent = /** @class */ (function () {
    function CmacsSliderMarksComponent() {
        this.nzLowerBound = null;
        this.nzUpperBound = null;
        this.nzVertical = false;
        this.nzIncluded = false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsSliderMarksComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzMarksArray) {
            this.buildMarks();
        }
        if (changes.nzMarksArray || changes.nzLowerBound || changes.nzUpperBound) {
            this.togglePointActive();
        }
    };
    /**
     * @param {?} _index
     * @param {?} mark
     * @return {?}
     */
    CmacsSliderMarksComponent.prototype.trackById = /**
     * @param {?} _index
     * @param {?} mark
     * @return {?}
     */
    function (_index, mark) {
        return mark.value;
    };
    /**
     * @private
     * @return {?}
     */
    CmacsSliderMarksComponent.prototype.buildMarks = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var range = this.nzMax - this.nzMin;
        this.marks = this.nzMarksArray.map((/**
         * @param {?} mark
         * @return {?}
         */
        function (mark) {
            var value = mark.value, offset = mark.offset, config = mark.config;
            /** @type {?} */
            var style = _this.buildStyles(value, range, config);
            /** @type {?} */
            var label = isConfigAObject(config) ? config.label : config;
            return {
                label: label,
                offset: offset,
                style: style,
                value: value,
                config: config,
                active: false
            };
        }));
    };
    /**
     * @private
     * @param {?} value
     * @param {?} range
     * @param {?} config
     * @return {?}
     */
    CmacsSliderMarksComponent.prototype.buildStyles = /**
     * @private
     * @param {?} value
     * @param {?} range
     * @param {?} config
     * @return {?}
     */
    function (value, range, config) {
        /** @type {?} */
        var style;
        if (this.nzVertical) {
            style = {
                marginBottom: '-50%',
                bottom: ((value - this.nzMin) / range) * 100 + "%"
            };
        }
        else {
            /** @type {?} */
            var marksCount = this.nzMarksArray.length;
            /** @type {?} */
            var unit = 100 / (marksCount - 1);
            /** @type {?} */
            var markWidth = unit * 0.9;
            style = {
                width: markWidth + "%",
                marginLeft: -markWidth / 2 + "%",
                left: ((value - this.nzMin) / range) * 100 + "%"
            };
        }
        if (isConfigAObject(config) && config.style) {
            style = tslib_1.__assign({}, style, config.style);
        }
        return style;
    };
    /**
     * @private
     * @return {?}
     */
    CmacsSliderMarksComponent.prototype.togglePointActive = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.marks && this.nzLowerBound !== null && this.nzUpperBound !== null) {
            this.marks.forEach((/**
             * @param {?} mark
             * @return {?}
             */
            function (mark) {
                /** @type {?} */
                var value = mark.value;
                /** @type {?} */
                var isActive = (!_this.nzIncluded && value === _this.nzUpperBound) ||
                    (_this.nzIncluded && value <= (/** @type {?} */ (_this.nzUpperBound)) && value >= (/** @type {?} */ (_this.nzLowerBound)));
                mark.active = isActive;
            }));
        }
    };
    CmacsSliderMarksComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    selector: 'cmacs-slider-marks',
                    exportAs: 'cmacsSliderMarks',
                    template: "<div class=\"ant-slider-mark\">\n  <span\n    class=\"ant-slider-mark-text\"\n    *ngFor=\"let attr of marks; trackBy: trackById\"\n    [class.ant-slider-mark-active]=\"attr.active\"\n    [ngStyle]=\"attr.style\"\n    [innerHTML]=\"attr.label\">\n  </span>\n</div>"
                }] }
    ];
    CmacsSliderMarksComponent.propDecorators = {
        nzLowerBound: [{ type: Input }],
        nzUpperBound: [{ type: Input }],
        nzMarksArray: [{ type: Input }],
        nzMin: [{ type: Input }],
        nzMax: [{ type: Input }],
        nzVertical: [{ type: Input }],
        nzIncluded: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsSliderMarksComponent.prototype, "nzVertical", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsSliderMarksComponent.prototype, "nzIncluded", void 0);
    return CmacsSliderMarksComponent;
}());
export { CmacsSliderMarksComponent };
if (false) {
    /** @type {?} */
    CmacsSliderMarksComponent.prototype.nzLowerBound;
    /** @type {?} */
    CmacsSliderMarksComponent.prototype.nzUpperBound;
    /** @type {?} */
    CmacsSliderMarksComponent.prototype.nzMarksArray;
    /** @type {?} */
    CmacsSliderMarksComponent.prototype.nzMin;
    /** @type {?} */
    CmacsSliderMarksComponent.prototype.nzMax;
    /** @type {?} */
    CmacsSliderMarksComponent.prototype.nzVertical;
    /** @type {?} */
    CmacsSliderMarksComponent.prototype.nzIncluded;
    /** @type {?} */
    CmacsSliderMarksComponent.prototype.marks;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2xpZGVyLW1hcmtzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mtc2xpZGVyL2NtYWNzLXNsaWRlci1tYXJrcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZILE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsZUFBZSxFQUFxQyxNQUFNLDRCQUE0QixDQUFDO0FBRWhHO0lBQUE7UUFTVyxpQkFBWSxHQUFrQixJQUFJLENBQUM7UUFDbkMsaUJBQVksR0FBa0IsSUFBSSxDQUFDO1FBSW5CLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsZUFBVSxHQUFHLEtBQUssQ0FBQztJQTBFOUMsQ0FBQzs7Ozs7SUF0RUMsK0NBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLFlBQVksRUFBRTtZQUN4QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7UUFDRCxJQUFJLE9BQU8sQ0FBQyxZQUFZLElBQUksT0FBTyxDQUFDLFlBQVksSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQ3hFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsNkNBQVM7Ozs7O0lBQVQsVUFBVSxNQUFjLEVBQUUsSUFBbUI7UUFDM0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRU8sOENBQVU7Ozs7SUFBbEI7UUFBQSxpQkFpQkM7O1lBaEJPLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLO1FBRXJD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Szt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7NkJBQ0wsS0FBSzs2QkFDTCxLQUFLOztJQURtQjtRQUFmLFlBQVksRUFBRTs7aUVBQW9CO0lBQ25CO1FBQWYsWUFBWSxFQUFFOztpRUFBb0I7SUEwRTlDLGdDQUFDO0NBQUEsQUF6RkQsSUF5RkM7U0FqRlkseUJBQXlCOzs7SUFDcEMsaURBQTRDOztJQUM1QyxpREFBNEM7O0lBQzVDLGlEQUFzQzs7SUFDdEMsMENBQXVCOztJQUN2QiwwQ0FBdUI7O0lBQ3ZCLCtDQUE0Qzs7SUFDNUMsK0NBQTRDOztJQUU1QywwQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuaW1wb3J0IHsgaXNDb25maWdBT2JqZWN0LCBEaXNwbGF5ZWRNYXJrLCBFeHRlbmRlZE1hcmssIE1hcmsgfSBmcm9tICcuL2NtYWNzLXNsaWRlci1kZWZpbml0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHNlbGVjdG9yOiAnY21hY3Mtc2xpZGVyLW1hcmtzJyxcbiAgZXhwb3J0QXM6ICdjbWFjc1NsaWRlck1hcmtzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXNsaWRlci1tYXJrcy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQ21hY3NTbGlkZXJNYXJrc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIG56TG93ZXJCb3VuZDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56VXBwZXJCb3VuZDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56TWFya3NBcnJheTogRXh0ZW5kZWRNYXJrW107XG4gIEBJbnB1dCgpIG56TWluOiBudW1iZXI7XG4gIEBJbnB1dCgpIG56TWF4OiBudW1iZXI7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelZlcnRpY2FsID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekluY2x1ZGVkID0gZmFsc2U7XG5cbiAgbWFya3M6IERpc3BsYXllZE1hcmtbXTtcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMubnpNYXJrc0FycmF5KSB7XG4gICAgICB0aGlzLmJ1aWxkTWFya3MoKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMubnpNYXJrc0FycmF5IHx8IGNoYW5nZXMubnpMb3dlckJvdW5kIHx8IGNoYW5nZXMubnpVcHBlckJvdW5kKSB7XG4gICAgICB0aGlzLnRvZ2dsZVBvaW50QWN0aXZlKCk7XG4gICAgfVxuICB9XG5cbiAgdHJhY2tCeUlkKF9pbmRleDogbnVtYmVyLCBtYXJrOiBEaXNwbGF5ZWRNYXJrKTogbnVtYmVyIHtcbiAgICByZXR1cm4gbWFyay52YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRNYXJrcygpOiB2b2lkIHtcbiAgICBjb25zdCByYW5nZSA9IHRoaXMubnpNYXggLSB0aGlzLm56TWluO1xuXG4gICAgdGhpcy5tYXJrcyA9IHRoaXMubnpNYXJrc0FycmF5Lm1hcChtYXJrID0+IHtcbiAgICAgIGNvbnN0IHsgdmFsdWUsIG9mZnNldCwgY29uZmlnIH0gPSBtYXJrO1xuICAgICAgY29uc3Qgc3R5bGUgPSB0aGlzLmJ1aWxkU3R5bGVzKHZhbHVlLCByYW5nZSwgY29uZmlnKTtcbiAgICAgIGNvbnN0IGxhYmVsID0gaXNDb25maWdBT2JqZWN0KGNvbmZpZykgPyBjb25maWcubGFiZWwgOiBjb25maWc7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxhYmVsLFxuICAgICAgICBvZmZzZXQsXG4gICAgICAgIHN0eWxlLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgY29uZmlnLFxuICAgICAgICBhY3RpdmU6IGZhbHNlXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZFN0eWxlcyh2YWx1ZTogbnVtYmVyLCByYW5nZTogbnVtYmVyLCBjb25maWc6IE1hcmspOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgICBsZXQgc3R5bGU7XG5cbiAgICBpZiAodGhpcy5uelZlcnRpY2FsKSB7XG4gICAgICBzdHlsZSA9IHtcbiAgICAgICAgbWFyZ2luQm90dG9tOiAnLTUwJScsXG4gICAgICAgIGJvdHRvbTogYCR7KCh2YWx1ZSAtIHRoaXMubnpNaW4pIC8gcmFuZ2UpICogMTAwfSVgXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtYXJrc0NvdW50ID0gdGhpcy5uek1hcmtzQXJyYXkubGVuZ3RoO1xuICAgICAgY29uc3QgdW5pdCA9IDEwMCAvIChtYXJrc0NvdW50IC0gMSk7XG4gICAgICBjb25zdCBtYXJrV2lkdGggPSB1bml0ICogMC45O1xuICAgICAgc3R5bGUgPSB7XG4gICAgICAgIHdpZHRoOiBgJHttYXJrV2lkdGh9JWAsXG4gICAgICAgIG1hcmdpbkxlZnQ6IGAkey1tYXJrV2lkdGggLyAyfSVgLFxuICAgICAgICBsZWZ0OiBgJHsoKHZhbHVlIC0gdGhpcy5uek1pbikgLyByYW5nZSkgKiAxMDB9JWBcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGlzQ29uZmlnQU9iamVjdChjb25maWcpICYmIGNvbmZpZy5zdHlsZSkge1xuICAgICAgc3R5bGUgPSB7IC4uLnN0eWxlLCAuLi5jb25maWcuc3R5bGUgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGU7XG4gIH1cblxuICBwcml2YXRlIHRvZ2dsZVBvaW50QWN0aXZlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm1hcmtzICYmIHRoaXMubnpMb3dlckJvdW5kICE9PSBudWxsICYmIHRoaXMubnpVcHBlckJvdW5kICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm1hcmtzLmZvckVhY2gobWFyayA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gbWFyay52YWx1ZTtcbiAgICAgICAgY29uc3QgaXNBY3RpdmUgPVxuICAgICAgICAgICghdGhpcy5uekluY2x1ZGVkICYmIHZhbHVlID09PSB0aGlzLm56VXBwZXJCb3VuZCkgfHxcbiAgICAgICAgICAodGhpcy5uekluY2x1ZGVkICYmIHZhbHVlIDw9IHRoaXMubnpVcHBlckJvdW5kISAmJiB2YWx1ZSA+PSB0aGlzLm56TG93ZXJCb3VuZCEpO1xuXG4gICAgICAgIG1hcmsuYWN0aXZlID0gaXNBY3RpdmU7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==