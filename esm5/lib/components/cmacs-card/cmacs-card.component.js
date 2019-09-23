/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Component, ContentChild, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2, TemplateRef, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core';
import { CmacsCardTabComponent } from './cmacs-card-tab.component';
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
    function CmacsCardComponent(cdr, renderer, elementRef) {
        this.cdr = cdr;
        this.folderIcon = 'folder';
        this.isEditable = false;
        this.bordered = true;
        this.opened = false;
        this.editable = false;
        this.isRadio = false;
        this.loading = false;
        this.disabled = false;
        this.hoverable = false;
        this.playerReady = new EventEmitter();
        this.actions = [];
        this.team = [];
        this.file = null;
        this.project = [];
        this.cmacsType = 'none';
        this.cmacsIcon = '';
        this.titleChange = new EventEmitter();
        this.ondlclickCard = new EventEmitter();
        this.open = new EventEmitter();
        this.close = new EventEmitter();
        this.selected = false;
        this.selectedChange = new EventEmitter();
        renderer.addClass(elementRef.nativeElement, 'ant-card');
    }
    /**
     * @return {?}
     */
    CmacsCardComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.cmacsType === "folder") {
            this.folderIcon = this.opened ? 'folder-open' : 'folder';
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
        this.select(event);
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
        if (this.cmacsType === 'folder') {
            this.folderIcon = this.folderIcon === 'folder' ? 'folder-open' : 'folder';
            this.opened = !this.opened;
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
    CmacsCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-card',
                    exportAs: 'cmacsCard',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    template: "<div class=\"ant-card-head\" *ngIf=\"(title || extra || tab ) && (cmacsType === 'none' || cmacsType === 'team' || cmacsType === 'project')\">\r\n  <div class=\"ant-card-head-wrapper\">\r\n    <div class=\"ant-card-head-title\" *ngIf=\"title\">\r\n      <ng-container *cmacsStringTemplateOutlet=\"title\">{{ title }}</ng-container>\r\n    </div>\r\n    <div class=\"ant-card-extra\" *ngIf=\"extra\">\r\n      <ng-container *cmacsStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\r\n    </div>\r\n  </div>\r\n  <ng-container *ngIf=\"tab\">\r\n    <ng-template [ngTemplateOutlet]=\"tab.template\"></ng-template>\r\n  </ng-container>\r\n</div>\r\n\r\n<div class=\"ant-card-cover\" *ngIf=\"cover || cmacsType === 'selection' || cmacsType === 'action'\">\r\n  <ng-template [ngTemplateOutlet]=\"cover\"></ng-template>\r\n  <ng-container *ngIf=\"cmacsType === 'selection'\">\r\n    <label cmacs-radio [(ngModel)]=\"selected\" (ngModelChange)=\"checkRadio()\" [disabled]=\"disabled\"></label>\r\n    <ng-template [ngTemplateOutlet]=\"body\"></ng-template>\r\n  </ng-container>\r\n</div>\r\n<div class=\"ant-card-body\" [ngStyle]=\"bodyStyle\">\r\n  <ng-container *ngIf=\"!loading\">\r\n\r\n    <ng-container *ngIf=\"cmacsType === 'todo'\">\r\n      <div *ngIf=\"todo.projectImage\" class=\"cmacs-todo-card-project-img\">\r\n        <img [src]=\"todo.projectImage\">\r\n      </div>\r\n      <div [style.backgroundColor]=\"todo.stateColor\" class=\"cmacs-todo-card-upper-line\"></div>\r\n      <div class=\"cmacs-todo-card-title\">\r\n        <span>{{todo.title}}</span>\r\n      </div>\r\n      <div *ngIf=\"todo.project\" class=\"cmacs-todo-card-project\">\r\n        <span>{{todo.project}}</span>\r\n      </div>\r\n      <div *ngIf=\"todo.date\" class=\"cmacs-todo-card-date\">\r\n        <span>{{todo.date}}</span>\r\n      </div>\r\n      <div class=\"cmacs-todo-card-action\">\r\n        <div *ngIf=\"todo.attachments\" class=\"cmacs-todo-card-attachments\">\r\n          <span>{{todo.attachments}}</span>\r\n          <a><i nz-icon [type]=\"'paper-clip'\"></i></a>\r\n        </div>\r\n\r\n        <div class=\"cmacs-todo-card-person\">\r\n          <a><i nz-icon [type]=\"'user'\"></i></a>\r\n        </div>\r\n\r\n        <div *ngIf=\"todo.comments\" class=\"cmacs-todo-card-comments\">\r\n          <span>{{todo.comments}}</span>\r\n          <a><i nz-icon [type]=\"'message'\"></i></a>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"cmacsType === 'big-file'\">\r\n      <div class=\"cmacs-card-big-file-meta\">\r\n        <div class=\"cmacs-card-big-file-icon-wrapper\">\r\n          <a><i nz-icon [type]=\"cmacsIcon\"></i></a>\r\n        </div>\r\n        <div class=\"cmacs-card-big-file-extension-wrapper\">\r\n          <span>{{file.extension}}</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"cmacs-card-big-file-description\">\r\n        <div class=\"cmacs-card-big-file-description-left-panel\">\r\n          <div class=\"cmacs-card-big-file-title\">\r\n            <span>{{file.title}}</span>\r\n          </div>\r\n          <div class=\"cmacs-card-big-file-date\">\r\n            <span>{{file.created_at}}</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"cmacs-card-big-file-description-right-panel\">\r\n          <div class=\"cmacs-card-big-file-extra\" *ngIf=\"extra\">\r\n            <ng-container *cmacsStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"cmacsType === 'video'\">\r\n      <div class=\"cmacs-card-video-player-wrapper\">\r\n        <cmacs-video-player [sources]=\"sources\" (playerReady)=\"onPlayerReady($event)\"></cmacs-video-player>\r\n      </div>\r\n      <div class=\"cmacs-card-video-description\">\r\n        <div class=\"cmacs-card-video-title\">\r\n          <span>{{title}}</span>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"cmacsType === 'file'\">\r\n      <div class=\"cmacs-card-files-icon-wrapper\">\r\n        <a><i nz-icon [type]=\"cmacsIcon\"></i></a>\r\n      </div>\r\n      <div class=\"cmacs-card-label\">\r\n        <span>{{title}}</span>\r\n      </div>\r\n      <div class=\"cmacs-card-file-extra\" *ngIf=\"extra\">\r\n        <ng-container *cmacsStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"cmacsType === 'measure'\">\r\n      <div class=\"cmacs-card-measure-icon-wrapper\">\r\n        <a><i nz-icon [type]=\"cmacsIcon\"></i></a>\r\n      </div>\r\n      <div class=\"cmacs-card-label\">\r\n        <span>{{title}}</span>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"cmacsType === 'none' || cmacsType === 'selection' || cmacsType === 'action'\">\r\n      <ng-content></ng-content>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"cmacsType === 'team'\">\r\n      <div style=\"margin-bottom: 20px; display: inline-flex\">\r\n        <div class=\"team-person-card\"\r\n             *ngFor=\"let person of team; index as i\"\r\n             [style.backgroundColor]=\"!person.image ? '#ffa800' : '#c7f5ff'\"\r\n             [style.display]=\"(i >= 4 && team.length > 5) ? 'none' : 'inline-flex' \"\r\n        >\r\n          <img width=\"30px\" height=\"30px\" *ngIf=\"person.image\" [src]=\"person.image\">\r\n          <span *ngIf=\"!person.image\">{{getInitials(person.name)}}</span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"plus-team-card\" *ngIf=\"team.length > 5\">+{{team.length - 4}}</div>\r\n      <ng-content select=\"[cmacs-action-panel]\"></ng-content>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"cmacsType === 'project'\">\r\n      <img width=\"221px\" height=\"107px\" [src]=\"project.projectImage\">\r\n      <cmacs-tag class=\"project-status\" [cmacsGridType]=\"project.statusTag\">{{project.status}}</cmacs-tag>\r\n      <div class=\"project-dates-wrapper\">\r\n        <span class=\"project-dates-title\">Project Dates</span>\r\n        <span class=\"project-dates project-dates-date\">{{project.startDate}}</span>\r\n        <a><i nz-icon [type]=\"'arrow-right'\" class=\"project-dates\" style=\"font-size: 16px;\"></i></a>\r\n        <span class=\"project-dates project-dates-date\">{{project.endDate}}</span>\r\n      </div>\r\n\r\n      <div class=\"project-card-progress-bar\">\r\n        <div class=\"project-card-progress-bar-inner\" [style.width]=\"project.completion\"></div>\r\n      </div>\r\n      <div class=\"project-manager-details\">\r\n        <img class=\"manager-avatar\" width=\"30px\" height=\"30px\" [src]=\"project.teamLead.avatar\">\r\n        <div class=\"project-manager-metadata\">\r\n          <span class=\"manager-name\">{{project.teamLead.name}}</span><br>\r\n          <span class=\"manager-charge\">{{project.teamLead.charge}}</span>\r\n        </div>\r\n        <!-- <a><i nz-icon [type]=\"'mail'\"></i></a> -->\r\n      </div>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"cmacsType === 'folder'\">\r\n      <div class=\"card-files-folders-icon-wrapper\">\r\n        <a><i nz-icon [type]=\"folderIcon\"></i></a>\r\n      </div>\r\n      <div #titleContainer (click)=\"toggleEdit(titleContainer)\" class=\"card-files-folders-label\">\r\n        <span #name (keydown.enter)=\"handleEnter($event, titleContainer, name)\" (keyup)=\"handleEdit($event, name)\"\r\n              [attr.contentEditable]=\"isEditable\"\r\n        >{{title}}</span>\r\n      </div>\r\n      <div class=\"card-files-folder-extra\" *ngIf=\"extra\">\r\n        <ng-container *cmacsStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\r\n      </div>\r\n    </ng-container>\r\n\r\n  </ng-container>\r\n  <cmacs-card-loading *ngIf=\"loading\"></cmacs-card-loading>\r\n</div>\r\n<ul class=\"ant-card-actions\" *ngIf=\"actions.length\">\r\n  <li *ngFor=\"let action of actions\" [style.width.%]=\"100 / actions.length\">\r\n    <span><ng-template [ngTemplateOutlet]=\"action\"></ng-template></span>\r\n  </li>\r\n</ul>\r\n\r\n",
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
                    styles: ["\n      cmacs-card {\n        display: block;\n      }\n    ", ".ant-card,.ant-card-head{font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79}.ant-card-head{min-height:40px;padding:0 14px}.ant-card-extra{padding:8px 0}.ant-card-head-title{padding:12px 0}.ant-card-grid{font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79}.cmacs-card-files-wrapper{width:223px;height:36px;border:none}.cmacs-card-measure-wrapper{width:223px;height:36px;border:1px solid #dee0e5}.cmacs-card-measure-wrapper .cmacs-card-label{padding:9px 0;font-size:13px}.cmacs-card-measure-wrapper-selected,.cmacs-card-measure-wrapper:hover{border-color:#2a7cff;cursor:pointer;box-shadow:0 6px 10px 0 rgba(0,0,0,.15)}.cmacs-card-measure-wrapper-selected .cmacs-card-measure-icon-wrapper,.cmacs-card-measure-wrapper:hover .cmacs-card-measure-icon-wrapper{border-right-color:#2a7cff}.cmacs-card-measure-wrapper-selected .cmacs-card-measure-icon-wrapper i,.cmacs-card-measure-wrapper:hover .cmacs-card-measure-icon-wrapper i{color:#2a7cff}.cmacs-card-files-wrapper:hover{background-color:#f6f7fb;cursor:pointer}.cmacs-card-files-wrapper .ant-card-body,.cmacs-card-measure-wrapper .ant-card-body{padding:0;width:100%}.cmacs-card-files-wrapper div,.cmacs-card-measure-wrapper div{display:inline-block}.cmacs-card-files-icon-wrapper{width:36px;height:36px;border-radius:3px;box-shadow:0 6px 10px 0 rgba(0,0,0,.15);background-color:#fff;margin-right:16px;text-align:center;position:relative;top:-8px}.cmacs-card-measure-icon-wrapper{background-color:#fff;margin-right:16px;text-align:center;padding:7px 6px 6px;border-right:1px solid #dee0e5}.cmacs-card-measure-icon-wrapper i{font-size:18px;top:23%;position:relative;color:#dee0e5}.cmacs-card-files-icon-wrapper i{color:#fb3147!important;font-size:18px;top:23%;position:relative}.cmacs-card-file-extra{font-size:22px;float:right;margin-top:2px;margin-right:5px}.cmacs-card-file-extra i{color:#bec4cd!important}.cmacs-card-label{padding:10px 0}.cmacs-selection-card{width:137px}.cmacs-selection-card .ant-card-cover{padding:15px}.cmacs-selection-card .ant-card-body{padding:10px 10px 30px;text-align:center;font-size:12px}.cmacs-selection-card .ant-card-meta-description{color:#656c79}.cmacs-selection-card.ant-card-hoverable:hover{border:1px solid #bec4cd}.cmacs-selection-card.ant-card-hoverable:hover .ant-radio-inner{border-color:#bec4cd}.cmacs-card-selected,.cmacs-card-selected:hover,.cmacs-card-selected:hover .ant-radio-inner{border-color:#2a7cff!important}.cmacs-card-disabled:hover .ant-radio-inner{border-color:#d9d9d9!important}.cmacs-card-selected .ant-card-meta-description{color:#2a7cff!important}.cmacs-card-disabled,.cmacs-card-disabled:hover{border-color:#dee0e5!important;cursor:default}.cmacs-card-disabled .ant-card-meta-description{color:#97a0ae!important}.cmacs-action-card{border:none;width:165px}.cmacs-action-card:hover{cursor:pointer}.cmacs-action-card-disabled:hover{cursor:default}.cmacs-action-card:hover .ant-card-meta-title{color:#2164c9}.cmacs-action-card .ant-card-meta-description{text-align:center;color:#acb3bf}.cmacs-action-card .ant-card-body{padding:13px}.cmacs-action-card .ant-card-meta-title{color:#2a7cff;white-space:normal;text-align:center;font-size:12px;padding-top:18px}.cmacs-action-card-disabled .ant-card-meta-title,.cmacs-action-card-disabled:hover .ant-card-meta-title{color:#97a0ae}.cmacs-information-card.ant-card-bordered{border-color:#dee0e5}.cmacs-information-card .ant-card-head{min-height:30px}.cmacs-information-card .ant-card-head-title{padding:10px 0}.cmacs-information-card:hover .cmacs-btn-action{color:#2a7cff!important}.cmacs-information-card .ant-card-body{padding:25px 10px}.cmacs-information-card .team-person-card{width:30px;height:30px;border-radius:3px;display:-webkit-inline-box;display:inline-flex;margin-right:12px}.cmacs-information-card .team-person-card:last-child{margin-right:0}.cmacs-information-card .plus-team-card{width:30px;height:30px;border-radius:3px;display:-webkit-inline-box;display:inline-flex;background-color:#dae8ff;color:#2a7cff;position:relative;top:-10px;font-size:13px;padding:5px 7px}.cmacs-information-card .team-person-card span{padding:6px 8px;color:#fff}.cmacs-team-card.ant-card-bordered{border-color:#dee0e5}.cmacs-team-card-selected.ant-card-bordered{border-color:#2a7cff}.cmacs-team-card .ant-card-head{min-height:30px}.cmacs-team-card .ant-card-head-title{padding:10px 0}.cmacs-team-card .ant-card-body{padding:0}.project-card-progress-bar-inner{height:5px;background-color:#2a7cff;border-radius:5px}.project-card-progress-bar{height:5px;background-color:#dee0e5;border-radius:5px;width:83%;margin:0 auto}.project-dates{display:inline-block}.project-status{position:relative;top:-36px;left:18px}.project-dates-wrapper{padding:0 20px;margin-top:-10px;margin-bottom:10px}.project-dates-title{color:#97a0ae;display:block;margin-bottom:5px}.project-dates-date{color:#656c79}.project-dates-wrapper i{margin-left:10px;margin-right:10px}.project-manager-metadata{display:inline-block;top:10px;margin-left:11px;margin-right:38px}.manager-charge{color:#acb3bf}.manager-name{color:#97a0ae;font-weight:500}.project-manager-details{margin-left:20px;margin-bottom:20px;margin-top:20px}.manager-avatar{display:inline-block;position:relative;top:-9px}.project-manager-details i{font-size:20px;color:#bec4cd;top:-11px;position:relative}.cmacs-card-files-folders-wrapper{height:48px;background-color:#fff;border:1px solid #dee0e5;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer!important}.card-files-uploading-wrapper{width:170px;height:48px;background-color:#f3f3f4;border:1px solid #dee0e5}.cmacs-card-files-folders-wrapper:hover{background-color:#f6f7fb;cursor:pointer}.file-card-selected,.file-card-selected:hover{background-color:#f2f7ff}.cmacs-card-files-folders-wrapper:hover .card-files-folders-label{color:#2a7cff}.cmacs-card-files-folders-wrapper:hover .card-files-folder-extra a{opacity:1}.card-files-folder-extra{display:inline-block;font-size:20px}.card-files-folder-extra a{opacity:0}.card-files-folders-label{width:100px;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.card-files-uploading-wrapper .ant-card-body,.cmacs-card-files-folders-wrapper .ant-card-body{padding:11px 5px 11px 11px}.card-files-folders-icon-wrapper{font-size:20px;margin-right:10px;display:inline-block}.card-files-uploading-wrapper i,.cmacs-card-files-folders-wrapper i{color:#656c79!important}.card-files-progress-bar-inner{height:5px;background-color:#2a7cff;border-radius:5px}.card-files-progress-bar{height:5px;background-color:#dee0e5;border-radius:5px;margin-top:7px}.cmacs-big-file-card{width:243px;border:none;overflow:hidden}.cmacs-big-file-card .ant-card-body{padding:0}.cmacs-card-big-file-meta{border:1px solid #dee0e5;-webkit-transition:.3s;transition:.3s}.cmacs-big-file-card::before{content:' ';width:40px;height:21px;background-color:#fff;position:absolute;left:calc(100% - 26px);-webkit-transform:rotate(45deg);transform:rotate(45deg);top:-4px;border-bottom:1px solid #dee0e5;-webkit-transition:.3s;transition:.3s}.cmacs-card-big-file-icon-wrapper{font-size:22px;margin:0 auto;width:22px;padding-top:60px;padding-bottom:40px}.cmacs-card-big-file-extension-wrapper{text-align:right;padding:0 10px 10px 0;color:#acb3bf}.cmacs-card-big-file-description{height:61px;margin-top:10px;-webkit-transition:.3s;transition:.3s}.cmacs-card-big-file-title{padding:10px 10px 5px;font-size:12px;color:#3b3f46;font-weight:500;-webkit-transition:.3s;transition:.3s}.cmacs-card-big-file-date{padding:0 10px 10px;font-size:12px;color:#acb3bf;font-weight:500}.cmacs-card-big-file-extra{font-size:21px;padding-top:3px;-webkit-transition:.3s;transition:.3s}.cmacs-card-big-file-extra a{color:#656c79;opacity:0;-webkit-transition:.3s;transition:.3s}.cmacs-card-big-file-description-left-panel{width:90%;float:left}.cmacs-card-big-file-description-right-panel{width:10%;float:right}.cmacs-big-file-card:hover{cursor:pointer}.cmacs-big-file-card:hover .cmacs-card-big-file-description{background-color:#f6f7fb}.cmacs-big-file-card:hover .cmacs-card-big-file-title{color:#2a7cff}.cmacs-big-file-card:hover .cmacs-card-big-file-extra a{opacity:1}.cmacs-big-file-card-selected .cmacs-card-big-file-description,.cmacs-big-file-card-selected:hover .cmacs-card-big-file-description{background-color:#f2f7ff}.cmacs-big-file-card-selected .cmacs-card-big-file-meta,.cmacs-big-file-card-selected.cmacs-big-file-card::before{border-color:#2a7cff}.cmacs-card-video-description{color:#3b3f46;font-weight:600;font-size:12px;margin-top:17px}.cmacs-card-video-player-wrapper{width:337px;height:226px;border:1px solid #dee0e5}.cmacs-video-player-card{border:none;width:337px}.cmacs-video-player-card .ant-card-body{padding:0}.cmacs-todo-card-upper-line{width:95%;margin:5px;height:2px;border-radius:100px}.cmacs-todo-card{width:243px}.cmacs-todo-card .ant-card-body{padding:0}.cmacs-todo-card-title{color:#3b3f46;font-size:12px;margin:21px 14px 0}.cmacs-todo-card-project{color:#97a0ae;margin:10px 14px 0;font-size:12px}.cmacs-todo-card-date{color:#656c79;margin:14px 14px 0;background-color:#f6f7fb;padding:2px 5px;border-radius:3px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.cmacs-todo-card-action{padding:15px 14px 30px 15px;font-size:14px}.cmacs-todo-card-attachments,.cmacs-todo-card-person{float:left;margin-right:10px}.cmacs-todo-card-attachments span,.cmacs-todo-card-comments span{margin-right:3px;color:#2a7cff;font-size:12px}.cmacs-todo-card-comments{float:right}.cmacs-todo-card-attachments a,.cmacs-todo-card-comments a,.cmacs-todo-card-person a{color:#656c79}.cmacs-todo-card-project-img{width:241px;height:100px;overflow:hidden}.cmacs-todo-card-project-img img{width:241px}.cmacs-todo-card-selected{border-color:#2a7cff!important}"]
                }] }
    ];
    /** @nocollapse */
    CmacsCardComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: Renderer2 },
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
        title: [{ type: Input }],
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
    CmacsCardComponent.prototype.title;
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLWNhcmQvY21hY3MtY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ29CLGlCQUFpQixFQUMxQyxTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFBRSxZQUFZLEVBQWMsWUFBWSxFQUNsRCxLQUFLLEVBQXFCLE1BQU0sRUFDaEMsU0FBUyxFQUNULFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDRCQUE0QixDQUFDOzs7O0FBTWpFLDZCQUlDOzs7SUFIQyx3QkFBZTs7SUFDZiw0QkFBbUI7O0lBQ25CLDZCQUFvQjs7QUFHdEI7SUEwRUUsNEJBQW9CLEdBQXNCLEVBQUUsUUFBbUIsRUFBRSxVQUFzQjtRQUFuRSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWpDMUMsZUFBVSxHQUFHLFFBQVEsQ0FBQztRQUN0QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ00sYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBRWpDLGdCQUFXLEdBQXdCLElBQUksWUFBWSxFQUFTLENBQUM7UUFJOUQsWUFBTyxHQUE2QixFQUFFLENBQUM7UUFDdkMsU0FBSSxHQUFRLEVBQUUsQ0FBQztRQUNmLFNBQUksR0FBWSxJQUFJLENBQUM7UUFD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SUFDeEIsa0NBQThCOztJQUM5QixxQ0FBMkI7O0lBQzNCLGtDQUFtQjs7SUFDbkIsa0NBQXNCOztJQUN0Qix1Q0FBMkM7O0lBQzNDLHVDQUFnQzs7SUFDaEMsbUNBQTJDOztJQUMzQyx5Q0FBeUU7O0lBQ3pFLG1DQUEyQzs7SUFDM0MsaUNBQWdFOztJQUNoRSwyQ0FBa0Q7O0lBQ2xELGtDQUF5Qzs7SUFDekMsbUNBQTBDOztJQUMxQyxzQ0FBMEI7O0lBQzFCLG1DQUFxQjs7SUFDckIsNENBQThFOzs7OztJQUVsRSxpQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQge0NtYWNzQ2FyZFRhYkNvbXBvbmVudH0gZnJvbSAnLi9jbWFjcy1jYXJkLXRhYi5jb21wb25lbnQnO1xyXG5pbXBvcnQge1ZnQVBJfSBmcm9tIFwidmlkZW9ndWxhcjIvY29tcGlsZWQvc3JjL2NvcmUvc2VydmljZXMvdmctYXBpXCI7XHJcbmltcG9ydCB7U291cmNlfSBmcm9tIFwiLi4vY21hY3MtdmlkZW8tcGxheWVyL2NtYWNzLXZpZGVvLXBsYXllci5jb21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCB0eXBlIENtYWNzQ2FyZFR5cGUgPSAnZmlsZScgfCAnc2VsZWN0aW9uJyB8ICdhY3Rpb24nIHwgJ3RlYW0nIHwgJ3Byb2plY3QnIHwgJ2ZvbGRlcicgfCAnbWVhc3VyZScgfCAnYmlnLWZpbGUnIHwgJ25vbmUnIHwgJ3ZpZGVvJyB8ICd0b2RvJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmlnRmlsZSB7XHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgZXh0ZW5zaW9uPzogc3RyaW5nO1xyXG4gIGNyZWF0ZWRfYXQ/OiBzdHJpbmc7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtY2FyZCcsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0NhcmQnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWNhcmQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBjbWFjcy1jYXJkIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF0sXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtY2FyZC1sb2FkaW5nXSc6ICdsb2FkaW5nJyxcclxuICAgICdbY2xhc3MuYW50LWNhcmQtYm9yZGVyZWRdJzogJ2JvcmRlcmVkJyxcclxuICAgICdbY2xhc3MuYW50LWNhcmQtaG92ZXJhYmxlXSc6IFwiaG92ZXJhYmxlIHx8IGNtYWNzVHlwZSA9PT0gJ3NlbGVjdGlvbidcIixcclxuICAgICdbY2xhc3MuYW50LWNhcmQtdHlwZS1pbm5lcl0nOiBgdHlwZSA9PT0gJ2lubmVyJ2AsXHJcbiAgICAnW2NsYXNzLmFudC1jYXJkLWNvbnRhaW4tdGFic10nOiAnISF0YWInLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1jYXJkLWZpbGVzLXdyYXBwZXJdJzogXCJjbWFjc1R5cGUgPT09ICdmaWxlJ1wiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1jYXJkLW1lYXN1cmUtd3JhcHBlcl0nOiBcImNtYWNzVHlwZSA9PT0gJ21lYXN1cmUnXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLWNhcmQtbWVhc3VyZS13cmFwcGVyLXNlbGVjdGVkXSc6IFwiY21hY3NUeXBlID09PSAnbWVhc3VyZScgJiYgc2VsZWN0ZWRcIixcclxuICAgICdbY2xhc3MuY21hY3Mtc2VsZWN0aW9uLWNhcmRdJzogXCJjbWFjc1R5cGUgPT09ICdzZWxlY3Rpb24nXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLWNhcmQtc2VsZWN0ZWRdJzogXCJjbWFjc1R5cGUgPT09ICdzZWxlY3Rpb24nICYmIHNlbGVjdGVkXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLWNhcmQtZGlzYWJsZWRdJzogXCJjbWFjc1R5cGUgPT09ICdzZWxlY3Rpb24nICYmIGRpc2FibGVkXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLWFjdGlvbi1jYXJkXSc6IFwiY21hY3NUeXBlID09PSAnYWN0aW9uJ1wiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1iaWctZmlsZS1jYXJkXSc6IFwiY21hY3NUeXBlID09PSAnYmlnLWZpbGUnXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLWJpZy1maWxlLWNhcmQtc2VsZWN0ZWRdJzogXCJjbWFjc1R5cGUgPT09ICdiaWctZmlsZScgJiYgc2VsZWN0ZWRcIixcclxuICAgICdbY2xhc3MuY21hY3MtYWN0aW9uLWNhcmQtZGlzYWJsZWRdJzogXCJjbWFjc1R5cGUgPT09ICdhY3Rpb24nICYmIGRpc2FibGVkXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLWluZm9ybWF0aW9uLWNhcmRdJzogXCJjbWFjc1R5cGUgPT09ICd0ZWFtJ1wiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy10ZWFtLWNhcmRdJzogXCJjbWFjc1R5cGUgPT09ICdwcm9qZWN0J1wiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy12aWRlby1wbGF5ZXItY2FyZF0nOiBcImNtYWNzVHlwZSA9PT0gJ3ZpZGVvJ1wiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy10b2RvLWNhcmRdJzogXCJjbWFjc1R5cGUgPT09ICd0b2RvJ1wiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy10b2RvLWNhcmQtc2VsZWN0ZWRdJzogXCJjbWFjc1R5cGUgPT09ICd0b2RvJyAmJiBzZWxlY3RlZFwiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy10ZWFtLWNhcmQtc2VsZWN0ZWRdJzogXCJjbWFjc1R5cGUgPT09ICdwcm9qZWN0JyAmJiBzZWxlY3RlZFwiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1jYXJkLWZpbGVzLWZvbGRlcnMtd3JhcHBlcl0nOiBcImNtYWNzVHlwZSA9PT0gJ2ZvbGRlcidcIixcclxuICAgICdbY2xhc3MuZmlsZS1jYXJkLXNlbGVjdGVkXSc6IFwiY21hY3NUeXBlID09PSAnZm9sZGVyJyAmJiBzZWxlY3RlZFwiXHJcbiAgfSxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1jYXJkLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzQ2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICBmb2xkZXJJY29uID0gJ2ZvbGRlcic7XHJcbiAgaXNFZGl0YWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBib3JkZXJlZCA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG9wZW5lZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBlZGl0YWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBpc1JhZGlvID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxvYWRpbmcgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaG92ZXJhYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc291cmNlczogU291cmNlW107XHJcbiAgQE91dHB1dCgpIHBsYXllclJlYWR5OiBFdmVudEVtaXR0ZXI8VmdBUEk+ID0gbmV3IEV2ZW50RW1pdHRlcjxWZ0FQST4oKTtcclxuICBASW5wdXQoKSBib2R5U3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbiAgQElucHV0KCkgY292ZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIGJvZHk6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIGFjdGlvbnM6IEFycmF5PFRlbXBsYXRlUmVmPHZvaWQ+PiA9IFtdO1xyXG4gIEBJbnB1dCgpIHRlYW06IGFueSA9IFtdO1xyXG4gIEBJbnB1dCgpIGZpbGU6IEJpZ0ZpbGUgPSBudWxsO1xyXG4gIEBJbnB1dCgpIHByb2plY3Q6IGFueSA9IFtdO1xyXG4gIEBJbnB1dCgpIHRvZG86IGFueTtcclxuICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY21hY3NUeXBlOiBDbWFjc0NhcmRUeXBlID0gJ25vbmUnO1xyXG4gIEBJbnB1dCgpIGNtYWNzSWNvbjogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBPdXRwdXQoKSB0aXRsZUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICBASW5wdXQoKSBleHRyYTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQENvbnRlbnRDaGlsZChDbWFjc0NhcmRUYWJDb21wb25lbnQpIHRhYjogQ21hY3NDYXJkVGFiQ29tcG9uZW50O1xyXG4gIEBPdXRwdXQoKSBvbmRsY2xpY2tDYXJkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBASW5wdXQoKSBzZWxlY3RlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHZhbHVlIDogYW55O1xyXG4gIEBPdXRwdXQoKSBzZWxlY3RlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1jYXJkJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmNtYWNzVHlwZSA9PT0gXCJmb2xkZXJcIikge1xyXG4gICAgICB0aGlzLmZvbGRlckljb24gPSB0aGlzLm9wZW5lZCA/ICdmb2xkZXItb3BlbicgOiAnZm9sZGVyJztcclxuICAgIH1cclxuICAgIHRoaXMuaXNFZGl0YWJsZSA9IHRoaXMuZWRpdGFibGU7XHJcbiAgfVxyXG5cclxuICBvblBsYXllclJlYWR5KGFwaTpWZ0FQSSl7XHJcbiAgICB0aGlzLnBsYXllclJlYWR5LmVtaXQoYXBpKTtcclxuICB9XHJcblxyXG5cclxuICBjaGVja1JhZGlvKCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWQpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKSBvbkNsaWNrKGV2ZW50OiBFdmVudCkge1xyXG4gICAgdGhpcy5zZWxlY3QoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZGJsY2xpY2snLCBbJyRldmVudCddKSBvbkRibENsaWNrKGV2ZW50OiBFdmVudCkge1xyXG4gICAgaWYgKHRoaXMuY21hY3NUeXBlID09PSAnZm9sZGVyJykge1xyXG4gICAgICB0aGlzLmZvbGRlckljb24gPSB0aGlzLmZvbGRlckljb24gPT09ICdmb2xkZXInID8gJ2ZvbGRlci1vcGVuJyA6ICdmb2xkZXInO1xyXG4gICAgICB0aGlzLm9wZW5lZCA9ICF0aGlzLm9wZW5lZDtcclxuICAgICAgaWYgKHRoaXMub3BlbmVkKSB7XHJcbiAgICAgICAgdGhpcy5vcGVuLmVtaXQoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNsb3NlLmVtaXQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuY21hY3NUeXBlID09PSAncHJvamVjdCcpe1xyXG4gICAgICB0aGlzLm9uZGxjbGlja0NhcmQuZW1pdCh0aGlzLnByb2plY3QpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbWFya0ZvckNoZWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3QoZXZlbnQ6IEV2ZW50KXtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICBpZiAoIXRoaXMuaXNSYWRpbykge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSAhdGhpcy5zZWxlY3RlZDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZCA/IHRoaXMuc2VsZWN0ZWQgOiAhdGhpcy5zZWxlY3RlZDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVFbnRlcihldmVudDogS2V5Ym9hcmRFdmVudCwgdGl0bGVDb250YWluZXIsIHRpdGxlU3Bhbikge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgdGl0bGVDb250YWluZXIuc3R5bGUudGV4dE92ZXJmbG93ID0gJ2VsbGlwc2lzJztcclxuICAgICAgY29uc3QgdGV4dCA9IHRpdGxlU3Bhbi5pbm5lclRleHQucmVwbGFjZSgvKFxcclxcbnxcXG58XFxyKS9nbSxcIlwiKTtcclxuICAgICAgdGl0bGVTcGFuLmlubmVyVGV4dCA9IHRleHQ7XHJcbiAgICAgIHRoaXMuaXNFZGl0YWJsZSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnRpdGxlQ2hhbmdlLmVtaXQodGV4dCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVFZGl0KGV2ZW50OiBLZXlib2FyZEV2ZW50LCB0aXRsZVNwYW4pIHtcclxuICAgIGNvbnN0IHRleHQgPSB0aXRsZVNwYW4uaW5uZXJUZXh0LnJlcGxhY2UoLyhcXHJcXG58XFxufFxccikvZ20sXCJcIik7XHJcbiAgICB0aGlzLnRpdGxlQ2hhbmdlLmVtaXQodGV4dCk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVFZGl0KHRpdGxlQ29udGFpbmVyKXtcclxuICAgIHRoaXMuaXNFZGl0YWJsZSA9IHRoaXMuZWRpdGFibGU7XHJcbiAgICBpZiAodGhpcy5pc0VkaXRhYmxlKXtcclxuICAgICAgdGl0bGVDb250YWluZXIuc3R5bGUudGV4dE92ZXJmbG93ID0gJ2luaXRpYWwnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0SW5pdGlhbHMobmFtZTogYW55KSB7XHJcbiAgICBsZXQgaW5pdGlhbHMgPSBuYW1lLm1hdGNoKC9cXGJcXHcvZykgfHwgW107XHJcbiAgICBpbml0aWFscyA9ICgoaW5pdGlhbHMuc2hpZnQoKSB8fCAnJykgKyAoaW5pdGlhbHMucG9wKCkgfHwgJycpKS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgcmV0dXJuIGluaXRpYWxzO1xyXG4gIH1cclxufVxyXG4iXX0=