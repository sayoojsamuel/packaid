
{
    "name": "Impacto Backend theme",
    "summary": "Odoo 11.0 community backend theme",
    "version": "11.0.1.0.23",
    "category": "Themes/Backend",
    "author": 'Adventumweb',
    "description": """
================================================================================

Odoo admin responsive backend theme 

================================================================================
""",
    'depends': ['base', 'web'],
    'data': [
        'views/res_company_view.xml',
        'views/assets.xml',
        'views/web.xml',
        'views/users.xml',
        'views/sidebar.xml',
    ],
    'qweb': [
        'static/src/xml/*.xml',
    ],
    'application': True,
    'auto_install': False,
    'installable': True,
    'web_preload': True,
    'currency': 'EUR',
	'images': [
      'static/description/impacto.jpg',
 	  'static/description/impactobackend_screenshot.jpg'
    ],
}

