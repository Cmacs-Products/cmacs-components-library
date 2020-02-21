/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Output, Input, ViewEncapsulation } from '@angular/core';
import { FormControl } from "@angular/forms";
export class CmacsPhoneNumberComponent {
    constructor() {
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
    getNumber($event) {
        this.telOutput.emit($event);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    telInputObject($event) {
        this.inputObject.emit($event);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onCountryChange($event) {
        this.countryChange.emit($event);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    hasErrorEvent($event) {
        this.hasError.emit($event);
    }
}
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
CmacsPhoneNumberComponent.ctorParameters = () => [];
CmacsPhoneNumberComponent.propDecorators = {
    init: [{ type: Input }],
    formControlCustom: [{ type: Input }],
    hasError: [{ type: Output }],
    telOutput: [{ type: Output }],
    inputObject: [{ type: Output }],
    countryChange: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtcGhvbmUtbnVtYmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtcGhvbmUtbnVtYmVyL2NtYWNzLXBob25lLW51bWJlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUNMLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFXM0MsTUFBTSxPQUFPLHlCQUF5QjtJQVNwQztRQU5TLHNCQUFpQixHQUFnQixJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEQsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3RELGNBQVMsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN2RCxnQkFBVyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3pELGtCQUFhLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7SUFFdEQsQ0FBQzs7Ozs7SUFFaEIsU0FBUyxDQUFDLE1BQU07UUFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7OztJQUNELGNBQWMsQ0FBQyxNQUFNO1FBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBQ0QsZUFBZSxDQUFDLE1BQU07UUFDcEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFDRCxhQUFhLENBQUMsTUFBTTtRQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7WUEvQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLDBYQUFrRDtnQkFDbEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxtQkFBbUIsRUFBRSxLQUFLOzthQUUzQjs7Ozs7bUJBR0UsS0FBSztnQ0FDTCxLQUFLO3VCQUNMLE1BQU07d0JBQ04sTUFBTTswQkFDTixNQUFNOzRCQUNOLE1BQU07Ozs7SUFMUCx5Q0FBc0I7O0lBQ3RCLHNEQUFrRTs7SUFDbEUsNkNBQWdFOztJQUNoRSw4Q0FBaUU7O0lBQ2pFLGdEQUFtRTs7SUFDbkUsa0RBQXFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIE91dHB1dCxcclxuICBJbnB1dCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtcGhvbmUtbnVtYmVyJyxcclxuICBleHBvcnRBczogJ2NtYWNzUGhvbmVOdW1iZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1waG9uZS1udW1iZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtcGhvbmUtbnVtYmVyLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzUGhvbmVOdW1iZXJDb21wb25lbnR7XHJcblxyXG4gIEBJbnB1dCgpIGluaXQ6IG9iamVjdDtcclxuICBASW5wdXQoKSBmb3JtQ29udHJvbEN1c3RvbTogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycsIFtdKTtcclxuICBAT3V0cHV0KCkgaGFzRXJyb3I6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIHRlbE91dHB1dDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgaW5wdXRPYmplY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGNvdW50cnlDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgZ2V0TnVtYmVyKCRldmVudCl7XHJcbiAgICB0aGlzLnRlbE91dHB1dC5lbWl0KCRldmVudCk7XHJcbiAgfVxyXG4gIHRlbElucHV0T2JqZWN0KCRldmVudCl7XHJcbiAgICB0aGlzLmlucHV0T2JqZWN0LmVtaXQoJGV2ZW50KTtcclxuICB9XHJcbiAgb25Db3VudHJ5Q2hhbmdlKCRldmVudCl7XHJcbiAgICB0aGlzLmNvdW50cnlDaGFuZ2UuZW1pdCgkZXZlbnQpO1xyXG4gIH1cclxuICBoYXNFcnJvckV2ZW50KCRldmVudCl7XHJcbiAgICB0aGlzLmhhc0Vycm9yLmVtaXQoJGV2ZW50KTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==