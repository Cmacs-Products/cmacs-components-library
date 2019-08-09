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
                    template: "<div class=\"ant-slider-mark\">\r\n  <span\r\n    class=\"ant-slider-mark-text\"\r\n    *ngFor=\"let attr of marks; trackBy: trackById\"\r\n    [class.ant-slider-mark-active]=\"attr.active\"\r\n    [ngStyle]=\"attr.style\"\r\n    [innerHTML]=\"attr.label\">\r\n  </span>\r\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2xpZGVyLW1hcmtzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mtc2xpZGVyL2NtYWNzLXNsaWRlci1tYXJrcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZILE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsZUFBZSxFQUFxQyxNQUFNLDRCQUE0QixDQUFDO0FBRWhHO0lBQUE7UUFTVyxpQkFBWSxHQUFrQixJQUFJLENBQUM7UUFDbkMsaUJBQVksR0FBa0IsSUFBSSxDQUFDO1FBSW5CLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsZUFBVSxHQUFHLEtBQUssQ0FBQztJQTBFOUMsQ0FBQzs7Ozs7SUF0RUMsK0NBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLFlBQVksRUFBRTtZQUN4QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7UUFDRCxJQUFJLE9BQU8sQ0FBQyxZQUFZLElBQUksT0FBTyxDQUFDLFlBQVksSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQ3hFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsNkNBQVM7Ozs7O0lBQVQsVUFBVSxNQUFjLEVBQUUsSUFBbUI7UUFDM0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRU8sOENBQVU7Ozs7SUFBbEI7UUFBQSxpQkFpQkM7O1lBaEJPLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLO1FBRXJD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Szt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7NkJBQ0wsS0FBSzs2QkFDTCxLQUFLOztJQURtQjtRQUFmLFlBQVksRUFBRTs7aUVBQW9CO0lBQ25CO1FBQWYsWUFBWSxFQUFFOztpRUFBb0I7SUEwRTlDLGdDQUFDO0NBQUEsQUF6RkQsSUF5RkM7U0FqRlkseUJBQXlCOzs7SUFDcEMsaURBQTRDOztJQUM1QyxpREFBNEM7O0lBQzVDLGlEQUFzQzs7SUFDdEMsMENBQXVCOztJQUN2QiwwQ0FBdUI7O0lBQ3ZCLCtDQUE0Qzs7SUFDNUMsK0NBQTRDOztJQUU1QywwQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgaXNDb25maWdBT2JqZWN0LCBEaXNwbGF5ZWRNYXJrLCBFeHRlbmRlZE1hcmssIE1hcmsgfSBmcm9tICcuL2NtYWNzLXNsaWRlci1kZWZpbml0aW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHNlbGVjdG9yOiAnY21hY3Mtc2xpZGVyLW1hcmtzJyxcclxuICBleHBvcnRBczogJ2NtYWNzU2xpZGVyTWFya3MnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1zbGlkZXItbWFya3MuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1NsaWRlck1hcmtzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBuekxvd2VyQm91bmQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIG56VXBwZXJCb3VuZDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgbnpNYXJrc0FycmF5OiBFeHRlbmRlZE1hcmtbXTtcclxuICBASW5wdXQoKSBuek1pbjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG56TWF4OiBudW1iZXI7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56VmVydGljYWwgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpJbmNsdWRlZCA9IGZhbHNlO1xyXG5cclxuICBtYXJrczogRGlzcGxheWVkTWFya1tdO1xyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5uek1hcmtzQXJyYXkpIHtcclxuICAgICAgdGhpcy5idWlsZE1hcmtzKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5uek1hcmtzQXJyYXkgfHwgY2hhbmdlcy5uekxvd2VyQm91bmQgfHwgY2hhbmdlcy5uelVwcGVyQm91bmQpIHtcclxuICAgICAgdGhpcy50b2dnbGVQb2ludEFjdGl2ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdHJhY2tCeUlkKF9pbmRleDogbnVtYmVyLCBtYXJrOiBEaXNwbGF5ZWRNYXJrKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBtYXJrLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBidWlsZE1hcmtzKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcmFuZ2UgPSB0aGlzLm56TWF4IC0gdGhpcy5uek1pbjtcclxuXHJcbiAgICB0aGlzLm1hcmtzID0gdGhpcy5uek1hcmtzQXJyYXkubWFwKG1hcmsgPT4ge1xyXG4gICAgICBjb25zdCB7IHZhbHVlLCBvZmZzZXQsIGNvbmZpZyB9ID0gbWFyaztcclxuICAgICAgY29uc3Qgc3R5bGUgPSB0aGlzLmJ1aWxkU3R5bGVzKHZhbHVlLCByYW5nZSwgY29uZmlnKTtcclxuICAgICAgY29uc3QgbGFiZWwgPSBpc0NvbmZpZ0FPYmplY3QoY29uZmlnKSA/IGNvbmZpZy5sYWJlbCA6IGNvbmZpZztcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgb2Zmc2V0LFxyXG4gICAgICAgIHN0eWxlLFxyXG4gICAgICAgIHZhbHVlLFxyXG4gICAgICAgIGNvbmZpZyxcclxuICAgICAgICBhY3RpdmU6IGZhbHNlXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYnVpbGRTdHlsZXModmFsdWU6IG51bWJlciwgcmFuZ2U6IG51bWJlciwgY29uZmlnOiBNYXJrKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7XHJcbiAgICBsZXQgc3R5bGU7XHJcblxyXG4gICAgaWYgKHRoaXMubnpWZXJ0aWNhbCkge1xyXG4gICAgICBzdHlsZSA9IHtcclxuICAgICAgICBtYXJnaW5Cb3R0b206ICctNTAlJyxcclxuICAgICAgICBib3R0b206IGAkeygodmFsdWUgLSB0aGlzLm56TWluKSAvIHJhbmdlKSAqIDEwMH0lYFxyXG4gICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgbWFya3NDb3VudCA9IHRoaXMubnpNYXJrc0FycmF5Lmxlbmd0aDtcclxuICAgICAgY29uc3QgdW5pdCA9IDEwMCAvIChtYXJrc0NvdW50IC0gMSk7XHJcbiAgICAgIGNvbnN0IG1hcmtXaWR0aCA9IHVuaXQgKiAwLjk7XHJcbiAgICAgIHN0eWxlID0ge1xyXG4gICAgICAgIHdpZHRoOiBgJHttYXJrV2lkdGh9JWAsXHJcbiAgICAgICAgbWFyZ2luTGVmdDogYCR7LW1hcmtXaWR0aCAvIDJ9JWAsXHJcbiAgICAgICAgbGVmdDogYCR7KCh2YWx1ZSAtIHRoaXMubnpNaW4pIC8gcmFuZ2UpICogMTAwfSVgXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzQ29uZmlnQU9iamVjdChjb25maWcpICYmIGNvbmZpZy5zdHlsZSkge1xyXG4gICAgICBzdHlsZSA9IHsgLi4uc3R5bGUsIC4uLmNvbmZpZy5zdHlsZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdHlsZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdG9nZ2xlUG9pbnRBY3RpdmUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5tYXJrcyAmJiB0aGlzLm56TG93ZXJCb3VuZCAhPT0gbnVsbCAmJiB0aGlzLm56VXBwZXJCb3VuZCAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLm1hcmtzLmZvckVhY2gobWFyayA9PiB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBtYXJrLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGlzQWN0aXZlID1cclxuICAgICAgICAgICghdGhpcy5uekluY2x1ZGVkICYmIHZhbHVlID09PSB0aGlzLm56VXBwZXJCb3VuZCkgfHxcclxuICAgICAgICAgICh0aGlzLm56SW5jbHVkZWQgJiYgdmFsdWUgPD0gdGhpcy5uelVwcGVyQm91bmQhICYmIHZhbHVlID49IHRoaXMubnpMb3dlckJvdW5kISk7XHJcblxyXG4gICAgICAgIG1hcmsuYWN0aXZlID0gaXNBY3RpdmU7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=