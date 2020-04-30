/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UtilService } from '../core/services/util.service';
var CmacsNormalizedHorizontalBarChartComponent = /** @class */ (function () {
    function CmacsNormalizedHorizontalBarChartComponent(util) {
        this.util = util;
        this.clickMenu = new EventEmitter();
        this.minWidth = 150;
        this.width = 300;
        this.pw = 1;
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
        this.pw = 1;
        if (this.view && this.view.length === 2) {
            this.pw = this.view[0] > this.width ? this.view[0] / this.width : 1;
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
                    canvas.width = _this.minWidth * _this.pw;
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
                        var val = elems[j].value;
                        move += val / total * canvas.width;
                        context.strokeStyle = _this.colorScheme.domain[j];
                        context.lineTo(move - 5, 0);
                        context.stroke();
                    }
                }
            }
        }), 0);
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
    CmacsNormalizedHorizontalBarChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-normalized-horizontal-bar-chart',
                    template: "<div class=\"sd-content\">\r\n  <!-- Legend -->\r\n  <div nz-row class=\"legend-row\">\r\n    <div class=\"legend-column\" *ngFor=\"let l of legend; let i = index;\">\r\n      <span [style.background-color]=\"colorScheme.domain[i]\" class=\"legend-bar\"> </span>\r\n      <span class=\"legend-text\">{{l}}</span>\r\n    </div>\r\n  </div>\r\n  <!-- Chart -->\r\n  <div nz-row class=\"chart-content\">\r\n    <div *ngFor=\"let item of data; let i = index\" nz-row class=\"chart-content-row\">\r\n      <div nz-col nzSpan=\"8\" class=\"chart-content-row\">{{item.name}}</div>\r\n      <div nz-col nzSpan=\"16\" style=\"height: 8px; margin-top: 4px;\">\r\n        <canvas id=\"canvas-{{id}}-{{i}}\" class=\"chart-content-canvas\"></canvas>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",
                    styles: [".legend-column{display:table-cell;float:left;font-family:Roboto;font-size:12px;color:#656c79}.legend-text{padding-left:6px;padding-right:20px}.legend-column:last-child .legend-text{padding-right:0}.legend-bar{width:4px;height:10px;border-radius:5px;display:inline-block}.legend-row{width:100%;margin-bottom:30px;display:-webkit-box;display:flex;place-content:flex-end}.chart-content-row{margin-bottom:15px;font-family:Roboto;font-size:12px;letter-spacing:.12px;color:#656c79}.sd-content{margin:0 20px}"]
                }] }
    ];
    /** @nocollapse */
    CmacsNormalizedHorizontalBarChartComponent.ctorParameters = function () { return [
        { type: UtilService }
    ]; };
    CmacsNormalizedHorizontalBarChartComponent.propDecorators = {
        clickMenu: [{ type: Output }],
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
    CmacsNormalizedHorizontalBarChartComponent.prototype.data;
    /** @type {?} */
    CmacsNormalizedHorizontalBarChartComponent.prototype.view;
    /** @type {?} */
    CmacsNormalizedHorizontalBarChartComponent.prototype.minWidth;
    /** @type {?} */
    CmacsNormalizedHorizontalBarChartComponent.prototype.width;
    /** @type {?} */
    CmacsNormalizedHorizontalBarChartComponent.prototype.pw;
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
    CmacsNormalizedHorizontalBarChartComponent.prototype.util;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtbm9ybWFsaXplZC1ob3Jpem9udGFsLWJhci1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLW5vcm1hbGl6ZWQtaG9yaXpvbnRhbC1iYXItY2hhcnQvY21hY3Mtbm9ybWFsaXplZC1ob3Jpem9udGFsLWJhci1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBaUIsTUFBTSxFQUFFLFlBQVksRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUd6RyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFNUQ7SUF5QkUsb0RBQ1UsSUFBaUI7UUFBakIsU0FBSSxHQUFKLElBQUksQ0FBYTtRQW5CakIsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFLOUMsYUFBUSxHQUFHLEdBQUcsQ0FBQztRQUNmLFVBQUssR0FBRyxHQUFHLENBQUM7UUFDWixPQUFFLEdBQUcsQ0FBQyxDQUFDOztRQUdFLGdCQUFXLEdBQUc7WUFDckIsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7U0FDMUMsQ0FBQztRQVNBLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCw2REFBUTs7O0lBQVI7O1lBQ00sSUFBSSxHQUFVLEVBQUU7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEVBQU4sQ0FBTSxFQUFDLEVBQXpCLENBQXlCLEVBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxJQUFJLG9CQUFPLElBQUksRUFBSyxDQUFDLENBQUMsRUFBdEIsQ0FBc0IsRUFBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxNQUFNLEdBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsa0JBQUssSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7O0lBRUQsZ0VBQVc7OztJQUFYO1FBQUEsaUJBa0NDO1FBakNDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1osSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckU7UUFFRCxVQUFVOzs7UUFBQztZQUNULEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTs7b0JBQy9DLE1BQU0sR0FBRyxtQkFBQSxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsRUFBc0I7Z0JBQy9GLElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRTs7O3dCQUVmLE9BQU8sR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztvQkFDdkMsTUFBTSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxFQUFFLENBQUM7b0JBQ3ZDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDOzt3QkFDYixLQUFLLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRzs7OztvQkFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxLQUFLLEVBQVAsQ0FBTyxFQUFDLENBQUMsTUFBTTs7Ozs7b0JBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxHQUFHLENBQUMsRUFBTCxDQUFLLEdBQUUsQ0FBQyxDQUFDOzt3QkFDOUUsSUFBSSxHQUFHLENBQUM7Ozt3QkFFTixLQUFLLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSTs7Ozs7b0JBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQzt3QkFDOUMsT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLFNBQVM7Ozs7d0JBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBWixDQUFZLEVBQUMsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLFNBQVM7Ozs7d0JBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBWixDQUFZLEVBQUM7b0JBQW5GLENBQW1GLEVBQ3BGO29CQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO3dCQUNyQyx5QkFBeUI7d0JBQ3pCLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQzt3QkFDcEIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ3hCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDOzs0QkFDakIsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLO3dCQUMxQixJQUFJLElBQUksR0FBRyxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO3dCQUNuQyxPQUFPLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNqRCxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQzVCLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztxQkFDbEI7aUJBQ0Y7YUFDRjtRQUNILENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsOERBQVM7Ozs7SUFBVCxVQUFVLElBQXNCO1FBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7O2dCQTNFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVDQUF1QztvQkFDakQsZ3lCQUFxRTs7aUJBRXRFOzs7O2dCQU5RLFdBQVc7Ozs0QkFTakIsTUFBTTt1QkFHTixLQUFLO3VCQUNMLEtBQUs7OEJBTUwsS0FBSzs7SUE0RFIsaURBQUM7Q0FBQSxBQTdFRCxJQTZFQztTQXhFWSwwQ0FBMEM7OztJQUVyRCwrREFBOEM7O0lBRzlDLDBEQUFpQzs7SUFDakMsMERBQXlCOztJQUN6Qiw4REFBZTs7SUFDZiwyREFBWTs7SUFDWix3REFBTzs7SUFHUCxpRUFFRTs7SUFFRix3REFBRzs7SUFFSCw0REFBa0I7Ozs7O0lBR2hCLDBEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXaWRnZXRBY3Rpb25UeXBlIH0gZnJvbSAnLi4vY29yZS9lbnVtcy93aWRnZXQtYWN0aW9uLXR5cGUuZW51bSc7XHJcbmltcG9ydCB7IENoYXJ0RGF0YU11bHRpIH0gZnJvbSAnLi4vY29yZS9pbnRlcmZhY2VzL2NoYXJ0LWRhdGEtaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgVXRpbFNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3V0aWwuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLW5vcm1hbGl6ZWQtaG9yaXpvbnRhbC1iYXItY2hhcnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1ub3JtYWxpemVkLWhvcml6b250YWwtYmFyLWNoYXJ0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1ub3JtYWxpemVkLWhvcml6b250YWwtYmFyLWNoYXJ0LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NOb3JtYWxpemVkSG9yaXpvbnRhbEJhckNoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG5cclxuICBAT3V0cHV0KCkgY2xpY2tNZW51ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIC8vIGNvbnRlbnRcclxuICBASW5wdXQoKSBkYXRhITogQ2hhcnREYXRhTXVsdGlbXTtcclxuICBASW5wdXQoKSB2aWV3ITogbnVtYmVyW107XHJcbiAgbWluV2lkdGggPSAxNTA7XHJcbiAgd2lkdGggPSAzMDA7XHJcbiAgcHcgPSAxO1xyXG5cclxuICAvLyBvdHBpb25zXHJcbiAgQElucHV0KCkgY29sb3JTY2hlbWUgPSB7XHJcbiAgICBkb21haW46IFsnIzAwQ0U3RCcsICcjRkZDNjM0JywgJyNGNjUwM0MnXVxyXG4gIH07XHJcblxyXG4gIGlkO1xyXG5cclxuICBsZWdlbmQhOiBzdHJpbmdbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHV0aWw6IFV0aWxTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICB0aGlzLmlkID0gdXRpbC51dWlkdjQoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgbGV0IHRlbXA6IGFueVtdID0gW107XHJcbiAgICB0aGlzLmRhdGEubWFwKGQgPT4gZC5zZXJpZXMubWFwKHggPT4geC5uYW1lKSkuZm9yRWFjaCgoeCkgPT4gdGVtcCA9IFsuLi50ZW1wLCAuLi54XSk7XHJcbiAgICB0aGlzLmxlZ2VuZCAgPSBBcnJheS5mcm9tKG5ldyBTZXQoWy4uLnRlbXBdKSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpIHtcclxuICAgIHRoaXMucHcgPSAxO1xyXG4gICAgaWYgKHRoaXMudmlldyAmJiB0aGlzLnZpZXcubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgIHRoaXMucHcgPSB0aGlzLnZpZXdbMF0gPiB0aGlzLndpZHRoID8gdGhpcy52aWV3WzBdIC8gdGhpcy53aWR0aCA6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmRhdGEubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcy0nICsgdGhpcy5pZCArICctJyArIGluZGV4KSAgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICAgICAgaWYgKGNhbnZhcy5nZXRDb250ZXh0KSB7XHJcbiAgICAgICAgICAvL1xyXG4gICAgICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgICAgY2FudmFzLndpZHRoID0gdGhpcy5taW5XaWR0aCAqIHRoaXMucHc7XHJcbiAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gMjA7XHJcbiAgICAgICAgICBjb25zdCB0b3RhbCA9IHRoaXMuZGF0YVtpbmRleF0uc2VyaWVzLm1hcChzID0+IHMudmFsdWUpLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApO1xyXG4gICAgICAgICAgbGV0IG1vdmUgPSAwO1xyXG4gICAgICAgICAgLy9cclxuICAgICAgICAgIGNvbnN0IGVsZW1zID0gdGhpcy5kYXRhW2luZGV4XS5zZXJpZXMuc29ydCgoYSwgYikgPT5cclxuICAgICAgICAgICAgdGhpcy5sZWdlbmQuZmluZEluZGV4KHkgPT4geSA9PT0gYS5uYW1lKSAtIHRoaXMubGVnZW5kLmZpbmRJbmRleCh5ID0+IHkgPT09IGIubmFtZSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGVsZW1zLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIC8vIFJlc2V0IHRoZSBjdXJyZW50IHBhdGhcclxuICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgY29udGV4dC5tb3ZlVG8obW92ZSwgMCk7XHJcbiAgICAgICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gMTU7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IGVsZW1zW2pdLnZhbHVlO1xyXG4gICAgICAgICAgICBtb3ZlICs9IHZhbCAvIHRvdGFsICogY2FudmFzLndpZHRoO1xyXG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvclNjaGVtZS5kb21haW5bal07XHJcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKG1vdmUgLSA1LCAwKTtcclxuICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sIDApO1xyXG4gIH1cclxuXHJcbiAgbWVudUNsaWNrKHR5cGU6IFdpZGdldEFjdGlvblR5cGUpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xpY2tNZW51LmVtaXQodHlwZSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=