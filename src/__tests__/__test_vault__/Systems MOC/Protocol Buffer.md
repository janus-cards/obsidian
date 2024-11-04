---
type: note
created: Wednesday 25 Oct 2023
tags: 
---
> [!IDEA]
> An [[Interface Definition Language]]. This is [[Google]]'s language-neutral, platform-neutral, extensible mechanism for serializing structured data.

## Protocol Buffer Workflow:
1. **Define**: Start by defining your data structure in a .proto file. This structure can include different fields with types like int, string, custom types, etc.
```proto
message Person {
  string name = 1;
  int32 id = 2;
  string email = 3;
}
```
2. **Generate**: Use the protocol buffer compiler (`protoc`) to generate data access classes in your chosen language. For C++, the command would be something like: `protoc --cpp_out=. myfile.proto`. This will generate two files: `myfile.pb.h` and `myfile.pb.cc`, which provide a class for each message type in your .proto file.
3. **Use**: In your C++ code, you can now use these classes to serialize and deserialize your data. 
```cpp
#include "myfile.pb.h"

Person person;
person.set_name("John Doe");
person.set_id(123);
person.set_email("jdoe@example.com");

// Serialize to string
std::string serialized_str;
person.SerializeToString(&serialized_str);

// Deserialize from string
Person person2;
person2.ParseFromString(serialized_str);
```
4. **Communicate**: You can now use the serialized string to send data over the network, save it to a file, etc. On the receiver side, the same protobuf library will be used to deserialize the data back into the Person object.

If you are using this along side [[gRPC]], typically the [[Marshalling]] calls will get done by the gRPC code

## Example code:
- Define the [[gRPC Services]] which contains all the [[Remote Procedure Call]]s you want clients to make use of
- Define the messages types that clients and servers must agree on
```proto
// The greeter service definition.
service Greeter {
  // Sends a greeting
  rpc SayHello (HelloRequest) returns (HelloReply) {}
}

// The request message containing the user's name.
message HelloRequest {
  string name = 1;
}

// The response message containing the greetings
message HelloReply {
  string message = 1;
}
```