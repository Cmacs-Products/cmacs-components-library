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
                template: "<div cdkDrag\r\n     *ngIf=\"visible\"\r\n     [cdkDragBoundary]=\"dragBoundary\">\r\n  <div cdkDragHandle class=\"cmacs-floating-menu-draggable-north-area\"></div>\r\n  <div cdkDragHandle class=\"cmacs-floating-menu-draggable-south-area\"></div>\r\n  <div cdkDragHandle class=\"cmacs-floating-menu-draggable-east-area\"></div>\r\n  <div cdkDragHandle class=\"cmacs-floating-menu-draggable-west-area\"></div>\r\n  <div #fixedEl\r\n       [class.cmacs-floating-menu-horizontal]=\"position === 'top' || position === 'bottom'\"\r\n       [class.cmacs-floating-menu-vertical]=\"position === 'left' || position === 'right'\">\r\n\r\n    <button cmacs-button ghost *ngIf=\"_minimizeToolbar\" (click)=\"expandToolbar()\">\r\n      <i class=\"iconUILarge-Sort\"></i>\r\n    </button>\r\n\r\n    <div class=\"cmacs-floating-menu-main\" *ngIf=\"!_minimizeToolbar\">\r\n      <cmacs-dropdown [trigger]=\"'click'\" [cmacsOpen]=\"true\" [placement]=\"getPlacement()\">\r\n        <button cmacs-button ghost cmacs-dropdown class=\"cmacs-floating-menu-main-button\">\r\n          <i class=\"iconUILarge-More-Veritcal_Icon\"></i>\r\n        </button>\r\n\r\n        <ul cmacs-menu\r\n            class=\"cmacs-floating-menu-main-ul\"\r\n            [class.cmacs-floating-menu-main-ul-right]=\"position === 'left'\"\r\n            [class.cmacs-floating-menu-main-ul-top]=\"position === 'bottom'\"\r\n            [class.cmacs-floating-menu-main-ul-bottom]=\"position === 'top'\"\r\n            [class.cmacs-floating-menu-main-ul-left]=\"position === 'right'\">\r\n          <li (click)=\"dockToLeft()\" cmacs-menu-item>\r\n            <span>{{i18n['Dock To Left'] ? i18n['Dock To Left'] : _i18n['Dock To Left']}}</span>\r\n          </li>\r\n          <li (click)=\"dockToRight()\" cmacs-menu-item>\r\n            <span>{{i18n['Dock To Right'] ? i18n['Dock To Right'] : _i18n['Dock To Right']}}</span>\r\n          </li>\r\n          <li (click)=\"dockToTop()\" cmacs-menu-item>\r\n            <span>{{i18n['Dock To Top'] ? i18n['Dock To Top'] : _i18n['Dock To Top']}}</span>\r\n          </li>\r\n          <li (click)=\"dockToBottom()\" cmacs-menu-item>\r\n            <span>{{i18n['Dock To Bottom'] ? i18n['Dock To Bottom'] : _i18n['Dock To Bottom']}}</span>\r\n          </li>\r\n          <li cmacs-menu-item (click)=\"minimizeToolbar()\">\r\n            <i class=\"iconArrowLarge-Collapse\"></i>\r\n            <span>{{i18n['Minimize Toolbar'] ? i18n['Minimize Toolbar'] : _i18n['Minimize Toolbar']}}</span>\r\n          </li>\r\n        </ul>\r\n      </cmacs-dropdown>\r\n    </div>\r\n    <ng-container *ngIf=\"!_minimizeToolbar\">\r\n      <ng-content></ng-content>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n\r\n",
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
                styles: ["cmacs-floating-menu{display:inline-block;position:absolute}.cmacs-floating-menu-horizontal,.cmacs-floating-menu-vertical{background:#0d1e3b;border-radius:5px;box-shadow:0 3px 4px rgba(59,63,70,.2);z-index:1;width:-webkit-max-content;width:-moz-max-content;width:max-content;padding:4px 3px}.cmacs-floating-menu-align-x{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.cmacs-floating-menu-align-y{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}cmacs-floating-menu.carrot-top-menu::before{width:10px;border:8px solid #0d1e3b;display:block;content:'';margin:0 auto;position:relative;-webkit-transform:rotate(-135deg) translateY(-8px) translateX(-8px);transform:rotate(-135deg) translateY(-8px) translateX(-8px)}cmacs-floating-menu.carrot-bottom-menu::after{width:10px;border:8px solid #0d1e3b;display:block;content:'';margin:0 auto;position:relative;-webkit-transform:rotate(-135deg) translateY(8px) translateX(8px);transform:rotate(-135deg) translateY(8px) translateX(8px)}cmacs-floating-menu .ant-btn-background-ghost.ant-btn-default:not(.cmacs-floating-menu-main-button):enabled:focus,cmacs-floating-menu .ant-btn-background-ghost.ant-btn-default:not(.cmacs-floating-menu-main-button):enabled:hover,cmacs-floating-menu .ant-btn-icon-only:not(.cmacs-floating-menu-main-button),cmacs-floating-menu .ant-menu-vertical{background-color:transparent!important}cmacs-floating-menu .ant-btn-background-ghost.ant-btn-default.cmacs-floating-menu-main-button:enabled:focus,cmacs-floating-menu .ant-btn-background-ghost.ant-btn-default.cmacs-floating-menu-main-button:enabled:hover{background-color:rgba(0,159,227,.3)!important}cmacs-floating-menu .ant-btn-background-ghost.ant-btn-default:enabled,cmacs-floating-menu .ant-menu-item>a{color:#fff!important;padding:0}cmacs-floating-menu .ant-btn-background-ghost.ant-btn-default:enabled i{font-size:16px;color:#fff!important}cmacs-floating-menu .ant-menu-vertical .ant-menu-item,cmacs-floating-menu .ant-menu-vertical .ant-menu-item:not(:last-child){margin:0 auto}cmacs-floating-menu .ant-menu-vertical,cmacs-floating-menu .ant-menu-vertical-left{border:#97a0ae}cmacs-floating-menu .ant-menu-item>a{color:#97a0ae}cmacs-floating-menu .ant-menu-item .ant-menu-item-selected,cmacs-floating-menu .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected{background-color:#001333;border-radius:3px}cmacs-floating-menu cmacs-divider .ant-divider{background-color:#656c79}.cmacs-floating-menu-main button{padding-right:0!important}.cmacs-floating-menu-horizontal .cmacs-floating-menu-main{display:inline-block}.cmacs-floating-menu-main-ul{width:150px;min-width:150px;border-radius:5px;background-color:#0d1e3b;border-color:#0d1e3b!important}.cmacs-floating-menu-main-ul li{padding:8px 10px 8px 12px!important;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;letter-spacing:normal;color:#97a0ae;border-top:none!important}.cmacs-floating-menu-main-ul li:hover{background-color:#001333!important}.cmacs-floating-menu-main-ul .ant-dropdown-menu-item i,.cmacs-floating-menu-main-ul .ant-dropdown-menu-submenu-title i{position:relative;top:2px}cmacs-floating-menu .ant-btn-background-ghost.ant-btn-default.cmacs-floating-menu-main-button{background-color:rgba(0,159,227,.3)!important;border-radius:unset!important;padding-right:2px!important;padding-left:3px!important}.cmacs-floating-menu-vertical button,.cmacs-floating-menu-vertical cmacs-dropdown,.cmacs-floating-menu-vertical div{display:block}.cmacs-floating-menu-horizontal button,.cmacs-floating-menu-horizontal cmacs-dropdown,.cmacs-floating-menu-horizontal div{display:inline-block}cmacs-floating-menu .cmacs-floating-menu-vertical .ant-btn-background-ghost.ant-btn-default.cmacs-floating-menu-main-button{width:100%}cmacs-floating-menu .cmacs-floating-menu-vertical .ant-divider-horizontal{width:60%;margin:5px auto;min-width:unset}.cmacs-floating-menu-main-ul-right{margin-left:5px!important}.cmacs-floating-menu-main-ul-bottom{margin-top:8px!important}.cmacs-floating-menu-main-ul-top{margin-bottom:8px!important}.cmacs-floating-menu-main-ul-left{margin-right:8px!important}.cmacs-floating-menu-draggable-north-area{width:100%;height:3px;background-color:#0d1e3b;position:absolute;top:0;border-radius:5px 5px 0 0}.cmacs-floating-menu-draggable-south-area{width:100%;height:3px;background-color:#0d1e3b;position:absolute;bottom:0;border-radius:0 0 5px 5px}.cmacs-floating-menu-draggable-east-area{height:100%;width:3px;background-color:#0d1e3b;position:absolute;right:0;border-radius:0 5px 5px 0}.cmacs-floating-menu-draggable-west-area{height:100%;width:3px;background-color:#0d1e3b;position:absolute;left:0;border-radius:5px 0 0 5px}.cmacs-floating-menu-draggable-east-area:hover,.cmacs-floating-menu-draggable-north-area:hover,.cmacs-floating-menu-draggable-south-area:hover,.cmacs-floating-menu-draggable-west-area:hover{cursor:move}"]
            }] }
];
/** @nocollapse */
CmacsFloatingMenuComponent.ctorParameters = () => [];
CmacsFloatingMenuComponent.propDecorators = {
    cdkDrag: [{ type: ViewChild, args: [CdkDrag,] }],
    position: [{ type: Input }],
    visible: [{ type: Input }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZmxvYXRpbmctbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLWZsb2F0aW5nLW1lbnUvY21hY3MtZmxvYXRpbmctbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBQ0wsaUJBQWlCLEVBQ2pCLE1BQU0sRUFDTixZQUFZLEVBRVosU0FBUyxFQUdWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUtqRCxNQUFNLE9BQU8sMEJBQTBCLEdBQUc7SUFDeEMsY0FBYyxFQUFFLGNBQWM7SUFDOUIsZUFBZSxFQUFFLGVBQWU7SUFDaEMsYUFBYSxFQUFFLGFBQWE7SUFDNUIsZ0JBQWdCLEVBQUUsZ0JBQWdCO0lBQ2xDLGtCQUFrQixFQUFFLGtCQUFrQjtDQUN2QztBQXFCRCxNQUFNLE9BQU8sMEJBQTBCO0lBb0JyQztRQWxCQSxxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDekIsVUFBSyxHQUFHLDBCQUEwQixDQUFDO1FBSTFCLGFBQVEsR0FBcUIsUUFBUSxDQUFDO1FBQ3RCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFL0IsbUJBQWMsR0FBbUMsSUFBSSxZQUFZLEVBQW9CLENBQUM7UUFFdkYsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQU1wQixTQUFJLEdBQVEsMEJBQTBCLENBQUM7SUFFaEMsQ0FBQzs7OztJQUVqQixXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0QjtJQUNILENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFB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QkFDN0Isa3FGQUFtRDtnQkFDbkQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBRS9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxJQUFJLEVBQUU7b0JBQ0osNEJBQTRCLEVBQUUscUJBQXFCO29CQUNuRCx5QkFBeUIsRUFBRSxrQkFBa0I7b0JBQzdDLHFDQUFxQyxFQUFFLDZDQUE2QztvQkFDcEYscUNBQXFDLEVBQUUsNkNBQTZDO29CQUNwRixhQUFhLEVBQUUsS0FBSztvQkFDcEIsZ0JBQWdCLEVBQUUsUUFBUTtvQkFDMUIsY0FBYyxFQUFFLE1BQU07b0JBQ3RCLGVBQWUsRUFBRSxPQUFPO2lCQUN6Qjs7YUFDRjs7Ozs7c0JBT0UsU0FBUyxTQUFDLE9BQU87dUJBRWpCLEtBQUs7c0JBQ0wsS0FBSzsyQkFDTCxLQUFLOzZCQUNMLE1BQU07cUJBRU4sS0FBSztrQkFDTCxLQUFLO3FCQUNMLEtBQUs7bUJBQ0wsS0FBSztvQkFDTCxLQUFLO21CQUVMLEtBQUs7O0FBVm1CO0lBQWYsWUFBWSxFQUFFOzsyREFBaUI7OztJQU56QyxzREFBeUI7O0lBQ3pCLDJDQUFtQzs7SUFFbkMsNkNBQXFDOztJQUVyQyw4Q0FBK0M7O0lBQy9DLDZDQUF5Qzs7SUFDekMsa0RBQThCOztJQUM5QixvREFBZ0c7O0lBRWhHLDRDQUE2Qjs7SUFDN0IseUNBQXFCOztJQUNyQiw0Q0FBd0I7O0lBQ3hCLDBDQUFzQjs7SUFDdEIsMkNBQXVCOztJQUV2QiwwQ0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBWaWV3Q2hpbGQsXHJcclxuICBPbkNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xyXG5pbXBvcnQgeyBDZGtEcmFnIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XHJcbmltcG9ydCB7IENtYWNzRGl2aWRlckNvbXBvbmVudCB9IGZyb20gJy4uL2NtYWNzLWRpdmlkZXIvY21hY3MtZGl2aWRlci5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IHR5cGUgRmxvYXRpbmdNZW51VHlwZSA9ICd0b3AnIHwgJ2JvdHRvbScgfCAnbGVmdCcgfCAncmlnaHQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZMT0FUSU5HX01FTlVfTE9DQUxJWkFUSU9OID0ge1xyXG4gICdEb2NrIFRvIExlZnQnOiAnRG9jayBUbyBMZWZ0JyxcclxuICAnRG9jayBUbyBSaWdodCc6ICdEb2NrIFRvIFJpZ2h0JyxcclxuICAnRG9jayBUbyBUb3AnOiAnRG9jayBUbyBUb3AnLFxyXG4gICdEb2NrIFRvIEJvdHRvbSc6ICdEb2NrIFRvIEJvdHRvbScsXHJcbiAgJ01pbmltaXplIFRvb2xiYXInOiAnTWluaW1pemUgVG9vbGJhcidcclxufTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtZmxvYXRpbmctbWVudScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0Zsb2F0aW5nTWVudScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWZsb2F0aW5nLW1lbnUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWZsb2F0aW5nLW1lbnUuY29tcG9uZW50LmNzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5jYXJyb3QtYm90dG9tLW1lbnVdJzogYGNhcnJvdCA9PT0gJ2JvdHRvbSdgLFxyXG4gICAgJ1tjbGFzcy5jYXJyb3QtdG9wLW1lbnVdJzogYGNhcnJvdCA9PT0gJ3RvcCdgLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1mbG9hdGluZy1tZW51LWFsaWduLXhdJzogYHBvc2l0aW9uID09PSAnYm90dG9tJyB8fCBwb3NpdGlvbiA9PT0gJ3RvcCdgLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1mbG9hdGluZy1tZW51LWFsaWduLXldJzogYHBvc2l0aW9uID09PSAnbGVmdCcgfHwgcG9zaXRpb24gPT09ICdyaWdodCdgLFxyXG4gICAgJ1tzdHlsZS50b3BdJzogYHRvcGAsXHJcbiAgICAnW3N0eWxlLmJvdHRvbV0nOiBgYm90dG9tYCxcclxuICAgICdbc3R5bGUubGVmdF0nOiBgbGVmdGAsXHJcbiAgICAnW3N0eWxlLnJpZ2h0XSc6IGByaWdodGAsXHJcbiAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENtYWNzRmxvYXRpbmdNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2Vze1xyXG5cclxuICBfbWluaW1pemVUb29sYmFyID0gZmFsc2U7XHJcbiAgX2kxOG4gPSBGTE9BVElOR19NRU5VX0xPQ0FMSVpBVElPTjtcclxuXHJcbiAgQFZpZXdDaGlsZChDZGtEcmFnKSBjZGtEcmFnOiBDZGtEcmFnO1xyXG5cclxuICBASW5wdXQoKSBwb3NpdGlvbjogRmxvYXRpbmdNZW51VHlwZSA9ICdib3R0b20nO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB2aXNpYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZHJhZ0JvdW5kYXJ5OiBzdHJpbmc7XHJcbiAgQE91dHB1dCgpIHBvc2l0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RmxvYXRpbmdNZW51VHlwZT4gPSBuZXcgRXZlbnRFbWl0dGVyPEZsb2F0aW5nTWVudVR5cGU+KCk7XHJcblxyXG4gIEBJbnB1dCgpIGNhcnJvdDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgdG9wOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgYm90dG9tOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbGVmdDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHJpZ2h0OiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpIGkxOG46IGFueSA9IEZMT0FUSU5HX01FTlVfTE9DQUxJWkFUSU9OO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgaWYgKHRoaXMuY2RrRHJhZykge1xyXG4gICAgICB0aGlzLnJlc2V0RHJhZ0Ryb3AoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1pbmltaXplVG9vbGJhcigpIHtcclxuICAgIHRoaXMucmVzZXREcmFnRHJvcCgpO1xyXG4gICAgdGhpcy5fbWluaW1pemVUb29sYmFyID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGV4cGFuZFRvb2xiYXIoKSB7XHJcbiAgICB0aGlzLnJlc2V0RHJhZ0Ryb3AoKTtcclxuICAgIHRoaXMuX21pbmltaXplVG9vbGJhciA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZG9ja1RvTGVmdCgpIHtcclxuICAgIHRoaXMucmVzZXREcmFnRHJvcCgpO1xyXG4gICAgdGhpcy50b3AgPSBudWxsO1xyXG4gICAgdGhpcy5sZWZ0ID0gJzAnO1xyXG4gICAgdGhpcy5yaWdodCA9IG51bGw7XHJcbiAgICB0aGlzLmJvdHRvbSA9IG51bGw7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gJ2xlZnQnO1xyXG4gICAgdGhpcy5wb3NpdGlvbkNoYW5nZS5lbWl0KHRoaXMucG9zaXRpb24pO1xyXG4gIH1cclxuXHJcbiAgZG9ja1RvUmlnaHQoKSB7XHJcbiAgICB0aGlzLnJlc2V0RHJhZ0Ryb3AoKTtcclxuICAgIHRoaXMudG9wID0gbnVsbDtcclxuICAgIHRoaXMubGVmdCA9IG51bGw7XHJcbiAgICB0aGlzLnJpZ2h0ID0gJzAnO1xyXG4gICAgdGhpcy5ib3R0b20gPSBudWxsO1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9ICdyaWdodCc7XHJcbiAgICB0aGlzLnBvc2l0aW9uQ2hhbmdlLmVtaXQodGhpcy5wb3NpdGlvbik7XHJcbiAgfVxyXG5cclxuICBkb2NrVG9Ub3AoKSB7XHJcbiAgICB0aGlzLnJlc2V0RHJhZ0Ryb3AoKTtcclxuICAgIHRoaXMudG9wID0gJzAnO1xyXG4gICAgdGhpcy5sZWZ0ID0gbnVsbDtcclxuICAgIHRoaXMucmlnaHQgPSBudWxsO1xyXG4gICAgdGhpcy5ib3R0b20gPSBudWxsO1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9ICd0b3AnO1xyXG4gICAgdGhpcy5wb3NpdGlvbkNoYW5nZS5lbWl0KHRoaXMucG9zaXRpb24pO1xyXG4gIH1cclxuXHJcbiAgZG9ja1RvQm90dG9tKCkge1xyXG4gICAgdGhpcy5yZXNldERyYWdEcm9wKCk7XHJcbiAgICB0aGlzLmJvdHRvbSA9ICcwJztcclxuICAgIHRoaXMubGVmdCA9IG51bGw7XHJcbiAgICB0aGlzLnJpZ2h0ID0gbnVsbDtcclxuICAgIHRoaXMudG9wID0gbnVsbDtcclxuICAgIHRoaXMucG9zaXRpb24gPSAnYm90dG9tJztcclxuICAgIHRoaXMucG9zaXRpb25DaGFuZ2UuZW1pdCh0aGlzLnBvc2l0aW9uKTtcclxuICB9XHJcblxyXG4gIGdldFBsYWNlbWVudCgpIHtcclxuICAgIHN3aXRjaCAodGhpcy5wb3NpdGlvbikge1xyXG4gICAgICBjYXNlICdib3R0b20nOlxyXG4gICAgICAgIHJldHVybiAndG9wJztcclxuICAgICAgY2FzZSAndG9wJzpcclxuICAgICAgICByZXR1cm4gJ2JvdHRvbSc7XHJcbiAgICAgIGNhc2UgJ2xlZnQnOlxyXG4gICAgICAgIHJldHVybiAncmlnaHQnO1xyXG4gICAgICBjYXNlICdyaWdodCc6XHJcbiAgICAgICAgcmV0dXJuICdsZWZ0JztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlc2V0RHJhZ0Ryb3AoKSB7XHJcbiAgICB0aGlzLmNka0RyYWcuX2RyYWdSZWZbJ19wcmV2aWV3UmVjdCddID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5jZGtEcmFnLl9kcmFnUmVmWydfYm91bmRhcnlSZWN0J10gPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmNka0RyYWcucmVzZXQoKTtcclxuICB9XHJcbn1cclxuIl19