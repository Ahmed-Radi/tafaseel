import { regexpCheckIsEmail } from "@/utils/regx";
import * as yup from "yup";

// Sign In Schema
export const signInSchema = yup.object({
  email: yup.string()
    .required("اكتب بريدك الالكترونى من فضلك")
    .matches(regexpCheckIsEmail, "البريد الالكترونى غير صحيح"),
  password: yup.string().required("اكتب كلمه السر من فضلك").min(6, "كلمه السر يجب ان تكون اكثر من 6 حروف"),
}).required();