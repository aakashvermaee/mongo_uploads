# Mongo Uploads
A simple demo project to upload files to Mongo Grid FS.
This project is using twitter's bootstrap and, ejs to build-up views.

## Run Project
- npm i
- npm start

## Run in DEV mode
- npm i
- npm run dev

# Dependencies

## express
Fast, unopinionated, minimalist web framework for node.

## EJS
Embedded JavaScript templates

## Multer
Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. 
It is written on top of busboy for maximum efficiency.

## Mongoose
Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.

## Multer GridFS storage engine
GridFS storage engine for Multer to store uploaded files directly to MongoDb.
This module is intended to be used with the v1.x branch of Multer.

## gridfs-stream
Easily stream files to and from MongoDB GridFS. Gridfs-stream v1.x uses Stream2 API from nodejs v0.10 (and the mongodb v2.x driver). It provides more robust and easier to use streams. If for some reason you need nodejs v0.8 streams, please switch to the gridfs-stream 0.x branch

## body-parser
Node.js body parsing middleware. Parse incoming request bodies in a middleware before your handlers, available under the req.body property.

## method-override
Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.

## nodemon
nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.