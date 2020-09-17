/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewEncapsulation, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { Object } from 'core-js';
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
     * @param {?} cdr
     */
    constructor(fb, cdr) {
        this.fb = fb;
        this.cdr = cdr;
        this._isVisible = false;
        this.saveSignature = true;
        this._i18n = SIGNATURE_LOCALIZATION;
        this.current = 0;
        this.files = [];
        this._signatureDataUrl = null;
        this._currentValue = null;
        this._signaturePadOptions = {
            'dotSize': 0.4,
            'canvasWidth': 420,
            'canvasHeight': 126
        };
        this._uploadedImageSrc = null;
        this._uploadedImageSrcStyle = {};
        this.i18n = SIGNATURE_LOCALIZATION;
        this.signaturePadOptions = {};
        this.extendedVersion = false;
        this.oncancel = new EventEmitter();
        this.onsubmit = new EventEmitter();
        this.ondrawend = new EventEmitter();
        this.beforeUpload = (/**
         * @param {?} file
         * @return {?}
         */
        (file) => {
            this.files = [].concat(file);
            /** @type {?} */
            const url = (/** @type {?} */ ((file.name || '')));
            if (!url) {
                this.files = [];
                return false;
            }
            /** @type {?} */
            const extension = this.extname(url);
            if (/(webp|svg|png|gif|jpg|jpeg|bmp)$/i.test(extension)) {
                /** @type {?} */
                const reader = new FileReader();
                file.linkProps = typeof file.linkProps === 'string' ? JSON.parse(file.linkProps) : file.linkProps;
                reader.onload = (/**
                 * @return {?}
                 */
                () => {
                    this._uploadedImageSrc = (/** @type {?} */ (reader.result));
                });
                /** @type {?} */
                const blob = (/** @type {?} */ (file));
                reader.readAsDataURL(blob);
            }
            return false;
        });
        this.formGroup = this.fb.group({
            username: ['', [Validators.required]]
        });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set currentValue(value) {
        this._currentValue = value;
        this.cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.signaturePad.clear();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onResizeStop($event) {
        this._uploadedImageSrcStyle.size = $event.size;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onMoveEnd($event) {
        this._uploadedImageSrcStyle.position = $event;
    }
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    extname(url) {
        /** @type {?} */
        const temp = url.split('/');
        /** @type {?} */
        const filename = temp[temp.length - 1];
        /** @type {?} */
        const filenameWithoutSuffix = filename.split(/#|\?/)[0];
        return (/\.[^./\\]*$/.exec(filenameWithoutSuffix) || [''])[0];
    }
    /**
     * @return {?}
     */
    isValid() {
        switch (this.current) {
            case 0:
                return !this.formGroup.valid;
            case 1:
                return !this._signatureDataUrl;
            case 2:
                return !this._uploadedImageSrc;
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
        if (this.extendedVersion) {
            this._signatureDataUrl = this.signaturePad.toDataURL();
            return;
        }
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
        for (const key in this.formGroup.controls) {
            this.formGroup.controls[key].markAsPristine();
            this.formGroup.controls[key].updateValueAndValidity();
        }
        this.formGroup.reset();
        this.saveSignature = true;
        this._signatureDataUrl = null;
        this.signaturePad.clear();
        this.current = 0;
        this._uploadedImageSrc = null;
        this._uploadedImageSrcStyle = {};
        this.files = [];
        this.oncancel.emit(this._isVisible);
    }
    /**
     * @return {?}
     */
    handleOk() {
        /** @type {?} */
        const value = {};
        if (this.current === 0) {
            value.saveForFutureUse = this.saveSignature;
            value.userSignature = (/** @type {?} */ (this.formGroup.get('username'))).value;
            value.signatureType = 'type';
        }
        if (this.current === 1) {
            value.saveForFutureUse = this.saveSignature;
            value.userSignature = this._signatureDataUrl;
            value.signatureType = 'draw';
        }
        if (this.current === 2) {
            value.saveForFutureUse = this.saveSignature;
            value.userSignature = this._uploadedImageSrc;
            value.signatureImgStyle = this._uploadedImageSrcStyle;
            value.signatureType = 'image';
        }
        this._currentValue = value;
        this.onsubmit.emit(value);
        this.handleCancel();
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
                this._signatureDataUrl = this.signaturePad.toDataURL();
            }
        }
    }
}
CmacsSignatureComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmacs-signature',
                exportAs: 'cmacsSignature',
                template: "<ng-container *ngIf=\"!extendedVersion\">\r\n  <div class=\"cmacs-signature-sign-wrapper cmacs-signature-pad\"\r\n       tabindex='1'\r\n       (keydown)=\"checkPressedKeys($event)\">\r\n    <span class=\"cmacs-signature-x\">X</span>\r\n    <signature-pad [options]=\"signaturePadOptions\"\r\n                   (onEndEvent)=\"drawComplete()\"></signature-pad>\r\n  </div>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"extendedVersion\">\r\n  <div class=\"cmacs-signature-wrapper\">\r\n    <ng-container *ngIf=\"!_currentValue\">\r\n      <i class=\"cmacs-signature-close-icon iconUISmall-Excel\"></i>\r\n      <span class=\"cmacs-signature-placeholder\"\r\n            (click)=\"openModal()\">\r\n        {{i18n['Click here to sign'] ? i18n['Click here to sign'] : _i18n['Click here to sign']}}\r\n      </span>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"_currentValue\">\r\n      <ng-container *ngIf=\"_currentValue.signatureType === 'type'\">\r\n        <div class=\"cmacs-signature-sign-input cmacs-signature-input-userSignature\">{{_currentValue.userSignature}}</div>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"_currentValue.signatureType === 'draw'\">\r\n        <img class=\"centered\" style=\"max-height: 50px !important; max-width: inherit\" [src]=\"_currentValue.userSignature\" />\r\n      </ng-container>\r\n      <ng-container *ngIf=\"_currentValue.signatureType === 'image'\">\r\n        <img class=\"centered\" style=\"max-height: 50px !important\"\r\n             max-width: inherit\r\n             [style.width.px]=\"_currentValue.signatureImgStyle.size ? _currentValue.signatureImgStyle.size.width : null\"\r\n             [style.height.px]=\"_currentValue.signatureImgStyle.size ? _currentValue.signatureImgStyle.size.height : null\"\r\n             [src]=\"_currentValue.userSignature\"\r\n       />\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n\r\n  <cmacs-modal\r\n    class=\"cmacs-signature-modal\"\r\n    modalType=\"helpfulTipsNoPanel\"\r\n    [(visible)]=\"_isVisible\"\r\n    [width]=\"'570px'\"\r\n    title=\"{{i18n['Sign to Complete'] ? i18n['Sign to Complete'] : _i18n['Sign to Complete']}}\"\r\n    (onCancel)=\"handleCancel()\"\r\n    [footer]=\"modalFooter\">\r\n\r\n    <div cmacs-modal-helpfulTips-no-panel-center>\r\n        <cmacs-tabset class=\"cmacs-signature-tabset cmacs-width-100\"\r\n                      [selectedIndex]=\"current\"\r\n                      (selectedIndexChange)=\"updateCurrent($event)\">\r\n\r\n          <!--Type Pane-->\r\n          <cmacs-tab title=\"{{i18n['Type'] ? i18n['Type'] : _i18n['Type']}}\" >\r\n            <form cmacs-form [formGroup]=\"formGroup\">\r\n              <cmacs-form-item>\r\n                <cmacs-form-label cmacsRequired>\r\n                  {{i18n['Enter Your Name'] ? i18n['Enter Your Name'] : _i18n['Enter Your Name']}}\r\n                </cmacs-form-label>\r\n                <cmacs-form-control>\r\n                  <input class=\"cmacs-signature-username-input\" cmacs-input [formControlName]=\"'username'\"\r\n                         placeholder=\"{{i18n['Text Here'] ? i18n['Text Here'] : _i18n['Text Here']}}\" />\r\n                </cmacs-form-control>\r\n              </cmacs-form-item>\r\n\r\n              <div class=\"cmacs-signature-sign-wrapper\">\r\n                <span class=\"cmacs-signature-x\">X</span>\r\n                <div class=\"cmacs-signature-sign-input\" *ngIf=\"formGroup.get('username')!.value && formGroup.get('username')!.value.length\">{{formGroup.get('username')!.value}}</div>\r\n                <div class=\"cmacs-signature-sign-input cmacs-invisible-font\" *ngIf=\"!formGroup.get('username')!.value || (formGroup.get('username')!.value && !formGroup.get('username')!.value.length)\">Test</div>\r\n              </div>\r\n            </form>\r\n\r\n            <div class=\"cmacs-signature-text cmacs-signature-text-format\">\r\n              {{i18n['I, User Full Name, have reviewed and completed this report.'] ? i18n['I, User Full Name, have reviewed and completed this report.']\r\n              : _i18n['I, User Full Name, have reviewed and completed this report.']}}\r\n            </div>\r\n            <label class=\"cmacs-signature-text\" cmacs-checkbox [(ngModel)]=\"saveSignature\">\r\n              {{i18n['Select here to save your signature for future use.'] ? i18n['Select here to save your signature for future use.']\r\n              : _i18n['Select here to save your signature for future use.']}}\r\n            </label>\r\n          </cmacs-tab>\r\n          <!--Type Pane-->\r\n\r\n          <!--Draw pane-->\r\n          <cmacs-tab title=\"{{i18n['Draw'] ? i18n['Draw'] : _i18n['Draw']}}\">\r\n\r\n            <cmacs-form-item class=\"cmacs-no-margin\">\r\n              <cmacs-form-label cmacsRequired>\r\n                {{i18n['Signature'] ? i18n['Signature'] : _i18n['Signature']}}\r\n              </cmacs-form-label>\r\n            </cmacs-form-item>\r\n            <div class=\"cmacs-signature-sign-wrapper cmacs-signature-pad\"\r\n                 tabindex='1'\r\n                 (keydown)=\"checkPressedKeys($event)\">\r\n              <span class=\"cmacs-signature-x\">X</span>\r\n              <signature-pad [options]=\"_signaturePadOptions\"\r\n                             (onEndEvent)=\"drawComplete()\"></signature-pad>\r\n            </div>\r\n            <div class=\"cmacs-signature-text cmacs-signature-text-format\">\r\n              {{i18n['I, User Full Name, have reviewed and completed this report.'] ? i18n['I, User Full Name, have reviewed and completed this report.']\r\n              : _i18n['I, User Full Name, have reviewed and completed this report.']}}\r\n            </div>\r\n            <label class=\"cmacs-signature-text\" cmacs-checkbox [(ngModel)]=\"saveSignature\">\r\n              {{i18n['Select here to save your signature for future use.'] ? i18n['Select here to save your signature for future use.']\r\n              : _i18n['Select here to save your signature for future use.']}}\r\n            </label>\r\n          </cmacs-tab>\r\n          <!--Draw pane-->\r\n\r\n          <!--Image pane-->\r\n          <cmacs-tab title=\"{{i18n['Image'] ? i18n['Image'] : _i18n['Image']}}\">\r\n            <cmacs-form-item class=\"cmacs-no-margin\">\r\n              <cmacs-form-label cmacsRequired>\r\n                {{i18n['Signature'] ? i18n['Signature'] : _i18n['Signature']}}\r\n              </cmacs-form-label>\r\n            </cmacs-form-item>\r\n\r\n            <ng-container *ngIf=\"!_uploadedImageSrc\">\r\n                <nz-upload\r\n                class=\"cmacs-signature-upload-area\"\r\n                nzType=\"drag\"\r\n                nzAccept=\"image/*\"\r\n                [nzMultiple]=\"false\"\r\n                [(nzFileList)]=\"files\"\r\n                [nzBeforeUpload]=\"beforeUpload\"\r\n              >\r\n                  <span class=\"ant-upload-drag-icon\">\r\n                    <img src=\"assets/upload-computer.png\">\r\n                  </span>\r\n                  <p class=\"cmacs-signature-upload-text\">\r\n                    {{i18n['Drag & Drop File Here or'] ? i18n['Drag & Drop File Here or']\r\n                    : _i18n['Drag & Drop File Here or']}}\r\n                  </p>\r\n                  <button cmacs-button>{{i18n['Browse Computer'] ? i18n['Browse Computer']\r\n                    : _i18n['Browse Computer']}}</button>\r\n                </nz-upload>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"_uploadedImageSrc\">\r\n              <div class=\"cmacs-signature-sign-wrapper cmacs-signature-image-src\">\r\n                <span class=\"cmacs-signature-x\">X</span>\r\n                <div #dragBounds\r\n                     style=\"max-width: 480px; width: 480px; max-height: 100px; height: 100px\"\r\n                     class=\"cmacs-signature-sign-input cmacs-signature-img-wrapper\">\r\n                  <div ngResizable\r\n                       style=\"max-width: 480px; max-height: 100px;\"\r\n                       class=\"cmacs-signature-img-wrapper-resizable-area\"\r\n                       rzHandles=\"n,s,e,w,se,sw\"\r\n                       ngDraggable\r\n                       [bounds]=\"dragBounds\"\r\n                       (rzStop)=\"onResizeStop($event)\"\r\n                       (endOffset)=\"onMoveEnd($event)\"\r\n                       [inBounds]=\"true\"\r\n                       [preventDefaultEvent]=\"true\">\r\n                    <img style=\"max-width: 480px; width: inherit; max-height: 100px; height: inherit\" [src]=\"_uploadedImageSrc\"/>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ng-container>\r\n\r\n            <div class=\"cmacs-signature-text cmacs-signature-text-format\">\r\n              {{i18n['I, User Full Name, have reviewed and completed this report.'] ? i18n['I, User Full Name, have reviewed and completed this report.']\r\n              : _i18n['I, User Full Name, have reviewed and completed this report.']}}\r\n            </div>\r\n            <label class=\"cmacs-signature-text\" cmacs-checkbox [(ngModel)]=\"saveSignature\">\r\n              {{i18n['Select here to save your signature for future use.'] ? i18n['Select here to save your signature for future use.']\r\n              : _i18n['Select here to save your signature for future use.']}}\r\n            </label>\r\n          </cmacs-tab>\r\n          <!--Image pane-->\r\n        </cmacs-tabset>\r\n    </div>\r\n\r\n  </cmacs-modal>\r\n\r\n  <ng-template #modalFooter>\r\n    <button cmacs-button type=\"default\" ghost style=\"float: left;\" (click)=\"handleCancel()\">\r\n      {{i18n['Cancel'] ? i18n['Cancel'] : _i18n['Cancel']}}\r\n    </button>\r\n    <button cmacs-button ghost type=\"primary\" [disabled]=\"isValid()\" (click)=\"handleOk()\">\r\n      <span>{{i18n['Verify'] ? i18n['Verify'] : _i18n['Verify']}}</span>\r\n    </button>\r\n  </ng-template>\r\n</ng-container>\r\n",
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                styles: [".cmacs-signature-wrapper{background-color:#fff;height:58px;border-radius:3px;border:1px solid #dee0e5;width:100%;max-width:100%;text-align:center}.centered{top:50%;position:relative;-webkit-transform:translateY(-50%);transform:translateY(-50%)}mwlResizable{box-sizing:border-box}.resize-handle-bottom,.resize-handle-top{position:absolute;height:5px;cursor:row-resize;width:100%}.resize-handle-top{top:0}.resize-handle-bottom{bottom:0}.resize-handle-left,.resize-handle-right{position:absolute;height:100%;cursor:col-resize;width:5px}.resize-handle-left{left:0}.resize-handle-right{right:0}.cmacs-signature-x{font-size:18px;color:#bec4cd}.cmacs-signature-placeholder{font-family:Roboto-Regular;font-size:14px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.71;letter-spacing:normal;color:#2a7cff;top:calc(50% - 11px);position:relative}.cmacs-signature-placeholder:hover{cursor:pointer}.cmacs-signature-close-icon{font-family:Roboto-Regular;font-size:18px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.11;letter-spacing:normal;color:#bec4cd;top:calc(50% - 9px);position:relative}.cmacs-signature-username-input{width:225px!important;display:block!important}.cmacs-signature-sign-wrapper{height:177px;border-radius:3px;border:1px solid #dee0e5;background-color:#f6f7fb;text-align:center;padding-top:45px}.cmacs-invisible-font{color:transparent!important}.cmacs-signature-sign-input,.cmacs-signature-sign-input:focus,.cmacs-signature-sign-input:hover{border-radius:unset;width:88%!important;display:inline-block;max-width:88%;margin-left:8px!important;overflow:hidden;margin:0 auto;text-overflow:clip;white-space:nowrap;border-bottom:1px solid #dee0e5;background-color:#f6f7fb;font-family:AlexBrush,AlexBrush-Regular;font-size:44px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.5;letter-spacing:normal;color:#3b3f46}.cmacs-signature-text{font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;color:#656c79!important}.cmacs-signature-text-format{margin-top:15px;margin-bottom:25px}.cmacs-signature-modal .ant-modal-body{height:490px!important}.cmacs-signature-tabset .ant-tabs-bar{border-color:transparent!important}.cmacs-width-100{width:100%}.cmacs-signature-pad{height:231px;padding-top:0}.cmacs-signature-pad signature-pad{border-bottom:1px solid #bec4cd}.cmacs-no-margin{margin:0!important}.cmacs-signature-upload-area .ant-upload.ant-upload-drag{height:231px}.cmacs-signature-upload-text{font-family:Roboto,Roboto-Regular;font-size:14px;font-weight:400;font-stretch:normal;font-style:normal;line-height:.86;letter-spacing:normal;color:#97a0ae;margin:20px 0!important}.cmacs-signature-image-src{height:231px!important;background-color:#fff!important;border-radius:3px!important;border:1px dashed #bec4cd!important}.cmacs-signature-img-wrapper{background-color:#fff!important}.cmacs-signature-img-wrapper-resizable-area{border:1px dashed #2a7cff;overflow:hidden!important}.cmacs-signature-input-userSignature{border-bottom:none!important;background-color:#fff!important;height:100%!important;overflow:hidden!important;line-height:1!important}"]
            }] }
];
/** @nocollapse */
CmacsSignatureComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: ChangeDetectorRef }
];
CmacsSignatureComponent.propDecorators = {
    i18n: [{ type: Input }],
    signaturePadOptions: [{ type: Input }],
    extendedVersion: [{ type: Input }],
    oncancel: [{ type: Output }],
    onsubmit: [{ type: Output }],
    signaturePad: [{ type: ViewChild, args: [SignaturePad,] }],
    ondrawend: [{ type: Output }],
    currentValue: [{ type: Input }]
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
    CmacsSignatureComponent.prototype._signatureDataUrl;
    /** @type {?} */
    CmacsSignatureComponent.prototype._currentValue;
    /** @type {?} */
    CmacsSignatureComponent.prototype._signaturePadOptions;
    /** @type {?} */
    CmacsSignatureComponent.prototype._uploadedImageSrc;
    /** @type {?} */
    CmacsSignatureComponent.prototype._uploadedImageSrcStyle;
    /** @type {?} */
    CmacsSignatureComponent.prototype.i18n;
    /** @type {?} */
    CmacsSignatureComponent.prototype.signaturePadOptions;
    /** @type {?} */
    CmacsSignatureComponent.prototype.extendedVersion;
    /** @type {?} */
    CmacsSignatureComponent.prototype.oncancel;
    /** @type {?} */
    CmacsSignatureComponent.prototype.onsubmit;
    /** @type {?} */
    CmacsSignatureComponent.prototype.signaturePad;
    /** @type {?} */
    CmacsSignatureComponent.prototype.ondrawend;
    /** @type {?} */
    CmacsSignatureComponent.prototype.beforeUpload;
    /**
     * @type {?}
     * @private
     */
    CmacsSignatureComponent.prototype.fb;
    /**
     * @type {?}
     * @private
     */
    CmacsSignatureComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2lnbmF0dXJlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mtc2lnbmF0dXJlL2NtYWNzLXNpZ25hdHVyZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQ3RDLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFDaEQsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLFdBQVcsRUFBYSxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFHbkUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFNBQVMsQ0FBQzs7QUFFakMsTUFBTSxPQUFPLHNCQUFzQixHQUFHO0lBQ3BDLG9CQUFvQixFQUFFLG9CQUFvQjtJQUMxQyxrQkFBa0IsRUFBRSxrQkFBa0I7SUFDdEMsUUFBUSxFQUFFLFFBQVE7SUFDbEIsUUFBUSxFQUFFLFFBQVE7SUFDbEIsaUJBQWlCLEVBQUUsaUJBQWlCO0lBQ3BDLFdBQVcsRUFBRSxXQUFXO0lBQ3hCLE1BQU0sRUFBRSxNQUFNO0lBQ2QsTUFBTSxFQUFFLE1BQU07SUFDZCxPQUFPLEVBQUUsT0FBTztJQUNoQiw2REFBNkQsRUFBRSw2REFBNkQ7SUFDNUgsb0RBQW9ELEVBQUUsb0RBQW9EO0lBQzFHLFdBQVcsRUFBRSxXQUFXO0lBQ3hCLDBCQUEwQixFQUFFLDBCQUEwQjtJQUN0RCxpQkFBaUIsRUFBRSxpQkFBaUI7Q0FDckM7QUFVRCxNQUFNLE9BQU8sdUJBQXVCOzs7OztJQWlDbEMsWUFBb0IsRUFBZSxFQUFVLEdBQXNCO1FBQS9DLE9BQUUsR0FBRixFQUFFLENBQWE7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtR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Qy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxtQkFBbUIsRUFBRSxLQUFLOzthQUUzQjs7OztZQTlCTyxXQUFXO1lBRmEsaUJBQWlCOzs7bUJBbUQ5QyxLQUFLO2tDQUNMLEtBQUs7OEJBQ0wsS0FBSzt1QkFFTCxNQUFNO3VCQUNOLE1BQU07MkJBQ04sU0FBUyxTQUFDLFlBQVk7d0JBQ3RCLE1BQU07MkJBRU4sS0FBSzs7OztJQXpCTiw2Q0FBbUI7O0lBQ25CLDRDQUFxQjs7SUFDckIsZ0RBQXFCOztJQUNyQix3Q0FBK0I7O0lBQy9CLDBDQUFZOztJQUNaLHdDQUFXOztJQUNYLG9EQUF5Qjs7SUFDekIsZ0RBQXFCOztJQUNyQix1REFJRTs7SUFDRixvREFBeUI7O0lBQ3pCLHlEQUFpQzs7SUFFakMsdUNBQTRDOztJQUM1QyxzREFBMEM7O0lBQzFDLGtEQUFpQzs7SUFFakMsMkNBQXdFOztJQUN4RSwyQ0FBZ0U7O0lBQ2hFLCtDQUFvRDs7SUFDcEQsNENBQWlFOztJQTJCakUsK0NBbUJFOzs7OztJQXRDVSxxQ0FBdUI7Ozs7O0lBQUUsc0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbiwgVmlld0NoaWxkLCBDaGFuZ2VEZXRlY3RvclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnN9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTaWduYXR1cmVQYWQgfSBmcm9tICdhbmd1bGFyMi1zaWduYXR1cmVwYWQvc2lnbmF0dXJlLXBhZCc7XHJcbmltcG9ydCB7VXBsb2FkRmlsZX0gZnJvbSBcIm5nLXpvcnJvLWFudGRcIjtcclxuaW1wb3J0IHtDbWFjc01lc3NhZ2VTZXJ2aWNlfSBmcm9tIFwiLi4vY21hY3MtbWVzc2FnZS9jbWFjcy1tZXNzYWdlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgT2JqZWN0IH0gZnJvbSAnY29yZS1qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTkFUVVJFX0xPQ0FMSVpBVElPTiA9IHtcclxuICAnQ2xpY2sgaGVyZSB0byBzaWduJzogJ0NsaWNrIGhlcmUgdG8gc2lnbicsXHJcbiAgJ1NpZ24gdG8gQ29tcGxldGUnOiAnU2lnbiB0byBDb21wbGV0ZScsXHJcbiAgJ0NhbmNlbCc6ICdDYW5jZWwnLFxyXG4gICdWZXJpZnknOiAnVmVyaWZ5JyxcclxuICAnRW50ZXIgWW91ciBOYW1lJzogJ0VudGVyIFlvdXIgTmFtZScsXHJcbiAgJ1RleHQgSGVyZSc6ICdUZXh0IEhlcmUnLFxyXG4gICdUeXBlJzogJ1R5cGUnLFxyXG4gICdEcmF3JzogJ0RyYXcnLFxyXG4gICdJbWFnZSc6ICdJbWFnZScsXHJcbiAgJ0ksIFVzZXIgRnVsbCBOYW1lLCBoYXZlIHJldmlld2VkIGFuZCBjb21wbGV0ZWQgdGhpcyByZXBvcnQuJzogJ0ksIFVzZXIgRnVsbCBOYW1lLCBoYXZlIHJldmlld2VkIGFuZCBjb21wbGV0ZWQgdGhpcyByZXBvcnQuJyxcclxuICAnU2VsZWN0IGhlcmUgdG8gc2F2ZSB5b3VyIHNpZ25hdHVyZSBmb3IgZnV0dXJlIHVzZS4nOiAnU2VsZWN0IGhlcmUgdG8gc2F2ZSB5b3VyIHNpZ25hdHVyZSBmb3IgZnV0dXJlIHVzZS4nLFxyXG4gICdTaWduYXR1cmUnOiAnU2lnbmF0dXJlJyxcclxuICAnRHJhZyAmIERyb3AgRmlsZSBIZXJlIG9yJzogJ0RyYWcgJiBEcm9wIEZpbGUgSGVyZSBvcicsXHJcbiAgJ0Jyb3dzZSBDb21wdXRlcic6ICdCcm93c2UgQ29tcHV0ZXInXHJcbn07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLXNpZ25hdHVyZScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1NpZ25hdHVyZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXNpZ25hdHVyZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1zaWduYXR1cmUuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1NpZ25hdHVyZUNvbXBvbmVudCB7XHJcblxyXG4gIF9pc1Zpc2libGUgPSBmYWxzZTtcclxuICBmb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuICBzYXZlU2lnbmF0dXJlID0gdHJ1ZTtcclxuICBfaTE4biA9IFNJR05BVFVSRV9MT0NBTElaQVRJT047XHJcbiAgY3VycmVudCA9IDA7XHJcbiAgZmlsZXMgPSBbXTtcclxuICBfc2lnbmF0dXJlRGF0YVVybCA9IG51bGw7XHJcbiAgX2N1cnJlbnRWYWx1ZSA9IG51bGw7XHJcbiAgX3NpZ25hdHVyZVBhZE9wdGlvbnM6IE9iamVjdCA9IHtcclxuICAgICdkb3RTaXplJzogMC40LFxyXG4gICAgJ2NhbnZhc1dpZHRoJzogNDIwLFxyXG4gICAgJ2NhbnZhc0hlaWdodCc6IDEyNlxyXG4gIH07XHJcbiAgX3VwbG9hZGVkSW1hZ2VTcmMgPSBudWxsO1xyXG4gIF91cGxvYWRlZEltYWdlU3JjU3R5bGU6IGFueSA9IHt9O1xyXG5cclxuICBASW5wdXQoKSBpMThuOiBhbnkgPSBTSUdOQVRVUkVfTE9DQUxJWkFUSU9OO1xyXG4gIEBJbnB1dCgpIHNpZ25hdHVyZVBhZE9wdGlvbnM6IE9iamVjdCA9IHt9O1xyXG4gIEBJbnB1dCgpIGV4dGVuZGVkVmVyc2lvbiA9IGZhbHNlO1xyXG5cclxuICBAT3V0cHV0KCkgb25jYW5jZWw6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAT3V0cHV0KCkgb25zdWJtaXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQFZpZXdDaGlsZChTaWduYXR1cmVQYWQpIHNpZ25hdHVyZVBhZDogU2lnbmF0dXJlUGFkO1xyXG4gIEBPdXRwdXQoKSBvbmRyYXdlbmQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGN1cnJlbnRWYWx1ZSh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLl9jdXJyZW50VmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgIHRoaXMuZm9ybUdyb3VwID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgIHVzZXJuYW1lOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5zaWduYXR1cmVQYWQuY2xlYXIoKTtcclxuICB9XHJcblxyXG4gIG9uUmVzaXplU3RvcCgkZXZlbnQpIHtcclxuICAgIHRoaXMuX3VwbG9hZGVkSW1hZ2VTcmNTdHlsZS5zaXplID0gJGV2ZW50LnNpemU7XHJcbiAgfVxyXG5cclxuICBvbk1vdmVFbmQoJGV2ZW50KSB7XHJcbiAgICB0aGlzLl91cGxvYWRlZEltYWdlU3JjU3R5bGUucG9zaXRpb24gPSAkZXZlbnQ7XHJcbiAgfVxyXG5cclxuXHJcbiAgYmVmb3JlVXBsb2FkID0gKGZpbGU6IFVwbG9hZEZpbGUpOiBib29sZWFuID0+IHtcclxuICAgIHRoaXMuZmlsZXMgPSBbXS5jb25jYXQoZmlsZSk7XHJcbiAgICBjb25zdCB1cmw6IHN0cmluZyA9IChmaWxlLm5hbWUgfHwgJycpIGFzIHN0cmluZztcclxuICAgIGlmICghdXJsKSB7XHJcbiAgICAgIHRoaXMuZmlsZXMgPSBbXTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZXh0ZW5zaW9uID0gdGhpcy5leHRuYW1lKHVybCk7XHJcblxyXG4gICAgaWYgKC8od2VicHxzdmd8cG5nfGdpZnxqcGd8anBlZ3xibXApJC9pLnRlc3QoZXh0ZW5zaW9uKSkge1xyXG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICBmaWxlLmxpbmtQcm9wcyA9IHR5cGVvZiBmaWxlLmxpbmtQcm9wcyA9PT0gJ3N0cmluZycgPyBKU09OLnBhcnNlKGZpbGUubGlua1Byb3BzKSA6IGZpbGUubGlua1Byb3BzO1xyXG4gICAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX3VwbG9hZGVkSW1hZ2VTcmMgPSByZWFkZXIucmVzdWx0IGFzIHN0cmluZztcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgYmxvYiA9IGZpbGUgYXMgYW55O1xyXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcclxuICAgIH0gICAgXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBleHRuYW1lKHVybDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHRlbXAgPSB1cmwuc3BsaXQoJy8nKTtcclxuICAgIGNvbnN0IGZpbGVuYW1lID0gdGVtcFt0ZW1wLmxlbmd0aCAtIDFdO1xyXG4gICAgY29uc3QgZmlsZW5hbWVXaXRob3V0U3VmZml4ID0gZmlsZW5hbWUuc3BsaXQoLyN8XFw/LylbMF07XHJcbiAgICByZXR1cm4gKC9cXC5bXi4vXFxcXF0qJC8uZXhlYyhmaWxlbmFtZVdpdGhvdXRTdWZmaXgpIHx8IFsnJ10pWzBdO1xyXG4gIH1cclxuXHJcblxyXG4gIGlzVmFsaWQoKSB7XHJcbiAgICBzd2l0Y2ggKHRoaXMuY3VycmVudCkge1xyXG4gICAgICBjYXNlIDA6XHJcbiAgICAgICAgcmV0dXJuICF0aGlzLmZvcm1Hcm91cC52YWxpZDtcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICAgIHJldHVybiAhdGhpcy5fc2lnbmF0dXJlRGF0YVVybDtcclxuICAgICAgY2FzZSAyOlxyXG4gICAgICAgIHJldHVybiAhdGhpcy5fdXBsb2FkZWRJbWFnZVNyYztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZUN1cnJlbnQoaWR4KSB7XHJcbiAgICB0aGlzLmN1cnJlbnQgPSBpZHg7XHJcbiAgfVxyXG5cclxuICBkcmF3Q29tcGxldGUoKSB7XHJcbiAgICBpZiAodGhpcy5leHRlbmRlZFZlcnNpb24pIHtcclxuICAgICAgdGhpcy5fc2lnbmF0dXJlRGF0YVVybCA9IHRoaXMuc2lnbmF0dXJlUGFkLnRvRGF0YVVSTCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLm9uZHJhd2VuZC5lbWl0KHRoaXMuc2lnbmF0dXJlUGFkLnRvRGF0YVVSTCgpKTtcclxuICB9XHJcblxyXG4gIG9wZW5Nb2RhbCgpIHtcclxuICAgIHRoaXMuX2lzVmlzaWJsZSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDYW5jZWwoKSB7XHJcbiAgICB0aGlzLl9pc1Zpc2libGUgPSBmYWxzZTtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzKSB7XHJcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2tleV0ubWFya0FzUHJpc3RpbmUoKTtcclxuICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNba2V5XS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmZvcm1Hcm91cC5yZXNldCgpO1xyXG4gICAgdGhpcy5zYXZlU2lnbmF0dXJlID0gdHJ1ZTtcclxuICAgIHRoaXMuX3NpZ25hdHVyZURhdGFVcmwgPSBudWxsO1xyXG4gICAgdGhpcy5zaWduYXR1cmVQYWQuY2xlYXIoKTtcclxuICAgIHRoaXMuY3VycmVudCA9IDA7XHJcbiAgICB0aGlzLl91cGxvYWRlZEltYWdlU3JjID0gbnVsbDtcclxuICAgIHRoaXMuX3VwbG9hZGVkSW1hZ2VTcmNTdHlsZSA9IHt9O1xyXG4gICAgdGhpcy5maWxlcyA9IFtdO1xyXG4gICAgdGhpcy5vbmNhbmNlbC5lbWl0KHRoaXMuX2lzVmlzaWJsZSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVPaygpIHtcclxuICAgIGNvbnN0IHZhbHVlOiBhbnkgPSB7fTtcclxuICAgIGlmICh0aGlzLmN1cnJlbnQgPT09IDApIHtcclxuICAgICAgdmFsdWUuc2F2ZUZvckZ1dHVyZVVzZSA9IHRoaXMuc2F2ZVNpZ25hdHVyZTtcclxuICAgICAgdmFsdWUudXNlclNpZ25hdHVyZSA9IHRoaXMuZm9ybUdyb3VwLmdldCgndXNlcm5hbWUnKSEudmFsdWU7XHJcbiAgICAgIHZhbHVlLnNpZ25hdHVyZVR5cGUgPSAndHlwZSc7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jdXJyZW50ID09PSAxKSB7XHJcbiAgICAgIHZhbHVlLnNhdmVGb3JGdXR1cmVVc2UgPSB0aGlzLnNhdmVTaWduYXR1cmU7XHJcbiAgICAgIHZhbHVlLnVzZXJTaWduYXR1cmUgPSB0aGlzLl9zaWduYXR1cmVEYXRhVXJsO1xyXG4gICAgICB2YWx1ZS5zaWduYXR1cmVUeXBlID0gJ2RyYXcnO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuY3VycmVudCA9PT0gMikge1xyXG4gICAgICB2YWx1ZS5zYXZlRm9yRnV0dXJlVXNlID0gdGhpcy5zYXZlU2lnbmF0dXJlO1xyXG4gICAgICB2YWx1ZS51c2VyU2lnbmF0dXJlID0gdGhpcy5fdXBsb2FkZWRJbWFnZVNyYztcclxuICAgICAgdmFsdWUuc2lnbmF0dXJlSW1nU3R5bGUgPSB0aGlzLl91cGxvYWRlZEltYWdlU3JjU3R5bGU7XHJcbiAgICAgIHZhbHVlLnNpZ25hdHVyZVR5cGUgPSAnaW1hZ2UnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fY3VycmVudFZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLm9uc3VibWl0LmVtaXQodmFsdWUpO1xyXG4gICAgdGhpcy5oYW5kbGVDYW5jZWwoKTtcclxuICB9XHJcblxyXG4gIGNoZWNrUHJlc3NlZEtleXMoJGV2ZW50KSB7XHJcbiAgICBpZiAoJGV2ZW50LndoaWNoID09PSA5MCAmJiAkZXZlbnQuY3RybEtleSkge1xyXG4gICAgICBjb25zdCBkYXRhID0gdGhpcy5zaWduYXR1cmVQYWQudG9EYXRhKCk7XHJcbiAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgZGF0YS5wb3AoKTtcclxuICAgICAgICB0aGlzLnNpZ25hdHVyZVBhZC5mcm9tRGF0YShkYXRhKTtcclxuICAgICAgICB0aGlzLl9zaWduYXR1cmVEYXRhVXJsID0gdGhpcy5zaWduYXR1cmVQYWQudG9EYXRhVVJMKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==