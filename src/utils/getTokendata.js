export let userData = JSON.parse(localStorage.getItem("tokenData")) ? JSON.parse(localStorage.getItem("tokenData")).user_data : {};
export let userLevel = JSON.parse(localStorage.getItem("tokenData"))?JSON.parse(localStorage.getItem("tokenData")).user_level:{};
export let tokenData = JSON.parse(localStorage.getItem("tokenData"))?JSON.parse(localStorage.getItem("tokenData")).token_data:{};

