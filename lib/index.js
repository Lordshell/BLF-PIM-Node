/**
  * @module AKKBLFPIM23Lib
  *
  * The Akeneo API brought to you!
  */

'use strict';

const Configuration = require('./configuration');
const Environments = require('./Environments');
const ProductController = require('./Controllers/ProductController');
const AttributeController = require('./Controllers/AttributeController');
const AttributeOptionController = require('./Controllers/AttributeOptionController');
const AttributeGroupsController = require('./Controllers/AttributeGroupsController');
const CategoryController = require('./Controllers/CategoryController');
const ChannelController = require('./Controllers/ChannelController');
const CurrencyController = require('./Controllers/CurrencyController');
const FamilyController = require('./Controllers/FamilyController');
const FamilyVariant2XOnlyController = require('./Controllers/FamilyVariant2XOnlyController');
const MeasureFamily2XOnlyController = require('./Controllers/MeasureFamily2XOnlyController');
const MiscController = require('./Controllers/MiscController');
const AuthentificationByRefreshTokenRequest =
  require('./Models/AuthentificationByRefreshTokenRequest');
const AuthentificationByPasswordRequest = require('./Models/AuthentificationByPasswordRequest');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of AKKBLFPIM23Lib
    Configuration,
    Environments,
    // controllers of AKKBLFPIM23Lib
    ProductController,
    AttributeController,
    AttributeOptionController,
    AttributeGroupsController,
    CategoryController,
    ChannelController,
    CurrencyController,
    FamilyController,
    FamilyVariant2XOnlyController,
    MeasureFamily2XOnlyController,
    MiscController,
    // models of AKKBLFPIM23Lib
    AuthentificationByRefreshTokenRequest,
    AuthentificationByPasswordRequest,
    // exceptions of AKKBLFPIM23Lib
    APIException,
};

module.exports = initializer;
