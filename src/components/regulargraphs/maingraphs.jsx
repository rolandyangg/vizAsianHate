import React from "react";
import { Box } from "@chakra-ui/react";
//import {Bar, Line} from 'react-chartjs-2';
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts'
import crime from "./hate_crime2.js"

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
		data={crime}
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
		<Line yAxisId="right" type="monotone" dataKey="Percent Change From Previous Year" connectNulls ="true" stroke="#82ca9d" activeDot={{ r: 8 }} />
	</LineChart>
	</Box>
	</>);
}
/*							  
 <LineChart width={730} height={250} data={data}
	margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
	<CartesianGrid strokeDasharray="3 3" />
	<XAxis dataKey="Month" />
	<YAxis />
	<Tooltip />
	<Legend />
	<Line type="monotone" dataKey="pv" stroke="#8884d8" />
	<Line type="monotone" dataKey="amt" stroke="#82ca9d" />
  </LineChart>*/



//let filename = 'public/California Asian Hate Crime Numbers 2016-2020.csv';


/*function makeChart(players) {
	// players is an array of objects where each object is something like:
	// {
	//   "Name": "Steffi Graf",
	//   "Weeks": "377",
	//   "Gender": "Female"
	// }
  
	var monthLabel = players.map(function(d) {return d.Month});
	var yearData = players.map(function(d) {return +d.Year});
	var numOccurences = players.map(function(d) {return d.Occurences});
  
	var chart = new Chart('chart', {
	  type: 'horizontalBar',
	  options: {
		maintainAspectRatio: false,
		legend: {
		  display: false
		},
		scales: {
		  xAxes: [
			{
			  scaleLabel: {
				display: true,
				labelString: 'Months',
				fontSize: 16
			  }
			}
		  ]
		}
	  },
	  data: {
		labels: playerLabels,
		datasets: [
		  {
			data: weeksData,
			backgroundColor: playerColors
		  }
		]
	  }
	})
  }*/
  
  // Request data using D3
  //d3.csv('public/California Asian Hate Crime Numbers 2016-2020.csv')
 // .then(makeChart);

/*const state = {
	labels: ['January', 'February', 'March',
			 'April', 'May'],
	datasets: [
	  {
		label: 'Asian Attacks',
		fill: false,
		lineTension: 0.5,
		backgroundColor: 'rgba(75,192,192,1)',
		borderColor: 'rgba(0,0,41,1)',
		borderWidth: 2,
		data: [65, 59, 80, 81, 56]
	  }
	]
	
  }
  
  export default class MainGraph extends React.Component {
	render() {
	  return (
		<div>
		  <Line
			data={state}
			options={{
				layout: {
					padding: {
						left: 0
					}
				},
			  title:{
				display:true,
				text:'Average Rainfall per month',
				fontSize:20
			  },
			  legend:{
				display:true,
				position:'right'
			  }
			}}
		  />
		</div>
	  );
	}
  }*/



