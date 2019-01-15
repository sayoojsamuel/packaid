# -*- coding: utf-8 -*-
# Odoo, Open Source Itm  Material Theme.
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl).# 

from odoo.tests import HttpCase


class TestUi(HttpCase):

    def test_ui_web(self):
        """Test backend tests."""
        self.phantom_js(
            "/web/tests?module=impacto_backend_theme",
            "",
            login="admin",
        )
