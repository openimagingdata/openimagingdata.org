export interface ICDESet {
    id:          string;
    name:        string;
    description: string;
    version:     Version;
    url?:         string;
    indexCodes: IndexCode[];
    bodyParts?:  BodyPart[];
    authors?:     Authors;
    history:     Event[];
    specialty:   Specialty[];
    elements:    Element[];
    references?:  Reference[];
}

export interface Authors {
    person:       Person[];
    organization: Organization[];
}

export interface Organization {
    name:          string;
    abbreviation?: string;
    url?:          string;
    comment?:      string;
    role?: "author" | "sponsor" | "translator" | "reviewer" | "contributor";
}

export interface Specialty {
    name:         string;
    abbreviation: "BR" | "BQ" | "CA" | "CH" | "ER" | "GI" | "GU" | "HN" | "IR" | "MI" | "MK" | "NR" | "OB" | "OI" | "OT" | "PD" | "QI" | "RS" | "VA" | "CT" | "MR" | "NM" | "US" | "AI" | "ED" | "HP" | "IN" | "LM" | "PH" | "PR" | "RO" | "SQ";
}

export interface Person {
    name:      string;
    role?:     "author" | "editor" | "translator" | "reviewer" | "contributor";
    orcid_id?: string;
    twitter_handle?: string;
    url?:       string;
}

export interface BodyPart {
    name:        string;
    index_codes: IndexCode;
}

export interface IndexCode {
    system:   string;
    code:     string;
    display?: string;
    href?:    string;
}

export type Element = IValueSetElement | IntegerElement | FloatElement | BooleanElement;

export interface AbstractElement {
    id:              string;
    name:            string;
    definition:      string;
    question?:       string;
    version:         Version;
    index_codes?:    IndexCode[];
    specialty?:      Specialty[];
    authors?:        Authors;
    history:         Event[];
    references?:     Reference[];
}

export interface IValueSetElement extends AbstractElement {
    value_set: ValueSet;
}

export interface IntegerElement extends AbstractElement {
    integer_values: NumberValues;
}

export interface FloatElement extends AbstractElement {
    float_values: NumberValues;
}

export interface BooleanElement extends AbstractElement {
    boolean_values: "boolean";
}

export interface NumberValues {
    min:  number;
    max:  number;
    step: number;
    unit: string;
}

export interface ValueSet {
    min_cardinality?: number;
    max_cardinality?: number;
    values:          Value[];
}

export interface Value {
    value:       string;
    name:        string;
    definition?:  string;
    images?:      Image[];
    index_codes?: IndexCode[];
}

export interface Version {
    name:   string;
    date:   Date;
    status: Status;
}

export type Status = "Proposed" | "Published" | "Retired";

export interface Event {
    date:   Date;
    status: Status;
}

export interface Reference {
    citation:   string;
    doi_url?:   string;
    pubmed_id?: string;
    url?:       string;
}

export interface Image {
    url: string;
    height?: number;
    width?: number;
    caption?: string;
    rights?: string;
    authors?: Authors;
    references?: Reference[];
}
