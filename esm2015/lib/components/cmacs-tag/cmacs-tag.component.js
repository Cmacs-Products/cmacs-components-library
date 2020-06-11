/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewEncapsulation } from '@angular/core';
import { fadeMotion, InputBoolean, NzUpdateHostClassService } from 'ng-zorro-antd/core';
export class CmacsTagComponent {
    /**
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?} nzUpdateHostClassService
     */
    constructor(renderer, elementRef, nzUpdateHostClassService) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.presetColor = false;
        this.mode = 'default';
        this.cmacsStatusType = false;
        this.cmacsMoneyType = false;
        this.cmacsTemplateType = false;
        this.disabled = false;
        this.checked = false;
        this.noAnimation = false;
        this.afterClose = new EventEmitter();
        this.onClose = new EventEmitter();
        this.checkedChange = new EventEmitter();
    }
    /**
     * @private
     * @param {?=} color
     * @return {?}
     */
    isPresetColor(color) {
        if (!color) {
            return false;
        }
        return /^(pink|red|yellow|orange|cyan|green|blue|purple|geekblue|magenta|volcano|gold|lime)(-inverse)?$/.test(color);
    }
    /**
     * @private
     * @return {?}
     */
    updateClassMap() {
        this.presetColor = this.isPresetColor(this.color);
        /** @type {?} */
        const prefix = 'ant-tag';
        /** @type {?} */
        const cmacsPrefix = 'cmacs-tag';
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, {
            [`${prefix}`]: true,
            [`${prefix}-has-color`]: this.color && !this.presetColor,
            [`${prefix}-${this.color}`]: this.presetColor,
            [`${prefix}-checkable`]: this.mode === 'checkable',
            [`${prefix}-checkable-checked`]: this.checked,
            [`${cmacsPrefix}-closeable`]: this.mode === 'closeable',
            [`${cmacsPrefix}`]: this.cmacsStatusType || this.cmacsPriorityType || this.cmacsGridType || this.cmacsMoneyType,
            [`${cmacsPrefix}-${this.cmacsGridType}`]: this.cmacsGridType,
            [`${cmacsPrefix}-${this.cmacsPriorityType}-priority`]: this.cmacsPriorityType,
            [`${cmacsPrefix}-money`]: this.cmacsMoneyType,
            [`${cmacsPrefix}-template`]: this.cmacsTemplateType,
            [`${cmacsPrefix}-status`]: this.cmacsStatusType,
        });
    }
    /**
     * @return {?}
     */
    updateCheckedStatus() {
        if (this.mode === 'checkable') {
            this.checked = !this.checked;
            this.checkedChange.emit(this.checked);
            this.updateClassMap();
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    closeTag(e) {
        this.onClose.emit(e);
        if (!e.defaultPrevented) {
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    afterAnimation(e) {
        if (e.toState === 'void') {
            this.afterClose.emit();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateClassMap();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.updateClassMap();
    }
}
CmacsTagComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmacs-tag',
                exportAs: 'cmacsTag',
                preserveWhitespaces: false,
                providers: [NzUpdateHostClassService],
                animations: [fadeMotion],
                template: "<div [class.cmacs-closeable-inner]=\"mode === 'closeable' && !disabled\" [class.cmacs-closeable-disabled]=\"disabled\">\r\n  <span><ng-content></ng-content></span>\r\n</div>\r\n\r\n<i nz-icon type=\"close\" *ngIf=\"mode==='closeable' && !disabled\" tabindex=\"-1\" (click)=\"closeTag($event)\"></i>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[@fadeMotion]': '',
                    '(@fadeMotion.done)': 'afterAnimation($event)',
                    '(click)': 'updateCheckedStatus()',
                    '[style.background-color]': 'presetColor ? null : color',
                    '[style.border-left]': "cmacsTemplateType ? '3px solid ' + color : null"
                },
                styles: [".cmacs-tag{background-color:#fff;font-size:12px;font-style:normal;font-stretch:normal;line-height:.9;letter-spacing:normal;border-radius:2px;border:1px solid #dee0e5;padding:5px 8px!important;height:22px;font-weight:400}.cmacs-tag-status{height:21px;border:1px solid #cfd3d9;background-color:#f6f7fb;font-size:11px;font-weight:500;line-height:.82;color:#656c79}.cmacs-tag-high-priority{height:20px;background-color:#feedeb;font-size:11px;font-weight:500;font-style:normal;font-stretch:normal;line-height:1.3;letter-spacing:normal;color:#f6503c;border-radius:3px;padding:3px 5px!important;border:none}.cmacs-tag-active{color:#2164c9}.cmacs-tag-created{color:#688cda}.cmacs-tag-pre-bid{color:#133a76}.cmacs-tag-archive{color:#647ea5}.cmacs-tag-inactive{color:#97a0ae}.cmacs-tag-warranty{color:#656c79}.cmacs-tag-low-priority{height:20px;background-color:#e5fcf3;font-size:11px;font-weight:500;font-style:normal;font-stretch:normal;line-height:1.3;letter-spacing:normal;color:#00ce7d;border-radius:3px;padding:3px 5px!important;border:none}.cmacs-tag-medium-priority{height:20px;background-color:#fff6e1;font-size:11px;font-weight:500;font-style:normal;font-stretch:normal;line-height:1.3;letter-spacing:normal;color:#ffc634;border-radius:3px;padding:3px 5px!important;border:none}.ant-tag .anticon-close:hover{color:#2a7cff}.ant-tag .anticon-close{color:#656c79;margin-right:3px;margin-left:4px}.cmacs-tag-closeable{height:24px;border:1px solid #dee0e5;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#97a0ae;border-radius:3px;background-color:#f6f7fb}.ant-tag{padding:0}.cmacs-closeable-inner{padding:3px 10px!important;border-right:1px solid #dee0e5;height:100%;display:inline-block;background-color:#fff}.cmacs-closeable-disabled{padding:3px 10px!important;cursor:not-allowed}.cmacs-closeable-disabled:hover{cursor:not-allowed;text-shadow:none;color:#97a0ae;opacity:1}.cmacs-tag-money{height:20px;border-radius:2px;border:none;background-color:rgba(42,124,255,.15);color:#2a7cff}.cmacs-tag-template{font-family:Roboto-Regular;font-size:11px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.5;letter-spacing:normal;color:#656c79;border-radius:3px;border:1px solid #dee0e5;background-color:#fff!important;padding:2px 4px}"]
            }] }
];
/** @nocollapse */
CmacsTagComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: NzUpdateHostClassService }
];
CmacsTagComponent.propDecorators = {
    mode: [{ type: Input }],
    cmacsGridType: [{ type: Input }],
    cmacsPriorityType: [{ type: Input }],
    cmacsStatusType: [{ type: Input }],
    cmacsMoneyType: [{ type: Input }],
    cmacsTemplateType: [{ type: Input }],
    disabled: [{ type: Input }],
    color: [{ type: Input }],
    checked: [{ type: Input }],
    noAnimation: [{ type: Input }],
    afterClose: [{ type: Output }],
    onClose: [{ type: Output }],
    checkedChange: [{ type: Output }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], CmacsTagComponent.prototype, "checked", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], CmacsTagComponent.prototype, "noAnimation", void 0);
if (false) {
    /** @type {?} */
    CmacsTagComponent.prototype.presetColor;
    /** @type {?} */
    CmacsTagComponent.prototype.mode;
    /** @type {?} */
    CmacsTagComponent.prototype.cmacsGridType;
    /** @type {?} */
    CmacsTagComponent.prototype.cmacsPriorityType;
    /** @type {?} */
    CmacsTagComponent.prototype.cmacsStatusType;
    /** @type {?} */
    CmacsTagComponent.prototype.cmacsMoneyType;
    /** @type {?} */
    CmacsTagComponent.prototype.cmacsTemplateType;
    /** @type {?} */
    CmacsTagComponent.prototype.disabled;
    /** @type {?} */
    CmacsTagComponent.prototype.color;
    /** @type {?} */
    CmacsTagComponent.prototype.checked;
    /** @type {?} */
    CmacsTagComponent.prototype.noAnimation;
    /** @type {?} */
    CmacsTagComponent.prototype.afterClose;
    /** @type {?} */
    CmacsTagComponent.prototype.onClose;
    /** @type {?} */
    CmacsTagComponent.prototype.checkedChange;
    /**
     * @type {?}
     * @private
     */
    CmacsTagComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    CmacsTagComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    CmacsTagComponent.prototype.nzUpdateHostClassService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtdGFnL2NtYWNzLXRhZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBU0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQXFCeEYsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7O0lBa0U1QixZQUNVLFFBQW1CLEVBQ25CLFVBQXNCLEVBQ3RCLHdCQUFrRDtRQUZsRCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQXBFNUQsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDWCxTQUFJLEdBQTBDLFNBQVMsQ0FBQztRQUd4RCxvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUN4QixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDMUIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUVELFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDbkMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDdEMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDekMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBd0Q1RCxDQUFDOzs7Ozs7SUF0REksYUFBYSxDQUFDLEtBQWM7UUFDbEMsSUFBSSxDQUFDLEtB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LyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBBbmltYXRpb25FdmVudCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGZhZGVNb3Rpb24sIElucHV0Qm9vbGVhbiwgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHtDbWFjc0dyaWRUeXBlLCBDbWFjc1ByaW9yaXR5VHlwZX0gZnJvbSBcIi4uL2NvcmUvaW50ZXJmYWNlcy9ncmlkLWNvbmZpZ1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy10YWcnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NUYWcnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXHJcbiAgYW5pbWF0aW9uczogW2ZhZGVNb3Rpb25dLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy10YWcuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tAZmFkZU1vdGlvbl0nOiAnJyxcclxuICAgICcoQGZhZGVNb3Rpb24uZG9uZSknOiAnYWZ0ZXJBbmltYXRpb24oJGV2ZW50KScsXHJcbiAgICAnKGNsaWNrKSc6ICd1cGRhdGVDaGVja2VkU3RhdHVzKCknLFxyXG4gICAgJ1tzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXSc6ICdwcmVzZXRDb2xvciA/IG51bGwgOiBjb2xvcicsXHJcbiAgICAnW3N0eWxlLmJvcmRlci1sZWZ0XSc6IFwiY21hY3NUZW1wbGF0ZVR5cGUgPyAnM3B4IHNvbGlkICcgKyBjb2xvciA6IG51bGxcIlxyXG4gIH0sXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtdGFnLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzVGFnQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIHByZXNldENvbG9yID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbW9kZTogJ2RlZmF1bHQnIHwgJ2Nsb3NlYWJsZScgfCAnY2hlY2thYmxlJyA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBjbWFjc0dyaWRUeXBlOiBDbWFjc0dyaWRUeXBlXHJcbiAgQElucHV0KCkgY21hY3NQcmlvcml0eVR5cGU6IENtYWNzUHJpb3JpdHlUeXBlO1xyXG4gIEBJbnB1dCgpIGNtYWNzU3RhdHVzVHlwZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGNtYWNzTW9uZXlUeXBlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgY21hY3NUZW1wbGF0ZVR5cGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNoZWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbm9BbmltYXRpb246IGJvb2xlYW4gPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgYWZ0ZXJDbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25DbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2hlY2tlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgcHJpdmF0ZSBpc1ByZXNldENvbG9yKGNvbG9yPzogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIWNvbG9yKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiAvXihwaW5rfHJlZHx5ZWxsb3d8b3JhbmdlfGN5YW58Z3JlZW58Ymx1ZXxwdXJwbGV8Z2Vla2JsdWV8bWFnZW50YXx2b2xjYW5vfGdvbGR8bGltZSkoLWludmVyc2UpPyQvLnRlc3QoXHJcbiAgICAgIGNvbG9yXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIHRoaXMucHJlc2V0Q29sb3IgPSB0aGlzLmlzUHJlc2V0Q29sb3IodGhpcy5jb2xvcik7XHJcbiAgICBjb25zdCBwcmVmaXggPSAnYW50LXRhZyc7XHJcbiAgICBjb25zdCBjbWFjc1ByZWZpeCA9ICdjbWFjcy10YWcnO1xyXG4gICAgdGhpcy5uelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB7XHJcbiAgICAgIFtgJHtwcmVmaXh9YF06IHRydWUsXHJcbiAgICAgIFtgJHtwcmVmaXh9LWhhcy1jb2xvcmBdOiB0aGlzLmNvbG9yICYmICF0aGlzLnByZXNldENvbG9yLFxyXG4gICAgICBbYCR7cHJlZml4fS0ke3RoaXMuY29sb3J9YF06IHRoaXMucHJlc2V0Q29sb3IsXHJcbiAgICAgIFtgJHtwcmVmaXh9LWNoZWNrYWJsZWBdOiB0aGlzLm1vZGUgPT09ICdjaGVja2FibGUnLFxyXG4gICAgICBbYCR7cHJlZml4fS1jaGVja2FibGUtY2hlY2tlZGBdOiB0aGlzLmNoZWNrZWQsXHJcbiAgICAgIFtgJHtjbWFjc1ByZWZpeH0tY2xvc2VhYmxlYF06IHRoaXMubW9kZSA9PT0gJ2Nsb3NlYWJsZScsXHJcbiAgICAgIFtgJHtjbWFjc1ByZWZpeH1gXTogdGhpcy5jbWFjc1N0YXR1c1R5cGUgfHwgdGhpcy5jbWFjc1ByaW9yaXR5VHlwZSB8fCB0aGlzLmNtYWNzR3JpZFR5cGUgfHwgdGhpcy5jbWFjc01vbmV5VHlwZSxcclxuICAgICAgW2Ake2NtYWNzUHJlZml4fS0ke3RoaXMuY21hY3NHcmlkVHlwZX1gXTogdGhpcy5jbWFjc0dyaWRUeXBlLFxyXG4gICAgICBbYCR7Y21hY3NQcmVmaXh9LSR7dGhpcy5jbWFjc1ByaW9yaXR5VHlwZX0tcHJpb3JpdHlgXTogdGhpcy5jbWFjc1ByaW9yaXR5VHlwZSxcclxuICAgICAgW2Ake2NtYWNzUHJlZml4fS1tb25leWBdOiB0aGlzLmNtYWNzTW9uZXlUeXBlLFxyXG4gICAgICBbYCR7Y21hY3NQcmVmaXh9LXRlbXBsYXRlYF06IHRoaXMuY21hY3NUZW1wbGF0ZVR5cGUsXHJcbiAgICAgIFtgJHtjbWFjc1ByZWZpeH0tc3RhdHVzYF06IHRoaXMuY21hY3NTdGF0dXNUeXBlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDaGVja2VkU3RhdHVzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ2NoZWNrYWJsZScpIHtcclxuICAgICAgdGhpcy5jaGVja2VkID0gIXRoaXMuY2hlY2tlZDtcclxuICAgICAgdGhpcy5jaGVja2VkQ2hhbmdlLmVtaXQodGhpcy5jaGVja2VkKTtcclxuICAgICAgdGhpcy51cGRhdGVDbGFzc01hcCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xvc2VUYWcoZTogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNsb3NlLmVtaXQoZSk7XHJcbiAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKHRoaXMucmVuZGVyZXIucGFyZW50Tm9kZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCksIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFmdGVyQW5pbWF0aW9uKGU6IEFuaW1hdGlvbkV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoZS50b1N0YXRlID09PSAndm9pZCcpIHtcclxuICAgICAgdGhpcy5hZnRlckNsb3NlLmVtaXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZVxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZUNsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlQ2xhc3NNYXAoKTtcclxuICB9XHJcbn1cclxuIl19