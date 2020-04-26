/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewEncapsulation, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { Object } from 'core-js';
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
    function CmacsSignatureComponent(fb, cdr) {
        var _this = this;
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
        function (file) {
            _this.files = [].concat(file);
            /** @type {?} */
            var url = (/** @type {?} */ ((file.name || '')));
            if (!url) {
                _this.files = [];
                return false;
            }
            /** @type {?} */
            var extension = _this.extname(url);
            if (/(webp|svg|png|gif|jpg|jpeg|bmp)$/i.test(extension)) {
                /** @type {?} */
                var reader_1 = new FileReader();
                file.linkProps = typeof file.linkProps === 'string' ? JSON.parse(file.linkProps) : file.linkProps;
                reader_1.onload = (/**
                 * @return {?}
                 */
                function () {
                    _this._uploadedImageSrc = (/** @type {?} */ (reader_1.result));
                });
                /** @type {?} */
                var blob = (/** @type {?} */ (file));
                reader_1.readAsDataURL(blob);
            }
            return false;
        });
        this.formGroup = this.fb.group({
            username: ['', [Validators.required]]
        });
    }
    Object.defineProperty(CmacsSignatureComponent.prototype, "currentValue", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._currentValue = value;
            this.cdr.detectChanges();
        },
        enumerable: true,
        configurable: true
    });
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
     * @param {?} $event
     * @return {?}
     */
    CmacsSignatureComponent.prototype.onResizeStop = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this._uploadedImageSrcStyle.size = $event.size;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    CmacsSignatureComponent.prototype.onMoveEnd = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this._uploadedImageSrcStyle.position = $event;
    };
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    CmacsSignatureComponent.prototype.extname = /**
     * @private
     * @param {?} url
     * @return {?}
     */
    function (url) {
        /** @type {?} */
        var temp = url.split('/');
        /** @type {?} */
        var filename = temp[temp.length - 1];
        /** @type {?} */
        var filenameWithoutSuffix = filename.split(/#|\?/)[0];
        return (/\.[^./\\]*$/.exec(filenameWithoutSuffix) || [''])[0];
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
                return !this._signatureDataUrl;
            case 2:
                return !this._uploadedImageSrc;
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
        if (this.extendedVersion) {
            this._signatureDataUrl = this.signaturePad.toDataURL();
            return;
        }
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
        for (var key in this.formGroup.controls) {
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
    };
    /**
     * @return {?}
     */
    CmacsSignatureComponent.prototype.handleOk = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var value = {};
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
                this._signatureDataUrl = this.signaturePad.toDataURL();
            }
        }
    };
    CmacsSignatureComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-signature',
                    exportAs: 'cmacsSignature',
                    template: "<ng-container *ngIf=\"!extendedVersion\">\r\n  <div class=\"cmacs-signature-sign-wrapper cmacs-signature-pad\"\r\n       tabindex='1'\r\n       (keydown)=\"checkPressedKeys($event)\">\r\n    <span class=\"cmacs-signature-x\">X</span>\r\n    <signature-pad [options]=\"signaturePadOptions\"\r\n                   (onEndEvent)=\"drawComplete()\"></signature-pad>\r\n  </div>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"extendedVersion\">\r\n  <div class=\"cmacs-signature-wrapper\">\r\n    <ng-container *ngIf=\"!_currentValue\">\r\n      <i class=\"cmacs-signature-close-icon iconUISmall-Excel\"></i>\r\n      <span class=\"cmacs-signature-placeholder\"\r\n            (click)=\"openModal()\">\r\n        {{i18n['Click here to sign'] ? i18n['Click here to sign'] : _i18n['Click here to sign']}}\r\n      </span>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"_currentValue\">\r\n      <ng-container *ngIf=\"_currentValue.signatureType === 'type'\">\r\n        <div class=\"cmacs-signature-sign-input cmacs-signature-input-userSignature\">{{_currentValue.userSignature}}</div>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"_currentValue.signatureType === 'draw'\">\r\n        <img class=\"centered\" style=\"max-height: 50px !important; max-width: inherit\" [src]=\"_currentValue.userSignature\" />\r\n      </ng-container>\r\n      <ng-container *ngIf=\"_currentValue.signatureType === 'image'\">\r\n        <img class=\"centered\" style=\"max-height: 50px !important\"\r\n             max-width: inherit\r\n             [style.width.px]=\"_currentValue.signatureImgStyle.size ? _currentValue.signatureImgStyle.size.width : null\"\r\n             [style.height.px]=\"_currentValue.signatureImgStyle.size ? _currentValue.signatureImgStyle.size.height : null\"\r\n             [src]=\"_currentValue.userSignature\"\r\n       />\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n\r\n  <cmacs-modal\r\n    class=\"cmacs-signature-modal\"\r\n    modalType=\"helpfulTipsNoPanel\"\r\n    [(visible)]=\"_isVisible\"\r\n    [width]=\"'570px'\"\r\n    title=\"{{i18n['Sign to Complete'] ? i18n['Sign to Complete'] : _i18n['Sign to Complete']}}\"\r\n    (onCancel)=\"handleCancel()\"\r\n    [footer]=\"modalFooter\">\r\n\r\n    <div cmacs-modal-helpfulTips-no-panel-center>\r\n        <cmacs-tabset class=\"cmacs-signature-tabset cmacs-width-100\"\r\n                      [selectedIndex]=\"current\"\r\n                      (selectedIndexChange)=\"updateCurrent($event)\">\r\n\r\n          <!--Type Pane-->\r\n          <cmacs-tab title=\"{{i18n['Type'] ? i18n['Type'] : _i18n['Type']}}\" >\r\n            <form cmacs-form [formGroup]=\"formGroup\">\r\n              <cmacs-form-item>\r\n                <cmacs-form-label cmacsRequired>\r\n                  {{i18n['Enter Your Name'] ? i18n['Enter Your Name'] : _i18n['Enter Your Name']}}\r\n                </cmacs-form-label>\r\n                <cmacs-form-control>\r\n                  <input class=\"cmacs-signature-username-input\" cmacs-input [formControlName]=\"'username'\"\r\n                         placeholder=\"{{i18n['Text Here'] ? i18n['Text Here'] : _i18n['Text Here']}}\" />\r\n                </cmacs-form-control>\r\n              </cmacs-form-item>\r\n\r\n              <div class=\"cmacs-signature-sign-wrapper\">\r\n                <span class=\"cmacs-signature-x\">X</span>\r\n                <div class=\"cmacs-signature-sign-input\" *ngIf=\"formGroup.get('username')!.value && formGroup.get('username')!.value.length\">{{formGroup.get('username')!.value}}</div>\r\n                <div class=\"cmacs-signature-sign-input cmacs-invisible-font\" *ngIf=\"!formGroup.get('username')!.value || (formGroup.get('username')!.value && !formGroup.get('username')!.value.length)\">Test</div>\r\n              </div>\r\n            </form>\r\n\r\n            <div class=\"cmacs-signature-text cmacs-signature-text-format\">\r\n              {{i18n['I, User Full Name, have reviewed and completed this report.'] ? i18n['I, User Full Name, have reviewed and completed this report.']\r\n              : _i18n['I, User Full Name, have reviewed and completed this report.']}}\r\n            </div>\r\n            <label class=\"cmacs-signature-text\" cmacs-checkbox [(ngModel)]=\"saveSignature\">\r\n              {{i18n['Select here to save your signature for future use.'] ? i18n['Select here to save your signature for future use.']\r\n              : _i18n['Select here to save your signature for future use.']}}\r\n            </label>\r\n          </cmacs-tab>\r\n          <!--Type Pane-->\r\n\r\n          <!--Draw pane-->\r\n          <cmacs-tab title=\"{{i18n['Draw'] ? i18n['Draw'] : _i18n['Draw']}}\">\r\n\r\n            <cmacs-form-item class=\"cmacs-no-margin\">\r\n              <cmacs-form-label cmacsRequired>\r\n                {{i18n['Signature'] ? i18n['Signature'] : _i18n['Signature']}}\r\n              </cmacs-form-label>\r\n            </cmacs-form-item>\r\n            <div class=\"cmacs-signature-sign-wrapper cmacs-signature-pad\"\r\n                 tabindex='1'\r\n                 (keydown)=\"checkPressedKeys($event)\">\r\n              <span class=\"cmacs-signature-x\">X</span>\r\n              <signature-pad [options]=\"_signaturePadOptions\"\r\n                             (onEndEvent)=\"drawComplete()\"></signature-pad>\r\n            </div>\r\n            <div class=\"cmacs-signature-text cmacs-signature-text-format\">\r\n              {{i18n['I, User Full Name, have reviewed and completed this report.'] ? i18n['I, User Full Name, have reviewed and completed this report.']\r\n              : _i18n['I, User Full Name, have reviewed and completed this report.']}}\r\n            </div>\r\n            <label class=\"cmacs-signature-text\" cmacs-checkbox [(ngModel)]=\"saveSignature\">\r\n              {{i18n['Select here to save your signature for future use.'] ? i18n['Select here to save your signature for future use.']\r\n              : _i18n['Select here to save your signature for future use.']}}\r\n            </label>\r\n          </cmacs-tab>\r\n          <!--Draw pane-->\r\n\r\n          <!--Image pane-->\r\n          <cmacs-tab title=\"{{i18n['Image'] ? i18n['Image'] : _i18n['Image']}}\">\r\n            <cmacs-form-item class=\"cmacs-no-margin\">\r\n              <cmacs-form-label cmacsRequired>\r\n                {{i18n['Signature'] ? i18n['Signature'] : _i18n['Signature']}}\r\n              </cmacs-form-label>\r\n            </cmacs-form-item>\r\n\r\n            <ng-container *ngIf=\"!_uploadedImageSrc\">\r\n                <nz-upload\r\n                class=\"cmacs-signature-upload-area\"\r\n                nzType=\"drag\"\r\n                nzAccept=\"image/*\"\r\n                [nzMultiple]=\"false\"\r\n                [(nzFileList)]=\"files\"\r\n                [nzBeforeUpload]=\"beforeUpload\"\r\n              >\r\n                  <span class=\"ant-upload-drag-icon\">\r\n                    <img src=\"/assets/upload-computer.png\">\r\n                  </span>\r\n                  <p class=\"cmacs-signature-upload-text\">\r\n                    {{i18n['Drag & Drop File Here or'] ? i18n['Drag & Drop File Here or']\r\n                    : _i18n['Drag & Drop File Here or']}}\r\n                  </p>\r\n                  <button cmacs-button>{{i18n['Browse Computer'] ? i18n['Browse Computer']\r\n                    : _i18n['Browse Computer']}}</button>\r\n                </nz-upload>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"_uploadedImageSrc\">\r\n              <div class=\"cmacs-signature-sign-wrapper cmacs-signature-image-src\">\r\n                <span class=\"cmacs-signature-x\">X</span>\r\n                <div #dragBounds\r\n                     style=\"max-width: 480px; width: 480px; max-height: 100px; height: 100px\"\r\n                     class=\"cmacs-signature-sign-input cmacs-signature-img-wrapper\">\r\n                  <div ngResizable\r\n                       style=\"max-width: 480px; max-height: 100px;\"\r\n                       class=\"cmacs-signature-img-wrapper-resizable-area\"\r\n                       rzHandles=\"n,s,e,w,se,sw\"\r\n                       ngDraggable\r\n                       [bounds]=\"dragBounds\"\r\n                       (rzStop)=\"onResizeStop($event)\"\r\n                       (endOffset)=\"onMoveEnd($event)\"\r\n                       [inBounds]=\"true\"\r\n                       [preventDefaultEvent]=\"true\">\r\n                    <img style=\"max-width: 480px; width: inherit; max-height: 100px; height: inherit\" [src]=\"_uploadedImageSrc\"/>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ng-container>\r\n\r\n            <div class=\"cmacs-signature-text cmacs-signature-text-format\">\r\n              {{i18n['I, User Full Name, have reviewed and completed this report.'] ? i18n['I, User Full Name, have reviewed and completed this report.']\r\n              : _i18n['I, User Full Name, have reviewed and completed this report.']}}\r\n            </div>\r\n            <label class=\"cmacs-signature-text\" cmacs-checkbox [(ngModel)]=\"saveSignature\">\r\n              {{i18n['Select here to save your signature for future use.'] ? i18n['Select here to save your signature for future use.']\r\n              : _i18n['Select here to save your signature for future use.']}}\r\n            </label>\r\n          </cmacs-tab>\r\n          <!--Image pane-->\r\n        </cmacs-tabset>\r\n    </div>\r\n\r\n  </cmacs-modal>\r\n\r\n  <ng-template #modalFooter>\r\n    <button cmacs-button type=\"default\" ghost style=\"float: left;\" (click)=\"handleCancel()\">\r\n      {{i18n['Cancel'] ? i18n['Cancel'] : _i18n['Cancel']}}\r\n    </button>\r\n    <button cmacs-button ghost type=\"primary\" [disabled]=\"isValid()\" (click)=\"handleOk()\">\r\n      <span>{{i18n['Verify'] ? i18n['Verify'] : _i18n['Verify']}}</span>\r\n    </button>\r\n  </ng-template>\r\n</ng-container>\r\n",
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    styles: [".cmacs-signature-wrapper{background-color:#fff;height:58px;border-radius:3px;border:1px solid #dee0e5;width:100%;max-width:100%;text-align:center}.centered{top:50%;position:relative;-webkit-transform:translateY(-50%);transform:translateY(-50%)}mwlResizable{box-sizing:border-box}.resize-handle-bottom,.resize-handle-top{position:absolute;height:5px;cursor:row-resize;width:100%}.resize-handle-top{top:0}.resize-handle-bottom{bottom:0}.resize-handle-left,.resize-handle-right{position:absolute;height:100%;cursor:col-resize;width:5px}.resize-handle-left{left:0}.resize-handle-right{right:0}.cmacs-signature-x{font-size:18px;color:#bec4cd}.cmacs-signature-placeholder{font-family:Roboto-Regular;font-size:14px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.71;letter-spacing:normal;color:#2a7cff;top:calc(50% - 11px);position:relative}.cmacs-signature-placeholder:hover{cursor:pointer}.cmacs-signature-close-icon{font-family:Roboto-Regular;font-size:18px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.11;letter-spacing:normal;color:#bec4cd;top:calc(50% - 9px);position:relative}.cmacs-signature-username-input{width:225px!important;display:block!important}.cmacs-signature-sign-wrapper{height:177px;border-radius:3px;border:1px solid #dee0e5;background-color:#f6f7fb;text-align:center;padding-top:45px}.cmacs-invisible-font{color:transparent!important}.cmacs-signature-sign-input,.cmacs-signature-sign-input:focus,.cmacs-signature-sign-input:hover{border-radius:unset;width:88%!important;display:inline-block;max-width:88%;margin-left:8px!important;overflow:hidden;margin:0 auto;text-overflow:clip;white-space:nowrap;border-bottom:1px solid #dee0e5;background-color:#f6f7fb;font-family:AlexBrush,AlexBrush-Regular;font-size:44px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.5;letter-spacing:normal;color:#3b3f46}.cmacs-signature-text{font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;color:#656c79!important}.cmacs-signature-text-format{margin-top:15px;margin-bottom:25px}.cmacs-signature-modal .ant-modal-body{height:490px!important}.cmacs-signature-tabset .ant-tabs-bar{border-color:transparent!important}.cmacs-width-100{width:100%}.cmacs-signature-pad{height:231px;padding-top:0}.cmacs-signature-pad signature-pad{border-bottom:1px solid #bec4cd}.cmacs-no-margin{margin:0!important}.cmacs-signature-upload-area .ant-upload.ant-upload-drag{height:231px}.cmacs-signature-upload-text{font-family:Roboto,Roboto-Regular;font-size:14px;font-weight:400;font-stretch:normal;font-style:normal;line-height:.86;letter-spacing:normal;color:#97a0ae;margin:20px 0!important}.cmacs-signature-image-src{height:231px!important;background-color:#fff!important;border-radius:3px!important;border:1px dashed #bec4cd!important}.cmacs-signature-img-wrapper{background-color:#fff!important}.cmacs-signature-img-wrapper-resizable-area{border:1px dashed #2a7cff;overflow:hidden!important}.cmacs-signature-input-userSignature{border-bottom:none!important;background-color:#fff!important;height:100%!important;overflow:hidden!important;line-height:1!important}"]
                }] }
    ];
    /** @nocollapse */
    CmacsSignatureComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: ChangeDetectorRef }
    ]; };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2lnbmF0dXJlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mtc2lnbmF0dXJlL2NtYWNzLXNpZ25hdHVyZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQ3RDLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFDaEQsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLFdBQVcsRUFBYSxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFHbkUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFNBQVMsQ0FBQzs7QUFFakMsTUFBTSxLQUFPLHNCQUFzQixHQUFHO0lBQ3BDLG9CQUFvQixFQUFFLG9CQUFvQjtJQUMxQyxrQkFBa0IsRUFBRSxrQkFBa0I7SUFDdEMsUUFBUSxFQUFFLFFBQVE7SUFDbEIsUUFBUSxFQUFFLFFBQVE7SUFDbEIsaUJBQWlCLEVBQUUsaUJBQWlCO0lBQ3BDLFdBQVcsRUFBRSxXQUFXO0lBQ3hCLE1BQU0sRUFBRSxNQUFNO0lBQ2QsTUFBTSxFQUFFLE1BQU07SUFDZCxPQUFPLEVBQUUsT0FBTztJQUNoQiw2REFBNkQsRUFBRSw2REFBNkQ7SUFDNUgsb0RBQW9ELEVBQUUsb0RBQW9EO0lBQzFHLFdBQVcsRUFBRSxXQUFXO0lBQ3hCLDBCQUEwQixFQUFFLDBCQUEwQjtJQUN0RCxpQkFBaUIsRUFBRSxpQkFBaUI7Q0FDckM7QUFFRDtJQXlDRSxpQ0FBb0IsRUFBZSxFQUFVLEdBQXNCO1FBQW5FLGlCQUlDO1FBSm1CLE9BQUUsR0FBRixFQUFFLENBQWE7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQS9CbkUsZUFB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Z0JBdktGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQiw0eFRBQStDO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsbUJBQW1CLEVBQUUsS0FBSzs7aUJBRTNCOzs7O2dCQTlCTyxXQUFXO2dCQUZhLGlCQUFpQjs7O3VCQW1EOUMsS0FBSztzQ0FDTCxLQUFLO2tDQUNMLEtBQUs7MkJBRUwsTUFBTTsyQkFDTixNQUFNOytCQUNOLFNBQVMsU0FBQyxZQUFZOzRCQUN0QixNQUFNOytCQUVOLEtBQUs7O0lBc0lSLDhCQUFDO0NBQUEsQUF6S0QsSUF5S0M7U0FqS1ksdUJBQXVCOzs7SUFFbEMsNkNBQW1COztJQUNuQiw0Q0FBcUI7O0lBQ3JCLGdEQUFxQjs7SUFDckIsd0NBQStCOztJQUMvQiwwQ0FBWTs7SUFDWix3Q0FBVzs7SUFDWCxvREFBeUI7O0lBQ3pCLGdEQUFxQjs7SUFDckIsdURBSUU7O0lBQ0Ysb0RBQXlCOztJQUN6Qix5REFBaUM7O0lBRWpDLHVDQUE0Qzs7SUFDNUMsc0RBQTBDOztJQUMxQyxrREFBaUM7O0lBRWpDLDJDQUF3RTs7SUFDeEUsMkNBQWdFOztJQUNoRSwrQ0FBb0Q7O0lBQ3BELDRDQUFpRTs7SUEyQmpFLCtDQW1CRTs7Ozs7SUF0Q1UscUNBQXVCOzs7OztJQUFFLHNDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sIFZpZXdDaGlsZCwgQ2hhbmdlRGV0ZWN0b3JSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU2lnbmF0dXJlUGFkIH0gZnJvbSAnYW5ndWxhcjItc2lnbmF0dXJlcGFkL3NpZ25hdHVyZS1wYWQnO1xyXG5pbXBvcnQge1VwbG9hZEZpbGV9IGZyb20gXCJuZy16b3Jyby1hbnRkXCI7XHJcbmltcG9ydCB7Q21hY3NNZXNzYWdlU2VydmljZX0gZnJvbSBcIi4uL2NtYWNzLW1lc3NhZ2UvY21hY3MtbWVzc2FnZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IE9iamVjdCB9IGZyb20gJ2NvcmUtanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05BVFVSRV9MT0NBTElaQVRJT04gPSB7XHJcbiAgJ0NsaWNrIGhlcmUgdG8gc2lnbic6ICdDbGljayBoZXJlIHRvIHNpZ24nLFxyXG4gICdTaWduIHRvIENvbXBsZXRlJzogJ1NpZ24gdG8gQ29tcGxldGUnLFxyXG4gICdDYW5jZWwnOiAnQ2FuY2VsJyxcclxuICAnVmVyaWZ5JzogJ1ZlcmlmeScsXHJcbiAgJ0VudGVyIFlvdXIgTmFtZSc6ICdFbnRlciBZb3VyIE5hbWUnLFxyXG4gICdUZXh0IEhlcmUnOiAnVGV4dCBIZXJlJyxcclxuICAnVHlwZSc6ICdUeXBlJyxcclxuICAnRHJhdyc6ICdEcmF3JyxcclxuICAnSW1hZ2UnOiAnSW1hZ2UnLFxyXG4gICdJLCBVc2VyIEZ1bGwgTmFtZSwgaGF2ZSByZXZpZXdlZCBhbmQgY29tcGxldGVkIHRoaXMgcmVwb3J0Lic6ICdJLCBVc2VyIEZ1bGwgTmFtZSwgaGF2ZSByZXZpZXdlZCBhbmQgY29tcGxldGVkIHRoaXMgcmVwb3J0LicsXHJcbiAgJ1NlbGVjdCBoZXJlIHRvIHNhdmUgeW91ciBzaWduYXR1cmUgZm9yIGZ1dHVyZSB1c2UuJzogJ1NlbGVjdCBoZXJlIHRvIHNhdmUgeW91ciBzaWduYXR1cmUgZm9yIGZ1dHVyZSB1c2UuJyxcclxuICAnU2lnbmF0dXJlJzogJ1NpZ25hdHVyZScsXHJcbiAgJ0RyYWcgJiBEcm9wIEZpbGUgSGVyZSBvcic6ICdEcmFnICYgRHJvcCBGaWxlIEhlcmUgb3InLFxyXG4gICdCcm93c2UgQ29tcHV0ZXInOiAnQnJvd3NlIENvbXB1dGVyJ1xyXG59O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1zaWduYXR1cmUnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NTaWduYXR1cmUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1zaWduYXR1cmUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3Mtc2lnbmF0dXJlLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NTaWduYXR1cmVDb21wb25lbnQge1xyXG5cclxuICBfaXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgZm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcbiAgc2F2ZVNpZ25hdHVyZSA9IHRydWU7XHJcbiAgX2kxOG4gPSBTSUdOQVRVUkVfTE9DQUxJWkFUSU9OO1xyXG4gIGN1cnJlbnQgPSAwO1xyXG4gIGZpbGVzID0gW107XHJcbiAgX3NpZ25hdHVyZURhdGFVcmwgPSBudWxsO1xyXG4gIF9jdXJyZW50VmFsdWUgPSBudWxsO1xyXG4gIF9zaWduYXR1cmVQYWRPcHRpb25zOiBPYmplY3QgPSB7XHJcbiAgICAnZG90U2l6ZSc6IDAuNCxcclxuICAgICdjYW52YXNXaWR0aCc6IDQyMCxcclxuICAgICdjYW52YXNIZWlnaHQnOiAxMjZcclxuICB9O1xyXG4gIF91cGxvYWRlZEltYWdlU3JjID0gbnVsbDtcclxuICBfdXBsb2FkZWRJbWFnZVNyY1N0eWxlOiBhbnkgPSB7fTtcclxuXHJcbiAgQElucHV0KCkgaTE4bjogYW55ID0gU0lHTkFUVVJFX0xPQ0FMSVpBVElPTjtcclxuICBASW5wdXQoKSBzaWduYXR1cmVQYWRPcHRpb25zOiBPYmplY3QgPSB7fTtcclxuICBASW5wdXQoKSBleHRlbmRlZFZlcnNpb24gPSBmYWxzZTtcclxuXHJcbiAgQE91dHB1dCgpIG9uY2FuY2VsOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgQE91dHB1dCgpIG9uc3VibWl0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBWaWV3Q2hpbGQoU2lnbmF0dXJlUGFkKSBzaWduYXR1cmVQYWQ6IFNpZ25hdHVyZVBhZDtcclxuICBAT3V0cHV0KCkgb25kcmF3ZW5kOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBjdXJyZW50VmFsdWUodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5fY3VycmVudFZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICB0aGlzLmZvcm1Hcm91cCA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICB1c2VybmFtZTogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuc2lnbmF0dXJlUGFkLmNsZWFyKCk7XHJcbiAgfVxyXG5cclxuICBvblJlc2l6ZVN0b3AoJGV2ZW50KSB7XHJcbiAgICB0aGlzLl91cGxvYWRlZEltYWdlU3JjU3R5bGUuc2l6ZSA9ICRldmVudC5zaXplO1xyXG4gIH1cclxuXHJcbiAgb25Nb3ZlRW5kKCRldmVudCkge1xyXG4gICAgdGhpcy5fdXBsb2FkZWRJbWFnZVNyY1N0eWxlLnBvc2l0aW9uID0gJGV2ZW50O1xyXG4gIH1cclxuXHJcblxyXG4gIGJlZm9yZVVwbG9hZCA9IChmaWxlOiBVcGxvYWRGaWxlKTogYm9vbGVhbiA9PiB7XHJcbiAgICB0aGlzLmZpbGVzID0gW10uY29uY2F0KGZpbGUpO1xyXG4gICAgY29uc3QgdXJsOiBzdHJpbmcgPSAoZmlsZS5uYW1lIHx8ICcnKSBhcyBzdHJpbmc7XHJcbiAgICBpZiAoIXVybCkge1xyXG4gICAgICB0aGlzLmZpbGVzID0gW107XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGNvbnN0IGV4dGVuc2lvbiA9IHRoaXMuZXh0bmFtZSh1cmwpO1xyXG5cclxuICAgIGlmICgvKHdlYnB8c3ZnfHBuZ3xnaWZ8anBnfGpwZWd8Ym1wKSQvaS50ZXN0KGV4dGVuc2lvbikpIHtcclxuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgZmlsZS5saW5rUHJvcHMgPSB0eXBlb2YgZmlsZS5saW5rUHJvcHMgPT09ICdzdHJpbmcnID8gSlNPTi5wYXJzZShmaWxlLmxpbmtQcm9wcykgOiBmaWxlLmxpbmtQcm9wcztcclxuICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLl91cGxvYWRlZEltYWdlU3JjID0gcmVhZGVyLnJlc3VsdCBhcyBzdHJpbmc7XHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IGJsb2IgPSBmaWxlIGFzIGFueTtcclxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XHJcbiAgICB9ICAgIFxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgZXh0bmFtZSh1cmw6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCB0ZW1wID0gdXJsLnNwbGl0KCcvJyk7XHJcbiAgICBjb25zdCBmaWxlbmFtZSA9IHRlbXBbdGVtcC5sZW5ndGggLSAxXTtcclxuICAgIGNvbnN0IGZpbGVuYW1lV2l0aG91dFN1ZmZpeCA9IGZpbGVuYW1lLnNwbGl0KC8jfFxcPy8pWzBdO1xyXG4gICAgcmV0dXJuICgvXFwuW14uL1xcXFxdKiQvLmV4ZWMoZmlsZW5hbWVXaXRob3V0U3VmZml4KSB8fCBbJyddKVswXTtcclxuICB9XHJcblxyXG5cclxuICBpc1ZhbGlkKCkge1xyXG4gICAgc3dpdGNoICh0aGlzLmN1cnJlbnQpIHtcclxuICAgICAgY2FzZSAwOlxyXG4gICAgICAgIHJldHVybiAhdGhpcy5mb3JtR3JvdXAudmFsaWQ7XHJcbiAgICAgIGNhc2UgMTpcclxuICAgICAgICByZXR1cm4gIXRoaXMuX3NpZ25hdHVyZURhdGFVcmw7XHJcbiAgICAgIGNhc2UgMjpcclxuICAgICAgICByZXR1cm4gIXRoaXMuX3VwbG9hZGVkSW1hZ2VTcmM7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDdXJyZW50KGlkeCkge1xyXG4gICAgdGhpcy5jdXJyZW50ID0gaWR4O1xyXG4gIH1cclxuXHJcbiAgZHJhd0NvbXBsZXRlKCkge1xyXG4gICAgaWYgKHRoaXMuZXh0ZW5kZWRWZXJzaW9uKSB7XHJcbiAgICAgIHRoaXMuX3NpZ25hdHVyZURhdGFVcmwgPSB0aGlzLnNpZ25hdHVyZVBhZC50b0RhdGFVUkwoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vbmRyYXdlbmQuZW1pdCh0aGlzLnNpZ25hdHVyZVBhZC50b0RhdGFVUkwoKSk7XHJcbiAgfVxyXG5cclxuICBvcGVuTW9kYWwoKSB7XHJcbiAgICB0aGlzLl9pc1Zpc2libGUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2FuY2VsKCkge1xyXG4gICAgdGhpcy5faXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmZvcm1Hcm91cC5jb250cm9scykge1xyXG4gICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1trZXldLm1hcmtBc1ByaXN0aW5lKCk7XHJcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2tleV0udXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5mb3JtR3JvdXAucmVzZXQoKTtcclxuICAgIHRoaXMuc2F2ZVNpZ25hdHVyZSA9IHRydWU7XHJcbiAgICB0aGlzLl9zaWduYXR1cmVEYXRhVXJsID0gbnVsbDtcclxuICAgIHRoaXMuc2lnbmF0dXJlUGFkLmNsZWFyKCk7XHJcbiAgICB0aGlzLmN1cnJlbnQgPSAwO1xyXG4gICAgdGhpcy5fdXBsb2FkZWRJbWFnZVNyYyA9IG51bGw7XHJcbiAgICB0aGlzLl91cGxvYWRlZEltYWdlU3JjU3R5bGUgPSB7fTtcclxuICAgIHRoaXMuZmlsZXMgPSBbXTtcclxuICAgIHRoaXMub25jYW5jZWwuZW1pdCh0aGlzLl9pc1Zpc2libGUpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlT2soKSB7XHJcbiAgICBjb25zdCB2YWx1ZTogYW55ID0ge307XHJcbiAgICBpZiAodGhpcy5jdXJyZW50ID09PSAwKSB7XHJcbiAgICAgIHZhbHVlLnNhdmVGb3JGdXR1cmVVc2UgPSB0aGlzLnNhdmVTaWduYXR1cmU7XHJcbiAgICAgIHZhbHVlLnVzZXJTaWduYXR1cmUgPSB0aGlzLmZvcm1Hcm91cC5nZXQoJ3VzZXJuYW1lJykhLnZhbHVlO1xyXG4gICAgICB2YWx1ZS5zaWduYXR1cmVUeXBlID0gJ3R5cGUnO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuY3VycmVudCA9PT0gMSkge1xyXG4gICAgICB2YWx1ZS5zYXZlRm9yRnV0dXJlVXNlID0gdGhpcy5zYXZlU2lnbmF0dXJlO1xyXG4gICAgICB2YWx1ZS51c2VyU2lnbmF0dXJlID0gdGhpcy5fc2lnbmF0dXJlRGF0YVVybDtcclxuICAgICAgdmFsdWUuc2lnbmF0dXJlVHlwZSA9ICdkcmF3JztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmN1cnJlbnQgPT09IDIpIHtcclxuICAgICAgdmFsdWUuc2F2ZUZvckZ1dHVyZVVzZSA9IHRoaXMuc2F2ZVNpZ25hdHVyZTtcclxuICAgICAgdmFsdWUudXNlclNpZ25hdHVyZSA9IHRoaXMuX3VwbG9hZGVkSW1hZ2VTcmM7XHJcbiAgICAgIHZhbHVlLnNpZ25hdHVyZUltZ1N0eWxlID0gdGhpcy5fdXBsb2FkZWRJbWFnZVNyY1N0eWxlO1xyXG4gICAgICB2YWx1ZS5zaWduYXR1cmVUeXBlID0gJ2ltYWdlJztcclxuICAgIH1cclxuICAgIHRoaXMuX2N1cnJlbnRWYWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5vbnN1Ym1pdC5lbWl0KHZhbHVlKTtcclxuICAgIHRoaXMuaGFuZGxlQ2FuY2VsKCk7XHJcbiAgfVxyXG5cclxuICBjaGVja1ByZXNzZWRLZXlzKCRldmVudCkge1xyXG4gICAgaWYgKCRldmVudC53aGljaCA9PT0gOTAgJiYgJGV2ZW50LmN0cmxLZXkpIHtcclxuICAgICAgY29uc3QgZGF0YSA9IHRoaXMuc2lnbmF0dXJlUGFkLnRvRGF0YSgpO1xyXG4gICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgIGRhdGEucG9wKCk7XHJcbiAgICAgICAgdGhpcy5zaWduYXR1cmVQYWQuZnJvbURhdGEoZGF0YSk7XHJcbiAgICAgICAgdGhpcy5fc2lnbmF0dXJlRGF0YVVybCA9IHRoaXMuc2lnbmF0dXJlUGFkLnRvRGF0YVVSTCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=