interface apiConfig {
  api_key: string;
  base_url: string;
}
const apiConfig: apiConfig = {
  api_key: "526cd2e5-b764-43aa-927d-58892c59d89a",
  base_url: "https://api.globalgiving.org/api/public",
};

const globalGivingAPI = {
  organizationURL: (nextID: string = "") => {
    return `${
      apiConfig.base_url
    }/orgservice/all/organizations/active/?api_key=${apiConfig.api_key}${
      nextID ? `&nextOrgId=${nextID}` : ""
    }`;
  },
  fetchOrgsByAjax: (nextID: string = "") => {
    return $.ajax({
      url: globalGivingAPI.organizationURL(nextID),
      method: "GET",
      dataType: "JSON",
    });
  },
  fetchProjectsByAjax: (orgID: string = "") => {
    let url = `${apiConfig.base_url}/projectservice/organizations/${orgID}/projects/active?api_key=${apiConfig.api_key}`;
    return $.ajax({
      url: url,
      method: "GET",
      dataType: "JSON",
    });
  },
};
export default globalGivingAPI;
