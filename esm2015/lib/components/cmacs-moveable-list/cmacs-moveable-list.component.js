/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, HostListener, Input, Output, ChangeDetectorRef, } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { moveItemInArray } from "@angular/cdk/drag-drop";
import { NzI18nService } from 'ng-zorro-antd';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
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
    /**
     * @param {?} cdr
     * @param {?} i18n
     */
    constructor(cdr, i18n) {
        this.cdr = cdr;
        this.i18n = i18n;
        this.destroy$ = new Subject();
        /* Custom grid with pop up */
        this.header = 'Default Title';
        this.showLabel = 'Show';
        this.hideLabel = 'Hide';
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
     * @return {?}
     */
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            switch (this.i18n.getLocale().locale) {
                case 'de':
                    this.showLabel = 'Anzeigen';
                    this.hideLabel = 'Ausblenden';
                    break;
                case 'en':
                    this.showLabel = 'Show';
                    this.hideLabel = 'Hide';
                    break;
                default:
                    this.showLabel = 'Show';
                    this.hideLabel = 'Hide';
            }
            this.cdr.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
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
                template: "<div cdkDropList class=\"cmacs-custom-grid-list\" style=\"margin: 0 auto\" (cdkDropListDropped)=\"drop($event)\">\r\n  <div class=\"cmacs-custom-grid-box\">\r\n    <div class=\"cmacs-custom-grid-title\">\r\n      <span>{{header}}</span>\r\n    </div>\r\n    <div class=\"cmacs-custom-grid-lock\">\r\n      <span class=\"movespan\"><i class=\"iconUILarge-Lcok-Movement\"></i></span>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"cmacs-custom-grid-box\" *ngFor=\"let item of data; index as i\"\r\n    [class.cmacs-custom-grid-box-selected]=\"rowSelectedIdx === i\" (click)=\"select(i)\"\r\n    [cdkDragDisabled]=\"item.draggable !== undefined && !item.draggable\" cdkDrag>\r\n    <div cdkDragHandle (mousedown)=\"onEditIdx = null;\" class=\"handler-icon\"\r\n      [class.cmacs-custom-grid-drag-disabled]=\"item.draggable !== undefined && !item.draggable\">\r\n      <span class=\"movespan\"><i class=\"iconUILarge-Move_Horizen\"></i></span>\r\n    </div>\r\n\r\n    <div class=\"moveable-title\" *ngIf=\"onEditIdx !== i\" [style.user-select]=\"item.editable ? 'inherit' : 'none'\"\r\n      [style.color]=\"item.hidden ? '#97a0ae' : 'inherit'\" (click)=\"switchToEditMode(item, i)\">{{item.display}}</div>\r\n    <input class=\"moveable-title cmacs-custom-grid-input\" (keydown.enter)=\"stopEdition()\" cmacs-input\r\n      *ngIf=\"item.editable && allowEdition && onEditIdx === i\" [formControl]=\"formControl\" />\r\n\r\n    <div class=\"cmacs-custom-hide-show\" *ngIf=\"item.template === undefined\"\r\n      [style.color]=\"item.hidden || item.hidden === undefined ? '#97a0ae' : 'inherit'\" (click)=\"hideShow(i)\">\r\n      <span class=\"movespan\">\r\n        <i *ngIf=\"item.hidden === undefined\" class=\"iconUILarge-Lcok-Movement\"></i>\r\n        <i *ngIf=\"item.hidden !== undefined && item.hidden\"\r\n           class=\"iconUILarge-EyeSlash\"\r\n           [title]=\"showLabel\"\r\n           placement=\"right\"\r\n           cmacs-tooltip>\r\n        </i>\r\n        <i *ngIf=\"item.hidden !== undefined && !item.hidden\"\r\n           [title]=\"hideLabel\"\r\n           placement=\"right\"\r\n           cmacs-tooltip\r\n           class=\"iconUILarge-Eye\">\r\n        </i>\r\n      </span>\r\n    </div>\r\n\r\n    <ng-container *ngIf=\"item.template\">\r\n      <div [ngTemplateOutlet]=\"item.template.ref\" [ngTemplateOutletContext]=\"item.template.context\"\r\n        class=\"cmacs-custom-hide-show\"></div>\r\n    </ng-container>\r\n  </div>\r\n\r\n</div>\r\n",
                styles: [".cmacs-custom-grid-list{max-width:100%;border:1px solid #dee0e5;display:block;background:#fff;border-radius:4px;overflow:hidden;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#97a0ae}.cmacs-custom-grid-box{border-bottom:1px solid #dee0e5;box-sizing:border-box;background:#fff;font-size:12px;display:-webkit-box;display:flex;font-weight:400;font-style:normal;font-stretch:normal;letter-spacing:normal;color:#656c79;padding:0 10px}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);opacity:0}.cdk-drag-placeholder{opacity:1;border-bottom:1px solid #2a7cff!important}.cdk-drag-animating{-webkit-transition:-webkit-transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}.cmacs-custom-grid-box:last-child{border:none}.cmacs-custom-grid-list.cdk-drop-list-dragging .cmacs-custom-grid-box:not(.cdk-drag-placeholder){-webkit-transition:-webkit-transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}.handler-icon{font-size:20px;color:#bec4cd;position:relative;cursor:move;line-height:26px}.moveable-title{padding-left:15px;line-height:32px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cmacs-custom-grid-title{-webkit-box-align:start;align-items:flex-start;position:relative;color:#97a0ae;line-height:32px;padding:0 10px 0 35px}.cmacs-custom-grid-lock{margin-left:auto;font-size:20px;padding-right:15px}.cmacs-custom-grid-box:not(.cmacs-custom-grid-box-selected):hover{background-color:#f6f7fb}.cmacs-custom-grid-box-selected{background-color:#f2f7ff}.cmacs-custom-grid-box-selected .handler-icon{color:#656c79}.cmacs-custom-grid-input{height:32px;width:371px;position:relative;padding-left:7px;font-size:12px;margin-left:7px}.cmacs-custom-grid-input:focus,.cmacs-custom-grid-input:hover{border-color:#2a7cff}.cmacs-custom-hide-show{margin-left:auto;font-size:20px;position:relative;padding-right:15px}.cmacs-custom-hide-show .iconUILarge-Eye,.cmacs-custom-hide-show .iconUILarge-EyeSlash{cursor:pointer}.cmacs-custom-grid-drag-disabled{color:#97a0ae;cursor:default}.movespan{height:20px;width:20px;position:relative;font-size:20px;line-height:20px;vertical-align:middle;text-align:center;display:inline-block}", `
      cmacs-moveable-list {
        display: block;
      }
    `]
            }] }
];
/** @nocollapse */
CmacsMoveableListComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzI18nService }
];
CmacsMoveableListComponent.propDecorators = {
    header: [{ type: Input }],
    showLabel: [{ type: Input }],
    hideLabel: [{ type: Input }],
    data: [{ type: Input }],
    dataChange: [{ type: Output }],
    displayChange: [{ type: Output }],
    selectedChange: [{ type: Output }],
    handleClick: [{ type: HostListener, args: ['window:click', ['$event'],] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    CmacsMoveableListComponent.prototype.destroy$;
    /** @type {?} */
    CmacsMoveableListComponent.prototype.header;
    /** @type {?} */
    CmacsMoveableListComponent.prototype.showLabel;
    /** @type {?} */
    CmacsMoveableListComponent.prototype.hideLabel;
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
    /**
     * @type {?}
     * @private
     */
    CmacsMoveableListComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    CmacsMoveableListComponent.prototype.i18n;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtbW92ZWFibGUtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLW1vdmVhYmxlLWxpc3QvY21hY3MtbW92ZWFibGUtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUFFLFlBQVksRUFDMUIsS0FBSyxFQUNMLE1BQU0sRUFHTixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RCxPQUFPLEVBQWUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztBQUUvQixzQ0FNQzs7O0lBTEMsbUNBQWdCOztJQUNoQixrQ0FBZ0I7O0lBQ2hCLG9DQUFrQjs7SUFDbEIscUNBQW1COztJQUNuQixvQ0FBZ0M7O0FBZ0JsQyxNQUFNLE9BQU8sMEJBQTBCOzs7OztJQW9CckMsWUFBb0IsR0FBc0IsRUFBVSxJQUFtQjtRQUFuRCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQWU7UUFsQi9ELGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDOztRQUd4QixXQUFNLEdBQVcsZUFBZSxDQUFDO1FBQ2pDLGNBQVMsR0FBVyxNQUFNLENBQUM7UUFDM0IsY0FBUyxHQUFXLE1BQU0sQ0FBQztRQUMzQixTQUFJLEdBQXVCLEVBQUUsQ0FBQztRQUM3QixlQUFVLEdBQXFDLElBQUksWUFBWSxFQUFzQixDQUFDO1FB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QUNwQywwQ0FBdUM7O0lBQ3ZDLGdEQUFnRzs7SUFDaEcsbURBQStGOztJQUMvRixvREFBNEU7O0lBRTVFLCtDQUF5Qjs7SUFDekIsa0RBQXFCOztJQUNyQixvREFBNEI7O0lBQzVCLGlEQUVHOzs7OztJQUVTLHlDQUE4Qjs7Ozs7SUFBRSwwQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lcixcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgQ2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheSB9IGZyb20gXCJAYW5ndWxhci9jZGsvZHJhZy1kcm9wXCI7XHJcbmltcG9ydCB7IENtYWNzR3JpZFRlbXBsYXRlUmVmIH0gZnJvbSBcIi4uL2NvcmUvaW50ZXJmYWNlcy9ncmlkLWNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNb3ZlYWJsZUxpc3RJdGVtIHtcclxuICBkaXNwbGF5OiBzdHJpbmc7XHJcbiAgaGlkZGVuOiBib29sZWFuO1xyXG4gIGVkaXRhYmxlOiBib29sZWFuO1xyXG4gIGRyYWdnYWJsZTogYm9vbGVhbjtcclxuICB0ZW1wbGF0ZT86IENtYWNzR3JpZFRlbXBsYXRlUmVmO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLW1vdmVhYmxlLWxpc3QnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NNb3ZlYWJsZUxpc3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1tb3ZlYWJsZS1saXN0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1tb3ZlYWJsZS1saXN0LmNvbXBvbmVudC5jc3MnXSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgY21hY3MtbW92ZWFibGUtbGlzdCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc01vdmVhYmxlTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0IHtcclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIC8qIEN1c3RvbSBncmlkIHdpdGggcG9wIHVwICovXHJcbiAgQElucHV0KCkgaGVhZGVyOiBzdHJpbmcgPSAnRGVmYXVsdCBUaXRsZSc7XHJcbiAgQElucHV0KCkgc2hvd0xhYmVsOiBzdHJpbmcgPSAnU2hvdyc7XHJcbiAgQElucHV0KCkgaGlkZUxhYmVsOiBzdHJpbmcgPSAnSGlkZSc7XHJcbiAgQElucHV0KCkgZGF0YTogTW92ZWFibGVMaXN0SXRlbVtdID0gW107XHJcbiAgQE91dHB1dCgpIGRhdGFDaGFuZ2U6IEV2ZW50RW1pdHRlcjxNb3ZlYWJsZUxpc3RJdGVtW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxNb3ZlYWJsZUxpc3RJdGVtW10+KCk7XHJcbiAgQE91dHB1dCgpIGRpc3BsYXlDaGFuZ2U6IEV2ZW50RW1pdHRlcjxNb3ZlYWJsZUxpc3RJdGVtPiA9IG5ldyBFdmVudEVtaXR0ZXI8TW92ZWFibGVMaXN0SXRlbT4oKTtcclxuICBAT3V0cHV0KCkgc2VsZWN0ZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblxyXG4gIG9uRWRpdElkeDogbnVtYmVyID0gbnVsbDtcclxuICBhbGxvd0VkaXRpb24gPSBmYWxzZTtcclxuICByb3dTZWxlY3RlZElkeDogbnVtYmVyID0gLTE7XHJcbiAgZm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycsIFtcclxuICAgIFZhbGlkYXRvcnMucmVxdWlyZWRcclxuICBdKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSkge1xyXG4gICAgICAgIGNhc2UgJ2RlJzpcclxuICAgICAgICAgIHRoaXMuc2hvd0xhYmVsID0gJ0FuemVpZ2VuJztcclxuICAgICAgICAgIHRoaXMuaGlkZUxhYmVsID0gJ0F1c2JsZW5kZW4nO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnZW4nOlxyXG4gICAgICAgICAgdGhpcy5zaG93TGFiZWwgPSAnU2hvdyc7XHJcbiAgICAgICAgICB0aGlzLmhpZGVMYWJlbCA9ICdIaWRlJztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICB0aGlzLnNob3dMYWJlbCA9ICdTaG93JztcclxuICAgICAgICAgIHRoaXMuaGlkZUxhYmVsID0gJ0hpZGUnO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OmNsaWNrJywgWyckZXZlbnQnXSlcclxuICBoYW5kbGVDbGljayhlOiBFdmVudCk6IHZvaWQge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgaWYgKCh0eXBlb2YgZWxlbWVudC5jbGFzc05hbWUpID09PSAnc3RyaW5nJykge1xyXG4gICAgICBpZiAoZWxlbWVudC5jbGFzc05hbWUuaW5kZXhPZignbW92ZWFibGUtdGl0bGUnKSA+PSAwKSB7XHJcbiAgICAgICAgdGhpcy5hbGxvd0VkaXRpb24gPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYWxsb3dFZGl0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMub25FZGl0SWR4ICE9PSBudWxsICYmIHRoaXMub25FZGl0SWR4IDwgdGhpcy5kYXRhLmxlbmd0aCkge1xyXG4gICAgICAgICAgdGhpcy5kYXRhW3RoaXMub25FZGl0SWR4XS5kaXNwbGF5ID0gdGhpcy5mb3JtQ29udHJvbC52YWx1ZTtcclxuICAgICAgICAgIHRoaXMuZGlzcGxheUNoYW5nZS5lbWl0KHRoaXMuZGF0YVt0aGlzLm9uRWRpdElkeF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9uRWRpdElkeCA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyb3AoZXZlbnQ6IENka0RyYWdEcm9wPHN0cmluZ1tdPikge1xyXG4gICAgaWYgKHRoaXMuZGF0YVtldmVudC5jdXJyZW50SW5kZXhdLmRyYWdnYWJsZSAhPT0gdW5kZWZpbmVkICYmICF0aGlzLmRhdGFbZXZlbnQuY3VycmVudEluZGV4XS5kcmFnZ2FibGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbW92ZUl0ZW1JbkFycmF5KHRoaXMuZGF0YSwgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcclxuICAgIHRoaXMuZGF0YUNoYW5nZS5lbWl0KHRoaXMuZGF0YSk7XHJcbiAgfVxyXG5cclxuICBzd2l0Y2hUb0VkaXRNb2RlKHJvdzogYW55LCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmFsbG93RWRpdGlvbiA9IHRydWU7XHJcbiAgICBpZiAodGhpcy5vbkVkaXRJZHggIT09IG51bGwpIHtcclxuICAgICAgdGhpcy5kYXRhW3RoaXMub25FZGl0SWR4XS5kaXNwbGF5ID0gdGhpcy5mb3JtQ29udHJvbC52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocm93LmVkaXRhYmxlICE9IHVuZGVmaW5lZCAmJiByb3cuZWRpdGFibGUpIHtcclxuICAgICAgdGhpcy5vbkVkaXRJZHggPSBpbmRleDtcclxuICAgICAgdGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZShyb3cuZGlzcGxheSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdG9wRWRpdGlvbigpIHtcclxuICAgIHRoaXMuZGF0YVt0aGlzLm9uRWRpdElkeF0uZGlzcGxheSA9IHRoaXMuZm9ybUNvbnRyb2wudmFsdWU7XHJcbiAgICB0aGlzLmRpc3BsYXlDaGFuZ2UuZW1pdCh0aGlzLmRhdGFbdGhpcy5vbkVkaXRJZHhdKTtcclxuICAgIHRoaXMub25FZGl0SWR4ID0gbnVsbDtcclxuICAgIHRoaXMuYWxsb3dFZGl0aW9uID0gZmFsc2U7XHJcblxyXG4gIH1cclxuXHJcbiAgc2VsZWN0KGluZGV4OiBudW1iZXIpIHtcclxuICAgIHRoaXMucm93U2VsZWN0ZWRJZHggPSBpbmRleDtcclxuICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdChpbmRleCk7XHJcbiAgfVxyXG5cclxuICBoaWRlU2hvdyhpbmRleDogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy5kYXRhW2luZGV4XS5oaWRkZW4gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmRhdGFbaW5kZXhdLmhpZGRlbiA9ICF0aGlzLmRhdGFbaW5kZXhdLmhpZGRlbjtcclxuICAgICAgdGhpcy5kYXRhQ2hhbmdlLmVtaXQodGhpcy5kYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmUoaWR4OiBudW1iZXIpIHtcclxuICAgIHRoaXMub25FZGl0SWR4ID0gbnVsbDtcclxuICAgIHRoaXMuZm9ybUNvbnRyb2wuc2V0VmFsdWUoJycpO1xyXG4gICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IChpbmRleCAhPT0gaWR4KSk7XHJcbiAgICB0aGlzLnJvd1NlbGVjdGVkSWR4ID0gLTE7XHJcbiAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQoLTEpO1xyXG4gICAgdGhpcy5kYXRhQ2hhbmdlLmVtaXQodGhpcy5kYXRhKTtcclxuICB9XHJcblxyXG5cclxufVxyXG4iXX0=