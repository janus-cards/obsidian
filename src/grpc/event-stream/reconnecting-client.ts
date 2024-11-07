import {
	CreateEvent,
	DeleteEvent,
	RenameEvent,
	ModifyEvent,
	FileOpenEvent,
	ObsidianEvent,
	ObsidianEventStreamClient,
	Empty,
} from "../proto/obsidian_events";
import { CamelCase, KebabCase } from "@/include/strings/case-conversion";
import { GrpcConfig } from "../config";
import { ReconnectingClientStream } from "../reconnecting-client";

/*
  For all events listened to, forward these on via grpc
*/
type EventNameToProtoMap = {
	create: CreateEvent;
	delete: DeleteEvent;
	rename: RenameEvent;
	modify: ModifyEvent;
	"file-open": FileOpenEvent;
};

export class EventStreamClient extends ReconnectingClientStream<
	ObsidianEventStreamClient,
	ObsidianEvent,
	Empty
> {
	constructor(grpcConfig: GrpcConfig) {
		super(grpcConfig, ObsidianEventStreamClient, "streamEvents");
	}

	sendRequest<Name extends EventName>(
		name: Name,
		event: EventNameToProtoMap[Name]
	): void {
		// Get timestamp
		const timestamp = Date.now();
		// Create request
		// Names which are multiple words need to be camelCase in the proto
		const protoName = CamelCase.style(KebabCase.unstyle(name));
		const obsidianEvent = new ObsidianEvent({
			timestamp,
			[protoName]: event,
		});
		// Log event
		if (this.getConfig().verbose) {
			console.log("Sending event", obsidianEvent);
		}
		// Send request
		this.getStream().write(obsidianEvent);
	}
}
