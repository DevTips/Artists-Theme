# Contributing

Thank you for considering to contribute to DevTips' Artists Theme.

I, Travis Neilson, am fascinated to see this community share knowledge, experience and thoughts about this project and industry in general, thus I would like to make it as simple as possible for you to make a contribution.



# Getting started

* Make sure you have a [GitHub account](https://github.com/signup/free)
* Make sure you are familiar with [Git basics](https://try.github.io/)
* [Fork this repository](https://help.github.com/articles/fork-a-repo) and clone your fork

You are now set to make changes to the Artists Theme!

Feel free to use your favorite programmer's editor. If you don't have one, I would recommend [Espresso](http://macrabbit.com/espresso/) (which I'm using in the videos; Mac, $75), [Sublime Text](http://www.sublimetext.com/) (Mac, Windows, Linux, $70), [TextWrangler](www.barebones.com/products/textwrangler/) (Mac OS, free) or [Notepad++](http://notepad-plus-plus.org/download/) (Windows, free).



# Building the site

After you've made your changes it's a good idea to test them, so I spend more time making videos and less time testing myself. :)

Since Artists Theme is built with Jekyll, you'll need a Jekyll server as well. Beware that Jekyll is not officially supported on Windows, but there is a [Windows-specific docs page](http://jekyllrb.com/docs/windows/#installation) that might help you to get it working. Nevertheless, I would recommend using [Vagrant virtual machine](#vagrant-virtual-machine-windows-mac-nix) if you are on Windows.

## Vagrant virtual machine (Windows, Mac, \*nix)

You can use a [Vagrant](http://www.vagrantup.com/) virtual machine provided with the project. The advantage of virtual machine is that it won't conflict with any software installed on your machine and should Just Work out-of-the-box.

* Make sure you have [VirtualBox](https://www.virtualbox.org/wiki/Downloads) installed
* Make sure you have [Vagrant](http://www.vagrantup.com/downloads.html) installed
* Open **terminal** (Mac, \*nix) or **command prompt** (Windows) and navigate into project folder, e.g.

  ```
  cd Artists-Theme
  ```

* Start Vagrant machine (first-time run might take up to 10 minutes to set up the virtual machine, depending on your Internet speed)

  ```
  vagrant up
  ```

* After VM has started, open [`http://localhost:9000/`](http://localhost:9000/) in your browser to see the website
* Make your changes. Jekyll inside the VM will watch for changes and rebuild the website, but make sure to refresh your browser to get the latest files.
* After testing your changes, commit them and update your fork, e.g.

  ```
  git commit -am "My changes."
  git push
  ```

* If you don't need Jekyll server anymore you can stop the VM (you can bring it up any time later with `vagrant up`)

  ```
  vagrant halt
  ```

* [Create a Pull Request](https://help.github.com/articles/creating-a-pull-request) so I can see your work
* If you are running low on disk space and comfortable with waiting a bit longer next time you want to start a Jekyll server, you can destroy VM completely

  ```
  vagrant destroy
  ```


## Using Bundler (Mac, \*nix)

You can use [Bundler](http://bundler.io/) to install the required Jekyll version and run it without conflicts with other versions of Jekyll on your system.

* Make sure you have [Node.js](http://nodejs.org/download/) installed
* Make sure you have Bundler installed

  ```
  sudo gem install bundler
  ```

* Navigate into project folder, e.g.

  ```
  cd Artists-Theme
  ```

* Run Bundler to install required gems

  ```
  bundle install
  ```

* Run Jekyll server with Bundler

  ```
  bundle exec jekyll serve --watch
  ```

* Website will be available at [`http://localhost:9000/`](http://localhost:9000/)
* Make your changes. Jekyll will watch for changes and rebuild the website, but make sure to refresh your browser to get the latest files.
* After testing your changes, commit them and update your fork, e.g.

  ```
  git commit -am "My changes."
  git push
  ```

* [Create a Pull Request](https://help.github.com/articles/creating-a-pull-request) so I can see your work


## Directly installing Jekyll (Mac, \*nix)

You can simply install Jekyll, but there are no guaranties it won't conflict with anything else on your system

* Make sure you have [Node.js](http://nodejs.org/download/) installed
* Install Jekyll as a global gem

  ```
  sudo gem install jekyll --version "=2.0.3"
  ```

* Navigate into project folder, e.g.

  ```
  cd Artists-Theme
  ```

* Run Jekyll server

  ```
  jekyll serve --watch
  ```

* Website will be available at [`http://localhost:9000/`](http://localhost:9000/)
* Make your changes. Jekyll will watch for changes and rebuild the website, but make sure to refresh your browser to get the latest files.
* After testing your changes, commit them and update your fork, e.g.

  ```
  git commit -am "My changes."
  git push
  ```

* [Create a Pull Request](https://help.github.com/articles/creating-a-pull-request) so I can see your work

# Thank you

Thank you for your contribution!
