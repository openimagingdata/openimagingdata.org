# Differences between Defined CDE Set Schema and RadElement API

The CDE Set Schema is a RelaxNG schema that defines the structure of a CDE Set. The RadElement API has a de facto JSON schema that defines the structure of a CDE Set. The schemas are similar, but not identical. This document describes the differences between the two schemas.

## Differences

- Structural differences with arrays; for example, the CDE Set schema defines a wrapper element `<images>` with individual `<image>` elements, while the RadElement API defines a JSON array of image objects. Similarly so for `<index_codes>`/`<index_code>`, `<elements>`/`<element>`.
- CDE Set Schema defines a `<url>` element of `<index_code>`, while the API defines an `href` property of the `index_code` object.
- CDE Set Schema specifies that `<system>` may be `RADLEX`, `SNOMEDCT`, or `LOINC`, while the API doesn't appear to constrain it (or constrains it according to its internal database)
- Structure of `authors` is different in the API; `authors` property is an object with a `person` array and an `organization` array, while the CDE Set Schema defines a `<authors>` element with interspersed `<person>` and `<organization>` child elements.

### `Set` Definition Differences
- Present in CDE Set Schema, not in RadElement API
    - `images`
    - `modality` (a complex structure)
    - `biological_sex`
    - `age_range`
-  Present in RadElement API, not in CDE Set Schema
    - `url`
    - `body_parts`

### `Element` Definition Differences

- Schema elements without corresponding API properties:
  - `<parent_set>`
  - `<images>`
  - `<biological_sex>`
  - `<age_range>`
  - `<modality>`
  - `<images>`
- API properties without corresponding schema elements:
  - `url`
  - `question`
- In `<element>`/`<value_set>`, schema has child elements not clearly in API:
  - `<references>`
- In `<element>`/`<float_values>`, `<step>` is defined as an integer; not apparently so in the API (but is the schema right?)
