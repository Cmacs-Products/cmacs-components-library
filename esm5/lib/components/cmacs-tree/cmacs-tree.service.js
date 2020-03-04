/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { NzTreeBaseService } from 'ng-zorro-antd/core';
import { isNotNil } from "ng-zorro-antd";
var CmacsTreeService = /** @class */ (function (_super) {
    tslib_1.__extends(CmacsTreeService, _super);
    function CmacsTreeService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nzMultiple = false;
        return _this;
    }
    /**
     * search value & expand node
     * should add expandlist
     */
    /**
     * search value & expand node
     * should add expandlist
     * @param {?} value
     * @return {?}
     */
    CmacsTreeService.prototype.searchExpand = /**
     * search value & expand node
     * should add expandlist
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        this.matchedNodeList = [];
        value = value.toLowerCase();
        /** @type {?} */
        var expandedKeys = [];
        if (!isNotNil(value)) {
            return;
        }
        // to reset expandedNodeList
        /** @type {?} */
        var expandParent = (/**
         * @param {?} n
         * @return {?}
         */
        function (n) {
            // expand parent node
            /** @type {?} */
            var parentNode = n.getParentNode();
            if (parentNode) {
                expandedKeys.push(parentNode.key);
                expandParent(parentNode);
            }
        });
        /** @type {?} */
        var searchChild = (/**
         * @param {?} n
         * @return {?}
         */
        function (n) {
            if (value && n.title.toLowerCase().includes(value)) {
                // match the node
                n.isMatched = true;
                _this.matchedNodeList.push(n);
                // expand parentNode
                expandParent(n);
            }
            else {
                n.isMatched = false;
            }
            n.children.forEach((/**
             * @param {?} child
             * @return {?}
             */
            function (child) {
                searchChild(child);
            }));
        });
        this.rootNodes.forEach((/**
         * @param {?} child
         * @return {?}
         */
        function (child) {
            searchChild(child);
        }));
        // expand matched keys
        this.calcExpandedKeys(expandedKeys, this.rootNodes);
    };
    CmacsTreeService.decorators = [
        { type: Injectable }
    ];
    return CmacsTreeService;
}(NzTreeBaseService));
export { CmacsTreeService };
if (false) {
    /** @type {?} */
    CmacsTreeService.prototype.nzMultiple;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdHJlZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy10cmVlL2NtYWNzLXRyZWUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdkQsT0FBTyxFQUFDLFFBQVEsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUVuRDtJQUNzQyw0Q0FBaUI7SUFEdkQ7UUFBQSxxRUE0Q0M7UUExQ0csZ0JBQVUsR0FBSyxLQUFLLENBQUM7O0lBMEN6QixDQUFDO0lBeENDOzs7T0FHRzs7Ozs7OztJQUNILHVDQUFZOzs7Ozs7SUFBWixVQUFhLEtBQWE7UUFBMUIsaUJBbUNDO1FBbENDLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQzFCLEtBQUssR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7O1lBQ3RCLFlBQVksR0FBYSxFQUFFO1FBQ2pDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDcEIsT0FBTztTQUNSOzs7WUFFSyxZQUFZOzs7O1FBQUcsVUFBQyxDQUFhOzs7Z0JBRTNCLFVBQVUsR0FBRyxDQUFDLENBQUMsYUFBYSxFQUFFO1lBQ3BDLElBQUksVUFBVSxFQUFFO2dCQUNkLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDMUI7UUFDSCxDQUFDLENBQUE7O1lBQ0ssV0FBVzs7OztRQUFHLFVBQUMsQ0FBYTtZQUNoQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDbEQsaUJBQWlCO2dCQUNqQixDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDbkIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLG9CQUFvQjtnQkFDcEIsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2pCO2lCQUFNO2dCQUNMLENBQUMsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2FBQ3JCO1lBQ0QsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQSxLQUFLO2dCQUN0QixXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckIsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLENBQUE7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLEtBQUs7WUFDMUIsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLENBQUMsRUFBQyxDQUFDO1FBQ0gsc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7O2dCQTNDRixVQUFVOztJQTRDWCx1QkFBQztDQUFBLEFBNUNELENBQ3NDLGlCQUFpQixHQTJDdEQ7U0EzQ1ksZ0JBQWdCOzs7SUFDekIsc0NBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpUcmVlQmFzZVNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQge2lzTm90TmlsLCBOelRyZWVOb2RlfSBmcm9tIFwibmctem9ycm8tYW50ZFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ21hY3NUcmVlU2VydmljZSBleHRlbmRzIE56VHJlZUJhc2VTZXJ2aWNlIHtcclxuICAgIG56TXVsdGlwbGUgPyA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBzZWFyY2ggdmFsdWUgJiBleHBhbmQgbm9kZVxyXG4gICAqIHNob3VsZCBhZGQgZXhwYW5kbGlzdFxyXG4gICAqL1xyXG4gIHNlYXJjaEV4cGFuZCh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLm1hdGNoZWROb2RlTGlzdCA9IFtdO1xyXG4gICAgdmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgY29uc3QgZXhwYW5kZWRLZXlzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgaWYgKCFpc05vdE5pbCh2YWx1ZSkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gdG8gcmVzZXQgZXhwYW5kZWROb2RlTGlzdFxyXG4gICAgY29uc3QgZXhwYW5kUGFyZW50ID0gKG46IE56VHJlZU5vZGUpID0+IHtcclxuICAgICAgLy8gZXhwYW5kIHBhcmVudCBub2RlXHJcbiAgICAgIGNvbnN0IHBhcmVudE5vZGUgPSBuLmdldFBhcmVudE5vZGUoKTtcclxuICAgICAgaWYgKHBhcmVudE5vZGUpIHtcclxuICAgICAgICBleHBhbmRlZEtleXMucHVzaChwYXJlbnROb2RlLmtleSk7XHJcbiAgICAgICAgZXhwYW5kUGFyZW50KHBhcmVudE5vZGUpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc2VhcmNoQ2hpbGQgPSAobjogTnpUcmVlTm9kZSkgPT4ge1xyXG4gICAgICBpZiAodmFsdWUgJiYgbi50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHZhbHVlKSkge1xyXG4gICAgICAgIC8vIG1hdGNoIHRoZSBub2RlXHJcbiAgICAgICAgbi5pc01hdGNoZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubWF0Y2hlZE5vZGVMaXN0LnB1c2gobik7XHJcbiAgICAgICAgLy8gZXhwYW5kIHBhcmVudE5vZGVcclxuICAgICAgICBleHBhbmRQYXJlbnQobik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbi5pc01hdGNoZWQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBuLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgIHNlYXJjaENoaWxkKGNoaWxkKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5yb290Tm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgIHNlYXJjaENoaWxkKGNoaWxkKTtcclxuICAgIH0pO1xyXG4gICAgLy8gZXhwYW5kIG1hdGNoZWQga2V5c1xyXG4gICAgdGhpcy5jYWxjRXhwYW5kZWRLZXlzKGV4cGFuZGVkS2V5cywgdGhpcy5yb290Tm9kZXMpO1xyXG4gIH1cclxufVxyXG4iXX0=