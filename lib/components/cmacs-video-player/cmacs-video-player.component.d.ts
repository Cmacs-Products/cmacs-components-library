import { EventEmitter } from '@angular/core';
import { VgAPI } from "videogular2/compiled/src/core/services/vg-api";
export interface Source {
    src: string;
    type: string;
}
export declare class CmacsVideoPlayerComponent {
    sources: Source[];
    playerReady: EventEmitter<VgAPI>;
    constructor();
    onPlayerReady(api: VgAPI): void;
}
