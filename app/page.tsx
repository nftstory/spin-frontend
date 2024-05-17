import ConnectButton from "@/components/ConnectButton";
import styles from "./page.module.css";
import Spin from "@/components/spin/Spin";

export default function Home() {
    return (
        <main className={styles.main}>
            
            <ConnectButton />

            <br />

            <h1>
                SPIN
            </h1>

            <Spin />

        </main>
    );
}
