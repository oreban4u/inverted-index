[![Code Climate](https://codeclimate.com/github/andela-obanwo/inverted-index/badges/gpa.svg)](https://codeclimate.com/github/andela-obanwo/inverted-index)
[![Coverage Status](https://coveralls.io/repos/github/andela-obanwo/inverted-index/badge.svg)](https://coveralls.io/github/andela-obanwo/inverted-index) [![Build Status](https://travis-ci.org/andela-obanwo/inverted-index.svg)](https://travis-ci.org/andela-obanwo/inverted-index)

## Inverted-Index
An application that creates an Index from a JSON array of one or more text objects and  allows you search for words in the created Index.

#### Features
- Accepts Upload of JSON file in below format.
```
[
    {"title": "Sesame Street",
    "text":"Sesame Street was and still remains my personal favourite of all the Kids Televison I watched growing up. I find
    it really fun and most importantly Educative"
    },
    {"title": "Andela",
    "text": "Andela has one of the best work environments and culture that I've ever come accross If not the best. It really is a dream place to learn and work."
    }
]
```
- Creates Index of all objects with 'title' and 'text' keys in uploaded file.
- Allows Searching through the created index.

#### How to use
The Application is available:
- On the internet via [https://inverted-index-andela-obanwo.herokuapp.com](https://inverted-index-andela-obanwo.herokuapp.com/)
- And on any local machine after the following steps:
    ```
    git clone https://github.com/andela-obanwo/inverted-index.git
    ```

    * Navigate to the 'inverted-index' directory via your terminal

    * Install all the dependencies (you must have installed [Nodejs](nodejs.org)):

    ```
    npm install
    ```

    - Run Tests for the application with:

    ```
    npm test
    ```

  - Start the Application with:
  ```
    npm start
    ```

  - Access the application via http://localhost:4000/


#### The application was built using the following Technologies and Services:
- Gulp
- Karma
- Jasmine
- Travis CI
- Coveralls
- Hound CI
- AngularJS
- Bootstrap

#### Application Limitations
- This version of the app does not feature multiple file uploads
