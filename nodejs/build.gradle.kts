import com.github.gradle.node.npm.task.NpmTask

plugins{
    id("com.github.node-gradle.node") version "7.1.0"
}

node{
    version.set("23.5.0")
    npmVersion.set("10.9.2")
    download.set(true)
}

// Task per eseguire i test
tasks.register<NpmTask>("npmTest") {
    args.set(listOf("test"))
    dependsOn("npmInstall")
}

// Task per avviare il server
tasks.register<NpmTask>("npmStart") {
    args.set(listOf("start"))
}

// Task per eseguire la build del progetto Node.js
tasks.register<NpmTask>("npmBuild") {
    args.set(listOf("run", "build"))
    dependsOn("npmTest")
}

// Task predefinito per eseguire la build
defaultTasks("npmBuild")