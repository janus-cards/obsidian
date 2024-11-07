/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: proto/obsidian_connect.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export class ConnectRequest extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        vault_path?: string;
        version?: string;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("vault_path" in data && data.vault_path != undefined) {
                this.vault_path = data.vault_path;
            }
            if ("version" in data && data.version != undefined) {
                this.version = data.version;
            }
        }
    }
    get vault_path() {
        return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
    }
    set vault_path(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get version() {
        return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
    }
    set version(value: string) {
        pb_1.Message.setField(this, 2, value);
    }
    static fromObject(data: {
        vault_path?: string;
        version?: string;
    }): ConnectRequest {
        const message = new ConnectRequest({});
        if (data.vault_path != null) {
            message.vault_path = data.vault_path;
        }
        if (data.version != null) {
            message.version = data.version;
        }
        return message;
    }
    toObject() {
        const data: {
            vault_path?: string;
            version?: string;
        } = {};
        if (this.vault_path != null) {
            data.vault_path = this.vault_path;
        }
        if (this.version != null) {
            data.version = this.version;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.vault_path.length)
            writer.writeString(1, this.vault_path);
        if (this.version.length)
            writer.writeString(2, this.version);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ConnectRequest {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ConnectRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.vault_path = reader.readString();
                    break;
                case 2:
                    message.version = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): ConnectRequest {
        return ConnectRequest.deserialize(bytes);
    }
}
export class ConnectResponse extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        status?: ConnectResponse.Status;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("status" in data && data.status != undefined) {
                this.status = data.status;
            }
        }
    }
    get status() {
        return pb_1.Message.getFieldWithDefault(this, 1, ConnectResponse.Status.UNKNOWN) as ConnectResponse.Status;
    }
    set status(value: ConnectResponse.Status) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data: {
        status?: ConnectResponse.Status;
    }): ConnectResponse {
        const message = new ConnectResponse({});
        if (data.status != null) {
            message.status = data.status;
        }
        return message;
    }
    toObject() {
        const data: {
            status?: ConnectResponse.Status;
        } = {};
        if (this.status != null) {
            data.status = this.status;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.status != ConnectResponse.Status.UNKNOWN)
            writer.writeEnum(1, this.status);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ConnectResponse {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ConnectResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.status = reader.readEnum();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): ConnectResponse {
        return ConnectResponse.deserialize(bytes);
    }
}
export namespace ConnectResponse {
    export enum Status {
        UNKNOWN = 0,
        READY = 1,
        NOT_READY = 2
    }
}
interface GrpcUnaryServiceInterface<P, R> {
    (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
}
interface GrpcStreamServiceInterface<P, R> {
    (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
    (message: P, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
}
interface GrpWritableServiceInterface<P, R> {
    (metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
    (metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
    (options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
    (callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
}
interface GrpcChunkServiceInterface<P, R> {
    (metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
    (options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
}
interface GrpcPromiseServiceInterface<P, R> {
    (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): Promise<R>;
    (message: P, options?: grpc_1.CallOptions): Promise<R>;
}
export abstract class UnimplementedObsidianConnectService {
    static definition = {
        Connect: {
            path: "/ObsidianConnect/Connect",
            requestStream: true,
            responseStream: false,
            requestSerialize: (message: ConnectRequest) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes: Buffer) => ConnectRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message: ConnectResponse) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes: Buffer) => ConnectResponse.deserialize(new Uint8Array(bytes))
        }
    };
    [method: string]: grpc_1.UntypedHandleCall;
    abstract Connect(call: grpc_1.ServerReadableStream<ConnectRequest, ConnectResponse>, callback: grpc_1.sendUnaryData<ConnectResponse>): void;
}
export class ObsidianConnectClient extends grpc_1.makeGenericClientConstructor(UnimplementedObsidianConnectService.definition, "ObsidianConnect", {}) {
    constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
        super(address, credentials, options);
    }
    Connect: GrpWritableServiceInterface<ConnectRequest, ConnectResponse> = (metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<ConnectResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<ConnectResponse>, callback?: grpc_1.requestCallback<ConnectResponse>): grpc_1.ClientWritableStream<ConnectRequest> => {
        return super.Connect(metadata, options, callback);
    };
}
