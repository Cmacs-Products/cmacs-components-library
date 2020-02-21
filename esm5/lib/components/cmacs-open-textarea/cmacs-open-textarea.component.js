/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, HostListener, Input, ViewChild, } from '@angular/core';
import { slideAlertMotion } from 'ng-zorro-antd/core';
import { FormControl } from "@angular/forms";
var CmacsOpenTextareaComponent = /** @class */ (function () {
    function CmacsOpenTextareaComponent() {
        this.formControlCustom = new FormControl('', []);
        this.width = 250;
        this.placeholder = '';
        this.allowEdition = false;
        this.enableDivider = true;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    CmacsOpenTextareaComponent.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.textarea && event.target !== this.textarea.nativeElement) {
            this.allowEdition = false;
            this.enableDivider = false;
        }
    };
    /**
     * @return {?}
     */
    CmacsOpenTextareaComponent.prototype.isEnabled = /**
     * @return {?}
     */
    function () {
        if (this.allowEdition || !this.formControlCustom.value) {
            this.allowEdition = true;
            return true;
        }
        this.allowEdition = false;
        return false;
    };
    /**
     * @return {?}
     */
    CmacsOpenTextareaComponent.prototype.isTextEnabled = /**
     * @return {?}
     */
    function () {
        return !this.allowEdition && this.formControlCustom.value;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    CmacsOpenTextareaComponent.prototype.startEdition = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        $event.stopImmediatePropagation();
        this.allowEdition = true;
    };
    /**
     * @return {?}
     */
    CmacsOpenTextareaComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.enableDivider = this.allowEdition;
    };
    CmacsOpenTextareaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-open-textarea',
                    exportAs: 'cmacsOpenTextarea',
                    animations: [slideAlertMotion],
                    template: "<div class=\"cmacs-textarea-opened-wrapper\"\r\n     [style.width.px]=\"width\"\r\n     style=\"display: inline-flex;\">\r\n  <cmacs-divider class=\"cmacs-open-textarea-divider\"\r\n                 [style.opacity]=\"enableDivider || !formControlCustom.value\"></cmacs-divider>\r\n  <textarea class=\"cmacs-textarea\"\r\n            *ngIf=\"isEnabled()\"\r\n            [style.width.px]=\"width\"\r\n            #textarea [opened]=\"true\" cmacs-input\r\n            [placeholder]=\"placeholder\"\r\n            [formControl]=\"formControlCustom\"\r\n            nzAutosize>\r\n    </textarea>\r\n  <span (click)=\"startEdition($event)\"\r\n        [style.width.px]=\"width\"\r\n        *ngIf=\"isTextEnabled()\"\r\n        (mouseover)=\"enableDivider = true;\"\r\n        (mouseout)=\"enableDivider = false;\"\r\n        class=\"cmacs-textarea cmacs-text-area-span\">\r\n      {{formControlCustom.value}}\r\n    </span>\r\n</div>\r\n",
                    preserveWhitespaces: false,
                    styles: [".cmacs-textarea{padding:5px 0 0;overflow:hidden;font-size:12px;min-height:31px;line-height:1.83}.cmacs-text-area-span:after{content:\"\"}.cmacs-text-area-span:hover:after{font-family:UISmall!important;content:\"\\e954\";font-size:19px;position:absolute;margin-top:-3px;margin-left:5px;color:#2a7cff}.cmacs-open-textarea-divider{height:20px;margin-top:2px}.cmacs-input-opened.ant-input:enabled:hover,.cmacs-input-opened.ant-input:focus{box-shadow:none;border:none}textarea.cmacs-input-opened{border:none;resize:none}", "\n      cmacs-open-textarea {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    CmacsOpenTextareaComponent.ctorParameters = function () { return []; };
    CmacsOpenTextareaComponent.propDecorators = {
        formControlCustom: [{ type: Input }],
        width: [{ type: Input }],
        placeholder: [{ type: Input }],
        textarea: [{ type: ViewChild, args: ['textarea', { read: ElementRef },] }],
        onClick: [{ type: HostListener, args: ['window:click', ['$event'],] }]
    };
    return CmacsOpenTextareaComponent;
}());
export { CmacsOpenTextareaComponent };
if (false) {
    /** @type {?} */
    CmacsOpenTextareaComponent.prototype.formControlCustom;
    /** @type {?} */
    CmacsOpenTextareaComponent.prototype.width;
    /** @type {?} */
    CmacsOpenTextareaComponent.prototype.placeholder;
    /** @type {?} */
    CmacsOpenTextareaComponent.prototype.allowEdition;
    /** @type {?} */
    CmacsOpenTextareaComponent.prototype.enableDivider;
    /** @type {?} */
    CmacsOpenTextareaComponent.prototype.textarea;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtb3Blbi10ZXh0YXJlYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLW9wZW4tdGV4dGFyZWEvY21hY3Mtb3Blbi10ZXh0YXJlYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQUUsVUFBVSxFQUNQLFlBQVksRUFDMUIsS0FBSyxFQUlRLFNBQVMsR0FDdkIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGdCQUFnQixFQUE2QixNQUFNLG9CQUFvQixDQUFDO0FBQ2pGLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQztJQXdCRTtRQVBTLHNCQUFpQixHQUFnQixJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDekQsVUFBSyxHQUFXLEdBQUcsQ0FBQztRQUNwQixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUNsQyxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixrQkFBYSxHQUFHLElBQUksQ0FBQztJQUdMLENBQUM7Ozs7O0lBR2pCLDRDQUFPOzs7O0lBRFAsVUFDUSxLQUFZO1FBQ2xCLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFO1lBQ2pFLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQzFCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1NBQzVCO0lBQ0gsQ0FBQzs7OztJQUVELDhDQUFTOzs7SUFBVDtRQUNFLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUU7WUFDdEQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDekIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7OztJQUVELGtEQUFhOzs7SUFBYjtRQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7SUFDNUQsQ0FBQzs7Ozs7SUFFRCxpREFBWTs7OztJQUFaLFVBQWEsTUFBYTtRQUN4QixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsTUFBTSxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELG9EQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUN6QyxDQUFDOztnQkF2REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFVBQVUsRUFBRSxDQUFDLGdCQUFnQixDQUFDO29CQUM5QixrN0JBQW1EO29CQUNuRCxtQkFBbUIsRUFBRSxLQUFLO29pQkFHeEIsdUVBSUM7aUJBRUo7Ozs7O29DQUdFLEtBQUs7d0JBQ0wsS0FBSzs4QkFDTCxLQUFLOzJCQUdMLFNBQVMsU0FBQyxVQUFVLEVBQUUsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDOzBCQUl4QyxZQUFZLFNBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxDQUFDOztJQThCMUMsaUNBQUM7Q0FBQSxBQXhERCxJQXdEQztTQXpDWSwwQkFBMEI7OztJQUVyQyx1REFBa0U7O0lBQ2xFLDJDQUE2Qjs7SUFDN0IsaURBQWtDOztJQUNsQyxrREFBcUI7O0lBQ3JCLG1EQUFxQjs7SUFDckIsOENBQWdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENvbXBvbmVudCwgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgc2xpZGVBbGVydE1vdGlvbiwgSW5wdXRCb29sZWFuLCBOZ0NsYXNzVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1vcGVuLXRleHRhcmVhJyxcclxuICBleHBvcnRBczogJ2NtYWNzT3BlblRleHRhcmVhJyxcclxuICBhbmltYXRpb25zOiBbc2xpZGVBbGVydE1vdGlvbl0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLW9wZW4tdGV4dGFyZWEuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLW9wZW4tdGV4dGFyZWEuY29tcG9uZW50LmNzcyddLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBjbWFjcy1vcGVuLXRleHRhcmVhIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzT3BlblRleHRhcmVhQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGZvcm1Db250cm9sQ3VzdG9tOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJywgW10pO1xyXG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXIgPSAyNTA7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICcnO1xyXG4gIGFsbG93RWRpdGlvbiA9IGZhbHNlO1xyXG4gIGVuYWJsZURpdmlkZXIgPSB0cnVlO1xyXG4gIEBWaWV3Q2hpbGQoJ3RleHRhcmVhJywge3JlYWQ6IEVsZW1lbnRSZWZ9KSB0ZXh0YXJlYTogRWxlbWVudFJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OmNsaWNrJywgWyckZXZlbnQnXSlcclxuICBvbkNsaWNrKGV2ZW50OiBFdmVudCkge1xyXG4gICAgaWYgKHRoaXMudGV4dGFyZWEgJiYgZXZlbnQudGFyZ2V0ICE9PSB0aGlzLnRleHRhcmVhLm5hdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5hbGxvd0VkaXRpb24gPSBmYWxzZTtcclxuICAgICAgdGhpcy5lbmFibGVEaXZpZGVyID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc0VuYWJsZWQoKSB7XHJcbiAgICBpZiAodGhpcy5hbGxvd0VkaXRpb24gfHwgIXRoaXMuZm9ybUNvbnRyb2xDdXN0b20udmFsdWUpIHtcclxuICAgICAgdGhpcy5hbGxvd0VkaXRpb24gPSB0cnVlO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHRoaXMuYWxsb3dFZGl0aW9uID0gZmFsc2U7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpc1RleHRFbmFibGVkKCkge1xyXG4gICAgcmV0dXJuICF0aGlzLmFsbG93RWRpdGlvbiAmJiB0aGlzLmZvcm1Db250cm9sQ3VzdG9tLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc3RhcnRFZGl0aW9uKCRldmVudDogRXZlbnQpIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5hbGxvd0VkaXRpb24gPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5lbmFibGVEaXZpZGVyID0gdGhpcy5hbGxvd0VkaXRpb247XHJcbiAgfVxyXG59XHJcbiJdfQ==