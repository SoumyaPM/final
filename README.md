# final{
  "name": "fri",
  "jest": {
    "collectCoverage": true,
    "collectCoverageFrom": [
      "**/src/**/*.{js}",
      "!**/src/main.js",
      "!**/src/containers/**",
      "!**/src/layouts/**",
      "!**/src/mock-data/**",
      "!**/src/static/**",
      "!**/src/store/**",
      "!**/src/styles/**",
      "!**/src/routes/index.js",
      "!**/src/routes/**/index.js",
      "!**/src/routes/Test/**",
      "!**/src/routes/**/containers/**",
      "!**/src/routes/**/interfaces/**"
    ],
    "coverageDirectory": "<rootDir>/tests/coverage",
    "moduleNameMapper": {
      ".scss$": "<rootDir>/tests/SCSSStub.js"
    },
    "verbose": true
  },
  "version": "0.0.0-alpha.1",
  "description": "Finance Reporting",
  "main": "index.js",
  "engines": {
    "node": ">=4.5.0",
    "npm": "^3.0.0"
  },
  "scripts": {
    "clean": "rimraf dist",
    "compile": "better-npm-run compile",
    "lint": "eslint bin build config server src tests",
    "lint:fix": "npm run lint -- --fix",
    "start": "better-npm-run start",
    "dev": "better-npm-run dev",
    "test": "jest",
    "test:watch": "npm test -- --watch",
    "deploy": "better-npm-run deploy",
    "deploy:dev": "better-npm-run deploy:dev",
    "deploy:prod": "better-npm-run deploy:prod",
    "codecov": "cat coverage/*/lcov.info | codecov"
  },
  "betterScripts": {
    "compile": {
      "command": "node bin/compile",
      "env": {
        "DEBUG": "app:*"
      }
    },
    "dev": {
      "command": "nodemon bin/server --ignore dist --ignore coverage --ignore tests --ignore src",
      "env": {
        "NODE_ENV": "development",
        "DEBUG": "app:*"
      }
    },
    "deploy": {
      "command": "npm run lint && npm run test && npm run clean && npm run compile",
      "env": {
        "DEBUG": "app:*"
      }
    },
    "deploy:dev": {
      "command": "npm run deploy",
      "env": {
        "NODE_ENV": "development",
        "DEBUG": "app:*"
      }
    },
    "deploy:prod": {
      "command": "npm run deploy",
      "env": {
        "NODE_ENV": "production",
        "DEBUG": "app:*"
      }
    },
    "start": {
      "command": "node bin/server",
      "env": {
        "DEBUG": "app:*"
      }
    },
    "test": {
      "command": "node ./node_modules/karma/bin/karma start webpack-build/karma.conf",
      "env": {
        "NODE_ENV": "test",
        "DEBUG": "app:*"
      }
    }
  },
  "dependencies": {
    "babel-loader": "^6.2.5",
    "babel-plugin-recharts": "^1.1.0",
    "babel-plugin-transform-runtime": "^6.15.0",
    "babel-preset-es2015": "^6.14.0",
    "babel-preset-react": "^6.11.1",
    "babel-preset-stage-0": "^6.3.13",
    "babel-runtime": "^6.11.6",
    "better-npm-run": "0.0.11",
    "bluebird": "^3.4.6",
    "chart.js": "^1.1.1",
    "css-loader": "^0.25.0",
    "cssnano": "^3.7.4",
    "debug": "^2.2.0",
    "extract-text-webpack-plugin": "^1.0.0",
    "file-loader": "^0.9.0",
    "font-awesome": "^4.6.3",
    "fs-extra": "^0.30.0",
    "html-webpack-plugin": "^2.22.0",
    "imports-loader": "^0.6.5",
    "ip": "^1.1.2",
    "json-loader": "^0.5.4",
    "lodash": "^4.16.4",
    "nock": "^9.0.13",
    "node-sass": "^3.7.0",
    "normalize.css": "^4.1.1",
    "postcss-loader": "^0.13.0",
    "promise-polyfill": "^6.0.2",
    "react": "^15.4.1",
    "react-addons-create-fragment": "^15.4.0",
    "react-addons-css-transition-group": "^15.3.2",
    "react-bootstrap": "^0.30.5",
    "react-bootstrap-typeahead": "^0.9.4",
    "react-chartjs": "^0.8.0",
    "react-chartjs-2": "^1.5.1",
    "react-codemirror": "^1.0.0",
    "react-d3": "^0.4.0",
    "react-d3-core": "^1.3.9",
    "react-d3-tooltip": "^1.4.14",
    "react-datepicker": "^0.32.0",
    "react-dnd": "^2.1.4",
    "react-dom": "^15.4.1",
    "react-highlight-words": "^0.6.0",
    "react-redux": "^4.4.5",
    "react-router": "^2.8.0",
    "react-select": "^1.0.0-rc.2",
    "react-split-pane": "^0.1.57",
    "react-tabs": "^1.0.0",
    "react-timeago": "^3.2.0",
    "react-toggle": "^2.2.1",
    "react-tooltip": "^3.3.0",
    "react-treeview": "^0.4.6",
    "reactjs-mappletooltip": "^1.4.63",
    "recharts": "^0.19.0",
    "redux": "^3.6.0",
    "redux-mock-store": "^1.2.3",
    "redux-thunk": "^2.0.0",
    "rimraf": "^2.5.4",
    "sass-loader": "^4.0.0",
    "sql-formatter": "^1.2.0",
    "style-loader": "^0.13.1",
    "url-loader": "^0.5.6",
    "webpack": "^1.12.14",
    "whatwg-fetch": "^1.0.0",
    "yargs": "^5.0.0"
  },
  "devDependencies": {
    "babel-core": "^6.17.0",
    "babel-eslint": "^6.0.0-beta.6",
    "babel-jest": "^20.0.1",
    "babel-plugin-istanbul": "^2.0.1",
    "babel-polyfill": "^6.16.0",
    "chai": "^3.4.1",
    "chai-as-promised": "^5.3.0",
    "chai-enzyme": "^0.5.0",
    "cheerio": "^0.20.0",
    "codecov": "^1.0.1",
    "connect-history-api-fallback": "^1.3.0",
    "enzyme": "^2.8.2",
    "eslint": "^3.0.1",
    "eslint-config-standard": "^6.0.0",
    "eslint-config-standard-react": "^4.0.0",
    "eslint-plugin-babel": "^3.2.0",
    "eslint-plugin-promise": "^2.0.0",
    "eslint-plugin-react": "^6.0.0",
    "eslint-plugin-standard": "^2.0.0",
    "express": "^4.14.0",
    "jasmine-core": "^2.3.4",
    "jest": "^20.0.1",
    "karma": "^1.0.0",
    "karma-chrome-launcher": "^0.2.1",
    "karma-cli": "0.1.1",
    "karma-coverage": "^1.0.0",
    "karma-jasmine": "^0.3.6",
    "karma-jasmine-ajax": "^0.1.13",
    "karma-mocha": "^1.0.1",
    "karma-mocha-reporter": "^2.0.0",
    "karma-phantomjs-launcher": "^1.0.2",
    "karma-sourcemap-loader": "^0.3.6",
    "karma-spec-reporter": "0.0.22",
    "karma-webpack-with-fast-source-maps": "^1.9.2",
    "mocha": "^3.0.1",
    "modernizr": "^3.5.0",
    "modernizr-loader": "^1.0.1",
    "nodemon": "^1.10.2",
    "phantomjs-prebuilt": "^2.1.12",
    "react-addons-test-utils": "^15.0.0",
    "react-bootstrap": "^0.30.5",
    "react-test-renderer": "^15.5.4",
    "redbox-react": "^1.2.10",
    "sinon": "^1.17.5",
    "sinon-chai": "^2.8.0",
    "webpack-dev-middleware": "^1.6.1",
    "webpack-hot-middleware": "^2.12.2"
  }
}
