/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ViewEncapsulation, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { CmacsSelectComponent } from '../cmacs-select/cmacs-select.component';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { NzFilterOptionPipe } from 'ng-zorro-antd';
var CmacsUserDropdownComponent = /** @class */ (function () {
    function CmacsUserDropdownComponent(sanitizer, fb) {
        this.sanitizer = sanitizer;
        this.fb = fb;
        this.mode = 'default';
        this.emailErrorLabel = 'Email must be a valid Email Address';
        this.inviteGuestLabel = 'Invite a guest via email';
        this.placeHolder = 'Add Users / Teams';
        this.selectedValue = null;
        this.listOfOption = [];
        this.maxTagCount = null;
        this.selectedValueChange = new EventEmitter();
        this.onAddGuestUserByEmail = new EventEmitter();
        this._searchValue = '';
        this.showEmailError = false;
        this.listOfFilteredOption = [];
        this.listDividers = [];
        this.operatedData = [];
        this.firstElemByDivider = {};
        this.highlightKeys = [];
        this.emailForm = this.fb.group({
            email: [this._searchValue, [Validators.email]]
        });
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    CmacsUserDropdownComponent.prototype.onSelectedValueChange = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.selectedValueChange.emit($event);
    };
    /**
     * @return {?}
     */
    CmacsUserDropdownComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.listOfFilteredOption = tslib_1.__spread(this.listOfOption);
        this.operateData();
    };
    Object.defineProperty(CmacsUserDropdownComponent.prototype, "searchValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._searchValue;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CmacsUserDropdownComponent.prototype.operateData = /**
     * @return {?}
     */
    function () {
        this.operatedData = [];
        this.listDividers = tslib_1.__spread(Array.from(new Set(this.listOfOption.map((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e.divider; })))));
        var _loop_1 = function (i) {
            /** @type {?} */
            var divider = this_1.listDividers[i];
            /** @type {?} */
            var children = this_1.listOfOption.filter((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return e.divider === divider; }));
            /** @type {?} */
            var elem = { divider: divider, children: children };
            this_1.operatedData.push(elem);
        };
        var this_1 = this;
        for (var i = 0; i < this.listDividers.length; i++) {
            _loop_1(i);
        }
        this.operatedData = tslib_1.__spread(this.operatedData);
        this.getFirstElemByDivider();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    CmacsUserDropdownComponent.prototype.onsearch = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.showEmailError = false;
        this._searchValue = $event;
        /** @type {?} */
        var listOfFilteredOption = new NzFilterOptionPipe().transform(this.selectComponent.nzSelectService.listOfNzOptionComponent, this.selectComponent.nzSelectService.searchValue, this.selectComponent.nzSelectService.filterOption, this.selectComponent.nzSelectService.serverSearch);
        this.listOfFilteredOption = listOfFilteredOption;
        this.getFirstElemByDivider();
    };
    /**
     * @return {?}
     */
    CmacsUserDropdownComponent.prototype.getFirstElemByDivider = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var firstElemByDivider = {};
        var _loop_2 = function (i) {
            /** @type {?} */
            var elem = this_2.listOfFilteredOption[i];
            /** @type {?} */
            var elemWithDivider = this_2.listOfOption.find((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return (e.value === elem.nzValue || e.value === elem.value); }));
            if (firstElemByDivider[elemWithDivider.divider] === null || firstElemByDivider[elemWithDivider.divider] === undefined) {
                firstElemByDivider[elemWithDivider.divider] = [];
                firstElemByDivider[elemWithDivider.divider].push(elemWithDivider);
            }
            else {
                firstElemByDivider[elemWithDivider.divider].push(elemWithDivider);
            }
        };
        var this_2 = this;
        for (var i = 0; i < this.listOfFilteredOption.length; i++) {
            _loop_2(i);
        }
        this.firstElemByDivider = firstElemByDivider;
    };
    /**
     * @param {?} name
     * @return {?}
     */
    CmacsUserDropdownComponent.prototype.getInitials = /**
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
    CmacsUserDropdownComponent.prototype.getBackgroundImage = /**
     * @param {?} picture
     * @return {?}
     */
    function (picture) {
        return this.sanitizer.bypassSecurityTrustStyle('url(\'' + picture + '\')');
    };
    /**
     * @return {?}
     */
    CmacsUserDropdownComponent.prototype.addGuestUser = /**
     * @return {?}
     */
    function () {
        if ((/** @type {?} */ ((/** @type {?} */ (this._searchValue))))) {
            this.emailForm.get('email').setValue(this._searchValue);
            if (this.emailForm.valid) {
                this.showEmailError = false;
                this.onAddGuestUserByEmail.emit(true);
            }
            else {
                this.showEmailError = true;
            }
        }
    };
    /**
     * @param {?} option
     * @return {?}
     */
    CmacsUserDropdownComponent.prototype.addOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        /** @type {?} */
        var checkUser = this.listOfOption.find((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e.value === option.value; }));
        if (!checkUser) {
            this.listOfOption = tslib_1.__spread(this.listOfOption, [option]);
            this.listOfFilteredOption = tslib_1.__spread(this.listOfFilteredOption, [option]);
            this.operateData();
        }
    };
    /**
     * @param {?} elem
     * @return {?}
     */
    CmacsUserDropdownComponent.prototype.highlightValue = /**
     * @param {?} elem
     * @return {?}
     */
    function (elem) {
        this.highlightKeys = [];
        /** @type {?} */
        var value = this.selectComponent.nzSelectService.searchValue;
        // tslint:disable-next-line: no-non-null-assertion
        if (value && (/** @type {?} */ (elem.label.toLowerCase())).includes(value.toLowerCase())) {
            // match the search value
            /** @type {?} */
            var index = elem.label.toLowerCase().indexOf(value.toLowerCase());
            this.highlightKeys = [
                elem.label.slice(0, index),
                elem.label.slice(index, index + value.length),
                elem.label.slice(index + value.length, elem.label.length)
            ];
        }
        return this.highlightKeys;
    };
    CmacsUserDropdownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-user-dropdown',
                    exportAs: 'cmacsUserDropdown',
                    template: "<cmacs-select [showCmacsSearch]=\"true\"\r\n              allowClear\r\n              [maxTagCount]=\"maxTagCount\"\r\n              style=\"width: inherit !important\"\r\n              [mode]=\"mode\"\r\n              [showSelectAll]=\"false\"\r\n              [userDropdown]=\"true\"\r\n              [notFoundContentCustom]=\"notFoundContent\"\r\n              [placeHolder]=\"placeHolder\"\r\n              (cmacsOnSearch)=\"onsearch($event)\"\r\n              [dropdownRender]=\"render\"\r\n              (ngModelChange)=\"onSelectedValueChange($event)\"\r\n              [(ngModel)]=\"selectedValue\">\r\n  <ng-container *ngFor=\"let option of operatedData; index as i\">\r\n    <ng-container *ngFor=\"let elem of option.children; index as j\">\r\n      <cmacs-option [label]=\"elem.label\" [value]=\"elem.value\" customContent>\r\n        <div class=\"cmacs-user-dropdown-option-wrapper\"\r\n             [class.cmacs-user-dropdown-last-elem]=\"j === option.children.length - 1\"\r\n             [class.cmacs-user-dropdown-divider-first-option]=\"firstElemByDivider[option.divider] && firstElemByDivider[option.divider].length &&\r\n            firstElemByDivider[option.divider][0].value === elem.value\">\r\n          <div *ngIf=\"firstElemByDivider[option.divider] && firstElemByDivider[option.divider].length &&\r\n            firstElemByDivider[option.divider][0].value === elem.value\" class=\"cmacs-user-dropdown-divider\">\r\n            <nz-divider></nz-divider>\r\n            {{option.divider}} <span style=\"color: #97a0ae\">({{firstElemByDivider[option.divider].length}})</span>\r\n          </div>\r\n\r\n          <div class=\"cmacs-user-dropdown-info-wrapper\" [class.cmacs-user-dropdown-hide-picture]=\"elem.hidePicture\">\r\n\r\n            <div class=\"cmacs-user-dropdown-person-picture\"\r\n                 [class.cmacs-user-dropdown-no-picture]=\"elem.hidePicture\"\r\n                 *ngIf=\"elem.role === 'user'\"\r\n                 [style.background-image]=\"elem.picture ? getBackgroundImage(elem.picture): 'none'\">\r\n              <span class=\"cmacs-user-dropdown-initials\" *ngIf=\"!elem.picture\">{{getInitials(elem.label)}}</span>\r\n            </div>\r\n\r\n            <div class=\"cmacs-user-dropdown-person-picture\"\r\n                 [class.cmacs-guest-no-picture]=\"!elem.picture\"\r\n                 [class.cmacs-user-dropdown-no-picture]=\"elem.hidePicture\"\r\n                 *ngIf=\"elem.role === 'guest'\"\r\n                 [style.background-image]=\"elem.picture ? getBackgroundImage(elem.picture): 'none'\">\r\n              <i class=\"iconCreation-User\" *ngIf=\"!elem.picture\"></i>\r\n            </div>\r\n\r\n            <div class=\"cmacs-user-dropdown-person-picture\"\r\n                 [class.cmacs-team-no-picture]=\"!elem.picture\"\r\n                 [class.cmacs-user-dropdown-no-picture]=\"elem.hidePicture\"\r\n                 *ngIf=\"elem.role === 'team'\"\r\n                 [style.background-image]=\"elem.picture ? getBackgroundImage(elem.picture): 'none'\">\r\n              <i class=\"iconCreation-Team\" *ngIf=\"!elem.picture\"></i>\r\n            </div>\r\n\r\n            <div class=\"cmacs-user-dropdown-title\" [class.cmacs-user-dropdown-team-title]=\"elem.role === 'team'\">\r\n              <ng-container *ngIf=\"highlightValue(elem).length === 3\">\r\n                <span>\r\n                  {{highlightKeys[0]}}<span style=\"color: #2a7cff\">{{highlightKeys[1]}}</span>{{highlightKeys[2]}}\r\n                </span>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"!highlightValue(elem).length\">\r\n                {{elem.label}}\r\n              </ng-container>\r\n            </div>\r\n            <div *ngIf=\"elem.role === 'user' || elem.role === 'guest'\" class=\"cmacs-user-dropdown-subtitle\">{{elem.charge}}</div>\r\n          </div>\r\n        </div>\r\n      </cmacs-option>\r\n    </ng-container>\r\n  </ng-container>\r\n</cmacs-select>\r\n\r\n<ng-template #render>\r\n  <div class=\"cmacs-user-dropdown-invite-guest\"\r\n       (click)=\"addGuestUser()\">\r\n    <i style=\"font-size: 17px; position: relative; top: 3px; margin-right: 6px;\" class=\"iconUISmall-Message\"></i>\r\n    <span>{{inviteGuestLabel}}</span>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #notFoundContent>\r\n  <div *ngIf=\"showEmailError\" class=\"cmacs-user-dropdown-error\">{{emailErrorLabel}}</div>\r\n</ng-template>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    styles: [".cmacs-user-dropdown-person-picture{text-align:center;padding-top:2px;border-radius:3px;width:34px;height:34px;background-color:#a100cd;color:#fff;background-repeat:no-repeat;background-position:center center;background-size:contain}.cmacs-user-dropdown-divider{font-family:Roboto-Medium;font-size:13px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.23;letter-spacing:normal;color:#3b3f46;padding:7px 14px 8px;background-color:#fff!important}.cmacs-user-dropdown-divider:hover{background-color:#fff!important}.cmacs-user-dropdown-divider nz-divider:first-child{-webkit-transform:scaleX(1.5);transform:scaleX(1.5);position:relative;top:-7px}.cmacs-user-dropdown-initials{position:relative;top:5px;font-size:14px}.cmacs-user-dropdown-title{position:absolute;top:0;left:45px;font-family:Roboto-Regular;font-size:12px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;color:#656c79;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:calc(100% - 75px)}.cmacs-user-dropdown-subtitle{position:absolute;top:16px;left:45px;font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;color:#97a0ae;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:calc(100% - 75px)}.cmacs-team-no-picture{border-radius:3px;border:1.1px solid #dee0e5;background-color:#fff;color:#656c79;font-size:16px;padding:5px 0}.cmacs-user-dropdown-team-title{top:7px}.cmacs-guest-no-picture{border-radius:3px;background-color:#00cda1;font-size:16px;padding:6px 0}.cmacs-user-dropdown-error{color:#f6503c;font-size:10px;font-weight:400;font-stretch:normal;font-style:normal;line-height:2;letter-spacing:normal;padding:5px 0;position:relative;left:12px}.ant-select-dropdown.cmacs-select-user-dropdown.ant-select-dropdown--multiple .cmacs-user-dropdown-error{left:12px}.cmacs-select-user-dropdown .ant-select-dropdown-menu-item{padding:0!important}.cmacs-user-dropdown-option-wrapper{padding:7px 0}.cmacs-user-dropdown-info-wrapper{position:relative;margin:0 14px}.ant-select-dropdown.cmacs-select-user-dropdown.ant-select-dropdown--multiple .cmacs-user-dropdown-info-wrapper{margin:0 14px 0 42px}.cmacs-user-dropdown-divider-first-option{padding-top:0}.cmacs-user-dropdown-divider-first-option .cmacs-user-dropdown-info-wrapper{margin-top:7px!important}.cmacs-user-dropdown-last-elem{padding-bottom:14px}.cmacs-user-dropdown-invite-guest{height:34px;box-shadow:0 -2px 5px 0 rgba(59,63,70,.1);background-color:#fff;color:#2a7cff;padding:6px 11px;font-size:12px;cursor:pointer}.cmacs-user-dropdown-invite-guest:hover{background-color:#f2f7ff}.cmacs-user-dropdown-no-picture{opacity:0}.cmacs-user-dropdown-hide-picture .cmacs-user-dropdown-subtitle,.cmacs-user-dropdown-hide-picture .cmacs-user-dropdown-title{left:0}.ant-select-dropdown-menu{scrollbar-color:#cfd3d9 #fff;scrollbar-width:thin}"]
                }] }
    ];
    /** @nocollapse */
    CmacsUserDropdownComponent.ctorParameters = function () { return [
        { type: DomSanitizer },
        { type: FormBuilder }
    ]; };
    CmacsUserDropdownComponent.propDecorators = {
        mode: [{ type: Input }],
        emailErrorLabel: [{ type: Input }],
        inviteGuestLabel: [{ type: Input }],
        placeHolder: [{ type: Input }],
        selectedValue: [{ type: Input }],
        listOfOption: [{ type: Input }],
        maxTagCount: [{ type: Input }],
        selectedValueChange: [{ type: Output }],
        onAddGuestUserByEmail: [{ type: Output }],
        selectComponent: [{ type: ViewChild, args: [CmacsSelectComponent,] }]
    };
    return CmacsUserDropdownComponent;
}());
export { CmacsUserDropdownComponent };
if (false) {
    /** @type {?} */
    CmacsUserDropdownComponent.prototype.mode;
    /** @type {?} */
    CmacsUserDropdownComponent.prototype.emailErrorLabel;
    /** @type {?} */
    CmacsUserDropdownComponent.prototype.inviteGuestLabel;
    /** @type {?} */
    CmacsUserDropdownComponent.prototype.placeHolder;
    /** @type {?} */
    CmacsUserDropdownComponent.prototype.selectedValue;
    /** @type {?} */
    CmacsUserDropdownComponent.prototype.listOfOption;
    /** @type {?} */
    CmacsUserDropdownComponent.prototype.maxTagCount;
    /** @type {?} */
    CmacsUserDropdownComponent.prototype.selectedValueChange;
    /** @type {?} */
    CmacsUserDropdownComponent.prototype.onAddGuestUserByEmail;
    /** @type {?} */
    CmacsUserDropdownComponent.prototype._searchValue;
    /** @type {?} */
    CmacsUserDropdownComponent.prototype.showEmailError;
    /** @type {?} */
    CmacsUserDropdownComponent.prototype.selectComponent;
    /** @type {?} */
    CmacsUserDropdownComponent.prototype.listOfFilteredOption;
    /** @type {?} */
    CmacsUserDropdownComponent.prototype.listDividers;
    /** @type {?} */
    CmacsUserDropdownComponent.prototype.operatedData;
    /** @type {?} */
    CmacsUserDropdownComponent.prototype.firstElemByDivider;
    /** @type {?} */
    CmacsUserDropdownComponent.prototype.emailForm;
    /** @type {?} */
    CmacsUserDropdownComponent.prototype.highlightKeys;
    /**
     * @type {?}
     * @private
     */
    CmacsUserDropdownComponent.prototype.sanitizer;
    /**
     * @type {?}
     * @private
     */
    CmacsUserDropdownComponent.prototype.fb;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdXNlci1kcm9wZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXVzZXItZHJvcGRvd24vY21hY3MtdXNlci1kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sWUFBWSxFQUViLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzlFLE9BQU8sRUFBYSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRDtJQWdDRSxvQ0FBb0IsU0FBdUIsRUFBVSxFQUFlO1FBQWhELGNBQVMsR0FBVCxTQUFTLENBQWM7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBckIzRCxTQUFJLEdBQVcsU0FBUyxDQUFDO1FBQ3pCLG9CQUFlLEdBQVcscUNBQXFDLENBQUM7UUFDaEUscUJBQWdCLEdBQVcsMEJBQTBCLENBQUM7UUFDdEQsZ0JBQVcsR0FBVyxtQkFBbUIsQ0FBQztRQUMxQyxrQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUVsQix3QkFBbUIsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNqRSwwQkFBcUIsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUU3RSxpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUMxQixtQkFBYyxHQUFH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LEFBM0lELElBMklDO1NBbElZLDBCQUEwQjs7O0lBRXJDLDBDQUFrQzs7SUFDbEMscURBQXlFOztJQUN6RSxzREFBK0Q7O0lBQy9ELGlEQUFtRDs7SUFDbkQsbURBQThCOztJQUM5QixrREFBMkI7O0lBQzNCLGlEQUE0Qjs7SUFFNUIseURBQTJFOztJQUMzRSwyREFBNkU7O0lBRTdFLGtEQUEwQjs7SUFDMUIsb0RBQXVCOztJQUN2QixxREFBdUU7O0lBQ3ZFLDBEQUFpQzs7SUFDakMsa0RBQXlCOztJQUN6QixrREFBeUI7O0lBQ3pCLHdEQUE2Qjs7SUFDN0IsK0NBQXFCOztJQUNyQixtREFBbUI7Ozs7O0lBRVAsK0NBQStCOzs7OztJQUFFLHdDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG4gIElucHV0LFxyXG4gIFZpZXdDaGlsZCxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIE9uSW5pdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBDbWFjc1NlbGVjdENvbXBvbmVudCB9IGZyb20gJy4uL2NtYWNzLXNlbGVjdC9jbWFjcy1zZWxlY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IE56RmlsdGVyT3B0aW9uUGlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy11c2VyLWRyb3Bkb3duJyxcclxuICBleHBvcnRBczogJ2NtYWNzVXNlckRyb3Bkb3duJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtdXNlci1kcm9wZG93bi5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy11c2VyLWRyb3Bkb3duLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NVc2VyRHJvcGRvd25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcblxyXG4gIEBJbnB1dCgpIG1vZGU6IHN0cmluZyA9ICdkZWZhdWx0JzsgXHJcbiAgQElucHV0KCkgZW1haWxFcnJvckxhYmVsOiBzdHJpbmcgPSAnRW1haWwgbXVzdCBiZSBhIHZhbGlkIEVtYWlsIEFkZHJlc3MnOyBcclxuICBASW5wdXQoKSBpbnZpdGVHdWVzdExhYmVsOiBzdHJpbmcgPSAnSW52aXRlIGEgZ3Vlc3QgdmlhIGVtYWlsJzsgXHJcbiAgQElucHV0KCkgcGxhY2VIb2xkZXI6IHN0cmluZyA9ICdBZGQgVXNlcnMgLyBUZWFtcyc7IFxyXG4gIEBJbnB1dCgpIHNlbGVjdGVkVmFsdWUgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGxpc3RPZk9wdGlvbiA9IFtdO1xyXG4gIEBJbnB1dCgpIG1heFRhZ0NvdW50ID0gbnVsbDtcclxuXHJcbiAgQE91dHB1dCgpIHNlbGVjdGVkVmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uQWRkR3Vlc3RVc2VyQnlFbWFpbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgX3NlYXJjaFZhbHVlOiBzdHJpbmcgPSAnJztcclxuICBzaG93RW1haWxFcnJvciA9IGZhbHNlO1xyXG4gIEBWaWV3Q2hpbGQoQ21hY3NTZWxlY3RDb21wb25lbnQpIHNlbGVjdENvbXBvbmVudDogQ21hY3NTZWxlY3RDb21wb25lbnQ7IFxyXG4gIGxpc3RPZkZpbHRlcmVkT3B0aW9uOiBhbnlbXSA9IFtdO1xyXG4gIGxpc3REaXZpZGVyczogYW55W10gPSBbXTtcclxuICBvcGVyYXRlZERhdGE6IGFueVtdID0gW107XHJcbiAgZmlyc3RFbGVtQnlEaXZpZGVyOiBhbnkgPSB7fTtcclxuICBlbWFpbEZvcm06IEZvcm1Hcm91cDtcclxuICBoaWdobGlnaHRLZXlzID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyKSB7XHJcbiAgICB0aGlzLmVtYWlsRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICBlbWFpbDogW3RoaXMuX3NlYXJjaFZhbHVlLCBbVmFsaWRhdG9ycy5lbWFpbF1dXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uU2VsZWN0ZWRWYWx1ZUNoYW5nZSgkZXZlbnQpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZUNoYW5nZS5lbWl0KCRldmVudCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb24gPSBbLi4udGhpcy5saXN0T2ZPcHRpb25dO1xyXG4gICAgdGhpcy5vcGVyYXRlRGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNlYXJjaFZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VhcmNoVmFsdWU7XHJcbiAgfVxyXG5cclxuICBvcGVyYXRlRGF0YSgpIHtcclxuICAgIHRoaXMub3BlcmF0ZWREYXRhID0gW107XHJcbiAgICB0aGlzLmxpc3REaXZpZGVycyA9IFsuLi5BcnJheS5mcm9tKG5ldyBTZXQodGhpcy5saXN0T2ZPcHRpb24ubWFwKGUgPT4gZS5kaXZpZGVyKSkpXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0RGl2aWRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgZGl2aWRlciA9IHRoaXMubGlzdERpdmlkZXJzW2ldO1xyXG4gICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMubGlzdE9mT3B0aW9uLmZpbHRlcihlID0+IGUuZGl2aWRlciA9PT0gZGl2aWRlcik7XHJcbiAgICAgIGNvbnN0IGVsZW0gPSB7IGRpdmlkZXIsIGNoaWxkcmVuIH07XHJcbiAgICAgIHRoaXMub3BlcmF0ZWREYXRhLnB1c2goZWxlbSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLm9wZXJhdGVkRGF0YSA9IFsuLi50aGlzLm9wZXJhdGVkRGF0YV07XHJcbiAgICB0aGlzLmdldEZpcnN0RWxlbUJ5RGl2aWRlcigpO1xyXG4gIH1cclxuXHJcbiAgb25zZWFyY2goJGV2ZW50KSB7XHJcbiAgICB0aGlzLnNob3dFbWFpbEVycm9yID0gZmFsc2U7XHJcbiAgICB0aGlzLl9zZWFyY2hWYWx1ZSA9ICRldmVudDtcclxuICAgIGNvbnN0IGxpc3RPZkZpbHRlcmVkT3B0aW9uID0gbmV3IE56RmlsdGVyT3B0aW9uUGlwZSgpLnRyYW5zZm9ybShcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQubnpTZWxlY3RTZXJ2aWNlLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50LFxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudC5uelNlbGVjdFNlcnZpY2Uuc2VhcmNoVmFsdWUsXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50Lm56U2VsZWN0U2VydmljZS5maWx0ZXJPcHRpb24sXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50Lm56U2VsZWN0U2VydmljZS5zZXJ2ZXJTZWFyY2hcclxuICAgICk7XHJcbiAgICB0aGlzLmxpc3RPZkZpbHRlcmVkT3B0aW9uID0gbGlzdE9mRmlsdGVyZWRPcHRpb247XHJcbiAgICB0aGlzLmdldEZpcnN0RWxlbUJ5RGl2aWRlcigpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Rmlyc3RFbGVtQnlEaXZpZGVyKCkge1xyXG4gICAgY29uc3QgZmlyc3RFbGVtQnlEaXZpZGVyID0ge307XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb24ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgZWxlbSA9IHRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb25baV07XHJcbiAgICAgIGNvbnN0IGVsZW1XaXRoRGl2aWRlciA9IHRoaXMubGlzdE9mT3B0aW9uLmZpbmQoZSA9PiAoZS52YWx1ZSA9PT0gZWxlbS5uelZhbHVlIHx8IGUudmFsdWUgPT09IGVsZW0udmFsdWUpKTtcclxuICAgICAgaWYgKGZpcnN0RWxlbUJ5RGl2aWRlcltlbGVtV2l0aERpdmlkZXIuZGl2aWRlcl0gPT09IG51bGwgfHwgZmlyc3RFbGVtQnlEaXZpZGVyW2VsZW1XaXRoRGl2aWRlci5kaXZpZGVyXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZmlyc3RFbGVtQnlEaXZpZGVyW2VsZW1XaXRoRGl2aWRlci5kaXZpZGVyXSA9IFtdO1xyXG4gICAgICAgIGZpcnN0RWxlbUJ5RGl2aWRlcltlbGVtV2l0aERpdmlkZXIuZGl2aWRlcl0ucHVzaChlbGVtV2l0aERpdmlkZXIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZpcnN0RWxlbUJ5RGl2aWRlcltlbGVtV2l0aERpdmlkZXIuZGl2aWRlcl0ucHVzaChlbGVtV2l0aERpdmlkZXIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmZpcnN0RWxlbUJ5RGl2aWRlciA9IGZpcnN0RWxlbUJ5RGl2aWRlcjtcclxuICB9XHJcblxyXG4gIGdldEluaXRpYWxzKG5hbWU6IGFueSkge1xyXG4gICAgbGV0IGluaXRpYWxzID0gbmFtZS5tYXRjaCgvXFxiXFx3L2cpIHx8IFtdO1xyXG4gICAgaW5pdGlhbHMgPSAoKGluaXRpYWxzLnNoaWZ0KCkgfHwgJycpICsgKGluaXRpYWxzLnBvcCgpIHx8ICcnKSkudG9VcHBlckNhc2UoKTtcclxuICAgIHJldHVybiBpbml0aWFscztcclxuICB9XHJcblxyXG4gIGdldEJhY2tncm91bmRJbWFnZShwaWN0dXJlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKCd1cmwoXFwnJyArIHBpY3R1cmUgKyAnXFwnKScpO1xyXG4gIH1cclxuXHJcbiAgYWRkR3Vlc3RVc2VyKCkge1xyXG4gICAgaWYgKHRoaXMuX3NlYXJjaFZhbHVlISEpIHtcclxuICAgICAgdGhpcy5lbWFpbEZvcm0uZ2V0KCdlbWFpbCcpLnNldFZhbHVlKHRoaXMuX3NlYXJjaFZhbHVlKTtcclxuICAgICAgaWYgKHRoaXMuZW1haWxGb3JtLnZhbGlkKSB7XHJcbiAgICAgICAgdGhpcy5zaG93RW1haWxFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub25BZGRHdWVzdFVzZXJCeUVtYWlsLmVtaXQodHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zaG93RW1haWxFcnJvciA9IHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRPcHRpb24ob3B0aW9uOiBhbnkpIHtcclxuICAgIGNvbnN0IGNoZWNrVXNlciA9IHRoaXMubGlzdE9mT3B0aW9uLmZpbmQoZSA9PiBlLnZhbHVlID09PSBvcHRpb24udmFsdWUpO1xyXG4gICAgaWYgKCFjaGVja1VzZXIpIHtcclxuICAgICAgdGhpcy5saXN0T2ZPcHRpb24gPSBbLi4udGhpcy5saXN0T2ZPcHRpb24sIG9wdGlvbl07XHJcbiAgICAgIHRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb24gPSBbLi4udGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvbiwgb3B0aW9uXTtcclxuICAgICAgdGhpcy5vcGVyYXRlRGF0YSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGlnaGxpZ2h0VmFsdWUoZWxlbSA6IGFueSkge1xyXG4gICAgdGhpcy5oaWdobGlnaHRLZXlzID0gW107XHJcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2VsZWN0Q29tcG9uZW50Lm56U2VsZWN0U2VydmljZS5zZWFyY2hWYWx1ZTtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICBpZiAodmFsdWUgJiYgZWxlbS5sYWJlbC50b0xvd2VyQ2FzZSgpIS5pbmNsdWRlcyh2YWx1ZS50b0xvd2VyQ2FzZSgpKSkge1xyXG4gICAgICAvLyBtYXRjaCB0aGUgc2VhcmNoIHZhbHVlXHJcbiAgICAgIGNvbnN0IGluZGV4ID0gZWxlbS5sYWJlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YodmFsdWUudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgIHRoaXMuaGlnaGxpZ2h0S2V5cyA9IFtcclxuICAgICAgICBlbGVtLmxhYmVsLnNsaWNlKDAsIGluZGV4KSxcclxuICAgICAgICBlbGVtLmxhYmVsLnNsaWNlKGluZGV4LCBpbmRleCArIHZhbHVlLmxlbmd0aCksXHJcbiAgICAgICAgZWxlbS5sYWJlbC5zbGljZShpbmRleCArIHZhbHVlLmxlbmd0aCwgZWxlbS5sYWJlbC5sZW5ndGgpXHJcbiAgICAgIF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5oaWdobGlnaHRLZXlzO1xyXG4gIH1cclxufVxyXG4iXX0=