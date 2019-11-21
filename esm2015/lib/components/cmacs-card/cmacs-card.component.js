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
export class CmacsCardComponent {
    /**
     * @param {?} cdr
     * @param {?} renderer
     * @param {?} sanitizer
     * @param {?} elementRef
     */
    constructor(cdr, renderer, sanitizer, elementRef) {
        this.cdr = cdr;
        this.sanitizer = sanitizer;
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
     * @param {?} $event
     * @return {?}
     */
    openMail($event) {
        $event.stopImmediatePropagation();
        $event.preventDefault();
        /** @type {?} */
        const link = `mailto: ${this.project.teamLead.email}`;
        location.href = link;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.cmacsType === 'folder') {
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
     * @param {?} event
     * @param {?} titleSpan
     * @return {?}
     */
    handleEdit(event, titleSpan) {
        /** @type {?} */
        const text = titleSpan.innerText.replace(/(\r\n|\n|\r)/gm, "");
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
    /**
     * @return {?}
     */
    getBackgroundImage() {
        return this.sanitizer.bypassSecurityTrustStyle('url(\'' + this.project.projectImage + '\')');
    }
}
CmacsCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmacs-card',
                exportAs: 'cmacsCard',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                template: "<div class=\"ant-card-head\" *ngIf=\"(title || extra || tab ) && (cmacsType === 'none' || cmacsType === 'team' || cmacsType === 'project')\">\r\n  <div class=\"ant-card-head-wrapper\">\r\n    <div class=\"ant-card-head-title\" *ngIf=\"title\">\r\n      <ng-container *cmacsStringTemplateOutlet=\"title\">{{ title }}</ng-container>\r\n    </div>\r\n    <div class=\"ant-card-extra\" *ngIf=\"extra\">\r\n      <ng-container *cmacsStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\r\n    </div>\r\n  </div>\r\n  <ng-container *ngIf=\"tab\">\r\n    <ng-template [ngTemplateOutlet]=\"tab.template\"></ng-template>\r\n  </ng-container>\r\n</div>\r\n\r\n<div class=\"ant-card-cover\" *ngIf=\"cover || cmacsType === 'selection' || cmacsType === 'action'\">\r\n  <ng-template [ngTemplateOutlet]=\"cover\"></ng-template>\r\n  <ng-container *ngIf=\"cmacsType === 'selection'\">\r\n    <label cmacs-radio [(ngModel)]=\"selected\" (ngModelChange)=\"checkRadio()\" [disabled]=\"disabled\">{{labelTitle}}</label>\r\n    <ng-template [ngTemplateOutlet]=\"body\"></ng-template>\r\n  </ng-container>\r\n</div>\r\n<div class=\"ant-card-body\" [ngStyle]=\"bodyStyle\">\r\n  <ng-container *ngIf=\"!loading\">\r\n\r\n    <ng-container *ngIf=\"cmacsType === 'todo'\">\r\n      <div *ngIf=\"todo.projectImage\" class=\"cmacs-todo-card-project-img\">\r\n        <img [src]=\"todo.projectImage\">\r\n      </div>\r\n      <!-- <div [style.backgroundColor]=\"todo.stateColor\" class=\"cmacs-todo-card-upper-line\"></div> -->\r\n      <div class=\"cmacs-todo-card-title\">\r\n        <span>{{todo.title}}</span>\r\n      </div>\r\n      <div *ngIf=\"todo.project\" class=\"cmacs-todo-card-project\">\r\n        <span>{{todo.project}}</span>\r\n      </div>\r\n      <div *ngIf=\"todo.date\" class=\"cmacs-todo-card-date\">\r\n        <span>{{todo.date}}</span>\r\n      </div>\r\n      <div class=\"cmacs-todo-card-action\">\r\n        <div *ngIf=\"todo.attachments\" class=\"cmacs-todo-card-attachments\">\r\n          <span>{{todo.attachments}}</span>\r\n          <a><i class=\"iconUILarge-Attached\"></i></a>\r\n        </div>\r\n        <div *ngIf=\"todo.comments\" class=\"cmacs-todo-card-comments\">\r\n          <span>{{todo.comments}}</span>\r\n          <a><i class=\"iconUILarge-Comments\"></i></a>\r\n        </div>\r\n\r\n        <div *ngIf=\"!todo.isTeam\" class=\"cmacs-todo-card-person\">\r\n          <a><i class=\"iconCreation-User\"></i></a>\r\n        </div>\r\n\r\n        <div *ngIf=\"todo.isTeam\" class=\"cmacs-todo-card-team\">\r\n          <a><i class=\"iconUILarge-Team\"></i></a>\r\n        </div>\r\n\r\n        <div *ngIf=\"todo.hasPriorityFlag\" class=\"cmacs-todo-card-priority\">\r\n          <a [style.color]=\"todo.stateColor\"><i nz-icon [type]=\"'flag'\"></i></a>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"cmacsType === 'big-file'\">\r\n      <div class=\"cmacs-card-big-file-meta\">\r\n        <div class=\"cmacs-card-big-file-icon-wrapper\">\r\n          <a><i class=\"{{cmacsIcon}}\"></i></a>\r\n        </div>\r\n        <div class=\"cmacs-card-big-file-extension-wrapper\">\r\n          <span>{{file.extension}}</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"cmacs-card-big-file-description\">\r\n        <div class=\"cmacs-card-big-file-description-left-panel\">\r\n          <div class=\"cmacs-card-big-file-title\">\r\n            <span>{{file.title}}</span>\r\n          </div>\r\n          <div class=\"cmacs-card-big-file-date\">\r\n            <span>{{file.created_at}}</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"cmacs-card-big-file-description-right-panel\">\r\n          <div class=\"cmacs-card-big-file-extra\" *ngIf=\"extra\">\r\n            <ng-container *cmacsStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"cmacsType === 'video'\">\r\n      <div class=\"cmacs-card-video-player-wrapper\">\r\n        <cmacs-video-player [sources]=\"sources\" (playerReady)=\"onPlayerReady($event)\"></cmacs-video-player>\r\n      </div>\r\n      <div class=\"cmacs-card-video-description\">\r\n        <div class=\"cmacs-card-video-title\">\r\n          <span>{{title}}</span>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"cmacsType === 'file'\">\r\n      <div class=\"cmacs-card-files-icon-wrapper\">\r\n        <a><i class=\"{{cmacsIcon}}\"></i></a>\r\n      </div>\r\n      <div class=\"cmacs-card-label\">\r\n        <span>{{title}}</span>\r\n      </div>\r\n      <div class=\"cmacs-card-file-extra\" *ngIf=\"extra\">\r\n        <ng-container *cmacsStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"cmacsType === 'measure'\">\r\n      <div class=\"cmacs-card-measure-icon-wrapper\">\r\n        <a><i nz-icon [type]=\"cmacsIcon\"></i></a>\r\n      </div>\r\n      <div class=\"cmacs-card-label\">\r\n        <span>{{title}}</span>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"cmacsType === 'none' || cmacsType === 'selection' || cmacsType === 'action'\">\r\n      <ng-content></ng-content>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"cmacsType === 'team'\">\r\n      <div style=\"margin-bottom: 20px; display: inline-flex\">\r\n        <div class=\"team-person-card\"\r\n             *ngFor=\"let person of team; index as i\"\r\n             [style.backgroundColor]=\"!person.image ? '#ffa800' : '#c7f5ff'\"\r\n             [style.display]=\"(i >= 4 && team.length > 5) ? 'none' : 'inline-flex' \"\r\n        >\r\n          <img width=\"30px\" height=\"30px\" *ngIf=\"person.image\" [src]=\"person.image\">\r\n          <span *ngIf=\"!person.image\">{{getInitials(person.name)}}</span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"plus-team-card\" *ngIf=\"team.length > 5\">+{{team.length - 4}}</div>\r\n      <ng-content select=\"[cmacs-action-panel]\"></ng-content>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"cmacsType === 'project'\">\r\n      <div class=\"project-image\"\r\n        *ngIf=\"project.projectImage !== ''\"\r\n        [style.background-image]=\"getBackgroundImage()\"\r\n      ></div>\r\n      <div *ngIf=\"project.projectImage === ''\" class=\"cmacs-proj-card-div-Logo\">\r\n        <span class=\"cmacs-proj-card-text-Logo\">{{getInitials(project.name)}}</span>\r\n      </div>\r\n      <cmacs-tag class=\"project-status\" [cmacsGridType]=\"project.statusTag\">{{project.status}}</cmacs-tag>\r\n      <div class=\"project-dates-wrapper\">\r\n        <span class=\"project-dates-title\">Project Dates</span>\r\n        <span class=\"project-dates project-dates-date\">{{project.startDate}}</span>\r\n        <a><i nz-icon [type]=\"'arrow-right'\" class=\"project-dates\" style=\"font-size: 16px;\"></i></a>\r\n        <span class=\"project-dates project-dates-date\">{{project.endDate}}</span>\r\n      </div>\r\n\r\n      <div class=\"project-card-progress-bar\">\r\n        <div class=\"project-card-progress-bar-inner\" [style.width]=\"project.completion\"></div>\r\n      </div>\r\n      <div class=\"project-manager-details\">\r\n        <img *ngIf=\"project.teamLead.avatar\"  class=\"manager-avatar\" width=\"30px\" height=\"30px\" [src]=\"project.teamLead.avatar\">\r\n        <span *ngIf=\"!project.teamLead.avatar || project.teamLead.avatar === ''\" class=\"cmacs-proj-avatar-text\">{{getInitials(project.teamLead.name)}}</span>\r\n        <div class=\"project-manager-metadata\">\r\n          <div class=\"manager-name\"> {{ (project.teamLead.name.length > 20)? (project.teamLead.name | slice:0:20)+'...':(project.teamLead.name) }}</div>\r\n          <div class=\"manager-charge\">{{ (project.teamLead.charge.length > 20)? (project.teamLead.charge | slice:0:20)+'...':(project.teamLead.charge) }}</div>\r\n        </div>\r\n        <a (click)=\"openMail($event)\" style=\"float: right;\"><i class=\"iconUISmall-Message project-email-icon\"></i></a>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"cmacsType === 'folder'\">\r\n      <div class=\"card-files-folders-icon-wrapper\">\r\n        <a><i nz-icon [type]=\"folderIcon\"></i></a>\r\n      </div>\r\n      <div #titleContainer (click)=\"toggleEdit(titleContainer)\" class=\"card-files-folders-label\">\r\n        <span #name (keydown.enter)=\"handleEnter($event, titleContainer, name)\" (keyup)=\"handleEdit($event, name)\"\r\n              [attr.contentEditable]=\"isEditable\"\r\n        >{{title}}</span>\r\n      </div>\r\n      <div class=\"card-files-folder-extra\" *ngIf=\"extra\">\r\n        <ng-container *cmacsStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\r\n      </div>\r\n    </ng-container>\r\n\r\n  </ng-container>\r\n  <cmacs-card-loading *ngIf=\"loading\"></cmacs-card-loading>\r\n</div>\r\n<ul class=\"ant-card-actions\" *ngIf=\"actions.length\">\r\n  <li *ngFor=\"let action of actions\" [style.width.%]=\"100 / actions.length\">\r\n    <span><ng-template [ngTemplateOutlet]=\"action\"></ng-template></span>\r\n  </li>\r\n</ul>\r\n\r\n",
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
    `, ".ant-card,.ant-card-head{font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79}.ant-card-head{min-height:40px;padding:0 14px}.ant-card-extra{padding:8px 0}.ant-card-head-title{padding:12px 0}.ant-card-grid{font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79}.cmacs-card-files-wrapper{width:223px;height:36px;border:none}.cmacs-card-measure-wrapper{width:223px;height:36px;border:1px solid #dee0e5}.cmacs-card-measure-wrapper .cmacs-card-label{padding:9px 0;font-size:13px}.cmacs-card-measure-wrapper-selected,.cmacs-card-measure-wrapper:hover{border-color:#2a7cff;cursor:pointer;box-shadow:0 6px 10px 0 rgba(0,0,0,.15)}.cmacs-card-measure-wrapper-selected .cmacs-card-measure-icon-wrapper,.cmacs-card-measure-wrapper:hover .cmacs-card-measure-icon-wrapper{border-right-color:#2a7cff}.cmacs-card-measure-wrapper-selected .cmacs-card-measure-icon-wrapper i,.cmacs-card-measure-wrapper:hover .cmacs-card-measure-icon-wrapper i{color:#2a7cff}.cmacs-card-files-wrapper:hover{background-color:#f6f7fb;cursor:pointer}.cmacs-card-files-wrapper .ant-card-body,.cmacs-card-measure-wrapper .ant-card-body{padding:0;width:100%}.cmacs-card-files-wrapper div,.cmacs-card-measure-wrapper div{display:inline-block}.cmacs-card-files-icon-wrapper{width:36px;height:36px;border-radius:3px;box-shadow:0 6px 10px 0 rgba(0,0,0,.15);background-color:#fff;margin-right:16px;text-align:center;position:relative;top:-8px}.cmacs-card-measure-icon-wrapper{background-color:#fff;margin-right:16px;text-align:center;padding:7px 6px 6px;border-right:1px solid #dee0e5}.cmacs-card-measure-icon-wrapper i{font-size:18px;top:23%;position:relative;color:#dee0e5}.cmacs-card-files-icon-wrapper i{color:#fb3147!important;font-size:18px;top:23%;position:relative}.cmacs-card-file-extra{font-size:22px;float:right;margin-top:2px;margin-right:5px}.cmacs-card-file-extra i{color:#bec4cd!important}.cmacs-card-label{padding:10px 0}.cmacs-selection-card{width:137px}.cmacs-selection-card .ant-card-cover{padding:15px}.cmacs-selection-card .ant-card-body{padding:10px 10px 30px;text-align:center;font-size:12px}.cmacs-selection-card .ant-card-meta-description{color:#656c79}.cmacs-selection-card.ant-card-hoverable:hover{border:1px solid #bec4cd}.cmacs-selection-card.ant-card-hoverable:hover .ant-radio-inner{border-color:#bec4cd}.cmacs-card-selected,.cmacs-card-selected:hover,.cmacs-card-selected:hover .ant-radio-inner{border-color:#2a7cff!important}.cmacs-card-disabled:hover .ant-radio-inner{border-color:#d9d9d9!important}.cmacs-card-selected .ant-card-meta-description{color:#2a7cff!important}.cmacs-card-disabled,.cmacs-card-disabled:hover{border-color:#dee0e5!important;cursor:default}.cmacs-card-disabled .ant-card-meta-description{color:#97a0ae!important}.cmacs-action-card{border:none;width:165px}.cmacs-action-card:hover{cursor:pointer}.cmacs-action-card-disabled:hover{cursor:default}.cmacs-action-card:hover .ant-card-meta-title{color:#2164c9}.cmacs-action-card .ant-card-meta-description{text-align:center;color:#acb3bf}.cmacs-action-card .ant-card-body{padding:13px}.cmacs-action-card .ant-card-meta-title{color:#2a7cff;white-space:normal;text-align:center;font-size:12px;padding-top:18px}.cmacs-action-card-disabled .ant-card-meta-title,.cmacs-action-card-disabled:hover .ant-card-meta-title{color:#97a0ae}.cmacs-information-card.ant-card-bordered{border-color:#dee0e5}.cmacs-information-card .ant-card-head{min-height:30px}.cmacs-information-card .ant-card-head-title{padding:10px 0}.cmacs-information-card .cmacs-btn-action{border-color:#dee0e5}.cmacs-information-card:hover .cmacs-btn-action,.cmacs-information-card:hover .cmacs-btn-action span i{color:#2a7cff!important}.cmacs-information-card .ant-card-body{padding:25px 10px}.cmacs-information-card .team-person-card{width:30px;height:30px;border-radius:3px;display:-webkit-inline-box;display:inline-flex;margin-right:12px}.cmacs-information-card .team-person-card:last-child{margin-right:0}.cmacs-information-card .plus-team-card{width:30px;height:30px;border-radius:3px;display:-webkit-inline-box;display:inline-flex;background-color:#dae8ff;color:#2a7cff;position:relative;top:-10px;font-size:13px;padding:5px 7px}.cmacs-information-card .team-person-card span{padding:6px 8px;color:#fff}.cmacs-team-card.ant-card-bordered{border-color:#dee0e5}.cmacs-team-card-selected.ant-card-bordered{border-color:#2a7cff}.cmacs-team-card .ant-card-head{min-height:30px}.cmacs-team-card .ant-card-head-title{padding:10px 0}.cmacs-team-card .ant-card-body{padding:0}.project-card-progress-bar-inner{height:5px;background-color:#2a7cff;border-radius:5px}.project-card-progress-bar{height:5px;background-color:#dee0e5;border-radius:5px;width:83%;margin:0 auto}.project-dates{display:inline-block}.project-status{position:relative;top:-36px;left:18px}.project-dates-wrapper{padding:0 20px;margin-top:-10px;margin-bottom:10px}.project-dates-title{color:#97a0ae;display:block;margin-bottom:5px}.project-dates-date{color:#656c79}.project-dates-wrapper i{margin-left:10px;margin-right:10px}.project-manager-metadata{display:inline-block;top:10px;margin-left:11px;margin-right:5px}.manager-charge{color:#acb3bf;max-width:120px;width:120px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;position:relative;top:5px}.manager-name{color:#97a0ae;font-weight:500;max-width:120px;width:120px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;position:relative;top:5px}.project-manager-details{margin-left:20px;margin-bottom:20px;margin-top:20px}.manager-avatar{display:inline-block;position:relative;top:-9px}.project-manager-details i{font-size:25px;color:#bec4cd;position:relative;right:10px}.cmacs-card-files-folders-wrapper{height:48px;background-color:#fff;border:1px solid #dee0e5;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer!important}.card-files-uploading-wrapper{width:170px;height:48px;background-color:#f3f3f4;border:1px solid #dee0e5}.cmacs-card-files-folders-wrapper:hover{background-color:#f6f7fb;cursor:pointer}.file-card-selected,.file-card-selected:hover{background-color:#f2f7ff}.cmacs-card-files-folders-wrapper:hover .card-files-folders-label{color:#2a7cff}.cmacs-card-files-folders-wrapper:hover .card-files-folder-extra a{opacity:1}.card-files-folder-extra{display:inline-block;font-size:20px}.card-files-folder-extra a{opacity:0}.card-files-folders-label{width:100px;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.card-files-uploading-wrapper .ant-card-body,.cmacs-card-files-folders-wrapper .ant-card-body{padding:11px 5px 11px 11px}.card-files-folders-icon-wrapper{font-size:20px;margin-right:10px;display:inline-block}.card-files-uploading-wrapper i,.cmacs-card-files-folders-wrapper i{color:#656c79!important}.card-files-progress-bar-inner{height:5px;background-color:#2a7cff;border-radius:5px}.card-files-progress-bar{height:5px;background-color:#dee0e5;border-radius:5px;margin-top:7px}.cmacs-big-file-card{width:243px;border:none;overflow:hidden}.cmacs-big-file-card .ant-card-body{padding:0}.cmacs-card-big-file-meta{border:1px solid #dee0e5;-webkit-transition:.3s;transition:.3s}.cmacs-big-file-card::before{content:' ';width:40px;height:21px;background-color:#fff;position:absolute;left:calc(100% - 26px);-webkit-transform:rotate(45deg);transform:rotate(45deg);top:-4px;border-bottom:1px solid #dee0e5;-webkit-transition:.3s;transition:.3s}.cmacs-card-big-file-icon-wrapper{font-size:22px;margin:0 auto;width:22px;padding-top:60px;padding-bottom:40px}.cmacs-card-big-file-extension-wrapper{text-align:right;padding:0 10px 10px 0;color:#acb3bf}.cmacs-card-big-file-description{height:61px;margin-top:10px;-webkit-transition:.3s;transition:.3s}.cmacs-card-big-file-title{padding:10px 10px 5px;font-size:12px;color:#3b3f46;font-weight:500;-webkit-transition:.3s;transition:.3s}.cmacs-card-big-file-date{padding:0 10px 10px;font-size:12px;color:#acb3bf;font-weight:500}.cmacs-card-big-file-extra{font-size:21px;padding-top:3px;-webkit-transition:.3s;transition:.3s}.cmacs-card-big-file-extra a{color:#656c79;opacity:0;-webkit-transition:.3s;transition:.3s}.cmacs-card-big-file-description-left-panel{width:90%;float:left}.cmacs-card-big-file-description-right-panel{width:10%;float:right}.cmacs-big-file-card:hover{cursor:pointer}.cmacs-big-file-card:hover .cmacs-card-big-file-description{background-color:#f6f7fb}.cmacs-big-file-card:hover .cmacs-card-big-file-title{color:#2a7cff}.cmacs-big-file-card:hover .cmacs-card-big-file-extra a{opacity:1}.cmacs-big-file-card-selected .cmacs-card-big-file-description,.cmacs-big-file-card-selected:hover .cmacs-card-big-file-description{background-color:#f2f7ff}.cmacs-big-file-card-selected .cmacs-card-big-file-meta,.cmacs-big-file-card-selected.cmacs-big-file-card::before{border-color:#2a7cff}.cmacs-card-video-description{color:#3b3f46;font-weight:600;font-size:12px;margin-top:17px}.cmacs-card-video-player-wrapper{width:337px;height:226px;border:1px solid #dee0e5}.cmacs-video-player-card{border:none;width:337px}.cmacs-video-player-card .ant-card-body{padding:0}.cmacs-todo-card-upper-line{width:95%;margin:5px;height:2px;border-radius:100px}.cmacs-todo-card{width:243px}.cmacs-todo-card .ant-card-body{padding:0}.cmacs-todo-card-title{color:#3b3f46;font-size:12px;margin:21px 14px 0}.cmacs-todo-card-project{color:#97a0ae;margin:10px 14px 0;font-size:12px}.cmacs-todo-card-date{color:#656c79;margin:14px 14px 0;background-color:#f6f7fb;padding:2px 5px;border-radius:3px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.cmacs-todo-card-action{padding:15px 14px 30px 15px;font-size:14px}.cmacs-todo-card-attachments,.cmacs-todo-card-comments,.cmacs-todo-card-person,.cmacs-todo-card-team{float:left;margin-right:10px}.cmacs-todo-card-attachments span,.cmacs-todo-card-comments span{margin-right:3px;color:#2a7cff;font-size:12px}.cmacs-todo-card-priority{float:right;margin-left:12px}.cmacs-todo-card-attachments a,.cmacs-todo-card-comments a,.cmacs-todo-card-person a,.cmacs-todo-card-team a{color:#656c79}.cmacs-todo-card-project-img{width:241px;height:100px;overflow:hidden}.cmacs-todo-card-project-img img{width:241px}.cmacs-todo-card-selected{border-color:#2a7cff!important}.cmacs-proj-card-text-Logo{font-size:50px;color:#fff;background-color:#ffa800}.cmacs-proj-card-div-Logo{background-color:#ffa800;width:221px;height:107px;text-align:center}.cmacs-proj-avatar-text{border-radius:3px;background:#512da8;color:#fff;text-align:center;line-height:1.33;cursor:pointer;padding:4px;font-size:18px;display:inline-block;position:relative;top:-7px}.project-image{background-repeat:no-repeat;background-position:center center;background-size:contain;text-align:center;height:107px;margin-top:5px}.cmacs-todo-card-attachments span,.cmacs-todo-card-comments span,.cmacs-todo-card-person a{vertical-align:middle}.cmacs-todo-card-person,.cmacs-todo-card-team{margin-left:4px}.cmacs-todo-card-attachments a,.cmacs-todo-card-comments a{vertical-align:sub;font-size:18px}.cmacs-todo-card-team a{font-size:19px;vertical-align:top}"]
            }] }
];
/** @nocollapse */
CmacsCardComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: DomSanitizer },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLWNhcmQvY21hY3MtY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ29CLGlCQUFpQixFQUMxQyxTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFBRSxZQUFZLEVBQWMsWUFBWSxFQUNsRCxLQUFLLEVBQXFCLE1BQU0sRUFDaEMsU0FBUyxFQUNULFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBR2pFLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQzs7OztBQUl2RCw2QkFJQzs7O0lBSEMsd0JBQWU7O0lBQ2YsNEJBQW1COztJQUNuQiw2QkFBb0I7O0FBMkN0QixNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7O0lBbUM3QixZQUFvQixHQUFzQixFQUM5QixRQUFtQixFQUNYLFNBQXVCLEVBQy9CLFVBQXNCO1FBSGQsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFFdEIsY0FBUyxHQUFULFNBQVMsQ0FBYztRQXBDM0MsZUFBVSxHQUFHLFFBQVEsQ0FBQztRQUN0QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ00sYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBRWpDLGdCQUFXLEdB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QVksRUFBRTs7bURBQWlCO0FBQ2hCO0lBQWYsWUFBWSxFQUFFOztvREFBa0I7QUFDakI7SUFBZixZQUFZLEVBQUU7O3FEQUFtQjs7O0lBUjNDLHdDQUFzQjs7SUFDdEIsd0NBQW1COztJQUNuQixzQ0FBeUM7O0lBQ3pDLG9DQUF3Qzs7SUFDeEMsc0NBQTBDOztJQUMxQyxxQ0FBeUM7O0lBQ3pDLHFDQUF5Qzs7SUFDekMsc0NBQTBDOztJQUMxQyx1Q0FBMkM7O0lBQzNDLHFDQUEyQjs7SUFDM0IseUNBQXVFOztJQUN2RSx1Q0FBOEM7O0lBQzlDLG1DQUFrQzs7SUFDbEMsa0NBQWlDOztJQUNqQyxxQ0FBZ0Q7O0lBQ2hELGtDQUF3Qjs7SUFDeEIsa0NBQThCOztJQUM5QixxQ0FBMkI7O0lBQzNCLGtDQUFtQjs7SUFDbkIsa0NBQXNCOztJQUN0Qix1Q0FBMkM7O0lBQzNDLHVDQUFnQzs7SUFDaEMsbUNBQTJDOztJQUMzQyx3Q0FBNEI7O0lBQzVCLHlDQUF5RTs7SUFDekUsbUNBQTJDOztJQUMzQyxpQ0FBZ0U7O0lBQ2hFLDJDQUFrRDs7SUFDbEQsa0NBQXlDOztJQUN6QyxtQ0FBMEM7O0lBQzFDLHNDQUEwQjs7SUFDMUIsbUNBQXFCOztJQUNyQiw0Q0FBOEU7Ozs7O0lBRWxFLGlDQUE4Qjs7Ozs7SUFFOUIsdUNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIEhvc3RMaXN0ZW5lcixcclxuICBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCxcclxuICBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQge0NtYWNzQ2FyZFRhYkNvbXBvbmVudH0gZnJvbSAnLi9jbWFjcy1jYXJkLXRhYi5jb21wb25lbnQnO1xyXG5pbXBvcnQge1ZnQVBJfSBmcm9tIFwidmlkZW9ndWxhcjIvY29tcGlsZWQvc3JjL2NvcmUvc2VydmljZXMvdmctYXBpXCI7XHJcbmltcG9ydCB7U291cmNlfSBmcm9tIFwiLi4vY21hY3MtdmlkZW8tcGxheWVyL2NtYWNzLXZpZGVvLXBsYXllci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtEb21TYW5pdGl6ZXJ9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XHJcblxyXG5leHBvcnQgdHlwZSBDbWFjc0NhcmRUeXBlID0gJ2ZpbGUnIHwgJ3NlbGVjdGlvbicgfCAnYWN0aW9uJyB8ICd0ZWFtJyB8ICdwcm9qZWN0JyB8ICdmb2xkZXInIHwgJ21lYXN1cmUnIHwgJ2JpZy1maWxlJyB8ICdub25lJyB8ICd2aWRlbycgfCAndG9kbyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJpZ0ZpbGUge1xyXG4gIHRpdGxlPzogc3RyaW5nO1xyXG4gIGV4dGVuc2lvbj86IHN0cmluZztcclxuICBjcmVhdGVkX2F0Pzogc3RyaW5nO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWNhcmQnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NDYXJkJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1jYXJkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgY21hY3MtY2FyZCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LWNhcmQtbG9hZGluZ10nOiAnbG9hZGluZycsXHJcbiAgICAnW2NsYXNzLmFudC1jYXJkLWJvcmRlcmVkXSc6ICdib3JkZXJlZCcsXHJcbiAgICAnW2NsYXNzLmFudC1jYXJkLWhvdmVyYWJsZV0nOiBcImhvdmVyYWJsZSB8fCBjbWFjc1R5cGUgPT09ICdzZWxlY3Rpb24nXCIsXHJcbiAgICAnW2NsYXNzLmFudC1jYXJkLXR5cGUtaW5uZXJdJzogYHR5cGUgPT09ICdpbm5lcidgLFxyXG4gICAgJ1tjbGFzcy5hbnQtY2FyZC1jb250YWluLXRhYnNdJzogJyEhdGFiJyxcclxuICAgICdbY2xhc3MuY21hY3MtY2FyZC1maWxlcy13cmFwcGVyXSc6IFwiY21hY3NUeXBlID09PSAnZmlsZSdcIixcclxuICAgICdbY2xhc3MuY21hY3MtY2FyZC1tZWFzdXJlLXdyYXBwZXJdJzogXCJjbWFjc1R5cGUgPT09ICdtZWFzdXJlJ1wiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1jYXJkLW1lYXN1cmUtd3JhcHBlci1zZWxlY3RlZF0nOiBcImNtYWNzVHlwZSA9PT0gJ21lYXN1cmUnICYmIHNlbGVjdGVkXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLXNlbGVjdGlvbi1jYXJkXSc6IFwiY21hY3NUeXBlID09PSAnc2VsZWN0aW9uJ1wiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1jYXJkLXNlbGVjdGVkXSc6IFwiY21hY3NUeXBlID09PSAnc2VsZWN0aW9uJyAmJiBzZWxlY3RlZFwiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1jYXJkLWRpc2FibGVkXSc6IFwiY21hY3NUeXBlID09PSAnc2VsZWN0aW9uJyAmJiBkaXNhYmxlZFwiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1hY3Rpb24tY2FyZF0nOiBcImNtYWNzVHlwZSA9PT0gJ2FjdGlvbidcIixcclxuICAgICdbY2xhc3MuY21hY3MtYmlnLWZpbGUtY2FyZF0nOiBcImNtYWNzVHlwZSA9PT0gJ2JpZy1maWxlJ1wiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1iaWctZmlsZS1jYXJkLXNlbGVjdGVkXSc6IFwiY21hY3NUeXBlID09PSAnYmlnLWZpbGUnICYmIHNlbGVjdGVkXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLWFjdGlvbi1jYXJkLWRpc2FibGVkXSc6IFwiY21hY3NUeXBlID09PSAnYWN0aW9uJyAmJiBkaXNhYmxlZFwiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1pbmZvcm1hdGlvbi1jYXJkXSc6IFwiY21hY3NUeXBlID09PSAndGVhbSdcIixcclxuICAgICdbY2xhc3MuY21hY3MtdGVhbS1jYXJkXSc6IFwiY21hY3NUeXBlID09PSAncHJvamVjdCdcIixcclxuICAgICdbY2xhc3MuY21hY3MtdmlkZW8tcGxheWVyLWNhcmRdJzogXCJjbWFjc1R5cGUgPT09ICd2aWRlbydcIixcclxuICAgICdbY2xhc3MuY21hY3MtdG9kby1jYXJkXSc6IFwiY21hY3NUeXBlID09PSAndG9kbydcIixcclxuICAgICdbY2xhc3MuY21hY3MtdG9kby1jYXJkLXNlbGVjdGVkXSc6IFwiY21hY3NUeXBlID09PSAndG9kbycgJiYgc2VsZWN0ZWRcIixcclxuICAgICdbY2xhc3MuY21hY3MtdGVhbS1jYXJkLXNlbGVjdGVkXSc6IFwiY21hY3NUeXBlID09PSAncHJvamVjdCcgJiYgc2VsZWN0ZWRcIixcclxuICAgICdbY2xhc3MuY21hY3MtY2FyZC1maWxlcy1mb2xkZXJzLXdyYXBwZXJdJzogXCJjbWFjc1R5cGUgPT09ICdmb2xkZXInXCIsXHJcbiAgICAnW2NsYXNzLmZpbGUtY2FyZC1zZWxlY3RlZF0nOiBcImNtYWNzVHlwZSA9PT0gJ2ZvbGRlcicgJiYgc2VsZWN0ZWRcIlxyXG4gIH0sXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtY2FyZC5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0NhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgZm9sZGVySWNvbiA9ICdmb2xkZXInO1xyXG4gIGlzRWRpdGFibGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYm9yZGVyZWQgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBvcGVuZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZWRpdGFibGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaXNSYWRpbyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsb2FkaW5nID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGhvdmVyYWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNvdXJjZXM6IFNvdXJjZVtdO1xyXG4gIEBPdXRwdXQoKSBwbGF5ZXJSZWFkeTogRXZlbnRFbWl0dGVyPFZnQVBJPiA9IG5ldyBFdmVudEVtaXR0ZXI8VmdBUEk+KCk7XHJcbiAgQElucHV0KCkgYm9keVN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG4gIEBJbnB1dCgpIGNvdmVyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBib2R5OiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBhY3Rpb25zOiBBcnJheTxUZW1wbGF0ZVJlZjx2b2lkPj4gPSBbXTtcclxuICBASW5wdXQoKSB0ZWFtOiBhbnkgPSBbXTtcclxuICBASW5wdXQoKSBmaWxlOiBCaWdGaWxlID0gbnVsbDtcclxuICBASW5wdXQoKSBwcm9qZWN0OiBhbnkgPSBbXTtcclxuICBASW5wdXQoKSB0b2RvOiBhbnk7XHJcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGNtYWNzVHlwZTogQ21hY3NDYXJkVHlwZSA9ICdub25lJztcclxuICBASW5wdXQoKSBjbWFjc0ljb246IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBsYWJlbFRpdGxlOiBzdHJpbmc7XHJcbiAgQE91dHB1dCgpIHRpdGxlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4gIEBJbnB1dCgpIGV4dHJhOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBAQ29udGVudENoaWxkKENtYWNzQ2FyZFRhYkNvbXBvbmVudCkgdGFiOiBDbWFjc0NhcmRUYWJDb21wb25lbnQ7XHJcbiAgQE91dHB1dCgpIG9uZGxjbGlja0NhcmQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb3BlbiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBJbnB1dCgpIHNlbGVjdGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgdmFsdWUgOiBhbnk7XHJcbiAgQE91dHB1dCgpIHNlbGVjdGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICAgICAgICAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXHJcbiAgICAgICAgICAgICAgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWNhcmQnKTtcclxuICB9XHJcblxyXG4gIG9wZW5NYWlsKCRldmVudDogRXZlbnQpIHtcclxuICAgICRldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgbGluayA9IGBtYWlsdG86ICR7dGhpcy5wcm9qZWN0LnRlYW1MZWFkLmVtYWlsfWA7XHJcbiAgICBsb2NhdGlvbi5ocmVmID0gbGluaztcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKHRoaXMuY21hY3NUeXBlID09PSAnZm9sZGVyJykge1xyXG4gICAgICB0aGlzLmZvbGRlckljb24gPSB0aGlzLm9wZW5lZCA/ICdmb2xkZXItb3BlbicgOiAnZm9sZGVyJztcclxuICAgIH1cclxuICAgIHRoaXMuaXNFZGl0YWJsZSA9IHRoaXMuZWRpdGFibGU7XHJcbiAgfVxyXG5cclxuICBvblBsYXllclJlYWR5KGFwaTogVmdBUEkpIHtcclxuICAgIHRoaXMucGxheWVyUmVhZHkuZW1pdChhcGkpO1xyXG4gIH1cclxuXHJcblxyXG4gIGNoZWNrUmFkaW8oKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZCk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pIG9uQ2xpY2soZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICB0aGlzLnNlbGVjdChldmVudCk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkYmxjbGljaycsIFsnJGV2ZW50J10pIG9uRGJsQ2xpY2soZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5jbWFjc1R5cGUgPT09ICdmb2xkZXInKSB7XHJcbiAgICAgIHRoaXMuZm9sZGVySWNvbiA9IHRoaXMuZm9sZGVySWNvbiA9PT0gJ2ZvbGRlcicgPyAnZm9sZGVyLW9wZW4nIDogJ2ZvbGRlcic7XHJcbiAgICAgIHRoaXMub3BlbmVkID0gIXRoaXMub3BlbmVkO1xyXG4gICAgICBpZiAodGhpcy5vcGVuZWQpIHtcclxuICAgICAgICB0aGlzLm9wZW4uZW1pdCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY2xvc2UuZW1pdCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jbWFjc1R5cGUgPT09ICdwcm9qZWN0Jyl7XHJcbiAgICAgIHRoaXMub25kbGNsaWNrQ2FyZC5lbWl0KHRoaXMucHJvamVjdCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtYXJrRm9yQ2hlY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdChldmVudDogRXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICBpZiAoIXRoaXMuaXNSYWRpbykge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSAhdGhpcy5zZWxlY3RlZDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZCA/IHRoaXMuc2VsZWN0ZWQgOiAhdGhpcy5zZWxlY3RlZDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVFbnRlcihldmVudDogS2V5Ym9hcmRFdmVudCwgdGl0bGVDb250YWluZXIsIHRpdGxlU3Bhbikge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgdGl0bGVDb250YWluZXIuc3R5bGUudGV4dE92ZXJmbG93ID0gJ2VsbGlwc2lzJztcclxuICAgICAgY29uc3QgdGV4dCA9IHRpdGxlU3Bhbi5pbm5lclRleHQucmVwbGFjZSgvKFxcclxcbnxcXG58XFxyKS9nbSxcIlwiKTtcclxuICAgICAgdGl0bGVTcGFuLmlubmVyVGV4dCA9IHRleHQ7XHJcbiAgICAgIHRoaXMuaXNFZGl0YWJsZSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnRpdGxlQ2hhbmdlLmVtaXQodGV4dCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVFZGl0KGV2ZW50OiBLZXlib2FyZEV2ZW50LCB0aXRsZVNwYW4pIHtcclxuICAgIGNvbnN0IHRleHQgPSB0aXRsZVNwYW4uaW5uZXJUZXh0LnJlcGxhY2UoLyhcXHJcXG58XFxufFxccikvZ20sXCJcIik7XHJcbiAgICB0aGlzLnRpdGxlQ2hhbmdlLmVtaXQodGV4dCk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVFZGl0KHRpdGxlQ29udGFpbmVyKSB7XHJcbiAgICB0aGlzLmlzRWRpdGFibGUgPSB0aGlzLmVkaXRhYmxlO1xyXG4gICAgaWYgKHRoaXMuaXNFZGl0YWJsZSl7XHJcbiAgICAgIHRpdGxlQ29udGFpbmVyLnN0eWxlLnRleHRPdmVyZmxvdyA9ICdpbml0aWFsJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEluaXRpYWxzKG5hbWU6IGFueSkge1xyXG4gICAgbGV0IGluaXRpYWxzID0gbmFtZS5tYXRjaCgvXFxiXFx3L2cpIHx8IFtdO1xyXG4gICAgaW5pdGlhbHMgPSAoKGluaXRpYWxzLnNoaWZ0KCkgfHwgJycpICsgKGluaXRpYWxzLnBvcCgpIHx8ICcnKSkudG9VcHBlckNhc2UoKTtcclxuICAgIHJldHVybiBpbml0aWFscztcclxuICB9XHJcblxyXG4gIGdldEJhY2tncm91bmRJbWFnZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoJ3VybChcXCcnICsgdGhpcy5wcm9qZWN0LnByb2plY3RJbWFnZSArICdcXCcpJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==