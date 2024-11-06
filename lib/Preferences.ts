const production = true
export const myPref = {
  appId: production ? 53052 : 1089,
  wsUrl: "wss://ws.derivws.com/websockets/v3?app_id=",
  httpUrl: "https://oauth.deriv.com/oauth2/authorize?app_id=",
}
