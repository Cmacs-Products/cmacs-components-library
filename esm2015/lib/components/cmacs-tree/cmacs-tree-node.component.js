/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Host, HostListener, Input, NgZone, Optional, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { collapseMotion, InputBoolean, NzNoAnimationDirective, NzTreeBaseService, NzTreeNode } from 'ng-zorro-antd/core';
export class CmacsTreeNodeComponent {
    /**
     * @param {?} nzTreeService
     * @param {?} ngZone
     * @param {?} renderer
     * @param {?} elRef
     * @param {?} cdr
     * @param {?=} nzNoAnimation
     */
    constructor(nzTreeService, ngZone, renderer, elRef, cdr, nzNoAnimation) {
        this.nzTreeService = nzTreeService;
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.elRef = elRef;
        this.cdr = cdr;
        this.nzNoAnimation = nzNoAnimation;
        this.hideUnMatched = false;
        this.noAnimation = false;
        this.selectMode = false;
        this.showIcon = false;
        // default var
        this.prefixCls = 'ant-tree';
        this.highlightKeys = [];
        this.nzNodeClass = {};
        this.nzNodeSwitcherClass = {};
        this.nzNodeContentClass = {};
        this.nzNodeCheckboxClass = {};
        this.nzNodeContentIconClass = {};
        this.nzNodeContentLoadingClass = {};
        /**
         * drag var
         */
        this.destroy$ = new Subject();
        this.dragPos = 2;
        this.dragPosClass = {
            '0': 'drag-over',
            '1': 'drag-over-gap-bottom',
            '-1': 'drag-over-gap-top'
        };
        /**
         * default set
         */
        // tslint:disable-next-line: variable-name
        this._searchValue = '';
        // tslint:disable-next-line: variable-name
        this._draggable = false;
        // tslint:disable-next-line: variable-name
        this._expandAll = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set draggable(value) {
        this._draggable = value;
        this.handDragEvent();
    }
    /**
     * @return {?}
     */
    get draggable() {
        return this._draggable;
    }
    /**
     * @deprecated use
     * expandAll instead
     * @param {?} value
     * @return {?}
     */
    set defaultExpandAll(value) {
        this._expandAll = value;
        if (value && this.treeNode && !this.treeNode.isLeaf) {
            this.treeNode.isExpanded = true;
        }
    }
    /**
     * @return {?}
     */
    get defaultExpandAll() {
        return this._expandAll;
    }
    // default set
    /**
     * @param {?} value
     * @return {?}
     */
    set expandAll(value) {
        this._expandAll = value;
        if (value && this.treeNode && !this.treeNode.isLeaf) {
            this.treeNode.isExpanded = true;
        }
    }
    /**
     * @return {?}
     */
    get expandAll() {
        return this._expandAll;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set searchValue(value) {
        this.highlightKeys = [];
        // tslint:disable-next-line: no-non-null-assertion
        if (value && (/** @type {?} */ (this.treeNode.title)).includes(value)) {
            // match the search value
            /** @type {?} */
            const index = this.treeNode.title.indexOf(value);
            this.highlightKeys = [
                this.treeNode.title.slice(0, index),
                this.treeNode.title.slice(index + value.length, this.treeNode.title.length)
            ];
        }
        this._searchValue = value;
    }
    /**
     * @return {?}
     */
    get searchValue() {
        return this._searchValue;
    }
    /**
     * @return {?}
     */
    get nzIcon() {
        return this.treeNode.icon;
    }
    /**
     * @return {?}
     */
    get canDraggable() {
        return this.draggable && !this.treeNode.isDisabled ? true : null;
    }
    /**
     * @return {?}
     */
    get isShowLineIcon() {
        return !this.treeNode.isLeaf && this.showLine;
    }
    /**
     * @return {?}
     */
    get isShowSwitchIcon() {
        return !this.treeNode.isLeaf && !this.showLine;
    }
    /**
     * @return {?}
     */
    get isSwitcherOpen() {
        return this.treeNode.isExpanded && !this.treeNode.isLeaf;
    }
    /**
     * @return {?}
     */
    get isSwitcherClose() {
        return !this.treeNode.isExpanded && !this.treeNode.isLeaf;
    }
    /**
     * @return {?}
     */
    get displayStyle() {
        // to hide unmatched nodes
        return this.searchValue && this.hideUnMatched && !this.treeNode.isMatched && !this.treeNode.isExpanded
            ? 'none'
            : '';
    }
    /**
     * reset node class
     * @return {?}
     */
    setClassMap() {
        this.prefixCls = this.selectMode ? 'ant-select-tree' : 'ant-tree';
        this.nzNodeClass = {
            [`${this.prefixCls}-treenode-disabled`]: this.treeNode.isDisabled,
            [`${this.prefixCls}-treenode-switcher-open`]: this.isSwitcherOpen,
            [`${this.prefixCls}-treenode-switcher-close`]: this.isSwitcherClose,
            [`${this.prefixCls}-treenode-checkbox-checked`]: this.treeNode.isChecked,
            [`${this.prefixCls}-treenode-checkbox-indeterminate`]: this.treeNode.isHalfChecked,
            [`${this.prefixCls}-treenode-selected`]: this.treeNode.isSelected,
            [`${this.prefixCls}-treenode-loading`]: this.treeNode.isLoading
        };
        this.nzNodeSwitcherClass = {
            [`${this.prefixCls}-switcher`]: true,
            [`${this.prefixCls}-switcher-noop`]: this.treeNode.isLeaf,
            [`${this.prefixCls}-switcher_open`]: this.isSwitcherOpen,
            [`${this.prefixCls}-switcher_close`]: this.isSwitcherClose
        };
        this.nzNodeCheckboxClass = {
            [`${this.prefixCls}-checkbox`]: true,
            [`${this.prefixCls}-checkbox-checked`]: this.treeNode.isChecked,
            [`${this.prefixCls}-checkbox-indeterminate`]: this.treeNode.isHalfChecked,
            [`${this.prefixCls}-checkbox-disabled`]: this.treeNode.isDisabled || this.treeNode.isDisableCheckbox
        };
        this.nzNodeContentClass = {
            [`${this.prefixCls}-node-content-wrapper`]: true,
            [`${this.prefixCls}-node-content-wrapper-open`]: this.isSwitcherOpen,
            [`${this.prefixCls}-node-content-wrapper-close`]: this.isSwitcherClose,
            [`${this.prefixCls}-node-selected`]: this.treeNode.isSelected
        };
        this.nzNodeContentIconClass = {
            [`${this.prefixCls}-iconEle`]: true,
            [`${this.prefixCls}-icon__customize`]: true
        };
        this.nzNodeContentLoadingClass = {
            [`${this.prefixCls}-iconEle`]: true
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMousedown(event) {
        if (this.selectMode) {
            event.preventDefault();
        }
    }
    /**
     * click node to select, 200ms to dbl click
     * @param {?} event
     * @return {?}
     */
    nzClick(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.treeNode.isSelectable && !this.treeNode.isDisabled) {
            this.treeNode.isSelected = !this.treeNode.isSelected;
        }
        /** @type {?} */
        const eventNext = this.nzTreeService.formatEvent('click', this.treeNode, event);
        // tslint:disable-next-line: no-non-null-assertion
        (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    nzDblClick(event) {
        event.preventDefault();
        event.stopPropagation();
        /** @type {?} */
        const eventNext = this.nzTreeService.formatEvent('dblclick', this.treeNode, event);
        // tslint:disable-next-line: no-non-null-assertion
        (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    nzContextMenu(event) {
        event.preventDefault();
        event.stopPropagation();
        /** @type {?} */
        const eventNext = this.nzTreeService.formatEvent('contextmenu', this.treeNode, event);
        // tslint:disable-next-line: no-non-null-assertion
        (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
    }
    /**
     * collapse node
     * @param {?} event
     * @return {?}
     */
    _clickExpand(event) {
        event.preventDefault();
        event.stopPropagation();
        if (!this.treeNode.isLoading && !this.treeNode.isLeaf) {
            // set async state
            if (this.asyncData && this.treeNode.children.length === 0 && !this.treeNode.isExpanded) {
                this.treeNode.isLoading = true;
            }
            this.treeNode.isExpanded = !this.treeNode.isExpanded;
            /** @type {?} */
            const eventNext = this.nzTreeService.formatEvent('expand', this.treeNode, event);
            // tslint:disable-next-line: no-non-null-assertion
            (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
        }
    }
    /**
     * check node
     * @param {?} event
     * @return {?}
     */
    _clickCheckBox(event) {
        event.preventDefault();
        event.stopPropagation();
        // return if node is disabled
        if (this.treeNode.isDisabled || this.treeNode.isDisableCheckbox) {
            return;
        }
        this.treeNode.isChecked = !this.treeNode.isChecked;
        this.treeNode.isHalfChecked = false;
        if (!this.nzTreeService.isCheckStrictly) {
            this.nzTreeService.conduct(this.treeNode);
        }
        /** @type {?} */
        const eventNext = this.nzTreeService.formatEvent('check', this.treeNode, event);
        // tslint:disable-next-line: no-non-null-assertion
        (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
    }
    /**
     * drag event
     * @return {?}
     */
    clearDragClass() {
        /** @type {?} */
        const dragClass = ['drag-over-gap-top', 'drag-over-gap-bottom', 'drag-over'];
        dragClass.forEach((/**
         * @param {?} e
         * @return {?}
         */
        e => {
            this.renderer.removeClass(this.dragElement.nativeElement, e);
        }));
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleDragStart(e) {
        e.stopPropagation();
        try {
            // ie throw error
            // firefox-need-it
            // tslint:disable-next-line: no-non-null-assertion
            (/** @type {?} */ (e.dataTransfer)).setData('text/plain', (/** @type {?} */ (this.treeNode.key)));
        }
        catch (error) {
            // empty
        }
        this.nzTreeService.setSelectedNode(this.treeNode);
        this.treeNode.isExpanded = false;
        /** @type {?} */
        const eventNext = this.nzTreeService.formatEvent('dragstart', this.treeNode, e);
        // tslint:disable-next-line: no-non-null-assertion
        (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleDragEnter(e) {
        e.preventDefault();
        e.stopPropagation();
        // reset position
        this.dragPos = 2;
        this.ngZone.run((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const node = this.nzTreeService.getSelectedNode();
            if (node && node.key !== this.treeNode.key && !this.treeNode.isExpanded && !this.treeNode.isLeaf) {
                this.treeNode.isExpanded = true;
            }
            /** @type {?} */
            const eventNext = this.nzTreeService.formatEvent('dragenter', this.treeNode, e);
            // tslint:disable-next-line: no-non-null-assertion
            (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
        }));
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleDragOver(e) {
        e.preventDefault();
        e.stopPropagation();
        /** @type {?} */
        const dropPosition = this.nzTreeService.calcDropPosition(e);
        if (this.dragPos !== dropPosition) {
            this.clearDragClass();
            this.dragPos = dropPosition;
            // leaf node will pass
            if (!(this.dragPos === 0 && this.treeNode.isLeaf)) {
                this.renderer.addClass(this.dragElement.nativeElement, this.dragPosClass[this.dragPos]);
            }
        }
        /** @type {?} */
        const eventNext = this.nzTreeService.formatEvent('dragover', this.treeNode, e);
        // tslint:disable-next-line: no-non-null-assertion
        (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleDragLeave(e) {
        e.stopPropagation();
        this.ngZone.run((/**
         * @return {?}
         */
        () => {
            this.clearDragClass();
        }));
        /** @type {?} */
        const eventNext = this.nzTreeService.formatEvent('dragleave', this.treeNode, e);
        // tslint:disable-next-line: no-non-null-assertion
        (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleDragDrop(e) {
        e.preventDefault();
        e.stopPropagation();
        this.ngZone.run((/**
         * @return {?}
         */
        () => {
            this.clearDragClass();
            /** @type {?} */
            const node = this.nzTreeService.getSelectedNode();
            if (!node || (node && node.key === this.treeNode.key) || (this.dragPos === 0 && this.treeNode.isLeaf)) {
                return;
            }
            // pass if node is leafNo
            /** @type {?} */
            const dropEvent = this.nzTreeService.formatEvent('drop', this.treeNode, e);
            /** @type {?} */
            const dragEndEvent = this.nzTreeService.formatEvent('dragend', this.treeNode, e);
            if (this.beforeDrop) {
                this.beforeDrop({
                    // tslint:disable-next-line: no-non-null-assertion
                    dragNode: this.newMethod(),
                    node: this.treeNode,
                    pos: this.dragPos
                }).subscribe((/**
                 * @param {?} canDrop
                 * @return {?}
                 */
                (canDrop) => {
                    if (canDrop) {
                        this.nzTreeService.dropAndApply(this.treeNode, this.dragPos);
                    }
                    // tslint:disable-next-line: no-non-null-assertion
                    (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(dropEvent);
                    // tslint:disable-next-line: no-non-null-assertion
                    (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(dragEndEvent);
                }));
            }
            else if (this.treeNode) {
                this.nzTreeService.dropAndApply(this.treeNode, this.dragPos);
                // tslint:disable-next-line: no-non-null-assertion
                (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(dropEvent);
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    newMethod() {
        // tslint:disable-next-line: no-non-null-assertion
        return (/** @type {?} */ (this.nzTreeService.getSelectedNode()));
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleDragEnd(e) {
        e.stopPropagation();
        this.ngZone.run((/**
         * @return {?}
         */
        () => {
            // if user do not custom beforeDrop
            if (!this.beforeDrop) {
                /** @type {?} */
                const eventNext = this.nzTreeService.formatEvent('dragend', this.treeNode, e);
                // tslint:disable-next-line: no-non-null-assertion
                (/** @type {?} */ ((/** @type {?} */ (this.nzTreeService)).triggerEventChange$)).next(eventNext);
            }
        }));
    }
    /**
     * 监听拖拽事件
     * @return {?}
     */
    handDragEvent() {
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            if (this.draggable) {
                this.destroy$ = new Subject();
                fromEvent(this.elRef.nativeElement, 'dragstart')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => this.handleDragStart(e)));
                fromEvent(this.elRef.nativeElement, 'dragenter')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => this.handleDragEnter(e)));
                fromEvent(this.elRef.nativeElement, 'dragover')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => this.handleDragOver(e)));
                fromEvent(this.elRef.nativeElement, 'dragleave')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => this.handleDragLeave(e)));
                fromEvent(this.elRef.nativeElement, 'drop')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => this.handleDragDrop(e)));
                fromEvent(this.elRef.nativeElement, 'dragend')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => this.handleDragEnd(e)));
            }
            else {
                this.destroy$.next();
                this.destroy$.complete();
            }
        }));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isTemplateRef(value) {
        return value instanceof TemplateRef;
    }
    /**
     * @return {?}
     */
    markForCheck() {
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // init expanded / selected / checked list
        if (this.treeNode.isSelected) {
            this.nzTreeService.setNodeActive(this.treeNode);
        }
        if (this.treeNode.isExpanded) {
            this.nzTreeService.setExpandedNodeList(this.treeNode);
        }
        if (this.treeNode.isChecked) {
            this.nzTreeService.setCheckedNodeList(this.treeNode);
        }
        // TODO
        this.treeNode.component = this;
        this.nzTreeService
            .eventTriggerChanged()
            .pipe(
        // tslint:disable-next-line: no-non-null-assertion
        filter((/**
         * @param {?} data
         * @return {?}
         */
        data => (/** @type {?} */ (data.node)).key === this.treeNode.key)), takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.setClassMap();
            this.markForCheck();
        }));
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
CmacsTreeNodeComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line: component-selector
                selector: 'cmacs-tree-node',
                exportAs: 'cmacsTreeNode',
                template: "<li\r\n  #dragElement\r\n  role=\"treeitem\"\r\n  [style.paddingLeft.px]=\"treeNode.isLeaf ? 16 * treeNode.level : 0\"\r\n  [class.cmacs-tree-child-header]=\"treeNode.isLeaf\"\r\n  [style.display]=\"displayStyle\"\r\n  [ngClass]=\"nzNodeClass\">\r\n  <div [class.cmacs-tree-parent-header]=\"!treeNode.isLeaf\"\r\n       [class.cmacs-tree-node-selected]=\"!treeNode.isLeaf && treeNode.isSelected\"\r\n       [style.border-top-color]=\"selectMode && index ? '#dee0e5' : 'transparent'\"\r\n       [style.paddingLeft.px]=\"!treeNode.isLeaf ? 16 * treeNode.level : 10\">\r\n    <ng-container *ngIf=\"showExpand\">\r\n    <span\r\n      [ngClass]=\"nzNodeSwitcherClass\"\r\n      (click)=\"_clickExpand($event)\">\r\n      <ng-container *ngIf=\"isShowSwitchIcon\">\r\n        <ng-container *ngIf=\"!treeNode.isLoading\">\r\n          <ng-template\r\n            *ngIf=\"isTemplateRef(expandedIcon)\"\r\n            [ngTemplateOutlet]=\"expandedIcon\"\r\n            [ngTemplateOutletContext]=\"{ $implicit: treeNode }\">\r\n          </ng-template>\r\n          <i\r\n            *ngIf=\"!isTemplateRef(expandedIcon)\"\r\n            nz-icon\r\n            type=\"caret-down\"\r\n            [class.ant-select-switcher-icon]=\"selectMode\"\r\n            [class.ant-tree-switcher-icon]=\"!selectMode\">\r\n          </i>\r\n        </ng-container>\r\n        <i *ngIf=\"treeNode.isLoading\" nz-icon type=\"loading\" [spin]=\"true\" class=\"ant-tree-switcher-loading-icon\"></i>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"showLine\">\r\n        <ng-template\r\n          *ngIf=\"isTemplateRef(expandedIcon)\"\r\n          [ngTemplateOutlet]=\"expandedIcon\"\r\n          [ngTemplateOutletContext]=\"{ $implicit: treeNode }\">\r\n        </ng-template>\r\n        <ng-container *ngIf=\"!isTemplateRef(expandedIcon)\">\r\n          <i *ngIf=\"isShowLineIcon\" nz-icon [type]=\"isSwitcherOpen ? 'minus-square' : 'plus-square'\" class=\"ant-tree-switcher-line-icon\"></i>\r\n          <i *ngIf=\"!isShowLineIcon\" nz-icon type=\"file\" class=\"ant-tree-switcher-line-icon\"></i>\r\n        </ng-container>\r\n      </ng-container>\r\n    </span>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"checkable\">\r\n    <span\r\n      [ngClass]=\"nzNodeCheckboxClass\"\r\n      (click)=\"_clickCheckBox($event)\">\r\n      <span [class.ant-tree-checkbox-inner]=\"!selectMode\"\r\n            [class.ant-select-tree-checkbox-inner]=\"selectMode\"></span>\r\n    </span>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"!treeTemplate\">\r\n    <span\r\n      title=\"{{treeNode.title}}\"\r\n      [attr.draggable]=\"canDraggable\"\r\n      [attr.aria-grabbed]=\"canDraggable\"\r\n      [ngClass]=\"nzNodeContentClass\"\r\n      [class.draggable]=\"canDraggable\">\r\n      <span\r\n        *ngIf=\"treeNode.icon && showIcon\"\r\n        [class.ant-tree-icon__open]=\"isSwitcherOpen\"\r\n        [class.ant-tree-icon__close]=\"isSwitcherClose\"\r\n        [class.ant-tree-icon_loading]=\"treeNode.isLoading\"\r\n        [ngClass]=\"nzNodeContentLoadingClass\">\r\n        <span\r\n          [ngClass]=\"nzNodeContentIconClass\">\r\n          <i nz-icon *ngIf=\"nzIcon\" [type]=\"nzIcon\"></i>\r\n        </span>\r\n      </span>\r\n      <span class=\"ant-tree-title\">\r\n        <ng-container *ngIf=\"treeNode.isMatched\">\r\n          <span>\r\n            {{highlightKeys[0]}}<span class=\"font-highlight\">{{searchValue}}</span>{{highlightKeys[1]}}\r\n          </span>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!treeNode.isMatched\">\r\n          {{treeNode.title}}\r\n        </ng-container>\r\n      </span>\r\n    </span>\r\n    </ng-container>\r\n    <ng-template\r\n      [ngTemplateOutlet]=\"treeTemplate\"\r\n      [ngTemplateOutletContext]=\"{ $implicit: treeNode }\">\r\n    </ng-template>\r\n  </div>\r\n\r\n  <ul\r\n    role=\"group\"\r\n    class=\"ant-tree-child-tree\"\r\n    [class.ant-tree-child-tree-open]=\"!selectMode || treeNode.isExpanded\"\r\n    data-expanded=\"true\"\r\n    [@.disabled]=\"noAnimation\"\r\n    [@collapseMotion]=\"treeNode.isExpanded ? 'expanded' : 'collapsed'\">\r\n    <cmacs-tree-node\r\n      *ngFor=\"let node of treeNode.getChildren()\"\r\n      [treeNode]=\"node\"\r\n      [showExpand]=\"showExpand\"\r\n      [noAnimation]=\"noAnimation\"\r\n      [selectMode]=\"selectMode\"\r\n      [showLine]=\"showLine\"\r\n      [expandedIcon]=\"expandedIcon\"\r\n      [draggable]=\"draggable\"\r\n      [checkable]=\"checkable\"\r\n      [asyncData]=\"asyncData\"\r\n      [expandAll]=\"expandAll\"\r\n      [defaultExpandAll]=\"defaultExpandAll\"\r\n      [showIcon]=\"showIcon\"\r\n      [searchValue]=\"searchValue\"\r\n      [hideUnMatched]=\"hideUnMatched\"\r\n      [beforeDrop]=\"beforeDrop\"\r\n      [treeTemplate]=\"treeTemplate\">\r\n    </cmacs-tree-node>\r\n  </ul>\r\n</li>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                animations: [collapseMotion],
                styles: [""]
            }] }
];
/** @nocollapse */
CmacsTreeNodeComponent.ctorParameters = () => [
    { type: NzTreeBaseService },
    { type: NgZone },
    { type: Renderer2 },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
CmacsTreeNodeComponent.propDecorators = {
    dragElement: [{ type: ViewChild, args: ['dragElement',] }],
    treeNode: [{ type: Input }],
    showLine: [{ type: Input }],
    showExpand: [{ type: Input }],
    expandedIcon: [{ type: Input }],
    checkable: [{ type: Input }],
    asyncData: [{ type: Input }],
    hideUnMatched: [{ type: Input }],
    noAnimation: [{ type: Input }],
    selectMode: [{ type: Input }],
    showIcon: [{ type: Input }],
    index: [{ type: Input }],
    treeTemplate: [{ type: Input }],
    beforeDrop: [{ type: Input }],
    draggable: [{ type: Input }],
    defaultExpandAll: [{ type: Input }],
    expandAll: [{ type: Input }],
    searchValue: [{ type: Input }],
    onMousedown: [{ type: HostListener, args: ['mousedown', ['$event'],] }],
    nzClick: [{ type: HostListener, args: ['click', ['$event'],] }],
    nzDblClick: [{ type: HostListener, args: ['dblclick', ['$event'],] }],
    nzContextMenu: [{ type: HostListener, args: ['contextmenu', ['$event'],] }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], CmacsTreeNodeComponent.prototype, "showLine", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], CmacsTreeNodeComponent.prototype, "showExpand", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], CmacsTreeNodeComponent.prototype, "checkable", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], CmacsTreeNodeComponent.prototype, "asyncData", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsTreeNodeComponent.prototype, "hideUnMatched", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsTreeNodeComponent.prototype, "noAnimation", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsTreeNodeComponent.prototype, "selectMode", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsTreeNodeComponent.prototype, "showIcon", void 0);
if (false) {
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.dragElement;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.treeNode;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.showLine;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.showExpand;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.expandedIcon;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.checkable;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.asyncData;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.hideUnMatched;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.noAnimation;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.selectMode;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.showIcon;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.index;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.treeTemplate;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.beforeDrop;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.prefixCls;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.highlightKeys;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.nzNodeClass;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.nzNodeSwitcherClass;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.nzNodeContentClass;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.nzNodeCheckboxClass;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.nzNodeContentIconClass;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.nzNodeContentLoadingClass;
    /**
     * drag var
     * @type {?}
     */
    CmacsTreeNodeComponent.prototype.destroy$;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.dragPos;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.dragPosClass;
    /**
     * default set
     * @type {?}
     */
    CmacsTreeNodeComponent.prototype._searchValue;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype._draggable;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype._expandAll;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.nzTreeService;
    /**
     * @type {?}
     * @private
     */
    CmacsTreeNodeComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    CmacsTreeNodeComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    CmacsTreeNodeComponent.prototype.elRef;
    /**
     * @type {?}
     * @private
     */
    CmacsTreeNodeComponent.prototype.cdr;
    /** @type {?} */
    CmacsTreeNodeComponent.prototype.nzNoAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdHJlZS1ub2RlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtdHJlZS9jbWFjcy10cmVlLW5vZGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixJQUFJLEVBQ0osWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBSU4sUUFBUSxFQUNSLFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUNMLGNBQWMsRUFDZCxZQUFZLEVBRVosc0JBQXNCLEVBQ3RCLGlCQUFpQixFQUNqQixVQUFVLEVBQ1gsTUFBTSxvQkFBb0IsQ0FBQztBQVk1QixNQUFNLE9BQU8sc0JBQXNCOzs7Ozs7Ozs7SUEwYWpDLFlBQ1MsYUFBZ0MsRUFDL0IsTUFBYyxFQUNkLFFBQW1CLEVBQ25CLEtBQWlCLEVBQ2pCLEdBQXNCLEVBQ0gsYUFBc0M7UUFMMUQsa0JBQWEsR0FBYixhQUFhLENBQW1CO1FBQy9CLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDSCxrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7UUF2YTFDLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsYUFBUSxHQUFH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MENBQTJDOztJQUMzQyw0Q0FBNkM7O0lBQzdDLDhDQUE4RDs7SUFDOUQsMkNBQTRDOztJQUM1QywyQ0FBNEM7O0lBQzVDLCtDQUErQzs7SUFDL0MsNkNBQTZDOztJQUM3Qyw0Q0FBNEM7O0lBQzVDLDBDQUEwQzs7SUFDMUMsdUNBQXVCOztJQUN2Qiw4Q0FBeUM7O0lBQ3pDLDRDQUErRTs7SUE2RC9FLDJDQUF1Qjs7SUFDdkIsK0NBQTZCOztJQUM3Qiw2Q0FBaUI7O0lBQ2pCLHFEQUF5Qjs7SUFDekIsb0RBQXdCOztJQUN4QixxREFBeUI7O0lBQ3pCLHdEQUE0Qjs7SUFDNUIsMkRBQStCOzs7OztJQUsvQiwwQ0FBeUI7O0lBQ3pCLHlDQUFZOztJQUNaLDhDQUlFOzs7OztJQU1GLDhDQUFrQjs7SUFFbEIsNENBQW1COztJQUVuQiw0Q0FBbUI7O0lBbVVqQiwrQ0FBdUM7Ozs7O0lBQ3ZDLHdDQUFzQjs7Ozs7SUFDdEIsMENBQTJCOzs7OztJQUMzQix1Q0FBeUI7Ozs7O0lBQ3pCLHFDQUE4Qjs7SUFDOUIsK0NBQWlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0LFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBjb2xsYXBzZU1vdGlvbixcclxuICBJbnB1dEJvb2xlYW4sXHJcbiAgTnpGb3JtYXRCZWZvcmVEcm9wRXZlbnQsXHJcbiAgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSxcclxuICBOelRyZWVCYXNlU2VydmljZSxcclxuICBOelRyZWVOb2RlXHJcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnY21hY3MtdHJlZS1ub2RlJyxcclxuICBleHBvcnRBczogJ2NtYWNzVHJlZU5vZGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy10cmVlLW5vZGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXRyZWUtbm9kZS5jb21wb25lbnQuY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgYW5pbWF0aW9uczogW2NvbGxhcHNlTW90aW9uXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NUcmVlTm9kZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIEBWaWV3Q2hpbGQoJ2RyYWdFbGVtZW50JykgZHJhZ0VsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBJbnB1dCgpIHRyZWVOb2RlOiBOelRyZWVOb2RlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93TGluZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd0V4cGFuZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBleHBhbmRlZEljb246IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelRyZWVOb2RlIH0+O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjaGVja2FibGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGFzeW5jRGF0YTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaGlkZVVuTWF0Y2hlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBub0FuaW1hdGlvbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzZWxlY3RNb2RlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dJY29uID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaW5kZXg6IG51bWJlcjtcclxuICBASW5wdXQoKSB0cmVlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIGJlZm9yZURyb3A6IChjb25maXJtOiBOekZvcm1hdEJlZm9yZURyb3BFdmVudCkgPT4gT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgZHJhZ2dhYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9kcmFnZ2FibGUgPSB2YWx1ZTtcclxuICAgIHRoaXMuaGFuZERyYWdFdmVudCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRyYWdnYWJsZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9kcmFnZ2FibGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCB1c2VcclxuICAgKiBleHBhbmRBbGwgaW5zdGVhZFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGRlZmF1bHRFeHBhbmRBbGwodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2V4cGFuZEFsbCA9IHZhbHVlO1xyXG4gICAgaWYgKHZhbHVlICYmIHRoaXMudHJlZU5vZGUgJiYgIXRoaXMudHJlZU5vZGUuaXNMZWFmKSB7XHJcbiAgICAgIHRoaXMudHJlZU5vZGUuaXNFeHBhbmRlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgZGVmYXVsdEV4cGFuZEFsbCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9leHBhbmRBbGw7XHJcbiAgfVxyXG5cclxuICAvLyBkZWZhdWx0IHNldFxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGV4cGFuZEFsbCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fZXhwYW5kQWxsID0gdmFsdWU7XHJcbiAgICBpZiAodmFsdWUgJiYgdGhpcy50cmVlTm9kZSAmJiAhdGhpcy50cmVlTm9kZS5pc0xlYWYpIHtcclxuICAgICAgdGhpcy50cmVlTm9kZS5pc0V4cGFuZGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBleHBhbmRBbGwoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZXhwYW5kQWxsO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgc2VhcmNoVmFsdWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5oaWdobGlnaHRLZXlzID0gW107XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICBpZiAodmFsdWUgJiYgdGhpcy50cmVlTm9kZS50aXRsZSEuaW5jbHVkZXModmFsdWUpKSB7XHJcbiAgICAgIC8vIG1hdGNoIHRoZSBzZWFyY2ggdmFsdWVcclxuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnRyZWVOb2RlLnRpdGxlLmluZGV4T2YodmFsdWUpO1xyXG4gICAgICB0aGlzLmhpZ2hsaWdodEtleXMgPSBbXHJcbiAgICAgICAgdGhpcy50cmVlTm9kZS50aXRsZS5zbGljZSgwLCBpbmRleCksXHJcbiAgICAgICAgdGhpcy50cmVlTm9kZS50aXRsZS5zbGljZShpbmRleCArIHZhbHVlLmxlbmd0aCwgdGhpcy50cmVlTm9kZS50aXRsZS5sZW5ndGgpXHJcbiAgICAgIF07XHJcbiAgICB9XHJcbiAgICB0aGlzLl9zZWFyY2hWYWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNlYXJjaFZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VhcmNoVmFsdWU7XHJcbiAgfVxyXG5cclxuICAvLyBkZWZhdWx0IHZhclxyXG4gIHByZWZpeENscyA9ICdhbnQtdHJlZSc7XHJcbiAgaGlnaGxpZ2h0S2V5czogc3RyaW5nW10gPSBbXTtcclxuICBuek5vZGVDbGFzcyA9IHt9O1xyXG4gIG56Tm9kZVN3aXRjaGVyQ2xhc3MgPSB7fTtcclxuICBuek5vZGVDb250ZW50Q2xhc3MgPSB7fTtcclxuICBuek5vZGVDaGVja2JveENsYXNzID0ge307XHJcbiAgbnpOb2RlQ29udGVudEljb25DbGFzcyA9IHt9O1xyXG4gIG56Tm9kZUNvbnRlbnRMb2FkaW5nQ2xhc3MgPSB7fTtcclxuXHJcbiAgLyoqXHJcbiAgICogZHJhZyB2YXJcclxuICAgKi9cclxuICBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgZHJhZ1BvcyA9IDI7XHJcbiAgZHJhZ1Bvc0NsYXNzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge1xyXG4gICAgJzAnOiAnZHJhZy1vdmVyJyxcclxuICAgICcxJzogJ2RyYWctb3Zlci1nYXAtYm90dG9tJyxcclxuICAgICctMSc6ICdkcmFnLW92ZXItZ2FwLXRvcCdcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBkZWZhdWx0IHNldFxyXG4gICAqL1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHZhcmlhYmxlLW5hbWVcclxuICBfc2VhcmNoVmFsdWUgPSAnJztcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB2YXJpYWJsZS1uYW1lXHJcbiAgX2RyYWdnYWJsZSA9IGZhbHNlO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHZhcmlhYmxlLW5hbWVcclxuICBfZXhwYW5kQWxsID0gZmFsc2U7XHJcblxyXG4gIGdldCBuekljb24oKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLnRyZWVOb2RlLmljb247XHJcbiAgfVxyXG5cclxuICBnZXQgY2FuRHJhZ2dhYmxlKCk6IGJvb2xlYW4gfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZSAmJiAhdGhpcy50cmVlTm9kZS5pc0Rpc2FibGVkID8gdHJ1ZSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNTaG93TGluZUljb24oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIXRoaXMudHJlZU5vZGUuaXNMZWFmICYmIHRoaXMuc2hvd0xpbmU7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNTaG93U3dpdGNoSWNvbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhdGhpcy50cmVlTm9kZS5pc0xlYWYgJiYgIXRoaXMuc2hvd0xpbmU7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNTd2l0Y2hlck9wZW4oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy50cmVlTm9kZS5pc0V4cGFuZGVkICYmICF0aGlzLnRyZWVOb2RlLmlzTGVhZjtcclxuICB9XHJcblxyXG4gIGdldCBpc1N3aXRjaGVyQ2xvc2UoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIXRoaXMudHJlZU5vZGUuaXNFeHBhbmRlZCAmJiAhdGhpcy50cmVlTm9kZS5pc0xlYWY7XHJcbiAgfVxyXG5cclxuICBnZXQgZGlzcGxheVN0eWxlKCk6IHN0cmluZyB7XHJcbiAgICAvLyB0byBoaWRlIHVubWF0Y2hlZCBub2Rlc1xyXG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoVmFsdWUgJiYgdGhpcy5oaWRlVW5NYXRjaGVkICYmICF0aGlzLnRyZWVOb2RlLmlzTWF0Y2hlZCAmJiAhdGhpcy50cmVlTm9kZS5pc0V4cGFuZGVkXHJcbiAgICAgID8gJ25vbmUnXHJcbiAgICAgIDogJyc7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZXNldCBub2RlIGNsYXNzXHJcbiAgICovXHJcbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLnByZWZpeENscyA9IHRoaXMuc2VsZWN0TW9kZSA/ICdhbnQtc2VsZWN0LXRyZWUnIDogJ2FudC10cmVlJztcclxuICAgIHRoaXMubnpOb2RlQ2xhc3MgPSB7XHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tdHJlZW5vZGUtZGlzYWJsZWRgXTogdGhpcy50cmVlTm9kZS5pc0Rpc2FibGVkLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXRyZWVub2RlLXN3aXRjaGVyLW9wZW5gXTogdGhpcy5pc1N3aXRjaGVyT3BlbixcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS10cmVlbm9kZS1zd2l0Y2hlci1jbG9zZWBdOiB0aGlzLmlzU3dpdGNoZXJDbG9zZSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS10cmVlbm9kZS1jaGVja2JveC1jaGVja2VkYF06IHRoaXMudHJlZU5vZGUuaXNDaGVja2VkLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXRyZWVub2RlLWNoZWNrYm94LWluZGV0ZXJtaW5hdGVgXTogdGhpcy50cmVlTm9kZS5pc0hhbGZDaGVja2VkLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXRyZWVub2RlLXNlbGVjdGVkYF06IHRoaXMudHJlZU5vZGUuaXNTZWxlY3RlZCxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS10cmVlbm9kZS1sb2FkaW5nYF06IHRoaXMudHJlZU5vZGUuaXNMb2FkaW5nXHJcbiAgICB9O1xyXG4gICAgdGhpcy5uek5vZGVTd2l0Y2hlckNsYXNzID0ge1xyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXN3aXRjaGVyYF06IHRydWUsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tc3dpdGNoZXItbm9vcGBdOiB0aGlzLnRyZWVOb2RlLmlzTGVhZixcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1zd2l0Y2hlcl9vcGVuYF06IHRoaXMuaXNTd2l0Y2hlck9wZW4sXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tc3dpdGNoZXJfY2xvc2VgXTogdGhpcy5pc1N3aXRjaGVyQ2xvc2VcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5uek5vZGVDaGVja2JveENsYXNzID0ge1xyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWNoZWNrYm94YF06IHRydWUsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY2hlY2tib3gtY2hlY2tlZGBdOiB0aGlzLnRyZWVOb2RlLmlzQ2hlY2tlZCxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jaGVja2JveC1pbmRldGVybWluYXRlYF06IHRoaXMudHJlZU5vZGUuaXNIYWxmQ2hlY2tlZCxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jaGVja2JveC1kaXNhYmxlZGBdOiB0aGlzLnRyZWVOb2RlLmlzRGlzYWJsZWQgfHwgdGhpcy50cmVlTm9kZS5pc0Rpc2FibGVDaGVja2JveFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLm56Tm9kZUNvbnRlbnRDbGFzcyA9IHtcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1ub2RlLWNvbnRlbnQtd3JhcHBlcmBdOiB0cnVlLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LW5vZGUtY29udGVudC13cmFwcGVyLW9wZW5gXTogdGhpcy5pc1N3aXRjaGVyT3BlbixcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1ub2RlLWNvbnRlbnQtd3JhcHBlci1jbG9zZWBdOiB0aGlzLmlzU3dpdGNoZXJDbG9zZSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1ub2RlLXNlbGVjdGVkYF06IHRoaXMudHJlZU5vZGUuaXNTZWxlY3RlZFxyXG4gICAgfTtcclxuICAgIHRoaXMubnpOb2RlQ29udGVudEljb25DbGFzcyA9IHtcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1pY29uRWxlYF06IHRydWUsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30taWNvbl9fY3VzdG9taXplYF06IHRydWVcclxuICAgIH07XHJcbiAgICB0aGlzLm56Tm9kZUNvbnRlbnRMb2FkaW5nQ2xhc3MgPSB7XHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30taWNvbkVsZWBdOiB0cnVlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJywgWyckZXZlbnQnXSlcclxuICBvbk1vdXNlZG93bihldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0TW9kZSkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogY2xpY2sgbm9kZSB0byBzZWxlY3QsIDIwMG1zIHRvIGRibCBjbGlja1xyXG4gICAqL1xyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcclxuICBuekNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBpZiAodGhpcy50cmVlTm9kZS5pc1NlbGVjdGFibGUgJiYgIXRoaXMudHJlZU5vZGUuaXNEaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLnRyZWVOb2RlLmlzU2VsZWN0ZWQgPSAhdGhpcy50cmVlTm9kZS5pc1NlbGVjdGVkO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZXZlbnROZXh0ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdjbGljaycsIHRoaXMudHJlZU5vZGUsIGV2ZW50KTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1ub24tbnVsbC1hc3NlcnRpb25cclxuICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChldmVudE5leHQpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZGJsY2xpY2snLCBbJyRldmVudCddKVxyXG4gIG56RGJsQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGNvbnN0IGV2ZW50TmV4dCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZGJsY2xpY2snLCB0aGlzLnRyZWVOb2RlLCBldmVudCk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoZXZlbnROZXh0KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSBldmVudFxyXG4gICAqL1xyXG4gIEBIb3N0TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgWyckZXZlbnQnXSlcclxuICBuekNvbnRleHRNZW51KGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2NvbnRleHRtZW51JywgdGhpcy50cmVlTm9kZSwgZXZlbnQpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGV2ZW50TmV4dCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBjb2xsYXBzZSBub2RlXHJcbiAgICogQHBhcmFtIGV2ZW50XHJcbiAgICovXHJcbiAgX2NsaWNrRXhwYW5kKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBpZiAoIXRoaXMudHJlZU5vZGUuaXNMb2FkaW5nICYmICF0aGlzLnRyZWVOb2RlLmlzTGVhZikge1xyXG4gICAgICAvLyBzZXQgYXN5bmMgc3RhdGVcclxuICAgICAgaWYgKHRoaXMuYXN5bmNEYXRhICYmIHRoaXMudHJlZU5vZGUuY2hpbGRyZW4ubGVuZ3RoID09PSAwICYmICF0aGlzLnRyZWVOb2RlLmlzRXhwYW5kZWQpIHtcclxuICAgICAgICB0aGlzLnRyZWVOb2RlLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy50cmVlTm9kZS5pc0V4cGFuZGVkID0gIXRoaXMudHJlZU5vZGUuaXNFeHBhbmRlZDtcclxuICAgICAgY29uc3QgZXZlbnROZXh0ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdleHBhbmQnLCB0aGlzLnRyZWVOb2RlLCBldmVudCk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChldmVudE5leHQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogY2hlY2sgbm9kZVxyXG4gICAqIEBwYXJhbSBldmVudFxyXG4gICAqL1xyXG4gIF9jbGlja0NoZWNrQm94KGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAvLyByZXR1cm4gaWYgbm9kZSBpcyBkaXNhYmxlZFxyXG4gICAgaWYgKHRoaXMudHJlZU5vZGUuaXNEaXNhYmxlZCB8fCB0aGlzLnRyZWVOb2RlLmlzRGlzYWJsZUNoZWNrYm94KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMudHJlZU5vZGUuaXNDaGVja2VkID0gIXRoaXMudHJlZU5vZGUuaXNDaGVja2VkO1xyXG4gICAgdGhpcy50cmVlTm9kZS5pc0hhbGZDaGVja2VkID0gZmFsc2U7XHJcbiAgICBpZiAoIXRoaXMubnpUcmVlU2VydmljZS5pc0NoZWNrU3RyaWN0bHkpIHtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNvbmR1Y3QodGhpcy50cmVlTm9kZSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2NoZWNrJywgdGhpcy50cmVlTm9kZSwgZXZlbnQpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGV2ZW50TmV4dCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBkcmFnIGV2ZW50XHJcbiAgICogQHBhcmFtIGVcclxuICAgKi9cclxuICBjbGVhckRyYWdDbGFzcygpOiB2b2lkIHtcclxuICAgIGNvbnN0IGRyYWdDbGFzcyA9IFsnZHJhZy1vdmVyLWdhcC10b3AnLCAnZHJhZy1vdmVyLWdhcC1ib3R0b20nLCAnZHJhZy1vdmVyJ107XHJcbiAgICBkcmFnQ2xhc3MuZm9yRWFjaChlID0+IHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmRyYWdFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIGUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEcmFnU3RhcnQoZTogRHJhZ0V2ZW50KTogdm9pZCB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gaWUgdGhyb3cgZXJyb3JcclxuICAgICAgLy8gZmlyZWZveC1uZWVkLWl0XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICAgIGUuZGF0YVRyYW5zZmVyIS5zZXREYXRhKCd0ZXh0L3BsYWluJywgdGhpcy50cmVlTm9kZS5rZXkhKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIC8vIGVtcHR5XHJcbiAgICB9XHJcbiAgICB0aGlzLm56VHJlZVNlcnZpY2Uuc2V0U2VsZWN0ZWROb2RlKHRoaXMudHJlZU5vZGUpO1xyXG4gICAgdGhpcy50cmVlTm9kZS5pc0V4cGFuZGVkID0gZmFsc2U7XHJcbiAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2RyYWdzdGFydCcsIHRoaXMudHJlZU5vZGUsIGUpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGV2ZW50TmV4dCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEcmFnRW50ZXIoZTogRHJhZ0V2ZW50KTogdm9pZCB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgLy8gcmVzZXQgcG9zaXRpb25cclxuICAgIHRoaXMuZHJhZ1BvcyA9IDI7XHJcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICBjb25zdCBub2RlID0gdGhpcy5uelRyZWVTZXJ2aWNlLmdldFNlbGVjdGVkTm9kZSgpO1xyXG4gICAgICBpZiAobm9kZSAmJiBub2RlLmtleSAhPT0gdGhpcy50cmVlTm9kZS5rZXkgJiYgIXRoaXMudHJlZU5vZGUuaXNFeHBhbmRlZCAmJiAhdGhpcy50cmVlTm9kZS5pc0xlYWYpIHtcclxuICAgICAgICB0aGlzLnRyZWVOb2RlLmlzRXhwYW5kZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGV2ZW50TmV4dCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZHJhZ2VudGVyJywgdGhpcy50cmVlTm9kZSwgZSk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChldmVudE5leHQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEcmFnT3ZlcihlOiBEcmFnRXZlbnQpOiB2b2lkIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBjb25zdCBkcm9wUG9zaXRpb24gPSB0aGlzLm56VHJlZVNlcnZpY2UuY2FsY0Ryb3BQb3NpdGlvbihlKTtcclxuICAgIGlmICh0aGlzLmRyYWdQb3MgIT09IGRyb3BQb3NpdGlvbikge1xyXG4gICAgICB0aGlzLmNsZWFyRHJhZ0NsYXNzKCk7XHJcbiAgICAgIHRoaXMuZHJhZ1BvcyA9IGRyb3BQb3NpdGlvbjtcclxuICAgICAgLy8gbGVhZiBub2RlIHdpbGwgcGFzc1xyXG4gICAgICBpZiAoISh0aGlzLmRyYWdQb3MgPT09IDAgJiYgdGhpcy50cmVlTm9kZS5pc0xlYWYpKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmRyYWdFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMuZHJhZ1Bvc0NsYXNzW3RoaXMuZHJhZ1Bvc10pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2RyYWdvdmVyJywgdGhpcy50cmVlTm9kZSwgZSk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoZXZlbnROZXh0KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZURyYWdMZWF2ZShlOiBEcmFnRXZlbnQpOiB2b2lkIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLmNsZWFyRHJhZ0NsYXNzKCk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGV2ZW50TmV4dCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZHJhZ2xlYXZlJywgdGhpcy50cmVlTm9kZSwgZSk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoZXZlbnROZXh0KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZURyYWdEcm9wKGU6IERyYWdFdmVudCk6IHZvaWQge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2xlYXJEcmFnQ2xhc3MoKTtcclxuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMubnpUcmVlU2VydmljZS5nZXRTZWxlY3RlZE5vZGUoKTtcclxuICAgICAgaWYgKCFub2RlIHx8IChub2RlICYmIG5vZGUua2V5ID09PSB0aGlzLnRyZWVOb2RlLmtleSkgfHwgKHRoaXMuZHJhZ1BvcyA9PT0gMCAmJiB0aGlzLnRyZWVOb2RlLmlzTGVhZikpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgLy8gcGFzcyBpZiBub2RlIGlzIGxlYWZOb1xyXG4gICAgICBjb25zdCBkcm9wRXZlbnQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2Ryb3AnLCB0aGlzLnRyZWVOb2RlLCBlKTtcclxuICAgICAgY29uc3QgZHJhZ0VuZEV2ZW50ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdkcmFnZW5kJywgdGhpcy50cmVlTm9kZSwgZSk7XHJcbiAgICAgIGlmICh0aGlzLmJlZm9yZURyb3ApIHtcclxuICAgICAgICB0aGlzLmJlZm9yZURyb3Aoe1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgICAgICAgZHJhZ05vZGU6IHRoaXMubmV3TWV0aG9kKCksXHJcbiAgICAgICAgICBub2RlOiB0aGlzLnRyZWVOb2RlLFxyXG4gICAgICAgICAgcG9zOiB0aGlzLmRyYWdQb3NcclxuICAgICAgICB9KS5zdWJzY3JpYmUoKGNhbkRyb3A6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICAgIGlmIChjYW5Ecm9wKSB7XHJcbiAgICAgICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5kcm9wQW5kQXBwbHkodGhpcy50cmVlTm9kZSwgdGhpcy5kcmFnUG9zKTtcclxuICAgICAgICAgIH1cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1ub24tbnVsbC1hc3NlcnRpb25cclxuICAgICAgICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChkcm9wRXZlbnQpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGRyYWdFbmRFdmVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50cmVlTm9kZSkge1xyXG4gICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5kcm9wQW5kQXBwbHkodGhpcy50cmVlTm9kZSwgdGhpcy5kcmFnUG9zKTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1ub24tbnVsbC1hc3NlcnRpb25cclxuICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoZHJvcEV2ZW50KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG5ld01ldGhvZCgpOiBOelRyZWVOb2RlIHtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1ub24tbnVsbC1hc3NlcnRpb25cclxuICAgIHJldHVybiB0aGlzLm56VHJlZVNlcnZpY2UuZ2V0U2VsZWN0ZWROb2RlKCkhO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRHJhZ0VuZChlOiBEcmFnRXZlbnQpOiB2b2lkIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAvLyBpZiB1c2VyIGRvIG5vdCBjdXN0b20gYmVmb3JlRHJvcFxyXG4gICAgICBpZiAoIXRoaXMuYmVmb3JlRHJvcCkge1xyXG4gICAgICAgIGNvbnN0IGV2ZW50TmV4dCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZHJhZ2VuZCcsIHRoaXMudHJlZU5vZGUsIGUpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChldmVudE5leHQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOebkeWQrOaLluaLveS6i+S7tlxyXG4gICAqL1xyXG4gIGhhbmREcmFnRXZlbnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmRyYWdnYWJsZSkge1xyXG4gICAgICAgIHRoaXMuZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG4gICAgICAgIGZyb21FdmVudDxEcmFnRXZlbnQ+KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgJ2RyYWdzdGFydCcpXHJcbiAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgICAgICAuc3Vic2NyaWJlKChlOiBEcmFnRXZlbnQpID0+IHRoaXMuaGFuZGxlRHJhZ1N0YXJ0KGUpKTtcclxuICAgICAgICBmcm9tRXZlbnQ8RHJhZ0V2ZW50Pih0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsICdkcmFnZW50ZXInKVxyXG4gICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAgICAgLnN1YnNjcmliZSgoZTogRHJhZ0V2ZW50KSA9PiB0aGlzLmhhbmRsZURyYWdFbnRlcihlKSk7XHJcbiAgICAgICAgZnJvbUV2ZW50PERyYWdFdmVudD4odGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCAnZHJhZ292ZXInKVxyXG4gICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAgICAgLnN1YnNjcmliZSgoZTogRHJhZ0V2ZW50KSA9PiB0aGlzLmhhbmRsZURyYWdPdmVyKGUpKTtcclxuICAgICAgICBmcm9tRXZlbnQ8RHJhZ0V2ZW50Pih0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsICdkcmFnbGVhdmUnKVxyXG4gICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAgICAgLnN1YnNjcmliZSgoZTogRHJhZ0V2ZW50KSA9PiB0aGlzLmhhbmRsZURyYWdMZWF2ZShlKSk7XHJcbiAgICAgICAgZnJvbUV2ZW50PERyYWdFdmVudD4odGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCAnZHJvcCcpXHJcbiAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgICAgICAuc3Vic2NyaWJlKChlOiBEcmFnRXZlbnQpID0+IHRoaXMuaGFuZGxlRHJhZ0Ryb3AoZSkpO1xyXG4gICAgICAgIGZyb21FdmVudDxEcmFnRXZlbnQ+KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgJ2RyYWdlbmQnKVxyXG4gICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAgICAgLnN1YnNjcmliZSgoZTogRHJhZ0V2ZW50KSA9PiB0aGlzLmhhbmRsZURyYWdFbmQoZSkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpc1RlbXBsYXRlUmVmKHZhbHVlOiB7fSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWY7XHJcbiAgfVxyXG5cclxuICBtYXJrRm9yQ2hlY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIG56VHJlZVNlcnZpY2U6IE56VHJlZUJhc2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBuek5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAvLyBpbml0IGV4cGFuZGVkIC8gc2VsZWN0ZWQgLyBjaGVja2VkIGxpc3RcclxuICAgIGlmICh0aGlzLnRyZWVOb2RlLmlzU2VsZWN0ZWQpIHtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLnNldE5vZGVBY3RpdmUodGhpcy50cmVlTm9kZSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50cmVlTm9kZS5pc0V4cGFuZGVkKSB7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5zZXRFeHBhbmRlZE5vZGVMaXN0KHRoaXMudHJlZU5vZGUpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudHJlZU5vZGUuaXNDaGVja2VkKSB7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5zZXRDaGVja2VkTm9kZUxpc3QodGhpcy50cmVlTm9kZSk7XHJcbiAgICB9XHJcbiAgICAvLyBUT0RPXHJcbiAgICB0aGlzLnRyZWVOb2RlLmNvbXBvbmVudCA9IHRoaXM7XHJcbiAgICB0aGlzLm56VHJlZVNlcnZpY2VcclxuICAgICAgLmV2ZW50VHJpZ2dlckNoYW5nZWQoKVxyXG4gICAgICAucGlwZShcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1ub24tbnVsbC1hc3NlcnRpb25cclxuICAgICAgICBmaWx0ZXIoZGF0YSA9PiBkYXRhLm5vZGUhLmtleSA9PT0gdGhpcy50cmVlTm9kZS5rZXkpLFxyXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgICAgICB0aGlzLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9KTtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIl19