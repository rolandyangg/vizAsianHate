import {
  Box,
  Text,
  Flex
} from "@chakra-ui/react"
import React from "react";
import Container from "../components/layout/container"
import { BubbleGraph, PoliticsGraph, MainGraph, Mapbox, LiveTwitter } from "../components/index";

export default function Home() {
 return (
    <Container py={20} bgColor="black" align="center" justify="center">
      <Flex justify="center" flexWrap="wrap">
        <Box justify="center" align="center" maxW="1280px">
          <Text>Bubble Graph</Text>
          <BubbleGraph/>
          <PoliticsGraph/>
          <LiveTwitter/>
          <MainGraph/>
        </Box>
        <Box align="center" justify="center">
          <Mapbox/>
        </Box>
      </Flex>
    </Container>
  )
}