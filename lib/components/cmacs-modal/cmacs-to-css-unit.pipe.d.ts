import { PipeTransform } from '@angular/core';
export declare class CmacsToCssUnitPipe implements PipeTransform {
    transform(value: number | string, defaultUnit?: string): string;
}
