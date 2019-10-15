/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { InputBoolean, NzUpdateHostClassService } from 'ng-zorro-antd/core';
var CmacsListComponent = /** @class */ (function () {
    // #endregion
    function CmacsListComponent(el, updateHostClassService) {
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
    CmacsListComponent.prototype._setClassMap = /**
     * @private
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var classMap = (_a = {},
            _a[this.prefixCls] = true,
            _a[this.prefixCls + "-vertical"] = this.itemLayout === 'vertical',
            _a[this.prefixCls + "-lg"] = this.size === 'large',
            _a[this.prefixCls + "-sm"] = this.size === 'small',
            _a[this.prefixCls + "-split"] = this.split,
            _a[this.prefixCls + "-bordered"] = this.bordered,
            _a[this.prefixCls + "-loading"] = this.loading,
            _a[this.prefixCls + "-grid"] = this.grid,
            _a[this.prefixCls + "-something-after-last-item"] = !!(this.loadMore || this.pagination || this.footer),
            _a);
        this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
    };
    /**
     * @return {?}
     */
    CmacsListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._setClassMap();
    };
    /**
     * @return {?}
     */
    CmacsListComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this._setClassMap();
    };
    CmacsListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-list',
                    exportAs: 'cmacsList',
                    template: "<ng-template #itemsTpl>\r\n  <ng-container *ngFor=\"let item of dataSource; let index = index\">\r\n    <ng-template [ngTemplateOutlet]=\"renderItem\" [ngTemplateOutletContext]=\"{ $implicit: item, index: index }\"></ng-template>\r\n  </ng-container>\r\n</ng-template>\r\n<div *ngIf=\"header\" class=\"ant-list-header\">\r\n  <ng-container *cmacsStringTemplateOutlet=\"header\">{{ header }}</ng-container>\r\n</div>\r\n<nz-spin [nzSpinning]=\"loading\">\r\n  <ng-container *ngIf=\"dataSource\">\r\n    <div *ngIf=\"loading && dataSource.length === 0\" [style.min-height.px]=\"53\"></div>\r\n    <div *ngIf=\"grid; else itemsTpl\" nz-row [nzGutter]=\"grid.gutter\">\r\n      <div *ngIf=\"!classicGrid\">\r\n        <div nz-col [nzSpan]=\"grid.span\" [nzXs]=\"grid.xs\" [nzSm]=\"grid.sm\" [nzMd]=\"grid.md\" [nzLg]=\"grid.lg\" [nzXl]=\"grid.xl\"\r\n             [nzXXl]=\"grid.xxl\" *ngFor=\"let item of dataSource; let index = index\">\r\n          <ng-template [ngTemplateOutlet]=\"renderItem\" [ngTemplateOutletContext]=\"{ $implicit: item, index: index }\"></ng-template>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"classicGrid\">\r\n        <div class=\"cmacs-classic-grid\"\r\n             [style.marginRight.px]=\"grid.gutter\"\r\n             *ngFor=\"let item of dataSource; let index = index\">\r\n          <ng-template [ngTemplateOutlet]=\"renderItem\" [ngTemplateOutletContext]=\"{ $implicit: item, index: index }\"></ng-template>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"!loading && dataSource.length === 0\" class=\"ant-list-empty-text\">\r\n      <nz-embed-empty [nzComponentName]=\"'list'\" [specificContent]=\"noResult\"></nz-embed-empty>\r\n    </div>\r\n  </ng-container>\r\n  <ng-content></ng-content>\r\n</nz-spin>\r\n<div *ngIf=\"footer\" class=\"ant-list-footer\">\r\n  <ng-container *cmacsStringTemplateOutlet=\"footer\">{{ footer }}</ng-container>\r\n</div>\r\n<ng-template [ngTemplateOutlet]=\"loadMore\"></ng-template>\r\n<div *ngIf=\"pagination\" class=\"ant-list-pagination\">\r\n  <ng-template [ngTemplateOutlet]=\"pagination\"></ng-template>\r\n</div>\r\n",
                    providers: [NzUpdateHostClassService],
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".cmacs-classic-grid{display:inline-block}", "\n      cmacs-list,\n      cmacs-list nz-spin {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    CmacsListComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NzUpdateHostClassService }
    ]; };
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
    return CmacsListComponent;
}());
export { CmacsListComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLWxpc3QvY21hY3MtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUdMLFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBaUIsd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUkzRjtJQXNFRSxhQUFhO0lBRWIsNEJBQW9CLEVBQWMsRUFBVSxzQkFBZ0Q7UUFBeEUsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBMEI7UUFqRG5FLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFRakMsZUFBVSxHQUE4QixZQUFZLENBQUM7UUFJckMsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUVoQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQU1wQyxTQUFJLEdBQWtCLFNBQVMsQ0FBQztRQUVoQixVQUFLLEdBQUcsSUFBSSxDQUFDOzs7UUFROUIsY0FBUyxHQUFHLFVBQVUsQ0FBQztJQW1CZ0UsQ0FBQzs7Ozs7SUFqQnhGLHlDQUFZOzs7O0lBQXBCOzs7WUFDUSxRQUFRO1lBQ1osR0FBQyxJQUFJLENBQUMsU0FBUyxJQUFHLElBQUk7WUFDdEIsR0FBSSxJQUFJLENBQUMsU0FBUyxjQUFXLElBQUcsSUFBSSxDQUFDLFVBQVUsS0FBSyxVQUFVO1lBQzlELEdBQUksSUFBSSxDQUFDLFNBQVMsUUFBSyxJQUFHLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTztZQUMvQyxHQUFJLElBQUksQ0FBQyxTQUFTLFFBQUssSUFBRyxJQUFJLENBQUMsSUFBSSxLQUFLLE9BQU87WUFDL0MsR0FBSSxJQUFJLENBQUMsU0FBUyxXQUFRLElBQUcsSUFBSSxDQUFDLEtBQUs7WUFDdkMsR0FBSSxJQUFJLENBQUMsU0FBUyxjQUFXLElBQUcsSUFBSSxDQUFDLFFBQVE7WUFDN0MsR0FBSSxJQUFJLENBQUMsU0FBUyxhQUFVLElBQUcsSUFBSSxDQUFDLE9BQU87WUFDM0MsR0FBSSxJQUFJLENBQUMsU0FBUyxVQUFPLElBQUcsSUFBSSxDQUFDLElBQUk7WUFDckMsR0FBSSxJQUFJLENBQUMsU0FBUywrQkFBNEIsSUFBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQztlQUNyRztRQUNELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDL0UsQ0FBQzs7OztJQU1ELHFDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsd0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7O2dCQWhGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSxXQUFXO29CQUNyQix3bEVBQTBDO29CQUMxQyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztvQkFDckMsbUJBQW1CLEVBQUUsS0FBSztvQkFFMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzBFQUU3Qyx5RkFLQztpQkFFSjs7OztnQkE3QkMsVUFBVTtnQkFRMEIsd0JBQXdCOzs7NkJBeUIzRCxLQUFLOzJCQUVMLEtBQUs7dUJBRUwsS0FBSzt5QkFFTCxLQUFLO3lCQUVMLEtBQUs7NkJBRUwsS0FBSzs2QkFFTCxLQUFLOzBCQUVMLEtBQUs7OEJBRUwsS0FBSzsyQkFFTCxLQUFLOzZCQUVMLEtBQUs7dUJBRUwsS0FBSzt3QkFFTCxLQUFLOzJCQUVMLEtBQUs7O0lBeEJtQjtRQUFmLFlBQVksRUFBRTs7d0RBQWtCO0lBWWpCO1FBQWYsWUFBWSxFQUFFOzt1REFBaUI7SUFFaEI7UUFBZixZQUFZLEVBQUU7OzJEQUFxQjtJQVFwQjtRQUFmLFlBQVksRUFBRTs7cURBQWM7SUFvQ3hDLHlCQUFDO0NBQUEsQUFqRkQsSUFpRkM7U0EvRFksa0JBQWtCOzs7SUFHN0Isd0NBQTJCOztJQUUzQixzQ0FBMEM7O0lBRTFDLGtDQUE2Qjs7SUFFN0Isb0NBQTRDOztJQUU1QyxvQ0FBNEM7O0lBRTVDLHdDQUE4RDs7SUFFOUQsd0NBQXVDOztJQUV2QyxxQ0FBeUM7O0lBRXpDLHlDQUE2Qzs7SUFFN0Msc0NBQXFDOztJQUVyQyx3Q0FBdUM7O0lBRXZDLGtDQUF5Qzs7SUFFekMsbUNBQXNDOztJQUV0QyxzQ0FBOEM7Ozs7O0lBTTlDLHVDQUErQjs7Ozs7SUFtQm5CLGdDQUFzQjs7Ozs7SUFBRSxvREFBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgTnpTaXplTERTVHlwZSwgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IENtYWNzTGlzdEdyaWQgfSBmcm9tICcuL2ludGVyZmFjZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWxpc3QnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NMaXN0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtbGlzdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1saXN0LmNvbXBvbmVudC5jc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBjbWFjcy1saXN0LFxyXG4gICAgICBjbWFjcy1saXN0IG56LXNwaW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIC8vICNyZWdpb24gZmllbGRzXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIEBJbnB1dCgpIGRhdGFTb3VyY2U6IGFueVtdO1xyXG5cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYm9yZGVyZWQgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgZ3JpZDogQ21hY3NMaXN0R3JpZDtcclxuXHJcbiAgQElucHV0KCkgaGVhZGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgQElucHV0KCkgZm9vdGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgQElucHV0KCkgaXRlbUxheW91dDogJ3ZlcnRpY2FsJyB8ICdob3Jpem9udGFsJyA9ICdob3Jpem9udGFsJztcclxuXHJcbiAgQElucHV0KCkgcmVuZGVySXRlbTogVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsb2FkaW5nID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjbGFzc2ljR3JpZCA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSBsb2FkTW9yZTogVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIEBJbnB1dCgpIHBhZ2luYXRpb246IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBASW5wdXQoKSBzaXplOiBOelNpemVMRFNUeXBlID0gJ2RlZmF1bHQnO1xyXG5cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc3BsaXQgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKSBub1Jlc3VsdDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgLy8gI3JlZ2lvbiBzdHlsZXNcclxuXHJcbiAgcHJpdmF0ZSBwcmVmaXhDbHMgPSAnYW50LWxpc3QnO1xyXG5cclxuICBwcml2YXRlIF9zZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNsYXNzTWFwID0ge1xyXG4gICAgICBbdGhpcy5wcmVmaXhDbHNdOiB0cnVlLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXZlcnRpY2FsYF06IHRoaXMuaXRlbUxheW91dCA9PT0gJ3ZlcnRpY2FsJyxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1sZ2BdOiB0aGlzLnNpemUgPT09ICdsYXJnZScsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tc21gXTogdGhpcy5zaXplID09PSAnc21hbGwnLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXNwbGl0YF06IHRoaXMuc3BsaXQsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tYm9yZGVyZWRgXTogdGhpcy5ib3JkZXJlZCxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1sb2FkaW5nYF06IHRoaXMubG9hZGluZyxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1ncmlkYF06IHRoaXMuZ3JpZCxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1zb21ldGhpbmctYWZ0ZXItbGFzdC1pdGVtYF06ICEhKHRoaXMubG9hZE1vcmUgfHwgdGhpcy5wYWdpbmF0aW9uIHx8IHRoaXMuZm9vdGVyKVxyXG4gICAgfTtcclxuICAgIHRoaXMudXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBjbGFzc01hcCk7XHJcbiAgfVxyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgdXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX3NldENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuX3NldENsYXNzTWFwKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==