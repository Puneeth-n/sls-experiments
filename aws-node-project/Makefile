#!make

package:
	@sls package
ifeq ($(CI),true)
	@aws s3 cp .serverless/aws-node-project.zip s3://ct-test-serverless/lambda-${GITHUB_SHA}.zip --profile ct-infra-admin
endif

deploy:
ifeq ($(CI),true)
	@aws s3 cp s3://ct-test-serverless/lambda-${GITHUB_SHA}.zip .serverless/aws-node-project.zip --profile ct-infra-admin
endif
	@serverless deploy

clean:
	@rm *.zip

all: package deploy
