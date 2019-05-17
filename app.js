var mp = require('mercadopago');

// const publicKey = Mercadopago.setPublishableKey('mp-app-117908');
// const token = Mercadopago.createToken(form, tokenHandler(producto));

var at = mp.getAccessToken('APP_USR-1686837246832722-091919-e8bb17460f720b9f457124bb4a310fad__LA_LB__-117908');
mp.configure({
	access_token: at
});
