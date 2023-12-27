import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "./Firebase/app.config";

const Test = () => {
  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const userCollectionRef = collection(db, "users");

  const createUser = async (e) => {
    e.preventDefault();
    const user = {
      name: newName,
      age: Number(newAge),
    };

    await addDoc(collection(db, "users"), user);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, [userCollectionRef]);

  const handleAge = async (id, age) => {
    const userPrev = doc(db, "users", id);
    const newField = { age: age + 1 };
    await updateDoc(userPrev, newField);
  };

  const handleDelete = async (id) => {
    const userPrev = doc(db, "users", id);
    await deleteDoc(userPrev);
  };

  return (
    <div className="App">
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <h2>{user.age}</h2>
            <button onClick={() => handleAge(user.id, user.age)}>
              Increase age
            </button>
            <button onClick={() => handleDelete(user.id)}>IDelete</button>
          </div>
        );
      })}

      <form onSubmit={createUser}>
        <div>
          <label>Name : </label>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => {
              setNewName(e.target.value);
            }}
          />
          <label>Age : </label>
          <input
            type="number"
            placeholder="Age"
            onChange={(e) => {
              setNewAge(e.target.value);
            }}
          />
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default Test;

