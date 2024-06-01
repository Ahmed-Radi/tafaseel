import { IManageAccount } from "@/types/dashboard/manageAccountDropList";
import { Box } from "@chakra-ui/react";
import { LiaObjectUngroupSolid } from "react-icons/lia";

const ManageAccount = ({ onClickHandler }: IManageAccount) => {
	return (
		<Box as={"span"} cursor={"pointer"} onClick={onClickHandler}>
			<LiaObjectUngroupSolid />
		</Box>
	);
};

export default ManageAccount;
