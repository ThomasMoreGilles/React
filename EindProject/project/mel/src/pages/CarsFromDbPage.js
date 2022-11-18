import {collection} from 'firebase/firestore';
import {firestoreDB} from "../services/firestore";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {Cars} from "../components/Cars";
import {firestoreConverter} from "../services/firestoreConverter";

export function CarsFromDbPage() {
    const collectionRef = collection(firestoreDB, "cars").withConverter(firestoreConverter);
    const [values, loading, error] = useCollectionData(collectionRef);
    console.log({values, loading, error});

    return <div className="mx-3" >
        <Cars cars={values} title="Cars From DB" initOpen={true} />
    </div>
}