import React from "react";
import { Box } from "@chakra-ui/react";
//import {Bar, Line} from 'react-chartjs-2';
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, ReferenceLine, Headers } from 'recharts'
import crime3 from "./hate_crime3.js"
/*const data1 = require(crime);
console.log(data1);
/*fetch("../../../extra/hate_crime1.json")
.then(response => {
   return response.json();
})
.then(data1 => console.log(data1));*/

export default function MainGraph() {
	return (<>
	<Box>
	<LineChart
		width={1200}
		height={600}
		data={crime3}
		margin={{
			top: 5, right: 30, left: 20, bottom: 50,
		}}
	>
		<CartesianGrid strokeDasharray="3 3" />
		<XAxis dataKey="Month" angle={25}
        dx={30}
        dy={20}
        minTickGap={-200}
        axisLine={false}/>
		<YAxis yAxisId="left" />
		<YAxis yAxisId="right" orientation="right" />
		<Tooltip />
		<Headers text="hello"/>
		<Legend verticalAlign="top" height={36}/>
		<ReferenceLine yAxisId="left" x="March 2020" stroke="yellow" label={'Lockdown Mandate Issued'} />
		<Line yAxisId="left" type="monotone" dataKey="Anti-Asian Hate Crimes" name="California Asian Hate Crimes" stroke="#8884d8" activeDot={{ r: 8 }} />
		<Line yAxisId="right" type="monotone" dataKey="California COVID Cases" stroke="#82ca9d" activeDot={{ r: 8 }} />
	</LineChart>
	</Box>
	</>);
}

