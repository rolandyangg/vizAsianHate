import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    fonts: {
        heading: "Inter-Bold",
        body: "Inter-Medium"
    },
    styles: {
        global: () => ({
            html: {
                height: "100%",
                scrollBehavior: "smooth",
            },
            body: {
                padding: 0,
                margin: 0,
                fontFamily: "Inter-Medium",
                textAlign: "center",
                background: "#0c0c0c", //linear-gradient(90deg, rgb(145,141,240) 0%, #8192f0 100%)
                color: "white",
            },
            a: {
                color: "inherit",
                textDecoration: "none",
            },
            ul: {
                listStyle: "none",
            },
            h1: {
                color: "#F2D852",
            },
            h2: {
                color: "#F2D852",
            },
            h3: {
                color: "#F2D852",
            },
            button: {
                color: "black"
            },
            "@font-face": [{
                    fontFamily: "Inter-Bold",
                    src: "url('/fonts/Inter-Bold.ttf')",
                },
                {
                    fontFamily: "Inter-Medium",
                    src: "url('/fonts/Inter-Medium.ttf')",
                },
            ],
        }),
    }
})

export default theme;