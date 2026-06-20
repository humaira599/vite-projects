import PricingFeature from './PricingFeature'
const PricingCard = ({pricing}) => {
    const {name,price, description, features} = pricing;
    return (
        <div className="border bg-cyan-600 rounded-2xl">
            {/* card header */}
            <div>
                <h1 className="text-7xl">{name}</h1>
                <h4 className="text-3xl">{price}</h4>
            </div>
            {/* card body */}
            <div className="bg-blue-300 p-4 rounded-2xl mt-10">
                <p>{description}</p>
                {
                    features.map(feature => < PricingFeature feature={feature}></PricingFeature>)
                }
            </div>
        </div>
    );
};

export default PricingCard;