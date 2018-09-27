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

## Endpoints

- `/`

  - `GET`

    Returns all employees that satisfy the query filter

    **Query Parameters**

    | Property    | Type          | Required | Description                         |
    | ----------- | ------------- | -------- | ----------------------------------- |
    | `firstname` | `QueryString` |          | The surname of the employee.        |
    | `lastname`  | `QueryString` |          | The lastname of the employee.       |
    | `email`     | `QueryString` |          | The e-mail address of the employee. |
    | `type`      | `ObjectID`    |          | The reference of employee's type.   |

  - `POST`

    Create new Employee

    **Body**

    | Property    | Type       | Required | Description                         |
    | ----------- | ---------- | -------- | ----------------------------------- |
    | `firstname` | `String`   | ✔        | The surname of the employee.        |
    | `lastname`  | `String`   | ✔        | The lastname of the employee.       |
    | `email`     | `String`   | ✔        | The e-mail address of the employee. |
    | `type`      | `ObjectID` |          | The reference of employee's type.   |
