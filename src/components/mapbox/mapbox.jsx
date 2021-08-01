import { useState } from 'react';
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
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
} from '@chakra-ui/react';
import { aapiHateCrimes } from './aapi-hate-crimes';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ReactMapboxGl({
	accessToken:
		'pk.eyJ1IjoiYWhhYW5saW1heWUiLCJhIjoiY2tycHF5eXdlMmI3NDJub2JiMWx2NGp4aiJ9.eGODl97VCEfsezbT7_ZNjA',
});

const Mapbox = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [place, setPlace] = useState('');
	const [text, setText] = useState('');
	const [source, setSource] = useState('');
	const [year, setYear] = useState(0);

	const indexToYear = [0, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2006];

	return (
		<Tabs onChange={(index) => setYear(indexToYear[index])}>
			<TabList height='5vh'>
				<Tab>All Years</Tab>
				<Tab>2021</Tab>
				<Tab>2020</Tab>
				<Tab>2019</Tab>
				<Tab>2018</Tab>
				<Tab>2017</Tab>
				<Tab>2016</Tab>
				<Tab>2015</Tab>
				<Tab>2006</Tab>
			</TabList>
			<Map
				style="mapbox://styles/mapbox/dark-v10"
				containerStyle={{
					height: '90vh',
					width: '80vw',
				}}
				center={[-98.5795, 39.8283]}
				zoom={[4.2]}
				maxBounds={[[-155.704594, 7.182507], [-30.050213, 53.788833]]}
			>
				{aapiHateCrimes
					.filter((feature) => feature.properties.year === year || year === 0)
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
			</Map>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{place}</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Text>{text}</Text>
					</ModalBody>
					<ModalFooter>
						<Link href={source} isExternal>
							<Button colorScheme="blue" mr={3}>
								Read More
							</Button>
						</Link>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Tabs>
	);
};

export default Mapbox;
