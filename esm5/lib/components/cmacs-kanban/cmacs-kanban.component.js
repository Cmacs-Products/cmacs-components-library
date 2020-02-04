/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, Output, Input, ViewEncapsulation, TemplateRef } from '@angular/core';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { InputBoolean } from 'ng-zorro-antd';
var CmacsKanbanComponent = /** @class */ (function () {
    function CmacsKanbanComponent() {
        this.multiselect = false;
        /**
         * Template for items to render. "item" object ist passed (see examples)
         * itemTemplate is for each column
         * itemTemplates is for change the template of a column
         */
        this.itemTemplate = null;
        this.itemTemplates = null;
        /**
         * Template for column headers. Current groupName will be passed (see examples)
         */
        this.columnHeaderTemplate = null;
        /**
         * Template for column headers. Current groupName will be passed (see examples)
         */
        this.columnHeaderCollapsedTemplate = null;
        /**
         * Shrink columns
         */
        this.showShrink = false;
        // scrolling
        this.hasVerticalScroll = false;
        this.heightContainer = '500px';
        /**
         * Templates for actions and description panels
         */
        this.actionPanelTemplates = null;
        this.descriptionPanelTemplates = null;
        this.draggedItem = new EventEmitter();
        this.noDraggedItem = new EventEmitter();
        this.onclickItem = new EventEmitter();
        this.ondblclickItem = new EventEmitter();
        this.selectionChange = new EventEmitter();
        this.onColumnExpand = new EventEmitter();
        this.selectedItems = [];
        this.dragStartedColumn = null;
    }
    /**
     * @return {?}
     */
    CmacsKanbanComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} id
     * @return {?}
     */
    CmacsKanbanComponent.prototype.getItemTemplate = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        if (this.actionPanelTemplates) {
            /** @type {?} */
            var elem = this.itemTemplates.find((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return i.id === id; }));
            if (elem) {
                return elem.template;
            }
        }
        return this.itemTemplate;
    };
    /**
     * @param {?} id
     * @return {?}
     */
    CmacsKanbanComponent.prototype.getActionPanel = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        if (this.actionPanelTemplates == null) {
            return null;
        }
        /** @type {?} */
        var elem = this.actionPanelTemplates.find((/**
         * @param {?} d
         * @return {?}
         */
        function (d) { return d.id === id; }));
        return elem ? elem.template : null;
    };
    /**
     * @param {?} id
     * @return {?}
     */
    CmacsKanbanComponent.prototype.getDescriptionPanel = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        if (this.descriptionPanelTemplates == null) {
            return null;
        }
        /** @type {?} */
        var elem = this.descriptionPanelTemplates.find((/**
         * @param {?} d
         * @return {?}
         */
        function (d) { return d.id === id; }));
        return elem ? elem.template : null;
    };
    /**
     * @return {?}
     */
    CmacsKanbanComponent.prototype.verticalScrollStyle = /**
     * @return {?}
     */
    function () {
        return (this.hasVerticalScroll) ? { height: this.heightContainer } : {};
    };
    /**
     * @return {?}
     */
    CmacsKanbanComponent.prototype.boardStyle = /**
     * @return {?}
     */
    function () {
        return (this.hasVerticalScroll) ? { 'min-height': this.heightContainer } : {};
    };
    /**
     * @param {?} collapsed
     * @return {?}
     */
    CmacsKanbanComponent.prototype.columnStyle = /**
     * @param {?} collapsed
     * @return {?}
     */
    function (collapsed) {
        return (this.columnWidth && !collapsed) ? { minWidth: this.columnWidth } : {};
    };
    /**
     * @param {?} column
     * @return {?}
     */
    CmacsKanbanComponent.prototype.columnExpand = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        column.collapsed = false;
        this.onColumnExpand.emit(column);
    };
    /**
     * @param {?} column
     * @return {?}
     */
    CmacsKanbanComponent.prototype.columnCollapse = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        column.collapsed = true;
    };
    /**
     * @param {?} col
     * @return {?}
     */
    CmacsKanbanComponent.prototype.setDragStartedColumn = /**
     * @param {?} col
     * @return {?}
     */
    function (col) {
        this.dragStartedColumn = col;
    };
    /**
     * @param {?} event
     * @param {?} columnId
     * @return {?}
     */
    CmacsKanbanComponent.prototype.drop = /**
     * @param {?} event
     * @param {?} columnId
     * @return {?}
     */
    function (event, columnId) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
            this.emitDroppedItem(event.item.data, columnId);
        }
        else {
            if (!this.dragStartedColumn.disabledDrop || !this.dragStartedColumn.disabledDrop.some((/**
             * @param {?} id
             * @return {?}
             */
            function (id) { return id === columnId; }))) {
                if (this.itemType === 'custom' && !event.item.data.data.isEditable) {
                    this.noDraggedItem.emit(event.item.data);
                    this.dragStartedColumn = null;
                    return;
                }
                transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
                this.emitDroppedItem(event.item.data, columnId);
            }
            else {
                this.noDraggedItem.emit(event.item.data);
            }
        }
        this.dragStartedColumn = null;
    };
    /**
     * @private
     * @param {?} data
     * @param {?} columnId
     * @return {?}
     */
    CmacsKanbanComponent.prototype.emitDroppedItem = /**
     * @private
     * @param {?} data
     * @param {?} columnId
     * @return {?}
     */
    function (data, columnId) {
        data.columnId = columnId;
        this.draggedItem.emit(data);
    };
    /**
     * @param {?} item
     * @param {?} columnId
     * @return {?}
     */
    CmacsKanbanComponent.prototype.clickItem = /**
     * @param {?} item
     * @param {?} columnId
     * @return {?}
     */
    function (item, columnId) {
        console.log(this.board);
        item.columnId = columnId;
        this.onclickItem.emit(item);
        // add or remove elements to selected items
        if (!item.disabled) {
            /** @type {?} */
            var idx = this.selectedItems.findIndex((/**
             * @param {?} elem
             * @return {?}
             */
            function (elem) { return elem.id === item.id; }));
            if (idx === -1) {
                if (!this.multiselect) {
                    this.selectedItems = [];
                }
                this.selectedItems.push(item);
            }
            else {
                this.selectedItems.splice(idx, 1);
            }
            this.selectionChange.emit(this.selectedItems);
        }
    };
    /**
     * @param {?} item
     * @param {?} columnId
     * @return {?}
     */
    CmacsKanbanComponent.prototype.dblclickItem = /**
     * @param {?} item
     * @param {?} columnId
     * @return {?}
     */
    function (item, columnId) {
        item.columnId = columnId;
        this.ondblclickItem.emit(item);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    CmacsKanbanComponent.prototype.isItemSelected = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.selectedItems.some((/**
         * @param {?} elem
         * @return {?}
         */
        function (elem) { return elem.id === id; }));
    };
    CmacsKanbanComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-kanban',
                    exportAs: 'cmacsKanban',
                    template: "<div class=\"root\">\r\n    <div class=\"board\" [ngStyle]=\"boardStyle()\">\r\n      <div class=\"board-wrapper\">\r\n        <div class=\"board-columns\" cdkDropListGroup>\r\n          <div class=\"board-column\" *ngFor=\"let column of board.columns\" [ngStyle]=\"columnStyle(column.collapsed)\" [ngClass]=\"column.class\"\r\n            [class.collapsed]=\"column.collapsed\"\r\n          >\r\n            <!-- collapsed -->\r\n            <div *ngIf=\"column.collapsed\" class=\"column-header-collapsed\" (click)=\"columnExpand(column)\">\r\n              <button cmacs-button style=\"padding: 8px;\">\r\n                <i class=\"iconArrowLarge-Expand\" ></i>\r\n              </button>\r\n              <div class=\"column-header-collapsed-line column-header-collapsed-line-1\"></div>\r\n              <ng-container  [ngIf]=\"columnHeaderCollapsedTemplate\" *ngTemplateOutlet=\"columnHeaderCollapsedTemplate; context: { column: column}\"></ng-container>\r\n              <div *ngIf=\"!columnHeaderCollapsedTemplate\" class=\"column-header-collapsed-text\">\r\n                <span>{{ column.name }}</span>\r\n              </div>  \r\n              <div class=\"column-header-collapsed-line column-header-collapsed-line-2\"></div>\r\n            </div>\r\n            <!-- end collapsed -->\r\n            <ng-container class=\"column-header-template\" [ngIf]=\"columnHeaderTemplate\" *ngTemplateOutlet=\"columnHeaderTemplate; context: { column: column}\" ></ng-container>\r\n            <div class=\"column-header\" *ngIf=\"!columnHeaderTemplate\">\r\n              <div class=\"column-title\">{{column.name}}</div>\r\n              <button *ngIf=\"showShrink\" cmacs-button class=\"column-shrink\" ghost (click)=\"columnCollapse(column)\">\r\n                <i class=\"iconArrowLarge-Collapse\"></i>\r\n              </button>\r\n              <span class=\"column-title-items\">{{column.items.length}} Items</span>\r\n            </div>\r\n            <ng-container class=\"column-action-panel\" [ngIf]=\"getActionPanel(column.id)\" *ngTemplateOutlet=\"getActionPanel(column.id); context: { column: column}\" ></ng-container>\r\n            <div class=\"tasks-container\" cdkDropList [cdkDropListData]=\"column.items\"\r\n            (cdkDropListDropped)=\"drop($event, column.id)\" [ngStyle]=\"verticalScrollStyle()\">\r\n              <div class=\"task\" *ngFor=\"let item of column.items\" \r\n                   cdkDrag \r\n                   [cdkDragData]=\"item\"\r\n                   [cdkDragDisabled]=\"item.disabled\"\r\n                   (cdkDragStarted)=\"setDragStartedColumn(column)\"\r\n                   (click)=\"clickItem(item, column.id)\"\r\n                   (dblclick)=\"dblclickItem(item, column.id)\"\r\n                   [class.task-selected]=\"isItemSelected(item.id)\"\r\n              >\r\n                <ng-container *ngTemplateOutlet=\"getItemTemplate(column.id); context: {item: item, columnId: column.id}\"></ng-container>\r\n              </div>\r\n            </div>\r\n            <ng-container class=\"column-description-panel\" [ngIf]=\"getDescriptionPanel(column.id)\" *ngTemplateOutlet=\"getDescriptionPanel(column.id); context: { column: column}\" ></ng-container>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".root{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;height:100%}.board{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-flex:1;flex-grow:1;min-width:0;min-height:0}.board-bar{background-color:rgba(225,222,222,.52);padding:8px 15px}.board-name{font-size:20px;font-weight:700}.board-wrapper{display:-webkit-box;display:flex;-webkit-box-flex:1;flex-grow:1;overflow-x:auto}.board-columns{display:-webkit-box;display:flex;-webkit-box-flex:1;flex-grow:1}.board-column{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-flex:1;flex-grow:1;flex-basis:0;border-radius:4px}.board-column:not(:first-child){margin-left:0}.column-header{font-size:14px;font-weight:400;padding:12px 15px 10px;font-family:Roboto-Regular;line-height:1.17;border-left:1px solid #dee0e5;box-shadow:0 3px 7px -3px rgba(5,6,6,.18);margin-bottom:10px;height:38px}.column-title{text-transform:capitalize;color:#656c79;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;width:calc(100% - 82px);display:inline-block}.column-title-items{color:#97a0ae;font-size:12px;font-family:Roboto-Medium}.column-shrink{height:20px!important;width:20px;padding-right:0!important;padding-left:0!important;margin-left:5px}.column-shrink,.column-title-items{float:right}.tasks-container{-webkit-box-flex:1;flex-grow:1;overflow-y:auto;margin-bottom:2px}.board-wrapper::-webkit-scrollbar,.tasks-container::-webkit-scrollbar{width:7px;height:7px}.board-wrapper::-webkit-scrollbar-thumb,.tasks-container::-webkit-scrollbar-thumb{background-color:#cfd3d9;border-radius:10px}.board-wrapper::-webkit-scrollbar-thumb:hover,.tasks-container::-webkit-scrollbar-thumb:hover{background-color:#bec4cd;border-radius:10px}.task{display:-webkit-box;display:flex}.task.cdk-drag-preview{opacity:.9}.task-selected{border-color:#2a7cff}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating,.tasks-container.cdk-drop-list-dragging .task:not(.cdk-drag-placeholder){-webkit-transition:-webkit-transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}.board-column.collapsed{min-width:37px!important;padding:0;margin:0 10px;flex-basis:0;-webkit-box-flex:0;flex-grow:0}.board-column.collapsed>.column-action-panel,.board-column.collapsed>.column-description-panel,.board-column.collapsed>.column-header,.board-column.collapsed>.column-header-template,.board-column.collapsed>.tasks-container{display:none}.column-header-collapsed{display:contents;height:100%}.column-header-collapsed-line{background-color:#acb3bf;width:1px;margin:0 auto}.column-header-collapsed-line-1{margin-top:14px;margin-bottom:14px;height:25px}.column-header-collapsed-line-2{margin-top:14px;height:inherit}.column-header-collapsed-text{-webkit-transform:none;transform:none;-webkit-writing-mode:vertical-lr;-ms-writing-mode:tb-lr;writing-mode:vertical-lr;margin:0 0 0 10px;text-transform:capitalize;color:#656c79;font-size:14px;font-weight:500;font-family:Roboto-Medium;display:table}.column-header-collapsed-text>*{display:table-cell;vertical-align:middle;white-space:nowrap}.column-header .column-shrink{display:none}.column-header:hover .column-shrink{display:block}"]
                }] }
    ];
    /** @nocollapse */
    CmacsKanbanComponent.ctorParameters = function () { return []; };
    CmacsKanbanComponent.propDecorators = {
        board: [{ type: Input }],
        multiselect: [{ type: Input }],
        itemTemplate: [{ type: Input }],
        itemTemplates: [{ type: Input }],
        columnHeaderTemplate: [{ type: Input }],
        columnHeaderCollapsedTemplate: [{ type: Input }],
        showShrink: [{ type: Input }],
        hasVerticalScroll: [{ type: Input }],
        heightContainer: [{ type: Input }],
        actionPanelTemplates: [{ type: Input }],
        descriptionPanelTemplates: [{ type: Input }],
        columnWidth: [{ type: Input }],
        itemType: [{ type: Input }],
        draggedItem: [{ type: Output }],
        noDraggedItem: [{ type: Output }],
        onclickItem: [{ type: Output }],
        ondblclickItem: [{ type: Output }],
        selectionChange: [{ type: Output }],
        onColumnExpand: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsKanbanComponent.prototype, "multiselect", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsKanbanComponent.prototype, "showShrink", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsKanbanComponent.prototype, "hasVerticalScroll", void 0);
    return CmacsKanbanComponent;
}());
export { CmacsKanbanComponent };
if (false) {
    /**
     * Items to display
     * @type {?}
     */
    CmacsKanbanComponent.prototype.board;
    /** @type {?} */
    CmacsKanbanComponent.prototype.multiselect;
    /**
     * Template for items to render. "item" object ist passed (see examples)
     * itemTemplate is for each column
     * itemTemplates is for change the template of a column
     * @type {?}
     */
    CmacsKanbanComponent.prototype.itemTemplate;
    /** @type {?} */
    CmacsKanbanComponent.prototype.itemTemplates;
    /**
     * Template for column headers. Current groupName will be passed (see examples)
     * @type {?}
     */
    CmacsKanbanComponent.prototype.columnHeaderTemplate;
    /**
     * Template for column headers. Current groupName will be passed (see examples)
     * @type {?}
     */
    CmacsKanbanComponent.prototype.columnHeaderCollapsedTemplate;
    /**
     * Shrink columns
     * @type {?}
     */
    CmacsKanbanComponent.prototype.showShrink;
    /** @type {?} */
    CmacsKanbanComponent.prototype.hasVerticalScroll;
    /** @type {?} */
    CmacsKanbanComponent.prototype.heightContainer;
    /**
     * Templates for actions and description panels
     * @type {?}
     */
    CmacsKanbanComponent.prototype.actionPanelTemplates;
    /** @type {?} */
    CmacsKanbanComponent.prototype.descriptionPanelTemplates;
    /** @type {?} */
    CmacsKanbanComponent.prototype.columnWidth;
    /** @type {?} */
    CmacsKanbanComponent.prototype.itemType;
    /** @type {?} */
    CmacsKanbanComponent.prototype.draggedItem;
    /** @type {?} */
    CmacsKanbanComponent.prototype.noDraggedItem;
    /** @type {?} */
    CmacsKanbanComponent.prototype.onclickItem;
    /** @type {?} */
    CmacsKanbanComponent.prototype.ondblclickItem;
    /** @type {?} */
    CmacsKanbanComponent.prototype.selectionChange;
    /** @type {?} */
    CmacsKanbanComponent.prototype.onColumnExpand;
    /** @type {?} */
    CmacsKanbanComponent.prototype.selectedItems;
    /** @type {?} */
    CmacsKanbanComponent.prototype.dragStartedColumn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mta2FuYmFuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mta2FuYmFuL2NtYWNzLWthbmJhbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFlBQVksRUFFWixNQUFNLEVBQ04sS0FBSyxFQUNMLGlCQUFpQixFQUVqQixXQUFXLEVBQ2QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFlLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXpGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0M7SUF1REk7UUEzQ3lCLGdCQUFXLEdBQUcsS0FBSyxDQUFDOzs7Ozs7UUFPcEMsaUJBQVksR0FBcUIsSUFBSSxDQUFDO1FBQ3RDLGtCQUFhLEdBQTJCLElBQUksQ0FBQzs7OztRQUc3Qyx5QkFBb0IsR0FBcUIsSUFBSSxDQUFDOzs7O1FBRzlDLGtDQUE2QixHQUFxQixJQUFJLENBQUM7Ozs7UUFHdkMsZUFBVSxHQUFHLEtBQUssQ0FBQzs7UUFHbkIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFDLG9CQUFlLEdBQUcsT0FBTyxDQUFDOzs7O1FBRzFCLHlCQUFvQixHQUE0QixJQUFJLENBQUM7UUFDckQsOEJBQXlCLEdBQTRCLElBQUksQ0FBQztRQVF6RCxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDekMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQy9DLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN6QyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDNUMsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBZ0IsQ0FBQztRQUNuRCxtQkFBYyxHQUFHLElBQUksWUFBWSxF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O0lBR25FLDJDQUE2Qjs7SUFHN0Isd0NBQTBCOztJQUUxQiwyQ0FBbUQ7O0lBQ25ELDZDQUF5RDs7SUFDekQsMkNBQW1EOztJQUNuRCw4Q0FBc0Q7O0lBQ3RELCtDQUE2RDs7SUFDN0QsOENBQTREOztJQUU1RCw2Q0FBa0M7O0lBQ2xDLGlEQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICAgIE91dHB1dCxcclxuICAgIElucHV0LFxyXG4gICAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbiAgICBPbkluaXQsXHJcbiAgICBUZW1wbGF0ZVJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5LCB0cmFuc2ZlckFycmF5SXRlbSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xyXG5pbXBvcnQgeyBLYW5iYW5Cb2FyZCwgS2FuYmFuQ29sdW1uLCBLYW5iYW5JdGVtLCBLYW5iYW5Db2x1bW5UZW1wbGF0ZSB9IGZyb20gJy4vY21hY3Mta2FuYmFuLWRlZmluaXRpb25zJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnY21hY3Mta2FuYmFuJyxcclxuICAgIGV4cG9ydEFzOiAnY21hY3NLYW5iYW4nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWthbmJhbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9jbWFjcy1rYW5iYW4uY29tcG9uZW50LmNzcyddLFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENtYWNzS2FuYmFuQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICAvKiogSXRlbXMgdG8gZGlzcGxheSAgKi9cclxuICAgIEBJbnB1dCgpIGJvYXJkOiBLYW5iYW5Cb2FyZDtcclxuICAgIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBtdWx0aXNlbGVjdCA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGVtcGxhdGUgZm9yIGl0ZW1zIHRvIHJlbmRlci4gXCJpdGVtXCIgb2JqZWN0IGlzdCBwYXNzZWQgKHNlZSBleGFtcGxlcylcclxuICAgICAqIGl0ZW1UZW1wbGF0ZSBpcyBmb3IgZWFjaCBjb2x1bW5cclxuICAgICAqIGl0ZW1UZW1wbGF0ZXMgaXMgZm9yIGNoYW5nZSB0aGUgdGVtcGxhdGUgb2YgYSBjb2x1bW5cclxuICAgICAqL1xyXG4gICAgQElucHV0KCkgaXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+ID0gbnVsbDtcclxuICAgIEBJbnB1dCgpIGl0ZW1UZW1wbGF0ZXM6IEthbmJhbkNvbHVtblRlbXBsYXRlW10gPSBudWxsO1xyXG5cclxuICAgIC8qKiBUZW1wbGF0ZSBmb3IgY29sdW1uIGhlYWRlcnMuIEN1cnJlbnQgZ3JvdXBOYW1lIHdpbGwgYmUgcGFzc2VkIChzZWUgZXhhbXBsZXMpICovXHJcbiAgICBASW5wdXQoKSBjb2x1bW5IZWFkZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiA9IG51bGw7XHJcblxyXG4gICAgLyoqIFRlbXBsYXRlIGZvciBjb2x1bW4gaGVhZGVycy4gQ3VycmVudCBncm91cE5hbWUgd2lsbCBiZSBwYXNzZWQgKHNlZSBleGFtcGxlcykgKi9cclxuICAgIEBJbnB1dCgpIGNvbHVtbkhlYWRlckNvbGxhcHNlZFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+ID0gbnVsbDtcclxuXHJcbiAgICAvKiogU2hyaW5rIGNvbHVtbnMgKi9cclxuICAgIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93U2hyaW5rID0gZmFsc2U7XHJcblxyXG4gICAgLy8gc2Nyb2xsaW5nXHJcbiAgICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaGFzVmVydGljYWxTY3JvbGwgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIGhlaWdodENvbnRhaW5lciA9ICc1MDBweCc7XHJcblxyXG4gICAgLyoqIFRlbXBsYXRlcyBmb3IgYWN0aW9ucyBhbmQgZGVzY3JpcHRpb24gcGFuZWxzICAqL1xyXG4gICAgQElucHV0KCkgYWN0aW9uUGFuZWxUZW1wbGF0ZXM6IEthbmJhbkNvbHVtblRlbXBsYXRlW10gID0gbnVsbDtcclxuICAgIEBJbnB1dCgpIGRlc2NyaXB0aW9uUGFuZWxUZW1wbGF0ZXM6IEthbmJhbkNvbHVtblRlbXBsYXRlW10gID0gbnVsbDtcclxuXHJcbiAgICAvLyBzdHlsZXNcclxuICAgIEBJbnB1dCgpIGNvbHVtbldpZHRoOiBzdHJpbmc7XHJcblxyXG4gICAgLy8ga2FuYmFuIHR5cGVcclxuICAgIEBJbnB1dCgpIGl0ZW1UeXBlOiBzdHJpbmc7XHJcblxyXG4gICAgQE91dHB1dCgpIGRyYWdnZWRJdGVtID0gbmV3IEV2ZW50RW1pdHRlcjxvYmplY3Q+KCk7XHJcbiAgICBAT3V0cHV0KCkgbm9EcmFnZ2VkSXRlbSA9IG5ldyBFdmVudEVtaXR0ZXI8S2FuYmFuSXRlbT4oKTtcclxuICAgIEBPdXRwdXQoKSBvbmNsaWNrSXRlbSA9IG5ldyBFdmVudEVtaXR0ZXI8b2JqZWN0PigpO1xyXG4gICAgQE91dHB1dCgpIG9uZGJsY2xpY2tJdGVtID0gbmV3IEV2ZW50RW1pdHRlcjxvYmplY3Q+KCk7XHJcbiAgICBAT3V0cHV0KCkgc2VsZWN0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxLYW5iYW5JdGVtW10+KCk7XHJcbiAgICBAT3V0cHV0KCkgb25Db2x1bW5FeHBhbmQgPSBuZXcgRXZlbnRFbWl0dGVyPEthbmJhbkNvbHVtbj4oKTtcclxuXHJcbiAgICBzZWxlY3RlZEl0ZW1zOiBLYW5iYW5JdGVtIFtdID0gW107XHJcbiAgICBkcmFnU3RhcnRlZENvbHVtbjogS2FuYmFuQ29sdW1uID0gbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRJdGVtVGVtcGxhdGUoaWQ6IHN0cmluZyk6IFRlbXBsYXRlUmVmPGFueT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmFjdGlvblBhbmVsVGVtcGxhdGVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW0gPSB0aGlzLml0ZW1UZW1wbGF0ZXMuZmluZChpID0+IGkuaWQgPT09IGlkKTtcclxuICAgICAgICAgICAgaWYgKGVsZW0pIHsgcmV0dXJuIGVsZW0udGVtcGxhdGU7IH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbVRlbXBsYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFjdGlvblBhbmVsKGlkOiBzdHJpbmcpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcclxuICAgICAgICBpZiAodGhpcy5hY3Rpb25QYW5lbFRlbXBsYXRlcyA9PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcbiAgICAgICAgY29uc3QgZWxlbSA9IHRoaXMuYWN0aW9uUGFuZWxUZW1wbGF0ZXMuZmluZChkID0+IGQuaWQgPT09IGlkKTtcclxuICAgICAgICByZXR1cm4gZWxlbSA/IGVsZW0udGVtcGxhdGUgOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERlc2NyaXB0aW9uUGFuZWwoaWQ6IHN0cmluZyk6IFRlbXBsYXRlUmVmPGFueT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmRlc2NyaXB0aW9uUGFuZWxUZW1wbGF0ZXMgPT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG4gICAgICAgIGNvbnN0IGVsZW0gPSB0aGlzLmRlc2NyaXB0aW9uUGFuZWxUZW1wbGF0ZXMuZmluZChkID0+IGQuaWQgPT09IGlkKTtcclxuICAgICAgICByZXR1cm4gZWxlbSA/IGVsZW0udGVtcGxhdGUgOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHZlcnRpY2FsU2Nyb2xsU3R5bGUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuaGFzVmVydGljYWxTY3JvbGwpID8geyBoZWlnaHQ6IHRoaXMuaGVpZ2h0Q29udGFpbmVyfSA6IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGJvYXJkU3R5bGUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuaGFzVmVydGljYWxTY3JvbGwpID8geyAnbWluLWhlaWdodCc6IHRoaXMuaGVpZ2h0Q29udGFpbmVyfSA6IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbHVtblN0eWxlKGNvbGxhcHNlZDogYm9vbGVhbik6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmNvbHVtbldpZHRoICYmICFjb2xsYXBzZWQpID8geyBtaW5XaWR0aDogdGhpcy5jb2x1bW5XaWR0aH0gOiB7fTtcclxuICAgIH1cclxuXHJcbiAgICBjb2x1bW5FeHBhbmQoY29sdW1uOiBLYW5iYW5Db2x1bW4pOiBhbnkge1xyXG4gICAgICAgIGNvbHVtbi5jb2xsYXBzZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9uQ29sdW1uRXhwYW5kLmVtaXQoY29sdW1uKTtcclxuICAgIH1cclxuXHJcbiAgICBjb2x1bW5Db2xsYXBzZShjb2x1bW46IEthbmJhbkNvbHVtbik6IHZvaWQge1xyXG4gICAgICAgIGNvbHVtbi5jb2xsYXBzZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERyYWdTdGFydGVkQ29sdW1uKGNvbDogS2FuYmFuQ29sdW1uKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kcmFnU3RhcnRlZENvbHVtbiA9IGNvbDtcclxuICAgIH1cclxuXHJcbiAgICBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4sIGNvbHVtbklkOiBzdHJpbmcpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKGV2ZW50LnByZXZpb3VzQ29udGFpbmVyID09PSBldmVudC5jb250YWluZXIpIHtcclxuICAgICAgICAgICAgbW92ZUl0ZW1JbkFycmF5KGV2ZW50LmNvbnRhaW5lci5kYXRhLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xyXG4gICAgICAgICAgICB0aGlzLmVtaXREcm9wcGVkSXRlbShldmVudC5pdGVtLmRhdGEsIGNvbHVtbklkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZHJhZ1N0YXJ0ZWRDb2x1bW4uZGlzYWJsZWREcm9wIHx8ICF0aGlzLmRyYWdTdGFydGVkQ29sdW1uLmRpc2FibGVkRHJvcC5zb21lKGlkID0+IGlkID09PSBjb2x1bW5JZCkpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLml0ZW1UeXBlID09PSAnY3VzdG9tJyAmJiAhZXZlbnQuaXRlbS5kYXRhLmRhdGEuaXNFZGl0YWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9EcmFnZ2VkSXRlbS5lbWl0KGV2ZW50Lml0ZW0uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmFnU3RhcnRlZENvbHVtbiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdHJhbnNmZXJBcnJheUl0ZW0oZXZlbnQucHJldmlvdXNDb250YWluZXIuZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5jb250YWluZXIuZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2aW91c0luZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRJbmRleCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXREcm9wcGVkSXRlbShldmVudC5pdGVtLmRhdGEsIGNvbHVtbklkKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9EcmFnZ2VkSXRlbS5lbWl0KGV2ZW50Lml0ZW0uZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kcmFnU3RhcnRlZENvbHVtbiA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGVtaXREcm9wcGVkSXRlbShkYXRhOiBhbnksIGNvbHVtbklkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBkYXRhLmNvbHVtbklkID0gY29sdW1uSWQ7XHJcbiAgICAgICAgdGhpcy5kcmFnZ2VkSXRlbS5lbWl0KGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrSXRlbShpdGVtOiBLYW5iYW5JdGVtLCBjb2x1bW5JZDogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5ib2FyZCk7XHJcbiAgICAgICAgaXRlbS5jb2x1bW5JZCA9IGNvbHVtbklkO1xyXG4gICAgICAgIHRoaXMub25jbGlja0l0ZW0uZW1pdChpdGVtKTtcclxuXHJcbiAgICAgICAgLy8gYWRkIG9yIHJlbW92ZSBlbGVtZW50cyB0byBzZWxlY3RlZCBpdGVtc1xyXG4gICAgICAgIGlmICghaXRlbS5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICBjb25zdCBpZHggPSB0aGlzLnNlbGVjdGVkSXRlbXMuZmluZEluZGV4KGVsZW0gPT4gZWxlbS5pZCA9PT0gaXRlbS5pZCk7XHJcbiAgICAgICAgICAgIGlmIChpZHggPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMubXVsdGlzZWxlY3QpIHsgdGhpcy5zZWxlY3RlZEl0ZW1zID0gW107IH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnNwbGljZShpZHgsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZEl0ZW1zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGJsY2xpY2tJdGVtKGl0ZW06IEthbmJhbkl0ZW0sIGNvbHVtbklkOiBzdHJpbmcpIHtcclxuICAgICAgICBpdGVtLmNvbHVtbklkID0gY29sdW1uSWQ7XHJcbiAgICAgICAgdGhpcy5vbmRibGNsaWNrSXRlbS5lbWl0KGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlzSXRlbVNlbGVjdGVkKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEl0ZW1zLnNvbWUoZWxlbSA9PiBlbGVtLmlkID09PSBpZCk7XHJcbiAgICB9XHJcbn1cclxuIl19