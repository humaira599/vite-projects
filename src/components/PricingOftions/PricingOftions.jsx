import { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

// এখানে { pricingPromise } লিখুন
const PricingOftions = ({ pricingPromise }) => {

    const PricingData = use(pricingPromise);

    return (
        <div>
            <h2 className="text-5xl ">Get our Membership</h2>
            <div className='grid md:grid-cols-3 gap-8 mt-6'>
                {
                    PricingData.map(pricing => <PricingCard 
                        key={pricing.id}
                        pricing={pricing}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOftions;