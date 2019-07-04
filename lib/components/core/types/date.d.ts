import { IndexableObject } from 'ng-zorro-antd/core';
/**
 * Wrapping kind APIs for date operating and unify
 * NOTE: every new API return new CandyDate object without side effects to the former Date object
 * NOTE: most APIs are based on local time other than customized locale id (this needs tobe support in future)
 * TODO: support format() against to angular's core API
 */
export declare type DateType = 'date' | 'month' | 'year' | 'range' | 'week';
