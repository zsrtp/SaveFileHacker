var _a, _b, _c, _d, _e;
function readString(buffer, offs, length) {
    var u = new Uint8Array(buffer);
    var S = '';
    for (var i = 0; i < length; i++)
        S += String.fromCharCode(u[offs + i]);
    return S;
}
function writeBytes(buffer, offs, S) {
    new Uint8Array(buffer).set(new Uint8Array(S), offs);
}
function makeStrBytes(S) {
    var u = new Uint8Array(S.length);
    for (var i = 0; i < S.length; i++)
        u[i] = S.charCodeAt(i);
    return u.buffer;
}
var BinaryDataInit = (_a = {},
    _a["GZ2J01" /* JP */] = "PICAQIiEEhgchAqUOIQCCDyggD5gpVCAfYUiFH2JA6ZOgAQg",
    _a["GZ2P01" /* EU */] = "PICAQYiEkHgchAqUOIQCCDyggD5gpc7gfYUiFH2JA6ZOgAQg",
    _a["GZ2E01" /* US */] = "PICAQIiEcNgchAqUOIQCCDyggD5gpa9AfYUiFH2JA6ZOgAQg",
    _a);
var BinaryDataMain = (_b = {},
    _b["GZ2J01" /* JP */] = (_c = {},
        _c[1 /* V1 */] = "PGCANGBjGmxIAAAFfIgCpjiEAFBIAAFJiG2GOCgDAABBggAggG2N6DiAAAU4oAABPYCALGGM/hB9iAOmToAAIThgAAA8gIAAOKAAAD2AgAFhjFYUfYkDpk6ABCCUIf/gfAgCppABACS/oQAIfH4beHyfI3g/oICwf6PreEgAAAV8iAKmOIT/gDigAzw9gIA2YYyFzH2IA6ZOgAAhf6PreDiAAzxIAADRk62RCDh9AzyQbZEMPGCAM2Bj8KRjpADsSAAAnT2AgDRhjBpwfYkDpn/D83h/5Pt4u6EACIABACR8CAOmOCEAIE6ABCB8fxt4PGCBMGBjO7Q8gICwYIQBDEgAAF1/4/t4S4PvoHx/G3g/wIAAY8NNGDyAgLA4oAM8S4aErWPDTRg4gAM8SAAASTxggABgY2P4Y8RO3EgAACE8YIA0YGMabDyAgABghE10SAAADX/j+3hIgDpgfIMgUFSEAbo8oEgAfKUjeJCjAAA4gAAElCH/4HwIAqaQAQAkv6EACHx/G3h8niN4P6CAM2Ol2kh8qAOmToAAIWOj2yx8aAOmf+P7eH/E83hOgAAhu6EACIABACR8CAOmOCEAIE6AACA/4IAAO8AAAD+gAA9jvUJAOGAAADiAAAA4oAAASDU/8SwD//9AggAMN73//0GB/+QsAwAAQIIBLDhgAAA8gIA9YISwgDigAABINUhtLAMAAECCARA4gAAUSAAAvXx9G3g4YAAAY+RQRH+l63hINVTtLAMAAECCAMw4gAIASAAAmXx7G3h/o+t4f2TbeDigAgA4wCAASDVd+SwDAABAggCUg5sAQDucAf9XnAAsf2TbeEgAAF1/hON4SAAAXXx7G3h/o+t4f2TbeH+F43g4wCIASDVdvSwDAABAggBYgJsAIEgAADV8fBt4f2PbeH+E43hIM7nhLAMAAUCCACiTn0Lck39C4IPbADRIAAAwgG2GtEgszFyAbYa0OKAAIEgsxcx/Y9t4SDO8RX+E43hL///hf2TbeEv//9l/o+t4SDVVOX+k63hL///JOGAAAEg1SE0sHgAAQYIADH/IA6ZOgAAhPGCAPkgAE7xDdXN0b20gUkVMIEZpbGUA",
        _c[2 /* V2 */] = "PGCANGBjGmxIAAAFfIgCpjiEAFBIAAFJiG2GOCgDAABBggAggG2N6DiAAAU4oAABPYCALGGM/hB9iAOmToAAIThgAAA8gIAAOKAAAD2AgAFhjFYUfYkDpk6ABCCUIf/gfAgCppABACS/oQAIfH4beHyfI3g/oICwf6PreEgAAAV8iAKmOIT/gDigA4g9gIA2YYyFzH2IA6ZOgAAhf6PreDiAA4hIAADRk62RCDh9A4iQbZEMPGCAM2Bj8KRjpADsSAAAnT2AgDRhjBpwfYkDpn/D83h/5Pt4u6EACIABACR8CAOmOCEAIE6ABCB8fxt4PGCBMGBjO7Q8gICwYIQBDEgAAF1/4/t4S4PvoHx/G3g/wIAAY8NNGDyAgLA4oAOIS4aErWPDTRg4gAOISAAASTxggABgY2P4Y8RO3EgAACE8YIA0YGMabDyAgABghE10SAAADX/j+3hIgDpgfIMgUFSEAbo8oEgAfKUjeJCjAAA4gAAElCH/4HwIAqaQAQAkv6EACHx/G3h8niN4P6CAM2Ol2kh8qAOmToAAIWOj2yx8aAOmf+P7eH/E83hOgAAhu6EACIABACR8CAOmOCEAIE6AACA/4IAAO8AAAD+gAA9jvUJAOGAAADiAAAA4oAAASDU/8SwD//9AggAMN73//0GB/+QsAwAAQIIBeDhgAAA8gIA9YISwgDigAABINUhtLAMAAECCAVw4gAAUOKD//EgAARF8fRt4OGAAAGPkUJB/pet4SDVU6SwDAABAggEUOIAEADigACBIAADpfHsbeH+j63h/ZNt4OKAEADjAIABINV3xLAMAAECCANiA2wBAO4YB/1ecACyDWwJIgHsCRHwaG5Z8ABnWfADQUUGiABx/RNN4fKMA0H9FKDh/RRoUfITQUHzGIhSCuwIgfyaqFHwZ4EBAoAAIf5njeH9k23hIAABpfyTLeDigACBIAABlfHsbeH+j63h/ZNt4f4XjeDjAIgBINV1tLAMAAECCAFR/m9IUf2PbeH+E43hIM7m9LAMAAUCCADR8uqoUgG2GtH9k23hILM3pk59C3JN/QuCD2wA0SAAAJIBthrRILMwEgG2GtEgsxXh/Y9t4SDO78X9k23hL///lf6PreEg1VO1/pOt4S///1ThgAABINUgBLB4AAEGCAAx/yAOmToAAITxggD5IABNwQ3VzdG9tIFJFTCBGaWxlAA==",
        _c),
    _b["GZ2P01" /* EU */] = (_d = {},
        _d[1 /* V1 */] = "PGCANGBjA9BIAAAFfIgCpjiEAFBIAAFJiG2GOCgDAABBggAggG2N8DiAAAU4oAABPYCALGGM53R9iAOmToAAIThgAAA8gIAAOKAAAD2AgAFhjFXIfYkDpk6ABCCUIf/gfAgCppABACS/oQAIfH4beHyfI3g/oICwf6PreEgAAAV8iAKmOIT/gDigAzw9gIA2YYxvYH2IA6ZOgAAhf6PreDiAAzxIAADRk62REDh9AzyQbZEUPGCAM2Bj2ghjpADsSAAAnT2AgDRhjAPUfYkDpn/D83h/5Pt4u6EACIABACR8CAOmOCEAIE6ABCB8fxt4PGCBMGBjO7Q8gICwYIQBDEgAAF1/4/t4S4PZBHx/G3g/wIAAY8NNGDyAgLA4oAM8S4ZuQWPDTRg4gAM8SAAASTxggABgY2P4Y8RO3EgAACE8YIA0YGMD0DyAgABghE10SAAADX/j+3hIgDpgfIMgUFSEAbo8oEgAfKUjeJCjAAA4gAAElCH/4HwIAqaQAQAkv6EACHx/G3h8niN4P6CAM2Olw6x8qAOmToAAIWOjxJB8aAOmf+P7eH/E83hOgAAhu6EACIABACR8CAOmOCEAIE6AACA/4IAAO8AAAD+gAA9jvUJAOGAAADiAAAA4oAAASDUphSwD//9AggAMN73//0GB/+QsAwAAQIIBLDhgAAA8gIA+YIQu4DigAABINTIBLAMAAECCARA4gAAUSAAAvXx9G3g4YAAAY+RQRH+l63hINT6BLAMAAECCAMw4gAIASAAAmXx7G3h/o+t4f2TbeDigAgA4wCAASDVHjSwDAABAggCUg5sAQDucAf9XnAAsf2TbeEgAAF1/hON4SAAAXXx7G3h/o+t4f2TbeH+F43g4wCIASDVHUSwDAABAggBYgJsAIEgAADV8fBt4f2PbeH+E43hIM6NFLAMAAUCCACiTn0Lck39C4IPbADRIAAAwgG2GtEgstcCAbYa0OKAAIEgsrzB/Y9t4SDOlqX+E43hL///hf2TbeEv//9l/o+t4SDU+zX+k63hL///JOGAAAEg1MeEsHgAAQYIADH/IA6ZOgAAhPGCAP0gAE7xDdXN0b20gUkVMIEZpbGUA",
        _d[2 /* V2 */] = "PGCANGBjA9BIAAAFfIgCpjiEAFBIAAFJiG2GOCgDAABBggAggG2N8DiAAAU4oAABPYCALGGM53R9iAOmToAAIThgAAA8gIAAOKAAAD2AgAFhjFXIfYkDpk6ABCCUIf/gfAgCppABACS/oQAIfH4beHyfI3g/oICwf6PreEgAAAV8iAKmOIT/gDigA4g9gIA2YYxvYH2IA6ZOgAAhf6PreDiAA4hIAADRk62REDh9A4iQbZEUPGCAM2Bj2ghjpADsSAAAnT2AgDRhjAPUfYkDpn/D83h/5Pt4u6EACIABACR8CAOmOCEAIE6ABCB8fxt4PGCBMGBjO7Q8gICwYIQBDEgAAF1/4/t4S4PZBHx/G3g/wIAAY8NNGDyAgLA4oAOIS4ZuQWPDTRg4gAOISAAASTxggABgY2P4Y8RO3EgAACE8YIA0YGMD0DyAgABghE10SAAADX/j+3hIgDpgfIMgUFSEAbo8oEgAfKUjeJCjAAA4gAAElCH/4HwIAqaQAQAkv6EACHx/G3h8niN4P6CAM2Olw6x8qAOmToAAIWOjxJB8aAOmf+P7eH/E83hOgAAhu6EACIABACR8CAOmOCEAIE6AACA/4IAAO8AAAD+gAA9jvUJAOGAAADiAAAA4oAAASDUphSwD//9AggAMN73//0GB/+QsAwAAQIIBeDhgAAA8gIA+YIQu4DigAABINTIBLAMAAECCAVw4gAAUOKD//EgAARF8fRt4OGAAAGPkUJB/pet4SDU+fSwDAABAggEUOIAEADigACBIAADpfHsbeH+j63h/ZNt4OKAEADjAIABINUeFLAMAAECCANiA2wBAO4YB/1ecACyDWwJIgHsCRHwaG5Z8ABnWfADQUUGiABx/RNN4fKMA0H9FKDh/RRoUfITQUHzGIhSCuwIgfyaqFHwZ4EBAoAAIf5njeH9k23hIAABpfyTLeDigACBIAABlfHsbeH+j63h/ZNt4f4XjeDjAIgBINUcBLAMAAECCAFR/m9IUf2PbeH+E43hIM6MhLAMAAUCCADR8uqoUgG2GtH9k23hILLdNk59C3JN/QuCD2wA0SAAAJIBthrRILLVogG2GtEgsrtx/Y9t4SDOlVX9k23hL///lf6PreEg1PoF/pOt4S///1ThgAABINTGVLB4AAEGCAAx/yAOmToAAITxggD9IABNwQ3VzdG9tIFJFTCBGaWxlAA==",
        _d),
    _b["GZ2E01" /* US */] = (_e = {},
        _e[1 /* V1 */] = "PGCAM2Bj9dBIAAAFfIgCpjiEAFBIAAFJiG2GOCgDAABBggAggG2N6DiAAAU4oAABPYCALGGM2XR9iAOmToAAIThgAAA8gIAAOKAAAD2AgAFhjFYUfYkDpk6ABCCUIf/wfAgCppABABS/oQAIfH4beHyfI3g/oICwf6PreEgAAAV8iAKmOIT/gDigAzw9gIA2YYxhMH2IA6ZOgAAhf6PreDiAAzxIAADRk62RCDh9AzyQbZEMPGCAM2BjzAhjpADsSAAAnT2AgDNhjPXUfYkDpn/D83h/5Pt4u6EACIABABR8CAOmOCEAEE6ABCB8fxt4PGCBMGBjO7Q8gICwYIQBDEgAAF1/4/t4S4PLBHx/G3g/wIAAY8NNGDyAgLA4oAM8S4ZgEWPDTRg4gAM8SAAASTxggABgY2P4Y8RO3EgAACE8YIAzYGP10DyAgABghE10SAAADX/j+3hIgDpgfIMgUFSEAbo8oEgAfKUjeJCjAAA4gAAElCH/4HwIAqaQAQAkv6EACHx/G3h8niN4P6CAM2Oltax8qAOmToAAIWOjtpB8aAOmf+P7eH/E83hOgAAhu6EACIABACR8CAOmOCEAIE6AACA/4IAAO8AAAD+gAA9jvUJAOGAAADiAAAA4oAAASDUbVSwD//9AggAMN73//0GB/+QsAwAAQIIBLDhgAAA8gIA+YIQPQDigAABINSPRLAMAAECCARA4gAAUSAAAvXx9G3g4YAAAY+RQRH+l63hINTBRLAMAAECCAMw4gAIASAAAmXx7G3h/o+t4f2TbeDigAgA4wCAASDU5XSwDAABAggCUg5sAQDucAf9XnAAsf2TbeEgAAF1/hON4SAAAXXx7G3h/o+t4f2TbeH+F43g4wCIASDU5ISwDAABAggBYgJsAIEgAADV8fBt4f2PbeH+E43hIM5VFLAMAAUCCACiTn0Lck39C4IPbADRIAAAwgG2GtEgsp8CAbYa0OKAAIEgsoTB/Y9t4SDOXqX+E43hL///hf2TbeEv//9l/o+t4SDUwnX+k63hL///JOGAAAEg1I7EsHgAAQYIADH/IA6ZOgAAhPGCAP0gAE7xDdXN0b20gUkVMIEZpbGUA",
        _e[2 /* V2 */] = "PGCAM2Bj9dBIAAAFfIgCpjiEAFBIAAFJiG2GOCgDAABBggAggG2N6DiAAAU4oAABPYCALGGM2XR9iAOmToAAIThgAAA8gIAAOKAAAD2AgAFhjFYUfYkDpk6ABCCUIf/gfAgCppABACS/oQAIfH4beHyfI3g/oICwf6PreEgAAAV8iAKmOIT/gDigA4g9gIA2YYxhMH2IA6ZOgAAhf6PreDiAA4hIAADRk62RCDh9A4iQbZEMPGCAM2BjzAhjpADsSAAAnT2AgDNhjPXUfYkDpn/D83h/5Pt4u6EACIABACR8CAOmOCEAIE6ABCB8fxt4PGCBMGBjO7Q8gICwYIQBDEgAAF1/4/t4S4PLBHx/G3g/wIAAY8NNGDyAgLA4oAOIS4ZgEWPDTRg4gAOISAAASTxggABgY2P4Y8RO3EgAACE8YIAzYGP10DyAgABghE10SAAADX/j+3hIgDpgfIMgUFSEAbo8oEgAfKUjeJCjAAA4gAAElCH/4HwIAqaQAQAkv6EACHx/G3h8niN4P6CAM2Oltax8qAOmToAAIWOjtpB8aAOmf+P7eH/E83hOgAAhu6EACIABACR8CAOmOCEAIE6AACA/4IAAO8AAAD+gAA9jvUJAOGAAADiAAAA4oAAASDUbVSwD//9AggAMN73//0GB/+QsAwAAQIIBeDhgAAA8gIA+YIQPQDigAABINSPRLAMAAECCAVw4gAAUOKD//EgAARF8fRt4OGAAAGPkUJB/pet4SDUwTSwDAABAggEUOIAEADigACBIAADpfHsbeH+j63h/ZNt4OKAEADjAIABINTlVLAMAAECCANiA2wBAO4YB/1ecACyDWwJIgHsCRHwaG5Z8ABnWfADQUUGiABx/RNN4fKMA0H9FKDh/RRoUfITQUHzGIhSCuwIgfyaqFHwZ4EBAoAAIf5njeH9k23hIAABpfyTLeDigACBIAABlfHsbeH+j63h/ZNt4f4XjeDjAIgBINTjRLAMAAECCAFR/m9IUf2PbeH+E43hIM5UhLAMAAUCCADR8uqoUgG2GtH9k23hILKlNk59C3JN/QuCD2wA0SAAAJIBthrRILKdogG2GtEgsoNx/Y9t4SDOXVX9k23hL///lf6PreEg1MFF/pOt4S///1ThgAABINSNlLB4AAEGCAAx/yAOmToAAITxggD9IABNwQ3VzdG9tIFJFTCBGaWxlAA==",
        _e),
    _b);
function decodeBinaryData(S) {
    return Uint8Array.from(window.atob(S), function (c) { return c.charCodeAt(0); }).buffer;
}
function patch(view, versionNumber, fileNumber) {
    var version = readString(view.buffer, 0x00, 0x06);
    var validVersions = ["GZ2J01" /* JP */, "GZ2E01" /* US */, "GZ2P01" /* EU */];
    if (!validVersions.includes(version))
        return 2 /* WrongSaveFileGameID */;
    var internalFilename = readString(view.buffer, 0x08, 0x08);
    if (internalFilename !== 'gczelda2')
        return 3 /* WrongSaveFileInternalName */;
    if (versionNumber < 1 || versionNumber > 2)
        return 4 /* InvalidVersionNumber */;
    if (fileNumber < 1 || fileNumber > 3)
        return 5 /* InvalidFileNumber */;
    var offsetFile0 = ((fileNumber - 1) * 0xA94) + 0x4048;
    var offsetFile1 = offsetFile0 + 0x2000;
    function patchFilesU16(offset, value) {
        view.setUint16(offsetFile0 + offset, value, false);
        view.setUint16(offsetFile1 + offset, value, false);
    }
    function patchFilesU32(offset, value) {
        view.setUint32(offsetFile0 + offset, value, false);
        view.setUint32(offsetFile1 + offset, value, false);
    }
    function patchFilesS64(offset, value) {
        view.setBigInt64(offsetFile0 + offset, BigInt(value), false);
        view.setBigInt64(offsetFile1 + offset, BigInt(value), false);
    }
    function patchFilesBytes(offset, value) {
        writeBytes(view.buffer, offsetFile0 + offset, value);
        writeBytes(view.buffer, offsetFile1 + offset, value);
    }
    // Write the new file name (Link's name).
    var newFileName = "REL Loader v" + versionNumber + "\0";
    patchFilesBytes(0x1B4, makeStrBytes(newFileName));
    // Overwrite the next stage string with a bunch of filler 3s.
    patchFilesU32(0x58, 0x33333333);
    patchFilesU32(0x5C, 0x33333333);
    patchFilesU32(0x60, 0x33333333);
    patchFilesU32(0x64, 0x33333333);
    patchFilesU16(0x68, 0x3333);
    // Write the pointer to the pointer to the init ASM function.
    if (version === "GZ2J01" /* JP */) {
        patchFilesU32(0x6A, 0x80400300 + 0x1CC - 0xBC);
    }
    else if (version === "GZ2E01" /* US */) {
        patchFilesU32(0x6A, 0x804061C0 + 0x1CC - 0xBC);
    }
    else if (version === "GZ2P01" /* EU */) {
        patchFilesU32(0x6A, 0x80408160 + 0x1CC - 0xBC);
    }
    // Write the pointer to the init ASM function.
    if (version === "GZ2J01" /* JP */) {
        patchFilesU32(0x1CC, 0x80400300 + 0x1E4);
    }
    else if (version === "GZ2E01" /* US */) {
        patchFilesU32(0x1CC, 0x804061C0 + 0x1E4);
    }
    else if (version === "GZ2P01" /* EU */) {
        patchFilesU32(0x1CC, 0x80408160 + 0x1E4);
    }
    // Write the init ASM function.
    patchFilesBytes(0x1E4, decodeBinaryData(BinaryDataInit[version]));
    // Write the main ASM function.
    patchFilesBytes(0x1E4 + decodeBinaryData(BinaryDataInit[version]).byteLength, decodeBinaryData(BinaryDataMain[version][versionNumber]));
    // Write the last saved time as the current time, as a form of build date
    var OS_BUS_CLOCK = 162000000;
    var ticks = (Date.now() - Date.UTC(2000, 0, 1)) / 1000 * (OS_BUS_CLOCK / 4);
    patchFilesS64(0x28, ticks);
    var dataFieldSize = 0xA8C;
    var dataFieldSum = 0;
    for (var i = 0; i < dataFieldSize; i++)
        dataFieldSum = (dataFieldSum + view.getUint8(offsetFile0 + i)) >>> 0;
    // Patch in checksums.
    patchFilesU32(0xA8C, dataFieldSum);
    patchFilesU32(0xA90, (-(dataFieldSum + dataFieldSize)) >>> 0);
    return 0 /* Success */;
}
function downloadFile(filename, data) {
    var blob = new Blob([data], { type: 'application/octet-stream' });
    var url = window.URL.createObjectURL(blob);
    var elem = document.createElement('a');
    elem.setAttribute('href', url);
    elem.setAttribute('download', filename);
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
}
function displayResult(e) {
    var errorMessage = document.querySelector('div#errormessage');
    if (e === 0 /* Success */) {
        errorMessage.textContent = '';
        return true;
    }
    else if (e === 1 /* NotSaveFile */) {
        errorMessage.textContent = 'The file you specified was not a valid .gci save file';
        return false;
    }
    else if (e === 2 /* WrongSaveFileGameID */) {
        errorMessage.textContent = 'This save file is not for The Legend of Zelda: Twilight Princess';
        return false;
    }
    else if (e === 3 /* WrongSaveFileInternalName */) {
        errorMessage.textContent = 'This save file has the wrong internal ID. Please make sure you are using a normal The Legend of Zelda: Twilight Princess save file.';
        return false;
    }
    else if (e === 4 /* InvalidVersionNumber */) {
        // should not happen
        throw "Invalid version number.";
    }
    else if (e === 5 /* InvalidFileNumber */) {
        // should not happen
        throw "Invalid file number.";
    }
}
function fileSubmitted() {
    var input = document.querySelector('input#fileupload');
    var file = input.files[0];
    if (!file.name.endsWith('.gci')) {
        if (!displayResult(1 /* NotSaveFile */))
            return;
    }
    var versionNumberInput = document.querySelector('select#versionnumber');
    var versionNumber = Number(versionNumberInput.selectedOptions[0].textContent);
    var fileNumberInput = document.querySelector('select#filenumber');
    var fileNumber = Number(fileNumberInput.selectedOptions[0].textContent);
    var reader = new FileReader();
    reader.onload = function () {
        var buffer = reader.result;
        var view = new DataView(buffer);
        var res = patch(view, versionNumber, fileNumber);
        if (!displayResult(res))
            return;
        var outputFilename = file.name.replace(/\..*$/, '') + "_REL_Loader_v" + versionNumber + ".gci";
        downloadFile(outputFilename, buffer);
    };
    reader.readAsArrayBuffer(file);
}
function main() {
    var form = document.querySelector('form#uploadform');
    form.onsubmit = function (e) {
        fileSubmitted();
        return false;
    };
}
window.onload = function () {
    main();
};
