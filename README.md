# Classic Arcade Game Clone Project

## Table of Contents

-   [Instructions](#instructions)
-   [Project Overview](#Project-Overview)
-   [To get the Starter Code](#To-get-the-Starter-Code)
-   [Tools used in this game](#Tools-used-in-this-game)
-   [Development Strategy](#Development-Strategy)
-   [How to play the game](#How-to-play-the-game)
-   [Contributing](#contributing)

## Instructions

-   This project based on **object-oriented-javaScript**
-   The functions we used in this project are **object-oriented** - either class functions (like `Player` and `Enemy`) or class prototype functions such as `Enemy.prototype.checkCollisions`. Also make sure that the keyword `this` is used appropriately within your class and class prototype functions to refer to the object the function is called upon.

## Project Overview

It will be provided visual assets and a game loop engine; using these tools you must add a number of entities to the game including the player characters and enemies to recreate the classic arcade game Frogger.

## To get the Starter Code

You won’t have to build the game from scratch. You can download or clone them from our repository.
Github link:<https://github.com/udacity/frontend-nanodegree-arcade-game>

-   The repository contains `css`, `images`, and `js` folders, as well as an `index.html` and a `README.md` file.
-   The `css` folder contains a `style.css` file which you do not need to edit
-   The `images` folder contains the png image files, which are used when displaying the game. The images for the player and enemy character are going to be loaded from this folder.
-   The `js` folder also contains the app engine needed to run the game and a `resources.js` file. You do not need to edit these files.
-   Opening `index.html` should load the game
-   The `README.md` file should contain instructions on how to load and play the game (you will need to add those instructions).
    Once you have downloaded the files we have provided, you will have to edit `app.js` to build the game.

## Tools used in this game

Object-Oriented JavaScript Scopes, closures and prototype chains The 'this' keyword Superclasses and subclasses HTML5 Canvas

## Development Strategy

Inside the `app.js` file, you will need to implement the `Player` and the `Enemy`classes, using [Object-Oriented JavaScript](https://www.udacity.com/course/object-oriented-javascript--ud711). Be sure to review all code comments written in `app.js`. Part of the code for the `Enemy` is provided to you, and you will need to complete the following:

-   The Enemy function, which initiates the Enemy by:
    -   Loading the image by setting this.sprite to the appropriate image in the image folder (already provided)
    -   Setting the `Enemy` initial location (you need to implement)
    -   Setting the `Enemy` speed (you need to implement)
-   The `update` method for the Enemy:
    -   Updates the `Enemy` location (you need to implement)
    -   Handles collision with the Player (you need to implement)
        You can add your own `Enemy` methods as needed. You will also need to implement the `Player` class, and you can use the Enemy class as an example on how to get started. At minimum you should implement the following:
-   The `Player` function, which initiates the Player by:
    -   Loading the image by setting `this.sprite` to the appropriate image in the `image` folder (use the code from the `Enemy` function as an example on how to do that)
    -   Setting the `Player` initial location
-   The `update` method for the Player (can be similar to the one for the Enemy)
-   The `render` method for the Player (use the code from the render method for the `Enemy`)
-   The `handleInput` method, which should receive user input, `allowedKeys` (the key which was pressed) and move the player according to that input. In particular:
    -   Left key should move the player to the left, right key to the right, up should move the player up and down should move the player down
    -   Recall that the player cannot move off screen (so you will need to check for that and handle appropriately)
    -   If the player reaches the water the game should be reset by moving the player back to the initial location (you can write a separate reset `Player` method to handle that)
        You can add your own `Player` methods as needed as well. Once you have completed implementing the `Player` and `Enemy`, you should instantiate them by:
-   Creating a new `Player` object
-   Creating several new Enemies objects and placing them in an array called `allEnemies`
    Beyond that, feel free to add additional functionality to the game. You can add more code to the `app.js` file and to the `Enemy` and Player classes to accomplish that.

## How to play the game

When you reach the water, you win the game and the game will start over. If you run into an enemy bug, you will die and the game will start over. The enemy bugs are running across the screen at random locations and random speeds. Use the arrow keys to move left, right, forward or backward.

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.
