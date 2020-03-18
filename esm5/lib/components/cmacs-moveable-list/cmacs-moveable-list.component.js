/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, HostListener, Input, Output, } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { moveItemInArray } from "@angular/cdk/drag-drop";
/**
 * @record
 */
export function MoveableListItem() { }
if (false) {
    /** @type {?} */
    MoveableListItem.prototype.display;
    /** @type {?} */
    MoveableListItem.prototype.hidden;
    /** @type {?} */
    MoveableListItem.prototype.editable;
    /** @type {?} */
    MoveableListItem.prototype.draggable;
    /** @type {?|undefined} */
    MoveableListItem.prototype.template;
}
var CmacsMoveableListComponent = /** @class */ (function () {
    function CmacsMoveableListComponent() {
        /* Custom grid with pop up */
        this.header = 'Default Title';
        this.data = [];
        this.dataChange = new EventEmitter();
        this.displayChange = new EventEmitter();
        this.selectedChange = new EventEmitter();
        this.onEditIdx = null;
        this.allowEdition = false;
        this.rowSelectedIdx = -1;
        this.formControl = new FormControl('', [
            Validators.required
        ]);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    CmacsMoveableListComponent.prototype.handleClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var element = (/** @type {?} */ (e.target));
        if ((typeof element.className) === 'string') {
            if (element.className.indexOf('moveable-title') >= 0) {
                this.allowEdition = true;
            }
            else {
                this.allowEdition = false;
                if (this.onEditIdx !== null && this.onEditIdx < this.data.length) {
                    this.data[this.onEditIdx].display = this.formControl.value;
                    this.displayChange.emit(this.data[this.onEditIdx]);
                }
                this.onEditIdx = null;
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CmacsMoveableListComponent.prototype.drop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.data[event.currentIndex].draggable !== undefined && !this.data[event.currentIndex].draggable) {
            return;
        }
        moveItemInArray(this.data, event.previousIndex, event.currentIndex);
        this.dataChange.emit(this.data);
    };
    /**
     * @param {?} row
     * @param {?} index
     * @return {?}
     */
    CmacsMoveableListComponent.prototype.switchToEditMode = /**
     * @param {?} row
     * @param {?} index
     * @return {?}
     */
    function (row, index) {
        this.allowEdition = true;
        if (this.onEditIdx !== null) {
            this.data[this.onEditIdx].display = this.formControl.value;
        }
        if (row.editable != undefined && row.editable) {
            this.onEditIdx = index;
            this.formControl.setValue(row.display);
        }
    };
    /**
     * @return {?}
     */
    CmacsMoveableListComponent.prototype.stopEdition = /**
     * @return {?}
     */
    function () {
        this.data[this.onEditIdx].display = this.formControl.value;
        this.displayChange.emit(this.data[this.onEditIdx]);
        this.onEditIdx = null;
        this.allowEdition = false;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    CmacsMoveableListComponent.prototype.select = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.rowSelectedIdx = index;
        this.selectedChange.emit(index);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    CmacsMoveableListComponent.prototype.hideShow = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this.data[index].hidden !== undefined) {
            this.data[index].hidden = !this.data[index].hidden;
            this.dataChange.emit(this.data);
        }
    };
    /**
     * @param {?} idx
     * @return {?}
     */
    CmacsMoveableListComponent.prototype.remove = /**
     * @param {?} idx
     * @return {?}
     */
    function (idx) {
        this.onEditIdx = null;
        this.formControl.setValue('');
        this.data = this.data.filter((/**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
        function (item, index) { return (index !== idx); }));
        this.rowSelectedIdx = -1;
        this.selectedChange.emit(-1);
        this.dataChange.emit(this.data);
    };
    CmacsMoveableListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-moveable-list',
                    exportAs: 'cmacsMoveableList',
                    template: "<div cdkDropList class=\"cmacs-custom-grid-list\" style=\"margin: 0 auto\" (cdkDropListDropped)=\"drop($event)\">\r\n  <div class=\"cmacs-custom-grid-box\">\r\n    <div class=\"cmacs-custom-grid-title\">\r\n      <span>{{header}}</span>\r\n    </div>\r\n    <div class=\"cmacs-custom-grid-lock\">\r\n      <span class=\"movespan\"><i class=\"iconUILarge-Lcok-Movement\"></i></span>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"cmacs-custom-grid-box\" *ngFor=\"let item of data; index as i\"\r\n    [class.cmacs-custom-grid-box-selected]=\"rowSelectedIdx === i\" (click)=\"select(i)\"\r\n    [cdkDragDisabled]=\"item.draggable !== undefined && !item.draggable\" cdkDrag>\r\n    <div cdkDragHandle (mousedown)=\"onEditIdx = null;\" class=\"handler-icon\"\r\n      [class.cmacs-custom-grid-drag-disabled]=\"item.draggable !== undefined && !item.draggable\">\r\n      <span class=\"movespan\"><i class=\"iconUILarge-Move_Horizen\"></i></span>\r\n    </div>\r\n\r\n    <div class=\"moveable-title\" *ngIf=\"onEditIdx !== i\" [style.user-select]=\"item.editable ? 'inherit' : 'none'\"\r\n      [style.color]=\"item.hidden ? '#97a0ae' : 'inherit'\" (click)=\"switchToEditMode(item, i)\">{{item.display}}</div>\r\n    <input class=\"moveable-title cmacs-custom-grid-input\" (keydown.enter)=\"stopEdition()\" cmacs-input\r\n      *ngIf=\"item.editable && allowEdition && onEditIdx === i\" [formControl]=\"formControl\" />\r\n\r\n    <div class=\"cmacs-custom-hide-show\" *ngIf=\"item.template === undefined\"\r\n      [style.color]=\"item.hidden || item.hidden === undefined ? '#97a0ae' : 'inherit'\" (click)=\"hideShow(i)\">\r\n      <span class=\"movespan\">\r\n        <i [class.iconUILarge-Lcok-Movement]=\"item.hidden === undefined\"\r\n          [class.iconUILarge-EyeSlash]=\"item.hidden !== undefined && item.hidden\"\r\n          [class.iconUILarge-Eye]=\"item.hidden !== undefined && !item.hidden\">\r\n        </i>\r\n      </span>\r\n    </div>\r\n\r\n    <ng-container *ngIf=\"item.template\">\r\n      <div [ngTemplateOutlet]=\"item.template.ref\" [ngTemplateOutletContext]=\"item.template.context\"\r\n        class=\"cmacs-custom-hide-show\"></div>\r\n    </ng-container>\r\n  </div>\r\n\r\n</div>",
                    styles: [".cmacs-custom-grid-list{width:490px;max-width:100%;border:1px solid #dee0e5;display:block;background:#fff;border-radius:4px;overflow:hidden;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#97a0ae}.cmacs-custom-grid-box{border-bottom:1px solid #dee0e5;box-sizing:border-box;background:#fff;font-size:12px;display:-webkit-box;display:flex;font-weight:400;font-style:normal;font-stretch:normal;letter-spacing:normal;color:#656c79;padding:0 10px}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);opacity:0}.cdk-drag-placeholder{opacity:1;border-bottom:1px solid #2a7cff!important}.cdk-drag-animating{-webkit-transition:-webkit-transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}.cmacs-custom-grid-box:last-child{border:none}.cmacs-custom-grid-list.cdk-drop-list-dragging .cmacs-custom-grid-box:not(.cdk-drag-placeholder){-webkit-transition:-webkit-transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}.handler-icon{font-size:20px;color:#bec4cd;position:relative;cursor:move;line-height:26px}.moveable-title{padding-left:15px;line-height:32px}.cmacs-custom-grid-title{-webkit-box-align:start;align-items:flex-start;position:relative;color:#97a0ae;line-height:32px;padding:0 10px 0 35px}.cmacs-custom-grid-lock{margin-left:auto;font-size:20px;padding-right:15px}.cmacs-custom-grid-box:not(.cmacs-custom-grid-box-selected):hover{background-color:#f6f7fb}.cmacs-custom-grid-box-selected{background-color:#f2f7ff}.cmacs-custom-grid-box-selected .handler-icon{color:#656c79}.cmacs-custom-grid-input{height:32px;width:371px;position:relative;padding-left:7px;font-size:12px;margin-left:7px}.cmacs-custom-grid-input:focus,.cmacs-custom-grid-input:hover{border-color:#2a7cff}.cmacs-custom-hide-show{margin-left:auto;font-size:20px;position:relative;padding-right:15px;cursor:pointer}.cmacs-custom-grid-drag-disabled{color:#97a0ae;cursor:default}.movespan{height:20px;width:20px;position:relative;font-size:20px;line-height:20px;vertical-align:middle;text-align:center;display:inline-block}", "\n      cmacs-moveable-list {\n        display: block;\n      }\n    "]
                }] }
    ];
    CmacsMoveableListComponent.propDecorators = {
        header: [{ type: Input }],
        data: [{ type: Input }],
        dataChange: [{ type: Output }],
        displayChange: [{ type: Output }],
        selectedChange: [{ type: Output }],
        handleClick: [{ type: HostListener, args: ['window:click', ['$event'],] }]
    };
    return CmacsMoveableListComponent;
}());
export { CmacsMoveableListComponent };
if (false) {
    /** @type {?} */
    CmacsMoveableListComponent.prototype.header;
    /** @type {?} */
    CmacsMoveableListComponent.prototype.data;
    /** @type {?} */
    CmacsMoveableListComponent.prototype.dataChange;
    /** @type {?} */
    CmacsMoveableListComponent.prototype.displayChange;
    /** @type {?} */
    CmacsMoveableListComponent.prototype.selectedChange;
    /** @type {?} */
    CmacsMoveableListComponent.prototype.onEditIdx;
    /** @type {?} */
    CmacsMoveableListComponent.prototype.allowEdition;
    /** @type {?} */
    CmacsMoveableListComponent.prototype.rowSelectedIdx;
    /** @type {?} */
    CmacsMoveableListComponent.prototype.formControl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtbW92ZWFibGUtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLW1vdmVhYmxlLWxpc3QvY21hY3MtbW92ZWFibGUtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUFFLFlBQVksRUFDMUIsS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pELE9BQU8sRUFBZSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUd0RSxzQ0FNQzs7O0lBTEMsbUNBQWdCOztJQUNoQixrQ0FBZ0I7O0lBQ2hCLG9DQUFrQjs7SUFDbEIscUNBQW1COztJQUNuQixvQ0FBZ0M7O0FBR2xDO0lBQUE7O1FBZ0JXLFdBQU0sR0FBVyxlQUFlLENBQUM7UUFDakMsU0FBSSxHQUF1QixFQUFFLENBQUM7UUFDN0IsZUFBVSxHQUFxQyxJQUFJLFlBQVksRUFBc0IsQ0FBQztRQUN0RixrQkFBYSxHQUFtQyxJQUFJLFlBQVksRUFBb0IsQ0FBQztRQUNyRixtQkFBYyxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBRTVFLGNBQVMsR0FBVyxJQUFJLENBQUM7UUFDekIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsbUJBQWMsR0FBVyxDQUFDLENBQUMsQ0FBQztRQUM1QixnQkFBVyxHQUFHLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRTtZQUNoQyxVQUFVLENBQUMsUUFBUTtTQUNwQixDQUFDLENBQUM7SUFxRUwsQ0FBQzs7Ozs7SUFsRUMsZ0RBQVc7Ozs7SUFEWCxVQUNZLENBQVE7O1lBQ1osT0FBTyxHQUFHLG1CQUFBLENBQUMsQ0FBQyxNQUFNLEVBQWU7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RTs7SUFFNUUsK0NBQXlCOztJQUN6QixrREFBcUI7O0lBQ3JCLG9EQUE0Qjs7SUFDNUIsaURBRUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lcixcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IENka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXkgfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL2RyYWctZHJvcFwiO1xyXG5pbXBvcnQgeyBDbWFjc0dyaWRUZW1wbGF0ZVJlZiB9IGZyb20gXCIuLi9jb3JlL2ludGVyZmFjZXMvZ3JpZC1jb25maWdcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTW92ZWFibGVMaXN0SXRlbSB7XHJcbiAgZGlzcGxheTogc3RyaW5nO1xyXG4gIGhpZGRlbjogYm9vbGVhbjtcclxuICBlZGl0YWJsZTogYm9vbGVhbjtcclxuICBkcmFnZ2FibGU6IGJvb2xlYW47XHJcbiAgdGVtcGxhdGU/OiBDbWFjc0dyaWRUZW1wbGF0ZVJlZjtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1tb3ZlYWJsZS1saXN0JyxcclxuICBleHBvcnRBczogJ2NtYWNzTW92ZWFibGVMaXN0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtbW92ZWFibGUtbGlzdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtbW92ZWFibGUtbGlzdC5jb21wb25lbnQuY3NzJ10sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIGNtYWNzLW1vdmVhYmxlLWxpc3Qge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NNb3ZlYWJsZUxpc3RDb21wb25lbnQge1xyXG5cclxuICAvKiBDdXN0b20gZ3JpZCB3aXRoIHBvcCB1cCAqL1xyXG4gIEBJbnB1dCgpIGhlYWRlcjogc3RyaW5nID0gJ0RlZmF1bHQgVGl0bGUnO1xyXG4gIEBJbnB1dCgpIGRhdGE6IE1vdmVhYmxlTGlzdEl0ZW1bXSA9IFtdO1xyXG4gIEBPdXRwdXQoKSBkYXRhQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TW92ZWFibGVMaXN0SXRlbVtdPiA9IG5ldyBFdmVudEVtaXR0ZXI8TW92ZWFibGVMaXN0SXRlbVtdPigpO1xyXG4gIEBPdXRwdXQoKSBkaXNwbGF5Q2hhbmdlOiBFdmVudEVtaXR0ZXI8TW92ZWFibGVMaXN0SXRlbT4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vdmVhYmxlTGlzdEl0ZW0+KCk7XHJcbiAgQE91dHB1dCgpIHNlbGVjdGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG5cclxuICBvbkVkaXRJZHg6IG51bWJlciA9IG51bGw7XHJcbiAgYWxsb3dFZGl0aW9uID0gZmFsc2U7XHJcbiAgcm93U2VsZWN0ZWRJZHg6IG51bWJlciA9IC0xO1xyXG4gIGZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnLCBbXHJcbiAgICBWYWxpZGF0b3JzLnJlcXVpcmVkXHJcbiAgXSk7XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgaGFuZGxlQ2xpY2soZTogRXZlbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuICAgIGlmICgodHlwZW9mIGVsZW1lbnQuY2xhc3NOYW1lKSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgaWYgKGVsZW1lbnQuY2xhc3NOYW1lLmluZGV4T2YoJ21vdmVhYmxlLXRpdGxlJykgPj0gMCkge1xyXG4gICAgICAgIHRoaXMuYWxsb3dFZGl0aW9uID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmFsbG93RWRpdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLm9uRWRpdElkeCAhPT0gbnVsbCAmJiB0aGlzLm9uRWRpdElkeCA8IHRoaXMuZGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgIHRoaXMuZGF0YVt0aGlzLm9uRWRpdElkeF0uZGlzcGxheSA9IHRoaXMuZm9ybUNvbnRyb2wudmFsdWU7XHJcbiAgICAgICAgICB0aGlzLmRpc3BsYXlDaGFuZ2UuZW1pdCh0aGlzLmRhdGFbdGhpcy5vbkVkaXRJZHhdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vbkVkaXRJZHggPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4pIHtcclxuICAgIGlmICh0aGlzLmRhdGFbZXZlbnQuY3VycmVudEluZGV4XS5kcmFnZ2FibGUgIT09IHVuZGVmaW5lZCAmJiAhdGhpcy5kYXRhW2V2ZW50LmN1cnJlbnRJbmRleF0uZHJhZ2dhYmxlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIG1vdmVJdGVtSW5BcnJheSh0aGlzLmRhdGEsIGV2ZW50LnByZXZpb3VzSW5kZXgsIGV2ZW50LmN1cnJlbnRJbmRleCk7XHJcbiAgICB0aGlzLmRhdGFDaGFuZ2UuZW1pdCh0aGlzLmRhdGEpO1xyXG4gIH1cclxuXHJcbiAgc3dpdGNoVG9FZGl0TW9kZShyb3c6IGFueSwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgdGhpcy5hbGxvd0VkaXRpb24gPSB0cnVlO1xyXG4gICAgaWYgKHRoaXMub25FZGl0SWR4ICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuZGF0YVt0aGlzLm9uRWRpdElkeF0uZGlzcGxheSA9IHRoaXMuZm9ybUNvbnRyb2wudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJvdy5lZGl0YWJsZSAhPSB1bmRlZmluZWQgJiYgcm93LmVkaXRhYmxlKSB7XHJcbiAgICAgIHRoaXMub25FZGl0SWR4ID0gaW5kZXg7XHJcbiAgICAgIHRoaXMuZm9ybUNvbnRyb2wuc2V0VmFsdWUocm93LmRpc3BsYXkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RvcEVkaXRpb24oKSB7XHJcbiAgICB0aGlzLmRhdGFbdGhpcy5vbkVkaXRJZHhdLmRpc3BsYXkgPSB0aGlzLmZvcm1Db250cm9sLnZhbHVlO1xyXG4gICAgdGhpcy5kaXNwbGF5Q2hhbmdlLmVtaXQodGhpcy5kYXRhW3RoaXMub25FZGl0SWR4XSk7XHJcbiAgICB0aGlzLm9uRWRpdElkeCA9IG51bGw7XHJcbiAgICB0aGlzLmFsbG93RWRpdGlvbiA9IGZhbHNlO1xyXG5cclxuICB9XHJcblxyXG4gIHNlbGVjdChpbmRleDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnJvd1NlbGVjdGVkSWR4ID0gaW5kZXg7XHJcbiAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQoaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgaGlkZVNob3coaW5kZXg6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMuZGF0YVtpbmRleF0uaGlkZGVuICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5kYXRhW2luZGV4XS5oaWRkZW4gPSAhdGhpcy5kYXRhW2luZGV4XS5oaWRkZW47XHJcbiAgICAgIHRoaXMuZGF0YUNoYW5nZS5lbWl0KHRoaXMuZGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlKGlkeDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLm9uRWRpdElkeCA9IG51bGw7XHJcbiAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKCcnKTtcclxuICAgIHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiAoaW5kZXggIT09IGlkeCkpO1xyXG4gICAgdGhpcy5yb3dTZWxlY3RlZElkeCA9IC0xO1xyXG4gICAgdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KC0xKTtcclxuICAgIHRoaXMuZGF0YUNoYW5nZS5lbWl0KHRoaXMuZGF0YSk7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIl19