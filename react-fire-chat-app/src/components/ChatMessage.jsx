import './ChatMesage.css'

export const ChatMessage = () => {
    const messageClass = "sent";

    return(
        <>
            <div className={`message ${messageClass}`}>
                <div className='bubble'>
                    <img 
                        className='avatar' 
                        src="https://api.dicebear.com/6.x/botts/png" alt="Avatar" />
                    <div>
                        <strong>Carlos Filho</strong>
                        <p>Esta é nossa messagem de placeholder</p>
                        <small>08/05/2023</small>
                    </div>
                </div>
            </div>
        </>
    )
}