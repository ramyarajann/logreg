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

export default {
  [fullName.name]: '',
  [gender.name]: '',
  [country.name]: '',
  [state.name]: '',
  [phoneno.name]: '',
 
  [Companyname.name]: '',
  [emailid.name]: '',
  [jobtitle.name]: '',
  [exp.name]: '',
  [iaccepttermsandconditions.name]: ''
};
