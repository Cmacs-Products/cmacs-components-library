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
}
var CmacsMoveableListComponent = /** @class */ (function () {
    function CmacsMoveableListComponent() {
        /* Custom grid with pop up */
        this.header = 'Default Title';
        this.data = [];
        this.dataChange = new EventEmitter();
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
                    template: "<div cdkDropList class=\"cmacs-custom-grid-list\" style=\"margin: 0 auto\" (cdkDropListDropped)=\"drop($event)\">\r\n  <div class=\"cmacs-custom-grid-box\">\r\n    <div class=\"cmacs-custom-grid-title\">\r\n      <span>{{header}}</span>\r\n    </div>\r\n    <div class=\"cmacs-custom-grid-lock\">\r\n      <i class=\"iconUILarge-Lcok-Movement\"></i>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"cmacs-custom-grid-box\"\r\n       *ngFor=\"let item of data; index as i\"\r\n       [class.cmacs-custom-grid-box-selected]=\"rowSelectedIdx === i\"\r\n       (click)=\"select(i)\"\r\n       cdkDrag>\r\n    <div cdkDragHandle (mousedown)=\"onEditIdx = null;\" class=\"handler-icon\">\r\n      <i class=\"iconUILarge-Move_Horizen\"></i>\r\n    </div>\r\n\r\n    <div class=\"moveable-title\"\r\n         *ngIf=\"onEditIdx !== i\"\r\n         [style.user-select]=\"item.editable ? 'inherit' : 'none'\"\r\n         [style.color]=\"item.hidden ? '#97a0ae' : 'inherit'\"\r\n         (click)=\"switchToEditMode(item, i)\">{{item.display}}</div>\r\n    <input class=\"moveable-title cmacs-custom-grid-input\" (keydown.enter)=\"stopEdition()\"\r\n           cmacs-input *ngIf=\"item.editable && allowEdition && onEditIdx === i\"\r\n           [formControl]=\"formControl\" />\r\n\r\n    <div class=\"cmacs-custom-hide-show\"\r\n         [style.color]=\"item.hidden || item.hidden === undefined ? '#97a0ae' : 'inherit'\"\r\n         (click)=\"hideShow(i)\">\r\n      <i\r\n        [class.iconUILarge-Lcok-Movement]=\"item.hidden === undefined\"\r\n        [class.iconUILarge-EyeSlash]=\"item.hidden !== undefined && !item.hidden\"\r\n        [class.iconUILarge-Eye]=\"item.hidden !== undefined && item.hidden\"\r\n      >\r\n      </i>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n",
                    styles: [".cmacs-custom-grid-list{width:490px;max-width:100%;border:1px solid #dee0e5;display:block;background:#fff;border-radius:4px;overflow:hidden;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#97a0ae}.cmacs-custom-grid-box{border-bottom:1px solid #dee0e5;box-sizing:border-box;background:#fff;font-size:12px;display:-webkit-box;display:flex;font-weight:400;font-style:normal;font-stretch:normal;letter-spacing:normal;color:#656c79;padding:0 10px}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);opacity:0}.cdk-drag-placeholder{opacity:1;border-bottom:1px solid #2a7cff!important}.cdk-drag-animating{-webkit-transition:-webkit-transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}.cmacs-custom-grid-box:last-child{border:none}.cmacs-custom-grid-list.cdk-drop-list-dragging .cmacs-custom-grid-box:not(.cdk-drag-placeholder){-webkit-transition:-webkit-transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}.handler-icon{font-size:20px;color:#bec4cd;position:relative;top:2px;cursor:move}.moveable-title{padding-left:15px;padding-top:7px}.cmacs-custom-grid-title{-webkit-box-align:start;align-items:flex-start;position:relative;top:7px;color:#97a0ae;padding:0 10px 0 35px}.cmacs-custom-grid-lock{margin-left:auto;font-size:20px;padding-right:15px}.cmacs-custom-grid-box:hover{background-color:#f6f7fb}.cmacs-custom-grid-box-selected{background-color:#f2f7ff}.cmacs-custom-grid-box-selected .handler-icon{color:#656c79}.cmacs-custom-grid-input{height:26px;width:371px;position:relative;top:2px;padding-left:7px;font-size:12px;margin-left:7px}.cmacs-custom-grid-input:focus,.cmacs-custom-grid-input:hover{border-color:#2a7cff}.cmacs-custom-hide-show{margin-left:auto;font-size:20px;position:relative;top:3px;padding-right:15px;cursor:pointer}", "\n      cmacs-moveable-list {\n        display: block;\n      }\n    "]
                }] }
    ];
    CmacsMoveableListComponent.propDecorators = {
        header: [{ type: Input }],
        data: [{ type: Input }],
        dataChange: [{ type: Output }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtbW92ZWFibGUtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLW1vdmVhYmxlLWxpc3QvY21hY3MtbW92ZWFibGUtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUFFLFlBQVksRUFDMUIsS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsV0FBVyxFQUFFLFVBQVUsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZELE9BQU8sRUFBYyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUVwRSxzQ0FJQzs7O0lBSEMsbUNBQWdCOztJQUNoQixrQ0FBZ0I7O0lBQ2hCLG9DQUFrQjs7QUFHcEI7SUFBQTs7UUFnQlcsV0FBTSxHQUFXLGVBQWUsQ0FBQztRQUNqQyxTQUFJLEdBQXVCLEVBQUUsQ0FBQztRQUM3QixlQUFVLEdBQXFDLElBQUksWUFBWSxFQUFzQixDQUFDO1FBQ3RGLG1CQUFjLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFFNUUsY0FBUyxHQUFXLElBQUksQ0FBQztRQUN6QixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixtQkFBYyxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzVCLGdCQUFXLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFO1lBQ2hDLFVBQVUsQ0FBQyxRQUFRO1NBQ3BCLENBQUMsQ0FBQztJQStETCxDQUFDOzs7OztJQTVEQyxnREFBVzs7OztJQURYLFVBQ1ksQ0FBUTs7WUFDWixPQUFPLEdBQUcsbUJBQUEsQ0FBQyxDQUFDLE1BQU0sRUFBZTtRQUN2QyxJQUFJLENBQUMsT0FBTyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssUUFBUSxFQUFFO1lBQzNDLElBQUks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QUFHLENBQUMsRUFBZixDQUFlLEVBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7O2dCQXRGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsbXZEQUFtRDsrcEVBR2pELHVFQUlDO2lCQUVKOzs7eUJBSUUsS0FBSzt1QkFDTCxLQUFLOzZCQUNMLE1BQU07aUNBQ04sTUFBTTs4QkFTTixZQUFZLFNBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxDQUFDOztJQTZEMUMsaUNBQUM7Q0FBQSxBQXpGRCxJQXlGQztTQTVFWSwwQkFBMEI7OztJQUdyQyw0Q0FBMEM7O0lBQzFDLDBDQUF1Qzs7SUFDdkMsZ0RBQWdHOztJQUNoRyxvREFBNEU7O0lBRTVFLCtDQUF5Qjs7SUFDekIsa0RBQXFCOztJQUNyQixvREFBNEI7O0lBQzVCLGlEQUVHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1Db250cm9sLCBWYWxpZGF0b3JzfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHtDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5fSBmcm9tIFwiQGFuZ3VsYXIvY2RrL2RyYWctZHJvcFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNb3ZlYWJsZUxpc3RJdGVtIHtcclxuICBkaXNwbGF5OiBzdHJpbmc7XHJcbiAgaGlkZGVuOiBib29sZWFuO1xyXG4gIGVkaXRhYmxlOiBib29sZWFuO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLW1vdmVhYmxlLWxpc3QnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NNb3ZlYWJsZUxpc3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1tb3ZlYWJsZS1saXN0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1tb3ZlYWJsZS1saXN0LmNvbXBvbmVudC5jc3MnXSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgY21hY3MtbW92ZWFibGUtbGlzdCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc01vdmVhYmxlTGlzdENvbXBvbmVudCB7XHJcblxyXG4gIC8qIEN1c3RvbSBncmlkIHdpdGggcG9wIHVwICovXHJcbiAgQElucHV0KCkgaGVhZGVyOiBzdHJpbmcgPSAnRGVmYXVsdCBUaXRsZSc7XHJcbiAgQElucHV0KCkgZGF0YTogTW92ZWFibGVMaXN0SXRlbVtdID0gW107XHJcbiAgQE91dHB1dCgpIGRhdGFDaGFuZ2U6IEV2ZW50RW1pdHRlcjxNb3ZlYWJsZUxpc3RJdGVtW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxNb3ZlYWJsZUxpc3RJdGVtW10+KCk7XHJcbiAgQE91dHB1dCgpIHNlbGVjdGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG5cclxuICBvbkVkaXRJZHg6IG51bWJlciA9IG51bGw7XHJcbiAgYWxsb3dFZGl0aW9uID0gZmFsc2U7XHJcbiAgcm93U2VsZWN0ZWRJZHg6IG51bWJlciA9IC0xO1xyXG4gIGZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnLCBbXHJcbiAgICBWYWxpZGF0b3JzLnJlcXVpcmVkXHJcbiAgXSk7XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgaGFuZGxlQ2xpY2soZTogRXZlbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuICAgIGlmICgodHlwZW9mIGVsZW1lbnQuY2xhc3NOYW1lKSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgaWYgKGVsZW1lbnQuY2xhc3NOYW1lLmluZGV4T2YoJ21vdmVhYmxlLXRpdGxlJykgPj0gMCkge1xyXG4gICAgICAgIHRoaXMuYWxsb3dFZGl0aW9uID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmFsbG93RWRpdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLm9uRWRpdElkeCAhPT0gbnVsbCAmJiB0aGlzLm9uRWRpdElkeCA8IHRoaXMuZGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgIHRoaXMuZGF0YVt0aGlzLm9uRWRpdElkeF0uZGlzcGxheSA9IHRoaXMuZm9ybUNvbnRyb2wudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25FZGl0SWR4ID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJvcChldmVudDogQ2RrRHJhZ0Ryb3A8c3RyaW5nW10+KSB7XHJcbiAgICBtb3ZlSXRlbUluQXJyYXkodGhpcy5kYXRhLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xyXG4gICAgdGhpcy5kYXRhQ2hhbmdlLmVtaXQodGhpcy5kYXRhKTtcclxuICB9XHJcblxyXG4gIHN3aXRjaFRvRWRpdE1vZGUocm93OiBhbnksIGluZGV4OiBudW1iZXIpIHtcclxuICAgIHRoaXMuYWxsb3dFZGl0aW9uID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLm9uRWRpdElkeCAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmRhdGFbdGhpcy5vbkVkaXRJZHhdLmRpc3BsYXkgPSB0aGlzLmZvcm1Db250cm9sLnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyb3cuZWRpdGFibGUgIT0gdW5kZWZpbmVkICYmIHJvdy5lZGl0YWJsZSkge1xyXG4gICAgICB0aGlzLm9uRWRpdElkeCA9IGluZGV4O1xyXG4gICAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKHJvdy5kaXNwbGF5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0b3BFZGl0aW9uKCkge1xyXG4gICAgdGhpcy5kYXRhW3RoaXMub25FZGl0SWR4XS5kaXNwbGF5ID0gdGhpcy5mb3JtQ29udHJvbC52YWx1ZTtcclxuICAgIHRoaXMub25FZGl0SWR4ID0gbnVsbDtcclxuICAgIHRoaXMuYWxsb3dFZGl0aW9uID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBzZWxlY3QgKGluZGV4OiBudW1iZXIpIHtcclxuICAgIHRoaXMucm93U2VsZWN0ZWRJZHggPSBpbmRleDtcclxuICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdChpbmRleCk7XHJcbiAgfVxyXG5cclxuICBoaWRlU2hvdyhpbmRleDogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy5kYXRhW2luZGV4XS5oaWRkZW4gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmRhdGFbaW5kZXhdLmhpZGRlbiA9ICF0aGlzLmRhdGFbaW5kZXhdLmhpZGRlbjtcclxuICAgICAgdGhpcy5kYXRhQ2hhbmdlLmVtaXQodGhpcy5kYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmUoaWR4OiBudW1iZXIpIHtcclxuICAgIHRoaXMub25FZGl0SWR4ID0gbnVsbDtcclxuICAgIHRoaXMuZm9ybUNvbnRyb2wuc2V0VmFsdWUoJycpO1xyXG4gICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IChpbmRleCAhPT0gaWR4KSk7XHJcbiAgICB0aGlzLnJvd1NlbGVjdGVkSWR4ID0gLTE7XHJcbiAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQoLTEpO1xyXG4gICAgdGhpcy5kYXRhQ2hhbmdlLmVtaXQodGhpcy5kYXRhKTtcclxuICB9XHJcblxyXG5cclxufVxyXG4iXX0=