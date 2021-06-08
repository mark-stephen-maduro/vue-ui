// Redirect infopiphany.gitlab.io/infopiphany-ui/ to design.infopiphany.com because pages is being served without sub-path.
var domain = window ? window.location.host : '';
var url = window ? window.location : '';
if(domain == 'infopiphany.gitlab.io' && url.toString().contains('infopiphany-ui')) {
  window.location = 'https://design.infopiphany.com';
}
