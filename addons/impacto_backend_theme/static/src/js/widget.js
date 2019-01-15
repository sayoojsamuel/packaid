/**
 *  -*- coding: utf-8 -*-
 *  Odoo, Open Source  Itm Material Theme.
 *  License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl).# 
 * 
 */
odoo.define('web.web_widget_color', function(require) {
    "use strict";

    var basic_fields = require('web.basic_fields');
    var field_registry = require('web.field_registry');
    var FormController = require('web.FormController');
    var field_utils = require('web.field_utils');
    var custom = require('web.custom');

    var _super_getDir = jscolor.getDir.prototype;
    jscolor.getDir = function () {
        var dir = _super_getDir.constructor();
        if (dir.indexOf('impacto_backend_theme') === -1) {
            jscolor.dir = '/impacto_backend_theme/static/lib/jscolor/';
        }
        return jscolor.dir;
    };

    var FieldColor = basic_fields.FieldChar.extend({
        template: 'FieldColor',
        widget_class: 'oe_form_field_color',
        _getValue: function() {
        	custom.dynamic_color_code(this.$('input').val());
        	return field_utils.format.char(this.$('input').val());
        },
        _render: function () {
            var show_value = field_utils.format.char(this.value);
            jscolor.init(this.$el[0]);
            if (this.mode !== 'readonly') {
                var $input = this.$el.find('input');
                $input.val(show_value);
                $input.css("background-color", show_value);
                this.$input = $input;
                this.$(".oe_form_char_content").text(show_value);
                this.$('span').css("background-color", show_value);
            } else {
                this.$(".oe_form_char_content").text(show_value);
                this.$('span').css("background-color", show_value);

            }
        }
    });
    field_registry.add('color', FieldColor);

    /*
     * Init jscolor for each editable mode on view form
     */
    FormController.include({
        _updateEnv : function (parentID) {
            this._super(parentID);
            jscolor.init(this.$el[0]);
        }
    });
    return FieldColor
});
