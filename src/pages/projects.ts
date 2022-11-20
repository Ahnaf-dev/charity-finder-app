import globalGivingAPI from "../api/apiConfig";
import utils from "../utilities/utils";
import projectCard from "../components/projectCard";

const state: {
  projects: any[];
} = {
  projects: [],
};

async function fetchProjectsAndSaveToState(charityID: string) {
  const res = await globalGivingAPI.fetchProjectsByAjax(charityID);
  state.projects = res.projects.project;
}

const charityProjects = {
  generateHTML: async () => {
    let charityID = utils.parseURLFromHash(location.hash, true);
    await fetchProjectsAndSaveToState(charityID);

    if (state.projects.length < 1) {
      return `
        <p class="center text--lg">No Projects Found</p>
      `;
    }

    const html = `
    <div class="container charity-project">
      <h2 class="charity-project__heading text--lg">${
        state.projects[0].organization.name
      } Projects</h2>
      <div class="charity-project__grid">
      ${state.projects
        .map((project) => {
          return projectCard.generateHTML(project);
        })
        .join("")}
      </div>
  </div>
    `;

    return html;
  },
  afterRender: () => {},
};

export default charityProjects;
