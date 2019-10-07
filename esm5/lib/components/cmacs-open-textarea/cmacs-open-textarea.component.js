/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild, } from '@angular/core';
import { slideAlertMotion } from 'ng-zorro-antd/core';
var CmacsOpenTextareaComponent = /** @class */ (function () {
    function CmacsOpenTextareaComponent() {
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
        if (this.allowEdition || this.value.length === 0) {
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
        return !this.allowEdition && this.value.length > 0;
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
    /**
     * @return {?}
     */
    CmacsOpenTextareaComponent.prototype.updateModel = /**
     * @return {?}
     */
    function () {
        this.valueChange.emit(this.value);
    };
    CmacsOpenTextareaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-open-textarea',
                    exportAs: 'cmacsOpenTextarea',
                    animations: [slideAlertMotion],
                    template: "<div class=\"cmacs-textarea-opened-wrapper\"\r\n     [style.width.px]=\"width\"\r\n     style=\"display: inline-flex;\">\r\n  <cmacs-divider class=\"cmacs-open-textarea-divider\"\r\n                 [style.opacity]=\"enableDivider || value.length === 0 ? 1 : 0\"></cmacs-divider>\r\n  <textarea class=\"cmacs-textarea\"\r\n            *ngIf=\"isEnabled()\"\r\n            [style.width.px]=\"width\"\r\n            #textarea [opened]=\"true\" cmacs-input\r\n            placeholder=\"Please add description...\"\r\n            (keyup)=\"updateModel()\"\r\n            nzAutosize\r\n            [(ngModel)]=\"value\">\r\n    </textarea>\r\n  <span (click)=\"startEdition($event)\"\r\n        [style.width.px]=\"width\"\r\n        *ngIf=\"isTextEnabled()\"\r\n        (mouseover)=\"enableDivider = true;\"\r\n        (mouseout)=\"enableDivider = false;\"\r\n        class=\"cmacs-textarea cmacs-text-area-span\">\r\n      {{value}}\r\n    </span>\r\n</div>\r\n",
                    preserveWhitespaces: false,
                    styles: [".cmacs-textarea{padding:5px 0 0;overflow:hidden;font-size:12px;min-height:31px;line-height:1.2}.cmacs-text-area-span:after{content:\"\"}.cmacs-text-area-span:hover:after{font-family:UISmall!important;content:\"\\e954\";font-size:19px;position:absolute;margin-top:-3px;margin-left:5px;color:#2a7cff}.cmacs-open-textarea-divider{height:20px;margin-top:2px}.cmacs-input-opened.ant-input:enabled:hover,.cmacs-input-opened.ant-input:focus{box-shadow:none;border:none}textarea.cmacs-input-opened{border:none;resize:none}", "\n      cmacs-open-textarea {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    CmacsOpenTextareaComponent.ctorParameters = function () { return []; };
    CmacsOpenTextareaComponent.propDecorators = {
        value: [{ type: Input }],
        valueChange: [{ type: Output }],
        width: [{ type: Input }],
        textarea: [{ type: ViewChild, args: ['textarea', { read: ElementRef },] }],
        onClick: [{ type: HostListener, args: ['window:click', ['$event'],] }]
    };
    return CmacsOpenTextareaComponent;
}());
export { CmacsOpenTextareaComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtb3Blbi10ZXh0YXJlYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLW9wZW4tdGV4dGFyZWEvY21hY3Mtb3Blbi10ZXh0YXJlYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQUUsVUFBVSxFQUNyQixZQUFZLEVBQUUsWUFBWSxFQUMxQixLQUFLLEVBRUwsTUFBTSxFQUVPLFNBQVMsR0FDdkIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGdCQUFnQixFQUE2QixNQUFNLG9CQUFvQixDQUFDO0FBRWpGO0lBd0JFO1FBUFMsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNsQixnQkFBVyxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ2hFLFVBQUssR0FBVyxHQUFHLENBQUM7UUFDN0IsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsa0JBQWEsR0FBRyxJQUFJLENBQUM7SUFHTCxDQUFDOzs7OztJQUdqQiw0Q0FBTzs7OztJQURQLFVBQ1EsS0FBWTtRQUNsQixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRTtZQUNqRSxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztTQUM1QjtJQUNILENBQUM7Ozs7SUFFRCw4Q0FBUzs7O0lBQVQ7UUFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ2hELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7SUFFRCxrREFBYTs7O0lBQWI7UUFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7SUFFRCxpREFBWTs7OztJQUFaLFVBQWEsTUFBYTtRQUN4QixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsTUFBTSxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELG9EQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUN6QyxDQUFDOzs7O0lBRUQsZ0RBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7O2dCQTNERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsVUFBVSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7b0JBQzlCLHk4QkFBbUQ7b0JBQ25ELG1CQUFtQixFQUFFLEtBQUs7bWlCQUd4Qix1RUFJQztpQkFFSjs7Ozs7d0JBR0UsS0FBSzs4QkFDTCxNQUFNO3dCQUNOLEtBQUs7MkJBR0wsU0FBUyxTQUFDLFVBQVUsRUFBRSxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUM7MEJBSXhDLFlBQVksU0FBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBa0MxQyxpQ0FBQztDQUFBLEFBNURELElBNERDO1NBN0NZLDBCQUEwQjs7O0lBRXJDLDJDQUE0Qjs7SUFDNUIsaURBQXlFOztJQUN6RSwyQ0FBNkI7O0lBQzdCLGtEQUFxQjs7SUFDckIsbURBQXFCOztJQUNyQiw4Q0FBZ0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ29tcG9uZW50LCBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBzbGlkZUFsZXJ0TW90aW9uLCBJbnB1dEJvb2xlYW4sIE5nQ2xhc3NUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3Mtb3Blbi10ZXh0YXJlYScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc09wZW5UZXh0YXJlYScsXHJcbiAgYW5pbWF0aW9uczogW3NsaWRlQWxlcnRNb3Rpb25dLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1vcGVuLXRleHRhcmVhLmNvbXBvbmVudC5odG1sJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1vcGVuLXRleHRhcmVhLmNvbXBvbmVudC5jc3MnXSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgY21hY3Mtb3Blbi10ZXh0YXJlYSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc09wZW5UZXh0YXJlYUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nID0gJyc7XHJcbiAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXIgPSAyNTA7XHJcbiAgYWxsb3dFZGl0aW9uID0gZmFsc2U7XHJcbiAgZW5hYmxlRGl2aWRlciA9IHRydWU7XHJcbiAgQFZpZXdDaGlsZCgndGV4dGFyZWEnLCB7cmVhZDogRWxlbWVudFJlZn0pIHRleHRhcmVhOiBFbGVtZW50UmVmO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6Y2xpY2snLCBbJyRldmVudCddKVxyXG4gIG9uQ2xpY2soZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy50ZXh0YXJlYSAmJiBldmVudC50YXJnZXQgIT09IHRoaXMudGV4dGFyZWEubmF0aXZlRWxlbWVudCkge1xyXG4gICAgICB0aGlzLmFsbG93RWRpdGlvbiA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmVuYWJsZURpdmlkZXIgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzRW5hYmxlZCgpIHtcclxuICAgIGlmICh0aGlzLmFsbG93RWRpdGlvbiB8fCB0aGlzLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0aGlzLmFsbG93RWRpdGlvbiA9IHRydWU7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5hbGxvd0VkaXRpb24gPSBmYWxzZTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlzVGV4dEVuYWJsZWQoKSB7XHJcbiAgICByZXR1cm4gIXRoaXMuYWxsb3dFZGl0aW9uICYmIHRoaXMudmFsdWUubGVuZ3RoID4gMDtcclxuICB9XHJcblxyXG4gIHN0YXJ0RWRpdGlvbigkZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICRldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuYWxsb3dFZGl0aW9uID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuZW5hYmxlRGl2aWRlciA9IHRoaXMuYWxsb3dFZGl0aW9uO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlTW9kZWwoKSB7XHJcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==