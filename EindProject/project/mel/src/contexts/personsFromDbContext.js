import {createContext, useCallback, useContext, useMemo} from "react";
import {addDoc, collection, deleteDoc, orderBy, query, updateDoc} from "firebase/firestore";
import {firestoreDB} from "../services/firestore";
import {firestoreConverter} from "../services/firestoreConverter";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {useMessageContext} from "./messageContext";

const PersonsFromDbContext = createContext();

export function PersonsFromDbProvider(props) {
    const { addMessage, setMessages } = useMessageContext();
    const collectionRef = collection(firestoreDB, "persons").withConverter(firestoreConverter);
    const queryRef = query(collectionRef, orderBy("name"));
    const [persons] = useCollectionData(queryRef);

    const deleteDummies = useCallback(async () => {
        try {
            const allPromises = persons.filter(p => p.name==="Dummy").map(p => deleteDoc(p.ref));
            await Promise.all(allPromises);
            addMessage("alle Dummy personen verwijderd");
        } catch (e) {
            addMessage("de Dummy personen konden niet verwijderd worden")
        }
    }, [ persons, addMessage ]);

    const addDummyPerson = useCallback(async () => {
        try {
            const newPerson = { name: "Dummy", age: -12, city: "Antwerpen",
                _validation: { age: (e) => {
                        const n = Number(e)
                        if (n<0) return 0;
                        if (n>100) return 100;
                        return n;
                    } }};
            const docRef = await addDoc(collectionRef, newPerson);
            addMessage("Document written with ID " + docRef.id);
        } catch (e) {
            addMessage("Document is not written : " + e);
        }
    }, [collectionRef, addMessage]);

    const incrementAllAges = useCallback(async () => {
        try {
            const allPromises = persons.map(p => updateDoc(p.ref, { age: p.age+1}));
            await Promise.all(allPromises);
            addMessage("alle leeftijden werden met 1 verhoogd");
        } catch (e) {
            addMessage("de leeftijden konden niet met 1 verhoogd worden")
        }
    }, [persons, addMessage]);

    const decrementAllAges = useCallback(async () => {
        try {
            const allPromises = persons.forEach(p => {
                if (p.age) updateDoc(p.ref, { age: p.age - 1 })
            });
            await Promise.all(allPromises);
            addMessage("alle leeftijden werden met 1 verlaagd");
        } catch (e) {
            addMessage("de leeftijden konden niet met 1 verlaagd worden")
        }
    }, [persons, addMessage]);

    const deletePerson = useCallback(async (person) => {
        try {
            const name = person.name;
            await deleteDoc(person.ref);
            addMessage("Persoon met naam " + name + " werd verwijderd")
        } catch (e) {
            addMessage("Persoon verwijderen niet gelukt")
        }
    }, [addMessage]);

    const savePerson = useCallback(async (person) => {
        try {
            console.log("De te bewaren persoon: " + person.name);
            if (isPersonValid(person)) {
                await updateDoc(person.ref, { name: person.name, age: person.age, city: person.city });
                return true;
            }
            return false;
        } catch (e) {
            return false;
        }
    }, []);

    const isPersonValid = useCallback((person) => {
        let isValid = true;
        let messages = [];
        console.log(person);
        if (person.name==="") {
            console.log("hier: name");
            isValid = false;
            messages.push("de naam mag niet leeg zijn");
        }
        if (person.city==="") {
            console.log("hier: city");
            isValid = false;
            messages.push("de stad mag niet leeg zijn");
        }
        if (typeof person.age !== "number") {
            console.log("hier: age")
            isValid = false;
            messages.push("de leeftijd moet een getal zijn");
        }
        if (!isValid) setMessages(["Niet bewaard", ...messages]);
        return isValid;
    }, [addMessage]);

    const api = useMemo(() => ({
        persons, deleteDummies, addDummyPerson,
        incrementAllAges, decrementAllAges,
        deletePerson, savePerson, isPersonValid
    }), [ persons, deleteDummies, addDummyPerson,
        incrementAllAges, decrementAllAges,
        deletePerson, savePerson, isPersonValid  ]);

    return <PersonsFromDbContext.Provider value={api}>
        {props.children}
    </PersonsFromDbContext.Provider>
}

export const usePersonsFromDbContext = () => useContext(PersonsFromDbContext);