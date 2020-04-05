/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
export class CmacsFloatingMenuComponent {
    constructor() {
        this.carrot = ''; // bottom | top | '';
    }
}
CmacsFloatingMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmacs-floating-menu',
                exportAs: 'cmacsFloatingMenu',
                template: "<div #fixedEl>\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.carrot-bottom-menu]': `carrot === 'bottom'`,
                    '[class.carrot-top-menu]': `carrot === 'top'`,
                    '[style.top]': `top`,
                    '[style.bottom]': `bottom`,
                    '[style.left]': `left`,
                    '[style.right]': `right`,
                },
                styles: ["cmacs-floating-menu{display:inline-block;position:absolute}cmacs-floating-menu>div{background:#0d1e3b;border-radius:5px;box-shadow:0 3px 4px rgba(59,63,70,.2);padding:0 15px;z-index:1;width:-webkit-max-content;width:-moz-max-content;width:max-content}cmacs-floating-menu.carrot-top-menu::before{width:10px;border:8px solid #0d1e3b;display:block;content:'';margin:0 auto;position:relative;-webkit-transform:rotate(-135deg) translateY(-8px) translateX(-8px);transform:rotate(-135deg) translateY(-8px) translateX(-8px)}cmacs-floating-menu.carrot-bottom-menu::after{width:10px;border:8px solid #0d1e3b;display:block;content:'';margin:0 auto;position:relative;-webkit-transform:rotate(-135deg) translateY(8px) translateX(8px);transform:rotate(-135deg) translateY(8px) translateX(8px)}cmacs-floating-menu .ant-btn-background-ghost.ant-btn-default:enabled:focus,cmacs-floating-menu .ant-btn-background-ghost.ant-btn-default:enabled:hover,cmacs-floating-menu .ant-btn-icon-only,cmacs-floating-menu .ant-menu-vertical{background-color:transparent!important}cmacs-floating-menu .ant-btn-background-ghost.ant-btn-default:enabled,cmacs-floating-menu .ant-menu-item>a{color:#fff;padding:0}cmacs-floating-menu .ant-menu-vertical .ant-menu-item,cmacs-floating-menu .ant-menu-vertical .ant-menu-item:not(:last-child){margin:0 auto}cmacs-floating-menu .ant-menu-vertical,cmacs-floating-menu .ant-menu-vertical-left{border:#97a0ae}cmacs-floating-menu .ant-menu-item>a{color:#97a0ae}cmacs-floating-menu .ant-menu-item .ant-menu-item-selected,cmacs-floating-menu .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected{background-color:#001333;border-radius:3px}cmacs-floating-menu cmacs-divider .ant-divider{background-color:#656c79}"]
            }] }
];
/** @nocollapse */
CmacsFloatingMenuComponent.ctorParameters = () => [];
CmacsFloatingMenuComponent.propDecorators = {
    carrot: [{ type: Input }],
    top: [{ type: Input }],
    bottom: [{ type: Input }],
    left: [{ type: Input }],
    right: [{ type: Input }]
};
if (false) {
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZmxvYXRpbmctbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLWZsb2F0aW5nLW1lbnUvY21hY3MtZmxvYXRpbmctbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFDTCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFvQnZCLE1BQU0sT0FBTywwQkFBMEI7SUFRckM7UUFOUyxXQUFNLEdBQVcsRUFBRSxDQUFDLENBQUEscUJBQXFCO0lBTWpDLENBQUM7OztZQXpCbkIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLHVFQUFtRDtnQkFDbkQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBRS9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxJQUFJLEVBQUU7b0JBQ0osNEJBQTRCLEVBQUUscUJBQXFCO29CQUNuRCx5QkFBeUIsRUFBRSxrQkFBa0I7b0JBQzdDLGFBQWEsRUFBRSxLQUFLO29CQUNwQixnQkFBZ0IsRUFBRSxRQUFRO29CQUMxQixjQUFjLEVBQUUsTUFBTTtvQkFDdEIsZUFBZSxFQUFFLE9BQU87aUJBQ3pCOzthQUNGOzs7OztxQkFJRSxLQUFLO2tCQUNMLEtBQUs7cUJBQ0wsS0FBSzttQkFDTCxLQUFLO29CQUNMLEtBQUs7Ozs7SUFKTiw0Q0FBNkI7O0lBQzdCLHlDQUFxQjs7SUFDckIsNENBQXdCOztJQUN4QiwwQ0FBc0I7O0lBQ3RCLDJDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1mbG9hdGluZy1tZW51JyxcclxuICBleHBvcnRBczogJ2NtYWNzRmxvYXRpbmdNZW51JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtZmxvYXRpbmctbWVudS5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtZmxvYXRpbmctbWVudS5jb21wb25lbnQuY3NzJ10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmNhcnJvdC1ib3R0b20tbWVudV0nOiBgY2Fycm90ID09PSAnYm90dG9tJ2AsXHJcbiAgICAnW2NsYXNzLmNhcnJvdC10b3AtbWVudV0nOiBgY2Fycm90ID09PSAndG9wJ2AsXHJcbiAgICAnW3N0eWxlLnRvcF0nOiBgdG9wYCxcclxuICAgICdbc3R5bGUuYm90dG9tXSc6IGBib3R0b21gLFxyXG4gICAgJ1tzdHlsZS5sZWZ0XSc6IGBsZWZ0YCxcclxuICAgICdbc3R5bGUucmlnaHRdJzogYHJpZ2h0YCxcclxuICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ21hY3NGbG9hdGluZ01lbnVDb21wb25lbnQge1xyXG5cclxuICBASW5wdXQoKSBjYXJyb3Q6IHN0cmluZyA9ICcnOy8vIGJvdHRvbSB8IHRvcCB8ICcnO1xyXG4gIEBJbnB1dCgpIHRvcDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGJvdHRvbTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGxlZnQ6IG51bWJlcjtcclxuICBASW5wdXQoKSByaWdodDogbnVtYmVyO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKCApIHsgfVxyXG4gIFxyXG59XHJcbiJdfQ==