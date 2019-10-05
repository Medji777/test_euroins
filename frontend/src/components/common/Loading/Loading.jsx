import React from 'react';
import img from '../../../assets/imgs/loading.svg';
import s from './Loading.module.css'

const Loading = () => {
    return (
        <div className={s.loading}>
            <img src={img} alt={''}/>
        </div>
    )
};

export default Loading;