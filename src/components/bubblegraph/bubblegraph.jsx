/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { Box, Text, Center, Flex, Icon } from '@chakra-ui/react'
import React from "react";
import { render } from 'react-dom';
import { testimonies, stateColors, typeColors } from './aapitestimonydata'

var currentlyHovering = {}

function Bubble(props) {
	return (
		<>
			<Box bgColor={props.bgColor} borderWidth="3px" borderColor={props.borderColor} w="50px" h="50px" rounded="50px" m="2px" transition="all 0.2s ease"
						_hover={{
							cursor: "pointer",
							transform: "scale(0.80)",
							borderWidth: "7px",
							
						}}>
			</Box>
		</>
	)
}

export default function BubbleGraph() {

	// the state stuff was just making this confusing so screw it for now
	var filteredTestimonies = []
	var activeStates = ["California", "DC", "New York", "Maryland", "Massachusetts", "Maine", "Minnesota", "Illinois", "Texas", "Colorado", "South Carolina", "Arizona", "Wisconsin", "Indiana", "Louisiana", "Michigan", "Oklahoma", "Alaska", "Rhode Island", "Washington", "Kentucky", "Canada", "Virginia", "Florida", "Nevada", "New Jersey", "Georgia", "Pennsylvania", "Oregon", "Iowa", "nan", "District of Columbia"]
	var activeTypes = ["Verbal Harassment", "Avoidance/Shunning", "Coughed/Spat On", "Workplace Discrimination", "Physical Assault", "Online", "Refusal Of Service", "Vandalism"]

	function renderBubbles() {
		filterState()
		return (
			filteredTestimonies.map((testimony, i) => {
				return (
					<Bubble bgColor={stateColors[testimony.State]} borderColor={typeColors[testimony.Type]} key={i}/>
				);
			})
		)
	}

	function filterState() {
		// filter
		for (let i = 0; i < testimonies.length; i++) {
			let testimony = testimonies[i];
			if (activeStates.includes(testimony.State) && activeTypes.includes(testimony.Type))
				filteredTestimonies.push(testimony);
		}
		// shuffle
		for (let i = filteredTestimonies.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * i)
			const temp = filteredTestimonies[i]
			filteredTestimonies[i] = filteredTestimonies[j]
			filteredTestimonies[j] = temp
		}
	}

	return (
		<>
			<Center maxW="1000px" maxH="1000px" borderWidth="3px" borderColor="gray" flexWrap="wrap" p="10px">
				{renderBubbles()}
			</Center>
		</>
	);

}

