/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { forwardRef, ChangeDetectorRef, Component, ContentChild, EventEmitter, Host, Input, Optional, Output, SkipSelf, TemplateRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { isNotNil, toBoolean, InputBoolean, NzNoAnimationDirective, NzTreeBase, NzTreeBaseService, NzTreeHigherOrderServiceToken } from 'ng-zorro-antd/core';
import { NzTreeService } from './cmacs-tree.service';
/**
 * @param {?} higherOrderService
 * @param {?} treeService
 * @return {?}
 */
export function NzTreeServiceFactory(higherOrderService, treeService) {
    return higherOrderService ? higherOrderService : treeService;
}
var CmacsTreeComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CmacsTreeComponent, _super);
    function CmacsTreeComponent(nzTreeService, cdr, noAnimation) {
        var _this = _super.call(this, nzTreeService) || this;
        _this.cdr = cdr;
        _this.noAnimation = noAnimation;
        _this.showIcon = false;
        _this.showExpand = true;
        _this.showLine = false;
        _this.checkable = false;
        _this.asyncData = false;
        _this.draggable = false;
        _this.expandAll = false;
        _this.hideUnMatched = false;
        _this.selectMode = false;
        _this.nzCheckStrictly = false;
        _this.nzBlockNode = false;
        /**
         * @deprecated use
         * expandAll instead
         */
        _this.defaultExpandAll = false;
        // model bind
        _this.nzExpandedKeysChange = new EventEmitter();
        _this.nzSelectedKeysChange = new EventEmitter();
        _this.nzCheckedKeysChange = new EventEmitter();
        _this.searchValueChange = new EventEmitter();
        /**
         * @deprecated use
         * searchValueChange instead
         */
        _this.nzOnSearchNode = new EventEmitter();
        _this.nzClick = new EventEmitter();
        _this.nzDblClick = new EventEmitter();
        _this.nzContextMenu = new EventEmitter();
        _this.nzCheckBoxChange = new EventEmitter();
        _this.nzExpandChange = new EventEmitter();
        _this.nzOnDragStart = new EventEmitter();
        _this.nzOnDragEnter = new EventEmitter();
        _this.nzOnDragOver = new EventEmitter();
        _this.nzOnDragLeave = new EventEmitter();
        _this.nzOnDrop = new EventEmitter();
        _this.nzOnDragEnd = new EventEmitter();
        // tslint:disable-next-line: variable-name
        _this._nzMultiple = false;
        _this.nzDefaultSubject = new ReplaySubject(6);
        _this.destroy$ = new Subject();
        _this.prefixCls = 'ant-tree';
        _this.classMap = {};
        _this.onChange = (/**
         * @return {?}
         */
        function () { return null; });
        _this.onTouched = (/**
         * @return {?}
         */
        function () { return null; });
        return _this;
    }
    Object.defineProperty(CmacsTreeComponent.prototype, "nzMultiple", {
        get: /**
         * @return {?}
         */
        function () {
            return this._nzMultiple;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._nzMultiple = toBoolean(value);
            this.nzTreeService.isMultiple = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTreeComponent.prototype, "nzData", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.initNzData(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTreeComponent.prototype, "nzDefaultExpandedKeys", {
        /**
         * @deprecated use
         * nzExpandedKeys instead
         */
        set: /**
         * @deprecated use
         * nzExpandedKeys instead
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzDefaultSubject.next({ type: 'nzExpandedKeys', keys: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTreeComponent.prototype, "nzDefaultSelectedKeys", {
        /**
         * @deprecated use
         * nzSelectedKeys instead
         */
        set: /**
         * @deprecated use
         * nzSelectedKeys instead
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzDefaultSubject.next({ type: 'nzSelectedKeys', keys: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTreeComponent.prototype, "nzDefaultCheckedKeys", {
        /**
         * @deprecated use
         * nzCheckedKeys instead
         */
        set: /**
         * @deprecated use
         * nzCheckedKeys instead
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzDefaultSubject.next({ type: 'nzCheckedKeys', keys: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTreeComponent.prototype, "nzExpandedKeys", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzDefaultSubject.next({ type: 'nzExpandedKeys', keys: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTreeComponent.prototype, "nzSelectedKeys", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzDefaultSubject.next({ type: 'nzSelectedKeys', keys: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTreeComponent.prototype, "nzCheckedKeys", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzDefaultSubject.next({ type: 'nzCheckedKeys', keys: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTreeComponent.prototype, "searchValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._searchValue;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._searchValue = value;
            this.nzTreeService.searchExpand(value);
            if (isNotNil(value)) {
                this.searchValueChange.emit(this.nzTreeService.formatEvent('search', null, null));
                // tslint:disable-next-line: deprecation
                this.nzOnSearchNode.emit(this.nzTreeService.formatEvent('search', null, null));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTreeComponent.prototype, "nzNodes", {
        /**
         * To render nodes if root is changed
         */
        get: /**
         * To render nodes if root is changed
         * @return {?}
         */
        function () {
            return this.nzTreeService.rootNodes;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CmacsTreeComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this.classMap = (_a = {},
            _a[this.prefixCls] = true,
            _a[this.prefixCls + '-show-line'] = this.showLine,
            _a[this.prefixCls + "-icon-hide"] = !this.showIcon,
            _a[this.prefixCls + "-block-node"] = this.nzBlockNode,
            _a['draggable-tree'] = this.draggable,
            _a['ant-select-tree'] = this.selectMode,
            _a);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsTreeComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.initNzData(value);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CmacsTreeComponent.prototype.registerOnChange = /**
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
    CmacsTreeComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsTreeComponent.prototype.initNzData = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (Array.isArray(value)) {
            this.nzTreeService.isCheckStrictly = this.nzCheckStrictly;
            this.nzTreeService.isMultiple = this.nzMultiple;
            this.nzTreeService.initTree(this.coerceTreeNodes(value));
        }
    };
    /**
     * @return {?}
     */
    CmacsTreeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.setClassMap();
        this.nzDefaultSubject.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (!data || !data.keys) {
                return;
            }
            switch (data.type) {
                case 'nzExpandedKeys':
                    _this.nzTreeService.calcExpandedKeys(data.keys, _this.nzNodes);
                    _this.nzExpandedKeysChange.emit(data.keys);
                    break;
                case 'nzSelectedKeys':
                    _this.nzTreeService.calcSelectedKeys(data.keys, _this.nzNodes, _this.nzMultiple);
                    _this.nzSelectedKeysChange.emit(data.keys);
                    break;
                case 'nzCheckedKeys':
                    _this.nzTreeService.calcCheckedKeys(data.keys, _this.nzNodes, _this.nzCheckStrictly);
                    _this.nzCheckedKeysChange.emit(data.keys);
                    break;
            }
            _this.cdr.markForCheck();
        }));
        this.nzTreeService
            .eventTriggerChanged()
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            switch (data.eventName) {
                case 'expand':
                    _this.nzExpandChange.emit(data);
                    break;
                case 'click':
                    _this.nzClick.emit(data);
                    break;
                case 'check':
                    _this.nzCheckBoxChange.emit(data);
                    break;
                case 'dblclick':
                    _this.nzDblClick.emit(data);
                    break;
                case 'contextmenu':
                    _this.nzContextMenu.emit(data);
                    break;
                // drag drop
                case 'dragstart':
                    _this.nzOnDragStart.emit(data);
                    break;
                case 'dragenter':
                    _this.nzOnDragEnter.emit(data);
                    break;
                case 'dragover':
                    _this.nzOnDragOver.emit(data);
                    break;
                case 'dragleave':
                    _this.nzOnDragLeave.emit(data);
                    break;
                case 'drop':
                    _this.nzOnDrop.emit(data);
                    break;
                case 'dragend':
                    _this.nzOnDragEnd.emit(data);
                    break;
            }
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsTreeComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzCheckStrictly) {
            this.nzTreeService.isCheckStrictly = toBoolean(changes.nzCheckStrictly.currentValue);
        }
        if (changes.nzMultiple) {
            this.nzTreeService.isMultiple = toBoolean(changes.nzMultiple.currentValue);
        }
    };
    /**
     * @return {?}
     */
    CmacsTreeComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    CmacsTreeComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line: component-selector
                    selector: 'cmacs-tree',
                    exportAs: 'cmacsTree',
                    template: "<ul\r\n  role=\"tree\"\r\n  unselectable=\"on\"\r\n  [ngClass]=\"classMap\">\r\n  <ng-container *ngFor=\"let node of nzNodes; index as i\">\r\n    <cmacs-tree-node\r\n      [treeNode]=\"node\"\r\n      [index]=\"i\"\r\n      [selectMode]=\"selectMode\"\r\n      [showLine]=\"showLine\"\r\n      [expandedIcon]=\"expandedIcon\"\r\n      [draggable]=\"draggable\"\r\n      [checkable]=\"checkable\"\r\n      [showExpand]=\"showExpand\"\r\n      [asyncData]=\"asyncData\"\r\n      [searchValue]=\"searchValue\"\r\n      [hideUnMatched]=\"hideUnMatched\"\r\n      [beforeDrop]=\"beforeDrop\"\r\n      [expandAll]=\"expandAll\"\r\n      [defaultExpandAll]=\"defaultExpandAll\"\r\n      [showIcon]=\"showIcon\"\r\n      [treeTemplate]=\"treeTemplate\"\r\n      [noAnimation]=\"noAnimation?.nzNoAnimation\">\r\n    </cmacs-tree-node>\r\n  </ng-container>\r\n</ul>\r\n",
                    providers: [
                        NzTreeService,
                        {
                            provide: NzTreeBaseService,
                            useFactory: NzTreeServiceFactory,
                            deps: [[new SkipSelf(), new Optional(), NzTreeHigherOrderServiceToken], NzTreeService]
                        },
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return CmacsTreeComponent; })),
                            multi: true
                        }
                    ],
                    styles: [":host ::ng-deep .ant-select-tree li ul,:host ::ng-deep .ant-tree li ul{padding:0!important}:host ::ng-deep .ant-select-tree .cmacs-tree-child-header,:host ::ng-deep .ant-select-tree .cmacs-tree-parent-header{border-top:1px solid #dee0e5;padding-top:3px;padding-bottom:3px}:host ::ng-deep .ant-select-tree .cmacs-tree-child-header:hover,:host ::ng-deep .ant-select-tree .cmacs-tree-parent-header:hover{background-color:#f6f7fb}:host ::ng-deep .ant-select-tree .cmacs-tree-parent-header{padding-left:10px!important}:host ::ng-deep .ant-select-tree li{margin:0;font-family:Roboto;font-size:12px!important;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.33;letter-spacing:normal;color:#656c79}::ng-deep .font-highlight{color:#2a7cff!important}:host ::ng-deep .ant-select-tree-switcher_close{color:#dee0e5}:host ::ng-deep .ant-select-tree li .ant-select-tree-node-content-wrapper:hover{background-color:transparent}:host ::ng-deep .ant-tree li span.ant-tree-switcher.ant-tree-switcher_close .ant-select-switcher-icon,:host ::ng-deep .ant-tree li span.ant-tree-switcher.ant-tree-switcher_close .ant-tree-switcher-icon{color:#bec4cd}:host ::ng-deep .ant-tree li{font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.67;letter-spacing:normal;color:#656c79;padding:0}:host ::ng-deep .ant-tree li .ant-tree-node-content-wrapper:hover{background-color:transparent}:host ::ng-deep .ant-tree li .ant-tree-node-content-wrapper.ant-tree-node-selected{background-color:transparent}:host ::ng-deep .ant-tree .cmacs-tree-child-header:hover,:host ::ng-deep .ant-tree .cmacs-tree-parent-header:hover{background-color:#f6f7fb}.ant-tree .ant-tree-treenode-selected:hover,:host ::ng-deep .ant-tree .ant-tree-treenode-selected{background-color:#f2f7ff}:host ::ng-deep .ant-tree .ant-tree-treenode-selected .cmacs-tree-node-selected,:host ::ng-deep .ant-tree .ant-tree-treenode-selected.cmacs-tree-child-header{border-left:2px solid #2a7cff}:host ::ng-deep .ant-tree li.ant-tree-treenode-selected .ant-tree-child-tree{background-color:#f6f7fb}:host ::ng-deep .ant-tree .ant-tree-treenode-selected.cmacs-tree-child-header:hover,:host ::ng-deep .ant-tree .cmacs-tree-node-selected:hover{border-bottom:1px solid #dee0e5!important;border-top:1px solid #dee0e5!important}:host ::ng-deep .ant-tree:not(.ant-select-tree) .cmacs-tree-child-header,:host ::ng-deep .ant-tree:not(.ant-select-tree) .cmacs-tree-parent-header{border-top:1px solid transparent;border-bottom:1px solid transparent;padding-top:3px;padding-bottom:3px}:host ::ng-deep .ant-tree .cmacs-tree-node-selected~ul cmacs-tree-node .cmacs-tree-child-header:hover,:host ::ng-deep .ant-tree .cmacs-tree-node-selected~ul cmacs-tree-node .cmacs-tree-parent-header:hover{border-top:1px solid #dee0e5!important;border-bottom:1px solid #dee0e5!important}"]
                }] }
    ];
    /** @nocollapse */
    CmacsTreeComponent.ctorParameters = function () { return [
        { type: NzTreeBaseService },
        { type: ChangeDetectorRef },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    CmacsTreeComponent.propDecorators = {
        showIcon: [{ type: Input }],
        showExpand: [{ type: Input }],
        showLine: [{ type: Input }],
        expandedIcon: [{ type: Input }],
        checkable: [{ type: Input }],
        asyncData: [{ type: Input }],
        draggable: [{ type: Input }],
        expandAll: [{ type: Input }],
        hideUnMatched: [{ type: Input }],
        selectMode: [{ type: Input }],
        nzCheckStrictly: [{ type: Input }],
        nzBlockNode: [{ type: Input }],
        defaultExpandAll: [{ type: Input }],
        beforeDrop: [{ type: Input }],
        nzMultiple: [{ type: Input }],
        nzData: [{ type: Input }],
        nzDefaultExpandedKeys: [{ type: Input }],
        nzDefaultSelectedKeys: [{ type: Input }],
        nzDefaultCheckedKeys: [{ type: Input }],
        nzExpandedKeys: [{ type: Input }],
        nzSelectedKeys: [{ type: Input }],
        nzCheckedKeys: [{ type: Input }],
        searchValue: [{ type: Input }],
        nzExpandedKeysChange: [{ type: Output }],
        nzSelectedKeysChange: [{ type: Output }],
        nzCheckedKeysChange: [{ type: Output }],
        searchValueChange: [{ type: Output }],
        nzOnSearchNode: [{ type: Output }],
        nzClick: [{ type: Output }],
        nzDblClick: [{ type: Output }],
        nzContextMenu: [{ type: Output }],
        nzCheckBoxChange: [{ type: Output }],
        nzExpandChange: [{ type: Output }],
        nzOnDragStart: [{ type: Output }],
        nzOnDragEnter: [{ type: Output }],
        nzOnDragOver: [{ type: Output }],
        nzOnDragLeave: [{ type: Output }],
        nzOnDrop: [{ type: Output }],
        nzOnDragEnd: [{ type: Output }],
        treeTemplate: [{ type: ContentChild, args: ['treeTemplate',] }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsTreeComponent.prototype, "showIcon", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsTreeComponent.prototype, "showExpand", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsTreeComponent.prototype, "showLine", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsTreeComponent.prototype, "checkable", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsTreeComponent.prototype, "asyncData", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsTreeComponent.prototype, "draggable", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsTreeComponent.prototype, "expandAll", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsTreeComponent.prototype, "hideUnMatched", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsTreeComponent.prototype, "selectMode", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsTreeComponent.prototype, "nzCheckStrictly", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsTreeComponent.prototype, "nzBlockNode", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsTreeComponent.prototype, "defaultExpandAll", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], CmacsTreeComponent.prototype, "nzMultiple", null);
    return CmacsTreeComponent;
}(NzTreeBase));
export { CmacsTreeComponent };
if (false) {
    /** @type {?} */
    CmacsTreeComponent.prototype.showIcon;
    /** @type {?} */
    CmacsTreeComponent.prototype.showExpand;
    /** @type {?} */
    CmacsTreeComponent.prototype.showLine;
    /** @type {?} */
    CmacsTreeComponent.prototype.expandedIcon;
    /** @type {?} */
    CmacsTreeComponent.prototype.checkable;
    /** @type {?} */
    CmacsTreeComponent.prototype.asyncData;
    /** @type {?} */
    CmacsTreeComponent.prototype.draggable;
    /** @type {?} */
    CmacsTreeComponent.prototype.expandAll;
    /** @type {?} */
    CmacsTreeComponent.prototype.hideUnMatched;
    /** @type {?} */
    CmacsTreeComponent.prototype.selectMode;
    /** @type {?} */
    CmacsTreeComponent.prototype.nzCheckStrictly;
    /** @type {?} */
    CmacsTreeComponent.prototype.nzBlockNode;
    /**
     * @deprecated use
     * expandAll instead
     * @type {?}
     */
    CmacsTreeComponent.prototype.defaultExpandAll;
    /** @type {?} */
    CmacsTreeComponent.prototype.beforeDrop;
    /** @type {?} */
    CmacsTreeComponent.prototype.nzExpandedKeysChange;
    /** @type {?} */
    CmacsTreeComponent.prototype.nzSelectedKeysChange;
    /** @type {?} */
    CmacsTreeComponent.prototype.nzCheckedKeysChange;
    /** @type {?} */
    CmacsTreeComponent.prototype.searchValueChange;
    /**
     * @deprecated use
     * searchValueChange instead
     * @type {?}
     */
    CmacsTreeComponent.prototype.nzOnSearchNode;
    /** @type {?} */
    CmacsTreeComponent.prototype.nzClick;
    /** @type {?} */
    CmacsTreeComponent.prototype.nzDblClick;
    /** @type {?} */
    CmacsTreeComponent.prototype.nzContextMenu;
    /** @type {?} */
    CmacsTreeComponent.prototype.nzCheckBoxChange;
    /** @type {?} */
    CmacsTreeComponent.prototype.nzExpandChange;
    /** @type {?} */
    CmacsTreeComponent.prototype.nzOnDragStart;
    /** @type {?} */
    CmacsTreeComponent.prototype.nzOnDragEnter;
    /** @type {?} */
    CmacsTreeComponent.prototype.nzOnDragOver;
    /** @type {?} */
    CmacsTreeComponent.prototype.nzOnDragLeave;
    /** @type {?} */
    CmacsTreeComponent.prototype.nzOnDrop;
    /** @type {?} */
    CmacsTreeComponent.prototype.nzOnDragEnd;
    /** @type {?} */
    CmacsTreeComponent.prototype.treeTemplate;
    /** @type {?} */
    CmacsTreeComponent.prototype._searchValue;
    /** @type {?} */
    CmacsTreeComponent.prototype._nzMultiple;
    /** @type {?} */
    CmacsTreeComponent.prototype.nzDefaultSubject;
    /** @type {?} */
    CmacsTreeComponent.prototype.destroy$;
    /** @type {?} */
    CmacsTreeComponent.prototype.prefixCls;
    /** @type {?} */
    CmacsTreeComponent.prototype.classMap;
    /** @type {?} */
    CmacsTreeComponent.prototype.onChange;
    /** @type {?} */
    CmacsTreeComponent.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    CmacsTreeComponent.prototype.cdr;
    /** @type {?} */
    CmacsTreeComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXRyZWUvY21hY3MtdHJlZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQ0wsVUFBVSxFQUVWLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUlMLFFBQVEsRUFDUixNQUFNLEVBRU4sUUFBUSxFQUNSLFdBQVcsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFjLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFDTCxRQUFRLEVBQ1IsU0FBUyxFQUNULFlBQVksRUFHWixzQkFBc0IsRUFDdEIsVUFBVSxFQUNWLGlCQUFpQixFQUNqQiw2QkFBNkIsRUFFOUIsTUFBTSxvQkFBb0IsQ0FBQztBQUU1QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7OztBQUVyRCxNQUFNLFVBQVUsb0JBQW9CLENBQ2xDLGtCQUFxQyxFQUNyQyxXQUEwQjtJQUUxQixPQUFPLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO0FBQy9ELENBQUM7QUFFRDtJQW9Cd0MsOENBQVU7SUE0S2hELDRCQUNFLGFBQWdDLEVBQ3hCLEdBQXNCLEVBQ0gsV0FBb0M7UUFIakUsWUFLRSxrQkFBTSxhQUFhLENBQUMsU0FDckI7UUFKUyxTQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUNILGlCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQTlLeEMs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cEIsOENBQTBFOztJQUMxRSxzQ0FBeUI7O0lBQ3pCLHVDQUF1Qjs7SUFDdkIsc0NBQWM7O0lBRWQsc0NBQXFEOztJQUNyRCx1Q0FBbUM7Ozs7O0lBb0NqQyxpQ0FBOEI7O0lBQzlCLHlDQUErRCIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQge1xyXG4gIGZvcndhcmRSZWYsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlLFxyXG4gIFNraXBTZWxmLFxyXG4gIFRlbXBsYXRlUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGlzTm90TmlsLFxyXG4gIHRvQm9vbGVhbixcclxuICBJbnB1dEJvb2xlYW4sXHJcbiAgTnpGb3JtYXRCZWZvcmVEcm9wRXZlbnQsXHJcbiAgTnpGb3JtYXRFbWl0RXZlbnQsXHJcbiAgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSxcclxuICBOelRyZWVCYXNlLFxyXG4gIE56VHJlZUJhc2VTZXJ2aWNlLFxyXG4gIE56VHJlZUhpZ2hlck9yZGVyU2VydmljZVRva2VuLFxyXG4gIE56VHJlZU5vZGVcclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpUcmVlU2VydmljZSB9IGZyb20gJy4vY21hY3MtdHJlZS5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBOelRyZWVTZXJ2aWNlRmFjdG9yeShcclxuICBoaWdoZXJPcmRlclNlcnZpY2U6IE56VHJlZUJhc2VTZXJ2aWNlLFxyXG4gIHRyZWVTZXJ2aWNlOiBOelRyZWVTZXJ2aWNlXHJcbik6IE56VHJlZUJhc2VTZXJ2aWNlIHtcclxuICByZXR1cm4gaGlnaGVyT3JkZXJTZXJ2aWNlID8gaGlnaGVyT3JkZXJTZXJ2aWNlIDogdHJlZVNlcnZpY2U7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnY21hY3MtdHJlZScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1RyZWUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy10cmVlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy10cmVlLmNvbXBvbmVudC5jc3MnXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIE56VHJlZVNlcnZpY2UsXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE56VHJlZUJhc2VTZXJ2aWNlLFxyXG4gICAgICB1c2VGYWN0b3J5OiBOelRyZWVTZXJ2aWNlRmFjdG9yeSxcclxuICAgICAgZGVwczogW1tuZXcgU2tpcFNlbGYoKSwgbmV3IE9wdGlvbmFsKCksIE56VHJlZUhpZ2hlck9yZGVyU2VydmljZVRva2VuXSwgTnpUcmVlU2VydmljZV1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDbWFjc1RyZWVDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzVHJlZUNvbXBvbmVudCBleHRlbmRzIE56VHJlZUJhc2UgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dJY29uID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dFeHBhbmQgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93TGluZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGV4cGFuZGVkSWNvbjogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56VHJlZU5vZGUgfT47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNoZWNrYWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhc3luY0RhdGEgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZHJhZ2dhYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGV4cGFuZEFsbCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBoaWRlVW5NYXRjaGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNlbGVjdE1vZGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDaGVja1N0cmljdGx5ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QmxvY2tOb2RlID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIHVzZVxyXG4gICAqIGV4cGFuZEFsbCBpbnN0ZWFkXHJcbiAgICovXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRlZmF1bHRFeHBhbmRBbGwgPSBmYWxzZTtcclxuICBASW5wdXQoKSBiZWZvcmVEcm9wOiAoY29uZmlybTogTnpGb3JtYXRCZWZvcmVEcm9wRXZlbnQpID0+IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0Qm9vbGVhbigpXHJcbiAgc2V0IG56TXVsdGlwbGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX256TXVsdGlwbGUgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlLmlzTXVsdGlwbGUgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56TXVsdGlwbGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbnpNdWx0aXBsZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHNldCBuekRhdGEodmFsdWU6IGFueVtdKSB7XHJcbiAgICB0aGlzLmluaXROekRhdGEodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgdXNlXHJcbiAgICogbnpFeHBhbmRlZEtleXMgaW5zdGVhZFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56RGVmYXVsdEV4cGFuZGVkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcclxuICAgIHRoaXMubnpEZWZhdWx0U3ViamVjdC5uZXh0KHsgdHlwZTogJ256RXhwYW5kZWRLZXlzJywga2V5czogdmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCB1c2VcclxuICAgKiBuelNlbGVjdGVkS2V5cyBpbnN0ZWFkXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpEZWZhdWx0U2VsZWN0ZWRLZXlzKHZhbHVlOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy5uekRlZmF1bHRTdWJqZWN0Lm5leHQoeyB0eXBlOiAnbnpTZWxlY3RlZEtleXMnLCBrZXlzOiB2YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIHVzZVxyXG4gICAqIG56Q2hlY2tlZEtleXMgaW5zdGVhZFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56RGVmYXVsdENoZWNrZWRLZXlzKHZhbHVlOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy5uekRlZmF1bHRTdWJqZWN0Lm5leHQoeyB0eXBlOiAnbnpDaGVja2VkS2V5cycsIGtleXM6IHZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpFeHBhbmRlZEtleXModmFsdWU6IHN0cmluZ1tdKSB7XHJcbiAgICB0aGlzLm56RGVmYXVsdFN1YmplY3QubmV4dCh7IHR5cGU6ICduekV4cGFuZGVkS2V5cycsIGtleXM6IHZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpTZWxlY3RlZEtleXModmFsdWU6IHN0cmluZ1tdKSB7XHJcbiAgICB0aGlzLm56RGVmYXVsdFN1YmplY3QubmV4dCh7IHR5cGU6ICduelNlbGVjdGVkS2V5cycsIGtleXM6IHZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpDaGVja2VkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcclxuICAgIHRoaXMubnpEZWZhdWx0U3ViamVjdC5uZXh0KHsgdHlwZTogJ256Q2hlY2tlZEtleXMnLCBrZXlzOiB2YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHNlYXJjaFZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3NlYXJjaFZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLm56VHJlZVNlcnZpY2Uuc2VhcmNoRXhwYW5kKHZhbHVlKTtcclxuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcclxuICAgICAgdGhpcy5zZWFyY2hWYWx1ZUNoYW5nZS5lbWl0KHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnc2VhcmNoJywgbnVsbCwgbnVsbCkpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uXHJcbiAgICAgIHRoaXMubnpPblNlYXJjaE5vZGUuZW1pdCh0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ3NlYXJjaCcsIG51bGwsIG51bGwpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBzZWFyY2hWYWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlYXJjaFZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVG8gcmVuZGVyIG5vZGVzIGlmIHJvb3QgaXMgY2hhbmdlZFxyXG4gICAqL1xyXG4gIGdldCBuek5vZGVzKCk6IE56VHJlZU5vZGVbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5uelRyZWVTZXJ2aWNlLnJvb3ROb2RlcztcclxuICB9XHJcblxyXG4gIC8vIG1vZGVsIGJpbmRcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpFeHBhbmRlZEtleXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZ1tdPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNlbGVjdGVkS2V5c0NoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZ1tdPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nW10+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2hlY2tlZEtleXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZ1tdPigpO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2VhcmNoVmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgdXNlXHJcbiAgICogc2VhcmNoVmFsdWVDaGFuZ2UgaW5zdGVhZFxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uU2VhcmNoTm9kZTogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2xpY2s6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56RGJsQ2xpY2s6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q29udGV4dE1lbnU6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2hlY2tCb3hDaGFuZ2U6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56RXhwYW5kQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkRyYWdTdGFydDogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkRyYWdFbnRlcjogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkRyYWdPdmVyOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uRHJhZ0xlYXZlOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uRHJvcDogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkRyYWdFbmQ6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIEBDb250ZW50Q2hpbGQoJ3RyZWVUZW1wbGF0ZScpIHRyZWVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB2YXJpYWJsZS1uYW1lXHJcbiAgX3NlYXJjaFZhbHVlOiBzdHJpbmc7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdmFyaWFibGUtbmFtZVxyXG4gIF9uek11bHRpcGxlID0gZmFsc2U7XHJcbiAgbnpEZWZhdWx0U3ViamVjdCA9IG5ldyBSZXBsYXlTdWJqZWN0PHsgdHlwZTogc3RyaW5nOyBrZXlzOiBzdHJpbmdbXSB9Pig2KTtcclxuICBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJlZml4Q2xzID0gJ2FudC10cmVlJztcclxuICBjbGFzc01hcCA9IHt9O1xyXG5cclxuICBvbkNoYW5nZTogKHZhbHVlOiBOelRyZWVOb2RlW10pID0+IHZvaWQgPSAoKSA9PiBudWxsO1xyXG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IG51bGw7XHJcblxyXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGFzc01hcCA9IHtcclxuICAgICAgW3RoaXMucHJlZml4Q2xzXTogdHJ1ZSxcclxuICAgICAgW3RoaXMucHJlZml4Q2xzICsgJy1zaG93LWxpbmUnXTogdGhpcy5zaG93TGluZSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1pY29uLWhpZGVgXTogIXRoaXMuc2hvd0ljb24sXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tYmxvY2stbm9kZWBdOiB0aGlzLm56QmxvY2tOb2RlLFxyXG4gICAgICBbJ2RyYWdnYWJsZS10cmVlJ106IHRoaXMuZHJhZ2dhYmxlLFxyXG4gICAgICBbJ2FudC1zZWxlY3QtdHJlZSddOiB0aGlzLnNlbGVjdE1vZGVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBOelRyZWVOb2RlW10pOiB2b2lkIHtcclxuICAgIHRoaXMuaW5pdE56RGF0YSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogTnpUcmVlTm9kZVtdKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBpbml0TnpEYXRhKHZhbHVlOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5pc0NoZWNrU3RyaWN0bHkgPSB0aGlzLm56Q2hlY2tTdHJpY3RseTtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmlzTXVsdGlwbGUgPSB0aGlzLm56TXVsdGlwbGU7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5pbml0VHJlZSh0aGlzLmNvZXJjZVRyZWVOb2Rlcyh2YWx1ZSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBuelRyZWVTZXJ2aWNlOiBOelRyZWVCYXNlU2VydmljZSxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge1xyXG4gICAgc3VwZXIobnpUcmVlU2VydmljZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgIHRoaXMubnpEZWZhdWx0U3ViamVjdC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkYXRhOiB7IHR5cGU6IHN0cmluZzsga2V5czogc3RyaW5nW10gfSkgPT4ge1xyXG4gICAgICBpZiAoIWRhdGEgfHwgIWRhdGEua2V5cykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBzd2l0Y2ggKGRhdGEudHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ256RXhwYW5kZWRLZXlzJzpcclxuICAgICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jYWxjRXhwYW5kZWRLZXlzKGRhdGEua2V5cywgdGhpcy5uek5vZGVzKTtcclxuICAgICAgICAgIHRoaXMubnpFeHBhbmRlZEtleXNDaGFuZ2UuZW1pdChkYXRhLmtleXMpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbnpTZWxlY3RlZEtleXMnOlxyXG4gICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNhbGNTZWxlY3RlZEtleXMoZGF0YS5rZXlzLCB0aGlzLm56Tm9kZXMsIHRoaXMubnpNdWx0aXBsZSk7XHJcbiAgICAgICAgICB0aGlzLm56U2VsZWN0ZWRLZXlzQ2hhbmdlLmVtaXQoZGF0YS5rZXlzKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ256Q2hlY2tlZEtleXMnOlxyXG4gICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNhbGNDaGVja2VkS2V5cyhkYXRhLmtleXMsIHRoaXMubnpOb2RlcywgdGhpcy5uekNoZWNrU3RyaWN0bHkpO1xyXG4gICAgICAgICAgdGhpcy5uekNoZWNrZWRLZXlzQ2hhbmdlLmVtaXQoZGF0YS5rZXlzKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm56VHJlZVNlcnZpY2VcclxuICAgICAgLmV2ZW50VHJpZ2dlckNoYW5nZWQoKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChkYXRhLmV2ZW50TmFtZSkge1xyXG4gICAgICAgICAgY2FzZSAnZXhwYW5kJzpcclxuICAgICAgICAgICAgdGhpcy5uekV4cGFuZENoYW5nZS5lbWl0KGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2NsaWNrJzpcclxuICAgICAgICAgICAgdGhpcy5uekNsaWNrLmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnY2hlY2snOlxyXG4gICAgICAgICAgICB0aGlzLm56Q2hlY2tCb3hDaGFuZ2UuZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdkYmxjbGljayc6XHJcbiAgICAgICAgICAgIHRoaXMubnpEYmxDbGljay5lbWl0KGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2NvbnRleHRtZW51JzpcclxuICAgICAgICAgICAgdGhpcy5uekNvbnRleHRNZW51LmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgLy8gZHJhZyBkcm9wXHJcbiAgICAgICAgICBjYXNlICdkcmFnc3RhcnQnOlxyXG4gICAgICAgICAgICB0aGlzLm56T25EcmFnU3RhcnQuZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdkcmFnZW50ZXInOlxyXG4gICAgICAgICAgICB0aGlzLm56T25EcmFnRW50ZXIuZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdkcmFnb3Zlcic6XHJcbiAgICAgICAgICAgIHRoaXMubnpPbkRyYWdPdmVyLmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnZHJhZ2xlYXZlJzpcclxuICAgICAgICAgICAgdGhpcy5uek9uRHJhZ0xlYXZlLmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnZHJvcCc6XHJcbiAgICAgICAgICAgIHRoaXMubnpPbkRyb3AuZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdkcmFnZW5kJzpcclxuICAgICAgICAgICAgdGhpcy5uek9uRHJhZ0VuZC5lbWl0KGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbcHJvcGVydHlOYW1lOiBzdHJpbmddOiBTaW1wbGVDaGFuZ2UgfSk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubnpDaGVja1N0cmljdGx5KSB7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5pc0NoZWNrU3RyaWN0bHkgPSB0b0Jvb2xlYW4oY2hhbmdlcy5uekNoZWNrU3RyaWN0bHkuY3VycmVudFZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLm56TXVsdGlwbGUpIHtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmlzTXVsdGlwbGUgPSB0b0Jvb2xlYW4oY2hhbmdlcy5uek11bHRpcGxlLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=