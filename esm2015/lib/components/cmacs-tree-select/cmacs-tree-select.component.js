/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BACKSPACE } from '@angular/cdk/keycodes';
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { forwardRef, ChangeDetectorRef, Component, ElementRef, EventEmitter, Host, Injector, Input, Optional, Output, Renderer2, Self, TemplateRef, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { merge, of as observableOf } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { isNotNil, slideMotion, zoomMotion, InputBoolean, NzNoAnimationDirective, NzTreeBase, NzTreeHigherOrderServiceToken } from 'ng-zorro-antd/core';
import { CmacsTreeSelectService } from './cmacs-tree-select.service';
import { CmacsTreeComponent } from "../cmacs-tree/cmacs-tree.component";
/**
 * @param {?} injector
 * @return {?}
 */
export function higherOrderServiceFactory(injector) {
    return injector.get(CmacsTreeSelectService);
}
export class CmacsTreeSelectComponent extends NzTreeBase {
    /**
     * @param {?} nzTreeService
     * @param {?} renderer
     * @param {?} cdr
     * @param {?} elementRef
     * @param {?=} noAnimation
     */
    constructor(nzTreeService, renderer, cdr, elementRef, noAnimation) {
        super(nzTreeService);
        this.renderer = renderer;
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.noAnimation = noAnimation;
        this.allowClear = true;
        this.showExpand = true;
        this.showLine = false;
        this.dropdownMatchSelectWidth = true;
        this.checkable = false;
        this.showSearch = false;
        this.disabled = false;
        this.asyncData = false;
        this.multiple = false;
        this.defaultExpandAll = false;
        this.cmacsOpen = false;
        this.inlineEdit = false;
        this.radio = false;
        this.nodes = [];
        this.open = false;
        this.size = 'default';
        this.placeHolder = '';
        this.defaultExpandedKeys = [];
        this.displayWith = (/**
         * @param {?} node
         * @return {?}
         */
        (node) => node.title);
        this.openChange = new EventEmitter();
        this.cleared = new EventEmitter();
        this.removed = new EventEmitter();
        this.expandChange = new EventEmitter();
        this.treeClick = new EventEmitter();
        this.treeCheckBoxChange = new EventEmitter();
        this.onaddchild = new EventEmitter();
        this.onaddparent = new EventEmitter();
        this.isComposing = false;
        this.isDestroy = true;
        this.isNotFound = false;
        this.inputValue = '';
        this.dropDownPosition = 'bottom';
        this.selectedNodes = [];
        this.value = [];
        this.onTouched = (/**
         * @return {?}
         */
        () => null);
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-select');
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onaddparentevt($event) {
        $event.preventDefault();
        $event.stopImmediatePropagation();
        this.onaddparent.emit();
    }
    /**
     * @param {?} node
     * @return {?}
     */
    addParent(node) {
        this.treeRef.addParent(node);
    }
    /**
     * @return {?}
     */
    get placeHolderDisplay() {
        return this.inputValue || this.isComposing || this.selectedNodes.length ? 'none' : 'block';
    }
    /**
     * @return {?}
     */
    get searchDisplay() {
        return this.open ? 'block' : 'none';
    }
    /**
     * @return {?}
     */
    get isMultiple() {
        return this.multiple || this.checkable;
    }
    /**
     * @return {?}
     */
    get selectedValueDisplay() {
        /** @type {?} */
        let showSelectedValue = false;
        /** @type {?} */
        let opacity = 1;
        if (!this.showSearch) {
            showSelectedValue = true;
        }
        else {
            if (this.open) {
                showSelectedValue = !(this.inputValue || this.isComposing);
                if (showSelectedValue) {
                    opacity = 0.4;
                }
            }
            else {
                showSelectedValue = true;
            }
        }
        return {
            display: showSelectedValue ? 'block' : 'none',
            opacity: `${opacity}`
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.isDestroy = false;
        this.selectionChangeSubscription = this.subscribeSelectionChange();
        if (this.inlineEdit) {
            this.showExpand = false;
            this.defaultExpandAll = true;
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.inlineEdit && this.treeRef) {
            this.treeRef.searchValue = '';
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onaddchildevt($event) {
        this.onaddchild.emit($event);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.isDestroy = true;
        this.closeDropDown();
        this.selectionChangeSubscription.unsubscribe();
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.closeDropDown();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('nzNodes')) {
            this.updateSelectedNodes(true);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (isNotNil(value)) {
            if (this.isMultiple && Array.isArray(value)) {
                this.value = value;
            }
            else {
                this.value = [(/** @type {?} */ (value))];
            }
            this.updateSelectedNodes(true);
        }
        else {
            this.value = [];
            this.selectedNodes.forEach((/**
             * @param {?} node
             * @return {?}
             */
            node => {
                this.removeSelected(node, false);
            }));
            this.selectedNodes = [];
        }
        this.cdr.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @return {?}
     */
    trigger() {
        if (this.disabled || (!this.disabled && this.open)) {
            this.closeDropDown();
        }
        else {
            this.openDropdown();
            if (this.showSearch || this.isMultiple) {
                this.focusOnInput();
            }
        }
    }
    /**
     * @return {?}
     */
    openDropdown() {
        if (!this.disabled) {
            this.open = true;
            this.openChange.emit(this.open);
            this.updateCdkConnectedOverlayStatus();
            this.updatePosition();
        }
    }
    /**
     * @return {?}
     */
    closeDropDown() {
        this.onTouched();
        this.open = false;
        this.openChange.emit(this.open);
        this.cdr.markForCheck();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDownInput(e) {
        /** @type {?} */
        const keyCode = e.keyCode;
        /** @type {?} */
        const eventTarget = (/** @type {?} */ (e.target));
        if (this.isMultiple && !eventTarget.value && keyCode === BACKSPACE) {
            e.preventDefault();
            if (this.selectedNodes.length) {
                /** @type {?} */
                const removeNode = this.selectedNodes[this.selectedNodes.length - 1];
                this.removeSelected(removeNode);
                (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next({
                    eventName: 'removeSelect',
                    node: removeNode
                });
            }
            if (this.inlineEdit) {
                this.treeRef.searchValue = '';
            }
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onExpandedKeysChange(value) {
        this.expandChange.emit(value);
        this.defaultExpandedKeys = [...(/** @type {?} */ (value.keys))];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setInputValue(value) {
        this.inputValue = value;
        this.updateInputWidth();
        this.updatePosition();
    }
    /**
     * @param {?} node
     * @param {?=} emit
     * @param {?=} event
     * @return {?}
     */
    removeSelected(node, emit = true, event) {
        node.isSelected = false;
        node.isChecked = false;
        if (this.checkable) {
            this.nzTreeService.conduct(node);
        }
        else {
            this.nzTreeService.setSelectedNodeList(node, this.multiple);
        }
        if (emit) {
            this.removed.emit(node);
        }
        // Do not trigger the popup
        if (event && event.stopPropagation) {
            event.stopPropagation();
        }
    }
    /**
     * @return {?}
     */
    focusOnInput() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.inputElement) {
                this.inputElement.nativeElement.focus();
            }
        }));
    }
    /**
     * @return {?}
     */
    subscribeSelectionChange() {
        return merge(this.treeClick.pipe(tap((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            const node = (/** @type {?} */ (event.node));
            if (this.radio && this.checkable) {
                /** @type {?} */
                const nodes = this.coerceTreeNodes(this.nodes);
                this.nzTreeService.calcCheckedKeys([], nodes, true);
                node.isChecked = !node.isChecked;
                this.nzTreeService.calcCheckedKeys([node.key], nodes, true);
                this.updateSelectedNodes();
            }
            else if (this.checkable && !node.isDisabled && !node.isDisableCheckbox) {
                node.isChecked = !node.isChecked;
                this.nzTreeService.conduct(node);
            }
            if (this.checkable) {
                node.isSelected = false;
            }
        })), filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            const node = (/** @type {?} */ (event.node));
            return this.checkable ? !node.isDisabled && !node.isDisableCheckbox : !node.isDisabled;
        }))), this.checkable ? this.treeCheckBoxChange : observableOf(), this.cleared, this.removed).subscribe((/**
         * @return {?}
         */
        () => {
            this.updateSelectedNodes();
            /** @type {?} */
            const value = this.selectedNodes.map((/**
             * @param {?} node
             * @return {?}
             */
            node => (/** @type {?} */ (node.key))));
            this.value = [...value];
            if (this.showSearch || this.isMultiple) {
                this.inputValue = '';
                this.isNotFound = false;
            }
            if (this.isMultiple) {
                this.onChange(value);
                this.focusOnInput();
                this.updatePosition();
            }
            else {
                this.closeDropDown();
                this.onChange(value.length ? value[0] : null);
            }
        }));
    }
    /**
     * @param {?=} init
     * @return {?}
     */
    updateSelectedNodes(init = false) {
        if (init) {
            /** @type {?} */
            const nodes = this.coerceTreeNodes(this.nodes);
            this.nzTreeService.isMultiple = this.isMultiple;
            this.nzTreeService.initTree(nodes);
            if (this.checkable && !this.radio) {
                this.nzTreeService.calcCheckedKeys(this.value, nodes);
            }
            else if (!this.radio) {
                this.nzTreeService.calcSelectedKeys(this.value, nodes, this.isMultiple);
            }
            else {
                this.nzTreeService.calcCheckedKeys(this.value, nodes, true);
            }
        }
        if (this.checkable && !this.radio) {
            this.selectedNodes = [...this.getCheckedNodeList()];
        }
        else if (!this.radio) {
            this.selectedNodes = [...this.getSelectedNodeList()];
        }
        else {
            this.selectedNodes = [...this.getCheckedNodeList()];
        }
    }
    /**
     * @return {?}
     */
    updatePosition() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.cdkConnectedOverlay && this.cdkConnectedOverlay.overlayRef) {
                this.cdkConnectedOverlay.overlayRef.updatePosition();
            }
        }));
    }
    /**
     * @param {?} position
     * @return {?}
     */
    onPositionChange(position) {
        this.dropDownPosition = position.connectionPair.originY;
    }
    /**
     * @return {?}
     */
    updateInputWidth() {
        if (this.isMultiple && this.inputElement) {
            if (this.inputValue || this.isComposing) {
                this.renderer.setStyle(this.inputElement.nativeElement, 'width', `${this.inputElement.nativeElement.scrollWidth}px`);
            }
            else {
                this.renderer.removeStyle(this.inputElement.nativeElement, 'width');
            }
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onClearSelection($event) {
        $event.stopPropagation();
        $event.preventDefault();
        this.selectedNodes.forEach((/**
         * @param {?} node
         * @return {?}
         */
        node => {
            this.removeSelected(node, false);
        }));
        this.cleared.emit();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    setSearchValues($event) {
        Promise.resolve().then((/**
         * @return {?}
         */
        () => {
            this.isNotFound = (this.showSearch || this.isMultiple) && !!this.inputValue && (/** @type {?} */ ($event.matchedKeys)).length === 0;
        }));
    }
    /**
     * @return {?}
     */
    updateCdkConnectedOverlayStatus() {
        this.triggerWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
    }
    /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    trackValue(_index, option) {
        return (/** @type {?} */ (option.key));
    }
}
CmacsTreeSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmacs-tree-select',
                exportAs: 'cmacsTreeSelect',
                animations: [slideMotion, zoomMotion],
                template: "<ng-template #inputTemplate>\r\n  <input\r\n    #inputElement\r\n    autocomplete=\"off\"\r\n    class=\"ant-select-search__field\"\r\n    [class.no-margin-left]=\"selectedNodes.length\"\r\n    (compositionstart)=\"isComposing = true\"\r\n    (compositionend)=\"isComposing = false\"\r\n    (keydown)=\"onKeyDownInput($event)\"\r\n    [ngModel]=\"inputValue\"\r\n    (ngModelChange)=\"setInputValue($event)\"\r\n    [disabled]=\"disabled\">\r\n</ng-template>\r\n\r\n<ng-template *ngIf=\"!cmacsOpen\"\r\n  cdkConnectedOverlay\r\n  nzConnectedOverlay\r\n  [cdkConnectedOverlayOrigin]=\"cdkOverlayOrigin\"\r\n  [cdkConnectedOverlayOpen]=\"open\"\r\n  [cdkConnectedOverlayHasBackdrop]=\"true\"\r\n  [cdkConnectedOverlayMinWidth]=\"dropdownMatchSelectWidth? null : triggerWidth\"\r\n  [cdkConnectedOverlayWidth]=\"dropdownMatchSelectWidth? triggerWidth : null\"\r\n  (backdropClick)=\"closeDropDown()\"\r\n  (detach)=\"closeDropDown()\"\r\n  (positionChange)=\"onPositionChange($event)\">\r\n  <ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n</ng-template>\r\n\r\n<div\r\n  cdkOverlayOrigin\r\n  class=\"ant-select-selection\"\r\n  [class.ant-select-selection--single]=\"!isMultiple\"\r\n  [class.ant-select-selection--multiple]=\"isMultiple\"\r\n  tabindex=\"0\">\r\n  <span class=\"ant-select-selection__clear cmacs-tree-select-search-icon\">\r\n    <i class=\"iconCreation-Search ant-select-clear-icon\"></i>\r\n  </span>\r\n  <ng-container *ngIf=\"!isMultiple\">\r\n    <div class=\"ant-select-selection__rendered\">\r\n      <div\r\n        *ngIf=\"placeHolder && selectedNodes.length === 0\"\r\n        [style.display]=\"placeHolderDisplay\"\r\n        class=\"ant-select-selection__placeholder\">\r\n        {{ placeHolder }}\r\n      </div>\r\n\r\n      <div\r\n        *ngIf=\"selectedNodes.length === 1\"\r\n        class=\"ant-select-selection-selected-value\"\r\n        [attr.title]=\"displayWith(selectedNodes[0])\"\r\n        [ngStyle]=\"selectedValueDisplay\">\r\n        {{ displayWith(selectedNodes[0]) }}\r\n      </div>\r\n\r\n      <div\r\n        *ngIf=\"showSearch\"\r\n        [style.display]=\"searchDisplay\"\r\n        class=\"ant-select-search ant-select-search--inline\">\r\n        <div class=\"ant-select-search__field__wrap\">\r\n          <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\r\n          <span class=\"ant-select-search__field__mirror\">{{inputValue}}&nbsp;</span>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"isMultiple\">\r\n    <ul class=\"ant-select-selection__rendered\">\r\n      <div\r\n        *ngIf=\"placeHolder && selectedNodes.length === 0\"\r\n        [style.display]=\"placeHolderDisplay\"\r\n        class=\"ant-select-selection__placeholder\">\r\n        {{ placeHolder }}\r\n      </div>\r\n      <ng-container *ngFor=\"let node of selectedNodes | slice: 0 : maxTagCount; trackBy:trackValue\">\r\n        <li\r\n          [@zoomMotion]\r\n          [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n          [attr.title]=\"displayWith(node)\"\r\n          [class.ant-select-selection__choice__disabled]=\"node.isDisabled\"\r\n          class=\"ant-select-selection__choice\">\r\n               <span *ngIf=\"!node.isDisabled\" class=\"ant-select-selection__choice__remove\"\r\n                 (mousedown)=\"$event.preventDefault()\"\r\n                 (click)=\"removeSelected(node, true, $event)\">\r\n                 <i nz-icon type=\"close\" class=\"ant-select-remove-icon\"></i>\r\n               </span>\r\n          <span class=\"ant-select-selection__choice__content\">{{ displayWith(node) }}</span>\r\n        </li>\r\n      </ng-container>\r\n      <li [@zoomMotion]\r\n        *ngIf=\"selectedNodes.length > maxTagCount\"\r\n        class=\"ant-select-selection__choice\">\r\n        <div class=\"ant-select-selection__choice__content\">\r\n          <ng-container *ngIf=\"maxTagPlaceholder\">\r\n            <ng-template\r\n              [ngTemplateOutlet]=\"maxTagPlaceholder\"\r\n              [ngTemplateOutletContext]=\"{ $implicit: selectedNodes | slice: maxTagCount}\">\r\n            </ng-template>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"!maxTagPlaceholder\">\r\n            + {{ selectedNodes.length - maxTagCount }} ...\r\n          </ng-container>\r\n        </div>\r\n      </li>\r\n      <li class=\"ant-select-search ant-select-search--inline\">\r\n        <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\r\n      </li>\r\n    </ul>\r\n  </ng-container>\r\n  <span *ngIf=\"allowClear && selectedNodes.length\" class=\"ant-select-selection__clear\"\r\n    (mousedown)=\"$event.preventDefault()\"\r\n    (click)=\"onClearSelection($event)\">\r\n    <i nz-icon type=\"close-circle\" class=\"ant-select-clear-icon\" theme=\"fill\"></i>\r\n  </span>\r\n  <div class=\"ant-select-selection__clear cmacs-tree-select-arrow\">\r\n    <i class=\"ant-select-clear-icon iconArrowLarge-Arrow-Right\" [class.cmacs-selected-nodes]=\"selectedNodes.length\"></i>\r\n  </div>\r\n  <span *ngIf=\"!isMultiple\" class=\"ant-select-arrow\">\r\n    <i nz-icon type=\"down\" class=\"ant-select-arrow-icon\"></i>\r\n  </span>\r\n</div>\r\n<ng-container *ngIf=\"cmacsOpen\">\r\n  <ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n</ng-container>\r\n\r\n<ng-template #content>\r\n  <div class=\"ant-select-dropdown ant-select-tree-dropdown cmacs-tree-select-dropdown\"\r\n       [@slideMotion]=\"!cmacsOpen && open ? dropDownPosition : 'void'\"\r\n       [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n       [class.ant-select-dropdown--single]=\"!multiple\"\r\n       [class.ant-select-dropdown--multiple]=\"multiple\"\r\n       [class.ant-select-dropdown-placement-bottomLeft]=\"dropDownPosition === 'bottom'\"\r\n       [class.ant-select-dropdown-placement-topLeft]=\"dropDownPosition === 'top'\"\r\n       [ngStyle]=\"dropdownStyle\">\r\n    <cmacs-tree\r\n      #treeRef\r\n      [hidden]=\"isNotFound\"\r\n      nzNoAnimation\r\n      [selectMode]=\"true\"\r\n      [nzData]=\"nodes\"\r\n      [inlineEdit]=\"inlineEdit\"\r\n      [nzMultiple]=\"multiple\"\r\n      [searchValue]=\"inputValue\"\r\n      [checkable]=\"checkable\"\r\n      [radio]=\"radio\"\r\n      [asyncData]=\"asyncData\"\r\n      [showExpand]=\"showExpand\"\r\n      [showLine]=\"showLine\"\r\n      [expandedIcon]=\"expandedIcon\"\r\n      [nzBlockNode]=\"true\"\r\n      [expandAll]=\"defaultExpandAll\"\r\n      [nzExpandedKeys]=\"defaultExpandedKeys\"\r\n      [nzCheckedKeys]=\"checkable ? value : []\"\r\n      [nzSelectedKeys]=\"!checkable ? value : []\"\r\n      (nzExpandChange)=\"onExpandedKeysChange($event)\"\r\n      (nzClick)=\"treeClick.emit($event)\"\r\n      (nzCheckedKeysChange)=\"updateSelectedNodes()\"\r\n      (nzSelectedKeysChange)=\"updateSelectedNodes()\"\r\n      (nzCheckBoxChange)=\"treeCheckBoxChange.emit($event)\"\r\n      (searchValueChange)=\"setSearchValues($event)\"\r\n      (onaddchild)=\"onaddchildevt($event)\"\r\n    >\r\n    </cmacs-tree>\r\n    <span *ngIf=\"nodes.length === 0 || isNotFound\" class=\"ant-select-not-found\">\r\n      <nz-embed-empty [nzComponentName]=\"'tree-select'\" [specificContent]=\"notFoundContent\"></nz-embed-empty>\r\n    </span>\r\n    <ng-container *ngIf=\"inlineEdit\">\r\n      <div class=\"cmacs-add-new-category\">\r\n        <i class=\"iconUILarge-New cmacs-select-tree-new-icon\"\r\n           (click)=\"onaddparentevt($event)\"></i>\r\n        <span class=\"cmacs-add-new-category-title\">New Category</span>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n</ng-template>\r\n",
                providers: [
                    CmacsTreeSelectService,
                    {
                        provide: NzTreeHigherOrderServiceToken,
                        useFactory: higherOrderServiceFactory,
                        deps: [[new Self(), Injector]]
                    },
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => CmacsTreeSelectComponent)),
                        multi: true
                    }
                ],
                host: {
                    '[class.ant-select-lg]': 'size==="large"',
                    '[class.ant-select-sm]': 'size==="small"',
                    '[class.ant-select-enabled]': '!disabled',
                    '[class.ant-select-disabled]': 'disabled',
                    '[class.ant-select-allow-clear]': 'allowClear',
                    '[class.ant-select-open]': 'open',
                    '(click)': 'trigger()'
                },
                styles: [".cmacs-tree-select-dropdown{box-shadow:none;border-bottom:1px solid #dee0e5;border-right:1px solid #dee0e5;border-left:1px solid #dee0e5;border-radius:0 0 3px 3px;z-index:unset}:host ::ng-deep .ant-select-selection,:host ::ng-deep .ant-select-selection:focus,:host ::ng-deep .ant-select-selection:hover{border:1px solid #dee0e5;border-radius:3px 3px 0 0}.cmacs-tree-select-search-icon{left:11px;right:unset;z-index:unset;opacity:1!important;font-size:16px;top:14px}:host ::ng-deep .ant-select-selection--multiple .ant-select-selection__placeholder{margin-left:29px}.ant-select-selection__clear{right:14px}.cmacs-tree-select-arrow{z-index:unset;opacity:1!important;font-size:29px;top:7px;right:30px}.cmacs-tree-select-arrow:hover{cursor:pointer}.cmacs-tree-select-arrow i{border-left:1px solid #dee0e5;padding:0 5px}.ant-select-selection--multiple .ant-select-search--inline .ant-select-search__field{padding-left:0}.ant-select-selection:hover .cmacs-selected-nodes.iconArrowLarge-Arrow-Right:before{opacity:0}.cmacs-add-new-category{font-weight:400;font-style:normal;font-stretch:normal;line-height:1.67;letter-spacing:normal;color:#656c79;font-size:12px;font-family:Roboto-Regular;padding:5px 0 6px 10px;border-top:1px solid #dee0e5}.cmacs-add-new-category:hover{background-color:#f6f7fb}.cmacs-add-new-category-title{padding:3px 5px}.cmacs-select-tree-new-icon{color:#acb3bf;font-size:16px;top:2px;position:relative}.cmacs-select-tree-new-icon:hover{cursor:pointer}.no-margin-left{margin-left:0!important}", `
      .ant-select-dropdown {
        top: 100%;
        left: 0;
        position: relative;
        width: 100%;
        margin-top: 4px;
        margin-bottom: 4px;
        overflow: auto;
      }
      
      cmacs-tree-select {
        overflow: hidden;
      }
    `]
            }] }
];
/** @nocollapse */
CmacsTreeSelectComponent.ctorParameters = () => [
    { type: CmacsTreeSelectService },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
CmacsTreeSelectComponent.propDecorators = {
    allowClear: [{ type: Input }],
    showExpand: [{ type: Input }],
    showLine: [{ type: Input }],
    expandedIcon: [{ type: Input }],
    dropdownMatchSelectWidth: [{ type: Input }],
    checkable: [{ type: Input }],
    showSearch: [{ type: Input }],
    disabled: [{ type: Input }],
    asyncData: [{ type: Input }],
    multiple: [{ type: Input }],
    defaultExpandAll: [{ type: Input }],
    cmacsOpen: [{ type: Input }],
    inlineEdit: [{ type: Input }],
    radio: [{ type: Input }],
    notFoundContent: [{ type: Input }],
    nodes: [{ type: Input }],
    open: [{ type: Input }],
    size: [{ type: Input }],
    placeHolder: [{ type: Input }],
    dropdownStyle: [{ type: Input }],
    defaultExpandedKeys: [{ type: Input }],
    displayWith: [{ type: Input }],
    maxTagCount: [{ type: Input }],
    maxTagPlaceholder: [{ type: Input }],
    openChange: [{ type: Output }],
    cleared: [{ type: Output }],
    removed: [{ type: Output }],
    expandChange: [{ type: Output }],
    treeClick: [{ type: Output }],
    treeCheckBoxChange: [{ type: Output }],
    onaddchild: [{ type: Output }],
    onaddparent: [{ type: Output }],
    inputElement: [{ type: ViewChild, args: ['inputElement',] }],
    treeRef: [{ type: ViewChild, args: ['treeRef',] }],
    cdkOverlayOrigin: [{ type: ViewChild, args: [CdkOverlayOrigin,] }],
    cdkConnectedOverlay: [{ type: ViewChild, args: [CdkConnectedOverlay,] }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsTreeSelectComponent.prototype, "allowClear", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsTreeSelectComponent.prototype, "showExpand", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsTreeSelectComponent.prototype, "showLine", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsTreeSelectComponent.prototype, "dropdownMatchSelectWidth", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsTreeSelectComponent.prototype, "checkable", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsTreeSelectComponent.prototype, "showSearch", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsTreeSelectComponent.prototype, "disabled", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsTreeSelectComponent.prototype, "asyncData", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsTreeSelectComponent.prototype, "multiple", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsTreeSelectComponent.prototype, "defaultExpandAll", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsTreeSelectComponent.prototype, "cmacsOpen", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsTreeSelectComponent.prototype, "inlineEdit", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsTreeSelectComponent.prototype, "radio", void 0);
if (false) {
    /** @type {?} */
    CmacsTreeSelectComponent.prototype.allowClear;
    /** @type {?} */
    CmacsTreeSelectComponent.prototype.showExpand;
    /** @type {?} */
    CmacsTreeSelectComponent.prototype.showLine;
    /** @type {?} */
    CmacsTreeSelectComponent.prototype.expandedIcon;
    /** @type {?} */
    CmacsTreeSelectComponent.prototype.dropdownMatchSelectWidth;
    /** @type {?} */
    CmacsTreeSelectComponent.prototype.checkable;
    /** @type {?} */
    CmacsTreeSelectComponent.prototype.showSearch;
    /** @type {?} */
    CmacsTreeSelectComponent.prototype.disabled;
    /** @type {?} */
    CmacsTreeSelectComponent.prototype.asyncData;
    /** @type {?} */
    CmacsTreeSelectComponent.prototype.multiple;
    /** @type {?} */
    CmacsTreeSelectComponent.prototype.defaultExpandAll;
    /** @type {?} */
    CmacsTreeSelectComponent.prototype.cmacsOpen;
    /** @type {?} */
    CmacsTreeSelectComponent.prototype.inlineEdit;
    /** @type {?} */
    CmacsTreeSelectComponent.prototype.radio;
    /** @type {?} */
    CmacsTreeSelectComponent.prototype.notFoundContent;
    /** @type {?} */
    CmacsTreeSelectComponent.prototype.nodes;
    /** @type {?} */
    CmacsTreeSelectComponent.prototype.open;
    /** @type {?} */
    CmacsTreeSelectComponent.prototype.size;
    /** @type {?} */
    CmacsTreeSelectComponent.prototype.placeHolder;
    /** @type {?} */
    CmacsTreeSelectComponent.prototype.dropdownStyle;
    /** @type {?} */
    CmacsTreeSelectComponent.prototype.defaultExpandedKeys;
    /** @type {?} */
    CmacsTreeSelectComponent.prototype.displayWith;
    /** @type {?} */
    CmacsTreeSelectComponent.prototype.maxTagCount;
    /** @type {?} */
    CmacsTreeSelectComponent.prototype.maxTagPlaceholder;
    /** @type {?} */
    CmacsTreeSelectComponent.prototype.openChange;
    /** @type {?} */
    CmacsTreeSelectComponent.prototype.cleared;
    /** @type {?} */
    CmacsTreeSelectComponent.prototype.removed;
    /** @type {?} */
    CmacsTreeSelectComponent.prototype.expandChange;
    /** @type {?} */
    CmacsTreeSelectComponent.prototype.treeClick;
    /** @type {?} */
    CmacsTreeSelectComponent.prototype.treeCheckBoxChange;
    /** @type {?} */
    CmacsTreeSelectComponent.prototype.onaddchild;
    /** @type {?} */
    CmacsTreeSelectComponent.prototype.onaddparent;
    /** @type {?} */
    CmacsTreeSelectComponent.prototype.inputElement;
    /** @type {?} */
    CmacsTreeSelectComponent.prototype.treeRef;
    /** @type {?} */
    CmacsTreeSelectComponent.prototype.cdkOverlayOrigin;
    /** @type {?} */
    CmacsTreeSelectComponent.prototype.cdkConnectedOverlay;
    /** @type {?} */
    CmacsTreeSelectComponent.prototype.triggerWidth;
    /** @type {?} */
    CmacsTreeSelectComponent.prototype.isComposing;
    /** @type {?} */
    CmacsTreeSelectComponent.prototype.isDestroy;
    /** @type {?} */
    CmacsTreeSelectComponent.prototype.isNotFound;
    /** @type {?} */
    CmacsTreeSelectComponent.prototype.inputValue;
    /** @type {?} */
    CmacsTreeSelectComponent.prototype.dropDownPosition;
    /** @type {?} */
    CmacsTreeSelectComponent.prototype.selectionChangeSubscription;
    /** @type {?} */
    CmacsTreeSelectComponent.prototype.selectedNodes;
    /** @type {?} */
    CmacsTreeSelectComponent.prototype.value;
    /** @type {?} */
    CmacsTreeSelectComponent.prototype.onChange;
    /** @type {?} */
    CmacsTreeSelectComponent.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    CmacsTreeSelectComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    CmacsTreeSelectComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    CmacsTreeSelectComponent.prototype.elementRef;
    /** @type {?} */
    CmacsTreeSelectComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdHJlZS1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy10cmVlLXNlbGVjdC9jbWFjcy10cmVlLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixFQUFrQyxNQUFNLHNCQUFzQixDQUFDO0FBQzdHLE9BQU8sRUFDTCxVQUFVLEVBQ1YsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLElBQUksRUFDSixRQUFRLEVBQ1IsS0FBSyxFQUlMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULElBQUksRUFFSixXQUFXLEVBQ1gsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsSUFBSSxZQUFZLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUNMLFFBQVEsRUFDUixXQUFXLEVBQ1gsVUFBVSxFQUNWLFlBQVksRUFFWixzQkFBc0IsRUFFdEIsVUFBVSxFQUVWLDZCQUE2QixFQUc5QixNQUFNLG9CQUFvQixDQUFDO0FBRzVCLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLG9DQUFvQyxDQUFDOzs7OztBQUV0RSxNQUFNLFVBQVUseUJBQXlCLENBQUMsUUFBa0I7SUFDMUQsT0FBTyxRQUFRLENBQUMsR0FBRyxD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fSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5pbXBvcnQgeyBDZGtDb25uZWN0ZWRPdmVybGF5LCBDZGtPdmVybGF5T3JpZ2luLCBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7XHJcbiAgZm9yd2FyZFJlZixcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdCxcclxuICBJbmplY3RvcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNlbGYsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgbWVyZ2UsIG9mIGFzIG9ic2VydmFibGVPZiwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbHRlciwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBpc05vdE5pbCxcclxuICBzbGlkZU1vdGlvbixcclxuICB6b29tTW90aW9uLFxyXG4gIElucHV0Qm9vbGVhbixcclxuICBOekZvcm1hdEVtaXRFdmVudCxcclxuICBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLFxyXG4gIE56U2l6ZUxEU1R5cGUsXHJcbiAgTnpUcmVlQmFzZSxcclxuICBOelRyZWVCYXNlU2VydmljZSxcclxuICBOelRyZWVIaWdoZXJPcmRlclNlcnZpY2VUb2tlbixcclxuICBOelRyZWVOb2RlLFxyXG4gIE56VHJlZU5vZGVPcHRpb25zXHJcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpUcmVlQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC90cmVlJztcclxuXHJcbmltcG9ydCB7IENtYWNzVHJlZVNlbGVjdFNlcnZpY2UgfSBmcm9tICcuL2NtYWNzLXRyZWUtc2VsZWN0LnNlcnZpY2UnO1xyXG5pbXBvcnQge0NtYWNzVHJlZUNvbXBvbmVudH0gZnJvbSBcIi4uL2NtYWNzLXRyZWUvY21hY3MtdHJlZS5jb21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoaWdoZXJPcmRlclNlcnZpY2VGYWN0b3J5KGluamVjdG9yOiBJbmplY3Rvcik6IE56VHJlZUJhc2VTZXJ2aWNlIHtcclxuICByZXR1cm4gaW5qZWN0b3IuZ2V0KENtYWNzVHJlZVNlbGVjdFNlcnZpY2UpO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLXRyZWUtc2VsZWN0JyxcclxuICBleHBvcnRBczogJ2NtYWNzVHJlZVNlbGVjdCcsXHJcbiAgYW5pbWF0aW9uczogW3NsaWRlTW90aW9uLCB6b29tTW90aW9uXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtdHJlZS1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXRyZWUtc2VsZWN0LmNvbXBvbmVudC5jc3MnXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIENtYWNzVHJlZVNlbGVjdFNlcnZpY2UsXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE56VHJlZUhpZ2hlck9yZGVyU2VydmljZVRva2VuLFxyXG4gICAgICB1c2VGYWN0b3J5OiBoaWdoZXJPcmRlclNlcnZpY2VGYWN0b3J5LFxyXG4gICAgICBkZXBzOiBbW25ldyBTZWxmKCksIEluamVjdG9yXV1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDbWFjc1RyZWVTZWxlY3RDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF0sXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWxnXSc6ICdzaXplPT09XCJsYXJnZVwiJyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1zbV0nOiAnc2l6ZT09PVwic21hbGxcIicsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZW5hYmxlZF0nOiAnIWRpc2FibGVkJyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1kaXNhYmxlZF0nOiAnZGlzYWJsZWQnLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWFsbG93LWNsZWFyXSc6ICdhbGxvd0NsZWFyJyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1vcGVuXSc6ICdvcGVuJyxcclxuICAgICcoY2xpY2spJzogJ3RyaWdnZXIoKSdcclxuICB9LFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICAuYW50LXNlbGVjdC1kcm9wZG93biB7XHJcbiAgICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGNtYWNzLXRyZWUtc2VsZWN0IHtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NUcmVlU2VsZWN0Q29tcG9uZW50IGV4dGVuZHMgTnpUcmVlQmFzZSBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYWxsb3dDbGVhciA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dFeHBhbmQgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93TGluZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGV4cGFuZGVkSWNvbjogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56VHJlZU5vZGUgfT47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aCA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNoZWNrYWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93U2VhcmNoID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGFzeW5jRGF0YSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBtdWx0aXBsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkZWZhdWx0RXhwYW5kQWxsID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNtYWNzT3BlbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBpbmxpbmVFZGl0ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHJhZGlvID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbm90Rm91bmRDb250ZW50OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbm9kZXM6IEFycmF5PE56VHJlZU5vZGUgfCBOelRyZWVOb2RlT3B0aW9ucz4gPSBbXTtcclxuICBASW5wdXQoKSBvcGVuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2l6ZTogTnpTaXplTERTVHlwZSA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBwbGFjZUhvbGRlciA9ICcnO1xyXG4gIEBJbnB1dCgpIGRyb3Bkb3duU3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbiAgQElucHV0KCkgZGVmYXVsdEV4cGFuZGVkS2V5czogc3RyaW5nW10gPSBbXTtcclxuICBASW5wdXQoKSBkaXNwbGF5V2l0aDogKG5vZGU6IE56VHJlZU5vZGUpID0+IHN0cmluZyB8IHVuZGVmaW5lZCA9IChub2RlOiBOelRyZWVOb2RlKSA9PiBub2RlLnRpdGxlO1xyXG4gIEBJbnB1dCgpIG1heFRhZ0NvdW50OiBudW1iZXI7XHJcbiAgQElucHV0KCkgbWF4VGFnUGxhY2Vob2xkZXI6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelRyZWVOb2RlW10gfT47XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNsZWFyZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHJlbW92ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPE56VHJlZU5vZGU+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGV4cGFuZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHRyZWVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHRyZWVDaGVja0JveENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIG9uYWRkY2hpbGQ6IEV2ZW50RW1pdHRlcjxOelRyZWVOb2RlPiA9IG5ldyBFdmVudEVtaXR0ZXI8TnpUcmVlTm9kZT4oKTtcclxuICBAT3V0cHV0KCkgb25hZGRwYXJlbnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcpIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCd0cmVlUmVmJykgdHJlZVJlZjogQ21hY3NUcmVlQ29tcG9uZW50O1xyXG4gIEBWaWV3Q2hpbGQoQ2RrT3ZlcmxheU9yaWdpbikgY2RrT3ZlcmxheU9yaWdpbjogQ2RrT3ZlcmxheU9yaWdpbjtcclxuICBAVmlld0NoaWxkKENka0Nvbm5lY3RlZE92ZXJsYXkpIGNka0Nvbm5lY3RlZE92ZXJsYXk6IENka0Nvbm5lY3RlZE92ZXJsYXk7XHJcblxyXG4gIHRyaWdnZXJXaWR0aDogbnVtYmVyO1xyXG4gIGlzQ29tcG9zaW5nID0gZmFsc2U7XHJcbiAgaXNEZXN0cm95ID0gdHJ1ZTtcclxuICBpc05vdEZvdW5kID0gZmFsc2U7XHJcbiAgaW5wdXRWYWx1ZSA9ICcnO1xyXG4gIGRyb3BEb3duUG9zaXRpb246ICd0b3AnIHwgJ2NlbnRlcicgfCAnYm90dG9tJyA9ICdib3R0b20nO1xyXG4gIHNlbGVjdGlvbkNoYW5nZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIHNlbGVjdGVkTm9kZXM6IE56VHJlZU5vZGVbXSA9IFtdO1xyXG4gIHZhbHVlOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmdbXSB8IHN0cmluZyB8IG51bGwpID0+IHZvaWQ7XHJcbiAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcclxuXHJcbiAgb25hZGRwYXJlbnRldnQoJGV2ZW50OiBFdmVudCkge1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLm9uYWRkcGFyZW50LmVtaXQoKTtcclxuICB9XHJcblxyXG4gIGFkZFBhcmVudChub2RlOiBhbnkpIHtcclxuICAgIHRoaXMudHJlZVJlZi5hZGRQYXJlbnQobm9kZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgcGxhY2VIb2xkZXJEaXNwbGF5KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnB1dFZhbHVlIHx8IHRoaXMuaXNDb21wb3NpbmcgfHwgdGhpcy5zZWxlY3RlZE5vZGVzLmxlbmd0aCA/ICdub25lJyA6ICdibG9jayc7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VhcmNoRGlzcGxheSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMub3BlbiA/ICdibG9jaycgOiAnbm9uZSc7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNNdWx0aXBsZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm11bHRpcGxlIHx8IHRoaXMuY2hlY2thYmxlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNlbGVjdGVkVmFsdWVEaXNwbGF5KCk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xyXG4gICAgbGV0IHNob3dTZWxlY3RlZFZhbHVlID0gZmFsc2U7XHJcbiAgICBsZXQgb3BhY2l0eSA9IDE7XHJcbiAgICBpZiAoIXRoaXMuc2hvd1NlYXJjaCkge1xyXG4gICAgICBzaG93U2VsZWN0ZWRWYWx1ZSA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5vcGVuKSB7XHJcbiAgICAgICAgc2hvd1NlbGVjdGVkVmFsdWUgPSAhKHRoaXMuaW5wdXRWYWx1ZSB8fCB0aGlzLmlzQ29tcG9zaW5nKTtcclxuICAgICAgICBpZiAoc2hvd1NlbGVjdGVkVmFsdWUpIHtcclxuICAgICAgICAgIG9wYWNpdHkgPSAwLjQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNob3dTZWxlY3RlZFZhbHVlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGlzcGxheTogc2hvd1NlbGVjdGVkVmFsdWUgPyAnYmxvY2snIDogJ25vbmUnLFxyXG4gICAgICBvcGFjaXR5OiBgJHtvcGFjaXR5fWBcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIG56VHJlZVNlcnZpY2U6IENtYWNzVHJlZVNlbGVjdFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHtcclxuICAgIHN1cGVyKG56VHJlZVNlcnZpY2UpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1zZWxlY3QnKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0Rlc3Ryb3kgPSBmYWxzZTtcclxuICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uID0gdGhpcy5zdWJzY3JpYmVTZWxlY3Rpb25DaGFuZ2UoKTtcclxuICAgIGlmICh0aGlzLmlubGluZUVkaXQpIHtcclxuICAgICAgdGhpcy5zaG93RXhwYW5kID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuZGVmYXVsdEV4cGFuZEFsbCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBpZiAodGhpcy5pbmxpbmVFZGl0ICYmIHRoaXMudHJlZVJlZikge1xyXG4gICAgICB0aGlzLnRyZWVSZWYuc2VhcmNoVmFsdWUgPSAnJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uYWRkY2hpbGRldnQoJGV2ZW50OiBOelRyZWVOb2RlKSAge1xyXG4gICAgdGhpcy5vbmFkZGNoaWxkLmVtaXQoJGV2ZW50KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0Rlc3Ryb3kgPSB0cnVlO1xyXG4gICAgdGhpcy5jbG9zZURyb3BEb3duKCk7XHJcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICAgIHRoaXMuY2xvc2VEcm9wRG93bigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ256Tm9kZXMnKSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkTm9kZXModHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmdbXSB8IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xyXG4gICAgICBpZiAodGhpcy5pc011bHRpcGxlICYmIEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBbdmFsdWUgYXMgc3RyaW5nXTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkTm9kZXModHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnZhbHVlID0gW107XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWROb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlU2VsZWN0ZWQobm9kZSwgZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5zZWxlY3RlZE5vZGVzID0gW107XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBzdHJpbmdbXSB8IHN0cmluZyB8IG51bGwpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgdHJpZ2dlcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRpc2FibGVkIHx8ICghdGhpcy5kaXNhYmxlZCAmJiB0aGlzLm9wZW4pKSB7XHJcbiAgICAgIHRoaXMuY2xvc2VEcm9wRG93bigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5vcGVuRHJvcGRvd24oKTtcclxuICAgICAgaWYgKHRoaXMuc2hvd1NlYXJjaCB8fCB0aGlzLmlzTXVsdGlwbGUpIHtcclxuICAgICAgICB0aGlzLmZvY3VzT25JbnB1dCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvcGVuRHJvcGRvd24oKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5vcGVuID0gdHJ1ZTtcclxuICAgICAgdGhpcy5vcGVuQ2hhbmdlLmVtaXQodGhpcy5vcGVuKTtcclxuICAgICAgdGhpcy51cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5U3RhdHVzKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsb3NlRHJvcERvd24oKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xyXG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XHJcbiAgICB0aGlzLm9wZW5DaGFuZ2UuZW1pdCh0aGlzLm9wZW4pO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBvbktleURvd25JbnB1dChlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBrZXlDb2RlID0gZS5rZXlDb2RlO1xyXG4gICAgY29uc3QgZXZlbnRUYXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgaWYgKHRoaXMuaXNNdWx0aXBsZSAmJiAhZXZlbnRUYXJnZXQudmFsdWUgJiYga2V5Q29kZSA9PT0gQkFDS1NQQUNFKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWROb2Rlcy5sZW5ndGgpIHtcclxuICAgICAgICBjb25zdCByZW1vdmVOb2RlID0gdGhpcy5zZWxlY3RlZE5vZGVzW3RoaXMuc2VsZWN0ZWROb2Rlcy5sZW5ndGggLSAxXTtcclxuICAgICAgICB0aGlzLnJlbW92ZVNlbGVjdGVkKHJlbW92ZU5vZGUpO1xyXG4gICAgICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dCh7XHJcbiAgICAgICAgICBldmVudE5hbWU6ICdyZW1vdmVTZWxlY3QnLFxyXG4gICAgICAgICAgbm9kZTogcmVtb3ZlTm9kZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmlubGluZUVkaXQpIHtcclxuICAgICAgICB0aGlzLnRyZWVSZWYuc2VhcmNoVmFsdWUgPSAnJztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25FeHBhbmRlZEtleXNDaGFuZ2UodmFsdWU6IE56Rm9ybWF0RW1pdEV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmV4cGFuZENoYW5nZS5lbWl0KHZhbHVlKTtcclxuICAgIHRoaXMuZGVmYXVsdEV4cGFuZGVkS2V5cyA9IFsuLi52YWx1ZS5rZXlzIV07XHJcbiAgfVxyXG5cclxuICBzZXRJbnB1dFZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy51cGRhdGVJbnB1dFdpZHRoKCk7XHJcbiAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVTZWxlY3RlZChub2RlOiBOelRyZWVOb2RlLCBlbWl0OiBib29sZWFuID0gdHJ1ZSwgZXZlbnQ/OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBub2RlLmlzU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgIG5vZGUuaXNDaGVja2VkID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy5jaGVja2FibGUpIHtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNvbmR1Y3Qobm9kZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2Uuc2V0U2VsZWN0ZWROb2RlTGlzdChub2RlLCB0aGlzLm11bHRpcGxlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZW1pdCkge1xyXG4gICAgICB0aGlzLnJlbW92ZWQuZW1pdChub2RlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEbyBub3QgdHJpZ2dlciB0aGUgcG9wdXBcclxuICAgIGlmIChldmVudCAmJiBldmVudC5zdG9wUHJvcGFnYXRpb24pIHtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb2N1c09uSW5wdXQoKTogdm9pZCB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN1YnNjcmliZVNlbGVjdGlvbkNoYW5nZSgpOiBTdWJzY3JpcHRpb24ge1xyXG4gICAgcmV0dXJuIG1lcmdlKFxyXG4gICAgICB0aGlzLnRyZWVDbGljay5waXBlKFxyXG4gICAgICAgIHRhcCgoZXZlbnQ6IE56Rm9ybWF0RW1pdEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBub2RlID0gZXZlbnQubm9kZSE7XHJcbiAgICAgICAgICBpZiAodGhpcy5yYWRpbyAgJiYgdGhpcy5jaGVja2FibGUpIHtcclxuICAgICAgICAgICAgY29uc3Qgbm9kZXMgPSB0aGlzLmNvZXJjZVRyZWVOb2Rlcyh0aGlzLm5vZGVzKTtcclxuICAgICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNhbGNDaGVja2VkS2V5cyhbXSwgbm9kZXMsIHRydWUpO1xyXG4gICAgICAgICAgICBub2RlLmlzQ2hlY2tlZCA9ICFub2RlLmlzQ2hlY2tlZDtcclxuICAgICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNhbGNDaGVja2VkS2V5cyhbbm9kZS5rZXldLCBub2RlcywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0ZWROb2RlcygpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNoZWNrYWJsZSAmJiAhbm9kZS5pc0Rpc2FibGVkICYmICFub2RlLmlzRGlzYWJsZUNoZWNrYm94KSB7XHJcbiAgICAgICAgICAgIG5vZGUuaXNDaGVja2VkID0gIW5vZGUuaXNDaGVja2VkO1xyXG4gICAgICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UuY29uZHVjdChub2RlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh0aGlzLmNoZWNrYWJsZSkge1xyXG4gICAgICAgICAgICBub2RlLmlzU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICBmaWx0ZXIoKGV2ZW50OiBOekZvcm1hdEVtaXRFdmVudCkgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgbm9kZSA9IGV2ZW50Lm5vZGUhO1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2thYmxlID8gIW5vZGUuaXNEaXNhYmxlZCAmJiAhbm9kZS5pc0Rpc2FibGVDaGVja2JveCA6ICFub2RlLmlzRGlzYWJsZWQ7XHJcbiAgICAgICAgfSlcclxuICAgICAgKSxcclxuICAgICAgdGhpcy5jaGVja2FibGUgPyB0aGlzLnRyZWVDaGVja0JveENoYW5nZSA6IG9ic2VydmFibGVPZigpLFxyXG4gICAgICB0aGlzLmNsZWFyZWQsXHJcbiAgICAgIHRoaXMucmVtb3ZlZFxyXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkTm9kZXMoKTtcclxuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNlbGVjdGVkTm9kZXMubWFwKG5vZGUgPT4gbm9kZS5rZXkhKTtcclxuICAgICAgdGhpcy52YWx1ZSA9IFsuLi52YWx1ZV07XHJcbiAgICAgIGlmICh0aGlzLnNob3dTZWFyY2ggfHwgdGhpcy5pc011bHRpcGxlKSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gJyc7XHJcbiAgICAgICAgdGhpcy5pc05vdEZvdW5kID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuaXNNdWx0aXBsZSkge1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xyXG4gICAgICAgIHRoaXMuZm9jdXNPbklucHV0KCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY2xvc2VEcm9wRG93bigpO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUubGVuZ3RoID8gdmFsdWVbMF0gOiBudWxsKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTZWxlY3RlZE5vZGVzKGluaXQ6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgaWYgKGluaXQpIHtcclxuICAgICAgY29uc3Qgbm9kZXMgPSB0aGlzLmNvZXJjZVRyZWVOb2Rlcyh0aGlzLm5vZGVzKTtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmlzTXVsdGlwbGUgPSB0aGlzLmlzTXVsdGlwbGU7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5pbml0VHJlZShub2Rlcyk7XHJcbiAgICAgIGlmICh0aGlzLmNoZWNrYWJsZSAmJiAhdGhpcy5yYWRpbykge1xyXG4gICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jYWxjQ2hlY2tlZEtleXModGhpcy52YWx1ZSwgbm9kZXMpO1xyXG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLnJhZGlvKSB7XHJcbiAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNhbGNTZWxlY3RlZEtleXModGhpcy52YWx1ZSwgbm9kZXMsIHRoaXMuaXNNdWx0aXBsZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNhbGNDaGVja2VkS2V5cyh0aGlzLnZhbHVlLCBub2RlcywgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jaGVja2FibGUgJiYgIXRoaXMucmFkaW8pIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZE5vZGVzID0gWy4uLnRoaXMuZ2V0Q2hlY2tlZE5vZGVMaXN0KCldO1xyXG4gICAgfSBlbHNlIGlmICghdGhpcy5yYWRpbykge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkTm9kZXMgPSBbLi4udGhpcy5nZXRTZWxlY3RlZE5vZGVMaXN0KCldO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZE5vZGVzID0gWy4uLnRoaXMuZ2V0Q2hlY2tlZE5vZGVMaXN0KCldO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlUG9zaXRpb24oKTogdm9pZCB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheSAmJiB0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkub3ZlcmxheVJlZikge1xyXG4gICAgICAgIHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5vdmVybGF5UmVmLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25Qb3NpdGlvbkNoYW5nZShwb3NpdGlvbjogQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlKTogdm9pZCB7XHJcbiAgICB0aGlzLmRyb3BEb3duUG9zaXRpb24gPSBwb3NpdGlvbi5jb25uZWN0aW9uUGFpci5vcmlnaW5ZO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlSW5wdXRXaWR0aCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzTXVsdGlwbGUgJiYgdGhpcy5pbnB1dEVsZW1lbnQpIHtcclxuICAgICAgaWYgKHRoaXMuaW5wdXRWYWx1ZSB8fCB0aGlzLmlzQ29tcG9zaW5nKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcclxuICAgICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgICAnd2lkdGgnLFxyXG4gICAgICAgICAgYCR7dGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxXaWR0aH1weGBcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3dpZHRoJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2xlYXJTZWxlY3Rpb24oJGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuc2VsZWN0ZWROb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xyXG4gICAgICB0aGlzLnJlbW92ZVNlbGVjdGVkKG5vZGUsIGZhbHNlKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jbGVhcmVkLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIHNldFNlYXJjaFZhbHVlcygkZXZlbnQ6IE56Rm9ybWF0RW1pdEV2ZW50KTogdm9pZCB7XHJcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcclxuICAgICAgdGhpcy5pc05vdEZvdW5kID0gKHRoaXMuc2hvd1NlYXJjaCB8fCB0aGlzLmlzTXVsdGlwbGUpICYmICEhdGhpcy5pbnB1dFZhbHVlICYmICRldmVudC5tYXRjaGVkS2V5cyEubGVuZ3RoID09PSAwO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5U3RhdHVzKCk6IHZvaWQge1xyXG4gICAgdGhpcy50cmlnZ2VyV2lkdGggPSB0aGlzLmNka092ZXJsYXlPcmlnaW4uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG4gIH1cclxuXHJcbiAgdHJhY2tWYWx1ZShfaW5kZXg6IG51bWJlciwgb3B0aW9uOiBOelRyZWVOb2RlKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBvcHRpb24ua2V5ITtcclxuICB9XHJcbn1cclxuIl19