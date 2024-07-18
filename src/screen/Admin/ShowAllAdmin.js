import React, { useState, useEffect } from "react";
import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../../Auth/Firebase/app.config";

const ShowAllAdmin = () => {
  const [admins, setAdmins] = useState([]);
  const [newAdmin, setNewAdmin] = useState({ username: "", password: "", isAdmin: false });
  const [editingAdmin, setEditingAdmin] = useState(null);
  const [editedAdmin, setEditedAdmin] = useState({ username: "", password: "", isAdmin: false });

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const adminsCollection = collection(db, "admin");
        const adminsSnapshot = await getDocs(adminsCollection);

        const adminsData = adminsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setAdmins(adminsData);
      } catch (error) {
        console.error("Error fetching admins: ", error);
      }
    };

    fetchAdmins();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "admin", id));
      setAdmins(admins.filter((admin) => admin.id !== id));
    } catch (error) {
      console.error("Error deleting admin: ", error);
    }
  };

  const handleEdit = (admin) => {
    setEditingAdmin(admin.id);
    setEditedAdmin({ username: admin.username, password: admin.password, isAdmin: admin.isAdmin });
  };

  const handleSave = async (id) => {
    try {
      const adminDocRef = doc(db, "admin", id);
      await updateDoc(adminDocRef, { username: editedAdmin.username, password: editedAdmin.password, isAdmin: editedAdmin.isAdmin });
      setAdmins(admins.map((admin) => (admin.id === id ? { ...admin, ...editedAdmin } : admin)));
      setEditingAdmin(null);
      setEditedAdmin({ username: "", password: "", isAdmin: false });
    } catch (error) {
      console.error("Error updating admin: ", error);
    }
  };

  const handleAddAdmin = async () => {
    try {
      const adminsCollection = collection(db, "admin");
      const newAdminRef = await addDoc(adminsCollection, newAdmin);
      setAdmins([...admins, { id: newAdminRef.id, ...newAdmin }]);
      setNewAdmin({ username: "", password: "", isAdmin: false });
    } catch (error) {
      console.error("Error adding admin: ", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mb-10">
      <div className="bg-gray-200 p-8 w-[90%] rounded-xl">
        <h2 className="text-2xl font-bold mb-4 text-center">Admin List</h2>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Username"
            value={newAdmin.username}
            onChange={(e) => setNewAdmin({ ...newAdmin, username: e.target.value })}
            className="mb-2 p-2 border rounded-md mx-8"
          />
          <input
            type="password"
            placeholder="Password"
            value={newAdmin.password}
            onChange={(e) => setNewAdmin({ ...newAdmin, password: e.target.value })}
            className="mb-2 p-2 border rounded-md mr-8"
          />
          <label className="inline-flex items-center mb-2">
            <input
              type="checkbox"
              checked={newAdmin.isAdmin}
              onChange={(e) => setNewAdmin({ ...newAdmin, isAdmin: e.target.checked })}
              className="mr-2"
            />
            Is Admin
          </label>
          <button
            onClick={handleAddAdmin}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 ml-2"
          >
            Add Admin
          </button>
        </div>
        <ul className="list-decimal pl-4">
          {admins.map((admin) => (
            <li
              key={admin.id}
              className="mb-4 p-4 border rounded-md shadow-md bg-slate-50"
            >
              {editingAdmin === admin.id ? (
                <div>
                  <input
                    type="text"
                    value={editedAdmin.username}
                    onChange={(e) => setEditedAdmin({ ...editedAdmin, username: e.target.value })}
                    className="mb-2 p-2 border rounded-md"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={editedAdmin.password}
                    onChange={(e) => setEditedAdmin({ ...editedAdmin, password: e.target.value })}
                    className="mb-2 p-2 border rounded-md"
                  />
                  <label className="inline-flex items-center mb-2">
                    <input
                      type="checkbox"
                      checked={editedAdmin.isAdmin}
                      onChange={(e) => setEditedAdmin({ ...editedAdmin, isAdmin: e.target.checked })}
                      className="mr-2"
                    />
                    Is Admin
                  </label>
                  <button
                    onClick={() => handleSave(admin.id)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 mr-2"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingAdmin(null)}
                    className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div>
                  <p>
                    <strong>Email:</strong> {admin.username}
                  </p>
                  <p>
                    <strong>Is Admin:</strong> {admin.isAdmin ? "Yes" : "No"}
                  </p>
                  <button
                    onClick={() => handleEdit(admin)}
                    className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(admin.id)}
                    className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShowAllAdmin;
