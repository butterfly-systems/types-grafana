declare class TableModel {
    columns: any[];
    rows: any[];
    type: string;
    constructor();
    sort(options: any): void;
}

declare function mergeTablesIntoModel(dst?: TableModel, ...tables: TableModel[]): TableModel;

export { TableModel as default, mergeTablesIntoModel };
