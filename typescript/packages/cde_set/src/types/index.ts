import {
  ICDESet,
  IIndexCode,
  IVersion,
  IEvent,
  ISpecialty,
  Element,
  IBodyPart,
  IReference,
  IValueSetElement,
  IAuthors,
  IValueSet,
  IElement,
  IIntegerElement,
  IBooleanElement,
  IFloatElement,
  INumberValues,
  isBooleanElement,
  isFloatElement,
  isIntegerElement,
  isValueSetElement,
} from '../interfaces/cdeSetInterfaces';

export class CdeSet implements ICDESet {
  private readonly cdeSetData: ICDESet;
  private readonly _elementObjects: Element[];

  constructor(data: ICDESet) {
    this.cdeSetData = data;
    this._elementObjects = this.cdeSetData?.elements.map((element) => {
      if (isValueSetElement(element)) return new ValueSetElement(element);
      if (isIntegerElement(element)) return new IntegerElement(element);
      if (isFloatElement(element)) return new FloatElement(element);
      if (isBooleanElement(element)) return new BooleanElement(element);
      const _unknownElementCheck: never = element;
      return _unknownElementCheck;
    });
  }

  public get id(): string {
    return this.cdeSetData?.id || '';
  }

  public get name(): string {
    return this.cdeSetData?.name || '';
  }

  public get description(): string {
    return this.cdeSetData?.description || '';
  }

  public get version(): IVersion {
    return (
      this.cdeSetData?.version || {
        name: 'New',
        date: new Date(),
        status: 'Proposed',
      }
    );
  }

  public get indexCodes(): IIndexCode[] {
    return this.cdeSetData?.indexCodes || [];
  }

  public get bodyParts(): IBodyPart[] | undefined {
    return this.cdeSetData?.bodyParts;
  }

  public get history(): IEvent[] {
    return this.cdeSetData?.history || [];
  }

  public get specialty(): ISpecialty[] {
    return this.cdeSetData?.specialty || [];
  }

  public get references(): IReference[] {
    return this.cdeSetData?.references || [];
  }

  public get elements(): Element[] {
    return this._elementObjects;
  }
}

export class ValueSetElement implements IValueSetElement {
  private readonly _data: IValueSetElement;
  constructor(data: IValueSetElement) {
    this._data = data;
  }

  public get id(): string {
    return this._data.id;
  }
  public get name(): string {
    return this._data.name;
  }
  public get definition(): string {
    return this._data.definition;
  }
  public get question(): string | undefined {
    return this._data.question;
  }
  public get version(): IVersion {
    return this._data.version;
  }
  public get indexCodes(): IIndexCode[] | undefined {
    return this._data.index_codes;
  }
  public get specialty(): ISpecialty[] | undefined {
    return this._data.specialty;
  }
  public get authors(): IAuthors | undefined {
    return this._data.authors;
  }
  public get history(): IEvent[] {
    return this._data.history;
  }
  public get references(): IReference[] | undefined {
    return this._data.references;
  }

  public get value_set(): IValueSet {
    return this._data.value_set;
  }
}

export class IntegerElement implements IIntegerElement {
  private readonly _data: IIntegerElement;
  constructor(data: IIntegerElement) {
    this._data = data;
  }

  public get id(): string {
    return this._data.id;
  }
  public get name(): string {
    return this._data.name;
  }
  public get definition(): string {
    return this._data.definition;
  }
  public get question(): string | undefined {
    return this._data.question;
  }
  public get version(): IVersion {
    return this._data.version;
  }
  public get indexCodes(): IIndexCode[] | undefined {
    return this._data.index_codes;
  }
  public get specialty(): ISpecialty[] | undefined {
    return this._data.specialty;
  }
  public get authors(): IAuthors | undefined {
    return this._data.authors;
  }
  public get history(): IEvent[] {
    return this._data.history;
  }
  public get references(): IReference[] | undefined {
    return this._data.references;
  }

  public get integer_values(): INumberValues {
    return this._data.integer_values;
  }
}

export class FloatElement implements IFloatElement {
  private readonly _data: IFloatElement;
  constructor(data: IFloatElement) {
    this._data = data;
  }

  public get id(): string {
    return this._data.id;
  }
  public get name(): string {
    return this._data.name;
  }
  public get definition(): string {
    return this._data.definition;
  }
  public get question(): string | undefined {
    return this._data.question;
  }
  public get version(): IVersion {
    return this._data.version;
  }
  public get indexCodes(): IIndexCode[] | undefined {
    return this._data.index_codes;
  }
  public get specialty(): ISpecialty[] | undefined {
    return this._data.specialty;
  }
  public get authors(): IAuthors | undefined {
    return this._data.authors;
  }
  public get history(): IEvent[] {
    return this._data.history;
  }
  public get references(): IReference[] | undefined {
    return this._data.references;
  }

  public get float_values(): INumberValues {
    return this._data.float_values;
  }
}

export class BooleanElement implements IBooleanElement {
  private readonly _data: IBooleanElement;
  constructor(data: IBooleanElement) {
    this._data = data;
  }

  public get id(): string {
    return this._data.id;
  }
  public get name(): string {
    return this._data.name;
  }
  public get definition(): string {
    return this._data.definition;
  }
  public get question(): string | undefined {
    return this._data.question;
  }
  public get version(): IVersion {
    return this._data.version;
  }
  public get indexCodes(): IIndexCode[] | undefined {
    return this._data.index_codes;
  }
  public get specialty(): ISpecialty[] | undefined {
    return this._data.specialty;
  }
  public get authors(): IAuthors | undefined {
    return this._data.authors;
  }
  public get history(): IEvent[] {
    return this._data.history;
  }
  public get references(): IReference[] | undefined {
    return this._data.references;
  }

  public get boolean_values(): 'boolean' {
    return this._data.boolean_values;
  }
}
