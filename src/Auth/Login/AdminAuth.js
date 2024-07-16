// AdminAuth.js
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../Firebase/app.config';

export const loginAdmin = async (username, password) => {
  try {
    // Reference to the admins collection
    const adminsRef = collection(db, 'admin');
    // console.log("Admin Data",adminsRef);
    // Query to find the admin by username
    const q = query(adminsRef, where('username', '==', username));
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      const adminDoc = querySnapshot.docs[0];
      const adminData = adminDoc.data();
      console.log(adminData);
      // Check password (plain text comparison)
      if (password === adminData.password) {
        // Store admin details securely
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
