"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductById = exports.updateProductAndNotify = exports.partialUpdateProduct = exports.updateProduct = exports.createProduct = exports.getProductById = exports.getProducts = void 0;
const products_1 = require("../../data/products");
const getProducts = (req, res) => {
    const itemsPerPage = 3;
    const page = parseInt(req.query.page);
    const start = (page - 1) * itemsPerPage;
    const total = products_1.products.length;
    const end = page * itemsPerPage;
    // console.log("start", start);
    // console.log("total", total);
    // console.log("end", end > total ? total : end);
    res.send({
        "page": page,
        "per_page": itemsPerPage,
        "total": total,
        "total_pages": Math.ceil(total / itemsPerPage),
        "data": products_1.products.slice(start, end),
    });
};
exports.getProducts = getProducts;
const getProductById = (req, res) => {
    const { productId } = req.params;
    const index = products_1.products.findIndex((item) => item.id === parseInt(productId));
    if (index !== -1) {
        res.send({ data: products_1.products[index] });
    }
    else {
        res.status(404).send({});
    }
};
exports.getProductById = getProductById;
const createProduct = (req, res) => {
    const { name, year, color, pantone_value } = req.body;
    const newProduct = {
        id: products_1.products.length + 1,
        name,
        year,
        color,
        pantone_value
    };
    products_1.products.push(newProduct);
    res.send(newProduct);
};
exports.createProduct = createProduct;
const updateProduct = (req, res) => {
    const id = parseInt(req.params.productId);
    const { name, year, color, pantone_value } = req.body;
    const index = products_1.products.findIndex((item) => item.id === id);
    if (index !== -1) {
        products_1.products[index] = {
            id,
            name,
            year,
            color,
            pantone_value,
        };
        res.send({ data: products_1.products[index] });
    }
    else {
        res.status(404).send({});
    }
};
exports.updateProduct = updateProduct;
const partialUpdateProduct = (req, res) => {
    const productId = parseInt(req.params.productId);
    const { id, name, year, color, pantone_value } = req.body;
    const index = products_1.products.findIndex((item) => item.id === productId);
    if (index !== -1) {
        const product = products_1.products[index];
        products_1.products[index] = {
            id: id || product.id,
            name: name || product.name,
            year: year || product.year,
            color: color || product.color,
            pantone_value: pantone_value || product.pantone_value,
        };
        res.send({ data: products_1.products[index] });
    }
    else {
        res.status(404).send({});
    }
};
exports.partialUpdateProduct = partialUpdateProduct;
const updateProductAndNotify = (req, res) => {
    const productId = parseInt(req.params.productId);
    const { client, data } = req.body;
    const { id, name, year, color, pantone_value } = data;
    const index = products_1.products.findIndex((item) => item.id == productId);
    if (index !== -1) {
        const product = products_1.products[index];
        products_1.products[index] = {
            id: id || product.id,
            name: name || product.name,
            year: year || product.year,
            color: color || product.color,
            pantone_value: pantone_value || product.pantone_value,
        };
        res.send({ data: products_1.products[index], message: `Email sent to ${client}` });
    }
    else {
        res.status(404).send({});
    }
};
exports.updateProductAndNotify = updateProductAndNotify;
const deleteProductById = (req, res) => {
    const productId = parseInt(req.params.productId);
    const index = products_1.products.findIndex((item) => item.id === productId);
    if (index !== -1) {
        products_1.products.splice(index, 1);
        res.send({});
    }
    else {
        res.status(404).send({});
    }
};
exports.deleteProductById = deleteProductById;
