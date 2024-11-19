import { useNavigate } from 'react-router-dom'; 
import styles from './OrderButton.module.css';

export default function OrderButton({ selectedOption }) {
  const navigate = useNavigate(); 

  const handleNavigation = (option) => {
    if (option === 'pickup') {
      navigate('/orderpickup');
    } else {
      navigate('/orderdelivery'); 
    }
  };

  return (
    <div className={styles.switcher}>
      <button
        className={selectedOption === 'pickup' ? styles.active : ''}
        onClick={() => handleNavigation('pickup')}
      >
        Pick-up
      </button>
      <button
        className={selectedOption === 'delivery' ? styles.active : ''}
        onClick={() => handleNavigation('delivery')}
      >
        Delivery
      </button>
    </div>
  );
}
