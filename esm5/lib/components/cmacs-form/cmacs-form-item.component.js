/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, Input, NgZone, QueryList, Renderer2, ViewEncapsulation } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { InputBoolean, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { NzRowDirective } from 'ng-zorro-antd/grid';
import { CmacsFormExplainComponent } from './cmacs-form-explain.component';
/**
 * should add nz-row directive to host, track https://github.com/angular/angular/issues/8785 *
 */
var CmacsFormItemComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CmacsFormItemComponent, _super);
    function CmacsFormItemComponent(elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform, cdr) {
        var _this = _super.call(this, elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform) || this;
        _this.cdr = cdr;
        _this.flex = false;
        renderer.addClass(elementRef.nativeElement, 'ant-form-item');
        return _this;
    }
    /**
     * @return {?}
     */
    CmacsFormItemComponent.prototype.updateFlexStyle = /**
     * @return {?}
     */
    function () {
        if (this.flex) {
            this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'flex');
        }
        else {
            this.renderer.removeStyle(this.elementRef.nativeElement, 'display');
        }
    };
    /**
     * @return {?}
     */
    CmacsFormItemComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.listOfNzFormExplainComponent) {
            this.listOfNzFormExplainComponent.changes.pipe(takeUntil(this.destroy$)).subscribe((/**
             * @return {?}
             */
            function () {
                _this.cdr.markForCheck();
            }));
        }
    };
    /**
     * @return {?}
     */
    CmacsFormItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
        this.updateFlexStyle();
    };
    /**
     * @return {?}
     */
    CmacsFormItemComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsFormItemComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        if (changes.hasOwnProperty('flex')) {
            this.updateFlexStyle();
        }
    };
    CmacsFormItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-form-item',
                    exportAs: 'cmacsFormItem',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    providers: [NzUpdateHostClassService],
                    template: "<ng-content></ng-content>",
                    host: {
                        '[class.ant-form-item-with-help]': 'listOfNzFormExplainComponent && (listOfNzFormExplainComponent.length > 0)'
                    },
                    styles: ["\n      cmacs-form-item {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    CmacsFormItemComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NzUpdateHostClassService },
        { type: MediaMatcher },
        { type: NgZone },
        { type: Platform },
        { type: ChangeDetectorRef }
    ]; };
    CmacsFormItemComponent.propDecorators = {
        flex: [{ type: Input }],
        listOfNzFormExplainComponent: [{ type: ContentChildren, args: [CmacsFormExplainComponent, { descendants: true },] }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], CmacsFormItemComponent.prototype, "flex", void 0);
    return CmacsFormItemComponent;
}(NzRowDirective));
export { CmacsFormItemComponent };
if (false) {
    /** @type {?} */
    CmacsFormItemComponent.prototype.flex;
    /** @type {?} */
    CmacsFormItemComponent.prototype.listOfNzFormExplainComponent;
    /**
     * @type {?}
     * @private
     */
    CmacsFormItemComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZm9ybS1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtZm9ybS9jbWFjcy1mb3JtLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUlOLFNBQVMsRUFDVCxTQUFTLEVBRVQsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDNUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXBELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7O0FBRzNFO0lBbUI0QyxrREFBYztJQWV4RCxnQ0FDRSxVQUFzQixFQUN0QixRQUFtQixFQUNuQix3QkFBa0QsRUFDbEQsWUFBMEIsRUFDMUIsTUFBYyxFQUNkLFFBQWtCLEVBQ1YsR0FBc0I7UUFQaEMsWUFTRSxrQkFBTSxVQUFVLEVBQUUsUUFBUSxFQUFFLHdCQUF3QixFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLFNBRXRGO1FBSlMsU0FBRyxHQUFILEdBQUcsQ0FBbUI7UUFwQlAsVUFBSSxHQUFZLEtBQUssQ0FBQztRQXVCN0MsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQyxDQUFDOztJQUMvRCxDQUFDOzs7O0lBbkJELGdEQUFlOzs7SUFBZjtRQUNFLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUMxRTthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDckU7SUFDSCxDQUFDOzs7O0lBZUQsbURBQWtCOzs7SUFBbEI7UUFBQSxpQkFNQztRQUxDLElBQUksSUFBSSxDQUFDLDRCQUE0QixFQUFFO1lBQ3JDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7WUFBQztnQkFDakYsS0FBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUMxQixDQUFDLEVBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7OztJQUVELHlDQUFROzs7SUFBUjtRQUNFLGlCQUFNLFFBQVEsV0FBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsNENBQVc7OztJQUFYO1FBQ0UsaUJBQU0sV0FBVyxXQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCw0Q0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsaUJBQU0sV0FBVyxZQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNCLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNsQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDOztnQkFyRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSxlQUFlO29CQUN6QixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO29CQUNyQyxxQ0FBK0M7b0JBQy9DLElBQUksRUFBRTt3QkFDSixpQ0FBaUMsRUFBRSwyRUFBMkU7cUJBQy9HOzZCQUVDLG1FQUlDO2lCQUVKOzs7O2dCQXJDQyxVQUFVO2dCQU9WLFNBQVM7Z0JBTVksd0JBQXdCO2dCQXJCdEMsWUFBWTtnQkFVbkIsTUFBTTtnQkFUQyxRQUFRO2dCQUlmLGlCQUFpQjs7O3VCQTJDaEIsS0FBSzsrQ0FFTCxlQUFlLFNBQUMseUJBQXlCLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFOztJQUZ4QztRQUFmLFlBQVksRUFBRTs7d0RBQXVCO0lBaURqRCw2QkFBQztDQUFBLEFBdEVELENBbUI0QyxjQUFjLEdBbUR6RDtTQW5EWSxzQkFBc0I7OztJQUVqQyxzQ0FBK0M7O0lBRS9DLDhEQUNtRTs7Ozs7SUFpQmpFLHFDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lZGlhTWF0Y2hlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9sYXlvdXQnO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56Um93RGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9ncmlkJztcclxuXHJcbmltcG9ydCB7IENtYWNzRm9ybUV4cGxhaW5Db21wb25lbnQgfSBmcm9tICcuL2NtYWNzLWZvcm0tZXhwbGFpbi5jb21wb25lbnQnO1xyXG5cclxuLyoqIHNob3VsZCBhZGQgbnotcm93IGRpcmVjdGl2ZSB0byBob3N0LCB0cmFjayBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy84Nzg1ICoqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWZvcm0taXRlbScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0Zvcm1JdGVtJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWZvcm0taXRlbS5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtZm9ybS1pdGVtLXdpdGgtaGVscF0nOiAnbGlzdE9mTnpGb3JtRXhwbGFpbkNvbXBvbmVudCAmJiAobGlzdE9mTnpGb3JtRXhwbGFpbkNvbXBvbmVudC5sZW5ndGggPiAwKSdcclxuICB9LFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBjbWFjcy1mb3JtLWl0ZW0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NGb3JtSXRlbUNvbXBvbmVudCBleHRlbmRzIE56Um93RGlyZWN0aXZlXHJcbiAgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBmbGV4OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBDb250ZW50Q2hpbGRyZW4oQ21hY3NGb3JtRXhwbGFpbkNvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxyXG4gIGxpc3RPZk56Rm9ybUV4cGxhaW5Db21wb25lbnQ6IFF1ZXJ5TGlzdDxDbWFjc0Zvcm1FeHBsYWluQ29tcG9uZW50PjtcclxuXHJcbiAgdXBkYXRlRmxleFN0eWxlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZmxleCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsICdmbGV4Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLFxyXG4gICAgbWVkaWFNYXRjaGVyOiBNZWRpYU1hdGNoZXIsXHJcbiAgICBuZ1pvbmU6IE5nWm9uZSxcclxuICAgIHBsYXRmb3JtOiBQbGF0Zm9ybSxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZiwgcmVuZGVyZXIsIG56VXBkYXRlSG9zdENsYXNzU2VydmljZSwgbWVkaWFNYXRjaGVyLCBuZ1pvbmUsIHBsYXRmb3JtKTtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1mb3JtLWl0ZW0nKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmxpc3RPZk56Rm9ybUV4cGxhaW5Db21wb25lbnQpIHtcclxuICAgICAgdGhpcy5saXN0T2ZOekZvcm1FeHBsYWluQ29tcG9uZW50LmNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xyXG4gICAgdGhpcy51cGRhdGVGbGV4U3R5bGUoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgc3VwZXIubmdPbkRlc3Ryb3koKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nT25DaGFuZ2VzKGNoYW5nZXMpO1xyXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ2ZsZXgnKSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUZsZXhTdHlsZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=