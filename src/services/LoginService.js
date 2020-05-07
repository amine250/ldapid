var propertiesReader = require('properties-reader');
var properties = propertiesReader(__dirname+'/../properties/ldap.properties');
var ldap = require('ldapjs');


var ldapUrl = properties.get('ldap.protocol')+'://'+properties.get('ldap.url')+':'+properties.get('ldap.port');
var ldapBindDN = properties.get('ldap.binddn');
var ldapPassword = properties.get('ldap.password');
var ldapBaseDN = properties.get('ldap.basedn');


var ldapclient = ldap.createClient({
  url: ldapUrl
});

ldapclient.bind(ldapBindDN, ldapPassword, function (err, res) {
  if(err) {
    console.log('Could not bind to: '+ldapUrl);
    console.log(err);
    process.exit(-1);
  }
  else console.log('Connected to: '+ldapUrl);
});

// For now, this function checks if a user exists
exports.Login = async function (body, callback) {
  // Get data from request body
  var uid = body.uid;
  // compare(dn, attribute, value, controls, callback)
  //uid=tesla,dc=example,dc=com
  ldapclient.compare('uid='+uid+','+ldapBaseDN, 'uid', uid, function(err, matched) {
    if(err) callback(err);
    else callback(null,{"matched":matched});
  });
  
};
