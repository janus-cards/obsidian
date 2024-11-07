import * as grpc from "@grpc/grpc-js";

export default class GrpcServer {
	server: grpc.Server;

	private servicesAdded = 0;

	constructor() {
		this.server = new grpc.Server();
	}

	addService(
		service: grpc.ServiceDefinition<unknown>,
		implementation: grpc.UntypedServiceImplementation
	) {
		this.server.addService(service, implementation);
		this.servicesAdded += 1;
	}

	start(port: number): Promise<void> {
		return new Promise<void>((resolve, reject) => {
			if (this.servicesAdded === 0) {
				reject(new Error("No services added to the server"));
			}
			this.server!.bindAsync(
				`127.0.0.1:${port}`,
				grpc.ServerCredentials.createInsecure(),
				(error) => {
					if (error) {
						console.error("Failed to bind server:", error);
						reject();
					} else {
						console.log(`Server listening on port ${port}`);
						resolve();
					}
				}
			);
		});
	}

	forceShutdown() {
		this.server.forceShutdown();
	}
}
