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
    ngAfterViewInit() {
        this.signaturePad.clear();
    }
    /**
     * @return {?}
     */
    drawComplete() {
        console.log(this.signaturePad.toDataURL());
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
                template: "<div class=\"cmacs-signature-wrapper\">\r\n  <i class=\"cmacs-signature-close-icon iconUISmall-Excel\"></i>\r\n  <span class=\"cmacs-signature-placeholder\"\r\n        (click)=\"openModal()\">\r\n    {{i18n['Click here to sign'] ? i18n['Click here to sign'] : _i18n['Click here to sign']}}\r\n  </span>\r\n</div>\r\n\r\n<cmacs-modal\r\n  class=\"cmacs-signature-modal\"\r\n  modalType=\"helpfulTipsNoPanel\"\r\n  [(visible)]=\"_isVisible\"\r\n  [width]=\"'570px'\"\r\n  [leftPanelCols]=\"24\"\r\n  [rightPanelCols]=\"0\"\r\n  title=\"{{i18n['Sign to Complete'] ? i18n['Sign to Complete'] : _i18n['Sign to Complete']}}\"\r\n  (onCancel)=\"handleCancel()\"\r\n  [footer]=\"modalFooter\">\r\n\r\n  <div cmacs-modal-helpfulTips-no-panel-left>\r\n      <cmacs-tabset class=\"cmacs-signature-tabset cmacs-width-100\" [selectedIndex]=\"0\">\r\n\r\n        <!-----------------Type pane----------------->\r\n        <cmacs-tab title=\"{{i18n['Type'] ? i18n['Type'] : _i18n['Type']}}\" >\r\n          <form cmacs-form [formGroup]=\"formGroup\">\r\n              <cmacs-form-item>\r\n                <cmacs-form-label cmacsRequired>\r\n                  {{i18n['Enter Your Name'] ? i18n['Enter Your Name'] : _i18n['Enter Your Name']}}\r\n                </cmacs-form-label>\r\n                <cmacs-form-control>\r\n                  <input class=\"cmacs-signature-username-input\" cmacs-input [formControlName]=\"'username'\"\r\n                         placeholder=\"{{i18n['Text Here'] ? i18n['Text Here'] : _i18n['Text Here']}}\"\r\n                  />\r\n                </cmacs-form-control>\r\n              </cmacs-form-item>\r\n\r\n              <div class=\"cmacs-signature-sign-wrapper\">\r\n                <cmacs-form-item>\r\n                  <cmacs-form-control>\r\n                    <input class=\"cmacs-signature-sign-input\" cmacs-input [formControlName]=\"'sign'\"/>\r\n                  </cmacs-form-control>\r\n                </cmacs-form-item>\r\n              </div>\r\n          </form>\r\n\r\n          <div class=\"cmacs-signature-text cmacs-signature-text-format\">\r\n            {{i18n['I, User Full Name, have reviewed and completed this report.'] ? i18n['I, User Full Name, have reviewed and completed this report.']\r\n            : _i18n['I, User Full Name, have reviewed and completed this report.']}}\r\n          </div>\r\n          <label class=\"cmacs-signature-text\" cmacs-checkbox [(ngModel)]=\"saveSignature\">\r\n            {{i18n['Select here to save your signature for future use.'] ? i18n['Select here to save your signature for future use.']\r\n            : _i18n['Select here to save your signature for future use.']}}\r\n          </label>\r\n        </cmacs-tab>\r\n        <!-----------------Type pane----------------->\r\n\r\n        <!-----------------Draw pane----------------->\r\n        <cmacs-tab title=\"{{i18n['Draw'] ? i18n['Draw'] : _i18n['Draw']}}\">\r\n\r\n          <cmacs-form-item class=\"cmacs-no-margin\">\r\n            <cmacs-form-label cmacsRequired>\r\n              {{i18n['Signature'] ? i18n['Signature'] : _i18n['Signature']}}\r\n            </cmacs-form-label>\r\n          </cmacs-form-item>\r\n          <div\r\n            class=\"cmacs-signature-sign-wrapper cmacs-signature-pad\"\r\n            tabindex='1'\r\n            (keydown)=\"checkPressedKeys($event)\"\r\n          >\r\n            <signature-pad [options]=\"signaturePadOptions\"\r\n                           (onEndEvent)=\"drawComplete()\"\r\n            ></signature-pad>\r\n          </div>\r\n          <div class=\"cmacs-signature-text cmacs-signature-text-format\">\r\n            {{i18n['I, User Full Name, have reviewed and completed this report.'] ? i18n['I, User Full Name, have reviewed and completed this report.']\r\n            : _i18n['I, User Full Name, have reviewed and completed this report.']}}\r\n          </div>\r\n          <label class=\"cmacs-signature-text\" cmacs-checkbox [(ngModel)]=\"saveSignature\">\r\n            {{i18n['Select here to save your signature for future use.'] ? i18n['Select here to save your signature for future use.']\r\n            : _i18n['Select here to save your signature for future use.']}}\r\n          </label>\r\n        </cmacs-tab>\r\n        <!-----------------Draw pane----------------->\r\n\r\n        <!-----------------Image pane----------------->\r\n        <cmacs-tab title=\"{{i18n['Image'] ? i18n['Image'] : _i18n['Image']}}\">\r\n          <cmacs-form-item class=\"cmacs-no-margin\">\r\n            <cmacs-form-label cmacsRequired>\r\n              {{i18n['Signature'] ? i18n['Signature'] : _i18n['Signature']}}\r\n            </cmacs-form-label>\r\n          </cmacs-form-item>\r\n\r\n          <nz-upload\r\n            class=\"cmacs-signature-upload-area\"\r\n            nzType=\"drag\"\r\n            [nzMultiple]=\"false\"\r\n            nzAction=\"https://jsonplaceholder.typicode.com/posts/\"\r\n            (nzChange)=\"handleChange($event)\"\r\n          >\r\n            <span class=\"ant-upload-drag-icon\">\r\n              <img src=\"/assets/upload-computer.png\">\r\n            </span>\r\n            <p class=\"cmacs-signature-upload-text\">\r\n              {{i18n['Drag & Drop File Here or'] ? i18n['Drag & Drop File Here or']\r\n              : _i18n['Drag & Drop File Here or']}}\r\n            </p>\r\n            <button cmacs-button>{{i18n['Browse Computer'] ? i18n['Browse Computer']\r\n              : _i18n['Browse Computer']}}</button>\r\n          </nz-upload>\r\n\r\n          <div class=\"cmacs-signature-text cmacs-signature-text-format\">\r\n            {{i18n['I, User Full Name, have reviewed and completed this report.'] ? i18n['I, User Full Name, have reviewed and completed this report.']\r\n            : _i18n['I, User Full Name, have reviewed and completed this report.']}}\r\n          </div>\r\n          <label class=\"cmacs-signature-text\" cmacs-checkbox [(ngModel)]=\"saveSignature\">\r\n            {{i18n['Select here to save your signature for future use.'] ? i18n['Select here to save your signature for future use.']\r\n            : _i18n['Select here to save your signature for future use.']}}\r\n          </label>\r\n        </cmacs-tab>\r\n        <!-----------------Image pane----------------->\r\n      </cmacs-tabset>\r\n  </div>\r\n\r\n</cmacs-modal>\r\n\r\n<ng-template #modalFooter>\r\n  <button cmacs-button type=\"default\" ghost style=\"float: left;\" (click)=\"handleCancel()\">\r\n    {{i18n['Cancel'] ? i18n['Cancel'] : _i18n['Cancel']}}\r\n  </button>\r\n  <button cmacs-button ghost type=\"primary\" [disabled]=\"!formGroup.valid\" (click)=\"handleOk()\">\r\n    <span>{{i18n['Verify'] ? i18n['Verify'] : _i18n['Verify']}}</span>\r\n  </button>\r\n</ng-template>\r\n",
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                styles: [".cmacs-signature-wrapper{background-color:#fff;height:58px;border-radius:3px;border:1px solid #dee0e5;width:100%;text-align:center}.cmacs-signature-placeholder{font-family:Roboto,Roboto-Regular;font-size:14px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.71;letter-spacing:normal;color:#2a7cff;top:calc(50% - 11px);position:relative}.cmacs-signature-placeholder:hover{cursor:pointer}.cmacs-signature-close-icon{font-family:Roboto,Roboto-Regular;font-size:18px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.11;letter-spacing:normal;color:#bec4cd;top:calc(50% - 9px);position:relative}.cmacs-signature-username-input{width:225px!important;display:block!important}.cmacs-signature-sign-wrapper{height:177px;border-radius:3px;border:1px solid #dee0e5;background-color:#f6f7fb;text-align:center;padding-top:57px}.cmacs-signature-sign-input,.cmacs-signature-sign-input:focus,.cmacs-signature-sign-input:hover{border-radius:unset;width:93%!important;border-top:none!important;border-left:none!important;border-right:none!important;background-color:#f6f7fb}.cmacs-signature-text{font-family:Roboto;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;color:#656c79!important}.cmacs-signature-text-format{margin-top:15px;margin-bottom:25px}.cmacs-signature-modal .ant-modal-body{height:490px!important}.cmacs-signature-tabset .ant-tabs-bar{border-color:transparent!important}.cmacs-width-100{width:100%}.cmacs-signature-pad{height:231px;padding-top:0}.cmacs-signature-pad signature-pad{border-bottom:1px solid #bec4cd}.cmacs-no-margin{margin:0!important}.cmacs-signature-upload-area .ant-upload.ant-upload-drag{height:231px}.cmacs-signature-upload-text{font-family:Roboto,Roboto-Regular;font-size:14px;font-weight:400;font-stretch:normal;font-style:normal;line-height:.86;letter-spacing:normal;color:#97a0ae;margin:20px 0!important}"]
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
    onsubmit: [{ type: Output }],
    signaturePad: [{ type: ViewChild, args: [SignaturePad,] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2lnbmF0dXJlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mtc2lnbmF0dXJlL2NtYWNzLXNpZ25hdHVyZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQ3RDLGlCQUFpQixFQUFFLFNBQVMsRUFDN0IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLFdBQVcsRUFBYSxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFbkUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sd0NBQXdDLENBQUM7O0FBRTNFLE1BQU0sT0FBTyxzQkFBc0IsR0FBRztJQUNwQyxvQkFBb0IsRUFBRSxvQkFBb0I7SUFDMUMsa0JBQWtCLEVBQUUsa0JBQWtCO0lBQ3RDLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLGlCQUFpQixFQUFFLGlCQUFpQjtJQUNwQyxXQUFXLEVBQUUsV0FBVztJQUN4QixNQUFNLEVBQUUsTUFBTTtJQUNkLE1BQU0sRUFBRSxNQUFNO0lBQ2QsT0FBTyxFQUFFLE9BQU87SUFDaEIsNkRBQTZELEVBQUUsNkRBQTZEO0lBQzVILG9EQUFvRCxFQUFFLG9EQUFvRDtJQUMxRyxXQUFXLEVBQUUsV0FBVztJQUN4QiwwQkFBMEIsRUFBRSwwQkFBMEI7SUFDdEQsaUJBQWlCLEVBQUUsaUJBQWlCO0NBQ3JDO0FBVUQsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7SUFrQmxDLFlBQW9CLEVBQWUsRUFBVSxHQUF3QjtRQUFqRCxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBcUI7UUFoQnJFLGVB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QStCOztJQUMvQixzREFJRTs7SUFFRix1Q0FBNEM7O0lBRTVDLDJDQUF3RTs7SUFDeEUsMkNBQWdFOztJQUNoRSwrQ0FBb0Q7Ozs7O0lBRXhDLHFDQUF1Qjs7Ozs7SUFBRSxzQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLCBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU2lnbmF0dXJlUGFkIH0gZnJvbSAnYW5ndWxhcjItc2lnbmF0dXJlcGFkL3NpZ25hdHVyZS1wYWQnO1xyXG5pbXBvcnQge1VwbG9hZENoYW5nZVBhcmFtfSBmcm9tIFwibmctem9ycm8tYW50ZFwiO1xyXG5pbXBvcnQge0NtYWNzTWVzc2FnZVNlcnZpY2V9IGZyb20gXCIuLi9jbWFjcy1tZXNzYWdlL2NtYWNzLW1lc3NhZ2Uuc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05BVFVSRV9MT0NBTElaQVRJT04gPSB7XHJcbiAgJ0NsaWNrIGhlcmUgdG8gc2lnbic6ICdDbGljayBoZXJlIHRvIHNpZ24nLFxyXG4gICdTaWduIHRvIENvbXBsZXRlJzogJ1NpZ24gdG8gQ29tcGxldGUnLFxyXG4gICdDYW5jZWwnOiAnQ2FuY2VsJyxcclxuICAnVmVyaWZ5JzogJ1ZlcmlmeScsXHJcbiAgJ0VudGVyIFlvdXIgTmFtZSc6ICdFbnRlciBZb3VyIE5hbWUnLFxyXG4gICdUZXh0IEhlcmUnOiAnVGV4dCBIZXJlJyxcclxuICAnVHlwZSc6ICdUeXBlJyxcclxuICAnRHJhdyc6ICdEcmF3JyxcclxuICAnSW1hZ2UnOiAnSW1hZ2UnLFxyXG4gICdJLCBVc2VyIEZ1bGwgTmFtZSwgaGF2ZSByZXZpZXdlZCBhbmQgY29tcGxldGVkIHRoaXMgcmVwb3J0Lic6ICdJLCBVc2VyIEZ1bGwgTmFtZSwgaGF2ZSByZXZpZXdlZCBhbmQgY29tcGxldGVkIHRoaXMgcmVwb3J0LicsXHJcbiAgJ1NlbGVjdCBoZXJlIHRvIHNhdmUgeW91ciBzaWduYXR1cmUgZm9yIGZ1dHVyZSB1c2UuJzogJ1NlbGVjdCBoZXJlIHRvIHNhdmUgeW91ciBzaWduYXR1cmUgZm9yIGZ1dHVyZSB1c2UuJyxcclxuICAnU2lnbmF0dXJlJzogJ1NpZ25hdHVyZScsXHJcbiAgJ0RyYWcgJiBEcm9wIEZpbGUgSGVyZSBvcic6ICdEcmFnICYgRHJvcCBGaWxlIEhlcmUgb3InLFxyXG4gICdCcm93c2UgQ29tcHV0ZXInOiAnQnJvd3NlIENvbXB1dGVyJ1xyXG59O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1zaWduYXR1cmUnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NTaWduYXR1cmUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1zaWduYXR1cmUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3Mtc2lnbmF0dXJlLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NTaWduYXR1cmVDb21wb25lbnQge1xyXG5cclxuICBfaXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgZm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcbiAgc2F2ZVNpZ25hdHVyZSA9IHRydWU7XHJcbiAgX2kxOG4gPSBTSUdOQVRVUkVfTE9DQUxJWkFUSU9OO1xyXG4gIHNpZ25hdHVyZVBhZE9wdGlvbnM6IE9iamVjdCA9IHtcclxuICAgICdkb3RTaXplJzogMC40LFxyXG4gICAgJ2NhbnZhc1dpZHRoJzogNDgwLFxyXG4gICAgJ2NhbnZhc0hlaWdodCc6IDEyNlxyXG4gIH07XHJcblxyXG4gIEBJbnB1dCgpIGkxOG46IGFueSA9IFNJR05BVFVSRV9MT0NBTElaQVRJT047XHJcblxyXG4gIEBPdXRwdXQoKSBvbmNhbmNlbDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIEBPdXRwdXQoKSBvbnN1Ym1pdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAVmlld0NoaWxkKFNpZ25hdHVyZVBhZCkgc2lnbmF0dXJlUGFkOiBTaWduYXR1cmVQYWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIG1zZzogQ21hY3NNZXNzYWdlU2VydmljZSkge1xyXG4gICAgdGhpcy5mb3JtR3JvdXAgPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgdXNlcm5hbWU6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcclxuICAgICAgc2lnbjogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuc2lnbmF0dXJlUGFkLmNsZWFyKCk7XHJcbiAgfVxyXG5cclxuICBkcmF3Q29tcGxldGUoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnNpZ25hdHVyZVBhZC50b0RhdGFVUkwoKSk7XHJcbiAgfVxyXG5cclxuICBvcGVuTW9kYWwoKSB7XHJcbiAgICB0aGlzLl9pc1Zpc2libGUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2FuY2VsKCkge1xyXG4gICAgdGhpcy5faXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgICB0aGlzLm9uY2FuY2VsLmVtaXQodGhpcy5faXNWaXNpYmxlKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZU9rKCkge1xyXG4gICAgdGhpcy5vbnN1Ym1pdC5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBjaGVja1ByZXNzZWRLZXlzKCRldmVudCkge1xyXG4gICAgaWYgKCRldmVudC53aGljaCA9PT0gOTAgJiYgJGV2ZW50LmN0cmxLZXkpIHtcclxuICAgICAgY29uc3QgZGF0YSA9IHRoaXMuc2lnbmF0dXJlUGFkLnRvRGF0YSgpO1xyXG4gICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgIGRhdGEucG9wKCk7XHJcbiAgICAgICAgdGhpcy5zaWduYXR1cmVQYWQuZnJvbURhdGEoZGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUNoYW5nZSh7IGZpbGUsIGZpbGVMaXN0IH06IFVwbG9hZENoYW5nZVBhcmFtKTogdm9pZCB7XHJcbiAgICBjb25zdCBzdGF0dXMgPSBmaWxlLnN0YXR1cztcclxuICAgIGlmIChzdGF0dXMgIT09ICd1cGxvYWRpbmcnKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGZpbGUsIGZpbGVMaXN0KTtcclxuICAgIH1cclxuICAgIGlmIChzdGF0dXMgPT09ICdkb25lJykge1xyXG4gICAgICB0aGlzLm1zZy5zdWNjZXNzKGAke2ZpbGUubmFtZX0gZmlsZSB1cGxvYWRlZCBzdWNjZXNzZnVsbHkuYCk7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gJ2Vycm9yJykge1xyXG4gICAgICB0aGlzLm1zZy5lcnJvcihgJHtmaWxlLm5hbWV9IGZpbGUgdXBsb2FkIGZhaWxlZC5gKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==