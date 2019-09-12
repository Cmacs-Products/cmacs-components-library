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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { InputBoolean } from 'ng-zorro-antd/core';
import { NzToolTipComponent } from 'ng-zorro-antd/tooltip';
import { CmacsSliderComponent } from './cmacs-slider.component';
var CmacsSliderHandleComponent = /** @class */ (function () {
    function CmacsSliderHandleComponent(sliderComponent, cdr) {
        var _this = this;
        this.sliderComponent = sliderComponent;
        this.cdr = cdr;
        this.nzTooltipVisible = 'default';
        this.nzActive = false;
        this.style = {};
        this.hovers_ = new Subscription();
        this.enterHandle = (/**
         * @return {?}
         */
        function () {
            if (!_this.sliderComponent.isDragging) {
                _this.toggleTooltip(true);
                _this.updateTooltipPosition();
                _this.cdr.detectChanges();
            }
        });
        this.leaveHandle = (/**
         * @return {?}
         */
        function () {
            if (!_this.sliderComponent.isDragging) {
                _this.toggleTooltip(false);
                _this.cdr.detectChanges();
            }
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsSliderHandleComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        var nzOffset = changes.nzOffset, nzValue = changes.nzValue, nzActive = changes.nzActive, nzTooltipVisible = changes.nzTooltipVisible;
        if (nzOffset) {
            this.updateStyle();
        }
        if (nzValue) {
            this.updateTooltipTitle();
            this.updateTooltipPosition();
        }
        if (nzActive) {
            if (nzActive.currentValue) {
                this.toggleTooltip(true);
            }
            else {
                this.toggleTooltip(false);
            }
        }
        if (nzTooltipVisible && nzTooltipVisible.currentValue === 'always') {
            Promise.resolve().then((/**
             * @return {?}
             */
            function () { return _this.toggleTooltip(true, true); }));
        }
    };
    /**
     * @return {?}
     */
    CmacsSliderHandleComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.hovers_.unsubscribe();
    };
    /**
     * @private
     * @param {?} show
     * @param {?=} force
     * @return {?}
     */
    CmacsSliderHandleComponent.prototype.toggleTooltip = /**
     * @private
     * @param {?} show
     * @param {?=} force
     * @return {?}
     */
    function (show, force) {
        if (force === void 0) { force = false; }
        if (!force && (this.nzTooltipVisible !== 'default' || !this.tooltip)) {
            return;
        }
        if (show) {
            this.tooltip.show();
        }
        else {
            this.tooltip.hide();
        }
    };
    /**
     * @private
     * @return {?}
     */
    CmacsSliderHandleComponent.prototype.updateTooltipTitle = /**
     * @private
     * @return {?}
     */
    function () {
        this.tooltipTitle = this.nzTipFormatter ? this.nzTipFormatter(this.nzValue) : "" + this.nzValue;
    };
    /**
     * @private
     * @return {?}
     */
    CmacsSliderHandleComponent.prototype.updateTooltipPosition = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.tooltip) {
            Promise.resolve().then((/**
             * @return {?}
             */
            function () { return _this.tooltip.updatePosition(); }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    CmacsSliderHandleComponent.prototype.updateStyle = /**
     * @private
     * @return {?}
     */
    function () {
        this.style[this.nzVertical ? 'bottom' : 'left'] = this.nzOffset + "%";
    };
    CmacsSliderHandleComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'cmacs-slider-handle',
                    exportAs: 'cmacsSliderHandle',
                    preserveWhitespaces: false,
                    template: "<nz-tooltip\n  *ngIf=\"nzTipFormatter !== null && nzTooltipVisible !== 'never'\"\n  [nzTitle]=\"tooltipTitle\"\n  [nzTrigger]=\"null\">\n  <div nz-tooltip class=\"ant-slider-handle\" [ngStyle]=\"style\"></div>\n</nz-tooltip>\n<div *ngIf=\"nzTipFormatter === null || nzTooltipVisible === 'never'\" class=\"ant-slider-handle\" [ngStyle]=\"style\"></div>\n",
                    host: {
                        '(mouseenter)': 'enterHandle()',
                        '(mouseleave)': 'leaveHandle()'
                    },
                    styles: [".ant-slider-handle{background-color:#2a7cff;border:none}.ant-slider-disabled .ant-slider-handle{background-color:#cfd3d9}"]
                }] }
    ];
    /** @nocollapse */
    CmacsSliderHandleComponent.ctorParameters = function () { return [
        { type: CmacsSliderComponent },
        { type: ChangeDetectorRef }
    ]; };
    CmacsSliderHandleComponent.propDecorators = {
        tooltip: [{ type: ViewChild, args: [NzToolTipComponent,] }],
        nzVertical: [{ type: Input }],
        nzOffset: [{ type: Input }],
        nzValue: [{ type: Input }],
        nzTooltipVisible: [{ type: Input }],
        nzTipFormatter: [{ type: Input }],
        nzActive: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsSliderHandleComponent.prototype, "nzActive", void 0);
    return CmacsSliderHandleComponent;
}());
export { CmacsSliderHandleComponent };
if (false) {
    /** @type {?} */
    CmacsSliderHandleComponent.prototype.tooltip;
    /** @type {?} */
    CmacsSliderHandleComponent.prototype.nzVertical;
    /** @type {?} */
    CmacsSliderHandleComponent.prototype.nzOffset;
    /** @type {?} */
    CmacsSliderHandleComponent.prototype.nzValue;
    /** @type {?} */
    CmacsSliderHandleComponent.prototype.nzTooltipVisible;
    /** @type {?} */
    CmacsSliderHandleComponent.prototype.nzTipFormatter;
    /** @type {?} */
    CmacsSliderHandleComponent.prototype.nzActive;
    /** @type {?} */
    CmacsSliderHandleComponent.prototype.tooltipTitle;
    /** @type {?} */
    CmacsSliderHandleComponent.prototype.style;
    /**
     * @type {?}
     * @private
     */
    CmacsSliderHandleComponent.prototype.hovers_;
    /** @type {?} */
    CmacsSliderHandleComponent.prototype.enterHandle;
    /** @type {?} */
    CmacsSliderHandleComponent.prototype.leaveHandle;
    /**
     * @type {?}
     * @private
     */
    CmacsSliderHandleComponent.prototype.sliderComponent;
    /**
     * @type {?}
     * @private
     */
    CmacsSliderHandleComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2xpZGVyLWhhbmRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXNsaWRlci9jbWFjcy1zbGlkZXItaGFuZGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsS0FBSyxFQUlMLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVwQyxPQUFPLEVBQUUsWUFBWSxFQUFvQixNQUFNLG9CQUFvQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRzNELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRWhFO0lBNEJFLG9DQUFvQixlQUFxQyxFQUFVLEdBQXNCO1FBQXpGLGlCQUE2RjtRQUF6RSxvQkFBZSxHQUFmLGVBQWUsQ0FBc0I7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQVRoRixxQkFBZ0IsR0FBc0IsU0FBUyxDQUFDO1FBRWhDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFHMUMsVUFBSyxHQUFxQixFQUFFLENBQUM7UUFFckIsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUE4QnJDLGdCQUFXOzs7UUFBRztZQUNaLElBQUksQ0FBQyxLQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRTtnQkFDcEMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekIsS0FBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7Z0JBQzdCLEtBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDMUI7UUFDSCxDQUFD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QzdCLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLDZXQUFtRDtvQkFFbkQsSUFBSSxFQUFFO3dCQUNKLGNBQWMsRUFBRSxlQUFlO3dCQUMvQixjQUFjLEVBQUUsZUFBZTtxQkFDaEM7O2lCQUNGOzs7O2dCQWRRLG9CQUFvQjtnQkFmM0IsaUJBQWlCOzs7MEJBK0JoQixTQUFTLFNBQUMsa0JBQWtCOzZCQUU1QixLQUFLOzJCQUNMLEtBQUs7MEJBQ0wsS0FBSzttQ0FDTCxLQUFLO2lDQUNMLEtBQUs7MkJBQ0wsS0FBSzs7SUFBbUI7UUFBZixZQUFZLEVBQUU7O2dFQUFrQjtJQTJFNUMsaUNBQUM7Q0FBQSxBQWhHRCxJQWdHQztTQW5GWSwwQkFBMEI7OztJQUNyQyw2Q0FBMkQ7O0lBRTNELGdEQUE0Qjs7SUFDNUIsOENBQTBCOztJQUMxQiw2Q0FBeUI7O0lBQ3pCLHNEQUF5RDs7SUFDekQsb0RBQW1EOztJQUNuRCw4Q0FBMEM7O0lBRTFDLGtEQUFxQjs7SUFDckIsMkNBQTZCOzs7OztJQUU3Qiw2Q0FBcUM7O0lBOEJyQyxpREFNRTs7SUFFRixpREFLRTs7Ozs7SUF6Q1UscURBQTZDOzs7OztJQUFFLHlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgTkdTdHlsZUludGVyZmFjZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQgeyBOelRvb2xUaXBDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL3Rvb2x0aXAnO1xuXG5pbXBvcnQgeyBTbGlkZXJTaG93VG9vbHRpcCB9IGZyb20gJy4vY21hY3Mtc2xpZGVyLWRlZmluaXRpb25zJztcbmltcG9ydCB7IENtYWNzU2xpZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jbWFjcy1zbGlkZXIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzZWxlY3RvcjogJ2NtYWNzLXNsaWRlci1oYW5kbGUnLFxuICBleHBvcnRBczogJ2NtYWNzU2xpZGVySGFuZGxlJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1zbGlkZXItaGFuZGxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3Mtc2xpZGVyLWhhbmRsZS5jb21wb25lbnQuY3NzJ10sXG4gIGhvc3Q6IHtcbiAgICAnKG1vdXNlZW50ZXIpJzogJ2VudGVySGFuZGxlKCknLFxuICAgICcobW91c2VsZWF2ZSknOiAnbGVhdmVIYW5kbGUoKSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBDbWFjc1NsaWRlckhhbmRsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQFZpZXdDaGlsZChOelRvb2xUaXBDb21wb25lbnQpIHRvb2x0aXA6IE56VG9vbFRpcENvbXBvbmVudDtcblxuICBASW5wdXQoKSBuelZlcnRpY2FsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56T2Zmc2V0OiBudW1iZXI7XG4gIEBJbnB1dCgpIG56VmFsdWU6IG51bWJlcjtcbiAgQElucHV0KCkgbnpUb29sdGlwVmlzaWJsZTogU2xpZGVyU2hvd1Rvb2x0aXAgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIG56VGlwRm9ybWF0dGVyOiAodmFsdWU6IG51bWJlcikgPT4gc3RyaW5nO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBY3RpdmUgPSBmYWxzZTtcblxuICB0b29sdGlwVGl0bGU6IHN0cmluZztcbiAgc3R5bGU6IE5HU3R5bGVJbnRlcmZhY2UgPSB7fTtcblxuICBwcml2YXRlIGhvdmVyc18gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzbGlkZXJDb21wb25lbnQ6IENtYWNzU2xpZGVyQ29tcG9uZW50LCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgbnpPZmZzZXQsIG56VmFsdWUsIG56QWN0aXZlLCBuelRvb2x0aXBWaXNpYmxlIH0gPSBjaGFuZ2VzO1xuXG4gICAgaWYgKG56T2Zmc2V0KSB7XG4gICAgICB0aGlzLnVwZGF0ZVN0eWxlKCk7XG4gICAgfVxuICAgIGlmIChuelZhbHVlKSB7XG4gICAgICB0aGlzLnVwZGF0ZVRvb2x0aXBUaXRsZSgpO1xuICAgICAgdGhpcy51cGRhdGVUb29sdGlwUG9zaXRpb24oKTtcbiAgICB9XG4gICAgaWYgKG56QWN0aXZlKSB7XG4gICAgICBpZiAobnpBY3RpdmUuY3VycmVudFZhbHVlKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlVG9vbHRpcCh0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudG9nZ2xlVG9vbHRpcChmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChuelRvb2x0aXBWaXNpYmxlICYmIG56VG9vbHRpcFZpc2libGUuY3VycmVudFZhbHVlID09PSAnYWx3YXlzJykge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLnRvZ2dsZVRvb2x0aXAodHJ1ZSwgdHJ1ZSkpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuaG92ZXJzXy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgZW50ZXJIYW5kbGUgPSAoKSA9PiB7XG4gICAgaWYgKCF0aGlzLnNsaWRlckNvbXBvbmVudC5pc0RyYWdnaW5nKSB7XG4gICAgICB0aGlzLnRvZ2dsZVRvb2x0aXAodHJ1ZSk7XG4gICAgICB0aGlzLnVwZGF0ZVRvb2x0aXBQb3NpdGlvbigpO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgfTtcblxuICBsZWF2ZUhhbmRsZSA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMuc2xpZGVyQ29tcG9uZW50LmlzRHJhZ2dpbmcpIHtcbiAgICAgIHRoaXMudG9nZ2xlVG9vbHRpcChmYWxzZSk7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICB9O1xuXG4gIHByaXZhdGUgdG9nZ2xlVG9vbHRpcChzaG93OiBib29sZWFuLCBmb3JjZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgaWYgKCFmb3JjZSAmJiAodGhpcy5uelRvb2x0aXBWaXNpYmxlICE9PSAnZGVmYXVsdCcgfHwgIXRoaXMudG9vbHRpcCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoc2hvdykge1xuICAgICAgdGhpcy50b29sdGlwLnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b29sdGlwLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVRvb2x0aXBUaXRsZSgpOiB2b2lkIHtcbiAgICB0aGlzLnRvb2x0aXBUaXRsZSA9IHRoaXMubnpUaXBGb3JtYXR0ZXIgPyB0aGlzLm56VGlwRm9ybWF0dGVyKHRoaXMubnpWYWx1ZSkgOiBgJHt0aGlzLm56VmFsdWV9YDtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlVG9vbHRpcFBvc2l0aW9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRvb2x0aXApIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy50b29sdGlwLnVwZGF0ZVBvc2l0aW9uKCkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlU3R5bGUoKTogdm9pZCB7XG4gICAgdGhpcy5zdHlsZVt0aGlzLm56VmVydGljYWwgPyAnYm90dG9tJyA6ICdsZWZ0J10gPSBgJHt0aGlzLm56T2Zmc2V0fSVgO1xuICB9XG59XG4iXX0=