import { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    const [isOpen, setIsOPen] = useState(false);
    const setCurrencyHandler = (currency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency,
        })
    }

    //  '£' '€' '$' '₹'

    const currencyLabel = () => {
        switch (currency) {
            case '$' :
                return '$ Dollar'
            case '£' :
                return '£ Pound'
            case '€' :
                return '€ Euro'
            case '₹' :
                return '₹ Ruppee'
            default:
            return 'default'
        }
    }

    return (
        <div id="currency-menu" className="dropdown" style={{ cursor: 'pointer' }}>
            <button
                id="currency-menu-button"
                className="btn dropdown-toggle btn-outline-secondary"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{width: '100%'}}
                onClick={() => setIsOPen(!isOpen)}
            >
                Currency {'('}{currencyLabel()}{')'}
            </button>
            <ul className={`custom-menu dropdown-menu ${isOpen ? 'show' : ''} `} style={{width: '100%'}}>
                <li>
                <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => setCurrencyHandler('$')}
                >
                $ Dollar
                </button>
                </li>
                <li>
                <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => setCurrencyHandler('£')}
                >
                £ Pound
                </button>
                </li>
                <li>
                <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => setCurrencyHandler('€')}
                >
                € Euro
                </button>
                </li>
                <li>
                <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => setCurrencyHandler('₹')}
                >
                ₹ Ruppee
                </button>
                </li>
            </ul>
        </div>
    );
}
 
export default Currency;