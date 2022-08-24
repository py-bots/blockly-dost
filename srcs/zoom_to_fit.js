/*! For license information please see index.js.LICENSE.txt */
!function (t, o) { if ("object" == typeof exports && "object" == typeof module) module.exports = o(require("blockly/core")); else if ("function" == typeof define && define.amd) define(["blockly/core"], o); else { var e = "object" == typeof exports ? o(require("blockly/core")) : o(t.Blockly); for (var i in e) ("object" == typeof exports ? exports : t)[i] = e[i] } }(this, (function (t) { return (() => { "use strict"; var o = { 573: o => { o.exports = t } }, e = {}; function i(t) { var s = e[t]; if (void 0 !== s) return s.exports; var r = e[t] = { exports: {} }; return o[t](r, r.exports, i), r.exports } i.n = t => { var o = t && t.__esModule ? () => t.default : () => t; return i.d(o, { a: o }), o }, i.d = (t, o) => { for (var e in o) i.o(o, e) && !i.o(t, e) && Object.defineProperty(t, e, { enumerable: !0, get: o[e] }) }, i.o = (t, o) => Object.prototype.hasOwnProperty.call(t, o), i.r = t => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }; var s = {}; return (() => { i.r(s), i.d(s, { ZoomToFitControl: () => e }); var t = i(573), o = i.n(t); class e { constructor(t) { this.workspace_ = t, this.id = "zoomToFit", this.svgGroup_ = null, this.left_ = 0, this.top_ = 0, this.WIDTH_ = 32, this.HEIGHT_ = 32, this.MARGIN_VERTICAL_ = 20, this.MARGIN_HORIZONTAL_ = 20, this.initialized_ = !1 } init() { this.workspace_.getComponentManager().addComponent({ component: this, weight: 2, capabilities: [o().ComponentManager.Capability.POSITIONABLE] }), this.createDom_(), this.initialized_ = !0, this.workspace_.resize() } dispose() { this.svgGroup_ && o().utils.dom.removeNode(this.svgGroup_), this.onZoomToFitWrapper_ && o().unbindEvent_(this.onZoomToFitWrapper_) } createDom_() { this.svgGroup_ = o().utils.dom.createSvgElement(o().utils.Svg.IMAGE, { height: this.HEIGHT_ + "px", width: this.WIDTH_ + "px", class: "zoomToFit" }), this.svgGroup_.setAttributeNS(o().utils.dom.XLINK_NS, "xlink:href", r), o().utils.dom.insertAfter(this.svgGroup_, this.workspace_.getBubbleCanvas()), this.onZoomToFitWrapper_ = o().browserEvents.conditionalBind(this.svgGroup_, "mousedown", null, this.onClick_.bind(this)) } onClick_() { this.workspace_.zoomToFit(); const t = new (o().Events.get(o().Events.CLICK))(null, this.workspace_.id, "zoom_reset_control"); o().Events.fire(t) } getBoundingRectangle() { return new (o().utils.Rect)(this.top_, this.top_ + this.HEIGHT_, this.left_, this.left_ + this.WIDTH_) } position(t, e) { if (!this.initialized_) return; const i = this.workspace_.scrollbar && this.workspace_.scrollbar.canScrollHorizontally(), s = this.workspace_.scrollbar && this.workspace_.scrollbar.canScrollVertically(); t.toolboxMetrics.position === o().TOOLBOX_AT_LEFT || this.workspace_.horizontalLayout && !this.workspace_.RTL ? (this.left_ = t.absoluteMetrics.left + t.viewMetrics.width - this.WIDTH_ - this.MARGIN_HORIZONTAL_, i && !this.workspace_.RTL && (this.left_ -= o().Scrollbar.scrollbarThickness)) : (this.left_ = this.MARGIN_HORIZONTAL_, i && this.workspace_.RTL && (this.left_ += o().Scrollbar.scrollbarThickness)); const r = t.toolboxMetrics.position !== o().TOOLBOX_AT_BOTTOM; r ? (this.top_ = t.absoluteMetrics.top + t.viewMetrics.height - this.HEIGHT_ - this.MARGIN_VERTICAL_, s && (this.top_ -= o().Scrollbar.scrollbarThickness)) : this.top_ = t.absoluteMetrics.top + this.MARGIN_VERTICAL_; let n = this.getBoundingRectangle(); for (let t, o = 0; t = e[o]; o++)n.intersects(t) && (this.top_ = r ? t.top - this.HEIGHT_ - this.MARGIN_VERTICAL_ : t.bottom + this.MARGIN_VERTICAL_, n = this.getBoundingRectangle(), o = -1); this.svgGroup_.setAttribute("transform", "translate(" + this.left_ + "," + this.top_ + ")") } } const r = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjRweCIgZmlsbD0iIzU0NkU3QSI+PHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTUgNi40Mkw4LjA5IDkuNSA5LjUgOC4wOSA2LjQxIDVIOVYzSDN2Nmgyem0xMC0zLjQxdjJoMi41N0wxNC41IDguMDlsMS40MSAxLjQxTDE5IDYuNDFWOWgyVjMuMDF6bTQgMTQuNTdsLTMuMDktMy4wOC0xLjQxIDEuNDFMMTcuNTkgMTlIMTV2Mmg2di02aC0yek04LjA5IDE0LjVMNSAxNy41OVYxNUgzdjZoNnYtMkg2LjQybDMuMDgtMy4wOXoiLz48L3N2Zz4="; o().Css.register([".zoomToFit {\n    opacity: .4;\n  }\n  .zoomToFit:hover {\n    opacity: .6;\n  }\n  .zoomToFit:active {\n    opacity: .8;\n  }"]) })(), s })() }));
//# sourceMappingURL=index.js.map