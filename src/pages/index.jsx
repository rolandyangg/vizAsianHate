import {
  Text
} from "@chakra-ui/react"
import React from "react";
import Container from "../components/layout/container"
import BubbleGraph from "../components/bubblegraph/bubblegraph"

export default function Home() {
  return (
    <Container>
      <Text>Cheese</Text>
      <BubbleGraph/>
    </Container>
  )
}
