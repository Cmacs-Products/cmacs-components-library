/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation, Output, EventEmitter, ViewChild } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd';
import { CdkDrag } from '@angular/cdk/drag-drop';
/** @type {?} */
export var FLOATING_MENU_LOCALIZATION = {
    'Dock To Left': 'Dock To Left',
    'Dock To Right': 'Dock To Right',
    'Dock To Top': 'Dock To Top',
    'Dock To Bottom': 'Dock To Bottom',
    'Minimize Toolbar': 'Minimize Toolbar'
};
var CmacsFloatingMenuComponent = /** @class */ (function () {
    function CmacsFloatingMenuComponent() {
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
    CmacsFloatingMenuComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.cdkDrag) {
            this.resetDragDrop();
        }
    };
    /**
     * @return {?}
     */
    CmacsFloatingMenuComponent.prototype.minimizeToolbar = /**
     * @return {?}
     */
    function () {
        this.resetDragDrop();
        this._minimizeToolbar = true;
    };
    /**
     * @return {?}
     */
    CmacsFloatingMenuComponent.prototype.expandToolbar = /**
     * @return {?}
     */
    function () {
        this.resetDragDrop();
        this._minimizeToolbar = false;
    };
    /**
     * @return {?}
     */
    CmacsFloatingMenuComponent.prototype.dockToLeft = /**
     * @return {?}
     */
    function () {
        this.resetDragDrop();
        this.top = null;
        this.left = '0';
        this.right = null;
        this.bottom = null;
        this.position = 'left';
        this.positionChange.emit(this.position);
    };
    /**
     * @return {?}
     */
    CmacsFloatingMenuComponent.prototype.dockToRight = /**
     * @return {?}
     */
    function () {
        this.resetDragDrop();
        this.top = null;
        this.left = null;
        this.right = '0';
        this.bottom = null;
        this.position = 'right';
        this.positionChange.emit(this.position);
    };
    /**
     * @return {?}
     */
    CmacsFloatingMenuComponent.prototype.dockToTop = /**
     * @return {?}
     */
    function () {
        this.resetDragDrop();
        this.top = '0';
        this.left = null;
        this.right = null;
        this.bottom = null;
        this.position = 'top';
        this.positionChange.emit(this.position);
    };
    /**
     * @return {?}
     */
    CmacsFloatingMenuComponent.prototype.dockToBottom = /**
     * @return {?}
     */
    function () {
        this.resetDragDrop();
        this.bottom = '0';
        this.left = null;
        this.right = null;
        this.top = null;
        this.position = 'bottom';
        this.positionChange.emit(this.position);
    };
    /**
     * @return {?}
     */
    CmacsFloatingMenuComponent.prototype.getPlacement = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    CmacsFloatingMenuComponent.prototype.resetDragDrop = /**
     * @return {?}
     */
    function () {
        this.cdkDrag._dragRef['_previewRect'] = undefined;
        this.cdkDrag._dragRef['_boundaryRect'] = undefined;
        this.cdkDrag.reset();
    };
    CmacsFloatingMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-floating-menu',
                    exportAs: 'cmacsFloatingMenu',
                    template: "<div cdkDrag\r\n     *ngIf=\"visible\"\r\n     [cdkDragBoundary]=\"dragBoundary\">\r\n  <div cdkDragHandle class=\"cmacs-floating-menu-draggable-north-area\"></div>\r\n  <div cdkDragHandle class=\"cmacs-floating-menu-draggable-south-area\"></div>\r\n  <div cdkDragHandle class=\"cmacs-floating-menu-draggable-east-area\"></div>\r\n  <div cdkDragHandle class=\"cmacs-floating-menu-draggable-west-area\"></div>\r\n  <div #fixedEl\r\n       [class.cmacs-floating-menu-horizontal]=\"position === 'top' || position === 'bottom'\"\r\n       [class.cmacs-floating-menu-collapsed]=\"_minimizeToolbar\"\r\n       [class.cmacs-floating-menu-vertical]=\"position === 'left' || position === 'right'\">\r\n\r\n    <button cmacs-button ghost *ngIf=\"_minimizeToolbar\" (click)=\"expandToolbar()\">\r\n      <i class=\"iconUILarge-Sort\"></i>\r\n    </button>\r\n\r\n    <div class=\"cmacs-floating-menu-main\" *ngIf=\"!_minimizeToolbar && showExtras\">\r\n      <cmacs-dropdown [trigger]=\"'click'\" [cmacsOpen]=\"true\" [placement]=\"getPlacement()\">\r\n        <button cmacs-button ghost cmacs-dropdown class=\"cmacs-floating-menu-main-button\">\r\n          <i class=\"iconUILarge-More-Veritcal_Icon\"></i>\r\n        </button>\r\n\r\n        <ul cmacs-menu\r\n            class=\"cmacs-floating-menu-main-ul\"\r\n            [class.cmacs-floating-menu-main-ul-right]=\"position === 'left'\"\r\n            [class.cmacs-floating-menu-main-ul-top]=\"position === 'bottom'\"\r\n            [class.cmacs-floating-menu-main-ul-bottom]=\"position === 'top'\"\r\n            [class.cmacs-floating-menu-main-ul-left]=\"position === 'right'\">\r\n          <li (click)=\"dockToLeft()\" cmacs-menu-item>\r\n            <span>{{i18n['Dock To Left'] ? i18n['Dock To Left'] : _i18n['Dock To Left']}}</span>\r\n          </li>\r\n          <li (click)=\"dockToRight()\" cmacs-menu-item>\r\n            <span>{{i18n['Dock To Right'] ? i18n['Dock To Right'] : _i18n['Dock To Right']}}</span>\r\n          </li>\r\n          <li (click)=\"dockToTop()\" cmacs-menu-item>\r\n            <span>{{i18n['Dock To Top'] ? i18n['Dock To Top'] : _i18n['Dock To Top']}}</span>\r\n          </li>\r\n          <li (click)=\"dockToBottom()\" cmacs-menu-item>\r\n            <span>{{i18n['Dock To Bottom'] ? i18n['Dock To Bottom'] : _i18n['Dock To Bottom']}}</span>\r\n          </li>\r\n          <li cmacs-menu-item (click)=\"minimizeToolbar()\">\r\n            <i class=\"iconArrowLarge-Collapse\"></i>\r\n            <span>{{i18n['Minimize Toolbar'] ? i18n['Minimize Toolbar'] : _i18n['Minimize Toolbar']}}</span>\r\n          </li>\r\n        </ul>\r\n      </cmacs-dropdown>\r\n    </div>\r\n    <div class=\"cmacs-floating-menu-user-content\" *ngIf=\"!_minimizeToolbar\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.carrot-bottom-menu]': "carrot === 'bottom'",
                        '[class.carrot-top-menu]': "carrot === 'top'",
                        '[class.cmacs-floating-menu-align-x]': "position === 'bottom' || position === 'top'",
                        '[class.cmacs-floating-menu-align-y]': "position === 'left' || position === 'right'",
                        '[style.top]': "top",
                        '[style.bottom]': "bottom",
                        '[style.left]': "left",
                        '[style.right]': "right",
                    },
                    styles: ["cmacs-floating-menu{display:inline-block;position:absolute}.cmacs-floating-menu-horizontal,.cmacs-floating-menu-vertical{box-shadow:0 3px 4px rgba(59,63,70,.2);z-index:1;width:-webkit-max-content;width:-moz-max-content;width:max-content;border-radius:5px}.cmacs-floating-menu-align-x{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.cmacs-floating-menu-align-y{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}cmacs-floating-menu.carrot-top-menu::before{width:10px;border:8px solid #0d1e3b;display:block;content:'';margin:0 auto;position:relative;-webkit-transform:rotate(-135deg) translateY(-8px) translateX(-8px);transform:rotate(-135deg) translateY(-8px) translateX(-8px)}cmacs-floating-menu.carrot-bottom-menu::after{width:10px;border:8px solid #0d1e3b;display:block;content:'';margin:0 auto;position:relative;-webkit-transform:rotate(-135deg) translateY(8px) translateX(8px);transform:rotate(-135deg) translateY(8px) translateX(8px)}cmacs-floating-menu .ant-btn-background-ghost.ant-btn-default.cmacs-floating-menu-main-button:enabled:focus,cmacs-floating-menu .ant-btn-background-ghost.ant-btn-default.cmacs-floating-menu-main-button:enabled:hover,cmacs-floating-menu .ant-btn-background-ghost.ant-btn-default:not(.cmacs-floating-menu-main-button):enabled:focus,cmacs-floating-menu .ant-btn-background-ghost.ant-btn-default:not(.cmacs-floating-menu-main-button):enabled:hover,cmacs-floating-menu .ant-btn-icon-only:not(.cmacs-floating-menu-main-button),cmacs-floating-menu .ant-menu-vertical{background-color:transparent!important}cmacs-floating-menu .ant-btn-background-ghost.ant-btn-default:enabled,cmacs-floating-menu .ant-menu-item>a{color:#fff!important;padding:0}cmacs-floating-menu .ant-btn-background-ghost.ant-btn-default:enabled i{font-size:16px;color:#fff!important}cmacs-floating-menu .ant-menu-vertical .ant-menu-item,cmacs-floating-menu .ant-menu-vertical .ant-menu-item:not(:last-child){margin:0 auto}cmacs-floating-menu .ant-menu-vertical,cmacs-floating-menu .ant-menu-vertical-left{border:#97a0ae}cmacs-floating-menu .ant-menu-item>a{color:#97a0ae}cmacs-floating-menu .ant-menu-item .ant-menu-item-selected,cmacs-floating-menu .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected{background-color:#001333;border-radius:3px}cmacs-floating-menu cmacs-divider .ant-divider{background-color:#656c79}.cmacs-floating-menu-main{background-color:#778899;border-radius:5px 0 0 5px!important;padding:4px 4px 4px 0}.cmacs-floating-menu-vertical .cmacs-floating-menu-main{border-radius:5px 5px 0 0!important}.cmacs-floating-menu-main button{padding-right:0!important}.cmacs-floating-menu-horizontal .cmacs-floating-menu-main{display:inline-block}.cmacs-floating-menu-main-ul{width:150px;min-width:150px;border-radius:5px;background-color:#0d1e3b;border-color:#0d1e3b!important}.cmacs-floating-menu-main-ul li{padding:8px 10px 8px 12px!important;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;letter-spacing:normal;color:#97a0ae;border-top:none!important}.cmacs-floating-menu-main-ul li:hover{background-color:#001333!important}.cmacs-floating-menu-main-ul .ant-dropdown-menu-item i,.cmacs-floating-menu-main-ul .ant-dropdown-menu-submenu-title i{position:relative;top:2px}.cmacs-floating-menu-vertical button,.cmacs-floating-menu-vertical cmacs-dropdown,.cmacs-floating-menu-vertical div{display:block}.cmacs-floating-menu-horizontal button,.cmacs-floating-menu-horizontal cmacs-dropdown,.cmacs-floating-menu-horizontal div{display:inline-block}cmacs-floating-menu .cmacs-floating-menu-vertical .ant-btn-background-ghost.ant-btn-default.cmacs-floating-menu-main-button{width:100%;border-radius:5px 5px 0 0!important}cmacs-floating-menu .cmacs-floating-menu-vertical .ant-divider-horizontal{width:60%;margin:5px auto;min-width:unset}.cmacs-floating-menu-main-ul-right{margin-left:5px!important}.cmacs-floating-menu-main-ul-bottom{margin-top:8px!important}.cmacs-floating-menu-main-ul-top{margin-bottom:8px!important}.cmacs-floating-menu-main-ul-left{margin-right:8px!important}.cmacs-floating-menu-draggable-north-area{width:100%;height:3px;position:absolute;top:0;border-radius:5px 5px 0 0}.cmacs-floating-menu-draggable-south-area{width:100%;height:3px;position:absolute;bottom:0;border-radius:0 0 5px 5px}.cmacs-floating-menu-draggable-east-area{height:100%;width:3px;position:absolute;right:0;border-radius:0 5px 5px 0}.cmacs-floating-menu-draggable-west-area{height:100%;width:3px;position:absolute;left:0;border-radius:5px 0 0 5px}.cmacs-floating-menu-draggable-east-area:hover,.cmacs-floating-menu-draggable-north-area:hover,.cmacs-floating-menu-draggable-south-area:hover,.cmacs-floating-menu-draggable-west-area:hover{cursor:move}.cmacs-floating-menu-user-content{padding:4px 3px;background:#0d1e3b;border-radius:0 5px 5px 0}.cmacs-floating-menu-vertical .cmacs-floating-menu-user-content{border-radius:0 0 5px 5px}.cmacs-floating-menu-collapsed{padding:4px 3px;background:#0d1e3b}"]
                }] }
    ];
    /** @nocollapse */
    CmacsFloatingMenuComponent.ctorParameters = function () { return []; };
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
    return CmacsFloatingMenuComponent;
}());
export { CmacsFloatingMenuComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZmxvYXRpbmctbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLWZsb2F0aW5nLW1lbnUvY21hY3MtZmxvYXRpbmctbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBQ0wsaUJBQWlCLEVBQ2pCLE1BQU0sRUFDTixZQUFZLEVBRVosU0FBUyxFQUdWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUtqRCxNQUFNLEtBQU8sMEJBQTBCLEdBQUc7SUFDeEMsY0FBYyxFQUFFLGNBQWM7SUFDOUIsZUFBZSxFQUFFLGVBQWU7SUFDaEMsYUFBYSxFQUFFLGFBQWE7SUFDNUIsZ0JBQWdCLEVBQUUsZ0JBQWdCO0lBQ2xDLGtCQUFrQixFQUFFLGtCQUFrQjtDQUN2QztBQUVEO0lBd0NFO1FBbkJBLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN6QixVQUFLLEdBQUcsMEJBQTBCLENBQUM7UUFJMUIsYUFBUSxHQUFxQixRQUFRLENBQUM7UUFDdEIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBRWpDLG1CQUFjLEdBQW1DLElBQUksWUFBWSxFQUFvQixDQUFDO1FBRXZGLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFNcEIsU0FBSSxHQUFRLDBCQUEwQixDQUFDO0lBRWhDLENBQUM7Ozs7SUFFakIsZ0RBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0QjtJQUNILENBQUM7Ozs7SUFF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QztJQUN2QixDQUFDOztnQkFuSEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLDh3RkFBbUQ7b0JBQ25ELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUUvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsSUFBSSxFQUFFO3dCQUNKLDRCQUE0QixFQUFFLHFCQUFxQjt3QkFDbkQseUJBQXlCLEVBQUUsa0JBQWtCO3dCQUM3QyxxQ0FBcUMsRUFBRSw2Q0FBNkM7d0JBQ3BGLHFDQUFxQyxFQUFFLDZDQUE2Qzt3QkFDcEYsYUFBYSxFQUFFLEtBQUs7d0JBQ3BCLGdCQUFnQixFQUFFLFFBQVE7d0JBQzFCLGNBQWMsRUFBRSxNQUFNO3dCQUN0QixlQUFlLEVBQUUsT0FBTztxQkFDekI7O2lCQUNGOzs7OzswQkFPRSxTQUFTLFNBQUMsT0FBTzsyQkFFakIsS0FBSzswQkFDTCxLQUFLOzZCQUNMLEtBQUs7K0JBQ0wsS0FBSztpQ0FDTCxNQUFNO3lCQUVOLEtBQUs7c0JBQ0wsS0FBSzt5QkFDTCxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzt1QkFFTCxLQUFLOztJQVhtQjtRQUFmLFlBQVksRUFBRTs7K0RBQWlCO0lBQ2hCO1FBQWYsWUFBWSxFQUFFOztrRUFBbUI7SUF3RjdDLGlDQUFDO0NBQUEsQUFwSEQsSUFvSEM7U0FqR1ksMEJBQTBCOzs7SUFFckMsc0RBQXlCOztJQUN6QiwyQ0FBbUM7O0lBRW5DLDZDQUFxQzs7SUFFckMsOENBQStDOztJQUMvQyw2Q0FBeUM7O0lBQ3pDLGdEQUEyQzs7SUFDM0Msa0RBQThCOztJQUM5QixvREFBZ0c7O0lBRWhHLDRDQUE2Qjs7SUFDN0IseUNBQXFCOztJQUNyQiw0Q0FBd0I7O0lBQ3hCLDBDQUFzQjs7SUFDdEIsMkNBQXVCOztJQUV2QiwwQ0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBWaWV3Q2hpbGQsXHJcblxyXG4gIE9uQ2hhbmdlc1xyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkJztcclxuaW1wb3J0IHsgQ2RrRHJhZyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xyXG5pbXBvcnQgeyBDbWFjc0RpdmlkZXJDb21wb25lbnQgfSBmcm9tICcuLi9jbWFjcy1kaXZpZGVyL2NtYWNzLWRpdmlkZXIuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCB0eXBlIEZsb2F0aW5nTWVudVR5cGUgPSAndG9wJyB8ICdib3R0b20nIHwgJ2xlZnQnIHwgJ3JpZ2h0JztcclxuXHJcbmV4cG9ydCBjb25zdCBGTE9BVElOR19NRU5VX0xPQ0FMSVpBVElPTiA9IHtcclxuICAnRG9jayBUbyBMZWZ0JzogJ0RvY2sgVG8gTGVmdCcsXHJcbiAgJ0RvY2sgVG8gUmlnaHQnOiAnRG9jayBUbyBSaWdodCcsXHJcbiAgJ0RvY2sgVG8gVG9wJzogJ0RvY2sgVG8gVG9wJyxcclxuICAnRG9jayBUbyBCb3R0b20nOiAnRG9jayBUbyBCb3R0b20nLFxyXG4gICdNaW5pbWl6ZSBUb29sYmFyJzogJ01pbmltaXplIFRvb2xiYXInXHJcbn07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWZsb2F0aW5nLW1lbnUnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NGbG9hdGluZ01lbnUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1mbG9hdGluZy1tZW51LmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1mbG9hdGluZy1tZW51LmNvbXBvbmVudC5jc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuY2Fycm90LWJvdHRvbS1tZW51XSc6IGBjYXJyb3QgPT09ICdib3R0b20nYCxcclxuICAgICdbY2xhc3MuY2Fycm90LXRvcC1tZW51XSc6IGBjYXJyb3QgPT09ICd0b3AnYCxcclxuICAgICdbY2xhc3MuY21hY3MtZmxvYXRpbmctbWVudS1hbGlnbi14XSc6IGBwb3NpdGlvbiA9PT0gJ2JvdHRvbScgfHwgcG9zaXRpb24gPT09ICd0b3AnYCxcclxuICAgICdbY2xhc3MuY21hY3MtZmxvYXRpbmctbWVudS1hbGlnbi15XSc6IGBwb3NpdGlvbiA9PT0gJ2xlZnQnIHx8IHBvc2l0aW9uID09PSAncmlnaHQnYCxcclxuICAgICdbc3R5bGUudG9wXSc6IGB0b3BgLFxyXG4gICAgJ1tzdHlsZS5ib3R0b21dJzogYGJvdHRvbWAsXHJcbiAgICAnW3N0eWxlLmxlZnRdJzogYGxlZnRgLFxyXG4gICAgJ1tzdHlsZS5yaWdodF0nOiBgcmlnaHRgLFxyXG4gIH1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0Zsb2F0aW5nTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlc3tcclxuXHJcbiAgX21pbmltaXplVG9vbGJhciA9IGZhbHNlO1xyXG4gIF9pMThuID0gRkxPQVRJTkdfTUVOVV9MT0NBTElaQVRJT047XHJcblxyXG4gIEBWaWV3Q2hpbGQoQ2RrRHJhZykgY2RrRHJhZzogQ2RrRHJhZztcclxuXHJcbiAgQElucHV0KCkgcG9zaXRpb246IEZsb2F0aW5nTWVudVR5cGUgPSAnYm90dG9tJztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdmlzaWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93RXh0cmFzID0gdHJ1ZTtcclxuICBASW5wdXQoKSBkcmFnQm91bmRhcnk6IHN0cmluZztcclxuICBAT3V0cHV0KCkgcG9zaXRpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxGbG9hdGluZ01lbnVUeXBlPiA9IG5ldyBFdmVudEVtaXR0ZXI8RmxvYXRpbmdNZW51VHlwZT4oKTtcclxuXHJcbiAgQElucHV0KCkgY2Fycm90OiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSB0b3A6IHN0cmluZztcclxuICBASW5wdXQoKSBib3R0b206IHN0cmluZztcclxuICBASW5wdXQoKSBsZWZ0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcmlnaHQ6IHN0cmluZztcclxuXHJcbiAgQElucHV0KCkgaTE4bjogYW55ID0gRkxPQVRJTkdfTUVOVV9MT0NBTElaQVRJT047XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICBpZiAodGhpcy5jZGtEcmFnKSB7XHJcbiAgICAgIHRoaXMucmVzZXREcmFnRHJvcCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbWluaW1pemVUb29sYmFyKCkge1xyXG4gICAgdGhpcy5yZXNldERyYWdEcm9wKCk7XHJcbiAgICB0aGlzLl9taW5pbWl6ZVRvb2xiYXIgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZXhwYW5kVG9vbGJhcigpIHtcclxuICAgIHRoaXMucmVzZXREcmFnRHJvcCgpO1xyXG4gICAgdGhpcy5fbWluaW1pemVUb29sYmFyID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBkb2NrVG9MZWZ0KCkge1xyXG4gICAgdGhpcy5yZXNldERyYWdEcm9wKCk7XHJcbiAgICB0aGlzLnRvcCA9IG51bGw7XHJcbiAgICB0aGlzLmxlZnQgPSAnMCc7XHJcbiAgICB0aGlzLnJpZ2h0ID0gbnVsbDtcclxuICAgIHRoaXMuYm90dG9tID0gbnVsbDtcclxuICAgIHRoaXMucG9zaXRpb24gPSAnbGVmdCc7XHJcbiAgICB0aGlzLnBvc2l0aW9uQ2hhbmdlLmVtaXQodGhpcy5wb3NpdGlvbik7XHJcbiAgfVxyXG5cclxuICBkb2NrVG9SaWdodCgpIHtcclxuICAgIHRoaXMucmVzZXREcmFnRHJvcCgpO1xyXG4gICAgdGhpcy50b3AgPSBudWxsO1xyXG4gICAgdGhpcy5sZWZ0ID0gbnVsbDtcclxuICAgIHRoaXMucmlnaHQgPSAnMCc7XHJcbiAgICB0aGlzLmJvdHRvbSA9IG51bGw7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gJ3JpZ2h0JztcclxuICAgIHRoaXMucG9zaXRpb25DaGFuZ2UuZW1pdCh0aGlzLnBvc2l0aW9uKTtcclxuICB9XHJcblxyXG4gIGRvY2tUb1RvcCgpIHtcclxuICAgIHRoaXMucmVzZXREcmFnRHJvcCgpO1xyXG4gICAgdGhpcy50b3AgPSAnMCc7XHJcbiAgICB0aGlzLmxlZnQgPSBudWxsO1xyXG4gICAgdGhpcy5yaWdodCA9IG51bGw7XHJcbiAgICB0aGlzLmJvdHRvbSA9IG51bGw7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gJ3RvcCc7XHJcbiAgICB0aGlzLnBvc2l0aW9uQ2hhbmdlLmVtaXQodGhpcy5wb3NpdGlvbik7XHJcbiAgfVxyXG5cclxuICBkb2NrVG9Cb3R0b20oKSB7XHJcbiAgICB0aGlzLnJlc2V0RHJhZ0Ryb3AoKTtcclxuICAgIHRoaXMuYm90dG9tID0gJzAnO1xyXG4gICAgdGhpcy5sZWZ0ID0gbnVsbDtcclxuICAgIHRoaXMucmlnaHQgPSBudWxsO1xyXG4gICAgdGhpcy50b3AgPSBudWxsO1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9ICdib3R0b20nO1xyXG4gICAgdGhpcy5wb3NpdGlvbkNoYW5nZS5lbWl0KHRoaXMucG9zaXRpb24pO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGxhY2VtZW50KCkge1xyXG4gICAgc3dpdGNoICh0aGlzLnBvc2l0aW9uKSB7XHJcbiAgICAgIGNhc2UgJ2JvdHRvbSc6XHJcbiAgICAgICAgcmV0dXJuICd0b3AnO1xyXG4gICAgICBjYXNlICd0b3AnOlxyXG4gICAgICAgIHJldHVybiAnYm90dG9tJztcclxuICAgICAgY2FzZSAnbGVmdCc6XHJcbiAgICAgICAgcmV0dXJuICdyaWdodCc7XHJcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcclxuICAgICAgICByZXR1cm4gJ2xlZnQnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzZXREcmFnRHJvcCgpIHtcclxuICAgIHRoaXMuY2RrRHJhZy5fZHJhZ1JlZlsnX3ByZXZpZXdSZWN0J10gPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmNka0RyYWcuX2RyYWdSZWZbJ19ib3VuZGFyeVJlY3QnXSA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuY2RrRHJhZy5yZXNldCgpO1xyXG4gIH1cclxufVxyXG4iXX0=