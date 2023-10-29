import Link from 'next/link';
import styles from '@/styles/dashboard.module.css';

const StockGrid = ({stocks}) => {

    return (
        <div className={styles.stockGrid}>
            {stocks.map(stock => 
                <Link key={stock.id} href={`/stocks/${stock.ticker}`}>
                    <div className={styles.stockCard}>
                        <img src={stock.logo} alt={stock.ticker} /> 
                        <div>
                            <h3>{stock.ticker}</h3>
                            <p>{`$${stock.price}`}</p>
                            <p>{`${stock.change_percentage}`}</p>
                        </div>
                    </div>
                </Link>
            )}
            {stocks.length > 4 && (
                <button className={styles.loadMoreButton}>
                    Load More
                </button>
            )}
        </div>
    );
};

export default StockGrid;
