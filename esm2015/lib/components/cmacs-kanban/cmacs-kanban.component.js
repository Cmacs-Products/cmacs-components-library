/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, ChangeDetectionStrategy, Output, Input, ViewEncapsulation, TemplateRef } from '@angular/core';
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
     * @return {?}
     */
    columnStyle() {
        return (this.columnWidth) ? { minWidth: this.columnWidth } : {};
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
        event.item.data.columnId = columnId;
        this.draggedItem.emit(event.item.data);
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            if (!this.dragStartedColumn.disabledDrop || !this.dragStartedColumn.disabledDrop.some((/**
             * @param {?} id
             * @return {?}
             */
            id => id === columnId))) {
                transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            }
        }
        this.dragStartedColumn = null;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    clickItem(item) {
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
     * @return {?}
     */
    dblclickItem(item) {
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
                template: "<div class=\"root\">\r\n    <div class=\"board\">\r\n      <div class=\"board-wrapper\">\r\n        <div class=\"board-columns\" cdkDropListGroup>\r\n          <div class=\"board-column\" *ngFor=\"let column of board.columns\" [ngStyle]=\"columnStyle()\" [ngClass]=\"column.class\">\r\n            <ng-container [ngIf]=\"columnHeaderTemplate\" *ngTemplateOutlet=\"columnHeaderTemplate; context: { column: column}\" ></ng-container>\r\n            <div class=\"column-header\" *ngIf=\"!columnHeaderTemplate\">\r\n              <span class=\"column-title\">{{column.name}}</span>\r\n              <span class=\"column-title-items\">{{column.items.length}} Items</span>\r\n            </div>\r\n            <ng-container [ngIf]=\"getActionPanel(column.id)\" *ngTemplateOutlet=\"getActionPanel(column.id); context: { column: column}\" ></ng-container>\r\n            <div class=\"tasks-container\" cdkDropList [cdkDropListData]=\"column.items\"\r\n            (cdkDropListDropped)=\"drop($event, column.id)\" [ngStyle]=\"verticalScrollStyle()\">\r\n              <div class=\"task\" *ngFor=\"let item of column.items\" \r\n                   cdkDrag \r\n                   [cdkDragData]=\"item\"\r\n                   [cdkDragDisabled]=\"item.disabled\"\r\n                   (cdkDragStarted)=\"setDragStartedColumn(column)\"\r\n                   (click)=\"clickItem(item)\"\r\n                   (dblclick)=\"dblclickItem(item)\"\r\n                   [class.task-selected]=\"isItemSelected(item.id)\"\r\n              >\r\n                <ng-container *ngTemplateOutlet=\"getItemTemplate(column.id); context: {item: item}\"></ng-container>\r\n              </div>\r\n            </div>\r\n            <ng-container [ngIf]=\"getDescriptionPanel(column.id)\" *ngTemplateOutlet=\"getDescriptionPanel(column.id); context: { column: column}\" ></ng-container>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".root{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;height:100%}.has-gradient-text{background:-webkit-linear-gradient(#13f7f4,#2af598);-webkit-text-fill-color:transparent}.board{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-flex:1;flex-grow:1;min-width:0;min-height:0}.board-bar{background-color:rgba(225,222,222,.52);padding:8px 15px}.board-name{font-size:20px;font-weight:700}.board-wrapper{display:-webkit-box;display:flex;-webkit-box-flex:1;flex-grow:1;overflow-x:auto}.board-columns{display:-webkit-box;display:flex;-webkit-box-flex:1;flex-grow:1}.board-column{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-flex:1;flex-grow:1;flex-basis:0;border-radius:4px}.board-column:not(:first-child){margin-left:0}.column-header{font-size:14px;font-weight:500;padding:10px 20px;font-family:Roboto;line-height:1.17;border-left:1px solid #dee0e5;box-shadow:0 3px 7px -3px rgba(5,6,6,.18);margin-bottom:10px}.column-title{text-transform:capitalize;color:#656c79}.column-title-items{line-height:1.67;font-size:12px;color:#acb3bf;float:right}.tasks-container{-webkit-box-flex:1;flex-grow:1;overflow-y:auto}.task{display:-webkit-box;display:flex}.task.cdk-drag-preview{opacity:.9}.task-selected{border-color:#2a7cff}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating,.tasks-container.cdk-drop-list-dragging .task:not(.cdk-drag-placeholder){-webkit-transition:-webkit-transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mta2FuYmFuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mta2FuYmFuL2NtYWNzLWthbmJhbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFlBQVksRUFDWix1QkFBdUIsRUFDdkIsTUFBTSxFQUNOLEtBQUssRUFDTCxpQkFBaUIsRUFFakIsV0FBVyxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBZSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV6RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBVzdDLE1BQU0sT0FBTyxvQkFBb0I7SUFvQzdCO1FBaEN5QixnQkFBVyxHQUFHLEtBQUssQ0FBQzs7Ozs7O1FBT3BDLGlCQUFZLEdBQXFCLElBQUksQ0FBQztRQUN0QyxrQkFBYSxHQUEyQixJQUFJLENBQUM7Ozs7UUFHN0MseUJBQW9CLEdBQXFCLElBQUksQ0FBQzs7UUFHOUIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFDLG9CQUFlLEdBQUcsT0FBTyxDQUFDOzs7O1FBRzFCLHlCQUFvQixHQUE0QixJQUFJLENBQUM7UUFDckQsOEJBQXlCLEdBQTRCLElBQUksQ0FBQztRQUt6RCxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDekMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ3pDLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUM1QyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFnQixDQUFDO1FBRTdELGtCQUFhLEdBQWtCLEVBQUUsQ0FBQztRQUNsQyxzQkFBaUIsR0FBaUIsSUFBSSxDQUFDO0lBRXZCLENBQUM7Ozs7SUFFakIsUUFBUTtJQUVSLENBQUM7Ozs7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L0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3hDOzs7OztvQkFLSSxLQUFLOzBCQUNMLEtBQUs7MkJBT0wsS0FBSzs0QkFDTCxLQUFLO21DQUdMLEtBQUs7Z0NBR0wsS0FBSzs4QkFDTCxLQUFLO21DQUdMLEtBQUs7d0NBQ0wsS0FBSzswQkFHTCxLQUFLOzBCQUVMLE1BQU07MEJBQ04sTUFBTTs2QkFDTixNQUFNOzhCQUNOLE1BQU07O0FBM0JrQjtJQUFmLFlBQVksRUFBRTs7eURBQXFCO0FBY3BCO0lBQWYsWUFBWSxFQUFFOzsrREFBMkI7Ozs7OztJQWZuRCxxQ0FBNEI7O0lBQzVCLDJDQUE2Qzs7Ozs7OztJQU83Qyw0Q0FBK0M7O0lBQy9DLDZDQUFzRDs7Ozs7SUFHdEQsb0RBQXVEOztJQUd2RCxpREFBbUQ7O0lBQ25ELCtDQUFtQzs7Ozs7SUFHbkMsb0RBQThEOztJQUM5RCx5REFBbUU7O0lBR25FLDJDQUE2Qjs7SUFFN0IsMkNBQW1EOztJQUNuRCwyQ0FBbUQ7O0lBQ25ELDhDQUFzRDs7SUFDdEQsK0NBQTZEOztJQUU3RCw2Q0FBa0M7O0lBQ2xDLGlEQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICAgIE91dHB1dCxcclxuICAgIElucHV0LFxyXG4gICAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbiAgICBPbkluaXQsXHJcbiAgICBUZW1wbGF0ZVJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5LCB0cmFuc2ZlckFycmF5SXRlbSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xyXG5pbXBvcnQgeyBLYW5iYW5Cb2FyZCwgS2FuYmFuQ29sdW1uLCBLYW5iYW5JdGVtLCBLYW5iYW5Db2x1bW5UZW1wbGF0ZSB9IGZyb20gJy4vY21hY3Mta2FuYmFuLWRlZmluaXRpb25zJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnY21hY3Mta2FuYmFuJyxcclxuICAgIGV4cG9ydEFzOiAnY21hY3NLYW5iYW4nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWthbmJhbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9jbWFjcy1rYW5iYW4uY29tcG9uZW50LmNzcyddLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ21hY3NLYW5iYW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIC8qKiBJdGVtcyB0byBkaXNwbGF5ICAqL1xyXG4gICAgQElucHV0KCkgYm9hcmQ6IEthbmJhbkJvYXJkO1xyXG4gICAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG11bHRpc2VsZWN0ID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUZW1wbGF0ZSBmb3IgaXRlbXMgdG8gcmVuZGVyLiBcIml0ZW1cIiBvYmplY3QgaXN0IHBhc3NlZCAoc2VlIGV4YW1wbGVzKVxyXG4gICAgICogaXRlbVRlbXBsYXRlIGlzIGZvciBlYWNoIGNvbHVtblxyXG4gICAgICogaXRlbVRlbXBsYXRlcyBpcyBmb3IgY2hhbmdlIHRoZSB0ZW1wbGF0ZSBvZiBhIGNvbHVtblxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKSBpdGVtVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gPSBudWxsO1xyXG4gICAgQElucHV0KCkgaXRlbVRlbXBsYXRlczogS2FuYmFuQ29sdW1uVGVtcGxhdGVbXSA9IG51bGw7XHJcblxyXG4gICAgLyoqIFRlbXBsYXRlIGZvciBjb2x1bW4gaGVhZGVycy4gQ3VycmVudCBncm91cE5hbWUgd2lsbCBiZSBwYXNzZWQgKHNlZSBleGFtcGxlcykgKi9cclxuICAgIEBJbnB1dCgpIGNvbHVtbkhlYWRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+ID0gbnVsbDtcclxuXHJcbiAgICAvLyBzY3JvbGxpbmdcclxuICAgIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBoYXNWZXJ0aWNhbFNjcm9sbCA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgaGVpZ2h0Q29udGFpbmVyID0gJzUwMHB4JztcclxuXHJcbiAgICAvKiogVGVtcGxhdGVzIGZvciBhY3Rpb25zIGFuZCBkZXNjcmlwdGlvbiBwYW5lbHMgICovXHJcbiAgICBASW5wdXQoKSBhY3Rpb25QYW5lbFRlbXBsYXRlczogS2FuYmFuQ29sdW1uVGVtcGxhdGVbXSAgPSBudWxsO1xyXG4gICAgQElucHV0KCkgZGVzY3JpcHRpb25QYW5lbFRlbXBsYXRlczogS2FuYmFuQ29sdW1uVGVtcGxhdGVbXSAgPSBudWxsO1xyXG5cclxuICAgIC8vIHN0eWxlc1xyXG4gICAgQElucHV0KCkgY29sdW1uV2lkdGg6IHN0cmluZztcclxuXHJcbiAgICBAT3V0cHV0KCkgZHJhZ2dlZEl0ZW0gPSBuZXcgRXZlbnRFbWl0dGVyPG9iamVjdD4oKTtcclxuICAgIEBPdXRwdXQoKSBvbmNsaWNrSXRlbSA9IG5ldyBFdmVudEVtaXR0ZXI8b2JqZWN0PigpO1xyXG4gICAgQE91dHB1dCgpIG9uZGJsY2xpY2tJdGVtID0gbmV3IEV2ZW50RW1pdHRlcjxvYmplY3Q+KCk7XHJcbiAgICBAT3V0cHV0KCkgc2VsZWN0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxLYW5iYW5JdGVtW10+KCk7XHJcblxyXG4gICAgc2VsZWN0ZWRJdGVtczogS2FuYmFuSXRlbSBbXSA9IFtdO1xyXG4gICAgZHJhZ1N0YXJ0ZWRDb2x1bW46IEthbmJhbkNvbHVtbiA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SXRlbVRlbXBsYXRlKGlkOiBzdHJpbmcpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcclxuICAgICAgICBpZiAodGhpcy5hY3Rpb25QYW5lbFRlbXBsYXRlcykge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtID0gdGhpcy5pdGVtVGVtcGxhdGVzLmZpbmQoaSA9PiBpLmlkID09PSBpZCk7XHJcbiAgICAgICAgICAgIGlmIChlbGVtKSB7IHJldHVybiBlbGVtLnRlbXBsYXRlOyB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1UZW1wbGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBY3Rpb25QYW5lbChpZDogc3RyaW5nKTogVGVtcGxhdGVSZWY8YW55PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aW9uUGFuZWxUZW1wbGF0ZXMgPT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG4gICAgICAgIGNvbnN0IGVsZW0gPSB0aGlzLmFjdGlvblBhbmVsVGVtcGxhdGVzLmZpbmQoZCA9PiBkLmlkID09PSBpZCk7XHJcbiAgICAgICAgcmV0dXJuIGVsZW0gPyBlbGVtLnRlbXBsYXRlIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXREZXNjcmlwdGlvblBhbmVsKGlkOiBzdHJpbmcpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcclxuICAgICAgICBpZiAodGhpcy5kZXNjcmlwdGlvblBhbmVsVGVtcGxhdGVzID09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuICAgICAgICBjb25zdCBlbGVtID0gdGhpcy5kZXNjcmlwdGlvblBhbmVsVGVtcGxhdGVzLmZpbmQoZCA9PiBkLmlkID09PSBpZCk7XHJcbiAgICAgICAgcmV0dXJuIGVsZW0gPyBlbGVtLnRlbXBsYXRlIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB2ZXJ0aWNhbFNjcm9sbFN0eWxlKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmhhc1ZlcnRpY2FsU2Nyb2xsKSA/IHsgaGVpZ2h0OiB0aGlzLmhlaWdodENvbnRhaW5lcn0gOiB7fTtcclxuICAgIH1cclxuXHJcbiAgICBjb2x1bW5TdHlsZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5jb2x1bW5XaWR0aCkgPyB7IG1pbldpZHRoOiB0aGlzLmNvbHVtbldpZHRofSA6IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHNldERyYWdTdGFydGVkQ29sdW1uKGNvbDogS2FuYmFuQ29sdW1uKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kcmFnU3RhcnRlZENvbHVtbiA9IGNvbDtcclxuICAgIH1cclxuXHJcbiAgICBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4sIGNvbHVtbklkOiBzdHJpbmcpIHtcclxuICAgICAgICBldmVudC5pdGVtLmRhdGEuY29sdW1uSWQgPSBjb2x1bW5JZDtcclxuICAgICAgICB0aGlzLmRyYWdnZWRJdGVtLmVtaXQoZXZlbnQuaXRlbS5kYXRhKTtcclxuICAgICAgICBpZiAoZXZlbnQucHJldmlvdXNDb250YWluZXIgPT09IGV2ZW50LmNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBtb3ZlSXRlbUluQXJyYXkoZXZlbnQuY29udGFpbmVyLmRhdGEsIGV2ZW50LnByZXZpb3VzSW5kZXgsIGV2ZW50LmN1cnJlbnRJbmRleCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmRyYWdTdGFydGVkQ29sdW1uLmRpc2FibGVkRHJvcCB8fCAhdGhpcy5kcmFnU3RhcnRlZENvbHVtbi5kaXNhYmxlZERyb3Auc29tZShpZCA9PiBpZCA9PT0gY29sdW1uSWQpKSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2ZlckFycmF5SXRlbShldmVudC5wcmV2aW91c0NvbnRhaW5lci5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmNvbnRhaW5lci5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZpb3VzSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuY3VycmVudEluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRyYWdTdGFydGVkQ29sdW1uID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjbGlja0l0ZW0oaXRlbTogS2FuYmFuSXRlbSkge1xyXG4gICAgICAgIHRoaXMub25jbGlja0l0ZW0uZW1pdChpdGVtKTtcclxuXHJcbiAgICAgICAgLy8gYWRkIG9yIHJlbW92ZSBlbGVtZW50cyB0byBzZWxlY3RlZCBpdGVtc1xyXG4gICAgICAgIGlmICghaXRlbS5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICBjb25zdCBpZHggPSB0aGlzLnNlbGVjdGVkSXRlbXMuZmluZEluZGV4KGVsZW0gPT4gZWxlbS5pZCA9PT0gaXRlbS5pZCk7XHJcbiAgICAgICAgICAgIGlmIChpZHggPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMubXVsdGlzZWxlY3QpIHsgdGhpcy5zZWxlY3RlZEl0ZW1zID0gW107IH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnNwbGljZShpZHgsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZEl0ZW1zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGJsY2xpY2tJdGVtKGl0ZW06IG9iamVjdCkge1xyXG4gICAgICAgIHRoaXMub25kYmxjbGlja0l0ZW0uZW1pdChpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0l0ZW1TZWxlY3RlZChpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRJdGVtcy5zb21lKGVsZW0gPT4gZWxlbS5pZCA9PT0gaWQpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==