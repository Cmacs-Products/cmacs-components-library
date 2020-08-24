/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { InputBoolean } from "ng-zorro-antd";
/** @type {?} */
export var KPI_COLORS = [
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
export var KPI_PRIORITY_COLORS = {
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
var CmacsKpiComponent = /** @class */ (function () {
    function CmacsKpiComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.priority = false;
        this.type = 'line';
        this.width = 84;
        this.showTotalCount = false;
    }
    /**
     * @return {?}
     */
    CmacsKpiComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        if (this.canvasRef) {
            /** @type {?} */
            var canvas = (/** @type {?} */ (this.canvasRef.nativeElement));
            canvas.width = this.width;
            canvas.height = this.width;
            /** @type {?} */
            var ctx = canvas.getContext("2d");
            /** @type {?} */
            var start_angle = 0;
            /** @type {?} */
            var data = this.getColoredData();
            if (this.getTotalCount() > 0) {
                try {
                    for (var data_1 = tslib_1.__values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                        var categ = data_1_1.value;
                        /** @type {?} */
                        var val = categ.count;
                        /** @type {?} */
                        var slice_angle = 2 * Math.PI * (val / this.getTotalCount());
                        if (slice_angle > 0) {
                            this.drawPieSlice(ctx, canvas.width / 2, canvas.height / 2, Math.min(canvas.width / 2, canvas.height / 2), start_angle, start_angle + slice_angle - 0.05, categ.color);
                            start_angle += slice_angle;
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            else {
                this.drawPieSlice(ctx, canvas.width / 2, canvas.height / 2, Math.min(canvas.width / 2, canvas.height / 2), start_angle, start_angle + 2 * Math.PI, '#dee0e5');
            }
            //drawing a white circle over the chart
            //to create the doughnut chart
            this.drawPieSlice(ctx, canvas.width / 2, canvas.height / 2, 0.8 * Math.min(canvas.width / 2, canvas.height / 2), 0, 2 * Math.PI, "#ffffff");
        }
    };
    /**
     * @return {?}
     */
    CmacsKpiComponent.prototype.getColoredDataPriority = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var coloredData = [];
        this.data.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            coloredData.push({
                count: item.count,
                description: item.description,
                color: KPI_PRIORITY_COLORS[item.priority],
                opacity: 1
            });
        }));
        return coloredData;
    };
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
    CmacsKpiComponent.prototype.drawPieSlice = /**
     * @param {?} ctx
     * @param {?} centerX
     * @param {?} centerY
     * @param {?} radius
     * @param {?} startAngle
     * @param {?} endAngle
     * @param {?} color
     * @return {?}
     */
    function (ctx, centerX, centerY, radius, startAngle, endAngle, color) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle - Math.PI / 2, endAngle - Math.PI / 2, false);
        ctx.closePath();
        ctx.fill();
    };
    /**
     * @param {?} ctx
     * @param {?} startX
     * @param {?} startY
     * @param {?} endX
     * @param {?} endY
     * @return {?}
     */
    CmacsKpiComponent.prototype.drawLine = /**
     * @param {?} ctx
     * @param {?} startX
     * @param {?} startY
     * @param {?} endX
     * @param {?} endY
     * @return {?}
     */
    function (ctx, startX, startY, endX, endY) {
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
    };
    /**
     * @param {?} ctx
     * @param {?} centerX
     * @param {?} centerY
     * @param {?} radius
     * @param {?} startAngle
     * @param {?} endAngle
     * @return {?}
     */
    CmacsKpiComponent.prototype.drawArc = /**
     * @param {?} ctx
     * @param {?} centerX
     * @param {?} centerY
     * @param {?} radius
     * @param {?} startAngle
     * @param {?} endAngle
     * @return {?}
     */
    function (ctx, centerX, centerY, radius, startAngle, endAngle) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.stroke();
    };
    /**
     * @param {?} style
     * @return {?}
     */
    CmacsKpiComponent.prototype.sanitizeStyle = /**
     * @param {?} style
     * @return {?}
     */
    function (style) {
        return this.sanitizer.bypassSecurityTrustStyle(style);
    };
    /**
     * @return {?}
     */
    CmacsKpiComponent.prototype.getTotalCount = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var total = 0;
        this.data.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            total += item.count;
        }));
        return total;
    };
    /**
     * @param {?} count
     * @return {?}
     */
    CmacsKpiComponent.prototype.getWidth = /**
     * @param {?} count
     * @return {?}
     */
    function (count) {
        return count !== 0 ? Math.trunc(count * 100 / this.getTotalCount()) - 2 : 0;
    };
    /**
     * @return {?}
     */
    CmacsKpiComponent.prototype.getColoredData = /**
     * @return {?}
     */
    function () {
        if (!this.priority) {
            /** @type {?} */
            var coloredData_1 = [];
            /** @type {?} */
            var remaining = this.data.length % KPI_COLORS.length;
            /** @type {?} */
            var rate_1 = this.data.length / KPI_COLORS.length;
            if (remaining > 0) {
                rate_1 = Math.trunc(rate_1) + 1;
            }
            /** @type {?} */
            var tempRate_1 = rate_1;
            /** @type {?} */
            var opacity_1 = 1;
            /** @type {?} */
            var colorIndex_1 = 0;
            this.data.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                if (tempRate_1 === 0) {
                    tempRate_1 = rate_1;
                    colorIndex_1 += 1;
                    opacity_1 = 1;
                }
                if (colorIndex_1 >= KPI_COLORS.length) {
                    colorIndex_1 = 0;
                }
                if (opacity_1 === 0.4) {
                    opacity_1 = 1;
                }
                coloredData_1.push({
                    count: item.count,
                    description: item.description,
                    color: KPI_COLORS[colorIndex_1],
                    opacity: opacity_1
                });
                opacity_1 = opacity_1 - 0.2;
                tempRate_1--;
            }));
            return coloredData_1;
        }
        else {
            return this.getColoredDataPriority();
        }
    };
    CmacsKpiComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-kpi',
                    exportAs: 'cmacsKpi',
                    template: "<div class=\"cmacs-kpi-wrapper\" *ngIf=\"type === 'line'\">\r\n  <div class=\"cmacs-kpi-total-count\" *ngIf=\"showTotalCount\">{{getTotalCount()}}</div>\r\n  <div style=\"flex: 1 0 auto;\">\r\n    <div class=\"cmacs-kpi-title\">{{title}}</div>\r\n    <div\r\n      *ngFor=\"let kpi of getColoredData(); index as i\"\r\n      class=\"cmacs-kpi-line\"\r\n      [class.border-radius-left]=\"i === 0\"\r\n      [class.border-radius-right]=\"i === getColoredData().lenght - 1\"\r\n      [style.width.%]=\"getWidth(kpi.count)\"\r\n      [style.background-color]=\"kpi.color\"\r\n      [style.opacity]=\"sanitizeStyle(kpi.opacity)\"\r\n      >\r\n    </div>\r\n    <ng-container *ngTemplateOutlet=\"legend\"></ng-container>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"cmacs-kpi-doughnut-container\" *ngIf=\"type === 'doughnut'\">\r\n  <div class=\"cmacs-kpi-doughnut-title\">{{title}}</div>\r\n  <div class=\"cmacs-kpi-doughnut-wrapper\" [style.width.px]=\"width\">\r\n    <div class=\"cmacs-kpi-total-count-wrapper\">\r\n      <div class=\"cmacs-kpi-doughnut-total-count\">{{getTotalCount()}}</div>\r\n    </div>\r\n    <canvas #canvas></canvas>\r\n  </div>\r\n  <div class=\"cmacs-kpi-doughnut-legend-wrapper\">\r\n    <ng-container *ngTemplateOutlet=\"legend\"></ng-container>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #legend>\r\n  <div\r\n    class=\"cmacs-kpi-legend-wrapper\"\r\n    *ngFor=\"let kpi of getColoredData(); index as i\"\r\n  >\r\n    <div class=\"cmacs-kpi-divider\"\r\n         [style.background-color]=\"kpi.color\"\r\n         [style.opacity]=\"sanitizeStyle(kpi.opacity)\"\r\n    ></div>\r\n    <div class=\"cmacs-kpi-count\">{{kpi.count}}</div>\r\n    <div class=\"cmacs-kpi-description\">{{kpi.description}}</div>\r\n  </div>\r\n</ng-template>\r\n",
                    styles: [".cmacs-kpi-line{height:6px;margin-right:4px;display:inline-block}.cmacs-kpi-total-count{margin-right:10px;margin-top:-2px;-webkit-box-flex:0;flex:0 0 auto;font-weight:600;color:#3b4043}.border-radius-left{border-radius:100px 0 0 100px}.border-radius-right{border-radius:0 100px 100px 0}.cmacs-kpi-divider{display:inline-block;width:3px;height:9px;border-radius:10px;margin-right:8px}.cmacs-kpi-count{display:inline-block;font-family:Roboto-Regular;font-size:12px;font-weight:600;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#3b4043;margin-right:4px;min-width:20px}.cmacs-kpi-description{display:inline-block;font-family:Roboto-Regular;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79}.cmacs-kpi-legend-wrapper{margin-bottom:11px}.cmacs-kpi-wrapper{display:-webkit-box;display:flex}.cmacs-kpi-title{font-family:Roboto-Regular;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.29;letter-spacing:normal;color:#656c79}.cmacs-kpi-doughnut-wrapper{position:absolute;margin-top:24px;margin-left:30px;float:left;display:inline-block}.cmacs-kpi-doughnut-total-count{position:relative;left:-50%;font-size:20px;font-weight:600;color:#3b4043}.cmacs-kpi-total-count-wrapper{top:calc(50% - 17px);left:50%;position:absolute}.cmacs-kpi-doughnut-legend-wrapper{float:right;display:inline-block;margin-top:24px}", "\n      cmacs-kpi {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    CmacsKpiComponent.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
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
    return CmacsKpiComponent;
}());
export { CmacsKpiComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mta3BpLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mta3BpL2NtYWNzLWtwaS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sZUFBZSxDQUFDOztBQUUzQyxNQUFNLEtBQU8sVUFBVSxHQUFHO0lBQ3hCLFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0NBQ1Y7O0FBRUQsTUFBTSxLQUFPLG1CQUFtQixHQUFHO0lBQ2pDLElBQUksRUFBRSxTQUFTO0lBQ2YsTUFBTSxFQUFFLFNBQVM7SUFDakIsR0FBRyxFQUFFLFNBQVM7Q0FDZjs7OztBQUVELHlCQUlDOzs7SUFIQyxvQkFBYzs7SUFDZCwwQkFBb0I7O0lBQ3BCLHVCQUFxQzs7QUFHdkM7SUF1QkUsMkJBQW9CLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFObEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQyxTQUFJLEdBQXdCLE1BQU0sQ0FBQztRQUNuQyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ0gsbUJBQWMsR0FBRyxLQUFLLENBQUM7SUFHRCxDQUFDOzs7O0lBRWhELDJDQUFlOzs7SUFBZjs7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7O2dCQUNaLE1BQU0sR0FBRyxtQkFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBcUI7WUFDaEUsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENB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cnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0RvbVNhbml0aXplcn0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcclxuaW1wb3J0IHtJbnB1dEJvb2xlYW59IGZyb20gXCJuZy16b3Jyby1hbnRkXCI7XHJcblxyXG5leHBvcnQgY29uc3QgS1BJX0NPTE9SUyA9IFtcclxuICAnIzJhN2NmZicsXHJcbiAgJyMwMGNkYTEnLFxyXG4gICcjZmZhMjM0JyxcclxuICAnI2ExMDBjZCcsXHJcbiAgJyNjYzIyMjknLFxyXG4gICcjMDA5ZmUzJyxcclxuICAnIzY4OGNkYScsXHJcbiAgJyNiZWM0Y2QnXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgS1BJX1BSSU9SSVRZX0NPTE9SUyA9IHtcclxuICBoaWdoOiAnI2Y2NTAzYycsXHJcbiAgbWVkaXVtOiAnI2ZmYzYzNCcsXHJcbiAgbG93OiAnIzAwY2U3ZCdcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgS1BJIHtcclxuICBjb3VudDogbnVtYmVyO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgcHJpb3JpdHk/OiAnbG93JyB8ICdoaWdoJyB8ICdtZWRpdW0nO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWtwaScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0twaScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWtwaS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3Mta3BpLmNvbXBvbmVudC5jc3MnXSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgY21hY3Mta3BpIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzS3BpQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGRhdGE6IEtQSVtdO1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHByaW9yaXR5ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgdHlwZTogJ2xpbmUnIHwgJ2RvdWdobnV0JyA9ICdsaW5lJztcclxuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyID0gODQ7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dUb3RhbENvdW50ID0gZmFsc2U7XHJcbiAgQFZpZXdDaGlsZCgnY2FudmFzJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGNhbnZhc1JlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikgeyB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmNhbnZhc1JlZikge1xyXG4gICAgICBjb25zdCBjYW52YXMgPSB0aGlzLmNhbnZhc1JlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgICBjYW52YXMud2lkdGggPSB0aGlzLndpZHRoO1xyXG4gICAgICBjYW52YXMuaGVpZ2h0ID0gdGhpcy53aWR0aDtcclxuICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICAgIGxldCBzdGFydF9hbmdsZSA9IDA7XHJcbiAgICAgIGxldCBkYXRhID0gdGhpcy5nZXRDb2xvcmVkRGF0YSgpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuZ2V0VG90YWxDb3VudCgpID4gMCkge1xyXG4gICAgICAgIGZvciAobGV0IGNhdGVnIG9mIGRhdGEpe1xyXG4gICAgICAgICAgbGV0IHZhbCA9IGNhdGVnLmNvdW50O1xyXG4gICAgICAgICAgbGV0IHNsaWNlX2FuZ2xlID0gMiAqIE1hdGguUEkgKiAodmFsIC8gdGhpcy5nZXRUb3RhbENvdW50KCkpO1xyXG4gICAgICAgICAgaWYgKHNsaWNlX2FuZ2xlID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdQaWVTbGljZShcclxuICAgICAgICAgICAgICBjdHgsXHJcbiAgICAgICAgICAgICAgY2FudmFzLndpZHRoIC8gMixcclxuICAgICAgICAgICAgICBjYW52YXMuaGVpZ2h0IC8gMixcclxuICAgICAgICAgICAgICBNYXRoLm1pbihjYW52YXMud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMiksXHJcbiAgICAgICAgICAgICAgc3RhcnRfYW5nbGUsXHJcbiAgICAgICAgICAgICAgc3RhcnRfYW5nbGUgKyBzbGljZV9hbmdsZSAtIDAuMDUsXHJcbiAgICAgICAgICAgICAgY2F0ZWcuY29sb3JcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgc3RhcnRfYW5nbGUgKz0gc2xpY2VfYW5nbGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZHJhd1BpZVNsaWNlKFxyXG4gICAgICAgICAgY3R4LFxyXG4gICAgICAgICAgY2FudmFzLndpZHRoLzIsXHJcbiAgICAgICAgICBjYW52YXMuaGVpZ2h0LzIsXHJcbiAgICAgICAgICBNYXRoLm1pbihjYW52YXMud2lkdGgvMiwgY2FudmFzLmhlaWdodC8yKSxcclxuICAgICAgICAgIHN0YXJ0X2FuZ2xlLFxyXG4gICAgICAgICAgc3RhcnRfYW5nbGUgKyAyICogTWF0aC5QSSxcclxuICAgICAgICAgICcjZGVlMGU1J1xyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICAvL2RyYXdpbmcgYSB3aGl0ZSBjaXJjbGUgb3ZlciB0aGUgY2hhcnRcclxuICAgICAgLy90byBjcmVhdGUgdGhlIGRvdWdobnV0IGNoYXJ0XHJcbiAgICAgIHRoaXMuZHJhd1BpZVNsaWNlKFxyXG4gICAgICAgIGN0eCxcclxuICAgICAgICBjYW52YXMud2lkdGgvMixcclxuICAgICAgICBjYW52YXMuaGVpZ2h0LzIsXHJcbiAgICAgICAgMC44ICogTWF0aC5taW4oY2FudmFzLndpZHRoLzIsIGNhbnZhcy5oZWlnaHQvMiksXHJcbiAgICAgICAgMCxcclxuICAgICAgICAyICogTWF0aC5QSSxcclxuICAgICAgICBcIiNmZmZmZmZcIlxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGdldENvbG9yZWREYXRhUHJpb3JpdHkoKSB7XHJcbiAgICBsZXQgY29sb3JlZERhdGEgPSBbXTtcclxuICAgIHRoaXMuZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGNvbG9yZWREYXRhLnB1c2goe1xyXG4gICAgICAgIGNvdW50OiBpdGVtLmNvdW50LFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBpdGVtLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGNvbG9yOiBLUElfUFJJT1JJVFlfQ09MT1JTW2l0ZW0ucHJpb3JpdHldLFxyXG4gICAgICAgIG9wYWNpdHk6IDFcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBjb2xvcmVkRGF0YTtcclxuICB9XHJcblxyXG4gIGRyYXdQaWVTbGljZShjdHg6IGFueSxjZW50ZXJYOiBudW1iZXIsIGNlbnRlclk6IG51bWJlciwgcmFkaXVzOiBudW1iZXIsIHN0YXJ0QW5nbGU6IG51bWJlciwgZW5kQW5nbGU6IG51bWJlciwgY29sb3I6IGFueSApe1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4Lm1vdmVUbyhjZW50ZXJYLCBjZW50ZXJZKTtcclxuICAgIGN0eC5hcmMoY2VudGVyWCwgY2VudGVyWSwgcmFkaXVzLCBzdGFydEFuZ2xlIC0gTWF0aC5QSSAvIDIsIGVuZEFuZ2xlIC0gTWF0aC5QSSAvIDIsIGZhbHNlKTtcclxuICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuICAgIGN0eC5maWxsKCk7XHJcbiAgfVxyXG5cclxuICBkcmF3TGluZShjdHg6IGFueSwgc3RhcnRYOiBudW1iZXIsIHN0YXJ0WTogbnVtYmVyLCBlbmRYOiBudW1iZXIsIGVuZFk6IG51bWJlcil7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHgubW92ZVRvKHN0YXJ0WCxzdGFydFkpO1xyXG4gICAgY3R4LmxpbmVUbyhlbmRYLGVuZFkpO1xyXG4gICAgY3R4LnN0cm9rZSgpO1xyXG4gIH1cclxuXHJcbiAgZHJhd0FyYyhjdHg6IGFueSwgY2VudGVyWDogbnVtYmVyLCBjZW50ZXJZOiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBzdGFydEFuZ2xlOiBudW1iZXIsIGVuZEFuZ2xlOiBudW1iZXIpe1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4LmFyYyhjZW50ZXJYLCBjZW50ZXJZLCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlKTtcclxuICAgIGN0eC5zdHJva2UoKTtcclxuICB9XHJcblxyXG4gIHNhbml0aXplU3R5bGUoc3R5bGU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShzdHlsZSk7XHJcbiAgfVxyXG5cclxuICBnZXRUb3RhbENvdW50KCkge1xyXG4gICAgbGV0IHRvdGFsID0gMDtcclxuICAgIHRoaXMuZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIHRvdGFsICs9IGl0ZW0uY291bnQ7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0b3RhbDtcclxuICB9XHJcblxyXG4gIGdldFdpZHRoKGNvdW50OiBudW1iZXIpIHtcclxuICAgIHJldHVybiBjb3VudCAhPT0gMCA/IE1hdGgudHJ1bmMoY291bnQgKiAxMDAgLyB0aGlzLmdldFRvdGFsQ291bnQoKSkgLSAyIDogMDtcclxuICB9XHJcblxyXG4gIGdldENvbG9yZWREYXRhKCkge1xyXG4gICAgaWYgKCF0aGlzLnByaW9yaXR5KSB7XHJcbiAgICAgIGxldCBjb2xvcmVkRGF0YTogYW55ID0gW107XHJcbiAgICAgIGNvbnN0IHJlbWFpbmluZyA9IHRoaXMuZGF0YS5sZW5ndGggJSBLUElfQ09MT1JTLmxlbmd0aDtcclxuICAgICAgbGV0IHJhdGUgPSB0aGlzLmRhdGEubGVuZ3RoIC8gS1BJX0NPTE9SUy5sZW5ndGg7XHJcbiAgICAgIGlmIChyZW1haW5pbmcgPiAwKSB7XHJcbiAgICAgICAgcmF0ZSA9IE1hdGgudHJ1bmMocmF0ZSkgKyAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgdGVtcFJhdGUgPSByYXRlO1xyXG4gICAgICBsZXQgb3BhY2l0eSA9IDE7XHJcbiAgICAgIGxldCBjb2xvckluZGV4ID0gMDtcclxuICAgICAgdGhpcy5kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAodGVtcFJhdGUgPT09IDApIHtcclxuICAgICAgICAgIHRlbXBSYXRlID0gcmF0ZTtcclxuICAgICAgICAgIGNvbG9ySW5kZXggKz0gMTtcclxuICAgICAgICAgIG9wYWNpdHkgPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbG9ySW5kZXggPj0gS1BJX0NPTE9SUy5sZW5ndGgpIHtcclxuICAgICAgICAgIGNvbG9ySW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9wYWNpdHkgPT09IDAuNCkge1xyXG4gICAgICAgICAgb3BhY2l0eSA9IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb2xvcmVkRGF0YS5wdXNoKHtcclxuICAgICAgICAgIGNvdW50OiBpdGVtLmNvdW50LFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IGl0ZW0uZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICBjb2xvcjogS1BJX0NPTE9SU1tjb2xvckluZGV4XSxcclxuICAgICAgICAgIG9wYWNpdHk6IG9wYWNpdHlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgb3BhY2l0eSA9IG9wYWNpdHkgLSAwLjI7XHJcbiAgICAgICAgdGVtcFJhdGUtLTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gY29sb3JlZERhdGE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5nZXRDb2xvcmVkRGF0YVByaW9yaXR5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=