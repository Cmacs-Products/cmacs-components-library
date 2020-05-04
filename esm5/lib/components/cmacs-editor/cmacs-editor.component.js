/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
var CmacsEditorComponent = /** @class */ (function () {
    function CmacsEditorComponent() {
        var _this = this;
        this.showEditor = false;
        this.oninit = new EventEmitter();
        this.onchange = new EventEmitter();
        this.height = '250px';
        this.tinyMceSettings = {
            mobile: {
                theme: 'mobile',
                plugins: ['image table'],
                toolbar: [
                    'bold', 'italic', 'underline', 'strikethrough', 'alignleft', 'aligncenter', 'alignright', 'alignjustify', 'bullist', 'numlist', 'forecolor'
                ]
            },
            menubar: false,
            image_title: true,
            resize: true,
            automatic_uploads: true,
            height: this.height,
            file_picker_types: 'image',
            images_upload_url: '#',
            setup: (/**
             * @param {?} editor
             * @return {?}
             */
            function (editor) {
                editor.on('init', (/**
                 * @param {?} obj
                 * @return {?}
                 */
                function (obj) {
                    _this.oninit.emit(obj);
                }));
                editor.on('Change', (/**
                 * @param {?} obj
                 * @return {?}
                 */
                function (obj) {
                    _this.onchange.emit(obj);
                }));
            }),
            plugins: ['image table'],
            toolbar: 'bold italic underline strikethrough  | alignleft aligncenter alignright alignjustify | bullist numlist | forecolor'
        };
    }
    /**
     * @return {?}
     */
    CmacsEditorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.showEditor = true;
        }), 100);
    };
    CmacsEditorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-editor',
                    exportAs: 'cmacsEditor',
                    template: "<editor *ngIf=\"showEditor\" [init]=\"tinyMceSettings\"></editor>\r\n",
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    CmacsEditorComponent.ctorParameters = function () { return []; };
    CmacsEditorComponent.propDecorators = {
        oninit: [{ type: Output }],
        onchange: [{ type: Output }],
        height: [{ type: Input }],
        tinyMceSettings: [{ type: Input }]
    };
    return CmacsEditorComponent;
}());
export { CmacsEditorComponent };
if (false) {
    /** @type {?} */
    CmacsEditorComponent.prototype.showEditor;
    /** @type {?} */
    CmacsEditorComponent.prototype.oninit;
    /** @type {?} */
    CmacsEditorComponent.prototype.onchange;
    /** @type {?} */
    CmacsEditorComponent.prototype.height;
    /** @type {?} */
    CmacsEditorComponent.prototype.tinyMceSettings;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtZWRpdG9yL2NtYWNzLWVkaXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBRU4saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCO0lBd0NFO1FBQUEsaUJBQWlCO1FBaENqQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ1QsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3BELGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUV2RCxXQUFNLEdBQVcsT0FBTyxDQUFDO1FBQ3pCLG9CQUFlLEdBQUc7WUFDekIsTUFBTSxFQUFFO2dCQUNOLEtBQUssRUFBRSxRQUFRO2dCQUNmLE9BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQztnQkFDeEIsT0FBTyxFQUFFO29CQUNQLE1BQU0sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxXQUFXO2lCQUM1STthQUNGO1lBQ0QsT0FBTyxFQUFFLEtBQUs7WUFDZCxXQUFXLEVBQUUsSUFBSTtZQUNqQixNQUFNLEVBQUUsSUFBSTtZQUNaLGlCQUFpQixFQUFFLElBQUk7WUFDdkIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLGlCQUFpQixFQUFFLE9BQU87WUFDMUIsaUJBQWlCLEVBQUUsR0FBRztZQUN0QixLQUFLOzs7O1lBQUUsVUFBQyxNQUFXO2dCQUNqQixNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU07Ozs7Z0JBQUUsVUFBQyxHQUFHO29CQUNwQixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDeEIsQ0FBQyxFQUFDLENBQUM7Z0JBQ0gsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFROzs7O2dCQUFFLFVBQUMsR0FBRztvQkFDdEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzFCLENBQUMsRUFBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFBO1lBQ0QsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDO1lBQ3hCLE9BQU8sRUFBRSxvSEFBb0g7U0FDOUgsQ0FBQztJQUVjLENBQUM7Ozs7SUFFakIsdUNBQVE7OztJQUFSO1FBQUEsaUJBSUM7UUFIQyxVQUFVOzs7UUFBQztZQUNULEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7O2dCQTlDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSxhQUFhO29CQUN2QixpRkFBNEM7b0JBQzVDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0Qzs7Ozs7eUJBSUUsTUFBTTsyQkFDTixNQUFNO3lCQUVOLEtBQUs7a0NBQ0wsS0FBSzs7SUFtQ1IsMkJBQUM7Q0FBQSxBQWhERCxJQWdEQztTQTFDWSxvQkFBb0I7OztJQUUvQiwwQ0FBbUI7O0lBQ25CLHNDQUE4RDs7SUFDOUQsd0NBQWdFOztJQUVoRSxzQ0FBa0M7O0lBQ2xDLCtDQXlCRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgT25Jbml0LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1lZGl0b3InLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NFZGl0b3InLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1lZGl0b3IuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzRWRpdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG5cclxuICBzaG93RWRpdG9yID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIG9uaW5pdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25jaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIEBJbnB1dCgpIGhlaWdodDogc3RyaW5nID0gJzI1MHB4JztcclxuICBASW5wdXQoKSB0aW55TWNlU2V0dGluZ3MgPSB7XHJcbiAgICBtb2JpbGU6IHtcclxuICAgICAgdGhlbWU6ICdtb2JpbGUnLFxyXG4gICAgICBwbHVnaW5zOiBbJ2ltYWdlIHRhYmxlJ10sXHJcbiAgICAgIHRvb2xiYXI6IFtcclxuICAgICAgICAnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJywgJ3N0cmlrZXRocm91Z2gnLCAnYWxpZ25sZWZ0JywgJ2FsaWduY2VudGVyJywgJ2FsaWducmlnaHQnLCAnYWxpZ25qdXN0aWZ5JywgJ2J1bGxpc3QnLCAnbnVtbGlzdCcsICdmb3JlY29sb3InXHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICBtZW51YmFyOiBmYWxzZSxcclxuICAgIGltYWdlX3RpdGxlOiB0cnVlLFxyXG4gICAgcmVzaXplOiB0cnVlLFxyXG4gICAgYXV0b21hdGljX3VwbG9hZHM6IHRydWUsXHJcbiAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxyXG4gICAgZmlsZV9waWNrZXJfdHlwZXM6ICdpbWFnZScsXHJcbiAgICBpbWFnZXNfdXBsb2FkX3VybDogJyMnLFxyXG4gICAgc2V0dXA6IChlZGl0b3I6IGFueSkgPT4ge1xyXG4gICAgICBlZGl0b3Iub24oJ2luaXQnLCAob2JqKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vbmluaXQuZW1pdChvYmopO1xyXG4gICAgICB9KTtcclxuICAgICAgZWRpdG9yLm9uKCdDaGFuZ2UnLCAob2JqKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vbmNoYW5nZS5lbWl0KG9iaik7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHBsdWdpbnM6IFsnaW1hZ2UgdGFibGUnXSxcclxuICAgIHRvb2xiYXI6ICdib2xkIGl0YWxpYyB1bmRlcmxpbmUgc3RyaWtldGhyb3VnaCAgfCBhbGlnbmxlZnQgYWxpZ25jZW50ZXIgYWxpZ25yaWdodCBhbGlnbmp1c3RpZnkgfCBidWxsaXN0IG51bWxpc3QgfCBmb3JlY29sb3InXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5zaG93RWRpdG9yID0gdHJ1ZTtcclxuICAgIH0sIDEwMCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=