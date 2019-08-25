/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { slideAlertMotion, InputBoolean } from 'ng-zorro-antd/core';
export class CmacsAlertComponent {
    constructor() {
        this.destroy = false;
        this.iconType = 'info-circle';
        this.iconTheme = 'fill';
        this.isTypeSet = false;
        this.isShowIconSet = false;
        this.type = 'info';
        this.closeable = false;
        this.showIcon = false;
        this.banner = false;
        this.onClose = new EventEmitter();
    }
    /**
     * @return {?}
     */
    closeAlert() {
        this.destroy = true;
    }
    /**
     * @return {?}
     */
    onFadeAnimationDone() {
        if (this.destroy) {
            this.onClose.emit(true);
        }
    }
    /**
     * @return {?}
     */
    updateIconClassMap() {
        switch (this.type) {
            case 'error':
                this.iconType = 'close-circle';
                break;
            case 'success':
                this.iconType = 'check-circle';
                break;
            case 'info':
                this.iconType = 'info-circle';
                break;
            case 'warning':
                this.iconType = 'exclamation-circle';
                break;
        }
        this.iconTheme = this.description ? 'outline' : 'fill';
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { showIcon, description, type, banner } = changes;
        if (showIcon) {
            this.isShowIconSet = true;
        }
        if (description || type) {
            this.updateIconClassMap();
        }
        if (type) {
            this.isTypeSet = true;
        }
        if (banner) {
            if (!this.isTypeSet) {
                this.type = 'warning';
            }
            if (!this.isShowIconSet) {
                this.showIcon = true;
            }
        }
    }
}
CmacsAlertComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmacs-alert',
                exportAs: 'cmacsAlert',
                animations: [slideAlertMotion],
                template: "<div *ngIf=\"!destroy\"\r\n  class=\"ant-alert\"\r\n  [class.ant-alert-success]=\"type === 'success'\"\r\n  [class.ant-alert-info]=\"type === 'info'\"\r\n  [class.ant-alert-warning]=\"type === 'warning'\"\r\n  [class.ant-alert-error]=\"type === 'error'\"\r\n  [class.ant-alert-no-icon]=\"!showIcon\"\r\n  [class.ant-alert-banner]=\"banner\"\r\n  [class.ant-alert-closable]=\"closeable\"\r\n  [class.ant-alert-with-description]=\"!!description\"\r\n  [@slideAlertMotion]\r\n  (@slideAlertMotion.done)=\"onFadeAnimationDone()\">\r\n  <ng-container *ngIf=\"showIcon\">\r\n    <i class=\"ant-alert-icon\" [ngClass]=\"cmacsIconType\" *ngIf=\"cmacsIconType; else iconTemplate\"></i>\r\n    <ng-template #iconTemplate>\r\n      <i nz-icon class=\"ant-alert-icon\" [type]=\"iconType\" [theme]=\"iconTheme\"></i>\r\n    </ng-template>\r\n  </ng-container>\r\n  <span class=\"ant-alert-message\" *ngIf=\"message\">\r\n    <ng-container *cmacsStringTemplateOutlet=\"message\">{{ message }}</ng-container>\r\n  </span>\r\n  <span class=\"ant-alert-description\" *ngIf=\"description\">\r\n    <ng-container *cmacsStringTemplateOutlet=\"description\">{{ description }}</ng-container>\r\n  </span>\r\n  <a *ngIf=\"closeable || closeText\"\r\n    class=\"ant-alert-close-icon\"\r\n    (click)=\"closeAlert()\">\r\n    <ng-template #closeDefaultTemplate>\r\n      <i nz-icon type=\"close\" class=\"anticon-close\"></i>\r\n    </ng-template>\r\n    <ng-container *ngIf=\"closeText; else closeDefaultTemplate\">\r\n      <ng-container *cmacsStringTemplateOutlet=\"closeText\">{{ closeText }}</ng-container>\r\n    </ng-container>\r\n  </a>\r\n</div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                styles: [".ant-alert-info{background-color:#009fe3;border:1px solid #009fe3}.ant-alert{font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:1;letter-spacing:normal;color:#fff}.ant-alert-close-icon .anticon-close{color:#fff;-webkit-transition:color .3s;transition:color .3s;vertical-align:2px}", `
      cmacs-alert {
        display: block;
      }
    `]
            }] }
];
CmacsAlertComponent.propDecorators = {
    closeText: [{ type: Input }],
    cmacsIconType: [{ type: Input }],
    message: [{ type: Input }],
    description: [{ type: Input }],
    type: [{ type: Input }],
    closeable: [{ type: Input }],
    showIcon: [{ type: Input }],
    banner: [{ type: Input }],
    onClose: [{ type: Output }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsAlertComponent.prototype, "closeable", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsAlertComponent.prototype, "showIcon", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsAlertComponent.prototype, "banner", void 0);
if (false) {
    /** @type {?} */
    CmacsAlertComponent.prototype.destroy;
    /** @type {?} */
    CmacsAlertComponent.prototype.iconType;
    /** @type {?} */
    CmacsAlertComponent.prototype.iconTheme;
    /**
     * @type {?}
     * @private
     */
    CmacsAlertComponent.prototype.isTypeSet;
    /**
     * @type {?}
     * @private
     */
    CmacsAlertComponent.prototype.isShowIconSet;
    /** @type {?} */
    CmacsAlertComponent.prototype.closeText;
    /** @type {?} */
    CmacsAlertComponent.prototype.cmacsIconType;
    /** @type {?} */
    CmacsAlertComponent.prototype.message;
    /** @type {?} */
    CmacsAlertComponent.prototype.description;
    /** @type {?} */
    CmacsAlertComponent.prototype.type;
    /** @type {?} */
    CmacsAlertComponent.prototype.closeable;
    /** @type {?} */
    CmacsAlertComponent.prototype.showIcon;
    /** @type {?} */
    CmacsAlertComponent.prototype.banner;
    /** @type {?} */
    CmacsAlertComponent.prototype.onClose;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1hbGVydC9jbWFjcy1hbGVydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBR04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQWUsTUFBTSxvQkFBb0IsQ0FBQztBQW1CakYsTUFBTSxPQUFPLG1CQUFtQjtJQWpCaEM7UUFrQkUsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixhQUFRLEdBQUcsYUFBYSxDQUFDO1FBQ3pCLGNBQVMsR0FBRyxNQUFNLENBQUM7UUFDWCxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBS3JCLFNBQUksR0FBNkMsTUFBTSxDQUFDO1FBQ3hDLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBa0QzRCxDQUFDOzs7O0lBaERDLFVBQVU7UUFDUixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsbUJBQW1CO1FBQ2pCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6QjtJQUNILENBQUM7Ozs7SUFFRCxrQkFBa0I7UUFDaEIsUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2pCLEtBQUssT0FBTztnQkFDVixJQUFJLENBQUMsUUFBUSxHQUFHLGNBQWMsQ0FBQztnQkFDL0IsTUFBTTtZQUNSLEtBQUssU0FBUztnQkFDWixJQUFJLENBQUMsUUFBUSxHQUFHLGNBQWMsQ0FBQztnQkFDL0IsTUFBTTtZQUNSLEtBQUssTUFBTTtnQkFDVCxJQUFJLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQztnQkFDOUIsTUFBTTtZQUNSLEtBQUssU0FBUztnQkFDWixJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFvQixDQUFDO2dCQUNyQyxNQUFNO1NBQ1Q7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ3pELENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO2NBQzFCLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsT0FBTztRQUN2RCxJQUFJLFFBQVEsRUFBRTtZQUNaLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxXQUFXLElBQUksSUFBSSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxJQUFJLEVBQUU7WUFDUixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUN2QjtRQUNELElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO2FBQ3ZCO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2FBQ3RCO1NBQ0Y7SUFDSCxDQUFDOzs7WUFoRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsVUFBVSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7Z0JBQzlCLDhtREFBMkM7Z0JBQzNDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsbUJBQW1CLEVBQUUsS0FBSzt5WUFHeEI7Ozs7S0FJQzthQUVKOzs7d0JBT0UsS0FBSzs0QkFDTCxLQUFLO3NCQUNMLEtBQUs7MEJBQ0wsS0FBSzttQkFDTCxLQUFLO3dCQUNMLEtBQUs7dUJBQ0wsS0FBSztxQkFDTCxLQUFLO3NCQUNMLE1BQU07O0FBSGtCO0lBQWYsWUFBWSxFQUFFOztzREFBbUI7QUFDbEI7SUFBZixZQUFZLEVBQUU7O3FEQUFrQjtBQUNqQjtJQUFmLFlBQVksRUFBRTs7bURBQWdCOzs7SUFaeEMsc0NBQWdCOztJQUNoQix1Q0FBeUI7O0lBQ3pCLHdDQUFtQjs7Ozs7SUFDbkIsd0NBQTBCOzs7OztJQUMxQiw0Q0FBOEI7O0lBQzlCLHdDQUErQzs7SUFDL0MsNENBQW9DOztJQUNwQyxzQ0FBNkM7O0lBQzdDLDBDQUFpRDs7SUFDakQsbUNBQWlFOztJQUNqRSx3Q0FBMkM7O0lBQzNDLHVDQUEwQzs7SUFDMUMscUNBQXdDOztJQUN4QyxzQ0FBeUQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgc2xpZGVBbGVydE1vdGlvbiwgSW5wdXRCb29sZWFuLCBOZ0NsYXNzVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWFsZXJ0JyxcclxuICBleHBvcnRBczogJ2NtYWNzQWxlcnQnLFxyXG4gIGFuaW1hdGlvbnM6IFtzbGlkZUFsZXJ0TW90aW9uXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtYWxlcnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtYWxlcnQuY29tcG9uZW50LmNzcyddLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBjbWFjcy1hbGVydCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0FsZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBkZXN0cm95ID0gZmFsc2U7XHJcbiAgaWNvblR5cGUgPSAnaW5mby1jaXJjbGUnO1xyXG4gIGljb25UaGVtZSA9ICdmaWxsJztcclxuICBwcml2YXRlIGlzVHlwZVNldCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgaXNTaG93SWNvblNldCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGNsb3NlVGV4dDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgY21hY3NJY29uVHlwZTogTmdDbGFzc1R5cGU7XHJcbiAgQElucHV0KCkgbWVzc2FnZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgZGVzY3JpcHRpb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIHR5cGU6ICdzdWNjZXNzJyB8ICdpbmZvJyB8ICd3YXJuaW5nJyB8ICdlcnJvcicgPSAnaW5mbyc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNsb3NlYWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93SWNvbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBiYW5uZXIgPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25DbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgY2xvc2VBbGVydCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBvbkZhZGVBbmltYXRpb25Eb25lKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZGVzdHJveSkge1xyXG4gICAgICB0aGlzLm9uQ2xvc2UuZW1pdCh0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZUljb25DbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XHJcbiAgICAgIGNhc2UgJ2Vycm9yJzpcclxuICAgICAgICB0aGlzLmljb25UeXBlID0gJ2Nsb3NlLWNpcmNsZSc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxyXG4gICAgICAgIHRoaXMuaWNvblR5cGUgPSAnY2hlY2stY2lyY2xlJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnaW5mbyc6XHJcbiAgICAgICAgdGhpcy5pY29uVHlwZSA9ICdpbmZvLWNpcmNsZSc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3dhcm5pbmcnOlxyXG4gICAgICAgIHRoaXMuaWNvblR5cGUgPSAnZXhjbGFtYXRpb24tY2lyY2xlJztcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHRoaXMuaWNvblRoZW1lID0gdGhpcy5kZXNjcmlwdGlvbiA/ICdvdXRsaW5lJyA6ICdmaWxsJztcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgc2hvd0ljb24sIGRlc2NyaXB0aW9uLCB0eXBlLCBiYW5uZXIgfSA9IGNoYW5nZXM7XHJcbiAgICBpZiAoc2hvd0ljb24pIHtcclxuICAgICAgdGhpcy5pc1Nob3dJY29uU2V0ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChkZXNjcmlwdGlvbiB8fCB0eXBlKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlSWNvbkNsYXNzTWFwKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZSkge1xyXG4gICAgICB0aGlzLmlzVHlwZVNldCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoYmFubmVyKSB7XHJcbiAgICAgIGlmICghdGhpcy5pc1R5cGVTZXQpIHtcclxuICAgICAgICB0aGlzLnR5cGUgPSAnd2FybmluZyc7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCF0aGlzLmlzU2hvd0ljb25TZXQpIHtcclxuICAgICAgICB0aGlzLnNob3dJY29uID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=