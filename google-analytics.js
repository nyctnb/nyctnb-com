const BASE_PROD_DOMAIN = "nyctnb.com";
// Filtering localhost/development IPs
if (document.location.hostname.search(BASE_PROD_DOMAIN) !== -1) {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-119556311-6');
}