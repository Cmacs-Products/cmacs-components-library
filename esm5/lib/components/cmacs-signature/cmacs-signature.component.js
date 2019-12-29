/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewEncapsulation, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { CmacsMessageService } from "../cmacs-message/cmacs-message.service";
/** @type {?} */
export var SIGNATURE_LOCALIZATION = {
    'Click here to sign': 'Click here to sign',
    'Sign to Complete': 'Sign to Complete',
    'Cancel': 'Cancel',
    'Verify': 'Verify',
    'Enter Your Name': 'Enter Your Name',
    'Text Here': 'Text Here',
    'Type': 'Type',
    'Draw': 'Draw',
    'Image': 'Image',
    'I, User Full Name, have reviewed and completed this report.': 'I, User Full Name, have reviewed and completed this report.',
    'Select here to save your signature for future use.': 'Select here to save your signature for future use.',
    'Signature': 'Signature',
    'Drag & Drop File Here or': 'Drag & Drop File Here or',
    'Browse Computer': 'Browse Computer'
};
var CmacsSignatureComponent = /** @class */ (function () {
    function CmacsSignatureComponent(fb, msg) {
        this.fb = fb;
        this.msg = msg;
        this._isVisible = false;
        this.saveSignature = true;
        this._i18n = SIGNATURE_LOCALIZATION;
        this.signaturePadOptions = {
            'dotSize': 0.4,
            'canvasWidth': 480,
            'canvasHeight': 126
        };
        this.i18n = SIGNATURE_LOCALIZATION;
        this.oncancel = new EventEmitter();
        this.onsubmit = new EventEmitter();
        this.formGroup = this.fb.group({
            username: ['', [Validators.required]],
            sign: ['', [Validators.required]]
        });
    }
    /**
     * @return {?}
     */
    CmacsSignatureComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.signaturePad.clear();
    };
    /**
     * @return {?}
     */
    CmacsSignatureComponent.prototype.drawComplete = /**
     * @return {?}
     */
    function () {
        console.log(this.signaturePad.toDataURL());
    };
    /**
     * @return {?}
     */
    CmacsSignatureComponent.prototype.openModal = /**
     * @return {?}
     */
    function () {
        this._isVisible = true;
    };
    /**
     * @return {?}
     */
    CmacsSignatureComponent.prototype.handleCancel = /**
     * @return {?}
     */
    function () {
        this._isVisible = false;
        this.oncancel.emit(this._isVisible);
    };
    /**
     * @return {?}
     */
    CmacsSignatureComponent.prototype.handleOk = /**
     * @return {?}
     */
    function () {
        this.onsubmit.emit();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    CmacsSignatureComponent.prototype.checkPressedKeys = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if ($event.which === 90 && $event.ctrlKey) {
            /** @type {?} */
            var data = this.signaturePad.toData();
            if (data) {
                data.pop();
                this.signaturePad.fromData(data);
            }
        }
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    CmacsSignatureComponent.prototype.handleChange = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var file = _a.file, fileList = _a.fileList;
        /** @type {?} */
        var status = file.status;
        if (status !== 'uploading') {
            console.log(file, fileList);
        }
        if (status === 'done') {
            this.msg.success(file.name + " file uploaded successfully.");
        }
        else if (status === 'error') {
            this.msg.error(file.name + " file upload failed.");
        }
    };
    CmacsSignatureComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-signature',
                    exportAs: 'cmacsSignature',
                    template: "<div class=\"cmacs-signature-wrapper\">\r\n  <i class=\"cmacs-signature-close-icon iconUISmall-Excel\"></i>\r\n  <span class=\"cmacs-signature-placeholder\"\r\n        (click)=\"openModal()\">\r\n    {{i18n['Click here to sign'] ? i18n['Click here to sign'] : _i18n['Click here to sign']}}\r\n  </span>\r\n</div>\r\n\r\n<cmacs-modal\r\n  class=\"cmacs-signature-modal\"\r\n  modalType=\"helpfulTipsNoPanel\"\r\n  [(visible)]=\"_isVisible\"\r\n  [width]=\"'570px'\"\r\n  [leftPanelCols]=\"24\"\r\n  [rightPanelCols]=\"0\"\r\n  title=\"{{i18n['Sign to Complete'] ? i18n['Sign to Complete'] : _i18n['Sign to Complete']}}\"\r\n  (onCancel)=\"handleCancel()\"\r\n  [footer]=\"modalFooter\">\r\n\r\n  <div cmacs-modal-helpfulTips-no-panel-left>\r\n      <cmacs-tabset class=\"cmacs-signature-tabset cmacs-width-100\" [selectedIndex]=\"0\">\r\n\r\n        <!-----------------Type pane----------------->\r\n        <cmacs-tab title=\"{{i18n['Type'] ? i18n['Type'] : _i18n['Type']}}\" >\r\n          <form cmacs-form [formGroup]=\"formGroup\">\r\n              <cmacs-form-item>\r\n                <cmacs-form-label cmacsRequired>\r\n                  {{i18n['Enter Your Name'] ? i18n['Enter Your Name'] : _i18n['Enter Your Name']}}\r\n                </cmacs-form-label>\r\n                <cmacs-form-control>\r\n                  <input class=\"cmacs-signature-username-input\" cmacs-input [formControlName]=\"'username'\"\r\n                         placeholder=\"{{i18n['Text Here'] ? i18n['Text Here'] : _i18n['Text Here']}}\"\r\n                  />\r\n                </cmacs-form-control>\r\n              </cmacs-form-item>\r\n\r\n              <div class=\"cmacs-signature-sign-wrapper\">\r\n                <cmacs-form-item>\r\n                  <cmacs-form-control>\r\n                    <input class=\"cmacs-signature-sign-input\" cmacs-input [formControlName]=\"'sign'\"/>\r\n                  </cmacs-form-control>\r\n                </cmacs-form-item>\r\n              </div>\r\n          </form>\r\n\r\n          <div class=\"cmacs-signature-text cmacs-signature-text-format\">\r\n            {{i18n['I, User Full Name, have reviewed and completed this report.'] ? i18n['I, User Full Name, have reviewed and completed this report.']\r\n            : _i18n['I, User Full Name, have reviewed and completed this report.']}}\r\n          </div>\r\n          <label class=\"cmacs-signature-text\" cmacs-checkbox [(ngModel)]=\"saveSignature\">\r\n            {{i18n['Select here to save your signature for future use.'] ? i18n['Select here to save your signature for future use.']\r\n            : _i18n['Select here to save your signature for future use.']}}\r\n          </label>\r\n        </cmacs-tab>\r\n        <!-----------------Type pane----------------->\r\n\r\n        <!-----------------Draw pane----------------->\r\n        <cmacs-tab title=\"{{i18n['Draw'] ? i18n['Draw'] : _i18n['Draw']}}\">\r\n\r\n          <cmacs-form-item class=\"cmacs-no-margin\">\r\n            <cmacs-form-label cmacsRequired>\r\n              {{i18n['Signature'] ? i18n['Signature'] : _i18n['Signature']}}\r\n            </cmacs-form-label>\r\n          </cmacs-form-item>\r\n          <div\r\n            class=\"cmacs-signature-sign-wrapper cmacs-signature-pad\"\r\n            tabindex='1'\r\n            (keydown)=\"checkPressedKeys($event)\"\r\n          >\r\n            <signature-pad [options]=\"signaturePadOptions\"\r\n                           (onEndEvent)=\"drawComplete()\"\r\n            ></signature-pad>\r\n          </div>\r\n          <div class=\"cmacs-signature-text cmacs-signature-text-format\">\r\n            {{i18n['I, User Full Name, have reviewed and completed this report.'] ? i18n['I, User Full Name, have reviewed and completed this report.']\r\n            : _i18n['I, User Full Name, have reviewed and completed this report.']}}\r\n          </div>\r\n          <label class=\"cmacs-signature-text\" cmacs-checkbox [(ngModel)]=\"saveSignature\">\r\n            {{i18n['Select here to save your signature for future use.'] ? i18n['Select here to save your signature for future use.']\r\n            : _i18n['Select here to save your signature for future use.']}}\r\n          </label>\r\n        </cmacs-tab>\r\n        <!-----------------Draw pane----------------->\r\n\r\n        <!-----------------Image pane----------------->\r\n        <cmacs-tab title=\"{{i18n['Image'] ? i18n['Image'] : _i18n['Image']}}\">\r\n          <cmacs-form-item class=\"cmacs-no-margin\">\r\n            <cmacs-form-label cmacsRequired>\r\n              {{i18n['Signature'] ? i18n['Signature'] : _i18n['Signature']}}\r\n            </cmacs-form-label>\r\n          </cmacs-form-item>\r\n\r\n          <nz-upload\r\n            class=\"cmacs-signature-upload-area\"\r\n            nzType=\"drag\"\r\n            [nzMultiple]=\"false\"\r\n            nzAction=\"https://jsonplaceholder.typicode.com/posts/\"\r\n            (nzChange)=\"handleChange($event)\"\r\n          >\r\n            <span class=\"ant-upload-drag-icon\">\r\n              <img src=\"/assets/upload-computer.png\">\r\n            </span>\r\n            <p class=\"cmacs-signature-upload-text\">\r\n              {{i18n['Drag & Drop File Here or'] ? i18n['Drag & Drop File Here or']\r\n              : _i18n['Drag & Drop File Here or']}}\r\n            </p>\r\n            <button cmacs-button>{{i18n['Browse Computer'] ? i18n['Browse Computer']\r\n              : _i18n['Browse Computer']}}</button>\r\n          </nz-upload>\r\n\r\n          <div class=\"cmacs-signature-text cmacs-signature-text-format\">\r\n            {{i18n['I, User Full Name, have reviewed and completed this report.'] ? i18n['I, User Full Name, have reviewed and completed this report.']\r\n            : _i18n['I, User Full Name, have reviewed and completed this report.']}}\r\n          </div>\r\n          <label class=\"cmacs-signature-text\" cmacs-checkbox [(ngModel)]=\"saveSignature\">\r\n            {{i18n['Select here to save your signature for future use.'] ? i18n['Select here to save your signature for future use.']\r\n            : _i18n['Select here to save your signature for future use.']}}\r\n          </label>\r\n        </cmacs-tab>\r\n        <!-----------------Image pane----------------->\r\n      </cmacs-tabset>\r\n  </div>\r\n\r\n</cmacs-modal>\r\n\r\n<ng-template #modalFooter>\r\n  <button cmacs-button type=\"default\" ghost style=\"float: left;\" (click)=\"handleCancel()\">\r\n    {{i18n['Cancel'] ? i18n['Cancel'] : _i18n['Cancel']}}\r\n  </button>\r\n  <button cmacs-button ghost type=\"primary\" [disabled]=\"!formGroup.valid\" (click)=\"handleOk()\">\r\n    <span>{{i18n['Verify'] ? i18n['Verify'] : _i18n['Verify']}}</span>\r\n  </button>\r\n</ng-template>\r\n",
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    styles: [".cmacs-signature-wrapper{background-color:#fff;height:58px;border-radius:3px;border:1px solid #dee0e5;width:100%;text-align:center}.cmacs-signature-placeholder{font-family:Roboto,Roboto-Regular;font-size:14px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.71;letter-spacing:normal;color:#2a7cff;top:calc(50% - 11px);position:relative}.cmacs-signature-placeholder:hover{cursor:pointer}.cmacs-signature-close-icon{font-family:Roboto,Roboto-Regular;font-size:18px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.11;letter-spacing:normal;color:#bec4cd;top:calc(50% - 9px);position:relative}.cmacs-signature-username-input{width:225px!important;display:block!important}.cmacs-signature-sign-wrapper{height:177px;border-radius:3px;border:1px solid #dee0e5;background-color:#f6f7fb;text-align:center;padding-top:57px}.cmacs-signature-sign-input,.cmacs-signature-sign-input:focus,.cmacs-signature-sign-input:hover{border-radius:unset;width:93%!important;border-top:none!important;border-left:none!important;border-right:none!important;background-color:#f6f7fb}.cmacs-signature-text{font-family:Roboto;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;color:#656c79!important}.cmacs-signature-text-format{margin-top:15px;margin-bottom:25px}.cmacs-signature-modal .ant-modal-body{height:490px!important}.cmacs-signature-tabset .ant-tabs-bar{border-color:transparent!important}.cmacs-width-100{width:100%}.cmacs-signature-pad{height:231px;padding-top:0}.cmacs-signature-pad signature-pad{border-bottom:1px solid #bec4cd}.cmacs-no-margin{margin:0!important}.cmacs-signature-upload-area .ant-upload.ant-upload-drag{height:231px}.cmacs-signature-upload-text{font-family:Roboto,Roboto-Regular;font-size:14px;font-weight:400;font-stretch:normal;font-style:normal;line-height:.86;letter-spacing:normal;color:#97a0ae;margin:20px 0!important}"]
                }] }
    ];
    /** @nocollapse */
    CmacsSignatureComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: CmacsMessageService }
    ]; };
    CmacsSignatureComponent.propDecorators = {
        i18n: [{ type: Input }],
        oncancel: [{ type: Output }],
        onsubmit: [{ type: Output }],
        signaturePad: [{ type: ViewChild, args: [SignaturePad,] }]
    };
    return CmacsSignatureComponent;
}());
export { CmacsSignatureComponent };
if (false) {
    /** @type {?} */
    CmacsSignatureComponent.prototype._isVisible;
    /** @type {?} */
    CmacsSignatureComponent.prototype.formGroup;
    /** @type {?} */
    CmacsSignatureComponent.prototype.saveSignature;
    /** @type {?} */
    CmacsSignatureComponent.prototype._i18n;
    /** @type {?} */
    CmacsSignatureComponent.prototype.signaturePadOptions;
    /** @type {?} */
    CmacsSignatureComponent.prototype.i18n;
    /** @type {?} */
    CmacsSignatureComponent.prototype.oncancel;
    /** @type {?} */
    CmacsSignatureComponent.prototype.onsubmit;
    /** @type {?} */
    CmacsSignatureComponent.prototype.signaturePad;
    /**
     * @type {?}
     * @private
     */
    CmacsSignatureComponent.prototype.fb;
    /**
     * @type {?}
     * @private
     */
    CmacsSignatureComponent.prototype.msg;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2lnbmF0dXJlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mtc2lnbmF0dXJlL2NtYWNzLXNpZ25hdHVyZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQ3RDLGlCQUFpQixFQUFFLFNBQVMsRUFDN0IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLFdBQVcsRUFBYSxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFbkUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sd0NBQXdDLENBQUM7O0FBRTNFLE1BQU0sS0FBTyxzQkFBc0IsR0FBRztJQUNwQyxvQkFBb0IsRUFBRSxvQkFBb0I7SUFDMUMsa0JBQWtCLEVBQUUsa0JBQWtCO0lBQ3RDLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLGlCQUFpQixFQUFFLGlCQUFpQjtJQUNwQyxXQUFXLEVBQUUsV0FBVztJQUN4QixNQUFNLEVBQUUsTUFBTTtJQUNkLE1BQU0sRUFBRSxNQUFNO0lBQ2QsT0FBTyxFQUFFLE9BQU87SUFDaEIsNkRBQTZELEVBQUUsNkRBQTZEO0lBQzVILG9EQUFvRCxFQUFFLG9EQUFvRDtJQUMxRyxXQUFXLEVBQUUsV0FBVztJQUN4QiwwQkFBMEIsRUFBRSwwQkFBMEI7SUFDdEQsaUJBQWlCLEVBQUUsaUJBQWlCO0NBQ3JDO0FBRUQ7SUEwQkUsaUNBQW9CLEVBQWUsRUFBVSxHQUF3QjtRQUFqRCxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBcUI7UUFoQnJFLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFF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NUVELElBNEVDO1NBcEVZLHVCQUF1Qjs7O0lBRWxDLDZDQUFtQjs7SUFDbkIsNENBQXFCOztJQUNyQixnREFBcUI7O0lBQ3JCLHdDQUErQjs7SUFDL0Isc0RBSUU7O0lBRUYsdUNBQTRDOztJQUU1QywyQ0FBd0U7O0lBQ3hFLDJDQUFnRTs7SUFDaEUsK0NBQW9EOzs7OztJQUV4QyxxQ0FBdUI7Ozs7O0lBQUUsc0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbiwgVmlld0NoaWxkXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9yc30gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFNpZ25hdHVyZVBhZCB9IGZyb20gJ2FuZ3VsYXIyLXNpZ25hdHVyZXBhZC9zaWduYXR1cmUtcGFkJztcclxuaW1wb3J0IHtVcGxvYWRDaGFuZ2VQYXJhbX0gZnJvbSBcIm5nLXpvcnJvLWFudGRcIjtcclxuaW1wb3J0IHtDbWFjc01lc3NhZ2VTZXJ2aWNlfSBmcm9tIFwiLi4vY21hY3MtbWVzc2FnZS9jbWFjcy1tZXNzYWdlLnNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOQVRVUkVfTE9DQUxJWkFUSU9OID0ge1xyXG4gICdDbGljayBoZXJlIHRvIHNpZ24nOiAnQ2xpY2sgaGVyZSB0byBzaWduJyxcclxuICAnU2lnbiB0byBDb21wbGV0ZSc6ICdTaWduIHRvIENvbXBsZXRlJyxcclxuICAnQ2FuY2VsJzogJ0NhbmNlbCcsXHJcbiAgJ1ZlcmlmeSc6ICdWZXJpZnknLFxyXG4gICdFbnRlciBZb3VyIE5hbWUnOiAnRW50ZXIgWW91ciBOYW1lJyxcclxuICAnVGV4dCBIZXJlJzogJ1RleHQgSGVyZScsXHJcbiAgJ1R5cGUnOiAnVHlwZScsXHJcbiAgJ0RyYXcnOiAnRHJhdycsXHJcbiAgJ0ltYWdlJzogJ0ltYWdlJyxcclxuICAnSSwgVXNlciBGdWxsIE5hbWUsIGhhdmUgcmV2aWV3ZWQgYW5kIGNvbXBsZXRlZCB0aGlzIHJlcG9ydC4nOiAnSSwgVXNlciBGdWxsIE5hbWUsIGhhdmUgcmV2aWV3ZWQgYW5kIGNvbXBsZXRlZCB0aGlzIHJlcG9ydC4nLFxyXG4gICdTZWxlY3QgaGVyZSB0byBzYXZlIHlvdXIgc2lnbmF0dXJlIGZvciBmdXR1cmUgdXNlLic6ICdTZWxlY3QgaGVyZSB0byBzYXZlIHlvdXIgc2lnbmF0dXJlIGZvciBmdXR1cmUgdXNlLicsXHJcbiAgJ1NpZ25hdHVyZSc6ICdTaWduYXR1cmUnLFxyXG4gICdEcmFnICYgRHJvcCBGaWxlIEhlcmUgb3InOiAnRHJhZyAmIERyb3AgRmlsZSBIZXJlIG9yJyxcclxuICAnQnJvd3NlIENvbXB1dGVyJzogJ0Jyb3dzZSBDb21wdXRlcidcclxufTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3Mtc2lnbmF0dXJlJyxcclxuICBleHBvcnRBczogJ2NtYWNzU2lnbmF0dXJlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mtc2lnbmF0dXJlLmNvbXBvbmVudC5odG1sJyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXNpZ25hdHVyZS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzU2lnbmF0dXJlQ29tcG9uZW50IHtcclxuXHJcbiAgX2lzVmlzaWJsZSA9IGZhbHNlO1xyXG4gIGZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG4gIHNhdmVTaWduYXR1cmUgPSB0cnVlO1xyXG4gIF9pMThuID0gU0lHTkFUVVJFX0xPQ0FMSVpBVElPTjtcclxuICBzaWduYXR1cmVQYWRPcHRpb25zOiBPYmplY3QgPSB7XHJcbiAgICAnZG90U2l6ZSc6IDAuNCxcclxuICAgICdjYW52YXNXaWR0aCc6IDQ4MCxcclxuICAgICdjYW52YXNIZWlnaHQnOiAxMjZcclxuICB9O1xyXG5cclxuICBASW5wdXQoKSBpMThuOiBhbnkgPSBTSUdOQVRVUkVfTE9DQUxJWkFUSU9OO1xyXG5cclxuICBAT3V0cHV0KCkgb25jYW5jZWw6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAT3V0cHV0KCkgb25zdWJtaXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQFZpZXdDaGlsZChTaWduYXR1cmVQYWQpIHNpZ25hdHVyZVBhZDogU2lnbmF0dXJlUGFkO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSBtc2c6IENtYWNzTWVzc2FnZVNlcnZpY2UpIHtcclxuICAgIHRoaXMuZm9ybUdyb3VwID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgIHVzZXJuYW1lOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXHJcbiAgICAgIHNpZ246IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLnNpZ25hdHVyZVBhZC5jbGVhcigpO1xyXG4gIH1cclxuXHJcbiAgZHJhd0NvbXBsZXRlKCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zaWduYXR1cmVQYWQudG9EYXRhVVJMKCkpO1xyXG4gIH1cclxuXHJcbiAgb3Blbk1vZGFsKCkge1xyXG4gICAgdGhpcy5faXNWaXNpYmxlID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNhbmNlbCgpIHtcclxuICAgIHRoaXMuX2lzVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5vbmNhbmNlbC5lbWl0KHRoaXMuX2lzVmlzaWJsZSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVPaygpIHtcclxuICAgIHRoaXMub25zdWJtaXQuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tQcmVzc2VkS2V5cygkZXZlbnQpIHtcclxuICAgIGlmICgkZXZlbnQud2hpY2ggPT09IDkwICYmICRldmVudC5jdHJsS2V5KSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLnNpZ25hdHVyZVBhZC50b0RhdGEoKTtcclxuICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICBkYXRhLnBvcCgpO1xyXG4gICAgICAgIHRoaXMuc2lnbmF0dXJlUGFkLmZyb21EYXRhKGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDaGFuZ2UoeyBmaWxlLCBmaWxlTGlzdCB9OiBVcGxvYWRDaGFuZ2VQYXJhbSk6IHZvaWQge1xyXG4gICAgY29uc3Qgc3RhdHVzID0gZmlsZS5zdGF0dXM7XHJcbiAgICBpZiAoc3RhdHVzICE9PSAndXBsb2FkaW5nJykge1xyXG4gICAgICBjb25zb2xlLmxvZyhmaWxlLCBmaWxlTGlzdCk7XHJcbiAgICB9XHJcbiAgICBpZiAoc3RhdHVzID09PSAnZG9uZScpIHtcclxuICAgICAgdGhpcy5tc2cuc3VjY2VzcyhgJHtmaWxlLm5hbWV9IGZpbGUgdXBsb2FkZWQgc3VjY2Vzc2Z1bGx5LmApO1xyXG4gICAgfSBlbHNlIGlmIChzdGF0dXMgPT09ICdlcnJvcicpIHtcclxuICAgICAgdGhpcy5tc2cuZXJyb3IoYCR7ZmlsZS5uYW1lfSBmaWxlIHVwbG9hZCBmYWlsZWQuYCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=