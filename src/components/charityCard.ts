const charityCard = {
  generateHTML: (card: any) => {
    const html = `
    <div class="card">
    <div class="card__header">
      <div class="card__logo">
        <img src='${card.logoUrl}' alt='${card.name} logo' />
      </div>
      <div class="card__info">
        <h1 class="card__title text--md text--bd">
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
      ${card.mission}
      </p>
    </div>
    <a href="#" class="btn btn--main">View Projects</a>
  </div>
    `;
    return html;
  },
  afterRender: () => {},
};

export default charityCard;
