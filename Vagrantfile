# -*- mode: ruby -*-
# vi: set ft=ruby :

$script = <<SCRIPT
echo '# Starting shell provisioning. Log will be available in  logs/provision.log  inside project folder.'
echo '## Creating logs folder...'
mkdir -p /vagrant/_logs

echo '## Updating packages cache...'
sudo apt-get -y update &>/vagrant/_logs/provision.log

echo '## Installing ruby-dev...'
sudo apt-get -y install ruby-dev &>>/vagrant/_logs/provision.log

echo '## Installing Node.js...'
sudo apt-get -y install nodejs &>>/vagrant/_logs/provision.log

echo '## Installing Bundler...'
sudo gem install bundler &>>/vagrant/_logs/provision.log

echo '## Installing required gems. This may take a few minutes...'
cd /vagrant &>>/vagrant/_logs/provision.log && bundle install &>>/vagrant/_logs/provision.log

echo '## Configuring system...'

# Change directory to a shared `/vagrant` folder on login
echo "cd /vagrant" >> ~vagrant/.bashrc

# Start jekyll on future startups
sudo touch /etc/init/build-server.conf
echo 'description "DevTips build server"

start on vagrant-mounted
stop on runlevel [!2345]

expect fork
respawn
respawn limit 10 5

script
  cd /vagrant
  bundle exec jekyll serve --watch
end script
' | sudo tee -a /etc/init/build-server.conf >/dev/null

echo '## Starting Jekyll server...'
cd /vagrant &>>/vagrant/_logs/provision.log && bundle exec jekyll serve --watch --detach &>/vagrant/_logs/current_run.log

echo '# Completed provisioning, machine is ready.'
echo '# Website is served at:  http://localhost:9000/'
SCRIPT



VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "https://cloud-images.ubuntu.com/vagrant/trusty/20140716/trusty-server-cloudimg-i386-vagrant-disk1.box"

  config.vm.network "forwarded_port", guest: 9000, host: 9000

  config.vm.provision "shell", inline: $script, privileged: false
end
