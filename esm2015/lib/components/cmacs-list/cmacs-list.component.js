/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
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
                styles: [".cmacs-classic-grid{display:inline-block}.ant-list-grid .ant-list-item{margin-bottom:40px}", `
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLWxpc3QvY21hY3MtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBR0wsV0FBVyxFQUNYLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsWUFBWSxFQUFpQix3QkFBd0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBc0IzRixNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7SUFzRDdCLFlBQW9CLEVBQWMsRUFBVSxzQkFBZ0Q7UUFBeEUsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBMEI7UUFqRG5FLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFRakMsZUFBVSxHQUE4QixZQUFZLENBQUM7UUFJckMsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUVoQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQU1wQyxTQUFJLEdBQWtCLFNBQVMsQ0FBQztRQUVoQixVQUFLLEdBQUcsSUFBSSxDQUFDOzs7UUFROUIsY0FBUyxHQUFHLFVBQVUsQ0FBQztJQW1CZ0UsQ0FBQzs7Ozs7SUFqQnhGLFlBQVk7O2NBQ1osUUFBUSxHQUFHO1lBQ2YsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSTtZQUN0QixDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsV0FBVyxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsS0FBSyxVQUFVO1lBQzlELENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxLQUFLLE9BQU87WUFDL0MsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTztZQUMvQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsUUFBUSxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDdkMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLFdBQVcsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQzdDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxVQUFVLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTztZQUMzQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsT0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDckMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLDRCQUE0QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDckc7UUFDRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQy9FLENBQUM7Ozs7SUFNRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7OztZQWhGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRSxXQUFXO2dCQUNyQix3bEVBQTBDO2dCQUMxQyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDckMsbUJBQW1CLEVBQUUsS0FBSztnQkFFMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7dUhBR25DOzs7OztLQUtDO2FBRUo7Ozs7WUE3QkMsVUFBVTtZQVEwQix3QkFBd0I7Ozt5QkF5QjNELEtBQUs7dUJBRUwsS0FBSzttQkFFTCxLQUFLO3FCQUVMLEtBQUs7cUJBRUwsS0FBSzt5QkFFTCxLQUFLO3lCQUVMLEtBQUs7c0JBRUwsS0FBSzswQkFFTCxLQUFLO3VCQUVMLEtBQUs7eUJBRUwsS0FBSzttQkFFTCxLQUFLO29CQUVMLEtBQUs7dUJBRUwsS0FBSzs7QUF4Qm1CO0lBQWYsWUFBWSxFQUFFOztvREFBa0I7QUFZakI7SUFBZixZQUFZLEVBQUU7O21EQUFpQjtBQUVoQjtJQUFmLFlBQVksRUFBRTs7dURBQXFCO0FBUXBCO0lBQWYsWUFBWSxFQUFFOztpREFBYzs7O0lBeEJ0Qyx3Q0FBMkI7O0lBRTNCLHNDQUEwQzs7SUFFMUMsa0NBQTZCOztJQUU3QixvQ0FBNEM7O0lBRTVDLG9DQUE0Qzs7SUFFNUMsd0NBQThEOztJQUU5RCx3Q0FBdUM7O0lBRXZDLHFDQUF5Qzs7SUFFekMseUNBQTZDOztJQUU3QyxzQ0FBcUM7O0lBRXJDLHdDQUF1Qzs7SUFFdkMsa0NBQXlDOztJQUV6QyxtQ0FBc0M7O0lBRXRDLHNDQUE4Qzs7Ozs7SUFNOUMsdUNBQStCOzs7OztJQW1CbkIsZ0NBQXNCOzs7OztJQUFFLG9EQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uSW5pdCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBOelNpemVMRFNUeXBlLCBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ21hY3NMaXN0R3JpZCB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtbGlzdCcsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0xpc3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1saXN0LmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWxpc3QuY29tcG9uZW50LmNzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgLy8gY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIGNtYWNzLWxpc3QsXHJcbiAgICAgIGNtYWNzLWxpc3Qgbnotc3BpbiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgLy8gI3JlZ2lvbiBmaWVsZHNcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgQElucHV0KCkgZGF0YVNvdXJjZTogYW55W107XHJcblxyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBib3JkZXJlZCA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSBncmlkOiBDbWFjc0xpc3RHcmlkO1xyXG5cclxuICBASW5wdXQoKSBoZWFkZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBASW5wdXQoKSBmb290ZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBASW5wdXQoKSBpdGVtTGF5b3V0OiAndmVydGljYWwnIHwgJ2hvcml6b250YWwnID0gJ2hvcml6b250YWwnO1xyXG5cclxuICBASW5wdXQoKSByZW5kZXJJdGVtOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxvYWRpbmcgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNsYXNzaWNHcmlkID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIGxvYWRNb3JlOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgQElucHV0KCkgcGFnaW5hdGlvbjogVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIEBJbnB1dCgpIHNpemU6IE56U2l6ZUxEU1R5cGUgPSAnZGVmYXVsdCc7XHJcblxyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzcGxpdCA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpIG5vUmVzdWx0OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAvLyAjcmVnaW9uIHN0eWxlc1xyXG5cclxuICBwcml2YXRlIHByZWZpeENscyA9ICdhbnQtbGlzdCc7XHJcblxyXG4gIHByaXZhdGUgX3NldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgY29uc3QgY2xhc3NNYXAgPSB7XHJcbiAgICAgIFt0aGlzLnByZWZpeENsc106IHRydWUsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tdmVydGljYWxgXTogdGhpcy5pdGVtTGF5b3V0ID09PSAndmVydGljYWwnLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWxnYF06IHRoaXMuc2l6ZSA9PT0gJ2xhcmdlJyxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1zbWBdOiB0aGlzLnNpemUgPT09ICdzbWFsbCcsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tc3BsaXRgXTogdGhpcy5zcGxpdCxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1ib3JkZXJlZGBdOiB0aGlzLmJvcmRlcmVkLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWxvYWRpbmdgXTogdGhpcy5sb2FkaW5nLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWdyaWRgXTogdGhpcy5ncmlkLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXNvbWV0aGluZy1hZnRlci1sYXN0LWl0ZW1gXTogISEodGhpcy5sb2FkTW9yZSB8fCB0aGlzLnBhZ2luYXRpb24gfHwgdGhpcy5mb290ZXIpXHJcbiAgICB9O1xyXG4gICAgdGhpcy51cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTWFwKTtcclxuICB9XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSB1cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5fc2V0Q2xhc3NNYXAoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fc2V0Q2xhc3NNYXAoKTtcclxuICB9XHJcbn1cclxuIl19