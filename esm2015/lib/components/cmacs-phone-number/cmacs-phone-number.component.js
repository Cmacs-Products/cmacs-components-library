/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Output, Input, ViewEncapsulation } from '@angular/core';
export class CmacsPhoneNumberComponent {
    constructor() {
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
                template: "<input type=\"text\"\r\n       ng2TelInput\r\n       cmacs-input\r\n       [ng2TelInputOptions]=\"init\"\r\n       (hasError)=\"hasErrorEvent($event)\"\r\n       (ng2TelOutput)=\"getNumber($event)\"\r\n       (intlTelInputObject)=\"telInputObject($event)\"\r\n       (countryChange)=\"onCountryChange($event)\"\r\n/>\r\n",
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
    hasError: [{ type: Output }],
    telOutput: [{ type: Output }],
    inputObject: [{ type: Output }],
    countryChange: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtcGhvbmUtbnVtYmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtcGhvbmUtbnVtYmVyL2NtYWNzLXBob25lLW51bWJlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUNMLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQVd2QixNQUFNLE9BQU8seUJBQXlCO0lBUXBDO1FBTFUsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3RELGNBQVMsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN2RCxnQkFBVyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3pELGtCQUFhLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7SUFFdEQsQ0FBQzs7Ozs7SUFFaEIsU0FBUyxDQUFDLE1BQU07UUFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7OztJQUNELGNBQWMsQ0FBQyxNQUFNO1FBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBQ0QsZUFBZSxDQUFDLE1BQU07UUFDcEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFDRCxhQUFhLENBQUMsTUFBTTtRQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7WUE5QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLDRVQUFrRDtnQkFDbEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxtQkFBbUIsRUFBRSxLQUFLOzthQUUzQjs7Ozs7bUJBR0UsS0FBSzt1QkFDTCxNQUFNO3dCQUNOLE1BQU07MEJBQ04sTUFBTTs0QkFDTixNQUFNOzs7O0lBSlAseUNBQXNCOztJQUN0Qiw2Q0FBZ0U7O0lBQ2hFLDhDQUFpRTs7SUFDakUsZ0RBQW1FOztJQUNuRSxrREFBcUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgT3V0cHV0LFxyXG4gIElucHV0LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLXBob25lLW51bWJlcicsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1Bob25lTnVtYmVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtcGhvbmUtbnVtYmVyLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXBob25lLW51bWJlci5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1Bob25lTnVtYmVyQ29tcG9uZW50e1xyXG5cclxuICBASW5wdXQoKSBpbml0OiBvYmplY3Q7XHJcbiAgQE91dHB1dCgpIGhhc0Vycm9yOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSB0ZWxPdXRwdXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGlucHV0T2JqZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBjb3VudHJ5Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIGdldE51bWJlcigkZXZlbnQpe1xyXG4gICAgdGhpcy50ZWxPdXRwdXQuZW1pdCgkZXZlbnQpO1xyXG4gIH1cclxuICB0ZWxJbnB1dE9iamVjdCgkZXZlbnQpe1xyXG4gICAgdGhpcy5pbnB1dE9iamVjdC5lbWl0KCRldmVudCk7XHJcbiAgfVxyXG4gIG9uQ291bnRyeUNoYW5nZSgkZXZlbnQpe1xyXG4gICAgdGhpcy5jb3VudHJ5Q2hhbmdlLmVtaXQoJGV2ZW50KTtcclxuICB9XHJcbiAgaGFzRXJyb3JFdmVudCgkZXZlbnQpe1xyXG4gICAgdGhpcy5oYXNFcnJvci5lbWl0KCRldmVudCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=