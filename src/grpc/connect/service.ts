import {
	ConnectResponse,
	ConnectRequest,
	UnimplementedObsidianConnectService,
} from "@/grpc/proto/obsidian_connect";
import {
	sendUnaryData,
	ServerUnaryCall,
	UntypedServiceImplementation,
} from "@grpc/grpc-js";

export class ObsidianConnectService
	extends UnimplementedObsidianConnectService
	implements UntypedServiceImplementation
{
	#userCallback: (request: ConnectRequest) => ConnectResponse;

	constructor(callback: (request: ConnectRequest) => ConnectResponse) {
		super();
		this.#userCallback = callback;
	}

	connect(
		call: ServerUnaryCall<ConnectRequest, ConnectResponse>,
		callback: sendUnaryData<ConnectResponse>
	): void {
		const response = this.#userCallback(call.request);
		callback(null, response);
	}
}
