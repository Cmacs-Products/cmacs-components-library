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
        // otpions
        this.colorScheme = {
            domain: ['#5AA454', '#C7B42C', '#AAAAAA']
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
    CmacsNormalizedHorizontalBarChartComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        for (var index = 0; index < this.data.length; index++) {
            /** @type {?} */
            var canvas = (/** @type {?} */ (document.getElementById('canvas-' + this.id + '-' + index)));
            if (canvas.getContext) {
                //
                /** @type {?} */
                var context = canvas.getContext('2d');
                /** @type {?} */
                var total = this.data[index].series.map((/**
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
                var elems = this.data[index].series.sort((/**
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
                    context.moveTo(move, 1);
                    context.lineWidth = 15;
                    /** @type {?} */
                    var val = elems[j].value;
                    move += val / total * canvas.width;
                    context.strokeStyle = this.colorScheme.domain[j];
                    context.lineTo(move - 5, 1);
                    context.stroke();
                }
            }
        }
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
                    template: "<!-- Legend -->\r\n<div nz-row class=\"legend-row\">\r\n  <div class=\"legend-column\" *ngFor=\"let l of legend; let i = index;\">\r\n    <span [style.background-color]=\"colorScheme.domain[i]\" class=\"legend-bar\"> </span>\r\n    <span class=\"legend-text\">{{l}}</span>\r\n  </div>\r\n</div>\r\n<!-- Chart -->\r\n<div nz-row class=\"chart-content\">\r\n  <div *ngFor=\"let item of data; let i = index\" nz-row class=\"chart-content-row\">\r\n    <div nz-col nzSpan=\"8\">{{item.name}}</div>\r\n    <div nz-col nzSpan=\"16\" style=\"height: 8px; margin-top: 7px;\">\r\n      <canvas id=\"canvas-{{id}}-{{i}}\" class=\"chart-content-canvas\"></canvas>\r\n    </div>\r\n  </div>\r\n</div>",
                    styles: [".legend-bar{width:4px;height:10px;border-radius:5px;display:inline-block}.legend-row{width:100%}.legend-column{display:table-cell;float:right;font-family:Roboto;font-size:12px;color:#656c79}.legend-text{padding-left:6px;padding-right:20px}.chart-content{margin-top:15px;padding-left:20px;padding-right:20px;overflow:auto;height:160px;margin-right:20px}.chart-content-row{margin-bottom:15px;font-family:Roboto;font-size:12px;letter-spacing:.12px;color:#656c79}.chart-content::-webkit-scrollbar{width:7px}.chart-content::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);border-radius:10px}.chart-content::-webkit-scrollbar-thumb{background-color:#c9c9c9;border-radius:10px}.chart-content::-webkit-scrollbar-thumb:hover{background-color:#a1a1a1;border-radius:10px}.chart-content-canvas{width:100%}"]
                }] }
    ];
    /** @nocollapse */
    CmacsNormalizedHorizontalBarChartComponent.ctorParameters = function () { return [
        { type: UtilService }
    ]; };
    CmacsNormalizedHorizontalBarChartComponent.propDecorators = {
        clickMenu: [{ type: Output }],
        data: [{ type: Input }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtbm9ybWFsaXplZC1ob3Jpem9udGFsLWJhci1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLW5vcm1hbGl6ZWQtaG9yaXpvbnRhbC1iYXItY2hhcnQvY21hY3Mtbm9ybWFsaXplZC1ob3Jpem9udGFsLWJhci1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBaUIsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUc5RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFNUQ7SUFxQkUsb0RBQ1UsSUFBaUI7UUFBakIsU0FBSSxHQUFKLElBQUksQ0FBYTtRQWZqQixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQzs7UUFNckMsZ0JBQVcsR0FBRztZQUNyQixNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQztTQUMxQyxDQUFDO1FBU0EsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELDZEQUFROzs7SUFBUjs7WUFDTSxJQUFJLEdBQVUsRUFBRTtRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksRUFBTixDQUFNLEVBQUMsRUFBekIsQ0FBeUIsRUFBQyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLENBQUMsSUFBSyxPQUFBLElBQUksb0JBQU8sSUFBSSxFQUFLLENBQUMsQ0FBQyxFQUF0QixDQUFzQixFQUFDLENBQUM7UUFDckYs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eUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEFmdGVyVmlld0luaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFdpZGdldEFjdGlvblR5cGUgfSBmcm9tICcuLi9jb3JlL2VudW1zL3dpZGdldC1hY3Rpb24tdHlwZS5lbnVtJztcclxuaW1wb3J0IHsgQ2hhcnREYXRhTXVsdGkgfSBmcm9tICcuLi9jb3JlL2ludGVyZmFjZXMvY2hhcnQtZGF0YS1pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBVdGlsU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXRpbC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3Mtbm9ybWFsaXplZC1ob3Jpem9udGFsLWJhci1jaGFydCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLW5vcm1hbGl6ZWQtaG9yaXpvbnRhbC1iYXItY2hhcnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLW5vcm1hbGl6ZWQtaG9yaXpvbnRhbC1iYXItY2hhcnQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc05vcm1hbGl6ZWRIb3Jpem9udGFsQmFyQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBAT3V0cHV0KCkgY2xpY2tNZW51ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIC8vIGNvbnRlbnRcclxuICBASW5wdXQoKSBkYXRhITogQ2hhcnREYXRhTXVsdGlbXTtcclxuXHJcbiAgLy8gb3RwaW9uc1xyXG4gIEBJbnB1dCgpIGNvbG9yU2NoZW1lID0ge1xyXG4gICAgZG9tYWluOiBbJyM1QUE0NTQnLCAnI0M3QjQyQycsICcjQUFBQUFBJ11cclxuICB9O1xyXG5cclxuICBpZDtcclxuXHJcbiAgbGVnZW5kITogc3RyaW5nW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSB1dGlsOiBVdGlsU2VydmljZVxyXG4gICkge1xyXG4gICAgdGhpcy5pZCA9IHV0aWwudXVpZHY0KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGxldCB0ZW1wOiBhbnlbXSA9IFtdO1xyXG4gICAgdGhpcy5kYXRhLm1hcChkID0+IGQuc2VyaWVzLm1hcCh4ID0+IHgubmFtZSkpLmZvckVhY2goKHgpID0+IHRlbXAgPSBbLi4udGVtcCwgLi4ueF0pO1xyXG4gICAgdGhpcy5sZWdlbmQgID0gQXJyYXkuZnJvbShuZXcgU2V0KFsuLi50ZW1wXSkpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuZGF0YS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcy0nICsgdGhpcy5pZCArICctJyArIGluZGV4KSAgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICAgIGlmIChjYW52YXMuZ2V0Q29udGV4dCkge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIGNvbnN0IHRvdGFsID0gdGhpcy5kYXRhW2luZGV4XS5zZXJpZXMubWFwKHMgPT4gcy52YWx1ZSkucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCk7XHJcbiAgICAgICAgbGV0IG1vdmUgPSAwO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgY29uc3QgZWxlbXMgPSB0aGlzLmRhdGFbaW5kZXhdLnNlcmllcy5zb3J0KChhLCBiKSA9PlxyXG4gICAgICAgICAgdGhpcy5sZWdlbmQuZmluZEluZGV4KHkgPT4geSA9PT0gYS5uYW1lKSAtIHRoaXMubGVnZW5kLmZpbmRJbmRleCh5ID0+IHkgPT09IGIubmFtZSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZWxlbXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgIC8vIFJlc2V0IHRoZSBjdXJyZW50IHBhdGhcclxuICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICBjb250ZXh0Lm1vdmVUbyhtb3ZlLCAxKTtcclxuICAgICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gMTU7XHJcbiAgICAgICAgICBjb25zdCB2YWwgPSBlbGVtc1tqXS52YWx1ZTtcclxuICAgICAgICAgIG1vdmUgKz0gdmFsIC8gdG90YWwgKiBjYW52YXMud2lkdGg7XHJcbiAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvclNjaGVtZS5kb21haW5bal07XHJcbiAgICAgICAgICBjb250ZXh0LmxpbmVUbyhtb3ZlIC0gNSwgMSk7XHJcbiAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbWVudUNsaWNrKHR5cGU6IFdpZGdldEFjdGlvblR5cGUpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xpY2tNZW51LmVtaXQodHlwZSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=