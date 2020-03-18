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
                    this.displayChange.emit(this.data[this.onEditIdx]);
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
        this.displayChange.emit(this.data[this.onEditIdx]);
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
                template: "<div cdkDropList class=\"cmacs-custom-grid-list\" style=\"margin: 0 auto\" (cdkDropListDropped)=\"drop($event)\">\r\n  <div class=\"cmacs-custom-grid-box\">\r\n    <div class=\"cmacs-custom-grid-title\">\r\n      <span>{{header}}</span>\r\n    </div>\r\n    <div class=\"cmacs-custom-grid-lock\">\r\n      <span class=\"movespan\"><i class=\"iconUILarge-Lcok-Movement\"></i></span>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"cmacs-custom-grid-box\" *ngFor=\"let item of data; index as i\"\r\n    [class.cmacs-custom-grid-box-selected]=\"rowSelectedIdx === i\" (click)=\"select(i)\"\r\n    [cdkDragDisabled]=\"item.draggable !== undefined && !item.draggable\" cdkDrag>\r\n    <div cdkDragHandle (mousedown)=\"onEditIdx = null;\" class=\"handler-icon\"\r\n      [class.cmacs-custom-grid-drag-disabled]=\"item.draggable !== undefined && !item.draggable\">\r\n      <span class=\"movespan\"><i class=\"iconUILarge-Move_Horizen\"></i></span>\r\n    </div>\r\n\r\n    <div class=\"moveable-title\" *ngIf=\"onEditIdx !== i\" [style.user-select]=\"item.editable ? 'inherit' : 'none'\"\r\n      [style.color]=\"item.hidden ? '#97a0ae' : 'inherit'\" (click)=\"switchToEditMode(item, i)\">{{item.display}}</div>\r\n    <input class=\"moveable-title cmacs-custom-grid-input\" (keydown.enter)=\"stopEdition()\" cmacs-input\r\n      *ngIf=\"item.editable && allowEdition && onEditIdx === i\" [formControl]=\"formControl\" />\r\n\r\n    <div class=\"cmacs-custom-hide-show\" *ngIf=\"item.template === undefined\"\r\n      [style.color]=\"item.hidden || item.hidden === undefined ? '#97a0ae' : 'inherit'\" (click)=\"hideShow(i)\">\r\n      <span class=\"movespan\">\r\n        <i [class.iconUILarge-Lcok-Movement]=\"item.hidden === undefined\"\r\n          [class.iconUILarge-EyeSlash]=\"item.hidden !== undefined && item.hidden\"\r\n          [class.iconUILarge-Eye]=\"item.hidden !== undefined && !item.hidden\">\r\n        </i>\r\n      </span>\r\n    </div>\r\n\r\n    <ng-container *ngIf=\"item.template\">\r\n      <div [ngTemplateOutlet]=\"item.template.ref\" [ngTemplateOutletContext]=\"item.template.context\"\r\n        class=\"cmacs-custom-hide-show\"></div>\r\n    </ng-container>\r\n  </div>\r\n\r\n</div>",
                styles: [".cmacs-custom-grid-list{width:490px;max-width:100%;border:1px solid #dee0e5;display:block;background:#fff;border-radius:4px;overflow:hidden;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#97a0ae}.cmacs-custom-grid-box{border-bottom:1px solid #dee0e5;box-sizing:border-box;background:#fff;font-size:12px;display:-webkit-box;display:flex;font-weight:400;font-style:normal;font-stretch:normal;letter-spacing:normal;color:#656c79;padding:0 10px}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);opacity:0}.cdk-drag-placeholder{opacity:1;border-bottom:1px solid #2a7cff!important}.cdk-drag-animating{-webkit-transition:-webkit-transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}.cmacs-custom-grid-box:last-child{border:none}.cmacs-custom-grid-list.cdk-drop-list-dragging .cmacs-custom-grid-box:not(.cdk-drag-placeholder){-webkit-transition:-webkit-transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}.handler-icon{font-size:20px;color:#bec4cd;position:relative;cursor:move;line-height:26px}.moveable-title{padding-left:15px;line-height:32px}.cmacs-custom-grid-title{-webkit-box-align:start;align-items:flex-start;position:relative;color:#97a0ae;line-height:32px;padding:0 10px 0 35px}.cmacs-custom-grid-lock{margin-left:auto;font-size:20px;padding-right:15px}.cmacs-custom-grid-box:not(.cmacs-custom-grid-box-selected):hover{background-color:#f6f7fb}.cmacs-custom-grid-box-selected{background-color:#f2f7ff}.cmacs-custom-grid-box-selected .handler-icon{color:#656c79}.cmacs-custom-grid-input{height:32px;width:371px;position:relative;padding-left:7px;font-size:12px;margin-left:7px}.cmacs-custom-grid-input:focus,.cmacs-custom-grid-input:hover{border-color:#2a7cff}.cmacs-custom-hide-show{margin-left:auto;font-size:20px;position:relative;padding-right:15px;cursor:pointer}.cmacs-custom-grid-drag-disabled{color:#97a0ae;cursor:default}.movespan{height:20px;width:20px;position:relative;font-size:20px;line-height:20px;vertical-align:middle;text-align:center;display:inline-block}", `
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
    displayChange: [{ type: Output }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtbW92ZWFibGUtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLW1vdmVhYmxlLWxpc3QvY21hY3MtbW92ZWFibGUtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUFFLFlBQVksRUFDMUIsS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pELE9BQU8sRUFBZSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUd0RSxzQ0FNQzs7O0lBTEMsbUNBQWdCOztJQUNoQixrQ0FBZ0I7O0lBQ2hCLG9DQUFrQjs7SUFDbEIscUNBQW1COztJQUNuQixvQ0FBZ0M7O0FBZ0JsQyxNQUFNLE9BQU8sMEJBQTBCO0lBYnZDOztRQWdCVyxXQUFNLEdBQVcsZUFBZSxDQUFDO1FBQ2pDLFNBQUksR0FBdUIsRUFBRSxDQUFDO1FBQzdCLGVBQVUsR0FBcUMsSUFBSSxZQUFZLEVBQXNCLENBQUM7UUFDdEYsa0JBQWEsR0FBbUMsSUFBSSxZQUFZLEVBQW9CLENBQUM7UUFDckYsbUJBQWMsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUU1RSxjQUFTLEdBQVcsSUFBSSxDQUFDO1FBQ3pCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLG1CQUFjLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDNUIsZ0JBQVcsR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUU7WUFDaEMsVUFBVSxDQUFDLFFBQVE7U0FDcEIsQ0FBQyxDQUFDO0lBcUVMLENBQUM7Ozs7O0lBbEVDLFdBQVcsQ0FBQyxDQUFROztjQUNaLE9BQU8sR0FBRyxtQkFBQSxDQUFDLENBQUMs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b21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5IH0gZnJvbSBcIkBhbmd1bGFyL2Nkay9kcmFnLWRyb3BcIjtcclxuaW1wb3J0IHsgQ21hY3NHcmlkVGVtcGxhdGVSZWYgfSBmcm9tIFwiLi4vY29yZS9pbnRlcmZhY2VzL2dyaWQtY29uZmlnXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1vdmVhYmxlTGlzdEl0ZW0ge1xyXG4gIGRpc3BsYXk6IHN0cmluZztcclxuICBoaWRkZW46IGJvb2xlYW47XHJcbiAgZWRpdGFibGU6IGJvb2xlYW47XHJcbiAgZHJhZ2dhYmxlOiBib29sZWFuO1xyXG4gIHRlbXBsYXRlPzogQ21hY3NHcmlkVGVtcGxhdGVSZWY7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtbW92ZWFibGUtbGlzdCcsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc01vdmVhYmxlTGlzdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLW1vdmVhYmxlLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLW1vdmVhYmxlLWxpc3QuY29tcG9uZW50LmNzcyddLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBjbWFjcy1tb3ZlYWJsZS1saXN0IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzTW92ZWFibGVMaXN0Q29tcG9uZW50IHtcclxuXHJcbiAgLyogQ3VzdG9tIGdyaWQgd2l0aCBwb3AgdXAgKi9cclxuICBASW5wdXQoKSBoZWFkZXI6IHN0cmluZyA9ICdEZWZhdWx0IFRpdGxlJztcclxuICBASW5wdXQoKSBkYXRhOiBNb3ZlYWJsZUxpc3RJdGVtW10gPSBbXTtcclxuICBAT3V0cHV0KCkgZGF0YUNoYW5nZTogRXZlbnRFbWl0dGVyPE1vdmVhYmxlTGlzdEl0ZW1bXT4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vdmVhYmxlTGlzdEl0ZW1bXT4oKTtcclxuICBAT3V0cHV0KCkgZGlzcGxheUNoYW5nZTogRXZlbnRFbWl0dGVyPE1vdmVhYmxlTGlzdEl0ZW0+ID0gbmV3IEV2ZW50RW1pdHRlcjxNb3ZlYWJsZUxpc3RJdGVtPigpO1xyXG4gIEBPdXRwdXQoKSBzZWxlY3RlZENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuXHJcbiAgb25FZGl0SWR4OiBudW1iZXIgPSBudWxsO1xyXG4gIGFsbG93RWRpdGlvbiA9IGZhbHNlO1xyXG4gIHJvd1NlbGVjdGVkSWR4OiBudW1iZXIgPSAtMTtcclxuICBmb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJywgW1xyXG4gICAgVmFsaWRhdG9ycy5yZXF1aXJlZFxyXG4gIF0pO1xyXG5cclxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6Y2xpY2snLCBbJyRldmVudCddKVxyXG4gIGhhbmRsZUNsaWNrKGU6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBpZiAoKHR5cGVvZiBlbGVtZW50LmNsYXNzTmFtZSkgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGlmIChlbGVtZW50LmNsYXNzTmFtZS5pbmRleE9mKCdtb3ZlYWJsZS10aXRsZScpID49IDApIHtcclxuICAgICAgICB0aGlzLmFsbG93RWRpdGlvbiA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5hbGxvd0VkaXRpb24gPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5vbkVkaXRJZHggIT09IG51bGwgJiYgdGhpcy5vbkVkaXRJZHggPCB0aGlzLmRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICB0aGlzLmRhdGFbdGhpcy5vbkVkaXRJZHhdLmRpc3BsYXkgPSB0aGlzLmZvcm1Db250cm9sLnZhbHVlO1xyXG4gICAgICAgICAgdGhpcy5kaXNwbGF5Q2hhbmdlLmVtaXQodGhpcy5kYXRhW3RoaXMub25FZGl0SWR4XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25FZGl0SWR4ID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJvcChldmVudDogQ2RrRHJhZ0Ryb3A8c3RyaW5nW10+KSB7XHJcbiAgICBpZiAodGhpcy5kYXRhW2V2ZW50LmN1cnJlbnRJbmRleF0uZHJhZ2dhYmxlICE9PSB1bmRlZmluZWQgJiYgIXRoaXMuZGF0YVtldmVudC5jdXJyZW50SW5kZXhdLmRyYWdnYWJsZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBtb3ZlSXRlbUluQXJyYXkodGhpcy5kYXRhLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xyXG4gICAgdGhpcy5kYXRhQ2hhbmdlLmVtaXQodGhpcy5kYXRhKTtcclxuICB9XHJcblxyXG4gIHN3aXRjaFRvRWRpdE1vZGUocm93OiBhbnksIGluZGV4OiBudW1iZXIpIHtcclxuICAgIHRoaXMuYWxsb3dFZGl0aW9uID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLm9uRWRpdElkeCAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmRhdGFbdGhpcy5vbkVkaXRJZHhdLmRpc3BsYXkgPSB0aGlzLmZvcm1Db250cm9sLnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyb3cuZWRpdGFibGUgIT0gdW5kZWZpbmVkICYmIHJvdy5lZGl0YWJsZSkge1xyXG4gICAgICB0aGlzLm9uRWRpdElkeCA9IGluZGV4O1xyXG4gICAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKHJvdy5kaXNwbGF5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0b3BFZGl0aW9uKCkge1xyXG4gICAgdGhpcy5kYXRhW3RoaXMub25FZGl0SWR4XS5kaXNwbGF5ID0gdGhpcy5mb3JtQ29udHJvbC52YWx1ZTtcclxuICAgIHRoaXMuZGlzcGxheUNoYW5nZS5lbWl0KHRoaXMuZGF0YVt0aGlzLm9uRWRpdElkeF0pO1xyXG4gICAgdGhpcy5vbkVkaXRJZHggPSBudWxsO1xyXG4gICAgdGhpcy5hbGxvd0VkaXRpb24gPSBmYWxzZTtcclxuXHJcbiAgfVxyXG5cclxuICBzZWxlY3QoaW5kZXg6IG51bWJlcikge1xyXG4gICAgdGhpcy5yb3dTZWxlY3RlZElkeCA9IGluZGV4O1xyXG4gICAgdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KGluZGV4KTtcclxuICB9XHJcblxyXG4gIGhpZGVTaG93KGluZGV4OiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLmRhdGFbaW5kZXhdLmhpZGRlbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuZGF0YVtpbmRleF0uaGlkZGVuID0gIXRoaXMuZGF0YVtpbmRleF0uaGlkZGVuO1xyXG4gICAgICB0aGlzLmRhdGFDaGFuZ2UuZW1pdCh0aGlzLmRhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZShpZHg6IG51bWJlcikge1xyXG4gICAgdGhpcy5vbkVkaXRJZHggPSBudWxsO1xyXG4gICAgdGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZSgnJyk7XHJcbiAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gKGluZGV4ICE9PSBpZHgpKTtcclxuICAgIHRoaXMucm93U2VsZWN0ZWRJZHggPSAtMTtcclxuICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdCgtMSk7XHJcbiAgICB0aGlzLmRhdGFDaGFuZ2UuZW1pdCh0aGlzLmRhdGEpO1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ==