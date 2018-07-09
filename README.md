# Getting started

The Akeneo API brought to you!

## How to Build

The generated SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).
The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)
> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:

* `node --version`
* `npm -version`

![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=AKK-BLF-PIM%202.3-Node)

Now use npm to resolve all dependencies by running the following command in the root directory (of the SDK folder):

```bash
npm install
```

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency1&workspaceFolder=AKK-BLF-PIM%202.3-Node)

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency2)

This will install all dependencies in the `node_modules` folder.

Once dependencies are resolved, you will need to move the folder `AKKBLFPIM23Lib ` in to your `node_modules` folder.

## How to Use

The following section explains how to use the library in a new project.

### 1. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

Click on `File` and select `Open Folder`.

![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![Open Project](https://apidocs.io/illustration/nodejs?step=openProject&workspaceFolder=AKK-BLF-PIM%202.3-Node)

### 2. Creating a Test File

Now right click on the folder name and select the `New File` option to create a new test file. Save it as `index.js` Now import the generated NodeJS library using the following lines of code:

```js
var lib = require('lib');
```

Save changes.

![Create new file](https://apidocs.io/illustration/nodejs?step=createNewFile&workspaceFolder=AKK-BLF-PIM%202.3-Node)

![Save new file](https://apidocs.io/illustration/nodejs?step=saveNewFile&workspaceFolder=AKK-BLF-PIM%202.3-Node)

### 3. Running The Test File

To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:

```
node index.js
```

![Run file](https://apidocs.io/illustration/nodejs?step=runProject&workspaceFolder=AKK-BLF-PIM%202.3-Node)


## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run.
Tests can be run in a number of ways:

### Method 1 (Run all tests)

1. Navigate to the root directory of the SDK folder from command prompt.
2. Type `mocha --recursive` to run all the tests.

### Method 2 (Run all tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha *` to run all the tests.

### Method 3 (Run specific controller's tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha  AKK-BLF-PIM 2.3Controller`  to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TEST_TIMEOUT` parameter's value in `TestBootstrap.js`.

![Run Tests](https://apidocs.io/illustration/nodejs?step=runTests&controllerName=AKK-BLF-PIM%202.3Controller)

## Initialization

### Authentication
In order to setup authentication in the API client, you need the following information.

| Parameter | Description |
|-----------|-------------|
| oAuthAccessToken | OAuth 2.0 Access Token |



API client can be initialized as following:

```JavaScript
const lib = require('lib');

// Configuration parameters and credentials
lib.Configuration.oAuthAccessToken = "oAuthAccessToken"; // OAuth 2.0 Access Token

```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [ProductController](#product_controller)
* [AttributeController](#attribute_controller)
* [AttributeOptionController](#attribute_option_controller)
* [AttributeGroupsController](#attribute_groups_controller)
* [CategoryController](#category_controller)
* [ChannelController](#channel_controller)
* [CurrencyController](#currency_controller)
* [FamilyController](#family_controller)
* [FamilyVariant2XOnlyController](#family_variant2_x_only_controller)
* [MeasureFamily2XOnlyController](#measure_family2_x_only_controller)
* [MiscController](#misc_controller)

## <a name="product_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ProductController") ProductController

### Get singleton instance

The singleton instance of the ``` ProductController ``` class can be accessed from the API Client.

```javascript
var controller = lib.ProductController;
```

### <a name="get_product"></a>![Method: ](https://apidocs.io/img/method.png ".ProductController.getProduct") getProduct

> Assuming that the given identifier is the identifier of an existing product


```javascript
function getProduct(callback)
```

#### Example Usage

```javascript


    controller.getProduct(function(error, response, context) {

    
    });
```



### <a name="get_products"></a>![Method: ](https://apidocs.io/img/method.png ".ProductController.getProducts") getProducts

> TODO: Add a method description


```javascript
function getProducts(contentType, cookie, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| cookie |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';
    var cookie = '';

    controller.getProducts(contentType, cookie, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="attribute_controller"></a>![Class: ](https://apidocs.io/img/class.png ".AttributeController") AttributeController

### Get singleton instance

The singleton instance of the ``` AttributeController ``` class can be accessed from the API Client.

```javascript
var controller = lib.AttributeController;
```

### <a name="get_attribute"></a>![Method: ](https://apidocs.io/img/method.png ".AttributeController.getAttribute") getAttribute

> Assuming that the given code is the code of an existing attribute


```javascript
function getAttribute(callback)
```

#### Example Usage

```javascript


    controller.getAttribute(function(error, response, context) {

    
    });
```



### <a name="get_attributes"></a>![Method: ](https://apidocs.io/img/method.png ".AttributeController.getAttributes") getAttributes

> TODO: Add Description


```javascript
function getAttributes(callback)
```

#### Example Usage

```javascript


    controller.getAttributes(function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="attribute_option_controller"></a>![Class: ](https://apidocs.io/img/class.png ".AttributeOptionController") AttributeOptionController

### Get singleton instance

The singleton instance of the ``` AttributeOptionController ``` class can be accessed from the API Client.

```javascript
var controller = lib.AttributeOptionController;
```

### <a name="get_attribute_option"></a>![Method: ](https://apidocs.io/img/method.png ".AttributeOptionController.getAttributeOption") getAttributeOption

> Assuming that the given codes are respectively the code of an existing attribute and an existing option of this attribute


```javascript
function getAttributeOption(callback)
```

#### Example Usage

```javascript


    controller.getAttributeOption(function(error, response, context) {

    
    });
```



### <a name="get_attribute_options"></a>![Method: ](https://apidocs.io/img/method.png ".AttributeOptionController.getAttributeOptions") getAttributeOptions

> TODO: Add Description


```javascript
function getAttributeOptions(callback)
```

#### Example Usage

```javascript


    controller.getAttributeOptions(function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="attribute_groups_controller"></a>![Class: ](https://apidocs.io/img/class.png ".AttributeGroupsController") AttributeGroupsController

### Get singleton instance

The singleton instance of the ``` AttributeGroupsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.AttributeGroupsController;
```

### <a name="get_attribute_group2_x_only"></a>![Method: ](https://apidocs.io/img/method.png ".AttributeGroupsController.getAttributeGroup2XOnly") getAttributeGroup2XOnly

> Assuming that the given code is the code of an existing attribute group


```javascript
function getAttributeGroup2XOnly(callback)
```

#### Example Usage

```javascript


    controller.getAttributeGroup2XOnly(function(error, response, context) {

    
    });
```



### <a name="get_attribute_groups2_x_only"></a>![Method: ](https://apidocs.io/img/method.png ".AttributeGroupsController.getAttributeGroups2XOnly") getAttributeGroups2XOnly

> TODO: Add Description


```javascript
function getAttributeGroups2XOnly(callback)
```

#### Example Usage

```javascript


    controller.getAttributeGroups2XOnly(function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="category_controller"></a>![Class: ](https://apidocs.io/img/class.png ".CategoryController") CategoryController

### Get singleton instance

The singleton instance of the ``` CategoryController ``` class can be accessed from the API Client.

```javascript
var controller = lib.CategoryController;
```

### <a name="get_category"></a>![Method: ](https://apidocs.io/img/method.png ".CategoryController.getCategory") getCategory

> Assuming that the given code is the code of an existing category


```javascript
function getCategory(callback)
```

#### Example Usage

```javascript


    controller.getCategory(function(error, response, context) {

    
    });
```



### <a name="get_categories"></a>![Method: ](https://apidocs.io/img/method.png ".CategoryController.getCategories") getCategories

> TODO: Add Description


```javascript
function getCategories(callback)
```

#### Example Usage

```javascript


    controller.getCategories(function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="channel_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ChannelController") ChannelController

### Get singleton instance

The singleton instance of the ``` ChannelController ``` class can be accessed from the API Client.

```javascript
var controller = lib.ChannelController;
```

### <a name="get_channel"></a>![Method: ](https://apidocs.io/img/method.png ".ChannelController.getChannel") getChannel

> Assuming that the given code is the code of an existing channel


```javascript
function getChannel(callback)
```

#### Example Usage

```javascript


    controller.getChannel(function(error, response, context) {

    
    });
```



### <a name="get_channels"></a>![Method: ](https://apidocs.io/img/method.png ".ChannelController.getChannels") getChannels

> TODO: Add Description


```javascript
function getChannels(callback)
```

#### Example Usage

```javascript


    controller.getChannels(function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="currency_controller"></a>![Class: ](https://apidocs.io/img/class.png ".CurrencyController") CurrencyController

### Get singleton instance

The singleton instance of the ``` CurrencyController ``` class can be accessed from the API Client.

```javascript
var controller = lib.CurrencyController;
```

### <a name="get_currency2_x_only"></a>![Method: ](https://apidocs.io/img/method.png ".CurrencyController.getCurrency2XOnly") getCurrency2XOnly

> Assuming that the given code is the code of an existing currency


```javascript
function getCurrency2XOnly(callback)
```

#### Example Usage

```javascript


    controller.getCurrency2XOnly(function(error, response, context) {

    
    });
```



### <a name="get_currencies2_x_only"></a>![Method: ](https://apidocs.io/img/method.png ".CurrencyController.getCurrencies2XOnly") getCurrencies2XOnly

> TODO: Add Description


```javascript
function getCurrencies2XOnly(callback)
```

#### Example Usage

```javascript


    controller.getCurrencies2XOnly(function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="family_controller"></a>![Class: ](https://apidocs.io/img/class.png ".FamilyController") FamilyController

### Get singleton instance

The singleton instance of the ``` FamilyController ``` class can be accessed from the API Client.

```javascript
var controller = lib.FamilyController;
```

### <a name="get_family"></a>![Method: ](https://apidocs.io/img/method.png ".FamilyController.getFamily") getFamily

> Assuming that the given code is the code of an existing family


```javascript
function getFamily(callback)
```

#### Example Usage

```javascript


    controller.getFamily(function(error, response, context) {

    
    });
```



### <a name="get_families"></a>![Method: ](https://apidocs.io/img/method.png ".FamilyController.getFamilies") getFamilies

> TODO: Add Description


```javascript
function getFamilies(callback)
```

#### Example Usage

```javascript


    controller.getFamilies(function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="family_variant2_x_only_controller"></a>![Class: ](https://apidocs.io/img/class.png ".FamilyVariant2XOnlyController") FamilyVariant2XOnlyController

### Get singleton instance

The singleton instance of the ``` FamilyVariant2XOnlyController ``` class can be accessed from the API Client.

```javascript
var controller = lib.FamilyVariant2XOnlyController;
```

### <a name="get_family_variant2_x_only"></a>![Method: ](https://apidocs.io/img/method.png ".FamilyVariant2XOnlyController.getFamilyVariant2XOnly") getFamilyVariant2XOnly

> Assuming that the given codes are respectively the code of an existing family and an existing family variant


```javascript
function getFamilyVariant2XOnly(callback)
```

#### Example Usage

```javascript


    controller.getFamilyVariant2XOnly(function(error, response, context) {

    
    });
```



### <a name="get_family_variants2_x_only"></a>![Method: ](https://apidocs.io/img/method.png ".FamilyVariant2XOnlyController.getFamilyVariants2XOnly") getFamilyVariants2XOnly

> TODO: Add Description


```javascript
function getFamilyVariants2XOnly(callback)
```

#### Example Usage

```javascript


    controller.getFamilyVariants2XOnly(function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="measure_family2_x_only_controller"></a>![Class: ](https://apidocs.io/img/class.png ".MeasureFamily2XOnlyController") MeasureFamily2XOnlyController

### Get singleton instance

The singleton instance of the ``` MeasureFamily2XOnlyController ``` class can be accessed from the API Client.

```javascript
var controller = lib.MeasureFamily2XOnlyController;
```

### <a name="get_measure_family2_x_only"></a>![Method: ](https://apidocs.io/img/method.png ".MeasureFamily2XOnlyController.getMeasureFamily2XOnly") getMeasureFamily2XOnly

> Assuming that the given code is the code of an existing measure family


```javascript
function getMeasureFamily2XOnly(callback)
```

#### Example Usage

```javascript


    controller.getMeasureFamily2XOnly(function(error, response, context) {

    
    });
```



### <a name="get_measure_families2_x_only"></a>![Method: ](https://apidocs.io/img/method.png ".MeasureFamily2XOnlyController.getMeasureFamilies2XOnly") getMeasureFamilies2XOnly

> TODO: Add Description


```javascript
function getMeasureFamilies2XOnly(callback)
```

#### Example Usage

```javascript


    controller.getMeasureFamilies2XOnly(function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="misc_controller"></a>![Class: ](https://apidocs.io/img/class.png ".MiscController") MiscController

### Get singleton instance

The singleton instance of the ``` MiscController ``` class can be accessed from the API Client.

```javascript
var controller = lib.MiscController;
```

### <a name="create_authentification_by_password"></a>![Method: ](https://apidocs.io/img/method.png ".MiscController.createAuthentificationByPassword") createAuthentificationByPassword

> TODO: Add Description


```javascript
function createAuthentificationByPassword(body, contentType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var body = new AuthentificationByPasswordRequest({"username":"{{username}}","password":"{{password}}","grant_type":"password"});
    var contentType = 'application/json';

    controller.createAuthentificationByPassword(body, contentType, function(error, response, context) {

    
    });
```



### <a name="create_authentification_by_refresh_token"></a>![Method: ](https://apidocs.io/img/method.png ".MiscController.createAuthentificationByRefreshToken") createAuthentificationByRefreshToken

> TODO: Add Description


```javascript
function createAuthentificationByRefreshToken(body, contentType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var body = new AuthentificationByRefreshTokenRequest({"refresh_token":"{{refreshToken}}","grant_type":"refresh_token"});
    var contentType = 'application/json';

    controller.createAuthentificationByRefreshToken(body, contentType, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)



