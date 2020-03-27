/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { KPI_COLORS } from '../cmacs-kpi/cmacs-kpi.component';
import { DomSanitizer } from '@angular/platform-browser';
var CmacsKPIOverviewComponent = /** @class */ (function () {
    function CmacsKPIOverviewComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.minWidth = 300;
        this.fontChartNumber = 20;
        this.chartWidth = 84;
        this.p = 1;
        this.type = 'doughnut';
        this.colors = KPI_COLORS;
    }
    /**
     * @return {?}
     */
    CmacsKPIOverviewComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        //
        this.p = 1;
        if (this.view && this.view.length === 2) {
            this.p = this.view[0] > this.minWidth ? this.view[0] / this.minWidth : 1;
        }
        setTimeout((/**
         * @return {?}
         */
        function () {
            var e_1, _a;
            if (_this.canvasRef) {
                /** @type {?} */
                var canvas = (/** @type {?} */ (_this.canvasRef.nativeElement));
                canvas.width = _this.chartWidth * _this.p;
                canvas.height = _this.chartWidth * _this.p;
                /** @type {?} */
                var ctx = canvas.getContext('2d');
                /** @type {?} */
                var startAngle = 0;
                /** @type {?} */
                var data = _this.getColoredData();
                if (_this.getTotalCount() > 0) {
                    try {
                        for (var data_1 = tslib_1.__values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                            var categ = data_1_1.value;
                            /** @type {?} */
                            var val = categ.count;
                            /** @type {?} */
                            var sliceAngle = 2 * Math.PI * val / _this.getTotalCount();
                            _this.drawPieSlice(ctx, canvas.width / 2, canvas.height / 2, Math.min(canvas.width / 2, canvas.height / 2), startAngle, startAngle + sliceAngle - 0.05, categ.color);
                            startAngle += sliceAngle;
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
                    _this.drawPieSlice(ctx, canvas.width / 2, canvas.height / 2, Math.min(canvas.width / 2, canvas.height / 2), startAngle, startAngle + 2 * Math.PI, '#dee0e5');
                }
                // drawing a white circle over the chart
                // to create the doughnut chart
                _this.drawPieSlice(ctx, canvas.width / 2, canvas.height / 2, 0.8 * Math.min(canvas.width / 2, canvas.height / 2), 0, 2 * Math.PI, '#ffffff');
                // draw value
                ctx.font = _this.fontChartNumber * _this.p + 'px Roboto ';
                ctx.fillStyle = '#3b3f46';
                ctx.textAlign = 'center';
                ctx.fillText('' + _this.getTotalCount(), canvas.width / 2, canvas.width / 2 + 5);
            }
        }), 50);
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
    CmacsKPIOverviewComponent.prototype.drawPieSlice = /**
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
     * @param {?} centerX
     * @param {?} centerY
     * @param {?} radius
     * @param {?} startAngle
     * @param {?} endAngle
     * @return {?}
     */
    CmacsKPIOverviewComponent.prototype.drawArc = /**
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
    CmacsKPIOverviewComponent.prototype.sanitizeStyle = /**
     * @param {?} style
     * @return {?}
     */
    function (style) {
        return this.sanitizer.bypassSecurityTrustStyle(style);
    };
    /**
     * @return {?}
     */
    CmacsKPIOverviewComponent.prototype.getTotalCount = /**
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
    CmacsKPIOverviewComponent.prototype.getWidth = /**
     * @param {?} count
     * @return {?}
     */
    function (count) {
        return count !== 0 ? Math.trunc(count * 100 / this.getTotalCount()) - 2 : 0;
    };
    /**
     * @return {?}
     */
    CmacsKPIOverviewComponent.prototype.getColoredData = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var coloredData = [];
        /** @type {?} */
        var remaining = this.data.length % this.colors.length;
        /** @type {?} */
        var rate = this.data.length / this.colors.length;
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
            if (colorIndex >= _this.colors.length) {
                colorIndex = 0;
            }
            if (opacity === 0.4) {
                opacity = 1;
            }
            coloredData.push({
                count: item.count,
                description: item.description,
                color: _this.colors[colorIndex],
                opacity: opacity
            });
            opacity = opacity - 0.2;
            tempRate--;
        }));
        return coloredData;
    };
    CmacsKPIOverviewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-kpi-overview',
                    template: "<div class=\"cmacs-kpi-overview-row\">\r\n  <div nz-col class=\"cmacs-kpi-overview-container\">\r\n    <div class=\"cmacs-kpi-overview-wrapper\">\r\n      <div class=\"cmacs-kpi-overview-count-wrapper\">\r\n        <div class=\"cmacs-kpi-overview-total-count\"></div>\r\n      </div>\r\n      <canvas #canvas class=\"cmacs-kpi-overview-chart\"></canvas>\r\n    </div>\r\n  </div>\r\n  <div nz-col class=\"cmacs-kpi-overview-legend-wrapper\">\r\n     <ng-container *ngTemplateOutlet=\"legend\"></ng-container>\r\n  </div>\r\n</div>\r\n<ng-template #legend>\r\n  <div class=\"cmacs-kpi-overview-title\">{{title}}</div>\r\n  <div\r\n    class=\"cmacs-kpi-legend-wrapper\"\r\n    *ngFor=\"let kpi of getColoredData(); index as i\"\r\n  >\r\n    <div class=\"cmacs-kpi-count\" [style.color]=\"kpi.color\"\r\n    [style.opacity]=\"sanitizeStyle(kpi.opacity)\">{{kpi.count}}</div>\r\n    <div class=\"cmacs-kpi-description\">{{kpi.description}}</div>\r\n  </div>\r\n</ng-template>",
                    styles: [":host{display:-webkit-box;display:flex;min-width:223px;min-height:120px;height:100%;padding:33px;background-color:#fff}.cmacs-kpi-overview-container{margin-right:25px}.cmacs-kpi-total-count{margin-right:10px;margin-top:-2px;-webkit-box-flex:0;flex:0 0 auto;font-weight:600;color:#3b4043}.border-radius-left{border-radius:100px 0 0 100px}.border-radius-right{border-radius:0 100px 100px 0}.cmacs-kpi-overview-row{display:-webkit-box;display:flex}.cmacs-kpi-overview-chart{position:relative;top:-31px}.cmacs-kpi-divider{display:inline-block;width:2px;height:9px;border-radius:100px;margin-right:8px}.cmacs-kpi-count{display:inline-block;font-family:Roboto-Regular;font-size:12px;font-weight:600;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#3b4043;margin-right:4px}.cmacs-kpi-description{display:inline-block;font-family:Roboto-Regular;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79}.cmacs-kpi-wrapper{display:-webkit-box;display:flex}.cmacs-kpi-overview-title{font-family:Roboto;font-size:14px;line-height:1.29;letter-spacing:normal;color:#3b3f46;margin-bottom:10px}.cmacs-kpi-overview-wrapper{margin-top:3px;margin-left:5px;height:30px;padding-top:25px}.cmacs-kpi-overview-total-count{position:relative;font-size:20px;font-weight:600;color:#3b4043;text-align:center;top:28px;z-index:100}.cmacs-kpi-overview-legend-wrapper{float:right;display:inline-block;margin:4px}"]
                }] }
    ];
    /** @nocollapse */
    CmacsKPIOverviewComponent.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    CmacsKPIOverviewComponent.propDecorators = {
        data: [{ type: Input }],
        title: [{ type: Input }],
        view: [{ type: Input }],
        colors: [{ type: Input }],
        canvasRef: [{ type: ViewChild, args: ['canvas', { read: ElementRef },] }]
    };
    return CmacsKPIOverviewComponent;
}());
export { CmacsKPIOverviewComponent };
if (false) {
    /** @type {?} */
    CmacsKPIOverviewComponent.prototype.data;
    /** @type {?} */
    CmacsKPIOverviewComponent.prototype.title;
    /** @type {?} */
    CmacsKPIOverviewComponent.prototype.view;
    /** @type {?} */
    CmacsKPIOverviewComponent.prototype.minWidth;
    /** @type {?} */
    CmacsKPIOverviewComponent.prototype.fontChartNumber;
    /** @type {?} */
    CmacsKPIOverviewComponent.prototype.chartWidth;
    /** @type {?} */
    CmacsKPIOverviewComponent.prototype.p;
    /** @type {?} */
    CmacsKPIOverviewComponent.prototype.type;
    /** @type {?} */
    CmacsKPIOverviewComponent.prototype.colors;
    /** @type {?} */
    CmacsKPIOverviewComponent.prototype.canvasRef;
    /**
     * @type {?}
     * @private
     */
    CmacsKPIOverviewComponent.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mta3Bpb3ZlcnZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1rcGlvdmVydmlldy9jbWFjcy1rcGlvdmVydmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUMxRyxPQUFPLEVBQU8sVUFBVSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXpEO0lBbUJFLG1DQUFvQixTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO1FBVDNDLGFBQVEsR0FBRyxHQUFHLENBQUM7UUFDZixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLE1BQUMsR0FBRyxDQUFDLENBQUM7UUFDTixTQUFJLEdBQUcsVUFBVSxDQUFDO1FBQ1QsV0FBTSxHQUFhLFVBQVUsQ0FBQztJQUlRLENBQUM7Ozs7SUFFaEQsK0NBQVc7OztJQUFYO1FBQUEsaUJBOERDO1FBN0RDLEVBQUU7UUFDRixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzFFO1FBRUQs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O2dCQUM3QixLQUFLLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7Z0JBQzlCLE9BQU8sRUFBRSxPQUFPO2FBQ2pCLENBQUMsQ0FBQztZQUVILE9BQU8sR0FBRyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBQ3hCLFFBQVEsRUFBRSxDQUFDO1FBQ2IsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDOztnQkExSkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLHk5QkFBaUQ7O2lCQUVsRDs7OztnQkFOUSxZQUFZOzs7dUJBU2xCLEtBQUs7d0JBQ0wsS0FBSzt1QkFDTCxLQUFLO3lCQU1MLEtBQUs7NEJBRUwsU0FBUyxTQUFDLFFBQVEsRUFBRSxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUM7O0lBMEl6QyxnQ0FBQztDQUFBLEFBM0pELElBMkpDO1NBdEpZLHlCQUF5Qjs7O0lBRXBDLHlDQUFxQjs7SUFDckIsMENBQXVCOztJQUN2Qix5Q0FBeUI7O0lBQ3pCLDZDQUFlOztJQUNmLG9EQUFxQjs7SUFDckIsK0NBQWdCOztJQUNoQixzQ0FBTTs7SUFDTix5Q0FBa0I7O0lBQ2xCLDJDQUF1Qzs7SUFFdkMsOENBQStEOzs7OztJQUVuRCw4Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEtQSSwgS1BJX0NPTE9SUyB9IGZyb20gJy4uL2NtYWNzLWtwaS9jbWFjcy1rcGkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWtwaS1vdmVydmlldycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWtwaW92ZXJ2aWV3LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1rcGlvdmVydmlldy5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzS1BJT3ZlcnZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG5cclxuICBASW5wdXQoKSBkYXRhOiBLUElbXTtcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHZpZXchOiBudW1iZXJbXTtcclxuICBtaW5XaWR0aCA9IDMwMDtcclxuICBmb250Q2hhcnROdW1iZXIgPSAyMDtcclxuICBjaGFydFdpZHRoID0gODQ7XHJcbiAgcCA9IDE7XHJcbiAgdHlwZSA9ICdkb3VnaG51dCc7XHJcbiAgQElucHV0KCkgY29sb3JzOiBzdHJpbmdbXSA9IEtQSV9DT0xPUlM7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2NhbnZhcycsIHtyZWFkOiBFbGVtZW50UmVmfSkgY2FudmFzUmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7IH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICAvL1xyXG4gICAgdGhpcy5wID0gMTtcclxuICAgIGlmICh0aGlzLnZpZXcgJiYgdGhpcy52aWV3Lmxlbmd0aCA9PT0gMikge1xyXG4gICAgICB0aGlzLnAgPSB0aGlzLnZpZXdbMF0gPiB0aGlzLm1pbldpZHRoID8gdGhpcy52aWV3WzBdIC8gdGhpcy5taW5XaWR0aCA6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmNhbnZhc1JlZikge1xyXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuY2FudmFzUmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gdGhpcy5jaGFydFdpZHRoICogdGhpcy5wO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLmNoYXJ0V2lkdGggKiB0aGlzLnA7XHJcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgICAgIGxldCBzdGFydEFuZ2xlID0gMDtcclxuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5nZXRDb2xvcmVkRGF0YSgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5nZXRUb3RhbENvdW50KCkgPiAwKSB7XHJcbiAgICAgICAgICBmb3IgKGNvbnN0IGNhdGVnIG9mIGRhdGEpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsID0gY2F0ZWcuY291bnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHNsaWNlQW5nbGUgPSAyICogTWF0aC5QSSAqIHZhbCAvIHRoaXMuZ2V0VG90YWxDb3VudCgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kcmF3UGllU2xpY2UoXHJcbiAgICAgICAgICAgICAgY3R4LFxyXG4gICAgICAgICAgICAgIGNhbnZhcy53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgY2FudmFzLmhlaWdodCAvIDIsXHJcbiAgICAgICAgICAgICAgTWF0aC5taW4oY2FudmFzLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIpLFxyXG4gICAgICAgICAgICAgIHN0YXJ0QW5nbGUsXHJcbiAgICAgICAgICAgICAgc3RhcnRBbmdsZSArIHNsaWNlQW5nbGUgLSAwLjA1LFxyXG4gICAgICAgICAgICAgIGNhdGVnLmNvbG9yXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHN0YXJ0QW5nbGUgKz0gc2xpY2VBbmdsZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5kcmF3UGllU2xpY2UoXHJcbiAgICAgICAgICAgIGN0eCxcclxuICAgICAgICAgICAgY2FudmFzLndpZHRoIC8gMixcclxuICAgICAgICAgICAgY2FudmFzLmhlaWdodCAvIDIsXHJcbiAgICAgICAgICAgIE1hdGgubWluKGNhbnZhcy53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyKSxcclxuICAgICAgICAgICAgc3RhcnRBbmdsZSxcclxuICAgICAgICAgICAgc3RhcnRBbmdsZSArIDIgKiBNYXRoLlBJLFxyXG4gICAgICAgICAgICAnI2RlZTBlNSdcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGRyYXdpbmcgYSB3aGl0ZSBjaXJjbGUgb3ZlciB0aGUgY2hhcnRcclxuICAgICAgICAvLyB0byBjcmVhdGUgdGhlIGRvdWdobnV0IGNoYXJ0XHJcbiAgICAgICAgdGhpcy5kcmF3UGllU2xpY2UoXHJcbiAgICAgICAgICBjdHgsXHJcbiAgICAgICAgICBjYW52YXMud2lkdGggLyAyLFxyXG4gICAgICAgICAgY2FudmFzLmhlaWdodCAvIDIsXHJcbiAgICAgICAgICAwLjggKiBNYXRoLm1pbihjYW52YXMud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMiksXHJcbiAgICAgICAgICAwLFxyXG4gICAgICAgICAgMiAqIE1hdGguUEksXHJcbiAgICAgICAgICAnI2ZmZmZmZidcclxuICAgICAgICApO1xyXG4gICAgICAgIC8vIGRyYXcgdmFsdWVcclxuICAgICAgICBjdHguZm9udCA9IHRoaXMuZm9udENoYXJ0TnVtYmVyICogdGhpcy5wICsgJ3B4IFJvYm90byAnO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAnIzNiM2Y0Nic7XHJcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xyXG4gICAgICAgIGN0eC5maWxsVGV4dCgnJyArIHRoaXMuZ2V0VG90YWxDb3VudCgpLCBjYW52YXMud2lkdGggLyAyLCBjYW52YXMud2lkdGggLyAyICsgNSk7XHJcbiAgICAgIH1cclxuICAgIH0sIDUwKTtcclxuICB9XHJcblxyXG4gIGRyYXdQaWVTbGljZShjdHg6IGFueSwgY2VudGVyWDogbnVtYmVyLCBjZW50ZXJZOiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBzdGFydEFuZ2xlOiBudW1iZXIsIGVuZEFuZ2xlOiBudW1iZXIsIGNvbG9yOiBhbnkgKXtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5tb3ZlVG8oY2VudGVyWCwgY2VudGVyWSk7XHJcbiAgICBjdHguYXJjKGNlbnRlclgsIGNlbnRlclksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUpO1xyXG4gICAgY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgY3R4LmZpbGwoKTtcclxuICB9XHJcblxyXG4gIGRyYXdBcmMoY3R4OiBhbnksIGNlbnRlclg6IG51bWJlciwgY2VudGVyWTogbnVtYmVyLCByYWRpdXM6IG51bWJlciwgc3RhcnRBbmdsZTogbnVtYmVyLCBlbmRBbmdsZTogbnVtYmVyKSB7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHguYXJjKGNlbnRlclgsIGNlbnRlclksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUpO1xyXG4gICAgY3R4LnN0cm9rZSgpO1xyXG4gIH1cclxuXHJcbiAgc2FuaXRpemVTdHlsZShzdHlsZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKHN0eWxlKTtcclxuICB9XHJcblxyXG4gIGdldFRvdGFsQ291bnQoKSB7XHJcbiAgICBsZXQgdG90YWwgPSAwO1xyXG4gICAgdGhpcy5kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgdG90YWwgKz0gaXRlbS5jb3VudDtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRvdGFsO1xyXG4gIH1cclxuXHJcbiAgZ2V0V2lkdGgoY291bnQ6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIGNvdW50ICE9PSAwID8gTWF0aC50cnVuYyhjb3VudCAqIDEwMCAvIHRoaXMuZ2V0VG90YWxDb3VudCgpKSAtIDIgOiAwO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29sb3JlZERhdGEoKSB7XHJcbiAgICBjb25zdCBjb2xvcmVkRGF0YTogYW55ID0gW107XHJcbiAgICBjb25zdCByZW1haW5pbmcgPSB0aGlzLmRhdGEubGVuZ3RoICUgdGhpcy5jb2xvcnMubGVuZ3RoO1xyXG4gICAgbGV0IHJhdGUgPSB0aGlzLmRhdGEubGVuZ3RoIC8gdGhpcy5jb2xvcnMubGVuZ3RoO1xyXG4gICAgaWYgKHJlbWFpbmluZyA+IDApIHtcclxuICAgICAgcmF0ZSA9IE1hdGgudHJ1bmMocmF0ZSkgKyAxO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB0ZW1wUmF0ZSA9IHJhdGU7XHJcbiAgICBsZXQgb3BhY2l0eSA9IDE7XHJcbiAgICBsZXQgY29sb3JJbmRleCA9IDA7XHJcbiAgICB0aGlzLmRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBpZiAodGVtcFJhdGUgPT09IDApIHtcclxuICAgICAgICB0ZW1wUmF0ZSA9IHJhdGU7XHJcbiAgICAgICAgY29sb3JJbmRleCArPSAxO1xyXG4gICAgICAgIG9wYWNpdHkgPSAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoY29sb3JJbmRleCA+PSB0aGlzLmNvbG9ycy5sZW5ndGgpIHtcclxuICAgICAgICBjb2xvckluZGV4ID0gMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG9wYWNpdHkgPT09IDAuNCkge1xyXG4gICAgICAgIG9wYWNpdHkgPSAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb2xvcmVkRGF0YS5wdXNoKHtcclxuICAgICAgICBjb3VudDogaXRlbS5jb3VudCxcclxuICAgICAgICBkZXNjcmlwdGlvbjogaXRlbS5kZXNjcmlwdGlvbixcclxuICAgICAgICBjb2xvcjogdGhpcy5jb2xvcnNbY29sb3JJbmRleF0sXHJcbiAgICAgICAgb3BhY2l0eTogb3BhY2l0eVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIG9wYWNpdHkgPSBvcGFjaXR5IC0gMC4yO1xyXG4gICAgICB0ZW1wUmF0ZS0tO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGNvbG9yZWREYXRhO1xyXG4gIH1cclxufVxyXG4iXX0=