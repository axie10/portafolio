export interface Autocompleted {
    name:        string;
    local_names: LocalNames;
    lat:         number;
    lon:         number;
    country:     string;
    state?:      string;
}

export interface LocalNames {
    hu?: string;
    sk?: string;
    pt?: string;
    ru?: string;
    hi?: string;
}
