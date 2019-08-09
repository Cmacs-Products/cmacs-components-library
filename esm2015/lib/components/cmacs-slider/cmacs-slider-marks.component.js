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
export class CmacsSliderMarksComponent {
    constructor() {
        this.nzLowerBound = null;
        this.nzUpperBound = null;
        this.nzVertical = false;
        this.nzIncluded = false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzMarksArray) {
            this.buildMarks();
        }
        if (changes.nzMarksArray || changes.nzLowerBound || changes.nzUpperBound) {
            this.togglePointActive();
        }
    }
    /**
     * @param {?} _index
     * @param {?} mark
     * @return {?}
     */
    trackById(_index, mark) {
        return mark.value;
    }
    /**
     * @private
     * @return {?}
     */
    buildMarks() {
        /** @type {?} */
        const range = this.nzMax - this.nzMin;
        this.marks = this.nzMarksArray.map((/**
         * @param {?} mark
         * @return {?}
         */
        mark => {
            const { value, offset, config } = mark;
            /** @type {?} */
            const style = this.buildStyles(value, range, config);
            /** @type {?} */
            const label = isConfigAObject(config) ? config.label : config;
            return {
                label,
                offset,
                style,
                value,
                config,
                active: false
            };
        }));
    }
    /**
     * @private
     * @param {?} value
     * @param {?} range
     * @param {?} config
     * @return {?}
     */
    buildStyles(value, range, config) {
        /** @type {?} */
        let style;
        if (this.nzVertical) {
            style = {
                marginBottom: '-50%',
                bottom: `${((value - this.nzMin) / range) * 100}%`
            };
        }
        else {
            /** @type {?} */
            const marksCount = this.nzMarksArray.length;
            /** @type {?} */
            const unit = 100 / (marksCount - 1);
            /** @type {?} */
            const markWidth = unit * 0.9;
            style = {
                width: `${markWidth}%`,
                marginLeft: `${-markWidth / 2}%`,
                left: `${((value - this.nzMin) / range) * 100}%`
            };
        }
        if (isConfigAObject(config) && config.style) {
            style = Object.assign({}, style, config.style);
        }
        return style;
    }
    /**
     * @private
     * @return {?}
     */
    togglePointActive() {
        if (this.marks && this.nzLowerBound !== null && this.nzUpperBound !== null) {
            this.marks.forEach((/**
             * @param {?} mark
             * @return {?}
             */
            mark => {
                /** @type {?} */
                const value = mark.value;
                /** @type {?} */
                const isActive = (!this.nzIncluded && value === this.nzUpperBound) ||
                    (this.nzIncluded && value <= (/** @type {?} */ (this.nzUpperBound)) && value >= (/** @type {?} */ (this.nzLowerBound)));
                mark.active = isActive;
            }));
        }
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2xpZGVyLW1hcmtzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mtc2xpZGVyL2NtYWNzLXNsaWRlci1tYXJrcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZILE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsZUFBZSxFQUFxQyxNQUFNLDRCQUE0QixDQUFDO0FBVWhHLE1BQU0sT0FBTyx5QkFBeUI7SUFSdEM7UUFTVyxpQkFBWSxHQUFrQixJQUFJLENBQUM7UUFDbkMsaUJBQVksR0FBa0IsSUFBSSxDQUFDO1FBSW5CLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsZUFBVSxHQUFHLEtBQUssQ0FBQztJQTBFOUMsQ0FBQzs7Ozs7SUF0RUMsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLFlBQVksRUFBRTtZQUN4QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7UUFDRCxJQUFJLE9BQU8sQ0FBQyxZQUFZLElBQUksT0FBTyxDQUFDLFlBQVksSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQ3hFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLE1BQWMsRUFBRSxJQUFtQjtRQUMzQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFTyxVQUFVOztjQUNWLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLO1FBRXJDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFB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TCxLQUFLOztBQURtQjtJQUFmLFlBQVksRUFBRTs7NkRBQW9CO0FBQ25CO0lBQWYsWUFBWSxFQUFFOzs2REFBb0I7OztJQU41QyxpREFBNEM7O0lBQzVDLGlEQUE0Qzs7SUFDNUMsaURBQXNDOztJQUN0QywwQ0FBdUI7O0lBQ3ZCLDBDQUF1Qjs7SUFDdkIsK0NBQTRDOztJQUM1QywrQ0FBNEM7O0lBRTVDLDBDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBpc0NvbmZpZ0FPYmplY3QsIERpc3BsYXllZE1hcmssIEV4dGVuZGVkTWFyaywgTWFyayB9IGZyb20gJy4vY21hY3Mtc2xpZGVyLWRlZmluaXRpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1zbGlkZXItbWFya3MnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NTbGlkZXJNYXJrcycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXNsaWRlci1tYXJrcy5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzU2xpZGVyTWFya3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIG56TG93ZXJCb3VuZDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgbnpVcHBlckJvdW5kOiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBuek1hcmtzQXJyYXk6IEV4dGVuZGVkTWFya1tdO1xyXG4gIEBJbnB1dCgpIG56TWluOiBudW1iZXI7XHJcbiAgQElucHV0KCkgbnpNYXg6IG51bWJlcjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpWZXJ0aWNhbCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekluY2x1ZGVkID0gZmFsc2U7XHJcblxyXG4gIG1hcmtzOiBEaXNwbGF5ZWRNYXJrW107XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLm56TWFya3NBcnJheSkge1xyXG4gICAgICB0aGlzLmJ1aWxkTWFya3MoKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLm56TWFya3NBcnJheSB8fCBjaGFuZ2VzLm56TG93ZXJCb3VuZCB8fCBjaGFuZ2VzLm56VXBwZXJCb3VuZCkge1xyXG4gICAgICB0aGlzLnRvZ2dsZVBvaW50QWN0aXZlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0cmFja0J5SWQoX2luZGV4OiBudW1iZXIsIG1hcms6IERpc3BsYXllZE1hcmspOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIG1hcmsudmFsdWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGJ1aWxkTWFya3MoKTogdm9pZCB7XHJcbiAgICBjb25zdCByYW5nZSA9IHRoaXMubnpNYXggLSB0aGlzLm56TWluO1xyXG5cclxuICAgIHRoaXMubWFya3MgPSB0aGlzLm56TWFya3NBcnJheS5tYXAobWFyayA9PiB7XHJcbiAgICAgIGNvbnN0IHsgdmFsdWUsIG9mZnNldCwgY29uZmlnIH0gPSBtYXJrO1xyXG4gICAgICBjb25zdCBzdHlsZSA9IHRoaXMuYnVpbGRTdHlsZXModmFsdWUsIHJhbmdlLCBjb25maWcpO1xyXG4gICAgICBjb25zdCBsYWJlbCA9IGlzQ29uZmlnQU9iamVjdChjb25maWcpID8gY29uZmlnLmxhYmVsIDogY29uZmlnO1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBsYWJlbCxcclxuICAgICAgICBvZmZzZXQsXHJcbiAgICAgICAgc3R5bGUsXHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgY29uZmlnLFxyXG4gICAgICAgIGFjdGl2ZTogZmFsc2VcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBidWlsZFN0eWxlcyh2YWx1ZTogbnVtYmVyLCByYW5nZTogbnVtYmVyLCBjb25maWc6IE1hcmspOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcclxuICAgIGxldCBzdHlsZTtcclxuXHJcbiAgICBpZiAodGhpcy5uelZlcnRpY2FsKSB7XHJcbiAgICAgIHN0eWxlID0ge1xyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogJy01MCUnLFxyXG4gICAgICAgIGJvdHRvbTogYCR7KCh2YWx1ZSAtIHRoaXMubnpNaW4pIC8gcmFuZ2UpICogMTAwfSVgXHJcbiAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBtYXJrc0NvdW50ID0gdGhpcy5uek1hcmtzQXJyYXkubGVuZ3RoO1xyXG4gICAgICBjb25zdCB1bml0ID0gMTAwIC8gKG1hcmtzQ291bnQgLSAxKTtcclxuICAgICAgY29uc3QgbWFya1dpZHRoID0gdW5pdCAqIDAuOTtcclxuICAgICAgc3R5bGUgPSB7XHJcbiAgICAgICAgd2lkdGg6IGAke21hcmtXaWR0aH0lYCxcclxuICAgICAgICBtYXJnaW5MZWZ0OiBgJHstbWFya1dpZHRoIC8gMn0lYCxcclxuICAgICAgICBsZWZ0OiBgJHsoKHZhbHVlIC0gdGhpcy5uek1pbikgLyByYW5nZSkgKiAxMDB9JWBcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNDb25maWdBT2JqZWN0KGNvbmZpZykgJiYgY29uZmlnLnN0eWxlKSB7XHJcbiAgICAgIHN0eWxlID0geyAuLi5zdHlsZSwgLi4uY29uZmlnLnN0eWxlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN0eWxlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0b2dnbGVQb2ludEFjdGl2ZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm1hcmtzICYmIHRoaXMubnpMb3dlckJvdW5kICE9PSBudWxsICYmIHRoaXMubnpVcHBlckJvdW5kICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMubWFya3MuZm9yRWFjaChtYXJrID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IG1hcmsudmFsdWU7XHJcbiAgICAgICAgY29uc3QgaXNBY3RpdmUgPVxyXG4gICAgICAgICAgKCF0aGlzLm56SW5jbHVkZWQgJiYgdmFsdWUgPT09IHRoaXMubnpVcHBlckJvdW5kKSB8fFxyXG4gICAgICAgICAgKHRoaXMubnpJbmNsdWRlZCAmJiB2YWx1ZSA8PSB0aGlzLm56VXBwZXJCb3VuZCEgJiYgdmFsdWUgPj0gdGhpcy5uekxvd2VyQm91bmQhKTtcclxuXHJcbiAgICAgICAgbWFyay5hY3RpdmUgPSBpc0FjdGl2ZTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==