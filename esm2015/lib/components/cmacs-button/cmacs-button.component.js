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
        this.nzBlock = false;
        this.nzGhost = false;
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
            this.iconOnly = !!hasIcon;
        }
        else {
            this.renderer.removeStyle(this.contentElement.nativeElement, 'display');
            this.iconOnly = false;
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
    ngOnInit() {
        this.setClassMap();
        this.nzWave.ngOnInit();
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
                styles: [".ant-btn{font-size:14px;line-height:20px;font-weight:400;height:34px;box-shadow:none;border-radius:3px}.ant-btn-primary{background-color:#2a7cff;border-color:#2a7cff}.ant-btn-primary:focus,.ant-btn-primary:hover{background-color:#2164c9;border-color:#2164c9}.ant-btn-primary:disabled{border:none}.ant-btn-default{border:1px solid #bec4cd;color:#2a7cff}.ant-btn-default:focus,.ant-btn-default:hover{background-color:#f6f7fb;color:#2164c9;border:1px solid #bec4cd}.ant-btn-background-ghost.ant-btn-default:enabled,.ant-btn-background-ghost.ant-btn-primary:enabled{color:#2a7cff;border:none}.ant-btn-background-ghost.ant-btn-default:enabled:focus,.ant-btn-background-ghost.ant-btn-default:enabled:hover,.ant-btn-background-ghost.ant-btn-primary:enabled:focus,.ant-btn-background-ghost.ant-btn-primary:enabled:hover{background-color:#f6f7fb!important;color:#2a7cff}.ant-btn-background-ghost:disabled{border:none}.cmacs-btn-with-icon{background-color:#fff!important;border:1px solid transparent!important;color:#2a7cff!important}.cmacs-btn-with-icon:hover{border-color:#bec4cd!important}.cmacs-btn-with-icon:focus{background-color:#2a7cff!important;color:#fff!important}.cmacs-btn-with-icon:disabled{background-color:#f3f3f4!important;color:#97a0ae!important}.cmacs-btn-with-icon:disabled:hover{border:1px solid transparent!important}.cmacs-btn-with-icon:disabled i{color:#fff!important}.ant-btn-icon-only{border:1px solid #dee0e5;color:#656c79;background-color:#fff!important}.ant-btn-icon-only:focus,.ant-btn-icon-only:hover{color:#2a7cff;background-color:#fff!important}.ant-btn-icon-only:disabled{background-color:#f3f3f4!important;color:#97a0ae!important}.cmacs-btn-action{height:30px}.ant-btn-danger{color:#fff;background-color:#ff4d4f;border-color:#ff4d4f}.ant-btn-danger:hover{opacity:.8}"]
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
    nzBlock: [{ type: Input }],
    nzGhost: [{ type: Input }],
    nzSearch: [{ type: Input }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtYnV0dG9uL2NtYWNzLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixXQUFXLEVBQ1gsTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBSU4sUUFBUSxFQUNSLFNBQVMsRUFDVCxTQUFTLEVBRVQsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUU3RSxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLG9CQUFvQixFQUNwQixPQUFPLEVBQ1AsWUFBWSxFQUdaLHdCQUF3QixFQUV4QixlQUFlLEVBQ2YscUJBQXFCLEVBQ3RCLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBZ0JyRCxNQUFNLE9BQU8sb0JBQW9COzs7Ozs7Ozs7O0lBNkUvQixZQUNVLFVBQXNCLEVBQ3RCLEdBQXNCLEVBQ3RCLFFBQW1CLEVBQ25CLHNCQUFnRCxFQUNoRCxJQUFZLEVBQytCLFVBQXdCLEVBQ3hCLGFBQXFCO1FBTmhFLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQTBCO1FBQ2hELFNBQUksR0FBSixJQUFJLENBQVE7UUFDK0IsZUFBVSxHQUFWLFVBQVUsQ0FBYztRQUN4QixrQkFBYSxHQUFiLGFBQWEsQ0FBUTtRQW5GakUsT0FBRSxHQUFnQixJ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WUE1Q0MsVUFBVTtZQUhWLGlCQUFpQjtZQWFqQixTQUFTO1lBY1Qsd0JBQXdCO1lBcEJ4QixNQUFNOzRDQTRISCxRQUFRLFlBQUksTUFBTSxTQUFDLHFCQUFxQjt5Q0FDeEMsUUFBUSxZQUFJLE1BQU0sU0FBQyxxQkFBcUI7Ozs2QkFoRjFDLFNBQVMsU0FBQyxnQkFBZ0I7Z0NBQzFCLGVBQWUsU0FBQyxlQUFlLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO3FCQUNyRCxXQUFXLFNBQUMsY0FBYztzQkFNMUIsS0FBSztzQkFDTCxLQUFLO3VCQUNMLEtBQUs7c0JBQ0wsS0FBSztxQkFDTCxLQUFLO21CQUNMLEtBQUs7b0JBQ0wsS0FBSzttQkFDTCxLQUFLOztBQVBtQjtJQUFmLFlBQVksRUFBRTs7cURBQWlCO0FBQ2hCO0lBQWYsWUFBWSxFQUFFOztxREFBaUI7QUFDaEI7SUFBZixZQUFZLEVBQUU7O3NEQUFrQjtBQUNqQjtJQUFmLFlBQVksRUFBRTs7cURBQWlCO0FBQ2hCO0lBQWYsWUFBWSxFQUFFOztvREFBZ0I7OztJQWZ4QyxrQ0FBeUQ7Ozs7O0lBQ3pELDJDQUFpQzs7Ozs7SUFDakMsd0NBQXlCOztJQUN6Qiw4Q0FBd0Q7O0lBQ3hELGlEQUFpRzs7SUFDakcsc0NBS0U7O0lBQ0YsdUNBQXlDOztJQUN6Qyx1Q0FBeUM7O0lBQ3pDLHdDQUEwQzs7SUFDMUMsdUNBQXlDOztJQUN6QyxzQ0FBd0M7O0lBQ3hDLG9DQUEyQzs7SUFDM0MscUNBQXdDOztJQUN4QyxvQ0FBeUM7Ozs7O0lBMkR2QywwQ0FBOEI7Ozs7O0lBQzlCLG1DQUE4Qjs7Ozs7SUFDOUIsd0NBQTJCOzs7OztJQUMzQixzREFBd0Q7Ozs7O0lBQ3hELG9DQUFvQjs7Ozs7SUFDcEIsMENBQTJFOzs7OztJQUMzRSw2Q0FBd0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIEluamVjdCxcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBTklNQVRJT05fTU9EVUxFX1RZUEUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBmaW5kRmlyc3ROb3RFbXB0eU5vZGUsXHJcbiAgZmluZExhc3ROb3RFbXB0eU5vZGUsXHJcbiAgaXNFbXB0eSxcclxuICBJbnB1dEJvb2xlYW4sXHJcbiAgTnpTaXplTERTVHlwZSxcclxuICBOelNpemVNYXAsXHJcbiAgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLFxyXG4gIE56V2F2ZUNvbmZpZyxcclxuICBOeldhdmVEaXJlY3RpdmUsXHJcbiAgTlpfV0FWRV9HTE9CQUxfQ09ORklHXHJcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpJY29uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcclxuXHJcbmV4cG9ydCB0eXBlIENtYWNzQnV0dG9uVHlwZSA9ICdwcmltYXJ5JyB8ICdkYXNoZWQnIHwgJ2RhbmdlcicgfCAnZGVmYXVsdCc7XHJcbmV4cG9ydCB0eXBlIENtYWNzQnV0dG9uU2hhcGUgPSAnY2lyY2xlJyB8ICdyb3VuZCcgfCBudWxsO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdbY21hY3MtYnV0dG9uXScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0J1dHRvbicsXHJcbiAgcHJvdmlkZXJzOiBbTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWJ1dHRvbi5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0J1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG4gIHJlYWRvbmx5IGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gIHByaXZhdGUgaWNvbkVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgaWNvbk9ubHkgPSBmYWxzZTtcclxuICBAVmlld0NoaWxkKCdjb250ZW50RWxlbWVudCcpIGNvbnRlbnRFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oTnpJY29uRGlyZWN0aXZlLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgbGlzdE9mSWNvbkVsZW1lbnQ6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcclxuICBASG9zdEJpbmRpbmcoJ2F0dHIubnotd2F2ZScpIG56V2F2ZSA9IG5ldyBOeldhdmVEaXJlY3RpdmUoXHJcbiAgICB0aGlzLnpvbmUsXHJcbiAgICB0aGlzLmVsZW1lbnRSZWYsXHJcbiAgICB0aGlzLndhdmVDb25maWcsXHJcbiAgICB0aGlzLmFuaW1hdGlvblR5cGVcclxuICApO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekJsb2NrID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56R2hvc3QgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTZWFyY2ggPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbG9hZGluZyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhY3Rpb24gPSBmYWxzZTtcclxuICBASW5wdXQoKSB0eXBlOiBDbWFjc0J1dHRvblR5cGUgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgc2hhcGU6IENtYWNzQnV0dG9uU2hhcGUgPSBudWxsO1xyXG4gIEBJbnB1dCgpIHNpemU6IE56U2l6ZUxEU1R5cGUgPSAnZGVmYXVsdCc7XHJcblxyXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcHJlZml4Q2xzID0gJ2FudC1idG4nO1xyXG4gICAgY29uc3QgcHJlZml4Q21hY3MgPSAnY21hY3MtYnRuJztcclxuICAgIGNvbnN0IHNpemVNYXA6IE56U2l6ZU1hcCA9IHsgbGFyZ2U6ICdsZycsIHNtYWxsOiAnc20nIH07XHJcbiAgICB0aGlzLnVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWwsIHtcclxuICAgICAgW2Ake3ByZWZpeENsc30tJHt0aGlzLnR5cGV9YF06IHRoaXMudHlwZSxcclxuICAgICAgW2Ake3ByZWZpeENsc30tJHt0aGlzLnNoYXBlfWBdOiB0aGlzLnNoYXBlLFxyXG4gICAgICBbYCR7cHJlZml4Q2xzfS0ke3NpemVNYXBbdGhpcy5zaXplXX1gXTogc2l6ZU1hcFt0aGlzLnNpemVdLFxyXG4gICAgICBbYCR7cHJlZml4Q2xzfS1sb2FkaW5nYF06IHRoaXMubG9hZGluZyxcclxuICAgICAgW2Ake3ByZWZpeENsc30taWNvbi1vbmx5YF06IHRoaXMuaWNvbk9ubHksXHJcbiAgICAgIFtgJHtwcmVmaXhDbWFjc30tYWN0aW9uYF06IHRoaXMuYWN0aW9uLFxyXG4gICAgICBbYCR7cHJlZml4Q21hY3N9LXdpdGgtaWNvbmBdOiB0aGlzLmxpc3RPZkljb25FbGVtZW50ICE9PSB1bmRlZmluZWQgJiYgdGhpcy5saXN0T2ZJY29uRWxlbWVudC5sZW5ndGggPiAwICYmIHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScsXHJcbiAgICAgIFtgJHtwcmVmaXhDbHN9LWJhY2tncm91bmQtZ2hvc3RgXTogdGhpcy5uekdob3N0LFxyXG4gICAgICBbYCR7cHJlZml4Q2xzfS1ibG9ja2BdOiB0aGlzLm56QmxvY2ssXHJcbiAgICAgIFtgYW50LWlucHV0LXNlYXJjaC1idXR0b25gXTogdGhpcy5uelNlYXJjaFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVJY29uRGlzcGxheSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaWNvbkVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmljb25FbGVtZW50LCAnZGlzcGxheScsIHZhbHVlID8gJ25vbmUnIDogJ2lubGluZS1ibG9jaycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tDb250ZW50KCk6IHZvaWQge1xyXG4gICAgY29uc3QgaGFzSWNvbiA9IHRoaXMubGlzdE9mSWNvbkVsZW1lbnQgJiYgdGhpcy5saXN0T2ZJY29uRWxlbWVudC5sZW5ndGg7XHJcbiAgICBpZiAoaGFzSWNvbikge1xyXG4gICAgICB0aGlzLm1vdmVJY29uKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknKTtcclxuXHJcbiAgICBpZiAoaXNFbXB0eSh0aGlzLmNvbnRlbnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5jb250ZW50RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgIHRoaXMuaWNvbk9ubHkgPSAhIWhhc0ljb247XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknKTtcclxuICAgICAgdGhpcy5pY29uT25seSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgdGhpcy51cGRhdGVJY29uRGlzcGxheSh0aGlzLmxvYWRpbmcpO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgbW92ZUljb24oKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5saXN0T2ZJY29uRWxlbWVudCAmJiB0aGlzLmxpc3RPZkljb25FbGVtZW50Lmxlbmd0aCkge1xyXG4gICAgICBjb25zdCBmaXJzdENoaWxkRWxlbWVudCA9IGZpbmRGaXJzdE5vdEVtcHR5Tm9kZSh0aGlzLmNvbnRlbnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICBjb25zdCBsYXN0Q2hpbGRFbGVtZW50ID0gZmluZExhc3ROb3RFbXB0eU5vZGUodGhpcy5jb250ZW50RWxlbWVudC5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgaWYgKGZpcnN0Q2hpbGRFbGVtZW50ICYmIGZpcnN0Q2hpbGRFbGVtZW50ID09PSB0aGlzLmxpc3RPZkljb25FbGVtZW50LmZpcnN0Lm5hdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmluc2VydEJlZm9yZSh0aGlzLmVsLCBmaXJzdENoaWxkRWxlbWVudCwgdGhpcy5jb250ZW50RWxlbWVudC5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgICB0aGlzLmljb25FbGVtZW50ID0gZmlyc3RDaGlsZEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIH0gZWxzZSBpZiAobGFzdENoaWxkRWxlbWVudCAmJiBsYXN0Q2hpbGRFbGVtZW50ID09PSB0aGlzLmxpc3RPZkljb25FbGVtZW50Lmxhc3QubmF0aXZlRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5lbCwgbGFzdENoaWxkRWxlbWVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSB1cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTlpfV0FWRV9HTE9CQUxfQ09ORklHKSBwcml2YXRlIHdhdmVDb25maWc6IE56V2F2ZUNvbmZpZyxcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQU5JTUFUSU9OX01PRFVMRV9UWVBFKSBwcml2YXRlIGFuaW1hdGlvblR5cGU6IHN0cmluZ1xyXG4gICkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtYnRuJyk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoZWNrQ29udGVudCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICB0aGlzLm56V2F2ZS5uZ09uSW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLm56V2F2ZS5uZ09uRGVzdHJveSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKFxyXG4gICAgICBjaGFuZ2VzLm56QmxvY2sgfHxcclxuICAgICAgY2hhbmdlcy5uekdob3N0IHx8XHJcbiAgICAgIGNoYW5nZXMubnpTZWFyY2ggfHxcclxuICAgICAgY2hhbmdlcy5uelR5cGUgfHxcclxuICAgICAgY2hhbmdlcy5uelNoYXBlIHx8XHJcbiAgICAgIGNoYW5nZXMubnpTaXplIHx8XHJcbiAgICAgIGNoYW5nZXMubnpMb2FkaW5nXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMubnpMb2FkaW5nKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlSWNvbkRpc3BsYXkodGhpcy5sb2FkaW5nKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19