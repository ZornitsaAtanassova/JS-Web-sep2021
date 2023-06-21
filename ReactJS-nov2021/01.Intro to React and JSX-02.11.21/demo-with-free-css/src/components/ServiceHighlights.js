import ServiceHighlightCard from "./ServiceHighlightCard";
// import ResearchServiceHighlightCard from "./ResearchServiceHighlightCard";
// import MarketingServiceHighlightCard from "./MarketingServiceHighlightCard";

function ServiceHighlights() {
    return (
        <div className="page-section">
        <div className="container">
          <div className="row">
            <ServiceHighlightCard
                imageUrl="/img/services/service-1.svg"
                title="SEO Consultancy"
                description="We help you define your SEO objective & develop a realistic strategy with you"
            />

            <ServiceHighlightCard
                imageUrl="/img/services/service-2.svg"
                title="Content Marketing"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, asperiores"
            />

            <ServiceHighlightCard
                imageUrl="/img/services/service-1.svg"
                title="Keyword Research"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, asperiores"
            />

            {/* <SeoServiceHighlightCard />
            <MarketingServiceHighlightCard />
            <ResearchServiceHighlightCard /> */}

            {/* <div className="col-lg-4">
              <div className="card-service wow fadeInUp">
                <div className="header">
                  <img src="/img/services/service-1.svg" alt="" />
                </div>
                <div className="body">
                  <h5 className="text-secondary">SEO Consultancy</h5>
                  <p>We help you define your SEO objective & develop a realistic strategy with you</p>
                  <a href="service.html" className="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card-service wow fadeInUp">
                <div className="header">
                  <img src="/img/services/service-2.svg" alt="" />
                </div>
                <div className="body">
                  <h5 className="text-secondary">Content Marketing</h5>
                  <p>We help you define your SEO objective & develop a realistic strategy with you</p>
                  <a href="service.html" className="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card-service wow fadeInUp">
                <div className="header">
                  <img src="/img/services/service-3.svg" alt="" />
                </div>
                <div className="body">
                  <h5 className="text-secondary">Keyword Research</h5>
                  <p>We help you define your SEO objective & develop a realistic strategy with you</p>
                  <a href="service.html" className="btn btn-primary">Read More</a>
                </div>
              </div>
            </div> */}
          </div>
        </div> 
      </div>
    );
}

export default ServiceHighlights;
