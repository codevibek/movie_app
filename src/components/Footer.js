import React,{useState} from 'react'
import '../style/Footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import emailjs from 'emailjs-com'




export const Footer = () => {
    const [message,setMessage]=useState('')
    const [email,setEmail] =useState('')
    const [subject, setSubject] = useState('')

    function sendEmail(e) {
        e.preventDefault();
        emailjs.init("user_jMQ6BMrWWCP1zIKhDe4ND");   
        emailjs.sendForm('service_zjxkw1g', 'template_zz2h5mj', e.target, 'user_jMQ6BMrWWCP1zIKhDe4ND')
        .then((result)=>{
            console.log(result.text)
        })
          setEmail('')
          setMessage('')
          setSubject('')
          
        }
    return (
        <div className="footer">
            <div className="footer__aboutMe">
                <h2>About Me</h2>
                <p>I'm a BSC CSIT student studying
                    on final year.</p>
                    <p>I am a React based
                     web developer/designer .
                </p>
                <div className="footer__social">
                    <a href="https://www.facebook.com" className="footer__socialItem"><FaFacebook /></a>
                    <a href="https://www.instagram.com" className="footer__socialItem"><FaInstagram /></a>
                    <a href="https://www.github.com" className="footer__socialItem"><FaGithub /></a>
                    <a href="https://www.youtube.com" className="footer__socialItem"><FaYoutube /></a>
                </div>
                <p>copyright blah blah blah...</p>
            </div>
            <div className="footer__contactMe">
                <h2>Contact Me</h2>
                <form onSubmit={sendEmail}>
                <label>Subject</label>
                <input type="text" value={subject}   onChange={(e)=>setSubject(e.target.value)}/><br/>
                <label>Message</label>
                <textarea value={message} required rows="3"  onChange={(e)=>setMessage(e.target.value)}/><br/>
                <label>Email</label>
                <input type="text" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </form>
                <div className="footer__copyright">
                <p>You can hire me through form above. </p>
                
            </div>
            </div>
            

        </div>
    )
}