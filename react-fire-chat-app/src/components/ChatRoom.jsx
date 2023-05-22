import "./ChatRoom.css"

import { collection, limit, orderBy, query, serverTimestamp, addDoc } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { ChatMessage } from "./ChatMessage";
import { useState } from "react";

export const ChatRoom = ( {firestore, auth} ) => {

    const messagesRef = collection(firestore, "messages");
    const dbQuery = query(messagesRef, orderBy("createdAt"), limit(25));
    const collectionDataOption = { idField: "id" };
    const [messages] = useCollectionData(dbQuery, collectionDataOption);

    const [formValue, setFormValue] = useState("");

    const sendMessage =  async (e) => {
        e.preventDefault();

        const { uid, photoURL, displayName } = auth.currentUser;

        const docRef = await addDoc(messagesRef,
            {
                text: formValue,
                createdAt: serverTimestamp,
                uid,
                photoURL,
                displayName
            });

        setFormValue("");
    }

    return (
        <>
            <div className="chat-room">
                <main>
                    {
                        messages && messages.map(
                            (msg, index) => (
                                <ChatMessage key={ index } messages={msg} auth={auth} />
                            )
                        )
                    }
                 {/* <span ref={forceBottomScrollElement}></span> */}
          </main>
                <div className="form">
                    <form onSubmit={ sendMessage }>
                        <input
                            value={ formValue }
                            onChange={ (e) => setFormValue(e.target.value) }
                            type="text"
                            placeholder="Vamos conversar" />
                        <button type="submit" disabled={!formValue} >
                            <img src="./sent.png" alt="Botão de enviar" />
                        </button>
                    </form>
                </div>
            </div>
        </>
    )

}