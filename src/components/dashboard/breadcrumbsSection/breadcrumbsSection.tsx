import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import ServiceButton from "./serviceButton/serviceButton";
import Breadcrumbs from "./breadcrumbs/breadcrumbs";

type Props = {};

const BreadcrumbsSection = (props: Props) => {
	return (
		<Box as={"section"} py={"24px"}>
			<Container
				maxW={"container"}
				px={{
					base: "15px",
					md: "39px",
				}}>
				<Flex
					justifyContent={{
						base: "flex-start",
						md: "space-between",
					}}
					flexDirection={{
						base: "column-reverse",
						lg: "row",
					}}>
					<Flex
						as={"div"}
            alignItems={{
              base: "flex-start",
              // sm: "center",
              md: "center",
            }}
            flexDirection={{
              base: "row",
              sm: "column",
              md: "row",
            }}
						justifyContent={{
							base: "row",
							md: "center",
							lg: "flex-start",
						}}
            gap={"10px"}>
						<ServiceButton />
					</Flex>
					<Breadcrumbs />
				</Flex>
			</Container>
		</Box>
	);
};

export default BreadcrumbsSection;
