/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import { FormControl, FormLabel, Select, Box, Flex, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import tweets from "./asiantwitter"
import stopwords from "./stopwords"
import {
	
} from 'recharts';
import ReactWordcloud from 'react-wordcloud';

const keywords = ['Stop Asian Hate', 'Chinese virus', 'China', 'Chinese', 'Asian American', 'AAPI', 'Wuhan', 'Virus', 'wuhan virus', 'Stop AAPI Hate', 'Asian Hate', 'ChinaLiedPeopleDied', 'Racism is a virus'];

export default function LiveTwitter() {

	const [activeWord, setActiveWord] = useState(keywords[0]) // use the first word to start
	var internalFrequencyObject = []

	makeFrequencyObject();

	function makeFrequencyObject() {
		let words = {}
		for (const tweet in tweets[activeWord]) {
			let text = tweets[activeWord][tweet]['text'];
			text = text.replace(/[^A-Za-z0-9\s]/g, "").replace(/\s{2,}/g, " ")
			let temp = text.split(' ');
			for (let i = 0; i < temp.length; i++) {
				if (words[temp[i]] == undefined)
					words[temp[i]] = {
						value: 0
					};
				words[temp[i]].value += 1
			}
		}

		// reformat
		let res = []
		for (const word in words) {
			res.push({
				text: word,
				value: words[word].value
			})
		}

		// console.log(res)
		console.log(res);
		internalFrequencyObject = res;
	}

	return (
		<>
			<Flex>
				<Text>Test</Text>
				<ReactWordcloud words={internalFrequencyObject}/>
			</Flex>
		</>
	);
}
