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
            var startAngle = 4;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mta3BpLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mta3BpLWdyb3VwL2NtYWNzLWtwaS1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWlCLFVBQVUsRUFBYSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEosT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTVEO0lBMENFLGdDQUVVLFFBQW1CLEVBQ25CLFVBQXNCLEVBQ3RCLFdBQXdCO0lBQ2hDLEVBQUU7O1FBSE0sYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBbkN4QixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQzs7UUFHckMsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBTWpCLGtCQUFhLEdBQWEsRUFBRSxDQUFDO1FBRXRDLHFCQUFnQixHQUFHLElBQUksQ0FBQzs7UUFHeEIsZUFBVSxHQUFHLEdBQUcsQ0FBQztRQUNqQixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQixTQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ1gsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLGFBQVEsR0FBRyxHQUFHLENBQUM7UUFDZixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLFlBQU8sR0FBRyxHQUFHLENBQUM7UUFDZCxNQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ04sV0FBTSxHQUFHLEVBQUMsQ0FBQyxFQUFFLE9BQU8s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QXlCOztJQUN6Qiw0Q0FBeUI7O0lBQ3pCLDZDQUEwQjs7SUFJMUIsc0NBQXlCOztJQUN6QixzQ0FBc0I7O0lBQ3RCLCtDQUFzQzs7SUFFdEMsa0RBQXdCOztJQUd4Qiw0Q0FBaUI7O0lBQ2pCLGlEQUFxQjs7SUFDckIsc0NBQVc7O0lBQ1gsc0NBQVU7O0lBQ1YsMENBQWU7O0lBQ2YsMkNBQWtCOztJQUNsQix5Q0FBYzs7SUFDZCxtQ0FBTTs7SUFDTix3Q0FBK0M7O0lBRS9DLDJDQUFpQjs7SUFDakIsNkRBQWlDOztJQUNqQyx5Q0FBZTs7SUFDZiw4Q0FBc0I7Ozs7O0lBSXBCLDBDQUEyQjs7Ozs7SUFDM0IsNENBQThCOzs7OztJQUM5Qiw2Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBUZW1wbGF0ZVJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBPbkNoYW5nZXMsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXaWRnZXRBY3Rpb25UeXBlIH0gZnJvbSAnLi4vY29yZS9lbnVtcy93aWRnZXQtYWN0aW9uLXR5cGUuZW51bSc7XHJcbmltcG9ydCB7IFV0aWxTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy91dGlsLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1rcGktZ3JvdXAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1rcGktZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWtwaS1ncm91cC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzS3BpR3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2NvbHVtblRlbXBsYXRlJywgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSBjb2x1bW5UZW1wbGF0ZTogVGVtcGxhdGVSZWY8e30+O1xyXG4gIEBWaWV3Q2hpbGQoJ2NoYXJ0Y2FudmFzJywge3JlYWQ6IEVsZW1lbnRSZWYgfSkgY2FudmFzUmVmOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2xlZ2VuZENvbnRlbnQnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgcHVibGljIGxlZ2VuZENvbnRlbnQ6IEVsZW1lbnRSZWY8YW55PjtcclxuXHJcbiAgQE91dHB1dCgpIGNsaWNrTWVudSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAvLyBjb250YWluZXJcclxuICBASW5wdXQoKSBoZWFkZXJUZXh0ID0gJyc7XHJcbiAgQElucHV0KCkgZm9vdGVyVGV4dCA9ICcnO1xyXG4gIEBJbnB1dCgpIGZvb3RlclZhbHVlID0gJyc7XHJcblxyXG4gIC8vIGNvbnRlbnRcclxuICAvLyB3aWR0aCwgaGVpZ2h0XHJcbiAgQElucHV0KCkgdmlldyE6IG51bWJlcltdO1xyXG4gIEBJbnB1dCgpIGRhdGEhOiBhbnlbXTtcclxuICBASW5wdXQoKSBjb2x1bW5zSGVhZGVyOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBkaXNwbGF5QXJyb3dCdG5zID0gdHJ1ZTtcclxuXHJcbiAgLy8gY2hhcnRcclxuICBjaGFydFdpZHRoID0gMTA0O1xyXG4gIGZvbnRDaGFydE51bWJlciA9IDIwO1xyXG4gIGNvbDIgPSAxNTA7XHJcbiAgY29sMyA9IDcwO1xyXG4gIG1pbldpZHRoID0gMzAwO1xyXG4gIHNob3dDaGFydCA9IGZhbHNlO1xyXG4gIHNjcm9sbFkgPSAyMDA7XHJcbiAgcCA9IDE7XHJcbiAgc2Nyb2xsID0ge3g6ICczMDBweCcsIHk6IHRoaXMuc2Nyb2xsWSArICdweCcgfTtcclxuXHJcbiAgZGF0YVRhYmxlOiBhbnlbXTtcclxuICBjb25maWd1cmF0aW9uRXhwYW5kYWJsZVJvd3M6IGFueTtcclxuICBsb2FkaW5nID0gdHJ1ZTtcclxuICBzZWxlY3RlZEl0ZW0hOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgLy9cclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgdXRpbFNlcnZpY2U6IFV0aWxTZXJ2aWNlXHJcbiAgICAvL1xyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICB0aGlzLnNldFNjcm9sbCgpO1xyXG4gICAgLy9cclxuICAgIHRoaXMucCA9IDE7XHJcbiAgICBpZiAodGhpcy52aWV3ICYmIHRoaXMudmlldy5sZW5ndGggPT09IDIpIHtcclxuICAgICAgdGhpcy5wID0gdGhpcy52aWV3WzBdID4gdGhpcy5taW5XaWR0aCA/IHRoaXMudmlld1swXSAvIHRoaXMubWluV2lkdGggOiAxO1xyXG4gICAgICBpZiAodGhpcy5yZW5kZXJlcikge1xyXG4gICAgICAgIHRoaXMucmVzaXplKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vXHJcbiAgICB0aGlzLnNob3dDaGFydCA9IGZhbHNlO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gdGhpcy5kYXRhWzBdLmtleTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmRyYXdDYW52YXMoKTtcclxuICAgICAgdGhpcy5zZXRDb25maWd1cmF0aW9uKCk7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSgpO1xyXG4gICAgfSwgMCk7XHJcbiAgICB0aGlzLnNob3dDaGFydCA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5zaG93QXJyb3dCdG5zKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLnJlc2l6ZSgpO1xyXG4gIH1cclxuXHJcbiAgcmVzaXplKCkge1xyXG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLnZpZXdbMF07XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCBgJHt3aWR0aH1weGApO1xyXG4gIH1cclxuICAvL1xyXG5cclxuICBzZXRTY3JvbGwoKSB7XHJcbiAgICBsZXQgcCA9IDE7XHJcbiAgICBpZiAodGhpcy52aWV3ICYmIHRoaXMudmlldy5sZW5ndGggPT09IDIpIHtcclxuICAgICAgcCA9IHRoaXMudmlld1sxXSAqIDAuNSA+IHRoaXMuc2Nyb2xsWSA/IHRoaXMudmlld1sxXSAqIDAuNSAvIHRoaXMuc2Nyb2xsWSA6IDE7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNjcm9sbCA9IHt4OiAnMzAwcHgnLCB5OiB0aGlzLnNjcm9sbFkgKiBwICsgJ3B4JyB9O1xyXG4gIH1cclxuXHJcbiAgc2Nyb2xsUmlnaHQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmxlZ2VuZENvbnRlbnQubmF0aXZlRWxlbWVudC5zY3JvbGxUbyh7IGxlZnQ6ICh0aGlzLmxlZ2VuZENvbnRlbnQubmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0IC0gNDApLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgfVxyXG5cclxuICBzY3JvbGxMZWZ0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5sZWdlbmRDb250ZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG8oeyBsZWZ0OiAodGhpcy5sZWdlbmRDb250ZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdCArIDQwKSwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG4gIH1cclxuXHJcbiAgZHJhd0NhbnZhcygpOiB2b2lkIHtcclxuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmRhdGEuZmluZCh4ID0+IHgua2V5ID09PSB0aGlzLnNlbGVjdGVkSXRlbSk7XHJcbiAgICBpZiAodGhpcy5jYW52YXNSZWYgJiYgaXRlbSkge1xyXG4gICAgICBjb25zdCBjYW52YXMgPSB0aGlzLmNhbnZhc1JlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG5cclxuICAgICAgY2FudmFzLndpZHRoID0gdGhpcy5jaGFydFdpZHRoICogdGhpcy5wO1xyXG4gICAgICBjYW52YXMuaGVpZ2h0ID0gdGhpcy5jaGFydFdpZHRoICogdGhpcy5wO1xyXG4gICAgICAvL1xyXG4gICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgICAgLy8gdG90YWxzXHJcbiAgICAgIGNvbnN0IHRvdGFsU2hvdyA9IHRoaXMuZ2V0VG90YWxDYXRlZyhpdGVtLmRhdGEpO1xyXG4gICAgICBjb25zdCB0b3RhbCA9IHRoaXMuZGF0YS5tYXAoeCA9PiB0aGlzLmdldFRvdGFsQ2F0ZWcoeC5kYXRhKSkucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCk7XHJcbiAgICAgIGxldCBzdGFydEFuZ2xlID0gNDtcclxuXHJcbiAgICAgIC8vIGRyYXcgZGF0YVxyXG4gICAgICBmb3IgKGNvbnN0IGNhdGVnIG9mIHRoaXMuZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IHRvdGFsRyA9ICB0aGlzLmdldFRvdGFsQ2F0ZWcoY2F0ZWcuZGF0YSk7XHJcbiAgICAgICAgY29uc3Qgc2xpY2VBbmdsZSA9IDIgKiBNYXRoLlBJICogdG90YWxHIC8gdG90YWw7XHJcbiAgICAgICAgaWYgKHNsaWNlQW5nbGUgPiAwICkge1xyXG4gICAgICAgICAgdGhpcy5kcmF3UGllU2xpY2UoXHJcbiAgICAgICAgICAgIGN0eCxcclxuICAgICAgICAgICAgY2FudmFzLndpZHRoIC8gMixcclxuICAgICAgICAgICAgY2FudmFzLmhlaWdodCAvIDIsXHJcbiAgICAgICAgICAgIE1hdGgubWluKGNhbnZhcy53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyKSAtICgodGhpcy5zZWxlY3RlZEl0ZW0gPT09IGNhdGVnLmtleSkgPyAxMCAqIHRoaXMucCA6IDYgKiB0aGlzLnApLFxyXG4gICAgICAgICAgICBzdGFydEFuZ2xlLFxyXG4gICAgICAgICAgICBzdGFydEFuZ2xlICsgc2xpY2VBbmdsZSAtIDAuMDUsXHJcbiAgICAgICAgICAgIGNhdGVnLmNvbG9yLFxyXG4gICAgICAgICAgICAodGhpcy5zZWxlY3RlZEl0ZW0gPT09IGNhdGVnLmtleSkgPyAxNSAqIHRoaXMucCA6IDcgKiB0aGlzLnBcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBzdGFydEFuZ2xlICs9IHNsaWNlQW5nbGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vIGRyYXcgdmFsdWVcclxuICAgICAgY3R4LmZvbnQgPSB0aGlzLmZvbnRDaGFydE51bWJlciAqIHRoaXMucCArICdweCBSb2JvdG8tUmVndWxhciAnO1xyXG4gICAgICBjdHguZmlsbFN0eWxlID0gJyMzYjNmNDYnO1xyXG4gICAgICBjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcbiAgICAgIGN0eC5maWxsVGV4dCggJycgKyB0b3RhbFNob3csIGNhbnZhcy53aWR0aCAvIDIsIGNhbnZhcy53aWR0aCAvIDIgKyA1KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYXdQaWVTbGljZShjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgY2VudGVyWDogbnVtYmVyLCBjZW50ZXJZOiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgIHJhZGl1czogbnVtYmVyLCBzdGFydEFuZ2xlOiBudW1iZXIsIGVuZEFuZ2xlOiBudW1iZXIsIGNvbG9yOiBhbnksIGxpbmVXaWR0aDogbnVtYmVyICkge1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4LmFyYyhjZW50ZXJYLCBjZW50ZXJZLCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlKTtcclxuICAgIGN0eC5saW5lV2lkdGggPSBsaW5lV2lkdGg7XHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcclxuICAgIGN0eC5zdHJva2UoKTtcclxuICB9XHJcblxyXG4gIGdldFRvdGFsQ2F0ZWcoZGF0YTogYW55W10pOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGRhdGEubWFwKHggPT4geC52YWx1ZSkucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCk7XHJcbiAgfVxyXG5cclxuICBzZXRDb25maWd1cmF0aW9uKCk6IHZvaWQge1xyXG4gICAgLy9cclxuICAgIHRoaXMuY29uZmlndXJhdGlvbkV4cGFuZGFibGVSb3dzID0ge1xyXG4gICAgICBmaWVsZHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjZWxkVHlwZTogMyxcclxuICAgICAgICAgIGRpc3BsYXk6ICcnLFxyXG4gICAgICAgICAgcHJvcGVydHk6ICdjb2xvcicsXHJcbiAgICAgICAgICB3aWR0aDogJzYwcHgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY2VsZFR5cGU6IDAsXHJcbiAgICAgICAgICBkaXNwbGF5OiB0aGlzLmNvbHVtbnNIZWFkZXJbMF0sXHJcbiAgICAgICAgICBwcm9wZXJ0eTogJ25hbWUnLFxyXG4gICAgICAgICAgZWRpdFRlbXBsYXRlOiAzLFxyXG4gICAgICAgICAgd2lkdGg6IHRoaXMuY29sMiAqIHRoaXMucCArICdweCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjZWxkVHlwZTogMCxcclxuICAgICAgICAgIGRpc3BsYXk6IHRoaXMuY29sdW1uc0hlYWRlclsxXSxcclxuICAgICAgICAgIHByb3BlcnR5OiAndmFsdWUnLFxyXG4gICAgICAgICAgd2lkdGg6IHRoaXMuY29sMyAqIHRoaXMucCArICdweCcsXHJcbiAgICAgICAgICBlZGl0VGVtcGxhdGU6IDIsXHJcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIF0sXHJcbiAgICAgIGZpZWxkSWQ6ICdrZXknLFxyXG4gICAgICBmaWVsZFJhdGU6ICdmYXYnXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc2V0RGF0YSgpOiB2b2lkIHtcclxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICBjb25zdCB0ZW1wOiBhbnlbXSA9IFtdO1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtKSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGEuZmluZCh4ID0+IHgua2V5ID09PSB0aGlzLnNlbGVjdGVkSXRlbSk7XHJcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhLmRhdGEpIHtcclxuICAgICAgICBjb25zdCBuZXdJdGVtID0ge1xyXG4gICAgICAgICAga2V5OiBpdGVtLmtleSxcclxuICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcclxuICAgICAgICAgIGNvbG9yOiAge1xyXG4gICAgICAgICAgICByZWY6IHRoaXMuY29sdW1uVGVtcGxhdGUsXHJcbiAgICAgICAgICAgIGNvbnRleHQ6IHtcclxuICAgICAgICAgICAgICBjb2xvcjogZGF0YS5jb2xvclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdmFsdWU6IGl0ZW0udmFsdWUsXHJcbiAgICAgICAgICBjaGlsZHJlbjogdGhpcy5nZXRDaGlsZHJlbihpdGVtLnJvd3MpXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0ZW1wLnB1c2gobmV3SXRlbSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5kYXRhVGFibGUgPSB0ZW1wO1xyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG4gIGdldENoaWxkcmVuKGl0ZW1zOiBhbnlbXSk6IGFueVtdIHtcclxuICAgIGNvbnN0IG91dHB1dDogYW55W10gPSBbXTtcclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xyXG4gICAgICBvdXRwdXQucHVzaCh7XHJcbiAgICAgICAga2V5OiBpdGVtLmtleSxcclxuICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXHJcbiAgICAgICAgY29sb3I6IHt9LFxyXG4gICAgICAgIHZhbHVlOiAnJ1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgfVxyXG5cclxuICBtZW51Q2xpY2sodHlwZTogV2lkZ2V0QWN0aW9uVHlwZSk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGlja01lbnUuZW1pdCh0eXBlKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZURhdGEoa2V5OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0ga2V5O1xyXG4gICAgdGhpcy5zZXREYXRhKCk7XHJcbiAgICB0aGlzLmRyYXdDYW52YXMoKTtcclxuICB9XHJcblxyXG4gIHNob3dBcnJvd0J0bnMoKTogdm9pZCB7XHJcbiAgICBjb25zdCB0ZXh0ID0gdGhpcy5kYXRhLm1hcChpID0+IGkubmFtZSArICdzcGFjZScpO1xyXG4gICAgY29uc3QgdHNpemUgPSB0aGlzLnV0aWxTZXJ2aWNlLmdldF90ZXhfc2l6ZSh0ZXh0LCAnMTJweCBSb2JvdG8tUmVndWxhcicpO1xyXG4gICAgdGhpcy5kaXNwbGF5QXJyb3dCdG5zID0gdHNpemUud2lkdGggPiB0aGlzLnZpZXdbMF0gLSAxNTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==