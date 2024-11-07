import * as grpc from "@grpc/grpc-js";

export class BasicStreamService<RequestType, ResponseType> {
	// The generated proto code has an index signature that prevents us from
	// adding a private field, so we have to use a different name.
	private userCallback: (request: RequestType) => ResponseType;
	constructor(callback: (request: RequestType) => ResponseType) {
		this.userCallback = callback;
	}

	streamHandler(
		call: grpc.ServerReadableStream<RequestType, ResponseType>,
		callback: grpc.sendUnaryData<ResponseType>
	): void {
		// Log each event received from the client
		call.on("data", (request: RequestType) => {
			try {
				const response = this.userCallback(request);
				console.log("Received request:", request);
				callback(null, response);
			} catch (error) {
				console.error("Error processing request:", error);
				callback(error);
			}
		});
	}
}
