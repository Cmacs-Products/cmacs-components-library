/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { UtilService } from '../core/services/util.service';
var CmacsNormalizedHorizontalBarGroupedComponent = /** @class */ (function () {
    function CmacsNormalizedHorizontalBarGroupedComponent(util) {
        this.util = util;
        this.clickMenu = new EventEmitter();
        // otpions
        this.colorScheme = {
            domain: ['#00CE7D', '#FFC634', '#F6503C']
        };
        // chart
        this.chartWidth = 250;
        this.chartHeight = 100;
        this.minWidth = 300;
        this.minHeight = 200;
        this.pw = 1;
        this.ph = 1;
        this.id = util.uuidv4();
    }
    /**
     * @return {?}
     */
    CmacsNormalizedHorizontalBarGroupedComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // set legend values
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
        // set select data
        this.selectList = this.data.map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.name; }));
        if (this.selectList.length > 0) {
            this.selectedValue = this.selectList[0];
        }
    };
    /**
     * @return {?}
     */
    CmacsNormalizedHorizontalBarGroupedComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.pw = 1;
        if (this.view && this.view.length === 2) {
            this.pw = this.view[0] > this.minWidth ? this.view[0] / this.minWidth : 1;
        }
        this.ph = 1;
        if (this.view && this.view.length === 2) {
            this.ph = this.view[1] > this.minHeight ? this.view[1] / this.minHeight : 1;
        }
        //
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.drawCanvas();
        }), 0);
    };
    /**
     * @param {?} type
     * @return {?}
     */
    CmacsNormalizedHorizontalBarGroupedComponent.prototype.menuClick = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        this.clickMenu.emit(type);
    };
    /**
     * @return {?}
     */
    CmacsNormalizedHorizontalBarGroupedComponent.prototype.drawCanvas = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var canvas = (/** @type {?} */ (document.getElementById('canvas-' + this.id)));
        if (canvas.getContext) {
            /** @type {?} */
            var context = canvas.getContext('2d');
            canvas.width = this.chartWidth * this.pw;
            canvas.height = this.chartHeight * this.ph;
            context.clearRect(0, 0, canvas.width, canvas.height);
            if (this.selectedValue) {
                /** @type {?} */
                var elems = this.data.find((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return x.name === _this.selectedValue; })).series.sort((/**
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
                /** @type {?} */
                var total = elems.map((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return x.value; })).reduce((/**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */
                function (a, b) { return a + b; }), 0);
                /** @type {?} */
                var move = 0;
                for (var i = 0; i < elems.length; i++) {
                    context.beginPath();
                    context.moveTo(move, canvas.height / 2);
                    context.lineWidth = 8;
                    /** @type {?} */
                    var val = elems[i].value;
                    move += val / total * canvas.width;
                    context.strokeStyle = this.colorScheme.domain[i];
                    context.lineTo(move - 5, canvas.height / 2);
                    context.stroke();
                }
            }
        }
    };
    CmacsNormalizedHorizontalBarGroupedComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-normalized-horizontal-bar-grouped',
                    template: "<div class=\"sd-content\">\r\n  <!-- Legend -->\r\n  <div nz-row class=\"legend-row\">\r\n    <div class=\"legend-column\" *ngFor=\"let l of legend; let i = index;\">\r\n      <span [style.background-color]=\"colorScheme.domain[i]\" class=\"legend-bar\"> </span>\r\n      <span class=\"legend-text\">{{l}}</span>\r\n    </div>\r\n  </div>\r\n  <!-- Chart -->\r\n  <div nz-row class=\"chart-content\">\r\n    <div nz-row class=\"chart-content-canvas\">\r\n      <canvas id=\"canvas-{{id}}\" class=\"chart-canvas\"></canvas>\r\n    </div>\r\n    <div nz-row class=\"chart-select\">\r\n      <cmacs-select style=\"width: 120px;\" [(ngModel)]=\"selectedValue\" (ngModelChange)=\"drawCanvas()\">\r\n        <cmacs-option *ngFor=\"let item of selectList\" value=\"{{ item }}\" label=\"{{ item }}\"></cmacs-option>\r\n      </cmacs-select>\r\n    </div>\r\n  </div>\r\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".legend-column{display:table-cell;float:left;font-family:Roboto;font-size:12px;color:#656c79}.legend-text{padding-left:6px;padding-right:20px}.legend-column:last-child .legend-text{padding-right:0}.legend-bar{width:4px;height:10px;border-radius:5px;display:inline-block}.legend-row{width:100%;display:-webkit-box;display:flex;place-content:flex-end}.chart-content-canvas{text-align:center}.sd-content{margin:0 20px}::ng-deep .chart-select .ant-select-selection,::ng-deep .chart-select .ant-select-selection:focus,::ng-deep .chart-select .ant-select-selection:hover{border:0;background-color:transparent!important}"]
                }] }
    ];
    /** @nocollapse */
    CmacsNormalizedHorizontalBarGroupedComponent.ctorParameters = function () { return [
        { type: UtilService }
    ]; };
    CmacsNormalizedHorizontalBarGroupedComponent.propDecorators = {
        clickMenu: [{ type: Output }],
        data: [{ type: Input }],
        colorScheme: [{ type: Input }],
        view: [{ type: Input }]
    };
    return CmacsNormalizedHorizontalBarGroupedComponent;
}());
export { CmacsNormalizedHorizontalBarGroupedComponent };
if (false) {
    /** @type {?} */
    CmacsNormalizedHorizontalBarGroupedComponent.prototype.clickMenu;
    /** @type {?} */
    CmacsNormalizedHorizontalBarGroupedComponent.prototype.data;
    /** @type {?} */
    CmacsNormalizedHorizontalBarGroupedComponent.prototype.colorScheme;
    /** @type {?} */
    CmacsNormalizedHorizontalBarGroupedComponent.prototype.id;
    /** @type {?} */
    CmacsNormalizedHorizontalBarGroupedComponent.prototype.legend;
    /** @type {?} */
    CmacsNormalizedHorizontalBarGroupedComponent.prototype.selectList;
    /** @type {?} */
    CmacsNormalizedHorizontalBarGroupedComponent.prototype.selectedValue;
    /** @type {?} */
    CmacsNormalizedHorizontalBarGroupedComponent.prototype.chartWidth;
    /** @type {?} */
    CmacsNormalizedHorizontalBarGroupedComponent.prototype.chartHeight;
    /** @type {?} */
    CmacsNormalizedHorizontalBarGroupedComponent.prototype.minWidth;
    /** @type {?} */
    CmacsNormalizedHorizontalBarGroupedComponent.prototype.minHeight;
    /** @type {?} */
    CmacsNormalizedHorizontalBarGroupedComponent.prototype.pw;
    /** @type {?} */
    CmacsNormalizedHorizontalBarGroupedComponent.prototype.ph;
    /** @type {?} */
    CmacsNormalizedHorizontalBarGroupedComponent.prototype.view;
    /**
     * @type {?}
     * @private
     */
    CmacsNormalizedHorizontalBarGroupedComponent.prototype.util;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtbm9ybWFsaXplZC1ob3Jpem9udGFsLWJhci1ncm91cGVkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mtbm9ybWFsaXplZC1ob3Jpem9udGFsLWJhci1ncm91cGVkL2NtYWNzLW5vcm1hbGl6ZWQtaG9yaXpvbnRhbC1iYXItZ3JvdXBlZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBaUIsdUJBQXVCLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUVsSSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFHNUQ7SUFpQ0Usc0RBQ1UsSUFBaUI7UUFBakIsU0FBSSxHQUFKLElBQUksQ0FBYTtRQTFCakIsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7O1FBTXJDLGdCQUFXLEdBQUc7WUFDckIsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7U0FDMUMsQ0FBQzs7UUFTRixlQUFVLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLGdCQUFXLEdBQUcsR0FBRyxDQUFDO1FBQ2xCLGFBQVEsR0FBRyxHQUFHLENBQUM7UUFDZixjQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ2hCLE9BQUUsR0FBRyxDQUFDLENBQUM7UUFDUCxPQUFFLEdBQUcsQ0FBQyxDQUFDO1FBTUwsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELCtEQUFROzs7SUFBUjs7O1lBRU0sSUFBSSxHQUFVLEVBQUU7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLEdB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LENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqRCxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDNUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO2lCQUNsQjthQUNGO1NBQ0Y7SUFDSCxDQUFDOztnQkFqR0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx5Q0FBeUM7b0JBQ25ELGczQkFBdUU7b0JBRXZFLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDaEQ7Ozs7Z0JBUlEsV0FBVzs7OzRCQVdqQixNQUFNO3VCQUdOLEtBQUs7OEJBR0wsS0FBSzt1QkFpQkwsS0FBSzs7SUFtRVIsbURBQUM7Q0FBQSxBQWxHRCxJQWtHQztTQTVGWSw0Q0FBNEM7OztJQUV2RCxpRUFBOEM7O0lBRzlDLDREQUFpQzs7SUFHakMsbUVBRUU7O0lBRUYsMERBQUc7O0lBRUgsOERBQWtCOztJQUNsQixrRUFBcUI7O0lBQ3JCLHFFQUF1Qjs7SUFHdkIsa0VBQWlCOztJQUNqQixtRUFBa0I7O0lBQ2xCLGdFQUFlOztJQUNmLGlFQUFnQjs7SUFDaEIsMERBQU87O0lBQ1AsMERBQU87O0lBQ1AsNERBQXlCOzs7OztJQUd2Qiw0REFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENoYXJ0RGF0YU11bHRpIH0gZnJvbSAnLi4vY29yZS9pbnRlcmZhY2VzL2NoYXJ0LWRhdGEtaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgVXRpbFNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3V0aWwuc2VydmljZSc7XHJcbmltcG9ydCB7IFdpZGdldEFjdGlvblR5cGUgfSBmcm9tICcuLi9jb3JlL2VudW1zL3dpZGdldC1hY3Rpb24tdHlwZS5lbnVtJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3Mtbm9ybWFsaXplZC1ob3Jpem9udGFsLWJhci1ncm91cGVkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mtbm9ybWFsaXplZC1ob3Jpem9udGFsLWJhci1ncm91cGVkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1ub3JtYWxpemVkLWhvcml6b250YWwtYmFyLWdyb3VwZWQuY29tcG9uZW50LmNzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc05vcm1hbGl6ZWRIb3Jpem9udGFsQmFyR3JvdXBlZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuXHJcbiAgQE91dHB1dCgpIGNsaWNrTWVudSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAvLyBjb250ZW50XHJcbiAgQElucHV0KCkgZGF0YSE6IENoYXJ0RGF0YU11bHRpW107XHJcblxyXG4gIC8vIG90cGlvbnNcclxuICBASW5wdXQoKSBjb2xvclNjaGVtZSA9IHtcclxuICAgIGRvbWFpbjogWycjMDBDRTdEJywgJyNGRkM2MzQnLCAnI0Y2NTAzQyddXHJcbiAgfTtcclxuXHJcbiAgaWQ7XHJcblxyXG4gIGxlZ2VuZCE6IHN0cmluZ1tdO1xyXG4gIHNlbGVjdExpc3Q6IHN0cmluZ1tdO1xyXG4gIHNlbGVjdGVkVmFsdWUhOiBzdHJpbmc7XHJcblxyXG4gIC8vIGNoYXJ0XHJcbiAgY2hhcnRXaWR0aCA9IDI1MDtcclxuICBjaGFydEhlaWdodCA9IDEwMDtcclxuICBtaW5XaWR0aCA9IDMwMDtcclxuICBtaW5IZWlnaHQgPSAyMDA7XHJcbiAgcHcgPSAxO1xyXG4gIHBoID0gMTtcclxuICBASW5wdXQoKSB2aWV3ITogbnVtYmVyW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSB1dGlsOiBVdGlsU2VydmljZVxyXG4gICkge1xyXG4gICAgdGhpcy5pZCA9IHV0aWwudXVpZHY0KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vIHNldCBsZWdlbmQgdmFsdWVzXHJcbiAgICBsZXQgdGVtcDogYW55W10gPSBbXTtcclxuICAgIHRoaXMuZGF0YS5tYXAoZCA9PiBkLnNlcmllcy5tYXAoeCA9PiB4Lm5hbWUpKS5mb3JFYWNoKCh4KSA9PiB0ZW1wID0gWy4uLnRlbXAsIC4uLnhdKTtcclxuICAgIHRoaXMubGVnZW5kICA9IEFycmF5LmZyb20obmV3IFNldChbLi4udGVtcF0pKTtcclxuXHJcbiAgICAvLyBzZXQgc2VsZWN0IGRhdGFcclxuICAgIHRoaXMuc2VsZWN0TGlzdCA9IHRoaXMuZGF0YS5tYXAoeCA9PiB4Lm5hbWUpO1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0TGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IHRoaXMuc2VsZWN0TGlzdFswXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgdGhpcy5wdyA9IDE7XHJcbiAgICBpZiAodGhpcy52aWV3ICYmIHRoaXMudmlldy5sZW5ndGggPT09IDIpIHtcclxuICAgICAgdGhpcy5wdyA9IHRoaXMudmlld1swXSA+IHRoaXMubWluV2lkdGggPyB0aGlzLnZpZXdbMF0gLyB0aGlzLm1pbldpZHRoIDogMTtcclxuICAgIH1cclxuICAgIHRoaXMucGggPSAxO1xyXG4gICAgaWYgKHRoaXMudmlldyAmJiB0aGlzLnZpZXcubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgIHRoaXMucGggPSB0aGlzLnZpZXdbMV0gPiB0aGlzLm1pbkhlaWdodCA/IHRoaXMudmlld1sxXSAvIHRoaXMubWluSGVpZ2h0IDogMTtcclxuICAgIH1cclxuICAgIC8vXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5kcmF3Q2FudmFzKCk7XHJcbiAgICB9LCAwKTtcclxuICB9XHJcblxyXG4gIG1lbnVDbGljayh0eXBlOiBXaWRnZXRBY3Rpb25UeXBlKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsaWNrTWVudS5lbWl0KHR5cGUpO1xyXG4gIH1cclxuXHJcbiAgZHJhd0NhbnZhcygpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMtJyArIHRoaXMuaWQpICBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIGlmIChjYW52YXMuZ2V0Q29udGV4dCkge1xyXG4gICAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgIGNhbnZhcy53aWR0aCA9IHRoaXMuY2hhcnRXaWR0aCAqIHRoaXMucHc7XHJcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLmNoYXJ0SGVpZ2h0ICogdGhpcy5waDtcclxuXHJcbiAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkVmFsdWUpIHtcclxuICAgICAgICBjb25zdCBlbGVtcyA9IHRoaXMuZGF0YS5maW5kKHggPT4geC5uYW1lID09PSB0aGlzLnNlbGVjdGVkVmFsdWUpLnNlcmllcy5zb3J0KChhLCBiKSA9PlxyXG4gICAgICAgICAgdGhpcy5sZWdlbmQuZmluZEluZGV4KHkgPT4geSA9PT0gYS5uYW1lKSAtIHRoaXMubGVnZW5kLmZpbmRJbmRleCh5ID0+IHkgPT09IGIubmFtZSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHRvdGFsID0gZWxlbXMubWFwKHggPT4geC52YWx1ZSkucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCk7XHJcbiAgICAgICAgbGV0IG1vdmUgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICBjb250ZXh0Lm1vdmVUbyhtb3ZlLCBjYW52YXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDg7XHJcbiAgICAgICAgICBjb25zdCB2YWwgPSBlbGVtc1tpXS52YWx1ZTtcclxuICAgICAgICAgIG1vdmUgKz0gdmFsIC8gdG90YWwgKiBjYW52YXMud2lkdGg7XHJcbiAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvclNjaGVtZS5kb21haW5baV07XHJcbiAgICAgICAgICBjb250ZXh0LmxpbmVUbyhtb3ZlIC0gNSwgY2FudmFzLmhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19