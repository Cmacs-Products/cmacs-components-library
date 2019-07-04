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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtbWVudS1pdGVtLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtbWVudS9jbWFjcy1tZW51LWl0ZW0uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUlMLFFBQVEsRUFDUixTQUFTLEVBRVYsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXpHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRTlEO0lBK0NFLGdDQUNVLHNCQUFnRCxFQUNoRCxXQUE4QixFQUNsQixjQUFtQyxFQUMvQyxRQUFtQixFQUNuQixVQUFzQjtRQUp0QiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQTBCO1FBQ2hELGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtRQUNsQixtQkFBYyxHQUFkLGNBQWMsQ0FBcUI7UUFDL0MsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBekN4QixPQUFFLEdBQWdCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQ2hELGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3pCLG9CQUFlLEdBQWtCLElBQUksQ0FBQztRQUM5QyxjQUFTLEdBQUcsSUFBSSxPQUFPLEVBQVcsQ0FBQztRQUVWLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsYUFBUSxHQUFHLEtB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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBtZXJnZSwgRU1QVFksIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgaXNOb3ROaWwsIElucHV0Qm9vbGVhbiwgTnpNZW51QmFzZVNlcnZpY2UsIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5cbmltcG9ydCB7IENtYWNzU3VibWVudVNlcnZpY2UgfSBmcm9tICcuL2NtYWNzLXN1Ym1lbnUuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbY21hY3MtbWVudS1pdGVtXScsXG4gIGV4cG9ydEFzOiAnY21hY3NNZW51SXRlbScsXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHVzZS1ob3N0LXByb3BlcnR5LWRlY29yYXRvclxuICBob3N0OiB7XG4gICAgJyhjbGljayknOiAnY2xpY2tNZW51SXRlbSgkZXZlbnQpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIENtYWNzTWVudUl0ZW1EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgb3JpZ2luYWxQYWRkaW5nOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgc2VsZWN0ZWQkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgQElucHV0KCkgcGFkZGluZ0xlZnQ6IG51bWJlcjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzZWxlY3RlZCA9IGZhbHNlO1xuXG4gIC8qKiBjbGVhciBhbGwgaXRlbSBzZWxlY3RlZCBzdGF0dXMgZXhjZXB0IHRoaXMgKi9cbiAgY2xpY2tNZW51SXRlbShlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMubWVudVNlcnZpY2Uub25NZW51SXRlbUNsaWNrKHRoaXMpO1xuICAgIGlmICh0aGlzLnN1Ym1lbnVTZXJ2aWNlKSB7XG4gICAgICB0aGlzLnN1Ym1lbnVTZXJ2aWNlLm9uTWVudUl0ZW1DbGljaygpO1xuICAgIH1cbiAgfVxuXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xuICAgIGNvbnN0IHByZWZpeE5hbWUgPSB0aGlzLm1lbnVTZXJ2aWNlLmlzSW5Ecm9wRG93biA/ICdhbnQtZHJvcGRvd24tbWVudS1pdGVtJyA6ICdhbnQtbWVudS1pdGVtJztcbiAgICB0aGlzLnVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWwsIHtcbiAgICAgIFtgJHtwcmVmaXhOYW1lfWBdOiB0cnVlLFxuICAgICAgW2Ake3ByZWZpeE5hbWV9LXNlbGVjdGVkYF06IHRoaXMuc2VsZWN0ZWQsXG4gICAgICBbYCR7cHJlZml4TmFtZX0tZGlzYWJsZWRgXTogdGhpcy5kaXNhYmxlZFxuICAgIH0pO1xuICB9XG5cbiAgc2V0U2VsZWN0ZWRTdGF0ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSB2YWx1ZTtcbiAgICB0aGlzLnNlbGVjdGVkJC5uZXh0KHZhbHVlKTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSxcbiAgICBwcml2YXRlIG1lbnVTZXJ2aWNlOiBOek1lbnVCYXNlU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIHN1Ym1lbnVTZXJ2aWNlOiBDbWFjc1N1Ym1lbnVTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWZcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8qKiBzdG9yZSBvcmlnaW4gcGFkZGluZyBpbiBwYWRkaW5nICovXG4gICAgY29uc3QgcGFkZGluZ0xlZnQgPSB0aGlzLmVsLnN0eWxlLnBhZGRpbmdMZWZ0O1xuICAgIGlmIChwYWRkaW5nTGVmdCkge1xuICAgICAgdGhpcy5vcmlnaW5hbFBhZGRpbmcgPSBwYXJzZUludChwYWRkaW5nTGVmdCwgMTApO1xuICAgIH1cbiAgICBtZXJnZShcbiAgICAgIHRoaXMubWVudVNlcnZpY2UubW9kZSQsXG4gICAgICB0aGlzLm1lbnVTZXJ2aWNlLmlubGluZUluZGVudCQsXG4gICAgICB0aGlzLnN1Ym1lbnVTZXJ2aWNlID8gdGhpcy5zdWJtZW51U2VydmljZS5sZXZlbCQgOiBFTVBUWVxuICAgIClcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBsZXQgcGFkZGluZzogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLm1lbnVTZXJ2aWNlLm1vZGUgPT09ICdpbmxpbmUnKSB7XG4gICAgICAgICAgaWYgKGlzTm90TmlsKHRoaXMucGFkZGluZ0xlZnQpKSB7XG4gICAgICAgICAgICBwYWRkaW5nID0gdGhpcy5wYWRkaW5nTGVmdDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbGV2ZWwgPSB0aGlzLnN1Ym1lbnVTZXJ2aWNlID8gdGhpcy5zdWJtZW51U2VydmljZS5sZXZlbCArIDEgOiAxO1xuICAgICAgICAgICAgcGFkZGluZyA9IGxldmVsICogdGhpcy5tZW51U2VydmljZS5pbmxpbmVJbmRlbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhZGRpbmcgPSB0aGlzLm9yaWdpbmFsUGFkZGluZztcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFkZGluZykge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ3BhZGRpbmctbGVmdCcsIGAke3BhZGRpbmd9cHhgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZWwsICdwYWRkaW5nLWxlZnQnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLm56U2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuc2V0U2VsZWN0ZWRTdGF0ZSh0aGlzLnNlbGVjdGVkKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMubnpEaXNhYmxlZCkge1xuICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19