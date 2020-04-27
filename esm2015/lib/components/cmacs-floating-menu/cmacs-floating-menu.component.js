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
                template: "<div #fixedEl>\r\n  <!--<cmacs-dropdown [trigger]=\"'click'\" [cmacsOpen]=\"true\" style=\"display: inline-flex\">\r\n    <a cmacs-dropdown><i class=\"icon-more-horizontal_icon\"></i></a>\r\n\r\n    <ul cmacs-menu style=\"width: 200px\">\r\n      <li cmacs-menu-item>\r\n        <i nz-icon type=\"copy\"></i>\r\n        <span>Dock to Left</span>\r\n      </li>\r\n      <li cmacs-menu-item>\r\n        <i nz-icon type=\"delete\"></i>\r\n        <span>Dock to Right</span>\r\n      </li>\r\n      <li cmacs-menu-item>\r\n        <i nz-icon type=\"delete\"></i>\r\n        <span>Dock to Top</span>\r\n      </li>\r\n      <li cmacs-menu-item>\r\n        <i nz-icon type=\"delete\"></i>\r\n        <span>Dock to Bottom</span>\r\n      </li>\r\n      <li cmacs-menu-item>\r\n        <i nz-icon type=\"delete\"></i>\r\n        <span>Minimize Toolbar</span>\r\n      </li>   \r\n    </ul>\r\n  </cmacs-dropdown>-->\r\n  <ng-content></ng-content>\r\n</div>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZmxvYXRpbmctbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLWZsb2F0aW5nLW1lbnUvY21hY3MtZmxvYXRpbmctbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFDTCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFvQnZCLE1BQU0sT0FBTywwQkFBMEI7SUFRckM7UUFOUyxXQUFNLEdBQVcsRUFBRSxDQUFDLENBQUEscUJBQXFCO0lBTWpDLENBQUM7OztZQXpCbkIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLHE4QkFBbUQ7Z0JBQ25ELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUUvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsSUFBSSxFQUFFO29CQUNKLDRCQUE0QixFQUFFLHFCQUFxQjtvQkFDbkQseUJBQXlCLEVBQUUsa0JBQWtCO29CQUM3QyxhQUFhLEVBQUUsS0FBSztvQkFDcEIsZ0JBQWdCLEVBQUUsUUFBUTtvQkFDMUIsY0FBYyxFQUFFLE1BQU07b0JBQ3RCLGVBQWUsRUFBRSxPQUFPO2lCQUN6Qjs7YUFDRjs7Ozs7cUJBSUUsS0FBSztrQkFDTCxLQUFLO3FCQUNMLEtBQUs7bUJBQ0wsS0FBSztvQkFDTCxLQUFLOzs7O0lBSk4sNENBQTZCOztJQUM3Qix5Q0FBcUI7O0lBQ3JCLDRDQUF3Qjs7SUFDeEIsMENBQXNCOztJQUN0QiwyQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtZmxvYXRpbmctbWVudScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0Zsb2F0aW5nTWVudScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWZsb2F0aW5nLW1lbnUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWZsb2F0aW5nLW1lbnUuY29tcG9uZW50LmNzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5jYXJyb3QtYm90dG9tLW1lbnVdJzogYGNhcnJvdCA9PT0gJ2JvdHRvbSdgLFxyXG4gICAgJ1tjbGFzcy5jYXJyb3QtdG9wLW1lbnVdJzogYGNhcnJvdCA9PT0gJ3RvcCdgLFxyXG4gICAgJ1tzdHlsZS50b3BdJzogYHRvcGAsXHJcbiAgICAnW3N0eWxlLmJvdHRvbV0nOiBgYm90dG9tYCxcclxuICAgICdbc3R5bGUubGVmdF0nOiBgbGVmdGAsXHJcbiAgICAnW3N0eWxlLnJpZ2h0XSc6IGByaWdodGAsXHJcbiAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENtYWNzRmxvYXRpbmdNZW51Q29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KCkgY2Fycm90OiBzdHJpbmcgPSAnJzsvLyBib3R0b20gfCB0b3AgfCAnJztcclxuICBASW5wdXQoKSB0b3A6IG51bWJlcjtcclxuICBASW5wdXQoKSBib3R0b206IG51bWJlcjtcclxuICBASW5wdXQoKSBsZWZ0OiBudW1iZXI7XHJcbiAgQElucHV0KCkgcmlnaHQ6IG51bWJlcjtcclxuICBcclxuICBjb25zdHJ1Y3RvciggKSB7IH1cclxuICBcclxufVxyXG4iXX0=