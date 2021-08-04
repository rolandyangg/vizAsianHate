import { Center } from "@chakra-ui/react";
import React from "react";

export default function Container(props) {
	return (
		<>
			<Center as="section" {...props}>
				{props.children}
			</Center>
		</>
	);
}
