import styles from '@/styles/Home.module.css'

type CardProps = {
    tittle: string,
    price: string,
    description: string
}

export default function Card({tittle,price,description}: CardProps) {
    return (
        <div className={styles.card}>
            <header className={styles.cardname}>{tittle}</header>
            <div className={styles.cardcontent}>
                <img src="/batata.jpeg" alt="" />
                <p className={styles.price}>{price}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}