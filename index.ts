import { SDK } from "@metamask/profile-sync-controller";

const auth = new SDK.JwtBearerAuth(
  {
    type: SDK.AuthType.SRP,
    env: SDK.Env.PRD,
    platform: SDK.Platform.INFURA,
  },
  {
    storage: {
      setLoginResponse: async (resp: SDK.LoginResponse) =>
        window.localStorage.setItem("loginResp", JSON.stringify(resp)),
      getLoginResponse: async () =>
        JSON.parse(window.localStorage.getItem("loginResp") ?? "{}"),
    },
  }
);

console.log("created", auth);
