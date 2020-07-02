PATH := node_modules/.bin:$(PATH)

all: lint test clear build

lint: node_modules
	tslint -p .

test: node_modules
	jest

clear:
	rm -rf .rpt2_cache dist

build: node_modules
	tsc -m esnext --outDir dist/esm
	tsc -m commonjs --outDir dist/cjs
	rollup -c

release: all
	git add -A src dist
	standard-version -a

node_modules: package.json
	npm i && touch $@

.PHONY: all lint test clear build release
