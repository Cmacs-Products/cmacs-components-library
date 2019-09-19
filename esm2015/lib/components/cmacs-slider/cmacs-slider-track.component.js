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
import { InputBoolean, InputNumber } from 'ng-zorro-antd/core';
/**
 * @record
 */
export function NzSliderTrackStyle() { }
if (false) {
    /** @type {?|undefined} */
    NzSliderTrackStyle.prototype.bottom;
    /** @type {?|undefined} */
    NzSliderTrackStyle.prototype.height;
    /** @type {?|undefined} */
    NzSliderTrackStyle.prototype.left;
    /** @type {?|undefined} */
    NzSliderTrackStyle.prototype.width;
    /** @type {?|undefined} */
    NzSliderTrackStyle.prototype.visibility;
}
export class CmacsSliderTrackComponent {
    constructor() {
        this.nzVertical = false;
        this.nzIncluded = false;
        this.style = {};
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzIncluded) {
            this.style.visibility = this.nzIncluded ? 'visible' : 'hidden';
        }
        if (changes.nzVertical || changes.nzOffset || changes.nzLength) {
            if (this.nzVertical) {
                this.style.bottom = `${this.nzOffset}%`;
                this.style.height = `${this.nzLength}%`;
                this.style.left = null;
                this.style.width = null;
            }
            else {
                this.style.left = `${this.nzOffset}%`;
                this.style.width = `${this.nzLength}%`;
                this.style.bottom = null;
                this.style.height = null;
            }
        }
    }
}
CmacsSliderTrackComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'cmacs-slider-track',
                exportAs: 'cmacsSliderTrack',
                preserveWhitespaces: false,
                template: "<div class=\"ant-slider-track\" [ngStyle]=\"style\"></div>",
                styles: [".ant-slider-track{height:3px;border-radius:100px;background-color:#cfd3d9!important}"]
            }] }
];
CmacsSliderTrackComponent.propDecorators = {
    nzOffset: [{ type: Input }],
    nzLength: [{ type: Input }],
    nzVertical: [{ type: Input }],
    nzIncluded: [{ type: Input }]
};
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Number)
], CmacsSliderTrackComponent.prototype, "nzOffset", void 0);
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Number)
], CmacsSliderTrackComponent.prototype, "nzLength", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsSliderTrackComponent.prototype, "nzVertical", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsSliderTrackComponent.prototype, "nzIncluded", void 0);
if (false) {
    /** @type {?} */
    CmacsSliderTrackComponent.prototype.nzOffset;
    /** @type {?} */
    CmacsSliderTrackComponent.prototype.nzLength;
    /** @type {?} */
    CmacsSliderTrackComponent.prototype.nzVertical;
    /** @type {?} */
    CmacsSliderTrackComponent.prototype.nzIncluded;
    /** @type {?} */
    CmacsSliderTrackComponent.prototype.style;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2xpZGVyLXRyYWNrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mtc2xpZGVyL2NtYWNzLXNsaWRlci10cmFjay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZILE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFFL0Qsd0NBTUM7OztJQUxDLG9DQUF1Qjs7SUFDdkIsb0NBQXVCOztJQUN2QixrQ0FBcUI7O0lBQ3JCLG1DQUFzQjs7SUFDdEIsd0NBQW9COztBQVl0QixNQUFNLE9BQU8seUJBQXlCO0lBVHRDO1FBWTJCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUU1QyxVQUFLLEdBQXVCLEVBQUUsQ0FBQztJQW9CakMsQ0FBQzs7Ozs7SUFsQkMsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtZQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztTQUNoRTtRQUNELElBQUksT0FBTyxDQUFDLFVBQVUsSUFBSSxPQUFPLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUU7WUFDOUQsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2FBQ3pCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQztnQkFDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7YUFDMUI7U0FDRjtJQUNILENBQUM7OztZQWxDRixTQUFTLFNBQUM7Z0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixzRUFBa0Q7O2FBRW5EOzs7dUJBRUUsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsS0FBSzs7QUFIa0I7SUFBZCxXQUFXLEVBQUU7OzJEQUFrQjtBQUNqQjtJQUFkLFdBQVcsRUFBRTs7MkRBQWtCO0FBQ2hCO0lBQWYsWUFBWSxFQUFFOzs2REFBb0I7QUFDbkI7SUFBZixZQUFZLEVBQUU7OzZEQUFvQjs7O0lBSDVDLDZDQUF5Qzs7SUFDekMsNkNBQXlDOztJQUN6QywrQ0FBNEM7O0lBQzVDLCtDQUE0Qzs7SUFFNUMsMENBQStCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE56U2xpZGVyVHJhY2tTdHlsZSB7XG4gIGJvdHRvbT86IHN0cmluZyB8IG51bGw7XG4gIGhlaWdodD86IHN0cmluZyB8IG51bGw7XG4gIGxlZnQ/OiBzdHJpbmcgfCBudWxsO1xuICB3aWR0aD86IHN0cmluZyB8IG51bGw7XG4gIHZpc2liaWxpdHk/OiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3I6ICdjbWFjcy1zbGlkZXItdHJhY2snLFxuICBleHBvcnRBczogJ2NtYWNzU2xpZGVyVHJhY2snLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXNsaWRlci10cmFjay5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXNsaWRlci10cmFjay5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ21hY3NTbGlkZXJUcmFja0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG56T2Zmc2V0OiBudW1iZXI7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG56TGVuZ3RoOiBudW1iZXI7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelZlcnRpY2FsID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekluY2x1ZGVkID0gZmFsc2U7XG5cbiAgc3R5bGU6IE56U2xpZGVyVHJhY2tTdHlsZSA9IHt9O1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5uekluY2x1ZGVkKSB7XG4gICAgICB0aGlzLnN0eWxlLnZpc2liaWxpdHkgPSB0aGlzLm56SW5jbHVkZWQgPyAndmlzaWJsZScgOiAnaGlkZGVuJztcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMubnpWZXJ0aWNhbCB8fCBjaGFuZ2VzLm56T2Zmc2V0IHx8IGNoYW5nZXMubnpMZW5ndGgpIHtcbiAgICAgIGlmICh0aGlzLm56VmVydGljYWwpIHtcbiAgICAgICAgdGhpcy5zdHlsZS5ib3R0b20gPSBgJHt0aGlzLm56T2Zmc2V0fSVgO1xuICAgICAgICB0aGlzLnN0eWxlLmhlaWdodCA9IGAke3RoaXMubnpMZW5ndGh9JWA7XG4gICAgICAgIHRoaXMuc3R5bGUubGVmdCA9IG51bGw7XG4gICAgICAgIHRoaXMuc3R5bGUud2lkdGggPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdHlsZS5sZWZ0ID0gYCR7dGhpcy5uek9mZnNldH0lYDtcbiAgICAgICAgdGhpcy5zdHlsZS53aWR0aCA9IGAke3RoaXMubnpMZW5ndGh9JWA7XG4gICAgICAgIHRoaXMuc3R5bGUuYm90dG9tID0gbnVsbDtcbiAgICAgICAgdGhpcy5zdHlsZS5oZWlnaHQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19