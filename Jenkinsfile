pipeline {
    agent any
    tools {
        nodejs 'NodeJS'
    }
    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
    }
}