# -*- coding: utf-8-*-
#!/usr/bin/env python
import os
import sys
sys.path.append(os.path.dirname(__file__))
import string  
import json 
import time
import tornado.ioloop
import tornado.httpserver
import tornado.web
import tornado.websocket
import tornado.log as t_l
import tornado.options
import threading
from tornado.log import enable_pretty_logging
APP_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
sys.path.append(os.path.join(APP_ROOT, '..'))


class Handler(tornado.web.MainHandler):
    def __init__(self):  
        pass
class TornadoApplication(tornado.web.Application):
    
    def __init__(self):
        path  =  os.path.abspath(os.path.join(os.path.dirname(__file__)))+"/static/"
        handlers = [
             (r"/(.*)", tornado.web.StaticFileHandler, {"path": path, "default_filename": "index.htm"})
,
        ]
        settings = {
            "debug": True,
        }
        tornado.web.Application.__init__(self, handlers, **settings)
           
            
http_server = tornado.httpserver.HTTPServer(TornadoApplication())
http_server.listen(8080)
tornado.ioloop.IOLoop.instance().start()        

