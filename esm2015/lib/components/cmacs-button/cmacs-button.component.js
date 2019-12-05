/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, HostBinding, Inject, Input, NgZone, Optional, QueryList, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { findFirstNotEmptyNode, findLastNotEmptyNode, isEmpty, InputBoolean, NzUpdateHostClassService, NzWaveDirective, NZ_WAVE_GLOBAL_CONFIG } from 'ng-zorro-antd/core';
import { NzIconDirective } from 'ng-zorro-antd/icon';
export class CmacsButtonComponent {
    /**
     * @param {?} elementRef
     * @param {?} cdr
     * @param {?} renderer
     * @param {?} updateHostClassService
     * @param {?} zone
     * @param {?} waveConfig
     * @param {?} animationType
     */
    constructor(elementRef, cdr, renderer, updateHostClassService, zone, waveConfig, animationType) {
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.renderer = renderer;
        this.updateHostClassService = updateHostClassService;
        this.zone = zone;
        this.waveConfig = waveConfig;
        this.animationType = animationType;
        this.el = this.elementRef.nativeElement;
        this.iconOnly = false;
        this.nzWave = new NzWaveDirective(this.zone, this.elementRef, this.waveConfig, this.animationType);
        // tslint:disable-next-line: no-input-rename
        this.nzBlock = false;
        // tslint:disable-next-line: no-input-rename
        this.nzGhost = false;
        // tslint:disable-next-line: no-input-rename
        this.nzSearch = false;
        this.loading = false;
        this.action = false;
        this.type = 'default';
        this.shape = null;
        this.size = 'default';
        this.renderer.addClass(elementRef.nativeElement, 'ant-btn');
    }
    /**
     * @return {?}
     */
    setClassMap() {
        /** @type {?} */
        const prefixCls = 'ant-btn';
        /** @type {?} */
        const prefixCmacs = 'cmacs-btn';
        /** @type {?} */
        const sizeMap = { large: 'lg', small: 'sm' };
        this.updateHostClassService.updateHostClass(this.el, {
            [`${prefixCls}-${this.type}`]: this.type,
            [`${prefixCls}-${this.shape}`]: this.shape,
            [`${prefixCls}-${sizeMap[this.size]}`]: sizeMap[this.size],
            [`${prefixCls}-loading`]: this.loading,
            [`${prefixCls}-icon-only`]: this.iconOnly,
            [`${prefixCmacs}-action`]: this.action,
            [`${prefixCmacs}-with-icon`]: this.listOfIconElement !== undefined && this.listOfIconElement.length > 0 && this.contentElement.nativeElement.style.display !== 'none',
            [`${prefixCls}-background-ghost`]: this.nzGhost,
            [`${prefixCls}-block`]: this.nzBlock,
            [`ant-input-search-button`]: this.nzSearch
        });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    updateIconDisplay(value) {
        if (this.iconElement) {
            this.renderer.setStyle(this.iconElement, 'display', value ? 'none' : 'inline-block');
        }
    }
    /**
     * @return {?}
     */
    checkContent() {
        /** @type {?} */
        const hasIcon = this.listOfIconElement && this.listOfIconElement.length;
        if (hasIcon) {
            this.moveIcon();
        }
        this.renderer.removeStyle(this.contentElement.nativeElement, 'display');
        if (isEmpty(this.contentElement.nativeElement)) {
            this.renderer.setStyle(this.contentElement.nativeElement, 'display', 'none');
        }
        else {
            this.renderer.removeStyle(this.contentElement.nativeElement, 'display');
            if (this.contentElement.nativeElement.children.length === 1 &&
                this.contentElement.nativeElement.children[0].tagName === "I" &&
                this.contentElement.nativeElement.innerText === '') {
                this.iconOnly = true;
            }
        }
        this.setClassMap();
        this.updateIconDisplay(this.loading);
        this.cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    moveIcon() {
        if (this.listOfIconElement && this.listOfIconElement.length) {
            /** @type {?} */
            const firstChildElement = findFirstNotEmptyNode(this.contentElement.nativeElement);
            /** @type {?} */
            const lastChildElement = findLastNotEmptyNode(this.contentElement.nativeElement);
            if (firstChildElement && firstChildElement === this.listOfIconElement.first.nativeElement) {
                this.renderer.insertBefore(this.el, firstChildElement, this.contentElement.nativeElement);
                this.iconElement = (/** @type {?} */ (firstChildElement));
            }
            else if (lastChildElement && lastChildElement === this.listOfIconElement.last.nativeElement) {
                this.renderer.appendChild(this.el, lastChildElement);
            }
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.checkContent();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.imageWrapper();
        this.cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClassMap();
        this.nzWave.ngOnInit();
    }
    /**
     * @return {?}
     */
    imageWrapper() {
        /** @type {?} */
        const el = this.contentElement.nativeElement;
        /** @type {?} */
        let iconList = el.querySelectorAll('i');
        iconList.forEach((/**
         * @param {?} icon
         * @return {?}
         */
        icon => {
            /** @type {?} */
            const wrapper = document.createElement('span');
            wrapper.classList.add('iconspan');
            icon.parentNode.insertBefore(wrapper, icon);
            wrapper.appendChild(icon);
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.nzWave.ngOnDestroy();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzBlock ||
            changes.nzGhost ||
            changes.nzSearch ||
            changes.nzType ||
            changes.nzShape ||
            changes.nzSize ||
            changes.nzLoading) {
            this.setClassMap();
        }
        if (changes.nzLoading) {
            this.updateIconDisplay(this.loading);
        }
    }
    /**
     * @return {?}
     */
    hideBtn() {
        this.elementRef.nativeElement.style.display = 'none';
    }
    /**
     * @return {?}
     */
    showBtn() {
        this.elementRef.nativeElement.style.display = 'inline-block';
    }
    /**
     * @return {?}
     */
    disabledBtn() {
        this.elementRef.nativeElement.disabled = true;
    }
}
CmacsButtonComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line: component-selector
                selector: '[cmacs-button]',
                exportAs: 'cmacsButton',
                providers: [NzUpdateHostClassService],
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: "<i nz-icon type=\"loading\" *ngIf=\"loading\"></i>\r\n<span (cdkObserveContent)=\"checkContent()\" #contentElement><ng-content></ng-content></span>\r\n",
                styles: [".ant-btn{font-size:14px;line-height:20px;font-weight:400;height:34px;box-shadow:none;border-radius:3px;padding:0 14px}.ant-btn-primary{background-color:#2a7cff;border-color:#2a7cff}.ant-btn-primary:focus,.ant-btn-primary:hover{background-color:#2164c9;border-color:#2164c9}.ant-btn-primary[disabled],.ant-btn-primary[disabled]:focus,.ant-btn-primary[disabled]:hover{border:none;color:#97a0ae}.ant-btn-default{border:1px solid #bec4cd;color:#2a7cff}.ant-btn-default span i,.ant-btn-primary span i{font-size:16px;position:relative;height:16px;width:16px;display:inline-block;vertical-align:text-top}.ant-btn-default[disabled],.ant-btn-default[disabled]:focus,.ant-btn-default[disabled]:hover{color:#97a0ae;background-color:#fff;border-color:#f3f3f4}.ant-btn-default:focus,.ant-btn-default:hover{background-color:#f6f7fb;color:#2164c9;border:1px solid #bec4cd}.ant-btn-background-ghost.ant-btn-default:enabled,.ant-btn-background-ghost.ant-btn-primary:enabled{color:#2a7cff;border:none}.ant-btn-background-ghost.ant-btn-default:enabled:focus,.ant-btn-background-ghost.ant-btn-default:enabled:hover,.ant-btn-background-ghost.ant-btn-primary:enabled:focus,.ant-btn-background-ghost.ant-btn-primary:enabled:hover{background-color:#f6f7fb!important;color:#2a7cff}.ant-btn-background-ghost:disabled{background-color:transparent!important;border:none}.ant-btn span{vertical-align:middle}.ant-btn-icon-only span i{color:#656c79}.iconspan{height:20px;width:20px;text-align:center;vertical-align:middle;display:inline-block}.ant-btn-icon-only:enabled:focus span i,.ant-btn-icon-only:enabled:hover span i{color:#2a7cff}.ant-btn-icon-only:not(.ant-btn-background-ghost),.ant-btn-icon-only:not(.ant-btn-background-ghost):focus,.ant-btn-icon-only:not(.ant-btn-background-ghost):hover{background-color:#fff!important}.ant-btn-icon-only:disabled{background-color:#f3f3f4!important;color:#97a0ae!important}.cmacs-btn-action{height:30px}.ant-btn:not(.ant-btn-circle):not(.ant-btn-circle-outline).ant-btn-icon-only.cmacs-btn-action{padding-right:4px;padding-left:4px}.ant-btn:not(.ant-btn-circle):not(.ant-btn-circle-outline).ant-btn-icon-only{padding-right:6px;padding-left:6px}.ant-btn-danger{color:#fff;background-color:#ff4d4f;border-color:#ff4d4f}.ant-btn-danger:hover{opacity:.8}"]
            }] }
];
/** @nocollapse */
CmacsButtonComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NzUpdateHostClassService },
    { type: NgZone },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_WAVE_GLOBAL_CONFIG,] }] },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] }
];
CmacsButtonComponent.propDecorators = {
    contentElement: [{ type: ViewChild, args: ['contentElement',] }],
    listOfIconElement: [{ type: ContentChildren, args: [NzIconDirective, { read: ElementRef },] }],
    nzWave: [{ type: HostBinding, args: ['attr.nz-wave',] }],
    nzBlock: [{ type: Input, args: ['block',] }],
    nzGhost: [{ type: Input, args: ['ghost',] }],
    nzSearch: [{ type: Input, args: ['search',] }],
    loading: [{ type: Input }],
    action: [{ type: Input }],
    type: [{ type: Input }],
    shape: [{ type: Input }],
    size: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsButtonComponent.prototype, "nzBlock", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsButtonComponent.prototype, "nzGhost", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsButtonComponent.prototype, "nzSearch", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsButtonComponent.prototype, "loading", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsButtonComponent.prototype, "action", void 0);
if (false) {
    /** @type {?} */
    CmacsButtonComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    CmacsButtonComponent.prototype.iconElement;
    /**
     * @type {?}
     * @private
     */
    CmacsButtonComponent.prototype.iconOnly;
    /** @type {?} */
    CmacsButtonComponent.prototype.contentElement;
    /** @type {?} */
    CmacsButtonComponent.prototype.listOfIconElement;
    /** @type {?} */
    CmacsButtonComponent.prototype.nzWave;
    /** @type {?} */
    CmacsButtonComponent.prototype.nzBlock;
    /** @type {?} */
    CmacsButtonComponent.prototype.nzGhost;
    /** @type {?} */
    CmacsButtonComponent.prototype.nzSearch;
    /** @type {?} */
    CmacsButtonComponent.prototype.loading;
    /** @type {?} */
    CmacsButtonComponent.prototype.action;
    /** @type {?} */
    CmacsButtonComponent.prototype.type;
    /** @type {?} */
    CmacsButtonComponent.prototype.shape;
    /** @type {?} */
    CmacsButtonComponent.prototype.size;
    /**
     * @type {?}
     * @private
     */
    CmacsButtonComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    CmacsButtonComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    CmacsButtonComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    CmacsButtonComponent.prototype.updateHostClassService;
    /**
     * @type {?}
     * @private
     */
    CmacsButtonComponent.prototype.zone;
    /**
     * @type {?}
     * @private
     */
    CmacsButtonComponent.prototype.waveConfig;
    /**
     * @type {?}
     * @private
     */
    CmacsButtonComponent.prototype.animationType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtYnV0dG9uL2NtYWNzLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixXQUFXLEVBQ1gsTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBSU4sUUFBUSxFQUNSLFNBQVMsRUFDVCxTQUFTLEVBRVQsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUU3RSxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLG9CQUFvQixFQUNwQixPQUFPLEVBQ1AsWUFBWSxFQUdaLHdCQUF3QixFQUV4QixlQUFlLEVBQ2YscUJBQXFCLEVBQ3RCLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBZ0JyRCxNQUFNLE9BQU8sb0JBQW9COzs7Ozs7Ozs7O0lBb0YvQixZQUNVLFVBQXNCLEVBQ3RCLEdBQXNCLEVBQ3RCLFFBQW1CLEVBQ25CLHNCQUFnRCxFQUNoRCxJQUFZLEVBQytCLFVBQXdCLEVBQ3hCLGFBQXFCO1FBTmhFLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQTBCO1FBQ2hELFNBQUksR0FBSixJQUFJLENBQVE7UUFDK0IsZUFBVSxHQUFWLFVBQVUsQ0FBYztRQUN4QixrQkFBYSxHQUFiLGFBQWEsQ0FBUTtRQTFGakUsT0FBRSxHQUFnQixJ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QUFVO1lBSFYsaUJBQWlCO1lBYWpCLFNBQVM7WUFjVCx3QkFBd0I7WUFwQnhCLE1BQU07NENBbUlILFFBQVEsWUFBSSxNQUFNLFNBQUMscUJBQXFCO3lDQUN4QyxRQUFRLFlBQUksTUFBTSxTQUFDLHFCQUFxQjs7OzZCQXZGMUMsU0FBUyxTQUFDLGdCQUFnQjtnQ0FDMUIsZUFBZSxTQUFDLGVBQWUsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7cUJBQ3JELFdBQVcsU0FBQyxjQUFjO3NCQU8xQixLQUFLLFNBQUMsT0FBTztzQkFFYixLQUFLLFNBQUMsT0FBTzt1QkFFYixLQUFLLFNBQUMsUUFBUTtzQkFDZCxLQUFLO3FCQUNMLEtBQUs7bUJBQ0wsS0FBSztvQkFDTCxLQUFLO21CQUNMLEtBQUs7O0FBVDBCO0lBQWYsWUFBWSxFQUFFOztxREFBaUI7QUFFaEI7SUFBZixZQUFZLEVBQUU7O3FEQUFpQjtBQUVmO0lBQWYsWUFBWSxFQUFFOztzREFBa0I7QUFDekI7SUFBZixZQUFZLEVBQUU7O3FEQUFpQjtBQUNoQjtJQUFmLFlBQVksRUFBRTs7b0RBQWdCOzs7SUFsQnhDLGtDQUF5RDs7Ozs7SUFDekQsMkNBQWlDOzs7OztJQUNqQyx3Q0FBeUI7O0lBQ3pCLDhDQUF3RDs7SUFDeEQsaURBQWlHOztJQUNqRyxzQ0FLRTs7SUFFRix1Q0FBZ0Q7O0lBRWhELHVDQUFnRDs7SUFFaEQsd0NBQWtEOztJQUNsRCx1Q0FBeUM7O0lBQ3pDLHNDQUF3Qzs7SUFDeEMsb0NBQTJDOztJQUMzQyxxQ0FBd0M7O0lBQ3hDLG9DQUF5Qzs7Ozs7SUErRHZDLDBDQUE4Qjs7Ozs7SUFDOUIsbUNBQThCOzs7OztJQUM5Qix3Q0FBMkI7Ozs7O0lBQzNCLHNEQUF3RDs7Ozs7SUFDeEQsb0NBQW9COzs7OztJQUNwQiwwQ0FBMkU7Ozs7O0lBQzNFLDZDQUF3RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSW5qZWN0LFxyXG4gIElucHV0LFxyXG4gIE5nWm9uZSxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBRdWVyeUxpc3QsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0NoaWxkLCBWaWV3Q2hpbGRyZW4sXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQU5JTUFUSU9OX01PRFVMRV9UWVBFIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcclxuXHJcbmltcG9ydCB7XHJcbiAgZmluZEZpcnN0Tm90RW1wdHlOb2RlLFxyXG4gIGZpbmRMYXN0Tm90RW1wdHlOb2RlLFxyXG4gIGlzRW1wdHksXHJcbiAgSW5wdXRCb29sZWFuLFxyXG4gIE56U2l6ZUxEU1R5cGUsXHJcbiAgTnpTaXplTWFwLFxyXG4gIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSxcclxuICBOeldhdmVDb25maWcsXHJcbiAgTnpXYXZlRGlyZWN0aXZlLFxyXG4gIE5aX1dBVkVfR0xPQkFMX0NPTkZJR1xyXG59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56SWNvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XHJcblxyXG5leHBvcnQgdHlwZSBDbWFjc0J1dHRvblR5cGUgPSAncHJpbWFyeScgfCAnZGFzaGVkJyB8ICdkYW5nZXInIHwgJ2RlZmF1bHQnO1xyXG5leHBvcnQgdHlwZSBDbWFjc0J1dHRvblNoYXBlID0gJ2NpcmNsZScgfCAncm91bmQnIHwgbnVsbDtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnW2NtYWNzLWJ1dHRvbl0nLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NCdXR0b24nLFxyXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1idXR0b24uY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0LCBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcclxuICByZWFkb25seSBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICBwcml2YXRlIGljb25FbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIGljb25Pbmx5ID0gZmFsc2U7XHJcbiAgQFZpZXdDaGlsZCgnY29udGVudEVsZW1lbnQnKSBjb250ZW50RWxlbWVudDogRWxlbWVudFJlZjtcclxuICBAQ29udGVudENoaWxkcmVuKE56SWNvbkRpcmVjdGl2ZSwgeyByZWFkOiBFbGVtZW50UmVmIH0pIGxpc3RPZkljb25FbGVtZW50OiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XHJcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLm56LXdhdmUnKSBueldhdmUgPSBuZXcgTnpXYXZlRGlyZWN0aXZlKFxyXG4gICAgdGhpcy56b25lLFxyXG4gICAgdGhpcy5lbGVtZW50UmVmLFxyXG4gICAgdGhpcy53YXZlQ29uZmlnLFxyXG4gICAgdGhpcy5hbmltYXRpb25UeXBlXHJcbiAgKTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWlucHV0LXJlbmFtZVxyXG4gIEBJbnB1dCgnYmxvY2snKSBASW5wdXRCb29sZWFuKCkgbnpCbG9jayA9IGZhbHNlO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8taW5wdXQtcmVuYW1lXHJcbiAgQElucHV0KCdnaG9zdCcpIEBJbnB1dEJvb2xlYW4oKSBuekdob3N0ID0gZmFsc2U7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1pbnB1dC1yZW5hbWVcclxuICBASW5wdXQoJ3NlYXJjaCcpIEBJbnB1dEJvb2xlYW4oKSBuelNlYXJjaCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsb2FkaW5nID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGFjdGlvbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHR5cGU6IENtYWNzQnV0dG9uVHlwZSA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBzaGFwZTogQ21hY3NCdXR0b25TaGFwZSA9IG51bGw7XHJcbiAgQElucHV0KCkgc2l6ZTogTnpTaXplTERTVHlwZSA9ICdkZWZhdWx0JztcclxuXHJcbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICBjb25zdCBwcmVmaXhDbHMgPSAnYW50LWJ0bic7XHJcbiAgICBjb25zdCBwcmVmaXhDbWFjcyA9ICdjbWFjcy1idG4nO1xyXG4gICAgY29uc3Qgc2l6ZU1hcDogTnpTaXplTWFwID0geyBsYXJnZTogJ2xnJywgc21hbGw6ICdzbScgfTtcclxuICAgIHRoaXMudXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbCwge1xyXG4gICAgICBbYCR7cHJlZml4Q2xzfS0ke3RoaXMudHlwZX1gXTogdGhpcy50eXBlLFxyXG4gICAgICBbYCR7cHJlZml4Q2xzfS0ke3RoaXMuc2hhcGV9YF06IHRoaXMuc2hhcGUsXHJcbiAgICAgIFtgJHtwcmVmaXhDbHN9LSR7c2l6ZU1hcFt0aGlzLnNpemVdfWBdOiBzaXplTWFwW3RoaXMuc2l6ZV0sXHJcbiAgICAgIFtgJHtwcmVmaXhDbHN9LWxvYWRpbmdgXTogdGhpcy5sb2FkaW5nLFxyXG4gICAgICBbYCR7cHJlZml4Q2xzfS1pY29uLW9ubHlgXTogdGhpcy5pY29uT25seSxcclxuICAgICAgW2Ake3ByZWZpeENtYWNzfS1hY3Rpb25gXTogdGhpcy5hY3Rpb24sXHJcbiAgICAgIFtgJHtwcmVmaXhDbWFjc30td2l0aC1pY29uYF06IHRoaXMubGlzdE9mSWNvbkVsZW1lbnQgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmxpc3RPZkljb25FbGVtZW50Lmxlbmd0aCA+IDAgJiYgdGhpcy5jb250ZW50RWxlbWVudC5uYXRpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgIT09ICdub25lJyxcclxuICAgICAgW2Ake3ByZWZpeENsc30tYmFja2dyb3VuZC1naG9zdGBdOiB0aGlzLm56R2hvc3QsXHJcbiAgICAgIFtgJHtwcmVmaXhDbHN9LWJsb2NrYF06IHRoaXMubnpCbG9jayxcclxuICAgICAgW2BhbnQtaW5wdXQtc2VhcmNoLWJ1dHRvbmBdOiB0aGlzLm56U2VhcmNoXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUljb25EaXNwbGF5KHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pY29uRWxlbWVudCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuaWNvbkVsZW1lbnQsICdkaXNwbGF5JywgdmFsdWUgPyAnbm9uZScgOiAnaW5saW5lLWJsb2NrJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja0NvbnRlbnQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBoYXNJY29uID0gdGhpcy5saXN0T2ZJY29uRWxlbWVudCAmJiB0aGlzLmxpc3RPZkljb25FbGVtZW50Lmxlbmd0aDtcclxuICAgIGlmIChoYXNJY29uKSB7XHJcbiAgICAgIHRoaXMubW92ZUljb24oKTtcclxuICAgIH1cclxuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5jb250ZW50RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScpO1xyXG5cclxuICAgIGlmIChpc0VtcHR5KHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudCkpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmNvbnRlbnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5jb250ZW50RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPT09IDEgJiZcclxuICAgICAgICB0aGlzLmNvbnRlbnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0udGFnTmFtZSA9PT0gXCJJXCIgJiZcclxuICAgICAgICB0aGlzLmNvbnRlbnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuaW5uZXJUZXh0ID09PSAnJykge1xyXG4gICAgICAgIHRoaXMuaWNvbk9ubHkgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICB0aGlzLnVwZGF0ZUljb25EaXNwbGF5KHRoaXMubG9hZGluZyk7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBtb3ZlSWNvbigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmxpc3RPZkljb25FbGVtZW50ICYmIHRoaXMubGlzdE9mSWNvbkVsZW1lbnQubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IGZpcnN0Q2hpbGRFbGVtZW50ID0gZmluZEZpcnN0Tm90RW1wdHlOb2RlKHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudCk7XHJcbiAgICAgIGNvbnN0IGxhc3RDaGlsZEVsZW1lbnQgPSBmaW5kTGFzdE5vdEVtcHR5Tm9kZSh0aGlzLmNvbnRlbnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICBpZiAoZmlyc3RDaGlsZEVsZW1lbnQgJiYgZmlyc3RDaGlsZEVsZW1lbnQgPT09IHRoaXMubGlzdE9mSWNvbkVsZW1lbnQuZmlyc3QubmF0aXZlRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW5zZXJ0QmVmb3JlKHRoaXMuZWwsIGZpcnN0Q2hpbGRFbGVtZW50LCB0aGlzLmNvbnRlbnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuaWNvbkVsZW1lbnQgPSBmaXJzdENoaWxkRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgfSBlbHNlIGlmIChsYXN0Q2hpbGRFbGVtZW50ICYmIGxhc3RDaGlsZEVsZW1lbnQgPT09IHRoaXMubGlzdE9mSWNvbkVsZW1lbnQubGFzdC5uYXRpdmVFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmVsLCBsYXN0Q2hpbGRFbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIHVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSxcclxuICAgIHByaXZhdGUgem9uZTogTmdab25lLFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChOWl9XQVZFX0dMT0JBTF9DT05GSUcpIHByaXZhdGUgd2F2ZUNvbmZpZzogTnpXYXZlQ29uZmlnLFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChBTklNQVRJT05fTU9EVUxFX1RZUEUpIHByaXZhdGUgYW5pbWF0aW9uVHlwZTogc3RyaW5nXHJcbiAgKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1idG4nKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hlY2tDb250ZW50KCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmltYWdlV3JhcHBlcigpO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICB0aGlzLm56V2F2ZS5uZ09uSW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgaW1hZ2VXcmFwcGVyKCk6IHZvaWQge1xyXG4gICAgY29uc3QgZWwgPSB0aGlzLmNvbnRlbnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBsZXQgaWNvbkxpc3QgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKCdpJyk7XHJcblxyXG4gICAgaWNvbkxpc3QuZm9yRWFjaChpY29uID0+IHtcclxuICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdpY29uc3BhbicpO1xyXG4gICAgICBpY29uLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIGljb24pO1xyXG4gICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGljb24pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMubnpXYXZlLm5nT25EZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGNoYW5nZXMubnpCbG9jayB8fFxyXG4gICAgICBjaGFuZ2VzLm56R2hvc3QgfHxcclxuICAgICAgY2hhbmdlcy5uelNlYXJjaCB8fFxyXG4gICAgICBjaGFuZ2VzLm56VHlwZSB8fFxyXG4gICAgICBjaGFuZ2VzLm56U2hhcGUgfHxcclxuICAgICAgY2hhbmdlcy5uelNpemUgfHxcclxuICAgICAgY2hhbmdlcy5uekxvYWRpbmdcclxuICAgICkge1xyXG4gICAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5uekxvYWRpbmcpIHtcclxuICAgICAgdGhpcy51cGRhdGVJY29uRGlzcGxheSh0aGlzLmxvYWRpbmcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGlkZUJ0bigpOiB2b2lkIHtcclxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfVxyXG5cclxuICBzaG93QnRuKCk6IHZvaWQge1xyXG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xyXG4gIH1cclxuXHJcbiAgZGlzYWJsZWRCdG4oKTogdm9pZCB7XHJcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgfVxyXG59XHJcbiJdfQ==