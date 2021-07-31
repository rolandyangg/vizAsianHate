/* eslint-disable no-undef */
import { Text } from '@chakra-ui/react'
import React from "react";
import testimonies from './aapitestimonydata'

function BubbleGraph() {
	return (
		<>
			<Text>{testimonies[0].Text}</Text>
		</>
	);
}

export default BubbleGraph;