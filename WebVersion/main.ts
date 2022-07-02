
function readString(buffer: ArrayBuffer, offs: number, length: number): string {
    const u = new Uint8Array(buffer);
    let S = '';
    for (let i = 0; i < length; i++)
        S += String.fromCharCode(u[offs + i]);
    return S;
}

function writeBytes(buffer: ArrayBuffer, offs: number, S: ArrayBuffer): void {
    new Uint8Array(buffer).set(new Uint8Array(S), offs);
}

function makeStrBytes(S: string): ArrayBuffer {
    const u = new Uint8Array(S.length);
    for (let i = 0; i < S.length; i++)
        u[i] = S.charCodeAt(i);
    return u.buffer;
}

const enum GameVersion {
    JP = 'GZ2J01',
    US = 'GZ2E01',
    EU = 'GZ2P01',
}

const enum PatchVersion {
    V1 = 1,
    V2 = 2,
}

const BinaryDataInit = {
    [GameVersion.JP]: "PICAQIiEEhgchAqUOIQCCDyggD5gpVCAfYUiFH2JA6ZOgAQg",
    [GameVersion.EU]: "PICAQYiEkHgchAqUOIQCCDyggD5gpc7gfYUiFH2JA6ZOgAQg",
    [GameVersion.US]: "PICAQIiEcNgchAqUOIQCCDyggD5gpa9AfYUiFH2JA6ZOgAQg",
};

const BinaryDataMain = {
    [GameVersion.JP]: {
        [PatchVersion.V1]: "PGCANGBjGmxIAAAFfIgCpjiEAFBIAAFJiG2GOCgDAABBggAggG2N6DiAAAU4oAABPYCALGGM/hB9iAOmToAAIThgAAA8gIAAOKAAAD2AgAFhjFYUfYkDpk6ABCCUIf/gfAgCppABACS/oQAIfH4beHyfI3g/oICwf6PreEgAAAV8iAKmOIT/gDigA6Q9gIA2YYyFzH2IA6ZOgAAhf6PreDiAA6RIAADRk62RCDh9A6SQbZEMPGCAM2Bj8KRjpADsSAAAnT2AgDRhjBpwfYkDpn/D83h/5Pt4u6EACIABACR8CAOmOCEAIE6ABCB8fxt4PGCBMGBjO7Q8gICwYIQBDEgAAF1/4/t4S4PvoHx/G3g/wIAAY8NNGDyAgLA4oAOkS4aErWPDTRg4gAOkSAAASTxggABgY2P4Y8RO3EgAACE8YIA0YGMabDyAgABghE10SAAADX/j+3hIgDpgfIMgUFSEAbo8oEgAfKUjeJCjAAA4gAAElCH/4HwIAqaQAQAkv6EACHx/G3h8niN4P6CAM2Ol2kh8qAOmToAAIWOj2yx8aAOmf+P7eH/E83hOgAAhu6EACIABACR8CAOmOCEAIE6AACA/4IAAO8AAAD+gAA9jvUJAOGAAADiAAAA4oAAASDU/8SwD//9AggAMN73//0GB/+QsAwAAQIIBlDxggD1gY7CAOIAAAGCFoABL/+U1PGCAPWBjsIA4gAAAYIWgAEv//1U4YAAAPICAPWCEsIA4oAAASDVIRSwDAABBogAQLAP/+kGCAAhIAAFEOGAAAEg1PiksAwAAQIIBNDiAABQ4oP/8SAAA2Xx9G3g4YAAAY+RQrH+l63hINVSlLAMAAECCAOw4gAIAOKD/4EgAALF8ext4f6PreH9k23g4oAIAOMAgAEg1Xa0sAwAAQIIAsIObAEA7nAH/V5wALH9k23hIAAB1f4TjeDigACBIAABxfHsbeH+j63h/ZNt4f4XjeDjAIgBINV1tLAMAAECCAHCAmwAggLsAREgAAEV8fBt4SDOreXx6G3h/Y9t4f4TjeEgzuYUsAwABQIIALH9D03hIM6uBk59C3JN/QuCD2wA0SAAANIBthrRILMv4gG2GtEgsxWx/Y9t4SDO75X9D03hIM6tRf4TjeEv//91/ZNt4S///1X+j63hINVTRf6TreEv//8U4YAAASDVH5SweAABBggAMf8gDpk6AACE8YIA+SAATVEN1c3RvbSBSRUwgRmlsZQA=",
        [PatchVersion.V2]: "PGCANGBjGmxIAAAFfIgCpjiEAFBIAAFJiG2GOCgDAABBggAggG2N6DiAAAU4oAABPYCALGGM/hB9iAOmToAAIThgAAA8gIAAOKAAAD2AgAFhjFYUfYkDpk6ABCCUIf/gfAgCppABACS/oQAIfH4beHyfI3g/oICwf6PreEgAAAV8iAKmOIT/gDigA+Q9gIA2YYyFzH2IA6ZOgAAhf6PreDiAA+RIAADRk62RCDh9A+SQbZEMPGCAM2Bj8KRjpADsSAAAnT2AgDRhjBpwfYkDpn/D83h/5Pt4u6EACIABACR8CAOmOCEAIE6ABCB8fxt4PGCBMGBjO7Q8gICwYIQBDEgAAF1/4/t4S4PvoHx/G3g/wIAAY8NNGDyAgLA4oAPkS4aErWPDTRg4gAPkSAAASTxggABgY2P4Y8RO3EgAACE8YIA0YGMabDyAgABghE10SAAADX/j+3hIgDpgfIMgUFSEAbo8oEgAfKUjeJCjAAA4gAAElCH/4HwIAqaQAQAkv6EACHx/G3h8niN4P6CAM2Ol2kh8qAOmToAAIWOj2yx8aAOmf+P7eH/E83hOgAAhu6EACIABACR8CAOmOCEAIE6AACA/4IAAO8AAAD+gAA9jvUJAOGAAADiAAAA4oAAASDU/8SwD//9AggAMN73//0GB/+QsAwAAQIIB1DxggD1gY7CAOIAAAGCFoABL/+U1PGCAPWBjsIA4gAAAYIWgAEv//1U4YAAAPICAPWCEsIA4oAAASDVIRSwDAABBogAQLAP/+kGCAAhIAAGEOGAAAEg1PiksAwAAQIIBdDiAABQ4oP/8SAABIXx9G3g4YAAAY+RQ7H+l63hINVSlLAMAAECCASw4gAQAOKD/4EgAAPl8ext4f6PreH9k23g4oAQAOMAgAEg1Xa0sAwAAQIIA8IDbAEA7hgH/V5wALINbAkiAewJEfBoblnwAGdZ8ANBRQaIAHH9E03h8owDQf0UoOH9FGhR8hNBQfMYiFIK7AiB/JqoUfBngQECgAAh/meN4f2TbeEgAAHl/JMt4OKAAIEgAAHV8ext4f6PreH9k23h/heN4OMAiAEg1XSksAwAAQIIAbEgzq0V8eRt4f5vSFH9j23h/hON4SDO5cSwDAAFAggA8fyPLeEgzq0l8uqoUgG2GtH9k23hILM2Vk59C3JN/QuCD2wA0SAAALIBthrRILMuwgG2GtEgsxSR/Y9t4SDO7nX8jy3hIM6sJf2TbeEv//91/o+t4SDVUkX+k63hL///NOGAAAEg1R6UsHgAAQYIADH/IA6ZOgAAhPGCAPkgAExRDdXN0b20gUkVMIEZpbGUA",
    },
    [GameVersion.EU]: {
        [PatchVersion.V1]: "PGCANGBjA9BIAAAFfIgCpjiEAFBIAAFJiG2GOCgDAABBggAggG2N8DiAAAU4oAABPYCALGGM53R9iAOmToAAIThgAAA8gIAAOKAAAD2AgAFhjFXIfYkDpk6ABCCUIf/gfAgCppABACS/oQAIfH4beHyfI3g/oICwf6PreEgAAAV8iAKmOIT/gDigA6Q9gIA2YYxvYH2IA6ZOgAAhf6PreDiAA6RIAADRk62REDh9A6SQbZEUPGCAM2Bj2ghjpADsSAAAnT2AgDRhjAPUfYkDpn/D83h/5Pt4u6EACIABACR8CAOmOCEAIE6ABCB8fxt4PGCBMGBjO7Q8gICwYIQBDEgAAF1/4/t4S4PZBHx/G3g/wIAAY8NNGDyAgLA4oAOkS4ZuQWPDTRg4gAOkSAAASTxggABgY2P4Y8RO3EgAACE8YIA0YGMD0DyAgABghE10SAAADX/j+3hIgDpgfIMgUFSEAbo8oEgAfKUjeJCjAAA4gAAElCH/4HwIAqaQAQAkv6EACHx/G3h8niN4P6CAM2Olw6x8qAOmToAAIWOjxJB8aAOmf+P7eH/E83hOgAAhu6EACIABACR8CAOmOCEAIE6AACA/4IAAO8AAAD+gAA9jvUJAOGAAADiAAAA4oAAASDUphSwD//9AggAMN73//0GB/+QsAwAAQIIBlDxggD5gYy7gOIAAAGCFoABL/+U1PGCAPmBjLuA4gAAAYIWgAEv//1U4YAAAPICAPmCELuA4oAAASDUx2SwDAABBogAQLAP/+kGCAAhIAAFEOGAAAEg1J70sAwAAQIIBNDiAABQ4oP/8SAAA2Xx9G3g4YAAAY+RQrH+l63hINT45LAMAAECCAOw4gAIAOKD/4EgAALF8ext4f6PreH9k23g4oAIAOMAgAEg1R0EsAwAAQIIAsIObAEA7nAH/V5wALH9k23hIAAB1f4TjeDigACBIAABxfHsbeH+j63h/ZNt4f4XjeDjAIgBINUcBLAMAAECCAHCAmwAggLsAREgAAEV8fBt4SDOU3Xx6G3h/Y9t4f4TjeEgzouksAwABQIIALH9D03hIM5Tlk59C3JN/QuCD2wA0SAAANIBthrRILLVcgG2GtEgsrtB/Y9t4SDOlSX9D03hIM5S1f4TjeEv//91/ZNt4S///1X+j63hINT5lf6TreEv//8U4YAAASDUxeSweAABBggAMf8gDpk6AACE8YIA/SAATVEN1c3RvbSBSRUwgRmlsZQA=",
        [PatchVersion.V2]: "PGCANGBjA9BIAAAFfIgCpjiEAFBIAAFJiG2GOCgDAABBggAggG2N8DiAAAU4oAABPYCALGGM53R9iAOmToAAIThgAAA8gIAAOKAAAD2AgAFhjFXIfYkDpk6ABCCUIf/gfAgCppABACS/oQAIfH4beHyfI3g/oICwf6PreEgAAAV8iAKmOIT/gDigA+Q9gIA2YYxvYH2IA6ZOgAAhf6PreDiAA+RIAADRk62REDh9A+SQbZEUPGCAM2Bj2ghjpADsSAAAnT2AgDRhjAPUfYkDpn/D83h/5Pt4u6EACIABACR8CAOmOCEAIE6ABCB8fxt4PGCBMGBjO7Q8gICwYIQBDEgAAF1/4/t4S4PZBHx/G3g/wIAAY8NNGDyAgLA4oAPkS4ZuQWPDTRg4gAPkSAAASTxggABgY2P4Y8RO3EgAACE8YIA0YGMD0DyAgABghE10SAAADX/j+3hIgDpgfIMgUFSEAbo8oEgAfKUjeJCjAAA4gAAElCH/4HwIAqaQAQAkv6EACHx/G3h8niN4P6CAM2Olw6x8qAOmToAAIWOjxJB8aAOmf+P7eH/E83hOgAAhu6EACIABACR8CAOmOCEAIE6AACA/4IAAO8AAAD+gAA9jvUJAOGAAADiAAAA4oAAASDUphSwD//9AggAMN73//0GB/+QsAwAAQIIB1DxggD5gYy7gOIAAAGCFoABL/+U1PGCAPmBjLuA4gAAAYIWgAEv//1U4YAAAPICAPmCELuA4oAAASDUx2SwDAABBogAQLAP/+kGCAAhIAAGEOGAAAEg1J70sAwAAQIIBdDiAABQ4oP/8SAABIXx9G3g4YAAAY+RQ7H+l63hINT45LAMAAECCASw4gAQAOKD/4EgAAPl8ext4f6PreH9k23g4oAQAOMAgAEg1R0EsAwAAQIIA8IDbAEA7hgH/V5wALINbAkiAewJEfBoblnwAGdZ8ANBRQaIAHH9E03h8owDQf0UoOH9FGhR8hNBQfMYiFIK7AiB/JqoUfBngQECgAAh/meN4f2TbeEgAAHl/JMt4OKAAIEgAAHV8ext4f6PreH9k23h/heN4OMAiAEg1Rr0sAwAAQIIAbEgzlKl8eRt4f5vSFH9j23h/hON4SDOi1SwDAAFAggA8fyPLeEgzlK18uqoUgG2GtH9k23hILLb5k59C3JN/QuCD2wA0SAAALIBthrRILLUUgG2GtEgsroh/Y9t4SDOlAX8jy3hIM5Rtf2TbeEv//91/o+t4SDU+JX+k63hL///NOGAAAEg1MTksHgAAQYIADH/IA6ZOgAAhPGCAP0gAExRDdXN0b20gUkVMIEZpbGUA",
    },
    [GameVersion.US]: {
        [PatchVersion.V1]: "PGCAM2Bj9dBIAAAFfIgCpjiEAFBIAAFJiG2GOCgDAABBggAggG2N6DiAAAU4oAABPYCALGGM2XR9iAOmToAAIThgAAA8gIAAOKAAAD2AgAFhjFYUfYkDpk6ABCCUIf/gfAgCppABACS/oQAIfH4beHyfI3g/oICwf6PreEgAAAV8iAKmOIT/gDigA6Q9gIA2YYxhMH2IA6ZOgAAhf6PreDiAA6RIAADRk62RCDh9A6SQbZEMPGCAM2BjzAhjpADsSAAAnT2AgDNhjPXUfYkDpn/D83h/5Pt4u6EACIABACR8CAOmOCEAIE6ABCB8fxt4PGCBMGBjO7Q8gICwYIQBDEgAAF1/4/t4S4PLBHx/G3g/wIAAY8NNGDyAgLA4oAOkS4ZgEWPDTRg4gAOkSAAASTxggABgY2P4Y8RO3EgAACE8YIAzYGP10DyAgABghE10SAAADX/j+3hIgDpgfIMgUFSEAbo8oEgAfKUjeJCjAAA4gAAElCH/4HwIAqaQAQAkv6EACHx/G3h8niN4P6CAM2Oltax8qAOmToAAIWOjtpB8aAOmf+P7eH/E83hOgAAhu6EACIABACR8CAOmOCEAIE6AACA/4IAAO8AAAD+gAA9jvUJAOGAAADiAAAA4oAAASDUbVSwD//9AggAMN73//0GB/+QsAwAAQIIBlDxggD5gYw9AOIAAAGCFoABL/+U1PGCAPmBjD0A4gAAAYIWgAEv//1U4YAAAPICAPmCED0A4oAAASDUjqSwDAABBogAQLAP/+kGCAAhIAAFEOGAAAEg1GY0sAwAAQIIBNDiAABQ4oP/8SAAA2Xx9G3g4YAAAY+RQrH+l63hINTAJLAMAAECCAOw4gAIAOKD/4EgAALF8ext4f6PreH9k23g4oAIAOMAgAEg1OREsAwAAQIIAsIObAEA7nAH/V5wALH9k23hIAAB1f4TjeDigACBIAABxfHsbeH+j63h/ZNt4f4XjeDjAIgBINTjRLAMAAECCAHCAmwAggLsAREgAAEV8fBt4SDOG3Xx6G3h/Y9t4f4TjeEgzlOksAwABQIIALH9D03hIM4blk59C3JN/QuCD2wA0SAAANIBthrRILKdcgG2GtEgsoNB/Y9t4SDOXSX9D03hIM4a1f4TjeEv//91/ZNt4S///1X+j63hINTA1f6TreEv//8U4YAAASDUjSSweAABBggAMf8gDpk6AACE8YIA/SAATVEN1c3RvbSBSRUwgRmlsZQA=",
        [PatchVersion.V2]: "PGCAM2Bj9dBIAAAFfIgCpjiEAFBIAAFJiG2GOCgDAABBggAggG2N6DiAAAU4oAABPYCALGGM2XR9iAOmToAAIThgAAA8gIAAOKAAAD2AgAFhjFYUfYkDpk6ABCCUIf/gfAgCppABACS/oQAIfH4beHyfI3g/oICwf6PreEgAAAV8iAKmOIT/gDigA+Q9gIA2YYxhMH2IA6ZOgAAhf6PreDiAA+RIAADRk62RCDh9A+SQbZEMPGCAM2BjzAhjpADsSAAAnT2AgDNhjPXUfYkDpn/D83h/5Pt4u6EACIABACR8CAOmOCEAIE6ABCB8fxt4PGCBMGBjO7Q8gICwYIQBDEgAAF1/4/t4S4PLBHx/G3g/wIAAY8NNGDyAgLA4oAPkS4ZgEWPDTRg4gAPkSAAASTxggABgY2P4Y8RO3EgAACE8YIAzYGP10DyAgABghE10SAAADX/j+3hIgDpgfIMgUFSEAbo8oEgAfKUjeJCjAAA4gAAElCH/4HwIAqaQAQAkv6EACHx/G3h8niN4P6CAM2Oltax8qAOmToAAIWOjtpB8aAOmf+P7eH/E83hOgAAhu6EACIABACR8CAOmOCEAIE6AACA/4IAAO8AAAD+gAA9jvUJAOGAAADiAAAA4oAAASDUbVSwD//9AggAMN73//0GB/+QsAwAAQIIB1DxggD5gYw9AOIAAAGCFoABL/+U1PGCAPmBjD0A4gAAAYIWgAEv//1U4YAAAPICAPmCED0A4oAAASDUjqSwDAABBogAQLAP/+kGCAAhIAAGEOGAAAEg1GY0sAwAAQIIBdDiAABQ4oP/8SAABIXx9G3g4YAAAY+RQ7H+l63hINTAJLAMAAECCASw4gAQAOKD/4EgAAPl8ext4f6PreH9k23g4oAQAOMAgAEg1OREsAwAAQIIA8IDbAEA7hgH/V5wALINbAkiAewJEfBoblnwAGdZ8ANBRQaIAHH9E03h8owDQf0UoOH9FGhR8hNBQfMYiFIK7AiB/JqoUfBngQECgAAh/meN4f2TbeEgAAHl/JMt4OKAAIEgAAHV8ext4f6PreH9k23h/heN4OMAiAEg1OI0sAwAAQIIAbEgzhql8eRt4f5vSFH9j23h/hON4SDOU1SwDAAFAggA8fyPLeEgzhq18uqoUgG2GtH9k23hILKj5k59C3JN/QuCD2wA0SAAALIBthrRILKcUgG2GtEgsoIh/Y9t4SDOXAX8jy3hIM4Ztf2TbeEv//91/o+t4SDUv9X+k63hL///NOGAAAEg1IwksHgAAQYIADH/IA6ZOgAAhPGCAP0gAExRDdXN0b20gUkVMIEZpbGUA",
    },
};

function decodeBinaryData(S: string): ArrayBuffer {
    return Uint8Array.from(window.atob(S), function(c) { return c.charCodeAt(0); }).buffer;
}

const enum PatchErrorCode {
    Success,
    NotSaveFile,
    WrongSaveFileGameID,
    WrongSaveFileInternalName,
    InvalidVersionNumber,
    InvalidFileNumber,
}

function patch(view: DataView, versionNumber: number, fileNumber: number): PatchErrorCode {
    const version = readString(view.buffer, 0x00, 0x06) as GameVersion;

    const validVersions = [GameVersion.JP, GameVersion.US, GameVersion.EU];
    if (!validVersions.includes(version))
        return PatchErrorCode.WrongSaveFileGameID;

    const internalFilename = readString(view.buffer, 0x08, 0x08);
    if (internalFilename !== 'gczelda2')
        return PatchErrorCode.WrongSaveFileInternalName;

    if (versionNumber < 1 || versionNumber > 2)
        return PatchErrorCode.InvalidVersionNumber;

    if (fileNumber < 1 || fileNumber > 3)
        return PatchErrorCode.InvalidFileNumber;

    const offsetFile0 = ((fileNumber - 1) * 0xA94) + 0x4048;
    const offsetFile1 = offsetFile0 + 0x2000;

    function patchFilesU16(offset: number, value: number): void {
        view.setUint16(offsetFile0 + offset, value, false);
        view.setUint16(offsetFile1 + offset, value, false);
    }

    function patchFilesU32(offset: number, value: number): void {
        view.setUint32(offsetFile0 + offset, value, false);
        view.setUint32(offsetFile1 + offset, value, false);
    }
    
    function patchFilesS64(offset: number, value: number): void {
        view.setBigInt64(offsetFile0 + offset, BigInt(value), false);
        view.setBigInt64(offsetFile1 + offset, BigInt(value), false);
    }

    function patchFilesBytes(offset: number, value: ArrayBuffer): void {
        writeBytes(view.buffer, offsetFile0 + offset, value);
        writeBytes(view.buffer, offsetFile1 + offset, value);
    }

    // Write the new file name (Link's name).
    const newFileName = `REL Loader v${versionNumber}\0`
    patchFilesBytes(0x1B4, makeStrBytes(newFileName));

    // Overwrite the next stage string with a bunch of filler 3s.
    patchFilesU32(0x58, 0x33333333);
    patchFilesU32(0x5C, 0x33333333);
    patchFilesU32(0x60, 0x33333333);
    patchFilesU32(0x64, 0x33333333);
    patchFilesU16(0x68, 0x3333);

     // Write the pointer to the pointer to the init ASM function.
    if (version === GameVersion.JP) {
        patchFilesU32(0x6A, 0x80400300 + 0x1CC - 0xBC);
    } else if (version === GameVersion.US) {
        patchFilesU32(0x6A, 0x804061C0 + 0x1CC - 0xBC);
    } else if (version === GameVersion.EU) {
        patchFilesU32(0x6A, 0x80408160 + 0x1CC - 0xBC);
    }

    // Write the pointer to the init ASM function.
    if (version === GameVersion.JP) {
        patchFilesU32(0x1CC, 0x80400300 + 0x1E4);
    } else if (version === GameVersion.US) {
        patchFilesU32(0x1CC, 0x804061C0 + 0x1E4);
    } else if (version === GameVersion.EU) {
        patchFilesU32(0x1CC, 0x80408160 + 0x1E4);
    }

    // Write the init ASM function.
    patchFilesBytes(0x1E4, decodeBinaryData(BinaryDataInit[version]));

    // Write the main ASM function.
    patchFilesBytes(0x1E4 + decodeBinaryData(BinaryDataInit[version]).byteLength, decodeBinaryData(BinaryDataMain[version][versionNumber]));
    
    // Write the last saved time as the current time, as a form of build date
    const OS_BUS_CLOCK = 162000000;
    const ticks = (Date.now() - Date.UTC(2000, 0, 1)) / 1000 * (OS_BUS_CLOCK / 4);
    patchFilesS64(0x28, ticks);

    const dataFieldSize = 0xA8C;

    let dataFieldSum = 0;
    for (let i = 0; i < dataFieldSize; i++)
        dataFieldSum = (dataFieldSum + view.getUint8(offsetFile0 + i)) >>> 0;

    // Patch in checksums.
    patchFilesU32(0xA8C, dataFieldSum);
    patchFilesU32(0xA90, (-(dataFieldSum + dataFieldSize)) >>> 0);

    return PatchErrorCode.Success;
}

function downloadFile(filename: string, data: ArrayBuffer): void {
    var blob = new Blob([data], { type: 'application/octet-stream' });
    var url = window.URL.createObjectURL(blob);
    var elem = document.createElement('a');
    elem.setAttribute('href', url);
    elem.setAttribute('download', filename);
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
}

function displayResult(e: PatchErrorCode): boolean {
    const errorMessage = document.querySelector<HTMLDivElement>('div#errormessage');

    if (e === PatchErrorCode.Success) {
        errorMessage.textContent = '';
        return true;
    } else if (e === PatchErrorCode.NotSaveFile) {
        errorMessage.textContent = 'The file you specified was not a valid .gci save file';
        return false;
    } else if (e === PatchErrorCode.WrongSaveFileGameID) {
        errorMessage.textContent = 'This save file is not for The Legend of Zelda: Twilight Princess';
        return false;
    } else if (e === PatchErrorCode.WrongSaveFileInternalName) {
        errorMessage.textContent = 'This save file has the wrong internal ID. Please make sure you are using a normal The Legend of Zelda: Twilight Princess save file.';
        return false;
    } else if (e === PatchErrorCode.InvalidVersionNumber) {
        // should not happen
        throw "Invalid version number.";
    } else if (e === PatchErrorCode.InvalidFileNumber) {
        // should not happen
        throw "Invalid file number.";
    }
}

function fileSubmitted(): void {
    const input = document.querySelector<HTMLInputElement>('input#fileupload');
    const file = input.files[0];

    if (!file.name.endsWith('.gci')) {
        if (!displayResult(PatchErrorCode.NotSaveFile))
            return;
    }

    const versionNumberInput = document.querySelector<HTMLSelectElement>('select#versionnumber');
    const versionNumber = Number(versionNumberInput.selectedOptions[0].textContent);

    const fileNumberInput = document.querySelector<HTMLSelectElement>('select#filenumber');
    const fileNumber = Number(fileNumberInput.selectedOptions[0].textContent);

    const reader = new FileReader();
    reader.onload = () => {
        const buffer = reader.result as ArrayBuffer;
        const view = new DataView(buffer);
        const res = patch(view, versionNumber, fileNumber);
        if (!displayResult(res))
            return;

        const outputFilename = `${file.name.replace(/\..*$/, '')}_REL_Loader_v${versionNumber}.gci`;
        downloadFile(outputFilename, buffer);
    }
    reader.readAsArrayBuffer(file);
}

function main(): void {
    const form = document.querySelector<HTMLFormElement>('form#uploadform');
    form.onsubmit = (e) => {
        fileSubmitted();
        return false;
    };
}

window.onload = () => {
    main();
};
