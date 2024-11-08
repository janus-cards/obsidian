import {
	Empty,
	ObsidianEvent,
	UnimplementedObsidianEventStreamService,
} from "@/grpc/proto/obsidian_events";
import {
	sendUnaryData,
	ServerReadableStream,
	UntypedServiceImplementation,
} from "@grpc/grpc-js";

export class ObsidianEventStreamService
	extends UnimplementedObsidianEventStreamService
	implements UntypedServiceImplementation
{
	#userCallback: (event: ObsidianEvent) => Empty;

	constructor(callback: (event: ObsidianEvent) => Empty) {
		super();
		this.#userCallback = callback;
	}

	streamEvents(
		call: ServerReadableStream<ObsidianEvent, Empty>,
		callback: sendUnaryData<Empty>
	): void {
		call.on("data", (event) => {
			const response = this.#userCallback(event);
			callback(null, response);
		});
	}
}
