/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, Renderer2, ElementRef, ViewChild } from '@angular/core';
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
    CmacsNormalizedHorizontalBarChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-normalized-horizontal-bar-chart',
                    template: "<div class=\"sd-content\">\r\n  <!-- Legend -->\r\n  <div nz-row class=\"legend-row\">\r\n    <span class=\"legend-left-icon\" (click)=\"scrollRight()\" *ngIf=\"displayArrowBtns\">\r\n      <i class=\"iconArrowLarge-Chevron-Left\"></i>\r\n    </span>\r\n    <div #legendContent class=\"legend-data\">\r\n      <span class=\"legend-column\" *ngFor=\"let l of legend; let i = index;\">\r\n        <span [style.background-color]=\"colorScheme.domain[i]\" class=\"legend-bar\"> </span>\r\n        <span class=\"legend-text\">{{l}}</span>\r\n      </span>\r\n    </div>\r\n    <span (click)=\"scrollLeft()\" class=\"legend-right-icon\" *ngIf=\"displayArrowBtns\">\r\n      <i class=\"iconArrowLarge-Chevron-Right\"></i>\r\n    </span>\r\n  </div>\r\n  <!-- Chart -->\r\n  <div nz-row class=\"chart-content\" [style.height.px]=\"height\">\r\n    <div *ngFor=\"let item of data; let i = index\" nz-row class=\"chart-content-row\">\r\n      <div nz-col class=\"chart-content-text\">{{item.name}}</div>\r\n      <canvas style=\"display: inline-block; margin-top: 4px;\"\r\n              id=\"canvas-{{id}}-{{i}}\"\r\n              cmacs-tooltip\r\n              [overlayClassName]=\"'cmacs-normalized-chart-tooltip'\"\r\n              [cmacs-title]=\"chartTooltip ? chartTemplate : chartCustomTemplate\"\r\n              class=\"chart-content-canvas\">\r\n        <ng-template #chartTemplate>\r\n           <ng-container [ngTemplateOutlet]=\"chartTooltip\"\r\n                         [ngTemplateOutletContext]=\"{model: item}\"\r\n           ></ng-container>\r\n        </ng-template>\r\n\r\n        <ng-template #chartCustomTemplate>\r\n          <div *ngIf=\"item.tooltip_title\" class=\"cmacs-normalized-horizontal-bar-chart-tooltip-title\">\r\n            {{item.tooltip_title}}\r\n          </div>\r\n          <div class=\"cmacs-normalized-horizontal-bar-chart-tooltip-wrapper\">\r\n            <div *ngFor=\"let label of legend; index as i;\">\r\n              <span class=\"legend-bar\" [style.backgroundColor]=\"colorScheme.domain[i]\"></span>\r\n              <span class=\"legend-text\">{{label}}</span>\r\n              <span class=\"legend-value\">{{getSeriesValue(item, label)}}</span>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n      </canvas>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtbm9ybWFsaXplZC1ob3Jpem9udGFsLWJhci1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLW5vcm1hbGl6ZWQtaG9yaXpvbnRhbC1iYXItY2hhcnQvY21hY3Mtbm9ybWFsaXplZC1ob3Jpem9udGFsLWJhci1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBaUIsTUFBTSxFQUFFLFlBQVksRUFBYSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUd4SixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFNUQ7SUE0QkUsb0RBQ1UsUUFBbUIsRUFDbkIsVUFBc0IsRUFDdEIsSUFBaUI7UUFGakIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLFNBQUksR0FBSixJQUFJLENBQWE7UUF4QmpCLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBTzlDLFVBQUssR0FBRyxHQUFHLENBQUM7UUFDWixXQUFNLEdBQUcsR0FBRyxDQUFDO1FBRWIscUJBQWdCLEdBQUcsSUFBSSxDQUFDOztRQUdmLGdCQUFXLEdBQUc7WUFDckIsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7U0FDMUMsQ0FBQztRQVdBLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCw2REFBUTs7O0lBQVI7O1lBQ00sSUFBSSxHQUFVLEVBQUU7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEVBQU4sQ0FBTSxFQUFDLEVBQXpCLENBQXlCLEVBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxJQUFJLG9CQUFPLElBQUksRUFBSyxDQUFDLENBQUMsRUFBdEIsQ0FBc0IsRUFBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxNQUFNLEdBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsa0JBQUssSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7O0lBRUQsZ0VBQVc7OztJQUFYO1FBQUEsaUJBeUNDO1FBeENDLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFFaEMsSUFBRyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNoQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDZjtTQUNGO1FBRUQsVUFBVTs7O1FBQUM7WUFDVCxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7O29CQUMvQyxNQUFNLEdBQUcsbUJBQUEsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLEVBQXNCO2dCQUMvRixJQUFJLE1BQU0sQ0FBQyxVQUFVLEVBQUU7Ozt3QkFFZixPQUFPLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7O3dCQUNqQyxHQUFHLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHO29CQUM5QixNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDbkMsTUFBTSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7O3dCQUNiLEtBQUssR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHOzs7O29CQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEtBQUssRUFBUCxDQUFPLEVBQUMsQ0FBQyxNQUFNOzs7OztvQkFBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLEdBQUcsQ0FBQyxFQUFMLENBQUssR0FBRSxDQUFDLENBQUM7O3dCQUM5RSxJQUFJLEdBQUcsQ0FBQzs7O3dCQUVOLEtBQUssR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJOzs7OztvQkFBQyxVQUFDLENBQUMsRUFBRSxDQUFDO3dCQUM5QyxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUzs7Ozt3QkFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFaLENBQVksRUFBQyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUzs7Ozt3QkFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFaLENBQVksRUFBQztvQkFBbkYsQ0FBbUYsRUFDcEY7b0JBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7d0JBQ3JDLHlCQUF5Qjt3QkFDekIsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO3dCQUNwQixPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDeEIsT0FBTyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7OzRCQUNqQixLQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUs7d0JBQzFCLElBQUksSUFBSSxLQUFHLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7d0JBQ25DLE9BQU8sQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2pELE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDNUIsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO3FCQUNsQjtpQkFDRjthQUNGO1FBQ0gsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO1FBRU4sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCwyREFBTTs7O0lBQU47O1lBQ1EsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRTtRQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUssS0FBSyxPQUFJLENBQUMsQ0FBQztJQUMvRSxDQUFDOzs7O0lBRUQsZ0VBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQzlILENBQUM7Ozs7SUFFRCwrREFBVTs7O0lBQVY7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDOUgsQ0FBQzs7Ozs7SUFHRCw4REFBUzs7OztJQUFULFVBQVUsSUFBc0I7UUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELGtFQUFhOzs7SUFBYjtRQUNFLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTs7Z0JBQ1QsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxHQUFHLE9BQU8sRUFBWCxDQUFXLEVBQUM7O2dCQUN4QyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLHFCQUFxQixDQUFDO1lBQ2pFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ3pEO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsbUVBQWM7Ozs7O0lBQWQsVUFBZSxJQUFJLEVBQUUsS0FBSzs7WUFDbEIsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSTs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksS0FBSyxLQUFLLEVBQWhCLENBQWdCLEVBQUM7UUFDcEQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7O2dCQWxIRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVDQUF1QztvQkFDakQsMHhFQUFxRTs7aUJBRXRFOzs7O2dCQVRrRixTQUFTO2dCQUFFLFVBQVU7Z0JBRy9GLFdBQVc7Ozs0QkFTakIsTUFBTTtnQ0FDTixTQUFTLFNBQUMsZUFBZSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTsrQkFDL0MsS0FBSzt1QkFHTCxLQUFLO3VCQUNMLEtBQUs7OEJBT0wsS0FBSzs7SUErRlIsaURBQUM7Q0FBQSxBQW5IRCxJQW1IQztTQTlHWSwwQ0FBMEM7OztJQUVyRCwrREFBOEM7O0lBQzlDLG1FQUF3Rjs7SUFDeEYsa0VBQXlEOztJQUd6RCwwREFBaUM7O0lBQ2pDLDBEQUF5Qjs7SUFDekIsMkRBQVk7O0lBQ1osNERBQWE7O0lBRWIsc0VBQXdCOztJQUd4QixpRUFFRTs7SUFFRix3REFBRzs7SUFFSCw0REFBa0I7Ozs7O0lBR2hCLDhEQUEyQjs7Ozs7SUFDM0IsZ0VBQThCOzs7OztJQUM5QiwwREFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEFmdGVyVmlld0luaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXaWRnZXRBY3Rpb25UeXBlIH0gZnJvbSAnLi4vY29yZS9lbnVtcy93aWRnZXQtYWN0aW9uLXR5cGUuZW51bSc7XHJcbmltcG9ydCB7IENoYXJ0RGF0YU11bHRpIH0gZnJvbSAnLi4vY29yZS9pbnRlcmZhY2VzL2NoYXJ0LWRhdGEtaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgVXRpbFNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3V0aWwuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLW5vcm1hbGl6ZWQtaG9yaXpvbnRhbC1iYXItY2hhcnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1ub3JtYWxpemVkLWhvcml6b250YWwtYmFyLWNoYXJ0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1ub3JtYWxpemVkLWhvcml6b250YWwtYmFyLWNoYXJ0LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NOb3JtYWxpemVkSG9yaXpvbnRhbEJhckNoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG5cclxuICBAT3V0cHV0KCkgY2xpY2tNZW51ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQFZpZXdDaGlsZCgnbGVnZW5kQ29udGVudCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBwdWJsaWMgbGVnZW5kQ29udGVudDogRWxlbWVudFJlZjxhbnk+O1xyXG4gIEBJbnB1dCgpIGNoYXJ0VG9vbHRpcDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsO1xyXG5cclxuICAvLyBjb250ZW50XHJcbiAgQElucHV0KCkgZGF0YSE6IENoYXJ0RGF0YU11bHRpW107XHJcbiAgQElucHV0KCkgdmlldyE6IG51bWJlcltdO1xyXG4gIHdpZHRoID0gMjc1O1xyXG4gIGhlaWdodCA9IDMwMDtcclxuXHJcbiAgZGlzcGxheUFycm93QnRucyA9IHRydWU7XHJcblxyXG4gIC8vIG90cGlvbnNcclxuICBASW5wdXQoKSBjb2xvclNjaGVtZSA9IHtcclxuICAgIGRvbWFpbjogWycjMDBDRTdEJywgJyNGRkM2MzQnLCAnI0Y2NTAzQyddXHJcbiAgfTtcclxuXHJcbiAgaWQ7XHJcblxyXG4gIGxlZ2VuZCE6IHN0cmluZ1tdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgdXRpbDogVXRpbFNlcnZpY2VcclxuICApIHtcclxuICAgIHRoaXMuaWQgPSB1dGlsLnV1aWR2NCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBsZXQgdGVtcDogYW55W10gPSBbXTtcclxuICAgIHRoaXMuZGF0YS5tYXAoZCA9PiBkLnNlcmllcy5tYXAoeCA9PiB4Lm5hbWUpKS5mb3JFYWNoKCh4KSA9PiB0ZW1wID0gWy4uLnRlbXAsIC4uLnhdKTtcclxuICAgIHRoaXMubGVnZW5kICA9IEFycmF5LmZyb20obmV3IFNldChbLi4udGVtcF0pKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgaWYgKHRoaXMudmlldyAmJiB0aGlzLnZpZXcubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgIHRoaXMud2lkdGggPSB0aGlzLnZpZXdbMF07XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy52aWV3WzFdIC0gNzA7XHJcblxyXG4gICAgICBpZih0aGlzLnJlbmRlcmVyKSB7XHJcbiAgICAgICAgdGhpcy5yZXNpemUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5kYXRhLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMtJyArIHRoaXMuaWQgKyAnLScgKyBpbmRleCkgIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgICAgIGlmIChjYW52YXMuZ2V0Q29udGV4dCkge1xyXG4gICAgICAgICAgLy9cclxuICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICAgIGNvbnN0IHZhbCA9IHRoaXMudmlld1swXSAtIDE0NjtcclxuICAgICAgICAgIGNhbnZhcy53aWR0aCA9ICh2YWwgPiAwKSA/IHZhbCA6IDA7XHJcbiAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gMjA7XHJcbiAgICAgICAgICBjb25zdCB0b3RhbCA9IHRoaXMuZGF0YVtpbmRleF0uc2VyaWVzLm1hcChzID0+IHMudmFsdWUpLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApO1xyXG4gICAgICAgICAgbGV0IG1vdmUgPSAwO1xyXG4gICAgICAgICAgLy9cclxuICAgICAgICAgIGNvbnN0IGVsZW1zID0gdGhpcy5kYXRhW2luZGV4XS5zZXJpZXMuc29ydCgoYSwgYikgPT5cclxuICAgICAgICAgICAgdGhpcy5sZWdlbmQuZmluZEluZGV4KHkgPT4geSA9PT0gYS5uYW1lKSAtIHRoaXMubGVnZW5kLmZpbmRJbmRleCh5ID0+IHkgPT09IGIubmFtZSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGVsZW1zLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIC8vIFJlc2V0IHRoZSBjdXJyZW50IHBhdGhcclxuICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgY29udGV4dC5tb3ZlVG8obW92ZSwgMCk7XHJcbiAgICAgICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gMTU7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IGVsZW1zW2pdLnZhbHVlO1xyXG4gICAgICAgICAgICBtb3ZlICs9IHZhbCAvIHRvdGFsICogY2FudmFzLndpZHRoO1xyXG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvclNjaGVtZS5kb21haW5bal07XHJcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKG1vdmUgLSA1LCAwKTtcclxuICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sIDApO1xyXG5cclxuICAgIHRoaXMuc2hvd0Fycm93QnRucygpO1xyXG4gIH1cclxuXHJcbiAgcmVzaXplKCkge1xyXG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLnZpZXdbMF0gLSAxNTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIGAke3dpZHRofXB4YCk7XHJcbiAgfVxyXG5cclxuICBzY3JvbGxSaWdodCgpOiB2b2lkIHtcclxuICAgIHRoaXMubGVnZW5kQ29udGVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFRvKHsgbGVmdDogKHRoaXMubGVnZW5kQ29udGVudC5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnQgLSA0MCksIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuICB9XHJcblxyXG4gIHNjcm9sbExlZnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmxlZ2VuZENvbnRlbnQubmF0aXZlRWxlbWVudC5zY3JvbGxUbyh7IGxlZnQ6ICh0aGlzLmxlZ2VuZENvbnRlbnQubmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0ICsgNDApLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgbWVudUNsaWNrKHR5cGU6IFdpZGdldEFjdGlvblR5cGUpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xpY2tNZW51LmVtaXQodHlwZSk7XHJcbiAgfVxyXG5cclxuICBzaG93QXJyb3dCdG5zKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubGVnZW5kKSB7XHJcbiAgICAgIGNvbnN0IHRleHQgPSB0aGlzLmxlZ2VuZC5tYXAoaSA9PiBpICsgJ3NwYWNlJyk7XHJcbiAgICAgIGNvbnN0IHRzaXplID0gdGhpcy51dGlsLmdldF90ZXhfc2l6ZSh0ZXh0LCAnMTJweCBSb2JvdG8tUmVndWxhcicpO1xyXG4gICAgICB0aGlzLmRpc3BsYXlBcnJvd0J0bnMgPSB0c2l6ZS53aWR0aCA+IHRoaXMudmlld1swXSAtIDM1O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0U2VyaWVzVmFsdWUoaXRlbSwgbGFiZWwpIHtcclxuICAgIGNvbnN0IGVsZW0gPSBpdGVtLnNlcmllcy5maW5kKGUgPT4gZS5uYW1lID09PSBsYWJlbCk7XHJcbiAgICByZXR1cm4gZWxlbS52YWx1ZTtcclxuICB9XHJcbn1cclxuIl19