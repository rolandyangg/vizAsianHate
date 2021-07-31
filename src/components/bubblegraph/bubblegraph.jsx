/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { Box, Text, Center, Flex, Icon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, ModalFooter, Button, CheckboxGroup, Checkbox, HStack, useDisclosure, useForceUpdate } from '@chakra-ui/react'
import { useState } from "react";
import { render } from 'react-dom';
import { testimonies, stateColors, typeColors } from './aapitestimonydata'
import { NextLink } from "next/link"

const possibleStates = Object.keys(stateColors)
const possibleTypes = Object.keys(typeColors)

let statesBooleans = []
for (let i = 0; i < possibleStates.length; i++)
	statesBooleans.push(true)

let typesBooleans = []
for (let i = 0; i < possibleTypes.length; i++)
	typesBooleans.push(true)

var currentlyHovering = {}

function Bubble(props) {
	const {
		isOpen,
		onOpen,
		onClose
	} = useDisclosure();

	return (
		<>
			<Box bgColor={props.bgColor} borderWidth="3px" borderColor={props.borderColor} w="50px" h="50px" rounded="50px" m="2px" transition="all 0.3s ease"
						_hover={{
							cursor: "pointer",
							transform: "scale(0.80)",
							borderWidth: "7px",
							
						}}
						onClick={onOpen}>
			</Box>
					
			<Modal isOpen={isOpen} onClose={onClose} isCentered motionPreset="slideInButtom">
						<ModalOverlay />
						<ModalContent bgColor="gray" align="center">
							<ModalBody>
								<Box>
									<Text>State: {props.State}</Text>
									<Text>City: {props.City}</Text>
									<Text>Type: {props.Type}</Text>
									<Text>Report: {props.Report}</Text>
									<Text>Source: {props.Source}</Text>
								</Box>
							</ModalBody>
							<ModalFooter>
								<Button size="sm" onClick={onClose}>
									Close
								</Button>
							</ModalFooter>
						</ModalContent>
			</Modal>
		</>
	)
}

export default function BubbleGraph() {

	var filteredTestimonies = []

	const [checkedStates, setCheckedStates] = useState(statesBooleans)
	const [checkedTypes, setCheckedTypes] = useState(typesBooleans)

	function renderBubbles() {
		filterState()
		return (
			filteredTestimonies.map((testimony, i) => {
				return (
					<Bubble 
						bgColor={stateColors[testimony.State]} 
						borderColor={typeColors[testimony.Type]} 
						State={testimony.State}
						City={testimony.City}
						Type={testimony.Type}
						Report={testimony.Text}
						Source={testimony.Source}
						key={i}
					/>
				);
			})
		)
	}

	function filterState() {
		filteredTestimonies = []
		// filter
		for (let i = 0; i < testimonies.length; i++) {
			let testimony = testimonies[i];
			// if (activeStates.includes(testimony.State) && activeTypes.includes(testimony.Type))
			// 	filteredTestimonies.push(testimony);
			let stateIndex = possibleStates.indexOf(testimony.State);
			let typeIndex = possibleTypes.indexOf(testimony.Type)
			if (checkedStates[stateIndex] && checkedTypes[typeIndex])
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

	function adjustAll(value, state) {
		if (state === 'types') {
			let temp = checkedTypes.slice();
			for (let i = 0; i < temp.length; i++)
				temp[i] = value;
			setCheckedTypes(temp);
		} else {
			let temp = checkedStates.slice();
			for (let i = 0; i < temp.length; i++)
				temp[i] = value;
			setCheckedStates(temp);
		}
	}

	return (
		<>
			<Center maxW="1000px" borderWidth="3px" borderColor="gray" flexWrap="wrap" p="10px" my={15}>
				{renderBubbles()}
			</Center>
			<Box>
				<Flex maxW="1100px" maxH="30px" bgColor="white" p="17px" align="center" justify="center" rounded="10px">
					<Text>Test:</Text>
				</Flex>
				<CheckboxGroup>
					<Flex bgColor="white" maxW="1100px" align="center" justify="center" rounded="10px" m={5} flexWrap="wrap">
						{possibleTypes.map((type, i) => {
							return (
								<>
									<Checkbox isChecked={checkedTypes[i]} colorScheme="yellow" m={3} onChange={(e) => {
										let temp = checkedTypes.slice(); 
										temp[i] = e.target.checked;
										setCheckedTypes(temp);
									}} key={i}>{type}</Checkbox>
								</>
							);
						})}
					</Flex>
					<Flex bgColor="white" maxW="1100px" align="center" justify="center" rounded="10px" m={5} flexWrap="wrap">
						{possibleStates.map((state, i) => {
							return (
								<>
									<Checkbox isChecked={checkedStates[i]} colorScheme="yellow" m={3} onChange={(e) => {
										let temp = checkedStates.slice(); 
										temp[i] = e.target.checked;
										setCheckedStates(temp);
									}} key={i}>{state}</Checkbox>
								</>
							);
						})}
					</Flex>
				</CheckboxGroup>
				<Flex align="center" justify="center">
					<Button m={3} onClick={(e) => {adjustAll(false, "types")}}>Clear Types</Button>
					<Button m={3} onClick={(e) => {adjustAll(false, "states")}}>Clear States</Button>
					<Button m={3} onClick={(e) => {adjustAll(true, "types")}}>Select All Types</Button>
					<Button m={3} onClick={(e) => {adjustAll(true, "states")}}>Select All States</Button>
				</Flex>
			</Box>
		</>
	);

}

