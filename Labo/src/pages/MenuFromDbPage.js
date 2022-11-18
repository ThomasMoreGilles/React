import {collection, orderBy, where, query} from 'firebase/firestore';
import {firestoreDB} from "../services/firestore";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {firestoreConverter} from "../services/firestoreConverter";
import {MenuCard} from "../components/MenuCard";

export function MenuFromDbPage() {
    const collectionRef = collection(firestoreDB, "products").withConverter(firestoreConverter);
    const queryRef = query(collectionRef, where("price", "==", 1), orderBy("sequence"));
    const [values, loading, error] = useCollectionData(queryRef);
    console.log({values, loading, error});

    return <div className="mx-3" >
        <MenuCard products={values} />
    </div>
}