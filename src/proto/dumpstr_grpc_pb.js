// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var dumpstr_pb = require('./dumpstr_pb.js');

function serialize_MediaProcessReply(arg) {
  if (!(arg instanceof dumpstr_pb.MediaProcessReply)) {
    throw new Error('Expected argument of type MediaProcessReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MediaProcessReply(buffer_arg) {
  return dumpstr_pb.MediaProcessReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MediaProcessRequest(arg) {
  if (!(arg instanceof dumpstr_pb.MediaProcessRequest)) {
    throw new Error('Expected argument of type MediaProcessRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MediaProcessRequest(buffer_arg) {
  return dumpstr_pb.MediaProcessRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var DumpstrServiceService = exports.DumpstrServiceService = {
  processMediaDump: {
    path: '/DumpstrService/ProcessMediaDump',
    requestStream: false,
    responseStream: false,
    requestType: dumpstr_pb.MediaProcessRequest,
    responseType: dumpstr_pb.MediaProcessReply,
    requestSerialize: serialize_MediaProcessRequest,
    requestDeserialize: deserialize_MediaProcessRequest,
    responseSerialize: serialize_MediaProcessReply,
    responseDeserialize: deserialize_MediaProcessReply,
  },
};

exports.DumpstrServiceClient = grpc.makeGenericClientConstructor(DumpstrServiceService);
