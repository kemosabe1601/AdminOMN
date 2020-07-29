// Table data
export interface Table {
    name: string;
    listCount: string;
    days: string;
    startTime: string;
    endTime: string;
    salary: string;
}

// Search Data
export interface SearchResult {
    tables: Table[];
    total: number;
}
