/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { slideMotion } from 'ng-zorro-antd/core';
import { DateHelperService } from 'ng-zorro-antd/i18n';
import { DomSanitizer } from "@angular/platform-browser";
export class CmacsPickerComponent {
    /**
     * @param {?} dateHelper
     * @param {?} sanitizer
     * @param {?} changeDetector
     */
    constructor(dateHelper, sanitizer, changeDetector) {
        this.dateHelper = dateHelper;
        this.sanitizer = sanitizer;
        this.changeDetector = changeDetector;
        this.noAnimation = false;
        this.isRange = false;
        this.open = undefined;
        this.cmacsOpen = false;
        this.valueChange = new EventEmitter();
        this.openChange = new EventEmitter(); // Emitted when overlay's open state change
        this.prefixCls = 'ant-calendar';
        this.animationOpenState = false;
        this.overlayOpen = false; // Available when "open"=undefined
        // Available when "open"=undefined
        this.overlayOffsetY = 0;
        this.overlayOffsetX = -2;
        this.overlayPositions = (/** @type {?} */ ([
            {
                // offsetX: -10, // TODO: What a pity, cdk/overlay current not support offset configs even though it already provide these properties
                // offsetY: -10,
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'top'
            },
            {
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'bottom'
            },
            {
                originX: 'end',
                originY: 'top',
                overlayX: 'end',
                overlayY: 'top'
            },
            {
                originX: 'end',
                originY: 'bottom',
                overlayX: 'end',
                overlayY: 'bottom'
            }
        ]));
        this.dropdownAnimation = 'bottom';
        this.currentPositionX = 'start';
        this.currentPositionY = 'top';
    }
    /**
     * @return {?}
     */
    get realOpenState() {
        // The value that really decide the open state of overlay
        return this.isOpenHandledByUser() ? !!this.open : this.overlayOpen;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.cmacsStyle) {
            this.cmacsStyle = this.sanitizer.bypassSecurityTrustStyle(this.cmacsStyle.toString());
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.autoFocus) {
            if (this.isRange) {
                /** @type {?} */
                const firstInput = (/** @type {?} */ (((/** @type {?} */ (this.pickerInput.nativeElement))).querySelector('input:first-child')));
                firstInput.focus(); // Focus on the first input
            }
            else {
                this.pickerInput.nativeElement.focus();
            }
        }
    }
    // Show overlay content
    /**
     * @return {?}
     */
    showOverlay() {
        if (!this.realOpenState) {
            this.overlayOpen = true;
            this.openChange.emit(this.overlayOpen);
            setTimeout((/**
             * @return {?}
             */
            () => {
                if (this.cdkConnectedOverlay && this.cdkConnectedOverlay.overlayRef) {
                    this.cdkConnectedOverlay.overlayRef.updatePosition();
                }
            }));
        }
    }
    /**
     * @return {?}
     */
    hideOverlay() {
        if (this.realOpenState) {
            this.overlayOpen = false;
            this.openChange.emit(this.overlayOpen);
        }
    }
    /**
     * @return {?}
     */
    onClickInputBox() {
        if (!this.disabled && !this.isOpenHandledByUser()) {
            this.showOverlay();
        }
    }
    /**
     * @return {?}
     */
    onClickBackdrop() {
        this.hideOverlay();
    }
    /**
     * @return {?}
     */
    onOverlayDetach() {
        this.hideOverlay();
    }
    /**
     * @param {?} position
     * @return {?}
     */
    onPositionChange(position) {
        this.dropdownAnimation = position.connectionPair.originY === 'top' ? 'bottom' : 'top';
        this.currentPositionX = (/** @type {?} */ (position.connectionPair.originX));
        this.currentPositionY = (/** @type {?} */ (position.connectionPair.originY));
        this.changeDetector.detectChanges(); // Take side-effects to position styles
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClickClear(event) {
        event.preventDefault();
        event.stopPropagation();
        this.value = this.isRange ? [] : null;
        this.valueChange.emit(this.value);
    }
    /**
     * @param {?=} partType
     * @return {?}
     */
    getReadableValue(partType) {
        /** @type {?} */
        let value;
        if (this.isRange) {
            value = ((/** @type {?} */ (this.value)))[this.getPartTypeIndex((/** @type {?} */ (partType)))];
        }
        else {
            value = (/** @type {?} */ (this.value));
        }
        return value ? this.dateHelper.format(value.nativeDate, this.format) : null;
    }
    /**
     * @param {?} partType
     * @return {?}
     */
    getPartTypeIndex(partType) {
        return { left: 0, right: 1 }[partType];
    }
    /**
     * @param {?=} partType
     * @return {?}
     */
    getPlaceholder(partType) {
        // tslint:disable-next-line: no-non-null-assertion
        return this.isRange ? this.placeholder[this.getPartTypeIndex((/** @type {?} */ (partType)))] : ((/** @type {?} */ (this.placeholder)));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isEmptyValue(value) {
        if (value === null) {
            return true;
        }
        else if (this.isRange) {
            return !value || !Array.isArray(value) || value.every((/**
             * @param {?} val
             * @return {?}
             */
            val => !val));
        }
        else {
            return !value;
        }
    }
    // Whether open state is permanently controlled by user himself
    /**
     * @return {?}
     */
    isOpenHandledByUser() {
        return this.open !== undefined;
    }
    /**
     * @return {?}
     */
    animationStart() {
        if (this.realOpenState) {
            this.animationOpenState = true;
        }
    }
    /**
     * @return {?}
     */
    animationDone() {
        this.animationOpenState = this.realOpenState;
    }
}
CmacsPickerComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                // tslint:disable-next-line: component-selector
                selector: 'cmacs-picker',
                exportAs: 'cmacsPicker',
                template: "<!--[ngStyle]=\"cmacsStyle\"-->\r\n<span\r\n  cdkOverlayOrigin\r\n  #origin=\"cdkOverlayOrigin\"\r\n  class=\"{{ prefixCls }}-picker {{ size ? prefixCls + '-picker-' + size : '' }} {{ className }}\"\r\n  [style.width]=\"width\"\r\n  tabindex=\"0\"\r\n  (click)=\"onClickInputBox()\"\r\n  [class.cmacs-open-date-picker]=\"cmacsOpen\"\r\n>\r\n  <!-- Content of single picker -->\r\n  <ng-container *ngIf=\"!isRange\">\r\n    <input\r\n      #pickerInput\r\n      class=\"{{ prefixCls }}-picker-input ant-input\"\r\n      [class.ant-input-lg]=\"size === 'large'\"\r\n      [class.ant-input-sm]=\"size === 'small'\"\r\n      [class.ant-input-disabled]=\"disabled\"\r\n      [class.cmacs-open-date-picker-input]=\"cmacsOpen\"\r\n\r\n      [disabled]=\"disabled\"\r\n      readonly\r\n      value=\"{{ getReadableValue() }}\"\r\n      placeholder=\"{{ getPlaceholder() }}\"\r\n    />\r\n    <ng-container *ngTemplateOutlet=\"tplRightRest\"></ng-container>\r\n  </ng-container>\r\n\r\n  <!-- Content of range picker -->\r\n  <ng-container *ngIf=\"isRange\">\r\n    <span\r\n      #pickerInput\r\n      class=\"{{ prefixCls }}-picker-input ant-input\"\r\n      [class.ant-input-lg]=\"size === 'large'\"\r\n      [class.ant-input-sm]=\"size === 'small'\"\r\n      [class.ant-input-disabled]=\"disabled\"\r\n      [class.cmacs-open-date-picker-input]=\"cmacsOpen\"\r\n    >\r\n      <ng-container *ngTemplateOutlet=\"tplRangeInput; context: { partType: 'left' }\"></ng-container>\r\n      <span class=\"{{ prefixCls }}-range-picker-separator\"> ~ </span>\r\n      <ng-container *ngTemplateOutlet=\"tplRangeInput; context: { partType: 'right' }\"></ng-container>\r\n      <ng-container *ngTemplateOutlet=\"tplRightRest\"></ng-container>\r\n    </span>\r\n  </ng-container>\r\n</span>\r\n\r\n<!-- Input for Range ONLY -->\r\n<ng-template #tplRangeInput let-partType=\"partType\">\r\n  <input\r\n    class=\"{{ prefixCls }}-range-picker-input\"\r\n    [disabled]=\"disabled\"\r\n    readonly\r\n    value=\"{{ getReadableValue(partType) }}\"\r\n    placeholder=\"{{ getPlaceholder(partType) }}\"\r\n  />\r\n</ng-template>\r\n\r\n<!-- Right operator icons -->\r\n<ng-template #tplRightRest>\r\n  <i\r\n    nz-icon\r\n    [class.cmacs-open-date-picker-icon]=\"cmacsOpen\"\r\n    type=\"close-circle\"\r\n    theme=\"fill\"\r\n    *ngIf=\"!disabled && !isEmptyValue(value) && allowClear\"\r\n    class=\"{{ prefixCls }}-picker-clear\"\r\n    (click)=\"onClickClear($event)\"\r\n  ></i>\r\n  <span class=\"{{ prefixCls }}-picker-icon\" [class.cmacs-open-date-picker-icon]=\"cmacsOpen\">\r\n    <i nz-icon type=\"calendar\"></i>\r\n  </span>\r\n</ng-template>\r\n\r\n<!-- Overlay -->\r\n<ng-template\r\n  cdkConnectedOverlay\r\n  nzConnectedOverlay\r\n  [cdkConnectedOverlayOrigin]=\"origin\"\r\n  [cdkConnectedOverlayOpen]=\"realOpenState\"\r\n  [cdkConnectedOverlayHasBackdrop]=\"!isOpenHandledByUser()\"\r\n  [cdkConnectedOverlayPositions]=\"overlayPositions\"\r\n  (positionChange)=\"onPositionChange($event)\"\r\n  (backdropClick)=\"onClickBackdrop()\"\r\n  (detach)=\"onOverlayDetach()\"\r\n>\r\n  <div\r\n    [nzNoAnimation]=\"noAnimation\"\r\n    [@slideMotion]=\"dropdownAnimation\"\r\n    (@slideMotion.start)=\"animationStart()\"\r\n    (@slideMotion.done)=\"animationDone()\"\r\n    style=\"position: relative;\"\r\n    [style.left]=\"currentPositionX === 'start' ? '-2px' : '2px'\"\r\n    [style.top]=\"currentPositionY === 'top' ? '-2px' : '2px'\"\r\n  > <!-- Compatible for overlay that not support offset dynamically and immediately -->\r\n    <ng-content></ng-content>\r\n  </div>\r\n</ng-template>\r\n",
                animations: [slideMotion],
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".cmacs-open-date-picker-input,.cmacs-open-date-picker-input:focus,.cmacs-open-date-picker-input:hover{border-top-color:transparent!important;border-left-color:transparent!important;border-right-color:transparent!important;border-radius:unset}.ant-calendar-picker:hover .cmacs-open-date-picker-icon,.cmacs-open-date-picker-icon,.cmacs-open-date-picker:hover .ant-calendar-picker-clear{color:transparent!important;display:none!important;opacity:0!important}.cmacs-open-date-picker-input{padding:0;font-size:12px;height:0;color:transparent}.cmacs-open-date-picker-input .ant-calendar-range-picker-input,.cmacs-open-date-picker-input .ant-calendar-range-picker-separator,.cmacs-open-date-picker:hover .ant-calendar-range-picker-input{color:transparent}"]
            }] }
];
/** @nocollapse */
CmacsPickerComponent.ctorParameters = () => [
    { type: DateHelperService },
    { type: DomSanitizer },
    { type: ChangeDetectorRef }
];
CmacsPickerComponent.propDecorators = {
    noAnimation: [{ type: Input }],
    isRange: [{ type: Input }],
    open: [{ type: Input }],
    disabled: [{ type: Input }],
    placeholder: [{ type: Input }],
    allowClear: [{ type: Input }],
    autoFocus: [{ type: Input }],
    className: [{ type: Input }],
    format: [{ type: Input }],
    size: [{ type: Input }],
    cmacsStyle: [{ type: Input }],
    cmacsOpen: [{ type: Input }],
    width: [{ type: Input }],
    value: [{ type: Input }],
    valueChange: [{ type: Output }],
    openChange: [{ type: Output }],
    origin: [{ type: ViewChild, args: ['origin',] }],
    cdkConnectedOverlay: [{ type: ViewChild, args: [CdkConnectedOverlay,] }],
    pickerInput: [{ type: ViewChild, args: ['pickerInput',] }]
};
if (false) {
    /** @type {?} */
    CmacsPickerComponent.prototype.noAnimation;
    /** @type {?} */
    CmacsPickerComponent.prototype.isRange;
    /** @type {?} */
    CmacsPickerComponent.prototype.open;
    /** @type {?} */
    CmacsPickerComponent.prototype.disabled;
    /** @type {?} */
    CmacsPickerComponent.prototype.placeholder;
    /** @type {?} */
    CmacsPickerComponent.prototype.allowClear;
    /** @type {?} */
    CmacsPickerComponent.prototype.autoFocus;
    /** @type {?} */
    CmacsPickerComponent.prototype.className;
    /** @type {?} */
    CmacsPickerComponent.prototype.format;
    /** @type {?} */
    CmacsPickerComponent.prototype.size;
    /** @type {?} */
    CmacsPickerComponent.prototype.cmacsStyle;
    /** @type {?} */
    CmacsPickerComponent.prototype.cmacsOpen;
    /** @type {?} */
    CmacsPickerComponent.prototype.width;
    /** @type {?} */
    CmacsPickerComponent.prototype.value;
    /** @type {?} */
    CmacsPickerComponent.prototype.valueChange;
    /** @type {?} */
    CmacsPickerComponent.prototype.openChange;
    /** @type {?} */
    CmacsPickerComponent.prototype.origin;
    /** @type {?} */
    CmacsPickerComponent.prototype.cdkConnectedOverlay;
    /** @type {?} */
    CmacsPickerComponent.prototype.pickerInput;
    /** @type {?} */
    CmacsPickerComponent.prototype.prefixCls;
    /** @type {?} */
    CmacsPickerComponent.prototype.animationOpenState;
    /** @type {?} */
    CmacsPickerComponent.prototype.overlayOpen;
    /** @type {?} */
    CmacsPickerComponent.prototype.overlayOffsetY;
    /** @type {?} */
    CmacsPickerComponent.prototype.overlayOffsetX;
    /** @type {?} */
    CmacsPickerComponent.prototype.overlayPositions;
    /** @type {?} */
    CmacsPickerComponent.prototype.dropdownAnimation;
    /** @type {?} */
    CmacsPickerComponent.prototype.currentPositionX;
    /** @type {?} */
    CmacsPickerComponent.prototype.currentPositionY;
    /**
     * @type {?}
     * @private
     */
    CmacsPickerComponent.prototype.dateHelper;
    /**
     * @type {?}
     * @private
     */
    CmacsPickerComponent.prototype.sanitizer;
    /**
     * @type {?}
     * @private
     */
    CmacsPickerComponent.prototype.changeDetector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtZGF0ZS1waWNrZXIvcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixnQkFBZ0IsRUFHakIsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3ZELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQVl2RCxNQUFNLE9BQU8sb0JBQW9COzs7Ozs7SUFnRS9CLFlBQW9CLFVBQTZCLEVBQzdCLFNBQXVCLEVBQ3ZCLGNBQWlDO1FBRmpDLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBQzdCLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFDdkIsbUJBQWMsR0FBZCxjQUFjLENBQW1CO1FBakU1QyxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFNBQUksR0FBd0IsU0FBUyxDQUFDO1FBU3RDLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFHUixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFrQyxDQUFDO1FBQ2pFLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDLENBQUMsMkNBQTJDO1FBTXhHLGNBQVMsR0FBRyxjQUFjLENBQUM7UUFDM0IsdUJBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQzNC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REFBeUU7O0lBQ3pFLDJDQUFrRDs7SUFFbEQseUNBQTJCOztJQUMzQixrREFBMkI7O0lBQzNCLDJDQUFvQjs7SUFDcEIsOENBQW1COztJQUNuQiw4Q0FBb0I7O0lBQ3BCLGdEQTJCOEI7O0lBQzlCLGlEQUErQzs7SUFDL0MsZ0RBQTRDOztJQUM1QyxnREFBMkM7Ozs7O0lBTy9CLDBDQUFxQzs7Ozs7SUFDckMseUNBQStCOzs7OztJQUMvQiw4Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENka0Nvbm5lY3RlZE92ZXJsYXksXHJcbiAgQ2RrT3ZlcmxheU9yaWdpbixcclxuICBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UsXHJcbiAgQ29ubmVjdGlvblBvc2l0aW9uUGFpclxyXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgc2xpZGVNb3Rpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcblxyXG5pbXBvcnQgeyBDYW5keURhdGUgfSBmcm9tICcuL2xpYi9jYW5keS1kYXRlL2NhbmR5LWRhdGUnO1xyXG5pbXBvcnQge0RvbVNhbml0aXplcn0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1waWNrZXInLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NQaWNrZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3BpY2tlci5jb21wb25lbnQuY3NzJ10sXHJcbiAgYW5pbWF0aW9uczogW3NsaWRlTW90aW9uXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG4gIEBJbnB1dCgpIG5vQW5pbWF0aW9uID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaXNSYW5nZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG9wZW46IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gIEBJbnB1dCgpIGFsbG93Q2xlYXI6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgYXV0b0ZvY3VzOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGNsYXNzTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGZvcm1hdDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHNpemU6ICdsYXJnZScgfCAnc21hbGwnO1xyXG4gIEBJbnB1dCgpIGNtYWNzU3R5bGU6IG9iamVjdDtcclxuICBASW5wdXQoKSBjbWFjc09wZW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSB3aWR0aDogYW55O1xyXG4gIEBJbnB1dCgpIHZhbHVlOiBDYW5keURhdGUgfCBDYW5keURhdGVbXSB8IG51bGw7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGUgfCBDYW5keURhdGVbXSB8IG51bGw+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7IC8vIEVtaXR0ZWQgd2hlbiBvdmVybGF5J3Mgb3BlbiBzdGF0ZSBjaGFuZ2VcclxuXHJcbiAgQFZpZXdDaGlsZCgnb3JpZ2luJykgb3JpZ2luOiBDZGtPdmVybGF5T3JpZ2luO1xyXG4gIEBWaWV3Q2hpbGQoQ2RrQ29ubmVjdGVkT3ZlcmxheSkgY2RrQ29ubmVjdGVkT3ZlcmxheTogQ2RrQ29ubmVjdGVkT3ZlcmxheTtcclxuICBAVmlld0NoaWxkKCdwaWNrZXJJbnB1dCcpIHBpY2tlcklucHV0OiBFbGVtZW50UmVmO1xyXG5cclxuICBwcmVmaXhDbHMgPSAnYW50LWNhbGVuZGFyJztcclxuICBhbmltYXRpb25PcGVuU3RhdGUgPSBmYWxzZTtcclxuICBvdmVybGF5T3BlbiA9IGZhbHNlOyAvLyBBdmFpbGFibGUgd2hlbiBcIm9wZW5cIj11bmRlZmluZWRcclxuICBvdmVybGF5T2Zmc2V0WSA9IDA7XHJcbiAgb3ZlcmxheU9mZnNldFggPSAtMjtcclxuICBvdmVybGF5UG9zaXRpb25zOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10gPSBbXHJcbiAgICB7XHJcbiAgICAgIC8vIG9mZnNldFg6IC0xMCwgLy8gVE9ETzogV2hhdCBhIHBpdHksIGNkay9vdmVybGF5IGN1cnJlbnQgbm90IHN1cHBvcnQgb2Zmc2V0IGNvbmZpZ3MgZXZlbiB0aG91Z2ggaXQgYWxyZWFkeSBwcm92aWRlIHRoZXNlIHByb3BlcnRpZXNcclxuICAgICAgLy8gb2Zmc2V0WTogLTEwLFxyXG4gICAgICBvcmlnaW5YOiAnc3RhcnQnLFxyXG4gICAgICBvcmlnaW5ZOiAndG9wJyxcclxuICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXHJcbiAgICAgIG92ZXJsYXlZOiAndG9wJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgb3JpZ2luWDogJ3N0YXJ0JyxcclxuICAgICAgb3JpZ2luWTogJ2JvdHRvbScsXHJcbiAgICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxyXG4gICAgICBvdmVybGF5WTogJ2JvdHRvbSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG9yaWdpblg6ICdlbmQnLFxyXG4gICAgICBvcmlnaW5ZOiAndG9wJyxcclxuICAgICAgb3ZlcmxheVg6ICdlbmQnLFxyXG4gICAgICBvdmVybGF5WTogJ3RvcCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG9yaWdpblg6ICdlbmQnLFxyXG4gICAgICBvcmlnaW5ZOiAnYm90dG9tJyxcclxuICAgICAgb3ZlcmxheVg6ICdlbmQnLFxyXG4gICAgICBvdmVybGF5WTogJ2JvdHRvbSdcclxuICAgIH1cclxuICBdIGFzIENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXTtcclxuICBkcm9wZG93bkFuaW1hdGlvbjogJ3RvcCcgfCAnYm90dG9tJyA9ICdib3R0b20nO1xyXG4gIGN1cnJlbnRQb3NpdGlvblg6ICdzdGFydCcgfCAnZW5kJyA9ICdzdGFydCc7XHJcbiAgY3VycmVudFBvc2l0aW9uWTogJ3RvcCcgfCAnYm90dG9tJyA9ICd0b3AnO1xyXG5cclxuICBnZXQgcmVhbE9wZW5TdGF0ZSgpOiBib29sZWFuIHtcclxuICAgIC8vIFRoZSB2YWx1ZSB0aGF0IHJlYWxseSBkZWNpZGUgdGhlIG9wZW4gc3RhdGUgb2Ygb3ZlcmxheVxyXG4gICAgcmV0dXJuIHRoaXMuaXNPcGVuSGFuZGxlZEJ5VXNlcigpID8gISF0aGlzLm9wZW4gOiB0aGlzLm92ZXJsYXlPcGVuO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmNtYWNzU3R5bGUpIHtcclxuICAgICAgdGhpcy5jbWFjc1N0eWxlID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKHRoaXMuY21hY3NTdHlsZS50b1N0cmluZygpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmF1dG9Gb2N1cykge1xyXG4gICAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgICAgY29uc3QgZmlyc3RJbnB1dCA9ICh0aGlzLnBpY2tlcklucHV0Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAnaW5wdXQ6Zmlyc3QtY2hpbGQnXHJcbiAgICAgICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgIGZpcnN0SW5wdXQuZm9jdXMoKTsgLy8gRm9jdXMgb24gdGhlIGZpcnN0IGlucHV0XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5waWNrZXJJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFNob3cgb3ZlcmxheSBjb250ZW50XHJcbiAgc2hvd092ZXJsYXkoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMucmVhbE9wZW5TdGF0ZSkge1xyXG4gICAgICB0aGlzLm92ZXJsYXlPcGVuID0gdHJ1ZTtcclxuICAgICAgdGhpcy5vcGVuQ2hhbmdlLmVtaXQodGhpcy5vdmVybGF5T3Blbik7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkgJiYgdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYpIHtcclxuICAgICAgICAgIHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5vdmVybGF5UmVmLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhpZGVPdmVybGF5KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucmVhbE9wZW5TdGF0ZSkge1xyXG4gICAgICB0aGlzLm92ZXJsYXlPcGVuID0gZmFsc2U7XHJcbiAgICAgIHRoaXMub3BlbkNoYW5nZS5lbWl0KHRoaXMub3ZlcmxheU9wZW4pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DbGlja0lucHV0Qm94KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICF0aGlzLmlzT3BlbkhhbmRsZWRCeVVzZXIoKSkge1xyXG4gICAgICB0aGlzLnNob3dPdmVybGF5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrQmFja2Ryb3AoKTogdm9pZCB7XHJcbiAgICB0aGlzLmhpZGVPdmVybGF5KCk7XHJcbiAgfVxyXG5cclxuICBvbk92ZXJsYXlEZXRhY2goKTogdm9pZCB7XHJcbiAgICB0aGlzLmhpZGVPdmVybGF5KCk7XHJcbiAgfVxyXG5cclxuICBvblBvc2l0aW9uQ2hhbmdlKHBvc2l0aW9uOiBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UpOiB2b2lkIHtcclxuICAgIHRoaXMuZHJvcGRvd25BbmltYXRpb24gPSBwb3NpdGlvbi5jb25uZWN0aW9uUGFpci5vcmlnaW5ZID09PSAndG9wJyA/ICdib3R0b20nIDogJ3RvcCc7XHJcbiAgICB0aGlzLmN1cnJlbnRQb3NpdGlvblggPSBwb3NpdGlvbi5jb25uZWN0aW9uUGFpci5vcmlnaW5YIGFzICdzdGFydCcgfCAnZW5kJztcclxuICAgIHRoaXMuY3VycmVudFBvc2l0aW9uWSA9IHBvc2l0aW9uLmNvbm5lY3Rpb25QYWlyLm9yaWdpblkgYXMgJ3RvcCcgfCAnYm90dG9tJztcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpOyAvLyBUYWtlIHNpZGUtZWZmZWN0cyB0byBwb3NpdGlvbiBzdHlsZXNcclxuICB9XHJcblxyXG4gIG9uQ2xpY2tDbGVhcihldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgIHRoaXMudmFsdWUgPSB0aGlzLmlzUmFuZ2UgPyBbXSA6IG51bGw7XHJcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXRSZWFkYWJsZVZhbHVlKHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IHN0cmluZyB8IG51bGwge1xyXG4gICAgbGV0IHZhbHVlOiBDYW5keURhdGU7XHJcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIHZhbHVlID0gKHRoaXMudmFsdWUgYXMgQ2FuZHlEYXRlW10pW3RoaXMuZ2V0UGFydFR5cGVJbmRleChwYXJ0VHlwZSBhcyBSYW5nZVBhcnRUeXBlKV07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YWx1ZSA9IHRoaXMudmFsdWUgYXMgQ2FuZHlEYXRlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlID8gdGhpcy5kYXRlSGVscGVyLmZvcm1hdCh2YWx1ZS5uYXRpdmVEYXRlLCB0aGlzLmZvcm1hdCkgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGFydFR5cGVJbmRleChwYXJ0VHlwZTogUmFuZ2VQYXJ0VHlwZSk6IG51bWJlciB7XHJcbiAgICByZXR1cm4geyBsZWZ0OiAwLCByaWdodDogMSB9W3BhcnRUeXBlXTtcclxuICB9XHJcblxyXG4gIGdldFBsYWNlaG9sZGVyKHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IHN0cmluZyB7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICByZXR1cm4gdGhpcy5pc1JhbmdlID8gdGhpcy5wbGFjZWhvbGRlclt0aGlzLmdldFBhcnRUeXBlSW5kZXgocGFydFR5cGUhKV0gOiAodGhpcy5wbGFjZWhvbGRlciBhcyBzdHJpbmcpO1xyXG4gIH1cclxuXHJcbiAgaXNFbXB0eVZhbHVlKHZhbHVlOiBDYW5keURhdGVbXSB8IENhbmR5RGF0ZSB8IG51bGwpOiBib29sZWFuIHtcclxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIHJldHVybiAhdmFsdWUgfHwgIUFycmF5LmlzQXJyYXkodmFsdWUpIHx8IHZhbHVlLmV2ZXJ5KHZhbCA9PiAhdmFsKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAhdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBXaGV0aGVyIG9wZW4gc3RhdGUgaXMgcGVybWFuZW50bHkgY29udHJvbGxlZCBieSB1c2VyIGhpbXNlbGZcclxuICBpc09wZW5IYW5kbGVkQnlVc2VyKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMub3BlbiAhPT0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgYW5pbWF0aW9uU3RhcnQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5yZWFsT3BlblN0YXRlKSB7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uT3BlblN0YXRlID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFuaW1hdGlvbkRvbmUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmFuaW1hdGlvbk9wZW5TdGF0ZSA9IHRoaXMucmVhbE9wZW5TdGF0ZTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBSYW5nZVBhcnRUeXBlID0gJ2xlZnQnIHwgJ3JpZ2h0JztcclxuIl19