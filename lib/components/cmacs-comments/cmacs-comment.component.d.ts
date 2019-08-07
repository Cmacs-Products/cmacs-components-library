/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { QueryList, TemplateRef } from '@angular/core';
import { CmacsCommentActionComponent as CommentAction } from './cmacs-comment-cells';
export declare class CmacsCommentComponent {
    author: string | TemplateRef<void>;
    datetime: string | TemplateRef<void>;
    actions: QueryList<CommentAction>;
    constructor();
}
