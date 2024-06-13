"use client";
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Input,
	Select,
	Text,
	FormErrorMessage,
} from "@chakra-ui/react";
import createSchema from "@/schema/createSchema";
import { Controller, useForm } from "react-hook-form";
import { IForm } from "@/types/dashboard/device/create";
import styles from "./create.module.scss";

function CreatePage() {
	const { content_container, content, input_container } = styles;

	const {
		handleSubmit,
		register,
		control,
		formState: { errors },
	} = useForm<IForm>({
		resolver: yupResolver(createSchema),
	});

	const onSubmit = (data: IForm) => {
		console.log(data);
	};

	return (
		<Flex justify='center' align='center' className={content_container}>
			<Box
				bg='white'
				rounded='md'
				p={{
					base: "15px",
					md: 6,
				}}
				w='100%'
				className={content}>
				<Box as={"h4"} fontSize='15px' fontWeight={600}>
					ربط حساب إرسال جديد
				</Box>
				<form onSubmit={handleSubmit(onSubmit)}>
					<FormControl
						mb={4}
						display={"flex"}
						flexDirection={{
							base: "column",
							lg: "row-reverse",
						}}
						alignItems={{
							base: "flex-end",
							lg: "center",
						}}
						isInvalid={Boolean(errors.accountName)}>
						<FormLabel
							m={"0"}
							width={{
								base: "100%",
								md: "41%",
							}}>
							أعطي اسم لهذا الحساب
						</FormLabel>
						<Flex
							flexDirection={"column"}
							className={input_container}
							width={{
								base: "100%",
								md: "50%",
							}}>
							<Input
								placeholder='مثال : رقم خدمة عملاء المتجر'
								{...register("accountName")}
							/>
							<FormErrorMessage flexDirection={"row-reverse"}>
								{errors.accountName &&
									errors.accountName.message}
							</FormErrorMessage>
						</Flex>
					</FormControl>
					<FormControl
						mb={4}
						display={"flex"}
						flexDirection={{
							base: "column",
							lg: "row-reverse",
						}}
						alignItems={{
							base: "flex-end",
							lg: "center",
						}}
						isInvalid={Boolean(errors.accountType)}>
						<FormLabel
							m={"0"}
							width={{
								base: "100%",
								md: "41%",
							}}
							display={"flex"}
							flexDirection={"column"}>
							<Box as={"span"}>اختر نوع الحساب وطريقة الربط</Box>
							<Box as={"small"}>
								اختر &quot;واتساب QR&quot; من اجل الطريقة
								الإفتراضية
							</Box>
						</FormLabel>
						<Flex
							flexDirection={"column"}
							className={input_container}
							width={{
								base: "100%",
								md: "50%",
							}}>
							<Controller
								name='accountType'
								control={control}
								render={({ field }) => (
									<Select
										{...field}
										defaultValue='whatsapp qr'>
										<option value='whatsapp qr'>
											واتساب QR
										</option>
										<option value='whatsapp'>واتساب</option>
									</Select>
								)}
							/>
              <FormErrorMessage flexDirection={"row-reverse"}>
                {errors.accountType && errors.accountType.message}
              </FormErrorMessage>
						</Flex>
					</FormControl>
					<Button colorScheme='teal' size='md' type='submit'>
						الخطوة التالية
					</Button>
				</form>
			</Box>
		</Flex>
	);
}

export default CreatePage;
