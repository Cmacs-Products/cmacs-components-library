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
                    template: "<!-- Legend -->\r\n<div nz-row class=\"legend-row\">\r\n  <div class=\"legend-column\" *ngFor=\"let l of legend; let i = index;\">\r\n    <span [style.background-color]=\"colorScheme.domain[i]\" class=\"legend-bar\"> </span>\r\n    <span class=\"legend-text\">{{l}}</span>\r\n  </div>\r\n</div>\r\n<!-- Chart -->\r\n<div nz-row class=\"chart-content\">\r\n  <div nz-row class=\"chart-content-canvas\">\r\n    <canvas id=\"canvas-{{id}}\" class=\"chart-canvas\"></canvas>\r\n  </div>\r\n  <div nz-row class=\"chart-select\">\r\n    <cmacs-select style=\"width: 120px;\" [(ngModel)]=\"selectedValue\" (ngModelChange)=\"drawCanvas()\">\r\n      <cmacs-option *ngFor=\"let item of selectList\" value=\"{{ item }}\" label=\"{{ item }}\"></cmacs-option>\r\n    </cmacs-select>\r\n  </div>\r\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host{padding:15px;display:block}.legend-bar{width:4px;height:10px;border-radius:5px;display:inline-block}.legend-row{width:100%}.legend-column{display:table-cell;float:right;font-family:Roboto;font-size:12px;color:#656c79}.legend-text{padding-left:6px;padding-right:20px}.chart-canvas{width:88%;margin-top:18%}.chart-content-canvas{text-align:center;height:138px;overflow:hidden}.chart-content{height:85%}.chart-select{height:15%}::ng-deep .chart-select .ant-select-selection,::ng-deep .chart-select .ant-select-selection:focus,::ng-deep .chart-select .ant-select-selection:hover{border:0}"]
                }] }
    ];
    /** @nocollapse */
    CmacsNormalizedHorizontalBarGroupedComponent.ctorParameters = function () { return [
        { type: UtilService }
    ]; };
    CmacsNormalizedHorizontalBarGroupedComponent.propDecorators = {
        clickMenu: [{ type: Output }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtbm9ybWFsaXplZC1ob3Jpem9udGFsLWJhci1ncm91cGVkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mtbm9ybWFsaXplZC1ob3Jpem9udGFsLWJhci1ncm91cGVkL2NtYWNzLW5vcm1hbGl6ZWQtaG9yaXpvbnRhbC1iYXItZ3JvdXBlZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBaUIsdUJBQXVCLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2SCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFHNUQ7SUF3QkUsc0RBQ1UsSUFBaUI7UUFBakIsU0FBSSxHQUFKLElBQUksQ0FBYTtRQWpCakIsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7O1FBTXJDLGdCQUFXLEdBQUc7WUFDckIsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7U0FDMUMsQ0FBQztRQVdBLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCwrREFBUTs7O0lBQVI7OztZQUVNLElBQUksR0FBVSxFQUFFO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxFQUFOLENBQU0sRUFBQyxFQUF6QixDQUF5QixFQUFDLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsSUFBSSxvQkFBTyxJQUFJLEVBQUssQ0FBQyxDQUFDLEVBQXRCLENB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QztvQkFDakQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUM1QixPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7aUJBQ2xCO2FBQ0Y7U0FDRjtJQUNILENBQUM7O2dCQTFFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlDQUF5QztvQkFDbkQsb3lCQUF1RTtvQkFFdkUsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7OztnQkFSUSxXQUFXOzs7NEJBV2pCLE1BQU07dUJBR04sS0FBSzs4QkFHTCxLQUFLOztJQTZEUixtREFBQztDQUFBLEFBM0VELElBMkVDO1NBckVZLDRDQUE0Qzs7O0lBRXZELGlFQUE4Qzs7SUFHOUMsNERBQWlDOztJQUdqQyxtRUFFRTs7SUFFRiwwREFBRzs7SUFFSCw4REFBa0I7O0lBQ2xCLGtFQUFxQjs7SUFDckIscUVBQXVCOzs7OztJQUdyQiw0REFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDaGFydERhdGFNdWx0aSB9IGZyb20gJy4uL2NvcmUvaW50ZXJmYWNlcy9jaGFydC1kYXRhLWludGVyZmFjZSc7XHJcbmltcG9ydCB7IFV0aWxTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy91dGlsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBXaWRnZXRBY3Rpb25UeXBlIH0gZnJvbSAnLi4vY29yZS9lbnVtcy93aWRnZXQtYWN0aW9uLXR5cGUuZW51bSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLW5vcm1hbGl6ZWQtaG9yaXpvbnRhbC1iYXItZ3JvdXBlZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLW5vcm1hbGl6ZWQtaG9yaXpvbnRhbC1iYXItZ3JvdXBlZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3Mtbm9ybWFsaXplZC1ob3Jpem9udGFsLWJhci1ncm91cGVkLmNvbXBvbmVudC5jc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NOb3JtYWxpemVkSG9yaXpvbnRhbEJhckdyb3VwZWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBAT3V0cHV0KCkgY2xpY2tNZW51ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIC8vIGNvbnRlbnRcclxuICBASW5wdXQoKSBkYXRhITogQ2hhcnREYXRhTXVsdGlbXTtcclxuXHJcbiAgLy8gb3RwaW9uc1xyXG4gIEBJbnB1dCgpIGNvbG9yU2NoZW1lID0ge1xyXG4gICAgZG9tYWluOiBbJyM1QUE0NTQnLCAnI0M3QjQyQycsICcjQUFBQUFBJ11cclxuICB9O1xyXG5cclxuICBpZDtcclxuXHJcbiAgbGVnZW5kITogc3RyaW5nW107XHJcbiAgc2VsZWN0TGlzdDogc3RyaW5nW107XHJcbiAgc2VsZWN0ZWRWYWx1ZSE6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHV0aWw6IFV0aWxTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICB0aGlzLmlkID0gdXRpbC51dWlkdjQoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy8gc2V0IGxlZ2VuZCB2YWx1ZXNcclxuICAgIGxldCB0ZW1wOiBhbnlbXSA9IFtdO1xyXG4gICAgdGhpcy5kYXRhLm1hcChkID0+IGQuc2VyaWVzLm1hcCh4ID0+IHgubmFtZSkpLmZvckVhY2goKHgpID0+IHRlbXAgPSBbLi4udGVtcCwgLi4ueF0pO1xyXG4gICAgdGhpcy5sZWdlbmQgID0gQXJyYXkuZnJvbShuZXcgU2V0KFsuLi50ZW1wXSkpO1xyXG5cclxuICAgIC8vIHNldCBzZWxlY3QgZGF0YVxyXG4gICAgdGhpcy5zZWxlY3RMaXN0ID0gdGhpcy5kYXRhLm1hcCh4ID0+IHgubmFtZSk7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlID0gdGhpcy5zZWxlY3RMaXN0WzBdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5kcmF3Q2FudmFzKCk7XHJcbiAgfVxyXG5cclxuICBtZW51Q2xpY2sodHlwZTogV2lkZ2V0QWN0aW9uVHlwZSk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGlja01lbnUuZW1pdCh0eXBlKTtcclxuICB9XHJcblxyXG4gIGRyYXdDYW52YXMoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzLScgKyB0aGlzLmlkKSAgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBpZiAoY2FudmFzLmdldENvbnRleHQpIHtcclxuICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZFZhbHVlKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbXMgPSB0aGlzLmRhdGEuZmluZCh4ID0+IHgubmFtZSA9PT0gdGhpcy5zZWxlY3RlZFZhbHVlKS5zZXJpZXMuc29ydCgoYSwgYikgPT5cclxuICAgICAgICAgIHRoaXMubGVnZW5kLmZpbmRJbmRleCh5ID0+IHkgPT09IGEubmFtZSkgLSB0aGlzLmxlZ2VuZC5maW5kSW5kZXgoeSA9PiB5ID09PSBiLm5hbWUpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCB0b3RhbCA9IGVsZW1zLm1hcCh4ID0+IHgudmFsdWUpLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApO1xyXG4gICAgICAgIGxldCBtb3ZlID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgY29udGV4dC5tb3ZlVG8obW92ZSwgMSk7XHJcbiAgICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDEwO1xyXG4gICAgICAgICAgY29uc3QgdmFsID0gZWxlbXNbaV0udmFsdWU7XHJcbiAgICAgICAgICBtb3ZlICs9IHZhbCAvIHRvdGFsICogY2FudmFzLndpZHRoO1xyXG4gICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3JTY2hlbWUuZG9tYWluW2ldO1xyXG4gICAgICAgICAgY29udGV4dC5saW5lVG8obW92ZSAtIDUsIDEpO1xyXG4gICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19