import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    fonts: {
        heading: "Roboto-Bold",
        body: "Roboto-Regular"
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
                fontFamily: "Roboto, Montserrat-Regular, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
                textAlign: "center",
                background: "#0c0c0c", //linear-gradient(90deg, rgb(145,141,240) 0%, #8192f0 100%)
                color: "black",
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
            "@font-face": [{
                    fontFamily: "Roboto-Bold",
                    src: "url('/fonts/Roboto-Bold.ttf')",
                },
                {
                    fontFamily: "Roboto-Regular",
                    src: "url('/fonts/Roboto-Regular.ttf')",
                },
            ],
        }),
    }
})

export default theme;