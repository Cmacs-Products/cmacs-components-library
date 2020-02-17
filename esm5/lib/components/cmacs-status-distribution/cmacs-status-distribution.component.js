/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter, Input, ViewChild, TemplateRef } from '@angular/core';
import { UtilService } from '../core/services/util.service';
var CmacsStatusDistributionComponent = /** @class */ (function () {
    function CmacsStatusDistributionComponent(util) {
        this.util = util;
        this.clickMenu = new EventEmitter();
        this.columnsHeader = [];
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
    CmacsStatusDistributionComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.drawCanvas();
        this.setConfiguration();
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.setData();
        }), 0);
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
        canvas.width -= 7;
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
                    template: "<div class=\"sd-content\">\r\n  <!-- Legend -->\r\n  <div nz-row class=\"legend-row\">\r\n    <span class=\"legend-column\" *ngFor=\"let item of data\">\r\n      <span [style.background-color]=\"item.color\" class=\"legend-bar\"></span>\r\n      <span class=\"legend-text\">{{item.name}}</span>\r\n    </span>\r\n  </div>\r\n  <!-- Chart -->\r\n  <div nz-row class=\"char-content\">\r\n    <canvas id=\"canvas-{{id}}\" class=\"chart-canvas\"></canvas>\r\n  </div>\r\n  <div nz-row>\r\n    <cmacs-compact-table *ngIf=\"dataTable\" [data]=\"dataTable\" [(config)]=\"configurationExpandableRows\" [indentSize]=\"40\"\r\n      [logs]=\"true\" [expandable]=\"true\" [scroll]=\"{ y: '200px' }\" [frontPagination]=\"false\" [showPagination]=\"false\">\r\n    </cmacs-compact-table>\r\n  </div>\r\n</div>\r\n<ng-template #columnTemplate let-color=\"color\">\r\n  <div class=\"chart-dot\" [style.background-color]=\"color\"></div>\r\n</ng-template>",
                    styles: [".legend-bar{width:4px;height:10px;border-radius:5px;display:inline-block}.legend-row{width:100%;margin-bottom:30px}.legend-column{display:table-cell;float:left;font-family:Roboto;font-size:12px;color:#656c79}.legend-text{padding-left:6px;padding-right:20px}.chart-content{text-align:center}.sd-content{margin:0 12px}.chart-dot{width:9px;height:9px;border-radius:5px;display:inline-block}"]
                }] }
    ];
    /** @nocollapse */
    CmacsStatusDistributionComponent.ctorParameters = function () { return [
        { type: UtilService }
    ]; };
    CmacsStatusDistributionComponent.propDecorators = {
        columnTemplate: [{ type: ViewChild, args: ['columnTemplate', { read: TemplateRef },] }],
        clickMenu: [{ type: Output }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc3RhdHVzLWRpc3RyaWJ1dGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXN0YXR1cy1kaXN0cmlidXRpb24vY21hY3Mtc3RhdHVzLWRpc3RyaWJ1dGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFpQixTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RILE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUc1RDtJQW1CRSwwQ0FDVSxJQUFpQjtRQUFqQixTQUFJLEdBQUosSUFBSSxDQUFhO1FBWGpCLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBSXJDLGtCQUFhLEdBQWEsRUFBRSxDQUFDO1FBU3BDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxtREFBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBRUQsMERBQWU7OztJQUFmO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsVUFBVTs7O1FBQUM7WUFDVCxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDakIsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxvREFBUzs7OztJQUFULFVBQVUsSUFBc0I7UUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELDJEQUFnQjs7O0lBQWhCO1FBQ0UsSUFBSSxDQUFDLDJCQUEyQixHQUFHO1lBQ2pD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LE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDcEIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3hCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDOzt3QkFDakIsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLO29CQUN0QixJQUFJLElBQUksR0FBRyxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO29CQUNuQyxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7b0JBQ2pDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDNUIsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO2lCQUNsQjs7Ozs7Ozs7O1NBQ0Y7SUFDSCxDQUFDOztnQkFySEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLHU3QkFBeUQ7O2lCQUUxRDs7OztnQkFQUSxXQUFXOzs7aUNBVWpCLFNBQVMsU0FBQyxnQkFBZ0IsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7NEJBRWpELE1BQU07dUJBR04sS0FBSztnQ0FDTCxLQUFLOztJQXlHUix1Q0FBQztDQUFBLEFBdEhELElBc0hDO1NBakhZLGdDQUFnQzs7O0lBRTNDLDBEQUFvRjs7SUFFcEYscURBQThDOztJQUc5QyxnREFBc0I7O0lBQ3RCLHlEQUFzQzs7SUFFdEMsOENBQUc7O0lBQ0gscURBQWlCOztJQUNqQix1RUFBaUM7Ozs7O0lBRy9CLGdEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIEFmdGVyVmlld0luaXQsIFZpZXdDaGlsZCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVXRpbFNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3V0aWwuc2VydmljZSc7XHJcbmltcG9ydCB7IFdpZGdldEFjdGlvblR5cGUgfSBmcm9tICcuLi9jb3JlL2VudW1zL3dpZGdldC1hY3Rpb24tdHlwZS5lbnVtJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3Mtc3RhdHVzLWRpc3RyaWJ1dGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXN0YXR1cy1kaXN0cmlidXRpb24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXN0YXR1cy1kaXN0cmlidXRpb24uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1N0YXR1c0Rpc3RyaWJ1dGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2NvbHVtblRlbXBsYXRlJywgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSBjb2x1bW5UZW1wbGF0ZTogVGVtcGxhdGVSZWY8e30+O1xyXG5cclxuICBAT3V0cHV0KCkgY2xpY2tNZW51ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIC8vIGNvbnRlbnRcclxuICBASW5wdXQoKSBkYXRhITogYW55W107XHJcbiAgQElucHV0KCkgY29sdW1uc0hlYWRlcjogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgaWQ7XHJcbiAgZGF0YVRhYmxlOiBhbnlbXTtcclxuICBjb25maWd1cmF0aW9uRXhwYW5kYWJsZVJvd3M6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHV0aWw6IFV0aWxTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICB0aGlzLmlkID0gdXRpbC51dWlkdjQoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5kcmF3Q2FudmFzKCk7XHJcbiAgICB0aGlzLnNldENvbmZpZ3VyYXRpb24oKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNldERhdGEoKTtcclxuICAgIH0sIDApO1xyXG4gIH1cclxuXHJcbiAgbWVudUNsaWNrKHR5cGU6IFdpZGdldEFjdGlvblR5cGUpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xpY2tNZW51LmVtaXQodHlwZSk7XHJcbiAgfVxyXG5cclxuICBzZXRDb25maWd1cmF0aW9uKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb25maWd1cmF0aW9uRXhwYW5kYWJsZVJvd3MgPSB7XHJcbiAgICAgIGZpZWxkczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNlbGRUeXBlOiAzLFxyXG4gICAgICAgICAgZGlzcGxheTogJycsXHJcbiAgICAgICAgICBwcm9wZXJ0eTogJ2NvbG9yJyxcclxuICAgICAgICAgIHdpZHRoOiAnMjAlJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNlbGRUeXBlOiAwLFxyXG4gICAgICAgICAgZGlzcGxheTogdGhpcy5jb2x1bW5zSGVhZGVyWzBdLFxyXG4gICAgICAgICAgcHJvcGVydHk6ICduYW1lJyxcclxuICAgICAgICAgIGVkaXRUZW1wbGF0ZTogMyxcclxuICAgICAgICAgIHdpZHRoOiAnNjAlJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNlbGRUeXBlOiAwLFxyXG4gICAgICAgICAgZGlzcGxheTogdGhpcy5jb2x1bW5zSGVhZGVyWzFdLFxyXG4gICAgICAgICAgcHJvcGVydHk6ICd2YWx1ZScsXHJcbiAgICAgICAgICB3aWR0aDogJzIwJScsXHJcbiAgICAgICAgICBlZGl0VGVtcGxhdGU6IDIsXHJcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIF0sXHJcbiAgICAgIGZpZWxkSWQ6ICdrZXknLFxyXG4gICAgICBmaWVsZFJhdGU6ICdmYXYnXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc2V0RGF0YSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHRlbXA6IGFueVtdID0gW107XHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5kYXRhKSB7XHJcbiAgICAgIGNvbnN0IG5ld0l0ZW0gPSB7XHJcbiAgICAgICAga2V5OiBpdGVtLmtleSxcclxuICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXHJcbiAgICAgICAgY29sb3I6IHtcclxuICAgICAgICAgIHJlZjogdGhpcy5jb2x1bW5UZW1wbGF0ZSxcclxuICAgICAgICAgIGNvbnRleHQ6IHtcclxuICAgICAgICAgICAgY29sb3I6IGl0ZW0uY29sb3JcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbHVlOiBpdGVtLnZhbHVlLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXVxyXG4gICAgICB9O1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW0ucm93cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIG5ld0l0ZW0uY2hpbGRyZW4ucHVzaCh7XHJcbiAgICAgICAgICBrZXk6IGl0ZW0ua2V5ICsgJy0nICsgaSxcclxuICAgICAgICAgIG5hbWU6IGl0ZW0ucm93c1tpXSxcclxuICAgICAgICAgIGNvbG9yOiB7IH0sXHJcbiAgICAgICAgICB2YWx1ZTogJydcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICB0ZW1wLnB1c2gobmV3SXRlbSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmRhdGFUYWJsZSA9IHRlbXA7XHJcbiAgfVxyXG5cclxuICBkcmF3Q2FudmFzKCk6IHZvaWQge1xyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcy0nICsgdGhpcy5pZCkgIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgY2FudmFzLmhlaWdodCA9IDQwO1xyXG4gICAgY2FudmFzLndpZHRoIC09IDc7XHJcbiAgICBpZiAoY2FudmFzLmdldENvbnRleHQpIHtcclxuICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICBjb25zdCB0b3RhbCA9IHRoaXMuZGF0YS5tYXAoeCA9PiB4LnZhbHVlKS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKTtcclxuICAgICAgbGV0IG1vdmUgPSAwO1xyXG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5kYXRhKSB7XHJcbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjb250ZXh0Lm1vdmVUbyhtb3ZlLCAxKTtcclxuICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDEwO1xyXG4gICAgICAgIGNvbnN0IHZhbCA9IGl0ZW0udmFsdWU7XHJcbiAgICAgICAgbW92ZSArPSB2YWwgLyB0b3RhbCAqIGNhbnZhcy53aWR0aDtcclxuICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gaXRlbS5jb2xvcjtcclxuICAgICAgICBjb250ZXh0LmxpbmVUbyhtb3ZlIC0gNSwgMSk7XHJcbiAgICAgICAgY29udGV4dC5zdHJva2UoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=