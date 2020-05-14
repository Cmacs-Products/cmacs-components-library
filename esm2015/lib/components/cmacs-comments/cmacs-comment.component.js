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
import { ChangeDetectionStrategy, Component, ContentChildren, Input, QueryList, ViewEncapsulation } from '@angular/core';
import { CmacsCommentActionComponent as CommentAction } from './cmacs-comment-cells';
export class CmacsCommentComponent {
    constructor() { }
}
CmacsCommentComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmacs-comment',
                exportAs: 'cmacsComment',
                template: "<div class=\"ant-comment-inner\">\r\n  <div class=\"ant-comment-avatar\">\r\n    <div class=\"cmacs-comment-avatar\">\r\n      <ng-content select=\"[cmacs-comment-avatar]\"></ng-content>\r\n    </div>\r\n\r\n    <div class=\"ant-comment-content-author\">\r\n      <div *ngIf=\"author\" class=\"ant-comment-content-author-name\">\r\n        <ng-container *cmacsStringTemplateOutlet=\"author\">{{ author }}</ng-container>\r\n      </div>\r\n    </div>\r\n    <ul class=\"ant-comment-actions\" *ngIf=\"actions?.length\">\r\n      <li *ngFor=\"let action of actions\">\r\n        <span class=\"iconspan\"><ng-template [cmacsCommentActionHost]=\"action.content\"></ng-template></span>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"ant-comment-content\">\r\n    <ng-content select=\"cmacs-comment-content\"></ng-content>\r\n    <span *ngIf=\"datetime\" class=\"ant-comment-content-author-time\">\r\n        <ng-container *cmacsStringTemplateOutlet=\"datetime\">{{ datetime }}</ng-container>\r\n    </span>\r\n  </div>\r\n</div>\r\n<div class=\"ant-comment-nested\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    class: 'ant-comment'
                },
                styles: [".ant-comment-content-author{display:inline-block;margin-left:10px;font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.2;letter-spacing:normal;color:#3b3f46;width:calc(100% - 140px)}.ant-comment-content-author-name{white-space:pre-line;display:-moz-box;display:-webkit-box;-webkit-line-clamp:2;-moz-line-clamp:2;-moz-box-orient:vertical;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;color:#3b3f46}.ant-comment-inner{display:block;padding:16px 0}.ant-comment-avatar{margin-bottom:14px}.ant-comment-content{font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.83;letter-spacing:normal;color:#97a0ae}.ant-comment-content-author-time{font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.33;letter-spacing:normal;color:#656c79}.ant-comment-actions{float:right;padding:0;margin:0;line-height:32px}.cmacs-comment-avatar{display:inline-block;border-radius:4px;border:none;max-width:32px;max-height:32px}.iconspan{height:20px;width:20px;text-align:center;vertical-align:middle;display:inline-block}.iconspan i{font-size:16px;position:relative;height:16px;width:16px;display:inline-block;vertical-align:sub}.ant-comment-actions>li:not(:last-child){padding-right:10px}.ant-comment-actions>li>span{padding-right:0}.ant-comment-actions>li{line-height:20px}.ant-comment-content-detail{margin-bottom:1em}", `
      cmacs-comment {
        display: block;
      }

      cmacs-comment-content {
        display: block;
      }
    `]
            }] }
];
/** @nocollapse */
CmacsCommentComponent.ctorParameters = () => [];
CmacsCommentComponent.propDecorators = {
    author: [{ type: Input }],
    datetime: [{ type: Input }],
    actions: [{ type: ContentChildren, args: [CommentAction,] }]
};
if (false) {
    /** @type {?} */
    CmacsCommentComponent.prototype.author;
    /** @type {?} */
    CmacsCommentComponent.prototype.datetime;
    /** @type {?} */
    CmacsCommentComponent.prototype.actions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY29tbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLWNvbW1lbnRzL2NtYWNzLWNvbW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsZUFBZSxFQUNmLEtBQUssRUFDTCxTQUFTLEVBRVQsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSwyQkFBMkIsSUFBSSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQXdCckYsTUFBTSxPQUFPLHFCQUFxQjtJQUtoQyxnQkFBZSxDQUFDOzs7WUEzQmpCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLHdtQ0FBNkM7Z0JBQzdDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxhQUFhO2lCQUNyQjt1akRBR0M7Ozs7Ozs7O0tBUUM7YUFFSjs7Ozs7cUJBRUUsS0FBSzt1QkFDTCxLQUFLO3NCQUVMLGVBQWUsU0FBQyxhQUFhOzs7O0lBSDlCLHVDQUE0Qzs7SUFDNUMseUNBQThDOztJQUU5Qyx3Q0FBa0UiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBJbnB1dCxcclxuICBRdWVyeUxpc3QsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IENtYWNzQ29tbWVudEFjdGlvbkNvbXBvbmVudCBhcyBDb21tZW50QWN0aW9uIH0gZnJvbSAnLi9jbWFjcy1jb21tZW50LWNlbGxzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtY29tbWVudCcsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0NvbW1lbnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1jb21tZW50LmNvbXBvbmVudC5odG1sJyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnYW50LWNvbW1lbnQnXHJcbiAgfSxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1jb21tZW50LmNvbXBvbmVudC5jc3MnXSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgY21hY3MtY29tbWVudCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNtYWNzLWNvbW1lbnQtY29udGVudCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0NvbW1lbnRDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGF1dGhvcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgZGF0ZXRpbWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBAQ29udGVudENoaWxkcmVuKENvbW1lbnRBY3Rpb24pIGFjdGlvbnM6IFF1ZXJ5TGlzdDxDb21tZW50QWN0aW9uPjtcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcbn1cclxuIl19