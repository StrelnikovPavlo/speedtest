(() => {
    "use strict";
    var __webpack_modules__ = {
        68: (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
            __webpack_require__.d(__webpack_exports__, {
                X_: () => _slideToggle,
                dI: () => bodyUnlock,
                mh: () => bodyLock,
                ws: () => _slideUp
            });
            __webpack_require__(908);
            let _slideUp = (target, duration = 500, showmore = 0) => {
                if (!target.classList.contains("_slide")) {
                    target.classList.add("_slide");
                    target.style.transitionProperty = "height, margin, padding";
                    target.style.transitionDuration = duration + "ms";
                    target.style.height = `${target.offsetHeight}px`;
                    target.offsetHeight;
                    target.style.overflow = "hidden";
                    target.style.height = showmore ? `${showmore}px` : `0px`;
                    target.style.paddingTop = 0;
                    target.style.paddingBottom = 0;
                    target.style.marginTop = 0;
                    target.style.marginBottom = 0;
                    window.setTimeout((() => {
                        target.hidden = !showmore ? true : false;
                        !showmore ? target.style.removeProperty("height") : null;
                        target.style.removeProperty("padding-top");
                        target.style.removeProperty("padding-bottom");
                        target.style.removeProperty("margin-top");
                        target.style.removeProperty("margin-bottom");
                        !showmore ? target.style.removeProperty("overflow") : null;
                        target.style.removeProperty("transition-duration");
                        target.style.removeProperty("transition-property");
                        target.classList.remove("_slide");
                        document.dispatchEvent(new CustomEvent("slideUpDone", {
                            detail: {
                                target
                            }
                        }));
                    }), duration);
                }
            };
            let _slideDown = (target, duration = 500, showmore = 0) => {
                if (!target.classList.contains("_slide")) {
                    target.classList.add("_slide");
                    target.hidden = target.hidden ? false : null;
                    showmore ? target.style.removeProperty("height") : null;
                    let height = target.offsetHeight;
                    target.style.overflow = "hidden";
                    target.style.height = showmore ? `${showmore}px` : `0px`;
                    target.style.paddingTop = 0;
                    target.style.paddingBottom = 0;
                    target.style.marginTop = 0;
                    target.style.marginBottom = 0;
                    target.offsetHeight;
                    target.style.transitionProperty = "height, margin, padding";
                    target.style.transitionDuration = duration + "ms";
                    target.style.height = height + "px";
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    window.setTimeout((() => {
                        target.style.removeProperty("height");
                        target.style.removeProperty("overflow");
                        target.style.removeProperty("transition-duration");
                        target.style.removeProperty("transition-property");
                        target.classList.remove("_slide");
                        document.dispatchEvent(new CustomEvent("slideDownDone", {
                            detail: {
                                target
                            }
                        }));
                    }), duration);
                }
            };
            let _slideToggle = (target, duration = 500) => {
                if (target.hidden) return _slideDown(target, duration); else return _slideUp(target, duration);
            };
            let bodyLockStatus = true;
            let bodyUnlock = (delay = 500) => {
                let body = document.querySelector("body");
                if (bodyLockStatus) {
                    let lock_padding = document.querySelectorAll("[data-lp]");
                    setTimeout((() => {
                        for (let index = 0; index < lock_padding.length; index++) {
                            const el = lock_padding[index];
                            el.style.paddingRight = "0px";
                        }
                        body.style.paddingRight = "0px";
                        document.documentElement.classList.remove("lock");
                    }), delay);
                    bodyLockStatus = false;
                    setTimeout((function() {
                        bodyLockStatus = true;
                    }), delay);
                }
            };
            let bodyLock = (delay = 500) => {
                let body = document.querySelector("body");
                if (bodyLockStatus) {
                    let lock_padding = document.querySelectorAll("[data-lp]");
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                    }
                    body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                    document.documentElement.classList.add("lock");
                    bodyLockStatus = false;
                    setTimeout((function() {
                        bodyLockStatus = true;
                    }), delay);
                }
            };
        },
        908: (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {}
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
        var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68);
        __webpack_require__(908);
        const langSwitchers = document.querySelectorAll(".language-switcher");
        if (langSwitchers.length) {
            const handleSwitcher = (switcher, list, open) => {
                if (open) switcher.classList.add("active"); else switcher.classList.remove("active");
            };
            langSwitchers.forEach((switcher => {
                const languageHeader = switcher.querySelector(".language-switcher__header");
                const languageList = switcher.querySelector(".language-switcher__list");
                const items = languageList.querySelectorAll("li");
                if (window.innerWidth > 768) {
                    languageHeader?.addEventListener("click", (() => {
                        handleSwitcher(switcher, languageList, !switcher.classList.contains("active"));
                    }));
                    items.forEach((li => {
                        li.addEventListener("click", (() => {
                            languageHeader.textContent = li.textContent;
                            handleSwitcher(switcher, languageList, false);
                        }));
                    }));
                    window.addEventListener("click", (e => {
                        if (!e.target.closest(".language-switcher")) handleSwitcher(switcher, languageList, false);
                    }));
                } else items.forEach((li => {
                    li.addEventListener("click", (() => {
                        items.forEach((el => el.classList.remove("active")));
                        li.classList.add("active");
                    }));
                }));
            }));
        }
        document.addEventListener("DOMContentLoaded", (() => {
            const methodsLists = document.querySelectorAll(".block-reservation__connection-methods");
            const inputConnectionMethod = document.getElementById("input-connection-method");
            methodsLists.forEach((methodList => {
                const methods = methodList.querySelectorAll(".block-reservation__connection-method");
                if (methods.length) {
                    const defaultMethod = document.querySelector(".block-reservation__connection-method.selected");
                    if (!defaultMethod) {
                        methods[0].classList.add("selected");
                        inputConnectionMethod.value = methods[0].getAttribute("data-connection");
                    } else {
                        defaultMethod.classList.add("selected");
                        inputConnectionMethod.value = defaultMethod.getAttribute("data-connection");
                    }
                }
                methods.forEach((method => {
                    method.addEventListener("click", (() => {
                        methods.forEach((item => item.classList.remove("selected")));
                        method.classList.add("selected");
                        inputConnectionMethod.value = method.getAttribute("data-connection");
                    }));
                }));
            }));
        }));
        const educationBlocks = document.querySelectorAll(".education-about__block");
        if (educationBlocks) educationBlocks.forEach((block => {
            const blockButton = block.querySelector(".education-about__show-more");
            const blockHideContent = block.querySelector(".education-about__list-hide");
            const blockButtonText = blockButton.querySelector("span");
            (0, _functions_js__WEBPACK_IMPORTED_MODULE_0__.ws)(blockHideContent, 0);
            if (blockHideContent && !blockHideContent.querySelector("p")) blockButton.classList.add("hide");
            blockButton.addEventListener("click", (() => {
                if (blockHideContent) {
                    (0, _functions_js__WEBPACK_IMPORTED_MODULE_0__.X_)(blockHideContent, 300);
                    blockButton.classList.toggle("active");
                    blockButtonText.textContent = blockButtonText.textContent === "Дивитись усе" ? "Згорнути" : "Дивитись усе";
                }
            }));
        }));
        const courseAboutMore = document.querySelectorAll(".course-about");
        if (courseAboutMore) courseAboutMore.forEach((block => {
            const blockButton = block.querySelector(".course-about__show-more");
            const blockHideContent = block.querySelector(".course-about__list-hide");
            const hasLiElements = blockHideContent && blockHideContent.querySelector("li");
            if (!hasLiElements && blockButton) blockButton.classList.add("hide");
            if (blockButton && blockHideContent) {
                (0, _functions_js__WEBPACK_IMPORTED_MODULE_0__.ws)(blockHideContent, 0);
                const blockButtonText = blockButton.querySelector("span");
                blockButton.addEventListener("click", (() => {
                    if (blockHideContent) {
                        (0, _functions_js__WEBPACK_IMPORTED_MODULE_0__.X_)(blockHideContent, 300);
                        blockButton.classList.toggle("active");
                        blockButtonText.textContent = blockButtonText.textContent === "Дивитись усе" ? "Згорнути" : "Дивитись усе";
                    }
                }));
            }
        }));
        const aboutCourses = document.querySelector(".about-courses");
        if (aboutCourses) {
            const aboutCoursesButton = document.querySelector(".about-courses__read-more");
            aboutCoursesButton.addEventListener("click", (function() {
                aboutCourses.classList.toggle("active");
                aboutCoursesButton.textContent = aboutCoursesButton.textContent === "Читати далі" ? "Згорнути" : "Читати далі";
            }));
        }
        const chat = document.querySelector(".chat");
        if (chat) {
            const chatInput = chat.querySelector(".input-chat__input-field input");
            const submitButton = chat.querySelector(".input-chat__send");
            const chatButton = chat.querySelector(".chat__button-open");
            const chatButtonClose = chat.querySelector(".chat__close");
            chatInput.addEventListener("input", (function() {
                if (chatInput.value.trim() !== "") submitButton.classList.remove("disable"); else submitButton.classList.add("disable");
            }));
            submitButton.addEventListener("click", (function() {
                chatInput.value = "";
            }));
            function handleResize() {
                if (window.innerWidth <= 480 && chat.classList.contains("active")) (0, _functions_js__WEBPACK_IMPORTED_MODULE_0__.mh)(); else (0, 
                _functions_js__WEBPACK_IMPORTED_MODULE_0__.dI)();
            }
            chatButton.addEventListener("click", (function() {
                chat.classList.add("active");
                handleResize();
            }));
            chatButtonClose.addEventListener("click", (function() {
                chat.classList.remove("active");
                (0, _functions_js__WEBPACK_IMPORTED_MODULE_0__.dI)();
            }));
            window.addEventListener("resize", handleResize);
            handleResize();
        }
        const radios = document.querySelectorAll('input[name="consultation_type"]');
        const infoBlock = document.getElementById("info-consultation");
        const priceBlock = document.getElementById("info-price");
        function updateConsultation(radio) {
            infoBlock.textContent = radio.dataset.label;
            priceBlock.textContent = radio.dataset.price + " грн.";
        }
        radios.forEach((radio => {
            radio.addEventListener("change", (function() {
                updateConsultation(this);
            }));
        }));
        const checked = document.querySelector('input[name="consultation_type"]:checked');
        if (checked) updateConsultation(checked);
    })();
})();