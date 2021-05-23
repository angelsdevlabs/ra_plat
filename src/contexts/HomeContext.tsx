import { createContext } from 'react';
import homeBoxInfos from '../../home_box_infos.json';
import { HomeBox } from '../components/HomeBox';

export interface HomeBoxInfo {
    title: string;
    description: string;
    img: string;
    btnText: string;
    btnColor: string;
}


export const HomeContext = createContext({});

export function HomeProvider({ }) {


    function renderHomeBoxes() {
        const homeBoxesInfos: Array<HomeBoxInfo> = homeBoxInfos;
        return (
            < section >
                {homeBoxesInfos.map((item, index) => (
                    <HomeBox
                        key={index}
                        title={item.title}
                        description={item.description}
                        img={item.img}
                        btnText={item.btnText}
                        btnColor={item.btnColor}
                    />
                ))}
            </ section>
        );
    }

    return renderHomeBoxes();

}