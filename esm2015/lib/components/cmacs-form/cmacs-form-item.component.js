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
export class CmacsFormItemComponent extends NzRowDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} nzUpdateHostClassService
     * @param {?} mediaMatcher
     * @param {?} ngZone
     * @param {?} platform
     * @param {?} cdr
     */
    constructor(elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform, cdr) {
        super(elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform);
        this.cdr = cdr;
        this.flex = false;
        renderer.addClass(elementRef.nativeElement, 'ant-form-item');
    }
    /**
     * @return {?}
     */
    updateFlexStyle() {
        if (this.flex) {
            this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'flex');
        }
        else {
            this.renderer.removeStyle(this.elementRef.nativeElement, 'display');
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.listOfNzFormExplainComponent) {
            this.listOfNzFormExplainComponent.changes.pipe(takeUntil(this.destroy$)).subscribe((/**
             * @return {?}
             */
            () => {
                this.cdr.markForCheck();
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this.updateFlexStyle();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        if (changes.hasOwnProperty('flex')) {
            this.updateFlexStyle();
        }
    }
}
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
                styles: [`
      cmacs-form-item {
        display: block;
      }
    `]
            }] }
];
/** @nocollapse */
CmacsFormItemComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NzUpdateHostClassService },
    { type: MediaMatcher },
    { type: NgZone },
    { type: Platform },
    { type: ChangeDetectorRef }
];
CmacsFormItemComponent.propDecorators = {
    flex: [{ type: Input }],
    listOfNzFormExplainComponent: [{ type: ContentChildren, args: [CmacsFormExplainComponent, { descendants: true },] }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], CmacsFormItemComponent.prototype, "flex", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZm9ybS1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtZm9ybS9jbWFjcy1mb3JtLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUlOLFNBQVMsRUFDVCxTQUFTLEVBRVQsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDNUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXBELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7O0FBc0IzRSxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsY0FBYzs7Ozs7Ozs7OztJQWV4RCxZQUNFLFVBQXNCLEVBQ3RCLFFBQW1CLEVBQ25CLHdCQUFrRCxFQUNsRCxZQUEwQixFQUMxQixNQUFjLEVBQ2QsUUFBa0IsRUFDVixHQUFzQjtRQUU5QixLQUFLLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSx3QkFBd0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRjlFLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBcEJQLFNBQUksR0FBWSxLQUFLLENBQUM7UUF1QjdDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7O0lBbkJELGVBQWU7UUFDYixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDMUU7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQ3JFO0lBQ0gsQ0FBQzs7OztJQWVELGtCQUFrQjtRQUNoQixJQUFJLElBQUksQ0FBQyw0QkFBNEIsRUFBRTtZQUNyQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUzs7O1lBQUMsR0FBRyxFQUFFO2dCQUN0RixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzFCLENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQixJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDbEMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQzs7O1lBckVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUUsZUFBZTtnQkFDekIsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDckMscUNBQStDO2dCQUMvQyxJQUFJLEVBQUU7b0JBQ0osaUNBQWlDLEVBQUUsMkVBQTJFO2lCQUMvRzt5QkFFQzs7OztLQUlDO2FBRUo7Ozs7WUFyQ0MsVUFBVTtZQU9WLFNBQVM7WUFNWSx3QkFBd0I7WUFyQnRDLFlBQVk7WUFVbkIsTUFBTTtZQVRDLFFBQVE7WUFJZixpQkFBaUI7OzttQkEyQ2hCLEtBQUs7MkNBRUwsZUFBZSxTQUFDLHlCQUF5QixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTs7QUFGeEM7SUFBZixZQUFZLEVBQUU7O29EQUF1Qjs7O0lBQS9DLHNDQUErQzs7SUFFL0MsOERBQ21FOzs7OztJQWlCakUscUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVkaWFNYXRjaGVyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xheW91dCc7XHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpSb3dEaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2dyaWQnO1xyXG5cclxuaW1wb3J0IHsgQ21hY3NGb3JtRXhwbGFpbkNvbXBvbmVudCB9IGZyb20gJy4vY21hY3MtZm9ybS1leHBsYWluLmNvbXBvbmVudCc7XHJcblxyXG4vKiogc2hvdWxkIGFkZCBuei1yb3cgZGlyZWN0aXZlIHRvIGhvc3QsIHRyYWNrIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzg3ODUgKiovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtZm9ybS1pdGVtJyxcclxuICBleHBvcnRBczogJ2NtYWNzRm9ybUl0ZW0nLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJvdmlkZXJzOiBbTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtZm9ybS1pdGVtLmNvbXBvbmVudC5odG1sJyxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1mb3JtLWl0ZW0td2l0aC1oZWxwXSc6ICdsaXN0T2ZOekZvcm1FeHBsYWluQ29tcG9uZW50ICYmIChsaXN0T2ZOekZvcm1FeHBsYWluQ29tcG9uZW50Lmxlbmd0aCA+IDApJ1xyXG4gIH0sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIGNtYWNzLWZvcm0taXRlbSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0Zvcm1JdGVtQ29tcG9uZW50IGV4dGVuZHMgTnpSb3dEaXJlY3RpdmVcclxuICBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGZsZXg6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQENvbnRlbnRDaGlsZHJlbihDbWFjc0Zvcm1FeHBsYWluQ29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pXHJcbiAgbGlzdE9mTnpGb3JtRXhwbGFpbkNvbXBvbmVudDogUXVlcnlMaXN0PENtYWNzRm9ybUV4cGxhaW5Db21wb25lbnQ+O1xyXG5cclxuICB1cGRhdGVGbGV4U3R5bGUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5mbGV4KSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgJ2ZsZXgnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsXHJcbiAgICBtZWRpYU1hdGNoZXI6IE1lZGlhTWF0Y2hlcixcclxuICAgIG5nWm9uZTogTmdab25lLFxyXG4gICAgcGxhdGZvcm06IFBsYXRmb3JtLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmLCByZW5kZXJlciwgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLCBtZWRpYU1hdGNoZXIsIG5nWm9uZSwgcGxhdGZvcm0pO1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWZvcm0taXRlbScpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubGlzdE9mTnpGb3JtRXhwbGFpbkNvbXBvbmVudCkge1xyXG4gICAgICB0aGlzLmxpc3RPZk56Rm9ybUV4cGxhaW5Db21wb25lbnQuY2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nT25Jbml0KCk7XHJcbiAgICB0aGlzLnVwZGF0ZUZsZXhTdHlsZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XHJcbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnZmxleCcpKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlRmxleFN0eWxlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==