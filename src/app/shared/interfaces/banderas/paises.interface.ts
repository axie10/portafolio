export interface Paises {
    flags:      Flags;
    name:       Name;
    cca3:       string;
    capital:    string[];
    maps:       Maps;
    population: number;
}

export interface Flags {
    png: string;
    svg: string;
    alt: string;
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:     string;
    official:   string;
    nativeName: { [key: string]: NativeName };
}

export interface NativeName {
    official: string;
    common:   string;
}

