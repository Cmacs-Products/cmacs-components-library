/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, Renderer2, ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { UtilService } from '../core/services/util.service';
export class CmacsNormalizedHorizontalBarChartComponent {
    /**
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?} util
     */
    constructor(renderer, elementRef, util) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.util = util;
        this.clickMenu = new EventEmitter();
        this.width = 275;
        this.height = 300;
        this.displayArrowBtns = true;
        // otpions
        this.colorScheme = {
            domain: ['#00CE7D', '#FFC634', '#F6503C']
        };
        this.id = util.uuidv4();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        let temp = [];
        this.data.map((/**
         * @param {?} d
         * @return {?}
         */
        d => d.series.map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.name)))).forEach((/**
         * @param {?} x
         * @return {?}
         */
        (x) => temp = [...temp, ...x]));
        this.legend = Array.from(new Set([...temp]));
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.view && this.view.length === 2) {
            this.width = this.view[0];
            this.height = this.view[1] - 70;
            if (this.renderer) {
                this.resize();
            }
        }
        setTimeout((/**
         * @return {?}
         */
        () => {
            for (let index = 0; index < this.data.length; index++) {
                /** @type {?} */
                const canvas = (/** @type {?} */ (document.getElementById('canvas-' + this.id + '-' + index)));
                if (canvas.getContext) {
                    //
                    /** @type {?} */
                    const context = canvas.getContext('2d');
                    /** @type {?} */
                    const val = this.view[0] - 146;
                    canvas.width = (val > 0) ? val : 0;
                    canvas.height = 20;
                    /** @type {?} */
                    const total = this.data[index].series.map((/**
                     * @param {?} s
                     * @return {?}
                     */
                    s => s.value)).reduce((/**
                     * @param {?} a
                     * @param {?} b
                     * @return {?}
                     */
                    (a, b) => a + b), 0);
                    /** @type {?} */
                    let move = 0;
                    //
                    /** @type {?} */
                    const elems = this.data[index].series.sort((/**
                     * @param {?} a
                     * @param {?} b
                     * @return {?}
                     */
                    (a, b) => this.legend.findIndex((/**
                     * @param {?} y
                     * @return {?}
                     */
                    y => y === a.name)) - this.legend.findIndex((/**
                     * @param {?} y
                     * @return {?}
                     */
                    y => y === b.name))));
                    for (let j = 0; j < elems.length; j++) {
                        // Reset the current path
                        context.beginPath();
                        context.moveTo(move, 0);
                        context.lineWidth = 15;
                        /** @type {?} */
                        const val = elems[j].value;
                        move += val / total * canvas.width;
                        context.strokeStyle = this.colorScheme.domain[j];
                        context.lineTo(move - 5, 0);
                        context.stroke();
                    }
                }
            }
        }), 0);
        this.showArrowBtns();
    }
    /**
     * @return {?}
     */
    resize() {
        /** @type {?} */
        const width = this.view[0] - 15;
        this.renderer.setStyle(this.elementRef.nativeElement, 'width', `${width}px`);
    }
    /**
     * @return {?}
     */
    scrollRight() {
        this.legendContent.nativeElement.scrollTo({ left: (this.legendContent.nativeElement.scrollLeft - 40), behavior: 'smooth' });
    }
    /**
     * @return {?}
     */
    scrollLeft() {
        this.legendContent.nativeElement.scrollTo({ left: (this.legendContent.nativeElement.scrollLeft + 40), behavior: 'smooth' });
    }
    /**
     * @param {?} type
     * @return {?}
     */
    menuClick(type) {
        this.clickMenu.emit(type);
    }
    /**
     * @return {?}
     */
    showArrowBtns() {
        if (this.legend) {
            /** @type {?} */
            const text = this.legend.map((/**
             * @param {?} i
             * @return {?}
             */
            i => i + 'space'));
            /** @type {?} */
            const tsize = this.util.get_tex_size(text, '12px Roboto-Regular');
            this.displayArrowBtns = tsize.width > this.view[0] - 35;
        }
    }
    /**
     * @param {?} item
     * @param {?} label
     * @return {?}
     */
    getSeriesValue(item, label) {
        /** @type {?} */
        const elem = item.series.find((/**
         * @param {?} e
         * @return {?}
         */
        e => e.name === label));
        return elem.value;
    }
    /**
     * @return {?}
     */
    getDataTable() {
        return this.data;
    }
    /**
     * @return {?}
     */
    getChartImage() {
        return this.canvas;
    }
    /**
     * @return {?}
     */
    getLegend() {
        return this.legend;
    }
}
CmacsNormalizedHorizontalBarChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmacs-normalized-horizontal-bar-chart',
                template: "<div class=\"sd-content\">\r\n  <!-- Legend -->\r\n  <div nz-row class=\"legend-row\">\r\n    <span class=\"legend-left-icon\" (click)=\"scrollRight()\" *ngIf=\"displayArrowBtns\">\r\n      <i class=\"iconArrowLarge-Chevron-Left\"></i>\r\n    </span>\r\n    <div #legendContent class=\"legend-data\">\r\n      <span class=\"legend-column\" *ngFor=\"let l of legend; let i = index;\">\r\n        <span [style.background-color]=\"colorScheme.domain[i]\" class=\"legend-bar\"> </span>\r\n        <span class=\"legend-text\">{{l}}</span>\r\n      </span>\r\n    </div>\r\n    <span (click)=\"scrollLeft()\" class=\"legend-right-icon\" *ngIf=\"displayArrowBtns\">\r\n      <i class=\"iconArrowLarge-Chevron-Right\"></i>\r\n    </span>\r\n  </div>\r\n  <!-- Chart -->\r\n  <div nz-row class=\"chart-content\" [style.height.px]=\"height\">\r\n    <div *ngFor=\"let item of data; let i = index\" nz-row class=\"chart-content-row\">\r\n      <div nz-col class=\"chart-content-text\">{{item.name}}</div>\r\n      <canvas style=\"display: inline-block; margin-top: 4px;\"\r\n              id=\"canvas-{{id}}-{{i}}\"\r\n              #chartcanvas\r\n              cmacs-tooltip\r\n              [overlayClassName]=\"'cmacs-normalized-chart-tooltip'\"\r\n              [cmacs-title]=\"chartTooltip ? chartTemplate : chartCustomTemplate\"\r\n              class=\"chart-content-canvas\">\r\n        <ng-template #chartTemplate>\r\n           <ng-container [ngTemplateOutlet]=\"chartTooltip\"\r\n                         [ngTemplateOutletContext]=\"{model: item}\"\r\n           ></ng-container>\r\n        </ng-template>\r\n\r\n        <ng-template #chartCustomTemplate>\r\n          <div *ngIf=\"item.tooltip_title\" class=\"cmacs-normalized-horizontal-bar-chart-tooltip-title\">\r\n            {{item.tooltip_title}}\r\n          </div>\r\n          <div class=\"cmacs-normalized-horizontal-bar-chart-tooltip-wrapper\">\r\n            <div *ngFor=\"let label of legend; index as i;\">\r\n              <span class=\"legend-bar\" [style.backgroundColor]=\"colorScheme.domain[i]\"></span>\r\n              <span class=\"legend-text\">{{label}}</span>\r\n              <span class=\"legend-value\">{{getSeriesValue(item, label)}}</span>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n      </canvas>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                styles: [":host(){display:block}.legend-data{display:-webkit-box;display:flex;overflow:hidden;margin-right:28px;margin-left:25px}.legend-column{display:table-cell;font-family:Roboto-Regular;font-size:12px;color:#656c79;white-space:nowrap;padding-top:8px}.legend-left-icon,.legend-right-icon{top:5px;font-size:19px;padding-left:5px;padding-right:5px;cursor:pointer}.legend-left-icon{position:absolute;z-index:2;left:0}.legend-right-icon{position:absolute;right:0}.legend-text{padding-left:6px;padding-right:20px}.legend-column:last-child .legend-text{padding-right:0}.legend-bar{width:4px;height:10px;border-radius:5px;display:inline-block}.legend-row{width:100%;margin-bottom:30px;display:-webkit-box;display:flex;place-content:flex-end}.chart-content{overflow-x:auto}.chart-content-row{margin-bottom:15px;font-family:Roboto-Regular;font-size:12px;letter-spacing:.12px;color:#656c79}.chart-content-text{width:110px;display:inline-block;vertical-align:top;margin-right:5px}::ng-deep .cmacs-normalized-chart-tooltip .ant-tooltip-content,::ng-deep .cmacs-normalized-chart-tooltip .ant-tooltip-inner{background-color:rgba(0,0,0,.55)!important}::ng-deep .cmacs-normalized-chart-tooltip.ant-tooltip-placement-top .ant-tooltip-arrow{border-top-color:rgba(0,0,0,.7)!important;opacity:1!important}.legend-value{float:right}.cmacs-normalized-horizontal-bar-chart-tooltip-wrapper{font-family:Roboto-Regular;font-size:13px}.cmacs-normalized-horizontal-bar-chart-tooltip-wrapper .legend-text{color:#bec4cd}.cmacs-normalized-horizontal-bar-chart-tooltip-title{color:#bec4cd;font-size:13px;border-bottom:1px solid #bec4cd;padding:4px 0;margin-bottom:7px}"]
            }] }
];
/** @nocollapse */
CmacsNormalizedHorizontalBarChartComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: UtilService }
];
CmacsNormalizedHorizontalBarChartComponent.propDecorators = {
    clickMenu: [{ type: Output }],
    legendContent: [{ type: ViewChild, args: ['legendContent', { read: ElementRef },] }],
    canvasRef: [{ type: ViewChildren, args: ['chartcanvas', { read: ElementRef },] }],
    canvas: [{ type: ViewChildren, args: ['chartcanvas',] }],
    chartTooltip: [{ type: Input }],
    data: [{ type: Input }],
    view: [{ type: Input }],
    colorScheme: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CmacsNormalizedHorizontalBarChartComponent.prototype.clickMenu;
    /** @type {?} */
    CmacsNormalizedHorizontalBarChartComponent.prototype.legendContent;
    /** @type {?} */
    CmacsNormalizedHorizontalBarChartComponent.prototype.canvasRef;
    /** @type {?} */
    CmacsNormalizedHorizontalBarChartComponent.prototype.canvas;
    /** @type {?} */
    CmacsNormalizedHorizontalBarChartComponent.prototype.chartTooltip;
    /** @type {?} */
    CmacsNormalizedHorizontalBarChartComponent.prototype.data;
    /** @type {?} */
    CmacsNormalizedHorizontalBarChartComponent.prototype.view;
    /** @type {?} */
    CmacsNormalizedHorizontalBarChartComponent.prototype.width;
    /** @type {?} */
    CmacsNormalizedHorizontalBarChartComponent.prototype.height;
    /** @type {?} */
    CmacsNormalizedHorizontalBarChartComponent.prototype.displayArrowBtns;
    /** @type {?} */
    CmacsNormalizedHorizontalBarChartComponent.prototype.colorScheme;
    /** @type {?} */
    CmacsNormalizedHorizontalBarChartComponent.prototype.id;
    /** @type {?} */
    CmacsNormalizedHorizontalBarChartComponent.prototype.legend;
    /**
     * @type {?}
     * @private
     */
    CmacsNormalizedHorizontalBarChartComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    CmacsNormalizedHorizontalBarChartComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    CmacsNormalizedHorizontalBarChartComponent.prototype.util;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtbm9ybWFsaXplZC1ob3Jpem9udGFsLWJhci1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLW5vcm1hbGl6ZWQtaG9yaXpvbnRhbC1iYXItY2hhcnQvY21hY3Mtbm9ybWFsaXplZC1ob3Jpem9udGFsLWJhci1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFpQixNQUFNLEVBQUUsWUFBWSxFQUFhLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFlLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHakwsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBTzVELE1BQU0sT0FBTywwQ0FBMEM7Ozs7OztJQXlCckQsWUFDVSxRQUFtQixFQUNuQixVQUFzQixFQUN0QixJQUFpQjtRQUZqQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsU0FBSSxHQUFKLElBQUksQ0FBYTtRQTFCakIsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFTOUMsVUFBSyxHQUFHLEdBQUcsQ0FBQztRQUNaLFdBQU0sR0FBRyxHQUFHLENBQUM7UUFFYixxQkFBZ0IsR0FBRyxJQUFJLENBQUM7O1FBR2YsZ0JBQVcsR0FBRztZQUNyQixNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQztTQUMxQyxDQUFDO1FBV0EsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELFFBQVE7O1lBQ0YsSUFBSSxHQUFVLEVBQUU7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMs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RUFBRTt3QkFDL0MsWUFBWSxTQUFDLGFBQWEsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7cUJBQ2hELFlBQVksU0FBQyxhQUFhOzJCQUMxQixLQUFLO21CQUdMLEtBQUs7bUJBQ0wsS0FBSzswQkFPTCxLQUFLOzs7O0lBZk4sK0RBQThDOztJQUM5QyxtRUFBd0Y7O0lBQ3hGLCtEQUF5RTs7SUFDekUsNERBQTREOztJQUM1RCxrRUFBeUQ7O0lBR3pELDBEQUFpQzs7SUFDakMsMERBQXlCOztJQUN6QiwyREFBWTs7SUFDWiw0REFBYTs7SUFFYixzRUFBd0I7O0lBR3hCLGlFQUVFOztJQUVGLHdEQUFHOztJQUVILDREQUFrQjs7Ozs7SUFHaEIsOERBQTJCOzs7OztJQUMzQixnRUFBOEI7Ozs7O0lBQzlCLDBEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGRyZW4sIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXaWRnZXRBY3Rpb25UeXBlIH0gZnJvbSAnLi4vY29yZS9lbnVtcy93aWRnZXQtYWN0aW9uLXR5cGUuZW51bSc7XHJcbmltcG9ydCB7IENoYXJ0RGF0YU11bHRpIH0gZnJvbSAnLi4vY29yZS9pbnRlcmZhY2VzL2NoYXJ0LWRhdGEtaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgVXRpbFNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3V0aWwuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLW5vcm1hbGl6ZWQtaG9yaXpvbnRhbC1iYXItY2hhcnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1ub3JtYWxpemVkLWhvcml6b250YWwtYmFyLWNoYXJ0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1ub3JtYWxpemVkLWhvcml6b250YWwtYmFyLWNoYXJ0LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NOb3JtYWxpemVkSG9yaXpvbnRhbEJhckNoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG5cclxuICBAT3V0cHV0KCkgY2xpY2tNZW51ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQFZpZXdDaGlsZCgnbGVnZW5kQ29udGVudCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBwdWJsaWMgbGVnZW5kQ29udGVudDogRWxlbWVudFJlZjxhbnk+O1xyXG4gIEBWaWV3Q2hpbGRyZW4oJ2NoYXJ0Y2FudmFzJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGNhbnZhc1JlZjogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkcmVuKCdjaGFydGNhbnZhcycpIGNhbnZhcyE6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcclxuICBASW5wdXQoKSBjaGFydFRvb2x0aXA6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbDtcclxuXHJcbiAgLy8gY29udGVudFxyXG4gIEBJbnB1dCgpIGRhdGEhOiBDaGFydERhdGFNdWx0aVtdO1xyXG4gIEBJbnB1dCgpIHZpZXchOiBudW1iZXJbXTtcclxuICB3aWR0aCA9IDI3NTtcclxuICBoZWlnaHQgPSAzMDA7XHJcblxyXG4gIGRpc3BsYXlBcnJvd0J0bnMgPSB0cnVlO1xyXG5cclxuICAvLyBvdHBpb25zXHJcbiAgQElucHV0KCkgY29sb3JTY2hlbWUgPSB7XHJcbiAgICBkb21haW46IFsnIzAwQ0U3RCcsICcjRkZDNjM0JywgJyNGNjUwM0MnXVxyXG4gIH07XHJcblxyXG4gIGlkO1xyXG5cclxuICBsZWdlbmQhOiBzdHJpbmdbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHV0aWw6IFV0aWxTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICB0aGlzLmlkID0gdXRpbC51dWlkdjQoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgbGV0IHRlbXA6IGFueVtdID0gW107XHJcbiAgICB0aGlzLmRhdGEubWFwKGQgPT4gZC5zZXJpZXMubWFwKHggPT4geC5uYW1lKSkuZm9yRWFjaCgoeCkgPT4gdGVtcCA9IFsuLi50ZW1wLCAuLi54XSk7XHJcbiAgICB0aGlzLmxlZ2VuZCAgPSBBcnJheS5mcm9tKG5ldyBTZXQoWy4uLnRlbXBdKSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpIHtcclxuICAgIGlmICh0aGlzLnZpZXcgJiYgdGhpcy52aWV3Lmxlbmd0aCA9PT0gMikge1xyXG4gICAgICB0aGlzLndpZHRoID0gdGhpcy52aWV3WzBdO1xyXG4gICAgICB0aGlzLmhlaWdodCA9IHRoaXMudmlld1sxXSAtIDcwO1xyXG5cclxuICAgICAgaWYodGhpcy5yZW5kZXJlcikge1xyXG4gICAgICAgIHRoaXMucmVzaXplKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuZGF0YS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzLScgKyB0aGlzLmlkICsgJy0nICsgaW5kZXgpICBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgICAgICBpZiAoY2FudmFzLmdldENvbnRleHQpIHtcclxuICAgICAgICAgIC8vXHJcbiAgICAgICAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgICBjb25zdCB2YWwgPSB0aGlzLnZpZXdbMF0gLSAxNDY7XHJcbiAgICAgICAgICBjYW52YXMud2lkdGggPSAodmFsID4gMCkgPyB2YWwgOiAwO1xyXG4gICAgICAgICAgY2FudmFzLmhlaWdodCA9IDIwO1xyXG4gICAgICAgICAgY29uc3QgdG90YWwgPSB0aGlzLmRhdGFbaW5kZXhdLnNlcmllcy5tYXAocyA9PiBzLnZhbHVlKS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKTtcclxuICAgICAgICAgIGxldCBtb3ZlID0gMDtcclxuICAgICAgICAgIC8vXHJcbiAgICAgICAgICBjb25zdCBlbGVtcyA9IHRoaXMuZGF0YVtpbmRleF0uc2VyaWVzLnNvcnQoKGEsIGIpID0+XHJcbiAgICAgICAgICAgIHRoaXMubGVnZW5kLmZpbmRJbmRleCh5ID0+IHkgPT09IGEubmFtZSkgLSB0aGlzLmxlZ2VuZC5maW5kSW5kZXgoeSA9PiB5ID09PSBiLm5hbWUpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBlbGVtcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAvLyBSZXNldCB0aGUgY3VycmVudCBwYXRoXHJcbiAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIGNvbnRleHQubW92ZVRvKG1vdmUsIDApO1xyXG4gICAgICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDE1O1xyXG4gICAgICAgICAgICBjb25zdCB2YWwgPSBlbGVtc1tqXS52YWx1ZTtcclxuICAgICAgICAgICAgbW92ZSArPSB2YWwgLyB0b3RhbCAqIGNhbnZhcy53aWR0aDtcclxuICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3JTY2hlbWUuZG9tYWluW2pdO1xyXG4gICAgICAgICAgICBjb250ZXh0LmxpbmVUbyhtb3ZlIC0gNSwgMCk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LCAwKTtcclxuXHJcbiAgICB0aGlzLnNob3dBcnJvd0J0bnMoKTtcclxuICB9XHJcblxyXG4gIHJlc2l6ZSgpIHtcclxuICAgIGNvbnN0IHdpZHRoID0gdGhpcy52aWV3WzBdIC0gMTU7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCBgJHt3aWR0aH1weGApO1xyXG4gIH1cclxuXHJcbiAgc2Nyb2xsUmlnaHQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmxlZ2VuZENvbnRlbnQubmF0aXZlRWxlbWVudC5zY3JvbGxUbyh7IGxlZnQ6ICh0aGlzLmxlZ2VuZENvbnRlbnQubmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0IC0gNDApLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgfVxyXG5cclxuICBzY3JvbGxMZWZ0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5sZWdlbmRDb250ZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG8oeyBsZWZ0OiAodGhpcy5sZWdlbmRDb250ZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdCArIDQwKSwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIG1lbnVDbGljayh0eXBlOiBXaWRnZXRBY3Rpb25UeXBlKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsaWNrTWVudS5lbWl0KHR5cGUpO1xyXG4gIH1cclxuXHJcbiAgc2hvd0Fycm93QnRucygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmxlZ2VuZCkge1xyXG4gICAgICBjb25zdCB0ZXh0ID0gdGhpcy5sZWdlbmQubWFwKGkgPT4gaSArICdzcGFjZScpO1xyXG4gICAgICBjb25zdCB0c2l6ZSA9IHRoaXMudXRpbC5nZXRfdGV4X3NpemUodGV4dCwgJzEycHggUm9ib3RvLVJlZ3VsYXInKTtcclxuICAgICAgdGhpcy5kaXNwbGF5QXJyb3dCdG5zID0gdHNpemUud2lkdGggPiB0aGlzLnZpZXdbMF0gLSAzNTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFNlcmllc1ZhbHVlKGl0ZW0sIGxhYmVsKSB7XHJcbiAgICBjb25zdCBlbGVtID0gaXRlbS5zZXJpZXMuZmluZChlID0+IGUubmFtZSA9PT0gbGFiZWwpO1xyXG4gICAgcmV0dXJuIGVsZW0udmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0RGF0YVRhYmxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRDaGFydEltYWdlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2FudmFzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldExlZ2VuZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmxlZ2VuZDtcclxuICB9XHJcbn1cclxuIl19