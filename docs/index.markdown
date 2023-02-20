---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
title: Introduction
---

The Open Radiology Data Model (ORDM) project seeks to define common structures representing the data associated with clinical radiology exams. The model is centered around radiology reports, which describe imaging findings, diagnoses, and recommendations. These standard structures are labeled semantically according to standard Common Data Element (CDE) tags from the RSNA/ACR's [RadElement](https://radelement.org) repository. To support standard methods of accessing and manipulating the data structure, the project aims to develop and maintain programming interfaces in multiple languages (at least TypeScript/JavaScript, Python, and C#).

## Observations

The core of the ORDM model is the `Observation` structure, which represents a single observation or finding. An `Observation` represents an imaging finding (broadly construed; for examples, see the [gamuts.net](https://www.gamuts.net)) such as "the patient has a left-sided pleural effusion". Each `Observation` is labeled with a CDE Set ID to indicate what kind of finding it is, and the value for each attribute of the finding is labeled with a CDE Element ID. For example, the observation "_ground glass nodule measuring 8 mm in the right lower lobe_" is labeled with the CDE Set ID [`RDES195`](https://radelement.org/home/sets/set/RDES195), which identifies the observation as a "Pulmonary Nodule" and provides a standard tags for the nodules attributes, such as "8 mm", "ground glass" and "right lower lobe".

```jsonc
{
    "observations": [
        {
            // Cross-system ID for this nodule in the current report
            "observationUid": "df2c23cd-1337-4ddf-87f9-5d1d5af5f422",
            // Cross-system ID for this nodule across all reports
            "trackingUid": "ab670753-23bc-40f0-a7ba-004fd0dd9d1a",
            // CDE Set ID specifies what kind of observation this is
            "cdeSetId": "RDES195",      // Pulmonary Nodule
            // Standard anatomy; see https://anatomiclocations.org
            "bodySiteId": "RID1315",    // Right Lower Lobe
            "components": [
                {
                    "cdeId": "RDE1300",  // Presence
                    "value": "RDE1300.0" // Present
                },
                {
                    "cdeId": "RDE1301",  // Nodule composition
                    "value": "RDE1301.1" // Ground glass
                },
                {
                    "cdeId": "RDE1302",  // Nodule size in mm
                    "value": 8,          // 8 mm
                },
                {
                    "cdeId": "RDE1304",  // Nodule location
                    "value": "RDE1304.9" // Right lower lobe
                }
                // ... other attributes of the nodule
            ]
        },
    ]
}
```