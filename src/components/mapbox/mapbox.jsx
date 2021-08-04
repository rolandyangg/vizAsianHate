import { useState } from "react";
import ReactMapboxGl, { Marker, ZoomControl } from "react-mapbox-gl";
import {
	Tabs,
	TabList,
	Tab,
	Link,
	Text,
	Button,
	Image,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Box,
} from "@chakra-ui/react";
import { aapiHateCrimes } from "./aapi-hate-crimes";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = ReactMapboxGl({
	accessToken:
		"pk.eyJ1IjoiYWhhYW5saW1heWUiLCJhIjoiY2tycHF5eXdlMmI3NDJub2JiMWx2NGp4aiJ9.eGODl97VCEfsezbT7_ZNjA",
});

const Mapbox = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [place, setPlace] = useState("");
	const [text, setText] = useState("");
	const [source, setSource] = useState("");
	const [year, setYear] = useState(0);

	const indexToYear = [0, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2006];

	return (
		<Box>
			<Tabs onChange={(index) => setYear(indexToYear[index])}>
				<TabList height="5vh" color="white">
					<Tab color="white">All Years</Tab>
					<Tab color="white">2021</Tab>
					<Tab color="white">2020</Tab>
					<Tab color="white">2019</Tab>
					<Tab color="white">2018</Tab>
					<Tab color="white">2017</Tab>
					<Tab color="white">2016</Tab>
					<Tab color="white">2015</Tab>
					<Tab color="white">2006</Tab>
				</TabList>
				<Map
					style="mapbox://styles/mapbox/dark-v10"
					containerStyle={{
						height: "90vh",
						width: "80vw",
					}}
					center={[-98.5795, 39.8283]}
					zoom={[4.2]}
					maxBounds={[
						[-155.704594, 7.182507],
						[-30.050213, 53.788833],
					]}
				>
					{aapiHateCrimes
						.filter(
							(feature) =>
								feature.properties.year === year || year === 0
						)
						.map((feature, i) => {
							return (
								<Marker
									key={i}
									coordinates={feature.geometry.coordinates}
									anchor="bottom"
									onClick={() => {
										setPlace(feature.properties.place_name);
										setText(feature.properties.text);
										setSource(feature.properties.source);
										onOpen();
									}}
								>
									{/* <Circle size="15px" bg="blue" color="#00FFFF" borderColor="white" borderWidth="1px" zIndex={0}/> */}
									<Image
										width="15px"
										objectFit="cover"
										alt="Marker"
										src="images/marker.png"
									/>
								</Marker>
							);
						})}
					<ZoomControl />
				</Map>
				<Modal isOpen={isOpen} onClose={onClose}>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader color="black">{place}</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<Text color="black">{text}</Text>
						</ModalBody>
						<ModalFooter>
							<Link href={source} isExternal>
								<Button
									color="black"
									colorScheme="yellow"
									mr={3}
								>
									Read More
								</Button>
							</Link>
						</ModalFooter>
					</ModalContent>
				</Modal>
			</Tabs>
			<Text>
				This interactive map shows location markers for reported Asian
				Hate attacks in the past 15 years. You can choose which year you
				want to view and can also view short descriptions and news
				articles on the specific hate crimes. The purpose of this map is
				to give insight into how drastically Asian Hate crimes have
				increased over the past few years and a broader understanding of
				how widespread Asian hate crimes are around the United States.
			</Text>
		</Box>
	);
};

export default Mapbox;
