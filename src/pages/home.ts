import charity from "../assets/images/charity.jpg";

const home = {
  generateHTML: () => {
    const html = `
    <section style="background: url(${charity});background-position: center; background-repeat: no-repeat; background-size: cover;" class="splash">
      <h1 class="text--lg">Charity Finder</h1>
      <p>
        Find charities that match your interests and view their ongoing
        projects.
      </p>
      <a href="/#/charity" class="btn btn--main">Proceed To Site</a>
    </section>
    `;

    $("body").html(html);
  },
  afterRender: () => {},
};

export default home;
