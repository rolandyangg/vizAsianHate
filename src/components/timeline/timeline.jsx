import { Chrono } from "react-chrono";
import timelineElements from "./timelinedata";
import { VStack, Heading } from "@chakra-ui/react";

export default function Timeline() {
	return (
		<>
			<VStack h="800px" spacing={7}>
				<Heading color="white">
					AAPI Related United States Legislation Since Quarantine
				</Heading>
				<Chrono
					items={timelineElements}
					slideShow
					mode="VERTICAL_ALTERNATING"
					theme={{
						primary: "#F2D852",
						secondary: "yellow",
						cardBgColor: "gray",
						cardForeColor: "black",
						titleColor: "black",
					}}
				/>
			</VStack>
		</>
	);
}
