import {
  Box,
  Text
} from "@chakra-ui/react"
import React from "react";
import Container from "../components/layout/container"
import { BubbleGraph, PoliticsGraph } from "../components/index";

export default function Home() {
 return (
    <Container py={20} bgColor="black">
      <Box justify="center" align="center">
        <Text>Bubble Graph</Text>
        <BubbleGraph/>
        {/* <Mapbox /> */}
        <PoliticsGraph/>
      </Box>
    </Container>
  )
}
