/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, InjectionToken, Optional, SkipSelf } from '@angular/core';
/** @type {?} */
export const NZ_LOGGER_STATE = new InjectionToken('nz-logger-state');
// Whether print the log
export class LoggerService {
    /**
     * @param {?} _loggerState
     */
    constructor(_loggerState) {
        this._loggerState = _loggerState;
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {...?} args
     * @return {?}
     */
    log(...args) {
        if (this._loggerState) {
            console.log(...args);
        }
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {...?} args
     * @return {?}
     */
    warn(...args) {
        if (this._loggerState) {
            console.warn(...args);
        }
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {...?} args
     * @return {?}
     */
    error(...args) {
        if (this._loggerState) {
            console.error(...args);
        }
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {...?} args
     * @return {?}
     */
    info(...args) {
        if (this._loggerState) {
            console.log(...args);
        }
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {...?} args
     * @return {?}
     */
    debug(...args) {
        if (this._loggerState) {
            console.log('[NG-ZORRO-DEBUG]', ...args);
        }
    }
}
LoggerService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LoggerService.ctorParameters = () => [
    { type: Boolean, decorators: [{ type: Inject, args: [NZ_LOGGER_STATE,] }] }
];
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
export const LOGGER_SERVICE_PROVIDER = {
    provide: LoggerService,
    useFactory: LOGGER_SERVICE_PROVIDER_FACTORY,
    deps: [[new Optional(), new SkipSelf(), LoggerService], NZ_LOGGER_STATE]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NvcmUvbG9nZ2VyL2xvZ2dlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFZLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFakcsTUFBTSxPQUFPLGVBQWUsR0FBRyxJQUFJLGNBQWMsQ0FBVSxpQkFBaUIsQ0FBQzs7QUFHN0UsTUFBTSxPQUFPLGFBQWE7Ozs7SUFDeEIsWUFBNkMsWUFBcUI7UUFBckIsaUJBQVksR0FBWixZQUFZLENBQVM7SUFBRyxDQUFDOzs7Ozs7SUFHdEUsR0FBRyxDQUFDLEdBQUcsSUFBVztRQUNoQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQzs7Ozs7O0lBR0QsSUFBSSxDQUFDLEdBQUcsSUFBVztRQUNqQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7Ozs7O0lBR0QsS0FBSyxDQUFDLEdBQUcsSUFBVztRQUNsQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQzs7Ozs7O0lBR0QsSUFBSSxDQUFDLEdBQUcsSUFBVztRQUNqQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQzs7Ozs7O0lBR0QsS0FBSyxDQUFDLEdBQUcsSUFBVztRQUNsQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO1NBQzFDO0lBQ0gsQ0FBQzs7O1lBckNGLFVBQVU7Ozs7MENBRUksTUFBTSxTQUFDLGVBQWU7Ozs7Ozs7SUFBdkIscUNBQXNEOzs7Ozs7O0FBc0NwRSxNQUFNLFVBQVUsK0JBQStCLENBQUMsS0FBb0IsRUFBRSxXQUFvQjtJQUN4RixPQUFPLEtBQUssSUFBSSxJQUFJLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNqRCxDQUFDOztBQUVELE1BQU0sT0FBTyx1QkFBdUIsR0FBYTtJQUMvQyxPQUFPLEVBQUUsYUFBYTtJQUN0QixVQUFVLEVBQUUsK0JBQStCO0lBQzNDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLGVBQWUsQ0FBQztDQUN6RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4sIE9wdGlvbmFsLCBQcm92aWRlciwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBjb25zdCBOWl9MT0dHRVJfU1RBVEUgPSBuZXcgSW5qZWN0aW9uVG9rZW48Ym9vbGVhbj4oJ256LWxvZ2dlci1zdGF0ZScpOyAvLyBXaGV0aGVyIHByaW50IHRoZSBsb2dcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExvZ2dlclNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTlpfTE9HR0VSX1NUQVRFKSBwcml2YXRlIF9sb2dnZXJTdGF0ZTogYm9vbGVhbikge31cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGxvZyguLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2xvZ2dlclN0YXRlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKC4uLmFyZ3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHdhcm4oLi4uYXJnczogYW55W10pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9sb2dnZXJTdGF0ZSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oLi4uYXJncyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgZXJyb3IoLi4uYXJnczogYW55W10pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9sb2dnZXJTdGF0ZSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKC4uLmFyZ3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGluZm8oLi4uYXJnczogYW55W10pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9sb2dnZXJTdGF0ZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyguLi5hcmdzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBkZWJ1ZyguLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2xvZ2dlclN0YXRlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdbTkctWk9SUk8tREVCVUddJywgLi4uYXJncyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTE9HR0VSX1NFUlZJQ0VfUFJPVklERVJfRkFDVE9SWShleGlzdDogTG9nZ2VyU2VydmljZSwgbG9nZ2VyU3RhdGU6IGJvb2xlYW4pOiBMb2dnZXJTZXJ2aWNlIHtcclxuICByZXR1cm4gZXhpc3QgfHwgbmV3IExvZ2dlclNlcnZpY2UobG9nZ2VyU3RhdGUpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTE9HR0VSX1NFUlZJQ0VfUFJPVklERVI6IFByb3ZpZGVyID0ge1xyXG4gIHByb3ZpZGU6IExvZ2dlclNlcnZpY2UsXHJcbiAgdXNlRmFjdG9yeTogTE9HR0VSX1NFUlZJQ0VfUFJPVklERVJfRkFDVE9SWSxcclxuICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgTG9nZ2VyU2VydmljZV0sIE5aX0xPR0dFUl9TVEFURV1cclxufTtcclxuIl19