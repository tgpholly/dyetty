const resetEsc = 0;
const boldEsc = 1;
const dimEsc = 2;
const italicEsc = 3;
const underlineEsc = 4;
const overlineEsc = 53;
const inverseEsc = 7;
const hiddenEsc = 8;
const strikethroughEsc = 9;

const blackEsc = 30;
const redEsc = 31;
const greenEsc = 32;
const yellowEsc = 33;
const blueEsc = 34;
const magentaEsc = 35;
const cyanEsc = 36;
const whiteEsc = 37;
const grayEsc = 90;

const redBrightEsc = 91;
const greenBrightEsc = 92;
const yellowBrightEsc = 93;
const blueBrightEsc = 94;
const magentaBrightEsc = 95;
const cyanBrightEsc = 96;
const whiteBrightEsc = 97;

const bgBlackEsc = 40;
const bgRedEsc = 41;
const bgGreenEsc = 42;
const bgYellowEsc = 43;
const bgBlueEsc = 44;
const bgMagentaEsc = 45;
const bgCyanEsc = 46;
const bgWhiteEsc = 47;
const bgGrayEsc = 100;

const bgRedBrightEsc = 101;
const bgGreenBrightEsc = 102;
const bgYellowBrightEsc = 103;
const bgBlueBrightEsc = 104;
const bgMagentaBrightEsc = 105;
const bgCyanBrightEsc = 106;
const bgWhiteBrightEsc = 107;

const STRING_RESET_ESC = `\u001b[${resetEsc}m`;
function format(format:number, s:string) : string {
    // Exclude reset escapes if already present
    if (s.endsWith(STRING_RESET_ESC)) {
        return `\u001b[${format}m${s}`;
    }

    return `\u001b[${format}m${s}${STRING_RESET_ESC}`;
}

// Generic
export function bold(s:string) : string { return format(boldEsc, s) }
export function dim(s:string) : string { return format(dimEsc, s) }
export function italic(s:string) : string { return format(italicEsc, s) }
export function underline(s:string) : string { return format(underlineEsc, s) }
export function overline(s:string) : string { return format(overlineEsc, s) }
export function inverse(s:string) : string { return format(inverseEsc, s) }
export function hidden(s:string) : string { return format(hiddenEsc, s) }
export function strikethrough(s:string) : string { return format(strikethroughEsc, s) }

// Colours
export function black(s:string) : string { return format(blackEsc, s) }
export function red(s:string) : string { return format(redEsc, s) }
export function green(s:string) : string { return format(greenEsc, s) }
export function yellow(s:string) : string { return format(yellowEsc, s) }
export function blue(s:string) : string { return format(blueEsc, s) }
export function magenta(s:string) : string { return format(magentaEsc, s) }
export function cyan(s:string) : string { return format(cyanEsc, s) }
export function white(s:string) : string { return format(whiteEsc, s) }
export function gray(s:string) : string { return format(grayEsc, s) }
export function grey(s:string) : string { return gray(s) }

export function blackBright(s:string) : string { return gray(s) }
export function redBright(s:string) : string { return format(redBrightEsc, s) }
export function greenBright(s:string) : string { return format(greenBrightEsc, s) }
export function yellowBright(s:string) : string { return format(yellowBrightEsc, s) }
export function blueBright(s:string) : string { return format(blueBrightEsc, s) }
export function magentaBright(s:string) : string { return format(magentaBrightEsc, s) }
export function cyanBright(s:string) : string { return format(cyanBrightEsc, s) }
export function whiteBright(s:string) : string { return format(whiteBrightEsc, s) }

export function bgBlack(s:string) : string { return format(bgBlackEsc, s) }
export function bgRed(s:string) : string { return format(bgRedEsc, s) }
export function bgGreen(s:string) : string { return format(bgGreenEsc, s) }
export function bgYellow(s:string) : string { return format(bgYellowEsc, s) }
export function bgBlue(s:string) : string { return format(bgBlueEsc, s) }
export function bgMagenta(s:string) : string { return format(bgMagentaEsc, s) }
export function bgCyan(s:string) : string { return format(bgCyanEsc, s) }
export function bgWhite(s:string) : string { return format(bgWhiteEsc, s) }
export function bgGray(s:string) : string { return format(bgGrayEsc, s) }
export function bgGrey(s:string) : string { return bgGray(s) }

export function bgBlackBright(s:string) : string { return bgGray(s) }
export function bgRedBright(s:string) : string { return format(bgRedBrightEsc, s) }
export function bgGreenBright(s:string) : string { return format(bgGreenBrightEsc, s) }
export function bgYellowBright(s:string) : string { return format(bgYellowBrightEsc, s) }
export function bgBlueBright(s:string) : string { return format(bgBlueBrightEsc, s) }
export function bgMagentaBright(s:string) : string { return format(bgMagentaBrightEsc, s) }
export function bgCyanBright(s:string) : string { return format(bgCyanBrightEsc, s) }
export function bgWhiteBright(s:string) : string { return format(bgWhiteBrightEsc, s) }