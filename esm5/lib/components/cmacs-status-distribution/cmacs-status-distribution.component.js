/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter, Input, ViewChild, TemplateRef, ElementRef, Renderer2 } from '@angular/core';
import { UtilService } from '../core/services/util.service';
var CmacsStatusDistributionComponent = /** @class */ (function () {
    function CmacsStatusDistributionComponent(renderer, elementRef, util) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.util = util;
        this.clickMenu = new EventEmitter();
        this.columnsHeader = [];
        // chart
        this.col2 = 150;
        this.col3 = 70;
        this.minWidth = 300;
        this.chartWidth = 300;
        this.showChart = false;
        this.scrollY = 100;
        this.p = 1;
        this.scroll = { x: '300px', y: this.scrollY + 'px' };
        this.id = util.uuidv4();
    }
    /**
     * @return {?}
     */
    CmacsStatusDistributionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    CmacsStatusDistributionComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.setScroll();
        //
        this.p = 1;
        if (this.view && this.view.length === 2) {
            this.p = this.view[0] > this.minWidth ? this.view[0] / this.minWidth : 1;
            if (this.renderer) {
                this.resize();
            }
        }
        //
        this.showChart = false;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.drawCanvas();
            _this.setConfiguration();
            _this.setData();
        }), 0);
        this.showChart = true;
    };
    /**
     * @return {?}
     */
    CmacsStatusDistributionComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.resize();
    };
    /**
     * @return {?}
     */
    CmacsStatusDistributionComponent.prototype.resize = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var width = this.view[0];
        this.renderer.setStyle(this.elementRef.nativeElement, 'width', width + "px");
    };
    /**
     * @return {?}
     */
    CmacsStatusDistributionComponent.prototype.setScroll = /**
     * @return {?}
     */
    function () {
        if (this.view && this.view.length === 2) {
            this.scrollY = this.view[1] - 100;
        }
        this.scroll = { x: '300px', y: this.scrollY + 'px' };
    };
    /**
     * @return {?}
     */
    CmacsStatusDistributionComponent.prototype.scrollRight = /**
     * @return {?}
     */
    function () {
        this.legendContent.nativeElement.scrollTo({ left: (this.legendContent.nativeElement.scrollLeft - 40), behavior: 'smooth' });
    };
    /**
     * @return {?}
     */
    CmacsStatusDistributionComponent.prototype.scrollLeft = /**
     * @return {?}
     */
    function () {
        this.legendContent.nativeElement.scrollTo({ left: (this.legendContent.nativeElement.scrollLeft + 40), behavior: 'smooth' });
    };
    /**
     * @param {?} type
     * @return {?}
     */
    CmacsStatusDistributionComponent.prototype.menuClick = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        this.clickMenu.emit(type);
    };
    /**
     * @return {?}
     */
    CmacsStatusDistributionComponent.prototype.setConfiguration = /**
     * @return {?}
     */
    function () {
        this.configurationExpandableRows = {
            fields: [
                {
                    celdType: 3,
                    display: '',
                    property: 'color',
                    width: '60px',
                },
                {
                    celdType: 0,
                    display: this.columnsHeader[0],
                    property: 'name',
                    editTemplate: 3,
                    width: this.col2 * this.p + 'px',
                },
                {
                    celdType: 0,
                    display: this.columnsHeader[1],
                    property: 'value',
                    width: this.col3 * this.p + 'px',
                    editTemplate: 2,
                    editable: false
                }
            ],
            fieldId: 'key',
            fieldRate: 'fav'
        };
    };
    /**
     * @return {?}
     */
    CmacsStatusDistributionComponent.prototype.setData = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        /** @type {?} */
        var temp = [];
        try {
            for (var _b = tslib_1.__values(this.data), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                /** @type {?} */
                var newItem = {
                    key: item.key,
                    name: item.name,
                    color: {
                        ref: this.columnTemplate,
                        context: {
                            color: item.color
                        }
                    },
                    value: item.value,
                    children: []
                };
                for (var i = 0; i < item.rows.length; i++) {
                    newItem.children.push({
                        key: item.key + '-' + i,
                        name: item.rows[i],
                        color: {},
                        value: ''
                    });
                }
                temp.push(newItem);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.dataTable = temp;
    };
    /**
     * @return {?}
     */
    CmacsStatusDistributionComponent.prototype.drawCanvas = /**
     * @return {?}
     */
    function () {
        var e_2, _a;
        /** @type {?} */
        var canvas = (/** @type {?} */ (document.getElementById('canvas-' + this.id)));
        canvas.height = 40;
        canvas.width = this.view[0];
        if (canvas.getContext) {
            /** @type {?} */
            var context = canvas.getContext('2d');
            /** @type {?} */
            var total = this.data.map((/**
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
            try {
                for (var _b = tslib_1.__values(this.data), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    context.beginPath();
                    context.moveTo(move, 1);
                    context.lineWidth = 10;
                    /** @type {?} */
                    var val = item.value;
                    move += val / total * canvas.width;
                    context.strokeStyle = item.color;
                    context.lineTo(move - 5, 1);
                    context.stroke();
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
    };
    CmacsStatusDistributionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-status-distribution',
                    template: "<div class=\"sd-content\" *ngIf=\"showChart\">\r\n  <!-- Legend -->\r\n  <div nz-row class=\"legend-row\">\r\n    <span class=\"legend-left-icon\" (click)=\"scrollRight()\">\r\n      <i class=\"iconArrowLarge-Chevron-Left\"></i>\r\n    </span>\r\n    <div #legendContent class=\"legend-data\">\r\n      <span  class=\"legend-column\" *ngFor=\"let item of data\">\r\n        <span [style.background-color]=\"item.color\" class=\"legend-bar\"></span>\r\n        <span class=\"legend-text\">{{item.name}}</span>\r\n      </span>\r\n    </div>\r\n    <span (click)=\"scrollLeft()\" class=\"legend-right-icon\">\r\n      <i class=\"iconArrowLarge-Chevron-Right\"></i>\r\n    </span>\r\n  </div>\r\n  <!-- Chart -->\r\n  <div nz-row class=\"char-content\">\r\n    <canvas id=\"canvas-{{id}}\" class=\"chart-canvas\"></canvas>\r\n  </div>\r\n  <div nz-row class=\"chart-data-table\">\r\n    <cmacs-compact-table *ngIf=\"dataTable\" [data]=\"dataTable\" [(config)]=\"configurationExpandableRows\" [indentSize]=\"40\"\r\n      [logs]=\"true\" [expandable]=\"true\" [scroll]=\"scroll\" [frontPagination]=\"false\" [showPagination]=\"false\">\r\n    </cmacs-compact-table>\r\n  </div>\r\n</div>\r\n<ng-template #columnTemplate let-color=\"color\">\r\n  <div class=\"chart-dot\" [style.background-color]=\"color\"></div>\r\n</ng-template>",
                    styles: [".legend-column{display:table-cell;float:left;font-family:Roboto-Regular;font-size:12px;color:#656c79;white-space:nowrap;padding-top:8px}.legend-left-icon,.legend-right-icon{top:5px;font-size:19px;padding-left:5px;padding-right:5px;cursor:pointer}.legend-left-icon{position:absolute;z-index:2;left:0}.legend-right-icon{position:absolute;right:0}.legend-text{padding-left:6px;padding-right:20px}.legend-column:last-child .legend-text{padding-right:0}.legend-bar{width:4px;height:10px;border-radius:5px;display:inline-block}.legend-row{width:100%;margin-bottom:30px;display:-webkit-box;display:flex;place-content:flex-end}.chart-content{text-align:center;margin-bottom:30px}.legend-data{display:-webkit-box;display:flex;overflow:hidden;margin-right:28px;text-align:right;margin-left:25px}.chart-dot{width:9px;height:9px;border-radius:5px;display:inline-block;margin-left:13px}::ng-deep .chart-data-table cmacs-compact-table .cmacs-compact-table-input-number-icon-view{display:none}::ng-deep .chart-data-table cmacs-compact-table .cmacs-compact-table-header-logs,::ng-deep .chart-data-table cmacs-compact-table .cmacs-compact-table-header-logs .ant-table-row-expand-icon,::ng-deep .chart-data-table cmacs-compact-table .cmacs-compact-table-logs-header-th-font,::ng-deep .chart-data-table cmacs-compact-table .cmacs-compact-table-logs-header-th-font:hover{background-color:#fff!important}::ng-deep .chart-data-table .cmacs-compact-table .ant-table-tbody>tr:not(.cmacs-compact-table-header-logs)>td,::ng-deep .chart-data-table .cmacs-compact-table .ant-table-thead>tr>th{background-color:#f6f7fb!important}"]
                }] }
    ];
    /** @nocollapse */
    CmacsStatusDistributionComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: UtilService }
    ]; };
    CmacsStatusDistributionComponent.propDecorators = {
        columnTemplate: [{ type: ViewChild, args: ['columnTemplate', { read: TemplateRef },] }],
        legendContent: [{ type: ViewChild, args: ['legendContent', { read: ElementRef },] }],
        clickMenu: [{ type: Output }],
        view: [{ type: Input }],
        data: [{ type: Input }],
        columnsHeader: [{ type: Input }]
    };
    return CmacsStatusDistributionComponent;
}());
export { CmacsStatusDistributionComponent };
if (false) {
    /** @type {?} */
    CmacsStatusDistributionComponent.prototype.columnTemplate;
    /** @type {?} */
    CmacsStatusDistributionComponent.prototype.legendContent;
    /** @type {?} */
    CmacsStatusDistributionComponent.prototype.clickMenu;
    /** @type {?} */
    CmacsStatusDistributionComponent.prototype.view;
    /** @type {?} */
    CmacsStatusDistributionComponent.prototype.data;
    /** @type {?} */
    CmacsStatusDistributionComponent.prototype.columnsHeader;
    /** @type {?} */
    CmacsStatusDistributionComponent.prototype.col2;
    /** @type {?} */
    CmacsStatusDistributionComponent.prototype.col3;
    /** @type {?} */
    CmacsStatusDistributionComponent.prototype.minWidth;
    /** @type {?} */
    CmacsStatusDistributionComponent.prototype.chartWidth;
    /** @type {?} */
    CmacsStatusDistributionComponent.prototype.showChart;
    /** @type {?} */
    CmacsStatusDistributionComponent.prototype.scrollY;
    /** @type {?} */
    CmacsStatusDistributionComponent.prototype.p;
    /** @type {?} */
    CmacsStatusDistributionComponent.prototype.scroll;
    /** @type {?} */
    CmacsStatusDistributionComponent.prototype.id;
    /** @type {?} */
    CmacsStatusDistributionComponent.prototype.dataTable;
    /** @type {?} */
    CmacsStatusDistributionComponent.prototype.configurationExpandableRows;
    /**
     * @type {?}
     * @private
     */
    CmacsStatusDistributionComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    CmacsStatusDistributionComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    CmacsStatusDistributionComponent.prototype.util;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc3RhdHVzLWRpc3RyaWJ1dGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXN0YXR1cy1kaXN0cmlidXRpb24vY21hY3Mtc3RhdHVzLWRpc3RyaWJ1dGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFpQixTQUFTLEVBQUUsV0FBVyxFQUFhLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEosT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRzVEO0lBZ0NFLDBDQUNVLFFBQW1CLEVBQ25CLFVBQXNCLEVBQ3RCLElBQWlCO1FBRmpCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixTQUFJLEdBQUosSUFBSSxDQUFhO1FBekJqQixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUtyQyxrQkFBYSxHQUFhLEVBQUUsQ0FBQzs7UUFHdEMsU0FBSSxHQUFHLEdBQUcsQ0FBQztRQUNYLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixhQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ2YsZUFBVSxHQUFHLEdBQUcsQ0FBQztRQUNqQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLFlBQU8sR0FBRyxHQUFHLENBQUM7UUFDZCxNQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ04sV0FBTSxHQUFHLEVBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEVBQUUsQ0FBQztRQVk3QyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7O0lB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SUFDakIsdUVBQWlDOzs7OztJQUcvQixvREFBMkI7Ozs7O0lBQzNCLHNEQUE4Qjs7Ozs7SUFDOUIsZ0RBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkLCBUZW1wbGF0ZVJlZiwgT25DaGFuZ2VzLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVXRpbFNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3V0aWwuc2VydmljZSc7XHJcbmltcG9ydCB7IFdpZGdldEFjdGlvblR5cGUgfSBmcm9tICcuLi9jb3JlL2VudW1zL3dpZGdldC1hY3Rpb24tdHlwZS5lbnVtJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3Mtc3RhdHVzLWRpc3RyaWJ1dGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXN0YXR1cy1kaXN0cmlidXRpb24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXN0YXR1cy1kaXN0cmlidXRpb24uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1N0YXR1c0Rpc3RyaWJ1dGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcclxuXHJcbiAgQFZpZXdDaGlsZCgnY29sdW1uVGVtcGxhdGUnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pIGNvbHVtblRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7fT47XHJcbiAgQFZpZXdDaGlsZCgnbGVnZW5kQ29udGVudCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBwdWJsaWMgbGVnZW5kQ29udGVudDogRWxlbWVudFJlZjxhbnk+O1xyXG5cclxuICBAT3V0cHV0KCkgY2xpY2tNZW51ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIC8vIGNvbnRlbnRcclxuICBASW5wdXQoKSB2aWV3ITogbnVtYmVyW107XHJcbiAgQElucHV0KCkgZGF0YSE6IGFueVtdO1xyXG4gIEBJbnB1dCgpIGNvbHVtbnNIZWFkZXI6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIC8vIGNoYXJ0XHJcbiAgY29sMiA9IDE1MDtcclxuICBjb2wzID0gNzA7XHJcbiAgbWluV2lkdGggPSAzMDA7XHJcbiAgY2hhcnRXaWR0aCA9IDMwMDtcclxuICBzaG93Q2hhcnQgPSBmYWxzZTtcclxuICBzY3JvbGxZID0gMTAwO1xyXG4gIHAgPSAxO1xyXG4gIHNjcm9sbCA9IHt4OiAnMzAwcHgnLCB5OiB0aGlzLnNjcm9sbFkgKyAncHgnIH07XHJcblxyXG4gIC8vXHJcbiAgaWQ7XHJcbiAgZGF0YVRhYmxlOiBhbnlbXTtcclxuICBjb25maWd1cmF0aW9uRXhwYW5kYWJsZVJvd3M6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHV0aWw6IFV0aWxTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICB0aGlzLmlkID0gdXRpbC51dWlkdjQoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICB0aGlzLnNldFNjcm9sbCgpO1xyXG4gICAgLy9cclxuICAgIHRoaXMucCA9IDE7XHJcbiAgICBpZiAodGhpcy52aWV3ICYmIHRoaXMudmlldy5sZW5ndGggPT09IDIpIHtcclxuICAgICAgdGhpcy5wID0gdGhpcy52aWV3WzBdID4gdGhpcy5taW5XaWR0aCA/IHRoaXMudmlld1swXSAvIHRoaXMubWluV2lkdGggOiAxO1xyXG4gICAgICBpZiAodGhpcy5yZW5kZXJlcikge1xyXG4gICAgICAgIHRoaXMucmVzaXplKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vXHJcbiAgICB0aGlzLnNob3dDaGFydCA9IGZhbHNlO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmRyYXdDYW52YXMoKTtcclxuICAgICAgdGhpcy5zZXRDb25maWd1cmF0aW9uKCk7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSgpO1xyXG4gICAgfSwgMCk7XHJcbiAgICB0aGlzLnNob3dDaGFydCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLnJlc2l6ZSgpO1xyXG4gIH1cclxuXHJcbiAgcmVzaXplKCkge1xyXG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLnZpZXdbMF07XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCBgJHt3aWR0aH1weGApO1xyXG4gIH1cclxuXHJcbiAgc2V0U2Nyb2xsKCkge1xyXG4gICAgaWYgKHRoaXMudmlldyAmJiB0aGlzLnZpZXcubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsWSA9IHRoaXMudmlld1sxXSAtIDEwMDtcclxuICAgIH1cclxuICAgIHRoaXMuc2Nyb2xsID0ge3g6ICczMDBweCcsIHk6IHRoaXMuc2Nyb2xsWSArICdweCcgfTtcclxuICB9XHJcblxyXG4gIHNjcm9sbFJpZ2h0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5sZWdlbmRDb250ZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG8oeyBsZWZ0OiAodGhpcy5sZWdlbmRDb250ZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdCAtIDQwKSwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG4gIH1cclxuXHJcbiAgc2Nyb2xsTGVmdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubGVnZW5kQ29udGVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFRvKHsgbGVmdDogKHRoaXMubGVnZW5kQ29udGVudC5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnQgKyA0MCksIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuICB9XHJcblxyXG4gIG1lbnVDbGljayh0eXBlOiBXaWRnZXRBY3Rpb25UeXBlKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsaWNrTWVudS5lbWl0KHR5cGUpO1xyXG4gIH1cclxuXHJcbiAgc2V0Q29uZmlndXJhdGlvbigpOiB2b2lkIHtcclxuICAgIHRoaXMuY29uZmlndXJhdGlvbkV4cGFuZGFibGVSb3dzID0ge1xyXG4gICAgICBmaWVsZHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjZWxkVHlwZTogMyxcclxuICAgICAgICAgIGRpc3BsYXk6ICcnLFxyXG4gICAgICAgICAgcHJvcGVydHk6ICdjb2xvcicsXHJcbiAgICAgICAgICB3aWR0aDogJzYwcHgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY2VsZFR5cGU6IDAsXHJcbiAgICAgICAgICBkaXNwbGF5OiB0aGlzLmNvbHVtbnNIZWFkZXJbMF0sXHJcbiAgICAgICAgICBwcm9wZXJ0eTogJ25hbWUnLFxyXG4gICAgICAgICAgZWRpdFRlbXBsYXRlOiAzLFxyXG4gICAgICAgICAgd2lkdGg6IHRoaXMuY29sMiAqIHRoaXMucCArICdweCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjZWxkVHlwZTogMCxcclxuICAgICAgICAgIGRpc3BsYXk6IHRoaXMuY29sdW1uc0hlYWRlclsxXSxcclxuICAgICAgICAgIHByb3BlcnR5OiAndmFsdWUnLFxyXG4gICAgICAgICAgd2lkdGg6IHRoaXMuY29sMyAqIHRoaXMucCArICdweCcsXHJcbiAgICAgICAgICBlZGl0VGVtcGxhdGU6IDIsXHJcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIF0sXHJcbiAgICAgIGZpZWxkSWQ6ICdrZXknLFxyXG4gICAgICBmaWVsZFJhdGU6ICdmYXYnXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc2V0RGF0YSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHRlbXA6IGFueVtdID0gW107XHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5kYXRhKSB7XHJcbiAgICAgIGNvbnN0IG5ld0l0ZW0gPSB7XHJcbiAgICAgICAga2V5OiBpdGVtLmtleSxcclxuICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXHJcbiAgICAgICAgY29sb3I6IHtcclxuICAgICAgICAgIHJlZjogdGhpcy5jb2x1bW5UZW1wbGF0ZSxcclxuICAgICAgICAgIGNvbnRleHQ6IHtcclxuICAgICAgICAgICAgY29sb3I6IGl0ZW0uY29sb3JcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbHVlOiBpdGVtLnZhbHVlLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXVxyXG4gICAgICB9O1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW0ucm93cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIG5ld0l0ZW0uY2hpbGRyZW4ucHVzaCh7XHJcbiAgICAgICAgICBrZXk6IGl0ZW0ua2V5ICsgJy0nICsgaSxcclxuICAgICAgICAgIG5hbWU6IGl0ZW0ucm93c1tpXSxcclxuICAgICAgICAgIGNvbG9yOiB7IH0sXHJcbiAgICAgICAgICB2YWx1ZTogJydcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICB0ZW1wLnB1c2gobmV3SXRlbSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmRhdGFUYWJsZSA9IHRlbXA7XHJcbiAgfVxyXG5cclxuICBkcmF3Q2FudmFzKCk6IHZvaWQge1xyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcy0nICsgdGhpcy5pZCkgIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgY2FudmFzLmhlaWdodCA9IDQwO1xyXG4gICAgY2FudmFzLndpZHRoID0gdGhpcy52aWV3WzBdO1xyXG4gICAgaWYgKGNhbnZhcy5nZXRDb250ZXh0KSB7XHJcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgY29uc3QgdG90YWwgPSB0aGlzLmRhdGEubWFwKHggPT4geC52YWx1ZSkucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCk7XHJcbiAgICAgIGxldCBtb3ZlID0gMDtcclxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuZGF0YSkge1xyXG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY29udGV4dC5tb3ZlVG8obW92ZSwgMSk7XHJcbiAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSAxMDtcclxuICAgICAgICBjb25zdCB2YWwgPSBpdGVtLnZhbHVlO1xyXG4gICAgICAgIG1vdmUgKz0gdmFsIC8gdG90YWwgKiBjYW52YXMud2lkdGg7XHJcbiAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IGl0ZW0uY29sb3I7XHJcbiAgICAgICAgY29udGV4dC5saW5lVG8obW92ZSAtIDUsIDEpO1xyXG4gICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19