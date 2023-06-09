import BasicPricingPlanCard from "./BasicPricingPlanCard";
import StandartPricingPlanCard from "./StandartPricingPlanCard";
import ProfessionalPricingPlanCard from "./ProfessionalPricingPlanCard";

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
            <BasicPricingPlanCard />
    
            <StandartPricingPlanCard />
    
            <ProfessionalPricingPlanCard />
          </div>
        </div>
      </div>
    );
}

export default PricingPlans;