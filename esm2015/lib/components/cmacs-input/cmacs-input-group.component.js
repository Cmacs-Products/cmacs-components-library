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
     * @param {?} value
     * @return {?}
     */
    set prefixIcon(value) {
        this.prefixicon = value;
    }
    /**
     * @return {?}
     */
    get prefixIcon() {
        return this.prefixicon;
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
    suffixIcon: [{ type: Input }],
    addOnBefore: [{ type: Input }],
    addOnAfter: [{ type: Input }],
    prefix: [{ type: Input }],
    suffix: [{ type: Input }],
    search: [{ type: Input }],
    compact: [{ type: Input }],
    size: [{ type: Input }],
    prefixIcon: [{ type: Input }]
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
    /**
     * @type {?}
     * @private
     */
    CmacsInputGroupComponent.prototype.prefixicon;
    /** @type {?} */
    CmacsInputGroupComponent.prototype.addOnBeforeIcon;
    /** @type {?} */
    CmacsInputGroupComponent.prototype.addOnAfterIcon;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtaW5wdXQtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1pbnB1dC9jbWFjcy1pbnB1dC1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsS0FBSyxFQUNMLFNBQVMsRUFFVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBOEIsTUFBTSxvQkFBb0IsQ0FBQztBQUM5RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQTRCOUQsTUFBTSxPQUFPLHdCQUF3QjtJQTFCckM7O1FBNkJVLFVBQUssR0FBa0IsU0FBUyxDQUFDO1FBU2hCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixZQUFPLEdBQUcsS0FBSyxDQUFDO0lBb0YzQyxDQUFDOzs7OztJQWxGQyxJQUFhLElBQUksQ0FBQyxLQUFvQjtRQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7O0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRUQsSUFBYSxVQUFVLENBQUMsS0FBa0I7UUFDeEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1Qs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QUFFLGNBQWM7b0JBQ3BELDZCQUE2QixFQUFFLGVBQWU7b0JBQzlDLDRCQUE0QixFQUFFLGNBQWM7b0JBQzVDLG9DQUFvQyxFQUFFLGNBQWM7b0JBQ3BELG9DQUFvQyxFQUFFLHFCQUFxQjtpQkFDNUQ7YUFDRjs7O3FDQUVFLGVBQWUsU0FBQyxtQkFBbUI7OEJBSW5DLEtBQUs7NkJBQ0wsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLEtBQUs7eUJBQ0wsS0FBSztxQkFDTCxLQUFLO3FCQUNMLEtBQUs7cUJBQ0wsS0FBSztzQkFDTCxLQUFLO21CQUVMLEtBQUs7eUJBU0wsS0FBSzs7QUFabUI7SUFBZixZQUFZLEVBQUU7O3dEQUFnQjtBQUNmO0lBQWYsWUFBWSxFQUFFOzt5REFBaUI7OztJQVp6QywwREFBNkY7Ozs7O0lBRTdGLHlDQUF5Qzs7Ozs7SUFDekMsOENBQWdDOztJQUNoQyxtREFBc0M7O0lBQ3RDLGtEQUFxQzs7SUFDckMsOENBQWlDOztJQUNqQywrQ0FBaUQ7O0lBQ2pELDhDQUFnRDs7SUFDaEQsMENBQTRDOztJQUM1QywwQ0FBNEM7O0lBQzVDLDBDQUF3Qzs7SUFDeEMsMkNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgSW5wdXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgTmdDbGFzc1R5cGUsIE56U2l6ZUxEU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBDbWFjc0lucHV0RGlyZWN0aXZlIH0gZnJvbSAnLi9jbWFjcy1pbnB1dC5kaXJlY3RpdmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1pbnB1dC1ncm91cCcsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0lucHV0R3JvdXAnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWlucHV0LWdyb3VwLmNvbXBvbmVudC5odG1sJyxcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB1c2UtaG9zdC1wcm9wZXJ0eS1kZWNvcmF0b3JcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ncm91cC1jb21wYWN0XSc6ICdjb21wYWN0JyxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LXNlYXJjaC1lbnRlci1idXR0b25dJzogJ3NlYXJjaCcsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1zZWFyY2hdJzogJ3NlYXJjaCcsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1zZWFyY2gtc21dJzogJ2lzU21hbGxTZWFyY2gnLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlcl0nOiAnaXNBZmZpeFdyYXBwZXInLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtZ3JvdXAtd3JhcHBlcl0nOiAnaXNBZGRPbicsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ncm91cF0nOiAnaXNHcm91cCcsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ncm91cC1sZ10nOiAnaXNMYXJnZUdyb3VwJyxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLXdyYXBwZXItbGddJzogJ2lzTGFyZ2VHcm91cFdyYXBwZXInLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlci1sZ10nOiAnaXNMYXJnZUFmZml4JyxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LXNlYXJjaC1sZ10nOiAnaXNMYXJnZVNlYXJjaCcsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ncm91cC1zbV0nOiAnaXNTbWFsbEdyb3VwJyxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWFmZml4LXdyYXBwZXItc21dJzogJ2lzU21hbGxBZmZpeCcsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ncm91cC13cmFwcGVyLXNtXSc6ICdpc1NtYWxsR3JvdXBXcmFwcGVyJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzSW5wdXRHcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oQ21hY3NJbnB1dERpcmVjdGl2ZSkgbGlzdE9mTnpJbnB1dERpcmVjdGl2ZTogUXVlcnlMaXN0PENtYWNzSW5wdXREaXJlY3RpdmU+O1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHZhcmlhYmxlLW5hbWVcclxuICBwcml2YXRlIF9zaXplOiBOelNpemVMRFNUeXBlID0gJ2RlZmF1bHQnO1xyXG4gIHByaXZhdGUgcHJlZml4aWNvbjogTmdDbGFzc1R5cGU7XHJcbiAgQElucHV0KCkgYWRkT25CZWZvcmVJY29uOiBOZ0NsYXNzVHlwZTtcclxuICBASW5wdXQoKSBhZGRPbkFmdGVySWNvbjogTmdDbGFzc1R5cGU7XHJcbiAgQElucHV0KCkgc3VmZml4SWNvbjogTmdDbGFzc1R5cGU7XHJcbiAgQElucHV0KCkgYWRkT25CZWZvcmU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIGFkZE9uQWZ0ZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIHByZWZpeDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgc3VmZml4OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2VhcmNoID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNvbXBhY3QgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgc2V0IHNpemUodmFsdWU6IE56U2l6ZUxEU1R5cGUpIHtcclxuICAgIHRoaXMuX3NpemUgPSB2YWx1ZTtcclxuICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5JbnB1dFNpemUoKTtcclxuICB9XHJcblxyXG4gIGdldCBzaXplKCk6IE56U2l6ZUxEU1R5cGUge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBzZXQgcHJlZml4SWNvbih2YWx1ZTogTmdDbGFzc1R5cGUpIHtcclxuICAgIHRoaXMucHJlZml4aWNvbiA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHByZWZpeEljb24oKTogTmdDbGFzc1R5cGUge1xyXG4gICAgcmV0dXJuIHRoaXMucHJlZml4aWNvbjtcclxuICB9XHJcblxyXG4gIGdldCBpc0xhcmdlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2l6ZSA9PT0gJ2xhcmdlJztcclxuICB9XHJcblxyXG4gIGdldCBpc1NtYWxsKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2l6ZSA9PT0gJ3NtYWxsJztcclxuICB9XHJcblxyXG4gIGdldCBpc0FmZml4KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhKHRoaXMuc3VmZml4IHx8IHRoaXMucHJlZml4IHx8IHRoaXMucHJlZml4SWNvbiB8fCB0aGlzLnN1ZmZpeEljb24pO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzQWRkT24oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gISEodGhpcy5hZGRPbkFmdGVyIHx8IHRoaXMuYWRkT25CZWZvcmUgfHwgdGhpcy5hZGRPbkFmdGVySWNvbiB8fCB0aGlzLmFkZE9uQmVmb3JlSWNvbik7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNBZmZpeFdyYXBwZXIoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0FmZml4ICYmICF0aGlzLmlzQWRkT247XHJcbiAgfVxyXG5cclxuICBnZXQgaXNHcm91cCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhdGhpcy5pc0FmZml4ICYmICF0aGlzLmlzQWRkT247XHJcbiAgfVxyXG5cclxuICBnZXQgaXNMYXJnZUdyb3VwKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNHcm91cCAmJiB0aGlzLmlzTGFyZ2U7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNMYXJnZUdyb3VwV3JhcHBlcigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzQWRkT24gJiYgdGhpcy5pc0xhcmdlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzTGFyZ2VBZmZpeCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzQWZmaXhXcmFwcGVyICYmIHRoaXMuaXNMYXJnZTtcclxuICB9XHJcblxyXG4gIGdldCBpc0xhcmdlU2VhcmNoKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoICYmIHRoaXMuaXNMYXJnZTtcclxuICB9XHJcblxyXG4gIGdldCBpc1NtYWxsR3JvdXAoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0dyb3VwICYmIHRoaXMuaXNTbWFsbDtcclxuICB9XHJcblxyXG4gIGdldCBpc1NtYWxsQWZmaXgoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0FmZml4V3JhcHBlciAmJiB0aGlzLmlzU21hbGw7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNTbWFsbEdyb3VwV3JhcHBlcigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzQWRkT24gJiYgdGhpcy5pc1NtYWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzU21hbGxTZWFyY2goKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zZWFyY2ggJiYgdGhpcy5pc1NtYWxsO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ2hpbGRyZW5JbnB1dFNpemUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5saXN0T2ZOeklucHV0RGlyZWN0aXZlKSB7XHJcbiAgICAgIHRoaXMubGlzdE9mTnpJbnB1dERpcmVjdGl2ZS5mb3JFYWNoKGl0ZW0gPT4gKGl0ZW0uc2l6ZSA9IHRoaXMuc2l6ZSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVDaGlsZHJlbklucHV0U2l6ZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=