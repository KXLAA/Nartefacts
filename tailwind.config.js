/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");

delete colors["lightBlue"];
delete colors["warmGray"];
delete colors["trueGray"];
delete colors["coolGray"];
delete colors["blueGray"];

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      shark: {
        DEFAULT: "#27272A",
        50: "#53535A",
        100: "#4E4E54",
        200: "#44444A",
        300: "#3B3B3F",
        400: "#313135",
        500: "#27272A",
        600: "#202022",
        700: "#18181A",
        800: "#111112",
        900: "#0A0A0A",
      },

      "cod-gray": {
        DEFAULT: "#161616",
        50: "#444444",
        100: "#3F3F3F",
        200: "#353535",
        300: "#2A2A2A",
        400: "#202020",
        500: "#161616",
        600: "#131313",
        700: "#111111",
        800: "#0E0E0E",
        900: "#0C0C0C",
      },

      silver: {
        DEFAULT: "#C0C0C0",
        50: "#EEEEEE",
        100: "#E9E9E9",
        200: "#DFDFDF",
        300: "#D4D4D4",
        400: "#CACACA",
        500: "#C0C0C0",
        600: "#A4A4A4",
        700: "#888888",
        800: "#6C6C6C",
        900: "#505050",
      },

      "black-alpha": {
        1: "hsla(0, 0%, 0%, 0.01)",
        2: "hsla(0, 0%, 0%, 0.03)",
        3: "hsla(0, 0%, 0%, 0.05)",
        4: "hsla(0, 0%, 0%, 0.07)",
        5: "hsla(0, 0%, 0%, 0.09)",
        6: "hsla(0, 0%, 0%, 0.11)",
        7: "hsla(0, 0%, 0%, 0.14)",
        8: "hsla(0, 0%, 0%, 0.22)",
        9: "hsla(0, 0%, 0%, 0.44)",
        10: "hsla(0, 0%, 0%, 0.48)",
        11: "hsla(0, 0%, 0%, 0.56)",
        12: "hsla(0, 0%, 0%, 0.91)",
      },
      "white-alpha": {
        1: "hsla(0, 0%, 0%, 0)",
        2: "hsla(0, 0%, 100%, 0.01)",
        3: "hsla(0, 0%, 100%, 0.03)",
        4: "hsla(0, 0%, 100%, 0.06)",
        5: "hsla(0, 0%, 100%, 0.09)",
        6: "hsla(0, 0%, 100%, 0.12)",
        7: "hsla(0, 0%, 100%, 0.18)",
        8: "hsla(0, 0%, 100%, 0.25)",
        9: "hsla(0, 0%, 100%, 0.39)",
        10: "hsla(0, 0%, 100%, 0.45)",
        11: "hsla(0, 0%, 100%, 0.59)",
        12: "hsla(0, 0%, 100%, 0.92)",
      },
      red: {
        1: "hsla(0, 100%, 99%, 1)",
        2: "hsla(0, 100%, 99%, 1)",
        3: "hsla(0, 100%, 97%, 1)",
        4: "hsla(0, 100%, 95%, 1)",
        5: "hsla(0, 90%, 92%, 1)",
        6: "hsla(0, 81%, 88%, 1)",
        7: "hsla(359, 74%, 82%, 1)",
        8: "hsla(359, 69%, 74%, 1)",
        9: "hsla(358, 75%, 59%, 1)",
        10: "hsla(358, 69%, 55%, 1)",
        11: "hsla(358, 65%, 49%, 1)",
        12: "hsla(355, 49%, 15%, 1)",
      },

      "red-dark": {
        1: "hsla(350, 24%, 10%, 1)",
        2: "hsla(357, 34%, 12%, 1)",
        3: "hsla(357, 43%, 16%, 1)",
        4: "hsla(356, 47%, 19%, 1)",
        5: "hsla(356, 51%, 22%, 1)",
        6: "hsla(357, 55%, 26%, 1)",
        7: "hsla(357, 60%, 32%, 1)",
        8: "hsla(358, 65%, 40%, 1)",
        9: "hsla(358, 75%, 59%, 1)",
        10: "hsla(358, 86%, 64%, 1)",
        11: "hsla(358, 100%, 69%, 1)",
        12: "hsla(353, 90%, 96%, 1)",
      },
      "red-alpha": {
        1: "hsla(0, 100%, 51%, 0.01)",
        2: "hsla(0, 100%, 51%, 0.03)",
        3: "hsla(0, 100%, 50%, 0.06)",
        4: "hsla(0, 100%, 50%, 0.1)",
        5: "hsla(0, 100%, 47%, 0.15)",
        6: "hsla(0, 99%, 45%, 0.22)",
        7: "hsla(359, 100%, 43%, 0.32)",
        8: "hsla(359, 100%, 41%, 0.44)",
        9: "hsla(358, 100%, 43%, 0.72)",
        10: "hsla(358, 100%, 41%, 0.76)",
        11: "hsla(358, 100%, 38%, 0.83)",
        12: "hsla(356, 100%, 8%, 0.93)",
      },

      "red-dark-alpha": {
        1: "hsla(0, 0%, 0%, 0)",
        2: "hsla(5, 98%, 54%, 0.05)",
        3: "hsla(359, 99%, 61%, 0.13)",
        4: "hsla(358, 99%, 61%, 0.18)",
        5: "hsla(357, 100%, 60%, 0.24)",
        6: "hsla(358, 100%, 60%, 0.32)",
        7: "hsla(357, 100%, 59%, 0.44)",
        8: "hsla(358, 100%, 59%, 0.62)",
        9: "hsla(358, 100%, 65%, 0.88)",
        10: "hsla(358, 100%, 67%, 0.94)",
        11: "hsla(358, 100%, 70%, 0.98)",
        12: "hsla(352, 100%, 97%, 0.98)",
      },
      violet: {
        1: "hsla(270, 50%, 99%, 1))",
        2: "hsla(252, 100%, 99%, 1)",
        3: "hsla(254, 100%, 97%, 1)",
        4: "hsla(251, 91%, 95%, 1)",
        5: "hsla(252, 83%, 93%, 1)",
        6: "hsla(251, 78%, 89%, 1)",
        7: "hsla(252, 71%, 84%, 1)",
        8: "hsla(252, 69%, 76%, 1)",
        9: "hsla(252, 56%, 57%, 1)",
        10: "hsla(251, 48%, 53%, 1)",
        11: "hsla(250, 43%, 48%, 1)",
        12: "hsla(254, 60%, 18%, 1)",
      },

      "violet-dark": {
        1: "hsla(252, 19%, 10%, 1)",
        2: "hsla(255, 30%, 13%, 1)",
        3: "hsla(252, 36%, 18%, 1)",
        4: "hsla(253, 40%, 22%, 1)",
        5: "hsla(252, 42%, 26%, 1)",
        6: "hsla(251, 44%, 31%, 1)",
        7: "hsla(250, 47%, 39%, 1)",
        8: "hsla(250, 52%, 51%, 1)",
        9: "hsla(252, 56%, 57%, 1)",
        10: "hsla(251, 63%, 63%, 1)",
        11: "hsla(250, 95%, 77%, 1)",
        12: "hsla(251, 89%, 96%, 1)",
      },
      "violet-alpha": {
        1: "hsla(270, 94%, 35%, 0.01)",
        2: "hsla(252, 100%, 51%, 0.02)",
        3: "hsla(254, 100%, 50%, 0.05)",
        4: "hsla(251, 98%, 48%, 0.09)",
        5: "hsla(252, 99%, 46%, 0.13)",
        6: "hsla(251, 99%, 44%, 0.19)",
        7: "hsla(252, 99%, 42%, 0.28)",
        8: "hsla(252, 100%, 41%, 0.4)",
        9: "hsla(252, 100%, 36%, 0.66)",
        10: "hsla(251, 100%, 32%, 0.69)",
        11: "hsla(250, 100%, 28%, 0.73)",
        12: "hsla(254, 100%, 12%, 0.93)",
      },

      "violet-dark-alpha": {
        1: "hsla(0, 0%, 0%, 0)",
        2: "hsla(258, 98%, 61%, 0.05)",
        3: "hsla(252, 99%, 66%, 0.15)",
        4: "hsla(253, 100%, 66%, 0.22)",
        5: "hsla(252, 100%, 66%, 0.29)",
        6: "hsla(251, 100%, 66%, 0.37)",
        7: "hsla(250, 100%, 66%, 0.51)",
        8: "hsla(250, 100%, 66%, 0.73)",
        9: "hsla(252, 100%, 70%, 0.79)",
        10: "hsla(251, 100%, 73%, 0.84)",
        11: "hsla(250, 100%, 78%, 0.98)",
        12: "hsla(254, 100%, 97%, 0.98)",
      },
      indigo: {
        1: "hsla(240, 33%, 99%, 1)",
        2: "hsla(223, 100%, 99%, 1)",
        3: "hsla(224, 100%, 97%, 1)",
        4: "hsla(223, 92%, 95%, 1)",
        5: "hsla(225, 85%, 92%, 1)",
        6: "hsla(224, 81%, 88%, 1)",
        7: "hsla(225, 78%, 82%, 1)",
        8: "hsla(226, 75%, 75%, 1)",
        9: "hsla(226, 70%, 55%, 1)",
        10: "hsla(226, 59%, 51%, 1)",
        11: "hsla(226, 55%, 45%, 1)",
        12: "hsla(226, 63%, 17%, 1)",
      },
      "indigo-dark": {
        1: "hsla(226, 25%, 10%, 1)",
        2: "hsla(230, 36%, 13%, 1)",
        3: "hsla(228, 44%, 17%, 1)",
        4: "hsla(227, 48%, 21%, 1)",
        5: "hsla(227, 50%, 24%, 1)",
        6: "hsla(226, 53%, 28%, 1)",
        7: "hsla(226, 56%, 35%, 1)",
        8: "hsla(226, 58%, 44%, 1)",
        9: "hsla(226, 70%, 55%, 1)",
        10: "hsla(227, 76%, 62%, 1)",
        11: "hsla(228, 100%, 76%, 1)",
        12: "hsla(228, 79%, 96%, 1)",
      },
      "indigo-alpha": {
        1: "hsla(240, 93%, 26%, 0.01)",
        2: "hsla(223, 100%, 51%, 0.03)",
        3: "hsla(224, 100%, 50%, 0.06)",
        4: "hsla(223, 98%, 48%, 0.1)",
        5: "hsla(225, 98%, 46%, 0.15)",
        6: "hsla(224, 99%, 45%, 0.22)",
        7: "hsla(225, 100%, 44%, 0.32)",
        8: "hsla(226, 99%, 43%, 0.45)",
        9: "hsla(226, 100%, 41%, 0.76)",
        10: "hsla(226, 100%, 37%, 0.77)",
        11: "hsla(226, 100%, 31%, 0.8)",
        12: "hsla(226, 100%, 11%, 0.94)",
      },
      "indigo-dark-alpha": {
        1: "hsla(240, 93%, 26%, 0.01)",
        2: "hsla(223, 100%, 51%, 0.03)",
        3: "hsla(224, 100%, 50%, 0.06)",
        4: "hsla(223, 98%, 48%, 0.1)",
        5: "hsla(225, 98%, 46%, 0.15)",
        6: "hsla(224, 99%, 45%, 0.22)",
        7: "hsla(225, 100%, 44%, 0.32)",
        8: "hsla(226, 99%, 43%, 0.45)",
        9: "hsla(226, 100%, 41%, 0.76)",
        10: "hsla(226, 100%, 37%, 0.77)",
        11: "hsla(226, 100%, 31%, 0.8)",
        12: "hsla(226, 100%, 11%, 0.94)",
      },
      green: {
        1: "hsla(120, 60%, 99%, 1)",
        2: "hsla(120, 60%, 97%, 1)",
        3: "hsla(120, 54%, 95%, 1)",
        4: "hsla(120, 45%, 91%, 1)",
        5: "hsla(122, 42%, 86%, 1)",
        6: "hsla(124, 38%, 80%, 1)",
        7: "hsla(125, 37%, 70%, 1)",
        8: "hsla(131, 38%, 56%, 1)",
        9: "hsla(131, 41%, 46%, 1)",
        10: "hsla(132, 43%, 42%, 1)",
        11: "hsla(133, 50%, 32%, 1)",
        12: "hsla(128, 29%, 15%, 1)",
      },
      "green-dark": {
        1: "hsla(145, 32%, 7%, 1)",
        2: "hsla(136, 33%, 9%, 1)",
        3: "hsla(137, 36%, 12%, 1)",
        4: "hsla(136, 37%, 14%, 1)",
        5: "hsla(135, 39%, 16%, 1)",
        6: "hsla(135, 40%, 19%, 1)",
        7: "hsla(135, 40%, 24%, 1)",
        8: "hsla(131, 40%, 31%, 1)",
        9: "hsla(131, 41%, 46%, 1)",
        10: "hsla(131, 39%, 52%, 1)",
        11: "hsla(131, 43%, 57%, 1)",
        12: "hsla(136, 73%, 94%, 1)",
      },
      "green-alpha": {
        1: "hsla(120, 95%, 39%, 0.02)",
        2: "hsla(120, 95%, 39%, 0.05)",
        3: "hsla(120, 98%, 35%, 0.08)",
        4: "hsla(120, 99%, 32%, 0.13)",
        5: "hsla(122, 99%, 30%, 0.19)",
        6: "hsla(125, 99%, 28%, 0.28)",
        7: "hsla(125, 100%, 27%, 0.41)",
        8: "hsla(131, 100%, 28%, 0.6)",
        9: "hsla(131, 100%, 26%, 0.73)",
        10: "hsla(132, 100%, 24%, 0.76)",
        11: "hsla(133, 100%, 19%, 0.84)",
        12: "hsla(130, 100%, 5%, 0.89)",
      },
      "green-dark-alpha": {
        1: "hsla(0, 0%, 0%, 0)",
        2: "hsla(107, 97%, 62%, 0.02)",
        3: "hsla(128, 96%, 70%, 0.07)",
        4: "hsla(130, 100%, 70%, 0.1)",
        5: "hsla(130, 99%, 69%, 0.14)",
        6: "hsla(132, 100%, 69%, 0.19)",
        7: "hsla(132, 100%, 70%, 0.26)",
        8: "hsla(130, 100%, 71%, 0.37)",
        9: "hsla(130, 100%, 71%, 0.62)",
        10: "hsla(131, 100%, 74%, 0.67)",
        11: "hsla(130, 100%, 76%, 0.73)",
        12: "hsla(137, 100%, 96%, 0.98)",
      },
      orange: {
        1: "hsla(20, 60%, 99%, 1)",
        2: "hsla(24, 83%, 98%, 1)",
        3: "hsla(25, 100%, 95%, 1)",
        4: "hsla(25, 100%, 92%, 1)",
        5: "hsla(25, 100%, 88%, 1)",
        6: "hsla(25, 100%, 83%, 1)",
        7: "hsla(24, 100%, 75%, 1)",
        8: "hsla(24, 95%, 64%, 1)",
        9: "hsla(24, 94%, 50%, 1)",
        10: "hsla(24, 100%, 46%, 1)",
        11: "hsla(24, 100%, 37%, 1)",
        12: "hsla(15, 60%, 17%, 1)",
      },
      "orange-dark": {
        1: "hsla(29, 68%, 7%, 1)",
        2: "hsla(28, 100%, 8%, 1)",
        3: "hsla(26, 90%, 12%, 1))",
        4: "hsla(25, 89%, 14%, 1)",
        5: "hsla(24, 88%, 16%, 1)",
        6: "hsla(24, 88%, 20%, 1)",
        7: "hsla(24, 92%, 24%, 1)",
        8: "hsla(25, 100%, 29%, 1)",
        9: "hsla(24, 94%, 50%, 1)",
        10: "hsla(24, 100%, 58%, 1)",
        11: "hsla(24, 100%, 62%, 1)",
        12: "hsla(24, 94%, 93%, 1)",
      },
      "orange-alpha": {
        1: "hsla(20, 95%, 39%, 0.02)",
        2: "hsla(24, 96%, 46%, 0.04)",
        3: "hsla(25, 100%, 51%, 0.09)",
        4: "hsla(26, 100%, 50%, 0.16)",
        5: "hsla(25, 100%, 50%, 0.24)",
        6: "hsla(25, 100%, 50%, 0.35)",
        7: "hsla(24, 100%, 50%, 0.5)",
        8: "hsla(24, 100%, 49%, 0.69)",
        9: "hsla(24, 100%, 48%, 0.97)",
        10: "hsla(23, 100%, 46%, 0.98)",
        11: "hsla(23, 100%, 37%, 0.98)",
        12: "hsla(15, 100%, 11%, 0.93)",
      },
      "orange-dark-alpha": {
        1: "hsla(0, 0%, 0%, 0)",
        2: "hsla(13, 100%, 50%, 0.05)",
        3: "hsla(20, 100%, 50%, 0.12)",
        4: "hsla(23, 100%, 50%, 0.17)",
        5: "hsla(23, 99%, 50%, 0.22)",
        6: "hsla(23, 100%, 51%, 0.29)",
        7: "hsla(23, 100%, 51%, 0.39)",
        8: "hsla(24, 100%, 50%, 0.52)",
        9: "hsla(24, 100%, 52%, 0.96)",
        10: "hsla(25, 100%, 59%, 0.98)",
        11: "hsla(24, 100%, 62%, 0.98)",
        12: "hsla(26, 100%, 94%, 0.98)",
      },
      yellow: {
        1: "hsla(60, 50%, 98%, 1)",
        2: "hsla(52, 100%, 95%, 1)",
        3: "hsla(55, 100%, 91%, 1)",
        4: "hsla(54, 100%, 87%, 1)",
        5: "hsla(52, 98%, 82%, 1)",
        6: "hsla(50, 90%, 76%, 1)",
        7: "hsla(47, 80%, 68%, 1)",
        8: "hsla(48, 100%, 46%, 1)",
        9: "hsla(53, 92%, 50%, 1)",
        10: "hsla(50, 100%, 48%, 1)",
        11: "hsla(42, 100%, 29%, 1)",
        12: "hsla(41, 56%, 13%, 1)",
      },
      "yellow-dark": {
        1: "hsla(45, 100%, 5%, 1)",
        2: "hsla(46, 100%, 7%, 1)",
        3: "hsla(45, 100%, 9%, 1)",
        4: "hsla(45, 100%, 10%, 1)",
        5: "hsla(46, 100%, 12%, 1)",
        6: "hsla(49, 100%, 14%, 1)",
        7: "hsla(49, 89%, 18%, 1)",
        8: "hsla(50, 100%, 22%, 1)",
        9: "hsla(53, 92%, 50%, 1)",
        10: "hsla(54, 100%, 68%, 1)",
        11: "hsla(48, 100%, 47%, 1)",
        12: "hsla(53, 100%, 91%, 1)",
      },
      "yellow-alpha": {
        1: "hsla(60, 94%, 35%, 0.02)",
        2: "hsla(52, 100%, 50%, 0.09)",
        3: "hsla(55, 100%, 50%, 0.18)",
        4: "hsla(54, 100%, 50%, 0.27)",
        5: "hsla(52, 100%, 49%, 0.36)",
        6: "hsla(50, 100%, 47%, 0.45)",
        7: "hsla(47, 100%, 45%, 0.58)",
        8: "hsla(48, 100%, 46%, 0.98)",
        9: "hsla(53, 100%, 48%, 0.96)",
        10: "hsla(50, 100%, 48%, 0.98)",
        11: "hsla(42, 100%, 29%, 0.98)",
        12: "hsla(41, 100%, 8%, 0.94)",
      },
      "yellow-dark-alpha": {
        1: "hsla(0, 0%, 0%, 0)",
        2: "hsla(49, 100%, 49%, 0.03)",
        3: "hsla(45, 100%, 50%, 0.07)",
        4: "hsla(46, 100%, 50%, 0.11)",
        5: "hsla(47, 100%, 50%, 0.15)",
        6: "hsla(51, 100%, 50%, 0.2)",
        7: "hsla(51, 100%, 54%, 0.27)",
        8: "hsla(51, 100%, 50%, 0.37)",
        9: "hsla(53, 100%, 52%, 0.96)",
        10: "hsla(56, 100%, 68%, 0.98)",
        11: "hsla(48, 100%, 50%, 0.93)",
        12: "hsla(60, 100%, 92%, 0.98)",
      },
      amber: {
        1: "hsla(40, 60%, 99%, 1)",
        2: "hsla(40, 100%, 96%, 1)",
        3: "hsla(44, 100%, 92%, 1)",
        4: "hsla(43, 100%, 87%, 1)",
        5: "hsla(42, 100%, 82%, 1)",
        6: "hsla(38, 100%, 76%, 1)",
        7: "hsla(36, 86%, 67%, 1)",
        8: "hsla(35, 85%, 55%, 1)",
        9: "hsla(39, 100%, 57%, 1)",
        10: "hsla(35, 100%, 55%, 1)",
        11: "hsla(30, 100%, 34%, 1)",
        12: "hsla(20, 79%, 17%, 1)",
      },
      "amber-dark": {
        1: "hsla(37, 100%, 6%, 1)",
        2: "hsla(35, 100%, 8%, 1)",
        3: "hsla(32, 100%, 10%, 1)",
        4: "hsla(32, 100%, 12%, 1)",
        5: "hsla(33, 100%, 15%, 1)",
        6: "hsla(35, 100%, 17%, 1)",
        7: "hsla(35, 91%, 22%, 1)",
        8: "hsla(36, 100%, 25%, 1)",
        9: "hsla(39, 100%, 57%, 1)",
        10: "hsla(43, 100%, 64%, 1)",
        11: "hsla(39, 90%, 50%, 1)",
        12: "hsla(40, 94%, 93%, 1)",
      },
      "amber-alpha": {
        1: "hsla(40, 95%, 39%, 0.02)",
        2: "hsla(40, 100%, 50%, 0.07)",
        3: "hsla(44, 100%, 50%, 0.17)",
        4: "hsla(43, 100%, 50%, 0.26)",
        5: "hsla(42, 100%, 50%, 0.37)",
        6: "hsla(38, 100%, 50%, 0.47)",
        7: "hsla(36, 100%, 46%, 0.61)",
        8: "hsla(35, 100%, 46%, 0.83)",
        9: "hsla(39, 100%, 50%, 0.86)",
        10: "hsla(35, 100%, 50%, 0.89)",
        11: "hsla(29, 100%, 34%, 0.98)",
        12: "hsla(20, 100%, 14%, 0.96)",
      },
      "amber-dark-alpha": {
        1: "hsla(0, 0%, 0%, 0)",
        2: "hsla(31, 100%, 50%, 0.04)",
        3: "hsla(27, 100%, 50%, 0.09)",
        4: "hsla(29, 100%, 50%, 0.14)",
        5: "hsla(31, 100%, 50%, 0.19)",
        6: "hsla(35, 100%, 50%, 0.25)",
        7: "hsla(34, 100%, 53%, 0.33)",
        8: "hsla(36, 100%, 50%, 0.44)",
        9: "hsla(40, 100%, 57%, 0.98)",
        10: "hsla(44, 100%, 64%, 0.98)",
        11: "hsla(39, 100%, 53%, 0.94)",
        12: "hsla(46, 100%, 94%, 0.98)",
      },
      primary: {
        1: "hsla(40, 60%, 99%, 1)",
        2: "hsla(40, 100%, 96%, 1)",
        3: "hsla(36, 100%, 94%, 1)",
        4: "hsla(43, 100%, 87%, 1)",
        5: "hsla(36, 100%, 85%, 1)",
        6: "hsla(37, 100%, 76%, 1)",
        7: "hsla(35, 100%, 71%, 1)",
        8: "hsla(40, 100%, 61%, 1)",
        9: "hsla(40, 100%, 62%, 1)",
        10: "hsla(41, 100%, 50%, 1)",
        11: "hsla(31, 100%, 36%, 1)",
        12: "hsla(20, 79%, 17%, 1)",
      },
      "primary-dark": {
        1: "hsla(37, 100%, 6%, 1)",
        2: "hsla(35, 100%, 8%, 1)",
        3: "hsla(32, 100%, 10%, 1)",
        4: "hsla(32, 100%, 12%, 1)",
        5: "hsla(36, 100%, 15%, 1)",
        6: "hsla(35, 100%, 17%, 1)",
        7: "hsla(35, 91%, 22%, 1)",
        8: "hsla(36, 100%, 25%, 1)",
        9: "hsla(39, 100%, 57%, 1)",
        10: "hsla(43, 100%, 64%, 1)",
        11: "hsla(39, 90%, 50%, 1)",
        12: "hsla(40, 94%, 93%, 1)",
      },
      "primary-alpha": {
        1: "hsla(40, 95%, 39%, 0.02)",
        2: "hsla(40, 100%, 50%, 0.07)",
        3: "hsla(40, 100%, 62%, 0.17)",
        4: "hsla(43, 100%, 50%, 0.26)",
        5: "hsla(36, 100%, 60%, 0.37)",
        6: "hsla(38, 100%, 50%, 0.47)",
        7: "hsla(36, 100%, 53%, 0.61)",
        8: "hsla(40, 100%, 53%, 0.83)",
        9: "hsla(39, 100%, 57%, 0.86)",
        10: "hsla(40, 100%, 50%, 0.89)",
        11: "hsla(29, 100%, 36%, 0.98)",
        12: "hsla(20, 100%, 14%, 0.96)",
      },
      "primary-dark-alpha": {
        1: "hsla(0, 0%, 0%, 0)",
        2: "hsla(31, 100%, 50%, 0.04)",
        3: "hsla(27, 100%, 50%, 0.09)",
        4: "hsla(29, 100%, 50%, 0.14)",
        5: "hsla(31, 100%, 50%, 0.19)",
        6: "hsla(35, 100%, 50%, 0.25)",
        7: "hsla(34, 100%, 53%, 0.33)",
        8: "hsla(36, 100%, 50%, 0.44)",
        9: "hsla(40, 100%, 57%, 0.98)",
        10: "hsla(44, 100%, 64%, 0.98)",
        11: "hsla(39, 100%, 53%, 0.94)",
        12: "hsla(46, 100%, 94%, 0.98)",
      },
      gray: {
        1: "hsla(60, 20%, 99%, 1)",
        2: "hsla(60, 8%, 97%, 1)",
        3: "hsla(60, 4%, 95%, 1)",
        4: "hsla(60, 6%, 93%, 1)",
        5: "hsla(60, 6%, 91%, 1)",
        6: "hsla(60, 5%, 88%, 1)",
        7: "hsla(60, 5%, 85%, 1)",
        8: "hsla(51, 6%, 77%, 1)",
        9: "hsla(60, 2%, 56%, 1)",
        10: "hsla(60, 2%, 52%, 1)",
        11: "hsla(45, 2%, 43%, 1)",
        12: "hsla(60, 6%, 10%, 1)",
      },
      "gray-dark": {
        1: "hsla(60, 2%, 8%, 1)",
        2: "hsla(60, 4%, 11%, 1)",
        3: "hsla(60, 4%, 13%, 1)",
        4: "hsla(60, 3%, 15%, 1)",
        5: "hsla(60, 3%, 17%, 1)",
        6: "hsla(45, 4%, 20%, 1)",
        7: "hsla(60, 3%, 24%, 1)",
        8: "hsla(50, 4%, 31%, 1)",
        9: "hsla(52, 4%, 43%, 1)",
        10: "hsla(52, 3%, 48%, 1)",
        11: "hsla(51, 4%, 62%, 1)",
        12: "hsla(60, 3%, 93%, 1)",
      },
      "gray-alpha": {
        1: "hsla(60, 89%, 18%, 0.01)",
        2: "hsla(60, 78%, 9%, 0.03)",
        3: "hsla(60, 100%, 4%, 0.05)",
        4: "hsla(60, 87%, 6%, 0.08)",
        5: "hsla(60, 89%, 7%, 0.1)",
        6: "hsla(60, 93%, 5%, 0.12)",
        7: "hsla(60, 100%, 5%, 0.16)",
        8: "hsla(50, 94%, 6%, 0.24)",
        9: "hsla(60, 100%, 2%, 0.45)",
        10: "hsla(60, 100%, 2%, 0.49)",
        11: "hsla(51, 100%, 1%, 0.58)",
        12: "hsla(60, 100%, 1%, 0.91)",
      },
      "gray-dark-alpha": {
        1: "hsla(0, 0%, 0%, 0)",
        2: "hsla(60, 91%, 91%, 0.03)",
        3: "hsla(60, 95%, 93%, 0.06)",
        4: "hsla(60, 78%, 96%, 0.08)",
        5: "hsla(60, 83%, 95%, 0.1)",
        6: "hsla(42, 85%, 95%, 0.13)",
        7: "hsla(60, 100%, 96%, 0.17)",
        8: "hsla(51, 91%, 96%, 0.25)",
        9: "hsla(51, 100%, 96%, 0.39)",
        10: "hsla(53, 100%, 97%, 0.45)",
        11: "hsla(49, 100%, 98%, 0.6)",
        12: "hsla(60, 100%, 100%, 0.92)",
      },
    },
    extend: {
      fontFamily: {
        helios: ["var(--font-helios)", ...fontFamily.serif],
        sans: ["var(--font-poppins)", ...fontFamily.sans],
        mono: ["Roboto Mono", "monospace"],
      },
      boxShadow: {
        "border-shiny": "inset 0 0 0 1px hsl(0deg 0% 100% / 10%)",
        "border-shiny-2": "inset 0 0 0 2px hsl(0deg 0% 100% / 10%)",
        "border-shiny-4": "inset 0 0 0 4px hsl(0deg 0% 100% / 10%)",
        "border-shiny-8": "inset 0 0 0 8px hsl(0deg 0% 100% / 10%)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
