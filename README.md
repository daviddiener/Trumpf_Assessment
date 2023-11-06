# Trumpf Assessment Web Technologies - Distributed Counter with Minikube, Docker, and Kubernetes

Link to docker image: https://hub.docker.com/repository/docker/daviddiener/trumpf_assessment/general

## Objectives
-  Set up a simple application that can increment and retrieve a shared counter.
- Containerize this application using Docker.
- Deploy multiple instances of this application on Minikube.
- Use a Kubernetes service as a load balancer to distribute traffic amongst the instances.

## Setup Application

Build and test the application inside docker.

```
npm run docker:dev
```

## Deploy in Minikube
- Start Minikube
```
npm run minikube:start 
```
- Depoy the replicas and the load balancer service defined in deployment.yaml
```
npm run minikube:deploy 
```
- Start the Minikube tunnel
```
npm run minikube:tunnel
```