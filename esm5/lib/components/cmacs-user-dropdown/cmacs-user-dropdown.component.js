/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ViewEncapsulation, Input, ViewChild, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core';
import { CmacsSelectComponent } from '../cmacs-select/cmacs-select.component';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
var CmacsUserDropdownComponent = /** @class */ (function () {
    function CmacsUserDropdownComponent(sanitizer, cdr, fb) {
        this.sanitizer = sanitizer;
        this.cdr = cdr;
        this.fb = fb;
        this.mode = 'default';
        this.emailErrorLabel = 'Email must be a valid Email Address';
        this.inviteGuestLabel = 'Invite a guest via email';
        this.loadingLabel = 'Loading data...';
        this.placeHolder = 'Add Users / Teams';
        this.selectedValue = null;
        this.maxTagCount = null;
        this.selectedValueChange = new EventEmitter();
        this.onAddGuestUserByEmail = new EventEmitter();
        this.cmacsOnSearch = new EventEmitter();
        this._isLoading = false;
        this._inviteGuest = true;
        this._searchValue = '';
        this._listOfOption = [];
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
    Object.defineProperty(CmacsUserDropdownComponent.prototype, "isLoading", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isLoading = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsUserDropdownComponent.prototype, "inviteGuest", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._inviteGuest = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsUserDropdownComponent.prototype, "listOfOption", {
        get: /**
         * @return {?}
         */
        function () {
            return this._listOfOption;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._listOfOption = tslib_1.__spread(value);
            this.listOfFilteredOption = tslib_1.__spread(value);
            this.operateData();
        },
        enumerable: true,
        configurable: true
    });
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
        /*const listOfFilteredOption = new NzFilterOptionPipe().transform(
          this.selectComponent.nzSelectService.listOfNzOptionComponent,
          this.selectComponent.nzSelectService.searchValue,
          this.selectComponent.nzSelectService.filterOption,
          this.selectComponent.nzSelectService.serverSearch
        );
        this.listOfFilteredOption = listOfFilteredOption;
        this.getFirstElemByDivider();
        console.log($event, listOfFilteredOption);*/
        this.cmacsOnSearch.emit($event);
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
     * @param {?} option
     * @return {?}
     */
    CmacsUserDropdownComponent.prototype.removeOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        /** @type {?} */
        var selectedValues = this.selectComponent.nzSelectService.listOfSelectedValue;
        /** @type {?} */
        var selectedValuesFiltered = selectedValues.filter((/**
         * @param {?} elem
         * @return {?}
         */
        function (elem) { return elem.value !== option.value; }));
        this.selectComponent.nzSelectService.updateListOfSelectedValue(selectedValuesFiltered, true);
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
                    template: "<cmacs-select [showCmacsSearch]=\"true\"\r\n              allowClear\r\n              [maxTagCount]=\"maxTagCount\"\r\n              [mode]=\"mode\"\r\n              [showSelectAll]=\"false\"\r\n              [showArrow]=\"false\"\r\n              [userDropdown]=\"true\"\r\n              [notFoundContentCustom]=\"notFoundContent\"\r\n              [placeHolder]=\"placeHolder\"\r\n              (cmacsOnSearch)=\"onsearch($event)\"\r\n              [serverSearch]=\"true\"\r\n              [dropdownRender]=\"_inviteGuest ? render : null\"\r\n              (ngModelChange)=\"onSelectedValueChange($event)\"\r\n              [(ngModel)]=\"selectedValue\">\r\n  <ng-container *ngFor=\"let option of operatedData; index as i\">\r\n    <ng-container *ngFor=\"let elem of option.children; index as j\">\r\n      <cmacs-option [label]=\"elem.label\" [value]=\"elem.value\" [extendedData]=\"elem\" customContent>\r\n        <div class=\"cmacs-user-dropdown-option-wrapper\"\r\n             [class.cmacs-user-dropdown-last-elem]=\"j === option.children.length - 1\"\r\n             [class.cmacs-user-dropdown-divider-first-option]=\"firstElemByDivider[option.divider] && firstElemByDivider[option.divider].length &&\r\n            firstElemByDivider[option.divider][0].value === elem.value\">\r\n          <div *ngIf=\"firstElemByDivider[option.divider] && firstElemByDivider[option.divider].length &&\r\n            firstElemByDivider[option.divider][0].value === elem.value\" class=\"cmacs-user-dropdown-divider\">\r\n            <nz-divider></nz-divider>\r\n            {{option.divider}} <span style=\"color: #97a0ae\">({{firstElemByDivider[option.divider].length}})</span>\r\n          </div>\r\n\r\n          <ng-container *ngIf=\"elem.template; else defaultTPL\">\r\n            <ng-container [ngTemplateOutlet]=\"elem.template.ref\"\r\n                          [ngTemplateOutletContext]=\"elem.template.context\">\r\n            </ng-container>\r\n          </ng-container>\r\n\r\n          <ng-template #defaultTPL>\r\n            <div class=\"cmacs-user-dropdown-info-wrapper\" [class.cmacs-user-dropdown-hide-picture]=\"elem.hidePicture\">\r\n\r\n              <div class=\"cmacs-user-dropdown-person-picture\"\r\n                   [class.cmacs-user-dropdown-no-picture]=\"elem.hidePicture\"\r\n                   *ngIf=\"elem.role === 'user'\"\r\n                   [style.background-image]=\"elem.picture ? getBackgroundImage(elem.picture): 'none'\">\r\n                <span class=\"cmacs-user-dropdown-initials\" *ngIf=\"!elem.picture\">{{getInitials(elem.label)}}</span>\r\n              </div>\r\n\r\n              <div class=\"cmacs-user-dropdown-person-picture\"\r\n                   [class.cmacs-guest-no-picture]=\"!elem.picture\"\r\n                   [class.cmacs-user-dropdown-no-picture]=\"elem.hidePicture\"\r\n                   *ngIf=\"elem.role === 'guest'\"\r\n                   [style.background-image]=\"elem.picture ? getBackgroundImage(elem.picture): 'none'\">\r\n                <i class=\"iconCreation-User\" *ngIf=\"!elem.picture\"></i>\r\n              </div>\r\n\r\n              <div class=\"cmacs-user-dropdown-person-picture\"\r\n                   [class.cmacs-team-no-picture]=\"!elem.picture\"\r\n                   [class.cmacs-user-dropdown-no-picture]=\"elem.hidePicture\"\r\n                   *ngIf=\"elem.role === 'team'\"\r\n                   [style.background-image]=\"elem.picture ? getBackgroundImage(elem.picture): 'none'\">\r\n                <i class=\"iconCreation-Team\" *ngIf=\"!elem.picture\"></i>\r\n              </div>\r\n\r\n              <div class=\"cmacs-user-dropdown-title\" [class.cmacs-user-dropdown-team-title]=\"elem.role === 'team'\">\r\n                <ng-container *ngIf=\"highlightValue(elem).length === 3\">\r\n                  <span>\r\n                    {{highlightKeys[0]}}<span style=\"color: #2a7cff\">{{highlightKeys[1]}}</span>{{highlightKeys[2]}}\r\n                  </span>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"!highlightValue(elem).length\">\r\n                  {{elem.label}}\r\n                </ng-container>\r\n              </div>\r\n              <div *ngIf=\"elem.role === 'user' || elem.role === 'guest'\" class=\"cmacs-user-dropdown-subtitle\">{{elem.charge}}</div>\r\n            </div>\r\n          </ng-template>\r\n        </div>\r\n      </cmacs-option>\r\n    </ng-container>\r\n  </ng-container>\r\n  <cmacs-option *ngIf=\"_isLoading\" disabled customContent>\r\n    <div class=\"cmacs-user-dropdown-loading-wrapper\">\r\n      <i nz-icon type=\"loading\" class=\"cmacs-user-dropdown-loading-icon\"></i> {{loadingLabel}}\r\n    </div>  \r\n  </cmacs-option>\r\n</cmacs-select>\r\n\r\n<ng-template #render>\r\n  <div class=\"cmacs-user-dropdown-invite-guest\"\r\n       (click)=\"addGuestUser()\">\r\n    <i style=\"font-size: 17px; position: relative; top: 3px; margin-right: 6px;\" class=\"iconUISmall-Message\"></i>\r\n    <span>{{inviteGuestLabel}}</span>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #notFoundContent>\r\n  <div *ngIf=\"showEmailError\" class=\"cmacs-user-dropdown-error\">{{emailErrorLabel}}</div>\r\n</ng-template>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    styles: [".cmacs-user-dropdown-person-picture{text-align:center;padding-top:2px;border-radius:3px;width:34px;height:34px;background-color:#a100cd;color:#fff;background-repeat:no-repeat;background-position:center center;background-size:contain}.cmacs-user-dropdown-divider{font-family:Roboto-Medium;font-size:13px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.23;letter-spacing:normal;color:#3b3f46;padding:7px 14px 8px;background-color:#fff!important}.cmacs-user-dropdown-divider:hover{background-color:#fff!important}.cmacs-user-dropdown-divider nz-divider:first-child{-webkit-transform:scaleX(1.5);transform:scaleX(1.5);position:relative;top:-7px}.cmacs-user-dropdown-initials{position:relative;top:5px;font-size:14px}.cmacs-user-dropdown-title{position:absolute;top:0;left:45px;font-family:Roboto-Regular;font-size:12px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;color:#656c79;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:calc(100% - 75px)}.cmacs-user-dropdown-subtitle{position:absolute;top:16px;left:45px;font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;color:#97a0ae;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:calc(100% - 75px)}.cmacs-team-no-picture{border-radius:3px;border:1.1px solid #dee0e5;background-color:#fff;color:#656c79;font-size:16px;padding:5px 0}.cmacs-user-dropdown-team-title{top:7px}.cmacs-guest-no-picture{border-radius:3px;background-color:#00cda1;font-size:16px;padding:6px 0}.cmacs-user-dropdown-error{color:#f6503c;font-size:10px;font-weight:400;font-stretch:normal;font-style:normal;line-height:2;letter-spacing:normal;padding:5px 0;position:relative;left:12px}.ant-select-dropdown.cmacs-select-user-dropdown.ant-select-dropdown--multiple .cmacs-user-dropdown-error{left:12px}.cmacs-select-user-dropdown .ant-select-dropdown-menu-item{padding:0!important}.cmacs-user-dropdown-option-wrapper{padding:7px 0}.cmacs-user-dropdown-info-wrapper{position:relative;margin:0 14px}.ant-select-dropdown.cmacs-select-user-dropdown.ant-select-dropdown--multiple .cmacs-user-dropdown-info-wrapper{margin:0 14px 0 42px}.cmacs-user-dropdown-divider-first-option{padding-top:0}.cmacs-user-dropdown-divider-first-option .cmacs-user-dropdown-info-wrapper{margin-top:7px!important}.cmacs-user-dropdown-last-elem{padding-bottom:14px}.cmacs-user-dropdown-invite-guest{height:34px;box-shadow:0 -2px 5px 0 rgba(59,63,70,.1);background-color:#fff;color:#2a7cff;padding:6px 11px;font-size:12px;cursor:pointer}.cmacs-user-dropdown-invite-guest:hover{background-color:#f2f7ff}.cmacs-user-dropdown-no-picture{opacity:0}.cmacs-user-dropdown-hide-picture .cmacs-user-dropdown-subtitle,.cmacs-user-dropdown-hide-picture .cmacs-user-dropdown-title{left:0}.ant-select-dropdown-menu{scrollbar-color:#cfd3d9 #fff;scrollbar-width:thin}.cmacs-user-dropdown-loading-wrapper{padding:7px 12px}.cmacs-user-dropdown-loading-icon{margin-right:6px}"]
                }] }
    ];
    /** @nocollapse */
    CmacsUserDropdownComponent.ctorParameters = function () { return [
        { type: DomSanitizer },
        { type: ChangeDetectorRef },
        { type: FormBuilder }
    ]; };
    CmacsUserDropdownComponent.propDecorators = {
        mode: [{ type: Input }],
        emailErrorLabel: [{ type: Input }],
        inviteGuestLabel: [{ type: Input }],
        loadingLabel: [{ type: Input }],
        placeHolder: [{ type: Input }],
        selectedValue: [{ type: Input }],
        maxTagCount: [{ type: Input }],
        selectedValueChange: [{ type: Output }],
        onAddGuestUserByEmail: [{ type: Output }],
        cmacsOnSearch: [{ type: Output }],
        selectComponent: [{ type: ViewChild, args: [CmacsSelectComponent,] }],
        isLoading: [{ type: Input }],
        inviteGuest: [{ type: Input }],
        listOfOption: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], CmacsUserDropdownComponent.prototype, "isLoading", null);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], CmacsUserDropdownComponent.prototype, "inviteGuest", null);
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
    CmacsUserDropdownComponent.prototype.loadingLabel;
    /** @type {?} */
    CmacsUserDropdownComponent.prototype.placeHolder;
    /** @type {?} */
    CmacsUserDropdownComponent.prototype.selectedValue;
    /** @type {?} */
    CmacsUserDropdownComponent.prototype.maxTagCount;
    /** @type {?} */
    CmacsUserDropdownComponent.prototype.selectedValueChange;
    /** @type {?} */
    CmacsUserDropdownComponent.prototype.onAddGuestUserByEmail;
    /** @type {?} */
    CmacsUserDropdownComponent.prototype.cmacsOnSearch;
    /** @type {?} */
    CmacsUserDropdownComponent.prototype._isLoading;
    /** @type {?} */
    CmacsUserDropdownComponent.prototype._inviteGuest;
    /** @type {?} */
    CmacsUserDropdownComponent.prototype._searchValue;
    /** @type {?} */
    CmacsUserDropdownComponent.prototype._listOfOption;
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
    CmacsUserDropdownComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    CmacsUserDropdownComponent.prototype.fb;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdXNlci1kcm9wZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXVzZXItZHJvcGRvd24vY21hY3MtdXNlci1kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sWUFBWSxFQUVaLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDOUUsT0FBTyxFQUFhLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHekQ7SUF3REUsb0NBQ1UsU0FBdUIsRUFDdkIsR0FBc0IsRUFDdEIsRUFBZTtRQUZmLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFDdkIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQWhEaEIsU0FBSSxHQUFXLFNBQVMsQ0FBQztRQUN6QixvQkFBZSxHQUFXLHFDQUFxQyxDQUFDO1FBQ2hFLHFCQUFnQixHQUFXLDBCQUEwQixDQUFDO1FBQ3RELGlCQUFZLEdBQVcsaUJBQWlCLENBQUM7UUFDekMsZ0JBQVcsR0FBVyxtQkFBbUIsQ0FBQztRQUMxQyxrQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNsQix3QkFBbUIsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNqRSwwQkFBcUIsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNuRSxrQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBRXJFLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFDMUIsa0JBQWEsR0FBVSxFQUFFLENBQUM7UUFDMUIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFFdkIseUJBQW9CLEdBQVUsRUFBRSxDQUFDO1FBQ2pDLGlCQUFZLEdBQVUsRUFBRSxDQUFDO1FBQ3pCLGlCQUFZLEdBQVUsRUFBRSxDQUFDO1FBQ3pCLHVCQUFrQixHQUFRLEVBQUUsQ0FBQztRQUU3QixrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQTJCakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUM3QixLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQy9DLENBQUMsQ0FBQztJQUNMLENBQUM7SUEzQkQsc0JBQUksaURBQVM7Ozs7O1FBQWIsVUFBYyxLQUFjO1lBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBR0Qsc0JBQUksbURBQVc7Ozs7O1FBQWYsVUFBZ0IsS0FBYztZQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQUVELHNCQUNJLG9EQUFZOzs7O1FBTWhCO1lBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzVCLENBQUM7Ozs7O1FBVEQsVUFDaUIsS0FBWTtZQUMzQixJQUFJLENBQUMsYUFBYSxvQkFBTyxLQUFLLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsb0JBQW9CLG9CQUFPLEtBQUssQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQixDQUFDOzs7T0FBQTs7Ozs7SUFlRCwwREFBcUI7Ozs7SUFBckIsVUFBc0IsTUFBTTtRQUMxQixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxzQkFBSSxtREFBVzs7OztRQUFmO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzNCLENBQUM7OztPQUFBOzs7O0lBRUQsZ0RBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksb0JBQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxPQUFPLEVBQVQsQ0FBUyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0NBQzNFLENBQUM7O2dCQUNGLE9BQU8sR0FBRyxPQUFLLFlBQVksQ0FBQyxDQUFDLENBQUM7O2dCQUM5QixRQUFRLEdBQUcsT0FBSyxZQUFZLENBQUMsTUFBTTs7OztZQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLE9BQU8sS0FBSyxPQUFPLEVBQXJCLENBQXFCLEVBQUM7O2dCQUMvRCxJQUFJLEdBQUcsRUFBRSxPQUFPLFNBQUEsRUFBRSxRQUFRLFVBQUEsRUFBRTtZQUNsQyxPQUFLLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7OztRQUovQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO29CQUF4QyxDQUFDO1NBS1Q7UUFDRCxJQUFJLENBQUMsWUFBWSxvQkFBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCw2Q0FBUTs7OztJQUFSLFVBQVMsTUFBTTtRQUNiLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO1FBQzNCOzs7Ozs7OztvREFRNEM7UUFDNUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVELDBEQUFxQjs7O0lBQXJCOztZQUNRLGtCQUFrQixHQUFHLEVBQUU7Z0NBQ3BCLENBQUM7O2dCQUNGLElBQUksR0FBRyxPQUFLLG9CQUFvQixDQUFDLENBQUMsQ0FBQzs7Z0JBQ25DLGVBQWUsR0FBRyxPQUFLLFlBQVksQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBcEQsQ0FBb0QsRUFBQztZQUN6RyxJQUFJLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLElBQUksa0JBQWtCLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxLQUFLLFNBQVMsRUFBRTtnQkFDckgsa0JBQWtCLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDakQsa0JBQWtCLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUNuRTtpQkFBTTtnQkFDTCxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQ25FOzs7UUFSSCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7b0JBQWhELENBQUM7U0FTVDtRQUNELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQztJQUMvQyxDQUFDOzs7OztJQUVELGdEQUFXOzs7O0lBQVgsVUFBWSxJQUFTOztZQUNmLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7UUFDeEMsUUFBUSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM3RSxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7OztJQUVELHVEQUFrQjs7OztJQUFsQixVQUFtQixPQUFPO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLEdBQUcsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQzdFLENBQUM7Ozs7SUFFRCxpREFBWTs7O0lBQVo7UUFDRSxJQUFJLG1CQUFBLG1CQUFBLElBQUksQ0FBQyxZQUFZLEVBQUMsRUFBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDeEQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRTtnQkFDeEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdkM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7YUFDNUI7U0FFRjtJQUNILENBQUM7Ozs7O0lBRUQsOENBQVM7Ozs7SUFBVCxVQUFVLE1BQVc7O1lBQ2IsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSTs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEtBQUssS0FBSyxNQUFNLENBQUMsS0FBSyxFQUF4QixDQUF3QixFQUFDO1FBQ3ZFLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDZCxJQUFJLENBQUMsWUFBWSxvQkFBTyxJQUFJLENBQUMsWUFBWSxHQUFFLE1BQU0sRUFBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxvQkFBb0Isb0JBQU8sSUFBSSxDQUFDLG9CQUFvQixHQUFFLE1BQU0sRUFBQyxDQUFDO1lBQ25FLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjtJQUNILENBQUM7Ozs7O0lBRUQsaURBQVk7Ozs7SUFBWixVQUFhLE1BQVc7O1lBQ2hCLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUI7O1lBQ3pFLHNCQUFzQixHQUFHLGNBQWMsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsS0FBSyxLQUFLLE1BQU0sQ0FBQyxLQUFLLEVBQTNCLENBQTJCLEVBQUM7UUFDekYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMseUJBQXlCLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0YsQ0FBQzs7Ozs7SUFFRCxtREFBYzs7OztJQUFkLFVBQWUsSUFBVTtRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQzs7WUFDbEIsS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLFdBQVc7UUFDOUQsa0RBQWtEO1FBQ2xELElBQUksS0FBSyxJQUFJLG1CQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUU7OztnQkFFOUQsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuRSxJQUFJLENBQUMsYUFBYSxHQUFHO2dCQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDO2dCQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7Z0JBQzdDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO2FBQzFELENBQUM7U0FDSDtRQUNELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDOztnQkF4S0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLHVsS0FBbUQ7b0JBQ25ELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsbUJBQW1CLEVBQUUsS0FBSzs7aUJBRTNCOzs7O2dCQVhRLFlBQVk7Z0JBTG5CLGlCQUFpQjtnQkFJQyxXQUFXOzs7dUJBZTVCLEtBQUs7a0NBQ0wsS0FBSzttQ0FDTCxLQUFLOytCQUNMLEtBQUs7OEJBQ0wsS0FBSztnQ0FDTCxLQUFLOzhCQUNMLEtBQUs7c0NBQ0wsTUFBTTt3Q0FDTixNQUFNO2dDQUNOLE1BQU07a0NBT04sU0FBUyxTQUFDLG9CQUFvQjs0QkFROUIsS0FBSzs4QkFLTCxLQUFLOytCQUtMLEtBQUs7O0lBVE47UUFEVSxZQUFZLEVBQUU7OzsrREFHdkI7SUFHRDtRQURVLFlBQVksRUFBRTs7O2lFQUd2QjtJQThISCxpQ0FBQztDQUFBLEFBektELElBeUtDO1NBaEtZLDBCQUEwQjs7O0lBRXJDLDBDQUFrQzs7SUFDbEMscURBQXlFOztJQUN6RSxzREFBK0Q7O0lBQy9ELGtEQUFrRDs7SUFDbEQsaURBQW1EOztJQUNuRCxtREFBOEI7O0lBQzlCLGlEQUE0Qjs7SUFDNUIseURBQTJFOztJQUMzRSwyREFBNkU7O0lBQzdFLG1EQUFxRTs7SUFFckUsZ0RBQW1COztJQUNuQixrREFBb0I7O0lBQ3BCLGtEQUEwQjs7SUFDMUIsbURBQTBCOztJQUMxQixvREFBdUI7O0lBQ3ZCLHFEQUF1RTs7SUFDdkUsMERBQWlDOztJQUNqQyxrREFBeUI7O0lBQ3pCLGtEQUF5Qjs7SUFDekIsd0RBQTZCOztJQUM3QiwrQ0FBcUI7O0lBQ3JCLG1EQUFtQjs7Ozs7SUF3QmpCLCtDQUErQjs7Ozs7SUFDL0IseUNBQThCOzs7OztJQUM5Qix3Q0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxuICBJbnB1dCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBPbkluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgQ21hY3NTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuLi9jbWFjcy1zZWxlY3QvY21hY3Mtc2VsZWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBOekZpbHRlck9wdGlvblBpcGUgfSBmcm9tICduZy16b3Jyby1hbnRkJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtdXNlci1kcm9wZG93bicsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1VzZXJEcm9wZG93bicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXVzZXItZHJvcGRvd24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtdXNlci1kcm9wZG93bi5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzVXNlckRyb3Bkb3duQ29tcG9uZW50e1xyXG5cclxuICBASW5wdXQoKSBtb2RlOiBzdHJpbmcgPSAnZGVmYXVsdCc7IFxyXG4gIEBJbnB1dCgpIGVtYWlsRXJyb3JMYWJlbDogc3RyaW5nID0gJ0VtYWlsIG11c3QgYmUgYSB2YWxpZCBFbWFpbCBBZGRyZXNzJzsgXHJcbiAgQElucHV0KCkgaW52aXRlR3Vlc3RMYWJlbDogc3RyaW5nID0gJ0ludml0ZSBhIGd1ZXN0IHZpYSBlbWFpbCc7IFxyXG4gIEBJbnB1dCgpIGxvYWRpbmdMYWJlbDogc3RyaW5nID0gJ0xvYWRpbmcgZGF0YS4uLic7IFxyXG4gIEBJbnB1dCgpIHBsYWNlSG9sZGVyOiBzdHJpbmcgPSAnQWRkIFVzZXJzIC8gVGVhbXMnOyBcclxuICBASW5wdXQoKSBzZWxlY3RlZFZhbHVlID0gbnVsbDtcclxuICBASW5wdXQoKSBtYXhUYWdDb3VudCA9IG51bGw7XHJcbiAgQE91dHB1dCgpIHNlbGVjdGVkVmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uQWRkR3Vlc3RVc2VyQnlFbWFpbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgY21hY3NPblNlYXJjaDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBcclxuICBfaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgX2ludml0ZUd1ZXN0ID0gdHJ1ZTtcclxuICBfc2VhcmNoVmFsdWU6IHN0cmluZyA9ICcnO1xyXG4gIF9saXN0T2ZPcHRpb246IGFueVtdID0gW107IFxyXG4gIHNob3dFbWFpbEVycm9yID0gZmFsc2U7XHJcbiAgQFZpZXdDaGlsZChDbWFjc1NlbGVjdENvbXBvbmVudCkgc2VsZWN0Q29tcG9uZW50OiBDbWFjc1NlbGVjdENvbXBvbmVudDsgXHJcbiAgbGlzdE9mRmlsdGVyZWRPcHRpb246IGFueVtdID0gW107XHJcbiAgbGlzdERpdmlkZXJzOiBhbnlbXSA9IFtdO1xyXG4gIG9wZXJhdGVkRGF0YTogYW55W10gPSBbXTtcclxuICBmaXJzdEVsZW1CeURpdmlkZXI6IGFueSA9IHt9O1xyXG4gIGVtYWlsRm9ybTogRm9ybUdyb3VwO1xyXG4gIGhpZ2hsaWdodEtleXMgPSBbXTtcclxuXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpXHJcbiAgc2V0IGlzTG9hZGluZyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5faXNMb2FkaW5nID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKClcclxuICBzZXQgaW52aXRlR3Vlc3QodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2ludml0ZUd1ZXN0ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBsaXN0T2ZPcHRpb24odmFsdWU6IGFueVtdKSB7XHJcbiAgICB0aGlzLl9saXN0T2ZPcHRpb24gPSBbLi4udmFsdWVdO1xyXG4gICAgdGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvbiA9IFsuLi52YWx1ZV07XHJcbiAgICB0aGlzLm9wZXJhdGVEYXRhKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgbGlzdE9mT3B0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xpc3RPZk9wdGlvbjtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcixcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyKSB7XHJcbiAgICB0aGlzLmVtYWlsRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICBlbWFpbDogW3RoaXMuX3NlYXJjaFZhbHVlLCBbVmFsaWRhdG9ycy5lbWFpbF1dXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uU2VsZWN0ZWRWYWx1ZUNoYW5nZSgkZXZlbnQpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZUNoYW5nZS5lbWl0KCRldmVudCk7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VhcmNoVmFsdWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWFyY2hWYWx1ZTtcclxuICB9XHJcblxyXG4gIG9wZXJhdGVEYXRhKCkge1xyXG4gICAgdGhpcy5vcGVyYXRlZERhdGEgPSBbXTtcclxuICAgIHRoaXMubGlzdERpdmlkZXJzID0gWy4uLkFycmF5LmZyb20obmV3IFNldCh0aGlzLmxpc3RPZk9wdGlvbi5tYXAoZSA9PiBlLmRpdmlkZXIpKSldO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3REaXZpZGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBkaXZpZGVyID0gdGhpcy5saXN0RGl2aWRlcnNbaV07XHJcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5saXN0T2ZPcHRpb24uZmlsdGVyKGUgPT4gZS5kaXZpZGVyID09PSBkaXZpZGVyKTtcclxuICAgICAgY29uc3QgZWxlbSA9IHsgZGl2aWRlciwgY2hpbGRyZW4gfTtcclxuICAgICAgdGhpcy5vcGVyYXRlZERhdGEucHVzaChlbGVtKTtcclxuICAgIH1cclxuICAgIHRoaXMub3BlcmF0ZWREYXRhID0gWy4uLnRoaXMub3BlcmF0ZWREYXRhXTtcclxuICAgIHRoaXMuZ2V0Rmlyc3RFbGVtQnlEaXZpZGVyKCk7XHJcbiAgfVxyXG5cclxuICBvbnNlYXJjaCgkZXZlbnQpIHtcclxuICAgIHRoaXMuc2hvd0VtYWlsRXJyb3IgPSBmYWxzZTtcclxuICAgIHRoaXMuX3NlYXJjaFZhbHVlID0gJGV2ZW50O1xyXG4gICAgLypjb25zdCBsaXN0T2ZGaWx0ZXJlZE9wdGlvbiA9IG5ldyBOekZpbHRlck9wdGlvblBpcGUoKS50cmFuc2Zvcm0oXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50Lm56U2VsZWN0U2VydmljZS5saXN0T2ZOek9wdGlvbkNvbXBvbmVudCxcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQubnpTZWxlY3RTZXJ2aWNlLnNlYXJjaFZhbHVlLFxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudC5uelNlbGVjdFNlcnZpY2UuZmlsdGVyT3B0aW9uLFxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudC5uelNlbGVjdFNlcnZpY2Uuc2VydmVyU2VhcmNoXHJcbiAgICApO1xyXG4gICAgdGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvbiA9IGxpc3RPZkZpbHRlcmVkT3B0aW9uO1xyXG4gICAgdGhpcy5nZXRGaXJzdEVsZW1CeURpdmlkZXIoKTtcclxuICAgIGNvbnNvbGUubG9nKCRldmVudCwgbGlzdE9mRmlsdGVyZWRPcHRpb24pOyovXHJcbiAgICB0aGlzLmNtYWNzT25TZWFyY2guZW1pdCgkZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Rmlyc3RFbGVtQnlEaXZpZGVyKCkge1xyXG4gICAgY29uc3QgZmlyc3RFbGVtQnlEaXZpZGVyID0ge307XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb24ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgZWxlbSA9IHRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb25baV07XHJcbiAgICAgIGNvbnN0IGVsZW1XaXRoRGl2aWRlciA9IHRoaXMubGlzdE9mT3B0aW9uLmZpbmQoZSA9PiAoZS52YWx1ZSA9PT0gZWxlbS5uelZhbHVlIHx8IGUudmFsdWUgPT09IGVsZW0udmFsdWUpKTtcclxuICAgICAgaWYgKGZpcnN0RWxlbUJ5RGl2aWRlcltlbGVtV2l0aERpdmlkZXIuZGl2aWRlcl0gPT09IG51bGwgfHwgZmlyc3RFbGVtQnlEaXZpZGVyW2VsZW1XaXRoRGl2aWRlci5kaXZpZGVyXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZmlyc3RFbGVtQnlEaXZpZGVyW2VsZW1XaXRoRGl2aWRlci5kaXZpZGVyXSA9IFtdO1xyXG4gICAgICAgIGZpcnN0RWxlbUJ5RGl2aWRlcltlbGVtV2l0aERpdmlkZXIuZGl2aWRlcl0ucHVzaChlbGVtV2l0aERpdmlkZXIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZpcnN0RWxlbUJ5RGl2aWRlcltlbGVtV2l0aERpdmlkZXIuZGl2aWRlcl0ucHVzaChlbGVtV2l0aERpdmlkZXIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmZpcnN0RWxlbUJ5RGl2aWRlciA9IGZpcnN0RWxlbUJ5RGl2aWRlcjtcclxuICB9XHJcblxyXG4gIGdldEluaXRpYWxzKG5hbWU6IGFueSkge1xyXG4gICAgbGV0IGluaXRpYWxzID0gbmFtZS5tYXRjaCgvXFxiXFx3L2cpIHx8IFtdO1xyXG4gICAgaW5pdGlhbHMgPSAoKGluaXRpYWxzLnNoaWZ0KCkgfHwgJycpICsgKGluaXRpYWxzLnBvcCgpIHx8ICcnKSkudG9VcHBlckNhc2UoKTtcclxuICAgIHJldHVybiBpbml0aWFscztcclxuICB9XHJcblxyXG4gIGdldEJhY2tncm91bmRJbWFnZShwaWN0dXJlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKCd1cmwoXFwnJyArIHBpY3R1cmUgKyAnXFwnKScpO1xyXG4gIH1cclxuXHJcbiAgYWRkR3Vlc3RVc2VyKCkge1xyXG4gICAgaWYgKHRoaXMuX3NlYXJjaFZhbHVlISEpIHtcclxuICAgICAgdGhpcy5lbWFpbEZvcm0uZ2V0KCdlbWFpbCcpLnNldFZhbHVlKHRoaXMuX3NlYXJjaFZhbHVlKTtcclxuICAgICAgaWYgKHRoaXMuZW1haWxGb3JtLnZhbGlkKSB7XHJcbiAgICAgICAgdGhpcy5zaG93RW1haWxFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub25BZGRHdWVzdFVzZXJCeUVtYWlsLmVtaXQodHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zaG93RW1haWxFcnJvciA9IHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRPcHRpb24ob3B0aW9uOiBhbnkpIHtcclxuICAgIGNvbnN0IGNoZWNrVXNlciA9IHRoaXMubGlzdE9mT3B0aW9uLmZpbmQoZSA9PiBlLnZhbHVlID09PSBvcHRpb24udmFsdWUpO1xyXG4gICAgaWYgKCFjaGVja1VzZXIpIHtcclxuICAgICAgdGhpcy5saXN0T2ZPcHRpb24gPSBbLi4udGhpcy5saXN0T2ZPcHRpb24sIG9wdGlvbl07XHJcbiAgICAgIHRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb24gPSBbLi4udGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvbiwgb3B0aW9uXTtcclxuICAgICAgdGhpcy5vcGVyYXRlRGF0YSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlT3B0aW9uKG9wdGlvbjogYW55KSB7XHJcbiAgICBjb25zdCBzZWxlY3RlZFZhbHVlcyA9IHRoaXMuc2VsZWN0Q29tcG9uZW50Lm56U2VsZWN0U2VydmljZS5saXN0T2ZTZWxlY3RlZFZhbHVlO1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZXNGaWx0ZXJlZCA9IHNlbGVjdGVkVmFsdWVzLmZpbHRlcihlbGVtID0+IGVsZW0udmFsdWUgIT09IG9wdGlvbi52YWx1ZSk7XHJcbiAgICB0aGlzLnNlbGVjdENvbXBvbmVudC5uelNlbGVjdFNlcnZpY2UudXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZShzZWxlY3RlZFZhbHVlc0ZpbHRlcmVkLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIGhpZ2hsaWdodFZhbHVlKGVsZW0gOiBhbnkpIHtcclxuICAgIHRoaXMuaGlnaGxpZ2h0S2V5cyA9IFtdO1xyXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnNlbGVjdENvbXBvbmVudC5uelNlbGVjdFNlcnZpY2Uuc2VhcmNoVmFsdWU7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgaWYgKHZhbHVlICYmIGVsZW0ubGFiZWwudG9Mb3dlckNhc2UoKSEuaW5jbHVkZXModmFsdWUudG9Mb3dlckNhc2UoKSkpIHtcclxuICAgICAgLy8gbWF0Y2ggdGhlIHNlYXJjaCB2YWx1ZVxyXG4gICAgICBjb25zdCBpbmRleCA9IGVsZW0ubGFiZWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKHZhbHVlLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICB0aGlzLmhpZ2hsaWdodEtleXMgPSBbXHJcbiAgICAgICAgZWxlbS5sYWJlbC5zbGljZSgwLCBpbmRleCksXHJcbiAgICAgICAgZWxlbS5sYWJlbC5zbGljZShpbmRleCwgaW5kZXggKyB2YWx1ZS5sZW5ndGgpLFxyXG4gICAgICAgIGVsZW0ubGFiZWwuc2xpY2UoaW5kZXggKyB2YWx1ZS5sZW5ndGgsIGVsZW0ubGFiZWwubGVuZ3RoKVxyXG4gICAgICBdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaGlnaGxpZ2h0S2V5cztcclxuICB9XHJcbn1cclxuIl19