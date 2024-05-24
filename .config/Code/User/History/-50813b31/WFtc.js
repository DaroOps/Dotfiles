import { getEmployByCode, getAllNameSurnamesAndEmailInCargeOfBossSeven, getCEOInformation, getAllEmployeesNotSalesRepresentative } from "./employees/employees.js";
import { getOfficesByCode, getAllOfficesCodeAndCity, getAllOfficesAndPhonesFromSpain } from "./offices/offices.js";
import { getPaymentByClientCode, getPaymentsByYear, getClientCodesPaymentsByYear, getPaymentsByYearAndPaypal, getAllPaymentStatus } from "./payments/payments.js";
import { getRequestByCodeClient, getAllStatus } from "./requests/requests.js";
import { getSalesRepsWithFruitPurchases, getRequestDetailsByProductCode } from "./request_details/request_details.js";
import { getAllLateRequest, getAllRequestEarlyTwoDays, getRejectRequestsByYear, getRequestDeliveredInJanuary } from "./requests/requests.js";
import { getAllClientsInMadrid, getClientByEmployeeCode, getAllSpainClients, getClientsAndEmployeesNames, getClientsWithEmployeeInfo } from "./clients/clients.js";
import { getProductsWithGammaOrnamentales } from "./products/products.js";

export { getAllLateRequest, getEmployByCode, getOfficesByCode, getPaymentByClientCode, getRequestByCodeClient, getAllClientsInMadrid, getClientByEmployeeCode, getSalesRepsWithFruitPurchases, getAllSpainClients, getAllOfficesCodeAndCity, getAllOfficesAndPhonesFromSpain, getAllNameSurnamesAndEmailInCargeOfBossSeven, getCEOInformation, getAllEmployeesNotSalesRepresentative, getAllStatus, getPaymentsByYear, getClientCodesPaymentsByYear, getAllRequestEarlyTwoDays, getRejectRequestsByYear, getRequestDeliveredInJanuary, getPaymentsByYearAndPaypal, getAllPaymentStatus, getProductsWithGammaOrnamentales, getRequestDetailsByProductCode, getClientsAndEmployeesNames, getClientsWithEmployeeInfo }