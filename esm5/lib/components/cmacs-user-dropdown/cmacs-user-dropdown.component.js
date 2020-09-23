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
    CmacsUserDropdownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-user-dropdown',
                    exportAs: 'cmacsUserDropdown',
                    template: "<cmacs-select [showCmacsSearch]=\"true\"\r\n              allowClear\r\n              [maxTagCount]=\"maxTagCount\"\r\n              style=\"width: inherit !important\"\r\n              [mode]=\"mode\"\r\n              [showSelectAll]=\"false\"\r\n              [userDropdown]=\"true\"\r\n              [notFoundContentCustom]=\"notFoundContent\"\r\n              [placeHolder]=\"placeHolder\"\r\n              (cmacsOnSearch)=\"onsearch($event)\"\r\n              [dropdownRender]=\"render\"\r\n              (ngModelChange)=\"onSelectedValueChange($event)\"\r\n              [(ngModel)]=\"selectedValue\">\r\n  <ng-container *ngFor=\"let option of operatedData; index as i\">\r\n    <ng-container *ngFor=\"let elem of option.children; index as j\">\r\n      <cmacs-option [label]=\"elem.label\" [value]=\"elem.value\" customContent>\r\n        <div *ngIf=\"firstElemByDivider[option.divider] && firstElemByDivider[option.divider].length &&\r\n            firstElemByDivider[option.divider][0].value === elem.value\" class=\"cmacs-user-dropdown-divider\">\r\n          <nz-divider></nz-divider>\r\n          {{option.divider}} <span style=\"color: #97a0ae\">({{firstElemByDivider[option.divider].length}})</span>\r\n        </div>\r\n\r\n        <div style=\"position: relative\">\r\n\r\n          <div class=\"cmacs-user-dropdown-person-picture\"\r\n                *ngIf=\"elem.role === 'user'\"\r\n                [style.background-image]=\"elem.picture ? getBackgroundImage(elem.picture): 'none'\">\r\n            <span class=\"cmacs-user-dropdown-initials\" *ngIf=\"!elem.picture\">{{getInitials(elem.label)}}</span>\r\n          </div>\r\n\r\n          <div class=\"cmacs-user-dropdown-person-picture\"\r\n                [class.cmacs-guest-no-picture]=\"!elem.picture\"\r\n                *ngIf=\"elem.role === 'guest'\"\r\n                [style.background-image]=\"elem.picture ? getBackgroundImage(elem.picture): 'none'\">\r\n            <i class=\"iconCreation-User\" *ngIf=\"!elem.picture\"></i>\r\n          </div>\r\n\r\n          <div class=\"cmacs-user-dropdown-person-picture\"\r\n                [class.cmacs-team-no-picture]=\"!elem.picture\"\r\n                *ngIf=\"elem.role === 'team'\"\r\n                [style.background-image]=\"elem.picture ? getBackgroundImage(elem.picture): 'none'\">\r\n            <i class=\"iconCreation-Team\" *ngIf=\"!elem.picture\"></i>\r\n          </div>\r\n\r\n          <div class=\"cmacs-user-dropdown-title\" [class.cmacs-user-dropdown-team-title]=\"elem.role === 'team'\">{{elem.label}}</div>\r\n          <div *ngIf=\"elem.role === 'user' || elem.role === 'guest'\" class=\"cmacs-user-dropdown-subtitle\">{{elem.charge}}</div>\r\n        </div>\r\n      </cmacs-option>\r\n    </ng-container>\r\n  </ng-container>\r\n</cmacs-select>\r\n\r\n<ng-template #render>\r\n  <div style=\"height: 34px; box-shadow: 0 -2px 5px 0 rgba(59, 63, 70, 0.1); background-color: #ffffff; color: rgb(42, 124, 255); padding: 6px 11px; font-size: 12px; cursor: pointer\"\r\n       (click)=\"addGuestUser()\">\r\n    <i style=\"font-size: 17px; position: relative; top: 3px; margin-right: 6px;\" class=\"iconUISmall-Message\"></i>\r\n    <span>{{inviteGuestLabel}}</span>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #notFoundContent>\r\n  <div *ngIf=\"showEmailError\" class=\"cmacs-user-dropdown-error\">{{emailErrorLabel}}</div>\r\n</ng-template>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    styles: [".cmacs-user-dropdown-person-picture{text-align:center;padding-top:2px;border-radius:3px;width:34px;height:34px;background-color:#a100cd;color:#fff;background-repeat:no-repeat;background-position:center center;background-size:contain}.cmacs-user-dropdown-divider{font-family:Roboto;font-size:13px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.23;letter-spacing:normal;color:#3b3f46;padding:5px 0 8px}.cmacs-user-dropdown-divider nz-divider:first-child{-webkit-transform:scaleX(1.5);transform:scaleX(1.5);position:relative;top:-12px}.cmacs-user-dropdown-initials{position:relative;top:5px;font-size:14px}.cmacs-user-dropdown-title{position:absolute;top:1px;left:45px;font-family:Roboto-Regular;font-size:12px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;color:#656c79;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:calc(100% - 75px)}.cmacs-user-dropdown-subtitle{position:absolute;top:16px;left:45px;font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;color:#97a0ae;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:calc(100% - 75px)}.cmacs-team-no-picture{border-radius:3px;border:1.1px solid #dee0e5;background-color:#fff;color:#656c79;font-size:16px;padding:5px 0}.cmacs-user-dropdown-team-title{top:8px}.cmacs-guest-no-picture{border-radius:3px;background-color:#00cda1;font-size:16px;padding:6px 0}.cmacs-user-dropdown-error{color:#f6503c;font-size:10px;font-weight:400;font-stretch:normal;font-style:normal;line-height:2;letter-spacing:normal;padding:5px 0;position:relative;left:12px}.ant-select-dropdown.cmacs-select-user-dropdown.ant-select-dropdown--multiple .cmacs-user-dropdown-error{left:-30px}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdXNlci1kcm9wZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXVzZXItZHJvcGRvd24vY21hY3MtdXNlci1kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sWUFBWSxFQUViLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzlFLE9BQU8sRUFBYSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRDtJQStCRSxvQ0FBb0IsU0FBdUIsRUFBVSxFQUFlO1FBQWhELGNBQVMsR0FBVCxTQUFTLENBQWM7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBcEIzRCxTQUFJLEdBQVcsU0FBUyxDQUFDO1FBQ3pCLG9CQUFlLEdBQVcscUNBQXFDLENBQUM7UUFDaEUscUJBQWdCLEdBQVcsMEJBQTBCLENBQUM7UUFDdEQsZ0JBQVcsR0FBVyxtQkFBbUIsQ0FBQztRQUMxQyxrQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUVsQix3QkFBbUIsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNqRSwwQkFBcUIsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUU3RSxpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUMxQixtQkFBYyxHQUFH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QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsbUJBQW1CLEVBQUUsS0FBSzs7aUJBRTNCOzs7O2dCQVhRLFlBQVk7Z0JBREQsV0FBVzs7O3VCQWU1QixLQUFLO2tDQUNMLEtBQUs7bUNBQ0wsS0FBSzs4QkFDTCxLQUFLO2dDQUNMLEtBQUs7K0JBQ0wsS0FBSzs4QkFDTCxLQUFLO3NDQUVMLE1BQU07d0NBQ04sTUFBTTtrQ0FJTixTQUFTLFNBQUMsb0JBQW9COztJQWtHakMsaUNBQUM7Q0FBQSxBQTFIRCxJQTBIQztTQWpIWSwwQkFBMEI7OztJQUVyQywwQ0FBa0M7O0lBQ2xDLHFEQUF5RTs7SUFDekUsc0RBQStEOztJQUMvRCxpREFBbUQ7O0lBQ25ELG1EQUE4Qjs7SUFDOUIsa0RBQTJCOztJQUMzQixpREFBNEI7O0lBRTVCLHlEQUEyRTs7SUFDM0UsMkRBQTZFOztJQUU3RSxrREFBMEI7O0lBQzFCLG9EQUF1Qjs7SUFDdkIscURBQXVFOztJQUN2RSwwREFBaUM7O0lBQ2pDLGtEQUF5Qjs7SUFDekIsa0RBQXlCOztJQUN6Qix3REFBNkI7O0lBQzdCLCtDQUFxQjs7Ozs7SUFFVCwrQ0FBK0I7Ozs7O0lBQUUsd0NBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbiAgSW5wdXQsXHJcbiAgVmlld0NoaWxkLFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgT25Jbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBDbWFjc1NlbGVjdENvbXBvbmVudCB9IGZyb20gJy4uL2NtYWNzLXNlbGVjdC9jbWFjcy1zZWxlY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IE56RmlsdGVyT3B0aW9uUGlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy11c2VyLWRyb3Bkb3duJyxcclxuICBleHBvcnRBczogJ2NtYWNzVXNlckRyb3Bkb3duJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtdXNlci1kcm9wZG93bi5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy11c2VyLWRyb3Bkb3duLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NVc2VyRHJvcGRvd25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcblxyXG4gIEBJbnB1dCgpIG1vZGU6IHN0cmluZyA9ICdkZWZhdWx0JzsgXHJcbiAgQElucHV0KCkgZW1haWxFcnJvckxhYmVsOiBzdHJpbmcgPSAnRW1haWwgbXVzdCBiZSBhIHZhbGlkIEVtYWlsIEFkZHJlc3MnOyBcclxuICBASW5wdXQoKSBpbnZpdGVHdWVzdExhYmVsOiBzdHJpbmcgPSAnSW52aXRlIGEgZ3Vlc3QgdmlhIGVtYWlsJzsgXHJcbiAgQElucHV0KCkgcGxhY2VIb2xkZXI6IHN0cmluZyA9ICdBZGQgVXNlcnMgLyBUZWFtcyc7IFxyXG4gIEBJbnB1dCgpIHNlbGVjdGVkVmFsdWUgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGxpc3RPZk9wdGlvbiA9IFtdO1xyXG4gIEBJbnB1dCgpIG1heFRhZ0NvdW50ID0gbnVsbDtcclxuXHJcbiAgQE91dHB1dCgpIHNlbGVjdGVkVmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uQWRkR3Vlc3RVc2VyQnlFbWFpbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgX3NlYXJjaFZhbHVlOiBzdHJpbmcgPSAnJztcclxuICBzaG93RW1haWxFcnJvciA9IGZhbHNlO1xyXG4gIEBWaWV3Q2hpbGQoQ21hY3NTZWxlY3RDb21wb25lbnQpIHNlbGVjdENvbXBvbmVudDogQ21hY3NTZWxlY3RDb21wb25lbnQ7IFxyXG4gIGxpc3RPZkZpbHRlcmVkT3B0aW9uOiBhbnlbXSA9IFtdO1xyXG4gIGxpc3REaXZpZGVyczogYW55W10gPSBbXTtcclxuICBvcGVyYXRlZERhdGE6IGFueVtdID0gW107XHJcbiAgZmlyc3RFbGVtQnlEaXZpZGVyOiBhbnkgPSB7fTtcclxuICBlbWFpbEZvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplciwgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHtcclxuICAgIHRoaXMuZW1haWxGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgIGVtYWlsOiBbdGhpcy5fc2VhcmNoVmFsdWUsIFtWYWxpZGF0b3JzLmVtYWlsXV1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25TZWxlY3RlZFZhbHVlQ2hhbmdlKCRldmVudCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZFZhbHVlQ2hhbmdlLmVtaXQoJGV2ZW50KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvbiA9IFsuLi50aGlzLmxpc3RPZk9wdGlvbl07XHJcbiAgICB0aGlzLm9wZXJhdGVEYXRhKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VhcmNoVmFsdWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWFyY2hWYWx1ZTtcclxuICB9XHJcblxyXG4gIG9wZXJhdGVEYXRhKCkge1xyXG4gICAgdGhpcy5vcGVyYXRlZERhdGEgPSBbXTtcclxuICAgIHRoaXMubGlzdERpdmlkZXJzID0gWy4uLkFycmF5LmZyb20obmV3IFNldCh0aGlzLmxpc3RPZk9wdGlvbi5tYXAoZSA9PiBlLmRpdmlkZXIpKSldO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3REaXZpZGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBkaXZpZGVyID0gdGhpcy5saXN0RGl2aWRlcnNbaV07XHJcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5saXN0T2ZPcHRpb24uZmlsdGVyKGUgPT4gZS5kaXZpZGVyID09PSBkaXZpZGVyKTtcclxuICAgICAgY29uc3QgZWxlbSA9IHsgZGl2aWRlciwgY2hpbGRyZW4gfTtcclxuICAgICAgdGhpcy5vcGVyYXRlZERhdGEucHVzaChlbGVtKTtcclxuICAgIH1cclxuICAgIHRoaXMub3BlcmF0ZWREYXRhID0gWy4uLnRoaXMub3BlcmF0ZWREYXRhXTtcclxuICAgIHRoaXMuZ2V0Rmlyc3RFbGVtQnlEaXZpZGVyKCk7XHJcbiAgfVxyXG5cclxuICBvbnNlYXJjaCgkZXZlbnQpIHtcclxuICAgIHRoaXMuc2hvd0VtYWlsRXJyb3IgPSBmYWxzZTtcclxuICAgIHRoaXMuX3NlYXJjaFZhbHVlID0gJGV2ZW50O1xyXG4gICAgY29uc3QgbGlzdE9mRmlsdGVyZWRPcHRpb24gPSBuZXcgTnpGaWx0ZXJPcHRpb25QaXBlKCkudHJhbnNmb3JtKFxyXG4gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudC5uelNlbGVjdFNlcnZpY2UubGlzdE9mTnpPcHRpb25Db21wb25lbnQsXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50Lm56U2VsZWN0U2VydmljZS5zZWFyY2hWYWx1ZSxcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQubnpTZWxlY3RTZXJ2aWNlLmZpbHRlck9wdGlvbixcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQubnpTZWxlY3RTZXJ2aWNlLnNlcnZlclNlYXJjaFxyXG4gICAgKTtcclxuICAgIHRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb24gPSBsaXN0T2ZGaWx0ZXJlZE9wdGlvbjtcclxuICAgIHRoaXMuZ2V0Rmlyc3RFbGVtQnlEaXZpZGVyKCk7XHJcbiAgfVxyXG5cclxuICBnZXRGaXJzdEVsZW1CeURpdmlkZXIoKSB7XHJcbiAgICBjb25zdCBmaXJzdEVsZW1CeURpdmlkZXIgPSB7fTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBlbGVtID0gdGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvbltpXTtcclxuICAgICAgY29uc3QgZWxlbVdpdGhEaXZpZGVyID0gdGhpcy5saXN0T2ZPcHRpb24uZmluZChlID0+IChlLnZhbHVlID09PSBlbGVtLm56VmFsdWUgfHwgZS52YWx1ZSA9PT0gZWxlbS52YWx1ZSkpO1xyXG4gICAgICBpZiAoZmlyc3RFbGVtQnlEaXZpZGVyW2VsZW1XaXRoRGl2aWRlci5kaXZpZGVyXSA9PT0gbnVsbCB8fCBmaXJzdEVsZW1CeURpdmlkZXJbZWxlbVdpdGhEaXZpZGVyLmRpdmlkZXJdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBmaXJzdEVsZW1CeURpdmlkZXJbZWxlbVdpdGhEaXZpZGVyLmRpdmlkZXJdID0gW107XHJcbiAgICAgICAgZmlyc3RFbGVtQnlEaXZpZGVyW2VsZW1XaXRoRGl2aWRlci5kaXZpZGVyXS5wdXNoKGVsZW1XaXRoRGl2aWRlcik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZmlyc3RFbGVtQnlEaXZpZGVyW2VsZW1XaXRoRGl2aWRlci5kaXZpZGVyXS5wdXNoKGVsZW1XaXRoRGl2aWRlcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuZmlyc3RFbGVtQnlEaXZpZGVyID0gZmlyc3RFbGVtQnlEaXZpZGVyO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5pdGlhbHMobmFtZTogYW55KSB7XHJcbiAgICBsZXQgaW5pdGlhbHMgPSBuYW1lLm1hdGNoKC9cXGJcXHcvZykgfHwgW107XHJcbiAgICBpbml0aWFscyA9ICgoaW5pdGlhbHMuc2hpZnQoKSB8fCAnJykgKyAoaW5pdGlhbHMucG9wKCkgfHwgJycpKS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgcmV0dXJuIGluaXRpYWxzO1xyXG4gIH1cclxuXHJcbiAgZ2V0QmFja2dyb3VuZEltYWdlKHBpY3R1cmUpIHtcclxuICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoJ3VybChcXCcnICsgcGljdHVyZSArICdcXCcpJyk7XHJcbiAgfVxyXG5cclxuICBhZGRHdWVzdFVzZXIoKSB7XHJcbiAgICBpZiAodGhpcy5fc2VhcmNoVmFsdWUhISkge1xyXG4gICAgICB0aGlzLmVtYWlsRm9ybS5nZXQoJ2VtYWlsJykuc2V0VmFsdWUodGhpcy5fc2VhcmNoVmFsdWUpO1xyXG4gICAgICBpZiAodGhpcy5lbWFpbEZvcm0udmFsaWQpIHtcclxuICAgICAgICB0aGlzLnNob3dFbWFpbEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vbkFkZEd1ZXN0VXNlckJ5RW1haWwuZW1pdCh0cnVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNob3dFbWFpbEVycm9yID0gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZE9wdGlvbihvcHRpb246IGFueSkge1xyXG4gICAgY29uc3QgY2hlY2tVc2VyID0gdGhpcy5saXN0T2ZPcHRpb24uZmluZChlID0+IGUudmFsdWUgPT09IG9wdGlvbi52YWx1ZSk7XHJcbiAgICBpZiAoIWNoZWNrVXNlcikge1xyXG4gICAgICB0aGlzLmxpc3RPZk9wdGlvbiA9IFsuLi50aGlzLmxpc3RPZk9wdGlvbiwgb3B0aW9uXTtcclxuICAgICAgdGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvbiA9IFsuLi50aGlzLmxpc3RPZkZpbHRlcmVkT3B0aW9uLCBvcHRpb25dO1xyXG4gICAgICB0aGlzLm9wZXJhdGVEYXRhKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==