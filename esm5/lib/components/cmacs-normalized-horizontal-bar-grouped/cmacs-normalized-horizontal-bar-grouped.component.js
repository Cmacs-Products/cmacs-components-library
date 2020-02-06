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
        // container
        this.headerText = '';
        this.footerText = '';
        this.footerValue = '';
        // otpions
        this.colorScheme = {
            domain: ['#5AA454', '#C7B42C', '#AAAAAA']
        };
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
    CmacsNormalizedHorizontalBarGroupedComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.drawCanvas();
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
                    context.moveTo(move, 1);
                    context.lineWidth = 10;
                    /** @type {?} */
                    var val = elems[i].value;
                    move += val / total * canvas.width;
                    context.strokeStyle = this.colorScheme.domain[i];
                    context.lineTo(move - 5, 1);
                    context.stroke();
                }
            }
        }
    };
    CmacsNormalizedHorizontalBarGroupedComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-normalized-horizontal-bar-grouped',
                    template: "<cmacs-dashboard-widget-container \r\n  [headerText]=\"headerText\"\r\n  [footerText]=\"footerText\"\r\n  [footerValue]=\"footerValue\"\r\n  (menuClick)=\"menuClick($event)\"\r\n  [showChartTypeOption]=\"false\">\r\n  <!-- Legend -->\r\n  <div nz-row class=\"legend-row\">\r\n    <div class=\"legend-column\" *ngFor=\"let l of legend; let i = index;\">\r\n      <span [style.background-color]=\"colorScheme.domain[i]\" class=\"legend-bar\"> </span>\r\n      <span class=\"legend-text\">{{l}}</span>\r\n    </div>\r\n  </div>\r\n  <!-- Chart -->\r\n  <div nz-row class=\"chart-content\">\r\n    <div nz-row class=\"chart-content-canvas\">\r\n      <canvas id=\"canvas-{{id}}\" class=\"chart-canvas\"></canvas>\r\n    </div>\r\n    <div nz-row class=\"chart-select\">\r\n      <cmacs-select style=\"width: 120px;\" [(ngModel)]=\"selectedValue\" (ngModelChange)=\"drawCanvas()\">\r\n        <cmacs-option *ngFor=\"let item of selectList\" value=\"{{ item }}\" label=\"{{ item }}\"></cmacs-option>\r\n      </cmacs-select>\r\n    </div>\r\n  </div>\r\n</cmacs-dashboard-widget-container>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".legend-bar{width:4px;height:10px;border-radius:5px;display:inline-block}.legend-row{width:100%}.legend-column{display:table-cell;float:right;font-family:Roboto;font-size:12px;color:#656c79}.legend-text{padding-left:6px;padding-right:20px}.chart-canvas{width:88%;margin-top:18%}.chart-content-canvas{text-align:center;height:80%;overflow:hidden}.chart-content{height:85%}.chart-select{height:15%}::ng-deep .chart-select .ant-select-selection,::ng-deep .chart-select .ant-select-selection:focus,::ng-deep .chart-select .ant-select-selection:hover{border:0}"]
                }] }
    ];
    /** @nocollapse */
    CmacsNormalizedHorizontalBarGroupedComponent.ctorParameters = function () { return [
        { type: UtilService }
    ]; };
    CmacsNormalizedHorizontalBarGroupedComponent.propDecorators = {
        clickMenu: [{ type: Output }],
        headerText: [{ type: Input }],
        footerText: [{ type: Input }],
        footerValue: [{ type: Input }],
        data: [{ type: Input }],
        colorScheme: [{ type: Input }]
    };
    return CmacsNormalizedHorizontalBarGroupedComponent;
}());
export { CmacsNormalizedHorizontalBarGroupedComponent };
if (false) {
    /** @type {?} */
    CmacsNormalizedHorizontalBarGroupedComponent.prototype.clickMenu;
    /** @type {?} */
    CmacsNormalizedHorizontalBarGroupedComponent.prototype.headerText;
    /** @type {?} */
    CmacsNormalizedHorizontalBarGroupedComponent.prototype.footerText;
    /** @type {?} */
    CmacsNormalizedHorizontalBarGroupedComponent.prototype.footerValue;
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
    /**
     * @type {?}
     * @private
     */
    CmacsNormalizedHorizontalBarGroupedComponent.prototype.util;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtbm9ybWFsaXplZC1ob3Jpem9udGFsLWJhci1ncm91cGVkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mtbm9ybWFsaXplZC1ob3Jpem9udGFsLWJhci1ncm91cGVkL2NtYWNzLW5vcm1hbGl6ZWQtaG9yaXpvbnRhbC1iYXItZ3JvdXBlZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBaUIsdUJBQXVCLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2SCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFHNUQ7SUE2QkUsc0RBQ1UsSUFBaUI7UUFBakIsU0FBSSxHQUFKLElBQUksQ0FBYTtRQXRCakIsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7O1FBR3JDLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixnQkFBVyxHQUFHLEVBQUUsQ0FBQzs7UUFNakIsZ0JBQVcsR0FBRztZQUNyQixNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQztTQUMxQyxDQUFDO1FBV0EsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELCtEQUFROzs7SUFBUjs7O1lBRU0sSUFBSSxHQUFVLEVBQUU7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEVBQU4sQ0FBTSxFQUFDLEVBQXpCLENBQXlCLEVB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S0FBSyxDQUFDO29CQUNuQyxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqRCxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQzVCLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztpQkFDbEI7YUFDRjtTQUNGO0lBQ0gsQ0FBQzs7Z0JBL0VGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUseUNBQXlDO29CQUNuRCx1a0NBQXVFO29CQUV2RSxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOzs7O2dCQVJRLFdBQVc7Ozs0QkFXakIsTUFBTTs2QkFHTixLQUFLOzZCQUNMLEtBQUs7OEJBQ0wsS0FBSzt1QkFHTCxLQUFLOzhCQUdMLEtBQUs7O0lBNkRSLG1EQUFDO0NBQUEsQUFoRkQsSUFnRkM7U0ExRVksNENBQTRDOzs7SUFFdkQsaUVBQThDOztJQUc5QyxrRUFBeUI7O0lBQ3pCLGtFQUF5Qjs7SUFDekIsbUVBQTBCOztJQUcxQiw0REFBaUM7O0lBR2pDLG1FQUVFOztJQUVGLDBEQUFHOztJQUVILDhEQUFrQjs7SUFDbEIsa0VBQXFCOztJQUNyQixxRUFBdUI7Ozs7O0lBR3JCLDREQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENoYXJ0RGF0YU11bHRpIH0gZnJvbSAnLi4vY29yZS9pbnRlcmZhY2VzL2NoYXJ0LWRhdGEtaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgVXRpbFNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3V0aWwuc2VydmljZSc7XHJcbmltcG9ydCB7IFdpZGdldEFjdGlvblR5cGUgfSBmcm9tICcuLi9jb3JlL2VudW1zL3dpZGdldC1hY3Rpb24tdHlwZS5lbnVtJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3Mtbm9ybWFsaXplZC1ob3Jpem9udGFsLWJhci1ncm91cGVkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mtbm9ybWFsaXplZC1ob3Jpem9udGFsLWJhci1ncm91cGVkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1ub3JtYWxpemVkLWhvcml6b250YWwtYmFyLWdyb3VwZWQuY29tcG9uZW50LmNzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc05vcm1hbGl6ZWRIb3Jpem9udGFsQmFyR3JvdXBlZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIEBPdXRwdXQoKSBjbGlja01lbnUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgLy8gY29udGFpbmVyXHJcbiAgQElucHV0KCkgaGVhZGVyVGV4dCA9ICcnO1xyXG4gIEBJbnB1dCgpIGZvb3RlclRleHQgPSAnJztcclxuICBASW5wdXQoKSBmb290ZXJWYWx1ZSA9ICcnO1xyXG5cclxuICAvLyBjb250ZW50XHJcbiAgQElucHV0KCkgZGF0YSE6IENoYXJ0RGF0YU11bHRpW107XHJcblxyXG4gIC8vIG90cGlvbnNcclxuICBASW5wdXQoKSBjb2xvclNjaGVtZSA9IHtcclxuICAgIGRvbWFpbjogWycjNUFBNDU0JywgJyNDN0I0MkMnLCAnI0FBQUFBQSddXHJcbiAgfTtcclxuXHJcbiAgaWQ7XHJcblxyXG4gIGxlZ2VuZCE6IHN0cmluZ1tdO1xyXG4gIHNlbGVjdExpc3Q6IHN0cmluZ1tdO1xyXG4gIHNlbGVjdGVkVmFsdWUhOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSB1dGlsOiBVdGlsU2VydmljZVxyXG4gICkge1xyXG4gICAgdGhpcy5pZCA9IHV0aWwudXVpZHY0KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vIHNldCBsZWdlbmQgdmFsdWVzXHJcbiAgICBsZXQgdGVtcDogYW55W10gPSBbXTtcclxuICAgIHRoaXMuZGF0YS5tYXAoZCA9PiBkLnNlcmllcy5tYXAoeCA9PiB4Lm5hbWUpKS5mb3JFYWNoKCh4KSA9PiB0ZW1wID0gWy4uLnRlbXAsIC4uLnhdKTtcclxuICAgIHRoaXMubGVnZW5kICA9IEFycmF5LmZyb20obmV3IFNldChbLi4udGVtcF0pKTtcclxuXHJcbiAgICAvLyBzZXQgc2VsZWN0IGRhdGFcclxuICAgIHRoaXMuc2VsZWN0TGlzdCA9IHRoaXMuZGF0YS5tYXAoeCA9PiB4Lm5hbWUpO1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0TGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IHRoaXMuc2VsZWN0TGlzdFswXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuZHJhd0NhbnZhcygpO1xyXG4gIH1cclxuXHJcbiAgbWVudUNsaWNrKHR5cGU6IFdpZGdldEFjdGlvblR5cGUpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xpY2tNZW51LmVtaXQodHlwZSk7XHJcbiAgfVxyXG5cclxuICBkcmF3Q2FudmFzKCk6IHZvaWQge1xyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcy0nICsgdGhpcy5pZCkgIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgaWYgKGNhbnZhcy5nZXRDb250ZXh0KSB7XHJcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRWYWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1zID0gdGhpcy5kYXRhLmZpbmQoeCA9PiB4Lm5hbWUgPT09IHRoaXMuc2VsZWN0ZWRWYWx1ZSkuc2VyaWVzLnNvcnQoKGEsIGIpID0+XHJcbiAgICAgICAgICB0aGlzLmxlZ2VuZC5maW5kSW5kZXgoeSA9PiB5ID09PSBhLm5hbWUpIC0gdGhpcy5sZWdlbmQuZmluZEluZGV4KHkgPT4geSA9PT0gYi5uYW1lKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgdG90YWwgPSBlbGVtcy5tYXAoeCA9PiB4LnZhbHVlKS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKTtcclxuICAgICAgICBsZXQgbW92ZSA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgIGNvbnRleHQubW92ZVRvKG1vdmUsIDEpO1xyXG4gICAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSAxMDtcclxuICAgICAgICAgIGNvbnN0IHZhbCA9IGVsZW1zW2ldLnZhbHVlO1xyXG4gICAgICAgICAgbW92ZSArPSB2YWwgLyB0b3RhbCAqIGNhbnZhcy53aWR0aDtcclxuICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yU2NoZW1lLmRvbWFpbltpXTtcclxuICAgICAgICAgIGNvbnRleHQubGluZVRvKG1vdmUgLSA1LCAxKTtcclxuICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==