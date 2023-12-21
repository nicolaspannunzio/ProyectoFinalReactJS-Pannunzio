import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams, useNavigate } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig"

export const ItemDetailContainer = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemRef = doc(db, "products", id);
        const docSnap = await getDoc(itemRef);

        if (docSnap.exists()) {
          setItem({ id: docSnap.id, ...docSnap.data() });
        } else {
          ((result) => {
            if (result.isConfirmed) {
              navigate("/");
            }
          });
        }
      } catch (error) {
        console.error('Error');
      }
    };

    fetchData();
  }, [id, navigate]);

  return (
    <> <div>{item && <ItemDetail {...item} />}</div> </>
  )
};