import { getEmployByCode } from "../employees/employees.js";
import { getOfficesByCode } from "../offices/offices.js";
import { getPaymentByClientCode } from "../payments/payments.js";
import { getRequestByCodeClient } from "../requests/requests.js";
import { getAllLateRequest } from "../requests/requests.js";

export default {getAllLateRequest, getEmployByCode, getOfficesByCode, getPaymentByClientCode, getRequestByCodeClient}