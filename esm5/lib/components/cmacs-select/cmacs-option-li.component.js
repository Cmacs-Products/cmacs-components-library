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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, TemplateRef, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { isNotNil } from 'ng-zorro-antd/core';
import { CmacsOptionComponent } from './cmacs-option.component';
import { CmacsSelectService } from './cmacs-select.service';
var CmacsOptionLiComponent = /** @class */ (function () {
    function CmacsOptionLiComponent(elementRef, nzSelectService, cdr, renderer) {
        this.elementRef = elementRef;
        this.nzSelectService = nzSelectService;
        this.cdr = cdr;
        this.el = this.elementRef.nativeElement;
        this.selected = false;
        this.active = false;
        this.destroy$ = new Subject();
        renderer.addClass(elementRef.nativeElement, 'ant-select-dropdown-menu-item');
    }
    /**
     * @return {?}
     */
    CmacsOptionLiComponent.prototype.clickOption = /**
     * @return {?}
     */
    function () {
        this.nzSelectService.clickOption(this.nzOption);
    };
    /**
     * @return {?}
     */
    CmacsOptionLiComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.nzSelectService.listOfSelectedValue$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} list
         * @return {?}
         */
        function (list) {
            _this.selected = isNotNil(list.find((/**
             * @param {?} v
             * @return {?}
             */
            function (v) { return _this.nzSelectService.compareWith(v, _this.nzOption.nzValue); })));
            _this.cdr.markForCheck();
        }));
        this.nzSelectService.activatedOption$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            if (option) {
                _this.active = _this.nzSelectService.compareWith(option.nzValue, _this.nzOption.nzValue);
            }
            else {
                _this.active = false;
            }
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    CmacsOptionLiComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    CmacsOptionLiComponent.decorators = [
        { type: Component, args: [{
                    selector: '[cmacs-option-li]',
                    exportAs: 'cmacsOptionLi',
                    template: "<ng-container *ngIf=\"!nzOption.nzCustomContent; else nzOption.template\">\r\n  {{nzOption.nzLabel}}\r\n  <ng-container *ngIf=\"nzOption.divider\">\r\n    <div class=\"cmacs-select-divider\">{{nzOption.divider}}</div>\r\n  </ng-container>\r\n</ng-container>\r\n<ng-container *ngIf=\"nzSelectService.isMultipleOrTags\">\r\n  <i nz-icon type=\"check\" class=\"ant-select-selected-icon\" *ngIf=\"!nzMenuItemSelectedIcon; else nzMenuItemSelectedIcon\"></i>\r\n</ng-container>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.ant-select-dropdown-menu-item-selected]': 'selected && !nzOption.nzDisabled',
                        '[class.ant-select-dropdown-menu-item-disabled]': 'nzOption.nzDisabled',
                        '[class.ant-select-dropdown-menu-item-active]': 'active && !nzOption.nzDisabled',
                        '[attr.unselectable]': '"unselectable"',
                        '[style.user-select]': '"none"',
                        '(click)': 'clickOption()',
                        '(mousedown)': '$event.preventDefault()'
                    },
                    styles: [".cmacs-select-divider{font-family:Roboto,Roboto-Regular;font-size:11px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.5;letter-spacing:normal;color:#fff;background-color:#2a7cff;padding:0 3px;opacity:.9;width:-webkit-max-content;width:-moz-max-content;width:max-content;display:-webkit-inline-box;display:inline-flex;right:0;position:absolute;top:0}"]
                }] }
    ];
    /** @nocollapse */
    CmacsOptionLiComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: CmacsSelectService },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    CmacsOptionLiComponent.propDecorators = {
        nzOption: [{ type: Input }],
        nzMenuItemSelectedIcon: [{ type: Input }]
    };
    return CmacsOptionLiComponent;
}());
export { CmacsOptionLiComponent };
if (false) {
    /** @type {?} */
    CmacsOptionLiComponent.prototype.el;
    /** @type {?} */
    CmacsOptionLiComponent.prototype.selected;
    /** @type {?} */
    CmacsOptionLiComponent.prototype.active;
    /** @type {?} */
    CmacsOptionLiComponent.prototype.destroy$;
    /** @type {?} */
    CmacsOptionLiComponent.prototype.nzOption;
    /** @type {?} */
    CmacsOptionLiComponent.prototype.nzMenuItemSelectedIcon;
    /**
     * @type {?}
     * @private
     */
    CmacsOptionLiComponent.prototype.elementRef;
    /** @type {?} */
    CmacsOptionLiComponent.prototype.nzSelectService;
    /**
     * @type {?}
     * @private
     */
    CmacsOptionLiComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtb3B0aW9uLWxpLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mtc2VsZWN0L2NtYWNzLW9wdGlvbi1saS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFHTCxTQUFTLEVBQ1QsV0FBVyxFQUNYLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFOUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFNUQ7SUE2QkUsZ0NBQ1UsVUFBc0IsRUFDdkIsZUFBbUMsRUFDbEMsR0FBc0IsRUFDOUIsUUFBbUI7UUFIWCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3ZCLG9CQUFlLEdBQWYsZUFBZSxDQUFvQjtRQUNsQyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWRoQyxPQUFFLEdBQWdCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQ2hELGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBY3ZCLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSwrQkFBK0IsQ0FBQyxDQUFDO0lBQy9FLENBQUM7Ozs7SUFYRCw0Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7OztJQVdELHlDQUFROzs7SUFBUjtRQUFBLGlCQWFDO1FBWkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLElBQUk7WUFDckYsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUk7Ozs7WUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUExRCxDQUEwRCxFQUFDLENBQUMsQ0FBQztZQUNyRyxLQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLE1BQU07WUFDbkYsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDdkY7aUJBQU07Z0JBQ0wsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7YUFDckI7WUFDRCxLQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELDRDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDOztnQkF4REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFFBQVEsRUFBRSxlQUFlO29CQUN6Qix1ZUFBK0M7b0JBQy9DLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsSUFBSSxFQUFFO3dCQUNKLGdEQUFnRCxFQUFFLGtDQUFrQzt3QkFDcEYsZ0RBQWdELEVBQUUscUJBQXFCO3dCQUN2RSw4Q0FBOEMsRUFBRSxnQ0FBZ0M7d0JBQ2hGLHFCQUFxQixFQUFFLGdCQUFnQjt3QkFDdkMscUJBQXFCLEVBQUUsUUFBUTt3QkFDL0IsU0FBUyxFQUFFLGVBQWU7d0JBQzFCLGFBQWEsRUFBRSx5QkFBeUI7cUJBQ3pDOztpQkFFRjs7OztnQkFoQ0MsVUFBVTtnQkFjSCxrQkFBa0I7Z0JBaEJ6QixpQkFBaUI7Z0JBTWpCLFNBQVM7OzsyQkFrQ1IsS0FBSzt5Q0FDTCxLQUFLOztJQWtDUiw2QkFBQztDQUFBLEFBekRELElBeURDO1NBeENZLHNCQUFzQjs7O0lBQ2pDLG9DQUFnRDs7SUFDaEQsMENBQWlCOztJQUNqQix3Q0FBZTs7SUFDZiwwQ0FBeUI7O0lBQ3pCLDBDQUF3Qzs7SUFDeEMsd0RBQW1EOzs7OztJQU9qRCw0Q0FBOEI7O0lBQzlCLGlEQUEwQzs7Ozs7SUFDMUMscUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ21hY3NPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL2NtYWNzLW9wdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDbWFjc1NlbGVjdFNlcnZpY2UgfSBmcm9tICcuL2NtYWNzLXNlbGVjdC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW2NtYWNzLW9wdGlvbi1saV0nLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NPcHRpb25MaScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLW9wdGlvbi1saS5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLXNlbGVjdGVkXSc6ICdzZWxlY3RlZCAmJiAhbnpPcHRpb24ubnpEaXNhYmxlZCcsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLWRpc2FibGVkXSc6ICduek9wdGlvbi5uekRpc2FibGVkJyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tYWN0aXZlXSc6ICdhY3RpdmUgJiYgIW56T3B0aW9uLm56RGlzYWJsZWQnLFxyXG4gICAgJ1thdHRyLnVuc2VsZWN0YWJsZV0nOiAnXCJ1bnNlbGVjdGFibGVcIicsXHJcbiAgICAnW3N0eWxlLnVzZXItc2VsZWN0XSc6ICdcIm5vbmVcIicsXHJcbiAgICAnKGNsaWNrKSc6ICdjbGlja09wdGlvbigpJyxcclxuICAgICcobW91c2Vkb3duKSc6ICckZXZlbnQucHJldmVudERlZmF1bHQoKSdcclxuICB9LFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLW9wdGlvbi1saS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzT3B0aW9uTGlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgZWw6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgc2VsZWN0ZWQgPSBmYWxzZTtcclxuICBhY3RpdmUgPSBmYWxzZTtcclxuICBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgQElucHV0KCkgbnpPcHRpb246IENtYWNzT3B0aW9uQ29tcG9uZW50O1xyXG4gIEBJbnB1dCgpIG56TWVudUl0ZW1TZWxlY3RlZEljb246IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBjbGlja09wdGlvbigpOiB2b2lkIHtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmNsaWNrT3B0aW9uKHRoaXMubnpPcHRpb24pO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwdWJsaWMgbnpTZWxlY3RTZXJ2aWNlOiBDbWFjc1NlbGVjdFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyXHJcbiAgKSB7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbScpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5saXN0T2ZTZWxlY3RlZFZhbHVlJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKGxpc3QgPT4ge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkID0gaXNOb3ROaWwobGlzdC5maW5kKHYgPT4gdGhpcy5uelNlbGVjdFNlcnZpY2UuY29tcGFyZVdpdGgodiwgdGhpcy5uek9wdGlvbi5uelZhbHVlKSkpO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UuYWN0aXZhdGVkT3B0aW9uJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKG9wdGlvbiA9PiB7XHJcbiAgICAgIGlmIChvcHRpb24pIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRoaXMubnpTZWxlY3RTZXJ2aWNlLmNvbXBhcmVXaXRoKG9wdGlvbi5uelZhbHVlLCB0aGlzLm56T3B0aW9uLm56VmFsdWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==