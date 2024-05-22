import ConnectButton from '../ConnectButton'
import { font } from '@/app/fonts'
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <div className={styles.navBar}>

            <div>

                <h1 className={font.className}>
                    liquidity wars
                </h1>

                <h2 className={font.className}>
                    by bbb
                </h2>

            </div>

            <ConnectButton />

        </div>
    )
}
