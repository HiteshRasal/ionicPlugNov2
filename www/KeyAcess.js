
               var exec = require('cordova/exec');
               
              
               exports.deleteMethod = function(arg0, success, error) {
               exec(success, error, "KeyAcess", "deleteMethod", [arg0]);
               };
               
               exports.getPublicKey = function(arg0, success, error) {
               exec(success, error, "KeyAcess", "getPublicKey", [arg0]);
               };
               
               exports.geneSigning = function(arg0, success, error) {
               var strToenc=arg0.strToEnc;
               exec(success, error, "KeyAcess", "geneSigning", [strToenc]);
               };
               
               


