import React from 'react';
import { Link } from 'react-router-dom';
import '../../CSS/Home/PricingTable.css'

const PricingTable = () => {
  const plans = [
    {
      name: 'Disobedient',
      price: '$29.99/mo',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
    },
    {
      name: 'SeductiveBox',
      price: '$49.99/mo',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    },
    {
      name: 'Rebellious',
      price: '$79.99/mo',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    },
  ];

  return (
    <>
        <div className="pricing__header">
            <h2>Pricing</h2>
        </div>

        <div className="pricing-table">
        {plans.map((plan) => (
            <div key={plan.name} className="plan">
            <h3>{plan.name}</h3>
            <p className="price">{plan.price}</p>
            <ul>
                {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
                ))}
            </ul>
            <Link to='/style-quiz'>
                <button>Take The Style Quiz</button>
            </Link>
            </div>
        ))}
        </div>
    </>
  );
};

export default PricingTable;
