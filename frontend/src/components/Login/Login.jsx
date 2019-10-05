import React from 'react';
import {Button, Form, Icon, Input, Modal} from 'antd';
import UsersContainer from "../Users/UsersContainer";
import s from './Login.module.css';

const Login = ({form, logIn, message, isModal, onCloseModal, isAuth}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        form.validateFields((err, values) => {
            if (!err) {
                logIn(values);
            }
        })
    };

    const {getFieldDecorator} = form;

    return (
        <>
            <div className={s.form_auth}>
                <h2>Authorization</h2>
                <Form onSubmit={handleSubmit} className={s.form_login}>
                    <Form.Item>
                        {
                            getFieldDecorator('login', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'This field is required!'
                                    }
                                ]
                            })(<Input prefix={<Icon type={'login'} style={{color: 'rgba(0,0,0,.25)'}}/>}
                                      placeholder={'Login'}/>)
                        }
                    </Form.Item>
                    <Form.Item>
                        {
                            getFieldDecorator('password', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'This field is required'
                                    }
                                ]
                            })(<Input.Password prefix={<Icon type={'lock'} style={{color: 'rgba(0,0,0,.25)'}}/>}
                                               placeholder={'Password'}/>)
                        }
                    </Form.Item>
                    <Form.Item>
                        <Button className={s.form_login__btn} type={'primary'} htmlType={'submit'}>Sing In</Button>
                    </Form.Item>
                </Form>
            </div>
            <Modal title={'Authorization message'} visible={isModal} footer={
                <Button onClick={onCloseModal}>Ok</Button>
            }>
                {message}
                {isAuth && <UsersContainer/>}
            </Modal>
        </>
    )
};

export default Form.create({name: 'login'})(Login);