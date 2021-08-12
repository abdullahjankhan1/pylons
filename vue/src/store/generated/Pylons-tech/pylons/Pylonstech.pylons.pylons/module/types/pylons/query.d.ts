import { Reader, Writer } from 'protobufjs/minimal';
import { Execution } from '../pylons/execution';
import { Recipe } from '../pylons/recipe';
import { Item } from '../pylons/item';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { Cookbook } from '../pylons/cookbook';
export declare const protobufPackage = "Pylonstech.pylons.pylons";
/** this line is used by starport scaffolding # 3 */
export interface QueryListExecutionsByItemRequest {
    CookbookID: string;
    ItemID: string;
}
export interface QueryListExecutionsByItemResponse {
    Executions: Execution[];
}
export interface QueryListExecutionsByRecipeRequest {
    CookbookID: string;
    RecipeID: string;
}
export interface QueryListExecutionsByRecipeResponse {
    Executions: Execution[];
}
export interface QueryGetExecutionRequest {
    ID: string;
}
export interface QueryGetExecutionResponse {
    Execution: Execution | undefined;
    Completed: boolean;
}
export interface QueryListRecipesByCookbookRequest {
    CookbookID: string;
}
export interface QueryListRecipesByCookbookResponse {
    Recipes: Recipe[];
}
export interface QueryGetItemRequest {
    CookbookID: string;
    ID: string;
}
export interface QueryGetItemResponse {
    Item: Item | undefined;
}
export interface QueryAllItemRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllItemResponse {
    Item: Item[];
    pagination: PageResponse | undefined;
}
export interface QueryGetRecipeRequest {
    CookbookID: string;
    ID: string;
}
export interface QueryGetRecipeResponse {
    Recipe: Recipe | undefined;
}
export interface QueryListCookbooksByCreatorRequest {
    creator: string;
}
export interface QueryListCookbooksByCreatorResponse {
    Cookbooks: Cookbook[];
}
export interface QueryGetCookbookRequest {
    ID: string;
}
export interface QueryGetCookbookResponse {
    Cookbook: Cookbook | undefined;
}
export declare const QueryListExecutionsByItemRequest: {
    encode(message: QueryListExecutionsByItemRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryListExecutionsByItemRequest;
    fromJSON(object: any): QueryListExecutionsByItemRequest;
    toJSON(message: QueryListExecutionsByItemRequest): unknown;
    fromPartial(object: DeepPartial<QueryListExecutionsByItemRequest>): QueryListExecutionsByItemRequest;
};
export declare const QueryListExecutionsByItemResponse: {
    encode(message: QueryListExecutionsByItemResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryListExecutionsByItemResponse;
    fromJSON(object: any): QueryListExecutionsByItemResponse;
    toJSON(message: QueryListExecutionsByItemResponse): unknown;
    fromPartial(object: DeepPartial<QueryListExecutionsByItemResponse>): QueryListExecutionsByItemResponse;
};
export declare const QueryListExecutionsByRecipeRequest: {
    encode(message: QueryListExecutionsByRecipeRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryListExecutionsByRecipeRequest;
    fromJSON(object: any): QueryListExecutionsByRecipeRequest;
    toJSON(message: QueryListExecutionsByRecipeRequest): unknown;
    fromPartial(object: DeepPartial<QueryListExecutionsByRecipeRequest>): QueryListExecutionsByRecipeRequest;
};
export declare const QueryListExecutionsByRecipeResponse: {
    encode(message: QueryListExecutionsByRecipeResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryListExecutionsByRecipeResponse;
    fromJSON(object: any): QueryListExecutionsByRecipeResponse;
    toJSON(message: QueryListExecutionsByRecipeResponse): unknown;
    fromPartial(object: DeepPartial<QueryListExecutionsByRecipeResponse>): QueryListExecutionsByRecipeResponse;
};
export declare const QueryGetExecutionRequest: {
    encode(message: QueryGetExecutionRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetExecutionRequest;
    fromJSON(object: any): QueryGetExecutionRequest;
    toJSON(message: QueryGetExecutionRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetExecutionRequest>): QueryGetExecutionRequest;
};
export declare const QueryGetExecutionResponse: {
    encode(message: QueryGetExecutionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetExecutionResponse;
    fromJSON(object: any): QueryGetExecutionResponse;
    toJSON(message: QueryGetExecutionResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetExecutionResponse>): QueryGetExecutionResponse;
};
export declare const QueryListRecipesByCookbookRequest: {
    encode(message: QueryListRecipesByCookbookRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryListRecipesByCookbookRequest;
    fromJSON(object: any): QueryListRecipesByCookbookRequest;
    toJSON(message: QueryListRecipesByCookbookRequest): unknown;
    fromPartial(object: DeepPartial<QueryListRecipesByCookbookRequest>): QueryListRecipesByCookbookRequest;
};
export declare const QueryListRecipesByCookbookResponse: {
    encode(message: QueryListRecipesByCookbookResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryListRecipesByCookbookResponse;
    fromJSON(object: any): QueryListRecipesByCookbookResponse;
    toJSON(message: QueryListRecipesByCookbookResponse): unknown;
    fromPartial(object: DeepPartial<QueryListRecipesByCookbookResponse>): QueryListRecipesByCookbookResponse;
};
export declare const QueryGetItemRequest: {
    encode(message: QueryGetItemRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetItemRequest;
    fromJSON(object: any): QueryGetItemRequest;
    toJSON(message: QueryGetItemRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetItemRequest>): QueryGetItemRequest;
};
export declare const QueryGetItemResponse: {
    encode(message: QueryGetItemResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetItemResponse;
    fromJSON(object: any): QueryGetItemResponse;
    toJSON(message: QueryGetItemResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetItemResponse>): QueryGetItemResponse;
};
export declare const QueryAllItemRequest: {
    encode(message: QueryAllItemRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllItemRequest;
    fromJSON(object: any): QueryAllItemRequest;
    toJSON(message: QueryAllItemRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllItemRequest>): QueryAllItemRequest;
};
export declare const QueryAllItemResponse: {
    encode(message: QueryAllItemResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllItemResponse;
    fromJSON(object: any): QueryAllItemResponse;
    toJSON(message: QueryAllItemResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllItemResponse>): QueryAllItemResponse;
};
export declare const QueryGetRecipeRequest: {
    encode(message: QueryGetRecipeRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetRecipeRequest;
    fromJSON(object: any): QueryGetRecipeRequest;
    toJSON(message: QueryGetRecipeRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetRecipeRequest>): QueryGetRecipeRequest;
};
export declare const QueryGetRecipeResponse: {
    encode(message: QueryGetRecipeResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetRecipeResponse;
    fromJSON(object: any): QueryGetRecipeResponse;
    toJSON(message: QueryGetRecipeResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetRecipeResponse>): QueryGetRecipeResponse;
};
export declare const QueryListCookbooksByCreatorRequest: {
    encode(message: QueryListCookbooksByCreatorRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryListCookbooksByCreatorRequest;
    fromJSON(object: any): QueryListCookbooksByCreatorRequest;
    toJSON(message: QueryListCookbooksByCreatorRequest): unknown;
    fromPartial(object: DeepPartial<QueryListCookbooksByCreatorRequest>): QueryListCookbooksByCreatorRequest;
};
export declare const QueryListCookbooksByCreatorResponse: {
    encode(message: QueryListCookbooksByCreatorResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryListCookbooksByCreatorResponse;
    fromJSON(object: any): QueryListCookbooksByCreatorResponse;
    toJSON(message: QueryListCookbooksByCreatorResponse): unknown;
    fromPartial(object: DeepPartial<QueryListCookbooksByCreatorResponse>): QueryListCookbooksByCreatorResponse;
};
export declare const QueryGetCookbookRequest: {
    encode(message: QueryGetCookbookRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCookbookRequest;
    fromJSON(object: any): QueryGetCookbookRequest;
    toJSON(message: QueryGetCookbookRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetCookbookRequest>): QueryGetCookbookRequest;
};
export declare const QueryGetCookbookResponse: {
    encode(message: QueryGetCookbookResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCookbookResponse;
    fromJSON(object: any): QueryGetCookbookResponse;
    toJSON(message: QueryGetCookbookResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetCookbookResponse>): QueryGetCookbookResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a list of listExecutionsByItem items. */
    ListExecutionsByItem(request: QueryListExecutionsByItemRequest): Promise<QueryListExecutionsByItemResponse>;
    /** Queries a list of listExecutionsByRecipe items. */
    ListExecutionsByRecipe(request: QueryListExecutionsByRecipeRequest): Promise<QueryListExecutionsByRecipeResponse>;
    /** Queries a execution by id. */
    Execution(request: QueryGetExecutionRequest): Promise<QueryGetExecutionResponse>;
    /** Queries a list of listRecipesByCookbook items. */
    ListRecipesByCookbook(request: QueryListRecipesByCookbookRequest): Promise<QueryListRecipesByCookbookResponse>;
    /** Queries a item by ID. */
    Item(request: QueryGetItemRequest): Promise<QueryGetItemResponse>;
    /** Retrieves a recipe by ID. */
    Recipe(request: QueryGetRecipeRequest): Promise<QueryGetRecipeResponse>;
    /** Retrieves the list of cookbooks owned by an address */
    ListCookbooksByCreator(request: QueryListCookbooksByCreatorRequest): Promise<QueryListCookbooksByCreatorResponse>;
    /** Retrieves a cookbook by ID. */
    Cookbook(request: QueryGetCookbookRequest): Promise<QueryGetCookbookResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    ListExecutionsByItem(request: QueryListExecutionsByItemRequest): Promise<QueryListExecutionsByItemResponse>;
    ListExecutionsByRecipe(request: QueryListExecutionsByRecipeRequest): Promise<QueryListExecutionsByRecipeResponse>;
    Execution(request: QueryGetExecutionRequest): Promise<QueryGetExecutionResponse>;
    ListRecipesByCookbook(request: QueryListRecipesByCookbookRequest): Promise<QueryListRecipesByCookbookResponse>;
    Item(request: QueryGetItemRequest): Promise<QueryGetItemResponse>;
    Recipe(request: QueryGetRecipeRequest): Promise<QueryGetRecipeResponse>;
    ListCookbooksByCreator(request: QueryListCookbooksByCreatorRequest): Promise<QueryListCookbooksByCreatorResponse>;
    Cookbook(request: QueryGetCookbookRequest): Promise<QueryGetCookbookResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};