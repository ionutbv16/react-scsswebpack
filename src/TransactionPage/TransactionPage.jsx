import React, { useState, useEffect } from 'react';

import style from './transaction.scss';
import axios from 'axios';
import {Transactions} from '../components/Transactions.jsx';
const border = '5px solid red';
 

export const TransactionPage = () => {
  
  const [data, setData] = useState({ });
  const [errorApi, setErrorApi] = useState();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          'http://dev-test.torca.io/transactions',
        );
        // change to 'http://dev-test.torca.io/transactionsTEST',  to see how error is captured
        setData(result.data.data);
      } catch (err) {
         
        setErrorApi('Error fetching data');
      }
    };
    fetchData();
  }, []);

  return (
    <div >
      <div className={style.header_background}> 
            <div className={style.TopHeader}> 
              <div className={style.TopRow}>
                <div className={style.logo}> 
                  Fakebank.
                </div>
                <div className={style.user_avatar}> 
                    <div className={style.oval}> 
                      <div className={style.oval_text}>
                            AD
                        </div>
                  </div>
                </div>
              </div>
              <div className={style.individual_account_row}>
                <div className={style.individual_account}> 
                  <div className={style.individual_account_text}> 
                    Individual account
                  </div>
                  <div className={style.individual_account_money}> 
                    £3,500.50
                  </div>                  
                </div>
              </div>
            </div>
      </div>

     <div className={style.transactions_wrapper}>
        <div className={style.transactions}>Transactions</div>
        <div className={style.filter}>
          <div className={style.selected_button_filter}>All</div>
          <div className={style.button_filter}>Outbound</div>
          <div className={style.button_filter}>Inbound</div>
        </div>
        <div>
              <div className={style.today}>TODAY</div>
              {data.length && <Transactions props={data} />}
              {errorApi && <div className={style.error} >{errorApi}</div> }
          </div>
     </div>
    </div>
  );
};
