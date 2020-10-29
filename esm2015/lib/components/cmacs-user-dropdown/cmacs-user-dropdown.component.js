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
     * @param {?} option
     * @return {?}
     */
    removeOption(option) {
        /** @type {?} */
        const selectedValues = this.selectComponent.nzSelectService.listOfSelectedValue;
        /** @type {?} */
        const selectedValuesFiltered = selectedValues.filter((/**
         * @param {?} elem
         * @return {?}
         */
        elem => elem.value !== option.value));
        this.selectComponent.nzSelectService.updateListOfSelectedValue(selectedValuesFiltered, true);
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
                template: "<cmacs-select [showCmacsSearch]=\"true\"\r\n              allowClear\r\n              [maxTagCount]=\"maxTagCount\"\r\n              [mode]=\"mode\"\r\n              [showSelectAll]=\"false\"\r\n              [showArrow]=\"false\"\r\n              [userDropdown]=\"true\"\r\n              [notFoundContentCustom]=\"notFoundContent\"\r\n              [placeHolder]=\"placeHolder\"\r\n              (cmacsOnSearch)=\"onsearch($event)\"\r\n              [serverSearch]=\"true\"\r\n              [dropdownRender]=\"_inviteGuest ? render : null\"\r\n              (ngModelChange)=\"onSelectedValueChange($event)\"\r\n              [(ngModel)]=\"selectedValue\">\r\n  <ng-container *ngFor=\"let option of operatedData; index as i\">\r\n    <ng-container *ngFor=\"let elem of option.children; index as j\">\r\n      <cmacs-option [label]=\"elem.label\" [value]=\"elem.value\" [extendedData]=\"elem\" customContent>\r\n        <div class=\"cmacs-user-dropdown-option-wrapper\"\r\n             [class.cmacs-user-dropdown-last-elem]=\"j === option.children.length - 1\"\r\n             [class.cmacs-user-dropdown-divider-first-option]=\"firstElemByDivider[option.divider] && firstElemByDivider[option.divider].length &&\r\n            firstElemByDivider[option.divider][0].value === elem.value\">\r\n          <div *ngIf=\"firstElemByDivider[option.divider] && firstElemByDivider[option.divider].length &&\r\n            firstElemByDivider[option.divider][0].value === elem.value\" class=\"cmacs-user-dropdown-divider\">\r\n            <nz-divider></nz-divider>\r\n            {{option.divider}} <span style=\"color: #97a0ae\">({{firstElemByDivider[option.divider].length}})</span>\r\n          </div>\r\n\r\n          <ng-container *ngIf=\"elem.template; else defaultTPL\">\r\n            <ng-container [ngTemplateOutlet]=\"elem.template.ref\"\r\n                          [ngTemplateOutletContext]=\"elem.template.context\">\r\n            </ng-container>\r\n          </ng-container>\r\n\r\n          <ng-template #defaultTPL>\r\n            <div class=\"cmacs-user-dropdown-info-wrapper\" [class.cmacs-user-dropdown-hide-picture]=\"elem.hidePicture\">\r\n\r\n              <div class=\"cmacs-user-dropdown-person-picture\"\r\n                   [class.cmacs-user-dropdown-no-picture]=\"elem.hidePicture\"\r\n                   *ngIf=\"elem.role === 'user'\"\r\n                   [style.background-image]=\"elem.picture ? getBackgroundImage(elem.picture): 'none'\">\r\n                <span class=\"cmacs-user-dropdown-initials\" *ngIf=\"!elem.picture\">{{getInitials(elem.label)}}</span>\r\n              </div>\r\n\r\n              <div class=\"cmacs-user-dropdown-person-picture\"\r\n                   [class.cmacs-guest-no-picture]=\"!elem.picture\"\r\n                   [class.cmacs-user-dropdown-no-picture]=\"elem.hidePicture\"\r\n                   *ngIf=\"elem.role === 'guest'\"\r\n                   [style.background-image]=\"elem.picture ? getBackgroundImage(elem.picture): 'none'\">\r\n                <i class=\"iconCreation-User\" *ngIf=\"!elem.picture\"></i>\r\n              </div>\r\n\r\n              <div class=\"cmacs-user-dropdown-person-picture\"\r\n                   [class.cmacs-team-no-picture]=\"!elem.picture\"\r\n                   [class.cmacs-user-dropdown-no-picture]=\"elem.hidePicture\"\r\n                   *ngIf=\"elem.role === 'team'\"\r\n                   [style.background-image]=\"elem.picture ? getBackgroundImage(elem.picture): 'none'\">\r\n                <i class=\"iconCreation-Team\" *ngIf=\"!elem.picture\"></i>\r\n              </div>\r\n\r\n              <div class=\"cmacs-user-dropdown-title\" [class.cmacs-user-dropdown-team-title]=\"elem.role === 'team'\">\r\n                <ng-container *ngIf=\"highlightValue(elem).length === 3\">\r\n                  <span>\r\n                    {{highlightKeys[0]}}<span style=\"color: #2a7cff\">{{highlightKeys[1]}}</span>{{highlightKeys[2]}}\r\n                  </span>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"!highlightValue(elem).length\">\r\n                  {{elem.label}}\r\n                </ng-container>\r\n              </div>\r\n              <div *ngIf=\"elem.role === 'user' || elem.role === 'guest'\" class=\"cmacs-user-dropdown-subtitle\">{{elem.charge}}</div>\r\n            </div>\r\n          </ng-template>\r\n        </div>\r\n      </cmacs-option>\r\n    </ng-container>\r\n  </ng-container>\r\n  <cmacs-option *ngIf=\"_isLoading\" disabled customContent>\r\n    <div class=\"cmacs-user-dropdown-loading-wrapper\">\r\n      <i nz-icon type=\"loading\" class=\"cmacs-user-dropdown-loading-icon\"></i> {{loadingLabel}}\r\n    </div>  \r\n  </cmacs-option>\r\n</cmacs-select>\r\n\r\n<ng-template #render>\r\n  <div class=\"cmacs-user-dropdown-invite-guest\"\r\n       (click)=\"addGuestUser()\">\r\n    <i style=\"font-size: 17px; position: relative; top: 3px; margin-right: 6px;\" class=\"iconUISmall-Message\"></i>\r\n    <span>{{inviteGuestLabel}}</span>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #notFoundContent>\r\n  <div *ngIf=\"showEmailError\" class=\"cmacs-user-dropdown-error\">{{emailErrorLabel}}</div>\r\n</ng-template>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdXNlci1kcm9wZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXVzZXItZHJvcGRvd24vY21hY3MtdXNlci1kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sWUFBWSxFQUVaLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDOUUsT0FBTyxFQUFhLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFZekQsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7O0lBK0NyQyxZQUNVLFNBQXVCLEVBQ3ZCLEdBQXNCLEVBQ3RCLEVBQWU7UUFGZixjQUFTLEdBQVQsU0FBUyxDQUFjO1FBQ3ZCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLE9BQUUsR0FBRixFQUFFLENBQWE7UUFoRGhCLFNBQUksR0FBVyxTQUFTLENBQUM7UUFDekIsb0JBQWUsR0FBVyxxQ0FBcUMsQ0FBQztRQUNoRSxxQkFBZ0IsR0FBVywwQkFBMEIsQ0FBQztRQUN0RCxpQkFBWSxHQUFXLGlCQUFpQixDQUFDO1FBQ3pDLGdCQUFXLEdBQVcsbUJBQW1CLENBQUM7UUFDMUMsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbEIsd0JBQW1CLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDakUs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LFxyXG4gIENvbXBvbmVudCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxuICBJbnB1dCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBPbkluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgQ21hY3NTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuLi9jbWFjcy1zZWxlY3QvY21hY3Mtc2VsZWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBOekZpbHRlck9wdGlvblBpcGUgfSBmcm9tICduZy16b3Jyby1hbnRkJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtdXNlci1kcm9wZG93bicsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1VzZXJEcm9wZG93bicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXVzZXItZHJvcGRvd24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtdXNlci1kcm9wZG93bi5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzVXNlckRyb3Bkb3duQ29tcG9uZW50e1xyXG5cclxuICBASW5wdXQoKSBtb2RlOiBzdHJpbmcgPSAnZGVmYXVsdCc7IFxyXG4gIEBJbnB1dCgpIGVtYWlsRXJyb3JMYWJlbDogc3RyaW5nID0gJ0VtYWlsIG11c3QgYmUgYSB2YWxpZCBFbWFpbCBBZGRyZXNzJzsgXHJcbiAgQElucHV0KCkgaW52aXRlR3Vlc3RMYWJlbDogc3RyaW5nID0gJ0ludml0ZSBhIGd1ZXN0IHZpYSBlbWFpbCc7IFxyXG4gIEBJbnB1dCgpIGxvYWRpbmdMYWJlbDogc3RyaW5nID0gJ0xvYWRpbmcgZGF0YS4uLic7IFxyXG4gIEBJbnB1dCgpIHBsYWNlSG9sZGVyOiBzdHJpbmcgPSAnQWRkIFVzZXJzIC8gVGVhbXMnOyBcclxuICBASW5wdXQoKSBzZWxlY3RlZFZhbHVlID0gbnVsbDtcclxuICBASW5wdXQoKSBtYXhUYWdDb3VudCA9IG51bGw7XHJcbiAgQE91dHB1dCgpIHNlbGVjdGVkVmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uQWRkR3Vlc3RVc2VyQnlFbWFpbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgY21hY3NPblNlYXJjaDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBcclxuICBfaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgX2ludml0ZUd1ZXN0ID0gdHJ1ZTtcclxuICBfc2VhcmNoVmFsdWU6IHN0cmluZyA9ICcnO1xyXG4gIF9saXN0T2ZPcHRpb246IGFueVtdID0gW107IFxyXG4gIHNob3dFbWFpbEVycm9yID0gZmFsc2U7XHJcbiAgQFZpZXdDaGlsZChDbWFjc1NlbGVjdENvbXBvbmVudCkgc2VsZWN0Q29tcG9uZW50OiBDbWFjc1NlbGVjdENvbXBvbmVudDsgXHJcbiAgbGlzdE9mRmlsdGVyZWRPcHRpb246IGFueVtdID0gW107XHJcbiAgbGlzdERpdmlkZXJzOiBhbnlbXSA9IFtdO1xyXG4gIG9wZXJhdGVkRGF0YTogYW55W10gPSBbXTtcclxuICBmaXJzdEVsZW1CeURpdmlkZXI6IGFueSA9IHt9O1xyXG4gIGVtYWlsRm9ybTogRm9ybUdyb3VwO1xyXG4gIGhpZ2hsaWdodEtleXMgPSBbXTtcclxuXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpXHJcbiAgc2V0IGlzTG9hZGluZyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5faXNMb2FkaW5nID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKClcclxuICBzZXQgaW52aXRlR3Vlc3QodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2ludml0ZUd1ZXN0ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBsaXN0T2ZPcHRpb24odmFsdWU6IGFueVtdKSB7XHJcbiAgICB0aGlzLl9saXN0T2ZPcHRpb24gPSBbLi4udmFsdWVdO1xyXG4gICAgdGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvbiA9IFsuLi52YWx1ZV07XHJcbiAgICB0aGlzLm9wZXJhdGVEYXRhKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgbGlzdE9mT3B0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xpc3RPZk9wdGlvbjtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcixcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyKSB7XHJcbiAgICB0aGlzLmVtYWlsRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICBlbWFpbDogW3RoaXMuX3NlYXJjaFZhbHVlLCBbVmFsaWRhdG9ycy5lbWFpbF1dXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uU2VsZWN0ZWRWYWx1ZUNoYW5nZSgkZXZlbnQpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZUNoYW5nZS5lbWl0KCRldmVudCk7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VhcmNoVmFsdWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWFyY2hWYWx1ZTtcclxuICB9XHJcblxyXG4gIG9wZXJhdGVEYXRhKCkge1xyXG4gICAgdGhpcy5vcGVyYXRlZERhdGEgPSBbXTtcclxuICAgIHRoaXMubGlzdERpdmlkZXJzID0gWy4uLkFycmF5LmZyb20obmV3IFNldCh0aGlzLmxpc3RPZk9wdGlvbi5tYXAoZSA9PiBlLmRpdmlkZXIpKSldO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3REaXZpZGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBkaXZpZGVyID0gdGhpcy5saXN0RGl2aWRlcnNbaV07XHJcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5saXN0T2ZPcHRpb24uZmlsdGVyKGUgPT4gZS5kaXZpZGVyID09PSBkaXZpZGVyKTtcclxuICAgICAgY29uc3QgZWxlbSA9IHsgZGl2aWRlciwgY2hpbGRyZW4gfTtcclxuICAgICAgdGhpcy5vcGVyYXRlZERhdGEucHVzaChlbGVtKTtcclxuICAgIH1cclxuICAgIHRoaXMub3BlcmF0ZWREYXRhID0gWy4uLnRoaXMub3BlcmF0ZWREYXRhXTtcclxuICAgIHRoaXMuZ2V0Rmlyc3RFbGVtQnlEaXZpZGVyKCk7XHJcbiAgfVxyXG5cclxuICBvbnNlYXJjaCgkZXZlbnQpIHtcclxuICAgIHRoaXMuc2hvd0VtYWlsRXJyb3IgPSBmYWxzZTtcclxuICAgIHRoaXMuX3NlYXJjaFZhbHVlID0gJGV2ZW50O1xyXG4gICAgLypjb25zdCBsaXN0T2ZGaWx0ZXJlZE9wdGlvbiA9IG5ldyBOekZpbHRlck9wdGlvblBpcGUoKS50cmFuc2Zvcm0oXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50Lm56U2VsZWN0U2VydmljZS5saXN0T2ZOek9wdGlvbkNvbXBvbmVudCxcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQubnpTZWxlY3RTZXJ2aWNlLnNlYXJjaFZhbHVlLFxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudC5uelNlbGVjdFNlcnZpY2UuZmlsdGVyT3B0aW9uLFxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudC5uelNlbGVjdFNlcnZpY2Uuc2VydmVyU2VhcmNoXHJcbiAgICApO1xyXG4gICAgdGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvbiA9IGxpc3RPZkZpbHRlcmVkT3B0aW9uO1xyXG4gICAgdGhpcy5nZXRGaXJzdEVsZW1CeURpdmlkZXIoKTtcclxuICAgIGNvbnNvbGUubG9nKCRldmVudCwgbGlzdE9mRmlsdGVyZWRPcHRpb24pOyovXHJcbiAgICB0aGlzLmNtYWNzT25TZWFyY2guZW1pdCgkZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Rmlyc3RFbGVtQnlEaXZpZGVyKCkge1xyXG4gICAgY29uc3QgZmlyc3RFbGVtQnlEaXZpZGVyID0ge307XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb24ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgZWxlbSA9IHRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb25baV07XHJcbiAgICAgIGNvbnN0IGVsZW1XaXRoRGl2aWRlciA9IHRoaXMubGlzdE9mT3B0aW9uLmZpbmQoZSA9PiAoZS52YWx1ZSA9PT0gZWxlbS5uelZhbHVlIHx8IGUudmFsdWUgPT09IGVsZW0udmFsdWUpKTtcclxuICAgICAgaWYgKGZpcnN0RWxlbUJ5RGl2aWRlcltlbGVtV2l0aERpdmlkZXIuZGl2aWRlcl0gPT09IG51bGwgfHwgZmlyc3RFbGVtQnlEaXZpZGVyW2VsZW1XaXRoRGl2aWRlci5kaXZpZGVyXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZmlyc3RFbGVtQnlEaXZpZGVyW2VsZW1XaXRoRGl2aWRlci5kaXZpZGVyXSA9IFtdO1xyXG4gICAgICAgIGZpcnN0RWxlbUJ5RGl2aWRlcltlbGVtV2l0aERpdmlkZXIuZGl2aWRlcl0ucHVzaChlbGVtV2l0aERpdmlkZXIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZpcnN0RWxlbUJ5RGl2aWRlcltlbGVtV2l0aERpdmlkZXIuZGl2aWRlcl0ucHVzaChlbGVtV2l0aERpdmlkZXIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmZpcnN0RWxlbUJ5RGl2aWRlciA9IGZpcnN0RWxlbUJ5RGl2aWRlcjtcclxuICB9XHJcblxyXG4gIGdldEluaXRpYWxzKG5hbWU6IGFueSkge1xyXG4gICAgbGV0IGluaXRpYWxzID0gbmFtZS5tYXRjaCgvXFxiXFx3L2cpIHx8IFtdO1xyXG4gICAgaW5pdGlhbHMgPSAoKGluaXRpYWxzLnNoaWZ0KCkgfHwgJycpICsgKGluaXRpYWxzLnBvcCgpIHx8ICcnKSkudG9VcHBlckNhc2UoKTtcclxuICAgIHJldHVybiBpbml0aWFscztcclxuICB9XHJcblxyXG4gIGdldEJhY2tncm91bmRJbWFnZShwaWN0dXJlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKCd1cmwoXFwnJyArIHBpY3R1cmUgKyAnXFwnKScpO1xyXG4gIH1cclxuXHJcbiAgYWRkR3Vlc3RVc2VyKCkge1xyXG4gICAgaWYgKHRoaXMuX3NlYXJjaFZhbHVlISEpIHtcclxuICAgICAgdGhpcy5lbWFpbEZvcm0uZ2V0KCdlbWFpbCcpLnNldFZhbHVlKHRoaXMuX3NlYXJjaFZhbHVlKTtcclxuICAgICAgaWYgKHRoaXMuZW1haWxGb3JtLnZhbGlkKSB7XHJcbiAgICAgICAgdGhpcy5zaG93RW1haWxFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub25BZGRHdWVzdFVzZXJCeUVtYWlsLmVtaXQodHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zaG93RW1haWxFcnJvciA9IHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRPcHRpb24ob3B0aW9uOiBhbnkpIHtcclxuICAgIGNvbnN0IGNoZWNrVXNlciA9IHRoaXMubGlzdE9mT3B0aW9uLmZpbmQoZSA9PiBlLnZhbHVlID09PSBvcHRpb24udmFsdWUpO1xyXG4gICAgaWYgKCFjaGVja1VzZXIpIHtcclxuICAgICAgdGhpcy5saXN0T2ZPcHRpb24gPSBbLi4udGhpcy5saXN0T2ZPcHRpb24sIG9wdGlvbl07XHJcbiAgICAgIHRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb24gPSBbLi4udGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvbiwgb3B0aW9uXTtcclxuICAgICAgdGhpcy5vcGVyYXRlRGF0YSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlT3B0aW9uKG9wdGlvbjogYW55KSB7XHJcbiAgICBjb25zdCBzZWxlY3RlZFZhbHVlcyA9IHRoaXMuc2VsZWN0Q29tcG9uZW50Lm56U2VsZWN0U2VydmljZS5saXN0T2ZTZWxlY3RlZFZhbHVlO1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZXNGaWx0ZXJlZCA9IHNlbGVjdGVkVmFsdWVzLmZpbHRlcihlbGVtID0+IGVsZW0udmFsdWUgIT09IG9wdGlvbi52YWx1ZSk7XHJcbiAgICB0aGlzLnNlbGVjdENvbXBvbmVudC5uelNlbGVjdFNlcnZpY2UudXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZShzZWxlY3RlZFZhbHVlc0ZpbHRlcmVkLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIGhpZ2hsaWdodFZhbHVlKGVsZW0gOiBhbnkpIHtcclxuICAgIHRoaXMuaGlnaGxpZ2h0S2V5cyA9IFtdO1xyXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnNlbGVjdENvbXBvbmVudC5uelNlbGVjdFNlcnZpY2Uuc2VhcmNoVmFsdWU7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgaWYgKHZhbHVlICYmIGVsZW0ubGFiZWwudG9Mb3dlckNhc2UoKSEuaW5jbHVkZXModmFsdWUudG9Mb3dlckNhc2UoKSkpIHtcclxuICAgICAgLy8gbWF0Y2ggdGhlIHNlYXJjaCB2YWx1ZVxyXG4gICAgICBjb25zdCBpbmRleCA9IGVsZW0ubGFiZWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKHZhbHVlLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICB0aGlzLmhpZ2hsaWdodEtleXMgPSBbXHJcbiAgICAgICAgZWxlbS5sYWJlbC5zbGljZSgwLCBpbmRleCksXHJcbiAgICAgICAgZWxlbS5sYWJlbC5zbGljZShpbmRleCwgaW5kZXggKyB2YWx1ZS5sZW5ndGgpLFxyXG4gICAgICAgIGVsZW0ubGFiZWwuc2xpY2UoaW5kZXggKyB2YWx1ZS5sZW5ndGgsIGVsZW0ubGFiZWwubGVuZ3RoKVxyXG4gICAgICBdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaGlnaGxpZ2h0S2V5cztcclxuICB9XHJcbn1cclxuIl19