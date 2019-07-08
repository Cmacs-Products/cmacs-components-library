/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ContentChildren, Input, QueryList, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core';
import { CmacsInputDirective } from './cmacs-input.directive';
export class CmacsInputGroupComponent {
    constructor() {
        // tslint:disable-next-line: variable-name
        this._size = 'default';
        this.search = false;
        this.compact = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set size(value) {
        this._size = value;
        this.updateChildrenInputSize();
    }
    /**
     * @return {?}
     */
    get size() {
        return this._size;
    }
    /**
     * @return {?}
     */
    get isLarge() {
        return this.size === 'large';
    }
    /**
     * @return {?}
     */
    get isSmall() {
        return this.size === 'small';
    }
    /**
     * @return {?}
     */
    get isAffix() {
        return !!(this.suffix || this.prefix || this.prefixIcon || this.suffixIcon);
    }
    /**
     * @return {?}
     */
    get isAddOn() {
        return !!(this.addOnAfter || this.addOnBefore || this.addOnAfterIcon || this.addOnBeforeIcon);
    }
    /**
     * @return {?}
     */
    get isAffixWrapper() {
        return this.isAffix && !this.isAddOn;
    }
    /**
     * @return {?}
     */
    get isGroup() {
        return !this.isAffix && !this.isAddOn;
    }
    /**
     * @return {?}
     */
    get isLargeGroup() {
        return this.isGroup && this.isLarge;
    }
    /**
     * @return {?}
     */
    get isLargeGroupWrapper() {
        return this.isAddOn && this.isLarge;
    }
    /**
     * @return {?}
     */
    get isLargeAffix() {
        return this.isAffixWrapper && this.isLarge;
    }
    /**
     * @return {?}
     */
    get isLargeSearch() {
        return this.search && this.isLarge;
    }
    /**
     * @return {?}
     */
    get isSmallGroup() {
        return this.isGroup && this.isSmall;
    }
    /**
     * @return {?}
     */
    get isSmallAffix() {
        return this.isAffixWrapper && this.isSmall;
    }
    /**
     * @return {?}
     */
    get isSmallGroupWrapper() {
        return this.isAddOn && this.isSmall;
    }
    /**
     * @return {?}
     */
    get isSmallSearch() {
        return this.search && this.isSmall;
    }
    /**
     * @return {?}
     */
    updateChildrenInputSize() {
        if (this.listOfNzInputDirective) {
            this.listOfNzInputDirective.forEach((/**
             * @param {?} item
             * @return {?}
             */
            item => (item.size = this.size)));
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.updateChildrenInputSize();
    }
}
CmacsInputGroupComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line: component-selector
                selector: 'cmacs-input-group',
                exportAs: 'cmacsInputGroup',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "<span class=\"ant-input-wrapper ant-input-group\" *ngIf=\"isAddOn\">\r\n  <span class=\"ant-input-group-addon\" *ngIf=\"addOnBefore || addOnBeforeIcon\">\r\n    <i nz-icon [type]=\"addOnBeforeIcon\" *ngIf=\"addOnBeforeIcon\"></i>\r\n    <ng-container *cmacsStringTemplateOutlet=\"addOnBefore\">{{ addOnBefore }}</ng-container>\r\n  </span>\r\n  <ng-template [ngIf]=\"!isAffix\" *ngTemplateOutlet=\"contentTemplate\"></ng-template>\r\n  <span class=\"ant-input-affix-wrapper\" [class.ant-input-affix-wrapper-sm]=\"isSmall\" [class.ant-input-affix-wrapper-lg]=\"isLarge\" *ngIf=\"isAffix\">\r\n    <ng-template *ngTemplateOutlet=\"affixTemplate\"></ng-template>\r\n  </span>\r\n  <span class=\"ant-input-group-addon\" *ngIf=\"addOnAfter || addOnAfterIcon\">\r\n    <i nz-icon [type]=\"addOnAfterIcon\" *ngIf=\"addOnAfterIcon\"></i>\r\n    <ng-container *cmacsStringTemplateOutlet=\"addOnAfter\">{{ addOnAfter }}</ng-container>\r\n  </span>\r\n</span>\r\n<ng-container *ngIf=\"isAffix && !isAddOn\">\r\n  <ng-template *ngTemplateOutlet=\"affixTemplate\"></ng-template>\r\n</ng-container>\r\n<ng-template #affixTemplate>\r\n  <span class=\"ant-input-prefix\" *ngIf=\"prefix || prefixIcon\">\r\n    <!-- TODO: should have a class to set its color, cc: antd-->\r\n    <i nz-icon [type]=\"prefixIcon\" *ngIf=\"prefixIcon\" style=\"color: rgba(0, 0, 0, 0.25)\"></i>\r\n    <ng-container *cmacsStringTemplateOutlet=\"prefix\">{{ prefix }}</ng-container>\r\n  </span>\r\n  <ng-template *ngTemplateOutlet=\"contentTemplate\"></ng-template>\r\n  <span class=\"ant-input-suffix\" *ngIf=\"suffix || suffixIcon\">\r\n    <i nz-icon [type]=\"suffixIcon\" *ngIf=\"suffixIcon\"></i>\r\n    <ng-container *cmacsStringTemplateOutlet=\"suffix\">{{ suffix }}</ng-container>\r\n  </span>\r\n</ng-template>\r\n<ng-template [ngIf]=\"isGroup\" *ngTemplateOutlet=\"contentTemplate\"></ng-template>\r\n<ng-template #contentTemplate>\r\n  <ng-content></ng-content>\r\n</ng-template>",
                // tslint:disable-next-line: use-host-property-decorator
                host: {
                    '[class.ant-input-group-compact]': 'compact',
                    '[class.ant-input-search-enter-button]': 'search',
                    '[class.ant-input-search]': 'search',
                    '[class.ant-input-search-sm]': 'isSmallSearch',
                    '[class.ant-input-affix-wrapper]': 'isAffixWrapper',
                    '[class.ant-input-group-wrapper]': 'isAddOn',
                    '[class.ant-input-group]': 'isGroup',
                    '[class.ant-input-group-lg]': 'isLargeGroup',
                    '[class.ant-input-group-wrapper-lg]': 'isLargeGroupWrapper',
                    '[class.ant-input-affix-wrapper-lg]': 'isLargeAffix',
                    '[class.ant-input-search-lg]': 'isLargeSearch',
                    '[class.ant-input-group-sm]': 'isSmallGroup',
                    '[class.ant-input-affix-wrapper-sm]': 'isSmallAffix',
                    '[class.ant-input-group-wrapper-sm]': 'isSmallGroupWrapper'
                }
            }] }
];
CmacsInputGroupComponent.propDecorators = {
    listOfNzInputDirective: [{ type: ContentChildren, args: [CmacsInputDirective,] }],
    addOnBeforeIcon: [{ type: Input }],
    addOnAfterIcon: [{ type: Input }],
    prefixIcon: [{ type: Input }],
    suffixIcon: [{ type: Input }],
    addOnBefore: [{ type: Input }],
    addOnAfter: [{ type: Input }],
    prefix: [{ type: Input }],
    suffix: [{ type: Input }],
    search: [{ type: Input }],
    compact: [{ type: Input }],
    size: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsInputGroupComponent.prototype, "search", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsInputGroupComponent.prototype, "compact", void 0);
if (false) {
    /** @type {?} */
    CmacsInputGroupComponent.prototype.listOfNzInputDirective;
    /**
     * @type {?}
     * @private
     */
    CmacsInputGroupComponent.prototype._size;
    /** @type {?} */
    CmacsInputGroupComponent.prototype.addOnBeforeIcon;
    /** @type {?} */
    CmacsInputGroupComponent.prototype.addOnAfterIcon;
    /** @type {?} */
    CmacsInputGroupComponent.prototype.prefixIcon;
    /** @type {?} */
    CmacsInputGroupComponent.prototype.suffixIcon;
    /** @type {?} */
    CmacsInputGroupComponent.prototype.addOnBefore;
    /** @type {?} */
    CmacsInputGroupComponent.prototype.addOnAfter;
    /** @type {?} */
    CmacsInputGroupComponent.prototype.prefix;
    /** @type {?} */
    CmacsInputGroupComponent.prototype.suffix;
    /** @type {?} */
    CmacsInputGroupComponent.prototype.search;
    /** @type {?} */
    CmacsInputGroupComponent.prototype.compact;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtaW5wdXQtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1pbnB1dC9jbWFjcy1pbnB1dC1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsS0FBSyxFQUNMLFNBQVMsRUFFVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBOEIsTUFBTSxvQkFBb0IsQ0FBQztBQUM5RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQTRCOUQsTUFBTSxPQUFPLHdCQUF3QjtJQTFCckM7O1FBNkJVLFVBQUssR0FBa0IsU0FBUyxDQUFDO1FBU2hCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixZQUFPLEdBQUcsS0FBSyxDQUFDO0lBNEUzQyxDQUFDOzs7OztJQTFFQyxJQUFhLElBQUksQ0FBQyxLQUFvQjtRQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7O0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDO0lBQy9CLENBQUM7Ozs7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDO0lBQy9CLENBQUM7Ozs7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENB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LG1CQUFtQjs4QkFHbkMsS0FBSzs2QkFDTCxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLO3lCQUNMLEtBQUs7cUJBQ0wsS0FBSztxQkFDTCxLQUFLO3FCQUNMLEtBQUs7c0JBQ0wsS0FBSzttQkFFTCxLQUFLOztBQUhtQjtJQUFmLFlBQVksRUFBRTs7d0RBQWdCO0FBQ2Y7SUFBZixZQUFZLEVBQUU7O3lEQUFpQjs7O0lBWnpDLDBEQUE2Rjs7Ozs7SUFFN0YseUNBQXlDOztJQUN6QyxtREFBc0M7O0lBQ3RDLGtEQUFxQzs7SUFDckMsOENBQWlDOztJQUNqQyw4Q0FBaUM7O0lBQ2pDLCtDQUFpRDs7SUFDakQsOENBQWdEOztJQUNoRCwwQ0FBNEM7O0lBQzVDLDBDQUE0Qzs7SUFDNUMsMENBQXdDOztJQUN4QywyQ0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBJbnB1dCxcclxuICBRdWVyeUxpc3QsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBOZ0NsYXNzVHlwZSwgTnpTaXplTERTVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IENtYWNzSW5wdXREaXJlY3RpdmUgfSBmcm9tICcuL2NtYWNzLWlucHV0LmRpcmVjdGl2ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2NtYWNzLWlucHV0LWdyb3VwJyxcclxuICBleHBvcnRBczogJ2NtYWNzSW5wdXRHcm91cCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtaW5wdXQtZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHVzZS1ob3N0LXByb3BlcnR5LWRlY29yYXRvclxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLWNvbXBhY3RdJzogJ2NvbXBhY3QnLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtc2VhcmNoLWVudGVyLWJ1dHRvbl0nOiAnc2VhcmNoJyxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LXNlYXJjaF0nOiAnc2VhcmNoJyxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LXNlYXJjaC1zbV0nOiAnaXNTbWFsbFNlYXJjaCcsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyXSc6ICdpc0FmZml4V3JhcHBlcicsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ncm91cC13cmFwcGVyXSc6ICdpc0FkZE9uJyxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwXSc6ICdpc0dyb3VwJyxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLWxnXSc6ICdpc0xhcmdlR3JvdXAnLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtZ3JvdXAtd3JhcHBlci1sZ10nOiAnaXNMYXJnZUdyb3VwV3JhcHBlcicsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyLWxnXSc6ICdpc0xhcmdlQWZmaXgnLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtc2VhcmNoLWxnXSc6ICdpc0xhcmdlU2VhcmNoJyxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLXNtXSc6ICdpc1NtYWxsR3JvdXAnLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlci1zbV0nOiAnaXNTbWFsbEFmZml4JyxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLXdyYXBwZXItc21dJzogJ2lzU21hbGxHcm91cFdyYXBwZXInXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NJbnB1dEdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihDbWFjc0lucHV0RGlyZWN0aXZlKSBsaXN0T2ZOeklucHV0RGlyZWN0aXZlOiBRdWVyeUxpc3Q8Q21hY3NJbnB1dERpcmVjdGl2ZT47XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdmFyaWFibGUtbmFtZVxyXG4gIHByaXZhdGUgX3NpemU6IE56U2l6ZUxEU1R5cGUgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgYWRkT25CZWZvcmVJY29uOiBOZ0NsYXNzVHlwZTtcclxuICBASW5wdXQoKSBhZGRPbkFmdGVySWNvbjogTmdDbGFzc1R5cGU7XHJcbiAgQElucHV0KCkgcHJlZml4SWNvbjogTmdDbGFzc1R5cGU7XHJcbiAgQElucHV0KCkgc3VmZml4SWNvbjogTmdDbGFzc1R5cGU7XHJcbiAgQElucHV0KCkgYWRkT25CZWZvcmU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIGFkZE9uQWZ0ZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIHByZWZpeDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgc3VmZml4OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2VhcmNoID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNvbXBhY3QgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgc2V0IHNpemUodmFsdWU6IE56U2l6ZUxEU1R5cGUpIHtcclxuICAgIHRoaXMuX3NpemUgPSB2YWx1ZTtcclxuICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5JbnB1dFNpemUoKTtcclxuICB9XHJcblxyXG4gIGdldCBzaXplKCk6IE56U2l6ZUxEU1R5cGUge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNMYXJnZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnNpemUgPT09ICdsYXJnZSc7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNTbWFsbCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnNpemUgPT09ICdzbWFsbCc7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNBZmZpeCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhISh0aGlzLnN1ZmZpeCB8fCB0aGlzLnByZWZpeCB8fCB0aGlzLnByZWZpeEljb24gfHwgdGhpcy5zdWZmaXhJY29uKTtcclxuICB9XHJcblxyXG4gIGdldCBpc0FkZE9uKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhKHRoaXMuYWRkT25BZnRlciB8fCB0aGlzLmFkZE9uQmVmb3JlIHx8IHRoaXMuYWRkT25BZnRlckljb24gfHwgdGhpcy5hZGRPbkJlZm9yZUljb24pO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzQWZmaXhXcmFwcGVyKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNBZmZpeCAmJiAhdGhpcy5pc0FkZE9uO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzR3JvdXAoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIXRoaXMuaXNBZmZpeCAmJiAhdGhpcy5pc0FkZE9uO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzTGFyZ2VHcm91cCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzR3JvdXAgJiYgdGhpcy5pc0xhcmdlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzTGFyZ2VHcm91cFdyYXBwZXIoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0FkZE9uICYmIHRoaXMuaXNMYXJnZTtcclxuICB9XHJcblxyXG4gIGdldCBpc0xhcmdlQWZmaXgoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0FmZml4V3JhcHBlciAmJiB0aGlzLmlzTGFyZ2U7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNMYXJnZVNlYXJjaCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnNlYXJjaCAmJiB0aGlzLmlzTGFyZ2U7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNTbWFsbEdyb3VwKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNHcm91cCAmJiB0aGlzLmlzU21hbGw7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNTbWFsbEFmZml4KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNBZmZpeFdyYXBwZXIgJiYgdGhpcy5pc1NtYWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzU21hbGxHcm91cFdyYXBwZXIoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0FkZE9uICYmIHRoaXMuaXNTbWFsbDtcclxuICB9XHJcblxyXG4gIGdldCBpc1NtYWxsU2VhcmNoKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoICYmIHRoaXMuaXNTbWFsbDtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNoaWxkcmVuSW5wdXRTaXplKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubGlzdE9mTnpJbnB1dERpcmVjdGl2ZSkge1xyXG4gICAgICB0aGlzLmxpc3RPZk56SW5wdXREaXJlY3RpdmUuZm9yRWFjaChpdGVtID0+IChpdGVtLnNpemUgPSB0aGlzLnNpemUpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5JbnB1dFNpemUoKTtcclxuICB9XHJcbn1cclxuIl19