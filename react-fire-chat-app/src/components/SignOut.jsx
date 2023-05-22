import "./SignOut.css"

export const SignOut = ( { auth } ) =>  {
    return(
        auth.currentUser && (
            <div className="sign-out">
                <img
                    className="avatar"
                    src={ auth?.currentUser?.phoyoURL || "https://api.dicebear.com/6.x/bottts/png" } 
                    alt="avatar" />
                <button onClick={ () => auth.signOut() }>
                    <img src="./logout.png" alt="Logout" />
                </button>
            </div>
        )
    )
}