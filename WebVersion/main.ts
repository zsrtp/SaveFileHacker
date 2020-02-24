
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

function decodeBinaryData(S: string): ArrayBuffer {
    return Uint8Array.from(window.atob(S), function(c) { return c.charCodeAt(0); }).buffer;
}

const enum PatchErrorCode {
    Success,
    NotSaveFile,
    WrongSaveFileGameID,
    WrongSaveFileInternalName,
    InvalidFileNumber,
}

function patch(view: DataView, fileNumber: number): PatchErrorCode {
    const version = readString(view.buffer, 0x00, 0x06) as GameVersion;

    const validVersions = [GameVersion.JP, GameVersion.US, GameVersion.EU];
    if (!validVersions.includes(version))
        return PatchErrorCode.WrongSaveFileGameID;

    const internalFilename = readString(view.buffer, 0x08, 0x08);
    if (internalFilename !== 'gczelda2')
        return PatchErrorCode.WrongSaveFileInternalName;

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

    function patchFilesBytes(offset: number, value: ArrayBuffer): void {
        writeBytes(view.buffer, offsetFile0 + offset, value);
        writeBytes(view.buffer, offsetFile1 + offset, value);
    }

    // Write the new file name (Link's name).
    patchFilesBytes(0x1B4, makeStrBytes('REL Loader\0'));

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
    patchFilesBytes(0x1E4 + decodeBinaryData(BinaryDataInit[version]).byteLength, decodeBinaryData(BinaryDataMain[version]));

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
        errorMessage.textContent = 'This save file is not for The Legend of Zela: Twilight Princess';
        return false;
    } else if (e === PatchErrorCode.WrongSaveFileInternalName) {
        errorMessage.textContent = 'This save file has the wrong internal ID. Please make sure you are using a normal The Legend of Zela: Twilight Princess save file.';
        return false;
    } else if (e === PatchErrorCode.InvalidFileNumber) {
        // should not happen
        throw "whoops";
    }
}

function fileSubmitted(): void {
    const input = document.querySelector<HTMLInputElement>('input#fileupload');
    const file = input.files[0];

    if (!file.name.endsWith('.gci')) {
        if (!displayResult(PatchErrorCode.NotSaveFile))
            return;
    }

    const fileNumberInput = document.querySelector<HTMLSelectElement>('select#filenumber');
    const fileNumber = Number(fileNumberInput.selectedOptions[0].textContent);

    const outputFilename = `${file.name.replace(/\..*$/, '')}_REL_Loader.gci`;
    const reader = new FileReader();
    reader.onload = () => {
        const buffer = reader.result as ArrayBuffer;
        const view = new DataView(buffer);
        const res = patch(view, fileNumber);
        if (!displayResult(res))
            return;
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
