import React from 'react';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart, Bar, 
} from 'recharts';
import { HStack, VStack, Text, Heading } from "@chakra-ui/react";
import anti from './antiasian_bar'

export default function BarGraph() {
	return (<>
    <HStack>
      <VStack>
        <Heading color="white">California Asian Hate Crimes and COVID-19 Cases Over Time</Heading>
        <BarChart
              width={850}
              height={500}
              data={anti}
              margin={{
                top: 5,
                right: 80,
                left: 20,
                bottom: 100,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="City" angle={25}
            dx={50}
            dy={28}
            minTickGap={-200}
            axisLine={false}/>
              <YAxis />
              <Tooltip />
              <Legend verticalAlign="top" height={36}/>
              <Bar dataKey="2019 Anti-Asian Hate Crimes" fill="#E49B0F" />
              <Bar dataKey="2020 Anti-Asian Hate Crimes" fill="#E4D00A" />
            </BarChart>
          </VStack>
          {/* <BarChart
            width={700}
            height={500}
            data={anti}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="City" angle={25}
          dx={30}
          dy={20}
          minTickGap={-200}
          axisLine={true} />
            <YAxis yAxisId="left"/>
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="2019 Crime"  stackId="a" fill="#8884d8" />
            <Bar yAxisId="left" dataKey="2020 Crime"  stackId="a" fill="#82ca9d" />
            <Bar yAxisId="right" dataKey="ROC" fill="#ffc658" />
          </BarChart> */}
          <VStack>
            <Heading>Anti-Asian Hate Crimes have increased by 146% between 2019 and 2020</Heading>
            <Text>This bar graph shows the number of anti-Asian hate crimes in 12 cities in America and Canada. From 2019 to 2020, hate crimes increased in all cities, and this also shows how racism and Asian hate is also a pressing international issue. The false blaming many people placed on Asians has negatively impacted the lives of many Asians.</Text>
          </VStack>
      </HStack>
    </>);}

