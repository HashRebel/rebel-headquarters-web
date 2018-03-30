#!/bin/bash
echo -n "Enter your username and press [enter]:"
read user

ssh "$user"@167.99.98.24
