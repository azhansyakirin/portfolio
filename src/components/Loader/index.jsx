import React from 'react';
import css from './Loader.module.scss';

export const Loader = () => {
    return <div className='h-[100vh] flex items-center justify-center'>
        <div className={css["three-body"]}>
            <div className={css["three-body__dot"]}></div>
            <div className={css["three-body__dot"]}></div>
            <div className={css["three-body__dot"]}></div>
        </div>
    </div>
}