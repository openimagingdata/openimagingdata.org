export interface ICDESet {
  id: string;
  name: string;
  description: string;
  version: IVersion;
  url?: string;
  indexCodes: IIndexCode[];
  bodyParts?: IBodyPart[];
  authors?: IAuthors;
  history: IEvent[];
  specialty: ISpecialty[];
  elements: Element[];
  references?: IReference[];
}

export interface IAuthors {
  person: IPerson[];
  organization: IOrganization[];
}

export interface IOrganization {
  name: string;
  abbreviation?: string;
  url?: string;
  comment?: string;
  role?: 'author' | 'sponsor' | 'translator' | 'reviewer' | 'contributor';
}

export interface ISpecialty {
  name: string;
  abbreviation:
    | 'BR'
    | 'BQ'
    | 'CA'
    | 'CH'
    | 'ER'
    | 'GI'
    | 'GU'
    | 'HN'
    | 'IR'
    | 'MI'
    | 'MK'
    | 'NR'
    | 'OB'
    | 'OI'
    | 'OT'
    | 'PD'
    | 'QI'
    | 'RS'
    | 'VA'
    | 'CT'
    | 'MR'
    | 'NM'
    | 'US'
    | 'AI'
    | 'ED'
    | 'HP'
    | 'IN'
    | 'LM'
    | 'PH'
    | 'PR'
    | 'RO'
    | 'SQ';
}

export interface IPerson {
  name: string;
  role?: 'author' | 'editor' | 'translator' | 'reviewer' | 'contributor';
  orcid_id?: string;
  twitter_handle?: string;
  url?: string;
}

export interface IBodyPart {
  name: string;
  index_codes: IIndexCode;
}

export interface IIndexCode {
  system: string;
  code: string;
  display?: string;
  href?: string;
}

export type Element =
  | IValueSetElement
  | IIntegerElement
  | IFloatElement
  | IBooleanElement;

export interface IElement {
  id: string;
  name: string;
  definition: string;
  question?: string;
  version: IVersion;
  index_codes?: IIndexCode[];
  specialty?: ISpecialty[];
  authors?: IAuthors;
  history: IEvent[];
  references?: IReference[];
}

export interface IValueSetElement extends IElement {
  value_set: IValueSet;
}
export function isValueSetElement(
  element: Element
): element is IValueSetElement {
  return (element as IValueSetElement).value_set !== undefined;
}

export interface IIntegerElement extends IElement {
  integer_values: INumberValues;
}
export function isIntegerElement(element: Element): element is IIntegerElement {
  return (element as IIntegerElement).integer_values !== undefined;
}

export interface IFloatElement extends IElement {
  float_values: INumberValues;
}
export function isFloatElement(element: Element): element is IFloatElement {
  return (element as IFloatElement).float_values !== undefined;
}

export interface IBooleanElement extends IElement {
  boolean_values: 'boolean';
}
export function isBooleanElement(element: Element): element is IBooleanElement {
  return (element as IBooleanElement).boolean_values !== undefined;
}

export interface INumberValues {
  min: number;
  max: number;
  step: number;
  unit: string;
}

export interface IValueSet {
  min_cardinality?: number;
  max_cardinality?: number;
  values: IValue[];
}

export interface IValue {
  value: string;
  name: string;
  definition?: string;
  images?: IImage[];
  index_codes?: IIndexCode[];
}

export interface IVersion {
  name: string;
  date: Date;
  status: Status;
}

export type Status = 'Proposed' | 'Published' | 'Retired';

export interface IEvent {
  date: Date;
  status: Status;
}

export interface IReference {
  citation: string;
  doi_url?: string;
  pubmed_id?: string;
  url?: string;
}

export interface IImage {
  url: string;
  height?: number;
  width?: number;
  caption?: string;
  rights?: string;
  authors?: IAuthors;
  references?: IReference[];
}
