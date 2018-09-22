PATH := node_modules/.bin:$(PATH)

all: lint test clean build

lint: node_modules
	tslint -p .

test: node_modules
	jest

clean:
	rm -rf esm cjs umd

build: node_modules
	tsc -d -m esnext --outDir esm
	tsc -d -m commonjs --outDir cjs
	rollup -c

release: all
	git add -A
	standard-version -a

node_modules:
	yarn

.PHONY: all lint test clean build release
