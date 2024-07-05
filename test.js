var validate = require("validate-npm-package-name");

const res = validate("@metamask/profile-sync-controller");
console.log(res);
