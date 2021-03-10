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
        this.fixed = 0;
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
                    template: "<div class=\"cmacs-kpi-wrapper\" *ngIf=\"type === 'line'\">\r\n  <div class=\"cmacs-kpi-total-count\" *ngIf=\"showTotalCount\">{{getTotalCount().toFixed(fixed)}}</div>\r\n  <div style=\"flex: 1 0 auto;\">\r\n    <div class=\"cmacs-kpi-title\">{{title}}</div>\r\n    <div\r\n      *ngFor=\"let kpi of getColoredData(); index as i\"\r\n      class=\"cmacs-kpi-line\"\r\n      [class.border-radius-left]=\"i === 0\"\r\n      [class.border-radius-right]=\"i === getColoredData().lenght - 1\"\r\n      [style.width.%]=\"getWidth(kpi.count)\"\r\n      [style.background-color]=\"kpi.color\"\r\n      [style.opacity]=\"sanitizeStyle(kpi.opacity)\"\r\n      >\r\n    </div>\r\n    <ng-container *ngTemplateOutlet=\"legend\"></ng-container>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"cmacs-kpi-doughnut-container\" *ngIf=\"type === 'doughnut'\">\r\n  <div class=\"cmacs-kpi-doughnut-title\">{{title}}</div>\r\n  <div class=\"cmacs-kpi-doughnut-wrapper\" [style.width.px]=\"width\">\r\n    <div class=\"cmacs-kpi-total-count-wrapper\">\r\n      <div class=\"cmacs-kpi-doughnut-total-count\">{{getTotalCount().toFixed(fixed)}}</div>\r\n    </div>\r\n    <canvas #canvas></canvas>\r\n  </div>\r\n  <div class=\"cmacs-kpi-doughnut-legend-wrapper\">\r\n    <ng-container *ngTemplateOutlet=\"legend\"></ng-container>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #legend>\r\n  <div\r\n    class=\"cmacs-kpi-legend-wrapper\"\r\n    *ngFor=\"let kpi of getColoredData(); index as i\"\r\n  >\r\n    <div class=\"cmacs-kpi-divider\"\r\n         [style.background-color]=\"kpi.color\"\r\n         [style.opacity]=\"sanitizeStyle(kpi.opacity)\"\r\n    ></div>\r\n    <div class=\"cmacs-kpi-count\">{{kpi.count.toFixed(fixed)}}</div>\r\n    <div class=\"cmacs-kpi-description\">{{kpi.description}}</div>\r\n  </div>\r\n</ng-template>\r\n",
                    styles: [".cmacs-kpi-line{height:6px;margin-right:4px;display:inline-block}.cmacs-kpi-total-count{margin-right:10px;margin-top:-2px;-webkit-box-flex:0;flex:0 0 auto;font-weight:600;color:#3b4043}.border-radius-left{border-radius:100px 0 0 100px}.border-radius-right{border-radius:0 100px 100px 0}.cmacs-kpi-divider{display:inline-block;margin-top:4px;width:3px;height:10px;border-radius:10px;margin-right:8px}.cmacs-kpi-count{display:inline-block;font-family:Roboto-Regular;font-size:12px;font-weight:600;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#3b4043;margin-right:4px;min-width:20px}.cmacs-kpi-description{display:inline-block;font-family:Roboto-Regular;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79}.cmacs-kpi-legend-wrapper{margin-bottom:11px;display:-webkit-box;display:flex}.cmacs-kpi-wrapper{display:-webkit-box;display:flex}.cmacs-kpi-title{font-family:Roboto-Regular;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.29;letter-spacing:normal;color:#656c79}.cmacs-kpi-doughnut-wrapper{position:absolute;margin-top:24px;margin-left:30px;float:left;display:inline-block}.cmacs-kpi-doughnut-total-count{position:relative;left:-50%;font-size:20px;font-weight:600;color:#3b4043}.cmacs-kpi-total-count-wrapper{top:calc(50% - 17px);left:50%;position:absolute}.cmacs-kpi-doughnut-legend-wrapper{float:right;display:inline-block;margin-top:24px}", "\n      cmacs-kpi {\n        display: block;\n      }\n    "]
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
    CmacsKpiComponent.prototype.fixed;
    /** @type {?} */
    CmacsKpiComponent.prototype.canvasRef;
    /**
     * @type {?}
     * @private
     */
    CmacsKpiComponent.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mta3BpLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mta3BpL2NtYWNzLWtwaS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sZUFBZSxDQUFDOztBQUUzQyxNQUFNLEtBQU8sVUFBVSxHQUFHO0lBQ3hCLFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0NBQ1Y7O0FBRUQsTUFBTSxLQUFPLG1CQUFtQixHQUFHO0lBQ2pDLElBQUksRUFBRSxTQUFTO0lBQ2YsTUFBTSxFQUFFLFNBQVM7SUFDakIsR0FBRyxFQUFFLFNBQVM7Q0FDZjs7OztBQUVELHlCQUlDOzs7SUFIQyxvQkFBYzs7SUFDZCwwQkFBb0I7O0lBQ3BCLHVCQUFxQzs7QUFHdkM7SUF3QkUsMkJBQW9CLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFQbEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQyxTQUFJLEdBQXdCLE1BQU0sQ0FBQztRQUNuQyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ0gsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkMsVUFBSyxHQUFHLENBQUMsQ0FBQztJQUc0QixDQUFDOzs7O0lBRWhELDJDQUFlOzs7SUFBZjs7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7O2dCQUNaLE1BQU0sR0FBRyxtQkFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBcUI7WUFDaEUs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Q25CLHNDQUFpRTs7Ozs7SUFFckQsc0NBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgVmlld0NoaWxkLFxyXG4gIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtEb21TYW5pdGl6ZXJ9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XHJcbmltcG9ydCB7SW5wdXRCb29sZWFufSBmcm9tIFwibmctem9ycm8tYW50ZFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEtQSV9DT0xPUlMgPSBbXHJcbiAgJyMyYTdjZmYnLFxyXG4gICcjMDBjZGExJyxcclxuICAnI2ZmYTIzNCcsXHJcbiAgJyNhMTAwY2QnLFxyXG4gICcjY2MyMjI5JyxcclxuICAnIzAwOWZlMycsXHJcbiAgJyM2ODhjZGEnLFxyXG4gICcjYmVjNGNkJ1xyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IEtQSV9QUklPUklUWV9DT0xPUlMgPSB7XHJcbiAgaGlnaDogJyNmNjUwM2MnLFxyXG4gIG1lZGl1bTogJyNmZmM2MzQnLFxyXG4gIGxvdzogJyMwMGNlN2QnXHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEtQSSB7XHJcbiAgY291bnQ6IG51bWJlcjtcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIHByaW9yaXR5PzogJ2xvdycgfCAnaGlnaCcgfCAnbWVkaXVtJztcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1rcGknLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NLcGknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1rcGkuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWtwaS5jb21wb25lbnQuY3NzJ10sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIGNtYWNzLWtwaSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0twaUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBASW5wdXQoKSBkYXRhOiBLUElbXTtcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBwcmlvcml0eSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHR5cGU6ICdsaW5lJyB8ICdkb3VnaG51dCcgPSAnbGluZSc7XHJcbiAgQElucHV0KCkgd2lkdGg6IG51bWJlciA9IDg0O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93VG90YWxDb3VudCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGZpeGVkID0gMDtcclxuICBAVmlld0NoaWxkKCdjYW52YXMnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgY2FudmFzUmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7IH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgaWYgKHRoaXMuY2FudmFzUmVmKSB7XHJcbiAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuY2FudmFzUmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICAgIGNhbnZhcy53aWR0aCA9IHRoaXMud2lkdGg7XHJcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLndpZHRoO1xyXG4gICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuICAgICAgbGV0IHN0YXJ0X2FuZ2xlID0gMDtcclxuICAgICAgbGV0IGRhdGEgPSB0aGlzLmdldENvbG9yZWREYXRhKCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5nZXRUb3RhbENvdW50KCkgPiAwKSB7XHJcbiAgICAgICAgZm9yIChsZXQgY2F0ZWcgb2YgZGF0YSl7XHJcbiAgICAgICAgICBsZXQgdmFsID0gY2F0ZWcuY291bnQ7XHJcbiAgICAgICAgICBsZXQgc2xpY2VfYW5nbGUgPSAyICogTWF0aC5QSSAqICh2YWwgLyB0aGlzLmdldFRvdGFsQ291bnQoKSk7XHJcbiAgICAgICAgICBpZiAoc2xpY2VfYW5nbGUgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd1BpZVNsaWNlKFxyXG4gICAgICAgICAgICAgIGN0eCxcclxuICAgICAgICAgICAgICBjYW52YXMud2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgLyAyLFxyXG4gICAgICAgICAgICAgIE1hdGgubWluKGNhbnZhcy53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyKSxcclxuICAgICAgICAgICAgICBzdGFydF9hbmdsZSxcclxuICAgICAgICAgICAgICBzdGFydF9hbmdsZSArIHNsaWNlX2FuZ2xlIC0gMC4wNSxcclxuICAgICAgICAgICAgICBjYXRlZy5jb2xvclxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBzdGFydF9hbmdsZSArPSBzbGljZV9hbmdsZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5kcmF3UGllU2xpY2UoXHJcbiAgICAgICAgICBjdHgsXHJcbiAgICAgICAgICBjYW52YXMud2lkdGgvMixcclxuICAgICAgICAgIGNhbnZhcy5oZWlnaHQvMixcclxuICAgICAgICAgIE1hdGgubWluKGNhbnZhcy53aWR0aC8yLCBjYW52YXMuaGVpZ2h0LzIpLFxyXG4gICAgICAgICAgc3RhcnRfYW5nbGUsXHJcbiAgICAgICAgICBzdGFydF9hbmdsZSArIDIgKiBNYXRoLlBJLFxyXG4gICAgICAgICAgJyNkZWUwZTUnXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIC8vZHJhd2luZyBhIHdoaXRlIGNpcmNsZSBvdmVyIHRoZSBjaGFydFxyXG4gICAgICAvL3RvIGNyZWF0ZSB0aGUgZG91Z2hudXQgY2hhcnRcclxuICAgICAgdGhpcy5kcmF3UGllU2xpY2UoXHJcbiAgICAgICAgY3R4LFxyXG4gICAgICAgIGNhbnZhcy53aWR0aC8yLFxyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQvMixcclxuICAgICAgICAwLjggKiBNYXRoLm1pbihjYW52YXMud2lkdGgvMiwgY2FudmFzLmhlaWdodC8yKSxcclxuICAgICAgICAwLFxyXG4gICAgICAgIDIgKiBNYXRoLlBJLFxyXG4gICAgICAgIFwiI2ZmZmZmZlwiXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0Q29sb3JlZERhdGFQcmlvcml0eSgpIHtcclxuICAgIGxldCBjb2xvcmVkRGF0YSA9IFtdO1xyXG4gICAgdGhpcy5kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgY29sb3JlZERhdGEucHVzaCh7XHJcbiAgICAgICAgY291bnQ6IGl0ZW0uY291bnQsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGl0ZW0uZGVzY3JpcHRpb24sXHJcbiAgICAgICAgY29sb3I6IEtQSV9QUklPUklUWV9DT0xPUlNbaXRlbS5wcmlvcml0eV0sXHJcbiAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGNvbG9yZWREYXRhO1xyXG4gIH1cclxuXHJcbiAgZHJhd1BpZVNsaWNlKGN0eDogYW55LGNlbnRlclg6IG51bWJlciwgY2VudGVyWTogbnVtYmVyLCByYWRpdXM6IG51bWJlciwgc3RhcnRBbmdsZTogbnVtYmVyLCBlbmRBbmdsZTogbnVtYmVyLCBjb2xvcjogYW55ICl7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHgubW92ZVRvKGNlbnRlclgsIGNlbnRlclkpO1xyXG4gICAgY3R4LmFyYyhjZW50ZXJYLCBjZW50ZXJZLCByYWRpdXMsIHN0YXJ0QW5nbGUgLSBNYXRoLlBJIC8gMiwgZW5kQW5nbGUgLSBNYXRoLlBJIC8gMiwgZmFsc2UpO1xyXG4gICAgY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgY3R4LmZpbGwoKTtcclxuICB9XHJcblxyXG4gIGRyYXdMaW5lKGN0eDogYW55LCBzdGFydFg6IG51bWJlciwgc3RhcnRZOiBudW1iZXIsIGVuZFg6IG51bWJlciwgZW5kWTogbnVtYmVyKXtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5tb3ZlVG8oc3RhcnRYLHN0YXJ0WSk7XHJcbiAgICBjdHgubGluZVRvKGVuZFgsZW5kWSk7XHJcbiAgICBjdHguc3Ryb2tlKCk7XHJcbiAgfVxyXG5cclxuICBkcmF3QXJjKGN0eDogYW55LCBjZW50ZXJYOiBudW1iZXIsIGNlbnRlclk6IG51bWJlciwgcmFkaXVzOiBudW1iZXIsIHN0YXJ0QW5nbGU6IG51bWJlciwgZW5kQW5nbGU6IG51bWJlcil7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHguYXJjKGNlbnRlclgsIGNlbnRlclksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUpO1xyXG4gICAgY3R4LnN0cm9rZSgpO1xyXG4gIH1cclxuXHJcbiAgc2FuaXRpemVTdHlsZShzdHlsZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKHN0eWxlKTtcclxuICB9XHJcblxyXG4gIGdldFRvdGFsQ291bnQoKSB7XHJcbiAgICBsZXQgdG90YWwgPSAwO1xyXG4gICAgdGhpcy5kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgdG90YWwgKz0gaXRlbS5jb3VudDtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRvdGFsO1xyXG4gIH1cclxuXHJcbiAgZ2V0V2lkdGgoY291bnQ6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIGNvdW50ICE9PSAwID8gTWF0aC50cnVuYyhjb3VudCAqIDEwMCAvIHRoaXMuZ2V0VG90YWxDb3VudCgpKSAtIDIgOiAwO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29sb3JlZERhdGEoKSB7XHJcbiAgICBpZiAoIXRoaXMucHJpb3JpdHkpIHtcclxuICAgICAgbGV0IGNvbG9yZWREYXRhOiBhbnkgPSBbXTtcclxuICAgICAgY29uc3QgcmVtYWluaW5nID0gdGhpcy5kYXRhLmxlbmd0aCAlIEtQSV9DT0xPUlMubGVuZ3RoO1xyXG4gICAgICBsZXQgcmF0ZSA9IHRoaXMuZGF0YS5sZW5ndGggLyBLUElfQ09MT1JTLmxlbmd0aDtcclxuICAgICAgaWYgKHJlbWFpbmluZyA+IDApIHtcclxuICAgICAgICByYXRlID0gTWF0aC50cnVuYyhyYXRlKSArIDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCB0ZW1wUmF0ZSA9IHJhdGU7XHJcbiAgICAgIGxldCBvcGFjaXR5ID0gMTtcclxuICAgICAgbGV0IGNvbG9ySW5kZXggPSAwO1xyXG4gICAgICB0aGlzLmRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGlmICh0ZW1wUmF0ZSA9PT0gMCkge1xyXG4gICAgICAgICAgdGVtcFJhdGUgPSByYXRlO1xyXG4gICAgICAgICAgY29sb3JJbmRleCArPSAxO1xyXG4gICAgICAgICAgb3BhY2l0eSA9IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29sb3JJbmRleCA+PSBLUElfQ09MT1JTLmxlbmd0aCkge1xyXG4gICAgICAgICAgY29sb3JJbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAob3BhY2l0eSA9PT0gMC40KSB7XHJcbiAgICAgICAgICBvcGFjaXR5ID0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbG9yZWREYXRhLnB1c2goe1xyXG4gICAgICAgICAgY291bnQ6IGl0ZW0uY291bnQsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogaXRlbS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgIGNvbG9yOiBLUElfQ09MT1JTW2NvbG9ySW5kZXhdLFxyXG4gICAgICAgICAgb3BhY2l0eTogb3BhY2l0eVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBvcGFjaXR5ID0gb3BhY2l0eSAtIDAuMjtcclxuICAgICAgICB0ZW1wUmF0ZS0tO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiBjb2xvcmVkRGF0YTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldENvbG9yZWREYXRhUHJpb3JpdHkoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==