# -*- coding: utf-8 -*-
# Odoo, Open Source Itm Material Theme.
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl).# 

import base64
from odoo.http import Controller, request, route
from werkzeug.utils import redirect

DEFAULT_IMAGE = '/impacto_backend_theme/static/src/img/icon-2.png'

class DasboardBackground(Controller):

    @route(['/dashboard'], type='http', auth='user', website=False)
    def dashboard(self, **post):
        user = request.env.user
        company = user.company_id
        if company.dashboard_background:
            image = base64.b64decode(company.dashboard_background)
        else:
            return redirect(DEFAULT_IMAGE)

        return request.make_response(
            image, [('Content-Type', 'image')])