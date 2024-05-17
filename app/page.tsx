import ConnectButton from "@/components/ConnectButton";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <h1>
                SPIN
            </h1>

            <ConnectButton />
        </main>
    );
}
