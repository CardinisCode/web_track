# This code is extracted from:
# https://stackabuse.com/serving-files-with-pythons-simplehttpserver-module/
# It enables me to run a HTTP server, so that I could see the output of my code as I added/adjusted the code. 

import http.server
import socketserver

PORT = 8004

handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), handler) as httpd:
    print("Server started at http://localhost:" + str(PORT))
    httpd.serve_forever()