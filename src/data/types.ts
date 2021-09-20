export interface Book {
    Name: string,
    Author?: string,
    ID: string,
    Color?: string
}

export interface Library {
    [key: string]: Book[]
}