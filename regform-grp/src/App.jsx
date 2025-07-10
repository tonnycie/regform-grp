import { Formik, Form, Field, ErrorMessage } from 'formik';

function App() {
  

   return (
    <div>
     <h1>Sign up!</h1>
     <Formik
       initialValues={{ email: '', password: '', 'First Name': '', 'Middle Name': '', 'Last Name': '', 'confirm password': '' , 'phone number': '', 'country': '', 'city': '', 'postal code': '', 'address line 1': '', 'address line 2': '' }}
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
         }
         return errors;
          if (!values['phone number']) {
           errors['phone number'] = 'Optional';
         return errors;}
          if (!values['country']) {
           errors['country'] = 'Required';
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
