import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc';
import FirebaseAuth from '../../firebase/firebaseAuth';
// import { useNavigate } from 'react-router-dom';

const Login = () => {
  const googleProvider = new GoogleAuthProvider();

  //  TODO: Redirect user to blog page after login
  // const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const user = await signInWithPopup(FirebaseAuth, googleProvider);
      if (user) {
        console.log(user);

        //  TODO: Redirect user to blog page after login
        // navigate('/blogs');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      className="align-middle p-4 gap-1 font-medium flex items-center justify-center shadow-lg rounded-lg hover:shadow-blue-400 transition-all duration-200 hover:shadow-md text-white bg-gray-700"
      onClick={() => handleLogin()}
    >
      Login With <FcGoogle className="text-2xl" />
    </button>
  );
};

export default Login;
