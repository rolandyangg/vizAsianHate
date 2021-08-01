/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { Box, Text, Center, Flex, Icon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, ModalFooter, Button, CheckboxGroup, Checkbox, HStack, useDisclosure, Link, Divider, Tooltip } from '@chakra-ui/react'
import { useState } from "react";
import { render } from 'react-dom';
import { testimonies, stateColors, typeColors } from './aapitestimonydata'
import NextLink from "next/link"

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
		<Tooltip closeDelay={10} label={ "(" + (props.City) + ", " + (props.State) + ") " + (props.Type)}>
			<Box bgColor={props.bgColor} borderWidth="3px" borderColor={props.borderColor} w="35px" h="35px" rounded="50px" m="3px" transition="all 0.3s ease"
						_hover={{
							cursor: "pointer",
							transform: "scale(0.7)",
							borderWidth: "7px",
						}}
						onClick={onOpen}>
			</Box>
		</Tooltip>
			
					
			<Modal isOpen={isOpen} onClose={onClose} isCentered motionPreset="slideInButtom">
						<ModalOverlay />
						<ModalContent bgColor="white" align="center">
							<ModalBody p="25px">
								<Box>
									<Text fontWeight="bold">State: {props.State}</Text>
									<Text fontWeight="bold">City: {props.City}</Text>
									<Text fontWeight="bold">Type: {props.Type}</Text>
									<Divider py={2}/>
									<Text py={2}>"{props.Report}"</Text>
									<Text fontSize={10}>Source: <NextLink target="_blank" href={props.Source} isExternal>{props.Source}</NextLink></Text>
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
			<Box>
				<CheckboxGroup>
					<Flex bgColor="white" maxW="1100px" align="center" justify="center" rounded="10px" m={5} p={1} flexWrap="wrap">
						{possibleTypes.map((type, i) => {
							return (
								<>
									<Checkbox isChecked={checkedTypes[i]} colorScheme="yellow" m={2} onChange={(e) => {
										let temp = checkedTypes.slice(); 
										temp[i] = e.target.checked;
										setCheckedTypes(temp);
									}} key={i}>{type}</Checkbox>
								</>
							);
						})}
						<Button m={2} onClick={(e) => {adjustAll(false, "types")}}>Clear Types</Button>
						<Button m={2} onClick={(e) => {adjustAll(true, "types")}}>Select All Types</Button>
					</Flex>
					<Flex bgColor="white" maxW="1100px" align="center" justify="center" rounded="10px" m={5} p={1} flexWrap="wrap">
						{possibleStates.map((state, i) => {
							return (
								<>
									<Checkbox isChecked={checkedStates[i]} colorScheme="yellow" m={2} onChange={(e) => {
										let temp = checkedStates.slice(); 
										temp[i] = e.target.checked;
										setCheckedStates(temp);
									}} key={i}>{state}</Checkbox>
								</>
							);
						})}
						<Button m={2} onClick={(e) => {adjustAll(false, "states")}}>Clear States</Button>
						<Button m={2} onClick={(e) => {adjustAll(true, "states")}}>Select All States</Button>
					</Flex>
				</CheckboxGroup>
			</Box>
			<Center h="600px" justify="center" align="center" borderColor="gray" borderWidth="3px">
				<Center maxW="1100px" flexWrap="wrap" p="10px" position="absolute">
					{renderBubbles()}
				</Center>
			</Center>
		</>
	);

}

