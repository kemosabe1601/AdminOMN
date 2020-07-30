// Table data
export interface Table {
    category: string;
    programName: string;
    viewNumber: number;
}

// Search Data
export interface SearchResult {
    tables: Table[];
    total: number;
}
