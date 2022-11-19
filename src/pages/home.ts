import charity from "../assets/images/charity.jpg";

const home = {
  generateHTML: () => {
    const html = `
    
      <h2>Home Splash Page Component
    `;

    $("#content__entry").html(html);
  },
  afterRender: () => {},
};

export default home;
