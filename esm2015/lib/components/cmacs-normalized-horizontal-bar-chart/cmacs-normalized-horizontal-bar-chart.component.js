/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, Renderer2, ElementRef, ViewChild } from '@angular/core';
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
}
CmacsNormalizedHorizontalBarChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmacs-normalized-horizontal-bar-chart',
                template: "<div class=\"sd-content\">\r\n  <!-- Legend -->\r\n  <div nz-row class=\"legend-row\">\r\n    <span class=\"legend-left-icon\" (click)=\"scrollRight()\" *ngIf=\"displayArrowBtns\">\r\n      <i class=\"iconArrowLarge-Chevron-Left\"></i>\r\n    </span>\r\n    <div #legendContent class=\"legend-data\">\r\n      <span class=\"legend-column\" *ngFor=\"let l of legend; let i = index;\">\r\n        <span [style.background-color]=\"colorScheme.domain[i]\" class=\"legend-bar\"> </span>\r\n        <span class=\"legend-text\">{{l}}</span>\r\n      </span>\r\n    </div>\r\n    <span (click)=\"scrollLeft()\" class=\"legend-right-icon\" *ngIf=\"displayArrowBtns\">\r\n      <i class=\"iconArrowLarge-Chevron-Right\"></i>\r\n    </span>\r\n  </div>\r\n  <!-- Chart -->\r\n  <div nz-row class=\"chart-content\" [style.height.px]=\"height\">\r\n    <div *ngFor=\"let item of data; let i = index\" nz-row class=\"chart-content-row\">\r\n      <div nz-col class=\"chart-content-text\">{{item.name}}</div>\r\n      <canvas style=\"display: inline-block; margin-top: 4px;\"\r\n              id=\"canvas-{{id}}-{{i}}\"\r\n              cmacs-tooltip\r\n              [overlayClassName]=\"'cmacs-normalized-chart-tooltip'\"\r\n              [cmacs-title]=\"chartTooltip ? chartTemplate : chartCustomTemplate\"\r\n              class=\"chart-content-canvas\">\r\n        <ng-template #chartTemplate>\r\n           <ng-container [ngTemplateOutlet]=\"chartTooltip\"\r\n                         [ngTemplateOutletContext]=\"{model: item}\"\r\n           ></ng-container>\r\n        </ng-template>\r\n\r\n        <ng-template #chartCustomTemplate>\r\n          <div *ngIf=\"item.tooltip_title\" class=\"cmacs-normalized-horizontal-bar-chart-tooltip-title\">\r\n            {{item.tooltip_title}}\r\n          </div>\r\n          <div class=\"cmacs-normalized-horizontal-bar-chart-tooltip-wrapper\">\r\n            <div *ngFor=\"let label of legend; index as i;\">\r\n              <span class=\"legend-bar\" [style.backgroundColor]=\"colorScheme.domain[i]\"></span>\r\n              <span class=\"legend-text\">{{label}}</span>\r\n              <span class=\"legend-value\">{{getSeriesValue(item, label)}}</span>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n      </canvas>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtbm9ybWFsaXplZC1ob3Jpem9udGFsLWJhci1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLW5vcm1hbGl6ZWQtaG9yaXpvbnRhbC1iYXItY2hhcnQvY21hY3Mtbm9ybWFsaXplZC1ob3Jpem9udGFsLWJhci1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFpQixNQUFNLEVBQUUsWUFBWSxFQUFhLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBR3hKLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQU81RCxNQUFNLE9BQU8sMENBQTBDOzs7Ozs7SUF1QnJELFlBQ1UsUUFBbUIsRUFDbkIsVUFBc0IsRUFDdEIsSUFBaUI7UUFGakIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLFNBQUksR0FBSixJQUFJLENBQWE7UUF4QmpCLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBTzlDLFVBQUssR0FBRyxHQUFHLENBQUM7UUFDWixXQUFNLEdBQUcsR0FBRyxDQUFDO1FBRWIscUJBQWdCLEdBQUcsSUFBSSxDQUFDOztRQUdmLGdCQUFXLEdBQUc7WUFDckIsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7U0FDMUMsQ0FBQztRQVdBLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxRQUFROztZQUNGLElBQUksR0FBVSxFQUFFO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMs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O0lBRUgsNERBQWtCOzs7OztJQUdoQiw4REFBMkI7Ozs7O0lBQzNCLGdFQUE4Qjs7Ozs7SUFDOUIsMERBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBBZnRlclZpZXdJbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgV2lkZ2V0QWN0aW9uVHlwZSB9IGZyb20gJy4uL2NvcmUvZW51bXMvd2lkZ2V0LWFjdGlvbi10eXBlLmVudW0nO1xyXG5pbXBvcnQgeyBDaGFydERhdGFNdWx0aSB9IGZyb20gJy4uL2NvcmUvaW50ZXJmYWNlcy9jaGFydC1kYXRhLWludGVyZmFjZSc7XHJcbmltcG9ydCB7IFV0aWxTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy91dGlsLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1ub3JtYWxpemVkLWhvcml6b250YWwtYmFyLWNoYXJ0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mtbm9ybWFsaXplZC1ob3Jpem9udGFsLWJhci1jaGFydC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3Mtbm9ybWFsaXplZC1ob3Jpem9udGFsLWJhci1jaGFydC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzTm9ybWFsaXplZEhvcml6b250YWxCYXJDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuXHJcbiAgQE91dHB1dCgpIGNsaWNrTWVudSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBWaWV3Q2hpbGQoJ2xlZ2VuZENvbnRlbnQnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgcHVibGljIGxlZ2VuZENvbnRlbnQ6IEVsZW1lbnRSZWY8YW55PjtcclxuICBASW5wdXQoKSBjaGFydFRvb2x0aXA6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbDtcclxuXHJcbiAgLy8gY29udGVudFxyXG4gIEBJbnB1dCgpIGRhdGEhOiBDaGFydERhdGFNdWx0aVtdO1xyXG4gIEBJbnB1dCgpIHZpZXchOiBudW1iZXJbXTtcclxuICB3aWR0aCA9IDI3NTtcclxuICBoZWlnaHQgPSAzMDA7XHJcblxyXG4gIGRpc3BsYXlBcnJvd0J0bnMgPSB0cnVlO1xyXG5cclxuICAvLyBvdHBpb25zXHJcbiAgQElucHV0KCkgY29sb3JTY2hlbWUgPSB7XHJcbiAgICBkb21haW46IFsnIzAwQ0U3RCcsICcjRkZDNjM0JywgJyNGNjUwM0MnXVxyXG4gIH07XHJcblxyXG4gIGlkO1xyXG5cclxuICBsZWdlbmQhOiBzdHJpbmdbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHV0aWw6IFV0aWxTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICB0aGlzLmlkID0gdXRpbC51dWlkdjQoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgbGV0IHRlbXA6IGFueVtdID0gW107XHJcbiAgICB0aGlzLmRhdGEubWFwKGQgPT4gZC5zZXJpZXMubWFwKHggPT4geC5uYW1lKSkuZm9yRWFjaCgoeCkgPT4gdGVtcCA9IFsuLi50ZW1wLCAuLi54XSk7XHJcbiAgICB0aGlzLmxlZ2VuZCAgPSBBcnJheS5mcm9tKG5ldyBTZXQoWy4uLnRlbXBdKSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpIHtcclxuICAgIGlmICh0aGlzLnZpZXcgJiYgdGhpcy52aWV3Lmxlbmd0aCA9PT0gMikge1xyXG4gICAgICB0aGlzLndpZHRoID0gdGhpcy52aWV3WzBdO1xyXG4gICAgICB0aGlzLmhlaWdodCA9IHRoaXMudmlld1sxXSAtIDcwO1xyXG5cclxuICAgICAgaWYodGhpcy5yZW5kZXJlcikge1xyXG4gICAgICAgIHRoaXMucmVzaXplKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuZGF0YS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzLScgKyB0aGlzLmlkICsgJy0nICsgaW5kZXgpICBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgICAgICBpZiAoY2FudmFzLmdldENvbnRleHQpIHtcclxuICAgICAgICAgIC8vXHJcbiAgICAgICAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgICBjb25zdCB2YWwgPSB0aGlzLnZpZXdbMF0gLSAxNDY7XHJcbiAgICAgICAgICBjYW52YXMud2lkdGggPSAodmFsID4gMCkgPyB2YWwgOiAwO1xyXG4gICAgICAgICAgY2FudmFzLmhlaWdodCA9IDIwO1xyXG4gICAgICAgICAgY29uc3QgdG90YWwgPSB0aGlzLmRhdGFbaW5kZXhdLnNlcmllcy5tYXAocyA9PiBzLnZhbHVlKS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKTtcclxuICAgICAgICAgIGxldCBtb3ZlID0gMDtcclxuICAgICAgICAgIC8vXHJcbiAgICAgICAgICBjb25zdCBlbGVtcyA9IHRoaXMuZGF0YVtpbmRleF0uc2VyaWVzLnNvcnQoKGEsIGIpID0+XHJcbiAgICAgICAgICAgIHRoaXMubGVnZW5kLmZpbmRJbmRleCh5ID0+IHkgPT09IGEubmFtZSkgLSB0aGlzLmxlZ2VuZC5maW5kSW5kZXgoeSA9PiB5ID09PSBiLm5hbWUpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBlbGVtcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAvLyBSZXNldCB0aGUgY3VycmVudCBwYXRoXHJcbiAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIGNvbnRleHQubW92ZVRvKG1vdmUsIDApO1xyXG4gICAgICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDE1O1xyXG4gICAgICAgICAgICBjb25zdCB2YWwgPSBlbGVtc1tqXS52YWx1ZTtcclxuICAgICAgICAgICAgbW92ZSArPSB2YWwgLyB0b3RhbCAqIGNhbnZhcy53aWR0aDtcclxuICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3JTY2hlbWUuZG9tYWluW2pdO1xyXG4gICAgICAgICAgICBjb250ZXh0LmxpbmVUbyhtb3ZlIC0gNSwgMCk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LCAwKTtcclxuXHJcbiAgICB0aGlzLnNob3dBcnJvd0J0bnMoKTtcclxuICB9XHJcblxyXG4gIHJlc2l6ZSgpIHtcclxuICAgIGNvbnN0IHdpZHRoID0gdGhpcy52aWV3WzBdIC0gMTU7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCBgJHt3aWR0aH1weGApO1xyXG4gIH1cclxuXHJcbiAgc2Nyb2xsUmlnaHQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmxlZ2VuZENvbnRlbnQubmF0aXZlRWxlbWVudC5zY3JvbGxUbyh7IGxlZnQ6ICh0aGlzLmxlZ2VuZENvbnRlbnQubmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0IC0gNDApLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgfVxyXG5cclxuICBzY3JvbGxMZWZ0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5sZWdlbmRDb250ZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG8oeyBsZWZ0OiAodGhpcy5sZWdlbmRDb250ZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdCArIDQwKSwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIG1lbnVDbGljayh0eXBlOiBXaWRnZXRBY3Rpb25UeXBlKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsaWNrTWVudS5lbWl0KHR5cGUpO1xyXG4gIH1cclxuXHJcbiAgc2hvd0Fycm93QnRucygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmxlZ2VuZCkge1xyXG4gICAgICBjb25zdCB0ZXh0ID0gdGhpcy5sZWdlbmQubWFwKGkgPT4gaSArICdzcGFjZScpO1xyXG4gICAgICBjb25zdCB0c2l6ZSA9IHRoaXMudXRpbC5nZXRfdGV4X3NpemUodGV4dCwgJzEycHggUm9ib3RvLVJlZ3VsYXInKTtcclxuICAgICAgdGhpcy5kaXNwbGF5QXJyb3dCdG5zID0gdHNpemUud2lkdGggPiB0aGlzLnZpZXdbMF0gLSAzNTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFNlcmllc1ZhbHVlKGl0ZW0sIGxhYmVsKSB7XHJcbiAgICBjb25zdCBlbGVtID0gaXRlbS5zZXJpZXMuZmluZChlID0+IGUubmFtZSA9PT0gbGFiZWwpO1xyXG4gICAgcmV0dXJuIGVsZW0udmFsdWU7XHJcbiAgfVxyXG59XHJcbiJdfQ==