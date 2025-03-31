---
author:
  name: "Shagun attri"
date: 2020-09-30
linktitle: Printer Hacking 101
title: THM - Printer Hacking 101
type:
- post
- posts
weight: 10
series:
categories:
  - security
tags:
  - printer hacking
  - 101
  - thm
---

### Printer Hacking 
>Learn about (and get hands on with) printer hacking and understand the basics of IPP.


### Unit 2

**Task #1**

` What port does IPP run on?`

Google is your friend.

>63?

### Unit 3

**Task #1**

` How would a simple printer TCP DoS attack look as a one-line command? `

Look around, the answer is hiding in plain sight. 
http://hacking-printers.net/wiki/index.php/Printer_Security_Testing_Cheat_Sheet

>while true; do nc printer 9100; ????

**Task 2**

`Review the cheat sheet provided in the task reading above. What attack are printers often vulnerable to which involves sending more and more information until a pre-allocated buffer size is surpassed?`


The question itself gives away the answer with the keyword `buffer` and we can work out from there and the cheatsheet also has a example for such a vulnerability.

>Buffer ????????

**Task 3**

`Connect to the printer per the instructions above. Where's the Fox_Printer located?`

Browse the site at port 631 and find the location of the printer from the printers tab in the site.

>?kidy's basement

**Task 4**

`What is the size of a test sheet?`

Navigate to the Fox_printer page and try to run a print test,look out for the size at the jobs where all the requests are available.

>1?