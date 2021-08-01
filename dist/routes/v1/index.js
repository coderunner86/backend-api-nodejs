"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const usersController = __importStar(require("../../controllers/v1/users-controller"));
const productsController = __importStar(require("../../controllers/v1/products-controller"));
const createRoutesV1 = (app) => {
    app.get('/api/v1/users', usersController.getUsers);
    app.get('/api/v1/users/:userId', usersController.getUserById);
    app.get('/api/v1/products/', productsController.getProducts);
    app.get('/api/v1/products/:productId', productsController.getProductById);
    app.post('/api/v1/products/:newProduct', productsController.createProduct);
    app.put('/api/v1/products/:productId', productsController.updateProduct);
    app.patch('/api/v1/products/:productId', productsController.partialUpdateProduct);
    app.delete('/api/v1/products/:productId', productsController.deleteProductById);
};
exports.default = createRoutesV1;
