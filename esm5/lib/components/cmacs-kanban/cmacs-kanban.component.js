/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, ChangeDetectionStrategy, Output, Input, ViewEncapsulation, TemplateRef } from '@angular/core';
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
     * @return {?}
     */
    CmacsKanbanComponent.prototype.columnStyle = /**
     * @return {?}
     */
    function () {
        return (this.columnWidth) ? { minWidth: this.columnWidth } : {};
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
     * @return {?}
     */
    CmacsKanbanComponent.prototype.clickItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
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
     * @return {?}
     */
    CmacsKanbanComponent.prototype.dblclickItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
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
                    template: "<div class=\"root\">\r\n    <div class=\"board\">\r\n      <div class=\"board-wrapper\">\r\n        <div class=\"board-columns\" cdkDropListGroup>\r\n          <div class=\"board-column\" *ngFor=\"let column of board.columns\" [ngStyle]=\"columnStyle()\" [ngClass]=\"column.class\">\r\n            <ng-container [ngIf]=\"columnHeaderTemplate\" *ngTemplateOutlet=\"columnHeaderTemplate; context: { column: column}\" ></ng-container>\r\n            <div class=\"column-header\" *ngIf=\"!columnHeaderTemplate\">\r\n              <span class=\"column-title\">{{column.name}}</span>\r\n              <span class=\"column-title-items\">{{column.items.length}} Items</span>\r\n            </div>\r\n            <ng-container [ngIf]=\"getActionPanel(column.id)\" *ngTemplateOutlet=\"getActionPanel(column.id); context: { column: column}\" ></ng-container>\r\n            <div class=\"tasks-container\" cdkDropList [cdkDropListData]=\"column.items\"\r\n            (cdkDropListDropped)=\"drop($event, column.id)\" [ngStyle]=\"verticalScrollStyle()\">\r\n              <div class=\"task\" *ngFor=\"let item of column.items\" \r\n                   cdkDrag \r\n                   [cdkDragData]=\"item\"\r\n                   [cdkDragDisabled]=\"item.disabled\"\r\n                   (cdkDragStarted)=\"setDragStartedColumn(column)\"\r\n                   (click)=\"clickItem(item)\"\r\n                   (dblclick)=\"dblclickItem(item)\"\r\n                   [class.task-selected]=\"isItemSelected(item.id)\"\r\n              >\r\n                <ng-container *ngTemplateOutlet=\"getItemTemplate(column.id); context: {item: item}\"></ng-container>\r\n              </div>\r\n            </div>\r\n            <ng-container [ngIf]=\"getDescriptionPanel(column.id)\" *ngTemplateOutlet=\"getDescriptionPanel(column.id); context: { column: column}\" ></ng-container>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: [".root{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;height:100%}.has-gradient-text{background:-webkit-linear-gradient(#13f7f4,#2af598);-webkit-text-fill-color:transparent}.board{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-flex:1;flex-grow:1;min-width:0;min-height:0}.board-bar{background-color:rgba(225,222,222,.52);padding:8px 15px}.board-name{font-size:20px;font-weight:700}.board-wrapper{display:-webkit-box;display:flex;-webkit-box-flex:1;flex-grow:1;overflow-x:auto}.board-columns{display:-webkit-box;display:flex;-webkit-box-flex:1;flex-grow:1}.board-column{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-flex:1;flex-grow:1;flex-basis:0;border-radius:4px}.board-column:not(:first-child){margin-left:0}.column-header{font-size:14px;font-weight:500;padding:10px 20px;font-family:Roboto;line-height:1.17;border-left:1px solid #dee0e5;box-shadow:0 3px 7px -3px rgba(5,6,6,.18);margin-bottom:10px}.column-title{text-transform:capitalize;color:#656c79}.column-title-items{line-height:1.67;font-size:12px;color:#acb3bf;float:right}.tasks-container{-webkit-box-flex:1;flex-grow:1;overflow-y:auto}.task{display:-webkit-box;display:flex}.task.cdk-drag-preview{opacity:.9}.task-selected{border-color:#2a7cff}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating,.tasks-container.cdk-drop-list-dragging .task:not(.cdk-drag-placeholder){-webkit-transition:-webkit-transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mta2FuYmFuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mta2FuYmFuL2NtYWNzLWthbmJhbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFlBQVksRUFDWix1QkFBdUIsRUFDdkIsTUFBTSxFQUNOLEtBQUssRUFDTCxpQkFBaUIsRUFFakIsV0FBVyxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBZSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV6RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdDO0lBNkNJO1FBaEN5QixnQkFBVyxHQUFHLEtBQUssQ0FBQzs7Ozs7O1FBT3BDLGlCQUFZLEdBQXFCLElBQUksQ0FBQztRQUN0QyxrQkFBYSxHQUEyQixJQUFJLENBQUM7Ozs7UUFHN0MseUJBQW9CLEdBQXFCLElBQUksQ0FBQzs7UUFHOUIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFDLG9CQUFlLEdBQUcsT0FBTyxDQUFDOzs7O1FBRzFCLHlCQUFvQixHQUE0QixJQUFJLENBQUM7UUFDckQsOEJBQXlCLEdBQTRCLElBQUksQ0FBQztRQUt6RCxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDekMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ3pDLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUM1QyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFnQixDQUFDO1FBRTdELGtCQUFhLEdBQWtCLEVBQUUsQ0FBQztRQUNsQyxzQkFBaUIsR0FBaUIsSUFBSSxDQUFDO0lBRXZCLENBQUM7Ozs7SUFFakIsdUNBQVE7OztJQUFSO0lBRUEsQ0FBQzs7Ozs7SUFFRCw4Q0FB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RXZlbnRFbWl0dGVyLFxyXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgICBPdXRwdXQsXHJcbiAgICBJbnB1dCxcclxuICAgIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG4gICAgT25Jbml0LFxyXG4gICAgVGVtcGxhdGVSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheSwgdHJhbnNmZXJBcnJheUl0ZW0gfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcclxuaW1wb3J0IHsgS2FuYmFuQm9hcmQsIEthbmJhbkNvbHVtbiwgS2FuYmFuSXRlbSwgS2FuYmFuQ29sdW1uVGVtcGxhdGUgfSBmcm9tICcuL2NtYWNzLWthbmJhbi1kZWZpbml0aW9ucyc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NtYWNzLWthbmJhbicsXHJcbiAgICBleHBvcnRBczogJ2NtYWNzS2FuYmFuJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1rYW5iYW4uY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vY21hY3Mta2FuYmFuLmNvbXBvbmVudC5jc3MnXSxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENtYWNzS2FuYmFuQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICAvKiogSXRlbXMgdG8gZGlzcGxheSAgKi9cclxuICAgIEBJbnB1dCgpIGJvYXJkOiBLYW5iYW5Cb2FyZDtcclxuICAgIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBtdWx0aXNlbGVjdCA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGVtcGxhdGUgZm9yIGl0ZW1zIHRvIHJlbmRlci4gXCJpdGVtXCIgb2JqZWN0IGlzdCBwYXNzZWQgKHNlZSBleGFtcGxlcylcclxuICAgICAqIGl0ZW1UZW1wbGF0ZSBpcyBmb3IgZWFjaCBjb2x1bW5cclxuICAgICAqIGl0ZW1UZW1wbGF0ZXMgaXMgZm9yIGNoYW5nZSB0aGUgdGVtcGxhdGUgb2YgYSBjb2x1bW5cclxuICAgICAqL1xyXG4gICAgQElucHV0KCkgaXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+ID0gbnVsbDtcclxuICAgIEBJbnB1dCgpIGl0ZW1UZW1wbGF0ZXM6IEthbmJhbkNvbHVtblRlbXBsYXRlW10gPSBudWxsO1xyXG5cclxuICAgIC8qKiBUZW1wbGF0ZSBmb3IgY29sdW1uIGhlYWRlcnMuIEN1cnJlbnQgZ3JvdXBOYW1lIHdpbGwgYmUgcGFzc2VkIChzZWUgZXhhbXBsZXMpICovXHJcbiAgICBASW5wdXQoKSBjb2x1bW5IZWFkZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiA9IG51bGw7XHJcblxyXG4gICAgLy8gc2Nyb2xsaW5nXHJcbiAgICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaGFzVmVydGljYWxTY3JvbGwgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIGhlaWdodENvbnRhaW5lciA9ICc1MDBweCc7XHJcblxyXG4gICAgLyoqIFRlbXBsYXRlcyBmb3IgYWN0aW9ucyBhbmQgZGVzY3JpcHRpb24gcGFuZWxzICAqL1xyXG4gICAgQElucHV0KCkgYWN0aW9uUGFuZWxUZW1wbGF0ZXM6IEthbmJhbkNvbHVtblRlbXBsYXRlW10gID0gbnVsbDtcclxuICAgIEBJbnB1dCgpIGRlc2NyaXB0aW9uUGFuZWxUZW1wbGF0ZXM6IEthbmJhbkNvbHVtblRlbXBsYXRlW10gID0gbnVsbDtcclxuXHJcbiAgICAvLyBzdHlsZXNcclxuICAgIEBJbnB1dCgpIGNvbHVtbldpZHRoOiBzdHJpbmc7XHJcblxyXG4gICAgQE91dHB1dCgpIGRyYWdnZWRJdGVtID0gbmV3IEV2ZW50RW1pdHRlcjxvYmplY3Q+KCk7XHJcbiAgICBAT3V0cHV0KCkgb25jbGlja0l0ZW0gPSBuZXcgRXZlbnRFbWl0dGVyPG9iamVjdD4oKTtcclxuICAgIEBPdXRwdXQoKSBvbmRibGNsaWNrSXRlbSA9IG5ldyBFdmVudEVtaXR0ZXI8b2JqZWN0PigpO1xyXG4gICAgQE91dHB1dCgpIHNlbGVjdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8S2FuYmFuSXRlbVtdPigpO1xyXG5cclxuICAgIHNlbGVjdGVkSXRlbXM6IEthbmJhbkl0ZW0gW10gPSBbXTtcclxuICAgIGRyYWdTdGFydGVkQ29sdW1uOiBLYW5iYW5Db2x1bW4gPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldEl0ZW1UZW1wbGF0ZShpZDogc3RyaW5nKTogVGVtcGxhdGVSZWY8YW55PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aW9uUGFuZWxUZW1wbGF0ZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbSA9IHRoaXMuaXRlbVRlbXBsYXRlcy5maW5kKGkgPT4gaS5pZCA9PT0gaWQpO1xyXG4gICAgICAgICAgICBpZiAoZWxlbSkgeyByZXR1cm4gZWxlbS50ZW1wbGF0ZTsgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtVGVtcGxhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWN0aW9uUGFuZWwoaWQ6IHN0cmluZyk6IFRlbXBsYXRlUmVmPGFueT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmFjdGlvblBhbmVsVGVtcGxhdGVzID09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuICAgICAgICBjb25zdCBlbGVtID0gdGhpcy5hY3Rpb25QYW5lbFRlbXBsYXRlcy5maW5kKGQgPT4gZC5pZCA9PT0gaWQpO1xyXG4gICAgICAgIHJldHVybiBlbGVtID8gZWxlbS50ZW1wbGF0ZSA6IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGVzY3JpcHRpb25QYW5lbChpZDogc3RyaW5nKTogVGVtcGxhdGVSZWY8YW55PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVzY3JpcHRpb25QYW5lbFRlbXBsYXRlcyA9PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcbiAgICAgICAgY29uc3QgZWxlbSA9IHRoaXMuZGVzY3JpcHRpb25QYW5lbFRlbXBsYXRlcy5maW5kKGQgPT4gZC5pZCA9PT0gaWQpO1xyXG4gICAgICAgIHJldHVybiBlbGVtID8gZWxlbS50ZW1wbGF0ZSA6IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgdmVydGljYWxTY3JvbGxTdHlsZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5oYXNWZXJ0aWNhbFNjcm9sbCkgPyB7IGhlaWdodDogdGhpcy5oZWlnaHRDb250YWluZXJ9IDoge307XHJcbiAgICB9XHJcblxyXG4gICAgY29sdW1uU3R5bGUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuY29sdW1uV2lkdGgpID8geyBtaW5XaWR0aDogdGhpcy5jb2x1bW5XaWR0aH0gOiB7fTtcclxuICAgIH1cclxuXHJcbiAgICBzZXREcmFnU3RhcnRlZENvbHVtbihjb2w6IEthbmJhbkNvbHVtbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZHJhZ1N0YXJ0ZWRDb2x1bW4gPSBjb2w7XHJcbiAgICB9XHJcblxyXG4gICAgZHJvcChldmVudDogQ2RrRHJhZ0Ryb3A8c3RyaW5nW10+LCBjb2x1bW5JZDogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIGlmIChldmVudC5wcmV2aW91c0NvbnRhaW5lciA9PT0gZXZlbnQuY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIG1vdmVJdGVtSW5BcnJheShldmVudC5jb250YWluZXIuZGF0YSwgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcclxuICAgICAgICAgICAgdGhpcy5lbWl0RHJvcHBlZEl0ZW0oZXZlbnQuaXRlbS5kYXRhLCBjb2x1bW5JZCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmRyYWdTdGFydGVkQ29sdW1uLmRpc2FibGVkRHJvcCB8fCAhdGhpcy5kcmFnU3RhcnRlZENvbHVtbi5kaXNhYmxlZERyb3Auc29tZShpZCA9PiBpZCA9PT0gY29sdW1uSWQpKSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2ZlckFycmF5SXRlbShldmVudC5wcmV2aW91c0NvbnRhaW5lci5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmNvbnRhaW5lci5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZpb3VzSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuY3VycmVudEluZGV4KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW1pdERyb3BwZWRJdGVtKGV2ZW50Lml0ZW0uZGF0YSwgY29sdW1uSWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZHJhZ1N0YXJ0ZWRDb2x1bW4gPSBudWxsO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBlbWl0RHJvcHBlZEl0ZW0oZGF0YTogYW55LCBjb2x1bW5JZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgZGF0YS5jb2x1bW5JZCA9IGNvbHVtbklkO1xyXG4gICAgICAgIHRoaXMuZHJhZ2dlZEl0ZW0uZW1pdChkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGlja0l0ZW0oaXRlbTogS2FuYmFuSXRlbSkge1xyXG4gICAgICAgIHRoaXMub25jbGlja0l0ZW0uZW1pdChpdGVtKTtcclxuXHJcbiAgICAgICAgLy8gYWRkIG9yIHJlbW92ZSBlbGVtZW50cyB0byBzZWxlY3RlZCBpdGVtc1xyXG4gICAgICAgIGlmICghaXRlbS5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICBjb25zdCBpZHggPSB0aGlzLnNlbGVjdGVkSXRlbXMuZmluZEluZGV4KGVsZW0gPT4gZWxlbS5pZCA9PT0gaXRlbS5pZCk7XHJcbiAgICAgICAgICAgIGlmIChpZHggPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMubXVsdGlzZWxlY3QpIHsgdGhpcy5zZWxlY3RlZEl0ZW1zID0gW107IH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnNwbGljZShpZHgsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZEl0ZW1zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGJsY2xpY2tJdGVtKGl0ZW06IG9iamVjdCkge1xyXG4gICAgICAgIHRoaXMub25kYmxjbGlja0l0ZW0uZW1pdChpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0l0ZW1TZWxlY3RlZChpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRJdGVtcy5zb21lKGVsZW0gPT4gZWxlbS5pZCA9PT0gaWQpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==