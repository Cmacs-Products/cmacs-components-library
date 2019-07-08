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
var CmacsTagComponent = /** @class */ (function () {
    function CmacsTagComponent(renderer, elementRef, nzUpdateHostClassService) {
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
    CmacsTagComponent.prototype.isPresetColor = /**
     * @private
     * @param {?=} color
     * @return {?}
     */
    function (color) {
        if (!color) {
            return false;
        }
        return /^(pink|red|yellow|orange|cyan|green|blue|purple|geekblue|magenta|volcano|gold|lime)(-inverse)?$/.test(color);
    };
    /**
     * @private
     * @return {?}
     */
    CmacsTagComponent.prototype.updateClassMap = /**
     * @private
     * @return {?}
     */
    function () {
        var _a;
        this.presetColor = this.isPresetColor(this.color);
        /** @type {?} */
        var prefix = 'ant-tag';
        /** @type {?} */
        var cmacsPrefix = 'cmacs-tag';
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, (_a = {},
            _a["" + prefix] = true,
            _a[prefix + "-has-color"] = this.color && !this.presetColor,
            _a[prefix + "-" + this.color] = this.presetColor,
            _a[prefix + "-checkable"] = this.mode === 'checkable',
            _a[prefix + "-checkable-checked"] = this.checked,
            _a[cmacsPrefix + "-closeable"] = this.mode === 'closeable',
            _a["" + cmacsPrefix] = this.cmacsStatusType || this.cmacsPriorityType || this.cmacsGridType,
            _a[cmacsPrefix + "-" + this.cmacsGridType] = this.cmacsGridType,
            _a[cmacsPrefix + "-" + this.cmacsPriorityType + "-priority"] = this.cmacsPriorityType,
            _a[cmacsPrefix + "-status"] = this.cmacsStatusType,
            _a));
    };
    /**
     * @return {?}
     */
    CmacsTagComponent.prototype.updateCheckedStatus = /**
     * @return {?}
     */
    function () {
        if (this.mode === 'checkable') {
            this.checked = !this.checked;
            this.checkedChange.emit(this.checked);
            this.updateClassMap();
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    CmacsTagComponent.prototype.closeTag = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.onClose.emit(e);
        if (!e.defaultPrevented) {
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    CmacsTagComponent.prototype.afterAnimation = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.toState === 'void') {
            this.afterClose.emit();
        }
    };
    /**
     * @return {?}
     */
    CmacsTagComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.updateClassMap();
    };
    /**
     * @return {?}
     */
    CmacsTagComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.updateClassMap();
    };
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
    CmacsTagComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: NzUpdateHostClassService }
    ]; };
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
    return CmacsTagComponent;
}());
export { CmacsTagComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtdGFnL2NtYWNzLXRhZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBU0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV4RjtJQStFRSwyQkFDVSxRQUFtQixFQUNuQixVQUFzQixFQUN0Qix3QkFBa0Q7UUFGbEQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFoRTVELGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ1gsU0FBSSxHQUEwQyxTQUFTLENBQUM7UUFHeEQsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUVELFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDbkMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDdEMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDekMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBc0Q1RCxDQUFDOzs7Ozs7SUFwREkseUNBQWE7Ozs7O0lBQXJCLFVBQXNCLEtBQWM7UUFDbEMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLGlHQUFpRyxDQUFDLElBQUksQ0FDM0cs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ZUFBZSxFQUFFLEVBQUU7d0JBQ25CLG9CQUFvQixFQUFFLHdCQUF3Qjt3QkFDOUMsU0FBUyxFQUFFLHVCQUF1Qjt3QkFDbEMsMEJBQTBCLEVBQUUsMkJBQTJCO3FCQUN4RDs7aUJBRUY7Ozs7Z0JBdEJDLFNBQVM7Z0JBTlQsVUFBVTtnQkFVdUIsd0JBQXdCOzs7dUJBcUJ4RCxLQUFLO2dDQUNMLEtBQUs7b0NBQ0wsS0FBSztrQ0FDTCxLQUFLOzJCQUNMLEtBQUs7d0JBQ0wsS0FBSzswQkFDTCxLQUFLOzhCQUNMLEtBQUs7NkJBQ0wsTUFBTTswQkFDTixNQUFNO2dDQUNOLE1BQU07O0lBSmtCO1FBQWYsWUFBWSxFQUFFOztzREFBMEI7SUFDekI7UUFBZixZQUFZLEVBQUU7OzBEQUE4QjtJQWtFeEQsd0JBQUM7Q0FBQSxBQTVGRCxJQTRGQztTQTNFWSxpQkFBaUI7OztJQUM1Qix3Q0FBb0I7O0lBQ3BCLGlDQUFpRTs7SUFDakUsMENBQStGOztJQUMvRiw4Q0FBc0Q7O0lBQ3RELDRDQUFpQzs7SUFDakMscUNBQTBCOztJQUMxQixrQ0FBdUI7O0lBQ3ZCLG9DQUFrRDs7SUFDbEQsd0NBQXNEOztJQUN0RCx1Q0FBeUQ7O0lBQ3pELG9DQUE0RDs7SUFDNUQsMENBQStEOzs7OztJQW1EN0QscUNBQTJCOzs7OztJQUMzQix1Q0FBOEI7Ozs7O0lBQzlCLHFEQUEwRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQW5pbWF0aW9uRXZlbnQgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBmYWRlTW90aW9uLCBJbnB1dEJvb2xlYW4sIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLXRhZycsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1RhZycsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgcHJvdmlkZXJzOiBbTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXSxcclxuICBhbmltYXRpb25zOiBbZmFkZU1vdGlvbl0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXRhZy5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBob3N0OiB7XHJcbiAgICAnW0BmYWRlTW90aW9uXSc6ICcnLFxyXG4gICAgJyhAZmFkZU1vdGlvbi5kb25lKSc6ICdhZnRlckFuaW1hdGlvbigkZXZlbnQpJyxcclxuICAgICcoY2xpY2spJzogJ3VwZGF0ZUNoZWNrZWRTdGF0dXMoKScsXHJcbiAgICAnW3N0eWxlLmJhY2tncm91bmQtY29sb3JdJzogJ3ByZXNldENvbG9yPyBudWxsIDogY29sb3InXHJcbiAgfSxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy10YWcuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NUYWdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgcHJlc2V0Q29sb3IgPSBmYWxzZTtcclxuICBASW5wdXQoKSBtb2RlOiAnZGVmYXVsdCcgfCAnY2xvc2VhYmxlJyB8ICdjaGVja2FibGUnID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIGNtYWNzR3JpZFR5cGU6ICdhY3RpdmUnIHwgJ2NyZWF0ZWQnIHwgJ3ByZS1iaWQnIHwgJ2FyY2hpdmUnIHwgJ2luYWN0aXZlJyB8ICd3YXJyYW50eSc7XHJcbiAgQElucHV0KCkgY21hY3NQcmlvcml0eVR5cGU6ICdoaWdoJyB8ICdsb3cnIHwgJ21lZGl1bSc7XHJcbiAgQElucHV0KCkgY21hY3NTdGF0dXNUeXBlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjaGVja2VkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG5vQW5pbWF0aW9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGFmdGVyQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoZWNrZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIHByaXZhdGUgaXNQcmVzZXRDb2xvcihjb2xvcj86IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCFjb2xvcikge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gL14ocGlua3xyZWR8eWVsbG93fG9yYW5nZXxjeWFufGdyZWVufGJsdWV8cHVycGxlfGdlZWtibHVlfG1hZ2VudGF8dm9sY2Fub3xnb2xkfGxpbWUpKC1pbnZlcnNlKT8kLy50ZXN0KFxyXG4gICAgICBjb2xvclxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlQ2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLnByZXNldENvbG9yID0gdGhpcy5pc1ByZXNldENvbG9yKHRoaXMuY29sb3IpO1xyXG4gICAgY29uc3QgcHJlZml4ID0gJ2FudC10YWcnO1xyXG4gICAgY29uc3QgY21hY3NQcmVmaXggPSAnY21hY3MtdGFnJztcclxuICAgIHRoaXMubnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwge1xyXG4gICAgICBbYCR7cHJlZml4fWBdOiB0cnVlLFxyXG4gICAgICBbYCR7cHJlZml4fS1oYXMtY29sb3JgXTogdGhpcy5jb2xvciAmJiAhdGhpcy5wcmVzZXRDb2xvcixcclxuICAgICAgW2Ake3ByZWZpeH0tJHt0aGlzLmNvbG9yfWBdOiB0aGlzLnByZXNldENvbG9yLFxyXG4gICAgICBbYCR7cHJlZml4fS1jaGVja2FibGVgXTogdGhpcy5tb2RlID09PSAnY2hlY2thYmxlJyxcclxuICAgICAgW2Ake3ByZWZpeH0tY2hlY2thYmxlLWNoZWNrZWRgXTogdGhpcy5jaGVja2VkLFxyXG4gICAgICBbYCR7Y21hY3NQcmVmaXh9LWNsb3NlYWJsZWBdOiB0aGlzLm1vZGUgPT09ICdjbG9zZWFibGUnLFxyXG4gICAgICBbYCR7Y21hY3NQcmVmaXh9YF06IHRoaXMuY21hY3NTdGF0dXNUeXBlIHx8IHRoaXMuY21hY3NQcmlvcml0eVR5cGUgfHwgdGhpcy5jbWFjc0dyaWRUeXBlLFxyXG4gICAgICBbYCR7Y21hY3NQcmVmaXh9LSR7dGhpcy5jbWFjc0dyaWRUeXBlfWBdOiB0aGlzLmNtYWNzR3JpZFR5cGUsXHJcbiAgICAgIFtgJHtjbWFjc1ByZWZpeH0tJHt0aGlzLmNtYWNzUHJpb3JpdHlUeXBlfS1wcmlvcml0eWBdOiB0aGlzLmNtYWNzUHJpb3JpdHlUeXBlLFxyXG4gICAgICBbYCR7Y21hY3NQcmVmaXh9LXN0YXR1c2BdOiB0aGlzLmNtYWNzU3RhdHVzVHlwZSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ2hlY2tlZFN0YXR1cygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm1vZGUgPT09ICdjaGVja2FibGUnKSB7XHJcbiAgICAgIHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XHJcbiAgICAgIHRoaXMuY2hlY2tlZENoYW5nZS5lbWl0KHRoaXMuY2hlY2tlZCk7XHJcbiAgICAgIHRoaXMudXBkYXRlQ2xhc3NNYXAoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsb3NlVGFnKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMub25DbG9zZS5lbWl0KGUpO1xyXG4gICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLnJlbmRlcmVyLnBhcmVudE5vZGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZnRlckFuaW1hdGlvbihlOiBBbmltYXRpb25FdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKGUudG9TdGF0ZSA9PT0gJ3ZvaWQnKSB7XHJcbiAgICAgIHRoaXMuYWZ0ZXJDbG9zZS5lbWl0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZUNsYXNzTWFwKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==