
const BinaryDataInit = {
    [GameVersion.JP]: "PICAQIiEEhgchAqUOIQCCDyggD5gpVCAfYUiFH2JA6ZOgAQg",
    [GameVersion.EU]: "PICAQYiEkHgchAqUOIQCCDyggD5gpc7gfYUiFH2JA6ZOgAQg",
    [GameVersion.US]: "PICAQIiEcNgchAqUOIQCCDyggD5gpa9AfYUiFH2JA6ZOgAQg",
};

const BinaryDataMain = {
    [GameVersion.JP]: "PGCANGBjGmxIAAAFfIgCpjiEAFBIAAFJiG2GOCgDAABBggAggG2N6DiAAAU4oAABPYCALGGM/hB9iAOmToAAIThgAAA8gIAAOKAAAD2AgAFhjFYUfYkDpk6ABCCUIf/gfAgCppABACS/oQAIfH4beHyfI3g/oICwf6PreEgAAAV8iAKmOIT/gDigAzw9gIA2YYyFzH2IA6ZOgAAhf6PreDiAAzxIAADRk62RCDh9AzyQbZEMPGCAM2Bj8KRjpADsSAAAnT2AgDRhjBpwfYkDpn/D83h/5Pt4u6EACIABACR8CAOmOCEAIE6ABCB8fxt4PGCBMGBjO7Q8gICwYIQBDEgAAF1/4/t4S4PvoHx/G3g/wIAAY8NNGDyAgLA4oAM8S4aErWPDTRg4gAM8SAAASTxggABgY2P4Y8RO3EgAACE8YIA0YGMabDyAgABghE10SAAADX/j+3hIgDpgfIMgUFSEAbo8oEgAfKUjeJCjAAA4gAAElCH/4HwIAqaQAQAkv6EACHx/G3h8niN4P6CAM2Ol2kh8qAOmToAAIWOj2yx8aAOmf+P7eH/E83hOgAAhu6EACIABACR8CAOmOCEAIE6AACA/4IAAO8AAAD+gAA9jvUJAOGAAADiAAAA4oAAASDU/8SwD//9AggAMN73//0GB/+QsAwAAQIIBLDhgAAA8gIA9YISwgDigAABINUhtLAMAAECCARA4gAAUSAAAvXx9G3g4YAAAY+RQRH+l63hINVTtLAMAAECCAMw4gAIASAAAmXx7G3h/o+t4f2TbeDigAgA4wCAASDVd+SwDAABAggCUg5sAQDucAf9XnAAsf2TbeEgAAF1/hON4SAAAXXx7G3h/o+t4f2TbeH+F43g4wCIASDVdvSwDAABAggBYgJsAIEgAADV8fBt4f2PbeH+E43hIM7nhLAMAAUCCACiTn0Lck39C4IPbADRIAAAwgG2GtEgszFyAbYa0OKAAIEgsxcx/Y9t4SDO8RX+E43hL///hf2TbeEv//9l/o+t4SDVVOX+k63hL///JOGAAAEg1SE0sHgAAQYIADH/IA6ZOgAAhPGCAPkgAE7xDdXN0b20gUkVMIEZpbGUA",
    [GameVersion.EU]: "PGCANGBjA9BIAAAFfIgCpjiEAFBIAAFJiG2GOCgDAABBggAggG2N8DiAAAU4oAABPYCALGGM53R9iAOmToAAIThgAAA8gIAAOKAAAD2AgAFhjFXIfYkDpk6ABCCUIf/gfAgCppABACS/oQAIfH4beHyfI3g/oICwf6PreEgAAAV8iAKmOIT/gDigAzw9gIA2YYxvYH2IA6ZOgAAhf6PreDiAAzxIAADRk62REDh9AzyQbZEUPGCAM2Bj2ghjpADsSAAAnT2AgDRhjAPUfYkDpn/D83h/5Pt4u6EACIABACR8CAOmOCEAIE6ABCB8fxt4PGCBMGBjO7Q8gICwYIQBDEgAAF1/4/t4S4PZBHx/G3g/wIAAY8NNGDyAgLA4oAM8S4ZuQWPDTRg4gAM8SAAASTxggABgY2P4Y8RO3EgAACE8YIA0YGMD0DyAgABghE10SAAADX/j+3hIgDpgfIMgUFSEAbo8oEgAfKUjeJCjAAA4gAAElCH/4HwIAqaQAQAkv6EACHx/G3h8niN4P6CAM2Olw6x8qAOmToAAIWOjxJB8aAOmf+P7eH/E83hOgAAhu6EACIABACR8CAOmOCEAIE6AACA/4IAAO8AAAD+gAA9jvUJAOGAAADiAAAA4oAAASDUphSwD//9AggAMN73//0GB/+QsAwAAQIIBLDhgAAA8gIA+YIQu4DigAABINTIBLAMAAECCARA4gAAUSAAAvXx9G3g4YAAAY+RQRH+l63hINT6BLAMAAECCAMw4gAIASAAAmXx7G3h/o+t4f2TbeDigAgA4wCAASDVHjSwDAABAggCUg5sAQDucAf9XnAAsf2TbeEgAAF1/hON4SAAAXXx7G3h/o+t4f2TbeH+F43g4wCIASDVHUSwDAABAggBYgJsAIEgAADV8fBt4f2PbeH+E43hIM6NFLAMAAUCCACiTn0Lck39C4IPbADRIAAAwgG2GtEgstcCAbYa0OKAAIEgsrzB/Y9t4SDOlqX+E43hL///hf2TbeEv//9l/o+t4SDU+zX+k63hL///JOGAAAEg1MeEsHgAAQYIADH/IA6ZOgAAhPGCAP0gAE7xDdXN0b20gUkVMIEZpbGUA",
    [GameVersion.US]: "PGCAM2Bj9dBIAAAFfIgCpjiEAFBIAAFJiG2GOCgDAABBggAggG2N6DiAAAU4oAABPYCALGGM2XR9iAOmToAAIThgAAA8gIAAOKAAAD2AgAFhjFYUfYkDpk6ABCCUIf/wfAgCppABABS/oQAIfH4beHyfI3g/oICwf6PreEgAAAV8iAKmOIT/gDigAzw9gIA2YYxhMH2IA6ZOgAAhf6PreDiAAzxIAADRk62RCDh9AzyQbZEMPGCAM2BjzAhjpADsSAAAnT2AgDNhjPXUfYkDpn/D83h/5Pt4u6EACIABABR8CAOmOCEAEE6ABCB8fxt4PGCBMGBjO7Q8gICwYIQBDEgAAF1/4/t4S4PLBHx/G3g/wIAAY8NNGDyAgLA4oAM8S4ZgEWPDTRg4gAM8SAAASTxggABgY2P4Y8RO3EgAACE8YIAzYGP10DyAgABghE10SAAADX/j+3hIgDpgfIMgUFSEAbo8oEgAfKUjeJCjAAA4gAAElCH/4HwIAqaQAQAkv6EACHx/G3h8niN4P6CAM2Oltax8qAOmToAAIWOjtpB8aAOmf+P7eH/E83hOgAAhu6EACIABACR8CAOmOCEAIE6AACA/4IAAO8AAAD+gAA9jvUJAOGAAADiAAAA4oAAASDUbVSwD//9AggAMN73//0GB/+QsAwAAQIIBLDhgAAA8gIA+YIQPQDigAABINSPRLAMAAECCARA4gAAUSAAAvXx9G3g4YAAAY+RQRH+l63hINTBRLAMAAECCAMw4gAIASAAAmXx7G3h/o+t4f2TbeDigAgA4wCAASDU5XSwDAABAggCUg5sAQDucAf9XnAAsf2TbeEgAAF1/hON4SAAAXXx7G3h/o+t4f2TbeH+F43g4wCIASDU5ISwDAABAggBYgJsAIEgAADV8fBt4f2PbeH+E43hIM5VFLAMAAUCCACiTn0Lck39C4IPbADRIAAAwgG2GtEgsp8CAbYa0OKAAIEgsoTB/Y9t4SDOXqX+E43hL///hf2TbeEv//9l/o+t4SDUwnX+k63hL///JOGAAAEg1I7EsHgAAQYIADH/IA6ZOgAAhPGCAP0gAE7xDdXN0b20gUkVMIEZpbGUA",
};