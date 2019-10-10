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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mta2FuYmFuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mta2FuYmFuL2NtYWNzLWthbmJhbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFlBQVksRUFFWixNQUFNLEVBQ04sS0FBSyxFQUNMLGlCQUFpQixFQUVqQixXQUFXLEVBQ2QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFlLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXpGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0M7SUFtREk7UUF2Q3lCLGdCQUFXLEdBQUcsS0FBSyxDQUFDOzs7Ozs7UUFPcEMsaUJBQVksR0FBcUIsSUFBSSxDQUFDO1FBQ3RDLGtCQUFhLEdBQTJCLElBQUksQ0FBQzs7OztRQUc3Qyx5QkFBb0IsR0FBcUIsSUFBSSxDQUFDOzs7O1FBRzlDLGtDQUE2QixHQUFxQixJQUFJLENBQUM7O1FBR3ZDLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUMxQyxvQkFBZSxHQUFHLE9BQU8sQ0FBQzs7OztRQUcxQix5QkFBb0IsR0FBNEIsSUFBSSxDQUFDO1FBQ3JELDhCQUF5QixHQUE0QixJQUFJLENBQUM7UUFRekQsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ3pDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUMvQyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDekMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzVDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQWdCLENBQUM7UUFFN0Qsa0JBQWEsR0FBa0IsRUFBRSxDQUFDO1FBQ2xDLHNCQUFpQixHQUFpQixJQUFJLENBQUM7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LGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDeEM7Ozs7O3dCQUtJLEtBQUs7OEJBQ0wsS0FBSzsrQkFPTCxLQUFLO2dDQUNMLEtBQUs7dUNBR0wsS0FBSztnREFHTCxLQUFLO29DQUdMLEtBQUs7a0NBQ0wsS0FBSzt1Q0FHTCxLQUFLOzRDQUNMLEtBQUs7OEJBR0wsS0FBSzsyQkFHTCxLQUFLOzhCQUVMLE1BQU07Z0NBQ04sTUFBTTs4QkFDTixNQUFNO2lDQUNOLE1BQU07a0NBQ04sTUFBTTs7SUFsQ2tCO1FBQWYsWUFBWSxFQUFFOzs2REFBcUI7SUFpQnBCO1FBQWYsWUFBWSxFQUFFOzttRUFBMkI7SUFzSHZELDJCQUFDO0NBQUEsQUFuSkQsSUFtSkM7U0EzSVksb0JBQW9COzs7Ozs7SUFHN0IscUNBQTRCOztJQUM1QiwyQ0FBNkM7Ozs7Ozs7SUFPN0MsNENBQStDOztJQUMvQyw2Q0FBc0Q7Ozs7O0lBR3RELG9EQUF1RDs7Ozs7SUFHdkQsNkRBQWdFOztJQUdoRSxpREFBbUQ7O0lBQ25ELCtDQUFtQzs7Ozs7SUFHbkMsb0RBQThEOztJQUM5RCx5REFBbUU7O0lBR25FLDJDQUE2Qjs7SUFHN0Isd0NBQTBCOztJQUUxQiwyQ0FBbUQ7O0lBQ25ELDZDQUF5RDs7SUFDekQsMkNBQW1EOztJQUNuRCw4Q0FBc0Q7O0lBQ3RELCtDQUE2RDs7SUFFN0QsNkNBQWtDOztJQUNsQyxpREFBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgICBPdXRwdXQsXHJcbiAgICBJbnB1dCxcclxuICAgIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG4gICAgT25Jbml0LFxyXG4gICAgVGVtcGxhdGVSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheSwgdHJhbnNmZXJBcnJheUl0ZW0gfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcclxuaW1wb3J0IHsgS2FuYmFuQm9hcmQsIEthbmJhbkNvbHVtbiwgS2FuYmFuSXRlbSwgS2FuYmFuQ29sdW1uVGVtcGxhdGUgfSBmcm9tICcuL2NtYWNzLWthbmJhbi1kZWZpbml0aW9ucyc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NtYWNzLWthbmJhbicsXHJcbiAgICBleHBvcnRBczogJ2NtYWNzS2FuYmFuJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1rYW5iYW4uY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vY21hY3Mta2FuYmFuLmNvbXBvbmVudC5jc3MnXSxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0thbmJhbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgLyoqIEl0ZW1zIHRvIGRpc3BsYXkgICovXHJcbiAgICBASW5wdXQoKSBib2FyZDogS2FuYmFuQm9hcmQ7XHJcbiAgICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbXVsdGlzZWxlY3QgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRlbXBsYXRlIGZvciBpdGVtcyB0byByZW5kZXIuIFwiaXRlbVwiIG9iamVjdCBpc3QgcGFzc2VkIChzZWUgZXhhbXBsZXMpXHJcbiAgICAgKiBpdGVtVGVtcGxhdGUgaXMgZm9yIGVhY2ggY29sdW1uXHJcbiAgICAgKiBpdGVtVGVtcGxhdGVzIGlzIGZvciBjaGFuZ2UgdGhlIHRlbXBsYXRlIG9mIGEgY29sdW1uXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpIGl0ZW1UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiA9IG51bGw7XHJcbiAgICBASW5wdXQoKSBpdGVtVGVtcGxhdGVzOiBLYW5iYW5Db2x1bW5UZW1wbGF0ZVtdID0gbnVsbDtcclxuXHJcbiAgICAvKiogVGVtcGxhdGUgZm9yIGNvbHVtbiBoZWFkZXJzLiBDdXJyZW50IGdyb3VwTmFtZSB3aWxsIGJlIHBhc3NlZCAoc2VlIGV4YW1wbGVzKSAqL1xyXG4gICAgQElucHV0KCkgY29sdW1uSGVhZGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gPSBudWxsO1xyXG5cclxuICAgIC8qKiBUZW1wbGF0ZSBmb3IgY29sdW1uIGhlYWRlcnMuIEN1cnJlbnQgZ3JvdXBOYW1lIHdpbGwgYmUgcGFzc2VkIChzZWUgZXhhbXBsZXMpICovXHJcbiAgICBASW5wdXQoKSBjb2x1bW5IZWFkZXJDb2xsYXBzZWRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiA9IG51bGw7XHJcblxyXG4gICAgLy8gc2Nyb2xsaW5nXHJcbiAgICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaGFzVmVydGljYWxTY3JvbGwgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIGhlaWdodENvbnRhaW5lciA9ICc1MDBweCc7XHJcblxyXG4gICAgLyoqIFRlbXBsYXRlcyBmb3IgYWN0aW9ucyBhbmQgZGVzY3JpcHRpb24gcGFuZWxzICAqL1xyXG4gICAgQElucHV0KCkgYWN0aW9uUGFuZWxUZW1wbGF0ZXM6IEthbmJhbkNvbHVtblRlbXBsYXRlW10gID0gbnVsbDtcclxuICAgIEBJbnB1dCgpIGRlc2NyaXB0aW9uUGFuZWxUZW1wbGF0ZXM6IEthbmJhbkNvbHVtblRlbXBsYXRlW10gID0gbnVsbDtcclxuXHJcbiAgICAvLyBzdHlsZXNcclxuICAgIEBJbnB1dCgpIGNvbHVtbldpZHRoOiBzdHJpbmc7XHJcblxyXG4gICAgLy8ga2FuYmFuIHR5cGVcclxuICAgIEBJbnB1dCgpIGl0ZW1UeXBlOiBzdHJpbmc7XHJcblxyXG4gICAgQE91dHB1dCgpIGRyYWdnZWRJdGVtID0gbmV3IEV2ZW50RW1pdHRlcjxvYmplY3Q+KCk7XHJcbiAgICBAT3V0cHV0KCkgbm9EcmFnZ2VkSXRlbSA9IG5ldyBFdmVudEVtaXR0ZXI8S2FuYmFuSXRlbT4oKTtcclxuICAgIEBPdXRwdXQoKSBvbmNsaWNrSXRlbSA9IG5ldyBFdmVudEVtaXR0ZXI8b2JqZWN0PigpO1xyXG4gICAgQE91dHB1dCgpIG9uZGJsY2xpY2tJdGVtID0gbmV3IEV2ZW50RW1pdHRlcjxvYmplY3Q+KCk7XHJcbiAgICBAT3V0cHV0KCkgc2VsZWN0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxLYW5iYW5JdGVtW10+KCk7XHJcblxyXG4gICAgc2VsZWN0ZWRJdGVtczogS2FuYmFuSXRlbSBbXSA9IFtdO1xyXG4gICAgZHJhZ1N0YXJ0ZWRDb2x1bW46IEthbmJhbkNvbHVtbiA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SXRlbVRlbXBsYXRlKGlkOiBzdHJpbmcpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcclxuICAgICAgICBpZiAodGhpcy5hY3Rpb25QYW5lbFRlbXBsYXRlcykge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtID0gdGhpcy5pdGVtVGVtcGxhdGVzLmZpbmQoaSA9PiBpLmlkID09PSBpZCk7XHJcbiAgICAgICAgICAgIGlmIChlbGVtKSB7IHJldHVybiBlbGVtLnRlbXBsYXRlOyB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1UZW1wbGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBY3Rpb25QYW5lbChpZDogc3RyaW5nKTogVGVtcGxhdGVSZWY8YW55PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aW9uUGFuZWxUZW1wbGF0ZXMgPT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG4gICAgICAgIGNvbnN0IGVsZW0gPSB0aGlzLmFjdGlvblBhbmVsVGVtcGxhdGVzLmZpbmQoZCA9PiBkLmlkID09PSBpZCk7XHJcbiAgICAgICAgcmV0dXJuIGVsZW0gPyBlbGVtLnRlbXBsYXRlIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXREZXNjcmlwdGlvblBhbmVsKGlkOiBzdHJpbmcpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcclxuICAgICAgICBpZiAodGhpcy5kZXNjcmlwdGlvblBhbmVsVGVtcGxhdGVzID09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuICAgICAgICBjb25zdCBlbGVtID0gdGhpcy5kZXNjcmlwdGlvblBhbmVsVGVtcGxhdGVzLmZpbmQoZCA9PiBkLmlkID09PSBpZCk7XHJcbiAgICAgICAgcmV0dXJuIGVsZW0gPyBlbGVtLnRlbXBsYXRlIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB2ZXJ0aWNhbFNjcm9sbFN0eWxlKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmhhc1ZlcnRpY2FsU2Nyb2xsKSA/IHsgaGVpZ2h0OiB0aGlzLmhlaWdodENvbnRhaW5lcn0gOiB7fTtcclxuICAgIH1cclxuXHJcbiAgICBjb2x1bW5TdHlsZShjb2xsYXBzZWQ6IGJvb2xlYW4pOiBhbnkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5jb2x1bW5XaWR0aCAmJiAhY29sbGFwc2VkKSA/IHsgbWluV2lkdGg6IHRoaXMuY29sdW1uV2lkdGh9IDoge307XHJcbiAgICB9XHJcblxyXG4gICAgY29sdW1uRXhwYW5kKGNvbHVtbjogS2FuYmFuQ29sdW1uKTogYW55IHtcclxuICAgICAgICBjb2x1bW4uY29sbGFwc2VkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RHJhZ1N0YXJ0ZWRDb2x1bW4oY29sOiBLYW5iYW5Db2x1bW4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRyYWdTdGFydGVkQ29sdW1uID0gY29sO1xyXG4gICAgfVxyXG5cclxuICAgIGRyb3AoZXZlbnQ6IENka0RyYWdEcm9wPHN0cmluZ1tdPiwgY29sdW1uSWQ6IHN0cmluZyk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAoZXZlbnQucHJldmlvdXNDb250YWluZXIgPT09IGV2ZW50LmNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBtb3ZlSXRlbUluQXJyYXkoZXZlbnQuY29udGFpbmVyLmRhdGEsIGV2ZW50LnByZXZpb3VzSW5kZXgsIGV2ZW50LmN1cnJlbnRJbmRleCk7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdERyb3BwZWRJdGVtKGV2ZW50Lml0ZW0uZGF0YSwgY29sdW1uSWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5kcmFnU3RhcnRlZENvbHVtbi5kaXNhYmxlZERyb3AgfHwgIXRoaXMuZHJhZ1N0YXJ0ZWRDb2x1bW4uZGlzYWJsZWREcm9wLnNvbWUoaWQgPT4gaWQgPT09IGNvbHVtbklkKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXRlbVR5cGUgPT09ICdjdXN0b20nICYmICFldmVudC5pdGVtLmRhdGEuZGF0YS5pc0VkaXRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub0RyYWdnZWRJdGVtLmVtaXQoZXZlbnQuaXRlbS5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYWdTdGFydGVkQ29sdW1uID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0cmFuc2ZlckFycmF5SXRlbShldmVudC5wcmV2aW91c0NvbnRhaW5lci5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmNvbnRhaW5lci5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZpb3VzSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuY3VycmVudEluZGV4KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW1pdERyb3BwZWRJdGVtKGV2ZW50Lml0ZW0uZGF0YSwgY29sdW1uSWQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub0RyYWdnZWRJdGVtLmVtaXQoZXZlbnQuaXRlbS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRyYWdTdGFydGVkQ29sdW1uID0gbnVsbDtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZW1pdERyb3BwZWRJdGVtKGRhdGE6IGFueSwgY29sdW1uSWQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGRhdGEuY29sdW1uSWQgPSBjb2x1bW5JZDtcclxuICAgICAgICB0aGlzLmRyYWdnZWRJdGVtLmVtaXQoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2tJdGVtKGl0ZW06IEthbmJhbkl0ZW0sIGNvbHVtbklkOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmJvYXJkKTtcclxuICAgICAgICBpdGVtLmNvbHVtbklkID0gY29sdW1uSWQ7XHJcbiAgICAgICAgdGhpcy5vbmNsaWNrSXRlbS5lbWl0KGl0ZW0pO1xyXG5cclxuICAgICAgICAvLyBhZGQgb3IgcmVtb3ZlIGVsZW1lbnRzIHRvIHNlbGVjdGVkIGl0ZW1zXHJcbiAgICAgICAgaWYgKCFpdGVtLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkeCA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5maW5kSW5kZXgoZWxlbSA9PiBlbGVtLmlkID09PSBpdGVtLmlkKTtcclxuICAgICAgICAgICAgaWYgKGlkeCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5tdWx0aXNlbGVjdCkgeyB0aGlzLnNlbGVjdGVkSXRlbXMgPSBbXTsgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMuc3BsaWNlKGlkeCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkSXRlbXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkYmxjbGlja0l0ZW0oaXRlbTogS2FuYmFuSXRlbSwgY29sdW1uSWQ6IHN0cmluZykge1xyXG4gICAgICAgIGl0ZW0uY29sdW1uSWQgPSBjb2x1bW5JZDtcclxuICAgICAgICB0aGlzLm9uZGJsY2xpY2tJdGVtLmVtaXQoaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNJdGVtU2VsZWN0ZWQoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSXRlbXMuc29tZShlbGVtID0+IGVsZW0uaWQgPT09IGlkKTtcclxuICAgIH1cclxufVxyXG4iXX0=