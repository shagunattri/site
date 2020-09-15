### Password breaches and it's Types

As a Developer and software engineer it is always a priority to make the perfect software solution with the best security policies implemented.

Passwords are often a way to secure products and act as a barrier to access information of an individual or major corporations.
We hear about these passwords being leaked and breached by hackers on the internet being referred to as password breaches.

A Password breach is a security violation where private passwords are exposed/leaked into to an untrusted environment.
Password breaches are a form of data breach allows full access to the account and compromises the software security model of the application.

Thus, it is necessary to put forward strict guidelines to protect users confidential data as a breach of password can allow for full unauthorized access to the users account and data.

Passwords have been breached of many major organisations and come up often in the news where hackers steal and hack software to gain access to user passwords.
Passwords of these major services are breached using a variety of techniques and tools.

Password breaches majorly occur when a loop hole in the system inturn leads to access of passwords of users.

These loopholes are exploited by hackers to lure the user into leaking their passwords and leading to a big password leak.

**Passwords are breached using a range of techniques involving:**

### Password Guessing

The easiest way a password is breached is by simply guessing the password of the user either by social engineering the user or using the personality traits and behaviour to guess the passowrds.

### Phishing Campaigns/Scams

Many hackers try to phish users by using expired password scams and other creative ways of luring users into entering their credentials in a webmail or webpage to then collect the information.

### Keylogging

Keylogging allows to register the keystrokes as the users types the password on the machine to then know the password. A wide scale attack of this kind can lead to a large data breach.

### Stolen Information

Many times,hackers and cybercriminals sell data of users from other data breaches in forums where passwords of other services are also lead to knowning passwords of other services used by the user and inturn gain access.

### Malware

Injecting malware into users/companies services is also a method followed regularly to gain access to passwords and use them for unauthorized access.

### Direct Hacks

As we discussed earlier,sometimes during the development of the software a lot of the loopholes and vulnerabilities in a piece of software can also lead to a password breach where a hacker directly exploits the vulnerabilitiy to access the passwords of users

### Cracking

It is always recommended that you hash passwords and store them with a salt attached to them. If the hashing algorithms fails to hash properly or can be guessed easily it leads to a kind of attack known as cracking where using computational power you try to guess the passwords of the users using cracking tools such as hashcat and john the ripper.

### Bruteforce Attacks

The most common technique of breaching passwords is by using a wordlist of common passowrds from different past breaches and trying to login with these passwords to eventually guess the password of the user.

### To prevent yourself from password breaches

- Use a password manager
- Use 2FA/Multi factor Authentication
- Use strong passwords
- Use passphrases instead of passwords

And always stay alert and cautious when sharing private information online.

### Protect your digital identity

One easy way to protect yourself from prassword breaches and stay informaed when you are breached is to use tools such as [h8mail](https://github.com/khast3x/h8mail).

H8mail is an Email OSINT & Password breach hunting tool, locally or using premium services. Supports chasing down related email.

H8mail is an email OSINT and breach hunting tool using different breach and reconnaissance services, or local breaches such as Troy Hunt's "Collection1" and the infamous "Breach Compilation" torrent.

H8mail is very flexible with finding emails. Since h8mail uses regular expressions to catch emails, you can target documents or html pages. A h8mail will efficiently look for email patterns to target.
CLI.


#### Install

To install h8mail, run this command in your terminal:

```bash
$ pip3 install h8mail
```

#### Update

```bash
$ pip3 install --upgrade h8mail
```

Use `--user` at the end if getting a permission message from pip

### Usage

Query for a single target

```bash
$ h8mail -t target@example.com
```

Query for list of targets, indicate config file for API keys, output to pwned_targets.csv
```bash
$ h8mail -t targets.txt -c config.ini -o pwned_targets.csv
```

### HaveibeenPwned

One other service is to use a service called [haveibeenpwned](https://haveibeenpwned.com/) which lets you check if you have an account that has been compromised in a data breach.

![Pwned](https://is5-ssl.mzstatic.com/image/thumb/Purple118/v4/d5/e5/dd/d5e5dda3-2a01-cc44-cc9e-59d926a66eef/source/256x256bb.jpg)

Al lot of services have since been tracking passwords breached to help you secure your account before the damage is done.

Some other services to check out are:

- Firefox Monitor
- Google Security updates/Notifications
- Scylla.sh
- and last but not least Password Managers.
