# Ldapid
This is a POC of the nodejs library [ldapjs](http://ldapjs.org/client.html) on top of [express](https://expressjs.com/).

It uses a test LDAP server provided by [forumsys.com](https://www.forumsys.com/tutorials/integration-how-to/ldap/online-ldap-test-server/).

## How to use locally
* Clone the project
* Run `cd ldapid/src && npm install`
* Run `npm start`
* Test with `curl localhost:3000/auth/login --data 'uid=tesla'` 

## How to use with Docker
* Clone the project
* Run `cd ldapid && docker build . -t amine250/ldapid` or `docker pull amine250/ldapid`
* Run `docker run --init -p 3000:3000 amine250/ldapid`
* Test with `curl localhost:3000/auth/login --data 'uid=tesla'`  
