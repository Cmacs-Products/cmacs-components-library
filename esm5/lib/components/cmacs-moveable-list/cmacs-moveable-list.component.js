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
                    template: "<div cdkDropList class=\"cmacs-custom-grid-list\" style=\"margin: 0 auto\" (cdkDropListDropped)=\"drop($event)\">\r\n  <div class=\"cmacs-custom-grid-box\">\r\n    <div class=\"cmacs-custom-grid-title\">\r\n      <span>{{header}}</span>\r\n    </div>\r\n    <div class=\"cmacs-custom-grid-lock\">\r\n      <i class=\"iconUILarge-Lcok-Movement\"></i>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"cmacs-custom-grid-box\"\r\n       *ngFor=\"let item of data; index as i\"\r\n       [class.cmacs-custom-grid-box-selected]=\"rowSelectedIdx === i\"\r\n       (click)=\"select(i)\"\r\n       [cdkDragDisabled]=\"item.draggable !== undefined && !item.draggable\"\r\n       cdkDrag>\r\n    <div cdkDragHandle (mousedown)=\"onEditIdx = null;\" class=\"handler-icon\"\r\n         [class.cmacs-custom-grid-drag-disabled]=\"item.draggable !== undefined && !item.draggable\">\r\n      <i class=\"iconUILarge-Move_Horizen\"></i>\r\n    </div>\r\n\r\n    <div class=\"moveable-title\"\r\n         *ngIf=\"onEditIdx !== i\"\r\n         [style.user-select]=\"item.editable ? 'inherit' : 'none'\"\r\n         [style.color]=\"item.hidden ? '#97a0ae' : 'inherit'\"\r\n         (click)=\"switchToEditMode(item, i)\">{{item.display}}</div>\r\n    <input class=\"moveable-title cmacs-custom-grid-input\" (keydown.enter)=\"stopEdition()\"\r\n           cmacs-input *ngIf=\"item.editable && allowEdition && onEditIdx === i\"\r\n           [formControl]=\"formControl\" />\r\n\r\n    <div class=\"cmacs-custom-hide-show\"\r\n         [style.color]=\"item.hidden || item.hidden === undefined ? '#97a0ae' : 'inherit'\"\r\n         (click)=\"hideShow(i)\">\r\n      <i\r\n        [class.iconUILarge-Lcok-Movement]=\"item.hidden === undefined\"\r\n        [class.iconUILarge-EyeSlash]=\"item.hidden !== undefined && !item.hidden\"\r\n        [class.iconUILarge-Eye]=\"item.hidden !== undefined && item.hidden\"\r\n      >\r\n      </i>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n",
                    styles: [".cmacs-custom-grid-list{width:490px;max-width:100%;border:1px solid #dee0e5;display:block;background:#fff;border-radius:4px;overflow:hidden;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#97a0ae}.cmacs-custom-grid-box{border-bottom:1px solid #dee0e5;box-sizing:border-box;background:#fff;font-size:12px;display:-webkit-box;display:flex;font-weight:400;font-style:normal;font-stretch:normal;letter-spacing:normal;color:#656c79;padding:0 10px}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);opacity:0}.cdk-drag-placeholder{opacity:1;border-bottom:1px solid #2a7cff!important}.cdk-drag-animating{-webkit-transition:-webkit-transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}.cmacs-custom-grid-box:last-child{border:none}.cmacs-custom-grid-list.cdk-drop-list-dragging .cmacs-custom-grid-box:not(.cdk-drag-placeholder){-webkit-transition:-webkit-transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}.handler-icon{font-size:20px;color:#bec4cd;position:relative;top:2px;cursor:move}.moveable-title{padding-left:15px;padding-top:7px}.cmacs-custom-grid-title{-webkit-box-align:start;align-items:flex-start;position:relative;top:7px;color:#97a0ae;padding:0 10px 0 35px}.cmacs-custom-grid-lock{margin-left:auto;font-size:20px;padding-right:15px}.cmacs-custom-grid-box:hover{background-color:#f6f7fb}.cmacs-custom-grid-box-selected{background-color:#f2f7ff}.cmacs-custom-grid-box-selected .handler-icon{color:#656c79}.cmacs-custom-grid-input{height:26px;width:371px;position:relative;top:2px;padding-left:7px;font-size:12px;margin-left:7px}.cmacs-custom-grid-input:focus,.cmacs-custom-grid-input:hover{border-color:#2a7cff}.cmacs-custom-hide-show{margin-left:auto;font-size:20px;position:relative;top:3px;padding-right:15px;cursor:pointer}.cmacs-custom-grid-drag-disabled{color:#97a0ae;cursor:default}", "\n      cmacs-moveable-list {\n        display: block;\n      }\n    "]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtbW92ZWFibGUtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLW1vdmVhYmxlLWxpc3QvY21hY3MtbW92ZWFibGUtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUFFLFlBQVksRUFDMUIsS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsV0FBVyxFQUFFLFVBQVUsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZELE9BQU8sRUFBYyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUVwRSxzQ0FLQzs7O0lBSkMsbUNBQWdCOztJQUNoQixrQ0FBZ0I7O0lBQ2hCLG9DQUFrQjs7SUFDbEIscUNBQW1COztBQUdyQjtJQUFBOztRQWdCVyxXQUFNLEdBQVcsZUFBZSxDQUFDO1FBQ2pDLFNBQUksR0FBdUIsRUFBRSxDQUFDO1FBQzdCLGVBQVUsR0FBcUMsSUFBSSxZQUFZLEVBQXNCLENBQUM7UUFDdEYsbUJBQWMsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUU1RSxjQUFTLEdBQVcsSUFBSSxDQUFDO1FBQ3pCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLG1CQUFjLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDNUIsZ0JBQVcsR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUU7WUFDaEMsVUFBVSxDQUFDLFFBQVE7U0FDcEIsQ0FBQyxDQUFDO0lBa0VMLENBQUM7Ozs7O0lBL0RDLGdEQUFXOzs7O0lBRFgsVUFDWSxDQUFROztZQUNaLE9BQU8sR0FBRyxtQkFBQSxDQUFDLENBQUMsTUFBTSxFQUFlO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxRQUFRLEVB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QUksQ0FBQztRQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTs7Ozs7UUFBQyxVQUFDLElBQUksRUFBRSxLQUFLLElBQUssT0FBQSxDQUFDLEtBQUssS0FBSyxHQUFHLENBQUMsRUFBZixDQUFlLEVBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7O2dCQXpGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsMjZEQUFtRDs2dEVBR2pELHVFQUlDO2lCQUVKOzs7eUJBSUUsS0FBSzt1QkFDTCxLQUFLOzZCQUNMLE1BQU07aUNBQ04sTUFBTTs4QkFTTixZQUFZLFNBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxDQUFDOztJQWdFMUMsaUNBQUM7Q0FBQSxBQTVGRCxJQTRGQztTQS9FWSwwQkFBMEI7OztJQUdyQyw0Q0FBMEM7O0lBQzFDLDBDQUF1Qzs7SUFDdkMsZ0RBQWdHOztJQUNoRyxvREFBNEU7O0lBRTVFLCtDQUF5Qjs7SUFDekIsa0RBQXFCOztJQUNyQixvREFBNEI7O0lBQzVCLGlEQUVHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1Db250cm9sLCBWYWxpZGF0b3JzfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHtDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5fSBmcm9tIFwiQGFuZ3VsYXIvY2RrL2RyYWctZHJvcFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNb3ZlYWJsZUxpc3RJdGVtIHtcclxuICBkaXNwbGF5OiBzdHJpbmc7XHJcbiAgaGlkZGVuOiBib29sZWFuO1xyXG4gIGVkaXRhYmxlOiBib29sZWFuO1xyXG4gIGRyYWdnYWJsZTogYm9vbGVhbjtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1tb3ZlYWJsZS1saXN0JyxcclxuICBleHBvcnRBczogJ2NtYWNzTW92ZWFibGVMaXN0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtbW92ZWFibGUtbGlzdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtbW92ZWFibGUtbGlzdC5jb21wb25lbnQuY3NzJ10sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIGNtYWNzLW1vdmVhYmxlLWxpc3Qge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NNb3ZlYWJsZUxpc3RDb21wb25lbnQge1xyXG5cclxuICAvKiBDdXN0b20gZ3JpZCB3aXRoIHBvcCB1cCAqL1xyXG4gIEBJbnB1dCgpIGhlYWRlcjogc3RyaW5nID0gJ0RlZmF1bHQgVGl0bGUnO1xyXG4gIEBJbnB1dCgpIGRhdGE6IE1vdmVhYmxlTGlzdEl0ZW1bXSA9IFtdO1xyXG4gIEBPdXRwdXQoKSBkYXRhQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TW92ZWFibGVMaXN0SXRlbVtdPiA9IG5ldyBFdmVudEVtaXR0ZXI8TW92ZWFibGVMaXN0SXRlbVtdPigpO1xyXG4gIEBPdXRwdXQoKSBzZWxlY3RlZENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuXHJcbiAgb25FZGl0SWR4OiBudW1iZXIgPSBudWxsO1xyXG4gIGFsbG93RWRpdGlvbiA9IGZhbHNlO1xyXG4gIHJvd1NlbGVjdGVkSWR4OiBudW1iZXIgPSAtMTtcclxuICBmb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJywgW1xyXG4gICAgVmFsaWRhdG9ycy5yZXF1aXJlZFxyXG4gIF0pO1xyXG5cclxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6Y2xpY2snLCBbJyRldmVudCddKVxyXG4gIGhhbmRsZUNsaWNrKGU6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBpZiAoKHR5cGVvZiBlbGVtZW50LmNsYXNzTmFtZSkgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGlmIChlbGVtZW50LmNsYXNzTmFtZS5pbmRleE9mKCdtb3ZlYWJsZS10aXRsZScpID49IDApIHtcclxuICAgICAgICB0aGlzLmFsbG93RWRpdGlvbiA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5hbGxvd0VkaXRpb24gPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5vbkVkaXRJZHggIT09IG51bGwgJiYgdGhpcy5vbkVkaXRJZHggPCB0aGlzLmRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICB0aGlzLmRhdGFbdGhpcy5vbkVkaXRJZHhdLmRpc3BsYXkgPSB0aGlzLmZvcm1Db250cm9sLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9uRWRpdElkeCA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyb3AoZXZlbnQ6IENka0RyYWdEcm9wPHN0cmluZ1tdPikge1xyXG4gICAgaWYgKHRoaXMuZGF0YVtldmVudC5jdXJyZW50SW5kZXhdLmRyYWdnYWJsZSAhPT0gdW5kZWZpbmVkICYmICF0aGlzLmRhdGFbZXZlbnQuY3VycmVudEluZGV4XS5kcmFnZ2FibGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbW92ZUl0ZW1JbkFycmF5KHRoaXMuZGF0YSwgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcclxuICAgIHRoaXMuZGF0YUNoYW5nZS5lbWl0KHRoaXMuZGF0YSk7XHJcbiAgfVxyXG5cclxuICBzd2l0Y2hUb0VkaXRNb2RlKHJvdzogYW55LCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmFsbG93RWRpdGlvbiA9IHRydWU7XHJcbiAgICBpZiAodGhpcy5vbkVkaXRJZHggIT09IG51bGwpIHtcclxuICAgICAgdGhpcy5kYXRhW3RoaXMub25FZGl0SWR4XS5kaXNwbGF5ID0gdGhpcy5mb3JtQ29udHJvbC52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocm93LmVkaXRhYmxlICE9IHVuZGVmaW5lZCAmJiByb3cuZWRpdGFibGUpIHtcclxuICAgICAgdGhpcy5vbkVkaXRJZHggPSBpbmRleDtcclxuICAgICAgdGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZShyb3cuZGlzcGxheSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdG9wRWRpdGlvbigpIHtcclxuICAgIHRoaXMuZGF0YVt0aGlzLm9uRWRpdElkeF0uZGlzcGxheSA9IHRoaXMuZm9ybUNvbnRyb2wudmFsdWU7XHJcbiAgICB0aGlzLm9uRWRpdElkeCA9IG51bGw7XHJcbiAgICB0aGlzLmFsbG93RWRpdGlvbiA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0IChpbmRleDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnJvd1NlbGVjdGVkSWR4ID0gaW5kZXg7XHJcbiAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQoaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgaGlkZVNob3coaW5kZXg6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMuZGF0YVtpbmRleF0uaGlkZGVuICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5kYXRhW2luZGV4XS5oaWRkZW4gPSAhdGhpcy5kYXRhW2luZGV4XS5oaWRkZW47XHJcbiAgICAgIHRoaXMuZGF0YUNoYW5nZS5lbWl0KHRoaXMuZGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlKGlkeDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLm9uRWRpdElkeCA9IG51bGw7XHJcbiAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKCcnKTtcclxuICAgIHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiAoaW5kZXggIT09IGlkeCkpO1xyXG4gICAgdGhpcy5yb3dTZWxlY3RlZElkeCA9IC0xO1xyXG4gICAgdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KC0xKTtcclxuICAgIHRoaXMuZGF0YUNoYW5nZS5lbWl0KHRoaXMuZGF0YSk7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIl19