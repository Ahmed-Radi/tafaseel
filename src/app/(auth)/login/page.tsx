"use client"
import Image from "next/image";
import loginImage from "@/assets/images/login-image.png";
import { Box, Button, Center, Flex, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Tajawal } from "next/font/google";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { signInSchema } from "@/schema/loginSchema";
import { yupResolver } from "@hookform/resolvers/yup"

interface ILoginPage { }
interface ILoginPageInputs {
  email: string;
  password: string;
}

const tajawal = Tajawal({ subsets: ["arabic"], weight: ["200", "300", "400", "500", "700", "800", "900"] });

function LoginPage({ }: ILoginPage) {
  const [show, setShow] = useState(false)

  // Form validation
  const { register, handleSubmit, watch, formState: { errors } } = useForm<ILoginPageInputs>(
    {
      resolver: yupResolver(signInSchema),
    }
  );
  const onSubmit = (data: ILoginPageInputs) => console.log(data);

  //Handlers
  const handleClick = () => setShow((prev: boolean): boolean => !prev)

  return (
    <Flex as="section" className="login-container">
      <Box as="section" position={"relative"} className="login-image" h={"100%"} w={"50%"}>
        <Image src={loginImage} fill sizes="100vh" priority={true} placeholder={"blur"} alt="login-image" />
      </Box>
      <Flex className="login-form-container" w={"50%"}>
        <Center w={"100%"}>
          <Flex direction={"column"}>
            <Box as="h3" textAlign={"right"} py={"10px"} my={"8xp"} fontSize={"28px"} fontWeight={700} className={tajawal.className}>تسجيل الدخول</Box>
            <Flex as={"form"} onSubmit={handleSubmit(onSubmit)} align={"flex-end"} w={"420px"} direction={"column"}>

              <Flex as="section" align={"flex-end"} direction={"column"} gap={"8px"} flex={1} w={"100%"} pb={"15px"}>
                <Box as="label" htmlFor="email" fontSize={"14px"} fontWeight={500}>البريد الالكترونى</Box>
                <Flex as="div" gap={1} direction={"column"} textAlign={"right"} w={"100%"}>
                  <Input id="email" {...register("email")} type="email" px={"20px"} textAlign={"right"} bg={"#e8ffee"} h={"60px"} w={"100%"} variant="outline" />
                  <Box as="span" className="error">{errors.email?.message}</Box>
                </Flex>
              </Flex>

              <Flex as="section" align={"flex-end"} direction={"column"} gap={"8px"} flex={1} w={"100%"} pb={"30px"}>
                <Box as="label" htmlFor="password" fontSize={"14px"} fontWeight={500}>كلمة المرور</Box>
                <Flex as="div" gap={1} direction={"column"} textAlign={"right"} w={"100%"}>
                  <InputGroup>
                    <InputRightElement h='60px' width='4.5rem' left={0}>
                      <Button size='sm' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                      </Button>
                    </InputRightElement>
                    <Input id="password" {...register("password")} type={show ? 'text' : 'password'} paddingLeft={"70px"} paddingRight={"20px"} textAlign={"right"} bg={"#e8ffee"} h={"60px"} w={"100%"} variant="outline" />
                  </InputGroup>
                  <Box as="span" className="error">{errors.password?.message}</Box>
                </Flex>
              </Flex>

              <Flex as={"div"} justifyContent={"space-between"} mb={"40px"} w={"100%"}>
                <Box as="a" href="#" className="forget-password">نسيت كلمة المرور؟</Box>
                <Flex as={"div"} gap={1}>
                  <Box as="label" htmlFor="checkbox">ابق مسجل دخول لفترة اطول</Box>
                  <input type="checkbox" id="checkbox" />
                </Flex>
              </Flex>

              <Button className="submit-button" type="submit">
                <Box as="span">تسجيل الدخول</Box>
              </Button>

            </Flex>
          </Flex>
        </Center>
      </Flex>
    </Flex>
  )
}

export default LoginPage;