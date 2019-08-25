/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Output, Input, ViewEncapsulation } from '@angular/core';
var CmacsPhoneNumberComponent = /** @class */ (function () {
    function CmacsPhoneNumberComponent() {
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
                    template: "<input type=\"text\"\r\n       ng2TelInput\r\n       cmacs-input\r\n       [ng2TelInputOptions]=\"init\"\r\n       (hasError)=\"hasErrorEvent($event)\"\r\n       (ng2TelOutput)=\"getNumber($event)\"\r\n       (intlTelInputObject)=\"telInputObject($event)\"\r\n       (countryChange)=\"onCountryChange($event)\"\r\n/>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    styles: [".iti__country-list{position:fixed}.iti__selected-flag{border-right:1px solid #dee0e5}.iti--allow-dropdown input,.iti--allow-dropdown input[type=text]{padding-left:60px}"]
                }] }
    ];
    /** @nocollapse */
    CmacsPhoneNumberComponent.ctorParameters = function () { return []; };
    CmacsPhoneNumberComponent.propDecorators = {
        init: [{ type: Input }],
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
    CmacsPhoneNumberComponent.prototype.hasError;
    /** @type {?} */
    CmacsPhoneNumberComponent.prototype.telOutput;
    /** @type {?} */
    CmacsPhoneNumberComponent.prototype.inputObject;
    /** @type {?} */
    CmacsPhoneNumberComponent.prototype.countryChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtcGhvbmUtbnVtYmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtcGhvbmUtbnVtYmVyL2NtYWNzLXBob25lLW51bWJlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUNMLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QjtJQWlCRTtRQUxVLGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN0RCxjQUFTLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDdkQsZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN6RCxrQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBRXRELENBQUM7Ozs7O0lBRWhCLDZDQUFTOzs7O0lBQVQsVUFBVSxNQUFNO1FBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFDRCxrREFBYzs7OztJQUFkLFVBQWUsTUFBTTtRQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUNELG1EQUFlOzs7O0lBQWYsVUFBZ0IsTUFBTTtRQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUNELGlEQUFhOzs7O0lBQWIsVUFBYyxNQUFNO1FBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdCLENBQUM7O2dCQTlCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsNFVBQWtEO29CQUNsRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7O2lCQUUzQjs7Ozs7dUJBR0UsS0FBSzsyQkFDTCxNQUFNOzRCQUNOLE1BQU07OEJBQ04sTUFBTTtnQ0FDTixNQUFNOztJQWlCVCxnQ0FBQztDQUFBLEFBaENELElBZ0NDO1NBdkJZLHlCQUF5Qjs7O0lBRXBDLHlDQUFzQjs7SUFDdEIsNkNBQWdFOztJQUNoRSw4Q0FBaUU7O0lBQ2pFLGdEQUFtRTs7SUFDbkUsa0RBQXFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIE91dHB1dCxcclxuICBJbnB1dCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1waG9uZS1udW1iZXInLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NQaG9uZU51bWJlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXBob25lLW51bWJlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1waG9uZS1udW1iZXIuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NQaG9uZU51bWJlckNvbXBvbmVudHtcclxuXHJcbiAgQElucHV0KCkgaW5pdDogb2JqZWN0O1xyXG4gIEBPdXRwdXQoKSBoYXNFcnJvcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgdGVsT3V0cHV0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBpbnB1dE9iamVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgY291bnRyeUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBnZXROdW1iZXIoJGV2ZW50KXtcclxuICAgIHRoaXMudGVsT3V0cHV0LmVtaXQoJGV2ZW50KTtcclxuICB9XHJcbiAgdGVsSW5wdXRPYmplY3QoJGV2ZW50KXtcclxuICAgIHRoaXMuaW5wdXRPYmplY3QuZW1pdCgkZXZlbnQpO1xyXG4gIH1cclxuICBvbkNvdW50cnlDaGFuZ2UoJGV2ZW50KXtcclxuICAgIHRoaXMuY291bnRyeUNoYW5nZS5lbWl0KCRldmVudCk7XHJcbiAgfVxyXG4gIGhhc0Vycm9yRXZlbnQoJGV2ZW50KXtcclxuICAgIHRoaXMuaGFzRXJyb3IuZW1pdCgkZXZlbnQpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19