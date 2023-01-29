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
        _c[1 /* V1 */] = "PYCAM2GM+6R9iAOmToAAITxggDRgYxpsSAAABXyIAqY4hABQSAABSYhthjgoAwAAQYIAIIBtjeg4gAAFOKAAAT2AgCxhjP4QfYgDpk6AACE4YAAAPICAADigAAA9gIABYYxWFH2JA6ZOgAQglCH/4HwIAqaQAQAkv6EACHx+G3h8nyN4P6CAsH+j63hIAAAFfIgCpjiE/3A4oAO4PYCANmGMhcx9iAOmToAAIX+j63g4gAO4SAAA0ZOtkQg4fQO4kG2RDDxggDNgY/CkY6QA/EgAAJ09gIA0YYwacH2JA6Z/w/N4f+T7eLuhAAiAAQAkfAgDpjghACBOgAQgfH8beDxggTBgYzu0PICAsGCEARxIAABdf+P7eEuD75B8fxt4P8CAAGPDTRg8gICwOKADuEuGhJ1jw00YOIADuEgAAEk8YIAAYGNj+GPETuxIAAAhPGCANGBjGmw8gIAAYIRNhEgAAA1/4/t4SIA6UHyDIFBUhAG6PKBIAHylI3iQowAAOIAABJQh/+B8CAKmkAEAJL+hAAh8fxt4fJ4jeD+ggDNjpdpIfKgDpk6AACFjo9ssfGgDpn/j+3h/xPN4ToAAIbuhAAiAAQAkfAgDpjghACBOgAAgSDOsuXx6G3g/4IAAO8AAAD+gAA9jvUJAOGAAADiAAAA4oAAASDU/2SwD//9AggAMN73//0GB/+QsAwAAQIIBiDxggD1gY7CAOIAAAGCFoABL/+UdPGCAPWBjsIA4gAAAYISgAEv//004YAAAPICAPWCEsIA4oAAASDVILSwDAABBogAQLAP/+kGCAAhIAAE4OGAAAEg1PhEsAwAAQIIBKDiAABQ4oP/8SAAA0Xx9G3g4YAAAY+RQwH+l63hINVSNLAMAAECCAOA4gAIAOKD/4EgAAKl8ext4f6PreH9k23g4oAIAOMAgAEg1XZUsAwAAQIIApIObAEA7nAH/V5wALH9k23hIAABtf4TjeDigACBIAABpfHsbeH+j63h/ZNt4f4XjeDjAIgBINV1VLAMAAECCAGSAmwAggLsAREgAAD18fBt4SDOrYX9j23h/hON4SDO5cSwDAAFAggAoSDOrXZOfQtyTf0Lgg9sANEgAADCAbYa0SCzL6IBthrRILMVcf2PbeEgzu9VIM6sxf4TjeEv//+F/ZNt4S///2X+j63hINVTFf6TreEv//8k4YAAASDVH2SweAABBggAMf8gDpk6AACF/Q9N4SDOrBTxggD5IABNAQ3VzdG9tIFJFTCBGaWxlAA==",
        _c[2 /* V2 */] = "PYCAM2GM+6R9iAOmToAAITxggDRgYxpsSAAABXyIAqY4hABQSAABSYhthjgoAwAAQYIAIIBtjeg4gAAFOKAAAT2AgCxhjP4QfYgDpk6AACE4YAAAPICAADigAAA9gIABYYxWFH2JA6ZOgAQglCH/4HwIAqaQAQAkv6EACHx+G3h8nyN4P6CAsH+j63hIAAAFfIgCpjiE/3A4oAP4PYCANmGMhcx9iAOmToAAIX+j63g4gAP4SAAA0ZOtkQg4fQP4kG2RDDxggDNgY/CkY6QA/EgAAJ09gIA0YYwacH2JA6Z/w/N4f+T7eLuhAAiAAQAkfAgDpjghACBOgAQgfH8beDxggTBgYzu0PICAsGCEARxIAABdf+P7eEuD75B8fxt4P8CAAGPDTRg8gICwOKAD+EuGhJ1jw00YOIAD+EgAAEk8YIAAYGNj+GPETuxIAAAhPGCANGBjGmw8gIAAYIRNhEgAAA1/4/t4SIA6UHyDIFBUhAG6PKBIAHylI3iQowAAOIAABJQh/+B8CAKmkAEAJL+hAAh8fxt4fJ4jeD+ggDNjpdpIfKgDpk6AACFjo9ssfGgDpn/j+3h/xPN4ToAAIbuhAAiAAQAkfAgDpjghACBOgAAgSDOsuXx4G3g/4IAAO8AAAD+gAA9jvUJAOGAAADiAAAA4oAAASDU/2SwD//9AggAMN73//0GB/+QsAwAAQIIByDxggD1gY7CAOIAAAGCFoABL/+UdPGCAPWBjsIA4gAAAYISgAEv//004YAAAPICAPWCEsIA4oAAASDVILSwDAABBogAQLAP/+kGCAAhIAAF4OGAAAEg1PhEsAwAAQIIBaDiAABQ4oP/8SAABGXx9G3g4YAAAY+RRAH+l63hINVSNLAMAAECCASA4gAQAOKD/4EgAAPF8ext4f6PreH9k23g4oAQAOMAgAEg1XZUsAwAAQIIA5IDbAEA7hgH/V5wALINbAkiAewJEfBoblnwAGdZ8ANBRQaIAHH9E03h8owDQf0UoOH9FGhR8hNBQfMYiFIK7AiB/JqoUfBngQECgAAh/meN4f2TbeEgAAHF/JMt4OKAAIEgAAG18ext4f6PreH9k23h/heN4OMAiAEg1XREsAwAAQIIAYEgzqy1/m9IUf2PbeH+E43hIM7ldLAMAAUCCADhIM6slfLqqFIBthrR/ZNt4SCzNhZOfQtyTf0Lgg9sANEgAACiAbYa0SCzLoIBthrRILMUUf2PbeEgzu41IM6rpf2TbeEv//+F/o+t4SDVUhX+k63hL///ROGAAAEg1R5ksHgAAQYIADH/IA6ZOgAAhfwPDeEgzqsU8YIA+SAATAEN1c3RvbSBSRUwgRmlsZQA=",
        _c),
    _b["GZ2P01" /* EU */] = (_d = {},
        _d[1 /* V1 */] = "PYCAM2GM5Qh9iAOmToAAITxggDRgYwPQSAAABXyIAqY4hABQSAABSYhthjgoAwAAQYIAIIBtjfA4gAAFOKAAAT2AgCxhjOd0fYgDpk6AACE4YAAAPICAADigAAA9gIABYYxVyH2JA6ZOgAQglCH/4HwIAqaQAQAkv6EACHx+G3h8nyN4P6CAsH+j63hIAAAFfIgCpjiE/3A4oAO4PYCANmGMb2B9iAOmToAAIX+j63g4gAO4SAAA0ZOtkRA4fQO4kG2RFDxggDNgY9oIY6QA/EgAAJ09gIA0YYwD1H2JA6Z/w/N4f+T7eLuhAAiAAQAkfAgDpjghACBOgAQgfH8beDxggTBgYzu0PICAsGCEARxIAABdf+P7eEuD2PR8fxt4P8CAAGPDTRg8gICwOKADuEuGbjFjw00YOIADuEgAAEk8YIAAYGNj+GPETuxIAAAhPGCANGBjA9A8gIAAYIRNhEgAAA1/4/t4SIA6UHyDIFBUhAG6PKBIAHylI3iQowAAOIAABJQh/+B8CAKmkAEAJL+hAAh8fxt4fJ4jeD+ggDNjpcOsfKgDpk6AACFjo8SQfGgDpn/j+3h/xPN4ToAAIbuhAAiAAQAkfAgDpjghACBOgAAgSDOWHXx6G3g/4IAAO8AAAD+gAA9jvUJAOGAAADiAAAA4oAAASDUpbSwD//9AggAMN73//0GB/+QsAwAAQIIBiDxggD5gYy7gOIAAAGCFoABL/+UdPGCAPmBjLuA4gAAAYISgAEv//004YAAAPICAPmCELuA4oAAASDUxwSwDAABBogAQLAP/+kGCAAhIAAE4OGAAAEg1J6UsAwAAQIIBKDiAABQ4oP/8SAAA0Xx9G3g4YAAAY+RQwH+l63hINT4hLAMAAECCAOA4gAIAOKD/4EgAAKl8ext4f6PreH9k23g4oAIAOMAgAEg1RyksAwAAQIIApIObAEA7nAH/V5wALH9k23hIAABtf4TjeDigACBIAABpfHsbeH+j63h/ZNt4f4XjeDjAIgBINUbpLAMAAECCAGSAmwAggLsAREgAAD18fBt4SDOUxX9j23h/hON4SDOi1SwDAAFAggAoSDOUwZOfQtyTf0Lgg9sANEgAADCAbYa0SCy1TIBthrRILK7Af2PbeEgzpTlIM5SVf4TjeEv//+F/ZNt4S///2X+j63hINT5Zf6TreEv//8k4YAAASDUxbSweAABBggAMf8gDpk6AACF/Q9N4SDOUaTxggD9IABNAQ3VzdG9tIFJFTCBGaWxlAA==",
        _d[2 /* V2 */] = "PYCAM2GM5Qh9iAOmToAAITxggDRgYwPQSAAABXyIAqY4hABQSAABSYhthjgoAwAAQYIAIIBtjfA4gAAFOKAAAT2AgCxhjOd0fYgDpk6AACE4YAAAPICAADigAAA9gIABYYxVyH2JA6ZOgAQglCH/4HwIAqaQAQAkv6EACHx+G3h8nyN4P6CAsH+j63hIAAAFfIgCpjiE/3A4oAP4PYCANmGMb2B9iAOmToAAIX+j63g4gAP4SAAA0ZOtkRA4fQP4kG2RFDxggDNgY9oIY6QA/EgAAJ09gIA0YYwD1H2JA6Z/w/N4f+T7eLuhAAiAAQAkfAgDpjghACBOgAQgfH8beDxggTBgYzu0PICAsGCEARxIAABdf+P7eEuD2PR8fxt4P8CAAGPDTRg8gICwOKAD+EuGbjFjw00YOIAD+EgAAEk8YIAAYGNj+GPETuxIAAAhPGCANGBjA9A8gIAAYIRNhEgAAA1/4/t4SIA6UHyDIFBUhAG6PKBIAHylI3iQowAAOIAABJQh/+B8CAKmkAEAJL+hAAh8fxt4fJ4jeD+ggDNjpcOsfKgDpk6AACFjo8SQfGgDpn/j+3h/xPN4ToAAIbuhAAiAAQAkfAgDpjghACBOgAAgSDOWHXx4G3g/4IAAO8AAAD+gAA9jvUJAOGAAADiAAAA4oAAASDUpbSwD//9AggAMN73//0GB/+QsAwAAQIIByDxggD5gYy7gOIAAAGCFoABL/+UdPGCAPmBjLuA4gAAAYISgAEv//004YAAAPICAPmCELuA4oAAASDUxwSwDAABBogAQLAP/+kGCAAhIAAF4OGAAAEg1J6UsAwAAQIIBaDiAABQ4oP/8SAABGXx9G3g4YAAAY+RRAH+l63hINT4hLAMAAECCASA4gAQAOKD/4EgAAPF8ext4f6PreH9k23g4oAQAOMAgAEg1RyksAwAAQIIA5IDbAEA7hgH/V5wALINbAkiAewJEfBoblnwAGdZ8ANBRQaIAHH9E03h8owDQf0UoOH9FGhR8hNBQfMYiFIK7AiB/JqoUfBngQECgAAh/meN4f2TbeEgAAHF/JMt4OKAAIEgAAG18ext4f6PreH9k23h/heN4OMAiAEg1RqUsAwAAQIIAYEgzlJF/m9IUf2PbeH+E43hIM6LBLAMAAUCCADhIM5SJfLqqFIBthrR/ZNt4SCy26ZOfQtyTf0Lgg9sANEgAACiAbYa0SCy1BIBthrRILK54f2PbeEgzpPFIM5RNf2TbeEv//+F/o+t4SDU+GX+k63hL///ROGAAAEg1MS0sHgAAQYIADH/IA6ZOgAAhfwPDeEgzlCk8YIA/SAATAEN1c3RvbSBSRUwgRmlsZQA=",
        _d),
    _b["GZ2E01" /* US */] = (_e = {},
        _e[1 /* V1 */] = "PYCAM2GM1wh9iAOmToAAITxggDNgY/XQSAAABXyIAqY4hABQSAABSYhthjgoAwAAQYIAIIBtjeg4gAAFOKAAAT2AgCxhjNl0fYgDpk6AACE4YAAAPICAADigAAA9gIABYYxWFH2JA6ZOgAQglCH/4HwIAqaQAQAkv6EACHx+G3h8nyN4P6CAsH+j63hIAAAFfIgCpjiE/3A4oAO4PYCANmGMYTB9iAOmToAAIX+j63g4gAO4SAAA0ZOtkQg4fQO4kG2RDDxggDNgY8wIY6QA/EgAAJ09gIAzYYz11H2JA6Z/w/N4f+T7eLuhAAiAAQAkfAgDpjghACBOgAQgfH8beDxggTBgYzu0PICAsGCEARxIAABdf+P7eEuDyvR8fxt4P8CAAGPDTRg8gICwOKADuEuGYAFjw00YOIADuEgAAEk8YIAAYGNj+GPETuxIAAAhPGCAM2Bj9dA8gIAAYIRNhEgAAA1/4/t4SIA6UHyDIFBUhAG6PKBIAHylI3iQowAAOIAABJQh/+B8CAKmkAEAJL+hAAh8fxt4fJ4jeD+ggDNjpbWsfKgDpk6AACFjo7aQfGgDpn/j+3h/xPN4ToAAIbuhAAiAAQAkfAgDpjghACBOgAAgSDOIHXx6G3g/4IAAO8AAAD+gAA9jvUJAOGAAADiAAAA4oAAASDUbPSwD//9AggAMN73//0GB/+QsAwAAQIIBiDxggD5gYw9AOIAAAGCFoABL/+UdPGCAPmBjD0A4gAAAYISgAEv//004YAAAPICAPmCED0A4oAAASDUjkSwDAABBogAQLAP/+kGCAAhIAAE4OGAAAEg1GXUsAwAAQIIBKDiAABQ4oP/8SAAA0Xx9G3g4YAAAY+RQwH+l63hINS/xLAMAAECCAOA4gAIAOKD/4EgAAKl8ext4f6PreH9k23g4oAIAOMAgAEg1OPksAwAAQIIApIObAEA7nAH/V5wALH9k23hIAABtf4TjeDigACBIAABpfHsbeH+j63h/ZNt4f4XjeDjAIgBINTi5LAMAAECCAGSAmwAggLsAREgAAD18fBt4SDOGxX9j23h/hON4SDOU1SwDAAFAggAoSDOGwZOfQtyTf0Lgg9sANEgAADCAbYa0SCynTIBthrRILKDAf2PbeEgzlzlIM4aVf4TjeEv//+F/ZNt4S///2X+j63hINTApf6TreEv//8k4YAAASDUjPSweAABBggAMf8gDpk6AACF/Q9N4SDOGaTxggD9IABNAQ3VzdG9tIFJFTCBGaWxlAA==",
        _e[2 /* V2 */] = "PYCAM2GM1wh9iAOmToAAITxggDNgY/XQSAAABXyIAqY4hABQSAABSYhthjgoAwAAQYIAIIBtjeg4gAAFOKAAAT2AgCxhjNl0fYgDpk6AACE4YAAAPICAADigAAA9gIABYYxWFH2JA6ZOgAQglCH/4HwIAqaQAQAkv6EACHx+G3h8nyN4P6CAsH+j63hIAAAFfIgCpjiE/3A4oAP4PYCANmGMYTB9iAOmToAAIX+j63g4gAP4SAAA0ZOtkQg4fQP4kG2RDDxggDNgY8wIY6QA/EgAAJ09gIAzYYz11H2JA6Z/w/N4f+T7eLuhAAiAAQAkfAgDpjghACBOgAQgfH8beDxggTBgYzu0PICAsGCEARxIAABdf+P7eEuDyvR8fxt4P8CAAGPDTRg8gICwOKAD+EuGYAFjw00YOIAD+EgAAEk8YIAAYGNj+GPETuxIAAAhPGCAM2Bj9dA8gIAAYIRNhEgAAA1/4/t4SIA6UHyDIFBUhAG6PKBIAHylI3iQowAAOIAABJQh/+B8CAKmkAEAJL+hAAh8fxt4fJ4jeD+ggDNjpbWsfKgDpk6AACFjo7aQfGgDpn/j+3h/xPN4ToAAIbuhAAiAAQAkfAgDpjghACBOgAAgSDOIHXx4G3g/4IAAO8AAAD+gAA9jvUJAOGAAADiAAAA4oAAASDUbPSwD//9AggAMN73//0GB/+QsAwAAQIIByDxggD5gYw9AOIAAAGCFoABL/+UdPGCAPmBjD0A4gAAAYISgAEv//004YAAAPICAPmCED0A4oAAASDUjkSwDAABBogAQLAP/+kGCAAhIAAF4OGAAAEg1GXUsAwAAQIIBaDiAABQ4oP/8SAABGXx9G3g4YAAAY+RRAH+l63hINS/xLAMAAECCASA4gAQAOKD/4EgAAPF8ext4f6PreH9k23g4oAQAOMAgAEg1OPksAwAAQIIA5IDbAEA7hgH/V5wALINbAkiAewJEfBoblnwAGdZ8ANBRQaIAHH9E03h8owDQf0UoOH9FGhR8hNBQfMYiFIK7AiB/JqoUfBngQECgAAh/meN4f2TbeEgAAHF/JMt4OKAAIEgAAG18ext4f6PreH9k23h/heN4OMAiAEg1OHUsAwAAQIIAYEgzhpF/m9IUf2PbeH+E43hIM5TBLAMAAUCCADhIM4aJfLqqFIBthrR/ZNt4SCyo6ZOfQtyTf0Lgg9sANEgAACiAbYa0SCynBIBthrRILKB4f2PbeEgzlvFIM4ZNf2TbeEv//+F/o+t4SDUv6X+k63hL///ROGAAAEg1Iv0sHgAAQYIADH/IA6ZOgAAhfwPDeEgzhik8YIA/SAATAEN1c3RvbSBSRUwgRmlsZQA=",
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
