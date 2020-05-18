/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation, Output, EventEmitter, ViewChild } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd';
import { CdkDrag } from '@angular/cdk/drag-drop';
/** @type {?} */
export const FLOATING_MENU_LOCALIZATION = {
    'Dock To Left': 'Dock To Left',
    'Dock To Right': 'Dock To Right',
    'Dock To Top': 'Dock To Top',
    'Dock To Bottom': 'Dock To Bottom',
    'Minimize Toolbar': 'Minimize Toolbar'
};
export class CmacsFloatingMenuComponent {
    constructor() {
        this._minimizeToolbar = false;
        this._i18n = FLOATING_MENU_LOCALIZATION;
        this.position = 'bottom';
        this.visible = false;
        this.showExtras = true;
        this.positionChange = new EventEmitter();
        this.carrot = '';
        this.i18n = FLOATING_MENU_LOCALIZATION;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.cdkDrag) {
            this.resetDragDrop();
        }
    }
    /**
     * @return {?}
     */
    minimizeToolbar() {
        this.resetDragDrop();
        this._minimizeToolbar = true;
    }
    /**
     * @return {?}
     */
    expandToolbar() {
        this.resetDragDrop();
        this._minimizeToolbar = false;
    }
    /**
     * @return {?}
     */
    dockToLeft() {
        this.resetDragDrop();
        this.top = null;
        this.left = '0';
        this.right = null;
        this.bottom = null;
        this.position = 'left';
        this.positionChange.emit(this.position);
    }
    /**
     * @return {?}
     */
    dockToRight() {
        this.resetDragDrop();
        this.top = null;
        this.left = null;
        this.right = '0';
        this.bottom = null;
        this.position = 'right';
        this.positionChange.emit(this.position);
    }
    /**
     * @return {?}
     */
    dockToTop() {
        this.resetDragDrop();
        this.top = '0';
        this.left = null;
        this.right = null;
        this.bottom = null;
        this.position = 'top';
        this.positionChange.emit(this.position);
    }
    /**
     * @return {?}
     */
    dockToBottom() {
        this.resetDragDrop();
        this.bottom = '0';
        this.left = null;
        this.right = null;
        this.top = null;
        this.position = 'bottom';
        this.positionChange.emit(this.position);
    }
    /**
     * @return {?}
     */
    getPlacement() {
        switch (this.position) {
            case 'bottom':
                return 'top';
            case 'top':
                return 'bottom';
            case 'left':
                return 'right';
            case 'right':
                return 'left';
        }
    }
    /**
     * @return {?}
     */
    resetDragDrop() {
        this.cdkDrag._dragRef['_previewRect'] = undefined;
        this.cdkDrag._dragRef['_boundaryRect'] = undefined;
        this.cdkDrag.reset();
    }
}
CmacsFloatingMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmacs-floating-menu',
                exportAs: 'cmacsFloatingMenu',
                template: "<div cdkDrag\r\n     *ngIf=\"visible\"\r\n     [cdkDragBoundary]=\"dragBoundary\">\r\n  <div cdkDragHandle class=\"cmacs-floating-menu-draggable-north-area\"></div>\r\n  <div cdkDragHandle class=\"cmacs-floating-menu-draggable-south-area\"></div>\r\n  <div cdkDragHandle class=\"cmacs-floating-menu-draggable-east-area\"></div>\r\n  <div cdkDragHandle class=\"cmacs-floating-menu-draggable-west-area\"></div>\r\n  <div #fixedEl\r\n       [class.cmacs-floating-menu-horizontal]=\"position === 'top' || position === 'bottom'\"\r\n       [class.cmacs-floating-menu-collapsed]=\"_minimizeToolbar\"\r\n       [class.cmacs-floating-menu-vertical]=\"position === 'left' || position === 'right'\">\r\n\r\n    <button cmacs-button ghost *ngIf=\"_minimizeToolbar\" (click)=\"expandToolbar()\">\r\n      <i class=\"iconUILarge-Sort\"></i>\r\n    </button>\r\n\r\n    <div class=\"cmacs-floating-menu-main\" *ngIf=\"!_minimizeToolbar && showExtras\">\r\n      <cmacs-dropdown [trigger]=\"'click'\" [cmacsOpen]=\"true\" [placement]=\"getPlacement()\">\r\n        <button cmacs-button ghost cmacs-dropdown class=\"cmacs-floating-menu-main-button\">\r\n          <i class=\"iconUILarge-More-Veritcal_Icon\"></i>\r\n        </button>\r\n\r\n        <ul cmacs-menu\r\n            class=\"cmacs-floating-menu-main-ul\"\r\n            [class.cmacs-floating-menu-main-ul-right]=\"position === 'left'\"\r\n            [class.cmacs-floating-menu-main-ul-top]=\"position === 'bottom'\"\r\n            [class.cmacs-floating-menu-main-ul-bottom]=\"position === 'top'\"\r\n            [class.cmacs-floating-menu-main-ul-left]=\"position === 'right'\">\r\n          <li (click)=\"dockToLeft()\" cmacs-menu-item>\r\n            <span>{{i18n['Dock To Left'] ? i18n['Dock To Left'] : _i18n['Dock To Left']}}</span>\r\n          </li>\r\n          <li (click)=\"dockToRight()\" cmacs-menu-item>\r\n            <span>{{i18n['Dock To Right'] ? i18n['Dock To Right'] : _i18n['Dock To Right']}}</span>\r\n          </li>\r\n          <li (click)=\"dockToTop()\" cmacs-menu-item>\r\n            <span>{{i18n['Dock To Top'] ? i18n['Dock To Top'] : _i18n['Dock To Top']}}</span>\r\n          </li>\r\n          <li (click)=\"dockToBottom()\" cmacs-menu-item>\r\n            <span>{{i18n['Dock To Bottom'] ? i18n['Dock To Bottom'] : _i18n['Dock To Bottom']}}</span>\r\n          </li>\r\n          <li cmacs-menu-item (click)=\"minimizeToolbar()\">\r\n            <i class=\"iconArrowLarge-Collapse\"></i>\r\n            <span>{{i18n['Minimize Toolbar'] ? i18n['Minimize Toolbar'] : _i18n['Minimize Toolbar']}}</span>\r\n          </li>\r\n        </ul>\r\n      </cmacs-dropdown>\r\n    </div>\r\n    <div class=\"cmacs-floating-menu-user-content\" *ngIf=\"!_minimizeToolbar\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.carrot-bottom-menu]': `carrot === 'bottom'`,
                    '[class.carrot-top-menu]': `carrot === 'top'`,
                    '[class.cmacs-floating-menu-align-x]': `position === 'bottom' || position === 'top'`,
                    '[class.cmacs-floating-menu-align-y]': `position === 'left' || position === 'right'`,
                    '[style.top]': `top`,
                    '[style.bottom]': `bottom`,
                    '[style.left]': `left`,
                    '[style.right]': `right`,
                },
                styles: ["cmacs-floating-menu{display:inline-block;position:absolute}.cmacs-floating-menu-horizontal,.cmacs-floating-menu-vertical{box-shadow:0 3px 4px rgba(59,63,70,.2);z-index:1;width:-webkit-max-content;width:-moz-max-content;width:max-content;border-radius:5px}.cmacs-floating-menu-align-x{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.cmacs-floating-menu-align-y{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}cmacs-floating-menu.carrot-top-menu::before{width:10px;border:8px solid #0d1e3b;display:block;content:'';margin:0 auto;position:relative;-webkit-transform:rotate(-135deg) translateY(-8px) translateX(-8px);transform:rotate(-135deg) translateY(-8px) translateX(-8px)}cmacs-floating-menu.carrot-bottom-menu::after{width:10px;border:8px solid #0d1e3b;display:block;content:'';margin:0 auto;position:relative;-webkit-transform:rotate(-135deg) translateY(8px) translateX(8px);transform:rotate(-135deg) translateY(8px) translateX(8px)}cmacs-floating-menu .ant-btn-background-ghost.ant-btn-default.cmacs-floating-menu-main-button:enabled:focus,cmacs-floating-menu .ant-btn-background-ghost.ant-btn-default.cmacs-floating-menu-main-button:enabled:hover,cmacs-floating-menu .ant-btn-background-ghost.ant-btn-default:not(.cmacs-floating-menu-main-button):enabled:focus,cmacs-floating-menu .ant-btn-background-ghost.ant-btn-default:not(.cmacs-floating-menu-main-button):enabled:hover,cmacs-floating-menu .ant-btn-icon-only:not(.cmacs-floating-menu-main-button),cmacs-floating-menu .ant-menu-vertical{background-color:transparent!important}cmacs-floating-menu .ant-btn-background-ghost.ant-btn-default:enabled,cmacs-floating-menu .ant-menu-item>a{color:#fff!important;padding:0}cmacs-floating-menu .ant-btn-background-ghost.ant-btn-default:enabled i{font-size:16px;color:#fff!important}cmacs-floating-menu .ant-menu-vertical .ant-menu-item,cmacs-floating-menu .ant-menu-vertical .ant-menu-item:not(:last-child){margin:0 auto}cmacs-floating-menu .ant-menu-vertical,cmacs-floating-menu .ant-menu-vertical-left{border:#97a0ae}cmacs-floating-menu .ant-menu-item>a{color:#97a0ae}cmacs-floating-menu .ant-menu-item .ant-menu-item-selected,cmacs-floating-menu .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected{background-color:#001333;border-radius:3px}cmacs-floating-menu cmacs-divider .ant-divider{background-color:#656c79}.cmacs-floating-menu-main{background-color:#778899;border-radius:5px 0 0 5px!important;padding:4px 4px 4px 0}.cmacs-floating-menu-vertical .cmacs-floating-menu-main{border-radius:5px 5px 0 0!important}.cmacs-floating-menu-main button{padding-right:0!important}.cmacs-floating-menu-horizontal .cmacs-floating-menu-main{display:inline-block}.cmacs-floating-menu-main-ul{width:150px;min-width:150px;border-radius:5px;background-color:#0d1e3b;border-color:#0d1e3b!important}.cmacs-floating-menu-main-ul li{padding:8px 10px 8px 12px!important;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;letter-spacing:normal;color:#97a0ae;border-top:none!important}.cmacs-floating-menu-main-ul li:hover{background-color:#001333!important}.cmacs-floating-menu-main-ul .ant-dropdown-menu-item i,.cmacs-floating-menu-main-ul .ant-dropdown-menu-submenu-title i{position:relative;top:2px}.cmacs-floating-menu-vertical button,.cmacs-floating-menu-vertical cmacs-dropdown,.cmacs-floating-menu-vertical div{display:block}.cmacs-floating-menu-horizontal button,.cmacs-floating-menu-horizontal cmacs-dropdown,.cmacs-floating-menu-horizontal div{display:inline-block}cmacs-floating-menu .cmacs-floating-menu-vertical .ant-btn-background-ghost.ant-btn-default.cmacs-floating-menu-main-button{width:100%;border-radius:5px 5px 0 0!important}cmacs-floating-menu .cmacs-floating-menu-vertical .ant-divider-horizontal{width:60%;margin:5px auto;min-width:unset}.cmacs-floating-menu-main-ul-right{margin-left:5px!important}.cmacs-floating-menu-main-ul-bottom{margin-top:8px!important}.cmacs-floating-menu-main-ul-top{margin-bottom:8px!important}.cmacs-floating-menu-main-ul-left{margin-right:8px!important}.cmacs-floating-menu-draggable-north-area{width:100%;height:3px;position:absolute;top:0;border-radius:5px 5px 0 0}.cmacs-floating-menu-draggable-south-area{width:100%;height:3px;position:absolute;bottom:0;border-radius:0 0 5px 5px}.cmacs-floating-menu-draggable-east-area{height:100%;width:3px;position:absolute;right:0;border-radius:0 5px 5px 0}.cmacs-floating-menu-draggable-west-area{height:100%;width:3px;position:absolute;left:0;border-radius:5px 0 0 5px}.cmacs-floating-menu-draggable-east-area:hover,.cmacs-floating-menu-draggable-north-area:hover,.cmacs-floating-menu-draggable-south-area:hover,.cmacs-floating-menu-draggable-west-area:hover{cursor:move}.cmacs-floating-menu-user-content{padding:4px 3px;background:#0d1e3b;border-radius:0 5px 5px 0}.cmacs-floating-menu-vertical .cmacs-floating-menu-user-content{border-radius:0 0 5px 5px}.cmacs-floating-menu-collapsed{padding:4px 3px;background:#0d1e3b}"]
            }] }
];
/** @nocollapse */
CmacsFloatingMenuComponent.ctorParameters = () => [];
CmacsFloatingMenuComponent.propDecorators = {
    cdkDrag: [{ type: ViewChild, args: [CdkDrag,] }],
    position: [{ type: Input }],
    visible: [{ type: Input }],
    showExtras: [{ type: Input }],
    dragBoundary: [{ type: Input }],
    positionChange: [{ type: Output }],
    carrot: [{ type: Input }],
    top: [{ type: Input }],
    bottom: [{ type: Input }],
    left: [{ type: Input }],
    right: [{ type: Input }],
    i18n: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsFloatingMenuComponent.prototype, "visible", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsFloatingMenuComponent.prototype, "showExtras", void 0);
if (false) {
    /** @type {?} */
    CmacsFloatingMenuComponent.prototype._minimizeToolbar;
    /** @type {?} */
    CmacsFloatingMenuComponent.prototype._i18n;
    /** @type {?} */
    CmacsFloatingMenuComponent.prototype.cdkDrag;
    /** @type {?} */
    CmacsFloatingMenuComponent.prototype.position;
    /** @type {?} */
    CmacsFloatingMenuComponent.prototype.visible;
    /** @type {?} */
    CmacsFloatingMenuComponent.prototype.showExtras;
    /** @type {?} */
    CmacsFloatingMenuComponent.prototype.dragBoundary;
    /** @type {?} */
    CmacsFloatingMenuComponent.prototype.positionChange;
    /** @type {?} */
    CmacsFloatingMenuComponent.prototype.carrot;
    /** @type {?} */
    CmacsFloatingMenuComponent.prototype.top;
    /** @type {?} */
    CmacsFloatingMenuComponent.prototype.bottom;
    /** @type {?} */
    CmacsFloatingMenuComponent.prototype.left;
    /** @type {?} */
    CmacsFloatingMenuComponent.prototype.right;
    /** @type {?} */
    CmacsFloatingMenuComponent.prototype.i18n;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZmxvYXRpbmctbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLWZsb2F0aW5nLW1lbnUvY21hY3MtZmxvYXRpbmctbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBQ0wsaUJBQWlCLEVBQ2pCLE1BQU0sRUFDTixZQUFZLEVBRVosU0FBUyxFQUdWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUtqRCxNQUFNLE9BQU8sMEJBQTBCLEdBQUc7SUFDeEMsY0FBYyxFQUFFLGNBQWM7SUFDOUIsZUFBZSxFQUFFLGVBQWU7SUFDaEMsYUFBYSxFQUFFLGFBQWE7SUFDNUIsZ0JBQWdCLEVBQUUsZ0JBQWdCO0lBQ2xDLGtCQUFrQixFQUFFLGtCQUFrQjtDQUN2QztBQXFCRCxNQUFNLE9BQU8sMEJBQTBCO0lBcUJyQztRQW5CQSxxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDekIsVUFBSyxHQUFHLDBCQUEwQixDQUFDO1FBSTFCLGFBQVEsR0FBcUIsUUFBUSxDQUFDO1FBQ3RCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsZUFBVSxHQUFHLElBQUksQ0FBQztRQUVqQyxtQkFBYyxHQUFtQyxJQUFJLFlBQVksRUFBb0IsQ0FBQztRQUV2RixXQUFNLEdBQVcsRUFBRSxDQUFDO1FBTXBCLFNBQUksR0FBUSwwQkFBMEIsQ0FBQztJQUVoQyxDQUFDOzs7O0lBRWpCLFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCO0lBQ0gs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O2dCQUMvQixRQUFRLEVBQUUsbUJBQW1CO2dCQUM3Qiw4d0ZBQW1EO2dCQUNuRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFFL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLElBQUksRUFBRTtvQkFDSiw0QkFBNEIsRUFBRSxxQkFBcUI7b0JBQ25ELHlCQUF5QixFQUFFLGtCQUFrQjtvQkFDN0MscUNBQXFDLEVBQUUsNkNBQTZDO29CQUNwRixxQ0FBcUMsRUFBRSw2Q0FBNkM7b0JBQ3BGLGFBQWEsRUFBRSxLQUFLO29CQUNwQixnQkFBZ0IsRUFBRSxRQUFRO29CQUMxQixjQUFjLEVBQUUsTUFBTTtvQkFDdEIsZUFBZSxFQUFFLE9BQU87aUJBQ3pCOzthQUNGOzs7OztzQkFPRSxTQUFTLFNBQUMsT0FBTzt1QkFFakIsS0FBSztzQkFDTCxLQUFLO3lCQUNMLEtBQUs7MkJBQ0wsS0FBSzs2QkFDTCxNQUFNO3FCQUVOLEtBQUs7a0JBQ0wsS0FBSztxQkFDTCxLQUFLO21CQUNMLEtBQUs7b0JBQ0wsS0FBSzttQkFFTCxLQUFLOztBQVhtQjtJQUFmLFlBQVksRUFBRTs7MkRBQWlCO0FBQ2hCO0lBQWYsWUFBWSxFQUFFOzs4REFBbUI7OztJQVAzQyxzREFBeUI7O0lBQ3pCLDJDQUFtQzs7SUFFbkMsNkNBQXFDOztJQUVyQyw4Q0FBK0M7O0lBQy9DLDZDQUF5Qzs7SUFDekMsZ0RBQTJDOztJQUMzQyxrREFBOEI7O0lBQzlCLG9EQUFnRzs7SUFFaEcsNENBQTZCOztJQUM3Qix5Q0FBcUI7O0lBQ3JCLDRDQUF3Qjs7SUFDeEIsMENBQXNCOztJQUN0QiwyQ0FBdUI7O0lBRXZCLDBDQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIFZpZXdDaGlsZCxcclxuXHJcbiAgT25DaGFuZ2VzXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xyXG5pbXBvcnQgeyBDZGtEcmFnIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XHJcbmltcG9ydCB7IENtYWNzRGl2aWRlckNvbXBvbmVudCB9IGZyb20gJy4uL2NtYWNzLWRpdmlkZXIvY21hY3MtZGl2aWRlci5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IHR5cGUgRmxvYXRpbmdNZW51VHlwZSA9ICd0b3AnIHwgJ2JvdHRvbScgfCAnbGVmdCcgfCAncmlnaHQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZMT0FUSU5HX01FTlVfTE9DQUxJWkFUSU9OID0ge1xyXG4gICdEb2NrIFRvIExlZnQnOiAnRG9jayBUbyBMZWZ0JyxcclxuICAnRG9jayBUbyBSaWdodCc6ICdEb2NrIFRvIFJpZ2h0JyxcclxuICAnRG9jayBUbyBUb3AnOiAnRG9jayBUbyBUb3AnLFxyXG4gICdEb2NrIFRvIEJvdHRvbSc6ICdEb2NrIFRvIEJvdHRvbScsXHJcbiAgJ01pbmltaXplIFRvb2xiYXInOiAnTWluaW1pemUgVG9vbGJhcidcclxufTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtZmxvYXRpbmctbWVudScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0Zsb2F0aW5nTWVudScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWZsb2F0aW5nLW1lbnUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWZsb2F0aW5nLW1lbnUuY29tcG9uZW50LmNzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5jYXJyb3QtYm90dG9tLW1lbnVdJzogYGNhcnJvdCA9PT0gJ2JvdHRvbSdgLFxyXG4gICAgJ1tjbGFzcy5jYXJyb3QtdG9wLW1lbnVdJzogYGNhcnJvdCA9PT0gJ3RvcCdgLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1mbG9hdGluZy1tZW51LWFsaWduLXhdJzogYHBvc2l0aW9uID09PSAnYm90dG9tJyB8fCBwb3NpdGlvbiA9PT0gJ3RvcCdgLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1mbG9hdGluZy1tZW51LWFsaWduLXldJzogYHBvc2l0aW9uID09PSAnbGVmdCcgfHwgcG9zaXRpb24gPT09ICdyaWdodCdgLFxyXG4gICAgJ1tzdHlsZS50b3BdJzogYHRvcGAsXHJcbiAgICAnW3N0eWxlLmJvdHRvbV0nOiBgYm90dG9tYCxcclxuICAgICdbc3R5bGUubGVmdF0nOiBgbGVmdGAsXHJcbiAgICAnW3N0eWxlLnJpZ2h0XSc6IGByaWdodGAsXHJcbiAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENtYWNzRmxvYXRpbmdNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2Vze1xyXG5cclxuICBfbWluaW1pemVUb29sYmFyID0gZmFsc2U7XHJcbiAgX2kxOG4gPSBGTE9BVElOR19NRU5VX0xPQ0FMSVpBVElPTjtcclxuXHJcbiAgQFZpZXdDaGlsZChDZGtEcmFnKSBjZGtEcmFnOiBDZGtEcmFnO1xyXG5cclxuICBASW5wdXQoKSBwb3NpdGlvbjogRmxvYXRpbmdNZW51VHlwZSA9ICdib3R0b20nO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB2aXNpYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dFeHRyYXMgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGRyYWdCb3VuZGFyeTogc3RyaW5nO1xyXG4gIEBPdXRwdXQoKSBwb3NpdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPEZsb2F0aW5nTWVudVR5cGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxGbG9hdGluZ01lbnVUeXBlPigpO1xyXG5cclxuICBASW5wdXQoKSBjYXJyb3Q6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHRvcDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGJvdHRvbTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGxlZnQ6IHN0cmluZztcclxuICBASW5wdXQoKSByaWdodDogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKSBpMThuOiBhbnkgPSBGTE9BVElOR19NRU5VX0xPQ0FMSVpBVElPTjtcclxuICBcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpIHtcclxuICAgIGlmICh0aGlzLmNka0RyYWcpIHtcclxuICAgICAgdGhpcy5yZXNldERyYWdEcm9wKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtaW5pbWl6ZVRvb2xiYXIoKSB7XHJcbiAgICB0aGlzLnJlc2V0RHJhZ0Ryb3AoKTtcclxuICAgIHRoaXMuX21pbmltaXplVG9vbGJhciA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBleHBhbmRUb29sYmFyKCkge1xyXG4gICAgdGhpcy5yZXNldERyYWdEcm9wKCk7XHJcbiAgICB0aGlzLl9taW5pbWl6ZVRvb2xiYXIgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGRvY2tUb0xlZnQoKSB7XHJcbiAgICB0aGlzLnJlc2V0RHJhZ0Ryb3AoKTtcclxuICAgIHRoaXMudG9wID0gbnVsbDtcclxuICAgIHRoaXMubGVmdCA9ICcwJztcclxuICAgIHRoaXMucmlnaHQgPSBudWxsO1xyXG4gICAgdGhpcy5ib3R0b20gPSBudWxsO1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9ICdsZWZ0JztcclxuICAgIHRoaXMucG9zaXRpb25DaGFuZ2UuZW1pdCh0aGlzLnBvc2l0aW9uKTtcclxuICB9XHJcblxyXG4gIGRvY2tUb1JpZ2h0KCkge1xyXG4gICAgdGhpcy5yZXNldERyYWdEcm9wKCk7XHJcbiAgICB0aGlzLnRvcCA9IG51bGw7XHJcbiAgICB0aGlzLmxlZnQgPSBudWxsO1xyXG4gICAgdGhpcy5yaWdodCA9ICcwJztcclxuICAgIHRoaXMuYm90dG9tID0gbnVsbDtcclxuICAgIHRoaXMucG9zaXRpb24gPSAncmlnaHQnO1xyXG4gICAgdGhpcy5wb3NpdGlvbkNoYW5nZS5lbWl0KHRoaXMucG9zaXRpb24pO1xyXG4gIH1cclxuXHJcbiAgZG9ja1RvVG9wKCkge1xyXG4gICAgdGhpcy5yZXNldERyYWdEcm9wKCk7XHJcbiAgICB0aGlzLnRvcCA9ICcwJztcclxuICAgIHRoaXMubGVmdCA9IG51bGw7XHJcbiAgICB0aGlzLnJpZ2h0ID0gbnVsbDtcclxuICAgIHRoaXMuYm90dG9tID0gbnVsbDtcclxuICAgIHRoaXMucG9zaXRpb24gPSAndG9wJztcclxuICAgIHRoaXMucG9zaXRpb25DaGFuZ2UuZW1pdCh0aGlzLnBvc2l0aW9uKTtcclxuICB9XHJcblxyXG4gIGRvY2tUb0JvdHRvbSgpIHtcclxuICAgIHRoaXMucmVzZXREcmFnRHJvcCgpO1xyXG4gICAgdGhpcy5ib3R0b20gPSAnMCc7XHJcbiAgICB0aGlzLmxlZnQgPSBudWxsO1xyXG4gICAgdGhpcy5yaWdodCA9IG51bGw7XHJcbiAgICB0aGlzLnRvcCA9IG51bGw7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gJ2JvdHRvbSc7XHJcbiAgICB0aGlzLnBvc2l0aW9uQ2hhbmdlLmVtaXQodGhpcy5wb3NpdGlvbik7XHJcbiAgfVxyXG5cclxuICBnZXRQbGFjZW1lbnQoKSB7XHJcbiAgICBzd2l0Y2ggKHRoaXMucG9zaXRpb24pIHtcclxuICAgICAgY2FzZSAnYm90dG9tJzpcclxuICAgICAgICByZXR1cm4gJ3RvcCc7XHJcbiAgICAgIGNhc2UgJ3RvcCc6XHJcbiAgICAgICAgcmV0dXJuICdib3R0b20nO1xyXG4gICAgICBjYXNlICdsZWZ0JzpcclxuICAgICAgICByZXR1cm4gJ3JpZ2h0JztcclxuICAgICAgY2FzZSAncmlnaHQnOlxyXG4gICAgICAgIHJldHVybiAnbGVmdCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXNldERyYWdEcm9wKCkge1xyXG4gICAgdGhpcy5jZGtEcmFnLl9kcmFnUmVmWydfcHJldmlld1JlY3QnXSA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuY2RrRHJhZy5fZHJhZ1JlZlsnX2JvdW5kYXJ5UmVjdCddID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5jZGtEcmFnLnJlc2V0KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==