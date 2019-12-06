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
            if (this.isSingleMode || this.isTagsSingleSelectMode) {
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
        if (this.isTagsMode || this.isTagsSingleSelectMode) {
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
        if ((this.isTagsMode || this.isTagsSingleSelectMode) && this.searchValue && !isMatch) {
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
        this.isShowNotFound = !this.isTagsMode && !this.isTagsSingleSelectMode && !this.listOfFilteredOption.length;
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
    Object.defineProperty(CmacsSelectService.prototype, "isTagsSingleSelectMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mode === 'tagsSingleSelect';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2VsZWN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXNlbGVjdC9jbWFjcy1zZWxlY3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckYsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdyRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQWlCLE1BQU0scUJBQXFCLENBQUM7QUFFN0Y7SUFBQTtRQUFBLGlCQStYQzs7UUE1WEMseUJBQW9CLEdBQUcsSUFBSSxDQUFDO1FBQzVCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLGlCQUFZLEdBQWtCLG1CQUFtQixDQUFDO1FBQ2xELFNBQUksR0FBeUQsU0FBUyxDQUFDO1FBQ3ZFLHFCQUFnQixHQUFHLFFBQVEsQ0FBQztRQUM1QixhQUFRLEdBQUcsS0FBSyxDQUFDOztRQUVqQixnQkFBVzs7Ozs7UUFBRyxVQUFDLEVBQU8sRUFBRSxFQUFPLElBQUssT0FBQSxFQUFF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Y2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEJBQ0tTUEFDRSwgRE9XTl9BUlJPVywgRU5URVIsIFNQQUNFLCBUQUIsIFVQX0FSUk9XIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBtZXJnZSwgQmVoYXZpb3JTdWJqZWN0LCBSZXBsYXlTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG1hcCwgc2hhcmUsIHNraXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IGlzTmlsLCBpc05vdE5pbCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDbWFjc09wdGlvbkdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9jbWFjcy1vcHRpb24tZ3JvdXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ21hY3NPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL2NtYWNzLW9wdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBkZWZhdWx0RmlsdGVyT3B0aW9uLCBOekZpbHRlck9wdGlvblBpcGUsIFRGaWx0ZXJPcHRpb24gfSBmcm9tICcuL2NtYWNzLW9wdGlvbi5waXBlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENtYWNzU2VsZWN0U2VydmljZSB7XHJcbiAgLy8gSW5wdXQgcGFyYW1zXHJcbiAgYXV0b0NsZWFyU2VhcmNoVmFsdWUgPSB0cnVlO1xyXG4gIHNlcnZlclNlYXJjaCA9IGZhbHNlO1xyXG4gIGZpbHRlck9wdGlvbjogVEZpbHRlck9wdGlvbiA9IGRlZmF1bHRGaWx0ZXJPcHRpb247XHJcbiAgbW9kZTogJ2RlZmF1bHQnIHwgJ211bHRpcGxlJyB8ICd0YWdzJyB8ICd0YWdzU2luZ2xlU2VsZWN0JyA9ICdkZWZhdWx0JztcclxuICBtYXhNdWx0aXBsZUNvdW50ID0gSW5maW5pdHk7XHJcbiAgZGlzYWJsZWQgPSBmYWxzZTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgY29tcGFyZVdpdGggPSAobzE6IGFueSwgbzI6IGFueSkgPT4gbzEgPT09IG8yO1xyXG4gIC8vIHNlbGVjdGVkVmFsdWVDaGFuZ2VkIHNob3VsZCBlbWl0IG5nTW9kZWxDaGFuZ2Ugb3Igbm90XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHByaXZhdGUgbGlzdE9mU2VsZWN0ZWRWYWx1ZVdpdGhFbWl0JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8eyB2YWx1ZTogYW55W107IGVtaXQ6IGJvb2xlYW4gfT4oe1xyXG4gICAgdmFsdWU6IFtdLFxyXG4gICAgZW1pdDogZmFsc2VcclxuICB9KTtcclxuICAvLyBDb250ZW50Q2hpbGRyZW4gQ2hhbmdlXHJcbiAgcHJpdmF0ZSBtYXBPZlRlbXBsYXRlT3B0aW9uJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8e1xyXG4gICAgbGlzdE9mTnpPcHRpb25Db21wb25lbnQ6IENtYWNzT3B0aW9uQ29tcG9uZW50W107XHJcbiAgICBsaXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50OiBDbWFjc09wdGlvbkdyb3VwQ29tcG9uZW50W107XHJcbiAgfT4oe1xyXG4gICAgbGlzdE9mTnpPcHRpb25Db21wb25lbnQ6IFtdLFxyXG4gICAgbGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudDogW11cclxuICB9KTtcclxuICAvLyBzZWFyY2hWYWx1ZSBDaGFuZ2VcclxuICBwcml2YXRlIHNlYXJjaFZhbHVlUmF3JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPignJyk7XHJcbiAgcHJpdmF0ZSBsaXN0T2ZGaWx0ZXJlZE9wdGlvbjogQ21hY3NPcHRpb25Db21wb25lbnRbXSA9IFtdO1xyXG4gIHByaXZhdGUgb3BlblJhdyQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG4gIHByaXZhdGUgY2hlY2tSYXckID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIG9wZW4gPSBmYWxzZTtcclxuICBjbGVhcklucHV0JCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgc2VhcmNoVmFsdWUgPSAnJztcclxuICBpc1Nob3dOb3RGb3VuZCA9IGZhbHNlO1xyXG4gIC8vIG9wZW5cclxuICBvcGVuJCA9IHRoaXMub3BlblJhdyQucGlwZShcclxuICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXHJcbiAgICBzaGFyZSgpLFxyXG4gICAgdGFwKCgpID0+IHRoaXMuY2xlYXJJbnB1dCgpKVxyXG4gICk7XHJcbiAgYWN0aXZhdGVkT3B0aW9uOiBDbWFjc09wdGlvbkNvbXBvbmVudCB8IG51bGw7XHJcbiAgYWN0aXZhdGVkT3B0aW9uJCA9IG5ldyBSZXBsYXlTdWJqZWN0PENtYWNzT3B0aW9uQ29tcG9uZW50IHwgbnVsbD4oMSk7XHJcbiAgbGlzdE9mU2VsZWN0ZWRWYWx1ZSQgPSB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWVXaXRoRW1pdCQucGlwZShtYXAoZGF0YSA9PiBkYXRhLnZhbHVlKSk7XHJcbiAgbW9kZWxDaGFuZ2UkID0gdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlV2l0aEVtaXQkLnBpcGUoXHJcbiAgICBmaWx0ZXIoaXRlbSA9PiBpdGVtLmVtaXQpLFxyXG4gICAgbWFwKGRhdGEgPT4ge1xyXG4gICAgICBjb25zdCBzZWxlY3RlZExpc3QgPSBkYXRhLnZhbHVlO1xyXG4gICAgICBsZXQgbW9kZWxWYWx1ZTogYW55W10gfCBudWxsID0gbnVsbDsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuICAgICAgaWYgKHRoaXMuaXNTaW5nbGVNb2RlKSB7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgIG1vZGVsVmFsdWUgPSBzZWxlY3RlZExpc3RbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1vZGVsVmFsdWUgPSBzZWxlY3RlZExpc3Q7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG1vZGVsVmFsdWU7XHJcbiAgICB9KVxyXG4gICk7XHJcbiAgc2VhcmNoVmFsdWUkID0gdGhpcy5zZWFyY2hWYWx1ZVJhdyQucGlwZShcclxuICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXHJcbiAgICBza2lwKDEpLFxyXG4gICAgc2hhcmUoKSxcclxuICAgIHRhcCh2YWx1ZSA9PiB7XHJcbiAgICAgIHRoaXMuc2VhcmNoVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVBY3RpdmF0ZWRPcHRpb24odGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvblswXSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy51cGRhdGVMaXN0T2ZGaWx0ZXJlZE9wdGlvbigpO1xyXG4gICAgfSlcclxuICApO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBsaXN0T2ZTZWxlY3RlZFZhbHVlOiBhbnlbXSA9IFtdO1xyXG4gIC8vIGZsYXQgVmlld0NoaWxkcmVuXHJcbiAgbGlzdE9mVGVtcGxhdGVPcHRpb246IENtYWNzT3B0aW9uQ29tcG9uZW50W10gPSBbXTtcclxuICAvLyB0YWcgb3B0aW9uXHJcbiAgbGlzdE9mVGFnT3B0aW9uOiBDbWFjc09wdGlvbkNvbXBvbmVudFtdID0gW107XHJcbiAgLy8gdGFnIG9wdGlvbiBjb25jYXQgdGVtcGxhdGUgb3B0aW9uXHJcbiAgbGlzdE9mVGFnQW5kVGVtcGxhdGVPcHRpb246IENtYWNzT3B0aW9uQ29tcG9uZW50W10gPSBbXTtcclxuICAvLyBWaWV3Q2hpbGRyZW5cclxuICBsaXN0T2ZOek9wdGlvbkNvbXBvbmVudDogQ21hY3NPcHRpb25Db21wb25lbnRbXSA9IFtdO1xyXG4gIGxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQ6IENtYWNzT3B0aW9uR3JvdXBDb21wb25lbnRbXSA9IFtdO1xyXG4gIC8vIGNsaWNrIG9yIGVudGVyIGFkZCB0YWcgb3B0aW9uXHJcbiAgYWRkZWRUYWdPcHRpb246IENtYWNzT3B0aW9uQ29tcG9uZW50IHwgbnVsbDtcclxuICAvLyBkaXNwbGF5IGluIHRvcCBjb250cm9sXHJcbiAgbGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb246IENtYWNzT3B0aW9uQ29tcG9uZW50W10gPSBbXTtcclxuICAvLyBzZWxlY3RlZCB2YWx1ZSBvciBWaWV3Q2hpbGRyZW4gY2hhbmdlXHJcbiAgdmFsdWVPck9wdGlvbiQgPSBjb21iaW5lTGF0ZXN0KHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZSQsIHRoaXMubWFwT2ZUZW1wbGF0ZU9wdGlvbiQpLnBpcGUoXHJcbiAgICB0YXAoZGF0YSA9PiB7XHJcbiAgICAgIHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IGRhdGFbMF07XHJcbiAgICAgIHRoaXMubGlzdE9mTnpPcHRpb25Db21wb25lbnQgPSBkYXRhWzFdLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50O1xyXG4gICAgICB0aGlzLmxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQgPSBkYXRhWzFdLmxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQ7XHJcbiAgICAgIHRoaXMubGlzdE9mVGVtcGxhdGVPcHRpb24gPSB0aGlzLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50LmNvbmNhdChcclxuICAgICAgICB0aGlzLmxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQucmVkdWNlKFxyXG4gICAgICAgICAgKHByZSwgY3VyKSA9PiBbLi4ucHJlLCAuLi5jdXIubGlzdE9mTnpPcHRpb25Db21wb25lbnQudG9BcnJheSgpXSxcclxuICAgICAgICAgIFtdIGFzIENtYWNzT3B0aW9uQ29tcG9uZW50W11cclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMudXBkYXRlTGlzdE9mVGFnT3B0aW9uKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlTGlzdE9mRmlsdGVyZWRPcHRpb24oKTtcclxuICAgICAgdGhpcy5yZXNldEFjdGl2YXRlZE9wdGlvbklmTmVlZGVkKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlTGlzdE9mQ2FjaGVkT3B0aW9uKCk7XHJcbiAgICB9KSxcclxuICAgIHNoYXJlKClcclxuICApO1xyXG4gIGNoZWNrJCA9IG1lcmdlKFxyXG4gICAgdGhpcy5jaGVja1JhdyQsXHJcbiAgICB0aGlzLnZhbHVlT3JPcHRpb24kLFxyXG4gICAgdGhpcy5zZWFyY2hWYWx1ZSQsXHJcbiAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbiQsXHJcbiAgICB0aGlzLm9wZW4kLFxyXG4gICAgdGhpcy5tb2RlbENoYW5nZSRcclxuICApLnBpcGUoc2hhcmUoKSk7XHJcblxyXG4gIGNsaWNrT3B0aW9uKG9wdGlvbjogQ21hY3NPcHRpb25Db21wb25lbnQpOiB2b2lkIHtcclxuICAgIC8qKiB1cGRhdGUgbGlzdE9mU2VsZWN0ZWRPcHRpb24gLT4gdXBkYXRlIGxpc3RPZlNlbGVjdGVkVmFsdWUgLT4gbmV4dCBsaXN0T2ZTZWxlY3RlZFZhbHVlJCAqKi9cclxuICAgIGlmICghb3B0aW9uLm56RGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy51cGRhdGVBY3RpdmF0ZWRPcHRpb24ob3B0aW9uKTtcclxuICAgICAgbGV0IGxpc3RPZlNlbGVjdGVkVmFsdWUgPSBbLi4udGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlXTtcclxuICAgICAgaWYgKHRoaXMuaXNNdWx0aXBsZU9yVGFncykge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldFZhbHVlID0gbGlzdE9mU2VsZWN0ZWRWYWx1ZS5maW5kKG8gPT4gdGhpcy5jb21wYXJlV2l0aChvLCBvcHRpb24ubnpWYWx1ZSkpO1xyXG4gICAgICAgIGlmIChpc05vdE5pbCh0YXJnZXRWYWx1ZSkpIHtcclxuICAgICAgICAgIGxpc3RPZlNlbGVjdGVkVmFsdWUuc3BsaWNlKGxpc3RPZlNlbGVjdGVkVmFsdWUuaW5kZXhPZih0YXJnZXRWYWx1ZSksIDEpO1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVMaXN0T2ZTZWxlY3RlZFZhbHVlKGxpc3RPZlNlbGVjdGVkVmFsdWUsIHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobGlzdE9mU2VsZWN0ZWRWYWx1ZS5sZW5ndGggPCB0aGlzLm1heE11bHRpcGxlQ291bnQpIHtcclxuICAgICAgICAgIGxpc3RPZlNlbGVjdGVkVmFsdWUucHVzaChvcHRpb24ubnpWYWx1ZSk7XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUobGlzdE9mU2VsZWN0ZWRWYWx1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLmNvbXBhcmVXaXRoKGxpc3RPZlNlbGVjdGVkVmFsdWVbMF0sIG9wdGlvbi5uelZhbHVlKSkge1xyXG4gICAgICAgIGxpc3RPZlNlbGVjdGVkVmFsdWUgPSBbb3B0aW9uLm56VmFsdWVdO1xyXG4gICAgICAgIHRoaXMudXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZShsaXN0T2ZTZWxlY3RlZFZhbHVlLCB0cnVlKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5pc1NpbmdsZU1vZGUgfHwgdGhpcy5pc1RhZ3NTaW5nbGVTZWxlY3RNb2RlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRPcGVuU3RhdGUoZmFsc2UpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYXV0b0NsZWFyU2VhcmNoVmFsdWUpIHtcclxuICAgICAgICB0aGlzLmNsZWFySW5wdXQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlTGlzdE9mQ2FjaGVkT3B0aW9uKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNTaW5nbGVNb2RlKSB7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gdGhpcy5saXN0T2ZUZW1wbGF0ZU9wdGlvbi5maW5kKG8gPT5cclxuICAgICAgICB0aGlzLmNvbXBhcmVXaXRoKG8ubnpWYWx1ZSwgdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlWzBdKVxyXG4gICAgICApO1xyXG4gICAgICBpZiAoIWlzTmlsKHNlbGVjdGVkT3B0aW9uKSkge1xyXG4gICAgICAgIHRoaXMubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24gPSBbc2VsZWN0ZWRPcHRpb25dO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBsaXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbjogQ21hY3NPcHRpb25Db21wb25lbnRbXSA9IFtdO1xyXG4gICAgICB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWUuZm9yRWFjaCh2ID0+IHtcclxuICAgICAgICBjb25zdCBsaXN0T2ZNaXhlZE9wdGlvbiA9IFsuLi50aGlzLmxpc3RPZlRhZ0FuZFRlbXBsYXRlT3B0aW9uLCAuLi50aGlzLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uXTtcclxuICAgICAgICBjb25zdCBvcHRpb24gPSBsaXN0T2ZNaXhlZE9wdGlvbi5maW5kKG8gPT4gdGhpcy5jb21wYXJlV2l0aChvLm56VmFsdWUsIHYpKTtcclxuICAgICAgICBpZiAob3B0aW9uKSB7XHJcbiAgICAgICAgICBsaXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbi5wdXNoKG9wdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbiA9IGxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlTGlzdE9mVGFnT3B0aW9uKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNUYWdzTW9kZSB8fCB0aGlzLmlzVGFnc1NpbmdsZVNlbGVjdE1vZGUpIHtcclxuICAgICAgY29uc3QgbGlzdE9mTWlzc1ZhbHVlID0gdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlLmZpbHRlcihcclxuICAgICAgICB2YWx1ZSA9PiAhdGhpcy5saXN0T2ZUZW1wbGF0ZU9wdGlvbi5maW5kKG8gPT4gdGhpcy5jb21wYXJlV2l0aChvLm56VmFsdWUsIHZhbHVlKSlcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5saXN0T2ZUYWdPcHRpb24gPSBsaXN0T2ZNaXNzVmFsdWUubWFwKHZhbHVlID0+IHtcclxuICAgICAgICBjb25zdCBuek9wdGlvbkNvbXBvbmVudCA9IG5ldyBDbWFjc09wdGlvbkNvbXBvbmVudCgpO1xyXG4gICAgICAgIG56T3B0aW9uQ29tcG9uZW50Lm56VmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICBuek9wdGlvbkNvbXBvbmVudC5uekxhYmVsID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIG56T3B0aW9uQ29tcG9uZW50O1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5saXN0T2ZUYWdBbmRUZW1wbGF0ZU9wdGlvbiA9IFsuLi50aGlzLmxpc3RPZlRlbXBsYXRlT3B0aW9uLmNvbmNhdCh0aGlzLmxpc3RPZlRhZ09wdGlvbildO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5saXN0T2ZUYWdBbmRUZW1wbGF0ZU9wdGlvbiA9IFsuLi50aGlzLmxpc3RPZlRlbXBsYXRlT3B0aW9uXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZUFkZFRhZ09wdGlvbigpOiB2b2lkIHtcclxuICAgIGNvbnN0IGlzTWF0Y2ggPSB0aGlzLmxpc3RPZlRhZ0FuZFRlbXBsYXRlT3B0aW9uLmZpbmQoaXRlbSA9PiBpdGVtLm56TGFiZWwgPT09IHRoaXMuc2VhcmNoVmFsdWUpO1xyXG4gICAgaWYgKCh0aGlzLmlzVGFnc01vZGUgfHwgdGhpcy5pc1RhZ3NTaW5nbGVTZWxlY3RNb2RlKSAmJiB0aGlzLnNlYXJjaFZhbHVlICYmICFpc01hdGNoKSB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbiA9IG5ldyBDbWFjc09wdGlvbkNvbXBvbmVudCgpO1xyXG4gICAgICBvcHRpb24ubnpWYWx1ZSA9IHRoaXMuc2VhcmNoVmFsdWU7XHJcbiAgICAgIG9wdGlvbi5uekxhYmVsID0gdGhpcy5zZWFyY2hWYWx1ZTtcclxuICAgICAgdGhpcy5hZGRlZFRhZ09wdGlvbiA9IG9wdGlvbjtcclxuICAgICAgdGhpcy51cGRhdGVBY3RpdmF0ZWRPcHRpb24ob3B0aW9uKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWRkZWRUYWdPcHRpb24gPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlTGlzdE9mRmlsdGVyZWRPcHRpb24oKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZUFkZFRhZ09wdGlvbigpO1xyXG4gICAgY29uc3QgbGlzdE9mRmlsdGVyZWRPcHRpb24gPSBuZXcgTnpGaWx0ZXJPcHRpb25QaXBlKCkudHJhbnNmb3JtKFxyXG4gICAgICB0aGlzLmxpc3RPZlRhZ0FuZFRlbXBsYXRlT3B0aW9uLFxyXG4gICAgICB0aGlzLnNlYXJjaFZhbHVlLFxyXG4gICAgICB0aGlzLmZpbHRlck9wdGlvbixcclxuICAgICAgdGhpcy5zZXJ2ZXJTZWFyY2hcclxuICAgICk7XHJcbiAgICB0aGlzLmxpc3RPZkZpbHRlcmVkT3B0aW9uID0gdGhpcy5hZGRlZFRhZ09wdGlvblxyXG4gICAgICA/IFt0aGlzLmFkZGVkVGFnT3B0aW9uLCAuLi5saXN0T2ZGaWx0ZXJlZE9wdGlvbl1cclxuICAgICAgOiBbLi4ubGlzdE9mRmlsdGVyZWRPcHRpb25dO1xyXG4gICAgdGhpcy5pc1Nob3dOb3RGb3VuZCA9ICF0aGlzLmlzVGFnc01vZGUgJiYgIXRoaXMuaXNUYWdzU2luZ2xlU2VsZWN0TW9kZSAmJiAhdGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvbi5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBjbGVhcklucHV0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGVhcklucHV0JC5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgdXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZSh2YWx1ZTogYW55W10sIGVtaXQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZVdpdGhFbWl0JC5uZXh0KHsgdmFsdWUsIGVtaXQgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVBY3RpdmF0ZWRPcHRpb24ob3B0aW9uOiBDbWFjc09wdGlvbkNvbXBvbmVudCB8IG51bGwpOiB2b2lkIHtcclxuICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9uJC5uZXh0KG9wdGlvbik7XHJcbiAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbiA9IG9wdGlvbjtcclxuICB9XHJcblxyXG4gIHRva2VuU2VwYXJhdGUoaW5wdXRWYWx1ZTogc3RyaW5nLCB0b2tlblNlcGFyYXRvcnM6IHN0cmluZ1tdKTogdm9pZCB7XHJcbiAgICAvLyBhdXRvIHRva2VuU2VwYXJhdG9yc1xyXG4gICAgaWYgKFxyXG4gICAgICBpbnB1dFZhbHVlICYmXHJcbiAgICAgIGlucHV0VmFsdWUubGVuZ3RoICYmXHJcbiAgICAgIHRva2VuU2VwYXJhdG9ycy5sZW5ndGggJiZcclxuICAgICAgdGhpcy5pc011bHRpcGxlT3JUYWdzICYmXHJcbiAgICAgIHRoaXMuaW5jbHVkZXNTZXBhcmF0b3JzKGlucHV0VmFsdWUsIHRva2VuU2VwYXJhdG9ycylcclxuICAgICkge1xyXG4gICAgICBjb25zdCBsaXN0T2ZMYWJlbCA9IHRoaXMuc3BsaXRCeVNlcGFyYXRvcnMoaW5wdXRWYWx1ZSwgdG9rZW5TZXBhcmF0b3JzKTtcclxuICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZFZhbHVlQnlMYWJlbExpc3QobGlzdE9mTGFiZWwpO1xyXG4gICAgICB0aGlzLmNsZWFySW5wdXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGluY2x1ZGVzU2VwYXJhdG9ycyhzdHI6IHN0cmluZyB8IHN0cmluZ1tdLCBzZXBhcmF0b3JzOiBzdHJpbmdbXSk6IGJvb2xlYW4ge1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByZWZlci1mb3Itb2ZcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VwYXJhdG9ycy5sZW5ndGg7ICsraSkge1xyXG4gICAgICBpZiAoc3RyLmxhc3RJbmRleE9mKHNlcGFyYXRvcnNbaV0pID4gMCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBzcGxpdEJ5U2VwYXJhdG9ycyhzdHI6IHN0cmluZyB8IHN0cmluZ1tdLCBzZXBhcmF0b3JzOiBzdHJpbmdbXSk6IHN0cmluZ1tdIHtcclxuICAgIGNvbnN0IHJlZyA9IG5ldyBSZWdFeHAoYFske3NlcGFyYXRvcnMuam9pbigpfV1gKTtcclxuICAgIGNvbnN0IGFycmF5ID0gKHN0ciBhcyBzdHJpbmcpLnNwbGl0KHJlZykuZmlsdGVyKHRva2VuID0+IHRva2VuKTtcclxuICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQoYXJyYXkpKTtcclxuICB9XHJcblxyXG4gIHJlc2V0QWN0aXZhdGVkT3B0aW9uSWZOZWVkZWQoKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXNldEFjdGl2YXRlZE9wdGlvbiA9ICgpID0+IHtcclxuICAgICAgY29uc3QgYWN0aXZhdGVkT3B0aW9uID0gdGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvbi5maW5kKGl0ZW0gPT5cclxuICAgICAgICB0aGlzLmNvbXBhcmVXaXRoKGl0ZW0ubnpWYWx1ZSwgdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlWzBdKVxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnVwZGF0ZUFjdGl2YXRlZE9wdGlvbihhY3RpdmF0ZWRPcHRpb24gfHwgbnVsbCk7XHJcbiAgICB9O1xyXG4gICAgaWYgKHRoaXMuYWN0aXZhdGVkT3B0aW9uKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICAhdGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvbi5maW5kKGl0ZW0gPT4gdGhpcy5jb21wYXJlV2l0aChpdGVtLm56VmFsdWUsIHRoaXMuYWN0aXZhdGVkT3B0aW9uIS5uelZhbHVlKSkgfHxcclxuICAgICAgICAhdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlLmZpbmQoaXRlbSA9PiB0aGlzLmNvbXBhcmVXaXRoKGl0ZW0sIHRoaXMuYWN0aXZhdGVkT3B0aW9uIS5uelZhbHVlKSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgcmVzZXRBY3RpdmF0ZWRPcHRpb24oKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzZXRBY3RpdmF0ZWRPcHRpb24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZVRlbXBsYXRlT3B0aW9uKFxyXG4gICAgbGlzdE9mTnpPcHRpb25Db21wb25lbnQ6IENtYWNzT3B0aW9uQ29tcG9uZW50W10sXHJcbiAgICBsaXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50OiBDbWFjc09wdGlvbkdyb3VwQ29tcG9uZW50W11cclxuICApOiB2b2lkIHtcclxuICAgIHRoaXMubWFwT2ZUZW1wbGF0ZU9wdGlvbiQubmV4dCh7IGxpc3RPZk56T3B0aW9uQ29tcG9uZW50LCBsaXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50IH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlU2VhcmNoVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWFyY2hWYWx1ZVJhdyQubmV4dCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTZWxlY3RlZFZhbHVlQnlMYWJlbExpc3QobGlzdE9mTGFiZWw6IHN0cmluZ1tdKTogdm9pZCB7XHJcbiAgICBjb25zdCBsaXN0T2ZTZWxlY3RlZFZhbHVlID0gWy4uLnRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZV07XHJcbiAgICBjb25zdCBsaXN0T2ZNYXRjaE9wdGlvblZhbHVlID0gdGhpcy5saXN0T2ZUYWdBbmRUZW1wbGF0ZU9wdGlvblxyXG4gICAgICAuZmlsdGVyKGl0ZW0gPT4gbGlzdE9mTGFiZWwuaW5kZXhPZihpdGVtLm56TGFiZWwpICE9PSAtMSlcclxuICAgICAgLm1hcChpdGVtID0+IGl0ZW0ubnpWYWx1ZSlcclxuICAgICAgLmZpbHRlcihpdGVtID0+ICFpc05vdE5pbCh0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWUuZmluZCh2ID0+IHRoaXMuY29tcGFyZVdpdGgodiwgaXRlbSkpKSk7XHJcbiAgICBpZiAodGhpcy5pc011bHRpcGxlTW9kZSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUoWy4uLmxpc3RPZlNlbGVjdGVkVmFsdWUsIC4uLmxpc3RPZk1hdGNoT3B0aW9uVmFsdWVdLCB0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGxpc3RPZlVuTWF0Y2hPcHRpb25WYWx1ZSA9IGxpc3RPZkxhYmVsLmZpbHRlcihcclxuICAgICAgICBsYWJlbCA9PiB0aGlzLmxpc3RPZlRhZ0FuZFRlbXBsYXRlT3B0aW9uLm1hcChpdGVtID0+IGl0ZW0ubnpMYWJlbCkuaW5kZXhPZihsYWJlbCkgPT09IC0xXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMudXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZShcclxuICAgICAgICBbLi4ubGlzdE9mU2VsZWN0ZWRWYWx1ZSwgLi4ubGlzdE9mTWF0Y2hPcHRpb25WYWx1ZSwgLi4ubGlzdE9mVW5NYXRjaE9wdGlvblZhbHVlXSxcclxuICAgICAgICB0cnVlXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbktleURvd24oZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgY29uc3Qga2V5Q29kZSA9IGUua2V5Q29kZTtcclxuICAgIGNvbnN0IGV2ZW50VGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IGxpc3RPZkZpbHRlcmVkT3B0aW9uV2l0aG91dERpc2FibGVkID0gdGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvbi5maWx0ZXIoaXRlbSA9PiAhaXRlbS5uekRpc2FibGVkKTtcclxuICAgIGNvbnN0IGFjdGl2YXRlZEluZGV4ID0gbGlzdE9mRmlsdGVyZWRPcHRpb25XaXRob3V0RGlzYWJsZWQuZmluZEluZGV4KGl0ZW0gPT4gaXRlbSA9PT0gdGhpcy5hY3RpdmF0ZWRPcHRpb24pO1xyXG4gICAgc3dpdGNoIChrZXlDb2RlKSB7XHJcbiAgICAgIGNhc2UgVVBfQVJST1c6XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHByZUluZGV4ID0gYWN0aXZhdGVkSW5kZXggPiAwID8gYWN0aXZhdGVkSW5kZXggLSAxIDogbGlzdE9mRmlsdGVyZWRPcHRpb25XaXRob3V0RGlzYWJsZWQubGVuZ3RoIC0gMTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2YXRlZE9wdGlvbihsaXN0T2ZGaWx0ZXJlZE9wdGlvbldpdGhvdXREaXNhYmxlZFtwcmVJbmRleF0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIERPV05fQVJST1c6XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IG5leHRJbmRleCA9IGFjdGl2YXRlZEluZGV4IDwgbGlzdE9mRmlsdGVyZWRPcHRpb25XaXRob3V0RGlzYWJsZWQubGVuZ3RoIC0gMSA/IGFjdGl2YXRlZEluZGV4ICsgMSA6IDA7XHJcbiAgICAgICAgdGhpcy51cGRhdGVBY3RpdmF0ZWRPcHRpb24obGlzdE9mRmlsdGVyZWRPcHRpb25XaXRob3V0RGlzYWJsZWRbbmV4dEluZGV4XSk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICF0aGlzLm9wZW4pIHtcclxuICAgICAgICAgIHRoaXMuc2V0T3BlblN0YXRlKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBFTlRFUjpcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKHRoaXMub3Blbikge1xyXG4gICAgICAgICAgaWYgKHRoaXMuYWN0aXZhdGVkT3B0aW9uICYmICF0aGlzLmFjdGl2YXRlZE9wdGlvbi5uekRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xpY2tPcHRpb24odGhpcy5hY3RpdmF0ZWRPcHRpb24pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNldE9wZW5TdGF0ZSh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQkFDS1NQQUNFOlxyXG4gICAgICAgIGlmICh0aGlzLmlzTXVsdGlwbGVPclRhZ3MgJiYgIWV2ZW50VGFyZ2V0LnZhbHVlICYmIHRoaXMubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24ubGVuZ3RoKSB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICB0aGlzLnJlbW92ZVZhbHVlRm9ybVNlbGVjdGVkKHRoaXMubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb25bdGhpcy5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbi5sZW5ndGggLSAxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFNQQUNFOlxyXG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5vcGVuKSB7XHJcbiAgICAgICAgICB0aGlzLnNldE9wZW5TdGF0ZSh0cnVlKTtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVEFCOlxyXG4gICAgICAgIHRoaXMuc2V0T3BlblN0YXRlKGZhbHNlKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICByZW1vdmVWYWx1ZUZvcm1TZWxlY3RlZChvcHRpb246IENtYWNzT3B0aW9uQ29tcG9uZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCBvcHRpb24ubnpEaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBsaXN0T2ZTZWxlY3RlZFZhbHVlID0gdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlLmZpbHRlcihpdGVtID0+ICF0aGlzLmNvbXBhcmVXaXRoKGl0ZW0sIG9wdGlvbi5uelZhbHVlKSk7XHJcbiAgICB0aGlzLnVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUobGlzdE9mU2VsZWN0ZWRWYWx1ZSwgdHJ1ZSk7XHJcbiAgICB0aGlzLmNsZWFySW5wdXQoKTtcclxuICB9XHJcblxyXG4gIHNldE9wZW5TdGF0ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5vcGVuUmF3JC5uZXh0KHZhbHVlKTtcclxuICAgIHRoaXMub3BlbiA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgY2hlY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoZWNrUmF3JC5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNTaW5nbGVNb2RlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubW9kZSA9PT0gJ2RlZmF1bHQnO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzVGFnc01vZGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5tb2RlID09PSAndGFncyc7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNUYWdzU2luZ2xlU2VsZWN0TW9kZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm1vZGUgPT09ICd0YWdzU2luZ2xlU2VsZWN0JztcclxuICB9XHJcblxyXG4gIGdldCBpc011bHRpcGxlTW9kZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm1vZGUgPT09ICdtdWx0aXBsZSc7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNNdWx0aXBsZU9yVGFncygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm1vZGUgPT09ICd0YWdzJyB8fCB0aGlzLm1vZGUgPT09ICdtdWx0aXBsZSc7XHJcbiAgfVxyXG59XHJcbiJdfQ==