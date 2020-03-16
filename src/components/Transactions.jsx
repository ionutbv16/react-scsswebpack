
import React from 'react';
import style from '../TransactionPage/transaction.scss';
import Moment from 'react-moment';

export const Transactions = ({props}) => {
   
    const data = props ;

    const displayAmount = (amount, type) => {
        const classType =  type === 'debit' ? style.debit : style.credit;
        return <div className={classType}>£{commaFormatted(amount)}</div>
    }

   const commaFormatted = (amount) => {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const getInitials = (name) => {
        return name.split(" ").map((n)=>n[0]).join("");
    }

    const getColor = () => {
        const colors = ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 
        'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 
        'silver', 'teal' ];;
        return colors[Math.floor(Math.random() * colors.length)];
    }

    return (
        <div>
            { data && (data.length > 0) && data.map(item => (
                <div>
                    <div className={style.transaction_item}>
                        <div className={style.transaction_circle_wrapper} >
                            <div className={style.transaction_circle} style={{backgroundColor: getColor()}}>
                                <div className={style.transactions_text}>
                                    {getInitials(item['destination-name'])}
                                </div>
                            </div>
                            <div className={style.transaction_data}>
                                <div className={style.transaction_name}>
                                    <div className={style.transaction_name_text}>
                                        {item['destination-name']}
                                    </div>
                                    <div className={style.transaction_name_date}>
                                    <Moment format="DD MMM, hh:mm A">
                                        {item['ISO-8601-date']}
                                    </Moment>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className={style.transaction_amount}>
                            {displayAmount(item['amount'], item['type'])}
                        </div>
                    </div>
                    <div className={style.transaction_item_line}></div>
                </div>  
                ))}
        
        </div>
    );
};