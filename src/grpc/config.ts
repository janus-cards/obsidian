import { ChannelCredentials } from "@grpc/grpc-js";

export type GrpcConfig = {
	address: string;
	credentials: ChannelCredentials;
	verbose: boolean;
	reconnectDelayMs?: number;
};
