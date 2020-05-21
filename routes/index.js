const fetch = require('node-fetch')
const fs = require('fs');
const request = require('supertest');
const express = require("express");
const port = 3001
const app = express();
const router = express.Router()

app.listen(port, () => console.log("Express is listening!"))


// POST comments
router.get('/posts/1/comments', async (req, res) => {
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
    .then(response => response.json())
    .then(json => res.json(json))
    
})

request(router)
    .get('/posts/1/comments')
    .expect(200)
    .expect('Content-Type', 'application/json; charset=utf-8')
    .end(function(err, res) {
        if (err) throw err;
    });

router.post('/posts/1/comments', function (req, res) {
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments', {
        method: 'POST',
        body: JSON.stringify({
            postId: 55,
            id: 56,
            name: 'Moby',
            email: "Moby@gmail.com",
            body: "jfsjarjiejoinmeojoll"
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
        })
        .then(response => response.json())
        .then(json => console.log(json))
})
    
request(router)
    .post('/posts/1/comments')
    .expect(200)
    .expect('Content-Type', 'application/json; charset=utf-8')
    .end(function(err, res) {
        if (err) throw err;
    })


// POST Photos
router.get('/albums/1/photos', async (req, res) => {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
    .then(response => response.json())
    .then(json => res.json(json))
})

request(router)
    .get('/albums/1/photos')
    .expect(200)
    .expect('Content-Type', 'application/json; charset=utf-8')
    .end(function(err, res) {
        if (err) throw err;
    })

router.post('/albums/1/photos', function (req, res) {
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos', {
        method: 'POST',
        body: JSON.stringify({
            albumId: 55,
            id: 56,
            title: 'Moby',
            url: "Moby.com",
            thumbnailUrl: "photo"
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
        })
        .then(response => response.json())
        .then(json => console.log(json))
    })

request(router)
.post('/albums/1/photos')
.expect(200)
.expect('Content-Type', 'application/json; charset=utf-8')
.end(function(err, res) {
    if (err) throw err;
})


// POST Album
router.get('/users/1/albums', async (req, res) => {
    fetch("https://jsonplaceholder.typicode.com/users/1/albums")
    .then(response => response.json())
    .then(json => res.json(json))
})

request(router)
    .get('/users/1/albums')
    .expect(200)
    .expect('Content-Type', 'application/json; charset=utf-8')
    .end(function(err, res) {
        if (err) throw err;
    })

router.post('/users/1/albums', function (req, res) {
    fetch('https://jsonplaceholder.typicode.com/users/1/albums', {
        method: 'POST',
        body: JSON.stringify({
            userId: 12,
            id: 15,
            title: "Moby"
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
        })
        .then(response => response.json())
        .then(json => console.log(json))
    })

request(router)
.post('/users/1/albums')
.expect(200)
.expect('Content-Type', 'application/json; charset=utf-8')
.end(function(err, res) {
    if (err) throw err;
})



    
    
    module.exports = router
