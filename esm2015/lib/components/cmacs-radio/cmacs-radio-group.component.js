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
export class CmacsRadioGroupComponent {
    /**
     * @param {?} cdr
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(cdr, renderer, elementRef) {
        this.cdr = cdr;
        this.destroy$ = new Subject();
        this.onChange = (/**
         * @return {?}
         */
        () => null);
        this.onTouched = (/**
         * @return {?}
         */
        () => null);
        this.buttonStyle = 'outline';
        this.size = 'default';
        renderer.addClass(elementRef.nativeElement, 'ant-radio-group');
    }
    /**
     * @return {?}
     */
    updateChildrenStatus() {
        if (this.radios) {
            Promise.resolve().then((/**
             * @return {?}
             */
            () => {
                this.radios.forEach((/**
                 * @param {?} radio
                 * @return {?}
                 */
                radio => {
                    radio.checked = radio.value === this.value;
                    if (isNotNil(this.disabled)) {
                        radio.disabled = this.disabled;
                    }
                    if (this.name) {
                        radio.name = this.name;
                    }
                    radio.markForCheck();
                }));
            }));
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.radios.changes
            .pipe(startWith(null), takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.updateChildrenStatus();
            if (this.selectSubscription) {
                this.selectSubscription.unsubscribe();
            }
            this.selectSubscription = merge(...this.radios.map((/**
             * @param {?} radio
             * @return {?}
             */
            radio => radio.select$)))
                .pipe(takeUntil(this.destroy$))
                .subscribe((/**
             * @param {?} radio
             * @return {?}
             */
            radio => {
                if (this.value !== radio.value) {
                    this.value = radio.value;
                    this.updateChildrenStatus();
                    this.onChange(this.value);
                }
            }));
            if (this.touchedSubscription) {
                this.touchedSubscription.unsubscribe();
            }
            this.touchedSubscription = merge(...this.radios.map((/**
             * @param {?} radio
             * @return {?}
             */
            radio => radio.touched$)))
                .pipe(takeUntil(this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            () => {
                Promise.resolve().then((/**
                 * @return {?}
                 */
                () => this.onTouched()));
            }));
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzDisabled || changes.nzName) {
            this.updateChildrenStatus();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /* tslint:disable-next-line:no-any */
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
        this.updateChildrenStatus();
        this.cdr.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.cdr.markForCheck();
    }
}
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
                        () => CmacsRadioGroupComponent)),
                        multi: true
                    }
                ],
                host: {
                    '[class.ant-radio-group-large]': `size === 'large'`,
                    '[class.ant-radio-group-small]': `size === 'small'`,
                    '[class.ant-radio-group-solid]': `buttonStyle === 'solid'`
                }
            }] }
];
/** @nocollapse */
CmacsRadioGroupComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: ElementRef }
];
CmacsRadioGroupComponent.propDecorators = {
    radios: [{ type: ContentChildren, args: [forwardRef((/**
                 * @return {?}
                 */
                () => CmacsRadioComponent)), { descendants: true },] }],
    disabled: [{ type: Input }],
    buttonStyle: [{ type: Input }],
    size: [{ type: Input }],
    name: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], CmacsRadioGroupComponent.prototype, "disabled", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtcmFkaW8tZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1yYWRpby9jbWFjcy1yYWRpby1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsVUFBVSxFQUVWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsS0FBSyxFQUdMLFNBQVMsRUFDVCxTQUFTLEVBRVQsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBaUIsTUFBTSxvQkFBb0IsQ0FBQztBQUUzRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQXdCOUQsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7O0lBK0JuQyxZQUFvQixHQUFzQixFQUFFLFFBQW1CLEVBQUUsVUFBc0I7UUFBbkUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUE1QmxDLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBR2pDLGFBQVE7OztRQUF3QixHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUM7UUFDM0MsY0FBUzs7O1FBQWUsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFDO1FBRzFCLGdCQUFXLEdBQXFCLFNBQVMsQ0FBQztRQUMxQyxTQUFJLEdBQWtCLFNBQVMsQ0FBQztRQXFCdkMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFB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QWlCO1lBUWpCLFNBQVM7WUFMVCxVQUFVOzs7cUJBK0NULGVBQWUsU0FBQyxVQUFVOzs7Z0JBQUMsR0FBRyxFQUFFLENBQUMsbUJBQW1CLEVBQUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7dUJBQzVFLEtBQUs7MEJBQ0wsS0FBSzttQkFDTCxLQUFLO21CQUNMLEtBQUs7O0FBSG1CO0lBQWYsWUFBWSxFQUFFOzswREFBbUI7Ozs7OztJQVAzQyx5Q0FBbUI7Ozs7O0lBQ25CLDRDQUFpQzs7Ozs7SUFDakMsc0RBQXlDOzs7OztJQUN6Qyx1REFBMEM7O0lBQzFDLDRDQUEyQzs7SUFDM0MsNkNBQW1DOztJQUNuQywwQ0FBc0g7O0lBQ3RILDRDQUEyQzs7SUFDM0MsK0NBQW1EOztJQUNuRCx3Q0FBeUM7O0lBQ3pDLHdDQUFzQjs7Ozs7SUFtQlYsdUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBmb3J3YXJkUmVmLFxyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgbWVyZ2UsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBzdGFydFdpdGgsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IGlzTm90TmlsLCBJbnB1dEJvb2xlYW4sIE56U2l6ZUxEU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ21hY3NSYWRpb0NvbXBvbmVudCB9IGZyb20gJy4vY21hY3MtcmFkaW8uY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCB0eXBlIFJhZGlvQnV0dG9uU3R5bGUgPSAnb3V0bGluZScgfCAnc29saWQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1yYWRpby1ncm91cCcsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1JhZGlvR3JvdXAnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1yYWRpby1ncm91cC5jb21wb25lbnQuaHRtbCcsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENtYWNzUmFkaW9Hcm91cENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXSxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1yYWRpby1ncm91cC1sYXJnZV0nOiBgc2l6ZSA9PT0gJ2xhcmdlJ2AsXHJcbiAgICAnW2NsYXNzLmFudC1yYWRpby1ncm91cC1zbWFsbF0nOiBgc2l6ZSA9PT0gJ3NtYWxsJ2AsXHJcbiAgICAnW2NsYXNzLmFudC1yYWRpby1ncm91cC1zb2xpZF0nOiBgYnV0dG9uU3R5bGUgPT09ICdzb2xpZCdgXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NSYWRpb0dyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgcHJpdmF0ZSB2YWx1ZTogYW55O1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgc2VsZWN0U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgcHJpdmF0ZSB0b3VjaGVkU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgb25DaGFuZ2U6IChfOiBzdHJpbmcpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xyXG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IG51bGw7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IENtYWNzUmFkaW9Db21wb25lbnQpLCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIHJhZGlvczogUXVlcnlMaXN0PENtYWNzUmFkaW9Db21wb25lbnQ+O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBidXR0b25TdHlsZTogUmFkaW9CdXR0b25TdHlsZSA9ICdvdXRsaW5lJztcclxuICBASW5wdXQoKSBzaXplOiBOelNpemVMRFNUeXBlID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcclxuXHJcbiAgdXBkYXRlQ2hpbGRyZW5TdGF0dXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5yYWRpb3MpIHtcclxuICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yYWRpb3MuZm9yRWFjaChyYWRpbyA9PiB7XHJcbiAgICAgICAgICByYWRpby5jaGVja2VkID0gcmFkaW8udmFsdWUgPT09IHRoaXMudmFsdWU7XHJcbiAgICAgICAgICBpZiAoaXNOb3ROaWwodGhpcy5kaXNhYmxlZCkpIHtcclxuICAgICAgICAgICAgcmFkaW8uZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHRoaXMubmFtZSkge1xyXG4gICAgICAgICAgICByYWRpby5uYW1lID0gdGhpcy5uYW1lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmFkaW8ubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtcmFkaW8tZ3JvdXAnKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucmFkaW9zLmNoYW5nZXNcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgc3RhcnRXaXRoKG51bGwpLFxyXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5TdGF0dXMoKTtcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RTdWJzY3JpcHRpb24pIHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2VsZWN0U3Vic2NyaXB0aW9uID0gbWVyZ2UoLi4udGhpcy5yYWRpb3MubWFwKHJhZGlvID0+IHJhZGlvLnNlbGVjdCQpKVxyXG4gICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAgICAgLnN1YnNjcmliZShyYWRpbyA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlICE9PSByYWRpby52YWx1ZSkge1xyXG4gICAgICAgICAgICAgIHRoaXMudmFsdWUgPSByYWRpby52YWx1ZTtcclxuICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuU3RhdHVzKCk7XHJcbiAgICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMudG91Y2hlZFN1YnNjcmlwdGlvbikge1xyXG4gICAgICAgICAgdGhpcy50b3VjaGVkU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudG91Y2hlZFN1YnNjcmlwdGlvbiA9IG1lcmdlKC4uLnRoaXMucmFkaW9zLm1hcChyYWRpbyA9PiByYWRpby50b3VjaGVkJCkpXHJcbiAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLm9uVG91Y2hlZCgpKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLm56RGlzYWJsZWQgfHwgY2hhbmdlcy5uek5hbWUpIHtcclxuICAgICAgdGhpcy51cGRhdGVDaGlsZHJlblN0YXR1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5TdGF0dXMoKTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==