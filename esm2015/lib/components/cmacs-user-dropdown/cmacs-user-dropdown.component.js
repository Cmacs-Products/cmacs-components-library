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
export class CmacsUserDropdownComponent {
    /**
     * @param {?} sanitizer
     * @param {?} cdr
     * @param {?} fb
     */
    constructor(sanitizer, cdr, fb) {
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
    /**
     * @param {?} value
     * @return {?}
     */
    set isLoading(value) {
        this._isLoading = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set inviteGuest(value) {
        this._inviteGuest = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set listOfOption(value) {
        this._listOfOption = [...value];
        this.listOfFilteredOption = [...value];
        this.operateData();
    }
    /**
     * @return {?}
     */
    get listOfOption() {
        return this._listOfOption;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onSelectedValueChange($event) {
        this.selectedValueChange.emit($event);
    }
    /**
     * @return {?}
     */
    get searchValue() {
        return this._searchValue;
    }
    /**
     * @return {?}
     */
    operateData() {
        this.operatedData = [];
        this.listDividers = [...Array.from(new Set(this.listOfOption.map((/**
             * @param {?} e
             * @return {?}
             */
            e => e.divider))))];
        for (let i = 0; i < this.listDividers.length; i++) {
            /** @type {?} */
            const divider = this.listDividers[i];
            /** @type {?} */
            const children = this.listOfOption.filter((/**
             * @param {?} e
             * @return {?}
             */
            e => e.divider === divider));
            /** @type {?} */
            const elem = { divider, children };
            this.operatedData.push(elem);
        }
        this.operatedData = [...this.operatedData];
        this.getFirstElemByDivider();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onsearch($event) {
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
    }
    /**
     * @return {?}
     */
    getFirstElemByDivider() {
        /** @type {?} */
        const firstElemByDivider = {};
        for (let i = 0; i < this.listOfFilteredOption.length; i++) {
            /** @type {?} */
            const elem = this.listOfFilteredOption[i];
            /** @type {?} */
            const elemWithDivider = this.listOfOption.find((/**
             * @param {?} e
             * @return {?}
             */
            e => (e.value === elem.nzValue || e.value === elem.value)));
            if (firstElemByDivider[elemWithDivider.divider] === null || firstElemByDivider[elemWithDivider.divider] === undefined) {
                firstElemByDivider[elemWithDivider.divider] = [];
                firstElemByDivider[elemWithDivider.divider].push(elemWithDivider);
            }
            else {
                firstElemByDivider[elemWithDivider.divider].push(elemWithDivider);
            }
        }
        this.firstElemByDivider = firstElemByDivider;
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
     * @return {?}
     */
    addGuestUser() {
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
    }
    /**
     * @param {?} option
     * @return {?}
     */
    addOption(option) {
        /** @type {?} */
        const checkUser = this.listOfOption.find((/**
         * @param {?} e
         * @return {?}
         */
        e => e.value === option.value));
        if (!checkUser) {
            this.listOfOption = [...this.listOfOption, option];
            this.listOfFilteredOption = [...this.listOfFilteredOption, option];
            this.operateData();
        }
    }
    /**
     * @param {?} elem
     * @return {?}
     */
    highlightValue(elem) {
        this.highlightKeys = [];
        /** @type {?} */
        const value = this.selectComponent.nzSelectService.searchValue;
        // tslint:disable-next-line: no-non-null-assertion
        if (value && (/** @type {?} */ (elem.label.toLowerCase())).includes(value.toLowerCase())) {
            // match the search value
            /** @type {?} */
            const index = elem.label.toLowerCase().indexOf(value.toLowerCase());
            this.highlightKeys = [
                elem.label.slice(0, index),
                elem.label.slice(index, index + value.length),
                elem.label.slice(index + value.length, elem.label.length)
            ];
        }
        return this.highlightKeys;
    }
}
CmacsUserDropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmacs-user-dropdown',
                exportAs: 'cmacsUserDropdown',
                template: "<cmacs-select [showCmacsSearch]=\"true\"\r\n              allowClear\r\n              [maxTagCount]=\"maxTagCount\"\r\n              style=\"width: inherit !important\"\r\n              [mode]=\"mode\"\r\n              [showSelectAll]=\"false\"\r\n              [userDropdown]=\"true\"\r\n              [notFoundContentCustom]=\"notFoundContent\"\r\n              [placeHolder]=\"placeHolder\"\r\n              (cmacsOnSearch)=\"onsearch($event)\"\r\n              [serverSearch]=\"true\"\r\n              [dropdownRender]=\"_inviteGuest ? render : null\"\r\n              (ngModelChange)=\"onSelectedValueChange($event)\"\r\n              [(ngModel)]=\"selectedValue\">\r\n  <ng-container *ngFor=\"let option of operatedData; index as i\">\r\n    <ng-container *ngFor=\"let elem of option.children; index as j\">\r\n      <cmacs-option [label]=\"elem.label\" [value]=\"elem.value\" customContent>\r\n        <div class=\"cmacs-user-dropdown-option-wrapper\"\r\n             [class.cmacs-user-dropdown-last-elem]=\"j === option.children.length - 1\"\r\n             [class.cmacs-user-dropdown-divider-first-option]=\"firstElemByDivider[option.divider] && firstElemByDivider[option.divider].length &&\r\n            firstElemByDivider[option.divider][0].value === elem.value\">\r\n          <div *ngIf=\"firstElemByDivider[option.divider] && firstElemByDivider[option.divider].length &&\r\n            firstElemByDivider[option.divider][0].value === elem.value\" class=\"cmacs-user-dropdown-divider\">\r\n            <nz-divider></nz-divider>\r\n            {{option.divider}} <span style=\"color: #97a0ae\">({{firstElemByDivider[option.divider].length}})</span>\r\n          </div>\r\n\r\n          <ng-container *ngIf=\"elem.template; else defaultTPL\">\r\n            <ng-container [ngTemplateOutlet]=\"elem.template.ref\"\r\n                          [ngTemplateOutletContext]=\"elem.template.context\">\r\n            </ng-container>\r\n          </ng-container>\r\n\r\n          <ng-template #defaultTPL>\r\n            <div class=\"cmacs-user-dropdown-info-wrapper\" [class.cmacs-user-dropdown-hide-picture]=\"elem.hidePicture\">\r\n\r\n              <div class=\"cmacs-user-dropdown-person-picture\"\r\n                   [class.cmacs-user-dropdown-no-picture]=\"elem.hidePicture\"\r\n                   *ngIf=\"elem.role === 'user'\"\r\n                   [style.background-image]=\"elem.picture ? getBackgroundImage(elem.picture): 'none'\">\r\n                <span class=\"cmacs-user-dropdown-initials\" *ngIf=\"!elem.picture\">{{getInitials(elem.label)}}</span>\r\n              </div>\r\n\r\n              <div class=\"cmacs-user-dropdown-person-picture\"\r\n                   [class.cmacs-guest-no-picture]=\"!elem.picture\"\r\n                   [class.cmacs-user-dropdown-no-picture]=\"elem.hidePicture\"\r\n                   *ngIf=\"elem.role === 'guest'\"\r\n                   [style.background-image]=\"elem.picture ? getBackgroundImage(elem.picture): 'none'\">\r\n                <i class=\"iconCreation-User\" *ngIf=\"!elem.picture\"></i>\r\n              </div>\r\n\r\n              <div class=\"cmacs-user-dropdown-person-picture\"\r\n                   [class.cmacs-team-no-picture]=\"!elem.picture\"\r\n                   [class.cmacs-user-dropdown-no-picture]=\"elem.hidePicture\"\r\n                   *ngIf=\"elem.role === 'team'\"\r\n                   [style.background-image]=\"elem.picture ? getBackgroundImage(elem.picture): 'none'\">\r\n                <i class=\"iconCreation-Team\" *ngIf=\"!elem.picture\"></i>\r\n              </div>\r\n\r\n              <div class=\"cmacs-user-dropdown-title\" [class.cmacs-user-dropdown-team-title]=\"elem.role === 'team'\">\r\n                <ng-container *ngIf=\"highlightValue(elem).length === 3\">\r\n                  <span>\r\n                    {{highlightKeys[0]}}<span style=\"color: #2a7cff\">{{highlightKeys[1]}}</span>{{highlightKeys[2]}}\r\n                  </span>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"!highlightValue(elem).length\">\r\n                  {{elem.label}}\r\n                </ng-container>\r\n              </div>\r\n              <div *ngIf=\"elem.role === 'user' || elem.role === 'guest'\" class=\"cmacs-user-dropdown-subtitle\">{{elem.charge}}</div>\r\n            </div>\r\n          </ng-template>\r\n        </div>\r\n      </cmacs-option>\r\n    </ng-container>\r\n  </ng-container>\r\n  <cmacs-option *ngIf=\"_isLoading\" disabled customContent>\r\n    <div class=\"cmacs-user-dropdown-loading-wrapper\">\r\n      <i nz-icon type=\"loading\" class=\"cmacs-user-dropdown-loading-icon\"></i> {{loadingLabel}}\r\n    </div>  \r\n  </cmacs-option>\r\n</cmacs-select>\r\n\r\n<ng-template #render>\r\n  <div class=\"cmacs-user-dropdown-invite-guest\"\r\n       (click)=\"addGuestUser()\">\r\n    <i style=\"font-size: 17px; position: relative; top: 3px; margin-right: 6px;\" class=\"iconUISmall-Message\"></i>\r\n    <span>{{inviteGuestLabel}}</span>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #notFoundContent>\r\n  <div *ngIf=\"showEmailError\" class=\"cmacs-user-dropdown-error\">{{emailErrorLabel}}</div>\r\n</ng-template>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                styles: [".cmacs-user-dropdown-person-picture{text-align:center;padding-top:2px;border-radius:3px;width:34px;height:34px;background-color:#a100cd;color:#fff;background-repeat:no-repeat;background-position:center center;background-size:contain}.cmacs-user-dropdown-divider{font-family:Roboto-Medium;font-size:13px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.23;letter-spacing:normal;color:#3b3f46;padding:7px 14px 8px;background-color:#fff!important}.cmacs-user-dropdown-divider:hover{background-color:#fff!important}.cmacs-user-dropdown-divider nz-divider:first-child{-webkit-transform:scaleX(1.5);transform:scaleX(1.5);position:relative;top:-7px}.cmacs-user-dropdown-initials{position:relative;top:5px;font-size:14px}.cmacs-user-dropdown-title{position:absolute;top:0;left:45px;font-family:Roboto-Regular;font-size:12px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;color:#656c79;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:calc(100% - 75px)}.cmacs-user-dropdown-subtitle{position:absolute;top:16px;left:45px;font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;color:#97a0ae;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:calc(100% - 75px)}.cmacs-team-no-picture{border-radius:3px;border:1.1px solid #dee0e5;background-color:#fff;color:#656c79;font-size:16px;padding:5px 0}.cmacs-user-dropdown-team-title{top:7px}.cmacs-guest-no-picture{border-radius:3px;background-color:#00cda1;font-size:16px;padding:6px 0}.cmacs-user-dropdown-error{color:#f6503c;font-size:10px;font-weight:400;font-stretch:normal;font-style:normal;line-height:2;letter-spacing:normal;padding:5px 0;position:relative;left:12px}.ant-select-dropdown.cmacs-select-user-dropdown.ant-select-dropdown--multiple .cmacs-user-dropdown-error{left:12px}.cmacs-select-user-dropdown .ant-select-dropdown-menu-item{padding:0!important}.cmacs-user-dropdown-option-wrapper{padding:7px 0}.cmacs-user-dropdown-info-wrapper{position:relative;margin:0 14px}.ant-select-dropdown.cmacs-select-user-dropdown.ant-select-dropdown--multiple .cmacs-user-dropdown-info-wrapper{margin:0 14px 0 42px}.cmacs-user-dropdown-divider-first-option{padding-top:0}.cmacs-user-dropdown-divider-first-option .cmacs-user-dropdown-info-wrapper{margin-top:7px!important}.cmacs-user-dropdown-last-elem{padding-bottom:14px}.cmacs-user-dropdown-invite-guest{height:34px;box-shadow:0 -2px 5px 0 rgba(59,63,70,.1);background-color:#fff;color:#2a7cff;padding:6px 11px;font-size:12px;cursor:pointer}.cmacs-user-dropdown-invite-guest:hover{background-color:#f2f7ff}.cmacs-user-dropdown-no-picture{opacity:0}.cmacs-user-dropdown-hide-picture .cmacs-user-dropdown-subtitle,.cmacs-user-dropdown-hide-picture .cmacs-user-dropdown-title{left:0}.ant-select-dropdown-menu{scrollbar-color:#cfd3d9 #fff;scrollbar-width:thin}.cmacs-user-dropdown-loading-wrapper{padding:7px 12px}.cmacs-user-dropdown-loading-icon{margin-right:6px}"]
            }] }
];
/** @nocollapse */
CmacsUserDropdownComponent.ctorParameters = () => [
    { type: DomSanitizer },
    { type: ChangeDetectorRef },
    { type: FormBuilder }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdXNlci1kcm9wZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXVzZXItZHJvcGRvd24vY21hY3MtdXNlci1kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sWUFBWSxFQUVaLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDOUUsT0FBTyxFQUFhLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFZekQsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7O0lBK0NyQyxZQUNVLFNBQXVCLEVBQ3ZCLEdBQXNCLEVBQ3RCLEVBQWU7UUFGZixjQUFTLEdBQVQsU0FBUyxDQUFjO1FBQ3ZCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLE9BQUUsR0FBRixFQUFFLENBQWE7UUFoRGhCLFNBQUksR0FBVyxTQUFTLENBQUM7UUFDekIsb0JBQWUsR0FBVyxxQ0FBcUMsQ0FBQztRQUNoRSxxQkFBZ0IsR0FBVywwQkFBMEIsQ0FBQztRQUN0RCxpQkFBWSxHQUFXLGlCQUFpQixDQUFDO1FBQ3pDLGdCQUFXLEdBQVcsbUJBQW1CLENBQUM7UUFDMUMsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbEIsd0JBQW1CLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDakUsMEJBQXFCLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDbkUsa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUVyRSxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQzFCLGtCQUFhLEdBQVUsRUFBRSxDQUFDO1FBQzFCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBRXZCLHlCQUFvQixHQUFVLEVBQUUsQ0FBQztRQUNqQyxpQkFBWSxHQUFVLEVBQUUsQ0FBQztRQUN6QixpQkFBWSxHQUFVLEVBQUUsQ0FBQztRQUN6Qix1QkFBa0IsR0FBUSxFQUFFLENBQUM7UUFFN0Isa0JBQWEsR0FBRyxFQUFFLENBQUM7UUEyQmpCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDN0IsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMvQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQTNCRCxJQUFJLFNBQVMsQ0FBQyxLQUFjO1FBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBR0QsSUFBSSxXQUFXLENBQUMsS0FBYztRQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELElBQ0ksWUFBWSxDQUFDLEtBQVk7UUFDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDOzs7OztJQVdELHFCQUFxQixDQUFDLE1BQU07UUFDMUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7O0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUc7Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2tCQUMzQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7O2tCQUM5QixRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxLQUFLLE9BQU8sRUFBQzs7a0JBQy9ELElBQUksR0FBRyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDOUI7UUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsTUFBTTtRQUNiLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO1FBQzNCOzs7Ozs7OztvREFRNEM7UUFDNUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVELHFCQUFxQjs7Y0FDYixrQkFBa0IsR0FBRyxFQUFFO1FBQzdCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztrQkFDbkQsSUFBSSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7O2tCQUNuQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBQztZQUN6RyxJQUFJLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLElBQUksa0JBQWtCLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxLQUFLLFNBQVMsRUFBRTtnQkFDckgsa0JBQWtCLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDakQsa0JBQWtCLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUNuRTtpQkFBTTtnQkFDTCxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQ25FO1NBQ0Y7UUFDRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUM7SUFDL0MsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsSUFBUzs7WUFDZixRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO1FBQ3hDLFFBQVEsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0UsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxPQUFPO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLEdBQUcsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQzdFLENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1YsSUFBSSxtQkFBQSxtQkFBQSxJQUFJLENBQUMsWUFBWSxFQUFDLEVBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3hELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO2dCQUM1QixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3ZDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO2FBQzVCO1NBRUY7SUFDSCxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxNQUFXOztjQUNiLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUk7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLEtBQUssRUFBQztRQUN2RSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNuRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7SUFDSCxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxJQUFVO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDOztjQUNsQixLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsV0FBVztRQUM5RCxrREFBa0Q7UUFDbEQsSUFBSSxLQUFLLElBQUksbUJBQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRTs7O2tCQUU5RCxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25FLElBQUksQ0FBQyxhQUFhLEdBQUc7Z0JBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztnQkFDN0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7YUFDMUQsQ0FBQztTQUNIO1FBQ0QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7OztZQWxLRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsNmtLQUFtRDtnQkFDbkQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxtQkFBbUIsRUFBRSxLQUFLOzthQUUzQjs7OztZQVhRLFlBQVk7WUFMbkIsaUJBQWlCO1lBSUMsV0FBVzs7O21CQWU1QixLQUFLOzhCQUNMLEtBQUs7K0JBQ0wsS0FBSzsyQkFDTCxLQUFLOzBCQUNMLEtBQUs7NEJBQ0wsS0FBSzswQkFDTCxLQUFLO2tDQUNMLE1BQU07b0NBQ04sTUFBTTs0QkFDTixNQUFNOzhCQU9OLFNBQVMsU0FBQyxvQkFBb0I7d0JBUTlCLEtBQUs7MEJBS0wsS0FBSzsyQkFLTCxLQUFLOztBQVROO0lBRFUsWUFBWSxFQUFFOzs7MkRBR3ZCO0FBR0Q7SUFEVSxZQUFZLEVBQUU7Ozs2REFHdkI7OztJQWhDRCwwQ0FBa0M7O0lBQ2xDLHFEQUF5RTs7SUFDekUsc0RBQStEOztJQUMvRCxrREFBa0Q7O0lBQ2xELGlEQUFtRDs7SUFDbkQsbURBQThCOztJQUM5QixpREFBNEI7O0lBQzVCLHlEQUEyRTs7SUFDM0UsMkRBQTZFOztJQUM3RSxtREFBcUU7O0lBRXJFLGdEQUFtQjs7SUFDbkIsa0RBQW9COztJQUNwQixrREFBMEI7O0lBQzFCLG1EQUEwQjs7SUFDMUIsb0RBQXVCOztJQUN2QixxREFBdUU7O0lBQ3ZFLDBEQUFpQzs7SUFDakMsa0RBQXlCOztJQUN6QixrREFBeUI7O0lBQ3pCLHdEQUE2Qjs7SUFDN0IsK0NBQXFCOztJQUNyQixtREFBbUI7Ozs7O0lBd0JqQiwrQ0FBK0I7Ozs7O0lBQy9CLHlDQUE4Qjs7Ozs7SUFDOUIsd0NBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbiAgSW5wdXQsXHJcbiAgVmlld0NoaWxkLFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgT25Jbml0LFxyXG4gIENoYW5nZURldGVjdG9yUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IENtYWNzU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi4vY21hY3Mtc2VsZWN0L2NtYWNzLXNlbGVjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgTnpGaWx0ZXJPcHRpb25QaXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLXVzZXItZHJvcGRvd24nLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NVc2VyRHJvcGRvd24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy11c2VyLWRyb3Bkb3duLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXVzZXItZHJvcGRvd24uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1VzZXJEcm9wZG93bkNvbXBvbmVudHtcclxuXHJcbiAgQElucHV0KCkgbW9kZTogc3RyaW5nID0gJ2RlZmF1bHQnOyBcclxuICBASW5wdXQoKSBlbWFpbEVycm9yTGFiZWw6IHN0cmluZyA9ICdFbWFpbCBtdXN0IGJlIGEgdmFsaWQgRW1haWwgQWRkcmVzcyc7IFxyXG4gIEBJbnB1dCgpIGludml0ZUd1ZXN0TGFiZWw6IHN0cmluZyA9ICdJbnZpdGUgYSBndWVzdCB2aWEgZW1haWwnOyBcclxuICBASW5wdXQoKSBsb2FkaW5nTGFiZWw6IHN0cmluZyA9ICdMb2FkaW5nIGRhdGEuLi4nOyBcclxuICBASW5wdXQoKSBwbGFjZUhvbGRlcjogc3RyaW5nID0gJ0FkZCBVc2VycyAvIFRlYW1zJzsgXHJcbiAgQElucHV0KCkgc2VsZWN0ZWRWYWx1ZSA9IG51bGw7XHJcbiAgQElucHV0KCkgbWF4VGFnQ291bnQgPSBudWxsO1xyXG4gIEBPdXRwdXQoKSBzZWxlY3RlZFZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbkFkZEd1ZXN0VXNlckJ5RW1haWw6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGNtYWNzT25TZWFyY2g6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgXHJcbiAgX2lzTG9hZGluZyA9IGZhbHNlO1xyXG4gIF9pbnZpdGVHdWVzdCA9IHRydWU7XHJcbiAgX3NlYXJjaFZhbHVlOiBzdHJpbmcgPSAnJztcclxuICBfbGlzdE9mT3B0aW9uOiBhbnlbXSA9IFtdOyBcclxuICBzaG93RW1haWxFcnJvciA9IGZhbHNlO1xyXG4gIEBWaWV3Q2hpbGQoQ21hY3NTZWxlY3RDb21wb25lbnQpIHNlbGVjdENvbXBvbmVudDogQ21hY3NTZWxlY3RDb21wb25lbnQ7IFxyXG4gIGxpc3RPZkZpbHRlcmVkT3B0aW9uOiBhbnlbXSA9IFtdO1xyXG4gIGxpc3REaXZpZGVyczogYW55W10gPSBbXTtcclxuICBvcGVyYXRlZERhdGE6IGFueVtdID0gW107XHJcbiAgZmlyc3RFbGVtQnlEaXZpZGVyOiBhbnkgPSB7fTtcclxuICBlbWFpbEZvcm06IEZvcm1Hcm91cDtcclxuICBoaWdobGlnaHRLZXlzID0gW107XHJcblxyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKVxyXG4gIHNldCBpc0xvYWRpbmcodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2lzTG9hZGluZyA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpXHJcbiAgc2V0IGludml0ZUd1ZXN0KHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9pbnZpdGVHdWVzdCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbGlzdE9mT3B0aW9uKHZhbHVlOiBhbnlbXSkge1xyXG4gICAgdGhpcy5fbGlzdE9mT3B0aW9uID0gWy4uLnZhbHVlXTtcclxuICAgIHRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb24gPSBbLi4udmFsdWVdO1xyXG4gICAgdGhpcy5vcGVyYXRlRGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGxpc3RPZk9wdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLl9saXN0T2ZPcHRpb247XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcikge1xyXG4gICAgdGhpcy5lbWFpbEZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgZW1haWw6IFt0aGlzLl9zZWFyY2hWYWx1ZSwgW1ZhbGlkYXRvcnMuZW1haWxdXVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvblNlbGVjdGVkVmFsdWVDaGFuZ2UoJGV2ZW50KSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkVmFsdWVDaGFuZ2UuZW1pdCgkZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNlYXJjaFZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VhcmNoVmFsdWU7XHJcbiAgfVxyXG5cclxuICBvcGVyYXRlRGF0YSgpIHtcclxuICAgIHRoaXMub3BlcmF0ZWREYXRhID0gW107XHJcbiAgICB0aGlzLmxpc3REaXZpZGVycyA9IFsuLi5BcnJheS5mcm9tKG5ldyBTZXQodGhpcy5saXN0T2ZPcHRpb24ubWFwKGUgPT4gZS5kaXZpZGVyKSkpXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0RGl2aWRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgZGl2aWRlciA9IHRoaXMubGlzdERpdmlkZXJzW2ldO1xyXG4gICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMubGlzdE9mT3B0aW9uLmZpbHRlcihlID0+IGUuZGl2aWRlciA9PT0gZGl2aWRlcik7XHJcbiAgICAgIGNvbnN0IGVsZW0gPSB7IGRpdmlkZXIsIGNoaWxkcmVuIH07XHJcbiAgICAgIHRoaXMub3BlcmF0ZWREYXRhLnB1c2goZWxlbSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLm9wZXJhdGVkRGF0YSA9IFsuLi50aGlzLm9wZXJhdGVkRGF0YV07XHJcbiAgICB0aGlzLmdldEZpcnN0RWxlbUJ5RGl2aWRlcigpO1xyXG4gIH1cclxuXHJcbiAgb25zZWFyY2goJGV2ZW50KSB7XHJcbiAgICB0aGlzLnNob3dFbWFpbEVycm9yID0gZmFsc2U7XHJcbiAgICB0aGlzLl9zZWFyY2hWYWx1ZSA9ICRldmVudDtcclxuICAgIC8qY29uc3QgbGlzdE9mRmlsdGVyZWRPcHRpb24gPSBuZXcgTnpGaWx0ZXJPcHRpb25QaXBlKCkudHJhbnNmb3JtKFxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudC5uelNlbGVjdFNlcnZpY2UubGlzdE9mTnpPcHRpb25Db21wb25lbnQsXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50Lm56U2VsZWN0U2VydmljZS5zZWFyY2hWYWx1ZSxcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQubnpTZWxlY3RTZXJ2aWNlLmZpbHRlck9wdGlvbixcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQubnpTZWxlY3RTZXJ2aWNlLnNlcnZlclNlYXJjaFxyXG4gICAgKTtcclxuICAgIHRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb24gPSBsaXN0T2ZGaWx0ZXJlZE9wdGlvbjtcclxuICAgIHRoaXMuZ2V0Rmlyc3RFbGVtQnlEaXZpZGVyKCk7XHJcbiAgICBjb25zb2xlLmxvZygkZXZlbnQsIGxpc3RPZkZpbHRlcmVkT3B0aW9uKTsqL1xyXG4gICAgdGhpcy5jbWFjc09uU2VhcmNoLmVtaXQoJGV2ZW50KTtcclxuICB9XHJcblxyXG4gIGdldEZpcnN0RWxlbUJ5RGl2aWRlcigpIHtcclxuICAgIGNvbnN0IGZpcnN0RWxlbUJ5RGl2aWRlciA9IHt9O1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RPZkZpbHRlcmVkT3B0aW9uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGVsZW0gPSB0aGlzLmxpc3RPZkZpbHRlcmVkT3B0aW9uW2ldO1xyXG4gICAgICBjb25zdCBlbGVtV2l0aERpdmlkZXIgPSB0aGlzLmxpc3RPZk9wdGlvbi5maW5kKGUgPT4gKGUudmFsdWUgPT09IGVsZW0ubnpWYWx1ZSB8fCBlLnZhbHVlID09PSBlbGVtLnZhbHVlKSk7XHJcbiAgICAgIGlmIChmaXJzdEVsZW1CeURpdmlkZXJbZWxlbVdpdGhEaXZpZGVyLmRpdmlkZXJdID09PSBudWxsIHx8IGZpcnN0RWxlbUJ5RGl2aWRlcltlbGVtV2l0aERpdmlkZXIuZGl2aWRlcl0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGZpcnN0RWxlbUJ5RGl2aWRlcltlbGVtV2l0aERpdmlkZXIuZGl2aWRlcl0gPSBbXTtcclxuICAgICAgICBmaXJzdEVsZW1CeURpdmlkZXJbZWxlbVdpdGhEaXZpZGVyLmRpdmlkZXJdLnB1c2goZWxlbVdpdGhEaXZpZGVyKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmaXJzdEVsZW1CeURpdmlkZXJbZWxlbVdpdGhEaXZpZGVyLmRpdmlkZXJdLnB1c2goZWxlbVdpdGhEaXZpZGVyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5maXJzdEVsZW1CeURpdmlkZXIgPSBmaXJzdEVsZW1CeURpdmlkZXI7XHJcbiAgfVxyXG5cclxuICBnZXRJbml0aWFscyhuYW1lOiBhbnkpIHtcclxuICAgIGxldCBpbml0aWFscyA9IG5hbWUubWF0Y2goL1xcYlxcdy9nKSB8fCBbXTtcclxuICAgIGluaXRpYWxzID0gKChpbml0aWFscy5zaGlmdCgpIHx8ICcnKSArIChpbml0aWFscy5wb3AoKSB8fCAnJykpLnRvVXBwZXJDYXNlKCk7XHJcbiAgICByZXR1cm4gaW5pdGlhbHM7XHJcbiAgfVxyXG5cclxuICBnZXRCYWNrZ3JvdW5kSW1hZ2UocGljdHVyZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSgndXJsKFxcJycgKyBwaWN0dXJlICsgJ1xcJyknKTtcclxuICB9XHJcblxyXG4gIGFkZEd1ZXN0VXNlcigpIHtcclxuICAgIGlmICh0aGlzLl9zZWFyY2hWYWx1ZSEhKSB7XHJcbiAgICAgIHRoaXMuZW1haWxGb3JtLmdldCgnZW1haWwnKS5zZXRWYWx1ZSh0aGlzLl9zZWFyY2hWYWx1ZSk7XHJcbiAgICAgIGlmICh0aGlzLmVtYWlsRm9ybS52YWxpZCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0VtYWlsRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9uQWRkR3Vlc3RVc2VyQnlFbWFpbC5lbWl0KHRydWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2hvd0VtYWlsRXJyb3IgPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkT3B0aW9uKG9wdGlvbjogYW55KSB7XHJcbiAgICBjb25zdCBjaGVja1VzZXIgPSB0aGlzLmxpc3RPZk9wdGlvbi5maW5kKGUgPT4gZS52YWx1ZSA9PT0gb3B0aW9uLnZhbHVlKTtcclxuICAgIGlmICghY2hlY2tVc2VyKSB7XHJcbiAgICAgIHRoaXMubGlzdE9mT3B0aW9uID0gWy4uLnRoaXMubGlzdE9mT3B0aW9uLCBvcHRpb25dO1xyXG4gICAgICB0aGlzLmxpc3RPZkZpbHRlcmVkT3B0aW9uID0gWy4uLnRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb24sIG9wdGlvbl07XHJcbiAgICAgIHRoaXMub3BlcmF0ZURhdGEoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhpZ2hsaWdodFZhbHVlKGVsZW0gOiBhbnkpIHtcclxuICAgIHRoaXMuaGlnaGxpZ2h0S2V5cyA9IFtdO1xyXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnNlbGVjdENvbXBvbmVudC5uelNlbGVjdFNlcnZpY2Uuc2VhcmNoVmFsdWU7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgaWYgKHZhbHVlICYmIGVsZW0ubGFiZWwudG9Mb3dlckNhc2UoKSEuaW5jbHVkZXModmFsdWUudG9Mb3dlckNhc2UoKSkpIHtcclxuICAgICAgLy8gbWF0Y2ggdGhlIHNlYXJjaCB2YWx1ZVxyXG4gICAgICBjb25zdCBpbmRleCA9IGVsZW0ubGFiZWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKHZhbHVlLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICB0aGlzLmhpZ2hsaWdodEtleXMgPSBbXHJcbiAgICAgICAgZWxlbS5sYWJlbC5zbGljZSgwLCBpbmRleCksXHJcbiAgICAgICAgZWxlbS5sYWJlbC5zbGljZShpbmRleCwgaW5kZXggKyB2YWx1ZS5sZW5ndGgpLFxyXG4gICAgICAgIGVsZW0ubGFiZWwuc2xpY2UoaW5kZXggKyB2YWx1ZS5sZW5ndGgsIGVsZW0ubGFiZWwubGVuZ3RoKVxyXG4gICAgICBdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaGlnaGxpZ2h0S2V5cztcclxuICB9XHJcbn1cclxuIl19