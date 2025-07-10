import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Autocomplete, TextField } from '@mui/material';
import Box from '@mui/material/Box';

function App() {
 const countries = [
  { code: 'BG', label: 'Bulgaria', phone: '359' },
  { code: 'US', label: 'United States', phone: '1' },
  { code: 'DE', label: 'Germany', phone: '49' },
  { code: 'FR', label: 'France', phone: '33' },
  { code: 'IT', label: 'Italy', phone: '39' },
  { code: 'ES', label: 'Spain', phone: '34' },
  { code: 'GB', label: 'United Kingdom', phone: '44' },
  { code: 'CA', label: 'Canada', phone: '1' },
  { code: 'AU', label: 'Australia', phone: '61' },
  { code: 'IN', label: 'India', phone: '91' },
  { code: 'CN', label: 'China', phone: '86' },
  { code: 'JP', label: 'Japan', phone: '81' },
  { code: 'BR', label: 'Brazil', phone: '55' },
  { code: 'RU', label: 'Russia', phone: '7' },
  { code: 'TR', label: 'Turkey', phone: '90' },
  { code: 'GR', label: 'Greece', phone: '30' },
  { code: 'NL', label: 'Netherlands', phone: '31' },
  { code: 'PL', label: 'Poland', phone: '48' },
  { code: 'RO', label: 'Romania', phone: '40' },
  { code: 'UA', label: 'Ukraine', phone: '380' },
];
   return (
    <div>
     <h1>Sign up!</h1>
     <Formik
       initialValues={{ email: '', password: '', 'First Name': '', 'Middle Name': '', 'Last Name': '', 'confirm password': '' , 'phone number': '', country: null, 'city': '', 'postal code': '', 'address line 1': '', 'address line 2': '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
          if (!values.password) {
           errors.password = 'Required';}
          if (!values['First Name']) {
           errors['First Name'] = 'Required';
         return errors;}
          if (!values['Middle Name']) {
           errors['Middle Name'] = 'Optional';
         return errors;}
          if (!values['Last Name']) {
           errors['Last Name'] = 'Required';
         return errors;}
         if(values.password !== values['confirm password']) {
           errors['confirm password'] = 'Passwords must match';
          return errors;}
          if (!values['phone number']) {
           errors['phone number'] = 'Optional';
         return errors;}
          if (!values['city']) {
           errors['city'] = 'Required';
         return errors;}
          if (!values['postal code']) {
           errors['postal code'] = 'Required';
         return errors;}
          if (!values['address line 1']) {
           errors['address line 1'] = 'Required';
         return errors;}
          if (!values['address line 2']) {
           errors['address line 2'] = 'Optional';
         return errors;}
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
           <Field type="First Name" name="First Name" placeholder="First name" />
           <ErrorMessage name="First Name" component="div" />

            <Autocomplete
      id="country-select-demo"
      sx={{ width: 300 }}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => {
        const { key, ...optionProps } = props;
        return (
          <Box
            key={key}
            component="li"
            sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
            {...optionProps}
          >
             <img
              loading="lazy"
              width="20"
              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
              alt=""
            />
            {option.label} ({option.code}) +{option.phone}
          </Box>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a country"
          sx = {{        
            backgroundColor: 'white', 
          }}
          slotProps={{
            htmlInput: {
              ...params.inputProps,
              autoComplete: 'new-password',
            },
          }}
        />
      )}
    />
           


           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </Form>
       )}
     </Formik>
   </div>
   )
}

export default App
