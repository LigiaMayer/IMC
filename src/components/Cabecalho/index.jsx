import { useState } from 'react';
import styles from './Cabecalho.module.css';

const Cabecalho = () => {
    let [infoVisible, setInfoVisible] = useState(false);

    return (
        <>
            <header className={styles.header}>
                <h1 className={styles.header__title}>
                    Calculadora de <span onClick={() => setInfoVisible(!infoVisible)} className={styles.enhance} title="O que é o IMC?">IMC</span>
                    </h1>

                {infoVisible && (
                    <div className={styles.header__description}>
                        <p>
                            💡
                        </p>
                        <p>
                        O Índice de Massa Corporal (IMC) é uma medida que relaciona peso e altura, utilizada para avaliar a adequação do peso corporal em relação à saúde.
                        </p>
                    </div>
                )}
            </header>
        </>
    )
}

export default Cabecalho;