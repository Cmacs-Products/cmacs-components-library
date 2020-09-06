/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, Renderer2, ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { UtilService } from '../core/services/util.service';
var CmacsNormalizedHorizontalBarChartComponent = /** @class */ (function () {
    function CmacsNormalizedHorizontalBarChartComponent(renderer, elementRef, util) {
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
    CmacsNormalizedHorizontalBarChartComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var temp = [];
        this.data.map((/**
         * @param {?} d
         * @return {?}
         */
        function (d) { return d.series.map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.name; })); })).forEach((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return temp = tslib_1.__spread(temp, x); }));
        this.legend = Array.from(new Set(tslib_1.__spread(temp)));
    };
    /**
     * @return {?}
     */
    CmacsNormalizedHorizontalBarChartComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
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
        function () {
            for (var index = 0; index < _this.data.length; index++) {
                /** @type {?} */
                var canvas = (/** @type {?} */ (document.getElementById('canvas-' + _this.id + '-' + index)));
                if (canvas.getContext) {
                    //
                    /** @type {?} */
                    var context = canvas.getContext('2d');
                    /** @type {?} */
                    var val = _this.view[0] - 146;
                    canvas.width = (val > 0) ? val : 0;
                    canvas.height = 20;
                    /** @type {?} */
                    var total = _this.data[index].series.map((/**
                     * @param {?} s
                     * @return {?}
                     */
                    function (s) { return s.value; })).reduce((/**
                     * @param {?} a
                     * @param {?} b
                     * @return {?}
                     */
                    function (a, b) { return a + b; }), 0);
                    /** @type {?} */
                    var move = 0;
                    //
                    /** @type {?} */
                    var elems = _this.data[index].series.sort((/**
                     * @param {?} a
                     * @param {?} b
                     * @return {?}
                     */
                    function (a, b) {
                        return _this.legend.findIndex((/**
                         * @param {?} y
                         * @return {?}
                         */
                        function (y) { return y === a.name; })) - _this.legend.findIndex((/**
                         * @param {?} y
                         * @return {?}
                         */
                        function (y) { return y === b.name; }));
                    }));
                    for (var j = 0; j < elems.length; j++) {
                        // Reset the current path
                        context.beginPath();
                        context.moveTo(move, 0);
                        context.lineWidth = 15;
                        /** @type {?} */
                        var val_1 = elems[j].value;
                        move += val_1 / total * canvas.width;
                        context.strokeStyle = _this.colorScheme.domain[j];
                        context.lineTo(move - 5, 0);
                        context.stroke();
                    }
                }
            }
        }), 0);
        this.showArrowBtns();
    };
    /**
     * @return {?}
     */
    CmacsNormalizedHorizontalBarChartComponent.prototype.resize = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var width = this.view[0] - 15;
        this.renderer.setStyle(this.elementRef.nativeElement, 'width', width + "px");
    };
    /**
     * @return {?}
     */
    CmacsNormalizedHorizontalBarChartComponent.prototype.scrollRight = /**
     * @return {?}
     */
    function () {
        this.legendContent.nativeElement.scrollTo({ left: (this.legendContent.nativeElement.scrollLeft - 40), behavior: 'smooth' });
    };
    /**
     * @return {?}
     */
    CmacsNormalizedHorizontalBarChartComponent.prototype.scrollLeft = /**
     * @return {?}
     */
    function () {
        this.legendContent.nativeElement.scrollTo({ left: (this.legendContent.nativeElement.scrollLeft + 40), behavior: 'smooth' });
    };
    /**
     * @param {?} type
     * @return {?}
     */
    CmacsNormalizedHorizontalBarChartComponent.prototype.menuClick = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        this.clickMenu.emit(type);
    };
    /**
     * @return {?}
     */
    CmacsNormalizedHorizontalBarChartComponent.prototype.showArrowBtns = /**
     * @return {?}
     */
    function () {
        if (this.legend) {
            /** @type {?} */
            var text = this.legend.map((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return i + 'space'; }));
            /** @type {?} */
            var tsize = this.util.get_tex_size(text, '12px Roboto-Regular');
            this.displayArrowBtns = tsize.width > this.view[0] - 35;
        }
    };
    /**
     * @param {?} item
     * @param {?} label
     * @return {?}
     */
    CmacsNormalizedHorizontalBarChartComponent.prototype.getSeriesValue = /**
     * @param {?} item
     * @param {?} label
     * @return {?}
     */
    function (item, label) {
        /** @type {?} */
        var elem = item.series.find((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e.name === label; }));
        return elem.value;
    };
    /**
     * @return {?}
     */
    CmacsNormalizedHorizontalBarChartComponent.prototype.getDataTable = /**
     * @return {?}
     */
    function () {
        return this.data;
    };
    /**
     * @return {?}
     */
    CmacsNormalizedHorizontalBarChartComponent.prototype.getChartImage = /**
     * @return {?}
     */
    function () {
        return this.canvas;
    };
    /**
     * @return {?}
     */
    CmacsNormalizedHorizontalBarChartComponent.prototype.getLegend = /**
     * @return {?}
     */
    function () {
        return this.legend;
    };
    CmacsNormalizedHorizontalBarChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-normalized-horizontal-bar-chart',
                    template: "<div class=\"sd-content\">\r\n  <!-- Legend -->\r\n  <div nz-row class=\"legend-row\">\r\n    <span class=\"legend-left-icon\" (click)=\"scrollRight()\" *ngIf=\"displayArrowBtns\">\r\n      <i class=\"iconArrowLarge-Chevron-Left\"></i>\r\n    </span>\r\n    <div #legendContent class=\"legend-data\">\r\n      <span class=\"legend-column\" *ngFor=\"let l of legend; let i = index;\">\r\n        <span [style.background-color]=\"colorScheme.domain[i]\" class=\"legend-bar\"> </span>\r\n        <span class=\"legend-text\">{{l}}</span>\r\n      </span>\r\n    </div>\r\n    <span (click)=\"scrollLeft()\" class=\"legend-right-icon\" *ngIf=\"displayArrowBtns\">\r\n      <i class=\"iconArrowLarge-Chevron-Right\"></i>\r\n    </span>\r\n  </div>\r\n  <!-- Chart -->\r\n  <div nz-row class=\"chart-content\" [style.height.px]=\"height\">\r\n    <div *ngFor=\"let item of data; let i = index\" nz-row class=\"chart-content-row\">\r\n      <div nz-col class=\"chart-content-text\">{{item.name}}</div>\r\n      <canvas style=\"display: inline-block; margin-top: 4px;\"\r\n              id=\"canvas-{{id}}-{{i}}\"\r\n              #chartcanvas\r\n              cmacs-tooltip\r\n              [overlayClassName]=\"'cmacs-normalized-chart-tooltip'\"\r\n              [cmacs-title]=\"chartTooltip ? chartTemplate : chartCustomTemplate\"\r\n              class=\"chart-content-canvas\">\r\n        <ng-template #chartTemplate>\r\n           <ng-container [ngTemplateOutlet]=\"chartTooltip\"\r\n                         [ngTemplateOutletContext]=\"{model: item}\"\r\n           ></ng-container>\r\n        </ng-template>\r\n\r\n        <ng-template #chartCustomTemplate>\r\n          <div *ngIf=\"item.tooltip_title\" class=\"cmacs-normalized-horizontal-bar-chart-tooltip-title\">\r\n            {{item.tooltip_title}}\r\n          </div>\r\n          <div class=\"cmacs-normalized-horizontal-bar-chart-tooltip-wrapper\">\r\n            <div *ngFor=\"let label of legend; index as i;\">\r\n              <span class=\"legend-bar\" [style.backgroundColor]=\"colorScheme.domain[i]\"></span>\r\n              <span class=\"legend-text\">{{label}}</span>\r\n              <span class=\"legend-value\">{{getSeriesValue(item, label)}}</span>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n      </canvas>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                    styles: [":host(){display:block}.legend-data{display:-webkit-box;display:flex;overflow:hidden;margin-right:28px;margin-left:25px}.legend-column{display:table-cell;font-family:Roboto-Regular;font-size:12px;color:#656c79;white-space:nowrap;padding-top:8px}.legend-left-icon,.legend-right-icon{top:5px;font-size:19px;padding-left:5px;padding-right:5px;cursor:pointer}.legend-left-icon{position:absolute;z-index:2;left:0}.legend-right-icon{position:absolute;right:0}.legend-text{padding-left:6px;padding-right:20px}.legend-column:last-child .legend-text{padding-right:0}.legend-bar{width:4px;height:10px;border-radius:5px;display:inline-block}.legend-row{width:100%;margin-bottom:30px;display:-webkit-box;display:flex;place-content:flex-end}.chart-content{overflow-x:auto}.chart-content-row{margin-bottom:15px;font-family:Roboto-Regular;font-size:12px;letter-spacing:.12px;color:#656c79}.chart-content-text{width:110px;display:inline-block;vertical-align:top;margin-right:5px}::ng-deep .cmacs-normalized-chart-tooltip .ant-tooltip-content,::ng-deep .cmacs-normalized-chart-tooltip .ant-tooltip-inner{background-color:rgba(0,0,0,.55)!important}::ng-deep .cmacs-normalized-chart-tooltip.ant-tooltip-placement-top .ant-tooltip-arrow{border-top-color:rgba(0,0,0,.7)!important;opacity:1!important}.legend-value{float:right}.cmacs-normalized-horizontal-bar-chart-tooltip-wrapper{font-family:Roboto-Regular;font-size:13px}.cmacs-normalized-horizontal-bar-chart-tooltip-wrapper .legend-text{color:#bec4cd}.cmacs-normalized-horizontal-bar-chart-tooltip-title{color:#bec4cd;font-size:13px;border-bottom:1px solid #bec4cd;padding:4px 0;margin-bottom:7px}"]
                }] }
    ];
    /** @nocollapse */
    CmacsNormalizedHorizontalBarChartComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: UtilService }
    ]; };
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
    return CmacsNormalizedHorizontalBarChartComponent;
}());
export { CmacsNormalizedHorizontalBarChartComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtbm9ybWFsaXplZC1ob3Jpem9udGFsLWJhci1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLW5vcm1hbGl6ZWQtaG9yaXpvbnRhbC1iYXItY2hhcnQvY21hY3Mtbm9ybWFsaXplZC1ob3Jpem9udGFsLWJhci1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBaUIsTUFBTSxFQUFFLFlBQVksRUFBYSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBZSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR2pMLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUU1RDtJQThCRSxvREFDVSxRQUFtQixFQUNuQixVQUFzQixFQUN0QixJQUFpQjtRQUZqQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsU0FBSSxHQUFKLElBQUksQ0FBYTtRQTFCakIsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFTOUMsVUFBSyxHQUFHLEdBQUcsQ0FBQztRQUNaLFdBQU0sR0FBRyxHQUFHLENBQUM7UUFFYixxQkFBZ0IsR0FBRyxJQUFJLENBQUM7O1FBR2YsZ0JBQVcsR0FBRztZQUNyQixNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQztTQUMxQyxDQUFDO1FBV0EsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELDZEQUFROzs7SUFBUjs7WUFDTSxJQUFJLEdBQVUsRUFBRTtRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLENBQUMsSUFB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VCxRQUFRLEVBQUUsdUNBQXVDO29CQUNqRCx3ekVBQXFFOztpQkFFdEU7Ozs7Z0JBVGtGLFNBQVM7Z0JBQUUsVUFBVTtnQkFHL0YsV0FBVzs7OzRCQVNqQixNQUFNO2dDQUNOLFNBQVMsU0FBQyxlQUFlLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFOzRCQUMvQyxZQUFZLFNBQUMsYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTt5QkFDaEQsWUFBWSxTQUFDLGFBQWE7K0JBQzFCLEtBQUs7dUJBR0wsS0FBSzt1QkFDTCxLQUFLOzhCQU9MLEtBQUs7O0lBMkdSLGlEQUFDO0NBQUEsQUFqSUQsSUFpSUM7U0E1SFksMENBQTBDOzs7SUFFckQsK0RBQThDOztJQUM5QyxtRUFBd0Y7O0lBQ3hGLCtEQUF5RTs7SUFDekUsNERBQTREOztJQUM1RCxrRUFBeUQ7O0lBR3pELDBEQUFpQzs7SUFDakMsMERBQXlCOztJQUN6QiwyREFBWTs7SUFDWiw0REFBYTs7SUFFYixzRUFBd0I7O0lBR3hCLGlFQUVFOztJQUVGLHdEQUFHOztJQUVILDREQUFrQjs7Ozs7SUFHaEIsOERBQTJCOzs7OztJQUMzQixnRUFBOEI7Ozs7O0lBQzlCLDBEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGRyZW4sIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXaWRnZXRBY3Rpb25UeXBlIH0gZnJvbSAnLi4vY29yZS9lbnVtcy93aWRnZXQtYWN0aW9uLXR5cGUuZW51bSc7XHJcbmltcG9ydCB7IENoYXJ0RGF0YU11bHRpIH0gZnJvbSAnLi4vY29yZS9pbnRlcmZhY2VzL2NoYXJ0LWRhdGEtaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgVXRpbFNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3V0aWwuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLW5vcm1hbGl6ZWQtaG9yaXpvbnRhbC1iYXItY2hhcnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1ub3JtYWxpemVkLWhvcml6b250YWwtYmFyLWNoYXJ0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1ub3JtYWxpemVkLWhvcml6b250YWwtYmFyLWNoYXJ0LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NOb3JtYWxpemVkSG9yaXpvbnRhbEJhckNoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG5cclxuICBAT3V0cHV0KCkgY2xpY2tNZW51ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQFZpZXdDaGlsZCgnbGVnZW5kQ29udGVudCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBwdWJsaWMgbGVnZW5kQ29udGVudDogRWxlbWVudFJlZjxhbnk+O1xyXG4gIEBWaWV3Q2hpbGRyZW4oJ2NoYXJ0Y2FudmFzJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGNhbnZhc1JlZjogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkcmVuKCdjaGFydGNhbnZhcycpIGNhbnZhcyE6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcclxuICBASW5wdXQoKSBjaGFydFRvb2x0aXA6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbDtcclxuXHJcbiAgLy8gY29udGVudFxyXG4gIEBJbnB1dCgpIGRhdGEhOiBDaGFydERhdGFNdWx0aVtdO1xyXG4gIEBJbnB1dCgpIHZpZXchOiBudW1iZXJbXTtcclxuICB3aWR0aCA9IDI3NTtcclxuICBoZWlnaHQgPSAzMDA7XHJcblxyXG4gIGRpc3BsYXlBcnJvd0J0bnMgPSB0cnVlO1xyXG5cclxuICAvLyBvdHBpb25zXHJcbiAgQElucHV0KCkgY29sb3JTY2hlbWUgPSB7XHJcbiAgICBkb21haW46IFsnIzAwQ0U3RCcsICcjRkZDNjM0JywgJyNGNjUwM0MnXVxyXG4gIH07XHJcblxyXG4gIGlkO1xyXG5cclxuICBsZWdlbmQhOiBzdHJpbmdbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHV0aWw6IFV0aWxTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICB0aGlzLmlkID0gdXRpbC51dWlkdjQoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgbGV0IHRlbXA6IGFueVtdID0gW107XHJcbiAgICB0aGlzLmRhdGEubWFwKGQgPT4gZC5zZXJpZXMubWFwKHggPT4geC5uYW1lKSkuZm9yRWFjaCgoeCkgPT4gdGVtcCA9IFsuLi50ZW1wLCAuLi54XSk7XHJcbiAgICB0aGlzLmxlZ2VuZCAgPSBBcnJheS5mcm9tKG5ldyBTZXQoWy4uLnRlbXBdKSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpIHtcclxuICAgIGlmICh0aGlzLnZpZXcgJiYgdGhpcy52aWV3Lmxlbmd0aCA9PT0gMikge1xyXG4gICAgICB0aGlzLndpZHRoID0gdGhpcy52aWV3WzBdO1xyXG4gICAgICB0aGlzLmhlaWdodCA9IHRoaXMudmlld1sxXSAtIDcwO1xyXG5cclxuICAgICAgaWYodGhpcy5yZW5kZXJlcikge1xyXG4gICAgICAgIHRoaXMucmVzaXplKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuZGF0YS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzLScgKyB0aGlzLmlkICsgJy0nICsgaW5kZXgpICBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgICAgICBpZiAoY2FudmFzLmdldENvbnRleHQpIHtcclxuICAgICAgICAgIC8vXHJcbiAgICAgICAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgICBjb25zdCB2YWwgPSB0aGlzLnZpZXdbMF0gLSAxNDY7XHJcbiAgICAgICAgICBjYW52YXMud2lkdGggPSAodmFsID4gMCkgPyB2YWwgOiAwO1xyXG4gICAgICAgICAgY2FudmFzLmhlaWdodCA9IDIwO1xyXG4gICAgICAgICAgY29uc3QgdG90YWwgPSB0aGlzLmRhdGFbaW5kZXhdLnNlcmllcy5tYXAocyA9PiBzLnZhbHVlKS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKTtcclxuICAgICAgICAgIGxldCBtb3ZlID0gMDtcclxuICAgICAgICAgIC8vXHJcbiAgICAgICAgICBjb25zdCBlbGVtcyA9IHRoaXMuZGF0YVtpbmRleF0uc2VyaWVzLnNvcnQoKGEsIGIpID0+XHJcbiAgICAgICAgICAgIHRoaXMubGVnZW5kLmZpbmRJbmRleCh5ID0+IHkgPT09IGEubmFtZSkgLSB0aGlzLmxlZ2VuZC5maW5kSW5kZXgoeSA9PiB5ID09PSBiLm5hbWUpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBlbGVtcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAvLyBSZXNldCB0aGUgY3VycmVudCBwYXRoXHJcbiAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIGNvbnRleHQubW92ZVRvKG1vdmUsIDApO1xyXG4gICAgICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDE1O1xyXG4gICAgICAgICAgICBjb25zdCB2YWwgPSBlbGVtc1tqXS52YWx1ZTtcclxuICAgICAgICAgICAgbW92ZSArPSB2YWwgLyB0b3RhbCAqIGNhbnZhcy53aWR0aDtcclxuICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3JTY2hlbWUuZG9tYWluW2pdO1xyXG4gICAgICAgICAgICBjb250ZXh0LmxpbmVUbyhtb3ZlIC0gNSwgMCk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LCAwKTtcclxuXHJcbiAgICB0aGlzLnNob3dBcnJvd0J0bnMoKTtcclxuICB9XHJcblxyXG4gIHJlc2l6ZSgpIHtcclxuICAgIGNvbnN0IHdpZHRoID0gdGhpcy52aWV3WzBdIC0gMTU7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCBgJHt3aWR0aH1weGApO1xyXG4gIH1cclxuXHJcbiAgc2Nyb2xsUmlnaHQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmxlZ2VuZENvbnRlbnQubmF0aXZlRWxlbWVudC5zY3JvbGxUbyh7IGxlZnQ6ICh0aGlzLmxlZ2VuZENvbnRlbnQubmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0IC0gNDApLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgfVxyXG5cclxuICBzY3JvbGxMZWZ0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5sZWdlbmRDb250ZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG8oeyBsZWZ0OiAodGhpcy5sZWdlbmRDb250ZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdCArIDQwKSwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIG1lbnVDbGljayh0eXBlOiBXaWRnZXRBY3Rpb25UeXBlKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsaWNrTWVudS5lbWl0KHR5cGUpO1xyXG4gIH1cclxuXHJcbiAgc2hvd0Fycm93QnRucygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmxlZ2VuZCkge1xyXG4gICAgICBjb25zdCB0ZXh0ID0gdGhpcy5sZWdlbmQubWFwKGkgPT4gaSArICdzcGFjZScpO1xyXG4gICAgICBjb25zdCB0c2l6ZSA9IHRoaXMudXRpbC5nZXRfdGV4X3NpemUodGV4dCwgJzEycHggUm9ib3RvLVJlZ3VsYXInKTtcclxuICAgICAgdGhpcy5kaXNwbGF5QXJyb3dCdG5zID0gdHNpemUud2lkdGggPiB0aGlzLnZpZXdbMF0gLSAzNTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFNlcmllc1ZhbHVlKGl0ZW0sIGxhYmVsKSB7XHJcbiAgICBjb25zdCBlbGVtID0gaXRlbS5zZXJpZXMuZmluZChlID0+IGUubmFtZSA9PT0gbGFiZWwpO1xyXG4gICAgcmV0dXJuIGVsZW0udmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0RGF0YVRhYmxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRDaGFydEltYWdlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2FudmFzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldExlZ2VuZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmxlZ2VuZDtcclxuICB9XHJcbn1cclxuIl19