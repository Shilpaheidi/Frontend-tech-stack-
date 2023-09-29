
const base_URL = `https://g20api.getster.tech/api/`;
const baseURL_API = `https://manageapi.getster.tech/api/`;
const base_URL1 = `http://localhost:3000/`
export const environment = {
  production: true,



  // baseURL:'http://localhost:3048/',



  baseURL: ``,

  // baseURL: 'http://localhost:3000/',
  // baseURL:'https://u18api.getster.tech/',



  postingEmptyOuterBagIDInsert:`${base_URL1}api/empty_bag_app/empty-bag-store-data/posting-empty-outer-bag-id-insert`,
  postingEmptyOuterBagID:`${base_URL1}api/empty_bag_app/empty-bag-store-data/posting-empty-outer-bag-id`,
  postingEmptyInnerBagIDInsert:`${base_URL1}api/empty_bag_app/empty-bag-store-data/posting-empty-inner-bag-id_insert`,
  checkingOuterBagidExistOrNot:`${base_URL1}api/empty_bag_app/empty-bag-store-data/checking-outer-bagid-exist-or-not`,
  verifyingEmptyInnerBagID:`${base_URL1}api/empty_bag_app/empty-bag-store-data/verifying-empty-inner-bag-id`,
  verifyingOuterBagID:`${base_URL1}/empty_bag_app/empty-bag-store-data/verifying-outer-bag_id`,
  getAuditTrail:`${base_URL1}api/empty_bag_app/empty-bag-store-data/get-audit-trail`,
  getAuditTrailVerify:`${base_URL1}api/empty_bag_app/empty-bag-store-data/get-audit-trail-verify`,
  deleteRecords:`${base_URL1}api/empty_bag_app/empty-bag-store-data/delete-records`,
  postingEmptyInnerBagID:`${base_URL1}api/empty_bag_app/empty-bag-store-data/posting-empty-inner-bag-id`,
    //Login
    get_camp_site_name_based_on_country_code: `${base_URL}login/get-camp-site-name-based-on-country-code`,
    //Verify PassWord
    verify_getster_password: `${baseURL_API}manage-getster/login-with-getster-password`,
    //Get Getster category Id
    get_getster_category_id_based_getster_id: `${base_URL}login/get-getster-category_id-based-getster-id`,
    get_assigned_getster_to_camps: `${base_URL}login/get-assigned-getster-to-camps`,

};




