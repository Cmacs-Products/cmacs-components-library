/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild, } from '@angular/core';
import { slideAlertMotion } from 'ng-zorro-antd/core';
export class CmacsOpenTextareaComponent {
    constructor() {
        this.value = '';
        this.valueChange = new EventEmitter();
        this.width = 250;
        this.allowEdition = false;
        this.enableDivider = true;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        if (this.textarea && event.target !== this.textarea.nativeElement) {
            this.allowEdition = false;
            this.enableDivider = false;
        }
    }
    /**
     * @return {?}
     */
    isEnabled() {
        if (this.allowEdition || this.value.length === 0) {
            this.allowEdition = true;
            return true;
        }
        this.allowEdition = false;
        return false;
    }
    /**
     * @return {?}
     */
    isTextEnabled() {
        return !this.allowEdition && this.value.length > 0;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    startEdition($event) {
        $event.preventDefault();
        $event.stopImmediatePropagation();
        this.allowEdition = true;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.enableDivider = this.allowEdition;
    }
    /**
     * @return {?}
     */
    updateModel() {
        this.valueChange.emit(this.value);
    }
}
CmacsOpenTextareaComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmacs-open-textarea',
                exportAs: 'cmacsOpenTextarea',
                animations: [slideAlertMotion],
                template: "<div class=\"cmacs-textarea-opened-wrapper\"\r\n     [style.width.px]=\"width\"\r\n     style=\"display: inline-flex;\">\r\n  <cmacs-divider class=\"cmacs-open-textarea-divider\"\r\n                 [style.opacity]=\"enableDivider || value.length === 0 ? 1 : 0\"></cmacs-divider>\r\n  <textarea class=\"cmacs-textarea\"\r\n            *ngIf=\"isEnabled()\"\r\n            [style.width.px]=\"width\"\r\n            #textarea [opened]=\"true\" cmacs-input\r\n            placeholder=\"Please add description...\"\r\n            (keyup)=\"updateModel()\"\r\n            nzAutosize\r\n            [(ngModel)]=\"value\">\r\n    </textarea>\r\n  <span (click)=\"startEdition($event)\"\r\n        [style.width.px]=\"width\"\r\n        *ngIf=\"isTextEnabled()\"\r\n        (mouseover)=\"enableDivider = true;\"\r\n        (mouseout)=\"enableDivider = false;\"\r\n        class=\"cmacs-textarea cmacs-text-area-span\">\r\n      {{value}}\r\n    </span>\r\n</div>\r\n",
                preserveWhitespaces: false,
                styles: [".cmacs-textarea{padding:5px 0 0;overflow:hidden;font-size:12px;min-height:31px;line-height:1.83}.cmacs-text-area-span:after{content:\"\"}.cmacs-text-area-span:hover:after{font-family:UISmall!important;content:\"\\e954\";font-size:19px;position:absolute;margin-top:-3px;margin-left:5px;color:#2a7cff}.cmacs-open-textarea-divider{height:20px;margin-top:2px}.cmacs-input-opened.ant-input:enabled:hover,.cmacs-input-opened.ant-input:focus{box-shadow:none;border:none}textarea.cmacs-input-opened{border:none;resize:none}", `
      cmacs-open-textarea {
        display: block;
      }
    `]
            }] }
];
/** @nocollapse */
CmacsOpenTextareaComponent.ctorParameters = () => [];
CmacsOpenTextareaComponent.propDecorators = {
    value: [{ type: Input }],
    valueChange: [{ type: Output }],
    width: [{ type: Input }],
    textarea: [{ type: ViewChild, args: ['textarea', { read: ElementRef },] }],
    onClick: [{ type: HostListener, args: ['window:click', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    CmacsOpenTextareaComponent.prototype.value;
    /** @type {?} */
    CmacsOpenTextareaComponent.prototype.valueChange;
    /** @type {?} */
    CmacsOpenTextareaComponent.prototype.width;
    /** @type {?} */
    CmacsOpenTextareaComponent.prototype.allowEdition;
    /** @type {?} */
    CmacsOpenTextareaComponent.prototype.enableDivider;
    /** @type {?} */
    CmacsOpenTextareaComponent.prototype.textarea;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtb3Blbi10ZXh0YXJlYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLW9wZW4tdGV4dGFyZWEvY21hY3Mtb3Blbi10ZXh0YXJlYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQUUsVUFBVSxFQUNyQixZQUFZLEVBQUUsWUFBWSxFQUMxQixLQUFLLEVBRUwsTUFBTSxFQUVPLFNBQVMsR0FDdkIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGdCQUFnQixFQUE2QixNQUFNLG9CQUFvQixDQUFDO0FBaUJqRixNQUFNLE9BQU8sMEJBQTBCO0lBU3JDO1FBUFMsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNsQixnQkFBVyxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ2hFLFVBQUssR0FBVyxHQUFHLENBQUM7UUFDN0IsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsa0JBQWEsR0FBRyxJQUFJLENBQUM7SUFHTCxDQUFDOzs7OztJQUdqQixPQUFPLENBQUMsS0FBWTtRQUNsQixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRTtZQUNqRSxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztTQUM1QjtJQUNILENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1AsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNoRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUN6QixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7O0lBRUQsYUFBYTtRQUNYLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxNQUFhO1FBQ3hCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixNQUFNLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUN6QyxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7WUEzREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFVBQVUsRUFBRSxDQUFDLGdCQUFnQixDQUFDO2dCQUM5Qix5OEJBQW1EO2dCQUNuRCxtQkFBbUIsRUFBRSxLQUFLO2dpQkFHeEI7Ozs7S0FJQzthQUVKOzs7OztvQkFHRSxLQUFLOzBCQUNMLE1BQU07b0JBQ04sS0FBSzt1QkFHTCxTQUFTLFNBQUMsVUFBVSxFQUFFLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQztzQkFJeEMsWUFBWSxTQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7OztJQVR4QywyQ0FBNEI7O0lBQzVCLGlEQUF5RTs7SUFDekUsMkNBQTZCOztJQUM3QixrREFBcUI7O0lBQ3JCLG1EQUFxQjs7SUFDckIsOENBQWdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENvbXBvbmVudCwgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgc2xpZGVBbGVydE1vdGlvbiwgSW5wdXRCb29sZWFuLCBOZ0NsYXNzVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLW9wZW4tdGV4dGFyZWEnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NPcGVuVGV4dGFyZWEnLFxyXG4gIGFuaW1hdGlvbnM6IFtzbGlkZUFsZXJ0TW90aW9uXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mtb3Blbi10ZXh0YXJlYS5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3Mtb3Blbi10ZXh0YXJlYS5jb21wb25lbnQuY3NzJ10sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIGNtYWNzLW9wZW4tdGV4dGFyZWEge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NPcGVuVGV4dGFyZWFDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZyA9ICcnO1xyXG4gIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyID0gMjUwO1xyXG4gIGFsbG93RWRpdGlvbiA9IGZhbHNlO1xyXG4gIGVuYWJsZURpdmlkZXIgPSB0cnVlO1xyXG4gIEBWaWV3Q2hpbGQoJ3RleHRhcmVhJywge3JlYWQ6IEVsZW1lbnRSZWZ9KSB0ZXh0YXJlYTogRWxlbWVudFJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OmNsaWNrJywgWyckZXZlbnQnXSlcclxuICBvbkNsaWNrKGV2ZW50OiBFdmVudCkge1xyXG4gICAgaWYgKHRoaXMudGV4dGFyZWEgJiYgZXZlbnQudGFyZ2V0ICE9PSB0aGlzLnRleHRhcmVhLm5hdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5hbGxvd0VkaXRpb24gPSBmYWxzZTtcclxuICAgICAgdGhpcy5lbmFibGVEaXZpZGVyID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc0VuYWJsZWQoKSB7XHJcbiAgICBpZiAodGhpcy5hbGxvd0VkaXRpb24gfHwgdGhpcy52YWx1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgdGhpcy5hbGxvd0VkaXRpb24gPSB0cnVlO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHRoaXMuYWxsb3dFZGl0aW9uID0gZmFsc2U7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpc1RleHRFbmFibGVkKCkge1xyXG4gICAgcmV0dXJuICF0aGlzLmFsbG93RWRpdGlvbiAmJiB0aGlzLnZhbHVlLmxlbmd0aCA+IDA7XHJcbiAgfVxyXG5cclxuICBzdGFydEVkaXRpb24oJGV2ZW50OiBFdmVudCkge1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLmFsbG93RWRpdGlvbiA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmVuYWJsZURpdmlkZXIgPSB0aGlzLmFsbG93RWRpdGlvbjtcclxuICB9XHJcblxyXG4gIHVwZGF0ZU1vZGVsKCkge1xyXG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xyXG4gIH1cclxufVxyXG4iXX0=