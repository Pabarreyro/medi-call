# MediCall

#### Powered by BetterDoctors , 2018

#### By Pablo Barreyro

## Description

A website where users may enter a medical issue (_i.e._, “sore throat”, "rash", _etc._) and receive a list of doctors in Portland who can treat their medical issue.

#### Specifications

Behavior | Input | Output
--- | --- | ---
Receive medical issue and return information about relevant doctors in Portland | "asthma" | Dr. David Jones, MD<br>Pulmonology<span style="float: right">_Accepting_</span><br>123 SW Medical Ave<br>Portland, OR 97212<br>(503)555-1234<br>[Jones Throat & Lung](#)
Receive a name and return a list of possible matching doctors in Portland | "Jones" | <ul><li>David Jones, MD</li><br><li>Sandra Jones, MD</li></ul>
Return a message if query response is empty | "Jonz" | "Sorry, your search was successful for the following reason: _Incorrect parameters (input data)_."
Return a message if API call is rejected | "Jones" | "Sorry, there are no doctors meeting that description."


## Setup/Installation Requirements

* Visit the [BetterDoctor API](https://developer.betterdoctor.com/) site and apply for a free API key.
* [View/clone directory](https://github.com/pabarreyro/super-galactic);
* Download/install technologies locally (_see below_);
* In command line: run "npm install" in cloned repo root directory.
* Place your API key in a _.env_ file in your root directory.

## Known Bugs

None.

## Technologies Used

* HTML, CSS, JavaScript
* [Bootstrap 4.1](https://getbootstrap.com/docs/4.0/getting-started/introduction/)
* [jQuery 3.2.1](https://jquery.com/upgrade-guide/3.0/)
* [Node.js](https://nodejs.org/en/download/package-manager/#macos) & [Node Package Manager](https://www.npmjs.com/get-npm)
* [Webpack](https://webpack.js.org/concepts/)
* [ESLint](https://eslint.org/docs/user-guide/configuring)
* [Jasmine](https://jasmine.github.io/pages/docs_home.html)
* [Karma](https://karma-runner.github.io/2.0/index.html)
* [Babel](https://babeljs.io/docs/setup/)

## License

[MIT](https://opensource.org/licenses/MIT)

Pablo Barreyro © 2018
