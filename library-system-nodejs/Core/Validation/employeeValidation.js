const { body, param, query } = require("express-validator");
exports.validateEmployee = [
	body("firstName").isString().withMessage("firstName must be a String"),
	body("lastName").isString().withMessage("lastName must be a String"),
	body("email").isEmail().withMessage("Invalid Email"),
	body("password")
		.isLength({ min: 5 })
		.withMessage("password should be min 5 letters"),
	body("birthDate").isDate().withMessage("Invalid Date"),
	body("hireDate").isDate().withMessage("Invalid Date"),
	body("salary").isInt().withMessage("salary must be a numbers only"),
];

exports.validateEmployeeOptional = [
	body("id").isNumeric().withMessage(" ID must be an Integer"),
	body("firstName")
		.isString()
		.optional()
		.withMessage("firstName must be a String"),
	body("lastName")
		.isString()
		.optional()
		.withMessage("lastName must be a String"),
	body("email").isEmail().optional().withMessage("Invalid Email"),
	body("password")
		.optional()
		.isLength({ min: 5 })
		.withMessage("password should be min 5 letters"),
	body("birthDate").isDate().optional().withMessage("Invalid Date"),
	body("hireDate").isDate().optional().withMessage("Invalid Date"),
	body("salary")
		.isInt()
		.not()
		.optional()
		.withMessage("salary must be a numbers only"),
];

exports.paramVal = [param("id").isInt().withMessage(" ID must be an Integer")];

exports.search = [
	query("firstName").isString().withMessage("firstname is required"),
	query("lastName").isString().withMessage("lastName is required"),
];
