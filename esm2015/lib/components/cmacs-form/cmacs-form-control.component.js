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
                styles: [".ant-form-item-label{display:block;text-align:left;width:100%;color:#97a0ae!important;font-size:12px!important}.ant-form-item-label>label{color:#97a0ae}.ant-form label{font-size:12px;font-family:Roboto}.ant-form-item-required::before{content:none}.ant-form-item-label>label.ant-form-item-required::after{display:inline-block;color:#f5222d;font-size:9px;font-family:SimSun,sans-serif;line-height:1;content:'*';position:relative;top:-5px;left:5px}", `
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZm9ybS1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtZm9ybS9jbWFjcy1mb3JtLWNvbnRyb2wuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBR0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixJQUFJLEVBQ0osS0FBSyxFQUdMLFFBQVEsRUFDUixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLFNBQVMsRUFBZSx3QkFBd0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RGLE9BQU8sRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFcEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFtQnJFLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxjQUFjOzs7Ozs7Ozs7SUE0RjNELFlBQ0Usd0JBQWtELEVBQ2xELFVBQXNCLEVBQ0Ysc0JBQThDLEVBQzlDLGNBQThCLEVBQzFDLEdBQXNCLEVBQzlCLFFBQW1CO1FBRW5CLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxVQUFVLEVBQUUsc0JBQXNCLElBQUksY0FBYyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBSHhGLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBL0Z4QixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUk3QixvQkFBZSxHQUFnQixFQUFFLENBQUM7UUErRmhDLFFBQVEsQ0FBQyxR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QUFtQixHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztTQUN4RDtJQUNILENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzFCLENBQUM7OztZQTNJRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDckMsNFlBQWtEOzBkQUdoRDs7OztLQUlDO2FBRUo7Ozs7WUFyQmdDLHdCQUF3QjtZQWJ2RCxVQUFVO1lBZ0JILHNCQUFzQix1QkFrSDFCLFFBQVEsWUFBSSxJQUFJO1lBcEhJLGNBQWMsdUJBcUhsQyxRQUFRLFlBQUksSUFBSTtZQXRJbkIsaUJBQWlCO1lBU2pCLFNBQVM7OztxQ0FzQ1IsWUFBWSxTQUFDLFNBQVM7K0JBRXRCLEtBQUs7a0NBVUwsS0FBSzs7Ozs7OztJQW5CTixpREFBNkI7O0lBQzdCLG9EQUFxQzs7SUFDckMsbURBQThCOztJQUM5QiwyQ0FBZ0U7O0lBQ2hFLG9EQUFrQzs7SUFDbEMsNkNBQWlCOztJQUNqQixvREFBOEM7O0lBQzlDLDJEQUFpRTs7Ozs7SUF3Ri9ELHdDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtQ29udHJvbE5hbWUsIE5nQ29udHJvbCwgTmdNb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IHRvQm9vbGVhbiwgTmdDbGFzc1R5cGUsIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56Q29sRGlyZWN0aXZlLCBOelJvd0RpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZ3JpZCc7XHJcblxyXG5pbXBvcnQgeyBDbWFjc0Zvcm1JdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jbWFjcy1mb3JtLWl0ZW0uY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtZm9ybS1jb250cm9sJyxcclxuICBleHBvcnRBczogJ2NtYWNzRm9ybUNvbnRyb2wnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJvdmlkZXJzOiBbTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtZm9ybS1jb250cm9sLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1mb3JtLWNvbnRyb2wuY29tcG9uZW50LmNzcyddLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBjbWFjcy1mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NGb3JtQ29udHJvbENvbXBvbmVudCBleHRlbmRzIE56Q29sRGlyZWN0aXZlXHJcbiAgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuICBwcml2YXRlIF9oYXNGZWVkYmFjayA9IGZhbHNlO1xyXG4gIHZhbGlkYXRlQ2hhbmdlczogU3Vic2NyaXB0aW9uIHwgbnVsbDtcclxuICB2YWxpZGF0ZVN0cmluZzogc3RyaW5nIHwgbnVsbDtcclxuICBzdGF0dXM6ICd3YXJuaW5nJyB8ICd2YWxpZGF0aW5nJyB8ICdlcnJvcicgfCAnc3VjY2VzcycgfCAnaW5pdCc7XHJcbiAgY29udHJvbENsYXNzTWFwOiBOZ0NsYXNzVHlwZSA9IHt9O1xyXG4gIGljb25UeXBlOiBzdHJpbmc7XHJcbiAgdmFsaWRhdGVDb250cm9sOiBGb3JtQ29udHJvbCB8IE5nTW9kZWwgfCBudWxsO1xyXG4gIEBDb250ZW50Q2hpbGQoTmdDb250cm9sKSBkZWZhdWx0VmFsaWRhdGVDb250cm9sOiBGb3JtQ29udHJvbE5hbWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGNtYWNzSGFzRmVlZGJhY2sodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2hhc0ZlZWRiYWNrID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICAgIHRoaXMuc2V0Q29udHJvbENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgY21hY3NIYXNGZWVkYmFjaygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9oYXNGZWVkYmFjaztcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGNtYWNzVmFsaWRhdGVTdGF0dXModmFsdWU6IHN0cmluZyB8IEZvcm1Db250cm9sIHwgRm9ybUNvbnRyb2xOYW1lIHwgTmdNb2RlbCkge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRm9ybUNvbnRyb2wgfHwgdmFsdWUgaW5zdGFuY2VvZiBOZ01vZGVsKSB7XHJcbiAgICAgIHRoaXMudmFsaWRhdGVDb250cm9sID0gdmFsdWU7XHJcbiAgICAgIHRoaXMudmFsaWRhdGVTdHJpbmcgPSBudWxsO1xyXG4gICAgICB0aGlzLndhdGNoQ29udHJvbCgpO1xyXG4gICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEZvcm1Db250cm9sTmFtZSkge1xyXG4gICAgICB0aGlzLnZhbGlkYXRlQ29udHJvbCA9IHZhbHVlLmNvbnRyb2w7XHJcbiAgICAgIHRoaXMudmFsaWRhdGVTdHJpbmcgPSBudWxsO1xyXG4gICAgICB0aGlzLndhdGNoQ29udHJvbCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy52YWxpZGF0ZVN0cmluZyA9IHZhbHVlO1xyXG4gICAgICB0aGlzLnZhbGlkYXRlQ29udHJvbCA9IG51bGw7XHJcbiAgICAgIHRoaXMuc2V0Q29udHJvbENsYXNzTWFwKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW1vdmVTdWJzY3JpYmUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy52YWxpZGF0ZUNoYW5nZXMpIHtcclxuICAgICAgdGhpcy52YWxpZGF0ZUNoYW5nZXMudW5zdWJzY3JpYmUoKTtcclxuICAgICAgdGhpcy52YWxpZGF0ZUNoYW5nZXMgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgd2F0Y2hDb250cm9sKCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW1vdmVTdWJzY3JpYmUoKTtcclxuICAgIC8qKiBtaXNzIGRldGVjdCBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xMDg4NyAqKi9cclxuICAgIGlmICh0aGlzLnZhbGlkYXRlQ29udHJvbCAmJiB0aGlzLnZhbGlkYXRlQ29udHJvbC5zdGF0dXNDaGFuZ2VzKSB7XHJcbiAgICAgIHRoaXMudmFsaWRhdGVDaGFuZ2VzID0gdGhpcy52YWxpZGF0ZUNvbnRyb2wuc3RhdHVzQ2hhbmdlcy5waXBlKHN0YXJ0V2l0aChudWxsKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLnNldENvbnRyb2xDbGFzc01hcCgpO1xyXG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhbGlkYXRlQ29udHJvbFN0YXR1cyhzdGF0dXM6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICghIXRoaXMudmFsaWRhdGVDb250cm9sICYmXHJcbiAgICAgICh0aGlzLnZhbGlkYXRlQ29udHJvbC5kaXJ0eSB8fCB0aGlzLnZhbGlkYXRlQ29udHJvbC50b3VjaGVkKSAmJlxyXG4gICAgICB0aGlzLnZhbGlkYXRlQ29udHJvbC5zdGF0dXMgPT09IHN0YXR1cykgYXMgYm9vbGVhbjtcclxuICB9XHJcblxyXG4gIHNldENvbnRyb2xDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnZhbGlkYXRlU3RyaW5nID09PSAnd2FybmluZycpIHtcclxuICAgICAgdGhpcy5zdGF0dXMgPSAnd2FybmluZyc7XHJcbiAgICAgIHRoaXMuaWNvblR5cGUgPSAnJztcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIHRoaXMudmFsaWRhdGVTdHJpbmcgPT09ICd2YWxpZGF0aW5nJyB8fFxyXG4gICAgICB0aGlzLnZhbGlkYXRlU3RyaW5nID09PSAncGVuZGluZycgfHxcclxuICAgICAgdGhpcy52YWxpZGF0ZUNvbnRyb2xTdGF0dXMoJ1BFTkRJTkcnKVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuc3RhdHVzID0gJ3ZhbGlkYXRpbmcnO1xyXG4gICAgICB0aGlzLmljb25UeXBlID0gJ2xvYWRpbmcnO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnZhbGlkYXRlU3RyaW5nID09PSAnZXJyb3InIHx8IHRoaXMudmFsaWRhdGVDb250cm9sU3RhdHVzKCdJTlZBTElEJykpIHtcclxuICAgICAgdGhpcy5zdGF0dXMgPSAnZXJyb3InO1xyXG4gICAgICB0aGlzLmljb25UeXBlID0gJ2V4Y2xhbWF0aW9uJztcclxuICAgIH0gZWxzZSBpZiAodGhpcy52YWxpZGF0ZVN0cmluZyA9PT0gJ3N1Y2Nlc3MnIHx8IHRoaXMudmFsaWRhdGVDb250cm9sU3RhdHVzKCdWQUxJRCcpKSB7XHJcbiAgICAgIHRoaXMuc3RhdHVzID0gJ3N1Y2Nlc3MnO1xyXG4gICAgICB0aGlzLmljb25UeXBlID0gJyc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnN0YXR1cyA9ICdpbml0JztcclxuICAgICAgdGhpcy5pY29uVHlwZSA9ICcnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb250cm9sQ2xhc3NNYXAgPSB7XHJcbiAgICAgIFtgaGFzLXdhcm5pbmdgXTogdGhpcy5zdGF0dXMgPT09ICd3YXJuaW5nJyxcclxuICAgICAgW2Bpcy12YWxpZGF0aW5nYF06IHRoaXMuc3RhdHVzID09PSAndmFsaWRhdGluZycsXHJcbiAgICAgIFtgaGFzLWVycm9yYF06IHRoaXMuc3RhdHVzID09PSAnZXJyb3InLFxyXG4gICAgICBbYGhhcy1zdWNjZXNzYF06IHRoaXMuc3RhdHVzID09PSAnc3VjY2VzcycsXHJcbiAgICAgIFtgaGFzLWZlZWRiYWNrYF06IHRoaXMuY21hY3NIYXNGZWVkYmFja1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsXHJcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgQE9wdGlvbmFsKCkgQEhvc3QoKSBjbWFjc0Zvcm1JdGVtQ29tcG9uZW50OiBDbWFjc0Zvcm1JdGVtQ29tcG9uZW50LFxyXG4gICAgQE9wdGlvbmFsKCkgQEhvc3QoKSBuelJvd0RpcmVjdGl2ZTogTnpSb3dEaXJlY3RpdmUsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyXHJcbiAgKSB7XHJcbiAgICBzdXBlcihuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsIGVsZW1lbnRSZWYsIGNtYWNzRm9ybUl0ZW1Db21wb25lbnQgfHwgbnpSb3dEaXJlY3RpdmUsIHJlbmRlcmVyKTtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1mb3JtLWl0ZW0tY29udHJvbC13cmFwcGVyJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nT25Jbml0KCk7XHJcbiAgICB0aGlzLnNldENvbnRyb2xDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbW92ZVN1YnNjcmliZSgpO1xyXG4gICAgc3VwZXIubmdPbkRlc3Ryb3koKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRlZmF1bHRWYWxpZGF0ZUNvbnRyb2wgJiYgIXRoaXMudmFsaWRhdGVDb250cm9sICYmICF0aGlzLnZhbGlkYXRlU3RyaW5nKSB7XHJcbiAgICAgIHRoaXMuY21hY3NWYWxpZGF0ZVN0YXR1cyA9IHRoaXMuZGVmYXVsdFZhbGlkYXRlQ29udHJvbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nQWZ0ZXJWaWV3SW5pdCgpO1xyXG4gIH1cclxufVxyXG4iXX0=