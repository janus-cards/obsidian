import * as grpc from "@grpc/grpc-js";
import {
	ConnectResponse,
	ConnectRequest,
	UnimplementedObsidianConnectService,
} from "@/grpc/proto/obsidian_connect";
import { BasicStreamService } from "../basic-service";

export class ObsidianConnectService
	extends UnimplementedObsidianConnectService
	implements grpc.UntypedServiceImplementation
{
	// The generated proto code has an index signature that prevents us from
	// adding a private field, so we have to use a different name.
	#underlyingService: BasicStreamService<ConnectRequest, ConnectResponse>;
	constructor(callback: (event: ConnectRequest) => ConnectResponse) {
		super();
		this.#underlyingService = new BasicStreamService(callback);
	}

	connect(
		call: grpc.ServerReadableStream<ConnectRequest, ConnectResponse>,
		callback: grpc.sendUnaryData<ConnectResponse>
	): void {
		this.#underlyingService.streamHandler(call, callback);
	}
}
