import OurServiceCard from "./OurServiceCard";

function OurServices() {
    return (
      <div className="page-section bg-light">
        <div className="container">
          <div className="text-center wow fadeInUp">
            <div className="subhead">Our services</div>
            <h2 className="title-section">How SEO Team Can Help</h2>
            <div className="divider mx-auto"></div>
          </div>

          <div className="row">
            <OurServiceCard
                title="OnSite SEO"
                description="We analyse your website's structure, internal architecture & other key"
            />
            <OurServiceCard
                title="OnSite SEO"
                description="We analyse your website's structure, internal architecture & other key"
            />
            <OurServiceCard
                title="OnSite SEO"
                description="We analyse your website's structure, internal architecture & other key"
            />
            <OurServiceCard
                title="OnSite SEO"
                description="We analyse your website's structure, internal architecture & other key"
            />
            <OurServiceCard
                title="OnSite SEO"
                description="We analyse your website's structure, internal architecture & other key"
            />
            <OurServiceCard
                title="OnSite SEO"
                description="We analyse your website's structure, internal architecture & other key"
            />
            <OurServiceCard
                title="OnSite SEO"
                description="We analyse your website's structure, internal architecture & other key"
            />
            <OurServiceCard
                title="OnSite SEO"
                description="We analyse your website's structure, internal architecture & other key"
            />
          </div>
        </div> 
      </div>
    );
}

export default OurServices;
