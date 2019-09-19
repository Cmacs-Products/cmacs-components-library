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
var CmacsSliderStepComponent = /** @class */ (function () {
    function CmacsSliderStepComponent() {
        this.nzLowerBound = null;
        this.nzUpperBound = null;
        this.nzVertical = false;
        this.nzIncluded = false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsSliderStepComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzMarksArray) {
            this.buildSteps();
        }
        if (changes.nzMarksArray || changes.nzLowerBound || changes.nzUpperBound) {
            this.togglePointActive();
        }
    };
    /**
     * @param {?} _index
     * @param {?} step
     * @return {?}
     */
    CmacsSliderStepComponent.prototype.trackById = /**
     * @param {?} _index
     * @param {?} step
     * @return {?}
     */
    function (_index, step) {
        return step.value;
    };
    /**
     * @private
     * @return {?}
     */
    CmacsSliderStepComponent.prototype.buildSteps = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var orient = this.nzVertical ? 'bottom' : 'left';
        this.steps = this.nzMarksArray.map((/**
         * @param {?} mark
         * @return {?}
         */
        function (mark) {
            var _a;
            var value = mark.value, offset = mark.offset, config = mark.config;
            return {
                value: value,
                offset: offset,
                config: config,
                active: false,
                style: (_a = {},
                    _a[orient] = offset + "%",
                    _a)
            };
        }));
    };
    /**
     * @private
     * @return {?}
     */
    CmacsSliderStepComponent.prototype.togglePointActive = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.steps && this.nzLowerBound !== null && this.nzUpperBound !== null) {
            this.steps.forEach((/**
             * @param {?} step
             * @return {?}
             */
            function (step) {
                /** @type {?} */
                var value = step.value;
                /** @type {?} */
                var isActive = (!_this.nzIncluded && value === _this.nzUpperBound) ||
                    (_this.nzIncluded && value <= (/** @type {?} */ (_this.nzUpperBound)) && value >= (/** @type {?} */ (_this.nzLowerBound)));
                step.active = isActive;
            }));
        }
    };
    CmacsSliderStepComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'cmacs-slider-step',
                    exportAs: 'cmacsSliderStep',
                    preserveWhitespaces: false,
                    template: "<div class=\"ant-slider-step\">\n  <span\n    class=\"ant-slider-dot\"\n    *ngFor=\"let mark of steps; trackBy: trackById\"\n    [class.ant-slider-dot-active]=\"mark.active\"\n    [ngStyle]=\"mark.style\">\n  </span>\n</div>"
                }] }
    ];
    CmacsSliderStepComponent.propDecorators = {
        nzLowerBound: [{ type: Input }],
        nzUpperBound: [{ type: Input }],
        nzMarksArray: [{ type: Input }],
        nzVertical: [{ type: Input }],
        nzIncluded: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsSliderStepComponent.prototype, "nzVertical", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsSliderStepComponent.prototype, "nzIncluded", void 0);
    return CmacsSliderStepComponent;
}());
export { CmacsSliderStepComponent };
if (false) {
    /** @type {?} */
    CmacsSliderStepComponent.prototype.nzLowerBound;
    /** @type {?} */
    CmacsSliderStepComponent.prototype.nzUpperBound;
    /** @type {?} */
    CmacsSliderStepComponent.prototype.nzMarksArray;
    /** @type {?} */
    CmacsSliderStepComponent.prototype.nzVertical;
    /** @type {?} */
    CmacsSliderStepComponent.prototype.nzIncluded;
    /** @type {?} */
    CmacsSliderStepComponent.prototype.steps;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2xpZGVyLXN0ZXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1zbGlkZXIvY21hY3Mtc2xpZGVyLXN0ZXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2SCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFJbEQ7SUFBQTtRQVNXLGlCQUFZLEdBQWtCLElBQUksQ0FBQztRQUNuQyxpQkFBWSxHQUFrQixJQUFJLENBQUM7UUFFbkIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixlQUFVLEdBQUcsS0FBSyxDQUFDO0lBOEM5QyxDQUFDOzs7OztJQTFDQyw4Q0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQjtRQUNELElBQUksT0FBTyxDQUFDLFlBQVksSUFBSSxPQUFPLENBQUMsWUFBWSxJQUFJLE9BQU8sQ0FBQyxZQUFZLEVBQUU7WUFDeEUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDMUI7SUFDSCxDQUFDOzs7Ozs7SUFFRCw0Q0FBUzs7Ozs7SUFBVCxVQUFVLE1BQWMsRUFBRSxJQUFtQjtRQUMzQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFTyw2Q0FBVTs7OztJQUFsQjs7WUFDUSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNO1FBRWxELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxJQUFJOztZQUM3QixJQUFBLGtCQUFLLEVBQUUsb0JBQU0sRUFBRSxvQkFBTTtZQUU3QixPQUFPO2dCQUNMLEtBQUssT0FBQTtnQkFDTCxNQUFNLFFBQUE7Z0JBQ04sTUFBTSxRQUFBO2dCQUNOLE1BQU0sRUFBRSxLQUFLO2dCQUNiLEtBQUs7b0JBQ0gsR0FBQyxNQUFNLElBQU0sTUFBTSxNQUFHO3VCQUN2QjthQUNGLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU8sb0RBQWlCOzs7O0lBQXpCO1FBQUEsaUJBVUM7UUFUQyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxJQUFJLEVBQUU7WUFDMUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQSxJQUFJOztvQkFDZixLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUs7O29CQUNsQixRQUFRLEdBQ1osQ0FBQyxDQUFDLEtBQUksQ0FBQyxVQUFVLElBQUksS0FBSyxLQUFLLEtBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ2pELENBQUMsS0FBSSxDQUFDLFVBQVUsSUFBSSxLQUFLLElBQUksbUJBQUEsS0FBSSxDQUFDLFlBQVksRUFBQyxJQUFJLEtBQUssSUFBSSxtQkFBQSxLQUFJLENBQUMsWUFBWSxFQUFDLENBQUM7Z0JBQ2pGLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOztnQkExREYsU0FBUyxTQUFDO29CQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsNk9BQWlEO2lCQUNsRDs7OytCQUVFLEtBQUs7K0JBQ0wsS0FBSzsrQkFDTCxLQUFLOzZCQUNMLEtBQUs7NkJBQ0wsS0FBSzs7SUFEbUI7UUFBZixZQUFZLEVBQUU7O2dFQUFvQjtJQUNuQjtRQUFmLFlBQVksRUFBRTs7Z0VBQW9CO0lBOEM5QywrQkFBQztDQUFBLEFBM0RELElBMkRDO1NBbkRZLHdCQUF3Qjs7O0lBQ25DLGdEQUE0Qzs7SUFDNUMsZ0RBQTRDOztJQUM1QyxnREFBc0M7O0lBQ3RDLDhDQUE0Qzs7SUFDNUMsOENBQTRDOztJQUU1Qyx5Q0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuaW1wb3J0IHsgRGlzcGxheWVkU3RlcCwgRXh0ZW5kZWRNYXJrIH0gZnJvbSAnLi9jbWFjcy1zbGlkZXItZGVmaW5pdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAnY21hY3Mtc2xpZGVyLXN0ZXAnLFxuICBleHBvcnRBczogJ2NtYWNzU2xpZGVyU3RlcCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mtc2xpZGVyLXN0ZXAuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIENtYWNzU2xpZGVyU3RlcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIG56TG93ZXJCb3VuZDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56VXBwZXJCb3VuZDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56TWFya3NBcnJheTogRXh0ZW5kZWRNYXJrW107XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelZlcnRpY2FsID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekluY2x1ZGVkID0gZmFsc2U7XG5cbiAgc3RlcHM6IERpc3BsYXllZFN0ZXBbXTtcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMubnpNYXJrc0FycmF5KSB7XG4gICAgICB0aGlzLmJ1aWxkU3RlcHMoKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMubnpNYXJrc0FycmF5IHx8IGNoYW5nZXMubnpMb3dlckJvdW5kIHx8IGNoYW5nZXMubnpVcHBlckJvdW5kKSB7XG4gICAgICB0aGlzLnRvZ2dsZVBvaW50QWN0aXZlKCk7XG4gICAgfVxuICB9XG5cbiAgdHJhY2tCeUlkKF9pbmRleDogbnVtYmVyLCBzdGVwOiBEaXNwbGF5ZWRTdGVwKTogbnVtYmVyIHtcbiAgICByZXR1cm4gc3RlcC52YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRTdGVwcygpOiB2b2lkIHtcbiAgICBjb25zdCBvcmllbnQgPSB0aGlzLm56VmVydGljYWwgPyAnYm90dG9tJyA6ICdsZWZ0JztcblxuICAgIHRoaXMuc3RlcHMgPSB0aGlzLm56TWFya3NBcnJheS5tYXAobWFyayA9PiB7XG4gICAgICBjb25zdCB7IHZhbHVlLCBvZmZzZXQsIGNvbmZpZyB9ID0gbWFyaztcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIG9mZnNldCxcbiAgICAgICAgY29uZmlnLFxuICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIFtvcmllbnRdOiBgJHtvZmZzZXR9JWBcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgdG9nZ2xlUG9pbnRBY3RpdmUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3RlcHMgJiYgdGhpcy5uekxvd2VyQm91bmQgIT09IG51bGwgJiYgdGhpcy5uelVwcGVyQm91bmQgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuc3RlcHMuZm9yRWFjaChzdGVwID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBzdGVwLnZhbHVlO1xuICAgICAgICBjb25zdCBpc0FjdGl2ZSA9XG4gICAgICAgICAgKCF0aGlzLm56SW5jbHVkZWQgJiYgdmFsdWUgPT09IHRoaXMubnpVcHBlckJvdW5kKSB8fFxuICAgICAgICAgICh0aGlzLm56SW5jbHVkZWQgJiYgdmFsdWUgPD0gdGhpcy5uelVwcGVyQm91bmQhICYmIHZhbHVlID49IHRoaXMubnpMb3dlckJvdW5kISk7XG4gICAgICAgIHN0ZXAuYWN0aXZlID0gaXNBY3RpdmU7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==