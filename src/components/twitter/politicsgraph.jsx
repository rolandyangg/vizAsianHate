/* eslint-disable no-unused-vars */
import { Box, Text } from "@chakra-ui/react"
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
		<Box>
			<BarChart
			layout="vertical"
			width={800}
			height={700}
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
			<Bar dataKey="Democrats" stackId="a" fill="#2c3968" />
			<Bar dataKey="Republicans" stackId="a" fill="#FFBF00" />
			</BarChart>
		</Box>
    );
}