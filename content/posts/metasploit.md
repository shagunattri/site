---
author:
  name: "Shagun attri"
date: 2020-09-12
linktitle: Metasploit
title: THM - Metasploit
type:
- post
- posts
weight: 10
series:
categories:
  - security
tags:
  - rapid7
  - metasploit
  - thm
---

Metasploit, an open-source pentesting framework, is a powerful tool utilized by security engineers around the world. Maintained by Rapid 7, Metasploit is a collection of not only thoroughly tested exploits but also auxiliary and post-exploitation tools. Throughout this room, we will explore the basics of using this massive framework and a few of the modules it includes.

Metasploit does support different types of port scans from within the auxiliary modules. Metasploit can also import other scans from nmap and Nessus just to name a few.  

```bash
#db init
msfdb init

#help
msfconsole -h

#do not print the banner
msfconsole -q 
    -q, --quiet                     

#check that we've connected to the database
db_status

#help menu
?
```

```bash

 search
Usage: search [<options>] [<keywords>:<value>]

Prepending a value with '-' will exclude any matching results.
If no options or keywords are provided, cached results are displayed.

OPTIONS:
  -h                Show this help information
  -o <file>         Send output to a file in csv format
  -S <string>       Regex pattern used to filter search results
  -u                Use module if there is one result

Keywords:
  aka         :  Modules with a matching AKA (also-known-as) name
  author      :  Modules written by this author
  arch        :  Modules affecting this architecture
  bid         :  Modules with a matching Bugtraq ID
  cve         :  Modules with a matching CVE ID
  edb         :  Modules with a matching Exploit-DB ID
  check       :  Modules that support the 'check' method
  date        :  Modules with a matching disclosure date
  description :  Modules with a matching description
  fullname    :  Modules with a matching full name
  mod_time    :  Modules with a matching modification date
  name        :  Modules with a matching descriptive name
  path        :  Modules with a matching path
  platform    :  Modules affecting this platform
  port        :  Modules with a matching port
  rank        :  Modules with a matching rank (Can be descriptive (ex: 'good') or numeric with comparison operators (ex: 'gte400'))
  ref         :  Modules with a matching ref
  reference   :  Modules with a matching reference
  target      :  Modules affecting this target
  type        :  Modules of a specific type (exploit, payload, auxiliary, encoder, evasion, post, or nop)

Examples:
  search cve:2009 type:exploit
  search cve:2009 type:exploit platform:-linux
```

```bash
    use           Interact with a module by name or search term/index

    info          Displays information about one or more modules

    connect       Communicate with a host
```
 	

Entirely one of the commands purely utilized for fun, what command displays the motd/ascii art we see when we start msfconsole (without -q flag)?
>banner

```
    set           Sets a context-specific variable to a value

    setg          Sets a global variable to a value

    get           Gets the value of a context-specific variable

    unset         Unsets one or more context-specific variables

    spool         Write console output into a file as well the screen
```



Metasploit consists of six core modules that make up the bulk of the tools you will utilize within it. Let's take a quick look through the various modules, their purposes, and some of the commands associated with modules.

Leaving a Metasploit console running isn't always convenient and it can be helpful to have all of our previously set values load when starting up Metasploit. What command can we use to store the settings/active datastores from Metasploit to a settings file? This will save within your msf4 (or msf5) directory and can be undone easily by simply removing the created settings file
>save




Finding various modules we have at our disposal within Metasploit is one of the most common commands we will leverage in the framework. What is the base command we use for searching?
>search

Once we've found the module we want to leverage, what command we use to select it as the active module?
>use

How about if we want to view information about either a specific module or just the active one we have selected?
>info

Metasploit has a built-in netcat-like function where we can make a quick connection with a host simply to verify that we can 'talk' to it. What command is this?
>connect

what command do we use to change the value of a variable?
>set

 Metasploit supports the use of global variables, something which is incredibly useful when you're specifically focusing on a single box. What command changes the value of a variable globally?  
 >setg

Now that we've learned how to change the value of variables, how do we view them?
>get

How about changing the value of a variable to null/no value?
>unset

What command can we use to set our console output to save to a file?
>spool

What command can we use to store the settings/active datastores from Metasploit to a settings file? This will save within your msf4 (or msf5) directory and can be undone easily by simply removing the created settings file.
>save

Easily the most common module utilized, which module holds all of the exploit code we will use?
>exploit

Used hand in hand with exploits, which module contains the various bits of shellcode we send to have executed following exploitation?
>payload


Which module is most commonly used in scanning and verification machines are exploitable? This is not the same as the actual exploitation of course.
>auxiliary

One of the most common activities after exploitation is looting and pivoting. Which module provides these capabilities?
>post

Commonly utilized in payload obfuscation, which module allows us to modify the 'appearance' of our exploit such that we may avoid signature detection?
>encoder

which module is used with buffer overflow and ROP attacks?
>nop

Not every module is loaded in by default, what command can we use to load different modules?
>load

Our initial shell/process typically isn't very stable. Let's go ahead and attempt to move to a different process. First, let's list the processes using the command 'ps'. What's the name of the spool service?
>spoolsv.exe
What command do we use to transfer ourselves into the process? This won't work at the current time as we don't have sufficient privileges but we can still try!
>migrate

hat command can we run to find out more information regarding the current user running the process we are in?
>getuid

How about finding more information out about the system itself?
>sysinfo

what do we run to load mimikatz (more specifically the new version of mimikatz) so we can use it? 
>load kiwi

figure out the privileges of our current user, what command do we run?
>getprivs

What command do we run to transfer files to our victim computer?
>upload

How about if we want to run a Metasploit module?
>run

what command do we run to figure out the networking information and interfaces on our victim?
>ipconfig

what command can we run in our meterpreter session to spawn a normal system shell?
>shell

Let's go ahead and run the command `run autoroute -h`, this will pull up the help menu for autoroute. What command do we run to add a route to the following subnet: 172.18.1.0/24? Use the -n flag in your answer.
>run autoroute -s 172.18.1.0 -n 255.255.255.0

we can start a socks4a proxy server out of this session. Background our current meterpreter session and run the command `search server/socks4a`. What is the full path to the socks4a auxiliary module?
>auxiliary/server/socks4a

Once we've started a socks server we can modify our /etc/proxychains.conf file to include our new server. What command do we prefix our commands (outside of Metasploit) to run them through our socks4a server with proxychains?
>proxychains