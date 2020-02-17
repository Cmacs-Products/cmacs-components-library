/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input, ViewChild, TemplateRef } from '@angular/core';
import { UtilService } from '../core/services/util.service';
export class CmacsStatusDistributionComponent {
    /**
     * @param {?} util
     */
    constructor(util) {
        this.util = util;
        this.clickMenu = new EventEmitter();
        this.columnsHeader = [];
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
    ngAfterViewInit() {
        this.drawCanvas();
        this.setConfiguration();
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.setData();
        }), 0);
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
                    width: '20%',
                },
                {
                    celdType: 0,
                    display: this.columnsHeader[0],
                    property: 'name',
                    editTemplate: 3,
                    width: '60%',
                },
                {
                    celdType: 0,
                    display: this.columnsHeader[1],
                    property: 'value',
                    width: '20%',
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
        canvas.width -= 7;
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
CmacsStatusDistributionComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmacs-status-distribution',
                template: "<div class=\"sd-content\">\r\n  <!-- Legend -->\r\n  <div nz-row class=\"legend-row\">\r\n    <span class=\"legend-column\" *ngFor=\"let item of data\">\r\n      <span [style.background-color]=\"item.color\" class=\"legend-bar\"></span>\r\n      <span class=\"legend-text\">{{item.name}}</span>\r\n    </span>\r\n  </div>\r\n  <!-- Chart -->\r\n  <div nz-row class=\"char-content\">\r\n    <canvas id=\"canvas-{{id}}\" class=\"chart-canvas\"></canvas>\r\n  </div>\r\n  <div nz-row>\r\n    <cmacs-compact-table *ngIf=\"dataTable\" [data]=\"dataTable\" [(config)]=\"configurationExpandableRows\" [indentSize]=\"40\"\r\n      [logs]=\"true\" [expandable]=\"true\" [scroll]=\"{ y: '200px' }\" [frontPagination]=\"false\" [showPagination]=\"false\">\r\n    </cmacs-compact-table>\r\n  </div>\r\n</div>\r\n<ng-template #columnTemplate let-color=\"color\">\r\n  <div class=\"chart-dot\" [style.background-color]=\"color\"></div>\r\n</ng-template>",
                styles: [".legend-bar{width:4px;height:10px;border-radius:5px;display:inline-block}.legend-row{width:100%;margin-bottom:30px}.legend-column{display:table-cell;float:left;font-family:Roboto;font-size:12px;color:#656c79}.legend-text{padding-left:6px;padding-right:20px}.chart-content{text-align:center}.sd-content{margin:0 12px}.chart-dot{width:9px;height:9px;border-radius:5px;display:inline-block}"]
            }] }
];
/** @nocollapse */
CmacsStatusDistributionComponent.ctorParameters = () => [
    { type: UtilService }
];
CmacsStatusDistributionComponent.propDecorators = {
    columnTemplate: [{ type: ViewChild, args: ['columnTemplate', { read: TemplateRef },] }],
    clickMenu: [{ type: Output }],
    data: [{ type: Input }],
    columnsHeader: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CmacsStatusDistributionComponent.prototype.columnTemplate;
    /** @type {?} */
    CmacsStatusDistributionComponent.prototype.clickMenu;
    /** @type {?} */
    CmacsStatusDistributionComponent.prototype.data;
    /** @type {?} */
    CmacsStatusDistributionComponent.prototype.columnsHeader;
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
    CmacsStatusDistributionComponent.prototype.util;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc3RhdHVzLWRpc3RyaWJ1dGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXN0YXR1cy1kaXN0cmlidXRpb24vY21hY3Mtc3RhdHVzLWRpc3RyaWJ1dGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWlCLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEgsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBUTVELE1BQU0sT0FBTyxnQ0FBZ0M7Ozs7SUFjM0MsWUFDVSxJQUFpQjtRQUFqQixTQUFJLEdBQUosSUFBSSxDQUFhO1FBWGpCLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBSXJDLGtCQUFhLEdBQWEsRUFBRSxDQUFDO1FBU3BDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pCLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLElBQXNCO1FBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsMkJBQTJCLEdBQUc7WUFDakMsTUFBTSxFQUFFO2dCQUNO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QUFJLENBQUMsS0FBSztnQkFDdEIsSUFBSSxJQUFJLEdBQUcsR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDbkMsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUNqQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNsQjtTQUNGO0lBQ0gsQ0FBQzs7O1lBckhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyx1N0JBQXlEOzthQUUxRDs7OztZQVBRLFdBQVc7Ozs2QkFVakIsU0FBUyxTQUFDLGdCQUFnQixFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTt3QkFFakQsTUFBTTttQkFHTixLQUFLOzRCQUNMLEtBQUs7Ozs7SUFOTiwwREFBb0Y7O0lBRXBGLHFEQUE4Qzs7SUFHOUMsZ0RBQXNCOztJQUN0Qix5REFBc0M7O0lBRXRDLDhDQUFHOztJQUNILHFEQUFpQjs7SUFDakIsdUVBQWlDOzs7OztJQUcvQixnREFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFV0aWxTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy91dGlsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBXaWRnZXRBY3Rpb25UeXBlIH0gZnJvbSAnLi4vY29yZS9lbnVtcy93aWRnZXQtYWN0aW9uLXR5cGUuZW51bSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLXN0YXR1cy1kaXN0cmlidXRpb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1zdGF0dXMtZGlzdHJpYnV0aW9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1zdGF0dXMtZGlzdHJpYnV0aW9uLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NTdGF0dXNEaXN0cmlidXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBAVmlld0NoaWxkKCdjb2x1bW5UZW1wbGF0ZScsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgY29sdW1uVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHt9PjtcclxuXHJcbiAgQE91dHB1dCgpIGNsaWNrTWVudSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAvLyBjb250ZW50XHJcbiAgQElucHV0KCkgZGF0YSE6IGFueVtdO1xyXG4gIEBJbnB1dCgpIGNvbHVtbnNIZWFkZXI6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIGlkO1xyXG4gIGRhdGFUYWJsZTogYW55W107XHJcbiAgY29uZmlndXJhdGlvbkV4cGFuZGFibGVSb3dzOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSB1dGlsOiBVdGlsU2VydmljZVxyXG4gICkge1xyXG4gICAgdGhpcy5pZCA9IHV0aWwudXVpZHY0KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuZHJhd0NhbnZhcygpO1xyXG4gICAgdGhpcy5zZXRDb25maWd1cmF0aW9uKCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5zZXREYXRhKCk7XHJcbiAgICB9LCAwKTtcclxuICB9XHJcblxyXG4gIG1lbnVDbGljayh0eXBlOiBXaWRnZXRBY3Rpb25UeXBlKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsaWNrTWVudS5lbWl0KHR5cGUpO1xyXG4gIH1cclxuXHJcbiAgc2V0Q29uZmlndXJhdGlvbigpOiB2b2lkIHtcclxuICAgIHRoaXMuY29uZmlndXJhdGlvbkV4cGFuZGFibGVSb3dzID0ge1xyXG4gICAgICBmaWVsZHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjZWxkVHlwZTogMyxcclxuICAgICAgICAgIGRpc3BsYXk6ICcnLFxyXG4gICAgICAgICAgcHJvcGVydHk6ICdjb2xvcicsXHJcbiAgICAgICAgICB3aWR0aDogJzIwJScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjZWxkVHlwZTogMCxcclxuICAgICAgICAgIGRpc3BsYXk6IHRoaXMuY29sdW1uc0hlYWRlclswXSxcclxuICAgICAgICAgIHByb3BlcnR5OiAnbmFtZScsXHJcbiAgICAgICAgICBlZGl0VGVtcGxhdGU6IDMsXHJcbiAgICAgICAgICB3aWR0aDogJzYwJScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjZWxkVHlwZTogMCxcclxuICAgICAgICAgIGRpc3BsYXk6IHRoaXMuY29sdW1uc0hlYWRlclsxXSxcclxuICAgICAgICAgIHByb3BlcnR5OiAndmFsdWUnLFxyXG4gICAgICAgICAgd2lkdGg6ICcyMCUnLFxyXG4gICAgICAgICAgZWRpdFRlbXBsYXRlOiAyLFxyXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICBmaWVsZElkOiAna2V5JyxcclxuICAgICAgZmllbGRSYXRlOiAnZmF2J1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHNldERhdGEoKTogdm9pZCB7XHJcbiAgICBjb25zdCB0ZW1wOiBhbnlbXSA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuZGF0YSkge1xyXG4gICAgICBjb25zdCBuZXdJdGVtID0ge1xyXG4gICAgICAgIGtleTogaXRlbS5rZXksXHJcbiAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxyXG4gICAgICAgIGNvbG9yOiB7XHJcbiAgICAgICAgICByZWY6IHRoaXMuY29sdW1uVGVtcGxhdGUsXHJcbiAgICAgICAgICBjb250ZXh0OiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBpdGVtLmNvbG9yXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWx1ZTogaXRlbS52YWx1ZSxcclxuICAgICAgICBjaGlsZHJlbjogW11cclxuICAgICAgfTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtLnJvd3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBuZXdJdGVtLmNoaWxkcmVuLnB1c2goe1xyXG4gICAgICAgICAga2V5OiBpdGVtLmtleSArICctJyArIGksXHJcbiAgICAgICAgICBuYW1lOiBpdGVtLnJvd3NbaV0sXHJcbiAgICAgICAgICBjb2xvcjogeyB9LFxyXG4gICAgICAgICAgdmFsdWU6ICcnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgdGVtcC5wdXNoKG5ld0l0ZW0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5kYXRhVGFibGUgPSB0ZW1wO1xyXG4gIH1cclxuXHJcbiAgZHJhd0NhbnZhcygpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMtJyArIHRoaXMuaWQpICBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSA0MDtcclxuICAgIGNhbnZhcy53aWR0aCAtPSA3O1xyXG4gICAgaWYgKGNhbnZhcy5nZXRDb250ZXh0KSB7XHJcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgY29uc3QgdG90YWwgPSB0aGlzLmRhdGEubWFwKHggPT4geC52YWx1ZSkucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCk7XHJcbiAgICAgIGxldCBtb3ZlID0gMDtcclxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuZGF0YSkge1xyXG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY29udGV4dC5tb3ZlVG8obW92ZSwgMSk7XHJcbiAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSAxMDtcclxuICAgICAgICBjb25zdCB2YWwgPSBpdGVtLnZhbHVlO1xyXG4gICAgICAgIG1vdmUgKz0gdmFsIC8gdG90YWwgKiBjYW52YXMud2lkdGg7XHJcbiAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IGl0ZW0uY29sb3I7XHJcbiAgICAgICAgY29udGV4dC5saW5lVG8obW92ZSAtIDUsIDEpO1xyXG4gICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19