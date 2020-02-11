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
                template: "<ng-template #content>\r\n  <ng-content></ng-content>\r\n</ng-template>\r\n\r\n<div class=\"ant-card-head\"\r\n  *ngIf=\"(title || extra || tab ) && (cmacsType === 'none' || cmacsType === 'team' || cmacsType === 'project')\">\r\n  <div class=\"ant-card-head-wrapper\">\r\n    <div class=\"ant-card-head-title\" *ngIf=\"title\">\r\n      <ng-container *cmacsStringTemplateOutlet=\"title\">{{ title }}</ng-container>\r\n    </div>\r\n    <div class=\"ant-card-extra\" *ngIf=\"extra\">\r\n      <ng-container *cmacsStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\r\n    </div>\r\n  </div>\r\n  <ng-container *ngIf=\"tab\">\r\n    <ng-template [ngTemplateOutlet]=\"tab.template\"></ng-template>\r\n  </ng-container>\r\n</div>\r\n\r\n<!-- selection card for project creation -->\r\n<div class=\"ant-card-cover\" *ngIf=\"cover || cmacsType === 'selection' || cmacsType === 'action'\">\r\n  <ng-template [ngTemplateOutlet]=\"cover\"></ng-template>\r\n  <ng-container *ngIf=\"cmacsType === 'selection'\">\r\n    <label cmacs-radio [(ngModel)]=\"selected\" (ngModelChange)=\"checkRadio()\"\r\n      [disabled]=\"disabled\">{{labelTitle}}</label>\r\n    <ng-template [ngTemplateOutlet]=\"body\"></ng-template>\r\n  </ng-container>\r\n</div>\r\n\r\n<div class=\"ant-card-body\" [ngStyle]=\"bodyStyle\">\r\n  <ng-container *ngIf=\"!loading\">\r\n\r\n    <!-- weather card -->\r\n    <ng-container *ngIf=\"cmacsType === 'weather'\">\r\n      <span class=\"cmacs-weather-card-temp\">{{weather.temp + '\u00B0C'}}</span>\r\n      <img class=\"cmacs-weather-card-cloud-img\" [src]=\"'/assets/cloud.png'\">\r\n\r\n      <div class=\"cmacs-weather-card-description-wrapper\">\r\n        <span class=\"cmacs-weather-card-description\">{{weather.description}}</span>\r\n        <span class=\"cmacs-weather-card-temp-min-max\">\r\n          <span>{{weather.temp_min + '\u00B0 / '}}</span>\r\n          <span>{{weather.temp_max + '\u00B0'}}</span>\r\n        </span>\r\n      </div>\r\n\r\n      <div class=\"cmacs-weather-col-1-3\"><i class=\"iconUILarge-Rain\"></i></div>\r\n      <div class=\"cmacs-weather-col-1-3\"><i class=\"iconUILarge-Humidity\"></i></div>\r\n      <div class=\"cmacs-weather-col-1-3\"><i class=\"iconUILarge-Wind\"></i></div>\r\n      <div class=\"cmacs-weather-col-1-3\">{{weather.clouds_all + '%'}}</div>\r\n      <div class=\"cmacs-weather-col-1-3\">{{weather.humidity + '%'}}</div>\r\n      <div class=\"cmacs-weather-col-1-3\">{{weather.wind_speed + ' Km/H'}}</div>\r\n    </ng-container>\r\n\r\n    <!-- to do card -->\r\n    <ng-container *ngIf=\"cmacsType === 'todo'\">\r\n      <div *ngIf=\"todo.projectImage\" class=\"cmacs-todo-card-project-img\">\r\n        <img [src]=\"todo.projectImage\">\r\n      </div>\r\n      <!-- <div [style.backgroundColor]=\"todo.stateColor\" class=\"cmacs-todo-card-upper-line\"></div> -->\r\n      <div class=\"cmacs-todo-card-title\">\r\n        <span>{{todo.title}}</span>\r\n      </div>\r\n      <div *ngIf=\"todo.project\" class=\"cmacs-todo-card-project\">\r\n        <span>{{todo.project}}</span>\r\n      </div>\r\n      <div *ngIf=\"todo.date\" class=\"cmacs-todo-card-date\">\r\n        <span>{{todo.date}}</span>\r\n      </div>\r\n      <div class=\"cmacs-todo-card-action\">\r\n        <div *ngIf=\"todo.attachments\" class=\"cmacs-todo-card-attachments\">\r\n          <span>{{todo.attachments}}</span>\r\n          <a><i class=\"iconUILarge-Attached\"></i></a>\r\n        </div>\r\n        <div *ngIf=\"todo.comments\" class=\"cmacs-todo-card-comments\">\r\n          <span>{{todo.comments}}</span>\r\n          <a><i class=\"iconUILarge-Comments\"></i></a>\r\n        </div>\r\n        <div *ngIf=\"!todo.isTeam\" class=\"cmacs-todo-card-person\">\r\n          <a><i class=\"iconCreation-User\"></i></a>\r\n        </div>\r\n        <div *ngIf=\"todo.isTeam\" class=\"cmacs-todo-card-team\">\r\n          <a><i class=\"iconUILarge-Team\"></i></a>\r\n        </div>\r\n        <div *ngIf=\"todo.hasPriorityFlag\" class=\"cmacs-todo-card-priority\">\r\n          <a [style.color]=\"todo.stateColor\"><i nz-icon [type]=\"'flag'\"></i></a>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <!-- files -->\r\n    <ng-container *ngIf=\"cmacsType === 'big-file'\">\r\n      <div class=\"cmacs-card-big-file-meta\">\r\n        <ng-container *ngIf=\"!useDefaultContent\">\r\n          <div class=\"cmacs-card-big-file-icon-wrapper\">\r\n            <a><i class=\"{{cmacsIcon}}\"></i></a>\r\n          </div>\r\n          <div class=\"cmacs-card-big-file-extension-wrapper\">\r\n            <span>{{file.extension}}</span>\r\n          </div>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"useDefaultContent\">\r\n          <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\r\n        </ng-container>\r\n      </div>\r\n      <div class=\"cmacs-card-big-file-description\">\r\n        <div class=\"cmacs-card-big-file-description-left-panel\">\r\n          <div class=\"cmacs-card-big-file-title\">\r\n            <span>{{file.title}}</span>\r\n          </div>\r\n          <div class=\"cmacs-card-big-file-date\">\r\n            <span>{{file.created_at}}</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"cmacs-card-big-file-description-right-panel\">\r\n          <div class=\"cmacs-card-big-file-extra\" *ngIf=\"extra\">\r\n            <ng-container *cmacsStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <!-- videos -->\r\n    <ng-container *ngIf=\"cmacsType === 'video'\">\r\n      <div class=\"cmacs-card-video-player-wrapper\">\r\n        <cmacs-video-player [sources]=\"sources\" (playerReady)=\"onPlayerReady($event)\"></cmacs-video-player>\r\n      </div>\r\n      <div class=\"cmacs-card-video-description\">\r\n        <div class=\"cmacs-card-video-title\">\r\n          <span>{{title}}</span>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <!-- files card for recent panel-->\r\n    <ng-container *ngIf=\"cmacsType === 'file'\">\r\n      <div class=\"cmacs-card-files-icon-wrapper\">\r\n        <a><i class=\"{{cmacsIcon}}\"></i></a>\r\n      </div>\r\n      <div class=\"cmacs-card-label-recent\">\r\n        <span>{{title}}</span>\r\n      </div>\r\n      <div class=\"cmacs-card-file-extra\" *ngIf=\"extra\">\r\n        <ng-container *cmacsStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <!-- radio card -->\r\n    <ng-container *ngIf=\"cmacsType === 'measure'\">\r\n      <div class=\"cmacs-card-measure-icon-wrapper\">\r\n        <a class=\"iconspan\"><i class=\"iconUILarge-Ruler\"></i></a>\r\n      </div>\r\n      <div class=\"cmacs-card-label-measure\">\r\n        <span>{{title}}</span>\r\n      </div>\r\n    </ng-container>\r\n\r\n\r\n    <ng-container *ngIf=\"cmacsType === 'none' || cmacsType === 'selection' || cmacsType === 'action'\">\r\n      <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\r\n    </ng-container>\r\n\r\n\r\n    <!-- team card -->\r\n    <ng-container *ngIf=\"cmacsType === 'team'\">\r\n      <ng-container *ngIf=\"useDefaultContent\">\r\n        <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"!useDefaultContent\">\r\n        <div style=\"margin-bottom: 20px; min-height: 25px; display: inline-flex\">\r\n          <div class=\"team-person-card\" *ngFor=\"let person of team; index as i\"\r\n            [style.backgroundColor]=\"!person.image ? '#ffa800' : '#c7f5ff'\"\r\n            [style.display]=\"(i >= 4 && team.length > 5) ? 'none' : 'inline-flex' \">\r\n            <img width=\"30px\" height=\"30px\" *ngIf=\"person.image\" [src]=\"person.image\">\r\n            <span *ngIf=\"!person.image\">{{getInitials(person.name)}}</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"plus-team-card\" *ngIf=\"team.length > 5\">+{{team.length - 4}}</div>\r\n        <ng-content select=\"[cmacs-action-panel]\"></ng-content>\r\n      </ng-container>\r\n    </ng-container>\r\n\r\n    <!-- project -->\r\n    <ng-container *ngIf=\"cmacsType === 'project'\">\r\n      <div class=\"projectimagecontainer\">\r\n        <div class=\"project-image\" *ngIf=\"project.projectImage !== ''\" [style.background-image]=\"getBackgroundImage()\">\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"project.projectImage === ''\" class=\"cmacs-proj-card-div-Logo\">\r\n        <span class=\"cmacs-proj-card-text-Logo\">{{getInitials(project.name)}}</span>\r\n      </div>\r\n      <cmacs-tag class=\"project-status\" [cmacsGridType]=\"project.statusTag\">{{project.status}}</cmacs-tag>\r\n      <div class=\"project-dates-wrapper\">\r\n        <span class=\"project-dates-title\">Project Dates</span>\r\n        <span class=\"project-dates project-dates-date\">{{project.startDate}}</span>\r\n        <a class=\"iconspan\"><i class=\"iconArrowLarge-Arrow-Right project-dates\"></i></a>\r\n        <span class=\"project-dates project-dates-date\">{{project.endDate}}</span>\r\n      </div>\r\n      <div class=\"project-card-progress-bar\">\r\n        <div class=\"project-card-progress-bar-inner\" [style.width]=\"project.completion\"></div>\r\n      </div>\r\n      <div class=\"project-manager-details\">\r\n        <img *ngIf=\"project.teamLead.avatar\" class=\"manager-avatar\" width=\"30px\" height=\"30px\"\r\n          [src]=\"project.teamLead.avatar\">\r\n        <span *ngIf=\"!project.teamLead.avatar || project.teamLead.avatar === ''\"\r\n          class=\"cmacs-proj-avatar-text\">{{getInitials(project.teamLead.name)}}</span>\r\n        <div class=\"project-manager-metadata\">\r\n          <div class=\"manager-name\">\r\n            {{ (project.teamLead.name.length > 20)? (project.teamLead.name | slice:0:20)+'...':(project.teamLead.name) }}\r\n          </div>\r\n          <div class=\"manager-charge\">\r\n            {{ (project.teamLead.charge.length > 20)? (project.teamLead.charge | slice:0:20)+'...':(project.teamLead.charge) }}\r\n          </div>\r\n        </div>\r\n        <a (click)=\"openMail($event)\" class=\"iconspan project-email-icon\"><i class=\"iconUILarge-Message\"></i></a>\r\n      </div>\r\n    </ng-container>\r\n\r\n<!-- folders default  -->\r\n    <ng-container *ngIf=\"cmacsType === 'folder'\">\r\n      <ng-container *ngIf=\"useDefaultContent\">\r\n        <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"!useDefaultContent\">\r\n        <div class=\"card-files-folders-icon-wrapper\">\r\n          <a class=\"iconspan\"><i [class]=\"folderIcon\"></i></a>\r\n        </div>\r\n        <div #titleContainer (click)=\"toggleEdit(titleContainer)\" class=\"card-files-folders-label\">\r\n          <span #name (keydown.enter)=\"handleEnter($event, titleContainer, name)\" (keyup)=\"handleEdit($event, name)\"\r\n            [attr.contentEditable]=\"isEditable\">{{title}}</span>\r\n        </div>\r\n        <div class=\"card-files-folder-extra iconspan\" *ngIf=\"extra\">\r\n          <ng-container *cmacsStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\r\n        </div>\r\n      </ng-container>\r\n    </ng-container>\r\n  </ng-container>\r\n\r\n  <cmacs-card-loading *ngIf=\"loading\"></cmacs-card-loading>\r\n</div>\r\n\r\n\r\n<ul class=\"ant-card-actions\" *ngIf=\"actions.length\">\r\n  <li *ngFor=\"let action of actions\" [style.width.%]=\"100 / actions.length\">\r\n    <span>\r\n      <ng-template [ngTemplateOutlet]=\"action\"></ng-template>\r\n    </span>\r\n  </li>\r\n</ul>\r\n",
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
    `, ".cmacs-weather-card{width:318px;height:218px;border-radius:10px;background-color:#fff;border-color:transparent;box-shadow:0 2px 4px rgba(0,0,0,.1)}.cmacs-weather-card .ant-card-body{padding-top:35px}.cmacs-weather-card-cloud-img{width:75px;height:auto;float:right}.cmacs-weather-card-temp-min-max{font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;color:#97a0ae;margin-left:10px}.cmacs-weather-card-description-wrapper{margin-top:14px;margin-bottom:28px}.cmacs-weather-card-description{font-family:Roboto-Regular;font-size:14px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.43;letter-spacing:normal;color:#656c79}.cmacs-weather-col-1-3 i{font-size:22px}.cmacs-weather-col-1-3{width:33.3333%;display:inline-block;text-align:center;font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;color:#3b3f46}.cmacs-weather-card-temp{font-family:Roboto-Regular;font-size:24px;font-weight:500;font-stretch:normal;font-style:normal;line-height:2.08;letter-spacing:normal;color:#3b3f46}.ant-card,.ant-card-head{font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79}.ant-card-extra,.ant-card-head-title{padding:0;font-size:12px;font-weight:500;font-family:Roboto-Medium}.ant-card-head{min-height:40px;padding:12px}.ant-card-grid{font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79;cursor:pointer}.card-list-row .ant-card-grid>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block}.cmacs-card-title{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cmacs-card-shared-I .cmacs-card-title{width:100%}.cmacs-card-left-panel label.cmacs-checkbox-card{float:left}.cmacs-card-shared-II .cmacs-card-title{width:calc(100% - 40px);left:80px}.cmacs-card-person-info-II{display:-webkit-box;display:flex}.cmacs-card-shared-III .cmacs-card-title{width:calc(100% - 60px)}.cmacs-card-files-wrapper{width:223px;height:36px;border:none}.cmacs-card-measure-wrapper{width:223px;height:36px;border:1px solid #dee0e5}.cmacs-card-label-measure{padding:6px 20px;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;vertical-align:middle;width:calc(100% - 35px)}.cmacs-card-measure-wrapper-selected,.cmacs-card-measure-wrapper:hover{border-color:#2a7cff;cursor:pointer;box-shadow:0 6px 10px 0 rgba(0,0,0,.15)}.cmacs-card-measure-wrapper-selected .cmacs-card-measure-icon-wrapper,.cmacs-card-measure-wrapper:hover .cmacs-card-measure-icon-wrapper{border-right-color:#2a7cff}.cmacs-card-measure-wrapper-selected .cmacs-card-measure-icon-wrapper i,.cmacs-card-measure-wrapper:hover .cmacs-card-measure-icon-wrapper i{color:#2a7cff}.cmacs-card-files-wrapper:hover{background-color:#f6f7fb;cursor:pointer}.cmacs-card-files-wrapper .ant-card-body,.cmacs-card-measure-wrapper .ant-card-body{padding:0;width:100%}.cmacs-card-files-wrapper div,.cmacs-card-measure-wrapper div{display:inline-block}.cmacs-card-files-icon-wrapper{width:36px;height:36px;border-radius:3px;box-shadow:0 6px 10px 0 rgba(0,0,0,.15);background-color:#fff;margin-right:16px;text-align:center;position:relative;top:-8px}.cmacs-card-measure-icon-wrapper{background-color:#fff;text-align:center;padding:7px;border-right:1px solid #dee0e5}.cmacs-card-measure-icon-wrapper i{color:#dee0e5}.cmacs-card-files-icon-wrapper i{color:#fb3147!important;font-size:18px;top:23%;position:relative}.cmacs-card-file-extra{font-size:22px;float:right;margin-top:2px;margin-right:5px}.cmacs-card-file-extra i{color:#bec4cd!important}.cmacs-card-label-recent{padding:10px 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:calc(100% - 96px);vertical-align:middle}.cmacs-selection-card{height:100%}.cmacs-selection-card .ant-card-cover{padding:15px}.cmacs-selection-card .ant-card-body{padding:10px 10px 30px;text-align:center;font-size:12px}.cmacs-selection-card .ant-card-meta-description{color:#656c79}.cmacs-selection-card.ant-card-hoverable:hover:not(.cmacs-card-disabled){border:1px solid #bec4cd;box-shadow:0 6px 10px rgba(59,63,70,.15)}.cmacs-selection-card.ant-card-hoverable:hover:not(.cmacs-card-disabled) .ant-radio-inner{border-color:#bec4cd}.cmacs-card-selected,.cmacs-card-selected:hover,.cmacs-card-selected:hover .ant-radio-inner{border-color:#2a7cff!important}.ant-radio-disabled .ant-radio-inner,.ant-radio-disabled .ant-radio-input,.ant-radio-disabled+span,.ant-radio.ant-radio-disabled,input[type=radio][disabled]{cursor:default}.cmacs-card-disabled:hover .ant-radio-inner{border-color:#dee0e5!important;cursor:default;background-color:#f3f3f4}.cmacs-card-selected .ant-card-meta-description{color:#2a7cff!important}.cmacs-card-disabled,.cmacs-card-disabled:hover{border-color:#dee0e5;cursor:default;box-shadow:none}.cmacs-card-disabled .ant-card-meta-description{color:#97a0ae!important}.cmacs-action-card{border:none;margin-left:auto;margin-right:auto;min-width:131px}.cmacs-action-card:hover{cursor:pointer}.cmacs-action-card-disabled:hover{cursor:default}.cmacs-action-card:hover .ant-card-meta-title{color:#2164c9}.cmacs-action-card .ant-card-meta-description{text-align:center;color:#acb3bf}.cmacs-action-card .ant-card-body{padding:13px}.cmacs-action-card .ant-card-meta-title{color:#2a7cff;white-space:normal;text-align:center;font-size:12px;padding-top:18px}.cmacs-action-card-disabled .ant-card-meta-title,.cmacs-action-card-disabled:hover .ant-card-meta-title{color:#97a0ae}.cmacs-information-card.ant-card-bordered{border-color:#dee0e5}.cmacs-information-card .ant-card-head{min-height:30px}.cmacs-information-card .cmacs-btn-action{border-color:#dee0e5}.cmacs-information-card:hover .cmacs-btn-action,.cmacs-information-card:hover .cmacs-btn-action span i{color:#2a7cff!important}.cmacs-information-card .ant-card-body{padding:20px 10px}.cmacs-information-card .team-person-card{width:30px;height:30px;border-radius:3px;display:-webkit-inline-box;display:inline-flex;margin-right:12px}.cmacs-information-card .team-person-card:last-child{margin-right:0}.cmacs-information-card .plus-team-card{width:30px;height:30px;border-radius:3px;display:-webkit-inline-box;display:inline-flex;background-color:#dae8ff;color:#2a7cff;position:relative;top:-10px;font-size:13px;padding:5px 7px}.cmacs-information-card .team-person-card span{width:30px;height:30px;padding:6px 8px;color:#fff}.iconspan i{font-size:16px;position:relative;height:16px;width:16px;display:inline-block;vertical-align:text-top}.iconspan{height:20px;width:20px;text-align:center;vertical-align:middle;display:inline-block}.cmacs-team-card.ant-card-bordered{border-color:#dee0e5}.cmacs-team-card.ant-card-bordered:hover{box-shadow:0 6px 10px rgba(59,63,70,.15)}.cmacs-team-card-selected.ant-card-bordered{border-color:#2a7cff}.cmacs-team-card .ant-card-head{min-height:30px}.cmacs-team-card .ant-card-body{padding:0}.project-card-progress-bar-inner{height:5px;background-color:#2a7cff;border-radius:5px}.project-card-progress-bar{height:5px;background-color:#dee0e5;border-radius:5px;width:83%;margin:0 auto}.project-dates{display:inline-block}.project-status{position:relative;top:-36px;left:18px}.project-dates-wrapper{padding:0 20px;margin-top:-10px;margin-bottom:10px}.project-dates-title{color:#97a0ae;display:block;margin-bottom:5px}.project-dates-date{color:#656c79}.project-dates-wrapper a{margin-left:10px;margin-right:10px}.project-manager-metadata{display:inline-block;margin-left:10px;margin-right:10px}.manager-name{font-family:Roboto-Medium;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:1.33;letter-spacing:normal;color:#97a0ae;max-width:111px;width:111px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;position:relative}.manager-charge{color:#acb3bf;max-width:111px;width:111px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;position:relative}.project-manager-details{margin:20px}.manager-avatar{display:inline-block;border-radius:3px;font-size:12px;color:#fff;text-align:center;line-height:1.33;float:left}.project-manager-details i{color:#656c79}.project-email-icon{float:right}.cmacs-card-files-folders-wrapper{height:48px;background-color:#fff;border:1px solid #dee0e5;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer!important}.card-files-uploading-wrapper{width:170px;height:48px;background-color:#f3f3f4;border:1px solid #dee0e5}.cmacs-card-files-folders-wrapper:hover{background-color:#f6f7fb;cursor:pointer}.file-card-selected,.file-card-selected:hover{background-color:#f2f7ff;border-color:#2a7cff}.cmacs-card-files-folders-wrapper:hover .card-files-folders-label{color:#2a7cff}.cmacs-card-files-folders-wrapper:hover .card-files-folder-extra a{opacity:1}.card-files-folder-extra{display:inline-block;font-size:20px}.card-files-folder-extra a{opacity:0}.card-files-folders-label{width:calc(100% - 50px);display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.card-files-uploading-wrapper .ant-card-body,.cmacs-card-files-folders-wrapper .ant-card-body{padding:14px 10px}.card-files-folders-icon-wrapper{margin-right:10px;display:inline-block;vertical-align:middle}.card-files-uploading-wrapper i,.cmacs-card-files-folders-wrapper i{color:#656c79!important}.card-files-progress-bar-inner{height:5px;background-color:#2a7cff;border-radius:5px}.card-files-progress-bar{height:5px;background-color:#dee0e5;border-radius:5px;margin-top:7px}.cmacs-big-file-card{width:243px;border:none;overflow:hidden}.cmacs-big-file-card .ant-card-body{padding:0}.cmacs-card-big-file-meta{border:1px solid #dee0e5;-webkit-transition:.3s;transition:.3s}.cmacs-big-file-card::before{content:' ';width:40px;height:21px;background-color:#fff;position:absolute;left:calc(100% - 26px);-webkit-transform:rotate(45deg);transform:rotate(45deg);top:-4px;border-bottom:1px solid #dee0e5;-webkit-transition:.3s;transition:.3s}.cmacs-card-big-file-icon-wrapper{font-size:22px;margin:0 auto;width:22px;padding-top:60px;padding-bottom:40px}.cmacs-card-big-file-extension-wrapper{text-align:right;padding:0 10px 10px 0;color:#acb3bf}.cmacs-card-big-file-description{height:61px;margin-top:10px;-webkit-transition:.3s;transition:.3s}.cmacs-card-big-file-title{padding:10px 10px 5px;font-size:12px;color:#3b3f46;font-weight:500;-webkit-transition:.3s;transition:.3s;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cmacs-card-big-file-date{padding:0 10px 10px;font-size:12px;color:#acb3bf;font-weight:500}.cmacs-card-big-file-extra{font-size:21px;padding-top:3px;-webkit-transition:.3s;transition:.3s}.cmacs-card-big-file-extra a{color:#656c79;opacity:0;-webkit-transition:.3s;transition:.3s}.cmacs-card-big-file-description-left-panel{width:90%;float:left}.cmacs-card-big-file-description-right-panel{width:10%;float:right}.cmacs-big-file-card:hover{cursor:pointer}.cmacs-big-file-card:hover .cmacs-card-big-file-description{background-color:#f6f7fb}.cmacs-big-file-card:hover .cmacs-card-big-file-title{color:#2a7cff}.cmacs-big-file-card:hover .cmacs-card-big-file-extra a{opacity:1}.cmacs-big-file-card-selected .cmacs-card-big-file-description,.cmacs-big-file-card-selected:hover .cmacs-card-big-file-description{background-color:#f2f7ff}.cmacs-big-file-card-selected .cmacs-card-big-file-meta,.cmacs-big-file-card-selected.cmacs-big-file-card::before{border-color:#2a7cff}.cmacs-card-video-description{color:#3b3f46;font-weight:600;font-size:12px;margin-top:17px}.cmacs-card-video-title{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cmacs-card-video-player-wrapper{width:337px;height:226px;border:1px solid #dee0e5}.cmacs-video-player-card{border:none;width:337px}.cmacs-video-player-card .ant-card-body{padding:0}.cmacs-todo-card-upper-line{width:95%;margin:5px;height:2px;border-radius:100px}.cmacs-todo-card{width:243px}.cmacs-todo-card.ant-card-hoverable:hover{box-shadow:0 6px 10px rgba(59,63,70,.15)}.cmacs-todo-card .ant-card-body{padding:0}.cmacs-todo-card-title{color:#3b3f46;font-size:12px;margin:21px 14px 0;white-space:pre-line;display:-moz-box;display:-webkit-box;-webkit-line-clamp:2;-moz-line-clamp:2;-moz-box-orient:vertical;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.cmacs-todo-card-project{color:#97a0ae;margin:10px 14px 0;font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cmacs-todo-card-date{color:#656c79;margin:14px 14px 0;background-color:#f6f7fb;padding:2px 5px;border-radius:3px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.cmacs-todo-card-action{padding:15px 14px 30px 15px;font-size:14px}.cmacs-todo-card-attachments,.cmacs-todo-card-comments,.cmacs-todo-card-person,.cmacs-todo-card-team{float:left;margin-right:10px}.cmacs-todo-card-attachments span,.cmacs-todo-card-comments span{margin-right:3px;color:#2a7cff;font-size:12px}.cmacs-todo-card-priority{float:right;margin-left:12px}.cmacs-todo-card-attachments a,.cmacs-todo-card-comments a,.cmacs-todo-card-person a,.cmacs-todo-card-team a{color:#656c79}.cmacs-todo-card-project-img{width:241px;height:100px;overflow:hidden}.cmacs-todo-card-project-img img{width:241px}.cmacs-todo-card-selected{border-color:#2a7cff!important}.cmacs-proj-card-text-Logo{font-size:50px;color:#fff;background-color:#ffa800}.cmacs-proj-card-div-Logo{background-color:#ffa800;width:221px;height:107px;text-align:center}.cmacs-proj-avatar-text{height:30px;width:30px;line-height:22px;font-size:11px;border-radius:3px;background:#512da8;color:#fff;text-align:center;cursor:pointer;padding:4px;display:inline-block;float:left}.projectimagecontainer{height:107px;border-top:1px solid #dee0e5;border-bottom:1px solid #dee0e5}.project-image{background-repeat:no-repeat;background-position:center center;background-size:cover;height:100%;width:auto}.cmacs-todo-card-attachments span,.cmacs-todo-card-comments span,.cmacs-todo-card-person a{vertical-align:middle}.cmacs-todo-card-person,.cmacs-todo-card-team{margin-left:4px}.cmacs-todo-card-attachments a,.cmacs-todo-card-comments a{vertical-align:sub;font-size:18px}.cmacs-todo-card-team a{font-size:19px;vertical-align:top}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLWNhcmQvY21hY3MtY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ29CLGlCQUFpQixFQUMxQyxTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFBRSxZQUFZLEVBQWMsWUFBWSxFQUNsRCxLQUFLLEVBQXFCLE1BQU0sRUFDaEMsU0FBUyxFQUNULFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBR2pFLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQzs7OztBQU12RCw2QkFJQzs7O0lBSEMsd0JBQWU7O0lBQ2YsNEJBQW1COztJQUNuQiw2QkFBb0I7Ozs7O0FBR3RCLDZCQVNDOzs7SUFSQyx1QkFBYzs7SUFDZCwyQkFBa0I7O0lBQ2xCLDJCQUFrQjs7SUFDbEIsMkJBQWtCOztJQUNsQiw4QkFBcUI7O0lBQ3JCLHVCQUFjOztJQUNkLDZCQUFvQjs7SUFDcEIsNkJBQW1COztBQTJDckIsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7OztJQXVDN0IsWUFBb0IsR0FBc0IsRUFDOUIsUUFBbUIsRUFDWCxTQUF1QixFQUMvQixVQUFzQjtRQUhkLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBRXRCLGNBQVMsR0FBVCxTQUFTLENBQWM7UUF4QzNDLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNNLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLGFBQVEsR0FBRyxLQUFL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OztJQUMzQyx3Q0FBNEI7O0lBQzVCLHlDQUF5RTs7SUFDekUsbUNBQTJDOztJQUMzQyxpQ0FBZ0U7O0lBQ2hFLDJDQUFrRDs7SUFDbEQsa0NBQXlDOztJQUN6QyxtQ0FBMEM7O0lBQzFDLHNDQUEwQjs7SUFDMUIsbUNBQXFCOztJQUNyQiw0Q0FBOEU7Ozs7O0lBRWxFLGlDQUE4Qjs7Ozs7SUFFOUIsdUNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIEhvc3RMaXN0ZW5lcixcclxuICBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCxcclxuICBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQge0NtYWNzQ2FyZFRhYkNvbXBvbmVudH0gZnJvbSAnLi9jbWFjcy1jYXJkLXRhYi5jb21wb25lbnQnO1xyXG5pbXBvcnQge1ZnQVBJfSBmcm9tIFwidmlkZW9ndWxhcjIvY29tcGlsZWQvc3JjL2NvcmUvc2VydmljZXMvdmctYXBpXCI7XHJcbmltcG9ydCB7U291cmNlfSBmcm9tIFwiLi4vY21hY3MtdmlkZW8tcGxheWVyL2NtYWNzLXZpZGVvLXBsYXllci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtEb21TYW5pdGl6ZXJ9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XHJcblxyXG5leHBvcnQgdHlwZSBDbWFjc0NhcmRUeXBlID0gJ2ZpbGUnIHwgJ3NlbGVjdGlvbicgfFxyXG4gICdhY3Rpb24nIHwgJ3RlYW0nIHwgJ3Byb2plY3QnIHwgJ2ZvbGRlcicgfCAnbWVhc3VyZScgfCAnd2VhdGhlcicgfFxyXG4gICdiaWctZmlsZScgfCAnbm9uZScgfCAndmlkZW8nIHwgJ3RvZG8nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCaWdGaWxlIHtcclxuICB0aXRsZT86IHN0cmluZztcclxuICBleHRlbnNpb24/OiBzdHJpbmc7XHJcbiAgY3JlYXRlZF9hdD86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXZWF0aGVyIHtcclxuICB0ZW1wPzogbnVtYmVyLFxyXG4gIHRlbXBfbWluPzogbnVtYmVyLFxyXG4gIHRlbXBfbWF4PzogbnVtYmVyLFxyXG4gIGh1bWlkaXR5PzogbnVtYmVyLFxyXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nLFxyXG4gIGljb24/OiBzdHJpbmcsXHJcbiAgY2xvdWRzX2FsbD86IG51bWJlcixcclxuICB3aW5kX3NwZWVkPzogbnVtYmVyXHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtY2FyZCcsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0NhcmQnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWNhcmQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYGNtYWNzLWNhcmQge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXSxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1jYXJkLWxvYWRpbmddJzogJ2xvYWRpbmcnLFxyXG4gICAgJ1tjbGFzcy5hbnQtY2FyZC1ib3JkZXJlZF0nOiAnYm9yZGVyZWQnLFxyXG4gICAgJ1tjbGFzcy5hbnQtY2FyZC1ob3ZlcmFibGVdJzogXCJob3ZlcmFibGUgfHwgY21hY3NUeXBlID09PSAnc2VsZWN0aW9uJ1wiLFxyXG4gICAgJ1tjbGFzcy5hbnQtY2FyZC10eXBlLWlubmVyXSc6IGB0eXBlID09PSAnaW5uZXInYCxcclxuICAgICdbY2xhc3MuYW50LWNhcmQtY29udGFpbi10YWJzXSc6ICchIXRhYicsXHJcbiAgICAnW2NsYXNzLmNtYWNzLWNhcmQtZmlsZXMtd3JhcHBlcl0nOiBcImNtYWNzVHlwZSA9PT0gJ2ZpbGUnXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLWNhcmQtbWVhc3VyZS13cmFwcGVyXSc6IFwiY21hY3NUeXBlID09PSAnbWVhc3VyZSdcIixcclxuICAgICdbY2xhc3MuY21hY3MtY2FyZC1tZWFzdXJlLXdyYXBwZXItc2VsZWN0ZWRdJzogXCJjbWFjc1R5cGUgPT09ICdtZWFzdXJlJyAmJiBzZWxlY3RlZFwiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1zZWxlY3Rpb24tY2FyZF0nOiBcImNtYWNzVHlwZSA9PT0gJ3NlbGVjdGlvbidcIixcclxuICAgICdbY2xhc3MuY21hY3MtY2FyZC1zZWxlY3RlZF0nOiBcImNtYWNzVHlwZSA9PT0gJ3NlbGVjdGlvbicgJiYgc2VsZWN0ZWRcIixcclxuICAgICdbY2xhc3MuY21hY3MtY2FyZC1kaXNhYmxlZF0nOiBcImNtYWNzVHlwZSA9PT0gJ3NlbGVjdGlvbicgJiYgZGlzYWJsZWRcIixcclxuICAgICdbY2xhc3MuY21hY3MtYWN0aW9uLWNhcmRdJzogXCJjbWFjc1R5cGUgPT09ICdhY3Rpb24nXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLXdlYXRoZXItY2FyZF0nOiBcImNtYWNzVHlwZSA9PT0gJ3dlYXRoZXInXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLWJpZy1maWxlLWNhcmRdJzogXCJjbWFjc1R5cGUgPT09ICdiaWctZmlsZSdcIixcclxuICAgICdbY2xhc3MuY21hY3MtYmlnLWZpbGUtY2FyZC1zZWxlY3RlZF0nOiBcImNtYWNzVHlwZSA9PT0gJ2JpZy1maWxlJyAmJiBzZWxlY3RlZFwiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1hY3Rpb24tY2FyZC1kaXNhYmxlZF0nOiBcImNtYWNzVHlwZSA9PT0gJ2FjdGlvbicgJiYgZGlzYWJsZWRcIixcclxuICAgICdbY2xhc3MuY21hY3MtaW5mb3JtYXRpb24tY2FyZF0nOiBcImNtYWNzVHlwZSA9PT0gJ3RlYW0nXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLXRlYW0tY2FyZF0nOiBcImNtYWNzVHlwZSA9PT0gJ3Byb2plY3QnXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLXZpZGVvLXBsYXllci1jYXJkXSc6IFwiY21hY3NUeXBlID09PSAndmlkZW8nXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLXRvZG8tY2FyZF0nOiBcImNtYWNzVHlwZSA9PT0gJ3RvZG8nXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLXRvZG8tY2FyZC1zZWxlY3RlZF0nOiBcImNtYWNzVHlwZSA9PT0gJ3RvZG8nICYmIHNlbGVjdGVkXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLXRlYW0tY2FyZC1zZWxlY3RlZF0nOiBcImNtYWNzVHlwZSA9PT0gJ3Byb2plY3QnICYmIHNlbGVjdGVkXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLWNhcmQtZmlsZXMtZm9sZGVycy13cmFwcGVyXSc6IFwiY21hY3NUeXBlID09PSAnZm9sZGVyJ1wiLFxyXG4gICAgJ1tjbGFzcy5maWxlLWNhcmQtc2VsZWN0ZWRdJzogXCJjbWFjc1R5cGUgPT09ICdmb2xkZXInICYmIHNlbGVjdGVkXCJcclxuICB9LFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWNhcmQuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NDYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gIGZvbGRlckljb24gPSAnJztcclxuICBpc0VkaXRhYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJvcmRlcmVkID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgb3BlbmVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGVkaXRhYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGlzUmFkaW8gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbG9hZGluZyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBob3ZlcmFibGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdXNlRGVmYXVsdENvbnRlbnQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBzb3VyY2VzOiBTb3VyY2VbXTtcclxuICBAT3V0cHV0KCkgcGxheWVyUmVhZHk6IEV2ZW50RW1pdHRlcjxWZ0FQST4gPSBuZXcgRXZlbnRFbWl0dGVyPFZnQVBJPigpO1xyXG4gIEBJbnB1dCgpIGJvZHlTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuICBASW5wdXQoKSBjb3ZlcjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgYm9keTogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgYWN0aW9uczogQXJyYXk8VGVtcGxhdGVSZWY8dm9pZD4+ID0gW107XHJcbiAgQElucHV0KCkgdGVhbTogYW55ID0gW107XHJcbiAgQElucHV0KCkgZmlsZTogQmlnRmlsZSA9IG51bGw7XHJcbiAgQElucHV0KCkgcHJvamVjdDogYW55ID0gW107XHJcbiAgQElucHV0KCkgdG9kbzogYW55O1xyXG4gIEBJbnB1dCgpIHdlYXRoZXI6IFdlYXRoZXI7XHJcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGNtYWNzVHlwZTogQ21hY3NDYXJkVHlwZSA9ICdub25lJztcclxuICBASW5wdXQoKSBjbWFjc0ljb246IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGNtYWNzSWNvbk9wZW5lZEZvbGRlcjogc3RyaW5nID0gJ2ljb25VSUxhcmdlLUZvbGRlcic7XHJcbiAgQElucHV0KCkgY21hY3NJY29uQ2xvc2VkRm9sZGVyOiBzdHJpbmcgPSAnaWNvblVJTGFyZ2UtRm9sZGVyJztcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbGFiZWxUaXRsZTogc3RyaW5nO1xyXG4gIEBPdXRwdXQoKSB0aXRsZUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICBASW5wdXQoKSBleHRyYTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQENvbnRlbnRDaGlsZChDbWFjc0NhcmRUYWJDb21wb25lbnQpIHRhYjogQ21hY3NDYXJkVGFiQ29tcG9uZW50O1xyXG4gIEBPdXRwdXQoKSBvbmRsY2xpY2tDYXJkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBASW5wdXQoKSBzZWxlY3RlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHZhbHVlIDogYW55O1xyXG4gIEBPdXRwdXQoKSBzZWxlY3RlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgICAgICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgICAgICAgICAgICBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxyXG4gICAgICAgICAgICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1jYXJkJyk7XHJcbiAgfVxyXG5cclxuICBvcGVuTWFpbCgkZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICAkZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGxpbmsgPSBgbWFpbHRvOiAke3RoaXMucHJvamVjdC50ZWFtTGVhZC5lbWFpbH1gO1xyXG4gICAgbG9jYXRpb24uaHJlZiA9IGxpbms7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmNtYWNzVHlwZSA9PT0gJ2ZvbGRlcicpIHtcclxuICAgICAgdGhpcy5mb2xkZXJJY29uID0gdGhpcy5vcGVuZWQgPyB0aGlzLmNtYWNzSWNvbk9wZW5lZEZvbGRlciA6IHRoaXMuY21hY3NJY29uQ2xvc2VkRm9sZGVyO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pc0VkaXRhYmxlID0gdGhpcy5lZGl0YWJsZTtcclxuICB9XHJcblxyXG4gIG9uUGxheWVyUmVhZHkoYXBpOiBWZ0FQSSkge1xyXG4gICAgdGhpcy5wbGF5ZXJSZWFkeS5lbWl0KGFwaSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgY2hlY2tSYWRpbygpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSkgb25DbGljayhldmVudDogRXZlbnQpIHtcclxuICAgIGlmICghdGhpcy51c2VEZWZhdWx0Q29udGVudCB8fCB0aGlzLmNtYWNzVHlwZSA9PT0gJ2JpZy1maWxlJykge1xyXG4gICAgICB0aGlzLnNlbGVjdChldmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkYmxjbGljaycsIFsnJGV2ZW50J10pIG9uRGJsQ2xpY2soZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5jbWFjc1R5cGUgPT09ICdmb2xkZXInICYmICF0aGlzLnVzZURlZmF1bHRDb250ZW50KSB7XHJcbiAgICAgIHRoaXMub3BlbmVkID0gIXRoaXMub3BlbmVkO1xyXG4gICAgICB0aGlzLmZvbGRlckljb24gPSB0aGlzLm9wZW5lZCA/IHRoaXMuY21hY3NJY29uT3BlbmVkRm9sZGVyIDogdGhpcy5jbWFjc0ljb25DbG9zZWRGb2xkZXI7XHJcbiAgICAgIGlmICh0aGlzLm9wZW5lZCkge1xyXG4gICAgICAgIHRoaXMub3Blbi5lbWl0KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZS5lbWl0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLmNtYWNzVHlwZSA9PT0gJ3Byb2plY3QnKXtcclxuICAgICAgdGhpcy5vbmRsY2xpY2tDYXJkLmVtaXQodGhpcy5wcm9qZWN0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1hcmtGb3JDaGVjaygpOiB2b2lkIHtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0KGV2ZW50OiBFdmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIGlmICghdGhpcy5pc1JhZGlvKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9ICF0aGlzLnNlbGVjdGVkO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkID8gdGhpcy5zZWxlY3RlZCA6ICF0aGlzLnNlbGVjdGVkO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUVudGVyKGV2ZW50OiBLZXlib2FyZEV2ZW50LCB0aXRsZUNvbnRhaW5lciwgdGl0bGVTcGFuKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICB0aXRsZUNvbnRhaW5lci5zdHlsZS50ZXh0T3ZlcmZsb3cgPSAnZWxsaXBzaXMnO1xyXG4gICAgICBjb25zdCB0ZXh0ID0gdGl0bGVTcGFuLmlubmVyVGV4dC5yZXBsYWNlKC8oXFxyXFxufFxcbnxcXHIpL2dtLFwiXCIpO1xyXG4gICAgICB0aXRsZVNwYW4uaW5uZXJUZXh0ID0gdGV4dDtcclxuICAgICAgdGhpcy5pc0VkaXRhYmxlID0gZmFsc2U7XHJcbiAgICAgIHRoaXMudGl0bGVDaGFuZ2UuZW1pdCh0ZXh0KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUVkaXQoZXZlbnQ6IEtleWJvYXJkRXZlbnQsIHRpdGxlU3Bhbikge1xyXG4gICAgY29uc3QgdGV4dCA9IHRpdGxlU3Bhbi5pbm5lclRleHQucmVwbGFjZSgvKFxcclxcbnxcXG58XFxyKS9nbSxcIlwiKTtcclxuICAgIHRoaXMudGl0bGVDaGFuZ2UuZW1pdCh0ZXh0KTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZUVkaXQodGl0bGVDb250YWluZXIpIHtcclxuICAgIHRoaXMuaXNFZGl0YWJsZSA9IHRoaXMuZWRpdGFibGU7XHJcbiAgICBpZiAodGhpcy5pc0VkaXRhYmxlKXtcclxuICAgICAgdGl0bGVDb250YWluZXIuc3R5bGUudGV4dE92ZXJmbG93ID0gJ2luaXRpYWwnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0SW5pdGlhbHMobmFtZTogYW55KSB7XHJcbiAgICBsZXQgaW5pdGlhbHMgPSBuYW1lLm1hdGNoKC9cXGJcXHcvZykgfHwgW107XHJcbiAgICBpbml0aWFscyA9ICgoaW5pdGlhbHMuc2hpZnQoKSB8fCAnJykgKyAoaW5pdGlhbHMucG9wKCkgfHwgJycpKS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgcmV0dXJuIGluaXRpYWxzO1xyXG4gIH1cclxuXHJcbiAgZ2V0QmFja2dyb3VuZEltYWdlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSgndXJsKFxcJycgKyB0aGlzLnByb2plY3QucHJvamVjdEltYWdlICsgJ1xcJyknKTtcclxuICB9XHJcbn1cclxuIl19