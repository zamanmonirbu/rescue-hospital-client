import React, { useContext } from 'react';
import Faceook from '../images/facebook.png'
import Googel from '../images/google.png'
import Github from '../images/github.png'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from '../Auth/app.config'
import { apiContext } from '../../App';

const SignupComponent = () => {
  const [verifyUser,setVerifyUser]=useContext(apiContext)

  const handleGooglePopUp = () => {

    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // console.log(user);
        setVerifyUser(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  return (
    <div className="bg-gray-200 w-full min-h-screen flex items-center justify-center">
      <div className="w-full py-8">
        <div className="flex items-center justify-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {/* SVG path */}
          </svg>
          {/* <h1 className="text-3xl font-bold text-blue-600 tracking-wider">Template</h1> */}
        </div>
        <div className="bg-white w-5/6 md:w-3/4 lg:w-2/3 xl:w-[500px] 2xl:w-[550px] mt-8 mx-auto px-16 py-8 rounded-lg shadow-2xl">
          <h2 className="text-center text-2xl font-bold tracking-wide text-gray-800">Sign Up</h2>
          <p className="text-center text-sm text-gray-600 mt-2">Already have an account? <a href="w" className="text-blue-600 hover:text-blue-700 hover:underline" title="Sign In">Sign in here</a></p>

          <form className="my-8 text-sm">
            <div className="flex flex-col my-4">
              <label htmlFor="email" className="text-gray-700">Email</label>
              <input type="email" name="email" id="email" className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Enter your email" />
            </div>
            <div className="flex flex-col my-4">
              <label htmlFor="password" className="text-gray-700">Password</label>
              <input type="password" name="password" id="password" className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Enter your password" />
            </div>

            {/* Rest of the form inputs */}

            <div className="my-4 flex items-center">
              <input type="checkbox" name="remember_me" id="remember_me" className="mr-2 focus:ring-0 rounded" />
              <label htmlFor="remember_me" className="text-gray-700">I accept the <a href="m" className="text-blue-600 hover:text-blue-700 hover:underline">terms</a> and <a href="e" className="text-blue-600 hover:text-blue-700 hover:underline">privacy policy</a></label>
            </div>

            <div className="my-4 flex items-center justify-end space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 rounded-lg px-8 py-2 text-gray-100 hover:shadow-xl transition duration-150 uppercase">Sign Up</button>
            </div>
          </form>

          <div className="flex items-center justify-between">
            <div className="w-full h-[1px] bg-gray-300"></div>
            <span className="text-sm uppercase mx-6 text-gray-400">Or</span>
            <div className="w-full h-[1px] bg-gray-300"></div>
          </div>


          <div class="text-sm text-center">
            
            <button onClick={handleGooglePopUp} class="ml-24 flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded">
              <img className='h-8' src={Googel} alt="" />
              <span>Sign up with Google</span>
            </button>
            <button class="ml-24 flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded">
              <img className='h-8' src={Faceook} alt="" />
              <span>Sign up with Google</span>
            </button>
            <button class="ml-24 flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded">
              <img className='h-8' src={Github} alt="" />
              <span>Sign up with Google</span>
            </button>

          </div>
          {/* Social media signup buttons */}
        </div>
      </div>
      <h1>{verifyUser.displayName}</h1>
    </div>
  );
};

export default SignupComponent;
