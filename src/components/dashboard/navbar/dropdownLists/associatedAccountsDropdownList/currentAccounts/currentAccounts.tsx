import { Box } from "@chakra-ui/react";
import { FaSignal } from "react-icons/fa6";

type Props = {};

function CurrentAccounts({}: Props) {
	return (
		<Box as={"div"} cursor={"pointer"}>
			<FaSignal />
		</Box>
	);
}

export default CurrentAccounts;
