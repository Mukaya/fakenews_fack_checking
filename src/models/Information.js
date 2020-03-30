"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var InformationSchema = new mongoose_1["default"].Schema({
    source: {
        type: String
    },
    titre: {
        type: String,
        unique: true,
        required: true
    },
    contentu: {
        type: String,
        unique: true,
        required: false
    },
    photo: {
        type: String,
        required: false
    },
    veracite: {
        type: String,
        "enum": ['vraie', 'fausse', 'draft'],
        "default": 'draft',
        required: true
    },
    vraieInformation: {
        type: String,
        required: false
    },
    paysOrigin: {
        type: String,
        required: false
    }
});
var Information = mongoose_1["default"].model('Information', InformationSchema);
exports.Information = Information;
