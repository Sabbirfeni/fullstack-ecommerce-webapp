import { signInWithEmailAndPassword } from "firebase/auth";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { logo } from "../../assets/images";
import { auth } from "../../firebase/FirebaseConfig";
import "./signup.css";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const redirectPath = location.state?.from ? location.state?.from : "/";

  const [loading, setLoading] = useState(false);
  console.log(location);
  const loginData = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("enter valid email").required("name required"),
    password: Yup.string().required("must enter password"),
  });

  const login = async (values) => {
    console.log(values);
    const { email, password } = values;
    setLoading(true);
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      toast.success("Welcome, you're logged in");
      localStorage.setItem("user", JSON.stringify(user));
      navigate(redirectPath);
      setLoading(false);
    } catch (err) {
      toast.info("No account found.");
      console.log(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="form-container flex flex-col justify-center items-center">
        <img src={logo} alt="logo" className="w-16 h-16 mb-4" />
        <p className="title">Login</p>
        <Formik
          initialValues={loginData}
          validationSchema={validationSchema}
          onSubmit={login}
        >
          {(formik) => {
            const { isValid } = formik;

            return (
              <Form className="sign-form my-4">
                <Field
                  name="email"
                  type="email"
                  className="border border-[#b8b8b8] p-3 rounded-md placeholder:text-[#d3d3d3] outline-none"
                  placeholder="Email"
                />
                <ErrorMessage
                  name="email"
                  className="text-[#ff8383]"
                  component="div"
                />
                <Field
                  name="password"
                  type="password"
                  className="border border-[#b8b8b8] p-3 rounded-md placeholder:text-[#d3d3d3] outline-none"
                  placeholder="Password"
                />
                <ErrorMessage
                  name="password"
                  className="text-[#ff8383]"
                  component="div"
                />
                <button
                  type="submit"
                  className={`${
                    loading || !isValid ? "bg-gray-500 pointer-events-none" : ""
                  } bg-[#000] text-[#fff] py-3 rounded-md`}
                  disabled={!isValid || loading}
                >
                  {loading ? "Loading..." : "Log in"}
                </button>
              </Form>
            );
          }}
        </Formik>

        <p className="sign-up-label">
          Don't have account?
          <Link to="/signup" className="sign-up-link">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
