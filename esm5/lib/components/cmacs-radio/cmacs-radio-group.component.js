/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, Input, QueryList, Renderer2, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { merge, Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { isNotNil, InputBoolean } from 'ng-zorro-antd/core';
import { CmacsRadioComponent } from './cmacs-radio.component';
var CmacsRadioGroupComponent = /** @class */ (function () {
    function CmacsRadioGroupComponent(cdr, renderer, elementRef) {
        this.cdr = cdr;
        this.destroy$ = new Subject();
        this.onChange = (/**
         * @return {?}
         */
        function () { return null; });
        this.onTouched = (/**
         * @return {?}
         */
        function () { return null; });
        this.buttonStyle = 'outline';
        this.size = 'default';
        renderer.addClass(elementRef.nativeElement, 'ant-radio-group');
    }
    /**
     * @return {?}
     */
    CmacsRadioGroupComponent.prototype.updateChildrenStatus = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.radios) {
            Promise.resolve().then((/**
             * @return {?}
             */
            function () {
                _this.radios.forEach((/**
                 * @param {?} radio
                 * @return {?}
                 */
                function (radio) {
                    radio.checked = radio.value === _this.value;
                    if (isNotNil(_this.disabled)) {
                        radio.disabled = _this.disabled;
                    }
                    if (_this.name) {
                        radio.name = _this.name;
                    }
                    radio.markForCheck();
                }));
            }));
        }
    };
    /**
     * @return {?}
     */
    CmacsRadioGroupComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.radios.changes
            .pipe(startWith(null), takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.updateChildrenStatus();
            if (_this.selectSubscription) {
                _this.selectSubscription.unsubscribe();
            }
            _this.selectSubscription = merge.apply(void 0, tslib_1.__spread(_this.radios.map((/**
             * @param {?} radio
             * @return {?}
             */
            function (radio) { return radio.select$; })))).pipe(takeUntil(_this.destroy$))
                .subscribe((/**
             * @param {?} radio
             * @return {?}
             */
            function (radio) {
                if (_this.value !== radio.value) {
                    _this.value = radio.value;
                    _this.updateChildrenStatus();
                    _this.onChange(_this.value);
                }
            }));
            if (_this.touchedSubscription) {
                _this.touchedSubscription.unsubscribe();
            }
            _this.touchedSubscription = merge.apply(void 0, tslib_1.__spread(_this.radios.map((/**
             * @param {?} radio
             * @return {?}
             */
            function (radio) { return radio.touched$; })))).pipe(takeUntil(_this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            function () {
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () { return _this.onTouched(); }));
            }));
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsRadioGroupComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzDisabled || changes.nzName) {
            this.updateChildrenStatus();
        }
    };
    /**
     * @return {?}
     */
    CmacsRadioGroupComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /* tslint:disable-next-line:no-any */
    /* tslint:disable-next-line:no-any */
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsRadioGroupComponent.prototype.writeValue = /* tslint:disable-next-line:no-any */
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        this.updateChildrenStatus();
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CmacsRadioGroupComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CmacsRadioGroupComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    CmacsRadioGroupComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
        this.cdr.markForCheck();
    };
    CmacsRadioGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-radio-group',
                    exportAs: 'cmacsRadioGroup',
                    preserveWhitespaces: false,
                    template: "<ng-content></ng-content>",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return CmacsRadioGroupComponent; })),
                            multi: true
                        }
                    ],
                    host: {
                        '[class.ant-radio-group-large]': "size === 'large'",
                        '[class.ant-radio-group-small]': "size === 'small'",
                        '[class.ant-radio-group-solid]': "buttonStyle === 'solid'"
                    }
                }] }
    ];
    /** @nocollapse */
    CmacsRadioGroupComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    CmacsRadioGroupComponent.propDecorators = {
        radios: [{ type: ContentChildren, args: [forwardRef((/**
                     * @return {?}
                     */
                    function () { return CmacsRadioComponent; })), { descendants: true },] }],
        disabled: [{ type: Input }],
        buttonStyle: [{ type: Input }],
        size: [{ type: Input }],
        name: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], CmacsRadioGroupComponent.prototype, "disabled", void 0);
    return CmacsRadioGroupComponent;
}());
export { CmacsRadioGroupComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CmacsRadioGroupComponent.prototype.value;
    /**
     * @type {?}
     * @private
     */
    CmacsRadioGroupComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    CmacsRadioGroupComponent.prototype.selectSubscription;
    /**
     * @type {?}
     * @private
     */
    CmacsRadioGroupComponent.prototype.touchedSubscription;
    /** @type {?} */
    CmacsRadioGroupComponent.prototype.onChange;
    /** @type {?} */
    CmacsRadioGroupComponent.prototype.onTouched;
    /** @type {?} */
    CmacsRadioGroupComponent.prototype.radios;
    /** @type {?} */
    CmacsRadioGroupComponent.prototype.disabled;
    /** @type {?} */
    CmacsRadioGroupComponent.prototype.buttonStyle;
    /** @type {?} */
    CmacsRadioGroupComponent.prototype.size;
    /** @type {?} */
    CmacsRadioGroupComponent.prototype.name;
    /**
     * @type {?}
     * @private
     */
    CmacsRadioGroupComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtcmFkaW8tZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1yYWRpby9jbWFjcy1yYWRpby1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsVUFBVSxFQUVWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsS0FBSyxFQUdMLFNBQVMsRUFDVCxTQUFTLEVBRVQsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBaUIsTUFBTSxvQkFBb0IsQ0FBQztBQUUzRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUk5RDtJQW1ERSxrQ0FBb0IsR0FBc0IsRUFBRSxRQUFtQixFQUFFLFVBQXNCO1FBQW5FLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBNUJsQyxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUdqQyxhQUFROzs7UUFBd0IsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLEVBQUM7UUFDM0MsY0FBUzs7O1FBQWUsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLEVBQUM7UUFHMUIsZ0JBQVcsR0FBcUIsU0FBUyxDQUFDO1FBQzFDLFNBQUksR0FBa0IsU0FBUyxDQUFDO1FBcUJ2QyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsaUJBQWlC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QkFBK0IsRUFBRSxrQkFBa0I7d0JBQ25ELCtCQUErQixFQUFFLHlCQUF5QjtxQkFDM0Q7aUJBQ0Y7Ozs7Z0JBekNDLGlCQUFpQjtnQkFRakIsU0FBUztnQkFMVCxVQUFVOzs7eUJBK0NULGVBQWUsU0FBQyxVQUFVOzs7b0JBQUMsY0FBTSxPQUFBLG1CQUFtQixFQUFuQixDQUFtQixFQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFOzJCQUM1RSxLQUFLOzhCQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLOztJQUhtQjtRQUFmLFlBQVksRUFBRTs7OERBQW1CO0lBdUY3QywrQkFBQztDQUFBLEFBcEhELElBb0hDO1NBaEdZLHdCQUF3Qjs7Ozs7O0lBRW5DLHlDQUFtQjs7Ozs7SUFDbkIsNENBQWlDOzs7OztJQUNqQyxzREFBeUM7Ozs7O0lBQ3pDLHVEQUEwQzs7SUFDMUMsNENBQTJDOztJQUMzQyw2Q0FBbUM7O0lBQ25DLDBDQUFzSDs7SUFDdEgsNENBQTJDOztJQUMzQywrQ0FBbUQ7O0lBQ25ELHdDQUF5Qzs7SUFDekMsd0NBQXNCOzs7OztJQW1CVix1Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGZvcndhcmRSZWYsXHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBRdWVyeUxpc3QsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBtZXJnZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHN0YXJ0V2l0aCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgaXNOb3ROaWwsIElucHV0Qm9vbGVhbiwgTnpTaXplTERTVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDbWFjc1JhZGlvQ29tcG9uZW50IH0gZnJvbSAnLi9jbWFjcy1yYWRpby5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IHR5cGUgUmFkaW9CdXR0b25TdHlsZSA9ICdvdXRsaW5lJyB8ICdzb2xpZCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLXJhZGlvLWdyb3VwJyxcclxuICBleHBvcnRBczogJ2NtYWNzUmFkaW9Hcm91cCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXJhZGlvLWdyb3VwLmNvbXBvbmVudC5odG1sJyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ21hY3NSYWRpb0dyb3VwQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LXJhZGlvLWdyb3VwLWxhcmdlXSc6IGBzaXplID09PSAnbGFyZ2UnYCxcclxuICAgICdbY2xhc3MuYW50LXJhZGlvLWdyb3VwLXNtYWxsXSc6IGBzaXplID09PSAnc21hbGwnYCxcclxuICAgICdbY2xhc3MuYW50LXJhZGlvLWdyb3VwLXNvbGlkXSc6IGBidXR0b25TdHlsZSA9PT0gJ3NvbGlkJ2BcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1JhZGlvR3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICBwcml2YXRlIHZhbHVlOiBhbnk7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSBzZWxlY3RTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBwcml2YXRlIHRvdWNoZWRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBvbkNoYW5nZTogKF86IHN0cmluZykgPT4gdm9pZCA9ICgpID0+IG51bGw7XHJcbiAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcclxuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gQ21hY3NSYWRpb0NvbXBvbmVudCksIHsgZGVzY2VuZGFudHM6IHRydWUgfSkgcmFkaW9zOiBRdWVyeUxpc3Q8Q21hY3NSYWRpb0NvbXBvbmVudD47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGJ1dHRvblN0eWxlOiBSYWRpb0J1dHRvblN0eWxlID0gJ291dGxpbmUnO1xyXG4gIEBJbnB1dCgpIHNpemU6IE56U2l6ZUxEU1R5cGUgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xyXG5cclxuICB1cGRhdGVDaGlsZHJlblN0YXR1cygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnJhZGlvcykge1xyXG4gICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLnJhZGlvcy5mb3JFYWNoKHJhZGlvID0+IHtcclxuICAgICAgICAgIHJhZGlvLmNoZWNrZWQgPSByYWRpby52YWx1ZSA9PT0gdGhpcy52YWx1ZTtcclxuICAgICAgICAgIGlmIChpc05vdE5pbCh0aGlzLmRpc2FibGVkKSkge1xyXG4gICAgICAgICAgICByYWRpby5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodGhpcy5uYW1lKSB7XHJcbiAgICAgICAgICAgIHJhZGlvLm5hbWUgPSB0aGlzLm5hbWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByYWRpby5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1yYWRpby1ncm91cCcpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yYWRpb3MuY2hhbmdlc1xyXG4gICAgICAucGlwZShcclxuICAgICAgICBzdGFydFdpdGgobnVsbCksXHJcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDaGlsZHJlblN0YXR1cygpO1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdFN1YnNjcmlwdGlvbikge1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3RTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZWxlY3RTdWJzY3JpcHRpb24gPSBtZXJnZSguLi50aGlzLnJhZGlvcy5tYXAocmFkaW8gPT4gcmFkaW8uc2VsZWN0JCkpXHJcbiAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgICAgICAuc3Vic2NyaWJlKHJhZGlvID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUgIT09IHJhZGlvLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHJhZGlvLnZhbHVlO1xyXG4gICAgICAgICAgICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5TdGF0dXMoKTtcclxuICAgICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy50b3VjaGVkU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgICAgICB0aGlzLnRvdWNoZWRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50b3VjaGVkU3Vic2NyaXB0aW9uID0gbWVyZ2UoLi4udGhpcy5yYWRpb3MubWFwKHJhZGlvID0+IHJhZGlvLnRvdWNoZWQkKSlcclxuICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMub25Ub3VjaGVkKCkpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubnpEaXNhYmxlZCB8fCBjaGFuZ2VzLm56TmFtZSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuU3RhdHVzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy51cGRhdGVDaGlsZHJlblN0YXR1cygpO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcbn1cclxuIl19