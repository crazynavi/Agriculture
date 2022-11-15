export const isRoleAllowed = (list) => {
  // const role = JSON.parse(localStorage.getItem("tokenData")).user_role;
    // let role = [2656,2658,2669,2771,2663,2666,2635,2644,2650,2652,2734];
    let role = [2656,2666,2635,2644,2734];
  let isAllowed = false;
  role.forEach((element) => {
    if (list.indexOf(element) > -1) isAllowed = true;
  });
  return isAllowed;
};
