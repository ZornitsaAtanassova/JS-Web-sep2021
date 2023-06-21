import PricingPlanCard from "./PricingPlanCard";
import StandartPricingPlanCard from "./StandartPricingPlanCard";

function PricingPlans() {
    return(
        <div className="page-section">
        <div className="container">
          <div className="text-center wow fadeInUp">
            <div className="subhead">Pricing Plan</div>
            <h2 className="title-section">Choose plan the right for you</h2>
            <div className="divider mx-auto"></div>
          </div>
          <div className="row mt-5">
            <PricingPlanCard
                title="Basic"
                price="39.99"
                term="Per Month"
                // feature={[
                //     '25 Analytics Campaign',
                //     '1,300 Change Keywords',
                //     'Social Media Reviews',
                //     '1 Free Optimization',
                //     '24/7 Support'
                // ]}
            />
    
            <StandartPricingPlanCard />

            <PricingPlanCard
                title="Professional"
                price="99.99"
                term="Per Month"
                // feature={[
                //     '25 Analytics Campaign',
                //     '1,300 Change Keywords',
                //     'Social Media Reviews',
                //     '1 Free Optimization',
                //     '24/7 Support'
                // ]}
            />
          </div>
        </div>
      </div>
    );
}

export default PricingPlans;
