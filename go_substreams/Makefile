# Makefile

# Variables
GO=go
SINK_HOST=mainnet.eth.streamingfast.io:443
SINK_URL=https://spkg.io/streamingfast/erc20-balance-changes-v1.2.0.spkg
SINK_DB=db_out
SINK_CMD=sink $(SINK_HOST) $(SINK_URL) $(SINK_DB)

# Targets
all: build

build:
	$(GO) build -o myapp .

run: build
	./myapp

clean:
	rm -f myapp

run_sink:
	$(GO) run . $(SINK_CMD)

# Default target
.DEFAULT_GOAL := run_sink

.PHONY: all build run clean run_sink