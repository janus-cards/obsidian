import {
	Empty,
	ObsidianEvent,
	UnimplementedObsidianEventStreamService,
} from "@/grpc/proto/obsidian_events";
import { makeService } from "../basic-service";

export const ObsidianEventStreamService = makeService<
	UnimplementedObsidianEventStreamService,
	ObsidianEvent,
	Empty
>("streamEvents");
