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
        this.topBoundary = '0';
        this.bottomBoundary = '0';
        this.leftBoundary = '0';
        this.rightBoundary = '0';
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
        this.left = this.leftBoundary;
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
        this.right = this.rightBoundary;
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
        this.top = this.topBoundary;
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
        this.bottom = this.bottomBoundary;
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
                    styles: ["cmacs-floating-menu{display:inline-block;position:absolute}.cmacs-floating-menu-horizontal,.cmacs-floating-menu-vertical{box-shadow:0 3px 4px rgba(59,63,70,.2);z-index:1;width:-webkit-max-content;width:-moz-max-content;width:max-content;border-radius:5px}.cmacs-floating-menu-align-x{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.cmacs-floating-menu-align-y{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}cmacs-floating-menu.carrot-top-menu::before{width:10px;border:8px solid #0d1e3b;display:block;content:'';margin:0 auto;position:relative;-webkit-transform:rotate(-135deg) translateY(-8px) translateX(-8px);transform:rotate(-135deg) translateY(-8px) translateX(-8px)}cmacs-floating-menu.carrot-bottom-menu::after{width:10px;border:8px solid #0d1e3b;display:block;content:'';margin:0 auto;position:relative;-webkit-transform:rotate(-135deg) translateY(8px) translateX(8px);transform:rotate(-135deg) translateY(8px) translateX(8px)}cmacs-floating-menu .ant-btn-background-ghost.ant-btn-default.cmacs-floating-menu-main-button:enabled:focus,cmacs-floating-menu .ant-btn-background-ghost.ant-btn-default.cmacs-floating-menu-main-button:enabled:hover,cmacs-floating-menu .ant-btn-background-ghost.ant-btn-default:not(.cmacs-floating-menu-main-button):enabled:focus,cmacs-floating-menu .ant-btn-background-ghost.ant-btn-default:not(.cmacs-floating-menu-main-button):enabled:hover,cmacs-floating-menu .ant-btn-icon-only:not(.cmacs-floating-menu-main-button),cmacs-floating-menu .ant-menu-vertical{background-color:transparent!important}cmacs-floating-menu .ant-btn-background-ghost.ant-btn-default:enabled,cmacs-floating-menu .ant-menu-item>a{color:#fff!important;padding:0}cmacs-floating-menu .ant-btn-background-ghost.ant-btn-default:enabled i{font-size:16px;color:#fff!important}cmacs-floating-menu .ant-menu-vertical .ant-menu-item,cmacs-floating-menu .ant-menu-vertical .ant-menu-item:not(:last-child){margin:0 auto}cmacs-floating-menu .ant-menu-vertical,cmacs-floating-menu .ant-menu-vertical-left{border:#97a0ae}cmacs-floating-menu .ant-menu-item>a{color:#97a0ae}cmacs-floating-menu .ant-menu-item .ant-menu-item-selected,cmacs-floating-menu .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected{background-color:#001333;border-radius:3px}cmacs-floating-menu cmacs-divider .ant-divider{background-color:#656c79}.cmacs-floating-menu-main{background-color:#2d3d5a;border-radius:5px 0 0 5px!important;padding:12px 10px}.cmacs-floating-menu-vertical .cmacs-floating-menu-main{border-radius:5px 5px 0 0!important}.cmacs-floating-menu-main button{padding-right:0!important;padding-left:0!important}.cmacs-floating-menu-horizontal .cmacs-floating-menu-main{display:inline-block}.cmacs-floating-menu-main-ul{width:150px;min-width:150px;border-radius:5px;background-color:#0d1e3b;border-color:#0d1e3b!important}.cmacs-floating-menu-main-ul li{padding:8px 10px 8px 12px!important;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;letter-spacing:normal;color:#97a0ae;border-top:none!important}.cmacs-floating-menu-main-ul li:hover{background-color:#001333!important}.cmacs-floating-menu-main-ul .ant-dropdown-menu-item i,.cmacs-floating-menu-main-ul .ant-dropdown-menu-submenu-title i{position:relative;top:2px}.cmacs-floating-menu-vertical button,.cmacs-floating-menu-vertical cmacs-dropdown,.cmacs-floating-menu-vertical div{display:block}.cmacs-floating-menu-horizontal button,.cmacs-floating-menu-horizontal cmacs-dropdown,.cmacs-floating-menu-horizontal div{display:inline-block}cmacs-floating-menu .cmacs-floating-menu-vertical .ant-btn-background-ghost.ant-btn-default.cmacs-floating-menu-main-button{width:100%;border-radius:5px 5px 0 0!important}cmacs-floating-menu .cmacs-floating-menu-vertical .ant-divider-horizontal{width:60%;margin:5px auto;min-width:unset}.cmacs-floating-menu-main-ul-right{margin-left:5px!important}.cmacs-floating-menu-main-ul-bottom{margin-top:8px!important}.cmacs-floating-menu-main-ul-top{margin-bottom:8px!important}.cmacs-floating-menu-main-ul-left{margin-right:8px!important}.cmacs-floating-menu-draggable-north-area{width:100%;height:10px;position:absolute;top:0;border-radius:5px 5px 0 0}.cmacs-floating-menu-draggable-south-area{width:100%;height:10px;position:absolute;bottom:0;border-radius:0 0 5px 5px}.cmacs-floating-menu-draggable-east-area{height:100%;width:10px;position:absolute;right:0;border-radius:0 5px 5px 0}.cmacs-floating-menu-draggable-west-area{height:100%;width:10px;position:absolute;left:0;border-radius:5px 0 0 5px}.cmacs-floating-menu-draggable-east-area:hover,.cmacs-floating-menu-draggable-north-area:hover,.cmacs-floating-menu-draggable-south-area:hover,.cmacs-floating-menu-draggable-west-area:hover{cursor:move}.cmacs-floating-menu-user-content{padding:12px;background:#0d1e3b;border-radius:0 5px 5px 0}.cmacs-floating-menu-vertical .cmacs-floating-menu-user-content{border-radius:0 0 5px 5px}.cmacs-floating-menu-main button,.cmacs-floating-menu-user-content button{height:24px}.cmacs-floating-menu-vertical .cmacs-floating-menu-user-content button{padding:8px 0!important;height:34px}.cmacs-floating-menu-user-content button{padding-right:8px!important;padding-left:8px!important}.cmacs-floating-menu-collapsed{padding:12px;background:#0d1e3b}"]
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
        topBoundary: [{ type: Input }],
        bottomBoundary: [{ type: Input }],
        leftBoundary: [{ type: Input }],
        rightBoundary: [{ type: Input }],
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
    CmacsFloatingMenuComponent.prototype.topBoundary;
    /** @type {?} */
    CmacsFloatingMenuComponent.prototype.bottomBoundary;
    /** @type {?} */
    CmacsFloatingMenuComponent.prototype.leftBoundary;
    /** @type {?} */
    CmacsFloatingMenuComponent.prototype.rightBoundary;
    /** @type {?} */
    CmacsFloatingMenuComponent.prototype.i18n;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZmxvYXRpbmctbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLWZsb2F0aW5nLW1lbnUvY21hY3MtZmxvYXRpbmctbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBQ0wsaUJBQWlCLEVBQ2pCLE1BQU0sRUFDTixZQUFZLEVBRVosU0FBUyxFQUdWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUtqRCxNQUFNLEtBQU8sMEJBQTBCLEdBQUc7SUFDeEMsY0FBYyxFQUFFLGNBQWM7SUFDOUIsZUFBZSxFQUFFLGVBQWU7SUFDaEMsYUFBYSxFQUFFLGFBQWE7SUFDNUIsZ0JBQWdCLEVBQUUsZ0JBQWdCO0lBQ2xDLGtCQUFrQixFQUFFLGtCQUFrQjtDQUN2QztBQUVEO0lBNkNFO1FBeEJBLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN6QixVQUFLLEdBQUcsMEJBQTBCLENBQUM7UUFJMUIsYUFBUSxHQUFxQixRQUFRLENBQUM7UUFDdEIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBRWpDLG1CQUFjLEdBQW1DLElBQUksWUFBWSxFQUFvQixDQUFDO1FBRXZGLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFNcEIsZ0JBQVcsR0FBVyxHQUFHLENBQUM7UUFDMUIsbUJBQWMsR0FBVyxHQUFHLENBQUM7UUFDN0IsaUJBQVksR0FBVyxHQUFHLENBQUM7UUFDM0Isa0JBQWEsR0FBVyxHQUFHLENBQUM7UUFFNUIsU0FBSSxHQUFRLDBCQUEwQixDQUFDO0lBRWhDLENB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SUFDekMsZ0RBQTJDOztJQUMzQyxrREFBOEI7O0lBQzlCLG9EQUFnRzs7SUFFaEcsNENBQTZCOztJQUM3Qix5Q0FBcUI7O0lBQ3JCLDRDQUF3Qjs7SUFDeEIsMENBQXNCOztJQUN0QiwyQ0FBdUI7O0lBRXZCLGlEQUFtQzs7SUFDbkMsb0RBQXNDOztJQUN0QyxrREFBb0M7O0lBQ3BDLG1EQUFxQzs7SUFFckMsMENBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgVmlld0NoaWxkLFxyXG5cclxuICBPbkNoYW5nZXNcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XHJcbmltcG9ydCB7IENka0RyYWcgfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcclxuaW1wb3J0IHsgQ21hY3NEaXZpZGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vY21hY3MtZGl2aWRlci9jbWFjcy1kaXZpZGVyLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgdHlwZSBGbG9hdGluZ01lbnVUeXBlID0gJ3RvcCcgfCAnYm90dG9tJyB8ICdsZWZ0JyB8ICdyaWdodCc7XHJcblxyXG5leHBvcnQgY29uc3QgRkxPQVRJTkdfTUVOVV9MT0NBTElaQVRJT04gPSB7XHJcbiAgJ0RvY2sgVG8gTGVmdCc6ICdEb2NrIFRvIExlZnQnLFxyXG4gICdEb2NrIFRvIFJpZ2h0JzogJ0RvY2sgVG8gUmlnaHQnLFxyXG4gICdEb2NrIFRvIFRvcCc6ICdEb2NrIFRvIFRvcCcsXHJcbiAgJ0RvY2sgVG8gQm90dG9tJzogJ0RvY2sgVG8gQm90dG9tJyxcclxuICAnTWluaW1pemUgVG9vbGJhcic6ICdNaW5pbWl6ZSBUb29sYmFyJ1xyXG59O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1mbG9hdGluZy1tZW51JyxcclxuICBleHBvcnRBczogJ2NtYWNzRmxvYXRpbmdNZW51JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtZmxvYXRpbmctbWVudS5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtZmxvYXRpbmctbWVudS5jb21wb25lbnQuY3NzJ10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmNhcnJvdC1ib3R0b20tbWVudV0nOiBgY2Fycm90ID09PSAnYm90dG9tJ2AsXHJcbiAgICAnW2NsYXNzLmNhcnJvdC10b3AtbWVudV0nOiBgY2Fycm90ID09PSAndG9wJ2AsXHJcbiAgICAnW2NsYXNzLmNtYWNzLWZsb2F0aW5nLW1lbnUtYWxpZ24teF0nOiBgcG9zaXRpb24gPT09ICdib3R0b20nIHx8IHBvc2l0aW9uID09PSAndG9wJ2AsXHJcbiAgICAnW2NsYXNzLmNtYWNzLWZsb2F0aW5nLW1lbnUtYWxpZ24teV0nOiBgcG9zaXRpb24gPT09ICdsZWZ0JyB8fCBwb3NpdGlvbiA9PT0gJ3JpZ2h0J2AsXHJcbiAgICAnW3N0eWxlLnRvcF0nOiBgdG9wYCxcclxuICAgICdbc3R5bGUuYm90dG9tXSc6IGBib3R0b21gLFxyXG4gICAgJ1tzdHlsZS5sZWZ0XSc6IGBsZWZ0YCxcclxuICAgICdbc3R5bGUucmlnaHRdJzogYHJpZ2h0YCxcclxuICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ21hY3NGbG9hdGluZ01lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXN7XHJcblxyXG4gIF9taW5pbWl6ZVRvb2xiYXIgPSBmYWxzZTtcclxuICBfaTE4biA9IEZMT0FUSU5HX01FTlVfTE9DQUxJWkFUSU9OO1xyXG5cclxuICBAVmlld0NoaWxkKENka0RyYWcpIGNka0RyYWc6IENka0RyYWc7XHJcblxyXG4gIEBJbnB1dCgpIHBvc2l0aW9uOiBGbG9hdGluZ01lbnVUeXBlID0gJ2JvdHRvbSc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHZpc2libGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd0V4dHJhcyA9IHRydWU7XHJcbiAgQElucHV0KCkgZHJhZ0JvdW5kYXJ5OiBzdHJpbmc7XHJcbiAgQE91dHB1dCgpIHBvc2l0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RmxvYXRpbmdNZW51VHlwZT4gPSBuZXcgRXZlbnRFbWl0dGVyPEZsb2F0aW5nTWVudVR5cGU+KCk7XHJcblxyXG4gIEBJbnB1dCgpIGNhcnJvdDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgdG9wOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgYm90dG9tOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbGVmdDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHJpZ2h0OiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpIHRvcEJvdW5kYXJ5OiBzdHJpbmcgPSAnMCc7XHJcbiAgQElucHV0KCkgYm90dG9tQm91bmRhcnk6IHN0cmluZyA9ICcwJztcclxuICBASW5wdXQoKSBsZWZ0Qm91bmRhcnk6IHN0cmluZyA9ICcwJztcclxuICBASW5wdXQoKSByaWdodEJvdW5kYXJ5OiBzdHJpbmcgPSAnMCc7XHJcblxyXG4gIEBJbnB1dCgpIGkxOG46IGFueSA9IEZMT0FUSU5HX01FTlVfTE9DQUxJWkFUSU9OO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgaWYgKHRoaXMuY2RrRHJhZykge1xyXG4gICAgICB0aGlzLnJlc2V0RHJhZ0Ryb3AoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1pbmltaXplVG9vbGJhcigpIHtcclxuICAgIHRoaXMucmVzZXREcmFnRHJvcCgpO1xyXG4gICAgdGhpcy5fbWluaW1pemVUb29sYmFyID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGV4cGFuZFRvb2xiYXIoKSB7XHJcbiAgICB0aGlzLnJlc2V0RHJhZ0Ryb3AoKTtcclxuICAgIHRoaXMuX21pbmltaXplVG9vbGJhciA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZG9ja1RvTGVmdCgpIHtcclxuICAgIHRoaXMucmVzZXREcmFnRHJvcCgpO1xyXG4gICAgdGhpcy50b3AgPSBudWxsO1xyXG4gICAgdGhpcy5sZWZ0ID0gdGhpcy5sZWZ0Qm91bmRhcnk7XHJcbiAgICB0aGlzLnJpZ2h0ID0gbnVsbDtcclxuICAgIHRoaXMuYm90dG9tID0gbnVsbDtcclxuICAgIHRoaXMucG9zaXRpb24gPSAnbGVmdCc7XHJcbiAgICB0aGlzLnBvc2l0aW9uQ2hhbmdlLmVtaXQodGhpcy5wb3NpdGlvbik7XHJcbiAgfVxyXG5cclxuICBkb2NrVG9SaWdodCgpIHtcclxuICAgIHRoaXMucmVzZXREcmFnRHJvcCgpO1xyXG4gICAgdGhpcy50b3AgPSBudWxsO1xyXG4gICAgdGhpcy5sZWZ0ID0gbnVsbDtcclxuICAgIHRoaXMucmlnaHQgPSB0aGlzLnJpZ2h0Qm91bmRhcnk7XHJcbiAgICB0aGlzLmJvdHRvbSA9IG51bGw7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gJ3JpZ2h0JztcclxuICAgIHRoaXMucG9zaXRpb25DaGFuZ2UuZW1pdCh0aGlzLnBvc2l0aW9uKTtcclxuICB9XHJcblxyXG4gIGRvY2tUb1RvcCgpIHtcclxuICAgIHRoaXMucmVzZXREcmFnRHJvcCgpO1xyXG4gICAgdGhpcy50b3AgPSB0aGlzLnRvcEJvdW5kYXJ5O1xyXG4gICAgdGhpcy5sZWZ0ID0gbnVsbDtcclxuICAgIHRoaXMucmlnaHQgPSBudWxsO1xyXG4gICAgdGhpcy5ib3R0b20gPSBudWxsO1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9ICd0b3AnO1xyXG4gICAgdGhpcy5wb3NpdGlvbkNoYW5nZS5lbWl0KHRoaXMucG9zaXRpb24pO1xyXG4gIH1cclxuXHJcbiAgZG9ja1RvQm90dG9tKCkge1xyXG4gICAgdGhpcy5yZXNldERyYWdEcm9wKCk7XHJcbiAgICB0aGlzLmJvdHRvbSA9IHRoaXMuYm90dG9tQm91bmRhcnk7XHJcbiAgICB0aGlzLmxlZnQgPSBudWxsO1xyXG4gICAgdGhpcy5yaWdodCA9IG51bGw7XHJcbiAgICB0aGlzLnRvcCA9IG51bGw7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gJ2JvdHRvbSc7XHJcbiAgICB0aGlzLnBvc2l0aW9uQ2hhbmdlLmVtaXQodGhpcy5wb3NpdGlvbik7XHJcbiAgfVxyXG5cclxuICBnZXRQbGFjZW1lbnQoKSB7XHJcbiAgICBzd2l0Y2ggKHRoaXMucG9zaXRpb24pIHtcclxuICAgICAgY2FzZSAnYm90dG9tJzpcclxuICAgICAgICByZXR1cm4gJ3RvcCc7XHJcbiAgICAgIGNhc2UgJ3RvcCc6XHJcbiAgICAgICAgcmV0dXJuICdib3R0b20nO1xyXG4gICAgICBjYXNlICdsZWZ0JzpcclxuICAgICAgICByZXR1cm4gJ3JpZ2h0JztcclxuICAgICAgY2FzZSAncmlnaHQnOlxyXG4gICAgICAgIHJldHVybiAnbGVmdCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXNldERyYWdEcm9wKCkge1xyXG4gICAgdGhpcy5jZGtEcmFnLl9kcmFnUmVmWydfcHJldmlld1JlY3QnXSA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuY2RrRHJhZy5fZHJhZ1JlZlsnX2JvdW5kYXJ5UmVjdCddID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5jZGtEcmFnLnJlc2V0KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==