import React, { useContext, useEffect, useMemo, useState } from "react";
import { ReactNode } from "react";
import { UserContex } from "./UserContext";
import { auth, db } from "../firebase";
import {
  Firestore,
  collection,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";

export const useCustomUser = () => useContext(UserContex);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>();
  const [isLoading, setLoading] = useState<boolean>(true);
  const getUserData = async () => {
    try {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          const docRef = doc(db, "users", user?.uid || "");

          console.log({ docRef });
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUser({ ...docSnap.data(), uid: user?.uid });
            setLoading(false);
          }
        }
      });
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  const getBudgetData = async () => {
    try {
      let index = 0;
      let temp: any[] = [];

      const collectionRef = collection(
        db,
        "/users/BE4VYqOT0dbyWbtSrZZXdsNH2CZ2/budgets"
      );
      const querySnapshot = await getDocs(collectionRef);
      console.log(
        querySnapshot.docs?.forEach((item) => {
          temp.push({
            budgetName: item?.id,
            data: item?.data(),
          });
        })
      );
      console.log({ temp });
      // setBudgetData(temp);
    } catch (e) {
      console.log("error>>>", e);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  useEffect(() => {
    user && getBudgetData();
  }, [user]);

  const value = useMemo(() => ({ user, isLoading }), [isLoading, user]);

  return <UserContex.Provider value={value}>{children}</UserContex.Provider>;
};

export default UserProvider;
