## Play with Spring and Angular: Getting Started

In this series, we will explore full stack development with Play, Akka, Spring modules and Angular. This will also help you understand how projects like [nep.work](https://risav.dev/introducing-nepwork-ck5294zz401bvmus1p2oskup0) are built and what one might need to learn or revise to be able to contribute to the [nep.work core stack](https://github.com/nepwork/handbook/blob/master/stack.md) or to any Play and Angular based stack for that matter. 

We will start this series by installing the command line interface tools for Play 2.0, Spring Boot and Angular. I strongly recommend using a linux distro with a good package manager and a sensible terminal emulator for the best developer experience. 

## SDKMAN and JVMs

Download SDKMAN from [sdkman.io](https://sdkman.io/). If you like curling, run: 

```
curl -s "https://get.sdkman.io" | bash

``` 

This shows all available installs on SDKMAN. 

```
sdk list
```

You have some choices of [JDKs](https://sdkman.io/jdks) to choose from. 

```
sdk list java
```

I would suggest Amazon's Corretto if you will be deploying to AWS as it is always a good idea to have development, staging and production environment parity whenever applicable. 

You can also use AdoptOpenJDK or [the magical GraalVM](https://www.graalvm.org/docs/why-graal/) (**strongly recommended**) if you are a polyglot developer or want to experience the best available high performance VM.

For Corretto:

```
sdk install java 11.0.4-amzn
``` 

For GraalVM:

```
sdk install java 20.0.0.r11-grl
```

> Please update the version numbers in this article yourself in the future. For SDKMAN, you can use ```sdk list <package>``` to see available versions.

## Spring Boot

Install springboot: 

```
sdk install springboot
spring --version
```
 
Let's run an obligatory hello world to see if everything is running fine using a helloWorld.groovy file with the following content: 

```
@RestController
class SimpleWebApplication {
  
  @RequestMapping("/")
  String welcome() {
    "Hello World!"
  }
}
```

```
spring run helloWorld.groovy
```

This command will resolve all dependencies and start a tomcat install on the default port 8080. Check your browser or ```curl localhost:8080``` to see if ```Hello World!``` has been displayed. 


# Scala and Play

You should strongly consider using Scala and Play if you are interested in leveling up from Spring and Java. You can still use Spring Data and other awesome Spring modules in Scala/Play.

Installing Scala and sbt is simple:

```
sdk install sbt
sdk install scala
```

You can now create a sample Scala Play app with a single command:

```
sbt new playframework/play-scala-seed.g8
```

To run it simply type:

```
sbt run
```

This downloads all the dependencies and starts the system. You can also find a Java seed for Play and use Java with Play. Java APIs now have feature parity with Scala APIs in Scala but it is still a better dev experience when you use Scala. 

In a browser, enter ```localhost:9000``` to view the welcome page.

## Nodejs

We will be making use of nodejs' package manager npm, which comes bundled with nodejs. Download it from the [download page](https://nodejs.org/en/download/) of their site or via your package manager as explained [here](https://github.com/nodesource/distributions/blob/master/README.md). For example, to get Node.js v13.x (with full ICU/i18n support by default) on Ubuntu you would run: 

```
curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -
sudo apt install -y nodejs
```

It is a bad idea to use sudo with npm for security reasons. A simple better solution is to set it to install packages to your home directory and then recursively ```chown``` the npm directory with your user and group. 

```
mkdir -p ~/.npm/prefix

npm config set prefix ~/.npm/prefix

sudo chown -R $USER:`id -g -n $USER` ~/.npm/prefix
```


Now we need to update the path environment variables by adding the following in any one among ```~/.bash_profile``` or ```~/.bashrc``` or ```~/.profile``` files. 

```
# set node to use user's chowned directory
export PATH="$PATH:$HOME/.npm/prefix/bin"
export NODE_PATH="$NODE_PATH:$HOME/.npm/prefix/lib/node_modules"
```

After saving the above addition to the file, you have source the file e.g.

```
source ~/.profile
```

It is a good idea to enable the use of npm's cache whenever possible, especially when you have a lot of projects with similar dependencies. This is effectively the same as setting the now deprecated 'cache-min' option to  ```9999999```: 

```
npm config set prefer-offline
```

## Angular

After nodejs and npm have been installed and configured, install angular CLI globally: 

```
npm install -g @angular/cli
```
 

Now create and run your angular hello world using ```ng new``` and ```ng serve```: 

```
ng new hello-world --defaults
cd hello-world
ng serve -open
```

In your browser you can see your new angular application being served at ```localhost:4200```.

## IDEs and Editors

For IDEs, you could use Spring Tool Suite (STS) version of Eclipse for Spring and Visual Studio for Angular. For working on both using the same IDE, you can also install STS on Visual Studio Code or just use Intellij Ultimate, which would be an expensive option but a worthwhile one if your company/team decides to use it. In case your IDE does not recognize the SDKMAN installed JDK, create these symlinks to the usual locations: 

```
sudo ln -s ~/.sdkman/candidates/java/current/bin/javac /usr/bin/javac
sudo ln -s ~/.sdkman/candidates/java/current/bin/java /usr/bin/java
```

## Bon Voyage!

Now we are all set to explore Scala, Play, Spring and Angular in the future installments of this series on nep.work stack related tutorials. 

We will also use Java 11+, Scala 2.13+ & Typescript 3.8+ from this setup for exploring advanced CS, category theory and other pure mathematics concepts in the  [Mathematics' (An)architecture series](https://risav.dev/mathematics-architecture-and-processes-ck5ic92qa03jzqks1l2gv7lob) .
​