import React from "react";
import { Box } from "@chakra-ui/react";
//import {Bar, Line} from 'react-chartjs-2';
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts'
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
		width={800}
		height={400}
		data={crime3}
		margin={{
			top: 5, right: 30, left: 20, bottom: 5,
		}}
	>
		<CartesianGrid strokeDasharray="3 3" />
		<XAxis dataKey="Month" interval="preserveStart"/>
		<YAxis yAxisId="left" />
		<YAxis yAxisId="right" orientation="right" />
		<Tooltip />
		<Legend />
		<Line yAxisId="left" type="monotone" dataKey="Hate Crimes" stroke="#8884d8" activeDot={{ r: 8 }} />
		<Line yAxisId="right" type="monotone" dataKey="California COVID Cases" stroke="#82ca9d" activeDot={{ r: 8 }} />
	</LineChart>
	</Box>
	</>);
}

