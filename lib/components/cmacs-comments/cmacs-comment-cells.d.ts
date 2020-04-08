import { CdkPortalOutlet, TemplatePortal } from '@angular/cdk/portal';
import { ComponentFactoryResolver, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
export declare class CmacsCommentAvatarDirective {
}
export declare class CmacsCommentContentDirective {
}
export declare class CmacsCommentActionHostDirective extends CdkPortalOutlet implements OnInit, OnDestroy {
    cmacsCommentActionHost: TemplatePortal | null;
    constructor(componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
export declare class CmacsCommentActionComponent implements OnInit {
    private viewContainerRef;
    implicitContent: TemplateRef<void>;
    private contentPortal;
    readonly content: TemplatePortal | null;
    constructor(viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
}
