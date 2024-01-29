import { createUserWithEmailAndPassword } from "firebase/auth";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { logo } from "../../assets/images";
import ErrorContainer from "../../components/errorMessage/ErrorContainer";
import { auth, fireDB } from "../../firebase/FirebaseConfig";

function Signup() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signupData = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Username required."),
    email: Yup.string().email("Enter vaild email.").required("Email required."),
    password: Yup.string()
      .min(8, "Must be at least 8 character.")
      .required("Password required."),
  });

  const signUp = async (values) => {
    const { name, email, password } = values;
    try {
      setLoading(true);
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = {
        name,
        uid: response.user.uid,
        email: response.user.email,
        time: Timestamp.now(),
      };
      const userRef = collection(fireDB, "users");
      await addDoc(userRef, user);
      await localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
      setLoading(false);
      toast.success("Congrats! You are signed up.");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-[#ffffff] sm:w-96 w-full sm:relative absolute inset-0 p-8 rounded-sm flex flex-col justify-center items-center">
        <Link to="/">
          <img src={logo} alt="logo" className="w-16 h-16 mb-4" />
        </Link>
        <p className="text-lg">Create account</p>
        <Formik
          initialValues={signupData}
          validationSchema={validationSchema}
          onSubmit={signUp}
        >
          {(formik) => {
            const { isValid, errors } = formik;
            const onClickAnimation = () => {
              if (
                Object.keys(errors).length === 0 &&
                errors.constructor === Object
              ) {
                return { x: 0 };
              } else {
                return { x: [0, 10, -10, 10, -10, 10, -10, 0] };
              }
            };
            return (
              <Form className="sign-form my-4">
                {/* Name field */}
                <Field
                  name="name"
                  type="text"
                  className="border bg-[#ececec] border-none p-3 rounded-sm placeholder:text-[#bbbbbb] outline-none"
                  placeholder="Name"
                  autoComplete="off"
                />
                <ErrorMessage name="name" component={ErrorContainer} />

                {/* Email field */}
                <Field
                  name="email"
                  type="email"
                  className="border bg-[#ececec] border-none p-3 rounded-sm placeholder:text-[#bbbbbb] outline-none"
                  placeholder="Email"
                  autoComplete="off"
                />
                <ErrorMessage name="email" component={ErrorContainer} />

                {/* Password field */}
                <Field
                  name="password"
                  type="password"
                  className="border bg-[#ececec] border-none p-3 rounded-sm placeholder:text-[#bbbbbb] outline-none"
                  placeholder="Password"
                  autoComplete="off"
                />
                <ErrorMessage name="password" component={ErrorContainer} />

                {/* Form submit button */}
                <button
                  type="submit"
                  className={`${
                    loading || !isValid ? "cursor-no-drop" : ""
                  } bg-[#000] text-[#fff] py-3 rounded-sm`}
                  disabled={!isValid || loading}
                >
                  {loading ? "Creating..." : "Create"}
                </button>
              </Form>
            );
          }}
        </Formik>

        {/* Section for redirect to login form */}
        <div>
          <span className="text-xs text-[#bbbbbb]">
            Already have an account?
          </span>
          <Link to="/login" className="text-xs ml-1 hover:underline">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
