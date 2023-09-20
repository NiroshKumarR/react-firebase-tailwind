import { useEffect } from 'react';
import ReactSVG from './assets/react.svg';
import Login from './components/auth/Login';
import { useAuthState } from 'react-firebase-hooks/auth';
import FirebaseAuth from './firebase/firebaseAuth';
import { useNavigate } from 'react-router-dom';

function App() {
  const [user, loading] = useAuthState(FirebaseAuth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user && !loading) {
      console.log({ user });
      if (user.emailVerified) {
        // TODO: Redirect user to blog page after login
        // navigate('/blogs');
      }
    }
  }, [user, loading]);
  if (loading) return <div>Loading...</div>;

  return (
    <div
      className="
    w-full h-screen flex justify-center items-center flex-col
    "
    >
      <h1
        className="
        text-4xl font-semibold first-letter:text-5xl text-blue-600 flex gap-3 flex-col items-center justify-center
        "
      >
        <span className="flex">
          React<sup className="text-lg font-mono">TS</sup>
          <img src={ReactSVG} alt="" />
        </span>
        Tailwindcss And Firebase Starter Template
      </h1>

      <div className="flex gap-3 mt-5">
        <Login />
      </div>
    </div>
  );
}

export default App;
