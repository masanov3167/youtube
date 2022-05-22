import React, { useRef } from "react";
import { Context } from "./Context";
 
const Login = () =>{

    const {setToken} = React.useContext(Context);

    const name = useRef();
    const pass = useRef();
    const pic = useRef();

    const addToken = (e) => {
		e.preventDefault();
		setToken({
			name: name.current.value.trim(),
            pass: pass.current.value.trim(),
            pic: window.URL.createObjectURL(pic.current.files[0]),
		});

        name.current.value = null;
        pass.current.value = null;
        pic.current.value = null;
	};

    return (
        <>
            <section className="login">
                <div className="login-wrapper">
                    <form className="form" onSubmit={addToken} autoComplete="off" >
                        <label className="form-text" >Log in to Youtube</label>
                        <input ref={name} name='name' type="text"  placeholder="type the name" minLength="5" required/>
                        <input ref={pass} name='password' type="password" placeholder="type the password" minLength="8" required />
                        <input ref={pic} name='image' id='user-pic' className='form-pic' type="file" accept="image/*" required />
                        <label className="form-pic-label" htmlFor="user-pic">Choose a photo</label>
                        <button className="form-btn" type="submit">Log In</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Login;