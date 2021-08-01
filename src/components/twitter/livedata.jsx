/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import { FormControl, FormLabel, Select, Box, Flex, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import tweets from "./asiantwitter"
import {
	PieChart, Pie, Cell, Tooltip
} from 'recharts';
import ReactWordcloud from "react-wordcloud";

const keywords = ['Stop Asian Hate', 'Chinese virus', 'China', 'Chinese', 'Asian American', 'AAPI', 'Wuhan', 'Virus', 'wuhan virus', 'Stop AAPI Hate', 'Asian Hate', 'ChinaLiedPeopleDied', 'Racism is a virus'];

const stopwords = ['say', 'said', '', 'i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves', 'you', 'your', 'yours', 'yourself', 'yourselves', 'he', 'him', 'his', 'himself', 'she', 'her', 'hers', 'herself', 'it', 'its', 'itself', 'they', 'them', 'their', 'theirs', 'themselves', 'what', 'which', 'who', 'whom', 'this', 'that', 'these', 'those', 'am', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'having', 'do', 'does', 'did', 'doing', 'a', 'an', 'the', 'and', 'but', 'if', 'or', 'because', 'as', 'until', 'while', 'of', 'at', 'by', 'for', 'with', 'about', 'against', 'between', 'into', 'through', 'during', 'before', 'after', 'above', 'below', 'to', 'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under', 'again', 'further', 'then', 'once', 'here', 'there', 'when', 'where', 'why', 'how', 'all', 'any', 'both', 'each', 'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very', 's', 't', 'can', 'will', 'just', 'don', 'should', 'now'];

const frequencies = []

function makeFrequencyObject(activeWord) {
	let words = {}
	for (const tweet in tweets[activeWord]) {
		let text = tweets[activeWord][tweet]['text'];
		text = text.replace(/[^A-Za-z0-9\s]/g, "").replace(/\s{2,}/g, " ")
		let temp = text.split(' ');
		for (let i = 0; i < temp.length; i++) {
			if (!stopwords.includes(temp[i].toLowerCase())) {
				if (words[temp[i]] == undefined)
					words[temp[i]] = {
						value: 0
					};
				words[temp[i]].value += 1
			}
		}
	}

	// filter
	let filter = []
	for (const word in words)
		filter.push([word, words[word].value])
	filter.sort(function (a, b) {
		return b[1] - a[1];
	});

	// reformat
	let res = []
	for (let i = 0; i < Math.min(filter.length, 25); i++) {
		res.push({
			text: filter[i][0],
			value: filter[i][1]
		})
	}

	// internalFrequencyObject = res;
	return res;
}

for (let i = 0; i < keywords.length; i++)
	frequencies.push(makeFrequencyObject(keywords[i]));

export default function LiveTwitter() {

	const [activeKey, setActiveKey] = useState(keywords[4]) // use the first word to start
	
	function organizeSentiments() {
		let counts = [0, 0, 0] // Positive, Neutral, Negative
		for (const word in tweets[activeKey]) {
			if (tweets[activeKey][word]['sentiment'] == 'Positive')
				counts[0]++;
			else if (tweets[activeKey][word]['sentiment'] == 'Negative')
				counts[2]++;
			else
				counts[1]++;
		}
		// format
		return [
			{ name: "Positive", value: counts[0] },
			{ name: "Neutral", value: counts[1] },
			{ name: "Negative", value: counts[2] }
		];
	}

	function renderPieChart() {
		const data = organizeSentiments();
		const RADIAN = Math.PI / 180;
		const renderCustomizedLabel = ({
			cx,
			cy,
			midAngle,
			innerRadius,
			outerRadius,
			percent,
			index
			}) => {
			const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
			const x = cx + radius * Math.cos(-midAngle * RADIAN);
			const y = cy + radius * Math.sin(-midAngle * RADIAN);

			return (
				<text
				x={x}
				y={y}
				fill="white"
				textAnchor={x > cx ? "start" : "end"}
				dominantBaseline="central"
				>
				{`${(percent * 100).toFixed(0)}%`}
				</text>
			);
		};

		return (
			<>
				<PieChart width={400} height={400}>
					<Pie
						data={data}
						cx="50%"
						cy="50%"
						labelLine={false}
						label={renderCustomizedLabel}
						outerRadius={100}
						fill="#8884d8"
						dataKey="value"
						legendType="line"
					>
						{data.map((entry, index) => (
							<Cell key={index} fill={'#FFBF00'}/>
						))}
					</Pie>
					<Tooltip content="Tool"/>
				</PieChart>
			</>
		);
	}

	return (
		<>
			<Flex align="center" justify="center" flexWrap="wrap">
				<Flex align="center" justify="center">
					{/* <ReactWordcloud size={[500, 300]} words={frequencies[keywords.indexOf(activeKey)]}/> */}
					{renderPieChart()}
				</Flex>
					<Select onChange={(e) => setActiveKey(e.currentTarget.value)}>
						{keywords.map((word, i) => {
							return (<>
								<option value={word}>{word}</option>
							</>)
						})}
					</Select>
			</Flex>
		</>
	);
}
