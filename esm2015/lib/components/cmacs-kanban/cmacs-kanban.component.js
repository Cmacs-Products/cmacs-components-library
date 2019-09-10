/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, Output, Input, ViewEncapsulation, TemplateRef } from '@angular/core';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { InputBoolean } from 'ng-zorro-antd';
export class CmacsKanbanComponent {
    constructor() {
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
    ngOnInit() {
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getItemTemplate(id) {
        if (this.actionPanelTemplates) {
            /** @type {?} */
            const elem = this.itemTemplates.find((/**
             * @param {?} i
             * @return {?}
             */
            i => i.id === id));
            if (elem) {
                return elem.template;
            }
        }
        return this.itemTemplate;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getActionPanel(id) {
        if (this.actionPanelTemplates == null) {
            return null;
        }
        /** @type {?} */
        const elem = this.actionPanelTemplates.find((/**
         * @param {?} d
         * @return {?}
         */
        d => d.id === id));
        return elem ? elem.template : null;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getDescriptionPanel(id) {
        if (this.descriptionPanelTemplates == null) {
            return null;
        }
        /** @type {?} */
        const elem = this.descriptionPanelTemplates.find((/**
         * @param {?} d
         * @return {?}
         */
        d => d.id === id));
        return elem ? elem.template : null;
    }
    /**
     * @return {?}
     */
    verticalScrollStyle() {
        return (this.hasVerticalScroll) ? { height: this.heightContainer } : {};
    }
    /**
     * @param {?} collapsed
     * @return {?}
     */
    columnStyle(collapsed) {
        return (this.columnWidth && !collapsed) ? { minWidth: this.columnWidth } : {};
    }
    /**
     * @param {?} column
     * @return {?}
     */
    columnExpand(column) {
        column.collapsed = false;
    }
    /**
     * @param {?} col
     * @return {?}
     */
    setDragStartedColumn(col) {
        this.dragStartedColumn = col;
    }
    /**
     * @param {?} event
     * @param {?} columnId
     * @return {?}
     */
    drop(event, columnId) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
            this.emitDroppedItem(event.item.data, columnId);
        }
        else {
            if (!this.dragStartedColumn.disabledDrop || !this.dragStartedColumn.disabledDrop.some((/**
             * @param {?} id
             * @return {?}
             */
            id => id === columnId))) {
                transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
                this.emitDroppedItem(event.item.data, columnId);
            }
        }
        this.dragStartedColumn = null;
    }
    /**
     * @private
     * @param {?} data
     * @param {?} columnId
     * @return {?}
     */
    emitDroppedItem(data, columnId) {
        data.columnId = columnId;
        this.draggedItem.emit(data);
    }
    /**
     * @param {?} item
     * @param {?} columnId
     * @return {?}
     */
    clickItem(item, columnId) {
        console.log(this.board);
        item.columnId = columnId;
        this.onclickItem.emit(item);
        // add or remove elements to selected items
        if (!item.disabled) {
            /** @type {?} */
            const idx = this.selectedItems.findIndex((/**
             * @param {?} elem
             * @return {?}
             */
            elem => elem.id === item.id));
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
    }
    /**
     * @param {?} item
     * @param {?} columnId
     * @return {?}
     */
    dblclickItem(item, columnId) {
        item.columnId = columnId;
        this.ondblclickItem.emit(item);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    isItemSelected(id) {
        return this.selectedItems.some((/**
         * @param {?} elem
         * @return {?}
         */
        elem => elem.id === id));
    }
}
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
CmacsKanbanComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mta2FuYmFuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mta2FuYmFuL2NtYWNzLWthbmJhbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFlBQVksRUFFWixNQUFNLEVBQ04sS0FBSyxFQUNMLGlCQUFpQixFQUVqQixXQUFXLEVBQ2QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFlLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXpGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFVN0MsTUFBTSxPQUFPLG9CQUFvQjtJQXVDN0I7UUFuQ3lCLGdCQUFXLEdBQUcsS0FBSyxDQUFDOzs7Ozs7UUFPcEMsaUJBQVksR0FBcUIsSUFBSSxDQUFDO1FBQ3RDLGtCQUFhLEdBQTJCLElBQUksQ0FBQzs7OztRQUc3Qyx5QkFBb0IsR0FBcUIsSUFBSSxDQUFDOzs7O1FBRzlDLGtDQUE2QixHQUFxQixJQUFJLENBQUM7O1FBR3ZDLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUMxQyxvQkFBZSxHQUFHLE9BQU8sQ0FBQzs7OztRQUcxQix5QkFBb0IsR0FBNEIsSUFBSSxDQUFDO1FBQ3JELDhCQUF5QixHQUE0QixJQUFJLENBQUM7UUFLekQsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ3pDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN6QyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDNUMsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBZ0IsQ0FBQztRQUU3RCxrQkFBYSxHQUFrQixFQUFFLENBQUM7UUFDbEMsc0JBQWlCLEdBQWlCLElBQUksQ0FBQztJQUV2QixDQUFDOzs7O0lBRWpC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LGlEQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICAgIE91dHB1dCxcclxuICAgIElucHV0LFxyXG4gICAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbiAgICBPbkluaXQsXHJcbiAgICBUZW1wbGF0ZVJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5LCB0cmFuc2ZlckFycmF5SXRlbSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xyXG5pbXBvcnQgeyBLYW5iYW5Cb2FyZCwgS2FuYmFuQ29sdW1uLCBLYW5iYW5JdGVtLCBLYW5iYW5Db2x1bW5UZW1wbGF0ZSB9IGZyb20gJy4vY21hY3Mta2FuYmFuLWRlZmluaXRpb25zJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnY21hY3Mta2FuYmFuJyxcclxuICAgIGV4cG9ydEFzOiAnY21hY3NLYW5iYW4nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWthbmJhbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9jbWFjcy1rYW5iYW4uY29tcG9uZW50LmNzcyddLFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENtYWNzS2FuYmFuQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICAvKiogSXRlbXMgdG8gZGlzcGxheSAgKi9cclxuICAgIEBJbnB1dCgpIGJvYXJkOiBLYW5iYW5Cb2FyZDtcclxuICAgIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBtdWx0aXNlbGVjdCA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGVtcGxhdGUgZm9yIGl0ZW1zIHRvIHJlbmRlci4gXCJpdGVtXCIgb2JqZWN0IGlzdCBwYXNzZWQgKHNlZSBleGFtcGxlcylcclxuICAgICAqIGl0ZW1UZW1wbGF0ZSBpcyBmb3IgZWFjaCBjb2x1bW5cclxuICAgICAqIGl0ZW1UZW1wbGF0ZXMgaXMgZm9yIGNoYW5nZSB0aGUgdGVtcGxhdGUgb2YgYSBjb2x1bW5cclxuICAgICAqL1xyXG4gICAgQElucHV0KCkgaXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+ID0gbnVsbDtcclxuICAgIEBJbnB1dCgpIGl0ZW1UZW1wbGF0ZXM6IEthbmJhbkNvbHVtblRlbXBsYXRlW10gPSBudWxsO1xyXG5cclxuICAgIC8qKiBUZW1wbGF0ZSBmb3IgY29sdW1uIGhlYWRlcnMuIEN1cnJlbnQgZ3JvdXBOYW1lIHdpbGwgYmUgcGFzc2VkIChzZWUgZXhhbXBsZXMpICovXHJcbiAgICBASW5wdXQoKSBjb2x1bW5IZWFkZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiA9IG51bGw7XHJcblxyXG4gICAgLyoqIFRlbXBsYXRlIGZvciBjb2x1bW4gaGVhZGVycy4gQ3VycmVudCBncm91cE5hbWUgd2lsbCBiZSBwYXNzZWQgKHNlZSBleGFtcGxlcykgKi9cclxuICAgIEBJbnB1dCgpIGNvbHVtbkhlYWRlckNvbGxhcHNlZFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+ID0gbnVsbDtcclxuXHJcbiAgICAvLyBzY3JvbGxpbmdcclxuICAgIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBoYXNWZXJ0aWNhbFNjcm9sbCA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgaGVpZ2h0Q29udGFpbmVyID0gJzUwMHB4JztcclxuXHJcbiAgICAvKiogVGVtcGxhdGVzIGZvciBhY3Rpb25zIGFuZCBkZXNjcmlwdGlvbiBwYW5lbHMgICovXHJcbiAgICBASW5wdXQoKSBhY3Rpb25QYW5lbFRlbXBsYXRlczogS2FuYmFuQ29sdW1uVGVtcGxhdGVbXSAgPSBudWxsO1xyXG4gICAgQElucHV0KCkgZGVzY3JpcHRpb25QYW5lbFRlbXBsYXRlczogS2FuYmFuQ29sdW1uVGVtcGxhdGVbXSAgPSBudWxsO1xyXG5cclxuICAgIC8vIHN0eWxlc1xyXG4gICAgQElucHV0KCkgY29sdW1uV2lkdGg6IHN0cmluZztcclxuXHJcbiAgICBAT3V0cHV0KCkgZHJhZ2dlZEl0ZW0gPSBuZXcgRXZlbnRFbWl0dGVyPG9iamVjdD4oKTtcclxuICAgIEBPdXRwdXQoKSBvbmNsaWNrSXRlbSA9IG5ldyBFdmVudEVtaXR0ZXI8b2JqZWN0PigpO1xyXG4gICAgQE91dHB1dCgpIG9uZGJsY2xpY2tJdGVtID0gbmV3IEV2ZW50RW1pdHRlcjxvYmplY3Q+KCk7XHJcbiAgICBAT3V0cHV0KCkgc2VsZWN0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxLYW5iYW5JdGVtW10+KCk7XHJcblxyXG4gICAgc2VsZWN0ZWRJdGVtczogS2FuYmFuSXRlbSBbXSA9IFtdO1xyXG4gICAgZHJhZ1N0YXJ0ZWRDb2x1bW46IEthbmJhbkNvbHVtbiA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SXRlbVRlbXBsYXRlKGlkOiBzdHJpbmcpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcclxuICAgICAgICBpZiAodGhpcy5hY3Rpb25QYW5lbFRlbXBsYXRlcykge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtID0gdGhpcy5pdGVtVGVtcGxhdGVzLmZpbmQoaSA9PiBpLmlkID09PSBpZCk7XHJcbiAgICAgICAgICAgIGlmIChlbGVtKSB7IHJldHVybiBlbGVtLnRlbXBsYXRlOyB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1UZW1wbGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBY3Rpb25QYW5lbChpZDogc3RyaW5nKTogVGVtcGxhdGVSZWY8YW55PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aW9uUGFuZWxUZW1wbGF0ZXMgPT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG4gICAgICAgIGNvbnN0IGVsZW0gPSB0aGlzLmFjdGlvblBhbmVsVGVtcGxhdGVzLmZpbmQoZCA9PiBkLmlkID09PSBpZCk7XHJcbiAgICAgICAgcmV0dXJuIGVsZW0gPyBlbGVtLnRlbXBsYXRlIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXREZXNjcmlwdGlvblBhbmVsKGlkOiBzdHJpbmcpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcclxuICAgICAgICBpZiAodGhpcy5kZXNjcmlwdGlvblBhbmVsVGVtcGxhdGVzID09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuICAgICAgICBjb25zdCBlbGVtID0gdGhpcy5kZXNjcmlwdGlvblBhbmVsVGVtcGxhdGVzLmZpbmQoZCA9PiBkLmlkID09PSBpZCk7XHJcbiAgICAgICAgcmV0dXJuIGVsZW0gPyBlbGVtLnRlbXBsYXRlIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB2ZXJ0aWNhbFNjcm9sbFN0eWxlKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmhhc1ZlcnRpY2FsU2Nyb2xsKSA/IHsgaGVpZ2h0OiB0aGlzLmhlaWdodENvbnRhaW5lcn0gOiB7fTtcclxuICAgIH1cclxuXHJcbiAgICBjb2x1bW5TdHlsZShjb2xsYXBzZWQ6IGJvb2xlYW4pOiBhbnkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5jb2x1bW5XaWR0aCAmJiAhY29sbGFwc2VkKSA/IHsgbWluV2lkdGg6IHRoaXMuY29sdW1uV2lkdGh9IDoge307XHJcbiAgICB9XHJcblxyXG4gICAgY29sdW1uRXhwYW5kKGNvbHVtbjogS2FuYmFuQ29sdW1uKTogYW55IHtcclxuICAgICAgICBjb2x1bW4uY29sbGFwc2VkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RHJhZ1N0YXJ0ZWRDb2x1bW4oY29sOiBLYW5iYW5Db2x1bW4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRyYWdTdGFydGVkQ29sdW1uID0gY29sO1xyXG4gICAgfVxyXG5cclxuICAgIGRyb3AoZXZlbnQ6IENka0RyYWdEcm9wPHN0cmluZ1tdPiwgY29sdW1uSWQ6IHN0cmluZykge1xyXG5cclxuICAgICAgICBpZiAoZXZlbnQucHJldmlvdXNDb250YWluZXIgPT09IGV2ZW50LmNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBtb3ZlSXRlbUluQXJyYXkoZXZlbnQuY29udGFpbmVyLmRhdGEsIGV2ZW50LnByZXZpb3VzSW5kZXgsIGV2ZW50LmN1cnJlbnRJbmRleCk7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdERyb3BwZWRJdGVtKGV2ZW50Lml0ZW0uZGF0YSwgY29sdW1uSWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5kcmFnU3RhcnRlZENvbHVtbi5kaXNhYmxlZERyb3AgfHwgIXRoaXMuZHJhZ1N0YXJ0ZWRDb2x1bW4uZGlzYWJsZWREcm9wLnNvbWUoaWQgPT4gaWQgPT09IGNvbHVtbklkKSkge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmZXJBcnJheUl0ZW0oZXZlbnQucHJldmlvdXNDb250YWluZXIuZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5jb250YWluZXIuZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2aW91c0luZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRJbmRleCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXREcm9wcGVkSXRlbShldmVudC5pdGVtLmRhdGEsIGNvbHVtbklkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRyYWdTdGFydGVkQ29sdW1uID0gbnVsbDtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZW1pdERyb3BwZWRJdGVtKGRhdGE6IGFueSwgY29sdW1uSWQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGRhdGEuY29sdW1uSWQgPSBjb2x1bW5JZDtcclxuICAgICAgICB0aGlzLmRyYWdnZWRJdGVtLmVtaXQoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2tJdGVtKGl0ZW06IEthbmJhbkl0ZW0sIGNvbHVtbklkOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmJvYXJkKTtcclxuICAgICAgICBpdGVtLmNvbHVtbklkID0gY29sdW1uSWQ7XHJcbiAgICAgICAgdGhpcy5vbmNsaWNrSXRlbS5lbWl0KGl0ZW0pO1xyXG5cclxuICAgICAgICAvLyBhZGQgb3IgcmVtb3ZlIGVsZW1lbnRzIHRvIHNlbGVjdGVkIGl0ZW1zXHJcbiAgICAgICAgaWYgKCFpdGVtLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkeCA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5maW5kSW5kZXgoZWxlbSA9PiBlbGVtLmlkID09PSBpdGVtLmlkKTtcclxuICAgICAgICAgICAgaWYgKGlkeCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5tdWx0aXNlbGVjdCkgeyB0aGlzLnNlbGVjdGVkSXRlbXMgPSBbXTsgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMuc3BsaWNlKGlkeCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkSXRlbXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkYmxjbGlja0l0ZW0oaXRlbTogS2FuYmFuSXRlbSwgY29sdW1uSWQ6IHN0cmluZykge1xyXG4gICAgICAgIGl0ZW0uY29sdW1uSWQgPSBjb2x1bW5JZDtcclxuICAgICAgICB0aGlzLm9uZGJsY2xpY2tJdGVtLmVtaXQoaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNJdGVtU2VsZWN0ZWQoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSXRlbXMuc29tZShlbGVtID0+IGVsZW0uaWQgPT09IGlkKTtcclxuICAgIH1cclxufVxyXG4iXX0=