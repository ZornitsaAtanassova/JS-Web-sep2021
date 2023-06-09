function PricingPlanCard({
    title = '',
    price,
    term
}) {
    return (
        <div className="col-lg-4 py-3 wow zoomIn">
            <div className="card-pricing">
                <div className="header">
                  <div className="pricing-type">{title}</div>
                  <div className="price">
                    <span className="dollar">$</span>
                    <h1>{Math.floor(price)}<span className="suffix">{price.slice(-3)}</span></h1>
                  </div>
                  <h5>{term}</h5>
                </div>
                <div className="body">
                  <p>25 Analytics <span className="suffix">Campaign</span></p>
                  <p>1,300 Change <span className="suffix">Keywords</span></p>
                  <p>Social Media <span className="suffix">Reviews</span></p>
                  <p>1 Free <span className="suffix">Optimization</span></p>
                  <p>24/7 <span className="suffix">Support</span></p>
                </div>
                <div className="footer">
                  <a href="#" className="btn btn-pricing btn-block">Subscribe</a>
                </div>
            </div>
        </div>
    );
}

export default PricingPlanCard;
