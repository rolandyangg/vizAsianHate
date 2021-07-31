import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ReactMapboxGl({
	accessToken:
		'pk.eyJ1IjoiYWhhYW5saW1heWUiLCJhIjoiY2tycHF5eXdlMmI3NDJub2JiMWx2NGp4aiJ9.eGODl97VCEfsezbT7_ZNjA',
});

const Mapbox = () => {
	return (
		<>
			<head>
				...
				<link
					href="https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css"
					rel="stylesheet"
				/>
			</head>
			<Map
				style="mapbox://styles/mapbox/dark-v10"
				containerStyle={{
					height: '100vh',
					width: '100vw',
				}}
        center={[-73.935242, 40.730610]}
			>
				<Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
					<Feature coordinates={[40.73061, -73.935242]} />
				</Layer>
			</Map>
		</>
	);
};

export default Mapbox;
