/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
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
/** @type {?} */
export const KPI_PRIORITY_COLORS = {
    high: '#f6503c',
    medium: '#ffc634',
    low: '#00ce7d'
};
/**
 * @record
 */
export function KPI() { }
if (false) {
    /** @type {?} */
    KPI.prototype.count;
    /** @type {?} */
    KPI.prototype.description;
    /** @type {?|undefined} */
    KPI.prototype.priority;
}
export class CmacsKpiComponent {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.priority = false;
        this.type = 'line';
        this.width = 84;
        this.showTotalCount = false;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.canvasRef) {
            /** @type {?} */
            const canvas = (/** @type {?} */ (this.canvasRef.nativeElement));
            canvas.width = this.width;
            canvas.height = this.width;
            /** @type {?} */
            const ctx = canvas.getContext("2d");
            /** @type {?} */
            let start_angle = 0;
            /** @type {?} */
            let data = this.getColoredData();
            if (this.getTotalCount() > 0) {
                for (let categ of data) {
                    /** @type {?} */
                    let val = categ.count;
                    /** @type {?} */
                    let slice_angle = 2 * Math.PI * val / this.getTotalCount();
                    this.drawPieSlice(ctx, canvas.width / 2, canvas.height / 2, Math.min(canvas.width / 2, canvas.height / 2), start_angle, start_angle + slice_angle, categ.color);
                    start_angle += slice_angle;
                }
            }
            else {
                this.drawPieSlice(ctx, canvas.width / 2, canvas.height / 2, Math.min(canvas.width / 2, canvas.height / 2), start_angle, start_angle + 2 * Math.PI, '#dee0e5');
            }
            //drawing a white circle over the chart
            //to create the doughnut chart
            this.drawPieSlice(ctx, canvas.width / 2, canvas.height / 2, 0.8 * Math.min(canvas.width / 2, canvas.height / 2), 0, 2 * Math.PI, "#ffffff");
        }
    }
    /**
     * @return {?}
     */
    getColoredDataPriority() {
        /** @type {?} */
        let coloredData = [];
        this.data.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            coloredData.push({
                count: item.count,
                description: item.description,
                color: KPI_PRIORITY_COLORS[item.priority],
                opacity: 1
            });
        }));
        return coloredData;
    }
    /**
     * @param {?} ctx
     * @param {?} centerX
     * @param {?} centerY
     * @param {?} radius
     * @param {?} startAngle
     * @param {?} endAngle
     * @param {?} color
     * @return {?}
     */
    drawPieSlice(ctx, centerX, centerY, radius, startAngle, endAngle, color) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.closePath();
        ctx.fill();
    }
    /**
     * @param {?} ctx
     * @param {?} startX
     * @param {?} startY
     * @param {?} endX
     * @param {?} endY
     * @return {?}
     */
    drawLine(ctx, startX, startY, endX, endY) {
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
    }
    /**
     * @param {?} ctx
     * @param {?} centerX
     * @param {?} centerY
     * @param {?} radius
     * @param {?} startAngle
     * @param {?} endAngle
     * @return {?}
     */
    drawArc(ctx, centerX, centerY, radius, startAngle, endAngle) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.stroke();
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
     * @param {?} count
     * @return {?}
     */
    getWidth(count) {
        return count !== 0 ? Math.trunc(count * 100 / this.getTotalCount()) - 2 : 0;
    }
    /**
     * @return {?}
     */
    getColoredData() {
        if (!this.priority) {
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
        else {
            return this.getColoredDataPriority();
        }
    }
}
CmacsKpiComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmacs-kpi',
                exportAs: 'cmacsKpi',
                template: "<div class=\"cmacs-kpi-wrapper\" *ngIf=\"type === 'line'\">\r\n  <div class=\"cmacs-kpi-total-count\" *ngIf=\"showTotalCount\">{{getTotalCount()}}</div>\r\n  <div style=\"flex: 1 0 auto;\">\r\n    <div class=\"cmacs-kpi-title\">{{title}}</div>\r\n    <div\r\n      *ngFor=\"let kpi of getColoredData(); index as i\"\r\n      class=\"cmacs-kpi-line\"\r\n      [class.border-radius-left]=\"i === 0\"\r\n      [class.border-radius-right]=\"i === getColoredData().lenght - 1\"\r\n      [style.width.%]=\"getWidth(kpi.count)\"\r\n      [style.background-color]=\"kpi.color\"\r\n      [style.opacity]=\"sanitizeStyle(kpi.opacity)\"\r\n      >\r\n    </div>\r\n    <ng-container *ngTemplateOutlet=\"legend\"></ng-container>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"cmacs-kpi-doughnut-container\" *ngIf=\"type === 'doughnut'\">\r\n  <div class=\"cmacs-kpi-doughnut-title\">{{title}}</div>\r\n  <div class=\"cmacs-kpi-doughnut-wrapper\" [style.width.px]=\"width\">\r\n    <div class=\"cmacs-kpi-total-count-wrapper\">\r\n      <div class=\"cmacs-kpi-doughnut-total-count\">{{getTotalCount()}}</div>\r\n    </div>\r\n    <canvas #canvas></canvas>\r\n  </div>\r\n  <div class=\"cmacs-kpi-doughnut-legend-wrapper\">\r\n    <ng-container *ngTemplateOutlet=\"legend\"></ng-container>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #legend>\r\n  <div\r\n    class=\"cmacs-kpi-legend-wrapper\"\r\n    *ngFor=\"let kpi of getColoredData(); index as i\"\r\n  >\r\n    <div class=\"cmacs-kpi-divider\"\r\n         [style.background-color]=\"kpi.color\"\r\n         [style.opacity]=\"sanitizeStyle(kpi.opacity)\"\r\n    ></div>\r\n    <div class=\"cmacs-kpi-count\">{{kpi.count}}</div>\r\n    <div class=\"cmacs-kpi-description\">{{kpi.description}}</div>\r\n  </div>\r\n</ng-template>\r\n",
                styles: [".cmacs-kpi-line{height:6px;margin-right:4px;display:inline-block}.cmacs-kpi-total-count{margin-right:10px;margin-top:-2px;-webkit-box-flex:0;flex:0 0 auto;font-weight:600;color:#3b4043}.border-radius-left{border-radius:100px 0 0 100px}.border-radius-right{border-radius:0 100px 100px 0}.cmacs-kpi-divider{display:inline-block;width:3px;height:9px;border-radius:10px;margin-right:8px}.cmacs-kpi-count{display:inline-block;font-family:Roboto-Regular;font-size:12px;font-weight:600;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#3b4043;margin-right:4px;min-width:20px}.cmacs-kpi-description{display:inline-block;font-family:Roboto-Regular;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79}.cmacs-kpi-legend-wrapper{margin-bottom:11px}.cmacs-kpi-wrapper{display:-webkit-box;display:flex}.cmacs-kpi-title{font-family:Roboto-Regular;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.29;letter-spacing:normal;color:#656c79}.cmacs-kpi-doughnut-wrapper{position:absolute;margin-top:24px;margin-left:30px;float:left;display:inline-block}.cmacs-kpi-doughnut-total-count{position:relative;left:-50%;font-size:20px;font-weight:600;color:#3b4043}.cmacs-kpi-total-count-wrapper{top:calc(50% - 17px);left:50%;position:absolute}.cmacs-kpi-doughnut-legend-wrapper{float:right;display:inline-block;margin-top:24px}", `
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
    priority: [{ type: Input }],
    type: [{ type: Input }],
    width: [{ type: Input }],
    showTotalCount: [{ type: Input }],
    canvasRef: [{ type: ViewChild, args: ['canvas', { read: ElementRef },] }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsKpiComponent.prototype, "priority", void 0);
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
    CmacsKpiComponent.prototype.priority;
    /** @type {?} */
    CmacsKpiComponent.prototype.type;
    /** @type {?} */
    CmacsKpiComponent.prototype.width;
    /** @type {?} */
    CmacsKpiComponent.prototype.showTotalCount;
    /** @type {?} */
    CmacsKpiComponent.prototype.canvasRef;
    /**
     * @type {?}
     * @private
     */
    CmacsKpiComponent.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mta3BpLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mta3BpL2NtYWNzLWtwaS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sZUFBZSxDQUFDOztBQUUzQyxNQUFNLE9BQU8sVUFBVSxHQUFHO0lBQ3hCLFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0NBQ1Y7O0FBRUQsTUFBTSxPQUFPLG1CQUFtQixHQUFHO0lBQ2pDLElBQUksRUFBRSxTQUFTO0lBQ2YsTUFBTSxFQUFFLFNBQVM7SUFDakIsR0FBRyxFQUFFLFNBQVM7Q0FDZjs7OztBQUVELHlCQUlDOzs7SUFIQyxvQkFBYzs7SUFDZCwwQkFBb0I7O0lBQ3BCLHVCQUFxQzs7QUFnQnZDLE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFVNUIsWUFBb0IsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztRQU5sQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLFNBQUksR0FBd0IsTUFBTSxDQUFDO1FBQ25DLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDSCxtQkFBYyxHQUFHLEtBQUssQ0FBQztJQUdELENBQUM7Ozs7SUFFaEQsZUFBZTtRQUNiLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTs7a0JBQ1osTUFBTSxHQUFHLG1CQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFxQjtZQUNoRSxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDMUIsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDOztrQkFDckIsR0FBRyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDOztnQkFFL0IsV0FBVyxHQUFHLENBQUM7O2dCQUNmLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBRWhDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsRUFBRTtnQkFDNUIsS0FBSyxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUM7O3dCQUNqQixHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUs7O3dCQUNqQixXQUFXLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUU7b0JBRTFELElBQUksQ0FBQyxZQUFZLENBQ2YsR0FBRyxFQUNILE1BQU0sQ0FBQyxLQUFLLEdBQUMsQ0FBQyxFQUNkLE1BQU0sQ0FBQyxNQUFNLEdBQUMsQ0FBQyxFQUNmLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsRUFDekMsV0FBVyxFQUNYLFdBQVcsR0FBRyxXQUFXLEVBQ3pCLEtBQUssQ0FBQyxLQUFLLENBQ1osQ0FBQztvQkFFRixXQUFXLElBQUksV0FBVyxDQUFDO2lCQUM1QjthQUNGO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxZQUFZLENBQ2YsR0FBRyxFQUNILE1BQU0sQ0FBQyxLQUFLLEdBQUMsQ0FBQyxFQUNkLE1BQU0sQ0FBQyxNQUFNLEdBQUMsQ0FBQyxFQUNmLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsRUFDekMsV0FBVyxFQUNYLFdBQVcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFDekIsU0FBUyxDQUNWLENBQUM7YUFDSDtZQUdELHVDQUF1QztZQUN2Qyw4QkFBOEI7WUFDOUIsSUFBSSxDQUFDLFlBQVksQ0FDZixHQUFHLEVBQ0gsTUFBTSxDQUFDLEtBQUssR0FBQyxDQUFDLEVBQ2QsTUFBTSxDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQ2YsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsRUFDL0MsQ0FBQyxFQUNELENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUNYLFNBQVMsQ0FDVixDQUFDO1NBQ0g7SUFFSCxDQUFDOzs7O0lBRUQsc0JBQXNCOztZQUNoQixXQUFXLEdBQUcsRUFBRTtRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ3pCLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUNqQixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7Z0JBQzdCLEtBQUssRUFBRSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUN6QyxPQUFPLEVBQUUsQ0FBQzthQUNYLENBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQzs7Ozs7Ozs7Ozs7SUFFRCxZQUFZLENBQUMsR0FBUSxFQUFDLE9BQWUsRUFBRSxPQUFlLEVBQUUsTUFBYyxFQUFFLFVBQWtCLEVBQUUsUUFBZ0IsRUFBRSxLQUFVO1FBQ3RILEdBQUcsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNoQixHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQyxPQUFPLENBQUMsQ0FBQztRQUM1QixHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN4RCxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDaEIsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2IsQ0FBQzs7Ozs7Ozs7O0lBRUQsUUFBUSxDQUFDLEdBQVEsRUFBRSxNQUFjLEVBQUUsTUFBYyxFQUFFLElBQVksRUFBRSxJQUFZO1FBQzNFLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNoQixHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBQyxNQUFNLENBQUMsQ0FBQztRQUMxQixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDZixDQUFDOzs7Ozs7Ozs7O0lBRUQsT0FBTyxDQUFDLEdBQVEsRUFBRSxPQUFlLEVBQUUsT0FBZSxFQUFFLE1BQWMsRUFBRSxVQUFrQixFQUFFLFFBQWdCO1FBQ3RHLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNoQixHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN4RCxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDZixDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxLQUFhO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsYUFBYTs7WUFDUCxLQUFLLEdBQUcsQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTzs7OztRQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDekIsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQWE7UUFDcEIsT0FBTyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQzs7OztJQUVELGNBQWM7UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTs7Z0JBQ2QsV0FBVyxHQUFRLEVBQUU7O2tCQUNuQixTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU07O2dCQUNsRCxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU07WUFDL0MsSUFBSSxTQUFTLEdBQUcsQ0FBQyxFQUFFO2dCQUNqQixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDN0I7O2dCQUVHLFFBQVEsR0FBRyxJQUFJOztnQkFDZixPQUFPLEdBQUcsQ0FBQzs7Z0JBQ1gsVUFBVSxHQUFHLENBQUM7WUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPOzs7O1lBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDekIsSUFBSSxRQUFRLEtBQUssQ0FBQyxFQUFFO29CQUNsQixRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUNoQixVQUFVLElBQUksQ0FBQyxDQUFDO29CQUNoQixPQUFPLEdBQUcsQ0FBQyxDQUFDO2lCQUNiO2dCQUVELElBQUksVUFBVSxJQUFJLFVBQVUsQ0FBQyxNQUFNLEVBQUU7b0JBQ25DLFVBQVUsR0FBRyxDQUFDLENBQUM7aUJBQ2hCO2dCQUVELElBQUksT0FBTyxLQUFLLEdBQUcsRUFBRTtvQkFDbkIsT0FBTyxHQUFHLENBQUMsQ0FBQztpQkFDYjtnQkFFRCxXQUFXLENBQUMsSUFBSSxDQUFDO29CQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztvQkFDakIsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO29CQUM3QixLQUFLLEVBQUUsVUFBVSxDQUFDLFVBQVUsQ0FBQztvQkFDN0IsT0FBTyxFQUFFLE9BQU87aUJBQ2pCLENBQUMsQ0FBQztnQkFFSCxPQUFPLEdBQUcsT0FBTyxHQUFHLEdBQUcsQ0FBQztnQkFDeEIsUUFBUSxFQUFFLENBQUM7WUFDYixDQUFDLEVBQUMsQ0FBQztZQUVILE9BQU8sV0FBVyxDQUFDO1NBQ3BCO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQzs7O1lBN0tGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLGl2REFBeUM7dzdDQUd2Qzs7OztLQUlDO2FBRUo7Ozs7WUF0Q08sWUFBWTs7O21CQXlDakIsS0FBSztvQkFDTCxLQUFLO3VCQUNMLEtBQUs7bUJBQ0wsS0FBSztvQkFDTCxLQUFLOzZCQUNMLEtBQUs7d0JBQ0wsU0FBUyxTQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7O0FBSmhCO0lBQWYsWUFBWSxFQUFFOzttREFBa0I7QUFHakI7SUFBZixZQUFZLEVBQUU7O3lEQUF3Qjs7O0lBTGhELGlDQUFxQjs7SUFDckIsa0NBQXVCOztJQUN2QixxQ0FBMEM7O0lBQzFDLGlDQUE0Qzs7SUFDNUMsa0NBQTRCOztJQUM1QiwyQ0FBZ0Q7O0lBQ2hELHNDQUFpRTs7Ozs7SUFFckQsc0NBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgVmlld0NoaWxkLFxyXG4gIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtEb21TYW5pdGl6ZXJ9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XHJcbmltcG9ydCB7SW5wdXRCb29sZWFufSBmcm9tIFwibmctem9ycm8tYW50ZFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEtQSV9DT0xPUlMgPSBbXHJcbiAgJyMyYTdjZmYnLFxyXG4gICcjMDBjZGExJyxcclxuICAnI2ZmYTIzNCcsXHJcbiAgJyNhMTAwY2QnLFxyXG4gICcjY2MyMjI5JyxcclxuICAnIzAwOWZlMycsXHJcbiAgJyM2ODhjZGEnLFxyXG4gICcjYmVjNGNkJ1xyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IEtQSV9QUklPUklUWV9DT0xPUlMgPSB7XHJcbiAgaGlnaDogJyNmNjUwM2MnLFxyXG4gIG1lZGl1bTogJyNmZmM2MzQnLFxyXG4gIGxvdzogJyMwMGNlN2QnXHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEtQSSB7XHJcbiAgY291bnQ6IG51bWJlcjtcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIHByaW9yaXR5PzogJ2xvdycgfCAnaGlnaCcgfCAnbWVkaXVtJztcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1rcGknLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NLcGknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1rcGkuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWtwaS5jb21wb25lbnQuY3NzJ10sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIGNtYWNzLWtwaSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0twaUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBASW5wdXQoKSBkYXRhOiBLUElbXTtcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBwcmlvcml0eSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHR5cGU6ICdsaW5lJyB8ICdkb3VnaG51dCcgPSAnbGluZSc7XHJcbiAgQElucHV0KCkgd2lkdGg6IG51bWJlciA9IDg0O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93VG90YWxDb3VudCA9IGZhbHNlO1xyXG4gIEBWaWV3Q2hpbGQoJ2NhbnZhcycsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBjYW52YXNSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHsgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBpZiAodGhpcy5jYW52YXNSZWYpIHtcclxuICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5jYW52YXNSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgICAgY2FudmFzLndpZHRoID0gdGhpcy53aWR0aDtcclxuICAgICAgY2FudmFzLmhlaWdodCA9IHRoaXMud2lkdGg7XHJcbiAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG4gICAgICBsZXQgc3RhcnRfYW5nbGUgPSAwO1xyXG4gICAgICBsZXQgZGF0YSA9IHRoaXMuZ2V0Q29sb3JlZERhdGEoKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmdldFRvdGFsQ291bnQoKSA+IDApIHtcclxuICAgICAgICBmb3IgKGxldCBjYXRlZyBvZiBkYXRhKXtcclxuICAgICAgICAgIGxldCB2YWwgPSBjYXRlZy5jb3VudDtcclxuICAgICAgICAgIGxldCBzbGljZV9hbmdsZSA9IDIgKiBNYXRoLlBJICogdmFsIC8gdGhpcy5nZXRUb3RhbENvdW50KCk7XHJcblxyXG4gICAgICAgICAgdGhpcy5kcmF3UGllU2xpY2UoXHJcbiAgICAgICAgICAgIGN0eCxcclxuICAgICAgICAgICAgY2FudmFzLndpZHRoLzIsXHJcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQvMixcclxuICAgICAgICAgICAgTWF0aC5taW4oY2FudmFzLndpZHRoLzIsIGNhbnZhcy5oZWlnaHQvMiksXHJcbiAgICAgICAgICAgIHN0YXJ0X2FuZ2xlLFxyXG4gICAgICAgICAgICBzdGFydF9hbmdsZSArIHNsaWNlX2FuZ2xlLFxyXG4gICAgICAgICAgICBjYXRlZy5jb2xvclxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICBzdGFydF9hbmdsZSArPSBzbGljZV9hbmdsZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5kcmF3UGllU2xpY2UoXHJcbiAgICAgICAgICBjdHgsXHJcbiAgICAgICAgICBjYW52YXMud2lkdGgvMixcclxuICAgICAgICAgIGNhbnZhcy5oZWlnaHQvMixcclxuICAgICAgICAgIE1hdGgubWluKGNhbnZhcy53aWR0aC8yLCBjYW52YXMuaGVpZ2h0LzIpLFxyXG4gICAgICAgICAgc3RhcnRfYW5nbGUsXHJcbiAgICAgICAgICBzdGFydF9hbmdsZSArIDIgKiBNYXRoLlBJLFxyXG4gICAgICAgICAgJyNkZWUwZTUnXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIC8vZHJhd2luZyBhIHdoaXRlIGNpcmNsZSBvdmVyIHRoZSBjaGFydFxyXG4gICAgICAvL3RvIGNyZWF0ZSB0aGUgZG91Z2hudXQgY2hhcnRcclxuICAgICAgdGhpcy5kcmF3UGllU2xpY2UoXHJcbiAgICAgICAgY3R4LFxyXG4gICAgICAgIGNhbnZhcy53aWR0aC8yLFxyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQvMixcclxuICAgICAgICAwLjggKiBNYXRoLm1pbihjYW52YXMud2lkdGgvMiwgY2FudmFzLmhlaWdodC8yKSxcclxuICAgICAgICAwLFxyXG4gICAgICAgIDIgKiBNYXRoLlBJLFxyXG4gICAgICAgIFwiI2ZmZmZmZlwiXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0Q29sb3JlZERhdGFQcmlvcml0eSgpIHtcclxuICAgIGxldCBjb2xvcmVkRGF0YSA9IFtdO1xyXG4gICAgdGhpcy5kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgY29sb3JlZERhdGEucHVzaCh7XHJcbiAgICAgICAgY291bnQ6IGl0ZW0uY291bnQsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGl0ZW0uZGVzY3JpcHRpb24sXHJcbiAgICAgICAgY29sb3I6IEtQSV9QUklPUklUWV9DT0xPUlNbaXRlbS5wcmlvcml0eV0sXHJcbiAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGNvbG9yZWREYXRhO1xyXG4gIH1cclxuXHJcbiAgZHJhd1BpZVNsaWNlKGN0eDogYW55LGNlbnRlclg6IG51bWJlciwgY2VudGVyWTogbnVtYmVyLCByYWRpdXM6IG51bWJlciwgc3RhcnRBbmdsZTogbnVtYmVyLCBlbmRBbmdsZTogbnVtYmVyLCBjb2xvcjogYW55ICl7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHgubW92ZVRvKGNlbnRlclgsY2VudGVyWSk7XHJcbiAgICBjdHguYXJjKGNlbnRlclgsIGNlbnRlclksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUpO1xyXG4gICAgY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgY3R4LmZpbGwoKTtcclxuICB9XHJcblxyXG4gIGRyYXdMaW5lKGN0eDogYW55LCBzdGFydFg6IG51bWJlciwgc3RhcnRZOiBudW1iZXIsIGVuZFg6IG51bWJlciwgZW5kWTogbnVtYmVyKXtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5tb3ZlVG8oc3RhcnRYLHN0YXJ0WSk7XHJcbiAgICBjdHgubGluZVRvKGVuZFgsZW5kWSk7XHJcbiAgICBjdHguc3Ryb2tlKCk7XHJcbiAgfVxyXG5cclxuICBkcmF3QXJjKGN0eDogYW55LCBjZW50ZXJYOiBudW1iZXIsIGNlbnRlclk6IG51bWJlciwgcmFkaXVzOiBudW1iZXIsIHN0YXJ0QW5nbGU6IG51bWJlciwgZW5kQW5nbGU6IG51bWJlcil7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHguYXJjKGNlbnRlclgsIGNlbnRlclksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUpO1xyXG4gICAgY3R4LnN0cm9rZSgpO1xyXG4gIH1cclxuXHJcbiAgc2FuaXRpemVTdHlsZShzdHlsZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKHN0eWxlKTtcclxuICB9XHJcblxyXG4gIGdldFRvdGFsQ291bnQoKSB7XHJcbiAgICBsZXQgdG90YWwgPSAwO1xyXG4gICAgdGhpcy5kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgdG90YWwgKz0gaXRlbS5jb3VudDtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRvdGFsO1xyXG4gIH1cclxuXHJcbiAgZ2V0V2lkdGgoY291bnQ6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIGNvdW50ICE9PSAwID8gTWF0aC50cnVuYyhjb3VudCAqIDEwMCAvIHRoaXMuZ2V0VG90YWxDb3VudCgpKSAtIDIgOiAwO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29sb3JlZERhdGEoKSB7XHJcbiAgICBpZiAoIXRoaXMucHJpb3JpdHkpIHtcclxuICAgICAgbGV0IGNvbG9yZWREYXRhOiBhbnkgPSBbXTtcclxuICAgICAgY29uc3QgcmVtYWluaW5nID0gdGhpcy5kYXRhLmxlbmd0aCAlIEtQSV9DT0xPUlMubGVuZ3RoO1xyXG4gICAgICBsZXQgcmF0ZSA9IHRoaXMuZGF0YS5sZW5ndGggLyBLUElfQ09MT1JTLmxlbmd0aDtcclxuICAgICAgaWYgKHJlbWFpbmluZyA+IDApIHtcclxuICAgICAgICByYXRlID0gTWF0aC50cnVuYyhyYXRlKSArIDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCB0ZW1wUmF0ZSA9IHJhdGU7XHJcbiAgICAgIGxldCBvcGFjaXR5ID0gMTtcclxuICAgICAgbGV0IGNvbG9ySW5kZXggPSAwO1xyXG4gICAgICB0aGlzLmRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGlmICh0ZW1wUmF0ZSA9PT0gMCkge1xyXG4gICAgICAgICAgdGVtcFJhdGUgPSByYXRlO1xyXG4gICAgICAgICAgY29sb3JJbmRleCArPSAxO1xyXG4gICAgICAgICAgb3BhY2l0eSA9IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29sb3JJbmRleCA+PSBLUElfQ09MT1JTLmxlbmd0aCkge1xyXG4gICAgICAgICAgY29sb3JJbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAob3BhY2l0eSA9PT0gMC40KSB7XHJcbiAgICAgICAgICBvcGFjaXR5ID0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbG9yZWREYXRhLnB1c2goe1xyXG4gICAgICAgICAgY291bnQ6IGl0ZW0uY291bnQsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogaXRlbS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgIGNvbG9yOiBLUElfQ09MT1JTW2NvbG9ySW5kZXhdLFxyXG4gICAgICAgICAgb3BhY2l0eTogb3BhY2l0eVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBvcGFjaXR5ID0gb3BhY2l0eSAtIDAuMjtcclxuICAgICAgICB0ZW1wUmF0ZS0tO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiBjb2xvcmVkRGF0YTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldENvbG9yZWREYXRhUHJpb3JpdHkoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==