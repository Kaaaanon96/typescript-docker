RUN_BASE:= docker-compose run
RUN_ONLY:=$(RUN_BASE) --rm

EXEC_BASE:= docker-compose exec

default:
	@echo "a"


.PHONY: default

