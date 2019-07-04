/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Optional, SkipSelf } from '@angular/core';
import { combineLatest, BehaviorSubject, Subject } from 'rxjs';
import { auditTime, distinctUntilChanged, map, tap } from 'rxjs/operators';
import { CmacsMenuService } from './cmacs-menu.service';
var CmacsSubmenuService = /** @class */ (function () {
    function CmacsSubmenuService(hostSubmenuService, nzMenuService) {
        var _this = this;
        this.hostSubmenuService = hostSubmenuService;
        this.nzMenuService = nzMenuService;
        this.disabled = false;
        this.mode = 'vertical';
        this.mode$ = this.nzMenuService.mode$.pipe(map((/**
         * @param {?} mode
         * @return {?}
         */
        function (mode) {
            if (mode === 'inline') {
                return 'inline';
            }
            else if (mode === 'vertical' || _this.hostSubmenuService) {
                return 'vertical';
            }
            else {
                return 'horizontal';
            }
        })), tap((/**
         * @param {?} mode
         * @return {?}
         */
        function (mode) { return (_this.mode = (/** @type {?} */ (mode))); })));
        this.level = 1;
        this.level$ = new BehaviorSubject(1);
        this.subMenuOpen$ = new BehaviorSubject(false);
        this.open$ = new BehaviorSubject(false);
        this.mouseEnterLeave$ = new Subject();
        this.menuOpen$ = combineLatest(this.subMenuOpen$, this.mouseEnterLeave$).pipe(map((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return value[0] || value[1]; })), auditTime(150), distinctUntilChanged(), tap((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.setOpenState(data);
            if (_this.hostSubmenuService) {
                _this.hostSubmenuService.subMenuOpen$.next(data);
            }
        })));
        if (this.hostSubmenuService) {
            this.setLevel(this.hostSubmenuService.level + 1);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsSubmenuService.prototype.setOpenState = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.open$.next(value);
    };
    /**
     * @return {?}
     */
    CmacsSubmenuService.prototype.onMenuItemClick = /**
     * @return {?}
     */
    function () {
        this.setMouseEnterState(false);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsSubmenuService.prototype.setLevel = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.level$.next(value);
        this.level = value;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsSubmenuService.prototype.setMouseEnterState = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if ((this.mode === 'horizontal' || this.mode === 'vertical' || this.nzMenuService.isInDropDown) && !this.disabled) {
            this.mouseEnterLeave$.next(value);
        }
    };
    CmacsSubmenuService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CmacsSubmenuService.ctorParameters = function () { return [
        { type: CmacsSubmenuService, decorators: [{ type: SkipSelf }, { type: Optional }] },
        { type: CmacsMenuService }
    ]; };
    return CmacsSubmenuService;
}());
export { CmacsSubmenuService };
if (false) {
    /** @type {?} */
    CmacsSubmenuService.prototype.disabled;
    /** @type {?} */
    CmacsSubmenuService.prototype.mode;
    /** @type {?} */
    CmacsSubmenuService.prototype.mode$;
    /** @type {?} */
    CmacsSubmenuService.prototype.level;
    /** @type {?} */
    CmacsSubmenuService.prototype.level$;
    /** @type {?} */
    CmacsSubmenuService.prototype.subMenuOpen$;
    /** @type {?} */
    CmacsSubmenuService.prototype.open$;
    /** @type {?} */
    CmacsSubmenuService.prototype.mouseEnterLeave$;
    /** @type {?} */
    CmacsSubmenuService.prototype.menuOpen$;
    /**
     * @type {?}
     * @private
     */
    CmacsSubmenuService.prototype.hostSubmenuService;
    /** @type {?} */
    CmacsSubmenuService.prototype.nzMenuService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc3VibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1tZW51L2NtYWNzLXN1Ym1lbnUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQUUsU0FBUyxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUkzRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RDtJQW9ERSw2QkFDa0Msa0JBQXVDLEVBQ2hFLGFBQStCO1FBRnhDLGlCQU9DO1FBTmlDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBcUI7UUFDaEUsa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBcER4QyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFNBQUksR0FBdUIsVUFBVSxDQUFDO1FBQ3RDLFVBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ25DLEdBQUc7Ozs7UUFBQyxVQUFBLElBQUk7WUFDTixJQUFJLElBQUksS0FBSyxRQUFRLEVBQUU7Z0JBQ3JCLE9BQU8sUUFBUSxDQUFDO2FBQ2pCO2lCQUFNLElBQUksSUFBSSxLQUFLLFVBQVUsSUFBSSxLQUFJLENBQUMsa0JBQWtCLEVBQUU7Z0JBQ3pELE9BQU8sVUFBVSxDQUFDO2FBQ25CO2lCQUFNO2dCQUNMLE9BQU8sWUFBWSxDQUFDO2FBQ3JCO1FBQ0gsQ0FBQyxFQUFDLEVBQ0YsR0FBRzs7OztRQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsQ0FBQyxLQUFJLENBQUMsSUFBSSxHQUFHLG1CQUFBLElBQUksRUFBc0IsQ0FBQyxFQUF4QyxDQUF3QyxFQUFDLENBQ3RELENBQUM7UUFDRixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsV0FBTSxHQUFHLElBQUksZUFBZSxDQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLGlCQUFZLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7UUFDbkQsVUFBSyxHQUFHLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBQzVDLHFCQUFnQixHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7UUFDMUMsY0FBUyxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FDdEUsR0FBRzs7OztRQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBcEIsQ0FBb0IsRUFBQyxFQUNsQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQ2Qsb0JBQW9CLEVBQUUsRUFDdEIsR0FBRzs7OztRQUFDLFVBQUEsSUFBSTtZQUNOLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEIsSUFBSSxLQUFJLENBQUMsa0JBQWtCLEVBQUU7Z0JBQzNCLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2pEO1FBQ0gsQ0FBQyxFQUFDLENBQ0gsQ0FBQztRQXlCQSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDbEQ7SUFDSCxDQUFDOzs7OztJQTFCRCwwQ0FBWTs7OztJQUFaLFVBQWEsS0FBYztRQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsNkNBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRUQsc0NBQVE7Ozs7SUFBUixVQUFTLEtBQWE7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxnREFBa0I7Ozs7SUFBbEIsVUFBbUIsS0FBYztRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxZQUFZLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxVQUFVLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakgsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQztJQUNILENBQUM7O2dCQWxERixVQUFVOzs7O2dCQXFENkMsbUJBQW1CLHVCQUF0RSxRQUFRLFlBQUksUUFBUTtnQkF2RGhCLGdCQUFnQjs7SUE4RHpCLDBCQUFDO0NBQUEsQUE1REQsSUE0REM7U0EzRFksbUJBQW1COzs7SUFDOUIsdUNBQWlCOztJQUNqQixtQ0FBc0M7O0lBQ3RDLG9DQVdFOztJQUNGLG9DQUFVOztJQUNWLHFDQUF3Qzs7SUFDeEMsMkNBQW1EOztJQUNuRCxvQ0FBNEM7O0lBQzVDLCtDQUEwQzs7SUFDMUMsd0NBVUU7Ozs7O0lBc0JBLGlEQUF1RTs7SUFDdkUsNENBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBCZWhhdmlvclN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGF1ZGl0VGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBOekRpcmVjdGlvblZISVR5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5pbXBvcnQgeyBDbWFjc01lbnVTZXJ2aWNlIH0gZnJvbSAnLi9jbWFjcy1tZW51LnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ21hY3NTdWJtZW51U2VydmljZSB7XG4gIGRpc2FibGVkID0gZmFsc2U7XG4gIG1vZGU6IE56RGlyZWN0aW9uVkhJVHlwZSA9ICd2ZXJ0aWNhbCc7XG4gIG1vZGUkID0gdGhpcy5uek1lbnVTZXJ2aWNlLm1vZGUkLnBpcGUoXG4gICAgbWFwKG1vZGUgPT4ge1xuICAgICAgaWYgKG1vZGUgPT09ICdpbmxpbmUnKSB7XG4gICAgICAgIHJldHVybiAnaW5saW5lJztcbiAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gJ3ZlcnRpY2FsJyB8fCB0aGlzLmhvc3RTdWJtZW51U2VydmljZSkge1xuICAgICAgICByZXR1cm4gJ3ZlcnRpY2FsJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAnaG9yaXpvbnRhbCc7XG4gICAgICB9XG4gICAgfSksXG4gICAgdGFwKG1vZGUgPT4gKHRoaXMubW9kZSA9IG1vZGUgYXMgTnpEaXJlY3Rpb25WSElUeXBlKSlcbiAgKTtcbiAgbGV2ZWwgPSAxO1xuICBsZXZlbCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4oMSk7XG4gIHN1Yk1lbnVPcGVuJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuICBvcGVuJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuICBtb3VzZUVudGVyTGVhdmUkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgbWVudU9wZW4kID0gY29tYmluZUxhdGVzdCh0aGlzLnN1Yk1lbnVPcGVuJCwgdGhpcy5tb3VzZUVudGVyTGVhdmUkKS5waXBlKFxuICAgIG1hcCh2YWx1ZSA9PiB2YWx1ZVswXSB8fCB2YWx1ZVsxXSksXG4gICAgYXVkaXRUaW1lKDE1MCksXG4gICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICB0YXAoZGF0YSA9PiB7XG4gICAgICB0aGlzLnNldE9wZW5TdGF0ZShkYXRhKTtcbiAgICAgIGlmICh0aGlzLmhvc3RTdWJtZW51U2VydmljZSkge1xuICAgICAgICB0aGlzLmhvc3RTdWJtZW51U2VydmljZS5zdWJNZW51T3BlbiQubmV4dChkYXRhKTtcbiAgICAgIH1cbiAgICB9KVxuICApO1xuXG4gIHNldE9wZW5TdGF0ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMub3BlbiQubmV4dCh2YWx1ZSk7XG4gIH1cblxuICBvbk1lbnVJdGVtQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5zZXRNb3VzZUVudGVyU3RhdGUoZmFsc2UpO1xuICB9XG5cbiAgc2V0TGV2ZWwodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMubGV2ZWwkLm5leHQodmFsdWUpO1xuICAgIHRoaXMubGV2ZWwgPSB2YWx1ZTtcbiAgfVxuXG4gIHNldE1vdXNlRW50ZXJTdGF0ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICgodGhpcy5tb2RlID09PSAnaG9yaXpvbnRhbCcgfHwgdGhpcy5tb2RlID09PSAndmVydGljYWwnIHx8IHRoaXMubnpNZW51U2VydmljZS5pc0luRHJvcERvd24pICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLm1vdXNlRW50ZXJMZWF2ZSQubmV4dCh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQFNraXBTZWxmKCkgQE9wdGlvbmFsKCkgcHJpdmF0ZSBob3N0U3VibWVudVNlcnZpY2U6IENtYWNzU3VibWVudVNlcnZpY2UsXG4gICAgcHVibGljIG56TWVudVNlcnZpY2U6IENtYWNzTWVudVNlcnZpY2VcbiAgKSB7XG4gICAgaWYgKHRoaXMuaG9zdFN1Ym1lbnVTZXJ2aWNlKSB7XG4gICAgICB0aGlzLnNldExldmVsKHRoaXMuaG9zdFN1Ym1lbnVTZXJ2aWNlLmxldmVsICsgMSk7XG4gICAgfVxuICB9XG59XG4iXX0=