.PHONY: all
all:
	make up-build

.PHONY: up-build
up-build:
	docker-compose up --build

.PHONY: build
build:
	docker-compose build

.PHONY: up
up:
	docker-compose up

.PHONY: down
down:
	docker-compose down

.PHONY: clean
clean:
	make down
	docker rmi --force ex00-nginx
