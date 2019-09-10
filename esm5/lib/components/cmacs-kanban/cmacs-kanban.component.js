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
        // scrolling
        this.hasVerticalScroll = false;
        this.heightContainer = '500px';
        /**
         * Templates for actions and description panels
         */
        this.actionPanelTemplates = null;
        this.descriptionPanelTemplates = null;
        this.draggedItem = new EventEmitter();
        this.onclickItem = new EventEmitter();
        this.ondblclickItem = new EventEmitter();
        this.selectionChange = new EventEmitter();
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
                transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
                this.emitDroppedItem(event.item.data, columnId);
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
                    template: "<div class=\"root\">\r\n    <div class=\"board\">\r\n      <div class=\"board-wrapper\">\r\n        <div class=\"board-columns\" cdkDropListGroup>\r\n          <div class=\"board-column\" *ngFor=\"let column of board.columns\" [ngStyle]=\"columnStyle(column.collapsed)\" [ngClass]=\"column.class\"\r\n            [class.collapsed]=\"column.collapsed\"\r\n          >\r\n            <!-- collapsed -->\r\n            <div *ngIf=\"column.collapsed\" class=\"column-header-collapsed\" (click)=\"columnExpand(column)\">\r\n              <button cmacs-button style=\"padding: 8px;\">\r\n                <i nz-icon type=\"arrows-alt\" style=\"font-size: 15px;\"></i>\r\n              </button>\r\n              <div class=\"column-header-collapsed-line column-header-collapsed-line-1\"></div>\r\n              <ng-container  [ngIf]=\"columnHeaderCollapsedTemplate\" *ngTemplateOutlet=\"columnHeaderCollapsedTemplate; context: { column: column}\"></ng-container>\r\n              <div *ngIf=\"!columnHeaderCollapsedTemplate\" class=\"column-header-collapsed-text\">\r\n                <span>{{ column.name }}</span>\r\n              </div>  \r\n              <div class=\"column-header-collapsed-line column-header-collapsed-line-2\"></div>\r\n            </div>\r\n            <!-- end collapsed -->\r\n            <ng-container class=\"column-header-template\" [ngIf]=\"columnHeaderTemplate\" *ngTemplateOutlet=\"columnHeaderTemplate; context: { column: column}\" ></ng-container>\r\n            <div class=\"column-header\" *ngIf=\"!columnHeaderTemplate\">\r\n              <span class=\"column-title\">{{column.name}}</span>\r\n              <span class=\"column-title-items\">{{column.items.length}} Items</span>\r\n            </div>\r\n            <ng-container class=\"column-action-panel\" [ngIf]=\"getActionPanel(column.id)\" *ngTemplateOutlet=\"getActionPanel(column.id); context: { column: column}\" ></ng-container>\r\n            <div class=\"tasks-container\" cdkDropList [cdkDropListData]=\"column.items\"\r\n            (cdkDropListDropped)=\"drop($event, column.id)\" [ngStyle]=\"verticalScrollStyle()\">\r\n              <div class=\"task\" *ngFor=\"let item of column.items\" \r\n                   cdkDrag \r\n                   [cdkDragData]=\"item\"\r\n                   [cdkDragDisabled]=\"item.disabled\"\r\n                   (cdkDragStarted)=\"setDragStartedColumn(column)\"\r\n                   (click)=\"clickItem(item, column.id)\"\r\n                   (dblclick)=\"dblclickItem(item, column.id)\"\r\n                   [class.task-selected]=\"isItemSelected(item.id)\"\r\n              >\r\n                <ng-container *ngTemplateOutlet=\"getItemTemplate(column.id); context: {item: item}\"></ng-container>\r\n              </div>\r\n            </div>\r\n            <ng-container class=\"column-description-panel\" [ngIf]=\"getDescriptionPanel(column.id)\" *ngTemplateOutlet=\"getDescriptionPanel(column.id); context: { column: column}\" ></ng-container>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".root{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;height:100%}.has-gradient-text{background:-webkit-linear-gradient(#13f7f4,#2af598);-webkit-text-fill-color:transparent}.board{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-flex:1;flex-grow:1;min-width:0;min-height:0}.board-bar{background-color:rgba(225,222,222,.52);padding:8px 15px}.board-name{font-size:20px;font-weight:700}.board-wrapper{display:-webkit-box;display:flex;-webkit-box-flex:1;flex-grow:1;overflow-x:auto}.board-columns{display:-webkit-box;display:flex;-webkit-box-flex:1;flex-grow:1}.board-column{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-flex:1;flex-grow:1;flex-basis:0;border-radius:4px}.board-column:not(:first-child){margin-left:0}.column-header{font-size:14px;font-weight:500;padding:10px 20px;font-family:Roboto;line-height:1.17;border-left:1px solid #dee0e5;box-shadow:0 3px 7px -3px rgba(5,6,6,.18);margin-bottom:10px}.column-title{text-transform:capitalize;color:#656c79}.column-title-items{line-height:1.67;font-size:12px;color:#acb3bf;float:right}.tasks-container{-webkit-box-flex:1;flex-grow:1;overflow-y:auto}.task{display:-webkit-box;display:flex}.task.cdk-drag-preview{opacity:.9}.task-selected{border-color:#2a7cff}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating,.tasks-container.cdk-drop-list-dragging .task:not(.cdk-drag-placeholder){-webkit-transition:-webkit-transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}.board-column.collapsed{min-width:37px!important;padding:0;margin:0 10px;flex-basis:0;-webkit-box-flex:0;flex-grow:0}.board-column.collapsed>.column-action-panel,.board-column.collapsed>.column-description-panel,.board-column.collapsed>.column-header,.board-column.collapsed>.column-header-template,.board-column.collapsed>.tasks-container{display:none}.column-header-collapsed{display:contents;height:100%}.column-header-collapsed-line{background-color:#acb3bf;width:1px;margin:0 auto}.column-header-collapsed-line-1{margin-top:8px;margin-bottom:8px;height:80px}.column-header-collapsed-line-2{margin-top:8px;height:100%}.column-header-collapsed-text{-webkit-transform:rotate(90deg);transform:rotate(90deg);margin:0 auto;text-transform:capitalize;color:#656c79;font-size:14px;font-weight:500;font-family:Roboto}"]
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
        hasVerticalScroll: [{ type: Input }],
        heightContainer: [{ type: Input }],
        actionPanelTemplates: [{ type: Input }],
        descriptionPanelTemplates: [{ type: Input }],
        columnWidth: [{ type: Input }],
        draggedItem: [{ type: Output }],
        onclickItem: [{ type: Output }],
        ondblclickItem: [{ type: Output }],
        selectionChange: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsKanbanComponent.prototype, "multiselect", void 0);
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
    CmacsKanbanComponent.prototype.draggedItem;
    /** @type {?} */
    CmacsKanbanComponent.prototype.onclickItem;
    /** @type {?} */
    CmacsKanbanComponent.prototype.ondblclickItem;
    /** @type {?} */
    CmacsKanbanComponent.prototype.selectionChange;
    /** @type {?} */
    CmacsKanbanComponent.prototype.selectedItems;
    /** @type {?} */
    CmacsKanbanComponent.prototype.dragStartedColumn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mta2FuYmFuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mta2FuYmFuL2NtYWNzLWthbmJhbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFlBQVksRUFFWixNQUFNLEVBQ04sS0FBSyxFQUNMLGlCQUFpQixFQUVqQixXQUFXLEVBQ2QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFlLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXpGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0M7SUErQ0k7UUFuQ3lCLGdCQUFXLEdBQUcsS0FBSyxDQUFDOzs7Ozs7UUFPcEMsaUJBQVksR0FBcUIsSUFBSSxDQUFDO1FBQ3RDLGtCQUFhLEdBQTJCLElBQUksQ0FBQzs7OztRQUc3Qyx5QkFBb0IsR0FBcUIsSUFBSSxDQUFDOzs7O1FBRzlDLGtDQUE2QixHQUFxQixJQUFJLENBQUM7O1FBR3ZDLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUMxQyxvQkFBZSxHQUFHLE9BQU8sQ0FBQzs7OztRQUcxQix5QkFBb0IsR0FBNEIsSUFBSSxDQUFDO1FBQ3JELDhCQUF5QixHQUE0QixJQUFJLENBQUM7UUFLekQsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ3pDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN6QyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDNUMsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBZ0IsQ0FBQztRQUU3RCxrQkFBYSxHQUFrQixFQUFFLENBQUM7UUFDbEMsc0JBQWlCLEdBQWlCLElBQUksQ0FBQztJQUV2QixDQUFDOzs7O0lBRWpCLHVDQUFROzs7SUFBUjtJQUVB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OztJQU83Qyw0Q0FBK0M7O0lBQy9DLDZDQUFzRDs7Ozs7SUFHdEQsb0RBQXVEOzs7OztJQUd2RCw2REFBZ0U7O0lBR2hFLGlEQUFtRDs7SUFDbkQsK0NBQW1DOzs7OztJQUduQyxvREFBOEQ7O0lBQzlELHlEQUFtRTs7SUFHbkUsMkNBQTZCOztJQUU3QiwyQ0FBbUQ7O0lBQ25ELDJDQUFtRDs7SUFDbkQsOENBQXNEOztJQUN0RCwrQ0FBNkQ7O0lBRTdELDZDQUFrQzs7SUFDbEMsaURBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gICAgT3V0cHV0LFxyXG4gICAgSW5wdXQsXHJcbiAgICBWaWV3RW5jYXBzdWxhdGlvbixcclxuICAgIE9uSW5pdCxcclxuICAgIFRlbXBsYXRlUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXksIHRyYW5zZmVyQXJyYXlJdGVtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XHJcbmltcG9ydCB7IEthbmJhbkJvYXJkLCBLYW5iYW5Db2x1bW4sIEthbmJhbkl0ZW0sIEthbmJhbkNvbHVtblRlbXBsYXRlIH0gZnJvbSAnLi9jbWFjcy1rYW5iYW4tZGVmaW5pdGlvbnMnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjbWFjcy1rYW5iYW4nLFxyXG4gICAgZXhwb3J0QXM6ICdjbWFjc0thbmJhbicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mta2FuYmFuLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2NtYWNzLWthbmJhbi5jb21wb25lbnQuY3NzJ10sXHJcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ21hY3NLYW5iYW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIC8qKiBJdGVtcyB0byBkaXNwbGF5ICAqL1xyXG4gICAgQElucHV0KCkgYm9hcmQ6IEthbmJhbkJvYXJkO1xyXG4gICAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG11bHRpc2VsZWN0ID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUZW1wbGF0ZSBmb3IgaXRlbXMgdG8gcmVuZGVyLiBcIml0ZW1cIiBvYmplY3QgaXN0IHBhc3NlZCAoc2VlIGV4YW1wbGVzKVxyXG4gICAgICogaXRlbVRlbXBsYXRlIGlzIGZvciBlYWNoIGNvbHVtblxyXG4gICAgICogaXRlbVRlbXBsYXRlcyBpcyBmb3IgY2hhbmdlIHRoZSB0ZW1wbGF0ZSBvZiBhIGNvbHVtblxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKSBpdGVtVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gPSBudWxsO1xyXG4gICAgQElucHV0KCkgaXRlbVRlbXBsYXRlczogS2FuYmFuQ29sdW1uVGVtcGxhdGVbXSA9IG51bGw7XHJcblxyXG4gICAgLyoqIFRlbXBsYXRlIGZvciBjb2x1bW4gaGVhZGVycy4gQ3VycmVudCBncm91cE5hbWUgd2lsbCBiZSBwYXNzZWQgKHNlZSBleGFtcGxlcykgKi9cclxuICAgIEBJbnB1dCgpIGNvbHVtbkhlYWRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+ID0gbnVsbDtcclxuXHJcbiAgICAvKiogVGVtcGxhdGUgZm9yIGNvbHVtbiBoZWFkZXJzLiBDdXJyZW50IGdyb3VwTmFtZSB3aWxsIGJlIHBhc3NlZCAoc2VlIGV4YW1wbGVzKSAqL1xyXG4gICAgQElucHV0KCkgY29sdW1uSGVhZGVyQ29sbGFwc2VkVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gPSBudWxsO1xyXG5cclxuICAgIC8vIHNjcm9sbGluZ1xyXG4gICAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGhhc1ZlcnRpY2FsU2Nyb2xsID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBoZWlnaHRDb250YWluZXIgPSAnNTAwcHgnO1xyXG5cclxuICAgIC8qKiBUZW1wbGF0ZXMgZm9yIGFjdGlvbnMgYW5kIGRlc2NyaXB0aW9uIHBhbmVscyAgKi9cclxuICAgIEBJbnB1dCgpIGFjdGlvblBhbmVsVGVtcGxhdGVzOiBLYW5iYW5Db2x1bW5UZW1wbGF0ZVtdICA9IG51bGw7XHJcbiAgICBASW5wdXQoKSBkZXNjcmlwdGlvblBhbmVsVGVtcGxhdGVzOiBLYW5iYW5Db2x1bW5UZW1wbGF0ZVtdICA9IG51bGw7XHJcblxyXG4gICAgLy8gc3R5bGVzXHJcbiAgICBASW5wdXQoKSBjb2x1bW5XaWR0aDogc3RyaW5nO1xyXG5cclxuICAgIEBPdXRwdXQoKSBkcmFnZ2VkSXRlbSA9IG5ldyBFdmVudEVtaXR0ZXI8b2JqZWN0PigpO1xyXG4gICAgQE91dHB1dCgpIG9uY2xpY2tJdGVtID0gbmV3IEV2ZW50RW1pdHRlcjxvYmplY3Q+KCk7XHJcbiAgICBAT3V0cHV0KCkgb25kYmxjbGlja0l0ZW0gPSBuZXcgRXZlbnRFbWl0dGVyPG9iamVjdD4oKTtcclxuICAgIEBPdXRwdXQoKSBzZWxlY3Rpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEthbmJhbkl0ZW1bXT4oKTtcclxuXHJcbiAgICBzZWxlY3RlZEl0ZW1zOiBLYW5iYW5JdGVtIFtdID0gW107XHJcbiAgICBkcmFnU3RhcnRlZENvbHVtbjogS2FuYmFuQ29sdW1uID0gbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRJdGVtVGVtcGxhdGUoaWQ6IHN0cmluZyk6IFRlbXBsYXRlUmVmPGFueT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmFjdGlvblBhbmVsVGVtcGxhdGVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW0gPSB0aGlzLml0ZW1UZW1wbGF0ZXMuZmluZChpID0+IGkuaWQgPT09IGlkKTtcclxuICAgICAgICAgICAgaWYgKGVsZW0pIHsgcmV0dXJuIGVsZW0udGVtcGxhdGU7IH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbVRlbXBsYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFjdGlvblBhbmVsKGlkOiBzdHJpbmcpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcclxuICAgICAgICBpZiAodGhpcy5hY3Rpb25QYW5lbFRlbXBsYXRlcyA9PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcbiAgICAgICAgY29uc3QgZWxlbSA9IHRoaXMuYWN0aW9uUGFuZWxUZW1wbGF0ZXMuZmluZChkID0+IGQuaWQgPT09IGlkKTtcclxuICAgICAgICByZXR1cm4gZWxlbSA/IGVsZW0udGVtcGxhdGUgOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERlc2NyaXB0aW9uUGFuZWwoaWQ6IHN0cmluZyk6IFRlbXBsYXRlUmVmPGFueT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmRlc2NyaXB0aW9uUGFuZWxUZW1wbGF0ZXMgPT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG4gICAgICAgIGNvbnN0IGVsZW0gPSB0aGlzLmRlc2NyaXB0aW9uUGFuZWxUZW1wbGF0ZXMuZmluZChkID0+IGQuaWQgPT09IGlkKTtcclxuICAgICAgICByZXR1cm4gZWxlbSA/IGVsZW0udGVtcGxhdGUgOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHZlcnRpY2FsU2Nyb2xsU3R5bGUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuaGFzVmVydGljYWxTY3JvbGwpID8geyBoZWlnaHQ6IHRoaXMuaGVpZ2h0Q29udGFpbmVyfSA6IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbHVtblN0eWxlKGNvbGxhcHNlZDogYm9vbGVhbik6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmNvbHVtbldpZHRoICYmICFjb2xsYXBzZWQpID8geyBtaW5XaWR0aDogdGhpcy5jb2x1bW5XaWR0aH0gOiB7fTtcclxuICAgIH1cclxuXHJcbiAgICBjb2x1bW5FeHBhbmQoY29sdW1uOiBLYW5iYW5Db2x1bW4pOiBhbnkge1xyXG4gICAgICAgIGNvbHVtbi5jb2xsYXBzZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXREcmFnU3RhcnRlZENvbHVtbihjb2w6IEthbmJhbkNvbHVtbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZHJhZ1N0YXJ0ZWRDb2x1bW4gPSBjb2w7XHJcbiAgICB9XHJcblxyXG4gICAgZHJvcChldmVudDogQ2RrRHJhZ0Ryb3A8c3RyaW5nW10+LCBjb2x1bW5JZDogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIGlmIChldmVudC5wcmV2aW91c0NvbnRhaW5lciA9PT0gZXZlbnQuY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIG1vdmVJdGVtSW5BcnJheShldmVudC5jb250YWluZXIuZGF0YSwgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcclxuICAgICAgICAgICAgdGhpcy5lbWl0RHJvcHBlZEl0ZW0oZXZlbnQuaXRlbS5kYXRhLCBjb2x1bW5JZCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmRyYWdTdGFydGVkQ29sdW1uLmRpc2FibGVkRHJvcCB8fCAhdGhpcy5kcmFnU3RhcnRlZENvbHVtbi5kaXNhYmxlZERyb3Auc29tZShpZCA9PiBpZCA9PT0gY29sdW1uSWQpKSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2ZlckFycmF5SXRlbShldmVudC5wcmV2aW91c0NvbnRhaW5lci5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmNvbnRhaW5lci5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZpb3VzSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuY3VycmVudEluZGV4KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW1pdERyb3BwZWRJdGVtKGV2ZW50Lml0ZW0uZGF0YSwgY29sdW1uSWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZHJhZ1N0YXJ0ZWRDb2x1bW4gPSBudWxsO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBlbWl0RHJvcHBlZEl0ZW0oZGF0YTogYW55LCBjb2x1bW5JZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgZGF0YS5jb2x1bW5JZCA9IGNvbHVtbklkO1xyXG4gICAgICAgIHRoaXMuZHJhZ2dlZEl0ZW0uZW1pdChkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGlja0l0ZW0oaXRlbTogS2FuYmFuSXRlbSwgY29sdW1uSWQ6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYm9hcmQpO1xyXG4gICAgICAgIGl0ZW0uY29sdW1uSWQgPSBjb2x1bW5JZDtcclxuICAgICAgICB0aGlzLm9uY2xpY2tJdGVtLmVtaXQoaXRlbSk7XHJcblxyXG4gICAgICAgIC8vIGFkZCBvciByZW1vdmUgZWxlbWVudHMgdG8gc2VsZWN0ZWQgaXRlbXNcclxuICAgICAgICBpZiAoIWl0ZW0uZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgaWR4ID0gdGhpcy5zZWxlY3RlZEl0ZW1zLmZpbmRJbmRleChlbGVtID0+IGVsZW0uaWQgPT09IGl0ZW0uaWQpO1xyXG4gICAgICAgICAgICBpZiAoaWR4ID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLm11bHRpc2VsZWN0KSB7IHRoaXMuc2VsZWN0ZWRJdGVtcyA9IFtdOyB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5zcGxpY2UoaWR4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWRJdGVtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRibGNsaWNrSXRlbShpdGVtOiBLYW5iYW5JdGVtLCBjb2x1bW5JZDogc3RyaW5nKSB7XHJcbiAgICAgICAgaXRlbS5jb2x1bW5JZCA9IGNvbHVtbklkO1xyXG4gICAgICAgIHRoaXMub25kYmxjbGlja0l0ZW0uZW1pdChpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0l0ZW1TZWxlY3RlZChpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRJdGVtcy5zb21lKGVsZW0gPT4gZWxlbS5pZCA9PT0gaWQpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==