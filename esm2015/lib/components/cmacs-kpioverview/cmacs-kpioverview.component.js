/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { KPI_COLORS } from '../cmacs-kpi/cmacs-kpi.component';
import { DomSanitizer } from '@angular/platform-browser';
export class CmacsKPIOverviewComponent {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.fixed = 0;
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
    ngOnChanges() {
        //
        this.p = 1;
        if (this.view && this.view.length === 2) {
            this.p = this.view[0] > this.minWidth ? this.view[0] / this.minWidth : 1;
        }
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.canvasRef) {
                /** @type {?} */
                const canvas = (/** @type {?} */ (this.canvasRef.nativeElement));
                canvas.width = this.chartWidth * this.p;
                canvas.height = this.chartWidth * this.p;
                /** @type {?} */
                const ctx = canvas.getContext('2d');
                /** @type {?} */
                let startAngle = 0;
                /** @type {?} */
                const data = this.getColoredData();
                if (this.getTotalCount() > 0) {
                    for (const categ of data) {
                        /** @type {?} */
                        const val = categ.count;
                        /** @type {?} */
                        const sliceAngle = 2 * Math.PI * val / this.getTotalCount();
                        if (sliceAngle > 0) {
                            this.drawPieSlice(ctx, canvas.width / 2, canvas.height / 2, Math.min(canvas.width / 2, canvas.height / 2), startAngle, startAngle + sliceAngle - 0.05, categ.color);
                            startAngle += sliceAngle;
                        }
                    }
                }
                else {
                    this.drawPieSlice(ctx, canvas.width / 2, canvas.height / 2, Math.min(canvas.width / 2, canvas.height / 2), startAngle, startAngle + 2 * Math.PI, '#dee0e5');
                }
                // drawing a white circle over the chart
                // to create the doughnut chart
                this.drawPieSlice(ctx, canvas.width / 2, canvas.height / 2, 0.8 * Math.min(canvas.width / 2, canvas.height / 2), 0, 2 * Math.PI, '#ffffff');
                // draw value
                ctx.font = this.fontChartNumber * this.p + 'px Roboto-Regular ';
                ctx.fillStyle = '#3b3f46';
                ctx.textAlign = 'center';
                ctx.fillText(this.getTotalCount().toFixed(this.fixed), canvas.width / 2, canvas.width / 2 + 8);
            }
        }), 50);
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
        /** @type {?} */
        const coloredData = [];
        /** @type {?} */
        const remaining = this.data.length % this.colors.length;
        /** @type {?} */
        let rate = this.data.length / this.colors.length;
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
            if (colorIndex >= this.colors.length) {
                colorIndex = 0;
            }
            if (opacity === 0.4) {
                opacity = 1;
            }
            coloredData.push({
                count: item.count,
                description: item.description,
                color: this.colors[colorIndex],
                opacity: opacity
            });
            opacity = opacity - 0.2;
            tempRate--;
        }));
        return coloredData;
    }
}
CmacsKPIOverviewComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmacs-kpi-overview',
                template: "<div class=\"cmacs-kpi-overview-row\">\r\n  <div nz-col class=\"cmacs-kpi-overview-container\">\r\n    <div class=\"cmacs-kpi-overview-wrapper\">\r\n      <div class=\"cmacs-kpi-overview-count-wrapper\">\r\n        <div class=\"cmacs-kpi-overview-total-count\"></div>\r\n      </div>\r\n      <canvas #canvas class=\"cmacs-kpi-overview-chart\"></canvas>\r\n    </div>\r\n  </div>\r\n  <div nz-col class=\"cmacs-kpi-overview-legend-wrapper\">\r\n     <ng-container *ngTemplateOutlet=\"legend\"></ng-container>\r\n  </div>\r\n</div>\r\n<ng-template #legend>\r\n  <div class=\"cmacs-kpi-overview-title\">{{title}}</div>\r\n  <div\r\n    class=\"cmacs-kpi-legend-wrapper\"\r\n    *ngFor=\"let kpi of getColoredData(); index as i\"\r\n  >\r\n    <div class=\"cmacs-kpi-count\" [style.color]=\"kpi.color\"\r\n    [style.opacity]=\"sanitizeStyle(kpi.opacity)\">{{kpi.count.toFixed(fixed)}}</div>\r\n    <div class=\"cmacs-kpi-description\">{{kpi.description}}</div>\r\n  </div>\r\n</ng-template>",
                styles: [":host{display:-webkit-box;display:flex;min-width:223px;min-height:120px;height:100%;padding:33px;background-color:#fff}.cmacs-kpi-overview-container{margin-right:25px}.cmacs-kpi-total-count{margin-right:10px;margin-top:-2px;-webkit-box-flex:0;flex:0 0 auto;font-weight:600;color:#3b4043}.border-radius-left{border-radius:100px 0 0 100px}.border-radius-right{border-radius:0 100px 100px 0}.cmacs-kpi-overview-row{display:-webkit-box;display:flex}.cmacs-kpi-overview-chart{position:relative;top:-31px}.cmacs-kpi-divider{display:inline-block;width:2px;height:9px;border-radius:100px;margin-right:8px}.cmacs-kpi-count{display:inline-block;font-family:Roboto-Regular;font-size:12px;font-weight:600;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#3b4043;margin-right:4px;min-width:20px}.cmacs-kpi-description{display:inline-block;font-family:Roboto-Regular;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79}.cmacs-kpi-wrapper{display:-webkit-box;display:flex}.cmacs-kpi-overview-title{font-family:Roboto-Regular;font-size:14px;line-height:1.29;letter-spacing:normal;color:#3b3f46;margin-bottom:10px;font-weight:700}.cmacs-kpi-overview-wrapper{margin-top:3px;margin-left:5px;height:30px;padding-top:25px}.cmacs-kpi-overview-total-count{position:relative;font-size:20px;font-weight:600;color:#3b4043;text-align:center;top:28px;z-index:100}.cmacs-kpi-overview-legend-wrapper{float:right;display:inline-block;margin:4px}"]
            }] }
];
/** @nocollapse */
CmacsKPIOverviewComponent.ctorParameters = () => [
    { type: DomSanitizer }
];
CmacsKPIOverviewComponent.propDecorators = {
    data: [{ type: Input }],
    title: [{ type: Input }],
    view: [{ type: Input }],
    fixed: [{ type: Input }],
    colors: [{ type: Input }],
    canvasRef: [{ type: ViewChild, args: ['canvas', { read: ElementRef },] }]
};
if (false) {
    /** @type {?} */
    CmacsKPIOverviewComponent.prototype.data;
    /** @type {?} */
    CmacsKPIOverviewComponent.prototype.title;
    /** @type {?} */
    CmacsKPIOverviewComponent.prototype.view;
    /** @type {?} */
    CmacsKPIOverviewComponent.prototype.fixed;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mta3Bpb3ZlcnZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1rcGlvdmVydmlldy9jbWFjcy1rcGlvdmVydmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQzFHLE9BQU8sRUFBTyxVQUFVLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFPekQsTUFBTSxPQUFPLHlCQUF5Qjs7OztJQWVwQyxZQUFvQixTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO1FBVmxDLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDbkIsYUFBUSxHQUFHLEdBQUcsQ0FBQztRQUNmLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsTUFBQyxHQUFHLENBQUMsQ0FBQztRQUNOLFNBQUksR0FBRyxVQUFVLENBQUM7UUFDVCxXQUFNLEdBQWEsVUFBVSxDQUFDO0lBSVEsQ0FBQzs7OztJQUVoRCxXQUFXO1FBQ1QsRUFBRTtRQUNGLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FB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QUFDO2dCQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDakIsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO2dCQUM3QixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7Z0JBQzlCLE9BQU8sRUFBRSxPQUFPO2FBQ2pCLENBQUMsQ0FBQztZQUVILE9BQU8sR0FBRyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBQ3hCLFFBQVEsRUFBRSxDQUFDO1FBQ2IsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDOzs7WUEzSkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLHcrQkFBaUQ7O2FBRWxEOzs7O1lBTlEsWUFBWTs7O21CQVNsQixLQUFLO29CQUNMLEtBQUs7bUJBQ0wsS0FBSztvQkFDTCxLQUFLO3FCQU1MLEtBQUs7d0JBRUwsU0FBUyxTQUFDLFFBQVEsRUFBRSxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUM7Ozs7SUFYdkMseUNBQXFCOztJQUNyQiwwQ0FBdUI7O0lBQ3ZCLHlDQUF5Qjs7SUFDekIsMENBQW1COztJQUNuQiw2Q0FBZTs7SUFDZixvREFBcUI7O0lBQ3JCLCtDQUFnQjs7SUFDaEIsc0NBQU07O0lBQ04seUNBQWtCOztJQUNsQiwyQ0FBdUM7O0lBRXZDLDhDQUErRDs7Ozs7SUFFbkQsOENBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBLUEksIEtQSV9DT0xPUlMgfSBmcm9tICcuLi9jbWFjcy1rcGkvY21hY3Mta3BpLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1rcGktb3ZlcnZpZXcnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1rcGlvdmVydmlldy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3Mta3Bpb3ZlcnZpZXcuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0tQSU92ZXJ2aWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuXHJcbiAgQElucHV0KCkgZGF0YTogS1BJW107XHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcclxuICBASW5wdXQoKSB2aWV3ITogbnVtYmVyW107XHJcbiAgQElucHV0KCkgZml4ZWQgPSAwO1xyXG4gIG1pbldpZHRoID0gMzAwO1xyXG4gIGZvbnRDaGFydE51bWJlciA9IDIwO1xyXG4gIGNoYXJ0V2lkdGggPSA4NDtcclxuICBwID0gMTtcclxuICB0eXBlID0gJ2RvdWdobnV0JztcclxuICBASW5wdXQoKSBjb2xvcnM6IHN0cmluZ1tdID0gS1BJX0NPTE9SUztcclxuXHJcbiAgQFZpZXdDaGlsZCgnY2FudmFzJywge3JlYWQ6IEVsZW1lbnRSZWZ9KSBjYW52YXNSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHsgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpIHtcclxuICAgIC8vXHJcbiAgICB0aGlzLnAgPSAxO1xyXG4gICAgaWYgKHRoaXMudmlldyAmJiB0aGlzLnZpZXcubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgIHRoaXMucCA9IHRoaXMudmlld1swXSA+IHRoaXMubWluV2lkdGggPyB0aGlzLnZpZXdbMF0gLyB0aGlzLm1pbldpZHRoIDogMTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuY2FudmFzUmVmKSB7XHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5jYW52YXNSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgICAgICBjYW52YXMud2lkdGggPSB0aGlzLmNoYXJ0V2lkdGggKiB0aGlzLnA7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHRoaXMuY2hhcnRXaWR0aCAqIHRoaXMucDtcclxuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICAgICAgbGV0IHN0YXJ0QW5nbGUgPSAwO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldENvbG9yZWREYXRhKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0VG90YWxDb3VudCgpID4gMCkge1xyXG4gICAgICAgICAgZm9yIChjb25zdCBjYXRlZyBvZiBkYXRhKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IGNhdGVnLmNvdW50O1xyXG4gICAgICAgICAgICBjb25zdCBzbGljZUFuZ2xlID0gMiAqIE1hdGguUEkgKiB2YWwgLyB0aGlzLmdldFRvdGFsQ291bnQoKTtcclxuICAgICAgICAgICAgaWYgKHNsaWNlQW5nbGUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5kcmF3UGllU2xpY2UoXHJcbiAgICAgICAgICAgICAgICBjdHgsXHJcbiAgICAgICAgICAgICAgICBjYW52YXMud2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgICAgY2FudmFzLmhlaWdodCAvIDIsXHJcbiAgICAgICAgICAgICAgICBNYXRoLm1pbihjYW52YXMud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMiksXHJcbiAgICAgICAgICAgICAgICBzdGFydEFuZ2xlLFxyXG4gICAgICAgICAgICAgICAgc3RhcnRBbmdsZSArIHNsaWNlQW5nbGUgLSAwLjA1LFxyXG4gICAgICAgICAgICAgICAgY2F0ZWcuY29sb3JcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIHN0YXJ0QW5nbGUgKz0gc2xpY2VBbmdsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmRyYXdQaWVTbGljZShcclxuICAgICAgICAgICAgY3R4LFxyXG4gICAgICAgICAgICBjYW52YXMud2lkdGggLyAyLFxyXG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0IC8gMixcclxuICAgICAgICAgICAgTWF0aC5taW4oY2FudmFzLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIpLFxyXG4gICAgICAgICAgICBzdGFydEFuZ2xlLFxyXG4gICAgICAgICAgICBzdGFydEFuZ2xlICsgMiAqIE1hdGguUEksXHJcbiAgICAgICAgICAgICcjZGVlMGU1J1xyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZHJhd2luZyBhIHdoaXRlIGNpcmNsZSBvdmVyIHRoZSBjaGFydFxyXG4gICAgICAgIC8vIHRvIGNyZWF0ZSB0aGUgZG91Z2hudXQgY2hhcnRcclxuICAgICAgICB0aGlzLmRyYXdQaWVTbGljZShcclxuICAgICAgICAgIGN0eCxcclxuICAgICAgICAgIGNhbnZhcy53aWR0aCAvIDIsXHJcbiAgICAgICAgICBjYW52YXMuaGVpZ2h0IC8gMixcclxuICAgICAgICAgIDAuOCAqIE1hdGgubWluKGNhbnZhcy53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyKSxcclxuICAgICAgICAgIDAsXHJcbiAgICAgICAgICAyICogTWF0aC5QSSxcclxuICAgICAgICAgICcjZmZmZmZmJ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgLy8gZHJhdyB2YWx1ZVxyXG4gICAgICAgIGN0eC5mb250ID0gdGhpcy5mb250Q2hhcnROdW1iZXIgKiB0aGlzLnAgKyAncHggUm9ib3RvLVJlZ3VsYXIgJztcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gJyMzYjNmNDYnO1xyXG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcclxuICAgICAgICBjdHguZmlsbFRleHQodGhpcy5nZXRUb3RhbENvdW50KCkudG9GaXhlZCh0aGlzLmZpeGVkKSwgY2FudmFzLndpZHRoIC8gMiwgY2FudmFzLndpZHRoIC8gMiArIDgpO1xyXG4gICAgICB9XHJcbiAgICB9LCA1MCk7XHJcbiAgfVxyXG5cclxuICBkcmF3UGllU2xpY2UoY3R4OiBhbnksIGNlbnRlclg6IG51bWJlciwgY2VudGVyWTogbnVtYmVyLCByYWRpdXM6IG51bWJlciwgc3RhcnRBbmdsZTogbnVtYmVyLCBlbmRBbmdsZTogbnVtYmVyLCBjb2xvcjogYW55ICl7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHgubW92ZVRvKGNlbnRlclgsIGNlbnRlclkpO1xyXG4gICAgY3R4LmFyYyhjZW50ZXJYLCBjZW50ZXJZLCByYWRpdXMsIHN0YXJ0QW5nbGUgLSBNYXRoLlBJIC8gMiwgZW5kQW5nbGUgLSBNYXRoLlBJIC8gMiwgZmFsc2UpO1xyXG4gICAgY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgY3R4LmZpbGwoKTtcclxuICB9XHJcblxyXG4gIGRyYXdBcmMoY3R4OiBhbnksIGNlbnRlclg6IG51bWJlciwgY2VudGVyWTogbnVtYmVyLCByYWRpdXM6IG51bWJlciwgc3RhcnRBbmdsZTogbnVtYmVyLCBlbmRBbmdsZTogbnVtYmVyKSB7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHguYXJjKGNlbnRlclgsIGNlbnRlclksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUpO1xyXG4gICAgY3R4LnN0cm9rZSgpO1xyXG4gIH1cclxuXHJcbiAgc2FuaXRpemVTdHlsZShzdHlsZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKHN0eWxlKTtcclxuICB9XHJcblxyXG4gIGdldFRvdGFsQ291bnQoKSB7XHJcbiAgICBsZXQgdG90YWwgPSAwO1xyXG4gICAgdGhpcy5kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgdG90YWwgKz0gaXRlbS5jb3VudDtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRvdGFsO1xyXG4gIH1cclxuXHJcbiAgZ2V0V2lkdGgoY291bnQ6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIGNvdW50ICE9PSAwID8gTWF0aC50cnVuYyhjb3VudCAqIDEwMCAvIHRoaXMuZ2V0VG90YWxDb3VudCgpKSAtIDIgOiAwO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29sb3JlZERhdGEoKSB7XHJcbiAgICBjb25zdCBjb2xvcmVkRGF0YTogYW55ID0gW107XHJcbiAgICBjb25zdCByZW1haW5pbmcgPSB0aGlzLmRhdGEubGVuZ3RoICUgdGhpcy5jb2xvcnMubGVuZ3RoO1xyXG4gICAgbGV0IHJhdGUgPSB0aGlzLmRhdGEubGVuZ3RoIC8gdGhpcy5jb2xvcnMubGVuZ3RoO1xyXG4gICAgaWYgKHJlbWFpbmluZyA+IDApIHtcclxuICAgICAgcmF0ZSA9IE1hdGgudHJ1bmMocmF0ZSkgKyAxO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB0ZW1wUmF0ZSA9IHJhdGU7XHJcbiAgICBsZXQgb3BhY2l0eSA9IDE7XHJcbiAgICBsZXQgY29sb3JJbmRleCA9IDA7XHJcbiAgICB0aGlzLmRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBpZiAodGVtcFJhdGUgPT09IDApIHtcclxuICAgICAgICB0ZW1wUmF0ZSA9IHJhdGU7XHJcbiAgICAgICAgY29sb3JJbmRleCArPSAxO1xyXG4gICAgICAgIG9wYWNpdHkgPSAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoY29sb3JJbmRleCA+PSB0aGlzLmNvbG9ycy5sZW5ndGgpIHtcclxuICAgICAgICBjb2xvckluZGV4ID0gMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG9wYWNpdHkgPT09IDAuNCkge1xyXG4gICAgICAgIG9wYWNpdHkgPSAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb2xvcmVkRGF0YS5wdXNoKHtcclxuICAgICAgICBjb3VudDogaXRlbS5jb3VudCxcclxuICAgICAgICBkZXNjcmlwdGlvbjogaXRlbS5kZXNjcmlwdGlvbixcclxuICAgICAgICBjb2xvcjogdGhpcy5jb2xvcnNbY29sb3JJbmRleF0sXHJcbiAgICAgICAgb3BhY2l0eTogb3BhY2l0eVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIG9wYWNpdHkgPSBvcGFjaXR5IC0gMC4yO1xyXG4gICAgICB0ZW1wUmF0ZS0tO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGNvbG9yZWREYXRhO1xyXG4gIH1cclxufVxyXG4iXX0=