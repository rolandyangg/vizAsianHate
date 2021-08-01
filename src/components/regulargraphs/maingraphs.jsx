import React from "react";
import { VStack, Heading, Text } from "@chakra-ui/react";
//import {Bar, Line} from 'react-chartjs-2';
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, ReferenceLine } from 'recharts'
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
	<VStack>
		<Heading color="white">California Asian Hate Crimes and COVID-19 Cases Over Time</Heading>
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
			<Legend verticalAlign="top" height={36}/>
			<ReferenceLine yAxisId="left" x="March 2020" stroke="red" label={'Lockdown Mandate Issued'} />
			<Line yAxisId="left" type="monotone" dataKey="Anti-Asian Hate Crimes" name="California Asian Hate Crimes" stroke="#FFAA33" activeDot={{ r: 8 }} />
			<Line yAxisId="right" type="monotone" dataKey="California COVID Cases" stroke="#E4D00A" activeDot={{ r: 8 }} />
		</LineChart>
		<Text>This graph shows the correlation between anti-Asian hate crimes and COVID-19 infection rates in California between January 2019 to September 2020. The vertical red line intersecting March 2020 indicated when the lockdown mandates began taking place around the United States. In March 2020, infection rates significantly increased and by the end of the month over 8000 people were infected. At the time, people began to panic and buy extra groceries, fight over hand sanitizer, and, most unfortunately, pin the blame of the virus on Asians. As seen in California, hate crime reports shot up from 4 to 17 once COVID cases began to rise. That is an absurd increase of 325% in 1 month! Over time as cases grew, however, the line of hate crimes is seen decreasing. 
              There are multiple potential factors that we considered to interpret this data: 
              Not all hate crimes are reported to the police due to limited English proficiency and the inability to report a hate crime in their primary language or a distrust of the police. Therefore, the real numbers may not be reflected in our data.
              As the lockdown progressed over time, less people were outside and less hate crimes were reported as a result.</Text>
	</VStack>
	</>);
}

