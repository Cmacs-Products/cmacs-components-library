/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Output, Input, ViewEncapsulation } from '@angular/core';
import { FormControl } from "@angular/forms";
var CmacsPhoneNumberComponent = /** @class */ (function () {
    function CmacsPhoneNumberComponent() {
        this.formControlCustom = new FormControl('', []);
        this.hasError = new EventEmitter();
        this.telOutput = new EventEmitter();
        this.inputObject = new EventEmitter();
        this.countryChange = new EventEmitter();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    CmacsPhoneNumberComponent.prototype.getNumber = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.telOutput.emit($event);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    CmacsPhoneNumberComponent.prototype.telInputObject = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.inputObject.emit($event);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    CmacsPhoneNumberComponent.prototype.onCountryChange = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.countryChange.emit($event);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    CmacsPhoneNumberComponent.prototype.hasErrorEvent = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.hasError.emit($event);
    };
    CmacsPhoneNumberComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-phone-number',
                    exportAs: 'cmacsPhoneNumber',
                    template: "<input type=\"text\"\r\n       ng2TelInput\r\n       cmacs-input\r\n       [ng2TelInputOptions]=\"init\"\r\n       [formControl]=\"formControlCustom\"\r\n       (hasError)=\"hasErrorEvent($event)\"\r\n       (ng2TelOutput)=\"getNumber($event)\"\r\n       (intlTelInputObject)=\"telInputObject($event)\"\r\n       (countryChange)=\"onCountryChange($event)\"\r\n/>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    styles: [".iti__country-list{position:absolute}.iti__selected-flag{border-right:1px solid #dee0e5}.iti--allow-dropdown input,.iti--allow-dropdown input[type=text]{padding-left:60px}"]
                }] }
    ];
    /** @nocollapse */
    CmacsPhoneNumberComponent.ctorParameters = function () { return []; };
    CmacsPhoneNumberComponent.propDecorators = {
        init: [{ type: Input }],
        formControlCustom: [{ type: Input }],
        hasError: [{ type: Output }],
        telOutput: [{ type: Output }],
        inputObject: [{ type: Output }],
        countryChange: [{ type: Output }]
    };
    return CmacsPhoneNumberComponent;
}());
export { CmacsPhoneNumberComponent };
if (false) {
    /** @type {?} */
    CmacsPhoneNumberComponent.prototype.init;
    /** @type {?} */
    CmacsPhoneNumberComponent.prototype.formControlCustom;
    /** @type {?} */
    CmacsPhoneNumberComponent.prototype.hasError;
    /** @type {?} */
    CmacsPhoneNumberComponent.prototype.telOutput;
    /** @type {?} */
    CmacsPhoneNumberComponent.prototype.inputObject;
    /** @type {?} */
    CmacsPhoneNumberComponent.prototype.countryChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtcGhvbmUtbnVtYmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtcGhvbmUtbnVtYmVyL2NtYWNzLXBob25lLW51bWJlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUNMLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0M7SUFrQkU7UUFOUyxzQkFBaUIsR0FBZ0IsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN0RCxjQUFTLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDdkQsZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN6RCxrQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBRXRELENBQUM7Ozs7O0lBRWhCLDZDQUFTOzs7O0lBQVQsVUFBVSxNQUFNO1FBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFDRCxrREFBYzs7OztJQUFkLFVBQWUsTUFBTTtRQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUNELG1EQUFlOzs7O0lBQWYsVUFBZ0IsTUFBTTtRQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUNELGlEQUFhOzs7O0lBQWIsVUFBYyxNQUFNO1FBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdCLENBQUM7O2dCQS9CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsMFhBQWtEO29CQUNsRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7O2lCQUUzQjs7Ozs7dUJBR0UsS0FBSztvQ0FDTCxLQUFLOzJCQUNMLE1BQU07NEJBQ04sTUFBTTs4QkFDTixNQUFNO2dDQUNOLE1BQU07O0lBaUJULGdDQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7U0F4QlkseUJBQXlCOzs7SUFFcEMseUNBQXNCOztJQUN0QixzREFBa0U7O0lBQ2xFLDZDQUFnRTs7SUFDaEUsOENBQWlFOztJQUNqRSxnREFBbUU7O0lBQ25FLGtEQUFxRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBPdXRwdXQsXHJcbiAgSW5wdXQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLXBob25lLW51bWJlcicsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1Bob25lTnVtYmVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtcGhvbmUtbnVtYmVyLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXBob25lLW51bWJlci5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1Bob25lTnVtYmVyQ29tcG9uZW50e1xyXG5cclxuICBASW5wdXQoKSBpbml0OiBvYmplY3Q7XHJcbiAgQElucHV0KCkgZm9ybUNvbnRyb2xDdXN0b206IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnLCBbXSk7XHJcbiAgQE91dHB1dCgpIGhhc0Vycm9yOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSB0ZWxPdXRwdXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGlucHV0T2JqZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBjb3VudHJ5Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIGdldE51bWJlcigkZXZlbnQpe1xyXG4gICAgdGhpcy50ZWxPdXRwdXQuZW1pdCgkZXZlbnQpO1xyXG4gIH1cclxuICB0ZWxJbnB1dE9iamVjdCgkZXZlbnQpe1xyXG4gICAgdGhpcy5pbnB1dE9iamVjdC5lbWl0KCRldmVudCk7XHJcbiAgfVxyXG4gIG9uQ291bnRyeUNoYW5nZSgkZXZlbnQpe1xyXG4gICAgdGhpcy5jb3VudHJ5Q2hhbmdlLmVtaXQoJGV2ZW50KTtcclxuICB9XHJcbiAgaGFzRXJyb3JFdmVudCgkZXZlbnQpe1xyXG4gICAgdGhpcy5oYXNFcnJvci5lbWl0KCRldmVudCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=