import React from "react";
import { Box, Text, Heading, VStack, Center } from "@chakra-ui/react";

export default function Hero() {
	return (
		<>
			<Box w="100%" h="1080px" bgImage="linear-gradient(45deg, rgba(0, 0, 0, 0.898) 0%, rgba(60, 60, 60, 0.885) 100%), url('images/aapi-background.png')" backgroundSize="cover" position="block">
				<Center h="80%" position="block">
					<VStack spacing={5}>
						<Heading fontSize={120}>
							vizAsianHate
						</Heading>
						<Text fontSize={50} w="1280px">
							"Silenced but not invisible, visualizing Asian Americans across the country"
						</Text>
					</VStack>
				</Center>
			</Box>
		</>
	);
}
