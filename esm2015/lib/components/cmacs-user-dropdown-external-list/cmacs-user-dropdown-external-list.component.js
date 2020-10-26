/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export class CmacsUserDropdownExternalListComponent {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this._data = [];
        this.listDividers = [];
        this.origin = [];
        this.removedOption = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set data(value) {
        if (value) {
            this.origin = value;
            /** @type {?} */
            const operatedData = this.operateData(value);
            this._data = [...operatedData];
        }
    }
    /**
     * @return {?}
     */
    get data() {
        return this._data;
    }
    /**
     * @param {?} values
     * @return {?}
     */
    operateData(values) {
        /** @type {?} */
        const operatedData = [];
        this.listDividers = [...Array.from(new Set(values.map((/**
             * @param {?} e
             * @return {?}
             */
            e => e.divider))))];
        for (let i = 0; i < this.listDividers.length; i++) {
            /** @type {?} */
            const divider = this.listDividers[i];
            /** @type {?} */
            const children = values.filter((/**
             * @param {?} e
             * @return {?}
             */
            e => e.divider === divider));
            /** @type {?} */
            const elem = { divider, children };
            operatedData.push(elem);
        }
        return operatedData;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getInitials(name) {
        /** @type {?} */
        let initials = name.match(/\b\w/g) || [];
        initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
        return initials;
    }
    /**
     * @param {?} picture
     * @return {?}
     */
    getBackgroundImage(picture) {
        return this.sanitizer.bypassSecurityTrustStyle('url(\'' + picture + '\')');
    }
    /**
     * @param {?} elem
     * @return {?}
     */
    removeOption(elem) {
        /** @type {?} */
        const filteredData = this.origin.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.value !== elem.value));
        this.data = filteredData;
        this.removedOption.emit(elem);
    }
}
CmacsUserDropdownExternalListComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmacs-user-dropdown-external-list',
                exportAs: 'cmacsUserDropdownExternalList',
                template: "<ng-container *ngFor=\"let option of _data; index as i\">\r\n  <ng-container *ngFor=\"let elem of option.children; index as j\">\r\n    <div class=\"cmacs-user-dropdown-option-wrapper cmacs-user-dropdown-external-list-wrapper\">\r\n\r\n      <ng-container *ngIf=\"elem.template; else defaultTPL\">\r\n        <ng-container [ngTemplateOutlet]=\"elem.template.ref\"\r\n                      [ngTemplateOutletContext]=\"elem.template.context\">\r\n        </ng-container>\r\n      </ng-container>\r\n\r\n      <ng-template #defaultTPL>\r\n        <div class=\"cmacs-user-dropdown-info-wrapper\" [class.cmacs-user-dropdown-hide-picture]=\"elem.hidePicture\">\r\n\r\n          <div class=\"cmacs-user-dropdown-person-picture\"\r\n               [class.cmacs-user-dropdown-no-picture]=\"elem.hidePicture\"\r\n               *ngIf=\"elem.role === 'user'\"\r\n               [style.background-image]=\"elem.picture ? getBackgroundImage(elem.picture): 'none'\">\r\n            <span class=\"cmacs-user-dropdown-initials\" *ngIf=\"!elem.picture\">{{getInitials(elem.label)}}</span>\r\n          </div>\r\n\r\n          <div class=\"cmacs-user-dropdown-person-picture\"\r\n               [class.cmacs-guest-no-picture]=\"!elem.picture\"\r\n               [class.cmacs-user-dropdown-no-picture]=\"elem.hidePicture\"\r\n               *ngIf=\"elem.role === 'guest'\"\r\n               [style.background-image]=\"elem.picture ? getBackgroundImage(elem.picture): 'none'\">\r\n            <i class=\"iconCreation-User\" *ngIf=\"!elem.picture\"></i>\r\n          </div>\r\n\r\n          <div class=\"cmacs-user-dropdown-person-picture\"\r\n               [class.cmacs-team-no-picture]=\"!elem.picture\"\r\n               [class.cmacs-user-dropdown-no-picture]=\"elem.hidePicture\"\r\n               *ngIf=\"elem.role === 'team'\"\r\n               [style.background-image]=\"elem.picture ? getBackgroundImage(elem.picture): 'none'\">\r\n            <i class=\"iconCreation-Team\" *ngIf=\"!elem.picture\"></i>\r\n          </div>\r\n\r\n          <div class=\"cmacs-user-dropdown-title\" [class.cmacs-user-dropdown-team-title]=\"elem.role === 'team'\">\r\n            {{elem.label}}\r\n          </div>\r\n          <div *ngIf=\"elem.role === 'user' || elem.role === 'guest'\" class=\"cmacs-user-dropdown-subtitle\">{{elem.charge}}</div>\r\n        </div>\r\n      </ng-template>\r\n\r\n      <span (click)=\"removeOption(elem)\" class=\"cmacs-user-dropdown-external-list-remove-icon\">\r\n        <i class=\"iconUISmall-Close\"></i>\r\n      </span>\r\n    </div>\r\n  </ng-container>\r\n</ng-container>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                styles: [".cmacs-user-dropdown-person-picture{text-align:center;padding-top:2px;border-radius:3px;width:34px;height:34px;background-color:#a100cd;color:#fff;background-repeat:no-repeat;background-position:center center;background-size:contain}.cmacs-user-dropdown-divider{font-family:Roboto-Medium;font-size:13px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.23;letter-spacing:normal;color:#3b3f46;padding:7px 14px 8px;background-color:#fff!important}.cmacs-user-dropdown-initials{position:relative;top:5px;font-size:14px}.cmacs-user-dropdown-title{position:absolute;top:0;left:45px;font-family:Roboto-Regular;font-size:12px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;color:#656c79;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:calc(100% - 75px)}.cmacs-user-dropdown-subtitle{position:absolute;top:16px;left:45px;font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;color:#97a0ae;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:calc(100% - 75px)}.cmacs-team-no-picture{border-radius:3px;border:1.1px solid #dee0e5;background-color:#fff;color:#656c79;font-size:16px;padding:5px 0}.cmacs-user-dropdown-team-title{top:7px}.cmacs-guest-no-picture{border-radius:3px;background-color:#00cda1;font-size:16px;padding:6px 0}.cmacs-user-dropdown-error{color:#f6503c;font-size:10px;font-weight:400;font-stretch:normal;font-style:normal;line-height:2;letter-spacing:normal;padding:5px 0;position:relative;left:12px}.cmacs-user-dropdown-no-picture{opacity:0}.cmacs-user-dropdown-hide-picture .cmacs-user-dropdown-subtitle,.cmacs-user-dropdown-hide-picture .cmacs-user-dropdown-title{left:0}.cmacs-user-dropdown-external-list-remove-icon{float:right;position:relative;font-size:18px;top:-29px;right:10px;color:#97a0ae;cursor:pointer;opacity:0}.cmacs-user-dropdown-external-list-wrapper{border-radius:5px}.cmacs-user-dropdown-external-list-wrapper:hover{background-color:#f2f7ff}.cmacs-user-dropdown-external-list-wrapper:hover .cmacs-user-dropdown-external-list-remove-icon{opacity:1}", `cmacs-user-dropdown-external-list {
        display: block;
      }
    `]
            }] }
];
/** @nocollapse */
CmacsUserDropdownExternalListComponent.ctorParameters = () => [
    { type: DomSanitizer }
];
CmacsUserDropdownExternalListComponent.propDecorators = {
    removedOption: [{ type: Output }],
    data: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CmacsUserDropdownExternalListComponent.prototype._data;
    /** @type {?} */
    CmacsUserDropdownExternalListComponent.prototype.listDividers;
    /** @type {?} */
    CmacsUserDropdownExternalListComponent.prototype.origin;
    /** @type {?} */
    CmacsUserDropdownExternalListComponent.prototype.removedOption;
    /**
     * @type {?}
     * @private
     */
    CmacsUserDropdownExternalListComponent.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdXNlci1kcm9wZG93bi1leHRlcm5hbC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtdXNlci1kcm9wZG93bi1leHRlcm5hbC1saXN0L2NtYWNzLXVzZXItZHJvcGRvd24tZXh0ZXJuYWwtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUdOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFpQnpELE1BQU0sT0FBTyxzQ0FBc0M7Ozs7SUFvQmpELFlBQW9CLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFsQjNDLFVBQUssR0FBVSxFQUFFLENBQUM7UUFDbEIsaUJBQVksR0FBVSxFQUFFLENBQUM7UUFDekIsV0FBTSxHQUFVLEVBQUUsQ0FBQztRQUNULGtCQUFhLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7SUFldEIsQ0FBQzs7Ozs7SUFiaEQsSUFDSSxJQUFJLENBQUMsS0FBWTtRQUNuQixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDOztrQkFDZCxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDNUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUM7U0FDaEM7SUFDSCxDQUFDOzs7O0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBSUQsV0FBVyxDQUFDLE1BQWE7O2NBQ2pCLFlBQVksR0FBRyxFQUFFO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUc7Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2tCQUMzQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7O2tCQUM5QixRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU07Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssT0FBTyxFQUFDOztrQkFDcEQsSUFBSSxHQUFHLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRTtZQUNsQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3pCO1FBQ0QsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsSUFBUzs7WUFDZixRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO1FBQ3hDLFFBQVEsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0UsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxPQUFPO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLEdBQUcsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQzdFLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLElBQVM7O2NBQ2QsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFDO1FBQzFFLElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7OztZQS9ERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1DQUFtQztnQkFDN0MsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsMGlGQUFpRTtnQkFDakUsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxtQkFBbUIsRUFBRSxLQUFLO3lvRUFHeEI7OztLQUdDO2FBRUo7Ozs7WUFoQlEsWUFBWTs7OzRCQXNCbEIsTUFBTTttQkFFTixLQUFLOzs7O0lBTE4sdURBQWtCOztJQUNsQiw4REFBeUI7O0lBQ3pCLHdEQUFtQjs7SUFDbkIsK0RBQXFFOzs7OztJQWV6RCwyREFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgTmdDbGFzc1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtdXNlci1kcm9wZG93bi1leHRlcm5hbC1saXN0JyxcclxuICBleHBvcnRBczogJ2NtYWNzVXNlckRyb3Bkb3duRXh0ZXJuYWxMaXN0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtdXNlci1kcm9wZG93bi1leHRlcm5hbC1saXN0LmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXVzZXItZHJvcGRvd24tZXh0ZXJuYWwtbGlzdC5jb21wb25lbnQuY3NzJ10sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgY21hY3MtdXNlci1kcm9wZG93bi1leHRlcm5hbC1saXN0IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzVXNlckRyb3Bkb3duRXh0ZXJuYWxMaXN0Q29tcG9uZW50IHtcclxuXHJcbiAgX2RhdGE6IGFueVtdID0gW107XHJcbiAgbGlzdERpdmlkZXJzOiBhbnlbXSA9IFtdO1xyXG4gIG9yaWdpbjogYW55W10gPSBbXTtcclxuICBAT3V0cHV0KCkgcmVtb3ZlZE9wdGlvbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgZGF0YSh2YWx1ZTogYW55W10pIHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB0aGlzLm9yaWdpbiA9IHZhbHVlO1xyXG4gICAgICBjb25zdCBvcGVyYXRlZERhdGEgPSB0aGlzLm9wZXJhdGVEYXRhKHZhbHVlKTtcclxuICAgICAgdGhpcy5fZGF0YSA9IFsuLi5vcGVyYXRlZERhdGFdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGRhdGEoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHsgfVxyXG5cclxuICBvcGVyYXRlRGF0YSh2YWx1ZXM6IGFueVtdKSB7XHJcbiAgICBjb25zdCBvcGVyYXRlZERhdGEgPSBbXTtcclxuICAgIHRoaXMubGlzdERpdmlkZXJzID0gWy4uLkFycmF5LmZyb20obmV3IFNldCh2YWx1ZXMubWFwKGUgPT4gZS5kaXZpZGVyKSkpXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0RGl2aWRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgZGl2aWRlciA9IHRoaXMubGlzdERpdmlkZXJzW2ldO1xyXG4gICAgICBjb25zdCBjaGlsZHJlbiA9IHZhbHVlcy5maWx0ZXIoZSA9PiBlLmRpdmlkZXIgPT09IGRpdmlkZXIpO1xyXG4gICAgICBjb25zdCBlbGVtID0geyBkaXZpZGVyLCBjaGlsZHJlbiB9O1xyXG4gICAgICBvcGVyYXRlZERhdGEucHVzaChlbGVtKTtcclxuICAgIH1cclxuICAgIHJldHVybiBvcGVyYXRlZERhdGE7XHJcbiAgfVxyXG5cclxuICBnZXRJbml0aWFscyhuYW1lOiBhbnkpIHtcclxuICAgIGxldCBpbml0aWFscyA9IG5hbWUubWF0Y2goL1xcYlxcdy9nKSB8fCBbXTtcclxuICAgIGluaXRpYWxzID0gKChpbml0aWFscy5zaGlmdCgpIHx8ICcnKSArIChpbml0aWFscy5wb3AoKSB8fCAnJykpLnRvVXBwZXJDYXNlKCk7XHJcbiAgICByZXR1cm4gaW5pdGlhbHM7XHJcbiAgfVxyXG5cclxuICBnZXRCYWNrZ3JvdW5kSW1hZ2UocGljdHVyZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSgndXJsKFxcJycgKyBwaWN0dXJlICsgJ1xcJyknKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZU9wdGlvbihlbGVtOiBhbnkpIHtcclxuICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IHRoaXMub3JpZ2luLmZpbHRlcihpdGVtID0+IGl0ZW0udmFsdWUgIT09IGVsZW0udmFsdWUpO1xyXG4gICAgdGhpcy5kYXRhID0gZmlsdGVyZWREYXRhO1xyXG4gICAgdGhpcy5yZW1vdmVkT3B0aW9uLmVtaXQoZWxlbSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==