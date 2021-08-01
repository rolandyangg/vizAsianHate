import { Box, Text, Heading, Flex } from "@chakra-ui/react"
import {
	BarChart,
	Bar,
	Cell,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer
} from 'recharts';
import { PureComponent } from 'react';

import PoliticsTweetData from "./asianhatetweetdata"

export default function PoliticsGraph() {
	return (
		<Flex align="center" justify="center">
			<BarChart
			layout="vertical"
			width={700}
			height={450}
			data={PoliticsTweetData}
			margin={{
				top: 20,
				right: 30,
				left: 20,
				bottom: 5
			}}
			>
				<CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
				<XAxis dataKey="# of Tweets" type="number"/>
				<YAxis dataKey="Category" type="category" scale="band"/>
				<Tooltip />
				<Legend />
				<Bar dataKey="Democrats" stackId="a" fill="#E49B0F" />
				<Bar dataKey="Republicans" stackId="a" fill="#E4D00A" />
			</BarChart>
			<Heading>
				Test
			</Heading>
		</Flex>
    );
}