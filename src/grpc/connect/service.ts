import {
	ConnectResponse,
	ConnectRequest,
	UnimplementedObsidianConnectService,
} from "@/grpc/proto/obsidian_connect";
import { makeService } from "../basic-service";

export const ObsidianConnectService = makeService<
	UnimplementedObsidianConnectService,
	ConnectRequest,
	ConnectResponse
>("connect");
