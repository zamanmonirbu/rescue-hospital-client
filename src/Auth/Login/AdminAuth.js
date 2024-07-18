import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../Firebase/app.config';

export const loginAdmin = async (username, password) => {
  try {
    const adminsRef = collection(db, 'admin');
    const q = query(adminsRef, where('username', '==', username));
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      const adminDoc = querySnapshot.docs[0];
      const adminData = adminDoc.data();
      console.log(adminData);
    
      if (password === adminData.password &&adminData.isAdmin ) {
        localStorage.setItem('adminDetails', JSON.stringify({
          id: adminDoc.id,
          username: adminData.username,
          isAdmin:adminData.isAdmin
        }));
        return true;
      }
    }
    return false;
  } catch (error) {
    console.error('Admin login error:', error);
    return false;
  }
};

export const isAdminAuthenticated = () => {
  const adminData = localStorage.getItem('adminDetails');
  return adminData ? JSON.parse(adminData) : null;
};

export const logoutAdmin = () => {
  localStorage.removeItem('adminDetails');
  
};
