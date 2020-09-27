/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ViewEncapsulation, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { CmacsSelectComponent } from '../cmacs-select/cmacs-select.component';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { NzFilterOptionPipe } from 'ng-zorro-antd';
export class CmacsUserDropdownComponent {
    /**
     * @param {?} sanitizer
     * @param {?} fb
     */
    constructor(sanitizer, fb) {
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
    onSelectedValueChange($event) {
        this.selectedValueChange.emit($event);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.listOfFilteredOption = [...this.listOfOption];
        this.operateData();
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
        /** @type {?} */
        const listOfFilteredOption = new NzFilterOptionPipe().transform(this.selectComponent.nzSelectService.listOfNzOptionComponent, this.selectComponent.nzSelectService.searchValue, this.selectComponent.nzSelectService.filterOption, this.selectComponent.nzSelectService.serverSearch);
        this.listOfFilteredOption = listOfFilteredOption;
        this.getFirstElemByDivider();
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
                template: "<cmacs-select [showCmacsSearch]=\"true\"\r\n              allowClear\r\n              [maxTagCount]=\"maxTagCount\"\r\n              style=\"width: inherit !important\"\r\n              [mode]=\"mode\"\r\n              [showSelectAll]=\"false\"\r\n              [userDropdown]=\"true\"\r\n              [notFoundContentCustom]=\"notFoundContent\"\r\n              [placeHolder]=\"placeHolder\"\r\n              (cmacsOnSearch)=\"onsearch($event)\"\r\n              [dropdownRender]=\"render\"\r\n              (ngModelChange)=\"onSelectedValueChange($event)\"\r\n              [(ngModel)]=\"selectedValue\">\r\n  <ng-container *ngFor=\"let option of operatedData; index as i\">\r\n    <ng-container *ngFor=\"let elem of option.children; index as j\">\r\n      <cmacs-option [label]=\"elem.label\" [value]=\"elem.value\" customContent>\r\n        <div class=\"cmacs-user-dropdown-option-wrapper\"\r\n             [class.cmacs-user-dropdown-last-elem]=\"j === option.children.length - 1\"\r\n             [class.cmacs-user-dropdown-divider-first-option]=\"firstElemByDivider[option.divider] && firstElemByDivider[option.divider].length &&\r\n            firstElemByDivider[option.divider][0].value === elem.value\">\r\n          <div *ngIf=\"firstElemByDivider[option.divider] && firstElemByDivider[option.divider].length &&\r\n            firstElemByDivider[option.divider][0].value === elem.value\" class=\"cmacs-user-dropdown-divider\">\r\n            <nz-divider></nz-divider>\r\n            {{option.divider}} <span style=\"color: #97a0ae\">({{firstElemByDivider[option.divider].length}})</span>\r\n          </div>\r\n\r\n          <div class=\"cmacs-user-dropdown-info-wrapper\" [class.cmacs-user-dropdown-hide-picture]=\"elem.hidePicture\">\r\n\r\n            <div class=\"cmacs-user-dropdown-person-picture\"\r\n                 [class.cmacs-user-dropdown-no-picture]=\"elem.hidePicture\"\r\n                 *ngIf=\"elem.role === 'user'\"\r\n                 [style.background-image]=\"elem.picture ? getBackgroundImage(elem.picture): 'none'\">\r\n              <span class=\"cmacs-user-dropdown-initials\" *ngIf=\"!elem.picture\">{{getInitials(elem.label)}}</span>\r\n            </div>\r\n\r\n            <div class=\"cmacs-user-dropdown-person-picture\"\r\n                 [class.cmacs-guest-no-picture]=\"!elem.picture\"\r\n                 [class.cmacs-user-dropdown-no-picture]=\"elem.hidePicture\"\r\n                 *ngIf=\"elem.role === 'guest'\"\r\n                 [style.background-image]=\"elem.picture ? getBackgroundImage(elem.picture): 'none'\">\r\n              <i class=\"iconCreation-User\" *ngIf=\"!elem.picture\"></i>\r\n            </div>\r\n\r\n            <div class=\"cmacs-user-dropdown-person-picture\"\r\n                 [class.cmacs-team-no-picture]=\"!elem.picture\"\r\n                 [class.cmacs-user-dropdown-no-picture]=\"elem.hidePicture\"\r\n                 *ngIf=\"elem.role === 'team'\"\r\n                 [style.background-image]=\"elem.picture ? getBackgroundImage(elem.picture): 'none'\">\r\n              <i class=\"iconCreation-Team\" *ngIf=\"!elem.picture\"></i>\r\n            </div>\r\n\r\n            <div class=\"cmacs-user-dropdown-title\" [class.cmacs-user-dropdown-team-title]=\"elem.role === 'team'\">\r\n              <ng-container *ngIf=\"highlightValue(elem).length === 3\">\r\n                <span>\r\n                  {{highlightKeys[0]}}<span style=\"color: #2a7cff\">{{highlightKeys[1]}}</span>{{highlightKeys[2]}}\r\n                </span>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"!highlightValue(elem).length\">\r\n                {{elem.label}}\r\n              </ng-container>\r\n            </div>\r\n            <div *ngIf=\"elem.role === 'user' || elem.role === 'guest'\" class=\"cmacs-user-dropdown-subtitle\">{{elem.charge}}</div>\r\n          </div>\r\n        </div>\r\n      </cmacs-option>\r\n    </ng-container>\r\n  </ng-container>\r\n</cmacs-select>\r\n\r\n<ng-template #render>\r\n  <div class=\"cmacs-user-dropdown-invite-guest\"\r\n       (click)=\"addGuestUser()\">\r\n    <i style=\"font-size: 17px; position: relative; top: 3px; margin-right: 6px;\" class=\"iconUISmall-Message\"></i>\r\n    <span>{{inviteGuestLabel}}</span>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #notFoundContent>\r\n  <div *ngIf=\"showEmailError\" class=\"cmacs-user-dropdown-error\">{{emailErrorLabel}}</div>\r\n</ng-template>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                styles: [".cmacs-user-dropdown-person-picture{text-align:center;padding-top:2px;border-radius:3px;width:34px;height:34px;background-color:#a100cd;color:#fff;background-repeat:no-repeat;background-position:center center;background-size:contain}.cmacs-user-dropdown-divider{font-family:Roboto;font-size:13px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.23;letter-spacing:normal;color:#3b3f46;padding:7px 14px 8px;background-color:#fff!important}.cmacs-user-dropdown-divider:hover{background-color:#fff!important}.cmacs-user-dropdown-divider nz-divider:first-child{-webkit-transform:scaleX(1.5);transform:scaleX(1.5);position:relative;top:-7px}.cmacs-user-dropdown-initials{position:relative;top:5px;font-size:14px}.cmacs-user-dropdown-title{position:absolute;top:0;left:45px;font-family:Roboto-Regular;font-size:12px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;color:#656c79;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:calc(100% - 75px)}.cmacs-user-dropdown-subtitle{position:absolute;top:16px;left:45px;font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;color:#97a0ae;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:calc(100% - 75px)}.cmacs-team-no-picture{border-radius:3px;border:1.1px solid #dee0e5;background-color:#fff;color:#656c79;font-size:16px;padding:5px 0}.cmacs-user-dropdown-team-title{top:7px}.cmacs-guest-no-picture{border-radius:3px;background-color:#00cda1;font-size:16px;padding:6px 0}.cmacs-user-dropdown-error{color:#f6503c;font-size:10px;font-weight:400;font-stretch:normal;font-style:normal;line-height:2;letter-spacing:normal;padding:5px 0;position:relative;left:12px}.ant-select-dropdown.cmacs-select-user-dropdown.ant-select-dropdown--multiple .cmacs-user-dropdown-error{left:12px}.cmacs-select-user-dropdown .ant-select-dropdown-menu-item{padding:0!important}.cmacs-user-dropdown-option-wrapper{padding:7px 0}.cmacs-user-dropdown-info-wrapper{position:relative;margin:0 14px}.ant-select-dropdown.cmacs-select-user-dropdown.ant-select-dropdown--multiple .cmacs-user-dropdown-info-wrapper{margin:0 14px 0 42px}.cmacs-user-dropdown-divider-first-option{padding-top:0}.cmacs-user-dropdown-divider-first-option .cmacs-user-dropdown-info-wrapper{margin-top:7px!important}.cmacs-user-dropdown-last-elem{padding-bottom:14px}.cmacs-user-dropdown-invite-guest{height:34px;box-shadow:0 -2px 5px 0 rgba(59,63,70,.1);background-color:#fff;color:#2a7cff;padding:6px 11px;font-size:12px;cursor:pointer}.cmacs-user-dropdown-invite-guest:hover{background-color:#f2f7ff}.cmacs-user-dropdown-no-picture{opacity:0}.cmacs-user-dropdown-hide-picture .cmacs-user-dropdown-subtitle,.cmacs-user-dropdown-hide-picture .cmacs-user-dropdown-title{left:0}"]
            }] }
];
/** @nocollapse */
CmacsUserDropdownComponent.ctorParameters = () => [
    { type: DomSanitizer },
    { type: FormBuilder }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdXNlci1kcm9wZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXVzZXItZHJvcGRvd24vY21hY3MtdXNlci1kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULGlCQUFpQixFQUNqQixLQUFLLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixZQUFZLEVBRWIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDOUUsT0FBTyxFQUFhLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBV25ELE1BQU0sT0FBTywwQkFBMEI7Ozs7O0lBdUJyQyxZQUFvQixTQUF1QixFQUFVLEVBQWU7UUFBaEQsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUFVLE9BQUUsR0FBRixFQUFFLENBQWE7UUFyQjNELFNBQUksR0FBVyxTQUFTLENBQUM7UUFDekIsb0JBQWUsR0FBVyxxQ0FBcUMsQ0FBQztRQUNoRSxxQkFBZ0IsR0FBVywwQkFBMEIsQ0FBQztRQUN0RCxnQkFBVyxHQUFXLG1CQUFtQixDQUFDO1FBQzFDLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBRWxCLHdCQUFtQixHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2pFLDBCQUFxQixHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBRTdFLGlCQUFZLEdBQVcsRUFBRSxD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OztJQUU3RSxrREFBMEI7O0lBQzFCLG9EQUF1Qjs7SUFDdkIscURBQXVFOztJQUN2RSwwREFBaUM7O0lBQ2pDLGtEQUF5Qjs7SUFDekIsa0RBQXlCOztJQUN6Qix3REFBNkI7O0lBQzdCLCtDQUFxQjs7SUFDckIsbURBQW1COzs7OztJQUVQLCtDQUErQjs7Ozs7SUFBRSx3Q0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxuICBJbnB1dCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBPbkluaXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgQ21hY3NTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuLi9jbWFjcy1zZWxlY3QvY21hY3Mtc2VsZWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBOekZpbHRlck9wdGlvblBpcGUgfSBmcm9tICduZy16b3Jyby1hbnRkJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtdXNlci1kcm9wZG93bicsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1VzZXJEcm9wZG93bicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXVzZXItZHJvcGRvd24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtdXNlci1kcm9wZG93bi5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzVXNlckRyb3Bkb3duQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG5cclxuICBASW5wdXQoKSBtb2RlOiBzdHJpbmcgPSAnZGVmYXVsdCc7IFxyXG4gIEBJbnB1dCgpIGVtYWlsRXJyb3JMYWJlbDogc3RyaW5nID0gJ0VtYWlsIG11c3QgYmUgYSB2YWxpZCBFbWFpbCBBZGRyZXNzJzsgXHJcbiAgQElucHV0KCkgaW52aXRlR3Vlc3RMYWJlbDogc3RyaW5nID0gJ0ludml0ZSBhIGd1ZXN0IHZpYSBlbWFpbCc7IFxyXG4gIEBJbnB1dCgpIHBsYWNlSG9sZGVyOiBzdHJpbmcgPSAnQWRkIFVzZXJzIC8gVGVhbXMnOyBcclxuICBASW5wdXQoKSBzZWxlY3RlZFZhbHVlID0gbnVsbDtcclxuICBASW5wdXQoKSBsaXN0T2ZPcHRpb24gPSBbXTtcclxuICBASW5wdXQoKSBtYXhUYWdDb3VudCA9IG51bGw7XHJcblxyXG4gIEBPdXRwdXQoKSBzZWxlY3RlZFZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbkFkZEd1ZXN0VXNlckJ5RW1haWw6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIF9zZWFyY2hWYWx1ZTogc3RyaW5nID0gJyc7XHJcbiAgc2hvd0VtYWlsRXJyb3IgPSBmYWxzZTtcclxuICBAVmlld0NoaWxkKENtYWNzU2VsZWN0Q29tcG9uZW50KSBzZWxlY3RDb21wb25lbnQ6IENtYWNzU2VsZWN0Q29tcG9uZW50OyBcclxuICBsaXN0T2ZGaWx0ZXJlZE9wdGlvbjogYW55W10gPSBbXTtcclxuICBsaXN0RGl2aWRlcnM6IGFueVtdID0gW107XHJcbiAgb3BlcmF0ZWREYXRhOiBhbnlbXSA9IFtdO1xyXG4gIGZpcnN0RWxlbUJ5RGl2aWRlcjogYW55ID0ge307XHJcbiAgZW1haWxGb3JtOiBGb3JtR3JvdXA7XHJcbiAgaGlnaGxpZ2h0S2V5cyA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyLCBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcikge1xyXG4gICAgdGhpcy5lbWFpbEZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgZW1haWw6IFt0aGlzLl9zZWFyY2hWYWx1ZSwgW1ZhbGlkYXRvcnMuZW1haWxdXVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvblNlbGVjdGVkVmFsdWVDaGFuZ2UoJGV2ZW50KSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkVmFsdWVDaGFuZ2UuZW1pdCgkZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmxpc3RPZkZpbHRlcmVkT3B0aW9uID0gWy4uLnRoaXMubGlzdE9mT3B0aW9uXTtcclxuICAgIHRoaXMub3BlcmF0ZURhdGEoKTtcclxuICB9XHJcblxyXG4gIGdldCBzZWFyY2hWYWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlYXJjaFZhbHVlO1xyXG4gIH1cclxuXHJcbiAgb3BlcmF0ZURhdGEoKSB7XHJcbiAgICB0aGlzLm9wZXJhdGVkRGF0YSA9IFtdO1xyXG4gICAgdGhpcy5saXN0RGl2aWRlcnMgPSBbLi4uQXJyYXkuZnJvbShuZXcgU2V0KHRoaXMubGlzdE9mT3B0aW9uLm1hcChlID0+IGUuZGl2aWRlcikpKV07XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdERpdmlkZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGRpdmlkZXIgPSB0aGlzLmxpc3REaXZpZGVyc1tpXTtcclxuICAgICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmxpc3RPZk9wdGlvbi5maWx0ZXIoZSA9PiBlLmRpdmlkZXIgPT09IGRpdmlkZXIpO1xyXG4gICAgICBjb25zdCBlbGVtID0geyBkaXZpZGVyLCBjaGlsZHJlbiB9O1xyXG4gICAgICB0aGlzLm9wZXJhdGVkRGF0YS5wdXNoKGVsZW0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vcGVyYXRlZERhdGEgPSBbLi4udGhpcy5vcGVyYXRlZERhdGFdO1xyXG4gICAgdGhpcy5nZXRGaXJzdEVsZW1CeURpdmlkZXIoKTtcclxuICB9XHJcblxyXG4gIG9uc2VhcmNoKCRldmVudCkge1xyXG4gICAgdGhpcy5zaG93RW1haWxFcnJvciA9IGZhbHNlO1xyXG4gICAgdGhpcy5fc2VhcmNoVmFsdWUgPSAkZXZlbnQ7XHJcbiAgICBjb25zdCBsaXN0T2ZGaWx0ZXJlZE9wdGlvbiA9IG5ldyBOekZpbHRlck9wdGlvblBpcGUoKS50cmFuc2Zvcm0oXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50Lm56U2VsZWN0U2VydmljZS5saXN0T2ZOek9wdGlvbkNvbXBvbmVudCxcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQubnpTZWxlY3RTZXJ2aWNlLnNlYXJjaFZhbHVlLFxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudC5uelNlbGVjdFNlcnZpY2UuZmlsdGVyT3B0aW9uLFxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudC5uelNlbGVjdFNlcnZpY2Uuc2VydmVyU2VhcmNoXHJcbiAgICApO1xyXG4gICAgdGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvbiA9IGxpc3RPZkZpbHRlcmVkT3B0aW9uO1xyXG4gICAgdGhpcy5nZXRGaXJzdEVsZW1CeURpdmlkZXIoKTtcclxuICB9XHJcblxyXG4gIGdldEZpcnN0RWxlbUJ5RGl2aWRlcigpIHtcclxuICAgIGNvbnN0IGZpcnN0RWxlbUJ5RGl2aWRlciA9IHt9O1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RPZkZpbHRlcmVkT3B0aW9uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGVsZW0gPSB0aGlzLmxpc3RPZkZpbHRlcmVkT3B0aW9uW2ldO1xyXG4gICAgICBjb25zdCBlbGVtV2l0aERpdmlkZXIgPSB0aGlzLmxpc3RPZk9wdGlvbi5maW5kKGUgPT4gKGUudmFsdWUgPT09IGVsZW0ubnpWYWx1ZSB8fCBlLnZhbHVlID09PSBlbGVtLnZhbHVlKSk7XHJcbiAgICAgIGlmIChmaXJzdEVsZW1CeURpdmlkZXJbZWxlbVdpdGhEaXZpZGVyLmRpdmlkZXJdID09PSBudWxsIHx8IGZpcnN0RWxlbUJ5RGl2aWRlcltlbGVtV2l0aERpdmlkZXIuZGl2aWRlcl0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGZpcnN0RWxlbUJ5RGl2aWRlcltlbGVtV2l0aERpdmlkZXIuZGl2aWRlcl0gPSBbXTtcclxuICAgICAgICBmaXJzdEVsZW1CeURpdmlkZXJbZWxlbVdpdGhEaXZpZGVyLmRpdmlkZXJdLnB1c2goZWxlbVdpdGhEaXZpZGVyKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmaXJzdEVsZW1CeURpdmlkZXJbZWxlbVdpdGhEaXZpZGVyLmRpdmlkZXJdLnB1c2goZWxlbVdpdGhEaXZpZGVyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5maXJzdEVsZW1CeURpdmlkZXIgPSBmaXJzdEVsZW1CeURpdmlkZXI7XHJcbiAgfVxyXG5cclxuICBnZXRJbml0aWFscyhuYW1lOiBhbnkpIHtcclxuICAgIGxldCBpbml0aWFscyA9IG5hbWUubWF0Y2goL1xcYlxcdy9nKSB8fCBbXTtcclxuICAgIGluaXRpYWxzID0gKChpbml0aWFscy5zaGlmdCgpIHx8ICcnKSArIChpbml0aWFscy5wb3AoKSB8fCAnJykpLnRvVXBwZXJDYXNlKCk7XHJcbiAgICByZXR1cm4gaW5pdGlhbHM7XHJcbiAgfVxyXG5cclxuICBnZXRCYWNrZ3JvdW5kSW1hZ2UocGljdHVyZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSgndXJsKFxcJycgKyBwaWN0dXJlICsgJ1xcJyknKTtcclxuICB9XHJcblxyXG4gIGFkZEd1ZXN0VXNlcigpIHtcclxuICAgIGlmICh0aGlzLl9zZWFyY2hWYWx1ZSEhKSB7XHJcbiAgICAgIHRoaXMuZW1haWxGb3JtLmdldCgnZW1haWwnKS5zZXRWYWx1ZSh0aGlzLl9zZWFyY2hWYWx1ZSk7XHJcbiAgICAgIGlmICh0aGlzLmVtYWlsRm9ybS52YWxpZCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0VtYWlsRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9uQWRkR3Vlc3RVc2VyQnlFbWFpbC5lbWl0KHRydWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2hvd0VtYWlsRXJyb3IgPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkT3B0aW9uKG9wdGlvbjogYW55KSB7XHJcbiAgICBjb25zdCBjaGVja1VzZXIgPSB0aGlzLmxpc3RPZk9wdGlvbi5maW5kKGUgPT4gZS52YWx1ZSA9PT0gb3B0aW9uLnZhbHVlKTtcclxuICAgIGlmICghY2hlY2tVc2VyKSB7XHJcbiAgICAgIHRoaXMubGlzdE9mT3B0aW9uID0gWy4uLnRoaXMubGlzdE9mT3B0aW9uLCBvcHRpb25dO1xyXG4gICAgICB0aGlzLmxpc3RPZkZpbHRlcmVkT3B0aW9uID0gWy4uLnRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb24sIG9wdGlvbl07XHJcbiAgICAgIHRoaXMub3BlcmF0ZURhdGEoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhpZ2hsaWdodFZhbHVlKGVsZW0gOiBhbnkpIHtcclxuICAgIHRoaXMuaGlnaGxpZ2h0S2V5cyA9IFtdO1xyXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnNlbGVjdENvbXBvbmVudC5uelNlbGVjdFNlcnZpY2Uuc2VhcmNoVmFsdWU7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgaWYgKHZhbHVlICYmIGVsZW0ubGFiZWwudG9Mb3dlckNhc2UoKSEuaW5jbHVkZXModmFsdWUudG9Mb3dlckNhc2UoKSkpIHtcclxuICAgICAgLy8gbWF0Y2ggdGhlIHNlYXJjaCB2YWx1ZVxyXG4gICAgICBjb25zdCBpbmRleCA9IGVsZW0ubGFiZWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKHZhbHVlLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICB0aGlzLmhpZ2hsaWdodEtleXMgPSBbXHJcbiAgICAgICAgZWxlbS5sYWJlbC5zbGljZSgwLCBpbmRleCksXHJcbiAgICAgICAgZWxlbS5sYWJlbC5zbGljZShpbmRleCwgaW5kZXggKyB2YWx1ZS5sZW5ndGgpLFxyXG4gICAgICAgIGVsZW0ubGFiZWwuc2xpY2UoaW5kZXggKyB2YWx1ZS5sZW5ndGgsIGVsZW0ubGFiZWwubGVuZ3RoKVxyXG4gICAgICBdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaGlnaGxpZ2h0S2V5cztcclxuICB9XHJcbn1cclxuIl19