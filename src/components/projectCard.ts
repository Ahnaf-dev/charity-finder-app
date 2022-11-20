import utils from "../utilities/utils";

function getPercantage(min: number, max: number) {
  return Math.floor((min / max) * 100);
}

const charityCard = {
  generateHTML: (project: any) => {
    console.log(project);
    const html = `
    <div class="charity-project__card">
    <div class="charity-project__title"><h3 class="text--md">${
      project.title
    }</h3></div>
      <div class="charity-project__header">
        <img class="charity-project__image" src=${
          project.image.imagelink[5].url
        } alt="" />
        <div>
        <div class="charity-project__summary">
          <p class="text--sm">${project.summary}</p>
        </div>
        <div class="charity-project__funding">
          <p class="text--sm text--bd">Funding</p>
          <div class="charity-project__progress">
            <span class="progress-display">$${project.funding} / $${
      project.goal
    }</span>
          <span style="width: ${getPercantage(
            project.funding,
            project.goal
          )}%" class="fill-progress"></span>
          </div>
          </div>
       </div> 
      </div>
      <div class="charity-project__body">
        <p class="text--sm">
          <span class="text--bd">Long Term Impact: </span>
          ${project.longTermImpact}
        </p>
        <p class="text--sm">
          <span class="text--bd">Need: </span>
          ${project.need}
        </p>
        <p class="text--sm">
          <span class="text--bd">Activities: </span>
          ${project.activities}
        </p>
      </div>
      <div class="charity-project__buttons">
        <a target="_blank" class="btn btn--main" href=${
          project.additionalDocumentation
        }>View Documents</a>
        <a target="_blank" class="btn btn--main" href=${
          project.projectLink
        }>Project Link</a>
      </div>
    </div>
    `;
    return html;
  },
  afterRender: () => {},
};

export default charityCard;
