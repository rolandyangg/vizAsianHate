import React from 'react';
import {
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart, Bar, Cell, 
} from 'recharts';
import { Box, Text } from "@chakra-ui/react";
import anti from './antiasian_bar'

const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

export default function BarGraph() {
	return (<>
    <Text>hello</Text>
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
          <Legend padding="123"/>
          <Bar dataKey="2019 Crime" fill="#8884d8" />
          <Bar dataKey="2020 Crime" fill="#82ca9d" />
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

