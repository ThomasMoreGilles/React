import React, {createContext, useCallback, useContext, useMemo} from 'react';
import {addDoc, collection, deleteDoc, orderBy, query, updateDoc} from "firebase/firestore";
import {firestoreDB} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {useMessageContext} from "./messageContext";

export const DbProvider = firestoreDB;