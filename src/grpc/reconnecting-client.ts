import {
	ChannelCredentials,
	ChannelOptions,
	ClientWritableStream,
} from "@grpc/grpc-js";
import { GrpcConfig } from "./config";
import { Client, UnaryCallback } from "@grpc/grpc-js/build/src/client";
import { ConnectivityState } from "@grpc/grpc-js/build/src/connectivity-state";
import { FilterValuePredicate, RemoveIndex } from "@/include/type-utils";
import {
	Empty,
	ObsidianEvent,
	ObsidianEventStreamClient,
} from "./proto/obsidian_events";

type ClientConstructor<T> = new (
	address: string,
	credentials: ChannelCredentials,
	options?: Partial<ChannelOptions>
) => T;

type StreamResponseHandler<T> = (response: T) => void;

type StreamCreator<StreamRequestType, StreamResponseType> = (
	callback: UnaryCallback<StreamResponseType>
) => ClientWritableStream<StreamRequestType>;

//
type FilterStreamCreatorKeys<
	ClientType,
	StreamRequestType,
	StreamResponseType
> = FilterValuePredicate<
	ClientType,
	StreamCreator<StreamRequestType, StreamResponseType>
>;

type StreamKeys<ClientType, StreamRequestType, StreamResponseType> =
	keyof FilterStreamCreatorKeys<
		RemoveIndex<ClientType>,
		StreamRequestType,
		StreamResponseType
	>;

export type ConnectionState = "Unconnected" | "Connecting" | "Connected";

export class ReconnectingClientStream<
	ClientType extends Client,
	StreamRequestType,
	StreamResponseType
> {
	private client: ClientType;
	private config: GrpcConfig;
	private stream: ClientWritableStream<StreamRequestType>;
	private responseHandler: StreamResponseHandler<StreamResponseType> | null;
	private streamKey: StreamKeys<
		ClientType,
		StreamRequestType,
		StreamResponseType
	>;

	constructor(
		config: GrpcConfig,
		clientConstructor: ClientConstructor<ClientType>,
		streamKey: StreamKeys<ClientType, StreamRequestType, StreamResponseType>
	) {
		this.client = new clientConstructor(config.address, config.credentials);
		this.streamKey = streamKey;
		this.config = config;
	}

	connect() {
		const reconnectHandler = (
			err: Error | null,
			response: StreamResponseType
		) => {
			if (err) {
				this.retryConnect();
			}
			if (this.responseHandler) {
				this.responseHandler(response);
			}
		};

		const streamCreator = this.client[this.streamKey] as StreamCreator<
			StreamRequestType,
			StreamResponseType
		>;
		this.stream = streamCreator(reconnectHandler.bind(this));
	}

	retryConnect() {
		setTimeout(() => {
			this.connect();
		}, this.config.reconnectDelayMs);
	}

	close() {
		if (this.stream) {
			this.stream.end();
		}
		if (this.client) {
			this.client.close();
		}
	}

	// Add getter for connection state
	getConnectionState(): ConnectionState {
		switch (this.client.getChannel().getConnectivityState(false)) {
			case ConnectivityState.IDLE:
				return "Unconnected";
			case ConnectivityState.CONNECTING:
				return "Connecting";
			case ConnectivityState.READY:
				return "Connected";
			default:
				return "Unconnected";
		}
	}

	protected getStream(): ClientWritableStream<StreamRequestType> {
		return this.stream;
	}
	protected getConfig(): GrpcConfig {
		return this.config;
	}

	protected setResponseHandler(
		responseHandler: StreamResponseHandler<StreamResponseType>
	) {
		this.responseHandler = responseHandler;
	}
}
