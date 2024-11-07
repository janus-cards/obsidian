import * as grpc from "@grpc/grpc-js";
import {
	Empty,
	ObsidianEvent,
	UnimplementedObsidianEventStreamService,
} from "@/grpc/proto/obsidian_events";

export type ReceivedEvent = {
	event: ObsidianEvent;
	timestamp: number;
};

export class ObsidianEventStreamService
	extends UnimplementedObsidianEventStreamService
	implements grpc.UntypedServiceImplementation
{
	// The generated proto code has an index signature that prevents us from
	// adding a private field, so we have to use a different name.
	#userCallback: (event: ReceivedEvent) => void;
	constructor(callback: (event: ReceivedEvent) => void) {
		super();
		this.#userCallback = callback;
	}

	streamEvents(
		call: grpc.ServerReadableStream<ObsidianEvent, Empty>,
		callback: grpc.sendUnaryData<Empty>
	): void {
		console.log("Client connected");

		// Log each event received from the client
		call.on("data", (event: ObsidianEvent) => {
			this.#userCallback({
				event,
				timestamp: event.timestamp,
			});
			console.log("Received event:", {
				timestamp: event.timestamp,
				type: event.event,
			});
		});

		// Handle end of stream
		call.on("end", () => {
			callback(null, new Empty());
		});

		// Handle errors
		call.on("error", (error) => {
			console.error("Stream error:", error);
		});
	}
}
