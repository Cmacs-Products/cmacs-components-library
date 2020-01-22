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
var CmacsKpiComponent = /** @class */ (function () {
    function CmacsKpiComponent(sanitizer) {
        this.sanitizer = sanitizer;
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
        /** @type {?} */
        var coloredData = [];
        /** @type {?} */
        var remaining = this.data.length % KPI_COLORS.length;
        /** @type {?} */
        var rate = this.data.length / KPI_COLORS.length;
        if (remaining > 0) {
            rate = Math.trunc(rate) + 1;
        }
        /** @type {?} */
        var tempRate = rate;
        /** @type {?} */
        var opacity = 1;
        /** @type {?} */
        var colorIndex = 0;
        this.data.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
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
    };
    CmacsKpiComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-kpi',
                    exportAs: 'cmacsKpi',
                    template: "<div class=\"cmacs-kpi-wrapper\" *ngIf=\"type === 'line'\">\r\n  <div class=\"cmacs-kpi-total-count\" *ngIf=\"showTotalCount\">{{getTotalCount()}}</div>\r\n  <div style=\"flex: 1 0 auto;\">\r\n    <div class=\"cmacs-kpi-title\">{{title}}</div>\r\n    <div\r\n      *ngFor=\"let kpi of getColoredData(); index as i\"\r\n      class=\"cmacs-kpi-line\"\r\n      [class.border-radius-left]=\"i === 0\"\r\n      [class.border-radius-right]=\"i === getColoredData().lenght - 1\"\r\n      [style.width.%]=\"getWidth(kpi.count)\"\r\n      [style.background-color]=\"kpi.color\"\r\n      [style.opacity]=\"sanitizeStyle(kpi.opacity)\"\r\n      >\r\n    </div>\r\n    <ng-container *ngTemplateOutlet=\"legend\"></ng-container>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"cmacs-kpi-doughnut-container\" *ngIf=\"type === 'doughnut'\">\r\n  <div class=\"cmacs-kpi-doughnut-title\">{{title}}</div>\r\n  <div class=\"cmacs-kpi-doughnut-wrapper\" [style.width.px]=\"width\">\r\n    <div class=\"cmacs-kpi-total-count-wrapper\">\r\n      <div class=\"cmacs-kpi-doughnut-total-count\">{{getTotalCount()}}</div>\r\n    </div>\r\n    <canvas #canvas></canvas>\r\n  </div>\r\n  <div class=\"cmacs-kpi-doughnut-legend-wrapper\">\r\n    <ng-container *ngTemplateOutlet=\"legend\"></ng-container>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #legend>\r\n  <div\r\n    class=\"cmacs-kpi-legend-wrapper\"\r\n    *ngFor=\"let kpi of getColoredData(); index as i\"\r\n  >\r\n    <div class=\"cmacs-kpi-divider\"\r\n         [style.background-color]=\"kpi.color\"\r\n         [style.opacity]=\"sanitizeStyle(kpi.opacity)\"\r\n    ></div>\r\n    <div class=\"cmacs-kpi-count\">{{kpi.count}}</div>\r\n    <div class=\"cmacs-kpi-description\">{{kpi.description}}</div>\r\n  </div>\r\n</ng-template>\r\n",
                    styles: [".cmacs-kpi-line{height:4px;margin-right:2px;display:inline-block}.cmacs-kpi-total-count{margin-right:10px;margin-top:-2px;-webkit-box-flex:0;flex:0 0 auto;font-weight:600;color:#3b4043}.border-radius-left{border-radius:100px 0 0 100px}.border-radius-right{border-radius:0 100px 100px 0}.cmacs-kpi-divider{display:inline-block;width:2px;height:9px;border-radius:100px;margin-right:8px}.cmacs-kpi-count{display:inline-block;font-family:Roboto-Regular;font-size:12px;font-weight:600;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#3b4043;margin-right:4px}.cmacs-kpi-description{display:inline-block;font-family:Roboto-Regular;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79}.cmacs-kpi-legend-wrapper{margin-bottom:11px}.cmacs-kpi-wrapper{display:-webkit-box;display:flex}.cmacs-kpi-title{font-family:Roboto-Regular;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.29;letter-spacing:normal;color:#656c79}.cmacs-kpi-doughnut-wrapper{position:absolute;margin-top:24px;margin-left:30px;float:left;display:inline-block}.cmacs-kpi-doughnut-total-count{position:relative;left:-50%;font-size:20px;font-weight:600;color:#3b4043}.cmacs-kpi-total-count-wrapper{top:calc(50% - 17px);left:50%;position:absolute}.cmacs-kpi-doughnut-legend-wrapper{float:right;display:inline-block;margin-top:24px}", "\n      cmacs-kpi {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    CmacsKpiComponent.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    CmacsKpiComponent.propDecorators = {
        data: [{ type: Input }],
        title: [{ type: Input }],
        type: [{ type: Input }],
        width: [{ type: Input }],
        showTotalCount: [{ type: Input }],
        canvasRef: [{ type: ViewChild, args: ['canvas', { read: ElementRef },] }]
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mta3BpLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mta3BpL2NtYWNzLWtwaS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sZUFBZSxDQUFDOztBQUUzQyxNQUFNLEtBQU8sVUFBVSxHQUFHO0lBQ3hCLFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0NBQ1Y7Ozs7QUFFRCx5QkFHQzs7O0lBRkMsb0JBQWM7O0lBQ2QsMEJBQW9COztBQUd0QjtJQXNCRSwyQkFBb0IsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUxsQyxTQUFJLEdBQXdCLE1BQU0sQ0FBQztRQUNuQyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ0gsbUJBQWMsR0FBRyxLQUFLLENBQUM7SUFHRCxDQUFDOzs7O0lBRWhELDJDQUFlOzs7SUFBZjs7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7O2dCQUNaLE1BQU0sR0FBRyxtQkFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBcUI7WUFDaEUsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQzFCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQzs7Z0JBQ3JCLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQzs7Z0JBRS9CLFdBQVcsR0FBRyxDQUFDOztnQkFD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O0NBQUEsQUE3SkQsSUE2SkM7U0FoSlksaUJBQWlCOzs7SUFFNUIsaUNBQXFCOztJQUNyQixrQ0FBdUI7O0lBQ3ZCLGlDQUE0Qzs7SUFDNUMsa0NBQTRCOztJQUM1QiwyQ0FBZ0Q7O0lBQ2hELHNDQUFpRTs7Ozs7SUFFckQsc0NBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgVmlld0NoaWxkLFxyXG4gIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtEb21TYW5pdGl6ZXJ9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XHJcbmltcG9ydCB7SW5wdXRCb29sZWFufSBmcm9tIFwibmctem9ycm8tYW50ZFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEtQSV9DT0xPUlMgPSBbXHJcbiAgJyMyYTdjZmYnLFxyXG4gICcjMDBjZGExJyxcclxuICAnI2ZmYTIzNCcsXHJcbiAgJyNhMTAwY2QnLFxyXG4gICcjY2MyMjI5JyxcclxuICAnIzAwOWZlMycsXHJcbiAgJyM2ODhjZGEnLFxyXG4gICcjYmVjNGNkJ1xyXG5dO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBLUEkge1xyXG4gIGNvdW50OiBudW1iZXI7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1rcGknLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NLcGknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1rcGkuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWtwaS5jb21wb25lbnQuY3NzJ10sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIGNtYWNzLWtwaSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0twaUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBASW5wdXQoKSBkYXRhOiBLUElbXTtcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHR5cGU6ICdsaW5lJyB8ICdkb3VnaG51dCcgPSAnbGluZSc7XHJcbiAgQElucHV0KCkgd2lkdGg6IG51bWJlciA9IDg0O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93VG90YWxDb3VudCA9IGZhbHNlO1xyXG4gIEBWaWV3Q2hpbGQoJ2NhbnZhcycsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBjYW52YXNSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHsgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBpZiAodGhpcy5jYW52YXNSZWYpIHtcclxuICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5jYW52YXNSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgICAgY2FudmFzLndpZHRoID0gdGhpcy53aWR0aDtcclxuICAgICAgY2FudmFzLmhlaWdodCA9IHRoaXMud2lkdGg7XHJcbiAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG4gICAgICBsZXQgc3RhcnRfYW5nbGUgPSAwO1xyXG4gICAgICBsZXQgZGF0YSA9IHRoaXMuZ2V0Q29sb3JlZERhdGEoKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmdldFRvdGFsQ291bnQoKSA+IDApIHtcclxuICAgICAgICBmb3IgKGxldCBjYXRlZyBvZiBkYXRhKXtcclxuICAgICAgICAgIGxldCB2YWwgPSBjYXRlZy5jb3VudDtcclxuICAgICAgICAgIGxldCBzbGljZV9hbmdsZSA9IDIgKiBNYXRoLlBJICogdmFsIC8gdGhpcy5nZXRUb3RhbENvdW50KCk7XHJcblxyXG4gICAgICAgICAgdGhpcy5kcmF3UGllU2xpY2UoXHJcbiAgICAgICAgICAgIGN0eCxcclxuICAgICAgICAgICAgY2FudmFzLndpZHRoLzIsXHJcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQvMixcclxuICAgICAgICAgICAgTWF0aC5taW4oY2FudmFzLndpZHRoLzIsIGNhbnZhcy5oZWlnaHQvMiksXHJcbiAgICAgICAgICAgIHN0YXJ0X2FuZ2xlLFxyXG4gICAgICAgICAgICBzdGFydF9hbmdsZSArIHNsaWNlX2FuZ2xlLFxyXG4gICAgICAgICAgICBjYXRlZy5jb2xvclxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICBzdGFydF9hbmdsZSArPSBzbGljZV9hbmdsZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5kcmF3UGllU2xpY2UoXHJcbiAgICAgICAgICBjdHgsXHJcbiAgICAgICAgICBjYW52YXMud2lkdGgvMixcclxuICAgICAgICAgIGNhbnZhcy5oZWlnaHQvMixcclxuICAgICAgICAgIE1hdGgubWluKGNhbnZhcy53aWR0aC8yLCBjYW52YXMuaGVpZ2h0LzIpLFxyXG4gICAgICAgICAgc3RhcnRfYW5nbGUsXHJcbiAgICAgICAgICBzdGFydF9hbmdsZSArIDIgKiBNYXRoLlBJLFxyXG4gICAgICAgICAgJyNkZWUwZTUnXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIC8vZHJhd2luZyBhIHdoaXRlIGNpcmNsZSBvdmVyIHRoZSBjaGFydFxyXG4gICAgICAvL3RvIGNyZWF0ZSB0aGUgZG91Z2hudXQgY2hhcnRcclxuICAgICAgdGhpcy5kcmF3UGllU2xpY2UoXHJcbiAgICAgICAgY3R4LFxyXG4gICAgICAgIGNhbnZhcy53aWR0aC8yLFxyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQvMixcclxuICAgICAgICAwLjggKiBNYXRoLm1pbihjYW52YXMud2lkdGgvMiwgY2FudmFzLmhlaWdodC8yKSxcclxuICAgICAgICAwLFxyXG4gICAgICAgIDIgKiBNYXRoLlBJLFxyXG4gICAgICAgIFwiI2ZmZmZmZlwiXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgZHJhd1BpZVNsaWNlKGN0eDogYW55LGNlbnRlclg6IG51bWJlciwgY2VudGVyWTogbnVtYmVyLCByYWRpdXM6IG51bWJlciwgc3RhcnRBbmdsZTogbnVtYmVyLCBlbmRBbmdsZTogbnVtYmVyLCBjb2xvcjogYW55ICl7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHgubW92ZVRvKGNlbnRlclgsY2VudGVyWSk7XHJcbiAgICBjdHguYXJjKGNlbnRlclgsIGNlbnRlclksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUpO1xyXG4gICAgY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgY3R4LmZpbGwoKTtcclxuICB9XHJcblxyXG4gIGRyYXdMaW5lKGN0eDogYW55LCBzdGFydFg6IG51bWJlciwgc3RhcnRZOiBudW1iZXIsIGVuZFg6IG51bWJlciwgZW5kWTogbnVtYmVyKXtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5tb3ZlVG8oc3RhcnRYLHN0YXJ0WSk7XHJcbiAgICBjdHgubGluZVRvKGVuZFgsZW5kWSk7XHJcbiAgICBjdHguc3Ryb2tlKCk7XHJcbiAgfVxyXG5cclxuICBkcmF3QXJjKGN0eDogYW55LCBjZW50ZXJYOiBudW1iZXIsIGNlbnRlclk6IG51bWJlciwgcmFkaXVzOiBudW1iZXIsIHN0YXJ0QW5nbGU6IG51bWJlciwgZW5kQW5nbGU6IG51bWJlcil7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHguYXJjKGNlbnRlclgsIGNlbnRlclksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUpO1xyXG4gICAgY3R4LnN0cm9rZSgpO1xyXG4gIH1cclxuXHJcbiAgc2FuaXRpemVTdHlsZShzdHlsZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKHN0eWxlKTtcclxuICB9XHJcblxyXG4gIGdldFRvdGFsQ291bnQoKSB7XHJcbiAgICBsZXQgdG90YWwgPSAwO1xyXG4gICAgdGhpcy5kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgdG90YWwgKz0gaXRlbS5jb3VudDtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRvdGFsO1xyXG4gIH1cclxuXHJcbiAgZ2V0V2lkdGgoY291bnQ6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIGNvdW50ICE9PSAwID8gTWF0aC50cnVuYyhjb3VudCAqIDEwMCAvIHRoaXMuZ2V0VG90YWxDb3VudCgpKSAtIDIgOiAwO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29sb3JlZERhdGEoKSB7XHJcbiAgICBsZXQgY29sb3JlZERhdGE6IGFueSA9IFtdO1xyXG4gICAgY29uc3QgcmVtYWluaW5nID0gdGhpcy5kYXRhLmxlbmd0aCAlIEtQSV9DT0xPUlMubGVuZ3RoO1xyXG4gICAgbGV0IHJhdGUgPSB0aGlzLmRhdGEubGVuZ3RoIC8gS1BJX0NPTE9SUy5sZW5ndGg7XHJcbiAgICBpZiAocmVtYWluaW5nID4gMCkge1xyXG4gICAgICByYXRlID0gTWF0aC50cnVuYyhyYXRlKSArIDE7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHRlbXBSYXRlID0gcmF0ZTtcclxuICAgIGxldCBvcGFjaXR5ID0gMTtcclxuICAgIGxldCBjb2xvckluZGV4ID0gMDtcclxuICAgIHRoaXMuZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGlmICh0ZW1wUmF0ZSA9PT0gMCkge1xyXG4gICAgICAgIHRlbXBSYXRlID0gcmF0ZTtcclxuICAgICAgICBjb2xvckluZGV4ICs9IDE7XHJcbiAgICAgICAgb3BhY2l0eSA9IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjb2xvckluZGV4ID49IEtQSV9DT0xPUlMubGVuZ3RoKSB7XHJcbiAgICAgICAgY29sb3JJbmRleCA9IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChvcGFjaXR5ID09PSAwLjQpIHtcclxuICAgICAgICBvcGFjaXR5ID0gMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29sb3JlZERhdGEucHVzaCh7XHJcbiAgICAgICAgY291bnQ6IGl0ZW0uY291bnQsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGl0ZW0uZGVzY3JpcHRpb24sXHJcbiAgICAgICAgY29sb3I6IEtQSV9DT0xPUlNbY29sb3JJbmRleF0sXHJcbiAgICAgICAgb3BhY2l0eTogb3BhY2l0eVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIG9wYWNpdHkgPSBvcGFjaXR5IC0gMC4yO1xyXG4gICAgICB0ZW1wUmF0ZS0tO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGNvbG9yZWREYXRhO1xyXG4gIH1cclxuXHJcbn1cclxuIl19