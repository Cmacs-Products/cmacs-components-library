/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';
var CmacsDashboardWidgetPanelComponent = /** @class */ (function () {
    function CmacsDashboardWidgetPanelComponent() {
        this.backgroundColor = '#f6f7fb';
        this.widgetList = [];
        this.widgetListChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    CmacsDashboardWidgetPanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CmacsDashboardWidgetPanelComponent.prototype.drop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        moveItemInArray(this.widgetList, event.previousIndex, event.currentIndex);
        this.widgetListChange.emit(this.widgetList);
    };
    CmacsDashboardWidgetPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-dashboard-widget-panel',
                    template: "<div class=\"dashboard-panel\" [style.background]=\"backgroundColor\" cdkDropList cdkDropListOrientation=\"horizontal\"  (cdkDropListDropped)=\"drop($event)\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                    styles: [".dashboard-panel{width:100%;min-height:200px;height:auto;padding:40px 31px;display:-webkit-inline-box;display:inline-flex}:host{display:block;width:-webkit-max-content;width:-moz-max-content;width:max-content;min-width:100%}"]
                }] }
    ];
    /** @nocollapse */
    CmacsDashboardWidgetPanelComponent.ctorParameters = function () { return []; };
    CmacsDashboardWidgetPanelComponent.propDecorators = {
        backgroundColor: [{ type: Input }],
        widgetList: [{ type: Input }],
        widgetListChange: [{ type: Output }]
    };
    return CmacsDashboardWidgetPanelComponent;
}());
export { CmacsDashboardWidgetPanelComponent };
if (false) {
    /** @type {?} */
    CmacsDashboardWidgetPanelComponent.prototype.backgroundColor;
    /** @type {?} */
    CmacsDashboardWidgetPanelComponent.prototype.widgetList;
    /** @type {?} */
    CmacsDashboardWidgetPanelComponent.prototype.widgetListChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZGFzaGJvYXJkLXdpZGdldC1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLWRhc2hib2FyZC13aWRnZXQtcGFuZWwvY21hY3MtZGFzaGJvYXJkLXdpZGdldC1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFlLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXRFO0lBV0U7UUFKUyxvQkFBZSxHQUFHLFNBQVMsQ0FBQztRQUM1QixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7SUFFdkMsQ0FBQzs7OztJQUVqQixxREFBUTs7O0lBQVI7SUFDQSxDQUFDOzs7OztJQUVELGlEQUFJOzs7O0lBQUosVUFBSyxLQUE0QjtRQUMvQixlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM5QyxDQUFDOztnQkFuQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw4QkFBOEI7b0JBQ3hDLHdOQUE0RDs7aUJBRTdEOzs7OztrQ0FHRSxLQUFLOzZCQUNMLEtBQUs7bUNBQ0wsTUFBTTs7SUFZVCx5Q0FBQztDQUFBLEFBckJELElBcUJDO1NBaEJZLGtDQUFrQzs7O0lBRTdDLDZEQUFxQzs7SUFDckMsd0RBQWlDOztJQUNqQyw4REFBdUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXkgfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtZGFzaGJvYXJkLXdpZGdldC1wYW5lbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWRhc2hib2FyZC13aWRnZXQtcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWRhc2hib2FyZC13aWRnZXQtcGFuZWwuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0Rhc2hib2FyZFdpZGdldFBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgYmFja2dyb3VuZENvbG9yID0gJyNmNmY3ZmInO1xyXG4gIEBJbnB1dCgpIHdpZGdldExpc3Q6IGFueSBbXSA9IFtdO1xyXG4gIEBPdXRwdXQoKSB3aWRnZXRMaXN0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4pIHtcclxuICAgIG1vdmVJdGVtSW5BcnJheSh0aGlzLndpZGdldExpc3QsIGV2ZW50LnByZXZpb3VzSW5kZXgsIGV2ZW50LmN1cnJlbnRJbmRleCk7XHJcbiAgICB0aGlzLndpZGdldExpc3RDaGFuZ2UuZW1pdCh0aGlzLndpZGdldExpc3QpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19