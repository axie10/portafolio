export interface Municipio {
    total_count: number;
    results:     Result[];
}

export interface Result {
    geo_point_2d: GeoPoint2D;
    mun_name:     string;
}

export interface GeoPoint2D {
    lon: number;
    lat: number;
}
