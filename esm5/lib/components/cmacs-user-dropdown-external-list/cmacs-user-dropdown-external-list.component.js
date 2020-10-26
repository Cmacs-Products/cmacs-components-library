/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
var CmacsUserDropdownExternalListComponent = /** @class */ (function () {
    function CmacsUserDropdownExternalListComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this._data = [];
        this.listDividers = [];
        this.origin = [];
        this.removedOption = new EventEmitter();
    }
    Object.defineProperty(CmacsUserDropdownExternalListComponent.prototype, "data", {
        get: /**
         * @return {?}
         */
        function () {
            return this._data;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.origin = value;
                /** @type {?} */
                var operatedData = this.operateData(value);
                this._data = tslib_1.__spread(operatedData);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} values
     * @return {?}
     */
    CmacsUserDropdownExternalListComponent.prototype.operateData = /**
     * @param {?} values
     * @return {?}
     */
    function (values) {
        /** @type {?} */
        var operatedData = [];
        this.listDividers = tslib_1.__spread(Array.from(new Set(values.map((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e.divider; })))));
        var _loop_1 = function (i) {
            /** @type {?} */
            var divider = this_1.listDividers[i];
            /** @type {?} */
            var children = values.filter((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return e.divider === divider; }));
            /** @type {?} */
            var elem = { divider: divider, children: children };
            operatedData.push(elem);
        };
        var this_1 = this;
        for (var i = 0; i < this.listDividers.length; i++) {
            _loop_1(i);
        }
        return operatedData;
    };
    /**
     * @param {?} name
     * @return {?}
     */
    CmacsUserDropdownExternalListComponent.prototype.getInitials = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        /** @type {?} */
        var initials = name.match(/\b\w/g) || [];
        initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
        return initials;
    };
    /**
     * @param {?} picture
     * @return {?}
     */
    CmacsUserDropdownExternalListComponent.prototype.getBackgroundImage = /**
     * @param {?} picture
     * @return {?}
     */
    function (picture) {
        return this.sanitizer.bypassSecurityTrustStyle('url(\'' + picture + '\')');
    };
    /**
     * @param {?} elem
     * @return {?}
     */
    CmacsUserDropdownExternalListComponent.prototype.removeOption = /**
     * @param {?} elem
     * @return {?}
     */
    function (elem) {
        /** @type {?} */
        var filteredData = this.origin.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.value !== elem.value; }));
        this.data = filteredData;
        this.removedOption.emit(elem);
    };
    CmacsUserDropdownExternalListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-user-dropdown-external-list',
                    exportAs: 'cmacsUserDropdownExternalList',
                    template: "<ng-container *ngFor=\"let option of _data; index as i\">\r\n  <ng-container *ngFor=\"let elem of option.children; index as j\">\r\n    <div class=\"cmacs-user-dropdown-option-wrapper cmacs-user-dropdown-external-list-wrapper\">\r\n\r\n      <ng-container *ngIf=\"elem.template; else defaultTPL\">\r\n        <ng-container [ngTemplateOutlet]=\"elem.template.ref\"\r\n                      [ngTemplateOutletContext]=\"elem.template.context\">\r\n        </ng-container>\r\n      </ng-container>\r\n\r\n      <ng-template #defaultTPL>\r\n        <div class=\"cmacs-user-dropdown-info-wrapper\" [class.cmacs-user-dropdown-hide-picture]=\"elem.hidePicture\">\r\n\r\n          <div class=\"cmacs-user-dropdown-person-picture\"\r\n               [class.cmacs-user-dropdown-no-picture]=\"elem.hidePicture\"\r\n               *ngIf=\"elem.role === 'user'\"\r\n               [style.background-image]=\"elem.picture ? getBackgroundImage(elem.picture): 'none'\">\r\n            <span class=\"cmacs-user-dropdown-initials\" *ngIf=\"!elem.picture\">{{getInitials(elem.label)}}</span>\r\n          </div>\r\n\r\n          <div class=\"cmacs-user-dropdown-person-picture\"\r\n               [class.cmacs-guest-no-picture]=\"!elem.picture\"\r\n               [class.cmacs-user-dropdown-no-picture]=\"elem.hidePicture\"\r\n               *ngIf=\"elem.role === 'guest'\"\r\n               [style.background-image]=\"elem.picture ? getBackgroundImage(elem.picture): 'none'\">\r\n            <i class=\"iconCreation-User\" *ngIf=\"!elem.picture\"></i>\r\n          </div>\r\n\r\n          <div class=\"cmacs-user-dropdown-person-picture\"\r\n               [class.cmacs-team-no-picture]=\"!elem.picture\"\r\n               [class.cmacs-user-dropdown-no-picture]=\"elem.hidePicture\"\r\n               *ngIf=\"elem.role === 'team'\"\r\n               [style.background-image]=\"elem.picture ? getBackgroundImage(elem.picture): 'none'\">\r\n            <i class=\"iconCreation-Team\" *ngIf=\"!elem.picture\"></i>\r\n          </div>\r\n\r\n          <div class=\"cmacs-user-dropdown-title\" [class.cmacs-user-dropdown-team-title]=\"elem.role === 'team'\">\r\n            {{elem.label}}\r\n          </div>\r\n          <div *ngIf=\"elem.role === 'user' || elem.role === 'guest'\" class=\"cmacs-user-dropdown-subtitle\">{{elem.charge}}</div>\r\n        </div>\r\n      </ng-template>\r\n\r\n      <span (click)=\"removeOption(elem)\" class=\"cmacs-user-dropdown-external-list-remove-icon\">\r\n        <i class=\"iconUISmall-Close\"></i>\r\n      </span>\r\n    </div>\r\n  </ng-container>\r\n</ng-container>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    styles: [".cmacs-user-dropdown-person-picture{text-align:center;padding-top:2px;border-radius:3px;width:34px;height:34px;background-color:#a100cd;color:#fff;background-repeat:no-repeat;background-position:center center;background-size:contain}.cmacs-user-dropdown-divider{font-family:Roboto-Medium;font-size:13px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.23;letter-spacing:normal;color:#3b3f46;padding:7px 14px 8px;background-color:#fff!important}.cmacs-user-dropdown-initials{position:relative;top:5px;font-size:14px}.cmacs-user-dropdown-title{position:absolute;top:0;left:45px;font-family:Roboto-Regular;font-size:12px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;color:#656c79;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:calc(100% - 75px)}.cmacs-user-dropdown-subtitle{position:absolute;top:16px;left:45px;font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;color:#97a0ae;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:calc(100% - 75px)}.cmacs-team-no-picture{border-radius:3px;border:1.1px solid #dee0e5;background-color:#fff;color:#656c79;font-size:16px;padding:5px 0}.cmacs-user-dropdown-team-title{top:7px}.cmacs-guest-no-picture{border-radius:3px;background-color:#00cda1;font-size:16px;padding:6px 0}.cmacs-user-dropdown-error{color:#f6503c;font-size:10px;font-weight:400;font-stretch:normal;font-style:normal;line-height:2;letter-spacing:normal;padding:5px 0;position:relative;left:12px}.cmacs-user-dropdown-no-picture{opacity:0}.cmacs-user-dropdown-hide-picture .cmacs-user-dropdown-subtitle,.cmacs-user-dropdown-hide-picture .cmacs-user-dropdown-title{left:0}.cmacs-user-dropdown-external-list-remove-icon{float:right;position:relative;font-size:18px;top:-29px;right:10px;color:#97a0ae;cursor:pointer;opacity:0}.cmacs-user-dropdown-external-list-wrapper{border-radius:5px}.cmacs-user-dropdown-external-list-wrapper:hover{background-color:#f2f7ff}.cmacs-user-dropdown-external-list-wrapper:hover .cmacs-user-dropdown-external-list-remove-icon{opacity:1}", "cmacs-user-dropdown-external-list {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    CmacsUserDropdownExternalListComponent.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    CmacsUserDropdownExternalListComponent.propDecorators = {
        removedOption: [{ type: Output }],
        data: [{ type: Input }]
    };
    return CmacsUserDropdownExternalListComponent;
}());
export { CmacsUserDropdownExternalListComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdXNlci1kcm9wZG93bi1leHRlcm5hbC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtdXNlci1kcm9wZG93bi1leHRlcm5hbC1saXN0L2NtYWNzLXVzZXItZHJvcGRvd24tZXh0ZXJuYWwtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFHTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXpEO0lBbUNFLGdEQUFvQixTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO1FBbEIzQyxVQUFLLEdBQVUsRUFBRSxDQUFDO1FBQ2xCLGlCQUFZLEdBQVUsRUFBRSxDQUFDO1FBQ3pCLFdBQU0sR0FBVSxFQUFFLENBQUM7UUFDVCxrQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBZXRCLENBQUM7SUFiaEQsc0JBQ0ksd0RBQUk7Ozs7UUFRUjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7OztRQVhELFVBQ1MsS0FBWTtZQUNuQixJQUFJLEtBQUssRUFBRTtnQkFDVCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzs7b0JBQ2QsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO2dCQUM1QyxJQUFJLENBQUMsS0FBSyxvQkFBTyxZQUFZLENBQUMsQ0FBQzthQUNoQztRQUNILENBQUM7OztPQUFBOzs7OztJQVFELDREQUFXOzs7O0lBQVgsVUFBWSxNQUFhOztZQUNqQixZQUFZLEdBQUcsRUFBRTtRQUN2QixJQUFJLENBQUMsWUFBWSxvQkFBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsT0FBTyxFQUFULENBQVMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUNoRSxDQUFDOztnQkFDRixPQUFPLEdBQUcsT0FBSyxZQUFZLENBQUMsQ0FBQyxDQUFDOztnQkFDOUIsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNOzs7O1lBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsT0FBTyxLQUFLLE9BQU8sRUFBckIsQ0FBcUIsRUFBQzs7Z0JBQ3BELElBQUksR0FBRyxFQUFFLE9BQU8sU0FBQSxFQUFFLFFBQVEsVUFBQSxFQUFFO1lBQ2xDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7OztRQUoxQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO29CQUF4QyxDQUFDO1NBS1Q7UUFDRCxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELDREQUFXOzs7O0lBQVgsVUFBWSxJQUFTOztZQUNmLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7UUFDeEMsUUFBUSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM3RSxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7OztJQUVELG1FQUFrQjs7OztJQUFsQixVQUFtQixPQUFPO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLEdBQUcsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQzdFLENBQUM7Ozs7O0lBRUQsNkRBQVk7Ozs7SUFBWixVQUFhLElBQVM7O1lBQ2QsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTs7OztRQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsS0FBSyxFQUF6QixDQUF5QixFQUFDO1FBQzFFLElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7O2dCQS9ERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1DQUFtQztvQkFDN0MsUUFBUSxFQUFFLCtCQUErQjtvQkFDekMsMGlGQUFpRTtvQkFDakUsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxtQkFBbUIsRUFBRSxLQUFLOzZvRUFHeEIsNkVBR0M7aUJBRUo7Ozs7Z0JBaEJRLFlBQVk7OztnQ0FzQmxCLE1BQU07dUJBRU4sS0FBSzs7SUEwQ1IsNkNBQUM7Q0FBQSxBQWhFRCxJQWdFQztTQWpEWSxzQ0FBc0M7OztJQUVqRCx1REFBa0I7O0lBQ2xCLDhEQUF5Qjs7SUFDekIsd0RBQW1COztJQUNuQiwrREFBcUU7Ozs7O0lBZXpELDJEQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBOZ0NsYXNzVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy11c2VyLWRyb3Bkb3duLWV4dGVybmFsLWxpc3QnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NVc2VyRHJvcGRvd25FeHRlcm5hbExpc3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy11c2VyLWRyb3Bkb3duLWV4dGVybmFsLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtdXNlci1kcm9wZG93bi1leHRlcm5hbC1saXN0LmNvbXBvbmVudC5jc3MnXSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBjbWFjcy11c2VyLWRyb3Bkb3duLWV4dGVybmFsLWxpc3Qge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NVc2VyRHJvcGRvd25FeHRlcm5hbExpc3RDb21wb25lbnQge1xyXG5cclxuICBfZGF0YTogYW55W10gPSBbXTtcclxuICBsaXN0RGl2aWRlcnM6IGFueVtdID0gW107XHJcbiAgb3JpZ2luOiBhbnlbXSA9IFtdO1xyXG4gIEBPdXRwdXQoKSByZW1vdmVkT3B0aW9uOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBkYXRhKHZhbHVlOiBhbnlbXSkge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMub3JpZ2luID0gdmFsdWU7XHJcbiAgICAgIGNvbnN0IG9wZXJhdGVkRGF0YSA9IHRoaXMub3BlcmF0ZURhdGEodmFsdWUpO1xyXG4gICAgICB0aGlzLl9kYXRhID0gWy4uLm9wZXJhdGVkRGF0YV07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgZGF0YSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9kYXRhO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikgeyB9XHJcblxyXG4gIG9wZXJhdGVEYXRhKHZhbHVlczogYW55W10pIHtcclxuICAgIGNvbnN0IG9wZXJhdGVkRGF0YSA9IFtdO1xyXG4gICAgdGhpcy5saXN0RGl2aWRlcnMgPSBbLi4uQXJyYXkuZnJvbShuZXcgU2V0KHZhbHVlcy5tYXAoZSA9PiBlLmRpdmlkZXIpKSldO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3REaXZpZGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBkaXZpZGVyID0gdGhpcy5saXN0RGl2aWRlcnNbaV07XHJcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gdmFsdWVzLmZpbHRlcihlID0+IGUuZGl2aWRlciA9PT0gZGl2aWRlcik7XHJcbiAgICAgIGNvbnN0IGVsZW0gPSB7IGRpdmlkZXIsIGNoaWxkcmVuIH07XHJcbiAgICAgIG9wZXJhdGVkRGF0YS5wdXNoKGVsZW0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9wZXJhdGVkRGF0YTtcclxuICB9XHJcblxyXG4gIGdldEluaXRpYWxzKG5hbWU6IGFueSkge1xyXG4gICAgbGV0IGluaXRpYWxzID0gbmFtZS5tYXRjaCgvXFxiXFx3L2cpIHx8IFtdO1xyXG4gICAgaW5pdGlhbHMgPSAoKGluaXRpYWxzLnNoaWZ0KCkgfHwgJycpICsgKGluaXRpYWxzLnBvcCgpIHx8ICcnKSkudG9VcHBlckNhc2UoKTtcclxuICAgIHJldHVybiBpbml0aWFscztcclxuICB9XHJcblxyXG4gIGdldEJhY2tncm91bmRJbWFnZShwaWN0dXJlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKCd1cmwoXFwnJyArIHBpY3R1cmUgKyAnXFwnKScpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlT3B0aW9uKGVsZW06IGFueSkge1xyXG4gICAgY29uc3QgZmlsdGVyZWREYXRhID0gdGhpcy5vcmlnaW4uZmlsdGVyKGl0ZW0gPT4gaXRlbS52YWx1ZSAhPT0gZWxlbS52YWx1ZSk7XHJcbiAgICB0aGlzLmRhdGEgPSBmaWx0ZXJlZERhdGE7XHJcbiAgICB0aGlzLnJlbW92ZWRPcHRpb24uZW1pdChlbGVtKTtcclxuICB9XHJcbn1cclxuIl19