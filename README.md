## Credits
* **PistonMiner** for creating the TTYD restarting loader stub, which has been ported to this project.
* **magcius (aka Jasper)** for creating the TTYD save file hacker, which most of this repo's code is based off of. (GitHub repo for this can be found [here](https://github.com/magcius/TTYDSaveHacker))

## Overview
This is a simple webpage for hacking a The Legend of Zelda: Twilight Princess GCI save file to load a REL file from memory card slot A.

## Usage
The webpage part of this project is on Github Pages, which can be found [here](https://zsrtp.github.io/SaveFileHacker/). You simply upload a proper gci file, select the file in it to hack, and then click the hack button.

## Prerequisites
`Node.js` (can be found [here](https://nodejs.org/en/download/))  
`Yarn` (can be found [here](https://classic.yarnpkg.com/en/docs/install#windows-stable))  

`ts-node` also needs to be installed with **Node.js**. The details for doing so can be found [here](https://github.com/TypeStrong/ts-node).  

## Building
Once the prerequisites are installed, navigate to the root of the `SaveFileHacker` directory in a command prompt, and run `yarn install`. If you start getting errors such as `Binaries/generate_data.ts:4:23 - error TS2307: Cannot find module 'path'`, then running `yarn install --check-files` from the root should resolve them.

The assembly codes that will be injected into the save file are stored at `Binaries\bin`. To use them, they must be converted to strings. To convert the **bin** files to strings, run `ts-node Binaries\generate_data.ts` from the root. This will remake `BinaryData.ts`, which contains the strings for the bin files. These should then be placed inside of `WebVersion\main.ts`.  

Once the **bin** file strings are placed, `main.js` can be rebuilt by running `tsc WebVersion\main.ts` from the root. Once **main.js** is rebuilt, it can be placed in the `gh-pages` branch.
