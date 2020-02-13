webpackHotUpdate("main",{

/***/ "./src/pages/AddWine/addwine.js":
/*!**************************************!*\
  !*** ./src/pages/AddWine/addwine.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/NavBar/NavBar */ "./src/components/NavBar/NavBar.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context */ "./src/context.js");
/* harmony import */ var _components_WineError_WineErr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/WineError/WineErr */ "./src/components/WineError/WineErr.js");
/* harmony import */ var _ValError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ValError */ "./src/pages/AddWine/ValError.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_WineForm_WineForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/WineForm/WineForm */ "./src/components/WineForm/WineForm.js");
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../API */ "./src/API.js");
/* harmony import */ var _services_token_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/token-services */ "./src/services/token-services.js");
/* harmony import */ var _addwine_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./addwine.css */ "./src/pages/AddWine/addwine.css");
/* harmony import */ var _addwine_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_addwine_css__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/seeuagn/Projects/wine-vinyard/wine-vinyard/src/pages/AddWine/addwine.js";











class AddWine extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    this.handleAddWine = event => {
      event.preventDefault();
      const createNewWine = {
        winecat: event.target['wine-winecat'].value,
        date: event.target['date-input'].value,
        company_name: event.target['company-input'].value,
        name: event.target['wine-name'].value,
        content: event.target['wine-content'].value,
        rating: event.target['wine-rating'].value
      };
      fetch(`${_API__WEBPACK_IMPORTED_MODULE_7__["default"].API_ENDPOINT}/wine`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'authorization': `bearer ${_services_token_services__WEBPACK_IMPORTED_MODULE_8__["default"].getAuthToken()}`
        },
        body: JSON.stringify(createNewWine)
      }).then(results => {
        if (!results.ok) return results.json().then(e => Promise.reject(e));
        return results.json();
      }).then(wine => {
        this.context.addWine(wine);
        this.props.history.push('/wine');
      }).catch(error => {
        console.error({
          error
        });
      });
    };

    this.state = {
      winecat: {
        value: '',
        touched: false
      },
      date: {
        value: ''
      },
      company_name: {
        value: '',
        touched: false
      },
      name: {
        value: '',
        touched: false
      },
      content: {
        value: '',
        touched: false
      },
      rating: {
        value: null,
        touched: false
      }
    };
    const year = 1899;
    this.years = Array.from(new Array(200), (val, index) => index + year);
  } //update state


  handleUpdate(e) {
    const type = e.target.id;
    this.setState({
      [type]: {
        value: e.target.value,
        touched: true
      }
    });
  } //validate inputs


  validateWincat() {
    const winecat = this.state.winecat.value;

    if (winecat === 'Please select one') {
      return 'You must select a Wine Category';
    }
  }

  validateDate() {
    const date = this.state.date.value;
    console.log(date);

    if (date === '1899') {
      return 'You must select a date';
    }
  }

  validateComp() {
    const compName = this.state.company_name.value;

    if (compName === '') {
      return "You must provide the company name";
    }
  }

  validateName() {
    const name = this.state.name.value;

    if (name === '') {
      return "You must provide the name of Wine";
    }
  }

  validateContent() {
    const content = this.state.content.value;

    if (content === '') {
      return "You must provide some information about the Wine";
    }
  }

  validateRate() {
    const rate = this.state.rating.value;

    if (rate === '0') {
      return "Please grade the Wine";
    }
  }

  render() {
    //const { wines = [] } = this.context
    console.log(this.state.date);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      className: "addWine-form",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, "Add A Wine"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_WineForm_WineForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onSubmit: this.handleAddWine,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wine__field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_WineError_WineErr__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "wine-winecat-select",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, "Wine Color"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      id: "winecat",
      name: "wine-winecat",
      onChange: e => this.handleUpdate(e),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Please select one",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, "Please select one"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Red Wine",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }, "Red Wine"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "White Wine",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, "White Wine")), this.state.winecat.touched && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ValError__WEBPACK_IMPORTED_MODULE_4__["default"], {
      message: this.validateWincat(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wine__field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_WineError_WineErr__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "wine-date-input",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, "Year"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      id: "date",
      name: "date-input",
      size: "5",
      onChange: e => this.handleUpdate(e),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }, this.years.map((year, index) => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        key: `year${index}`,
        value: year,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, year);
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ValError__WEBPACK_IMPORTED_MODULE_4__["default"], {
      message: this.validateDate(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wine__field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_WineError_WineErr__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "wine-companyName-input",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }, "Company Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      id: "company_name",
      name: "company-input",
      onChange: e => this.handleUpdate(e),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }), this.state.company_name.touched && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ValError__WEBPACK_IMPORTED_MODULE_4__["default"], {
      message: this.validateComp(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wine__field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_WineError_WineErr__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "wine-name-input",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }, "Wine Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      id: "name",
      name: "wine-name",
      onChange: e => this.handleUpdate(e),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    }), this.state.name.touched && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ValError__WEBPACK_IMPORTED_MODULE_4__["default"], {
      message: this.validateName(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wine__field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_WineError_WineErr__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "wine-content-input",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }, "Information"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
      id: "content",
      name: "wine-content",
      onChange: e => this.handleUpdate(e),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }), this.state.content.touched && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ValError__WEBPACK_IMPORTED_MODULE_4__["default"], {
      message: this.validateContent(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wine__field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_WineError_WineErr__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "wine-rating-input",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    }, "Rating"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "number",
      min: "0",
      max: "100",
      id: "rating",
      name: "wine-rating",
      onChange: e => this.handleUpdate(e),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    }), this.state.rating.touched && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ValError__WEBPACK_IMPORTED_MODULE_4__["default"], {
      message: this.validateRate(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "addWine-button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      className: "addwine-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204
      },
      __self: this
    }, "Add Wine"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "back",
      tag: "button",
      onClick: () => this.props.history.goBack(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207
      },
      __self: this
    }, "Back"))));
  }

}

AddWine.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  touched: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool
};
AddWine.defaultProps = {
  history: {
    push: () => {}
  }
};
AddWine.contextType = _context__WEBPACK_IMPORTED_MODULE_2__["default"];
/* harmony default export */ __webpack_exports__["default"] = (AddWine);

/***/ })

})
//# sourceMappingURL=main.b680587c9ea75e19fb0f.hot-update.js.map