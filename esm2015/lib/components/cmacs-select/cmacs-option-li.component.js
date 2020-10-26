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
export class CmacsOptionLiComponent {
    /**
     * @param {?} elementRef
     * @param {?} nzSelectService
     * @param {?} cdr
     * @param {?} renderer
     */
    constructor(elementRef, nzSelectService, cdr, renderer) {
        this.elementRef = elementRef;
        this.nzSelectService = nzSelectService;
        this.cdr = cdr;
        this.el = this.elementRef.nativeElement;
        this.selected = false;
        this.active = false;
        this.destroy$ = new Subject();
        this.highlightKeys = [];
        renderer.addClass(elementRef.nativeElement, 'ant-select-dropdown-menu-item');
    }
    /**
     * @return {?}
     */
    clickOption() {
        this.nzSelectService.clickOption(this.nzOption);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.nzSelectService.listOfSelectedValue$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} list
         * @return {?}
         */
        list => {
            this.selected = !this.nzSelectService.userDropdown ? isNotNil(list.find((/**
             * @param {?} v
             * @return {?}
             */
            v => this.nzSelectService.compareWith(v, this.nzOption.nzValue)))) : isNotNil(list.find((/**
             * @param {?} v
             * @return {?}
             */
            v => this.nzSelectService.compareWith(v.value, this.nzOption.nzValue))));
            this.cdr.markForCheck();
        }));
        this.nzSelectService.activatedOption$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} option
         * @return {?}
         */
        option => {
            if (option) {
                this.active = this.nzSelectService.compareWith(option.nzValue, this.nzOption.nzValue);
            }
            else {
                this.active = false;
            }
            this.cdr.markForCheck();
        }));
        this.nzSelectService.searchValue$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            this.highlightKeys = [];
            // tslint:disable-next-line: no-non-null-assertion
            if (value && this.nzOption.nzLabel && (/** @type {?} */ (this.nzOption.nzLabel.toLowerCase())).includes(value.toLowerCase())) {
                // match the search value
                /** @type {?} */
                const index = this.nzOption.nzLabel.toLowerCase().indexOf(value.toLowerCase());
                this.highlightKeys = [
                    this.nzOption.nzLabel.slice(0, index),
                    this.nzOption.nzLabel.slice(index, index + value.length),
                    this.nzOption.nzLabel.slice(index + value.length, this.nzOption.nzLabel.length)
                ];
                this.highlightKeys = [...this.highlightKeys];
            }
            this.cdr.detectChanges();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
CmacsOptionLiComponent.decorators = [
    { type: Component, args: [{
                selector: '[cmacs-option-li]',
                exportAs: 'cmacsOptionLi',
                template: "<ng-container *ngIf=\"!nzOption.nzCustomContent; else nzOption.template\">\r\n  <ng-container *ngIf=\"highlightKeys.length\">\r\n    <span>\r\n      {{highlightKeys[0]}}<span style=\"color: #2a7cff\">{{highlightKeys[1]}}</span>{{highlightKeys[2]}}\r\n    </span>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"!highlightKeys.length\">\r\n    {{nzOption.nzLabel}}\r\n  </ng-container>\r\n  \r\n  <ng-container *ngIf=\"nzOption.divider\">\r\n    <div class=\"cmacs-select-divider\">{{nzOption.divider}}</div>\r\n  </ng-container>\r\n</ng-container>\r\n<ng-container *ngIf=\"nzSelectService.isMultipleOrTags\">\r\n  <i nz-icon type=\"check\" class=\"ant-select-selected-icon\" *ngIf=\"!nzMenuItemSelectedIcon; else nzMenuItemSelectedIcon\"></i>\r\n</ng-container>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.ant-select-dropdown-menu-item-selected]': 'selected && !nzOption.nzDisabled',
                    '[class.ant-select-dropdown-menu-item-disabled]': 'nzOption.nzDisabled',
                    '[class.ant-select-dropdown-menu-item-active]': 'active && !nzOption.nzDisabled',
                    '[class.cmacs-select-dropdown-menu-item-divider]': 'nzOption.divider',
                    '[attr.unselectable]': '"unselectable"',
                    '[style.user-select]': '"none"',
                    '(click)': 'clickOption()',
                    '(mousedown)': '$event.preventDefault()'
                },
                styles: [".cmacs-select-divider{font-family:Roboto,Roboto-Regular;font-size:11px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.5;letter-spacing:normal;color:#fff;background-color:#2a7cff;padding:0 3px;width:-webkit-max-content;width:-moz-max-content;width:max-content;display:-webkit-inline-box;display:inline-flex;right:0;position:absolute;top:0}"]
            }] }
];
/** @nocollapse */
CmacsOptionLiComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: CmacsSelectService },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
CmacsOptionLiComponent.propDecorators = {
    nzOption: [{ type: Input }],
    nzMenuItemSelectedIcon: [{ type: Input }]
};
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
    CmacsOptionLiComponent.prototype.highlightKeys;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtb3B0aW9uLWxpLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3Mtc2VsZWN0L2NtYWNzLW9wdGlvbi1saS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFHTCxTQUFTLEVBQ1QsV0FBVyxFQUNYLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFOUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFvQjVELE1BQU0sT0FBTyxzQkFBc0I7Ozs7Ozs7SUFhakMsWUFDVSxVQUFzQixFQUN2QixlQUFtQyxFQUNsQyxHQUFzQixFQUM5QixRQUFtQjtRQUhYLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdkIsb0JBQWUsR0FBZixlQUFlLENBQW9CO1FBQ2xDLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBZmhDLE9BQUUsR0FBZ0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDaEQsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDekIsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFjakIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxF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QUFhLENBQUMsQ0FBQzthQUM5QztZQUNELElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7WUF6RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRSxlQUFlO2dCQUN6Qix5d0JBQStDO2dCQUMvQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLElBQUksRUFBRTtvQkFDSixnREFBZ0QsRUFBRSxrQ0FBa0M7b0JBQ3BGLGdEQUFnRCxFQUFFLHFCQUFxQjtvQkFDdkUsOENBQThDLEVBQUUsZ0NBQWdDO29CQUNoRixpREFBaUQsRUFBRSxrQkFBa0I7b0JBQ3JFLHFCQUFxQixFQUFFLGdCQUFnQjtvQkFDdkMscUJBQXFCLEVBQUUsUUFBUTtvQkFDL0IsU0FBUyxFQUFFLGVBQWU7b0JBQzFCLGFBQWEsRUFBRSx5QkFBeUI7aUJBQ3pDOzthQUVGOzs7O1lBakNDLFVBQVU7WUFjSCxrQkFBa0I7WUFoQnpCLGlCQUFpQjtZQU1qQixTQUFTOzs7dUJBb0NSLEtBQUs7cUNBQ0wsS0FBSzs7OztJQU5OLG9DQUFnRDs7SUFDaEQsMENBQWlCOztJQUNqQix3Q0FBZTs7SUFDZiwwQ0FBeUI7O0lBQ3pCLCtDQUFtQjs7SUFDbkIsMENBQXdDOztJQUN4Qyx3REFBbUQ7Ozs7O0lBT2pELDRDQUE4Qjs7SUFDOUIsaURBQTBDOzs7OztJQUMxQyxxQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDbWFjc09wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY21hY3Mtb3B0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENtYWNzU2VsZWN0U2VydmljZSB9IGZyb20gJy4vY21hY3Mtc2VsZWN0LnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdbY21hY3Mtb3B0aW9uLWxpXScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc09wdGlvbkxpJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mtb3B0aW9uLWxpLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tc2VsZWN0ZWRdJzogJ3NlbGVjdGVkICYmICFuek9wdGlvbi5uekRpc2FibGVkJyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tZGlzYWJsZWRdJzogJ256T3B0aW9uLm56RGlzYWJsZWQnLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbS1hY3RpdmVdJzogJ2FjdGl2ZSAmJiAhbnpPcHRpb24ubnpEaXNhYmxlZCcsXHJcbiAgICAnW2NsYXNzLmNtYWNzLXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tZGl2aWRlcl0nOiAnbnpPcHRpb24uZGl2aWRlcicsXHJcbiAgICAnW2F0dHIudW5zZWxlY3RhYmxlXSc6ICdcInVuc2VsZWN0YWJsZVwiJyxcclxuICAgICdbc3R5bGUudXNlci1zZWxlY3RdJzogJ1wibm9uZVwiJyxcclxuICAgICcoY2xpY2spJzogJ2NsaWNrT3B0aW9uKCknLFxyXG4gICAgJyhtb3VzZWRvd24pJzogJyRldmVudC5wcmV2ZW50RGVmYXVsdCgpJ1xyXG4gIH0sXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3Mtb3B0aW9uLWxpLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NPcHRpb25MaUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICBzZWxlY3RlZCA9IGZhbHNlO1xyXG4gIGFjdGl2ZSA9IGZhbHNlO1xyXG4gIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuICBoaWdobGlnaHRLZXlzID0gW107XHJcbiAgQElucHV0KCkgbnpPcHRpb246IENtYWNzT3B0aW9uQ29tcG9uZW50O1xyXG4gIEBJbnB1dCgpIG56TWVudUl0ZW1TZWxlY3RlZEljb246IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBjbGlja09wdGlvbigpOiB2b2lkIHtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmNsaWNrT3B0aW9uKHRoaXMubnpPcHRpb24pO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwdWJsaWMgbnpTZWxlY3RTZXJ2aWNlOiBDbWFjc1NlbGVjdFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyXHJcbiAgKSB7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbScpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5saXN0T2ZTZWxlY3RlZFZhbHVlJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKGxpc3QgPT4ge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkID0gIXRoaXMubnpTZWxlY3RTZXJ2aWNlLnVzZXJEcm9wZG93biA/IGlzTm90TmlsKGxpc3QuZmluZCh2ID0+IHRoaXMubnpTZWxlY3RTZXJ2aWNlLmNvbXBhcmVXaXRoKHYsIHRoaXMubnpPcHRpb24ubnpWYWx1ZSkpKSA6IGlzTm90TmlsKGxpc3QuZmluZCh2ID0+IHRoaXMubnpTZWxlY3RTZXJ2aWNlLmNvbXBhcmVXaXRoKHYudmFsdWUsIHRoaXMubnpPcHRpb24ubnpWYWx1ZSkpKTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmFjdGl2YXRlZE9wdGlvbiQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShvcHRpb24gPT4ge1xyXG4gICAgICBpZiAob3B0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0aGlzLm56U2VsZWN0U2VydmljZS5jb21wYXJlV2l0aChvcHRpb24ubnpWYWx1ZSwgdGhpcy5uek9wdGlvbi5uelZhbHVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5zZWFyY2hWYWx1ZSQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSh2YWx1ZSA9PiB7XHJcbiAgICAgIHRoaXMuaGlnaGxpZ2h0S2V5cyA9IFtdO1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgICBpZiAodmFsdWUgJiYgdGhpcy5uek9wdGlvbi5uekxhYmVsICYmIHRoaXMubnpPcHRpb24ubnpMYWJlbC50b0xvd2VyQ2FzZSgpIS5pbmNsdWRlcyh2YWx1ZS50b0xvd2VyQ2FzZSgpKSkge1xyXG4gICAgICAgIC8vIG1hdGNoIHRoZSBzZWFyY2ggdmFsdWVcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMubnpPcHRpb24ubnpMYWJlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YodmFsdWUudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgdGhpcy5oaWdobGlnaHRLZXlzID0gW1xyXG4gICAgICAgICAgdGhpcy5uek9wdGlvbi5uekxhYmVsLnNsaWNlKDAsIGluZGV4KSxcclxuICAgICAgICAgIHRoaXMubnpPcHRpb24ubnpMYWJlbC5zbGljZShpbmRleCwgaW5kZXggKyB2YWx1ZS5sZW5ndGgpLFxyXG4gICAgICAgICAgdGhpcy5uek9wdGlvbi5uekxhYmVsLnNsaWNlKGluZGV4ICsgdmFsdWUubGVuZ3RoLCB0aGlzLm56T3B0aW9uLm56TGFiZWwubGVuZ3RoKVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdGhpcy5oaWdobGlnaHRLZXlzID0gWy4uLnRoaXMuaGlnaGxpZ2h0S2V5c107XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=