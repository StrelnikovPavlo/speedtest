(() => {
    "use strict";
    var __webpack_modules__ = {
        68: (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
            __webpack_require__(908);
        },
        908: (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
            __webpack_require__.d(__webpack_exports__, {
                t: () => flsModules
            });
            const flsModules = {};
        },
        303: (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
            __webpack_require__(68);
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        __webpack_require__.d = (exports, definition) => {
            for (var key in definition) if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) Object.defineProperty(exports, key, {
                enumerable: true,
                get: definition[key]
            });
        };
    })();
    (() => {
        __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    })();
    (() => {
        __webpack_require__(908);
        __webpack_require__(68);
        __webpack_require__(303);
        document.addEventListener("DOMContentLoaded", (() => {
            const searchForm = document.getElementById("materials-search-form");
            if (searchForm) searchForm.addEventListener("submit", (event => {
                event.preventDefault();
                const searchInput = document.getElementById("materials-search-input").value;
                window.location.href = `?search=${encodeURIComponent(searchInput)}`;
            }));
        }));
    })();
})();