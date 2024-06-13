import * as yup from 'yup';

const createSchema = yup.object().shape({
  accountName: yup.string().required("اسم الحساب مطلوب"),
  accountType: yup.string().required("نوع الحساب مطلوب")
});

export default createSchema;