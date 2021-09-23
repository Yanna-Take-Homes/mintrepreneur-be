## Server is live on:

https://mintrepreneur-be.herokuapp.com/api/

---

# PRODUCT ROUTES

## **GET PRODUCT**

_Method Url:_ `/api/products`

_HTTP method:_ **[GET]**

#### Response

##### 200 (OK)

```
{ 
  "allProducts":
    [
      {
        "id":1,
        "title":"Mintrepreneur",
        "created_at":"2021-09-22 14:44:16",
        "updated_at":"2021-09-22 14:44:16"
      }
    ]
 }
```

---

## **ADD A PRODUCT**

_Method Url:_ `/api/products`

_HTTP method:_ **[POST]**

#### Body

| name          | type    | required |
| ------------- | ------- | -------- |
| `title`       | String  | Yes      |


_example:_

```
{
    "title": "How to train for 2 marathons",
}
```

#### Response

##### 201 (Created)

```
{
    "message": "post created!",
    "allProducts": [
      {
          "id": 1,
          "title": "Mintrepreneur",
          "created_at": "2019-03-12 17:54:29",
          "updated_at": "2019-03-12 17:54:29",
      },
      {
          "id": 2,
          "title": "How to train for 2 marathons",
          "created_at": "2019-03-12 17:54:29",
          "updated_at": "2019-03-12 17:54:29",
      },
    ]
}
```

---

# PRODUCT REVIEWS ROUTES

## **GET REVIEWS**

_Method Url:_ `/api/product-reviews`

_HTTP method:_ **[GET]**

#### Response

##### 200 (OK)

```
{
   "allReviews": [
     {
       "id":1,
       "rating":5,
       "product_id":1,
       "description":"the bomb.com, awesomeness",
       "created_at":"2021-09-22 14:44:16",
       "updated_at":"2021-09-22 14:44:16"
     },
     {
       "id":2,
       "rating":1,
       "product_id":1,
       "description":"fluffier than a rabbit. 5 thumbs down",
       "created_at":"2021-09-22 14:44:16",
       "updated_at":"2021-09-22 14:44:16"
     },
     {
       "id":3,
       "rating":3,
       "product_id":1,
       "description":"I like my hot pockets lukewarm, not my books",
       "created_at":"2021-09-22 14:44:16",
       "updated_at":"2021-09-22 14:44:16"
     },
 ]
}
```

---

## **ADD A REVIEW**

_Method Url:_ `/api/product-reviews`

_HTTP method:_ **[POST]**

#### Body

| name          | type    | required |
| ------------- | ------- | -------- |
| `product_id`  | Integer | Yes      |
| `rating`      | Integer | Yes      |
| `description` | Text    | Yes      |


_example:_

```
{
    "product_id": 1,
    "rating": 5,
    "description": "It was aiiiiiight" 
}
```

#### Response

##### 201 (Created)

```
{
   "message": "review created!",
   "allReviews": [
     {
       "id":1,
       "rating":5,
       "product_id":1,
       "description":"the bomb.com, awesomeness",
       "created_at":"2021-09-22 14:44:16",
       "updated_at":"2021-09-22 14:44:16"
     },
     {
       "id":2,
       "rating":1,
       "product_id":1,
       "description":"fluffier than a rabbit. 5 thumbs down",
       "created_at":"2021-09-22 14:44:16",
       "updated_at":"2021-09-22 14:44:16"
     },
     {
       "id":3,
       "rating":3,
       "product_id":1,
       "description":"I like my hot pockets lukewarm, not my books",
       "created_at":"2021-09-22 14:44:16",
       "updated_at":"2021-09-22 14:44:16"
     },
     {
      "product_id": 1,
      "rating": 5,
      "description": "It was aiiiiiight" 
      "created_at":"2021-09-22 14:44:16",
      "updated_at":"2021-09-22 14:44:16"
     }
   ]
}
```
