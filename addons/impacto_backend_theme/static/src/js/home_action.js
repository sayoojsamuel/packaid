/**
 *  -*- coding: utf-8 -*-
 *  Odoo, Open Source  Itm Material Theme.
 *  License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl).# 
 * 
 */
odoo.define('impacto_backend_theme.home_action', function (require) {
"use strict";

var core = require('web.core');
var Widget = require('web.Widget');
var session = require('web.session');
var rpc = require('web.rpc');

var QWeb = core.qweb;
var _t = core._t;


var MyHomeAction = Widget.extend({
    
	init:function () {
		var self = this;
		document.body.className ='drawer drawer--left o_web_client drawer-open'
		return this._super.apply(this, arguments);
	},
	start: function () {
        var self = this;
        document.body.className = 'drawer drawer--left o_web_client drawer-open'
        return this._super.apply(this, arguments);
    },

});

core.action_registry.add('home_action_url', MyHomeAction);

return MyHomeAction;

});
