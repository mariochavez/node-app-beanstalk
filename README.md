# Sample Nodejs app on Elastic Beanstalk

Requeriments:
- A simple Nodejs app running Reactjs as frontend
- Node app should run on PORT 23572
- Application should be accesible via port 9090 on Elastic Beanstalk

## Simple Node app with React front end

A basic setup of Node and React was done to have a Single Page App with
2 views.

## Mounting Node app on port 23572

Elastic Beanstalk uses port 8081 to run Node applications, this port seems to
be hardcoded, we did try different ways to override Amazon's configuration
without luck.

To evercome this we introduced a new ENV variable: `NODE_PORT`, which can be
found in `.ebextensions/01_options.config` file. Also file `bin/www` was
modified as follow:

```
var port = normalizePort(process.env.NODE_PORT || '3000');
app.set('port', port);
```

Next Nginx configuration was replaced with a custom one to override the
`upstream`, this was done in file `.ebextensions/proxy.config` and the change
was as follow:

```
upstream nodejs {
    server 127.0.0.1:23572;
    keepalive 256;
}
```

# Routing traffic via port 9090
File `.ebextensions/traffic.config` was added to change EC2 its security group
to accept traffic via port 9090 coming from our Load Balancer.

Also this file introduces a new lister for our Load Balancer to accept requests
via port 9090.
