const users = [{
    "id": 1,
    "email": "george.bluth@reqres.in",
    "first_name": "George",
    "last_name": "Bluth",
    "avatar": "https://reqres.in/img/faces/1-image.jpg"
}, {
    "id": 2,
    "email": "janet.weaver@reqres.in",
    "first_name": "Janet",
    "last_name": "Weaver",
    "avatar": "https://reqres.in/img/faces/2-image.jpg"
}, {
    "id": 3,
    "email": "emma.wong@reqres.in",
    "first_name": "Emma",
    "last_name": "Wong",
    "avatar": "https://reqres.in/img/faces/3-image.jpg"
}, {
    "id": 4,
    "email": "eve.holt@reqres.in",
    "first_name": "Eve",
    "last_name": "Holt",
    "avatar": "https://reqres.in/img/faces/4-image.jpg"
}, {
    "id": 5,
    "email": "charles.morris@reqres.in",
    "first_name": "Charles",
    "last_name": "Morris",
    "avatar": "https://reqres.in/img/faces/5-image.jpg"
}, {
    "id": 6,
    "email": "tracey.ramos@reqres.in",
    "first_name": "Tracey",
    "last_name": "Ramos",
    "avatar": "https://reqres.in/img/faces/6-image.jpg"
}];
const getUsers = (req, res) => {
    res.send({
        "page": 2,
        "per_page": 6,
        "total": 12,
        "total_pages": 2,
        "data": users,
        "support": {
            "url": "https://reqres.in/#support-heading",
            "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
        }
    })
};
const getUserById = (req, res) => {
    console.log("req.params", req.params)
    const { userId } = req.params;
    const index = users.findIndex((item) => item.id == userId);
    if (index !== -1) {
        res.send({
            data: users[index]
        });
        //console.log(users.findIndex(userId));
    } else {
        res.status(404).send({});
        // console.log(users.findIndex(userId));
    }
}

module.exports = {
        getUsers,
        getUserById
    }
    /*
    const array1 = [5, 12, 8, 130, 44];

    const isLargeNumber = (element) => element > 1;

    console.log(array1.findIndex(isLargeNumber));
    // expected output: 3*/