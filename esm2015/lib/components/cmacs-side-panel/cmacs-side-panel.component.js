/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class CmacsSidePanelComponent {
    constructor() {
        this.width = 370;
        this.float = 'right';
        this.visible = true;
        this.collapsible = false;
        this.visibleChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.visible !== undefined) {
            this.visibleChange.emit(this.visible);
        }
    }
}
CmacsSidePanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmacs-side-panel',
                template: "<div\r\n  class=\"cmacs-side-panel-wrapper\"\r\n  [class.cmacs-side-panel-collapsible-wrapper]=\"collapsible\"\r\n  [style.width]=\"width | cmacsToCssUnit\"\r\n  [style.float]=\"float\"\r\n  *ngIf=\"visible\"\r\n>\r\n  <div></div>\r\n  <div class=\"cmacs-side-panel-content\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n",
                styles: [".cmacs-side-panel-wrapper{height:100%;box-shadow:0 2px 4px 0 rgba(0,0,0,.1);background-color:#fff;padding:24px 0 0 30px;-webkit-transition:.3s;transition:.3s}.cmacs-side-panel-content{height:100%}.cmacs-side-panel-collapsible-wrapper{box-shadow:7px 0 7px 0 rgba(59,63,70,.2)}.cmacs-side-panel-collapsible-wrapper::before{content:''}"]
            }] }
];
/** @nocollapse */
CmacsSidePanelComponent.ctorParameters = () => [];
CmacsSidePanelComponent.propDecorators = {
    width: [{ type: Input }],
    float: [{ type: Input }],
    visible: [{ type: Input }],
    collapsible: [{ type: Input }],
    visibleChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    CmacsSidePanelComponent.prototype.width;
    /** @type {?} */
    CmacsSidePanelComponent.prototype.float;
    /** @type {?} */
    CmacsSidePanelComponent.prototype.visible;
    /** @type {?} */
    CmacsSidePanelComponent.prototype.collapsible;
    /** @type {?} */
    CmacsSidePanelComponent.prototype.visibleChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2lkZS1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXNpZGUtcGFuZWwvY21hY3Mtc2lkZS1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBR2IsTUFBTSxlQUFlLENBQUM7QUFPdkIsTUFBTSxPQUFPLHVCQUF1QjtJQVFsQztRQU5TLFVBQUssR0FBb0IsR0FBRyxDQUFDO1FBQzdCLFVBQUssR0FBVyxPQUFPLENBQUM7UUFDeEIsWUFBTyxHQUFZLElBQUksQ0FBQztRQUN4QixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM1QixrQkFBYSxHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDO0lBRTdELENBQUM7Ozs7SUFFakIsUUFBUSxLQUFLLENBQUM7Ozs7O0lBRWQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQzs7O1lBckJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QiwyVkFBZ0Q7O2FBRWpEOzs7OztvQkFHRSxLQUFLO29CQUNMLEtBQUs7c0JBQ0wsS0FBSzswQkFDTCxLQUFLOzRCQUNMLE1BQU07Ozs7SUFKUCx3Q0FBc0M7O0lBQ3RDLHdDQUFpQzs7SUFDakMsMENBQWlDOztJQUNqQyw4Q0FBc0M7O0lBQ3RDLGdEQUE2RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgT25DaGFuZ2VzXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLXNpZGUtcGFuZWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1zaWRlLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1zaWRlLXBhbmVsLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NTaWRlUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcblxyXG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXIgfCBzdHJpbmcgPSAzNzA7XHJcbiAgQElucHV0KCkgZmxvYXQ6IHN0cmluZyA9ICdyaWdodCc7XHJcbiAgQElucHV0KCkgdmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgY29sbGFwc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgdmlzaWJsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy52aXNpYmxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy52aXNpYmxlQ2hhbmdlLmVtaXQodGhpcy52aXNpYmxlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==