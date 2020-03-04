/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { NzTreeBaseService } from 'ng-zorro-antd/core';
import { isNotNil } from "ng-zorro-antd";
export class CmacsTreeService extends NzTreeBaseService {
    constructor() {
        super(...arguments);
        this.nzMultiple = false;
    }
    /**
     * search value & expand node
     * should add expandlist
     * @param {?} value
     * @return {?}
     */
    searchExpand(value) {
        this.matchedNodeList = [];
        value = value.toLowerCase();
        /** @type {?} */
        const expandedKeys = [];
        if (!isNotNil(value)) {
            return;
        }
        // to reset expandedNodeList
        /** @type {?} */
        const expandParent = (/**
         * @param {?} n
         * @return {?}
         */
        (n) => {
            // expand parent node
            /** @type {?} */
            const parentNode = n.getParentNode();
            if (parentNode) {
                expandedKeys.push(parentNode.key);
                expandParent(parentNode);
            }
        });
        /** @type {?} */
        const searchChild = (/**
         * @param {?} n
         * @return {?}
         */
        (n) => {
            if (value && n.title.toLowerCase().includes(value)) {
                // match the node
                n.isMatched = true;
                this.matchedNodeList.push(n);
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
            child => {
                searchChild(child);
            }));
        });
        this.rootNodes.forEach((/**
         * @param {?} child
         * @return {?}
         */
        child => {
            searchChild(child);
        }));
        // expand matched keys
        this.calcExpandedKeys(expandedKeys, this.rootNodes);
    }
}
CmacsTreeService.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    CmacsTreeService.prototype.nzMultiple;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdHJlZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy10cmVlL2NtYWNzLXRyZWUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RCxPQUFPLEVBQUMsUUFBUSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBR25ELE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxpQkFBaUI7SUFEdkQ7O1FBRUksZUFBVSxHQUFLLEtBQUssQ0FBQztJQTBDekIsQ0FBQzs7Ozs7OztJQXBDQyxZQUFZLENBQUMsS0FBYTtRQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUMxQixLQUFLLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDOztjQUN0QixZQUFZLEdBQWEsRUFBRTtRQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3BCLE9BQU87U0FDUjs7O2NBRUssWUFBWTs7OztRQUFHLENBQUMsQ0FBYSxFQUFFLEVBQUU7OztrQkFFL0IsVUFBVSxHQUFHLENBQUMsQ0FBQyxhQUFhLEVBQUU7WUFDcEMsSUFBSSxVQUFVLEVBQUU7Z0JBQ2QsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2xDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUMxQjtRQUNILENBQUMsQ0FBQTs7Y0FDSyxXQUFXOzs7O1FBQUcsQ0FBQyxDQUFhLEVBQUUsRUFBRTtZQUNwQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDbEQsaUJBQWlCO2dCQUNqQixDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDbkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLG9CQUFvQjtnQkFDcEIsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2pCO2lCQUFNO2dCQUNMLENBQUMsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2FBQ3JCO1lBQ0QsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPOzs7O1lBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3pCLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyQixDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQTtRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzdCLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixDQUFDLEVBQUMsQ0FBQztRQUNILHNCQUFzQjtRQUN0QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7WUEzQ0YsVUFBVTs7OztJQUVQLHNDQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56VHJlZUJhc2VTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHtpc05vdE5pbCwgTnpUcmVlTm9kZX0gZnJvbSBcIm5nLXpvcnJvLWFudGRcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENtYWNzVHJlZVNlcnZpY2UgZXh0ZW5kcyBOelRyZWVCYXNlU2VydmljZSB7XHJcbiAgICBuek11bHRpcGxlID8gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogc2VhcmNoIHZhbHVlICYgZXhwYW5kIG5vZGVcclxuICAgKiBzaG91bGQgYWRkIGV4cGFuZGxpc3RcclxuICAgKi9cclxuICBzZWFyY2hFeHBhbmQodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5tYXRjaGVkTm9kZUxpc3QgPSBbXTtcclxuICAgIHZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgIGNvbnN0IGV4cGFuZGVkS2V5czogc3RyaW5nW10gPSBbXTtcclxuICAgIGlmICghaXNOb3ROaWwodmFsdWUpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIHRvIHJlc2V0IGV4cGFuZGVkTm9kZUxpc3RcclxuICAgIGNvbnN0IGV4cGFuZFBhcmVudCA9IChuOiBOelRyZWVOb2RlKSA9PiB7XHJcbiAgICAgIC8vIGV4cGFuZCBwYXJlbnQgbm9kZVxyXG4gICAgICBjb25zdCBwYXJlbnROb2RlID0gbi5nZXRQYXJlbnROb2RlKCk7XHJcbiAgICAgIGlmIChwYXJlbnROb2RlKSB7XHJcbiAgICAgICAgZXhwYW5kZWRLZXlzLnB1c2gocGFyZW50Tm9kZS5rZXkpO1xyXG4gICAgICAgIGV4cGFuZFBhcmVudChwYXJlbnROb2RlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IHNlYXJjaENoaWxkID0gKG46IE56VHJlZU5vZGUpID0+IHtcclxuICAgICAgaWYgKHZhbHVlICYmIG4udGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh2YWx1ZSkpIHtcclxuICAgICAgICAvLyBtYXRjaCB0aGUgbm9kZVxyXG4gICAgICAgIG4uaXNNYXRjaGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm1hdGNoZWROb2RlTGlzdC5wdXNoKG4pO1xyXG4gICAgICAgIC8vIGV4cGFuZCBwYXJlbnROb2RlXHJcbiAgICAgICAgZXhwYW5kUGFyZW50KG4pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG4uaXNNYXRjaGVkID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgbi5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICBzZWFyY2hDaGlsZChjaGlsZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHRoaXMucm9vdE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICBzZWFyY2hDaGlsZChjaGlsZCk7XHJcbiAgICB9KTtcclxuICAgIC8vIGV4cGFuZCBtYXRjaGVkIGtleXNcclxuICAgIHRoaXMuY2FsY0V4cGFuZGVkS2V5cyhleHBhbmRlZEtleXMsIHRoaXMucm9vdE5vZGVzKTtcclxuICB9XHJcbn1cclxuIl19