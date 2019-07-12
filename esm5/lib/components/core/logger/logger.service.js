/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Injectable, InjectionToken, Optional, SkipSelf } from '@angular/core';
/** @type {?} */
export var NZ_LOGGER_STATE = new InjectionToken('nz-logger-state');
// Whether print the log
var LoggerService = /** @class */ (function () {
    function LoggerService(_loggerState) {
        this._loggerState = _loggerState;
    }
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {...?} args
     * @return {?}
     */
    LoggerService.prototype.log = 
    // tslint:disable-next-line:no-any
    /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._loggerState) {
            console.log.apply(console, tslib_1.__spread(args));
        }
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {...?} args
     * @return {?}
     */
    LoggerService.prototype.warn = 
    // tslint:disable-next-line:no-any
    /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._loggerState) {
            console.warn.apply(console, tslib_1.__spread(args));
        }
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {...?} args
     * @return {?}
     */
    LoggerService.prototype.error = 
    // tslint:disable-next-line:no-any
    /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._loggerState) {
            console.error.apply(console, tslib_1.__spread(args));
        }
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {...?} args
     * @return {?}
     */
    LoggerService.prototype.info = 
    // tslint:disable-next-line:no-any
    /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._loggerState) {
            console.log.apply(console, tslib_1.__spread(args));
        }
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {...?} args
     * @return {?}
     */
    LoggerService.prototype.debug = 
    // tslint:disable-next-line:no-any
    /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._loggerState) {
            console.log.apply(console, tslib_1.__spread(['[NG-ZORRO-DEBUG]'], args));
        }
    };
    LoggerService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LoggerService.ctorParameters = function () { return [
        { type: Boolean, decorators: [{ type: Inject, args: [NZ_LOGGER_STATE,] }] }
    ]; };
    return LoggerService;
}());
export { LoggerService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LoggerService.prototype._loggerState;
}
/**
 * @param {?} exist
 * @param {?} loggerState
 * @return {?}
 */
export function LOGGER_SERVICE_PROVIDER_FACTORY(exist, loggerState) {
    return exist || new LoggerService(loggerState);
}
/** @type {?} */
export var LOGGER_SERVICE_PROVIDER = {
    provide: LoggerService,
    useFactory: LOGGER_SERVICE_PROVIDER_FACTORY,
    deps: [[new Optional(), new SkipSelf(), LoggerService], NZ_LOGGER_STATE]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NvcmUvbG9nZ2VyL2xvZ2dlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBWSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRWpHLE1BQU0sS0FBTyxlQUFlLEdBQUcsSUFBSSxjQUFjLENBQVUsaUJBQWlCLENBQUM7O0FBRTdFO0lBRUUsdUJBQTZDLFlBQXFCO1FBQXJCLGlCQUFZLEdBQVosWUFBWSxDQUFTO0lBQUcsQ0FBQztJQUV0RSxrQ0FBa0M7Ozs7OztJQUNsQywyQkFBRzs7Ozs7O0lBQUg7UUFBSSxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLHlCQUFjOztRQUNoQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsT0FBTyxDQUFDLEdBQUcsT0FBWCxPQUFPLG1CQUFRLElBQUksR0FBRTtTQUN0QjtJQUNILENBQUM7SUFFRCxrQ0FBa0M7Ozs7OztJQUNsQyw0QkFBSTs7Ozs7O0lBQUo7UUFBSyxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLHlCQUFjOztRQUNqQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsT0FBTyxDQUFDLElBQUksT0FBWixPQUFPLG1CQUFTLElBQUksR0FBRTtTQUN2QjtJQUNILENBQUM7SUFFRCxrQ0FBa0M7Ozs7OztJQUNsQyw2QkFBSzs7Ozs7O0lBQUw7UUFBTSxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLHlCQUFjOztRQUNsQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsT0FBTyxDQUFDLEtBQUssT0FBYixPQUFPLG1CQUFVLElBQUksR0FBRTtTQUN4QjtJQUNILENBQUM7SUFFRCxrQ0FBa0M7Ozs7OztJQUNsQyw0QkFBSTs7Ozs7O0lBQUo7UUFBSyxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLHlCQUFjOztRQUNqQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsT0FBTyxDQUFDLEdBQUcsT0FBWCxPQUFPLG1CQUFRLElBQUksR0FBRTtTQUN0QjtJQUNILENBQUM7SUFFRCxrQ0FBa0M7Ozs7OztJQUNsQyw2QkFBSzs7Ozs7O0lBQUw7UUFBTSxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLHlCQUFjOztRQUNsQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsT0FBTyxDQUFDLEdBQUcsT0FBWCxPQUFPLG9CQUFLLGtCQUFrQixHQUFLLElBQUksR0FBRTtTQUMxQztJQUNILENBQUM7O2dCQXJDRixVQUFVOzs7OzhDQUVJLE1BQU0sU0FBQyxlQUFlOztJQW9DckMsb0JBQUM7Q0FBQSxBQXRDRCxJQXNDQztTQXJDWSxhQUFhOzs7Ozs7SUFDWixxQ0FBc0Q7Ozs7Ozs7QUFzQ3BFLE1BQU0sVUFBVSwrQkFBK0IsQ0FBQyxLQUFvQixFQUFFLFdBQW9CO0lBQ3hGLE9BQU8sS0FBSyxJQUFJLElBQUksYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ2pELENBQUM7O0FBRUQsTUFBTSxLQUFPLHVCQUF1QixHQUFhO0lBQy9DLE9BQU8sRUFBRSxhQUFhO0lBQ3RCLFVBQVUsRUFBRSwrQkFBK0I7SUFDM0MsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsYUFBYSxDQUFDLEVBQUUsZUFBZSxDQUFDO0NBQ3pFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiwgT3B0aW9uYWwsIFByb3ZpZGVyLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5aX0xPR0dFUl9TVEFURSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxib29sZWFuPignbnotbG9nZ2VyLXN0YXRlJyk7IC8vIFdoZXRoZXIgcHJpbnQgdGhlIGxvZ1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTG9nZ2VyU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChOWl9MT0dHRVJfU1RBVEUpIHByaXZhdGUgX2xvZ2dlclN0YXRlOiBib29sZWFuKSB7fVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgbG9nKC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fbG9nZ2VyU3RhdGUpIHtcclxuICAgICAgY29uc29sZS5sb2coLi4uYXJncyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgd2FybiguLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2xvZ2dlclN0YXRlKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybiguLi5hcmdzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBlcnJvciguLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2xvZ2dlclN0YXRlKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoLi4uYXJncyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgaW5mbyguLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2xvZ2dlclN0YXRlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKC4uLmFyZ3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGRlYnVnKC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fbG9nZ2VyU3RhdGUpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1tORy1aT1JSTy1ERUJVR10nLCAuLi5hcmdzKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMT0dHRVJfU0VSVklDRV9QUk9WSURFUl9GQUNUT1JZKGV4aXN0OiBMb2dnZXJTZXJ2aWNlLCBsb2dnZXJTdGF0ZTogYm9vbGVhbik6IExvZ2dlclNlcnZpY2Uge1xyXG4gIHJldHVybiBleGlzdCB8fCBuZXcgTG9nZ2VyU2VydmljZShsb2dnZXJTdGF0ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBMT0dHRVJfU0VSVklDRV9QUk9WSURFUjogUHJvdmlkZXIgPSB7XHJcbiAgcHJvdmlkZTogTG9nZ2VyU2VydmljZSxcclxuICB1c2VGYWN0b3J5OiBMT0dHRVJfU0VSVklDRV9QUk9WSURFUl9GQUNUT1JZLFxyXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBMb2dnZXJTZXJ2aWNlXSwgTlpfTE9HR0VSX1NUQVRFXVxyXG59O1xyXG4iXX0=