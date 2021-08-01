/* eslint-disable no-unused-vars */
import { Chrono } from "react-chrono";
import timelineElements from "./timelinedata"
import { Box, Text, Flex } from "@chakra-ui/react";

export default function Timeline() {
    return (
        <>
            <Flex h="700px">
                <Chrono items={timelineElements}
                    slideShow 
                    mode="VERTICAL_ALTERNATING"
                    theme={{
                        primary:"red",
                        secondary:"yellow",
                        cardBgColor:"white",
                        cardForeColor:"black",
                        titleColor:"black"
                    }}
                />
            </Flex>
        </>
    );
}