pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-credentials')
        DOCKERHUB_USERNAME = 'abderrazekchamekh'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Backend') {
            steps {
                dir('Back_End') {
                    sh 'docker build -t $DOCKERHUB_USERNAME/telnet-backend:latest .'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('myproject') {
                    sh 'docker build -t $DOCKERHUB_USERNAME/telnet-frontend:latest .'
                }
            }
        }

        stage('Push to DockerHub') {
            steps {
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
                sh 'docker push $DOCKERHUB_USERNAME/telnet-backend:latest'
                sh 'docker push $DOCKERHUB_USERNAME/telnet-frontend:latest'
            }
        }

        stage('Deploy to AKS') {
            steps {
                withCredentials([file(credentialsId: 'kubeconfig', variable: 'KUBECONFIG')]) {
                    sh 'kubectl apply -f k8s/mongo.yml'
                    sh 'kubectl apply -f k8s/backend.yml'
                    sh 'kubectl apply -f k8s/frontend.yml'
                    sh 'kubectl rollout restart deployment/backend'
                    sh 'kubectl rollout restart deployment/frontend'
                }
            }
        }
    }

    post {
        always {
            sh 'docker logout'
        }
    }
}