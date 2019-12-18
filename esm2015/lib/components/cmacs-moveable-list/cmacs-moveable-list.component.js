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
export class CmacsMoveableListComponent {
    constructor() {
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
    handleClick(e) {
        /** @type {?} */
        const element = (/** @type {?} */ (e.target));
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
    }
    /**
     * @param {?} event
     * @return {?}
     */
    drop(event) {
        if (this.data[event.currentIndex].draggable !== undefined && !this.data[event.currentIndex].draggable) {
            return;
        }
        moveItemInArray(this.data, event.previousIndex, event.currentIndex);
        this.dataChange.emit(this.data);
    }
    /**
     * @param {?} row
     * @param {?} index
     * @return {?}
     */
    switchToEditMode(row, index) {
        this.allowEdition = true;
        if (this.onEditIdx !== null) {
            this.data[this.onEditIdx].display = this.formControl.value;
        }
        if (row.editable != undefined && row.editable) {
            this.onEditIdx = index;
            this.formControl.setValue(row.display);
        }
    }
    /**
     * @return {?}
     */
    stopEdition() {
        this.data[this.onEditIdx].display = this.formControl.value;
        this.onEditIdx = null;
        this.allowEdition = false;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    select(index) {
        this.rowSelectedIdx = index;
        this.selectedChange.emit(index);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    hideShow(index) {
        if (this.data[index].hidden !== undefined) {
            this.data[index].hidden = !this.data[index].hidden;
            this.dataChange.emit(this.data);
        }
    }
    /**
     * @param {?} idx
     * @return {?}
     */
    remove(idx) {
        this.onEditIdx = null;
        this.formControl.setValue('');
        this.data = this.data.filter((/**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
        (item, index) => (index !== idx)));
        this.rowSelectedIdx = -1;
        this.selectedChange.emit(-1);
        this.dataChange.emit(this.data);
    }
}
CmacsMoveableListComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmacs-moveable-list',
                exportAs: 'cmacsMoveableList',
                template: "<div cdkDropList class=\"cmacs-custom-grid-list\" style=\"margin: 0 auto\" (cdkDropListDropped)=\"drop($event)\">\r\n  <div class=\"cmacs-custom-grid-box\">\r\n    <div class=\"cmacs-custom-grid-title\">\r\n      <span>{{header}}</span>\r\n    </div>\r\n    <div class=\"cmacs-custom-grid-lock\">\r\n      <i class=\"iconUILarge-Lcok-Movement\"></i>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"cmacs-custom-grid-box\"\r\n       *ngFor=\"let item of data; index as i\"\r\n       [class.cmacs-custom-grid-box-selected]=\"rowSelectedIdx === i\"\r\n       (click)=\"select(i)\"\r\n       [cdkDragDisabled]=\"item.draggable !== undefined && !item.draggable\"\r\n       cdkDrag>\r\n    <div cdkDragHandle (mousedown)=\"onEditIdx = null;\" class=\"handler-icon\"\r\n         [class.cmacs-custom-grid-drag-disabled]=\"item.draggable !== undefined && !item.draggable\">\r\n      <i class=\"iconUILarge-Move_Horizen\"></i>\r\n    </div>\r\n\r\n    <div class=\"moveable-title\"\r\n         *ngIf=\"onEditIdx !== i\"\r\n         [style.user-select]=\"item.editable ? 'inherit' : 'none'\"\r\n         [style.color]=\"item.hidden ? '#97a0ae' : 'inherit'\"\r\n         (click)=\"switchToEditMode(item, i)\">{{item.display}}</div>\r\n    <input class=\"moveable-title cmacs-custom-grid-input\" (keydown.enter)=\"stopEdition()\"\r\n           cmacs-input *ngIf=\"item.editable && allowEdition && onEditIdx === i\"\r\n           [formControl]=\"formControl\" />\r\n\r\n    <div class=\"cmacs-custom-hide-show\" *ngIf=\"item.template === undefined\"\r\n         [style.color]=\"item.hidden || item.hidden === undefined ? '#97a0ae' : 'inherit'\"\r\n         (click)=\"hideShow(i)\">\r\n      <i\r\n        [class.iconUILarge-Lcok-Movement]=\"item.hidden === undefined\"\r\n        [class.iconUILarge-EyeSlash]=\"item.hidden !== undefined && item.hidden\"\r\n        [class.iconUILarge-Eye]=\"item.hidden !== undefined && !item.hidden\"\r\n      >\r\n      </i>\r\n    </div>\r\n\r\n    <ng-container *ngIf=\"item.template\">\r\n      <div [ngTemplateOutlet]=\"item.template.ref\" [ngTemplateOutletContext]=\"item.template.context\"\r\n           class=\"cmacs-custom-hide-show\"></div>\r\n    </ng-container>\r\n  </div>\r\n\r\n</div>\r\n",
                styles: [".cmacs-custom-grid-list{width:490px;max-width:100%;border:1px solid #dee0e5;display:block;background:#fff;border-radius:4px;overflow:hidden;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#97a0ae}.cmacs-custom-grid-box{border-bottom:1px solid #dee0e5;box-sizing:border-box;background:#fff;font-size:12px;display:-webkit-box;display:flex;font-weight:400;font-style:normal;font-stretch:normal;letter-spacing:normal;color:#656c79;padding:0 10px}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);opacity:0}.cdk-drag-placeholder{opacity:1;border-bottom:1px solid #2a7cff!important}.cdk-drag-animating{-webkit-transition:-webkit-transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}.cmacs-custom-grid-box:last-child{border:none}.cmacs-custom-grid-list.cdk-drop-list-dragging .cmacs-custom-grid-box:not(.cdk-drag-placeholder){-webkit-transition:-webkit-transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}.handler-icon{font-size:20px;color:#bec4cd;position:relative;top:2px;cursor:move}.moveable-title{padding-left:15px;padding-top:7px}.cmacs-custom-grid-title{-webkit-box-align:start;align-items:flex-start;position:relative;top:7px;color:#97a0ae;padding:0 10px 0 35px}.cmacs-custom-grid-lock{margin-left:auto;font-size:20px;padding-right:15px}.cmacs-custom-grid-box:hover{background-color:#f6f7fb}.cmacs-custom-grid-box-selected{background-color:#f2f7ff}.cmacs-custom-grid-box-selected .handler-icon{color:#656c79}.cmacs-custom-grid-input{height:26px;width:371px;position:relative;top:2px;padding-left:7px;font-size:12px;margin-left:7px}.cmacs-custom-grid-input:focus,.cmacs-custom-grid-input:hover{border-color:#2a7cff}.cmacs-custom-hide-show{margin-left:auto;font-size:20px;position:relative;top:3px;padding-right:15px;cursor:pointer}.cmacs-custom-grid-drag-disabled{color:#97a0ae;cursor:default}", `
      cmacs-moveable-list {
        display: block;
      }
    `]
            }] }
];
CmacsMoveableListComponent.propDecorators = {
    header: [{ type: Input }],
    data: [{ type: Input }],
    dataChange: [{ type: Output }],
    selectedChange: [{ type: Output }],
    handleClick: [{ type: HostListener, args: ['window:click', ['$event'],] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtbW92ZWFibGUtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLW1vdmVhYmxlLWxpc3QvY21hY3MtbW92ZWFibGUtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUFFLFlBQVksRUFDMUIsS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsV0FBVyxFQUFFLFVBQVUsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZELE9BQU8sRUFBYyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUdwRSxzQ0FNQzs7O0lBTEMsbUNBQWdCOztJQUNoQixrQ0FBZ0I7O0lBQ2hCLG9DQUFrQjs7SUFDbEIscUNBQW1COztJQUNuQixvQ0FBZ0M7O0FBZ0JsQyxNQUFNLE9BQU8sMEJBQTBCO0lBYnZDOztRQWdCVyxXQUFNLEdBQVcsZUFBZSxDQUFDO1FBQ2pDLFNBQUksR0FBdUIsRUFBRSxDQUFDO1FBQzdCLGVBQVUsR0FBcUMsSUFBSSxZQUFZLEVBQXNCLENBQUM7UUFDdEYsbUJBQWMsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUU1RSxjQUFTLEdBQVcsSUFBSSxDQUFDO1FBQ3pCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLG1CQUFjLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDNUIsZ0JBQVcsR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUU7WUFDaEMsVUFBVSxDQUFDLFFBQVE7U0FDcEIsQ0FBQyxDQUFDO0lBa0VMLENBQUM7Ozs7O0lBL0RDLFdBQVcsQ0FBQyxDQUFROztjQUNaLE9BQU8sR0FBRyxtQkFBQSxDQUFDLENBQUMsTUFBTSxFQUFlO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLE9BQU8sQ0FB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QUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNOzs7OztRQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssR0FBRyxDQUFDLEVBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7OztZQXpGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsMnJFQUFtRDt5dEVBR2pEOzs7O0tBSUM7YUFFSjs7O3FCQUlFLEtBQUs7bUJBQ0wsS0FBSzt5QkFDTCxNQUFNOzZCQUNOLE1BQU07MEJBU04sWUFBWSxTQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7OztJQVp4Qyw0Q0FBMEM7O0lBQzFDLDBDQUF1Qzs7SUFDdkMsZ0RBQWdHOztJQUNoRyxvREFBNEU7O0lBRTVFLCtDQUF5Qjs7SUFDekIsa0RBQXFCOztJQUNyQixvREFBNEI7O0lBQzVCLGlEQUVHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1Db250cm9sLCBWYWxpZGF0b3JzfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHtDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5fSBmcm9tIFwiQGFuZ3VsYXIvY2RrL2RyYWctZHJvcFwiO1xyXG5pbXBvcnQge0NtYWNzR3JpZFRlbXBsYXRlUmVmfSBmcm9tIFwiLi4vY29yZS9pbnRlcmZhY2VzL2dyaWQtY29uZmlnXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1vdmVhYmxlTGlzdEl0ZW0ge1xyXG4gIGRpc3BsYXk6IHN0cmluZztcclxuICBoaWRkZW46IGJvb2xlYW47XHJcbiAgZWRpdGFibGU6IGJvb2xlYW47XHJcbiAgZHJhZ2dhYmxlOiBib29sZWFuO1xyXG4gIHRlbXBsYXRlPzogQ21hY3NHcmlkVGVtcGxhdGVSZWY7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtbW92ZWFibGUtbGlzdCcsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc01vdmVhYmxlTGlzdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLW1vdmVhYmxlLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLW1vdmVhYmxlLWxpc3QuY29tcG9uZW50LmNzcyddLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBjbWFjcy1tb3ZlYWJsZS1saXN0IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzTW92ZWFibGVMaXN0Q29tcG9uZW50IHtcclxuXHJcbiAgLyogQ3VzdG9tIGdyaWQgd2l0aCBwb3AgdXAgKi9cclxuICBASW5wdXQoKSBoZWFkZXI6IHN0cmluZyA9ICdEZWZhdWx0IFRpdGxlJztcclxuICBASW5wdXQoKSBkYXRhOiBNb3ZlYWJsZUxpc3RJdGVtW10gPSBbXTtcclxuICBAT3V0cHV0KCkgZGF0YUNoYW5nZTogRXZlbnRFbWl0dGVyPE1vdmVhYmxlTGlzdEl0ZW1bXT4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vdmVhYmxlTGlzdEl0ZW1bXT4oKTtcclxuICBAT3V0cHV0KCkgc2VsZWN0ZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblxyXG4gIG9uRWRpdElkeDogbnVtYmVyID0gbnVsbDtcclxuICBhbGxvd0VkaXRpb24gPSBmYWxzZTtcclxuICByb3dTZWxlY3RlZElkeDogbnVtYmVyID0gLTE7XHJcbiAgZm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycsIFtcclxuICAgIFZhbGlkYXRvcnMucmVxdWlyZWRcclxuICBdKTtcclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OmNsaWNrJywgWyckZXZlbnQnXSlcclxuICBoYW5kbGVDbGljayhlOiBFdmVudCk6IHZvaWQge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgaWYgKCh0eXBlb2YgZWxlbWVudC5jbGFzc05hbWUpID09PSAnc3RyaW5nJykge1xyXG4gICAgICBpZiAoZWxlbWVudC5jbGFzc05hbWUuaW5kZXhPZignbW92ZWFibGUtdGl0bGUnKSA+PSAwKSB7XHJcbiAgICAgICAgdGhpcy5hbGxvd0VkaXRpb24gPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYWxsb3dFZGl0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMub25FZGl0SWR4ICE9PSBudWxsICYmIHRoaXMub25FZGl0SWR4IDwgdGhpcy5kYXRhLmxlbmd0aCkge1xyXG4gICAgICAgICAgdGhpcy5kYXRhW3RoaXMub25FZGl0SWR4XS5kaXNwbGF5ID0gdGhpcy5mb3JtQ29udHJvbC52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vbkVkaXRJZHggPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4pIHtcclxuICAgIGlmICh0aGlzLmRhdGFbZXZlbnQuY3VycmVudEluZGV4XS5kcmFnZ2FibGUgIT09IHVuZGVmaW5lZCAmJiAhdGhpcy5kYXRhW2V2ZW50LmN1cnJlbnRJbmRleF0uZHJhZ2dhYmxlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIG1vdmVJdGVtSW5BcnJheSh0aGlzLmRhdGEsIGV2ZW50LnByZXZpb3VzSW5kZXgsIGV2ZW50LmN1cnJlbnRJbmRleCk7XHJcbiAgICB0aGlzLmRhdGFDaGFuZ2UuZW1pdCh0aGlzLmRhdGEpO1xyXG4gIH1cclxuXHJcbiAgc3dpdGNoVG9FZGl0TW9kZShyb3c6IGFueSwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgdGhpcy5hbGxvd0VkaXRpb24gPSB0cnVlO1xyXG4gICAgaWYgKHRoaXMub25FZGl0SWR4ICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuZGF0YVt0aGlzLm9uRWRpdElkeF0uZGlzcGxheSA9IHRoaXMuZm9ybUNvbnRyb2wudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJvdy5lZGl0YWJsZSAhPSB1bmRlZmluZWQgJiYgcm93LmVkaXRhYmxlKSB7XHJcbiAgICAgIHRoaXMub25FZGl0SWR4ID0gaW5kZXg7XHJcbiAgICAgIHRoaXMuZm9ybUNvbnRyb2wuc2V0VmFsdWUocm93LmRpc3BsYXkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RvcEVkaXRpb24oKSB7XHJcbiAgICB0aGlzLmRhdGFbdGhpcy5vbkVkaXRJZHhdLmRpc3BsYXkgPSB0aGlzLmZvcm1Db250cm9sLnZhbHVlO1xyXG4gICAgdGhpcy5vbkVkaXRJZHggPSBudWxsO1xyXG4gICAgdGhpcy5hbGxvd0VkaXRpb24gPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHNlbGVjdCAoaW5kZXg6IG51bWJlcikge1xyXG4gICAgdGhpcy5yb3dTZWxlY3RlZElkeCA9IGluZGV4O1xyXG4gICAgdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KGluZGV4KTtcclxuICB9XHJcblxyXG4gIGhpZGVTaG93KGluZGV4OiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLmRhdGFbaW5kZXhdLmhpZGRlbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuZGF0YVtpbmRleF0uaGlkZGVuID0gIXRoaXMuZGF0YVtpbmRleF0uaGlkZGVuO1xyXG4gICAgICB0aGlzLmRhdGFDaGFuZ2UuZW1pdCh0aGlzLmRhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZShpZHg6IG51bWJlcikge1xyXG4gICAgdGhpcy5vbkVkaXRJZHggPSBudWxsO1xyXG4gICAgdGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZSgnJyk7XHJcbiAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gKGluZGV4ICE9PSBpZHgpKTtcclxuICAgIHRoaXMucm93U2VsZWN0ZWRJZHggPSAtMTtcclxuICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdCgtMSk7XHJcbiAgICB0aGlzLmRhdGFDaGFuZ2UuZW1pdCh0aGlzLmRhdGEpO1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ==