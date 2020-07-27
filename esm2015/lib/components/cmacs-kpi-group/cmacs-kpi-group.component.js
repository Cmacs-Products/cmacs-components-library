/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, TemplateRef, Output, EventEmitter, Input, ElementRef, Renderer2 } from '@angular/core';
import { UtilService } from '../core/services/util.service';
export class CmacsKpiGroupComponent {
    /**
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?} utilService
     */
    constructor(renderer, elementRef, utilService
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
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
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
        () => {
            if (this.data.length > 0) {
                this.selectedItem = this.data[0].key;
            }
            this.drawCanvas();
            this.setConfiguration();
            this.setData();
        }), 0);
        this.showChart = true;
        this.showArrowBtns();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.resize();
    }
    /**
     * @return {?}
     */
    resize() {
        /** @type {?} */
        const width = this.view[0];
        this.renderer.setStyle(this.elementRef.nativeElement, 'width', `${width}px`);
    }
    //
    /**
     * @return {?}
     */
    setScroll() {
        /** @type {?} */
        let p = 1;
        if (this.view && this.view.length === 2) {
            p = this.view[1] * 0.5 > this.scrollY ? this.view[1] * 0.5 / this.scrollY : 1;
        }
        this.scroll = { x: '300px', y: this.scrollY * p + 'px' };
    }
    /**
     * @return {?}
     */
    scrollRight() {
        this.legendContent.nativeElement.scrollTo({ left: (this.legendContent.nativeElement.scrollLeft - 40), behavior: 'smooth' });
    }
    /**
     * @return {?}
     */
    scrollLeft() {
        this.legendContent.nativeElement.scrollTo({ left: (this.legendContent.nativeElement.scrollLeft + 40), behavior: 'smooth' });
    }
    /**
     * @return {?}
     */
    drawCanvas() {
        /** @type {?} */
        const item = this.data.find((/**
         * @param {?} x
         * @return {?}
         */
        x => x.key === this.selectedItem));
        if (this.canvasRef && item) {
            /** @type {?} */
            const canvas = (/** @type {?} */ (this.canvasRef.nativeElement));
            canvas.width = this.chartWidth * this.p;
            canvas.height = this.chartWidth * this.p;
            //
            /** @type {?} */
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // totals
            /** @type {?} */
            const totalShow = this.getTotalCateg(item.data);
            /** @type {?} */
            const total = this.data.map((/**
             * @param {?} x
             * @return {?}
             */
            x => this.getTotalCateg(x.data))).reduce((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => a + b), 0);
            /** @type {?} */
            let startAngle = 4;
            // draw data
            for (const categ of this.data) {
                /** @type {?} */
                const totalG = this.getTotalCateg(categ.data);
                /** @type {?} */
                const sliceAngle = 2 * Math.PI * totalG / total;
                if (sliceAngle > 0) {
                    this.drawPieSlice(ctx, canvas.width / 2, canvas.height / 2, Math.min(canvas.width / 2, canvas.height / 2) - ((this.selectedItem === categ.key) ? 10 * this.p : 6 * this.p), startAngle, startAngle + sliceAngle - 0.05, categ.color, (this.selectedItem === categ.key) ? 15 * this.p : 7 * this.p);
                    startAngle += sliceAngle;
                }
            }
            // draw value
            ctx.font = this.fontChartNumber * this.p + 'px Roboto-Regular ';
            ctx.fillStyle = '#3b3f46';
            ctx.textAlign = 'center';
            ctx.fillText('' + totalShow, canvas.width / 2, canvas.width / 2 + 5);
        }
    }
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
    drawPieSlice(ctx, centerX, centerY, radius, startAngle, endAngle, color, lineWidth) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = color;
        ctx.stroke();
    }
    /**
     * @param {?} data
     * @return {?}
     */
    getTotalCateg(data) {
        return data.map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.value)).reduce((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => a + b), 0);
    }
    /**
     * @return {?}
     */
    setConfiguration() {
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
    }
    /**
     * @return {?}
     */
    setData() {
        this.loading = true;
        /** @type {?} */
        const temp = [];
        if (this.selectedItem) {
            /** @type {?} */
            const data = this.data.find((/**
             * @param {?} x
             * @return {?}
             */
            x => x.key === this.selectedItem));
            for (const item of data.data) {
                /** @type {?} */
                const newItem = {
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
            this.dataTable = temp;
        }
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.loading = false;
        }), 0);
    }
    /**
     * @param {?} items
     * @return {?}
     */
    getChildren(items) {
        /** @type {?} */
        const output = [];
        for (const item of items) {
            output.push({
                key: item.key,
                name: item.name,
                color: {},
                value: ''
            });
        }
        return output;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    menuClick(type) {
        this.clickMenu.emit(type);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    changeData(key) {
        this.selectedItem = key;
        this.setData();
        this.drawCanvas();
    }
    /**
     * @return {?}
     */
    showArrowBtns() {
        /** @type {?} */
        const text = this.data.map((/**
         * @param {?} i
         * @return {?}
         */
        i => i.name + 'space'));
        /** @type {?} */
        const tsize = this.utilService.get_tex_size(text, '12px Roboto-Regular');
        this.displayArrowBtns = tsize.width > this.view[0] - 15;
    }
}
CmacsKpiGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmacs-kpi-group',
                template: "<div class=\"sd-content\" *ngIf=\"showChart\">\r\n  <!-- Legend -->\r\n  <div nz-row class=\"legend-row\">\r\n    <span class=\"legend-left-icon\" (click)=\"scrollRight()\" *ngIf=\"displayArrowBtns\">\r\n      <i class=\"iconArrowLarge-Chevron-Left\"></i>\r\n    </span>\r\n    <div #legendContent class=\"legend-data\">\r\n      <span class=\"legend-column\" *ngFor=\"let item of data\" (click)=\"changeData(item.key)\">\r\n        <span [style.background-color]=\"item.color\" class=\"legend-bar\"></span>\r\n        <span class=\"legend-text\">{{item.name}}</span>\r\n      </span>\r\n    </div>\r\n    <span (click)=\"scrollLeft()\" class=\"legend-right-icon\" *ngIf=\"displayArrowBtns\">\r\n      <i class=\"iconArrowLarge-Chevron-Right\"></i>\r\n    </span>\r\n  </div>\r\n  <!-- Chart -->\r\n  <div nz-row class=\"chart-content\">\r\n    <canvas #chartcanvas class=\"chart-canvas\"></canvas>\r\n  </div>\r\n  <div nz-row class=\"chart-data-table\">\r\n    <cmacs-compact-table *ngIf=\"!loading && dataTable; else elseBlock\" [data]=\"dataTable\"\r\n      [(config)]=\"configurationExpandableRows\" [indentSize]=\"40\" [logs]=\"true\" [expandable]=\"true\"\r\n      [scroll]=\"scroll\" [frontPagination]=\"false\" [showPagination]=\"false\"></cmacs-compact-table>\r\n  </div>\r\n</div>\r\n<ng-template #columnTemplate let-color=\"color\">\r\n  <div class=\"chart-dot\" [style.background-color]=\"color\"></div>\r\n</ng-template>\r\n\r\n<ng-template #elseBlock>\r\n  <nz-skeleton [nzActive]=\"true\" [nzParagraph]=\"{ rows: 8 }\"></nz-skeleton>\r\n</ng-template>",
                styles: [".legend-column{display:table-cell;float:left;font-family:Roboto-Regular;font-size:12px;color:#656c79;cursor:pointer;white-space:nowrap;padding-top:8px}.legend-left-icon,.legend-right-icon{top:5px;font-size:19px;padding-left:5px;padding-right:5px;cursor:pointer}.legend-left-icon{position:absolute;z-index:2;left:0}.legend-right-icon{position:absolute;right:0}.legend-text{padding-left:6px;padding-right:20px}.legend-column:last-child .legend-text{padding-right:0}.legend-bar{width:4px;height:10px;border-radius:5px;display:inline-block}.legend-row{width:100%;margin-bottom:32px;display:-webkit-box;display:flex;place-content:flex-end}.legend-data{display:-webkit-box;display:flex;overflow:hidden;margin-right:28px;text-align:right;margin-left:25px}.chart-content{text-align:center;margin-bottom:25px}.chart-dot{width:9px;height:9px;border-radius:5px;display:inline-block;margin-left:13px}::ng-deep .chart-data-table cmacs-compact-table .cmacs-compact-table-input-number-icon-view{display:none}::ng-deep .chart-data-table cmacs-compact-table .cmacs-compact-table-header-logs,::ng-deep .chart-data-table cmacs-compact-table .cmacs-compact-table-header-logs .ant-table-row-expand-icon,::ng-deep .chart-data-table cmacs-compact-table .cmacs-compact-table-logs-header-th-font,::ng-deep .chart-data-table cmacs-compact-table .cmacs-compact-table-logs-header-th-font:hover{background-color:#fff!important}::ng-deep .chart-data-table .cmacs-compact-table .ant-table-tbody>tr:not(.cmacs-compact-table-header-logs)>td,::ng-deep .chart-data-table .cmacs-compact-table .ant-table-thead>tr>th{background-color:#f6f7fb!important}"]
            }] }
];
/** @nocollapse */
CmacsKpiGroupComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: UtilService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mta3BpLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mta3BpLWdyb3VwL2NtYWNzLWtwaS1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBaUIsVUFBVSxFQUFhLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4SixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFPNUQsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7O0lBcUNqQyxZQUVVLFFBQW1CLEVBQ25CLFVBQXNCLEVBQ3RCLFdBQXdCO0lBQ2hDLEVBQUU7O1FBSE0sYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBbkN4QixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQzs7UUFHckMsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBTWpCLGtCQUFhLEdBQWEsRUFBRSxDQUFDO1FBRXRDLHFCQUFnQixHQUFHLElBQUksQ0FBQzs7UUFHeEIsZUFBVSxHQUFHLEdBQUcsQ0FBQztRQUNqQixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQixTQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ1gsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLGFBQVEsR0FBRyxHQUFHLENBQUM7UUFDZixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLFlBQU8sR0FBRyxHQUFHLENBQUM7UUFDZCxNQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ04sV0FBTSxHQUFH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Q0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzFELENBQUM7OztZQW5QRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsMmlEQUErQzs7YUFFaEQ7Ozs7WUFSc0gsU0FBUztZQUFoQyxVQUFVO1lBRWpHLFdBQVc7Ozs2QkFTakIsU0FBUyxTQUFDLGdCQUFnQixFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTt3QkFDakQsU0FBUyxTQUFDLGFBQWEsRUFBRSxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUU7NEJBQzVDLFNBQVMsU0FBQyxlQUFlLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO3dCQUUvQyxNQUFNO3lCQUdOLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLO21CQUlMLEtBQUs7bUJBQ0wsS0FBSzs0QkFDTCxLQUFLOzs7O0lBZk4sZ0RBQW9GOztJQUNwRiwyQ0FBcUU7O0lBQ3JFLCtDQUF3Rjs7SUFFeEYsMkNBQThDOztJQUc5Qyw0Q0FBeUI7O0lBQ3pCLDRDQUF5Qjs7SUFDekIsNkNBQTBCOztJQUkxQixzQ0FBeUI7O0lBQ3pCLHNDQUFzQjs7SUFDdEIsK0NBQXNDOztJQUV0QyxrREFBd0I7O0lBR3hCLDRDQUFpQjs7SUFDakIsaURBQXFCOztJQUNyQixzQ0FBVzs7SUFDWCxzQ0FBVTs7SUFDViwwQ0FBZTs7SUFDZiwyQ0FBa0I7O0lBQ2xCLHlDQUFjOztJQUNkLG1DQUFNOztJQUNOLHdDQUErQzs7SUFFL0MsMkNBQWlCOztJQUNqQiw2REFBaUM7O0lBQ2pDLHlDQUFlOztJQUNmLDhDQUFzQjs7Ozs7SUFJcEIsMENBQTJCOzs7OztJQUMzQiw0Q0FBOEI7Ozs7O0lBQzlCLDZDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIFRlbXBsYXRlUmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFdpZGdldEFjdGlvblR5cGUgfSBmcm9tICcuLi9jb3JlL2VudW1zL3dpZGdldC1hY3Rpb24tdHlwZS5lbnVtJztcclxuaW1wb3J0IHsgVXRpbFNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3V0aWwuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWtwaS1ncm91cCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWtwaS1ncm91cC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3Mta3BpLWdyb3VwLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NLcGlHcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcclxuXHJcbiAgQFZpZXdDaGlsZCgnY29sdW1uVGVtcGxhdGUnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pIGNvbHVtblRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7fT47XHJcbiAgQFZpZXdDaGlsZCgnY2hhcnRjYW52YXMnLCB7cmVhZDogRWxlbWVudFJlZiB9KSBjYW52YXNSZWY6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnbGVnZW5kQ29udGVudCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBwdWJsaWMgbGVnZW5kQ29udGVudDogRWxlbWVudFJlZjxhbnk+O1xyXG5cclxuICBAT3V0cHV0KCkgY2xpY2tNZW51ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIC8vIGNvbnRhaW5lclxyXG4gIEBJbnB1dCgpIGhlYWRlclRleHQgPSAnJztcclxuICBASW5wdXQoKSBmb290ZXJUZXh0ID0gJyc7XHJcbiAgQElucHV0KCkgZm9vdGVyVmFsdWUgPSAnJztcclxuXHJcbiAgLy8gY29udGVudFxyXG4gIC8vIHdpZHRoLCBoZWlnaHRcclxuICBASW5wdXQoKSB2aWV3ITogbnVtYmVyW107XHJcbiAgQElucHV0KCkgZGF0YSE6IGFueVtdO1xyXG4gIEBJbnB1dCgpIGNvbHVtbnNIZWFkZXI6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIGRpc3BsYXlBcnJvd0J0bnMgPSB0cnVlO1xyXG5cclxuICAvLyBjaGFydFxyXG4gIGNoYXJ0V2lkdGggPSAxMDQ7XHJcbiAgZm9udENoYXJ0TnVtYmVyID0gMjA7XHJcbiAgY29sMiA9IDE1MDtcclxuICBjb2wzID0gNzA7XHJcbiAgbWluV2lkdGggPSAzMDA7XHJcbiAgc2hvd0NoYXJ0ID0gZmFsc2U7XHJcbiAgc2Nyb2xsWSA9IDIwMDtcclxuICBwID0gMTtcclxuICBzY3JvbGwgPSB7eDogJzMwMHB4JywgeTogdGhpcy5zY3JvbGxZICsgJ3B4JyB9O1xyXG5cclxuICBkYXRhVGFibGU6IGFueVtdO1xyXG4gIGNvbmZpZ3VyYXRpb25FeHBhbmRhYmxlUm93czogYW55O1xyXG4gIGxvYWRpbmcgPSB0cnVlO1xyXG4gIHNlbGVjdGVkSXRlbSE6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSB1dGlsU2VydmljZTogVXRpbFNlcnZpY2VcclxuICAgIC8vXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpIHtcclxuICAgIHRoaXMuc2V0U2Nyb2xsKCk7XHJcbiAgICAvL1xyXG4gICAgdGhpcy5wID0gMTtcclxuICAgIGlmICh0aGlzLnZpZXcgJiYgdGhpcy52aWV3Lmxlbmd0aCA9PT0gMikge1xyXG4gICAgICB0aGlzLnAgPSB0aGlzLnZpZXdbMF0gPiB0aGlzLm1pbldpZHRoID8gdGhpcy52aWV3WzBdIC8gdGhpcy5taW5XaWR0aCA6IDE7XHJcbiAgICAgIGlmICh0aGlzLnJlbmRlcmVyKSB7XHJcbiAgICAgICAgdGhpcy5yZXNpemUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy9cclxuICAgIHRoaXMuc2hvd0NoYXJ0ID0gZmFsc2U7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSB0aGlzLmRhdGFbMF0ua2V5O1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZHJhd0NhbnZhcygpO1xyXG4gICAgICB0aGlzLnNldENvbmZpZ3VyYXRpb24oKTtcclxuICAgICAgdGhpcy5zZXREYXRhKCk7XHJcbiAgICB9LCAwKTtcclxuICAgIHRoaXMuc2hvd0NoYXJ0ID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLnNob3dBcnJvd0J0bnMoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMucmVzaXplKCk7XHJcbiAgfVxyXG5cclxuICByZXNpemUoKSB7XHJcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMudmlld1swXTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIGAke3dpZHRofXB4YCk7XHJcbiAgfVxyXG4gIC8vXHJcblxyXG4gIHNldFNjcm9sbCgpIHtcclxuICAgIGxldCBwID0gMTtcclxuICAgIGlmICh0aGlzLnZpZXcgJiYgdGhpcy52aWV3Lmxlbmd0aCA9PT0gMikge1xyXG4gICAgICBwID0gdGhpcy52aWV3WzFdICogMC41ID4gdGhpcy5zY3JvbGxZID8gdGhpcy52aWV3WzFdICogMC41IC8gdGhpcy5zY3JvbGxZIDogMTtcclxuICAgIH1cclxuICAgIHRoaXMuc2Nyb2xsID0ge3g6ICczMDBweCcsIHk6IHRoaXMuc2Nyb2xsWSAqIHAgKyAncHgnIH07XHJcbiAgfVxyXG5cclxuICBzY3JvbGxSaWdodCgpOiB2b2lkIHtcclxuICAgIHRoaXMubGVnZW5kQ29udGVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFRvKHsgbGVmdDogKHRoaXMubGVnZW5kQ29udGVudC5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnQgLSA0MCksIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuICB9XHJcblxyXG4gIHNjcm9sbExlZnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmxlZ2VuZENvbnRlbnQubmF0aXZlRWxlbWVudC5zY3JvbGxUbyh7IGxlZnQ6ICh0aGlzLmxlZ2VuZENvbnRlbnQubmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0ICsgNDApLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgfVxyXG5cclxuICBkcmF3Q2FudmFzKCk6IHZvaWQge1xyXG4gICAgY29uc3QgaXRlbSA9IHRoaXMuZGF0YS5maW5kKHggPT4geC5rZXkgPT09IHRoaXMuc2VsZWN0ZWRJdGVtKTtcclxuICAgIGlmICh0aGlzLmNhbnZhc1JlZiAmJiBpdGVtKSB7XHJcbiAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuY2FudmFzUmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcblxyXG4gICAgICBjYW52YXMud2lkdGggPSB0aGlzLmNoYXJ0V2lkdGggKiB0aGlzLnA7XHJcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLmNoYXJ0V2lkdGggKiB0aGlzLnA7XHJcbiAgICAgIC8vXHJcbiAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgICAvLyB0b3RhbHNcclxuICAgICAgY29uc3QgdG90YWxTaG93ID0gdGhpcy5nZXRUb3RhbENhdGVnKGl0ZW0uZGF0YSk7XHJcbiAgICAgIGNvbnN0IHRvdGFsID0gdGhpcy5kYXRhLm1hcCh4ID0+IHRoaXMuZ2V0VG90YWxDYXRlZyh4LmRhdGEpKS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKTtcclxuICAgICAgbGV0IHN0YXJ0QW5nbGUgPSA0O1xyXG5cclxuICAgICAgLy8gZHJhdyBkYXRhXHJcbiAgICAgIGZvciAoY29uc3QgY2F0ZWcgb2YgdGhpcy5kYXRhKSB7XHJcbiAgICAgICAgY29uc3QgdG90YWxHID0gIHRoaXMuZ2V0VG90YWxDYXRlZyhjYXRlZy5kYXRhKTtcclxuICAgICAgICBjb25zdCBzbGljZUFuZ2xlID0gMiAqIE1hdGguUEkgKiB0b3RhbEcgLyB0b3RhbDtcclxuICAgICAgICBpZiAoc2xpY2VBbmdsZSA+IDAgKSB7XHJcbiAgICAgICAgICB0aGlzLmRyYXdQaWVTbGljZShcclxuICAgICAgICAgICAgY3R4LFxyXG4gICAgICAgICAgICBjYW52YXMud2lkdGggLyAyLFxyXG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0IC8gMixcclxuICAgICAgICAgICAgTWF0aC5taW4oY2FudmFzLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIpIC0gKCh0aGlzLnNlbGVjdGVkSXRlbSA9PT0gY2F0ZWcua2V5KSA/IDEwICogdGhpcy5wIDogNiAqIHRoaXMucCksXHJcbiAgICAgICAgICAgIHN0YXJ0QW5nbGUsXHJcbiAgICAgICAgICAgIHN0YXJ0QW5nbGUgKyBzbGljZUFuZ2xlIC0gMC4wNSxcclxuICAgICAgICAgICAgY2F0ZWcuY29sb3IsXHJcbiAgICAgICAgICAgICh0aGlzLnNlbGVjdGVkSXRlbSA9PT0gY2F0ZWcua2V5KSA/IDE1ICogdGhpcy5wIDogNyAqIHRoaXMucFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHN0YXJ0QW5nbGUgKz0gc2xpY2VBbmdsZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy8gZHJhdyB2YWx1ZVxyXG4gICAgICBjdHguZm9udCA9IHRoaXMuZm9udENoYXJ0TnVtYmVyICogdGhpcy5wICsgJ3B4IFJvYm90by1SZWd1bGFyICc7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAnIzNiM2Y0Nic7XHJcbiAgICAgIGN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcclxuICAgICAgY3R4LmZpbGxUZXh0KCAnJyArIHRvdGFsU2hvdywgY2FudmFzLndpZHRoIC8gMiwgY2FudmFzLndpZHRoIC8gMiArIDUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJhd1BpZVNsaWNlKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBjZW50ZXJYOiBudW1iZXIsIGNlbnRlclk6IG51bWJlcixcclxuICAgICAgICAgICAgICAgcmFkaXVzOiBudW1iZXIsIHN0YXJ0QW5nbGU6IG51bWJlciwgZW5kQW5nbGU6IG51bWJlciwgY29sb3I6IGFueSwgbGluZVdpZHRoOiBudW1iZXIgKSB7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHguYXJjKGNlbnRlclgsIGNlbnRlclksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUpO1xyXG4gICAgY3R4LmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcclxuICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gICAgY3R4LnN0cm9rZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VG90YWxDYXRlZyhkYXRhOiBhbnlbXSk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gZGF0YS5tYXAoeCA9PiB4LnZhbHVlKS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKTtcclxuICB9XHJcblxyXG4gIHNldENvbmZpZ3VyYXRpb24oKTogdm9pZCB7XHJcbiAgICAvL1xyXG4gICAgdGhpcy5jb25maWd1cmF0aW9uRXhwYW5kYWJsZVJvd3MgPSB7XHJcbiAgICAgIGZpZWxkczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNlbGRUeXBlOiAzLFxyXG4gICAgICAgICAgZGlzcGxheTogJycsXHJcbiAgICAgICAgICBwcm9wZXJ0eTogJ2NvbG9yJyxcclxuICAgICAgICAgIHdpZHRoOiAnNjBweCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjZWxkVHlwZTogMCxcclxuICAgICAgICAgIGRpc3BsYXk6IHRoaXMuY29sdW1uc0hlYWRlclswXSxcclxuICAgICAgICAgIHByb3BlcnR5OiAnbmFtZScsXHJcbiAgICAgICAgICBlZGl0VGVtcGxhdGU6IDMsXHJcbiAgICAgICAgICB3aWR0aDogdGhpcy5jb2wyICogdGhpcy5wICsgJ3B4JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNlbGRUeXBlOiAwLFxyXG4gICAgICAgICAgZGlzcGxheTogdGhpcy5jb2x1bW5zSGVhZGVyWzFdLFxyXG4gICAgICAgICAgcHJvcGVydHk6ICd2YWx1ZScsXHJcbiAgICAgICAgICB3aWR0aDogdGhpcy5jb2wzICogdGhpcy5wICsgJ3B4JyxcclxuICAgICAgICAgIGVkaXRUZW1wbGF0ZTogMixcclxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgZmllbGRJZDogJ2tleScsXHJcbiAgICAgIGZpZWxkUmF0ZTogJ2ZhdidcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzZXREYXRhKCk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgIGNvbnN0IHRlbXA6IGFueVtdID0gW107XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZEl0ZW0pIHtcclxuICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YS5maW5kKHggPT4geC5rZXkgPT09IHRoaXMuc2VsZWN0ZWRJdGVtKTtcclxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEuZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IG5ld0l0ZW0gPSB7XHJcbiAgICAgICAgICBrZXk6IGl0ZW0ua2V5LFxyXG4gICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxyXG4gICAgICAgICAgY29sb3I6ICB7XHJcbiAgICAgICAgICAgIHJlZjogdGhpcy5jb2x1bW5UZW1wbGF0ZSxcclxuICAgICAgICAgICAgY29udGV4dDoge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBkYXRhLmNvbG9yXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB2YWx1ZTogaXRlbS52YWx1ZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiB0aGlzLmdldENoaWxkcmVuKGl0ZW0ucm93cylcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRlbXAucHVzaChuZXdJdGVtKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmRhdGFUYWJsZSA9IHRlbXA7XHJcbiAgICB9XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICB9LCAwKTtcclxuICB9XHJcbiAgZ2V0Q2hpbGRyZW4oaXRlbXM6IGFueVtdKTogYW55W10ge1xyXG4gICAgY29uc3Qgb3V0cHV0OiBhbnlbXSA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XHJcbiAgICAgIG91dHB1dC5wdXNoKHtcclxuICAgICAgICBrZXk6IGl0ZW0ua2V5LFxyXG4gICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcclxuICAgICAgICBjb2xvcjoge30sXHJcbiAgICAgICAgdmFsdWU6ICcnXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dHB1dDtcclxuICB9XHJcblxyXG4gIG1lbnVDbGljayh0eXBlOiBXaWRnZXRBY3Rpb25UeXBlKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsaWNrTWVudS5lbWl0KHR5cGUpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlRGF0YShrZXk6IHN0cmluZykge1xyXG4gICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBrZXk7XHJcbiAgICB0aGlzLnNldERhdGEoKTtcclxuICAgIHRoaXMuZHJhd0NhbnZhcygpO1xyXG4gIH1cclxuXHJcbiAgc2hvd0Fycm93QnRucygpOiB2b2lkIHtcclxuICAgIGNvbnN0IHRleHQgPSB0aGlzLmRhdGEubWFwKGkgPT4gaS5uYW1lICsgJ3NwYWNlJyk7XHJcbiAgICBjb25zdCB0c2l6ZSA9IHRoaXMudXRpbFNlcnZpY2UuZ2V0X3RleF9zaXplKHRleHQsICcxMnB4IFJvYm90by1SZWd1bGFyJyk7XHJcbiAgICB0aGlzLmRpc3BsYXlBcnJvd0J0bnMgPSB0c2l6ZS53aWR0aCA+IHRoaXMudmlld1swXSAtIDE1O1xyXG4gIH1cclxuXHJcbn1cclxuIl19