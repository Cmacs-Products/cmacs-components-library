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
            [`${cmacsPrefix}`]: this.cmacsStatusType || this.cmacsPriorityType || this.cmacsGridType,
            [`${cmacsPrefix}-${this.cmacsGridType}`]: this.cmacsGridType,
            [`${cmacsPrefix}-${this.cmacsPriorityType}-priority`]: this.cmacsPriorityType,
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
                template: "<div [class.cmacs-closeable-inner]=\"mode === 'closeable' && !disabled\" [class.cmacs-closeable-disabled]=\"disabled\">\r\n  <ng-content></ng-content>\r\n</div>\r\n\r\n<i nz-icon type=\"close\" *ngIf=\"mode==='closeable' && !disabled\" tabindex=\"-1\" (click)=\"closeTag($event)\"></i>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[@fadeMotion]': '',
                    '(@fadeMotion.done)': 'afterAnimation($event)',
                    '(click)': 'updateCheckedStatus()',
                    '[style.background-color]': 'presetColor? null : color'
                },
                styles: [".cmacs-tag{background-color:#fff;font-size:12px;font-style:normal;font-stretch:normal;line-height:.9;letter-spacing:normal;border-radius:2px;border:1px solid #dee0e5;padding:5px 8px!important;height:22px;font-weight:400}.cmacs-tag-status{height:21px;border:1px solid #cfd3d9;background-color:#f6f7fb;font-size:11px;font-weight:500;line-height:.82;color:#656c79}.cmacs-tag-high-priority{height:20px;background-color:#feedeb;font-size:11px;font-weight:500;font-style:normal;font-stretch:normal;line-height:1.3;letter-spacing:normal;color:#f6503c;border-radius:3px;padding:3px 5px!important;border:none}.cmacs-tag-active{color:#2164c9}.cmacs-tag-created{color:#688cda}.cmacs-tag-pre-bid{color:#133a76}.cmacs-tag-archive{color:#647ea5}.cmacs-tag-inactive{color:#97a0ae}.cmacs-tag-warranty{color:#656c79}.cmacs-tag-low-priority{height:20px;background-color:#e5fcf3;font-size:11px;font-weight:500;font-style:normal;font-stretch:normal;line-height:1.3;letter-spacing:normal;color:#00ce7d;border-radius:3px;padding:3px 5px!important;border:none}.cmacs-tag-medium-priority{height:20px;background-color:#fff6e1;font-size:11px;font-weight:500;font-style:normal;font-stretch:normal;line-height:1.3;letter-spacing:normal;color:#ffc634;border-radius:3px;padding:3px 5px!important;border:none}.ant-tag .anticon-close:hover{color:#2a7cff}.ant-tag .anticon-close{color:#656c79;margin-right:3px;margin-left:4px}.cmacs-tag-closeable{height:24px;border:1px solid #dee0e5;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#97a0ae;border-radius:3px;background-color:#f6f7fb}.ant-tag{padding:0}.cmacs-closeable-inner{padding:3px 10px!important;border-right:1px solid #dee0e5;height:100%;display:inline-block;background-color:#fff}.cmacs-closeable-disabled{padding:3px 10px!important;cursor:not-allowed}.cmacs-closeable-disabled:hover{cursor:not-allowed;text-shadow:none;color:#97a0ae;opacity:1}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtdGFnL2NtYWNzLXRhZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBU0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQW9CeEYsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7O0lBOEQ1QixZQUNVLFFBQW1CLEVBQ25CLFVBQXNCLEVBQ3RCLHdCQUFrRDtRQUZsRCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQWhFNUQsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDWCxTQUFJLEdBQTBDLFNBQVMsQ0FBQztRQUd4RCxvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUN4QixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRUQsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUNuQyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUN0QyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUN6QyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7SUFzRDVELENBQUM7Ozs7OztJQXBESSxhQUFhLENBQUMsS0FBYztRQUNsQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE9BQU8saUdBQWlHLENBQUMs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RUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsSUFBSSxFQUFFO29CQUNKLGVBQWUsRUFBRSxFQUFFO29CQUNuQixvQkFBb0IsRUFBRSx3QkFBd0I7b0JBQzlDLFNBQVMsRUFBRSx1QkFBdUI7b0JBQ2xDLDBCQUEwQixFQUFFLDJCQUEyQjtpQkFDeEQ7O2FBRUY7Ozs7WUF2QkMsU0FBUztZQU5ULFVBQVU7WUFVdUIsd0JBQXdCOzs7bUJBc0J4RCxLQUFLOzRCQUNMLEtBQUs7Z0NBQ0wsS0FBSzs4QkFDTCxLQUFLO3VCQUNMLEtBQUs7b0JBQ0wsS0FBSztzQkFDTCxLQUFLOzBCQUNMLEtBQUs7eUJBQ0wsTUFBTTtzQkFDTixNQUFNOzRCQUNOLE1BQU07O0FBSmtCO0lBQWYsWUFBWSxFQUFFOztrREFBMEI7QUFDekI7SUFBZixZQUFZLEVBQUU7O3NEQUE4Qjs7O0lBUnRELHdDQUFvQjs7SUFDcEIsaUNBQWlFOztJQUNqRSwwQ0FBcUM7O0lBQ3JDLDhDQUE4Qzs7SUFDOUMsNENBQWlDOztJQUNqQyxxQ0FBMEI7O0lBQzFCLGtDQUF1Qjs7SUFDdkIsb0NBQWtEOztJQUNsRCx3Q0FBc0Q7O0lBQ3RELHVDQUF5RDs7SUFDekQsb0NBQTREOztJQUM1RCwwQ0FBK0Q7Ozs7O0lBbUQ3RCxxQ0FBMkI7Ozs7O0lBQzNCLHVDQUE4Qjs7Ozs7SUFDOUIscURBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBBbmltYXRpb25FdmVudCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGZhZGVNb3Rpb24sIElucHV0Qm9vbGVhbiwgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHtDbWFjc0dyaWRUeXBlLCBDbWFjc1ByaW9yaXR5VHlwZX0gZnJvbSBcIi4uL2NvcmUvaW50ZXJmYWNlcy9ncmlkLWNvbmZpZ1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy10YWcnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NUYWcnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXHJcbiAgYW5pbWF0aW9uczogW2ZhZGVNb3Rpb25dLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy10YWcuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tAZmFkZU1vdGlvbl0nOiAnJyxcclxuICAgICcoQGZhZGVNb3Rpb24uZG9uZSknOiAnYWZ0ZXJBbmltYXRpb24oJGV2ZW50KScsXHJcbiAgICAnKGNsaWNrKSc6ICd1cGRhdGVDaGVja2VkU3RhdHVzKCknLFxyXG4gICAgJ1tzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXSc6ICdwcmVzZXRDb2xvcj8gbnVsbCA6IGNvbG9yJ1xyXG4gIH0sXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtdGFnLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzVGFnQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIHByZXNldENvbG9yID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbW9kZTogJ2RlZmF1bHQnIHwgJ2Nsb3NlYWJsZScgfCAnY2hlY2thYmxlJyA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBjbWFjc0dyaWRUeXBlOiBDbWFjc0dyaWRUeXBlXHJcbiAgQElucHV0KCkgY21hY3NQcmlvcml0eVR5cGU6IENtYWNzUHJpb3JpdHlUeXBlO1xyXG4gIEBJbnB1dCgpIGNtYWNzU3RhdHVzVHlwZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgY2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBub0FuaW1hdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBhZnRlckNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbkNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBjaGVja2VkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBwcml2YXRlIGlzUHJlc2V0Q29sb3IoY29sb3I/OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGlmICghY29sb3IpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIC9eKHBpbmt8cmVkfHllbGxvd3xvcmFuZ2V8Y3lhbnxncmVlbnxibHVlfHB1cnBsZXxnZWVrYmx1ZXxtYWdlbnRhfHZvbGNhbm98Z29sZHxsaW1lKSgtaW52ZXJzZSk/JC8udGVzdChcclxuICAgICAgY29sb3JcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZUNsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgdGhpcy5wcmVzZXRDb2xvciA9IHRoaXMuaXNQcmVzZXRDb2xvcih0aGlzLmNvbG9yKTtcclxuICAgIGNvbnN0IHByZWZpeCA9ICdhbnQtdGFnJztcclxuICAgIGNvbnN0IGNtYWNzUHJlZml4ID0gJ2NtYWNzLXRhZyc7XHJcbiAgICB0aGlzLm56VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHtcclxuICAgICAgW2Ake3ByZWZpeH1gXTogdHJ1ZSxcclxuICAgICAgW2Ake3ByZWZpeH0taGFzLWNvbG9yYF06IHRoaXMuY29sb3IgJiYgIXRoaXMucHJlc2V0Q29sb3IsXHJcbiAgICAgIFtgJHtwcmVmaXh9LSR7dGhpcy5jb2xvcn1gXTogdGhpcy5wcmVzZXRDb2xvcixcclxuICAgICAgW2Ake3ByZWZpeH0tY2hlY2thYmxlYF06IHRoaXMubW9kZSA9PT0gJ2NoZWNrYWJsZScsXHJcbiAgICAgIFtgJHtwcmVmaXh9LWNoZWNrYWJsZS1jaGVja2VkYF06IHRoaXMuY2hlY2tlZCxcclxuICAgICAgW2Ake2NtYWNzUHJlZml4fS1jbG9zZWFibGVgXTogdGhpcy5tb2RlID09PSAnY2xvc2VhYmxlJyxcclxuICAgICAgW2Ake2NtYWNzUHJlZml4fWBdOiB0aGlzLmNtYWNzU3RhdHVzVHlwZSB8fCB0aGlzLmNtYWNzUHJpb3JpdHlUeXBlIHx8IHRoaXMuY21hY3NHcmlkVHlwZSxcclxuICAgICAgW2Ake2NtYWNzUHJlZml4fS0ke3RoaXMuY21hY3NHcmlkVHlwZX1gXTogdGhpcy5jbWFjc0dyaWRUeXBlLFxyXG4gICAgICBbYCR7Y21hY3NQcmVmaXh9LSR7dGhpcy5jbWFjc1ByaW9yaXR5VHlwZX0tcHJpb3JpdHlgXTogdGhpcy5jbWFjc1ByaW9yaXR5VHlwZSxcclxuICAgICAgW2Ake2NtYWNzUHJlZml4fS1zdGF0dXNgXTogdGhpcy5jbWFjc1N0YXR1c1R5cGUsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNoZWNrZWRTdGF0dXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5tb2RlID09PSAnY2hlY2thYmxlJykge1xyXG4gICAgICB0aGlzLmNoZWNrZWQgPSAhdGhpcy5jaGVja2VkO1xyXG4gICAgICB0aGlzLmNoZWNrZWRDaGFuZ2UuZW1pdCh0aGlzLmNoZWNrZWQpO1xyXG4gICAgICB0aGlzLnVwZGF0ZUNsYXNzTWFwKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbG9zZVRhZyhlOiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2xvc2UuZW1pdChlKTtcclxuICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5yZW5kZXJlci5wYXJlbnROb2RlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSwgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWZ0ZXJBbmltYXRpb24oZTogQW5pbWF0aW9uRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChlLnRvU3RhdGUgPT09ICd2b2lkJykge1xyXG4gICAgICB0aGlzLmFmdGVyQ2xvc2UuZW1pdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlQ2xhc3NNYXAoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVDbGFzc01hcCgpO1xyXG4gIH1cclxufVxyXG4iXX0=