import utils from "../utilities/utils";
import pray from "../assets/images/pray.svg";

const charityCard = {
  generateHTML: (card: any) => {
    const html = `
    <div class="card">
    <div class="card__header">
      <a aria-label="visit ${card.name} site" href=${
      card.url
    } target="_blank" class="card__logo">
        <img src='${card.logoUrl}' alt='${card.name} logo' />
      </a>
      <div class="card__info">
        <h1 class="card__title text--sm text--bd">
          ${card.name}
        </h1>
        <p class="text--sm">
          <span class="text--bd">Charity ID: </span>
          ${card.id}
        </p>
        <p class="text--sm">
          <span class="text--bd">Country: </span>
          ${card.country}
        </p>
      </div>
    </div>
    <div class="card__body">
      <p class="card__content text--sm">
      ${utils.minString(card.mission, 300)}
      </p>
    </div>
    <a href="/#/charity/${card.id}" class="btn btn--main">View Projects
      <img class="card__active-logo" src=${pray}/>
    </a>
  </div>
    `;
    return html;
  },
  afterRender: () => {},
};

export default charityCard;
