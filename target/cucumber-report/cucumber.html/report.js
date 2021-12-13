$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/WomenCategoryPageTest.feature");
formatter.feature({
  "line": 1,
  "name": "Women Category Page",
  "description": "",
  "id": "women-category-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6339220000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on Homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I click on \u0027Women\u0027 tab",
  "keyword": "And "
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnWomenTab()"
});
formatter.result({
  "duration": 3494335100,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Verify user should navigagte to women cagtagory page successfully",
  "description": "",
  "id": "women-category-page;verify-user-should-navigagte-to-women-cagtagory-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on \u0027Women\u0027 page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "WomenCategoryPageTest.iAmOnWomenPageSuccessfully()"
});
formatter.result({
  "duration": 22320700,
  "status": "passed"
});
formatter.after({
  "duration": 608907200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Verify user should add product to the cart successfully",
  "description": "",
  "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I click on product \"\u003cProduct\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I change quantity \"\u003cQuantity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select size \"\u003cSize\u003e\" from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on colour \"\u003cColour\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on \u0027Add to Cart\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Product added to cart successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully;",
  "rows": [
    {
      "cells": [
        "Product",
        "Quantity",
        "Size",
        "Colour"
      ],
      "line": 19,
      "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully;;1"
    },
    {
      "cells": [
        "Blouse",
        "2",
        "M",
        "White"
      ],
      "line": 20,
      "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully;;2"
    },
    {
      "cells": [
        "Printed Dress",
        "3",
        "L",
        "Orange"
      ],
      "line": 21,
      "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8551518100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on Homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I click on \u0027Women\u0027 tab",
  "keyword": "And "
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnWomenTab()"
});
formatter.result({
  "duration": 3358453200,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify user should add product to the cart successfully",
  "description": "",
  "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I click on product \"Blouse\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I change quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select size \"M\" from dropdown",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on colour \"White\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on \u0027Add to Cart\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Product added to cart successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Blouse",
      "offset": 20
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnProduct(String)"
});
formatter.result({
  "duration": 1687176600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageTest.iChangeQuantity(String)"
});
formatter.result({
  "duration": 45176700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 15
    }
  ],
  "location": "WomenCategoryPageTest.iSelectSizeFromDropdown(String)"
});
formatter.result({
  "duration": 62291600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "White",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnColour(String)"
});
formatter.result({
  "duration": 51215300,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 64050800,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.productAddedToCartSuccessfully()"
});
formatter.result({
  "duration": 866523600,
  "status": "passed"
});
formatter.after({
  "duration": 617126100,
  "status": "passed"
});
formatter.before({
  "duration": 4495124200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on Homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I click on \u0027Women\u0027 tab",
  "keyword": "And "
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnWomenTab()"
});
formatter.result({
  "duration": 1827449800,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify user should add product to the cart successfully",
  "description": "",
  "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I click on product \"Printed Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I change quantity \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select size \"L\" from dropdown",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on colour \"Orange\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on \u0027Add to Cart\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Product added to cart successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Dress",
      "offset": 20
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnProduct(String)"
});
formatter.result({
  "duration": 2207953300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageTest.iChangeQuantity(String)"
});
formatter.result({
  "duration": 44218000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L",
      "offset": 15
    }
  ],
  "location": "WomenCategoryPageTest.iSelectSizeFromDropdown(String)"
});
formatter.result({
  "duration": 64993000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orange",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnColour(String)"
});
formatter.result({
  "duration": 45512300,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 51641700,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.productAddedToCartSuccessfully()"
});
formatter.result({
  "duration": 752557500,
  "status": "passed"
});
formatter.after({
  "duration": 598420200,
  "status": "passed"
});
});