import * as grpc from "@grpc/grpc-js";
import {
	Empty,
	ObsidianEvent,
	UnimplementedObsidianEventStreamService,
} from "@/grpc/proto/obsidian_events";
import { BasicStreamService } from "../basic-service";

export class ObsidianEventStreamService
	extends UnimplementedObsidianEventStreamService
	implements grpc.UntypedServiceImplementation
{
	// The generated proto code has an index signature that prevents us from
	// adding a private field, so we have to use a different name.
	#underlyingService: BasicStreamService<ObsidianEvent, Empty>;
	constructor(callback: (event: ObsidianEvent) => void) {
		super();
		const wrappedCallback = (event: ObsidianEvent) => {
			callback(event);
			return new Empty();
		};
		this.#underlyingService = new BasicStreamService(wrappedCallback);
	}

	streamEvents(
		call: grpc.ServerReadableStream<ObsidianEvent, Empty>,
		callback: grpc.sendUnaryData<Empty>
	): void {
		this.#underlyingService.streamHandler(call, callback);
	}
}
