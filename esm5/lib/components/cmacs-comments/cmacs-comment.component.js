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
var CmacsCommentComponent = /** @class */ (function () {
    function CmacsCommentComponent() {
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
                    styles: [".ant-comment-content-author{display:inline-block;margin-left:10px;font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.2;letter-spacing:normal;color:#3b3f46;width:calc(100% - 140px)}.ant-comment-content-author-name{white-space:pre-line;display:-moz-box;display:-webkit-box;-webkit-line-clamp:2;-moz-line-clamp:2;-moz-box-orient:vertical;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;color:#3b3f46}.ant-comment-inner{display:block;padding:16px 0}.ant-comment-avatar{margin-bottom:14px}.ant-comment-content{font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.83;letter-spacing:normal;color:#97a0ae}.ant-comment-content-author-time{font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.33;letter-spacing:normal;color:#656c79}.ant-comment-actions{float:right;padding:0;margin:0;line-height:32px}.cmacs-comment-avatar{display:inline-block;border-radius:4px;border:none;max-width:32px;max-height:32px}.iconspan{height:20px;width:20px;text-align:center;vertical-align:middle;display:inline-block}.iconspan i{font-size:16px;position:relative;height:16px;width:16px;display:inline-block;vertical-align:sub}.ant-comment-actions>li:not(:last-child){padding-right:10px}.ant-comment-actions>li>span{padding-right:0}.ant-comment-actions>li{line-height:20px}.ant-comment-content-detail{margin-bottom:1em}", "\n      cmacs-comment {\n        display: block;\n      }\n\n      cmacs-comment-content {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    CmacsCommentComponent.ctorParameters = function () { return []; };
    CmacsCommentComponent.propDecorators = {
        author: [{ type: Input }],
        datetime: [{ type: Input }],
        actions: [{ type: ContentChildren, args: [CommentAction,] }]
    };
    return CmacsCommentComponent;
}());
export { CmacsCommentComponent };
if (false) {
    /** @type {?} */
    CmacsCommentComponent.prototype.author;
    /** @type {?} */
    CmacsCommentComponent.prototype.datetime;
    /** @type {?} */
    CmacsCommentComponent.prototype.actions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY29tbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLWNvbW1lbnRzL2NtYWNzLWNvbW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsZUFBZSxFQUNmLEtBQUssRUFDTCxTQUFTLEVBRVQsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSwyQkFBMkIsSUFBSSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVyRjtJQTJCRTtJQUFlLENBQUM7O2dCQTNCakIsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUsY0FBYztvQkFDeEIsd21DQUE2QztvQkFDN0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxJQUFJLEVBQUU7d0JBQ0osS0FBSyxFQUFFLGFBQWE7cUJBQ3JCOzJqREFHQyxvSUFRQztpQkFFSjs7Ozs7eUJBRUUsS0FBSzsyQkFDTCxLQUFLOzBCQUVMLGVBQWUsU0FBQyxhQUFhOztJQUVoQyw0QkFBQztDQUFBLEFBNUJELElBNEJDO1NBTlkscUJBQXFCOzs7SUFDaEMsdUNBQTRDOztJQUM1Qyx5Q0FBOEM7O0lBRTlDLHdDQUFrRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIElucHV0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ21hY3NDb21tZW50QWN0aW9uQ29tcG9uZW50IGFzIENvbW1lbnRBY3Rpb24gfSBmcm9tICcuL2NtYWNzLWNvbW1lbnQtY2VsbHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1jb21tZW50JyxcclxuICBleHBvcnRBczogJ2NtYWNzQ29tbWVudCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWNvbW1lbnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdhbnQtY29tbWVudCdcclxuICB9LFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWNvbW1lbnQuY29tcG9uZW50LmNzcyddLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBjbWFjcy1jb21tZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG5cclxuICAgICAgY21hY3MtY29tbWVudC1jb250ZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzQ29tbWVudENvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgYXV0aG9yOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBkYXRldGltZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIEBDb250ZW50Q2hpbGRyZW4oQ29tbWVudEFjdGlvbikgYWN0aW9uczogUXVlcnlMaXN0PENvbW1lbnRBY3Rpb24+O1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxufVxyXG4iXX0=