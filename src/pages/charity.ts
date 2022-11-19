import globalGivingAPI from "../api/apiConfig";
import charityCard from "../components/charityCard";

interface apiState {
  hasNext: boolean;
  nextOrgId: string | undefined | null;
  orgs: any[];
}
interface state {
  charities: apiState;
}
let state: state = {
  charities: {
    hasNext: false,
    nextOrgId: null,
    orgs: [],
  },
};

function getOrganizations(id: string = "") {
  return $.ajax({
    url: globalGivingAPI.organization(id),
    method: "GET",
    dataType: "JSON",
  });
}

async function returnOganizations(id: string = "") {
  const res = await getOrganizations(id);
  const { hasNext, nextOrgId, organization } = res.organizations;
  setCharityState({ hasNext, nextOrgId, orgs: organization });

  return res.organizations.organization;
}

function setCharityState(charityProp: apiState) {
  let charities = state.charities;
  charities.hasNext = charityProp.hasNext;
  charities.nextOrgId = charityProp.nextOrgId;
  // 10 array items -> load more clicked -> 20 array items
  charities.orgs = [...state.charities.orgs, ...charityProp.orgs];
}

const charity = {
  generateHTML: async (id: string = "") => {
    await returnOganizations(id);

    const html = `
    <h2 class="charity__heading text--lg">Charities</h2>
    <div class="container">
      <div class="grid">
        ${state.charities.orgs
          .map((org: any) => {
            return charityCard.generateHTML(org);
          })
          .join("")}
       </div>
       <button class="btn btn--main load-more-charity">Load More</button>
    </div>
    `;

    if (id) {
      $("#content__entry").html(html);
      charity.afterRender();
      return;
    }
    return html;
  },
  afterRender: () => {
    $(".load-more-charity").on("click", async () => {
      if (state.charities.hasNext) {
        await charity.generateHTML(state.charities.nextOrgId);
      } else {
        $(".load-more-charity").prop("disabled", true);
      }
    });
  },
};

export default charity;
