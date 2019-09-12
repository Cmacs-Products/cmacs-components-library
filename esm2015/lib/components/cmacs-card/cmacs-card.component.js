/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2, TemplateRef, ViewEncapsulation } from '@angular/core';
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
export class CmacsCardComponent {
    /**
     * @param {?} cdr
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(cdr, renderer, elementRef) {
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
    ngOnInit() {
        if (this.cmacsType === "folder") {
            this.folderIcon = this.opened ? 'folder-open' : 'folder';
        }
        this.isEditable = this.editable;
    }
    /**
     * @param {?} api
     * @return {?}
     */
    onPlayerReady(api) {
        this.playerReady.emit(api);
    }
    /**
     * @return {?}
     */
    checkRadio() {
        this.selectedChange.emit(this.selected);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        this.select(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDblClick(event) {
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
    }
    /**
     * @return {?}
     */
    markForCheck() {
        this.cdr.markForCheck();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    select(event) {
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
    }
    /**
     * @param {?} event
     * @param {?} titleContainer
     * @param {?} titleSpan
     * @return {?}
     */
    handleEnter(event, titleContainer, titleSpan) {
        event.preventDefault();
        event.stopImmediatePropagation();
        titleContainer.style.textOverflow = 'ellipsis';
        /** @type {?} */
        const text = titleSpan.innerText.replace(/(\r\n|\n|\r)/gm, "");
        titleSpan.innerText = text;
        this.isEditable = false;
        this.titleChange.emit(text);
    }
    /**
     * @param {?} titleContainer
     * @return {?}
     */
    toggleEdit(titleContainer) {
        this.isEditable = this.editable;
        if (this.isEditable) {
            titleContainer.style.textOverflow = 'initial';
        }
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getInitials(name) {
        /** @type {?} */
        let initials = name.match(/\b\w/g) || [];
        initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
        return initials;
    }
}
CmacsCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmacs-card',
                exportAs: 'cmacsCard',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: "<div class=\"ant-card-head\" *ngIf=\"(title || extra || tab ) && (cmacsType === 'none' || cmacsType === 'team' || cmacsType === 'project')\">\r\n  <div class=\"ant-card-head-wrapper\">\r\n    <div class=\"ant-card-head-title\" *ngIf=\"title\">\r\n      <ng-container *cmacsStringTemplateOutlet=\"title\">{{ title }}</ng-container>\r\n    </div>\r\n    <div class=\"ant-card-extra\" *ngIf=\"extra\">\r\n      <ng-container *cmacsStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\r\n    </div>\r\n  </div>\r\n  <ng-container *ngIf=\"tab\">\r\n    <ng-template [ngTemplateOutlet]=\"tab.template\"></ng-template>\r\n  </ng-container>\r\n</div>\r\n\r\n<div class=\"ant-card-cover\" *ngIf=\"cover || cmacsType === 'selection' || cmacsType === 'action'\">\r\n  <ng-template [ngTemplateOutlet]=\"cover\"></ng-template>\r\n  <ng-container *ngIf=\"cmacsType === 'selection'\">\r\n    <label cmacs-radio [(ngModel)]=\"selected\" (ngModelChange)=\"checkRadio()\" [disabled]=\"disabled\"></label>\r\n    <ng-template [ngTemplateOutlet]=\"body\"></ng-template>\r\n  </ng-container>\r\n</div>\r\n<div class=\"ant-card-body\" [ngStyle]=\"bodyStyle\">\r\n  <ng-container *ngIf=\"!loading\">\r\n\r\n    <ng-container *ngIf=\"cmacsType === 'todo'\">\r\n      <div *ngIf=\"todo.projectImage\" class=\"cmacs-todo-card-project-img\">\r\n        <img [src]=\"todo.projectImage\">\r\n      </div>\r\n      <div [style.backgroundColor]=\"todo.stateColor\" class=\"cmacs-todo-card-upper-line\"></div>\r\n      <div class=\"cmacs-todo-card-title\">\r\n        <span>{{todo.title}}</span>\r\n      </div>\r\n      <div *ngIf=\"todo.project\" class=\"cmacs-todo-card-project\">\r\n        <span>{{todo.project}}</span>\r\n      </div>\r\n      <div *ngIf=\"todo.date\" class=\"cmacs-todo-card-date\">\r\n        <span>{{todo.date}}</span>\r\n      </div>\r\n      <div class=\"cmacs-todo-card-action\">\r\n        <div *ngIf=\"todo.attachments\" class=\"cmacs-todo-card-attachments\">\r\n          <span>{{todo.attachments}}</span>\r\n          <a><i nz-icon [type]=\"'paper-clip'\"></i></a>\r\n        </div>\r\n\r\n        <div class=\"cmacs-todo-card-person\">\r\n          <a><i nz-icon [type]=\"'user'\"></i></a>\r\n        </div>\r\n\r\n        <div *ngIf=\"todo.comments\" class=\"cmacs-todo-card-comments\">\r\n          <span>{{todo.comments}}</span>\r\n          <a><i nz-icon [type]=\"'message'\"></i></a>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"cmacsType === 'big-file'\">\r\n      <div class=\"cmacs-card-big-file-meta\">\r\n        <div class=\"cmacs-card-big-file-icon-wrapper\">\r\n          <a><i nz-icon [type]=\"cmacsIcon\"></i></a>\r\n        </div>\r\n        <div class=\"cmacs-card-big-file-extension-wrapper\">\r\n          <span>{{file.extension}}</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"cmacs-card-big-file-description\">\r\n        <div class=\"cmacs-card-big-file-description-left-panel\">\r\n          <div class=\"cmacs-card-big-file-title\">\r\n            <span>{{file.title}}</span>\r\n          </div>\r\n          <div class=\"cmacs-card-big-file-date\">\r\n            <span>{{file.created_at}}</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"cmacs-card-big-file-description-right-panel\">\r\n          <div class=\"cmacs-card-big-file-extra\" *ngIf=\"extra\">\r\n            <ng-container *cmacsStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"cmacsType === 'video'\">\r\n      <div class=\"cmacs-card-video-player-wrapper\">\r\n        <cmacs-video-player [sources]=\"sources\" (playerReady)=\"onPlayerReady($event)\"></cmacs-video-player>\r\n      </div>\r\n      <div class=\"cmacs-card-video-description\">\r\n        <div class=\"cmacs-card-video-title\">\r\n          <span>{{title}}</span>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"cmacsType === 'file'\">\r\n      <div class=\"cmacs-card-files-icon-wrapper\">\r\n        <a><i nz-icon [type]=\"cmacsIcon\"></i></a>\r\n      </div>\r\n      <div class=\"cmacs-card-label\">\r\n        <span>{{title}}</span>\r\n      </div>\r\n      <div class=\"cmacs-card-file-extra\" *ngIf=\"extra\">\r\n        <ng-container *cmacsStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"cmacsType === 'measure'\">\r\n      <div class=\"cmacs-card-measure-icon-wrapper\">\r\n        <a><i nz-icon [type]=\"cmacsIcon\"></i></a>\r\n      </div>\r\n      <div class=\"cmacs-card-label\">\r\n        <span>{{title}}</span>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"cmacsType === 'none' || cmacsType === 'selection' || cmacsType === 'action'\">\r\n      <ng-content></ng-content>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"cmacsType === 'team'\">\r\n      <div style=\"margin-bottom: 20px; display: inline-flex\">\r\n        <div class=\"team-person-card\"\r\n             *ngFor=\"let person of team; index as i\"\r\n             [style.backgroundColor]=\"!person.image ? '#ffa800' : '#c7f5ff'\"\r\n             [style.display]=\"(i >= 4 && team.length > 5) ? 'none' : 'inline-flex' \"\r\n        >\r\n          <img width=\"30px\" height=\"30px\" *ngIf=\"person.image\" [src]=\"person.image\">\r\n          <span *ngIf=\"!person.image\">{{getInitials(person.name)}}</span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"plus-team-card\" *ngIf=\"team.length > 5\">+{{team.length - 4}}</div>\r\n      <ng-content select=\"[cmacs-action-panel]\"></ng-content>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"cmacsType === 'project'\">\r\n      <img width=\"221px\" height=\"107px\" [src]=\"project.projectImage\">\r\n      <cmacs-tag class=\"project-status\" [cmacsGridType]=\"project.statusTag\">{{project.status}}</cmacs-tag>\r\n      <div class=\"project-dates-wrapper\">\r\n        <span class=\"project-dates-title\">Project Dates</span>\r\n        <span class=\"project-dates project-dates-date\">{{project.startDate}}</span>\r\n        <a><i nz-icon [type]=\"'arrow-right'\" class=\"project-dates\" style=\"font-size: 16px;\"></i></a>\r\n        <span class=\"project-dates project-dates-date\">{{project.endDate}}</span>\r\n      </div>\r\n\r\n      <div class=\"project-card-progress-bar\">\r\n        <div class=\"project-card-progress-bar-inner\" [style.width]=\"project.completion\"></div>\r\n      </div>\r\n      <div class=\"project-manager-details\">\r\n        <img class=\"manager-avatar\" width=\"30px\" height=\"30px\" [src]=\"project.teamLead.avatar\">\r\n        <div class=\"project-manager-metadata\">\r\n          <span class=\"manager-name\">{{project.teamLead.name}}</span><br>\r\n          <span class=\"manager-charge\">{{project.teamLead.charge}}</span>\r\n        </div>\r\n        <a><i nz-icon [type]=\"'mail'\"></i></a>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"cmacsType === 'folder'\">\r\n      <div class=\"card-files-folders-icon-wrapper\">\r\n        <a><i nz-icon [type]=\"folderIcon\"></i></a>\r\n      </div>\r\n      <div #titleContainer (click)=\"toggleEdit(titleContainer)\" class=\"card-files-folders-label\">\r\n        <span #name (keydown.enter)=\"handleEnter($event, titleContainer, name)\" [attr.contentEditable]=\"isEditable\"\r\n        >{{title}}</span>\r\n      </div>\r\n      <div class=\"card-files-folder-extra\" *ngIf=\"extra\">\r\n        <ng-container *cmacsStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\r\n      </div>\r\n    </ng-container>\r\n\r\n  </ng-container>\r\n  <cmacs-card-loading *ngIf=\"loading\"></cmacs-card-loading>\r\n</div>\r\n<ul class=\"ant-card-actions\" *ngIf=\"actions.length\">\r\n  <li *ngFor=\"let action of actions\" [style.width.%]=\"100 / actions.length\">\r\n    <span><ng-template [ngTemplateOutlet]=\"action\"></ng-template></span>\r\n  </li>\r\n</ul>\r\n\r\n",
                host: {
                    '[class.ant-card-loading]': 'loading',
                    '[class.ant-card-bordered]': 'bordered',
                    '[class.ant-card-hoverable]': "hoverable || cmacsType === 'selection'",
                    '[class.ant-card-type-inner]': `type === 'inner'`,
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
                styles: [`
      cmacs-card {
        display: block;
      }
    `, ".ant-card,.ant-card-head{font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79}.ant-card-head{min-height:40px;padding:0 14px}.ant-card-extra{padding:8px 0}.ant-card-head-title{padding:12px 0}.ant-card-grid{font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79}.cmacs-card-files-wrapper{width:223px;height:36px;border:none}.cmacs-card-measure-wrapper{width:223px;height:36px;border:1px solid #dee0e5}.cmacs-card-measure-wrapper .cmacs-card-label{padding:9px 0;font-size:13px}.cmacs-card-measure-wrapper-selected,.cmacs-card-measure-wrapper:hover{border-color:#2a7cff;cursor:pointer;box-shadow:0 6px 10px 0 rgba(0,0,0,.15)}.cmacs-card-measure-wrapper-selected .cmacs-card-measure-icon-wrapper,.cmacs-card-measure-wrapper:hover .cmacs-card-measure-icon-wrapper{border-right-color:#2a7cff}.cmacs-card-measure-wrapper-selected .cmacs-card-measure-icon-wrapper i,.cmacs-card-measure-wrapper:hover .cmacs-card-measure-icon-wrapper i{color:#2a7cff}.cmacs-card-files-wrapper:hover{background-color:#f6f7fb;cursor:pointer}.cmacs-card-files-wrapper .ant-card-body,.cmacs-card-measure-wrapper .ant-card-body{padding:0;width:100%}.cmacs-card-files-wrapper div,.cmacs-card-measure-wrapper div{display:inline-block}.cmacs-card-files-icon-wrapper{width:36px;height:36px;border-radius:3px;box-shadow:0 6px 10px 0 rgba(0,0,0,.15);background-color:#fff;margin-right:16px;text-align:center;position:relative;top:-8px}.cmacs-card-measure-icon-wrapper{background-color:#fff;margin-right:16px;text-align:center;padding:7px 6px 6px;border-right:1px solid #dee0e5}.cmacs-card-measure-icon-wrapper i{font-size:18px;top:23%;position:relative;color:#dee0e5}.cmacs-card-files-icon-wrapper i{color:#fb3147!important;font-size:18px;top:23%;position:relative}.cmacs-card-file-extra{font-size:22px;float:right;margin-top:2px;margin-right:5px}.cmacs-card-file-extra i{color:#bec4cd!important}.cmacs-card-label{padding:10px 0}.cmacs-selection-card{width:137px}.cmacs-selection-card .ant-card-cover{padding:15px}.cmacs-selection-card .ant-card-body{padding:10px 10px 30px;text-align:center;font-size:12px}.cmacs-selection-card .ant-card-meta-description{color:#656c79}.cmacs-selection-card.ant-card-hoverable:hover{box-shadow:none;border:1px solid #bec4cd}.cmacs-selection-card.ant-card-hoverable:hover .ant-radio-inner{border-color:#bec4cd}.cmacs-card-selected,.cmacs-card-selected:hover,.cmacs-card-selected:hover .ant-radio-inner{border-color:#2a7cff!important}.cmacs-card-disabled:hover .ant-radio-inner{border-color:#d9d9d9!important}.cmacs-card-selected .ant-card-meta-description{color:#2a7cff!important}.cmacs-card-disabled,.cmacs-card-disabled:hover{border-color:#dee0e5!important;cursor:default}.cmacs-card-disabled .ant-card-meta-description{color:#97a0ae!important}.cmacs-action-card{border:none;width:165px}.cmacs-action-card:hover{cursor:pointer}.cmacs-action-card-disabled:hover{cursor:default}.cmacs-action-card:hover .ant-card-meta-title{color:#2164c9}.cmacs-action-card .ant-card-meta-description{text-align:center;color:#acb3bf}.cmacs-action-card .ant-card-body{padding:13px}.cmacs-action-card .ant-card-meta-title{color:#2a7cff;white-space:normal;text-align:center;font-size:12px;padding-top:18px}.cmacs-action-card-disabled .ant-card-meta-title,.cmacs-action-card-disabled:hover .ant-card-meta-title{color:#97a0ae}.cmacs-information-card.ant-card-bordered{border-color:#dee0e5}.cmacs-information-card .ant-card-head{min-height:30px}.cmacs-information-card .ant-card-head-title{padding:10px 0}.cmacs-information-card:hover .cmacs-btn-action{color:#2a7cff!important}.cmacs-information-card .ant-card-body{padding:25px 10px}.cmacs-information-card .team-person-card{width:30px;height:30px;border-radius:3px;display:-webkit-inline-box;display:inline-flex;margin-right:12px}.cmacs-information-card .team-person-card:last-child{margin-right:0}.cmacs-information-card .plus-team-card{width:30px;height:30px;border-radius:3px;display:-webkit-inline-box;display:inline-flex;background-color:#dae8ff;color:#2a7cff;position:relative;top:-10px;font-size:13px;padding:5px 7px}.cmacs-information-card .team-person-card span{padding:6px 8px;color:#fff}.cmacs-team-card.ant-card-bordered{border-color:#dee0e5}.cmacs-team-card-selected.ant-card-bordered{border-color:#2a7cff}.cmacs-team-card .ant-card-head{min-height:30px}.cmacs-team-card .ant-card-head-title{padding:10px 0}.cmacs-team-card .ant-card-body{padding:0}.project-card-progress-bar-inner{height:5px;background-color:#2a7cff;border-radius:5px}.project-card-progress-bar{height:5px;background-color:#dee0e5;border-radius:5px;width:83%;margin:0 auto}.project-dates{display:inline-block}.project-status{position:relative;top:-36px;left:18px}.project-dates-wrapper{padding:0 20px;margin-top:-10px;margin-bottom:10px}.project-dates-title{color:#97a0ae;display:block;margin-bottom:5px}.project-dates-date{color:#656c79}.project-dates-wrapper i{margin-left:10px;margin-right:10px}.project-manager-metadata{display:inline-block;top:10px;margin-left:11px;margin-right:38px}.manager-charge{color:#acb3bf}.manager-name{color:#97a0ae;font-weight:500}.project-manager-details{margin-left:20px;margin-bottom:20px;margin-top:20px}.manager-avatar{display:inline-block;position:relative;top:-9px}.project-manager-details i{font-size:20px;color:#bec4cd;top:-11px;position:relative}.cmacs-card-files-folders-wrapper{height:48px;background-color:#fff;border:1px solid #dee0e5;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer!important}.card-files-uploading-wrapper{width:170px;height:48px;background-color:#f3f3f4;border:1px solid #dee0e5}.cmacs-card-files-folders-wrapper:hover{background-color:#f6f7fb;cursor:pointer}.file-card-selected,.file-card-selected:hover{background-color:#f2f7ff}.cmacs-card-files-folders-wrapper:hover .card-files-folders-label{color:#2a7cff}.cmacs-card-files-folders-wrapper:hover .card-files-folder-extra{display:inline-block}.card-files-folder-extra{display:none;font-size:20px}.card-files-folders-label{width:100px;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.card-files-uploading-wrapper .ant-card-body,.cmacs-card-files-folders-wrapper .ant-card-body{padding:11px 5px 11px 11px}.card-files-folders-icon-wrapper{font-size:20px;margin-right:10px;display:inline-block}.card-files-uploading-wrapper i,.cmacs-card-files-folders-wrapper i{color:#656c79!important}.card-files-progress-bar-inner{height:5px;background-color:#2a7cff;border-radius:5px}.card-files-progress-bar{height:5px;background-color:#dee0e5;border-radius:5px;margin-top:7px}.cmacs-big-file-card{width:243px;border:none;overflow:hidden}.cmacs-big-file-card .ant-card-body{padding:0}.cmacs-card-big-file-meta{border:1px solid #dee0e5;-webkit-transition:.3s;transition:.3s}.cmacs-big-file-card::before{content:' ';width:40px;height:21px;background-color:#fff;position:absolute;left:calc(100% - 26px);-webkit-transform:rotate(45deg);transform:rotate(45deg);top:-4px;border-bottom:1px solid #dee0e5;-webkit-transition:.3s;transition:.3s}.cmacs-card-big-file-icon-wrapper{font-size:22px;margin:0 auto;width:22px;padding-top:60px;padding-bottom:40px}.cmacs-card-big-file-extension-wrapper{text-align:right;padding:0 10px 10px 0}.cmacs-card-big-file-description{height:61px;margin-top:10px;-webkit-transition:.3s;transition:.3s}.cmacs-card-big-file-title{padding:10px 10px 5px;font-size:12px;color:#3b3f46;font-weight:500;-webkit-transition:.3s;transition:.3s}.cmacs-card-big-file-date{padding:0 10px 10px;font-size:12px;color:#acb3bf;font-weight:500}.cmacs-card-big-file-extra{font-size:21px;padding-top:3px;opacity:0;-webkit-transition:.3s;transition:.3s}.cmacs-card-big-file-extra a{color:#656c79;-webkit-transition:.3s;transition:.3s}.cmacs-card-big-file-description-left-panel{width:90%;float:left}.cmacs-card-big-file-description-right-panel{width:10%;float:right}.cmacs-big-file-card:hover{cursor:pointer}.cmacs-big-file-card:hover .cmacs-card-big-file-description{background-color:#f6f7fb}.cmacs-big-file-card:hover .cmacs-card-big-file-title{color:#2a7cff}.cmacs-big-file-card:hover .cmacs-card-big-file-extra{opacity:1}.cmacs-big-file-card-selected .cmacs-card-big-file-description,.cmacs-big-file-card-selected:hover .cmacs-card-big-file-description{background-color:#f2f7ff}.cmacs-big-file-card-selected .cmacs-card-big-file-meta,.cmacs-big-file-card-selected.cmacs-big-file-card::before{border-color:#2a7cff}.cmacs-card-video-description{color:#3b3f46;font-weight:600;font-size:12px;margin-top:17px}.cmacs-card-video-player-wrapper{width:337px;height:226px;border:1px solid #dee0e5}.cmacs-video-player-card{border:none;width:337px}.cmacs-video-player-card .ant-card-body{padding:0}.cmacs-todo-card-upper-line{width:95%;margin:5px;height:2px;border-radius:100px}.cmacs-todo-card{width:243px}.cmacs-todo-card .ant-card-body{padding:0}.cmacs-todo-card-title{color:#3b3f46;font-size:12px;margin:21px 14px 0}.cmacs-todo-card-project{color:#97a0ae;margin:10px 14px 0;font-size:12px}.cmacs-todo-card-date{color:#656c79;margin:14px 14px 0;background-color:#f6f7fb;padding:2px 5px;border-radius:3px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.cmacs-todo-card-action{padding:15px 14px 30px 15px;font-size:14px}.cmacs-todo-card-attachments,.cmacs-todo-card-person{float:left;margin-right:10px}.cmacs-todo-card-attachments span,.cmacs-todo-card-comments span{margin-right:3px;color:#2a7cff;font-size:12px}.cmacs-todo-card-comments{float:right}.cmacs-todo-card-attachments a,.cmacs-todo-card-comments a,.cmacs-todo-card-person a{color:#656c79}.cmacs-todo-card-project-img{width:241px;height:100px;overflow:hidden}.cmacs-todo-card-project-img img{width:241px}.cmacs-todo-card-selected{border-color:#2a7cff!important}"]
            }] }
];
/** @nocollapse */
CmacsCardComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: ElementRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLWNhcmQvY21hY3MtY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQzFDLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUFFLFlBQVksRUFBYyxZQUFZLEVBQ2xELEtBQUssRUFBcUIsTUFBTSxFQUNoQyxTQUFTLEVBQ1QsV0FBVyxFQUNYLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7Ozs7QUFNakUsNkJBSUM7OztJQUhDLHdCQUFlOztJQUNmLDRCQUFtQjs7SUFDbkIsNkJBQW9COztBQTRDdEIsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7O0lBa0M3QixZQUFvQixHQUFzQixFQUFFLFFBQW1CLEVBQUUsVUFBc0I7UUFBbkUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFqQzFDLGVBQVUsR0FBRyxRQUFRLENBQUM7UUFDdEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNNLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUVqQyxnQkFBVyxHQUF3QixJQUFJLFlBQVksRUFBUyxDQUFDO1FBSTlELFlBQU8sR0FBNkIsRUFBRSxDQUFDO1FBQ3ZDLFNBQUksR0FBUSxFQUFF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ZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBIb3N0TGlzdGVuZXIsXHJcbiAgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7Q21hY3NDYXJkVGFiQ29tcG9uZW50fSBmcm9tICcuL2NtYWNzLWNhcmQtdGFiLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7VmdBUEl9IGZyb20gXCJ2aWRlb2d1bGFyMi9jb21waWxlZC9zcmMvY29yZS9zZXJ2aWNlcy92Zy1hcGlcIjtcclxuaW1wb3J0IHtTb3VyY2V9IGZyb20gXCIuLi9jbWFjcy12aWRlby1wbGF5ZXIvY21hY3MtdmlkZW8tcGxheWVyLmNvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IHR5cGUgQ21hY3NDYXJkVHlwZSA9ICdmaWxlJyB8ICdzZWxlY3Rpb24nIHwgJ2FjdGlvbicgfCAndGVhbScgfCAncHJvamVjdCcgfCAnZm9sZGVyJyB8ICdtZWFzdXJlJyB8ICdiaWctZmlsZScgfCAnbm9uZScgfCAndmlkZW8nIHwgJ3RvZG8nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCaWdGaWxlIHtcclxuICB0aXRsZT86IHN0cmluZztcclxuICBleHRlbnNpb24/OiBzdHJpbmc7XHJcbiAgY3JlYXRlZF9hdD86IHN0cmluZztcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1jYXJkJyxcclxuICBleHBvcnRBczogJ2NtYWNzQ2FyZCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtY2FyZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIGNtYWNzLWNhcmQge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXSxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1jYXJkLWxvYWRpbmddJzogJ2xvYWRpbmcnLFxyXG4gICAgJ1tjbGFzcy5hbnQtY2FyZC1ib3JkZXJlZF0nOiAnYm9yZGVyZWQnLFxyXG4gICAgJ1tjbGFzcy5hbnQtY2FyZC1ob3ZlcmFibGVdJzogXCJob3ZlcmFibGUgfHwgY21hY3NUeXBlID09PSAnc2VsZWN0aW9uJ1wiLFxyXG4gICAgJ1tjbGFzcy5hbnQtY2FyZC10eXBlLWlubmVyXSc6IGB0eXBlID09PSAnaW5uZXInYCxcclxuICAgICdbY2xhc3MuYW50LWNhcmQtY29udGFpbi10YWJzXSc6ICchIXRhYicsXHJcbiAgICAnW2NsYXNzLmNtYWNzLWNhcmQtZmlsZXMtd3JhcHBlcl0nOiBcImNtYWNzVHlwZSA9PT0gJ2ZpbGUnXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLWNhcmQtbWVhc3VyZS13cmFwcGVyXSc6IFwiY21hY3NUeXBlID09PSAnbWVhc3VyZSdcIixcclxuICAgICdbY2xhc3MuY21hY3MtY2FyZC1tZWFzdXJlLXdyYXBwZXItc2VsZWN0ZWRdJzogXCJjbWFjc1R5cGUgPT09ICdtZWFzdXJlJyAmJiBzZWxlY3RlZFwiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1zZWxlY3Rpb24tY2FyZF0nOiBcImNtYWNzVHlwZSA9PT0gJ3NlbGVjdGlvbidcIixcclxuICAgICdbY2xhc3MuY21hY3MtY2FyZC1zZWxlY3RlZF0nOiBcImNtYWNzVHlwZSA9PT0gJ3NlbGVjdGlvbicgJiYgc2VsZWN0ZWRcIixcclxuICAgICdbY2xhc3MuY21hY3MtY2FyZC1kaXNhYmxlZF0nOiBcImNtYWNzVHlwZSA9PT0gJ3NlbGVjdGlvbicgJiYgZGlzYWJsZWRcIixcclxuICAgICdbY2xhc3MuY21hY3MtYWN0aW9uLWNhcmRdJzogXCJjbWFjc1R5cGUgPT09ICdhY3Rpb24nXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLWJpZy1maWxlLWNhcmRdJzogXCJjbWFjc1R5cGUgPT09ICdiaWctZmlsZSdcIixcclxuICAgICdbY2xhc3MuY21hY3MtYmlnLWZpbGUtY2FyZC1zZWxlY3RlZF0nOiBcImNtYWNzVHlwZSA9PT0gJ2JpZy1maWxlJyAmJiBzZWxlY3RlZFwiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1hY3Rpb24tY2FyZC1kaXNhYmxlZF0nOiBcImNtYWNzVHlwZSA9PT0gJ2FjdGlvbicgJiYgZGlzYWJsZWRcIixcclxuICAgICdbY2xhc3MuY21hY3MtaW5mb3JtYXRpb24tY2FyZF0nOiBcImNtYWNzVHlwZSA9PT0gJ3RlYW0nXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLXRlYW0tY2FyZF0nOiBcImNtYWNzVHlwZSA9PT0gJ3Byb2plY3QnXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLXZpZGVvLXBsYXllci1jYXJkXSc6IFwiY21hY3NUeXBlID09PSAndmlkZW8nXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLXRvZG8tY2FyZF0nOiBcImNtYWNzVHlwZSA9PT0gJ3RvZG8nXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLXRvZG8tY2FyZC1zZWxlY3RlZF0nOiBcImNtYWNzVHlwZSA9PT0gJ3RvZG8nICYmIHNlbGVjdGVkXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLXRlYW0tY2FyZC1zZWxlY3RlZF0nOiBcImNtYWNzVHlwZSA9PT0gJ3Byb2plY3QnICYmIHNlbGVjdGVkXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLWNhcmQtZmlsZXMtZm9sZGVycy13cmFwcGVyXSc6IFwiY21hY3NUeXBlID09PSAnZm9sZGVyJ1wiLFxyXG4gICAgJ1tjbGFzcy5maWxlLWNhcmQtc2VsZWN0ZWRdJzogXCJjbWFjc1R5cGUgPT09ICdmb2xkZXInICYmIHNlbGVjdGVkXCJcclxuICB9LFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWNhcmQuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NDYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gIGZvbGRlckljb24gPSAnZm9sZGVyJztcclxuICBpc0VkaXRhYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJvcmRlcmVkID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgb3BlbmVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGVkaXRhYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGlzUmFkaW8gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbG9hZGluZyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBob3ZlcmFibGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBzb3VyY2VzOiBTb3VyY2VbXTtcclxuICBAT3V0cHV0KCkgcGxheWVyUmVhZHk6IEV2ZW50RW1pdHRlcjxWZ0FQST4gPSBuZXcgRXZlbnRFbWl0dGVyPFZnQVBJPigpO1xyXG4gIEBJbnB1dCgpIGJvZHlTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuICBASW5wdXQoKSBjb3ZlcjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgYm9keTogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgYWN0aW9uczogQXJyYXk8VGVtcGxhdGVSZWY8dm9pZD4+ID0gW107XHJcbiAgQElucHV0KCkgdGVhbTogYW55ID0gW107XHJcbiAgQElucHV0KCkgZmlsZTogQmlnRmlsZSA9IG51bGw7XHJcbiAgQElucHV0KCkgcHJvamVjdDogYW55ID0gW107XHJcbiAgQElucHV0KCkgdG9kbzogYW55O1xyXG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcclxuICBASW5wdXQoKSBjbWFjc1R5cGU6IENtYWNzQ2FyZFR5cGUgPSAnbm9uZSc7XHJcbiAgQElucHV0KCkgY21hY3NJY29uOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQE91dHB1dCgpIHRpdGxlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4gIEBJbnB1dCgpIGV4dHJhOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBAQ29udGVudENoaWxkKENtYWNzQ2FyZFRhYkNvbXBvbmVudCkgdGFiOiBDbWFjc0NhcmRUYWJDb21wb25lbnQ7XHJcbiAgQE91dHB1dCgpIG9uZGxjbGlja0NhcmQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb3BlbiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBJbnB1dCgpIHNlbGVjdGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgdmFsdWUgOiBhbnk7XHJcbiAgQE91dHB1dCgpIHNlbGVjdGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWNhcmQnKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKHRoaXMuY21hY3NUeXBlID09PSBcImZvbGRlclwiKSB7XHJcbiAgICAgIHRoaXMuZm9sZGVySWNvbiA9IHRoaXMub3BlbmVkID8gJ2ZvbGRlci1vcGVuJyA6ICdmb2xkZXInO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pc0VkaXRhYmxlID0gdGhpcy5lZGl0YWJsZTtcclxuICB9XHJcblxyXG4gIG9uUGxheWVyUmVhZHkoYXBpOlZnQVBJKXtcclxuICAgIHRoaXMucGxheWVyUmVhZHkuZW1pdChhcGkpO1xyXG4gIH1cclxuXHJcblxyXG4gIGNoZWNrUmFkaW8oKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZCk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pIG9uQ2xpY2soZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICB0aGlzLnNlbGVjdChldmVudCk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkYmxjbGljaycsIFsnJGV2ZW50J10pIG9uRGJsQ2xpY2soZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5jbWFjc1R5cGUgPT09ICdmb2xkZXInKSB7XHJcbiAgICAgIHRoaXMuZm9sZGVySWNvbiA9IHRoaXMuZm9sZGVySWNvbiA9PT0gJ2ZvbGRlcicgPyAnZm9sZGVyLW9wZW4nIDogJ2ZvbGRlcic7XHJcbiAgICAgIHRoaXMub3BlbmVkID0gIXRoaXMub3BlbmVkO1xyXG4gICAgICBpZiAodGhpcy5vcGVuZWQpIHtcclxuICAgICAgICB0aGlzLm9wZW4uZW1pdCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY2xvc2UuZW1pdCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jbWFjc1R5cGUgPT09ICdwcm9qZWN0Jyl7XHJcbiAgICAgIHRoaXMub25kbGNsaWNrQ2FyZC5lbWl0KHRoaXMucHJvamVjdCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtYXJrRm9yQ2hlY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdChldmVudDogRXZlbnQpe1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIGlmICghdGhpcy5pc1JhZGlvKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9ICF0aGlzLnNlbGVjdGVkO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkID8gdGhpcy5zZWxlY3RlZCA6ICF0aGlzLnNlbGVjdGVkO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUVudGVyKGV2ZW50OiBLZXlib2FyZEV2ZW50LCB0aXRsZUNvbnRhaW5lciwgdGl0bGVTcGFuKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICB0aXRsZUNvbnRhaW5lci5zdHlsZS50ZXh0T3ZlcmZsb3cgPSAnZWxsaXBzaXMnO1xyXG4gICAgICBjb25zdCB0ZXh0ID0gdGl0bGVTcGFuLmlubmVyVGV4dC5yZXBsYWNlKC8oXFxyXFxufFxcbnxcXHIpL2dtLFwiXCIpO1xyXG4gICAgICB0aXRsZVNwYW4uaW5uZXJUZXh0ID0gdGV4dDtcclxuICAgICAgdGhpcy5pc0VkaXRhYmxlID0gZmFsc2U7XHJcbiAgICAgIHRoaXMudGl0bGVDaGFuZ2UuZW1pdCh0ZXh0KTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZUVkaXQodGl0bGVDb250YWluZXIpe1xyXG4gICAgdGhpcy5pc0VkaXRhYmxlID0gdGhpcy5lZGl0YWJsZTtcclxuICAgIGlmICh0aGlzLmlzRWRpdGFibGUpe1xyXG4gICAgICB0aXRsZUNvbnRhaW5lci5zdHlsZS50ZXh0T3ZlcmZsb3cgPSAnaW5pdGlhbCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRJbml0aWFscyhuYW1lOiBhbnkpIHtcclxuICAgIGxldCBpbml0aWFscyA9IG5hbWUubWF0Y2goL1xcYlxcdy9nKSB8fCBbXTtcclxuICAgIGluaXRpYWxzID0gKChpbml0aWFscy5zaGlmdCgpIHx8ICcnKSArIChpbml0aWFscy5wb3AoKSB8fCAnJykpLnRvVXBwZXJDYXNlKCk7XHJcbiAgICByZXR1cm4gaW5pdGlhbHM7XHJcbiAgfVxyXG59XHJcbiJdfQ==