# Contacts App 
###### *Proof of Concept*


A simplified contacts application demonstrating SPA technologies. 

## Table of Contents

* [Technology Stack](#technology-stack)
* [Development Roadmap](#development-roadmap)
  * [Features](#features)
  * [Issues](#issues)
  * [Improvements](#improvements)
  * [Tests](#tests)
* [Code Overview](#code-overview)
  * [Modules](#modules)
  * [Features](#features)
* [Live App](#live-app)
* [Local Install](#local-install)
  * [Prerequisites](#prerequisites)
  * [Install](#install)
  * [Build](#build)
* [License](#license)
  

## Technology Stack

| Technology        | Options                           | Preference  | Reason                                                                   |Decision|Afterthought|
| ----------------- |-----------------------------------|-------------| -------------------------------------------------------------------------|----------|----|
| JS SPA framework  | Angular 1.6+, Angular 4+, React   | Angular 4+  | Light, Modular, Workflow automations                          |Angular 4+|    | 
| JS 'Dialect'      | ES2015, ES2016, ES2017, TypeScript| ES2015      | Native ES, OOP enhancements, 98%+- support in evergreen browsers         |TypeScript|    |
| Storage           | SQL, MongoDB, LocalStorage        | MongoDB     | Proper storage, Scalable, Data restructuring is simple, Fast kick start  |          |    |
| Backend           | PHP, C#, Node                     | Node        | Fits well with rest of tech stack, No outstanding downsides              |          |    |
| Rest API Framework| [Node:] Express, Hapi             | Express     | Straightforward, Previous experience                                     |          |    |
| UI Framework      | Angular Material, Bootstrap       |             |                                                                          |          |    |


## Development Roadmap 
Legend:  [optional] ~~Done~~ 

 ### Features 
 * ~~SPA structure~~
 * ~~Routing~~ 
 * ~~CRUD~~
 * Error handling
 * Storage
 * ~~Form validation~~
 * ~~[Search]~~ 
 * [Sort]
 * [Mailto]
 * UI
 * [User login + Authentication]
 ### Issues
 * Search input should be cleared on clickout 
 * Search should not display results for an empty strings
 ### Improvements
 * Clickout functionality should be its own directive 
 * [Details view should be in a popup]
 ### Tests
 * CRUD e2e test
 * Search component test
 * Collections module unit-test

## Code Overview

 ### Features
 ### Modules
 ##### Collections
 ##### Error handling

## Live App
[https://chayachechik.github.io/contacts-poc/](https://chayachechik.github.io/contacts-poc/)
## Local Install

  ### Prerequisites
  ### Install
  ### Build


## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

