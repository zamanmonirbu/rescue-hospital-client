import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Auth/Firebase/app.config";
import Footer from "../../component/User/Footer/Footer";
import Navbar from "../../component/User/Navbar/Navbar";
import Error from "../../component/SideEffects/Error";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError]=useState(false)

  // const [formData, setFormData] = useState({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   password: '',
  // });

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post('YOUR_BACKEND_ENDPOINT', formData);
  //     if (response.status === 200) {
  //       console.log('Registration successful');
  //     } else {
  //       console.error('Registration failed');
  //     }
  //   } catch (error) {
  //     console.error('Error during registration:', error);
  //   }
  // };
  // const handleInputChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const handleCreateAccountByGoogle = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          navigate("/user/login");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setError(true)
      });
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-300">
        <div className="bg-white p-8 rounded shadow-md">
        {error && <Error/>}
          <h2 className="text-2xl font-bold mb-8 text-center ">
            Registration Form
          </h2>
          <form onSubmit={handleCreateAccountByGoogle}>
          <div className="flex mb-4">
              <div className="w-1/2 pr-2">
                <label
                  htmlFor="loginEmail"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="loginEmail"
                  name="email"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Enter your email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>

              <div className="w-1/2 pl-2">
                <label
                  htmlFor="loginPassword"
                  className="block text-sm font-medium text-gray-600"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="loginPassword"
                  name="password"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Enter your password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>
          
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Register
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/user/login" className="text-blue-500 hover:underline">
              SignIn
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegistrationPage;
