/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, Host, Input, Optional, Renderer2, ViewEncapsulation } from '@angular/core';
import { FormControl, FormControlName, NgControl, NgModel } from '@angular/forms';
import { startWith } from 'rxjs/operators';
import { toBoolean, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { NzColDirective, NzRowDirective } from 'ng-zorro-antd/grid';
import { CmacsFormItemComponent } from './cmacs-form-item.component';
export class CmacsFormControlComponent extends NzColDirective {
    /**
     * @param {?} nzUpdateHostClassService
     * @param {?} elementRef
     * @param {?} cmacsFormItemComponent
     * @param {?} nzRowDirective
     * @param {?} cdr
     * @param {?} renderer
     */
    constructor(nzUpdateHostClassService, elementRef, cmacsFormItemComponent, nzRowDirective, cdr, renderer) {
        super(nzUpdateHostClassService, elementRef, cmacsFormItemComponent || nzRowDirective, renderer);
        this.cdr = cdr;
        this._hasFeedback = false;
        this.controlClassMap = {};
        renderer.addClass(elementRef.nativeElement, 'ant-form-item-control-wrapper');
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set cmacsHasFeedback(value) {
        this._hasFeedback = toBoolean(value);
        this.setControlClassMap();
    }
    /**
     * @return {?}
     */
    get cmacsHasFeedback() {
        return this._hasFeedback;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set cmacsValidateStatus(value) {
        if (value instanceof FormControl || value instanceof NgModel) {
            this.validateControl = value;
            this.validateString = null;
            this.watchControl();
        }
        else if (value instanceof FormControlName) {
            this.validateControl = value.control;
            this.validateString = null;
            this.watchControl();
        }
        else {
            this.validateString = value;
            this.validateControl = null;
            this.setControlClassMap();
        }
    }
    /**
     * @return {?}
     */
    removeSubscribe() {
        if (this.validateChanges) {
            this.validateChanges.unsubscribe();
            this.validateChanges = null;
        }
    }
    /**
     * @return {?}
     */
    watchControl() {
        this.removeSubscribe();
        /** miss detect https://github.com/angular/angular/issues/10887 **/
        if (this.validateControl && this.validateControl.statusChanges) {
            this.validateChanges = this.validateControl.statusChanges.pipe(startWith(null)).subscribe((/**
             * @return {?}
             */
            () => {
                this.setControlClassMap();
                this.cdr.markForCheck();
            }));
        }
    }
    /**
     * @param {?} status
     * @return {?}
     */
    validateControlStatus(status) {
        return (/** @type {?} */ ((!!this.validateControl &&
            (this.validateControl.dirty || this.validateControl.touched) &&
            this.validateControl.status === status)));
    }
    /**
     * @return {?}
     */
    setControlClassMap() {
        if (this.validateString === 'warning') {
            this.status = 'warning';
            this.iconType = '';
        }
        else if (this.validateString === 'validating' ||
            this.validateString === 'pending' ||
            this.validateControlStatus('PENDING')) {
            this.status = 'validating';
            this.iconType = 'loading';
        }
        else if (this.validateString === 'error' || this.validateControlStatus('INVALID')) {
            this.status = 'error';
            this.iconType = 'exclamation';
        }
        else if (this.validateString === 'success' || this.validateControlStatus('VALID')) {
            this.status = 'success';
            this.iconType = '';
        }
        else {
            this.status = 'init';
            this.iconType = '';
        }
        this.controlClassMap = {
            [`has-warning`]: this.status === 'warning',
            [`is-validating`]: this.status === 'validating',
            [`has-error`]: this.status === 'error',
            [`has-success`]: this.status === 'success',
            [`has-feedback`]: this.cmacsHasFeedback
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this.setControlClassMap();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.removeSubscribe();
        super.ngOnDestroy();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.defaultValidateControl && !this.validateControl && !this.validateString) {
            this.cmacsValidateStatus = this.defaultValidateControl;
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        super.ngAfterViewInit();
    }
}
CmacsFormControlComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmacs-form-control',
                exportAs: 'cmacsFormControl',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [NzUpdateHostClassService],
                template: "<div class=\"ant-form-item-control\" [ngClass]=\"controlClassMap\">\r\n  <span class=\"ant-form-item-children\">\r\n    <ng-content></ng-content>\r\n    <span class=\"ant-form-item-children-icon\">\r\n      <i *ngIf=\"cmacsHasFeedback && iconType\" nz-icon [type]=\"iconType\"></i>\r\n    </span>\r\n  </span>\r\n  <ng-content select=\"cmacs-form-explain\"></ng-content>\r\n</div>\r\n",
                styles: [".ant-form-item{margin:0 0 20px}.ant-form-item-label{display:block;text-align:left;width:100%;color:#acb3bf!important;font-size:12px!important}.ant-form-item-label>label{color:#97a0ae}.ant-form label{font-size:12px;font-family:Roboto-Regular,Helvetica,Arial,sans-serif}.ant-form-item-required::before{content:none}.ant-form-item-label>label.ant-form-item-required::after{display:inline-block;color:#f5222d;font-size:9px;font-family:SimSun,sans-serif;line-height:1;content:'*';position:relative;top:-5px;left:5px}.ant-form-item-label>label::after{content:none}.ant-form-item-control{line-height:1.5}", `
      cmacs-form-control {
        display: block;
      }
    `]
            }] }
];
/** @nocollapse */
CmacsFormControlComponent.ctorParameters = () => [
    { type: NzUpdateHostClassService },
    { type: ElementRef },
    { type: CmacsFormItemComponent, decorators: [{ type: Optional }, { type: Host }] },
    { type: NzRowDirective, decorators: [{ type: Optional }, { type: Host }] },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
CmacsFormControlComponent.propDecorators = {
    defaultValidateControl: [{ type: ContentChild, args: [NgControl,] }],
    cmacsHasFeedback: [{ type: Input }],
    cmacsValidateStatus: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    CmacsFormControlComponent.prototype._hasFeedback;
    /** @type {?} */
    CmacsFormControlComponent.prototype.validateChanges;
    /** @type {?} */
    CmacsFormControlComponent.prototype.validateString;
    /** @type {?} */
    CmacsFormControlComponent.prototype.status;
    /** @type {?} */
    CmacsFormControlComponent.prototype.controlClassMap;
    /** @type {?} */
    CmacsFormControlComponent.prototype.iconType;
    /** @type {?} */
    CmacsFormControlComponent.prototype.validateControl;
    /** @type {?} */
    CmacsFormControlComponent.prototype.defaultValidateControl;
    /**
     * @type {?}
     * @private
     */
    CmacsFormControlComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZm9ybS1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtZm9ybS9jbWFjcy1mb3JtLWNvbnRyb2wuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBR0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixJQUFJLEVBQ0osS0FBSyxFQUdMLFFBQVEsRUFDUixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLFNBQVMsRUFBZSx3QkFBd0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RGLE9BQU8sRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFcEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFtQnJFLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxjQUFjOzs7Ozs7Ozs7SUE0RjNELFlBQ0Usd0JBQWtELEVBQ2xELFVBQXNCLEVBQ0Ysc0JBQThDLEVBQzlDLGNBQThCLEVBQzFDLEdBQXNCLEVBQzlCLFFBQW1CO1FBRW5CLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxVQUFVLEVBQUUsc0JBQXNCLElBQUksY0FBYyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBSHhGLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBL0Z4QixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUk3QixvQkFBZSxHQUFnQixFQUFFLENBQUM7UUErRmhDLFFBQVEsQ0FBQyxR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QUFtQixHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztTQUN4RDtJQUNILENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzFCLENBQUM7OztZQTNJRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDckMsNFlBQWtEO2tuQkFHaEQ7Ozs7S0FJQzthQUVKOzs7O1lBckJnQyx3QkFBd0I7WUFidkQsVUFBVTtZQWdCSCxzQkFBc0IsdUJBa0gxQixRQUFRLFlBQUksSUFBSTtZQXBISSxjQUFjLHVCQXFIbEMsUUFBUSxZQUFJLElBQUk7WUF0SW5CLGlCQUFpQjtZQVNqQixTQUFTOzs7cUNBc0NSLFlBQVksU0FBQyxTQUFTOytCQUV0QixLQUFLO2tDQVVMLEtBQUs7Ozs7Ozs7SUFuQk4saURBQTZCOztJQUM3QixvREFBcUM7O0lBQ3JDLG1EQUE4Qjs7SUFDOUIsMkNBQWdFOztJQUNoRSxvREFBa0M7O0lBQ2xDLDZDQUFpQjs7SUFDakIsb0RBQThDOztJQUM5QywyREFBaUU7Ozs7O0lBd0YvRCx3Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUNvbnRyb2xOYW1lLCBOZ0NvbnRyb2wsIE5nTW9kZWwgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBzdGFydFdpdGggfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyB0b0Jvb2xlYW4sIE5nQ2xhc3NUeXBlLCBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOekNvbERpcmVjdGl2ZSwgTnpSb3dEaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2dyaWQnO1xyXG5cclxuaW1wb3J0IHsgQ21hY3NGb3JtSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY21hY3MtZm9ybS1pdGVtLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWZvcm0tY29udHJvbCcsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0Zvcm1Db250cm9sJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWZvcm0tY29udHJvbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtZm9ybS1jb250cm9sLmNvbXBvbmVudC5jc3MnXSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgY21hY3MtZm9ybS1jb250cm9sIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzRm9ybUNvbnRyb2xDb21wb25lbnQgZXh0ZW5kcyBOekNvbERpcmVjdGl2ZVxyXG4gIGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBfaGFzRmVlZGJhY2sgPSBmYWxzZTtcclxuICB2YWxpZGF0ZUNoYW5nZXM6IFN1YnNjcmlwdGlvbiB8IG51bGw7XHJcbiAgdmFsaWRhdGVTdHJpbmc6IHN0cmluZyB8IG51bGw7XHJcbiAgc3RhdHVzOiAnd2FybmluZycgfCAndmFsaWRhdGluZycgfCAnZXJyb3InIHwgJ3N1Y2Nlc3MnIHwgJ2luaXQnO1xyXG4gIGNvbnRyb2xDbGFzc01hcDogTmdDbGFzc1R5cGUgPSB7fTtcclxuICBpY29uVHlwZTogc3RyaW5nO1xyXG4gIHZhbGlkYXRlQ29udHJvbDogRm9ybUNvbnRyb2wgfCBOZ01vZGVsIHwgbnVsbDtcclxuICBAQ29udGVudENoaWxkKE5nQ29udHJvbCkgZGVmYXVsdFZhbGlkYXRlQ29udHJvbDogRm9ybUNvbnRyb2xOYW1lO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBjbWFjc0hhc0ZlZWRiYWNrKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9oYXNGZWVkYmFjayA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgICB0aGlzLnNldENvbnRyb2xDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNtYWNzSGFzRmVlZGJhY2soKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faGFzRmVlZGJhY2s7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBjbWFjc1ZhbGlkYXRlU3RhdHVzKHZhbHVlOiBzdHJpbmcgfCBGb3JtQ29udHJvbCB8IEZvcm1Db250cm9sTmFtZSB8IE5nTW9kZWwpIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEZvcm1Db250cm9sIHx8IHZhbHVlIGluc3RhbmNlb2YgTmdNb2RlbCkge1xyXG4gICAgICB0aGlzLnZhbGlkYXRlQ29udHJvbCA9IHZhbHVlO1xyXG4gICAgICB0aGlzLnZhbGlkYXRlU3RyaW5nID0gbnVsbDtcclxuICAgICAgdGhpcy53YXRjaENvbnRyb2woKTtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBGb3JtQ29udHJvbE5hbWUpIHtcclxuICAgICAgdGhpcy52YWxpZGF0ZUNvbnRyb2wgPSB2YWx1ZS5jb250cm9sO1xyXG4gICAgICB0aGlzLnZhbGlkYXRlU3RyaW5nID0gbnVsbDtcclxuICAgICAgdGhpcy53YXRjaENvbnRyb2woKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmFsaWRhdGVTdHJpbmcgPSB2YWx1ZTtcclxuICAgICAgdGhpcy52YWxpZGF0ZUNvbnRyb2wgPSBudWxsO1xyXG4gICAgICB0aGlzLnNldENvbnRyb2xDbGFzc01hcCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlU3Vic2NyaWJlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudmFsaWRhdGVDaGFuZ2VzKSB7XHJcbiAgICAgIHRoaXMudmFsaWRhdGVDaGFuZ2VzLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIHRoaXMudmFsaWRhdGVDaGFuZ2VzID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHdhdGNoQ29udHJvbCgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVtb3ZlU3Vic2NyaWJlKCk7XHJcbiAgICAvKiogbWlzcyBkZXRlY3QgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTA4ODcgKiovXHJcbiAgICBpZiAodGhpcy52YWxpZGF0ZUNvbnRyb2wgJiYgdGhpcy52YWxpZGF0ZUNvbnRyb2wuc3RhdHVzQ2hhbmdlcykge1xyXG4gICAgICB0aGlzLnZhbGlkYXRlQ2hhbmdlcyA9IHRoaXMudmFsaWRhdGVDb250cm9sLnN0YXR1c0NoYW5nZXMucGlwZShzdGFydFdpdGgobnVsbCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRDb250cm9sQ2xhc3NNYXAoKTtcclxuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZUNvbnRyb2xTdGF0dXMoc3RhdHVzOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoISF0aGlzLnZhbGlkYXRlQ29udHJvbCAmJlxyXG4gICAgICAodGhpcy52YWxpZGF0ZUNvbnRyb2wuZGlydHkgfHwgdGhpcy52YWxpZGF0ZUNvbnRyb2wudG91Y2hlZCkgJiZcclxuICAgICAgdGhpcy52YWxpZGF0ZUNvbnRyb2wuc3RhdHVzID09PSBzdGF0dXMpIGFzIGJvb2xlYW47XHJcbiAgfVxyXG5cclxuICBzZXRDb250cm9sQ2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy52YWxpZGF0ZVN0cmluZyA9PT0gJ3dhcm5pbmcnKSB7XHJcbiAgICAgIHRoaXMuc3RhdHVzID0gJ3dhcm5pbmcnO1xyXG4gICAgICB0aGlzLmljb25UeXBlID0gJyc7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICB0aGlzLnZhbGlkYXRlU3RyaW5nID09PSAndmFsaWRhdGluZycgfHxcclxuICAgICAgdGhpcy52YWxpZGF0ZVN0cmluZyA9PT0gJ3BlbmRpbmcnIHx8XHJcbiAgICAgIHRoaXMudmFsaWRhdGVDb250cm9sU3RhdHVzKCdQRU5ESU5HJylcclxuICAgICkge1xyXG4gICAgICB0aGlzLnN0YXR1cyA9ICd2YWxpZGF0aW5nJztcclxuICAgICAgdGhpcy5pY29uVHlwZSA9ICdsb2FkaW5nJztcclxuICAgIH0gZWxzZSBpZiAodGhpcy52YWxpZGF0ZVN0cmluZyA9PT0gJ2Vycm9yJyB8fCB0aGlzLnZhbGlkYXRlQ29udHJvbFN0YXR1cygnSU5WQUxJRCcpKSB7XHJcbiAgICAgIHRoaXMuc3RhdHVzID0gJ2Vycm9yJztcclxuICAgICAgdGhpcy5pY29uVHlwZSA9ICdleGNsYW1hdGlvbic7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMudmFsaWRhdGVTdHJpbmcgPT09ICdzdWNjZXNzJyB8fCB0aGlzLnZhbGlkYXRlQ29udHJvbFN0YXR1cygnVkFMSUQnKSkge1xyXG4gICAgICB0aGlzLnN0YXR1cyA9ICdzdWNjZXNzJztcclxuICAgICAgdGhpcy5pY29uVHlwZSA9ICcnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zdGF0dXMgPSAnaW5pdCc7XHJcbiAgICAgIHRoaXMuaWNvblR5cGUgPSAnJztcclxuICAgIH1cclxuICAgIHRoaXMuY29udHJvbENsYXNzTWFwID0ge1xyXG4gICAgICBbYGhhcy13YXJuaW5nYF06IHRoaXMuc3RhdHVzID09PSAnd2FybmluZycsXHJcbiAgICAgIFtgaXMtdmFsaWRhdGluZ2BdOiB0aGlzLnN0YXR1cyA9PT0gJ3ZhbGlkYXRpbmcnLFxyXG4gICAgICBbYGhhcy1lcnJvcmBdOiB0aGlzLnN0YXR1cyA9PT0gJ2Vycm9yJyxcclxuICAgICAgW2BoYXMtc3VjY2Vzc2BdOiB0aGlzLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnLFxyXG4gICAgICBbYGhhcy1mZWVkYmFja2BdOiB0aGlzLmNtYWNzSGFzRmVlZGJhY2tcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLFxyXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIEBPcHRpb25hbCgpIEBIb3N0KCkgY21hY3NGb3JtSXRlbUNvbXBvbmVudDogQ21hY3NGb3JtSXRlbUNvbXBvbmVudCxcclxuICAgIEBPcHRpb25hbCgpIEBIb3N0KCkgbnpSb3dEaXJlY3RpdmU6IE56Um93RGlyZWN0aXZlLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMlxyXG4gICkge1xyXG4gICAgc3VwZXIobnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLCBlbGVtZW50UmVmLCBjbWFjc0Zvcm1JdGVtQ29tcG9uZW50IHx8IG56Um93RGlyZWN0aXZlLCByZW5kZXJlcik7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtZm9ybS1pdGVtLWNvbnRyb2wtd3JhcHBlcicpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xyXG4gICAgdGhpcy5zZXRDb250cm9sQ2xhc3NNYXAoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW1vdmVTdWJzY3JpYmUoKTtcclxuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kZWZhdWx0VmFsaWRhdGVDb250cm9sICYmICF0aGlzLnZhbGlkYXRlQ29udHJvbCAmJiAhdGhpcy52YWxpZGF0ZVN0cmluZykge1xyXG4gICAgICB0aGlzLmNtYWNzVmFsaWRhdGVTdGF0dXMgPSB0aGlzLmRlZmF1bHRWYWxpZGF0ZUNvbnRyb2w7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBzdXBlci5uZ0FmdGVyVmlld0luaXQoKTtcclxuICB9XHJcbn1cclxuIl19