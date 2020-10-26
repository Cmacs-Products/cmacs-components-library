/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class CmacsSelectService {
    constructor() {
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
        (o1, o2) => o1 === o2);
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
        () => this.clearInput())));
        this.activatedOption$ = new ReplaySubject(1);
        this.listOfSelectedValue$ = this.listOfSelectedValueWithEmit$.pipe(map((/**
         * @param {?} data
         * @return {?}
         */
        data => data.value)));
        this.modelChange$ = this.listOfSelectedValueWithEmit$.pipe(filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.emit)), map((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            /** @type {?} */
            const selectedList = data.value;
            /** @type {?} */
            let modelValue = null;
            if (this.isSingleMode) {
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
        value => {
            this.searchValue = value;
            if (value) {
                this.updateActivatedOption(this.listOfFilteredOption[0]);
            }
            this.updateListOfFilteredOption();
        })));
        this.editedValue$ = this.editedValueRaw$.pipe(distinctUntilChanged(), skip(1), share(), tap((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            this.editedValue = value;
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
        data => {
            this.listOfSelectedValue = data[0];
            this.listOfNzOptionComponent = data[1].listOfNzOptionComponent;
            this.listOfNzOptionGroupComponent = data[1].listOfNzOptionGroupComponent;
            this.listOfTemplateOption = this.listOfNzOptionComponent.concat(this.listOfNzOptionGroupComponent.reduce((/**
             * @param {?} pre
             * @param {?} cur
             * @return {?}
             */
            (pre, cur) => [...pre, ...cur.listOfNzOptionComponent.toArray()]), (/** @type {?} */ ([]))));
            this.updateListOfTagOption();
            this.updateListOfFilteredOption();
            this.resetActivatedOptionIfNeeded();
            this.updateListOfCachedOption();
        })), share());
        this.check$ = merge(this.checkRaw$, this.valueOrOption$, this.searchValue$, this.editedValue$, this.activatedOption$, this.open$, this.modelChange$).pipe(share());
    }
    /**
     * @param {?} option
     * @return {?}
     */
    clickOption(option) {
        /** update listOfSelectedOption -> update listOfSelectedValue -> next listOfSelectedValue$ **/
        if (!option.nzDisabled) {
            this.updateActivatedOption(option);
            /** @type {?} */
            let listOfSelectedValue = [...this.listOfSelectedValue];
            if (this.isMultipleOrTags) {
                /** @type {?} */
                const targetValue = !this.userDropdown ? listOfSelectedValue.find((/**
                 * @param {?} o
                 * @return {?}
                 */
                o => this.compareWith(o, option.nzValue))) : listOfSelectedValue.find((/**
                 * @param {?} o
                 * @return {?}
                 */
                o => this.compareWith(o.value, option.nzValue)));
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
    }
    /**
     * @return {?}
     */
    updateListOfCachedOption() {
        if (this.isSingleMode) {
            /** @type {?} */
            const selectedOption = this.listOfTemplateOption.find((/**
             * @param {?} o
             * @return {?}
             */
            o => this.compareWith(o.nzValue, this.listOfSelectedValue[0])));
            if (!isNil(selectedOption)) {
                this.listOfCachedSelectedOption = [selectedOption];
            }
        }
        else {
            /** @type {?} */
            const listOfCachedSelectedOption = [];
            this.listOfSelectedValue.forEach((/**
             * @param {?} v
             * @return {?}
             */
            v => {
                /** @type {?} */
                const listOfMixedOption = [...this.listOfTagAndTemplateOption, ...this.listOfCachedSelectedOption];
                /** @type {?} */
                const option = listOfMixedOption.find((/**
                 * @param {?} o
                 * @return {?}
                 */
                o => this.compareWith(o.nzValue, v)));
                if (option) {
                    listOfCachedSelectedOption.push(option);
                }
            }));
            this.listOfCachedSelectedOption = listOfCachedSelectedOption;
        }
    }
    /**
     * @return {?}
     */
    updateListOfTagOption() {
        if (this.isTagsMode || this.isTagsSingleSelectMode) {
            /** @type {?} */
            const listOfMissValue = this.listOfSelectedValue.filter((/**
             * @param {?} value
             * @return {?}
             */
            value => !this.listOfTemplateOption.find((/**
             * @param {?} o
             * @return {?}
             */
            o => this.compareWith(o.nzValue, value)))));
            this.listOfTagOption = listOfMissValue.map((/**
             * @param {?} value
             * @return {?}
             */
            value => {
                /** @type {?} */
                const nzOptionComponent = new CmacsOptionComponent();
                nzOptionComponent.nzValue = value;
                nzOptionComponent.nzLabel = value;
                return nzOptionComponent;
            }));
            this.listOfTagAndTemplateOption = [...this.listOfTemplateOption.concat(this.listOfTagOption)];
        }
        else {
            this.listOfTagAndTemplateOption = [...this.listOfTemplateOption];
        }
    }
    /**
     * @return {?}
     */
    updateAddTagOption() {
        /** @type {?} */
        const isMatch = this.listOfTagAndTemplateOption.find((/**
         * @param {?} item
         * @return {?}
         */
        item => item.nzLabel === this.searchValue));
        if ((this.isTagsMode || this.isTagsSingleSelectMode) && this.searchValue && !isMatch) {
            /** @type {?} */
            const option = new CmacsOptionComponent();
            option.nzValue = this.searchValue;
            option.nzLabel = this.searchValue;
            this.addedTagOption = option;
            this.updateActivatedOption(option);
        }
        else {
            this.addedTagOption = null;
        }
    }
    /**
     * @return {?}
     */
    updateListOfFilteredOption() {
        this.updateAddTagOption();
        /** @type {?} */
        const listOfFilteredOption = new NzFilterOptionPipe().transform(this.listOfTagAndTemplateOption, this.searchValue, this.filterOption, this.serverSearch);
        this.listOfFilteredOption = this.addedTagOption
            ? [this.addedTagOption, ...listOfFilteredOption]
            : [...listOfFilteredOption];
        this.isShowNotFound = !this.isTagsMode && !this.isTagsSingleSelectMode && !this.listOfFilteredOption.length;
    }
    /**
     * @return {?}
     */
    clearInput() {
        this.clearInput$.next();
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    updateListOfSelectedValue(value, emit) {
        this.listOfSelectedValueWithEmit$.next({ value, emit });
    }
    /**
     * @param {?} option
     * @return {?}
     */
    updateActivatedOption(option) {
        this.activatedOption$.next(option);
        this.activatedOption = option;
    }
    /**
     * @param {?} inputValue
     * @param {?} tokenSeparators
     * @return {?}
     */
    tokenSeparate(inputValue, tokenSeparators) {
        // auto tokenSeparators
        if (inputValue &&
            inputValue.length &&
            tokenSeparators.length &&
            this.isMultipleOrTags &&
            this.includesSeparators(inputValue, tokenSeparators)) {
            /** @type {?} */
            const listOfLabel = this.splitBySeparators(inputValue, tokenSeparators);
            this.updateSelectedValueByLabelList(listOfLabel);
            this.clearInput();
        }
    }
    /**
     * @param {?} str
     * @param {?} separators
     * @return {?}
     */
    includesSeparators(str, separators) {
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < separators.length; ++i) {
            if (str.lastIndexOf(separators[i]) > 0) {
                return true;
            }
        }
        return false;
    }
    /**
     * @param {?} str
     * @param {?} separators
     * @return {?}
     */
    splitBySeparators(str, separators) {
        /** @type {?} */
        const reg = new RegExp(`[${separators.join()}]`);
        /** @type {?} */
        const array = ((/** @type {?} */ (str))).split(reg).filter((/**
         * @param {?} token
         * @return {?}
         */
        token => token));
        return Array.from(new Set(array));
    }
    /**
     * @return {?}
     */
    resetActivatedOptionIfNeeded() {
        /** @type {?} */
        const resetActivatedOption = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const activatedOption = this.listOfFilteredOption.find((/**
             * @param {?} item
             * @return {?}
             */
            item => this.compareWith(item.nzValue, this.listOfSelectedValue[0])));
            this.updateActivatedOption(activatedOption || null);
        });
        if (this.activatedOption) {
            if (!this.listOfFilteredOption.find((/**
             * @param {?} item
             * @return {?}
             */
            item => this.compareWith(item.nzValue, (/** @type {?} */ (this.activatedOption)).nzValue))) ||
                !this.listOfSelectedValue.find((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => this.compareWith(item, (/** @type {?} */ (this.activatedOption)).nzValue)))) {
                resetActivatedOption();
            }
        }
        else {
            resetActivatedOption();
        }
    }
    /**
     * @param {?} listOfNzOptionComponent
     * @param {?} listOfNzOptionGroupComponent
     * @return {?}
     */
    updateTemplateOption(listOfNzOptionComponent, listOfNzOptionGroupComponent) {
        this.mapOfTemplateOption$.next({ listOfNzOptionComponent, listOfNzOptionGroupComponent });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    updateSearchValue(value) {
        this.searchValueRaw$.next(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    updateEditedValue(value) {
        this.editedValueRaw$.next(value);
    }
    /**
     * @param {?} listOfLabel
     * @return {?}
     */
    updateSelectedValueByLabelList(listOfLabel) {
        /** @type {?} */
        const listOfSelectedValue = [...this.listOfSelectedValue];
        /** @type {?} */
        const listOfMatchOptionValue = this.listOfTagAndTemplateOption
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        item => listOfLabel.indexOf(item.nzLabel) !== -1))
            .map((/**
         * @param {?} item
         * @return {?}
         */
        item => item.nzValue))
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        item => !isNotNil(this.listOfSelectedValue.find((/**
         * @param {?} v
         * @return {?}
         */
        v => this.compareWith(v, item))))));
        if (this.isMultipleMode) {
            this.updateListOfSelectedValue([...listOfSelectedValue, ...listOfMatchOptionValue], true);
        }
        else {
            /** @type {?} */
            const listOfUnMatchOptionValue = listOfLabel.filter((/**
             * @param {?} label
             * @return {?}
             */
            label => this.listOfTagAndTemplateOption.map((/**
             * @param {?} item
             * @return {?}
             */
            item => item.nzLabel)).indexOf(label) === -1));
            this.updateListOfSelectedValue([...listOfSelectedValue, ...listOfMatchOptionValue, ...listOfUnMatchOptionValue], true);
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
        /** @type {?} */
        const keyCode = e.keyCode;
        /** @type {?} */
        const eventTarget = (/** @type {?} */ (e.target));
        /** @type {?} */
        const listOfFilteredOptionWithoutDisabled = this.listOfFilteredOption.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => !item.nzDisabled));
        /** @type {?} */
        const activatedIndex = listOfFilteredOptionWithoutDisabled.findIndex((/**
         * @param {?} item
         * @return {?}
         */
        item => item === this.activatedOption));
        switch (keyCode) {
            case UP_ARROW:
                e.preventDefault();
                /** @type {?} */
                const preIndex = activatedIndex > 0 ? activatedIndex - 1 : listOfFilteredOptionWithoutDisabled.length - 1;
                this.updateActivatedOption(listOfFilteredOptionWithoutDisabled[preIndex]);
                break;
            case DOWN_ARROW:
                e.preventDefault();
                /** @type {?} */
                const nextIndex = activatedIndex < listOfFilteredOptionWithoutDisabled.length - 1 ? activatedIndex + 1 : 0;
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
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {?} option
     * @return {?}
     */
    removeValueFormSelected(option) {
        if (this.disabled || option.nzDisabled) {
            return;
        }
        /** @type {?} */
        const listOfSelectedValue = this.listOfSelectedValue.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => !this.compareWith(item, option.nzValue)));
        this.updateListOfSelectedValue(listOfSelectedValue, true);
        this.clearInput();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setOpenState(value) {
        this.openRaw$.next(value);
        this.open = value;
    }
    /**
     * @return {?}
     */
    check() {
        this.checkRaw$.next();
    }
    /**
     * @return {?}
     */
    get isSingleMode() {
        return this.mode === 'default';
    }
    /**
     * @return {?}
     */
    get isTagsMode() {
        return this.mode === 'tags';
    }
    /**
     * @return {?}
     */
    get isTagsSingleSelectMode() {
        return this.mode === 'tagsSingleSelect';
    }
    /**
     * @return {?}
     */
    get isMultipleMode() {
        return this.mode === 'multiple';
    }
    /**
     * @return {?}
     */
    get isMultipleOrTags() {
        return this.mode === 'tags' || this.mode === 'multiple';
    }
}
CmacsSelectService.decorators = [
    { type: Injectable }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2VsZWN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXNlbGVjdC9jbWFjcy1zZWxlY3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRixPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3JELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBaUIsTUFBTSxxQkFBcUIsQ0FBQztBQUc3RixNQUFNLE9BQU8sa0JBQWtCO0lBRC9COztRQUdFLHlCQUFvQixHQUFHLElBQUksQ0FBQztRQUM1QixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLGlCQUFZLEdBQWtCLG1CQUFtQixDQUFDO1FBQ2xELFNBQUksR0FBeUQsU0FBUyxDQUFDO1FBQ3ZFLHFCQUFnQixHQUFHLFFBQVEsQ0FB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Ozs7SUFDMUQsNkNBQTBEOzs7OztJQUMxRCxrREFBMEQ7Ozs7O0lBQzFELHNDQUEwQzs7Ozs7SUFDMUMsdUNBQWtDOzs7OztJQUNsQyxrQ0FBcUI7O0lBQ3JCLHlDQUFxQzs7SUFDckMseUNBQWlCOztJQUNqQix5Q0FBaUI7O0lBQ2pCLDRDQUF1Qjs7SUFFdkIsbUNBSUU7O0lBQ0YsNkNBQTZDOztJQUM3Qyw4Q0FBcUU7O0lBQ3JFLGtEQUF1Rjs7SUFDdkYsMENBY0U7O0lBQ0YsMENBV0U7O0lBQ0YsMENBT0U7O0lBRUYsaURBQWdDOztJQUVoQyxrREFBa0Q7O0lBRWxELDZDQUE2Qzs7SUFFN0Msd0RBQXdEOztJQUV4RCxxREFBcUQ7O0lBQ3JELDBEQUErRDs7SUFFL0QsNENBQTRDOztJQUU1Qyx3REFBd0Q7O0lBRXhELDRDQWlCRTs7SUFDRixvQ0FRZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEJBQ0tTUEFDRSwgRE9XTl9BUlJPVywgRU5URVIsIFNQQUNFLCBUQUIsIFVQX0FSUk9XIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBtZXJnZSwgQmVoYXZpb3JTdWJqZWN0LCBSZXBsYXlTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG1hcCwgc2hhcmUsIHNraXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IGlzTmlsLCBpc05vdE5pbCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDbWFjc09wdGlvbkdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9jbWFjcy1vcHRpb24tZ3JvdXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ21hY3NPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL2NtYWNzLW9wdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBkZWZhdWx0RmlsdGVyT3B0aW9uLCBOekZpbHRlck9wdGlvblBpcGUsIFRGaWx0ZXJPcHRpb24gfSBmcm9tICcuL2NtYWNzLW9wdGlvbi5waXBlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENtYWNzU2VsZWN0U2VydmljZSB7XHJcbiAgLy8gSW5wdXQgcGFyYW1zXHJcbiAgYXV0b0NsZWFyU2VhcmNoVmFsdWUgPSB0cnVlO1xyXG4gIHNlcnZlclNlYXJjaCA9IGZhbHNlO1xyXG4gIHRhZ3NPdXQgPSBmYWxzZTtcclxuICBjbWFjc0VkaXRhYmxlID0gZmFsc2U7XHJcbiAgdXNlckRyb3Bkb3duID0gZmFsc2U7XHJcbiAgZmlsdGVyT3B0aW9uOiBURmlsdGVyT3B0aW9uID0gZGVmYXVsdEZpbHRlck9wdGlvbjtcclxuICBtb2RlOiAnZGVmYXVsdCcgfCAnbXVsdGlwbGUnIHwgJ3RhZ3MnIHwgJ3RhZ3NTaW5nbGVTZWxlY3QnID0gJ2RlZmF1bHQnO1xyXG4gIG1heE11bHRpcGxlQ291bnQgPSBJbmZpbml0eTtcclxuICBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBjb21wYXJlV2l0aCA9IChvMTogYW55LCBvMjogYW55KSA9PiBvMSA9PT0gbzI7XHJcbiAgLy8gc2VsZWN0ZWRWYWx1ZUNoYW5nZWQgc2hvdWxkIGVtaXQgbmdNb2RlbENoYW5nZSBvciBub3RcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgcHJpdmF0ZSBsaXN0T2ZTZWxlY3RlZFZhbHVlV2l0aEVtaXQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDx7IHZhbHVlOiBhbnlbXTsgZW1pdDogYm9vbGVhbiB9Pih7XHJcbiAgICB2YWx1ZTogW10sXHJcbiAgICBlbWl0OiBmYWxzZVxyXG4gIH0pO1xyXG4gIC8vIENvbnRlbnRDaGlsZHJlbiBDaGFuZ2VcclxuICBwcml2YXRlIG1hcE9mVGVtcGxhdGVPcHRpb24kID0gbmV3IEJlaGF2aW9yU3ViamVjdDx7XHJcbiAgICBsaXN0T2ZOek9wdGlvbkNvbXBvbmVudDogQ21hY3NPcHRpb25Db21wb25lbnRbXTtcclxuICAgIGxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQ6IENtYWNzT3B0aW9uR3JvdXBDb21wb25lbnRbXTtcclxuICB9Pih7XHJcbiAgICBsaXN0T2ZOek9wdGlvbkNvbXBvbmVudDogW10sXHJcbiAgICBsaXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50OiBbXVxyXG4gIH0pO1xyXG4gIC8vIHNlYXJjaFZhbHVlIENoYW5nZVxyXG4gIHByaXZhdGUgc2VhcmNoVmFsdWVSYXckID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KCcnKTtcclxuICBwcml2YXRlIGVkaXRlZFZhbHVlUmF3JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPignJyk7XHJcbiAgcHJpdmF0ZSBsaXN0T2ZGaWx0ZXJlZE9wdGlvbjogQ21hY3NPcHRpb25Db21wb25lbnRbXSA9IFtdO1xyXG4gIHByaXZhdGUgb3BlblJhdyQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG4gIHByaXZhdGUgY2hlY2tSYXckID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIG9wZW4gPSBmYWxzZTtcclxuICBjbGVhcklucHV0JCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgc2VhcmNoVmFsdWUgPSAnJztcclxuICBlZGl0ZWRWYWx1ZSA9ICcnO1xyXG4gIGlzU2hvd05vdEZvdW5kID0gZmFsc2U7XHJcbiAgLy8gb3BlblxyXG4gIG9wZW4kID0gdGhpcy5vcGVuUmF3JC5waXBlKFxyXG4gICAgLy9kaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxyXG4gICAgc2hhcmUoKSxcclxuICAgIHRhcCgoKSA9PiB0aGlzLmNsZWFySW5wdXQoKSlcclxuICApO1xyXG4gIGFjdGl2YXRlZE9wdGlvbjogQ21hY3NPcHRpb25Db21wb25lbnQgfCBudWxsO1xyXG4gIGFjdGl2YXRlZE9wdGlvbiQgPSBuZXcgUmVwbGF5U3ViamVjdDxDbWFjc09wdGlvbkNvbXBvbmVudCB8IG51bGw+KDEpO1xyXG4gIGxpc3RPZlNlbGVjdGVkVmFsdWUkID0gdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlV2l0aEVtaXQkLnBpcGUobWFwKGRhdGEgPT4gZGF0YS52YWx1ZSkpO1xyXG4gIG1vZGVsQ2hhbmdlJCA9IHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZVdpdGhFbWl0JC5waXBlKFxyXG4gICAgZmlsdGVyKGl0ZW0gPT4gaXRlbS5lbWl0KSxcclxuICAgIG1hcChkYXRhID0+IHtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWRMaXN0ID0gZGF0YS52YWx1ZTtcclxuICAgICAgbGV0IG1vZGVsVmFsdWU6IGFueVtdIHwgbnVsbCA9IG51bGw7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcbiAgICAgIGlmICh0aGlzLmlzU2luZ2xlTW9kZSkge1xyXG4gICAgICAgIGlmIChzZWxlY3RlZExpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICBtb2RlbFZhbHVlID0gc2VsZWN0ZWRMaXN0WzBdO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtb2RlbFZhbHVlID0gc2VsZWN0ZWRMaXN0O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBtb2RlbFZhbHVlO1xyXG4gICAgfSlcclxuICApO1xyXG4gIHNlYXJjaFZhbHVlJCA9IHRoaXMuc2VhcmNoVmFsdWVSYXckLnBpcGUoXHJcbiAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxyXG4gICAgc2tpcCgxKSxcclxuICAgIHNoYXJlKCksXHJcbiAgICB0YXAodmFsdWUgPT4ge1xyXG4gICAgICB0aGlzLnNlYXJjaFZhbHVlID0gdmFsdWU7XHJcbiAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlQWN0aXZhdGVkT3B0aW9uKHRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb25bMF0pO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudXBkYXRlTGlzdE9mRmlsdGVyZWRPcHRpb24oKTtcclxuICAgIH0pXHJcbiAgKTtcclxuICBlZGl0ZWRWYWx1ZSQgPSB0aGlzLmVkaXRlZFZhbHVlUmF3JC5waXBlKFxyXG4gICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcclxuICAgIHNraXAoMSksXHJcbiAgICBzaGFyZSgpLFxyXG4gICAgdGFwKHZhbHVlID0+IHtcclxuICAgICAgdGhpcy5lZGl0ZWRWYWx1ZSA9IHZhbHVlO1xyXG4gICAgfSlcclxuICApO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBsaXN0T2ZTZWxlY3RlZFZhbHVlOiBhbnlbXSA9IFtdO1xyXG4gIC8vIGZsYXQgVmlld0NoaWxkcmVuXHJcbiAgbGlzdE9mVGVtcGxhdGVPcHRpb246IENtYWNzT3B0aW9uQ29tcG9uZW50W10gPSBbXTtcclxuICAvLyB0YWcgb3B0aW9uXHJcbiAgbGlzdE9mVGFnT3B0aW9uOiBDbWFjc09wdGlvbkNvbXBvbmVudFtdID0gW107XHJcbiAgLy8gdGFnIG9wdGlvbiBjb25jYXQgdGVtcGxhdGUgb3B0aW9uXHJcbiAgbGlzdE9mVGFnQW5kVGVtcGxhdGVPcHRpb246IENtYWNzT3B0aW9uQ29tcG9uZW50W10gPSBbXTtcclxuICAvLyBWaWV3Q2hpbGRyZW5cclxuICBsaXN0T2ZOek9wdGlvbkNvbXBvbmVudDogQ21hY3NPcHRpb25Db21wb25lbnRbXSA9IFtdO1xyXG4gIGxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQ6IENtYWNzT3B0aW9uR3JvdXBDb21wb25lbnRbXSA9IFtdO1xyXG4gIC8vIGNsaWNrIG9yIGVudGVyIGFkZCB0YWcgb3B0aW9uXHJcbiAgYWRkZWRUYWdPcHRpb246IENtYWNzT3B0aW9uQ29tcG9uZW50IHwgbnVsbDtcclxuICAvLyBkaXNwbGF5IGluIHRvcCBjb250cm9sXHJcbiAgbGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb246IENtYWNzT3B0aW9uQ29tcG9uZW50W10gPSBbXTtcclxuICAvLyBzZWxlY3RlZCB2YWx1ZSBvciBWaWV3Q2hpbGRyZW4gY2hhbmdlXHJcbiAgdmFsdWVPck9wdGlvbiQgPSBjb21iaW5lTGF0ZXN0KHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZSQsIHRoaXMubWFwT2ZUZW1wbGF0ZU9wdGlvbiQpLnBpcGUoXHJcbiAgICB0YXAoZGF0YSA9PiB7XHJcbiAgICAgIHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IGRhdGFbMF07XHJcbiAgICAgIHRoaXMubGlzdE9mTnpPcHRpb25Db21wb25lbnQgPSBkYXRhWzFdLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50O1xyXG4gICAgICB0aGlzLmxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQgPSBkYXRhWzFdLmxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQ7XHJcbiAgICAgIHRoaXMubGlzdE9mVGVtcGxhdGVPcHRpb24gPSB0aGlzLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50LmNvbmNhdChcclxuICAgICAgICB0aGlzLmxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQucmVkdWNlKFxyXG4gICAgICAgICAgKHByZSwgY3VyKSA9PiBbLi4ucHJlLCAuLi5jdXIubGlzdE9mTnpPcHRpb25Db21wb25lbnQudG9BcnJheSgpXSxcclxuICAgICAgICAgIFtdIGFzIENtYWNzT3B0aW9uQ29tcG9uZW50W11cclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMudXBkYXRlTGlzdE9mVGFnT3B0aW9uKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlTGlzdE9mRmlsdGVyZWRPcHRpb24oKTtcclxuICAgICAgdGhpcy5yZXNldEFjdGl2YXRlZE9wdGlvbklmTmVlZGVkKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlTGlzdE9mQ2FjaGVkT3B0aW9uKCk7XHJcbiAgICB9KSxcclxuICAgIHNoYXJlKClcclxuICApO1xyXG4gIGNoZWNrJCA9IG1lcmdlKFxyXG4gICAgdGhpcy5jaGVja1JhdyQsXHJcbiAgICB0aGlzLnZhbHVlT3JPcHRpb24kLFxyXG4gICAgdGhpcy5zZWFyY2hWYWx1ZSQsXHJcbiAgICB0aGlzLmVkaXRlZFZhbHVlJCxcclxuICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9uJCxcclxuICAgIHRoaXMub3BlbiQsXHJcbiAgICB0aGlzLm1vZGVsQ2hhbmdlJFxyXG4gICkucGlwZShzaGFyZSgpKTtcclxuXHJcbiAgY2xpY2tPcHRpb24ob3B0aW9uOiBDbWFjc09wdGlvbkNvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgLyoqIHVwZGF0ZSBsaXN0T2ZTZWxlY3RlZE9wdGlvbiAtPiB1cGRhdGUgbGlzdE9mU2VsZWN0ZWRWYWx1ZSAtPiBuZXh0IGxpc3RPZlNlbGVjdGVkVmFsdWUkICoqL1xyXG4gICAgaWYgKCFvcHRpb24ubnpEaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUFjdGl2YXRlZE9wdGlvbihvcHRpb24pO1xyXG4gICAgICBsZXQgbGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IFsuLi50aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWVdO1xyXG4gICAgICBpZiAodGhpcy5pc011bHRpcGxlT3JUYWdzKSB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0VmFsdWUgPSAhdGhpcy51c2VyRHJvcGRvd24gPyBsaXN0T2ZTZWxlY3RlZFZhbHVlLmZpbmQobyA9PiB0aGlzLmNvbXBhcmVXaXRoKG8sIG9wdGlvbi5uelZhbHVlKSkgOiBsaXN0T2ZTZWxlY3RlZFZhbHVlLmZpbmQobyA9PiB0aGlzLmNvbXBhcmVXaXRoKG8udmFsdWUsIG9wdGlvbi5uelZhbHVlKSk7XHJcbiAgICAgICAgaWYgKGlzTm90TmlsKHRhcmdldFZhbHVlKSkge1xyXG4gICAgICAgICAgbGlzdE9mU2VsZWN0ZWRWYWx1ZS5zcGxpY2UobGlzdE9mU2VsZWN0ZWRWYWx1ZS5pbmRleE9mKHRhcmdldFZhbHVlKSwgMSk7XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUobGlzdE9mU2VsZWN0ZWRWYWx1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChsaXN0T2ZTZWxlY3RlZFZhbHVlLmxlbmd0aCA8IHRoaXMubWF4TXVsdGlwbGVDb3VudCkge1xyXG4gICAgICAgICAgaWYgKCF0aGlzLnVzZXJEcm9wZG93bikge1xyXG4gICAgICAgICAgICBsaXN0T2ZTZWxlY3RlZFZhbHVlLnB1c2gob3B0aW9uLm56VmFsdWUpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGlzdE9mU2VsZWN0ZWRWYWx1ZS5wdXNoKG9wdGlvbi5leHRlbmRlZERhdGEpO1xyXG4gICAgICAgICAgfSAgIFxyXG4gICAgICAgICAgdGhpcy51cGRhdGVMaXN0T2ZTZWxlY3RlZFZhbHVlKGxpc3RPZlNlbGVjdGVkVmFsdWUsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmICghdGhpcy5jb21wYXJlV2l0aChsaXN0T2ZTZWxlY3RlZFZhbHVlWzBdLCBvcHRpb24ubnpWYWx1ZSkpIHtcclxuICAgICAgICBsaXN0T2ZTZWxlY3RlZFZhbHVlID0gW29wdGlvbi5uelZhbHVlXTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUobGlzdE9mU2VsZWN0ZWRWYWx1ZSwgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCh0aGlzLmlzU2luZ2xlTW9kZSAmJiAhdGhpcy5jbWFjc0VkaXRhYmxlICYmICF0aGlzLnVzZXJEcm9wZG93bikgfHwgdGhpcy5pc1RhZ3NTaW5nbGVTZWxlY3RNb2RlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRPcGVuU3RhdGUoZmFsc2UpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYXV0b0NsZWFyU2VhcmNoVmFsdWUpIHtcclxuICAgICAgICB0aGlzLmNsZWFySW5wdXQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlTGlzdE9mQ2FjaGVkT3B0aW9uKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNTaW5nbGVNb2RlKSB7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gdGhpcy5saXN0T2ZUZW1wbGF0ZU9wdGlvbi5maW5kKG8gPT5cclxuICAgICAgICB0aGlzLmNvbXBhcmVXaXRoKG8ubnpWYWx1ZSwgdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlWzBdKVxyXG4gICAgICApO1xyXG4gICAgICBpZiAoIWlzTmlsKHNlbGVjdGVkT3B0aW9uKSkge1xyXG4gICAgICAgIHRoaXMubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24gPSBbc2VsZWN0ZWRPcHRpb25dO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBsaXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbjogQ21hY3NPcHRpb25Db21wb25lbnRbXSA9IFtdO1xyXG4gICAgICB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWUuZm9yRWFjaCh2ID0+IHtcclxuICAgICAgICBjb25zdCBsaXN0T2ZNaXhlZE9wdGlvbiA9IFsuLi50aGlzLmxpc3RPZlRhZ0FuZFRlbXBsYXRlT3B0aW9uLCAuLi50aGlzLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uXTtcclxuICAgICAgICBjb25zdCBvcHRpb24gPSBsaXN0T2ZNaXhlZE9wdGlvbi5maW5kKG8gPT4gdGhpcy5jb21wYXJlV2l0aChvLm56VmFsdWUsIHYpKTtcclxuICAgICAgICBpZiAob3B0aW9uKSB7XHJcbiAgICAgICAgICBsaXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbi5wdXNoKG9wdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbiA9IGxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlTGlzdE9mVGFnT3B0aW9uKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNUYWdzTW9kZSB8fCB0aGlzLmlzVGFnc1NpbmdsZVNlbGVjdE1vZGUpIHtcclxuICAgICAgY29uc3QgbGlzdE9mTWlzc1ZhbHVlID0gdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlLmZpbHRlcihcclxuICAgICAgICB2YWx1ZSA9PiAhdGhpcy5saXN0T2ZUZW1wbGF0ZU9wdGlvbi5maW5kKG8gPT4gdGhpcy5jb21wYXJlV2l0aChvLm56VmFsdWUsIHZhbHVlKSlcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5saXN0T2ZUYWdPcHRpb24gPSBsaXN0T2ZNaXNzVmFsdWUubWFwKHZhbHVlID0+IHtcclxuICAgICAgICBjb25zdCBuek9wdGlvbkNvbXBvbmVudCA9IG5ldyBDbWFjc09wdGlvbkNvbXBvbmVudCgpO1xyXG4gICAgICAgIG56T3B0aW9uQ29tcG9uZW50Lm56VmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICBuek9wdGlvbkNvbXBvbmVudC5uekxhYmVsID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIG56T3B0aW9uQ29tcG9uZW50O1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5saXN0T2ZUYWdBbmRUZW1wbGF0ZU9wdGlvbiA9IFsuLi50aGlzLmxpc3RPZlRlbXBsYXRlT3B0aW9uLmNvbmNhdCh0aGlzLmxpc3RPZlRhZ09wdGlvbildO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5saXN0T2ZUYWdBbmRUZW1wbGF0ZU9wdGlvbiA9IFsuLi50aGlzLmxpc3RPZlRlbXBsYXRlT3B0aW9uXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZUFkZFRhZ09wdGlvbigpOiB2b2lkIHtcclxuICAgIGNvbnN0IGlzTWF0Y2ggPSB0aGlzLmxpc3RPZlRhZ0FuZFRlbXBsYXRlT3B0aW9uLmZpbmQoaXRlbSA9PiBpdGVtLm56TGFiZWwgPT09IHRoaXMuc2VhcmNoVmFsdWUpO1xyXG4gICAgaWYgKCh0aGlzLmlzVGFnc01vZGUgfHwgdGhpcy5pc1RhZ3NTaW5nbGVTZWxlY3RNb2RlKSAmJiB0aGlzLnNlYXJjaFZhbHVlICYmICFpc01hdGNoKSB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbiA9IG5ldyBDbWFjc09wdGlvbkNvbXBvbmVudCgpO1xyXG4gICAgICBvcHRpb24ubnpWYWx1ZSA9IHRoaXMuc2VhcmNoVmFsdWU7XHJcbiAgICAgIG9wdGlvbi5uekxhYmVsID0gdGhpcy5zZWFyY2hWYWx1ZTtcclxuICAgICAgdGhpcy5hZGRlZFRhZ09wdGlvbiA9IG9wdGlvbjtcclxuICAgICAgdGhpcy51cGRhdGVBY3RpdmF0ZWRPcHRpb24ob3B0aW9uKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWRkZWRUYWdPcHRpb24gPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlTGlzdE9mRmlsdGVyZWRPcHRpb24oKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZUFkZFRhZ09wdGlvbigpO1xyXG4gICAgY29uc3QgbGlzdE9mRmlsdGVyZWRPcHRpb24gPSBuZXcgTnpGaWx0ZXJPcHRpb25QaXBlKCkudHJhbnNmb3JtKFxyXG4gICAgICB0aGlzLmxpc3RPZlRhZ0FuZFRlbXBsYXRlT3B0aW9uLFxyXG4gICAgICB0aGlzLnNlYXJjaFZhbHVlLFxyXG4gICAgICB0aGlzLmZpbHRlck9wdGlvbixcclxuICAgICAgdGhpcy5zZXJ2ZXJTZWFyY2hcclxuICAgICk7XHJcbiAgICB0aGlzLmxpc3RPZkZpbHRlcmVkT3B0aW9uID0gdGhpcy5hZGRlZFRhZ09wdGlvblxyXG4gICAgICA/IFt0aGlzLmFkZGVkVGFnT3B0aW9uLCAuLi5saXN0T2ZGaWx0ZXJlZE9wdGlvbl1cclxuICAgICAgOiBbLi4ubGlzdE9mRmlsdGVyZWRPcHRpb25dO1xyXG4gICAgdGhpcy5pc1Nob3dOb3RGb3VuZCA9ICF0aGlzLmlzVGFnc01vZGUgJiYgIXRoaXMuaXNUYWdzU2luZ2xlU2VsZWN0TW9kZSAmJiAhdGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvbi5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBjbGVhcklucHV0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGVhcklucHV0JC5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgdXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZSh2YWx1ZTogYW55W10sIGVtaXQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZVdpdGhFbWl0JC5uZXh0KHsgdmFsdWUsIGVtaXQgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVBY3RpdmF0ZWRPcHRpb24ob3B0aW9uOiBDbWFjc09wdGlvbkNvbXBvbmVudCB8IG51bGwpOiB2b2lkIHtcclxuICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9uJC5uZXh0KG9wdGlvbik7XHJcbiAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbiA9IG9wdGlvbjtcclxuICB9XHJcblxyXG4gIHRva2VuU2VwYXJhdGUoaW5wdXRWYWx1ZTogc3RyaW5nLCB0b2tlblNlcGFyYXRvcnM6IHN0cmluZ1tdKTogdm9pZCB7XHJcbiAgICAvLyBhdXRvIHRva2VuU2VwYXJhdG9yc1xyXG4gICAgaWYgKFxyXG4gICAgICBpbnB1dFZhbHVlICYmXHJcbiAgICAgIGlucHV0VmFsdWUubGVuZ3RoICYmXHJcbiAgICAgIHRva2VuU2VwYXJhdG9ycy5sZW5ndGggJiZcclxuICAgICAgdGhpcy5pc011bHRpcGxlT3JUYWdzICYmXHJcbiAgICAgIHRoaXMuaW5jbHVkZXNTZXBhcmF0b3JzKGlucHV0VmFsdWUsIHRva2VuU2VwYXJhdG9ycylcclxuICAgICkge1xyXG4gICAgICBjb25zdCBsaXN0T2ZMYWJlbCA9IHRoaXMuc3BsaXRCeVNlcGFyYXRvcnMoaW5wdXRWYWx1ZSwgdG9rZW5TZXBhcmF0b3JzKTtcclxuICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZFZhbHVlQnlMYWJlbExpc3QobGlzdE9mTGFiZWwpO1xyXG4gICAgICB0aGlzLmNsZWFySW5wdXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGluY2x1ZGVzU2VwYXJhdG9ycyhzdHI6IHN0cmluZyB8IHN0cmluZ1tdLCBzZXBhcmF0b3JzOiBzdHJpbmdbXSk6IGJvb2xlYW4ge1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByZWZlci1mb3Itb2ZcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VwYXJhdG9ycy5sZW5ndGg7ICsraSkge1xyXG4gICAgICBpZiAoc3RyLmxhc3RJbmRleE9mKHNlcGFyYXRvcnNbaV0pID4gMCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBzcGxpdEJ5U2VwYXJhdG9ycyhzdHI6IHN0cmluZyB8IHN0cmluZ1tdLCBzZXBhcmF0b3JzOiBzdHJpbmdbXSk6IHN0cmluZ1tdIHtcclxuICAgIGNvbnN0IHJlZyA9IG5ldyBSZWdFeHAoYFske3NlcGFyYXRvcnMuam9pbigpfV1gKTtcclxuICAgIGNvbnN0IGFycmF5ID0gKHN0ciBhcyBzdHJpbmcpLnNwbGl0KHJlZykuZmlsdGVyKHRva2VuID0+IHRva2VuKTtcclxuICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQoYXJyYXkpKTtcclxuICB9XHJcblxyXG4gIHJlc2V0QWN0aXZhdGVkT3B0aW9uSWZOZWVkZWQoKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXNldEFjdGl2YXRlZE9wdGlvbiA9ICgpID0+IHtcclxuICAgICAgY29uc3QgYWN0aXZhdGVkT3B0aW9uID0gdGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvbi5maW5kKGl0ZW0gPT5cclxuICAgICAgICB0aGlzLmNvbXBhcmVXaXRoKGl0ZW0ubnpWYWx1ZSwgdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlWzBdKVxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnVwZGF0ZUFjdGl2YXRlZE9wdGlvbihhY3RpdmF0ZWRPcHRpb24gfHwgbnVsbCk7XHJcbiAgICB9O1xyXG4gICAgaWYgKHRoaXMuYWN0aXZhdGVkT3B0aW9uKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICAhdGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvbi5maW5kKGl0ZW0gPT4gdGhpcy5jb21wYXJlV2l0aChpdGVtLm56VmFsdWUsIHRoaXMuYWN0aXZhdGVkT3B0aW9uIS5uelZhbHVlKSkgfHxcclxuICAgICAgICAhdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlLmZpbmQoaXRlbSA9PiB0aGlzLmNvbXBhcmVXaXRoKGl0ZW0sIHRoaXMuYWN0aXZhdGVkT3B0aW9uIS5uelZhbHVlKSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgcmVzZXRBY3RpdmF0ZWRPcHRpb24oKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzZXRBY3RpdmF0ZWRPcHRpb24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZVRlbXBsYXRlT3B0aW9uKFxyXG4gICAgbGlzdE9mTnpPcHRpb25Db21wb25lbnQ6IENtYWNzT3B0aW9uQ29tcG9uZW50W10sXHJcbiAgICBsaXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50OiBDbWFjc09wdGlvbkdyb3VwQ29tcG9uZW50W11cclxuICApOiB2b2lkIHtcclxuICAgIHRoaXMubWFwT2ZUZW1wbGF0ZU9wdGlvbiQubmV4dCh7IGxpc3RPZk56T3B0aW9uQ29tcG9uZW50LCBsaXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50IH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlU2VhcmNoVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWFyY2hWYWx1ZVJhdyQubmV4dCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVFZGl0ZWRWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmVkaXRlZFZhbHVlUmF3JC5uZXh0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVNlbGVjdGVkVmFsdWVCeUxhYmVsTGlzdChsaXN0T2ZMYWJlbDogc3RyaW5nW10pOiB2b2lkIHtcclxuICAgIGNvbnN0IGxpc3RPZlNlbGVjdGVkVmFsdWUgPSBbLi4udGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlXTtcclxuICAgIGNvbnN0IGxpc3RPZk1hdGNoT3B0aW9uVmFsdWUgPSB0aGlzLmxpc3RPZlRhZ0FuZFRlbXBsYXRlT3B0aW9uXHJcbiAgICAgIC5maWx0ZXIoaXRlbSA9PiBsaXN0T2ZMYWJlbC5pbmRleE9mKGl0ZW0ubnpMYWJlbCkgIT09IC0xKVxyXG4gICAgICAubWFwKGl0ZW0gPT4gaXRlbS5uelZhbHVlKVxyXG4gICAgICAuZmlsdGVyKGl0ZW0gPT4gIWlzTm90TmlsKHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZS5maW5kKHYgPT4gdGhpcy5jb21wYXJlV2l0aCh2LCBpdGVtKSkpKTtcclxuICAgIGlmICh0aGlzLmlzTXVsdGlwbGVNb2RlKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZShbLi4ubGlzdE9mU2VsZWN0ZWRWYWx1ZSwgLi4ubGlzdE9mTWF0Y2hPcHRpb25WYWx1ZV0sIHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgbGlzdE9mVW5NYXRjaE9wdGlvblZhbHVlID0gbGlzdE9mTGFiZWwuZmlsdGVyKFxyXG4gICAgICAgIGxhYmVsID0+IHRoaXMubGlzdE9mVGFnQW5kVGVtcGxhdGVPcHRpb24ubWFwKGl0ZW0gPT4gaXRlbS5uekxhYmVsKS5pbmRleE9mKGxhYmVsKSA9PT0gLTFcclxuICAgICAgKTtcclxuICAgICAgdGhpcy51cGRhdGVMaXN0T2ZTZWxlY3RlZFZhbHVlKFxyXG4gICAgICAgIFsuLi5saXN0T2ZTZWxlY3RlZFZhbHVlLCAuLi5saXN0T2ZNYXRjaE9wdGlvblZhbHVlLCAuLi5saXN0T2ZVbk1hdGNoT3B0aW9uVmFsdWVdLFxyXG4gICAgICAgIHRydWVcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBrZXlDb2RlID0gZS5rZXlDb2RlO1xyXG4gICAgY29uc3QgZXZlbnRUYXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgY29uc3QgbGlzdE9mRmlsdGVyZWRPcHRpb25XaXRob3V0RGlzYWJsZWQgPSB0aGlzLmxpc3RPZkZpbHRlcmVkT3B0aW9uLmZpbHRlcihpdGVtID0+ICFpdGVtLm56RGlzYWJsZWQpO1xyXG4gICAgY29uc3QgYWN0aXZhdGVkSW5kZXggPSBsaXN0T2ZGaWx0ZXJlZE9wdGlvbldpdGhvdXREaXNhYmxlZC5maW5kSW5kZXgoaXRlbSA9PiBpdGVtID09PSB0aGlzLmFjdGl2YXRlZE9wdGlvbik7XHJcbiAgICBzd2l0Y2ggKGtleUNvZGUpIHtcclxuICAgICAgY2FzZSBVUF9BUlJPVzpcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgcHJlSW5kZXggPSBhY3RpdmF0ZWRJbmRleCA+IDAgPyBhY3RpdmF0ZWRJbmRleCAtIDEgOiBsaXN0T2ZGaWx0ZXJlZE9wdGlvbldpdGhvdXREaXNhYmxlZC5sZW5ndGggLSAxO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQWN0aXZhdGVkT3B0aW9uKGxpc3RPZkZpbHRlcmVkT3B0aW9uV2l0aG91dERpc2FibGVkW3ByZUluZGV4XSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRE9XTl9BUlJPVzpcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgbmV4dEluZGV4ID0gYWN0aXZhdGVkSW5kZXggPCBsaXN0T2ZGaWx0ZXJlZE9wdGlvbldpdGhvdXREaXNhYmxlZC5sZW5ndGggLSAxID8gYWN0aXZhdGVkSW5kZXggKyAxIDogMDtcclxuICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2YXRlZE9wdGlvbihsaXN0T2ZGaWx0ZXJlZE9wdGlvbldpdGhvdXREaXNhYmxlZFtuZXh0SW5kZXhdKTtcclxuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgIXRoaXMub3Blbikge1xyXG4gICAgICAgICAgdGhpcy5zZXRPcGVuU3RhdGUodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEVOVEVSOlxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAodGhpcy5vcGVuKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5hY3RpdmF0ZWRPcHRpb24gJiYgIXRoaXMuYWN0aXZhdGVkT3B0aW9uLm56RGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jbGlja09wdGlvbih0aGlzLmFjdGl2YXRlZE9wdGlvbik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2V0T3BlblN0YXRlKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBCQUNLU1BBQ0U6XHJcbiAgICAgICAgaWYgKCh0aGlzLmlzTXVsdGlwbGVPclRhZ3MgfHwgdGhpcy5pc1RhZ3NTaW5nbGVTZWxlY3RNb2RlKSAmJiAhZXZlbnRUYXJnZXQudmFsdWUgJiYgdGhpcy5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbi5sZW5ndGggJiYgIXRoaXMudGFnc091dCkge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgdGhpcy5yZW1vdmVWYWx1ZUZvcm1TZWxlY3RlZCh0aGlzLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uW3RoaXMubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24ubGVuZ3RoIC0gMV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTUEFDRTpcclxuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgIXRoaXMub3Blbikge1xyXG4gICAgICAgICAgdGhpcy5zZXRPcGVuU3RhdGUodHJ1ZSk7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFRBQjpcclxuICAgICAgICB0aGlzLnNldE9wZW5TdGF0ZShmYWxzZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgcmVtb3ZlVmFsdWVGb3JtU2VsZWN0ZWQob3B0aW9uOiBDbWFjc09wdGlvbkNvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgb3B0aW9uLm56RGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZS5maWx0ZXIoaXRlbSA9PiAhdGhpcy5jb21wYXJlV2l0aChpdGVtLCBvcHRpb24ubnpWYWx1ZSkpO1xyXG4gICAgdGhpcy51cGRhdGVMaXN0T2ZTZWxlY3RlZFZhbHVlKGxpc3RPZlNlbGVjdGVkVmFsdWUsIHRydWUpO1xyXG4gICAgdGhpcy5jbGVhcklucHV0KCk7XHJcbiAgfVxyXG5cclxuICBzZXRPcGVuU3RhdGUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMub3BlblJhdyQubmV4dCh2YWx1ZSk7XHJcbiAgICB0aGlzLm9wZW4gPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGNoZWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGVja1JhdyQubmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzU2luZ2xlTW9kZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm1vZGUgPT09ICdkZWZhdWx0JztcclxuICB9XHJcblxyXG4gIGdldCBpc1RhZ3NNb2RlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubW9kZSA9PT0gJ3RhZ3MnO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzVGFnc1NpbmdsZVNlbGVjdE1vZGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5tb2RlID09PSAndGFnc1NpbmdsZVNlbGVjdCc7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNNdWx0aXBsZU1vZGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5tb2RlID09PSAnbXVsdGlwbGUnO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzTXVsdGlwbGVPclRhZ3MoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5tb2RlID09PSAndGFncycgfHwgdGhpcy5tb2RlID09PSAnbXVsdGlwbGUnO1xyXG4gIH1cclxufVxyXG4iXX0=