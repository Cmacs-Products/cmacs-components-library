/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewChild, TemplateRef, Output, EventEmitter, Input, ElementRef, Renderer2 } from '@angular/core';
import { UtilService } from '../core/services/util.service';
var CmacsKpiGroupComponent = /** @class */ (function () {
    function CmacsKpiGroupComponent(renderer, elementRef, utilService
    //
    ) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.utilService = utilService;
        this.clickMenu = new EventEmitter();
        // container
        this.headerText = '';
        this.footerText = '';
        this.footerValue = '';
        this.columnsHeader = [];
        this.displayArrowBtns = true;
        // chart
        this.chartWidth = 104;
        this.fontChartNumber = 20;
        this.col2 = 150;
        this.col3 = 70;
        this.minWidth = 300;
        this.showChart = false;
        this.scrollY = 200;
        this.p = 1;
        this.scroll = { x: '300px', y: this.scrollY + 'px' };
        this.loading = true;
    }
    /**
     * @return {?}
     */
    CmacsKpiGroupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    CmacsKpiGroupComponent.prototype.ngOnChanges = /**
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
            if (_this.data.length > 0) {
                _this.selectedItem = _this.data[0].key;
            }
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
    CmacsKpiGroupComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.resize();
    };
    /**
     * @return {?}
     */
    CmacsKpiGroupComponent.prototype.resize = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var width = this.view[0];
        this.renderer.setStyle(this.elementRef.nativeElement, 'width', width + "px");
    };
    //
    //
    /**
     * @return {?}
     */
    CmacsKpiGroupComponent.prototype.setScroll = 
    //
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var p = 1;
        if (this.view && this.view.length === 2) {
            p = this.view[1] * 0.5 > this.scrollY ? this.view[1] * 0.5 / this.scrollY : 1;
        }
        this.scroll = { x: '300px', y: this.scrollY * p + 'px' };
    };
    /**
     * @return {?}
     */
    CmacsKpiGroupComponent.prototype.scrollRight = /**
     * @return {?}
     */
    function () {
        this.legendContent.nativeElement.scrollTo({ left: (this.legendContent.nativeElement.scrollLeft - 40), behavior: 'smooth' });
    };
    /**
     * @return {?}
     */
    CmacsKpiGroupComponent.prototype.scrollLeft = /**
     * @return {?}
     */
    function () {
        this.legendContent.nativeElement.scrollTo({ left: (this.legendContent.nativeElement.scrollLeft + 40), behavior: 'smooth' });
    };
    /**
     * @return {?}
     */
    CmacsKpiGroupComponent.prototype.drawCanvas = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var e_1, _a;
        /** @type {?} */
        var item = this.data.find((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.key === _this.selectedItem; }));
        if (this.canvasRef && item) {
            /** @type {?} */
            var canvas = (/** @type {?} */ (this.canvasRef.nativeElement));
            canvas.width = this.chartWidth * this.p;
            canvas.height = this.chartWidth * this.p;
            //
            /** @type {?} */
            var ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // totals
            /** @type {?} */
            var totalShow = this.getTotalCateg(item.data);
            /** @type {?} */
            var total = this.data.map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return _this.getTotalCateg(x.data); })).reduce((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) { return a + b; }), 0);
            /** @type {?} */
            var startAngle = 0;
            try {
                // draw data
                for (var _b = tslib_1.__values(this.data), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var categ = _c.value;
                    /** @type {?} */
                    var totalG = this.getTotalCateg(categ.data);
                    /** @type {?} */
                    var sliceAngle = 2 * Math.PI * totalG / total;
                    if (sliceAngle > 0) {
                        this.drawPieSlice(ctx, canvas.width / 2, canvas.height / 2, Math.min(canvas.width / 2, canvas.height / 2) - ((this.selectedItem === categ.key) ? 10 * this.p : 6 * this.p), startAngle, startAngle + sliceAngle - 0.05, categ.color, (this.selectedItem === categ.key) ? 15 * this.p : 7 * this.p);
                        startAngle += sliceAngle;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            // draw value
            ctx.font = this.fontChartNumber * this.p + 'px Roboto-Regular ';
            ctx.fillStyle = '#3b3f46';
            ctx.textAlign = 'center';
            ctx.fillText('' + totalShow, canvas.width / 2, canvas.width / 2 + 5);
        }
    };
    /**
     * @param {?} ctx
     * @param {?} centerX
     * @param {?} centerY
     * @param {?} radius
     * @param {?} startAngle
     * @param {?} endAngle
     * @param {?} color
     * @param {?} lineWidth
     * @return {?}
     */
    CmacsKpiGroupComponent.prototype.drawPieSlice = /**
     * @param {?} ctx
     * @param {?} centerX
     * @param {?} centerY
     * @param {?} radius
     * @param {?} startAngle
     * @param {?} endAngle
     * @param {?} color
     * @param {?} lineWidth
     * @return {?}
     */
    function (ctx, centerX, centerY, radius, startAngle, endAngle, color, lineWidth) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle - Math.PI / 2, endAngle - Math.PI / 2, false);
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = color;
        ctx.stroke();
    };
    /**
     * @param {?} data
     * @return {?}
     */
    CmacsKpiGroupComponent.prototype.getTotalCateg = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return data.map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.value; })).reduce((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) { return a + b; }), 0);
    };
    /**
     * @return {?}
     */
    CmacsKpiGroupComponent.prototype.setConfiguration = /**
     * @return {?}
     */
    function () {
        //
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
    CmacsKpiGroupComponent.prototype.setData = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var e_2, _a;
        this.loading = true;
        /** @type {?} */
        var temp = [];
        if (this.selectedItem) {
            /** @type {?} */
            var data = this.data.find((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.key === _this.selectedItem; }));
            try {
                for (var _b = tslib_1.__values(data.data), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    /** @type {?} */
                    var newItem = {
                        key: item.key,
                        name: item.name,
                        color: {
                            ref: this.columnTemplate,
                            context: {
                                color: data.color
                            }
                        },
                        value: item.value,
                        children: this.getChildren(item.rows)
                    };
                    temp.push(newItem);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            this.dataTable = temp;
        }
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.loading = false;
        }), 0);
    };
    /**
     * @param {?} items
     * @return {?}
     */
    CmacsKpiGroupComponent.prototype.getChildren = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        var e_3, _a;
        /** @type {?} */
        var output = [];
        try {
            for (var items_1 = tslib_1.__values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                var item = items_1_1.value;
                output.push({
                    key: item.key,
                    name: item.name,
                    color: {},
                    value: ''
                });
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return output;
    };
    /**
     * @param {?} type
     * @return {?}
     */
    CmacsKpiGroupComponent.prototype.menuClick = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        this.clickMenu.emit(type);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    CmacsKpiGroupComponent.prototype.changeData = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        this.selectedItem = key;
        this.setData();
        this.drawCanvas();
    };
    /**
     * @return {?}
     */
    CmacsKpiGroupComponent.prototype.showArrowBtns = /**
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
        var tsize = this.utilService.get_tex_size(text, '12px Roboto-Regular');
        this.displayArrowBtns = tsize.width > this.view[0] - 15;
    };
    CmacsKpiGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-kpi-group',
                    template: "<div class=\"sd-content\" *ngIf=\"showChart\">\r\n  <!-- Legend -->\r\n  <div nz-row class=\"legend-row\">\r\n    <span class=\"legend-left-icon\" (click)=\"scrollRight()\" *ngIf=\"displayArrowBtns\">\r\n      <i class=\"iconArrowLarge-Chevron-Left\"></i>\r\n    </span>\r\n    <div #legendContent class=\"legend-data\">\r\n      <span class=\"legend-column\" *ngFor=\"let item of data\" (click)=\"changeData(item.key)\">\r\n        <span [style.background-color]=\"item.color\" class=\"legend-bar\"></span>\r\n        <span class=\"legend-text\">{{item.name}}</span>\r\n      </span>\r\n    </div>\r\n    <span (click)=\"scrollLeft()\" class=\"legend-right-icon\" *ngIf=\"displayArrowBtns\">\r\n      <i class=\"iconArrowLarge-Chevron-Right\"></i>\r\n    </span>\r\n  </div>\r\n  <!-- Chart -->\r\n  <div nz-row class=\"chart-content\">\r\n    <canvas #chartcanvas class=\"chart-canvas\"></canvas>\r\n  </div>\r\n  <div nz-row class=\"chart-data-table\">\r\n    <cmacs-compact-table *ngIf=\"!loading && dataTable; else elseBlock\" [data]=\"dataTable\"\r\n      [(config)]=\"configurationExpandableRows\" [indentSize]=\"40\" [logs]=\"true\" [expandable]=\"true\"\r\n      [scroll]=\"scroll\" [frontPagination]=\"false\" [showPagination]=\"false\"></cmacs-compact-table>\r\n  </div>\r\n</div>\r\n<ng-template #columnTemplate let-color=\"color\">\r\n  <div class=\"chart-dot\" [style.background-color]=\"color\"></div>\r\n</ng-template>\r\n\r\n<ng-template #elseBlock>\r\n  <nz-skeleton [nzActive]=\"true\" [nzParagraph]=\"{ rows: 8 }\"></nz-skeleton>\r\n</ng-template>",
                    styles: [".legend-column{display:table-cell;float:left;font-family:Roboto-Regular;font-size:12px;color:#656c79;cursor:pointer;white-space:nowrap;padding-top:8px}.legend-left-icon,.legend-right-icon{top:5px;font-size:19px;padding-left:5px;padding-right:5px;cursor:pointer}.legend-left-icon{position:absolute;z-index:2;left:0}.legend-right-icon{position:absolute;right:0}.legend-text{padding-left:6px;padding-right:20px}.legend-column:last-child .legend-text{padding-right:0}.legend-bar{width:4px;height:10px;border-radius:5px;display:inline-block}.legend-row{width:100%;margin-bottom:32px;display:-webkit-box;display:flex;place-content:flex-end}.legend-data{display:-webkit-box;display:flex;overflow:hidden;margin-right:28px;text-align:right;margin-left:25px}.chart-content{text-align:center;margin-bottom:25px}.chart-dot{width:9px;height:9px;border-radius:5px;display:inline-block;margin-left:13px}::ng-deep .chart-data-table cmacs-compact-table .cmacs-compact-table-input-number-icon-view{display:none}::ng-deep .chart-data-table cmacs-compact-table .cmacs-compact-table-header-logs,::ng-deep .chart-data-table cmacs-compact-table .cmacs-compact-table-header-logs .ant-table-row-expand-icon,::ng-deep .chart-data-table cmacs-compact-table .cmacs-compact-table-logs-header-th-font,::ng-deep .chart-data-table cmacs-compact-table .cmacs-compact-table-logs-header-th-font:hover{background-color:#fff!important}::ng-deep .chart-data-table .cmacs-compact-table .ant-table-tbody>tr:not(.cmacs-compact-table-header-logs)>td,::ng-deep .chart-data-table .cmacs-compact-table .ant-table-thead>tr>th{background-color:#f6f7fb!important}"]
                }] }
    ];
    /** @nocollapse */
    CmacsKpiGroupComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: UtilService }
    ]; };
    CmacsKpiGroupComponent.propDecorators = {
        columnTemplate: [{ type: ViewChild, args: ['columnTemplate', { read: TemplateRef },] }],
        canvasRef: [{ type: ViewChild, args: ['chartcanvas', { read: ElementRef },] }],
        legendContent: [{ type: ViewChild, args: ['legendContent', { read: ElementRef },] }],
        clickMenu: [{ type: Output }],
        headerText: [{ type: Input }],
        footerText: [{ type: Input }],
        footerValue: [{ type: Input }],
        view: [{ type: Input }],
        data: [{ type: Input }],
        columnsHeader: [{ type: Input }]
    };
    return CmacsKpiGroupComponent;
}());
export { CmacsKpiGroupComponent };
if (false) {
    /** @type {?} */
    CmacsKpiGroupComponent.prototype.columnTemplate;
    /** @type {?} */
    CmacsKpiGroupComponent.prototype.canvasRef;
    /** @type {?} */
    CmacsKpiGroupComponent.prototype.legendContent;
    /** @type {?} */
    CmacsKpiGroupComponent.prototype.clickMenu;
    /** @type {?} */
    CmacsKpiGroupComponent.prototype.headerText;
    /** @type {?} */
    CmacsKpiGroupComponent.prototype.footerText;
    /** @type {?} */
    CmacsKpiGroupComponent.prototype.footerValue;
    /** @type {?} */
    CmacsKpiGroupComponent.prototype.view;
    /** @type {?} */
    CmacsKpiGroupComponent.prototype.data;
    /** @type {?} */
    CmacsKpiGroupComponent.prototype.columnsHeader;
    /** @type {?} */
    CmacsKpiGroupComponent.prototype.displayArrowBtns;
    /** @type {?} */
    CmacsKpiGroupComponent.prototype.chartWidth;
    /** @type {?} */
    CmacsKpiGroupComponent.prototype.fontChartNumber;
    /** @type {?} */
    CmacsKpiGroupComponent.prototype.col2;
    /** @type {?} */
    CmacsKpiGroupComponent.prototype.col3;
    /** @type {?} */
    CmacsKpiGroupComponent.prototype.minWidth;
    /** @type {?} */
    CmacsKpiGroupComponent.prototype.showChart;
    /** @type {?} */
    CmacsKpiGroupComponent.prototype.scrollY;
    /** @type {?} */
    CmacsKpiGroupComponent.prototype.p;
    /** @type {?} */
    CmacsKpiGroupComponent.prototype.scroll;
    /** @type {?} */
    CmacsKpiGroupComponent.prototype.dataTable;
    /** @type {?} */
    CmacsKpiGroupComponent.prototype.configurationExpandableRows;
    /** @type {?} */
    CmacsKpiGroupComponent.prototype.loading;
    /** @type {?} */
    CmacsKpiGroupComponent.prototype.selectedItem;
    /**
     * @type {?}
     * @private
     */
    CmacsKpiGroupComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    CmacsKpiGroupComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    CmacsKpiGroupComponent.prototype.utilService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mta3BpLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mta3BpLWdyb3VwL2NtYWNzLWtwaS1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWlCLFVBQVUsRUFBYSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEosT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTVEO0lBMENFLGdDQUVVLFFBQW1CLEVBQ25CLFVBQXNCLEVBQ3RCLFdBQXdCO0lBQ2hDLEVBQUU7O1FBSE0sYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBbkN4QixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQzs7UUFHckMsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBTWpCLGtCQUFhLEdBQWEsRUFBRSxDQUFDO1FBRXRDLHFCQUFnQixHQUFHLElBQUksQ0FBQzs7UUFHeEIsZUFBVSxHQUFHLEdBQUcsQ0FBQztRQUNqQixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQixTQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ1gsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLGFBQVEsR0FBRyxHQUFHLENBQUM7UUFDZixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLFlBQU8sR0FBRyxHQUFHLENBQUM7UUFDZCxNQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ04sV0FBTSxHQUFHLEVBQUMsQ0FBQyxFQUFFLE9BQU8s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c0I7OztJQUVqQyxnREFBb0Y7O0lBQ3BGLDJDQUFxRTs7SUFDckUsK0NBQXdGOztJQUV4RiwyQ0FBOEM7O0lBRzlDLDRDQUF5Qjs7SUFDekIsNENBQXlCOztJQUN6Qiw2Q0FBMEI7O0lBSTFCLHNDQUF5Qjs7SUFDekIsc0NBQXNCOztJQUN0QiwrQ0FBc0M7O0lBRXRDLGtEQUF3Qjs7SUFHeEIsNENBQWlCOztJQUNqQixpREFBcUI7O0lBQ3JCLHNDQUFXOztJQUNYLHNDQUFVOztJQUNWLDBDQUFlOztJQUNmLDJDQUFrQjs7SUFDbEIseUNBQWM7O0lBQ2QsbUNBQU07O0lBQ04sd0NBQStDOztJQUUvQywyQ0FBaUI7O0lBQ2pCLDZEQUFpQzs7SUFDakMseUNBQWU7O0lBQ2YsOENBQXNCOzs7OztJQUlwQiwwQ0FBMkI7Ozs7O0lBQzNCLDRDQUE4Qjs7Ozs7SUFDOUIsNkNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgVGVtcGxhdGVSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgT25DaGFuZ2VzLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgV2lkZ2V0QWN0aW9uVHlwZSB9IGZyb20gJy4uL2NvcmUvZW51bXMvd2lkZ2V0LWFjdGlvbi10eXBlLmVudW0nO1xyXG5pbXBvcnQgeyBVdGlsU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXRpbC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3Mta3BpLWdyb3VwJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mta3BpLWdyb3VwLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1rcGktZ3JvdXAuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0twaUdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xyXG5cclxuICBAVmlld0NoaWxkKCdjb2x1bW5UZW1wbGF0ZScsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgY29sdW1uVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHt9PjtcclxuICBAVmlld0NoaWxkKCdjaGFydGNhbnZhcycsIHtyZWFkOiBFbGVtZW50UmVmIH0pIGNhbnZhc1JlZjogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdsZWdlbmRDb250ZW50JywgeyByZWFkOiBFbGVtZW50UmVmIH0pIHB1YmxpYyBsZWdlbmRDb250ZW50OiBFbGVtZW50UmVmPGFueT47XHJcblxyXG4gIEBPdXRwdXQoKSBjbGlja01lbnUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgLy8gY29udGFpbmVyXHJcbiAgQElucHV0KCkgaGVhZGVyVGV4dCA9ICcnO1xyXG4gIEBJbnB1dCgpIGZvb3RlclRleHQgPSAnJztcclxuICBASW5wdXQoKSBmb290ZXJWYWx1ZSA9ICcnO1xyXG5cclxuICAvLyBjb250ZW50XHJcbiAgLy8gd2lkdGgsIGhlaWdodFxyXG4gIEBJbnB1dCgpIHZpZXchOiBudW1iZXJbXTtcclxuICBASW5wdXQoKSBkYXRhITogYW55W107XHJcbiAgQElucHV0KCkgY29sdW1uc0hlYWRlcjogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgZGlzcGxheUFycm93QnRucyA9IHRydWU7XHJcblxyXG4gIC8vIGNoYXJ0XHJcbiAgY2hhcnRXaWR0aCA9IDEwNDtcclxuICBmb250Q2hhcnROdW1iZXIgPSAyMDtcclxuICBjb2wyID0gMTUwO1xyXG4gIGNvbDMgPSA3MDtcclxuICBtaW5XaWR0aCA9IDMwMDtcclxuICBzaG93Q2hhcnQgPSBmYWxzZTtcclxuICBzY3JvbGxZID0gMjAwO1xyXG4gIHAgPSAxO1xyXG4gIHNjcm9sbCA9IHt4OiAnMzAwcHgnLCB5OiB0aGlzLnNjcm9sbFkgKyAncHgnIH07XHJcblxyXG4gIGRhdGFUYWJsZTogYW55W107XHJcbiAgY29uZmlndXJhdGlvbkV4cGFuZGFibGVSb3dzOiBhbnk7XHJcbiAgbG9hZGluZyA9IHRydWU7XHJcbiAgc2VsZWN0ZWRJdGVtITogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIC8vXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHV0aWxTZXJ2aWNlOiBVdGlsU2VydmljZVxyXG4gICAgLy9cclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgdGhpcy5zZXRTY3JvbGwoKTtcclxuICAgIC8vXHJcbiAgICB0aGlzLnAgPSAxO1xyXG4gICAgaWYgKHRoaXMudmlldyAmJiB0aGlzLnZpZXcubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgIHRoaXMucCA9IHRoaXMudmlld1swXSA+IHRoaXMubWluV2lkdGggPyB0aGlzLnZpZXdbMF0gLyB0aGlzLm1pbldpZHRoIDogMTtcclxuICAgICAgaWYgKHRoaXMucmVuZGVyZXIpIHtcclxuICAgICAgICB0aGlzLnJlc2l6ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvL1xyXG4gICAgdGhpcy5zaG93Q2hhcnQgPSBmYWxzZTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5kYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IHRoaXMuZGF0YVswXS5rZXk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5kcmF3Q2FudmFzKCk7XHJcbiAgICAgIHRoaXMuc2V0Q29uZmlndXJhdGlvbigpO1xyXG4gICAgICB0aGlzLnNldERhdGEoKTtcclxuICAgIH0sIDApO1xyXG4gICAgdGhpcy5zaG93Q2hhcnQgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuc2hvd0Fycm93QnRucygpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5yZXNpemUoKTtcclxuICB9XHJcblxyXG4gIHJlc2l6ZSgpIHtcclxuICAgIGNvbnN0IHdpZHRoID0gdGhpcy52aWV3WzBdO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgYCR7d2lkdGh9cHhgKTtcclxuICB9XHJcbiAgLy9cclxuXHJcbiAgc2V0U2Nyb2xsKCkge1xyXG4gICAgbGV0IHAgPSAxO1xyXG4gICAgaWYgKHRoaXMudmlldyAmJiB0aGlzLnZpZXcubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgIHAgPSB0aGlzLnZpZXdbMV0gKiAwLjUgPiB0aGlzLnNjcm9sbFkgPyB0aGlzLnZpZXdbMV0gKiAwLjUgLyB0aGlzLnNjcm9sbFkgOiAxO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zY3JvbGwgPSB7eDogJzMwMHB4JywgeTogdGhpcy5zY3JvbGxZICogcCArICdweCcgfTtcclxuICB9XHJcblxyXG4gIHNjcm9sbFJpZ2h0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5sZWdlbmRDb250ZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG8oeyBsZWZ0OiAodGhpcy5sZWdlbmRDb250ZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdCAtIDQwKSwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG4gIH1cclxuXHJcbiAgc2Nyb2xsTGVmdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubGVnZW5kQ29udGVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFRvKHsgbGVmdDogKHRoaXMubGVnZW5kQ29udGVudC5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnQgKyA0MCksIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuICB9XHJcblxyXG4gIGRyYXdDYW52YXMoKTogdm9pZCB7XHJcbiAgICBjb25zdCBpdGVtID0gdGhpcy5kYXRhLmZpbmQoeCA9PiB4LmtleSA9PT0gdGhpcy5zZWxlY3RlZEl0ZW0pO1xyXG4gICAgaWYgKHRoaXMuY2FudmFzUmVmICYmIGl0ZW0pIHtcclxuICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5jYW52YXNSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuXHJcbiAgICAgIGNhbnZhcy53aWR0aCA9IHRoaXMuY2hhcnRXaWR0aCAqIHRoaXMucDtcclxuICAgICAgY2FudmFzLmhlaWdodCA9IHRoaXMuY2hhcnRXaWR0aCAqIHRoaXMucDtcclxuICAgICAgLy9cclxuICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgIC8vIHRvdGFsc1xyXG4gICAgICBjb25zdCB0b3RhbFNob3cgPSB0aGlzLmdldFRvdGFsQ2F0ZWcoaXRlbS5kYXRhKTtcclxuICAgICAgY29uc3QgdG90YWwgPSB0aGlzLmRhdGEubWFwKHggPT4gdGhpcy5nZXRUb3RhbENhdGVnKHguZGF0YSkpLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApO1xyXG4gICAgICBsZXQgc3RhcnRBbmdsZSA9IDA7XHJcblxyXG4gICAgICAvLyBkcmF3IGRhdGFcclxuICAgICAgZm9yIChjb25zdCBjYXRlZyBvZiB0aGlzLmRhdGEpIHtcclxuICAgICAgICBjb25zdCB0b3RhbEcgPSAgdGhpcy5nZXRUb3RhbENhdGVnKGNhdGVnLmRhdGEpO1xyXG4gICAgICAgIGNvbnN0IHNsaWNlQW5nbGUgPSAyICogTWF0aC5QSSAqIHRvdGFsRyAvIHRvdGFsO1xyXG4gICAgICAgIGlmIChzbGljZUFuZ2xlID4gMCApIHtcclxuICAgICAgICAgIHRoaXMuZHJhd1BpZVNsaWNlKFxyXG4gICAgICAgICAgICBjdHgsXHJcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgLyAyLFxyXG4gICAgICAgICAgICBNYXRoLm1pbihjYW52YXMud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMikgLSAoKHRoaXMuc2VsZWN0ZWRJdGVtID09PSBjYXRlZy5rZXkpID8gMTAgKiB0aGlzLnAgOiA2ICogdGhpcy5wKSxcclxuICAgICAgICAgICAgc3RhcnRBbmdsZSxcclxuICAgICAgICAgICAgc3RhcnRBbmdsZSArIHNsaWNlQW5nbGUgLSAwLjA1LFxyXG4gICAgICAgICAgICBjYXRlZy5jb2xvcixcclxuICAgICAgICAgICAgKHRoaXMuc2VsZWN0ZWRJdGVtID09PSBjYXRlZy5rZXkpID8gMTUgKiB0aGlzLnAgOiA3ICogdGhpcy5wXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgc3RhcnRBbmdsZSArPSBzbGljZUFuZ2xlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvLyBkcmF3IHZhbHVlXHJcbiAgICAgIGN0eC5mb250ID0gdGhpcy5mb250Q2hhcnROdW1iZXIgKiB0aGlzLnAgKyAncHggUm9ib3RvLVJlZ3VsYXIgJztcclxuICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjM2IzZjQ2JztcclxuICAgICAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xyXG4gICAgICBjdHguZmlsbFRleHQoICcnICsgdG90YWxTaG93LCBjYW52YXMud2lkdGggLyAyLCBjYW52YXMud2lkdGggLyAyICsgNSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkcmF3UGllU2xpY2UoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGNlbnRlclg6IG51bWJlciwgY2VudGVyWTogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICByYWRpdXM6IG51bWJlciwgc3RhcnRBbmdsZTogbnVtYmVyLCBlbmRBbmdsZTogbnVtYmVyLCBjb2xvcjogYW55LCBsaW5lV2lkdGg6IG51bWJlciApIHtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5hcmMoY2VudGVyWCwgY2VudGVyWSwgcmFkaXVzLCBzdGFydEFuZ2xlIC0gTWF0aC5QSSAvIDIsIGVuZEFuZ2xlIC0gTWF0aC5QSSAvIDIsIGZhbHNlKTtcclxuICAgIGN0eC5saW5lV2lkdGggPSBsaW5lV2lkdGg7XHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcclxuICAgIGN0eC5zdHJva2UoKTtcclxuICB9XHJcblxyXG4gIGdldFRvdGFsQ2F0ZWcoZGF0YTogYW55W10pOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGRhdGEubWFwKHggPT4geC52YWx1ZSkucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCk7XHJcbiAgfVxyXG5cclxuICBzZXRDb25maWd1cmF0aW9uKCk6IHZvaWQge1xyXG4gICAgLy9cclxuICAgIHRoaXMuY29uZmlndXJhdGlvbkV4cGFuZGFibGVSb3dzID0ge1xyXG4gICAgICBmaWVsZHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjZWxkVHlwZTogMyxcclxuICAgICAgICAgIGRpc3BsYXk6ICcnLFxyXG4gICAgICAgICAgcHJvcGVydHk6ICdjb2xvcicsXHJcbiAgICAgICAgICB3aWR0aDogJzYwcHgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY2VsZFR5cGU6IDAsXHJcbiAgICAgICAgICBkaXNwbGF5OiB0aGlzLmNvbHVtbnNIZWFkZXJbMF0sXHJcbiAgICAgICAgICBwcm9wZXJ0eTogJ25hbWUnLFxyXG4gICAgICAgICAgZWRpdFRlbXBsYXRlOiAzLFxyXG4gICAgICAgICAgd2lkdGg6IHRoaXMuY29sMiAqIHRoaXMucCArICdweCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjZWxkVHlwZTogMCxcclxuICAgICAgICAgIGRpc3BsYXk6IHRoaXMuY29sdW1uc0hlYWRlclsxXSxcclxuICAgICAgICAgIHByb3BlcnR5OiAndmFsdWUnLFxyXG4gICAgICAgICAgd2lkdGg6IHRoaXMuY29sMyAqIHRoaXMucCArICdweCcsXHJcbiAgICAgICAgICBlZGl0VGVtcGxhdGU6IDIsXHJcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIF0sXHJcbiAgICAgIGZpZWxkSWQ6ICdrZXknLFxyXG4gICAgICBmaWVsZFJhdGU6ICdmYXYnXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc2V0RGF0YSgpOiB2b2lkIHtcclxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICBjb25zdCB0ZW1wOiBhbnlbXSA9IFtdO1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtKSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGEuZmluZCh4ID0+IHgua2V5ID09PSB0aGlzLnNlbGVjdGVkSXRlbSk7XHJcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhLmRhdGEpIHtcclxuICAgICAgICBjb25zdCBuZXdJdGVtID0ge1xyXG4gICAgICAgICAga2V5OiBpdGVtLmtleSxcclxuICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcclxuICAgICAgICAgIGNvbG9yOiAge1xyXG4gICAgICAgICAgICByZWY6IHRoaXMuY29sdW1uVGVtcGxhdGUsXHJcbiAgICAgICAgICAgIGNvbnRleHQ6IHtcclxuICAgICAgICAgICAgICBjb2xvcjogZGF0YS5jb2xvclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdmFsdWU6IGl0ZW0udmFsdWUsXHJcbiAgICAgICAgICBjaGlsZHJlbjogdGhpcy5nZXRDaGlsZHJlbihpdGVtLnJvd3MpXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0ZW1wLnB1c2gobmV3SXRlbSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5kYXRhVGFibGUgPSB0ZW1wO1xyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG4gIGdldENoaWxkcmVuKGl0ZW1zOiBhbnlbXSk6IGFueVtdIHtcclxuICAgIGNvbnN0IG91dHB1dDogYW55W10gPSBbXTtcclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xyXG4gICAgICBvdXRwdXQucHVzaCh7XHJcbiAgICAgICAga2V5OiBpdGVtLmtleSxcclxuICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXHJcbiAgICAgICAgY29sb3I6IHt9LFxyXG4gICAgICAgIHZhbHVlOiAnJ1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgfVxyXG5cclxuICBtZW51Q2xpY2sodHlwZTogV2lkZ2V0QWN0aW9uVHlwZSk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGlja01lbnUuZW1pdCh0eXBlKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZURhdGEoa2V5OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0ga2V5O1xyXG4gICAgdGhpcy5zZXREYXRhKCk7XHJcbiAgICB0aGlzLmRyYXdDYW52YXMoKTtcclxuICB9XHJcblxyXG4gIHNob3dBcnJvd0J0bnMoKTogdm9pZCB7XHJcbiAgICBjb25zdCB0ZXh0ID0gdGhpcy5kYXRhLm1hcChpID0+IGkubmFtZSArICdzcGFjZScpO1xyXG4gICAgY29uc3QgdHNpemUgPSB0aGlzLnV0aWxTZXJ2aWNlLmdldF90ZXhfc2l6ZSh0ZXh0LCAnMTJweCBSb2JvdG8tUmVndWxhcicpO1xyXG4gICAgdGhpcy5kaXNwbGF5QXJyb3dCdG5zID0gdHNpemUud2lkdGggPiB0aGlzLnZpZXdbMF0gLSAxNTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==