
import { ReactNode } from 'react';
import styles from '../styles/components/HomeBox.module.css';

interface HomeBoxProviderProps {
    title: string;
    description: string;
    img: string;
    btnText: string;
    btnColor: string;
}

export function HomeBox({ ...props }: HomeBoxProviderProps) {

    return (
        <div className={styles.homeBoxContainer}>
            <img src={`icons/${props.img}`} />
            <strong>{props.title}</strong>
            <p>{props.description}</p>
            <button type='button' style={{ backgroundColor: `${props.btnColor}` }}>{props.btnText}</button>
        </div>
    );

}