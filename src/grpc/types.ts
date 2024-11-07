import { FilterValuePredicate } from "@/include/type-utils";
import { ClientWritableStream } from "@grpc/grpc-js";
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
