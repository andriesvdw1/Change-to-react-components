import React from "react";
import BusinessNews from "../BusinessNews/BusinessNews";
import './BusinessNewsContainer.css';
function BusinessNewsContainer() {
  return (
    <div>
      <h1>Business</h1>
      <div className="business-news-container">
        <BusinessNews
          heading="Global Markets See Uptrend"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum lacus nec ipsum convallis, nec lacinia metus porta. Sed hendrerit purus sed porta lacinia. Nullam sed libero nec magna mattis congue. Integer vitae facilisis justo. Morbi et turpis non mi fermentum cursus. Sed sed tincidunt mauris. Suspendisse potenti. In scelerisque, ante eu viverra mattis, justo arcu imperdiet nulla, a vestibulum sem eros non augue."
        />
        <BusinessNews
          heading="Local Startup Raises $10M"
          content="A tech startup based in Cape Town has secured $10 million in Series A funding. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in sapien vehicula, faucibus leo sed, lacinia lectus. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In ut ante nunc. Cras finibus magna at augue dictum, ut sodales tortor cursus. Nulla facilisi. Integer quis sapien non tortor pulvinar dictum. Fusce suscipit sem et urna iaculis, nec dapibus justo fermentum."
        />
        <BusinessNews
          heading="Local Startup Raises $10M"
          content="A tech startup based in Cape Town has secured $10 million in Series A funding. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in sapien vehicula, faucibus leo sed, lacinia lectus. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In ut ante nunc. Cras finibus magna at augue dictum, ut sodales tortor cursus. Nulla facilisi. Integer quis sapien non tortor pulvinar dictum. Fusce suscipit sem et urna iaculis, nec dapibus justo fermentum."
        />
      </div>
    </div>
  );
}

export default BusinessNewsContainer;
