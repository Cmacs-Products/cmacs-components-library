/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, HostBinding, Inject, Input, NgZone, Optional, QueryList, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { findFirstNotEmptyNode, findLastNotEmptyNode, isEmpty, InputBoolean, NzUpdateHostClassService, NzWaveDirective, NZ_WAVE_GLOBAL_CONFIG } from 'ng-zorro-antd/core';
import { NzIconDirective } from 'ng-zorro-antd/icon';
var CmacsButtonComponent = /** @class */ (function () {
    function CmacsButtonComponent(elementRef, cdr, renderer, updateHostClassService, zone, waveConfig, animationType) {
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
        this.nzBlock = false;
        this.nzGhost = false;
        this.nzSearch = false;
        this.loading = false;
        this.type = 'default';
        this.emphasis = null;
        this.shape = null;
        this.size = 'default';
        this.renderer.addClass(elementRef.nativeElement, 'ant-btn');
    }
    /**
     * @return {?}
     */
    CmacsButtonComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var prefixCls = 'ant-btn';
        /** @type {?} */
        var prefixCmacs = 'cmacs-btn';
        /** @type {?} */
        var sizeMap = { large: 'lg', small: 'sm' };
        this.updateHostClassService.updateHostClass(this.el, (_a = {},
            _a[prefixCls + "-" + this.type] = this.type,
            _a[prefixCls + "-" + this.shape] = this.shape,
            _a[prefixCls + "-" + sizeMap[this.size]] = sizeMap[this.size],
            _a[prefixCls + "-loading"] = this.loading,
            _a[prefixCls + "-icon-only"] = this.iconOnly,
            _a[prefixCmacs + "-action-" + this.emphasis] = this.emphasis !== null,
            _a[prefixCmacs + "-with-icon"] = this.listOfIconElement !== undefined && this.listOfIconElement.length > 0 && this.contentElement.nativeElement.style.display !== 'none',
            _a[prefixCls + "-background-ghost"] = this.nzGhost,
            _a[prefixCls + "-block"] = this.nzBlock,
            _a["ant-input-search-button"] = this.nzSearch,
            _a));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsButtonComponent.prototype.updateIconDisplay = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.iconElement) {
            this.renderer.setStyle(this.iconElement, 'display', value ? 'none' : 'inline-block');
        }
    };
    /**
     * @return {?}
     */
    CmacsButtonComponent.prototype.checkContent = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var hasIcon = this.listOfIconElement && this.listOfIconElement.length;
        if (hasIcon) {
            this.moveIcon();
        }
        this.renderer.removeStyle(this.contentElement.nativeElement, 'display');
        if (isEmpty(this.contentElement.nativeElement)) {
            this.renderer.setStyle(this.contentElement.nativeElement, 'display', 'none');
            this.iconOnly = !!hasIcon;
        }
        else {
            this.renderer.removeStyle(this.contentElement.nativeElement, 'display');
            this.iconOnly = false;
        }
        this.setClassMap();
        this.updateIconDisplay(this.loading);
        this.cdr.detectChanges();
    };
    /**
     * @return {?}
     */
    CmacsButtonComponent.prototype.moveIcon = /**
     * @return {?}
     */
    function () {
        if (this.listOfIconElement && this.listOfIconElement.length) {
            /** @type {?} */
            var firstChildElement = findFirstNotEmptyNode(this.contentElement.nativeElement);
            /** @type {?} */
            var lastChildElement = findLastNotEmptyNode(this.contentElement.nativeElement);
            if (firstChildElement && firstChildElement === this.listOfIconElement.first.nativeElement) {
                this.renderer.insertBefore(this.el, firstChildElement, this.contentElement.nativeElement);
                this.iconElement = (/** @type {?} */ (firstChildElement));
            }
            else if (lastChildElement && lastChildElement === this.listOfIconElement.last.nativeElement) {
                this.renderer.appendChild(this.el, lastChildElement);
            }
        }
    };
    /**
     * @return {?}
     */
    CmacsButtonComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.checkContent();
    };
    /**
     * @return {?}
     */
    CmacsButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
        this.nzWave.ngOnInit();
    };
    /**
     * @return {?}
     */
    CmacsButtonComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.nzWave.ngOnDestroy();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsButtonComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
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
    };
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
                    styles: [".ant-btn{font-size:14px;line-height:20px;font-weight:400;height:34px;box-shadow:none;border-radius:3px}.ant-btn-primary{background-color:#2a7cff;border-color:#2a7cff}.ant-btn-primary:focus,.ant-btn-primary:hover{background-color:#2164c9;border-color:#2164c9}.ant-btn-primary:disabled{border:none}.ant-btn-default{border:1px solid #bec4cd;color:#2a7cff}.ant-btn-default:focus,.ant-btn-default:hover{background-color:#f6f7fb;color:#2164c9;border:1px solid #bec4cd}.ant-btn-background-ghost.ant-btn-default:enabled,.ant-btn-background-ghost.ant-btn-primary:enabled{color:#2a7cff;border:none}.ant-btn-background-ghost.ant-btn-default:enabled:focus,.ant-btn-background-ghost.ant-btn-default:enabled:hover,.ant-btn-background-ghost.ant-btn-primary:enabled:focus,.ant-btn-background-ghost.ant-btn-primary:enabled:hover{background-color:#f6f7fb!important;color:#2a7cff}.ant-btn-background-ghost:disabled{border:none}.cmacs-btn-with-icon{background-color:#fff!important;border:1px solid transparent!important;color:#2a7cff!important}.cmacs-btn-with-icon:hover{border-color:#bec4cd!important}.cmacs-btn-with-icon:focus{background-color:#2a7cff!important;color:#fff!important}.cmacs-btn-with-icon:disabled{background-color:#f3f3f4!important;color:#97a0ae!important}.cmacs-btn-with-icon:disabled:hover{border:1px solid transparent!important}.cmacs-btn-with-icon:disabled i{color:#fff!important}.ant-btn-icon-only{border:1px solid #dee0e5;color:#656c79;background-color:#fff!important}.ant-btn-icon-only:focus,.ant-btn-icon-only:hover{color:#2a7cff;background-color:#fff!important}.ant-btn-icon-only:disabled{background-color:#f3f3f4!important;color:#97a0ae!important}.cmacs-btn-action-low,.cmacs-btn-action-low:focus,.cmacs-btn-action-low:hover{padding:0;font-size:14px;font-weight:700;color:#2a7cff;height:20px;border:none;background-color:transparent}.cmacs-btn-action-medium,.cmacs-btn-action-medium:focus,.cmacs-btn-action-medium:hover{font-size:14px;color:#2a7cff;font-weight:700;border:2px solid #2a7cff;background-color:#fff;height:30px;padding:0 25px}.cmacs-btn-action-high,.cmacs-btn-action-high:focus,.cmacs-btn-action-high:hover{font-size:14px;color:#fff;font-weight:700;background-color:#2a7cff;border:2px solid #2a7cff;height:30px;padding:0 25px}.cmacs-btn-action-icon,.cmacs-btn-action-icon:hover{height:30px;color:#656c79!important;border:1px solid #dee0e5}"]
                }] }
    ];
    /** @nocollapse */
    CmacsButtonComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NzUpdateHostClassService },
        { type: NgZone },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_WAVE_GLOBAL_CONFIG,] }] },
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] }
    ]; };
    CmacsButtonComponent.propDecorators = {
        contentElement: [{ type: ViewChild, args: ['contentElement',] }],
        listOfIconElement: [{ type: ContentChildren, args: [NzIconDirective, { read: ElementRef },] }],
        nzWave: [{ type: HostBinding, args: ['attr.nz-wave',] }],
        nzBlock: [{ type: Input }],
        nzGhost: [{ type: Input }],
        nzSearch: [{ type: Input }],
        loading: [{ type: Input }],
        type: [{ type: Input }],
        emphasis: [{ type: Input }],
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
    return CmacsButtonComponent;
}());
export { CmacsButtonComponent };
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
    CmacsButtonComponent.prototype.type;
    /** @type {?} */
    CmacsButtonComponent.prototype.emphasis;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtYnV0dG9uL2NtYWNzLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixXQUFXLEVBQ1gsTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBSU4sUUFBUSxFQUNSLFNBQVMsRUFDVCxTQUFTLEVBRVQsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUU3RSxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLG9CQUFvQixFQUNwQixPQUFPLEVBQ1AsWUFBWSxFQUdaLHdCQUF3QixFQUV4QixlQUFlLEVBQ2YscUJBQXFCLEVBQ3RCLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBTXJEO0lBd0ZFLDhCQUNVLFVBQXNCLEVBQ3RCLEdBQXNCLEVBQ3RCLFFBQW1CLEVBQ25CLHNCQUFnRCxFQUNoRCxJQUFZLEVBQytCLFVBQXdCLEVBQ3hCLGFBQXFCO1FBTmhFLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQTBCO1FBQ2hELFNBQUksR0FBSixJQUFJLENBQVE7UUFDK0IsZUFBVSxHQUFWLFVBQVUsQ0FBYztRQUN4QixrQkFBYSxHQUFiLGFBQWEsQ0FBUTtRQW5GakUsT0FBRSxHQUFnQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FB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QkFwQnhCLE1BQU07Z0RBNkhILFFBQVEsWUFBSSxNQUFNLFNBQUMscUJBQXFCOzZDQUN4QyxRQUFRLFlBQUksTUFBTSxTQUFDLHFCQUFxQjs7O2lDQWhGMUMsU0FBUyxTQUFDLGdCQUFnQjtvQ0FDMUIsZUFBZSxTQUFDLGVBQWUsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7eUJBQ3JELFdBQVcsU0FBQyxjQUFjOzBCQU0xQixLQUFLOzBCQUNMLEtBQUs7MkJBQ0wsS0FBSzswQkFDTCxLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSzt3QkFDTCxLQUFLO3VCQUNMLEtBQUs7O0lBUG1CO1FBQWYsWUFBWSxFQUFFOzt5REFBaUI7SUFDaEI7UUFBZixZQUFZLEVBQUU7O3lEQUFpQjtJQUNoQjtRQUFmLFlBQVksRUFBRTs7MERBQWtCO0lBQ2pCO1FBQWYsWUFBWSxFQUFFOzt5REFBaUI7SUF1RzNDLDJCQUFDO0NBQUEsQUFqSUQsSUFpSUM7U0F0SFksb0JBQW9COzs7SUFDL0Isa0NBQXlEOzs7OztJQUN6RCwyQ0FBaUM7Ozs7O0lBQ2pDLHdDQUF5Qjs7SUFDekIsOENBQXdEOztJQUN4RCxpREFBaUc7O0lBQ2pHLHNDQUtFOztJQUNGLHVDQUF5Qzs7SUFDekMsdUNBQXlDOztJQUN6Qyx3Q0FBMEM7O0lBQzFDLHVDQUF5Qzs7SUFDekMsb0NBQTJDOztJQUMzQyx3Q0FBd0M7O0lBQ3hDLHFDQUF3Qzs7SUFDeEMsb0NBQXlDOzs7OztJQTJEdkMsMENBQThCOzs7OztJQUM5QixtQ0FBOEI7Ozs7O0lBQzlCLHdDQUEyQjs7Ozs7SUFDM0Isc0RBQXdEOzs7OztJQUN4RCxvQ0FBb0I7Ozs7O0lBQ3BCLDBDQUEyRTs7Ozs7SUFDM0UsNkNBQXdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0QmluZGluZyxcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQU5JTUFUSU9OX01PRFVMRV9UWVBFIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcclxuXHJcbmltcG9ydCB7XHJcbiAgZmluZEZpcnN0Tm90RW1wdHlOb2RlLFxyXG4gIGZpbmRMYXN0Tm90RW1wdHlOb2RlLFxyXG4gIGlzRW1wdHksXHJcbiAgSW5wdXRCb29sZWFuLFxyXG4gIE56U2l6ZUxEU1R5cGUsXHJcbiAgTnpTaXplTWFwLFxyXG4gIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSxcclxuICBOeldhdmVDb25maWcsXHJcbiAgTnpXYXZlRGlyZWN0aXZlLFxyXG4gIE5aX1dBVkVfR0xPQkFMX0NPTkZJR1xyXG59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56SWNvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XHJcblxyXG5leHBvcnQgdHlwZSBDbWFjc0J1dHRvblR5cGUgPSAncHJpbWFyeScgfCAnZGFzaGVkJyB8ICdkYW5nZXInIHwgJ2RlZmF1bHQnO1xyXG5leHBvcnQgdHlwZSBDbWFjc0VtcGhhc2lzID0gJ2xvdycgfCAnbWVkaXVtJyB8ICdoaWdoJyB8ICdpY29uJztcclxuZXhwb3J0IHR5cGUgQ21hY3NCdXR0b25TaGFwZSA9ICdjaXJjbGUnIHwgJ3JvdW5kJyB8IG51bGw7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ1tjbWFjcy1idXR0b25dJyxcclxuICBleHBvcnRBczogJ2NtYWNzQnV0dG9uJyxcclxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtYnV0dG9uLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XHJcbiAgcmVhZG9ubHkgZWw6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBpY29uRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBpY29uT25seSA9IGZhbHNlO1xyXG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnRFbGVtZW50JykgY29udGVudEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihOekljb25EaXJlY3RpdmUsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBsaXN0T2ZJY29uRWxlbWVudDogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xyXG4gIEBIb3N0QmluZGluZygnYXR0ci5uei13YXZlJykgbnpXYXZlID0gbmV3IE56V2F2ZURpcmVjdGl2ZShcclxuICAgIHRoaXMuem9uZSxcclxuICAgIHRoaXMuZWxlbWVudFJlZixcclxuICAgIHRoaXMud2F2ZUNvbmZpZyxcclxuICAgIHRoaXMuYW5pbWF0aW9uVHlwZVxyXG4gICk7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QmxvY2sgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpHaG9zdCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNlYXJjaCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsb2FkaW5nID0gZmFsc2U7XHJcbiAgQElucHV0KCkgdHlwZTogQ21hY3NCdXR0b25UeXBlID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIGVtcGhhc2lzOiBDbWFjc0VtcGhhc2lzID0gbnVsbDtcclxuICBASW5wdXQoKSBzaGFwZTogQ21hY3NCdXR0b25TaGFwZSA9IG51bGw7XHJcbiAgQElucHV0KCkgc2l6ZTogTnpTaXplTERTVHlwZSA9ICdkZWZhdWx0JztcclxuXHJcbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICBjb25zdCBwcmVmaXhDbHMgPSAnYW50LWJ0bic7XHJcbiAgICBjb25zdCBwcmVmaXhDbWFjcyA9ICdjbWFjcy1idG4nO1xyXG4gICAgY29uc3Qgc2l6ZU1hcDogTnpTaXplTWFwID0geyBsYXJnZTogJ2xnJywgc21hbGw6ICdzbScgfTtcclxuICAgIHRoaXMudXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbCwge1xyXG4gICAgICBbYCR7cHJlZml4Q2xzfS0ke3RoaXMudHlwZX1gXTogdGhpcy50eXBlLFxyXG4gICAgICBbYCR7cHJlZml4Q2xzfS0ke3RoaXMuc2hhcGV9YF06IHRoaXMuc2hhcGUsXHJcbiAgICAgIFtgJHtwcmVmaXhDbHN9LSR7c2l6ZU1hcFt0aGlzLnNpemVdfWBdOiBzaXplTWFwW3RoaXMuc2l6ZV0sXHJcbiAgICAgIFtgJHtwcmVmaXhDbHN9LWxvYWRpbmdgXTogdGhpcy5sb2FkaW5nLFxyXG4gICAgICBbYCR7cHJlZml4Q2xzfS1pY29uLW9ubHlgXTogdGhpcy5pY29uT25seSxcclxuICAgICAgW2Ake3ByZWZpeENtYWNzfS1hY3Rpb24tJHt0aGlzLmVtcGhhc2lzfWBdOiB0aGlzLmVtcGhhc2lzICE9PSBudWxsLFxyXG4gICAgICBbYCR7cHJlZml4Q21hY3N9LXdpdGgtaWNvbmBdOiB0aGlzLmxpc3RPZkljb25FbGVtZW50ICE9PSB1bmRlZmluZWQgJiYgdGhpcy5saXN0T2ZJY29uRWxlbWVudC5sZW5ndGggPiAwICYmIHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScsXHJcbiAgICAgIFtgJHtwcmVmaXhDbHN9LWJhY2tncm91bmQtZ2hvc3RgXTogdGhpcy5uekdob3N0LFxyXG4gICAgICBbYCR7cHJlZml4Q2xzfS1ibG9ja2BdOiB0aGlzLm56QmxvY2ssXHJcbiAgICAgIFtgYW50LWlucHV0LXNlYXJjaC1idXR0b25gXTogdGhpcy5uelNlYXJjaFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVJY29uRGlzcGxheSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaWNvbkVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmljb25FbGVtZW50LCAnZGlzcGxheScsIHZhbHVlID8gJ25vbmUnIDogJ2lubGluZS1ibG9jaycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tDb250ZW50KCk6IHZvaWQge1xyXG4gICAgY29uc3QgaGFzSWNvbiA9IHRoaXMubGlzdE9mSWNvbkVsZW1lbnQgJiYgdGhpcy5saXN0T2ZJY29uRWxlbWVudC5sZW5ndGg7XHJcbiAgICBpZiAoaGFzSWNvbikge1xyXG4gICAgICB0aGlzLm1vdmVJY29uKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknKTtcclxuXHJcbiAgICBpZiAoaXNFbXB0eSh0aGlzLmNvbnRlbnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5jb250ZW50RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgIHRoaXMuaWNvbk9ubHkgPSAhIWhhc0ljb247XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknKTtcclxuICAgICAgdGhpcy5pY29uT25seSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgdGhpcy51cGRhdGVJY29uRGlzcGxheSh0aGlzLmxvYWRpbmcpO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgbW92ZUljb24oKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5saXN0T2ZJY29uRWxlbWVudCAmJiB0aGlzLmxpc3RPZkljb25FbGVtZW50Lmxlbmd0aCkge1xyXG4gICAgICBjb25zdCBmaXJzdENoaWxkRWxlbWVudCA9IGZpbmRGaXJzdE5vdEVtcHR5Tm9kZSh0aGlzLmNvbnRlbnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICBjb25zdCBsYXN0Q2hpbGRFbGVtZW50ID0gZmluZExhc3ROb3RFbXB0eU5vZGUodGhpcy5jb250ZW50RWxlbWVudC5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgaWYgKGZpcnN0Q2hpbGRFbGVtZW50ICYmIGZpcnN0Q2hpbGRFbGVtZW50ID09PSB0aGlzLmxpc3RPZkljb25FbGVtZW50LmZpcnN0Lm5hdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmluc2VydEJlZm9yZSh0aGlzLmVsLCBmaXJzdENoaWxkRWxlbWVudCwgdGhpcy5jb250ZW50RWxlbWVudC5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgICB0aGlzLmljb25FbGVtZW50ID0gZmlyc3RDaGlsZEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIH0gZWxzZSBpZiAobGFzdENoaWxkRWxlbWVudCAmJiBsYXN0Q2hpbGRFbGVtZW50ID09PSB0aGlzLmxpc3RPZkljb25FbGVtZW50Lmxhc3QubmF0aXZlRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5lbCwgbGFzdENoaWxkRWxlbWVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSB1cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTlpfV0FWRV9HTE9CQUxfQ09ORklHKSBwcml2YXRlIHdhdmVDb25maWc6IE56V2F2ZUNvbmZpZyxcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQU5JTUFUSU9OX01PRFVMRV9UWVBFKSBwcml2YXRlIGFuaW1hdGlvblR5cGU6IHN0cmluZ1xyXG4gICkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtYnRuJyk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoZWNrQ29udGVudCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICB0aGlzLm56V2F2ZS5uZ09uSW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLm56V2F2ZS5uZ09uRGVzdHJveSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKFxyXG4gICAgICBjaGFuZ2VzLm56QmxvY2sgfHxcclxuICAgICAgY2hhbmdlcy5uekdob3N0IHx8XHJcbiAgICAgIGNoYW5nZXMubnpTZWFyY2ggfHxcclxuICAgICAgY2hhbmdlcy5uelR5cGUgfHxcclxuICAgICAgY2hhbmdlcy5uelNoYXBlIHx8XHJcbiAgICAgIGNoYW5nZXMubnpTaXplIHx8XHJcbiAgICAgIGNoYW5nZXMubnpMb2FkaW5nXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMubnpMb2FkaW5nKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlSWNvbkRpc3BsYXkodGhpcy5sb2FkaW5nKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19