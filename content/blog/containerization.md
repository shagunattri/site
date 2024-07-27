---
author:
  name: "Shagun attri"
date: 2021-01-19
linktitle: 19-01-2021
title: Containerization
type:
- post
- posts
weight: 10
series:
categories:
  - dev
tags:
  - cloud
  - devops
aliases:
- /blog/containerization/
---

### Containerizaiton & Docker

Before introduction to docker we used linux contaniers(LXC) and made our suitable environment by configuring different libraries & dependecies to develop our product.

Most of the time when pushing to production,the production environment/server setup had different or conflictiong dependencies that would not allow for deployment and then you have to manage these packages and dependencies to make sure they don't have conflicts and update.

### Conflicting dependencies
The addition of more and more dependencies to your project and making it all a mess when you try to add new projects with packages and dependencies of different version and different modules.

Managing all these  different version and diff modules is tiresome and exhausting.


Even when you want to encapsulate apps and add separation to your product development VMS were required and they a toll on the performance of the service/product.

Managing services and envs was difficult and setting up envs and simulating and reproducing envs was difficult or out of the question most of the time.

Frequent conflicts and using resources for starting,restarting,managing,testing was cumbersome and not all fun.


### The Containerization age

Containerization although an old concept and initially started with process isolation in the UNIX systems.

`chroot(1979)` was one of the first methods that introduced containerization then came `jails` to achieve separation in a modified runtime,shared environment to have isolation.

Abstracting away the userspace to create dependent and isolated systems sharing the same kernel.

Instead of using a layer of configuration,user separation and isolation was used to make environments.

Then came `solaris containers` and replaced `jails` with better features and operations.

`lXC` then made a way to manage processes but opened systems prone to more errors as they had to be made from scratch increasing the risks of compromised systems and operations.

then came `Docker` with 
- No manual development
- Better ps isolation
- New era of standardization
- Cross platform mvmnt


Docker is a tool that promises to `simplify,streamline` the process of `creating,packaging,distributing and using` software
on any platform at scale.

### What are containers?
`container` - is a lightweight isolated package of one or more executable and is packaged with its dependencies from various libraries,configuration files etc. encapsulated and contained in a single unit.

The packages can run on any platform.

Contanerization involves bundling an application with all it's dependencies/config/libs to run in different computing environments.

`Virtualization` also sounds similar and were the standard before this with isolation.
Software is packaged with the OS and is memory hungry while the package itself requires less memory and power.

`Containers` do the same thing but at a much lower cost.

An OS is divided in two different parts the user space and the kernel space.
The user space consists of applications,GUI,CMD-line apps and everything beyond the scope of kernel responsibility.

When a prog is executed and makes sys calls to the kernel and most applications work this way.

Containers also create a  process in the user space but process is a full-fledged userspace in itself and contains
the program pre packaged and is segregated.

When we are making containers we are actually creating a userspace that contains the programs that the main software wants to ship.
Thus is lightweight and managing is easier with less computing power.

Now the average dev can do more with his average sub-par computers.

Both contanerization and virtualization have their features and diffrences,while containerization is

- OS  level abstracation 
- limited resources
- containers share the same kernel 
- process level isolation and possibly less secure

Virtualization is
- hardware level abstraction
- all os resources available
- virtual machine runs its own OS
- fully isolated and more secure.


Abstract resources are used to package and ship standalone software.
The difference is in the level of abstraction and how they achieve it with isoaltion,security and the features they provide.

Simply try and ship code in containers to later distribute on any platform just a OS is required at the end to work with your projects.
