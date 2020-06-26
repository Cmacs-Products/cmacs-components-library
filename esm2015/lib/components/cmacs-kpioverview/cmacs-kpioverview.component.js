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
                ctx.fillText('' + this.getTotalCount(), canvas.width / 2, canvas.width / 2 + 8);
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
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
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
                template: "<div class=\"cmacs-kpi-overview-row\">\r\n  <div nz-col class=\"cmacs-kpi-overview-container\">\r\n    <div class=\"cmacs-kpi-overview-wrapper\">\r\n      <div class=\"cmacs-kpi-overview-count-wrapper\">\r\n        <div class=\"cmacs-kpi-overview-total-count\"></div>\r\n      </div>\r\n      <canvas #canvas class=\"cmacs-kpi-overview-chart\"></canvas>\r\n    </div>\r\n  </div>\r\n  <div nz-col class=\"cmacs-kpi-overview-legend-wrapper\">\r\n     <ng-container *ngTemplateOutlet=\"legend\"></ng-container>\r\n  </div>\r\n</div>\r\n<ng-template #legend>\r\n  <div class=\"cmacs-kpi-overview-title\">{{title}}</div>\r\n  <div\r\n    class=\"cmacs-kpi-legend-wrapper\"\r\n    *ngFor=\"let kpi of getColoredData(); index as i\"\r\n  >\r\n    <div class=\"cmacs-kpi-count\" [style.color]=\"kpi.color\"\r\n    [style.opacity]=\"sanitizeStyle(kpi.opacity)\">{{kpi.count}}</div>\r\n    <div class=\"cmacs-kpi-description\">{{kpi.description}}</div>\r\n  </div>\r\n</ng-template>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mta3Bpb3ZlcnZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1rcGlvdmVydmlldy9jbWFjcy1rcGlvdmVydmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQzFHLE9BQU8sRUFBTyxVQUFVLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFPekQsTUFBTSxPQUFPLHlCQUF5Qjs7OztJQWNwQyxZQUFvQixTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO1FBVDNDLGFBQVEsR0FBRyxHQUFHLENBQUM7UUFDZixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLE1BQUMsR0FBRyxDQUFDLENBQUM7UUFDTixTQUFJLEdBQUcsVUFBVSxDQUFDO1FBQ1QsV0FBTSxHQUFhLFVBQVUsQ0FBQztJQUlRLENBQUM7Ozs7SUFFaEQsV0FBVztRQUNULEVBQUU7UUFDRixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzFFO1FBRUQsVUFB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T0FBTyxFQUFFLE9BQU87YUFDakIsQ0FBQyxDQUFDO1lBRUgsT0FBTyxHQUFHLE9BQU8sR0FBRyxHQUFHLENBQUM7WUFDeEIsUUFBUSxFQUFFLENBQUM7UUFDYixDQUFDLEVBQUMsQ0FBQztRQUVILE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7OztZQTFKRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIseTlCQUFpRDs7YUFFbEQ7Ozs7WUFOUSxZQUFZOzs7bUJBU2xCLEtBQUs7b0JBQ0wsS0FBSzttQkFDTCxLQUFLO3FCQU1MLEtBQUs7d0JBRUwsU0FBUyxTQUFDLFFBQVEsRUFBRSxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUM7Ozs7SUFWdkMseUNBQXFCOztJQUNyQiwwQ0FBdUI7O0lBQ3ZCLHlDQUF5Qjs7SUFDekIsNkNBQWU7O0lBQ2Ysb0RBQXFCOztJQUNyQiwrQ0FBZ0I7O0lBQ2hCLHNDQUFNOztJQUNOLHlDQUFrQjs7SUFDbEIsMkNBQXVDOztJQUV2Qyw4Q0FBK0Q7Ozs7O0lBRW5ELDhDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgS1BJLCBLUElfQ09MT1JTIH0gZnJvbSAnLi4vY21hY3Mta3BpL2NtYWNzLWtwaS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3Mta3BpLW92ZXJ2aWV3JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mta3Bpb3ZlcnZpZXcuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWtwaW92ZXJ2aWV3LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NLUElPdmVydmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcblxyXG4gIEBJbnB1dCgpIGRhdGE6IEtQSVtdO1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdmlldyE6IG51bWJlcltdO1xyXG4gIG1pbldpZHRoID0gMzAwO1xyXG4gIGZvbnRDaGFydE51bWJlciA9IDIwO1xyXG4gIGNoYXJ0V2lkdGggPSA4NDtcclxuICBwID0gMTtcclxuICB0eXBlID0gJ2RvdWdobnV0JztcclxuICBASW5wdXQoKSBjb2xvcnM6IHN0cmluZ1tdID0gS1BJX0NPTE9SUztcclxuXHJcbiAgQFZpZXdDaGlsZCgnY2FudmFzJywge3JlYWQ6IEVsZW1lbnRSZWZ9KSBjYW52YXNSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHsgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpIHtcclxuICAgIC8vXHJcbiAgICB0aGlzLnAgPSAxO1xyXG4gICAgaWYgKHRoaXMudmlldyAmJiB0aGlzLnZpZXcubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgIHRoaXMucCA9IHRoaXMudmlld1swXSA+IHRoaXMubWluV2lkdGggPyB0aGlzLnZpZXdbMF0gLyB0aGlzLm1pbldpZHRoIDogMTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuY2FudmFzUmVmKSB7XHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5jYW52YXNSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgICAgICBjYW52YXMud2lkdGggPSB0aGlzLmNoYXJ0V2lkdGggKiB0aGlzLnA7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHRoaXMuY2hhcnRXaWR0aCAqIHRoaXMucDtcclxuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICAgICAgbGV0IHN0YXJ0QW5nbGUgPSAwO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldENvbG9yZWREYXRhKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0VG90YWxDb3VudCgpID4gMCkge1xyXG4gICAgICAgICAgZm9yIChjb25zdCBjYXRlZyBvZiBkYXRhKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IGNhdGVnLmNvdW50O1xyXG4gICAgICAgICAgICBjb25zdCBzbGljZUFuZ2xlID0gMiAqIE1hdGguUEkgKiB2YWwgLyB0aGlzLmdldFRvdGFsQ291bnQoKTtcclxuICAgICAgICAgICAgaWYgKHNsaWNlQW5nbGUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5kcmF3UGllU2xpY2UoXHJcbiAgICAgICAgICAgICAgICBjdHgsXHJcbiAgICAgICAgICAgICAgICBjYW52YXMud2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgICAgY2FudmFzLmhlaWdodCAvIDIsXHJcbiAgICAgICAgICAgICAgICBNYXRoLm1pbihjYW52YXMud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMiksXHJcbiAgICAgICAgICAgICAgICBzdGFydEFuZ2xlLFxyXG4gICAgICAgICAgICAgICAgc3RhcnRBbmdsZSArIHNsaWNlQW5nbGUgLSAwLjA1LFxyXG4gICAgICAgICAgICAgICAgY2F0ZWcuY29sb3JcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIHN0YXJ0QW5nbGUgKz0gc2xpY2VBbmdsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmRyYXdQaWVTbGljZShcclxuICAgICAgICAgICAgY3R4LFxyXG4gICAgICAgICAgICBjYW52YXMud2lkdGggLyAyLFxyXG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0IC8gMixcclxuICAgICAgICAgICAgTWF0aC5taW4oY2FudmFzLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIpLFxyXG4gICAgICAgICAgICBzdGFydEFuZ2xlLFxyXG4gICAgICAgICAgICBzdGFydEFuZ2xlICsgMiAqIE1hdGguUEksXHJcbiAgICAgICAgICAgICcjZGVlMGU1J1xyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZHJhd2luZyBhIHdoaXRlIGNpcmNsZSBvdmVyIHRoZSBjaGFydFxyXG4gICAgICAgIC8vIHRvIGNyZWF0ZSB0aGUgZG91Z2hudXQgY2hhcnRcclxuICAgICAgICB0aGlzLmRyYXdQaWVTbGljZShcclxuICAgICAgICAgIGN0eCxcclxuICAgICAgICAgIGNhbnZhcy53aWR0aCAvIDIsXHJcbiAgICAgICAgICBjYW52YXMuaGVpZ2h0IC8gMixcclxuICAgICAgICAgIDAuOCAqIE1hdGgubWluKGNhbnZhcy53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyKSxcclxuICAgICAgICAgIDAsXHJcbiAgICAgICAgICAyICogTWF0aC5QSSxcclxuICAgICAgICAgICcjZmZmZmZmJ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgLy8gZHJhdyB2YWx1ZVxyXG4gICAgICAgIGN0eC5mb250ID0gdGhpcy5mb250Q2hhcnROdW1iZXIgKiB0aGlzLnAgKyAncHggUm9ib3RvLVJlZ3VsYXIgJztcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gJyMzYjNmNDYnO1xyXG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcclxuICAgICAgICBjdHguZmlsbFRleHQoJycgKyB0aGlzLmdldFRvdGFsQ291bnQoKSwgY2FudmFzLndpZHRoIC8gMiwgY2FudmFzLndpZHRoIC8gMiArIDgpO1xyXG4gICAgICB9XHJcbiAgICB9LCA1MCk7XHJcbiAgfVxyXG5cclxuICBkcmF3UGllU2xpY2UoY3R4OiBhbnksIGNlbnRlclg6IG51bWJlciwgY2VudGVyWTogbnVtYmVyLCByYWRpdXM6IG51bWJlciwgc3RhcnRBbmdsZTogbnVtYmVyLCBlbmRBbmdsZTogbnVtYmVyLCBjb2xvcjogYW55ICl7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHgubW92ZVRvKGNlbnRlclgsIGNlbnRlclkpO1xyXG4gICAgY3R4LmFyYyhjZW50ZXJYLCBjZW50ZXJZLCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlKTtcclxuICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuICAgIGN0eC5maWxsKCk7XHJcbiAgfVxyXG5cclxuICBkcmF3QXJjKGN0eDogYW55LCBjZW50ZXJYOiBudW1iZXIsIGNlbnRlclk6IG51bWJlciwgcmFkaXVzOiBudW1iZXIsIHN0YXJ0QW5nbGU6IG51bWJlciwgZW5kQW5nbGU6IG51bWJlcikge1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4LmFyYyhjZW50ZXJYLCBjZW50ZXJZLCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlKTtcclxuICAgIGN0eC5zdHJva2UoKTtcclxuICB9XHJcblxyXG4gIHNhbml0aXplU3R5bGUoc3R5bGU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShzdHlsZSk7XHJcbiAgfVxyXG5cclxuICBnZXRUb3RhbENvdW50KCkge1xyXG4gICAgbGV0IHRvdGFsID0gMDtcclxuICAgIHRoaXMuZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIHRvdGFsICs9IGl0ZW0uY291bnQ7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0b3RhbDtcclxuICB9XHJcblxyXG4gIGdldFdpZHRoKGNvdW50OiBudW1iZXIpIHtcclxuICAgIHJldHVybiBjb3VudCAhPT0gMCA/IE1hdGgudHJ1bmMoY291bnQgKiAxMDAgLyB0aGlzLmdldFRvdGFsQ291bnQoKSkgLSAyIDogMDtcclxuICB9XHJcblxyXG4gIGdldENvbG9yZWREYXRhKCkge1xyXG4gICAgY29uc3QgY29sb3JlZERhdGE6IGFueSA9IFtdO1xyXG4gICAgY29uc3QgcmVtYWluaW5nID0gdGhpcy5kYXRhLmxlbmd0aCAlIHRoaXMuY29sb3JzLmxlbmd0aDtcclxuICAgIGxldCByYXRlID0gdGhpcy5kYXRhLmxlbmd0aCAvIHRoaXMuY29sb3JzLmxlbmd0aDtcclxuICAgIGlmIChyZW1haW5pbmcgPiAwKSB7XHJcbiAgICAgIHJhdGUgPSBNYXRoLnRydW5jKHJhdGUpICsgMTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgdGVtcFJhdGUgPSByYXRlO1xyXG4gICAgbGV0IG9wYWNpdHkgPSAxO1xyXG4gICAgbGV0IGNvbG9ySW5kZXggPSAwO1xyXG4gICAgdGhpcy5kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgaWYgKHRlbXBSYXRlID09PSAwKSB7XHJcbiAgICAgICAgdGVtcFJhdGUgPSByYXRlO1xyXG4gICAgICAgIGNvbG9ySW5kZXggKz0gMTtcclxuICAgICAgICBvcGFjaXR5ID0gMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNvbG9ySW5kZXggPj0gdGhpcy5jb2xvcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgY29sb3JJbmRleCA9IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChvcGFjaXR5ID09PSAwLjQpIHtcclxuICAgICAgICBvcGFjaXR5ID0gMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29sb3JlZERhdGEucHVzaCh7XHJcbiAgICAgICAgY291bnQ6IGl0ZW0uY291bnQsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGl0ZW0uZGVzY3JpcHRpb24sXHJcbiAgICAgICAgY29sb3I6IHRoaXMuY29sb3JzW2NvbG9ySW5kZXhdLFxyXG4gICAgICAgIG9wYWNpdHk6IG9wYWNpdHlcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBvcGFjaXR5ID0gb3BhY2l0eSAtIDAuMjtcclxuICAgICAgdGVtcFJhdGUtLTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjb2xvcmVkRGF0YTtcclxuICB9XHJcbn1cclxuIl19