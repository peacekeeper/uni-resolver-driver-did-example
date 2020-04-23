![DIF Logo](https://raw.githubusercontent.com/decentralized-identity/universal-resolver/master/docs/logo-dif.png)

# Universal Resolver Driver: example

This is an example [Universal Resolver](https://github.com/decentralized-identity/universal-resolver/) driver for fictional **did:example** identifiers.

## Specifications

* [Decentralized Identifiers](https://w3c.github.io/did-core/)

## Example DIDs

```
did:example:0000000000123456
did:example:0000000000456789
```

## Build and Run (Docker)

```
docker build -f ./docker/Dockerfile . -t exampleorg/uni-resolver-driver-did-example
docker run -p 8080:8080 exampleorg/uni-resolver-driver-did-example
curl -X GET http://localhost:8080/1.0/identifiers/did:example:0000000000123456
```

## Build and Run (NodeJS)

```
npm start
```

## Driver Environment Variables

The driver recognizes the following environment variables:

### `uniresolver_driver_did_example_exampleSetting`

 * An example setting for the driver.
 * Default value: (empty string)

## Driver Metadata

The driver returns the following metadata in addition to a DID document:

* `exampleMetadata`: Example metadata
