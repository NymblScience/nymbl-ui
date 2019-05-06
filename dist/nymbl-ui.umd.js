(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["nymbl-ui"] = factory(require("vue"));
	else
		root["nymbl-ui"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0096":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _link = __webpack_require__("4e40");

var props = (0, _link.propsFactory)(); // @vue/component

exports.props = props;
var _default = {
  name: 'BDropdownItem',
  inject: {
    bvDropdown: {
      default: null
    }
  },
  props: props,
  methods: {
    closeDropdown: function closeDropdown() {
      if (this.bvDropdown) {
        this.bvDropdown.hide(true);
      }
    },
    onClick: function onClick(evt) {
      this.$emit('click', evt);
      this.closeDropdown();
    }
  },
  render: function render(h) {
    return h(_link.default, {
      props: this.$props,
      staticClass: 'dropdown-item',
      attrs: {
        role: 'menuitem'
      },
      on: {
        click: this.onClick
      }
    }, this.$slots.default);
  }
};
exports.default = _default;

/***/ }),

/***/ "00df":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _inputGroup = __webpack_require__("fde0");

var _inputGroupAddon = __webpack_require__("9d25");

var _inputGroupPrepend = __webpack_require__("9e3e");

var _inputGroupAppend = __webpack_require__("6780");

var _inputGroupText = __webpack_require__("df74");

var _plugins = __webpack_require__("0a8d");

var components = {
  BInputGroup: _inputGroup.default,
  BInputGroupAddon: _inputGroupAddon.default,
  BInputGroupPrepend: _inputGroupPrepend.default,
  BInputGroupAppend: _inputGroupAppend.default,
  BInputGroupText: _inputGroupText.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "01f9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("2d00");
var $export = __webpack_require__("5ca1");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var $iterCreate = __webpack_require__("41a0");
var setToStringTag = __webpack_require__("7f20");
var getPrototypeOf = __webpack_require__("38fd");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "057b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _listGroup = __webpack_require__("5a5e");

var _listGroupItem = __webpack_require__("5ac8");

var _plugins = __webpack_require__("0a8d");

var components = {
  BListGroup: _listGroup.default,
  BListGroupItem: _listGroupItem.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "0596":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__("b42e");

var props = {
  id: {
    type: String,
    default: null
  },
  inline: {
    type: Boolean,
    default: false
  },
  novalidate: {
    type: Boolean,
    default: false
  },
  validated: {
    type: Boolean,
    default: false
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BForm',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h('form', (0, _vueFunctionalDataMerge.mergeData)(data, {
      class: {
        'form-inline': props.inline,
        'was-validated': props.validated
      },
      attrs: {
        id: props.id,
        novalidate: props.novalidate
      }
    }), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "060b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _startcase = __webpack_require__("3098");

var _keyCodes = __webpack_require__("06e4");

var _html = __webpack_require__("be11");

var _filterEvent = __webpack_require__("382a");

var _textSelectionActive = __webpack_require__("c57f");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  props: {
    headVariant: {
      type: String,
      default: ''
    },
    theadClass: {
      type: [String, Array, Object],
      default: null
    },
    theadTrClass: {
      type: [String, Array, Object],
      default: null
    }
  },
  computed: {
    headClasses: function headClasses() {
      return [this.headVariant ? 'thead-' + this.headVariant : '', this.theadClass];
    }
  },
  methods: {
    fieldClasses: function fieldClasses(field) {
      // header field (th) classes
      return [field.variant ? 'table-' + field.variant : '', field.class ? field.class : '', field.thClass ? field.thClass : ''];
    },
    headClicked: function headClicked(evt, field, isFoot) {
      if (this.stopIfBusy(evt)) {
        // If table is busy (via provider) then don't propagate
        return;
      } else if ((0, _filterEvent.default)(evt)) {
        // clicked on a non-disabled control so ignore
        return;
      } else if ((0, _textSelectionActive.default)(this.$el)) {
        // User is selecting text, so ignore

        /* istanbul ignore next: JSDOM doesn't support getSelection() */
        return;
      }

      evt.stopPropagation();
      evt.preventDefault();
      this.$emit('head-clicked', field.key, field, evt, isFoot);
    },
    renderThead: function renderThead() {
      var _this = this;

      var isFoot = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var h = this.$createElement;

      if (this.isStacked === true) {
        // In always stacked mode, we don't bother rendering the head/foot
        return h(false);
      }

      var fields = this.computedFields || []; // Helper function to generate a field TH cell

      var makeCell = function makeCell(field, colIndex) {
        var ariaLabel = null;

        if (!field.label.trim() && !field.headerTitle) {
          // In case field's label and title are empty/blank
          // We need to add a hint about what the column is about for non-sighted users

          /* istanbul ignore next */
          ariaLabel = (0, _startcase.default)(field.key);
        }

        var hasHeadClickListener = _this.$listeners['head-clicked'] || _this.isSortable;
        var handlers = {};

        if (hasHeadClickListener) {
          handlers.click = function (evt) {
            _this.headClicked(evt, field, isFoot);
          };

          handlers.keydown = function (evt) {
            var keyCode = evt.keyCode;

            if (keyCode === _keyCodes.default.ENTER || keyCode === _keyCodes.default.SPACE) {
              _this.headClicked(evt, field, isFoot);
            }
          };
        }

        var data = {
          key: field.key,
          class: [_this.fieldClasses(field), _this.sortTheadThClasses(field.key, field, isFoot)],
          style: field.thStyle || {},
          attrs: _objectSpread({
            // We only add a tabindex of 0 if there is a head-clicked listener
            tabindex: hasHeadClickListener ? '0' : null,
            abbr: field.headerAbbr || null,
            title: field.headerTitle || null,
            role: 'columnheader',
            scope: 'col',
            'aria-colindex': String(colIndex + 1),
            'aria-label': ariaLabel
          }, _this.sortTheadThAttrs(field.key, field, isFoot)),
          on: handlers
        };
        var fieldScope = {
          label: field.label,
          column: field.key,
          field: field
        };
        var slot = isFoot && _this.hasNormalizedSlot("FOOT_".concat(field.key)) ? _this.normalizeSlot("FOOT_".concat(field.key), fieldScope) : _this.normalizeSlot("HEAD_".concat(field.key), fieldScope);

        if (slot) {
          slot = [slot];
        } else {
          data.domProps = (0, _html.htmlOrText)(field.labelHtml);
        }

        return h('th', data, slot || field.label);
      }; // Generate the array of TH cells


      var $cells = fields.map(makeCell).filter(function (th) {
        return th;
      }); // Genrate the row(s)

      var $trs = [];

      if (isFoot) {
        $trs.push(h('tr', {
          class: this.tfootTrClass,
          attrs: {
            role: 'row'
          }
        }, $cells));
      } else {
        var scope = {
          columns: fields.length,
          fields: fields
        };
        $trs.push(this.normalizeSlot('thead-top', scope) || h(false));
        $trs.push(h('tr', {
          class: this.theadTrClass,
          attrs: {
            role: 'row'
          }
        }, $cells));
      }

      return h(isFoot ? 'tfoot' : 'thead', {
        key: isFoot ? 'tfoot' : 'thead',
        class: isFoot ? this.footClasses : this.headClasses,
        attrs: {
          role: 'rowgroup'
        }
      }, $trs);
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "06e4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/*
 * Key Codes (events)
 */
var KEY_CODES = {
  SPACE: 32,
  ENTER: 13,
  ESC: 27,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  PAGEUP: 33,
  PAGEDOWN: 34,
  HOME: 36,
  END: 35,
  TAB: 9,
  SHIFT: 16,
  CTRL: 17,
  BACKSPACE: 8,
  ALT: 18,
  PAUSE: 19,
  BREAK: 19,
  INSERT: 45,
  INS: 45,
  DELETE: 46
};
var _default = KEY_CODES;
exports.default = _default;

/***/ }),

/***/ "076e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _spinner = __webpack_require__("9c6f");

var _plugins = __webpack_require__("0a8d");

var components = {
  BSpinner: _spinner.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "07b5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _id = __webpack_require__("eae0");

var _form = __webpack_require__("5f07");

var _formState = __webpack_require__("41fb");

var _formCustom = __webpack_require__("377c");

var _normalizeSlot = __webpack_require__("532a");

var _array = __webpack_require__("bb2f");

var _config = __webpack_require__("eb60");

var NAME = 'BFormFile'; // @vue/component

var _default2 = {
  name: NAME,
  mixins: [_id.default, _form.default, _formState.default, _formCustom.default, _normalizeSlot.default],
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {
      // type: Object,
      default: null
    },
    accept: {
      type: String,
      default: ''
    },
    // Instruct input to capture from camera
    capture: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: function _default() {
        return (0, _config.getComponentConfig)(NAME, 'placeholder');
      }
    },
    browseText: {
      type: String,
      default: function _default() {
        return (0, _config.getComponentConfig)(NAME, 'browseText');
      }
    },
    dropPlaceholder: {
      type: String,
      default: function _default() {
        return (0, _config.getComponentConfig)(NAME, 'dropPlaceholder');
      }
    },
    multiple: {
      type: Boolean,
      default: false
    },
    directory: {
      type: Boolean,
      default: false
    },
    noTraverse: {
      type: Boolean,
      default: false
    },
    noDrop: {
      type: Boolean,
      default: false
    },
    fileNameFormatter: {
      type: Function,
      default: null
    }
  },
  data: function data() {
    return {
      selectedFile: null,
      dragging: false,
      hasFocus: false
    };
  },
  computed: {
    selectLabel: function selectLabel() {
      // Draging active
      if (this.dragging && this.dropPlaceholder) {
        return this.dropPlaceholder;
      } // No file chosen


      if (!this.selectedFile || this.selectedFile.length === 0) {
        return this.placeholder;
      } // Convert selectedFile to an array (if not already one)


      var files = (0, _array.concat)(this.selectedFile).filter(Boolean);

      if (this.hasNormalizedSlot('file-name')) {
        // There is a slot for formatting the files/names
        return [this.normalizeSlot('file-name', {
          files: files,
          names: files.map(function (f) {
            return f.name;
          })
        })];
      } else {
        // Use the user supplied formatter, or the built in one.
        return typeof this.fileNameFormatter === 'function' ? String(this.fileNameFormatter(files)) : files.map(function (file) {
          return file.name;
        }).join(', ');
      }
    }
  },
  watch: {
    selectedFile: function selectedFile(newVal, oldVal) {
      // The following test is needed when the file input is "reset" or the
      // exact same file(s) are selected to prevent an infinite loop.
      // When in `multiple` mode we need to check for two empty arrays or
      // two arrays with identical files
      if (newVal === oldVal || (0, _array.isArray)(newVal) && (0, _array.isArray)(oldVal) && newVal.length === oldVal.length && newVal.every(function (v, i) {
        return v === oldVal[i];
      })) {
        return;
      }

      if (!newVal && this.multiple) {
        this.$emit('input', []);
      } else {
        this.$emit('input', newVal);
      }
    },
    value: function value(newVal) {
      if (!newVal || (0, _array.isArray)(newVal) && newVal.length === 0) {
        this.reset();
      }
    }
  },
  methods: {
    focusHandler: function focusHandler(evt) {
      // Bootstrap v4 doesn't have focus styling for custom file input
      // Firefox has a '[type=file]:focus ~ sibling' selector issue,
      // so we add a 'focus' class to get around these bugs
      if (this.plain || evt.type === 'focusout') {
        this.hasFocus = false;
      } else {
        // Add focus styling for custom file input
        this.hasFocus = true;
      }
    },
    reset: function reset() {
      try {
        // Wrapped in try in case IE 11 craps out
        this.$refs.input.value = '';
      } catch (e) {} // IE 11 doesn't support setting `input.value` to '' or null
      // So we use this little extra hack to reset the value, just in case.
      // This also appears to work on modern browsers as well.


      this.$refs.input.type = '';
      this.$refs.input.type = 'file';
      this.selectedFile = this.multiple ? [] : null;
    },
    onFileChange: function onFileChange(evt) {
      var _this = this;

      // Always emit original event
      this.$emit('change', evt); // Check if special `items` prop is available on event (drop mode)
      // Can be disabled by setting no-traverse

      var items = evt.dataTransfer && evt.dataTransfer.items;
      /* istanbul ignore next: not supported in JSDOM */

      if (items && !this.noTraverse) {
        var queue = [];

        for (var i = 0; i < items.length; i++) {
          var item = items[i].webkitGetAsEntry();

          if (item) {
            queue.push(this.traverseFileTree(item));
          }
        }

        Promise.all(queue).then(function (filesArr) {
          _this.setFiles((0, _array.from)(filesArr));
        });
        return;
      } // Normal handling


      this.setFiles(evt.target.files || evt.dataTransfer.files);
    },
    setFiles: function setFiles() {
      var files = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (!files) {
        /* istanbul ignore next: this will probably not happen */
        this.selectedFile = null;
      } else if (this.multiple) {
        // Convert files to array
        var filesArray = [];

        for (var i = 0; i < files.length; i++) {
          filesArray.push(files[i]);
        } // Return file(s) as array


        this.selectedFile = filesArray;
      } else {
        // Return single file object
        this.selectedFile = files[0] || null;
      }
    },
    onReset: function onReset() {
      // Triggered when the parent form (if any) is reset
      this.selectedFile = this.multiple ? [] : null;
    },
    onDragover: function onDragover(evt)
    /* istanbul ignore next: difficult to test in JSDOM */
    {
      evt.preventDefault();
      evt.stopPropagation();

      if (this.noDrop || !this.custom) {
        return;
      }

      this.dragging = true;
      evt.dataTransfer.dropEffect = 'copy';
    },
    onDragleave: function onDragleave(evt)
    /* istanbul ignore next: difficult to test in JSDOM */
    {
      evt.preventDefault();
      evt.stopPropagation();
      this.dragging = false;
    },
    onDrop: function onDrop(evt)
    /* istanbul ignore next: difficult to test in JSDOM */
    {
      evt.preventDefault();
      evt.stopPropagation();

      if (this.noDrop) {
        return;
      }

      this.dragging = false;

      if (evt.dataTransfer.files && evt.dataTransfer.files.length > 0) {
        this.onFileChange(evt);
      }
    },
    traverseFileTree: function traverseFileTree(item, path)
    /* istanbul ignore next: not supported in JSDOM */
    {
      var _this2 = this;

      // Based on http://stackoverflow.com/questions/3590058
      return new Promise(function (resolve) {
        path = path || '';

        if (item.isFile) {
          // Get file
          item.file(function (file) {
            file.$path = path; // Inject $path to file obj

            resolve(file);
          });
        } else if (item.isDirectory) {
          // Get folder contents
          item.createReader().readEntries(function (entries) {
            var queue = [];

            for (var i = 0; i < entries.length; i++) {
              queue.push(_this2.traverseFileTree(entries[i], path + item.name + '/'));
            }

            Promise.all(queue).then(function (filesArr) {
              resolve((0, _array.from)(filesArr));
            });
          });
        }
      });
    }
  },
  render: function render(h) {
    // Form Input
    var input = h('input', {
      ref: 'input',
      class: [{
        'form-control-file': this.plain,
        'custom-file-input': this.custom,
        focus: this.custom && this.hasFocus
      }, this.stateClass],
      attrs: {
        type: 'file',
        id: this.safeId(),
        name: this.name,
        disabled: this.disabled,
        required: this.required,
        form: this.form || null,
        capture: this.capture || null,
        accept: this.accept || null,
        multiple: this.multiple,
        webkitdirectory: this.directory,
        'aria-required': this.required ? 'true' : null
      },
      on: {
        change: this.onFileChange,
        focusin: this.focusHandler,
        focusout: this.focusHandler,
        reset: this.onReset
      }
    });

    if (this.plain) {
      return input;
    } // Overlay Labels


    var label = h('label', {
      staticClass: 'custom-file-label',
      class: [this.dragging ? 'dragging' : null],
      attrs: {
        for: this.safeId(),
        'data-browse': this.browseText || null
      }
    }, this.selectLabel); // Return rendered custom file input

    return h('div', {
      staticClass: 'custom-file b-form-file',
      class: this.stateClass,
      attrs: {
        id: this.safeId('_BV_file_outer_')
      },
      on: {
        dragover: this.onDragover,
        dragleave: this.onDragleave,
        drop: this.onDrop
      }
    }, [input, label]);
  }
};
exports.default = _default2;

/***/ }),

/***/ "07d0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _looseEqual = __webpack_require__("96cd");

var _id = __webpack_require__("eae0");

var _normalizeSlot = __webpack_require__("532a");

var _mixinItems = __webpack_require__("4399");

var _mixinFiltering = __webpack_require__("a306");

var _mixinSorting = __webpack_require__("e8c7");

var _mixinPagination = __webpack_require__("0c42");

var _mixinCaption = __webpack_require__("50b2");

var _mixinColgroup = __webpack_require__("6a0e");

var _mixinThead = __webpack_require__("060b");

var _mixinTfoot = __webpack_require__("711a");

var _mixinTbody = __webpack_require__("3888");

var _mixinBusy = __webpack_require__("7f6b");

var _mixinSelectable = __webpack_require__("3966");

var _mixinProvider = __webpack_require__("b6bd");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// b-table component definition
// @vue/component
var _default2 = {
  name: 'BTable',
  // Order of mixins is important.
  // They are merged from left to fight, followed by this component.
  mixins: [_id.default, _normalizeSlot.default, _mixinItems.default, _mixinFiltering.default, _mixinSorting.default, _mixinPagination.default, _mixinBusy.default, _mixinCaption.default, _mixinColgroup.default, _mixinThead.default, _mixinTfoot.default, _mixinTbody.default, _mixinSelectable.default, _mixinProvider.default],
  // Don't place ATTRS on root element automatically, as table could be wrapped in responsive div
  inheritAttrs: false,
  props: {
    striped: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: false
    },
    borderless: {
      type: Boolean,
      default: false
    },
    outlined: {
      type: Boolean,
      default: false
    },
    dark: {
      type: Boolean,
      default: false
    },
    hover: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    responsive: {
      type: [Boolean, String],
      default: false
    },
    stacked: {
      type: [Boolean, String],
      default: false
    },
    value: {
      // v-model for retrieving the current displayed rows
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    // Mixins add to data
    return {};
  },
  computed: {
    // Layout related computed props
    isStacked: function isStacked() {
      return this.stacked === '' ? true : this.stacked;
    },
    isResponsive: function isResponsive() {
      var responsive = this.responsive === '' ? true : this.responsive;
      return this.isStacked ? false : responsive;
    },
    responsiveClass: function responsiveClass() {
      return this.isResponsive === true ? 'table-responsive' : this.isResponsive ? "table-responsive-".concat(this.responsive) : '';
    },
    tableClasses: function tableClasses() {
      return [_defineProperty({
        'table-striped': this.striped,
        'table-hover': this.hover,
        'table-dark': this.dark,
        'table-bordered': this.bordered,
        'table-borderless': this.borderless,
        'table-sm': this.small,
        border: this.outlined,
        // The following are b-table custom styles
        'b-table-fixed': this.fixed,
        'b-table-stacked': this.stacked === true || this.stacked === ''
      }, "b-table-stacked-".concat(this.stacked), this.stacked !== true && this.stacked), // Selectable classes
      this.selectableTableClasses];
    },
    tableAttrs: function tableAttrs() {
      // Preserve user supplied aria-describedby, if provided in $attrs
      var adb = [(this.$attrs || {})['aria-describedby'], this.captionId].filter(Boolean).join(' ') || null;
      var items = this.computedItems;
      var fields = this.computedFields;
      return _objectSpread({
        // We set aria-rowcount before merging in $attrs, in case user has supplied their own
        'aria-rowcount': this.filteredItems.length > items.length ? String(this.filteredItems.length) : null
      }, this.$attrs, {
        // Now we can override any $attrs here
        id: this.safeId(),
        role: this.isStacked ? 'table' : null,
        'aria-busy': this.computedBusy ? 'true' : 'false',
        'aria-colcount': String(fields.length),
        'aria-describedby': adb
      }, this.selectableTableAttrs);
    },
    context: function context() {
      // Current state of sorting, filtering and pagination props/values
      return {
        filter: this.localFilter,
        sortBy: this.localSortBy,
        sortDesc: this.localSortDesc,
        perPage: parseInt(this.perPage, 10) || 0,
        currentPage: parseInt(this.currentPage, 10) || 1,
        apiUrl: this.apiUrl
      };
    },
    computedItems: function computedItems() {
      return this.paginatedItems || [];
    }
  },
  watch: {
    // Watch for changes on computedItems and update the v-model
    computedItems: function computedItems(newVal, oldVal) {
      this.$emit('input', newVal);
    },
    context: function context(newVal, oldVal) {
      // Emit context info for external paging/filtering/sorting handling
      if (!(0, _looseEqual.default)(newVal, oldVal)) {
        this.$emit('context-changed', newVal);
      }
    }
  },
  mounted: function mounted() {
    // Initially update the v-model of displayed items
    this.$emit('input', this.computedItems);
  },
  render: function render(h) {
    // Build the caption (from caption mixin)
    var $caption = this.renderCaption(); // Build the colgroup

    var $colgroup = this.renderColgroup(); // Build the thead

    var $thead = this.renderThead(); // Build the tfoot

    var $tfoot = this.renderTfoot(); // Build the tbody

    var $tbody = this.renderTbody(); // Assemble table

    var $table = h('table', {
      key: 'b-table',
      staticClass: 'table b-table',
      class: this.tableClasses,
      attrs: this.tableAttrs
    }, [$caption, $colgroup, $thead, $tfoot, $tbody]); // Add responsive wrapper if needed and return table

    return this.isResponsive ? h('div', {
      key: 'b-table-responsive',
      class: this.responsiveClass
    }, [$table]) : $table;
  }
};
exports.default = _default2;

/***/ }),

/***/ "07e3":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "0866":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _button = __webpack_require__("b664");

var _buttonClose = __webpack_require__("600b");

var _plugins = __webpack_require__("0a8d");

var components = {
  BButton: _button.default,
  BBtn: _button.default,
  BButtonClose: _buttonClose.default,
  BBtnClose: _buttonClose.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "0903":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__("b42e");

var _config = __webpack_require__("eb60");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NAME = 'BFormText';
var props = {
  id: {
    type: String,
    default: null
  },
  tag: {
    type: String,
    default: 'small'
  },
  textVariant: {
    type: String,
    default: function _default() {
      return (0, _config.getComponentConfig)(NAME, 'textVariant');
    }
  },
  inline: {
    type: Boolean,
    default: false
  } // @vue/component

};
exports.props = props;
var _default2 = {
  name: NAME,
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      class: _defineProperty({
        'form-text': !props.inline
      }, "text-".concat(props.textVariant), Boolean(props.textVariant)),
      attrs: {
        id: props.id
      }
    }), children);
  }
};
exports.default = _default2;

/***/ }),

/***/ "0942":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _array = __webpack_require__("bb2f");

var _object = __webpack_require__("24e2");

var _identity = __webpack_require__("fccc");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copies props from one array/object to a new array/object. Prop values
 * are also cloned as new references to prevent possible mutation of original
 * prop object values. Optionally accepts a function to transform the prop name.
 *
 * @param {[]|{}} props
 * @param {Function} transformFn
 */
var copyProps = function copyProps(props) {
  var transformFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _identity.default;

  if ((0, _array.isArray)(props)) {
    return props.map(transformFn);
  } // Props as an object.


  var copied = {};

  for (var prop in props) {
    /* istanbul ignore else */
    if (props.hasOwnProperty(prop)) {
      // If the prop value is an object, do a shallow clone to prevent
      // potential mutations to the original object.
      copied[transformFn(prop)] = (0, _object.isObject)(props[prop]) ? _objectSpread({}, props[prop]) : props[prop];
    }
  }

  return copied;
};

var _default = copyProps;
exports.default = _default;

/***/ }),

/***/ "0a8d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.vueUse = exports.registerDirectives = exports.registerDirective = exports.registerComponents = exports.registerComponent = exports.registerPlugins = exports.installFactory = void 0;

var _config = __webpack_require__("eb60");

/**
 * Plugin install factory function.
 * @param {object} { components, directives }
 * @returns {function} plugin install function
 */
var installFactory = function installFactory(_ref) {
  var components = _ref.components,
      directives = _ref.directives,
      plugins = _ref.plugins;
  return function (Vue) {
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _config.setConfig)(config);
    registerComponents(Vue, components);
    registerDirectives(Vue, directives);
    registerPlugins(Vue, plugins);
  };
};
/**
 * Load a group of plugins.
 * @param {object} Vue
 * @param {object} Plugin definitions
 */


exports.installFactory = installFactory;

var registerPlugins = function registerPlugins(Vue) {
  var plugins = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  for (var plugin in plugins) {
    if (plugin && plugins[plugin]) {
      Vue.use(plugins[plugin]);
    }
  }
};
/**
 * Load a component.
 * @param {object} Vue
 * @param {string} Component name
 * @param {object} Component definition
 */


exports.registerPlugins = registerPlugins;

var registerComponent = function registerComponent(Vue, name, def) {
  if (Vue && name && def) {
    Vue.component(name, def);
  }
};
/**
 * Load a group of components.
 * @param {object} Vue
 * @param {object} Object of component definitions
 */


exports.registerComponent = registerComponent;

var registerComponents = function registerComponents(Vue) {
  var components = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  for (var component in components) {
    registerComponent(Vue, component, components[component]);
  }
};
/**
 * Load a directive.
 * @param {object} Vue
 * @param {string} Directive name
 * @param {object} Directive definition
 */


exports.registerComponents = registerComponents;

var registerDirective = function registerDirective(Vue, name, def) {
  if (Vue && name && def) {
    Vue.directive(name, def);
  }
};
/**
 * Load a group of directives.
 * @param {object} Vue
 * @param {object} Object of directive definitions
 */


exports.registerDirective = registerDirective;

var registerDirectives = function registerDirectives(Vue) {
  var directives = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  for (var directive in directives) {
    registerDirective(Vue, directive, directives[directive]);
  }
};
/**
 * Install plugin if window.Vue available
 * @param {object} Plugin definition
 */


exports.registerDirectives = registerDirectives;

var vueUse = function vueUse(VuePlugin) {
  /* istanbul ignore next */
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VuePlugin);
  }
};

exports.vueUse = vueUse;

/***/ }),

/***/ "0b34":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _html = __webpack_require__("be11");

var _default = {
  props: {
    showEmpty: {
      type: Boolean,
      default: false
    },
    emptyText: {
      type: String,
      default: 'There are no records to show'
    },
    emptyHtml: {
      type: String
    },
    emptyFilteredText: {
      type: String,
      default: 'There are no records matching your request'
    },
    emptyFilteredHtml: {
      type: String
    }
  },
  methods: {
    renderEmpty: function renderEmpty() {
      var h = this.$createElement;
      var items = this.computedItems;
      var $empty;

      if (this.showEmpty && (!items || items.length === 0) && !(this.computedBusy && this.hasNormalizedSlot('table-busy'))) {
        $empty = this.normalizeSlot(this.isFiltered ? 'emptyfiltered' : 'empty', {
          emptyFilteredHtml: this.emptyFilteredHtml,
          emptyFilteredText: this.emptyFilteredText,
          emptyHtml: this.emptyHtml,
          emptyText: this.emptyText,
          fields: this.computedFields,
          // Not sure why this is included, as it will always be an empty array
          items: this.computedItems
        });

        if (!$empty) {
          $empty = h('div', {
            class: ['text-center', 'my-2'],
            domProps: this.isFiltered ? (0, _html.htmlOrText)(this.emptyFilteredHtml, this.emptyFilteredText) : (0, _html.htmlOrText)(this.emptyHtml, this.emptyText)
          });
        }

        $empty = h('td', {
          attrs: {
            colspan: String(this.computedFields.length),
            role: 'cell'
          }
        }, [h('div', {
          attrs: {
            role: 'alert',
            'aria-live': 'polite'
          }
        }, [$empty])]);
        $empty = h('tr', {
          key: this.isFiltered ? '_b-table-empty-filtered-row_' : '_b-table-empty-row_',
          staticClass: 'b-table-empty-row',
          class: [typeof this.tbodyTrClass === 'function' ? this.tbodyTrClass(null, 'row-empty') : this.tbodyTrClass],
          attrs: {
            role: 'row'
          }
        }, [$empty]);
      }

      return $empty || h(false);
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "0c40":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _id = __webpack_require__("eae0");

var _form = __webpack_require__("5f07");

var _formSize = __webpack_require__("6e1b");

var _formState = __webpack_require__("41fb");

var _formText = __webpack_require__("c01c");

var _formSelection = __webpack_require__("10fc");

var _formValidity = __webpack_require__("b965");

var _dom = __webpack_require__("1611");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// @vue/component
var _default = {
  name: 'BFormTextarea',
  mixins: [_id.default, _form.default, _formSize.default, _formState.default, _formText.default, _formSelection.default, _formValidity.default],
  props: {
    rows: {
      type: [Number, String],
      default: 2
    },
    maxRows: {
      type: [Number, String],
      default: null
    },
    wrap: {
      // 'soft', 'hard' or 'off'. Browser default is 'soft'
      type: String,
      default: 'soft'
    },
    noResize: {
      // Disable the resize handle of textarea
      type: Boolean,
      default: false
    },
    noAutoShrink: {
      // When in auto resize mode, disable shrinking to content height
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      dontResize: true
    };
  },
  computed: {
    computedStyle: function computedStyle() {
      var styles = {
        // Setting `noResize` to true will disable the ability for the user to
        // manually resize the textarea. We also disable when in auto resize mode
        resize: !this.computedRows || this.noResize ? 'none' : null
      };

      if (!this.computedRows) {
        // The computed height for auto resize.
        // We avoid setting the style to null, which can override user manual resize.
        styles.height = this.computedHeight;
      }

      return styles;
    },
    computedMinRows: function computedMinRows() {
      // Ensure rows is at least 2 and positive (2 is the native textarea value).
      // A value of 1 can cause issues in some browsers, and most browsers only support
      // 2 as the smallest value.
      return Math.max(parseInt(this.rows, 10) || 2, 2);
    },
    computedMaxRows: function computedMaxRows() {
      return Math.max(this.computedMinRows, parseInt(this.maxRows, 10) || 0);
    },
    computedRows: function computedRows() {
      // This is used to set the attribute 'rows' on the textarea.
      // If auto-resize is enabled, then we return null as we use CSS to control height.
      return this.computedMinRows === this.computedMaxRows ? this.computedMinRows : null;
    },
    computedHeight: function computedHeight()
    /* istanbul ignore next: can't test getComputedProperties */
    {
      // We compare `computedRows` and `localValue` to `true`, a value
      // they both can't have at any time, to ensure reactivity
      if (this.$isServer || this.dontResize || this.computedRows === true || this.localValue === true) {
        return null;
      }

      var el = this.$el; // Element must be visible (not hidden) and in document
      // *Must* be checked after above checks

      if (!(0, _dom.isVisible)(el)) {
        return null;
      } // Remember old height (includes `px` units) and reset it temporarily to `auto`


      var oldHeight = el.style.height;
      el.style.height = 'auto'; // Get current computed styles

      var computedStyle = (0, _dom.getCS)(el); // Height of one line of text in px

      var lineHeight = parseFloat(computedStyle.lineHeight); // Minimum height for min rows (browser dependant)

      var minHeight = parseInt(computedStyle.height, 10) || lineHeight * this.computedMinRows; // Calculate height of content

      var offset = (parseFloat(computedStyle.borderTopWidth) || 0) + (parseFloat(computedStyle.borderBottomWidth) || 0) + (parseFloat(computedStyle.paddingTop) || 0) + (parseFloat(computedStyle.paddingBottom) || 0); // Calculate content height in "rows"

      var contentRows = Math.max((el.scrollHeight - offset) / lineHeight, 2); // Calculate number of rows to display (limited within min/max rows)

      var rows = Math.min(Math.max(contentRows, this.computedMinRows), this.computedMaxRows); // Calculate the required height of the textarea including border and padding (in pixels)

      var height = Math.max(Math.ceil(rows * lineHeight + offset), minHeight); // Place old height back on element, just in case this computed prop returns the same value

      el.style.height = oldHeight; // Value of previous height (without px units appended)

      var oldHeightPx = parseFloat(oldHeight) || 0;

      if (this.noAutoShrink && oldHeightPx > height) {
        // Computed height remains the larger of oldHeight and new height
        // When height is `sticky` (no-auto-shrink is true)
        return oldHeight;
      } // Return the new computed height in px units


      return "".concat(height, "px");
    }
  },
  mounted: function mounted() {
    var _this = this;

    // Enable opt-in resizing once mounted
    this.$nextTick(function () {
      _this.dontResize = false;
    });
  },
  activated: function activated() {
    var _this2 = this;

    // If we are being re-activated in <keep-alive>, enable opt-in resizing
    this.$nextTick(function () {
      _this2.dontResize = false;
    });
  },
  deactivated: function deactivated() {
    // If we are in a deactivated <keep-alive>, disable opt-in resizing
    this.dontResize = true;
  },
  beforeDestroy: function beforeDestroy() {
    /* istanbul ignore next */
    this.dontResize = true;
  },
  render: function render(h) {
    // Using self instead of this helps reduce code size during minification
    var self = this;
    return h('textarea', {
      ref: 'input',
      class: self.computedClass,
      style: self.computedStyle,
      directives: [{
        name: 'model',
        rawName: 'v-model',
        value: self.localValue,
        expression: 'localValue'
      }],
      attrs: {
        id: self.safeId(),
        name: self.name,
        form: self.form || null,
        disabled: self.disabled,
        placeholder: self.placeholder,
        required: self.required,
        autocomplete: self.autocomplete || null,
        readonly: self.readonly || self.plaintext,
        rows: self.computedRows,
        wrap: self.wrap || null,
        'aria-required': self.required ? 'true' : null,
        'aria-invalid': self.computedAriaInvalid
      },
      domProps: {
        value: self.localValue
      },
      on: _objectSpread({}, self.$listeners, {
        input: self.onInput,
        change: self.onChange,
        blur: self.onBlur
      })
    });
  }
};
exports.default = _default;

/***/ }),

/***/ "0c42":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var _default = {
  props: {
    perPage: {
      type: [Number, String],
      default: 0
    },
    currentPage: {
      type: [Number, String],
      default: 1
    }
  },
  computed: {
    localPaging: function localPaging() {
      return this.hasProvider ? !!this.noProviderPaging : true;
    },
    paginatedItems: function paginatedItems() {
      var items = this.sortedItems || [];
      var currentPage = Math.max(parseInt(this.currentPage, 10) || 1, 1);
      var perPage = Math.max(parseInt(this.perPage, 10) || 0, 0); // Apply local pagination

      if (this.localPaging && !!perPage) {
        // Grab the current page of data (which may be past filtered items limit)
        items = items.slice((currentPage - 1) * perPage, currentPage * perPage);
      } // Return the items to display in the table


      return items;
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "0d58":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("ce10");
var enumBugKeys = __webpack_require__("e11e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "0fc9":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("3a38");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "1018":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _tabs = __webpack_require__("40bb");

var _tab = __webpack_require__("a212");

var _plugins = __webpack_require__("0a8d");

var components = {
  BTabs: _tabs.default,
  BTab: _tab.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "10fc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
// @vue/component
var _default = {
  computed: {
    selectionStart: {
      // Expose selectionStart for formatters, etc
      cache: false,
      get: function get()
      /* istanbul ignore next */
      {
        return this.$refs.input.selectionStart;
      },
      set: function set(val)
      /* istanbul ignore next */
      {
        this.$refs.input.selectionStart = val;
      }
    },
    selectionEnd: {
      // Expose selectionEnd for formatters, etc
      cache: false,
      get: function get()
      /* istanbul ignore next */
      {
        return this.$refs.input.selectionEnd;
      },
      set: function set(val)
      /* istanbul ignore next */
      {
        this.$refs.input.selectionEnd = val;
      }
    },
    selectionDirection: {
      // Expose selectionDirection for formatters, etc
      cache: false,
      get: function get()
      /* istanbul ignore next */
      {
        return this.$refs.input.selectionDirection;
      },
      set: function set(val)
      /* istanbul ignore next */
      {
        this.$refs.input.selectionDirection = val;
      }
    }
  },
  methods: {
    select: function select()
    /* istanbul ignore next */
    {
      var _this$$refs$input;

      // For external handler that may want a select() method
      (_this$$refs$input = this.$refs.input).select.apply(_this$$refs$input, arguments);
    },
    setSelectionRange: function setSelectionRange()
    /* istanbul ignore next */
    {
      var _this$$refs$input2;

      // For external handler that may want a setSelectionRange(a,b,c) method
      (_this$$refs$input2 = this.$refs.input).setSelectionRange.apply(_this$$refs$input2, arguments);
    },
    setRangeText: function setRangeText()
    /* istanbul ignore next */
    {
      var _this$$refs$input3;

      // For external handler that may want a setRangeText(a,b,c) method
      (_this$$refs$input3 = this.$refs.input).setRangeText.apply(_this$$refs$input3, arguments);
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "1106":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var _default = {
  methods: {
    renderBottomRow: function renderBottomRow() {
      var h = this.$createElement; // Static bottom row slot (hidden in visibly stacked mode as we can't control the data-label)
      // If in always stacked mode, we don't bother rendering the row

      if (!this.hasNormalizedSlot('bottom-row') || this.isStacked === true) {
        return h(false);
      }

      var fields = this.computedFields;
      return h('tr', {
        key: '__b-table-bottom-row__',
        staticClass: 'b-table-bottom-row',
        class: [typeof this.tbodyTrClass === 'function' ? this.tbodyTrClass(null, 'row-bottom') : this.tbodyTrClass],
        attrs: {
          role: 'row'
        }
      }, this.normalizeSlot('bottom-row', {
        columns: fields.length,
        fields: fields
      }));
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "1186":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _dom = __webpack_require__("1611");

// @vue/component
var _default = {
  data: function data() {
    return {
      listenForFocusIn: false
    };
  },
  watch: {
    listenForFocusIn: function listenForFocusIn(newValue, oldValue) {
      if (newValue !== oldValue) {
        (0, _dom.eventOff)(this.focusInElement, 'focusin', this._focusInHandler, false);

        if (newValue) {
          (0, _dom.eventOn)(this.focusInElement, 'focusin', this._focusInHandler, false);
        }
      }
    }
  },
  beforeCreate: function beforeCreate() {
    // Declare non-reactive properties
    this.focusInElement = null;
  },
  mounted: function mounted() {
    if (!this.focusInElement) {
      this.focusInElement = document;
    }

    if (this.listenForFocusIn) {
      (0, _dom.eventOn)(this.focusInElement, 'focusin', this._focusInHandler, false);
    }
  },
  beforeDestroy: function beforeDestroy()
  /* istanbul ignore next */
  {
    (0, _dom.eventOff)(this.focusInElement, 'focusin', this._focusInHandler, false);
  },
  methods: {
    _focusInHandler: function _focusInHandler(evt) {
      if (this.focusInHandler) {
        this.focusInHandler(evt);
      }
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "11ab":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _id = __webpack_require__("eae0");

var _form = __webpack_require__("5f07");

var _formOptions = __webpack_require__("461c");

var _formRadioCheckGroup = __webpack_require__("5c02");

var _formSize = __webpack_require__("6e1b");

var _formState = __webpack_require__("41fb");

var _formCheckbox = __webpack_require__("bdb1");

// @vue/component
var _default = {
  name: 'BFormCheckboxGroup',
  components: {
    BFormCheckbox: _formCheckbox.default
  },
  mixins: [_id.default, _form.default, _formRadioCheckGroup.default, // Includes render function
  _formOptions.default, _formSize.default, _formState.default],
  provide: function provide() {
    return {
      bvCheckGroup: this
    };
  },
  props: {
    switches: {
      // Custom switch styling
      type: Boolean,
      default: false
    },
    checked: {
      type: [String, Number, Object, Array, Boolean],
      default: null
    }
  },
  data: function data() {
    return {
      localChecked: this.checked || []
    };
  },
  computed: {
    is_RadioGroup: function is_RadioGroup() {
      return false;
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "11e9":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("52a7");
var createDesc = __webpack_require__("4630");
var toIObject = __webpack_require__("6821");
var toPrimitive = __webpack_require__("6a99");
var has = __webpack_require__("69a8");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("9e1e") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "12b6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _lowerFirst = __webpack_require__("2839");

/**
 * @param {string} prefix
 * @param {string} value
 */
var unprefixPropName = function unprefixPropName(prefix, value) {
  return (0, _lowerFirst.default)(value.replace(prefix, ''));
};

var _default = unprefixPropName;
exports.default = _default;

/***/ }),

/***/ "12d3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__("b42e");

var _pluckProps = __webpack_require__("9c97");

var _link = __webpack_require__("4e40");

var _html = __webpack_require__("be11");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var props = _objectSpread({}, (0, _link.propsFactory)(), {
  text: {
    type: String,
    default: null
  },
  html: {
    type: String,
    default: null
  },
  ariaCurrent: {
    type: String,
    default: 'location'
  } // @vue/component

});

exports.props = props;
var _default = {
  name: 'BBreadcrumbLink',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var suppliedProps = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var tag = suppliedProps.active ? 'span' : _link.default;
    var componentData = {
      props: (0, _pluckProps.default)(props, suppliedProps)
    };

    if (suppliedProps.active) {
      componentData.attrs = {
        'aria-current': suppliedProps.ariaCurrent
      };
    }

    if (!children) {
      componentData.domProps = (0, _html.htmlOrText)(suppliedProps.html, suppliedProps.text);
    }

    return h(tag, (0, _vueFunctionalDataMerge.mergeData)(data, componentData), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "130e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1495":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var anObject = __webpack_require__("cb7c");
var getKeys = __webpack_require__("0d58");

module.exports = __webpack_require__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "1520":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__("b42e");

var props = {
  tag: {
    type: String,
    default: 'div'
  },
  fluid: {
    type: Boolean,
    default: false
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BContainer',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      class: {
        container: !props.fluid,
        'container-fluid': props.fluid
      }
    }), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "1611":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.requestAF = exports.position = exports.offset = exports.getCS = exports.getBCR = exports.hasAttr = exports.getAttr = exports.removeAttr = exports.setAttr = exports.hasClass = exports.removeClass = exports.addClass = exports.getById = exports.contains = exports.closest = exports.matches = exports.select = exports.selectAll = exports.reflow = exports.isDisabled = exports.isVisible = exports.isElement = exports.eventOff = exports.eventOn = exports.parseEventOptions = exports.isPassiveSupported = void 0;

var _array = __webpack_require__("bb2f");

var _object = __webpack_require__("24e2");

var _env = __webpack_require__("4565");

// Determine if the browser supports the option passive for events
var passiveEventSupported = false;
/* istanbul ignore if */

if (_env.inBrowser) {
  try {
    var options = {
      get passive() {
        // This function will be called when the browser
        // attempts to access the passive property.
        passiveEventSupported = true;
      }

    };
    window.addEventListener('test', options, options);
    window.removeEventListener('test', options, options);
  } catch (err) {
    passiveEventSupported = false;
  }
} // Exported only for testing purposes


var isPassiveSupported = function isPassiveSupported() {
  return passiveEventSupported;
}; // Normalize event options based on support of passive option
// Exported only for testing purposes


exports.isPassiveSupported = isPassiveSupported;

var parseEventOptions = function parseEventOptions(options) {
  if (!passiveEventSupported) {
    // Need to translate to actual Boolean value
    return Boolean((0, _object.isObject)(options) ? options.useCapture : options);
  }
  /* istanbul ignore next: JSDOM doesn't support above detection of passive */


  return options || {
    useCapture: false // So we can't reach this anymore for unit testing due to the above if statement

  };
}; // Attach an event listener to an element


exports.parseEventOptions = parseEventOptions;

var eventOn = function eventOn(el, evtName, handler, options) {
  if (el && el.addEventListener) {
    el.addEventListener(evtName, handler, parseEventOptions(options));
  }
}; // Remove an event listener from an element


exports.eventOn = eventOn;

var eventOff = function eventOff(el, evtName, handler, options) {
  if (el && el.removeEventListener) {
    el.removeEventListener(evtName, handler, parseEventOptions(options));
  }
}; // Determine if an element is an HTML Element


exports.eventOff = eventOff;

var isElement = function isElement(el) {
  return Boolean(el && el.nodeType === Node.ELEMENT_NODE);
}; // Determine if an HTML element is visible - Faster than CSS check


exports.isElement = isElement;

var isVisible = function isVisible(el)
/* istanbul ignore next: getBoundingClientRect() doesn't work in JSDOM */
{
  if (!isElement(el) || !contains(document.body, el)) {
    return false;
  } // All browsers support getBoundingClientRect(), except JSDOM as it returns all 0's for values :(
  // So any tests that need isVisible will fail in JSDOM


  var bcr = getBCR(el);
  return Boolean(bcr && bcr.height > 0 && bcr.width > 0);
}; // Determine if an element is disabled


exports.isVisible = isVisible;

var isDisabled = function isDisabled(el) {
  return !isElement(el) || el.disabled || hasClass(el, 'disabled') || Boolean(getAttr(el, 'disabled'));
}; // Cause/wait-for an element to reflow it's content (adjusting it's height/width)


exports.isDisabled = isDisabled;

var reflow = function reflow(el) {
  // Requesting an elements offsetHight will trigger a reflow of the element content

  /* istanbul ignore next: reflow doesn't happen in JSDOM */
  return isElement(el) && el.offsetHeight;
}; // Select all elements matching selector. Returns `[]` if none found


exports.reflow = reflow;

var selectAll = function selectAll(selector, root) {
  if (!isElement(root)) {
    root = document;
  }

  return (0, _array.from)(root.querySelectorAll(selector));
}; // Select a single element, returns `null` if not found


exports.selectAll = selectAll;

var select = function select(selector, root) {
  if (!isElement(root)) {
    root = document;
  }

  return root.querySelector(selector) || null;
}; // Determine if an element matches a selector


exports.select = select;

var matches = function matches(el, selector) {
  if (!isElement(el)) {
    return false;
  } // https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
  // Prefer native implementations over polyfill function


  var proto = Element.prototype;
  /* istanbul ignore next */

  var Matches = proto.matches || proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector || function (sel)
  /* istanbul ignore next */
  {
    var element = this;
    var m = selectAll(sel, element.document || element.ownerDocument);
    var i = m.length; // eslint-disable-next-line no-empty

    while (--i >= 0 && m.item(i) !== element) {}

    return i > -1;
  };

  return Matches.call(el, selector);
}; // Finds closest element matching selector. Returns `null` if not found


exports.matches = matches;

var closest = function closest(selector, root) {
  if (!isElement(root)) {
    return null;
  } // https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
  // Since we dont support IE < 10, we can use the "Matches" version of the polyfill for speed
  // Prefer native implementation over polyfill function


  var Closest = Element.prototype.closest || function (sel)
  /* istanbul ignore next */
  {
    var element = this;

    if (!contains(document.documentElement, element)) {
      return null;
    }

    do {
      // Use our "patched" matches function
      if (matches(element, sel)) {
        return element;
      }

      element = element.parentElement || element.parentNode;
    } while (element !== null && element.nodeType === Node.ELEMENT_NODE);

    return null;
  };

  var el = Closest.call(root, selector); // Emulate jQuery closest and return `null` if match is the passed in element (root)

  return el === root ? null : el;
}; // Returns true if the parent element contains the child element


exports.closest = closest;

var contains = function contains(parent, child) {
  if (!parent || typeof parent.contains !== 'function') {
    return false;
  }

  return parent.contains(child);
}; // Get an element given an ID


exports.contains = contains;

var getById = function getById(id) {
  return document.getElementById(/^#/.test(id) ? id.slice(1) : id) || null;
}; // Add a class to an element


exports.getById = getById;

var addClass = function addClass(el, className) {
  // We are checking for `el.classList` existence here since IE 11
  // returns `undefined` for some elements (e.g. SVG elements)
  // See https://github.com/bootstrap-vue/bootstrap-vue/issues/2713
  if (className && isElement(el) && el.classList) {
    el.classList.add(className);
  }
}; // Remove a class from an element


exports.addClass = addClass;

var removeClass = function removeClass(el, className) {
  // We are checking for `el.classList` existence here since IE 11
  // returns `undefined` for some elements (e.g. SVG elements)
  // See https://github.com/bootstrap-vue/bootstrap-vue/issues/2713
  if (className && isElement(el) && el.classList) {
    el.classList.remove(className);
  }
}; // Test if an element has a class


exports.removeClass = removeClass;

var hasClass = function hasClass(el, className) {
  // We are checking for `el.classList` existence here since IE 11
  // returns `undefined` for some elements (e.g. SVG elements)
  // See https://github.com/bootstrap-vue/bootstrap-vue/issues/2713
  if (className && isElement(el) && el.classList) {
    return el.classList.contains(className);
  }

  return false;
}; // Set an attribute on an element


exports.hasClass = hasClass;

var setAttr = function setAttr(el, attr, value) {
  if (attr && isElement(el)) {
    el.setAttribute(attr, value);
  }
}; // Remove an attribute from an element


exports.setAttr = setAttr;

var removeAttr = function removeAttr(el, attr) {
  if (attr && isElement(el)) {
    el.removeAttribute(attr);
  }
}; // Get an attribute value from an element (returns `null` if not found)


exports.removeAttr = removeAttr;

var getAttr = function getAttr(el, attr) {
  if (attr && isElement(el)) {
    return el.getAttribute(attr);
  }

  return null;
}; // Determine if an attribute exists on an element (returns `true`
// or `false`, or `null` if element not found)


exports.getAttr = getAttr;

var hasAttr = function hasAttr(el, attr) {
  if (attr && isElement(el)) {
    return el.hasAttribute(attr);
  }

  return null;
}; // Return the Bounding Client Rect of an element. Returns `null` if not an element


exports.hasAttr = hasAttr;

var getBCR = function getBCR(el) {
  /* istanbul ignore next: getBoundingClientRect() doesn't work in JSDOM */
  return isElement(el) ? el.getBoundingClientRect() : null;
}; // Get computed style object for an element


exports.getBCR = getBCR;

var getCS = function getCS(el) {
  /* istanbul ignore next: getComputedStyle() doesn't work in JSDOM */
  return isElement(el) ? window.getComputedStyle(el) : {};
}; // Return an element's offset with respect to document element
// https://j11y.io/jquery/#v=git&fn=jQuery.fn.offset


exports.getCS = getCS;

var offset = function offset(el)
/* istanbul ignore next: getBoundingClientRect(), getClientRects() doesn't work in JSDOM */
{
  var _offset = {
    top: 0,
    left: 0
  };

  if (!isElement(el) || el.getClientRects().length === 0) {
    return _offset;
  }

  var bcr = getBCR(el);

  if (bcr) {
    var win = el.ownerDocument.defaultView;
    _offset.top = bcr.top + win.pageYOffset;
    _offset.left = bcr.left + win.pageXOffset;
  }

  return _offset;
}; // Return an element's offset with respect to to it's offsetParent
// https://j11y.io/jquery/#v=git&fn=jQuery.fn.position


exports.offset = offset;

var position = function position(el)
/* istanbul ignore next: getBoundingClientRect() doesn't work in JSDOM */
{
  var _offset = {
    top: 0,
    left: 0
  };

  if (!isElement(el)) {
    return _offset;
  }

  var parentOffset = {
    top: 0,
    left: 0
  };
  var elStyles = getCS(el);

  if (elStyles.position === 'fixed') {
    _offset = getBCR(el) || _offset;
  } else {
    _offset = offset(el);
    var doc = el.ownerDocument;
    var offsetParent = el.offsetParent || doc.documentElement;

    while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && getCS(offsetParent).position === 'static') {
      offsetParent = offsetParent.parentNode;
    }

    if (offsetParent && offsetParent !== el && offsetParent.nodeType === Node.ELEMENT_NODE) {
      parentOffset = offset(offsetParent);
      var offsetParentStyles = getCS(offsetParent);
      parentOffset.top += parseFloat(offsetParentStyles.borderTopWidth);
      parentOffset.left += parseFloat(offsetParentStyles.borderLeftWidth);
    }
  }

  return {
    top: _offset.top - parentOffset.top - parseFloat(elStyles.marginTop),
    left: _offset.left - parentOffset.left - parseFloat(elStyles.marginLeft)
  };
}; // requestAnimationFrame convenience method
// We don't have a version for cancelAnimationFrame, but we don't call it anywhere


exports.position = position;

var requestAF = function requestAF(cb) {
  var w = _env.inBrowser ? window : {};

  var rAF = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.mozRequestAnimationFrame || w.msRequestAnimationFrame || w.oRequestAnimationFrame || function (cb) {
    // Fallback, but not a true polyfill.
    // But all browsers we support (other than Opera Mini) support rAF
    // without a polyfill.

    /* istanbul ignore next */
    return setTimeout(cb, 16);
  };

  return rAF(cb);
};

exports.requestAF = requestAF;

/***/ }),

/***/ "1665":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__("b42e");

var props = {
  tag: {
    type: String,
    default: 'div'
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BFormRow',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'form-row'
    }), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "1691":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "16a3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("130e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "16ae":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _popper = __webpack_require__("f0bd");

var _bvEvent = __webpack_require__("f8bb");

var _noop = __webpack_require__("cab0");

var _array = __webpack_require__("bb2f");

var _dom = __webpack_require__("1611");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var NAME = 'tooltip';
var CLASS_PREFIX = 'bs-tooltip';
var BS_CLASS_PREFIX_REGEX = new RegExp("\\b".concat(CLASS_PREFIX, "\\S+"), 'g');
var TRANSITION_DURATION = 150; // Modal $root hidden event

var MODAL_CLOSE_EVENT = 'bv::modal::hidden'; // Modal container for appending tooltip/popover

var MODAL_CLASS = '.modal-content';
var AttachmentMap = {
  AUTO: 'auto',
  TOP: 'top',
  RIGHT: 'right',
  BOTTOM: 'bottom',
  LEFT: 'left',
  TOPLEFT: 'top',
  TOPRIGHT: 'top',
  RIGHTTOP: 'right',
  RIGHTBOTTOM: 'right',
  BOTTOMLEFT: 'bottom',
  BOTTOMRIGHT: 'bottom',
  LEFTTOP: 'left',
  LEFTBOTTOM: 'left'
};
var OffsetMap = {
  AUTO: 0,
  TOPLEFT: -1,
  TOP: 0,
  TOPRIGHT: +1,
  RIGHTTOP: -1,
  RIGHT: 0,
  RIGHTBOTTOM: +1,
  BOTTOMLEFT: -1,
  BOTTOM: 0,
  BOTTOMRIGHT: +1,
  LEFTTOP: -1,
  LEFT: 0,
  LEFTBOTTOM: +1
};
var HoverState = {
  SHOW: 'show',
  OUT: 'out'
};
var ClassName = {
  FADE: 'fade',
  SHOW: 'show'
};
var Selector = {
  TOOLTIP: '.tooltip',
  TOOLTIP_INNER: '.tooltip-inner',
  ARROW: '.arrow'
};
var Defaults = {
  animation: true,
  template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
  trigger: 'hover focus',
  title: '',
  delay: 0,
  html: false,
  placement: 'top',
  offset: 0,
  arrowPadding: 6,
  container: false,
  fallbackPlacement: 'flip',
  callbacks: {},
  boundary: 'scrollParent' // Transition event names

};
var TransitionEndEvents = {
  WebkitTransition: ['webkitTransitionEnd'],
  MozTransition: ['transitionend'],
  OTransition: ['otransitionend', 'oTransitionEnd'],
  transition: ['transitionend'] // Client-side tip ID counter for aria-describedby attribute
  // Each tooltip requires a unique client side ID

};
var NEXTID = 1;
/* istanbul ignore next */

var generateId = function generateId(name) {
  return "__BV_".concat(name, "_").concat(NEXTID++, "__");
};
/*
 * ToolTip class definition
 */

/* istanbul ignore next: difficult to test in Jest/JSDOM environment */


var ToolTip =
/*#__PURE__*/
function () {
  // Main constructor
  function ToolTip(element, config, $root) {
    _classCallCheck(this, ToolTip);

    // New tooltip object
    this.$isEnabled = true;
    this.$fadeTimeout = null;
    this.$hoverTimeout = null;
    this.$visibleInterval = null;
    this.$hoverState = '';
    this.$activeTrigger = {};
    this.$popper = null;
    this.$element = element;
    this.$tip = null;
    this.$id = generateId(this.constructor.NAME);
    this.$root = $root || null;
    this.$routeWatcher = null; // We use a bound version of the following handlers for root/modal
    // listeners to maintain the 'this' context

    this.$forceHide = this.forceHide.bind(this);
    this.$doHide = this.doHide.bind(this);
    this.$doShow = this.doShow.bind(this);
    this.$doDisable = this.doDisable.bind(this);
    this.$doEnable = this.doEnable.bind(this);
    this._noop = _noop.default.bind(this); // Set the configuration

    this.updateConfig(config);
  } // NOTE: Overridden by PopOver class


  _createClass(ToolTip, [{
    key: "updateConfig",
    // Update config
    value: function updateConfig(config) {
      // Merge config into defaults. We use "this" here because PopOver overrides Default
      var updatedConfig = _objectSpread({}, this.constructor.Default, config); // Sanitize delay


      if (config.delay && typeof config.delay === 'number') {
        updatedConfig.delay = {
          show: config.delay,
          hide: config.delay
        };
      } // Title for tooltip and popover


      if (config.title && typeof config.title === 'number') {
        updatedConfig.title = config.title.toString();
      } // Content only for popover


      if (config.content && typeof config.content === 'number') {
        updatedConfig.content = config.content.toString();
      } // Hide element original title if needed


      this.fixTitle(); // Update the config

      this.$config = updatedConfig; // Stop/Restart listening

      this.unListen();
      this.listen();
    } // Destroy this instance

  }, {
    key: "destroy",
    value: function destroy() {
      // Stop listening to trigger events
      this.unListen(); // Disable while open listeners/watchers

      this.setWhileOpenListeners(false); // Clear any timeouts

      clearTimeout(this.$hoverTimeout);
      this.$hoverTimeout = null;
      clearTimeout(this.$fadeTimeout);
      this.$fadeTimeout = null; // Remove popper

      if (this.$popper) {
        this.$popper.destroy();
      }

      this.$popper = null; // Remove tip from document

      if (this.$tip && this.$tip.parentElement) {
        this.$tip.parentElement.removeChild(this.$tip);
      }

      this.$tip = null; // Null out other properties

      this.$id = null;
      this.$isEnabled = null;
      this.$root = null;
      this.$element = null;
      this.$config = null;
      this.$hoverState = null;
      this.$activeTrigger = null;
      this.$forceHide = null;
      this.$doHide = null;
      this.$doShow = null;
      this.$doDisable = null;
      this.$doEnable = null;
    }
  }, {
    key: "enable",
    value: function enable() {
      // Create a non-cancelable BvEvent
      var enabledEvt = new _bvEvent.default('enabled', {
        cancelable: false,
        target: this.$element,
        relatedTarget: null
      });
      this.$isEnabled = true;
      this.emitEvent(enabledEvt);
    }
  }, {
    key: "disable",
    value: function disable() {
      // Create a non-cancelable BvEvent
      var disabledEvt = new _bvEvent.default('disabled', {
        cancelable: false,
        target: this.$element,
        relatedTarget: null
      });
      this.$isEnabled = false;
      this.emitEvent(disabledEvt);
    } // Click toggler

  }, {
    key: "toggle",
    value: function toggle(event) {
      if (!this.$isEnabled) {
        return;
      }

      if (event) {
        this.$activeTrigger.click = !this.$activeTrigger.click;

        if (this.isWithActiveTrigger()) {
          this.enter(null);
        } else {
          this.leave(null);
        }
      } else {
        if ((0, _dom.hasClass)(this.getTipElement(), ClassName.SHOW)) {
          this.leave(null);
        } else {
          this.enter(null);
        }
      }
    } // Show tooltip

  }, {
    key: "show",
    value: function show() {
      var _this = this;

      if (!document.body.contains(this.$element) || !(0, _dom.isVisible)(this.$element)) {
        // If trigger element isn't in the DOM or is not visible
        return;
      } // Build tooltip element (also sets this.$tip)


      var tip = this.getTipElement();
      this.fixTitle();
      this.setContent(tip);

      if (!this.isWithContent(tip)) {
        // If no content, don't bother showing
        this.$tip = null;
        return;
      } // Set ID on tip and aria-describedby on element


      (0, _dom.setAttr)(tip, 'id', this.$id);
      this.addAriaDescribedby(); // Set animation on or off

      if (this.$config.animation) {
        (0, _dom.addClass)(tip, ClassName.FADE);
      } else {
        (0, _dom.removeClass)(tip, ClassName.FADE);
      }

      var placement = this.getPlacement();
      var attachment = this.constructor.getAttachment(placement);
      this.addAttachmentClass(attachment); // Create a cancelable BvEvent

      var showEvt = new _bvEvent.default('show', {
        cancelable: true,
        target: this.$element,
        relatedTarget: tip
      });
      this.emitEvent(showEvt);

      if (showEvt.defaultPrevented) {
        // Don't show if event cancelled
        this.$tip = null;
        return;
      } // Insert tooltip if needed


      var container = this.getContainer();

      if (!document.body.contains(tip)) {
        container.appendChild(tip);
      } // Refresh popper


      this.removePopper();
      this.$popper = new _popper.default(this.$element, tip, this.getPopperConfig(placement, tip)); // Transitionend callback

      var complete = function complete() {
        if (_this.$config.animation) {
          _this.fixTransition(tip);
        }

        var prevHoverState = _this.$hoverState;
        _this.$hoverState = null;

        if (prevHoverState === HoverState.OUT) {
          _this.leave(null);
        } // Create a non-cancelable BvEvent


        var shownEvt = new _bvEvent.default('shown', {
          cancelable: false,
          target: _this.$element,
          relatedTarget: tip
        });

        _this.emitEvent(shownEvt);
      }; // Enable while open listeners/watchers


      this.setWhileOpenListeners(true); // Show tip

      (0, _dom.addClass)(tip, ClassName.SHOW); // Start the transition/animation

      this.transitionOnce(tip, complete);
    } // Handler for periodic visibility check

  }, {
    key: "visibleCheck",
    value: function visibleCheck(on) {
      var _this2 = this;

      clearInterval(this.$visibleInterval);
      this.$visibleInterval = null;

      if (on) {
        this.$visibleInterval = setInterval(function () {
          var tip = _this2.getTipElement();

          if (tip && !(0, _dom.isVisible)(_this2.$element) && (0, _dom.hasClass)(tip, ClassName.SHOW)) {
            // Element is no longer visible, so force-hide the tooltip
            _this2.forceHide();
          }
        }, 100);
      }
    }
  }, {
    key: "setWhileOpenListeners",
    value: function setWhileOpenListeners(on) {
      // Modal close events
      this.setModalListener(on); // Periodic $element visibility check
      // For handling when tip is in <keepalive>, tabs, carousel, etc

      this.visibleCheck(on); // Route change events

      this.setRouteWatcher(on); // On-touch start listeners

      this.setOnTouchStartListener(on);

      if (on && /(focus|blur)/.test(this.$config.trigger)) {
        // If focus moves between trigger element and tip container, don't close
        (0, _dom.eventOn)(this.$tip, 'focusout', this);
      } else {
        (0, _dom.eventOff)(this.$tip, 'focusout', this);
      }
    } // Force hide of tip (internal method)

  }, {
    key: "forceHide",
    value: function forceHide() {
      if (!this.$tip || !(0, _dom.hasClass)(this.$tip, ClassName.SHOW)) {
        return;
      } // Disable while open listeners/watchers


      this.setWhileOpenListeners(false); // Clear any hover enter/leave event

      clearTimeout(this.$hoverTimeout);
      this.$hoverTimeout = null;
      this.$hoverState = ''; // Hide the tip

      this.hide(null, true);
    } // Hide tooltip

  }, {
    key: "hide",
    value: function hide(callback, force) {
      var _this3 = this;

      var tip = this.$tip;

      if (!tip) {
        return;
      } // Create a cancelable BvEvent


      var hideEvt = new _bvEvent.default('hide', {
        // We disable cancelling if force is true
        cancelable: !force,
        target: this.$element,
        relatedTarget: tip
      });
      this.emitEvent(hideEvt);

      if (hideEvt.defaultPrevented) {
        // Don't hide if event cancelled
        return;
      } // Transitionend callback

      /* istanbul ignore next */


      var complete = function complete() {
        if (_this3.$hoverState !== HoverState.SHOW && tip.parentNode) {
          // Remove tip from DOM, and force recompile on next show
          tip.parentNode.removeChild(tip);

          _this3.removeAriaDescribedby();

          _this3.removePopper();

          _this3.$tip = null;
        }

        if (callback) {
          callback();
        } // Create a non-cancelable BvEvent


        var hiddenEvt = new _bvEvent.default('hidden', {
          cancelable: false,
          target: _this3.$element,
          relatedTarget: null
        });

        _this3.emitEvent(hiddenEvt);
      }; // Disable while open listeners/watchers


      this.setWhileOpenListeners(false); // If forced close, disable animation

      if (force) {
        (0, _dom.removeClass)(tip, ClassName.FADE);
      } // Hide tip


      (0, _dom.removeClass)(tip, ClassName.SHOW);
      this.$activeTrigger.click = false;
      this.$activeTrigger.focus = false;
      this.$activeTrigger.hover = false; // Start the hide transition

      this.transitionOnce(tip, complete);
      this.$hoverState = '';
    }
  }, {
    key: "emitEvent",
    value: function emitEvent(evt) {
      var evtName = evt.type;

      if (this.$root && this.$root.$emit) {
        // Emit an event on $root
        this.$root.$emit("bv::".concat(this.constructor.NAME, "::").concat(evtName), evt);
      }

      var callbacks = this.$config.callbacks || {};

      if (typeof callbacks[evtName] === 'function') {
        callbacks[evtName](evt);
      }
    }
  }, {
    key: "getContainer",
    value: function getContainer() {
      var container = this.$config.container;
      var body = document.body; // If we are in a modal, we append to the modal instead of body,
      // unless a container is specified

      return container === false ? (0, _dom.closest)(MODAL_CLASS, this.$element) || body : (0, _dom.select)(container, body) || body;
    } // Will be overridden by PopOver if needed

  }, {
    key: "addAriaDescribedby",
    value: function addAriaDescribedby() {
      // Add aria-describedby on trigger element, without removing any other IDs
      var desc = (0, _dom.getAttr)(this.$element, 'aria-describedby') || '';
      desc = desc.split(/\s+/).concat(this.$id).join(' ').trim();
      (0, _dom.setAttr)(this.$element, 'aria-describedby', desc);
    } // Will be overridden by PopOver if needed

  }, {
    key: "removeAriaDescribedby",
    value: function removeAriaDescribedby() {
      var _this4 = this;

      var desc = (0, _dom.getAttr)(this.$element, 'aria-describedby') || '';
      desc = desc.split(/\s+/).filter(function (d) {
        return d !== _this4.$id;
      }).join(' ').trim();

      if (desc) {
        (0, _dom.setAttr)(this.$element, 'aria-describedby', desc);
      } else {
        (0, _dom.removeAttr)(this.$element, 'aria-describedby');
      }
    }
  }, {
    key: "removePopper",
    value: function removePopper() {
      if (this.$popper) {
        this.$popper.destroy();
      }

      this.$popper = null;
    }
    /* istanbul ignore next */

  }, {
    key: "transitionOnce",
    value: function transitionOnce(tip, complete) {
      var _this5 = this;

      var transEvents = this.getTransitionEndEvents();
      var called = false;
      clearTimeout(this.$fadeTimeout);
      this.$fadeTimeout = null;

      var fnOnce = function fnOnce() {
        if (called) {
          return;
        }

        called = true;
        clearTimeout(_this5.$fadeTimeout);
        _this5.$fadeTimeout = null;
        transEvents.forEach(function (evtName) {
          (0, _dom.eventOff)(tip, evtName, fnOnce);
        }); // Call complete callback

        complete();
      };

      if ((0, _dom.hasClass)(tip, ClassName.FADE)) {
        transEvents.forEach(function (evtName) {
          (0, _dom.eventOn)(tip, evtName, fnOnce);
        }); // Fallback to setTimeout()

        this.$fadeTimeout = setTimeout(fnOnce, TRANSITION_DURATION);
      } else {
        fnOnce();
      }
    } // What transitionend event(s) to use? (returns array of event names)

  }, {
    key: "getTransitionEndEvents",
    value: function getTransitionEndEvents() {
      for (var name in TransitionEndEvents) {
        if (this.$element.style[name] !== undefined) {
          return TransitionEndEvents[name];
        }
      } // Fallback


      return [];
    }
  }, {
    key: "update",
    value: function update() {
      if (this.$popper !== null) {
        this.$popper.scheduleUpdate();
      }
    } // NOTE: Overridden by PopOver class

  }, {
    key: "isWithContent",
    value: function isWithContent(tip) {
      tip = tip || this.$tip;

      if (!tip) {
        return false;
      }

      return Boolean(((0, _dom.select)(Selector.TOOLTIP_INNER, tip) || {}).innerHTML);
    } // NOTE: Overridden by PopOver class

  }, {
    key: "addAttachmentClass",
    value: function addAttachmentClass(attachment) {
      (0, _dom.addClass)(this.getTipElement(), "".concat(CLASS_PREFIX, "-").concat(attachment));
    }
  }, {
    key: "getTipElement",
    value: function getTipElement() {
      if (!this.$tip) {
        // Try and compile user supplied template, or fallback to default template
        this.$tip = this.compileTemplate(this.$config.template) || this.compileTemplate(this.constructor.Default.template);
      } // Add tab index so tip can be focused, and to allow it to be
      // set as relatedTarget in focusin/out events


      this.$tip.tabIndex = -1;
      return this.$tip;
    }
  }, {
    key: "compileTemplate",
    value: function compileTemplate(html) {
      if (!html || typeof html !== 'string') {
        return null;
      }

      var div = document.createElement('div');
      div.innerHTML = html.trim();
      var node = div.firstElementChild ? div.removeChild(div.firstElementChild) : null;
      div = null;
      return node;
    } // NOTE: Overridden by PopOver class

  }, {
    key: "setContent",
    value: function setContent(tip) {
      this.setElementContent((0, _dom.select)(Selector.TOOLTIP_INNER, tip), this.getTitle());
      (0, _dom.removeClass)(tip, ClassName.FADE);
      (0, _dom.removeClass)(tip, ClassName.SHOW);
    }
  }, {
    key: "setElementContent",
    value: function setElementContent(container, content) {
      if (!container) {
        // If container element doesn't exist, just return
        return;
      }

      var allowHtml = this.$config.html;

      if (_typeof(content) === 'object' && content.nodeType) {
        // Content is a DOM node
        if (allowHtml) {
          if (content.parentElement !== container) {
            container.innerHTML = '';
            container.appendChild(content);
          }
        } else {
          container.innerText = content.innerText;
        }
      } else {
        // We have a plain HTML string or Text
        container[allowHtml ? 'innerHTML' : 'innerText'] = content;
      }
    } // NOTE: Overridden by PopOver class

  }, {
    key: "getTitle",
    value: function getTitle() {
      var title = this.$config.title || '';

      if (typeof title === 'function') {
        // Call the function to get the title value
        title = title(this.$element);
      }

      if (_typeof(title) === 'object' && title.nodeType && !title.innerHTML.trim()) {
        // We have a DOM node, but without inner content,
        // so just return empty string
        title = '';
      }

      if (typeof title === 'string') {
        title = title.trim();
      }

      if (!title) {
        // If an explicit title is not given, try element's title attributes
        title = (0, _dom.getAttr)(this.$element, 'title') || (0, _dom.getAttr)(this.$element, 'data-original-title') || '';
        title = title.trim();
      }

      return title;
    }
  }, {
    key: "listen",
    value: function listen() {
      var _this6 = this;

      var triggers = this.$config.trigger.trim().split(/\s+/);
      var el = this.$element; // Listen for global show/hide events

      this.setRootListener(true); // Using 'this' as the handler will get automatically directed to
      // this.handleEvent and maintain our binding to 'this'

      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          (0, _dom.eventOn)(el, 'click', _this6);
        } else if (trigger === 'focus') {
          (0, _dom.eventOn)(el, 'focusin', _this6);
          (0, _dom.eventOn)(el, 'focusout', _this6);
        } else if (trigger === 'blur') {
          // Used to close $tip when element looses focus
          (0, _dom.eventOn)(el, 'focusout', _this6);
        } else if (trigger === 'hover') {
          (0, _dom.eventOn)(el, 'mouseenter', _this6);
          (0, _dom.eventOn)(el, 'mouseleave', _this6);
        }
      }, this);
    }
  }, {
    key: "unListen",
    value: function unListen() {
      var _this7 = this;

      var events = ['click', 'focusin', 'focusout', 'mouseenter', 'mouseleave']; // Using "this" as the handler will get automatically directed to this.handleEvent

      events.forEach(function (evt) {
        (0, _dom.eventOff)(_this7.$element, evt, _this7);
      }, this); // Stop listening for global show/hide/enable/disable events

      this.setRootListener(false);
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(e) {
      // This special method allows us to use "this" as the event handlers
      if ((0, _dom.isDisabled)(this.$element)) {
        // If disabled, don't do anything. Note: If tip is shown before element gets
        // disabled, then tip not close until no longer disabled or forcefully closed.
        return;
      }

      if (!this.$isEnabled) {
        // If not enable
        return;
      }

      var type = e.type;
      var target = e.target;
      var relatedTarget = e.relatedTarget;
      var $element = this.$element;
      var $tip = this.$tip;

      if (type === 'click') {
        this.toggle(e);
      } else if (type === 'focusin' || type === 'mouseenter') {
        this.enter(e);
      } else if (type === 'focusout') {
        // target is the element which is loosing focus
        // and relatedTarget is the element gaining focus
        if ($tip && $element && $element.contains(target) && $tip.contains(relatedTarget)) {
          // If focus moves from $element to $tip, don't trigger a leave
          return;
        }

        if ($tip && $element && $tip.contains(target) && $element.contains(relatedTarget)) {
          // If focus moves from $tip to $element, don't trigger a leave
          return;
        }

        if ($tip && $tip.contains(target) && $tip.contains(relatedTarget)) {
          // If focus moves within $tip, don't trigger a leave
          return;
        }

        if ($element && $element.contains(target) && $element.contains(relatedTarget)) {
          // If focus moves within $element, don't trigger a leave
          return;
        } // Otherwise trigger a leave


        this.leave(e);
      } else if (type === 'mouseleave') {
        this.leave(e);
      }
    }
    /* istanbul ignore next */

  }, {
    key: "setRouteWatcher",
    value: function setRouteWatcher(on) {
      var _this8 = this;

      if (on) {
        this.setRouteWatcher(false);

        if (this.$root && Boolean(this.$root.$route)) {
          this.$routeWatcher = this.$root.$watch('$route', function (newVal, oldVal) {
            if (newVal === oldVal) {
              return;
            } // If route has changed, we force hide the tooltip/popover


            _this8.forceHide();
          });
        }
      } else {
        if (this.$routeWatcher) {
          // Cancel the route watcher by calling the stored reference
          this.$routeWatcher();
          this.$routeWatcher = null;
        }
      }
    }
    /* istanbul ignore next */

  }, {
    key: "setModalListener",
    value: function setModalListener(on) {
      var modal = (0, _dom.closest)(MODAL_CLASS, this.$element);

      if (!modal) {
        // If we are not in a modal, don't worry. be happy
        return;
      } // We can listen for modal hidden events on $root


      if (this.$root) {
        this.$root[on ? '$on' : '$off'](MODAL_CLOSE_EVENT, this.$forceHide);
      }
    }
    /* istanbul ignore next */

  }, {
    key: "setRootListener",
    value: function setRootListener(on) {
      // Listen for global 'bv::{hide|show}::{tooltip|popover}' hide request event
      if (this.$root) {
        this.$root[on ? '$on' : '$off']("bv::hide::".concat(this.constructor.NAME), this.$doHide);
        this.$root[on ? '$on' : '$off']("bv::show::".concat(this.constructor.NAME), this.$doShow);
        this.$root[on ? '$on' : '$off']("bv::disable::".concat(this.constructor.NAME), this.$doDisable);
        this.$root[on ? '$on' : '$off']("bv::enable::".concat(this.constructor.NAME), this.$doEnable);
      }
    }
  }, {
    key: "doHide",
    value: function doHide(id) {
      // Programmatically hide tooltip or popover
      if (!id) {
        // Close all tooltips or popovers
        this.forceHide();
      } else if (this.$element && this.$element.id && this.$element.id === id) {
        // Close this specific tooltip or popover
        this.hide();
      }
    }
  }, {
    key: "doShow",
    value: function doShow(id) {
      // Programmatically show tooltip or popover
      if (!id) {
        // Open all tooltips or popovers
        this.show();
      } else if (id && this.$element && this.$element.id && this.$element.id === id) {
        // Show this specific tooltip or popover
        this.show();
      }
    }
  }, {
    key: "doDisable",
    value: function doDisable(id) {
      // Programmatically disable tooltip or popover
      if (!id) {
        // Disable all tooltips or popovers
        this.disable();
      } else if (this.$element && this.$element.id && this.$element.id === id) {
        // Disable this specific tooltip or popover
        this.disable();
      }
    }
  }, {
    key: "doEnable",
    value: function doEnable(id) {
      // Programmatically enable tooltip or popover
      if (!id) {
        // Enable all tooltips or popovers
        this.enable();
      } else if (this.$element && this.$element.id && this.$element.id === id) {
        // Enable this specific tooltip or popover
        this.enable();
      }
    }
    /* istanbul ignore next */

  }, {
    key: "setOnTouchStartListener",
    value: function setOnTouchStartListener(on) {
      var _this9 = this;

      // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children
      // Only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
      if ('ontouchstart' in document.documentElement) {
        (0, _array.from)(document.body.children).forEach(function (el) {
          if (on) {
            (0, _dom.eventOn)(el, 'mouseover', _this9._noop);
          } else {
            (0, _dom.eventOff)(el, 'mouseover', _this9._noop);
          }
        });
      }
    }
  }, {
    key: "fixTitle",
    value: function fixTitle() {
      var el = this.$element;

      var titleType = _typeof((0, _dom.getAttr)(el, 'data-original-title'));

      if ((0, _dom.getAttr)(el, 'title') || titleType !== 'string') {
        (0, _dom.setAttr)(el, 'data-original-title', (0, _dom.getAttr)(el, 'title') || '');
        (0, _dom.setAttr)(el, 'title', '');
      }
    } // Enter handler

    /* istanbul ignore next */

  }, {
    key: "enter",
    value: function enter(e) {
      var _this10 = this;

      if (e) {
        this.$activeTrigger[e.type === 'focusin' ? 'focus' : 'hover'] = true;
      }

      if ((0, _dom.hasClass)(this.getTipElement(), ClassName.SHOW) || this.$hoverState === HoverState.SHOW) {
        this.$hoverState = HoverState.SHOW;
        return;
      }

      clearTimeout(this.$hoverTimeout);
      this.$hoverState = HoverState.SHOW;

      if (!this.$config.delay || !this.$config.delay.show) {
        this.show();
        return;
      }

      this.$hoverTimeout = setTimeout(function () {
        if (_this10.$hoverState === HoverState.SHOW) {
          _this10.show();
        }
      }, this.$config.delay.show);
    } // Leave handler

    /* istanbul ignore next */

  }, {
    key: "leave",
    value: function leave(e) {
      var _this11 = this;

      if (e) {
        this.$activeTrigger[e.type === 'focusout' ? 'focus' : 'hover'] = false;

        if (e.type === 'focusout' && /blur/.test(this.$config.trigger)) {
          // Special case for `blur`: we clear out the other triggers
          this.$activeTrigger.click = false;
          this.$activeTrigger.hover = false;
        }
      }

      if (this.isWithActiveTrigger()) {
        return;
      }

      clearTimeout(this.$hoverTimeout);
      this.$hoverState = HoverState.OUT;

      if (!this.$config.delay || !this.$config.delay.hide) {
        this.hide();
        return;
      }

      this.$hoverTimeout = setTimeout(function () {
        if (_this11.$hoverState === HoverState.OUT) {
          _this11.hide();
        }
      }, this.$config.delay.hide);
    }
  }, {
    key: "getPopperConfig",
    value: function getPopperConfig(placement, tip) {
      var _this12 = this;

      return {
        placement: this.constructor.getAttachment(placement),
        modifiers: {
          offset: {
            offset: this.getOffset(placement, tip)
          },
          flip: {
            behavior: this.$config.fallbackPlacement
          },
          arrow: {
            element: '.arrow'
          },
          preventOverflow: {
            padding: this.$config.boundaryPadding,
            boundariesElement: this.$config.boundary
          }
        },
        onCreate: function onCreate(data) {
          // Handle flipping arrow classes
          if (data.originalPlacement !== data.placement) {
            _this12.handlePopperPlacementChange(data);
          }
        },
        onUpdate: function onUpdate(data) {
          // Handle flipping arrow classes
          _this12.handlePopperPlacementChange(data);
        }
      };
    }
  }, {
    key: "getOffset",
    value: function getOffset(placement, tip) {
      if (!this.$config.offset) {
        var arrow = (0, _dom.select)(Selector.ARROW, tip);
        var arrowOffset = parseFloat((0, _dom.getCS)(arrow).width) + parseFloat(this.$config.arrowPadding);

        switch (OffsetMap[placement.toUpperCase()]) {
          case +1:
            return "+50%p - ".concat(arrowOffset, "px");

          case -1:
            return "-50%p + ".concat(arrowOffset, "px");

          default:
            return 0;
        }
      }

      return this.$config.offset;
    }
  }, {
    key: "getPlacement",
    value: function getPlacement() {
      var placement = this.$config.placement;

      if (typeof placement === 'function') {
        return placement.call(this, this.$tip, this.$element);
      }

      return placement;
    }
  }, {
    key: "isWithActiveTrigger",
    value: function isWithActiveTrigger() {
      for (var trigger in this.$activeTrigger) {
        if (this.$activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    } // NOTE: Overridden by PopOver class

  }, {
    key: "cleanTipClass",
    value: function cleanTipClass() {
      var tip = this.getTipElement();
      var tabClass = tip.className.match(BS_CLASS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length > 0) {
        tabClass.forEach(function (cls) {
          (0, _dom.removeClass)(tip, cls);
        });
      }
    }
  }, {
    key: "handlePopperPlacementChange",
    value: function handlePopperPlacementChange(data) {
      this.cleanTipClass();
      this.addAttachmentClass(this.constructor.getAttachment(data.placement));
    }
  }, {
    key: "fixTransition",
    value: function fixTransition(tip) {
      var initConfigAnimation = this.$config.animation || false;

      if ((0, _dom.getAttr)(tip, 'x-placement') !== null) {
        return;
      }

      (0, _dom.removeClass)(tip, ClassName.FADE);
      this.$config.animation = false;
      this.hide();
      this.show();
      this.$config.animation = initConfigAnimation;
    }
  }], [{
    key: "getAttachment",
    value: function getAttachment(placement) {
      return AttachmentMap[placement.toUpperCase()];
    }
  }, {
    key: "Default",
    get: function get() {
      return Defaults;
    } // NOTE: Overridden by PopOver class

  }, {
    key: "NAME",
    get: function get() {
      return NAME;
    }
  }]);

  return ToolTip;
}();

var _default = ToolTip;
exports.default = _default;

/***/ }),

/***/ "185a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.computeHref = exports.computeRel = exports.computeTag = exports.isRouterLink = exports.parseQuery = exports.stringifyQueryObj = void 0;

var _object = __webpack_require__("24e2");

var _array = __webpack_require__("bb2f");

var _toString = __webpack_require__("40f6");

var ANCHOR_TAG = 'a'; // Precompile RegExp

var commaRE = /%2C/g;
var encodeReserveRE = /[!'()*]/g; // Method to replace reserved chars

var encodeReserveReplacer = function encodeReserveReplacer(c) {
  return '%' + c.charCodeAt(0).toString(16);
}; // Fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas


var encode = function encode(str) {
  return encodeURIComponent((0, _toString.default)(str)).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ',');
};

var decode = decodeURIComponent; // Stringifies an object of query parameters
// See: https://github.com/vuejs/vue-router/blob/dev/src/util/query.js

var stringifyQueryObj = function stringifyQueryObj(obj) {
  if (!(0, _object.isPlainObject)(obj)) {
    return '';
  }

  var query = (0, _object.keys)(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    } else if (val === null) {
      return encode(key);
    } else if ((0, _array.isArray)(val)) {
      return val.reduce(function (results, val2) {
        if (val2 === null) {
          results.push(encode(key));
        } else if (val2 !== undefined) {
          // Faster than string interpolation
          results.push(encode(key) + '=' + encode(val2));
        }

        return results;
      }, []).join('&');
    } // Faster than string interpolation


    return encode(key) + '=' + encode(val);
  })
  /* must check for length, as we only want to filter empty strings, not things that look falsey! */
  .filter(function (x) {
    return x.length > 0;
  }).join('&');
  return query ? "?".concat(query) : '';
};

exports.stringifyQueryObj = stringifyQueryObj;

var parseQuery = function parseQuery(query) {
  var parsed = {};
  query = (0, _toString.default)(query).trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return parsed;
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0 ? decode(parts.join('=')) : null;

    if (parsed[key] === undefined) {
      parsed[key] = val;
    } else if ((0, _array.isArray)(parsed[key])) {
      parsed[key].push(val);
    } else {
      parsed[key] = [parsed[key], val];
    }
  });
  return parsed;
};

exports.parseQuery = parseQuery;

var isRouterLink = function isRouterLink(tag) {
  return tag !== ANCHOR_TAG;
};

exports.isRouterLink = isRouterLink;

var computeTag = function computeTag() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      to = _ref.to,
      disabled = _ref.disabled;

  var thisOrParent = arguments.length > 1 ? arguments[1] : undefined;
  return thisOrParent.$router && to && !disabled ? thisOrParent.$nuxt ? 'nuxt-link' : 'router-link' : ANCHOR_TAG;
};

exports.computeTag = computeTag;

var computeRel = function computeRel() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      target = _ref2.target,
      rel = _ref2.rel;

  if (target === '_blank' && rel === null) {
    return 'noopener';
  }

  return rel || null;
};

exports.computeRel = computeRel;

var computeHref = function computeHref() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      href = _ref3.href,
      to = _ref3.to;

  var tag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ANCHOR_TAG;
  var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#';
  var toFallback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '/';

  // We've already checked the $router in computeTag(), so isRouterLink() indicates a live router.
  // When deferring to Vue Router's router-link, don't use the href attribute at all.
  // We return null, and then remove href from the attributes passed to router-link
  if (isRouterLink(tag)) {
    return null;
  } // Return `href` when explicitly provided


  if (href) {
    return href;
  } // Reconstruct `href` when `to` used, but no router


  if (to) {
    // Fallback to `to` prop (if `to` is a string)
    if (typeof to === 'string') {
      return to || toFallback;
    } // Fallback to `to.path + to.query + to.hash` prop (if `to` is an object)


    if ((0, _object.isPlainObject)(to) && (to.path || to.query || to.hash)) {
      var path = (0, _toString.default)(to.path);
      var query = stringifyQueryObj(to.query);
      var hash = (0, _toString.default)(to.hash);
      hash = !hash || hash.charAt(0) === '#' ? hash : "#".concat(hash);
      return "".concat(path).concat(query).concat(hash) || toFallback;
    }
  } // If nothing is provided return the fallback


  return fallback;
};

exports.computeHref = computeHref;

/***/ }),

/***/ "19fe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _upperFirst = __webpack_require__("5540");

/**
 * Suffix can be a falsey value so nothing is appended to string.
 * (helps when looping over props & some shouldn't change)
 * Use data last parameters to allow for currying.
 * @param {string} suffix
 * @param {string} str
 */
var suffixPropName = function suffixPropName(suffix, str) {
  return str + (suffix ? (0, _upperFirst.default)(suffix) : '');
};

var _default = suffixPropName;
exports.default = _default;

/***/ }),

/***/ "1bc3":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("f772");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "1bee":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _jumbotron = __webpack_require__("4c74");

var _plugins = __webpack_require__("0a8d");

var components = {
  BJumbotron: _jumbotron.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "1ec9":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("f772");
var document = __webpack_require__("e53d").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "1fae":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__("b42e");

var _prefixPropName = __webpack_require__("e109");

var _copyProps = __webpack_require__("0942");

var _html = __webpack_require__("be11");

var _cardMixin = __webpack_require__("45f0");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var props = _objectSpread({}, (0, _copyProps.default)(_cardMixin.default.props, _prefixPropName.default.bind(null, 'header')), {
  header: {
    type: String,
    default: null
  },
  headerHtml: {
    type: String,
    default: null
  },
  headerClass: {
    type: [String, Object, Array],
    default: null
  } // @vue/component

});

exports.props = props;
var _default = {
  name: 'BCardHeader',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var _ref2;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.headerTag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'card-header',
      class: [props.headerClass, (_ref2 = {}, _defineProperty(_ref2, "bg-".concat(props.headerBgVariant), Boolean(props.headerBgVariant)), _defineProperty(_ref2, "border-".concat(props.headerBorderVariant), Boolean(props.headerBorderVariant)), _defineProperty(_ref2, "text-".concat(props.headerTextVariant), Boolean(props.headerTextVariant)), _ref2)]
    }), children || [h('div', {
      domProps: (0, _html.htmlOrText)(props.headerHtml, props.header)
    })]);
  }
};
exports.default = _default;

/***/ }),

/***/ "211d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__("b42e");

var _config = __webpack_require__("eb60");

var _pluckProps = __webpack_require__("9c97");

var _link = __webpack_require__("4e40");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NAME = 'BBadge';
var linkProps = (0, _link.propsFactory)();
delete linkProps.href.default;
delete linkProps.to.default;

var props = _objectSpread({}, linkProps, {
  tag: {
    type: String,
    default: 'span'
  },
  variant: {
    type: String,
    default: function _default() {
      return (0, _config.getComponentConfig)(NAME, 'variant');
    }
  },
  pill: {
    type: Boolean,
    default: false
  } // @vue/component

});

exports.props = props;
var _default2 = {
  name: NAME,
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var tag = !props.href && !props.to ? props.tag : _link.default;
    var componentData = {
      staticClass: 'badge',
      class: ["badge-".concat(props.variant || (0, _config.getComponentConfig)(NAME, 'variant')), {
        'badge-pill': Boolean(props.pill),
        active: props.active,
        disabled: props.disabled
      }],
      props: (0, _pluckProps.default)(linkProps, props)
    };
    return h(tag, (0, _vueFunctionalDataMerge.mergeData)(data, componentData), children);
  }
};
exports.default = _default2;

/***/ }),

/***/ "2227":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = stringifyObjectValues;

var _object = __webpack_require__("24e2");

// Recursively stringifies the values of an object, space separated, in an
// SSR safe deterministic way (keys are storted before stringification)
//
//   ex:
//     { b: 3, c: { z: 'zzz', d: null, e: 2 }, d: [10, 12, 11], a: 'one' }
//   becomes
//     'one 3 2 zzz 10 12 11'
//
// Primatives (numbers/strings) are returned as-is
// Null and undefined values are filtered out
// Dates are converted to their native string format
//
function stringifyObjectValues(val) {
  if (typeof val === 'undefined' || val === null) {
    /* istanbul ignore next */
    return '';
  }

  if (val instanceof Object && !(val instanceof Date)) {
    // Arrays are also object, and keys just returns the array indexes
    // Date objects we convert to strings
    return (0, _object.keys)(val).sort()
    /* sort to prevent SSR issues on pre-rendered sorted tables */
    .filter(function (v) {
      return v !== undefined && v !== null;
    })
    /* ignore undefined/null values */
    .map(function (k) {
      return stringifyObjectValues(val[k]);
    }).join(' ');
  }

  return String(val);
}

/***/ }),

/***/ "22dc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _form = __webpack_require__("0596");

var _vueFunctionalDataMerge = __webpack_require__("b42e");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  name: 'BDropdownForm',
  functional: true,
  props: _objectSpread({}, _form.props),
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(_form.default, (0, _vueFunctionalDataMerge.mergeData)(data, {
      props: props,
      staticClass: 'b-dropdown-form'
    }), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "23c9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__("b42e");

var props = {
  src: {
    type: String,
    default: null,
    required: true
  },
  alt: {
    type: String,
    default: null
  },
  top: {
    type: Boolean,
    default: false
  },
  bottom: {
    type: Boolean,
    default: false
  },
  left: {
    type: Boolean,
    default: false
  },
  start: {
    type: Boolean,
    default: false // alias of 'left'

  },
  right: {
    type: Boolean,
    default: false
  },
  end: {
    type: Boolean,
    default: false // alias of 'right'

  },
  height: {
    type: String,
    default: null
  },
  width: {
    type: String,
    default: null
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BCardImg',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data;
    var baseClass = 'card-img';

    if (props.top) {
      baseClass += '-top';
    } else if (props.right || props.end) {
      baseClass += '-right';
    } else if (props.bottom) {
      baseClass += '-bottom';
    } else if (props.left || props.start) {
      baseClass += '-left';
    }

    return h('img', (0, _vueFunctionalDataMerge.mergeData)(data, {
      class: [baseClass],
      attrs: {
        src: props.src,
        alt: props.alt,
        height: props.height,
        width: props.width
      }
    }));
  }
};
exports.default = _default;

/***/ }),

/***/ "23f0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _buttonClose = __webpack_require__("600b");

var _config = __webpack_require__("eb60");

var _dom = __webpack_require__("1611");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NAME = 'BAlert'; // @vue/component

var _default2 = {
  name: NAME,
  components: {
    BButtonClose: _buttonClose.default
  },
  model: {
    prop: 'show',
    event: 'input'
  },
  props: {
    variant: {
      type: String,
      default: function _default() {
        return (0, _config.getComponentConfig)(NAME, 'variant');
      }
    },
    dismissible: {
      type: Boolean,
      default: false
    },
    dismissLabel: {
      type: String,
      default: function _default() {
        return (0, _config.getComponentConfig)(NAME, 'dismissLabel');
      }
    },
    show: {
      type: [Boolean, Number],
      default: false
    },
    fade: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      countDownTimerId: null,
      dismissed: false,
      localShow: this.show,
      showClass: this.fade && this.show
    };
  },
  watch: {
    show: function show(newVal) {
      this.showChanged(newVal);
    },
    dismissed: function dismissed(newVal) {
      if (newVal) {
        this.localShow = false;
        this.$emit('dismissed');
      }
    }
  },
  mounted: function mounted() {
    this.showChanged(this.show);
  },
  destroyed
  /* istanbul ignore next */
  : function destroyed() {
    this.clearCounter();
  },
  methods: {
    dismiss: function dismiss() {
      this.clearCounter();

      if (typeof this.show === 'number') {
        this.$emit('dismiss-count-down', 0);
        this.$emit('input', 0);
      } else {
        this.$emit('input', false);
      }

      this.dismissed = true;
    },
    clearCounter: function clearCounter() {
      if (this.countDownTimerId) {
        clearInterval(this.countDownTimerId);
        this.countDownTimerId = null;
      }
    },
    showChanged: function showChanged(show) {
      var _this = this;

      // Reset counter status
      this.clearCounter(); // Reset dismiss status

      this.dismissed = false; // Set localShow state

      this.localShow = Boolean(show); // No timer for boolean values

      if (show === true || show === false || show === null || show === 0) {
        return;
      } // Start counter (ensure we have an integer value)


      var dismissCountDown = parseInt(show, 10) || 1;
      this.countDownTimerId = setInterval(function () {
        if (dismissCountDown < 1) {
          _this.dismiss();

          return;
        }

        dismissCountDown--;

        _this.$emit('dismiss-count-down', dismissCountDown);

        _this.$emit('input', dismissCountDown);
      }, 1000);
    },
    onBeforeEnter: function onBeforeEnter() {
      var _this2 = this;

      if (this.fade) {
        // Add show class one frame after inserted, to make transitions work
        (0, _dom.requestAF)(function () {
          _this2.showClass = true;
        });
      }
    },
    onBeforeLeave: function onBeforeLeave()
    /* istanbul ignore next: does not appear to be called in vue-test-utils */
    {
      this.showClass = false;
    }
  },
  render: function render(h) {
    var $slots = this.$slots;
    var $alert = h(false);

    if (this.localShow) {
      var $dismissBtn = h(false);

      if (this.dismissible) {
        $dismissBtn = h('b-button-close', {
          attrs: {
            'aria-label': this.dismissLabel
          },
          on: {
            click: this.dismiss
          }
        }, [$slots.dismiss]);
      }

      $alert = h('div', {
        staticClass: 'alert',
        class: _defineProperty({
          fade: this.fade,
          show: this.showClass,
          'alert-dismissible': this.dismissible
        }, "alert-".concat(this.variant), this.variant),
        attrs: {
          role: 'alert',
          'aria-live': 'polite',
          'aria-atomic': true
        }
      }, [$dismissBtn, $slots.default]);
      $alert = [$alert];
    }

    return h('transition', {
      props: {
        mode: 'out-in',
        // Disable use of built-in transition classes
        'enter-class': '',
        'enter-active-class': '',
        'enter-to-class': '',
        'leave-class': 'show',
        'leave-active-class': '',
        'leave-to-class': ''
      },
      on: {
        beforeEnter: this.onBeforeEnter,
        beforeLeave: this.onBeforeLeave
      }
    }, $alert);
  }
};
exports.default = _default2;

/***/ }),

/***/ "241e":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("25eb");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "249f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _tooltip = __webpack_require__("e93a");

var _tooltip2 = __webpack_require__("2eee");

var _plugins = __webpack_require__("0a8d");

var components = {
  BTooltip: _tooltip.default
};
var plugins = {
  BTooltipDirectivePlugin: _tooltip2.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components,
    plugins: plugins
  })
};
exports.default = _default;

/***/ }),

/***/ "24e2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.readonlyDescriptor = exports.omit = exports.isPlainObject = exports.isObject = exports.is = exports.isFrozen = exports.create = exports.getPrototypeOf = exports.getOwnPropertySymbols = exports.getOwnPropertyDescriptor = exports.freeze = exports.defineProperty = exports.defineProperties = exports.keys = exports.getOwnPropertyNames = exports.assign = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Aliasing Object[method] allows the minifier to shorten methods to a single character variable,
 * as well as giving BV a chance to inject polyfills.
 * As long as we avoid
 * - import * as Object from "utils/object"
 * all unused exports should be removed by tree-shaking.
 */
// @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

/* istanbul ignore if */
if (typeof Object.assign !== 'function') {
  Object.assign = function (target, varArgs) {
    // .length of function is 2
    if (target == null) {
      // TypeError if undefined or null
      throw new TypeError('Cannot convert undefined or null to object');
    }

    var to = Object(target);

    for (var index = 1; index < arguments.length; index++) {
      var nextSource = arguments[index];

      if (nextSource != null) {
        // Skip over if undefined or null
        for (var nextKey in nextSource) {
          // Avoid bugs when hasOwnProperty is shadowed
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }

    return to;
  };
} // @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is#Polyfill

/* istanbul ignore if */


if (!Object.is) {
  Object.is = function (x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      // eslint-disable-next-line no-self-compare
      return x !== x && y !== y;
    }
  };
}

var assign = Object.assign;
exports.assign = assign;
var getOwnPropertyNames = Object.getOwnPropertyNames;
exports.getOwnPropertyNames = getOwnPropertyNames;
var keys = Object.keys;
exports.keys = keys;
var defineProperties = Object.defineProperties;
exports.defineProperties = defineProperties;
var defineProperty = Object.defineProperty;
exports.defineProperty = defineProperty;
var freeze = Object.freeze;
exports.freeze = freeze;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
exports.getOwnPropertyDescriptor = getOwnPropertyDescriptor;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
exports.getOwnPropertySymbols = getOwnPropertySymbols;
var getPrototypeOf = Object.getPrototypeOf;
exports.getPrototypeOf = getPrototypeOf;
var create = Object.create;
exports.create = create;
var isFrozen = Object.isFrozen;
exports.isFrozen = isFrozen;
var is = Object.is;
/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 * Note object could be a complex type like array, date, etc.
 */

exports.is = is;

var isObject = function isObject(obj) {
  return obj !== null && _typeof(obj) === 'object';
};
/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */


exports.isObject = isObject;

var isPlainObject = function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}; // @link https://gist.github.com/bisubus/2da8af7e801ffd813fab7ac221aa7afc


exports.isPlainObject = isPlainObject;

var omit = function omit(obj, props) {
  return Object.keys(obj).filter(function (key) {
    return props.indexOf(key) === -1;
  }).reduce(function (result, key) {
    return _objectSpread({}, result, _defineProperty({}, key, obj[key]));
  }, {});
};

exports.omit = omit;

var readonlyDescriptor = function readonlyDescriptor() {
  return {
    enumerable: true,
    configurable: false,
    writable: false
  };
};

exports.readonlyDescriptor = readonlyDescriptor;

/***/ }),

/***/ "256b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _modal = __webpack_require__("3a5b");

var _modal2 = __webpack_require__("be8c");

var _plugins = __webpack_require__("0a8d");

var components = {
  BModal: _modal.default
};
var plugins = {
  BModalDirectivePlugin: _modal2.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components,
    plugins: plugins
  })
};
exports.default = _default;

/***/ }),

/***/ "25eb":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "2635":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _img = __webpack_require__("4c76");

var _imgLazy = __webpack_require__("294b");

var _plugins = __webpack_require__("0a8d");

var components = {
  BImg: _img.default,
  BImgLazy: _imgLazy.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "282f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _toString = __webpack_require__("40f6");

var _get = __webpack_require__("b0df");

var _keyCodes = __webpack_require__("06e4");

var _array = __webpack_require__("bb2f");

var _filterEvent = __webpack_require__("382a");

var _textSelectionActive = __webpack_require__("c57f");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  props: {
    tbodyTrClass: {
      type: [String, Array, Function],
      default: null
    }
  },
  methods: {
    // Methods for computing classes, attributes and styles for table cells
    tdClasses: function tdClasses(field, item) {
      var cellVariant = '';

      if (item._cellVariants && item._cellVariants[field.key]) {
        cellVariant = "".concat(this.dark ? 'bg' : 'table', "-").concat(item._cellVariants[field.key]);
      }

      return [field.variant && !cellVariant ? "".concat(this.dark ? 'bg' : 'table', "-").concat(field.variant) : '', cellVariant, field.class ? field.class : '', this.getTdValues(item, field.key, field.tdClass, '')];
    },
    tdAttrs: function tdAttrs(field, item, colIndex) {
      var attrs = {
        role: 'cell',
        'aria-colindex': String(colIndex + 1)
      };

      if (field.isRowHeader) {
        attrs.scope = 'row';
        attrs.role = 'rowheader';
      }

      if (this.isStacked) {
        // Generate the "header cell" label content in stacked mode
        attrs['data-label'] = field.label;
      }

      return _objectSpread({}, attrs, this.getTdValues(item, field.key, field.tdAttr, {}));
    },
    rowClasses: function rowClasses(item) {
      return [item._rowVariant ? "".concat(this.dark ? 'bg' : 'table', "-").concat(item._rowVariant) : '', typeof this.tbodyTrClass === 'function' ? this.tbodyTrClass(item, 'row') : this.tbodyTrClass];
    },
    getTdValues: function getTdValues(item, key, tdValue, defValue) {
      var parent = this.$parent;

      if (tdValue) {
        var value = (0, _get.default)(item, key, '');

        if (typeof tdValue === 'function') {
          return tdValue(value, key, item);
        } else if (typeof tdValue === 'string' && typeof parent[tdValue] === 'function') {
          return parent[tdValue](value, key, item);
        }

        return tdValue;
      }

      return defValue;
    },
    // Method to get the value for a field
    getFormattedValue: function getFormattedValue(item, field) {
      var key = field.key;
      var formatter = field.formatter;
      var parent = this.$parent;
      var value = (0, _get.default)(item, key, null);

      if (formatter) {
        if (typeof formatter === 'function') {
          value = formatter(value, key, item);
        } else if (typeof formatter === 'string' && typeof parent[formatter] === 'function') {
          value = parent[formatter](value, key, item);
        }
      }

      return value === null || typeof value === 'undefined' ? '' : value;
    },
    tbodyRowKeydown: function tbodyRowKeydown(evt, item, rowIndex) {
      var keyCode = evt.keyCode;
      var target = evt.target;
      var trs = this.$refs.itemRows;

      if (this.stopIfBusy(evt)) {
        // If table is busy (via provider) then don't propagate
        return;
      } else if (!(target && target.tagName === 'TR' && target === document.activeElement)) {
        // Ignore if not the active tr element
        return;
      } else if (target.tabIndex !== 0) {
        // Ignore if not focusable

        /* istanbul ignore next */
        return;
      } else if (trs && trs.length === 0) {
        /* istanbul ignore next */
        return;
      }

      var index = trs.indexOf(target);

      if (keyCode === _keyCodes.default.ENTER || keyCode === _keyCodes.default.SPACE) {
        evt.stopPropagation();
        evt.preventDefault(); // We also allow enter/space to trigger a click (when row is focused)
        // We translate to a row-clicked event

        this.rowClicked(evt, item, rowIndex);
      } else if ((0, _array.arrayIncludes)([_keyCodes.default.UP, _keyCodes.default.DOWN, _keyCodes.default.HOME, _keyCodes.default.END], keyCode)) {
        evt.stopPropagation();
        evt.preventDefault();
        var shift = evt.shiftKey;

        if (keyCode === _keyCodes.default.HOME || shift && keyCode === _keyCodes.default.UP) {
          // Focus first row
          trs[0].focus();
        } else if (keyCode === _keyCodes.default.END || shift && keyCode === _keyCodes.default.DOWN) {
          // Focus last row
          trs[trs.length - 1].focus();
        } else if (keyCode === _keyCodes.default.UP && index > 0) {
          // Focus previous row
          trs[index - 1].focus();
        } else if (keyCode === _keyCodes.default.DOWN && index < trs.length - 1) {
          // Focus next row
          trs[index + 1].focus();
        }
      }
    },
    // Row event handlers
    rowClicked: function rowClicked(e, item, index) {
      if (this.stopIfBusy(e)) {
        // If table is busy (via provider) then don't propagate
        return;
      } else if ((0, _filterEvent.default)(e)) {
        // clicked on a non-disabled control so ignore
        return;
      } else if ((0, _textSelectionActive.default)(this.$el)) {
        // User is selecting text, so ignore

        /* istanbul ignore next: JSDOM doesn't support getSelection() */
        return;
      }

      this.$emit('row-clicked', item, index, e);
    },
    middleMouseRowClicked: function middleMouseRowClicked(e, item, index) {
      if (this.stopIfBusy(e)) {
        // If table is busy (via provider) then don't propagate
        return;
      }

      this.$emit('row-middle-clicked', item, index, e);
    },
    rowDblClicked: function rowDblClicked(e, item, index) {
      if (this.stopIfBusy(e)) {
        // If table is busy (via provider) then don't propagate
        return;
      } else if ((0, _filterEvent.default)(e)) {
        // clicked on a non-disabled control so ignore

        /* istanbul ignore next: event filtering already tested via click handler */
        return;
      }

      this.$emit('row-dblclicked', item, index, e);
    },
    rowHovered: function rowHovered(e, item, index) {
      if (this.stopIfBusy(e)) {
        // If table is busy (via provider) then don't propagate
        return;
      }

      this.$emit('row-hovered', item, index, e);
    },
    rowUnhovered: function rowUnhovered(e, item, index) {
      if (this.stopIfBusy(e)) {
        // If table is busy (via provider) then don't propagate
        return;
      }

      this.$emit('row-unhovered', item, index, e);
    },
    rowContextmenu: function rowContextmenu(e, item, index) {
      if (this.stopIfBusy(e)) {
        // If table is busy (via provider) then don't propagate
        return;
      }

      this.$emit('row-contextmenu', item, index, e);
    },
    // Render helpers
    renderTbodyRowCell: function renderTbodyRowCell(field, colIndex, item, rowIndex) {
      var _this = this;

      var h = this.$createElement; // Renders a TD or TH for a row's field

      var $scoped = this.$scopedSlots;
      var detailsSlot = $scoped['row-details'];
      var rowSelected = this.selectedRows[rowIndex];
      var formatted = this.getFormattedValue(item, field);
      var data = {
        // For the Vue key, we concatinate the column index and field key (as field keys can be duplicated)
        key: "row-".concat(rowIndex, "-cell-").concat(colIndex, "-").concat(field.key),
        class: this.tdClasses(field, item),
        attrs: this.tdAttrs(field, item, colIndex)
      };

      var toggleDetailsFn = function toggleDetailsFn() {
        if (detailsSlot) {
          _this.$set(item, '_showDetails', !item._showDetails);
        }
      };

      var slotScope = {
        item: item,
        index: rowIndex,
        field: field,
        unformatted: (0, _get.default)(item, field.key, ''),
        value: formatted,
        toggleDetails: toggleDetailsFn,
        detailsShowing: Boolean(item._showDetails),
        rowSelected: Boolean(rowSelected)
      };
      var $childNodes = $scoped[field.key] ? $scoped[field.key](slotScope) : (0, _toString.default)(formatted);

      if (this.isStacked) {
        // We wrap in a DIV to ensure rendered as a single cell when visually stacked!
        $childNodes = [h('div', {}, [$childNodes])];
      } // Render either a td or th cell


      return h(field.isRowHeader ? 'th' : 'td', data, [$childNodes]);
    },
    renderTbodyRow: function renderTbodyRow(item, rowIndex) {
      var _this2 = this;

      // Renders an item's row (or rows if details supported)
      var h = this.$createElement;
      var $scoped = this.$scopedSlots;
      var fields = this.computedFields;
      var tableStriped = this.striped;
      var hasRowClickHandler = this.$listeners['row-clicked'] || this.selectable;
      var $detailsSlot = $scoped['row-details'];
      var rowShowDetails = Boolean(item._showDetails && $detailsSlot); // We can return more than one TR if rowDetails enabled

      var $rows = []; // Details ID needed for aria-describedby when details showing

      var detailsId = rowShowDetails ? this.safeId("_details_".concat(rowIndex, "_")) : null;

      var toggleDetailsFn = function toggleDetailsFn() {
        if ($detailsSlot) {
          _this2.$set(item, '_showDetails', !item._showDetails);
        }
      }; // For each item data field in row


      var $tds = fields.map(function (field, colIndex) {
        return _this2.renderTbodyRowCell(field, colIndex, item, rowIndex);
      }); // Calculate the row number in the dataset (indexed from 1)

      var ariaRowIndex = null;

      if (this.currentPage && this.perPage && this.perPage > 0) {
        ariaRowIndex = String((this.currentPage - 1) * this.perPage + rowIndex + 1);
      } // Create a unique :key to help ensure that sub components are re-rendered rather than
      // re-used, which can cause issues. If a primary key is not provided we use the rendered
      // rows index within the tbody.
      // See: https://github.com/bootstrap-vue/bootstrap-vue/issues/2410


      var primaryKey = this.primaryKey;
      var rowKey = primaryKey && item[primaryKey] !== undefined && item[primaryKey] !== null ? (0, _toString.default)(item[primaryKey]) : String(rowIndex); // If primary key is provided, use it to generate a unique ID on each tbody > tr
      // In the format of '{tableId}__row_{primaryKeyValue}'

      var rowId = primaryKey && item[primaryKey] !== undefined && item[primaryKey] !== null ? this.safeId("_row_".concat(item[primaryKey])) : null;
      var handlers = {};

      if (hasRowClickHandler) {
        handlers['click'] = function (evt) {
          _this2.rowClicked(evt, item, rowIndex);
        };

        handlers['keydown'] = function (evt) {
          _this2.tbodyRowKeydown(evt, item, rowIndex);
        };
      } // Add the item row


      $rows.push(h('tr', {
        key: "__b-table-row-".concat(rowKey, "__"),
        ref: 'itemRows',
        refInFor: true,
        class: [this.rowClasses(item), this.selectableRowClasses(rowIndex), {
          'b-table-has-details': rowShowDetails
        }],
        attrs: _objectSpread({
          id: rowId,
          tabindex: hasRowClickHandler ? '0' : null,
          'data-pk': rowId ? String(item[primaryKey]) : null,
          'aria-describedby': detailsId,
          'aria-owns': detailsId,
          'aria-rowindex': ariaRowIndex,
          role: 'row'
        }, this.selectableRowAttrs(rowIndex)),
        on: _objectSpread({}, handlers, {
          // TODO: instatiate the following handlers only if we have registered
          //       listeners i.e. this.$listeners['row-middle-clicked'], etc.
          auxclick: function auxclick(evt) {
            if (evt.which === 2) {
              _this2.middleMouseRowClicked(evt, item, rowIndex);
            }
          },
          contextmenu: function contextmenu(evt) {
            _this2.rowContextmenu(evt, item, rowIndex);
          },
          // Note: these events are not accessibility friendly!
          dblclick: function dblclick(evt) {
            _this2.rowDblClicked(evt, item, rowIndex);
          },
          mouseenter: function mouseenter(evt) {
            _this2.rowHovered(evt, item, rowIndex);
          },
          mouseleave: function mouseleave(evt) {
            _this2.rowUnhovered(evt, item, rowIndex);
          }
        })
      }, $tds)); // Row Details slot

      if (rowShowDetails) {
        var tdAttrs = {
          colspan: String(fields.length),
          role: 'cell'
        };
        var trAttrs = {
          id: detailsId,
          role: 'row' // Render the details slot

        };
        var $details = h('td', {
          attrs: tdAttrs
        }, [$detailsSlot({
          item: item,
          index: rowIndex,
          fields: fields,
          toggleDetails: toggleDetailsFn
        })]); // Add a hidden row to keep table row striping consistent when details showing

        if (tableStriped) {
          $rows.push(h('tr', {
            key: "__b-table-details-".concat(rowIndex, "-stripe__"),
            staticClass: 'd-none',
            attrs: {
              'aria-hidden': 'true',
              role: 'presentation'
            }
          }));
        } // Add the actual details row


        $rows.push(h('tr', {
          key: "__b-table-details-".concat(rowIndex, "__"),
          staticClass: 'b-table-details',
          class: [typeof this.tbodyTrClass === 'function' ? this.tbodyTrClass(item, 'row-details') : this.tbodyTrClass],
          attrs: trAttrs
        }, [$details]));
      } else if ($detailsSlot) {
        // Only add the placeholder if a the table has a row-details slot defined (but not shown)
        $rows.push(h(false));

        if (tableStriped) {
          // add extra placeholder if table is striped
          $rows.push(h(false));
        }
      } // Return the row(s)


      return $rows;
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "2839":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/**
 * @param {string} str
 */
var lowerFirst = function lowerFirst(str) {
  str = String(str);
  return str.charAt(0).toLowerCase() + str.slice(1);
};

var _default = lowerFirst;
exports.default = _default;

/***/ }),

/***/ "294b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _img = __webpack_require__("4c76");

var _dom = __webpack_require__("1611");

var _config = __webpack_require__("eb60");

var NAME = 'BImgLazy';
var THROTTLE = 100;
var EventOptions = {
  passive: true,
  capture: false // @vue/component

};
var _default2 = {
  name: NAME,
  components: {
    BImg: _img.default
  },
  props: {
    src: {
      type: String,
      default: null,
      required: true
    },
    alt: {
      type: String,
      default: null
    },
    width: {
      type: [Number, String],
      default: null
    },
    height: {
      type: [Number, String],
      default: null
    },
    blankSrc: {
      // If null, a blank image is generated
      type: String,
      default: null
    },
    blankColor: {
      type: String,
      default: function _default() {
        return (0, _config.getComponentConfig)(NAME, 'blankColor');
      }
    },
    blankWidth: {
      type: [Number, String],
      default: null
    },
    blankHeight: {
      type: [Number, String],
      default: null
    },
    show: {
      type: Boolean,
      default: false
    },
    fluid: {
      type: Boolean,
      default: false
    },
    fluidGrow: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    thumbnail: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: [Boolean, String],
      default: false
    },
    left: {
      type: Boolean,
      default: false
    },
    right: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    },
    offset: {
      type: [Number, String],
      default: 360
    },
    throttle: {
      type: [Number, String],
      default: THROTTLE
    }
  },
  data: function data() {
    return {
      isShown: false,
      scrollTimeout: null
    };
  },
  computed: {
    computedSrc: function computedSrc() {
      return !this.blankSrc || this.isShown ? this.src : this.blankSrc;
    },
    computedBlank: function computedBlank() {
      return !(this.isShown || this.blankSrc);
    },
    computedWidth: function computedWidth() {
      return this.isShown ? this.width : this.blankWidth || this.width;
    },
    computedHeight: function computedHeight() {
      return this.isShown ? this.height : this.blankHeight || this.height;
    }
  },
  watch: {
    show: function show(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.isShown = newVal;

        if (!newVal) {
          // Make sure listeners are re-enabled if img is force set to blank
          this.setListeners(true);
        }
      }
    },
    isShown: function isShown(newVal, oldVal) {
      if (newVal !== oldVal) {
        // Update synched show prop
        this.$emit('update:show', newVal);
      }
    }
  },
  created: function created() {
    this.isShown = this.show;
  },
  mounted: function mounted() {
    if (this.isShown) {
      this.setListeners(false);
    } else {
      this.setListeners(true);
      this.$nextTick(this.checkView);
    }
  },
  activated: function activated()
  /* istanbul ignore next */
  {
    if (!this.isShown) {
      this.setListeners(true);
      this.$nextTick(this.checkView);
    }
  },
  deactivated: function deactivated()
  /* istanbul ignore next */
  {
    this.setListeners(false);
  },
  beforeDestroy: function beforeDestroy() {
    this.setListeners(false);
  },
  methods: {
    setListeners: function setListeners(on) {
      if (this.scrollTimeout) {
        clearTimeout(this.scrollTimeout);
        this.scrollTimeout = null;
      }

      var root = window;

      if (on) {
        (0, _dom.eventOn)(this.$el, 'load', this.checkView);
        (0, _dom.eventOn)(root, 'scroll', this.onScroll, EventOptions);
        (0, _dom.eventOn)(root, 'resize', this.onScroll, EventOptions);
        (0, _dom.eventOn)(root, 'orientationchange', this.onScroll, EventOptions);
        (0, _dom.eventOn)(document, 'transitionend', this.onScroll, EventOptions);
      } else {
        (0, _dom.eventOff)(this.$el, 'load', this.checkView);
        (0, _dom.eventOff)(root, 'scroll', this.onScroll, EventOptions);
        (0, _dom.eventOff)(root, 'resize', this.onScroll, EventOptions);
        (0, _dom.eventOff)(root, 'orientationchange', this.onScroll, EventOptions);
        (0, _dom.eventOff)(document, 'transitionend', this.onScroll, EventOptions);
      }
    },
    checkView: function checkView() {
      // check bounding box + offset to see if we should show
      if (this.isShown) {
        this.setListeners(false);
        return;
      }

      var offset = parseInt(this.offset, 10) || 0;
      var docElement = document.documentElement;
      var view = {
        l: 0 - offset,
        t: 0 - offset,
        b: docElement.clientHeight + offset,
        r: docElement.clientWidth + offset
        /* istanbul ignore next */

      };
      var box = (0, _dom.getBCR)(this.$el);
      /* istanbul ignore next: can't test getBoundingClientRect in JSDOM */

      if (box.right >= view.l && box.bottom >= view.t && box.left <= view.r && box.top <= view.b) {
        // image is in view (or about to be in view)
        this.isShown = true;
        this.setListeners(false);
      }
    },
    onScroll: function onScroll() {
      if (this.isShown) {
        this.setListeners(false);
      } else {
        clearTimeout(this.scrollTimeout);
        this.scrollTimeout = setTimeout(this.checkView, parseInt(this.throttle, 10) || THROTTLE);
      }
    }
  },
  render: function render(h) {
    return h('b-img', {
      props: {
        src: this.computedSrc,
        alt: this.alt,
        blank: this.computedBlank,
        blankColor: this.blankColor,
        width: this.computedWidth,
        height: this.computedHeight,
        fluid: this.fluid,
        fluidGrow: this.fluidGrow,
        block: this.block,
        thumbnail: this.thumbnail,
        rounded: this.rounded,
        left: this.left,
        right: this.right,
        center: this.center
      }
    });
  }
};
exports.default = _default2;

/***/ }),

/***/ "294c":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var $toString = __webpack_require__("fa5b");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2aeb":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("cb7c");
var dPs = __webpack_require__("1495");
var enumBugKeys = __webpack_require__("e11e");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("230e")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("fab2").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "2b4c":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("5537")('wks');
var uid = __webpack_require__("ca5a");
var Symbol = __webpack_require__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2c38":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _id = __webpack_require__("eae0");

var _form = __webpack_require__("5f07");

var _formState = __webpack_require__("41fb");

var _formSize = __webpack_require__("6e1b");

var _formRadioCheck = __webpack_require__("4fe1");

var _looseEqual = __webpack_require__("96cd");

// @vue/component
var _default = {
  name: 'BFormRadio',
  mixins: [_id.default, _formRadioCheck.default, // Includes shared render function
  _form.default, _formSize.default, _formState.default],
  inject: {
    bvGroup: {
      from: 'bvRadioGroup',
      default: false
    }
  },
  props: {
    checked: {
      // v-model
      type: [String, Object, Number, Boolean],
      default: null
    }
  },
  computed: {
    // Radio Groups can only have a single value, so determining if checked is simple
    is_Checked: function is_Checked() {
      return (0, _looseEqual.default)(this.value, this.computedLocalChecked);
    },
    // Flags for form-radio-check mixin
    is_Radio: function is_Radio() {
      return true;
    },
    is_Check: function is_Check() {
      return false;
    }
  },
  watch: {
    // Radio Groups can only have a single value, so our watchers are simple
    computedLocalChecked: function computedLocalChecked(newVal, oldVal) {
      this.$emit('input', this.computedLocalChecked);
    }
  },
  methods: {
    handleChange: function handleChange(_ref) {
      var checked = _ref.target.checked;
      var value = this.value;
      this.computedLocalChecked = value; // Change is only emitted on user interaction

      this.$emit('change', checked ? value : null); // If this is a child of form-radio-group, we emit a change event on it as well

      if (this.is_Group) {
        this.bvGroup.$emit('change', checked ? value : null);
      }
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d8d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _looseEqual = __webpack_require__("96cd");

var looseIndexOf = function looseIndexOf(arr, val) {
  // Assumes that the first argument is an array
  for (var i = 0; i < arr.length; i++) {
    if ((0, _looseEqual.default)(arr[i], val)) {
      return i;
    }
  }

  return -1;
};

var _default = looseIndexOf;
exports.default = _default;

/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "2e08":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__("b42e");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var props = {
  vertical: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: null
  },
  tag: {
    type: String,
    default: 'div'
  },
  ariaRole: {
    type: String,
    default: 'group'
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BButtonGroup',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      class: _defineProperty({
        'btn-group': !props.vertical,
        'btn-group-vertical': props.vertical
      }, "btn-group-".concat(props.size), Boolean(props.size)),
      attrs: {
        role: props.ariaRole
      }
    }), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "2e50":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/*
 * Consistent and stable sort function across JavaScript platforms
 *
 * Inconsistent sorts can cause SSR problems between client and server
 * such as in <b-table> if sortBy is applied to the data on server side render.
 * Chrome and V8 native sorts are inconsistent/unstable
 *
 * This function uses native sort with fallback to index compare when the a and b
 * compare returns 0
 *
 * Algorithm based on:
 * https://stackoverflow.com/questions/1427608/fast-stable-sorting-algorithm-implementation-in-javascript/45422645#45422645
 *
 * @param {array} array to sort
 * @param {function} sort compare function
 * @return {array}
 */
var stableSort = function stableSort(array, compareFn) {
  // Using `.bind(compareFn)` on the wrapped anonymous function improves
  // performance by avoiding the function call setup. We don't use an arrow
  // function here as it binds `this` to the `stableSort` context rather than
  // the `compareFn` context, which wouldn't give us the performance increase.
  return array.map(function (a, index) {
    return [index, a];
  }).sort(function (a, b) {
    return this(a[1], b[1]) || a[0] - b[0];
  }.bind(compareFn)).map(function (e) {
    return e[1];
  });
};

var _default = stableSort;
exports.default = _default;

/***/ }),

/***/ "2eee":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _tooltip = __webpack_require__("91b6");

var _plugins = __webpack_require__("0a8d");

var directives = {
  BTooltip: _tooltip.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    directives: directives
  })
};
exports.default = _default;

/***/ }),

/***/ "3098":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/**
 * Converts a string, including strings in camelCase or snake_case, into Start Case (a variant
 * of Title Case where all words start with a capital letter), it keeps original single quote
 * and hyphen in the word.
 *
 * Copyright (c) 2017 Compass (MIT)
 * https://github.com/UrbanCompass/to-start-case
 * @author Zhuoyuan Zhang <https://github.com/drawyan>
 * @author Wei Wang <https://github.com/onlywei>
 *
 *
 *   'management_companies' to 'Management Companies'
 *   'managementCompanies' to 'Management Companies'
 *   `hell's kitchen` to `Hell's Kitchen`
 *   `co-op` to `Co-op`
 *
 * @param {String} str
 * @returns {String}
 */
var startCase = function startCase(str) {
  return str.replace(/_/g, ' ').replace(/([a-z])([A-Z])/g, function (str, $1, $2) {
    return $1 + ' ' + $2;
  }).replace(/(\s|^)(\w)/g, function (str, $1, $2) {
    return $1 + $2.toUpperCase();
  });
};

var _default = startCase;
exports.default = _default;

/***/ }),

/***/ "30db":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a4c0");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "3110":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _formRadio = __webpack_require__("2c38");

var _formRadioGroup = __webpack_require__("679b");

var _plugins = __webpack_require__("0a8d");

var components = {
  BFormRadio: _formRadio.default,
  BRadio: _formRadio.default,
  BFormRadioGroup: _formRadioGroup.default,
  BRadioGroup: _formRadioGroup.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "32a6":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("241e");
var $keys = __webpack_require__("c3a1");

__webpack_require__("ce7e")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "32ec":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _embed = __webpack_require__("cc37");

var _plugins = __webpack_require__("0a8d");

var components = {
  BEmbed: _embed.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "335c":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("6b4c");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "35e8":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d9f6");
var createDesc = __webpack_require__("aebd");
module.exports = __webpack_require__("8e60") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "36c3":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("335c");
var defined = __webpack_require__("25eb");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "377c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
// @vue/component
var _default = {
  props: {
    plain: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    custom: function custom() {
      return !this.plain;
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "382a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = filterEvent;

var _dom = __webpack_require__("1611");

var _constants = __webpack_require__("3ed8");

// Returns true of we should ignore the click/dbclick/keypress event
// Avoids having the user need to use @click.stop on the form control
function filterEvent(evt) {
  if (!evt || !evt.target) {
    /* istanbul ignore next */
    return;
  }

  var el = evt.target;

  if (el.tagName === 'TD' || el.tagName === 'TH' || el.tagName === 'TR' || el.disabled) {
    // Shortut all the following tests for efficiency
    return false;
  }

  if ((0, _dom.closest)('.dropdown-menu', el)) {
    // Click was in a dropdown menu, so ignore
    return true;
  }

  var label = el.tagName === 'LABEL' ? el : (0, _dom.closest)('label', el);

  if (label && label.control && !label.control.disabled) {
    // If the label's form control is not disabled then we don't propagate evt
    return true;
  } // Else check to see if the event target matches one of the selectors in the event filter
  // i.e. anchors, non disabled inputs, etc. Return true if we should ignore the event.


  return (0, _dom.matches)(el, _constants.EVENT_FILTER);
}

/***/ }),

/***/ "3888":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _mixinTbodyRow = __webpack_require__("282f");

var _mixinEmpty = __webpack_require__("0b34");

var _mixinTopRow = __webpack_require__("621e");

var _mixinBottomRow = __webpack_require__("1106");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// busy mixin is imported in main table.js as it is used by multiple mixins
var _default = {
  mixins: [_mixinTbodyRow.default, _mixinEmpty.default, _mixinTopRow.default, _mixinBottomRow.default],
  props: {
    tbodyClass: {
      type: [String, Array],
      default: null
    },
    tbodyTransitionProps: {
      type: Object // default: undefined

    },
    tbodyTransitionHandlers: {
      type: Object // default: undefined

    }
  },
  methods: {
    renderTbody: function renderTbody() {
      var _this = this;

      // Render the tbody element and children
      var h = this.$createElement;
      var items = this.computedItems; // Prepare the tbody rows

      var $rows = []; // Add the item data rows or the busy slot

      var $busy = this.renderBusy();

      if ($busy) {
        // If table is busy and a busy slot, then return only the busy "row" indicator
        $rows.push($busy);
      } else {
        // Table isn't bsuy, or we don't have a busy slot
        // Add static Top Row slot (hidden in visibly stacked mode as we can't control the data-label)
        $rows.push(this.renderTopRow()); // render the rows

        items.forEach(function (item, rowIndex) {
          // Render the individual item row (rows if details slot)
          $rows.push(_this.renderTbodyRow(item, rowIndex));
        }); // Empty Items / Empty Filtered Row slot (only shows if items.length < -

        $rows.push(this.renderEmpty()); // Static bottom row slot (hidden in visibly stacked mode as we can't control the data-label)

        $rows.push(this.renderBottomRow());
      } // If tbody transition enabled


      var isTransGroup = this.tbodyTransitionProps || this.tbodyTransitionHandlers;
      var tbodyProps = {};
      var tbodyOn = {};

      if (isTransGroup) {
        tbodyOn = this.tbodyTransitionHandlers || {};
        tbodyProps = _objectSpread({}, this.tbodyTransitionProps || {}, {
          tag: 'tbody'
        });
      } // Assemble rows into the tbody


      var $tbody = h(isTransGroup ? 'transition-group' : 'tbody', {
        props: tbodyProps,
        on: tbodyOn,
        class: [this.tbodyClass],
        attrs: {
          role: 'rowgroup'
        }
      }, $rows); // Return the assembled tbody

      return $tbody;
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "38fd":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("69a8");
var toObject = __webpack_require__("4bf8");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "3966":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _looseEqual = __webpack_require__("96cd");

var _array = __webpack_require__("bb2f");

var _sanitizeRow = __webpack_require__("b40f");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  props: {
    selectable: {
      type: Boolean,
      default: false
    },
    selectMode: {
      type: String,
      default: 'multi'
    },
    selectedVariant: {
      type: String,
      default: 'primary'
    }
  },
  data: function data() {
    return {
      selectedRows: [],
      selectedLastRow: -1
    };
  },
  computed: {
    selectableTableClasses: function selectableTableClasses() {
      var _ref;

      var selectable = this.selectable;
      var isSelecting = selectable && this.selectedRows && this.selectedRows.some(Boolean);
      return _ref = {
        'b-table-selectable': selectable
      }, _defineProperty(_ref, "b-table-select-".concat(this.selectMode), selectable), _defineProperty(_ref, 'b-table-selecting', isSelecting), _ref;
    },
    selectableTableAttrs: function selectableTableAttrs() {
      return {
        'aria-multiselectable': this.selectableIsMultiSelect
      };
    },
    selectableIsMultiSelect: function selectableIsMultiSelect() {
      if (this.selectable) {
        return (0, _array.arrayIncludes)(['range', 'multi'], this.selectMode) ? 'true' : 'false';
      } else {
        return null;
      }
    }
  },
  watch: {
    computedItems: function computedItems(newVal, oldVal) {
      // Reset for selectable
      // TODO: Should selectedLastClicked be reset here?
      //       As changes to _showDetails would trigger it to reset
      this.selectedLastRow = -1;
      var equal = false;

      if (this.selectable && this.selectedRows.length > 0) {
        // Quick check against array length
        equal = (0, _array.isArray)(newVal) && (0, _array.isArray)(oldVal) && newVal.length === oldVal.length;

        for (var i = 0; equal && i < newVal.length; i++) {
          // Look for the first non-loosely equal row, after ignoring reserved fields
          equal = (0, _looseEqual.default)((0, _sanitizeRow.default)(newVal[i]), (0, _sanitizeRow.default)(oldVal[i]));
        }
      }

      if (!equal) {
        this.clearSelected();
      }
    },
    selectable: function selectable(newVal, oldVal) {
      this.clearSelected();
      this.setSelectionHandlers(newVal);
    },
    selectMode: function selectMode(newVal, oldVal) {
      this.clearSelected();
    },
    selectedRows: function selectedRows(_selectedRows, oldVal) {
      var _this = this;

      if (this.selectable && !(0, _looseEqual.default)(_selectedRows, oldVal)) {
        var items = []; // forEach skips over non-existant indicies (on sparse arrays)

        _selectedRows.forEach(function (v, idx) {
          if (v) {
            items.push(_this.computedItems[idx]);
          }
        });

        this.$emit('row-selected', items);
      }
    }
  },
  beforeMount: function beforeMount() {
    // Set up handlers
    if (this.selectable) {
      this.setSelectionHandlers(true);
    }
  },
  methods: {
    isRowSelected: function isRowSelected(idx) {
      return Boolean(this.selectedRows[idx]);
    },
    selectableRowClasses: function selectableRowClasses(idx) {
      var rowSelected = this.isRowSelected(idx);
      var base = this.dark ? 'bg' : 'table';
      var variant = this.selectedVariant;
      return _defineProperty({
        'b-table-row-selected': this.selectable && rowSelected
      }, "".concat(base, "-").concat(variant), this.selectable && rowSelected && variant);
    },
    selectableRowAttrs: function selectableRowAttrs(idx) {
      return {
        'aria-selected': !this.selectable ? null : this.isRowSelected(idx) ? 'true' : 'false'
      };
    },
    clearSelected: function clearSelected() {
      var hasSelection = this.selectedRows.reduce(function (prev, v) {
        return prev || v;
      }, false);

      if (hasSelection) {
        this.selectedLastClicked = -1;
        this.selectedRows = [];
      }
    },
    setSelectionHandlers: function setSelectionHandlers(on) {
      var method = on ? '$on' : '$off'; // Handle row-clicked event

      this[method]('row-clicked', this.selectionHandler); // Clear selection on filter, pagination, and sort changes

      this[method]('filtered', this.clearSelected);
      this[method]('context-changed', this.clearSelected);
    },
    selectionHandler: function selectionHandler(item, index, evt) {
      /* istanbul ignore if: should never happen */
      if (!this.selectable) {
        // Don't do anything if table is not in selectable mode

        /* istanbul ignore next: should never happen */
        this.clearSelected();
        /* istanbul ignore next: should never happen */

        return;
      }

      var selectedRows = this.selectedRows.slice();
      var selected = !selectedRows[index];
      var mode = this.selectMode; // Note 'multi' mode needs no special handling

      if (mode === 'single') {
        selectedRows = [];
      } else if (mode === 'range') {
        if (this.selectedLastRow > -1 && evt.shiftKey) {
          // range
          for (var idx = Math.min(this.selectedLastRow, index); idx <= Math.max(this.selectedLastRow, index); idx++) {
            selectedRows[idx] = true;
          }

          selected = true;
        } else {
          if (!(evt.ctrlKey || evt.metaKey)) {
            // clear range selection if any
            selectedRows = [];
            selected = true;
          }

          this.selectedLastRow = selected ? index : -1;
        }
      }

      selectedRows[index] = selected;
      this.selectedRows = selectedRows;
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "3a38":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "3a5b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _button = __webpack_require__("b664");

var _buttonClose = __webpack_require__("600b");

var _id = __webpack_require__("eae0");

var _listenOnRoot = __webpack_require__("edbc");

var _observeDom = __webpack_require__("bf9c");

var _warn = __webpack_require__("93e0");

var _keyCodes = __webpack_require__("06e4");

var _bvEvent = __webpack_require__("f8bb");

var _config = __webpack_require__("eb60");

var _html = __webpack_require__("be11");

var _dom = __webpack_require__("1611");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NAME = 'BModal'; // Selectors for padding/margin adjustments

var Selector = {
  FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
  STICKY_CONTENT: '.sticky-top',
  NAVBAR_TOGGLER: '.navbar-toggler' // ObserveDom config

};
var OBSERVER_CONFIG = {
  subtree: true,
  childList: true,
  characterData: true,
  attributes: true,
  attributeFilter: ['style', 'class'] // modal wrapper ZINDEX offset incrememnt

};
var ZINDEX_OFFSET = 2000; // Modal open count helpers

function getModalOpenCount() {
  return parseInt((0, _dom.getAttr)(document.body, 'data-modal-open-count') || 0, 10);
}

function setModalOpenCount(count) {
  (0, _dom.setAttr)(document.body, 'data-modal-open-count', String(count));
  return count;
}

function incrementModalOpenCount() {
  return setModalOpenCount(getModalOpenCount() + 1);
}

function decrementModalOpenCount() {
  return setModalOpenCount(Math.max(getModalOpenCount() - 1, 0));
} // Returns the current visible modal highest z-index


function getModalMaxZIndex() {
  return (0, _dom.selectAll)('div.modal')
  /* find all modals that are in document */
  .filter(_dom.isVisible)
  /* filter only visible ones */
  .map(function (m) {
    return m.parentElement;
  })
  /* select the outer div */
  .reduce(function (max, el) {
    /* compute the highest z-index */
    return Math.max(max, parseInt(el.style.zIndex || 0, 10));
  }, 0);
} // Returns the next z-index to be used by a modal to ensure proper stacking
// regardless of document order. Increments by 2000


function getModalNextZIndex() {
  return getModalMaxZIndex() + ZINDEX_OFFSET;
} // @vue/component


var _default2 = {
  name: NAME,
  components: {
    BButton: _button.default,
    BButtonClose: _buttonClose.default
  },
  mixins: [_id.default, _listenOnRoot.default],
  model: {
    prop: 'visible',
    event: 'change'
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    titleHtml: {
      type: String
    },
    titleTag: {
      type: String,
      default: 'h5'
    },
    size: {
      type: String,
      default: 'md'
    },
    centered: {
      type: Boolean,
      default: false
    },
    scrollable: {
      type: Boolean,
      default: false
    },
    buttonSize: {
      type: String,
      default: ''
    },
    noStacking: {
      type: Boolean,
      default: false
    },
    noFade: {
      type: Boolean,
      default: false
    },
    noCloseOnBackdrop: {
      type: Boolean,
      default: false
    },
    noCloseOnEsc: {
      type: Boolean,
      default: false
    },
    noEnforceFocus: {
      type: Boolean,
      default: false
    },
    headerBgVariant: {
      type: String,
      default: null
    },
    headerBorderVariant: {
      type: String,
      default: null
    },
    headerTextVariant: {
      type: String,
      default: null
    },
    headerCloseVariant: {
      type: String,
      default: null
    },
    headerClass: {
      type: [String, Array],
      default: null
    },
    bodyBgVariant: {
      type: String,
      default: null
    },
    bodyTextVariant: {
      type: String,
      default: null
    },
    modalClass: {
      type: [String, Array],
      default: null
    },
    dialogClass: {
      type: [String, Array],
      default: null
    },
    contentClass: {
      type: [String, Array],
      default: null
    },
    bodyClass: {
      type: [String, Array],
      default: null
    },
    footerBgVariant: {
      type: String,
      default: null
    },
    footerBorderVariant: {
      type: String,
      default: null
    },
    footerTextVariant: {
      type: String,
      default: null
    },
    footerClass: {
      type: [String, Array],
      default: null
    },
    hideHeader: {
      type: Boolean,
      default: false
    },
    hideFooter: {
      type: Boolean,
      default: false
    },
    hideHeaderClose: {
      type: Boolean,
      default: false
    },
    hideBackdrop: {
      type: Boolean,
      default: false
    },
    okOnly: {
      type: Boolean,
      default: false
    },
    okDisabled: {
      type: Boolean,
      default: false
    },
    cancelDisabled: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean,
      default: false
    },
    returnFocus: {
      // type: Object,
      default: null
    },
    headerCloseLabel: {
      type: String,
      default: function _default() {
        return (0, _config.getComponentConfig)(NAME, 'headerCloseLabel');
      }
    },
    cancelTitle: {
      type: String,
      default: function _default() {
        return (0, _config.getComponentConfig)(NAME, 'cancelTitle');
      }
    },
    cancelTitleHtml: {
      type: String
    },
    okTitle: {
      type: String,
      default: function _default() {
        return (0, _config.getComponentConfig)(NAME, 'okTitle');
      }
    },
    okTitleHtml: {
      type: String
    },
    cancelVariant: {
      type: String,
      default: function _default() {
        return (0, _config.getComponentConfig)(NAME, 'cancelVariant');
      }
    },
    okVariant: {
      type: String,
      default: function _default() {
        return (0, _config.getComponentConfig)(NAME, 'okVariant');
      }
    },
    lazy: {
      type: Boolean,
      default: false
    },
    busy: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      is_hidden: this.lazy || false,
      // for lazy modals
      is_visible: false,
      // controls modal visible state
      is_transitioning: false,
      // Used for style control
      is_show: false,
      // Used for style control
      is_block: false,
      // Used for style control
      is_opening: false,
      // Semaphore for previnting incorrect modal open counts
      is_closing: false,
      // Semapbore for preventing incorrect modal open counts
      scrollbarWidth: 0,
      zIndex: ZINDEX_OFFSET,
      // z-index for modal stacking
      isTop: true,
      // If the modal is the topmost opened modal
      isBodyOverflowing: false,
      return_focus: this.returnFocus || null
    };
  },
  computed: {
    contentClasses: function contentClasses() {
      return ['modal-content', this.contentClass];
    },
    modalClasses: function modalClasses() {
      return [{
        fade: !this.noFade,
        show: this.is_show,
        'd-block': this.is_block
      }, this.modalClass];
    },
    dialogClasses: function dialogClasses() {
      var _ref;

      return [(_ref = {}, _defineProperty(_ref, "modal-".concat(this.size), Boolean(this.size)), _defineProperty(_ref, 'modal-dialog-centered', this.centered), _defineProperty(_ref, 'modal-dialog-scrollable', this.scrollable), _ref), this.dialogClass];
    },
    backdropClasses: function backdropClasses() {
      return {
        fade: !this.noFade,
        show: this.is_show || this.noFade
      };
    },
    headerClasses: function headerClasses() {
      var _ref2;

      return [(_ref2 = {}, _defineProperty(_ref2, "bg-".concat(this.headerBgVariant), Boolean(this.headerBgVariant)), _defineProperty(_ref2, "text-".concat(this.headerTextVariant), Boolean(this.headerTextVariant)), _defineProperty(_ref2, "border-".concat(this.headerBorderVariant), Boolean(this.headerBorderVariant)), _ref2), this.headerClass];
    },
    bodyClasses: function bodyClasses() {
      var _ref3;

      return [(_ref3 = {}, _defineProperty(_ref3, "bg-".concat(this.bodyBgVariant), Boolean(this.bodyBgVariant)), _defineProperty(_ref3, "text-".concat(this.bodyTextVariant), Boolean(this.bodyTextVariant)), _ref3), this.bodyClass];
    },
    footerClasses: function footerClasses() {
      var _ref4;

      return [(_ref4 = {}, _defineProperty(_ref4, "bg-".concat(this.footerBgVariant), Boolean(this.footerBgVariant)), _defineProperty(_ref4, "text-".concat(this.footerTextVariant), Boolean(this.footerTextVariant)), _defineProperty(_ref4, "border-".concat(this.footerBorderVariant), Boolean(this.footerBorderVariant)), _ref4), this.footerClass];
    },
    modalOuterStyle: function modalOuterStyle() {
      return {
        // We only set these styles on the stacked modals (ones with next z-index > 0).
        position: 'absolute',
        zIndex: this.zIndex
      };
    }
  },
  watch: {
    visible: function visible(newVal, oldVal) {
      if (newVal === oldVal) {
        /* istanbul ignore next */
        return;
      }

      this[newVal ? 'show' : 'hide']();
    }
  },
  created: function created() {
    // create non-reactive property
    this._observer = null;
  },
  mounted: function mounted() {
    // Listen for events from others to either open or close ourselves
    // And listen to all modals to enable/disable enforce focus
    this.listenOnRoot('bv::show::modal', this.showHandler);
    this.listenOnRoot('bv::modal::shown', this.shownHandler);
    this.listenOnRoot('bv::hide::modal', this.hideHandler);
    this.listenOnRoot('bv::modal::hidden', this.hiddenHandler);
    this.listenOnRoot('bv::toggle::modal', this.toggleHandler); // Listen for bv:modal::show events, and close ourselves if the opening modal not us

    this.listenOnRoot('bv::modal::show', this.modalListener); // Initially show modal?

    if (this.visible === true) {
      this.show();
    }
  },
  beforeDestroy: function beforeDestroy()
  /* istanbul ignore next */
  {
    // Ensure everything is back to normal
    if (this._observer) {
      this._observer.disconnect();

      this._observer = null;
    } // Ensure our root "once" listener is gone


    this.$root.$off('bv::modal::hidden', this.doShow);
    this.setEnforceFocus(false);
    this.setResizeEvent(false);

    if (this.is_visible) {
      this.is_visible = false;
      this.is_show = false;
      this.is_transitioning = false;
      var count = decrementModalOpenCount();

      if (count === 0) {
        // Re-adjust body/navbar/fixed padding/margins (as we were the last modal open)
        this.setModalOpenClass(false);
        this.resetScrollbar();
        this.resetDialogAdjustments();
      }
    }
  },
  methods: {
    // Public Methods
    show: function show() {
      if (this.is_visible || this.is_opening) {
        // if already open, on in the process of opening, do nothing
        return;
      }

      if (this.is_closing) {
        // if we are in the process of closing, wait until hidden before re-opening
        this.$once('hidden', this.show);
        return;
      }

      this.is_opening = true;
      var showEvt = new _bvEvent.default('show', {
        cancelable: true,
        vueTarget: this,
        target: this.$refs.modal,
        modalId: this.safeId(),
        relatedTarget: null
      });
      this.emitEvent(showEvt); // Don't show if canceled

      if (showEvt.defaultPrevented || this.is_visible) {
        this.is_opening = false;
        return;
      }

      if (!this.noStacking) {
        // Find the z-index to use
        this.zIndex = getModalNextZIndex(); // Show the modal

        this.doShow();
        return;
      }

      if ((0, _dom.hasClass)(document.body, 'modal-open')) {
        // If another modal is already open, wait for it to close
        this.$root.$once('bv::modal::hidden', this.doShow);
        return;
      } // Show the modal


      this.doShow();
    },
    hide: function hide(trigger) {
      if (!this.is_visible || this.is_closing) {
        return;
      }

      this.is_closing = true;
      var hideEvt = new _bvEvent.default('hide', {
        cancelable: true,
        vueTarget: this,
        target: this.$refs.modal,
        modalId: this.safeId(),
        // this could be the trigger element/component reference
        relatedTarget: null,
        isOK: trigger || null,
        trigger: trigger || null,
        cancel: function cancel()
        /* istanbul ignore next */
        {
          // Backwards compatibility
          (0, _warn.default)('b-modal: evt.cancel() is deprecated. Please use evt.preventDefault().');
          this.preventDefault();
        }
      });

      if (trigger === 'ok') {
        this.$emit('ok', hideEvt);
      } else if (trigger === 'cancel') {
        this.$emit('cancel', hideEvt);
      }

      this.emitEvent(hideEvt); // Hide if not canceled

      if (hideEvt.defaultPrevented || !this.is_visible) {
        this.is_closing = false;
        return;
      } // stop observing for content changes


      if (this._observer) {
        this._observer.disconnect();

        this._observer = null;
      }

      this.is_visible = false;
      this.$emit('change', false);
    },
    // Public method to toggle modal visibility
    toggle: function toggle(triggerEl) {
      if (triggerEl) {
        this.return_focus = triggerEl;
      }

      if (this.is_visible) {
        this.hide('toggle');
      } else {
        this.show();
      }
    },
    // Private method to finish showing modal
    doShow: function doShow() {
      var _this = this;

      // Place modal in DOM if lazy
      this.is_hidden = false;
      this.$nextTick(function () {
        // We do this in nextTick to ensure the modal is in DOM first before we show it
        _this.is_visible = true;
        _this.is_opening = false;

        _this.$emit('change', true); // Observe changes in modal content and adjust if necessary


        _this._observer = (0, _observeDom.default)(_this.$refs.content, _this.adjustDialog.bind(_this), OBSERVER_CONFIG);
      });
    },
    // Transition Handlers
    onBeforeEnter: function onBeforeEnter() {
      this.getScrollbarWidth();
      this.is_transitioning = true;
      this.checkScrollbar();
      var count = incrementModalOpenCount();

      if (count === 1) {
        this.setScrollbar();
      }

      this.adjustDialog();
      this.setModalOpenClass(true);
      this.setResizeEvent(true);
    },
    onEnter: function onEnter() {
      this.is_block = true;
    },
    onAfterEnter: function onAfterEnter() {
      var _this2 = this;

      this.is_show = true;
      this.is_transitioning = false;
      this.$nextTick(function () {
        var shownEvt = new _bvEvent.default('shown', {
          cancelable: false,
          vueTarget: _this2,
          target: _this2.$refs.modal,
          modalId: _this2.safeId(),
          relatedTarget: null
        });

        _this2.emitEvent(shownEvt);

        _this2.focusFirst();

        _this2.setEnforceFocus(true);
      });
    },
    onBeforeLeave: function onBeforeLeave() {
      this.is_transitioning = true;
      this.setResizeEvent(false);
    },
    onLeave: function onLeave() {
      // Remove the 'show' class
      this.is_show = false;
    },
    onAfterLeave: function onAfterLeave() {
      var _this3 = this;

      this.is_block = false;
      this.resetDialogAdjustments();
      this.is_transitioning = false;
      var count = decrementModalOpenCount();

      if (count === 0) {
        this.resetScrollbar();
        this.setModalOpenClass(false);
      }

      this.setEnforceFocus(false);
      this.$nextTick(function () {
        _this3.is_hidden = _this3.lazy || false;
        _this3.zIndex = ZINDEX_OFFSET;

        _this3.returnFocusTo();

        _this3.is_closing = false;
        var hiddenEvt = new _bvEvent.default('hidden', {
          cancelable: false,
          vueTarget: _this3,
          target: _this3.lazy ? null : _this3.$refs.modal,
          modalId: _this3.safeId(),
          relatedTarget: null
        });

        _this3.emitEvent(hiddenEvt);
      });
    },
    // Event emitter
    emitEvent: function emitEvent(bvEvt) {
      var type = bvEvt.type;
      this.$emit(type, bvEvt);
      this.$root.$emit("bv::modal::".concat(type), bvEvt, this.safeId());
    },
    // UI Event Handlers
    onClickOut: function onClickOut(evt) {
      // Do nothing if not visible, backdrop click disabled, or element that generated
      // click event is no longer in document
      if (!this.is_visible || this.noCloseOnBackdrop || !(0, _dom.contains)(document, evt.target)) {
        return;
      } // If backdrop clicked, hide modal


      if (!(0, _dom.contains)(this.$refs.content, evt.target)) {
        this.hide('backdrop');
      }
    },
    onEsc: function onEsc(evt) {
      // If ESC pressed, hide modal
      if (evt.keyCode === _keyCodes.default.ESC && this.is_visible && !this.noCloseOnEsc) {
        this.hide('esc');
      }
    },
    // Document focusin listener
    focusHandler: function focusHandler(evt) {
      // If focus leaves modal, bring it back
      var modal = this.$refs.modal;

      if (!this.noEnforceFocus && this.isTop && this.is_visible && modal && document !== evt.target && !(0, _dom.contains)(modal, evt.target)) {
        modal.focus({
          preventScroll: true
        });
      }
    },
    // Turn on/off focusin listener
    setEnforceFocus: function setEnforceFocus(on) {
      var options = {
        passive: true,
        capture: false
      };

      if (on) {
        (0, _dom.eventOn)(document, 'focusin', this.focusHandler, options);
      } else {
        (0, _dom.eventOff)(document, 'focusin', this.focusHandler, options);
      }
    },
    // Resize Listener
    setResizeEvent: function setResizeEvent(on)
    /* istanbul ignore next: can't easily test in JSDOM */
    {
      var _this4 = this;

      ;
      ['resize', 'orientationchange'].forEach(function (evtName) {
        var options = {
          passive: true,
          capture: false
        };

        if (on) {
          (0, _dom.eventOn)(window, evtName, _this4.adjustDialog, options);
        } else {
          (0, _dom.eventOff)(window, evtName, _this4.adjustDialog, options);
        }
      });
    },
    // Root Listener handlers
    showHandler: function showHandler(id, triggerEl) {
      if (id === this.id) {
        this.return_focus = triggerEl || null;
        this.show();
      }
    },
    hideHandler: function hideHandler(id) {
      if (id === this.id) {
        this.hide('event');
      }
    },
    toggleHandler: function toggleHandler(id, triggerEl) {
      if (id === this.id) {
        this.toggle(triggerEl);
      }
    },
    shownHandler: function shownHandler() {
      this.setTop();
    },
    hiddenHandler: function hiddenHandler() {
      this.setTop();
    },
    setTop: function setTop() {
      // Determine if we are the topmost visible modal
      this.isTop = this.zIndex >= getModalMaxZIndex();
    },
    modalListener: function modalListener(bvEvt) {
      // If another modal opens, close this one
      if (this.noStacking && bvEvt.vueTarget !== this) {
        this.hide();
      }
    },
    // Focus control handlers
    focusFirst: function focusFirst() {
      // Don't try and focus if we are SSR
      if (typeof document === 'undefined') {
        return;
      }

      var modal = this.$refs.modal;
      var activeElement = document.activeElement;

      if (activeElement && (0, _dom.contains)(modal, activeElement)) {
        // If activeElement is child of modal or is modal, no need to change focus
        return;
      }

      if (modal) {
        // make sure top of modal is showing (if longer than the viewport) and
        // focus the modal content wrapper
        this.$nextTick(function () {
          modal.scrollTop = 0;
          modal.focus();
        });
      }
    },
    returnFocusTo: function returnFocusTo() {
      // Prefer returnFocus prop over event specified return_focus value
      var el = this.returnFocus || this.return_focus || null;

      if (typeof el === 'string') {
        // CSS Selector
        el = (0, _dom.select)(el);
      }

      if (el) {
        el = el.$el || el;

        if ((0, _dom.isVisible)(el)) {
          el.focus();
        }
      }
    },
    // Utility methods
    getScrollbarWidth: function getScrollbarWidth() {
      var scrollDiv = document.createElement('div');
      scrollDiv.className = 'modal-scrollbar-measure';
      document.body.appendChild(scrollDiv);
      this.scrollbarWidth = (0, _dom.getBCR)(scrollDiv).width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    },
    setModalOpenClass: function setModalOpenClass(open) {
      if (open) {
        (0, _dom.addClass)(document.body, 'modal-open');
      } else {
        (0, _dom.removeClass)(document.body, 'modal-open');
      }
    },
    adjustDialog: function adjustDialog() {
      if (!this.is_visible) {
        return;
      }

      var modal = this.$refs.modal;
      var isModalOverflowing = modal.scrollHeight > document.documentElement.clientHeight;

      if (!this.isBodyOverflowing && isModalOverflowing) {
        modal.style.paddingLeft = "".concat(this.scrollbarWidth, "px");
      } else {
        modal.style.paddingLeft = '';
      }

      if (this.isBodyOverflowing && !isModalOverflowing) {
        modal.style.paddingRight = "".concat(this.scrollbarWidth, "px");
      } else {
        modal.style.paddingRight = '';
      }
    },
    resetDialogAdjustments: function resetDialogAdjustments() {
      var modal = this.$refs.modal;

      if (modal) {
        modal.style.paddingLeft = '';
        modal.style.paddingRight = '';
      }
    },
    checkScrollbar: function checkScrollbar()
    /* istanbul ignore next: getBCR can't be tested in JSDOM */
    {
      var _getBCR = (0, _dom.getBCR)(document.body),
          left = _getBCR.left,
          right = _getBCR.right,
          height = _getBCR.height; // Extra check for body.height needed for stacked modals


      this.isBodyOverflowing = left + right < window.innerWidth || height > window.innerHeight;
    },
    setScrollbar: function setScrollbar() {
      /* istanbul ignore if: get Computed Style can't be tested in JSDOM */
      if (this.isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var body = document.body;
        var scrollbarWidth = this.scrollbarWidth;
        body._paddingChangedForModal = [];
        body._marginChangedForModal = []; // Adjust fixed content padding

        (0, _dom.selectAll)(Selector.FIXED_CONTENT).forEach(function (el) {
          var actualPadding = el.style.paddingRight;
          var calculatedPadding = (0, _dom.getCS)(el).paddingRight || 0;
          (0, _dom.setAttr)(el, 'data-padding-right', actualPadding);
          el.style.paddingRight = "".concat(parseFloat(calculatedPadding) + scrollbarWidth, "px");

          body._paddingChangedForModal.push(el);
        }); // Adjust sticky content margin

        (0, _dom.selectAll)(Selector.STICKY_CONTENT).forEach(function (el) {
          var actualMargin = el.style.marginRight;
          var calculatedMargin = (0, _dom.getCS)(el).marginRight || 0;
          (0, _dom.setAttr)(el, 'data-margin-right', actualMargin);
          el.style.marginRight = "".concat(parseFloat(calculatedMargin) - scrollbarWidth, "px");

          body._marginChangedForModal.push(el);
        }); // Adjust navbar-toggler margin

        (0, _dom.selectAll)(Selector.NAVBAR_TOGGLER).forEach(function (el) {
          var actualMargin = el.style.marginRight;
          var calculatedMargin = (0, _dom.getCS)(el).marginRight || 0;
          (0, _dom.setAttr)(el, 'data-margin-right', actualMargin);
          el.style.marginRight = "".concat(parseFloat(calculatedMargin) + scrollbarWidth, "px");

          body._marginChangedForModal.push(el);
        }); // Adjust body padding

        var actualPadding = body.style.paddingRight;
        var calculatedPadding = (0, _dom.getCS)(body).paddingRight;
        (0, _dom.setAttr)(body, 'data-padding-right', actualPadding);
        body.style.paddingRight = "".concat(parseFloat(calculatedPadding) + scrollbarWidth, "px");
      }
    },
    resetScrollbar: function resetScrollbar() {
      var body = document.body;

      if (body._paddingChangedForModal) {
        // Restore fixed content padding
        body._paddingChangedForModal.forEach(function (el) {
          if ((0, _dom.hasAttr)(el, 'data-padding-right')) {
            el.style.paddingRight = (0, _dom.getAttr)(el, 'data-padding-right') || '';
            (0, _dom.removeAttr)(el, 'data-padding-right');
          }
        });
      }

      if (body._marginChangedForModal) {
        // Restore sticky content and navbar-toggler margin
        body._marginChangedForModal.forEach(function (el) {
          if ((0, _dom.hasAttr)(el, 'data-margin-right')) {
            el.style.marginRight = (0, _dom.getAttr)(el, 'data-margin-right') || '';
            (0, _dom.removeAttr)(el, 'data-margin-right');
          }
        });
      }

      body._paddingChangedForModal = null;
      body._marginChangedForModal = null; // Restore body padding

      if ((0, _dom.hasAttr)(body, 'data-padding-right')) {
        body.style.paddingRight = (0, _dom.getAttr)(body, 'data-padding-right') || '';
        (0, _dom.removeAttr)(body, 'data-padding-right');
      }
    }
  },
  render: function render(h) {
    var _this5 = this;

    var $slots = this.$slots; // Modal Header

    var header = h(false);

    if (!this.hideHeader) {
      var modalHeader = $slots['modal-header'];

      if (!modalHeader) {
        var closeButton = h(false);

        if (!this.hideHeaderClose) {
          closeButton = h('b-button-close', {
            props: {
              disabled: this.is_transitioning,
              ariaLabel: this.headerCloseLabel,
              textVariant: this.headerCloseVariant || this.headerTextVariant
            },
            on: {
              click: function click(evt) {
                _this5.hide('headerclose');
              }
            }
          }, [$slots['modal-header-close']]);
        }

        modalHeader = [h(this.titleTag, {
          class: ['modal-title']
        }, [$slots['modal-title'] || this.titleHtml || (0, _html.stripTags)(this.title)]), closeButton];
      }

      header = h('header', {
        ref: 'header',
        staticClass: 'modal-header',
        class: this.headerClasses,
        attrs: {
          id: this.safeId('__BV_modal_header_')
        }
      }, [modalHeader]);
    } // Modal Body


    var body = h('div', {
      ref: 'body',
      staticClass: 'modal-body',
      class: this.bodyClasses,
      attrs: {
        id: this.safeId('__BV_modal_body_')
      }
    }, [$slots.default]); // Modal Footer

    var footer = h(false);

    if (!this.hideFooter) {
      var modalFooter = $slots['modal-footer'];

      if (!modalFooter) {
        var cancelButton = h(false);

        if (!this.okOnly) {
          cancelButton = h('b-button', {
            props: {
              variant: this.cancelVariant,
              size: this.buttonSize,
              disabled: this.cancelDisabled || this.busy || this.is_transitioning
            },
            on: {
              click: function click(evt) {
                _this5.hide('cancel');
              }
            }
          }, [$slots['modal-cancel'] || this.cancelTitleHtml || (0, _html.stripTags)(this.cancelTitle)]);
        }

        var okButton = h('b-button', {
          props: {
            variant: this.okVariant,
            size: this.buttonSize,
            disabled: this.okDisabled || this.busy || this.is_transitioning
          },
          on: {
            click: function click(evt) {
              _this5.hide('ok');
            }
          }
        }, [$slots['modal-ok'] || this.okTitleHtml || (0, _html.stripTags)(this.okTitle)]);
        modalFooter = [cancelButton, okButton];
      }

      footer = h('footer', {
        ref: 'footer',
        staticClass: 'modal-footer',
        class: this.footerClasses,
        attrs: {
          id: this.safeId('__BV_modal_footer_')
        }
      }, [modalFooter]);
    } // Assemble Modal Content


    var modalContent = h('div', {
      ref: 'content',
      class: this.contentClasses,
      attrs: {
        role: 'document',
        id: this.safeId('__BV_modal_content_'),
        'aria-labelledby': this.hideHeader ? null : this.safeId('__BV_modal_header_'),
        'aria-describedby': this.safeId('__BV_modal_body_')
      }
    }, [header, body, footer]); // Modal Dialog wrapper

    var modalDialog = h('div', {
      staticClass: 'modal-dialog',
      class: this.dialogClasses
    }, [modalContent]); // Modal

    var modal = h('div', {
      ref: 'modal',
      staticClass: 'modal',
      class: this.modalClasses,
      directives: [{
        name: 'show',
        rawName: 'v-show',
        value: this.is_visible,
        expression: 'is_visible'
      }],
      attrs: {
        id: this.safeId(),
        role: 'dialog',
        tabindex: '-1',
        'aria-hidden': this.is_visible ? null : 'true',
        'aria-modal': this.is_visible ? 'true' : null
      },
      on: {
        keydown: this.onEsc,
        click: this.onClickOut
      }
    }, [modalDialog]); // Wrap modal in transition

    modal = h('transition', {
      props: {
        enterClass: '',
        enterToClass: '',
        enterActiveClass: '',
        leaveClass: '',
        leaveActiveClass: '',
        leaveToClass: ''
      },
      on: {
        'before-enter': this.onBeforeEnter,
        enter: this.onEnter,
        'after-enter': this.onAfterEnter,
        'before-leave': this.onBeforeLeave,
        leave: this.onLeave,
        'after-leave': this.onAfterLeave
      }
    }, [modal]); // Modal Backdrop

    var backdrop = h(false);

    if (!this.hideBackdrop && (this.is_visible || this.is_transitioning)) {
      backdrop = h('div', {
        staticClass: 'modal-backdrop',
        class: this.backdropClasses,
        attrs: {
          id: this.safeId('__BV_modal_backdrop_')
        }
      }, [$slots['modal-backdrop']]);
    } // Tab trap to prevent page from scrolling to next element in tab index during enforce focus tab cycle


    var tabTrap = h(false);

    if (this.is_visible && this.isTop && !this.noEnforceFocus) {
      tabTrap = h('div', {
        attrs: {
          tabindex: '0'
        }
      });
    } // Assemble modal and backdrop in an outer div needed for lazy modals


    var outer = h(false);

    if (!this.is_hidden) {
      outer = h('div', {
        key: 'modal-outer',
        style: this.modalOuterStyle,
        attrs: {
          id: this.safeId('__BV_modal_outer_')
        }
      }, [modal, tabTrap, backdrop]);
    } // Wrap in DIV to maintain thi.$el reference for hide/show method aceess


    return h('div', {}, [outer]);
  }
};
exports.default = _default2;

/***/ }),

/***/ "3b14":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = stringifyRecordValues;

var _sanitizeRow = __webpack_require__("b40f");

var _stringifyObjectValues = __webpack_require__("2227");

// Stringifies the values of a record, ignoring any special top level field keys
// TODO: add option to strigify formatted/scopedSlot items, and only specific fields
function stringifyRecordValues(row) {
  /* istanbul ignore else */
  if (row instanceof Object) {
    return (0, _stringifyObjectValues.default)((0, _sanitizeRow.default)(row));
  } else {
    /* istanbul ignore next */
    return '';
  }
}

/***/ }),

/***/ "3b34":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _link = __webpack_require__("4e40");

var _plugins = __webpack_require__("0a8d");

var components = {
  BLink: _link.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "3baf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__("b42e");

var _mediaBody = __webpack_require__("7a5e");

var _mediaAside = __webpack_require__("7b63");

var props = {
  tag: {
    type: String,
    default: 'div'
  },
  rightAlign: {
    type: Boolean,
    default: false
  },
  verticalAlign: {
    type: String,
    default: 'top'
  },
  noBody: {
    type: Boolean,
    default: false
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BMedia',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        slots = _ref.slots,
        children = _ref.children;
    var childNodes = props.noBody ? children : [];
    var $slots = slots();

    if (!props.noBody) {
      if ($slots.aside && !props.rightAlign) {
        childNodes.push(h(_mediaAside.default, {
          staticClass: 'mr-3',
          props: {
            verticalAlign: props.verticalAlign
          }
        }, $slots.aside));
      }

      childNodes.push(h(_mediaBody.default, $slots.default));

      if ($slots.aside && props.rightAlign) {
        childNodes.push(h(_mediaAside.default, {
          staticClass: 'ml-3',
          props: {
            verticalAlign: props.verticalAlign
          }
        }, $slots.aside));
      }
    }

    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'media'
    }), childNodes);
  }
};
exports.default = _default;

/***/ }),

/***/ "3ed8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.EVENT_FILTER = exports.IGNORED_FIELD_KEYS = void 0;
// Constants used by table helpers
// Object of item keys that should be ignored for headers and stringification and filter events
var IGNORED_FIELD_KEYS = {
  _rowVariant: true,
  _cellVariants: true,
  _showDetails: true // Filter CSS Selector for click/dblclick/etc events
  // If any of these selectors match the clicked element, we ignore the event

};
exports.IGNORED_FIELD_KEYS = IGNORED_FIELD_KEYS;
var EVENT_FILTER = ['a', 'a *', // include content inside links
'button', 'button *', // include content inside buttons
'input:not(.disabled):not([disabled])', 'select:not(.disabled):not([disabled])', 'textarea:not(.disabled):not([disabled])', '[role="link"]', '[role="link"] *', '[role="button"]', '[role="button"] *', '[tabindex]:not(.disabled):not([disabled])'].join(',');
exports.EVENT_FILTER = EVENT_FILTER;

/***/ }),

/***/ "4034":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__("b42e");

var props = {
  tag: {
    type: String,
    default: 'div'
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BDropdownDivider',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data;
    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'dropdown-divider',
      attrs: {
        role: 'separator'
      }
    }));
  }
};
exports.default = _default;

/***/ }),

/***/ "40bb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _link = __webpack_require__("4e40");

var _keyCodes = __webpack_require__("06e4");

var _observeDom = __webpack_require__("bf9c");

var _id = __webpack_require__("eae0");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Private Helper component
// @vue/component
var BTabButtonHelper = {
  name: 'BTabButtonHelper',
  inject: {
    bvTabs: {
      default: function _default()
      /* istanbul ignore next */
      {
        return {};
      }
    }
  },
  props: {
    // Reference to the child b-tab instance
    tab: {
      default: null
    },
    tabs: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    id: {
      type: String,
      default: null
    },
    controls: {
      type: String,
      default: null
    },
    tabIndex: {
      type: Number,
      default: null
    },
    posInSet: {
      type: Number,
      default: null
    },
    setSize: {
      type: Number,
      default: null
    },
    noKeyNav: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    focus: function focus() {
      if (this.$refs && this.$refs.link && this.$refs.link.focus) {
        this.$refs.link.focus();
      }
    },
    handleEvt: function handleEvt(evt) {
      function stop() {
        evt.preventDefault();
        evt.stopPropagation();
      }

      if (this.tab.disabled) {
        /* istanbul ignore next */
        return;
      }

      var type = evt.type;
      var key = evt.keyCode;
      var shift = evt.shiftKey;

      if (type === 'click') {
        stop();
        this.$emit('click', evt);
      } else if (type === 'keydown' && !this.noKeyNav && key === _keyCodes.default.SPACE) {
        // In keynav mode, SPACE press will also trigger a click/select
        stop();
        this.$emit('click', evt);
      } else if (type === 'keydown' && !this.noKeyNav) {
        // For keyboard navigation
        if (key === _keyCodes.default.UP || key === _keyCodes.default.LEFT || key === _keyCodes.default.HOME) {
          stop();

          if (shift || key === _keyCodes.default.HOME) {
            this.$emit('first', evt);
          } else {
            this.$emit('prev', evt);
          }
        } else if (key === _keyCodes.default.DOWN || key === _keyCodes.default.RIGHT || key === _keyCodes.default.END) {
          stop();

          if (shift || key === _keyCodes.default.END) {
            this.$emit('last', evt);
          } else {
            this.$emit('next', evt);
          }
        }
      }
    }
  },
  render: function render(h) {
    var link = h(_link.default, {
      ref: 'link',
      staticClass: 'nav-link',
      class: [{
        active: this.tab.localActive && !this.tab.disabled,
        disabled: this.tab.disabled
      }, this.tab.titleLinkClass],
      props: {
        href: this.tab.href,
        // To be deprecated to always be '#'
        disabled: this.tab.disabled
      },
      attrs: {
        role: 'tab',
        id: this.id,
        // Roving tab index when keynav enabled
        tabindex: this.tabIndex,
        'aria-selected': this.tab.localActive && !this.tab.disabled ? 'true' : 'false',
        'aria-setsize': this.setSize,
        'aria-posinset': this.posInSet,
        'aria-controls': this.controls
      },
      on: {
        click: this.handleEvt,
        keydown: this.handleEvt
      }
    }, [this.tab.$slots.title || this.tab.title]);
    return h('li', {
      staticClass: 'nav-item',
      class: [this.tab.titleItemClass],
      attrs: {
        role: 'presentation'
      }
    }, [link]);
  }
}; // Filter function to filter out disabled tabs

function notDisabled(tab) {
  return !tab.disabled;
} // @vue/component


var _default2 = {
  name: 'BTabs',
  mixins: [_id.default],
  provide: function provide() {
    return {
      bvTabs: this
    };
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    card: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    pills: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    },
    bottom: {
      type: Boolean,
      default: false
    },
    end: {
      // Synonym for 'bottom'
      type: Boolean,
      default: false
    },
    noFade: {
      type: Boolean,
      default: false
    },
    noNavStyle: {
      type: Boolean,
      default: false
    },
    noKeyNav: {
      type: Boolean,
      default: false
    },
    lazy: {
      // This prop is sniffed by the tab child
      type: Boolean,
      default: false
    },
    contentClass: {
      type: [String, Array, Object],
      default: null
    },
    navClass: {
      type: [String, Array, Object],
      default: null
    },
    navWrapperClass: {
      type: [String, Array, Object],
      default: null
    },
    value: {
      // v-model
      type: Number,
      default: null
    }
  },
  data: function data() {
    var tabIdx = parseInt(this.value, 10);
    tabIdx = isNaN(tabIdx) ? -1 : tabIdx;
    return {
      // Index of current tab
      currentTab: tabIdx,
      // Array of direct child b-tab instances
      tabs: []
    };
  },
  computed: {
    fade: function fade() {
      // This computed prop is sniffed by the tab child
      return !this.noFade;
    },
    navStyle: function navStyle() {
      return this.pills ? 'pills' : 'tabs';
    }
  },
  watch: {
    currentTab: function currentTab(val, old) {
      var index = -1; // Ensure only one tab is active at most

      this.tabs.forEach(function (tab, idx) {
        if (val === idx && !tab.disabled) {
          tab.localActive = true;
          index = idx;
        } else {
          tab.localActive = false;
        }
      }); // Update the v-model

      this.$emit('input', index);
    },
    value: function value(val, old) {
      if (val !== old) {
        val = parseInt(val, 10);
        val = isNaN(val) ? -1 : val;
        old = parseInt(old, 10) || 0;
        var tabs = this.tabs;

        if (tabs[val] && !tabs[val].disabled) {
          this.currentTab = val;
        } else {
          // Try next or prev tabs
          if (val < old) {
            this.previousTab();
          } else {
            this.nextTab();
          }
        }
      }
    }
  },
  created: function created() {
    var _this = this;

    var tabIdx = parseInt(this.value, 10);
    this.currentTab = isNaN(tabIdx) ? -1 : tabIdx; // Create private non-reactive prop

    this._bvObserver = null; // For SSR and to make sure only a single tab is shown on mount
    // We wrap this in a `$nextTick()` to ensure the child tabs have been created

    this.$nextTick(function () {
      _this.updateTabs();
    });
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$nextTick(function () {
      // Call updateTabs jsut in case....
      _this2.updateTabs(); // Observe Child changes so we can update list of tabs


      _this2.setObserver(true);
    });
  },
  deactivated: function deactivated()
  /* istanbul ignore next */
  {
    this.setObserver(false);
  },
  activated: function activated()
  /* istanbul ignore next */
  {
    var _this3 = this;

    var tabIdx = parseInt(this.value, 10);
    this.currentTab = isNaN(tabIdx) ? -1 : tabIdx;
    this.$nextTick(function () {
      _this3.updateTabs();

      _this3.setObserver(true);
    });
  },
  beforeDestroy: function beforeDestroy()
  /* istanbul ignore next */
  {
    this.setObserver(false);
  },
  methods: {
    setObserver: function setObserver(on) {
      if (on) {
        // Make sure no existing observer running
        this.setObserver(false); // Watch for changes to b-tab sub components

        this._bvObserver = (0, _observeDom.default)(this.$refs.tabsContainer, this.updateTabs.bind(this), {
          childList: true,
          subtree: false,
          attributes: true,
          attributeFilter: ['style', 'class']
        });
      } else {
        if (this._bvObserver && this._bvObserver.disconnect) {
          this._bvObserver.disconnect();
        }

        this._bvObserver = null;
      }
    },
    getTabs: function getTabs() {
      return (this.$slots.default || []).map(function (vnode) {
        return vnode.componentInstance;
      }).filter(function (tab) {
        return tab && tab._isTab;
      });
    },
    // Update list of b-tab children
    updateTabs: function updateTabs() {
      // Probe tabs
      var tabs = this.getTabs(); // Find *last* active non-disabled tab in current tabs
      // We trust tab state over currentTab, in case tabs were added/removed/re-ordered

      var tabIndex = tabs.indexOf(tabs.slice().reverse().find(function (tab) {
        return tab.localActive && !tab.disabled;
      })); // Else try setting to currentTab

      if (tabIndex < 0) {
        var currentTab = this.currentTab;

        if (currentTab >= tabs.length) {
          // Handle last tab being removed, so find the last non-disabled tab
          tabIndex = tabs.indexOf(tabs.slice().reverse().find(notDisabled));
        } else if (tabs[currentTab] && !tabs[currentTab].disabled) {
          // Current tab is not disabled
          tabIndex = currentTab;
        }
      } // Else find *first* non-disabled tab in current tabs


      if (tabIndex < 0) {
        tabIndex = tabs.indexOf(tabs.find(notDisabled));
      } // Set the current tab state to active


      tabs.forEach(function (tab, idx) {
        // tab.localActive = idx === tabIndex && !tab.disabled
        tab.localActive = false;
      });

      if (tabs[tabIndex]) {
        tabs[tabIndex].localActive = true;
      } // Update the array of tab children


      this.tabs = tabs; // Set the currentTab index (can be -1 if no non-disabled tabs)

      this.currentTab = tabIndex;
    },
    // Find a button that controls a tab, given the tab reference
    // Returns the button vm instance
    getButtonForTab: function getButtonForTab(tab) {
      return (this.$refs.buttons || []).find(function (btn) {
        return btn.tab === tab;
      });
    },
    // Force a button to re-render it's content, given a b-tab instance
    // Called by b-tab on update()
    updateButton: function updateButton(tab) {
      var button = this.getButtonForTab(tab);

      if (button && button.$forceUpdate) {
        button.$forceUpdate();
      }
    },
    // Activate a tab given a b-tab instance
    // Also accessed by b-tab
    activateTab: function activateTab(tab) {
      var result = false;

      if (tab) {
        var index = this.tabs.indexOf(tab);

        if (!tab.disabled && index > -1) {
          result = true;
          this.currentTab = index;
        }
      }

      if (!result) {
        // Couldn't set tab, so ensure v-model is set to this.currentTab

        /* istanbul ignore next: should rarely happen */
        this.$emit('input', this.currentTab);
      }

      return result;
    },
    // Deactivate a tab given a b-tab instance
    // Accessed by b-tab
    deactivateTab: function deactivateTab(tab) {
      if (tab) {
        // Find first non-disabled tab that isn't the one being deactivated
        // If no available tabs, then don't deactivate current tab
        return this.activateTab(this.tabs.filter(function (t) {
          return t !== tab;
        }).find(notDisabled));
      } else {
        // No tab specified

        /* istanbull ignore next: should never happen */
        return false;
      }
    },
    // Focus a tab button given it's b-tab instance
    focusButton: function focusButton(tab) {
      var _this4 = this;

      // Wrap in nextTick to ensure DOM has completed rendering/updating before focusing
      this.$nextTick(function () {
        var button = _this4.getButtonForTab(tab);

        if (button && button.focus) {
          button.focus();
        }
      });
    },
    // Emit a click event on a specified b-tab component instance
    emitTabClick: function emitTabClick(tab, evt) {
      if (evt && evt instanceof Event && tab && tab.$emit && !tab.disabled) {
        tab.$emit('click', evt);
      }
    },
    // Click Handler
    clickTab: function clickTab(tab, evt) {
      this.activateTab(tab);
      this.emitTabClick(tab, evt);
    },
    // Move to first non-disabled tab
    firstTab: function firstTab(focus) {
      var tab = this.tabs.find(notDisabled);

      if (this.activateTab(tab) && focus) {
        this.focusButton(tab);
        this.emitTabClick(tab, focus);
      }
    },
    // Move to previous non-disabled tab
    previousTab: function previousTab(focus) {
      var currentIndex = Math.max(this.currentTab, 0);
      var tab = this.tabs.slice(0, currentIndex).reverse().find(notDisabled);

      if (this.activateTab(tab) && focus) {
        this.focusButton(tab);
        this.emitTabClick(tab, focus);
      }
    },
    // Move to next non-disabled tab
    nextTab: function nextTab(focus) {
      var currentIndex = Math.max(this.currentTab, -1);
      var tab = this.tabs.slice(currentIndex + 1).find(notDisabled);

      if (this.activateTab(tab) && focus) {
        this.focusButton(tab);
        this.emitTabClick(tab, focus);
      }
    },
    // Move to last non-disabled tab
    lastTab: function lastTab(focus) {
      var tab = this.tabs.slice().reverse().find(notDisabled);

      if (this.activateTab(tab) && focus) {
        this.focusButton(tab);
        this.emitTabClick(tab, focus);
      }
    }
  },
  render: function render(h) {
    var _this5 = this,
        _ref;

    var tabs = this.tabs; // Currently active tab

    var activeTab = tabs.find(function (tab) {
      return tab.localActive && !tab.disabled;
    }); // Tab button to allow focusing when no active tab found (keynav only)

    var fallbackTab = tabs.find(function (tab) {
      return !tab.disabled;
    }); // For each <b-tab> found create the tab buttons

    var buttons = tabs.map(function (tab, index) {
      var tabIndex = null; // Ensure at least one tab button is focusable when keynav enabled (if possible)

      if (!_this5.noKeyNav) {
        // Buttons are not in tab index unless active, or a fallback tab
        tabIndex = -1;

        if (activeTab === tab || !activeTab && fallbackTab === tab) {
          // Place tab button in tab sequence
          tabIndex = null;
        }
      }

      return h(BTabButtonHelper, {
        key: tab._uid || index,
        ref: 'buttons',
        // Needed to make this.$refs.buttons an array
        refInFor: true,
        props: {
          tab: tab,
          tabs: tabs,
          id: tab.controlledBy || (_this5.tab && _this5.tab.safeId ? _this5.tab.safeId("_BV_tab_button_") : null),
          controls: _this5.tab && _this5.tab.safeId ? _this5.tab.safeId() : null,
          tabIndex: tabIndex,
          setSize: tabs.length,
          posInSet: index + 1,
          noKeyNav: _this5.noKeyNav
        },
        on: {
          click: function click(evt) {
            _this5.clickTab(tab, evt);
          },
          first: _this5.firstTab,
          prev: _this5.previousTab,
          next: _this5.nextTab,
          last: _this5.lastTab
        }
      });
    }); // Nav 'button' wrapper

    var navs = h('ul', {
      ref: 'navs',
      class: ['nav', (_ref = {}, _defineProperty(_ref, "nav-".concat(this.navStyle), !this.noNavStyle), _defineProperty(_ref, "card-header-".concat(this.navStyle), this.card && !this.vertical), _defineProperty(_ref, 'card-header', this.card && this.vertical), _defineProperty(_ref, 'h-100', this.card && this.vertical), _defineProperty(_ref, 'flex-column', this.vertical), _defineProperty(_ref, 'border-bottom-0', this.vertical), _defineProperty(_ref, 'rounded-0', this.vertical), _defineProperty(_ref, "small", this.small), _ref), this.navClass],
      attrs: {
        role: 'tablist',
        id: this.safeId('_BV_tab_controls_')
      }
    }, [buttons, this.$slots.tabs]);
    navs = h('div', {
      key: 'bv-tabs-navs',
      class: [{
        'card-header': this.card && !this.vertical && !(this.end || this.bottom),
        'card-footer': this.card && !this.vertical && (this.end || this.bottom),
        'col-auto': this.vertical
      }, this.navWrapperClass]
    }, [navs]);
    var empty = h(false);

    if (!tabs || tabs.length === 0) {
      empty = h('div', {
        key: 'empty-tab',
        class: ['tab-pane', 'active', {
          'card-body': this.card
        }]
      }, this.$slots.empty);
    } // Main content section
    // TODO: This container should be a helper component


    var content = h('div', {
      ref: 'tabsContainer',
      key: 'bv-tabs-container',
      staticClass: 'tab-content',
      class: [{
        col: this.vertical
      }, this.contentClass],
      attrs: {
        id: this.safeId('_BV_tab_container_')
      }
    }, [this.$slots.default, empty]); // Render final output

    return h(this.tag, {
      staticClass: 'tabs',
      class: {
        row: this.vertical,
        'no-gutters': this.vertical && this.card
      },
      attrs: {
        id: this.safeId()
      }
    }, [this.end || this.bottom ? content : h(false), [navs], this.end || this.bottom ? h(false) : content]);
  }
};
exports.default = _default2;

/***/ }),

/***/ "40f6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _array = __webpack_require__("bb2f");

var _object = __webpack_require__("24e2");

/**
 * Convert a value to a string that can be rendered.
 */
var toString = function toString(val) {
  var spaces = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return val === null || val === undefined ? '' : (0, _array.isArray)(val) || (0, _object.isPlainObject)(val) && val.toString === Object.prototype.toString ? JSON.stringify(val, null, spaces) : String(val);
};

var _default = toString;
exports.default = _default;

/***/ }),

/***/ "41a0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("2aeb");
var descriptor = __webpack_require__("4630");
var setToStringTag = __webpack_require__("7f20");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("32e9")(IteratorPrototype, __webpack_require__("2b4c")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "41cd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _listenOnRoot = __webpack_require__("edbc");

// @vue/component
var _default = {
  name: 'BNavbarToggle',
  mixins: [_listenOnRoot.default],
  props: {
    label: {
      type: String,
      default: 'Toggle navigation'
    },
    target: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      toggleState: false
    };
  },
  created: function created() {
    this.listenOnRoot('bv::collapse::state', this.handleStateEvt);
  },
  methods: {
    onClick: function onClick(evt) {
      this.$emit('click', evt);
      /* istanbul ignore next */

      if (!evt.defaultPrevented) {
        this.$root.$emit('bv::toggle::collapse', this.target);
      }
    },
    handleStateEvt: function handleStateEvt(id, state) {
      if (id === this.target) {
        this.toggleState = state;
      }
    }
  },
  render: function render(h) {
    return h('button', {
      class: ['navbar-toggler'],
      attrs: {
        type: 'button',
        'aria-label': this.label,
        'aria-controls': this.target,
        'aria-expanded': this.toggleState ? 'true' : 'false'
      },
      on: {
        click: this.onClick
      }
    }, [this.$slots.default || h('span', {
      class: ['navbar-toggler-icon']
    })]);
  }
};
exports.default = _default;

/***/ }),

/***/ "41fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/* Form control contextual state class computation
 *
 * Returned class is either 'is-valid' or 'is-invalid' based on the 'state' prop
 * state can be one of five values:
 *  - true or 'valid' for is-valid
 *  - false or 'invalid' for is-invalid
 *  - null (or empty string) for no contextual state
 */
// @vue/component
var _default = {
  props: {
    state: {
      // true/'valid', false/'invalid', '',null
      // The order must be String first, then Boolean!
      type: [String, Boolean],
      default: null
    }
  },
  computed: {
    computedState: function computedState() {
      var state = this.state;

      if (state === '') {
        return null;
      } else if (state === true || state === 'valid') {
        return true;
      } else if (state === false || state === 'invalid') {
        return false;
      }

      return null;
    },
    stateClass: function stateClass() {
      var state = this.computedState;

      if (state === true) {
        return 'is-valid';
      } else if (state === false) {
        return 'is-invalid';
      }

      return null;
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "4216":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _id = __webpack_require__("eae0");

var _form = __webpack_require__("5f07");

var _formSize = __webpack_require__("6e1b");

var _formState = __webpack_require__("41fb");

var _formText = __webpack_require__("c01c");

var _formSelection = __webpack_require__("10fc");

var _formValidity = __webpack_require__("b965");

var _array = __webpack_require__("bb2f");

var _dom = __webpack_require__("1611");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Valid supported input types
var TYPES = ['text', 'password', 'email', 'number', 'url', 'tel', 'search', 'range', 'color', 'date', 'time', 'datetime', 'datetime-local', 'month', 'week']; // @vue/component

var _default = {
  name: 'BFormInput',
  mixins: [_id.default, _form.default, _formSize.default, _formState.default, _formText.default, _formSelection.default, _formValidity.default],
  props: {
    // value prop defined in form-text mixin
    // value: { },
    type: {
      type: String,
      default: 'text',
      validator: function validator(type) {
        return (0, _array.arrayIncludes)(TYPES, type);
      }
    },
    noWheel: {
      // Disable mousewheel to prevent wheel from changing values (i.e. number/date).
      type: Boolean,
      default: false
    },
    min: {
      type: [String, Number],
      default: null
    },
    max: {
      type: [String, Number],
      default: null
    },
    step: {
      type: [String, Number],
      default: null
    },
    list: {
      type: String,
      default: null
    }
  },
  computed: {
    localType: function localType() {
      // We only allow certain types
      return (0, _array.arrayIncludes)(TYPES, this.type) ? this.type : 'text';
    }
  },
  watch: {
    noWheel: function noWheel(newVal) {
      this.setWheelStopper(newVal);
    }
  },
  mounted: function mounted() {
    this.setWheelStopper(this.noWheel);
  },
  deactivated: function deactivated() {
    // Turn off listeners when keep-alive component deactivated

    /* istanbul ignore next */
    this.setWheelStopper(false);
  },
  activated: function activated() {
    // Turn on listeners (if no-wheel) when keep-alive component activated

    /* istanbul ignore next */
    this.setWheelStopper(this.noWheel);
  },
  beforeDestroy: function beforeDestroy() {
    /* istanbul ignore next */
    this.setWheelStopper(false);
  },
  methods: {
    setWheelStopper: function setWheelStopper(on) {
      var input = this.$el; // We use native events, so that we don't interfere with propgation

      if (on) {
        (0, _dom.eventOn)(input, 'focus', this.onWheelFocus);
        (0, _dom.eventOn)(input, 'blur', this.onWheelBlur);
      } else {
        (0, _dom.eventOff)(input, 'focus', this.onWheelFocus);
        (0, _dom.eventOff)(input, 'blur', this.onWheelBlur);
        (0, _dom.eventOff)(document, 'wheel', this.stopWheel);
      }
    },
    onWheelFocus: function onWheelFocus(evt) {
      (0, _dom.eventOn)(document, 'wheel', this.stopWheel);
    },
    onWheelBlur: function onWheelBlur(evt) {
      (0, _dom.eventOff)(document, 'wheel', this.stopWheel);
    },
    stopWheel: function stopWheel(evt) {
      evt.preventDefault();
      this.$el.blur();
    }
  },
  render: function render(h) {
    var self = this;
    return h('input', {
      ref: 'input',
      class: self.computedClass,
      directives: [{
        name: 'model',
        rawName: 'v-model',
        value: self.localValue,
        expression: 'localValue'
      }],
      attrs: {
        id: self.safeId(),
        name: self.name,
        form: self.form || null,
        type: self.localType,
        disabled: self.disabled,
        placeholder: self.placeholder,
        required: self.required,
        autocomplete: self.autocomplete || null,
        readonly: self.readonly || self.plaintext,
        min: self.min,
        max: self.max,
        step: self.step,
        list: self.localType !== 'password' ? self.list : null,
        'aria-required': self.required ? 'true' : null,
        'aria-invalid': self.computedAriaInvalid
      },
      domProps: {
        value: self.localValue
      },
      on: _objectSpread({}, self.$listeners, {
        input: self.onInput,
        change: self.onChange,
        blur: self.onBlur
      })
    });
  }
};
exports.default = _default;

/***/ }),

/***/ "4362":
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
	setTimeout(fn, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__("df7c");
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ "4399":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _normalizeFields = __webpack_require__("4d86");

var _array = __webpack_require__("bb2f");

var _default2 = {
  props: {
    items: {
      type: [Array, Function],
      default: function _default()
      /* istanbul ignore next */
      {
        return [];
      }
    },
    fields: {
      // Object format is deprecated and should be avoided
      type: [Array, Object],
      default: null
    },
    primaryKey: {
      // Primary key for record.
      // If provided the value in each row must be unique!!!
      type: String,
      default: null
    }
  },
  data: function data() {
    return {
      // Our local copy of the items. Must be an array
      localItems: (0, _array.isArray)(this.items) ? this.items.slice() : []
    };
  },
  computed: {
    computedFields: function computedFields() {
      // We normalize fields into an array of objects
      // [ { key:..., label:..., ...}, {...}, ..., {..}]
      return (0, _normalizeFields.default)(this.fields, this.localItems);
    },
    computedFieldsObj: function computedFieldsObj()
    /* istanbul ignore next: not using at the moment */
    {
      // Fields as a simple lookup hash object
      // Mainly for scopedSlots for convenience
      return this.computedFields.reduce(function (f, obj) {
        obj[f.key] = f;
        return obj;
      }, {});
    }
  },
  watch: {
    items: function items(newItems) {
      /* istanbul ignore else */
      if ((0, _array.isArray)(newItems)) {
        // Set localItems/filteredItems to a copy of the provided array
        this.localItems = newItems.slice();
      } else if (newItems === null || newItems === undefined) {
        /* istanbul ignore next */
        this.localItems = [];
      }
    }
  }
};
exports.default = _default2;

/***/ }),

/***/ "4565":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports.getNoWarn = exports.hasPointerEvent = exports.hasTouchSupport = exports.isServer = exports.inBrowser = void 0;
// Info about the current environment
// Constants
var inBrowser = typeof document !== 'undefined' && typeof window !== 'undefined';
exports.inBrowser = inBrowser;
var isServer = !inBrowser;
exports.isServer = isServer;
var hasTouchSupport = inBrowser && ('ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0);
exports.hasTouchSupport = hasTouchSupport;
var hasPointerEvent = inBrowser && Boolean(window.PointerEvent || window.MSPointerEvent); // Getters

exports.hasPointerEvent = hasPointerEvent;

var getNoWarn = function getNoWarn() {
  return process && Object({"NODE_ENV":"production","BASE_URL":"/"}) && Object({"NODE_ENV":"production","BASE_URL":"/"}).BOOTSTRAP_VUE_NO_WARN;
};

exports.getNoWarn = getNoWarn;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "45f0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
// @vue/component
var _default = {
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    bgVariant: {
      type: String,
      default: null
    },
    borderVariant: {
      type: String,
      default: null
    },
    textVariant: {
      type: String,
      default: null
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "461c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _array = __webpack_require__("bb2f");

var _object = __webpack_require__("24e2");

var _html = __webpack_require__("be11");

function isObject(obj) {
  return obj && {}.toString.call(obj) === '[object Object]';
} // @vue/component


var _default2 = {
  props: {
    options: {
      type: [Array, Object],
      default: function _default() {
        return [];
      }
    },
    valueField: {
      type: String,
      default: 'value'
    },
    textField: {
      type: String,
      default: 'text'
    },
    htmlField: {
      type: String,
      default: 'html'
    },
    disabledField: {
      type: String,
      default: 'disabled'
    }
  },
  computed: {
    formOptions: function formOptions() {
      var options = this.options;
      var valueField = this.valueField;
      var textField = this.textField;
      var htmlField = this.htmlField;
      var disabledField = this.disabledField;

      if ((0, _array.isArray)(options)) {
        // Normalize flat-ish arrays to Array of Objects
        return options.map(function (option) {
          if (isObject(option)) {
            var value = option[valueField];
            var text = String(option[textField]);
            return {
              value: typeof value === 'undefined' ? text : value,
              text: (0, _html.stripTags)(text),
              html: option[htmlField],
              disabled: Boolean(option[disabledField])
            };
          }

          return {
            value: option,
            text: (0, _html.stripTags)(String(option)),
            disabled: false
          };
        });
      } else {
        // options is Object
        // Normalize Objects to Array of Objects
        return (0, _object.keys)(options).map(function (key) {
          var option = options[key] || {};

          if (isObject(option)) {
            var value = option[valueField];
            var text = option[textField];
            return {
              value: typeof value === 'undefined' ? key : value,
              text: typeof text === 'undefined' ? (0, _html.stripTags)(String(key)) : (0, _html.stripTags)(String(text)),
              html: option[htmlField],
              disabled: Boolean(option[disabledField])
            };
          }

          return {
            value: key,
            text: (0, _html.stripTags)(String(option)),
            disabled: false
          };
        });
      }
    }
  }
};
exports.default = _default2;

/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "485d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _id = __webpack_require__("eae0");

var _dropdown = __webpack_require__("c190");

var _html = __webpack_require__("be11");

// @vue/component
var _default = {
  name: 'BNavItemDropdown',
  mixins: [_id.default, _dropdown.default],
  props: {
    noCaret: {
      type: Boolean,
      default: false
    },
    extraToggleClasses: {
      // Extra Toggle classes
      type: String,
      default: ''
    },
    extraMenuClasses: {
      // Extra Menu classes
      type: String,
      default: ''
    },
    role: {
      type: String,
      default: 'menu'
    }
  },
  computed: {
    isNav: function isNav() {
      // Signal to dropdown mixin that we are in a navbar
      return true;
    },
    dropdownClasses: function dropdownClasses() {
      return ['nav-item', 'b-nav-dropdown', 'dropdown', this.dropup ? 'dropup' : '', this.visible ? 'show' : ''];
    },
    toggleClasses: function toggleClasses() {
      return ['nav-link', this.noCaret ? '' : 'dropdown-toggle', this.disabled ? 'disabled' : '', this.extraToggleClasses ? this.extraToggleClasses : ''];
    },
    menuClasses: function menuClasses() {
      return ['dropdown-menu', this.right ? 'dropdown-menu-right' : 'dropdown-menu-left', this.visible ? 'show' : '', this.extraMenuClasses ? this.extraMenuClasses : ''];
    }
  },
  render: function render(h) {
    var button = h('a', {
      class: this.toggleClasses,
      ref: 'toggle',
      attrs: {
        href: '#',
        id: this.safeId('_BV_button_'),
        disabled: this.disabled,
        'aria-haspopup': 'true',
        'aria-expanded': this.visible ? 'true' : 'false'
      },
      on: {
        click: this.toggle,
        keydown: this.toggle // space, enter, down

      }
    }, [this.$slots['button-content'] || this.$slots.text || h('span', {
      domProps: (0, _html.htmlOrText)(this.html, this.text)
    })]);
    var menu = h('div', {
      class: this.menuClasses,
      ref: 'menu',
      attrs: {
        tabindex: '-1',
        'aria-labelledby': this.safeId('_BV_button_')
      },
      on: {
        mouseover: this.onMouseOver,
        keydown: this.onKeydown // tab, up, down, esc

      }
    }, [this.$slots.default]);
    return h('li', {
      attrs: {
        id: this.safeId()
      },
      class: this.dropdownClasses
    }, [button, menu]);
  }
};
exports.default = _default;

/***/ }),

/***/ "4bf8":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "4c74":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__("b42e");

var _html = __webpack_require__("be11");

var _container = __webpack_require__("1520");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var props = {
  fluid: {
    type: Boolean,
    default: false
  },
  containerFluid: {
    type: Boolean,
    default: false
  },
  header: {
    type: String,
    default: null
  },
  headerHtml: {
    type: String,
    default: null
  },
  headerTag: {
    type: String,
    default: 'h1'
  },
  headerLevel: {
    type: [Number, String],
    default: '3'
  },
  lead: {
    type: String,
    default: null
  },
  leadHtml: {
    type: String,
    default: null
  },
  leadTag: {
    type: String,
    default: 'p'
  },
  tag: {
    type: String,
    default: 'div'
  },
  bgVariant: {
    type: String,
    default: null
  },
  borderVariant: {
    type: String,
    default: null
  },
  textVariant: {
    type: String,
    default: null
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BJumbotron',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var _class2;

    var props = _ref.props,
        data = _ref.data,
        slots = _ref.slots;
    // The order of the conditionals matter.
    // We are building the component markup in order.
    var childNodes = [];
    var $slots = slots(); // Header

    if (props.header || $slots.header || props.headerHtml) {
      childNodes.push(h(props.headerTag, {
        class: _defineProperty({}, "display-".concat(props.headerLevel), Boolean(props.headerLevel))
      }, $slots.header || props.headerHtml || (0, _html.stripTags)(props.header)));
    } // Lead


    if (props.lead || $slots.lead || props.leadHtml) {
      childNodes.push(h(props.leadTag, {
        staticClass: 'lead'
      }, $slots.lead || props.leadHtml || (0, _html.stripTags)(props.lead)));
    } // Default slot


    if ($slots.default) {
      childNodes.push($slots.default);
    } // If fluid, wrap content in a container/container-fluid


    if (props.fluid) {
      // Children become a child of a container
      childNodes = [h(_container.default, {
        props: {
          fluid: props.containerFluid
        }
      }, childNodes)];
    } // Return the jumbotron


    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'jumbotron',
      class: (_class2 = {
        'jumbotron-fluid': props.fluid
      }, _defineProperty(_class2, "text-".concat(props.textVariant), Boolean(props.textVariant)), _defineProperty(_class2, "bg-".concat(props.bgVariant), Boolean(props.bgVariant)), _defineProperty(_class2, "border-".concat(props.borderVariant), Boolean(props.borderVariant)), _defineProperty(_class2, "border", Boolean(props.borderVariant)), _class2)
    }), childNodes);
  }
};
exports.default = _default;

/***/ }),

/***/ "4c76":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__("b42e");

var _config = __webpack_require__("eb60");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NAME = 'BImg'; // Blank image with fill template

var BLANK_TEMPLATE = '<svg width="%{w}" height="%{h}" ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'viewBox="0 0 %{w} %{h}" preserveAspectRatio="none">' + '<rect width="100%" height="100%" style="fill:%{f};"></rect>' + '</svg>';

function makeBlankImgSrc(width, height, color) {
  var src = encodeURIComponent(BLANK_TEMPLATE.replace('%{w}', String(width)).replace('%{h}', String(height)).replace('%{f}', color));
  return "data:image/svg+xml;charset=UTF-8,".concat(src);
}

var props = {
  src: {
    type: String,
    default: null
  },
  alt: {
    type: String,
    default: null
  },
  width: {
    type: [Number, String],
    default: null
  },
  height: {
    type: [Number, String],
    default: null
  },
  block: {
    type: Boolean,
    default: false
  },
  fluid: {
    type: Boolean,
    default: false
  },
  fluidGrow: {
    // Gives fluid images class `w-100` to make them grow to fit container
    type: Boolean,
    default: false
  },
  rounded: {
    // rounded can be:
    //   false: no rounding of corners
    //   true: slightly rounded corners
    //   'top': top corners rounded
    //   'right': right corners rounded
    //   'bottom': bottom corners rounded
    //   'left': left corners rounded
    //   'circle': circle/oval
    //   '0': force rounding off
    type: [Boolean, String],
    default: false
  },
  thumbnail: {
    type: Boolean,
    default: false
  },
  left: {
    type: Boolean,
    default: false
  },
  right: {
    type: Boolean,
    default: false
  },
  center: {
    type: Boolean,
    default: false
  },
  blank: {
    type: Boolean,
    default: false
  },
  blankColor: {
    type: String,
    default: function _default() {
      return (0, _config.getComponentConfig)(NAME, 'blankColor');
    }
  } // @vue/component

};
exports.props = props;
var _default2 = {
  name: 'BImg',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var _class;

    var props = _ref.props,
        data = _ref.data;
    var src = props.src;
    var width = parseInt(props.width, 10) ? parseInt(props.width, 10) : null;
    var height = parseInt(props.height, 10) ? parseInt(props.height, 10) : null;
    var align = null;
    var block = props.block;

    if (props.blank) {
      if (!height && Boolean(width)) {
        height = width;
      } else if (!width && Boolean(height)) {
        width = height;
      }

      if (!width && !height) {
        width = 1;
        height = 1;
      } // Make a blank SVG image


      src = makeBlankImgSrc(width, height, props.blankColor || 'transparent');
    }

    if (props.left) {
      align = 'float-left';
    } else if (props.right) {
      align = 'float-right';
    } else if (props.center) {
      align = 'mx-auto';
      block = true;
    }

    return h('img', (0, _vueFunctionalDataMerge.mergeData)(data, {
      attrs: {
        src: src,
        alt: props.alt,
        width: width ? String(width) : null,
        height: height ? String(height) : null
      },
      class: (_class = {
        'img-thumbnail': props.thumbnail,
        'img-fluid': props.fluid || props.fluidGrow,
        'w-100': props.fluidGrow,
        rounded: props.rounded === '' || props.rounded === true
      }, _defineProperty(_class, "rounded-".concat(props.rounded), typeof props.rounded === 'string' && props.rounded !== ''), _defineProperty(_class, align, Boolean(align)), _defineProperty(_class, 'd-block', block), _class)
    }));
  }
};
exports.default = _default2;

/***/ }),

/***/ "4d00":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__("b42e");

var props = {
  tag: {
    type: String,
    default: 'ul'
  },
  fill: {
    type: Boolean,
    default: false
  },
  justified: {
    type: Boolean,
    default: false
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BNavbarNav',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'navbar-nav',
      class: {
        'nav-fill': props.fill,
        'nav-justified': props.justified
      }
    }), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "4d86":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = normalizeFields;

var _startcase = __webpack_require__("3098");

var _object = __webpack_require__("24e2");

var _array = __webpack_require__("bb2f");

var _constants = __webpack_require__("3ed8");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// private function to massage field entry into common object format
function processField(key, value) {
  var field = null;

  if (typeof value === 'string') {
    // Label shortcut
    field = {
      key: key,
      label: value
    };
  } else if (typeof value === 'function') {
    // Formatter shortcut
    field = {
      key: key,
      formatter: value
    };
  } else if (_typeof(value) === 'object') {
    field = _objectSpread({}, value);
    field.key = field.key || key;
  } else if (value !== false) {
    // Fallback to just key

    /* istanbul ignore next */
    field = {
      key: key
    };
  }

  return field;
} // We normalize fields into an array of objects
// [ { key:..., label:..., ...}, {...}, ..., {..}]


function normalizeFields(origFields, items) {
  var fields = [];

  if ((0, _array.isArray)(origFields)) {
    // Normalize array Form
    origFields.filter(function (f) {
      return f;
    }).forEach(function (f) {
      if (typeof f === 'string') {
        fields.push({
          key: f,
          label: (0, _startcase.default)(f)
        });
      } else if (_typeof(f) === 'object' && f.key && typeof f.key === 'string') {
        // Full object definition. We use assign so that we don't mutate the original
        fields.push(_objectSpread({}, f));
      } else if (_typeof(f) === 'object' && (0, _object.keys)(f).length === 1) {
        // Shortcut object (i.e. { 'foo_bar': 'This is Foo Bar' }
        var key = (0, _object.keys)(f)[0];
        var field = processField(key, f[key]);

        if (field) {
          fields.push(field);
        }
      }
    });
  } else if (origFields && _typeof(origFields) === 'object' && (0, _object.keys)(origFields).length > 0) {
    // Normalize object Form (deprecated)
    (0, _object.keys)(origFields).forEach(function (key) {
      var field = processField(key, origFields[key]);

      if (field) {
        fields.push(field);
      }
    });
  } // If no field provided, take a sample from first record (if exits)


  if (fields.length === 0 && (0, _array.isArray)(items) && items.length > 0) {
    var sample = items[0];
    (0, _object.keys)(sample).forEach(function (k) {
      if (!_constants.IGNORED_FIELD_KEYS[k]) {
        fields.push({
          key: k,
          label: (0, _startcase.default)(k)
        });
      }
    });
  } // Ensure we have a unique array of fields and that they have String labels


  var memo = {};
  return fields.filter(function (f) {
    if (!memo[f.key]) {
      memo[f.key] = true;
      f.label = typeof f.label === 'string' ? f.label : (0, _startcase.default)(f.key);
      return true;
    }

    return false;
  });
}

/***/ }),

/***/ "4e40":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.propsFactory = propsFactory;
exports.pickLinkProps = pickLinkProps;
exports.omitLinkProps = omitLinkProps;
exports.default = exports.props = void 0;

var _object = __webpack_require__("24e2");

var _array = __webpack_require__("bb2f");

var _router = __webpack_require__("185a");

var _vueFunctionalDataMerge = __webpack_require__("b42e");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * The Link component is used in many other BV components.
 * As such, sharing its props makes supporting all its features easier.
 * However, some components need to modify the defaults for their own purpose.
 * Prefer sharing a fresh copy of the props to ensure mutations
 * do not affect other component references to the props.
 *
 * https://github.com/vuejs/vue-router/blob/dev/src/components/link.js
 * @return {{}}
 */
function propsFactory() {
  return {
    href: {
      type: String,
      default: null
    },
    rel: {
      type: String,
      default: null
    },
    target: {
      type: String,
      default: '_self'
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // router-link specific props
    to: {
      type: [String, Object],
      default: null
    },
    append: {
      type: Boolean,
      default: false
    },
    replace: {
      type: Boolean,
      default: false
    },
    event: {
      type: [String, Array],
      default: 'click'
    },
    activeClass: {
      type: String // default: undefined

    },
    exact: {
      type: Boolean,
      default: false
    },
    exactActiveClass: {
      type: String // default: undefined

    },
    routerTag: {
      type: String,
      default: 'a'
    },
    // nuxt-link specific prop(s)
    noPrefetch: {
      type: Boolean,
      default: false
    }
  };
}

var props = propsFactory(); // Return a fresh copy of BLink props, containing only the specifeid prop(s)

exports.props = props;

function pickLinkProps(propsToPick) {
  var freshLinkProps = propsFactory(); // Normalize everything to array.

  propsToPick = (0, _array.concat)(propsToPick);
  return (0, _object.keys)(freshLinkProps).reduce(function (memo, prop) {
    if ((0, _array.arrayIncludes)(propsToPick, prop)) {
      memo[prop] = freshLinkProps[prop];
    }

    return memo;
  }, {});
} // Return a fresh copy of BLink props, keeping all but the specified omitting prop(s)


function omitLinkProps(propsToOmit) {
  var freshLinkProps = propsFactory(); // Normalize everything to array.

  propsToOmit = (0, _array.concat)(propsToOmit);
  return (0, _object.keys)(props).reduce(function (memo, prop) {
    if (!(0, _array.arrayIncludes)(propsToOmit, prop)) {
      memo[prop] = freshLinkProps[prop];
    }

    return memo;
  }, {});
}

function clickHandlerFactory(_ref) {
  var disabled = _ref.disabled,
      tag = _ref.tag,
      href = _ref.href,
      suppliedHandler = _ref.suppliedHandler,
      parent = _ref.parent;
  return function onClick(evt) {
    if (disabled && evt instanceof Event) {
      // Stop event from bubbling up.
      evt.stopPropagation(); // Kill the event loop attached to this specific EventTarget.

      evt.stopImmediatePropagation();
    } else {
      if ((0, _router.isRouterLink)(tag) && evt.target.__vue__) {
        // Router links do not emit instance 'click' events, so we
        // add in an $emit('click', evt) on it's vue instance
        evt.target.__vue__.$emit('click', evt);
      }

      if (typeof suppliedHandler === 'function') {
        suppliedHandler.apply(void 0, arguments);
      }

      parent.$root.$emit('clicked::link', evt);
    }

    if (!(0, _router.isRouterLink)(tag) && href === '#' || disabled) {
      // Stop scroll-to-top behavior or navigation on regular links
      // when href is just '#'
      evt.preventDefault();
    }
  };
} // @vue/component


var _default = {
  name: 'BLink',
  functional: true,
  props: propsFactory(),
  render: function render(h, _ref2) {
    var props = _ref2.props,
        data = _ref2.data,
        parent = _ref2.parent,
        children = _ref2.children;
    var tag = (0, _router.computeTag)(props, parent);
    var rel = (0, _router.computeRel)(props);
    var href = (0, _router.computeHref)(props, tag);
    var eventType = (0, _router.isRouterLink)(tag) ? 'nativeOn' : 'on';
    var suppliedHandler = (data[eventType] || {}).click;
    var handlers = {
      click: clickHandlerFactory({
        tag: tag,
        href: href,
        disabled: props.disabled,
        suppliedHandler: suppliedHandler,
        parent: parent
      })
    };
    var componentData = (0, _vueFunctionalDataMerge.mergeData)(data, {
      class: {
        active: props.active,
        disabled: props.disabled
      },
      attrs: {
        rel: rel,
        target: props.target,
        tabindex: props.disabled ? '-1' : data.attrs ? data.attrs.tabindex : null,
        'aria-disabled': props.disabled ? 'true' : null
      },
      props: _objectSpread({}, props, {
        tag: props.routerTag
      })
    }); // If href attribute exists on router-link (even undefined or null) it fails working on SSR
    // So we explicitly add it here if needed (i.e. if computeHref() is truthy)

    if (href) {
      componentData.attrs.href = href;
    } // We want to overwrite any click handler since our callback
    // will invoke the user supplied handler if !props.disabled


    componentData[eventType] = _objectSpread({}, componentData[eventType] || {}, handlers);
    return h(tag, componentData, children);
  }
};
exports.default = _default;

/***/ }),

/***/ "4fe1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// @vue/component
var _default = {
  model: {
    prop: 'checked',
    event: 'input'
  },
  props: {
    value: {// Value when checked
      // type: Object,
      // default: undefined
    },
    checked: {// This is the v-model
      // type: Object,
      // default: undefined
    },
    inline: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    button: {
      // Only applicable in standalone mode (non group)
      type: Boolean,
      default: false
    },
    buttonVariant: {
      // Only applicable when rendered with button style
      type: String,
      default: null
    },
    ariaLabel: {
      // Placed on the input if present.
      type: String,
      default: null
    }
  },
  data: function data() {
    return {
      localChecked: this.is_Group ? this.bvGroup.checked : this.checked,
      hasFocus: false
    };
  },
  computed: {
    computedLocalChecked: {
      get: function get() {
        return this.is_Group ? this.bvGroup.localChecked : this.localChecked;
      },
      set: function set(val) {
        if (this.is_Group) {
          this.bvGroup.localChecked = val;
        } else {
          this.localChecked = val;
        }
      }
    },
    is_Group: function is_Group() {
      // Is this check/radio a child of check-group or radio-group?
      return Boolean(this.bvGroup);
    },
    is_BtnMode: function is_BtnMode() {
      // Support button style in single input mode
      return this.is_Group ? this.bvGroup.buttons : this.button;
    },
    is_Plain: function is_Plain() {
      return this.is_BtnMode ? false : this.is_Group ? this.bvGroup.plain : this.plain;
    },
    is_Custom: function is_Custom() {
      return this.is_BtnMode ? false : !this.is_Plain;
    },
    is_Switch: function is_Switch() {
      // Custom switch styling (checkboxes only)
      return this.is_BtnMode || this.is_Radio || this.is_Plain ? false : this.is_Group ? this.bvGroup.switches : this.switch;
    },
    is_Inline: function is_Inline() {
      return this.is_Group ? this.bvGroup.inline : this.inline;
    },
    is_Disabled: function is_Disabled() {
      // Child can be disabled while parent isn't, but is always disabled if group is
      return this.is_Group ? this.bvGroup.disabled || this.disabled : this.disabled;
    },
    is_Required: function is_Required() {
      // Required only works when a name is provided for the input(s)
      // Child can only be required when parent is
      // Groups will always have a name (either user supplied or auto generated)
      return Boolean(this.get_Name && (this.is_Group ? this.bvGroup.required : this.required));
    },
    get_Name: function get_Name() {
      // Group name preferred over local name
      return (this.is_Group ? this.bvGroup.groupName : this.name) || null;
    },
    get_Form: function get_Form() {
      return (this.is_Group ? this.bvGroup.form : this.form) || null;
    },
    get_Size: function get_Size() {
      return (this.is_Group ? this.bvGroup.size : this.size) || '';
    },
    get_State: function get_State() {
      return this.is_Group ? this.bvGroup.computedState : this.computedState;
    },
    get_ButtonVariant: function get_ButtonVariant() {
      // Local variant preferred over group variant
      if (this.buttonVariant) {
        return this.buttonVariant;
      } else if (this.is_Group && this.bvGroup.buttonVariant) {
        return this.bvGroup.buttonVariant;
      } // default variant


      return 'secondary';
    },
    buttonClasses: function buttonClasses() {
      // Same for radio & check
      return ['btn', "btn-".concat(this.get_ButtonVariant), this.get_Size ? "btn-".concat(this.get_Size) : '', // 'disabled' class makes "button" look disabled
      this.is_Disabled ? 'disabled' : '', // 'active' class makes "button" look pressed
      this.is_Checked ? 'active' : '', // Focus class makes button look focused
      this.hasFocus ? 'focus' : ''];
    }
  },
  watch: {
    checked: function checked(newVal, oldVal) {
      this.computedLocalChecked = newVal;
    }
  },
  methods: {
    handleFocus: function handleFocus(evt) {
      // When in buttons mode, we need to add 'focus' class to label when input focused
      // As it is the hidden input which has actual focus
      if (evt.target) {
        if (evt.type === 'focus') {
          this.hasFocus = true;
        } else if (evt.type === 'blur') {
          this.hasFocus = false;
        }
      }
    },
    // Convenience methods for focusing the input
    focus: function focus() {
      if (!this.is_Disabled && this.$refs.input && this.$refs.input.focus) {
        this.$refs.input.focus();
      }
    },
    blur: function blur() {
      if (!this.is_Disabled && this.$refs.input && this.$refs.input.blur) {
        this.$refs.input.blur();
      }
    }
  },
  render: function render(h) {
    var defaultSlot = this.$slots.default; // Generate the input element

    var on = {
      change: this.handleChange
    };

    if (this.is_BtnMode) {
      // Handlers for focus styling when in button mode
      on.focus = on.blur = this.handleFocus;
    }

    var input = h('input', {
      ref: 'input',
      key: 'input',
      on: on,
      class: {
        'form-check-input': this.is_Plain,
        'custom-control-input': this.is_Custom,
        'is-valid': this.get_State === true && !this.is_BtnMode,
        'is-invalid': this.get_State === false && !this.is_BtnMode,
        // https://github.com/bootstrap-vue/bootstrap-vue/issues/2911
        'position-static': this.is_Plain && !defaultSlot
      },
      directives: [{
        name: 'model',
        rawName: 'v-model',
        value: this.computedLocalChecked,
        expression: 'computedLocalChecked'
      }],
      attrs: {
        id: this.safeId(),
        type: this.is_Radio ? 'radio' : 'checkbox',
        name: this.get_Name,
        form: this.get_Form,
        disabled: this.is_Disabled,
        required: this.is_Required,
        autocomplete: 'off',
        'aria-required': this.is_Required || null,
        'aria-label': this.ariaLabel || null
      },
      domProps: {
        value: this.value,
        checked: this.is_Checked
      }
    });

    if (this.is_BtnMode) {
      // Button mode
      var button = h('label', {
        class: this.buttonClasses
      }, [input, defaultSlot]);

      if (!this.is_Group) {
        // Standalone button mode, so wrap in 'btn-group-toggle'
        // and flag it as inline-block to mimic regular buttons
        button = h('div', {
          class: ['btn-group-toggle', 'd-inline-block']
        }, [button]);
      }

      return button;
    } else {
      // Not button mode
      var label = h(false); // If no label content in plain mode we dont render the label
      // https://github.com/bootstrap-vue/bootstrap-vue/issues/2911

      if (!(this.is_Plain && !defaultSlot)) {
        label = h('label', {
          class: {
            'form-check-label': this.is_Plain,
            'custom-control-label': this.is_Custom
          },
          attrs: {
            for: this.safeId()
          }
        }, defaultSlot);
      } // Wrap it in a div


      return h('div', {
        class: _defineProperty({
          'form-check': this.is_Plain,
          'form-check-inline': this.is_Plain && this.is_Inline,
          'custom-control': this.is_Custom,
          'custom-control-inline': this.is_Custom && this.is_Inline,
          'custom-checkbox': this.is_Custom && this.is_Check && !this.is_Switch,
          'custom-switch': this.is_Switch,
          'custom-radio': this.is_Custom && this.is_Radio
        }, "form-control-".concat(this.get_Size), Boolean(this.get_Size && !this.is_BtnMode))
      }, [input, label]);
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "50b2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _html = __webpack_require__("be11");

var _default = {
  props: {
    caption: {
      type: String,
      default: null
    },
    captionHtml: {
      type: String
    },
    captionTop: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    captionClasses: function captionClasses() {
      return {
        'b-table-caption-top': this.captionTop
      };
    },
    captionId: function captionId() {
      // Even though this.safeId looks like a method, it is a computed prop
      // that returns a new function if the underlying ID changes
      return this.isStacked ? this.safeId('_caption_') : null;
    }
  },
  methods: {
    renderCaption: function renderCaption() {
      var h = this.$createElement; // Build the caption

      var $captionSlot = this.normalizeSlot('table-caption', {});
      var $caption = h(false);

      if ($captionSlot || this.caption || this.captionHtml) {
        var data = {
          key: 'caption',
          class: this.captionClasses,
          attrs: {
            id: this.captionId
          }
        };

        if (!$captionSlot) {
          data.domProps = (0, _html.htmlOrText)(this.captionHtml, this.caption);
        }

        $caption = h('caption', data, [$captionSlot]);
      }

      return $caption;
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "5106":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _img = __webpack_require__("4c76");

var _id = __webpack_require__("eae0");

var _env = __webpack_require__("4565");

var _html = __webpack_require__("be11");

// @vue/component
var _default2 = {
  name: 'BCarouselSlide',
  components: {
    BImg: _img.default
  },
  mixins: [_id.default],
  inject: {
    bvCarousel: {
      default: function _default() {
        return {
          // Explicitly disable touch if not a child of carousel
          noTouch: true
        };
      }
    }
  },
  props: {
    imgSrc: {
      type: String // default: undefined

    },
    imgAlt: {
      type: String // default: undefined

    },
    imgWidth: {
      type: [Number, String] // default: undefined

    },
    imgHeight: {
      type: [Number, String] // default: undefined

    },
    imgBlank: {
      type: Boolean,
      default: false
    },
    imgBlankColor: {
      type: String,
      default: 'transparent'
    },
    contentVisibleUp: {
      type: String
    },
    contentTag: {
      type: String,
      default: 'div'
    },
    caption: {
      type: String
    },
    captionHtml: {
      type: String
    },
    captionTag: {
      type: String,
      default: 'h3'
    },
    text: {
      type: String
    },
    textHtml: {
      type: String
    },
    textTag: {
      type: String,
      default: 'p'
    },
    background: {
      type: String
    }
  },
  data: function data() {
    return {};
  },
  computed: {
    contentClasses: function contentClasses() {
      return [this.contentVisibleUp ? 'd-none' : '', this.contentVisibleUp ? "d-".concat(this.contentVisibleUp, "-block") : ''];
    },
    computedWidth: function computedWidth() {
      // Use local width, or try parent width
      return this.imgWidth || this.bvCarousel.imgWidth || null;
    },
    computedHeight: function computedHeight() {
      // Use local height, or try parent height
      return this.imgHeight || this.bvCarousel.imgHeight || null;
    }
  },
  render: function render(h) {
    var $slots = this.$slots;
    var noDrag = !this.bvCarousel.noTouch && _env.hasTouchSupport;
    var img = $slots.img;

    if (!img && (this.imgSrc || this.imgBlank)) {
      img = h('b-img', {
        props: {
          fluidGrow: true,
          block: true,
          src: this.imgSrc,
          blank: this.imgBlank,
          blankColor: this.imgBlankColor,
          width: this.computedWidth,
          height: this.computedHeight,
          alt: this.imgAlt
        },
        // Touch support event handler
        on: noDrag ? {
          dragstart: function dragstart(e) {
            /* istanbul ignore next: difficult to test in JSDOM */
            e.preventDefault();
          }
        } : {}
      });
    }

    if (!img) {
      img = h(false);
    }

    var content = h(this.contentTag, {
      staticClass: 'carousel-caption',
      class: this.contentClasses
    }, [this.caption || this.captionHtml ? h(this.captionTag, {
      domProps: (0, _html.htmlOrText)(this.captionHtml, this.caption)
    }) : h(false), this.text || this.textHtml ? h(this.textTag, {
      domProps: (0, _html.htmlOrText)(this.textHtml, this.text)
    }) : h(false), $slots.default]);
    return h('div', {
      staticClass: 'carousel-item',
      style: {
        background: this.background || this.bvCarousel.background || null
      },
      attrs: {
        id: this.safeId(),
        role: 'listitem'
      }
    }, [img, content]);
  }
};
exports.default = _default2;

/***/ }),

/***/ "5279":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _vueFunctionalDataMerge = __webpack_require__("b42e");

var _breadcrumbLink = __webpack_require__("12d3");

// @vue/component
var _default = {
  name: 'BBreadcrumbItem',
  functional: true,
  props: _breadcrumbLink.props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h('li', (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'breadcrumb-item',
      class: {
        active: props.active
      },
      attrs: {
        role: 'presentation'
      }
    }), [h(_breadcrumbLink.default, {
      props: props
    }, children)]);
  }
};
exports.default = _default;

/***/ }),

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "532a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _normalizeSlot2 = __webpack_require__("9de7");

var _array = __webpack_require__("bb2f");

var _default = {
  methods: {
    hasNormalizedSlot: function hasNormalizedSlot(name) {
      // Returns true if the either a $scopedSlot or $slot exists with the specified name
      return Boolean(this.$scopedSlots[name] || this.$slots[name]);
    },
    normalizeSlot: function normalizeSlot(name) {
      var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      // Returns an array of rendered vNodes if slot found.
      // Returns undefined if not found.
      var vNodes = (0, _normalizeSlot2.default)(name, scope, this.$scopedSlots, this.$slots);
      return vNodes ? (0, _array.concat)(vNodes) : vNodes;
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "5540":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/**
 * @param {string} str
 */
var upperFirst = function upperFirst(str) {
  if (typeof str !== 'string') {
    str = String(str);
  }

  str = str.trim();
  return str.charAt(0).toUpperCase() + str.slice(1);
};

var _default = upperFirst;
exports.default = _default;

/***/ }),

/***/ "5559":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("dbdb")('keys');
var uid = __webpack_require__("62a0");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "5764":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _popper = __webpack_require__("f0bd");

var _popover = __webpack_require__("daa8");

var _env = __webpack_require__("4565");

var _object = __webpack_require__("24e2");

var _warn = __webpack_require__("93e0");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Key which we use to store tooltip object on element
var BV_POPOVER = '__BV_PopOver__'; // Valid event triggers

var validTriggers = {
  focus: true,
  hover: true,
  click: true,
  blur: true // Build a PopOver config based on bindings (if any)
  // Arguments and modifiers take precedence over passed value config object

  /* istanbul ignore next: not easy to test */

};

var parseBindings = function parseBindings(bindings)
/* istanbul ignore next: not easy to test */
{
  // We start out with a blank config
  var config = {}; // Process bindings.value

  if (typeof bindings.value === 'string') {
    // Value is popover content (html optionally supported)
    config.content = bindings.value;
  } else if (typeof bindings.value === 'function') {
    // Content generator function
    config.content = bindings.value;
  } else if (_typeof(bindings.value) === 'object') {
    // Value is config object, so merge
    config = _objectSpread({}, config, bindings.value);
  } // If argument, assume element ID of container element


  if (bindings.arg) {
    // Element ID specified as arg
    // We must prepend '#' to become a CSS selector
    config.container = "#".concat(bindings.arg);
  } // Process modifiers


  (0, _object.keys)(bindings.modifiers).forEach(function (mod) {
    if (/^html$/.test(mod)) {
      // Title allows HTML
      config.html = true;
    } else if (/^nofade$/.test(mod)) {
      // no animation
      config.animation = false;
    } else if (/^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/.test(mod)) {
      // placement of popover
      config.placement = mod;
    } else if (/^(window|viewport)$/.test(mod)) {
      // Boundary of popover
      config.boundary = mod;
    } else if (/^d\d+$/.test(mod)) {
      // Delay value
      var delay = parseInt(mod.slice(1), 10) || 0;

      if (delay) {
        config.delay = delay;
      }
    } else if (/^o-?\d+$/.test(mod)) {
      // Offset value (negative allowed)
      var offset = parseInt(mod.slice(1), 10) || 0;

      if (offset) {
        config.offset = offset;
      }
    }
  }); // Special handling of event trigger modifiers trigger is
  // a space separated list

  var selectedTriggers = {}; // Parse current config object trigger

  var triggers = typeof config.trigger === 'string' ? config.trigger.trim().split(/\s+/) : [];
  triggers.forEach(function (trigger) {
    if (validTriggers[trigger]) {
      selectedTriggers[trigger] = true;
    }
  }); // Parse modifiers for triggers

  (0, _object.keys)(validTriggers).forEach(function (trigger) {
    if (bindings.modifiers[trigger]) {
      selectedTriggers[trigger] = true;
    }
  }); // Sanitize triggers

  config.trigger = (0, _object.keys)(selectedTriggers).join(' ');

  if (config.trigger === 'blur') {
    // Blur by itself is useless, so convert it to focus
    config.trigger = 'focus';
  }

  if (!config.trigger) {
    // Remove trigger config
    delete config.trigger;
  }

  return config;
}; // Add or update PopOver on our element


var applyPopover = function applyPopover(el, bindings, vnode) {
  if (!_env.inBrowser) {
    /* istanbul ignore next */
    return;
  } // Popper is required for PopOvers to work


  if (!_popper.default) {
    /* istanbul ignore next */
    (0, _warn.default)('v-b-popover: Popper.js is required for PopOvers to work');
    /* istanbul ignore next */

    return;
  }

  var config = parseBindings(bindings);

  if (el[BV_POPOVER]) {
    el[BV_POPOVER].updateConfig(config);
  } else {
    el[BV_POPOVER] = new _popover.default(el, config, vnode.context.$root);
  }
}; // Remove PopOver on our element


var removePopover = function removePopover(el) {
  if (el[BV_POPOVER]) {
    el[BV_POPOVER].destroy();
    el[BV_POPOVER] = null;
    delete el[BV_POPOVER];
  }
};
/*
 * Export our directive
 */


var _default = {
  bind: function bind(el, bindings, vnode) {
    applyPopover(el, bindings, vnode);
  },
  inserted: function inserted(el, bindings, vnode) {
    applyPopover(el, bindings, vnode);
  },
  update: function update(el, bindings, vnode)
  /* istanbul ignore next: not easy to test */
  {
    if (bindings.value !== bindings.oldValue) {
      applyPopover(el, bindings, vnode);
    }
  },
  componentUpdated: function componentUpdated(el, bindings, vnode)
  /* istanbul ignore next: not easy to test */
  {
    if (bindings.value !== bindings.oldValue) {
      applyPopover(el, bindings, vnode);
    }
  },
  unbind: function unbind(el) {
    removePopover(el);
  }
};
exports.default = _default;

/***/ }),

/***/ "584a":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "5a5e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__("b42e");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var props = {
  tag: {
    type: String,
    default: 'div'
  },
  flush: {
    type: Boolean,
    default: false
  },
  horizontal: {
    type: [Boolean, String],
    default: false
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BListGroup',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var horizontal = props.horizontal === '' ? true : props.horizontal;
    horizontal = props.flush ? false : horizontal;
    var componentData = {
      staticClass: 'list-group',
      class: _defineProperty({
        'list-group-flush': props.flush,
        'list-group-horizontal': horizontal === true
      }, "list-group-horizontal-".concat(horizontal), typeof horizontal === 'string')
    };
    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, componentData), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "5ac8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__("b42e");

var _pluckProps = __webpack_require__("9c97");

var _array = __webpack_require__("bb2f");

var _link = __webpack_require__("4e40");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var actionTags = ['a', 'router-link', 'button', 'b-link'];
var linkProps = (0, _link.propsFactory)();
delete linkProps.href.default;
delete linkProps.to.default;

var props = _objectSpread({
  tag: {
    type: String,
    default: 'div'
  },
  action: {
    type: Boolean,
    default: null
  },
  button: {
    type: Boolean,
    default: null
  },
  variant: {
    type: String,
    default: null
  }
}, linkProps); // @vue/component


exports.props = props;
var _default = {
  name: 'BListGroupItem',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var _class;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var tag = props.button ? 'button' : !props.href && !props.to ? props.tag : _link.default;
    var isAction = Boolean(props.href || props.to || props.action || props.button || (0, _array.arrayIncludes)(actionTags, props.tag));
    var attrs = {};
    var itemProps = {};

    if (tag === 'button') {
      if (!data.attrs || !data.attrs.type) {
        // Add a type for button is one not provided in passed attributes
        attrs.type = 'button';
      }

      if (props.disabled) {
        // Set disabled attribute if button and disabled
        attrs.disabled = true;
      }
    } else {
      itemProps = (0, _pluckProps.default)(linkProps, props);
    }

    var componentData = {
      attrs: attrs,
      props: itemProps,
      staticClass: 'list-group-item',
      class: (_class = {}, _defineProperty(_class, "list-group-item-".concat(props.variant), Boolean(props.variant)), _defineProperty(_class, 'list-group-item-action', isAction), _defineProperty(_class, "active", props.active), _defineProperty(_class, "disabled", props.disabled), _class)
    };
    return h(tag, (0, _vueFunctionalDataMerge.mergeData)(data, componentData), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "5b4e":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("36c3");
var toLength = __webpack_require__("b447");
var toAbsoluteIndex = __webpack_require__("0fc9");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "5c02":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _html = __webpack_require__("be11");

// @vue/component
var _default = {
  model: {
    prop: 'checked',
    event: 'input'
  },
  props: {
    validated: {
      type: Boolean,
      default: false
    },
    ariaInvalid: {
      type: [Boolean, String],
      default: false
    },
    stacked: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    buttons: {
      // Render as button style
      type: Boolean,
      default: false
    },
    buttonVariant: {
      // Only applicable when rendered with button style
      type: String,
      default: 'secondary'
    }
  },
  computed: {
    inline: function inline() {
      return !this.stacked;
    },
    groupName: function groupName() {
      // Checks/Radios tied to the same model must have the same name,
      // especially for ARIA accessibility.
      return this.name || this.safeId();
    },
    groupClasses: function groupClasses() {
      if (this.buttons) {
        return ['btn-group-toggle', this.inline ? 'btn-group' : 'btn-group-vertical', this.size ? "btn-group-".concat(this.size) : '', this.validated ? "was-validated" : ''];
      }

      return [this.validated ? "was-validated" : ''];
    },
    computedAriaInvalid: function computedAriaInvalid() {
      var ariaInvalid = this.ariaInvalid;

      if (ariaInvalid === true || ariaInvalid === 'true' || ariaInvalid === '') {
        return 'true';
      }

      return this.computedState === false ? 'true' : null;
    }
  },
  watch: {
    checked: function checked(newVal, oldVal) {
      this.localChecked = newVal;
    },
    localChecked: function localChecked(newVal, oldVal) {
      this.$emit('input', newVal);
    }
  },
  render: function render(h) {
    var _this = this;

    var $slots = this.$slots;
    var inputs = this.formOptions.map(function (option, idx) {
      var uid = "_BV_option_".concat(idx, "_");
      return h(_this.is_RadioGroup ? 'b-form-radio' : 'b-form-checkbox', {
        key: uid,
        props: {
          id: _this.safeId(uid),
          value: option.value,
          // Individual radios or checks can be disabled in a group
          disabled: option.disabled || false // We don't need to include these, since the input's will know they are inside here
          // name: this.groupName,
          // form: this.form || null,
          // required: Boolean(this.name && this.required)

        }
      }, [h('span', {
        domProps: (0, _html.htmlOrText)(option.html, option.text)
      })]);
    });
    return h('div', {
      class: this.groupClasses,
      attrs: {
        id: this.safeId(),
        role: this.is_RadioGroup ? 'radiogroup' : 'group',
        // Tabindex to allow group to be focused if needed
        tabindex: '-1',
        'aria-required': this.required ? 'true' : null,
        'aria-invalid': this.computedAriaInvalid
      }
    }, [$slots.first, inputs, $slots.default]);
  }
};
exports.default = _default;

/***/ }),

/***/ "5c3f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _buttonToolbar = __webpack_require__("bb0c");

var _plugins = __webpack_require__("0a8d");

var components = {
  BButtonToolbar: _buttonToolbar.default,
  BBtnToolbar: _buttonToolbar.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var ctx = __webpack_require__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "5d69":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__("b42e");

var _array = __webpack_require__("bb2f");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var COMMON_ALIGNMENT = ['start', 'end', 'center'];
var props = {
  tag: {
    type: String,
    default: 'div'
  },
  noGutters: {
    type: Boolean,
    default: false
  },
  alignV: {
    type: String,
    default: null,
    validator: function validator(str) {
      return (0, _array.arrayIncludes)(COMMON_ALIGNMENT.concat(['baseline', 'stretch']), str);
    }
  },
  alignH: {
    type: String,
    default: null,
    validator: function validator(str) {
      return (0, _array.arrayIncludes)(COMMON_ALIGNMENT.concat(['between', 'around']), str);
    }
  },
  alignContent: {
    type: String,
    default: null,
    validator: function validator(str) {
      return (0, _array.arrayIncludes)(COMMON_ALIGNMENT.concat(['between', 'around', 'stretch']), str);
    }
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BRow',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var _class;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'row',
      class: (_class = {
        'no-gutters': props.noGutters
      }, _defineProperty(_class, "align-items-".concat(props.alignV), props.alignV), _defineProperty(_class, "justify-content-".concat(props.alignH), props.alignH), _defineProperty(_class, "align-content-".concat(props.alignContent), props.alignContent), _class)
    }), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "5dbc":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var setPrototypeOf = __webpack_require__("8b97").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "5df9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var props = {
  active: {
    type: Boolean,
    default: false
  },
  activeClass: {
    type: String,
    default: 'active'
  },
  disabled: {
    type: Boolean,
    default: false
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BDropdownItemButton',
  inject: {
    bvDropdown: {
      default: null
    }
  },
  props: props,
  methods: {
    closeDropdown: function closeDropdown() {
      if (this.bvDropdown) {
        this.bvDropdown.hide(true);
      }
    },
    onClick: function onClick(evt) {
      this.$emit('click', evt);
      this.closeDropdown();
    }
  },
  render: function render(h) {
    return h('button', {
      staticClass: 'dropdown-item',
      class: _defineProperty({}, this.activeClass, this.active),
      attrs: {
        role: 'menuitem',
        type: 'button',
        disabled: this.disabled
      },
      on: {
        click: this.onClick
      }
    }, this.$slots.default);
  }
};
exports.default = _default;

/***/ }),

/***/ "5e8f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _formOptions = __webpack_require__("461c");

var _html = __webpack_require__("be11");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// @vue/component
var _default = {
  name: 'BFormDatalist',
  mixins: [_formOptions.default],
  props: {
    id: {
      type: String,
      default: null,
      required: true
    }
  },
  render: function render(h) {
    var options = this.formOptions.map(function (option, index) {
      return h('option', {
        key: "option_".concat(index, "_opt"),
        attrs: {
          disabled: option.disabled
        },
        domProps: _objectSpread({}, (0, _html.htmlOrText)(option.html, option.text), {
          value: option.value
        })
      });
    });
    return h('datalist', {
      attrs: {
        id: this.id
      }
    }, [options, this.$slots.default]);
  }
};
exports.default = _default;

/***/ }),

/***/ "5f07":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
// @vue/component
var _default = {
  props: {
    name: {
      type: String // default: undefined

    },
    id: {
      type: String // default: undefined

    },
    disabled: {
      type: Boolean
    },
    required: {
      type: Boolean,
      default: false
    },
    form: {
      type: String,
      default: null
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "5f27":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "600b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _vueFunctionalDataMerge = __webpack_require__("b42e");

var _config = __webpack_require__("eb60");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NAME = 'BButtonClose';
var props = {
  disabled: {
    type: Boolean,
    default: false
  },
  ariaLabel: {
    type: String,
    default: function _default() {
      return (0, _config.getComponentConfig)(NAME, 'ariaLabel');
    }
  },
  textVariant: {
    type: String,
    default: function _default() {
      return (0, _config.getComponentConfig)(NAME, 'textVariant');
    }
  } // @vue/component

};
var _default2 = {
  name: NAME,
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        listeners = _ref.listeners,
        slots = _ref.slots;
    var componentData = {
      staticClass: 'close',
      class: _defineProperty({}, "text-".concat(props.textVariant), props.textVariant),
      attrs: {
        type: 'button',
        disabled: props.disabled,
        'aria-label': props.ariaLabel ? String(props.ariaLabel) : null
      },
      on: {
        click: function click(e) {
          // Ensure click on button HTML content is also disabled

          /* istanbul ignore if: bug in JSDOM still emits click on inner element */
          if (props.disabled && e instanceof Event) {
            e.stopPropagation();
            e.preventDefault();
          }
        }
      } // Careful not to override the default slot with innerHTML

    };

    if (!slots().default) {
      componentData.domProps = {
        innerHTML: '&times;'
      };
    }

    return h('button', (0, _vueFunctionalDataMerge.mergeData)(data, componentData), slots().default);
  }
};
exports.default = _default2;

/***/ }),

/***/ "613b":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5537")('keys');
var uid = __webpack_require__("ca5a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "61e0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5f27");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "621e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var _default = {
  methods: {
    renderTopRow: function renderTopRow() {
      var h = this.$createElement; // Add static Top Row slot (hidden in visibly stacked mode as we can't control the data-label)
      // If in always stacked mode, we don't bother rendering the row

      if (!this.hasNormalizedSlot('top-row') || this.isStacked === true) {
        return h(false);
      }

      var fields = this.computedFields;
      return h('tr', {
        key: 'top-row',
        staticClass: 'b-table-top-row',
        class: [typeof this.tbodyTrClass === 'function' ? this.tbodyTrClass(null, 'row-top') : this.tbodyTrClass],
        attrs: {
          role: 'row'
        }
      }, [this.normalizeSlot('top-row', {
        columns: fields.length,
        fields: fields
      })]);
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "626a":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "62a0":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "63b6":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e53d");
var core = __webpack_require__("584a");
var ctx = __webpack_require__("d864");
var hide = __webpack_require__("35e8");
var has = __webpack_require__("07e3");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "6423":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _nav = __webpack_require__("92e4");

var _navItem = __webpack_require__("eee9");

var _navText = __webpack_require__("e599");

var _navForm = __webpack_require__("a07b");

var _navItemDropdown = __webpack_require__("485d");

var _dropdown = __webpack_require__("c7b9");

var _plugins = __webpack_require__("0a8d");

var components = {
  BNav: _nav.default,
  BNavItem: _navItem.default,
  BNavText: _navText.default,
  BNavForm: _navForm.default,
  BNavItemDropdown: _navItemDropdown.default,
  BNavItemDd: _navItemDropdown.default,
  BNavDropdown: _navItemDropdown.default,
  BNavDd: _navItemDropdown.default
};
var plugins = {
  DropdownPlugin: _dropdown.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components,
    plugins: plugins
  })
};
exports.default = _default;

/***/ }),

/***/ "64bb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _object = __webpack_require__("24e2");

var memoize = function memoize(fn) {
  var cache = (0, _object.create)(null);
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var argsKey = JSON.stringify(args);
    return cache[argsKey] = cache[argsKey] || fn.apply(null, args);
  };
};

var _default = memoize;
exports.default = _default;

/***/ }),

/***/ "6780":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _vueFunctionalDataMerge = __webpack_require__("b42e");

var _inputGroupAddon = __webpack_require__("9d25");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// @vue/component
var _default = {
  name: 'BInputGroupAppend',
  functional: true,
  props: _inputGroupAddon.commonProps,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    // pass all our props/attrs down to child, and set`append` to true
    return h(_inputGroupAddon.default, (0, _vueFunctionalDataMerge.mergeData)(data, {
      props: _objectSpread({}, props, {
        append: true
      })
    }), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "679b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _id = __webpack_require__("eae0");

var _form = __webpack_require__("5f07");

var _formOptions = __webpack_require__("461c");

var _formRadioCheckGroup = __webpack_require__("5c02");

var _formSize = __webpack_require__("6e1b");

var _formState = __webpack_require__("41fb");

var _formRadio = __webpack_require__("2c38");

// @vue/component
var _default = {
  name: 'BFormRadioGroup',
  components: {
    BFormRadio: _formRadio.default
  },
  mixins: [_id.default, _form.default, _formRadioCheckGroup.default, // Includes render function
  _formOptions.default, _formSize.default, _formState.default],
  provide: function provide() {
    return {
      bvRadioGroup: this
    };
  },
  props: {
    checked: {
      type: [String, Object, Number, Boolean],
      default: null
    }
  },
  data: function data() {
    return {
      localChecked: this.checked
    };
  },
  computed: {
    is_RadioGroup: function is_RadioGroup() {
      return true;
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "6821":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("626a");
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6a0e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var _default = {
  methods: {
    renderColgroup: function renderColgroup() {
      var h = this.$createElement;
      var fields = this.computedFields;
      var $colgroup = h(false);

      if (this.hasNormalizedSlot('table-colgroup')) {
        $colgroup = h('colgroup', {
          key: 'colgroup'
        }, [this.normalizeSlot('table-colgroup', {
          columns: fields.length,
          fields: fields
        })]);
      }

      return $colgroup;
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "6b4c":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "6def":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _breadcrumb = __webpack_require__("f4fc");

var _breadcrumbItem = __webpack_require__("5279");

var _breadcrumbLink = __webpack_require__("12d3");

var _plugins = __webpack_require__("0a8d");

var components = {
  BBreadcrumb: _breadcrumb.default,
  BBreadcrumbItem: _breadcrumbItem.default,
  BBreadcrumbLink: _breadcrumbLink.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "6e1b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
// @vue/component
var _default = {
  props: {
    size: {
      type: String,
      default: null
    }
  },
  computed: {
    sizeFormClass: function sizeFormClass() {
      return [this.size ? "form-control-".concat(this.size) : null];
    },
    sizeBtnClass: function sizeBtnClass()
    /* istanbul ignore next: don't think this is used */
    {
      return [this.size ? "btn-".concat(this.size) : null];
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "6f77":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__("b42e");

var _prefixPropName = __webpack_require__("e109");

var _copyProps = __webpack_require__("0942");

var _html = __webpack_require__("be11");

var _cardMixin = __webpack_require__("45f0");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var props = _objectSpread({}, (0, _copyProps.default)(_cardMixin.default.props, _prefixPropName.default.bind(null, 'footer')), {
  footer: {
    type: String,
    default: null
  },
  footerHtml: {
    type: String,
    default: null
  },
  footerClass: {
    type: [String, Object, Array],
    default: null
  } // @vue/component

});

exports.props = props;
var _default = {
  name: 'BCardFooter',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var _ref2;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.footerTag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'card-footer',
      class: [props.footerClass, (_ref2 = {}, _defineProperty(_ref2, "bg-".concat(props.footerBgVariant), Boolean(props.footerBgVariant)), _defineProperty(_ref2, "border-".concat(props.footerBorderVariant), Boolean(props.footerBorderVariant)), _defineProperty(_ref2, "text-".concat(props.footerTextVariant), Boolean(props.footerTextVariant)), _ref2)]
    }), children || [h('div', {
      domProps: (0, _html.htmlOrText)(props.footerHtml, props.footer)
    })]);
  }
};
exports.default = _default;

/***/ }),

/***/ "711a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var _default = {
  props: {
    footClone: {
      type: Boolean,
      default: false
    },
    footVariant: {
      type: String,
      default: ''
    },
    tfootClass: {
      type: [String, Array, Object],
      default: null
    },
    tfootTrClass: {
      type: [String, Array, Object],
      default: null
    }
  },
  computed: {
    footClasses: function footClasses() {
      var variant = this.footVariant || this.headVariant || null;
      return [variant ? 'thead-' + variant : '', this.tfootClass];
    }
  },
  methods: {
    renderTfoot: function renderTfoot() {
      var h = this.$createElement; // Passing true to renderThead will make it render a tfoot

      return this.footClone ? this.renderThead(true) : h(false);
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "788f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _dom = __webpack_require__("1611");

// @vue/component
var _default = {
  data: function data() {
    return {
      listenForClickOut: false
    };
  },
  watch: {
    listenForClickOut: function listenForClickOut(newValue, oldValue) {
      if (newValue !== oldValue) {
        (0, _dom.eventOff)(this.clickOutElement, this.clickOutEventName, this._clickOutHandler, false);

        if (newValue) {
          (0, _dom.eventOn)(this.clickOutElement, this.clickOutEventName, this._clickOutHandler, false);
        }
      }
    }
  },
  beforeCreate: function beforeCreate() {
    // Declare non-reactive properties
    this.clickOutElement = null;
    this.clickOutEventName = null;
  },
  mounted: function mounted() {
    if (!this.clickOutElement) {
      this.clickOutElement = document;
    }

    if (!this.clickOutEventName) {
      this.clickOutEventName = 'ontouchstart' in document.documentElement ? 'touchstart' : 'click';
    }

    if (this.listenForClickOut) {
      (0, _dom.eventOn)(this.clickOutElement, this.clickOutEventName, this._clickOutHandler, false);
    }
  },
  beforeDestroy: function beforeDestroy()
  /* istanbul ignore next */
  {
    (0, _dom.eventOff)(this.clickOutElement, this.clickOutEventName, this._clickOutHandler, false);
  },
  methods: {
    isClickOut: function isClickOut(evt) {
      return !(0, _dom.contains)(this.$el, evt.target);
    },
    _clickOutHandler: function _clickOutHandler(evt) {
      if (this.clickOutHandler && this.isClickOut(evt)) {
        this.clickOutHandler(evt);
      }
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "78b7":
/***/ (function(module, exports) {

/**
 * Adapted from https://github.com/alice/modality
 * Version: 1.0.2
 */
document.addEventListener('DOMContentLoaded', () => {
    let hadKeyboardEvent = false;
    const keyboardModalityWhitelist = [
        'input:not([type])',
        'input[type=text]',
        'input[type=number]',
        'input[type=date]',
        'input[type=time]',
        'input[type=datetime]',
        'textarea',
        '[role=textbox]',
        '[supports-modality=keyboard]'
    ].join(',');

    let isHandlingKeyboardThrottle;

    const matcher = (() => {
        const el = document.body;

        if (el.matchesSelector) {
            return el.matchesSelector;
        }

        if (el.webkitMatchesSelector) {
            return el.webkitMatchesSelector;
        }

        if (el.mozMatchesSelector) {
            return el.mozMatchesSelector;
        }

        if (el.msMatchesSelector) {
            return el.msMatchesSelector;
        }

        console.error('Couldn\'t find any matchesSelector method on document.body.');
    })();

    const disableFocusRingByDefault = function () {
        const css = 'body:not([modality=keyboard]) :focus { outline: none; }';
        const head = document.head || document.getElementsByTagName('head')[0];
        const style = document.createElement('style');

        style.type = 'text/css';
        style.id = 'disable-focus-ring';

        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }

        head.insertBefore(style, head.firstChild);
    };

    const focusTriggersKeyboardModality = function (el) {
        let triggers = false;

        if (matcher) {
            triggers = matcher.call(el, keyboardModalityWhitelist) &&
                matcher.call(el, ':not([readonly])');
        }

        return triggers;
    };

    disableFocusRingByDefault();

    document.body.addEventListener('keydown', () => {
        hadKeyboardEvent = true;

        if (isHandlingKeyboardThrottle) {
            clearTimeout(isHandlingKeyboardThrottle);
        }

        isHandlingKeyboardThrottle = setTimeout(() => {
            hadKeyboardEvent = false;
        }, 100);
    }, true);

    document.body.addEventListener('focus', e => {
        if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
            document.body.setAttribute('modality', 'keyboard');
        }
    }, true);

    document.body.addEventListener('blur', () => {
        document.body.removeAttribute('modality');
    }, true);
});


/***/ }),

/***/ "794b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("8e60") && !__webpack_require__("294c")(function () {
  return Object.defineProperty(__webpack_require__("1ec9")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "79aa":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7a5c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _formGroup = __webpack_require__("d239");

var _plugins = __webpack_require__("0a8d");

var components = {
  BFormGroup: _formGroup.default,
  BFormFieldset: _formGroup.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "7a5e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__("b42e");

var props = {
  tag: {
    type: String,
    default: 'div'
  }
};
exports.props = props;
var _default = {
  name: 'BMediaBody',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'media-body'
    }), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "7b38":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _alert = __webpack_require__("9e25");

exports.Alert = _alert.default;

var _badge = __webpack_require__("7cb0");

exports.Badge = _badge.default;

var _breadcrumb = __webpack_require__("6def");

exports.Breadcrumb = _breadcrumb.default;

var _button = __webpack_require__("0866");

exports.Button = _button.default;

var _buttonGroup = __webpack_require__("8b96");

exports.ButtonGroup = _buttonGroup.default;

var _buttonToolbar = __webpack_require__("5c3f");

exports.ButtonToolbar = _buttonToolbar.default;

var _inputGroup = __webpack_require__("00df");

exports.InputGroup = _inputGroup.default;

var _card = __webpack_require__("c4bd");

exports.Card = _card.default;

var _carousel = __webpack_require__("a88f");

exports.Carousel = _carousel.default;

var _layout = __webpack_require__("9d37");

exports.Layout = _layout.default;

var _collapse = __webpack_require__("f3fa");

exports.Collapse = _collapse.default;

var _dropdown = __webpack_require__("c7b9");

exports.Dropdown = _dropdown.default;

var _embed = __webpack_require__("32ec");

exports.Embed = _embed.default;

var _form = __webpack_require__("7d54");

exports.Form = _form.default;

var _formGroup = __webpack_require__("7a5c");

exports.FormGroup = _formGroup.default;

var _formCheckbox = __webpack_require__("efe3");

exports.FormCheckbox = _formCheckbox.default;

var _formRadio = __webpack_require__("3110");

exports.FormRadio = _formRadio.default;

var _formInput = __webpack_require__("b407");

exports.FormInput = _formInput.default;

var _formTextarea = __webpack_require__("a05c");

exports.FormTextarea = _formTextarea.default;

var _formFile = __webpack_require__("a60a");

exports.FormFile = _formFile.default;

var _formSelect = __webpack_require__("8b08");

exports.FormSelect = _formSelect.default;

var _image = __webpack_require__("2635");

exports.Image = _image.default;

var _jumbotron = __webpack_require__("1bee");

exports.Jumbotron = _jumbotron.default;

var _link = __webpack_require__("3b34");

exports.Link = _link.default;

var _listGroup = __webpack_require__("057b");

exports.ListGroup = _listGroup.default;

var _media = __webpack_require__("d71d");

exports.Media = _media.default;

var _modal = __webpack_require__("256b");

exports.Modal = _modal.default;

var _nav = __webpack_require__("6423");

exports.Nav = _nav.default;

var _navbar = __webpack_require__("edd0");

exports.Navbar = _navbar.default;

var _pagination = __webpack_require__("887d");

exports.Pagination = _pagination.default;

var _paginationNav = __webpack_require__("f8d0");

exports.PaginationNav = _paginationNav.default;

var _popover = __webpack_require__("f38f");

exports.Popover = _popover.default;

var _progress = __webpack_require__("b528");

exports.Progress = _progress.default;

var _spinner = __webpack_require__("076e");

exports.Spinner = _spinner.default;

var _table = __webpack_require__("b740");

exports.Table = _table.default;

var _tabs = __webpack_require__("1018");

exports.Tabs = _tabs.default;

var _tooltip = __webpack_require__("249f");

exports.Tooltip = _tooltip.default;

/***/ }),

/***/ "7b63":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__("b42e");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var props = {
  tag: {
    type: String,
    default: 'div'
  },
  verticalAlign: {
    type: String,
    default: 'top'
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BMediaAside',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'd-flex',
      class: _defineProperty({}, "align-self-".concat(props.verticalAlign), props.verticalAlign)
    }), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "7cb0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _badge = __webpack_require__("211d");

var _plugins = __webpack_require__("0a8d");

var components = {
  BBadge: _badge.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "7d02":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _vueFunctionalDataMerge = __webpack_require__("b42e");

var _memoize = __webpack_require__("64bb");

var _suffixPropName = __webpack_require__("19fe");

var _object = __webpack_require__("24e2");

var _array = __webpack_require__("bb2f");

var _config = __webpack_require__("eb60");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Generates a prop object with a type of
 * [Boolean, String, Number]
 */
function boolStrNum() {
  return {
    type: [Boolean, String, Number],
    default: false
  };
}
/**
 * Generates a prop object with a type of
 * [String, Number]
 */


function strNum() {
  return {
    type: [String, Number],
    default: null
  };
} // Async (lazy) component
// So that we can generate breakpoint specific props once the config has been updated.
//
// See: https://vuejs.org/v2/guide/components-dynamic-async.html#Async-Components


var _default = function _default(resolve, reject) {
  // Grab the breakpoints from the config (exclude the '' (xs) breakpoint)
  var breakpoints = (0, _config.getBreakpointsUp)().filter(Boolean); // Memoized function for better performance on generating class names

  var computeBkPtClass = (0, _memoize.default)(function computeBkPt(type, breakpoint, val) {
    var className = type;

    if (val === false || val === null || val === undefined) {
      return undefined;
    }

    if (breakpoint) {
      className += "-".concat(breakpoint);
    } // Handling the boolean style prop when accepting [Boolean, String, Number]
    // means Vue will not convert <b-col sm></b-col> to sm: true for us.
    // Since the default is false, an empty string indicates the prop's presence.


    if (type === 'col' && (val === '' || val === true)) {
      // .col-md
      return className.toLowerCase();
    } // .order-md-6


    className += "-".concat(val);
    return className.toLowerCase();
  }); // Supports classes like: .col-sm, .col-md-6, .col-lg-auto

  var breakpointCol = breakpoints.reduce(function (propMap, breakpoint) {
    if (breakpoint) {
      // We filter out the '' breakpoint (xs), as making a prop name ''
      // would not work. The `cols` prop is used for `xs`
      propMap[breakpoint] = boolStrNum();
    }

    return propMap;
  }, (0, _object.create)(null)); // Supports classes like: .offset-md-1, .offset-lg-12

  var breakpointOffset = breakpoints.reduce(function (propMap, breakpoint) {
    propMap[(0, _suffixPropName.default)(breakpoint, 'offset')] = strNum();
    return propMap;
  }, (0, _object.create)(null)); // Supports classes like: .order-md-1, .order-lg-12

  var breakpointOrder = breakpoints.reduce(function (propMap, breakpoint) {
    propMap[(0, _suffixPropName.default)(breakpoint, 'order')] = strNum();
    return propMap;
  }, (0, _object.create)(null)); // For loop doesn't need to check hasOwnProperty
  // when using an object created from null

  var breakpointPropMap = (0, _object.assign)((0, _object.create)(null), {
    col: (0, _object.keys)(breakpointCol),
    offset: (0, _object.keys)(breakpointOffset),
    order: (0, _object.keys)(breakpointOrder)
  });
  /**
   * We need ".col" to default in when no other props are passed,
   * but always render when col=true.
   */
  // @vue/component

  var BCol = {
    name: 'BCol',
    functional: true,
    props: _objectSpread({
      // Generic flexbox .col (xs)
      col: {
        type: Boolean,
        default: false
      },
      // .col-[1-12]|auto  (xs)
      cols: strNum()
    }, breakpointCol, {
      offset: strNum()
    }, breakpointOffset, {
      order: strNum()
    }, breakpointOrder, {
      // Flex alignment
      alignSelf: {
        type: String,
        default: null,
        validator: function validator(str) {
          return (0, _array.arrayIncludes)(['auto', 'start', 'end', 'center', 'baseline', 'stretch'], str);
        }
      },
      tag: {
        type: String,
        default: 'div'
      }
    }),
    render: function render(h, _ref) {
      var _classList$push;

      var props = _ref.props,
          data = _ref.data,
          children = _ref.children;
      var classList = []; // Loop through `col`, `offset`, `order` breakpoint props

      for (var type in breakpointPropMap) {
        // Returns colSm, offset, offsetSm, orderMd, etc.
        var _keys = breakpointPropMap[type];

        for (var i = 0; i < _keys.length; i++) {
          // computeBkPt(col, colSm => Sm, value=[String, Number, Boolean])
          var c = computeBkPtClass(type, _keys[i].replace(type, ''), props[_keys[i]]); // If a class is returned, push it onto the array.

          if (c) {
            classList.push(c);
          }
        }
      }

      classList.push((_classList$push = {
        // Default to .col if no other classes generated nor `cols` specified.
        col: props.col || classList.length === 0 && !props.cols
      }, _defineProperty(_classList$push, "col-".concat(props.cols), props.cols), _defineProperty(_classList$push, "offset-".concat(props.offset), props.offset), _defineProperty(_classList$push, "order-".concat(props.order), props.order), _defineProperty(_classList$push, "align-self-".concat(props.alignSelf), props.alignSelf), _classList$push));
      return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
        class: classList
      }), children);
    }
  }; // Return the config on demand

  resolve(BCol);
};

exports.default = _default;

/***/ }),

/***/ "7d54":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _form = __webpack_require__("0596");

var _formDatalist = __webpack_require__("5e8f");

var _formRow = __webpack_require__("a198");

var _formText = __webpack_require__("0903");

var _formInvalidFeedback = __webpack_require__("ebd1");

var _formValidFeedback = __webpack_require__("ad48");

var _plugins = __webpack_require__("0a8d");

var components = {
  BForm: _form.default,
  BFormDatalist: _formDatalist.default,
  BDatalist: _formDatalist.default,
  BFormRow: _formRow.default,
  BFormText: _formText.default,
  BFormInvalidFeedback: _formInvalidFeedback.default,
  BFormFeedback: _formInvalidFeedback.default,
  BFormValidFeedback: _formValidFeedback.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "7f20":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("86cc").f;
var has = __webpack_require__("69a8");
var TAG = __webpack_require__("2b4c")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "7f6b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var _default = {
  props: {
    busy: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      localBusy: false
    };
  },
  computed: {
    computedBusy: function computedBusy() {
      return this.busy || this.localBusy;
    }
  },
  watch: {
    localBusy: function localBusy(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.$emit('update:busy', newVal);
      }
    }
  },
  methods: {
    // Event handler helper
    stopIfBusy: function stopIfBusy(evt) {
      if (this.computedBusy) {
        // If table is busy (via provider) then don't propagate
        evt.preventDefault();
        evt.stopPropagation();
        return true;
      }

      return false;
    },
    // Renter the busy indecator or return null if not busy
    renderBusy: function renderBusy() {
      var h = this.$createElement; // Return a busy indicator row, or null if not busy

      if (this.computedBusy && this.hasNormalizedSlot('table-busy')) {
        // Show the busy slot
        var trAttrs = {
          role: this.isStacked ? 'row' : null
        };
        var tdAttrs = {
          colspan: String(this.computedFields.length),
          role: this.isStacked ? 'cell' : null
        };
        return h('tr', {
          key: 'table-busy-slot',
          staticClass: 'b-table-busy-slot',
          class: [typeof this.tbodyTrClass === 'function' ? this.tbodyTrClass(null, 'table-busy') : this.tbodyTrClass],
          attrs: trAttrs
        }, [h('td', {
          attrs: tdAttrs
        }, [this.normalizeSlot('table-busy', {})])]);
      } else {
        // We return null here so that we can determine if we need to
        // render the table items rows or not.
        return null;
      }
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "7f7f":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("9e1e") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "8146":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _warn = __webpack_require__("93e0");

var _range = __webpack_require__("db63");

var _keyCodes = __webpack_require__("06e4");

var _dom = __webpack_require__("1611");

var _toString = __webpack_require__("40f6");

var _normalizeSlot = __webpack_require__("532a");

var _link = __webpack_require__("4e40");

/*
 * Comon props, computed, data, render function, and methods for b-pagination and b-pagination-nav
 */
// Threshold of limit size when we start/stop showing ellipsis
var ELLIPSIS_THRESHOLD = 3; // Default # of buttons limit

var DEFAULT_LIMIT = 5; // Make an array of N to N+X

function makePageArray(startNum, numPages) {
  return (0, _range.default)(numPages).map(function (value, index) {
    return {
      number: index + startNum,
      classes: null
    };
  });
} // Sanitize the provided Limit value (converting to a number)


function sanitizeLimit(value) {
  var limit = parseInt(value, 10) || 1;
  return limit < 1 ? DEFAULT_LIMIT : limit;
} // Sanitize the provided current page number (converting to a number)


function sanitizeCurPage(value, numPages) {
  var page = parseInt(value, 10) || 1;
  return page > numPages ? numPages : page < 1 ? 1 : page;
} // Links don't normally respond to SPACE, so we add that functionality via this handler


function onSpaceKey(evt) {
  if (evt.keyCode === _keyCodes.default.SPACE) {
    evt.preventDefault(); // Stop page from scrolling

    evt.stopImmediatePropagation();
    evt.stopPropagation(); // Trigger the click event on the link

    evt.currentTarget.click();
    return false;
  }
} // Props object


var props = {
  disabled: {
    type: Boolean,
    default: false
  },
  value: {
    type: [Number, String],
    default: null,
    validator: function validator(value) {
      var num = parseInt(value, 10);
      /* istanbul ignore if */

      if (value !== null && (isNaN(num) || num < 1)) {
        (0, _warn.default)('pagination: v-model value must be a number greater than 0');
        return false;
      }

      return true;
    }
  },
  limit: {
    type: [Number, String],
    default: DEFAULT_LIMIT,
    validator: function validator(value) {
      var num = parseInt(value, 10);
      /* istanbul ignore if */

      if (isNaN(num) || num < 1) {
        (0, _warn.default)('pagination: prop "limit" must be a number greater than 0');
        return false;
      }

      return true;
    }
  },
  size: {
    type: String,
    default: 'md'
  },
  align: {
    type: String,
    default: 'left'
  },
  hideGotoEndButtons: {
    type: Boolean,
    default: false
  },
  ariaLabel: {
    type: String,
    default: 'Pagination'
  },
  labelFirstPage: {
    type: String,
    default: 'Go to first page'
  },
  firstText: {
    type: String,
    default: '«'
  },
  labelPrevPage: {
    type: String,
    default: 'Go to previous page'
  },
  prevText: {
    type: String,
    default: '‹'
  },
  labelNextPage: {
    type: String,
    default: 'Go to next page'
  },
  nextText: {
    type: String,
    default: '›'
  },
  labelLastPage: {
    type: String,
    default: 'Go to last page'
  },
  lastText: {
    type: String,
    default: '»'
  },
  labelPage: {
    type: [String, Function],
    default: 'Go to page'
  },
  hideEllipsis: {
    type: Boolean,
    default: false
  },
  ellipsisText: {
    type: String,
    default: '…'
  } // @vue/component

};
var _default = {
  components: {
    BLink: _link.default
  },
  mixins: [_normalizeSlot.default],
  model: {
    prop: 'value',
    event: 'input'
  },
  props: props,
  data: function data() {
    var curr = parseInt(this.value, 10);
    return {
      // -1 signifies no page initially selected
      currentPage: curr > 0 ? curr : -1,
      localNumPages: 1,
      localLimit: DEFAULT_LIMIT
    };
  },
  computed: {
    btnSize: function btnSize() {
      return this.size ? "pagination-".concat(this.size) : '';
    },
    alignment: function alignment() {
      var align = this.align;

      if (align === 'center') {
        return 'justify-content-center';
      } else if (align === 'end' || align === 'right') {
        return 'justify-content-end';
      } else if (align === 'fill') {
        // The page-items will also have 'flex-fill' added.
        // We ad text centering to make the button appearance better in fill mode.
        return 'text-center';
      }

      return '';
    },
    computedCurrentPage: function computedCurrentPage() {
      return sanitizeCurPage(this.currentPage, this.localNumPages);
    },
    paginationParams: function paginationParams() {
      // Determine if we should show the the ellipsis
      var limit = this.limit;
      var numPages = this.localNumPages;
      var curPage = this.computedCurrentPage;
      var hideEllipsis = this.hideEllipsis;
      var showFirstDots = false;
      var showLastDots = false;
      var numLinks = limit;
      var startNum = 1;

      if (numPages <= limit) {
        // Special Case: Less pages available than the limit of displayed pages
        numLinks = numPages;
      } else if (curPage < limit - 1 && limit > ELLIPSIS_THRESHOLD) {
        // We are near the beginning of the page list
        if (!hideEllipsis) {
          showLastDots = true;
          numLinks = limit - 1;
        }
      } else if (numPages - curPage + 2 < limit && limit > ELLIPSIS_THRESHOLD) {
        // We are near the end of the list
        if (!hideEllipsis) {
          numLinks = limit - 1;
          showFirstDots = true;
        }

        startNum = numPages - numLinks + 1;
      } else {
        // We are somewhere in the middle of the page list
        if (limit > ELLIPSIS_THRESHOLD && !hideEllipsis) {
          numLinks = limit - 2;
          showFirstDots = showLastDots = true;
        }

        startNum = curPage - Math.floor(numLinks / 2);
      } // Sanity checks


      if (startNum < 1) {
        /* istanbul ignore next */
        startNum = 1;
      } else if (startNum > numPages - numLinks) {
        startNum = numPages - numLinks + 1;
      }

      return {
        showFirstDots: showFirstDots,
        showLastDots: showLastDots,
        numLinks: numLinks,
        startNum: startNum
      };
    },
    pageList: function pageList() {
      // Generates the pageList array
      var _this$paginationParam = this.paginationParams,
          numLinks = _this$paginationParam.numLinks,
          startNum = _this$paginationParam.startNum;
      var currPage = this.computedCurrentPage; // Generate list of page numbers

      var pages = makePageArray(startNum, numLinks); // We limit to a total of 3 page buttons on XS screens
      // So add classes to page links to hide them for XS breakpoint
      // Note: Ellipsis will also be hidden on XS screens
      // TODO: Make this visual limit configurable based on breakpoint(s)

      if (pages.length > 3) {
        var idx = currPage - startNum; // THe following is a bootstrap-vue custom utility class

        var classes = 'bv-d-xs-down-none';

        if (idx === 0) {
          // Keep leftmost 3 buttons visible when current page is first page
          for (var i = 3; i < pages.length; i++) {
            pages[i].classes = classes;
          }
        } else if (idx === pages.length - 1) {
          // Keep rightmost 3 buttons visible when current page is last page
          for (var _i = 0; _i < pages.length - 3; _i++) {
            pages[_i].classes = classes;
          }
        } else {
          // Hide all except current page, current page - 1 and current page + 1
          for (var _i2 = 0; _i2 < idx - 1; _i2++) {
            // hide some left button(s)
            pages[_i2].classes = classes;
          }

          for (var _i3 = pages.length - 1; _i3 > idx + 1; _i3--) {
            // hide some right button(s)
            pages[_i3].classes = classes;
          }
        }
      }

      return pages;
    }
  },
  watch: {
    value: function value(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.currentPage = sanitizeCurPage(newValue, this.localNumPages);
      }
    },
    currentPage: function currentPage(newValue, oldValue) {
      if (newValue !== oldValue) {
        // Emit null if no page selected
        this.$emit('input', newValue > 0 ? newValue : null);
      }
    },
    limit: function limit(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.localLimit = sanitizeLimit(newValue);
      }
    }
  },
  created: function created() {
    var _this = this;

    // Set our default values in data
    this.localLimit = sanitizeLimit(this.limit);
    this.$nextTick(function () {
      // Sanity check
      _this.currentPage = _this.currentPage > _this.localNumPages ? _this.localNumPages : _this.currentPage;
    });
  },
  methods: {
    getButtons: function getButtons() {
      // Return only buttons that are visible
      return (0, _dom.selectAll)('a.page-link', this.$el).filter(function (btn) {
        return (0, _dom.isVisible)(btn);
      });
    },
    setBtnFocus: function setBtnFocus(btn) {
      btn.focus();
    },
    focusCurrent: function focusCurrent() {
      var _this2 = this;

      // We do this in next tick to ensure buttons have finished rendering
      this.$nextTick(function () {
        var btn = _this2.getButtons().find(function (el) {
          return parseInt((0, _dom.getAttr)(el, 'aria-posinset'), 10) === _this2.computedCurrentPage;
        });

        if (btn && btn.focus) {
          _this2.setBtnFocus(btn);
        } else {
          // Fallback if current page is not in button list
          _this2.focusFirst();
        }
      });
    },
    focusFirst: function focusFirst() {
      var _this3 = this;

      // We do this in next tick to ensure buttons have finished rendering
      this.$nextTick(function () {
        var btn = _this3.getButtons().find(function (el) {
          return !(0, _dom.isDisabled)(el);
        });

        if (btn && btn.focus && btn !== document.activeElement) {
          _this3.setBtnFocus(btn);
        }
      });
    },
    focusLast: function focusLast() {
      var _this4 = this;

      // We do this in next tick to ensure buttons have finished rendering
      this.$nextTick(function () {
        var btn = _this4.getButtons().reverse().find(function (el) {
          return !(0, _dom.isDisabled)(el);
        });

        if (btn && btn.focus && btn !== document.activeElement) {
          _this4.setBtnFocus(btn);
        }
      });
    },
    focusPrev: function focusPrev() {
      var _this5 = this;

      // We do this in next tick to ensure buttons have finished rendering
      this.$nextTick(function () {
        var buttons = _this5.getButtons();

        var idx = buttons.indexOf(document.activeElement);

        if (idx > 0 && !(0, _dom.isDisabled)(buttons[idx - 1]) && buttons[idx - 1].focus) {
          _this5.setBtnFocus(buttons[idx - 1]);
        }
      });
    },
    focusNext: function focusNext() {
      var _this6 = this;

      // We do this in next tick to ensure buttons have finished rendering
      this.$nextTick(function () {
        var buttons = _this6.getButtons();

        var idx = buttons.indexOf(document.activeElement);
        var cnt = buttons.length - 1;

        if (idx < cnt && !(0, _dom.isDisabled)(buttons[idx + 1]) && buttons[idx + 1].focus) {
          _this6.setBtnFocus(buttons[idx + 1]);
        }
      });
    }
  },
  render: function render(h) {
    var _this7 = this;

    var buttons = [];
    var numberOfPages = this.localNumPages;
    var disabled = this.disabled;
    var _this$paginationParam2 = this.paginationParams,
        showFirstDots = _this$paginationParam2.showFirstDots,
        showLastDots = _this$paginationParam2.showLastDots;
    var currPage = this.computedCurrentPage;
    var fill = this.align === 'fill'; // Helper function and flag

    var isActivePage = function isActivePage(pageNum) {
      return pageNum === currPage;
    };

    var noCurrPage = this.currentPage < 1; // Factory function for prev/next/first/last buttons

    var makeEndBtn = function makeEndBtn(linkTo, ariaLabel, btnSlot, btnText, pageTest, key) {
      var isDisabled = disabled || isActivePage(pageTest) || noCurrPage || linkTo < 1 || linkTo > numberOfPages;
      var pageNum = linkTo < 1 ? 1 : linkTo > numberOfPages ? numberOfPages : linkTo;
      var scope = {
        disabled: isDisabled,
        page: pageNum,
        index: pageNum - 1
      };
      var btnContent = _this7.normalizeSlot(btnSlot, scope) || (0, _toString.default)(btnText) || h(false);
      var inner = h(isDisabled ? 'span' : 'b-link', {
        staticClass: 'page-link',
        props: isDisabled ? {} : _this7.linkProps(linkTo),
        attrs: {
          role: 'menuitem',
          tabindex: isDisabled ? null : '-1',
          'aria-label': ariaLabel,
          'aria-controls': _this7.ariaControls || null,
          'aria-disabled': isDisabled ? 'true' : null
        },
        on: isDisabled ? {} : {
          click: function click(evt) {
            _this7.onClick(linkTo, evt);
          },
          keydown: onSpaceKey
        }
      }, [btnContent]);
      return h('li', {
        key: key,
        staticClass: 'page-item',
        class: {
          disabled: isDisabled,
          'flex-fill': fill
        },
        attrs: {
          role: 'none presentation',
          'aria-hidden': isDisabled ? 'true' : null
        }
      }, [inner]);
    }; // Ellipsis factory


    var makeEllipsis = function makeEllipsis(isLast) {
      return h('li', {
        key: "elipsis-".concat(isLast ? 'last' : 'first'),
        staticClass: 'page-item',
        class: ['disabled', 'bv-d-xs-down-none', fill ? 'flex-fill' : ''],
        attrs: {
          role: 'separator'
        }
      }, [h('span', {
        staticClass: 'page-link'
      }, [_this7.normalizeSlot('ellipsis-text', {}) || (0, _toString.default)(_this7.ellipsisText) || h(false)])]);
    }; // Goto First Page button bookend


    buttons.push(this.hideGotoEndButtons ? h(false) : makeEndBtn(1, this.labelFirstPage, 'first-text', this.firstText, 1, 'bookend-goto-first')); // Goto Previous page button bookend

    buttons.push(makeEndBtn(currPage - 1, this.labelPrevPage, 'prev-text', this.prevText, 1, 'bookend-goto-prev')); // First Ellipsis Bookend

    buttons.push(showFirstDots ? makeEllipsis(false) : h(false)); // Individual Page links

    this.pageList.forEach(function (page, idx) {
      var active = isActivePage(page.number) && !noCurrPage; // Active page will have tabindex of 0, or if no current page and first page button

      var tabIndex = disabled ? null : active || noCurrPage && idx === 0 ? '0' : '-1';
      var attrs = {
        role: 'menuitemradio',
        'aria-disabled': disabled ? 'true' : null,
        'aria-controls': _this7.ariaControls || null,
        'aria-label': typeof _this7.labelPage === 'function' ? _this7.labelPage(page.number) : "".concat(_this7.labelPage, " ").concat(page.number),
        'aria-checked': active ? 'true' : 'false',
        'aria-posinset': page.number,
        'aria-setsize': numberOfPages,
        // ARIA "roving tabindex" method
        tabindex: tabIndex
      };
      var btnContent = (0, _toString.default)(_this7.makePage(page.number));
      var scope = {
        page: page.number,
        index: page.number - 1,
        content: btnContent,
        active: active,
        disabled: disabled
      };
      var inner = h(disabled ? 'span' : 'b-link', {
        props: disabled ? {} : _this7.linkProps(page.number),
        staticClass: 'page-link',
        attrs: attrs,
        on: disabled ? {} : {
          click: function click(evt) {
            _this7.onClick(page.number, evt);
          },
          keydown: onSpaceKey
        }
      }, [_this7.normalizeSlot('page', scope) || btnContent]);
      buttons.push(h('li', {
        key: "page-".concat(page.number),
        staticClass: 'page-item',
        class: [{
          disabled: disabled,
          active: active,
          'flex-fill': fill
        }, page.classes],
        attrs: {
          role: 'none presentation'
        }
      }, [inner]));
    }); // Last Ellipsis Bookend

    buttons.push(showLastDots ? makeEllipsis(true) : h(false)); // Goto Next page button bookend

    buttons.push(makeEndBtn(currPage + 1, this.labelNextPage, 'next-text', this.nextText, numberOfPages, 'bookend-goto-next')); // Goto Last Page button bookend

    buttons.push(this.hideGotoEndButtons ? h(false) : makeEndBtn(numberOfPages, this.labelLastPage, 'last-text', this.lastText, numberOfPages, 'bookend-goto-last')); // Assemble the paginatiom buttons

    var pagination = h('ul', {
      ref: 'ul',
      staticClass: 'pagination',
      class: ['b-pagination', this.btnSize, this.alignment],
      attrs: {
        role: 'menubar',
        'aria-disabled': disabled ? 'true' : 'false',
        'aria-label': this.ariaLabel || null
      },
      on: {
        keydown: function keydown(evt) {
          var keyCode = evt.keyCode;
          var shift = evt.shiftKey;

          if (keyCode === _keyCodes.default.LEFT) {
            evt.preventDefault();
            shift ? _this7.focusFirst() : _this7.focusPrev();
          } else if (keyCode === _keyCodes.default.RIGHT) {
            evt.preventDefault();
            shift ? _this7.focusLast() : _this7.focusNext();
          }
        }
      }
    }, buttons); // if we are pagination-nav, wrap in '<nav>' wrapper

    if (this.isNav) {
      return h('nav', {
        attrs: {
          'aria-disabled': disabled ? 'true' : null,
          'aria-hidden': disabled ? 'true' : 'false'
        }
      }, [pagination]);
    } else {
      return pagination;
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "8339":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _pagination = __webpack_require__("8146");

var _dom = __webpack_require__("1611");

var DEFAULT_PER_PAGE = 20;
var DEFAULT_TOTAL_ROWS = 0;

function sanitizePerPage(value) {
  var perPage = parseInt(value, 10) || DEFAULT_PER_PAGE;
  return perPage < 1 ? 1 : perPage;
}

function sanitizeTotalRows(value) {
  var totalRows = parseInt(value, 10) || DEFAULT_TOTAL_ROWS;
  return totalRows < 0 ? 0 : totalRows;
}

var props = {
  perPage: {
    type: [Number, String],
    default: DEFAULT_PER_PAGE
  },
  totalRows: {
    type: [Number, String],
    default: DEFAULT_TOTAL_ROWS
  },
  ariaControls: {
    type: String,
    default: null
  } // Our render function is brought in from the pagination mixin
  // @vue/component

};
var _default = {
  name: 'BPagination',
  mixins: [_pagination.default],
  props: props,
  computed: {
    numberOfPages: function numberOfPages() {
      var result = Math.ceil(sanitizeTotalRows(this.totalRows) / sanitizePerPage(this.perPage));
      return result < 1 ? 1 : result;
    }
  },
  watch: {
    numberOfPages: function numberOfPages(newVal, OldVal) {
      this.localNumPages = newVal;
    }
  },
  created: function created() {
    var _this = this;

    // Set the initial page count
    this.localNumPages = this.numberOfPages; // Set the initial page value

    var curr = parseInt(this.value, 10) || 0;

    if (curr > 0) {
      this.currentPage = curr;
    } else {
      this.$nextTick(function () {
        // If this value parses to NaN or a value less than 1
        // Trigger an initial emit of 'null' if no page specified
        _this.currentPage = 0;
      });
    }
  },
  mounted: function mounted() {
    // Set the initial page count
    this.localNumPages = this.numberOfPages;
  },
  methods: {
    // These methods are used by the render function
    onClick: function onClick(num, evt) {
      var _this2 = this;

      // Handle edge cases where number of pages has changed (i.e. if perPage changes)
      // This should normally not happen, but just in case.
      if (num > this.numberOfPages) {
        /* istanbul ignore next */
        num = this.numberOfPages;
      } else if (num < 1) {
        /* istanbul ignore next */
        num = 1;
      } // Update the v-model


      this.currentPage = num; // Emit event triggered by user interaction

      this.$emit('change', this.currentPage);
      this.$nextTick(function () {
        // Keep the current button focused if possible
        var target = evt.target;

        if ((0, _dom.isVisible)(target) && _this2.$el.contains(target) && target.focus) {
          target.focus();
        } else {
          _this2.focusCurrent();
        }
      });
    },
    makePage: function makePage(pageNum) {
      return pageNum;
    },
    linkProps: function linkProps(pageNum) {
      // Always '#' for pagination component
      return {
        href: '#'
      };
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "84f2":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "8597":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _popover = __webpack_require__("daa8");

var _warn = __webpack_require__("93e0");

var _toolpop = __webpack_require__("c542");

// @vue/component
var _default = {
  name: 'BPopover',
  mixins: [_toolpop.default],
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    triggers: {
      type: [String, Array],
      default: 'click'
    },
    placement: {
      type: String,
      default: 'right'
    }
  },
  data: function data() {
    return {};
  },
  methods: {
    createToolpop: function createToolpop() {
      // getTarget is in toolpop mixin
      var target = this.getTarget();

      if (target) {
        this._toolpop = new _popover.default(target, this.getConfig(), this.$root);
      } else {
        this._toolpop = null;
        (0, _warn.default)("b-popover: 'target' element not found!");
      }

      return this._toolpop;
    }
  },
  render: function render(h) {
    return h('div', {
      class: ['d-none'],
      style: {
        display: 'none'
      },
      attrs: {
        'aria-hidden': true
      }
    }, [h('div', {
      ref: 'title'
    }, this.$slots.title), h('div', {
      ref: 'content'
    }, this.$slots.default)]);
  }
};
exports.default = _default;

/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "886b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__("b42e");

var _config = __webpack_require__("eb60");

var NAME = 'BCardSubTitle';
var props = {
  subTitle: {
    type: String,
    default: ''
  },
  subTitleTag: {
    type: String,
    default: 'h6'
  },
  subTitleTextVariant: {
    type: String,
    default: function _default() {
      return (0, _config.getComponentConfig)(NAME, 'subTitleTextVariant');
    }
  } // @vue/component

};
exports.props = props;
var _default2 = {
  name: NAME,
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.subTitleTag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'card-subtitle',
      class: [props.subTitleTextVariant ? "text-".concat(props.subTitleTextVariant) : null]
    }), children || props.subTitle);
  }
};
exports.default = _default2;

/***/ }),

/***/ "887d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _pagination = __webpack_require__("8339");

var _plugins = __webpack_require__("0a8d");

var components = {
  BPagination: _pagination.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "8934":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _warn = __webpack_require__("93e0");

var _looseEqual = __webpack_require__("96cd");

var _toString = __webpack_require__("40f6");

var _dom = __webpack_require__("1611");

var _env = __webpack_require__("4565");

var _object = __webpack_require__("24e2");

var _array = __webpack_require__("bb2f");

var _router = __webpack_require__("185a");

var _pagination = __webpack_require__("8146");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// TODO: move this to an instance method in pagination mixin
function sanitizeNumPages(value) {
  var num = parseInt(value, 10) || 1;
  return num < 1 ? 1 : num;
} // Props object


var props = {
  // pagination-nav specific props
  numberOfPages: {
    type: [Number, String],
    default: 1,
    validator: function validator(value) {
      var num = parseInt(value, 10);
      /* istanbul ignore if */

      if (isNaN(num) || num < 1) {
        (0, _warn.default)('b-pagination: prop "number-of-pages" must be a number greater than 0');
        return false;
      }

      return true;
    }
  },
  baseUrl: {
    type: String,
    default: '/'
  },
  useRouter: {
    type: Boolean,
    default: false
  },
  linkGen: {
    type: Function,
    default: null
  },
  pageGen: {
    type: Function,
    default: null
  },
  pages: {
    // Optional array of page links
    type: Array,
    default: null
  },
  noPageDetect: {
    // Disable auto page number detection if true
    type: Boolean,
    default: false
  },
  // router-link specific props
  activeClass: {
    type: String // default: undefined

  },
  exact: {
    type: Boolean,
    default: false
  },
  exactActiveClass: {
    type: String // default: undefined

  },
  // nuxt-link specific prop(s)
  noPrefetch: {
    type: Boolean,
    default: false
  } // Our render function is brought in via the pagination mixin
  // @vue/component

};
var _default = {
  name: 'BPaginationNav',
  mixins: [_pagination.default],
  props: props,
  computed: {
    // Used by render function to trigger wrapping in '<nav>' element
    isNav: function isNav() {
      return true;
    },
    computedValue: function computedValue() {
      // Returns the value prop as a number or `null` if undefined or < 1
      var val = parseInt(this.value, 10);
      return isNaN(val) || val < 1 ? null : val;
    }
  },
  watch: {
    numberOfPages: function numberOfPages(newVal, oldVal) {
      var _this = this;

      this.$nextTick(function () {
        _this.setNumPages();
      });
    },
    pages: function pages(newVal, oldVal) {
      var _this2 = this;

      this.$nextTick(function () {
        _this2.setNumPages();
      });
    }
  },
  created: function created() {
    var _this3 = this;

    this.setNumPages(); // For SSR, assuming a page URL can be detected

    this.$nextTick(function () {
      _this3.guessCurrentPage();
    });
  },
  mounted: function mounted() {
    var _this4 = this;

    if (this.$router) {
      // We only add the watcher if vue router is detected
      this.$watch('$route', function (to, from) {
        _this4.$nextTick(function () {
          (0, _dom.requestAF)(function () {
            _this4.guessCurrentPage();
          });
        });
      });
    }
  },
  methods: {
    setNumPages: function setNumPages() {
      if ((0, _array.isArray)(this.pages) && this.pages.length > 0) {
        this.localNumPages = this.pages.length;
      } else {
        this.localNumPages = sanitizeNumPages(this.numberOfPages);
      }
    },
    onClick: function onClick(pageNum, evt) {
      var _this5 = this;

      // Dont do anything if clicking the current active page
      if (pageNum === this.currentPage) {
        return;
      }

      (0, _dom.requestAF)(function () {
        // Update the v-model
        // Done in in requestAF() to allow browser to complete the
        // native browser click handling of a link
        _this5.currentPage = pageNum;

        _this5.$emit('change', pageNum);
      });
      this.$nextTick(function () {
        // Done in a nextTick() to ensure rendering complete
        try {
          // Emulate native link click page reloading behaviour by blurring the
          // paginator and returning focus to the document
          var target = evt.currentTarget || evt.target;
          target.blur();
        } catch (e) {}
      });
    },
    getPageInfo: function getPageInfo(pageNum) {
      if (!(0, _array.isArray)(this.pages) || this.pages.length === 0 || this.pages[pageNum - 1] === undefined) {
        var link = "".concat(this.baseUrl).concat(pageNum);
        return {
          link: this.useRouter ? {
            path: link
          } : link,
          text: (0, _toString.default)(pageNum)
        };
      }

      var info = this.pages[pageNum - 1];

      if ((0, _object.isObject)(info)) {
        var _link = info.link;
        return {
          // Mormalize link for router use
          link: (0, _object.isObject)(_link) ? _link : this.useRouter ? {
            path: _link
          } : _link,
          // Make sure text has a value
          text: (0, _toString.default)(info.text || pageNum)
        };
      } else {
        return {
          link: (0, _toString.default)(info),
          text: (0, _toString.default)(pageNum)
        };
      }
    },
    makePage: function makePage(pageNum) {
      var info = this.getPageInfo(pageNum);

      if (this.pageGen && typeof this.pageGen === 'function') {
        return this.pageGen(pageNum, info);
      }

      return info.text;
    },
    makeLink: function makeLink(pageNum) {
      var info = this.getPageInfo(pageNum);

      if (this.linkGen && typeof this.linkGen === 'function') {
        return this.linkGen(pageNum, info);
      }

      return info.link;
    },
    linkProps: function linkProps(pageNum) {
      var link = this.makeLink(pageNum);
      var props = {
        target: this.target || null,
        rel: this.rel || null,
        disabled: this.disabled,
        // The following props are only used if BLink detects router
        exact: this.exact,
        activeClass: this.activeClass,
        exactActiveClass: this.exactActiveClass,
        append: this.append,
        replace: this.replace,
        // nuxt-link specific prop
        noPrefetch: this.noPrefetch
      };

      if (this.useRouter || _typeof(link) === 'object') {
        props.to = link;
      } else {
        props.href = link;
      }

      return props;
    },
    resolveLink: function resolveLink() {
      var to = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      // Given a to (or href string), convert to normalized route-like structure
      // Works only client side!!
      try {
        var link = document.createElement('a'); // Convert the `to` to a HREF via a temporary `a` tag

        link.href = (0, _router.computeHref)({
          to: to
        }, 'a', '/', '/'); // Once href is assigned, the returned href will be normalized to the full URL bits

        return {
          path: link.pathname,
          hash: link.hash,
          query: (0, _router.parseQuery)(link.search)
        };
      } catch (e) {
        /* istanbul ignore next */
        return {};
      }
    },
    resolveRoute: function resolveRoute() {
      var to = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      // Given a to (or href string), convert to normalized route location structure
      // works only when router available!!
      try {
        var route = this.$router.resolve(to, this.$route).route;
        return {
          path: route.path,
          hash: route.hash,
          query: route.query
        };
      } catch (e) {
        /* istanbul ignore next */
        return {};
      }
    },
    guessCurrentPage: function guessCurrentPage() {
      var guess = this.computedValue;
      var $router = this.$router;
      var $route = this.$route; // This section only occurs if we are client side, or server-side with $router

      /* istanbul ignore else */

      if (!this.noPageDetect && !guess && (_env.inBrowser || !_env.inBrowser && $router)) {
        // Current route (if router available)
        var currRoute = $router ? {
          path: $route.path,
          hash: $route.hash,
          query: $route.query
        } : {}; // Current page full HREF (if client side). Can't be done as a computed prop!

        var loc = _env.inBrowser ? window.location || document.location : null;
        var currLink = loc ? {
          path: loc.pathname,
          hash: loc.hash,
          query: (0, _router.parseQuery)(loc.search)
        } : {}; // Loop through the possible pages looking for a match until found

        for (var page = 1; !guess && page <= this.localNumPages; page++) {
          var to = this.makeLink(page);

          if ($router && ((0, _object.isObject)(to) || this.useRouter)) {
            // Resolve the page via the $router
            guess = (0, _looseEqual.default)(this.resolveRoute(to), currRoute) ? page : null;
          } else if (_env.inBrowser) {
            // If no $router available (or !this.useRouter when `to` is a string)
            // we compare using parsed URIs
            guess = (0, _looseEqual.default)(this.resolveLink(to), currLink) ? page : null;
          } else {
            // probably SSR, but no $router so we can't guess, so lets break out of loop

            /* istanbul ignore next */
            guess = -1;
          }
        }
      } // We set currentPage to 0 to trigger an $emit('input', null)
      // As the default for this.currentPage is -1 when no value is specified
      // And valid page numbers are greater than 0


      this.currentPage = guess > 0 ? guess : 0;
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "8aae":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("32a6");
module.exports = __webpack_require__("584a").Object.keys;


/***/ }),

/***/ "8b08":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _formSelect = __webpack_require__("ff35");

var _plugins = __webpack_require__("0a8d");

var components = {
  BFormSelect: _formSelect.default,
  BSelect: _formSelect.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "8b96":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _buttonGroup = __webpack_require__("2e08");

var _plugins = __webpack_require__("0a8d");

var components = {
  BButtonGroup: _buttonGroup.default,
  BBtnGroup: _buttonGroup.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "8b97":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("d3f4");
var anObject = __webpack_require__("cb7c");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("9b43")(Function.call, __webpack_require__("11e9").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "8e60":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("294c")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "9093":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("ce10");
var hiddenKeys = __webpack_require__("e11e").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "90a3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _imgLazy = __webpack_require__("294b");

var _object = __webpack_require__("24e2");

var _vueFunctionalDataMerge = __webpack_require__("b42e");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copy of `<b-img-lazy>` props, and remove conflicting/non-applicable props
// The `omit()` util creates a new object, so we can just pass the original props
var lazyProps = (0, _object.omit)(_imgLazy.default.props, ['left', 'right', 'center', 'block', 'rounded', 'thumbnail', 'fluid', 'fluidGrow']);

var props = _objectSpread({}, lazyProps, {
  top: {
    type: Boolean,
    default: false
  },
  bottom: {
    type: Boolean,
    default: false
  },
  left: {
    type: Boolean,
    default: false
  },
  start: {
    type: Boolean,
    default: false // alias of 'left'

  },
  right: {
    type: Boolean,
    default: false
  },
  end: {
    type: Boolean,
    default: false // alias of 'right'

  } // @vue/component

});

exports.props = props;
var _default = {
  name: 'BCardImgLazy',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data;
    var baseClass = 'card-img';

    if (props.top) {
      baseClass += '-top';
    } else if (props.right || props.end) {
      baseClass += '-right';
    } else if (props.bottom) {
      baseClass += '-bottom';
    } else if (props.left || props.start) {
      baseClass += '-left';
    } // False out the left/center/right props before passing to b-img-lazy


    var lazyProps = _objectSpread({}, props, {
      left: false,
      right: false,
      center: false
    });

    return h(_imgLazy.default, (0, _vueFunctionalDataMerge.mergeData)(data, {
      class: [baseClass],
      props: lazyProps
    }));
  }
};
exports.default = _default;

/***/ }),

/***/ "91b6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _popper = __webpack_require__("f0bd");

var _tooltip = __webpack_require__("16ae");

var _env = __webpack_require__("4565");

var _object = __webpack_require__("24e2");

var _warn = __webpack_require__("93e0");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Key which we use to store tooltip object on element
var BV_TOOLTIP = '__BV_ToolTip__'; // Valid event triggers

var validTriggers = {
  focus: true,
  hover: true,
  click: true,
  blur: true // Build a ToolTip config based on bindings (if any)
  // Arguments and modifiers take precedence over passed value config object

  /* istanbul ignore next: not easy to test */

};

var parseBindings = function parseBindings(bindings)
/* istanbul ignore next: not easy to test */
{
  // We start out with a blank config
  var config = {}; // Process bindings.value

  if (typeof bindings.value === 'string') {
    // Value is tooltip content (html optionally supported)
    config.title = bindings.value;
  } else if (typeof bindings.value === 'function') {
    // Title generator function
    config.title = bindings.value;
  } else if (_typeof(bindings.value) === 'object') {
    // Value is config object, so merge
    config = _objectSpread({}, config, bindings.value);
  } // If argument, assume element ID of container element


  if (bindings.arg) {
    // Element ID specified as arg
    // We must prepend '#' to become a CSS selector
    config.container = "#".concat(bindings.arg);
  } // Process modifiers


  (0, _object.keys)(bindings.modifiers).forEach(function (mod) {
    if (/^html$/.test(mod)) {
      // Title allows HTML
      config.html = true;
    } else if (/^nofade$/.test(mod)) {
      // No animation
      config.animation = false;
    } else if (/^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/.test(mod)) {
      // Placement of tooltip
      config.placement = mod;
    } else if (/^(window|viewport)$/.test(mod)) {
      // Boundary of tooltip
      config.boundary = mod;
    } else if (/^d\d+$/.test(mod)) {
      // Delay value
      var delay = parseInt(mod.slice(1), 10) || 0;

      if (delay) {
        config.delay = delay;
      }
    } else if (/^o-?\d+$/.test(mod)) {
      // Offset value, negative allowed
      var offset = parseInt(mod.slice(1), 10) || 0;

      if (offset) {
        config.offset = offset;
      }
    }
  }); // Special handling of event trigger modifiers trigger is
  // a space separated list

  var selectedTriggers = {}; // Parse current config object trigger

  var triggers = typeof config.trigger === 'string' ? config.trigger.trim().split(/\s+/) : [];
  triggers.forEach(function (trigger) {
    if (validTriggers[trigger]) {
      selectedTriggers[trigger] = true;
    }
  }); // Parse modifiers for triggers

  (0, _object.keys)(validTriggers).forEach(function (trigger) {
    if (bindings.modifiers[trigger]) {
      selectedTriggers[trigger] = true;
    }
  }); // Sanitize triggers

  config.trigger = (0, _object.keys)(selectedTriggers).join(' ');

  if (config.trigger === 'blur') {
    // Blur by itself is useless, so convert it to 'focus'
    config.trigger = 'focus';
  }

  if (!config.trigger) {
    // Remove trigger config
    delete config.trigger;
  }

  return config;
}; // Add or update ToolTip on our element


var applyTooltip = function applyTooltip(el, bindings, vnode) {
  if (!_env.inBrowser) {
    /* istanbul ignore next */
    return;
  }

  if (!_popper.default) {
    // Popper is required for ToolTips to work

    /* istanbul ignore next */
    (0, _warn.default)('v-b-tooltip: Popper.js is required for ToolTips to work');
    /* istanbul ignore next */

    return;
  }

  var config = parseBindings(bindings);

  if (el[BV_TOOLTIP]) {
    el[BV_TOOLTIP].updateConfig(config);
  } else {
    el[BV_TOOLTIP] = new _tooltip.default(el, config, vnode.context.$root);
  }
}; // Remove ToolTip on our element


var removeTooltip = function removeTooltip(el) {
  if (el[BV_TOOLTIP]) {
    el[BV_TOOLTIP].destroy();
    el[BV_TOOLTIP] = null;
    delete el[BV_TOOLTIP];
  }
};
/*
 * Export our directive
 */


var _default = {
  bind: function bind(el, bindings, vnode) {
    applyTooltip(el, bindings, vnode);
  },
  inserted: function inserted(el, bindings, vnode) {
    applyTooltip(el, bindings, vnode);
  },
  update: function update(el, bindings, vnode)
  /* istanbul ignore next: not easy to test */
  {
    if (bindings.value !== bindings.oldValue) {
      applyTooltip(el, bindings, vnode);
    }
  },
  componentUpdated: function componentUpdated(el, bindings, vnode)
  /* istanbul ignore next: not easy to test */
  {
    if (bindings.value !== bindings.oldValue) {
      applyTooltip(el, bindings, vnode);
    }
  },
  unbind: function unbind(el) {
    removeTooltip(el);
  }
};
exports.default = _default;

/***/ }),

/***/ "9299":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "92e4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__("b42e");

var _warn = __webpack_require__("93e0");

var props = {
  tag: {
    type: String,
    default: 'ul'
  },
  fill: {
    type: Boolean,
    default: false
  },
  justified: {
    type: Boolean,
    default: false
  },
  tabs: {
    type: Boolean,
    default: false
  },
  pills: {
    type: Boolean,
    default: false
  },
  vertical: {
    type: Boolean,
    default: false
  },
  isNavBar: {
    type: Boolean,
    default: false
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BNav',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;

    if (props.isNavBar) {
      /* istanbul ignore next */
      (0, _warn.default)("b-nav: Prop 'is-nav-bar' is deprecated. Please use component '<b-navbar-nav>' instead.");
    }

    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      class: {
        nav: !props.isNavBar,
        'navbar-nav': props.isNavBar,
        'nav-tabs': props.tabs && !props.isNavBar,
        'nav-pills': props.pills && !props.isNavBar,
        'flex-column': props.vertical && !props.isNavBar,
        'nav-fill': props.fill,
        'nav-justified': props.justified
      }
    }), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "93e0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _env = __webpack_require__("4565");

/**
 * Log a warning message to the console with bootstrap-vue formatting sugar.
 * @param {string} message
 */

/* istanbul ignore next */
var warn = function warn(message) {
  if (!(0, _env.getNoWarn)()) {
    console.warn("[BootstrapVue warn]: ".concat(message));
  }
};

var _default = warn;
exports.default = _default;

/***/ }),

/***/ "9668":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__("b42e");

var props = {
  id: {
    type: String,
    default: null
  },
  tag: {
    type: String,
    default: 'h6'
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BDropdownHeader',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'dropdown-header',
      attrs: {
        id: props.id || null
      }
    }), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "96cd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _array = __webpack_require__("bb2f");

var _object = __webpack_require__("24e2");

var isDate = function isDate(obj) {
  return obj instanceof Date;
}; // Assumes both a and b are arrays!
// Handles when arrays are "sparse" (array.every(...) doesn't handle sparse)


var compareArrays = function compareArrays(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  var equal = true;

  for (var i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b[i]);
  }

  return equal;
};
/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 * Returns boolean true or false
 */


var looseEqual = function looseEqual(a, b) {
  if (a === b) {
    return true;
  }

  var aValidType = isDate(a);
  var bValidType = isDate(b);

  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }

  aValidType = (0, _array.isArray)(a);
  bValidType = (0, _array.isArray)(b);

  if (aValidType || bValidType) {
    return aValidType && bValidType ? compareArrays(a, b) : false;
  }

  aValidType = (0, _object.isObject)(a);
  bValidType = (0, _object.isObject)(b);

  if (aValidType || bValidType) {
    /* istanbul ignore if: this if will probably never be called */
    if (!aValidType || !bValidType) {
      return false;
    }

    var aKeysCount = (0, _object.keys)(a).length;
    var bKeysCount = (0, _object.keys)(b).length;

    if (aKeysCount !== bKeysCount) {
      return false;
    }

    for (var key in a) {
      var aHasKey = a.hasOwnProperty(key);
      var bHasKey = b.hasOwnProperty(key);

      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
        return false;
      }
    }
  }

  return String(a) === String(b);
};

var _default = looseEqual;
exports.default = _default;

/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9c6c":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("2b4c")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("32e9")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9c6f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _vueFunctionalDataMerge = __webpack_require__("b42e");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// @vue/component
var _default = {
  name: 'BSpinner',
  functional: true,
  props: {
    type: {
      type: String,
      default: 'border' // SCSS currently supports 'border' or 'grow'

    },
    label: {
      type: String,
      default: null
    },
    variant: {
      type: String,
      default: null
    },
    small: {
      type: Boolean,
      default: false
    },
    role: {
      type: String,
      default: 'status'
    },
    tag: {
      type: String,
      default: 'span'
    }
  },
  render: function render(h, _ref) {
    var _class;

    var props = _ref.props,
        data = _ref.data,
        slots = _ref.slots;
    var label = h(false);
    var hasLabel = slots().label || props.label;

    if (hasLabel) {
      label = h('span', {
        staticClass: 'sr-only'
      }, hasLabel);
    }

    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      attrs: {
        role: hasLabel ? props.role || 'status' : null,
        'aria-hidden': hasLabel ? null : 'true'
      },
      class: (_class = {}, _defineProperty(_class, "spinner-".concat(props.type), Boolean(props.type)), _defineProperty(_class, "spinner-".concat(props.type, "-sm"), props.small), _defineProperty(_class, "text-".concat(props.variant), Boolean(props.variant)), _class)
    }), [label]);
  }
};
exports.default = _default;

/***/ }),

/***/ "9c97":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _object = __webpack_require__("24e2");

var _array = __webpack_require__("bb2f");

var _identity = __webpack_require__("fccc");

/**
 * Given an array of properties or an object of property keys,
 * plucks all the values off the target object, returning a new object
 * that has props that reference the original prop values
 *
 * @param {{}|string[]} keysToPluck
 * @param {{}} objToPluck
 * @param {Function} transformFn
 * @return {{}}
 */
var pluckProps = function pluckProps(keysToPluck, objToPluck) {
  var transformFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _identity.default;
  return ((0, _array.isArray)(keysToPluck) ? keysToPluck.slice() : (0, _object.keys)(keysToPluck)).reduce(function (memo, prop) {
    memo[transformFn(prop)] = objToPluck[prop];
    return memo;
  }, {});
};

var _default = pluckProps;
exports.default = _default;

/***/ }),

/***/ "9d25":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.commonProps = void 0;

var _vueFunctionalDataMerge = __webpack_require__("b42e");

var _inputGroupText = __webpack_require__("df74");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var commonProps = {
  id: {
    type: String,
    default: null
  },
  tag: {
    type: String,
    default: 'div'
  },
  isText: {
    type: Boolean,
    default: false
  } // @vue/component

};
exports.commonProps = commonProps;
var _default = {
  name: 'BInputGroupAddon',
  functional: true,
  props: _objectSpread({}, commonProps, {
    append: {
      type: Boolean,
      default: false
    }
  }),
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      class: {
        'input-group-append': props.append,
        'input-group-prepend': !props.append
      },
      attrs: {
        id: props.id
      }
    }), props.isText ? [h(_inputGroupText.default, children)] : children);
  }
};
exports.default = _default;

/***/ }),

/***/ "9d37":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _container = __webpack_require__("1520");

var _row = __webpack_require__("5d69");

var _col = __webpack_require__("7d02");

var _formRow = __webpack_require__("1665");

var _plugins = __webpack_require__("0a8d");

var components = {
  BContainer: _container.default,
  BRow: _row.default,
  BCol: _col.default,
  BFormRow: _formRow.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "9d3f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _vueFunctionalDataMerge = __webpack_require__("b42e");

var _default = {
  name: 'BDropdownText',
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'p'
    }
  },
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      props: props,
      staticClass: 'b-dropdown-text'
    }), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "9de7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/**
 * Returns vNodes for named slot either scoped or unscoped
 *
 * @param {String} name
 * @param {String} scope
 * @param {Object} scopedSlots
 * @param {Object} slots
 * @returns {Array|undefined} vNodes
 */
var normalizeSlot = function normalizeSlot(name) {
  var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var $scopedSlots = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var $slots = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  // Note: in Vue 2.6.x, all names slots are also scoped slots
  var slot = $scopedSlots[name] || $slots[name];
  return typeof slot === 'function' ? slot(scope) : slot;
};

var _default = normalizeSlot;
exports.default = _default;

/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "9e25":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _alert = __webpack_require__("23f0");

var _plugins = __webpack_require__("0a8d");

var components = {
  BAlert: _alert.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "9e3e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _vueFunctionalDataMerge = __webpack_require__("b42e");

var _inputGroupAddon = __webpack_require__("9d25");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// @vue/component
var _default = {
  name: 'BInputGroupPrepend',
  functional: true,
  props: _inputGroupAddon.commonProps,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    // pass all our props/attrs down to child, and set`append` to false
    return h(_inputGroupAddon.default, (0, _vueFunctionalDataMerge.mergeData)(data, {
      props: _objectSpread({}, props, {
        append: false
      })
    }), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "9e84":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__("b42e");

var _prefixPropName = __webpack_require__("e109");

var _unprefixPropName = __webpack_require__("12b6");

var _copyProps = __webpack_require__("0942");

var _pluckProps = __webpack_require__("9c97");

var _cardMixin = __webpack_require__("45f0");

var _cardBody = __webpack_require__("b967");

var _cardHeader = __webpack_require__("1fae");

var _cardFooter = __webpack_require__("6f77");

var _cardImg = __webpack_require__("23c9");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var cardImgProps = (0, _copyProps.default)(_cardImg.props, _prefixPropName.default.bind(null, 'img'));
cardImgProps.imgSrc.required = false;

var props = _objectSpread({}, _cardBody.props, _cardHeader.props, _cardFooter.props, cardImgProps, (0, _copyProps.default)(_cardMixin.default.props), {
  align: {
    type: String,
    default: null
  },
  noBody: {
    type: Boolean,
    default: false
  } // @vue/component

});

exports.props = props;
var _default = {
  name: 'BCard',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var _class;

    var props = _ref.props,
        data = _ref.data,
        slots = _ref.slots;
    var $slots = slots(); // Create placeholder elements for each section

    var imgFirst = h(false);
    var header = h(false);
    var content = h(false);
    var footer = h(false);
    var imgLast = h(false);

    if (props.imgSrc) {
      var img = h(_cardImg.default, {
        props: (0, _pluckProps.default)(cardImgProps, props, _unprefixPropName.default.bind(null, 'img'))
      });

      if (props.imgBottom) {
        imgLast = img;
      } else {
        imgFirst = img;
      }
    }

    if (props.header || $slots.header) {
      header = h(_cardHeader.default, {
        props: (0, _pluckProps.default)(_cardHeader.props, props)
      }, $slots.header);
    }

    if (props.noBody) {
      content = $slots.default || [];
    } else {
      // Wrap content in card-body
      content = [h(_cardBody.default, {
        props: (0, _pluckProps.default)(_cardBody.props, props)
      }, $slots.default)];
    }

    if (props.footer || $slots.footer) {
      footer = h(_cardFooter.default, {
        props: (0, _pluckProps.default)(_cardFooter.props, props)
      }, $slots.footer);
    }

    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'card',
      class: (_class = {
        'flex-row': props.imgLeft || props.imgStart,
        'flex-row-reverse': (props.imgRight || props.imgEnd) && !(props.imgLeft || props.imgStart)
      }, _defineProperty(_class, "text-".concat(props.align), Boolean(props.align)), _defineProperty(_class, "bg-".concat(props.bgVariant), Boolean(props.bgVariant)), _defineProperty(_class, "border-".concat(props.borderVariant), Boolean(props.borderVariant)), _defineProperty(_class, "text-".concat(props.textVariant), Boolean(props.textVariant)), _class)
    }), [imgFirst, header].concat(_toConsumableArray(content), [footer, imgLast]));
  }
};
exports.default = _default;

/***/ }),

/***/ "a05c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _formTextarea = __webpack_require__("0c40");

var _plugins = __webpack_require__("0a8d");

var components = {
  BFormTextarea: _formTextarea.default,
  BTextarea: _formTextarea.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "a07b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _form = __webpack_require__("0596");

var _vueFunctionalDataMerge = __webpack_require__("b42e");

// @vue/component
var _default = {
  name: 'BNavForm',
  functional: true,
  props: {
    id: {
      type: String,
      default: null
    }
  },
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(_form.default, (0, _vueFunctionalDataMerge.mergeData)(data, {
      attrs: {
        id: props.id
      },
      props: {
        inline: true
      }
    }), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "a198":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _formRow = __webpack_require__("1665");

var _default = _formRow.default;
exports.default = _default;

/***/ }),

/***/ "a212":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _id = __webpack_require__("eae0");

var _dom = __webpack_require__("1611");

// @vue/component
var _default2 = {
  name: 'BTab',
  mixins: [_id.default],
  inject: {
    bvTabs: {
      default: function _default() {
        return {
          // Don't set a tab index if not rendered inside `<b-tabs>`
          noKeyNav: true
        };
      }
    }
  },
  props: {
    active: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: 'div'
    },
    buttonId: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    titleItemClass: {
      // Sniffed by tabs.js and added to nav 'li.nav-item'
      type: [String, Array, Object],
      default: null
    },
    titleLinkClass: {
      // Sniffed by tabs.js and added to nav 'a.nav-link'
      type: [String, Array, Object],
      default: null
    },
    headHtml: {
      // Is this actually ever used?
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    noBody: {
      type: Boolean,
      default: false
    },
    href: {
      // This should be deprecated, as tabs are not navigation (URL) based
      // <b-nav> + <b-card> + <router-view>/<nuxt-child> should be used instead
      // And we dont support router-links here
      type: String,
      default: '#'
    },
    lazy: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      localActive: this.active && !this.disabled,
      show: false
    };
  },
  computed: {
    tabClasses: function tabClasses() {
      return [this.bvTabs.card && !this.noBody ? 'card-body' : '', this.show ? 'show' : '', this.computedFade ? 'fade' : '', this.disabled ? 'disabled' : '', this.localActive ? 'active' : ''];
    },
    controlledBy: function controlledBy() {
      return this.buttonId || this.safeId('__BV_tab_button__');
    },
    computedFade: function computedFade() {
      return this.bvTabs.fade || false;
    },
    computedLazy: function computedLazy() {
      return this.bvTabs.lazy || this.lazy;
    },
    _isTab: function _isTab() {
      // For parent sniffing of child
      return true;
    }
  },
  watch: {
    localActive: function localActive(newVal, oldVal) {
      // Make 'active' prop work with `.sync` modifier
      this.$emit('update:active', newVal);
    },
    active: function active(newVal, oldVal) {
      if (newVal !== oldVal) {
        if (newVal) {
          // If activated post mount
          this.activate();
        } else {
          if (!this.deactivate()) {
            // Tab couldn't be deactivated, so we reset the synced active prop
            // Deactivation will fail if no other tabs to activate.
            this.$emit('update:active', this.localActive);
          }
        }
      }
    },
    disabled: function disabled(newVal, oldVal) {
      if (newVal !== oldVal) {
        if (newVal && this.localActive && this.bvTabs.firstTab) {
          this.localActive = false;
          this.bvTabs.firstTab();
        }
      }
    }
  },
  mounted: function mounted() {
    // Initially show on mount if active and not disabled
    this.show = this.localActive;
  },
  updated: function updated() {
    // Force the tab button content to update (since slots are not reactive)
    // Only done if we have a title slot, as the title prop is reactive
    if (this.$slots.title && this.bvTabs.updateButton) {
      this.bvTabs.updateButton(this);
    }
  },
  methods: {
    // Transition handlers
    beforeEnter: function beforeEnter() {
      var _this = this;

      // change opacity (add 'show' class) 1 frame after display
      // otherwise css transition won't happen
      (0, _dom.requestAF)(function () {
        _this.show = true;
      });
    },
    beforeLeave: function beforeLeave() {
      // Remove the 'show' class
      this.show = false;
    },
    // Public methods
    activate: function activate() {
      if (this.bvTabs.activateTab && !this.disabled) {
        return this.bvTabs.activateTab(this);
      } else {
        // Not inside a b-tabs component or tab is disabled
        return false;
      }
    },
    deactivate: function deactivate() {
      if (this.bvTabs.deactivateTab && this.localActive) {
        return this.bvTabs.deactivateTab(this);
      } else {
        // Not inside a b-tabs component or not active to begin with
        return false;
      }
    }
  },
  render: function render(h) {
    var content = h(this.tag, {
      ref: 'panel',
      staticClass: 'tab-pane',
      class: this.tabClasses,
      directives: [// TODO: convert to style object in render
      {
        name: 'show',
        rawName: 'v-show',
        value: this.localActive,
        expression: 'localActive'
      }],
      attrs: {
        role: 'tabpanel',
        id: this.safeId(),
        tabindex: this.localActive && !this.bvTabs.noKeyNav ? '0' : null,
        'aria-hidden': this.localActive ? 'false' : 'true',
        'aria-expanded': this.localActive ? 'true' : 'false',
        'aria-labelledby': this.controlledBy || null
      }
    }, // Render content lazily if requested
    [this.localActive || !this.computedLazy ? this.$slots.default : h(false)]);
    return h('transition', {
      props: {
        mode: 'out-in',
        // Disable use of built-in transition classes
        'enter-class': '',
        'enter-active-class': '',
        'enter-to-class': '',
        'leave-class': '',
        'leave-active-class': '',
        'leave-to-class': ''
      },
      on: {
        beforeEnter: this.beforeEnter,
        beforeLeave: this.beforeLeave
      }
    }, [content]);
  }
};
exports.default = _default2;

/***/ }),

/***/ "a306":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _stringifyRecordValues = __webpack_require__("3b14");

var _looseEqual = __webpack_require__("96cd");

var _warn = __webpack_require__("93e0");

var DEPRECATION_MSG = 'Supplying a function to prop "filter" is deprecated. Use "filter-function" instead.';
var _default = {
  props: {
    filter: {
      // Pasing a function to filter is deprecated and should be avoided
      type: [String, RegExp, Object, Array, Function],
      default: null,
      deprecated: DEPRECATION_MSG
    },
    filterFunction: {
      type: Function,
      default: null
    }
  },
  data: function data() {
    return {
      // Flag for displaying which empty slot to show, and for some event triggering.
      isFiltered: false
    };
  },
  computed: {
    localFiltering: function localFiltering() {
      return this.hasProvider ? !!this.noProviderFiltering : true;
    },
    filteredCheck: function filteredCheck() {
      // For watching changes to filteredItems vs localItems
      return {
        filteredItems: this.filteredItems,
        localItems: this.localItems,
        localFilter: this.localFilter
      };
    },
    localFilter: function localFilter() {
      // Returns a sanitized/normalized version of filter prop
      if (typeof this.filter === 'function') {
        // this.localFilterFn will contain the correct function ref.
        // Deprecate setting prop filter to a function

        /* istanbul ignore next */
        return '';
      } else if (typeof this.filterFunction !== 'function' && !(typeof this.filter === 'string' || this.filter instanceof RegExp)) {
        // Using internal filter function, which only accepts string or regexp at the moment
        return '';
      } else {
        // Could be a string, object or array, as needed by external filter function
        return this.filter;
      }
    },
    localFilterFn: function localFilterFn() {
      var filter = this.filter;
      var filterFn = this.filterFunction; // Sanitized/normalize filter-function prop

      if (typeof filterFn === 'function') {
        return filterFn;
      } else if (typeof filter === 'function') {
        // Deprecate setting prop filter to a function

        /* istanbul ignore next */
        (0, _warn.default)("b-table: ".concat(DEPRECATION_MSG));
        /* istanbul ignore next */

        return filter;
      } else {
        // no filterFunction, so signal to use internal filter function
        return null;
      }
    },
    filteredItems: function filteredItems() {
      // Returns the records in localItems that match the filter criteria.
      // Returns the original localItems array if not sorting
      var items = this.localItems || [];
      var criteria = this.localFilter;
      var filterFn = this.filterFnFactory(this.localFilterFn, criteria) || this.defaultFilterFnFactory(criteria); // We only do local filtering if requested, and if the are records to filter and
      // if a filter criteria was specified

      if (this.localFiltering && filterFn && items.length > 0) {
        items = items.filter(filterFn);
      }

      return items;
    }
  },
  watch: {
    // Watch for changes to the filter criteria and filtered items vs localItems).
    // And set visual state and emit events as required
    filteredCheck: function filteredCheck(_ref) {
      var filteredItems = _ref.filteredItems,
          localItems = _ref.localItems,
          localFilter = _ref.localFilter;
      // Determine if the dataset is filtered or not
      var isFiltered;

      if (!localFilter) {
        // If filter criteria is falsey
        isFiltered = false;
      } else if ((0, _looseEqual.default)(localFilter, []) || (0, _looseEqual.default)(localFilter, {})) {
        // If filter criteria is an empty array or object
        isFiltered = false;
      } else if (localFilter) {
        // if Filter criteria is truthy
        isFiltered = true;
      } else {
        /* istanbul ignore next: rare chance of reaching this else */
        isFiltered = false;
      }

      if (isFiltered) {
        this.$emit('filtered', filteredItems, filteredItems.length);
      }

      this.isFiltered = isFiltered;
    },
    isFiltered: function isFiltered(newVal, oldVal) {
      if (newVal === false && oldVal === true) {
        // We need to emit a filtered event if isFiltered transitions from true to
        // false so that users can update their pagination controls.
        this.$emit('filtered', this.localItems, this.localItems.length);
      }
    }
  },
  created: function created() {
    var _this = this;

    // Set the initial filtered state.
    // In a nextTick so that we trigger a filtered event if needed
    this.$nextTick(function () {
      _this.isFiltered = Boolean(_this.localFilter);
    });
  },
  methods: {
    // Filter Function factories
    filterFnFactory: function filterFnFactory(filterFn, criteria) {
      // Wrapper factory for external filter functions.
      // Wrap the provided filter-function and return a new function.
      // Returns null if no filter-function defined or if criteria is falsey.
      // Rather than directly grabbing this.computedLocalFilterFn or this.filterFunction
      // we have it passed, so that the caller computed prop will be reactive to changes
      // in the original filter-function (as this routine is a method)
      if (!filterFn || typeof filterFn !== 'function' || !criteria || (0, _looseEqual.default)(criteria, []) || (0, _looseEqual.default)(criteria, {})) {
        return null;
      } // Build the wrapped filter test function, passing the criteria to the provided function


      var fn = function fn(item) {
        // Generated function returns true if the criteria matches part
        // of the serialized data, otherwise false
        return filterFn(item, criteria);
      }; // Return the wrapped function


      return fn;
    },
    defaultFilterFnFactory: function defaultFilterFnFactory(criteria) {
      // Generates the default filter function, using the given filter criteria
      if (!criteria || !(typeof criteria === 'string' || criteria instanceof RegExp)) {
        // Built in filter can only support strings or RegExp criteria (at the moment)
        return null;
      } // Build the regexp needed for filtering


      var regexp = criteria;

      if (typeof regexp === 'string') {
        // Escape special RegExp characters in the string and convert contiguous
        // whitespace to \s+ matches
        var pattern = criteria.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&').replace(/[\s\uFEFF\xA0]+/g, '\\s+'); // Build the RegExp (no need for global flag, as we only need
        // to find the value once in the string)

        regexp = new RegExp(".*".concat(pattern, ".*"), 'i');
      } // Generate the wrapped filter test function to use


      var fn = function fn(item) {
        // This searches all row values (and sub property values) in the entire (excluding
        // special _ prefixed keys), because we convert the record to a space-separated
        // string containing all the value properties (recursively), even ones that are
        // not visible (not specified in this.fields).
        //
        // TODO: Enable searching on formatted fields and scoped slots
        // TODO: Should we filter only on visible fields (i.e. ones in this.fields) by default?
        // TODO: Allow for searching on specific fields/key, this could be combined with the previous TODO
        // TODO: Give stringifyRecordValues extra options for filtering (i.e. passing the
        //       fields definition and a reference to $scopedSlots)
        //
        // Generated function returns true if the criteria matches part of
        // the serialized data, otherwise false
        // We set lastIndex = 0 on regex in case someone uses the /g global flag
        regexp.lastIndex = 0;
        return regexp.test((0, _stringifyRecordValues.default)(item));
      }; // Return the generated function


      return fn;
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "a4bb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("8aae");

/***/ }),

/***/ "a4c0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a596":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _dom = __webpack_require__("1611");

var _env = __webpack_require__("4565");

var _target = __webpack_require__("f347");

// Target listen types
var listenTypes = {
  click: true // Property key for handler storage

};
var BV_TOGGLE = '__BV_toggle__';
var BV_TOGGLE_STATE = '__BV_toggle_STATE__';
var BV_TOGGLE_CONTROLS = '__BV_toggle_CONTROLS__'; // Emitted control event for collapse (emitted to collapse)

var EVENT_TOGGLE = 'bv::toggle::collapse'; // Listen to event for toggle state update (emitted by collapse)

var EVENT_STATE = 'bv::collapse::state'; // Reset and remove a property from the provided element

var resetProp = function resetProp(el, prop) {
  el[prop] = null;
  delete el[prop];
}; // Handle directive updates

/* istanbul ignore next: not easy to test */


var handleUpdate = function handleUpdate(el, binding, vnode) {
  if (!_env.inBrowser) {
    return;
  } // Ensure the collapse class and aria-* attributes persist
  // after element is updated (either by parent re-rendering
  // or changes to this element or it's contents


  if (el[BV_TOGGLE_STATE] === true) {
    (0, _dom.addClass)(el, 'collapsed');
    (0, _dom.setAttr)(el, 'aria-expanded', 'true');
  } else if (el[BV_TOGGLE_STATE] === false) {
    (0, _dom.removeClass)(el, 'collapsed');
    (0, _dom.setAttr)(el, 'aria-expanded', 'false');
  }

  (0, _dom.setAttr)(el, 'aria-controls', el[BV_TOGGLE_CONTROLS]);
};
/*
 * Export our directive
 */


var _default = {
  bind: function bind(el, binding, vnode) {
    var targets = (0, _target.bindTargets)(vnode, binding, listenTypes, function (_ref) {
      var targets = _ref.targets,
          vnode = _ref.vnode;
      targets.forEach(function (target) {
        vnode.context.$root.$emit(EVENT_TOGGLE, target);
      });
    });

    if (_env.inBrowser && vnode.context && targets.length > 0) {
      // Add aria attributes to element
      el[BV_TOGGLE_CONTROLS] = targets.join(' '); // State is initially collapsed until we receive a state event

      el[BV_TOGGLE_STATE] = false;
      (0, _dom.setAttr)(el, 'aria-controls', el[BV_TOGGLE_CONTROLS]);
      (0, _dom.setAttr)(el, 'aria-expanded', 'false'); // If element is not a button, we add `role="button"` for accessibility

      if (el.tagName !== 'BUTTON') {
        (0, _dom.setAttr)(el, 'role', 'button');
      } // Toggle state handler, stored on element


      el[BV_TOGGLE] = function toggleDirectiveHandler(id, state) {
        if (targets.indexOf(id) !== -1) {
          // Set aria-expanded state
          (0, _dom.setAttr)(el, 'aria-expanded', state ? 'true' : 'false'); // Set/Clear 'collapsed' class state

          el[BV_TOGGLE_STATE] = state;

          if (state) {
            (0, _dom.removeClass)(el, 'collapsed');
          } else {
            (0, _dom.addClass)(el, 'collapsed');
          }
        }
      }; // Listen for toggle state changes


      vnode.context.$root.$on(EVENT_STATE, el[BV_TOGGLE]);
    }
  },
  componentUpdated: handleUpdate,
  updated: handleUpdate,
  unbind: function unbind(el, binding, vnode)
  /* istanbul ignore next */
  {
    (0, _target.unbindTargets)(vnode, binding, listenTypes); // Remove our $root listener

    if (el[BV_TOGGLE]) {
      vnode.context.$root.$off(EVENT_STATE, el[BV_TOGGLE]);
    } // Reset custom  props


    resetProp(el, BV_TOGGLE);
    resetProp(el, BV_TOGGLE_STATE);
    resetProp(el, BV_TOGGLE_CONTROLS); // Reset classes/attrs

    (0, _dom.removeClass)(el, 'collapsed');
    (0, _dom.removeAttr)(el, 'aria-expanded');
    (0, _dom.removeAttr)(el, 'aria-controls');
    (0, _dom.removeAttr)(el, 'role');
  }
};
exports.default = _default;

/***/ }),

/***/ "a60a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _formFile = __webpack_require__("07b5");

var _plugins = __webpack_require__("0a8d");

var components = {
  BFormFile: _formFile.default,
  BFile: _formFile.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "a85f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _observeDom = __webpack_require__("bf9c");

var _keyCodes = __webpack_require__("06e4");

var _noop = __webpack_require__("cab0");

var _dom = __webpack_require__("1611");

var _env = __webpack_require__("4565");

var _id = __webpack_require__("eae0");

// Slide directional classes
var DIRECTION = {
  next: {
    dirClass: 'carousel-item-left',
    overlayClass: 'carousel-item-next'
  },
  prev: {
    dirClass: 'carousel-item-right',
    overlayClass: 'carousel-item-prev'
  } // Fallback Transition duration (with a little buffer) in ms

};
var TRANS_DURATION = 600 + 50; // Time for mouse compat events to fire after touch

var TOUCH_EVENT_COMPAT_WAIT = 500; // Number of pixels to consider touch move a swipe

var SWIPE_THRESHOLD = 40; // PointerEvent pointer types

var PointerType = {
  TOUCH: 'touch',
  PEN: 'pen' // Transition Event names

};
var TransitionEndEvents = {
  WebkitTransition: 'webkitTransitionEnd',
  MozTransition: 'transitionend',
  OTransition: 'otransitionend oTransitionEnd',
  transition: 'transitionend'
};
var EventOptions = {
  passive: true,
  capture: false // Return the browser specific transitionEnd event name

};

function getTransitionEndEvent(el) {
  for (var name in TransitionEndEvents) {
    if (el.style[name] !== undefined) {
      return TransitionEndEvents[name];
    }
  } // fallback

  /* istanbul ignore next */


  return null;
} // @vue/component


var _default = {
  name: 'BCarousel',
  mixins: [_id.default],
  provide: function provide() {
    return {
      bvCarousel: this
    };
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    labelPrev: {
      type: String,
      default: 'Previous Slide'
    },
    labelNext: {
      type: String,
      default: 'Next Slide'
    },
    labelGotoSlide: {
      type: String,
      default: 'Goto Slide'
    },
    labelIndicators: {
      type: String,
      default: 'Select a slide to display'
    },
    interval: {
      type: Number,
      default: 5000
    },
    indicators: {
      type: Boolean,
      default: false
    },
    controls: {
      type: Boolean,
      default: false
    },
    noAnimation: {
      // Disable slide/fade animation
      type: Boolean,
      default: false
    },
    fade: {
      // Enable cross-fade animation instead of slide animation
      type: Boolean,
      default: false
    },
    noTouch: {
      // Sniffed by carousel-slide
      type: Boolean,
      default: false
    },
    noHoverPause: {
      // Disable pause on hover
      type: Boolean,
      default: false
    },
    imgWidth: {
      // Sniffed by carousel-slide
      type: [Number, String] // default: undefined

    },
    imgHeight: {
      // Sniffed by carousel-slide
      type: [Number, String] // default: undefined

    },
    background: {
      type: String // default: undefined

    },
    value: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      index: this.value || 0,
      isSliding: false,
      transitionEndEvent: null,
      slides: [],
      direction: null,
      isPaused: !(parseInt(this.interval, 10) > 0),
      // Touch event handling values
      touchStartX: 0,
      touchDeltaX: 0
    };
  },
  watch: {
    value: function value(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.setSlide(newVal);
      }
    },
    interval: function interval(newVal, oldVal) {
      if (newVal === oldVal) {
        /* istanbul ignore next */
        return;
      }

      if (!newVal) {
        // Pausing slide show
        this.pause(false);
      } else {
        // Restarting or Changing interval
        this.pause(true);
        this.start(false);
      }
    },
    isPaused: function isPaused(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.$emit(newVal ? 'paused' : 'unpaused');
      }
    },
    index: function index(to, from) {
      if (to === from || this.isSliding) {
        /* istanbul ignore next */
        return;
      }

      this.doSlide(to, from);
    }
  },
  created: function created() {
    // Create private non-reactive props
    this._intervalId = null;
    this._animationTimeout = null;
    this._touchTimeout = null; // Set initial paused state

    this.isPaused = !(parseInt(this.interval, 10) > 0);
  },
  mounted: function mounted() {
    // Cache current browser transitionend event name
    this.transitionEndEvent = getTransitionEndEvent(this.$el) || null; // Get all slides

    this.updateSlides(); // Observe child changes so we can update slide list

    (0, _observeDom.default)(this.$refs.inner, this.updateSlides.bind(this), {
      subtree: false,
      childList: true,
      attributes: true,
      attributeFilter: ['id']
    });
  },
  beforeDestroy: function beforeDestroy()
  /* istanbul ignore next: difficult to test */
  {
    clearTimeout(this._animationTimeout);
    clearTimeout(this._touchTimeout);
    clearInterval(this._intervalId);
    this._intervalId = null;
    this._animationTimeout = null;
    this._touchTimeout = null;
  },
  methods: {
    // Set slide
    setSlide: function setSlide(slide) {
      var _this = this;

      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      // Don't animate when page is not visible

      /* istanbul ignore if: difficult to test */
      if (_env.inBrowser && document.visibilityState && document.hidden) {
        return;
      }

      var len = this.slides.length; // Don't do anything if nothing to slide to

      if (len === 0) {
        return;
      } // Don't change slide while transitioning, wait until transition is done


      if (this.isSliding) {
        // Schedule slide after sliding complete
        this.$once('sliding-end', function () {
          return _this.setSlide(slide, direction);
        });
        return;
      }

      this.direction = direction; // Make sure we have an integer (you never know!)

      slide = Math.floor(slide); // Set new slide index. Wrap around if necessary

      this.index = slide >= len ? 0 : slide >= 0 ? slide : len - 1;
    },
    // Previous slide
    prev: function prev() {
      this.setSlide(this.index - 1, 'prev');
    },
    // Next slide
    next: function next() {
      this.setSlide(this.index + 1, 'next');
    },
    // Pause auto rotation
    pause: function pause(evt) {
      if (!evt) {
        this.isPaused = true;
      }

      if (this._intervalId) {
        clearInterval(this._intervalId);
        this._intervalId = null;
      }
    },
    // Start auto rotate slides
    start: function start(evt) {
      if (!evt) {
        this.isPaused = false;
      }
      /* istanbul ignore next: most likely will never happen, but just in case */


      if (this._intervalId) {
        clearInterval(this._intervalId);
        this._intervalId = null;
      } // Don't start if no interval, or less than 2 slides


      if (this.interval && this.slides.length > 1) {
        this._intervalId = setInterval(this.next, Math.max(1000, this.interval));
      }
    },
    // Restart auto rotate slides when focus/hover leaves the carousel
    restart: function restart(evt) {
      /* istanbul ignore if: difficult to test */
      if (!this.$el.contains(document.activeElement)) {
        this.start();
      }
    },
    doSlide: function doSlide(to, from) {
      var _this2 = this;

      var isCycling = Boolean(this.interval); // Determine sliding direction

      var direction = this.calcDirection(this.direction, from, to);
      var overlayClass = direction.overlayClass;
      var dirClass = direction.dirClass; // Determine current and next slides

      var currentSlide = this.slides[from];
      var nextSlide = this.slides[to]; // Don't do anything if there aren't any slides to slide to

      if (!currentSlide || !nextSlide) {
        /* istanbul ignore next */
        return;
      } // Start animating


      this.isSliding = true;

      if (isCycling) {
        this.pause(false);
      }

      this.$emit('sliding-start', to); // Update v-model

      this.$emit('input', this.index);

      if (this.noAnimation) {
        (0, _dom.addClass)(nextSlide, 'active');
        (0, _dom.removeClass)(currentSlide, 'active');
        this.isSliding = false; // Notify ourselves that we're done sliding (slid)

        this.$nextTick(function () {
          return _this2.$emit('sliding-end', to);
        });
      } else {
        (0, _dom.addClass)(nextSlide, overlayClass); // Trigger a reflow of next slide

        (0, _dom.reflow)(nextSlide);
        (0, _dom.addClass)(currentSlide, dirClass);
        (0, _dom.addClass)(nextSlide, dirClass); // Transition End handler

        var called = false;
        /* istanbul ignore next: difficult to test */

        var onceTransEnd = function onceTransEnd(evt) {
          if (called) {
            return;
          }

          called = true;
          /* istanbul ignore if: transition events cant be tested in JSDOM */

          if (_this2.transitionEndEvent) {
            var events = _this2.transitionEndEvent.split(/\s+/);

            events.forEach(function (evt) {
              return (0, _dom.eventOff)(currentSlide, evt, onceTransEnd, EventOptions);
            });
          }

          _this2._animationTimeout = null;
          (0, _dom.removeClass)(nextSlide, dirClass);
          (0, _dom.removeClass)(nextSlide, overlayClass);
          (0, _dom.addClass)(nextSlide, 'active');
          (0, _dom.removeClass)(currentSlide, 'active');
          (0, _dom.removeClass)(currentSlide, dirClass);
          (0, _dom.removeClass)(currentSlide, overlayClass);
          (0, _dom.setAttr)(currentSlide, 'aria-current', 'false');
          (0, _dom.setAttr)(nextSlide, 'aria-current', 'true');
          (0, _dom.setAttr)(currentSlide, 'aria-hidden', 'true');
          (0, _dom.setAttr)(nextSlide, 'aria-hidden', 'false');
          _this2.isSliding = false;
          _this2.direction = null; // Notify ourselves that we're done sliding (slid)

          _this2.$nextTick(function () {
            return _this2.$emit('sliding-end', to);
          });
        }; // Set up transitionend handler

        /* istanbul ignore if: transition events cant be tested in JSDOM */


        if (this.transitionEndEvent) {
          var events = this.transitionEndEvent.split(/\s+/);
          events.forEach(function (event) {
            return (0, _dom.eventOn)(currentSlide, event, onceTransEnd, EventOptions);
          });
        } // Fallback to setTimeout()


        this._animationTimeout = setTimeout(onceTransEnd, TRANS_DURATION);
      }

      if (isCycling) {
        this.start(false);
      }
    },
    // Update slide list
    updateSlides: function updateSlides() {
      this.pause(true); // Get all slides as DOM elements

      this.slides = (0, _dom.selectAll)('.carousel-item', this.$refs.inner);
      var numSlides = this.slides.length; // Keep slide number in range

      var index = Math.max(0, Math.min(Math.floor(this.index), numSlides - 1));
      this.slides.forEach(function (slide, idx) {
        var n = idx + 1;

        if (idx === index) {
          (0, _dom.addClass)(slide, 'active');
          (0, _dom.setAttr)(slide, 'aria-current', 'true');
        } else {
          (0, _dom.removeClass)(slide, 'active');
          (0, _dom.setAttr)(slide, 'aria-current', 'false');
        }

        (0, _dom.setAttr)(slide, 'aria-posinset', String(n));
        (0, _dom.setAttr)(slide, 'aria-setsize', String(numSlides));
      }); // Set slide as active

      this.setSlide(index);
      this.start(this.isPaused);
    },
    calcDirection: function calcDirection() {
      var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var curIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var nextIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      if (!direction) {
        return nextIndex > curIndex ? DIRECTION.next : DIRECTION.prev;
      }

      return DIRECTION[direction];
    },
    handleClick: function handleClick(evt, fn) {
      var keyCode = evt.keyCode;

      if (evt.type === 'click' || keyCode === _keyCodes.default.SPACE || keyCode === _keyCodes.default.ENTER) {
        evt.preventDefault();
        evt.stopPropagation();
        fn();
      }
    },
    handleSwipe: function handleSwipe()
    /* istanbul ignore next: JSDOM doesn't support touch events */
    {
      var absDeltaX = Math.abs(this.touchDeltaX);

      if (absDeltaX <= SWIPE_THRESHOLD) {
        return;
      }

      var direction = absDeltaX / this.touchDeltaX;

      if (direction > 0) {
        // Swipe left
        this.prev();
      } else if (direction < 0) {
        // Swipe right
        this.next();
      }
    },
    touchStart: function touchStart(evt)
    /* istanbul ignore next: JSDOM doesn't support touch events */
    {
      if (_env.hasPointerEvent && PointerType[evt.pointerType.toUpperCase()]) {
        this.touchStartX = evt.clientX;
      } else if (!_env.hasPointerEvent) {
        this.touchStartX = evt.touches[0].clientX;
      }
    },
    touchMove: function touchMove(evt)
    /* istanbul ignore next: JSDOM doesn't support touch events */
    {
      // Ensure swiping with one touch and not pinching
      if (evt.touches && evt.touches.length > 1) {
        this.touchDeltaX = 0;
      } else {
        this.touchDeltaX = evt.touches[0].clientX - this.touchStartX;
      }
    },
    touchEnd: function touchEnd(evt)
    /* istanbul ignore next: JSDOM doesn't support touch events */
    {
      if (_env.hasPointerEvent && PointerType[evt.pointerType.toUpperCase()]) {
        this.touchDeltaX = evt.clientX - this.touchStartX;
      }

      this.handleSwipe(); // If it's a touch-enabled device, mouseenter/leave are fired as
      // part of the mouse compatibility events on first tap - the carousel
      // would stop cycling until user tapped out of it;
      // here, we listen for touchend, explicitly pause the carousel
      // (as if it's the second time we tap on it, mouseenter compat event
      // is NOT fired) and after a timeout (to allow for mouse compatibility
      // events to fire) we explicitly restart cycling

      this.pause(false);

      if (this._touchTimeout) {
        clearTimeout(this._touchTimeout);
      }

      this._touchTimeout = setTimeout(this.start, TOUCH_EVENT_COMPAT_WAIT + Math.max(1000, this.interval));
    }
  },
  render: function render(h) {
    var _this3 = this;

    // Wrapper for slides
    var inner = h('div', {
      ref: 'inner',
      class: ['carousel-inner'],
      attrs: {
        id: this.safeId('__BV_inner_'),
        role: 'list'
      }
    }, [this.$slots.default]); // Prev and next controls

    var controls = h(false);

    if (this.controls) {
      controls = [h('a', {
        class: ['carousel-control-prev'],
        attrs: {
          href: '#',
          role: 'button',
          'aria-controls': this.safeId('__BV_inner_')
        },
        on: {
          click: function click(evt) {
            _this3.handleClick(evt, _this3.prev);
          },
          keydown: function keydown(evt) {
            _this3.handleClick(evt, _this3.prev);
          }
        }
      }, [h('span', {
        class: ['carousel-control-prev-icon'],
        attrs: {
          'aria-hidden': 'true'
        }
      }), h('span', {
        class: ['sr-only']
      }, [this.labelPrev])]), h('a', {
        class: ['carousel-control-next'],
        attrs: {
          href: '#',
          role: 'button',
          'aria-controls': this.safeId('__BV_inner_')
        },
        on: {
          click: function click(evt) {
            _this3.handleClick(evt, _this3.next);
          },
          keydown: function keydown(evt) {
            _this3.handleClick(evt, _this3.next);
          }
        }
      }, [h('span', {
        class: ['carousel-control-next-icon'],
        attrs: {
          'aria-hidden': 'true'
        }
      }), h('span', {
        class: ['sr-only']
      }, [this.labelNext])])];
    } // Indicators


    var indicators = h('ol', {
      class: ['carousel-indicators'],
      directives: [{
        name: 'show',
        rawName: 'v-show',
        value: this.indicators,
        expression: 'indicators'
      }],
      attrs: {
        id: this.safeId('__BV_indicators_'),
        'aria-hidden': this.indicators ? 'false' : 'true',
        'aria-label': this.labelIndicators,
        'aria-owns': this.safeId('__BV_inner_')
      }
    }, this.slides.map(function (slide, n) {
      return h('li', {
        key: "slide_".concat(n),
        class: {
          active: n === _this3.index
        },
        attrs: {
          role: 'button',
          id: _this3.safeId("__BV_indicator_".concat(n + 1, "_")),
          tabindex: _this3.indicators ? '0' : '-1',
          'aria-current': n === _this3.index ? 'true' : 'false',
          'aria-label': "".concat(_this3.labelGotoSlide, " ").concat(n + 1),
          'aria-describedby': _this3.slides[n].id || null,
          'aria-controls': _this3.safeId('__BV_inner_')
        },
        on: {
          click: function click(evt) {
            _this3.handleClick(evt, function () {
              _this3.setSlide(n);
            });
          },
          keydown: function keydown(evt) {
            _this3.handleClick(evt, function () {
              _this3.setSlide(n);
            });
          }
        }
      });
    }));
    var on = {
      mouseenter: this.noHoverPause ? _noop.default : this.pause,
      mouseleave: this.noHoverPause ? _noop.default : this.restart,
      focusin: this.pause,
      focusout: this.restart,
      keydown: function keydown(evt) {
        if (/input|textarea/i.test(evt.target.tagName)) {
          /* istanbul ignore next */
          return;
        }

        var keyCode = evt.keyCode;

        if (keyCode === _keyCodes.default.LEFT || keyCode === _keyCodes.default.RIGHT) {
          evt.preventDefault();
          evt.stopPropagation();

          _this3[keyCode === _keyCodes.default.LEFT ? 'prev' : 'next']();
        }
      } // Touch support event handlers for environment

    };

    if (!this.noTouch && _env.hasTouchSupport) {
      // Attach appropriate listeners (passive mode)

      /* istanbul ignore next: JSDOM doesn't support touch events */
      if (_env.hasPointerEvent) {
        on['&pointerdown'] = this.touchStart;
        on['&pointerup'] = this.touchEnd;
      } else {
        on['&touchstart'] = this.touchStart;
        on['&touchmove'] = this.touchMove;
        on['&touchend'] = this.touchEnd;
      }
    } // Return the carousel


    return h('div', {
      staticClass: 'carousel',
      class: {
        slide: !this.noAnimation,
        'carousel-fade': !this.noAnimation && this.fade,
        'pointer-event': !this.noTouch && _env.hasTouchSupport && _env.hasPointerEvent
      },
      style: {
        background: this.background
      },
      attrs: {
        role: 'region',
        id: this.safeId(),
        'aria-busy': this.isSliding ? 'true' : 'false'
      },
      on: on
    }, [inner, controls, indicators]);
  }
};
exports.default = _default;

/***/ }),

/***/ "a88f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _carousel = __webpack_require__("a85f");

var _carouselSlide = __webpack_require__("5106");

var _plugins = __webpack_require__("0a8d");

var components = {
  BCarousel: _carousel.default,
  BCarouselSlide: _carouselSlide.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "a99d":
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Keen UI v1.1.2 (https://github.com/JosephusPaye/keen-ui)
 * (c) 2019 Josephus Paye II
 * Released under the MIT License.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 254);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(8);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("c3ae284a", content, false);
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiTextbox_vue__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ac038220_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiTextbox_vue__ = __webpack_require__(197);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(220)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiTextbox_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ac038220_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiTextbox_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\UiTextbox.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiTextbox.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = Component.exports;


/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Autosize 3.0.20
	license: MIT
	http://www.jacklmoore.com/autosize
*/
(function (global, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else { var mod; }
})(this, function (exports, module) {
	'use strict';

	var map = typeof Map === "function" ? new Map() : (function () {
		var keys = [];
		var values = [];

		return {
			has: function has(key) {
				return keys.indexOf(key) > -1;
			},
			get: function get(key) {
				return values[keys.indexOf(key)];
			},
			set: function set(key, value) {
				if (keys.indexOf(key) === -1) {
					keys.push(key);
					values.push(value);
				}
			},
			'delete': function _delete(key) {
				var index = keys.indexOf(key);
				if (index > -1) {
					keys.splice(index, 1);
					values.splice(index, 1);
				}
			}
		};
	})();

	var createEvent = function createEvent(name) {
		return new Event(name, { bubbles: true });
	};
	try {
		new Event('test');
	} catch (e) {
		// IE does not support `new Event()`
		createEvent = function (name) {
			var evt = document.createEvent('Event');
			evt.initEvent(name, true, false);
			return evt;
		};
	}

	function assign(ta) {
		if (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || map.has(ta)) return;

		var heightOffset = null;
		var clientWidth = ta.clientWidth;
		var cachedHeight = null;

		function init() {
			var style = window.getComputedStyle(ta, null);

			if (style.resize === 'vertical') {
				ta.style.resize = 'none';
			} else if (style.resize === 'both') {
				ta.style.resize = 'horizontal';
			}

			if (style.boxSizing === 'content-box') {
				heightOffset = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
			} else {
				heightOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
			}
			// Fix when a textarea is not on document body and heightOffset is Not a Number
			if (isNaN(heightOffset)) {
				heightOffset = 0;
			}

			update();
		}

		function changeOverflow(value) {
			{
				// Chrome/Safari-specific fix:
				// When the textarea y-overflow is hidden, Chrome/Safari do not reflow the text to account for the space
				// made available by removing the scrollbar. The following forces the necessary text reflow.
				var width = ta.style.width;
				ta.style.width = '0px';
				// Force reflow:
				/* jshint ignore:start */
				ta.offsetWidth;
				/* jshint ignore:end */
				ta.style.width = width;
			}

			ta.style.overflowY = value;
		}

		function getParentOverflows(el) {
			var arr = [];

			while (el && el.parentNode && el.parentNode instanceof Element) {
				if (el.parentNode.scrollTop) {
					arr.push({
						node: el.parentNode,
						scrollTop: el.parentNode.scrollTop
					});
				}
				el = el.parentNode;
			}

			return arr;
		}

		function resize() {
			var originalHeight = ta.style.height;
			var overflows = getParentOverflows(ta);
			var docTop = document.documentElement && document.documentElement.scrollTop; // Needed for Mobile IE (ticket #240)

			ta.style.height = 'auto';

			var endHeight = ta.scrollHeight + heightOffset;

			if (ta.scrollHeight === 0) {
				// If the scrollHeight is 0, then the element probably has display:none or is detached from the DOM.
				ta.style.height = originalHeight;
				return;
			}

			ta.style.height = endHeight + 'px';

			// used to check if an update is actually necessary on window.resize
			clientWidth = ta.clientWidth;

			// prevents scroll-position jumping
			overflows.forEach(function (el) {
				el.node.scrollTop = el.scrollTop;
			});

			if (docTop) {
				document.documentElement.scrollTop = docTop;
			}
		}

		function update() {
			resize();

			var styleHeight = Math.round(parseFloat(ta.style.height));
			var computed = window.getComputedStyle(ta, null);
			var actualHeight = Math.round(parseFloat(computed.height));

			// The actual height not matching the style height (set via the resize method) indicates that
			// the max-height has been exceeded, in which case the overflow should be set to visible.
			if (actualHeight !== styleHeight) {
				if (computed.overflowY !== 'visible') {
					changeOverflow('visible');
					resize();
					actualHeight = Math.round(parseFloat(window.getComputedStyle(ta, null).height));
				}
			} else {
				// Normally keep overflow set to hidden, to avoid flash of scrollbar as the textarea expands.
				if (computed.overflowY !== 'hidden') {
					changeOverflow('hidden');
					resize();
					actualHeight = Math.round(parseFloat(window.getComputedStyle(ta, null).height));
				}
			}

			if (cachedHeight !== actualHeight) {
				cachedHeight = actualHeight;
				var evt = createEvent('autosize:resized');
				try {
					ta.dispatchEvent(evt);
				} catch (err) {
					// Firefox will throw an error on dispatchEvent for a detached element
					// https://bugzilla.mozilla.org/show_bug.cgi?id=889376
				}
			}
		}

		var pageResize = function pageResize() {
			if (ta.clientWidth !== clientWidth) {
				update();
			}
		};

		var destroy = (function (style) {
			window.removeEventListener('resize', pageResize, false);
			ta.removeEventListener('input', update, false);
			ta.removeEventListener('keyup', update, false);
			ta.removeEventListener('autosize:destroy', destroy, false);
			ta.removeEventListener('autosize:update', update, false);

			Object.keys(style).forEach(function (key) {
				ta.style[key] = style[key];
			});

			map['delete'](ta);
		}).bind(ta, {
			height: ta.style.height,
			resize: ta.style.resize,
			overflowY: ta.style.overflowY,
			overflowX: ta.style.overflowX,
			wordWrap: ta.style.wordWrap
		});

		ta.addEventListener('autosize:destroy', destroy, false);

		// IE9 does not fire onpropertychange or oninput for deletions,
		// so binding to onkeyup to catch most of those events.
		// There is no way that I know of to detect something like 'cut' in IE9.
		if ('onpropertychange' in ta && 'oninput' in ta) {
			ta.addEventListener('keyup', update, false);
		}

		window.addEventListener('resize', pageResize, false);
		ta.addEventListener('input', update, false);
		ta.addEventListener('autosize:update', update, false);
		ta.style.overflowX = 'hidden';
		ta.style.wordWrap = 'break-word';

		map.set(ta, {
			destroy: destroy,
			update: update
		});

		init();
	}

	function destroy(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.destroy();
		}
	}

	function update(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.update();
		}
	}

	var autosize = null;

	// Do nothing in Node.js environment and IE8 (or lower)
	if (typeof window === 'undefined' || typeof window.getComputedStyle !== 'function') {
		autosize = function (el) {
			return el;
		};
		autosize.destroy = function (el) {
			return el;
		};
		autosize.update = function (el) {
			return el;
		};
	} else {
		autosize = function (el, options) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], function (x) {
					return assign(x, options);
				});
			}
			return el;
		};
		autosize.destroy = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], destroy);
			}
			return el;
		};
		autosize.update = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], update);
			}
			return el;
		};
	}

	module.exports = autosize;
});

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directives_autofocus__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UiIcon_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_autosize__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_autosize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_autosize__);







/* harmony default export */ __webpack_exports__["a"] = {
    name: 'ui-textbox',

    props: {
        name: String,
        placeholder: String,
        tabindex: [String, Number],
        value: {
            type: [String, Number],
            default: ''
        },
        icon: String,
        iconPosition: {
            type: String,
            default: 'left' },
        label: String,
        floatingLabel: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: 'text' },
        multiLine: {
            type: Boolean,
            default: false
        },
        rows: {
            type: Number,
            default: 2
        },
        autocomplete: String,
        autofocus: {
            type: Boolean,
            default: false
        },
        autosize: {
            type: Boolean,
            default: true
        },
        min: Number,
        max: Number,
        step: {
            type: String,
            default: 'any'
        },
        maxlength: Number,
        enforceMaxlength: {
            type: Boolean,
            default: false
        },
        required: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        help: String,
        error: String,
        invalid: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },

    data: function data() {
        return {
            isActive: false,
            isTouched: false,
            initialValue: this.value,
            autosizeInitialized: false
        };
    },


    computed: {
        classes: function classes() {
            return ['ui-textbox--icon-position-' + this.iconPosition, { 'is-active': this.isActive }, { 'is-invalid': this.invalid }, { 'is-touched': this.isTouched }, { 'is-multi-line': this.multiLine }, { 'has-counter': this.maxlength }, { 'is-disabled': this.disabled }, { 'has-label': this.hasLabel }, { 'has-floating-label': this.hasFloatingLabel }];
        },
        labelClasses: function labelClasses() {
            return {
                'is-inline': this.hasFloatingLabel && this.isLabelInline,
                'is-floating': this.hasFloatingLabel && !this.isLabelInline
            };
        },
        hasLabel: function hasLabel() {
            return Boolean(this.label) || Boolean(this.$slots.default);
        },
        hasFloatingLabel: function hasFloatingLabel() {
            return this.hasLabel && this.floatingLabel;
        },
        isLabelInline: function isLabelInline() {
            return this.valueLength === 0 && !this.isActive;
        },
        minValue: function minValue() {
            if (this.type === 'number' && this.min !== undefined) {
                return this.min;
            }

            return null;
        },
        maxValue: function maxValue() {
            if (this.type === 'number' && this.max !== undefined) {
                return this.max;
            }

            return null;
        },
        stepValue: function stepValue() {
            return this.type === 'number' ? this.step : null;
        },
        valueLength: function valueLength() {
            return this.value ? this.value.length : 0;
        },
        hasFeedback: function hasFeedback() {
            return this.showError || this.showHelp;
        },
        showError: function showError() {
            return this.invalid && (Boolean(this.error) || Boolean(this.$slots.error));
        },
        showHelp: function showHelp() {
            return Boolean(this.help) || Boolean(this.$slots.help);
        }
    },

    created: function created() {
        if (this.value === null) {
            this.initialValue = '';
            this.updateValue('');
        }
    },
    mounted: function mounted() {
        if (this.multiLine && this.autosize) {
            __WEBPACK_IMPORTED_MODULE_2_autosize___default()(this.$refs.textarea);
            this.autosizeInitialized = true;
        }
    },
    beforeDestroy: function beforeDestroy() {
        if (this.autosizeInitialized) {
            __WEBPACK_IMPORTED_MODULE_2_autosize___default.a.destroy(this.$refs.textarea);
        }
    },


    methods: {
        updateValue: function updateValue(value) {
            this.$emit('input', value);
        },
        onChange: function onChange(e) {
            this.$emit('change', this.value, e);
        },
        onFocus: function onFocus(e) {
            this.isActive = true;
            this.$emit('focus', e);
        },
        onBlur: function onBlur(e) {
            this.isActive = false;
            this.$emit('blur', e);

            if (!this.isTouched) {
                this.isTouched = true;
                this.$emit('touch');
            }
        },
        onKeydown: function onKeydown(e) {
            this.$emit('keydown', e);
        },
        onKeydownEnter: function onKeydownEnter(e) {
            this.$emit('keydown-enter', e);
        },
        reset: function reset() {
            if (document.activeElement === this.$refs.input || document.activeElement === this.$refs.textarea) {
                document.activeElement.blur();
            }

            this.updateValue(this.initialValue);
            this.resetTouched();
        },
        resetTouched: function resetTouched() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { touched: false };

            this.isTouched = options.touched;
        },
        refreshSize: function refreshSize() {
            if (this.autosizeInitialized) {
                __WEBPACK_IMPORTED_MODULE_2_autosize___default.a.update(this.$refs.textarea);
            }
        },
        focus: function focus() {
            (this.$refs.input || this.$refs.textarea).focus();
        }
    },

    components: {
        UiIcon: __WEBPACK_IMPORTED_MODULE_1__UiIcon_vue__["default"]
    },

    directives: {
        autofocus: __WEBPACK_IMPORTED_MODULE_0__directives_autofocus__["a" /* default */]
    }
};

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n.ui-textbox {\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  margin-bottom: 1rem;\n}\n.ui-textbox:hover:not(.is-disabled) .ui-textbox__label-text {\n    color: rgba(0, 0, 0, 0.75);\n}\n.ui-textbox:hover:not(.is-disabled) .ui-textbox__input,\n  .ui-textbox:hover:not(.is-disabled) .ui-textbox__textarea {\n    border-bottom-color: rgba(0, 0, 0, 0.3);\n}\n.ui-textbox.is-active:not(.is-disabled) .ui-textbox__input,\n  .ui-textbox.is-active:not(.is-disabled) .ui-textbox__textarea {\n    border-bottom-color: #2196f3;\n    border-bottom-width: 2px;\n}\n.ui-textbox.is-active:not(.is-disabled) .ui-textbox__label-text,\n  .ui-textbox.is-active:not(.is-disabled) .ui-textbox__icon-wrapper .ui-icon {\n    color: #2196f3;\n}\n.ui-textbox.has-label .ui-textbox__icon-wrapper {\n    padding-top: 1.5rem;\n}\n.ui-textbox.has-counter .ui-textbox__feedback-text {\n    padding-right: 3rem;\n}\n.ui-textbox.has-floating-label .ui-textbox__label-text {\n    display: table;\n}\n.ui-textbox.has-floating-label .ui-textbox__label-text.is-inline {\n      color: rgba(0, 0, 0, 0.54);\n      cursor: text;\n      -webkit-transform: translateY(1.625rem) scale(1.1);\n              transform: translateY(1.625rem) scale(1.1);\n}\n.ui-textbox.has-floating-label .ui-textbox__label-text.is-floating {\n      -webkit-transform: translateY(0) scale(1);\n              transform: translateY(0) scale(1);\n}\n.ui-textbox.has-floating-label .ui-textbox__label > input:-webkit-autofill + .ui-textbox__label-text.is-inline {\n    -webkit-transform: translateY(0) scale(1);\n            transform: translateY(0) scale(1);\n}\n.ui-textbox.is-invalid:not(.is-disabled) .ui-textbox__label-text,\n  .ui-textbox.is-invalid:not(.is-disabled) .ui-textbox__icon-wrapper .ui-icon,\n  .ui-textbox.is-invalid:not(.is-disabled) .ui-textbox__counter {\n    color: #f44336;\n}\n.ui-textbox.is-invalid:not(.is-disabled) .ui-textbox__input,\n  .ui-textbox.is-invalid:not(.is-disabled) .ui-textbox__textarea {\n    border-bottom-color: #f44336;\n}\n.ui-textbox.is-invalid:not(.is-disabled) .ui-textbox__feedback {\n    color: #f44336;\n}\n.ui-textbox.is-disabled .ui-textbox__input,\n  .ui-textbox.is-disabled .ui-textbox__textarea {\n    border-bottom-style: dotted;\n    border-bottom-width: 2px;\n    color: rgba(0, 0, 0, 0.38);\n}\n.ui-textbox.is-disabled .ui-textbox__icon-wrapper .ui-icon {\n    opacity: 0.6;\n}\n.ui-textbox.is-disabled .ui-textbox__feedback {\n    opacity: 0.8;\n}\n.ui-textbox__label {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: column-reverse;\n          flex-direction: column-reverse;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\n.ui-textbox__icon-wrapper {\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  margin-right: 0.75rem;\n  padding-top: 0.25rem;\n}\n.ui-textbox__icon-wrapper .ui-icon {\n    color: rgba(0, 0, 0, 0.54);\n}\n.ui-textbox__content {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n.ui-textbox__label-text {\n  color: rgba(0, 0, 0, 0.54);\n  cursor: default;\n  font-size: 0.9375rem;\n  line-height: normal;\n  margin-bottom: 0;\n  -webkit-transform-origin: left;\n          transform-origin: left;\n  -webkit-transition: color 0.1s ease, -webkit-transform 0.2s ease;\n  transition: color 0.1s ease, -webkit-transform 0.2s ease;\n  transition: color 0.1s ease, transform 0.2s ease;\n  transition: color 0.1s ease, transform 0.2s ease, -webkit-transform 0.2s ease;\n}\n.ui-textbox__input,\n.ui-textbox__textarea {\n  background: none;\n  border: none;\n  border-bottom-color: rgba(0, 0, 0, 0.12);\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  border-radius: 0;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: auto;\n  display: block;\n  font-family: inherit;\n  font-size: 1rem;\n  font-weight: normal;\n  margin: 0;\n  outline: none;\n  padding: 0;\n  -webkit-transition: border 0.1s ease;\n  transition: border 0.1s ease;\n  width: 100%;\n}\n.ui-textbox__input {\n  height: 2rem;\n}\n.ui-textbox__textarea {\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding-bottom: 0.375rem;\n  resize: vertical;\n}\n.ui-textbox__feedback {\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 0.875rem;\n  line-height: 1.2;\n  margin: 0;\n  padding-top: 0.25rem;\n  position: relative;\n}\n.ui-textbox__counter {\n  position: absolute;\n  right: 0;\n  top: 0.25rem;\n}\n.ui-textbox--icon-position-right .ui-textbox__icon-wrapper {\n  margin-left: 0.5rem;\n  margin-right: 0;\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n}\n", ""]);

// exports


/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ui-textbox",
    class: _vm.classes
  }, [(_vm.icon || _vm.$slots.icon) ? _c('div', {
    staticClass: "ui-textbox__icon-wrapper"
  }, [_vm._t("icon", [_c('ui-icon', {
    attrs: {
      "icon": _vm.icon
    }
  })])], 2) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "ui-textbox__content"
  }, [_c('label', {
    staticClass: "ui-textbox__label"
  }, [(!_vm.multiLine) ? _c('input', {
    directives: [{
      name: "autofocus",
      rawName: "v-autofocus",
      value: (_vm.autofocus),
      expression: "autofocus"
    }],
    ref: "input",
    staticClass: "ui-textbox__input",
    attrs: {
      "autocomplete": _vm.autocomplete ? _vm.autocomplete : null,
      "disabled": _vm.disabled,
      "max": _vm.maxValue,
      "maxlength": _vm.enforceMaxlength ? _vm.maxlength : null,
      "min": _vm.minValue,
      "name": _vm.name,
      "number": _vm.type === 'number' ? true : null,
      "placeholder": _vm.hasFloatingLabel ? null : _vm.placeholder,
      "readonly": _vm.readonly,
      "required": _vm.required,
      "step": _vm.stepValue,
      "tabindex": _vm.tabindex,
      "type": _vm.type
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "blur": _vm.onBlur,
      "change": _vm.onChange,
      "focus": _vm.onFocus,
      "input": function($event) {
        _vm.updateValue($event.target.value)
      },
      "keydown": [function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        return _vm.onKeydownEnter($event)
      }, _vm.onKeydown]
    }
  }) : _c('textarea', {
    directives: [{
      name: "autofocus",
      rawName: "v-autofocus",
      value: (_vm.autofocus),
      expression: "autofocus"
    }],
    ref: "textarea",
    staticClass: "ui-textbox__textarea",
    attrs: {
      "autocomplete": _vm.autocomplete ? _vm.autocomplete : null,
      "disabled": _vm.disabled,
      "maxlength": _vm.enforceMaxlength ? _vm.maxlength : null,
      "name": _vm.name,
      "placeholder": _vm.hasFloatingLabel ? null : _vm.placeholder,
      "readonly": _vm.readonly,
      "required": _vm.required,
      "rows": _vm.rows,
      "tabindex": _vm.tabindex
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "blur": _vm.onBlur,
      "change": _vm.onChange,
      "focus": _vm.onFocus,
      "input": function($event) {
        _vm.updateValue($event.target.value)
      },
      "keydown": [function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        return _vm.onKeydownEnter($event)
      }, _vm.onKeydown]
    }
  }), _vm._v(" "), (_vm.label || _vm.$slots.default) ? _c('div', {
    staticClass: "ui-textbox__label-text",
    class: _vm.labelClasses
  }, [_vm._t("default", [_vm._v(_vm._s(_vm.label))])], 2) : _vm._e()]), _vm._v(" "), (_vm.hasFeedback || _vm.maxlength) ? _c('div', {
    staticClass: "ui-textbox__feedback"
  }, [(_vm.showError) ? _c('div', {
    staticClass: "ui-textbox__feedback-text"
  }, [_vm._t("error", [_vm._v(_vm._s(_vm.error))])], 2) : (_vm.showHelp) ? _c('div', {
    staticClass: "ui-textbox__feedback-text"
  }, [_vm._t("help", [_vm._v(_vm._s(_vm.help))])], 2) : _vm._e(), _vm._v(" "), (_vm.maxlength) ? _c('div', {
    staticClass: "ui-textbox__counter"
  }, [_vm._v("\n                " + _vm._s(_vm.valueLength + '/' + _vm.maxlength) + "\n            ")]) : _vm._e()]) : _vm._e()])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (false) {}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(3)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(169);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("3b9fa20d", content, false);
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(121);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiIcon_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_39a27af7_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiIcon_vue__ = __webpack_require__(9);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(10)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiIcon_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_39a27af7_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_UiIcon_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\UiIcon.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UiIcon.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = Component.exports;


/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = {
    name: 'ui-icon',

    props: {
        icon: String,
        iconSet: {
            type: String,
            default: 'material-icons'
        },
        ariaLabel: String,
        removeText: {
            type: Boolean,
            default: false
        },
        useSvg: {
            type: Boolean,
            default: false
        }
    }
};

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = {
    inserted: function inserted(el, _ref) {
        var value = _ref.value;

        if (value) {
            el.focus();
        }
    }
};

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n.ui-icon {\n  cursor: inherit;\n  display: inline-block;\n  font-size: 1.5rem;\n  height: 1em;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  vertical-align: middle;\n  width: 1em;\n}\n.ui-icon svg {\n    display: block;\n    fill: currentColor;\n    height: 1em;\n    margin: 0;\n    padding: 0;\n    width: 1em;\n}\n", ""]);

// exports


/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "ui-icon",
    class: [_vm.iconSet, _vm.icon],
    attrs: {
      "aria-label": _vm.ariaLabel
    }
  }, [(_vm.useSvg) ? _c('svg', {
    staticClass: "ui-icon__svg"
  }, [_c('use', {
    attrs: {
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "xlink:href": '#' + _vm.icon
    }
  })]) : _vm._t("default", [_vm._v(_vm._s(_vm.removeText ? null : _vm.icon))])], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = esExports;
if (false) {}

/***/ })

/******/ });
});

/***/ }),

/***/ "aa77":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5ca1");
var defined = __webpack_require__("be13");
var fails = __webpack_require__("79e5");
var spaces = __webpack_require__("fdef");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "aafb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__("b42e");

var props = {
  textTag: {
    type: String,
    default: 'p'
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BCardText',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.textTag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'card-text'
    }), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "ac6a":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("cadf");
var getKeys = __webpack_require__("0d58");
var redefine = __webpack_require__("2aba");
var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var wks = __webpack_require__("2b4c");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "ad48":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__("b42e");

var props = {
  id: {
    type: String,
    default: null
  },
  tag: {
    type: String,
    default: 'div'
  },
  tooltip: {
    type: Boolean,
    default: false
  },
  forceShow: {
    type: Boolean,
    default: false
  },
  state: {
    type: [Boolean, String],
    default: null
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BFormValidFeedback',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var show = props.forceShow === true || props.state === true || props.state === 'valid';
    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      class: {
        'valid-feedback': !props.tooltip,
        'valid-tooltip': props.tooltip,
        'd-block': show
      },
      attrs: {
        id: props.id
      }
    }), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "aebd":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "b0df":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _array = __webpack_require__("bb2f");

var _object = __webpack_require__("24e2");

/**
 * Get property defined by dot/array notation in string.
 *
 * @link https://gist.github.com/jeneg/9767afdcca45601ea44930ea03e0febf#gistcomment-1935901
 *
 * @param {Object} obj
 * @param {string|Array} path
 * @param {*} defaultValue (optional)
 * @return {*}
 */
var get = function get(obj, path) {
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  // Handle array of path values
  path = (0, _array.isArray)(path) ? path.join('.') : path; // If no path or no object passed

  if (!path || !(0, _object.isObject)(obj)) {
    return defaultValue;
  } // Handle edge case where user has dot(s) in top-level item field key
  // See https://github.com/bootstrap-vue/bootstrap-vue/issues/2762


  if (obj.hasOwnProperty(path)) {
    return obj[path];
  } // Handle string array notation (numeric indices only)


  path = String(path).replace(/\[(\d+)]/g, '.$1');
  var steps = path.split('.').filter(Boolean); // Handle case where someone passes a string of only dots

  if (steps.length === 0) {
    return defaultValue;
  } // Traverse path in object to find result


  return steps.every(function (step) {
    return (0, _object.isObject)(obj) && obj.hasOwnProperty(step) && (obj = obj[step]);
  }) ? obj : defaultValue;
};

var _default = get;
exports.default = _default;

/***/ }),

/***/ "b407":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _formInput = __webpack_require__("4216");

var _plugins = __webpack_require__("0a8d");

var components = {
  BFormInput: _formInput.default,
  BInput: _formInput.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "b40f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = sanitizeRow;

var _object = __webpack_require__("24e2");

var _constants = __webpack_require__("3ed8");

// Return a copy of a row after all reserved fields have been filtered out
// TODO: add option to specify which fields to include
function sanitizeRow(row) {
  return (0, _object.keys)(row).reduce(function (obj, key) {
    // Ignore special fields that start with _
    if (!_constants.IGNORED_FIELD_KEYS[key]) {
      obj[key] = row[key];
    }

    return obj;
  }, {});
}

/***/ }),

/***/ "b42e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeData", function() { return mergeData; });
var __assign=function(){return(__assign=Object.assign||function(e){for(var a,s=1,t=arguments.length;s<t;s++)for(var r in a=arguments[s])Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);return e}).apply(this,arguments)};function mergeData(){for(var e,a,s={},t=arguments.length;t--;)for(var r=0,c=Object.keys(arguments[t]);r<c.length;r++)switch(e=c[r]){case"class":case"style":case"directives":Array.isArray(s[e])||(s[e]=[]),s[e]=s[e].concat(arguments[t][e]);break;case"staticClass":if(!arguments[t][e])break;void 0===s[e]&&(s[e]=""),s[e]&&(s[e]+=" "),s[e]+=arguments[t][e].trim();break;case"on":case"nativeOn":s[e]||(s[e]={});for(var n=0,o=Object.keys(arguments[t][e]||{});n<o.length;n++)a=o[n],s[e][a]?s[e][a]=[].concat(s[e][a],arguments[t][e][a]):s[e][a]=arguments[t][e][a];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":s[e]||(s[e]={}),s[e]=__assign({},arguments[t][e],s[e]);break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:s[e]||(s[e]=arguments[t][e])}return s}
//# sourceMappingURL=lib.esm.js.map


/***/ }),

/***/ "b447":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("3a38");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "b528":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _progress = __webpack_require__("c4c4");

var _progressBar = __webpack_require__("cf15");

var _plugins = __webpack_require__("0a8d");

var components = {
  BProgress: _progress.default,
  BProgressBar: _progressBar.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "b664":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__("b42e");

var _config = __webpack_require__("eb60");

var _pluckProps = __webpack_require__("9c97");

var _array = __webpack_require__("bb2f");

var _object = __webpack_require__("24e2");

var _dom = __webpack_require__("1611");

var _link = __webpack_require__("4e40");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NAME = 'BButton';
var btnProps = {
  block: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: null
  },
  variant: {
    type: String,
    default: function _default() {
      return (0, _config.getComponentConfig)(NAME, 'variant');
    }
  },
  type: {
    type: String,
    default: 'button'
  },
  tag: {
    type: String,
    default: 'button'
  },
  pressed: {
    // tri-state prop: true, false or null
    // => on, off, not a toggle
    type: Boolean,
    default: null
  }
};
var linkProps = (0, _link.propsFactory)();
delete linkProps.href.default;
delete linkProps.to.default;
var linkPropKeys = (0, _object.keys)(linkProps);

var props = _objectSpread({}, linkProps, btnProps); // Focus handler for toggle buttons.  Needs class of 'focus' when focused.


exports.props = props;

function handleFocus(evt) {
  if (evt.type === 'focusin') {
    (0, _dom.addClass)(evt.target, 'focus');
  } else if (evt.type === 'focusout') {
    (0, _dom.removeClass)(evt.target, 'focus');
  }
} // Helper functons to minimize runtime memory footprint when lots of buttons on page
// Is the requested button a link?


function isLink(props) {
  // If tag prop is set to `a`, we use a b-link to get proper disabled handling
  return Boolean(props.href || props.to || props.tag && String(props.tag).toLowerCase() === 'a');
} // Is the button to be a toggle button?


function isToggle(props) {
  return typeof props.pressed === 'boolean';
} // Is the button "really" a button?


function isButton(props) {
  if (isLink(props)) {
    return false;
  } else if (props.tag && String(props.tag).toLowerCase() !== 'button') {
    return false;
  }

  return true;
} // Is the requested tag not a button or link?


function isNonStandardTag(props) {
  return !isLink(props) && !isButton(props);
} // Compute required classes (non static classes)


function computeClass(props) {
  var _ref;

  return ["btn-".concat(props.variant || (0, _config.getComponentConfig)(NAME, 'variant')), (_ref = {}, _defineProperty(_ref, "btn-".concat(props.size), Boolean(props.size)), _defineProperty(_ref, 'btn-block', props.block), _defineProperty(_ref, "disabled", props.disabled), _defineProperty(_ref, "active", props.pressed), _ref)];
} // Compute the link props to pass to b-link (if required)


function computeLinkProps(props) {
  return isLink(props) ? (0, _pluckProps.default)(linkPropKeys, props) : null;
} // Compute the attributes for a button


function computeAttrs(props, data) {
  var button = isButton(props);
  var link = isLink(props);
  var toggle = isToggle(props);
  var nonStdTag = isNonStandardTag(props);
  var role = data.attrs && data.attrs['role'] ? data.attrs['role'] : null;
  var tabindex = data.attrs ? data.attrs['tabindex'] : null;

  if (nonStdTag) {
    tabindex = '0';
  }

  return {
    // Type only used for "real" buttons
    type: button && !link ? props.type : null,
    // Disabled only set on "real" buttons
    disabled: button ? props.disabled : null,
    // We add a role of button when the tag is not a link or button for ARIA.
    // Don't bork any role provided in data.attrs when isLink or isButton
    role: nonStdTag ? 'button' : role,
    // We set the aria-disabled state for non-standard tags
    'aria-disabled': nonStdTag ? String(props.disabled) : null,
    // For toggles, we need to set the pressed state for ARIA
    'aria-pressed': toggle ? String(props.pressed) : null,
    // autocomplete off is needed in toggle mode to prevent some browsers from
    // remembering the previous setting when using the back button.
    autocomplete: toggle ? 'off' : null,
    // Tab index is used when the component is not a button.
    // Links are tabbable, but don't allow disabled, while non buttons or links
    // are not tabbable, so we mimic that functionality by disabling tabbing
    // when disabled, and adding a tabindex of '0' to non buttons or non links.
    tabindex: props.disabled && !button ? '-1' : tabindex
  };
} // @vue/component


var _default2 = {
  name: NAME,
  functional: true,
  props: props,
  render: function render(h, _ref2) {
    var props = _ref2.props,
        data = _ref2.data,
        listeners = _ref2.listeners,
        children = _ref2.children;
    var toggle = isToggle(props);
    var link = isLink(props);
    var on = {
      click: function click(e) {
        /* istanbul ignore if: blink/button disabled should handle this */
        if (props.disabled && e instanceof Event) {
          e.stopPropagation();
          e.preventDefault();
        } else if (toggle && listeners && listeners['update:pressed']) {
          // Send .sync updates to any "pressed" prop (if .sync listeners)
          // Concat will normalize the value to an array
          // without double wrapping an array value in an array.
          (0, _array.concat)(listeners['update:pressed']).forEach(function (fn) {
            if (typeof fn === 'function') {
              fn(!props.pressed);
            }
          });
        }
      }
    };

    if (toggle) {
      on.focusin = handleFocus;
      on.focusout = handleFocus;
    }

    var componentData = {
      staticClass: 'btn',
      class: computeClass(props),
      props: computeLinkProps(props),
      attrs: computeAttrs(props, data),
      on: on
    };
    return h(link ? _link.default : props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, componentData), children);
  }
};
exports.default = _default2;

/***/ }),

/***/ "b6bd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _looseEqual = __webpack_require__("96cd");

var _array = __webpack_require__("bb2f");

var _warn = __webpack_require__("93e0");

var _listenOnRoot = __webpack_require__("edbc");

var _default = {
  mixins: [_listenOnRoot.default],
  props: {
    noProviderPaging: {
      type: Boolean,
      default: false
    },
    noProviderSorting: {
      type: Boolean,
      default: false
    },
    noProviderFiltering: {
      type: Boolean,
      default: false
    },
    apiUrl: {
      // Passthrough prop. Passed to the context object. Not used by b-table directly
      type: String,
      default: ''
    }
  },
  computed: {
    hasProvider: function hasProvider() {
      return this.items instanceof Function;
    },
    providerTriggerContext: function providerTriggerContext() {
      // Used to trigger the provider function via a watcher. Only the fields that
      // are needed for triggering a provider update are included. Note that the
      // regular this.context is sent to the provider during fetches though, as they
      // may neeed all the prop info.
      var ctx = {
        apiUrl: this.apiUrl
      };

      if (!this.noProviderFiltering) {
        // Either a string, or could be an object or array.
        ctx.filter = this.localFilter;
      }

      if (!this.noProviderSorting) {
        ctx.sortBy = this.localSortBy;
        ctx.sortDesc = this.localSortDesc;
      }

      if (!this.noProviderPaging) {
        ctx.perPage = this.perPage;
        ctx.currentPage = this.currentPage;
      }

      return ctx;
    }
  },
  watch: {
    // Provider update triggering
    items: function items(newVal, oldVal) {
      // If a new provider has been specified, trigger an update
      if (this.hasProvider || newVal instanceof Function) {
        this.$nextTick(this._providerUpdate);
      }
    },
    providerTriggerContext: function providerTriggerContext(newVal, oldVal) {
      // Trigger the provider to update as the relevant context values have changed.
      if (!(0, _looseEqual.default)(newVal, oldVal)) {
        this.$nextTick(this._providerUpdate);
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    // Call the items provider if necessary
    if (this.hasProvider && (!this.localItems || this.localItems.length === 0)) {
      // Fetch on mount if localItems is empty
      this._providerUpdate();
    } // Listen for global messages to tell us to force refresh the table


    this.listenOnRoot('bv::refresh::table', function (id) {
      if (id === _this.id || id === _this) {
        _this.refresh();
      }
    });
  },
  methods: {
    refresh: function refresh() {
      // Public Method: Force a refresh of the provider function
      this.$off('refreshed', this.refresh);

      if (this.computedBusy) {
        // Can't force an update when forced busy by user (busy prop === true)
        if (this.localBusy && this.hasProvider) {
          // But if provider running (localBusy), re-schedule refresh once `refreshed` emitted
          this.$on('refreshed', this.refresh);
        }
      } else {
        this.clearSelected();

        if (this.hasProvider) {
          this.$nextTick(this._providerUpdate);
        } else {
          /* istanbul ignore next */
          this.localItems = (0, _array.isArray)(this.items) ? this.items.slice() : [];
        }
      }
    },
    // Provider related methods
    _providerSetLocal: function _providerSetLocal(items) {
      this.localItems = (0, _array.isArray)(items) ? items.slice() : [];
      this.localBusy = false;
      this.$emit('refreshed'); // New root emit

      if (this.id) {
        this.emitOnRoot('bv::table::refreshed', this.id);
      }
    },
    _providerUpdate: function _providerUpdate() {
      // Refresh the provider function items.
      if (!this.hasProvider) {
        // Do nothing if no provider
        return;
      } // If table is busy, wait until refereshed before calling again


      if (this.computedBusy) {
        // Schedule a new refresh once `refreshed` is emitted
        this.$nextTick(this.refresh);
        return;
      } // Set internal busy state


      this.localBusy = true; // Call provider function with context and optional callback after DOM is fully updated

      this.$nextTick(function () {
        var _this2 = this;

        try {
          // Call provider function passing it the context and optional callback
          var data = this.items(this.context, this._providerSetLocal);

          if (data && data.then && typeof data.then === 'function') {
            // Provider returned Promise
            data.then(function (items) {
              // Provider resolved with items
              _this2._providerSetLocal(items);
            });
          } else if ((0, _array.isArray)(data)) {
            // Provider returned Array data
            this._providerSetLocal(data);
          } else if (this.items.length !== 2) {
            // Check number of arguments provider function requested
            // Provider not using callback (didn't request second argument), so we clear
            // busy state as most likely there was an error in the provider function

            /* istanbul ignore next */
            (0, _warn.default)("b-table provider function didn't request calback and did not return a promise or data");
            /* istanbul ignore next */

            this.localBusy = false;
          }
        } catch (e)
        /* istanbul ignore next */
        {
          // Provider function borked on us, so we spew out a warning
          // and clear the busy state
          (0, _warn.default)("b-table provider function error [".concat(e.name, "] ").concat(e.message));
          this.localBusy = false;
          this.$off('refreshed', this.refresh);
        }
      });
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "b740":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _table = __webpack_require__("07d0");

var _plugins = __webpack_require__("0a8d");

var components = {
  BTable: _table.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "b8e3":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "b965":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
// @vue/component
var _default = {
  computed: {
    validity: {
      // Expose validity property
      cache: false,
      get: function get()
      /* istanbul ignore next */
      {
        return this.$refs.input.validity;
      }
    },
    validationMessage: {
      // Expose validationMessage property
      cache: false,
      get: function get()
      /* istanbul ignore next */
      {
        return this.$refs.input.validationMessage;
      }
    },
    willValidate: {
      // Expose willValidate property
      cache: false,
      get: function get()
      /* istanbul ignore next */
      {
        return this.$refs.input.willValidate;
      }
    }
  },
  methods: {
    setCustomValidity: function setCustomValidity()
    /* istanbul ignore next */
    {
      var _this$$refs$input;

      // For external handler that may want a setCustomValidity(...) method
      return (_this$$refs$input = this.$refs.input).setCustomValidity.apply(_this$$refs$input, arguments);
    },
    checkValidity: function checkValidity()
    /* istanbul ignore next */
    {
      var _this$$refs$input2;

      // For external handler that may want a checkValidity(...) method
      return (_this$$refs$input2 = this.$refs.input).checkValidity.apply(_this$$refs$input2, arguments);
    },
    reportValidity: function reportValidity()
    /* istanbul ignore next */
    {
      var _this$$refs$input3;

      // For external handler that may want a reportValidity(...) method
      return (_this$$refs$input3 = this.$refs.input).reportValidity.apply(_this$$refs$input3, arguments);
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "b967":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__("b42e");

var _prefixPropName = __webpack_require__("e109");

var _copyProps = __webpack_require__("0942");

var _pluckProps = __webpack_require__("9c97");

var _cardMixin = __webpack_require__("45f0");

var _cardTitle = __webpack_require__("cf89");

var _cardSubTitle = __webpack_require__("886b");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var props = _objectSpread({}, (0, _copyProps.default)(_cardMixin.default.props, _prefixPropName.default.bind(null, 'body')), {
  bodyClass: {
    type: [String, Object, Array],
    default: null
  }
}, _cardTitle.props, _cardSubTitle.props, {
  overlay: {
    type: Boolean,
    default: false
  } // @vue/component

});

exports.props = props;
var _default = {
  name: 'BCardBody',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var _ref2;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var cardTitle = h(false);
    var cardSubTitle = h(false);
    var cardContent = children || [h(false)];

    if (props.title) {
      cardTitle = h(_cardTitle.default, {
        props: (0, _pluckProps.default)(_cardTitle.props, props)
      });
    }

    if (props.subTitle) {
      cardSubTitle = h(_cardSubTitle.default, {
        props: (0, _pluckProps.default)(_cardSubTitle.props, props),
        class: ['mb-2']
      });
    }

    return h(props.bodyTag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'card-body',
      class: [(_ref2 = {
        'card-img-overlay': props.overlay
      }, _defineProperty(_ref2, "bg-".concat(props.bodyBgVariant), Boolean(props.bodyBgVariant)), _defineProperty(_ref2, "border-".concat(props.bodyBorderVariant), Boolean(props.bodyBorderVariant)), _defineProperty(_ref2, "text-".concat(props.bodyTextVariant), Boolean(props.bodyTextVariant)), _ref2), props.bodyClass || {}]
    }), [cardTitle, cardSubTitle].concat(_toConsumableArray(cardContent)));
  }
};
exports.default = _default;

/***/ }),

/***/ "bb0c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _dom = __webpack_require__("1611");

var _keyCodes = __webpack_require__("06e4");

var ITEM_SELECTOR = ['.btn:not(.disabled):not([disabled]):not(.dropdown-item)', '.form-control:not(.disabled):not([disabled])', 'select:not(.disabled):not([disabled])', 'input[type="checkbox"]:not(.disabled)', 'input[type="radio"]:not(.disabled)'].join(','); // @vue/component

var _default = {
  name: 'BButtonToolbar',
  props: {
    justify: {
      type: Boolean,
      default: false
    },
    keyNav: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted() {
    if (this.keyNav) {
      // Pre-set the tabindexes if the markup does not include tabindex="-1" on the toolbar items
      this.getItems();
    }
  },
  methods: {
    onFocusin: function onFocusin(evt) {
      if (evt.target === this.$el) {
        evt.preventDefault();
        evt.stopPropagation();
        this.focusFirst(evt);
      }
    },
    stop: function stop(evt) {
      evt.preventDefault();
      evt.stopPropagation();
    },
    onKeydown: function onKeydown(evt) {
      if (!this.keyNav) {
        /* istanbul ignore next: should never happen */
        return;
      }

      var key = evt.keyCode;
      var shift = evt.shiftKey;

      if (key === _keyCodes.default.UP || key === _keyCodes.default.LEFT) {
        this.stop(evt);
        shift ? this.focusFirst(evt) : this.focusPrev(evt);
      } else if (key === _keyCodes.default.DOWN || key === _keyCodes.default.RIGHT) {
        this.stop(evt);
        shift ? this.focusLast(evt) : this.focusNext(evt);
      }
    },
    setItemFocus: function setItemFocus(item) {
      item && item.focus && item.focus();
    },
    focusFirst: function focusFirst(evt) {
      var items = this.getItems();
      this.setItemFocus(items[0]);
    },
    focusPrev: function focusPrev(evt) {
      var items = this.getItems();
      var index = items.indexOf(evt.target);

      if (index > -1) {
        items = items.slice(0, index).reverse();
        this.setItemFocus(items[0]);
      }
    },
    focusNext: function focusNext(evt) {
      var items = this.getItems();
      var index = items.indexOf(evt.target);

      if (index > -1) {
        items = items.slice(index + 1);
        this.setItemFocus(items[0]);
      }
    },
    focusLast: function focusLast(evt) {
      var items = this.getItems().reverse();
      this.setItemFocus(items[0]);
    },
    getItems: function getItems() {
      var items = (0, _dom.selectAll)(ITEM_SELECTOR, this.$el);
      items.forEach(function (item) {
        // Ensure tabfocus is -1 on any new elements
        item.tabIndex = -1;
      });
      return items.filter(function (el) {
        return (0, _dom.isVisible)(el);
      });
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'btn-toolbar',
      class: {
        'justify-content-between': this.justify
      },
      attrs: {
        role: 'toolbar',
        tabindex: this.keyNav ? '0' : null
      },
      on: this.keyNav ? {
        focusin: this.onFocusin,
        keydown: this.onKeydown
      } : {}
    }, [this.$slots.default]);
  }
};
exports.default = _default;

/***/ }),

/***/ "bb2f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.concat = exports.arrayIncludes = exports.isArray = exports.from = void 0;

// Production steps of ECMA-262, Edition 6, 22.1.2.1
// es6-ified by @alexsasharegan

/* istanbul ignore if */
if (!Array.from) {
  Array.from = function () {
    var toStr = Object.prototype.toString;

    var isCallable = function isCallable(fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };

    var toInteger = function toInteger(value) {
      var number = Number(value);

      if (isNaN(number)) {
        return 0;
      }

      if (number === 0 || !isFinite(number)) {
        return number;
      }

      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };

    var maxSafeInteger = Math.pow(2, 53) - 1;

    var toLength = function toLength(value) {
      return Math.min(Math.max(toInteger(value), 0), maxSafeInteger);
    }; // The length property of the from method is 1.


    return function from(arrayLike
    /*, mapFn, thisArg */
    ) {
      // 1. Let C be the this value.
      var C = this; // 2. Let items be ToObject(arrayLike).

      var items = Object(arrayLike); // 3. ReturnIfAbrupt(items).

      if (arrayLike == null) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
      } // 4. If mapfn is undefined, then let mapping be false.


      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;

      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        } // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.


        if (arguments.length > 2) {
          T = arguments[2];
        }
      } // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).


      var len = toLength(items.length); // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method
      // of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).

      var A = isCallable(C) ? Object(new C(len)) : new Array(len); // 16. Let k be 0.

      var k = 0; // 17. Repeat, while k < len… (also steps a - h)

      var kValue;

      while (k < len) {
        kValue = items[k];

        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }

        k += 1;
      } // 18. Let putStatus be Put(A, "length", len, true).


      A.length = len; // 20. Return A.

      return A;
    };
  }();
} // https://tc39.github.io/ecma262/#sec-array.prototype.find
// Needed for IE support

/* istanbul ignore if */


if (!Array.prototype.find) {
  // eslint-disable-next-line no-extend-native
  Object.defineProperty(Array.prototype, 'find', {
    value: function value(predicate) {
      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this); // 2. Let len be ? ToLength(? Get(O, "length")).

      var len = o.length >>> 0; // 3. If IsCallable(predicate) is false, throw a TypeError exception.

      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      } // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.


      var thisArg = arguments[1]; // 5. Let k be 0.

      var k = 0; // 6. Repeat, while k < len

      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return kValue.
        var kValue = o[k];

        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue;
        } // e. Increase k by 1.


        k++;
      } // 7. Return undefined.


      return undefined;
    }
  });
}
/* istanbul ignore if */


if (!Array.isArray) {
  Array.isArray = function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
} // Static


var from = Array.from;
exports.from = from;
var isArray = Array.isArray; // Instance

exports.isArray = isArray;

var arrayIncludes = function arrayIncludes(array, value) {
  return array.indexOf(value) !== -1;
};

exports.arrayIncludes = arrayIncludes;

var concat = function concat() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Array.prototype.concat.apply([], args);
};

exports.concat = concat;

/***/ }),

/***/ "bdb1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _id = __webpack_require__("eae0");

var _formRadioCheck = __webpack_require__("4fe1");

var _form = __webpack_require__("5f07");

var _formSize = __webpack_require__("6e1b");

var _formState = __webpack_require__("41fb");

var _array = __webpack_require__("bb2f");

var _looseEqual = __webpack_require__("96cd");

var _looseIndexOf = __webpack_require__("2d8d");

// @vue/component
var _default = {
  name: 'BFormCheckbox',
  mixins: [_formRadioCheck.default, // Includes shared render function
  _id.default, _form.default, _formSize.default, _formState.default],
  inject: {
    bvGroup: {
      from: 'bvCheckGroup',
      default: false
    }
  },
  props: {
    value: {
      // type: [Object, Boolean],
      default: true
    },
    uncheckedValue: {
      // type: [Object, Boolean],
      // Not applicable in multi-check mode
      default: false
    },
    indeterminate: {
      // Not applicable in multi-check mode
      type: Boolean,
      default: false
    },
    switch: {
      // Custom switch styling
      type: Boolean,
      default: false
    },
    checked: {
      // v-model
      type: [String, Number, Object, Array, Boolean],
      default: null
    }
  },
  computed: {
    is_Checked: function is_Checked() {
      var checked = this.computedLocalChecked;
      var value = this.value;

      if ((0, _array.isArray)(checked)) {
        return (0, _looseIndexOf.default)(checked, value) > -1;
      } else {
        return (0, _looseEqual.default)(checked, value);
      }
    },
    is_Radio: function is_Radio() {
      return false;
    },
    is_Check: function is_Check() {
      return true;
    }
  },
  watch: {
    computedLocalChecked: function computedLocalChecked(newVal, oldVal) {
      this.$emit('input', newVal);

      if (this.$refs && this.$refs.input) {
        this.$emit('update:indeterminate', this.$refs.input.indeterminate);
      }
    },
    indeterminate: function indeterminate(newVal, oldVal) {
      this.setIndeterminate(newVal);
    }
  },
  mounted: function mounted() {
    // Set initial indeterminate state
    this.setIndeterminate(this.indeterminate);
  },
  methods: {
    handleChange: function handleChange(_ref) {
      var _ref$target = _ref.target,
          checked = _ref$target.checked,
          indeterminate = _ref$target.indeterminate;
      var localChecked = this.computedLocalChecked;
      var value = this.value;
      var isArr = (0, _array.isArray)(localChecked);
      var uncheckedValue = isArr ? null : this.uncheckedValue; // Update computedLocalChecked

      if (isArr) {
        var idx = (0, _looseIndexOf.default)(localChecked, value);

        if (checked && idx < 0) {
          // Add value to array
          localChecked = localChecked.concat(value);
        } else if (!checked && idx > -1) {
          // Remove value from array
          localChecked = localChecked.slice(0, idx).concat(localChecked.slice(idx + 1));
        }
      } else {
        localChecked = checked ? value : uncheckedValue;
      }

      this.computedLocalChecked = localChecked; // Change is only emitted on user interaction

      this.$emit('change', checked ? value : uncheckedValue); // If this is a child of form-checkbox-group, we emit a change event on it as well

      if (this.is_Group) {
        this.bvGroup.$emit('change', localChecked);
      }

      this.$emit('update:indeterminate', indeterminate);
    },
    setIndeterminate: function setIndeterminate(state) {
      // Indeterminate only supported in single checkbox mode
      if ((0, _array.isArray)(this.computedLocalChecked)) {
        state = false;
      }

      if (this.$refs && this.$refs.input) {
        this.$refs.input.indeterminate = state; // Emit update event to prop

        this.$emit('update:indeterminate', state);
      }
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "be11":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.htmlOrText = exports.stripTags = void 0;
var stripTagsRegex = /(<([^>]+)>)/gi; // Removes any thing that looks like an HTML tag from the supplied string

var stripTags = function stripTags() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return String(text).replace(stripTagsRegex, '');
}; // Generate a domProps object for either innerHTML, textContent or nothing


exports.stripTags = stripTags;

var htmlOrText = function htmlOrText(innerHTML, textContent) {
  return innerHTML ? {
    innerHTML: innerHTML
  } : textContent ? {
    textContent: textContent
  } : {};
};

exports.htmlOrText = htmlOrText;

/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "be8c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _modal = __webpack_require__("f429");

var _plugins = __webpack_require__("0a8d");

var directives = {
  BModal: _modal.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    directives: directives
  })
};
exports.default = _default;

/***/ }),

/***/ "bf9c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _dom = __webpack_require__("1611");

var _env = __webpack_require__("4565");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var eventListenerSupported = _env.inBrowser && window.addEventListener;
var MutationObserver = _env.inBrowser && (window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver); // Fallback observation for legacy browsers
// Emulate observer disconnect() method so that we can detach the events later

var fakeObserverFactory = function fakeObserverFactory(el, callback)
/* istanbul ignore next: hard to test in JSDOM */
{
  (0, _dom.eventOn)(el, 'DOMNodeInserted', callback, false);
  (0, _dom.eventOn)(el, 'DOMNodeRemoved', callback, false);
  return {
    disconnect: function disconnect() {
      (0, _dom.eventOff)(el, 'DOMNodeInserted', callback, false);
      (0, _dom.eventOff)(el, 'DOMNodeRemoved', callback, false);
    }
  };
};
/**
 * Observe a DOM element changes, falls back to eventListener mode
 * @param {Element} el The DOM element to observe
 * @param {Function} callback callback to be called on change
 * @param {object} [opts={childList: true, subtree: true}] observe options
 * @see http://stackoverflow.com/questions/3219758
 */


var observeDom = function observeDom(el, callback, opts)
/* istanbul ignore next: difficult to test in JSDOM */
{
  // Handle case where we might be passed a vue instance
  el = el ? el.$el || el : null;
  /* istanbul ignore next: difficult to test in JSDOM */

  if (!(0, _dom.isElement)(el)) {
    // We can't observe something that isn't an element
    return null;
  }

  var obs = null;

  if (MutationObserver) {
    // Define a new observer
    obs = new MutationObserver(function (mutations) {
      var changed = false; // A Mutation can contain several change records, so we loop through them to see what has changed.
      // We break out of the loop early if any "significant" change has been detected

      for (var i = 0; i < mutations.length && !changed; i++) {
        // The mutation record
        var mutation = mutations[i]; // Mutation Type

        var type = mutation.type; // DOM Node (could be any DOM Node type - HTMLElement, Text, comment, etc)

        var target = mutation.target;

        if (type === 'characterData' && target.nodeType === Node.TEXT_NODE) {
          // We ignore nodes that are not TEXT (i.e. comments, etc) as they don't change layout
          changed = true;
        } else if (type === 'attributes') {
          changed = true;
        } else if (type === 'childList' && (mutation.addedNodes.length > 0 || mutation.removedNodes.length > 0)) {
          // This includes HTMLElement and Text Nodes being added/removed/re-arranged
          changed = true;
        }
      }

      if (changed) {
        // We only call the callback if a change that could affect layout/size truely happened.
        callback();
      }
    }); // Have the observer observe foo for changes in children, etc

    obs.observe(el, _objectSpread({
      childList: true,
      subtree: true
    }, opts));
  } else if (eventListenerSupported) {
    // Legacy interface. most likely not used in modern browsers
    obs = fakeObserverFactory(el, callback);
  } // We return a reference to the observer so that obs.disconnect() can be called if necessary
  // To reduce overhead when the root element is hidden


  return obs;
};

var _default = observeDom;
exports.default = _default;

/***/ }),

/***/ "c01c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
// @vue/component
var _default = {
  model: {
    prop: 'value',
    event: 'update'
  },
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    ariaInvalid: {
      type: [Boolean, String],
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    plaintext: {
      type: Boolean,
      default: false
    },
    autocomplete: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    formatter: {
      type: Function,
      default: null
    },
    trim: {
      type: Boolean,
      default: false
    },
    number: {
      type: Boolean,
      default: false
    },
    lazyFormatter: {
      type: Boolean,
      value: false
    }
  },
  data: function data() {
    return {
      localValue: this.stringifyValue(this.value)
    };
  },
  computed: {
    computedClass: function computedClass() {
      return [{
        // Range input needs class custom-range
        'custom-range': this.type === 'range',
        // plaintext not supported by type=range or type=color
        'form-control-plaintext': this.plaintext && this.type !== 'range' && this.type !== 'color',
        // form-control not used by type=range or plaintext. Always used by type=color
        'form-control': !this.plaintext && this.type !== 'range' || this.type === 'color'
      }, this.sizeFormClass, this.stateClass];
    },
    computedAriaInvalid: function computedAriaInvalid() {
      if (!this.ariaInvalid || this.ariaInvalid === 'false') {
        // this.ariaInvalid is null or false or 'false'
        return this.computedState === false ? 'true' : null;
      }

      if (this.ariaInvalid === true) {
        // User wants explicit aria-invalid=true
        return 'true';
      } // Most likely a string value (which could be the string 'true')


      return this.ariaInvalid;
    }
  },
  watch: {
    value: function value(newVal, oldVal) {
      if (newVal !== oldVal && newVal !== this.localValue) {
        this.localValue = this.stringifyValue(newVal);
      }
    }
  },
  mounted: function mounted() {
    var value = this.stringifyValue(this.value);

    if (value !== this.localValue) {
      /* istanbul ignore next */
      this.localValue = value;
    }
  },
  methods: {
    stringifyValue: function stringifyValue(value) {
      return value === null || typeof value === 'undefined' ? '' : String(value);
    },
    getFormatted: function getFormatted(value, event) {
      var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      value = this.stringifyValue(value);

      if ((!this.lazyFormatter || force) && typeof this.formatter === 'function') {
        value = this.formatter(value, event);
      }

      return value;
    },
    updateValue: function updateValue(value) {
      value = this.stringifyValue(value);

      if (this.localValue !== value) {
        // keep the input set to the value before modifiers
        this.localValue = value;

        if (this.number) {
          // Emulate .number modifier behaviour
          var num = parseFloat(value);
          value = isNaN(num) ? value : num;
        } else if (this.trim) {
          // Emulate .trim modifier behaviour
          value = value.trim();
        } // Update the v-model


        this.$emit('update', value);
      }
    },
    onInput: function onInput(evt) {
      // evt.target.composing is set by Vue
      // https://github.com/vuejs/vue/blob/dev/src/platforms/web/runtime/directives/model.js

      /* istanbul ignore if: hard to test composition events */
      if (evt.target.composing) {
        return;
      }

      var formatted = this.getFormatted(evt.target.value, evt);

      if (formatted === false || evt.defaultPrevented) {
        evt.preventDefault();
        return;
      }

      this.updateValue(formatted);
      this.$emit('input', formatted);
    },
    onChange: function onChange(evt) {
      // evt.target.composing is set by Vue
      // https://github.com/vuejs/vue/blob/dev/src/platforms/web/runtime/directives/model.js

      /* istanbul ignore if: hard to test composition events */
      if (evt.target.composing) {
        return;
      }

      var formatted = this.getFormatted(evt.target.value, evt);

      if (formatted === false) {
        return;
      }

      this.updateValue(formatted);
      this.$emit('change', formatted);
    },
    onBlur: function onBlur(evt) {
      // lazy formatter
      if (this.lazyFormatter) {
        var formatted = this.getFormatted(evt.target.value, evt, true);

        if (formatted === false) {
          return;
        }

        this.updateValue(formatted);
      } // Emit native blur event


      this.$emit('blur', evt);
    },
    focus: function focus() {
      // For external handler that may want a focus method
      if (!this.disabled) {
        this.$el.focus();
      }
    },
    blur: function blur() {
      // For external handler that may want a blur method
      if (!this.disabled) {
        this.$el.blur();
      }
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "c190":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _popper = __webpack_require__("f0bd");

var _clickOut = __webpack_require__("788f");

var _focusIn = __webpack_require__("1186");

var _keyCodes = __webpack_require__("06e4");

var _bvEvent = __webpack_require__("f8bb");

var _warn = __webpack_require__("93e0");

var _dom = __webpack_require__("1611");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Return an Array of visible items
function filterVisible(els) {
  return (els || []).filter(_dom.isVisible);
} // Dropdown item CSS selectors
// TODO: .dropdown-form handling


var Selector = {
  FORM_CHILD: '.dropdown form',
  NAVBAR_NAV: '.navbar-nav',
  ITEM_SELECTOR: '.dropdown-item:not(.disabled):not([disabled])' // Popper attachment positions

};
var AttachmentMap = {
  // Dropup left align
  TOP: 'top-start',
  // Dropup right align
  TOPEND: 'top-end',
  // Dropdown left align
  BOTTOM: 'bottom-start',
  // Dropdown right align
  BOTTOMEND: 'bottom-end',
  // Dropright left align
  RIGHT: 'right-start',
  // Dropright right align
  RIGHTEND: 'right-end',
  // Dropleft left align
  LEFT: 'left-start',
  // Dropleft right align
  LEFTEND: 'left-end' // @vue/component

};
var _default2 = {
  mixins: [_clickOut.default, _focusIn.default],
  provide: function provide() {
    return {
      bvDropdown: this
    };
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    text: {
      // Button label
      type: String,
      default: ''
    },
    html: {
      // Button label
      type: String
    },
    dropup: {
      // place on top if possible
      type: Boolean,
      default: false
    },
    dropright: {
      // place right if possible
      type: Boolean,
      default: false
    },
    dropleft: {
      // place left if possible
      type: Boolean,
      default: false
    },
    right: {
      // Right align menu (default is left align)
      type: Boolean,
      default: false
    },
    offset: {
      // Number of pixels to offset menu, or a CSS unit value (i.e. 1px, 1rem, etc)
      type: [Number, String],
      default: 0
    },
    noFlip: {
      // Disable auto-flipping of menu from bottom<=>top
      type: Boolean,
      default: false
    },
    popperOpts: {
      // type: Object,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      visible: false,
      inNavbar: null,
      visibleChangePrevented: false
    };
  },
  computed: {
    toggler: function toggler() {
      var toggle = this.$refs.toggle;
      return toggle ? toggle.$el || toggle : null;
    }
  },
  watch: {
    visible: function visible(newValue, oldValue) {
      if (this.visibleChangePrevented) {
        this.visibleChangePrevented = false;
        return;
      }

      if (newValue !== oldValue) {
        var evtName = newValue ? 'show' : 'hide';
        var bvEvt = new _bvEvent.default(evtName, {
          cancelable: true,
          vueTarget: this,
          target: this.$refs.menu,
          relatedTarget: null
        });
        this.emitEvent(bvEvt);

        if (bvEvt.defaultPrevented) {
          // Reset value and exit if canceled
          this.visibleChangePrevented = true;
          this.visible = oldValue; // Just in case a child element triggereded this.hide(true)

          this.$off('hidden', this.focusToggler);
          return;
        }

        if (evtName === 'show') {
          this.showMenu();
        } else {
          this.hideMenu();
        }
      }
    },
    disabled: function disabled(newValue, oldValue) {
      if (newValue !== oldValue && newValue && this.visible) {
        // Hide dropdown if disabled changes to true
        this.visible = false;
      }
    }
  },
  created: function created() {
    // Create non-reactive property
    this._popper = null;
  },
  deactivated: function deactivated()
  /* istanbul ignore next: not easy to test */
  {
    // In case we are inside a `<keep-alive>`
    this.visible = false;
    this.whileOpenListen(false);
    this.removePopper();
  },
  beforeDestroy: function beforeDestroy()
  /* istanbul ignore next: not easy to test */
  {
    this.visible = false;
    this.whileOpenListen(false);
    this.removePopper();
  },
  methods: {
    // Event emitter
    emitEvent: function emitEvent(bvEvt) {
      var type = bvEvt.type;
      this.$emit(type, bvEvt);
      this.$root.$emit("bv::dropdown::".concat(type), bvEvt);
    },
    showMenu: function showMenu() {
      var _this = this;

      if (this.disabled) {
        return;
      } // Ensure other menus are closed


      this.$root.$emit('bv::dropdown::shown', this); // Are we in a navbar ?

      if (this.inNavbar === null && this.isNav) {
        this.inNavbar = Boolean((0, _dom.closest)('.navbar', this.$el));
      } // Disable totally Popper.js for Dropdown in Navbar

      /* istanbul ignore next: cant test popper in JSDOM */


      if (!this.inNavbar) {
        if (typeof _popper.default === 'undefined') {
          (0, _warn.default)('b-dropdown: Popper.js not found. Falling back to CSS positioning.');
        } else {
          // for dropup with alignment we use the parent element as popper container
          var element = this.dropup && this.right || this.split ? this.$el : this.$refs.toggle; // Make sure we have a reference to an element, not a component!

          element = element.$el || element; // Instantiate popper.js

          this.createPopper(element);
        }
      }

      this.whileOpenListen(true); // Wrap in nextTick to ensure menu is fully rendered/shown

      this.$nextTick(function () {
        // Focus on the menu container on show
        _this.focusMenu(); // Emit the shown event


        _this.$emit('shown');
      });
    },
    hideMenu: function hideMenu() {
      this.whileOpenListen(false);
      this.$root.$emit('bv::dropdown::hidden', this);
      this.$emit('hidden');
      this.removePopper();
    },
    createPopper: function createPopper(element)
    /* istanbul ignore next: cant test popper in JSDOM */
    {
      this.removePopper();
      this._popper = new _popper.default(element, this.$refs.menu, this.getPopperConfig());
    },
    removePopper: function removePopper()
    /* istanbul ignore next: cant test popper in JSDOM */
    {
      if (this._popper) {
        // Ensure popper event listeners are removed cleanly
        this._popper.destroy();
      }

      this._popper = null;
    },
    getPopperConfig: function getPopperConfig()
    /* istanbul ignore next: can't test popper in JSDOM */
    {
      var placement = AttachmentMap.BOTTOM;

      if (this.dropup) {
        placement = this.right ? AttachmentMap.TOPEND : AttachmentMap.TOP;
      } else if (this.dropright) {
        placement = AttachmentMap.RIGHT;
      } else if (this.dropleft) {
        placement = AttachmentMap.LEFT;
      } else if (this.right) {
        placement = AttachmentMap.BOTTOMEND;
      }

      var popperConfig = {
        placement: placement,
        modifiers: {
          offset: {
            offset: this.offset || 0
          },
          flip: {
            enabled: !this.noFlip
          }
        }
      };

      if (this.boundary) {
        popperConfig.modifiers.preventOverflow = {
          boundariesElement: this.boundary
        };
      }

      return _objectSpread({}, popperConfig, this.popperOpts || {});
    },
    whileOpenListen: function whileOpenListen(open) {
      // turn listeners on/off while open
      if (open) {
        // If another dropdown is opened
        this.$root.$on('bv::dropdown::shown', this.rootCloseListener); // Hide the dropdown when clicked outside

        this.listenForClickOut = true; // Hide the dropdown when it loses focus

        this.listenForFocusIn = true;
      } else {
        this.$root.$off('bv::dropdown::shown', this.rootCloseListener);
        this.listenForClickOut = false;
        this.listenForFocusIn = false;
      }
    },
    rootCloseListener: function rootCloseListener(vm) {
      if (vm !== this) {
        this.visible = false;
      }
    },
    show: function show() {
      // Public method to show dropdown
      if (this.disabled) {
        return;
      }

      this.visible = true;
    },
    hide: function hide() {
      var refocus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      // Public method to hide dropdown
      if (this.disabled) {
        return;
      }

      this.visible = false;

      if (refocus) {
        // Child element is closing the dropdown on click
        this.$once('hidden', this.focusToggler);
      }
    },
    toggle: function toggle(evt) {
      // Called only by a button that toggles the menu
      evt = evt || {};
      var type = evt.type;
      var key = evt.keyCode;

      if (type !== 'click' && !(type === 'keydown' && (key === _keyCodes.default.ENTER || key === _keyCodes.default.SPACE || key === _keyCodes.default.DOWN))) {
        // We only toggle on Click, Enter, Space, and Arrow Down
        return;
      }

      if (this.disabled) {
        this.visible = false;
        return;
      }

      this.$emit('toggle', evt);

      if (evt.defaultPrevented) {
        // Exit if canceled
        return;
      }

      evt.preventDefault();
      evt.stopPropagation(); // Toggle visibility

      this.visible = !this.visible;
    },
    click: function click(evt) {
      // Called only in split button mode, for the split button
      if (this.disabled) {
        this.visible = false;
        return;
      }

      this.$emit('click', evt);
    },
    onKeydown: function onKeydown(evt)
    /* istanbul ignore next: not easy to test */
    {
      // Called from dropdown menu context
      var key = evt.keyCode;

      if (key === _keyCodes.default.ESC) {
        // Close on ESC
        this.onEsc(evt);
      } else if (key === _keyCodes.default.TAB) {
        // Close on tab out
        this.onTab(evt);
      } else if (key === _keyCodes.default.DOWN) {
        // Down Arrow
        this.focusNext(evt, false);
      } else if (key === _keyCodes.default.UP) {
        // Up Arrow
        this.focusNext(evt, true);
      }
    },
    onEsc: function onEsc(evt)
    /* istanbul ignore next: not easy to test */
    {
      if (this.visible) {
        this.visible = false;
        evt.preventDefault();
        evt.stopPropagation(); // Return focus to original trigger button

        this.$once('hidden', this.focusToggler);
      }
    },
    onTab: function onTab(evt)
    /* istanbul ignore next: not easy to test */
    {// TODO: Need special handler for dealing with form inputs
      // Tab, if in a text-like input, we should just focus next item in the dropdown
      // Note: Inputs are in a special .dropdown-form container
    },
    onMouseOver: function onMouseOver(evt)
    /* istanbul ignore next: not easy to test */
    {// Removed mouseover focus handler
    },
    // Document click out listener
    clickOutHandler: function clickOutHandler() {
      if (this.visible) {
        this.visible = false;
      }
    },
    // Document focusin listener
    focusInHandler: function focusInHandler(evt) {
      // If focus leaves dropdown, hide it
      if (this.visible && !(0, _dom.contains)(this.$refs.menu, evt.target) && !(0, _dom.contains)(this.$refs.toggle, evt.target)) {
        this.visible = false;
      }
    },
    // Keyboard nav
    focusNext: function focusNext(evt, up) {
      var _this2 = this;

      if (!this.visible) {
        return;
      }

      evt.preventDefault();
      evt.stopPropagation();
      this.$nextTick(function () {
        var items = _this2.getItems();

        if (items.length < 1) {
          return;
        }

        var index = items.indexOf(evt.target);

        if (up && index > 0) {
          index--;
        } else if (!up && index < items.length - 1) {
          index++;
        }

        if (index < 0) {
          index = 0;
        }

        _this2.focusItem(index, items);
      });
    },
    focusItem: function focusItem(idx, items) {
      var el = items.find(function (el, i) {
        return i === idx;
      });

      if (el && (0, _dom.getAttr)(el, 'tabindex') !== '-1') {
        el.focus();
      }
    },
    getItems: function getItems() {
      // Get all items
      return filterVisible((0, _dom.selectAll)(Selector.ITEM_SELECTOR, this.$refs.menu));
    },
    focusMenu: function focusMenu() {
      this.$refs.menu.focus && this.$refs.menu.focus();
    },
    focusToggler: function focusToggler() {
      var toggler = this.toggler;

      if (toggler && toggler.focus) {
        toggler.focus();
      }
    }
  }
};
exports.default = _default2;

/***/ }),

/***/ "c366":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6821");
var toLength = __webpack_require__("9def");
var toAbsoluteIndex = __webpack_require__("77f1");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "c3a1":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("e6f3");
var enumBugKeys = __webpack_require__("1691");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "c4bd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _card = __webpack_require__("9e84");

var _cardHeader = __webpack_require__("1fae");

var _cardBody = __webpack_require__("b967");

var _cardTitle = __webpack_require__("cf89");

var _cardSubTitle = __webpack_require__("886b");

var _cardFooter = __webpack_require__("6f77");

var _cardImg = __webpack_require__("23c9");

var _cardImgLazy = __webpack_require__("90a3");

var _cardText = __webpack_require__("aafb");

var _cardGroup = __webpack_require__("e6c9");

var _plugins = __webpack_require__("0a8d");

var components = {
  BCard: _card.default,
  BCardHeader: _cardHeader.default,
  BCardBody: _cardBody.default,
  BCardTitle: _cardTitle.default,
  BCardSubTitle: _cardSubTitle.default,
  BCardFooter: _cardFooter.default,
  BCardImg: _cardImg.default,
  BCardImgLazy: _cardImgLazy.default,
  BCardText: _cardText.default,
  BCardGroup: _cardGroup.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "c4c4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _progressBar = __webpack_require__("cf15");

// @vue/component
var _default = {
  name: 'BProgress',
  components: {
    BProgressBar: _progressBar.default
  },
  provide: function provide() {
    return {
      bvProgress: this
    };
  },
  props: {
    // These props can be inherited via the child b-progress-bar(s)
    variant: {
      type: String,
      default: null
    },
    striped: {
      type: Boolean,
      default: false
    },
    animated: {
      type: Boolean,
      default: false
    },
    height: {
      type: String,
      default: null
    },
    precision: {
      type: Number,
      default: 0
    },
    showProgress: {
      type: Boolean,
      default: false
    },
    showValue: {
      type: Boolean,
      default: false
    },
    max: {
      type: Number,
      default: 100
    },
    // This prop is not inherited by child b-progress-bar(s)
    value: {
      type: Number,
      default: 0
    }
  },
  computed: {
    progressHeight: function progressHeight() {
      return {
        height: this.height || null
      };
    }
  },
  render: function render(h) {
    var childNodes = this.$slots.default;

    if (!childNodes) {
      childNodes = h('b-progress-bar', {
        props: {
          value: this.value,
          max: this.max,
          precision: this.precision,
          variant: this.variant,
          animated: this.animated,
          striped: this.striped,
          showProgress: this.showProgress,
          showValue: this.showValue
        }
      });
    }

    return h('div', {
      class: ['progress'],
      style: this.progressHeight
    }, [childNodes]);
  }
};
exports.default = _default;

/***/ }),

/***/ "c52a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _link = __webpack_require__("4e40");

var _vueFunctionalDataMerge = __webpack_require__("b42e");

var _pluckProps = __webpack_require__("9c97");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var linkProps = (0, _link.propsFactory)();
linkProps.href.default = undefined;
linkProps.to.default = undefined;

var props = _objectSpread({}, linkProps, {
  tag: {
    type: String,
    default: 'div'
  } // @vue/component

});

exports.props = props;
var _default = {
  name: 'BNavbarBrand',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var isLink = Boolean(props.to || props.href);
    var tag = isLink ? _link.default : props.tag;
    return h(tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'navbar-brand',
      props: isLink ? (0, _pluckProps.default)(linkProps, props) : {}
    }), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "c542":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _array = __webpack_require__("bb2f");

var _dom = __webpack_require__("1611");

var _ssr = __webpack_require__("c900");

var _observeDom = __webpack_require__("bf9c");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var PLACEMENTS = {
  top: 'top',
  topleft: 'topleft',
  topright: 'topright',
  right: 'right',
  righttop: 'righttop',
  rightbottom: 'rightbottom',
  bottom: 'bottom',
  bottomleft: 'bottomleft',
  bottomright: 'bottomright',
  left: 'left',
  lefttop: 'lefttop',
  leftbottom: 'leftbottom',
  auto: 'auto'
};
var OBSERVER_CONFIG = {
  subtree: true,
  childList: true,
  characterData: true,
  attributes: true,
  attributeFilter: ['class', 'style'] // @vue/component

};
var _default = {
  props: {
    target: {
      // String ID of element, or element/component reference
      type: [String, Object, _ssr.HTMLElement, Function] // default: undefined

    },
    delay: {
      type: [Number, Object, String],
      default: 0
    },
    offset: {
      type: [Number, String],
      default: 0
    },
    noFade: {
      type: Boolean,
      default: false
    },
    container: {
      // String ID of container, if null body is used (default)
      type: String,
      default: null
    },
    boundary: {
      // String: scrollParent, window, or viewport
      // Element: element reference
      type: [String, _ssr.HTMLElement],
      default: 'scrollParent'
    },
    boundaryPadding: {
      type: Number,
      default: 5
    },
    show: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    baseConfig: function baseConfig() {
      var cont = this.container;
      var delay = _typeof(this.delay) === 'object' ? this.delay : parseInt(this.delay, 10) || 0;
      return {
        // Title prop
        title: (this.title || '').trim() || '',
        // Contnt prop (if popover)
        content: (this.content || '').trim() || '',
        // Tooltip/Popover placement
        placement: PLACEMENTS[this.placement] || 'auto',
        // Container curently needs to be an ID with '#' prepended, if null then body is used
        container: cont ? /^#/.test(cont) ? cont : "#".concat(cont) : false,
        // boundariesElement passed to popper
        boundary: this.boundary,
        // boundariesElement padding passed to popper
        boundaryPadding: this.boundaryPadding,
        // Show/Hide delay
        delay: delay || 0,
        // Offset can be css distance. if no units, pixels are assumed
        offset: this.offset || 0,
        // Disable fade Animation?
        animation: !this.noFade,
        // Open/Close Trigger(s)
        trigger: (0, _array.isArray)(this.triggers) ? this.triggers.join(' ') : this.triggers,
        // Callbacks so we can trigger events on component
        callbacks: {
          show: this.onShow,
          shown: this.onShown,
          hide: this.onHide,
          hidden: this.onHidden,
          enabled: this.onEnabled,
          disabled: this.onDisabled
        }
      };
    }
  },
  watch: {
    show: function show(_show, old) {
      /* istanbul ignore if */
      if (_show === old) {
        /* istanbul ignore next */
        return;
      }

      _show ? this.onOpen() : this.onClose();
    },
    disabled: function disabled(_disabled, old) {
      /* istanbul ignore if */
      if (_disabled === old) {
        /* istanbul ignore next */
        return;
      }

      _disabled ? this.onDisable() : this.onEnable();
    }
  },
  created: function created() {
    // Create non-reactive property
    this._toolpop = null;
    this._obs_title = null;
    this._obs_content = null;
  },
  mounted: function mounted() {
    var _this = this;

    // We do this in a next tick to ensure DOM has rendered first
    this.$nextTick(function () {
      // Instantiate ToolTip/PopOver on target
      // The createToolpop method must exist in main component
      if (_this.createToolpop()) {
        if (_this.disabled) {
          // Initially disabled
          _this.onDisable();
        } // Listen to open signals from others


        _this.$on('open', _this.onOpen); // Listen to close signals from others


        _this.$on('close', _this.onClose); // Listen to disable signals from others


        _this.$on('disable', _this.onDisable); // Listen to disable signals from others


        _this.$on('enable', _this.onEnable); // Observe content Child changes so we can notify popper of possible size change


        _this.setObservers(true); // Set intially open state


        if (_this.show) {
          _this.onOpen();
        }
      }
    });
  },
  updated: function updated() {
    // If content/props changes, etc

    /* istanbul ignore next: can't test in JSDOM */
    if (this._toolpop) {
      this._toolpop.updateConfig(this.getConfig());
    }
  },
  activated: function activated() {
    // Called when component is inside a <keep-alive> and component brought offline

    /* istanbul ignore next: can't test in JSDOM */
    this.setObservers(true);
  },
  deactivated: function deactivated() {
    // Called when component is inside a <keep-alive> and component taken offline

    /* istanbul ignore next: can't test in JSDOM */
    if (this._toolpop) {
      this.setObservers(false);

      this._toolpop.hide();
    }
  },
  beforeDestroy: function beforeDestroy()
  /* istanbul ignore next: not easy to test */
  {
    // Shutdown our local event listeners
    this.$off('open', this.onOpen);
    this.$off('close', this.onClose);
    this.$off('disable', this.onDisable);
    this.$off('enable', this.onEnable);
    this.setObservers(false); // bring our content back if needed

    this.bringItBack();

    if (this._toolpop) {
      this._toolpop.destroy();

      this._toolpop = null;
    }
  },
  methods: {
    getConfig: function getConfig() {
      var cfg = _objectSpread({}, this.baseConfig);

      if (this.$refs.title && this.$refs.title.innerHTML.trim()) {
        // If slot has content, it overrides 'title' prop
        // We use the DOM node as content to allow components!
        cfg.title = this.$refs.title;
        cfg.html = true;
      }

      if (this.$refs.content && this.$refs.content.innerHTML.trim()) {
        // If slot has content, it overrides 'content' prop
        // We use the DOM node as content to allow components!
        cfg.content = this.$refs.content;
        cfg.html = true;
      }

      return cfg;
    },
    onOpen: function onOpen() {
      if (this._toolpop) {
        this._toolpop.show();
      }
    },
    onClose: function onClose(callback) {
      if (this._toolpop) {
        this._toolpop.hide(callback);
      } else if (typeof callback === 'function') {
        callback();
      }
    },
    onDisable: function onDisable() {
      /* istanbul ignore next: can't test in JSDOM */
      if (this._toolpop) {
        this._toolpop.disable();
      }
    },
    onEnable: function onEnable() {
      /* istanbul ignore next: can't test in JSDOM */
      if (this._toolpop) {
        this._toolpop.enable();
      }
    },
    updatePosition: function updatePosition() {
      /* istanbul ignore next: can't test in JSDOM */
      if (this._toolpop) {
        // Instruct popper to reposition popover if necessary
        this._toolpop.update();
      }
    },
    getTarget: function getTarget() {
      var target = this.target;

      if (typeof target === 'function') {
        target = target();
      }

      if (typeof target === 'string') {
        // Assume ID of element
        return (0, _dom.getById)(target);
      } else if (_typeof(target) === 'object' && (0, _dom.isElement)(target.$el)) {
        // Component reference
        return target.$el;
      } else if (_typeof(target) === 'object' && (0, _dom.isElement)(target)) {
        // Element reference
        return target;
      }

      return null;
    },
    onShow: function onShow(evt) {
      this.$emit('show', evt);
    },
    onShown: function onShown(evt) {
      this.setObservers(true);
      this.$emit('update:show', true);
      this.$emit('shown', evt);
    },
    onHide: function onHide(evt) {
      this.$emit('hide', evt);
    },
    onHidden: function onHidden(evt) {
      this.setObservers(false); // bring our content back if needed to keep Vue happy
      // Tooltip class will move it back to tip when shown again

      this.bringItBack();
      this.$emit('update:show', false);
      this.$emit('hidden', evt);
    },
    onEnabled: function onEnabled(evt) {
      if (!evt || evt.type !== 'enabled') {
        // Prevent possible endless loop if user mistakienly fires enabled instead of enable
        return;
      }

      this.$emit('update:disabled', false);
      this.$emit('disabled');
    },
    onDisabled: function onDisabled(evt) {
      if (!evt || evt.type !== 'disabled') {
        // Prevent possible endless loop if user mistakienly fires disabled instead of disable
        return;
      }

      this.$emit('update:disabled', true);
      this.$emit('enabled');
    },
    bringItBack: function bringItBack() {
      // bring our content back if needed to keep Vue happy
      if (this.$el && this.$refs.title) {
        this.$el.appendChild(this.$refs.title);
      }

      if (this.$el && this.$refs.content) {
        this.$el.appendChild(this.$refs.content);
      }
    },
    setObservers: function setObservers(on)
    /* istanbul ignore next: can't test in JSDOM */
    {
      if (on) {
        if (this.$refs.title) {
          this._obs_title = (0, _observeDom.default)(this.$refs.title, this.updatePosition.bind(this), OBSERVER_CONFIG);
        }

        if (this.$refs.content) {
          this._obs_content = (0, _observeDom.default)(this.$refs.content, this.updatePosition.bind(this), OBSERVER_CONFIG);
        }
      } else {
        if (this._obs_title) {
          this._obs_title.disconnect();

          this._obs_title = null;
        }

        if (this._obs_content) {
          this._obs_content.disconnect();

          this._obs_content = null;
        }
      }
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "c57f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = textSelectionActive;

var _dom = __webpack_require__("1611");

// Helper to determine if a there is an active text selection on the document page.
// Used to filter out click events caused by the mouse up at end of selection
//
// Accepts an element as only argument to test to see if selection overlaps or is
// contained within the element
function textSelectionActive() {
  var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
  var win = window;
  /* istanbul ignore if: JSDOM doesn't support getSelection */

  if (win && win.getSelection && win.getSelection().toString() !== '' && (0, _dom.isElement)(el)) {
    /* istanbul ignore next: JSDOM doesn't support getSelection */
    var sel = win.getSelection();
    /* istanbul ignore next: JSDOM doesn't support getSelection */

    return sel.containsNode ? sel.containsNode(el, true) : false;
  } else {
    return false;
  }
}

/***/ }),

/***/ "c5f6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var has = __webpack_require__("69a8");
var cof = __webpack_require__("2d95");
var inheritIfRequired = __webpack_require__("5dbc");
var toPrimitive = __webpack_require__("6a99");
var fails = __webpack_require__("79e5");
var gOPN = __webpack_require__("9093").f;
var gOPD = __webpack_require__("11e9").f;
var dP = __webpack_require__("86cc").f;
var $trim = __webpack_require__("aa77").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("2aeb")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("9e1e") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("2aba")(global, NUMBER, $Number);
}


/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "c76d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c7b9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _dropdown = __webpack_require__("e14e");

var _dropdownItem = __webpack_require__("0096");

var _dropdownItemButton = __webpack_require__("5df9");

var _dropdownHeader = __webpack_require__("9668");

var _dropdownDivider = __webpack_require__("4034");

var _dropdownForm = __webpack_require__("22dc");

var _dropdownText = __webpack_require__("9d3f");

var _plugins = __webpack_require__("0a8d");

var components = {
  BDropdown: _dropdown.default,
  BDd: _dropdown.default,
  BDropdownItem: _dropdownItem.default,
  BDdItem: _dropdownItem.default,
  BDropdownItemButton: _dropdownItemButton.default,
  BDropdownItemBtn: _dropdownItemButton.default,
  BDdItemButton: _dropdownItemButton.default,
  BDdItemBtn: _dropdownItemButton.default,
  BDropdownHeader: _dropdownHeader.default,
  BDdHeader: _dropdownHeader.default,
  BDropdownDivider: _dropdownDivider.default,
  BDdDivider: _dropdownDivider.default,
  BDropdownForm: _dropdownForm.default,
  BDdForm: _dropdownForm.default,
  BDropdownText: _dropdownText.default,
  BDdText: _dropdownText.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "c8b5":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(window, document, exportName, undefined) {
  'use strict';

var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}

/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}

/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;

    if (!obj) {
        return;
    }

    if (obj.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    } else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}

/**
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */
function deprecate(method, name, message) {
    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
    return function() {
        var e = new Error('get-stack-trace');
        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
            .replace(/^\s+at\s+/gm, '')
            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

        var log = window.console && (window.console.warn || window.console.log);
        if (log) {
            log.call(window.console, deprecationMessage, stack);
        }
        return method.apply(this, arguments);
    };
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */
var assign;
if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
        if (target === undefined || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var output = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source !== undefined && source !== null) {
                for (var nextKey in source) {
                    if (source.hasOwnProperty(nextKey)) {
                        output[nextKey] = source[nextKey];
                    }
                }
            }
        }
        return output;
    };
} else {
    assign = Object.assign;
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */
var extend = deprecate(function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined)) {
            dest[keys[i]] = src[keys[i]];
        }
        i++;
    }
    return dest;
}, 'extend', 'Use `assign`.');

/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
var merge = deprecate(function merge(dest, src) {
    return extend(dest, src, true);
}, 'merge', 'Use `assign`.');

/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;

    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
        assign(childP, properties);
    }
}

/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}

/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
}

/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
}

/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.addEventListener(type, handler, false);
    });
}

/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.removeEventListener(type, handler, false);
    });
}

/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}

/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}

/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    } else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}

/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }

    if (sort) {
        if (!key) {
            results = results.sort();
        } else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
    }

    return results;
}

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);

    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;

        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined;
}

/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}

/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return (doc.defaultView || doc.parentWindow || window);
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function(ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };

    this.init();

}

Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function() { },

    /**
     * bind the events
     */
    init: function() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    /**
     * unbind the events
     */
    destroy: function() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};

/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
        Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    } else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}

/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
        manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);

    manager.recognize(input);
    manager.session.prevInput = input;
}

/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
        session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;

    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);

    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}

function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };

        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity, velocityX, velocityY, direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = input.deltaX - last.deltaX;
        var deltaY = input.deltaY - last.deltaY;

        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);

        session.lastInterval = input;
    } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}

/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }

    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}

/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }

    var x = 0, y = 0, i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }

    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}

/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}

/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];

    return Math.sqrt((x * x) + (y * y));
}

/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];

        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }

        // mouse must be down
        if (!this.pressed) {
            return;
        }

        if (eventType & INPUT_END) {
            this.pressed = false;
        }

        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});

var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};

// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
if (window.MSPointerEvent && !window.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;

    Input.apply(this, arguments);

    this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;

        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

        // get index of the event in the store
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
            }
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }

        // it not found, so the pointer hasn't been down (so it's probably a hover)
        if (storeIndex < 0) {
            return;
        }

        // update the event in the store
        store[storeIndex] = ev;

        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });

        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});

var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;

    Input.apply(this, arguments);
}

inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

        // should we handle the touch events?
        if (type === INPUT_START) {
            this.started = true;
        }

        if (!this.started) {
            return;
        }

        var touches = normalizeSingleTouches.call(this, ev, type);

        // when done, reset the started state
        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
}

var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */
function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};

    Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }

    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;

    // get target touches from touches
    targetTouches = allTouches.filter(function(touch) {
        return hasParent(touch.target, target);
    });

    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }

        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }

    if (!changedTargetTouches.length) {
        return;
    }

    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */

var DEDUP_TIMEOUT = 2500;
var DEDUP_DISTANCE = 25;

function TouchMouseInput() {
    Input.apply(this, arguments);

    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);

    this.primaryTouch = null;
    this.lastTouches = [];
}

inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
            return;
        }

        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
        if (isTouch) {
            recordTouches.call(this, inputEvent, inputData);
        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
            return;
        }

        this.callback(manager, inputEvent, inputData);
    },

    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});

function recordTouches(eventType, eventData) {
    if (eventType & INPUT_START) {
        this.primaryTouch = eventData.changedPointers[0].identifier;
        setLastTouch.call(this, eventData);
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        setLastTouch.call(this, eventData);
    }
}

function setLastTouch(eventData) {
    var touch = eventData.changedPointers[0];

    if (touch.identifier === this.primaryTouch) {
        var lastTouch = {x: touch.clientX, y: touch.clientY};
        this.lastTouches.push(lastTouch);
        var lts = this.lastTouches;
        var removeLastTouch = function() {
            var i = lts.indexOf(lastTouch);
            if (i > -1) {
                lts.splice(i, 1);
            }
        };
        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
    }
}

function isSyntheticEvent(eventData) {
    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
    for (var i = 0; i < this.lastTouches.length; i++) {
        var t = this.lastTouches[i];
        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
            return true;
        }
    }
    return false;
}

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';
var TOUCH_ACTION_MAP = getTouchActionProps();

/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}

TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function(value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },

    /**
     * just re-set the touchAction value
     */
    update: function() {
        this.set(this.manager.options.touchAction);
    },

    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function() {
        var actions = [];
        each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },

    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function(input) {
        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;

        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

        if (hasNone) {
            //do not prevent defaults if this is a tap gesture

            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;

            if (isTapPointer && isTapMovement && isTapTouchTime) {
                return;
            }
        }

        if (hasPanX && hasPanY) {
            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
        }

        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },

    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};

/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_NONE;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
}

function getTouchActionProps() {
    if (!NATIVE_TOUCH_ACTION) {
        return false;
    }
    var touchMap = {};
    var cssSupports = window.CSS && window.CSS.supports;
    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

        // If css.supports is not supported but there is native touch-action assume it supports
        // all values. This is the case for IE 10 and 11.
        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
    });
    return touchMap;
}

/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.options = assign({}, this.defaults, options || {});

    this.id = uniqueId();

    this.manager = null;

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);

    this.state = STATE_POSSIBLE;

    this.simultaneous = {};
    this.requireFail = [];
}

Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},

    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function(options) {
        assign(this.options, options);

        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },

    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },

    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },

    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },

    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },

    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function() {
        return this.requireFail.length > 0;
    },

    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },

    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function(input) {
        var self = this;
        var state = this.state;

        function emit(event) {
            self.manager.emit(event, input);
        }

        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }

        emit(self.options.event); // simple 'eventName' events

        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
            emit(input.additionalEvent);
        }

        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }
    },

    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function(input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },

    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function() {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },

    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = assign({}, inputData);

        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }

        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone);

        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },

    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function(inputData) { }, // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function() { },

    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function() { }
};

/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    } else if (state & STATE_ENDED) {
        return 'end';
    } else if (state & STATE_CHANGED) {
        return 'move';
    } else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}

/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    } else if (direction == DIRECTION_UP) {
        return 'up';
    } else if (direction == DIRECTION_LEFT) {
        return 'left';
    } else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}

/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}

/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },

    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function(input) {
        var state = this.state;
        var eventType = input.eventType;

        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);

        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});

/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);

    this.pX = null;
    this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },

    getTouchAction: function() {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },

    directionTest: function(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;

        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            } else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },

    attrTest: function(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },

    emit: function(input) {

        this.pX = input.deltaX;
        this.pY = input.deltaY;

        var direction = directionStr(input.direction);

        if (direction) {
            input.additionalEvent = this.options.event + direction;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },

    emit: function(input) {
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            input.additionalEvent = this.options.event + inOut;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);

    this._timer = null;
    this._input = null;
}

inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 251, // minimal time of the pointer to be pressed
        threshold: 9 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_AUTO];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;

        this._input = input;

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function(input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }

        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});

/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },

    getTouchAction: function() {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },

    attrTest: function(input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
        } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
        }

        return this._super.attrTest.call(this, input) &&
            direction & input.offsetDirection &&
            input.distance > this.options.threshold &&
            input.maxPointers == this.options.pointers &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },

    emit: function(input) {
        var direction = directionStr(input.offsetDirection);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
    }
});

/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;

    this._timer = null;
    this._input = null;
    this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300, // max time between the multi-tap taps
        time: 250, // max time of the pointer to be down (like finger on the screen)
        threshold: 9, // a minimal movement is ok, but keep it low
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_MANIPULATION];
    },

    process: function(input) {
        var options = this.options;

        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;

        this.reset();

        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }

            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
                this.count = 1;
            } else {
                this.count += 1;
            }

            this._input = input;

            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                } else {
                    this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },

    failTimeout: function() {
        this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function() {
        if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
}

/**
 * @const {string}
 */
Hammer.VERSION = '2.0.7';

/**
 * default settings
 * @namespace
 */
Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, {enable: false}],
        [PinchRecognizer, {enable: false}, ['rotate']],
        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
        [PressRecognizer]
    ],

    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',

        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',

        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',

        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',

        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',

        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};

var STOP = 1;
var FORCED_STOP = 2;

/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    this.options = assign({}, Hammer.defaults, options || {});

    this.options.inputTarget = this.options.inputTarget || element;

    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};

    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);

    toggleCssProps(this, true);

    each(this.options.recognizers, function(item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}

Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function(options) {
        assign(this.options, options);

        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },

    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },

    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }

        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);

        var recognizer;
        var recognizers = this.recognizers;

        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;

        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }

        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];

            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && ( // 1
                    !curRecognizer || recognizer == curRecognizer || // 2
                    recognizer.canRecognizeWith(curRecognizer))) { // 3
                recognizer.recognize(inputData);
            } else {
                recognizer.reset();
            }

            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },

    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function(recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }

        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },

    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function(recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }

        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;

        this.touchAction.update();
        return recognizer;
    },

    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function(recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }

        recognizer = this.get(recognizer);

        // let's make sure this recognizer exists
        if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);

            if (index !== -1) {
                recognizers.splice(index, 1);
                this.touchAction.update();
            }
        }

        return this;
    },

    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function(events, handler) {
        if (events === undefined) {
            return;
        }
        if (handler === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },

    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function(events, handler) {
        if (events === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            if (!handler) {
                delete handlers[event];
            } else {
                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },

    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function(event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }

        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }

        data.type = event;
        data.preventDefault = function() {
            data.srcEvent.preventDefault();
        };

        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },

    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function() {
        this.element && toggleCssProps(this, false);

        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};

/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    if (!element.style) {
        return;
    }
    var prop;
    each(manager.options.cssProps, function(value, name) {
        prop = prefixed(element.style, name);
        if (add) {
            manager.oldCssProps[prop] = element.style[prop];
            element.style[prop] = value;
        } else {
            element.style[prop] = manager.oldCssProps[prop] || '';
        }
    });
    if (!add) {
        manager.oldCssProps = {};
    }
}

/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}

assign(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,

    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,

    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,

    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,

    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,

    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,

    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    assign: assign,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});

// this prevents errors when Hammer is loaded in the presence of an AMD
//  style loader but by script tag, not by the loader.
var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
freeGlobal.Hammer = Hammer;

if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return Hammer;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {}

})(window, document, 'Hammer');


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "c900":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.HTMLElement = void 0;
// Polyfills for SSR
var isSSR = typeof window === 'undefined';
var HTMLElement = isSSR ? Object : window.HTMLElement;
exports.HTMLElement = HTMLElement;

/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cab0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var noop = function noop() {};

var _default = noop;
exports.default = _default;

/***/ }),

/***/ "cadf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("9c6c");
var step = __webpack_require__("d53b");
var Iterators = __webpack_require__("84f2");
var toIObject = __webpack_require__("6821");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("01f9")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "cc37":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__("b42e");

var _array = __webpack_require__("bb2f");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var props = {
  type: {
    type: String,
    default: 'iframe',
    validator: function validator(str) {
      return (0, _array.arrayIncludes)(['iframe', 'embed', 'video', 'object', 'img', 'b-img', 'b-img-lazy'], str);
    }
  },
  tag: {
    type: String,
    default: 'div'
  },
  aspect: {
    type: String,
    default: '16by9'
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BEmbed',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, {
      ref: data.ref,
      staticClass: 'embed-responsive',
      class: _defineProperty({}, "embed-responsive-".concat(props.aspect), Boolean(props.aspect))
    }, [h(props.type, (0, _vueFunctionalDataMerge.mergeData)(data, {
      ref: '',
      staticClass: 'embed-responsive-item'
    }), children)]);
  }
};
exports.default = _default;

/***/ }),

/***/ "ce10":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("69a8");
var toIObject = __webpack_require__("6821");
var arrayIndexOf = __webpack_require__("c366")(false);
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "ce7e":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("63b6");
var core = __webpack_require__("584a");
var fails = __webpack_require__("294c");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "cf15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _html = __webpack_require__("be11");

// @vue/component
var _default2 = {
  name: 'BProgressBar',
  inject: {
    bvProgress: {
      default: function _default()
      /* istanbul ignore next */
      {
        return {};
      }
    }
  },
  props: {
    value: {
      type: Number,
      default: 0
    },
    label: {
      type: String,
      default: null
    },
    labelHtml: {
      type: String
    },
    // $parent (this.bvProgress) prop values may take precedence over the following props
    // Which is why they are defaulted to null
    max: {
      type: Number,
      default: null
    },
    precision: {
      type: Number,
      default: null
    },
    variant: {
      type: String,
      default: null
    },
    striped: {
      type: Boolean,
      default: null
    },
    animated: {
      type: Boolean,
      default: null
    },
    showProgress: {
      type: Boolean,
      default: null
    },
    showValue: {
      type: Boolean,
      default: null
    }
  },
  computed: {
    progressBarClasses: function progressBarClasses() {
      return [this.computedVariant ? "bg-".concat(this.computedVariant) : '', this.computedStriped || this.computedAnimated ? 'progress-bar-striped' : '', this.computedAnimated ? 'progress-bar-animated' : ''];
    },
    progressBarStyles: function progressBarStyles() {
      return {
        width: 100 * (this.value / this.computedMax) + '%'
      };
    },
    computedProgress: function computedProgress() {
      var p = Math.pow(10, this.computedPrecision);
      return Math.round(100 * p * this.value / this.computedMax) / p;
    },
    computedMax: function computedMax() {
      // Prefer our max over parent setting
      return typeof this.max === 'number' ? this.max : this.bvProgress.max || 100;
    },
    computedVariant: function computedVariant() {
      // Prefer our variant over parent setting
      return this.variant || this.bvProgress.variant;
    },
    computedPrecision: function computedPrecision() {
      // Prefer our precision over parent setting
      return typeof this.precision === 'number' ? this.precision : this.bvProgress.precision || 0;
    },
    computedStriped: function computedStriped() {
      // Prefer our striped over parent setting
      return typeof this.striped === 'boolean' ? this.striped : this.bvProgress.striped || false;
    },
    computedAnimated: function computedAnimated() {
      // Prefer our animated over parent setting
      return typeof this.animated === 'boolean' ? this.animated : this.bvProgress.animated || false;
    },
    computedShowProgress: function computedShowProgress() {
      // Prefer our showProgress over parent setting
      return typeof this.showProgress === 'boolean' ? this.showProgress : this.bvProgress.showProgress || false;
    },
    computedShowValue: function computedShowValue() {
      // Prefer our showValue over parent setting
      return typeof this.showValue === 'boolean' ? this.showValue : this.bvProgress.showValue || false;
    }
  },
  render: function render(h) {
    var childNodes = h(false);

    if (this.$slots.default) {
      childNodes = this.$slots.default;
    } else if (this.label || this.labelHtml) {
      childNodes = h('span', {
        domProps: (0, _html.htmlOrText)(this.labelHtml, this.label)
      });
    } else if (this.computedShowProgress) {
      childNodes = this.computedProgress.toFixed(this.computedPrecision);
    } else if (this.computedShowValue) {
      childNodes = this.value.toFixed(this.computedPrecision);
    }

    return h('div', {
      staticClass: 'progress-bar',
      class: this.progressBarClasses,
      style: this.progressBarStyles,
      attrs: {
        role: 'progressbar',
        'aria-valuemin': '0',
        'aria-valuemax': this.computedMax.toString(),
        'aria-valuenow': this.value.toFixed(this.computedPrecision)
      }
    }, [childNodes]);
  }
};
exports.default = _default2;

/***/ }),

/***/ "cf89":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__("b42e");

var props = {
  title: {
    type: String,
    default: ''
  },
  titleTag: {
    type: String,
    default: 'h4'
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BCardTitle',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.titleTag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'card-title'
    }), children || props.title);
  }
};
exports.default = _default;

/***/ }),

/***/ "d239":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _id = __webpack_require__("eae0");

var _formState = __webpack_require__("41fb");

var _config = __webpack_require__("eb60");

var _upperFirst = __webpack_require__("5540");

var _memoize = __webpack_require__("64bb");

var _warn = __webpack_require__("93e0");

var _dom = __webpack_require__("1611");

var _array = __webpack_require__("bb2f");

var _object = __webpack_require__("24e2");

var _formRow = __webpack_require__("1665");

var _col = __webpack_require__("7d02");

var _formText = __webpack_require__("0903");

var _formInvalidFeedback = __webpack_require__("ebd1");

var _formValidFeedback = __webpack_require__("ad48");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Selector for finding first input in the form-group
var SELECTOR = 'input:not(:disabled),textarea:not(:disabled),select:not(:disabled)'; // Memoize this function to return cached values to save time in computed functions

var makePropName = (0, _memoize.default)(function () {
  var breakpoint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var prefix = arguments.length > 1 ? arguments[1] : undefined;
  return "".concat(prefix).concat((0, _upperFirst.default)(breakpoint));
});
var DEPRECATED_MSG = 'Props "horizontal" and "breakpoint" are deprecated. Use "label-cols(-{breakpoint})" props instead.'; // render helper functions (here rather than polluting the instance with more methods)

function renderInvalidFeedback(h, ctx) {
  var content = ctx.$slots['invalid-feedback'] || ctx.invalidFeedback;
  var invalidFeedback = h(false);

  if (content) {
    invalidFeedback = h('b-form-invalid-feedback', {
      props: {
        id: ctx.invalidFeedbackId,
        // If state is explicitly false, always show the feedback
        state: ctx.computedState,
        tooltip: ctx.tooltip
      },
      attrs: {
        tabindex: content ? '-1' : null,
        role: 'alert',
        'aria-live': 'assertive',
        'aria-atomic': 'true'
      }
    }, [content]);
  }

  return invalidFeedback;
}

function renderValidFeedback(h, ctx) {
  var content = ctx.$slots['valid-feedback'] || ctx.validFeedback;
  var validFeedback = h(false);

  if (content) {
    validFeedback = h('b-form-valid-feedback', {
      props: {
        id: ctx.validFeedbackId,
        // If state is explicitly true, always show the feedback
        state: ctx.computedState,
        tooltip: ctx.tooltip
      },
      attrs: {
        tabindex: '-1',
        role: 'alert',
        'aria-live': 'assertive',
        'aria-atomic': 'true'
      }
    }, [content]);
  }

  return validFeedback;
}

function renderHelpText(h, ctx) {
  // Form help text (description)
  var content = ctx.$slots['description'] || ctx.description;
  var description = h(false);

  if (content) {
    description = h('b-form-text', {
      attrs: {
        id: ctx.descriptionId,
        tabindex: '-1'
      }
    }, [content]);
  }

  return description;
}

function renderLabel(h, ctx) {
  // render label/legend inside b-col if necessary
  var content = ctx.$slots['label'] || ctx.label;
  var labelFor = ctx.labelFor;
  var isLegend = !labelFor;
  var isHorizontal = ctx.isHorizontal;
  var labelTag = isLegend ? 'legend' : 'label';

  if (!content && !isHorizontal) {
    return h(false);
  } else if (ctx.labelSrOnly) {
    var label = h(false);

    if (content) {
      label = h(labelTag, {
        class: 'sr-only',
        attrs: {
          id: ctx.labelId,
          for: labelFor || null
        }
      }, [content]);
    }

    return h(isHorizontal ? 'b-col' : 'div', {
      props: isHorizontal ? ctx.labelColProps : {}
    }, [label]);
  } else {
    return h(isHorizontal ? 'b-col' : labelTag, {
      on: isLegend ? {
        click: ctx.legendClick
      } : {},
      props: isHorizontal ? _objectSpread({
        tag: labelTag
      }, ctx.labelColProps) : {},
      attrs: {
        id: ctx.labelId,
        for: labelFor || null,
        // We add a tab index to legend so that screen readers will properly read the aria-labelledby in IE.
        tabindex: isLegend ? '-1' : null
      },
      class: [// When horizontal or if a legend is rendered, add col-form-label for correct sizing
      // as Bootstrap has inconsitent font styling for legend in non-horiontal form-groups.
      // See: https://github.com/twbs/bootstrap/issues/27805
      isHorizontal || isLegend ? 'col-form-label' : '', // Emulate label padding top of 0 on legend when not horizontal
      !isHorizontal && isLegend ? 'pt-0' : '', // If not horizontal and not a legend, we add d-block to label so that label-align works
      !isHorizontal && !isLegend ? 'd-block' : '', ctx.labelSize ? "col-form-label-".concat(ctx.labelSize) : '', ctx.labelAlignClasses, ctx.labelClass]
    }, [content]);
  }
} //
// Async (lazy) component for BFormGroup
// Needed so that the breakpoint specific props can be computed once hte config is created
//


var _default = function _default(resolve, reject) {
  // Grab the current config for breakpoints
  var BREAKPOINTS = (0, _config.getBreakpointsUp)(); // Generate the labelCol breakpoint props

  var bpLabelColProps = BREAKPOINTS.reduce(function (props, breakpoint) {
    // i.e. label-cols, label-cols-sm, label-cols-md, ...
    props[makePropName(breakpoint, 'labelCols')] = {
      type: [Number, String, Boolean],
      default: breakpoint ? false : null
    };
    return props;
  }, (0, _object.create)(null)); // Generate the labelAlign breakpoint props

  var bpLabelAlignProps = BREAKPOINTS.reduce(function (props, breakpoint) {
    // label-align, label-align-sm, label-align-md, ...
    props[makePropName(breakpoint, 'labelAlign')] = {
      type: String,
      // left, right, center
      default: null
    };
    return props;
  }, (0, _object.create)(null)); // @vue/component

  var BFormGroup = {
    name: 'BFormGroup',
    components: {
      BFormRow: _formRow.default,
      BCol: _col.default,
      BFormInvalidFeedback: _formInvalidFeedback.default,
      BFormValidFeedback: _formValidFeedback.default,
      BFormText: _formText.default
    },
    mixins: [_id.default, _formState.default],
    props: _objectSpread({
      label: {
        type: String,
        default: null
      },
      labelFor: {
        type: String,
        default: null
      },
      labelSize: {
        type: String,
        default: null
      },
      labelSrOnly: {
        type: Boolean,
        default: false
      }
    }, bpLabelColProps, bpLabelAlignProps, {
      labelClass: {
        type: [String, Array, Object],
        default: null
      },
      description: {
        type: String,
        default: null
      },
      invalidFeedback: {
        type: String,
        default: null
      },
      validFeedback: {
        type: String,
        default: null
      },
      tooltip: {
        // Enable tooltip style feedback
        type: Boolean,
        default: false
      },
      validated: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      horizontal: {
        // Deprecated
        type: Boolean,
        default: false,
        deprecated: DEPRECATED_MSG
      },
      breakpoint: {
        // Deprecated (ignored if horizontal is not true)
        type: String,
        default: null,
        // legacy value 'sm',
        deprecated: DEPRECATED_MSG
      }
    }),
    computed: {
      labelColProps: function labelColProps() {
        var _this = this;

        var props = {};
        /* istanbul ignore next: deprecated */

        if (this.horizontal) {
          // Deprecated setting of horizontal/breakpoint props

          /* istanbul ignore next */
          (0, _warn.default)("b-form-group: ".concat(DEPRECATED_MSG)); // Legacy default is breakpoint sm and cols 3

          var bp = this.breakpoint || BREAKPOINTS[1]; // 'sm'

          var cols = parseInt(this.labelCols, 10) || 3;
          props[bp] = cols > 0 ? cols : 3; // We then return the single breakpoint prop for legacy compatability

          return props;
        }

        BREAKPOINTS.forEach(function (breakpoint) {
          // Grab the value if the label column breakpoint prop
          var propVal = _this[makePropName(breakpoint, 'labelCols')]; // Handle case where the prop's value is an empty string, which represents true


          propVal = propVal === '' ? true : propVal || false;

          if (typeof propVal !== 'boolean') {
            // Convert to column size to number
            propVal = parseInt(propVal, 10) || 0; // Ensure column size is greater than 0

            propVal = propVal > 0 ? propVal : false;
          }

          if (propVal) {
            // Add the prop to the list of props to give to b-col.
            // if breakpoint is '' (labelCols=true), then we use the col prop to make equal width at xs
            var bColPropName = breakpoint || (typeof propVal === 'boolean' ? 'col' : 'cols'); // Add it to the props

            props[bColPropName] = propVal;
          }
        });
        return props;
      },
      labelAlignClasses: function labelAlignClasses() {
        var _this2 = this;

        var classes = [];
        BREAKPOINTS.forEach(function (breakpoint) {
          // assemble the label column breakpoint align classes
          var propVal = _this2[makePropName(breakpoint, 'labelAlign')] || null;

          if (propVal) {
            var className = breakpoint ? "text-".concat(breakpoint, "-").concat(propVal) : "text-".concat(propVal);
            classes.push(className);
          }
        });
        return classes;
      },
      isHorizontal: function isHorizontal() {
        // Determine if the resultant form-group will be rendered
        // horizontal (meaning it has label-col breakpoints)
        return (0, _object.keys)(this.labelColProps).length > 0;
      },
      labelId: function labelId() {
        return this.$slots['label'] || this.label ? this.safeId('_BV_label_') : null;
      },
      descriptionId: function descriptionId() {
        return this.$slots['description'] || this.description ? this.safeId('_BV_description_') : null;
      },
      hasInvalidFeedback: function hasInvalidFeedback() {
        // used for computing aria-describedby
        var $slots = this.$slots;
        return this.computedState === false && ($slots['invalid-feedback'] || this.invalidFeedback);
      },
      invalidFeedbackId: function invalidFeedbackId() {
        return this.hasInvalidFeedback ? this.safeId('_BV_feedback_invalid_') : null;
      },
      hasValidFeedback: function hasValidFeedback() {
        // used for computing aria-describedby
        return this.computedState === true && (this.$slots['valid-feedback'] || this.validFeedback);
      },
      validFeedbackId: function validFeedbackId() {
        return this.hasValidFeedback ? this.safeId('_BV_feedback_valid_') : null;
      },
      describedByIds: function describedByIds() {
        // Screen readers will read out any content linked to by aria-describedby
        // even if the content is hidden with 'display: none', hence we only include
        // feedback IDs if the form-group's state is explicitly valid or invalid.
        return [this.descriptionId, this.invalidFeedbackId, this.validFeedbackId].filter(function (i) {
          return i;
        }).join(' ') || null;
      }
    },
    watch: {
      describedByIds: function describedByIds(add, remove) {
        if (add !== remove) {
          this.setInputDescribedBy(add, remove);
        }
      }
    },
    mounted: function mounted() {
      var _this3 = this;

      this.$nextTick(function () {
        // Set the adia-describedby IDs on the input specified by label-for
        // We do this in a nextTick to ensure the children have finished rendering
        _this3.setInputDescribedBy(_this3.describedByIds);
      });
    },
    methods: {
      legendClick: function legendClick(evt) {
        if (this.labelFor) {
          // don't do anything if labelFor is set

          /* istanbul ignore next: clicking a label will focus the input, so no need to test */
          return;
        }

        var tagName = evt.target ? evt.target.tagName : '';

        if (/^(input|select|textarea|label|button|a)$/i.test(tagName)) {
          // If clicked an interactive element inside legend, we just let the default happen

          /* istanbul ignore next */
          return;
        }

        var inputs = (0, _dom.selectAll)(SELECTOR, this.$refs.content).filter(_dom.isVisible);

        if (inputs && inputs.length === 1 && inputs[0].focus) {
          // if only a single input, focus it, emulating label behaviour
          inputs[0].focus();
        }
      },
      setInputDescribedBy: function setInputDescribedBy(add, remove) {
        // Sets the `aria-describedby` attribute on the input if label-for is set.
        // Optionally accepts a string of IDs to remove as the second parameter
        if (this.labelFor && typeof document !== 'undefined') {
          var input = (0, _dom.select)("#".concat(this.labelFor), this.$refs.content);

          if (input) {
            var adb = 'aria-describedby';
            var ids = ((0, _dom.getAttr)(input, adb) || '').split(/\s+/);
            remove = (remove || '').split(/\s+/); // Update ID list, preserving any original IDs

            ids = ids.filter(function (id) {
              return !(0, _array.arrayIncludes)(remove, id);
            }).concat(add || '').join(' ').trim();

            if (ids) {
              (0, _dom.setAttr)(input, adb, ids);
            } else {
              // No IDs, so remove the attribute
              (0, _dom.removeAttr)(input, adb);
            }
          }
        }
      }
    },
    render: function render(h) {
      var isFieldset = !this.labelFor;
      var isHorizontal = this.isHorizontal; // Generate the label

      var label = renderLabel(h, this); // Generate the content

      var content = h(isHorizontal ? 'b-col' : 'div', {
        ref: 'content',
        attrs: {
          tabindex: isFieldset ? '-1' : null,
          role: isFieldset ? 'group' : null,
          'aria-labelledby': isFieldset ? this.labelId : null,
          'aria-describedby': isFieldset ? this.ariaDescribedBy : null
        }
      }, [this.$slots['default'] || h(false), renderInvalidFeedback(h, this), renderValidFeedback(h, this), renderHelpText(h, this)]); // Create the form-group

      var data = {
        staticClass: 'form-group',
        class: [this.validated ? 'was-validated' : null, this.stateClass],
        attrs: {
          id: this.safeId(),
          disabled: isFieldset ? this.disabled : null,
          role: isFieldset ? null : 'group',
          'aria-invalid': this.computedState === false ? 'true' : null,
          'aria-labelledby': this.labelId || null,
          'aria-describedby': this.describedByIds || null
        } // Return it wrapped in a form-group.
        // Note: fieldsets do not support adding `row` or `form-row` directly to them
        // due to browser specific render issues, so we move the form-row to an
        // inner wrapper div when horizontal and using a fieldset

      };
      return h(isFieldset ? 'fieldset' : isHorizontal ? 'b-form-row' : 'div', data, isHorizontal && isFieldset ? [h('b-form-row', {}, [label, content])] : [label, content]);
    }
  }; // Return the componwent options reference

  resolve(BFormGroup);
};

exports.default = _default;

/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d4a9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _toggle = __webpack_require__("a596");

var _plugins = __webpack_require__("0a8d");

var directives = {
  BToggle: _toggle.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    directives: directives
  })
};
exports.default = _default;

/***/ }),

/***/ "d53b":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "d670":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _popover = __webpack_require__("5764");

var _plugins = __webpack_require__("0a8d");

var directives = {
  BPopover: _popover.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    directives: directives
  })
};
exports.default = _default;

/***/ }),

/***/ "d71d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _media = __webpack_require__("3baf");

var _mediaAside = __webpack_require__("7b63");

var _mediaBody = __webpack_require__("7a5e");

var _plugins = __webpack_require__("0a8d");

var components = {
  BMedia: _media.default,
  BMediaAside: _mediaAside.default,
  BMediaBody: _mediaBody.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "d864":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("79aa");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "d9f6":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("e4ae");
var IE8_DOM_DEFINE = __webpack_require__("794b");
var toPrimitive = __webpack_require__("1bc3");
var dP = Object.defineProperty;

exports.f = __webpack_require__("8e60") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "daa8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _tooltip = __webpack_require__("16ae");

var _dom = __webpack_require__("1611");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NAME = 'popover';
var CLASS_PREFIX = 'bs-popover';
var BS_CLASS_PREFIX_REGEX = new RegExp("\\b".concat(CLASS_PREFIX, "\\S+"), 'g');

var Defaults = _objectSpread({}, _tooltip.default.Default, {
  placement: 'right',
  trigger: 'click',
  content: '',
  template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
});

var ClassName = {
  FADE: 'fade',
  SHOW: 'show'
};
var Selector = {
  TITLE: '.popover-header',
  CONTENT: '.popover-body'
  /* istanbul ignore next: dificult to test in Jest/JSDOM environment */

};

var PopOver =
/*#__PURE__*/
function (_ToolTip) {
  _inherits(PopOver, _ToolTip);

  function PopOver() {
    _classCallCheck(this, PopOver);

    return _possibleConstructorReturn(this, _getPrototypeOf(PopOver).apply(this, arguments));
  }

  _createClass(PopOver, [{
    key: "isWithContent",
    // Method overrides
    value: function isWithContent(tip)
    /* istanbul ignore next */
    {
      tip = tip || this.$tip;

      if (!tip) {
        return false;
      }

      var hasTitle = Boolean(((0, _dom.select)(Selector.TITLE, tip) || {}).innerHTML);
      var hasContent = Boolean(((0, _dom.select)(Selector.CONTENT, tip) || {}).innerHTML);
      return hasTitle || hasContent;
    }
  }, {
    key: "addAttachmentClass",
    value: function addAttachmentClass(attachment)
    /* istanbul ignore next */
    {
      (0, _dom.addClass)(this.getTipElement(), "".concat(CLASS_PREFIX, "-").concat(attachment));
    }
  }, {
    key: "setContent",
    value: function setContent(tip)
    /* istanbul ignore next */
    {
      // we use append for html objects to maintain js events/components
      this.setElementContent((0, _dom.select)(Selector.TITLE, tip), this.getTitle());
      this.setElementContent((0, _dom.select)(Selector.CONTENT, tip), this.getContent());
      (0, _dom.removeClass)(tip, ClassName.FADE);
      (0, _dom.removeClass)(tip, ClassName.SHOW);
    } // This method may look identical to ToolTip version, but it uses a different RegEx defined above

  }, {
    key: "cleanTipClass",
    value: function cleanTipClass()
    /* istanbul ignore next */
    {
      var tip = this.getTipElement();
      var tabClass = tip.className.match(BS_CLASS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length > 0) {
        tabClass.forEach(function (cls) {
          (0, _dom.removeClass)(tip, cls);
        });
      }
    }
  }, {
    key: "getTitle",
    value: function getTitle()
    /* istanbul ignore next */
    {
      var title = this.$config.title || '';

      if (typeof title === 'function') {
        title = title(this.$element);
      }

      if (_typeof(title) === 'object' && title.nodeType && !title.innerHTML.trim()) {
        // We have a dom node, but without inner content, so just return an empty string
        title = '';
      }

      if (typeof title === 'string') {
        title = title.trim();
      }

      if (!title) {
        // Try and grab element's title attribute
        title = (0, _dom.getAttr)(this.$element, 'title') || (0, _dom.getAttr)(this.$element, 'data-original-title') || '';
        title = title.trim();
      }

      return title;
    } // New methods

  }, {
    key: "getContent",
    value: function getContent()
    /* istanbul ignore next */
    {
      var content = this.$config.content || '';

      if (typeof content === 'function') {
        content = content(this.$element);
      }

      if (_typeof(content) === 'object' && content.nodeType && !content.innerHTML.trim()) {
        // We have a dom node, but without inner content, so just return an empty string
        content = '';
      }

      if (typeof content === 'string') {
        content = content.trim();
      }

      return content;
    }
  }], [{
    key: "Default",
    // Getter overrides
    get: function get()
    /* istanbul ignore next */
    {
      return Defaults;
    }
  }, {
    key: "NAME",
    get: function get()
    /* istanbul ignore next */
    {
      return NAME;
    }
  }]);

  return PopOver;
}(_tooltip.default);

var _default = PopOver;
exports.default = _default;

/***/ }),

/***/ "db63":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/**
 * @param {number} length
 * @return {Array}
 */
var range = function range(length) {
  return Array.apply(null, {
    length: length
  });
};

var _default = range;
exports.default = _default;

/***/ }),

/***/ "dbdb":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("584a");
var global = __webpack_require__("e53d");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("b8e3") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "df74":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__("b42e");

var props = {
  tag: {
    type: String,
    default: 'div'
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BInputGroupText',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'input-group-text'
    }), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "df7c":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "e109":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _upperFirst = __webpack_require__("5540");

/**
 * @param {string} prefix
 * @param {string} value
 */
var prefixPropName = function prefixPropName(prefix, value) {
  return prefix + (0, _upperFirst.default)(value);
};

var _default = prefixPropName;
exports.default = _default;

/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "e14e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _html = __webpack_require__("be11");

var _config = __webpack_require__("eb60");

var _id = __webpack_require__("eae0");

var _dropdown = __webpack_require__("c190");

var _button = __webpack_require__("b664");

var NAME = 'BDropdown'; // @vue/component

var _default2 = {
  name: NAME,
  components: {
    BButton: _button.default
  },
  mixins: [_id.default, _dropdown.default],
  props: {
    toggleText: {
      // This really should be toggleLabel
      type: String,
      default: function _default() {
        return (0, _config.getComponentConfig)(NAME, 'toggleText');
      }
    },
    size: {
      type: String,
      default: null
    },
    variant: {
      type: String,
      default: function _default() {
        return (0, _config.getComponentConfig)(NAME, 'variant');
      }
    },
    menuClass: {
      type: [String, Array],
      default: null
    },
    toggleTag: {
      type: String,
      default: 'button'
    },
    toggleClass: {
      type: [String, Array],
      default: null
    },
    noCaret: {
      type: Boolean,
      default: false
    },
    split: {
      type: Boolean,
      default: false
    },
    splitHref: {
      type: String // default: undefined

    },
    splitTo: {
      type: [String, Object] // default: undefined

    },
    splitVariant: {
      type: String,
      default: null
    },
    role: {
      type: String,
      default: 'menu'
    },
    boundary: {
      // String: `scrollParent`, `window` or `viewport`
      // Object: HTML Element reference
      type: [String, Object],
      default: 'scrollParent'
    }
  },
  computed: {
    dropdownClasses: function dropdownClasses() {
      // Position `static` is needed to allow menu to "breakout" of the scrollParent boundaries
      // when boundary is anything other than `scrollParent`
      // See https://github.com/twbs/bootstrap/issues/24251#issuecomment-341413786
      var positionStatic = this.boundary !== 'scrollParent' || !this.boundary;
      var direction = '';

      if (this.dropup) {
        direction = 'dropup';
      } else if (this.dropright) {
        direction = 'dropright';
      } else if (this.dropleft) {
        direction = 'dropleft';
      }

      return ['btn-group', 'b-dropdown', 'dropdown', direction, {
        show: this.visible,
        'position-static': positionStatic
      }];
    },
    menuClasses: function menuClasses() {
      return ['dropdown-menu', {
        'dropdown-menu-right': this.right,
        show: this.visible
      }, this.menuClass];
    },
    toggleClasses: function toggleClasses() {
      return ['dropdown-toggle', {
        'dropdown-toggle-split': this.split,
        'dropdown-toggle-no-caret': this.noCaret && !this.split
      }, this.toggleClass];
    }
  },
  render: function render(h) {
    var split = h(false);

    if (this.split) {
      var btnProps = {
        disabled: this.disabled,
        variant: this.splitVariant || this.variant,
        size: this.size // We add these as needed due to router-link issues with defined property with undefined/null values

      };

      if (this.splitTo) {
        btnProps.to = this.splitTo;
      }

      if (this.splitHref) {
        btnProps.href = this.splitHref;
      }

      split = h('b-button', {
        ref: 'button',
        props: btnProps,
        attrs: {
          id: this.safeId('_BV_button_')
        },
        on: {
          click: this.click
        }
      }, [this.$slots['button-content'] || this.$slots.text || this.html || (0, _html.stripTags)(this.text)]);
    }

    var toggle = h('b-button', {
      ref: 'toggle',
      class: this.toggleClasses,
      props: {
        variant: this.variant,
        size: this.size,
        disabled: this.disabled,
        tag: this.toggleTag
      },
      attrs: {
        id: this.safeId('_BV_toggle_'),
        'aria-haspopup': 'true',
        'aria-expanded': this.visible ? 'true' : 'false'
      },
      on: {
        click: this.toggle,
        // click
        keydown: this.toggle // enter, space, down

      }
    }, [this.split ? h('span', {
      class: ['sr-only']
    }, [this.toggleText]) : this.$slots['button-content'] || this.$slots.text || this.html || (0, _html.stripTags)(this.text)]);
    var menu = h('div', {
      ref: 'menu',
      class: this.menuClasses,
      attrs: {
        role: this.role,
        tabindex: '-1',
        'aria-labelledby': this.safeId(this.split ? '_BV_button_' : '_BV_toggle_')
      },
      on: {
        mouseover: this.onMouseOver,
        keydown: this.onKeydown // tab, up, down, esc

      }
    }, [this.$slots.default]);
    return h('div', {
      attrs: {
        id: this.safeId()
      },
      class: this.dropdownClasses
    }, [split, toggle, menu]);
  }
};
exports.default = _default2;

/***/ }),

/***/ "e1a8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__("b42e");

var _config = __webpack_require__("eb60");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var props = {
  tag: {
    type: String,
    default: 'nav'
  },
  type: {
    type: String,
    default: 'light'
  },
  variant: {
    type: String
  },
  toggleable: {
    type: [Boolean, String],
    default: false
  },
  fixed: {
    type: String
  },
  sticky: {
    type: Boolean,
    default: false
  },
  print: {
    type: Boolean,
    default: false
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BNavbar',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var _class;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var breakpoint = '';
    var xs = (0, _config.getBreakpoints)()[0];

    if (props.toggleable && typeof props.toggleable === 'string' && props.toggleable !== xs) {
      breakpoint = "navbar-expand-".concat(props.toggleable);
    } else if (props.toggleable === false) {
      breakpoint = 'navbar-expand';
    }

    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'navbar',
      class: (_class = {
        'd-print': props.print,
        'sticky-top': props.sticky
      }, _defineProperty(_class, "navbar-".concat(props.type), Boolean(props.type)), _defineProperty(_class, "bg-".concat(props.variant), Boolean(props.variant)), _defineProperty(_class, "fixed-".concat(props.fixed), Boolean(props.fixed)), _defineProperty(_class, "".concat(breakpoint), Boolean(breakpoint)), _class),
      attrs: {
        role: props.tag === 'nav' ? null : 'navigation'
      }
    }), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "e4ae":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("f772");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "e4c5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _listenOnRoot = __webpack_require__("edbc");

var _env = __webpack_require__("4565");

var _dom = __webpack_require__("1611");

// Events we emit on $root
var EVENT_STATE = 'bv::collapse::state';
var EVENT_ACCORDION = 'bv::collapse::accordion'; // Events we listen to on $root

var EVENT_TOGGLE = 'bv::toggle::collapse'; // Event Listener options

var EventOptions = {
  passive: true,
  capture: false // @vue/component

};
var _default = {
  name: 'BCollapse',
  mixins: [_listenOnRoot.default],
  model: {
    prop: 'visible',
    event: 'input'
  },
  props: {
    id: {
      type: String,
      required: true
    },
    isNav: {
      type: Boolean,
      default: false
    },
    accordion: {
      type: String,
      default: null
    },
    visible: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  data: function data() {
    return {
      show: this.visible,
      transitioning: false
    };
  },
  computed: {
    classObject: function classObject() {
      return {
        'navbar-collapse': this.isNav,
        collapse: !this.transitioning,
        show: this.show && !this.transitioning
      };
    }
  },
  watch: {
    visible: function visible(newVal) {
      if (newVal !== this.show) {
        this.show = newVal;
      }
    },
    show: function show(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.emitState();
      }
    }
  },
  created: function created() {
    // Listen for toggle events to open/close us
    this.listenOnRoot(EVENT_TOGGLE, this.handleToggleEvt); // Listen to other collapses for accordion events

    this.listenOnRoot(EVENT_ACCORDION, this.handleAccordionEvt);
  },
  mounted: function mounted() {
    if (this.isNav && _env.inBrowser) {
      // Set up handlers
      this.setWindowEvents(true);
      this.handleResize();
    }

    this.emitState();
  },
  deactivated: function deactivated()
  /* istanbul ignore next */
  {
    if (this.isNav && _env.inBrowser) {
      this.setWindowEvents(false);
    }
  },
  activated: function activated()
  /* istanbul ignore next */
  {
    if (this.isNav && _env.inBrowser) {
      this.setWindowEvents(true);
    }
  },
  beforeDestroy: function beforeDestroy()
  /* istanbul ignore next */
  {
    // Trigger state emit if needed
    this.show = false;

    if (this.isNav && _env.inBrowser) {
      this.setWindowEvents(false);
    }
  },
  methods: {
    setWindowEvents: function setWindowEvents(on) {
      var method = on ? _dom.eventOn : _dom.eventOff;
      method(window, 'resize', this.handleResize, EventOptions);
      method(window, 'orientationchange', this.handleResize, EventOptions);
    },
    toggle: function toggle() {
      this.show = !this.show;
    },
    onEnter: function onEnter(el) {
      el.style.height = 0;
      (0, _dom.reflow)(el);
      el.style.height = el.scrollHeight + 'px';
      this.transitioning = true; // This should be moved out so we can add cancellable events

      this.$emit('show');
    },
    onAfterEnter: function onAfterEnter(el) {
      el.style.height = null;
      this.transitioning = false;
      this.$emit('shown');
    },
    onLeave: function onLeave(el) {
      el.style.height = 'auto';
      el.style.display = 'block';
      el.style.height = (0, _dom.getBCR)(el).height + 'px';
      (0, _dom.reflow)(el);
      this.transitioning = true;
      el.style.height = 0; // This should be moved out so we can add cancellable events

      this.$emit('hide');
    },
    onAfterLeave: function onAfterLeave(el) {
      el.style.height = null;
      this.transitioning = false;
      this.$emit('hidden');
    },
    emitState: function emitState() {
      this.$emit('input', this.show); // Let v-b-toggle know the state of this collapse

      this.$root.$emit(EVENT_STATE, this.id, this.show);

      if (this.accordion && this.show) {
        // Tell the other collapses in this accordion to close
        this.$root.$emit(EVENT_ACCORDION, this.id, this.accordion);
      }
    },
    clickHandler: function clickHandler(evt) {
      // If we are in a nav/navbar, close the collapse when non-disabled link clicked
      var el = evt.target;

      if (!this.isNav || !el || (0, _dom.getCS)(this.$el).display !== 'block') {
        /* istanbul ignore next: can't test getComputedStyle in JSDOM */
        return;
      }

      if ((0, _dom.matches)(el, '.nav-link,.dropdown-item') || (0, _dom.closest)('.nav-link,.dropdown-item', el)) {
        this.show = false;
      }
    },
    handleToggleEvt: function handleToggleEvt(target) {
      if (target !== this.id) {
        return;
      }

      this.toggle();
    },
    handleAccordionEvt: function handleAccordionEvt(openedId, accordion) {
      if (!this.accordion || accordion !== this.accordion) {
        return;
      }

      if (openedId === this.id) {
        // Open this collapse if not shown
        if (!this.show) {
          this.toggle();
        }
      } else {
        // Close this collapse if shown
        if (this.show) {
          this.toggle();
        }
      }
    },
    handleResize: function handleResize() {
      // Handler for orientation/resize to set collapsed state in nav/navbar
      this.show = (0, _dom.getCS)(this.$el).display === 'block';
    }
  },
  render: function render(h) {
    var content = h(this.tag, {
      class: this.classObject,
      directives: [{
        name: 'show',
        value: this.show
      }],
      attrs: {
        id: this.id || null
      },
      on: {
        click: this.clickHandler
      }
    }, [this.$slots.default]);
    return h('transition', {
      props: {
        enterClass: '',
        enterActiveClass: 'collapsing',
        enterToClass: '',
        leaveClass: '',
        leaveActiveClass: 'collapsing',
        leaveToClass: ''
      },
      on: {
        enter: this.onEnter,
        afterEnter: this.onAfterEnter,
        leave: this.onLeave,
        afterLeave: this.onAfterLeave
      }
    }, [content]);
  }
};
exports.default = _default;

/***/ }),

/***/ "e53d":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "e599":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__("b42e");

var props = {
  tag: {
    type: String,
    default: 'span'
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BNavText',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'navbar-text'
    }), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "e67d":
/***/ (function(module, exports) {

function validate(binding) {
  if (typeof binding.value !== 'function') {
    console.warn('[Vue-click-outside:] provided expression', binding.expression, 'is not a function.')
    return false
  }

  return true
}

function isPopup(popupItem, elements) {
  if (!popupItem || !elements)
    return false

  for (var i = 0, len = elements.length; i < len; i++) {
    try {
      if (popupItem.contains(elements[i])) {
        return true
      }
      if (elements[i].contains(popupItem)) {
        return false
      }
    } catch(e) {
      return false
    }
  }

  return false
}

function isServer(vNode) {
  return typeof vNode.componentInstance !== 'undefined' && vNode.componentInstance.$isServer
}

exports = module.exports = {
  bind: function (el, binding, vNode) {
    if (!validate(binding)) return

    // Define Handler and cache it on the element
    function handler(e) {
      if (!vNode.context) return

      // some components may have related popup item, on which we shall prevent the click outside event handler.
      var elements = e.path || (e.composedPath && e.composedPath())
      elements && elements.length > 0 && elements.unshift(e.target)
      
      if (el.contains(e.target) || isPopup(vNode.context.popupItem, elements)) return

      el.__vueClickOutside__.callback(e)
    }

    // add Event Listeners
    el.__vueClickOutside__ = {
      handler: handler,
      callback: binding.value
    }
    !isServer(vNode) && document.addEventListener('click', handler)
  },

  update: function (el, binding) {
    if (validate(binding)) el.__vueClickOutside__.callback = binding.value
  },
  
  unbind: function (el, binding, vNode) {
    // Remove Event Listeners
    !isServer(vNode) && document.removeEventListener('click', el.__vueClickOutside__.handler)
    delete el.__vueClickOutside__
  }
}


/***/ }),

/***/ "e6c9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__("b42e");

var props = {
  tag: {
    type: String,
    default: 'div'
  },
  deck: {
    type: Boolean,
    default: false
  },
  columns: {
    type: Boolean,
    default: false
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BCardGroup',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var baseClass = 'card-group';

    if (props.deck) {
      baseClass = 'card-deck';
    } else if (props.columns) {
      baseClass = 'card-columns';
    }

    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      class: baseClass
    }), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "e6f3":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("07e3");
var toIObject = __webpack_require__("36c3");
var arrayIndexOf = __webpack_require__("5b4e")(false);
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "e8c7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _stableSort = __webpack_require__("2e50");

var _startcase = __webpack_require__("3098");

var _array = __webpack_require__("bb2f");

var _defaultSortCompare = __webpack_require__("fc47");

var _default = {
  props: {
    sortBy: {
      type: String,
      default: null
    },
    sortDesc: {
      // To Do: Make this tri-state: true, false, null
      type: Boolean,
      default: false
    },
    sortDirection: {
      // This prop is named incorrectly.
      // It should be initialSortDirection
      // As it is a bit misleading (not to mention screws up
      // the Aria Label on the headers)
      type: String,
      default: 'asc',
      validator: function validator(direction) {
        return (0, _array.arrayIncludes)(['asc', 'desc', 'last'], direction);
      }
    },
    sortCompare: {
      type: Function,
      default: null
    },
    noSortReset: {
      // Another prop that should have had a better name.
      // It should be noSortClear (on non-sortable headers).
      // We will need to make sure the documentation is clear on what
      // this prop does (as well as in the code for future reference)
      type: Boolean,
      default: false
    },
    labelSortAsc: {
      type: String,
      default: 'Click to sort Ascending'
    },
    labelSortDesc: {
      type: String,
      default: 'Click to sort Descending'
    },
    labelSortClear: {
      type: String,
      default: 'Click to clear sorting'
    },
    noLocalSorting: {
      type: Boolean,
      default: false
    },
    noFooterSorting: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      localSortBy: this.sortBy || '',
      localSortDesc: this.sortDesc || false
    };
  },
  computed: {
    localSorting: function localSorting() {
      return this.hasProvider ? !!this.noProviderSorting : !this.noLocalSorting;
    },
    isSortable: function isSortable() {
      return this.computedFields.some(function (f) {
        return f.sortable;
      });
    },
    sortedItems: function sortedItems() {
      // Sorts the filtered items and returns a new array of the sorted items
      // or the original items array if not sorted.
      var items = (this.filteredItems || []).slice();
      var sortBy = this.localSortBy;
      var sortDesc = this.localSortDesc;
      var sortCompare = this.sortCompare;
      var localSorting = this.localSorting;

      if (sortBy && localSorting) {
        // stableSort returns a new array, and leaves the original array intact
        return (0, _stableSort.default)(items, function (a, b) {
          var result = null;

          if (typeof sortCompare === 'function') {
            // Call user provided sortCompare routine
            result = sortCompare(a, b, sortBy, sortDesc);
          }

          if (result === null || result === undefined || result === false) {
            // Fallback to built-in defaultSortCompare if sortCompare
            // is not defined or returns null/false
            result = (0, _defaultSortCompare.default)(a, b, sortBy);
          } // Negate result if sorting in descending order


          return (result || 0) * (sortDesc ? -1 : 1);
        });
      }

      return items;
    }
  },
  watch: {
    isSortable: function isSortable(newVal, oldVal)
    /* istanbul ignore next: pain in the butt to test */
    {
      if (newVal) {
        if (this.isSortable) {
          this.$on('head-clicked', this.handleSort);
        }
      } else {
        this.$off('head-clicked', this.handleSort);
      }
    },
    sortDesc: function sortDesc(newVal, oldVal) {
      if (newVal === this.localSortDesc) {
        /* istanbul ignore next */
        return;
      }

      this.localSortDesc = newVal || false;
    },
    sortBy: function sortBy(newVal, oldVal) {
      if (newVal === this.localSortBy) {
        /* istanbul ignore next */
        return;
      }

      this.localSortBy = newVal || null;
    },
    // Update .sync props
    localSortDesc: function localSortDesc(newVal, oldVal) {
      // Emit update to sort-desc.sync
      if (newVal !== oldVal) {
        this.$emit('update:sortDesc', newVal);
      }
    },
    localSortBy: function localSortBy(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.$emit('update:sortBy', newVal);
      }
    }
  },
  created: function created() {
    if (this.isSortable) {
      this.$on('head-clicked', this.handleSort);
    }
  },
  methods: {
    // Handlers
    // Need to move from thead-mixin
    handleSort: function handleSort(key, field, evt, isFoot) {
      var _this = this;

      if (!this.isSortable) {
        /* istanbul ignore next */
        return;
      }

      if (isFoot && this.noFooterSorting) {
        return;
      } // TODO: make this tri-state sorting
      // cycle desc => asc => none => desc => ...


      var sortChanged = false;

      var toggleLocalSortDesc = function toggleLocalSortDesc() {
        var sortDirection = field.sortDirection || _this.sortDirection;

        if (sortDirection === 'asc') {
          _this.localSortDesc = false;
        } else if (sortDirection === 'desc') {
          _this.localSortDesc = true;
        } else {// sortDirection === 'last'
          // Leave at last sort direction from previous column
        }
      };

      if (field.sortable) {
        if (key === this.localSortBy) {
          // Change sorting direction on current column
          this.localSortDesc = !this.localSortDesc;
        } else {
          // Start sorting this column ascending
          this.localSortBy = key; // this.localSortDesc = false

          toggleLocalSortDesc();
        }

        sortChanged = true;
      } else if (this.localSortBy && !this.noSortReset) {
        this.localSortBy = null;
        toggleLocalSortDesc();
        sortChanged = true;
      }

      if (sortChanged) {
        // Sorting parameters changed
        this.$emit('sort-changed', this.context);
      }
    },
    // methods to compute classes and attrs for thead>th cells
    sortTheadThClasses: function sortTheadThClasses(key, field, isFoot) {
      return {// No Classes for sorting currently...
        // All styles targeted using aria-* attrs
      };
    },
    sortTheadThAttrs: function sortTheadThAttrs(key, field, isFoot) {
      if (!this.isSortable || isFoot && this.noFooterSorting) {
        // No atributes if not a sortable table
        return {};
      }

      var sortable = field.sortable;
      var ariaLabel = '';

      if ((!field.label || !field.label.trim()) && !field.headerTitle) {
        // In case field's label and title are empty/blank, we need to
        // add a hint about what the column is about for non-sighted users.
        // This is dulicated code from tbody-row mixin, but we need it
        // here as well, since we overwrite the original aria-label.

        /* istanbul ignore next */
        ariaLabel = (0, _startcase.default)(key);
      } // The correctness of these labels is very important for screen-reader users.


      var ariaLabelSorting = '';

      if (sortable) {
        if (this.localSortBy === key) {
          // currently sorted sortable column.
          ariaLabelSorting = this.localSortDesc ? this.labelSortAsc : this.labelSortDesc;
        } else {
          // Not currently sorted sortable column.
          // Not using nested ternary's here for clarity/readability
          // Default for ariaLabel
          ariaLabelSorting = this.localSortDesc ? this.labelSortDesc : this.labelSortAsc; // Handle sortDirection setting

          var sortDirection = this.sortDirection || field.sortDirection;

          if (sortDirection === 'asc') {
            ariaLabelSorting = this.labelSortAsc;
          } else if (sortDirection === 'desc') {
            ariaLabelSorting = this.labelSortDesc;
          }
        }
      } else if (!this.noSortReset) {
        // Non sortable column
        ariaLabelSorting = this.localSortBy ? this.labelSortClear : '';
      } // Assemble the aria-label attribute value


      ariaLabel = [ariaLabel.trim(), ariaLabelSorting.trim()].filter(Boolean).join(': '); // Assemble the aria-sort attribute value

      var ariaSort = sortable && this.localSortBy === key ? this.localSortDesc ? 'descending' : 'ascending' : sortable ? 'none' : null; // Return the attributes
      // (All the above just to get these two values)

      return {
        'aria-label': ariaLabel || null,
        'aria-sort': ariaSort
      };
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "e93a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _tooltip = __webpack_require__("16ae");

var _warn = __webpack_require__("93e0");

var _toolpop = __webpack_require__("c542");

// @vue/component
var _default = {
  name: 'BTooltip',
  mixins: [_toolpop.default],
  props: {
    title: {
      type: String,
      default: ''
    },
    triggers: {
      type: [String, Array],
      default: 'hover focus'
    },
    placement: {
      type: String,
      default: 'top'
    }
  },
  data: function data() {
    return {};
  },
  methods: {
    createToolpop: function createToolpop() {
      // getTarget is in toolpop mixin
      var target = this.getTarget();

      if (target) {
        this._toolpop = new _tooltip.default(target, this.getConfig(), this.$root);
      } else {
        this._toolpop = null;
        (0, _warn.default)("b-tooltip: 'target' element not found!");
      }

      return this._toolpop;
    }
  },
  render: function render(h) {
    return h('div', {
      class: ['d-none'],
      style: {
        display: 'none'
      },
      attrs: {
        'aria-hidden': true
      }
    }, [h('div', {
      ref: 'title'
    }, this.$slots.default)]);
  }
};
exports.default = _default;

/***/ }),

/***/ "eae0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/*
 * SSR Safe Client Side ID attribute generation
 * id's can only be generated client side, after mount.
 * this._uid is not synched between server and client.
 */
// @vue/component
var _default = {
  props: {
    id: {
      type: String,
      default: null
    }
  },
  data: function data() {
    return {
      localId_: null
    };
  },
  computed: {
    safeId: function safeId() {
      // Computed property that returns a dynamic function for creating the ID.
      // Reacts to changes in both .id and .localId_ And regens a new function
      var id = this.id || this.localId_; // We return a function that accepts an optional suffix string
      // So this computed prop looks and works like a method!!!
      // But benefits from Vue's Computed prop caching

      var fn = function fn(suffix) {
        if (!id) {
          return null;
        }

        suffix = String(suffix || '').replace(/\s+/g, '_');
        return suffix ? id + '_' + suffix : id;
      };

      return fn;
    }
  },
  mounted: function mounted() {
    var _this = this;

    // mounted only occurs client side
    this.$nextTick(function () {
      // Update dom with auto ID after dom loaded to prevent
      // SSR hydration errors.
      _this.localId_ = "__BVID__".concat(_this._uid);
    });
  }
};
exports.default = _default;

/***/ }),

/***/ "eb60":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getBreakpointsDown = exports.getBreakpointsUp = exports.getBreakpoints = exports.getComponentConfig = exports.getConfigValue = exports.getDefaults = exports.getConfig = exports.resetConfig = exports.setConfig = void 0;

var _cloneDeep = __webpack_require__("f18f");

var _get = __webpack_require__("b0df");

var _warn = __webpack_require__("93e0");

var _array = __webpack_require__("bb2f");

var _object = __webpack_require__("24e2");

// General Bootstrap Vue configuration
//
// BREAKPOINT DEFINITIONS
//
// Some components (BCol and BFormGroup) generate props based on breakpoints, and this
// occurs when the component is first loaded (evaluated), which may happen before the
// config is created/modified
//
// To get around this we make these components async (lazy evaluation)
// The component definition is only called/executed when the first access to the
// component is used (and cached on subsequent uses)
//
// See: https://vuejs.org/v2/guide/components-dynamic-async.html#Async-Components
//
// PROP DEFAULTS
//
// For default values on props, we use the default value factory function approach so
// so that the default values are pulled in at each component instantiation
//
//  props: {
//    variant: {
//      type: String,
//      default: () => getConfigComponent('BAlert', 'variant')
//    }
//  }
// prettier-ignore
var DEFAULTS = {
  // Breakpoints
  breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'],
  // Component Specific defaults are keyed by the component
  // name (PascalCase) and prop name (camelCase)
  BAlert: {
    dismissLabel: 'Close',
    variant: 'info'
  },
  BBadge: {
    variant: 'secondary'
  },
  BButton: {
    variant: 'secondary'
  },
  BButtonClose: {
    // `textVariant` is `null` to inherit the current text color
    textVariant: null,
    ariaLabel: 'Close'
  },
  BCardSubTitle: {
    // BCard and BCardBody also inherit this prop
    subTitleTextVariant: 'muted'
  },
  BDropdown: {
    toggleText: 'Toggle Dropdown',
    variant: 'secondary'
  },
  BFormFile: {
    browseText: 'Browse',
    // Chrome default file prompt
    placeholder: 'No file chosen',
    dropPlaceholder: 'Drop files here'
  },
  BFormText: {
    textVariant: 'muted'
  },
  BImg: {
    blankColor: 'transparent'
  },
  BImgLazy: {
    blankColor: 'transparent'
  },
  BModal: {
    cancelTitle: 'Cancel',
    cancelVariant: 'secondary',
    okTitle: 'OK',
    okVariant: 'primary',
    headerCloseLabel: 'Close'
  } // This contains user defined configuration

};
var CONFIG = {}; // Method to get a deep clone (immutable) copy of the defaults

var getDefaults = function getDefaults() {
  return (0, _cloneDeep.default)(DEFAULTS);
}; // Method to set the config
// Merges in only known top-level and sub-level keys
//   Vue.use(BootstrapVue, config)
// or
//   BootstrapVue.setConfig(config)
//   Vue.use(BootstrapVue)


exports.getDefaults = getDefaults;

var setConfig = function setConfig() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (!(0, _object.isObject)(config)) {
    /* istanbul ignore next */
    return;
  }

  (0, _object.keys)(config).filter(function (cmpName) {
    return config.hasOwnProperty(cmpName);
  }).forEach(function (cmpName) {
    if (!DEFAULTS.hasOwnProperty(cmpName)) {
      /* istanbul ignore next */
      (0, _warn.default)("config: unknown config property \"".concat(cmpName, "\""));
      /* istanbul ignore next */

      return;
    }

    var cmpConfig = config[cmpName];

    if (cmpName === 'breakpoints') {
      // Special case for breakpoints
      var breakpoints = config.breakpoints;

      if (!(0, _array.isArray)(breakpoints) || breakpoints.length < 2 || breakpoints.some(function (b) {
        return typeof b !== 'string' || b.length === 0;
      })) {
        /* istanbul ignore next */
        (0, _warn.default)('config: "breakpoints" must be an array of at least 2 breakpoint names');
      } else {
        CONFIG.breakpoints = (0, _cloneDeep.default)(breakpoints);
      }
    } else if ((0, _object.isObject)(cmpConfig)) {
      (0, _object.keys)(cmpConfig).filter(function (key) {
        return cmpConfig.hasOwnProperty(key);
      }).forEach(function (key) {
        if (!DEFAULTS[cmpName].hasOwnProperty(key)) {
          /* istanbul ignore next */
          (0, _warn.default)("config: unknown config property \"".concat(cmpName, ".{$key}\""));
        } else {
          // If we pre-populate the config with defaults, we can skip this line
          CONFIG[cmpName] = CONFIG[cmpName] || {};

          if (cmpConfig[key] !== undefined) {
            CONFIG[cmpName][key] = (0, _cloneDeep.default)(cmpConfig[key]);
          }
        }
      });
    }
  });
}; // Reset the user config to default
// For testing purposes only


exports.setConfig = setConfig;

var resetConfig = function resetConfig() {
  CONFIG = {};
}; // Get the current user config
// For testing purposes only


exports.resetConfig = resetConfig;

var getConfig = function getConfig() {
  return (0, _cloneDeep.default)(CONFIG);
}; // Method to grab a config value based on a dotted/array notation key
// Returns a deep clone (immutable) copy


exports.getConfig = getConfig;

var getConfigValue = function getConfigValue(key) {
  // First we try the user config, and if key not found we fall back to default value
  // NOTE: If we deep clone DEFAULTS into config, then we can skip the fallback for get
  return (0, _cloneDeep.default)((0, _get.default)(CONFIG, key, (0, _get.default)(getDefaults(), key)));
}; // Method to grab a config value for a particular component.
// Returns a deep clone (immutable) copy


exports.getConfigValue = getConfigValue;

var getComponentConfig = function getComponentConfig(cmpName) {
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  // Return the particular config value for key for if specified,
  // otherwise we return the full config
  return key ? getConfigValue("".concat(cmpName, ".").concat(key)) : getConfigValue(cmpName) || {};
}; // Convenience method for getting all breakpoint names


exports.getComponentConfig = getComponentConfig;

var getBreakpoints = function getBreakpoints() {
  return getConfigValue('breakpoints');
}; // Convenience method for getting breakpoints with
// the smallest breakpoint set as ''
// Useful for components that create breakpoint specific props


exports.getBreakpoints = getBreakpoints;

var getBreakpointsUp = function getBreakpointsUp() {
  var breakpoints = getBreakpoints();
  breakpoints[0] = '';
  return breakpoints;
}; // Convenience method for getting breakpoints with
// the largest breakpoint set as ''
// Useful for components that create breakpoint specific props


exports.getBreakpointsUp = getBreakpointsUp;

var getBreakpointsDown = function getBreakpointsDown() {
  var breakpoints = getBreakpoints();
  breakpoints[breakpoints.length - 1] = '';
  return breakpoints;
}; // Named Exports


exports.getBreakpointsDown = getBreakpointsDown;

/***/ }),

/***/ "ebd1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__("b42e");

var props = {
  id: {
    type: String,
    default: null
  },
  tag: {
    type: String,
    default: 'div'
  },
  tooltip: {
    type: Boolean,
    default: false
  },
  forceShow: {
    type: Boolean,
    default: false
  },
  state: {
    type: [Boolean, String],
    default: null
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BFormInvalidFeedback',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var show = props.forceShow === true || props.state === false || props.state === 'invalid';
    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      class: {
        'invalid-feedback': !props.tooltip,
        'invalid-tooltip': props.tooltip,
        'd-block': show
      },
      attrs: {
        id: props.id
      }
    }), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "edbc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/**
 * Issue #569: collapse::toggle::state triggered too many times
 * @link https://github.com/bootstrap-vue/bootstrap-vue/issues/569
 */
// @vue/component
var _default = {
  methods: {
    /**
     * Safely register event listeners on the root Vue node.
     * While Vue automatically removes listeners for individual components,
     * when a component registers a listener on root and is destroyed,
     * this orphans a callback because the node is gone,
     * but the root does not clear the callback.
     *
     * When registering a $root listener, it also registers a listener on
     * the component's `beforeDestroy` hook to automatically remove the
     * event listener from the $root instance.
     *
     * @param {string} event
     * @param {function} callback
     * @chainable
     */
    listenOnRoot: function listenOnRoot(event, callback) {
      var _this = this;

      this.$root.$on(event, callback);
      this.$on('hook:beforeDestroy', function () {
        _this.$root.$off(event, callback);
      }); // Return this for easy chaining

      return this;
    },

    /**
     * Convenience method for calling vm.$emit on vm.$root.
     * @param {string} event
     * @param {*} args
     * @chainable
     */
    emitOnRoot: function emitOnRoot(event) {
      var _this$$root;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      (_this$$root = this.$root).$emit.apply(_this$$root, [event].concat(args)); // Return this for easy chaining


      return this;
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "edd0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _navbar = __webpack_require__("e1a8");

var _navbarNav = __webpack_require__("4d00");

var _navbarBrand = __webpack_require__("c52a");

var _navbarToggle = __webpack_require__("41cd");

var _nav = __webpack_require__("6423");

var _collapse = __webpack_require__("f3fa");

var _dropdown = __webpack_require__("c7b9");

var _plugins = __webpack_require__("0a8d");

var components = {
  BNavbar: _navbar.default,
  BNavbarNav: _navbarNav.default,
  BNavbarBrand: _navbarBrand.default,
  BNavbarToggle: _navbarToggle.default,
  BNavToggle: _navbarToggle.default
};
var plugins = {
  NavPlugin: _nav.default,
  CollapsePlugin: _collapse.default,
  DropdownPlugin: _dropdown.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components,
    plugins: plugins
  })
};
exports.default = _default;

/***/ }),

/***/ "eee9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__("b42e");

var _link = __webpack_require__("4e40");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var props = (0, _link.propsFactory)(); // @vue/component

exports.props = props;
var _default2 = {
  name: 'BNavItem',
  functional: true,
  props: _objectSpread({}, props, {
    linkAttrs: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    linkClasses: {
      type: [String, Object, Array],
      default: null
    }
  }),
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        listeners = _ref.listeners,
        children = _ref.children;
    // We transfer the listeners to the link
    delete data.on;
    return h('li', (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'nav-item'
    }), [h(_link.default, {
      staticClass: 'nav-link',
      class: props.linkClasses,
      attrs: props.linkAttrs,
      props: props,
      on: listeners
    }, children)]);
  }
};
exports.default = _default2;

/***/ }),

/***/ "ef55":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c76d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "efe3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _formCheckbox = __webpack_require__("bdb1");

var _formCheckboxGroup = __webpack_require__("11ab");

var _plugins = __webpack_require__("0a8d");

var components = {
  BFormCheckbox: _formCheckbox.default,
  BCheckbox: _formCheckbox.default,
  BCheck: _formCheckbox.default,
  BFormCheckboxGroup: _formCheckboxGroup.default,
  BCheckboxGroup: _formCheckboxGroup.default,
  BCheckGroup: _formCheckboxGroup.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "f0bd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.14.7
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport'
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["default"] = (Popper);
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "f18f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.cloneDeep = void 0;

var _array = __webpack_require__("bb2f");

var _object = __webpack_require__("24e2");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var cloneDeep = function cloneDeep(obj) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : obj;

  if ((0, _array.isArray)(obj)) {
    return obj.reduce(function (result, val) {
      return [].concat(_toConsumableArray(result), [cloneDeep(val, val)]);
    }, []);
  }

  if ((0, _object.isPlainObject)(obj)) {
    return (0, _object.keys)(obj).reduce(function (result, key) {
      return _objectSpread({}, result, _defineProperty({}, key, cloneDeep(obj[key], obj[key])));
    }, {});
  }

  return defaultValue;
};

exports.cloneDeep = cloneDeep;
var _default = cloneDeep;
exports.default = _default;

/***/ }),

/***/ "f2e7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f347":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.unbindTargets = exports.bindTargets = void 0;

var _object = __webpack_require__("24e2");

var _dom = __webpack_require__("1611");

var allListenTypes = {
  hover: true,
  click: true,
  focus: true
};
var BVBoundListeners = '__BV_boundEventListeners__';

var bindTargets = function bindTargets(vnode, binding, listenTypes, fn) {
  var targets = (0, _object.keys)(binding.modifiers || {}).filter(function (t) {
    return !allListenTypes[t];
  });

  if (binding.value) {
    targets.push(binding.value);
  }

  var listener = function listener() {
    fn({
      targets: targets,
      vnode: vnode
    });
  };

  (0, _object.keys)(allListenTypes).forEach(function (type) {
    if (listenTypes[type] || binding.modifiers[type]) {
      (0, _dom.eventOn)(vnode.elm, type, listener);
      var boundListeners = vnode.elm[BVBoundListeners] || {};
      boundListeners[type] = boundListeners[type] || [];
      boundListeners[type].push(listener);
      vnode.elm[BVBoundListeners] = boundListeners;
    }
  }); // Return the list of targets

  return targets;
};

exports.bindTargets = bindTargets;

var unbindTargets = function unbindTargets(vnode, binding, listenTypes) {
  (0, _object.keys)(allListenTypes).forEach(function (type) {
    if (listenTypes[type] || binding.modifiers[type]) {
      var boundListeners = vnode.elm[BVBoundListeners] && vnode.elm[BVBoundListeners][type];

      if (boundListeners) {
        boundListeners.forEach(function (listener) {
          return (0, _dom.eventOff)(vnode.elm, type, listener);
        });
        delete vnode.elm[BVBoundListeners][type];
      }
    }
  });
};

exports.unbindTargets = unbindTargets;
var _default = bindTargets;
exports.default = _default;

/***/ }),

/***/ "f38f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _popover = __webpack_require__("8597");

var _popover2 = __webpack_require__("d670");

var _plugins = __webpack_require__("0a8d");

var components = {
  BPopover: _popover.default
};
var plugins = {
  BPopoverDirectivePlugin: _popover2.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components,
    plugins: plugins
  })
};
exports.default = _default;

/***/ }),

/***/ "f3fa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _collapse = __webpack_require__("e4c5");

var _toggle = __webpack_require__("d4a9");

var _plugins = __webpack_require__("0a8d");

var components = {
  BCollapse: _collapse.default
};
var plugins = {
  BToggleDirectivePlugin: _toggle.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components,
    plugins: plugins
  })
};
exports.default = _default;

/***/ }),

/***/ "f429":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _dom = __webpack_require__("1611");

var _target = __webpack_require__("f347");

// Target listen types
var listenTypes = {
  click: true // Emitted show event for modal

};
var EVENT_SHOW = 'bv::show::modal';

var setRole = function setRole(el, binding, vnode) {
  if (el.tagName !== 'BUTTON') {
    (0, _dom.setAttr)(el, 'role', 'button');
  }
};
/*
 * Export our directive
 */


var _default = {
  // eslint-disable-next-line no-shadow-restricted-names
  bind: function bind(el, binding, vnode) {
    (0, _target.bindTargets)(vnode, binding, listenTypes, function (_ref) {
      var targets = _ref.targets,
          vnode = _ref.vnode;
      targets.forEach(function (target) {
        vnode.context.$root.$emit(EVENT_SHOW, target, vnode.elm);
      });
    }); // If element is not a button, we add `role="button"` for accessibility

    setRole(el, binding, vnode);
  },
  updated: setRole,
  componentUpdated: setRole,
  unbind: function unbind(el, binding, vnode) {
    (0, _target.unbindTargets)(vnode, binding, listenTypes); // If element is not a button, we add `role="button"` for accessibility

    if (el.tagName !== 'BUTTON') {
      (0, _dom.removeAttr)(el, 'role', 'button');
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "f4fc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__("b42e");

var _array = __webpack_require__("bb2f");

var _toString = __webpack_require__("40f6");

var _breadcrumbItem = __webpack_require__("5279");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var props = {
  items: {
    type: Array,
    default: null
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BBreadcrumb',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var childNodes = children; // Build child nodes from items if given.

    if ((0, _array.isArray)(props.items)) {
      var activeDefined = false;
      childNodes = props.items.map(function (item, idx) {
        if (_typeof(item) !== 'object') {
          item = {
            text: (0, _toString.default)(item)
          };
        } // Copy the value here so we can normalize it.


        var active = item.active;

        if (active) {
          activeDefined = true;
        }

        if (!active && !activeDefined) {
          // Auto-detect active by position in list.
          active = idx + 1 === props.items.length;
        }

        return h(_breadcrumbItem.default, {
          props: _objectSpread({}, item, {
            active: active
          })
        });
      });
    }

    return h('ol', (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'breadcrumb'
    }), childNodes);
  }
};
exports.default = _default;

/***/ }),

/***/ "f520":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NTextbox_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f2e7");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NTextbox_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NTextbox_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NTextbox_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f772":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "f8bb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _object = __webpack_require__("24e2");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BvEvent =
/*#__PURE__*/
function () {
  function BvEvent(type) {
    var eventInit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, BvEvent);

    // Start by emulating native Event constructor.
    if (!type) {
      /* istanbul ignore next */
      throw new TypeError("Failed to construct '".concat(this.constructor.name, "'. 1 argument required, ").concat(arguments.length, " given."));
    } // Assign defaults first, the eventInit,
    // and the type last so it can't be overwritten.


    (0, _object.assign)(this, BvEvent.defaults(), eventInit, {
      type: type
    }); // Freeze some props as readonly, but leave them enumerable.

    (0, _object.defineProperties)(this, {
      type: (0, _object.readonlyDescriptor)(),
      cancelable: (0, _object.readonlyDescriptor)(),
      nativeEvent: (0, _object.readonlyDescriptor)(),
      target: (0, _object.readonlyDescriptor)(),
      relatedTarget: (0, _object.readonlyDescriptor)(),
      vueTarget: (0, _object.readonlyDescriptor)()
    }); // Create a private variable using closure scoping.

    var defaultPrevented = false; // Recreate preventDefault method. One way setter.

    this.preventDefault = function preventDefault() {
      if (this.cancelable) {
        defaultPrevented = true;
      }
    }; // Create 'defaultPrevented' publicly accessible prop
    // that can only be altered by the preventDefault method.


    (0, _object.defineProperty)(this, 'defaultPrevented', {
      enumerable: true,
      get: function get() {
        return defaultPrevented;
      }
    });
  }

  _createClass(BvEvent, null, [{
    key: "defaults",
    value: function defaults() {
      return {
        type: '',
        cancelable: true,
        nativeEvent: null,
        target: null,
        relatedTarget: null,
        vueTarget: null
      };
    }
  }]);

  return BvEvent;
}();

var _default = BvEvent;
exports.default = _default;

/***/ }),

/***/ "f8d0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _paginationNav = __webpack_require__("8934");

var _plugins = __webpack_require__("0a8d");

var components = {
  BPaginationNav: _paginationNav.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "fa5b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5537")('native-function-to-string', Function.toString);


/***/ }),

/***/ "fab2":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("a4bb");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"67932de6-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Button.vue?vue&type=template&id=aa4b6c7a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-button',_vm._g(_vm._b({class:_vm.classes,attrs:{"variant":_vm.variant,"size":_vm.size,"block":_vm.block,"disabled":_vm.disabled}},'b-button',_vm.$attrs,false),_vm.$listeners),[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Button.vue?vue&type=template&id=aa4b6c7a&

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/es/components/button/button.js
var button_button = __webpack_require__("b664");
var button_default = /*#__PURE__*/__webpack_require__.n(button_button);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Button.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Buttonvue_type_script_lang_js_ = ({
  name: "Button",
  components: {
    BButton: button_default.a
  },
  props: {
    /**
     * Specify `lg` or `sm` for the button size.
     */
    size: {
      default: null,
      type: String // validator(prop) {
      //   return ['sm', 'lg'].includes(prop);
      // },

    },
    // loading: {
    //   type: Boolean,
    //   default: false,
    // },

    /**
     * Create block level buttons — those that span the full width of a parent.
     */
    block: {
      type: Boolean,
      default: false
    },

    /**
     * Specify button type `default`, `outline`, `text`, `icon`,
     */
    type: {
      default: "default",
      type: String
    },

    /**
     * Specify button type `primary`, `secondary`, `danger`, 'transparent'
     *
     */
    variant: {
      default: "primary",
      type: String
    },

    /**
     * Applies just to the icon button.
     */
    round: {
      default: null,
      type: Boolean
    },

    /**
     * Disable button default functionality.
     */
    disabled: {
      default: false,
      type: Boolean
    }
  },
  computed: {
    classes: function classes() {
      var classes = [];
      classes.push("nymbl-btn");

      if (this.type === "icon") {
        classes.push("btn-icon");
      }

      if (this.type === "text") {
        classes.push("btn-text");
      }

      if (this.type === "outline") {
        classes.push("btn-outline");
      }

      if (this.round && this.type === "icon") {
        classes.push("btn-icon-round");
      }

      return classes;
    }
  }
});
// CONCATENATED MODULE: ./src/components/Button.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Buttonvue_type_script_lang_js_ = (Buttonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Button.vue?vue&type=style&index=0&lang=scss&
var Buttonvue_type_style_index_0_lang_scss_ = __webpack_require__("ef55");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/Button.vue






/* normalize component */

var component = normalizeComponent(
  components_Buttonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Button = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"67932de6-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DropdownItem.vue?vue&type=template&id=43f7d806&
var DropdownItemvue_type_template_id_43f7d806_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-dropdown-item',_vm._g(_vm._b({attrs:{"disabled":_vm.disabled}},'b-dropdown-item',_vm.$attrs,false),_vm.$listeners),[_vm._t("default")],2)}
var DropdownItemvue_type_template_id_43f7d806_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/DropdownItem.vue?vue&type=template&id=43f7d806&

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/es/components/dropdown/dropdown-item.js
var dropdown_item = __webpack_require__("0096");
var dropdown_item_default = /*#__PURE__*/__webpack_require__.n(dropdown_item);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DropdownItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//

/* harmony default export */ var DropdownItemvue_type_script_lang_js_ = ({
  name: 'DropdownItem',
  components: {
    BDropdownItem: dropdown_item_default.a
  },
  props: {
    disabled: {
      default: false,
      type: Boolean
    }
  }
});
// CONCATENATED MODULE: ./src/components/DropdownItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DropdownItemvue_type_script_lang_js_ = (DropdownItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/DropdownItem.vue





/* normalize component */

var DropdownItem_component = normalizeComponent(
  components_DropdownItemvue_type_script_lang_js_,
  DropdownItemvue_type_template_id_43f7d806_render,
  DropdownItemvue_type_template_id_43f7d806_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DropdownItem = (DropdownItem_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"67932de6-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Dropdown.vue?vue&type=template&id=6bf8151a&
var Dropdownvue_type_template_id_6bf8151a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-dropdown',{attrs:{"text":_vm.text}},[_vm._t("default")],2)}
var Dropdownvue_type_template_id_6bf8151a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Dropdown.vue?vue&type=template&id=6bf8151a&

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/es/components/dropdown/dropdown.js
var dropdown = __webpack_require__("e14e");
var dropdown_default = /*#__PURE__*/__webpack_require__.n(dropdown);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Dropdown.vue?vue&type=script&lang=js&
//
//
//
//
//

/* harmony default export */ var Dropdownvue_type_script_lang_js_ = ({
  name: 'Dropdown',
  components: {
    BDropdown: dropdown_default.a
  },
  props: {
    /**
    * Dropdown Text
    */
    text: {
      type: String,
      default: ''
    },

    /**
    * The size of the button
    * `small, normal, large`
    */
    type: {
      default: 'primary',
      type: String
    },
    disabled: {
      default: false,
      type: Boolean
    }
  }
});
// CONCATENATED MODULE: ./src/components/Dropdown.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Dropdownvue_type_script_lang_js_ = (Dropdownvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Dropdown.vue?vue&type=style&index=0&lang=scss&
var Dropdownvue_type_style_index_0_lang_scss_ = __webpack_require__("61e0");

// CONCATENATED MODULE: ./src/components/Dropdown.vue






/* normalize component */

var Dropdown_component = normalizeComponent(
  components_Dropdownvue_type_script_lang_js_,
  Dropdownvue_type_template_id_6bf8151a_render,
  Dropdownvue_type_template_id_6bf8151a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Dropdown = (Dropdown_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"67932de6-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal.vue?vue&type=template&id=64863ce0&
var Modalvue_type_template_id_64863ce0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-modal',_vm._g(_vm._b({ref:"modal",style:({ 'max-width': _vm.size + 'rem' }),attrs:{"centered":_vm.centered,"hide-header-close":"","no-fade":"","hide-header":_vm.isHeaderHidden,"content-class":_vm.contentClass},on:{"hide":_vm.close},model:{value:(_vm.show),callback:function ($$v) {_vm.show=$$v},expression:"show"}},'b-modal',_vm.$attrs,false),_vm.$listeners),[(_vm.type !== 'confirm')?_c('div',{attrs:{"slot":"modal-header"},slot:"modal-header"},[_vm._v("\n    "+_vm._s(_vm.title)+"\n    "),_c('Button',{staticClass:"modal-close",attrs:{"round":"","type":"icon","variant":"danger","title":"Close"},nativeOn:{"click":function($event){return _vm.close()}}},[_c('close-icon',{attrs:{"size":28}})],1)],1):_vm._e(),_vm._t("default"),_c('div',{staticClass:"w-100",attrs:{"slot":"modal-footer"},slot:"modal-footer"},[_vm._t("modal-footer")],2)],2)}
var Modalvue_type_template_id_64863ce0_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Modal.vue?vue&type=template&id=64863ce0&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/es/components/modal/modal.js
var modal = __webpack_require__("3a5b");
var modal_default = /*#__PURE__*/__webpack_require__.n(modal);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"67932de6-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/icons/Close.vue?vue&type=template&id=c64c4096&
var Closevue_type_template_id_c64c4096_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"material-design-icon close-icon",attrs:{"aria-hidden":_vm.decorative,"aria-label":_vm.title,"role":"img"},on:{"click":function($event){return _vm.$emit('click', $event)}}},[_c('svg',{staticClass:"material-design-icon__svg",attrs:{"fill":_vm.fillColor,"width":_vm.size,"height":_vm.size,"viewBox":"0 0 24 24"}},[_c('title',[_vm._v(_vm._s(_vm.title))]),_c('g',{attrs:{"transform":"translate(-105.24 -61.446)"}},[_c('g',{attrs:{"transform":"matrix(.67321 0 0 .67321 -108.44 -113.77)"}},[_c('path',{attrs:{"d":"m326.29 261.4c6.5931 6.581 13.216 13.134 19.79 19.733 1.1898 1.2726 1.2693 3.6619-0.35503 4.6205-1.4856 0.90229-3.3959 0.15814-4.4251-1.0912-6.4716-6.46-12.972-12.892-19.426-19.37-1.1898-1.2726-1.2693-3.6619 0.35503-4.6205 1.3052-0.7982 3.045-0.31454 4.0606 0.72816z","fill-rule":"evenodd","stroke-width":".67116"}}),_c('path',{attrs:{"d":"m326.29 261.4c6.5931 6.581 13.216 13.134 19.79 19.733 1.1898 1.2726 1.2693 3.6619-0.35503 4.6205-1.4856 0.90229-3.3959 0.15814-4.4251-1.0912-6.4716-6.46-12.972-12.892-19.426-19.37-1.1898-1.2726-1.2693-3.6619 0.35503-4.6205 1.3052-0.7982 3.045-0.31454 4.0606 0.72816z","fill-rule":"evenodd","stroke-width":".67116"}}),_c('path',{attrs:{"d":"m341.74 261.38c-6.5931 6.581-13.216 13.134-19.79 19.733-1.1898 1.2726-1.2693 3.6619 0.35503 4.6205 1.4856 0.9023 3.3959 0.15813 4.4252-1.0912 6.4716-6.46 12.972-12.892 19.426-19.37 1.1898-1.2726 1.2693-3.6619-0.35504-4.6205-1.3052-0.79819-3.045-0.31454-4.0606 0.72816z","fill-rule":"evenodd","stroke-width":".67116"}})])])])])}
var Closevue_type_template_id_c64c4096_staticRenderFns = []


// CONCATENATED MODULE: ./src/icons/Close.vue?vue&type=template&id=c64c4096&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/icons/Close.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Closevue_type_script_lang_js_ = ({
  name: "CloseIcon",
  props: {
    title: {
      type: String,
      default: "Close"
    },
    decorative: {
      type: Boolean,
      default: false
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
});
// CONCATENATED MODULE: ./src/icons/Close.vue?vue&type=script&lang=js&
 /* harmony default export */ var icons_Closevue_type_script_lang_js_ = (Closevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/icons/Close.vue





/* normalize component */

var Close_component = normalizeComponent(
  icons_Closevue_type_script_lang_js_,
  Closevue_type_template_id_c64c4096_render,
  Closevue_type_template_id_c64c4096_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Close = (Close_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // const CloseIcon = require("./icons/Close.vue").default;

/* harmony default export */ var Modalvue_type_script_lang_js_ = ({
  name: "Modal",
  components: {
    BModal: modal_default.a,
    CloseIcon: Close
  },
  props: {
    show: {
      default: false,
      type: Boolean
    },

    /**
     * Vertically center your modal in the viewport.
     */
    centered: {
      default: false,
      type: Boolean
    },
    title: {
      default: "null",
      type: String
    },
    size: {
      default: 40,
      type: Number
    },

    /**
     * Make dialog fullscreen in responsive breakpoints.
     */
    type: {
      default: "default",
      type: String
    },

    /**
     * Make dialog fullscreen in responsive breakpoints.
     */
    fullscreen: {
      default: "no",
      type: String
    }
  },
  computed: {
    isHeaderHidden: function isHeaderHidden() {
      if (this.type === "confirm") {
        return true;
      }

      return false;
    },
    contentClass: function contentClass() {
      if (this.type === "confirm") {
        return "modal-confirm";
      }

      return "";
    }
  },
  methods: {
    close: function close() {
      // this.$refs["modal"].hide();
      this.$emit("close");
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Modalvue_type_script_lang_js_ = (Modalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Modal.vue?vue&type=style&index=0&lang=scss&
var Modalvue_type_style_index_0_lang_scss_ = __webpack_require__("30db");

// CONCATENATED MODULE: ./src/components/Modal.vue






/* normalize component */

var Modal_component = normalizeComponent(
  components_Modalvue_type_script_lang_js_,
  Modalvue_type_template_id_64863ce0_render,
  Modalvue_type_template_id_64863ce0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Modal = (Modal_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"67932de6-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Navbar.vue?vue&type=template&id=3f39d66c&
var Navbarvue_type_template_id_3f39d66c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-navbar',{class:{ drawer: _vm.drawer },attrs:{"fixed":_vm.fixed,"sticky":_vm.sticky,"toggleable":_vm.toggleable}},[(_vm.drawer)?_c('Button',{staticClass:"menu-toggle",attrs:{"round":"","type":"icon","variant":"transparent"},nativeOn:{"click":function($event){return _vm.toggleSidebar()}}},[_c('menu-icon')],1):_vm._e(),_c('b-navbar-brand',{staticClass:"navbar-brand",attrs:{"href":"#"}},[_vm._t("logo")],2),_c('b-navbar-nav',{staticClass:"ml-auto sidebar",class:{ open: _vm.show },attrs:{"id":"side-bar","right":""}},[_c('Button',{staticClass:"menu-close",attrs:{"round":"","type":"icon","variant":"transparent"},nativeOn:{"click":function($event){return _vm.hide()}}},[_c('close-icon')],1),_vm._t("nav-items-drawer")],2),_c('b-navbar-nav',{attrs:{"right":""}},[_vm._t("nav-items")],2),(_vm.show)?_c('div',{staticClass:"backdrop",on:{"click":function($event){return _vm.hide()}}}):_vm._e()],1)}
var Navbarvue_type_template_id_3f39d66c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Navbar.vue?vue&type=template&id=3f39d66c&

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/es/components/navbar/navbar.js
var navbar = __webpack_require__("e1a8");
var navbar_default = /*#__PURE__*/__webpack_require__.n(navbar);

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/es/components/navbar/navbar-brand.js
var navbar_brand = __webpack_require__("c52a");
var navbar_brand_default = /*#__PURE__*/__webpack_require__.n(navbar_brand);

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/es/components/navbar/navbar-nav.js
var navbar_nav = __webpack_require__("4d00");
var navbar_nav_default = /*#__PURE__*/__webpack_require__.n(navbar_nav);

// EXTERNAL MODULE: ./node_modules/vue-click-outside/index.js
var vue_click_outside = __webpack_require__("e67d");
var vue_click_outside_default = /*#__PURE__*/__webpack_require__.n(vue_click_outside);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"67932de6-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/Menu.vue?vue&type=template&id=6224dad2&
var Menuvue_type_template_id_6224dad2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"material-design-icon menu-icon",attrs:{"aria-hidden":_vm.decorative,"aria-label":_vm.title,"role":"img"},on:{"click":function($event){return _vm.$emit('click', $event)}}},[_c('svg',{staticClass:"material-design-icon__svg",attrs:{"fill":_vm.fillColor,"width":_vm.size,"height":_vm.size,"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"d":"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"}},[_c('title',[_vm._v(_vm._s(_vm.title))])])])])}
var Menuvue_type_template_id_6224dad2_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Menu.vue?vue&type=template&id=6224dad2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/Menu.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Menuvue_type_script_lang_js_ = ({
  name: "MenuIcon",
  props: {
    title: {
      type: String,
      default: "Menu icon"
    },
    decorative: {
      type: Boolean,
      default: false
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Menu.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_material_design_icons_Menuvue_type_script_lang_js_ = (Menuvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Menu.vue





/* normalize component */

var Menu_component = normalizeComponent(
  vue_material_design_icons_Menuvue_type_script_lang_js_,
  Menuvue_type_template_id_6224dad2_render,
  Menuvue_type_template_id_6224dad2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Menu = (Menu_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"67932de6-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/Close.vue?vue&type=template&id=78909527&
var Closevue_type_template_id_78909527_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"material-design-icon close-icon",attrs:{"aria-hidden":_vm.decorative,"aria-label":_vm.title,"role":"img"},on:{"click":function($event){return _vm.$emit('click', $event)}}},[_c('svg',{staticClass:"material-design-icon__svg",attrs:{"fill":_vm.fillColor,"width":_vm.size,"height":_vm.size,"viewBox":"0 0 24 24"}},[_c('path',{attrs:{"d":"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}},[_c('title',[_vm._v(_vm._s(_vm.title))])])])])}
var Closevue_type_template_id_78909527_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Close.vue?vue&type=template&id=78909527&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-material-design-icons/Close.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vue_material_design_icons_Closevue_type_script_lang_js_ = ({
  name: "CloseIcon",
  props: {
    title: {
      type: String,
      default: "Close icon"
    },
    decorative: {
      type: Boolean,
      default: false
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Close.vue?vue&type=script&lang=js&
 /* harmony default export */ var node_modules_vue_material_design_icons_Closevue_type_script_lang_js_ = (vue_material_design_icons_Closevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-material-design-icons/Close.vue





/* normalize component */

var vue_material_design_icons_Close_component = normalizeComponent(
  node_modules_vue_material_design_icons_Closevue_type_script_lang_js_,
  Closevue_type_template_id_78909527_render,
  Closevue_type_template_id_78909527_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vue_material_design_icons_Close = (vue_material_design_icons_Close_component.exports);
// EXTERNAL MODULE: ./node_modules/hammerjs/hammer.js
var hammerjs_hammer = __webpack_require__("c8b5");
var hammer_default = /*#__PURE__*/__webpack_require__.n(hammerjs_hammer);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Navbar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var Navbarvue_type_script_lang_js_ = ({
  name: "Navbar",
  components: {
    BNavbar: navbar_default.a,
    BNavbarBrand: navbar_brand_default.a,
    BNavbarNav: navbar_nav_default.a,
    MenuIcon: Menu,
    CloseIcon: vue_material_design_icons_Close
  },
  directives: {
    ClickOutside: vue_click_outside_default.a
  },
  props: {
    /**
     * Enable or disable responsive side drawer menu.
     */
    drawer: {
      type: Boolean,
      default: false
    },

    /**
     * Set to `top` for fixed to the top of the viewport,
     * or `bottom` for fixed to the bottom of the viewport.
     */
    fixed: {
      type: String,
      default: null
    },

    /**
     * Set to `true` to make the navbar stick to the top of the viewport
     * (or parent container that has `position: relative` set) when scrolled.
     */
    sticky: {
      type: Boolean,
      default: false
    },

    /**
     * Possible toggleable values are `sm`, `md`, `lg` and `xl`.
     * Setting toggleable to `true` (or an empty string)
     * will set the navbar to be always collapsed,
     * while setting it to `false` (the default) will disable collapsing (always expanded).
     */
    toggleable: {
      type: [Boolean, String],
      default: false
    }
  },
  data: function data() {
    return {
      dropdownVisible: false,
      show: false
    };
  },
  computed: {
    me: function me() {
      return false;
    }
  },
  created: function created() {
    var that = this;
    setTimeout(function () {
      var element = document.getElementById("side-bar");
      var hammer = new hammer_default.a.Manager(element);
      var swipe = new hammer_default.a.Swipe();
      hammer.add(swipe);
      hammer.on("swipeleft", function () {
        that.hide();
      });
    }, 1000);
  },
  methods: {
    hide: function hide() {
      this.show = false;
      document.documentElement.classList.remove("no-scrolling");
    },
    toggleSidebar: function toggleSidebar() {
      this.show = true;
      document.documentElement.classList.add("no-scrolling");
    }
  }
});
// CONCATENATED MODULE: ./src/components/Navbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Navbarvue_type_script_lang_js_ = (Navbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Navbar.vue?vue&type=style&index=0&lang=scss&
var Navbarvue_type_style_index_0_lang_scss_ = __webpack_require__("16a3");

// CONCATENATED MODULE: ./src/components/Navbar.vue






/* normalize component */

var Navbar_component = normalizeComponent(
  components_Navbarvue_type_script_lang_js_,
  Navbarvue_type_template_id_3f39d66c_render,
  Navbarvue_type_template_id_3f39d66c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Navbar = (Navbar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"67932de6-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NavDropdown.vue?vue&type=template&id=0c3fd33e&
var NavDropdownvue_type_template_id_0c3fd33e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-nav-item-dropdown',_vm._g(_vm._b({attrs:{"disabled":_vm.disabled,"text":_vm.text,"right":""}},'b-nav-item-dropdown',_vm.$attrs,false),_vm.$listeners),[_vm._t("default")],2)}
var NavDropdownvue_type_template_id_0c3fd33e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NavDropdown.vue?vue&type=template&id=0c3fd33e&

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/es/components/nav/nav-item-dropdown.js
var nav_item_dropdown = __webpack_require__("485d");
var nav_item_dropdown_default = /*#__PURE__*/__webpack_require__.n(nav_item_dropdown);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NavDropdown.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var NavDropdownvue_type_script_lang_js_ = ({
  name: 'NavDropdown',
  components: {
    BNavItemDropdown: nav_item_dropdown_default.a
  },
  props: {
    text: {
      default: '',
      type: String
    },
    disabled: {
      default: false,
      type: Boolean
    }
  }
});
// CONCATENATED MODULE: ./src/components/NavDropdown.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_NavDropdownvue_type_script_lang_js_ = (NavDropdownvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/NavDropdown.vue





/* normalize component */

var NavDropdown_component = normalizeComponent(
  components_NavDropdownvue_type_script_lang_js_,
  NavDropdownvue_type_template_id_0c3fd33e_render,
  NavDropdownvue_type_template_id_0c3fd33e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NavDropdown = (NavDropdown_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"67932de6-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NavItem.vue?vue&type=template&id=11338ce0&
var NavItemvue_type_template_id_11338ce0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-nav-item',_vm._g(_vm._b({attrs:{"disabled":_vm.disabled}},'b-nav-item',_vm.$attrs,false),_vm.$listeners),[_vm._t("default")],2)}
var NavItemvue_type_template_id_11338ce0_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NavItem.vue?vue&type=template&id=11338ce0&

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/es/components/nav/nav-item.js
var nav_item = __webpack_require__("eee9");
var nav_item_default = /*#__PURE__*/__webpack_require__.n(nav_item);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NavItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//

/* harmony default export */ var NavItemvue_type_script_lang_js_ = ({
  name: 'NavItem',
  components: {
    BNavItem: nav_item_default.a
  },
  props: {
    disabled: {
      default: false,
      type: Boolean
    }
  }
});
// CONCATENATED MODULE: ./src/components/NavItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_NavItemvue_type_script_lang_js_ = (NavItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/NavItem.vue





/* normalize component */

var NavItem_component = normalizeComponent(
  components_NavItemvue_type_script_lang_js_,
  NavItemvue_type_template_id_11338ce0_render,
  NavItemvue_type_template_id_11338ce0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NavItem = (NavItem_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"67932de6-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NTextbox.vue?vue&type=template&id=47199dd8&
var NTextboxvue_type_template_id_47199dd8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ui-textbox',_vm._g(_vm._b({staticClass:"n-textbox",attrs:{"options":_vm.options,"disabled":_vm.disabled,"label":_vm.label,"placeholder":_vm.placeholder,"floating-label":_vm.floatingLabel,"help":_vm.help,"error":_vm.error,"invalid":_vm.invalid,"name":_vm.name}},'ui-textbox',_vm.$attrs,false),_vm.$listeners),[_vm._t("default")],2)}
var NTextboxvue_type_template_id_47199dd8_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NTextbox.vue?vue&type=template&id=47199dd8&

// EXTERNAL MODULE: ./node_modules/keen-ui/src/helpers/modality.js
var modality = __webpack_require__("78b7");

// CONCATENATED MODULE: ./node_modules/keen-ui/src/bootstrap.js


// EXTERNAL MODULE: ./node_modules/keen-ui/lib/UiTextbox.js
var UiTextbox = __webpack_require__("a99d");
var UiTextbox_default = /*#__PURE__*/__webpack_require__.n(UiTextbox);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NTextbox.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // Required when using standalone components, should be imported only once in your project


/* harmony default export */ var NTextboxvue_type_script_lang_js_ = ({
  name: "NTextbox",
  components: {
    UiTextbox: UiTextbox_default.a
  },
  props: {
    /**
     * Select Options
     */
    options: {
      type: Array,
      default: function _default() {
        return [];
      }
    },

    /**
     * The size of the button
     * `small, normal, large`
     */
    placeholder: {
      default: "",
      type: String
    },
    label: {
      default: "",
      type: String
    },
    help: {
      default: "",
      type: String
    },
    error: {
      default: "",
      type: String
    },
    name: {
      default: "",
      type: String
    },
    floatingLabel: {
      default: false,
      type: Boolean
    },
    disabled: {
      default: false,
      type: Boolean
    },
    invalid: {
      default: false,
      type: Boolean
    }
  }
});
// CONCATENATED MODULE: ./src/components/NTextbox.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_NTextboxvue_type_script_lang_js_ = (NTextboxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/NTextbox.vue?vue&type=style&index=0&lang=scss&
var NTextboxvue_type_style_index_0_lang_scss_ = __webpack_require__("f520");

// CONCATENATED MODULE: ./src/components/NTextbox.vue






/* normalize component */

var NTextbox_component = normalizeComponent(
  components_NTextboxvue_type_script_lang_js_,
  NTextboxvue_type_template_id_47199dd8_render,
  NTextboxvue_type_template_id_47199dd8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NTextbox = (NTextbox_component.exports);
// EXTERNAL MODULE: ./node_modules/bootstrap-vue/es/components/index.js
var components = __webpack_require__("7b38");

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/es/components/collapse/collapse.js
var collapse = __webpack_require__("e4c5");
var collapse_default = /*#__PURE__*/__webpack_require__.n(collapse);

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/es/directives/toggle/toggle.js
var toggle = __webpack_require__("a596");
var toggle_default = /*#__PURE__*/__webpack_require__.n(toggle);

// EXTERNAL MODULE: ./src/assets/sass/main.scss
var main = __webpack_require__("9299");

// CONCATENATED MODULE: ./src/components/index.js










 // import NSelect from "./NSelect.vue";






external_commonjs_vue_commonjs2_vue_root_Vue_default.a.config.productionTip = false;
var Components = {
  Button: Button,
  DropdownItem: DropdownItem,
  Dropdown: Dropdown,
  Modal: Modal,
  Navbar: Navbar,
  NavDropdown: NavDropdown,
  NavItem: NavItem,
  bCollapse: collapse_default.a,
  NTextbox: NTextbox // NSelect

};
var Directives = {
  vBToggle: toggle_default.a
};
var NymblUI = {
  Components: Components,
  Directives: Directives,
  Layout: components["Layout"]
};

keys_default()(Components).forEach(function (name) {
  external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component(name, Components[name]);
});

keys_default()(Directives).forEach(function (name) {
  external_commonjs_vue_commonjs2_vue_root_Vue_default.a.directive(name, Directives[name]);
});

external_commonjs_vue_commonjs2_vue_root_Vue_default.a.use(components["Layout"]);
/* harmony default export */ var src_components = (NymblUI);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_components);



/***/ }),

/***/ "fc47":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = defaultSortCompare;

var _get = __webpack_require__("b0df");

var _stringifyObjectValues = __webpack_require__("2227");

// Default sort compare routine
//
// TODO: add option to sort by multiple columns (tri-state per column, plus order of columns in sort)
//  where sprtBy could be an array of objects [ {key: 'foo', sortDir: 'asc'}, {key:'bar', sortDir: 'desc'} ...]
//  or an array of arrays [ ['foo','asc'], ['bar','desc'] ]
function defaultSortCompare(a, b, sortBy) {
  a = (0, _get.default)(a, sortBy, '');
  b = (0, _get.default)(b, sortBy, '');

  if (a instanceof Date && b instanceof Date || typeof a === 'number' && typeof b === 'number') {
    // Special case for comparing Dates and Numbers
    // Internally dates are compared via their epoch number values
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  } else {
    // Do localized string comparison
    return (0, _stringifyObjectValues.default)(a).localeCompare((0, _stringifyObjectValues.default)(b), undefined, {
      numeric: true
    });
  }
}

/***/ }),

/***/ "fccc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var identity = function identity(x) {
  return x;
};

var _default = identity;
exports.default = _default;

/***/ }),

/***/ "fde0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__("b42e");

var _inputGroupPrepend = __webpack_require__("9e3e");

var _inputGroupAppend = __webpack_require__("6780");

var _inputGroupText = __webpack_require__("df74");

var _html = __webpack_require__("be11");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var props = {
  id: {
    type: String
  },
  size: {
    type: String
  },
  prepend: {
    type: String
  },
  prependHTML: {
    type: String
  },
  append: {
    type: String
  },
  appendHTML: {
    type: String
  },
  tag: {
    type: String,
    default: 'div'
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BInputGroup',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        slots = _ref.slots;
    var $slots = slots();
    var childNodes = []; // Prepend prop

    if (props.prepend) {
      childNodes.push(h(_inputGroupPrepend.default, [h(_inputGroupText.default, {
        domProps: (0, _html.htmlOrText)(props.prependHTML, props.prepend)
      })]));
    } else {
      childNodes.push(h(false));
    } // Prepend slot


    if ($slots.prepend) {
      childNodes.push(h(_inputGroupPrepend.default, $slots.prepend));
    } else {
      childNodes.push(h(false));
    } // Default slot


    if ($slots.default) {
      childNodes.push.apply(childNodes, _toConsumableArray($slots.default));
    } else {
      childNodes.push(h(false));
    } // Append prop


    if (props.append) {
      childNodes.push(h(_inputGroupAppend.default, [h(_inputGroupText.default, {
        domProps: (0, _html.htmlOrText)(props.appendHTML, props.append)
      })]));
    } else {
      childNodes.push(h(false));
    } // Append slot


    if ($slots.append) {
      childNodes.push(h(_inputGroupAppend.default, $slots.append));
    } else {
      childNodes.push(h(false));
    }

    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'input-group',
      class: _defineProperty({}, "input-group-".concat(props.size), Boolean(props.size)),
      attrs: {
        id: props.id || null,
        role: 'group'
      }
    }), childNodes);
  }
};
exports.default = _default;

/***/ }),

/***/ "fdef":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "ff35":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _id = __webpack_require__("eae0");

var _formOptions = __webpack_require__("461c");

var _form = __webpack_require__("5f07");

var _formSize = __webpack_require__("6e1b");

var _formState = __webpack_require__("41fb");

var _formCustom = __webpack_require__("377c");

var _array = __webpack_require__("bb2f");

var _html = __webpack_require__("be11");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// @vue/component
var _default = {
  name: 'BFormSelect',
  mixins: [_id.default, _form.default, _formSize.default, _formState.default, _formCustom.default, _formOptions.default],
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {// type: [Object, Array, String, Number, Boolean],
      // default: undefined
    },
    multiple: {
      type: Boolean,
      default: false
    },
    selectSize: {
      // Browsers default size to 0, which shows 4 rows in most browsers in multiple mode
      // Size of 1 can bork out Firefox
      type: Number,
      default: 0
    },
    ariaInvalid: {
      type: [Boolean, String],
      default: false
    }
  },
  data: function data() {
    return {
      localValue: this.value
    };
  },
  computed: {
    computedSelectSize: function computedSelectSize() {
      // Custom selects with a size of zero causes the arrows to be hidden,
      // so dont render the size attribute in this case
      return !this.plain && this.selectSize === 0 ? null : this.selectSize;
    },
    inputClass: function inputClass() {
      return [this.plain ? 'form-control' : 'custom-select', this.size && this.plain ? "form-control-".concat(this.size) : null, this.size && !this.plain ? "custom-select-".concat(this.size) : null, this.stateClass];
    },
    computedAriaInvalid: function computedAriaInvalid() {
      if (this.ariaInvalid === true || this.ariaInvalid === 'true') {
        return 'true';
      }

      return this.stateClass === 'is-invalid' ? 'true' : null;
    }
  },
  watch: {
    value: function value(newVal, oldVal) {
      this.localValue = newVal;
    },
    localValue: function localValue(newVal, oldVal) {
      this.$emit('input', this.localValue);
    }
  },
  methods: {
    focus: function focus() {
      this.$refs.input.focus();
    },
    blur: function blur() {
      this.$refs.input.blur();
    }
  },
  render: function render(h) {
    var _this = this;

    var $slots = this.$slots;
    var options = this.formOptions.map(function (option, index) {
      return h('option', {
        key: "option_".concat(index, "_opt"),
        attrs: {
          disabled: Boolean(option.disabled)
        },
        domProps: _objectSpread({}, (0, _html.htmlOrText)(option.html, option.text), {
          value: option.value
        })
      });
    });
    return h('select', {
      ref: 'input',
      class: this.inputClass,
      directives: [{
        name: 'model',
        rawName: 'v-model',
        value: this.localValue,
        expression: 'localValue'
      }],
      attrs: {
        id: this.safeId(),
        name: this.name,
        form: this.form || null,
        multiple: this.multiple || null,
        size: this.computedSelectSize,
        disabled: this.disabled,
        required: this.required,
        'aria-required': this.required ? 'true' : null,
        'aria-invalid': this.computedAriaInvalid
      },
      on: {
        change: function change(evt) {
          var target = evt.target;
          var selectedVal = (0, _array.from)(target.options).filter(function (o) {
            return o.selected;
          }).map(function (o) {
            return '_value' in o ? o._value : o.value;
          });
          _this.localValue = target.multiple ? selectedVal : selectedVal[0];

          _this.$nextTick(function () {
            _this.$emit('change', _this.localValue);
          });
        }
      }
    }, [$slots.first, options, $slots.default]);
  }
};
exports.default = _default;

/***/ })

/******/ });
});
//# sourceMappingURL=nymbl-ui.umd.js.map