/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { InputBoolean, NzUpdateHostClassService } from 'ng-zorro-antd/core';
export class CmacsListComponent {
    // #endregion
    /**
     * @param {?} el
     * @param {?} updateHostClassService
     */
    constructor(el, updateHostClassService) {
        this.el = el;
        this.updateHostClassService = updateHostClassService;
        this.bordered = false;
        this.itemLayout = 'horizontal';
        this.loading = false;
        this.classicGrid = false;
        this.size = 'default';
        this.split = true;
        // #endregion
        // #region styles
        this.prefixCls = 'ant-list';
    }
    /**
     * @private
     * @return {?}
     */
    _setClassMap() {
        /** @type {?} */
        const classMap = {
            [this.prefixCls]: true,
            [`${this.prefixCls}-vertical`]: this.itemLayout === 'vertical',
            [`${this.prefixCls}-lg`]: this.size === 'large',
            [`${this.prefixCls}-sm`]: this.size === 'small',
            [`${this.prefixCls}-split`]: this.split,
            [`${this.prefixCls}-bordered`]: this.bordered,
            [`${this.prefixCls}-loading`]: this.loading,
            [`${this.prefixCls}-grid`]: this.grid,
            [`${this.prefixCls}-something-after-last-item`]: !!(this.loadMore || this.pagination || this.footer)
        };
        this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._setClassMap();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this._setClassMap();
    }
}
CmacsListComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmacs-list',
                exportAs: 'cmacsList',
                template: "<ng-template #itemsTpl>\r\n  <ng-container *ngFor=\"let item of dataSource; let index = index\">\r\n    <ng-template [ngTemplateOutlet]=\"renderItem\" [ngTemplateOutletContext]=\"{ $implicit: item, index: index }\"></ng-template>\r\n  </ng-container>\r\n</ng-template>\r\n<div *ngIf=\"header\" class=\"ant-list-header\">\r\n  <ng-container *cmacsStringTemplateOutlet=\"header\">{{ header }}</ng-container>\r\n</div>\r\n<nz-spin [nzSpinning]=\"loading\">\r\n  <ng-container *ngIf=\"dataSource\">\r\n    <div *ngIf=\"loading && dataSource.length === 0\" [style.min-height.px]=\"53\"></div>\r\n    <div *ngIf=\"grid; else itemsTpl\" nz-row [nzGutter]=\"grid.gutter\">\r\n      <div *ngIf=\"!classicGrid\">\r\n        <div nz-col [nzSpan]=\"grid.span\" [nzXs]=\"grid.xs\" [nzSm]=\"grid.sm\" [nzMd]=\"grid.md\" [nzLg]=\"grid.lg\" [nzXl]=\"grid.xl\"\r\n             [nzXXl]=\"grid.xxl\" *ngFor=\"let item of dataSource; let index = index\">\r\n          <ng-template [ngTemplateOutlet]=\"renderItem\" [ngTemplateOutletContext]=\"{ $implicit: item, index: index }\"></ng-template>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"classicGrid\">\r\n        <div class=\"cmacs-classic-grid\"\r\n             [style.marginRight.px]=\"grid.gutter\"\r\n             *ngFor=\"let item of dataSource; let index = index\">\r\n          <ng-template [ngTemplateOutlet]=\"renderItem\" [ngTemplateOutletContext]=\"{ $implicit: item, index: index }\"></ng-template>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"!loading && dataSource.length === 0\" class=\"ant-list-empty-text\">\r\n      <nz-embed-empty [nzComponentName]=\"'list'\" [specificContent]=\"noResult\"></nz-embed-empty>\r\n    </div>\r\n  </ng-container>\r\n  <ng-content></ng-content>\r\n</nz-spin>\r\n<div *ngIf=\"footer\" class=\"ant-list-footer\">\r\n  <ng-container *cmacsStringTemplateOutlet=\"footer\">{{ footer }}</ng-container>\r\n</div>\r\n<ng-template [ngTemplateOutlet]=\"loadMore\"></ng-template>\r\n<div *ngIf=\"pagination\" class=\"ant-list-pagination\">\r\n  <ng-template [ngTemplateOutlet]=\"pagination\"></ng-template>\r\n</div>\r\n",
                providers: [NzUpdateHostClassService],
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".cmacs-classic-grid{display:inline-block}", `
      cmacs-list,
      cmacs-list nz-spin {
        display: block;
      }
    `]
            }] }
];
/** @nocollapse */
CmacsListComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NzUpdateHostClassService }
];
CmacsListComponent.propDecorators = {
    dataSource: [{ type: Input }],
    bordered: [{ type: Input }],
    grid: [{ type: Input }],
    header: [{ type: Input }],
    footer: [{ type: Input }],
    itemLayout: [{ type: Input }],
    renderItem: [{ type: Input }],
    loading: [{ type: Input }],
    classicGrid: [{ type: Input }],
    loadMore: [{ type: Input }],
    pagination: [{ type: Input }],
    size: [{ type: Input }],
    split: [{ type: Input }],
    noResult: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsListComponent.prototype, "bordered", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsListComponent.prototype, "loading", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsListComponent.prototype, "classicGrid", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsListComponent.prototype, "split", void 0);
if (false) {
    /** @type {?} */
    CmacsListComponent.prototype.dataSource;
    /** @type {?} */
    CmacsListComponent.prototype.bordered;
    /** @type {?} */
    CmacsListComponent.prototype.grid;
    /** @type {?} */
    CmacsListComponent.prototype.header;
    /** @type {?} */
    CmacsListComponent.prototype.footer;
    /** @type {?} */
    CmacsListComponent.prototype.itemLayout;
    /** @type {?} */
    CmacsListComponent.prototype.renderItem;
    /** @type {?} */
    CmacsListComponent.prototype.loading;
    /** @type {?} */
    CmacsListComponent.prototype.classicGrid;
    /** @type {?} */
    CmacsListComponent.prototype.loadMore;
    /** @type {?} */
    CmacsListComponent.prototype.pagination;
    /** @type {?} */
    CmacsListComponent.prototype.size;
    /** @type {?} */
    CmacsListComponent.prototype.split;
    /** @type {?} */
    CmacsListComponent.prototype.noResult;
    /**
     * @type {?}
     * @private
     */
    CmacsListComponent.prototype.prefixCls;
    /**
     * @type {?}
     * @private
     */
    CmacsListComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    CmacsListComponent.prototype.updateHostClassService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLWxpc3QvY21hY3MtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUdMLFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBaUIsd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQXNCM0YsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7O0lBc0Q3QixZQUFvQixFQUFjLEVBQVUsc0JBQWdEO1FBQXhFLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQTBCO1FBakRuRSxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBUWpDLGVBQVUsR0FBOEIsWUFBWSxDQUFDO1FBSXJDLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFaEIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFNcEMsU0FBSSxHQUFrQixTQUFTLENBQUM7UUFFaEIsVUFBSyxHQUFHLElBQUksQ0FBQzs7O1FBUTlCLGNBQVMsR0FBRyxVQUFVLENBQUM7SUFtQmdFLENBQUM7Ozs7O0lBakJ4RixZQUFZOztjQUNaLFFBQVEsR0FBRztZQUNmLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUk7WUFDdEIsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLFdBQVcsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLEtBQUssVUFBVTtZQUM5RCxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPO1lBQy9DLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxLQUFLLE9BQU87WUFDL0MsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLFFBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ3ZDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUM3QyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsVUFBVSxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDM0MsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ3JDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyw0QkFBNEIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3JHO1FBQ0QsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMvRSxDQUFDOzs7O0lBTUQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7WUFoRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsV0FBVztnQkFDckIsd2xFQUEwQztnQkFDMUMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7Z0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7Z0JBRTFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtzRUFFN0M7Ozs7O0tBS0M7YUFFSjs7OztZQTdCQyxVQUFVO1lBUTBCLHdCQUF3Qjs7O3lCQXlCM0QsS0FBSzt1QkFFTCxLQUFLO21CQUVMLEtBQUs7cUJBRUwsS0FBSztxQkFFTCxLQUFLO3lCQUVMLEtBQUs7eUJBRUwsS0FBSztzQkFFTCxLQUFLOzBCQUVMLEtBQUs7dUJBRUwsS0FBSzt5QkFFTCxLQUFLO21CQUVMLEtBQUs7b0JBRUwsS0FBSzt1QkFFTCxLQUFLOztBQXhCbUI7SUFBZixZQUFZLEVBQUU7O29EQUFrQjtBQVlqQjtJQUFmLFlBQVksRUFBRTs7bURBQWlCO0FBRWhCO0lBQWYsWUFBWSxFQUFFOzt1REFBcUI7QUFRcEI7SUFBZixZQUFZLEVBQUU7O2lEQUFjOzs7SUF4QnRDLHdDQUEyQjs7SUFFM0Isc0NBQTBDOztJQUUxQyxrQ0FBNkI7O0lBRTdCLG9DQUE0Qzs7SUFFNUMsb0NBQTRDOztJQUU1Qyx3Q0FBOEQ7O0lBRTlELHdDQUF1Qzs7SUFFdkMscUNBQXlDOztJQUV6Qyx5Q0FBNkM7O0lBRTdDLHNDQUFxQzs7SUFFckMsd0NBQXVDOztJQUV2QyxrQ0FBeUM7O0lBRXpDLG1DQUFzQzs7SUFFdEMsc0NBQThDOzs7OztJQU05Qyx1Q0FBK0I7Ozs7O0lBbUJuQixnQ0FBc0I7Ozs7O0lBQUUsb0RBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25Jbml0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIE56U2l6ZUxEU1R5cGUsIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDbWFjc0xpc3RHcmlkIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1saXN0JyxcclxuICBleHBvcnRBczogJ2NtYWNzTGlzdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtbGlzdC5jb21wb25lbnQuY3NzJ10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgY21hY3MtbGlzdCxcclxuICAgICAgY21hY3MtbGlzdCBuei1zcGluIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICAvLyAjcmVnaW9uIGZpZWxkc1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBASW5wdXQoKSBkYXRhU291cmNlOiBhbnlbXTtcclxuXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJvcmRlcmVkID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIGdyaWQ6IENtYWNzTGlzdEdyaWQ7XHJcblxyXG4gIEBJbnB1dCgpIGhlYWRlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIEBJbnB1dCgpIGZvb3Rlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIEBJbnB1dCgpIGl0ZW1MYXlvdXQ6ICd2ZXJ0aWNhbCcgfCAnaG9yaXpvbnRhbCcgPSAnaG9yaXpvbnRhbCc7XHJcblxyXG4gIEBJbnB1dCgpIHJlbmRlckl0ZW06IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbG9hZGluZyA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgY2xhc3NpY0dyaWQgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgbG9hZE1vcmU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBASW5wdXQoKSBwYWdpbmF0aW9uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgQElucHV0KCkgc2l6ZTogTnpTaXplTERTVHlwZSA9ICdkZWZhdWx0JztcclxuXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNwbGl0ID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KCkgbm9SZXN1bHQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIC8vICNyZWdpb24gc3R5bGVzXHJcblxyXG4gIHByaXZhdGUgcHJlZml4Q2xzID0gJ2FudC1saXN0JztcclxuXHJcbiAgcHJpdmF0ZSBfc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcclxuICAgICAgW3RoaXMucHJlZml4Q2xzXTogdHJ1ZSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS12ZXJ0aWNhbGBdOiB0aGlzLml0ZW1MYXlvdXQgPT09ICd2ZXJ0aWNhbCcsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbGdgXTogdGhpcy5zaXplID09PSAnbGFyZ2UnLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXNtYF06IHRoaXMuc2l6ZSA9PT0gJ3NtYWxsJyxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1zcGxpdGBdOiB0aGlzLnNwbGl0LFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWJvcmRlcmVkYF06IHRoaXMuYm9yZGVyZWQsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbG9hZGluZ2BdOiB0aGlzLmxvYWRpbmcsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tZ3JpZGBdOiB0aGlzLmdyaWQsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tc29tZXRoaW5nLWFmdGVyLWxhc3QtaXRlbWBdOiAhISh0aGlzLmxvYWRNb3JlIHx8IHRoaXMucGFnaW5hdGlvbiB8fCB0aGlzLmZvb3RlcilcclxuICAgIH07XHJcbiAgICB0aGlzLnVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgY2xhc3NNYXApO1xyXG4gIH1cclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxufVxyXG4iXX0=