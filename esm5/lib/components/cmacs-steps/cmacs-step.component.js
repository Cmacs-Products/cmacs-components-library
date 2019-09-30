/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, Input, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from "ng-zorro-antd";
var CmacsStepComponent = /** @class */ (function () {
    function CmacsStepComponent(cdr, renderer, elementRef) {
        this.cdr = cdr;
        this.secondary = false;
        this.clickable = false;
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
    /**
     * @param {?} event
     * @return {?}
     */
    CmacsStepComponent.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var customEvent = new CustomEvent('indexChange', {
            detail: { 'index': this.index },
            bubbles: true
        });
        this.parent.nativeElement.dispatchEvent(customEvent);
    };
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
                        '[class.cmacs-steps-clickable]': 'clickable',
                        '[class.ant-steps-next-error]': '(outStatus === "error") && (currentIndex === index + 1)'
                    },
                    styles: [".cmacs-steps-clickable:hover{cursor:pointer}"]
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
        parent: [{ type: Input }],
        secondary: [{ type: Input }],
        description: [{ type: Input }],
        clickable: [{ type: Input }],
        status: [{ type: Input }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }],
        nzIcon: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsStepComponent.prototype, "clickable", void 0);
    return CmacsStepComponent;
}());
export { CmacsStepComponent };
if (false) {
    /** @type {?} */
    CmacsStepComponent.prototype.processDotTemplate;
    /** @type {?} */
    CmacsStepComponent.prototype.title;
    /** @type {?} */
    CmacsStepComponent.prototype.parent;
    /** @type {?} */
    CmacsStepComponent.prototype.secondary;
    /** @type {?} */
    CmacsStepComponent.prototype.description;
    /** @type {?} */
    CmacsStepComponent.prototype.clickable;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc3RlcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXN0ZXBzL2NtYWNzLXN0ZXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFBRSxZQUFZLEVBR3hCLEtBQUssRUFDTCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUUzQztJQTBGRSw0QkFBb0IsR0FBc0IsRUFBRSxRQUFtQixFQUFFLFVBQXNCO1FBQW5FLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBbkVqQyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBRUYsY0FBUyxHQUFHLEtBQUssQ0FBQztRQVkzQyxtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUNmLFlBQU8sR0FBRyxNQUFNLENBQUM7UUE0QnpCLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsaUJBQVksR0FBRyxJQUFJLENBQUM7O1FBSXBCLGNBQVMsR0FBRyxZQUFZLENBQUM7UUFDekIsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNWLFNBQUksR0FBRyxLQUFLLENBQUM7UUFDYixjQUFTLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBYWYsa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFHeEIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDaEUsQ0FBQztJQWpFRCxzQkFDSSxzQ0FBTTs7OztRQURWO1lBRUUsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3RCLENBQUM7Ozs7O1FBRUQs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Q0FBMkM7O0lBQzNDLG9DQUE0Qjs7SUFDNUIsdUNBQTJCOztJQUMzQix5Q0FBaUQ7O0lBQ2pELHVDQUEyQzs7SUFZM0MsNENBQXVCOzs7OztJQUN2QixxQ0FBeUI7O0lBNEJ6Qix3Q0FBa0I7O0lBQ2xCLDBDQUFvQjs7Ozs7SUFDcEIsbUNBQStDOztJQUUvQyxtREFBb0c7O0lBQ3BHLHVDQUF5Qjs7SUFDekIsbUNBQVU7O0lBQ1Ysa0NBQWE7O0lBQ2IsdUNBQXNCOztJQUN0Qiw0Q0FBdUI7Ozs7O0lBYXZCLDJDQUEwQjs7Ozs7SUFFZCxpQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIE91dHB1dCxcclxuICBJbnB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOZ0NsYXNzVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7SW5wdXRCb29sZWFufSBmcm9tIFwibmctem9ycm8tYW50ZFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvcjogJ2NtYWNzLXN0ZXAnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NTdGVwJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1zdGVwLmNvbXBvbmVudC5jc3MnXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mtc3RlcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtc3RlcHMtaXRlbS13YWl0XSc6ICdzdGF0dXMgPT09IFwid2FpdFwiJyxcclxuICAgICdbY2xhc3MuYW50LXN0ZXBzLWl0ZW0tcHJvY2Vzc10nOiAnc3RhdHVzID09PSBcInByb2Nlc3NcIicsXHJcbiAgICAnW2NsYXNzLmFudC1zdGVwcy1pdGVtLWZpbmlzaF0nOiAnc3RhdHVzID09PSBcImZpbmlzaFwiJyxcclxuICAgICdbY2xhc3MuYW50LXN0ZXBzLWl0ZW0tZXJyb3JdJzogJ3N0YXR1cyA9PT0gXCJlcnJvclwiJyxcclxuICAgICdbY2xhc3MuYW50LXN0ZXBzLWN1c3RvbV0nOiAnISFuekljb24nLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1zdGVwcy1jbGlja2FibGVdJzogJ2NsaWNrYWJsZScsXHJcbiAgICAnW2NsYXNzLmFudC1zdGVwcy1uZXh0LWVycm9yXSc6ICcob3V0U3RhdHVzID09PSBcImVycm9yXCIpICYmIChjdXJyZW50SW5kZXggPT09IGluZGV4ICsgMSknXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NTdGVwQ29tcG9uZW50IHtcclxuICBAVmlld0NoaWxkKCdwcm9jZXNzRG90VGVtcGxhdGUnKSBwcm9jZXNzRG90VGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgcGFyZW50OiBFbGVtZW50UmVmO1xyXG4gIEBJbnB1dCgpIHNlY29uZGFyeSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGRlc2NyaXB0aW9uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgY2xpY2thYmxlID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHN0YXR1cygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3N0YXR1cztcclxuICB9XHJcblxyXG4gIHNldCBzdGF0dXMoc3RhdHVzOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3N0YXR1cyA9IHN0YXR1cztcclxuICAgIHRoaXMuaXNDdXN0b21TdGF0dXMgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgaXNDdXN0b21TdGF0dXMgPSBmYWxzZTtcclxuICBwcml2YXRlIF9zdGF0dXMgPSAnd2FpdCc7XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSkgb25DbGljayhldmVudDogRXZlbnQpIHtcclxuICAgIHZhciBjdXN0b21FdmVudCA9IG5ldyBDdXN0b21FdmVudChcclxuICAgICAgJ2luZGV4Q2hhbmdlJyxcclxuICAgICAge1xyXG4gICAgICAgIGRldGFpbDogeyAnaW5kZXgnOiB0aGlzLmluZGV4IH0sXHJcbiAgICAgICAgYnViYmxlczogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgdGhpcy5wYXJlbnQubmF0aXZlRWxlbWVudC5kaXNwYXRjaEV2ZW50KGN1c3RvbUV2ZW50KTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IG56SWNvbigpOiBOZ0NsYXNzVHlwZSB8IFRlbXBsYXRlUmVmPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9pY29uO1xyXG4gIH1cclxuXHJcbiAgc2V0IG56SWNvbih2YWx1ZTogTmdDbGFzc1R5cGUgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xyXG4gICAgaWYgKCEodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikpIHtcclxuICAgICAgdGhpcy5pc0ljb25TdHJpbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLm9sZEFQSUljb24gPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLmluZGV4T2YoJ2FudGljb24nKSA+IC0xO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pc0ljb25TdHJpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHRoaXMuX2ljb24gPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIG9sZEFQSUljb24gPSB0cnVlO1xyXG4gIGlzSWNvblN0cmluZyA9IHRydWU7XHJcbiAgcHJpdmF0ZSBfaWNvbjogTmdDbGFzc1R5cGUgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgY3VzdG9tUHJvY2Vzc1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogVGVtcGxhdGVSZWY8dm9pZD47IHN0YXR1czogc3RyaW5nOyBpbmRleDogbnVtYmVyIH0+OyAvLyBTZXQgYnkgcGFyZW50LlxyXG4gIGRpcmVjdGlvbiA9ICdob3Jpem9udGFsJztcclxuICBpbmRleCA9IDA7XHJcbiAgbGFzdCA9IGZhbHNlO1xyXG4gIG91dFN0YXR1cyA9ICdwcm9jZXNzJztcclxuICBzaG93UHJvY2Vzc0RvdCA9IGZhbHNlO1xyXG5cclxuICBnZXQgY3VycmVudEluZGV4KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudEluZGV4O1xyXG4gIH1cclxuXHJcbiAgc2V0IGN1cnJlbnRJbmRleChjdXJyZW50OiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2N1cnJlbnRJbmRleCA9IGN1cnJlbnQ7XHJcbiAgICBpZiAoIXRoaXMuaXNDdXN0b21TdGF0dXMpIHtcclxuICAgICAgdGhpcy5fc3RhdHVzID0gY3VycmVudCA+IHRoaXMuaW5kZXggPyAnZmluaXNoJyA6IGN1cnJlbnQgPT09IHRoaXMuaW5kZXggPyB0aGlzLm91dFN0YXR1cyB8fCAnJyA6ICd3YWl0JztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2N1cnJlbnRJbmRleCA9IDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LXN0ZXBzLWl0ZW0nKTtcclxuICB9XHJcblxyXG4gIG1hcmtGb3JDaGVjaygpOiB2b2lkIHtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxufVxyXG4iXX0=