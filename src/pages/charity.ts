import globalGivingAPI from "../api/apiConfig";
import charityCard from "../components/charityCard";
function getOrganizations() {
  return $.ajax({
    url: globalGivingAPI.organization(),
    method: "GET",
    dataType: "JSON",
  });
}

async function returnOganizations() {
  const res = await getOrganizations();
  return res.organizations.organization;
}

const charity = {
  generateHTML: async () => {
    let orgs = await returnOganizations();
    console.log(orgs);
    const html = `
    <h1>Charity Component</h1>
    ${orgs
      .map((org: any) => {
        return charityCard.generateHTML(org);
      })
      .join("")}
    `;

    return html;
  },
  afterRender: () => {},
};

export default charity;
