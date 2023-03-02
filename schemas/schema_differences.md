# Differences between Defined CDE Set Schema and RadElement API

The CDE Set Schema is a RelaxNG schema that defines the structure of a CDE Set. The RadElement API has a de facto JSON schema that defines the structure of a CDE Set. The schemas are similar, but not identical. This document describes the differences between the two schemas.

## Differences

- Structural differences with arrays; for example, the CDE Set schema defines a wrapper element `<images>` with individual `<image>` elements, while the RadElement API defines a JSON array of image objects. Similarly so for `<index_codes>`/`<index_code>`, `<elements>`/`<element>`.
- CDE Set Schema defines a `<url>` element of `<index_code>`, while the API defines an `href` property of the `index_code` object.
- CDE Set Schema specifies that `<system>` may be `RADLEX`, `SNOMEDCT`, or `LOINC`, while the API doesn't appear to constrain it (or constrains it according to its internal database)

### Present in CDE Set Schema, not in RadElement API

- `references`
- `images`
- `modality` (a complex structure)
- `biological_sex`
- `age_range`

### Present in RadElement API, not in CDE Set Schema

- `url`
- `body_parts`
