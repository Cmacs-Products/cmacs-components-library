/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormControl } from "@angular/forms";
var CmacsOpenInputComponent = /** @class */ (function () {
    function CmacsOpenInputComponent() {
        this.formControlCustom = new FormControl('', []);
        this.placeholder = '';
    }
    CmacsOpenInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-open-input',
                    exportAs: 'cmacsOpenInput',
                    encapsulation: ViewEncapsulation.None,
                    template: "<input [style.width]=\"width | cmacsToCssUnit\"\r\n       cmacs-input\r\n       [placeholder]=\"placeholder\"\r\n       [formControl]=\"formControlCustom\"\r\n       class=\"cmacs-open-input\"/>\r\n<span class=\"cmacs-open-input-wrapper\"></span>\r\n",
                    styles: [".cmacs-open-input,.cmacs-open-input:focus,.cmacs-open-input:hover{border-top:none!important;border-left:none!important;border-right:none!important;border-bottom:2px dotted #bec4cd!important;padding:0!important;height:25px}cmacs-form-explain.ant-form-explain{color:#f6503c;font-size:10px}.cmacs-open-input-wrapper:after{font-family:UISmall!important;content:\"\\e99f\";font-size:19px;position:absolute;margin-top:-2px;margin-left:5px;color:#bec4cd}.cmacs-open-input:focus~.cmacs-open-input-wrapper:after,.cmacs-open-input:hover~.cmacs-open-input-wrapper:after{color:#2a7cff!important}cmacs-form-label+cmacs-open-input:hover .cmacs-open-input-wrapper:after,cmacs-form-label~cmacs-open-input .cmacs-open-input:focus~.cmacs-open-input-wrapper:after,cmacs-form-label~cmacs-open-input .cmacs-open-input~.cmacs-open-input-wrapper:after{content:\"\"}.ant-form-item-label,.ant-form-item-label>label{color:#acb3bf!important;font-size:12px!important}"]
                }] }
    ];
    /** @nocollapse */
    CmacsOpenInputComponent.ctorParameters = function () { return []; };
    CmacsOpenInputComponent.propDecorators = {
        formControlCustom: [{ type: Input }],
        width: [{ type: Input }],
        placeholder: [{ type: Input }]
    };
    return CmacsOpenInputComponent;
}());
export { CmacsOpenInputComponent };
if (false) {
    /** @type {?} */
    CmacsOpenInputComponent.prototype.formControlCustom;
    /** @type {?} */
    CmacsOpenInputComponent.prototype.width;
    /** @type {?} */
    CmacsOpenInputComponent.prototype.placeholder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtb3Blbi1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLW9wZW4taW5wdXQvY21hY3Mtb3Blbi1pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUVTLGlCQUFpQixFQUNoQyxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0M7SUFhRTtRQUpTLHNCQUFpQixHQUFnQixJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFekQsZ0JBQVcsR0FBVyxFQUFFLENBQUM7SUFJbEMsQ0FBQzs7Z0JBZkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxzUUFBZ0Q7O2lCQUVqRDs7Ozs7b0NBR0UsS0FBSzt3QkFDTCxLQUFLOzhCQUNMLEtBQUs7O0lBTVIsOEJBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQVZZLHVCQUF1Qjs7O0lBRWxDLG9EQUFrRTs7SUFDbEUsd0NBQXVCOztJQUN2Qiw4Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLCBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3Mtb3Blbi1pbnB1dCcsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc09wZW5JbnB1dCcsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mtb3Blbi1pbnB1dC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3Mtb3Blbi1pbnB1dC5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc09wZW5JbnB1dENvbXBvbmVudCB7XHJcblxyXG4gIEBJbnB1dCgpIGZvcm1Db250cm9sQ3VzdG9tOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJywgW10pO1xyXG4gIEBJbnB1dCgpIHdpZHRoOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICcnO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=