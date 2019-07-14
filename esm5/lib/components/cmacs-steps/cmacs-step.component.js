/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
var CmacsStepComponent = /** @class */ (function () {
    function CmacsStepComponent(cdr, renderer, elementRef) {
        this.cdr = cdr;
        this.secondary = false;
        this.isCustomStatus = false;
        this._status = 'wait';
        this.oldAPIIcon = true;
        this.isIconString = true;
        // Set by parent.
        this.direction = 'horizontal';
        this.index = 0;
        this.last = false;
        this.outStatus = 'process';
        this.showProcessDot = false;
        this._currentIndex = 0;
        renderer.addClass(elementRef.nativeElement, 'ant-steps-item');
    }
    Object.defineProperty(CmacsStepComponent.prototype, "status", {
        get: /**
         * @return {?}
         */
        function () {
            return this._status;
        },
        set: /**
         * @param {?} status
         * @return {?}
         */
        function (status) {
            this._status = status;
            this.isCustomStatus = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsStepComponent.prototype, "nzIcon", {
        get: /**
         * @return {?}
         */
        function () {
            return this._icon;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!(value instanceof TemplateRef)) {
                this.isIconString = true;
                this.oldAPIIcon = typeof value === 'string' && value.indexOf('anticon') > -1;
            }
            else {
                this.isIconString = false;
            }
            this._icon = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsStepComponent.prototype, "currentIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this._currentIndex;
        },
        set: /**
         * @param {?} current
         * @return {?}
         */
        function (current) {
            this._currentIndex = current;
            if (!this.isCustomStatus) {
                this._status = current > this.index ? 'finish' : current === this.index ? this.outStatus || '' : 'wait';
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CmacsStepComponent.prototype.markForCheck = /**
     * @return {?}
     */
    function () {
        this.cdr.markForCheck();
    };
    CmacsStepComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'cmacs-step',
                    exportAs: 'cmacsStep',
                    preserveWhitespaces: false,
                    template: "<div class=\"ant-steps-item-tail\" *ngIf=\"last !== true\"></div>\r\n<div class=\"ant-steps-item-icon\" [class.ant-steps-item-icon-secondary]=\"secondary\">\r\n  <ng-template [ngIf]=\"!showProcessDot\">\r\n    <span class=\"ant-steps-icon\" *ngIf=\"status === 'finish' && !nzIcon && !secondary\"><i nz-icon type=\"check\"></i></span>\r\n    <span class=\"ant-steps-icon\" *ngIf=\"status === 'error'\"><i nz-icon type=\"close\"></i></span>\r\n    <span class=\"ant-steps-icon\" *ngIf=\"(status === 'process' || status === 'wait') && !nzIcon\"></span>\r\n    <span class=\"ant-steps-icon\" *ngIf=\"nzIcon\">\r\n      <ng-container *ngIf=\"isIconString; else iconTemplate\">\r\n        <i nz-icon [type]=\"!oldAPIIcon && nzIcon\" [ngClass]=\"oldAPIIcon && nzIcon\"></i>\r\n      </ng-container>\r\n      <ng-template #iconTemplate>\r\n      <ng-template [ngTemplateOutlet]=\"nzIcon\"></ng-template>\r\n    </ng-template>\r\n    </span>\r\n  </ng-template>\r\n  <ng-template [ngIf]=\"showProcessDot\">\r\n    <span class=\"ant-steps-icon\">\r\n      <ng-template #processDotTemplate>\r\n        <span class=\"ant-steps-icon-dot\"></span>\r\n      </ng-template>\r\n      <ng-template\r\n        [ngTemplateOutlet]=\"customProcessTemplate||processDotTemplate\"\r\n        [ngTemplateOutletContext]=\"{ $implicit: processDotTemplate, status:status, index:index }\">\r\n      </ng-template>\r\n    </span>\r\n  </ng-template>\r\n</div>\r\n<div class=\"ant-steps-item-content\">\r\n  <div class=\"ant-steps-item-title\" [class.ant-steps-item-title-secondary]=\"secondary\">\r\n    <ng-container *cmacsStringTemplateOutlet=\"title\">{{ title }}</ng-container>\r\n  </div>\r\n  <div class=\"ant-steps-item-description\">\r\n    <ng-container *cmacsStringTemplateOutlet=\"description\">{{ description }}</ng-container>\r\n  </div>\r\n</div>\r\n",
                    host: {
                        '[class.ant-steps-item-wait]': 'status === "wait"',
                        '[class.ant-steps-item-process]': 'status === "process"',
                        '[class.ant-steps-item-finish]': 'status === "finish"',
                        '[class.ant-steps-item-error]': 'status === "error"',
                        '[class.ant-steps-custom]': '!!nzIcon',
                        '[class.ant-steps-next-error]': '(outStatus === "error") && (currentIndex === index + 1)'
                    }
                }] }
    ];
    /** @nocollapse */
    CmacsStepComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    CmacsStepComponent.propDecorators = {
        processDotTemplate: [{ type: ViewChild, args: ['processDotTemplate',] }],
        title: [{ type: Input }],
        secondary: [{ type: Input }],
        description: [{ type: Input }],
        status: [{ type: Input }],
        nzIcon: [{ type: Input }]
    };
    return CmacsStepComponent;
}());
export { CmacsStepComponent };
if (false) {
    /** @type {?} */
    CmacsStepComponent.prototype.processDotTemplate;
    /** @type {?} */
    CmacsStepComponent.prototype.title;
    /** @type {?} */
    CmacsStepComponent.prototype.secondary;
    /** @type {?} */
    CmacsStepComponent.prototype.description;
    /** @type {?} */
    CmacsStepComponent.prototype.isCustomStatus;
    /**
     * @type {?}
     * @private
     */
    CmacsStepComponent.prototype._status;
    /** @type {?} */
    CmacsStepComponent.prototype.oldAPIIcon;
    /** @type {?} */
    CmacsStepComponent.prototype.isIconString;
    /**
     * @type {?}
     * @private
     */
    CmacsStepComponent.prototype._icon;
    /** @type {?} */
    CmacsStepComponent.prototype.customProcessTemplate;
    /** @type {?} */
    CmacsStepComponent.prototype.direction;
    /** @type {?} */
    CmacsStepComponent.prototype.index;
    /** @type {?} */
    CmacsStepComponent.prototype.last;
    /** @type {?} */
    CmacsStepComponent.prototype.outStatus;
    /** @type {?} */
    CmacsStepComponent.prototype.showProcessDot;
    /**
     * @type {?}
     * @private
     */
    CmacsStepComponent.prototype._currentIndex;
    /**
     * @type {?}
     * @private
     */
    CmacsStepComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc3RlcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXN0ZXBzL2NtYWNzLXN0ZXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFJdkI7SUEyRUUsNEJBQW9CLEdBQXNCLEVBQUUsUUFBbUIsRUFBRSxVQUFzQjtRQUFuRSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQXZEakMsY0FBUyxHQUFHLEtBQUssQ0FBQztRQWEzQixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUNmLFlBQU8sR0FBRyxNQUFNLENBQUM7UUFpQnpCLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsaUJBQVksR0FBRyxJQUFJLENBQUM7O1FBSXBCLGNBQVMsR0FBRyxZQUFZLENBQUM7UUFDekIsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNWLFNBQUksR0FBRyxLQUFLLENBQUM7UUFDYixjQUFTLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBYWYsa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFHeEIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDaEUsQ0FBQztJQXRERCxzQkFDSSxzQ0FBTTs7OztRQURWO1lBRUUsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3RCLENBQUM7Ozs7O1FBRUQsVUFBVyxNQUFjO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzdCLENBQUM7OztPQUxBO0lBVUQsc0JBQ0ksc0NBQU07Ozs7UUFEVjtZQUVFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7OztRQUVELFVBQVcsS0FBc0M7WUFDL0MsSUFBSSxDQUFDLENBQUMsS0FBSyxZQUFZLFdBQVcsQ0FBQyxFQUFFO2dCQUNuQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUM5RTtpQkFBTTtnQkFDTCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQzthQUMzQjtZQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLENBQUM7OztPQVZBO0lBdUJELHNCQUFJLDRDQUFZOzs7O1FBQWhCO1lBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzVCLENBQUM7Ozs7O1FBRUQsVUFBaUIsT0FBZTtZQUM5QixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQztZQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQzthQUN6RztRQUNILENBQUM7OztPQVBBOzs7O0lBZUQseUNBQVk7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDOztnQkFqRkYsU0FBUyxTQUFDO29CQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSxXQUFXO29CQUNyQixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixxekRBQTBDO29CQUMxQyxJQUFJLEVBQUU7d0JBQ0osNkJBQTZCLEVBQUUsbUJBQW1CO3dCQUNsRCxnQ0FBZ0MsRUFBRSxzQkFBc0I7d0JBQ3hELCtCQUErQixFQUFFLHFCQUFxQjt3QkFDdEQsOEJBQThCLEVBQUUsb0JBQW9CO3dCQUNwRCwwQkFBMEIsRUFBRSxVQUFVO3dCQUN0Qyw4QkFBOEIsRUFBRSx5REFBeUQ7cUJBQzFGO2lCQUNGOzs7O2dCQTNCQyxpQkFBaUI7Z0JBSWpCLFNBQVM7Z0JBRlQsVUFBVTs7O3FDQTJCVCxTQUFTLFNBQUMsb0JBQW9CO3dCQUU5QixLQUFLOzRCQUNMLEtBQUs7OEJBQ0wsS0FBSzt5QkFFTCxLQUFLO3lCQWFMLEtBQUs7O0lBOENSLHlCQUFDO0NBQUEsQUFsRkQsSUFrRkM7U0FsRVksa0JBQWtCOzs7SUFDN0IsZ0RBQXVFOztJQUV2RSxtQ0FBMkM7O0lBQzNDLHVDQUEyQjs7SUFDM0IseUNBQWlEOztJQVlqRCw0Q0FBdUI7Ozs7O0lBQ3ZCLHFDQUF5Qjs7SUFpQnpCLHdDQUFrQjs7SUFDbEIsMENBQW9COzs7OztJQUNwQixtQ0FBK0M7O0lBRS9DLG1EQUFvRzs7SUFDcEcsdUNBQXlCOztJQUN6QixtQ0FBVTs7SUFDVixrQ0FBYTs7SUFDYix1Q0FBc0I7O0lBQ3RCLDRDQUF1Qjs7Ozs7SUFhdkIsMkNBQTBCOzs7OztJQUVkLGlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTmdDbGFzc1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvcjogJ2NtYWNzLXN0ZXAnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NTdGVwJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mtc3RlcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtc3RlcHMtaXRlbS13YWl0XSc6ICdzdGF0dXMgPT09IFwid2FpdFwiJyxcclxuICAgICdbY2xhc3MuYW50LXN0ZXBzLWl0ZW0tcHJvY2Vzc10nOiAnc3RhdHVzID09PSBcInByb2Nlc3NcIicsXHJcbiAgICAnW2NsYXNzLmFudC1zdGVwcy1pdGVtLWZpbmlzaF0nOiAnc3RhdHVzID09PSBcImZpbmlzaFwiJyxcclxuICAgICdbY2xhc3MuYW50LXN0ZXBzLWl0ZW0tZXJyb3JdJzogJ3N0YXR1cyA9PT0gXCJlcnJvclwiJyxcclxuICAgICdbY2xhc3MuYW50LXN0ZXBzLWN1c3RvbV0nOiAnISFuekljb24nLFxyXG4gICAgJ1tjbGFzcy5hbnQtc3RlcHMtbmV4dC1lcnJvcl0nOiAnKG91dFN0YXR1cyA9PT0gXCJlcnJvclwiKSAmJiAoY3VycmVudEluZGV4ID09PSBpbmRleCArIDEpJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzU3RlcENvbXBvbmVudCB7XHJcbiAgQFZpZXdDaGlsZCgncHJvY2Vzc0RvdFRlbXBsYXRlJykgcHJvY2Vzc0RvdFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIHNlY29uZGFyeSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGRlc2NyaXB0aW9uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgc3RhdHVzKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fc3RhdHVzO1xyXG4gIH1cclxuXHJcbiAgc2V0IHN0YXR1cyhzdGF0dXM6IHN0cmluZykge1xyXG4gICAgdGhpcy5fc3RhdHVzID0gc3RhdHVzO1xyXG4gICAgdGhpcy5pc0N1c3RvbVN0YXR1cyA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBpc0N1c3RvbVN0YXR1cyA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX3N0YXR1cyA9ICd3YWl0JztcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgbnpJY29uKCk6IE5nQ2xhc3NUeXBlIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ljb247XHJcbiAgfVxyXG5cclxuICBzZXQgbnpJY29uKHZhbHVlOiBOZ0NsYXNzVHlwZSB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XHJcbiAgICBpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSkge1xyXG4gICAgICB0aGlzLmlzSWNvblN0cmluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMub2xkQVBJSWNvbiA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUuaW5kZXhPZignYW50aWNvbicpID4gLTE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmlzSWNvblN0cmluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5faWNvbiA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgb2xkQVBJSWNvbiA9IHRydWU7XHJcbiAgaXNJY29uU3RyaW5nID0gdHJ1ZTtcclxuICBwcml2YXRlIF9pY29uOiBOZ0NsYXNzVHlwZSB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBjdXN0b21Qcm9jZXNzVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBUZW1wbGF0ZVJlZjx2b2lkPjsgc3RhdHVzOiBzdHJpbmc7IGluZGV4OiBudW1iZXIgfT47IC8vIFNldCBieSBwYXJlbnQuXHJcbiAgZGlyZWN0aW9uID0gJ2hvcml6b250YWwnO1xyXG4gIGluZGV4ID0gMDtcclxuICBsYXN0ID0gZmFsc2U7XHJcbiAgb3V0U3RhdHVzID0gJ3Byb2Nlc3MnO1xyXG4gIHNob3dQcm9jZXNzRG90ID0gZmFsc2U7XHJcblxyXG4gIGdldCBjdXJyZW50SW5kZXgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9jdXJyZW50SW5kZXg7XHJcbiAgfVxyXG5cclxuICBzZXQgY3VycmVudEluZGV4KGN1cnJlbnQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5fY3VycmVudEluZGV4ID0gY3VycmVudDtcclxuICAgIGlmICghdGhpcy5pc0N1c3RvbVN0YXR1cykge1xyXG4gICAgICB0aGlzLl9zdGF0dXMgPSBjdXJyZW50ID4gdGhpcy5pbmRleCA/ICdmaW5pc2gnIDogY3VycmVudCA9PT0gdGhpcy5pbmRleCA/IHRoaXMub3V0U3RhdHVzIHx8ICcnIDogJ3dhaXQnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfY3VycmVudEluZGV4ID0gMDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtc3RlcHMtaXRlbScpO1xyXG4gIH1cclxuXHJcbiAgbWFya0ZvckNoZWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==