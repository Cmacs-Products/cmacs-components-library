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
import { NzTreeComponent } from 'ng-zorro-antd/tree';
import { CmacsTreeSelectService } from './cmacs-tree-select.service';
/**
 * @param {?} injector
 * @return {?}
 */
export function higherOrderServiceFactory(injector) {
    return injector.get(CmacsTreeSelectService);
}
var CmacsTreeSelectComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CmacsTreeSelectComponent, _super);
    function CmacsTreeSelectComponent(nzTreeService, renderer, cdr, elementRef, noAnimation) {
        var _this = _super.call(this, nzTreeService) || this;
        _this.renderer = renderer;
        _this.cdr = cdr;
        _this.elementRef = elementRef;
        _this.noAnimation = noAnimation;
        _this.allowClear = true;
        _this.showExpand = true;
        _this.showLine = false;
        _this.dropdownMatchSelectWidth = true;
        _this.checkable = false;
        _this.showSearch = false;
        _this.disabled = false;
        _this.asyncData = false;
        _this.multiple = false;
        _this.defaultExpandAll = false;
        _this.cmacsOpen = false;
        _this.nodes = [];
        _this.open = false;
        _this.size = 'default';
        _this.placeHolder = '';
        _this.defaultExpandedKeys = [];
        _this.displayWith = (/**
         * @param {?} node
         * @return {?}
         */
        function (node) { return node.title; });
        _this.openChange = new EventEmitter();
        _this.cleared = new EventEmitter();
        _this.removed = new EventEmitter();
        _this.expandChange = new EventEmitter();
        _this.treeClick = new EventEmitter();
        _this.treeCheckBoxChange = new EventEmitter();
        _this.isComposing = false;
        _this.isDestroy = true;
        _this.isNotFound = false;
        _this.inputValue = '';
        _this.dropDownPosition = 'bottom';
        _this.selectedNodes = [];
        _this.value = [];
        _this.onTouched = (/**
         * @return {?}
         */
        function () { return null; });
        _this.renderer.addClass(_this.elementRef.nativeElement, 'ant-select');
        return _this;
    }
    Object.defineProperty(CmacsTreeSelectComponent.prototype, "placeHolderDisplay", {
        get: /**
         * @return {?}
         */
        function () {
            return this.inputValue || this.isComposing || this.selectedNodes.length ? 'none' : 'block';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTreeSelectComponent.prototype, "searchDisplay", {
        get: /**
         * @return {?}
         */
        function () {
            return this.open ? 'block' : 'none';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTreeSelectComponent.prototype, "isMultiple", {
        get: /**
         * @return {?}
         */
        function () {
            return this.multiple || this.checkable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTreeSelectComponent.prototype, "selectedValueDisplay", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var showSelectedValue = false;
            /** @type {?} */
            var opacity = 1;
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
                opacity: "" + opacity
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CmacsTreeSelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.isDestroy = false;
        this.selectionChangeSubscription = this.subscribeSelectionChange();
    };
    /**
     * @return {?}
     */
    CmacsTreeSelectComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.isDestroy = true;
        this.closeDropDown();
        this.selectionChangeSubscription.unsubscribe();
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    CmacsTreeSelectComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
        this.closeDropDown();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsTreeSelectComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.hasOwnProperty('nzNodes')) {
            this.updateSelectedNodes(true);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsTreeSelectComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
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
            function (node) {
                _this.removeSelected(node, false);
            }));
            this.selectedNodes = [];
        }
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CmacsTreeSelectComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CmacsTreeSelectComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @return {?}
     */
    CmacsTreeSelectComponent.prototype.trigger = /**
     * @return {?}
     */
    function () {
        if (this.disabled || (!this.disabled && this.open)) {
            this.closeDropDown();
        }
        else {
            this.openDropdown();
            if (this.showSearch || this.isMultiple) {
                this.focusOnInput();
            }
        }
    };
    /**
     * @return {?}
     */
    CmacsTreeSelectComponent.prototype.openDropdown = /**
     * @return {?}
     */
    function () {
        if (!this.disabled) {
            this.open = true;
            this.openChange.emit(this.open);
            this.updateCdkConnectedOverlayStatus();
            this.updatePosition();
        }
    };
    /**
     * @return {?}
     */
    CmacsTreeSelectComponent.prototype.closeDropDown = /**
     * @return {?}
     */
    function () {
        this.onTouched();
        this.open = false;
        this.openChange.emit(this.open);
        this.cdr.markForCheck();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    CmacsTreeSelectComponent.prototype.onKeyDownInput = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var keyCode = e.keyCode;
        /** @type {?} */
        var eventTarget = (/** @type {?} */ (e.target));
        if (this.isMultiple && !eventTarget.value && keyCode === BACKSPACE) {
            e.preventDefault();
            if (this.selectedNodes.length) {
                /** @type {?} */
                var removeNode = this.selectedNodes[this.selectedNodes.length - 1];
                this.removeSelected(removeNode);
                (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next({
                    eventName: 'removeSelect',
                    node: removeNode
                });
            }
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsTreeSelectComponent.prototype.onExpandedKeysChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.expandChange.emit(value);
        this.defaultExpandedKeys = tslib_1.__spread((/** @type {?} */ (value.keys)));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsTreeSelectComponent.prototype.setInputValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.inputValue = value;
        this.updateInputWidth();
        this.updatePosition();
    };
    /**
     * @param {?} node
     * @param {?=} emit
     * @param {?=} event
     * @return {?}
     */
    CmacsTreeSelectComponent.prototype.removeSelected = /**
     * @param {?} node
     * @param {?=} emit
     * @param {?=} event
     * @return {?}
     */
    function (node, emit, event) {
        if (emit === void 0) { emit = true; }
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
    };
    /**
     * @return {?}
     */
    CmacsTreeSelectComponent.prototype.focusOnInput = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.inputElement) {
                _this.inputElement.nativeElement.focus();
            }
        }));
    };
    /**
     * @return {?}
     */
    CmacsTreeSelectComponent.prototype.subscribeSelectionChange = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return merge(this.treeClick.pipe(tap((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var node = (/** @type {?} */ (event.node));
            if (_this.checkable && !node.isDisabled && !node.isDisableCheckbox) {
                node.isChecked = !node.isChecked;
                _this.nzTreeService.conduct(node);
            }
            if (_this.checkable) {
                node.isSelected = false;
            }
        })), filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var node = (/** @type {?} */ (event.node));
            return _this.checkable ? !node.isDisabled && !node.isDisableCheckbox : !node.isDisabled;
        }))), this.checkable ? this.treeCheckBoxChange : observableOf(), this.cleared, this.removed).subscribe((/**
         * @return {?}
         */
        function () {
            _this.updateSelectedNodes();
            /** @type {?} */
            var value = _this.selectedNodes.map((/**
             * @param {?} node
             * @return {?}
             */
            function (node) { return (/** @type {?} */ (node.key)); }));
            _this.value = tslib_1.__spread(value);
            if (_this.showSearch || _this.isMultiple) {
                _this.inputValue = '';
                _this.isNotFound = false;
            }
            if (_this.isMultiple) {
                _this.onChange(value);
                _this.focusOnInput();
                _this.updatePosition();
            }
            else {
                _this.closeDropDown();
                _this.onChange(value.length ? value[0] : null);
            }
        }));
    };
    /**
     * @param {?=} init
     * @return {?}
     */
    CmacsTreeSelectComponent.prototype.updateSelectedNodes = /**
     * @param {?=} init
     * @return {?}
     */
    function (init) {
        if (init === void 0) { init = false; }
        if (init) {
            /** @type {?} */
            var nodes = this.coerceTreeNodes(this.nodes);
            this.nzTreeService.isMultiple = this.isMultiple;
            this.nzTreeService.initTree(nodes);
            if (this.checkable) {
                this.nzTreeService.calcCheckedKeys(this.value, nodes);
            }
            else {
                this.nzTreeService.calcSelectedKeys(this.value, nodes, this.isMultiple);
            }
        }
        this.selectedNodes = tslib_1.__spread((this.checkable ? this.getCheckedNodeList() : this.getSelectedNodeList()));
    };
    /**
     * @return {?}
     */
    CmacsTreeSelectComponent.prototype.updatePosition = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.cdkConnectedOverlay && _this.cdkConnectedOverlay.overlayRef) {
                _this.cdkConnectedOverlay.overlayRef.updatePosition();
            }
        }));
    };
    /**
     * @param {?} position
     * @return {?}
     */
    CmacsTreeSelectComponent.prototype.onPositionChange = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        this.dropDownPosition = position.connectionPair.originY;
    };
    /**
     * @return {?}
     */
    CmacsTreeSelectComponent.prototype.updateInputWidth = /**
     * @return {?}
     */
    function () {
        if (this.isMultiple && this.inputElement) {
            if (this.inputValue || this.isComposing) {
                this.renderer.setStyle(this.inputElement.nativeElement, 'width', this.inputElement.nativeElement.scrollWidth + "px");
            }
            else {
                this.renderer.removeStyle(this.inputElement.nativeElement, 'width');
            }
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    CmacsTreeSelectComponent.prototype.onClearSelection = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        var _this = this;
        $event.stopPropagation();
        $event.preventDefault();
        this.selectedNodes.forEach((/**
         * @param {?} node
         * @return {?}
         */
        function (node) {
            _this.removeSelected(node, false);
        }));
        this.cleared.emit();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    CmacsTreeSelectComponent.prototype.setSearchValues = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        var _this = this;
        Promise.resolve().then((/**
         * @return {?}
         */
        function () {
            _this.isNotFound = (_this.showSearch || _this.isMultiple) && !!_this.inputValue && (/** @type {?} */ ($event.matchedKeys)).length === 0;
        }));
    };
    /**
     * @return {?}
     */
    CmacsTreeSelectComponent.prototype.updateCdkConnectedOverlayStatus = /**
     * @return {?}
     */
    function () {
        this.triggerWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
    };
    /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    CmacsTreeSelectComponent.prototype.trackValue = /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    function (_index, option) {
        return (/** @type {?} */ (option.key));
    };
    CmacsTreeSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-tree-select',
                    exportAs: 'cmacsTreeSelect',
                    animations: [slideMotion, zoomMotion],
                    template: "<ng-template #inputTemplate>\r\n  <input\r\n    #inputElement\r\n    autocomplete=\"off\"\r\n    class=\"ant-select-search__field\"\r\n    (compositionstart)=\"isComposing = true\"\r\n    (compositionend)=\"isComposing = false\"\r\n    (keydown)=\"onKeyDownInput($event)\"\r\n    [ngModel]=\"inputValue\"\r\n    (ngModelChange)=\"setInputValue($event)\"\r\n    [disabled]=\"disabled\">\r\n</ng-template>\r\n\r\n<ng-template *ngIf=\"!cmacsOpen\"\r\n  cdkConnectedOverlay\r\n  nzConnectedOverlay\r\n  [cdkConnectedOverlayOrigin]=\"cdkOverlayOrigin\"\r\n  [cdkConnectedOverlayOpen]=\"open\"\r\n  [cdkConnectedOverlayHasBackdrop]=\"true\"\r\n  [cdkConnectedOverlayMinWidth]=\"dropdownMatchSelectWidth? null : triggerWidth\"\r\n  [cdkConnectedOverlayWidth]=\"dropdownMatchSelectWidth? triggerWidth : null\"\r\n  (backdropClick)=\"closeDropDown()\"\r\n  (detach)=\"closeDropDown()\"\r\n  (positionChange)=\"onPositionChange($event)\">\r\n  <ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n</ng-template>\r\n\r\n<div\r\n  cdkOverlayOrigin\r\n  class=\"ant-select-selection\"\r\n  [class.ant-select-selection--single]=\"!isMultiple\"\r\n  [class.ant-select-selection--multiple]=\"isMultiple\"\r\n  tabindex=\"0\">\r\n  <span class=\"ant-select-selection__clear cmacs-tree-select-search-icon\">\r\n    <i class=\"iconCreation-Search ant-select-clear-icon\"></i>\r\n  </span>\r\n  <ng-container *ngIf=\"!isMultiple\">\r\n    <div class=\"ant-select-selection__rendered\">\r\n      <div\r\n        *ngIf=\"placeHolder && selectedNodes.length === 0\"\r\n        [style.display]=\"placeHolderDisplay\"\r\n        class=\"ant-select-selection__placeholder\">\r\n        {{ placeHolder }}\r\n      </div>\r\n\r\n      <div\r\n        *ngIf=\"selectedNodes.length === 1\"\r\n        class=\"ant-select-selection-selected-value\"\r\n        [attr.title]=\"displayWith(selectedNodes[0])\"\r\n        [ngStyle]=\"selectedValueDisplay\">\r\n        {{ displayWith(selectedNodes[0]) }}\r\n      </div>\r\n\r\n      <div\r\n        *ngIf=\"showSearch\"\r\n        [style.display]=\"searchDisplay\"\r\n        class=\"ant-select-search ant-select-search--inline\">\r\n        <div class=\"ant-select-search__field__wrap\">\r\n          <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\r\n          <span class=\"ant-select-search__field__mirror\">{{inputValue}}&nbsp;</span>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"isMultiple\">\r\n    <ul class=\"ant-select-selection__rendered\">\r\n      <div\r\n        *ngIf=\"placeHolder && selectedNodes.length === 0\"\r\n        [style.display]=\"placeHolderDisplay\"\r\n        class=\"ant-select-selection__placeholder\">\r\n        {{ placeHolder }}\r\n      </div>\r\n      <ng-container *ngFor=\"let node of selectedNodes | slice: 0 : maxTagCount; trackBy:trackValue\">\r\n        <li\r\n          [@zoomMotion]\r\n          [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n          [attr.title]=\"displayWith(node)\"\r\n          [class.ant-select-selection__choice__disabled]=\"node.isDisabled\"\r\n          class=\"ant-select-selection__choice\">\r\n               <span *ngIf=\"!node.isDisabled\" class=\"ant-select-selection__choice__remove\"\r\n                 (mousedown)=\"$event.preventDefault()\"\r\n                 (click)=\"removeSelected(node, true, $event)\">\r\n                 <i nz-icon type=\"close\" class=\"ant-select-remove-icon\"></i>\r\n               </span>\r\n          <span class=\"ant-select-selection__choice__content\">{{ displayWith(node) }}</span>\r\n        </li>\r\n      </ng-container>\r\n      <li [@zoomMotion]\r\n        *ngIf=\"selectedNodes.length > maxTagCount\"\r\n        class=\"ant-select-selection__choice\">\r\n        <div class=\"ant-select-selection__choice__content\">\r\n          <ng-container *ngIf=\"maxTagPlaceholder\">\r\n            <ng-template\r\n              [ngTemplateOutlet]=\"maxTagPlaceholder\"\r\n              [ngTemplateOutletContext]=\"{ $implicit: selectedNodes | slice: maxTagCount}\">\r\n            </ng-template>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"!maxTagPlaceholder\">\r\n            + {{ selectedNodes.length - maxTagCount }} ...\r\n          </ng-container>\r\n        </div>\r\n      </li>\r\n      <li class=\"ant-select-search ant-select-search--inline\">\r\n        <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\r\n      </li>\r\n    </ul>\r\n  </ng-container>\r\n  <span *ngIf=\"allowClear && selectedNodes.length\" class=\"ant-select-selection__clear\"\r\n    (mousedown)=\"$event.preventDefault()\"\r\n    (click)=\"onClearSelection($event)\">\r\n    <i nz-icon type=\"close-circle\" class=\"ant-select-clear-icon\" theme=\"fill\"></i>\r\n  </span>\r\n  <div class=\"ant-select-selection__clear cmacs-tree-select-arrow\">\r\n    <i class=\"ant-select-clear-icon iconArrowLarge-Arrow-Right\" [class.cmacs-selected-nodes]=\"selectedNodes.length\"></i>\r\n  </div>\r\n  <span *ngIf=\"!isMultiple\" class=\"ant-select-arrow\">\r\n    <i nz-icon type=\"down\" class=\"ant-select-arrow-icon\"></i>\r\n  </span>\r\n</div>\r\n<ng-container *ngIf=\"cmacsOpen\">\r\n  <ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n</ng-container>\r\n\r\n<ng-template #content>\r\n  <div class=\"ant-select-dropdown ant-select-tree-dropdown cmacs-tree-select-dropdown\"\r\n       [@slideMotion]=\"!cmacsOpen && open ? dropDownPosition : 'void'\"\r\n       [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n       [class.ant-select-dropdown--single]=\"!multiple\"\r\n       [class.ant-select-dropdown--multiple]=\"multiple\"\r\n       [class.ant-select-dropdown-placement-bottomLeft]=\"dropDownPosition === 'bottom'\"\r\n       [class.ant-select-dropdown-placement-topLeft]=\"dropDownPosition === 'top'\"\r\n       [ngStyle]=\"dropdownStyle\">\r\n    <cmacs-tree\r\n      #treeRef\r\n      [hidden]=\"isNotFound\"\r\n      nzNoAnimation\r\n      [selectMode]=\"true\"\r\n      [nzData]=\"nodes\"\r\n      [nzMultiple]=\"multiple\"\r\n      [searchValue]=\"inputValue\"\r\n      [checkable]=\"checkable\"\r\n      [asyncData]=\"asyncData\"\r\n      [showExpand]=\"showExpand\"\r\n      [showLine]=\"showLine\"\r\n      [expandedIcon]=\"expandedIcon\"\r\n      [nzBlockNode]=\"true\"\r\n      [expandAll]=\"defaultExpandAll\"\r\n      [nzExpandedKeys]=\"defaultExpandedKeys\"\r\n      [nzCheckedKeys]=\"checkable ? value : []\"\r\n      [nzSelectedKeys]=\"!checkable ? value : []\"\r\n      (nzExpandChange)=\"onExpandedKeysChange($event)\"\r\n      (nzClick)=\"treeClick.emit($event)\"\r\n      (nzCheckedKeysChange)=\"updateSelectedNodes()\"\r\n      (nzSelectedKeysChange)=\"updateSelectedNodes()\"\r\n      (nzCheckBoxChange)=\"treeCheckBoxChange.emit($event)\"\r\n      (searchValueChange)=\"setSearchValues($event)\">\r\n    </cmacs-tree>\r\n    <span *ngIf=\"nodes.length === 0 || isNotFound\" class=\"ant-select-not-found\">\r\n      <nz-embed-empty [nzComponentName]=\"'tree-select'\" [specificContent]=\"notFoundContent\"></nz-embed-empty>\r\n    </span>\r\n  </div>\r\n</ng-template>\r\n",
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
                            function () { return CmacsTreeSelectComponent; })),
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
                    styles: [".cmacs-tree-select-dropdown{box-shadow:none;border-bottom:1px solid #dee0e5;border-right:1px solid #dee0e5;border-left:1px solid #dee0e5;border-radius:0 0 3px 3px}:host ::ng-deep .ant-select-selection,:host ::ng-deep .ant-select-selection:focus,:host ::ng-deep .ant-select-selection:hover{border:1px solid #dee0e5;border-radius:3px 3px 0 0}.cmacs-tree-select-search-icon{left:11px;right:unset;z-index:unset;opacity:1!important;font-size:16px;top:14px}:host ::ng-deep .ant-select-selection--multiple .ant-select-selection__placeholder{margin-left:29px}.ant-select-selection__clear{right:14px}.cmacs-tree-select-arrow{z-index:unset;opacity:1!important;font-size:29px;top:7px;right:30px}.cmacs-tree-select-arrow:hover{cursor:pointer}.cmacs-tree-select-arrow i{border-left:1px solid #dee0e5;padding:0 5px}.ant-select-selection--multiple .ant-select-search--inline .ant-select-search__field{padding-left:10px}.ant-select-selection:hover .cmacs-selected-nodes.iconArrowLarge-Arrow-Right:before{opacity:0}", "\n      .ant-select-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n        overflow: auto;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    CmacsTreeSelectComponent.ctorParameters = function () { return [
        { type: CmacsTreeSelectService },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
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
    return CmacsTreeSelectComponent;
}(NzTreeBase));
export { CmacsTreeSelectComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdHJlZS1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy10cmVlLXNlbGVjdC9jbWFjcy10cmVlLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixFQUFrQyxNQUFNLHNCQUFzQixDQUFDO0FBQzdHLE9BQU8sRUFDTCxVQUFVLEVBQ1YsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLElBQUksRUFDSixRQUFRLEVBQ1IsS0FBSyxFQUlMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULElBQUksRUFFSixXQUFXLEVBQ1gsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsSUFBSSxZQUFZLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUNMLFFBQVEsRUFDUixXQUFXLEVBQ1gsVUFBVSxFQUNWLFlBQVksRUFFWixzQkFBc0IsRUFFdEIsVUFBVSxFQUVWLDZCQUE2QixFQUc5QixNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7QUFFckUsTUFBTSxVQUFVLHlCQUF5QixDQUFDLFFBQWtCO0lBQzFELE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FB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REFBaUM7O0lBQ2pDLHlDQUEyRDs7SUFDM0Qsd0NBQXNCOztJQUN0Qix3Q0FBeUM7O0lBQ3pDLCtDQUEwQjs7SUFDMUIsaURBQWtEOztJQUNsRCx1REFBNEM7O0lBQzVDLCtDQUFrRzs7SUFDbEcsK0NBQTZCOztJQUM3QixxREFBcUU7O0lBQ3JFLDhDQUE0RDs7SUFDNUQsMkNBQXNEOztJQUN0RCwyQ0FBNEQ7O0lBQzVELGdEQUF3RTs7SUFDeEUsNkNBQXFFOztJQUNyRSxzREFBOEU7O0lBRTlFLGdEQUFvRDs7SUFDcEQsMkNBQStDOztJQUMvQyxvREFBZ0U7O0lBQ2hFLHVEQUF5RTs7SUFFekUsZ0RBQXFCOztJQUNyQiwrQ0FBb0I7O0lBQ3BCLDZDQUFpQjs7SUFDakIsOENBQW1COztJQUNuQiw4Q0FBZ0I7O0lBQ2hCLG9EQUF5RDs7SUFDekQsK0RBQTBDOztJQUMxQyxpREFBaUM7O0lBQ2pDLHlDQUFxQjs7SUFFckIsNENBQW9EOztJQUNwRCw2Q0FBbUM7Ozs7O0lBcUNqQyw0Q0FBMkI7Ozs7O0lBQzNCLHVDQUE4Qjs7Ozs7SUFDOUIsOENBQThCOztJQUM5QiwrQ0FBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCQUNLU1BBQ0UgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5pbXBvcnQgeyBDZGtDb25uZWN0ZWRPdmVybGF5LCBDZGtPdmVybGF5T3JpZ2luLCBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7XHJcbiAgZm9yd2FyZFJlZixcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdCxcclxuICBJbmplY3RvcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNlbGYsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgbWVyZ2UsIG9mIGFzIG9ic2VydmFibGVPZiwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbHRlciwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBpc05vdE5pbCxcclxuICBzbGlkZU1vdGlvbixcclxuICB6b29tTW90aW9uLFxyXG4gIElucHV0Qm9vbGVhbixcclxuICBOekZvcm1hdEVtaXRFdmVudCxcclxuICBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLFxyXG4gIE56U2l6ZUxEU1R5cGUsXHJcbiAgTnpUcmVlQmFzZSxcclxuICBOelRyZWVCYXNlU2VydmljZSxcclxuICBOelRyZWVIaWdoZXJPcmRlclNlcnZpY2VUb2tlbixcclxuICBOelRyZWVOb2RlLFxyXG4gIE56VHJlZU5vZGVPcHRpb25zXHJcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpUcmVlQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC90cmVlJztcclxuXHJcbmltcG9ydCB7IENtYWNzVHJlZVNlbGVjdFNlcnZpY2UgfSBmcm9tICcuL2NtYWNzLXRyZWUtc2VsZWN0LnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhpZ2hlck9yZGVyU2VydmljZUZhY3RvcnkoaW5qZWN0b3I6IEluamVjdG9yKTogTnpUcmVlQmFzZVNlcnZpY2Uge1xyXG4gIHJldHVybiBpbmplY3Rvci5nZXQoQ21hY3NUcmVlU2VsZWN0U2VydmljZSk7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtdHJlZS1zZWxlY3QnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NUcmVlU2VsZWN0JyxcclxuICBhbmltYXRpb25zOiBbc2xpZGVNb3Rpb24sIHpvb21Nb3Rpb25dLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy10cmVlLXNlbGVjdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtdHJlZS1zZWxlY3QuY29tcG9uZW50LmNzcyddLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgQ21hY3NUcmVlU2VsZWN0U2VydmljZSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTnpUcmVlSGlnaGVyT3JkZXJTZXJ2aWNlVG9rZW4sXHJcbiAgICAgIHVzZUZhY3Rvcnk6IGhpZ2hlck9yZGVyU2VydmljZUZhY3RvcnksXHJcbiAgICAgIGRlcHM6IFtbbmV3IFNlbGYoKSwgSW5qZWN0b3JdXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENtYWNzVHJlZVNlbGVjdENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXSxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtbGddJzogJ3NpemU9PT1cImxhcmdlXCInLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LXNtXSc6ICdzaXplPT09XCJzbWFsbFwiJyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1lbmFibGVkXSc6ICchZGlzYWJsZWQnLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWRpc2FibGVkXSc6ICdkaXNhYmxlZCcsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtYWxsb3ctY2xlYXJdJzogJ2FsbG93Q2xlYXInLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LW9wZW5dJzogJ29wZW4nLFxyXG4gICAgJyhjbGljayknOiAndHJpZ2dlcigpJ1xyXG4gIH0sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIC5hbnQtc2VsZWN0LWRyb3Bkb3duIHtcclxuICAgICAgICB0b3A6IDEwMCU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzVHJlZVNlbGVjdENvbXBvbmVudCBleHRlbmRzIE56VHJlZUJhc2UgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGFsbG93Q2xlYXIgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93RXhwYW5kID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd0xpbmUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBleHBhbmRlZEljb246IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelRyZWVOb2RlIH0+O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGggPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjaGVja2FibGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1NlYXJjaCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhc3luY0RhdGEgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbXVsdGlwbGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGVmYXVsdEV4cGFuZEFsbCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjbWFjc09wZW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBub3RGb3VuZENvbnRlbnQ6IHN0cmluZztcclxuICBASW5wdXQoKSBub2RlczogQXJyYXk8TnpUcmVlTm9kZSB8IE56VHJlZU5vZGVPcHRpb25zPiA9IFtdO1xyXG4gIEBJbnB1dCgpIG9wZW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBzaXplOiBOelNpemVMRFNUeXBlID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIHBsYWNlSG9sZGVyID0gJyc7XHJcbiAgQElucHV0KCkgZHJvcGRvd25TdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuICBASW5wdXQoKSBkZWZhdWx0RXhwYW5kZWRLZXlzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIEBJbnB1dCgpIGRpc3BsYXlXaXRoOiAobm9kZTogTnpUcmVlTm9kZSkgPT4gc3RyaW5nIHwgdW5kZWZpbmVkID0gKG5vZGU6IE56VHJlZU5vZGUpID0+IG5vZGUudGl0bGU7XHJcbiAgQElucHV0KCkgbWF4VGFnQ291bnQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBtYXhUYWdQbGFjZWhvbGRlcjogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56VHJlZU5vZGVbXSB9PjtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2xlYXJlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgcmVtb3ZlZCA9IG5ldyBFdmVudEVtaXR0ZXI8TnpUcmVlTm9kZT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgZXhwYW5kQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgdHJlZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgdHJlZUNoZWNrQm94Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JykgaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ3RyZWVSZWYnKSB0cmVlUmVmOiBOelRyZWVDb21wb25lbnQ7XHJcbiAgQFZpZXdDaGlsZChDZGtPdmVybGF5T3JpZ2luKSBjZGtPdmVybGF5T3JpZ2luOiBDZGtPdmVybGF5T3JpZ2luO1xyXG4gIEBWaWV3Q2hpbGQoQ2RrQ29ubmVjdGVkT3ZlcmxheSkgY2RrQ29ubmVjdGVkT3ZlcmxheTogQ2RrQ29ubmVjdGVkT3ZlcmxheTtcclxuXHJcbiAgdHJpZ2dlcldpZHRoOiBudW1iZXI7XHJcbiAgaXNDb21wb3NpbmcgPSBmYWxzZTtcclxuICBpc0Rlc3Ryb3kgPSB0cnVlO1xyXG4gIGlzTm90Rm91bmQgPSBmYWxzZTtcclxuICBpbnB1dFZhbHVlID0gJyc7XHJcbiAgZHJvcERvd25Qb3NpdGlvbjogJ3RvcCcgfCAnY2VudGVyJyB8ICdib3R0b20nID0gJ2JvdHRvbSc7XHJcbiAgc2VsZWN0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgc2VsZWN0ZWROb2RlczogTnpUcmVlTm9kZVtdID0gW107XHJcbiAgdmFsdWU6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZ1tdIHwgc3RyaW5nIHwgbnVsbCkgPT4gdm9pZDtcclxuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xyXG5cclxuICBnZXQgcGxhY2VIb2xkZXJEaXNwbGF5KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnB1dFZhbHVlIHx8IHRoaXMuaXNDb21wb3NpbmcgfHwgdGhpcy5zZWxlY3RlZE5vZGVzLmxlbmd0aCA/ICdub25lJyA6ICdibG9jayc7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VhcmNoRGlzcGxheSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMub3BlbiA/ICdibG9jaycgOiAnbm9uZSc7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNNdWx0aXBsZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm11bHRpcGxlIHx8IHRoaXMuY2hlY2thYmxlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNlbGVjdGVkVmFsdWVEaXNwbGF5KCk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xyXG4gICAgbGV0IHNob3dTZWxlY3RlZFZhbHVlID0gZmFsc2U7XHJcbiAgICBsZXQgb3BhY2l0eSA9IDE7XHJcbiAgICBpZiAoIXRoaXMuc2hvd1NlYXJjaCkge1xyXG4gICAgICBzaG93U2VsZWN0ZWRWYWx1ZSA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5vcGVuKSB7XHJcbiAgICAgICAgc2hvd1NlbGVjdGVkVmFsdWUgPSAhKHRoaXMuaW5wdXRWYWx1ZSB8fCB0aGlzLmlzQ29tcG9zaW5nKTtcclxuICAgICAgICBpZiAoc2hvd1NlbGVjdGVkVmFsdWUpIHtcclxuICAgICAgICAgIG9wYWNpdHkgPSAwLjQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNob3dTZWxlY3RlZFZhbHVlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGlzcGxheTogc2hvd1NlbGVjdGVkVmFsdWUgPyAnYmxvY2snIDogJ25vbmUnLFxyXG4gICAgICBvcGFjaXR5OiBgJHtvcGFjaXR5fWBcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIG56VHJlZVNlcnZpY2U6IENtYWNzVHJlZVNlbGVjdFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHtcclxuICAgIHN1cGVyKG56VHJlZVNlcnZpY2UpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1zZWxlY3QnKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0Rlc3Ryb3kgPSBmYWxzZTtcclxuICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uID0gdGhpcy5zdWJzY3JpYmVTZWxlY3Rpb25DaGFuZ2UoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0Rlc3Ryb3kgPSB0cnVlO1xyXG4gICAgdGhpcy5jbG9zZURyb3BEb3duKCk7XHJcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICAgIHRoaXMuY2xvc2VEcm9wRG93bigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ256Tm9kZXMnKSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkTm9kZXModHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmdbXSB8IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xyXG4gICAgICBpZiAodGhpcy5pc011bHRpcGxlICYmIEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBbdmFsdWUgYXMgc3RyaW5nXTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkTm9kZXModHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnZhbHVlID0gW107XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWROb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlU2VsZWN0ZWQobm9kZSwgZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5zZWxlY3RlZE5vZGVzID0gW107XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBzdHJpbmdbXSB8IHN0cmluZyB8IG51bGwpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgdHJpZ2dlcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRpc2FibGVkIHx8ICghdGhpcy5kaXNhYmxlZCAmJiB0aGlzLm9wZW4pKSB7XHJcbiAgICAgIHRoaXMuY2xvc2VEcm9wRG93bigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5vcGVuRHJvcGRvd24oKTtcclxuICAgICAgaWYgKHRoaXMuc2hvd1NlYXJjaCB8fCB0aGlzLmlzTXVsdGlwbGUpIHtcclxuICAgICAgICB0aGlzLmZvY3VzT25JbnB1dCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvcGVuRHJvcGRvd24oKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5vcGVuID0gdHJ1ZTtcclxuICAgICAgdGhpcy5vcGVuQ2hhbmdlLmVtaXQodGhpcy5vcGVuKTtcclxuICAgICAgdGhpcy51cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5U3RhdHVzKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsb3NlRHJvcERvd24oKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xyXG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XHJcbiAgICB0aGlzLm9wZW5DaGFuZ2UuZW1pdCh0aGlzLm9wZW4pO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBvbktleURvd25JbnB1dChlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBrZXlDb2RlID0gZS5rZXlDb2RlO1xyXG4gICAgY29uc3QgZXZlbnRUYXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgaWYgKHRoaXMuaXNNdWx0aXBsZSAmJiAhZXZlbnRUYXJnZXQudmFsdWUgJiYga2V5Q29kZSA9PT0gQkFDS1NQQUNFKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWROb2Rlcy5sZW5ndGgpIHtcclxuICAgICAgICBjb25zdCByZW1vdmVOb2RlID0gdGhpcy5zZWxlY3RlZE5vZGVzW3RoaXMuc2VsZWN0ZWROb2Rlcy5sZW5ndGggLSAxXTtcclxuICAgICAgICB0aGlzLnJlbW92ZVNlbGVjdGVkKHJlbW92ZU5vZGUpO1xyXG4gICAgICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dCh7XHJcbiAgICAgICAgICBldmVudE5hbWU6ICdyZW1vdmVTZWxlY3QnLFxyXG4gICAgICAgICAgbm9kZTogcmVtb3ZlTm9kZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkV4cGFuZGVkS2V5c0NoYW5nZSh2YWx1ZTogTnpGb3JtYXRFbWl0RXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuZXhwYW5kQ2hhbmdlLmVtaXQodmFsdWUpO1xyXG4gICAgdGhpcy5kZWZhdWx0RXhwYW5kZWRLZXlzID0gWy4uLnZhbHVlLmtleXMhXTtcclxuICB9XHJcblxyXG4gIHNldElucHV0VmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5pbnB1dFZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLnVwZGF0ZUlucHV0V2lkdGgoKTtcclxuICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVNlbGVjdGVkKG5vZGU6IE56VHJlZU5vZGUsIGVtaXQ6IGJvb2xlYW4gPSB0cnVlLCBldmVudD86IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIG5vZGUuaXNTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgbm9kZS5pc0NoZWNrZWQgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLmNoZWNrYWJsZSkge1xyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UuY29uZHVjdChub2RlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5zZXRTZWxlY3RlZE5vZGVMaXN0KG5vZGUsIHRoaXMubXVsdGlwbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlbWl0KSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlZC5lbWl0KG5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERvIG5vdCB0cmlnZ2VyIHRoZSBwb3B1cFxyXG4gICAgaWYgKGV2ZW50ICYmIGV2ZW50LnN0b3BQcm9wYWdhdGlvbikge1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvY3VzT25JbnB1dCgpOiB2b2lkIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3Vic2NyaWJlU2VsZWN0aW9uQ2hhbmdlKCk6IFN1YnNjcmlwdGlvbiB7XHJcbiAgICByZXR1cm4gbWVyZ2UoXHJcbiAgICAgIHRoaXMudHJlZUNsaWNrLnBpcGUoXHJcbiAgICAgICAgdGFwKChldmVudDogTnpGb3JtYXRFbWl0RXZlbnQpID0+IHtcclxuICAgICAgICAgIGNvbnN0IG5vZGUgPSBldmVudC5ub2RlITtcclxuICAgICAgICAgIGlmICh0aGlzLmNoZWNrYWJsZSAmJiAhbm9kZS5pc0Rpc2FibGVkICYmICFub2RlLmlzRGlzYWJsZUNoZWNrYm94KSB7XHJcbiAgICAgICAgICAgIG5vZGUuaXNDaGVja2VkID0gIW5vZGUuaXNDaGVja2VkO1xyXG4gICAgICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UuY29uZHVjdChub2RlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh0aGlzLmNoZWNrYWJsZSkge1xyXG4gICAgICAgICAgICBub2RlLmlzU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICBmaWx0ZXIoKGV2ZW50OiBOekZvcm1hdEVtaXRFdmVudCkgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgbm9kZSA9IGV2ZW50Lm5vZGUhO1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2thYmxlID8gIW5vZGUuaXNEaXNhYmxlZCAmJiAhbm9kZS5pc0Rpc2FibGVDaGVja2JveCA6ICFub2RlLmlzRGlzYWJsZWQ7XHJcbiAgICAgICAgfSlcclxuICAgICAgKSxcclxuICAgICAgdGhpcy5jaGVja2FibGUgPyB0aGlzLnRyZWVDaGVja0JveENoYW5nZSA6IG9ic2VydmFibGVPZigpLFxyXG4gICAgICB0aGlzLmNsZWFyZWQsXHJcbiAgICAgIHRoaXMucmVtb3ZlZFxyXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkTm9kZXMoKTtcclxuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNlbGVjdGVkTm9kZXMubWFwKG5vZGUgPT4gbm9kZS5rZXkhKTtcclxuICAgICAgdGhpcy52YWx1ZSA9IFsuLi52YWx1ZV07XHJcbiAgICAgIGlmICh0aGlzLnNob3dTZWFyY2ggfHwgdGhpcy5pc011bHRpcGxlKSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gJyc7XHJcbiAgICAgICAgdGhpcy5pc05vdEZvdW5kID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuaXNNdWx0aXBsZSkge1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xyXG4gICAgICAgIHRoaXMuZm9jdXNPbklucHV0KCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY2xvc2VEcm9wRG93bigpO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUubGVuZ3RoID8gdmFsdWVbMF0gOiBudWxsKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTZWxlY3RlZE5vZGVzKGluaXQ6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgaWYgKGluaXQpIHtcclxuICAgICAgY29uc3Qgbm9kZXMgPSB0aGlzLmNvZXJjZVRyZWVOb2Rlcyh0aGlzLm5vZGVzKTtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmlzTXVsdGlwbGUgPSB0aGlzLmlzTXVsdGlwbGU7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5pbml0VHJlZShub2Rlcyk7XHJcbiAgICAgIGlmICh0aGlzLmNoZWNrYWJsZSkge1xyXG4gICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jYWxjQ2hlY2tlZEtleXModGhpcy52YWx1ZSwgbm9kZXMpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jYWxjU2VsZWN0ZWRLZXlzKHRoaXMudmFsdWUsIG5vZGVzLCB0aGlzLmlzTXVsdGlwbGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnNlbGVjdGVkTm9kZXMgPSBbLi4uKHRoaXMuY2hlY2thYmxlID8gdGhpcy5nZXRDaGVja2VkTm9kZUxpc3QoKSA6IHRoaXMuZ2V0U2VsZWN0ZWROb2RlTGlzdCgpKV07XHJcbiAgfVxyXG5cclxuICB1cGRhdGVQb3NpdGlvbigpOiB2b2lkIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5ICYmIHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5vdmVybGF5UmVmKSB7XHJcbiAgICAgICAgdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYudXBkYXRlUG9zaXRpb24oKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvblBvc2l0aW9uQ2hhbmdlKHBvc2l0aW9uOiBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UpOiB2b2lkIHtcclxuICAgIHRoaXMuZHJvcERvd25Qb3NpdGlvbiA9IHBvc2l0aW9uLmNvbm5lY3Rpb25QYWlyLm9yaWdpblk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVJbnB1dFdpZHRoKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNNdWx0aXBsZSAmJiB0aGlzLmlucHV0RWxlbWVudCkge1xyXG4gICAgICBpZiAodGhpcy5pbnB1dFZhbHVlIHx8IHRoaXMuaXNDb21wb3NpbmcpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxyXG4gICAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAgICd3aWR0aCcsXHJcbiAgICAgICAgICBgJHt0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFdpZHRofXB4YFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnd2lkdGgnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DbGVhclNlbGVjdGlvbigkZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5zZWxlY3RlZE5vZGVzLmZvckVhY2gobm9kZSA9PiB7XHJcbiAgICAgIHRoaXMucmVtb3ZlU2VsZWN0ZWQobm9kZSwgZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNsZWFyZWQuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgc2V0U2VhcmNoVmFsdWVzKCRldmVudDogTnpGb3JtYXRFbWl0RXZlbnQpOiB2b2lkIHtcclxuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLmlzTm90Rm91bmQgPSAodGhpcy5zaG93U2VhcmNoIHx8IHRoaXMuaXNNdWx0aXBsZSkgJiYgISF0aGlzLmlucHV0VmFsdWUgJiYgJGV2ZW50Lm1hdGNoZWRLZXlzIS5sZW5ndGggPT09IDA7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlTdGF0dXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRyaWdnZXJXaWR0aCA9IHRoaXMuY2RrT3ZlcmxheU9yaWdpbi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XHJcbiAgfVxyXG5cclxuICB0cmFja1ZhbHVlKF9pbmRleDogbnVtYmVyLCBvcHRpb246IE56VHJlZU5vZGUpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIG9wdGlvbi5rZXkhO1xyXG4gIH1cclxufVxyXG4iXX0=