import { FilterValuePredicate } from "@/include/type-utils";
import {
	ClientWritableStream,
	sendUnaryData,
	ServerReadableStream,
} from "@grpc/grpc-js";
import { UnaryCallback } from "@grpc/grpc-js/build/src/client";

/*
Stream with Unary Response
*/

export type StreamKeys<ClientType, StreamRequestType, StreamResponseType> =
	keyof FilterValuePredicate<
		ClientType,
		StreamCreator<StreamRequestType, StreamResponseType>
	>;
export type StreamCreator<StreamRequestType, StreamResponseType> = (
	callback: UnaryCallback<StreamResponseType>
) => ClientWritableStream<StreamRequestType>;

type StreamHandler<RequestType, ResponseType> = (
	call: ServerReadableStream<RequestType, ResponseType>,
	callback: sendUnaryData<ResponseType>
) => void;
export type StreamKeysOfService<ServiceType, RequestType, ResponseType> =
	keyof FilterValuePredicate<
		ServiceType,
		StreamHandler<RequestType, ResponseType>
	>;
