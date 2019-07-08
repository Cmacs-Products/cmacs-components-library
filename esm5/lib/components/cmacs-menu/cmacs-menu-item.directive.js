/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input, Optional, Renderer2 } from '@angular/core';
import { merge, EMPTY, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { isNotNil, InputBoolean, NzMenuBaseService, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { CmacsSubmenuService } from './cmacs-submenu.service';
var CmacsMenuItemDirective = /** @class */ (function () {
    function CmacsMenuItemDirective(updateHostClassService, menuService, submenuService, renderer, elementRef) {
        this.updateHostClassService = updateHostClassService;
        this.menuService = menuService;
        this.submenuService = submenuService;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.el = this.elementRef.nativeElement;
        this.destroy$ = new Subject();
        this.originalPadding = null;
        this.selected$ = new Subject();
        this.disabled = false;
        this.selected = false;
    }
    /** clear all item selected status except this */
    /**
     * clear all item selected status except this
     * @param {?} e
     * @return {?}
     */
    CmacsMenuItemDirective.prototype.clickMenuItem = /**
     * clear all item selected status except this
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this.disabled) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        this.menuService.onMenuItemClick(this);
        if (this.submenuService) {
            this.submenuService.onMenuItemClick();
        }
    };
    /**
     * @return {?}
     */
    CmacsMenuItemDirective.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var prefixName = this.menuService.isInDropDown ? 'ant-dropdown-menu-item' : 'ant-menu-item';
        this.updateHostClassService.updateHostClass(this.el, (_a = {},
            _a["" + prefixName] = true,
            _a[prefixName + "-selected"] = this.selected,
            _a[prefixName + "-disabled"] = this.disabled,
            _a));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsMenuItemDirective.prototype.setSelectedState = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.selected = value;
        this.selected$.next(value);
        this.setClassMap();
    };
    /**
     * @return {?}
     */
    CmacsMenuItemDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /**
         * store origin padding in padding
         * @type {?}
         */
        var paddingLeft = this.el.style.paddingLeft;
        if (paddingLeft) {
            this.originalPadding = parseInt(paddingLeft, 10);
        }
        merge(this.menuService.mode$, this.menuService.inlineIndent$, this.submenuService ? this.submenuService.level$ : EMPTY)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var padding = null;
            if (_this.menuService.mode === 'inline') {
                if (isNotNil(_this.paddingLeft)) {
                    padding = _this.paddingLeft;
                }
                else {
                    /** @type {?} */
                    var level = _this.submenuService ? _this.submenuService.level + 1 : 1;
                    padding = level * _this.menuService.inlineIndent;
                }
            }
            else {
                padding = _this.originalPadding;
            }
            if (padding) {
                _this.renderer.setStyle(_this.el, 'padding-left', padding + "px");
            }
            else {
                _this.renderer.removeStyle(_this.el, 'padding-left');
            }
        }));
        this.setClassMap();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsMenuItemDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzSelected) {
            this.setSelectedState(this.selected);
        }
        if (changes.nzDisabled) {
            this.setClassMap();
        }
    };
    /**
     * @return {?}
     */
    CmacsMenuItemDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    CmacsMenuItemDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line: directive-selector
                    selector: '[cmacs-menu-item]',
                    exportAs: 'cmacsMenuItem',
                    providers: [NzUpdateHostClassService],
                    // tslint:disable-next-line: use-host-property-decorator
                    host: {
                        '(click)': 'clickMenuItem($event)'
                    }
                },] }
    ];
    /** @nocollapse */
    CmacsMenuItemDirective.ctorParameters = function () { return [
        { type: NzUpdateHostClassService },
        { type: NzMenuBaseService },
        { type: CmacsSubmenuService, decorators: [{ type: Optional }] },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    CmacsMenuItemDirective.propDecorators = {
        paddingLeft: [{ type: Input }],
        disabled: [{ type: Input }],
        selected: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsMenuItemDirective.prototype, "disabled", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsMenuItemDirective.prototype, "selected", void 0);
    return CmacsMenuItemDirective;
}());
export { CmacsMenuItemDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CmacsMenuItemDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    CmacsMenuItemDirective.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    CmacsMenuItemDirective.prototype.originalPadding;
    /** @type {?} */
    CmacsMenuItemDirective.prototype.selected$;
    /** @type {?} */
    CmacsMenuItemDirective.prototype.paddingLeft;
    /** @type {?} */
    CmacsMenuItemDirective.prototype.disabled;
    /** @type {?} */
    CmacsMenuItemDirective.prototype.selected;
    /**
     * @type {?}
     * @private
     */
    CmacsMenuItemDirective.prototype.updateHostClassService;
    /**
     * @type {?}
     * @private
     */
    CmacsMenuItemDirective.prototype.menuService;
    /**
     * @type {?}
     * @private
     */
    CmacsMenuItemDirective.prototype.submenuService;
    /**
     * @type {?}
     * @private
     */
    CmacsMenuItemDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    CmacsMenuItemDirective.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtbWVudS1pdGVtLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtbWVudS9jbWFjcy1tZW51LWl0ZW0uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUlMLFFBQVEsRUFDUixTQUFTLEVBRVYsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXpHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRTlEO0lBK0NFLGdDQUNVLHNCQUFnRCxFQUNoRCxXQUE4QixFQUNsQixjQUFtQyxFQUMvQyxRQUFtQixFQUNuQixVQUFzQjtRQUp0QiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQTBCO1FBQ2hELGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtRQUNsQixtQkFBYyxHQUFkLGNBQWMsQ0FBcUI7UUFDL0MsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBekN4QixPQUFFLEdBQWdCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQ2hELGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3pCLG9CQUFlLEdBQWtCLElBQUksQ0FBQztRQUM5QyxjQUFTLEdBQUcsSUFBSSxPQUFPLEVBQVcsQ0FBQztRQUVWLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsYUFBUSxHQUFHLEtB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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBtZXJnZSwgRU1QVFksIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgaXNOb3ROaWwsIElucHV0Qm9vbGVhbiwgTnpNZW51QmFzZVNlcnZpY2UsIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDbWFjc1N1Ym1lbnVTZXJ2aWNlIH0gZnJvbSAnLi9jbWFjcy1zdWJtZW51LnNlcnZpY2UnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGlyZWN0aXZlLXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdbY21hY3MtbWVudS1pdGVtXScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc01lbnVJdGVtJyxcclxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdLFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHVzZS1ob3N0LXByb3BlcnR5LWRlY29yYXRvclxyXG4gIGhvc3Q6IHtcclxuICAgICcoY2xpY2spJzogJ2NsaWNrTWVudUl0ZW0oJGV2ZW50KSdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc01lbnVJdGVtRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIG9yaWdpbmFsUGFkZGluZzogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgc2VsZWN0ZWQkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuICBASW5wdXQoKSBwYWRkaW5nTGVmdDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzZWxlY3RlZCA9IGZhbHNlO1xyXG5cclxuICAvKiogY2xlYXIgYWxsIGl0ZW0gc2VsZWN0ZWQgc3RhdHVzIGV4Y2VwdCB0aGlzICovXHJcbiAgY2xpY2tNZW51SXRlbShlOiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMubWVudVNlcnZpY2Uub25NZW51SXRlbUNsaWNrKHRoaXMpO1xyXG4gICAgaWYgKHRoaXMuc3VibWVudVNlcnZpY2UpIHtcclxuICAgICAgdGhpcy5zdWJtZW51U2VydmljZS5vbk1lbnVJdGVtQ2xpY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcHJlZml4TmFtZSA9IHRoaXMubWVudVNlcnZpY2UuaXNJbkRyb3BEb3duID8gJ2FudC1kcm9wZG93bi1tZW51LWl0ZW0nIDogJ2FudC1tZW51LWl0ZW0nO1xyXG4gICAgdGhpcy51cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsLCB7XHJcbiAgICAgIFtgJHtwcmVmaXhOYW1lfWBdOiB0cnVlLFxyXG4gICAgICBbYCR7cHJlZml4TmFtZX0tc2VsZWN0ZWRgXTogdGhpcy5zZWxlY3RlZCxcclxuICAgICAgW2Ake3ByZWZpeE5hbWV9LWRpc2FibGVkYF06IHRoaXMuZGlzYWJsZWRcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0U2VsZWN0ZWRTdGF0ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5zZWxlY3RlZCA9IHZhbHVlO1xyXG4gICAgdGhpcy5zZWxlY3RlZCQubmV4dCh2YWx1ZSk7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgdXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBtZW51U2VydmljZTogTnpNZW51QmFzZVNlcnZpY2UsXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIHN1Ym1lbnVTZXJ2aWNlOiBDbWFjc1N1Ym1lbnVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8qKiBzdG9yZSBvcmlnaW4gcGFkZGluZyBpbiBwYWRkaW5nICovXHJcbiAgICBjb25zdCBwYWRkaW5nTGVmdCA9IHRoaXMuZWwuc3R5bGUucGFkZGluZ0xlZnQ7XHJcbiAgICBpZiAocGFkZGluZ0xlZnQpIHtcclxuICAgICAgdGhpcy5vcmlnaW5hbFBhZGRpbmcgPSBwYXJzZUludChwYWRkaW5nTGVmdCwgMTApO1xyXG4gICAgfVxyXG4gICAgbWVyZ2UoXHJcbiAgICAgIHRoaXMubWVudVNlcnZpY2UubW9kZSQsXHJcbiAgICAgIHRoaXMubWVudVNlcnZpY2UuaW5saW5lSW5kZW50JCxcclxuICAgICAgdGhpcy5zdWJtZW51U2VydmljZSA/IHRoaXMuc3VibWVudVNlcnZpY2UubGV2ZWwkIDogRU1QVFlcclxuICAgIClcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICBsZXQgcGFkZGluZzogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMubWVudVNlcnZpY2UubW9kZSA9PT0gJ2lubGluZScpIHtcclxuICAgICAgICAgIGlmIChpc05vdE5pbCh0aGlzLnBhZGRpbmdMZWZ0KSkge1xyXG4gICAgICAgICAgICBwYWRkaW5nID0gdGhpcy5wYWRkaW5nTGVmdDtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxldmVsID0gdGhpcy5zdWJtZW51U2VydmljZSA/IHRoaXMuc3VibWVudVNlcnZpY2UubGV2ZWwgKyAxIDogMTtcclxuICAgICAgICAgICAgcGFkZGluZyA9IGxldmVsICogdGhpcy5tZW51U2VydmljZS5pbmxpbmVJbmRlbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHBhZGRpbmcgPSB0aGlzLm9yaWdpbmFsUGFkZGluZztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBhZGRpbmcpIHtcclxuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ3BhZGRpbmctbGVmdCcsIGAke3BhZGRpbmd9cHhgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmVsLCAncGFkZGluZy1sZWZ0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLm56U2VsZWN0ZWQpIHtcclxuICAgICAgdGhpcy5zZXRTZWxlY3RlZFN0YXRlKHRoaXMuc2VsZWN0ZWQpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMubnpEaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=