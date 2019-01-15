# -*- coding: utf-8 -*-
# Odoo, Open Source Itm Material Theme.
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl).# 

from odoo import fields, models


class ResCompany(models.Model):
    _inherit = 'res.company'

    color_background = fields.Char('Select Background Color', default="#36a3f7")
    dashboard_background = fields.Binary(attachment=True)


    

