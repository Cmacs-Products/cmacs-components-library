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
            _a["" + cmacsPrefix] = this.cmacsStatusType || this.cmacsPriorityType || this.cmacsGridType || this.cmacsMoneyType,
            _a[cmacsPrefix + "-" + this.cmacsGridType] = this.cmacsGridType,
            _a[cmacsPrefix + "-" + this.cmacsPriorityType + "-priority"] = this.cmacsPriorityType,
            _a[cmacsPrefix + "-money"] = this.cmacsMoneyType,
            _a[cmacsPrefix + "-template"] = this.cmacsTemplateType,
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
                    styles: [".cmacs-tag{background-color:#fff;font-size:12px;font-style:normal;font-stretch:normal;line-height:.9;letter-spacing:normal;border-radius:2px;border:1px solid #dee0e5;padding:5px 8px!important;height:22px;font-weight:400}.cmacs-tag-status{height:21px;border:1px solid #cfd3d9;background-color:#f6f7fb;font-size:11px;font-weight:500;line-height:.82;color:#656c79}.cmacs-tag-high-priority{height:20px;background-color:#feedeb;font-size:11px;font-weight:500;font-style:normal;font-stretch:normal;line-height:1.3;letter-spacing:normal;color:#f6503c;border-radius:3px;padding:3px 5px!important;border:none}.cmacs-tag-active{color:#2164c9}.cmacs-tag-created{color:#688cda}.cmacs-tag-pre-bid{color:#133a76}.cmacs-tag-archive{color:#647ea5}.cmacs-tag-inactive{color:#97a0ae}.cmacs-tag-warranty{color:#656c79}.cmacs-tag-low-priority{height:20px;background-color:#e5fcf3;font-size:11px;font-weight:500;font-style:normal;font-stretch:normal;line-height:1.3;letter-spacing:normal;color:#00ce7d;border-radius:3px;padding:3px 5px!important;border:none}.cmacs-tag-medium-priority{height:20px;background-color:#fff6e1;font-size:11px;font-weight:500;font-style:normal;font-stretch:normal;line-height:1.3;letter-spacing:normal;color:#ffc634;border-radius:3px;padding:3px 5px!important;border:none}.ant-tag .anticon-close:hover{color:#2a7cff}.ant-tag .anticon-close{color:#656c79;margin-right:3px;margin-left:4px}.cmacs-tag-closeable{height:24px;border:1px solid #dee0e5;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#97a0ae;border-radius:3px;background-color:#f6f7fb}.ant-tag{padding:0}.cmacs-closeable-inner{padding:3px 10px!important;border-right:1px solid #dee0e5;height:100%;display:inline-block;background-color:#fff}.cmacs-closeable-disabled{padding:3px 10px!important;cursor:not-allowed}.cmacs-closeable-disabled:hover{cursor:not-allowed;text-shadow:none;color:#97a0ae;opacity:1}.cmacs-tag-money{height:20px;border-radius:2px;border:none;background-color:rgba(42,124,255,.15);color:#2a7cff}.cmacs-tag-template{font-family:Roboto-Regular;font-size:11px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.5;letter-spacing:normal;color:#656c79;border-radius:3px;border:1px solid #dee0e5;background-color:#fff!important;padding:2px 4px}.cmacs-tag-template div{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:178px}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtdGFnL2NtYWNzLXRhZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBU0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUd4RjtJQW9GRSwyQkFDVSxRQUFtQixFQUNuQixVQUFzQixFQUN0Qix3QkFBa0Q7UUFGbEQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFwRTVELGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ1gsU0FBSSxHQUEwQyxTQUFTLENBQUM7UUFHeEQsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFRCxZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBQ25DLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQ3RDLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQ3pDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQXdENUQsQ0FBQzs7Ozs7O0lBdERJLHlDQUFhOzs7OztJQUFyQixVQUFzQixLQUFjO1FBQ2xDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsT0FBTyxpR0FBaUcsQ0FBQyxJQUFJLENBQzNHLEtBQUssQ0FDTixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFTywwQ0FBYzs7OztJQUF0Qjs7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOztZQUM1QyxNQUFNLEdBQUcsU0FBUzs7WUFDbEIsV0FBVyxHQUFHLFdBQVc7UUFDL0IsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWE7WUFDekUsR0FBQyxLQUFHLE1BQVEsSUFBRyxJQUFJO1lBQ25CLEdBQUksTUFBTSxlQUFZLElBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXO1lBQ3hELEdBQUksTUFBTSxTQUFJLElBQUksQ0FBQyxLQUFPLElBQUcsSUFBSSxDQUFDLFdBQVc7WUFDN0MsR0FBSSxNQUFNLGVBQVksSUFBRyxJQUFJLENBQUMsSUFBSSxLQUFLLFdBQVc7WUFDbEQsR0FBSSxNQUFNLHVCQUFvQixJQUFHLElBQUksQ0FBQyxPQUFPO1lBQzdDLEdBQUksV0FBVyxlQUFZLElBQUcsSUFBSSxDQUFDLElBQUksS0FBSyxXQUFXO1lBQ3ZELEdBQUMsS0FBRyxXQUFhLElBQUcsSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsY0FBYztZQUMvRyxHQUFJLFdBQVcsU0FBSSxJQUFJLENBQUMsYUFBZSxJQUFHLElBQUksQ0FBQyxhQUFhO1lBQzVELEdBQUksV0FBVyxTQUFJLElBQUksQ0FBQyxpQkFBaUIsY0FBVyxJQUFHLElBQUksQ0FBQyxpQkFBaUI7WUFDN0UsR0FBSSxXQUFXLFdBQVEsSUFBRyxJQUFJLENBQUMsY0FBYztZQUM3QyxHQUFJLFdBQVcsY0FBVyxJQUFHLElBQUksQ0FBQyxpQkFBaUI7WUFDbkQsR0FBSSxXQUFXLFlBQVMsSUFBRyxJQUFJLENBQUMsZUFBZTtnQkFDL0MsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCwrQ0FBbUI7OztJQUFuQjtRQUNFLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxXQUFXLEVBQUU7WUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QjtJQUNILENBQUM7Ozs7O0lBRUQsb0NBQVE7Ozs7SUFBUixVQUFTLENBQWE7UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRTtZQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDbkg7SUFDSCxDQUFDOzs7OztJQUVELDBDQUFjOzs7O0lBQWQsVUFBZSxDQUFpQjtRQUM5QixJQUFJLENBQUMsQ0FBQyxPQUFPLEtBQUssTUFBTSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDOzs7O0lBUUQsb0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCx1Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Z0JBaEdGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO29CQUNyQyxVQUFVLEVBQUUsQ0FBQyxVQUFVLENBQUM7b0JBQ3hCLDBUQUF5QztvQkFDekMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxJQUFJLEVBQUU7d0JBQ0osZUFBZSxFQUFFLEVBQUU7d0JBQ25CLG9CQUFvQixFQUFFLHdCQUF3Qjt3QkFDOUMsU0FBUyxFQUFFLHVCQUF1Qjt3QkFDbEMsMEJBQTBCLEVBQUUsNEJBQTRCO3dCQUN4RCxxQkFBcUIsRUFBRSxpREFBaUQ7cUJBQ3pFOztpQkFFRjs7OztnQkF4QkMsU0FBUztnQkFOVCxVQUFVO2dCQVV1Qix3QkFBd0I7Ozt1QkF1QnhELEtBQUs7Z0NBQ0wsS0FBSztvQ0FDTCxLQUFLO2tDQUNMLEtBQUs7aUNBQ0wsS0FBSztvQ0FDTCxLQUFLOzJCQUNMLEtBQUs7d0JBQ0wsS0FBSzswQkFDTCxLQUFLOzhCQUNMLEtBQUs7NkJBQ0wsTUFBTTswQkFDTixNQUFNO2dDQUNOLE1BQU07O0lBSmtCO1FBQWYsWUFBWSxFQUFFOztzREFBMEI7SUFDekI7UUFBZixZQUFZLEVBQUU7OzBEQUE4QjtJQW9FeEQsd0JBQUM7Q0FBQSxBQWpHRCxJQWlHQztTQS9FWSxpQkFBaUI7OztJQUM1Qix3Q0FBb0I7O0lBQ3BCLGlDQUFpRTs7SUFDakUsMENBQXFDOztJQUNyQyw4Q0FBOEM7O0lBQzlDLDRDQUFpQzs7SUFDakMsMkNBQWdDOztJQUNoQyw4Q0FBbUM7O0lBQ25DLHFDQUEwQjs7SUFDMUIsa0NBQXVCOztJQUN2QixvQ0FBa0Q7O0lBQ2xELHdDQUFzRDs7SUFDdEQsdUNBQXlEOztJQUN6RCxvQ0FBNEQ7O0lBQzVELDBDQUErRDs7Ozs7SUFxRDdELHFDQUEyQjs7Ozs7SUFDM0IsdUNBQThCOzs7OztJQUM5QixxREFBMEQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEFuaW1hdGlvbkV2ZW50IH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgZmFkZU1vdGlvbiwgSW5wdXRCb29sZWFuLCBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQge0NtYWNzR3JpZFR5cGUsIENtYWNzUHJpb3JpdHlUeXBlfSBmcm9tIFwiLi4vY29yZS9pbnRlcmZhY2VzL2dyaWQtY29uZmlnXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLXRhZycsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1RhZycsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgcHJvdmlkZXJzOiBbTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXSxcclxuICBhbmltYXRpb25zOiBbZmFkZU1vdGlvbl0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXRhZy5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBob3N0OiB7XHJcbiAgICAnW0BmYWRlTW90aW9uXSc6ICcnLFxyXG4gICAgJyhAZmFkZU1vdGlvbi5kb25lKSc6ICdhZnRlckFuaW1hdGlvbigkZXZlbnQpJyxcclxuICAgICcoY2xpY2spJzogJ3VwZGF0ZUNoZWNrZWRTdGF0dXMoKScsXHJcbiAgICAnW3N0eWxlLmJhY2tncm91bmQtY29sb3JdJzogJ3ByZXNldENvbG9yID8gbnVsbCA6IGNvbG9yJyxcclxuICAgICdbc3R5bGUuYm9yZGVyLWxlZnRdJzogXCJjbWFjc1RlbXBsYXRlVHlwZSA/ICczcHggc29saWQgJyArIGNvbG9yIDogbnVsbFwiXHJcbiAgfSxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy10YWcuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NUYWdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgcHJlc2V0Q29sb3IgPSBmYWxzZTtcclxuICBASW5wdXQoKSBtb2RlOiAnZGVmYXVsdCcgfCAnY2xvc2VhYmxlJyB8ICdjaGVja2FibGUnID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIGNtYWNzR3JpZFR5cGU6IENtYWNzR3JpZFR5cGVcclxuICBASW5wdXQoKSBjbWFjc1ByaW9yaXR5VHlwZTogQ21hY3NQcmlvcml0eVR5cGU7XHJcbiAgQElucHV0KCkgY21hY3NTdGF0dXNUeXBlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgY21hY3NNb25leVR5cGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBjbWFjc1RlbXBsYXRlVHlwZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgY2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBub0FuaW1hdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBhZnRlckNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbkNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBjaGVja2VkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBwcml2YXRlIGlzUHJlc2V0Q29sb3IoY29sb3I/OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGlmICghY29sb3IpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIC9eKHBpbmt8cmVkfHllbGxvd3xvcmFuZ2V8Y3lhbnxncmVlbnxibHVlfHB1cnBsZXxnZWVrYmx1ZXxtYWdlbnRhfHZvbGNhbm98Z29sZHxsaW1lKSgtaW52ZXJzZSk/JC8udGVzdChcclxuICAgICAgY29sb3JcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZUNsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgdGhpcy5wcmVzZXRDb2xvciA9IHRoaXMuaXNQcmVzZXRDb2xvcih0aGlzLmNvbG9yKTtcclxuICAgIGNvbnN0IHByZWZpeCA9ICdhbnQtdGFnJztcclxuICAgIGNvbnN0IGNtYWNzUHJlZml4ID0gJ2NtYWNzLXRhZyc7XHJcbiAgICB0aGlzLm56VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHtcclxuICAgICAgW2Ake3ByZWZpeH1gXTogdHJ1ZSxcclxuICAgICAgW2Ake3ByZWZpeH0taGFzLWNvbG9yYF06IHRoaXMuY29sb3IgJiYgIXRoaXMucHJlc2V0Q29sb3IsXHJcbiAgICAgIFtgJHtwcmVmaXh9LSR7dGhpcy5jb2xvcn1gXTogdGhpcy5wcmVzZXRDb2xvcixcclxuICAgICAgW2Ake3ByZWZpeH0tY2hlY2thYmxlYF06IHRoaXMubW9kZSA9PT0gJ2NoZWNrYWJsZScsXHJcbiAgICAgIFtgJHtwcmVmaXh9LWNoZWNrYWJsZS1jaGVja2VkYF06IHRoaXMuY2hlY2tlZCxcclxuICAgICAgW2Ake2NtYWNzUHJlZml4fS1jbG9zZWFibGVgXTogdGhpcy5tb2RlID09PSAnY2xvc2VhYmxlJyxcclxuICAgICAgW2Ake2NtYWNzUHJlZml4fWBdOiB0aGlzLmNtYWNzU3RhdHVzVHlwZSB8fCB0aGlzLmNtYWNzUHJpb3JpdHlUeXBlIHx8IHRoaXMuY21hY3NHcmlkVHlwZSB8fCB0aGlzLmNtYWNzTW9uZXlUeXBlLFxyXG4gICAgICBbYCR7Y21hY3NQcmVmaXh9LSR7dGhpcy5jbWFjc0dyaWRUeXBlfWBdOiB0aGlzLmNtYWNzR3JpZFR5cGUsXHJcbiAgICAgIFtgJHtjbWFjc1ByZWZpeH0tJHt0aGlzLmNtYWNzUHJpb3JpdHlUeXBlfS1wcmlvcml0eWBdOiB0aGlzLmNtYWNzUHJpb3JpdHlUeXBlLFxyXG4gICAgICBbYCR7Y21hY3NQcmVmaXh9LW1vbmV5YF06IHRoaXMuY21hY3NNb25leVR5cGUsXHJcbiAgICAgIFtgJHtjbWFjc1ByZWZpeH0tdGVtcGxhdGVgXTogdGhpcy5jbWFjc1RlbXBsYXRlVHlwZSxcclxuICAgICAgW2Ake2NtYWNzUHJlZml4fS1zdGF0dXNgXTogdGhpcy5jbWFjc1N0YXR1c1R5cGUsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNoZWNrZWRTdGF0dXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5tb2RlID09PSAnY2hlY2thYmxlJykge1xyXG4gICAgICB0aGlzLmNoZWNrZWQgPSAhdGhpcy5jaGVja2VkO1xyXG4gICAgICB0aGlzLmNoZWNrZWRDaGFuZ2UuZW1pdCh0aGlzLmNoZWNrZWQpO1xyXG4gICAgICB0aGlzLnVwZGF0ZUNsYXNzTWFwKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbG9zZVRhZyhlOiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2xvc2UuZW1pdChlKTtcclxuICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5yZW5kZXJlci5wYXJlbnROb2RlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSwgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWZ0ZXJBbmltYXRpb24oZTogQW5pbWF0aW9uRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChlLnRvU3RhdGUgPT09ICd2b2lkJykge1xyXG4gICAgICB0aGlzLmFmdGVyQ2xvc2UuZW1pdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlQ2xhc3NNYXAoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVDbGFzc01hcCgpO1xyXG4gIH1cclxufVxyXG4iXX0=