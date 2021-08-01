/* eslint-disable no-unused-vars */
import {
  Box,
  Text,
  Flex
} from "@chakra-ui/react"
import React from "react";
import Container from "../components/layout/container"
import { BubbleGraph, PoliticsGraph, MainGraph, Mapbox, LiveTwitter, Timeline} from "../components/index";

export default function Home() {
 return (
    <Container py={20} bgColor="black" align="center" justify="center">
      <MainGraph/>
    </Container>
  )
}