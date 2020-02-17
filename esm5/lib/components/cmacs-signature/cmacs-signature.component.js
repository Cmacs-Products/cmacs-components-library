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
        var _this = this;
        this.fb = fb;
        this.msg = msg;
        this._isVisible = false;
        this.saveSignature = true;
        this._i18n = SIGNATURE_LOCALIZATION;
        this.current = 0;
        this.files = [];
        this.i18n = SIGNATURE_LOCALIZATION;
        this.oncancel = new EventEmitter();
        this.signaturePadOptions = {};
        this.onsubmit = new EventEmitter();
        this.ondrawend = new EventEmitter();
        this.beforeUpload = (/**
         * @param {?} file
         * @return {?}
         */
        function (file) {
            _this.files = [].concat(file);
            return false;
        });
        this.showUploadList = {
            showPreviewIcon: true,
            showRemoveIcon: true,
            hidePreviewIconInNonImage: true
        };
        this.previewImage = '';
        this.previewVisible = false;
        this.handlePreview = (/**
         * @param {?} file
         * @return {?}
         */
        function (file) {
            _this.previewImage = file.url || file.thumbUrl;
            _this.previewVisible = true;
        });
        this.formGroup = this.fb.group({
            username: ['', [Validators.required]]
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
    CmacsSignatureComponent.prototype.isValid = /**
     * @return {?}
     */
    function () {
        switch (this.current) {
            case 0:
                return !this.formGroup.valid;
            case 1:
                return true;
            case 2:
                return true;
            default:
                return true;
        }
    };
    /**
     * @param {?} idx
     * @return {?}
     */
    CmacsSignatureComponent.prototype.updateCurrent = /**
     * @param {?} idx
     * @return {?}
     */
    function (idx) {
        this.current = idx;
    };
    /**
     * @return {?}
     */
    CmacsSignatureComponent.prototype.drawComplete = /**
     * @return {?}
     */
    function () {
        this.ondrawend.emit(this.signaturePad.toDataURL());
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
                    template: "<div\r\n  class=\"cmacs-signature-sign-wrapper cmacs-signature-pad\"\r\n  tabindex='1'\r\n  (keydown)=\"checkPressedKeys($event)\"\r\n>\r\n  <span class=\"cmacs-signature-x\">X</span>\r\n  <signature-pad [options]=\"signaturePadOptions\"\r\n                 (onEndEvent)=\"drawComplete()\"\r\n  ></signature-pad>\r\n</div>\r\n\r\n\r\n<!--\r\n<div class=\"cmacs-signature-wrapper\">\r\n  <i class=\"cmacs-signature-close-icon iconUISmall-Excel\"></i>\r\n  <span class=\"cmacs-signature-placeholder\"\r\n        (click)=\"openModal()\">\r\n    {{i18n['Click here to sign'] ? i18n['Click here to sign'] : _i18n['Click here to sign']}}\r\n  </span>\r\n</div>\r\n\r\n<cmacs-modal\r\n  class=\"cmacs-signature-modal\"\r\n  modalType=\"helpfulTipsNoPanel\"\r\n  [(visible)]=\"_isVisible\"\r\n  [width]=\"'570px'\"\r\n  title=\"{{i18n['Sign to Complete'] ? i18n['Sign to Complete'] : _i18n['Sign to Complete']}}\"\r\n  (onCancel)=\"handleCancel()\"\r\n  [footer]=\"modalFooter\">\r\n\r\n  <div cmacs-modal-helpfulTips-no-panel-center>\r\n      <cmacs-tabset class=\"cmacs-signature-tabset cmacs-width-100\"\r\n                    [selectedIndex]=\"current\"\r\n                    (selectedIndexChange)=\"updateCurrent($event)\">\r\n\r\n        &lt;!&ndash;-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;Type pane-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&ndash;&gt;\r\n        <cmacs-tab title=\"{{i18n['Type'] ? i18n['Type'] : _i18n['Type']}}\" >\r\n          <form cmacs-form [formGroup]=\"formGroup\">\r\n              <cmacs-form-item>\r\n                <cmacs-form-label cmacsRequired>\r\n                  {{i18n['Enter Your Name'] ? i18n['Enter Your Name'] : _i18n['Enter Your Name']}}\r\n                </cmacs-form-label>\r\n                <cmacs-form-control>\r\n                  <input class=\"cmacs-signature-username-input\" cmacs-input [formControlName]=\"'username'\"\r\n                         placeholder=\"{{i18n['Text Here'] ? i18n['Text Here'] : _i18n['Text Here']}}\"\r\n                  />\r\n                </cmacs-form-control>\r\n              </cmacs-form-item>\r\n\r\n              <div class=\"cmacs-signature-sign-wrapper\">\r\n                <div class=\"cmacs-signature-sign-input\" *ngIf=\"formGroup.get('username')!.value.length\">{{formGroup.get('username')!.value}}</div>\r\n                <div class=\"cmacs-signature-sign-input cmacs-invisible-font\" *ngIf=\"!formGroup.get('username')!.value.length\">Test</div>\r\n              </div>\r\n          </form>\r\n\r\n          <div class=\"cmacs-signature-text cmacs-signature-text-format\">\r\n            {{i18n['I, User Full Name, have reviewed and completed this report.'] ? i18n['I, User Full Name, have reviewed and completed this report.']\r\n            : _i18n['I, User Full Name, have reviewed and completed this report.']}}\r\n          </div>\r\n          <label class=\"cmacs-signature-text\" cmacs-checkbox [(ngModel)]=\"saveSignature\">\r\n            {{i18n['Select here to save your signature for future use.'] ? i18n['Select here to save your signature for future use.']\r\n            : _i18n['Select here to save your signature for future use.']}}\r\n          </label>\r\n        </cmacs-tab>\r\n        &lt;!&ndash;-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;Type pane-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&ndash;&gt;\r\n\r\n        &lt;!&ndash;-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;Draw pane-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&ndash;&gt;\r\n        <cmacs-tab title=\"{{i18n['Draw'] ? i18n['Draw'] : _i18n['Draw']}}\">\r\n\r\n          <cmacs-form-item class=\"cmacs-no-margin\">\r\n            <cmacs-form-label cmacsRequired>\r\n              {{i18n['Signature'] ? i18n['Signature'] : _i18n['Signature']}}\r\n            </cmacs-form-label>\r\n          </cmacs-form-item>\r\n          <div\r\n            class=\"cmacs-signature-sign-wrapper cmacs-signature-pad\"\r\n            tabindex='1'\r\n            (keydown)=\"checkPressedKeys($event)\"\r\n          >\r\n            <signature-pad [options]=\"signaturePadOptions\"\r\n                           (onEndEvent)=\"drawComplete()\"\r\n            ></signature-pad>\r\n          </div>\r\n          <div class=\"cmacs-signature-text cmacs-signature-text-format\">\r\n            {{i18n['I, User Full Name, have reviewed and completed this report.'] ? i18n['I, User Full Name, have reviewed and completed this report.']\r\n            : _i18n['I, User Full Name, have reviewed and completed this report.']}}\r\n          </div>\r\n          <label class=\"cmacs-signature-text\" cmacs-checkbox [(ngModel)]=\"saveSignature\">\r\n            {{i18n['Select here to save your signature for future use.'] ? i18n['Select here to save your signature for future use.']\r\n            : _i18n['Select here to save your signature for future use.']}}\r\n          </label>\r\n        </cmacs-tab>\r\n        &lt;!&ndash;-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;Draw pane-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&ndash;&gt;\r\n\r\n        &lt;!&ndash;-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;Image pane-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&ndash;&gt;\r\n        <cmacs-tab title=\"{{i18n['Image'] ? i18n['Image'] : _i18n['Image']}}\">\r\n          <cmacs-form-item class=\"cmacs-no-margin\">\r\n            <cmacs-form-label cmacsRequired>\r\n              {{i18n['Signature'] ? i18n['Signature'] : _i18n['Signature']}}\r\n            </cmacs-form-label>\r\n          </cmacs-form-item>\r\n\r\n          <nz-upload\r\n            class=\"cmacs-signature-upload-area\"\r\n            nzType=\"drag\"\r\n            [nzMultiple]=\"false\"\r\n            [(nzFileList)]=\"files\"\r\n            [nzShowButton]=\"files.length < 1\"\r\n            [nzBeforeUpload]=\"beforeUpload\"\r\n            nzAction=\"https://jsonplaceholder.typicode.com/posts/\"\r\n            [nzShowUploadList]=\"showUploadList\"\r\n            [nzPreview]=\"handlePreview\"\r\n          >\r\n            <span class=\"ant-upload-drag-icon\">\r\n              <img src=\"/assets/upload-computer.png\">\r\n            </span>\r\n            <p class=\"cmacs-signature-upload-text\">\r\n              {{i18n['Drag & Drop File Here or'] ? i18n['Drag & Drop File Here or']\r\n              : _i18n['Drag & Drop File Here or']}}\r\n            </p>\r\n            <button cmacs-button>{{i18n['Browse Computer'] ? i18n['Browse Computer']\r\n              : _i18n['Browse Computer']}}</button>\r\n          </nz-upload>\r\n\r\n          <nz-modal\r\n            [nzVisible]=\"previewVisible\"\r\n            [nzContent]=\"modalContent\"\r\n            [nzFooter]=\"null\"\r\n            (nzOnCancel)=\"previewVisible = false\"\r\n          >\r\n            <ng-template #modalContent>\r\n              <img [src]=\"previewImage\" [ngStyle]=\"{ width: '100%' }\" />\r\n            </ng-template>\r\n          </nz-modal>\r\n\r\n          <div class=\"cmacs-signature-text cmacs-signature-text-format\">\r\n            {{i18n['I, User Full Name, have reviewed and completed this report.'] ? i18n['I, User Full Name, have reviewed and completed this report.']\r\n            : _i18n['I, User Full Name, have reviewed and completed this report.']}}\r\n          </div>\r\n          <label class=\"cmacs-signature-text\" cmacs-checkbox [(ngModel)]=\"saveSignature\">\r\n            {{i18n['Select here to save your signature for future use.'] ? i18n['Select here to save your signature for future use.']\r\n            : _i18n['Select here to save your signature for future use.']}}\r\n          </label>\r\n        </cmacs-tab>\r\n        &lt;!&ndash;-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;Image pane-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&ndash;&gt;\r\n      </cmacs-tabset>\r\n  </div>\r\n\r\n</cmacs-modal>\r\n\r\n<ng-template #modalFooter>\r\n  <button cmacs-button type=\"default\" ghost style=\"float: left;\" (click)=\"handleCancel()\">\r\n    {{i18n['Cancel'] ? i18n['Cancel'] : _i18n['Cancel']}}\r\n  </button>\r\n  <button cmacs-button ghost type=\"primary\" [disabled]=\"isValid()\" (click)=\"handleOk()\">\r\n    <span>{{i18n['Verify'] ? i18n['Verify'] : _i18n['Verify']}}</span>\r\n  </button>\r\n</ng-template>\r\n-->\r\n",
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    styles: [".cmacs-signature-wrapper{background-color:#fff;height:58px;border-radius:3px;border:1px solid #dee0e5;width:100%;text-align:center}.cmacs-signature-x{font-size:18px;color:#bec4cd}.cmacs-signature-placeholder{font-family:Roboto-Regular;font-size:14px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.71;letter-spacing:normal;color:#2a7cff;top:calc(50% - 11px);position:relative}.cmacs-signature-placeholder:hover{cursor:pointer}.cmacs-signature-close-icon{font-family:Roboto-Regular;font-size:18px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.11;letter-spacing:normal;color:#bec4cd;top:calc(50% - 9px);position:relative}.cmacs-signature-username-input{width:225px!important;display:block!important}.cmacs-signature-sign-wrapper{height:177px;border-radius:3px;border:1px solid #dee0e5;background-color:#f6f7fb;text-align:center;padding-top:20px}.cmacs-invisible-font{color:transparent!important}.cmacs-signature-sign-input,.cmacs-signature-sign-input:focus,.cmacs-signature-sign-input:hover{border-radius:unset;width:89%!important;max-width:89%;overflow:hidden;margin:0 auto;text-overflow:clip;white-space:nowrap;border-bottom:1px solid #dee0e5;background-color:#f6f7fb;font-family:AlexBrush,AlexBrush-Regular;font-size:96px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1;letter-spacing:normal;color:#3b3f46}.cmacs-signature-text{font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;color:#656c79!important}.cmacs-signature-text-format{margin-top:15px;margin-bottom:25px}.cmacs-signature-modal .ant-modal-body{height:490px!important}.cmacs-signature-tabset .ant-tabs-bar{border-color:transparent!important}.cmacs-width-100{width:100%}.cmacs-signature-pad{height:231px;padding-top:0}.cmacs-signature-pad signature-pad{border-bottom:1px solid #bec4cd}.cmacs-no-margin{margin:0!important}.cmacs-signature-upload-area .ant-upload.ant-upload-drag{height:231px}.cmacs-signature-upload-text{font-family:Roboto,Roboto-Regular;font-size:14px;font-weight:400;font-stretch:normal;font-style:normal;line-height:.86;letter-spacing:normal;color:#97a0ae;margin:20px 0!important}"]
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
        signaturePadOptions: [{ type: Input }],
        onsubmit: [{ type: Output }],
        signaturePad: [{ type: ViewChild, args: [SignaturePad,] }],
        ondrawend: [{ type: Output }]
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
    CmacsSignatureComponent.prototype.current;
    /** @type {?} */
    CmacsSignatureComponent.prototype.files;
    /** @type {?} */
    CmacsSignatureComponent.prototype.i18n;
    /** @type {?} */
    CmacsSignatureComponent.prototype.oncancel;
    /** @type {?} */
    CmacsSignatureComponent.prototype.signaturePadOptions;
    /** @type {?} */
    CmacsSignatureComponent.prototype.onsubmit;
    /** @type {?} */
    CmacsSignatureComponent.prototype.signaturePad;
    /** @type {?} */
    CmacsSignatureComponent.prototype.ondrawend;
    /** @type {?} */
    CmacsSignatureComponent.prototype.beforeUpload;
    /** @type {?} */
    CmacsSignatureComponent.prototype.showUploadList;
    /** @type {?} */
    CmacsSignatureComponent.prototype.previewImage;
    /** @type {?} */
    CmacsSignatureComponent.prototype.previewVisible;
    /** @type {?} */
    CmacsSignatureComponent.prototype.handlePreview;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2lnbmF0dXJlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mtc2lnbmF0dXJlL2NtYWNzLXNpZ25hdHVyZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQ3RDLGlCQUFpQixFQUFFLFNBQVMsRUFDN0IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLFdBQVcsRUFBYSxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFbkUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sd0NBQXdDLENBQUM7O0FBRTNFLE1BQU0sS0FBTyxzQkFBc0IsR0FBRztJQUNwQyxvQkFBb0IsRUFBRSxvQkFBb0I7SUFDMUMsa0JBQWtCLEVBQUUsa0JBQWtCO0lBQ3RDLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLGlCQUFpQixFQUFFLGlCQUFpQjtJQUNwQyxXQUFXLEVBQUUsV0FBVztJQUN4QixNQUFNLEVBQUUsTUFBTTtJQUNkLE1BQU0sRUFBRSxNQUFNO0lBQ2QsT0FBTyxFQUFFLE9BQU87SUFDaEIsNkRBQTZELEVBQUUsNkRBQTZEO0lBQzVILG9EQUFvRCxFQUFFLG9EQUFvRDtJQUMxRyxXQUFXLEVBQUUsV0FBVztJQUN4QiwwQkFBMEIsRUFBRSwwQkFBMEI7SUFDdEQsaUJBQWlCLEVBQUUsaUJBQWlCO0NBQ3JDO0FBRUQ7SUF5QkUsaUNBQW9CLEVBQWUsRUFBVSxHQUF3QjtRQUFyRSxpQkFJQztRQUptQixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBcUI7UUFmckUsZUFBVSxHQUFHLEtB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aEUsK0NBQW9EOztJQUNwRCw0Q0FBaUU7O0lBWWpFLCtDQUdFOztJQUVGLGlEQUlFOztJQUVGLCtDQUFzQzs7SUFDdEMsaURBQXVCOztJQUV2QixnREFHRTs7Ozs7SUEzQlUscUNBQXVCOzs7OztJQUFFLHNDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sIFZpZXdDaGlsZFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnN9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTaWduYXR1cmVQYWQgfSBmcm9tICdhbmd1bGFyMi1zaWduYXR1cmVwYWQvc2lnbmF0dXJlLXBhZCc7XHJcbmltcG9ydCB7VXBsb2FkQ2hhbmdlUGFyYW0sIFVwbG9hZEZpbGUsIFVwbG9hZFhIUkFyZ3N9IGZyb20gXCJuZy16b3Jyby1hbnRkXCI7XHJcbmltcG9ydCB7Q21hY3NNZXNzYWdlU2VydmljZX0gZnJvbSBcIi4uL2NtYWNzLW1lc3NhZ2UvY21hY3MtbWVzc2FnZS5zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTkFUVVJFX0xPQ0FMSVpBVElPTiA9IHtcclxuICAnQ2xpY2sgaGVyZSB0byBzaWduJzogJ0NsaWNrIGhlcmUgdG8gc2lnbicsXHJcbiAgJ1NpZ24gdG8gQ29tcGxldGUnOiAnU2lnbiB0byBDb21wbGV0ZScsXHJcbiAgJ0NhbmNlbCc6ICdDYW5jZWwnLFxyXG4gICdWZXJpZnknOiAnVmVyaWZ5JyxcclxuICAnRW50ZXIgWW91ciBOYW1lJzogJ0VudGVyIFlvdXIgTmFtZScsXHJcbiAgJ1RleHQgSGVyZSc6ICdUZXh0IEhlcmUnLFxyXG4gICdUeXBlJzogJ1R5cGUnLFxyXG4gICdEcmF3JzogJ0RyYXcnLFxyXG4gICdJbWFnZSc6ICdJbWFnZScsXHJcbiAgJ0ksIFVzZXIgRnVsbCBOYW1lLCBoYXZlIHJldmlld2VkIGFuZCBjb21wbGV0ZWQgdGhpcyByZXBvcnQuJzogJ0ksIFVzZXIgRnVsbCBOYW1lLCBoYXZlIHJldmlld2VkIGFuZCBjb21wbGV0ZWQgdGhpcyByZXBvcnQuJyxcclxuICAnU2VsZWN0IGhlcmUgdG8gc2F2ZSB5b3VyIHNpZ25hdHVyZSBmb3IgZnV0dXJlIHVzZS4nOiAnU2VsZWN0IGhlcmUgdG8gc2F2ZSB5b3VyIHNpZ25hdHVyZSBmb3IgZnV0dXJlIHVzZS4nLFxyXG4gICdTaWduYXR1cmUnOiAnU2lnbmF0dXJlJyxcclxuICAnRHJhZyAmIERyb3AgRmlsZSBIZXJlIG9yJzogJ0RyYWcgJiBEcm9wIEZpbGUgSGVyZSBvcicsXHJcbiAgJ0Jyb3dzZSBDb21wdXRlcic6ICdCcm93c2UgQ29tcHV0ZXInXHJcbn07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLXNpZ25hdHVyZScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1NpZ25hdHVyZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXNpZ25hdHVyZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1zaWduYXR1cmUuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1NpZ25hdHVyZUNvbXBvbmVudCB7XHJcblxyXG4gIF9pc1Zpc2libGUgPSBmYWxzZTtcclxuICBmb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuICBzYXZlU2lnbmF0dXJlID0gdHJ1ZTtcclxuICBfaTE4biA9IFNJR05BVFVSRV9MT0NBTElaQVRJT047XHJcbiAgY3VycmVudCA9IDA7XHJcbiAgZmlsZXMgPSBbXTtcclxuXHJcbiAgQElucHV0KCkgaTE4bjogYW55ID0gU0lHTkFUVVJFX0xPQ0FMSVpBVElPTjtcclxuXHJcbiAgQE91dHB1dCgpIG9uY2FuY2VsOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgQElucHV0KCkgc2lnbmF0dXJlUGFkT3B0aW9uczogT2JqZWN0ID0ge307XHJcbiAgQE91dHB1dCgpIG9uc3VibWl0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBWaWV3Q2hpbGQoU2lnbmF0dXJlUGFkKSBzaWduYXR1cmVQYWQ6IFNpZ25hdHVyZVBhZDtcclxuICBAT3V0cHV0KCkgb25kcmF3ZW5kOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSBtc2c6IENtYWNzTWVzc2FnZVNlcnZpY2UpIHtcclxuICAgIHRoaXMuZm9ybUdyb3VwID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgIHVzZXJuYW1lOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5zaWduYXR1cmVQYWQuY2xlYXIoKTtcclxuICB9XHJcblxyXG4gIGJlZm9yZVVwbG9hZCA9IChmaWxlOiBVcGxvYWRGaWxlKTogYm9vbGVhbiA9PiB7XHJcbiAgICB0aGlzLmZpbGVzID0gW10uY29uY2F0KGZpbGUpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH07XHJcblxyXG4gIHNob3dVcGxvYWRMaXN0ID0ge1xyXG4gICAgc2hvd1ByZXZpZXdJY29uOiB0cnVlLFxyXG4gICAgc2hvd1JlbW92ZUljb246IHRydWUsXHJcbiAgICBoaWRlUHJldmlld0ljb25Jbk5vbkltYWdlOiB0cnVlXHJcbiAgfTtcclxuXHJcbiAgcHJldmlld0ltYWdlOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAnJztcclxuICBwcmV2aWV3VmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICBoYW5kbGVQcmV2aWV3ID0gKGZpbGU6IFVwbG9hZEZpbGUpID0+IHtcclxuICAgIHRoaXMucHJldmlld0ltYWdlID0gZmlsZS51cmwgfHwgZmlsZS50aHVtYlVybDtcclxuICAgIHRoaXMucHJldmlld1Zpc2libGUgPSB0cnVlO1xyXG4gIH07XHJcblxyXG5cclxuICBpc1ZhbGlkKCkge1xyXG4gICAgc3dpdGNoICh0aGlzLmN1cnJlbnQpIHtcclxuICAgICAgY2FzZSAwOlxyXG4gICAgICAgIHJldHVybiAhdGhpcy5mb3JtR3JvdXAudmFsaWQ7XHJcbiAgICAgIGNhc2UgMTpcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgY2FzZSAyOlxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ3VycmVudChpZHgpIHtcclxuICAgIHRoaXMuY3VycmVudCA9IGlkeDtcclxuICB9XHJcblxyXG4gIGRyYXdDb21wbGV0ZSgpIHtcclxuICAgIHRoaXMub25kcmF3ZW5kLmVtaXQodGhpcy5zaWduYXR1cmVQYWQudG9EYXRhVVJMKCkpO1xyXG4gIH1cclxuXHJcbiAgb3Blbk1vZGFsKCkge1xyXG4gICAgdGhpcy5faXNWaXNpYmxlID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNhbmNlbCgpIHtcclxuICAgIHRoaXMuX2lzVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5vbmNhbmNlbC5lbWl0KHRoaXMuX2lzVmlzaWJsZSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVPaygpIHtcclxuICAgIHRoaXMub25zdWJtaXQuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tQcmVzc2VkS2V5cygkZXZlbnQpIHtcclxuICAgIGlmICgkZXZlbnQud2hpY2ggPT09IDkwICYmICRldmVudC5jdHJsS2V5KSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLnNpZ25hdHVyZVBhZC50b0RhdGEoKTtcclxuICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICBkYXRhLnBvcCgpO1xyXG4gICAgICAgIHRoaXMuc2lnbmF0dXJlUGFkLmZyb21EYXRhKGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDaGFuZ2UoeyBmaWxlLCBmaWxlTGlzdCB9OiBVcGxvYWRDaGFuZ2VQYXJhbSk6IHZvaWQge1xyXG4gICAgY29uc3Qgc3RhdHVzID0gZmlsZS5zdGF0dXM7XHJcbiAgICBpZiAoc3RhdHVzICE9PSAndXBsb2FkaW5nJykge1xyXG4gICAgICBjb25zb2xlLmxvZyhmaWxlLCBmaWxlTGlzdCk7XHJcbiAgICB9XHJcbiAgICBpZiAoc3RhdHVzID09PSAnZG9uZScpIHtcclxuICAgICAgdGhpcy5tc2cuc3VjY2VzcyhgJHtmaWxlLm5hbWV9IGZpbGUgdXBsb2FkZWQgc3VjY2Vzc2Z1bGx5LmApO1xyXG4gICAgfSBlbHNlIGlmIChzdGF0dXMgPT09ICdlcnJvcicpIHtcclxuICAgICAgdGhpcy5tc2cuZXJyb3IoYCR7ZmlsZS5uYW1lfSBmaWxlIHVwbG9hZCBmYWlsZWQuYCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=