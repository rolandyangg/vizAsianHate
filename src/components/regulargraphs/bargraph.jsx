import React from 'react';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart, Bar, 
} from 'recharts';
import { Box, Text } from "@chakra-ui/react";
import anti from './antiasian_bar'

export default function BarGraph() {
	return (<>
    <Box>
    <BarChart
          width={800}
          height={700}
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
        dy={20}
        minTickGap={-200}
        axisLine={false}/>
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" height={36}/>
          <Bar dataKey="2019 Anti-Asian Hate Crimes" fill="#8884d8" />
          <Bar dataKey="2020 Anti-Asian Hate Crimes" fill="#82ca9d" />
        </BarChart>
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
      </Box>
    </>);}

