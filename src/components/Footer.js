import React,{useState} from 'react'
import '../style/Footer.css'

export const Footer = () => {
    const [message,setMessage]=useState('')
    const [email,setEmail] =useState('')
    return (
        <div className="footer">
            <div className="footer__aboutMe">
                <strong>About Me</strong>
                <p>I'm a BSC CSIT student studying
                    on final year.I am a React based
                     web developer/designer .
                </p>
            </div>
            <div className="footer__contactMe">
                <form>
                <label>Email</label>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <label>Message</label>
                <textarea value={message} onChange={(e)=>setMessage(e.target.value)}/>
                </form>
            </div>
        </div>
    )
}
