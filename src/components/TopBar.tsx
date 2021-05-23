
import styles from '../styles/components/TopBar.module.css'

export function TopBar() {

    return (
        <header className={styles.topBarContainer}>
            <div className={styles.topBarMenu}>
                <img src="icons/runners_angels_logo.png" alt="Runners Angels" />
                <strong>CORRIDAS</strong>
                <strong>LOJA</strong>
                <strong>ONGS</strong>
            </div>

            <div className={styles.topBarLeft}>
                <div className={styles.topBarAngelsCoins}>
                    <img src="icons/angel_coin.png" alt="Angels Coins" />
                    <strong>999.999</strong>
                </div>

                <div className={styles.topBarProfile}>
                    <img src="https://github.com/viniciuscagnotto.png" alt="Perfil" />
                </div>
            </div>
        </header>
    );

}