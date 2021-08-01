/* eslint-disable no-unused-vars */
import {
  Box,
  Text,
  Flex,
  VStack,
  Divider
} from "@chakra-ui/react"
import React from "react";
import Container from "../components/layout/container"
import { BubbleGraph, PoliticsGraph, MainGraph, Mapbox, LiveTwitter, Timeline, BarGraph, Hero } from "../components/index";

export default function Home() {
 return (
   <>
    <Hero />
    <Container py={20} bgColor="black" align="center" justify="center">
      <VStack maxW="1280px">
        <Flex justify="center" flexWrap="wrap">
          <Box align="center" justify="center">
            <Mapbox/>
          </Box>
          <Divider my={20}/>
          <Box justify="center" align="center" maxW="1280px">
            <BubbleGraph/>
          </Box>
            <Divider my={20}/>
          <Box justify="center" align="center" maxW="1280px">
            <PoliticsGraph/>
            <LiveTwitter/>
          </Box>
            <Divider colorScheme="white" my={20}/>
          <Flex align="center" justify="center" flexWrap="wrap">
            <Box>
              <MainGraph justify="center" alsign="center"/>
              <Text align="left" justyfi="left" margin="30">This graph shows the correlation between anti-Asian hate crimes and COVID-19 infection rates in California between January 2019 to September 2020. The red line intersecting March 2020 indicated when the lockdown mandates began taking place around the United States. In March 2020, infection rates significantly increased and by the end of the month over 8000 people were infected. At the time, people began to panic and buy extra groceries, fight over hand sanitizer, and, most unfortunately, pin the blame of the virus on Asians. As seen in California, hate crime reports shot up from 4 to 17 once COVID cases began to rise. That is an absurd increase of 325% in 1 month! Over time as cases grew, however, the line of hate crimes is seen decreasing. 
              
              </Text>
              <Text>
              There are multiple potential factors that we considered to interpret this data:
              
              Not all hate crimes are reported to the police due to limited English proficiency and the inability to report a hate crime in their primary language or a distrust of the police. Therefore, the real numbers may not be reflected in our data.
              As the lockdown progressed over time, less people were outside and less hate crimes were reported as a result.
              </Text>
              <Text margin="30">
                Nonetheless, the increase is unignorable and the issue has become a deep issue in America. Victims of hate crimes often do not report their victimization to local LEAs, resulting in the underreporting of hate crimes. This underreporting impacts the hate crime data received by the Department of Justice, resulting in an incomplete picture of the hate crimes committed within the state each year. It is important for victims of hate crimes to report their victimization to their local police.

              </Text>
            </Box>
            <Box>
              <BarGraph/>
              <Text>This bar graph shows the number of anti-Asian hate crimes in 12 cities in America and Canada. From 2019 to 2020, hate crimes increased in all cities, and this also shows how racism and Asian hate is also a pressing international issue. The false blaming many people placed on Asians has negatively impacted the lives of many Asians.
</Text>
            </Box>
          </Flex>
          <Divider my={20}/>
          <Timeline/>
        </Flex>
      </VStack>
    </Container>
    </>
  )
}