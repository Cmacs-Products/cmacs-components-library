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
                        this.drawPieSlice(ctx, canvas.width / 2, canvas.height / 2, Math.min(canvas.width / 2, canvas.height / 2), startAngle, startAngle + sliceAngle - 0.05, categ.color);
                        startAngle += sliceAngle;
                    }
                }
                else {
                    this.drawPieSlice(ctx, canvas.width / 2, canvas.height / 2, Math.min(canvas.width / 2, canvas.height / 2), startAngle, startAngle + 2 * Math.PI, '#dee0e5');
                }
                // drawing a white circle over the chart
                // to create the doughnut chart
                this.drawPieSlice(ctx, canvas.width / 2, canvas.height / 2, 0.8 * Math.min(canvas.width / 2, canvas.height / 2), 0, 2 * Math.PI, '#ffffff');
                // draw value
                ctx.font = this.fontChartNumber * this.p + 'px Roboto ';
                ctx.fillStyle = '#3b3f46';
                ctx.textAlign = 'center';
                ctx.fillText('' + this.getTotalCount(), canvas.width / 2, canvas.width / 2 + 5);
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
                styles: [":host{display:-webkit-box;display:flex;min-width:223px;min-height:120px;height:100%;padding:33px;background-color:#fff}.cmacs-kpi-overview-container{margin-right:25px}.cmacs-kpi-total-count{margin-right:10px;margin-top:-2px;-webkit-box-flex:0;flex:0 0 auto;font-weight:600;color:#3b4043}.border-radius-left{border-radius:100px 0 0 100px}.border-radius-right{border-radius:0 100px 100px 0}.cmacs-kpi-overview-row{display:-webkit-box;display:flex}.cmacs-kpi-overview-chart{position:relative;top:-31px}.cmacs-kpi-divider{display:inline-block;width:2px;height:9px;border-radius:100px;margin-right:8px}.cmacs-kpi-count{display:inline-block;font-family:Roboto-Regular;font-size:12px;font-weight:600;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#3b4043;margin-right:4px}.cmacs-kpi-description{display:inline-block;font-family:Roboto-Regular;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79}.cmacs-kpi-wrapper{display:-webkit-box;display:flex}.cmacs-kpi-overview-title{font-family:Roboto;font-size:14px;line-height:1.29;letter-spacing:normal;color:#3b3f46;margin-bottom:10px}.cmacs-kpi-overview-wrapper{margin-top:3px;margin-left:5px;height:30px;padding-top:25px}.cmacs-kpi-overview-total-count{position:relative;font-size:20px;font-weight:600;color:#3b4043;text-align:center;top:28px;z-index:100}.cmacs-kpi-overview-legend-wrapper{float:right;display:inline-block;margin:4px}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mta3Bpb3ZlcnZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1rcGlvdmVydmlldy9jbWFjcy1rcGlvdmVydmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQzFHLE9BQU8sRUFBTyxVQUFVLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFPekQsTUFBTSxPQUFPLHlCQUF5Qjs7OztJQWNwQyxZQUFvQixTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO1FBVDNDLGFBQVEsR0FBRyxHQUFHLENBQUM7UUFDZixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLE1BQUMsR0FBRyxDQUFDLENBQUM7UUFDTixTQUFJLEdBQUcsVUFBVSxDQUFDO1FBQ1QsV0FBTSxHQUFhLFVBQVUsQ0FBQztJQUlRLENBQUM7Ozs7SUFFaEQsV0FBVztRQUNULEVBQUU7UUFDRixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzFFO1FBRUQsVUFB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LEdBQUcsT0FBTyxHQUFHLEdBQUcsQ0FBQztZQUN4QixRQUFRLEVBQUUsQ0FBQztRQUNiLENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQzs7O1lBMUpGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5Qix5OUJBQWlEOzthQUVsRDs7OztZQU5RLFlBQVk7OzttQkFTbEIsS0FBSztvQkFDTCxLQUFLO21CQUNMLEtBQUs7cUJBTUwsS0FBSzt3QkFFTCxTQUFTLFNBQUMsUUFBUSxFQUFFLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQzs7OztJQVZ2Qyx5Q0FBcUI7O0lBQ3JCLDBDQUF1Qjs7SUFDdkIseUNBQXlCOztJQUN6Qiw2Q0FBZTs7SUFDZixvREFBcUI7O0lBQ3JCLCtDQUFnQjs7SUFDaEIsc0NBQU07O0lBQ04seUNBQWtCOztJQUNsQiwyQ0FBdUM7O0lBRXZDLDhDQUErRDs7Ozs7SUFFbkQsOENBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBLUEksIEtQSV9DT0xPUlMgfSBmcm9tICcuLi9jbWFjcy1rcGkvY21hY3Mta3BpLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1rcGktb3ZlcnZpZXcnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1rcGlvdmVydmlldy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3Mta3Bpb3ZlcnZpZXcuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0tQSU92ZXJ2aWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuXHJcbiAgQElucHV0KCkgZGF0YTogS1BJW107XHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcclxuICBASW5wdXQoKSB2aWV3ITogbnVtYmVyW107XHJcbiAgbWluV2lkdGggPSAzMDA7XHJcbiAgZm9udENoYXJ0TnVtYmVyID0gMjA7XHJcbiAgY2hhcnRXaWR0aCA9IDg0O1xyXG4gIHAgPSAxO1xyXG4gIHR5cGUgPSAnZG91Z2hudXQnO1xyXG4gIEBJbnB1dCgpIGNvbG9yczogc3RyaW5nW10gPSBLUElfQ09MT1JTO1xyXG5cclxuICBAVmlld0NoaWxkKCdjYW52YXMnLCB7cmVhZDogRWxlbWVudFJlZn0pIGNhbnZhc1JlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikgeyB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgLy9cclxuICAgIHRoaXMucCA9IDE7XHJcbiAgICBpZiAodGhpcy52aWV3ICYmIHRoaXMudmlldy5sZW5ndGggPT09IDIpIHtcclxuICAgICAgdGhpcy5wID0gdGhpcy52aWV3WzBdID4gdGhpcy5taW5XaWR0aCA/IHRoaXMudmlld1swXSAvIHRoaXMubWluV2lkdGggOiAxO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5jYW52YXNSZWYpIHtcclxuICAgICAgICBjb25zdCBjYW52YXMgPSB0aGlzLmNhbnZhc1JlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHRoaXMuY2hhcnRXaWR0aCAqIHRoaXMucDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gdGhpcy5jaGFydFdpZHRoICogdGhpcy5wO1xyXG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgICAgICBsZXQgc3RhcnRBbmdsZSA9IDA7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0Q29sb3JlZERhdGEoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0VG90YWxDb3VudCgpID4gMCkge1xyXG4gICAgICAgICAgZm9yIChjb25zdCBjYXRlZyBvZiBkYXRhKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IGNhdGVnLmNvdW50O1xyXG4gICAgICAgICAgICBjb25zdCBzbGljZUFuZ2xlID0gMiAqIE1hdGguUEkgKiB2YWwgLyB0aGlzLmdldFRvdGFsQ291bnQoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZHJhd1BpZVNsaWNlKFxyXG4gICAgICAgICAgICAgIGN0eCxcclxuICAgICAgICAgICAgICBjYW52YXMud2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgLyAyLFxyXG4gICAgICAgICAgICAgIE1hdGgubWluKGNhbnZhcy53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyKSxcclxuICAgICAgICAgICAgICBzdGFydEFuZ2xlLFxyXG4gICAgICAgICAgICAgIHN0YXJ0QW5nbGUgKyBzbGljZUFuZ2xlIC0gMC4wNSxcclxuICAgICAgICAgICAgICBjYXRlZy5jb2xvclxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBzdGFydEFuZ2xlICs9IHNsaWNlQW5nbGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZHJhd1BpZVNsaWNlKFxyXG4gICAgICAgICAgICBjdHgsXHJcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgLyAyLFxyXG4gICAgICAgICAgICBNYXRoLm1pbihjYW52YXMud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMiksXHJcbiAgICAgICAgICAgIHN0YXJ0QW5nbGUsXHJcbiAgICAgICAgICAgIHN0YXJ0QW5nbGUgKyAyICogTWF0aC5QSSxcclxuICAgICAgICAgICAgJyNkZWUwZTUnXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBkcmF3aW5nIGEgd2hpdGUgY2lyY2xlIG92ZXIgdGhlIGNoYXJ0XHJcbiAgICAgICAgLy8gdG8gY3JlYXRlIHRoZSBkb3VnaG51dCBjaGFydFxyXG4gICAgICAgIHRoaXMuZHJhd1BpZVNsaWNlKFxyXG4gICAgICAgICAgY3R4LFxyXG4gICAgICAgICAgY2FudmFzLndpZHRoIC8gMixcclxuICAgICAgICAgIGNhbnZhcy5oZWlnaHQgLyAyLFxyXG4gICAgICAgICAgMC44ICogTWF0aC5taW4oY2FudmFzLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIpLFxyXG4gICAgICAgICAgMCxcclxuICAgICAgICAgIDIgKiBNYXRoLlBJLFxyXG4gICAgICAgICAgJyNmZmZmZmYnXHJcbiAgICAgICAgKTtcclxuICAgICAgICAvLyBkcmF3IHZhbHVlXHJcbiAgICAgICAgY3R4LmZvbnQgPSB0aGlzLmZvbnRDaGFydE51bWJlciAqIHRoaXMucCArICdweCBSb2JvdG8gJztcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gJyMzYjNmNDYnO1xyXG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcclxuICAgICAgICBjdHguZmlsbFRleHQoJycgKyB0aGlzLmdldFRvdGFsQ291bnQoKSwgY2FudmFzLndpZHRoIC8gMiwgY2FudmFzLndpZHRoIC8gMiArIDUpO1xyXG4gICAgICB9XHJcbiAgICB9LCA1MCk7XHJcbiAgfVxyXG5cclxuICBkcmF3UGllU2xpY2UoY3R4OiBhbnksIGNlbnRlclg6IG51bWJlciwgY2VudGVyWTogbnVtYmVyLCByYWRpdXM6IG51bWJlciwgc3RhcnRBbmdsZTogbnVtYmVyLCBlbmRBbmdsZTogbnVtYmVyLCBjb2xvcjogYW55ICl7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHgubW92ZVRvKGNlbnRlclgsIGNlbnRlclkpO1xyXG4gICAgY3R4LmFyYyhjZW50ZXJYLCBjZW50ZXJZLCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlKTtcclxuICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuICAgIGN0eC5maWxsKCk7XHJcbiAgfVxyXG5cclxuICBkcmF3QXJjKGN0eDogYW55LCBjZW50ZXJYOiBudW1iZXIsIGNlbnRlclk6IG51bWJlciwgcmFkaXVzOiBudW1iZXIsIHN0YXJ0QW5nbGU6IG51bWJlciwgZW5kQW5nbGU6IG51bWJlcikge1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4LmFyYyhjZW50ZXJYLCBjZW50ZXJZLCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlKTtcclxuICAgIGN0eC5zdHJva2UoKTtcclxuICB9XHJcblxyXG4gIHNhbml0aXplU3R5bGUoc3R5bGU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShzdHlsZSk7XHJcbiAgfVxyXG5cclxuICBnZXRUb3RhbENvdW50KCkge1xyXG4gICAgbGV0IHRvdGFsID0gMDtcclxuICAgIHRoaXMuZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIHRvdGFsICs9IGl0ZW0uY291bnQ7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0b3RhbDtcclxuICB9XHJcblxyXG4gIGdldFdpZHRoKGNvdW50OiBudW1iZXIpIHtcclxuICAgIHJldHVybiBjb3VudCAhPT0gMCA/IE1hdGgudHJ1bmMoY291bnQgKiAxMDAgLyB0aGlzLmdldFRvdGFsQ291bnQoKSkgLSAyIDogMDtcclxuICB9XHJcblxyXG4gIGdldENvbG9yZWREYXRhKCkge1xyXG4gICAgY29uc3QgY29sb3JlZERhdGE6IGFueSA9IFtdO1xyXG4gICAgY29uc3QgcmVtYWluaW5nID0gdGhpcy5kYXRhLmxlbmd0aCAlIHRoaXMuY29sb3JzLmxlbmd0aDtcclxuICAgIGxldCByYXRlID0gdGhpcy5kYXRhLmxlbmd0aCAvIHRoaXMuY29sb3JzLmxlbmd0aDtcclxuICAgIGlmIChyZW1haW5pbmcgPiAwKSB7XHJcbiAgICAgIHJhdGUgPSBNYXRoLnRydW5jKHJhdGUpICsgMTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgdGVtcFJhdGUgPSByYXRlO1xyXG4gICAgbGV0IG9wYWNpdHkgPSAxO1xyXG4gICAgbGV0IGNvbG9ySW5kZXggPSAwO1xyXG4gICAgdGhpcy5kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgaWYgKHRlbXBSYXRlID09PSAwKSB7XHJcbiAgICAgICAgdGVtcFJhdGUgPSByYXRlO1xyXG4gICAgICAgIGNvbG9ySW5kZXggKz0gMTtcclxuICAgICAgICBvcGFjaXR5ID0gMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNvbG9ySW5kZXggPj0gdGhpcy5jb2xvcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgY29sb3JJbmRleCA9IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChvcGFjaXR5ID09PSAwLjQpIHtcclxuICAgICAgICBvcGFjaXR5ID0gMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29sb3JlZERhdGEucHVzaCh7XHJcbiAgICAgICAgY291bnQ6IGl0ZW0uY291bnQsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGl0ZW0uZGVzY3JpcHRpb24sXHJcbiAgICAgICAgY29sb3I6IHRoaXMuY29sb3JzW2NvbG9ySW5kZXhdLFxyXG4gICAgICAgIG9wYWNpdHk6IG9wYWNpdHlcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBvcGFjaXR5ID0gb3BhY2l0eSAtIDAuMjtcclxuICAgICAgdGVtcFJhdGUtLTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjb2xvcmVkRGF0YTtcclxuICB9XHJcbn1cclxuIl19