import React,{useState} from 'react';
import Login from "./Login";
import api from "../../api/api";

const LoginContainer = ({auth,...rest}) => {

    const [message,setMessage] = useState('');
    const [isModal,setIsModal] = useState(false);

    const failed = () => {
        setMessage('Failed!');
        auth(false);
        setIsModal(true);
    };

    const success = (res) => {
        localStorage.setItem('token',res.data.token);
        setMessage('Success!');
        auth(true);
        setIsModal(true);
    };

    const logIn = async (value) => {
        try {
            let res = await api.auth(value);
            if(res.status === 200){
                success(res);
            } else{
                failed();
            }
        }
        catch (e) {
            if(e.response.status === 401){
                failed();
            }
        }
    };

    const onCloseModal = () => {
        setIsModal(false);
    };

    return <Login logIn={logIn} message={message} isModal={isModal} onCloseModal={onCloseModal} {...rest}/>
};

export default LoginContainer;