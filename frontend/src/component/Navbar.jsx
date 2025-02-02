
import { supabase } from '../config/supabase';
import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [loading, setLoading] = useState(false);
  // const location = useLocation()
  const [profile, setProfile] = useState(null);



  const fetchProfile = async () => {

    try {
      const { data: { user } } = await supabase.auth.getUser();
      setProfile(user);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleLogout = async () => {

    try {
      setLoading(true);
      await supabase.auth.signOut();
      localStorage.removeItem('sb-phijictojbnypvqnixkd-auth-token');
      window.location.href = '/login';
      toast.success('Logout successful');
    } catch (error) {
      console.error('Error logging out:', error);
      toast.error('Failed to logout');
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900 text-white px-4 py-2 flex justify-between md:flex-row flex-col md:space-x-4 space-x-0">
      <div className="flex items-center justify-center w-full md:w-auto md:order-first order-last">

        <Link to={'/'}>
        <ul className="flex items-center justify-center space-x-4 md:flex-row flex-col font-bold font-serif text-2xl">
          BeyondChats
        </ul>
        </Link>


      </div>

      <ul className="flex items-center justify-center space-x-4  md:flex-row flex-col md:mt-0 mt-4">
        <li className="italic">{profile?.email}</li>
        <li
          onClick={handleLogout}
          className="bg-gray-700 px-2 py-1 rounded-md cursor-pointer hover:bg-red-500 ">

          {loading ? ('Logging out...') : ('Logout')}

        </li>
      </ul>
    </div>
  )
}

export default Navbar
