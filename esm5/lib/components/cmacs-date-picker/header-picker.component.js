/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { valueFunctionProp, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { DateHelperService, NzI18nService } from 'ng-zorro-antd/i18n';
import { AbstractPickerComponent } from './abstract-picker.component';
import { CandyDate } from './lib/candy-date/candy-date';
/**
 * The base picker for header panels, current support: Year/Month
 */
var CmacsHeaderPickerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CmacsHeaderPickerComponent, _super);
    function CmacsHeaderPickerComponent(i18n, cdr, dateHelper, noAnimation) {
        return _super.call(this, i18n, cdr, dateHelper, noAnimation) || this;
    }
    /**
     * @return {?}
     */
    CmacsHeaderPickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
        this.panelMode = this.endPanelMode;
        /** @type {?} */
        var allHeaderPanels = ['decade', 'year', 'month'];
        this.supportPanels = allHeaderPanels.slice(0, allHeaderPanels.indexOf(this.endPanelMode) + 1);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsHeaderPickerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        if (changes.nzRenderExtraFooter) {
            this.extraFooter = valueFunctionProp(this.renderExtraFooter);
        }
    };
    /**
     * @param {?} mode
     * @return {?}
     */
    CmacsHeaderPickerComponent.prototype.onPanelModeChange = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        if (this.supportPanels.indexOf(mode) > -1) {
            this.panelMode = mode;
        }
        else {
            // Since the default "click year" logic can be "year panel" -> "date panel", we need force to the end panel otherwise
            this.panelMode = this.endPanelMode;
        }
    };
    /**
     * @param {?} mode
     * @param {?} value
     * @return {?}
     */
    CmacsHeaderPickerComponent.prototype.onChooseValue = /**
     * @param {?} mode
     * @param {?} value
     * @return {?}
     */
    function (mode, value) {
        if (this.endPanelMode === mode) {
            _super.prototype.onValueChange.call(this, value);
            this.closeOverlay();
        }
    };
    /**
     * @param {?} open
     * @return {?}
     */
    CmacsHeaderPickerComponent.prototype.onOpenChange = /**
     * @param {?} open
     * @return {?}
     */
    function (open) {
        if (!open) {
            this.cleanUp();
        }
        this.cmacsOnOpenChange.emit(open);
    };
    // Restore some initial props to let open as new in next time
    // Restore some initial props to let open as new in next time
    /**
     * @private
     * @return {?}
     */
    CmacsHeaderPickerComponent.prototype.cleanUp = 
    // Restore some initial props to let open as new in next time
    /**
     * @private
     * @return {?}
     */
    function () {
        this.panelMode = this.endPanelMode;
    };
    CmacsHeaderPickerComponent.decorators = [
        { type: Component, args: [{
                    template: ""
                }] }
    ];
    /** @nocollapse */
    CmacsHeaderPickerComponent.ctorParameters = function () { return [
        { type: NzI18nService },
        { type: ChangeDetectorRef },
        { type: DateHelperService },
        { type: NzNoAnimationDirective }
    ]; };
    CmacsHeaderPickerComponent.propDecorators = {
        placeHolder: [{ type: Input }],
        renderExtraFooter: [{ type: Input }],
        defaultValue: [{ type: Input }],
        format: [{ type: Input }]
    };
    return CmacsHeaderPickerComponent;
}(AbstractPickerComponent));
export { CmacsHeaderPickerComponent };
if (false) {
    /** @type {?} */
    CmacsHeaderPickerComponent.prototype.placeHolder;
    /** @type {?} */
    CmacsHeaderPickerComponent.prototype.renderExtraFooter;
    /** @type {?} */
    CmacsHeaderPickerComponent.prototype.defaultValue;
    /** @type {?} */
    CmacsHeaderPickerComponent.prototype.format;
    /** @type {?} */
    CmacsHeaderPickerComponent.prototype.endPanelMode;
    /** @type {?} */
    CmacsHeaderPickerComponent.prototype.panelMode;
    /** @type {?} */
    CmacsHeaderPickerComponent.prototype.extraFooter;
    /**
     * @type {?}
     * @private
     */
    CmacsHeaderPickerComponent.prototype.supportPanels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLWRhdGUtcGlja2VyL2hlYWRlci1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWlELE1BQU0sZUFBZSxDQUFDO0FBRW5ILE9BQU8sRUFBRSxpQkFBaUIsRUFBZ0Isc0JBQXNCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM3RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7O0FBT3hEO0lBR2dELHNEQUF1QjtJQWFyRSxvQ0FDRSxJQUFtQixFQUNuQixHQUFzQixFQUN0QixVQUE2QixFQUM3QixXQUFvQztlQUVwQyxrQkFBTSxJQUFJLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxXQUFXLENBQUM7SUFDM0MsQ0FBQzs7OztJQUVELDZDQUFROzs7SUFBUjtRQUNFLGlCQUFNLFFBQVEsV0FBRSxDQUFDO1FBRWpCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQzs7WUFFN0IsZUFBZSxHQUFnQixDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxhQUFhLEdBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDaEcsQ0FBQzs7Ozs7SUFFRCxnREFBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsaUJBQU0sV0FBVyxZQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTNCLElBQUksT0FBTyxDQUFDLG1CQUFtQixFQUFFO1lBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDOUQ7SUFDSCxDQUFDOzs7OztJQUVELHNEQUFpQjs7OztJQUFqQixVQUFrQixJQUFlO1FBQy9CLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDekMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDdkI7YUFBTTtZQUNMLHFIQUFxSDtZQUNySCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDcEM7SUFDSCxDQUFDOzs7Ozs7SUFFRCxrREFBYTs7Ozs7SUFBYixVQUFjLElBQXdCLEVBQUUsS0FBZ0I7UUFDdEQsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLElBQUksRUFBRTtZQUM5QixpQkFBTSxhQUFhLFlBQUMsS0FBSyxDQUFDLENBQUM7WUFFM0IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxpREFBWTs7OztJQUFaLFVBQWEsSUFBYTtRQUN4QixJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2hCO1FBQ0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsNkRBQTZEOzs7Ozs7SUFDckQsNENBQU87Ozs7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQ3JDLENBQUM7O2dCQXJFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLEVBQUU7aUJBQ2I7Ozs7Z0JBWjJCLGFBQWE7Z0JBSGhDLGlCQUFpQjtnQkFHakIsaUJBQWlCO2dCQURnQixzQkFBc0I7Ozs4QkFlN0QsS0FBSztvQ0FFTCxLQUFLOytCQUNMLEtBQUs7eUJBQ0wsS0FBSzs7SUE4RFIsaUNBQUM7Q0FBQSxBQXRFRCxDQUdnRCx1QkFBdUIsR0FtRXRFO1NBbkVZLDBCQUEwQjs7O0lBQ3JDLGlEQUE2Qjs7SUFFN0IsdURBQXFFOztJQUNyRSxrREFBaUM7O0lBQ2pDLDRDQUF3Qjs7SUFFeEIsa0RBQWlDOztJQUNqQywrQ0FBcUI7O0lBQ3JCLGlEQUF3Qzs7Ozs7SUFFeEMsbURBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgdmFsdWVGdW5jdGlvblByb3AsIEZ1bmN0aW9uUHJvcCwgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IERhdGVIZWxwZXJTZXJ2aWNlLCBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuXHJcbmltcG9ydCB7IEFic3RyYWN0UGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9hYnN0cmFjdC1waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnLi9saWIvY2FuZHktZGF0ZS9jYW5keS1kYXRlJztcclxuaW1wb3J0IHsgUGFuZWxNb2RlIH0gZnJvbSAnLi9zdGFuZGFyZC10eXBlcyc7XHJcblxyXG4vKipcclxuICogVGhlIGJhc2UgcGlja2VyIGZvciBoZWFkZXIgcGFuZWxzLCBjdXJyZW50IHN1cHBvcnQ6IFllYXIvTW9udGhcclxuICovXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICB0ZW1wbGF0ZTogYGBcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzSGVhZGVyUGlja2VyQ29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgcGxhY2VIb2xkZXI6IHN0cmluZztcclxuXHJcbiAgQElucHV0KCkgcmVuZGVyRXh0cmFGb290ZXI6IEZ1bmN0aW9uUHJvcDxUZW1wbGF0ZVJlZjx2b2lkPiB8IHN0cmluZz47XHJcbiAgQElucHV0KCkgZGVmYXVsdFZhbHVlOiBDYW5keURhdGU7XHJcbiAgQElucHV0KCkgZm9ybWF0OiBzdHJpbmc7IC8vIFtDYW5tcGxlbWVudGVkIGJ5IHN1YiBjbGFzc10gVGhlIG91dHB1dCBmb3JtYXRcclxuXHJcbiAgZW5kUGFuZWxNb2RlOiBTdXBwb3J0SGVhZGVyUGFuZWw7IC8vIFtJbXBsZW1lbnRlZCBieSBzdWIgY2xhc3NdIFRoZSBmaW5hbCBwYW5lbCBmb3IgcGlja2luZyBhIGRhdGVcclxuICBwYW5lbE1vZGU6IFBhbmVsTW9kZTsgLy8gQ3VycmVudCBwYW5lbCBtb2RlXHJcbiAgZXh0cmFGb290ZXI6IFRlbXBsYXRlUmVmPHZvaWQ+IHwgc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIHN1cHBvcnRQYW5lbHM6IFBhbmVsTW9kZVtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGkxOG46IE56STE4blNlcnZpY2UsXHJcbiAgICBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgZGF0ZUhlbHBlcjogRGF0ZUhlbHBlclNlcnZpY2UsXHJcbiAgICBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHtcclxuICAgIHN1cGVyKGkxOG4sIGNkciwgZGF0ZUhlbHBlciwgbm9BbmltYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xyXG5cclxuICAgIHRoaXMucGFuZWxNb2RlID0gdGhpcy5lbmRQYW5lbE1vZGU7XHJcblxyXG4gICAgY29uc3QgYWxsSGVhZGVyUGFuZWxzOiBQYW5lbE1vZGVbXSA9IFsnZGVjYWRlJywgJ3llYXInLCAnbW9udGgnXTtcclxuICAgIHRoaXMuc3VwcG9ydFBhbmVscyA9IGFsbEhlYWRlclBhbmVscy5zbGljZSgwLCBhbGxIZWFkZXJQYW5lbHMuaW5kZXhPZih0aGlzLmVuZFBhbmVsTW9kZSkgKyAxKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nT25DaGFuZ2VzKGNoYW5nZXMpO1xyXG5cclxuICAgIGlmIChjaGFuZ2VzLm56UmVuZGVyRXh0cmFGb290ZXIpIHtcclxuICAgICAgdGhpcy5leHRyYUZvb3RlciA9IHZhbHVlRnVuY3Rpb25Qcm9wKHRoaXMucmVuZGVyRXh0cmFGb290ZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25QYW5lbE1vZGVDaGFuZ2UobW9kZTogUGFuZWxNb2RlKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zdXBwb3J0UGFuZWxzLmluZGV4T2YobW9kZSkgPiAtMSkge1xyXG4gICAgICB0aGlzLnBhbmVsTW9kZSA9IG1vZGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBTaW5jZSB0aGUgZGVmYXVsdCBcImNsaWNrIHllYXJcIiBsb2dpYyBjYW4gYmUgXCJ5ZWFyIHBhbmVsXCIgLT4gXCJkYXRlIHBhbmVsXCIsIHdlIG5lZWQgZm9yY2UgdG8gdGhlIGVuZCBwYW5lbCBvdGhlcndpc2VcclxuICAgICAgdGhpcy5wYW5lbE1vZGUgPSB0aGlzLmVuZFBhbmVsTW9kZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2hvb3NlVmFsdWUobW9kZTogU3VwcG9ydEhlYWRlclBhbmVsLCB2YWx1ZTogQ2FuZHlEYXRlKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5lbmRQYW5lbE1vZGUgPT09IG1vZGUpIHtcclxuICAgICAgc3VwZXIub25WYWx1ZUNoYW5nZSh2YWx1ZSk7XHJcblxyXG4gICAgICB0aGlzLmNsb3NlT3ZlcmxheSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25PcGVuQ2hhbmdlKG9wZW46IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmICghb3Blbikge1xyXG4gICAgICB0aGlzLmNsZWFuVXAoKTtcclxuICAgIH1cclxuICAgIHRoaXMuY21hY3NPbk9wZW5DaGFuZ2UuZW1pdChvcGVuKTtcclxuICB9XHJcblxyXG4gIC8vIFJlc3RvcmUgc29tZSBpbml0aWFsIHByb3BzIHRvIGxldCBvcGVuIGFzIG5ldyBpbiBuZXh0IHRpbWVcclxuICBwcml2YXRlIGNsZWFuVXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLnBhbmVsTW9kZSA9IHRoaXMuZW5kUGFuZWxNb2RlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgU3VwcG9ydEhlYWRlclBhbmVsID0gJ3llYXInIHwgJ21vbnRoJztcclxuIl19