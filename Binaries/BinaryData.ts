
const BinaryDataInit = {
    [GameVersion.JP]: "PICAQIiEEhgchAqUOIQCCDyggD5gpVCAfYUiFH2JA6ZOgAQg",
    [GameVersion.EU]: "PICAQYiEkHgchAqUOIQCCDyggD5gpc7gfYUiFH2JA6ZOgAQg",
    [GameVersion.US]: "PICAQIiEcNgchAqUOIQCCDyggD5gpa9AfYUiFH2JA6ZOgAQg",
};
const BinaryDataMain = {
    [GameVersion.JP]: {
        [PatchVersion.V1]: "PYCAM2GM+6R9iAOmToAAITxggDRgYxpsSAAABXyIAqY4hABQSAABSYhthjgoAwAAQYIAIIBtjeg4gAAFOKAAAT2AgCxhjP4QfYgDpk6AACE4YAAAPICAADigAAA9gIABYYxWFH2JA6ZOgAQglCH/4HwIAqaQAQAkv6EACHx+G3h8nyN4P6CAsH+j63hIAAAFfIgCpjiE/3A4oAO4PYCANmGMhcx9iAOmToAAIX+j63g4gAO4SAAA0ZOtkQg4fQO4kG2RDDxggDNgY/CkY6QA/EgAAJ09gIA0YYwacH2JA6Z/w/N4f+T7eLuhAAiAAQAkfAgDpjghACBOgAQgfH8beDxggTBgYzu0PICAsGCEARxIAABdf+P7eEuD75B8fxt4P8CAAGPDTRg8gICwOKADuEuGhJ1jw00YOIADuEgAAEk8YIAAYGNj+GPETuxIAAAhPGCANGBjGmw8gIAAYIRNhEgAAA1/4/t4SIA6UHyDIFBUhAG6PKBIAHylI3iQowAAOIAABJQh/+B8CAKmkAEAJL+hAAh8fxt4fJ4jeD+ggDNjpdpIfKgDpk6AACFjo9ssfGgDpn/j+3h/xPN4ToAAIbuhAAiAAQAkfAgDpjghACBOgAAgSDOsuXx6G3g/4IAAO8AAAD+gAA9jvUJAOGAAADiAAAA4oAAASDU/2SwD//9AggAMN73//0GB/+QsAwAAQIIBiDxggD1gY7CAOIAAAGCFoABL/+UdPGCAPWBjsIA4gAAAYISgAEv//004YAAAPICAPWCEsIA4oAAASDVILSwDAABBogAQLAP/+kGCAAhIAAE4OGAAAEg1PhEsAwAAQIIBKDiAABQ4oP/8SAAA0Xx9G3g4YAAAY+RQwH+l63hINVSNLAMAAECCAOA4gAIAOKD/4EgAAKl8ext4f6PreH9k23g4oAIAOMAgAEg1XZUsAwAAQIIApIObAEA7nAH/V5wALH9k23hIAABtf4TjeDigACBIAABpfHsbeH+j63h/ZNt4f4XjeDjAIgBINV1VLAMAAECCAGSAmwAggLsAREgAAD18fBt4SDOrYX9j23h/hON4SDO5cSwDAAFAggAoSDOrXZOfQtyTf0Lgg9sANEgAADCAbYa0SCzL6IBthrRILMVcf2PbeEgzu9VIM6sxf4TjeEv//+F/ZNt4S///2X+j63hINVTFf6TreEv//8k4YAAASDVH2SweAABBggAMf8gDpk6AACF/Q9N4SDOrBTxggD5IABNAQ3VzdG9tIFJFTCBGaWxlAA==",
        [PatchVersion.V2]: "PYCAM2GM+6R9iAOmToAAITxggDRgYxpsSAAABXyIAqY4hABQSAABSYhthjgoAwAAQYIAIIBtjeg4gAAFOKAAAT2AgCxhjP4QfYgDpk6AACE4YAAAPICAADigAAA9gIABYYxWFH2JA6ZOgAQglCH/4HwIAqaQAQAkv6EACHx+G3h8nyN4P6CAsH+j63hIAAAFfIgCpjiE/3A4oAP4PYCANmGMhcx9iAOmToAAIX+j63g4gAP4SAAA0ZOtkQg4fQP4kG2RDDxggDNgY/CkY6QA/EgAAJ09gIA0YYwacH2JA6Z/w/N4f+T7eLuhAAiAAQAkfAgDpjghACBOgAQgfH8beDxggTBgYzu0PICAsGCEARxIAABdf+P7eEuD75B8fxt4P8CAAGPDTRg8gICwOKAD+EuGhJ1jw00YOIAD+EgAAEk8YIAAYGNj+GPETuxIAAAhPGCANGBjGmw8gIAAYIRNhEgAAA1/4/t4SIA6UHyDIFBUhAG6PKBIAHylI3iQowAAOIAABJQh/+B8CAKmkAEAJL+hAAh8fxt4fJ4jeD+ggDNjpdpIfKgDpk6AACFjo9ssfGgDpn/j+3h/xPN4ToAAIbuhAAiAAQAkfAgDpjghACBOgAAgSDOsuXx4G3g/4IAAO8AAAD+gAA9jvUJAOGAAADiAAAA4oAAASDU/2SwD//9AggAMN73//0GB/+QsAwAAQIIByDxggD1gY7CAOIAAAGCFoABL/+UdPGCAPWBjsIA4gAAAYISgAEv//004YAAAPICAPWCEsIA4oAAASDVILSwDAABBogAQLAP/+kGCAAhIAAF4OGAAAEg1PhEsAwAAQIIBaDiAABQ4oP/8SAABGXx9G3g4YAAAY+RRAH+l63hINVSNLAMAAECCASA4gAQAOKD/4EgAAPF8ext4f6PreH9k23g4oAQAOMAgAEg1XZUsAwAAQIIA5IDbAEA7hgH/V5wALINbAkiAewJEfBoblnwAGdZ8ANBRQaIAHH9E03h8owDQf0UoOH9FGhR8hNBQfMYiFIK7AiB/JqoUfBngQECgAAh/meN4f2TbeEgAAHF/JMt4OKAAIEgAAG18ext4f6PreH9k23h/heN4OMAiAEg1XREsAwAAQIIAYEgzqy1/m9IUf2PbeH+E43hIM7ldLAMAAUCCADhIM6slfLqqFIBthrR/ZNt4SCzNhZOfQtyTf0Lgg9sANEgAACiAbYa0SCzLoIBthrRILMUUf2PbeEgzu41IM6rpf2TbeEv//+F/o+t4SDVUhX+k63hL///ROGAAAEg1R5ksHgAAQYIADH/IA6ZOgAAhfwPDeEgzqsU8YIA+SAATAEN1c3RvbSBSRUwgRmlsZQA=",
    },
    [GameVersion.EU]: {
        [PatchVersion.V1]: "PYCAM2GM5Qh9iAOmToAAITxggDRgYwPQSAAABXyIAqY4hABQSAABSYhthjgoAwAAQYIAIIBtjfA4gAAFOKAAAT2AgCxhjOd0fYgDpk6AACE4YAAAPICAADigAAA9gIABYYxVyH2JA6ZOgAQglCH/4HwIAqaQAQAkv6EACHx+G3h8nyN4P6CAsH+j63hIAAAFfIgCpjiE/3A4oAO4PYCANmGMb2B9iAOmToAAIX+j63g4gAO4SAAA0ZOtkRA4fQO4kG2RFDxggDNgY9oIY6QA/EgAAJ09gIA0YYwD1H2JA6Z/w/N4f+T7eLuhAAiAAQAkfAgDpjghACBOgAQgfH8beDxggTBgYzu0PICAsGCEARxIAABdf+P7eEuD2PR8fxt4P8CAAGPDTRg8gICwOKADuEuGbjFjw00YOIADuEgAAEk8YIAAYGNj+GPETuxIAAAhPGCANGBjA9A8gIAAYIRNhEgAAA1/4/t4SIA6UHyDIFBUhAG6PKBIAHylI3iQowAAOIAABJQh/+B8CAKmkAEAJL+hAAh8fxt4fJ4jeD+ggDNjpcOsfKgDpk6AACFjo8SQfGgDpn/j+3h/xPN4ToAAIbuhAAiAAQAkfAgDpjghACBOgAAgSDOWHXx6G3g/4IAAO8AAAD+gAA9jvUJAOGAAADiAAAA4oAAASDUpbSwD//9AggAMN73//0GB/+QsAwAAQIIBiDxggD5gYy7gOIAAAGCFoABL/+UdPGCAPmBjLuA4gAAAYISgAEv//004YAAAPICAPmCELuA4oAAASDUxwSwDAABBogAQLAP/+kGCAAhIAAE4OGAAAEg1J6UsAwAAQIIBKDiAABQ4oP/8SAAA0Xx9G3g4YAAAY+RQwH+l63hINT4hLAMAAECCAOA4gAIAOKD/4EgAAKl8ext4f6PreH9k23g4oAIAOMAgAEg1RyksAwAAQIIApIObAEA7nAH/V5wALH9k23hIAABtf4TjeDigACBIAABpfHsbeH+j63h/ZNt4f4XjeDjAIgBINUbpLAMAAECCAGSAmwAggLsAREgAAD18fBt4SDOUxX9j23h/hON4SDOi1SwDAAFAggAoSDOUwZOfQtyTf0Lgg9sANEgAADCAbYa0SCy1TIBthrRILK7Af2PbeEgzpTlIM5SVf4TjeEv//+F/ZNt4S///2X+j63hINT5Zf6TreEv//8k4YAAASDUxbSweAABBggAMf8gDpk6AACF/Q9N4SDOUaTxggD9IABNAQ3VzdG9tIFJFTCBGaWxlAA==",
        [PatchVersion.V2]: "PYCAM2GM5Qh9iAOmToAAITxggDRgYwPQSAAABXyIAqY4hABQSAABSYhthjgoAwAAQYIAIIBtjfA4gAAFOKAAAT2AgCxhjOd0fYgDpk6AACE4YAAAPICAADigAAA9gIABYYxVyH2JA6ZOgAQglCH/4HwIAqaQAQAkv6EACHx+G3h8nyN4P6CAsH+j63hIAAAFfIgCpjiE/3A4oAP4PYCANmGMb2B9iAOmToAAIX+j63g4gAP4SAAA0ZOtkRA4fQP4kG2RFDxggDNgY9oIY6QA/EgAAJ09gIA0YYwD1H2JA6Z/w/N4f+T7eLuhAAiAAQAkfAgDpjghACBOgAQgfH8beDxggTBgYzu0PICAsGCEARxIAABdf+P7eEuD2PR8fxt4P8CAAGPDTRg8gICwOKAD+EuGbjFjw00YOIAD+EgAAEk8YIAAYGNj+GPETuxIAAAhPGCANGBjA9A8gIAAYIRNhEgAAA1/4/t4SIA6UHyDIFBUhAG6PKBIAHylI3iQowAAOIAABJQh/+B8CAKmkAEAJL+hAAh8fxt4fJ4jeD+ggDNjpcOsfKgDpk6AACFjo8SQfGgDpn/j+3h/xPN4ToAAIbuhAAiAAQAkfAgDpjghACBOgAAgSDOWHXx4G3g/4IAAO8AAAD+gAA9jvUJAOGAAADiAAAA4oAAASDUpbSwD//9AggAMN73//0GB/+QsAwAAQIIByDxggD5gYy7gOIAAAGCFoABL/+UdPGCAPmBjLuA4gAAAYISgAEv//004YAAAPICAPmCELuA4oAAASDUxwSwDAABBogAQLAP/+kGCAAhIAAF4OGAAAEg1J6UsAwAAQIIBaDiAABQ4oP/8SAABGXx9G3g4YAAAY+RRAH+l63hINT4hLAMAAECCASA4gAQAOKD/4EgAAPF8ext4f6PreH9k23g4oAQAOMAgAEg1RyksAwAAQIIA5IDbAEA7hgH/V5wALINbAkiAewJEfBoblnwAGdZ8ANBRQaIAHH9E03h8owDQf0UoOH9FGhR8hNBQfMYiFIK7AiB/JqoUfBngQECgAAh/meN4f2TbeEgAAHF/JMt4OKAAIEgAAG18ext4f6PreH9k23h/heN4OMAiAEg1RqUsAwAAQIIAYEgzlJF/m9IUf2PbeH+E43hIM6LBLAMAAUCCADhIM5SJfLqqFIBthrR/ZNt4SCy26ZOfQtyTf0Lgg9sANEgAACiAbYa0SCy1BIBthrRILK54f2PbeEgzpPFIM5RNf2TbeEv//+F/o+t4SDU+GX+k63hL///ROGAAAEg1MS0sHgAAQYIADH/IA6ZOgAAhfwPDeEgzlCk8YIA/SAATAEN1c3RvbSBSRUwgRmlsZQA=",
    },
    [GameVersion.US]: {
        [PatchVersion.V1]: "PYCAM2GM1wh9iAOmToAAITxggDNgY/XQSAAABXyIAqY4hABQSAABSYhthjgoAwAAQYIAIIBtjeg4gAAFOKAAAT2AgCxhjNl0fYgDpk6AACE4YAAAPICAADigAAA9gIABYYxWFH2JA6ZOgAQglCH/4HwIAqaQAQAkv6EACHx+G3h8nyN4P6CAsH+j63hIAAAFfIgCpjiE/3A4oAO4PYCANmGMYTB9iAOmToAAIX+j63g4gAO4SAAA0ZOtkQg4fQO4kG2RDDxggDNgY8wIY6QA/EgAAJ09gIAzYYz11H2JA6Z/w/N4f+T7eLuhAAiAAQAkfAgDpjghACBOgAQgfH8beDxggTBgYzu0PICAsGCEARxIAABdf+P7eEuDyvR8fxt4P8CAAGPDTRg8gICwOKADuEuGYAFjw00YOIADuEgAAEk8YIAAYGNj+GPETuxIAAAhPGCAM2Bj9dA8gIAAYIRNhEgAAA1/4/t4SIA6UHyDIFBUhAG6PKBIAHylI3iQowAAOIAABJQh/+B8CAKmkAEAJL+hAAh8fxt4fJ4jeD+ggDNjpbWsfKgDpk6AACFjo7aQfGgDpn/j+3h/xPN4ToAAIbuhAAiAAQAkfAgDpjghACBOgAAgSDOIHXx6G3g/4IAAO8AAAD+gAA9jvUJAOGAAADiAAAA4oAAASDUbPSwD//9AggAMN73//0GB/+QsAwAAQIIBiDxggD5gYw9AOIAAAGCFoABL/+UdPGCAPmBjD0A4gAAAYISgAEv//004YAAAPICAPmCED0A4oAAASDUjkSwDAABBogAQLAP/+kGCAAhIAAE4OGAAAEg1GXUsAwAAQIIBKDiAABQ4oP/8SAAA0Xx9G3g4YAAAY+RQwH+l63hINS/xLAMAAECCAOA4gAIAOKD/4EgAAKl8ext4f6PreH9k23g4oAIAOMAgAEg1OPksAwAAQIIApIObAEA7nAH/V5wALH9k23hIAABtf4TjeDigACBIAABpfHsbeH+j63h/ZNt4f4XjeDjAIgBINTi5LAMAAECCAGSAmwAggLsAREgAAD18fBt4SDOGxX9j23h/hON4SDOU1SwDAAFAggAoSDOGwZOfQtyTf0Lgg9sANEgAADCAbYa0SCynTIBthrRILKDAf2PbeEgzlzlIM4aVf4TjeEv//+F/ZNt4S///2X+j63hINTApf6TreEv//8k4YAAASDUjPSweAABBggAMf8gDpk6AACF/Q9N4SDOGaTxggD9IABNAQ3VzdG9tIFJFTCBGaWxlAA==",
        [PatchVersion.V2]: "PYCAM2GM1wh9iAOmToAAITxggDNgY/XQSAAABXyIAqY4hABQSAABSYhthjgoAwAAQYIAIIBtjeg4gAAFOKAAAT2AgCxhjNl0fYgDpk6AACE4YAAAPICAADigAAA9gIABYYxWFH2JA6ZOgAQglCH/4HwIAqaQAQAkv6EACHx+G3h8nyN4P6CAsH+j63hIAAAFfIgCpjiE/3A4oAP4PYCANmGMYTB9iAOmToAAIX+j63g4gAP4SAAA0ZOtkQg4fQP4kG2RDDxggDNgY8wIY6QA/EgAAJ09gIAzYYz11H2JA6Z/w/N4f+T7eLuhAAiAAQAkfAgDpjghACBOgAQgfH8beDxggTBgYzu0PICAsGCEARxIAABdf+P7eEuDyvR8fxt4P8CAAGPDTRg8gICwOKAD+EuGYAFjw00YOIAD+EgAAEk8YIAAYGNj+GPETuxIAAAhPGCAM2Bj9dA8gIAAYIRNhEgAAA1/4/t4SIA6UHyDIFBUhAG6PKBIAHylI3iQowAAOIAABJQh/+B8CAKmkAEAJL+hAAh8fxt4fJ4jeD+ggDNjpbWsfKgDpk6AACFjo7aQfGgDpn/j+3h/xPN4ToAAIbuhAAiAAQAkfAgDpjghACBOgAAgSDOIHXx4G3g/4IAAO8AAAD+gAA9jvUJAOGAAADiAAAA4oAAASDUbPSwD//9AggAMN73//0GB/+QsAwAAQIIByDxggD5gYw9AOIAAAGCFoABL/+UdPGCAPmBjD0A4gAAAYISgAEv//004YAAAPICAPmCED0A4oAAASDUjkSwDAABBogAQLAP/+kGCAAhIAAF4OGAAAEg1GXUsAwAAQIIBaDiAABQ4oP/8SAABGXx9G3g4YAAAY+RRAH+l63hINS/xLAMAAECCASA4gAQAOKD/4EgAAPF8ext4f6PreH9k23g4oAQAOMAgAEg1OPksAwAAQIIA5IDbAEA7hgH/V5wALINbAkiAewJEfBoblnwAGdZ8ANBRQaIAHH9E03h8owDQf0UoOH9FGhR8hNBQfMYiFIK7AiB/JqoUfBngQECgAAh/meN4f2TbeEgAAHF/JMt4OKAAIEgAAG18ext4f6PreH9k23h/heN4OMAiAEg1OHUsAwAAQIIAYEgzhpF/m9IUf2PbeH+E43hIM5TBLAMAAUCCADhIM4aJfLqqFIBthrR/ZNt4SCyo6ZOfQtyTf0Lgg9sANEgAACiAbYa0SCynBIBthrRILKB4f2PbeEgzlvFIM4ZNf2TbeEv//+F/o+t4SDUv6X+k63hL///ROGAAAEg1Iv0sHgAAQYIADH/IA6ZOgAAhfwPDeEgzhik8YIA/SAATAEN1c3RvbSBSRUwgRmlsZQA=",
    },
};
