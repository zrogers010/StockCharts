#!/usr/bin/python
import subprocess
import smtplib
from subprocess import PIPE

def do_cmd(command):
        return subprocess.check_output(command.split(" "))
do_cmd("cleos -u http://mainnet.genereos.io get info")
