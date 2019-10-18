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
     * @param {?} column
     * @return {?}
     */
    columnCollapse(column) {
        column.collapsed = true;
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
                template: "<div class=\"root\">\r\n    <div class=\"board\">\r\n      <div class=\"board-wrapper\">\r\n        <div class=\"board-columns\" cdkDropListGroup>\r\n          <div class=\"board-column\" *ngFor=\"let column of board.columns\" [ngStyle]=\"columnStyle(column.collapsed)\" [ngClass]=\"column.class\"\r\n            [class.collapsed]=\"column.collapsed\"\r\n          >\r\n            <!-- collapsed -->\r\n            <div *ngIf=\"column.collapsed\" class=\"column-header-collapsed\" (click)=\"columnExpand(column)\">\r\n              <button cmacs-button style=\"padding: 8px;\">\r\n                <i class=\"iconArrowSmall-Expand\" style=\"font-size: 15px;\"></i>\r\n              </button>\r\n              <div class=\"column-header-collapsed-line column-header-collapsed-line-1\"></div>\r\n              <ng-container  [ngIf]=\"columnHeaderCollapsedTemplate\" *ngTemplateOutlet=\"columnHeaderCollapsedTemplate; context: { column: column}\"></ng-container>\r\n              <div *ngIf=\"!columnHeaderCollapsedTemplate\" class=\"column-header-collapsed-text\">\r\n                <span>{{ column.name }}</span>\r\n              </div>  \r\n              <div class=\"column-header-collapsed-line column-header-collapsed-line-2\"></div>\r\n            </div>\r\n            <!-- end collapsed -->\r\n            <ng-container class=\"column-header-template\" [ngIf]=\"columnHeaderTemplate\" *ngTemplateOutlet=\"columnHeaderTemplate; context: { column: column}\" ></ng-container>\r\n            <div class=\"column-header\" *ngIf=\"!columnHeaderTemplate\">\r\n              <span class=\"column-title\">{{column.name}}</span>\r\n              <button *ngIf=\"showShrink\" cmacs-button class=\"column-shrink\" ghost (click)=\"columnCollapse(column)\">\r\n                <i class=\"iconArrowSmall-Collapse\"></i>\r\n              </button>\r\n              <span class=\"column-title-items\">{{column.items.length}} Items</span>\r\n            </div>\r\n            <ng-container class=\"column-action-panel\" [ngIf]=\"getActionPanel(column.id)\" *ngTemplateOutlet=\"getActionPanel(column.id); context: { column: column}\" ></ng-container>\r\n            <div class=\"tasks-container\" cdkDropList [cdkDropListData]=\"column.items\"\r\n            (cdkDropListDropped)=\"drop($event, column.id)\" [ngStyle]=\"verticalScrollStyle()\">\r\n              <div class=\"task\" *ngFor=\"let item of column.items\" \r\n                   cdkDrag \r\n                   [cdkDragData]=\"item\"\r\n                   [cdkDragDisabled]=\"item.disabled\"\r\n                   (cdkDragStarted)=\"setDragStartedColumn(column)\"\r\n                   (click)=\"clickItem(item, column.id)\"\r\n                   (dblclick)=\"dblclickItem(item, column.id)\"\r\n                   [class.task-selected]=\"isItemSelected(item.id)\"\r\n              >\r\n                <ng-container *ngTemplateOutlet=\"getItemTemplate(column.id); context: {item: item, columnId: column.id}\"></ng-container>\r\n              </div>\r\n            </div>\r\n            <ng-container class=\"column-description-panel\" [ngIf]=\"getDescriptionPanel(column.id)\" *ngTemplateOutlet=\"getDescriptionPanel(column.id); context: { column: column}\" ></ng-container>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>",
                encapsulation: ViewEncapsulation.None,
                styles: [".root{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;height:100%}.has-gradient-text{background:-webkit-linear-gradient(#13f7f4,#2af598);-webkit-text-fill-color:transparent}.board{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-flex:1;flex-grow:1;min-width:0;min-height:0}.board-bar{background-color:rgba(225,222,222,.52);padding:8px 15px}.board-name{font-size:20px;font-weight:700}.board-wrapper{display:-webkit-box;display:flex;-webkit-box-flex:1;flex-grow:1;overflow-x:auto}.board-columns{display:-webkit-box;display:flex;-webkit-box-flex:1;flex-grow:1}.board-column{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-flex:1;flex-grow:1;flex-basis:0;border-radius:4px}.board-column:not(:first-child){margin-left:0}.column-header{font-size:14px;font-weight:500;padding:10px 15px;font-family:Roboto;line-height:1.17;border-left:1px solid #dee0e5;box-shadow:0 3px 7px -3px rgba(5,6,6,.18);margin-bottom:10px}.column-title{text-transform:capitalize;color:#656c79}.column-title-items{color:#acb3bf;font-size:12px;line-height:1.67}.column-shrink{height:20px!important;width:20px;padding-right:0!important;padding-left:0!important;margin-left:5px}.column-shrink,.column-title-items{float:right}.tasks-container{-webkit-box-flex:1;flex-grow:1;overflow-y:auto}.task{display:-webkit-box;display:flex}.task.cdk-drag-preview{opacity:.9}.task-selected{border-color:#2a7cff}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating,.tasks-container.cdk-drop-list-dragging .task:not(.cdk-drag-placeholder){-webkit-transition:-webkit-transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}.board-column.collapsed{min-width:37px!important;padding:0;margin:0 10px;flex-basis:0;-webkit-box-flex:0;flex-grow:0}.board-column.collapsed>.column-action-panel,.board-column.collapsed>.column-description-panel,.board-column.collapsed>.column-header,.board-column.collapsed>.column-header-template,.board-column.collapsed>.tasks-container{display:none}.column-header-collapsed{display:contents;height:100%}.column-header-collapsed-line{background-color:#acb3bf;width:1px;margin:0 auto}.column-header-collapsed-line-1{margin-top:8px;margin-bottom:8px;height:inherit}.column-header-collapsed-line-2{margin-top:8px;height:inherit}.column-header-collapsed-text{-webkit-transform:rotate(90deg);transform:rotate(90deg);margin:5px 0;text-transform:capitalize;color:#656c79;font-size:14px;font-weight:500;font-family:Roboto;width:-webkit-max-content;width:-moz-max-content;width:max-content}"]
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
    selectionChange: [{ type: Output }]
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
    CmacsKanbanComponent.prototype.selectedItems;
    /** @type {?} */
    CmacsKanbanComponent.prototype.dragStartedColumn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mta2FuYmFuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mta2FuYmFuL2NtYWNzLWthbmJhbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFlBQVksRUFFWixNQUFNLEVBQ04sS0FBSyxFQUNMLGlCQUFpQixFQUVqQixXQUFXLEVBQ2QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFlLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXpGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFVN0MsTUFBTSxPQUFPLG9CQUFvQjtJQThDN0I7UUExQ3lCLGdCQUFXLEdBQUcsS0FBSyxDQUFDOzs7Ozs7UUFPcEMsaUJBQVksR0FBcUIsSUFBSSxDQUFDO1FBQ3RDLGtCQUFhLEdBQTJCLElBQUksQ0FBQzs7OztRQUc3Qyx5QkFBb0IsR0FBcUIsSUFBSSxDQUFDOzs7O1FBRzlDLGtDQUE2QixHQUFxQixJQUFJLENBQUM7Ozs7UUFHdkMsZUFBVSxHQUFHLEtBQUssQ0FBQzs7UUFHbkIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFDLG9CQUFlLEdBQUcsT0FBTyxDQUFDOzs7O1FBRzFCLHlCQUFvQixHQUE0QixJQUFJLENBQUM7UUFDckQsOEJBQXlCLEdBQTRCLElBQUksQ0FBQztRQVF6RCxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDekMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQy9DLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN6QyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDNUMsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBZ0IsQ0FBQztRQUU3RCxrQkFB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QUFLOzRCQUNMLEtBQUs7bUNBR0wsS0FBSzs0Q0FHTCxLQUFLO3lCQUdMLEtBQUs7Z0NBR0wsS0FBSzs4QkFDTCxLQUFLO21DQUdMLEtBQUs7d0NBQ0wsS0FBSzswQkFHTCxLQUFLO3VCQUdMLEtBQUs7MEJBRUwsTUFBTTs0QkFDTixNQUFNOzBCQUNOLE1BQU07NkJBQ04sTUFBTTs4QkFDTixNQUFNOztBQXJDa0I7SUFBZixZQUFZLEVBQUU7O3lEQUFxQjtBQWlCcEI7SUFBZixZQUFZLEVBQUU7O3dEQUFvQjtBQUduQjtJQUFmLFlBQVksRUFBRTs7K0RBQTJCOzs7Ozs7SUFyQm5ELHFDQUE0Qjs7SUFDNUIsMkNBQTZDOzs7Ozs7O0lBTzdDLDRDQUErQzs7SUFDL0MsNkNBQXNEOzs7OztJQUd0RCxvREFBdUQ7Ozs7O0lBR3ZELDZEQUFnRTs7Ozs7SUFHaEUsMENBQTRDOztJQUc1QyxpREFBbUQ7O0lBQ25ELCtDQUFtQzs7Ozs7SUFHbkMsb0RBQThEOztJQUM5RCx5REFBbUU7O0lBR25FLDJDQUE2Qjs7SUFHN0Isd0NBQTBCOztJQUUxQiwyQ0FBbUQ7O0lBQ25ELDZDQUF5RDs7SUFDekQsMkNBQW1EOztJQUNuRCw4Q0FBc0Q7O0lBQ3RELCtDQUE2RDs7SUFFN0QsNkNBQWtDOztJQUNsQyxpREFBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgICBPdXRwdXQsXHJcbiAgICBJbnB1dCxcclxuICAgIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG4gICAgT25Jbml0LFxyXG4gICAgVGVtcGxhdGVSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheSwgdHJhbnNmZXJBcnJheUl0ZW0gfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcclxuaW1wb3J0IHsgS2FuYmFuQm9hcmQsIEthbmJhbkNvbHVtbiwgS2FuYmFuSXRlbSwgS2FuYmFuQ29sdW1uVGVtcGxhdGUgfSBmcm9tICcuL2NtYWNzLWthbmJhbi1kZWZpbml0aW9ucyc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NtYWNzLWthbmJhbicsXHJcbiAgICBleHBvcnRBczogJ2NtYWNzS2FuYmFuJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1rYW5iYW4uY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vY21hY3Mta2FuYmFuLmNvbXBvbmVudC5jc3MnXSxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0thbmJhbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgLyoqIEl0ZW1zIHRvIGRpc3BsYXkgICovXHJcbiAgICBASW5wdXQoKSBib2FyZDogS2FuYmFuQm9hcmQ7XHJcbiAgICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbXVsdGlzZWxlY3QgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRlbXBsYXRlIGZvciBpdGVtcyB0byByZW5kZXIuIFwiaXRlbVwiIG9iamVjdCBpc3QgcGFzc2VkIChzZWUgZXhhbXBsZXMpXHJcbiAgICAgKiBpdGVtVGVtcGxhdGUgaXMgZm9yIGVhY2ggY29sdW1uXHJcbiAgICAgKiBpdGVtVGVtcGxhdGVzIGlzIGZvciBjaGFuZ2UgdGhlIHRlbXBsYXRlIG9mIGEgY29sdW1uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpIGl0ZW1UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiA9IG51bGw7XHJcbiAgICBASW5wdXQoKSBpdGVtVGVtcGxhdGVzOiBLYW5iYW5Db2x1bW5UZW1wbGF0ZVtdID0gbnVsbDtcclxuXHJcbiAgICAvKiogVGVtcGxhdGUgZm9yIGNvbHVtbiBoZWFkZXJzLiBDdXJyZW50IGdyb3VwTmFtZSB3aWxsIGJlIHBhc3NlZCAoc2VlIGV4YW1wbGVzKSAqL1xyXG4gICAgQElucHV0KCkgY29sdW1uSGVhZGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gPSBudWxsO1xyXG5cclxuICAgIC8qKiBUZW1wbGF0ZSBmb3IgY29sdW1uIGhlYWRlcnMuIEN1cnJlbnQgZ3JvdXBOYW1lIHdpbGwgYmUgcGFzc2VkIChzZWUgZXhhbXBsZXMpICovXHJcbiAgICBASW5wdXQoKSBjb2x1bW5IZWFkZXJDb2xsYXBzZWRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiA9IG51bGw7XHJcblxyXG4gICAgLyoqIFNocmluayBjb2x1bW5zICovXHJcbiAgICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1NocmluayA9IGZhbHNlO1xyXG5cclxuICAgIC8vIHNjcm9sbGluZ1xyXG4gICAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGhhc1ZlcnRpY2FsU2Nyb2xsID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBoZWlnaHRDb250YWluZXIgPSAnNTAwcHgnO1xyXG5cclxuICAgIC8qKiBUZW1wbGF0ZXMgZm9yIGFjdGlvbnMgYW5kIGRlc2NyaXB0aW9uIHBhbmVscyAgKi9cclxuICAgIEBJbnB1dCgpIGFjdGlvblBhbmVsVGVtcGxhdGVzOiBLYW5iYW5Db2x1bW5UZW1wbGF0ZVtdICA9IG51bGw7XHJcbiAgICBASW5wdXQoKSBkZXNjcmlwdGlvblBhbmVsVGVtcGxhdGVzOiBLYW5iYW5Db2x1bW5UZW1wbGF0ZVtdICA9IG51bGw7XHJcblxyXG4gICAgLy8gc3R5bGVzXHJcbiAgICBASW5wdXQoKSBjb2x1bW5XaWR0aDogc3RyaW5nO1xyXG5cclxuICAgIC8vIGthbmJhbiB0eXBlXHJcbiAgICBASW5wdXQoKSBpdGVtVHlwZTogc3RyaW5nO1xyXG5cclxuICAgIEBPdXRwdXQoKSBkcmFnZ2VkSXRlbSA9IG5ldyBFdmVudEVtaXR0ZXI8b2JqZWN0PigpO1xyXG4gICAgQE91dHB1dCgpIG5vRHJhZ2dlZEl0ZW0gPSBuZXcgRXZlbnRFbWl0dGVyPEthbmJhbkl0ZW0+KCk7XHJcbiAgICBAT3V0cHV0KCkgb25jbGlja0l0ZW0gPSBuZXcgRXZlbnRFbWl0dGVyPG9iamVjdD4oKTtcclxuICAgIEBPdXRwdXQoKSBvbmRibGNsaWNrSXRlbSA9IG5ldyBFdmVudEVtaXR0ZXI8b2JqZWN0PigpO1xyXG4gICAgQE91dHB1dCgpIHNlbGVjdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8S2FuYmFuSXRlbVtdPigpO1xyXG5cclxuICAgIHNlbGVjdGVkSXRlbXM6IEthbmJhbkl0ZW0gW10gPSBbXTtcclxuICAgIGRyYWdTdGFydGVkQ29sdW1uOiBLYW5iYW5Db2x1bW4gPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldEl0ZW1UZW1wbGF0ZShpZDogc3RyaW5nKTogVGVtcGxhdGVSZWY8YW55PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aW9uUGFuZWxUZW1wbGF0ZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbSA9IHRoaXMuaXRlbVRlbXBsYXRlcy5maW5kKGkgPT4gaS5pZCA9PT0gaWQpO1xyXG4gICAgICAgICAgICBpZiAoZWxlbSkgeyByZXR1cm4gZWxlbS50ZW1wbGF0ZTsgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtVGVtcGxhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWN0aW9uUGFuZWwoaWQ6IHN0cmluZyk6IFRlbXBsYXRlUmVmPGFueT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmFjdGlvblBhbmVsVGVtcGxhdGVzID09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuICAgICAgICBjb25zdCBlbGVtID0gdGhpcy5hY3Rpb25QYW5lbFRlbXBsYXRlcy5maW5kKGQgPT4gZC5pZCA9PT0gaWQpO1xyXG4gICAgICAgIHJldHVybiBlbGVtID8gZWxlbS50ZW1wbGF0ZSA6IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGVzY3JpcHRpb25QYW5lbChpZDogc3RyaW5nKTogVGVtcGxhdGVSZWY8YW55PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVzY3JpcHRpb25QYW5lbFRlbXBsYXRlcyA9PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcbiAgICAgICAgY29uc3QgZWxlbSA9IHRoaXMuZGVzY3JpcHRpb25QYW5lbFRlbXBsYXRlcy5maW5kKGQgPT4gZC5pZCA9PT0gaWQpO1xyXG4gICAgICAgIHJldHVybiBlbGVtID8gZWxlbS50ZW1wbGF0ZSA6IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgdmVydGljYWxTY3JvbGxTdHlsZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5oYXNWZXJ0aWNhbFNjcm9sbCkgPyB7IGhlaWdodDogdGhpcy5oZWlnaHRDb250YWluZXJ9IDoge307XHJcbiAgICB9XHJcblxyXG4gICAgY29sdW1uU3R5bGUoY29sbGFwc2VkOiBib29sZWFuKTogYW55IHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuY29sdW1uV2lkdGggJiYgIWNvbGxhcHNlZCkgPyB7IG1pbldpZHRoOiB0aGlzLmNvbHVtbldpZHRofSA6IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbHVtbkV4cGFuZChjb2x1bW46IEthbmJhbkNvbHVtbik6IGFueSB7XHJcbiAgICAgICAgY29sdW1uLmNvbGxhcHNlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbHVtbkNvbGxhcHNlKGNvbHVtbjogS2FuYmFuQ29sdW1uKTogdm9pZCB7XHJcbiAgICAgICAgY29sdW1uLmNvbGxhcHNlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RHJhZ1N0YXJ0ZWRDb2x1bW4oY29sOiBLYW5iYW5Db2x1bW4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRyYWdTdGFydGVkQ29sdW1uID0gY29sO1xyXG4gICAgfVxyXG5cclxuICAgIGRyb3AoZXZlbnQ6IENka0RyYWdEcm9wPHN0cmluZ1tdPiwgY29sdW1uSWQ6IHN0cmluZyk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAoZXZlbnQucHJldmlvdXNDb250YWluZXIgPT09IGV2ZW50LmNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBtb3ZlSXRlbUluQXJyYXkoZXZlbnQuY29udGFpbmVyLmRhdGEsIGV2ZW50LnByZXZpb3VzSW5kZXgsIGV2ZW50LmN1cnJlbnRJbmRleCk7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdERyb3BwZWRJdGVtKGV2ZW50Lml0ZW0uZGF0YSwgY29sdW1uSWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5kcmFnU3RhcnRlZENvbHVtbi5kaXNhYmxlZERyb3AgfHwgIXRoaXMuZHJhZ1N0YXJ0ZWRDb2x1bW4uZGlzYWJsZWREcm9wLnNvbWUoaWQgPT4gaWQgPT09IGNvbHVtbklkKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXRlbVR5cGUgPT09ICdjdXN0b20nICYmICFldmVudC5pdGVtLmRhdGEuZGF0YS5pc0VkaXRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub0RyYWdnZWRJdGVtLmVtaXQoZXZlbnQuaXRlbS5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYWdTdGFydGVkQ29sdW1uID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0cmFuc2ZlckFycmF5SXRlbShldmVudC5wcmV2aW91c0NvbnRhaW5lci5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmNvbnRhaW5lci5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZpb3VzSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuY3VycmVudEluZGV4KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW1pdERyb3BwZWRJdGVtKGV2ZW50Lml0ZW0uZGF0YSwgY29sdW1uSWQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub0RyYWdnZWRJdGVtLmVtaXQoZXZlbnQuaXRlbS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRyYWdTdGFydGVkQ29sdW1uID0gbnVsbDtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZW1pdERyb3BwZWRJdGVtKGRhdGE6IGFueSwgY29sdW1uSWQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGRhdGEuY29sdW1uSWQgPSBjb2x1bW5JZDtcclxuICAgICAgICB0aGlzLmRyYWdnZWRJdGVtLmVtaXQoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2tJdGVtKGl0ZW06IEthbmJhbkl0ZW0sIGNvbHVtbklkOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmJvYXJkKTtcclxuICAgICAgICBpdGVtLmNvbHVtbklkID0gY29sdW1uSWQ7XHJcbiAgICAgICAgdGhpcy5vbmNsaWNrSXRlbS5lbWl0KGl0ZW0pO1xyXG5cclxuICAgICAgICAvLyBhZGQgb3IgcmVtb3ZlIGVsZW1lbnRzIHRvIHNlbGVjdGVkIGl0ZW1zXHJcbiAgICAgICAgaWYgKCFpdGVtLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkeCA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5maW5kSW5kZXgoZWxlbSA9PiBlbGVtLmlkID09PSBpdGVtLmlkKTtcclxuICAgICAgICAgICAgaWYgKGlkeCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5tdWx0aXNlbGVjdCkgeyB0aGlzLnNlbGVjdGVkSXRlbXMgPSBbXTsgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMuc3BsaWNlKGlkeCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkSXRlbXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkYmxjbGlja0l0ZW0oaXRlbTogS2FuYmFuSXRlbSwgY29sdW1uSWQ6IHN0cmluZykge1xyXG4gICAgICAgIGl0ZW0uY29sdW1uSWQgPSBjb2x1bW5JZDtcclxuICAgICAgICB0aGlzLm9uZGJsY2xpY2tJdGVtLmVtaXQoaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNJdGVtU2VsZWN0ZWQoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSXRlbXMuc29tZShlbGVtID0+IGVsZW0uaWQgPT09IGlkKTtcclxuICAgIH1cclxufVxyXG4iXX0=