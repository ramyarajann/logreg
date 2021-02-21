import * as Yup from 'yup';
import moment from 'moment';
import checkoutFormModel from './checkoutFormModel';
const {
  formField: {
    fullName,
    gender,
    country,
    state,
    phoneno,
    Companyname,
    emailid,
    jobtitle,
    exp,
    iaccepttermsandconditions
  }
} = checkoutFormModel;

const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;

export default [
  Yup.object().shape({
    [fullName.name]: Yup.string().required(`${fullName.requiredErrorMsg}`),
    [gender.name]: Yup.string().required(`${gender.requiredErrorMsg}`)
      .nullable(),

    [phoneno.name]: Yup.string().required(`${phoneno.requiredErrorMsg}`),
  }),
  Yup.object().shape({
     [Companyname.name]: Yup.string().required(`${Companyname.requiredErrorMsg}`),
     [emailid.name]: Yup.string().required(`${emailid.requiredErrorMsg}`),
     [jobtitle.name]: Yup.string().required(`${jobtitle.requiredErrorMsg}`),
     [exp.name]: Yup.string().required(`${exp.requiredErrorMsg}`),
     [iaccepttermsandconditions.name]: Yup.string().required(`${iaccepttermsandconditions.requiredErrorMsg}`),

    
  })
];
