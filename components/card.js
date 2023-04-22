import styles from './card.module.css'
import Image from 'next/image'
// import CreditCard from '../public/images/credit-card.svg'

const Card = () => {
  return (
    <div className="grid">
      <form className={styles.form}>
        <p className={styles.categoryLabel}>Spend Limit</p>
        <div className={styles.amount}>$100</div>
        <div className={styles.amountBarContainer}>
          <div className={styles.amountBar}></div>
          <div className={styles.amountIndicator}></div>
        </div>
        <div className={styles.frequencyButtonsCont}>
          <button className={styles.frequencyButton}>
            <span>
              Single-Use
            </span>
              Closes shortly after first use
          </button>
          <button className={styles.frequencyButton}>Per Month</button>
          <button className={styles.frequencyButton}>Per Year</button>
          <button className={styles.frequencyButton}>Per Transaction</button>
          <button className={styles.frequencyButton}>Total</button>
        </div>
        <p className={styles.categoryLabel}>Delivery Method</p>
        <div className={styles.deliveryCont}>
          <input 
            type='checkbox'
          />
          <div className={styles.inputCont}>
            <label className={styles.label}>Email</label>
            <input 
              className={styles.input}
              placeholder='Email Address'
              type='email'
            />  
          </div>
        </div>
      </form>
      <div>
        <Image 
          // src={CreditCard} 
          width={250} 
          height={125} 
          alt="image of credit card"
        />
        <div className={styles.buttonsContainer} >
          <button  className={styles.cancelButton+" "+styles.buttons} >
            Cancel
          </button>
          <button className={styles.nextButton+" "+styles.buttons} >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card