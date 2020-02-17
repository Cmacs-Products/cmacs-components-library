/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewEncapsulation, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { CmacsMessageService } from "../cmacs-message/cmacs-message.service";
/** @type {?} */
export const SIGNATURE_LOCALIZATION = {
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
export class CmacsSignatureComponent {
    /**
     * @param {?} fb
     * @param {?} msg
     */
    constructor(fb, msg) {
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
        (file) => {
            this.files = [].concat(file);
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
        (file) => {
            this.previewImage = file.url || file.thumbUrl;
            this.previewVisible = true;
        });
        this.formGroup = this.fb.group({
            username: ['', [Validators.required]]
        });
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.signaturePad.clear();
    }
    /**
     * @return {?}
     */
    isValid() {
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
    }
    /**
     * @param {?} idx
     * @return {?}
     */
    updateCurrent(idx) {
        this.current = idx;
    }
    /**
     * @return {?}
     */
    drawComplete() {
        this.ondrawend.emit(this.signaturePad.toDataURL());
    }
    /**
     * @return {?}
     */
    openModal() {
        this._isVisible = true;
    }
    /**
     * @return {?}
     */
    handleCancel() {
        this._isVisible = false;
        this.oncancel.emit(this._isVisible);
    }
    /**
     * @return {?}
     */
    handleOk() {
        this.onsubmit.emit();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    checkPressedKeys($event) {
        if ($event.which === 90 && $event.ctrlKey) {
            /** @type {?} */
            const data = this.signaturePad.toData();
            if (data) {
                data.pop();
                this.signaturePad.fromData(data);
            }
        }
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    handleChange({ file, fileList }) {
        /** @type {?} */
        const status = file.status;
        if (status !== 'uploading') {
            console.log(file, fileList);
        }
        if (status === 'done') {
            this.msg.success(`${file.name} file uploaded successfully.`);
        }
        else if (status === 'error') {
            this.msg.error(`${file.name} file upload failed.`);
        }
    }
}
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
CmacsSignatureComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: CmacsMessageService }
];
CmacsSignatureComponent.propDecorators = {
    i18n: [{ type: Input }],
    oncancel: [{ type: Output }],
    signaturePadOptions: [{ type: Input }],
    onsubmit: [{ type: Output }],
    signaturePad: [{ type: ViewChild, args: [SignaturePad,] }],
    ondrawend: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2lnbmF0dXJlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mtc2lnbmF0dXJlL2NtYWNzLXNpZ25hdHVyZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQ3RDLGlCQUFpQixFQUFFLFNBQVMsRUFDN0IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLFdBQVcsRUFBYSxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFbkUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sd0NBQXdDLENBQUM7O0FBRTNFLE1BQU0sT0FBTyxzQkFBc0IsR0FBRztJQUNwQyxvQkFBb0IsRUFBRSxvQkFBb0I7SUFDMUMsa0JBQWtCLEVBQUUsa0JBQWtCO0lBQ3RDLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLGlCQUFpQixFQUFFLGlCQUFpQjtJQUNwQyxXQUFXLEVBQUUsV0FBVztJQUN4QixNQUFNLEVBQUUsTUFBTTtJQUNkLE1BQU0sRUFBRSxNQUFNO0lBQ2QsT0FBTyxFQUFFLE9BQU87SUFDaEIsNkRBQTZELEVBQUUsNkRBQTZEO0lBQzVILG9EQUFvRCxFQUFFLG9EQUFvRDtJQUMxRyxXQUFXLEVBQUUsV0FBVztJQUN4QiwwQkFBMEIsRUFBRSwwQkFBMEI7SUFDdEQsaUJBQWlCLEVBQUUsaUJBQWlCO0NBQ3JDO0FBVUQsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7SUFpQmxDLFlBQW9CLEVBQWUsRUFBVSxHQUF3QjtRQUFqRCxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBcUI7UUFmckUsZUFB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QUdFOzs7OztJQTNCVSxxQ0FBdUI7Ozs7O0lBQUUsc0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbiwgVmlld0NoaWxkXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9yc30gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFNpZ25hdHVyZVBhZCB9IGZyb20gJ2FuZ3VsYXIyLXNpZ25hdHVyZXBhZC9zaWduYXR1cmUtcGFkJztcclxuaW1wb3J0IHtVcGxvYWRDaGFuZ2VQYXJhbSwgVXBsb2FkRmlsZSwgVXBsb2FkWEhSQXJnc30gZnJvbSBcIm5nLXpvcnJvLWFudGRcIjtcclxuaW1wb3J0IHtDbWFjc01lc3NhZ2VTZXJ2aWNlfSBmcm9tIFwiLi4vY21hY3MtbWVzc2FnZS9jbWFjcy1tZXNzYWdlLnNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOQVRVUkVfTE9DQUxJWkFUSU9OID0ge1xyXG4gICdDbGljayBoZXJlIHRvIHNpZ24nOiAnQ2xpY2sgaGVyZSB0byBzaWduJyxcclxuICAnU2lnbiB0byBDb21wbGV0ZSc6ICdTaWduIHRvIENvbXBsZXRlJyxcclxuICAnQ2FuY2VsJzogJ0NhbmNlbCcsXHJcbiAgJ1ZlcmlmeSc6ICdWZXJpZnknLFxyXG4gICdFbnRlciBZb3VyIE5hbWUnOiAnRW50ZXIgWW91ciBOYW1lJyxcclxuICAnVGV4dCBIZXJlJzogJ1RleHQgSGVyZScsXHJcbiAgJ1R5cGUnOiAnVHlwZScsXHJcbiAgJ0RyYXcnOiAnRHJhdycsXHJcbiAgJ0ltYWdlJzogJ0ltYWdlJyxcclxuICAnSSwgVXNlciBGdWxsIE5hbWUsIGhhdmUgcmV2aWV3ZWQgYW5kIGNvbXBsZXRlZCB0aGlzIHJlcG9ydC4nOiAnSSwgVXNlciBGdWxsIE5hbWUsIGhhdmUgcmV2aWV3ZWQgYW5kIGNvbXBsZXRlZCB0aGlzIHJlcG9ydC4nLFxyXG4gICdTZWxlY3QgaGVyZSB0byBzYXZlIHlvdXIgc2lnbmF0dXJlIGZvciBmdXR1cmUgdXNlLic6ICdTZWxlY3QgaGVyZSB0byBzYXZlIHlvdXIgc2lnbmF0dXJlIGZvciBmdXR1cmUgdXNlLicsXHJcbiAgJ1NpZ25hdHVyZSc6ICdTaWduYXR1cmUnLFxyXG4gICdEcmFnICYgRHJvcCBGaWxlIEhlcmUgb3InOiAnRHJhZyAmIERyb3AgRmlsZSBIZXJlIG9yJyxcclxuICAnQnJvd3NlIENvbXB1dGVyJzogJ0Jyb3dzZSBDb21wdXRlcidcclxufTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3Mtc2lnbmF0dXJlJyxcclxuICBleHBvcnRBczogJ2NtYWNzU2lnbmF0dXJlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mtc2lnbmF0dXJlLmNvbXBvbmVudC5odG1sJyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXNpZ25hdHVyZS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzU2lnbmF0dXJlQ29tcG9uZW50IHtcclxuXHJcbiAgX2lzVmlzaWJsZSA9IGZhbHNlO1xyXG4gIGZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG4gIHNhdmVTaWduYXR1cmUgPSB0cnVlO1xyXG4gIF9pMThuID0gU0lHTkFUVVJFX0xPQ0FMSVpBVElPTjtcclxuICBjdXJyZW50ID0gMDtcclxuICBmaWxlcyA9IFtdO1xyXG5cclxuICBASW5wdXQoKSBpMThuOiBhbnkgPSBTSUdOQVRVUkVfTE9DQUxJWkFUSU9OO1xyXG5cclxuICBAT3V0cHV0KCkgb25jYW5jZWw6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBASW5wdXQoKSBzaWduYXR1cmVQYWRPcHRpb25zOiBPYmplY3QgPSB7fTtcclxuICBAT3V0cHV0KCkgb25zdWJtaXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQFZpZXdDaGlsZChTaWduYXR1cmVQYWQpIHNpZ25hdHVyZVBhZDogU2lnbmF0dXJlUGFkO1xyXG4gIEBPdXRwdXQoKSBvbmRyYXdlbmQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIG1zZzogQ21hY3NNZXNzYWdlU2VydmljZSkge1xyXG4gICAgdGhpcy5mb3JtR3JvdXAgPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgdXNlcm5hbWU6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLnNpZ25hdHVyZVBhZC5jbGVhcigpO1xyXG4gIH1cclxuXHJcbiAgYmVmb3JlVXBsb2FkID0gKGZpbGU6IFVwbG9hZEZpbGUpOiBib29sZWFuID0+IHtcclxuICAgIHRoaXMuZmlsZXMgPSBbXS5jb25jYXQoZmlsZSk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgc2hvd1VwbG9hZExpc3QgPSB7XHJcbiAgICBzaG93UHJldmlld0ljb246IHRydWUsXHJcbiAgICBzaG93UmVtb3ZlSWNvbjogdHJ1ZSxcclxuICAgIGhpZGVQcmV2aWV3SWNvbkluTm9uSW1hZ2U6IHRydWVcclxuICB9O1xyXG5cclxuICBwcmV2aWV3SW1hZ2U6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICcnO1xyXG4gIHByZXZpZXdWaXNpYmxlID0gZmFsc2U7XHJcblxyXG4gIGhhbmRsZVByZXZpZXcgPSAoZmlsZTogVXBsb2FkRmlsZSkgPT4ge1xyXG4gICAgdGhpcy5wcmV2aWV3SW1hZ2UgPSBmaWxlLnVybCB8fCBmaWxlLnRodW1iVXJsO1xyXG4gICAgdGhpcy5wcmV2aWV3VmlzaWJsZSA9IHRydWU7XHJcbiAgfTtcclxuXHJcblxyXG4gIGlzVmFsaWQoKSB7XHJcbiAgICBzd2l0Y2ggKHRoaXMuY3VycmVudCkge1xyXG4gICAgICBjYXNlIDA6XHJcbiAgICAgICAgcmV0dXJuICF0aGlzLmZvcm1Hcm91cC52YWxpZDtcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICBjYXNlIDI6XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDdXJyZW50KGlkeCkge1xyXG4gICAgdGhpcy5jdXJyZW50ID0gaWR4O1xyXG4gIH1cclxuXHJcbiAgZHJhd0NvbXBsZXRlKCkge1xyXG4gICAgdGhpcy5vbmRyYXdlbmQuZW1pdCh0aGlzLnNpZ25hdHVyZVBhZC50b0RhdGFVUkwoKSk7XHJcbiAgfVxyXG5cclxuICBvcGVuTW9kYWwoKSB7XHJcbiAgICB0aGlzLl9pc1Zpc2libGUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2FuY2VsKCkge1xyXG4gICAgdGhpcy5faXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgICB0aGlzLm9uY2FuY2VsLmVtaXQodGhpcy5faXNWaXNpYmxlKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZU9rKCkge1xyXG4gICAgdGhpcy5vbnN1Ym1pdC5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBjaGVja1ByZXNzZWRLZXlzKCRldmVudCkge1xyXG4gICAgaWYgKCRldmVudC53aGljaCA9PT0gOTAgJiYgJGV2ZW50LmN0cmxLZXkpIHtcclxuICAgICAgY29uc3QgZGF0YSA9IHRoaXMuc2lnbmF0dXJlUGFkLnRvRGF0YSgpO1xyXG4gICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgIGRhdGEucG9wKCk7XHJcbiAgICAgICAgdGhpcy5zaWduYXR1cmVQYWQuZnJvbURhdGEoZGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUNoYW5nZSh7IGZpbGUsIGZpbGVMaXN0IH06IFVwbG9hZENoYW5nZVBhcmFtKTogdm9pZCB7XHJcbiAgICBjb25zdCBzdGF0dXMgPSBmaWxlLnN0YXR1cztcclxuICAgIGlmIChzdGF0dXMgIT09ICd1cGxvYWRpbmcnKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGZpbGUsIGZpbGVMaXN0KTtcclxuICAgIH1cclxuICAgIGlmIChzdGF0dXMgPT09ICdkb25lJykge1xyXG4gICAgICB0aGlzLm1zZy5zdWNjZXNzKGAke2ZpbGUubmFtZX0gZmlsZSB1cGxvYWRlZCBzdWNjZXNzZnVsbHkuYCk7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gJ2Vycm9yJykge1xyXG4gICAgICB0aGlzLm1zZy5lcnJvcihgJHtmaWxlLm5hbWV9IGZpbGUgdXBsb2FkIGZhaWxlZC5gKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==