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
/**
 * @record
 */
export function Weather() { }
if (false) {
    /** @type {?|undefined} */
    Weather.prototype.temp;
    /** @type {?|undefined} */
    Weather.prototype.temp_min;
    /** @type {?|undefined} */
    Weather.prototype.temp_max;
    /** @type {?|undefined} */
    Weather.prototype.humidity;
    /** @type {?|undefined} */
    Weather.prototype.description;
    /** @type {?|undefined} */
    Weather.prototype.icon;
    /** @type {?|undefined} */
    Weather.prototype.clouds_all;
    /** @type {?|undefined} */
    Weather.prototype.wind_speed;
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
        this.goToModule = new EventEmitter();
        this.iconToDoClick = new EventEmitter();
        this.tapTimeoutHandler = null;
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
            this.folderIcon = this.opened ? this.cmacsIconOpenedFolder : this.cmacsIconClosedFolder;
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
        if (!this.useDefaultContent || this.cmacsType === 'big-file') {
            this.select(event);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDblClick(event) {
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
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onTouchStart($event) {
        $event.preventDefault();
        if (!this.tapTimeoutHandler) {
            this.tapTimeoutHandler = setTimeout((/**
             * @return {?}
             */
            () => {
                this.onClick($event);
                this.tapTimeoutHandler = null;
            }), 300);
        }
        else {
            clearTimeout(this.tapTimeoutHandler);
            this.tapTimeoutHandler = null;
            this.onDblClick($event);
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
    /**
     * @param {?} icon
     * @return {?}
     */
    iconsToDoClick(icon) {
        this.iconToDoClick.next({ icon, id: this.todo.UniqueId });
    }
    /**
     * @param {?} event
     * @param {?} url
     * @return {?}
     */
    goToModuleToDo(event, url) {
        event.preventDefault();
        event.stopPropagation();
        this.goToModule.emit(url);
    }
}
CmacsCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmacs-card',
                exportAs: 'cmacsCard',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                template: "<ng-template #content>\r\n  <ng-content></ng-content>\r\n</ng-template>\r\n\r\n<div class=\"ant-card-head\"\r\n  *ngIf=\"(title || extra || tab ) && (cmacsType === 'none' || cmacsType === 'team' || cmacsType === 'project')\">\r\n  <div class=\"ant-card-head-wrapper\">\r\n    <div class=\"ant-card-head-title\" *ngIf=\"title\">\r\n      <ng-container *cmacsStringTemplateOutlet=\"title\">{{ title }}</ng-container>\r\n    </div>\r\n    <div class=\"ant-card-extra\" *ngIf=\"extra\">\r\n      <ng-container *cmacsStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\r\n    </div>\r\n  </div>\r\n  <ng-container *ngIf=\"tab\">\r\n    <ng-template [ngTemplateOutlet]=\"tab.template\"></ng-template>\r\n  </ng-container>\r\n</div>\r\n\r\n<!-- selection card for project creation -->\r\n<div class=\"ant-card-cover\" *ngIf=\"cover || cmacsType === 'selection' || cmacsType === 'action'\">\r\n  <ng-template [ngTemplateOutlet]=\"cover\"></ng-template>\r\n  <ng-container *ngIf=\"cmacsType === 'selection'\">\r\n    <label cmacs-radio [(ngModel)]=\"selected\" (ngModelChange)=\"checkRadio()\"\r\n      [disabled]=\"disabled\">{{labelTitle}}</label>\r\n    <ng-template [ngTemplateOutlet]=\"body\"></ng-template>\r\n  </ng-container>\r\n</div>\r\n\r\n<div class=\"ant-card-body\" [ngStyle]=\"bodyStyle\">\r\n  <ng-container *ngIf=\"!loading\">\r\n\r\n    <!-- weather card -->\r\n    <ng-container *ngIf=\"cmacsType === 'weather'\">\r\n      <span class=\"cmacs-weather-card-temp\">{{weather.temp + '\u00B0C'}}</span>\r\n      <img class=\"cmacs-weather-card-cloud-img\" [src]=\"'/assets/cloud.png'\">\r\n\r\n      <div class=\"cmacs-weather-card-description-wrapper\">\r\n        <span class=\"cmacs-weather-card-description\">{{weather.description}}</span>\r\n        <span class=\"cmacs-weather-card-temp-min-max\">\r\n          <span>{{weather.temp_min + '\u00B0 / '}}</span>\r\n          <span>{{weather.temp_max + '\u00B0'}}</span>\r\n        </span>\r\n      </div>\r\n\r\n      <div class=\"cmacs-weather-col-1-3\"><i class=\"iconUILarge-Rain\"></i></div>\r\n      <div class=\"cmacs-weather-col-1-3\"><i class=\"iconUILarge-Humidity\"></i></div>\r\n      <div class=\"cmacs-weather-col-1-3\"><i class=\"iconUILarge-Wind\"></i></div>\r\n      <div class=\"cmacs-weather-col-1-3\">{{weather.clouds_all + '%'}}</div>\r\n      <div class=\"cmacs-weather-col-1-3\">{{weather.humidity + '%'}}</div>\r\n      <div class=\"cmacs-weather-col-1-3\">{{weather.wind_speed + ' Km/H'}}</div>\r\n    </ng-container>\r\n\r\n    <!-- to do card -->\r\n    <ng-container *ngIf=\"cmacsType === 'todo'\">\r\n      <div class=\"todo-card-header\" nz-row>\r\n        <div *ngIf=\"todo.UniqueId\" nz-col nzSpan=\"12\">\r\n          <span>{{todo.UniqueId}}</span>\r\n        </div>\r\n        <div *ngIf=\"todo.date\" nz-col nzSpan=\"6\"  nzOffset=\"4\" class=\"cmacs-todo-card-date\">\r\n          <span [class.cmacs-todo-card-overdue]=\"todo.isOverdue\">{{todo.date}}</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"todo-card-content\">\r\n        <div class=\"cmacs-todo-card-title\">\r\n          <span [class.cmacs-todo-card-overdue]=\"todo.isOverdue\">{{todo.title}}</span>\r\n        </div>\r\n        <div *ngIf=\"todo.project\" class=\"cmacs-todo-card-project\">\r\n          <span>{{todo.project}}</span>\r\n        </div>\r\n        <div nz-row class=\"cmacs-todo-card-action\">\r\n          <!-- user icon -->\r\n          <div nz-col nzSpan=\"5\" *ngIf=\"!todo.isTeam\"  class=\"cmacs-todo-card-person\">\r\n            <ng-container [ngIf]=\"todoUserAssigned\" *ngTemplateOutlet=\"todoUserAssigned; context: {id: todo.userAssignedId, name: todo.userAssignedName}\"></ng-container>\r\n            <a *ngIf=\"!todoUserAssigned\"><i class=\"iconCreation-User\"></i></a>\r\n          </div>\r\n          <!-- team icon -->\r\n          <div nz-col nzSpan=\"5\" *ngIf=\"todo.isTeam\" class=\"cmacs-todo-card-team\">\r\n            <a><i class=\"iconUILarge-Team\"></i></a>\r\n          </div>\r\n          <!-- flag icon -->\r\n          <div nz-col nzSpan=\"5\" *ngIf=\"todo.hasPriorityFlag\" class=\"cmacs-todo-card-priority\">\r\n            <a [style.color]=\"todo.stateColor\"><i nz-icon [type]=\"'flag'\"></i></a>\r\n          </div>\r\n          <!-- link icon -->\r\n          <div nz-col nzSpan=\"5\" *ngIf=\"todo.association\" class=\"cmacs-todo-card-association\">\r\n            <span (click)=\"goToModuleToDo($event, todo.link)\"><i class=\"iconUILarge-Link\"></i></span>\r\n          </div>\r\n          <!-- attachments icon -->\r\n          <div nz-col nzSpan=\"5\" *ngIf=\"todo.attachments\" (click)=\"iconsToDoClick('attachments')\" class=\"cmacs-todo-card-attachments\">\r\n            <span>{{todo.attachments}}</span>\r\n            <a><i class=\"iconUILarge-Attached\"></i></a>\r\n          </div>\r\n          <!-- comments icon -->\r\n          <div nz-col nzSpan=\"4\" *ngIf=\"todo.comments\" (click)=\"iconsToDoClick('comments')\" class=\"cmacs-todo-card-comments\">\r\n            <span>{{todo.comments}}</span>\r\n            <a><i class=\"iconUILarge-Comments\"></i></a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <!-- files -->\r\n    <ng-container *ngIf=\"cmacsType === 'big-file'\">\r\n      <div class=\"cmacs-card-big-file-meta\">\r\n        <ng-container *ngIf=\"!useDefaultContent\">\r\n          <div class=\"cmacs-card-big-file-icon-wrapper\">\r\n            <a><i class=\"{{cmacsIcon}}\"></i></a>\r\n          </div>\r\n          <div class=\"cmacs-card-big-file-extension-wrapper\">\r\n            <span>{{file.extension}}</span>\r\n          </div>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"useDefaultContent\">\r\n          <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\r\n        </ng-container>\r\n      </div>\r\n      <div class=\"cmacs-card-big-file-description\">\r\n        <div class=\"cmacs-card-big-file-description-left-panel\">\r\n          <div class=\"cmacs-card-big-file-title\">\r\n            <span>{{file.title}}</span>\r\n          </div>\r\n          <div class=\"cmacs-card-big-file-date\">\r\n            <span>{{file.created_at}}</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"cmacs-card-big-file-description-right-panel\">\r\n          <div class=\"cmacs-card-big-file-extra\" *ngIf=\"extra\">\r\n            <ng-container *cmacsStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <!-- videos -->\r\n    <ng-container *ngIf=\"cmacsType === 'video'\">\r\n      <div class=\"cmacs-card-video-player-wrapper\">\r\n        <cmacs-video-player [sources]=\"sources\" (playerReady)=\"onPlayerReady($event)\"></cmacs-video-player>\r\n      </div>\r\n      <div class=\"cmacs-card-video-description\">\r\n        <div class=\"cmacs-card-video-title\">\r\n          <span>{{title}}</span>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <!-- files card for recent panel-->\r\n    <ng-container *ngIf=\"cmacsType === 'file'\">\r\n      <div class=\"cmacs-card-files-icon-wrapper\">\r\n        <a><i class=\"{{cmacsIcon}}\"></i></a>\r\n      </div>\r\n      <div class=\"cmacs-card-label-recent\">\r\n        <span>{{title}}</span>\r\n      </div>\r\n      <div class=\"cmacs-card-file-extra\" *ngIf=\"extra\">\r\n        <ng-container *cmacsStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <!-- radio card -->\r\n    <ng-container *ngIf=\"cmacsType === 'measure'\">\r\n      <div class=\"cmacs-card-measure-icon-wrapper\">\r\n        <a class=\"iconspan\"><i class=\"iconUILarge-Ruler\"></i></a>\r\n      </div>\r\n      <div class=\"cmacs-card-label-measure\">\r\n        <span>{{title}}</span>\r\n      </div>\r\n    </ng-container>\r\n\r\n\r\n    <ng-container *ngIf=\"cmacsType === 'none' || cmacsType === 'selection' || cmacsType === 'action'\">\r\n      <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\r\n    </ng-container>\r\n\r\n\r\n    <!-- team card -->\r\n    <ng-container *ngIf=\"cmacsType === 'team'\">\r\n      <ng-container *ngIf=\"useDefaultContent\">\r\n        <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"!useDefaultContent\">\r\n        <div style=\"margin-bottom: 20px; min-height: 25px; display: inline-flex\">\r\n          <div class=\"team-person-card\" *ngFor=\"let person of team; index as i\"\r\n            [style.backgroundColor]=\"!person.image ? '#ffa800' : '#c7f5ff'\"\r\n            [style.display]=\"(i >= 4 && team.length > 5) ? 'none' : 'inline-flex' \">\r\n            <img width=\"30px\" height=\"30px\" *ngIf=\"person.image\" [src]=\"person.image\">\r\n            <span *ngIf=\"!person.image\">{{getInitials(person.name)}}</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"plus-team-card\" *ngIf=\"team.length > 5\">+{{team.length - 4}}</div>\r\n        <ng-content select=\"[cmacs-action-panel]\"></ng-content>\r\n      </ng-container>\r\n    </ng-container>\r\n\r\n    <!-- project -->\r\n    <ng-container *ngIf=\"cmacsType === 'project'\">\r\n      <div class=\"projectimagecontainer\">\r\n        <div class=\"project-image\" *ngIf=\"project.projectImage !== ''\" [style.background-image]=\"getBackgroundImage()\">\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"project.projectImage === ''\" class=\"cmacs-proj-card-div-Logo\">\r\n        <span class=\"cmacs-proj-card-text-Logo\">{{getInitials(project.name)}}</span>\r\n      </div>\r\n      <cmacs-tag class=\"project-status\" [cmacsGridType]=\"project.statusTag\">{{project.status}}</cmacs-tag>\r\n      <div class=\"project-dates-wrapper\">\r\n        <span class=\"project-dates-title\">Project Dates</span>\r\n        <span class=\"project-dates project-dates-date\">{{project.startDate}}</span>\r\n        <a class=\"iconspan\"><i class=\"iconArrowLarge-Arrow-Right project-dates\"></i></a>\r\n        <span class=\"project-dates project-dates-date\">{{project.endDate}}</span>\r\n      </div>\r\n      <div class=\"project-card-progress-bar\">\r\n        <div class=\"project-card-progress-bar-inner\" [style.width]=\"project.completion\"></div>\r\n      </div>\r\n      <div class=\"project-manager-details\">\r\n        <img *ngIf=\"project.teamLead.avatar\" class=\"manager-avatar\" width=\"30px\" height=\"30px\"\r\n          [src]=\"project.teamLead.avatar\">\r\n        <span *ngIf=\"!project.teamLead.avatar || project.teamLead.avatar === ''\"\r\n          class=\"cmacs-proj-avatar-text\">{{getInitials(project.teamLead.name)}}</span>\r\n        <div class=\"project-manager-metadata\">\r\n          <div class=\"manager-name\">\r\n            {{ (project.teamLead.name.length > 20)? (project.teamLead.name | slice:0:20)+'...':(project.teamLead.name) }}\r\n          </div>\r\n          <div class=\"manager-charge\">\r\n            {{ (project.teamLead.charge.length > 20)? (project.teamLead.charge | slice:0:20)+'...':(project.teamLead.charge) }}\r\n          </div>\r\n        </div>\r\n        <a (click)=\"openMail($event)\" class=\"iconspan project-email-icon\"><i class=\"iconUILarge-Message\"></i></a>\r\n      </div>\r\n    </ng-container>\r\n\r\n<!-- folders default  -->\r\n    <ng-container *ngIf=\"cmacsType === 'folder'\">\r\n      <ng-container *ngIf=\"useDefaultContent\">\r\n        <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"!useDefaultContent\">\r\n        <div class=\"card-files-folders-icon-wrapper\">\r\n          <a class=\"iconspan\"><i [class]=\"folderIcon\"></i></a>\r\n        </div>\r\n        <div #titleContainer (click)=\"toggleEdit(titleContainer)\" class=\"card-files-folders-label\">\r\n          <span #name (keydown.enter)=\"handleEnter($event, titleContainer, name)\" (keyup)=\"handleEdit($event, name)\"\r\n            [attr.contentEditable]=\"isEditable\">{{title}}</span>\r\n        </div>\r\n        <div class=\"card-files-folder-extra iconspan\" *ngIf=\"extra\">\r\n          <ng-container *cmacsStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\r\n        </div>\r\n      </ng-container>\r\n    </ng-container>\r\n  </ng-container>\r\n\r\n  <cmacs-card-loading *ngIf=\"loading\"></cmacs-card-loading>\r\n</div>\r\n\r\n\r\n<ul class=\"ant-card-actions\" *ngIf=\"actions.length\">\r\n  <li *ngFor=\"let action of actions\" [style.width.%]=\"100 / actions.length\">\r\n    <span>\r\n      <ng-template [ngTemplateOutlet]=\"action\"></ng-template>\r\n    </span>\r\n  </li>\r\n</ul>\r\n",
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
                    '[class.cmacs-weather-card]': "cmacsType === 'weather'",
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
                styles: [`cmacs-card {
        display: block;
      }
    `, ".cmacs-weather-card{width:318px;height:218px;border-radius:10px;background-color:#fff;border-color:transparent;box-shadow:0 2px 4px rgba(0,0,0,.1)}.cmacs-weather-card .ant-card-body{padding-top:35px}.cmacs-weather-card-cloud-img{width:75px;height:auto;float:right}.cmacs-weather-card-temp-min-max{font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;color:#97a0ae;margin-left:10px}.cmacs-weather-card-description-wrapper{margin-top:14px;margin-bottom:28px}.cmacs-weather-card-description{font-family:Roboto-Regular;font-size:14px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.43;letter-spacing:normal;color:#656c79}.cmacs-weather-col-1-3 i{font-size:22px}.cmacs-weather-col-1-3{width:33.3333%;display:inline-block;text-align:center;font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;color:#3b3f46}.cmacs-weather-card-temp{font-family:Roboto-Regular;font-size:24px;font-weight:500;font-stretch:normal;font-style:normal;line-height:2.08;letter-spacing:normal;color:#3b3f46}.ant-card,.ant-card-head{font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79}.ant-card-extra,.ant-card-head-title{padding:0;font-size:12px;font-weight:500;font-family:Roboto-Medium}.ant-card-head{min-height:40px;padding:12px}.ant-card-grid{font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79;cursor:pointer}.card-list-row .ant-card-grid>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block}.cmacs-card-title{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cmacs-card-shared-I .cmacs-card-title{width:100%}.cmacs-card-left-panel label.cmacs-checkbox-card{float:left}.cmacs-card-shared-II .cmacs-card-title{width:calc(100% - 40px);left:80px}.cmacs-card-person-info-II{display:-webkit-box;display:flex}.cmacs-card-shared-III .cmacs-card-title{width:calc(100% - 60px)}.cmacs-card-files-wrapper{width:223px;height:36px;border:none}.cmacs-card-measure-wrapper{width:223px;height:36px;border:1px solid #dee0e5}.cmacs-card-label-measure{padding:6px 20px;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;vertical-align:middle;width:calc(100% - 35px)}.cmacs-card-measure-wrapper-selected,.cmacs-card-measure-wrapper:hover{border-color:#2a7cff;cursor:pointer;box-shadow:0 6px 10px 0 rgba(0,0,0,.15)}.cmacs-card-measure-wrapper-selected .cmacs-card-measure-icon-wrapper,.cmacs-card-measure-wrapper:hover .cmacs-card-measure-icon-wrapper{border-right-color:#2a7cff}.cmacs-card-measure-wrapper-selected .cmacs-card-measure-icon-wrapper i,.cmacs-card-measure-wrapper:hover .cmacs-card-measure-icon-wrapper i{color:#2a7cff}.cmacs-card-files-wrapper:hover{background-color:#f6f7fb;cursor:pointer}.cmacs-card-files-wrapper .ant-card-body,.cmacs-card-measure-wrapper .ant-card-body{padding:0;width:100%}.cmacs-card-files-wrapper div,.cmacs-card-measure-wrapper div{display:inline-block}.cmacs-card-files-icon-wrapper{width:36px;height:36px;border-radius:3px;box-shadow:0 6px 10px 0 rgba(0,0,0,.15);background-color:#fff;margin-right:16px;text-align:center;position:relative;top:-8px}.cmacs-card-measure-icon-wrapper{background-color:#fff;text-align:center;padding:7px;border-right:1px solid #dee0e5}.cmacs-card-measure-icon-wrapper i{color:#dee0e5}.cmacs-card-files-icon-wrapper i{color:#fb3147!important;font-size:18px;top:23%;position:relative}.cmacs-card-file-extra{font-size:22px;float:right;margin-top:2px;margin-right:5px}.cmacs-card-file-extra i{color:#bec4cd!important}.cmacs-card-label-recent{padding:10px 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:calc(100% - 96px);vertical-align:middle}.cmacs-selection-card{height:100%}.cmacs-selection-card .ant-card-cover{padding:15px}.cmacs-selection-card .ant-card-body{padding:10px 10px 30px;text-align:center;font-size:12px}.cmacs-selection-card .ant-card-meta-description{color:#656c79}.cmacs-selection-card.ant-card-hoverable:hover:not(.cmacs-card-disabled){border:1px solid #bec4cd;box-shadow:0 6px 10px rgba(59,63,70,.15)}.cmacs-selection-card.ant-card-hoverable:hover:not(.cmacs-card-disabled) .ant-radio-inner{border-color:#bec4cd}.cmacs-card-selected,.cmacs-card-selected:hover,.cmacs-card-selected:hover .ant-radio-inner{border-color:#2a7cff!important}.ant-radio-disabled .ant-radio-inner,.ant-radio-disabled .ant-radio-input,.ant-radio-disabled+span,.ant-radio.ant-radio-disabled,input[type=radio][disabled]{cursor:default}.cmacs-card-disabled:hover .ant-radio-inner{border-color:#dee0e5!important;cursor:default;background-color:#f3f3f4}.cmacs-card-selected .ant-card-meta-description{color:#2a7cff!important}.cmacs-card-disabled,.cmacs-card-disabled:hover{border-color:#dee0e5;cursor:default;box-shadow:none}.cmacs-card-disabled .ant-card-meta-description{color:#97a0ae!important}.cmacs-action-card{border:none;margin-left:auto;margin-right:auto;min-width:131px}.cmacs-action-card:hover{cursor:pointer}.cmacs-action-card-disabled:hover{cursor:default}.cmacs-action-card:hover .ant-card-meta-title{color:#2164c9}.cmacs-action-card .ant-card-meta-description{text-align:center;color:#acb3bf}.cmacs-action-card .ant-card-body{padding:13px}.cmacs-action-card .ant-card-meta-title{color:#2a7cff;white-space:normal;text-align:center;font-size:12px;padding-top:18px}.cmacs-action-card-disabled .ant-card-meta-title,.cmacs-action-card-disabled:hover .ant-card-meta-title{color:#97a0ae}.cmacs-information-card.ant-card-bordered{border-color:#dee0e5}.cmacs-information-card .ant-card-head{min-height:30px}.cmacs-information-card .cmacs-btn-action{border-color:#dee0e5}.cmacs-information-card:hover .cmacs-btn-action,.cmacs-information-card:hover .cmacs-btn-action span i{color:#2a7cff!important}.cmacs-information-card .ant-card-body{padding:20px 10px}.cmacs-information-card .team-person-card{width:30px;height:30px;border-radius:3px;display:-webkit-inline-box;display:inline-flex;margin-right:12px}.cmacs-information-card .team-person-card:last-child{margin-right:0}.cmacs-information-card .plus-team-card{width:30px;height:30px;border-radius:3px;display:-webkit-inline-box;display:inline-flex;background-color:#dae8ff;color:#2a7cff;position:relative;top:-10px;font-size:13px;padding:5px 7px}.cmacs-information-card .team-person-card span{width:30px;height:30px;padding:6px 8px;color:#fff}.iconspan i{font-size:16px;position:relative;height:16px;width:16px;display:inline-block;vertical-align:text-top}.iconspan{height:20px;width:20px;text-align:center;vertical-align:middle;display:inline-block}.cmacs-team-card.ant-card-bordered{border-color:#dee0e5}.cmacs-team-card.ant-card-bordered:hover{box-shadow:0 6px 10px rgba(59,63,70,.15)}.cmacs-team-card-selected.ant-card-bordered{border-color:#2a7cff}.cmacs-team-card .ant-card-head{min-height:30px}.cmacs-team-card .ant-card-body{padding:0}.project-card-progress-bar-inner{height:5px;background-color:#2a7cff;border-radius:5px}.project-card-progress-bar{height:5px;background-color:#dee0e5;border-radius:5px;width:83%;margin:0 auto}.project-dates{display:inline-block}.project-status{position:relative;top:-36px;left:18px}.project-dates-wrapper{padding:0 20px;margin-top:-10px;margin-bottom:10px}.project-dates-title{color:#97a0ae;display:block;margin-bottom:5px}.project-dates-date{color:#656c79}.project-dates-wrapper a{margin-left:10px;margin-right:10px}.project-manager-metadata{display:inline-block;margin-left:10px;margin-right:10px}.manager-name{font-family:Roboto-Medium;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:1.33;letter-spacing:normal;color:#97a0ae;max-width:111px;width:111px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;position:relative}.manager-charge{color:#acb3bf;max-width:111px;width:111px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;position:relative}.project-manager-details{margin:20px}.manager-avatar{display:inline-block;border-radius:3px;font-size:12px;color:#fff;text-align:center;line-height:1.33;float:left}.project-manager-details i{color:#656c79}.project-email-icon{float:right}.cmacs-card-files-folders-wrapper{height:48px;background-color:#fff;border:1px solid #dee0e5;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer!important}.card-files-uploading-wrapper{width:170px;height:48px;background-color:#f3f3f4;border:1px solid #dee0e5}.cmacs-card-files-folders-wrapper:hover{background-color:#f6f7fb;cursor:pointer}.file-card-selected,.file-card-selected:hover{background-color:#f2f7ff;border-color:#2a7cff}.cmacs-card-files-folders-wrapper:hover .card-files-folders-label{color:#2a7cff}.cmacs-card-files-folders-wrapper:hover .card-files-folder-extra a{opacity:1}.card-files-folder-extra{display:inline-block;font-size:20px}.card-files-folder-extra a{opacity:0}.card-files-folders-label{width:calc(100% - 50px);display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.card-files-uploading-wrapper .ant-card-body,.cmacs-card-files-folders-wrapper .ant-card-body{padding:14px 10px}.card-files-folders-icon-wrapper{margin-right:10px;display:inline-block;vertical-align:middle}.card-files-uploading-wrapper i,.cmacs-card-files-folders-wrapper i{color:#656c79!important}.card-files-progress-bar-inner{height:5px;background-color:#2a7cff;border-radius:5px}.card-files-progress-bar{height:5px;background-color:#dee0e5;border-radius:5px;margin-top:7px}.cmacs-big-file-card{width:243px;border:none;overflow:hidden}.cmacs-big-file-card .ant-card-body{padding:0}.cmacs-card-big-file-meta{border:1px solid #dee0e5;-webkit-transition:.3s;transition:.3s}.cmacs-big-file-card::before{content:' ';width:40px;height:21px;background-color:#fff;position:absolute;left:calc(100% - 26px);-webkit-transform:rotate(45deg);transform:rotate(45deg);top:-4px;border-bottom:1px solid #dee0e5;-webkit-transition:.3s;transition:.3s}.cmacs-card-big-file-icon-wrapper{font-size:22px;margin:0 auto;width:22px;padding-top:60px;padding-bottom:40px}.cmacs-card-big-file-extension-wrapper{text-align:right;padding:0 10px 10px 0;color:#acb3bf}.cmacs-card-big-file-description{height:61px;margin-top:10px;-webkit-transition:.3s;transition:.3s}.cmacs-card-big-file-title{padding:10px 10px 5px;font-size:12px;color:#3b3f46;font-weight:500;-webkit-transition:.3s;transition:.3s;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cmacs-card-big-file-date{padding:0 10px 10px;font-size:12px;color:#acb3bf;font-weight:500}.cmacs-card-big-file-extra{font-size:21px;padding-top:3px;-webkit-transition:.3s;transition:.3s}.cmacs-card-big-file-extra a{color:#656c79;opacity:0;-webkit-transition:.3s;transition:.3s}.cmacs-card-big-file-description-left-panel{width:90%;float:left}.cmacs-card-big-file-description-right-panel{width:10%;float:right}.cmacs-big-file-card:hover{cursor:pointer}.cmacs-big-file-card:hover .cmacs-card-big-file-description{background-color:#f6f7fb}.cmacs-big-file-card:hover .cmacs-card-big-file-title{color:#2a7cff}.cmacs-big-file-card:hover .cmacs-card-big-file-extra a{opacity:1}.cmacs-big-file-card-selected .cmacs-card-big-file-description,.cmacs-big-file-card-selected:hover .cmacs-card-big-file-description{background-color:#f2f7ff}.cmacs-big-file-card-selected .cmacs-card-big-file-meta,.cmacs-big-file-card-selected.cmacs-big-file-card::before{border-color:#2a7cff}.cmacs-card-video-description{color:#3b3f46;font-weight:600;font-size:12px;margin-top:17px}.cmacs-card-video-title{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cmacs-card-video-player-wrapper{width:337px;height:226px;border:1px solid #dee0e5}.cmacs-video-player-card{border:none;width:337px}.cmacs-video-player-card .ant-card-body{padding:0}.cmacs-todo-card-upper-line{width:95%;margin:5px;height:2px;border-radius:100px}.cmacs-todo-card{width:243px}.cmacs-todo-card.ant-card-hoverable:hover{box-shadow:0 6px 10px rgba(59,63,70,.15)}.cmacs-todo-card .ant-card-body{padding:0}.cmacs-todo-card-title{color:#3b3f46;font-size:12px;margin:15px 14px 0;white-space:pre-line;display:-moz-box;display:-webkit-box;-webkit-line-clamp:2;-moz-line-clamp:2;-moz-box-orient:vertical;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.cmacs-todo-card-project{color:#97a0ae;margin:10px 14px 0;font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cmacs-todo-card-date{color:#656c79;background-color:#f6f7fb;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.cmacs-todo-card-action{padding:15px 14px 30px 15px;font-size:14px;position:absolute;bottom:-18px;width:100%}.cmacs-todo-card-attachments,.cmacs-todo-card-comments,.cmacs-todo-card-person,.cmacs-todo-card-team{float:left}.cmacs-todo-card-attachments span,.cmacs-todo-card-comments span{margin-right:3px;color:#2a7cff;font-size:12px}.cmacs-todo-card-priority{float:left}.cmacs-todo-card-attachments a,.cmacs-todo-card-comments a,.cmacs-todo-card-person a,.cmacs-todo-card-team a{color:#656c79}.cmacs-todo-card-project-img{width:241px;height:100px;overflow:hidden}.cmacs-todo-card-project-img img{width:241px}.cmacs-todo-card-selected{border-color:#2a7cff!important}.cmacs-proj-card-text-Logo{font-size:50px;color:#fff;background-color:#ffa800}.cmacs-proj-card-div-Logo{background-color:#ffa800;width:221px;height:107px;text-align:center}.cmacs-proj-avatar-text{height:30px;width:30px;line-height:22px;font-size:11px;border-radius:3px;background:#512da8;color:#fff;text-align:center;cursor:pointer;padding:4px;display:inline-block;float:left}.projectimagecontainer{height:107px;border-top:1px solid #dee0e5;border-bottom:1px solid #dee0e5}.project-image{background-repeat:no-repeat;background-position:center center;background-size:contain;height:100%;width:auto}.cmacs-todo-card-attachments span,.cmacs-todo-card-comments span,.cmacs-todo-card-person a{vertical-align:middle}.cmacs-todo-card-attachments a,.cmacs-todo-card-comments a{vertical-align:sub;font-size:18px}.cmacs-todo-card-team a{font-size:19px;vertical-align:top}.cmacs-todo-card-overdue{color:#f5222d}.cmacs-todo-card-association{float:left;cursor:pointer;font-size:18px}.todo-card-header{padding:12px;border-bottom:1px solid #e8e8e8}.todo-card-content{min-height:110px}"]
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
    weather: [{ type: Input }],
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
    goToModule: [{ type: Output }],
    todoUserAssigned: [{ type: Input }],
    iconToDoClick: [{ type: Output }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }],
    onDblClick: [{ type: HostListener, args: ['dblclick', ['$event'],] }],
    onTouchStart: [{ type: HostListener, args: ['touchstart', ['$event'],] }]
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
    CmacsCardComponent.prototype.weather;
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
    /** @type {?} */
    CmacsCardComponent.prototype.goToModule;
    /** @type {?} */
    CmacsCardComponent.prototype.todoUserAssigned;
    /** @type {?} */
    CmacsCardComponent.prototype.iconToDoClick;
    /** @type {?} */
    CmacsCardComponent.prototype.tapTimeoutHandler;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLWNhcmQvY21hY3MtY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUFFLFlBQVksRUFBYyxZQUFZLEVBQ2xELEtBQUssRUFBcUIsTUFBTSxFQUNoQyxTQUFTLEVBQ1QsV0FBVyxFQUNYLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFHakUsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDJCQUEyQixDQUFDOzs7O0FBTXZELDZCQUlDOzs7SUFIQyx3QkFBZTs7SUFDZiw0QkFBbUI7O0lBQ25CLDZCQUFvQjs7Ozs7QUFHdEIsNkJBU0M7OztJQVJDLHVCQUFjOztJQUNkLDJCQUFrQjs7SUFDbEIsMkJBQWtCOztJQUNsQiwyQkFBa0I7O0lBQ2xCLDhCQUFxQjs7SUFDckIsdUJBQWM7O0lBQ2QsNkJBQW9COztJQUNwQiw2QkFBbUI7O0FBMkNyQixNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7O0lBMkM3QixZQUFvQixHQUFzQixFQUM5QixRQUFtQixFQUNYLFNBQXVCLEVBQy9CLFVBQXNCO1FBSGQsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFFdEIsY0FBUyxHQUFULFNBQVMsQ0FBYztRQTVDM0MsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ00sYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUV6QyxnQkFBVyxHQUF3QixJQUFJLFlBQVksRUFBUyxDQUFDO1FBSTlELFlBQU8sR0FBNkIsRUFBRSxDQUFDO1FBQ3ZDLFNBQUksR0FBUSxFQUFFLENBQUM7UUFDZixTQUFJLEdBQVksSUFBSSxDQUFDO1FBQ3JCLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFJbEIsY0FBUyxHQUFrQixNQUFNLENBQUM7UUFDbEMsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QiwwQkFBcUIsR0FBVyxvQkFBb0IsQ0FBQztRQUNyRCwwQkFBcUIsR0FBVyxvQkFBb0IsQ0FBQztRQUdwRCxnQkFBVyxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBRy9ELGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN4QyxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMvQixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNqQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWhCLG1CQUFjLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFDcEUsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFHeEMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBcURsRCxzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUEvQ3ZCLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUMxRCxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxNQUFhO1FBQ3BCLE1BQU0sQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQzs7Y0FDbEIsSUFBSSxHQUFHLFdBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFO1FBQ3JELFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFFBQVEsRUFBRTtZQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1NBQ3pGO1FBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLEdBQVU7UUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7OztJQUdELFVBQVU7UUFDUixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Ozs7SUFFa0MsT0FBTyxDQUFDLEtBQVk7UUFDckQsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFVBQVUsRUFBRTtZQUM1RCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7Ozs7SUFFcUMsVUFBVSxDQUFDLEtBQVk7UUFDM0QsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUMxRCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1lBQ3hGLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDZixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ2xCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDbkI7U0FDRjtRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLEVBQUM7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQzs7Ozs7SUFJdUMsWUFBWSxDQUFDLE1BQWE7UUFDaEUsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFVBQVU7OztZQUFFLEdBQUcsRUFBRTtnQkFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDckIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztZQUNoQyxDQUFDLEdBQUUsR0FBRyxDQUFFLENBQUM7U0FDVjthQUFNO1lBQ0wsWUFBWSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7WUFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN6QjtJQUNILENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxLQUFZO1FBQ2pCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQ2hDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQ2hFO1lBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQzs7Ozs7OztJQUVELFdBQVcsQ0FBQyxLQUFvQixFQUFFLGNBQWMsRUFBRSxTQUFTO1FBQ3ZELEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUNqQyxjQUFjLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUM7O2NBQ3pDLElBQUksR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBQyxFQUFFLENBQUM7UUFDN0QsU0FBUyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7O0lBRUQsVUFBVSxDQUFDLEtBQW9CLEVBQUUsU0FBUzs7Y0FDbEMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFDLEVBQUUsQ0FBQztRQUM3RCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxjQUFjO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNoQyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUM7WUFDbEIsY0FBYyxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1NBQy9DO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsSUFBUzs7WUFDZixRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO1FBQ3hDLFFBQVEsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0UsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQy9GLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLElBQVk7UUFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDOzs7Ozs7SUFFRCxjQUFjLENBQUMsS0FBVSxFQUFFLEdBQVc7UUFDcEMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV4QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7WUFoTkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsV0FBVztnQkFDckIsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGk0WUFBMEM7Z0JBTzFDLElBQUksRUFBRTtvQkFDSiwwQkFBMEIsRUFBRSxTQUFTO29CQUNyQywyQkFBMkIsRUFBRSxVQUFVO29CQUN2Qyw0QkFBNEIsRUFBRSx3Q0FBd0M7b0JBQ3RFLDZCQUE2QixFQUFFLGtCQUFrQjtvQkFDakQsK0JBQStCLEVBQUUsT0FBTztvQkFDeEMsa0NBQWtDLEVBQUUsc0JBQXNCO29CQUMxRCxvQ0FBb0MsRUFBRSx5QkFBeUI7b0JBQy9ELDZDQUE2QyxFQUFFLHFDQUFxQztvQkFDcEYsOEJBQThCLEVBQUUsMkJBQTJCO29CQUMzRCw2QkFBNkIsRUFBRSx1Q0FBdUM7b0JBQ3RFLDZCQUE2QixFQUFFLHVDQUF1QztvQkFDdEUsMkJBQTJCLEVBQUUsd0JBQXdCO29CQUNyRCw0QkFBNEIsRUFBRSx5QkFBeUI7b0JBQ3ZELDZCQUE2QixFQUFFLDBCQUEwQjtvQkFDekQsc0NBQXNDLEVBQUUsc0NBQXNDO29CQUM5RSxvQ0FBb0MsRUFBRSxvQ0FBb0M7b0JBQzFFLGdDQUFnQyxFQUFFLHNCQUFzQjtvQkFDeEQseUJBQXlCLEVBQUUseUJBQXlCO29CQUNwRCxpQ0FBaUMsRUFBRSx1QkFBdUI7b0JBQzFELHlCQUF5QixFQUFFLHNCQUFzQjtvQkFDakQsa0NBQWtDLEVBQUUsa0NBQWtDO29CQUN0RSxrQ0FBa0MsRUFBRSxxQ0FBcUM7b0JBQ3pFLDBDQUEwQyxFQUFFLHdCQUF3QjtvQkFDcEUsNEJBQTRCLEVBQUUsb0NBQW9DO2lCQUNuRTt5QkE5QkM7OztLQUdDO2FBNkJKOzs7O1lBM0VDLGlCQUFpQjtZQUtqQixTQUFTO1lBUUgsWUFBWTtZQVZsQixVQUFVOzs7dUJBNEVULEtBQUs7cUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3NCQUNMLEtBQUs7c0JBQ0wsS0FBSzt1QkFDTCxLQUFLO3dCQUNMLEtBQUs7Z0NBQ0wsS0FBSztzQkFDTCxLQUFLOzBCQUNMLE1BQU07d0JBQ04sS0FBSztvQkFDTCxLQUFLO21CQUNMLEtBQUs7c0JBQ0wsS0FBSzttQkFDTCxLQUFLO21CQUNMLEtBQUs7c0JBQ0wsS0FBSzttQkFDTCxLQUFLO3NCQUNMLEtBQUs7bUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7b0NBQ0wsS0FBSztvQ0FDTCxLQUFLO29CQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxNQUFNO29CQUNOLEtBQUs7a0JBQ0wsWUFBWSxTQUFDLHFCQUFxQjs0QkFDbEMsTUFBTTttQkFDTixNQUFNO29CQUNOLE1BQU07dUJBQ04sS0FBSztvQkFDTCxLQUFLOzZCQUNMLE1BQU07eUJBQ04sTUFBTTsrQkFDTixLQUFLOzRCQUVMLE1BQU07c0JBZ0NOLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7eUJBTWhDLFlBQVksU0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUM7MkJBaUJuQyxZQUFZLFNBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDOztBQTdGYjtJQUFmLFlBQVksRUFBRTs7b0RBQWlCO0FBQ2hCO0lBQWYsWUFBWSxFQUFFOztrREFBZ0I7QUFDZjtJQUFmLFlBQVksRUFBRTs7b0RBQWtCO0FBQ2pCO0lBQWYsWUFBWSxFQUFFOzttREFBaUI7QUFDaEI7SUFBZixZQUFZLEVBQUU7O21EQUFpQjtBQUNoQjtJQUFmLFlBQVksRUFBRTs7b0RBQWtCO0FBQ2pCO0lBQWYsWUFBWSxFQUFFOztxREFBbUI7QUFDbEI7SUFBZixZQUFZLEVBQUU7OzZEQUEyQjs7O0lBVG5ELHdDQUFnQjs7SUFDaEIsd0NBQW1COztJQUNuQixzQ0FBeUM7O0lBQ3pDLG9DQUF3Qzs7SUFDeEMsc0NBQTBDOztJQUMxQyxxQ0FBeUM7O0lBQ3pDLHFDQUF5Qzs7SUFDekMsc0NBQTBDOztJQUMxQyx1Q0FBMkM7O0lBQzNDLCtDQUFtRDs7SUFDbkQscUNBQTJCOztJQUMzQix5Q0FBdUU7O0lBQ3ZFLHVDQUE4Qzs7SUFDOUMsbUNBQWtDOztJQUNsQyxrQ0FBaUM7O0lBQ2pDLHFDQUFnRDs7SUFDaEQsa0NBQXdCOztJQUN4QixrQ0FBOEI7O0lBQzlCLHFDQUEyQjs7SUFDM0Isa0NBQW1COztJQUNuQixxQ0FBMEI7O0lBQzFCLGtDQUFzQjs7SUFDdEIsdUNBQTJDOztJQUMzQyx1Q0FBZ0M7O0lBQ2hDLG1EQUE4RDs7SUFDOUQsbURBQThEOztJQUM5RCxtQ0FBMkM7O0lBQzNDLHdDQUE0Qjs7SUFDNUIseUNBQXlFOztJQUN6RSxtQ0FBMkM7O0lBQzNDLGlDQUFnRTs7SUFDaEUsMkNBQWtEOztJQUNsRCxrQ0FBeUM7O0lBQ3pDLG1DQUEwQzs7SUFDMUMsc0NBQTBCOztJQUMxQixtQ0FBcUI7O0lBQ3JCLDRDQUE4RTs7SUFDOUUsd0NBQWtEOztJQUNsRCw4Q0FBNkM7O0lBRTdDLDJDQUFrRDs7SUFxRGxELCtDQUF5Qjs7Ozs7SUFuRGIsaUNBQThCOzs7OztJQUU5Qix1Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBIb3N0TGlzdGVuZXIsXHJcbiAgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHtDbWFjc0NhcmRUYWJDb21wb25lbnR9IGZyb20gJy4vY21hY3MtY2FyZC10YWIuY29tcG9uZW50JztcclxuaW1wb3J0IHtWZ0FQSX0gZnJvbSBcInZpZGVvZ3VsYXIyL2NvbXBpbGVkL3NyYy9jb3JlL3NlcnZpY2VzL3ZnLWFwaVwiO1xyXG5pbXBvcnQge1NvdXJjZX0gZnJvbSBcIi4uL2NtYWNzLXZpZGVvLXBsYXllci9jbWFjcy12aWRlby1wbGF5ZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7RG9tU2FuaXRpemVyfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5cclxuZXhwb3J0IHR5cGUgQ21hY3NDYXJkVHlwZSA9ICdmaWxlJyB8ICdzZWxlY3Rpb24nIHxcclxuICAnYWN0aW9uJyB8ICd0ZWFtJyB8ICdwcm9qZWN0JyB8ICdmb2xkZXInIHwgJ21lYXN1cmUnIHwgJ3dlYXRoZXInIHxcclxuICAnYmlnLWZpbGUnIHwgJ25vbmUnIHwgJ3ZpZGVvJyB8ICd0b2RvJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmlnRmlsZSB7XHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgZXh0ZW5zaW9uPzogc3RyaW5nO1xyXG4gIGNyZWF0ZWRfYXQ/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2VhdGhlciB7XHJcbiAgdGVtcD86IG51bWJlcixcclxuICB0ZW1wX21pbj86IG51bWJlcixcclxuICB0ZW1wX21heD86IG51bWJlcixcclxuICBodW1pZGl0eT86IG51bWJlcixcclxuICBkZXNjcmlwdGlvbj86IHN0cmluZyxcclxuICBpY29uPzogc3RyaW5nLFxyXG4gIGNsb3Vkc19hbGw/OiBudW1iZXIsXHJcbiAgd2luZF9zcGVlZD86IG51bWJlclxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWNhcmQnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NDYXJkJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1jYXJkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZXM6IFtcclxuICAgIGBjbWFjcy1jYXJkIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF0sXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtY2FyZC1sb2FkaW5nXSc6ICdsb2FkaW5nJyxcclxuICAgICdbY2xhc3MuYW50LWNhcmQtYm9yZGVyZWRdJzogJ2JvcmRlcmVkJyxcclxuICAgICdbY2xhc3MuYW50LWNhcmQtaG92ZXJhYmxlXSc6IFwiaG92ZXJhYmxlIHx8IGNtYWNzVHlwZSA9PT0gJ3NlbGVjdGlvbidcIixcclxuICAgICdbY2xhc3MuYW50LWNhcmQtdHlwZS1pbm5lcl0nOiBgdHlwZSA9PT0gJ2lubmVyJ2AsXHJcbiAgICAnW2NsYXNzLmFudC1jYXJkLWNvbnRhaW4tdGFic10nOiAnISF0YWInLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1jYXJkLWZpbGVzLXdyYXBwZXJdJzogXCJjbWFjc1R5cGUgPT09ICdmaWxlJ1wiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1jYXJkLW1lYXN1cmUtd3JhcHBlcl0nOiBcImNtYWNzVHlwZSA9PT0gJ21lYXN1cmUnXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLWNhcmQtbWVhc3VyZS13cmFwcGVyLXNlbGVjdGVkXSc6IFwiY21hY3NUeXBlID09PSAnbWVhc3VyZScgJiYgc2VsZWN0ZWRcIixcclxuICAgICdbY2xhc3MuY21hY3Mtc2VsZWN0aW9uLWNhcmRdJzogXCJjbWFjc1R5cGUgPT09ICdzZWxlY3Rpb24nXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLWNhcmQtc2VsZWN0ZWRdJzogXCJjbWFjc1R5cGUgPT09ICdzZWxlY3Rpb24nICYmIHNlbGVjdGVkXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLWNhcmQtZGlzYWJsZWRdJzogXCJjbWFjc1R5cGUgPT09ICdzZWxlY3Rpb24nICYmIGRpc2FibGVkXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLWFjdGlvbi1jYXJkXSc6IFwiY21hY3NUeXBlID09PSAnYWN0aW9uJ1wiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy13ZWF0aGVyLWNhcmRdJzogXCJjbWFjc1R5cGUgPT09ICd3ZWF0aGVyJ1wiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1iaWctZmlsZS1jYXJkXSc6IFwiY21hY3NUeXBlID09PSAnYmlnLWZpbGUnXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLWJpZy1maWxlLWNhcmQtc2VsZWN0ZWRdJzogXCJjbWFjc1R5cGUgPT09ICdiaWctZmlsZScgJiYgc2VsZWN0ZWRcIixcclxuICAgICdbY2xhc3MuY21hY3MtYWN0aW9uLWNhcmQtZGlzYWJsZWRdJzogXCJjbWFjc1R5cGUgPT09ICdhY3Rpb24nICYmIGRpc2FibGVkXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLWluZm9ybWF0aW9uLWNhcmRdJzogXCJjbWFjc1R5cGUgPT09ICd0ZWFtJ1wiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy10ZWFtLWNhcmRdJzogXCJjbWFjc1R5cGUgPT09ICdwcm9qZWN0J1wiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy12aWRlby1wbGF5ZXItY2FyZF0nOiBcImNtYWNzVHlwZSA9PT0gJ3ZpZGVvJ1wiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy10b2RvLWNhcmRdJzogXCJjbWFjc1R5cGUgPT09ICd0b2RvJ1wiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy10b2RvLWNhcmQtc2VsZWN0ZWRdJzogXCJjbWFjc1R5cGUgPT09ICd0b2RvJyAmJiBzZWxlY3RlZFwiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy10ZWFtLWNhcmQtc2VsZWN0ZWRdJzogXCJjbWFjc1R5cGUgPT09ICdwcm9qZWN0JyAmJiBzZWxlY3RlZFwiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1jYXJkLWZpbGVzLWZvbGRlcnMtd3JhcHBlcl0nOiBcImNtYWNzVHlwZSA9PT0gJ2ZvbGRlcidcIixcclxuICAgICdbY2xhc3MuZmlsZS1jYXJkLXNlbGVjdGVkXSc6IFwiY21hY3NUeXBlID09PSAnZm9sZGVyJyAmJiBzZWxlY3RlZFwiXHJcbiAgfSxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1jYXJkLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzQ2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICBmb2xkZXJJY29uID0gJyc7XHJcbiAgaXNFZGl0YWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBib3JkZXJlZCA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG9wZW5lZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBlZGl0YWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBpc1JhZGlvID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxvYWRpbmcgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaG92ZXJhYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHVzZURlZmF1bHRDb250ZW50ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc291cmNlczogU291cmNlW107XHJcbiAgQE91dHB1dCgpIHBsYXllclJlYWR5OiBFdmVudEVtaXR0ZXI8VmdBUEk+ID0gbmV3IEV2ZW50RW1pdHRlcjxWZ0FQST4oKTtcclxuICBASW5wdXQoKSBib2R5U3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbiAgQElucHV0KCkgY292ZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIGJvZHk6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIGFjdGlvbnM6IEFycmF5PFRlbXBsYXRlUmVmPHZvaWQ+PiA9IFtdO1xyXG4gIEBJbnB1dCgpIHRlYW06IGFueSA9IFtdO1xyXG4gIEBJbnB1dCgpIGZpbGU6IEJpZ0ZpbGUgPSBudWxsO1xyXG4gIEBJbnB1dCgpIHByb2plY3Q6IGFueSA9IFtdO1xyXG4gIEBJbnB1dCgpIHRvZG86IGFueTtcclxuICBASW5wdXQoKSB3ZWF0aGVyOiBXZWF0aGVyO1xyXG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcclxuICBASW5wdXQoKSBjbWFjc1R5cGU6IENtYWNzQ2FyZFR5cGUgPSAnbm9uZSc7XHJcbiAgQElucHV0KCkgY21hY3NJY29uOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBjbWFjc0ljb25PcGVuZWRGb2xkZXI6IHN0cmluZyA9ICdpY29uVUlMYXJnZS1Gb2xkZXInO1xyXG4gIEBJbnB1dCgpIGNtYWNzSWNvbkNsb3NlZEZvbGRlcjogc3RyaW5nID0gJ2ljb25VSUxhcmdlLUZvbGRlcic7XHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIGxhYmVsVGl0bGU6IHN0cmluZztcclxuICBAT3V0cHV0KCkgdGl0bGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgQElucHV0KCkgZXh0cmE6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBDb250ZW50Q2hpbGQoQ21hY3NDYXJkVGFiQ29tcG9uZW50KSB0YWI6IENtYWNzQ2FyZFRhYkNvbXBvbmVudDtcclxuICBAT3V0cHV0KCkgb25kbGNsaWNrQ2FyZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvcGVuID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQElucHV0KCkgc2VsZWN0ZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSB2YWx1ZSA6IGFueTtcclxuICBAT3V0cHV0KCkgc2VsZWN0ZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAT3V0cHV0KCkgZ29Ub01vZHVsZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4gIEBJbnB1dCgpIHRvZG9Vc2VyQXNzaWduZWQ6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBAT3V0cHV0KCkgaWNvblRvRG9DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgICAgICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgICAgICAgICAgICBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxyXG4gICAgICAgICAgICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1jYXJkJyk7XHJcbiAgfVxyXG5cclxuICBvcGVuTWFpbCgkZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICAkZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGxpbmsgPSBgbWFpbHRvOiAke3RoaXMucHJvamVjdC50ZWFtTGVhZC5lbWFpbH1gO1xyXG4gICAgbG9jYXRpb24uaHJlZiA9IGxpbms7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmNtYWNzVHlwZSA9PT0gJ2ZvbGRlcicpIHtcclxuICAgICAgdGhpcy5mb2xkZXJJY29uID0gdGhpcy5vcGVuZWQgPyB0aGlzLmNtYWNzSWNvbk9wZW5lZEZvbGRlciA6IHRoaXMuY21hY3NJY29uQ2xvc2VkRm9sZGVyO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pc0VkaXRhYmxlID0gdGhpcy5lZGl0YWJsZTtcclxuICB9XHJcblxyXG4gIG9uUGxheWVyUmVhZHkoYXBpOiBWZ0FQSSkge1xyXG4gICAgdGhpcy5wbGF5ZXJSZWFkeS5lbWl0KGFwaSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgY2hlY2tSYWRpbygpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSkgb25DbGljayhldmVudDogRXZlbnQpIHtcclxuICAgIGlmICghdGhpcy51c2VEZWZhdWx0Q29udGVudCB8fCB0aGlzLmNtYWNzVHlwZSA9PT0gJ2JpZy1maWxlJykge1xyXG4gICAgICB0aGlzLnNlbGVjdChldmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkYmxjbGljaycsIFsnJGV2ZW50J10pIG9uRGJsQ2xpY2soZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5jbWFjc1R5cGUgPT09ICdmb2xkZXInICYmICF0aGlzLnVzZURlZmF1bHRDb250ZW50KSB7XHJcbiAgICAgIHRoaXMub3BlbmVkID0gIXRoaXMub3BlbmVkO1xyXG4gICAgICB0aGlzLmZvbGRlckljb24gPSB0aGlzLm9wZW5lZCA/IHRoaXMuY21hY3NJY29uT3BlbmVkRm9sZGVyIDogdGhpcy5jbWFjc0ljb25DbG9zZWRGb2xkZXI7XHJcbiAgICAgIGlmICh0aGlzLm9wZW5lZCkge1xyXG4gICAgICAgIHRoaXMub3Blbi5lbWl0KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZS5lbWl0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLmNtYWNzVHlwZSA9PT0gJ3Byb2plY3QnKXtcclxuICAgICAgdGhpcy5vbmRsY2xpY2tDYXJkLmVtaXQodGhpcy5wcm9qZWN0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRhcFRpbWVvdXRIYW5kbGVyID0gbnVsbDtcclxuXHJcbiAgQEhvc3RMaXN0ZW5lcigndG91Y2hzdGFydCcsIFsnJGV2ZW50J10pIG9uVG91Y2hTdGFydCgkZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICghdGhpcy50YXBUaW1lb3V0SGFuZGxlcikge1xyXG4gICAgICB0aGlzLnRhcFRpbWVvdXRIYW5kbGVyID0gc2V0VGltZW91dCggKCkgPT4ge1xyXG4gICAgICAgIHRoaXMub25DbGljaygkZXZlbnQpO1xyXG4gICAgICAgIHRoaXMudGFwVGltZW91dEhhbmRsZXIgPSBudWxsO1xyXG4gICAgICB9LCAzMDAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRhcFRpbWVvdXRIYW5kbGVyKTtcclxuICAgICAgdGhpcy50YXBUaW1lb3V0SGFuZGxlciA9IG51bGw7XHJcbiAgICAgIHRoaXMub25EYmxDbGljaygkZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbWFya0ZvckNoZWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3QoZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgaWYgKCF0aGlzLmlzUmFkaW8pIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gIXRoaXMuc2VsZWN0ZWQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWQgPyB0aGlzLnNlbGVjdGVkIDogIXRoaXMuc2VsZWN0ZWQ7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlRW50ZXIoZXZlbnQ6IEtleWJvYXJkRXZlbnQsIHRpdGxlQ29udGFpbmVyLCB0aXRsZVNwYW4pIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIHRpdGxlQ29udGFpbmVyLnN0eWxlLnRleHRPdmVyZmxvdyA9ICdlbGxpcHNpcyc7XHJcbiAgICAgIGNvbnN0IHRleHQgPSB0aXRsZVNwYW4uaW5uZXJUZXh0LnJlcGxhY2UoLyhcXHJcXG58XFxufFxccikvZ20sXCJcIik7XHJcbiAgICAgIHRpdGxlU3Bhbi5pbm5lclRleHQgPSB0ZXh0O1xyXG4gICAgICB0aGlzLmlzRWRpdGFibGUgPSBmYWxzZTtcclxuICAgICAgdGhpcy50aXRsZUNoYW5nZS5lbWl0KHRleHQpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRWRpdChldmVudDogS2V5Ym9hcmRFdmVudCwgdGl0bGVTcGFuKSB7XHJcbiAgICBjb25zdCB0ZXh0ID0gdGl0bGVTcGFuLmlubmVyVGV4dC5yZXBsYWNlKC8oXFxyXFxufFxcbnxcXHIpL2dtLFwiXCIpO1xyXG4gICAgdGhpcy50aXRsZUNoYW5nZS5lbWl0KHRleHQpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlRWRpdCh0aXRsZUNvbnRhaW5lcikge1xyXG4gICAgdGhpcy5pc0VkaXRhYmxlID0gdGhpcy5lZGl0YWJsZTtcclxuICAgIGlmICh0aGlzLmlzRWRpdGFibGUpe1xyXG4gICAgICB0aXRsZUNvbnRhaW5lci5zdHlsZS50ZXh0T3ZlcmZsb3cgPSAnaW5pdGlhbCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRJbml0aWFscyhuYW1lOiBhbnkpIHtcclxuICAgIGxldCBpbml0aWFscyA9IG5hbWUubWF0Y2goL1xcYlxcdy9nKSB8fCBbXTtcclxuICAgIGluaXRpYWxzID0gKChpbml0aWFscy5zaGlmdCgpIHx8ICcnKSArIChpbml0aWFscy5wb3AoKSB8fCAnJykpLnRvVXBwZXJDYXNlKCk7XHJcbiAgICByZXR1cm4gaW5pdGlhbHM7XHJcbiAgfVxyXG5cclxuICBnZXRCYWNrZ3JvdW5kSW1hZ2UoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKCd1cmwoXFwnJyArIHRoaXMucHJvamVjdC5wcm9qZWN0SW1hZ2UgKyAnXFwnKScpO1xyXG4gIH1cclxuXHJcbiAgaWNvbnNUb0RvQ2xpY2soaWNvbjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmljb25Ub0RvQ2xpY2submV4dCh7aWNvbiwgaWQ6IHRoaXMudG9kby5VbmlxdWVJZH0pO1xyXG4gIH1cclxuXHJcbiAgZ29Ub01vZHVsZVRvRG8oZXZlbnQ6IGFueSwgdXJsOiBzdHJpbmcpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICB0aGlzLmdvVG9Nb2R1bGUuZW1pdCh1cmwpO1xyXG4gIH1cclxufVxyXG4iXX0=