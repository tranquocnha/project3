kubectl delete deploy backend-user
kubectl delete deploy backend-feed
kubectl delete deploy reverseproxy
kubectl delete deploy frontend

kubectl apply -f  feed-deploy.yml
kubectl apply -f  user-deploy.yml
kubectl apply -f  feed-deploy.yml
kubectl apply -f  reverseproxy-deploy.yml
kubectl apply -f  frontend-deploy.yml


kubectl expose deployment frontend --type=LoadBalancer --name=publicfrontend

kubectl expose deployment reverseproxy --type=LoadBalancer --name=publicreverseproxy