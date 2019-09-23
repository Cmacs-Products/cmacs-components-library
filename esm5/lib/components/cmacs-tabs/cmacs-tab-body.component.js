/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
var CmacsTabBodyComponent = /** @class */ (function () {
    function CmacsTabBodyComponent() {
        this.active = false;
        this.forceRender = false;
    }
    CmacsTabBodyComponent.decorators = [
        { type: Component, args: [{
                    selector: '[cmacs-tab-body]',
                    exportAs: 'cmacsTabBody',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "<ng-container *ngIf=\"active || forceRender\">\r\n  <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\r\n</ng-container>",
                    host: {
                        '[class.ant-tabs-tabpane-active]': 'active',
                        '[class.ant-tabs-tabpane-inactive]': '!active'
                    }
                }] }
    ];
    CmacsTabBodyComponent.propDecorators = {
        content: [{ type: Input }],
        active: [{ type: Input }],
        forceRender: [{ type: Input }]
    };
    return CmacsTabBodyComponent;
}());
export { CmacsTabBodyComponent };
if (false) {
    /** @type {?} */
    CmacsTabBodyComponent.prototype.content;
    /** @type {?} */
    CmacsTabBodyComponent.prototype.active;
    /** @type {?} */
    CmacsTabBodyComponent.prototype.forceRender;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdGFiLWJvZHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy10YWJzL2NtYWNzLXRhYi1ib2R5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxRztJQUFBO1FBY1csV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLGdCQUFXLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7O2dCQWhCQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsNklBQThDO29CQUM5QyxJQUFJLEVBQUU7d0JBQ0osaUNBQWlDLEVBQUUsUUFBUTt3QkFDM0MsbUNBQW1DLEVBQUUsU0FBUztxQkFDL0M7aUJBQ0Y7OzswQkFFRSxLQUFLO3lCQUNMLEtBQUs7OEJBQ0wsS0FBSzs7SUFDUiw0QkFBQztDQUFBLEFBaEJELElBZ0JDO1NBSlkscUJBQXFCOzs7SUFDaEMsd0NBQW9DOztJQUNwQyx1Q0FBd0I7O0lBQ3hCLDRDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdbY21hY3MtdGFiLWJvZHldJyxcclxuICBleHBvcnRBczogJ2NtYWNzVGFiQm9keScsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtdGFiLWJvZHkuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LXRhYnMtdGFicGFuZS1hY3RpdmVdJzogJ2FjdGl2ZScsXHJcbiAgICAnW2NsYXNzLmFudC10YWJzLXRhYnBhbmUtaW5hY3RpdmVdJzogJyFhY3RpdmUnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NUYWJCb2R5Q29tcG9uZW50IHtcclxuICBASW5wdXQoKSBjb250ZW50OiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBhY3RpdmUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBmb3JjZVJlbmRlciA9IGZhbHNlO1xyXG59XHJcbiJdfQ==