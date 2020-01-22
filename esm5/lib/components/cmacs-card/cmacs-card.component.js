/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Component, ContentChild, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2, TemplateRef, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core';
import { CmacsCardTabComponent } from './cmacs-card-tab.component';
import { DomSanitizer } from "@angular/platform-browser";
/**
 * @record
 */
export function BigFile() { }
if (false) {
    /** @type {?|undefined} */
    BigFile.prototype.title;
    /** @type {?|undefined} */
    BigFile.prototype.extension;
    /** @type {?|undefined} */
    BigFile.prototype.created_at;
}
var CmacsCardComponent = /** @class */ (function () {
    function CmacsCardComponent(cdr, renderer, sanitizer, elementRef) {
        this.cdr = cdr;
        this.sanitizer = sanitizer;
        this.folderIcon = '';
        this.isEditable = false;
        this.bordered = true;
        this.opened = false;
        this.editable = false;
        this.isRadio = false;
        this.loading = false;
        this.disabled = false;
        this.hoverable = false;
        this.useDefaultContent = false;
        this.playerReady = new EventEmitter();
        this.actions = [];
        this.team = [];
        this.file = null;
        this.project = [];
        this.cmacsType = 'none';
        this.cmacsIcon = '';
        this.cmacsIconOpenedFolder = 'iconUILarge-Folder';
        this.cmacsIconClosedFolder = 'iconUILarge-Folder';
        this.titleChange = new EventEmitter();
        this.ondlclickCard = new EventEmitter();
        this.open = new EventEmitter();
        this.close = new EventEmitter();
        this.selected = false;
        this.selectedChange = new EventEmitter();
        renderer.addClass(elementRef.nativeElement, 'ant-card');
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    CmacsCardComponent.prototype.openMail = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.stopImmediatePropagation();
        $event.preventDefault();
        /** @type {?} */
        var link = "mailto: " + this.project.teamLead.email;
        location.href = link;
    };
    /**
     * @return {?}
     */
    CmacsCardComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.cmacsType === 'folder') {
            this.folderIcon = this.opened ? this.cmacsIconOpenedFolder : this.cmacsIconClosedFolder;
        }
        this.isEditable = this.editable;
    };
    /**
     * @param {?} api
     * @return {?}
     */
    CmacsCardComponent.prototype.onPlayerReady = /**
     * @param {?} api
     * @return {?}
     */
    function (api) {
        this.playerReady.emit(api);
    };
    /**
     * @return {?}
     */
    CmacsCardComponent.prototype.checkRadio = /**
     * @return {?}
     */
    function () {
        this.selectedChange.emit(this.selected);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CmacsCardComponent.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.useDefaultContent || this.cmacsType === 'big-file') {
            this.select(event);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CmacsCardComponent.prototype.onDblClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.cmacsType === 'folder' && !this.useDefaultContent) {
            this.opened = !this.opened;
            this.folderIcon = this.opened ? this.cmacsIconOpenedFolder : this.cmacsIconClosedFolder;
            if (this.opened) {
                this.open.emit();
            }
            else {
                this.close.emit();
            }
        }
        if (this.cmacsType === 'project') {
            this.ondlclickCard.emit(this.project);
        }
    };
    /**
     * @return {?}
     */
    CmacsCardComponent.prototype.markForCheck = /**
     * @return {?}
     */
    function () {
        this.cdr.markForCheck();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CmacsCardComponent.prototype.select = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (!this.disabled) {
            if (!this.isRadio) {
                this.selected = !this.selected;
            }
            else {
                this.selected = this.selected ? this.selected : !this.selected;
            }
            this.selectedChange.emit(this.selected);
        }
    };
    /**
     * @param {?} event
     * @param {?} titleContainer
     * @param {?} titleSpan
     * @return {?}
     */
    CmacsCardComponent.prototype.handleEnter = /**
     * @param {?} event
     * @param {?} titleContainer
     * @param {?} titleSpan
     * @return {?}
     */
    function (event, titleContainer, titleSpan) {
        event.preventDefault();
        event.stopImmediatePropagation();
        titleContainer.style.textOverflow = 'ellipsis';
        /** @type {?} */
        var text = titleSpan.innerText.replace(/(\r\n|\n|\r)/gm, "");
        titleSpan.innerText = text;
        this.isEditable = false;
        this.titleChange.emit(text);
    };
    /**
     * @param {?} event
     * @param {?} titleSpan
     * @return {?}
     */
    CmacsCardComponent.prototype.handleEdit = /**
     * @param {?} event
     * @param {?} titleSpan
     * @return {?}
     */
    function (event, titleSpan) {
        /** @type {?} */
        var text = titleSpan.innerText.replace(/(\r\n|\n|\r)/gm, "");
        this.titleChange.emit(text);
    };
    /**
     * @param {?} titleContainer
     * @return {?}
     */
    CmacsCardComponent.prototype.toggleEdit = /**
     * @param {?} titleContainer
     * @return {?}
     */
    function (titleContainer) {
        this.isEditable = this.editable;
        if (this.isEditable) {
            titleContainer.style.textOverflow = 'initial';
        }
    };
    /**
     * @param {?} name
     * @return {?}
     */
    CmacsCardComponent.prototype.getInitials = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        /** @type {?} */
        var initials = name.match(/\b\w/g) || [];
        initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
        return initials;
    };
    /**
     * @return {?}
     */
    CmacsCardComponent.prototype.getBackgroundImage = /**
     * @return {?}
     */
    function () {
        return this.sanitizer.bypassSecurityTrustStyle('url(\'' + this.project.projectImage + '\')');
    };
    CmacsCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-card',
                    exportAs: 'cmacsCard',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    template: "<ng-template #content><ng-content></ng-content></ng-template>\r\n\r\n<div class=\"ant-card-head\" *ngIf=\"(title || extra || tab ) && (cmacsType === 'none' || cmacsType === 'team' || cmacsType === 'project')\">\r\n  <div class=\"ant-card-head-wrapper\">\r\n    <div class=\"ant-card-head-title\" *ngIf=\"title\">\r\n      <ng-container *cmacsStringTemplateOutlet=\"title\">{{ title }}</ng-container>\r\n    </div>\r\n    <div class=\"ant-card-extra\" *ngIf=\"extra\">\r\n      <ng-container *cmacsStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\r\n    </div>\r\n  </div>\r\n  <ng-container *ngIf=\"tab\">\r\n    <ng-template [ngTemplateOutlet]=\"tab.template\"></ng-template>\r\n  </ng-container>\r\n</div>\r\n\r\n<div class=\"ant-card-cover\" *ngIf=\"cover || cmacsType === 'selection' || cmacsType === 'action'\">\r\n  <ng-template [ngTemplateOutlet]=\"cover\"></ng-template>\r\n  <ng-container *ngIf=\"cmacsType === 'selection'\">\r\n    <label cmacs-radio [(ngModel)]=\"selected\" (ngModelChange)=\"checkRadio()\" [disabled]=\"disabled\">{{labelTitle}}</label>\r\n    <ng-template [ngTemplateOutlet]=\"body\"></ng-template>\r\n  </ng-container>\r\n</div>\r\n<div class=\"ant-card-body\" [ngStyle]=\"bodyStyle\">\r\n  <ng-container *ngIf=\"!loading\">\r\n\r\n    <ng-container *ngIf=\"cmacsType === 'todo'\">\r\n      <div *ngIf=\"todo.projectImage\" class=\"cmacs-todo-card-project-img\">\r\n        <img [src]=\"todo.projectImage\">\r\n      </div>\r\n      <!-- <div [style.backgroundColor]=\"todo.stateColor\" class=\"cmacs-todo-card-upper-line\"></div> -->\r\n      <div class=\"cmacs-todo-card-title\">\r\n        <span>{{todo.title}}</span>\r\n      </div>\r\n      <div *ngIf=\"todo.project\" class=\"cmacs-todo-card-project\">\r\n        <span>{{todo.project}}</span>\r\n      </div>\r\n      <div *ngIf=\"todo.date\" class=\"cmacs-todo-card-date\">\r\n        <span>{{todo.date}}</span>\r\n      </div>\r\n      <div class=\"cmacs-todo-card-action\">\r\n        <div *ngIf=\"todo.attachments\" class=\"cmacs-todo-card-attachments\">\r\n          <span>{{todo.attachments}}</span>\r\n          <a><i class=\"iconUILarge-Attached\"></i></a>\r\n        </div>\r\n        <div *ngIf=\"todo.comments\" class=\"cmacs-todo-card-comments\">\r\n          <span>{{todo.comments}}</span>\r\n          <a><i class=\"iconUILarge-Comments\"></i></a>\r\n        </div>\r\n\r\n        <div *ngIf=\"!todo.isTeam\" class=\"cmacs-todo-card-person\">\r\n          <a><i class=\"iconCreation-User\"></i></a>\r\n        </div>\r\n\r\n        <div *ngIf=\"todo.isTeam\" class=\"cmacs-todo-card-team\">\r\n          <a><i class=\"iconUILarge-Team\"></i></a>\r\n        </div>\r\n\r\n        <div *ngIf=\"todo.hasPriorityFlag\" class=\"cmacs-todo-card-priority\">\r\n          <a [style.color]=\"todo.stateColor\"><i nz-icon [type]=\"'flag'\"></i></a>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"cmacsType === 'big-file'\">\r\n      <div class=\"cmacs-card-big-file-meta\">\r\n        <ng-container *ngIf=\"!useDefaultContent\">\r\n          <div class=\"cmacs-card-big-file-icon-wrapper\">\r\n            <a><i class=\"{{cmacsIcon}}\"></i></a>\r\n          </div>\r\n          <div class=\"cmacs-card-big-file-extension-wrapper\">\r\n            <span>{{file.extension}}</span>\r\n          </div>\r\n        </ng-container>\r\n\r\n        <ng-container *ngIf=\"useDefaultContent\">\r\n          <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\r\n        </ng-container>\r\n      </div>\r\n      <div class=\"cmacs-card-big-file-description\">\r\n        <div class=\"cmacs-card-big-file-description-left-panel\">\r\n          <div class=\"cmacs-card-big-file-title\">\r\n            <span>{{file.title}}</span>\r\n          </div>\r\n          <div class=\"cmacs-card-big-file-date\">\r\n            <span>{{file.created_at}}</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"cmacs-card-big-file-description-right-panel\">\r\n          <div class=\"cmacs-card-big-file-extra\" *ngIf=\"extra\">\r\n            <ng-container *cmacsStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"cmacsType === 'video'\">\r\n      <div class=\"cmacs-card-video-player-wrapper\">\r\n        <cmacs-video-player [sources]=\"sources\" (playerReady)=\"onPlayerReady($event)\"></cmacs-video-player>\r\n      </div>\r\n      <div class=\"cmacs-card-video-description\">\r\n        <div class=\"cmacs-card-video-title\">\r\n          <span>{{title}}</span>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"cmacsType === 'file'\">\r\n      <div class=\"cmacs-card-files-icon-wrapper\">\r\n        <a><i class=\"{{cmacsIcon}}\"></i></a>\r\n      </div>\r\n      <div class=\"cmacs-card-label\">\r\n        <span>{{title}}</span>\r\n      </div>\r\n      <div class=\"cmacs-card-file-extra\" *ngIf=\"extra\">\r\n        <ng-container *cmacsStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"cmacsType === 'measure'\">\r\n      <div class=\"cmacs-card-measure-icon-wrapper\">\r\n        <a><i nz-icon [type]=\"cmacsIcon\"></i></a>\r\n      </div>\r\n      <div class=\"cmacs-card-label\">\r\n        <span>{{title}}</span>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"cmacsType === 'none' || cmacsType === 'selection' || cmacsType === 'action'\">\r\n      <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"cmacsType === 'team'\">\r\n      <ng-container *ngIf=\"useDefaultContent\">\r\n        <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"!useDefaultContent\">\r\n        <div style=\"margin-bottom: 20px; min-height: 25px; display: inline-flex\">\r\n          <div class=\"team-person-card\"\r\n               *ngFor=\"let person of team; index as i\"\r\n               [style.backgroundColor]=\"!person.image ? '#ffa800' : '#c7f5ff'\"\r\n               [style.display]=\"(i >= 4 && team.length > 5) ? 'none' : 'inline-flex' \"\r\n          >\r\n            <img width=\"30px\" height=\"30px\" *ngIf=\"person.image\" [src]=\"person.image\">\r\n            <span *ngIf=\"!person.image\">{{getInitials(person.name)}}</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"plus-team-card\" *ngIf=\"team.length > 5\">+{{team.length - 4}}</div>\r\n        <ng-content select=\"[cmacs-action-panel]\"></ng-content>\r\n      </ng-container>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"cmacsType === 'project'\">\r\n      <div class=\"projectimagecontainer\">\r\n          <div class=\"project-image\"\r\n          *ngIf=\"project.projectImage !== ''\"\r\n          [style.background-image]=\"getBackgroundImage()\"\r\n        ></div>\r\n      </div>\r\n      <div *ngIf=\"project.projectImage === ''\" class=\"cmacs-proj-card-div-Logo\">\r\n        <span class=\"cmacs-proj-card-text-Logo\">{{getInitials(project.name)}}</span>\r\n      </div>\r\n      <cmacs-tag class=\"project-status\" [cmacsGridType]=\"project.statusTag\">{{project.status}}</cmacs-tag>\r\n      <div class=\"project-dates-wrapper\">\r\n        <span class=\"project-dates-title\">Project Dates</span>\r\n        <span class=\"project-dates project-dates-date\">{{project.startDate}}</span>\r\n        <a class=\"iconspan\"><i class=\"iconArrowLarge-Arrow-Right project-dates\"></i></a>\r\n        <span class=\"project-dates project-dates-date\">{{project.endDate}}</span>\r\n      </div>\r\n\r\n      <div class=\"project-card-progress-bar\">\r\n        <div class=\"project-card-progress-bar-inner\" [style.width]=\"project.completion\"></div>\r\n      </div>\r\n      <div class=\"project-manager-details\">\r\n        <img *ngIf=\"project.teamLead.avatar\"  class=\"manager-avatar\" width=\"30px\" height=\"30px\" [src]=\"project.teamLead.avatar\">\r\n        <span *ngIf=\"!project.teamLead.avatar || project.teamLead.avatar === ''\" class=\"cmacs-proj-avatar-text\">{{getInitials(project.teamLead.name)}}</span>\r\n        <div class=\"project-manager-metadata\">\r\n          <div class=\"manager-name\"> {{ (project.teamLead.name.length > 20)? (project.teamLead.name | slice:0:20)+'...':(project.teamLead.name) }}</div>\r\n          <div class=\"manager-charge\">{{ (project.teamLead.charge.length > 20)? (project.teamLead.charge | slice:0:20)+'...':(project.teamLead.charge) }}</div>\r\n        </div>\r\n        <a (click)=\"openMail($event)\" class=\"iconspan project-email-icon\"><i class=\"iconUILarge-Message\"></i></a>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"cmacsType === 'folder'\">\r\n      <ng-container *ngIf=\"useDefaultContent\">\r\n        <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"!useDefaultContent\">\r\n        <div class=\"card-files-folders-icon-wrapper\">\r\n          <a><i [class]=\"folderIcon\"></i></a>\r\n        </div>\r\n        <div #titleContainer (click)=\"toggleEdit(titleContainer)\" class=\"card-files-folders-label\">\r\n          <span #name (keydown.enter)=\"handleEnter($event, titleContainer, name)\" (keyup)=\"handleEdit($event, name)\"\r\n                [attr.contentEditable]=\"isEditable\"\r\n          >{{title}}</span>\r\n        </div>\r\n        <div class=\"card-files-folder-extra\" *ngIf=\"extra\">\r\n          <ng-container *cmacsStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\r\n        </div>\r\n      </ng-container>\r\n    </ng-container>\r\n\r\n  </ng-container>\r\n  <cmacs-card-loading *ngIf=\"loading\"></cmacs-card-loading>\r\n</div>\r\n<ul class=\"ant-card-actions\" *ngIf=\"actions.length\">\r\n  <li *ngFor=\"let action of actions\" [style.width.%]=\"100 / actions.length\">\r\n    <span><ng-template [ngTemplateOutlet]=\"action\"></ng-template></span>\r\n  </li>\r\n</ul>\r\n\r\n",
                    host: {
                        '[class.ant-card-loading]': 'loading',
                        '[class.ant-card-bordered]': 'bordered',
                        '[class.ant-card-hoverable]': "hoverable || cmacsType === 'selection'",
                        '[class.ant-card-type-inner]': "type === 'inner'",
                        '[class.ant-card-contain-tabs]': '!!tab',
                        '[class.cmacs-card-files-wrapper]': "cmacsType === 'file'",
                        '[class.cmacs-card-measure-wrapper]': "cmacsType === 'measure'",
                        '[class.cmacs-card-measure-wrapper-selected]': "cmacsType === 'measure' && selected",
                        '[class.cmacs-selection-card]': "cmacsType === 'selection'",
                        '[class.cmacs-card-selected]': "cmacsType === 'selection' && selected",
                        '[class.cmacs-card-disabled]': "cmacsType === 'selection' && disabled",
                        '[class.cmacs-action-card]': "cmacsType === 'action'",
                        '[class.cmacs-big-file-card]': "cmacsType === 'big-file'",
                        '[class.cmacs-big-file-card-selected]': "cmacsType === 'big-file' && selected",
                        '[class.cmacs-action-card-disabled]': "cmacsType === 'action' && disabled",
                        '[class.cmacs-information-card]': "cmacsType === 'team'",
                        '[class.cmacs-team-card]': "cmacsType === 'project'",
                        '[class.cmacs-video-player-card]': "cmacsType === 'video'",
                        '[class.cmacs-todo-card]': "cmacsType === 'todo'",
                        '[class.cmacs-todo-card-selected]': "cmacsType === 'todo' && selected",
                        '[class.cmacs-team-card-selected]': "cmacsType === 'project' && selected",
                        '[class.cmacs-card-files-folders-wrapper]': "cmacsType === 'folder'",
                        '[class.file-card-selected]': "cmacsType === 'folder' && selected"
                    },
                    styles: ["cmacs-card {\n        display: block;\n      }\n    ", ".ant-card,.ant-card-head{font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79}.ant-card-extra,.ant-card-head-title{padding:0}.ant-card-head{min-height:40px;padding:12px}.ant-card-grid{font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79}.cmacs-card-files-wrapper{width:223px;height:36px;border:none}.cmacs-card-measure-wrapper{width:223px;height:36px;border:1px solid #dee0e5}.cmacs-card-measure-wrapper .cmacs-card-label{padding:9px 0;font-size:13px}.cmacs-card-measure-wrapper-selected,.cmacs-card-measure-wrapper:hover{border-color:#2a7cff;cursor:pointer;box-shadow:0 6px 10px 0 rgba(0,0,0,.15)}.cmacs-card-measure-wrapper-selected .cmacs-card-measure-icon-wrapper,.cmacs-card-measure-wrapper:hover .cmacs-card-measure-icon-wrapper{border-right-color:#2a7cff}.cmacs-card-measure-wrapper-selected .cmacs-card-measure-icon-wrapper i,.cmacs-card-measure-wrapper:hover .cmacs-card-measure-icon-wrapper i{color:#2a7cff}.cmacs-card-files-wrapper:hover{background-color:#f6f7fb;cursor:pointer}.cmacs-card-files-wrapper .ant-card-body,.cmacs-card-measure-wrapper .ant-card-body{padding:0;width:100%}.cmacs-card-files-wrapper div,.cmacs-card-measure-wrapper div{display:inline-block}.cmacs-card-files-icon-wrapper{width:36px;height:36px;border-radius:3px;box-shadow:0 6px 10px 0 rgba(0,0,0,.15);background-color:#fff;margin-right:16px;text-align:center;position:relative;top:-8px}.cmacs-card-measure-icon-wrapper{background-color:#fff;margin-right:16px;text-align:center;padding:7px 6px 6px;border-right:1px solid #dee0e5}.cmacs-card-measure-icon-wrapper i{font-size:18px;top:23%;position:relative;color:#dee0e5}.cmacs-card-files-icon-wrapper i{color:#fb3147!important;font-size:18px;top:23%;position:relative}.cmacs-card-file-extra{font-size:22px;float:right;margin-top:2px;margin-right:5px}.cmacs-card-file-extra i{color:#bec4cd!important}.cmacs-card-label{padding:10px 0}.cmacs-selection-card{width:137px}.cmacs-selection-card .ant-card-cover{padding:15px}.cmacs-selection-card .ant-card-body{padding:10px 10px 30px;text-align:center;font-size:12px}.cmacs-selection-card .ant-card-meta-description{color:#656c79}.cmacs-selection-card.ant-card-hoverable:hover{border:1px solid #bec4cd}.cmacs-selection-card.ant-card-hoverable:hover .ant-radio-inner{border-color:#bec4cd}.cmacs-card-selected,.cmacs-card-selected:hover,.cmacs-card-selected:hover .ant-radio-inner{border-color:#2a7cff!important}.cmacs-card-disabled:hover .ant-radio-inner{border-color:#d9d9d9!important}.cmacs-card-selected .ant-card-meta-description{color:#2a7cff!important}.cmacs-card-disabled,.cmacs-card-disabled:hover{border-color:#dee0e5!important;cursor:default}.cmacs-card-disabled .ant-card-meta-description{color:#97a0ae!important}.cmacs-action-card{border:none;margin-left:auto;margin-right:auto;min-width:131px}.cmacs-action-card:hover{cursor:pointer}.cmacs-action-card-disabled:hover{cursor:default}.cmacs-action-card:hover .ant-card-meta-title{color:#2164c9}.cmacs-action-card .ant-card-meta-description{text-align:center;color:#acb3bf}.cmacs-action-card .ant-card-body{padding:13px}.cmacs-action-card .ant-card-meta-title{color:#2a7cff;white-space:normal;text-align:center;font-size:12px;padding-top:18px}.cmacs-action-card-disabled .ant-card-meta-title,.cmacs-action-card-disabled:hover .ant-card-meta-title{color:#97a0ae}.cmacs-information-card.ant-card-bordered{border-color:#dee0e5}.cmacs-information-card .ant-card-head{min-height:30px}.cmacs-information-card .cmacs-btn-action{border-color:#dee0e5}.cmacs-information-card:hover .cmacs-btn-action,.cmacs-information-card:hover .cmacs-btn-action span i{color:#2a7cff!important}.cmacs-information-card .ant-card-body{padding:20px 10px}.cmacs-information-card .team-person-card{width:30px;height:30px;border-radius:3px;display:-webkit-inline-box;display:inline-flex;margin-right:12px}.cmacs-information-card .team-person-card:last-child{margin-right:0}.cmacs-information-card .plus-team-card{width:30px;height:30px;border-radius:3px;display:-webkit-inline-box;display:inline-flex;background-color:#dae8ff;color:#2a7cff;position:relative;top:-10px;font-size:13px;padding:5px 7px}.cmacs-information-card .team-person-card span{width:30px;height:30px;padding:6px 8px;color:#fff}.iconspan i{font-size:16px;position:relative;height:16px;width:16px;display:inline-block;vertical-align:text-top}.iconspan{height:20px;width:20px;text-align:center;vertical-align:middle;display:inline-block}.cmacs-team-card.ant-card-bordered{border-color:#dee0e5}.cmacs-team-card-selected.ant-card-bordered{border-color:#2a7cff}.cmacs-team-card .ant-card-head{min-height:30px}.cmacs-team-card .ant-card-body{padding:0}.project-card-progress-bar-inner{height:5px;background-color:#2a7cff;border-radius:5px}.project-card-progress-bar{height:5px;background-color:#dee0e5;border-radius:5px;width:83%;margin:0 auto}.project-dates{display:inline-block}.project-status{position:relative;top:-36px;left:18px}.project-dates-wrapper{padding:0 20px;margin-top:-10px;margin-bottom:10px}.project-dates-title{color:#97a0ae;display:block;margin-bottom:5px}.project-dates-date{color:#656c79}.project-dates-wrapper a{margin-left:10px;margin-right:10px}.project-manager-metadata{display:inline-block;margin-left:10px;margin-right:10px}.manager-name{font-family:Roboto-Medium;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:1.33;letter-spacing:normal;color:#97a0ae;max-width:111px;width:111px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;position:relative}.manager-charge{color:#acb3bf;max-width:111px;width:111px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;position:relative}.project-manager-details{margin:20px}.manager-avatar{display:inline-block;border-radius:3px;font-size:12px;color:#fff;text-align:center;line-height:1.33;float:left}.project-manager-details i{color:#656c79}.project-email-icon{float:right}.cmacs-card-files-folders-wrapper{height:48px;background-color:#fff;border:1px solid #dee0e5;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer!important}.card-files-uploading-wrapper{width:170px;height:48px;background-color:#f3f3f4;border:1px solid #dee0e5}.cmacs-card-files-folders-wrapper:hover{background-color:#f6f7fb;cursor:pointer}.file-card-selected,.file-card-selected:hover{background-color:#f2f7ff}.cmacs-card-files-folders-wrapper:hover .card-files-folders-label{color:#2a7cff}.cmacs-card-files-folders-wrapper:hover .card-files-folder-extra a{opacity:1}.card-files-folder-extra{display:inline-block;font-size:20px}.card-files-folder-extra a{opacity:0}.card-files-folders-label{width:100px;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.card-files-uploading-wrapper .ant-card-body,.cmacs-card-files-folders-wrapper .ant-card-body{padding:11px 5px 11px 11px}.card-files-folders-icon-wrapper{font-size:20px;margin-right:10px;display:inline-block}.card-files-uploading-wrapper i,.cmacs-card-files-folders-wrapper i{color:#656c79!important}.card-files-progress-bar-inner{height:5px;background-color:#2a7cff;border-radius:5px}.card-files-progress-bar{height:5px;background-color:#dee0e5;border-radius:5px;margin-top:7px}.cmacs-big-file-card{width:243px;border:none;overflow:hidden}.cmacs-big-file-card .ant-card-body{padding:0}.cmacs-card-big-file-meta{border:1px solid #dee0e5;-webkit-transition:.3s;transition:.3s}.cmacs-big-file-card::before{content:' ';width:40px;height:21px;background-color:#fff;position:absolute;left:calc(100% - 26px);-webkit-transform:rotate(45deg);transform:rotate(45deg);top:-4px;border-bottom:1px solid #dee0e5;-webkit-transition:.3s;transition:.3s}.cmacs-card-big-file-icon-wrapper{font-size:22px;margin:0 auto;width:22px;padding-top:60px;padding-bottom:40px}.cmacs-card-big-file-extension-wrapper{text-align:right;padding:0 10px 10px 0;color:#acb3bf}.cmacs-card-big-file-description{height:61px;margin-top:10px;-webkit-transition:.3s;transition:.3s}.cmacs-card-big-file-title{padding:10px 10px 5px;font-size:12px;color:#3b3f46;font-weight:500;-webkit-transition:.3s;transition:.3s;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cmacs-card-big-file-date{padding:0 10px 10px;font-size:12px;color:#acb3bf;font-weight:500}.cmacs-card-big-file-extra{font-size:21px;padding-top:3px;-webkit-transition:.3s;transition:.3s}.cmacs-card-big-file-extra a{color:#656c79;opacity:0;-webkit-transition:.3s;transition:.3s}.cmacs-card-big-file-description-left-panel{width:90%;float:left}.cmacs-card-big-file-description-right-panel{width:10%;float:right}.cmacs-big-file-card:hover{cursor:pointer}.cmacs-big-file-card:hover .cmacs-card-big-file-description{background-color:#f6f7fb}.cmacs-big-file-card:hover .cmacs-card-big-file-title{color:#2a7cff}.cmacs-big-file-card:hover .cmacs-card-big-file-extra a{opacity:1}.cmacs-big-file-card-selected .cmacs-card-big-file-description,.cmacs-big-file-card-selected:hover .cmacs-card-big-file-description{background-color:#f2f7ff}.cmacs-big-file-card-selected .cmacs-card-big-file-meta,.cmacs-big-file-card-selected.cmacs-big-file-card::before{border-color:#2a7cff}.cmacs-card-video-description{color:#3b3f46;font-weight:600;font-size:12px;margin-top:17px}.cmacs-card-video-player-wrapper{width:337px;height:226px;border:1px solid #dee0e5}.cmacs-video-player-card{border:none;width:337px}.cmacs-video-player-card .ant-card-body{padding:0}.cmacs-todo-card-upper-line{width:95%;margin:5px;height:2px;border-radius:100px}.cmacs-todo-card{width:243px}.cmacs-todo-card .ant-card-body{padding:0}.cmacs-todo-card-title{color:#3b3f46;font-size:12px;margin:21px 14px 0}.cmacs-todo-card-project{color:#97a0ae;margin:10px 14px 0;font-size:12px}.cmacs-todo-card-date{color:#656c79;margin:14px 14px 0;background-color:#f6f7fb;padding:2px 5px;border-radius:3px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.cmacs-todo-card-action{padding:15px 14px 30px 15px;font-size:14px}.cmacs-todo-card-attachments,.cmacs-todo-card-comments,.cmacs-todo-card-person,.cmacs-todo-card-team{float:left;margin-right:10px}.cmacs-todo-card-attachments span,.cmacs-todo-card-comments span{margin-right:3px;color:#2a7cff;font-size:12px}.cmacs-todo-card-priority{float:right;margin-left:12px}.cmacs-todo-card-attachments a,.cmacs-todo-card-comments a,.cmacs-todo-card-person a,.cmacs-todo-card-team a{color:#656c79}.cmacs-todo-card-project-img{width:241px;height:100px;overflow:hidden}.cmacs-todo-card-project-img img{width:241px}.cmacs-todo-card-selected{border-color:#2a7cff!important}.cmacs-proj-card-text-Logo{font-size:50px;color:#fff;background-color:#ffa800}.cmacs-proj-card-div-Logo{background-color:#ffa800;width:221px;height:107px;text-align:center}.cmacs-proj-avatar-text{height:30px;width:30px;line-height:22px;font-size:11px;border-radius:3px;background:#512da8;color:#fff;text-align:center;cursor:pointer;padding:4px;display:inline-block;float:left}.projectimagecontainer{height:107px}.project-image{background-repeat:no-repeat;background-position:center center;background-size:contain;height:100%;width:auto}.cmacs-todo-card-attachments span,.cmacs-todo-card-comments span,.cmacs-todo-card-person a{vertical-align:middle}.cmacs-todo-card-person,.cmacs-todo-card-team{margin-left:4px}.cmacs-todo-card-attachments a,.cmacs-todo-card-comments a{vertical-align:sub;font-size:18px}.cmacs-todo-card-team a{font-size:19px;vertical-align:top}"]
                }] }
    ];
    /** @nocollapse */
    CmacsCardComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: DomSanitizer },
        { type: ElementRef }
    ]; };
    CmacsCardComponent.propDecorators = {
        bordered: [{ type: Input }],
        opened: [{ type: Input }],
        editable: [{ type: Input }],
        isRadio: [{ type: Input }],
        loading: [{ type: Input }],
        disabled: [{ type: Input }],
        hoverable: [{ type: Input }],
        useDefaultContent: [{ type: Input }],
        sources: [{ type: Input }],
        playerReady: [{ type: Output }],
        bodyStyle: [{ type: Input }],
        cover: [{ type: Input }],
        body: [{ type: Input }],
        actions: [{ type: Input }],
        team: [{ type: Input }],
        file: [{ type: Input }],
        project: [{ type: Input }],
        todo: [{ type: Input }],
        type: [{ type: Input }],
        cmacsType: [{ type: Input }],
        cmacsIcon: [{ type: Input }],
        cmacsIconOpenedFolder: [{ type: Input }],
        cmacsIconClosedFolder: [{ type: Input }],
        title: [{ type: Input }],
        labelTitle: [{ type: Input }],
        titleChange: [{ type: Output }],
        extra: [{ type: Input }],
        tab: [{ type: ContentChild, args: [CmacsCardTabComponent,] }],
        ondlclickCard: [{ type: Output }],
        open: [{ type: Output }],
        close: [{ type: Output }],
        selected: [{ type: Input }],
        value: [{ type: Input }],
        selectedChange: [{ type: Output }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }],
        onDblClick: [{ type: HostListener, args: ['dblclick', ['$event'],] }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsCardComponent.prototype, "bordered", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsCardComponent.prototype, "opened", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsCardComponent.prototype, "editable", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsCardComponent.prototype, "isRadio", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsCardComponent.prototype, "loading", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsCardComponent.prototype, "disabled", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsCardComponent.prototype, "hoverable", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsCardComponent.prototype, "useDefaultContent", void 0);
    return CmacsCardComponent;
}());
export { CmacsCardComponent };
if (false) {
    /** @type {?} */
    CmacsCardComponent.prototype.folderIcon;
    /** @type {?} */
    CmacsCardComponent.prototype.isEditable;
    /** @type {?} */
    CmacsCardComponent.prototype.bordered;
    /** @type {?} */
    CmacsCardComponent.prototype.opened;
    /** @type {?} */
    CmacsCardComponent.prototype.editable;
    /** @type {?} */
    CmacsCardComponent.prototype.isRadio;
    /** @type {?} */
    CmacsCardComponent.prototype.loading;
    /** @type {?} */
    CmacsCardComponent.prototype.disabled;
    /** @type {?} */
    CmacsCardComponent.prototype.hoverable;
    /** @type {?} */
    CmacsCardComponent.prototype.useDefaultContent;
    /** @type {?} */
    CmacsCardComponent.prototype.sources;
    /** @type {?} */
    CmacsCardComponent.prototype.playerReady;
    /** @type {?} */
    CmacsCardComponent.prototype.bodyStyle;
    /** @type {?} */
    CmacsCardComponent.prototype.cover;
    /** @type {?} */
    CmacsCardComponent.prototype.body;
    /** @type {?} */
    CmacsCardComponent.prototype.actions;
    /** @type {?} */
    CmacsCardComponent.prototype.team;
    /** @type {?} */
    CmacsCardComponent.prototype.file;
    /** @type {?} */
    CmacsCardComponent.prototype.project;
    /** @type {?} */
    CmacsCardComponent.prototype.todo;
    /** @type {?} */
    CmacsCardComponent.prototype.type;
    /** @type {?} */
    CmacsCardComponent.prototype.cmacsType;
    /** @type {?} */
    CmacsCardComponent.prototype.cmacsIcon;
    /** @type {?} */
    CmacsCardComponent.prototype.cmacsIconOpenedFolder;
    /** @type {?} */
    CmacsCardComponent.prototype.cmacsIconClosedFolder;
    /** @type {?} */
    CmacsCardComponent.prototype.title;
    /** @type {?} */
    CmacsCardComponent.prototype.labelTitle;
    /** @type {?} */
    CmacsCardComponent.prototype.titleChange;
    /** @type {?} */
    CmacsCardComponent.prototype.extra;
    /** @type {?} */
    CmacsCardComponent.prototype.tab;
    /** @type {?} */
    CmacsCardComponent.prototype.ondlclickCard;
    /** @type {?} */
    CmacsCardComponent.prototype.open;
    /** @type {?} */
    CmacsCardComponent.prototype.close;
    /** @type {?} */
    CmacsCardComponent.prototype.selected;
    /** @type {?} */
    CmacsCardComponent.prototype.value;
    /** @type {?} */
    CmacsCardComponent.prototype.selectedChange;
    /**
     * @type {?}
     * @private
     */
    CmacsCardComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    CmacsCardComponent.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLWNhcmQvY21hY3MtY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ29CLGlCQUFpQixFQUMxQyxTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFBRSxZQUFZLEVBQWMsWUFBWSxFQUNsRCxLQUFLLEVBQXFCLE1BQU0sRUFDaEMsU0FBUyxFQUNULFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBR2pFLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQzs7OztBQUl2RCw2QkFJQzs7O0lBSEMsd0JBQWU7O0lBQ2YsNEJBQW1COztJQUNuQiw2QkFBb0I7O0FBR3RCO0lBNkVFLDRCQUFvQixHQUFzQixFQUM5QixRQUFtQixFQUNYLFNBQXVCLEVBQy9CLFVBQXNCO1FBSGQsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFFdEIsY0FBUyxHQUFULFNBQVMsQ0FBYztRQXZDM0MsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ00sYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUV6QyxnQkFB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QUEyQzs7SUFDM0MsaUNBQWdFOztJQUNoRSwyQ0FBa0Q7O0lBQ2xELGtDQUF5Qzs7SUFDekMsbUNBQTBDOztJQUMxQyxzQ0FBMEI7O0lBQzFCLG1DQUFxQjs7SUFDckIsNENBQThFOzs7OztJQUVsRSxpQ0FBOEI7Ozs7O0lBRTlCLHVDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBIb3N0TGlzdGVuZXIsXHJcbiAgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHtDbWFjc0NhcmRUYWJDb21wb25lbnR9IGZyb20gJy4vY21hY3MtY2FyZC10YWIuY29tcG9uZW50JztcclxuaW1wb3J0IHtWZ0FQSX0gZnJvbSBcInZpZGVvZ3VsYXIyL2NvbXBpbGVkL3NyYy9jb3JlL3NlcnZpY2VzL3ZnLWFwaVwiO1xyXG5pbXBvcnQge1NvdXJjZX0gZnJvbSBcIi4uL2NtYWNzLXZpZGVvLXBsYXllci9jbWFjcy12aWRlby1wbGF5ZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7RG9tU2FuaXRpemVyfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5cclxuZXhwb3J0IHR5cGUgQ21hY3NDYXJkVHlwZSA9ICdmaWxlJyB8ICdzZWxlY3Rpb24nIHwgJ2FjdGlvbicgfCAndGVhbScgfCAncHJvamVjdCcgfCAnZm9sZGVyJyB8ICdtZWFzdXJlJyB8ICdiaWctZmlsZScgfCAnbm9uZScgfCAndmlkZW8nIHwgJ3RvZG8nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCaWdGaWxlIHtcclxuICB0aXRsZT86IHN0cmluZztcclxuICBleHRlbnNpb24/OiBzdHJpbmc7XHJcbiAgY3JlYXRlZF9hdD86IHN0cmluZztcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1jYXJkJyxcclxuICBleHBvcnRBczogJ2NtYWNzQ2FyZCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtY2FyZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgY21hY3MtY2FyZCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LWNhcmQtbG9hZGluZ10nOiAnbG9hZGluZycsXHJcbiAgICAnW2NsYXNzLmFudC1jYXJkLWJvcmRlcmVkXSc6ICdib3JkZXJlZCcsXHJcbiAgICAnW2NsYXNzLmFudC1jYXJkLWhvdmVyYWJsZV0nOiBcImhvdmVyYWJsZSB8fCBjbWFjc1R5cGUgPT09ICdzZWxlY3Rpb24nXCIsXHJcbiAgICAnW2NsYXNzLmFudC1jYXJkLXR5cGUtaW5uZXJdJzogYHR5cGUgPT09ICdpbm5lcidgLFxyXG4gICAgJ1tjbGFzcy5hbnQtY2FyZC1jb250YWluLXRhYnNdJzogJyEhdGFiJyxcclxuICAgICdbY2xhc3MuY21hY3MtY2FyZC1maWxlcy13cmFwcGVyXSc6IFwiY21hY3NUeXBlID09PSAnZmlsZSdcIixcclxuICAgICdbY2xhc3MuY21hY3MtY2FyZC1tZWFzdXJlLXdyYXBwZXJdJzogXCJjbWFjc1R5cGUgPT09ICdtZWFzdXJlJ1wiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1jYXJkLW1lYXN1cmUtd3JhcHBlci1zZWxlY3RlZF0nOiBcImNtYWNzVHlwZSA9PT0gJ21lYXN1cmUnICYmIHNlbGVjdGVkXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLXNlbGVjdGlvbi1jYXJkXSc6IFwiY21hY3NUeXBlID09PSAnc2VsZWN0aW9uJ1wiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1jYXJkLXNlbGVjdGVkXSc6IFwiY21hY3NUeXBlID09PSAnc2VsZWN0aW9uJyAmJiBzZWxlY3RlZFwiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1jYXJkLWRpc2FibGVkXSc6IFwiY21hY3NUeXBlID09PSAnc2VsZWN0aW9uJyAmJiBkaXNhYmxlZFwiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1hY3Rpb24tY2FyZF0nOiBcImNtYWNzVHlwZSA9PT0gJ2FjdGlvbidcIixcclxuICAgICdbY2xhc3MuY21hY3MtYmlnLWZpbGUtY2FyZF0nOiBcImNtYWNzVHlwZSA9PT0gJ2JpZy1maWxlJ1wiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1iaWctZmlsZS1jYXJkLXNlbGVjdGVkXSc6IFwiY21hY3NUeXBlID09PSAnYmlnLWZpbGUnICYmIHNlbGVjdGVkXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLWFjdGlvbi1jYXJkLWRpc2FibGVkXSc6IFwiY21hY3NUeXBlID09PSAnYWN0aW9uJyAmJiBkaXNhYmxlZFwiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1pbmZvcm1hdGlvbi1jYXJkXSc6IFwiY21hY3NUeXBlID09PSAndGVhbSdcIixcclxuICAgICdbY2xhc3MuY21hY3MtdGVhbS1jYXJkXSc6IFwiY21hY3NUeXBlID09PSAncHJvamVjdCdcIixcclxuICAgICdbY2xhc3MuY21hY3MtdmlkZW8tcGxheWVyLWNhcmRdJzogXCJjbWFjc1R5cGUgPT09ICd2aWRlbydcIixcclxuICAgICdbY2xhc3MuY21hY3MtdG9kby1jYXJkXSc6IFwiY21hY3NUeXBlID09PSAndG9kbydcIixcclxuICAgICdbY2xhc3MuY21hY3MtdG9kby1jYXJkLXNlbGVjdGVkXSc6IFwiY21hY3NUeXBlID09PSAndG9kbycgJiYgc2VsZWN0ZWRcIixcclxuICAgICdbY2xhc3MuY21hY3MtdGVhbS1jYXJkLXNlbGVjdGVkXSc6IFwiY21hY3NUeXBlID09PSAncHJvamVjdCcgJiYgc2VsZWN0ZWRcIixcclxuICAgICdbY2xhc3MuY21hY3MtY2FyZC1maWxlcy1mb2xkZXJzLXdyYXBwZXJdJzogXCJjbWFjc1R5cGUgPT09ICdmb2xkZXInXCIsXHJcbiAgICAnW2NsYXNzLmZpbGUtY2FyZC1zZWxlY3RlZF0nOiBcImNtYWNzVHlwZSA9PT0gJ2ZvbGRlcicgJiYgc2VsZWN0ZWRcIlxyXG4gIH0sXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtY2FyZC5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0NhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgZm9sZGVySWNvbiA9ICcnO1xyXG4gIGlzRWRpdGFibGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYm9yZGVyZWQgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBvcGVuZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZWRpdGFibGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaXNSYWRpbyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsb2FkaW5nID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGhvdmVyYWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB1c2VEZWZhdWx0Q29udGVudCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNvdXJjZXM6IFNvdXJjZVtdO1xyXG4gIEBPdXRwdXQoKSBwbGF5ZXJSZWFkeTogRXZlbnRFbWl0dGVyPFZnQVBJPiA9IG5ldyBFdmVudEVtaXR0ZXI8VmdBUEk+KCk7XHJcbiAgQElucHV0KCkgYm9keVN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG4gIEBJbnB1dCgpIGNvdmVyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBib2R5OiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBhY3Rpb25zOiBBcnJheTxUZW1wbGF0ZVJlZjx2b2lkPj4gPSBbXTtcclxuICBASW5wdXQoKSB0ZWFtOiBhbnkgPSBbXTtcclxuICBASW5wdXQoKSBmaWxlOiBCaWdGaWxlID0gbnVsbDtcclxuICBASW5wdXQoKSBwcm9qZWN0OiBhbnkgPSBbXTtcclxuICBASW5wdXQoKSB0b2RvOiBhbnk7XHJcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGNtYWNzVHlwZTogQ21hY3NDYXJkVHlwZSA9ICdub25lJztcclxuICBASW5wdXQoKSBjbWFjc0ljb246IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGNtYWNzSWNvbk9wZW5lZEZvbGRlcjogc3RyaW5nID0gJ2ljb25VSUxhcmdlLUZvbGRlcic7XHJcbiAgQElucHV0KCkgY21hY3NJY29uQ2xvc2VkRm9sZGVyOiBzdHJpbmcgPSAnaWNvblVJTGFyZ2UtRm9sZGVyJztcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbGFiZWxUaXRsZTogc3RyaW5nO1xyXG4gIEBPdXRwdXQoKSB0aXRsZUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICBASW5wdXQoKSBleHRyYTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQENvbnRlbnRDaGlsZChDbWFjc0NhcmRUYWJDb21wb25lbnQpIHRhYjogQ21hY3NDYXJkVGFiQ29tcG9uZW50O1xyXG4gIEBPdXRwdXQoKSBvbmRsY2xpY2tDYXJkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBASW5wdXQoKSBzZWxlY3RlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHZhbHVlIDogYW55O1xyXG4gIEBPdXRwdXQoKSBzZWxlY3RlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgICAgICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgICAgICAgICAgICBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxyXG4gICAgICAgICAgICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1jYXJkJyk7XHJcbiAgfVxyXG5cclxuICBvcGVuTWFpbCgkZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICAkZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGxpbmsgPSBgbWFpbHRvOiAke3RoaXMucHJvamVjdC50ZWFtTGVhZC5lbWFpbH1gO1xyXG4gICAgbG9jYXRpb24uaHJlZiA9IGxpbms7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmNtYWNzVHlwZSA9PT0gJ2ZvbGRlcicpIHtcclxuICAgICAgdGhpcy5mb2xkZXJJY29uID0gdGhpcy5vcGVuZWQgPyB0aGlzLmNtYWNzSWNvbk9wZW5lZEZvbGRlciA6IHRoaXMuY21hY3NJY29uQ2xvc2VkRm9sZGVyO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pc0VkaXRhYmxlID0gdGhpcy5lZGl0YWJsZTtcclxuICB9XHJcblxyXG4gIG9uUGxheWVyUmVhZHkoYXBpOiBWZ0FQSSkge1xyXG4gICAgdGhpcy5wbGF5ZXJSZWFkeS5lbWl0KGFwaSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgY2hlY2tSYWRpbygpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSkgb25DbGljayhldmVudDogRXZlbnQpIHtcclxuICAgIGlmICghdGhpcy51c2VEZWZhdWx0Q29udGVudCB8fCB0aGlzLmNtYWNzVHlwZSA9PT0gJ2JpZy1maWxlJykge1xyXG4gICAgICB0aGlzLnNlbGVjdChldmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkYmxjbGljaycsIFsnJGV2ZW50J10pIG9uRGJsQ2xpY2soZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5jbWFjc1R5cGUgPT09ICdmb2xkZXInICYmICF0aGlzLnVzZURlZmF1bHRDb250ZW50KSB7XHJcbiAgICAgIHRoaXMub3BlbmVkID0gIXRoaXMub3BlbmVkO1xyXG4gICAgICB0aGlzLmZvbGRlckljb24gPSB0aGlzLm9wZW5lZCA/IHRoaXMuY21hY3NJY29uT3BlbmVkRm9sZGVyIDogdGhpcy5jbWFjc0ljb25DbG9zZWRGb2xkZXI7XHJcbiAgICAgIGlmICh0aGlzLm9wZW5lZCkge1xyXG4gICAgICAgIHRoaXMub3Blbi5lbWl0KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZS5lbWl0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLmNtYWNzVHlwZSA9PT0gJ3Byb2plY3QnKXtcclxuICAgICAgdGhpcy5vbmRsY2xpY2tDYXJkLmVtaXQodGhpcy5wcm9qZWN0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1hcmtGb3JDaGVjaygpOiB2b2lkIHtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0KGV2ZW50OiBFdmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIGlmICghdGhpcy5pc1JhZGlvKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9ICF0aGlzLnNlbGVjdGVkO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkID8gdGhpcy5zZWxlY3RlZCA6ICF0aGlzLnNlbGVjdGVkO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUVudGVyKGV2ZW50OiBLZXlib2FyZEV2ZW50LCB0aXRsZUNvbnRhaW5lciwgdGl0bGVTcGFuKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICB0aXRsZUNvbnRhaW5lci5zdHlsZS50ZXh0T3ZlcmZsb3cgPSAnZWxsaXBzaXMnO1xyXG4gICAgICBjb25zdCB0ZXh0ID0gdGl0bGVTcGFuLmlubmVyVGV4dC5yZXBsYWNlKC8oXFxyXFxufFxcbnxcXHIpL2dtLFwiXCIpO1xyXG4gICAgICB0aXRsZVNwYW4uaW5uZXJUZXh0ID0gdGV4dDtcclxuICAgICAgdGhpcy5pc0VkaXRhYmxlID0gZmFsc2U7XHJcbiAgICAgIHRoaXMudGl0bGVDaGFuZ2UuZW1pdCh0ZXh0KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUVkaXQoZXZlbnQ6IEtleWJvYXJkRXZlbnQsIHRpdGxlU3Bhbikge1xyXG4gICAgY29uc3QgdGV4dCA9IHRpdGxlU3Bhbi5pbm5lclRleHQucmVwbGFjZSgvKFxcclxcbnxcXG58XFxyKS9nbSxcIlwiKTtcclxuICAgIHRoaXMudGl0bGVDaGFuZ2UuZW1pdCh0ZXh0KTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZUVkaXQodGl0bGVDb250YWluZXIpIHtcclxuICAgIHRoaXMuaXNFZGl0YWJsZSA9IHRoaXMuZWRpdGFibGU7XHJcbiAgICBpZiAodGhpcy5pc0VkaXRhYmxlKXtcclxuICAgICAgdGl0bGVDb250YWluZXIuc3R5bGUudGV4dE92ZXJmbG93ID0gJ2luaXRpYWwnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0SW5pdGlhbHMobmFtZTogYW55KSB7XHJcbiAgICBsZXQgaW5pdGlhbHMgPSBuYW1lLm1hdGNoKC9cXGJcXHcvZykgfHwgW107XHJcbiAgICBpbml0aWFscyA9ICgoaW5pdGlhbHMuc2hpZnQoKSB8fCAnJykgKyAoaW5pdGlhbHMucG9wKCkgfHwgJycpKS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgcmV0dXJuIGluaXRpYWxzO1xyXG4gIH1cclxuXHJcbiAgZ2V0QmFja2dyb3VuZEltYWdlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSgndXJsKFxcJycgKyB0aGlzLnByb2plY3QucHJvamVjdEltYWdlICsgJ1xcJyknKTtcclxuICB9XHJcbn1cclxuIl19