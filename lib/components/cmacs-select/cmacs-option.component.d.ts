import { OnChanges, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
export declare class CmacsOptionComponent implements OnChanges {
    changes: Subject<{}>;
    template: TemplateRef<void>;
    nzLabel: string;
    divider: string;
    extendedData: string;
    nzValue: any;
    nzDisabled: boolean;
    nzCustomContent: boolean;
    ngOnChanges(): void;
}
