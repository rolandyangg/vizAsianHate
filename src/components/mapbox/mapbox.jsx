import { useState } from 'react';
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import {
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

	return (
		<>
			<Map
				style="mapbox://styles/mapbox/dark-v10"
				containerStyle={{
					height: '100vh',
					width: '100vw',
				}}
				center={[-98.5795, 39.8283]}
				zoom={[4.2]}
			>
				{aapiHateCrimes.map((hateCrime, i) => {
					return (
						<>
							<Marker
								key={i}
								coordinates={hateCrime.geometry.coordinates}
								anchor="bottom"
								onClick={() => {
									setPlace(hateCrime.properties.place_name);
									setText(hateCrime.properties.text);
									setSource(hateCrime.properties.source);
									onOpen();
								}}
							>
								<Image objectFit="cover" alt="Marker" src="images/marker.png" />
							</Marker>
						</>
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
		</>
	);
};

export default Mapbox;
