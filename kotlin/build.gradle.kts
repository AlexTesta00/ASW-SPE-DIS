// kotlin/build.gradle.kts
plugins {
    kotlin("jvm") version "2.1.21" // Usa l'ultima versione di Kotlin
}


repositories {
    mavenCentral()
}

dependencies {
    testImplementation(kotlin("test"))
}

tasks.test {
    useJUnitPlatform()
}

tasks.build{
    dependsOn(tasks.test)
}