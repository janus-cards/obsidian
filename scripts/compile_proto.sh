# Must be run from the project root

export GOOD=0
export BAD=1

export TSPROTOC=node_modules/.bin/protoc-gen-ts
export JSPROTOC=node_modules/.bin/protoc-gen-js

export PROTO_DIR=proto
export SRC_DIR=src/grpc

check_requirements() {
	if ! command -v protoc &>/dev/null; then
		echo "protoc is not installed. Please install it before running this script."
		return $BAD
	fi

	# Check version of protoc
	PROTOC_VERSION=$(protoc --version | awk '{print $2}')
	echo "protoc version: $PROTOC_VERSION"
	if [ $PROTOC_VERSION != "3.20.3" ]; then
		echo "protoc version 3.20.3 is required. Please install it before running this script."
		return $BAD
	fi

	# Check file exists
	if [ ! -f ${TSPROTOC} ]; then
		echo "Typescript protoc plugin not found. Please run 'npm install' before running this script."
		return $BAD
	fi

	# Check file exists
	if [ ! -f ${JSPROTOC} ]; then
		echo "Javascript protoc plugin not found. Please run 'npm install' before running this script."
		return $BAD
	fi

	return $GOOD
}

if ! check_requirements; then
	echo "Requirements check failed. Exiting..."
	exit $BAD
fi

# Get all files in the protobuff directory
PROTO_FILES=$(find $PROTO_DIR -name "*.proto")

# Typescript Protos
echo "Compiling Typescript Protos..."
protoc --plugin=protoc-gen-ts=$TSPROTOC --ts_out=${SRC_DIR} $PROTO_FILES
# TS complains that the generated files use custom namespaces instead of modules.
# To resolve, I have disabled all eslint rules for the generated files.

# Javascript Protos
echo "Compiling Javascript Protos..."
protoc --plugin=protoc-gen-js=$JSPROTOC --js_out=import_style=commonjs,binary:${SRC_DIR} $PROTO_FILES
