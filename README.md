## A [Meteor](http://meteor.com) package for [Normalize.scss](https://github.com/appleboy)

>
  Normalize.css is a customisable CSS file that makes browsers render all elements more consistently and in line with modern standards. The project relies on researching the differences between default browser styles in order to precisely target only the styles that need or benefit from normalizing.



## Install

1. Make sure to add sass support to your meteor app:

  ```bash
  meteor add fourseven:scss
  ```

2. From within your Meteor app's directory:

  ```bash
  meteor add httpstr:normalize.scss
  ```


## Usage

1. Simply import Normalize.scss at the top of your sass file below any other `@import`

  `*.scss`
  ```scss
  @import "{httpstr:normalize.scss}/normalize";
  ```
  
  `*.sass`
  ```sass
  @import "{httpstr:normalize.scss}/normalize"
  ```

---

## Important Note
Because Meteor will attempt to compile you app's local stylesheets prior to copying the server assets directory, the first time you run the app after installing the package your app will complain that it is unable to find it. For the moment this can be resolved by either stopping and restarting the app, at which point you should no longer get this error message, our running `touch` on you local stylesheet thats attempting to access the package, triggering a reload.
