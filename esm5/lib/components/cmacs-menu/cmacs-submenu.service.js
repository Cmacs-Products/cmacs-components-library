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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc3VibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1tZW51L2NtYWNzLXN1Ym1lbnUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQUUsU0FBUyxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUkzRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RDtJQW9ERSw2QkFDa0Msa0JBQXVDLEVBQ2hFLGFBQStCO1FBRnhDLGlCQU9DO1FBTmlDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBcUI7UUFDaEUsa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBcER4QyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFNBQUksR0FBdUIsVUFBVSxDQUFDO1FBQ3RDLFVBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ25DLEdBQUc7Ozs7UUFBQyxVQUFBLElBQUk7WUFDTixJQUFJLElBQUksS0FBSyxRQUFRLEVBQUU7Z0JBQ3JCLE9BQU8sUUFBUSxDQUFDO2FBQ2pCO2lCQUFNLElBQUksSUFBSSxLQUFLLFVBQVUsSUFBSSxLQUFJLENBQUMsa0JBQWtCLEVBQUU7Z0JBQ3pELE9BQU8sVUFBVSxDQUFDO2FBQ25CO2lCQUFNO2dCQUNMLE9BQU8sWUFBWSxDQUFDO2FBQ3JCO1FBQ0gsQ0FBQyxFQUFDLEVBQ0YsR0FBRzs7OztRQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsQ0FBQyxLQUFJLENBQUMsSUFBSSxHQUFHLG1CQUFBLElBQUksRUFBc0IsQ0FBQyxFQUF4QyxDQUF3QyxFQUFDLENBQ3RELENBQUM7UUFDRixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsV0FBTSxHQUFHLElBQUksZUFBZSxDQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLGlCQUFZLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7UUFDbkQsVUFBSyxHQUFHLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBQzVDLHFCQUFnQixHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7UUFDMUMsY0FBUyxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FDdEUsR0FBRzs7OztRQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBcEIsQ0FBb0IsRUFBQyxFQUNsQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQ2Qsb0JBQW9CLEVBQUUsRUFDdEIsR0FBRzs7OztRQUFDLFVBQUEsSUFBSTtZQUNOLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEIsSUFBSSxLQUFJLENBQUMsa0JBQWtCLEVBQUU7Z0JBQzNCLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2pEO1FBQ0gsQ0FBQyxFQUFDLENBQ0gsQ0FBQztRQXlCQSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDbEQ7SUFDSCxDQUFDOzs7OztJQTFCRCwwQ0FBWTs7OztJQUFaLFVBQWEsS0FBYztRQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsNkNBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRUQsc0NBQVE7Ozs7SUFBUixVQUFTLEtBQWE7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxnREFBa0I7Ozs7SUFBbEIsVUFBbUIsS0FBYztRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxZQUFZLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxVQUFVLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakgsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQztJQUNILENBQUM7O2dCQWxERixVQUFVOzs7O2dCQXFENkMsbUJBQW1CLHVCQUF0RSxRQUFRLFlBQUksUUFBUTtnQkF2RGhCLGdCQUFnQjs7SUE4RHpCLDBCQUFDO0NBQUEsQUE1REQsSUE0REM7U0EzRFksbUJBQW1COzs7SUFDOUIsdUNBQWlCOztJQUNqQixtQ0FBc0M7O0lBQ3RDLG9DQVdFOztJQUNGLG9DQUFVOztJQUNWLHFDQUF3Qzs7SUFDeEMsMkNBQW1EOztJQUNuRCxvQ0FBNEM7O0lBQzVDLCtDQUEwQzs7SUFDMUMsd0NBVUU7Ozs7O0lBc0JBLGlEQUF1RTs7SUFDdkUsNENBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIEJlaGF2aW9yU3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBhdWRpdFRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IE56RGlyZWN0aW9uVkhJVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDbWFjc01lbnVTZXJ2aWNlIH0gZnJvbSAnLi9jbWFjcy1tZW51LnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ21hY3NTdWJtZW51U2VydmljZSB7XHJcbiAgZGlzYWJsZWQgPSBmYWxzZTtcclxuICBtb2RlOiBOekRpcmVjdGlvblZISVR5cGUgPSAndmVydGljYWwnO1xyXG4gIG1vZGUkID0gdGhpcy5uek1lbnVTZXJ2aWNlLm1vZGUkLnBpcGUoXHJcbiAgICBtYXAobW9kZSA9PiB7XHJcbiAgICAgIGlmIChtb2RlID09PSAnaW5saW5lJykge1xyXG4gICAgICAgIHJldHVybiAnaW5saW5lJztcclxuICAgICAgfSBlbHNlIGlmIChtb2RlID09PSAndmVydGljYWwnIHx8IHRoaXMuaG9zdFN1Ym1lbnVTZXJ2aWNlKSB7XHJcbiAgICAgICAgcmV0dXJuICd2ZXJ0aWNhbCc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuICdob3Jpem9udGFsJztcclxuICAgICAgfVxyXG4gICAgfSksXHJcbiAgICB0YXAobW9kZSA9PiAodGhpcy5tb2RlID0gbW9kZSBhcyBOekRpcmVjdGlvblZISVR5cGUpKVxyXG4gICk7XHJcbiAgbGV2ZWwgPSAxO1xyXG4gIGxldmVsJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPigxKTtcclxuICBzdWJNZW51T3BlbiQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcclxuICBvcGVuJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIG1vdXNlRW50ZXJMZWF2ZSQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG4gIG1lbnVPcGVuJCA9IGNvbWJpbmVMYXRlc3QodGhpcy5zdWJNZW51T3BlbiQsIHRoaXMubW91c2VFbnRlckxlYXZlJCkucGlwZShcclxuICAgIG1hcCh2YWx1ZSA9PiB2YWx1ZVswXSB8fCB2YWx1ZVsxXSksXHJcbiAgICBhdWRpdFRpbWUoMTUwKSxcclxuICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXHJcbiAgICB0YXAoZGF0YSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0T3BlblN0YXRlKGRhdGEpO1xyXG4gICAgICBpZiAodGhpcy5ob3N0U3VibWVudVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmhvc3RTdWJtZW51U2VydmljZS5zdWJNZW51T3BlbiQubmV4dChkYXRhKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICApO1xyXG5cclxuICBzZXRPcGVuU3RhdGUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMub3BlbiQubmV4dCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBvbk1lbnVJdGVtQ2xpY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldE1vdXNlRW50ZXJTdGF0ZShmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBzZXRMZXZlbCh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLmxldmVsJC5uZXh0KHZhbHVlKTtcclxuICAgIHRoaXMubGV2ZWwgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHNldE1vdXNlRW50ZXJTdGF0ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKCh0aGlzLm1vZGUgPT09ICdob3Jpem9udGFsJyB8fCB0aGlzLm1vZGUgPT09ICd2ZXJ0aWNhbCcgfHwgdGhpcy5uek1lbnVTZXJ2aWNlLmlzSW5Ecm9wRG93bikgJiYgIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5tb3VzZUVudGVyTGVhdmUkLm5leHQodmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBAU2tpcFNlbGYoKSBAT3B0aW9uYWwoKSBwcml2YXRlIGhvc3RTdWJtZW51U2VydmljZTogQ21hY3NTdWJtZW51U2VydmljZSxcclxuICAgIHB1YmxpYyBuek1lbnVTZXJ2aWNlOiBDbWFjc01lbnVTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICBpZiAodGhpcy5ob3N0U3VibWVudVNlcnZpY2UpIHtcclxuICAgICAgdGhpcy5zZXRMZXZlbCh0aGlzLmhvc3RTdWJtZW51U2VydmljZS5sZXZlbCArIDEpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=