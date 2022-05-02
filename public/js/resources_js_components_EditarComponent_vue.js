"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_EditarComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditarComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditarComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'editarNota',
  data: function data() {
    return {
      nota: {
        nombre: "",
        descripcion: ""
      }
    };
  },
  mounted: function mounted() {
    this.mostrarNota();
  },
  methods: {
    mostrarNota: function mostrarNota() {
      var _this = this;

      axios.get("/notas/".concat(this.$route.params.id)).then(function (response) {
        var _response$data = response.data,
            nombre = _response$data.nombre,
            descripcion = _response$data.descripcion;
        _this.nota.nombre = nombre;
        _this.nota.descripcion = descripcion;
      });
    },
    editarNota: function editarNota(nota) {
      var _this2 = this;

      var params = {
        nombre: nota.nombre,
        descripcion: nota.descripcion
      };
      axios.put("/notas/".concat(this.$route.params.id), params).then(function (res) {
        _this2.$router.push({
          name: "mostrarNotas"
        });
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/EditarComponent.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/EditarComponent.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditarComponent_vue_vue_type_template_id_1eaa1ae7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditarComponent.vue?vue&type=template&id=1eaa1ae7& */ "./resources/js/components/EditarComponent.vue?vue&type=template&id=1eaa1ae7&");
/* harmony import */ var _EditarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditarComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/EditarComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditarComponent_vue_vue_type_template_id_1eaa1ae7___WEBPACK_IMPORTED_MODULE_0__.render,
  _EditarComponent_vue_vue_type_template_id_1eaa1ae7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/EditarComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/EditarComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/EditarComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditarComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditarComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/EditarComponent.vue?vue&type=template&id=1eaa1ae7&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/EditarComponent.vue?vue&type=template&id=1eaa1ae7& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarComponent_vue_vue_type_template_id_1eaa1ae7___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarComponent_vue_vue_type_template_id_1eaa1ae7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarComponent_vue_vue_type_template_id_1eaa1ae7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditarComponent.vue?vue&type=template&id=1eaa1ae7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditarComponent.vue?vue&type=template&id=1eaa1ae7&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditarComponent.vue?vue&type=template&id=1eaa1ae7&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditarComponent.vue?vue&type=template&id=1eaa1ae7& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "form",
      {
        on: {
          submit: function ($event) {
            $event.preventDefault()
            return _vm.editarNota(_vm.nota)
          },
        },
      },
      [
        _c("h3", [_vm._v("Editar Nota")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.nota.nombre,
              expression: "nota.nombre",
            },
          ],
          staticClass: "form-control mb-2",
          attrs: { type: "text", placeholder: "Nombre" },
          domProps: { value: _vm.nota.nombre },
          on: {
            input: function ($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.nota, "nombre", $event.target.value)
            },
          },
        }),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.nota.descripcion,
              expression: "nota.descripcion",
            },
          ],
          staticClass: "form-control mb-2",
          attrs: { type: "text", placeholder: "Descripcion" },
          domProps: { value: _vm.nota.descripcion },
          on: {
            input: function ($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.nota, "descripcion", $event.target.value)
            },
          },
        }),
        _vm._v(" "),
        _c("button", { staticClass: "btn btn-primary btn-sm" }, [
          _vm._v("Guardar"),
        ]),
        _vm._v(" "),
        _c(
          "router-link",
          {
            staticClass: "btn btn-danger btn-block btn-sm",
            attrs: { to: { name: "mostrarNotas" } },
          },
          [_vm._v("Cancelar")]
        ),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);