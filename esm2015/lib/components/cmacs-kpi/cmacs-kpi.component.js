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
        this.fixed = 0;
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
                    let slice_angle = 2 * Math.PI * (val / this.getTotalCount());
                    if (slice_angle > 0) {
                        this.drawPieSlice(ctx, canvas.width / 2, canvas.height / 2, Math.min(canvas.width / 2, canvas.height / 2), start_angle, start_angle + slice_angle - 0.05, categ.color);
                        start_angle += slice_angle;
                    }
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
        ctx.arc(centerX, centerY, radius, startAngle - Math.PI / 2, endAngle - Math.PI / 2, false);
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
                template: "<div class=\"cmacs-kpi-wrapper\" *ngIf=\"type === 'line'\">\r\n  <div class=\"cmacs-kpi-total-count\" *ngIf=\"showTotalCount\">{{getTotalCount().toFixed(fixed)}}</div>\r\n  <div style=\"flex: 1 0 auto;\">\r\n    <div class=\"cmacs-kpi-title\">{{title}}</div>\r\n    <div\r\n      *ngFor=\"let kpi of getColoredData(); index as i\"\r\n      class=\"cmacs-kpi-line\"\r\n      [class.border-radius-left]=\"i === 0\"\r\n      [class.border-radius-right]=\"i === getColoredData().lenght - 1\"\r\n      [style.width.%]=\"getWidth(kpi.count)\"\r\n      [style.background-color]=\"kpi.color\"\r\n      [style.opacity]=\"sanitizeStyle(kpi.opacity)\"\r\n      >\r\n    </div>\r\n    <ng-container *ngTemplateOutlet=\"legend\"></ng-container>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"cmacs-kpi-doughnut-container\" *ngIf=\"type === 'doughnut'\">\r\n  <div class=\"cmacs-kpi-doughnut-title\">{{title}}</div>\r\n  <div class=\"cmacs-kpi-doughnut-wrapper\" [style.width.px]=\"width\">\r\n    <div class=\"cmacs-kpi-total-count-wrapper\">\r\n      <div class=\"cmacs-kpi-doughnut-total-count\">{{getTotalCount().toFixed(fixed)}}</div>\r\n    </div>\r\n    <canvas #canvas></canvas>\r\n  </div>\r\n  <div class=\"cmacs-kpi-doughnut-legend-wrapper\">\r\n    <ng-container *ngTemplateOutlet=\"legend\"></ng-container>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #legend>\r\n  <div\r\n    class=\"cmacs-kpi-legend-wrapper\"\r\n    *ngFor=\"let kpi of getColoredData(); index as i\"\r\n  >\r\n    <div class=\"cmacs-kpi-divider\"\r\n         [style.background-color]=\"kpi.color\"\r\n         [style.opacity]=\"sanitizeStyle(kpi.opacity)\"\r\n    ></div>\r\n    <div class=\"cmacs-kpi-count\">{{kpi.count.toFixed(fixed)}}</div>\r\n    <div class=\"cmacs-kpi-description\">{{kpi.description}}</div>\r\n  </div>\r\n</ng-template>\r\n",
                styles: [".cmacs-kpi-line{height:6px;margin-right:4px;display:inline-block}.cmacs-kpi-total-count{margin-right:10px;margin-top:-2px;-webkit-box-flex:0;flex:0 0 auto;font-weight:600;color:#3b4043}.border-radius-left{border-radius:100px 0 0 100px}.border-radius-right{border-radius:0 100px 100px 0}.cmacs-kpi-divider{display:inline-block;margin-top:4px;width:3px;height:10px;border-radius:10px;margin-right:8px}.cmacs-kpi-count{display:inline-block;font-family:Roboto-Regular;font-size:12px;font-weight:600;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#3b4043;margin-right:4px;min-width:20px}.cmacs-kpi-description{display:inline-block;font-family:Roboto-Regular;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79}.cmacs-kpi-legend-wrapper{margin-bottom:11px;display:-webkit-box;display:flex}.cmacs-kpi-wrapper{display:-webkit-box;display:flex}.cmacs-kpi-title{font-family:Roboto-Regular;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.29;letter-spacing:normal;color:#656c79}.cmacs-kpi-doughnut-wrapper{position:absolute;margin-top:24px;margin-left:30px;float:left;display:inline-block}.cmacs-kpi-doughnut-total-count{position:relative;left:-50%;font-size:20px;font-weight:600;color:#3b4043}.cmacs-kpi-total-count-wrapper{top:calc(50% - 17px);left:50%;position:absolute}.cmacs-kpi-doughnut-legend-wrapper{float:right;display:inline-block;margin-top:24px}", `
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
    fixed: [{ type: Input }],
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
    CmacsKpiComponent.prototype.fixed;
    /** @type {?} */
    CmacsKpiComponent.prototype.canvasRef;
    /**
     * @type {?}
     * @private
     */
    CmacsKpiComponent.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mta3BpLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mta3BpL2NtYWNzLWtwaS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sZUFBZSxDQUFDOztBQUUzQyxNQUFNLE9BQU8sVUFBVSxHQUFHO0lBQ3hCLFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0NBQ1Y7O0FBRUQsTUFBTSxPQUFPLG1CQUFtQixHQUFHO0lBQ2pDLElBQUksRUFBRSxTQUFTO0lBQ2YsTUFBTSxFQUFFLFNBQVM7SUFDakIsR0FBRyxFQUFFLFNBQVM7Q0FDZjs7OztBQUVELHlCQUlDOzs7SUFIQyxvQkFBYzs7SUFDZCwwQkFBb0I7O0lBQ3BCLHVCQUFxQzs7QUFnQnZDLE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFXNUIsWUFBb0IsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztRQVBsQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLFNBQUksR0FBd0IsTUFBTSxDQUFDO1FBQ25DLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDSCxtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QyxVQUFLLEdBQUcsQ0FBQyxDQUFDO0lBRzRCLENBQUM7Ozs7SUFFaEQsZUFBZTtRQUNiLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTs7a0JBQ1osTUFBTSxHQUFHLG1CQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxF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LEVBQUU7b0JBQ25CLE9BQU8sR0FBRyxDQUFDLENBQUM7aUJBQ2I7Z0JBRUQsV0FBVyxDQUFDLElBQUksQ0FBQztvQkFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7b0JBQ2pCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztvQkFDN0IsS0FBSyxFQUFFLFVBQVUsQ0FBQyxVQUFVLENBQUM7b0JBQzdCLE9BQU8sRUFBRSxPQUFPO2lCQUNqQixDQUFDLENBQUM7Z0JBRUgsT0FBTyxHQUFHLE9BQU8sR0FBRyxHQUFHLENBQUM7Z0JBQ3hCLFFBQVEsRUFBRSxDQUFDO1lBQ2IsQ0FBQyxFQUFDLENBQUM7WUFFSCxPQUFPLFdBQVcsQ0FBQztTQUNwQjthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztTQUN0QztJQUNILENBQUM7OztZQTlLRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRSxVQUFVO2dCQUNwQiw4eERBQXlDO3krQ0FHdkM7Ozs7S0FJQzthQUVKOzs7O1lBdENPLFlBQVk7OzttQkF5Q2pCLEtBQUs7b0JBQ0wsS0FBSzt1QkFDTCxLQUFLO21CQUNMLEtBQUs7b0JBQ0wsS0FBSzs2QkFDTCxLQUFLO29CQUNMLEtBQUs7d0JBQ0wsU0FBUyxTQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7O0FBTGhCO0lBQWYsWUFBWSxFQUFFOzttREFBa0I7QUFHakI7SUFBZixZQUFZLEVBQUU7O3lEQUF3Qjs7O0lBTGhELGlDQUFxQjs7SUFDckIsa0NBQXVCOztJQUN2QixxQ0FBMEM7O0lBQzFDLGlDQUE0Qzs7SUFDNUMsa0NBQTRCOztJQUM1QiwyQ0FBZ0Q7O0lBQ2hELGtDQUFtQjs7SUFDbkIsc0NBQWlFOzs7OztJQUVyRCxzQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0RvbVNhbml0aXplcn0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcclxuaW1wb3J0IHtJbnB1dEJvb2xlYW59IGZyb20gXCJuZy16b3Jyby1hbnRkXCI7XHJcblxyXG5leHBvcnQgY29uc3QgS1BJX0NPTE9SUyA9IFtcclxuICAnIzJhN2NmZicsXHJcbiAgJyMwMGNkYTEnLFxyXG4gICcjZmZhMjM0JyxcclxuICAnI2ExMDBjZCcsXHJcbiAgJyNjYzIyMjknLFxyXG4gICcjMDA5ZmUzJyxcclxuICAnIzY4OGNkYScsXHJcbiAgJyNiZWM0Y2QnXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgS1BJX1BSSU9SSVRZX0NPTE9SUyA9IHtcclxuICBoaWdoOiAnI2Y2NTAzYycsXHJcbiAgbWVkaXVtOiAnI2ZmYzYzNCcsXHJcbiAgbG93OiAnIzAwY2U3ZCdcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgS1BJIHtcclxuICBjb3VudDogbnVtYmVyO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgcHJpb3JpdHk/OiAnbG93JyB8ICdoaWdoJyB8ICdtZWRpdW0nO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWtwaScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0twaScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWtwaS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3Mta3BpLmNvbXBvbmVudC5jc3MnXSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgY21hY3Mta3BpIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzS3BpQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGRhdGE6IEtQSVtdO1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHByaW9yaXR5ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgdHlwZTogJ2xpbmUnIHwgJ2RvdWdobnV0JyA9ICdsaW5lJztcclxuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyID0gODQ7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dUb3RhbENvdW50ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZml4ZWQgPSAwO1xyXG4gIEBWaWV3Q2hpbGQoJ2NhbnZhcycsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBjYW52YXNSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHsgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBpZiAodGhpcy5jYW52YXNSZWYpIHtcclxuICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5jYW52YXNSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgICAgY2FudmFzLndpZHRoID0gdGhpcy53aWR0aDtcclxuICAgICAgY2FudmFzLmhlaWdodCA9IHRoaXMud2lkdGg7XHJcbiAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG4gICAgICBsZXQgc3RhcnRfYW5nbGUgPSAwO1xyXG4gICAgICBsZXQgZGF0YSA9IHRoaXMuZ2V0Q29sb3JlZERhdGEoKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmdldFRvdGFsQ291bnQoKSA+IDApIHtcclxuICAgICAgICBmb3IgKGxldCBjYXRlZyBvZiBkYXRhKXtcclxuICAgICAgICAgIGxldCB2YWwgPSBjYXRlZy5jb3VudDtcclxuICAgICAgICAgIGxldCBzbGljZV9hbmdsZSA9IDIgKiBNYXRoLlBJICogKHZhbCAvIHRoaXMuZ2V0VG90YWxDb3VudCgpKTtcclxuICAgICAgICAgIGlmIChzbGljZV9hbmdsZSA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5kcmF3UGllU2xpY2UoXHJcbiAgICAgICAgICAgICAgY3R4LFxyXG4gICAgICAgICAgICAgIGNhbnZhcy53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgY2FudmFzLmhlaWdodCAvIDIsXHJcbiAgICAgICAgICAgICAgTWF0aC5taW4oY2FudmFzLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIpLFxyXG4gICAgICAgICAgICAgIHN0YXJ0X2FuZ2xlLFxyXG4gICAgICAgICAgICAgIHN0YXJ0X2FuZ2xlICsgc2xpY2VfYW5nbGUgLSAwLjA1LFxyXG4gICAgICAgICAgICAgIGNhdGVnLmNvbG9yXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHN0YXJ0X2FuZ2xlICs9IHNsaWNlX2FuZ2xlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmRyYXdQaWVTbGljZShcclxuICAgICAgICAgIGN0eCxcclxuICAgICAgICAgIGNhbnZhcy53aWR0aC8yLFxyXG4gICAgICAgICAgY2FudmFzLmhlaWdodC8yLFxyXG4gICAgICAgICAgTWF0aC5taW4oY2FudmFzLndpZHRoLzIsIGNhbnZhcy5oZWlnaHQvMiksXHJcbiAgICAgICAgICBzdGFydF9hbmdsZSxcclxuICAgICAgICAgIHN0YXJ0X2FuZ2xlICsgMiAqIE1hdGguUEksXHJcbiAgICAgICAgICAnI2RlZTBlNSdcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgLy9kcmF3aW5nIGEgd2hpdGUgY2lyY2xlIG92ZXIgdGhlIGNoYXJ0XHJcbiAgICAgIC8vdG8gY3JlYXRlIHRoZSBkb3VnaG51dCBjaGFydFxyXG4gICAgICB0aGlzLmRyYXdQaWVTbGljZShcclxuICAgICAgICBjdHgsXHJcbiAgICAgICAgY2FudmFzLndpZHRoLzIsXHJcbiAgICAgICAgY2FudmFzLmhlaWdodC8yLFxyXG4gICAgICAgIDAuOCAqIE1hdGgubWluKGNhbnZhcy53aWR0aC8yLCBjYW52YXMuaGVpZ2h0LzIpLFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgMiAqIE1hdGguUEksXHJcbiAgICAgICAgXCIjZmZmZmZmXCJcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBnZXRDb2xvcmVkRGF0YVByaW9yaXR5KCkge1xyXG4gICAgbGV0IGNvbG9yZWREYXRhID0gW107XHJcbiAgICB0aGlzLmRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBjb2xvcmVkRGF0YS5wdXNoKHtcclxuICAgICAgICBjb3VudDogaXRlbS5jb3VudCxcclxuICAgICAgICBkZXNjcmlwdGlvbjogaXRlbS5kZXNjcmlwdGlvbixcclxuICAgICAgICBjb2xvcjogS1BJX1BSSU9SSVRZX0NPTE9SU1tpdGVtLnByaW9yaXR5XSxcclxuICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gY29sb3JlZERhdGE7XHJcbiAgfVxyXG5cclxuICBkcmF3UGllU2xpY2UoY3R4OiBhbnksY2VudGVyWDogbnVtYmVyLCBjZW50ZXJZOiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBzdGFydEFuZ2xlOiBudW1iZXIsIGVuZEFuZ2xlOiBudW1iZXIsIGNvbG9yOiBhbnkgKXtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5tb3ZlVG8oY2VudGVyWCwgY2VudGVyWSk7XHJcbiAgICBjdHguYXJjKGNlbnRlclgsIGNlbnRlclksIHJhZGl1cywgc3RhcnRBbmdsZSAtIE1hdGguUEkgLyAyLCBlbmRBbmdsZSAtIE1hdGguUEkgLyAyLCBmYWxzZSk7XHJcbiAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICBjdHguZmlsbCgpO1xyXG4gIH1cclxuXHJcbiAgZHJhd0xpbmUoY3R4OiBhbnksIHN0YXJ0WDogbnVtYmVyLCBzdGFydFk6IG51bWJlciwgZW5kWDogbnVtYmVyLCBlbmRZOiBudW1iZXIpe1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4Lm1vdmVUbyhzdGFydFgsc3RhcnRZKTtcclxuICAgIGN0eC5saW5lVG8oZW5kWCxlbmRZKTtcclxuICAgIGN0eC5zdHJva2UoKTtcclxuICB9XHJcblxyXG4gIGRyYXdBcmMoY3R4OiBhbnksIGNlbnRlclg6IG51bWJlciwgY2VudGVyWTogbnVtYmVyLCByYWRpdXM6IG51bWJlciwgc3RhcnRBbmdsZTogbnVtYmVyLCBlbmRBbmdsZTogbnVtYmVyKXtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5hcmMoY2VudGVyWCwgY2VudGVyWSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSk7XHJcbiAgICBjdHguc3Ryb2tlKCk7XHJcbiAgfVxyXG5cclxuICBzYW5pdGl6ZVN0eWxlKHN0eWxlOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoc3R5bGUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VG90YWxDb3VudCgpIHtcclxuICAgIGxldCB0b3RhbCA9IDA7XHJcbiAgICB0aGlzLmRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICB0b3RhbCArPSBpdGVtLmNvdW50O1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdG90YWw7XHJcbiAgfVxyXG5cclxuICBnZXRXaWR0aChjb3VudDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gY291bnQgIT09IDAgPyBNYXRoLnRydW5jKGNvdW50ICogMTAwIC8gdGhpcy5nZXRUb3RhbENvdW50KCkpIC0gMiA6IDA7XHJcbiAgfVxyXG5cclxuICBnZXRDb2xvcmVkRGF0YSgpIHtcclxuICAgIGlmICghdGhpcy5wcmlvcml0eSkge1xyXG4gICAgICBsZXQgY29sb3JlZERhdGE6IGFueSA9IFtdO1xyXG4gICAgICBjb25zdCByZW1haW5pbmcgPSB0aGlzLmRhdGEubGVuZ3RoICUgS1BJX0NPTE9SUy5sZW5ndGg7XHJcbiAgICAgIGxldCByYXRlID0gdGhpcy5kYXRhLmxlbmd0aCAvIEtQSV9DT0xPUlMubGVuZ3RoO1xyXG4gICAgICBpZiAocmVtYWluaW5nID4gMCkge1xyXG4gICAgICAgIHJhdGUgPSBNYXRoLnRydW5jKHJhdGUpICsgMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IHRlbXBSYXRlID0gcmF0ZTtcclxuICAgICAgbGV0IG9wYWNpdHkgPSAxO1xyXG4gICAgICBsZXQgY29sb3JJbmRleCA9IDA7XHJcbiAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaWYgKHRlbXBSYXRlID09PSAwKSB7XHJcbiAgICAgICAgICB0ZW1wUmF0ZSA9IHJhdGU7XHJcbiAgICAgICAgICBjb2xvckluZGV4ICs9IDE7XHJcbiAgICAgICAgICBvcGFjaXR5ID0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb2xvckluZGV4ID49IEtQSV9DT0xPUlMubGVuZ3RoKSB7XHJcbiAgICAgICAgICBjb2xvckluZGV4ID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChvcGFjaXR5ID09PSAwLjQpIHtcclxuICAgICAgICAgIG9wYWNpdHkgPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29sb3JlZERhdGEucHVzaCh7XHJcbiAgICAgICAgICBjb3VudDogaXRlbS5jb3VudCxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBpdGVtLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgY29sb3I6IEtQSV9DT0xPUlNbY29sb3JJbmRleF0sXHJcbiAgICAgICAgICBvcGFjaXR5OiBvcGFjaXR5XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG9wYWNpdHkgPSBvcGFjaXR5IC0gMC4yO1xyXG4gICAgICAgIHRlbXBSYXRlLS07XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIGNvbG9yZWREYXRhO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29sb3JlZERhdGFQcmlvcml0eSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19