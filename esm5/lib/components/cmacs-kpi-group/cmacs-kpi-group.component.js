/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewChild, TemplateRef, Output, EventEmitter, Input, ElementRef } from '@angular/core';
var CmacsKpiGroupComponent = /** @class */ (function () {
    function CmacsKpiGroupComponent() {
        this.clickMenu = new EventEmitter();
        // container
        this.headerText = '';
        this.footerText = '';
        this.footerValue = '';
        this.columnsHeader = [];
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
    };
    /**
     * @return {?}
     */
    CmacsKpiGroupComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    CmacsKpiGroupComponent.prototype.setScroll = /**
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
            var startAngle = 4;
            try {
                // draw data
                for (var _b = tslib_1.__values(this.data), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var categ = _c.value;
                    /** @type {?} */
                    var totalG = this.getTotalCateg(categ.data);
                    /** @type {?} */
                    var sliceAngle = 2 * Math.PI * totalG / total;
                    this.drawPieSlice(ctx, canvas.width / 2, canvas.height / 2, Math.min(canvas.width / 2, canvas.height / 2) - ((this.selectedItem === categ.key) ? 10 * this.p : 6 * this.p), startAngle, startAngle + sliceAngle - 0.05, categ.color, (this.selectedItem === categ.key) ? 15 * this.p : 7 * this.p);
                    startAngle += sliceAngle;
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
            ctx.font = this.fontChartNumber * this.p + 'px Roboto ';
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
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
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
    CmacsKpiGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-kpi-group',
                    template: "<div class=\"sd-content\" *ngIf=\"showChart\">\r\n  <!-- Legend -->\r\n  <div nz-row class=\"legend-row\">\r\n    <span class=\"legend-column\" *ngFor=\"let item of data\" (click)=\"changeData(item.key)\">\r\n      <span [style.background-color]=\"item.color\" class=\"legend-bar\"></span>\r\n      <span class=\"legend-text\">{{item.name}}</span>\r\n    </span>\r\n  </div>\r\n  <!-- Chart -->\r\n  <div nz-row class=\"chart-content\">\r\n    <canvas #chartcanvas class=\"chart-canvas\"></canvas>\r\n  </div>\r\n  <div nz-row class=\"chart-data-table\">\r\n    <cmacs-compact-table *ngIf=\"!loading && dataTable; else elseBlock\" [data]=\"dataTable\"\r\n      [(config)]=\"configurationExpandableRows\" [indentSize]=\"40\" [logs]=\"true\" [expandable]=\"true\"\r\n      [scroll]=\"scroll\" [frontPagination]=\"false\" [showPagination]=\"false\"></cmacs-compact-table>\r\n  </div>\r\n</div>\r\n<ng-template #columnTemplate let-color=\"color\">\r\n  <div class=\"chart-dot\" [style.background-color]=\"color\"></div>\r\n</ng-template>\r\n\r\n<ng-template #elseBlock>\r\n  <nz-skeleton [nzActive]=\"true\" [nzParagraph]=\"{ rows: 8 }\"></nz-skeleton>\r\n</ng-template>",
                    styles: [".legend-column{display:table-cell;float:left;font-family:Roboto;font-size:12px;color:#656c79;cursor:pointer}.legend-text{padding-left:6px;padding-right:20px}.legend-column:last-child .legend-text{padding-right:0}.legend-bar{width:4px;height:10px;border-radius:5px;display:inline-block}.legend-row{width:100%;margin-bottom:32px;display:-webkit-box;display:flex;place-content:flex-end}.chart-content{text-align:center;margin-bottom:25px}.chart-dot{width:9px;height:9px;border-radius:5px;display:inline-block;margin-left:13px}.sd-content{margin:0 20px}::ng-deep .chart-data-table cmacs-compact-table .cmacs-compact-table-input-number-icon-view{display:none}::ng-deep .chart-data-table cmacs-compact-table .cmacs-compact-table-header-logs,::ng-deep .chart-data-table cmacs-compact-table .cmacs-compact-table-header-logs .ant-table-row-expand-icon,::ng-deep .chart-data-table cmacs-compact-table .cmacs-compact-table-logs-header-th-font,::ng-deep .chart-data-table cmacs-compact-table .cmacs-compact-table-logs-header-th-font:hover{background-color:#fff!important}::ng-deep .chart-data-table .cmacs-compact-table .ant-table-tbody>tr:not(.cmacs-compact-table-header-logs)>td{background-color:#f6f7fb!important}"]
                }] }
    ];
    /** @nocollapse */
    CmacsKpiGroupComponent.ctorParameters = function () { return []; };
    CmacsKpiGroupComponent.propDecorators = {
        columnTemplate: [{ type: ViewChild, args: ['columnTemplate', { read: TemplateRef },] }],
        canvasRef: [{ type: ViewChild, args: ['chartcanvas', { read: ElementRef },] }],
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mta3BpLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mta3BpLWdyb3VwL2NtYWNzLWtwaS1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWlCLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUc3STtJQXVDRTtRQTdCVSxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQzs7UUFHckMsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBTWpCLGtCQUFhLEdBQWEsRUFBRSxDQUFDOztRQUd0QyxlQUFVLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLFNBQUksR0FBRyxHQUFHLENBQUM7UUFDWCxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsYUFBUSxHQUFHLEdBQUcsQ0FBQztRQUNmLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsWUFBTyxHQUFHLEdBQUcsQ0FBQztRQUNkLE1BQUMsR0FBRyxDQUFDLENBQUM7UUFDTixXQUFNLEdBQUcsRUFBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDO1FBSS9DLFlBQU8sR0FBRyxJQUFJLENBQUM7SUFHQyxDQUFDOzs7O0lBRWpCLHlDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFFRCw0Q0FBVzs7O0lBQVg7UUFBQSxpQkFrQkM7UUFqQkMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLEVBQUU7UUFDRixJQUFJLENBQUMs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QUFXLEdBQVc7UUFDcEIsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7O2dCQS9NRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsMHBDQUErQzs7aUJBRWhEOzs7OztpQ0FHRSxTQUFTLFNBQUMsZ0JBQWdCLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFOzRCQUNqRCxTQUFTLFNBQUMsYUFBYSxFQUFFLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRTs0QkFFNUMsTUFBTTs2QkFHTixLQUFLOzZCQUNMLEtBQUs7OEJBQ0wsS0FBSzt1QkFJTCxLQUFLO3VCQUNMLEtBQUs7Z0NBQ0wsS0FBSzs7SUEyTFIsNkJBQUM7Q0FBQSxBQWhORCxJQWdOQztTQTNNWSxzQkFBc0I7OztJQUVqQyxnREFBb0Y7O0lBQ3BGLDJDQUFxRTs7SUFFckUsMkNBQThDOztJQUc5Qyw0Q0FBeUI7O0lBQ3pCLDRDQUF5Qjs7SUFDekIsNkNBQTBCOztJQUkxQixzQ0FBeUI7O0lBQ3pCLHNDQUFzQjs7SUFDdEIsK0NBQXNDOztJQUd0Qyw0Q0FBaUI7O0lBQ2pCLGlEQUFxQjs7SUFDckIsc0NBQVc7O0lBQ1gsc0NBQVU7O0lBQ1YsMENBQWU7O0lBQ2YsMkNBQWtCOztJQUNsQix5Q0FBYzs7SUFDZCxtQ0FBTTs7SUFDTix3Q0FBK0M7O0lBRS9DLDJDQUFpQjs7SUFDakIsNkRBQWlDOztJQUNqQyx5Q0FBZTs7SUFDZiw4Q0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBUZW1wbGF0ZVJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgV2lkZ2V0QWN0aW9uVHlwZSB9IGZyb20gJy4uL2NvcmUvZW51bXMvd2lkZ2V0LWFjdGlvbi10eXBlLmVudW0nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1rcGktZ3JvdXAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1rcGktZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWtwaS1ncm91cC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzS3BpR3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2NvbHVtblRlbXBsYXRlJywgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSBjb2x1bW5UZW1wbGF0ZTogVGVtcGxhdGVSZWY8e30+O1xyXG4gIEBWaWV3Q2hpbGQoJ2NoYXJ0Y2FudmFzJywge3JlYWQ6IEVsZW1lbnRSZWYgfSkgY2FudmFzUmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICBAT3V0cHV0KCkgY2xpY2tNZW51ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIC8vIGNvbnRhaW5lclxyXG4gIEBJbnB1dCgpIGhlYWRlclRleHQgPSAnJztcclxuICBASW5wdXQoKSBmb290ZXJUZXh0ID0gJyc7XHJcbiAgQElucHV0KCkgZm9vdGVyVmFsdWUgPSAnJztcclxuXHJcbiAgLy8gY29udGVudFxyXG4gIC8vIHdpZHRoLCBoZWlnaHRcclxuICBASW5wdXQoKSB2aWV3ITogbnVtYmVyW107XHJcbiAgQElucHV0KCkgZGF0YSE6IGFueVtdO1xyXG4gIEBJbnB1dCgpIGNvbHVtbnNIZWFkZXI6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIC8vIGNoYXJ0XHJcbiAgY2hhcnRXaWR0aCA9IDEwNDtcclxuICBmb250Q2hhcnROdW1iZXIgPSAyMDtcclxuICBjb2wyID0gMTUwO1xyXG4gIGNvbDMgPSA3MDtcclxuICBtaW5XaWR0aCA9IDMwMDtcclxuICBzaG93Q2hhcnQgPSBmYWxzZTtcclxuICBzY3JvbGxZID0gMjAwO1xyXG4gIHAgPSAxO1xyXG4gIHNjcm9sbCA9IHt4OiAnMzAwcHgnLCB5OiB0aGlzLnNjcm9sbFkgKyAncHgnIH07XHJcblxyXG4gIGRhdGFUYWJsZTogYW55W107XHJcbiAgY29uZmlndXJhdGlvbkV4cGFuZGFibGVSb3dzOiBhbnk7XHJcbiAgbG9hZGluZyA9IHRydWU7XHJcbiAgc2VsZWN0ZWRJdGVtITogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgdGhpcy5zZXRTY3JvbGwoKTtcclxuICAgIC8vXHJcbiAgICB0aGlzLnAgPSAxO1xyXG4gICAgaWYgKHRoaXMudmlldyAmJiB0aGlzLnZpZXcubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgIHRoaXMucCA9IHRoaXMudmlld1swXSA+IHRoaXMubWluV2lkdGggPyB0aGlzLnZpZXdbMF0gLyB0aGlzLm1pbldpZHRoIDogMTtcclxuICAgIH1cclxuICAgIC8vXHJcbiAgICB0aGlzLnNob3dDaGFydCA9IGZhbHNlO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gdGhpcy5kYXRhWzBdLmtleTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmRyYXdDYW52YXMoKTtcclxuICAgICAgdGhpcy5zZXRDb25maWd1cmF0aW9uKCk7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSgpO1xyXG4gICAgfSwgMCk7XHJcbiAgICB0aGlzLnNob3dDaGFydCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgc2V0U2Nyb2xsKCkge1xyXG4gICAgbGV0IHAgPSAxO1xyXG4gICAgaWYgKHRoaXMudmlldyAmJiB0aGlzLnZpZXcubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgIHAgPSB0aGlzLnZpZXdbMV0gKiAwLjUgPiB0aGlzLnNjcm9sbFkgPyB0aGlzLnZpZXdbMV0gKiAwLjUgLyB0aGlzLnNjcm9sbFkgOiAxO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zY3JvbGwgPSB7eDogJzMwMHB4JywgeTogdGhpcy5zY3JvbGxZICogcCArICdweCcgfTtcclxuICB9XHJcblxyXG4gIGRyYXdDYW52YXMoKTogdm9pZCB7XHJcbiAgICBjb25zdCBpdGVtID0gdGhpcy5kYXRhLmZpbmQoeCA9PiB4LmtleSA9PT0gdGhpcy5zZWxlY3RlZEl0ZW0pO1xyXG4gICAgaWYgKHRoaXMuY2FudmFzUmVmICYmIGl0ZW0pIHtcclxuICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5jYW52YXNSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuXHJcbiAgICAgIGNhbnZhcy53aWR0aCA9IHRoaXMuY2hhcnRXaWR0aCAqIHRoaXMucDtcclxuICAgICAgY2FudmFzLmhlaWdodCA9IHRoaXMuY2hhcnRXaWR0aCAqIHRoaXMucDtcclxuICAgICAgLy9cclxuICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgIC8vIHRvdGFsc1xyXG4gICAgICBjb25zdCB0b3RhbFNob3cgPSB0aGlzLmdldFRvdGFsQ2F0ZWcoaXRlbS5kYXRhKTtcclxuICAgICAgY29uc3QgdG90YWwgPSB0aGlzLmRhdGEubWFwKHggPT4gdGhpcy5nZXRUb3RhbENhdGVnKHguZGF0YSkpLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApO1xyXG4gICAgICBsZXQgc3RhcnRBbmdsZSA9IDQ7XHJcblxyXG4gICAgICAvLyBkcmF3IGRhdGFcclxuICAgICAgZm9yIChjb25zdCBjYXRlZyBvZiB0aGlzLmRhdGEpIHtcclxuICAgICAgICBjb25zdCB0b3RhbEcgPSAgdGhpcy5nZXRUb3RhbENhdGVnKGNhdGVnLmRhdGEpO1xyXG4gICAgICAgIGNvbnN0IHNsaWNlQW5nbGUgPSAyICogTWF0aC5QSSAqIHRvdGFsRyAvIHRvdGFsO1xyXG4gICAgICAgIHRoaXMuZHJhd1BpZVNsaWNlKFxyXG4gICAgICAgICAgY3R4LFxyXG4gICAgICAgICAgY2FudmFzLndpZHRoIC8gMixcclxuICAgICAgICAgIGNhbnZhcy5oZWlnaHQgLyAyLFxyXG4gICAgICAgICAgTWF0aC5taW4oY2FudmFzLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIpIC0gKCh0aGlzLnNlbGVjdGVkSXRlbSA9PT0gY2F0ZWcua2V5KSA/IDEwICogdGhpcy5wIDogNiAqIHRoaXMucCksXHJcbiAgICAgICAgICBzdGFydEFuZ2xlLFxyXG4gICAgICAgICAgc3RhcnRBbmdsZSArIHNsaWNlQW5nbGUgLSAwLjA1LFxyXG4gICAgICAgICAgY2F0ZWcuY29sb3IsXHJcbiAgICAgICAgICAodGhpcy5zZWxlY3RlZEl0ZW0gPT09IGNhdGVnLmtleSkgPyAxNSAqIHRoaXMucCA6IDcgKiB0aGlzLnBcclxuICAgICAgICApO1xyXG4gICAgICAgIHN0YXJ0QW5nbGUgKz0gc2xpY2VBbmdsZTtcclxuICAgICAgfVxyXG4gICAgICAvLyBkcmF3IHZhbHVlXHJcbiAgICAgIGN0eC5mb250ID0gdGhpcy5mb250Q2hhcnROdW1iZXIgKiB0aGlzLnAgKyAncHggUm9ib3RvICc7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAnIzNiM2Y0Nic7XHJcbiAgICAgIGN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcclxuICAgICAgY3R4LmZpbGxUZXh0KCAnJyArIHRvdGFsU2hvdywgY2FudmFzLndpZHRoIC8gMiwgY2FudmFzLndpZHRoIC8gMiArIDUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJhd1BpZVNsaWNlKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBjZW50ZXJYOiBudW1iZXIsIGNlbnRlclk6IG51bWJlcixcclxuICAgICAgICAgICAgICAgcmFkaXVzOiBudW1iZXIsIHN0YXJ0QW5nbGU6IG51bWJlciwgZW5kQW5nbGU6IG51bWJlciwgY29sb3I6IGFueSwgbGluZVdpZHRoOiBudW1iZXIgKSB7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHguYXJjKGNlbnRlclgsIGNlbnRlclksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUpO1xyXG4gICAgY3R4LmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcclxuICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gICAgY3R4LnN0cm9rZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VG90YWxDYXRlZyhkYXRhOiBhbnlbXSk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gZGF0YS5tYXAoeCA9PiB4LnZhbHVlKS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKTtcclxuICB9XHJcblxyXG4gIHNldENvbmZpZ3VyYXRpb24oKTogdm9pZCB7XHJcbiAgICAvL1xyXG4gICAgdGhpcy5jb25maWd1cmF0aW9uRXhwYW5kYWJsZVJvd3MgPSB7XHJcbiAgICAgIGZpZWxkczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNlbGRUeXBlOiAzLFxyXG4gICAgICAgICAgZGlzcGxheTogJycsXHJcbiAgICAgICAgICBwcm9wZXJ0eTogJ2NvbG9yJyxcclxuICAgICAgICAgIHdpZHRoOiAnNjBweCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjZWxkVHlwZTogMCxcclxuICAgICAgICAgIGRpc3BsYXk6IHRoaXMuY29sdW1uc0hlYWRlclswXSxcclxuICAgICAgICAgIHByb3BlcnR5OiAnbmFtZScsXHJcbiAgICAgICAgICBlZGl0VGVtcGxhdGU6IDMsXHJcbiAgICAgICAgICB3aWR0aDogdGhpcy5jb2wyICogdGhpcy5wICsgJ3B4JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNlbGRUeXBlOiAwLFxyXG4gICAgICAgICAgZGlzcGxheTogdGhpcy5jb2x1bW5zSGVhZGVyWzFdLFxyXG4gICAgICAgICAgcHJvcGVydHk6ICd2YWx1ZScsXHJcbiAgICAgICAgICB3aWR0aDogdGhpcy5jb2wzICogdGhpcy5wICsgJ3B4JyxcclxuICAgICAgICAgIGVkaXRUZW1wbGF0ZTogMixcclxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgZmllbGRJZDogJ2tleScsXHJcbiAgICAgIGZpZWxkUmF0ZTogJ2ZhdidcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzZXREYXRhKCk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgIGNvbnN0IHRlbXA6IGFueVtdID0gW107XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZEl0ZW0pIHtcclxuICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YS5maW5kKHggPT4geC5rZXkgPT09IHRoaXMuc2VsZWN0ZWRJdGVtKTtcclxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEuZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IG5ld0l0ZW0gPSB7XHJcbiAgICAgICAgICBrZXk6IGl0ZW0ua2V5LFxyXG4gICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxyXG4gICAgICAgICAgY29sb3I6ICB7XHJcbiAgICAgICAgICAgIHJlZjogdGhpcy5jb2x1bW5UZW1wbGF0ZSxcclxuICAgICAgICAgICAgY29udGV4dDoge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBkYXRhLmNvbG9yXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB2YWx1ZTogaXRlbS52YWx1ZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiB0aGlzLmdldENoaWxkcmVuKGl0ZW0ucm93cylcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRlbXAucHVzaChuZXdJdGVtKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmRhdGFUYWJsZSA9IHRlbXA7XHJcbiAgICB9XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICB9LCAwKTtcclxuICB9XHJcbiAgZ2V0Q2hpbGRyZW4oaXRlbXM6IGFueVtdKTogYW55W10ge1xyXG4gICAgY29uc3Qgb3V0cHV0OiBhbnlbXSA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XHJcbiAgICAgIG91dHB1dC5wdXNoKHtcclxuICAgICAgICBrZXk6IGl0ZW0ua2V5LFxyXG4gICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcclxuICAgICAgICBjb2xvcjoge30sXHJcbiAgICAgICAgdmFsdWU6ICcnXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dHB1dDtcclxuICB9XHJcblxyXG4gIG1lbnVDbGljayh0eXBlOiBXaWRnZXRBY3Rpb25UeXBlKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsaWNrTWVudS5lbWl0KHR5cGUpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlRGF0YShrZXk6IHN0cmluZykge1xyXG4gICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBrZXk7XHJcbiAgICB0aGlzLnNldERhdGEoKTtcclxuICAgIHRoaXMuZHJhd0NhbnZhcygpO1xyXG4gIH1cclxufVxyXG4iXX0=