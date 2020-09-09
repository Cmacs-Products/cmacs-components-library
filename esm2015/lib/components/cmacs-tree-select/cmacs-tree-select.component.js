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
        }
        if (this.checkable && this.cmacsOpen) {
            this.defaultExpandAll = true;
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.cmacsOpen && this.treeRef) {
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
        if (changes.hasOwnProperty('nodes')) {
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
            if (this.cmacsOpen) {
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
                template: "<ng-template #inputTemplate>\r\n  <input\r\n    #inputElement\r\n    autocomplete=\"off\"\r\n    class=\"ant-select-search__field\"\r\n    [class.no-margin-left]=\"selectedNodes.length\"\r\n    (compositionstart)=\"isComposing = true\"\r\n    (compositionend)=\"isComposing = false\"\r\n    (keydown)=\"onKeyDownInput($event)\"\r\n    [ngModel]=\"inputValue\"\r\n    (ngModelChange)=\"setInputValue($event)\"\r\n    [disabled]=\"disabled\">\r\n</ng-template>\r\n\r\n<ng-template *ngIf=\"!cmacsOpen\"\r\n  cdkConnectedOverlay\r\n  nzConnectedOverlay\r\n  [cdkConnectedOverlayOrigin]=\"cdkOverlayOrigin\"\r\n  [cdkConnectedOverlayOpen]=\"open\"\r\n  [cdkConnectedOverlayHasBackdrop]=\"true\"\r\n  [cdkConnectedOverlayMinWidth]=\"dropdownMatchSelectWidth? null : triggerWidth\"\r\n  [cdkConnectedOverlayWidth]=\"dropdownMatchSelectWidth? triggerWidth : null\"\r\n  (backdropClick)=\"closeDropDown()\"\r\n  (detach)=\"closeDropDown()\"\r\n  (positionChange)=\"onPositionChange($event)\">\r\n  <ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n</ng-template>\r\n\r\n<div\r\n  cdkOverlayOrigin\r\n  class=\"ant-select-selection\"\r\n  [class.ant-select-selection--single]=\"!isMultiple\"\r\n  [class.ant-select-selection--multiple]=\"isMultiple\"\r\n  tabindex=\"0\">\r\n  <span class=\"ant-select-selection__clear cmacs-tree-select-search-icon\">\r\n    <i class=\"iconCreation-Search ant-select-clear-icon\"></i>\r\n  </span>\r\n  <ng-container *ngIf=\"!isMultiple\">\r\n    <div class=\"ant-select-selection__rendered\">\r\n      <div\r\n        *ngIf=\"placeHolder && selectedNodes.length === 0\"\r\n        [style.display]=\"placeHolderDisplay\"\r\n        class=\"ant-select-selection__placeholder\">\r\n        {{ placeHolder }}\r\n      </div>\r\n\r\n      <div\r\n        *ngIf=\"selectedNodes.length === 1\"\r\n        class=\"ant-select-selection-selected-value\"\r\n        [attr.title]=\"displayWith(selectedNodes[0])\"\r\n        [ngStyle]=\"selectedValueDisplay\">\r\n        {{ displayWith(selectedNodes[0]) }}\r\n      </div>\r\n\r\n      <div\r\n        *ngIf=\"showSearch\"\r\n        [style.display]=\"searchDisplay\"\r\n        class=\"ant-select-search ant-select-search--inline\">\r\n        <div class=\"ant-select-search__field__wrap\">\r\n          <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\r\n          <span class=\"ant-select-search__field__mirror\">{{inputValue}}&nbsp;</span>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"isMultiple\">\r\n    <ul class=\"cmacs-tree-select-ul ant-select-selection__rendered\">\r\n      <div\r\n        *ngIf=\"placeHolder && selectedNodes.length === 0\"\r\n        [style.display]=\"placeHolderDisplay\"\r\n        class=\"ant-select-selection__placeholder\">\r\n        {{ placeHolder }}\r\n      </div>\r\n      <ng-container *ngFor=\"let node of selectedNodes | slice: 0 : maxTagCount; trackBy:trackValue\">\r\n        <li\r\n          [@zoomMotion]\r\n          [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n          [attr.title]=\"displayWith(node)\"\r\n          [class.ant-select-selection__choice__disabled]=\"node.isDisabled\"\r\n          class=\"ant-select-selection__choice\">\r\n               <span *ngIf=\"!node.isDisabled\" class=\"ant-select-selection__choice__remove\"\r\n                 (mousedown)=\"$event.preventDefault()\"\r\n                 (click)=\"removeSelected(node, true, $event)\">\r\n                 <i nz-icon type=\"close\" class=\"ant-select-remove-icon\"></i>\r\n               </span>\r\n          <span class=\"ant-select-selection__choice__content\">{{ displayWith(node) }}</span>\r\n        </li>\r\n      </ng-container>\r\n      <li [@zoomMotion]\r\n        *ngIf=\"selectedNodes.length > maxTagCount\"\r\n        class=\"ant-select-selection__choice\">\r\n        <div class=\"ant-select-selection__choice__content\">\r\n          <ng-container *ngIf=\"maxTagPlaceholder\">\r\n            <ng-template\r\n              [ngTemplateOutlet]=\"maxTagPlaceholder\"\r\n              [ngTemplateOutletContext]=\"{ $implicit: selectedNodes | slice: maxTagCount}\">\r\n            </ng-template>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"!maxTagPlaceholder\">\r\n            + {{ selectedNodes.length - maxTagCount }} ...\r\n          </ng-container>\r\n        </div>\r\n      </li>\r\n      <li class=\"ant-select-search ant-select-search--inline\">\r\n        <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\r\n      </li>\r\n    </ul>\r\n  </ng-container>\r\n  <span *ngIf=\"allowClear && selectedNodes.length\" class=\"ant-select-selection__clear\"\r\n    (mousedown)=\"$event.preventDefault()\"\r\n    (click)=\"onClearSelection($event)\">\r\n    <i nz-icon type=\"close-circle\" class=\"ant-select-clear-icon\" theme=\"fill\"></i>\r\n  </span>\r\n  <div class=\"ant-select-selection__clear cmacs-tree-select-arrow\">\r\n    <i class=\"ant-select-clear-icon iconArrowLarge-Arrow-Right\" [class.cmacs-selected-nodes]=\"selectedNodes.length\"></i>\r\n  </div>\r\n  <span *ngIf=\"!isMultiple\" class=\"ant-select-arrow\">\r\n    <i nz-icon type=\"down\" class=\"ant-select-arrow-icon\"></i>\r\n  </span>\r\n</div>\r\n<ng-container *ngIf=\"cmacsOpen\">\r\n  <ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n</ng-container>\r\n\r\n<ng-template #content>\r\n  <div class=\"ant-select-dropdown ant-select-tree-dropdown cmacs-tree-select-dropdown cmacs-custom-scrollbar\"\r\n       [@slideMotion]=\"!cmacsOpen && open ? dropDownPosition : 'void'\"\r\n       [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n       [class.ant-select-dropdown--single]=\"!multiple\"\r\n       [class.ant-select-dropdown--multiple]=\"multiple\"\r\n       [class.ant-select-dropdown-placement-bottomLeft]=\"dropDownPosition === 'bottom'\"\r\n       [class.ant-select-dropdown-placement-topLeft]=\"dropDownPosition === 'top'\"\r\n       [ngStyle]=\"dropdownStyle\">\r\n    <cmacs-tree\r\n      #treeRef\r\n      nzNoAnimation\r\n      [selectMode]=\"true\"\r\n      [nzData]=\"nodes\"\r\n      [inlineEdit]=\"inlineEdit\"\r\n      [nzMultiple]=\"multiple\"\r\n      [searchValue]=\"inputValue\"\r\n      [checkable]=\"checkable\"\r\n      [radio]=\"radio\"\r\n      [asyncData]=\"asyncData\"\r\n      [showExpand]=\"showExpand\"\r\n      [showLine]=\"showLine\"\r\n      [expandedIcon]=\"expandedIcon\"\r\n      [nzBlockNode]=\"true\"\r\n      [expandAll]=\"defaultExpandAll\"\r\n      [nzExpandedKeys]=\"defaultExpandedKeys\"\r\n      [nzCheckedKeys]=\"checkable ? value : []\"\r\n      [nzSelectedKeys]=\"!checkable ? value : []\"\r\n      (nzExpandChange)=\"onExpandedKeysChange($event)\"\r\n      (nzClick)=\"treeClick.emit($event)\"\r\n      (nzCheckedKeysChange)=\"updateSelectedNodes()\"\r\n      (nzSelectedKeysChange)=\"updateSelectedNodes()\"\r\n      (nzCheckBoxChange)=\"treeCheckBoxChange.emit($event)\"\r\n      (searchValueChange)=\"setSearchValues($event)\"\r\n      (onaddchild)=\"onaddchildevt($event)\"\r\n    >\r\n    </cmacs-tree>\r\n    <!--<span *ngIf=\"nodes.length === 0 || isNotFound\" class=\"ant-select-not-found\">\r\n      <nz-embed-empty [nzComponentName]=\"'tree-select'\" [specificContent]=\"notFoundContent\"></nz-embed-empty>\r\n    </span>-->\r\n    <ng-container *ngIf=\"inlineEdit\">\r\n      <div class=\"cmacs-add-new-category\">\r\n        <i class=\"iconUILarge-New cmacs-select-tree-new-icon\"\r\n           (click)=\"onaddparentevt($event)\"></i>\r\n        <span class=\"cmacs-add-new-category-title\">New Category</span>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n</ng-template>\r\n",
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
                    '[class.ant-select-open]': 'open && !cmacsOpen',
                    '(click)': 'trigger()'
                },
                styles: [".cmacs-tree-select-dropdown{box-shadow:none;border-bottom:1px solid #dee0e5;border-right:1px solid #dee0e5;border-left:1px solid #dee0e5;border-radius:0 0 3px 3px;z-index:unset}:host ::ng-deep .ant-select-selection,:host ::ng-deep .ant-select-selection:focus,:host ::ng-deep .ant-select-selection:hover{border:1px solid #dee0e5;border-radius:3px 3px 0 0}.cmacs-tree-select-search-icon{left:11px;right:unset;z-index:unset;opacity:1!important;font-size:16px;top:14px}:host ::ng-deep .ant-select-selection--multiple .ant-select-selection__placeholder{margin-left:29px}.ant-select-selection__clear{right:14px}.cmacs-tree-select-arrow{z-index:unset;opacity:1!important;font-size:29px;top:7px;right:30px}.cmacs-tree-select-arrow:hover{cursor:pointer}.cmacs-tree-select-arrow i{border-left:1px solid #dee0e5;padding:0 5px;font-size:26px;top:-13px;position:relative}.cmacs-tree-select-arrow i:before{top:2px;position:relative}.ant-select-selection--multiple .ant-select-search--inline .ant-select-search__field{padding-left:0}.ant-select-selection:hover .cmacs-selected-nodes.iconArrowLarge-Arrow-Right:before{opacity:0}.cmacs-add-new-category{font-weight:400;font-style:normal;font-stretch:normal;line-height:1.67;letter-spacing:normal;color:#656c79;font-size:12px;font-family:Roboto-Regular;padding:5px 0 6px 10px;border-top:1px solid #dee0e5}.cmacs-add-new-category:hover{background-color:#f6f7fb}.cmacs-add-new-category-title{padding:3px 5px}.cmacs-select-tree-new-icon{color:#acb3bf;font-size:16px;top:2px;position:relative}.cmacs-select-tree-new-icon:hover{cursor:pointer}.no-margin-left{margin-left:0!important}::ng-deep .ant-select-selection--multiple .cmacs-tree-select-ul .ant-select-search--inline .ant-select-search__field{max-width:84%;margin-left:28px}", `
      .ant-select-dropdown {
        top: 100%;
        left: 0;
        position: relative;
        width: 100%;
        margin-top: 4px;
        margin-bottom: 4px;
        overflow: auto;
        scrollbar-color: #cfd3d9 #ffffff;
        scrollbar-width: thin;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdHJlZS1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy10cmVlLXNlbGVjdC9jbWFjcy10cmVlLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixFQUFrQyxNQUFNLHNCQUFzQixDQUFDO0FBQzdHLE9BQU8sRUFDTCxVQUFVLEVBQ1YsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLElBQUksRUFDSixRQUFRLEVBQ1IsS0FBSyxFQUlMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULElBQUksRUFFSixXQUFXLEVBQ1gsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsSUFBSSxZQUFZLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUNMLFFBQVEsRUFDUixXQUFXLEVBQ1gsVUFBVSxFQUNWLFlBQVksRUFFWixzQkFBc0IsRUFFdEIsVUFBVSxFQUVWLDZCQUE2QixFQUc5QixNQUFNLG9CQUFvQixDQUFDO0FBRzVCLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLG9DQUFvQyxDQUFDOzs7OztBQUV0RSxNQUFNLFVBQVUseUJBQXlCLENBQUMsUUFBa0I7SUFDMUQsT0FBTyxRQUFRLENBQUMsR0FBRyxD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LDhDQUE4Qjs7SUFDOUIsK0NBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQkFDS1NQQUNFIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHsgQ2RrQ29ubmVjdGVkT3ZlcmxheSwgQ2RrT3ZlcmxheU9yaWdpbiwgQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQge1xyXG4gIGZvcndhcmRSZWYsXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3QsXHJcbiAgSW5qZWN0b3IsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTZWxmLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IG1lcmdlLCBvZiBhcyBvYnNlcnZhYmxlT2YsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgaXNOb3ROaWwsXHJcbiAgc2xpZGVNb3Rpb24sXHJcbiAgem9vbU1vdGlvbixcclxuICBJbnB1dEJvb2xlYW4sXHJcbiAgTnpGb3JtYXRFbWl0RXZlbnQsXHJcbiAgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSxcclxuICBOelNpemVMRFNUeXBlLFxyXG4gIE56VHJlZUJhc2UsXHJcbiAgTnpUcmVlQmFzZVNlcnZpY2UsXHJcbiAgTnpUcmVlSGlnaGVyT3JkZXJTZXJ2aWNlVG9rZW4sXHJcbiAgTnpUcmVlTm9kZSxcclxuICBOelRyZWVOb2RlT3B0aW9uc1xyXG59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56VHJlZUNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvdHJlZSc7XHJcblxyXG5pbXBvcnQgeyBDbWFjc1RyZWVTZWxlY3RTZXJ2aWNlIH0gZnJvbSAnLi9jbWFjcy10cmVlLXNlbGVjdC5zZXJ2aWNlJztcclxuaW1wb3J0IHtDbWFjc1RyZWVDb21wb25lbnR9IGZyb20gXCIuLi9jbWFjcy10cmVlL2NtYWNzLXRyZWUuY29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGlnaGVyT3JkZXJTZXJ2aWNlRmFjdG9yeShpbmplY3RvcjogSW5qZWN0b3IpOiBOelRyZWVCYXNlU2VydmljZSB7XHJcbiAgcmV0dXJuIGluamVjdG9yLmdldChDbWFjc1RyZWVTZWxlY3RTZXJ2aWNlKTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy10cmVlLXNlbGVjdCcsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1RyZWVTZWxlY3QnLFxyXG4gIGFuaW1hdGlvbnM6IFtzbGlkZU1vdGlvbiwgem9vbU1vdGlvbl0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXRyZWUtc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy10cmVlLXNlbGVjdC5jb21wb25lbnQuY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBDbWFjc1RyZWVTZWxlY3RTZXJ2aWNlLFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOelRyZWVIaWdoZXJPcmRlclNlcnZpY2VUb2tlbixcclxuICAgICAgdXNlRmFjdG9yeTogaGlnaGVyT3JkZXJTZXJ2aWNlRmFjdG9yeSxcclxuICAgICAgZGVwczogW1tuZXcgU2VsZigpLCBJbmplY3Rvcl1dXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ21hY3NUcmVlU2VsZWN0Q29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1sZ10nOiAnc2l6ZT09PVwibGFyZ2VcIicsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3Qtc21dJzogJ3NpemU9PT1cInNtYWxsXCInLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWVuYWJsZWRdJzogJyFkaXNhYmxlZCcsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZGlzYWJsZWRdJzogJ2Rpc2FibGVkJyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1hbGxvdy1jbGVhcl0nOiAnYWxsb3dDbGVhcicsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3Qtb3Blbl0nOiAnb3BlbiAmJiAhY21hY3NPcGVuJyxcclxuICAgICcoY2xpY2spJzogJ3RyaWdnZXIoKSdcclxuICB9LFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICAuYW50LXNlbGVjdC1kcm9wZG93biB7XHJcbiAgICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgc2Nyb2xsYmFyLWNvbG9yOiAjY2ZkM2Q5ICNmZmZmZmY7XHJcbiAgICAgICAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjbWFjcy10cmVlLXNlbGVjdCB7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzVHJlZVNlbGVjdENvbXBvbmVudCBleHRlbmRzIE56VHJlZUJhc2UgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGFsbG93Q2xlYXIgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93RXhwYW5kID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd0xpbmUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBleHBhbmRlZEljb246IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelRyZWVOb2RlIH0+O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGggPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjaGVja2FibGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1NlYXJjaCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhc3luY0RhdGEgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbXVsdGlwbGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGVmYXVsdEV4cGFuZEFsbCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjbWFjc09wZW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaW5saW5lRWRpdCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSByYWRpbyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG5vdEZvdW5kQ29udGVudDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG5vZGVzOiBBcnJheTxOelRyZWVOb2RlIHwgTnpUcmVlTm9kZU9wdGlvbnM+ID0gW107XHJcbiAgQElucHV0KCkgb3BlbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNpemU6IE56U2l6ZUxEU1R5cGUgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgcGxhY2VIb2xkZXIgPSAnJztcclxuICBASW5wdXQoKSBkcm9wZG93blN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG4gIEBJbnB1dCgpIGRlZmF1bHRFeHBhbmRlZEtleXM6IHN0cmluZ1tdID0gW107XHJcbiAgQElucHV0KCkgZGlzcGxheVdpdGg6IChub2RlOiBOelRyZWVOb2RlKSA9PiBzdHJpbmcgfCB1bmRlZmluZWQgPSAobm9kZTogTnpUcmVlTm9kZSkgPT4gbm9kZS50aXRsZTtcclxuICBASW5wdXQoKSBtYXhUYWdDb3VudDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG1heFRhZ1BsYWNlaG9sZGVyOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpUcmVlTm9kZVtdIH0+O1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBjbGVhcmVkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSByZW1vdmVkID0gbmV3IEV2ZW50RW1pdHRlcjxOelRyZWVOb2RlPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBleHBhbmRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSB0cmVlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSB0cmVlQ2hlY2tCb3hDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSBvbmFkZGNoaWxkOiBFdmVudEVtaXR0ZXI8TnpUcmVlTm9kZT4gPSBuZXcgRXZlbnRFbWl0dGVyPE56VHJlZU5vZGU+KCk7XHJcbiAgQE91dHB1dCgpIG9uYWRkcGFyZW50OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnKSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgndHJlZVJlZicpIHRyZWVSZWY6IENtYWNzVHJlZUNvbXBvbmVudDtcclxuICBAVmlld0NoaWxkKENka092ZXJsYXlPcmlnaW4pIGNka092ZXJsYXlPcmlnaW46IENka092ZXJsYXlPcmlnaW47XHJcbiAgQFZpZXdDaGlsZChDZGtDb25uZWN0ZWRPdmVybGF5KSBjZGtDb25uZWN0ZWRPdmVybGF5OiBDZGtDb25uZWN0ZWRPdmVybGF5O1xyXG5cclxuICB0cmlnZ2VyV2lkdGg6IG51bWJlcjtcclxuICBpc0NvbXBvc2luZyA9IGZhbHNlO1xyXG4gIGlzRGVzdHJveSA9IHRydWU7XHJcbiAgaXNOb3RGb3VuZCA9IGZhbHNlO1xyXG4gIGlucHV0VmFsdWUgPSAnJztcclxuICBkcm9wRG93blBvc2l0aW9uOiAndG9wJyB8ICdjZW50ZXInIHwgJ2JvdHRvbScgPSAnYm90dG9tJztcclxuICBzZWxlY3Rpb25DaGFuZ2VTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBzZWxlY3RlZE5vZGVzOiBOelRyZWVOb2RlW10gPSBbXTtcclxuICB2YWx1ZTogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nW10gfCBzdHJpbmcgfCBudWxsKSA9PiB2b2lkO1xyXG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IG51bGw7XHJcblxyXG4gIG9uYWRkcGFyZW50ZXZ0KCRldmVudDogRXZlbnQpIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5vbmFkZHBhcmVudC5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBhZGRQYXJlbnQobm9kZTogYW55KSB7XHJcbiAgICB0aGlzLnRyZWVSZWYuYWRkUGFyZW50KG5vZGUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBsYWNlSG9sZGVyRGlzcGxheSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5wdXRWYWx1ZSB8fCB0aGlzLmlzQ29tcG9zaW5nIHx8IHRoaXMuc2VsZWN0ZWROb2Rlcy5sZW5ndGggPyAnbm9uZScgOiAnYmxvY2snO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNlYXJjaERpc3BsYXkoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLm9wZW4gPyAnYmxvY2snIDogJ25vbmUnO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzTXVsdGlwbGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5tdWx0aXBsZSB8fCB0aGlzLmNoZWNrYWJsZTtcclxuICB9XHJcblxyXG4gIGdldCBzZWxlY3RlZFZhbHVlRGlzcGxheSgpOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcclxuICAgIGxldCBzaG93U2VsZWN0ZWRWYWx1ZSA9IGZhbHNlO1xyXG4gICAgbGV0IG9wYWNpdHkgPSAxO1xyXG4gICAgaWYgKCF0aGlzLnNob3dTZWFyY2gpIHtcclxuICAgICAgc2hvd1NlbGVjdGVkVmFsdWUgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMub3Blbikge1xyXG4gICAgICAgIHNob3dTZWxlY3RlZFZhbHVlID0gISh0aGlzLmlucHV0VmFsdWUgfHwgdGhpcy5pc0NvbXBvc2luZyk7XHJcbiAgICAgICAgaWYgKHNob3dTZWxlY3RlZFZhbHVlKSB7XHJcbiAgICAgICAgICBvcGFjaXR5ID0gMC40O1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzaG93U2VsZWN0ZWRWYWx1ZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRpc3BsYXk6IHNob3dTZWxlY3RlZFZhbHVlID8gJ2Jsb2NrJyA6ICdub25lJyxcclxuICAgICAgb3BhY2l0eTogYCR7b3BhY2l0eX1gXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBuelRyZWVTZXJ2aWNlOiBDbWFjc1RyZWVTZWxlY3RTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXHJcbiAgKSB7XHJcbiAgICBzdXBlcihuelRyZWVTZXJ2aWNlKTtcclxuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtc2VsZWN0Jyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNEZXN0cm95ID0gZmFsc2U7XHJcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZVN1YnNjcmlwdGlvbiA9IHRoaXMuc3Vic2NyaWJlU2VsZWN0aW9uQ2hhbmdlKCk7XHJcbiAgICBpZiAodGhpcy5pbmxpbmVFZGl0KSB7XHJcbiAgICAgIHRoaXMuc2hvd0V4cGFuZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuY2hlY2thYmxlICYmIHRoaXMuY21hY3NPcGVuKXtcclxuICAgICAgdGhpcy5kZWZhdWx0RXhwYW5kQWxsID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmNtYWNzT3BlbiAmJiB0aGlzLnRyZWVSZWYpIHtcclxuICAgICAgdGhpcy50cmVlUmVmLnNlYXJjaFZhbHVlID0gJyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbmFkZGNoaWxkZXZ0KCRldmVudDogTnpUcmVlTm9kZSkgIHtcclxuICAgIHRoaXMub25hZGRjaGlsZC5lbWl0KCRldmVudCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNEZXN0cm95ID0gdHJ1ZTtcclxuICAgIHRoaXMuY2xvc2VEcm9wRG93bigpO1xyXG4gICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgICB0aGlzLmNsb3NlRHJvcERvd24oKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdub2RlcycpKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlU2VsZWN0ZWROb2Rlcyh0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZ1tdIHwgc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XHJcbiAgICAgIGlmICh0aGlzLmlzTXVsdGlwbGUgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IFt2YWx1ZSBhcyBzdHJpbmddO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudXBkYXRlU2VsZWN0ZWROb2Rlcyh0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBbXTtcclxuICAgICAgdGhpcy5zZWxlY3RlZE5vZGVzLmZvckVhY2gobm9kZSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVTZWxlY3RlZChub2RlLCBmYWxzZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkTm9kZXMgPSBbXTtcclxuICAgIH1cclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IHN0cmluZ1tdIHwgc3RyaW5nIHwgbnVsbCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICB0cmlnZ2VyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgKCF0aGlzLmRpc2FibGVkICYmIHRoaXMub3BlbikpIHtcclxuICAgICAgdGhpcy5jbG9zZURyb3BEb3duKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm9wZW5Ecm9wZG93bigpO1xyXG4gICAgICBpZiAodGhpcy5zaG93U2VhcmNoIHx8IHRoaXMuaXNNdWx0aXBsZSkge1xyXG4gICAgICAgIHRoaXMuZm9jdXNPbklucHV0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9wZW5Ecm9wZG93bigpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLm9wZW4gPSB0cnVlO1xyXG4gICAgICB0aGlzLm9wZW5DaGFuZ2UuZW1pdCh0aGlzLm9wZW4pO1xyXG4gICAgICB0aGlzLnVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlTdGF0dXMoKTtcclxuICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xvc2VEcm9wRG93bigpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkKCk7XHJcbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcclxuICAgIHRoaXMub3BlbkNoYW5nZS5lbWl0KHRoaXMub3Blbik7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIG9uS2V5RG93bklucHV0KGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IGtleUNvZGUgPSBlLmtleUNvZGU7XHJcbiAgICBjb25zdCBldmVudFRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBpZiAodGhpcy5pc011bHRpcGxlICYmICFldmVudFRhcmdldC52YWx1ZSAmJiBrZXlDb2RlID09PSBCQUNLU1BBQ0UpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZE5vZGVzLmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IHJlbW92ZU5vZGUgPSB0aGlzLnNlbGVjdGVkTm9kZXNbdGhpcy5zZWxlY3RlZE5vZGVzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlU2VsZWN0ZWQocmVtb3ZlTm9kZSk7XHJcbiAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KHtcclxuICAgICAgICAgIGV2ZW50TmFtZTogJ3JlbW92ZVNlbGVjdCcsXHJcbiAgICAgICAgICBub2RlOiByZW1vdmVOb2RlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuY21hY3NPcGVuKSB7XHJcbiAgICAgICAgdGhpcy50cmVlUmVmLnNlYXJjaFZhbHVlID0gJyc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uRXhwYW5kZWRLZXlzQ2hhbmdlKHZhbHVlOiBOekZvcm1hdEVtaXRFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5leHBhbmRDaGFuZ2UuZW1pdCh2YWx1ZSk7XHJcbiAgICB0aGlzLmRlZmF1bHRFeHBhbmRlZEtleXMgPSBbLi4udmFsdWUua2V5cyFdO1xyXG4gIH1cclxuXHJcbiAgc2V0SW5wdXRWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmlucHV0VmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMudXBkYXRlSW5wdXRXaWR0aCgpO1xyXG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlU2VsZWN0ZWQobm9kZTogTnpUcmVlTm9kZSwgZW1pdDogYm9vbGVhbiA9IHRydWUsIGV2ZW50PzogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgbm9kZS5pc1NlbGVjdGVkID0gZmFsc2U7XHJcbiAgICBub2RlLmlzQ2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMuY2hlY2thYmxlKSB7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jb25kdWN0KG5vZGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLnNldFNlbGVjdGVkTm9kZUxpc3Qobm9kZSwgdGhpcy5tdWx0aXBsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVtaXQpIHtcclxuICAgICAgdGhpcy5yZW1vdmVkLmVtaXQobm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRG8gbm90IHRyaWdnZXIgdGhlIHBvcHVwXHJcbiAgICBpZiAoZXZlbnQgJiYgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKSB7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9jdXNPbklucHV0KCk6IHZvaWQge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmlucHV0RWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdWJzY3JpYmVTZWxlY3Rpb25DaGFuZ2UoKTogU3Vic2NyaXB0aW9uIHtcclxuICAgIHJldHVybiBtZXJnZShcclxuICAgICAgdGhpcy50cmVlQ2xpY2sucGlwZShcclxuICAgICAgICB0YXAoKGV2ZW50OiBOekZvcm1hdEVtaXRFdmVudCkgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgbm9kZSA9IGV2ZW50Lm5vZGUhO1xyXG4gICAgICAgICAgaWYgKHRoaXMucmFkaW8gICYmIHRoaXMuY2hlY2thYmxlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vZGVzID0gdGhpcy5jb2VyY2VUcmVlTm9kZXModGhpcy5ub2Rlcyk7XHJcbiAgICAgICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jYWxjQ2hlY2tlZEtleXMoW10sIG5vZGVzLCB0cnVlKTtcclxuICAgICAgICAgICAgbm9kZS5pc0NoZWNrZWQgPSAhbm9kZS5pc0NoZWNrZWQ7XHJcbiAgICAgICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jYWxjQ2hlY2tlZEtleXMoW25vZGUua2V5XSwgbm9kZXMsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkTm9kZXMoKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jaGVja2FibGUgJiYgIW5vZGUuaXNEaXNhYmxlZCAmJiAhbm9kZS5pc0Rpc2FibGVDaGVja2JveCkge1xyXG4gICAgICAgICAgICBub2RlLmlzQ2hlY2tlZCA9ICFub2RlLmlzQ2hlY2tlZDtcclxuICAgICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNvbmR1Y3Qobm9kZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodGhpcy5jaGVja2FibGUpIHtcclxuICAgICAgICAgICAgbm9kZS5pc1NlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgZmlsdGVyKChldmVudDogTnpGb3JtYXRFbWl0RXZlbnQpID0+IHtcclxuICAgICAgICAgIGNvbnN0IG5vZGUgPSBldmVudC5ub2RlITtcclxuICAgICAgICAgIHJldHVybiB0aGlzLmNoZWNrYWJsZSA/ICFub2RlLmlzRGlzYWJsZWQgJiYgIW5vZGUuaXNEaXNhYmxlQ2hlY2tib3ggOiAhbm9kZS5pc0Rpc2FibGVkO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICksXHJcbiAgICAgIHRoaXMuY2hlY2thYmxlID8gdGhpcy50cmVlQ2hlY2tCb3hDaGFuZ2UgOiBvYnNlcnZhYmxlT2YoKSxcclxuICAgICAgdGhpcy5jbGVhcmVkLFxyXG4gICAgICB0aGlzLnJlbW92ZWRcclxuICAgICkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZE5vZGVzKCk7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zZWxlY3RlZE5vZGVzLm1hcChub2RlID0+IG5vZGUua2V5ISk7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBbLi4udmFsdWVdO1xyXG4gICAgICBpZiAodGhpcy5zaG93U2VhcmNoIHx8IHRoaXMuaXNNdWx0aXBsZSkge1xyXG4gICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuaXNOb3RGb3VuZCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmlzTXVsdGlwbGUpIHtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcclxuICAgICAgICB0aGlzLmZvY3VzT25JbnB1dCgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNsb3NlRHJvcERvd24oKTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlLmxlbmd0aCA/IHZhbHVlWzBdIDogbnVsbCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlU2VsZWN0ZWROb2Rlcyhpbml0OiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgIGlmIChpbml0KSB7XHJcbiAgICAgIGNvbnN0IG5vZGVzID0gdGhpcy5jb2VyY2VUcmVlTm9kZXModGhpcy5ub2Rlcyk7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5pc011bHRpcGxlID0gdGhpcy5pc011bHRpcGxlO1xyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UuaW5pdFRyZWUobm9kZXMpO1xyXG4gICAgICBpZiAodGhpcy5jaGVja2FibGUgJiYgIXRoaXMucmFkaW8pIHtcclxuICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UuY2FsY0NoZWNrZWRLZXlzKHRoaXMudmFsdWUsIG5vZGVzKTtcclxuICAgICAgfSBlbHNlIGlmICghdGhpcy5yYWRpbykge1xyXG4gICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jYWxjU2VsZWN0ZWRLZXlzKHRoaXMudmFsdWUsIG5vZGVzLCB0aGlzLmlzTXVsdGlwbGUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jYWxjQ2hlY2tlZEtleXModGhpcy52YWx1ZSwgbm9kZXMsIHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuY2hlY2thYmxlICYmICF0aGlzLnJhZGlvKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWROb2RlcyA9IFsuLi50aGlzLmdldENoZWNrZWROb2RlTGlzdCgpXTtcclxuICAgIH0gZWxzZSBpZiAoIXRoaXMucmFkaW8pIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZE5vZGVzID0gWy4uLnRoaXMuZ2V0U2VsZWN0ZWROb2RlTGlzdCgpXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWROb2RlcyA9IFsuLi50aGlzLmdldENoZWNrZWROb2RlTGlzdCgpXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZVBvc2l0aW9uKCk6IHZvaWQge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkgJiYgdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYpIHtcclxuICAgICAgICB0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkub3ZlcmxheVJlZi51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uUG9zaXRpb25DaGFuZ2UocG9zaXRpb246IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSk6IHZvaWQge1xyXG4gICAgdGhpcy5kcm9wRG93blBvc2l0aW9uID0gcG9zaXRpb24uY29ubmVjdGlvblBhaXIub3JpZ2luWTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUlucHV0V2lkdGgoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc011bHRpcGxlICYmIHRoaXMuaW5wdXRFbGVtZW50KSB7XHJcbiAgICAgIGlmICh0aGlzLmlucHV0VmFsdWUgfHwgdGhpcy5pc0NvbXBvc2luZykge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgICAgICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICAgJ3dpZHRoJyxcclxuICAgICAgICAgIGAke3RoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsV2lkdGh9cHhgXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNsZWFyU2VsZWN0aW9uKCRldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnNlbGVjdGVkTm9kZXMuZm9yRWFjaChub2RlID0+IHtcclxuICAgICAgdGhpcy5yZW1vdmVTZWxlY3RlZChub2RlLCBmYWxzZSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuY2xlYXJlZC5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBzZXRTZWFyY2hWYWx1ZXMoJGV2ZW50OiBOekZvcm1hdEVtaXRFdmVudCk6IHZvaWQge1xyXG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgIHRoaXMuaXNOb3RGb3VuZCA9ICh0aGlzLnNob3dTZWFyY2ggfHwgdGhpcy5pc011bHRpcGxlKSAmJiAhIXRoaXMuaW5wdXRWYWx1ZSAmJiAkZXZlbnQubWF0Y2hlZEtleXMhLmxlbmd0aCA9PT0gMDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVN0YXR1cygpOiB2b2lkIHtcclxuICAgIHRoaXMudHJpZ2dlcldpZHRoID0gdGhpcy5jZGtPdmVybGF5T3JpZ2luLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcclxuICB9XHJcblxyXG4gIHRyYWNrVmFsdWUoX2luZGV4OiBudW1iZXIsIG9wdGlvbjogTnpUcmVlTm9kZSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gb3B0aW9uLmtleSE7XHJcbiAgfVxyXG59XHJcbiJdfQ==