/**
 *  -*- coding: utf-8 -*-
 *  Odoo, Open Source  Itm Material Theme.
 *  License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl).# 
 * 
 */
odoo.define('web.custom', function(require) {
	"use strict";
	var core = require('web.core');
	var FormView = require('web.FormView');
	var session = require('web.session');
	var rpc = require('web.rpc');


	var id = session.company_id;
	rpc.query({
		model : 'res.company',
		method : 'read',
		args : [ [ id ], [ 'color_background' ] ],
	}).then(function(res) {
		var custom_color = res[0]['color_background'];
		var stylesheetFile = '/impacto_backend_theme/static/src/less/themes/dynamic_color.less';
		var link = document.createElement('link');
		link.rel = "stylesheet";
		link.type = "text/less";
		link.href = stylesheetFile;
		less.sheets.push(link);
		less.refresh();
		less.modifyVars({
			'@dynamic_color_default' : custom_color,
			'@dynamic_color_hover' : 'darken(@dynamic_color_default, 20%)',
			'@dynamic_color' : 'lighten(@dynamic_color_default, 20%)',
			'@dynamic_color_border' : 'lighten(@dynamic_color_default, 23%)',
			'@dynamic_color_tag_bg' : 'lighten(@dynamic_color_default, 30%)',
		});
		//    			less.refresh();
		less.refreshStyles();

	});

	var dynamic_color_code = (function() {
		var colors = function dynamic_color_code(color) {
			var stylesheetFile = '/impacto_backend_theme/static/src/less/themes/dynamic_color.less';
			var link = document.createElement('link');
			link.rel = "stylesheet";
			link.type = "text/less";
			link.href = stylesheetFile;
			less.sheets.push(link);
			less.modifyVars({
				'@dynamic_color_default' : color,
				'@dynamic_color_hover' : 'darken(@dynamic_color_default, 22%)',
				'@dynamic_color' : 'lighten(@dynamic_color_default, 20%)',
				'@dynamic_color_border' : 'lighten(@dynamic_color_default, 23%)',
				'@dynamic_color_tag_bg' : 'lighten(@dynamic_color_default, 30%)',
			});
			less.refreshStyles();
		};
		return colors;

	})();

	return {
		dynamic_color_code : dynamic_color_code,
	};

});