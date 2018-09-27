# API REST Specification

## Schemas

### Errors

#### Error : `Object`

| Property  | Type     | Required | Description                                   |
| --------- | -------- | -------- | --------------------------------------------- |
| `status`  | `Number` | ✔        | One of a server-defined set of error codes.   |
| `message` | `String` | ✔        | A human-readable representation of the error. |

### References

#### ObjectId : `Hexadecimal`

#### TypeRef : `Object`

| Property       | Type       | Required | Description                               |
| -------------- | ---------- | -------- | ----------------------------------------- |
| `id`           | `ObjectId` | ✔        | An unique identification for the type.    |
| `initials`     | `String`   | ✔        | The representative initials.              |
| `descriptions` | `String`   | ✔        | A human-readable description of the type. |

#### Employee : `Object`

| Property    | Type       | Required | Description                                |
| ----------- | ---------- | -------- | ------------------------------------------ |
| `id`        | `ObjectId` | ✔        | An unique identification for the employee. |
| `firstname` | `String`   | ✔        | The surname of the employee.               |
| `lastname`  | `String`   | ✔        | The lastname of the employee.              |
| `email`     | `String`   | ✔        | The e-mail address of the employee.        |
| `type`      | `TypeRef`  |          | The type of employee its refer.            |

### Queries

#### Likeable : `Object`

| Property | Type     | Required | Description                            |
| -------- | -------- | -------- | -------------------------------------- |
| `$regex` | `String` | ✔        | A regular expression pattern to match. |

#### Numerable : `Object`

| Property | Type     | Required | Description                     |
| -------- | -------- | -------- | ------------------------------- |
| `$gt`    | `Number` |          | An upper bound number.          |
| `$gte`   | `Number` |          | An upper bound or ecual number. |
| `$lt`    | `Number` |          | A lower bound number.           |
| `$lte`   | `Number` |          | A lower bound or equal number.  |

#### QueryNumber : `(Number | Numerable)`

#### QueryString : `(String | Likeable)`

## Supported Methods

Method  | Description                                                                                                                | Is Idempotent
------- | -------------------------------------------------------------------------------------------------------------------------- | -------------
GET     | Return the current value of an object                                                                                      | True
PUT     | Replace an object, or create a named object, when applicable                                                               | True
DELETE  | Delete an object                                                                                                           | True
POST    | Create a new object based on the data provided, or submit a command                                                        | False
HEAD    | Return metadata of an object for a GET response. Resources that support the GET method MAY support the HEAD method as well | True
PATCH   | Apply a partial update to an object                                                                                        | False

## Endpoints

- `/`

  - `GET : Empoyee[]`

    Returns all employees that satisfy the query filter

    **Query Parameters**

    | Property    | Type          | Required | Description                         |
    | ----------- | ------------- | -------- | ----------------------------------- |
    | `firstname` | `QueryString` |          | The surname of the employee.        |
    | `lastname`  | `QueryString` |          | The lastname of the employee.       |
    | `email`     | `QueryString` |          | The e-mail address of the employee. |
    | `type`      | `ObjectID`    |          | The reference of employee's type.   |

  - `POST : Employee`

    **Body**

    | Property    | Type       | Required | Description                         |
    | ----------- | ---------- | -------- | ----------------------------------- |
    | `firstname` | `String`   | ✔        | The surname of the employee.        |
    | `lastname`  | `String`   | ✔        | The lastname of the employee.       |
    | `email`     | `String`   | ✔        | The e-mail address of the employee. |
    | `type`      | `ObjectID` |          | The reference of employee's type.   |

- `/{id}`

  - `GET : Employee`

  - `PUT : Employee`

    **Body**

    | Property    | Type       | Required | Description                         |
    | ----------- | ---------- | -------- | ----------------------------------- |
    | `firstname` | `String`   | ✔        | The surname of the employee.        |
    | `lastname`  | `String`   | ✔        | The lastname of the employee.       |
    | `email`     | `String`   | ✔        | The e-mail address of the employee. |
    | `type`      | `ObjectID` |          | The reference of employee's type.   |

  - `PATCH : Employee`

    **Body**

    | Property    | Type       | Required | Description                         |
    | ----------- | ---------- | -------- | ----------------------------------- |
    | `firstname` | `String`   |          | The surname of the employee.        |
    | `lastname`  | `String`   |          | The lastname of the employee.       |
    | `email`     | `String`   |          | The e-mail address of the employee. |
    | `type`      | `ObjectID` |          | The reference of employee's type.   |

  - `DELETE : Employee`

- `/types`

  - `GET : TypeRef[]`

    Returns all employee types that satisfy the query filter

    **Query Parameters**

    | Property      | Type          | Required | Description                      |
    | ------------- | ------------- | -------- | -------------------------------- |
    | `initials`    | `QueryString` |          | The initials of the type.        |
    | `description` | `QueryString` |          | The description of the employee. |

  - `POST : TypeRef`

    **Body**

    | Property       | Type       | Required | Description                               |
    | -------------- | ---------- | -------- | ----------------------------------------- |
    | `initials`     | `String`   | ✔        | The representative initials.              |
    | `descriptions` | `String`   | ✔        | A human-readable description of the type. |

- `/types/{id}`

  - `GET : TypeRef`

  - `PUT : TypeRef`

    **Body**

    | Property       | Type       | Required | Description                               |
    | -------------- | ---------- | -------- | ----------------------------------------- |
    | `initials`     | `String`   | ✔        | The representative initials.              |
    | `descriptions` | `String`   | ✔        | A human-readable description of the type. |

  - `PATCH : TypeRef`

    **Body**

    | Property       | Type       | Required | Description                               |
    | -------------- | ---------- | -------- | ----------------------------------------- |
    | `initials`     | `String`   |          | The representative initials.              |
    | `descriptions` | `String`   |          | A human-readable description of the type. |

  - `DELETE : TypeRef`

- `/login`

  - `POST : Employee`

    Check if a password is valid for an email, and retrieve the correct employee

    **Body**

    | Property   | Type       | Required | Description                         |
    | ---------- | ---------- | -------- | ----------------------------------- |
    | `emial`    | `String`   | ✔        | The email address of the employee. |
    | `password` | `String`   | ✔        | The password of the employee.      |
