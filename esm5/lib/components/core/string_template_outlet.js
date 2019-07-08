/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
var CmacsStringTemplateOutletDirective = /** @class */ (function () {
    function CmacsStringTemplateOutletDirective(viewContainer, defaultTemplate) {
        this.viewContainer = viewContainer;
        this.defaultTemplate = defaultTemplate;
        this.inputTemplate = null;
        this.inputViewRef = null;
        this.defaultViewRef = null;
    }
    Object.defineProperty(CmacsStringTemplateOutletDirective.prototype, "cmacsStringTemplateOutlet", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this.isTemplate = true;
                this.inputTemplate = value;
            }
            else {
                this.isTemplate = false;
            }
            this.updateView();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CmacsStringTemplateOutletDirective.prototype.updateView = /**
     * @return {?}
     */
    function () {
        if (!this.isTemplate) {
            if (!this.defaultViewRef) {
                this.viewContainer.clear();
                this.inputViewRef = null;
                if (this.defaultTemplate) {
                    this.defaultViewRef = this.viewContainer.createEmbeddedView(this.defaultTemplate);
                }
            }
        }
        else {
            if (!this.inputViewRef) {
                this.viewContainer.clear();
                this.defaultViewRef = null;
                if (this.inputTemplate) {
                    this.inputViewRef = this.viewContainer.createEmbeddedView(this.inputTemplate);
                }
            }
        }
    };
    CmacsStringTemplateOutletDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line: directive-selector
                    selector: '[cmacsStringTemplateOutlet]',
                    exportAs: 'cmacsStringTemplateOutlet'
                },] }
    ];
    /** @nocollapse */
    CmacsStringTemplateOutletDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: TemplateRef }
    ]; };
    CmacsStringTemplateOutletDirective.propDecorators = {
        cmacsStringTemplateOutlet: [{ type: Input }]
    };
    return CmacsStringTemplateOutletDirective;
}());
export { CmacsStringTemplateOutletDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CmacsStringTemplateOutletDirective.prototype.isTemplate;
    /**
     * @type {?}
     * @private
     */
    CmacsStringTemplateOutletDirective.prototype.inputTemplate;
    /**
     * @type {?}
     * @private
     */
    CmacsStringTemplateOutletDirective.prototype.inputViewRef;
    /**
     * @type {?}
     * @private
     */
    CmacsStringTemplateOutletDirective.prototype.defaultViewRef;
    /**
     * @type {?}
     * @private
     */
    CmacsStringTemplateOutletDirective.prototype.viewContainer;
    /**
     * @type {?}
     * @private
     */
    CmacsStringTemplateOutletDirective.prototype.defaultTemplate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nX3RlbXBsYXRlX291dGxldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY29yZS9zdHJpbmdfdGVtcGxhdGVfb3V0bGV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFtQixLQUFLLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpHO0lBV0UsNENBQW9CLGFBQStCLEVBQVUsZUFBa0M7UUFBM0Usa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQW1CO1FBSnZGLGtCQUFhLEdBQTZCLElBQUksQ0FBQztRQUMvQyxpQkFBWSxHQUFpQyxJQUFJLENBQUM7UUFDbEQsbUJBQWMsR0FBaUMsSUFBSSxDQUFDO0lBRXNDLENBQUM7SUFFbkcsc0JBQ0kseUVBQXlCOzs7OztRQUQ3QixVQUM4QixLQUFpQztZQUM3RCxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQzthQUM1QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQzthQUN6QjtZQUNELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNwQixDQUFDOzs7T0FBQTs7OztJQUVELHVEQUFVOzs7SUFBVjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO2dCQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDekIsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO29CQUN4QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2lCQUNuRjthQUNGO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUMzQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztnQkFDM0IsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO29CQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2lCQUMvRTthQUNGO1NBQ0Y7SUFDSCxDQUFDOztnQkExQ0YsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsNkJBQTZCO29CQUN2QyxRQUFRLEVBQUUsMkJBQTJCO2lCQUN0Qzs7OztnQkFOd0QsZ0JBQWdCO2dCQUE3QixXQUFXOzs7NENBZXBELEtBQUs7O0lBOEJSLHlDQUFDO0NBQUEsQUEzQ0QsSUEyQ0M7U0F0Q1ksa0NBQWtDOzs7Ozs7SUFDN0Msd0RBQTRCOzs7OztJQUM1QiwyREFBdUQ7Ozs7O0lBQ3ZELDBEQUEwRDs7Ozs7SUFDMUQsNERBQTREOzs7OztJQUVoRCwyREFBdUM7Ozs7O0lBQUUsNkRBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbWJlZGRlZFZpZXdSZWYsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGlyZWN0aXZlLXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdbY21hY3NTdHJpbmdUZW1wbGF0ZU91dGxldF0nLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NTdHJpbmdUZW1wbGF0ZU91dGxldCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzU3RyaW5nVGVtcGxhdGVPdXRsZXREaXJlY3RpdmUge1xyXG4gIHByaXZhdGUgaXNUZW1wbGF0ZTogYm9vbGVhbjtcclxuICBwcml2YXRlIGlucHV0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBpbnB1dFZpZXdSZWY6IEVtYmVkZGVkVmlld1JlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgZGVmYXVsdFZpZXdSZWY6IEVtYmVkZGVkVmlld1JlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgZGVmYXVsdFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPikge31cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgY21hY3NTdHJpbmdUZW1wbGF0ZU91dGxldCh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIHRoaXMuaXNUZW1wbGF0ZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuaW5wdXRUZW1wbGF0ZSA9IHZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pc1RlbXBsYXRlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVZpZXcoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuaXNUZW1wbGF0ZSkge1xyXG4gICAgICBpZiAoIXRoaXMuZGVmYXVsdFZpZXdSZWYpIHtcclxuICAgICAgICB0aGlzLnZpZXdDb250YWluZXIuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmlucHV0Vmlld1JlZiA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdFRlbXBsYXRlKSB7XHJcbiAgICAgICAgICB0aGlzLmRlZmF1bHRWaWV3UmVmID0gdGhpcy52aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLmRlZmF1bHRUZW1wbGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoIXRoaXMuaW5wdXRWaWV3UmVmKSB7XHJcbiAgICAgICAgdGhpcy52aWV3Q29udGFpbmVyLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0Vmlld1JlZiA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRUZW1wbGF0ZSkge1xyXG4gICAgICAgICAgdGhpcy5pbnB1dFZpZXdSZWYgPSB0aGlzLnZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMuaW5wdXRUZW1wbGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==