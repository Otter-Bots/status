#! /bin/bash
echo "Setting up server ping API"
echo "Installing gh and git"
sudo apt install gh git
gh auth login
echo Creating user
useradd --disabled-password --gecos "" pingChecker
echo "move to user home"
cd /home/pingChecker
echo "clone repo"
git clone https://github.com/Otter-Bots/status.git
cd status
echo "Clear up clone"
rm -rf ./.git
rm -rf ./frontend/
rm -rf ./LICENSE README.md
mv ./serverPingAPI/ /home/pingChecker
rm ./serverPingAPI
echo "Install Node & npm & yarn"
curl -fsSL https://deb.nodesource.com/setup_19.x | sudo -E bash - &&\
sudo apt install -y nodejs
npm install yarn -g
echo "Install dependencies"
yarn install
echo "Setup .env"
echo "PORT=7681" >> .env