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
export class CmacsSliderHandleComponent {
    /**
     * @param {?} sliderComponent
     * @param {?} cdr
     */
    constructor(sliderComponent, cdr) {
        this.sliderComponent = sliderComponent;
        this.cdr = cdr;
        this.nzTooltipVisible = 'default';
        this.nzActive = false;
        this.style = {};
        this.hovers_ = new Subscription();
        this.enterHandle = (/**
         * @return {?}
         */
        () => {
            if (!this.sliderComponent.isDragging) {
                this.toggleTooltip(true);
                this.updateTooltipPosition();
                this.cdr.detectChanges();
            }
        });
        this.leaveHandle = (/**
         * @return {?}
         */
        () => {
            if (!this.sliderComponent.isDragging) {
                this.toggleTooltip(false);
                this.cdr.detectChanges();
            }
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzOffset, nzValue, nzActive, nzTooltipVisible } = changes;
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
            () => this.toggleTooltip(true, true)));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.hovers_.unsubscribe();
    }
    /**
     * @private
     * @param {?} show
     * @param {?=} force
     * @return {?}
     */
    toggleTooltip(show, force = false) {
        if (!force && (this.nzTooltipVisible !== 'default' || !this.tooltip)) {
            return;
        }
        if (show) {
            this.tooltip.show();
        }
        else {
            this.tooltip.hide();
        }
    }
    /**
     * @private
     * @return {?}
     */
    updateTooltipTitle() {
        this.tooltipTitle = this.nzTipFormatter ? this.nzTipFormatter(this.nzValue) : `${this.nzValue}`;
    }
    /**
     * @private
     * @return {?}
     */
    updateTooltipPosition() {
        if (this.tooltip) {
            Promise.resolve().then((/**
             * @return {?}
             */
            () => this.tooltip.updatePosition()));
        }
    }
    /**
     * @private
     * @return {?}
     */
    updateStyle() {
        this.style[this.nzVertical ? 'bottom' : 'left'] = `${this.nzOffset}%`;
    }
}
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
CmacsSliderHandleComponent.ctorParameters = () => [
    { type: CmacsSliderComponent },
    { type: ChangeDetectorRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2xpZGVyLWhhbmRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXNsaWRlci9jbWFjcy1zbGlkZXItaGFuZGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsS0FBSyxFQUlMLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVwQyxPQUFPLEVBQUUsWUFBWSxFQUFvQixNQUFNLG9CQUFvQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRzNELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBZWhFLE1BQU0sT0FBTywwQkFBMEI7Ozs7O0lBZXJDLFlBQW9CLGVBQXFDLEVBQVUsR0FBc0I7UUFBckUsb0JBQWUsR0FBZixlQUFlLENBQXNCO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFUaEYscUJBQWdCLEdBQXNCLFNBQVMsQ0FBQztRQUVoQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRzFDLFVBQUssR0FBcUIsRUFBRSxDQUFDO1FBRXJCLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBOEJyQyxnQkFBVzs7O1FBQUcsR0FBRyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRTtnQkFDcEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENB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QWMsRUFBRSxlQUFlO29CQUMvQixjQUFjLEVBQUUsZUFBZTtpQkFDaEM7O2FBQ0Y7Ozs7WUFkUSxvQkFBb0I7WUFmM0IsaUJBQWlCOzs7c0JBK0JoQixTQUFTLFNBQUMsa0JBQWtCO3lCQUU1QixLQUFLO3VCQUNMLEtBQUs7c0JBQ0wsS0FBSzsrQkFDTCxLQUFLOzZCQUNMLEtBQUs7dUJBQ0wsS0FBSzs7QUFBbUI7SUFBZixZQUFZLEVBQUU7OzREQUFrQjs7O0lBUDFDLDZDQUEyRDs7SUFFM0QsZ0RBQTRCOztJQUM1Qiw4Q0FBMEI7O0lBQzFCLDZDQUF5Qjs7SUFDekIsc0RBQXlEOztJQUN6RCxvREFBbUQ7O0lBQ25ELDhDQUEwQzs7SUFFMUMsa0RBQXFCOztJQUNyQiwyQ0FBNkI7Ozs7O0lBRTdCLDZDQUFxQzs7SUE4QnJDLGlEQU1FOztJQUVGLGlEQUtFOzs7OztJQXpDVSxxREFBNkM7Ozs7O0lBQUUseUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBOR1N0eWxlSW50ZXJmYWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcbmltcG9ydCB7IE56VG9vbFRpcENvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvdG9vbHRpcCc7XG5cbmltcG9ydCB7IFNsaWRlclNob3dUb29sdGlwIH0gZnJvbSAnLi9jbWFjcy1zbGlkZXItZGVmaW5pdGlvbnMnO1xuaW1wb3J0IHsgQ21hY3NTbGlkZXJDb21wb25lbnQgfSBmcm9tICcuL2NtYWNzLXNsaWRlci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAnY21hY3Mtc2xpZGVyLWhhbmRsZScsXG4gIGV4cG9ydEFzOiAnY21hY3NTbGlkZXJIYW5kbGUnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXNsaWRlci1oYW5kbGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1zbGlkZXItaGFuZGxlLmNvbXBvbmVudC5jc3MnXSxcbiAgaG9zdDoge1xuICAgICcobW91c2VlbnRlciknOiAnZW50ZXJIYW5kbGUoKScsXG4gICAgJyhtb3VzZWxlYXZlKSc6ICdsZWF2ZUhhbmRsZSgpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIENtYWNzU2xpZGVySGFuZGxlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBAVmlld0NoaWxkKE56VG9vbFRpcENvbXBvbmVudCkgdG9vbHRpcDogTnpUb29sVGlwQ29tcG9uZW50O1xuXG4gIEBJbnB1dCgpIG56VmVydGljYWw6IHN0cmluZztcbiAgQElucHV0KCkgbnpPZmZzZXQ6IG51bWJlcjtcbiAgQElucHV0KCkgbnpWYWx1ZTogbnVtYmVyO1xuICBASW5wdXQoKSBuelRvb2x0aXBWaXNpYmxlOiBTbGlkZXJTaG93VG9vbHRpcCA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgbnpUaXBGb3JtYXR0ZXI6ICh2YWx1ZTogbnVtYmVyKSA9PiBzdHJpbmc7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekFjdGl2ZSA9IGZhbHNlO1xuXG4gIHRvb2x0aXBUaXRsZTogc3RyaW5nO1xuICBzdHlsZTogTkdTdHlsZUludGVyZmFjZSA9IHt9O1xuXG4gIHByaXZhdGUgaG92ZXJzXyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNsaWRlckNvbXBvbmVudDogQ21hY3NTbGlkZXJDb21wb25lbnQsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBuek9mZnNldCwgbnpWYWx1ZSwgbnpBY3RpdmUsIG56VG9vbHRpcFZpc2libGUgfSA9IGNoYW5nZXM7XG5cbiAgICBpZiAobnpPZmZzZXQpIHtcbiAgICAgIHRoaXMudXBkYXRlU3R5bGUoKTtcbiAgICB9XG4gICAgaWYgKG56VmFsdWUpIHtcbiAgICAgIHRoaXMudXBkYXRlVG9vbHRpcFRpdGxlKCk7XG4gICAgICB0aGlzLnVwZGF0ZVRvb2x0aXBQb3NpdGlvbigpO1xuICAgIH1cbiAgICBpZiAobnpBY3RpdmUpIHtcbiAgICAgIGlmIChuekFjdGl2ZS5jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgdGhpcy50b2dnbGVUb29sdGlwKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50b2dnbGVUb29sdGlwKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG56VG9vbHRpcFZpc2libGUgJiYgbnpUb29sdGlwVmlzaWJsZS5jdXJyZW50VmFsdWUgPT09ICdhbHdheXMnKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMudG9nZ2xlVG9vbHRpcCh0cnVlLCB0cnVlKSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5ob3ZlcnNfLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBlbnRlckhhbmRsZSA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMuc2xpZGVyQ29tcG9uZW50LmlzRHJhZ2dpbmcpIHtcbiAgICAgIHRoaXMudG9nZ2xlVG9vbHRpcCh0cnVlKTtcbiAgICAgIHRoaXMudXBkYXRlVG9vbHRpcFBvc2l0aW9uKCk7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICB9O1xuXG4gIGxlYXZlSGFuZGxlID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy5zbGlkZXJDb21wb25lbnQuaXNEcmFnZ2luZykge1xuICAgICAgdGhpcy50b2dnbGVUb29sdGlwKGZhbHNlKTtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSB0b2dnbGVUb29sdGlwKHNob3c6IGJvb2xlYW4sIGZvcmNlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICBpZiAoIWZvcmNlICYmICh0aGlzLm56VG9vbHRpcFZpc2libGUgIT09ICdkZWZhdWx0JyB8fCAhdGhpcy50b29sdGlwKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChzaG93KSB7XG4gICAgICB0aGlzLnRvb2x0aXAuc2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvb2x0aXAuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlVG9vbHRpcFRpdGxlKCk6IHZvaWQge1xuICAgIHRoaXMudG9vbHRpcFRpdGxlID0gdGhpcy5uelRpcEZvcm1hdHRlciA/IHRoaXMubnpUaXBGb3JtYXR0ZXIodGhpcy5uelZhbHVlKSA6IGAke3RoaXMubnpWYWx1ZX1gO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVUb29sdGlwUG9zaXRpb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudG9vbHRpcCkge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLnRvb2x0aXAudXBkYXRlUG9zaXRpb24oKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVTdHlsZSgpOiB2b2lkIHtcbiAgICB0aGlzLnN0eWxlW3RoaXMubnpWZXJ0aWNhbCA/ICdib3R0b20nIDogJ2xlZnQnXSA9IGAke3RoaXMubnpPZmZzZXR9JWA7XG4gIH1cbn1cbiJdfQ==