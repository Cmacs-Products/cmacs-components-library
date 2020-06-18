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
        this.width = 275;
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
            this.width = this.view[0] - 115 > this.minWidth ? this.view[0] - 115 : 275;
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
                    canvas.width = _this.width;
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
                    template: "<div class=\"sd-content\">\r\n  <!-- Legend -->\r\n  <div nz-row class=\"legend-row\">\r\n    <div class=\"legend-column\" *ngFor=\"let l of legend; let i = index;\">\r\n      <span [style.background-color]=\"colorScheme.domain[i]\" class=\"legend-bar\"> </span>\r\n      <span class=\"legend-text\">{{l}}</span>\r\n    </div>\r\n  </div>\r\n  <!-- Chart -->\r\n  <div nz-row class=\"chart-content\">\r\n    <div *ngFor=\"let item of data; let i = index\" nz-row class=\"chart-content-row\">\r\n      <div nz-col class=\"chart-content-text\" style=\"width: 110px; display: inline-block; vertical-align: top;\">{{item.name}}</div>\r\n      <canvas style=\"display: inline-block; margin-top: 4px;\" id=\"canvas-{{id}}-{{i}}\" class=\"chart-content-canvas\"></canvas>\r\n    </div>\r\n  </div>\r\n</div>",
                    styles: [".legend-column{display:inline;font-family:Roboto-Regular;font-size:12px;color:#656c79}.legend-text{padding-left:6px}.legend-column:last-child .legend-text{padding-right:0}.legend-bar{width:4px;height:10px;border-radius:5px;display:inline-block;margin-left:15px}.legend-row{width:100%;margin-bottom:30px;text-align:right}.chart-content-row{margin-bottom:15px;font-family:Roboto-Regular;font-size:12px;letter-spacing:.12px;color:#656c79}.chart-content-text{width:115px;display:inline-block;vertical-align:top;margin-right:5px}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtbm9ybWFsaXplZC1ob3Jpem9udGFsLWJhci1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLW5vcm1hbGl6ZWQtaG9yaXpvbnRhbC1iYXItY2hhcnQvY21hY3Mtbm9ybWFsaXplZC1ob3Jpem9udGFsLWJhci1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBaUIsTUFBTSxFQUFFLFlBQVksRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUd6RyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFNUQ7SUF3QkUsb0RBQ1UsSUFBaUI7UUFBakIsU0FBSSxHQUFKLElBQUksQ0FBYTtRQWxCakIsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFLOUMsYUFBUSxHQUFHLEdBQUcsQ0FBQztRQUNmLFVBQUssR0FBRyxHQUFHLENBQUM7O1FBR0gsZ0JBQVcsR0FBRztZQUNyQixNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQztTQUMxQyxDQUFDO1FBU0EsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELDZEQUFROzs7SUFBUjs7WUFDTSxJQUFJLEdBQVUsRUFBRTtRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksRUFBTixDQUFNLEVBQUMsRUFBekIsQ0FBeUIsRUFBQyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLENBQUMsSUFBSyxPQUFBLElBQUksb0JB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O3dCQUM1QixPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7cUJBQ2xCO2lCQUNGO2FBQ0Y7UUFDSCxDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDOzs7OztJQUVELDhEQUFTOzs7O0lBQVQsVUFBVSxJQUFzQjtRQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDOztnQkF6RUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1Q0FBdUM7b0JBQ2pELDR5QkFBcUU7O2lCQUV0RTs7OztnQkFOUSxXQUFXOzs7NEJBU2pCLE1BQU07dUJBR04sS0FBSzt1QkFDTCxLQUFLOzhCQUtMLEtBQUs7O0lBMkRSLGlEQUFDO0NBQUEsQUEzRUQsSUEyRUM7U0F0RVksMENBQTBDOzs7SUFFckQsK0RBQThDOztJQUc5QywwREFBaUM7O0lBQ2pDLDBEQUF5Qjs7SUFDekIsOERBQWU7O0lBQ2YsMkRBQVk7O0lBR1osaUVBRUU7O0lBRUYsd0RBQUc7O0lBRUgsNERBQWtCOzs7OztJQUdoQiwwREFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEFmdGVyVmlld0luaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgV2lkZ2V0QWN0aW9uVHlwZSB9IGZyb20gJy4uL2NvcmUvZW51bXMvd2lkZ2V0LWFjdGlvbi10eXBlLmVudW0nO1xyXG5pbXBvcnQgeyBDaGFydERhdGFNdWx0aSB9IGZyb20gJy4uL2NvcmUvaW50ZXJmYWNlcy9jaGFydC1kYXRhLWludGVyZmFjZSc7XHJcbmltcG9ydCB7IFV0aWxTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy91dGlsLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1ub3JtYWxpemVkLWhvcml6b250YWwtYmFyLWNoYXJ0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mtbm9ybWFsaXplZC1ob3Jpem9udGFsLWJhci1jaGFydC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3Mtbm9ybWFsaXplZC1ob3Jpem9udGFsLWJhci1jaGFydC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzTm9ybWFsaXplZEhvcml6b250YWxCYXJDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuXHJcbiAgQE91dHB1dCgpIGNsaWNrTWVudSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAvLyBjb250ZW50XHJcbiAgQElucHV0KCkgZGF0YSE6IENoYXJ0RGF0YU11bHRpW107XHJcbiAgQElucHV0KCkgdmlldyE6IG51bWJlcltdO1xyXG4gIG1pbldpZHRoID0gMTUwO1xyXG4gIHdpZHRoID0gMjc1O1xyXG5cclxuICAvLyBvdHBpb25zXHJcbiAgQElucHV0KCkgY29sb3JTY2hlbWUgPSB7XHJcbiAgICBkb21haW46IFsnIzAwQ0U3RCcsICcjRkZDNjM0JywgJyNGNjUwM0MnXVxyXG4gIH07XHJcblxyXG4gIGlkO1xyXG5cclxuICBsZWdlbmQhOiBzdHJpbmdbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHV0aWw6IFV0aWxTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICB0aGlzLmlkID0gdXRpbC51dWlkdjQoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgbGV0IHRlbXA6IGFueVtdID0gW107XHJcbiAgICB0aGlzLmRhdGEubWFwKGQgPT4gZC5zZXJpZXMubWFwKHggPT4geC5uYW1lKSkuZm9yRWFjaCgoeCkgPT4gdGVtcCA9IFsuLi50ZW1wLCAuLi54XSk7XHJcbiAgICB0aGlzLmxlZ2VuZCAgPSBBcnJheS5mcm9tKG5ldyBTZXQoWy4uLnRlbXBdKSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpIHtcclxuICAgIGlmICh0aGlzLnZpZXcgJiYgdGhpcy52aWV3Lmxlbmd0aCA9PT0gMikge1xyXG4gICAgICB0aGlzLndpZHRoID0gdGhpcy52aWV3WzBdIC0gMTE1ID4gdGhpcy5taW5XaWR0aCA/IHRoaXMudmlld1swXSAtIDExNSA6IDI3NTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuZGF0YS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzLScgKyB0aGlzLmlkICsgJy0nICsgaW5kZXgpICBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgICAgICBpZiAoY2FudmFzLmdldENvbnRleHQpIHtcclxuICAgICAgICAgIC8vXHJcbiAgICAgICAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgICBjYW52YXMud2lkdGggPSB0aGlzLndpZHRoO1xyXG4gICAgICAgICAgY2FudmFzLmhlaWdodCA9IDIwO1xyXG4gICAgICAgICAgY29uc3QgdG90YWwgPSB0aGlzLmRhdGFbaW5kZXhdLnNlcmllcy5tYXAocyA9PiBzLnZhbHVlKS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKTtcclxuICAgICAgICAgIGxldCBtb3ZlID0gMDtcclxuICAgICAgICAgIC8vXHJcbiAgICAgICAgICBjb25zdCBlbGVtcyA9IHRoaXMuZGF0YVtpbmRleF0uc2VyaWVzLnNvcnQoKGEsIGIpID0+XHJcbiAgICAgICAgICAgIHRoaXMubGVnZW5kLmZpbmRJbmRleCh5ID0+IHkgPT09IGEubmFtZSkgLSB0aGlzLmxlZ2VuZC5maW5kSW5kZXgoeSA9PiB5ID09PSBiLm5hbWUpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBlbGVtcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAvLyBSZXNldCB0aGUgY3VycmVudCBwYXRoXHJcbiAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIGNvbnRleHQubW92ZVRvKG1vdmUsIDApO1xyXG4gICAgICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDE1O1xyXG4gICAgICAgICAgICBjb25zdCB2YWwgPSBlbGVtc1tqXS52YWx1ZTtcclxuICAgICAgICAgICAgbW92ZSArPSB2YWwgLyB0b3RhbCAqIGNhbnZhcy53aWR0aDtcclxuICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3JTY2hlbWUuZG9tYWluW2pdO1xyXG4gICAgICAgICAgICBjb250ZXh0LmxpbmVUbyhtb3ZlIC0gNSwgMCk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LCAwKTtcclxuICB9XHJcblxyXG4gIG1lbnVDbGljayh0eXBlOiBXaWRnZXRBY3Rpb25UeXBlKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsaWNrTWVudS5lbWl0KHR5cGUpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19