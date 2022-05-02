"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_MostrarComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MostrarComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MostrarComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "mostrarNotas",
  data: function data() {
    return {
      notas: [],
      nota: {
        nombre: '',
        descripcion: ''
      }
    };
  },
  created: function created() {
    var _this = this;

    axios.get('/notas').then(function (res) {
      _this.notas = res.data;
    });
  },
  methods: {
    agregar: function agregar() {
      var _this2 = this;

      if (this.nota.nombre === '' || this.nota.descripcion === '') {
        alert('Debes completar todos los campos antes de guardar');
        return;
      }

      var params = {
        nombre: this.nota.nombre,
        descripcion: this.nota.descripcion
      };
      axios.post('/notas', params).then(function (res) {
        _this2.notas.push(res.data);
      });
      this.nota.nombre = '';
      this.nota.descripcion = '';
    },
    eliminarNota: function eliminarNota(item, index) {
      var _this3 = this;

      if (confirm("Confirma que quieres eliminar el registro")) {
        axios["delete"]("/notas/".concat(item.id)).then(function (res) {
          _this3.notas.splice(index, 1);
        });
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/components/MostrarComponent.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/MostrarComponent.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MostrarComponent_vue_vue_type_template_id_dce071f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MostrarComponent.vue?vue&type=template&id=dce071f0& */ "./resources/js/components/MostrarComponent.vue?vue&type=template&id=dce071f0&");
/* harmony import */ var _MostrarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MostrarComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/MostrarComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MostrarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MostrarComponent_vue_vue_type_template_id_dce071f0___WEBPACK_IMPORTED_MODULE_0__.render,
  _MostrarComponent_vue_vue_type_template_id_dce071f0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/MostrarComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/MostrarComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/MostrarComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MostrarComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MostrarComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/MostrarComponent.vue?vue&type=template&id=dce071f0&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/MostrarComponent.vue?vue&type=template&id=dce071f0& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarComponent_vue_vue_type_template_id_dce071f0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarComponent_vue_vue_type_template_id_dce071f0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarComponent_vue_vue_type_template_id_dce071f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MostrarComponent.vue?vue&type=template&id=dce071f0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MostrarComponent.vue?vue&type=template&id=dce071f0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MostrarComponent.vue?vue&type=template&id=dce071f0&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MostrarComponent.vue?vue&type=template&id=dce071f0& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.isAuthenticated
    ? _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-lg-12 mb-4" },
          [
            _c(
              "router-link",
              {
                staticClass: "btn btn-success btn-block",
                attrs: { to: { name: "crearNota" } },
              },
              [_vm._v("Crear Nota")]
            ),
            _vm._v(" "),
            _c("hr", { staticClass: "mt-3" }),
            _vm._v(" "),
            _c("h3", [_vm._v("Listado de notas")]),
            _vm._v(" "),
            _c(
              "ul",
              { staticClass: "list-group my-2" },
              _vm._l(_vm.notas, function (item, index) {
                return _c(
                  "li",
                  { key: index, staticClass: "list-group-item" },
                  [
                    _c(
                      "span",
                      {
                        staticClass: "badge bg-primary",
                        staticStyle: { float: "right" },
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(item.updated_at) +
                            "\n            "
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c("p", [_vm._v(_vm._s(item.nombre))]),
                    _vm._v(" "),
                    _c("p", [_vm._v(_vm._s(item.descripcion))]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-danger btn-sm",
                        on: {
                          click: function ($event) {
                            return _vm.eliminarNota(item, index)
                          },
                        },
                      },
                      [_vm._v("Eliminar")]
                    ),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "btn btn-warning text-white btn-sm",
                        attrs: {
                          to: { name: "editarNota", params: { id: item.id } },
                        },
                      },
                      [_vm._v("Editar")]
                    ),
                  ],
                  1
                )
              }),
              0
            ),
          ],
          1
        ),
      ])
    : _c(
        "div",
        { staticClass: "card-body" },
        [
          _c("h1", [_vm._v("Es necesario que te verifiques")]),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "btn btn-primary",
              attrs: { to: { name: "bienvenida" } },
            },
            [_vm._v("Hacer login")]
          ),
        ],
        1
      )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);