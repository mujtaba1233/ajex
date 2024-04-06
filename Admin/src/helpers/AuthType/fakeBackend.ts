// import axios from "axios";
// import MockAdapter from "axios-mock-adapter";

// import * as url from "../url_helper"

// import accessToken from "../jwt-token-access/accessToken";

// import { transactionList, clientInvoiceList,paymentSummery,usersList,productList,payments} from "../../Common/data";



// let users = [
//   {
//     uid: 1,
//     username: "admin",
//     role: "admin",
//     password: "123456",
//     email: "admin@themesbrand.com",
//   },
// ];

// const fakeBackend = () => {
//   // This sets the mock adapter on the default instance
//   const mock = new MockAdapter(axios, { onNoMatch: "passthrough" });
//   mock.onPost("/post-jwt-register").reply((config: any) => {
//     const user = JSON.parse(config["data"]);
//     users.push(user);

//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve([200, user]);
//       });
//     });
//   });

//   mock.onPost(url.POST_FAKE_LOGIN).reply(config => {
//     const user = JSON.parse(config["data"]);
//     const validUser = users.filter(
//       usr => usr.email === user.email && usr.password === user.password
//     );
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (validUser["length"] === 1) {
//           resolve([200, validUser[0]]);
//         } else {
//           reject([
//             "Username and password are invalid. Please enter correct username and password",
//           ]);
//         }
//       });
//     });
//   });

//   mock.onPost("/post-jwt-login").reply((config: any) => {
//     const user = JSON.parse(config["data"]);
//     const validUser = users.filter(
//       usr => usr.email === user.email && usr.password === user.password
//     );

//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (validUser["length"] === 1) {
//           // You have to generate AccessToken by jwt. but this is fakeBackend so, right now its dummy
//           const token = accessToken;

//           // JWT AccessToken
//           const tokenObj = { accessToken: token }; // Token Obj
//           const validUserObj = { ...validUser[0], ...tokenObj }; // validUser Obj

//           resolve([200, validUserObj]);
//         } else {
//           reject([
//             400,
//             "Username and password are invalid. Please enter correct username and password",
//           ]);
//         }
//       });
//     });
//   });

//   mock.onPost("/post-jwt-profile").reply((config: any) => {
//     const user = JSON.parse(config["data"]);
//     const validUser = users.filter(usr => usr.uid === user.idx);

//     const one = config.headers;
//     let finalToken = one?.Authorization;

//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         // Verify Jwt token from header.Authorization
//         if (finalToken === accessToken) {
//           if (validUser["length"] === 1) {
//             let objIndex;

//             //Find index of specific object using findIndex method.
//             objIndex = users.findIndex(obj => obj.uid === user.idx);

//             //Update object's name property.
//             users[objIndex].username = user.username;

//             // Assign a value to locastorage
//             sessionStorage.removeItem("authUser");
//             sessionStorage.setItem("authUser", JSON.stringify(users[objIndex]));

//             resolve([200, "Profile Updated Successfully"]);
//           } else {
//             reject([400, "Something wrong for edit profile"]);
//           }
//         } else {
//           reject([400, "Invalid Token !!"]);
//         }
//       });
//     });
//   });

//   mock.onPost(url.POST_EDIT_PROFILE).reply((config: any) => {

//     const user = JSON.parse(config["data"]);

//     const validUser = users.filter(usr => usr.uid === user.idx);
//     return new Promise((resolve, reject) => {

//       setTimeout(() => {
//         if (validUser["length"] === 1) {
//           let objIndex;

//           //Find index of specific object using findIndex method.
//           objIndex = users.findIndex(obj => obj.uid === user.idx);

//           //Update object's name property.
//           users[objIndex].username = user.username;

//           // Assign a value to locastorage
//           sessionStorage.removeItem("authUser");
//           sessionStorage.setItem("authUser", JSON.stringify(users[objIndex]));

//           resolve([200, user]);
//         } else {
//           reject([400, "Something wrong for edit profile"]);
//         }
//       });
//     });
//   });

//   mock.onPost("/jwt-forget-pwd").reply((config: any) => {
//     // User needs to check that user is eXist or not and send mail for Reset New password

//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve([200, "Check you mail and reset your password."]);
//       });
//     });
//   });

//   mock.onPost("/social-login").reply((config: any) => {
//     const user = JSON.parse(config["data"]);

//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (user && user.token) {
//           // You have to generate AccessToken by jwt. but this is fakeBackend so, right now its dummy
//           const token = accessToken;

//           // JWT AccessToken
//           const tokenObj = { accessToken: token }; // Token Obj
//           const validUserObj = { ...user[0], ...tokenObj }; // validUser Obj

//           resolve([200, validUserObj]);
//         } else {
//           reject([
//             400,
//             "Username and password are invalid. Please enter correct username and password",
//           ]);
//         }
//       });
//     });
//   });



//   // Transaction

//   mock.onGet(url.GET_TRANSACTIONS).reply(() => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {  
//         if (transactionList) {
//           // Passing fake JSON data as response
//           resolve([200, transactionList]);
//         } else {
//           reject([400, "Cannot get transaction Data"]);
//         }
//       });
//     });
//   });

//   // mock.onGet(url.GET_CLIENT_INVOICES).reply(() => {
//   //   return new Promise((resolve, reject) => {
//   //     setTimeout(() => {
//   //       if (clientInvoiceList) {
//   //         // Passing fake JSON data as response
//   //         resolve([200, clientInvoiceList]);
//   //       } else {
//   //         reject([400, "Cannot get Invoices Data"]);
//   //       }
//   //     });
//   //   });
//   // });

//   mock.onPut(url.EDIT_CLIENT_INVOICES).reply((event: any) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (event && event.data) {
//           // Passing fake JSON data as response
//           resolve([200, event.data]);
//         } else {
//           reject([400, "Cannot edit invoice Data"]);
//         }
//       });
//     });
//   });
//   mock.onPatch(url.EDIT_CLIENT_INVOICES).reply((event: any) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (event && event.data) {
//           // Passing fake JSON data as response
//           resolve([200, event.data]);
//         } else {
//           reject([400, "Cannot edit invoice Data"]);
//         }
//       });
//     });
//   });

//   mock.onDelete(url.DELETE_CLIENT_INVOICES).reply((config: any) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (config && config.headers) {
//           resolve([200, config.headers.data]);
//         } else {
//           reject([400, "Cannot delete client invoices"]);
//         }
//       });
//     });
//   });

//   mock.onGet(url.GET_PAYMENT_SUMMARY).reply(() => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (paymentSummery) {
//           // Passing fake JSON data as response
//           resolve([200, paymentSummery]);
//         } else {
//           reject([400, "Cannot get Payment Summary Data"]);
//         }
//       });
//     });
//   });

//   mock.onPut(url.EDIT_PAYMENT_SUMMARY).reply((event: any) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (event && event.data) {
//           // Passing fake JSON data as response
//           resolve([200, event.data]);
//         } else {
//           reject([400, "Cannot edit payment summary Data"]);
//         }
//       });
//     });
//   });
//   mock.onPatch(url.EDIT_PAYMENT_SUMMARY).reply((event: any) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (event && event.data) {
//           // Passing fake JSON data as response
//           resolve([200, event.data]);
//         } else {
//           reject([400, "Cannot edit payment summary Data"]);
//         }
//       });
//     });
//   });

//   mock.onDelete(url.DELETE_PAYMENT_SUMMARY).reply((config: any) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (config && config.headers) {
//           resolve([200, config.headers.data]);
//         } else {
//           reject([400, "Cannot delete Payment Summary Data"]);
//         }
//       });
//     });
//   });

//   mock.onGet(url.GET_USERS).reply(() => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (usersList) {
//           // Passing fake JSON data as response
//           resolve([200, usersList]);
//         } else {
//           reject([400, "Cannot get Users Data"]);
//         }
//       });
//     });
//   });

//   mock.onPost(url.ADD_USERS).reply((event: any) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (event && event.data) {
//           // Passing fake JSON data as response
//           resolve([200, event.data]);
//         } else {
//           reject([400, "Cannot add user Data"]);
//         }
//       });
//     });
//   });

//   mock.onPut(url.EDIT_USERS).reply((event: any) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (event && event.data) {
//           // Passing fake JSON data as response
//           resolve([200, event.data]);
//         } else {
//           reject([400, "Cannot edit user data"]);
//         }
//       });
//     });
//   });
//   mock.onPatch(url.EDIT_USERS).reply((event: any) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (event && event.data) {
//           // Passing fake JSON data as response
//           resolve([200, event.data]);
//         } else {
//           reject([400, "Cannot edit user data"]);
//         }
//       });
//     });
//   });

//   mock.onDelete(url.DELETE_USERS).reply((config: any) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (config && config.headers) {
//           resolve([200, config.headers.data]);
//         } else {
//           reject([400, "Cannot delete users Data"]);
//         }
//       });
//     });
//   });

//   mock.onGet(url.GET_PRODUCT_LIST).reply(() => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (productList) {
//           // Passing fake JSON data as response
//           resolve([200, productList]);
//         } else {
//           reject([400, "Cannot get Users Data"]);
//         }
//       });
//     });
//   });

//   mock.onPut(url.EDIT_PRODUCT_LIST).reply((event: any) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (event && event.data) {
//           // Passing fake JSON data as response
//           resolve([200, event.data]);
//         } else {
//           reject([400, "Cannot edit product data"]);
//         }
//       });
//     });
//   });
//   mock.onPatch(url.EDIT_PRODUCT_LIST).reply((event: any) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (event && event.data) {
//           // Passing fake JSON data as response
//           resolve([200, event.data]);
//         } else {
//           reject([400, "Cannot edit product data"]);
//         }
//       });
//     });
//   });

//   mock.onDelete(url.DELETE_PRODUCT_LIST).reply((config: any) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (config && config.headers) {
//           resolve([200, config.headers.data]);
//         } else {
//           reject([400, "Cannot delete Product Data"]);
//         }
//       });
//     });
//   });

//   mock.onGet(url.GET_PAYMENTS).reply(() => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (payments) {
//           // Passing fake JSON data as response
//           resolve([200, payments]);
//         } else {
//           reject([400, "Cannot get payments Data"]);
//         }
//       });
//     });
//   });

//   mock.onPost(url.ADD_PAYMENTS).reply((event: any) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (event && event.data) {
//           // Passing fake JSON data as response
//           resolve([200, event.data]);
//         } else {
//           reject([400, "Cannot add payment data"]);
//         }
//       });
//     });
//   });

//   mock.onPut(url.EDIT_PAYMENTS).reply((event: any) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (event && event.data) {
//           // Passing fake JSON data as response
//           resolve([200, event.data]);
//         } else {
//           reject([400, "Cannot edit payment data"]);
//         }
//       });
//     });
//   });
//   mock.onPatch(url.EDIT_PAYMENTS).reply((event: any) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (event && event.data) {
//           // Passing fake JSON data as response
//           resolve([200, event.data]);
//         } else {
//           reject([400, "Cannot edit payment data"]);
//         }
//       });
//     });
//   });

//   mock.onDelete(url.DELETE_PAYMENTS).reply((config: any) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (config && config.headers) {
//           resolve([200, config.headers.data]);
//         } else {
//           reject([400, "Cannot delete payments Data"]);
//         }
//       });
//     });
//   });

// };


// export default fakeBackend;
