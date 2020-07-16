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
        this.celcius = true;
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
    /**
     * @param {?} value
     * @return {?}
     */
    buildLabel(value) {
        /** @type {?} */
        let result = '&nbsp;';
        if (value.length > 20) {
            result = `${value.slice(0, 20)}...`;
        }
        else if (value !== undefined && value !== null && value !== '' && value.length > 0) {
            result = value;
        }
        return result;
    }
}
CmacsCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmacs-card',
                exportAs: 'cmacsCard',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                template: "<ng-template #content>\r\n  <ng-content></ng-content>\r\n</ng-template>\r\n\r\n<div class=\"ant-card-head\"\r\n  *ngIf=\"(title || extra || tab ) && (cmacsType === 'none' || cmacsType === 'team' || cmacsType === 'project')\">\r\n  <div class=\"ant-card-head-wrapper\">\r\n    <div class=\"ant-card-head-title\" *ngIf=\"title\">\r\n      <ng-container *cmacsStringTemplateOutlet=\"title\">{{ title }}</ng-container>\r\n    </div>\r\n    <div class=\"ant-card-extra\" *ngIf=\"extra\">\r\n      <ng-container *cmacsStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\r\n    </div>\r\n  </div>\r\n  <ng-container *ngIf=\"tab\">\r\n    <ng-template [ngTemplateOutlet]=\"tab.template\"></ng-template>\r\n  </ng-container>\r\n</div>\r\n\r\n<!-- selection card for project creation -->\r\n<div class=\"ant-card-cover\" *ngIf=\"cover || cmacsType === 'selection' || cmacsType === 'action'\">\r\n  <ng-template [ngTemplateOutlet]=\"cover\"></ng-template>\r\n  <ng-container *ngIf=\"cmacsType === 'selection'\">\r\n    <label cmacs-radio [(ngModel)]=\"selected\" (ngModelChange)=\"checkRadio()\"\r\n      [disabled]=\"disabled\">{{labelTitle}}</label>\r\n    <ng-template [ngTemplateOutlet]=\"body\"></ng-template>\r\n  </ng-container>\r\n</div>\r\n\r\n<div class=\"ant-card-body\" [ngStyle]=\"bodyStyle\">\r\n  <ng-container *ngIf=\"!loading\">\r\n\r\n    <!-- weather card -->\r\n    <ng-container *ngIf=\"cmacsType === 'weather'\">\r\n      <span class=\"cmacs-weather-card-temp\">{{weather.temp + ((celcius) ? '\u00B0C' : '\u00B0F')}}</span>\r\n      <img class=\"cmacs-weather-card-cloud-img\" [src]=\"weather.icon\">\r\n\r\n      <div class=\"cmacs-weather-card-description-wrapper\">\r\n        <span class=\"cmacs-weather-card-description\">{{weather.description | titlecase}}</span>\r\n        <span class=\"cmacs-weather-card-temp-min-max\">\r\n          <span>{{weather.temp_min + '\u00B0 / '}}</span>\r\n          <span>{{weather.temp_max + '\u00B0'}}</span>\r\n        </span>\r\n      </div>\r\n\r\n      <div class=\"cmacs-weather-col-1-3\"><i class=\"iconUILarge-Rain\"></i></div>\r\n      <div class=\"cmacs-weather-col-1-3\"><i class=\"iconUILarge-Humidity\"></i></div>\r\n      <div class=\"cmacs-weather-col-1-3\"><i class=\"iconUILarge-Wind\"></i></div>\r\n      <div class=\"cmacs-weather-col-1-3\">{{weather.clouds_all + '%'}}</div>\r\n      <div class=\"cmacs-weather-col-1-3\">{{weather.humidity + '%'}}</div>\r\n      <div class=\"cmacs-weather-col-1-3\">{{weather.wind_speed + ' Km/H'}}</div>\r\n    </ng-container>\r\n\r\n    <!-- to do card -->\r\n    <ng-container *ngIf=\"cmacsType === 'todo'\">\r\n      <div class=\"todo-card-header\" nz-row>\r\n        <div *ngIf=\"todo.UniqueId\" nz-col nzSpan=\"12\">\r\n          <span>{{todo.UniqueId}}</span>\r\n        </div>\r\n        <div *ngIf=\"todo.date\" nz-col nzSpan=\"6\"  class=\"cmacs-todo-card-date\">\r\n          <span [class.cmacs-todo-card-overdue]=\"todo.isOverdue\">{{todo.date}}</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"todo-card-content\">\r\n        <div class=\"cmacs-todo-card-title\">\r\n          <span [class.cmacs-todo-card-overdue]=\"todo.isOverdue\">{{todo.title}}</span>\r\n        </div>\r\n        <div *ngIf=\"todo.project\" class=\"cmacs-todo-card-project\">\r\n          <span>{{todo.project}}</span>\r\n        </div>\r\n        <div nz-row class=\"cmacs-todo-card-action\">\r\n          <!-- user icon -->\r\n          <div nz-col nzSpan=\"5\" *ngIf=\"!todo.isTeam\"  class=\"cmacs-todo-card-person\">\r\n            <ng-container [ngIf]=\"todoUserAssigned\" *ngTemplateOutlet=\"todoUserAssigned; context: {id: todo.userAssignedId, name: todo.userAssignedName}\"></ng-container>\r\n            <a *ngIf=\"!todoUserAssigned\"><i class=\"iconCreation-User\"></i></a>\r\n          </div>\r\n          <!-- team icon -->\r\n          <div nz-col nzSpan=\"5\" *ngIf=\"todo.isTeam\" class=\"cmacs-todo-card-team\">\r\n            <a><i class=\"iconUILarge-Team\"></i></a>\r\n          </div>\r\n          <!-- flag icon -->\r\n          <div nz-col nzSpan=\"5\" *ngIf=\"todo.hasPriorityFlag\" class=\"cmacs-todo-card-priority\">\r\n            <a [style.color]=\"todo.stateColor\"><i nz-icon [type]=\"'flag'\"></i></a>\r\n          </div>\r\n          <!-- link icon -->\r\n          <div nz-col nzSpan=\"5\" *ngIf=\"todo.association\" class=\"cmacs-todo-card-association\">\r\n            <span (click)=\"goToModuleToDo($event, todo.link)\"><i class=\"iconUILarge-Link\"></i></span>\r\n          </div>\r\n          <!-- attachments icon -->\r\n          <div nz-col nzSpan=\"5\" *ngIf=\"todo.attachments\" (click)=\"iconsToDoClick('attachments')\" class=\"cmacs-todo-card-attachments\">\r\n            <span>{{todo.attachments}}</span>\r\n            <a><i class=\"iconUILarge-Attached\"></i></a>\r\n          </div>\r\n          <!-- comments icon -->\r\n          <div nz-col nzSpan=\"4\" *ngIf=\"todo.comments\" (click)=\"iconsToDoClick('comments')\" class=\"cmacs-todo-card-comments\">\r\n            <span>{{todo.comments}}</span>\r\n            <a><i class=\"iconUILarge-Comments\"></i></a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <!-- files -->\r\n    <ng-container *ngIf=\"cmacsType === 'big-file'\">\r\n      <div class=\"cmacs-card-big-file-meta\">\r\n        <ng-container *ngIf=\"!useDefaultContent\">\r\n          <div class=\"cmacs-card-big-file-icon-wrapper\">\r\n            <a><i class=\"{{cmacsIcon}}\"></i></a>\r\n          </div>\r\n          <div class=\"cmacs-card-big-file-extension-wrapper\">\r\n            <span>{{file.extension}}</span>\r\n          </div>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"useDefaultContent\">\r\n          <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\r\n        </ng-container>\r\n      </div>\r\n      <div class=\"cmacs-card-big-file-description\">\r\n        <div class=\"cmacs-card-big-file-description-left-panel\">\r\n          <div class=\"cmacs-card-big-file-title\">\r\n            <span>{{file.title}}</span>\r\n          </div>\r\n          <div class=\"cmacs-card-big-file-date\">\r\n            <span>{{file.created_at}}</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"cmacs-card-big-file-description-right-panel\">\r\n          <div class=\"cmacs-card-big-file-extra\" *ngIf=\"extra\">\r\n            <ng-container *cmacsStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <!-- videos -->\r\n    <ng-container *ngIf=\"cmacsType === 'video'\">\r\n      <div class=\"cmacs-card-video-player-wrapper\">\r\n        <cmacs-video-player [sources]=\"sources\" (playerReady)=\"onPlayerReady($event)\"></cmacs-video-player>\r\n      </div>\r\n      <div class=\"cmacs-card-video-description\">\r\n        <div class=\"cmacs-card-video-title\">\r\n          <span>{{title}}</span>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <!-- files card for recent panel-->\r\n    <ng-container *ngIf=\"cmacsType === 'file'\">\r\n      <div class=\"cmacs-card-files-icon-wrapper\">\r\n        <a><i class=\"{{cmacsIcon}}\"></i></a>\r\n      </div>\r\n      <div class=\"cmacs-card-label-recent\">\r\n        <span>{{title}}</span>\r\n      </div>\r\n      <div class=\"cmacs-card-file-extra\" *ngIf=\"extra\">\r\n        <ng-container *cmacsStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <!-- radio card -->\r\n    <ng-container *ngIf=\"cmacsType === 'measure'\">\r\n      <div class=\"cmacs-card-measure-icon-wrapper\">\r\n        <a class=\"iconspan\"><i class=\"iconUILarge-Ruler\"></i></a>\r\n      </div>\r\n      <div class=\"cmacs-card-label-measure\">\r\n        <span>{{title}}</span>\r\n      </div>\r\n    </ng-container>\r\n\r\n\r\n    <ng-container *ngIf=\"cmacsType === 'none' || cmacsType === 'selection' || cmacsType === 'action'\">\r\n      <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\r\n    </ng-container>\r\n\r\n\r\n    <!-- team card -->\r\n    <ng-container *ngIf=\"cmacsType === 'team'\">\r\n      <ng-container *ngIf=\"useDefaultContent\">\r\n        <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"!useDefaultContent\">\r\n        <div style=\"margin-bottom: 20px; min-height: 25px; display: inline-flex\">\r\n          <div class=\"team-person-card\" *ngFor=\"let person of team; index as i\"\r\n            [style.backgroundColor]=\"!person.image ? '#512DA8' : '#c7f5ff'\"\r\n            [style.padding]=\"!person.image ? '4px' : '0px'\"\r\n            [style.display]=\"(i >= 4 && team.length > 5) ? 'none' : 'inline-block' \">\r\n            <img width=\"30px\" height=\"30px\" *ngIf=\"person.image\" [src]=\"person.image\">\r\n            <span *ngIf=\"!person.image\">{{getInitials(person.name)}}</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"plus-team-card\" *ngIf=\"team.length > 5\">+{{team.length - 4}}</div>\r\n        <ng-content select=\"[cmacs-action-panel]\"></ng-content>\r\n      </ng-container>\r\n    </ng-container>\r\n\r\n    <!-- project -->\r\n    <ng-container *ngIf=\"cmacsType === 'project'\">\r\n      <div class=\"projectimagecontainer\">\r\n        <div class=\"project-image\" *ngIf=\"project.projectImage !== ''\" [style.background-image]=\"getBackgroundImage()\">\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"project.projectImage === ''\" class=\"cmacs-proj-card-div-Logo\">\r\n        <span class=\"cmacs-proj-card-text-Logo\">{{getInitials(project.name)}}</span>\r\n      </div>\r\n      <cmacs-tag class=\"project-status\" [cmacsGridType]=\"project.statusTag\">{{project.status}}</cmacs-tag>\r\n      <div class=\"project-dates-wrapper\">\r\n        <span class=\"project-dates-title\">Project Dates</span>\r\n        <span class=\"project-dates project-dates-date\">{{project.startDate}}</span>\r\n        <a class=\"iconspan\"><i class=\"iconArrowLarge-Arrow-Right project-dates\"></i></a>\r\n        <span class=\"project-dates project-dates-date\">{{project.endDate}}</span>\r\n      </div>\r\n      <div class=\"project-card-progress-bar\">\r\n        <div class=\"project-card-progress-bar-inner\" [style.width]=\"project.completion\"></div>\r\n      </div>\r\n      <div class=\"project-manager-details\">\r\n        <img *ngIf=\"project.teamLead.avatar\" class=\"manager-avatar\" width=\"30px\" height=\"30px\"\r\n          [src]=\"project.teamLead.avatar\">\r\n        <span *ngIf=\"!project.teamLead.avatar || project.teamLead.avatar === ''\"\r\n          class=\"cmacs-proj-avatar-text\">{{getInitials(project.teamLead.name)}}</span>\r\n        <div class=\"project-manager-metadata\">\r\n          <div class=\"manager-name\" [innerHtml]=\"buildLabel(project.teamLead.name)\">\r\n          </div>\r\n          <div class=\"manager-charge\" [innerHtml]=\"buildLabel(project.teamLead.charge)\">\r\n          </div>\r\n        </div>\r\n        <a (click)=\"openMail($event)\" class=\"iconspan project-email-icon\"><i class=\"iconUILarge-Message\"></i></a>\r\n      </div>\r\n    </ng-container>\r\n\r\n<!-- folders default  -->\r\n    <ng-container *ngIf=\"cmacsType === 'folder'\">\r\n      <ng-container *ngIf=\"useDefaultContent\">\r\n        <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"!useDefaultContent\">\r\n        <div class=\"card-files-folders-icon-wrapper\">\r\n          <a class=\"iconspan\"><i [class]=\"folderIcon\"></i></a>\r\n        </div>\r\n        <div #titleContainer (click)=\"toggleEdit(titleContainer)\" class=\"card-files-folders-label\">\r\n          <span #name (keydown.enter)=\"handleEnter($event, titleContainer, name)\" (keyup)=\"handleEdit($event, name)\"\r\n            [attr.contentEditable]=\"isEditable\">{{title}}</span>\r\n        </div>\r\n        <div class=\"card-files-folder-extra iconspan\" *ngIf=\"extra\">\r\n          <ng-container *cmacsStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\r\n        </div>\r\n      </ng-container>\r\n    </ng-container>\r\n  </ng-container>\r\n\r\n  <cmacs-card-loading *ngIf=\"loading\"></cmacs-card-loading>\r\n</div>\r\n\r\n\r\n<ul class=\"ant-card-actions\" *ngIf=\"actions.length\">\r\n  <li *ngFor=\"let action of actions\" [style.width.%]=\"100 / actions.length\">\r\n    <span>\r\n      <ng-template [ngTemplateOutlet]=\"action\"></ng-template>\r\n    </span>\r\n  </li>\r\n</ul>\r\n",
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
    `, ".cmacs-weather-card{width:318px;height:218px;border-radius:10px;background-color:#fff;border-color:transparent;box-shadow:0 2px 4px rgba(0,0,0,.1)}.cmacs-weather-card .ant-card-body{padding-top:35px}.cmacs-weather-card-cloud-img{width:75px;height:auto;float:right}.cmacs-weather-card-temp-min-max{font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;color:#97a0ae;margin-left:10px}.cmacs-weather-card-description-wrapper{margin-top:14px;margin-bottom:28px}.cmacs-weather-card-description{font-family:Roboto-Regular;font-size:14px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.43;letter-spacing:normal;color:#656c79}.cmacs-weather-col-1-3 i{font-size:22px}.cmacs-weather-col-1-3{width:33.3333%;display:inline-block;text-align:center;font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;color:#3b3f46}.cmacs-weather-card-temp{font-family:Roboto-Regular;font-size:24px;font-weight:500;font-stretch:normal;font-style:normal;line-height:2.08;letter-spacing:normal;color:#3b3f46}.ant-card,.ant-card-head{font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79}.ant-card-extra,.ant-card-head-title{padding:0;font-size:12px;font-weight:500;font-family:Roboto-Medium}.ant-card-head{min-height:40px;padding:12px}.ant-card-grid{font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79;cursor:pointer}.card-list-row .ant-card-grid>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block}.cmacs-card-title{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cmacs-card-shared-I .cmacs-card-title{width:100%}.cmacs-card-left-panel label.cmacs-checkbox-card{float:left}.cmacs-card-shared-II .cmacs-card-title{width:calc(100% - 40px);left:80px}.cmacs-card-person-info-II{display:-webkit-box;display:flex}.cmacs-card-shared-III .cmacs-card-title{width:calc(100% - 60px)}.cmacs-card-files-wrapper{width:223px;height:36px;border:none}.cmacs-card-measure-wrapper{height:36px;border:1px solid #dee0e5}.cmacs-card-label-measure{padding:6px 20px;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;vertical-align:middle;width:calc(100% - 35px)}.cmacs-card-measure-wrapper-selected,.cmacs-card-measure-wrapper:hover{border-color:#2a7cff;cursor:pointer;box-shadow:0 6px 10px 0 rgba(0,0,0,.15)}.cmacs-card-measure-wrapper-selected .cmacs-card-measure-icon-wrapper,.cmacs-card-measure-wrapper:hover .cmacs-card-measure-icon-wrapper{border-right-color:#2a7cff}.cmacs-card-measure-wrapper-selected .cmacs-card-measure-icon-wrapper i,.cmacs-card-measure-wrapper:hover .cmacs-card-measure-icon-wrapper i{color:#2a7cff}.cmacs-card-files-wrapper:hover{background-color:#f6f7fb;cursor:pointer}.cmacs-card-files-wrapper .ant-card-body,.cmacs-card-measure-wrapper .ant-card-body{padding:0;width:100%}.cmacs-card-files-wrapper div,.cmacs-card-measure-wrapper div{display:inline-block}.cmacs-card-files-icon-wrapper{width:36px;height:36px;border-radius:3px;box-shadow:0 6px 10px 0 rgba(0,0,0,.15);background-color:#fff;margin-right:16px;text-align:center;position:relative;top:-8px}.cmacs-card-measure-icon-wrapper{background-color:#fff;text-align:center;padding:7px 7px 6px;border-right:1px solid #dee0e5}.cmacs-card-measure-icon-wrapper i{color:#dee0e5}.cmacs-card-files-icon-wrapper i{color:#fb3147!important;font-size:18px;top:23%;position:relative}.cmacs-card-file-extra{font-size:22px;float:right;margin-top:2px;margin-right:5px}.cmacs-card-file-extra i{color:#bec4cd!important}.cmacs-card-label-recent{padding:10px 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:calc(100% - 96px);vertical-align:middle}.cmacs-selection-card{height:100%}.cmacs-selection-card .ant-card-cover{padding:15px}.cmacs-selection-card .ant-card-body{padding:10px 10px 30px;text-align:center;font-size:12px}.cmacs-selection-card .ant-card-meta-description{color:#656c79}.cmacs-selection-card.ant-card-hoverable:hover:not(.cmacs-card-disabled){border:1px solid #bec4cd;box-shadow:0 6px 10px rgba(59,63,70,.15)}.cmacs-selection-card.ant-card-hoverable:hover:not(.cmacs-card-disabled) .ant-radio-inner{border-color:#bec4cd}.cmacs-card-selected,.cmacs-card-selected:hover,.cmacs-card-selected:hover .ant-radio-inner{border-color:#2a7cff!important}.ant-radio-disabled .ant-radio-inner,.ant-radio-disabled .ant-radio-input,.ant-radio-disabled+span,.ant-radio.ant-radio-disabled,input[type=radio][disabled]{cursor:default}.cmacs-card-disabled:hover .ant-radio-inner{border-color:#dee0e5!important;cursor:default;background-color:#f3f3f4}.cmacs-card-selected .ant-card-meta-description{color:#2a7cff!important}.cmacs-card-disabled,.cmacs-card-disabled:hover{border-color:#dee0e5;cursor:default;box-shadow:none}.cmacs-card-disabled .ant-card-meta-description{color:#97a0ae!important}.cmacs-action-card{border:none;margin-left:auto;margin-right:auto;min-width:131px}.cmacs-action-card:hover{cursor:pointer}.cmacs-action-card-disabled:hover{cursor:default}.cmacs-action-card:hover .ant-card-meta-title{color:#2164c9}.cmacs-action-card .ant-card-meta-description{text-align:center;color:#acb3bf}.cmacs-action-card .ant-card-body{padding:13px}.cmacs-action-card .ant-card-meta-title{color:#2a7cff;white-space:normal;text-align:center;font-size:12px;padding-top:18px}.cmacs-action-card-disabled .ant-card-meta-title,.cmacs-action-card-disabled:hover .ant-card-meta-title{color:#97a0ae}.cmacs-information-card.ant-card-bordered{border-color:#dee0e5}.cmacs-information-card .ant-card-head{min-height:30px}.cmacs-information-card .cmacs-btn-action{border-color:#dee0e5}.cmacs-information-card:hover .cmacs-btn-action,.cmacs-information-card:hover .cmacs-btn-action span i{color:#2a7cff!important}.cmacs-information-card .ant-card-body{padding:20px 10px}.cmacs-information-card .team-person-card{line-height:22px;font-size:12px;width:30px;height:30px;display:inline-block;border-radius:3px;background:#512da8;color:#fff;text-align:center;cursor:pointer;margin-right:10px}.cmacs-information-card img{border-radius:3px}.cmacs-information-card .team-person-card:last-child{margin-right:0}.cmacs-information-card .plus-team-card{line-height:22px;font-size:12px;width:30px;height:30px;display:inline-block;border-radius:3px;background-color:#dae8ff;color:#2a7cff;text-align:center;cursor:pointer;padding:4px}.iconspan i{font-size:16px;position:relative;height:16px;width:16px;display:inline-block;vertical-align:text-top}.iconspan{height:20px;width:20px;text-align:center;vertical-align:middle;display:inline-block}.cmacs-team-card.ant-card-bordered{border-color:#dee0e5}.cmacs-team-card.ant-card-bordered:hover{box-shadow:0 6px 10px rgba(59,63,70,.15)}.cmacs-team-card-selected.ant-card-bordered{border-color:#2a7cff}.cmacs-team-card .ant-card-head{min-height:30px}.cmacs-team-card .ant-card-body{padding:0}.project-card-progress-bar-inner{height:5px;background-color:#2a7cff;border-radius:5px}.project-card-progress-bar{height:5px;background-color:#dee0e5;border-radius:5px;width:83%;margin:0 auto}.project-dates{display:inline-block}.project-status{position:relative;top:-36px;left:18px}.project-dates-wrapper{padding:0 20px;margin-top:-10px;margin-bottom:10px}.project-dates-title{color:#97a0ae;display:block;margin-bottom:5px}.project-dates-date{color:#656c79}.project-dates-wrapper a{margin-left:10px;margin-right:10px}.project-manager-metadata{display:inline-block;margin-left:10px;margin-right:10px}.manager-name{font-family:Roboto-Medium;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:1.33;letter-spacing:normal;color:#97a0ae;max-width:111px;width:111px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;position:relative;height:15.45px}.manager-charge{color:#acb3bf;max-width:111px;width:111px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;position:relative;height:17.26px}.project-manager-details{margin:20px}.manager-avatar{display:inline-block;border-radius:3px;font-size:12px;color:#fff;text-align:center;line-height:1.33;float:left}.project-manager-details i{color:#656c79}.project-email-icon{float:right}.cmacs-card-files-folders-wrapper{height:48px;background-color:#fff;border:1px solid #dee0e5;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer!important}.card-files-uploading-wrapper{width:170px;height:48px;background-color:#f3f3f4;border:1px solid #dee0e5}.cmacs-card-files-folders-wrapper:hover{background-color:#f6f7fb;cursor:pointer}.file-card-selected,.file-card-selected:hover{background-color:#f2f7ff;border-color:#2a7cff}.cmacs-card-files-folders-wrapper:hover .card-files-folders-label{color:#2a7cff}.cmacs-card-files-folders-wrapper:hover .card-files-folder-extra a{opacity:1}.card-files-folder-extra{display:inline-block;font-size:20px}.card-files-folder-extra a{opacity:0}.card-files-folders-label{width:calc(100% - 50px);display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.card-files-uploading-wrapper .ant-card-body,.cmacs-card-files-folders-wrapper .ant-card-body{padding:14px 10px}.card-files-folders-icon-wrapper{margin-right:10px;display:inline-block;vertical-align:middle}.card-files-uploading-wrapper i,.cmacs-card-files-folders-wrapper i{color:#656c79!important}.card-files-progress-bar-inner{height:5px;background-color:#2a7cff;border-radius:5px}.card-files-progress-bar{height:5px;background-color:#dee0e5;border-radius:5px;margin-top:7px}.cmacs-big-file-card{width:243px;border:none;overflow:hidden}.cmacs-big-file-card .ant-card-body{padding:0}.cmacs-card-big-file-meta{border:1px solid #dee0e5;-webkit-transition:.3s;transition:.3s}.cmacs-big-file-card::before{content:' ';width:40px;height:21px;background-color:#fff;position:absolute;left:calc(100% - 26px);-webkit-transform:rotate(45deg);transform:rotate(45deg);top:-4px;border-bottom:1px solid #dee0e5;-webkit-transition:.3s;transition:.3s}.cmacs-card-big-file-icon-wrapper{font-size:22px;margin:0 auto;width:22px;padding-top:60px;padding-bottom:40px}.cmacs-card-big-file-extension-wrapper{text-align:right;padding:0 10px 10px 0;color:#acb3bf}.cmacs-card-big-file-description{height:61px;margin-top:10px;-webkit-transition:.3s;transition:.3s}.cmacs-card-big-file-title{padding:10px 10px 5px;font-size:12px;color:#3b3f46;font-weight:500;-webkit-transition:.3s;transition:.3s;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cmacs-card-big-file-date{padding:0 10px 10px;font-size:12px;color:#acb3bf;font-weight:500}.cmacs-card-big-file-extra{font-size:21px;padding-top:3px;-webkit-transition:.3s;transition:.3s}.cmacs-card-big-file-extra a{color:#656c79;opacity:0;-webkit-transition:.3s;transition:.3s}.cmacs-card-big-file-description-left-panel{width:90%;float:left}.cmacs-card-big-file-description-right-panel{width:10%;float:right}.cmacs-big-file-card:hover{cursor:pointer}.cmacs-big-file-card:hover .cmacs-card-big-file-description{background-color:#f6f7fb}.cmacs-big-file-card:hover .cmacs-card-big-file-title{color:#2a7cff}.cmacs-big-file-card:hover .cmacs-card-big-file-extra a{opacity:1}.cmacs-big-file-card-selected .cmacs-card-big-file-description,.cmacs-big-file-card-selected:hover .cmacs-card-big-file-description{background-color:#f2f7ff}.cmacs-big-file-card-selected .cmacs-card-big-file-meta,.cmacs-big-file-card-selected.cmacs-big-file-card::before{border-color:#2a7cff}.cmacs-card-video-description{color:#3b3f46;font-weight:600;font-size:12px;margin-top:17px}.cmacs-card-video-title{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cmacs-card-video-player-wrapper{width:337px;height:226px;border:1px solid #dee0e5}.cmacs-video-player-card{border:none;width:337px}.cmacs-video-player-card .ant-card-body{padding:0}.cmacs-todo-card-upper-line{width:95%;margin:5px;height:2px;border-radius:100px}.cmacs-todo-card{width:243px;margin:7px auto}.cmacs-todo-card.ant-card-hoverable:hover{box-shadow:0 6px 10px rgba(59,63,70,.15)}.cmacs-todo-card .ant-card-body{padding:0}.cmacs-todo-card-title{color:#3b3f46;font-size:12px;margin:15px 14px 0;white-space:pre-line;display:-moz-box;display:-webkit-box;-webkit-line-clamp:2;-moz-line-clamp:2;-moz-box-orient:vertical;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.cmacs-todo-card-project{color:#97a0ae;margin:10px 14px 0;font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cmacs-todo-card-date{color:#656c79;background-color:#f6f7fb;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;float:right;padding:0 5px}.cmacs-todo-card-action{padding:15px 14px 30px 15px;font-size:14px;position:absolute;bottom:-18px;width:100%}.cmacs-todo-card-attachments,.cmacs-todo-card-comments,.cmacs-todo-card-person,.cmacs-todo-card-team{float:left}.cmacs-todo-card-attachments span,.cmacs-todo-card-comments span{margin-right:3px;color:#2a7cff;font-size:12px}.cmacs-todo-card-priority{float:left}.cmacs-todo-card-attachments a,.cmacs-todo-card-comments a,.cmacs-todo-card-person a,.cmacs-todo-card-team a{color:#656c79}.cmacs-todo-card-project-img{width:241px;height:100px;overflow:hidden}.cmacs-todo-card-project-img img{width:241px}.cmacs-todo-card-selected{border-color:#2a7cff!important}.cmacs-proj-card-text-Logo{font-size:50px;color:#fff;background-color:#512da8}.cmacs-proj-card-div-Logo{background-color:#512da8;width:221px;height:107px;text-align:center}.cmacs-proj-avatar-text{height:30px;width:30px;line-height:22px;font-size:11px;border-radius:3px;background:#512da8;color:#fff;text-align:center;cursor:pointer;padding:4px;display:inline-block;float:left}.projectimagecontainer{height:107px;border-top:1px solid #dee0e5;border-bottom:1px solid #dee0e5;background-color:#f6f7fb}.project-image{background-repeat:no-repeat;background-position:center center;background-size:contain;height:100%;width:auto}.cmacs-todo-card-attachments span,.cmacs-todo-card-comments span,.cmacs-todo-card-person a{vertical-align:middle}.cmacs-todo-card-attachments a,.cmacs-todo-card-comments a{vertical-align:sub;font-size:18px}.cmacs-todo-card-team a{font-size:19px;vertical-align:top}.cmacs-todo-card-overdue{color:#f5222d}.cmacs-todo-card-association{float:left;cursor:pointer;font-size:18px}.todo-card-header{padding:12px;border-bottom:1px solid #e8e8e8}.todo-card-content{min-height:110px}"]
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
    celcius: [{ type: Input }],
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
    CmacsCardComponent.prototype.celcius;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLWNhcmQvY21hY3MtY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUFFLFlBQVksRUFBYyxZQUFZLEVBQ2xELEtBQUssRUFBcUIsTUFBTSxFQUNoQyxTQUFTLEVBQ1QsV0FBVyxFQUNYLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFHbkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7O0FBTXpELDZCQUlDOzs7SUFIQyx3QkFBZTs7SUFDZiw0QkFBbUI7O0lBQ25CLDZCQUFvQjs7Ozs7QUFHdEIsNkJBU0M7OztJQVJDLHVCQUFjOztJQUNkLDJCQUFrQjs7SUFDbEIsMkJBQWtCOztJQUNsQiwyQkFBa0I7O0lBQ2xCLDhCQUFxQjs7SUFDckIsdUJBQWM7O0lBQ2QsNkJBQW9COztJQUNwQiw2QkFBbUI7O0FBMkNyQixNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7O0lBNEM3QixZQUFvQixHQUFzQixFQUN4QyxRQUFtQixFQUNYLFNBQXVCLEVBQy9CLFVBQXNCO1FBSEosUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFFaEMsY0FBUyxHQUFULFNBQVMsQ0FBYztRQTdDakMsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ00sYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsYUFBUSxHQUFHLEtBQUss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eUM7O0lBQ3pDLG9DQUF3Qzs7SUFDeEMsc0NBQTBDOztJQUMxQyxxQ0FBeUM7O0lBQ3pDLHFDQUF5Qzs7SUFDekMsc0NBQTBDOztJQUMxQyx1Q0FBMkM7O0lBQzNDLCtDQUFtRDs7SUFDbkQscUNBQTJCOztJQUMzQix5Q0FBdUU7O0lBQ3ZFLHVDQUE4Qzs7SUFDOUMsbUNBQWtDOztJQUNsQyxrQ0FBaUM7O0lBQ2pDLHFDQUFnRDs7SUFDaEQsa0NBQXdCOztJQUN4QixrQ0FBOEI7O0lBQzlCLHFDQUEyQjs7SUFDM0Isa0NBQW1COztJQUNuQixxQ0FBMEI7O0lBQzFCLHFDQUF3Qjs7SUFDeEIsa0NBQXNCOztJQUN0Qix1Q0FBMkM7O0lBQzNDLHVDQUFnQzs7SUFDaEMsbURBQThEOztJQUM5RCxtREFBOEQ7O0lBQzlELG1DQUEyQzs7SUFDM0Msd0NBQTRCOztJQUM1Qix5Q0FBeUU7O0lBQ3pFLG1DQUEyQzs7SUFDM0MsaUNBQWdFOztJQUNoRSwyQ0FBa0Q7O0lBQ2xELGtDQUF5Qzs7SUFDekMsbUNBQTBDOztJQUMxQyxzQ0FBMEI7O0lBQzFCLG1DQUFvQjs7SUFDcEIsNENBQThFOztJQUM5RSx3Q0FBa0Q7O0lBQ2xELDhDQUE2Qzs7SUFFN0MsMkNBQWtEOztJQXFEbEQsK0NBQXlCOzs7OztJQW5EYixpQ0FBOEI7Ozs7O0lBRXhDLHVDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIEhvc3RMaXN0ZW5lcixcclxuICBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCxcclxuICBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBDbWFjc0NhcmRUYWJDb21wb25lbnQgfSBmcm9tICcuL2NtYWNzLWNhcmQtdGFiLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFZnQVBJIH0gZnJvbSBcInZpZGVvZ3VsYXIyL2NvbXBpbGVkL3NyYy9jb3JlL3NlcnZpY2VzL3ZnLWFwaVwiO1xyXG5pbXBvcnQgeyBTb3VyY2UgfSBmcm9tIFwiLi4vY21hY3MtdmlkZW8tcGxheWVyL2NtYWNzLXZpZGVvLXBsYXllci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcclxuXHJcbmV4cG9ydCB0eXBlIENtYWNzQ2FyZFR5cGUgPSAnZmlsZScgfCAnc2VsZWN0aW9uJyB8XHJcbiAgJ2FjdGlvbicgfCAndGVhbScgfCAncHJvamVjdCcgfCAnZm9sZGVyJyB8ICdtZWFzdXJlJyB8ICd3ZWF0aGVyJyB8XHJcbiAgJ2JpZy1maWxlJyB8ICdub25lJyB8ICd2aWRlbycgfCAndG9kbyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJpZ0ZpbGUge1xyXG4gIHRpdGxlPzogc3RyaW5nO1xyXG4gIGV4dGVuc2lvbj86IHN0cmluZztcclxuICBjcmVhdGVkX2F0Pzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdlYXRoZXIge1xyXG4gIHRlbXA/OiBudW1iZXIsXHJcbiAgdGVtcF9taW4/OiBudW1iZXIsXHJcbiAgdGVtcF9tYXg/OiBudW1iZXIsXHJcbiAgaHVtaWRpdHk/OiBudW1iZXIsXHJcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmcsXHJcbiAgaWNvbj86IHN0cmluZyxcclxuICBjbG91ZHNfYWxsPzogbnVtYmVyLFxyXG4gIHdpbmRfc3BlZWQ/OiBudW1iZXJcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1jYXJkJyxcclxuICBleHBvcnRBczogJ2NtYWNzQ2FyZCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtY2FyZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgY21hY3MtY2FyZCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LWNhcmQtbG9hZGluZ10nOiAnbG9hZGluZycsXHJcbiAgICAnW2NsYXNzLmFudC1jYXJkLWJvcmRlcmVkXSc6ICdib3JkZXJlZCcsXHJcbiAgICAnW2NsYXNzLmFudC1jYXJkLWhvdmVyYWJsZV0nOiBcImhvdmVyYWJsZSB8fCBjbWFjc1R5cGUgPT09ICdzZWxlY3Rpb24nXCIsXHJcbiAgICAnW2NsYXNzLmFudC1jYXJkLXR5cGUtaW5uZXJdJzogYHR5cGUgPT09ICdpbm5lcidgLFxyXG4gICAgJ1tjbGFzcy5hbnQtY2FyZC1jb250YWluLXRhYnNdJzogJyEhdGFiJyxcclxuICAgICdbY2xhc3MuY21hY3MtY2FyZC1maWxlcy13cmFwcGVyXSc6IFwiY21hY3NUeXBlID09PSAnZmlsZSdcIixcclxuICAgICdbY2xhc3MuY21hY3MtY2FyZC1tZWFzdXJlLXdyYXBwZXJdJzogXCJjbWFjc1R5cGUgPT09ICdtZWFzdXJlJ1wiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1jYXJkLW1lYXN1cmUtd3JhcHBlci1zZWxlY3RlZF0nOiBcImNtYWNzVHlwZSA9PT0gJ21lYXN1cmUnICYmIHNlbGVjdGVkXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLXNlbGVjdGlvbi1jYXJkXSc6IFwiY21hY3NUeXBlID09PSAnc2VsZWN0aW9uJ1wiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1jYXJkLXNlbGVjdGVkXSc6IFwiY21hY3NUeXBlID09PSAnc2VsZWN0aW9uJyAmJiBzZWxlY3RlZFwiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1jYXJkLWRpc2FibGVkXSc6IFwiY21hY3NUeXBlID09PSAnc2VsZWN0aW9uJyAmJiBkaXNhYmxlZFwiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1hY3Rpb24tY2FyZF0nOiBcImNtYWNzVHlwZSA9PT0gJ2FjdGlvbidcIixcclxuICAgICdbY2xhc3MuY21hY3Mtd2VhdGhlci1jYXJkXSc6IFwiY21hY3NUeXBlID09PSAnd2VhdGhlcidcIixcclxuICAgICdbY2xhc3MuY21hY3MtYmlnLWZpbGUtY2FyZF0nOiBcImNtYWNzVHlwZSA9PT0gJ2JpZy1maWxlJ1wiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1iaWctZmlsZS1jYXJkLXNlbGVjdGVkXSc6IFwiY21hY3NUeXBlID09PSAnYmlnLWZpbGUnICYmIHNlbGVjdGVkXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLWFjdGlvbi1jYXJkLWRpc2FibGVkXSc6IFwiY21hY3NUeXBlID09PSAnYWN0aW9uJyAmJiBkaXNhYmxlZFwiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1pbmZvcm1hdGlvbi1jYXJkXSc6IFwiY21hY3NUeXBlID09PSAndGVhbSdcIixcclxuICAgICdbY2xhc3MuY21hY3MtdGVhbS1jYXJkXSc6IFwiY21hY3NUeXBlID09PSAncHJvamVjdCdcIixcclxuICAgICdbY2xhc3MuY21hY3MtdmlkZW8tcGxheWVyLWNhcmRdJzogXCJjbWFjc1R5cGUgPT09ICd2aWRlbydcIixcclxuICAgICdbY2xhc3MuY21hY3MtdG9kby1jYXJkXSc6IFwiY21hY3NUeXBlID09PSAndG9kbydcIixcclxuICAgICdbY2xhc3MuY21hY3MtdG9kby1jYXJkLXNlbGVjdGVkXSc6IFwiY21hY3NUeXBlID09PSAndG9kbycgJiYgc2VsZWN0ZWRcIixcclxuICAgICdbY2xhc3MuY21hY3MtdGVhbS1jYXJkLXNlbGVjdGVkXSc6IFwiY21hY3NUeXBlID09PSAncHJvamVjdCcgJiYgc2VsZWN0ZWRcIixcclxuICAgICdbY2xhc3MuY21hY3MtY2FyZC1maWxlcy1mb2xkZXJzLXdyYXBwZXJdJzogXCJjbWFjc1R5cGUgPT09ICdmb2xkZXInXCIsXHJcbiAgICAnW2NsYXNzLmZpbGUtY2FyZC1zZWxlY3RlZF0nOiBcImNtYWNzVHlwZSA9PT0gJ2ZvbGRlcicgJiYgc2VsZWN0ZWRcIlxyXG4gIH0sXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtY2FyZC5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0NhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGZvbGRlckljb24gPSAnJztcclxuICBpc0VkaXRhYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJvcmRlcmVkID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgb3BlbmVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGVkaXRhYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGlzUmFkaW8gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbG9hZGluZyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBob3ZlcmFibGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdXNlRGVmYXVsdENvbnRlbnQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBzb3VyY2VzOiBTb3VyY2VbXTtcclxuICBAT3V0cHV0KCkgcGxheWVyUmVhZHk6IEV2ZW50RW1pdHRlcjxWZ0FQST4gPSBuZXcgRXZlbnRFbWl0dGVyPFZnQVBJPigpO1xyXG4gIEBJbnB1dCgpIGJvZHlTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuICBASW5wdXQoKSBjb3ZlcjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgYm9keTogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgYWN0aW9uczogQXJyYXk8VGVtcGxhdGVSZWY8dm9pZD4+ID0gW107XHJcbiAgQElucHV0KCkgdGVhbTogYW55ID0gW107XHJcbiAgQElucHV0KCkgZmlsZTogQmlnRmlsZSA9IG51bGw7XHJcbiAgQElucHV0KCkgcHJvamVjdDogYW55ID0gW107XHJcbiAgQElucHV0KCkgdG9kbzogYW55O1xyXG4gIEBJbnB1dCgpIHdlYXRoZXI6IFdlYXRoZXI7XHJcbiAgQElucHV0KCkgY2VsY2l1cyA9IHRydWU7XHJcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGNtYWNzVHlwZTogQ21hY3NDYXJkVHlwZSA9ICdub25lJztcclxuICBASW5wdXQoKSBjbWFjc0ljb246IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGNtYWNzSWNvbk9wZW5lZEZvbGRlcjogc3RyaW5nID0gJ2ljb25VSUxhcmdlLUZvbGRlcic7XHJcbiAgQElucHV0KCkgY21hY3NJY29uQ2xvc2VkRm9sZGVyOiBzdHJpbmcgPSAnaWNvblVJTGFyZ2UtRm9sZGVyJztcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbGFiZWxUaXRsZTogc3RyaW5nO1xyXG4gIEBPdXRwdXQoKSB0aXRsZUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICBASW5wdXQoKSBleHRyYTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQENvbnRlbnRDaGlsZChDbWFjc0NhcmRUYWJDb21wb25lbnQpIHRhYjogQ21hY3NDYXJkVGFiQ29tcG9uZW50O1xyXG4gIEBPdXRwdXQoKSBvbmRsY2xpY2tDYXJkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBASW5wdXQoKSBzZWxlY3RlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHZhbHVlOiBhbnk7XHJcbiAgQE91dHB1dCgpIHNlbGVjdGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgQE91dHB1dCgpIGdvVG9Nb2R1bGUgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICBASW5wdXQoKSB0b2RvVXNlckFzc2lnbmVkOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgQE91dHB1dCgpIGljb25Ub0RvQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXHJcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtY2FyZCcpO1xyXG4gIH1cclxuXHJcbiAgb3Blbk1haWwoJGV2ZW50OiBFdmVudCkge1xyXG4gICAgJGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBsaW5rID0gYG1haWx0bzogJHt0aGlzLnByb2plY3QudGVhbUxlYWQuZW1haWx9YDtcclxuICAgIGxvY2F0aW9uLmhyZWYgPSBsaW5rO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5jbWFjc1R5cGUgPT09ICdmb2xkZXInKSB7XHJcbiAgICAgIHRoaXMuZm9sZGVySWNvbiA9IHRoaXMub3BlbmVkID8gdGhpcy5jbWFjc0ljb25PcGVuZWRGb2xkZXIgOiB0aGlzLmNtYWNzSWNvbkNsb3NlZEZvbGRlcjtcclxuICAgIH1cclxuICAgIHRoaXMuaXNFZGl0YWJsZSA9IHRoaXMuZWRpdGFibGU7XHJcbiAgfVxyXG5cclxuICBvblBsYXllclJlYWR5KGFwaTogVmdBUEkpIHtcclxuICAgIHRoaXMucGxheWVyUmVhZHkuZW1pdChhcGkpO1xyXG4gIH1cclxuXHJcblxyXG4gIGNoZWNrUmFkaW8oKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZCk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pIG9uQ2xpY2soZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICBpZiAoIXRoaXMudXNlRGVmYXVsdENvbnRlbnQgfHwgdGhpcy5jbWFjc1R5cGUgPT09ICdiaWctZmlsZScpIHtcclxuICAgICAgdGhpcy5zZWxlY3QoZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZGJsY2xpY2snLCBbJyRldmVudCddKSBvbkRibENsaWNrKGV2ZW50OiBFdmVudCkge1xyXG4gICAgaWYgKHRoaXMuY21hY3NUeXBlID09PSAnZm9sZGVyJyAmJiAhdGhpcy51c2VEZWZhdWx0Q29udGVudCkge1xyXG4gICAgICB0aGlzLm9wZW5lZCA9ICF0aGlzLm9wZW5lZDtcclxuICAgICAgdGhpcy5mb2xkZXJJY29uID0gdGhpcy5vcGVuZWQgPyB0aGlzLmNtYWNzSWNvbk9wZW5lZEZvbGRlciA6IHRoaXMuY21hY3NJY29uQ2xvc2VkRm9sZGVyO1xyXG4gICAgICBpZiAodGhpcy5vcGVuZWQpIHtcclxuICAgICAgICB0aGlzLm9wZW4uZW1pdCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY2xvc2UuZW1pdCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jbWFjc1R5cGUgPT09ICdwcm9qZWN0Jykge1xyXG4gICAgICB0aGlzLm9uZGxjbGlja0NhcmQuZW1pdCh0aGlzLnByb2plY3QpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdGFwVGltZW91dEhhbmRsZXIgPSBudWxsO1xyXG5cclxuICBASG9zdExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgWyckZXZlbnQnXSkgb25Ub3VjaFN0YXJ0KCRldmVudDogRXZlbnQpIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKCF0aGlzLnRhcFRpbWVvdXRIYW5kbGVyKSB7XHJcbiAgICAgIHRoaXMudGFwVGltZW91dEhhbmRsZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLm9uQ2xpY2soJGV2ZW50KTtcclxuICAgICAgICB0aGlzLnRhcFRpbWVvdXRIYW5kbGVyID0gbnVsbDtcclxuICAgICAgfSwgMzAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRhcFRpbWVvdXRIYW5kbGVyKTtcclxuICAgICAgdGhpcy50YXBUaW1lb3V0SGFuZGxlciA9IG51bGw7XHJcbiAgICAgIHRoaXMub25EYmxDbGljaygkZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbWFya0ZvckNoZWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3QoZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgaWYgKCF0aGlzLmlzUmFkaW8pIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gIXRoaXMuc2VsZWN0ZWQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWQgPyB0aGlzLnNlbGVjdGVkIDogIXRoaXMuc2VsZWN0ZWQ7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlRW50ZXIoZXZlbnQ6IEtleWJvYXJkRXZlbnQsIHRpdGxlQ29udGFpbmVyLCB0aXRsZVNwYW4pIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgIHRpdGxlQ29udGFpbmVyLnN0eWxlLnRleHRPdmVyZmxvdyA9ICdlbGxpcHNpcyc7XHJcbiAgICBjb25zdCB0ZXh0ID0gdGl0bGVTcGFuLmlubmVyVGV4dC5yZXBsYWNlKC8oXFxyXFxufFxcbnxcXHIpL2dtLCBcIlwiKTtcclxuICAgIHRpdGxlU3Bhbi5pbm5lclRleHQgPSB0ZXh0O1xyXG4gICAgdGhpcy5pc0VkaXRhYmxlID0gZmFsc2U7XHJcbiAgICB0aGlzLnRpdGxlQ2hhbmdlLmVtaXQodGV4dCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVFZGl0KGV2ZW50OiBLZXlib2FyZEV2ZW50LCB0aXRsZVNwYW4pIHtcclxuICAgIGNvbnN0IHRleHQgPSB0aXRsZVNwYW4uaW5uZXJUZXh0LnJlcGxhY2UoLyhcXHJcXG58XFxufFxccikvZ20sIFwiXCIpO1xyXG4gICAgdGhpcy50aXRsZUNoYW5nZS5lbWl0KHRleHQpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlRWRpdCh0aXRsZUNvbnRhaW5lcikge1xyXG4gICAgdGhpcy5pc0VkaXRhYmxlID0gdGhpcy5lZGl0YWJsZTtcclxuICAgIGlmICh0aGlzLmlzRWRpdGFibGUpIHtcclxuICAgICAgdGl0bGVDb250YWluZXIuc3R5bGUudGV4dE92ZXJmbG93ID0gJ2luaXRpYWwnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0SW5pdGlhbHMobmFtZTogYW55KSB7XHJcbiAgICBsZXQgaW5pdGlhbHMgPSBuYW1lLm1hdGNoKC9cXGJcXHcvZykgfHwgW107XHJcbiAgICBpbml0aWFscyA9ICgoaW5pdGlhbHMuc2hpZnQoKSB8fCAnJykgKyAoaW5pdGlhbHMucG9wKCkgfHwgJycpKS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgcmV0dXJuIGluaXRpYWxzO1xyXG4gIH1cclxuXHJcbiAgZ2V0QmFja2dyb3VuZEltYWdlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSgndXJsKFxcJycgKyB0aGlzLnByb2plY3QucHJvamVjdEltYWdlICsgJ1xcJyknKTtcclxuICB9XHJcblxyXG4gIGljb25zVG9Eb0NsaWNrKGljb246IHN0cmluZykge1xyXG4gICAgdGhpcy5pY29uVG9Eb0NsaWNrLm5leHQoeyBpY29uLCBpZDogdGhpcy50b2RvLlVuaXF1ZUlkIH0pO1xyXG4gIH1cclxuXHJcbiAgZ29Ub01vZHVsZVRvRG8oZXZlbnQ6IGFueSwgdXJsOiBzdHJpbmcpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICB0aGlzLmdvVG9Nb2R1bGUuZW1pdCh1cmwpO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRMYWJlbCh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGxldCByZXN1bHQgPSAnJm5ic3A7JztcclxuICAgIGlmICh2YWx1ZS5sZW5ndGggPiAyMCkge1xyXG4gICAgICByZXN1bHQgPSBgJHt2YWx1ZS5zbGljZSgwLCAyMCl9Li4uYDtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gJycgJiYgdmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgICByZXN1bHQgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==