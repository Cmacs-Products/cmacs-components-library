export declare type ColumnCount = 1 | 2 | 3 | 4 | 6 | 8 | 12 | 24;
export declare type ColumnType = 'gutter' | 'column' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export interface CmacsListGrid {
    gutter?: number;
    span?: number;
    column?: ColumnCount;
    xs?: ColumnCount;
    sm?: ColumnCount;
    md?: ColumnCount;
    lg?: ColumnCount;
    xl?: ColumnCount;
    xxl?: ColumnCount;
}
