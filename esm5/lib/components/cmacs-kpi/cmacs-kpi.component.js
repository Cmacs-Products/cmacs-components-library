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
    medium: '#00ce7d',
    low: '#ffc634'
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
                        var slice_angle = 2 * Math.PI * val / this.getTotalCount();
                        this.drawPieSlice(ctx, canvas.width / 2, canvas.height / 2, Math.min(canvas.width / 2, canvas.height / 2), start_angle, start_angle + slice_angle, categ.color);
                        start_angle += slice_angle;
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
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
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
                    styles: [".cmacs-kpi-line{height:6px;margin-right:4px;display:inline-block}.cmacs-kpi-total-count{margin-right:10px;margin-top:-2px;-webkit-box-flex:0;flex:0 0 auto;font-weight:600;color:#3b4043}.border-radius-left{border-radius:100px 0 0 100px}.border-radius-right{border-radius:0 100px 100px 0}.cmacs-kpi-divider{display:inline-block;width:3px;height:9px;border-radius:10px;margin-right:8px}.cmacs-kpi-count{display:inline-block;font-family:Roboto-Regular;font-size:12px;font-weight:600;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#3b4043;margin-right:4px}.cmacs-kpi-description{display:inline-block;font-family:Roboto-Regular;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79}.cmacs-kpi-legend-wrapper{margin-bottom:11px}.cmacs-kpi-wrapper{display:-webkit-box;display:flex}.cmacs-kpi-title{font-family:Roboto-Regular;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.29;letter-spacing:normal;color:#656c79}.cmacs-kpi-doughnut-wrapper{position:absolute;margin-top:24px;margin-left:30px;float:left;display:inline-block}.cmacs-kpi-doughnut-total-count{position:relative;left:-50%;font-size:20px;font-weight:600;color:#3b4043}.cmacs-kpi-total-count-wrapper{top:calc(50% - 17px);left:50%;position:absolute}.cmacs-kpi-doughnut-legend-wrapper{float:right;display:inline-block;margin-top:24px}", "\n      cmacs-kpi {\n        display: block;\n      }\n    "]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mta3BpLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mta3BpL2NtYWNzLWtwaS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sZUFBZSxDQUFDOztBQUUzQyxNQUFNLEtBQU8sVUFBVSxHQUFHO0lBQ3hCLFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0NBQ1Y7O0FBRUQsTUFBTSxLQUFPLG1CQUFtQixHQUFHO0lBQ2pDLElBQUksRUFBRSxTQUFTO0lBQ2YsTUFBTSxFQUFFLFNBQVM7SUFDakIsR0FBRyxFQUFFLFNBQVM7Q0FDZjs7OztBQUVELHlCQUlDOzs7SUFIQyxvQkFBYzs7SUFDZCwwQkFBb0I7O0lBQ3BCLHVCQUFxQzs7QUFHdkM7SUF1QkUsMkJBQW9CLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFObEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQyxTQUFJLEdBQXdCLE1BQU0sQ0FBQztRQUNuQyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ0gsbUJBQWMsR0FBRyxLQUFLLENBQUM7SUFHRCxDQUFDOzs7O0lBRWhELDJDQUFlOzs7SUFBZjs7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7O2dCQUNaLE1BQU0sR0FBRyxtQkFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBcUI7WUFDaEUsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENB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LEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztvQkFDakIsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO29CQUM3QixLQUFLLEVBQUUsVUFBVSxDQUFDLFlBQVUsQ0FBQztvQkFDN0IsT0FBTyxFQUFFLFNBQU87aUJBQ2pCLENBQUMsQ0FBQztnQkFFSCxTQUFPLEdBQUcsU0FBTyxHQUFHLEdBQUcsQ0FBQztnQkFDeEIsVUFBUSxFQUFFLENBQUM7WUFDYixDQUFDLEVBQUMsQ0FBQztZQUVILE9BQU8sYUFBVyxDQUFDO1NBQ3BCO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQzs7Z0JBN0tGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLGl2REFBeUM7NjZDQUd2Qyw2REFJQztpQkFFSjs7OztnQkF0Q08sWUFBWTs7O3VCQXlDakIsS0FBSzt3QkFDTCxLQUFLOzJCQUNMLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLO2lDQUNMLEtBQUs7NEJBQ0wsU0FBUyxTQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7O0lBSmhCO1FBQWYsWUFBWSxFQUFFOzt1REFBa0I7SUFHakI7UUFBZixZQUFZLEVBQUU7OzZEQUF3QjtJQTJKbEQsd0JBQUM7Q0FBQSxBQS9LRCxJQStLQztTQWxLWSxpQkFBaUI7OztJQUU1QixpQ0FBcUI7O0lBQ3JCLGtDQUF1Qjs7SUFDdkIscUNBQTBDOztJQUMxQyxpQ0FBNEM7O0lBQzVDLGtDQUE0Qjs7SUFDNUIsMkNBQWdEOztJQUNoRCxzQ0FBaUU7Ozs7O0lBRXJELHNDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIFZpZXdDaGlsZCxcclxuICBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7RG9tU2FuaXRpemVyfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5pbXBvcnQge0lucHV0Qm9vbGVhbn0gZnJvbSBcIm5nLXpvcnJvLWFudGRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBLUElfQ09MT1JTID0gW1xyXG4gICcjMmE3Y2ZmJyxcclxuICAnIzAwY2RhMScsXHJcbiAgJyNmZmEyMzQnLFxyXG4gICcjYTEwMGNkJyxcclxuICAnI2NjMjIyOScsXHJcbiAgJyMwMDlmZTMnLFxyXG4gICcjNjg4Y2RhJyxcclxuICAnI2JlYzRjZCdcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBLUElfUFJJT1JJVFlfQ09MT1JTID0ge1xyXG4gIGhpZ2g6ICcjZjY1MDNjJyxcclxuICBtZWRpdW06ICcjMDBjZTdkJyxcclxuICBsb3c6ICcjZmZjNjM0J1xyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBLUEkge1xyXG4gIGNvdW50OiBudW1iZXI7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBwcmlvcml0eT86ICdsb3cnIHwgJ2hpZ2gnIHwgJ21lZGl1bSc7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3Mta3BpJyxcclxuICBleHBvcnRBczogJ2NtYWNzS3BpJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mta3BpLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1rcGkuY29tcG9uZW50LmNzcyddLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBjbWFjcy1rcGkge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NLcGlDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgQElucHV0KCkgZGF0YTogS1BJW107XHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgcHJpb3JpdHkgPSBmYWxzZTtcclxuICBASW5wdXQoKSB0eXBlOiAnbGluZScgfCAnZG91Z2hudXQnID0gJ2xpbmUnO1xyXG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXIgPSA4NDtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1RvdGFsQ291bnQgPSBmYWxzZTtcclxuICBAVmlld0NoaWxkKCdjYW52YXMnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgY2FudmFzUmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7IH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgaWYgKHRoaXMuY2FudmFzUmVmKSB7XHJcbiAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuY2FudmFzUmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICAgIGNhbnZhcy53aWR0aCA9IHRoaXMud2lkdGg7XHJcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLndpZHRoO1xyXG4gICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuICAgICAgbGV0IHN0YXJ0X2FuZ2xlID0gMDtcclxuICAgICAgbGV0IGRhdGEgPSB0aGlzLmdldENvbG9yZWREYXRhKCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5nZXRUb3RhbENvdW50KCkgPiAwKSB7XHJcbiAgICAgICAgZm9yIChsZXQgY2F0ZWcgb2YgZGF0YSl7XHJcbiAgICAgICAgICBsZXQgdmFsID0gY2F0ZWcuY291bnQ7XHJcbiAgICAgICAgICBsZXQgc2xpY2VfYW5nbGUgPSAyICogTWF0aC5QSSAqIHZhbCAvIHRoaXMuZ2V0VG90YWxDb3VudCgpO1xyXG5cclxuICAgICAgICAgIHRoaXMuZHJhd1BpZVNsaWNlKFxyXG4gICAgICAgICAgICBjdHgsXHJcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aC8yLFxyXG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0LzIsXHJcbiAgICAgICAgICAgIE1hdGgubWluKGNhbnZhcy53aWR0aC8yLCBjYW52YXMuaGVpZ2h0LzIpLFxyXG4gICAgICAgICAgICBzdGFydF9hbmdsZSxcclxuICAgICAgICAgICAgc3RhcnRfYW5nbGUgKyBzbGljZV9hbmdsZSxcclxuICAgICAgICAgICAgY2F0ZWcuY29sb3JcclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgc3RhcnRfYW5nbGUgKz0gc2xpY2VfYW5nbGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZHJhd1BpZVNsaWNlKFxyXG4gICAgICAgICAgY3R4LFxyXG4gICAgICAgICAgY2FudmFzLndpZHRoLzIsXHJcbiAgICAgICAgICBjYW52YXMuaGVpZ2h0LzIsXHJcbiAgICAgICAgICBNYXRoLm1pbihjYW52YXMud2lkdGgvMiwgY2FudmFzLmhlaWdodC8yKSxcclxuICAgICAgICAgIHN0YXJ0X2FuZ2xlLFxyXG4gICAgICAgICAgc3RhcnRfYW5nbGUgKyAyICogTWF0aC5QSSxcclxuICAgICAgICAgICcjZGVlMGU1J1xyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICAvL2RyYXdpbmcgYSB3aGl0ZSBjaXJjbGUgb3ZlciB0aGUgY2hhcnRcclxuICAgICAgLy90byBjcmVhdGUgdGhlIGRvdWdobnV0IGNoYXJ0XHJcbiAgICAgIHRoaXMuZHJhd1BpZVNsaWNlKFxyXG4gICAgICAgIGN0eCxcclxuICAgICAgICBjYW52YXMud2lkdGgvMixcclxuICAgICAgICBjYW52YXMuaGVpZ2h0LzIsXHJcbiAgICAgICAgMC44ICogTWF0aC5taW4oY2FudmFzLndpZHRoLzIsIGNhbnZhcy5oZWlnaHQvMiksXHJcbiAgICAgICAgMCxcclxuICAgICAgICAyICogTWF0aC5QSSxcclxuICAgICAgICBcIiNmZmZmZmZcIlxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGdldENvbG9yZWREYXRhUHJpb3JpdHkoKSB7XHJcbiAgICBsZXQgY29sb3JlZERhdGEgPSBbXTtcclxuICAgIHRoaXMuZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGNvbG9yZWREYXRhLnB1c2goe1xyXG4gICAgICAgIGNvdW50OiBpdGVtLmNvdW50LFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBpdGVtLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGNvbG9yOiBLUElfUFJJT1JJVFlfQ09MT1JTW2l0ZW0ucHJpb3JpdHldLFxyXG4gICAgICAgIG9wYWNpdHk6IDFcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBjb2xvcmVkRGF0YTtcclxuICB9XHJcblxyXG4gIGRyYXdQaWVTbGljZShjdHg6IGFueSxjZW50ZXJYOiBudW1iZXIsIGNlbnRlclk6IG51bWJlciwgcmFkaXVzOiBudW1iZXIsIHN0YXJ0QW5nbGU6IG51bWJlciwgZW5kQW5nbGU6IG51bWJlciwgY29sb3I6IGFueSApe1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4Lm1vdmVUbyhjZW50ZXJYLGNlbnRlclkpO1xyXG4gICAgY3R4LmFyYyhjZW50ZXJYLCBjZW50ZXJZLCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlKTtcclxuICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuICAgIGN0eC5maWxsKCk7XHJcbiAgfVxyXG5cclxuICBkcmF3TGluZShjdHg6IGFueSwgc3RhcnRYOiBudW1iZXIsIHN0YXJ0WTogbnVtYmVyLCBlbmRYOiBudW1iZXIsIGVuZFk6IG51bWJlcil7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHgubW92ZVRvKHN0YXJ0WCxzdGFydFkpO1xyXG4gICAgY3R4LmxpbmVUbyhlbmRYLGVuZFkpO1xyXG4gICAgY3R4LnN0cm9rZSgpO1xyXG4gIH1cclxuXHJcbiAgZHJhd0FyYyhjdHg6IGFueSwgY2VudGVyWDogbnVtYmVyLCBjZW50ZXJZOiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBzdGFydEFuZ2xlOiBudW1iZXIsIGVuZEFuZ2xlOiBudW1iZXIpe1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4LmFyYyhjZW50ZXJYLCBjZW50ZXJZLCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlKTtcclxuICAgIGN0eC5zdHJva2UoKTtcclxuICB9XHJcblxyXG4gIHNhbml0aXplU3R5bGUoc3R5bGU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShzdHlsZSk7XHJcbiAgfVxyXG5cclxuICBnZXRUb3RhbENvdW50KCkge1xyXG4gICAgbGV0IHRvdGFsID0gMDtcclxuICAgIHRoaXMuZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIHRvdGFsICs9IGl0ZW0uY291bnQ7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0b3RhbDtcclxuICB9XHJcblxyXG4gIGdldFdpZHRoKGNvdW50OiBudW1iZXIpIHtcclxuICAgIHJldHVybiBjb3VudCAhPT0gMCA/IE1hdGgudHJ1bmMoY291bnQgKiAxMDAgLyB0aGlzLmdldFRvdGFsQ291bnQoKSkgLSAyIDogMDtcclxuICB9XHJcblxyXG4gIGdldENvbG9yZWREYXRhKCkge1xyXG4gICAgaWYgKCF0aGlzLnByaW9yaXR5KSB7XHJcbiAgICAgIGxldCBjb2xvcmVkRGF0YTogYW55ID0gW107XHJcbiAgICAgIGNvbnN0IHJlbWFpbmluZyA9IHRoaXMuZGF0YS5sZW5ndGggJSBLUElfQ09MT1JTLmxlbmd0aDtcclxuICAgICAgbGV0IHJhdGUgPSB0aGlzLmRhdGEubGVuZ3RoIC8gS1BJX0NPTE9SUy5sZW5ndGg7XHJcbiAgICAgIGlmIChyZW1haW5pbmcgPiAwKSB7XHJcbiAgICAgICAgcmF0ZSA9IE1hdGgudHJ1bmMocmF0ZSkgKyAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgdGVtcFJhdGUgPSByYXRlO1xyXG4gICAgICBsZXQgb3BhY2l0eSA9IDE7XHJcbiAgICAgIGxldCBjb2xvckluZGV4ID0gMDtcclxuICAgICAgdGhpcy5kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAodGVtcFJhdGUgPT09IDApIHtcclxuICAgICAgICAgIHRlbXBSYXRlID0gcmF0ZTtcclxuICAgICAgICAgIGNvbG9ySW5kZXggKz0gMTtcclxuICAgICAgICAgIG9wYWNpdHkgPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbG9ySW5kZXggPj0gS1BJX0NPTE9SUy5sZW5ndGgpIHtcclxuICAgICAgICAgIGNvbG9ySW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9wYWNpdHkgPT09IDAuNCkge1xyXG4gICAgICAgICAgb3BhY2l0eSA9IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb2xvcmVkRGF0YS5wdXNoKHtcclxuICAgICAgICAgIGNvdW50OiBpdGVtLmNvdW50LFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IGl0ZW0uZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICBjb2xvcjogS1BJX0NPTE9SU1tjb2xvckluZGV4XSxcclxuICAgICAgICAgIG9wYWNpdHk6IG9wYWNpdHlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgb3BhY2l0eSA9IG9wYWNpdHkgLSAwLjI7XHJcbiAgICAgICAgdGVtcFJhdGUtLTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gY29sb3JlZERhdGE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5nZXRDb2xvcmVkRGF0YVByaW9yaXR5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=