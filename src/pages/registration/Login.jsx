import { signInWithEmailAndPassword } from "firebase/auth";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { logo } from "../../assets/images";
import ErrorContainer from "../../components/errorMessage/ErrorContainer";
import { auth } from "../../firebase/FirebaseConfig";
import "./signup.css";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.from ? location.state?.from : "/";

  const [loading, setLoading] = useState(false);

  const loginData = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Enter valid email.").required("Email required."),
    password: Yup.string().required("Must enter password."),
  });

  const login = async (values) => {
    const { email, password } = values;

    try {
      setLoading(true);
      const user = await signInWithEmailAndPassword(auth, email, password);
      await localStorage.setItem("user", JSON.stringify(user));
      navigate(redirectPath);
      setLoading(false);
      toast.success("Welcome, you're logged in");
    } catch (err) {
      toast.info("No account found.");
      console.log(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-[#ffffff] sm:w-96 w-full sm:relative absolute inset-0 p-8 rounded-sm flex flex-col justify-center items-center">
        <img src={logo} alt="logo" className="w-16 h-16 mb-4" />
        <p className="text-lg">Login</p>
        <Formik
          initialValues={loginData}
          validationSchema={validationSchema}
          onSubmit={login}
        >
          {(formik) => {
            const { isValid } = formik;

            return (
              <Form className="sign-form my-4">
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
                  {loading ? "Logging..." : "Log in"}
                </button>
              </Form>
            );
          }}
        </Formik>

        {/* Section for redirect to create account form */}
        <div>
          <span className="text-xs text-[#bbbbbb]">Don't have account?</span>
          <Link to="/signup" className="text-xs ml-1 hover:underline">
            Create
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
