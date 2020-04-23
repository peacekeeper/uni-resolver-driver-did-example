'use strict';


/**
 * Resolve a DID or other identifier.
 *
 * identifier String A DID or other identifier to be resolved.
 * accept String The requested MIME type of the DID document or DID resolution result. (optional)
 * returns Object
 **/
exports.resolve = function(identifier,accept) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['did:example:0000000000123456'] = {
      "@context": "https://www.w3.org/2019/did/v1",
      "id" : "did:example:0000000000123456",
      "publicKey" : [ {
        "id" : "did:example:0000000000123456#key-1",
        "type" : "Ed25519VerificationKey2018",
        "publicKeyBase58" : "H3C2AVvLMv6gmMNam3uVAjZpfkcJCwDwnZn6z3wXmqPV"
      } ]
    };
    examples['did:example:0000000000456789'] = {
      "@context": "https://www.w3.org/2019/did/v1",
      "id" : "did:example:0000000000456789",
      "publicKey" : [ {
        "id" : "did:example:0000000000456789#key-1",
        "type" : "Ed25519VerificationKey2018",
        "publicKeyBase58": "EKmHWjiDDeMhEBs75uv86dC89zZ6yTTxEAHkYroJ7wZP"
      } ]
    };
    var found = examples[identifier];
    if (found) {
      resolve(found);
    } else {
      resolve(404);
    }
  });
}

