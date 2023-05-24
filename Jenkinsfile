pipeline { 
    agent any
    stages {
        stage("Print node version") {
            steps {
                sh "node -v"
                sh "npm -v"
                sh "which node"
                sh "which npm"
            }
        }
        stage("Build") {
            steps {
                sh "sudo npm install"
                sh "sudo chmod +x node_modules/.bin/react-scripts"
                sh "sudo npm run build"
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo rm -rf /var/www/react-app"
                sh "sudo cp -r ${WORKSPACE}/build/ /var/www/react-app/"
            }
        }
    }
}