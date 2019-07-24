/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ContentChildren, Directive, ElementRef, Input, QueryList, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { InputBoolean, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { CmacsFormLabelComponent } from './cmacs-form-label.component';
export class CmacsFormDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} nzUpdateHostClassService
     */
    constructor(elementRef, renderer, nzUpdateHostClassService) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.layout = 'horizontal';
        this.cmacsNoColon = false;
        this.destroy$ = new Subject();
        this.renderer.addClass(elementRef.nativeElement, 'ant-form');
    }
    /**
     * @return {?}
     */
    setClassMap() {
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, {
            [`ant-form-${this.layout}`]: this.layout
        });
    }
    /**
     * @return {?}
     */
    updateItemsDefaultColon() {
        if (this.cmacsFormLabelComponent) {
            this.cmacsFormLabelComponent.forEach((/**
             * @param {?} item
             * @return {?}
             */
            item => item.setDefaultNoColon(this.cmacsNoColon)));
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClassMap();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.setClassMap();
        if (changes.hasOwnProperty('cmacsNoColon')) {
            this.updateItemsDefaultColon();
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.cmacsFormLabelComponent.changes
            .pipe(startWith(null), takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.updateItemsDefaultColon();
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
CmacsFormDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cmacs-form]',
                exportAs: 'cmacsForm',
                providers: [NzUpdateHostClassService]
            },] }
];
/** @nocollapse */
CmacsFormDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NzUpdateHostClassService }
];
CmacsFormDirective.propDecorators = {
    layout: [{ type: Input }],
    cmacsNoColon: [{ type: Input }],
    cmacsFormLabelComponent: [{ type: ContentChildren, args: [CmacsFormLabelComponent, { descendants: true },] }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], CmacsFormDirective.prototype, "cmacsNoColon", void 0);
if (false) {
    /** @type {?} */
    CmacsFormDirective.prototype.layout;
    /** @type {?} */
    CmacsFormDirective.prototype.cmacsNoColon;
    /** @type {?} */
    CmacsFormDirective.prototype.cmacsFormLabelComponent;
    /** @type {?} */
    CmacsFormDirective.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    CmacsFormDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    CmacsFormDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    CmacsFormDirective.prototype.nzUpdateHostClassService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZm9ybS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLWZvcm0vY21hY3MtZm9ybS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsZUFBZSxFQUNmLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUlMLFNBQVMsRUFDVCxTQUFTLEVBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRELE9BQU8sRUFBRSxZQUFZLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU1RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQU92RSxNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7SUFvQjdCLFlBQ1UsVUFBc0IsRUFDdEIsUUFBbUIsRUFDbkIsd0JBQWtEO1FBRmxELGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBdEJuRCxXQUFNLEdBQUcsWUFBWSxDQUFDO1FBQ04saUJBQVksR0FBWSxLQUFLLENBQUM7UUFJdkQsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFtQnZCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7OztJQWxCRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTtZQUMzRSxDQUFDLFlBQVksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDekMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELHVCQUF1QjtRQUNyQixJQUFJLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtZQUNoQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsT0FBTzs7OztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBQyxDQUFDO1NBQ3pGO0lBQ0gsQ0FBQzs7OztJQVVELFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUMxQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztTQUNoQztJQUNILENBQUM7Ozs7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE9BQU87YUFDakMsSUFBSSxDQUNILFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFDZixTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUN6QjthQUNBLFNBQVM7OztRQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBQ2pDLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7O1lBMURGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2FBQ3RDOzs7O1lBcEJDLFVBQVU7WUFNVixTQUFTO1lBTVksd0JBQXdCOzs7cUJBVTVDLEtBQUs7MkJBQ0wsS0FBSztzQ0FFTCxlQUFlLFNBQUMsdUJBQXVCLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFOztBQUZ0QztJQUFmLFlBQVksRUFBRTs7d0RBQStCOzs7SUFEdkQsb0NBQStCOztJQUMvQiwwQ0FBdUQ7O0lBRXZELHFEQUE2SDs7SUFFN0gsc0NBQXlCOzs7OztJQWV2Qix3Q0FBOEI7Ozs7O0lBQzlCLHNDQUEyQjs7Ozs7SUFDM0Isc0RBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBRdWVyeUxpc3QsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBzdGFydFdpdGgsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IENtYWNzRm9ybUxhYmVsQ29tcG9uZW50IH0gZnJvbSAnLi9jbWFjcy1mb3JtLWxhYmVsLmNvbXBvbmVudCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tjbWFjcy1mb3JtXScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0Zvcm0nLFxyXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzRm9ybURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIGxheW91dCA9ICdob3Jpem9udGFsJztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgY21hY3NOb0NvbG9uOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBDb250ZW50Q2hpbGRyZW4oQ21hY3NGb3JtTGFiZWxDb21wb25lbnQsIHsgZGVzY2VuZGFudHM6IHRydWUgfSkgY21hY3NGb3JtTGFiZWxDb21wb25lbnQ6IFF1ZXJ5TGlzdDxDbWFjc0Zvcm1MYWJlbENvbXBvbmVudD47XHJcblxyXG4gIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHtcclxuICAgICAgW2BhbnQtZm9ybS0ke3RoaXMubGF5b3V0fWBdOiB0aGlzLmxheW91dFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVJdGVtc0RlZmF1bHRDb2xvbigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmNtYWNzRm9ybUxhYmVsQ29tcG9uZW50KSB7XHJcbiAgICAgIHRoaXMuY21hY3NGb3JtTGFiZWxDb21wb25lbnQuZm9yRWFjaChpdGVtID0+IGl0ZW0uc2V0RGVmYXVsdE5vQ29sb24odGhpcy5jbWFjc05vQ29sb24pKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZVxyXG4gICkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtZm9ybScpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnY21hY3NOb0NvbG9uJykpIHtcclxuICAgICAgdGhpcy51cGRhdGVJdGVtc0RlZmF1bHRDb2xvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jbWFjc0Zvcm1MYWJlbENvbXBvbmVudC5jaGFuZ2VzXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHN0YXJ0V2l0aChudWxsKSxcclxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUl0ZW1zRGVmYXVsdENvbG9uKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIl19