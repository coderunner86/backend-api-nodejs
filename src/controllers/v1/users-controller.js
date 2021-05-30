getUsers = (req, res) => {
    res.send({
        "id": "1",
        "name": null,
        "lastName": null,
        "email": "alfonso.perez@empresa.com",
        "role": "admin",
        "status": "active",
        "permissions": {
            "bank-accounts": {
                "add": "allow",
                "transfer": "allow",
                "view": "allow"
            },
            "bills": {
                "add": "allow",
                "delete": "allow",
                "edit": "allow",
                "view": "allow"
            },
            "categories": {
                "view": "allow"
            },
            "contacts": {
                "add": "allow",
                "delete": "allow",
                "edit": "allow",
                "view": "allow"
            },
            "company": {
                "edit": "allow",
                "retrieve-info": "allow"
            },
            "invoices": {
                "add": "allow",
                "edit": "allow",
                "email": "allow",
                "view": "allow",
                "void": "allow",
                "edit-items-prices": "allow"
            },
            "items": {
                "add": "allow",
                "delete": "allow",
                "edit": "allow",
                "view": "allow"
            },
            "retentions": {
                "view": "allow"
            },
            "taxes": {
                "view": "allow"
            },
            "terms": {
                "view": "allow"
            },
            "payments": {
                "add": "allow",
                "edit": "allow",
                "view": "allow",
                "edit-in": "allow",
                "edit-out": "allow",
                "retrieve-in": "allow",
                "viewin": "allow",
                "viewout": "allow"
            },
            "price-lists": {
                "view": "allow"
            },
            "remissions": {
                "add": "allow",
                "edit": "allow",
                "delete": "allow",
                "view": "allow"
            },
            "estimates": {
                "add": "allow",
                "delete": "allow",
                "view": "allow",
                "edit": "allow"
            },
            "currencies": {
                "index": "allow"
            },
            "sellers": {
                "add": "allow",
                "edit": "allow"
            },
            "pos-cashier": {
                "close": "allow",
                "index": "allow",
                "open": "allow",
                "view": "allow"
            },
            "pos-station": {
                "add": "allow",
                "edit": "allow",
                "view": "allow",
                "index": "allow",
                "delete": "allow"
            }
        }
    })
};

module.exports = {
    getUsers
}