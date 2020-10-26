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
        this.tagsOut = false;
        this.cmacsEditable = false;
        this.userDropdown = false;
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
        this.editedValueRaw$ = new BehaviorSubject('');
        this.listOfFilteredOption = [];
        this.openRaw$ = new Subject();
        this.checkRaw$ = new Subject();
        this.open = false;
        this.clearInput$ = new Subject();
        this.searchValue = '';
        this.editedValue = '';
        this.isShowNotFound = false;
        // open
        this.open$ = this.openRaw$.pipe(
        //distinctUntilChanged(),
        share(), tap((/**
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
        this.editedValue$ = this.editedValueRaw$.pipe(distinctUntilChanged(), skip(1), share(), tap((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.editedValue = value;
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
        this.check$ = merge(this.checkRaw$, this.valueOrOption$, this.searchValue$, this.editedValue$, this.activatedOption$, this.open$, this.modelChange$).pipe(share());
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
                var targetValue = !this.userDropdown ? listOfSelectedValue.find((/**
                 * @param {?} o
                 * @return {?}
                 */
                function (o) { return _this.compareWith(o, option.nzValue); })) : listOfSelectedValue.find((/**
                 * @param {?} o
                 * @return {?}
                 */
                function (o) { return _this.compareWith(o.value, option.nzValue); }));
                if (isNotNil(targetValue)) {
                    listOfSelectedValue.splice(listOfSelectedValue.indexOf(targetValue), 1);
                    this.updateListOfSelectedValue(listOfSelectedValue, true);
                }
                else if (listOfSelectedValue.length < this.maxMultipleCount) {
                    if (!this.userDropdown) {
                        listOfSelectedValue.push(option.nzValue);
                    }
                    else {
                        listOfSelectedValue.push(option.extendedData);
                    }
                    this.updateListOfSelectedValue(listOfSelectedValue, true);
                }
            }
            else if (!this.compareWith(listOfSelectedValue[0], option.nzValue)) {
                listOfSelectedValue = [option.nzValue];
                this.updateListOfSelectedValue(listOfSelectedValue, true);
            }
            if ((this.isSingleMode && !this.cmacsEditable && !this.userDropdown) || this.isTagsSingleSelectMode) {
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
     * @param {?} value
     * @return {?}
     */
    CmacsSelectService.prototype.updateEditedValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.editedValueRaw$.next(value);
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
                if ((this.isMultipleOrTags || this.isTagsSingleSelectMode) && !eventTarget.value && this.listOfCachedSelectedOption.length && !this.tagsOut) {
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
    CmacsSelectService.prototype.tagsOut;
    /** @type {?} */
    CmacsSelectService.prototype.cmacsEditable;
    /** @type {?} */
    CmacsSelectService.prototype.userDropdown;
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
    CmacsSelectService.prototype.editedValueRaw$;
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
    CmacsSelectService.prototype.editedValue;
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
    CmacsSelectService.prototype.editedValue$;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2VsZWN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXNlbGVjdC9jbWFjcy1zZWxlY3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckYsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdyRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQWlCLE1BQU0scUJBQXFCLENBQUM7QUFFN0Y7SUFBQTtRQUFBLGlCQXFaQzs7UUFsWkMseUJBQW9CLEdBQUcsSUFBSSxDQUFDO1FBQzVCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsaUJBQVksR0FBa0IsbUJBQW1CLENBQUM7UUFDbEQsU0FBSSxHQUF5RCxTQUFTLENBQUM7UUFDdkUscUJBQWdCLEdBQUcsUUFBUSxDQUFDO1FB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LG9DQVFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQkFDS1NQQUNFLCBET1dOX0FSUk9XLCBFTlRFUiwgU1BBQ0UsIFRBQiwgVVBfQVJST1cgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIG1lcmdlLCBCZWhhdmlvclN1YmplY3QsIFJlcGxheVN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwLCBzaGFyZSwgc2tpcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgaXNOaWwsIGlzTm90TmlsIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IENtYWNzT3B0aW9uR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL2NtYWNzLW9wdGlvbi1ncm91cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDbWFjc09wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY21hY3Mtb3B0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IGRlZmF1bHRGaWx0ZXJPcHRpb24sIE56RmlsdGVyT3B0aW9uUGlwZSwgVEZpbHRlck9wdGlvbiB9IGZyb20gJy4vY21hY3Mtb3B0aW9uLnBpcGUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ21hY3NTZWxlY3RTZXJ2aWNlIHtcclxuICAvLyBJbnB1dCBwYXJhbXNcclxuICBhdXRvQ2xlYXJTZWFyY2hWYWx1ZSA9IHRydWU7XHJcbiAgc2VydmVyU2VhcmNoID0gZmFsc2U7XHJcbiAgdGFnc091dCA9IGZhbHNlO1xyXG4gIGNtYWNzRWRpdGFibGUgPSBmYWxzZTtcclxuICB1c2VyRHJvcGRvd24gPSBmYWxzZTtcclxuICBmaWx0ZXJPcHRpb246IFRGaWx0ZXJPcHRpb24gPSBkZWZhdWx0RmlsdGVyT3B0aW9uO1xyXG4gIG1vZGU6ICdkZWZhdWx0JyB8ICdtdWx0aXBsZScgfCAndGFncycgfCAndGFnc1NpbmdsZVNlbGVjdCcgPSAnZGVmYXVsdCc7XHJcbiAgbWF4TXVsdGlwbGVDb3VudCA9IEluZmluaXR5O1xyXG4gIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGNvbXBhcmVXaXRoID0gKG8xOiBhbnksIG8yOiBhbnkpID0+IG8xID09PSBvMjtcclxuICAvLyBzZWxlY3RlZFZhbHVlQ2hhbmdlZCBzaG91bGQgZW1pdCBuZ01vZGVsQ2hhbmdlIG9yIG5vdFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBwcml2YXRlIGxpc3RPZlNlbGVjdGVkVmFsdWVXaXRoRW1pdCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHsgdmFsdWU6IGFueVtdOyBlbWl0OiBib29sZWFuIH0+KHtcclxuICAgIHZhbHVlOiBbXSxcclxuICAgIGVtaXQ6IGZhbHNlXHJcbiAgfSk7XHJcbiAgLy8gQ29udGVudENoaWxkcmVuIENoYW5nZVxyXG4gIHByaXZhdGUgbWFwT2ZUZW1wbGF0ZU9wdGlvbiQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHtcclxuICAgIGxpc3RPZk56T3B0aW9uQ29tcG9uZW50OiBDbWFjc09wdGlvbkNvbXBvbmVudFtdO1xyXG4gICAgbGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudDogQ21hY3NPcHRpb25Hcm91cENvbXBvbmVudFtdO1xyXG4gIH0+KHtcclxuICAgIGxpc3RPZk56T3B0aW9uQ29tcG9uZW50OiBbXSxcclxuICAgIGxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQ6IFtdXHJcbiAgfSk7XHJcbiAgLy8gc2VhcmNoVmFsdWUgQ2hhbmdlXHJcbiAgcHJpdmF0ZSBzZWFyY2hWYWx1ZVJhdyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4oJycpO1xyXG4gIHByaXZhdGUgZWRpdGVkVmFsdWVSYXckID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KCcnKTtcclxuICBwcml2YXRlIGxpc3RPZkZpbHRlcmVkT3B0aW9uOiBDbWFjc09wdGlvbkNvbXBvbmVudFtdID0gW107XHJcbiAgcHJpdmF0ZSBvcGVuUmF3JCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgcHJpdmF0ZSBjaGVja1JhdyQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgb3BlbiA9IGZhbHNlO1xyXG4gIGNsZWFySW5wdXQkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuICBzZWFyY2hWYWx1ZSA9ICcnO1xyXG4gIGVkaXRlZFZhbHVlID0gJyc7XHJcbiAgaXNTaG93Tm90Rm91bmQgPSBmYWxzZTtcclxuICAvLyBvcGVuXHJcbiAgb3BlbiQgPSB0aGlzLm9wZW5SYXckLnBpcGUoXHJcbiAgICAvL2Rpc3RpbmN0VW50aWxDaGFuZ2VkKCksXHJcbiAgICBzaGFyZSgpLFxyXG4gICAgdGFwKCgpID0+IHRoaXMuY2xlYXJJbnB1dCgpKVxyXG4gICk7XHJcbiAgYWN0aXZhdGVkT3B0aW9uOiBDbWFjc09wdGlvbkNvbXBvbmVudCB8IG51bGw7XHJcbiAgYWN0aXZhdGVkT3B0aW9uJCA9IG5ldyBSZXBsYXlTdWJqZWN0PENtYWNzT3B0aW9uQ29tcG9uZW50IHwgbnVsbD4oMSk7XHJcbiAgbGlzdE9mU2VsZWN0ZWRWYWx1ZSQgPSB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWVXaXRoRW1pdCQucGlwZShtYXAoZGF0YSA9PiBkYXRhLnZhbHVlKSk7XHJcbiAgbW9kZWxDaGFuZ2UkID0gdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlV2l0aEVtaXQkLnBpcGUoXHJcbiAgICBmaWx0ZXIoaXRlbSA9PiBpdGVtLmVtaXQpLFxyXG4gICAgbWFwKGRhdGEgPT4ge1xyXG4gICAgICBjb25zdCBzZWxlY3RlZExpc3QgPSBkYXRhLnZhbHVlO1xyXG4gICAgICBsZXQgbW9kZWxWYWx1ZTogYW55W10gfCBudWxsID0gbnVsbDsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuICAgICAgaWYgKHRoaXMuaXNTaW5nbGVNb2RlKSB7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgIG1vZGVsVmFsdWUgPSBzZWxlY3RlZExpc3RbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1vZGVsVmFsdWUgPSBzZWxlY3RlZExpc3Q7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG1vZGVsVmFsdWU7XHJcbiAgICB9KVxyXG4gICk7XHJcbiAgc2VhcmNoVmFsdWUkID0gdGhpcy5zZWFyY2hWYWx1ZVJhdyQucGlwZShcclxuICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXHJcbiAgICBza2lwKDEpLFxyXG4gICAgc2hhcmUoKSxcclxuICAgIHRhcCh2YWx1ZSA9PiB7XHJcbiAgICAgIHRoaXMuc2VhcmNoVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVBY3RpdmF0ZWRPcHRpb24odGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvblswXSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy51cGRhdGVMaXN0T2ZGaWx0ZXJlZE9wdGlvbigpO1xyXG4gICAgfSlcclxuICApO1xyXG4gIGVkaXRlZFZhbHVlJCA9IHRoaXMuZWRpdGVkVmFsdWVSYXckLnBpcGUoXHJcbiAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxyXG4gICAgc2tpcCgxKSxcclxuICAgIHNoYXJlKCksXHJcbiAgICB0YXAodmFsdWUgPT4ge1xyXG4gICAgICB0aGlzLmVkaXRlZFZhbHVlID0gdmFsdWU7XHJcbiAgICB9KVxyXG4gICk7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGxpc3RPZlNlbGVjdGVkVmFsdWU6IGFueVtdID0gW107XHJcbiAgLy8gZmxhdCBWaWV3Q2hpbGRyZW5cclxuICBsaXN0T2ZUZW1wbGF0ZU9wdGlvbjogQ21hY3NPcHRpb25Db21wb25lbnRbXSA9IFtdO1xyXG4gIC8vIHRhZyBvcHRpb25cclxuICBsaXN0T2ZUYWdPcHRpb246IENtYWNzT3B0aW9uQ29tcG9uZW50W10gPSBbXTtcclxuICAvLyB0YWcgb3B0aW9uIGNvbmNhdCB0ZW1wbGF0ZSBvcHRpb25cclxuICBsaXN0T2ZUYWdBbmRUZW1wbGF0ZU9wdGlvbjogQ21hY3NPcHRpb25Db21wb25lbnRbXSA9IFtdO1xyXG4gIC8vIFZpZXdDaGlsZHJlblxyXG4gIGxpc3RPZk56T3B0aW9uQ29tcG9uZW50OiBDbWFjc09wdGlvbkNvbXBvbmVudFtdID0gW107XHJcbiAgbGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudDogQ21hY3NPcHRpb25Hcm91cENvbXBvbmVudFtdID0gW107XHJcbiAgLy8gY2xpY2sgb3IgZW50ZXIgYWRkIHRhZyBvcHRpb25cclxuICBhZGRlZFRhZ09wdGlvbjogQ21hY3NPcHRpb25Db21wb25lbnQgfCBudWxsO1xyXG4gIC8vIGRpc3BsYXkgaW4gdG9wIGNvbnRyb2xcclxuICBsaXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbjogQ21hY3NPcHRpb25Db21wb25lbnRbXSA9IFtdO1xyXG4gIC8vIHNlbGVjdGVkIHZhbHVlIG9yIFZpZXdDaGlsZHJlbiBjaGFuZ2VcclxuICB2YWx1ZU9yT3B0aW9uJCA9IGNvbWJpbmVMYXRlc3QodGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlJCwgdGhpcy5tYXBPZlRlbXBsYXRlT3B0aW9uJCkucGlwZShcclxuICAgIHRhcChkYXRhID0+IHtcclxuICAgICAgdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlID0gZGF0YVswXTtcclxuICAgICAgdGhpcy5saXN0T2ZOek9wdGlvbkNvbXBvbmVudCA9IGRhdGFbMV0ubGlzdE9mTnpPcHRpb25Db21wb25lbnQ7XHJcbiAgICAgIHRoaXMubGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudCA9IGRhdGFbMV0ubGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudDtcclxuICAgICAgdGhpcy5saXN0T2ZUZW1wbGF0ZU9wdGlvbiA9IHRoaXMubGlzdE9mTnpPcHRpb25Db21wb25lbnQuY29uY2F0KFxyXG4gICAgICAgIHRoaXMubGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudC5yZWR1Y2UoXHJcbiAgICAgICAgICAocHJlLCBjdXIpID0+IFsuLi5wcmUsIC4uLmN1ci5saXN0T2ZOek9wdGlvbkNvbXBvbmVudC50b0FycmF5KCldLFxyXG4gICAgICAgICAgW10gYXMgQ21hY3NPcHRpb25Db21wb25lbnRbXVxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgICAgdGhpcy51cGRhdGVMaXN0T2ZUYWdPcHRpb24oKTtcclxuICAgICAgdGhpcy51cGRhdGVMaXN0T2ZGaWx0ZXJlZE9wdGlvbigpO1xyXG4gICAgICB0aGlzLnJlc2V0QWN0aXZhdGVkT3B0aW9uSWZOZWVkZWQoKTtcclxuICAgICAgdGhpcy51cGRhdGVMaXN0T2ZDYWNoZWRPcHRpb24oKTtcclxuICAgIH0pLFxyXG4gICAgc2hhcmUoKVxyXG4gICk7XHJcbiAgY2hlY2skID0gbWVyZ2UoXHJcbiAgICB0aGlzLmNoZWNrUmF3JCxcclxuICAgIHRoaXMudmFsdWVPck9wdGlvbiQsXHJcbiAgICB0aGlzLnNlYXJjaFZhbHVlJCxcclxuICAgIHRoaXMuZWRpdGVkVmFsdWUkLFxyXG4gICAgdGhpcy5hY3RpdmF0ZWRPcHRpb24kLFxyXG4gICAgdGhpcy5vcGVuJCxcclxuICAgIHRoaXMubW9kZWxDaGFuZ2UkXHJcbiAgKS5waXBlKHNoYXJlKCkpO1xyXG5cclxuICBjbGlja09wdGlvbihvcHRpb246IENtYWNzT3B0aW9uQ29tcG9uZW50KTogdm9pZCB7XHJcbiAgICAvKiogdXBkYXRlIGxpc3RPZlNlbGVjdGVkT3B0aW9uIC0+IHVwZGF0ZSBsaXN0T2ZTZWxlY3RlZFZhbHVlIC0+IG5leHQgbGlzdE9mU2VsZWN0ZWRWYWx1ZSQgKiovXHJcbiAgICBpZiAoIW9wdGlvbi5uekRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlQWN0aXZhdGVkT3B0aW9uKG9wdGlvbik7XHJcbiAgICAgIGxldCBsaXN0T2ZTZWxlY3RlZFZhbHVlID0gWy4uLnRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZV07XHJcbiAgICAgIGlmICh0aGlzLmlzTXVsdGlwbGVPclRhZ3MpIHtcclxuICAgICAgICBjb25zdCB0YXJnZXRWYWx1ZSA9ICF0aGlzLnVzZXJEcm9wZG93biA/IGxpc3RPZlNlbGVjdGVkVmFsdWUuZmluZChvID0+IHRoaXMuY29tcGFyZVdpdGgobywgb3B0aW9uLm56VmFsdWUpKSA6IGxpc3RPZlNlbGVjdGVkVmFsdWUuZmluZChvID0+IHRoaXMuY29tcGFyZVdpdGgoby52YWx1ZSwgb3B0aW9uLm56VmFsdWUpKTtcclxuICAgICAgICBpZiAoaXNOb3ROaWwodGFyZ2V0VmFsdWUpKSB7XHJcbiAgICAgICAgICBsaXN0T2ZTZWxlY3RlZFZhbHVlLnNwbGljZShsaXN0T2ZTZWxlY3RlZFZhbHVlLmluZGV4T2YodGFyZ2V0VmFsdWUpLCAxKTtcclxuICAgICAgICAgIHRoaXMudXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZShsaXN0T2ZTZWxlY3RlZFZhbHVlLCB0cnVlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGxpc3RPZlNlbGVjdGVkVmFsdWUubGVuZ3RoIDwgdGhpcy5tYXhNdWx0aXBsZUNvdW50KSB7XHJcbiAgICAgICAgICBpZiAoIXRoaXMudXNlckRyb3Bkb3duKSB7XHJcbiAgICAgICAgICAgIGxpc3RPZlNlbGVjdGVkVmFsdWUucHVzaChvcHRpb24ubnpWYWx1ZSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsaXN0T2ZTZWxlY3RlZFZhbHVlLnB1c2gob3B0aW9uLmV4dGVuZGVkRGF0YSk7XHJcbiAgICAgICAgICB9ICAgXHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUobGlzdE9mU2VsZWN0ZWRWYWx1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLmNvbXBhcmVXaXRoKGxpc3RPZlNlbGVjdGVkVmFsdWVbMF0sIG9wdGlvbi5uelZhbHVlKSkge1xyXG4gICAgICAgIGxpc3RPZlNlbGVjdGVkVmFsdWUgPSBbb3B0aW9uLm56VmFsdWVdO1xyXG4gICAgICAgIHRoaXMudXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZShsaXN0T2ZTZWxlY3RlZFZhbHVlLCB0cnVlKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoKHRoaXMuaXNTaW5nbGVNb2RlICYmICF0aGlzLmNtYWNzRWRpdGFibGUgJiYgIXRoaXMudXNlckRyb3Bkb3duKSB8fCB0aGlzLmlzVGFnc1NpbmdsZVNlbGVjdE1vZGUpIHtcclxuICAgICAgICB0aGlzLnNldE9wZW5TdGF0ZShmYWxzZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hdXRvQ2xlYXJTZWFyY2hWYWx1ZSkge1xyXG4gICAgICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVMaXN0T2ZDYWNoZWRPcHRpb24oKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc1NpbmdsZU1vZGUpIHtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSB0aGlzLmxpc3RPZlRlbXBsYXRlT3B0aW9uLmZpbmQobyA9PlxyXG4gICAgICAgIHRoaXMuY29tcGFyZVdpdGgoby5uelZhbHVlLCB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWVbMF0pXHJcbiAgICAgICk7XHJcbiAgICAgIGlmICghaXNOaWwoc2VsZWN0ZWRPcHRpb24pKSB7XHJcbiAgICAgICAgdGhpcy5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbiA9IFtzZWxlY3RlZE9wdGlvbl07XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uOiBDbWFjc09wdGlvbkNvbXBvbmVudFtdID0gW107XHJcbiAgICAgIHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZS5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxpc3RPZk1peGVkT3B0aW9uID0gWy4uLnRoaXMubGlzdE9mVGFnQW5kVGVtcGxhdGVPcHRpb24sIC4uLnRoaXMubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb25dO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGxpc3RPZk1peGVkT3B0aW9uLmZpbmQobyA9PiB0aGlzLmNvbXBhcmVXaXRoKG8ubnpWYWx1ZSwgdikpO1xyXG4gICAgICAgIGlmIChvcHRpb24pIHtcclxuICAgICAgICAgIGxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uLnB1c2gob3B0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uID0gbGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb247XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVMaXN0T2ZUYWdPcHRpb24oKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc1RhZ3NNb2RlIHx8IHRoaXMuaXNUYWdzU2luZ2xlU2VsZWN0TW9kZSkge1xyXG4gICAgICBjb25zdCBsaXN0T2ZNaXNzVmFsdWUgPSB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWUuZmlsdGVyKFxyXG4gICAgICAgIHZhbHVlID0+ICF0aGlzLmxpc3RPZlRlbXBsYXRlT3B0aW9uLmZpbmQobyA9PiB0aGlzLmNvbXBhcmVXaXRoKG8ubnpWYWx1ZSwgdmFsdWUpKVxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmxpc3RPZlRhZ09wdGlvbiA9IGxpc3RPZk1pc3NWYWx1ZS5tYXAodmFsdWUgPT4ge1xyXG4gICAgICAgIGNvbnN0IG56T3B0aW9uQ29tcG9uZW50ID0gbmV3IENtYWNzT3B0aW9uQ29tcG9uZW50KCk7XHJcbiAgICAgICAgbnpPcHRpb25Db21wb25lbnQubnpWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIG56T3B0aW9uQ29tcG9uZW50Lm56TGFiZWwgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gbnpPcHRpb25Db21wb25lbnQ7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmxpc3RPZlRhZ0FuZFRlbXBsYXRlT3B0aW9uID0gWy4uLnRoaXMubGlzdE9mVGVtcGxhdGVPcHRpb24uY29uY2F0KHRoaXMubGlzdE9mVGFnT3B0aW9uKV07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmxpc3RPZlRhZ0FuZFRlbXBsYXRlT3B0aW9uID0gWy4uLnRoaXMubGlzdE9mVGVtcGxhdGVPcHRpb25dO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlQWRkVGFnT3B0aW9uKCk6IHZvaWQge1xyXG4gICAgY29uc3QgaXNNYXRjaCA9IHRoaXMubGlzdE9mVGFnQW5kVGVtcGxhdGVPcHRpb24uZmluZChpdGVtID0+IGl0ZW0ubnpMYWJlbCA9PT0gdGhpcy5zZWFyY2hWYWx1ZSk7XHJcbiAgICBpZiAoKHRoaXMuaXNUYWdzTW9kZSB8fCB0aGlzLmlzVGFnc1NpbmdsZVNlbGVjdE1vZGUpICYmIHRoaXMuc2VhcmNoVmFsdWUgJiYgIWlzTWF0Y2gpIHtcclxuICAgICAgY29uc3Qgb3B0aW9uID0gbmV3IENtYWNzT3B0aW9uQ29tcG9uZW50KCk7XHJcbiAgICAgIG9wdGlvbi5uelZhbHVlID0gdGhpcy5zZWFyY2hWYWx1ZTtcclxuICAgICAgb3B0aW9uLm56TGFiZWwgPSB0aGlzLnNlYXJjaFZhbHVlO1xyXG4gICAgICB0aGlzLmFkZGVkVGFnT3B0aW9uID0gb3B0aW9uO1xyXG4gICAgICB0aGlzLnVwZGF0ZUFjdGl2YXRlZE9wdGlvbihvcHRpb24pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hZGRlZFRhZ09wdGlvbiA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVMaXN0T2ZGaWx0ZXJlZE9wdGlvbigpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlQWRkVGFnT3B0aW9uKCk7XHJcbiAgICBjb25zdCBsaXN0T2ZGaWx0ZXJlZE9wdGlvbiA9IG5ldyBOekZpbHRlck9wdGlvblBpcGUoKS50cmFuc2Zvcm0oXHJcbiAgICAgIHRoaXMubGlzdE9mVGFnQW5kVGVtcGxhdGVPcHRpb24sXHJcbiAgICAgIHRoaXMuc2VhcmNoVmFsdWUsXHJcbiAgICAgIHRoaXMuZmlsdGVyT3B0aW9uLFxyXG4gICAgICB0aGlzLnNlcnZlclNlYXJjaFxyXG4gICAgKTtcclxuICAgIHRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb24gPSB0aGlzLmFkZGVkVGFnT3B0aW9uXHJcbiAgICAgID8gW3RoaXMuYWRkZWRUYWdPcHRpb24sIC4uLmxpc3RPZkZpbHRlcmVkT3B0aW9uXVxyXG4gICAgICA6IFsuLi5saXN0T2ZGaWx0ZXJlZE9wdGlvbl07XHJcbiAgICB0aGlzLmlzU2hvd05vdEZvdW5kID0gIXRoaXMuaXNUYWdzTW9kZSAmJiAhdGhpcy5pc1RhZ3NTaW5nbGVTZWxlY3RNb2RlICYmICF0aGlzLmxpc3RPZkZpbHRlcmVkT3B0aW9uLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIGNsZWFySW5wdXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsZWFySW5wdXQkLm5leHQoKTtcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICB1cGRhdGVMaXN0T2ZTZWxlY3RlZFZhbHVlKHZhbHVlOiBhbnlbXSwgZW1pdDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlV2l0aEVtaXQkLm5leHQoeyB2YWx1ZSwgZW1pdCB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUFjdGl2YXRlZE9wdGlvbihvcHRpb246IENtYWNzT3B0aW9uQ29tcG9uZW50IHwgbnVsbCk6IHZvaWQge1xyXG4gICAgdGhpcy5hY3RpdmF0ZWRPcHRpb24kLm5leHQob3B0aW9uKTtcclxuICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9uID0gb3B0aW9uO1xyXG4gIH1cclxuXHJcbiAgdG9rZW5TZXBhcmF0ZShpbnB1dFZhbHVlOiBzdHJpbmcsIHRva2VuU2VwYXJhdG9yczogc3RyaW5nW10pOiB2b2lkIHtcclxuICAgIC8vIGF1dG8gdG9rZW5TZXBhcmF0b3JzXHJcbiAgICBpZiAoXHJcbiAgICAgIGlucHV0VmFsdWUgJiZcclxuICAgICAgaW5wdXRWYWx1ZS5sZW5ndGggJiZcclxuICAgICAgdG9rZW5TZXBhcmF0b3JzLmxlbmd0aCAmJlxyXG4gICAgICB0aGlzLmlzTXVsdGlwbGVPclRhZ3MgJiZcclxuICAgICAgdGhpcy5pbmNsdWRlc1NlcGFyYXRvcnMoaW5wdXRWYWx1ZSwgdG9rZW5TZXBhcmF0b3JzKVxyXG4gICAgKSB7XHJcbiAgICAgIGNvbnN0IGxpc3RPZkxhYmVsID0gdGhpcy5zcGxpdEJ5U2VwYXJhdG9ycyhpbnB1dFZhbHVlLCB0b2tlblNlcGFyYXRvcnMpO1xyXG4gICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkVmFsdWVCeUxhYmVsTGlzdChsaXN0T2ZMYWJlbCk7XHJcbiAgICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5jbHVkZXNTZXBhcmF0b3JzKHN0cjogc3RyaW5nIHwgc3RyaW5nW10sIHNlcGFyYXRvcnM6IHN0cmluZ1tdKTogYm9vbGVhbiB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJlZmVyLWZvci1vZlxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXBhcmF0b3JzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgIGlmIChzdHIubGFzdEluZGV4T2Yoc2VwYXJhdG9yc1tpXSkgPiAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHNwbGl0QnlTZXBhcmF0b3JzKHN0cjogc3RyaW5nIHwgc3RyaW5nW10sIHNlcGFyYXRvcnM6IHN0cmluZ1tdKTogc3RyaW5nW10ge1xyXG4gICAgY29uc3QgcmVnID0gbmV3IFJlZ0V4cChgWyR7c2VwYXJhdG9ycy5qb2luKCl9XWApO1xyXG4gICAgY29uc3QgYXJyYXkgPSAoc3RyIGFzIHN0cmluZykuc3BsaXQocmVnKS5maWx0ZXIodG9rZW4gPT4gdG9rZW4pO1xyXG4gICAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldChhcnJheSkpO1xyXG4gIH1cclxuXHJcbiAgcmVzZXRBY3RpdmF0ZWRPcHRpb25JZk5lZWRlZCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlc2V0QWN0aXZhdGVkT3B0aW9uID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBhY3RpdmF0ZWRPcHRpb24gPSB0aGlzLmxpc3RPZkZpbHRlcmVkT3B0aW9uLmZpbmQoaXRlbSA9PlxyXG4gICAgICAgIHRoaXMuY29tcGFyZVdpdGgoaXRlbS5uelZhbHVlLCB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWVbMF0pXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMudXBkYXRlQWN0aXZhdGVkT3B0aW9uKGFjdGl2YXRlZE9wdGlvbiB8fCBudWxsKTtcclxuICAgIH07XHJcbiAgICBpZiAodGhpcy5hY3RpdmF0ZWRPcHRpb24pIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgICF0aGlzLmxpc3RPZkZpbHRlcmVkT3B0aW9uLmZpbmQoaXRlbSA9PiB0aGlzLmNvbXBhcmVXaXRoKGl0ZW0ubnpWYWx1ZSwgdGhpcy5hY3RpdmF0ZWRPcHRpb24hLm56VmFsdWUpKSB8fFxyXG4gICAgICAgICF0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWUuZmluZChpdGVtID0+IHRoaXMuY29tcGFyZVdpdGgoaXRlbSwgdGhpcy5hY3RpdmF0ZWRPcHRpb24hLm56VmFsdWUpKVxyXG4gICAgICApIHtcclxuICAgICAgICByZXNldEFjdGl2YXRlZE9wdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXNldEFjdGl2YXRlZE9wdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlVGVtcGxhdGVPcHRpb24oXHJcbiAgICBsaXN0T2ZOek9wdGlvbkNvbXBvbmVudDogQ21hY3NPcHRpb25Db21wb25lbnRbXSxcclxuICAgIGxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQ6IENtYWNzT3B0aW9uR3JvdXBDb21wb25lbnRbXVxyXG4gICk6IHZvaWQge1xyXG4gICAgdGhpcy5tYXBPZlRlbXBsYXRlT3B0aW9uJC5uZXh0KHsgbGlzdE9mTnpPcHRpb25Db21wb25lbnQsIGxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTZWFyY2hWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlYXJjaFZhbHVlUmF3JC5uZXh0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUVkaXRlZFZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuZWRpdGVkVmFsdWVSYXckLm5leHQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlU2VsZWN0ZWRWYWx1ZUJ5TGFiZWxMaXN0KGxpc3RPZkxhYmVsOiBzdHJpbmdbXSk6IHZvaWQge1xyXG4gICAgY29uc3QgbGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IFsuLi50aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWVdO1xyXG4gICAgY29uc3QgbGlzdE9mTWF0Y2hPcHRpb25WYWx1ZSA9IHRoaXMubGlzdE9mVGFnQW5kVGVtcGxhdGVPcHRpb25cclxuICAgICAgLmZpbHRlcihpdGVtID0+IGxpc3RPZkxhYmVsLmluZGV4T2YoaXRlbS5uekxhYmVsKSAhPT0gLTEpXHJcbiAgICAgIC5tYXAoaXRlbSA9PiBpdGVtLm56VmFsdWUpXHJcbiAgICAgIC5maWx0ZXIoaXRlbSA9PiAhaXNOb3ROaWwodGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlLmZpbmQodiA9PiB0aGlzLmNvbXBhcmVXaXRoKHYsIGl0ZW0pKSkpO1xyXG4gICAgaWYgKHRoaXMuaXNNdWx0aXBsZU1vZGUpIHtcclxuICAgICAgdGhpcy51cGRhdGVMaXN0T2ZTZWxlY3RlZFZhbHVlKFsuLi5saXN0T2ZTZWxlY3RlZFZhbHVlLCAuLi5saXN0T2ZNYXRjaE9wdGlvblZhbHVlXSwgdHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBsaXN0T2ZVbk1hdGNoT3B0aW9uVmFsdWUgPSBsaXN0T2ZMYWJlbC5maWx0ZXIoXHJcbiAgICAgICAgbGFiZWwgPT4gdGhpcy5saXN0T2ZUYWdBbmRUZW1wbGF0ZU9wdGlvbi5tYXAoaXRlbSA9PiBpdGVtLm56TGFiZWwpLmluZGV4T2YobGFiZWwpID09PSAtMVxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUoXHJcbiAgICAgICAgWy4uLmxpc3RPZlNlbGVjdGVkVmFsdWUsIC4uLmxpc3RPZk1hdGNoT3B0aW9uVmFsdWUsIC4uLmxpc3RPZlVuTWF0Y2hPcHRpb25WYWx1ZV0sXHJcbiAgICAgICAgdHJ1ZVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25LZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IGtleUNvZGUgPSBlLmtleUNvZGU7XHJcbiAgICBjb25zdCBldmVudFRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBjb25zdCBsaXN0T2ZGaWx0ZXJlZE9wdGlvbldpdGhvdXREaXNhYmxlZCA9IHRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb24uZmlsdGVyKGl0ZW0gPT4gIWl0ZW0ubnpEaXNhYmxlZCk7XHJcbiAgICBjb25zdCBhY3RpdmF0ZWRJbmRleCA9IGxpc3RPZkZpbHRlcmVkT3B0aW9uV2l0aG91dERpc2FibGVkLmZpbmRJbmRleChpdGVtID0+IGl0ZW0gPT09IHRoaXMuYWN0aXZhdGVkT3B0aW9uKTtcclxuICAgIHN3aXRjaCAoa2V5Q29kZSkge1xyXG4gICAgICBjYXNlIFVQX0FSUk9XOlxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBwcmVJbmRleCA9IGFjdGl2YXRlZEluZGV4ID4gMCA/IGFjdGl2YXRlZEluZGV4IC0gMSA6IGxpc3RPZkZpbHRlcmVkT3B0aW9uV2l0aG91dERpc2FibGVkLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgdGhpcy51cGRhdGVBY3RpdmF0ZWRPcHRpb24obGlzdE9mRmlsdGVyZWRPcHRpb25XaXRob3V0RGlzYWJsZWRbcHJlSW5kZXhdKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBET1dOX0FSUk9XOlxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBuZXh0SW5kZXggPSBhY3RpdmF0ZWRJbmRleCA8IGxpc3RPZkZpbHRlcmVkT3B0aW9uV2l0aG91dERpc2FibGVkLmxlbmd0aCAtIDEgPyBhY3RpdmF0ZWRJbmRleCArIDEgOiAwO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQWN0aXZhdGVkT3B0aW9uKGxpc3RPZkZpbHRlcmVkT3B0aW9uV2l0aG91dERpc2FibGVkW25leHRJbmRleF0pO1xyXG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5vcGVuKSB7XHJcbiAgICAgICAgICB0aGlzLnNldE9wZW5TdGF0ZSh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRU5URVI6XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICh0aGlzLm9wZW4pIHtcclxuICAgICAgICAgIGlmICh0aGlzLmFjdGl2YXRlZE9wdGlvbiAmJiAhdGhpcy5hY3RpdmF0ZWRPcHRpb24ubnpEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNsaWNrT3B0aW9uKHRoaXMuYWN0aXZhdGVkT3B0aW9uKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zZXRPcGVuU3RhdGUodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEJBQ0tTUEFDRTpcclxuICAgICAgICBpZiAoKHRoaXMuaXNNdWx0aXBsZU9yVGFncyB8fCB0aGlzLmlzVGFnc1NpbmdsZVNlbGVjdE1vZGUpICYmICFldmVudFRhcmdldC52YWx1ZSAmJiB0aGlzLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uLmxlbmd0aCAmJiAhdGhpcy50YWdzT3V0KSB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICB0aGlzLnJlbW92ZVZhbHVlRm9ybVNlbGVjdGVkKHRoaXMubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb25bdGhpcy5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbi5sZW5ndGggLSAxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFNQQUNFOlxyXG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5vcGVuKSB7XHJcbiAgICAgICAgICB0aGlzLnNldE9wZW5TdGF0ZSh0cnVlKTtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVEFCOlxyXG4gICAgICAgIHRoaXMuc2V0T3BlblN0YXRlKGZhbHNlKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICByZW1vdmVWYWx1ZUZvcm1TZWxlY3RlZChvcHRpb246IENtYWNzT3B0aW9uQ29tcG9uZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCBvcHRpb24ubnpEaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBsaXN0T2ZTZWxlY3RlZFZhbHVlID0gdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlLmZpbHRlcihpdGVtID0+ICF0aGlzLmNvbXBhcmVXaXRoKGl0ZW0sIG9wdGlvbi5uelZhbHVlKSk7XHJcbiAgICB0aGlzLnVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUobGlzdE9mU2VsZWN0ZWRWYWx1ZSwgdHJ1ZSk7XHJcbiAgICB0aGlzLmNsZWFySW5wdXQoKTtcclxuICB9XHJcblxyXG4gIHNldE9wZW5TdGF0ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5vcGVuUmF3JC5uZXh0KHZhbHVlKTtcclxuICAgIHRoaXMub3BlbiA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgY2hlY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoZWNrUmF3JC5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNTaW5nbGVNb2RlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubW9kZSA9PT0gJ2RlZmF1bHQnO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzVGFnc01vZGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5tb2RlID09PSAndGFncyc7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNUYWdzU2luZ2xlU2VsZWN0TW9kZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm1vZGUgPT09ICd0YWdzU2luZ2xlU2VsZWN0JztcclxuICB9XHJcblxyXG4gIGdldCBpc011bHRpcGxlTW9kZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm1vZGUgPT09ICdtdWx0aXBsZSc7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNNdWx0aXBsZU9yVGFncygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm1vZGUgPT09ICd0YWdzJyB8fCB0aGlzLm1vZGUgPT09ICdtdWx0aXBsZSc7XHJcbiAgfVxyXG59XHJcbiJdfQ==