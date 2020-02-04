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
        this.signaturePadOptions = {
            'dotSize': 0.4,
            'canvasWidth': 480,
            'canvasHeight': 126
        };
        this.files = [];
        this.i18n = SIGNATURE_LOCALIZATION;
        this.oncancel = new EventEmitter();
        this.onsubmit = new EventEmitter();
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
                    template: "<div class=\"cmacs-signature-wrapper\">\r\n  <i class=\"cmacs-signature-close-icon iconUISmall-Excel\"></i>\r\n  <span class=\"cmacs-signature-placeholder\"\r\n        (click)=\"openModal()\">\r\n    {{i18n['Click here to sign'] ? i18n['Click here to sign'] : _i18n['Click here to sign']}}\r\n  </span>\r\n</div>\r\n\r\n<cmacs-modal\r\n  class=\"cmacs-signature-modal\"\r\n  modalType=\"helpfulTipsNoPanel\"\r\n  [(visible)]=\"_isVisible\"\r\n  [width]=\"'570px'\"\r\n  title=\"{{i18n['Sign to Complete'] ? i18n['Sign to Complete'] : _i18n['Sign to Complete']}}\"\r\n  (onCancel)=\"handleCancel()\"\r\n  [footer]=\"modalFooter\">\r\n\r\n  <div cmacs-modal-helpfulTips-no-panel-center>\r\n      <cmacs-tabset class=\"cmacs-signature-tabset cmacs-width-100\"\r\n                    [selectedIndex]=\"current\"\r\n                    (selectedIndexChange)=\"updateCurrent($event)\">\r\n\r\n        <!-----------------Type pane----------------->\r\n        <cmacs-tab title=\"{{i18n['Type'] ? i18n['Type'] : _i18n['Type']}}\" >\r\n          <form cmacs-form [formGroup]=\"formGroup\">\r\n              <cmacs-form-item>\r\n                <cmacs-form-label cmacsRequired>\r\n                  {{i18n['Enter Your Name'] ? i18n['Enter Your Name'] : _i18n['Enter Your Name']}}\r\n                </cmacs-form-label>\r\n                <cmacs-form-control>\r\n                  <input class=\"cmacs-signature-username-input\" cmacs-input [formControlName]=\"'username'\"\r\n                         placeholder=\"{{i18n['Text Here'] ? i18n['Text Here'] : _i18n['Text Here']}}\"\r\n                  />\r\n                </cmacs-form-control>\r\n              </cmacs-form-item>\r\n\r\n              <div class=\"cmacs-signature-sign-wrapper\">\r\n                <div class=\"cmacs-signature-sign-input\" *ngIf=\"formGroup.get('username')!.value.length\">{{formGroup.get('username')!.value}}</div>\r\n                <div class=\"cmacs-signature-sign-input cmacs-invisible-font\" *ngIf=\"!formGroup.get('username')!.value.length\">Test</div>\r\n              </div>\r\n          </form>\r\n\r\n          <div class=\"cmacs-signature-text cmacs-signature-text-format\">\r\n            {{i18n['I, User Full Name, have reviewed and completed this report.'] ? i18n['I, User Full Name, have reviewed and completed this report.']\r\n            : _i18n['I, User Full Name, have reviewed and completed this report.']}}\r\n          </div>\r\n          <label class=\"cmacs-signature-text\" cmacs-checkbox [(ngModel)]=\"saveSignature\">\r\n            {{i18n['Select here to save your signature for future use.'] ? i18n['Select here to save your signature for future use.']\r\n            : _i18n['Select here to save your signature for future use.']}}\r\n          </label>\r\n        </cmacs-tab>\r\n        <!-----------------Type pane----------------->\r\n\r\n        <!-----------------Draw pane----------------->\r\n        <cmacs-tab title=\"{{i18n['Draw'] ? i18n['Draw'] : _i18n['Draw']}}\">\r\n\r\n          <cmacs-form-item class=\"cmacs-no-margin\">\r\n            <cmacs-form-label cmacsRequired>\r\n              {{i18n['Signature'] ? i18n['Signature'] : _i18n['Signature']}}\r\n            </cmacs-form-label>\r\n          </cmacs-form-item>\r\n          <div\r\n            class=\"cmacs-signature-sign-wrapper cmacs-signature-pad\"\r\n            tabindex='1'\r\n            (keydown)=\"checkPressedKeys($event)\"\r\n          >\r\n            <signature-pad [options]=\"signaturePadOptions\"\r\n                           (onEndEvent)=\"drawComplete()\"\r\n            ></signature-pad>\r\n          </div>\r\n          <div class=\"cmacs-signature-text cmacs-signature-text-format\">\r\n            {{i18n['I, User Full Name, have reviewed and completed this report.'] ? i18n['I, User Full Name, have reviewed and completed this report.']\r\n            : _i18n['I, User Full Name, have reviewed and completed this report.']}}\r\n          </div>\r\n          <label class=\"cmacs-signature-text\" cmacs-checkbox [(ngModel)]=\"saveSignature\">\r\n            {{i18n['Select here to save your signature for future use.'] ? i18n['Select here to save your signature for future use.']\r\n            : _i18n['Select here to save your signature for future use.']}}\r\n          </label>\r\n        </cmacs-tab>\r\n        <!-----------------Draw pane----------------->\r\n\r\n        <!-----------------Image pane----------------->\r\n        <cmacs-tab title=\"{{i18n['Image'] ? i18n['Image'] : _i18n['Image']}}\">\r\n          <cmacs-form-item class=\"cmacs-no-margin\">\r\n            <cmacs-form-label cmacsRequired>\r\n              {{i18n['Signature'] ? i18n['Signature'] : _i18n['Signature']}}\r\n            </cmacs-form-label>\r\n          </cmacs-form-item>\r\n\r\n          <nz-upload\r\n            class=\"cmacs-signature-upload-area\"\r\n            nzType=\"drag\"\r\n            [nzMultiple]=\"false\"\r\n            [(nzFileList)]=\"files\"\r\n            [nzShowButton]=\"files.length < 1\"\r\n            [nzBeforeUpload]=\"beforeUpload\"\r\n            nzAction=\"https://jsonplaceholder.typicode.com/posts/\"\r\n            [nzShowUploadList]=\"showUploadList\"\r\n            [nzPreview]=\"handlePreview\"\r\n          >\r\n            <span class=\"ant-upload-drag-icon\">\r\n              <img src=\"/assets/upload-computer.png\">\r\n            </span>\r\n            <p class=\"cmacs-signature-upload-text\">\r\n              {{i18n['Drag & Drop File Here or'] ? i18n['Drag & Drop File Here or']\r\n              : _i18n['Drag & Drop File Here or']}}\r\n            </p>\r\n            <button cmacs-button>{{i18n['Browse Computer'] ? i18n['Browse Computer']\r\n              : _i18n['Browse Computer']}}</button>\r\n          </nz-upload>\r\n\r\n          <nz-modal\r\n            [nzVisible]=\"previewVisible\"\r\n            [nzContent]=\"modalContent\"\r\n            [nzFooter]=\"null\"\r\n            (nzOnCancel)=\"previewVisible = false\"\r\n          >\r\n            <ng-template #modalContent>\r\n              <img [src]=\"previewImage\" [ngStyle]=\"{ width: '100%' }\" />\r\n            </ng-template>\r\n          </nz-modal>\r\n\r\n          <div class=\"cmacs-signature-text cmacs-signature-text-format\">\r\n            {{i18n['I, User Full Name, have reviewed and completed this report.'] ? i18n['I, User Full Name, have reviewed and completed this report.']\r\n            : _i18n['I, User Full Name, have reviewed and completed this report.']}}\r\n          </div>\r\n          <label class=\"cmacs-signature-text\" cmacs-checkbox [(ngModel)]=\"saveSignature\">\r\n            {{i18n['Select here to save your signature for future use.'] ? i18n['Select here to save your signature for future use.']\r\n            : _i18n['Select here to save your signature for future use.']}}\r\n          </label>\r\n        </cmacs-tab>\r\n        <!-----------------Image pane----------------->\r\n      </cmacs-tabset>\r\n  </div>\r\n\r\n</cmacs-modal>\r\n\r\n<ng-template #modalFooter>\r\n  <button cmacs-button type=\"default\" ghost style=\"float: left;\" (click)=\"handleCancel()\">\r\n    {{i18n['Cancel'] ? i18n['Cancel'] : _i18n['Cancel']}}\r\n  </button>\r\n  <button cmacs-button ghost type=\"primary\" [disabled]=\"isValid()\" (click)=\"handleOk()\">\r\n    <span>{{i18n['Verify'] ? i18n['Verify'] : _i18n['Verify']}}</span>\r\n  </button>\r\n</ng-template>\r\n",
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    styles: [".cmacs-signature-wrapper{background-color:#fff;height:58px;border-radius:3px;border:1px solid #dee0e5;width:100%;text-align:center}.cmacs-signature-placeholder{font-family:Roboto-Regular;font-size:14px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.71;letter-spacing:normal;color:#2a7cff;top:calc(50% - 11px);position:relative}.cmacs-signature-placeholder:hover{cursor:pointer}.cmacs-signature-close-icon{font-family:Roboto-Regular;font-size:18px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.11;letter-spacing:normal;color:#bec4cd;top:calc(50% - 9px);position:relative}.cmacs-signature-username-input{width:225px!important;display:block!important}.cmacs-signature-sign-wrapper{height:177px;border-radius:3px;border:1px solid #dee0e5;background-color:#f6f7fb;text-align:center;padding-top:20px}.cmacs-invisible-font{color:transparent!important}.cmacs-signature-sign-input,.cmacs-signature-sign-input:focus,.cmacs-signature-sign-input:hover{border-radius:unset;width:89%!important;max-width:89%;overflow:hidden;margin:0 auto;text-overflow:clip;white-space:nowrap;border-bottom:1px solid #dee0e5;background-color:#f6f7fb;font-family:AlexBrush,AlexBrush-Regular;font-size:96px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1;letter-spacing:normal;color:#3b3f46}.cmacs-signature-text{font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;color:#656c79!important}.cmacs-signature-text-format{margin-top:15px;margin-bottom:25px}.cmacs-signature-modal .ant-modal-body{height:490px!important}.cmacs-signature-tabset .ant-tabs-bar{border-color:transparent!important}.cmacs-width-100{width:100%}.cmacs-signature-pad{height:231px;padding-top:0}.cmacs-signature-pad signature-pad{border-bottom:1px solid #bec4cd}.cmacs-no-margin{margin:0!important}.cmacs-signature-upload-area .ant-upload.ant-upload-drag{height:231px}.cmacs-signature-upload-text{font-family:Roboto,Roboto-Regular;font-size:14px;font-weight:400;font-stretch:normal;font-style:normal;line-height:.86;letter-spacing:normal;color:#97a0ae;margin:20px 0!important}"]
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
    CmacsSignatureComponent.prototype.current;
    /** @type {?} */
    CmacsSignatureComponent.prototype.signaturePadOptions;
    /** @type {?} */
    CmacsSignatureComponent.prototype.files;
    /** @type {?} */
    CmacsSignatureComponent.prototype.i18n;
    /** @type {?} */
    CmacsSignatureComponent.prototype.oncancel;
    /** @type {?} */
    CmacsSignatureComponent.prototype.onsubmit;
    /** @type {?} */
    CmacsSignatureComponent.prototype.signaturePad;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2lnbmF0dXJlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mtc2lnbmF0dXJlL2NtYWNzLXNpZ25hdHVyZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQ3RDLGlCQUFpQixFQUFFLFNBQVMsRUFDN0IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLFdBQVcsRUFBYSxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFbkUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sd0NBQXdDLENBQUM7O0FBRTNFLE1BQU0sS0FBTyxzQkFBc0IsR0FBRztJQUNwQyxvQkFBb0IsRUFBRSxvQkFBb0I7SUFDMUMsa0JBQWtCLEVBQUUsa0JBQWtCO0lBQ3RDLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLGlCQUFpQixFQUFFLGlCQUFpQjtJQUNwQyxXQUFXLEVBQUUsV0FBVztJQUN4QixNQUFNLEVBQUUsTUFBTTtJQUNkLE1BQU0sRUFBRSxNQUFNO0lBQ2QsT0FBTyxFQUFFLE9BQU87SUFDaEIsNkRBQTZELEVBQUUsNkRBQTZEO0lBQzVILG9EQUFvRCxFQUFFLG9EQUFvRDtJQUMxRyxXQUFXLEVBQUUsV0FBVztJQUN4QiwwQkFBMEIsRUFBRSwwQkFBMEI7SUFDdEQsaUJBQWlCLEVBQUUsaUJBQWlCO0NBQ3JDO0FBRUQ7SUE0QkUsaUNBQW9CLEVBQWUsRUFBVSxHQUF3QjtRQUFyRSxpQkFJQztRQUptQixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBcUI7UUFsQnJFLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFFbkIsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsVUFBSyxHQUFHLHNCQUFzQixDQUFDO1FBQy9CLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFDWix3QkFBbUIsR0FBVztZQUM1QixTQUFTLEVBQUUsR0FBRztZQUNkLGFBQWEsRUFBRSxHQUFHO1lBQ2xCLGNBQWMsRUFBRSxHQUFHO1NBQ3BCLENBQUM7UUFDRixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBRUYsU0FBSSxHQUFRLHNCQUFzQixDQUFDO1FBRWxDLGFBQVEsR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUM5RCxhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFhaEUsaUJBQVk7Ozs7UUFBRyxVQUFDLElBQWdCO1lBQzlCLEtBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QixPQUFPLEtBQUssQ0FBQztRQUNmLENBQUMsRUFBQztRQUVGLG1CQUFjLEdBQUc7WUFDZixlQUFlLEVBQUUsSUFBSTtZQUNyQixjQUFjLEVBQUUsSUFBSTtZQUNwQix5QkFBeUIsRUFBRSxJQUFJO1NBQ2hDLENBQUM7UUFFRixpQkFBWSxHQUF1QixFQUFFLENBQUM7UUFDdEMsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFFdkIsa0JBQWE7Ozs7UUFBRyxVQUFDLElBQWdCO1lBQy9CLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQzlDLEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzdCLENBQUMsRUFBQztRQTFCQSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQzdCLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN0QyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsaURBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7O0lBc0JELHlDQUFPOzs7SUFBUDtRQUNFLFFBQVEsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNwQixLQUFLLENBQUM7Z0JBQ0osT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQy9CLEtBQUssQ0FBQztnQkFDSixPQUFPLElBQUksQ0FBQztZQUNkLEtBQUssQ0FBQztnQkFDSixPQUFPLElBQUksQ0FBQztZQUNkO2dCQUNFLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7SUFDSCxDQUFDOzs7OztJQUVELCtDQUFhOzs7O0lBQWIsVUFBYyxHQUFHO1FBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELDhDQUFZOzs7SUFBWjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFFRCwyQ0FBUzs7O0lBQVQ7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsOENBQVk7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCwwQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsa0RBQWdCOzs7O0lBQWhCLFVBQWlCLE1BQU07UUFDckIsSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLEVBQUUsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFOztnQkFDbkMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFO1lBQ3ZDLElBQUksSUFBSSxFQUFFO2dCQUNSLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNsQztTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFFRCw4Q0FBWTs7OztJQUFaLFVBQWEsRUFBcUM7WUFBbkMsY0FBSSxFQUFFLHNCQUFROztZQUNyQixNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU07UUFDMUIsSUFBSSxNQUFNLEtBQUssV0FBVyxFQUFFO1lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQzdCO1FBQ0QsSUFBSSxNQUFNLEtBQUssTUFBTSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFJLElBQUksQ0FBQyxJQUFJLGlDQUE4QixDQUFDLENBQUM7U0FDOUQ7YUFBTSxJQUFJLE1BQU0sS0FBSyxPQUFPLEVBQUU7WUFDN0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUksSUFBSSxDQUFDLElBQUkseUJBQXNCLENBQUMsQ0FBQztTQUNwRDtJQUNILENBQUM7O2dCQWhIRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsd3ZPQUErQztvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7O2lCQUUzQjs7OztnQkE3Qk8sV0FBVztnQkFHWCxtQkFBbUI7Ozt1QkF5Q3hCLEtBQUs7MkJBRUwsTUFBTTsyQkFDTixNQUFNOytCQUNOLFNBQVMsU0FBQyxZQUFZOztJQXdGekIsOEJBQUM7Q0FBQSxBQWxIRCxJQWtIQztTQTFHWSx1QkFBdUI7OztJQUVsQyw2Q0FBbUI7O0lBQ25CLDRDQUFxQjs7SUFDckIsZ0RBQXFCOztJQUNyQix3Q0FBK0I7O0lBQy9CLDBDQUFZOztJQUNaLHNEQUlFOztJQUNGLHdDQUFXOztJQUVYLHVDQUE0Qzs7SUFFNUMsMkNBQXdFOztJQUN4RSwyQ0FBZ0U7O0lBQ2hFLCtDQUFvRDs7SUFZcEQsK0NBR0U7O0lBRUYsaURBSUU7O0lBRUYsK0NBQXNDOztJQUN0QyxpREFBdUI7O0lBRXZCLGdEQUdFOzs7OztJQTNCVSxxQ0FBdUI7Ozs7O0lBQUUsc0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbiwgVmlld0NoaWxkXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9yc30gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFNpZ25hdHVyZVBhZCB9IGZyb20gJ2FuZ3VsYXIyLXNpZ25hdHVyZXBhZC9zaWduYXR1cmUtcGFkJztcclxuaW1wb3J0IHtVcGxvYWRDaGFuZ2VQYXJhbSwgVXBsb2FkRmlsZSwgVXBsb2FkWEhSQXJnc30gZnJvbSBcIm5nLXpvcnJvLWFudGRcIjtcclxuaW1wb3J0IHtDbWFjc01lc3NhZ2VTZXJ2aWNlfSBmcm9tIFwiLi4vY21hY3MtbWVzc2FnZS9jbWFjcy1tZXNzYWdlLnNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOQVRVUkVfTE9DQUxJWkFUSU9OID0ge1xyXG4gICdDbGljayBoZXJlIHRvIHNpZ24nOiAnQ2xpY2sgaGVyZSB0byBzaWduJyxcclxuICAnU2lnbiB0byBDb21wbGV0ZSc6ICdTaWduIHRvIENvbXBsZXRlJyxcclxuICAnQ2FuY2VsJzogJ0NhbmNlbCcsXHJcbiAgJ1ZlcmlmeSc6ICdWZXJpZnknLFxyXG4gICdFbnRlciBZb3VyIE5hbWUnOiAnRW50ZXIgWW91ciBOYW1lJyxcclxuICAnVGV4dCBIZXJlJzogJ1RleHQgSGVyZScsXHJcbiAgJ1R5cGUnOiAnVHlwZScsXHJcbiAgJ0RyYXcnOiAnRHJhdycsXHJcbiAgJ0ltYWdlJzogJ0ltYWdlJyxcclxuICAnSSwgVXNlciBGdWxsIE5hbWUsIGhhdmUgcmV2aWV3ZWQgYW5kIGNvbXBsZXRlZCB0aGlzIHJlcG9ydC4nOiAnSSwgVXNlciBGdWxsIE5hbWUsIGhhdmUgcmV2aWV3ZWQgYW5kIGNvbXBsZXRlZCB0aGlzIHJlcG9ydC4nLFxyXG4gICdTZWxlY3QgaGVyZSB0byBzYXZlIHlvdXIgc2lnbmF0dXJlIGZvciBmdXR1cmUgdXNlLic6ICdTZWxlY3QgaGVyZSB0byBzYXZlIHlvdXIgc2lnbmF0dXJlIGZvciBmdXR1cmUgdXNlLicsXHJcbiAgJ1NpZ25hdHVyZSc6ICdTaWduYXR1cmUnLFxyXG4gICdEcmFnICYgRHJvcCBGaWxlIEhlcmUgb3InOiAnRHJhZyAmIERyb3AgRmlsZSBIZXJlIG9yJyxcclxuICAnQnJvd3NlIENvbXB1dGVyJzogJ0Jyb3dzZSBDb21wdXRlcidcclxufTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3Mtc2lnbmF0dXJlJyxcclxuICBleHBvcnRBczogJ2NtYWNzU2lnbmF0dXJlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mtc2lnbmF0dXJlLmNvbXBvbmVudC5odG1sJyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXNpZ25hdHVyZS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzU2lnbmF0dXJlQ29tcG9uZW50IHtcclxuXHJcbiAgX2lzVmlzaWJsZSA9IGZhbHNlO1xyXG4gIGZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG4gIHNhdmVTaWduYXR1cmUgPSB0cnVlO1xyXG4gIF9pMThuID0gU0lHTkFUVVJFX0xPQ0FMSVpBVElPTjtcclxuICBjdXJyZW50ID0gMDtcclxuICBzaWduYXR1cmVQYWRPcHRpb25zOiBPYmplY3QgPSB7XHJcbiAgICAnZG90U2l6ZSc6IDAuNCxcclxuICAgICdjYW52YXNXaWR0aCc6IDQ4MCxcclxuICAgICdjYW52YXNIZWlnaHQnOiAxMjZcclxuICB9O1xyXG4gIGZpbGVzID0gW107XHJcblxyXG4gIEBJbnB1dCgpIGkxOG46IGFueSA9IFNJR05BVFVSRV9MT0NBTElaQVRJT047XHJcblxyXG4gIEBPdXRwdXQoKSBvbmNhbmNlbDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIEBPdXRwdXQoKSBvbnN1Ym1pdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAVmlld0NoaWxkKFNpZ25hdHVyZVBhZCkgc2lnbmF0dXJlUGFkOiBTaWduYXR1cmVQYWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIG1zZzogQ21hY3NNZXNzYWdlU2VydmljZSkge1xyXG4gICAgdGhpcy5mb3JtR3JvdXAgPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgdXNlcm5hbWU6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLnNpZ25hdHVyZVBhZC5jbGVhcigpO1xyXG4gIH1cclxuXHJcbiAgYmVmb3JlVXBsb2FkID0gKGZpbGU6IFVwbG9hZEZpbGUpOiBib29sZWFuID0+IHtcclxuICAgIHRoaXMuZmlsZXMgPSBbXS5jb25jYXQoZmlsZSk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgc2hvd1VwbG9hZExpc3QgPSB7XHJcbiAgICBzaG93UHJldmlld0ljb246IHRydWUsXHJcbiAgICBzaG93UmVtb3ZlSWNvbjogdHJ1ZSxcclxuICAgIGhpZGVQcmV2aWV3SWNvbkluTm9uSW1hZ2U6IHRydWVcclxuICB9O1xyXG5cclxuICBwcmV2aWV3SW1hZ2U6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICcnO1xyXG4gIHByZXZpZXdWaXNpYmxlID0gZmFsc2U7XHJcblxyXG4gIGhhbmRsZVByZXZpZXcgPSAoZmlsZTogVXBsb2FkRmlsZSkgPT4ge1xyXG4gICAgdGhpcy5wcmV2aWV3SW1hZ2UgPSBmaWxlLnVybCB8fCBmaWxlLnRodW1iVXJsO1xyXG4gICAgdGhpcy5wcmV2aWV3VmlzaWJsZSA9IHRydWU7XHJcbiAgfTtcclxuXHJcblxyXG4gIGlzVmFsaWQoKSB7XHJcbiAgICBzd2l0Y2ggKHRoaXMuY3VycmVudCkge1xyXG4gICAgICBjYXNlIDA6XHJcbiAgICAgICAgcmV0dXJuICF0aGlzLmZvcm1Hcm91cC52YWxpZDtcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICBjYXNlIDI6XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDdXJyZW50KGlkeCkge1xyXG4gICAgdGhpcy5jdXJyZW50ID0gaWR4O1xyXG4gIH1cclxuXHJcbiAgZHJhd0NvbXBsZXRlKCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zaWduYXR1cmVQYWQudG9EYXRhVVJMKCkpO1xyXG4gIH1cclxuXHJcbiAgb3Blbk1vZGFsKCkge1xyXG4gICAgdGhpcy5faXNWaXNpYmxlID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNhbmNlbCgpIHtcclxuICAgIHRoaXMuX2lzVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5vbmNhbmNlbC5lbWl0KHRoaXMuX2lzVmlzaWJsZSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVPaygpIHtcclxuICAgIHRoaXMub25zdWJtaXQuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tQcmVzc2VkS2V5cygkZXZlbnQpIHtcclxuICAgIGlmICgkZXZlbnQud2hpY2ggPT09IDkwICYmICRldmVudC5jdHJsS2V5KSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLnNpZ25hdHVyZVBhZC50b0RhdGEoKTtcclxuICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICBkYXRhLnBvcCgpO1xyXG4gICAgICAgIHRoaXMuc2lnbmF0dXJlUGFkLmZyb21EYXRhKGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDaGFuZ2UoeyBmaWxlLCBmaWxlTGlzdCB9OiBVcGxvYWRDaGFuZ2VQYXJhbSk6IHZvaWQge1xyXG4gICAgY29uc3Qgc3RhdHVzID0gZmlsZS5zdGF0dXM7XHJcbiAgICBpZiAoc3RhdHVzICE9PSAndXBsb2FkaW5nJykge1xyXG4gICAgICBjb25zb2xlLmxvZyhmaWxlLCBmaWxlTGlzdCk7XHJcbiAgICB9XHJcbiAgICBpZiAoc3RhdHVzID09PSAnZG9uZScpIHtcclxuICAgICAgdGhpcy5tc2cuc3VjY2VzcyhgJHtmaWxlLm5hbWV9IGZpbGUgdXBsb2FkZWQgc3VjY2Vzc2Z1bGx5LmApO1xyXG4gICAgfSBlbHNlIGlmIChzdGF0dXMgPT09ICdlcnJvcicpIHtcclxuICAgICAgdGhpcy5tc2cuZXJyb3IoYCR7ZmlsZS5uYW1lfSBmaWxlIHVwbG9hZCBmYWlsZWQuYCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=