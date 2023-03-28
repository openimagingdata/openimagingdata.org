import { ICDESet, IndexCode, Version, Event, Specialty, Element, BodyPart, Reference, IValueSetElement, Authors, ValueSet } from "../interfaces/cdeSetInterfaces";

export class CdeSet implements ICDESet {
    private cdeSetData?: ICDESet;

    constructor(data?: ICDESet){
        this.cdeSetData = data;
    }

    public get id(): string {
        return this.cdeSetData?.id || "";
    }

    public get name(): string {
        return this.cdeSetData?.name || "";
    }

    public get description(): string {
        return this.cdeSetData?.description || "";
    }

    public get version(): Version {
        return this.cdeSetData?.version || {
            name: "New",
            date: new Date(),
            status: "Proposed"
        };
    }

    public get indexCodes(): IndexCode[] {
        return this.cdeSetData?.indexCodes || [];
    }

    public get bodyParts() : BodyPart[] | undefined{
        return this.cdeSetData?.bodyParts;
    }

    public get history(): Event[] {
        return this.cdeSetData?.history || [];
    }

    public get specialty(): Specialty[] {
        return this.cdeSetData?.specialty || [];
    }

    public get references(): Reference[]  {
        return this.cdeSetData?.references || [];
    }

    public get elements() : Element[] {
        return this.cdeSetData?.elements || ValueSetElement[];
    }
}

export class ValueSetElement implements IValueSetElement {
    value_set: ValueSet;
    id: string;
    name: string;
    definition: string;
    question?: string | undefined;
    version: Version;
    index_codes?: IndexCode[] | undefined;
    specialty?: Specialty[] | undefined;
    authors?: Authors | undefined;
    history: Event[];
    references?: Reference[] | undefined;
}