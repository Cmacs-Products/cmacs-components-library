/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { BACKSPACE, DOWN_ARROW, ENTER, SPACE, TAB, UP_ARROW } from '@angular/cdk/keycodes';
import { Injectable } from '@angular/core';
import { combineLatest, merge, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, share, skip, tap } from 'rxjs/operators';
import { isNil, isNotNil } from 'ng-zorro-antd/core';
import { CmacsOptionComponent } from './cmacs-option.component';
import { defaultFilterOption, NzFilterOptionPipe } from './cmacs-option.pipe';
var CmacsSelectService = /** @class */ (function () {
    function CmacsSelectService() {
        var _this = this;
        // Input params
        this.autoClearSearchValue = true;
        this.serverSearch = false;
        this.filterOption = defaultFilterOption;
        this.mode = 'default';
        this.maxMultipleCount = Infinity;
        this.disabled = false;
        // tslint:disable-next-line:no-any
        this.compareWith = (/**
         * @param {?} o1
         * @param {?} o2
         * @return {?}
         */
        function (o1, o2) { return o1 === o2; });
        // selectedValueChanged should emit ngModelChange or not
        // tslint:disable-next-line:no-any
        this.listOfSelectedValueWithEmit$ = new BehaviorSubject({
            value: [],
            emit: false
        });
        // ContentChildren Change
        this.mapOfTemplateOption$ = new BehaviorSubject({
            listOfNzOptionComponent: [],
            listOfNzOptionGroupComponent: []
        });
        // searchValue Change
        this.searchValueRaw$ = new BehaviorSubject('');
        this.listOfFilteredOption = [];
        this.openRaw$ = new Subject();
        this.checkRaw$ = new Subject();
        this.open = false;
        this.clearInput$ = new Subject();
        this.searchValue = '';
        this.isShowNotFound = false;
        // open
        this.open$ = this.openRaw$.pipe(distinctUntilChanged(), share(), tap((/**
         * @return {?}
         */
        function () { return _this.clearInput(); })));
        this.activatedOption$ = new ReplaySubject(1);
        this.listOfSelectedValue$ = this.listOfSelectedValueWithEmit$.pipe(map((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return data.value; })));
        this.modelChange$ = this.listOfSelectedValueWithEmit$.pipe(filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.emit; })), map((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            /** @type {?} */
            var selectedList = data.value;
            /** @type {?} */
            var modelValue = null;
            if (_this.isSingleMode) {
                if (selectedList.length) {
                    modelValue = selectedList[0];
                }
            }
            else {
                modelValue = selectedList;
            }
            return modelValue;
        })));
        this.searchValue$ = this.searchValueRaw$.pipe(distinctUntilChanged(), skip(1), share(), tap((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.searchValue = value;
            if (value) {
                _this.updateActivatedOption(_this.listOfFilteredOption[0]);
            }
            _this.updateListOfFilteredOption();
        })));
        // tslint:disable-next-line:no-any
        this.listOfSelectedValue = [];
        // flat ViewChildren
        this.listOfTemplateOption = [];
        // tag option
        this.listOfTagOption = [];
        // tag option concat template option
        this.listOfTagAndTemplateOption = [];
        // ViewChildren
        this.listOfNzOptionComponent = [];
        this.listOfNzOptionGroupComponent = [];
        // display in top control
        this.listOfCachedSelectedOption = [];
        // selected value or ViewChildren change
        this.valueOrOption$ = combineLatest(this.listOfSelectedValue$, this.mapOfTemplateOption$).pipe(tap((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.listOfSelectedValue = data[0];
            _this.listOfNzOptionComponent = data[1].listOfNzOptionComponent;
            _this.listOfNzOptionGroupComponent = data[1].listOfNzOptionGroupComponent;
            _this.listOfTemplateOption = _this.listOfNzOptionComponent.concat(_this.listOfNzOptionGroupComponent.reduce((/**
             * @param {?} pre
             * @param {?} cur
             * @return {?}
             */
            function (pre, cur) { return tslib_1.__spread(pre, cur.listOfNzOptionComponent.toArray()); }), (/** @type {?} */ ([]))));
            _this.updateListOfTagOption();
            _this.updateListOfFilteredOption();
            _this.resetActivatedOptionIfNeeded();
            _this.updateListOfCachedOption();
        })), share());
        this.check$ = merge(this.checkRaw$, this.valueOrOption$, this.searchValue$, this.activatedOption$, this.open$, this.modelChange$).pipe(share());
    }
    /**
     * @param {?} option
     * @return {?}
     */
    CmacsSelectService.prototype.clickOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        var _this = this;
        /** update listOfSelectedOption -> update listOfSelectedValue -> next listOfSelectedValue$ **/
        if (!option.nzDisabled) {
            this.updateActivatedOption(option);
            /** @type {?} */
            var listOfSelectedValue = tslib_1.__spread(this.listOfSelectedValue);
            if (this.isMultipleOrTags) {
                /** @type {?} */
                var targetValue = listOfSelectedValue.find((/**
                 * @param {?} o
                 * @return {?}
                 */
                function (o) { return _this.compareWith(o, option.nzValue); }));
                if (isNotNil(targetValue)) {
                    listOfSelectedValue.splice(listOfSelectedValue.indexOf(targetValue), 1);
                    this.updateListOfSelectedValue(listOfSelectedValue, true);
                }
                else if (listOfSelectedValue.length < this.maxMultipleCount) {
                    listOfSelectedValue.push(option.nzValue);
                    this.updateListOfSelectedValue(listOfSelectedValue, true);
                }
            }
            else if (!this.compareWith(listOfSelectedValue[0], option.nzValue)) {
                listOfSelectedValue = [option.nzValue];
                this.updateListOfSelectedValue(listOfSelectedValue, true);
            }
            if (this.isSingleMode) {
                this.setOpenState(false);
            }
            else if (this.autoClearSearchValue) {
                this.clearInput();
            }
        }
    };
    /**
     * @return {?}
     */
    CmacsSelectService.prototype.updateListOfCachedOption = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isSingleMode) {
            /** @type {?} */
            var selectedOption = this.listOfTemplateOption.find((/**
             * @param {?} o
             * @return {?}
             */
            function (o) {
                return _this.compareWith(o.nzValue, _this.listOfSelectedValue[0]);
            }));
            if (!isNil(selectedOption)) {
                this.listOfCachedSelectedOption = [selectedOption];
            }
        }
        else {
            /** @type {?} */
            var listOfCachedSelectedOption_1 = [];
            this.listOfSelectedValue.forEach((/**
             * @param {?} v
             * @return {?}
             */
            function (v) {
                /** @type {?} */
                var listOfMixedOption = tslib_1.__spread(_this.listOfTagAndTemplateOption, _this.listOfCachedSelectedOption);
                /** @type {?} */
                var option = listOfMixedOption.find((/**
                 * @param {?} o
                 * @return {?}
                 */
                function (o) { return _this.compareWith(o.nzValue, v); }));
                if (option) {
                    listOfCachedSelectedOption_1.push(option);
                }
            }));
            this.listOfCachedSelectedOption = listOfCachedSelectedOption_1;
        }
    };
    /**
     * @return {?}
     */
    CmacsSelectService.prototype.updateListOfTagOption = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isTagsMode) {
            /** @type {?} */
            var listOfMissValue = this.listOfSelectedValue.filter((/**
             * @param {?} value
             * @return {?}
             */
            function (value) { return !_this.listOfTemplateOption.find((/**
             * @param {?} o
             * @return {?}
             */
            function (o) { return _this.compareWith(o.nzValue, value); })); }));
            this.listOfTagOption = listOfMissValue.map((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                /** @type {?} */
                var nzOptionComponent = new CmacsOptionComponent();
                nzOptionComponent.nzValue = value;
                nzOptionComponent.nzLabel = value;
                return nzOptionComponent;
            }));
            this.listOfTagAndTemplateOption = tslib_1.__spread(this.listOfTemplateOption.concat(this.listOfTagOption));
        }
        else {
            this.listOfTagAndTemplateOption = tslib_1.__spread(this.listOfTemplateOption);
        }
    };
    /**
     * @return {?}
     */
    CmacsSelectService.prototype.updateAddTagOption = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var isMatch = this.listOfTagAndTemplateOption.find((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.nzLabel === _this.searchValue; }));
        if (this.isTagsMode && this.searchValue && !isMatch) {
            /** @type {?} */
            var option = new CmacsOptionComponent();
            option.nzValue = this.searchValue;
            option.nzLabel = this.searchValue;
            this.addedTagOption = option;
            this.updateActivatedOption(option);
        }
        else {
            this.addedTagOption = null;
        }
    };
    /**
     * @return {?}
     */
    CmacsSelectService.prototype.updateListOfFilteredOption = /**
     * @return {?}
     */
    function () {
        this.updateAddTagOption();
        /** @type {?} */
        var listOfFilteredOption = new NzFilterOptionPipe().transform(this.listOfTagAndTemplateOption, this.searchValue, this.filterOption, this.serverSearch);
        this.listOfFilteredOption = this.addedTagOption
            ? tslib_1.__spread([this.addedTagOption], listOfFilteredOption) : tslib_1.__spread(listOfFilteredOption);
        this.isShowNotFound = !this.isTagsMode && !this.listOfFilteredOption.length;
    };
    /**
     * @return {?}
     */
    CmacsSelectService.prototype.clearInput = /**
     * @return {?}
     */
    function () {
        this.clearInput$.next();
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    CmacsSelectService.prototype.updateListOfSelectedValue = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    function (value, emit) {
        this.listOfSelectedValueWithEmit$.next({ value: value, emit: emit });
    };
    /**
     * @param {?} option
     * @return {?}
     */
    CmacsSelectService.prototype.updateActivatedOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.activatedOption$.next(option);
        this.activatedOption = option;
    };
    /**
     * @param {?} inputValue
     * @param {?} tokenSeparators
     * @return {?}
     */
    CmacsSelectService.prototype.tokenSeparate = /**
     * @param {?} inputValue
     * @param {?} tokenSeparators
     * @return {?}
     */
    function (inputValue, tokenSeparators) {
        // auto tokenSeparators
        if (inputValue &&
            inputValue.length &&
            tokenSeparators.length &&
            this.isMultipleOrTags &&
            this.includesSeparators(inputValue, tokenSeparators)) {
            /** @type {?} */
            var listOfLabel = this.splitBySeparators(inputValue, tokenSeparators);
            this.updateSelectedValueByLabelList(listOfLabel);
            this.clearInput();
        }
    };
    /**
     * @param {?} str
     * @param {?} separators
     * @return {?}
     */
    CmacsSelectService.prototype.includesSeparators = /**
     * @param {?} str
     * @param {?} separators
     * @return {?}
     */
    function (str, separators) {
        // tslint:disable-next-line:prefer-for-of
        for (var i = 0; i < separators.length; ++i) {
            if (str.lastIndexOf(separators[i]) > 0) {
                return true;
            }
        }
        return false;
    };
    /**
     * @param {?} str
     * @param {?} separators
     * @return {?}
     */
    CmacsSelectService.prototype.splitBySeparators = /**
     * @param {?} str
     * @param {?} separators
     * @return {?}
     */
    function (str, separators) {
        /** @type {?} */
        var reg = new RegExp("[" + separators.join() + "]");
        /** @type {?} */
        var array = ((/** @type {?} */ (str))).split(reg).filter((/**
         * @param {?} token
         * @return {?}
         */
        function (token) { return token; }));
        return Array.from(new Set(array));
    };
    /**
     * @return {?}
     */
    CmacsSelectService.prototype.resetActivatedOptionIfNeeded = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var resetActivatedOption = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var activatedOption = _this.listOfFilteredOption.find((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                return _this.compareWith(item.nzValue, _this.listOfSelectedValue[0]);
            }));
            _this.updateActivatedOption(activatedOption || null);
        });
        if (this.activatedOption) {
            if (!this.listOfFilteredOption.find((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return _this.compareWith(item.nzValue, (/** @type {?} */ (_this.activatedOption)).nzValue); })) ||
                !this.listOfSelectedValue.find((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return _this.compareWith(item, (/** @type {?} */ (_this.activatedOption)).nzValue); }))) {
                resetActivatedOption();
            }
        }
        else {
            resetActivatedOption();
        }
    };
    /**
     * @param {?} listOfNzOptionComponent
     * @param {?} listOfNzOptionGroupComponent
     * @return {?}
     */
    CmacsSelectService.prototype.updateTemplateOption = /**
     * @param {?} listOfNzOptionComponent
     * @param {?} listOfNzOptionGroupComponent
     * @return {?}
     */
    function (listOfNzOptionComponent, listOfNzOptionGroupComponent) {
        this.mapOfTemplateOption$.next({ listOfNzOptionComponent: listOfNzOptionComponent, listOfNzOptionGroupComponent: listOfNzOptionGroupComponent });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsSelectService.prototype.updateSearchValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.searchValueRaw$.next(value);
    };
    /**
     * @param {?} listOfLabel
     * @return {?}
     */
    CmacsSelectService.prototype.updateSelectedValueByLabelList = /**
     * @param {?} listOfLabel
     * @return {?}
     */
    function (listOfLabel) {
        var _this = this;
        /** @type {?} */
        var listOfSelectedValue = tslib_1.__spread(this.listOfSelectedValue);
        /** @type {?} */
        var listOfMatchOptionValue = this.listOfTagAndTemplateOption
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return listOfLabel.indexOf(item.nzLabel) !== -1; }))
            .map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.nzValue; }))
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return !isNotNil(_this.listOfSelectedValue.find((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return _this.compareWith(v, item); }))); }));
        if (this.isMultipleMode) {
            this.updateListOfSelectedValue(tslib_1.__spread(listOfSelectedValue, listOfMatchOptionValue), true);
        }
        else {
            /** @type {?} */
            var listOfUnMatchOptionValue = listOfLabel.filter((/**
             * @param {?} label
             * @return {?}
             */
            function (label) { return _this.listOfTagAndTemplateOption.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.nzLabel; })).indexOf(label) === -1; }));
            this.updateListOfSelectedValue(tslib_1.__spread(listOfSelectedValue, listOfMatchOptionValue, listOfUnMatchOptionValue), true);
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    CmacsSelectService.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        /** @type {?} */
        var keyCode = e.keyCode;
        /** @type {?} */
        var eventTarget = (/** @type {?} */ (e.target));
        /** @type {?} */
        var listOfFilteredOptionWithoutDisabled = this.listOfFilteredOption.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return !item.nzDisabled; }));
        /** @type {?} */
        var activatedIndex = listOfFilteredOptionWithoutDisabled.findIndex((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item === _this.activatedOption; }));
        switch (keyCode) {
            case UP_ARROW:
                e.preventDefault();
                /** @type {?} */
                var preIndex = activatedIndex > 0 ? activatedIndex - 1 : listOfFilteredOptionWithoutDisabled.length - 1;
                this.updateActivatedOption(listOfFilteredOptionWithoutDisabled[preIndex]);
                break;
            case DOWN_ARROW:
                e.preventDefault();
                /** @type {?} */
                var nextIndex = activatedIndex < listOfFilteredOptionWithoutDisabled.length - 1 ? activatedIndex + 1 : 0;
                this.updateActivatedOption(listOfFilteredOptionWithoutDisabled[nextIndex]);
                if (!this.disabled && !this.open) {
                    this.setOpenState(true);
                }
                break;
            case ENTER:
                e.preventDefault();
                if (this.open) {
                    if (this.activatedOption && !this.activatedOption.nzDisabled) {
                        this.clickOption(this.activatedOption);
                    }
                }
                else {
                    this.setOpenState(true);
                }
                break;
            case BACKSPACE:
                if (this.isMultipleOrTags && !eventTarget.value && this.listOfCachedSelectedOption.length) {
                    e.preventDefault();
                    this.removeValueFormSelected(this.listOfCachedSelectedOption[this.listOfCachedSelectedOption.length - 1]);
                }
                break;
            case SPACE:
                if (!this.disabled && !this.open) {
                    this.setOpenState(true);
                    e.preventDefault();
                }
                break;
            case TAB:
                this.setOpenState(false);
                break;
        }
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} option
     * @return {?}
     */
    CmacsSelectService.prototype.removeValueFormSelected = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        var _this = this;
        if (this.disabled || option.nzDisabled) {
            return;
        }
        /** @type {?} */
        var listOfSelectedValue = this.listOfSelectedValue.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return !_this.compareWith(item, option.nzValue); }));
        this.updateListOfSelectedValue(listOfSelectedValue, true);
        this.clearInput();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsSelectService.prototype.setOpenState = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.openRaw$.next(value);
        this.open = value;
    };
    /**
     * @return {?}
     */
    CmacsSelectService.prototype.check = /**
     * @return {?}
     */
    function () {
        this.checkRaw$.next();
    };
    Object.defineProperty(CmacsSelectService.prototype, "isSingleMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mode === 'default';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsSelectService.prototype, "isTagsMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mode === 'tags';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsSelectService.prototype, "isMultipleMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mode === 'multiple';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsSelectService.prototype, "isMultipleOrTags", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mode === 'tags' || this.mode === 'multiple';
        },
        enumerable: true,
        configurable: true
    });
    CmacsSelectService.decorators = [
        { type: Injectable }
    ];
    return CmacsSelectService;
}());
export { CmacsSelectService };
if (false) {
    /** @type {?} */
    CmacsSelectService.prototype.autoClearSearchValue;
    /** @type {?} */
    CmacsSelectService.prototype.serverSearch;
    /** @type {?} */
    CmacsSelectService.prototype.filterOption;
    /** @type {?} */
    CmacsSelectService.prototype.mode;
    /** @type {?} */
    CmacsSelectService.prototype.maxMultipleCount;
    /** @type {?} */
    CmacsSelectService.prototype.disabled;
    /** @type {?} */
    CmacsSelectService.prototype.compareWith;
    /**
     * @type {?}
     * @private
     */
    CmacsSelectService.prototype.listOfSelectedValueWithEmit$;
    /**
     * @type {?}
     * @private
     */
    CmacsSelectService.prototype.mapOfTemplateOption$;
    /**
     * @type {?}
     * @private
     */
    CmacsSelectService.prototype.searchValueRaw$;
    /**
     * @type {?}
     * @private
     */
    CmacsSelectService.prototype.listOfFilteredOption;
    /**
     * @type {?}
     * @private
     */
    CmacsSelectService.prototype.openRaw$;
    /**
     * @type {?}
     * @private
     */
    CmacsSelectService.prototype.checkRaw$;
    /**
     * @type {?}
     * @private
     */
    CmacsSelectService.prototype.open;
    /** @type {?} */
    CmacsSelectService.prototype.clearInput$;
    /** @type {?} */
    CmacsSelectService.prototype.searchValue;
    /** @type {?} */
    CmacsSelectService.prototype.isShowNotFound;
    /** @type {?} */
    CmacsSelectService.prototype.open$;
    /** @type {?} */
    CmacsSelectService.prototype.activatedOption;
    /** @type {?} */
    CmacsSelectService.prototype.activatedOption$;
    /** @type {?} */
    CmacsSelectService.prototype.listOfSelectedValue$;
    /** @type {?} */
    CmacsSelectService.prototype.modelChange$;
    /** @type {?} */
    CmacsSelectService.prototype.searchValue$;
    /** @type {?} */
    CmacsSelectService.prototype.listOfSelectedValue;
    /** @type {?} */
    CmacsSelectService.prototype.listOfTemplateOption;
    /** @type {?} */
    CmacsSelectService.prototype.listOfTagOption;
    /** @type {?} */
    CmacsSelectService.prototype.listOfTagAndTemplateOption;
    /** @type {?} */
    CmacsSelectService.prototype.listOfNzOptionComponent;
    /** @type {?} */
    CmacsSelectService.prototype.listOfNzOptionGroupComponent;
    /** @type {?} */
    CmacsSelectService.prototype.addedTagOption;
    /** @type {?} */
    CmacsSelectService.prototype.listOfCachedSelectedOption;
    /** @type {?} */
    CmacsSelectService.prototype.valueOrOption$;
    /** @type {?} */
    CmacsSelectService.prototype.check$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2VsZWN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXNlbGVjdC9jbWFjcy1zZWxlY3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckYsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdyRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQWlCLE1BQU0scUJBQXFCLENBQUM7QUFFN0Y7SUFBQTtRQUFBLGlCQTJYQzs7UUF4WEMseUJBQW9CLEdBQUcsSUFBSSxDQUFDO1FBQzVCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLGlCQUFZLEdBQWtCLG1CQUFtQixDQUFDO1FBQ2xELFNBQUksR0FBb0MsU0FBUyxDQUFDO1FBQ2xELHFCQUFnQixHQUFHLFFBQVEsQ0FBQztRQUM1QixhQUFRLEdBQUcsS0FBSyxDQUFDOztRQUVqQixnQkFBVzs7Ozs7UUFBRyxVQUFDLEVBQU8sRUFBRSxFQUFPLElBQUssT0FBQSxFQUFF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QUFLLFVBQVUsQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGdEQUFnQjs7OztRQUFwQjtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxVQUFVLENBQUM7UUFDMUQsQ0FBQzs7O09BQUE7O2dCQTFYRixVQUFVOztJQTJYWCx5QkFBQztDQUFBLEFBM1hELElBMlhDO1NBMVhZLGtCQUFrQjs7O0lBRTdCLGtEQUE0Qjs7SUFDNUIsMENBQXFCOztJQUNyQiwwQ0FBa0Q7O0lBQ2xELGtDQUFrRDs7SUFDbEQsOENBQTRCOztJQUM1QixzQ0FBaUI7O0lBRWpCLHlDQUE4Qzs7Ozs7SUFHOUMsMERBR0c7Ozs7O0lBRUgsa0RBTUc7Ozs7O0lBRUgsNkNBQTBEOzs7OztJQUMxRCxrREFBMEQ7Ozs7O0lBQzFELHNDQUEwQzs7Ozs7SUFDMUMsdUNBQWtDOzs7OztJQUNsQyxrQ0FBcUI7O0lBQ3JCLHlDQUFxQzs7SUFDckMseUNBQWlCOztJQUNqQiw0Q0FBdUI7O0lBRXZCLG1DQUlFOztJQUNGLDZDQUE2Qzs7SUFDN0MsOENBQXFFOztJQUNyRSxrREFBdUY7O0lBQ3ZGLDBDQWNFOztJQUNGLDBDQVdFOztJQUVGLGlEQUFnQzs7SUFFaEMsa0RBQWtEOztJQUVsRCw2Q0FBNkM7O0lBRTdDLHdEQUF3RDs7SUFFeEQscURBQXFEOztJQUNyRCwwREFBK0Q7O0lBRS9ELDRDQUE0Qzs7SUFFNUMsd0RBQXdEOztJQUV4RCw0Q0FpQkU7O0lBQ0Ysb0NBT2dCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBCQUNLU1BBQ0UsIERPV05fQVJST1csIEVOVEVSLCBTUEFDRSwgVEFCLCBVUF9BUlJPVyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgbWVyZ2UsIEJlaGF2aW9yU3ViamVjdCwgUmVwbGF5U3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAsIHNoYXJlLCBza2lwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBpc05pbCwgaXNOb3ROaWwgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ21hY3NPcHRpb25Hcm91cENvbXBvbmVudCB9IGZyb20gJy4vY21hY3Mtb3B0aW9uLWdyb3VwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENtYWNzT3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jbWFjcy1vcHRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgZGVmYXVsdEZpbHRlck9wdGlvbiwgTnpGaWx0ZXJPcHRpb25QaXBlLCBURmlsdGVyT3B0aW9uIH0gZnJvbSAnLi9jbWFjcy1vcHRpb24ucGlwZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1NlbGVjdFNlcnZpY2Uge1xyXG4gIC8vIElucHV0IHBhcmFtc1xyXG4gIGF1dG9DbGVhclNlYXJjaFZhbHVlID0gdHJ1ZTtcclxuICBzZXJ2ZXJTZWFyY2ggPSBmYWxzZTtcclxuICBmaWx0ZXJPcHRpb246IFRGaWx0ZXJPcHRpb24gPSBkZWZhdWx0RmlsdGVyT3B0aW9uO1xyXG4gIG1vZGU6ICdkZWZhdWx0JyB8ICdtdWx0aXBsZScgfCAndGFncycgPSAnZGVmYXVsdCc7XHJcbiAgbWF4TXVsdGlwbGVDb3VudCA9IEluZmluaXR5O1xyXG4gIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGNvbXBhcmVXaXRoID0gKG8xOiBhbnksIG8yOiBhbnkpID0+IG8xID09PSBvMjtcclxuICAvLyBzZWxlY3RlZFZhbHVlQ2hhbmdlZCBzaG91bGQgZW1pdCBuZ01vZGVsQ2hhbmdlIG9yIG5vdFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBwcml2YXRlIGxpc3RPZlNlbGVjdGVkVmFsdWVXaXRoRW1pdCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHsgdmFsdWU6IGFueVtdOyBlbWl0OiBib29sZWFuIH0+KHtcclxuICAgIHZhbHVlOiBbXSxcclxuICAgIGVtaXQ6IGZhbHNlXHJcbiAgfSk7XHJcbiAgLy8gQ29udGVudENoaWxkcmVuIENoYW5nZVxyXG4gIHByaXZhdGUgbWFwT2ZUZW1wbGF0ZU9wdGlvbiQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHtcclxuICAgIGxpc3RPZk56T3B0aW9uQ29tcG9uZW50OiBDbWFjc09wdGlvbkNvbXBvbmVudFtdO1xyXG4gICAgbGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudDogQ21hY3NPcHRpb25Hcm91cENvbXBvbmVudFtdO1xyXG4gIH0+KHtcclxuICAgIGxpc3RPZk56T3B0aW9uQ29tcG9uZW50OiBbXSxcclxuICAgIGxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQ6IFtdXHJcbiAgfSk7XHJcbiAgLy8gc2VhcmNoVmFsdWUgQ2hhbmdlXHJcbiAgcHJpdmF0ZSBzZWFyY2hWYWx1ZVJhdyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4oJycpO1xyXG4gIHByaXZhdGUgbGlzdE9mRmlsdGVyZWRPcHRpb246IENtYWNzT3B0aW9uQ29tcG9uZW50W10gPSBbXTtcclxuICBwcml2YXRlIG9wZW5SYXckID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuICBwcml2YXRlIGNoZWNrUmF3JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSBvcGVuID0gZmFsc2U7XHJcbiAgY2xlYXJJbnB1dCQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG4gIHNlYXJjaFZhbHVlID0gJyc7XHJcbiAgaXNTaG93Tm90Rm91bmQgPSBmYWxzZTtcclxuICAvLyBvcGVuXHJcbiAgb3BlbiQgPSB0aGlzLm9wZW5SYXckLnBpcGUoXHJcbiAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxyXG4gICAgc2hhcmUoKSxcclxuICAgIHRhcCgoKSA9PiB0aGlzLmNsZWFySW5wdXQoKSlcclxuICApO1xyXG4gIGFjdGl2YXRlZE9wdGlvbjogQ21hY3NPcHRpb25Db21wb25lbnQgfCBudWxsO1xyXG4gIGFjdGl2YXRlZE9wdGlvbiQgPSBuZXcgUmVwbGF5U3ViamVjdDxDbWFjc09wdGlvbkNvbXBvbmVudCB8IG51bGw+KDEpO1xyXG4gIGxpc3RPZlNlbGVjdGVkVmFsdWUkID0gdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlV2l0aEVtaXQkLnBpcGUobWFwKGRhdGEgPT4gZGF0YS52YWx1ZSkpO1xyXG4gIG1vZGVsQ2hhbmdlJCA9IHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZVdpdGhFbWl0JC5waXBlKFxyXG4gICAgZmlsdGVyKGl0ZW0gPT4gaXRlbS5lbWl0KSxcclxuICAgIG1hcChkYXRhID0+IHtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWRMaXN0ID0gZGF0YS52YWx1ZTtcclxuICAgICAgbGV0IG1vZGVsVmFsdWU6IGFueVtdIHwgbnVsbCA9IG51bGw7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcbiAgICAgIGlmICh0aGlzLmlzU2luZ2xlTW9kZSkge1xyXG4gICAgICAgIGlmIChzZWxlY3RlZExpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICBtb2RlbFZhbHVlID0gc2VsZWN0ZWRMaXN0WzBdO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtb2RlbFZhbHVlID0gc2VsZWN0ZWRMaXN0O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBtb2RlbFZhbHVlO1xyXG4gICAgfSlcclxuICApO1xyXG4gIHNlYXJjaFZhbHVlJCA9IHRoaXMuc2VhcmNoVmFsdWVSYXckLnBpcGUoXHJcbiAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxyXG4gICAgc2tpcCgxKSxcclxuICAgIHNoYXJlKCksXHJcbiAgICB0YXAodmFsdWUgPT4ge1xyXG4gICAgICB0aGlzLnNlYXJjaFZhbHVlID0gdmFsdWU7XHJcbiAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlQWN0aXZhdGVkT3B0aW9uKHRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb25bMF0pO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudXBkYXRlTGlzdE9mRmlsdGVyZWRPcHRpb24oKTtcclxuICAgIH0pXHJcbiAgKTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgbGlzdE9mU2VsZWN0ZWRWYWx1ZTogYW55W10gPSBbXTtcclxuICAvLyBmbGF0IFZpZXdDaGlsZHJlblxyXG4gIGxpc3RPZlRlbXBsYXRlT3B0aW9uOiBDbWFjc09wdGlvbkNvbXBvbmVudFtdID0gW107XHJcbiAgLy8gdGFnIG9wdGlvblxyXG4gIGxpc3RPZlRhZ09wdGlvbjogQ21hY3NPcHRpb25Db21wb25lbnRbXSA9IFtdO1xyXG4gIC8vIHRhZyBvcHRpb24gY29uY2F0IHRlbXBsYXRlIG9wdGlvblxyXG4gIGxpc3RPZlRhZ0FuZFRlbXBsYXRlT3B0aW9uOiBDbWFjc09wdGlvbkNvbXBvbmVudFtdID0gW107XHJcbiAgLy8gVmlld0NoaWxkcmVuXHJcbiAgbGlzdE9mTnpPcHRpb25Db21wb25lbnQ6IENtYWNzT3B0aW9uQ29tcG9uZW50W10gPSBbXTtcclxuICBsaXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50OiBDbWFjc09wdGlvbkdyb3VwQ29tcG9uZW50W10gPSBbXTtcclxuICAvLyBjbGljayBvciBlbnRlciBhZGQgdGFnIG9wdGlvblxyXG4gIGFkZGVkVGFnT3B0aW9uOiBDbWFjc09wdGlvbkNvbXBvbmVudCB8IG51bGw7XHJcbiAgLy8gZGlzcGxheSBpbiB0b3AgY29udHJvbFxyXG4gIGxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uOiBDbWFjc09wdGlvbkNvbXBvbmVudFtdID0gW107XHJcbiAgLy8gc2VsZWN0ZWQgdmFsdWUgb3IgVmlld0NoaWxkcmVuIGNoYW5nZVxyXG4gIHZhbHVlT3JPcHRpb24kID0gY29tYmluZUxhdGVzdCh0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWUkLCB0aGlzLm1hcE9mVGVtcGxhdGVPcHRpb24kKS5waXBlKFxyXG4gICAgdGFwKGRhdGEgPT4ge1xyXG4gICAgICB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWUgPSBkYXRhWzBdO1xyXG4gICAgICB0aGlzLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50ID0gZGF0YVsxXS5saXN0T2ZOek9wdGlvbkNvbXBvbmVudDtcclxuICAgICAgdGhpcy5saXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50ID0gZGF0YVsxXS5saXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50O1xyXG4gICAgICB0aGlzLmxpc3RPZlRlbXBsYXRlT3B0aW9uID0gdGhpcy5saXN0T2ZOek9wdGlvbkNvbXBvbmVudC5jb25jYXQoXHJcbiAgICAgICAgdGhpcy5saXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50LnJlZHVjZShcclxuICAgICAgICAgIChwcmUsIGN1cikgPT4gWy4uLnByZSwgLi4uY3VyLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50LnRvQXJyYXkoKV0sXHJcbiAgICAgICAgICBbXSBhcyBDbWFjc09wdGlvbkNvbXBvbmVudFtdXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnVwZGF0ZUxpc3RPZlRhZ09wdGlvbigpO1xyXG4gICAgICB0aGlzLnVwZGF0ZUxpc3RPZkZpbHRlcmVkT3B0aW9uKCk7XHJcbiAgICAgIHRoaXMucmVzZXRBY3RpdmF0ZWRPcHRpb25JZk5lZWRlZCgpO1xyXG4gICAgICB0aGlzLnVwZGF0ZUxpc3RPZkNhY2hlZE9wdGlvbigpO1xyXG4gICAgfSksXHJcbiAgICBzaGFyZSgpXHJcbiAgKTtcclxuICBjaGVjayQgPSBtZXJnZShcclxuICAgIHRoaXMuY2hlY2tSYXckLFxyXG4gICAgdGhpcy52YWx1ZU9yT3B0aW9uJCxcclxuICAgIHRoaXMuc2VhcmNoVmFsdWUkLFxyXG4gICAgdGhpcy5hY3RpdmF0ZWRPcHRpb24kLFxyXG4gICAgdGhpcy5vcGVuJCxcclxuICAgIHRoaXMubW9kZWxDaGFuZ2UkXHJcbiAgKS5waXBlKHNoYXJlKCkpO1xyXG5cclxuICBjbGlja09wdGlvbihvcHRpb246IENtYWNzT3B0aW9uQ29tcG9uZW50KTogdm9pZCB7XHJcbiAgICAvKiogdXBkYXRlIGxpc3RPZlNlbGVjdGVkT3B0aW9uIC0+IHVwZGF0ZSBsaXN0T2ZTZWxlY3RlZFZhbHVlIC0+IG5leHQgbGlzdE9mU2VsZWN0ZWRWYWx1ZSQgKiovXHJcbiAgICBpZiAoIW9wdGlvbi5uekRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlQWN0aXZhdGVkT3B0aW9uKG9wdGlvbik7XHJcbiAgICAgIGxldCBsaXN0T2ZTZWxlY3RlZFZhbHVlID0gWy4uLnRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZV07XHJcbiAgICAgIGlmICh0aGlzLmlzTXVsdGlwbGVPclRhZ3MpIHtcclxuICAgICAgICBjb25zdCB0YXJnZXRWYWx1ZSA9IGxpc3RPZlNlbGVjdGVkVmFsdWUuZmluZChvID0+IHRoaXMuY29tcGFyZVdpdGgobywgb3B0aW9uLm56VmFsdWUpKTtcclxuICAgICAgICBpZiAoaXNOb3ROaWwodGFyZ2V0VmFsdWUpKSB7XHJcbiAgICAgICAgICBsaXN0T2ZTZWxlY3RlZFZhbHVlLnNwbGljZShsaXN0T2ZTZWxlY3RlZFZhbHVlLmluZGV4T2YodGFyZ2V0VmFsdWUpLCAxKTtcclxuICAgICAgICAgIHRoaXMudXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZShsaXN0T2ZTZWxlY3RlZFZhbHVlLCB0cnVlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGxpc3RPZlNlbGVjdGVkVmFsdWUubGVuZ3RoIDwgdGhpcy5tYXhNdWx0aXBsZUNvdW50KSB7XHJcbiAgICAgICAgICBsaXN0T2ZTZWxlY3RlZFZhbHVlLnB1c2gob3B0aW9uLm56VmFsdWUpO1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVMaXN0T2ZTZWxlY3RlZFZhbHVlKGxpc3RPZlNlbGVjdGVkVmFsdWUsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmICghdGhpcy5jb21wYXJlV2l0aChsaXN0T2ZTZWxlY3RlZFZhbHVlWzBdLCBvcHRpb24ubnpWYWx1ZSkpIHtcclxuICAgICAgICBsaXN0T2ZTZWxlY3RlZFZhbHVlID0gW29wdGlvbi5uelZhbHVlXTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUobGlzdE9mU2VsZWN0ZWRWYWx1ZSwgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuaXNTaW5nbGVNb2RlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRPcGVuU3RhdGUoZmFsc2UpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYXV0b0NsZWFyU2VhcmNoVmFsdWUpIHtcclxuICAgICAgICB0aGlzLmNsZWFySW5wdXQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlTGlzdE9mQ2FjaGVkT3B0aW9uKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNTaW5nbGVNb2RlKSB7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gdGhpcy5saXN0T2ZUZW1wbGF0ZU9wdGlvbi5maW5kKG8gPT5cclxuICAgICAgICB0aGlzLmNvbXBhcmVXaXRoKG8ubnpWYWx1ZSwgdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlWzBdKVxyXG4gICAgICApO1xyXG4gICAgICBpZiAoIWlzTmlsKHNlbGVjdGVkT3B0aW9uKSkge1xyXG4gICAgICAgIHRoaXMubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24gPSBbc2VsZWN0ZWRPcHRpb25dO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBsaXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbjogQ21hY3NPcHRpb25Db21wb25lbnRbXSA9IFtdO1xyXG4gICAgICB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWUuZm9yRWFjaCh2ID0+IHtcclxuICAgICAgICBjb25zdCBsaXN0T2ZNaXhlZE9wdGlvbiA9IFsuLi50aGlzLmxpc3RPZlRhZ0FuZFRlbXBsYXRlT3B0aW9uLCAuLi50aGlzLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uXTtcclxuICAgICAgICBjb25zdCBvcHRpb24gPSBsaXN0T2ZNaXhlZE9wdGlvbi5maW5kKG8gPT4gdGhpcy5jb21wYXJlV2l0aChvLm56VmFsdWUsIHYpKTtcclxuICAgICAgICBpZiAob3B0aW9uKSB7XHJcbiAgICAgICAgICBsaXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbi5wdXNoKG9wdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbiA9IGxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlTGlzdE9mVGFnT3B0aW9uKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNUYWdzTW9kZSkge1xyXG4gICAgICBjb25zdCBsaXN0T2ZNaXNzVmFsdWUgPSB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWUuZmlsdGVyKFxyXG4gICAgICAgIHZhbHVlID0+ICF0aGlzLmxpc3RPZlRlbXBsYXRlT3B0aW9uLmZpbmQobyA9PiB0aGlzLmNvbXBhcmVXaXRoKG8ubnpWYWx1ZSwgdmFsdWUpKVxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmxpc3RPZlRhZ09wdGlvbiA9IGxpc3RPZk1pc3NWYWx1ZS5tYXAodmFsdWUgPT4ge1xyXG4gICAgICAgIGNvbnN0IG56T3B0aW9uQ29tcG9uZW50ID0gbmV3IENtYWNzT3B0aW9uQ29tcG9uZW50KCk7XHJcbiAgICAgICAgbnpPcHRpb25Db21wb25lbnQubnpWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIG56T3B0aW9uQ29tcG9uZW50Lm56TGFiZWwgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gbnpPcHRpb25Db21wb25lbnQ7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmxpc3RPZlRhZ0FuZFRlbXBsYXRlT3B0aW9uID0gWy4uLnRoaXMubGlzdE9mVGVtcGxhdGVPcHRpb24uY29uY2F0KHRoaXMubGlzdE9mVGFnT3B0aW9uKV07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmxpc3RPZlRhZ0FuZFRlbXBsYXRlT3B0aW9uID0gWy4uLnRoaXMubGlzdE9mVGVtcGxhdGVPcHRpb25dO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlQWRkVGFnT3B0aW9uKCk6IHZvaWQge1xyXG4gICAgY29uc3QgaXNNYXRjaCA9IHRoaXMubGlzdE9mVGFnQW5kVGVtcGxhdGVPcHRpb24uZmluZChpdGVtID0+IGl0ZW0ubnpMYWJlbCA9PT0gdGhpcy5zZWFyY2hWYWx1ZSk7XHJcbiAgICBpZiAodGhpcy5pc1RhZ3NNb2RlICYmIHRoaXMuc2VhcmNoVmFsdWUgJiYgIWlzTWF0Y2gpIHtcclxuICAgICAgY29uc3Qgb3B0aW9uID0gbmV3IENtYWNzT3B0aW9uQ29tcG9uZW50KCk7XHJcbiAgICAgIG9wdGlvbi5uelZhbHVlID0gdGhpcy5zZWFyY2hWYWx1ZTtcclxuICAgICAgb3B0aW9uLm56TGFiZWwgPSB0aGlzLnNlYXJjaFZhbHVlO1xyXG4gICAgICB0aGlzLmFkZGVkVGFnT3B0aW9uID0gb3B0aW9uO1xyXG4gICAgICB0aGlzLnVwZGF0ZUFjdGl2YXRlZE9wdGlvbihvcHRpb24pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hZGRlZFRhZ09wdGlvbiA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVMaXN0T2ZGaWx0ZXJlZE9wdGlvbigpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlQWRkVGFnT3B0aW9uKCk7XHJcbiAgICBjb25zdCBsaXN0T2ZGaWx0ZXJlZE9wdGlvbiA9IG5ldyBOekZpbHRlck9wdGlvblBpcGUoKS50cmFuc2Zvcm0oXHJcbiAgICAgIHRoaXMubGlzdE9mVGFnQW5kVGVtcGxhdGVPcHRpb24sXHJcbiAgICAgIHRoaXMuc2VhcmNoVmFsdWUsXHJcbiAgICAgIHRoaXMuZmlsdGVyT3B0aW9uLFxyXG4gICAgICB0aGlzLnNlcnZlclNlYXJjaFxyXG4gICAgKTtcclxuICAgIHRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb24gPSB0aGlzLmFkZGVkVGFnT3B0aW9uXHJcbiAgICAgID8gW3RoaXMuYWRkZWRUYWdPcHRpb24sIC4uLmxpc3RPZkZpbHRlcmVkT3B0aW9uXVxyXG4gICAgICA6IFsuLi5saXN0T2ZGaWx0ZXJlZE9wdGlvbl07XHJcbiAgICB0aGlzLmlzU2hvd05vdEZvdW5kID0gIXRoaXMuaXNUYWdzTW9kZSAmJiAhdGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvbi5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBjbGVhcklucHV0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGVhcklucHV0JC5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgdXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZSh2YWx1ZTogYW55W10sIGVtaXQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZVdpdGhFbWl0JC5uZXh0KHsgdmFsdWUsIGVtaXQgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVBY3RpdmF0ZWRPcHRpb24ob3B0aW9uOiBDbWFjc09wdGlvbkNvbXBvbmVudCB8IG51bGwpOiB2b2lkIHtcclxuICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9uJC5uZXh0KG9wdGlvbik7XHJcbiAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbiA9IG9wdGlvbjtcclxuICB9XHJcblxyXG4gIHRva2VuU2VwYXJhdGUoaW5wdXRWYWx1ZTogc3RyaW5nLCB0b2tlblNlcGFyYXRvcnM6IHN0cmluZ1tdKTogdm9pZCB7XHJcbiAgICAvLyBhdXRvIHRva2VuU2VwYXJhdG9yc1xyXG4gICAgaWYgKFxyXG4gICAgICBpbnB1dFZhbHVlICYmXHJcbiAgICAgIGlucHV0VmFsdWUubGVuZ3RoICYmXHJcbiAgICAgIHRva2VuU2VwYXJhdG9ycy5sZW5ndGggJiZcclxuICAgICAgdGhpcy5pc011bHRpcGxlT3JUYWdzICYmXHJcbiAgICAgIHRoaXMuaW5jbHVkZXNTZXBhcmF0b3JzKGlucHV0VmFsdWUsIHRva2VuU2VwYXJhdG9ycylcclxuICAgICkge1xyXG4gICAgICBjb25zdCBsaXN0T2ZMYWJlbCA9IHRoaXMuc3BsaXRCeVNlcGFyYXRvcnMoaW5wdXRWYWx1ZSwgdG9rZW5TZXBhcmF0b3JzKTtcclxuICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZFZhbHVlQnlMYWJlbExpc3QobGlzdE9mTGFiZWwpO1xyXG4gICAgICB0aGlzLmNsZWFySW5wdXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGluY2x1ZGVzU2VwYXJhdG9ycyhzdHI6IHN0cmluZyB8IHN0cmluZ1tdLCBzZXBhcmF0b3JzOiBzdHJpbmdbXSk6IGJvb2xlYW4ge1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByZWZlci1mb3Itb2ZcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VwYXJhdG9ycy5sZW5ndGg7ICsraSkge1xyXG4gICAgICBpZiAoc3RyLmxhc3RJbmRleE9mKHNlcGFyYXRvcnNbaV0pID4gMCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBzcGxpdEJ5U2VwYXJhdG9ycyhzdHI6IHN0cmluZyB8IHN0cmluZ1tdLCBzZXBhcmF0b3JzOiBzdHJpbmdbXSk6IHN0cmluZ1tdIHtcclxuICAgIGNvbnN0IHJlZyA9IG5ldyBSZWdFeHAoYFske3NlcGFyYXRvcnMuam9pbigpfV1gKTtcclxuICAgIGNvbnN0IGFycmF5ID0gKHN0ciBhcyBzdHJpbmcpLnNwbGl0KHJlZykuZmlsdGVyKHRva2VuID0+IHRva2VuKTtcclxuICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQoYXJyYXkpKTtcclxuICB9XHJcblxyXG4gIHJlc2V0QWN0aXZhdGVkT3B0aW9uSWZOZWVkZWQoKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXNldEFjdGl2YXRlZE9wdGlvbiA9ICgpID0+IHtcclxuICAgICAgY29uc3QgYWN0aXZhdGVkT3B0aW9uID0gdGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvbi5maW5kKGl0ZW0gPT5cclxuICAgICAgICB0aGlzLmNvbXBhcmVXaXRoKGl0ZW0ubnpWYWx1ZSwgdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlWzBdKVxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnVwZGF0ZUFjdGl2YXRlZE9wdGlvbihhY3RpdmF0ZWRPcHRpb24gfHwgbnVsbCk7XHJcbiAgICB9O1xyXG4gICAgaWYgKHRoaXMuYWN0aXZhdGVkT3B0aW9uKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICAhdGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvbi5maW5kKGl0ZW0gPT4gdGhpcy5jb21wYXJlV2l0aChpdGVtLm56VmFsdWUsIHRoaXMuYWN0aXZhdGVkT3B0aW9uIS5uelZhbHVlKSkgfHxcclxuICAgICAgICAhdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlLmZpbmQoaXRlbSA9PiB0aGlzLmNvbXBhcmVXaXRoKGl0ZW0sIHRoaXMuYWN0aXZhdGVkT3B0aW9uIS5uelZhbHVlKSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgcmVzZXRBY3RpdmF0ZWRPcHRpb24oKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzZXRBY3RpdmF0ZWRPcHRpb24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZVRlbXBsYXRlT3B0aW9uKFxyXG4gICAgbGlzdE9mTnpPcHRpb25Db21wb25lbnQ6IENtYWNzT3B0aW9uQ29tcG9uZW50W10sXHJcbiAgICBsaXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50OiBDbWFjc09wdGlvbkdyb3VwQ29tcG9uZW50W11cclxuICApOiB2b2lkIHtcclxuICAgIHRoaXMubWFwT2ZUZW1wbGF0ZU9wdGlvbiQubmV4dCh7IGxpc3RPZk56T3B0aW9uQ29tcG9uZW50LCBsaXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50IH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlU2VhcmNoVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWFyY2hWYWx1ZVJhdyQubmV4dCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTZWxlY3RlZFZhbHVlQnlMYWJlbExpc3QobGlzdE9mTGFiZWw6IHN0cmluZ1tdKTogdm9pZCB7XHJcbiAgICBjb25zdCBsaXN0T2ZTZWxlY3RlZFZhbHVlID0gWy4uLnRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZV07XHJcbiAgICBjb25zdCBsaXN0T2ZNYXRjaE9wdGlvblZhbHVlID0gdGhpcy5saXN0T2ZUYWdBbmRUZW1wbGF0ZU9wdGlvblxyXG4gICAgICAuZmlsdGVyKGl0ZW0gPT4gbGlzdE9mTGFiZWwuaW5kZXhPZihpdGVtLm56TGFiZWwpICE9PSAtMSlcclxuICAgICAgLm1hcChpdGVtID0+IGl0ZW0ubnpWYWx1ZSlcclxuICAgICAgLmZpbHRlcihpdGVtID0+ICFpc05vdE5pbCh0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWUuZmluZCh2ID0+IHRoaXMuY29tcGFyZVdpdGgodiwgaXRlbSkpKSk7XHJcbiAgICBpZiAodGhpcy5pc011bHRpcGxlTW9kZSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUoWy4uLmxpc3RPZlNlbGVjdGVkVmFsdWUsIC4uLmxpc3RPZk1hdGNoT3B0aW9uVmFsdWVdLCB0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGxpc3RPZlVuTWF0Y2hPcHRpb25WYWx1ZSA9IGxpc3RPZkxhYmVsLmZpbHRlcihcclxuICAgICAgICBsYWJlbCA9PiB0aGlzLmxpc3RPZlRhZ0FuZFRlbXBsYXRlT3B0aW9uLm1hcChpdGVtID0+IGl0ZW0ubnpMYWJlbCkuaW5kZXhPZihsYWJlbCkgPT09IC0xXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMudXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZShcclxuICAgICAgICBbLi4ubGlzdE9mU2VsZWN0ZWRWYWx1ZSwgLi4ubGlzdE9mTWF0Y2hPcHRpb25WYWx1ZSwgLi4ubGlzdE9mVW5NYXRjaE9wdGlvblZhbHVlXSxcclxuICAgICAgICB0cnVlXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbktleURvd24oZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgY29uc3Qga2V5Q29kZSA9IGUua2V5Q29kZTtcclxuICAgIGNvbnN0IGV2ZW50VGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IGxpc3RPZkZpbHRlcmVkT3B0aW9uV2l0aG91dERpc2FibGVkID0gdGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvbi5maWx0ZXIoaXRlbSA9PiAhaXRlbS5uekRpc2FibGVkKTtcclxuICAgIGNvbnN0IGFjdGl2YXRlZEluZGV4ID0gbGlzdE9mRmlsdGVyZWRPcHRpb25XaXRob3V0RGlzYWJsZWQuZmluZEluZGV4KGl0ZW0gPT4gaXRlbSA9PT0gdGhpcy5hY3RpdmF0ZWRPcHRpb24pO1xyXG4gICAgc3dpdGNoIChrZXlDb2RlKSB7XHJcbiAgICAgIGNhc2UgVVBfQVJST1c6XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHByZUluZGV4ID0gYWN0aXZhdGVkSW5kZXggPiAwID8gYWN0aXZhdGVkSW5kZXggLSAxIDogbGlzdE9mRmlsdGVyZWRPcHRpb25XaXRob3V0RGlzYWJsZWQubGVuZ3RoIC0gMTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2YXRlZE9wdGlvbihsaXN0T2ZGaWx0ZXJlZE9wdGlvbldpdGhvdXREaXNhYmxlZFtwcmVJbmRleF0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIERPV05fQVJST1c6XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IG5leHRJbmRleCA9IGFjdGl2YXRlZEluZGV4IDwgbGlzdE9mRmlsdGVyZWRPcHRpb25XaXRob3V0RGlzYWJsZWQubGVuZ3RoIC0gMSA/IGFjdGl2YXRlZEluZGV4ICsgMSA6IDA7XHJcbiAgICAgICAgdGhpcy51cGRhdGVBY3RpdmF0ZWRPcHRpb24obGlzdE9mRmlsdGVyZWRPcHRpb25XaXRob3V0RGlzYWJsZWRbbmV4dEluZGV4XSk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICF0aGlzLm9wZW4pIHtcclxuICAgICAgICAgIHRoaXMuc2V0T3BlblN0YXRlKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBFTlRFUjpcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKHRoaXMub3Blbikge1xyXG4gICAgICAgICAgaWYgKHRoaXMuYWN0aXZhdGVkT3B0aW9uICYmICF0aGlzLmFjdGl2YXRlZE9wdGlvbi5uekRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xpY2tPcHRpb24odGhpcy5hY3RpdmF0ZWRPcHRpb24pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNldE9wZW5TdGF0ZSh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQkFDS1NQQUNFOlxyXG4gICAgICAgIGlmICh0aGlzLmlzTXVsdGlwbGVPclRhZ3MgJiYgIWV2ZW50VGFyZ2V0LnZhbHVlICYmIHRoaXMubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24ubGVuZ3RoKSB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICB0aGlzLnJlbW92ZVZhbHVlRm9ybVNlbGVjdGVkKHRoaXMubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb25bdGhpcy5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbi5sZW5ndGggLSAxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFNQQUNFOlxyXG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5vcGVuKSB7XHJcbiAgICAgICAgICB0aGlzLnNldE9wZW5TdGF0ZSh0cnVlKTtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVEFCOlxyXG4gICAgICAgIHRoaXMuc2V0T3BlblN0YXRlKGZhbHNlKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICByZW1vdmVWYWx1ZUZvcm1TZWxlY3RlZChvcHRpb246IENtYWNzT3B0aW9uQ29tcG9uZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCBvcHRpb24ubnpEaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBsaXN0T2ZTZWxlY3RlZFZhbHVlID0gdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlLmZpbHRlcihpdGVtID0+ICF0aGlzLmNvbXBhcmVXaXRoKGl0ZW0sIG9wdGlvbi5uelZhbHVlKSk7XHJcbiAgICB0aGlzLnVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUobGlzdE9mU2VsZWN0ZWRWYWx1ZSwgdHJ1ZSk7XHJcbiAgICB0aGlzLmNsZWFySW5wdXQoKTtcclxuICB9XHJcblxyXG4gIHNldE9wZW5TdGF0ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5vcGVuUmF3JC5uZXh0KHZhbHVlKTtcclxuICAgIHRoaXMub3BlbiA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgY2hlY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoZWNrUmF3JC5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNTaW5nbGVNb2RlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubW9kZSA9PT0gJ2RlZmF1bHQnO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzVGFnc01vZGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5tb2RlID09PSAndGFncyc7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNNdWx0aXBsZU1vZGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5tb2RlID09PSAnbXVsdGlwbGUnO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzTXVsdGlwbGVPclRhZ3MoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5tb2RlID09PSAndGFncycgfHwgdGhpcy5tb2RlID09PSAnbXVsdGlwbGUnO1xyXG4gIH1cclxufVxyXG4iXX0=