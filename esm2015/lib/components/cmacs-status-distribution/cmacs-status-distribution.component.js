/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input, ViewChild, TemplateRef, ElementRef, Renderer2 } from '@angular/core';
import { UtilService } from '../core/services/util.service';
export class CmacsStatusDistributionComponent {
    /**
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?} util
     */
    constructor(renderer, elementRef, util) {
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
    /**
     * @return {?}
     */
    setScroll() {
        if (this.view && this.view.length === 2) {
            this.scrollY = this.view[1] - 100;
        }
        this.scroll = { x: '300px', y: this.scrollY + 'px' };
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
     * @param {?} type
     * @return {?}
     */
    menuClick(type) {
        this.clickMenu.emit(type);
    }
    /**
     * @return {?}
     */
    setConfiguration() {
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
        /** @type {?} */
        const temp = [];
        for (const item of this.data) {
            /** @type {?} */
            const newItem = {
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
            for (let i = 0; i < item.rows.length; i++) {
                newItem.children.push({
                    key: item.key + '-' + i,
                    name: item.rows[i],
                    color: {},
                    value: ''
                });
            }
            temp.push(newItem);
        }
        this.dataTable = temp;
    }
    /**
     * @return {?}
     */
    drawCanvas() {
        /** @type {?} */
        const canvas = (/** @type {?} */ (document.getElementById('canvas-' + this.id)));
        canvas.height = 40;
        canvas.width = this.view[0];
        if (canvas.getContext) {
            /** @type {?} */
            const context = canvas.getContext('2d');
            /** @type {?} */
            const total = this.data.map((/**
             * @param {?} x
             * @return {?}
             */
            x => x.value)).reduce((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => a + b), 0);
            /** @type {?} */
            let move = 0;
            for (const item of this.data) {
                if (item.value > 0) {
                    context.beginPath();
                    context.moveTo(move, 1);
                    context.lineWidth = 10;
                    /** @type {?} */
                    const val = item.value;
                    move += val / total * canvas.width;
                    context.strokeStyle = item.color;
                    context.lineTo(move - 5, 1);
                    context.stroke();
                }
            }
        }
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
        const tsize = this.util.get_tex_size(text, '12px Roboto-Regular');
        this.displayArrowBtns = tsize.width > this.view[0] - 15;
    }
    /**
     * @return {?}
     */
    getDataTable() {
        return this.dataTable;
    }
    /**
     * @return {?}
     */
    getConfiguration() {
        return this.configurationExpandableRows;
    }
    /**
     * @return {?}
     */
    getChartImage() {
        /** @type {?} */
        const canvas = (/** @type {?} */ (document.getElementById('canvas-' + this.id)));
        return canvas.toDataURL('image/png');
    }
}
CmacsStatusDistributionComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmacs-status-distribution',
                template: "<div class=\"sd-content\" *ngIf=\"showChart\">\r\n  <!-- Legend -->\r\n  <div nz-row class=\"legend-row\">\r\n    <span class=\"legend-left-icon\" (click)=\"scrollRight()\" *ngIf=\"displayArrowBtns\">\r\n      <i class=\"iconArrowLarge-Chevron-Left\"></i>\r\n    </span>\r\n    <div #legendContent class=\"legend-data\">\r\n      <span  class=\"legend-column\" *ngFor=\"let item of data\">\r\n        <span [style.background-color]=\"item.color\" class=\"legend-bar\"></span>\r\n        <span class=\"legend-text\">{{item.name}}</span>\r\n      </span>\r\n    </div>\r\n    <span (click)=\"scrollLeft()\" class=\"legend-right-icon\" *ngIf=\"displayArrowBtns\">\r\n      <i class=\"iconArrowLarge-Chevron-Right\"></i>\r\n    </span>\r\n  </div>\r\n  <!-- Chart -->\r\n  <div nz-row class=\"char-content\">\r\n    <canvas id=\"canvas-{{id}}\" class=\"chart-canvas\"></canvas>\r\n  </div>\r\n  <div nz-row class=\"chart-data-table\">\r\n    <cmacs-compact-table *ngIf=\"dataTable\" [data]=\"dataTable\" [(config)]=\"configurationExpandableRows\" [indentSize]=\"40\"\r\n      [logs]=\"true\" [expandable]=\"true\" [scroll]=\"scroll\" [frontPagination]=\"false\" [showPagination]=\"false\">\r\n    </cmacs-compact-table>\r\n  </div>\r\n</div>\r\n<ng-template #columnTemplate let-color=\"color\">\r\n  <div class=\"chart-dot\" [style.background-color]=\"color\"></div>\r\n</ng-template>",
                styles: [".legend-column{display:table-cell;float:left;font-family:Roboto-Regular;font-size:12px;color:#656c79;white-space:nowrap;padding-top:8px}.legend-left-icon,.legend-right-icon{top:5px;font-size:19px;padding-left:5px;padding-right:5px;cursor:pointer}.legend-left-icon{position:absolute;z-index:2;left:0}.legend-right-icon{position:absolute;right:0}.legend-text{padding-left:6px;padding-right:20px}.legend-column:last-child .legend-text{padding-right:0}.legend-bar{width:4px;height:10px;border-radius:5px;display:inline-block}.legend-row{width:100%;margin-bottom:30px;display:-webkit-box;display:flex;place-content:flex-end}.chart-content{text-align:center;margin-bottom:30px}.legend-data{display:-webkit-box;display:flex;overflow:hidden;margin-right:28px;text-align:right;margin-left:25px}.chart-dot{width:9px;height:9px;border-radius:5px;display:inline-block;margin-left:13px}::ng-deep .chart-data-table cmacs-compact-table .cmacs-compact-table-input-number-icon-view{display:none}::ng-deep .chart-data-table cmacs-compact-table .cmacs-compact-table-header-logs,::ng-deep .chart-data-table cmacs-compact-table .cmacs-compact-table-header-logs .ant-table-row-expand-icon,::ng-deep .chart-data-table cmacs-compact-table .cmacs-compact-table-logs-header-th-font,::ng-deep .chart-data-table cmacs-compact-table .cmacs-compact-table-logs-header-th-font:hover{background-color:#fff!important}::ng-deep .chart-data-table .cmacs-compact-table .ant-table-tbody>tr:not(.cmacs-compact-table-header-logs)>td,::ng-deep .chart-data-table .cmacs-compact-table .ant-table-thead>tr>th{background-color:#f6f7fb!important}"]
            }] }
];
/** @nocollapse */
CmacsStatusDistributionComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: UtilService }
];
CmacsStatusDistributionComponent.propDecorators = {
    columnTemplate: [{ type: ViewChild, args: ['columnTemplate', { read: TemplateRef },] }],
    legendContent: [{ type: ViewChild, args: ['legendContent', { read: ElementRef },] }],
    clickMenu: [{ type: Output }],
    view: [{ type: Input }],
    data: [{ type: Input }],
    columnsHeader: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc3RhdHVzLWRpc3RyaWJ1dGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXN0YXR1cy1kaXN0cmlidXRpb24vY21hY3Mtc3RhdHVzLWRpc3RyaWJ1dGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWlCLFNBQVMsRUFBRSxXQUFXLEVBQWEsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4SixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFRNUQsTUFBTSxPQUFPLGdDQUFnQzs7Ozs7O0lBNkIzQyxZQUNVLFFBQW1CLEVBQ25CLFVBQXNCLEVBQ3RCLElBQWlCO1FBRmpCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixTQUFJLEdBQUosSUFBSSxDQUFhO1FBM0JqQixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUtyQyxrQkFBYSxHQUFhLEVBQUUsQ0FBQztRQUV0QyxxQkFBZ0IsR0FBRyxJQUFJLENBQUM7O1FBR3hCLFNBQUksR0FBRyxHQUFHLENBQUM7UUFDWCxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsYUFBUSxHQUFHLEdBQUcsQ0FBQztRQUNmLGVBQVUsR0FBRyxHQUFHLENBQUM7UUFDakIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixZQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ2QsTUFBQyxHQUFHLENBQUMsQ0FBQztRQUNOLFdBQU0sR0FBRyxFQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUM7UUFZN0MsSUFBSSxDQUFDLEVB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QUEyQjtnQkFDckMsZzNDQUF5RDs7YUFFMUQ7Ozs7WUFSc0gsU0FBUztZQUFyQixVQUFVO1lBQzVHLFdBQVc7Ozs2QkFVakIsU0FBUyxTQUFDLGdCQUFnQixFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTs0QkFDakQsU0FBUyxTQUFDLGVBQWUsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7d0JBRS9DLE1BQU07bUJBR04sS0FBSzttQkFDTCxLQUFLOzRCQUNMLEtBQUs7Ozs7SUFSTiwwREFBb0Y7O0lBQ3BGLHlEQUF3Rjs7SUFFeEYscURBQThDOztJQUc5QyxnREFBeUI7O0lBQ3pCLGdEQUFzQjs7SUFDdEIseURBQXNDOztJQUV0Qyw0REFBd0I7O0lBR3hCLGdEQUFXOztJQUNYLGdEQUFVOztJQUNWLG9EQUFlOztJQUNmLHNEQUFpQjs7SUFDakIscURBQWtCOztJQUNsQixtREFBYzs7SUFDZCw2Q0FBTTs7SUFDTixrREFBK0M7O0lBRy9DLDhDQUFHOztJQUNILHFEQUFpQjs7SUFDakIsdUVBQWlDOzs7OztJQUcvQixvREFBMkI7Ozs7O0lBQzNCLHNEQUE4Qjs7Ozs7SUFDOUIsZ0RBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkLCBUZW1wbGF0ZVJlZiwgT25DaGFuZ2VzLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVXRpbFNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3V0aWwuc2VydmljZSc7XHJcbmltcG9ydCB7IFdpZGdldEFjdGlvblR5cGUgfSBmcm9tICcuLi9jb3JlL2VudW1zL3dpZGdldC1hY3Rpb24tdHlwZS5lbnVtJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3Mtc3RhdHVzLWRpc3RyaWJ1dGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXN0YXR1cy1kaXN0cmlidXRpb24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXN0YXR1cy1kaXN0cmlidXRpb24uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1N0YXR1c0Rpc3RyaWJ1dGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcclxuXHJcbiAgQFZpZXdDaGlsZCgnY29sdW1uVGVtcGxhdGUnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pIGNvbHVtblRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7fT47XHJcbiAgQFZpZXdDaGlsZCgnbGVnZW5kQ29udGVudCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBwdWJsaWMgbGVnZW5kQ29udGVudDogRWxlbWVudFJlZjxhbnk+O1xyXG5cclxuICBAT3V0cHV0KCkgY2xpY2tNZW51ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIC8vIGNvbnRlbnRcclxuICBASW5wdXQoKSB2aWV3ITogbnVtYmVyW107XHJcbiAgQElucHV0KCkgZGF0YSE6IGFueVtdO1xyXG4gIEBJbnB1dCgpIGNvbHVtbnNIZWFkZXI6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIGRpc3BsYXlBcnJvd0J0bnMgPSB0cnVlO1xyXG5cclxuICAvLyBjaGFydFxyXG4gIGNvbDIgPSAxNTA7XHJcbiAgY29sMyA9IDcwO1xyXG4gIG1pbldpZHRoID0gMzAwO1xyXG4gIGNoYXJ0V2lkdGggPSAzMDA7XHJcbiAgc2hvd0NoYXJ0ID0gZmFsc2U7XHJcbiAgc2Nyb2xsWSA9IDEwMDtcclxuICBwID0gMTtcclxuICBzY3JvbGwgPSB7eDogJzMwMHB4JywgeTogdGhpcy5zY3JvbGxZICsgJ3B4JyB9O1xyXG5cclxuICAvL1xyXG4gIGlkO1xyXG4gIGRhdGFUYWJsZTogYW55W107XHJcbiAgY29uZmlndXJhdGlvbkV4cGFuZGFibGVSb3dzOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSB1dGlsOiBVdGlsU2VydmljZVxyXG4gICkge1xyXG4gICAgdGhpcy5pZCA9IHV0aWwudXVpZHY0KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgdGhpcy5zZXRTY3JvbGwoKTtcclxuICAgIC8vXHJcbiAgICB0aGlzLnAgPSAxO1xyXG4gICAgaWYgKHRoaXMudmlldyAmJiB0aGlzLnZpZXcubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgIHRoaXMucCA9IHRoaXMudmlld1swXSA+IHRoaXMubWluV2lkdGggPyB0aGlzLnZpZXdbMF0gLyB0aGlzLm1pbldpZHRoIDogMTtcclxuICAgICAgaWYgKHRoaXMucmVuZGVyZXIpIHtcclxuICAgICAgICB0aGlzLnJlc2l6ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvL1xyXG4gICAgdGhpcy5zaG93Q2hhcnQgPSBmYWxzZTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5kcmF3Q2FudmFzKCk7XHJcbiAgICAgIHRoaXMuc2V0Q29uZmlndXJhdGlvbigpO1xyXG4gICAgICB0aGlzLnNldERhdGEoKTtcclxuICAgIH0sIDApO1xyXG4gICAgdGhpcy5zaG93Q2hhcnQgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuc2hvd0Fycm93QnRucygpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5yZXNpemUoKTtcclxuICB9XHJcblxyXG4gIHJlc2l6ZSgpIHtcclxuICAgIGNvbnN0IHdpZHRoID0gdGhpcy52aWV3WzBdO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgYCR7d2lkdGh9cHhgKTtcclxuICB9XHJcblxyXG4gIHNldFNjcm9sbCgpIHtcclxuICAgIGlmICh0aGlzLnZpZXcgJiYgdGhpcy52aWV3Lmxlbmd0aCA9PT0gMikge1xyXG4gICAgICB0aGlzLnNjcm9sbFkgPSB0aGlzLnZpZXdbMV0gLSAxMDA7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNjcm9sbCA9IHt4OiAnMzAwcHgnLCB5OiB0aGlzLnNjcm9sbFkgKyAncHgnIH07XHJcbiAgfVxyXG5cclxuICBzY3JvbGxSaWdodCgpOiB2b2lkIHtcclxuICAgIHRoaXMubGVnZW5kQ29udGVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFRvKHsgbGVmdDogKHRoaXMubGVnZW5kQ29udGVudC5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnQgLSA0MCksIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuICB9XHJcblxyXG4gIHNjcm9sbExlZnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmxlZ2VuZENvbnRlbnQubmF0aXZlRWxlbWVudC5zY3JvbGxUbyh7IGxlZnQ6ICh0aGlzLmxlZ2VuZENvbnRlbnQubmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0ICsgNDApLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgfVxyXG5cclxuICBtZW51Q2xpY2sodHlwZTogV2lkZ2V0QWN0aW9uVHlwZSk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGlja01lbnUuZW1pdCh0eXBlKTtcclxuICB9XHJcblxyXG4gIHNldENvbmZpZ3VyYXRpb24oKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb25FeHBhbmRhYmxlUm93cyA9IHtcclxuICAgICAgZmllbGRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY2VsZFR5cGU6IDMsXHJcbiAgICAgICAgICBkaXNwbGF5OiAnJyxcclxuICAgICAgICAgIHByb3BlcnR5OiAnY29sb3InLFxyXG4gICAgICAgICAgd2lkdGg6ICc2MHB4JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNlbGRUeXBlOiAwLFxyXG4gICAgICAgICAgZGlzcGxheTogdGhpcy5jb2x1bW5zSGVhZGVyWzBdLFxyXG4gICAgICAgICAgcHJvcGVydHk6ICduYW1lJyxcclxuICAgICAgICAgIGVkaXRUZW1wbGF0ZTogMyxcclxuICAgICAgICAgIHdpZHRoOiB0aGlzLmNvbDIgKiB0aGlzLnAgKyAncHgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY2VsZFR5cGU6IDAsXHJcbiAgICAgICAgICBkaXNwbGF5OiB0aGlzLmNvbHVtbnNIZWFkZXJbMV0sXHJcbiAgICAgICAgICBwcm9wZXJ0eTogJ3ZhbHVlJyxcclxuICAgICAgICAgIHdpZHRoOiB0aGlzLmNvbDMgKiB0aGlzLnAgKyAncHgnLFxyXG4gICAgICAgICAgZWRpdFRlbXBsYXRlOiAyLFxyXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICBmaWVsZElkOiAna2V5JyxcclxuICAgICAgZmllbGRSYXRlOiAnZmF2J1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHNldERhdGEoKTogdm9pZCB7XHJcbiAgICBjb25zdCB0ZW1wOiBhbnlbXSA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuZGF0YSkge1xyXG4gICAgICBjb25zdCBuZXdJdGVtID0ge1xyXG4gICAgICAgIGtleTogaXRlbS5rZXksXHJcbiAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxyXG4gICAgICAgIGNvbG9yOiB7XHJcbiAgICAgICAgICByZWY6IHRoaXMuY29sdW1uVGVtcGxhdGUsXHJcbiAgICAgICAgICBjb250ZXh0OiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBpdGVtLmNvbG9yXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWx1ZTogaXRlbS52YWx1ZSxcclxuICAgICAgICBjaGlsZHJlbjogW11cclxuICAgICAgfTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtLnJvd3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBuZXdJdGVtLmNoaWxkcmVuLnB1c2goe1xyXG4gICAgICAgICAga2V5OiBpdGVtLmtleSArICctJyArIGksXHJcbiAgICAgICAgICBuYW1lOiBpdGVtLnJvd3NbaV0sXHJcbiAgICAgICAgICBjb2xvcjogeyB9LFxyXG4gICAgICAgICAgdmFsdWU6ICcnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgdGVtcC5wdXNoKG5ld0l0ZW0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5kYXRhVGFibGUgPSB0ZW1wO1xyXG4gIH1cclxuXHJcbiAgZHJhd0NhbnZhcygpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMtJyArIHRoaXMuaWQpICBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSA0MDtcclxuICAgIGNhbnZhcy53aWR0aCA9IHRoaXMudmlld1swXTtcclxuICAgIGlmIChjYW52YXMuZ2V0Q29udGV4dCkge1xyXG4gICAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgIGNvbnN0IHRvdGFsID0gdGhpcy5kYXRhLm1hcCh4ID0+IHgudmFsdWUpLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApO1xyXG4gICAgICBsZXQgbW92ZSA9IDA7XHJcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLmRhdGEpIHtcclxuICAgICAgICBpZiAoaXRlbS52YWx1ZSA+IDApIHtcclxuICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICBjb250ZXh0Lm1vdmVUbyhtb3ZlLCAxKTtcclxuICAgICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gMTA7XHJcbiAgICAgICAgICBjb25zdCB2YWwgPSBpdGVtLnZhbHVlO1xyXG4gICAgICAgICAgbW92ZSArPSB2YWwgLyB0b3RhbCAqIGNhbnZhcy53aWR0aDtcclxuICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBpdGVtLmNvbG9yO1xyXG4gICAgICAgICAgY29udGV4dC5saW5lVG8obW92ZSAtIDUsIDEpO1xyXG4gICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcclxuICAgICAgICB9IFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzaG93QXJyb3dCdG5zKCk6IHZvaWQge1xyXG4gICAgY29uc3QgdGV4dCA9IHRoaXMuZGF0YS5tYXAoaSA9PiBpLm5hbWUgKyAnc3BhY2UnKTtcclxuICAgIGNvbnN0IHRzaXplID0gdGhpcy51dGlsLmdldF90ZXhfc2l6ZSh0ZXh0LCAnMTJweCBSb2JvdG8tUmVndWxhcicpO1xyXG4gICAgdGhpcy5kaXNwbGF5QXJyb3dCdG5zID0gdHNpemUud2lkdGggPiB0aGlzLnZpZXdbMF0gLSAxNTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXREYXRhVGFibGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRhVGFibGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Q29uZmlndXJhdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25FeHBhbmRhYmxlUm93cztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRDaGFydEltYWdlKCkge1xyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcy0nICsgdGhpcy5pZCkgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICByZXR1cm4gY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==