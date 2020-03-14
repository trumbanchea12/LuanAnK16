import WooCommerceAPI from 'react-native-woocommerce-api';

const WooCommerce = new WooCommerceAPI({
    url: 'https://cuoituan.vn/vaomua/',  //Url
    ssl: true,
    consumerKey: 'ck_4e263ec78a5e67a4641c92ef1b2975ac7721f423',   //Your Consumer Key
    consumerSecret: 'cs_a7906d0fadac3d357a413017e849b5e0105fbbca',  //Your Consumer Secret
    wpAPI: true,
    version: 'wc/v2',
    queryStringAuth: true
}); 

export default WooCommerce;  