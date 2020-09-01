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
        this.displayArrowBtns = true;
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
        this.showArrowBtns();
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
                    if (item.value > 0) {
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
    /**
     * @return {?}
     */
    CmacsStatusDistributionComponent.prototype.showArrowBtns = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var text = this.data.map((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return i.name + 'space'; }));
        /** @type {?} */
        var tsize = this.util.get_tex_size(text, '12px Roboto-Regular');
        this.displayArrowBtns = tsize.width > this.view[0] - 15;
    };
    /**
     * @return {?}
     */
    CmacsStatusDistributionComponent.prototype.getDataTable = /**
     * @return {?}
     */
    function () {
        return this.dataTable;
    };
    /**
     * @return {?}
     */
    CmacsStatusDistributionComponent.prototype.getConfiguration = /**
     * @return {?}
     */
    function () {
        return this.configurationExpandableRows;
    };
    /**
     * @return {?}
     */
    CmacsStatusDistributionComponent.prototype.getChartImage = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var canvas = (/** @type {?} */ (document.getElementById('canvas-' + this.id)));
        return canvas.toDataURL('image/png');
    };
    CmacsStatusDistributionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-status-distribution',
                    template: "<div class=\"sd-content\" *ngIf=\"showChart\">\r\n  <!-- Legend -->\r\n  <div nz-row class=\"legend-row\">\r\n    <span class=\"legend-left-icon\" (click)=\"scrollRight()\" *ngIf=\"displayArrowBtns\">\r\n      <i class=\"iconArrowLarge-Chevron-Left\"></i>\r\n    </span>\r\n    <div #legendContent class=\"legend-data\">\r\n      <span  class=\"legend-column\" *ngFor=\"let item of data\">\r\n        <span [style.background-color]=\"item.color\" class=\"legend-bar\"></span>\r\n        <span class=\"legend-text\">{{item.name}}</span>\r\n      </span>\r\n    </div>\r\n    <span (click)=\"scrollLeft()\" class=\"legend-right-icon\" *ngIf=\"displayArrowBtns\">\r\n      <i class=\"iconArrowLarge-Chevron-Right\"></i>\r\n    </span>\r\n  </div>\r\n  <!-- Chart -->\r\n  <div nz-row class=\"char-content\">\r\n    <canvas id=\"canvas-{{id}}\" class=\"chart-canvas\"></canvas>\r\n  </div>\r\n  <div nz-row class=\"chart-data-table\">\r\n    <cmacs-compact-table *ngIf=\"dataTable\" [data]=\"dataTable\" [(config)]=\"configurationExpandableRows\" [indentSize]=\"40\"\r\n      [logs]=\"true\" [expandable]=\"true\" [scroll]=\"scroll\" [frontPagination]=\"false\" [showPagination]=\"false\">\r\n    </cmacs-compact-table>\r\n  </div>\r\n</div>\r\n<ng-template #columnTemplate let-color=\"color\">\r\n  <div class=\"chart-dot\" [style.background-color]=\"color\"></div>\r\n</ng-template>",
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
    CmacsStatusDistributionComponent.prototype.displayArrowBtns;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc3RhdHVzLWRpc3RyaWJ1dGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXN0YXR1cy1kaXN0cmlidXRpb24vY21hY3Mtc3RhdHVzLWRpc3RyaWJ1dGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFpQixTQUFTLEVBQUUsV0FBVyxFQUFhLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEosT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRzVEO0lBa0NFLDBDQUNVLFFBQW1CLEVBQ25CLFVBQXNCLEVBQ3RCLElBQWlCO1FBRmpCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixTQUFJLEdBQUosSUFBSSxDQUFhO1FBM0JqQixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUtyQyxrQkFBYSxHQUFhLEVBQUUsQ0FBQztRQUV0QyxxQkFBZ0IsR0FBRyxJQUFJLENBQUM7O1FBR3hCLFNBQUksR0FBRyxHQUFHLENBQUM7UUFDWCxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsYUFBUSxHQUFHLEdBQUcsQ0FBQztRQUNmLGVBQVUsR0FBRyxHQUFHLENBQUM7UUFDakIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixZQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ2QsTUFBQyxHQUFHLENBQUMsQ0FBQztRQUNOLFdBQU0sR0FBRyxFQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUM7UUFZN0MsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFB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Q0FBQywyQkFBMkIsQ0FBQztJQUMxQyxDQUFDOzs7O0lBRU0sd0RBQWE7OztJQUFwQjs7WUFDUSxNQUFNLEdBQUcsbUJBQUEsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFxQjtRQUNoRixPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Z0JBbE1GLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxnM0NBQXlEOztpQkFFMUQ7Ozs7Z0JBUnNILFNBQVM7Z0JBQXJCLFVBQVU7Z0JBQzVHLFdBQVc7OztpQ0FVakIsU0FBUyxTQUFDLGdCQUFnQixFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtnQ0FDakQsU0FBUyxTQUFDLGVBQWUsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7NEJBRS9DLE1BQU07dUJBR04sS0FBSzt1QkFDTCxLQUFLO2dDQUNMLEtBQUs7O0lBb0xSLHVDQUFDO0NBQUEsQUFuTUQsSUFtTUM7U0E5TFksZ0NBQWdDOzs7SUFFM0MsMERBQW9GOztJQUNwRix5REFBd0Y7O0lBRXhGLHFEQUE4Qzs7SUFHOUMsZ0RBQXlCOztJQUN6QixnREFBc0I7O0lBQ3RCLHlEQUFzQzs7SUFFdEMsNERBQXdCOztJQUd4QixnREFBVzs7SUFDWCxnREFBVTs7SUFDVixvREFBZTs7SUFDZixzREFBaUI7O0lBQ2pCLHFEQUFrQjs7SUFDbEIsbURBQWM7O0lBQ2QsNkNBQU07O0lBQ04sa0RBQStDOztJQUcvQyw4Q0FBRzs7SUFDSCxxREFBaUI7O0lBQ2pCLHVFQUFpQzs7Ozs7SUFHL0Isb0RBQTJCOzs7OztJQUMzQixzREFBOEI7Ozs7O0lBQzlCLGdEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIEFmdGVyVmlld0luaXQsIFZpZXdDaGlsZCwgVGVtcGxhdGVSZWYsIE9uQ2hhbmdlcywgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFV0aWxTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy91dGlsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBXaWRnZXRBY3Rpb25UeXBlIH0gZnJvbSAnLi4vY29yZS9lbnVtcy93aWRnZXQtYWN0aW9uLXR5cGUuZW51bSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLXN0YXR1cy1kaXN0cmlidXRpb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1zdGF0dXMtZGlzdHJpYnV0aW9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1zdGF0dXMtZGlzdHJpYnV0aW9uLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NTdGF0dXNEaXN0cmlidXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2NvbHVtblRlbXBsYXRlJywgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSBjb2x1bW5UZW1wbGF0ZTogVGVtcGxhdGVSZWY8e30+O1xyXG4gIEBWaWV3Q2hpbGQoJ2xlZ2VuZENvbnRlbnQnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgcHVibGljIGxlZ2VuZENvbnRlbnQ6IEVsZW1lbnRSZWY8YW55PjtcclxuXHJcbiAgQE91dHB1dCgpIGNsaWNrTWVudSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAvLyBjb250ZW50XHJcbiAgQElucHV0KCkgdmlldyE6IG51bWJlcltdO1xyXG4gIEBJbnB1dCgpIGRhdGEhOiBhbnlbXTtcclxuICBASW5wdXQoKSBjb2x1bW5zSGVhZGVyOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBkaXNwbGF5QXJyb3dCdG5zID0gdHJ1ZTtcclxuXHJcbiAgLy8gY2hhcnRcclxuICBjb2wyID0gMTUwO1xyXG4gIGNvbDMgPSA3MDtcclxuICBtaW5XaWR0aCA9IDMwMDtcclxuICBjaGFydFdpZHRoID0gMzAwO1xyXG4gIHNob3dDaGFydCA9IGZhbHNlO1xyXG4gIHNjcm9sbFkgPSAxMDA7XHJcbiAgcCA9IDE7XHJcbiAgc2Nyb2xsID0ge3g6ICczMDBweCcsIHk6IHRoaXMuc2Nyb2xsWSArICdweCcgfTtcclxuXHJcbiAgLy9cclxuICBpZDtcclxuICBkYXRhVGFibGU6IGFueVtdO1xyXG4gIGNvbmZpZ3VyYXRpb25FeHBhbmRhYmxlUm93czogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgdXRpbDogVXRpbFNlcnZpY2VcclxuICApIHtcclxuICAgIHRoaXMuaWQgPSB1dGlsLnV1aWR2NCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpIHtcclxuICAgIHRoaXMuc2V0U2Nyb2xsKCk7XHJcbiAgICAvL1xyXG4gICAgdGhpcy5wID0gMTtcclxuICAgIGlmICh0aGlzLnZpZXcgJiYgdGhpcy52aWV3Lmxlbmd0aCA9PT0gMikge1xyXG4gICAgICB0aGlzLnAgPSB0aGlzLnZpZXdbMF0gPiB0aGlzLm1pbldpZHRoID8gdGhpcy52aWV3WzBdIC8gdGhpcy5taW5XaWR0aCA6IDE7XHJcbiAgICAgIGlmICh0aGlzLnJlbmRlcmVyKSB7XHJcbiAgICAgICAgdGhpcy5yZXNpemUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy9cclxuICAgIHRoaXMuc2hvd0NoYXJ0ID0gZmFsc2U7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuZHJhd0NhbnZhcygpO1xyXG4gICAgICB0aGlzLnNldENvbmZpZ3VyYXRpb24oKTtcclxuICAgICAgdGhpcy5zZXREYXRhKCk7XHJcbiAgICB9LCAwKTtcclxuICAgIHRoaXMuc2hvd0NoYXJ0ID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLnNob3dBcnJvd0J0bnMoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMucmVzaXplKCk7XHJcbiAgfVxyXG5cclxuICByZXNpemUoKSB7XHJcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMudmlld1swXTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIGAke3dpZHRofXB4YCk7XHJcbiAgfVxyXG5cclxuICBzZXRTY3JvbGwoKSB7XHJcbiAgICBpZiAodGhpcy52aWV3ICYmIHRoaXMudmlldy5sZW5ndGggPT09IDIpIHtcclxuICAgICAgdGhpcy5zY3JvbGxZID0gdGhpcy52aWV3WzFdIC0gMTAwO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zY3JvbGwgPSB7eDogJzMwMHB4JywgeTogdGhpcy5zY3JvbGxZICsgJ3B4JyB9O1xyXG4gIH1cclxuXHJcbiAgc2Nyb2xsUmlnaHQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmxlZ2VuZENvbnRlbnQubmF0aXZlRWxlbWVudC5zY3JvbGxUbyh7IGxlZnQ6ICh0aGlzLmxlZ2VuZENvbnRlbnQubmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0IC0gNDApLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgfVxyXG5cclxuICBzY3JvbGxMZWZ0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5sZWdlbmRDb250ZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG8oeyBsZWZ0OiAodGhpcy5sZWdlbmRDb250ZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdCArIDQwKSwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG4gIH1cclxuXHJcbiAgbWVudUNsaWNrKHR5cGU6IFdpZGdldEFjdGlvblR5cGUpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xpY2tNZW51LmVtaXQodHlwZSk7XHJcbiAgfVxyXG5cclxuICBzZXRDb25maWd1cmF0aW9uKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb25maWd1cmF0aW9uRXhwYW5kYWJsZVJvd3MgPSB7XHJcbiAgICAgIGZpZWxkczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNlbGRUeXBlOiAzLFxyXG4gICAgICAgICAgZGlzcGxheTogJycsXHJcbiAgICAgICAgICBwcm9wZXJ0eTogJ2NvbG9yJyxcclxuICAgICAgICAgIHdpZHRoOiAnNjBweCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjZWxkVHlwZTogMCxcclxuICAgICAgICAgIGRpc3BsYXk6IHRoaXMuY29sdW1uc0hlYWRlclswXSxcclxuICAgICAgICAgIHByb3BlcnR5OiAnbmFtZScsXHJcbiAgICAgICAgICBlZGl0VGVtcGxhdGU6IDMsXHJcbiAgICAgICAgICB3aWR0aDogdGhpcy5jb2wyICogdGhpcy5wICsgJ3B4JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNlbGRUeXBlOiAwLFxyXG4gICAgICAgICAgZGlzcGxheTogdGhpcy5jb2x1bW5zSGVhZGVyWzFdLFxyXG4gICAgICAgICAgcHJvcGVydHk6ICd2YWx1ZScsXHJcbiAgICAgICAgICB3aWR0aDogdGhpcy5jb2wzICogdGhpcy5wICsgJ3B4JyxcclxuICAgICAgICAgIGVkaXRUZW1wbGF0ZTogMixcclxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgZmllbGRJZDogJ2tleScsXHJcbiAgICAgIGZpZWxkUmF0ZTogJ2ZhdidcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzZXREYXRhKCk6IHZvaWQge1xyXG4gICAgY29uc3QgdGVtcDogYW55W10gPSBbXTtcclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLmRhdGEpIHtcclxuICAgICAgY29uc3QgbmV3SXRlbSA9IHtcclxuICAgICAgICBrZXk6IGl0ZW0ua2V5LFxyXG4gICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcclxuICAgICAgICBjb2xvcjoge1xyXG4gICAgICAgICAgcmVmOiB0aGlzLmNvbHVtblRlbXBsYXRlLFxyXG4gICAgICAgICAgY29udGV4dDoge1xyXG4gICAgICAgICAgICBjb2xvcjogaXRlbS5jb2xvclxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsdWU6IGl0ZW0udmFsdWUsXHJcbiAgICAgICAgY2hpbGRyZW46IFtdXHJcbiAgICAgIH07XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbS5yb3dzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbmV3SXRlbS5jaGlsZHJlbi5wdXNoKHtcclxuICAgICAgICAgIGtleTogaXRlbS5rZXkgKyAnLScgKyBpLFxyXG4gICAgICAgICAgbmFtZTogaXRlbS5yb3dzW2ldLFxyXG4gICAgICAgICAgY29sb3I6IHsgfSxcclxuICAgICAgICAgIHZhbHVlOiAnJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHRlbXAucHVzaChuZXdJdGVtKTtcclxuICAgIH1cclxuICAgIHRoaXMuZGF0YVRhYmxlID0gdGVtcDtcclxuICB9XHJcblxyXG4gIGRyYXdDYW52YXMoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzLScgKyB0aGlzLmlkKSAgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gNDA7XHJcbiAgICBjYW52YXMud2lkdGggPSB0aGlzLnZpZXdbMF07XHJcbiAgICBpZiAoY2FudmFzLmdldENvbnRleHQpIHtcclxuICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICBjb25zdCB0b3RhbCA9IHRoaXMuZGF0YS5tYXAoeCA9PiB4LnZhbHVlKS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKTtcclxuICAgICAgbGV0IG1vdmUgPSAwO1xyXG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5kYXRhKSB7XHJcbiAgICAgICAgaWYgKGl0ZW0udmFsdWUgPiAwKSB7XHJcbiAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgY29udGV4dC5tb3ZlVG8obW92ZSwgMSk7XHJcbiAgICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDEwO1xyXG4gICAgICAgICAgY29uc3QgdmFsID0gaXRlbS52YWx1ZTtcclxuICAgICAgICAgIG1vdmUgKz0gdmFsIC8gdG90YWwgKiBjYW52YXMud2lkdGg7XHJcbiAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gaXRlbS5jb2xvcjtcclxuICAgICAgICAgIGNvbnRleHQubGluZVRvKG1vdmUgLSA1LCAxKTtcclxuICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XHJcbiAgICAgICAgfSBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2hvd0Fycm93QnRucygpOiB2b2lkIHtcclxuICAgIGNvbnN0IHRleHQgPSB0aGlzLmRhdGEubWFwKGkgPT4gaS5uYW1lICsgJ3NwYWNlJyk7XHJcbiAgICBjb25zdCB0c2l6ZSA9IHRoaXMudXRpbC5nZXRfdGV4X3NpemUodGV4dCwgJzEycHggUm9ib3RvLVJlZ3VsYXInKTtcclxuICAgIHRoaXMuZGlzcGxheUFycm93QnRucyA9IHRzaXplLndpZHRoID4gdGhpcy52aWV3WzBdIC0gMTU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0RGF0YVRhYmxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0YVRhYmxlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldENvbmZpZ3VyYXRpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uRXhwYW5kYWJsZVJvd3M7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Q2hhcnRJbWFnZSgpIHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMtJyArIHRoaXMuaWQpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgcmV0dXJuIGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL3BuZycpO1xyXG4gIH1cclxufVxyXG4iXX0=