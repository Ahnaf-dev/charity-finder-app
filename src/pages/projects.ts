import charity from "../assets/images/charity.jpg";
import utils from "../utilities/utils";

const charityProjects = {
  generateHTML: () => {
    let charityID = utils.parseURLFromHash(location.hash, true);

    const html = `
    <h1>Charity number ${charityID}</h1>
    `;

    return html;
  },
  afterRender: () => {},
};

export default charityProjects;
