import globalGivingAPI from "../api/apiConfig";
import charityCard from "../components/charityCard";
import searchBar from "../components/searchBar";
import utils, { filterOptions } from "../utilities/utils";

interface apiState {
  hasNext: boolean;
  nextOrgId: string | undefined | null;
  orgs: any[];
}

let state: {
  charities: apiState;
  filterOptions: filterOptions;
} = {
  charities: {
    hasNext: false,
    nextOrgId: null,
    orgs: [],
  },
  filterOptions: {
    searchTerm: "",
    countries: "",
    servedCountries: "",
  },
};

async function fetchAndSetCharityState(nextID: string = "") {
  const res = await globalGivingAPI.fetchOrgsByAjax(nextID);
  const { hasNext, nextOrgId, organization } = res.organizations;
  setCharityState({ hasNext, nextOrgId, orgs: organization });
}

function setCharityState(charityProp: apiState) {
  let charities = state.charities;
  charities.hasNext = charityProp.hasNext;
  charities.nextOrgId = charityProp.nextOrgId;
  // 10 array items -> load more clicked -> 20 array items
  charities.orgs = [...state.charities.orgs, ...charityProp.orgs];
}

const charity = {
  generateHTML: async (loadMoreID: string = "") => {
    await fetchAndSetCharityState(loadMoreID);

    const html = `
    <h2 class="charity__heading text--lg">Charities</h2>
    <div class="container">
    <div class="charity__filter-area">
      <div class="charity__search">
        ${searchBar.generateHTML()}
      </div>
    </div>
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
    // only runs when load more button is clicked
    if (loadMoreID) {
      $("#content__entry").html(html);
      charity.afterRender();
      return;
    } else {
      return html;
    }
  },
  afterRender: () => {
    const loadMoreBTN = $(".load-more-charity");

    loadMoreBTN.on("click", async () => {
      let hasMoreToLoad = state.charities.hasNext;
      if (hasMoreToLoad) {
        await charity.generateHTML(state.charities.nextOrgId);
      } else {
        loadMoreBTN.prop("disabled", true);
      }
    });

    // filter logic -------------
    // filling out filter state ex: {searchTerm: 'dwa', countries: 'ca'}
    const searchInput = $(".search__bar");

    searchInput.on("keyup", () => {
      let inputResults: any = searchInput.val();
      state.filterOptions.searchTerm = inputResults;
      filterCharityGrid();
    });
  },
};

function filterCharityGrid() {
  let filteredArr = utils.cloneArrayAndFilter(
    state.charities.orgs,
    state.filterOptions
  );
  $(".grid").html(`
      ${filteredArr
        .map((org: any) => {
          return charityCard.generateHTML(org);
        })
        .join("")}
  `);
}

export default charity;
