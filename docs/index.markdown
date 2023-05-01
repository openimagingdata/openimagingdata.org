---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
title: Introduction
---

The Open Radiology Data Model (ORDM) project seeks to define common structures representing the data associated with clinical radiology exams. The model is centered around radiology reports, which describe imaging findings, diagnoses, and recommendations. These standard structures are labeled semantically according to standard Common Data Element (CDE) tags from the RSNA/ACR's [RadElement](https://radelement.org) repository. 

Beyond representing individual radiology findings, the ORDM will also support standard representations for the entire data context of a radiology reports, including the report's metadata (e.g., patient demographics, referring physician, order information, the performed exams, etc.), as well the report's text, prior radiology reports, and information from the electronic health record (EHR).

![Overview of the Open Radiology Data Model (ORDM)](/assets/data_model_overview.png "Data Model Overview")


To support standard methods of accessing and manipulating the data structure, the project aims to develop and maintain programming interfaces in multiple languages (at least TypeScript/JavaScript, Python, and C#).

## Observations

The core of the ORDM model is the `Observation` structure, which represents a single observation or finding. An `Observation` represents an imaging finding (broadly construed; for examples, see the [gamuts.net](https://www.gamuts.net)) such as "the patient has a left-sided pleural effusion". Each `Observation` is labeled with a CDE Set ID to indicate what kind of finding it is, and the value for each attribute of the finding is labeled with a CDE Element ID. For example, the observation 

> "_solid nodule measuring 6 mm in the right lower lobe_" 

is labeled with the CDE Set ID [`RDES195`](https://radelement.org/home/sets/set/RDES195), which identifies the observation as a "Pulmonary Nodule" and provides a standard tags for the nodules attributes, such as "6 mm", "solid" and "right lower lobe".

![CDE Set as a data model for an Observation](/assets/CDESetObservation.svg)

The JSON FHIR Observation object could look like:

```jsonc
{
  "resourceType": "Observation",
  // Cross-system ID for this nodule in the current report
  "id": "1d9a6d1796fc",
  // CDE Set ID specifies what kind of observation this is
  "code": {
    "system": "https://radelement.org",
    "code": "RDES195",
    "display": "Pulmonary Nodule"
  },
  // Standard anatomy; see https://anatomiclocations.org
  "bodySite": {
    "code": {
      "coding": [
        {
          "system": "https://anatomiclocations.org/",
          "code": "RID1315",
          "display": "lower lobe of right lung"
        }
      ]
    }
  },
  // Attributes are represented as components
  "component": [
    // Each component consists of a CDE Element code and a value
    {
      // Presence
      "code": {
        "coding": [
          {
            "system": "https://radelement.org",
            "code": "RDE1300",
            "display": "Presence"
          }
        ]
      },
      "valueCodeableConcept": {
        "coding": [
          {
            "system": "https://radelement.org",
            "code": "RDE1300.0",
            "display": "present"
          }
        ]
      }
    },
    // Composition
    {
      "code": {
        "coding": [
          {
            "system": "https://radelement.org",
            "code": "RDE1301",
            "display": "Composition"
          }
        ]
      },
      "valueCodeableConcept": {
        "coding": [
          {
            "system": "https://radelement.org",
            "code": "RDE1301.0",
            "display": "solid"
          }
        ]
      }
    },
    // Size
    {
      "code": {
        "coding": [
          {
            "system": "https://radelement.org",
            "code": "RDE1302",
            "display": "Size"
          }
        ]
      },
      "valueString": "6"
    },
    // Location 
    {
      "code": {
        "coding": [
          {
            "system": "https://radelement.org",
            "code": "RDE1304",
            "display": "Location"
          }
        ]
      },
      "valueCodeableConcept": {
        "coding": [
          {
            "system": "https://radelement.org",
            "code": "RDE1304.9",
            "display": "right lower lobe"
          }
        ]
      }
    }
    // ... Other properties of the nodule would go here
  ]
}
```
### Supporting tools

The project will build tools to support the model in multiple languages, including JSON Schema, TypeScript/JavaScript, Python, and C#. These tools will include:

- JSON Schema for `Observation` structures (see a [draft](https://raw.githubusercontent.com/openraddata/openraddata.org/main/schemas/observation_schema.json)!)
- Wrapper libraries for managing `Observation` structures
    - Import/export from/to JSON
    - Import/export from/to FHIR
- Wrapper libraries for `CDESet` structures
    - Include detailed codes to support rich tagging of FHIR output from `Observation`
- Wrapper libraries for `CDElement` structures
    - Include detailed codes to support rich tagging of FHIR output from `Observation`