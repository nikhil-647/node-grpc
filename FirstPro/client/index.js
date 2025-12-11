const grpc = require('@grpc/grpc-js')

const { GreetServiceClient } = require('../greet/greet_grpc_pb');

const addr = 'localhost:50051';

function main() {
    const client = new GreetServiceClient(
        addr,
        grpc.credentials.createInsecure()
    );

    client.close();
}

main();