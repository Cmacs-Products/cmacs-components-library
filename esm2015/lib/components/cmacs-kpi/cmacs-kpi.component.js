/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { InputBoolean } from "ng-zorro-antd";
/** @type {?} */
export const KPI_COLORS = [
    '#2a7cff',
    '#00cda1',
    '#ffa234',
    '#a100cd',
    '#cc2229',
    '#009fe3',
    '#688cda',
    '#bec4cd'
];
/**
 * @record
 */
export function KPI() { }
if (false) {
    /** @type {?} */
    KPI.prototype.count;
    /** @type {?} */
    KPI.prototype.description;
}
export class CmacsKpiComponent {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.showTotalCount = false;
    }
    /**
     * @param {?} style
     * @return {?}
     */
    sanitizeStyle(style) {
        return this.sanitizer.bypassSecurityTrustStyle(style);
    }
    /**
     * @return {?}
     */
    getTotalCount() {
        /** @type {?} */
        let total = 0;
        this.data.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            total += item.count;
        }));
        return total;
    }
    /**
     * @return {?}
     */
    getColoredData() {
        /** @type {?} */
        let coloredData = [];
        /** @type {?} */
        const remaining = this.data.length % KPI_COLORS.length;
        /** @type {?} */
        let rate = this.data.length / KPI_COLORS.length;
        if (remaining > 0) {
            rate = Math.trunc(rate) + 1;
        }
        /** @type {?} */
        let tempRate = rate;
        /** @type {?} */
        let opacity = 1;
        /** @type {?} */
        let colorIndex = 0;
        this.data.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            if (tempRate === 0) {
                tempRate = rate;
                colorIndex += 1;
                opacity = 1;
            }
            if (colorIndex >= KPI_COLORS.length) {
                colorIndex = 0;
            }
            if (opacity === 0.4) {
                opacity = 1;
            }
            coloredData.push({
                count: item.count,
                description: item.description,
                color: KPI_COLORS[colorIndex],
                opacity: opacity
            });
            opacity = opacity - 0.2;
            tempRate--;
        }));
        return coloredData;
    }
}
CmacsKpiComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmacs-kpi',
                exportAs: 'cmacsKpi',
                template: "<div class=\"cmacs-kpi-wrapper\">\r\n  <div class=\"cmacs-kpi-total-count\" *ngIf=\"showTotalCount\">{{getTotalCount()}}</div>\r\n  <div style=\"display: inline-block\">\r\n    <div class=\"cmacs-kpi-title\">{{title}}</div>\r\n    <div\r\n      *ngFor=\"let kpi of getColoredData(); index as i\"\r\n      class=\"cmacs-kpi-line\"\r\n      [class.border-radius-left]=\"i === 0\"\r\n      [class.border-radius-right]=\"i === getColoredData().lenght - 1\"\r\n      [style.width.%]=\"kpi.count\"\r\n      [style.background-color]=\"kpi.color\"\r\n      [style.opacity]=\"sanitizeStyle(kpi.opacity)\"\r\n      >\r\n    </div>\r\n    <div\r\n      class=\"cmacs-kpi-legend-wrapper\"\r\n      *ngFor=\"let kpi of getColoredData(); index as i\"\r\n    >\r\n      <div class=\"cmacs-kpi-divider\"\r\n           [style.background-color]=\"kpi.color\"\r\n           [style.opacity]=\"sanitizeStyle(kpi.opacity)\"\r\n      ></div>\r\n      <div class=\"cmacs-kpi-count\">{{kpi.count}}</div>\r\n      <div class=\"cmacs-kpi-description\">{{kpi.description}}</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                styles: [".cmacs-kpi-line{height:4px;margin-right:2px;display:inline-block}.cmacs-kpi-total-count{margin-right:10px;float:left;margin-top:-2px;display:inline-block}.border-radius-left{border-radius:100px 0 0 100px}.border-radius-right{border-radius:0 100px 100px 0}.cmacs-kpi-divider{display:inline-block;width:2px;height:9px;border-radius:100px;margin-right:8px}.cmacs-kpi-count{display:inline-block;font-family:Roboto-Regular;font-size:12px;font-weight:700;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#3b4043;margin-right:4px}.cmacs-kpi-description{display:inline-block;font-family:Roboto-Regular;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79}.cmacs-kpi-legend-wrapper{margin-bottom:11px}.cmacs-kpi-title{font-family:Roboto-Regular;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.29;letter-spacing:normal;color:#656c79}", `
      cmacs-kpi {
        display: block;
      }
    `]
            }] }
];
/** @nocollapse */
CmacsKpiComponent.ctorParameters = () => [
    { type: DomSanitizer }
];
CmacsKpiComponent.propDecorators = {
    data: [{ type: Input }],
    title: [{ type: Input }],
    showTotalCount: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsKpiComponent.prototype, "showTotalCount", void 0);
if (false) {
    /** @type {?} */
    CmacsKpiComponent.prototype.data;
    /** @type {?} */
    CmacsKpiComponent.prototype.title;
    /** @type {?} */
    CmacsKpiComponent.prototype.showTotalCount;
    /**
     * @type {?}
     * @private
     */
    CmacsKpiComponent.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mta3BpLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mta3BpL2NtYWNzLWtwaS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDdkQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFFM0MsTUFBTSxPQUFPLFVBQVUsR0FBRztJQUN4QixTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztDQUNWOzs7O0FBRUQseUJBR0M7OztJQUZDLG9CQUFjOztJQUNkLDBCQUFvQjs7QUFnQnRCLE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFNNUIsWUFBb0IsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUZsQixtQkFBYyxHQUFHLEtBQUssQ0FBQztJQUVELENBQUM7Ozs7O0lBRWhELGFBQWEsQ0FBQyxLQUFhO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsYUFBYTs7WUFDUCxLQUFLLEdBQUcsQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTzs7OztRQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDekIsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7SUFFRCxjQUFjOztZQUNSLFdBQVcsR0FBUSxFQUFFOztjQUNuQixTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU07O1lBQ2xELElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTTtRQUMvQyxJQUFJLFNBQVMsR0FBRyxDQUFDLEVBQUU7WUFDakIsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzdCOztZQUVHLFFBQVEsR0FBRyxJQUFJOztZQUNmLE9BQU8sR0FBRyxDQUFDOztZQUNYLFVBQVUsR0FBRyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTzs7OztRQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDekIsSUFBSSxRQUFRLEtBQUssQ0FBQyxFQUFFO2dCQUNsQixRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNoQixVQUFVLElBQUksQ0FBQyxDQUFDO2dCQUNoQixPQUFPLEdBQUcsQ0FBQyxDQUFDO2FBQ2I7WUFFRCxJQUFJLFVBQVUsSUFBSSxVQUFVLENBQUMsTUFBTSxFQUFFO2dCQUNuQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO2FBQ2hCO1lBRUQsSUFBSSxPQUFPLEtBQUssR0FBRyxFQUFFO2dCQUNuQixPQUFPLEdBQUcsQ0FBQyxDQUFDO2FBQ2I7WUFFRCxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDakIsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO2dCQUM3QixLQUFLLEVBQUUsVUFBVSxDQUFDLFVBQVUsQ0FBQztnQkFDN0IsT0FBTyxFQUFFLE9BQU87YUFDakIsQ0FBQyxDQUFDO1lBRUgsT0FBTyxHQUFHLE9BQU8sR0FBRyxHQUFHLENBQUM7WUFDeEIsUUFBUSxFQUFFLENBQUM7UUFDYixDQUFDLEVBQUMsQ0FBQztRQUVILE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7OztZQXZFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRSxVQUFVO2dCQUNwQiw4a0NBQXlDOzQ5QkFHdkM7Ozs7S0FJQzthQUVKOzs7O1lBL0JPLFlBQVk7OzttQkFrQ2pCLEtBQUs7b0JBQ0wsS0FBSzs2QkFDTCxLQUFLOztBQUFtQjtJQUFmLFlBQVksRUFBRTs7eURBQXdCOzs7SUFGaEQsaUNBQXFCOztJQUNyQixrQ0FBdUI7O0lBQ3ZCLDJDQUFnRDs7Ozs7SUFFcEMsc0NBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtEb21TYW5pdGl6ZXJ9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XHJcbmltcG9ydCB7SW5wdXRCb29sZWFufSBmcm9tIFwibmctem9ycm8tYW50ZFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEtQSV9DT0xPUlMgPSBbXHJcbiAgJyMyYTdjZmYnLFxyXG4gICcjMDBjZGExJyxcclxuICAnI2ZmYTIzNCcsXHJcbiAgJyNhMTAwY2QnLFxyXG4gICcjY2MyMjI5JyxcclxuICAnIzAwOWZlMycsXHJcbiAgJyM2ODhjZGEnLFxyXG4gICcjYmVjNGNkJ1xyXG5dO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBLUEkge1xyXG4gIGNvdW50OiBudW1iZXI7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1rcGknLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NLcGknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1rcGkuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWtwaS5jb21wb25lbnQuY3NzJ10sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIGNtYWNzLWtwaSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0twaUNvbXBvbmVudCB7XHJcblxyXG4gIEBJbnB1dCgpIGRhdGE6IEtQSVtdO1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dUb3RhbENvdW50ID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHsgfVxyXG5cclxuICBzYW5pdGl6ZVN0eWxlKHN0eWxlOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoc3R5bGUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VG90YWxDb3VudCgpIHtcclxuICAgIGxldCB0b3RhbCA9IDA7XHJcbiAgICB0aGlzLmRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICB0b3RhbCArPSBpdGVtLmNvdW50O1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdG90YWw7XHJcbiAgfVxyXG5cclxuICBnZXRDb2xvcmVkRGF0YSgpIHtcclxuICAgIGxldCBjb2xvcmVkRGF0YTogYW55ID0gW107XHJcbiAgICBjb25zdCByZW1haW5pbmcgPSB0aGlzLmRhdGEubGVuZ3RoICUgS1BJX0NPTE9SUy5sZW5ndGg7XHJcbiAgICBsZXQgcmF0ZSA9IHRoaXMuZGF0YS5sZW5ndGggLyBLUElfQ09MT1JTLmxlbmd0aDtcclxuICAgIGlmIChyZW1haW5pbmcgPiAwKSB7XHJcbiAgICAgIHJhdGUgPSBNYXRoLnRydW5jKHJhdGUpICsgMTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgdGVtcFJhdGUgPSByYXRlO1xyXG4gICAgbGV0IG9wYWNpdHkgPSAxO1xyXG4gICAgbGV0IGNvbG9ySW5kZXggPSAwO1xyXG4gICAgdGhpcy5kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgaWYgKHRlbXBSYXRlID09PSAwKSB7XHJcbiAgICAgICAgdGVtcFJhdGUgPSByYXRlO1xyXG4gICAgICAgIGNvbG9ySW5kZXggKz0gMTtcclxuICAgICAgICBvcGFjaXR5ID0gMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNvbG9ySW5kZXggPj0gS1BJX0NPTE9SUy5sZW5ndGgpIHtcclxuICAgICAgICBjb2xvckluZGV4ID0gMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG9wYWNpdHkgPT09IDAuNCkge1xyXG4gICAgICAgIG9wYWNpdHkgPSAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb2xvcmVkRGF0YS5wdXNoKHtcclxuICAgICAgICBjb3VudDogaXRlbS5jb3VudCxcclxuICAgICAgICBkZXNjcmlwdGlvbjogaXRlbS5kZXNjcmlwdGlvbixcclxuICAgICAgICBjb2xvcjogS1BJX0NPTE9SU1tjb2xvckluZGV4XSxcclxuICAgICAgICBvcGFjaXR5OiBvcGFjaXR5XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgb3BhY2l0eSA9IG9wYWNpdHkgLSAwLjI7XHJcbiAgICAgIHRlbXBSYXRlLS07XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gY29sb3JlZERhdGE7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=