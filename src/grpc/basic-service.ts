import * as grpc from "@grpc/grpc-js";
import { StreamKeysOfService } from "./types";

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
				callback(null, response);
			} catch (error) {
				console.error("Error processing request:", error);
				callback(error);
			}
		});
	}
}

type ServiceConstructor<RequestType, ResponseType> = new (
	callback: (request: RequestType) => ResponseType
) => grpc.UntypedServiceImplementation;

export function makeService<
	UnimplementedServiceType,
	RequestType,
	ResponseType
>(
	streamHandlerKey: StreamKeysOfService<
		UnimplementedServiceType,
		RequestType,
		ResponseType
	>
): ServiceConstructor<RequestType, ResponseType> {
	// Define the constructor type
	class ServiceImplementation {
		private service: BasicStreamService<RequestType, ResponseType>;
		[name: string]: any;

		constructor(c: (request: RequestType) => ResponseType) {
			this.service = new BasicStreamService(c);
			this[streamHandlerKey] = this.service.streamHandler.bind(
				this.service
			);
		}
	}

	return ServiceImplementation;
}
