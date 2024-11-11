pipeline {
    agent any
    tools {
        nodejs 'NodeJS' // Use the exact name in Global Tool Configuration
    }
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}



// pipeline {
//     agent any
//     tools {
//         nodejs 'NodeJS' // Name of your NodeJS installation in Jenkins
//     }
//     stages {
//         stage('Checkout') {
//             steps {
//                 // Checkout the code from GitHub
//                 git url: 'https://github.com/iamAdityaDev/my-node-app.git', branch: 'main'
//             }
//         }
//         stage('Install Dependencies') {
//             steps {
//                 // Install Node.js dependencies
//                 sh 'npm install'
//             }
//         }
//         stage('Build') {
//             steps {
//                 // No specific build step for Node.js app, but include if needed
//                 echo 'Build step - if needed for specific setup'
//             }
//         }
//         stage('Test') {
//             steps {
//                 // Add test command if you have tests
//                 sh 'npm test'
//             }
//         }
//     }
//     post {
//         success {
//             echo 'Build and tests were successful!'
//         }
//         failure {
//             echo 'Build or tests failed!'
//         }
//         always {
//             echo 'Cleaning up...'
//         }
//     }
// }
