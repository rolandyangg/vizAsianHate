import { Text, Heading, Flex, VStack } from "@chakra-ui/react"
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from 'recharts';

import PoliticsTweetData from "./asianhatetweetdata"

export default function PoliticsGraph() {
	return (
		<Flex align="center" justify="center">
			<BarChart
			layout="vertical"
			width={600}
			height={450}
			data={PoliticsTweetData}
			margin={{
				top: 20,
				right: 30,
				left: 20,
				bottom: 5
			}}
			mx={15}
			>
				<CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
				<XAxis dataKey="# of Tweets" type="number"/>
				<YAxis dataKey="Category" type="category" scale="band"/>
				<Tooltip />
				<Legend />
				<Bar dataKey="Democrats" stackId="a" fill="#E49B0F" />
				<Bar dataKey="Republicans" stackId="a" fill="#E4D00A" />
			</BarChart>
			<VStack mx={10}>
				<Heading fontSize={30}>
					"Tweets deploying stigmatizing rhetoric were retweeted a total of 1,310,828 times and like a total of 4,488,173 times"
				</Heading>
				<Text fontSize={17}>
					Online as well, Social Media proved to be a platform for hate to proliferate.
					In the first eight months of the COVID-19 pandemic, researchers examined the tweets
					issued by both Republican and Democrat general election candidates for the offices of President, Vice President, and U.S. Senator.
					Researchers searched for tweets that contained any terms relating to AAPI from their accounts, and
					analyzed their rhetoric and intent.
				</Text>
			</VStack>
		</Flex>
    );
}