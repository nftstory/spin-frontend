'use client'
import WheelOfFortune from '@/components/spin/WheelOfFortune';
import styles from './Spin.module.css'
import { useState } from 'react';

export default function Spin() {

    const segments = [
        { label: 'a bbb', value: 1, color: '#FFB629' },
        { label: 'cool stuff', value: 1, color: '#FFDFA0' },
        { label: '10 degen', value: 1, color: '#FFB629' },
        { label: '100 degen', value: 1, color: '#FFDFA0' },
        { label: '2 bbb\'s', value: 1, color: '#FFB629' },
        { label: 'bbb nft', value: 1, color: '#FFDFA0' },
    ];

    const [winner, setWinner] = useState<string>()

    const handleSpinEnd = (winner: string) => {
        console.log(`Winner is: ${winner}`);
        setWinner(winner)
    };

    return (
        <div className={styles.spin}>
            {winner && <h1>You win: {winner}!!!</h1>}
            <br />
            <br />
            <WheelOfFortune segments={segments} onSpinEnd={handleSpinEnd} />
        </div>
    )
}
