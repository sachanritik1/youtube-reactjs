import React from "react";
import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const usernameRef = React.useRef();
  const nameRef = React.useRef();
  const emailRef = React.useRef();
  const passwordRef = React.useRef();
  const confirmPasswordRef = React.useRef();

  const [error, setError] = React.useState(null);

  const navigate = useNavigate();

  const validatePassword = (password, confirmPassword) => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return false;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return false;
    }
    if (!/\d/.test(password)) {
      setError("Password must contain a number");
      return false;
    }
    if (!/[!@#$%^&*]/.test(password)) {
      setError("Password must contain a special character");
      return false;
    }
    setError(null);
    return true;
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const fullName = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    //validate password
    if (!validatePassword(password, confirmPassword)) {
      return;
    }

    fetch(process.env.REACT_APP_BASE_URL + "/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
      body: JSON.stringify({ username, fullName, email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          navigate("/signin");
        }
      });
  };

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            VideoTube
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create and account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSignup}>
                <Input
                  label="Username"
                  type="text"
                  name="username"
                  placeholder="JohnDoe"
                  required={true}
                  reference={usernameRef}
                />
                <Input
                  label="Full Name"
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required={true}
                  reference={nameRef}
                />

                <Input
                  label="Email address"
                  type="email"
                  name="email"
                  placeholder="johndoe@gmail.com"
                  required={true}
                  reference={emailRef}
                />

                <Input
                  label="Password"
                  type="password"
                  name="password"
                  placeholder="Abc@1234"
                  required={true}
                  reference={passwordRef}
                />

                <Input
                  label="Confirm Password"
                  type="password"
                  name="ConfirmPassword"
                  placeholder="********"
                  required={true}
                  reference={confirmPasswordRef}
                />

                {error && (
                  <p className="text-sm font-medium text-red-500">{error}</p>
                )}

                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign up
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to="/signin"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign in here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
