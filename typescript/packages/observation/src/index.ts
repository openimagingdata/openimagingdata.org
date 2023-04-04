import CdeSet from "@openraddata/cde_set";

export class Observation {
  private readonly _cdeSet: CdeSet;
  constructor(cdeSet: CdeSet) {
    this._cdeSet = cdeSet;
  }
}