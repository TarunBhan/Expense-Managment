"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxLayoutWidth = void 0;
const baseTheme = {
    breakpoints: ["576px", "767px", "992px", "1200px", "1441px", "1920px"],
    space: [0, 4, 8, 16, 24, 32, 64, 128, 256, 512],
    fontSizes: [10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 48, 80, 96],
    fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    lineHeights: {
        solid: 1,
        title: 1.25,
        copy: 1.5,
    },
    letterSpacings: {
        normal: "normal",
        tracked: "0.1em",
        tight: "-0.05em",
        mega: "0.25em",
        primary: "normal",
    },
    fonts: {
        serif: "athelas, georgia, times, serif",
        sansSerif: '"Roboto", sans-serif',
        primary: '"Rigid Square", sans-serif',
        secondary: '"Rubik", sans-serif',
    },
    borders: [
        0,
        "1px solid",
        "2px solid",
        "4px solid",
        "8px solid",
        "16px solid",
        "32px solid",
    ],
    radii: [0, 2, 4, 8, 16, 9999, "100%"],
    width: [16, 24, 32, 64, 128, 256],
    heights: [16, 24, 32, 64, 128, 256],
    maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
    colors: {
        // Copy Typography
        /**
         * From this point down,
         * review color naming in a more generic way:
         * this way we can replace theme.
         * E.g: Primary: '#0E5AA7', cta: '#EE2527',
         */
        mobileModalFooter: "rgba(255, 255, 255, 0.04)",
        successBannerBG: "#206B50",
        monoGrey: "#4F5358",
        lightMonoGrey: "#686B70",
        atomicTangerine: "#FF996D",
        darkAtomicTangerine: "#362623",
        dimatomicTangerine: "#FF996D0D",
        brown: "#31261d",
        lightBrown: "#BDA46B",
        black: "#000",
        blue: "#0E5AA7",
        lightGray: "rgb(167, 174, 187)",
        mint: "#36B286",
        lightMint: "rgba(54, 178, 134, 0.6)",
        primary: "#3CC695",
        lightPrimary: "rgba(255, 79, 68, 0.6)",
        lightAtomicTangerine: "rgba(255, 79, 68, 0.2)",
        purpureus: "rgba(146, 54, 178, 0.5)",
        secondary: "#FF4F44",
        lightSecondary: "#184D3F",
        red: "#EE2527",
        silver: "#C4C4C4",
        tartOrange: "#FF4F44",
        secondaryBorder: "#CD413A",
        jet: "#343434",
        white: "#fff",
        warningBG: "rgba(54, 178, 134, 0.2)",
        primaryBorder: "rgba(255, 255, 255, 0.06)",
        yellow: "#ffd900",
        transparent: "transparent",
        secondaryHighlight: "#FF3D3D",
        charcoal: "#212127",
        whiteSmoke: "#EFEFEF",
        blackGray: "#1C1C1C",
        darkGreen: "#00011B",
        CTALightText: "#5ECDAE",
        maize: "#F2C94C",
        primaryText: "#fff",
        success: "#36B286",
        pending: "#F2C94C",
        failure: "#FF4F44",
        gunMetalGrey: "#262C37",
        darkSecondary: "#206B50",
        carbon: "#343434",
        customWhite: "#ffffff59",
        darkGold: "#9F642F",
        darkRaspberry: "#842857",
        richBlack: "#04080F",
        richBlackDark: "#080B10",
        richBlackLight: "#040910",
        eerieBlack: "#13181E",
        brightGray: "#EBEBEB",
        spanishGray: "#9F9D9B",
        dimGray: "#686B70",
        lightBlack: "#222222",
        darkGrey: "#4f5357",
        grey: "#9c9d9f",
        lightGreen: "#36B286",
        chineseBlack: "#11151C",
        darkGunmetal: "#1D2228",
        anthracite: "#2A2B2C",
        japaneseCarmine: "#9B332F",
        philippineBlue: "rgba(68, 120, 255, 0.6)",
        signalGreen: "#226E57",
        lightViolet: "rgba(136, 136, 255, 0.5)",
        lightGrey: "#CCCCCC",
        tintedGray: "#9B9D9F",
        cyanBlue: "#4E77C7",
        serenity: "#4E77C7",
        lightSerenity: "rgba(54, 77, 154, 0.1)",
        platinum: "#E7E7E6",
        blueberry: "#4E8AFF",
        darkCharcoal: "#333333",
        greyishWhite: "#E6E6E7",
        wolfram: "#B4B5B7",
        harvestGold: "#E2B872",
        etonBlue: "#83C2AF",
        graniteGray: "#666666",
        mustard: "#C2A340",
        lightSecondaryBorder: "#993029",
        lightSecondaryBG: "rgba(255, 79, 68, 0.15)",
        footerBG: "#CD413A",
        primaryHighlight: "#3CC695",
        widgetBG: "#993029",
        secondaryBG: "#FF4F44",
        ctaGrayBG: "rgba(29, 34, 40, 1)",
        graySectionBG: "rgba(17, 21, 28, 1)",
        graySmallSectionBg: "rgba(39, 45, 55, 1)",
        redSmallSectionBg: "rgba(255,79,68,.2)",
        secondaryVariants: [
            "rgba(196, 131, 55,.0125)",
            "rgba(196, 131, 55,.025)",
            "rgba(196, 131, 55,.05)",
            "rgba(196, 131, 55,.1)",
            "rgba(196, 131, 55,.2)",
            "rgba(196, 131, 55,.3)",
            "rgba(196, 131, 55,.4)",
            "rgba(196, 131, 55,.5)",
            "rgba(196, 131, 55,.6)",
            "rgba(196, 131, 55,.7)",
            "rgba(196, 131, 55,.8)",
            "rgba(196, 131, 55,.9)",
        ],
        blacks: [
            "rgba(0,0,0,.0125)",
            "rgba(0,0,0,.025)",
            "rgba(0,0,0,.05)",
            "rgba(0,0,0,.1)",
            "rgba(0,0,0,.2)",
            "rgba(0,0,0,.3)",
            "rgba(0,0,0,.4)",
            "rgba(0,0,0,.5)",
            "rgba(0,0,0,.6)",
            "rgba(0,0,0,.7)",
            "rgba(0,0,0,.8)",
            "rgba(0,0,0,.9)",
        ],
        whites: [
            "rgba(255,255,255,.0125)",
            "rgba(255,255,255,.025)",
            "rgba(255,255,255,.05)",
            "rgba(255,255,255,.1)",
            "rgba(255,255,255,.2)",
            "rgba(255,255,255,.3)",
            "rgba(255,255,255,.4)",
            "rgba(255,255,255,.5)",
            "rgba(255,255,255,.6)",
            "rgba(255,255,255,.7)",
            "rgba(255,255,255,.8)",
            "rgba(255,255,255,.9)",
        ],
        stepsContainer: {
            background: "#36171A",
            border: "#993029",
            content: "#993029",
        },
    },
    maxLayoutWidth: "1280px",
    maxDesktopLayoutWidth: 400,
    button: {
        primaryOutline: {
            active: {
                textColor: "#fff",
                borderColor: "#993029",
                bgColor: "#36171A",
            },
            disabled: {
                textColor: "#666",
                borderColor: "#2C1418",
                bgColor: "#36171A",
            },
        },
        primaryFilled: {
            active: {
                textColor: "#fff",
                borderColor: "#993029",
                bgColor: "#CD413A",
            },
            disabled: {
                textColor: "#666",
                borderColor: "#2C1418",
                bgColor: "#36171A",
            },
        },
        secondaryOutline: {
            active: {
                textColor: "#fff",
                borderColor: "#9B9D9F",
                bgColor: "#1D2228",
            },
            disabled: {
                textColor: "#666",
                borderColor: "#33363b",
                bgColor: "#1D2228",
            },
        },
        secondaryFilled: {
            active: {
                textColor: "#040910",
                borderColor: "#fff",
                bgColor: "#E6E6E7",
            },
            disabled: {
                textColor: "#686B70",
                borderColor: "transparent",
                bgColor: "#9B9D9F",
            },
        },
        info: {
            textColor: "#FF4F44",
            bgColor: "rgba(54, 178, 134, 0.2)",
        },
        primary: {
            textColor: "#fff",
            bgColor: "#226E57",
        },
        secondary: {
            textColor: "#fff",
            bgColor: "rgba(136, 136, 255, 0.5)",
        },
        disabled: {
            textColor: "#fff",
            bgColor: "#3CC695",
        },
        radio: {
            borderColor: "#FF4F44",
            bgColor: "rgba(255, 79, 68, 0.4)",
        },
    },
    gradients: {},
};
exports.default = baseTheme;
exports.maxLayoutWidth = baseTheme.space[3] * 5 + parseFloat(baseTheme.breakpoints[3]); // = 1232px
