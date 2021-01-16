export class ApiDSeller {
  seller?: DSeller;
  companyInfo?: CmCompanyInfo;
}
export class ApiDItemBatchBase {
  itemInfo?: DItem;
  itemBatchTypes?: DItemBatchType;
  itemBatchSourceTypes?: DItemBatchSourceType[];
  products?: DProduct[];
  productUnits?: DProductUnit[];
}
export class ApiDReceivedItemBatch extends ApiDItemBatchBase {
  receivedItemBatch?: DReceivedItemBatch;
  seller?: DSeller;
  transaction?: FimTransaction;
}
export class ApiDItemBatch extends ApiDItemBatchBase {
  itemBatch?: DItemBatch;
}
export class ApiDItem {
  item?: DItem;
  products?: DProduct[];
  productUnits?: DProductUnit[];
}
export class UmUserUserGroup {
  userId?: number;
  userGroupId?: number;
  addTs?: Date;
  adderId?: number;
  modTs?: Date;
  modderId?: number;
  isRemoved?: boolean;
}
export class UmUserRole {
  userId?: number;
  roleId?: number;
  addTs?: Date;
  adderId?: number;
  modderId?: number;
  isRemoved?: boolean;
  modTs?: Date;
}
export class UmUserRight {
  id?: number;
  title?: string;
  desc?: string;
  isActive?: boolean;
  addTs?: Date;
  adderId?: number;
  modderId?: number;
  isRemoved?: boolean;
  userId?: number;
  modTs?: Date;
}
export class UmUserGroup {
  id?: number;
  title?: string;
  addTs?: Date;
  adderId?: number;
  modTs?: Date;
  modderId?: number;
  isRemoved?: boolean;
}
export class UmUser {
  id?: number;
  username?: string;
  passwordHash?: string;
  isDisabled?: boolean;
  fullName?: string;
  employeeId?: number;
  addTs?: Date;
  adderId?: number;
  modderId?: number;
  isRemoved?: boolean;
  modTs?: Date;
}
export class UmRoleRight {
  id?: number;
  title?: string;
  desc?: string;
  isActive?: boolean;
  addTs?: Date;
  adderId?: number;
  modderId?: number;
  isRemoved?: boolean;
  roleId?: number;
  modTs?: Date;
}
export class UmRole {
  id?: number;
  title?: string;
  addTs?: Date;
  adderId?: number;
  modderId?: number;
  isRemoved?: boolean;
  modTs?: Date;
}
export class UmRightsSection {
  id?: number;
  title?: string;
  parentSectionId?: number;
}
export class UmRightRightsSection {
  rightId?: number;
  rightsSectionId?: number;
}
export class UmRight {
  id?: number;
  title?: string;
  desc?: string;
  isActive?: boolean;
  addTs?: Date;
  adderId?: number;
  modderId?: number;
  isRemoved?: boolean;
  modTs?: Date;
}
export class SmSourceItemBatch {
  id?: number;
  itemBatchType?: string;
  productId?: number;
  sourceType?: string;
  sourceId?: number;
  addTs?: Date;
  adderId?: number;
  modderId?: number;
  isRemoved?: boolean;
  shippedQty?: number;
  shippedUnitId?: number;
  modTs?: Date;
}
export class SmShippedItemBatch {
  id?: number;
  itemBatchType?: string;
  productId?: number;
  sourceType?: string;
  sourceId?: number;
  addTs?: Date;
  adderId?: number;
  modderId?: number;
  isRemoved?: boolean;
  vehicleId?: number;
  modTs?: Date;
}
export class SmShipmentVehicle {
  shipmentId?: number;
  vehicleId?: number;
  assignmentTs?: Date;
}
export class SmShipmentLocationType {
  value?: string;
  text?: string;
}
export class SmShipmentLocation {
  id?: number;
  type?: string;
  locationInfoId?: number;
}
export class SmShipment {
  id?: number;
  sourceId?: number;
  destinationId?: number;
  isShipmentComplete?: boolean;
  sourceItemBatchId?: number;
  destinationItemBatchId?: number;
  suppervisorId?: number;
  addTs?: Date;
  adderId?: number;
  modderId?: number;
  isRemoved?: boolean;
  modTs?: Date;
}
export class SmMovingItemBatch {
  id?: number;
  itemBatchType?: string;
  productId?: number;
  sourceType?: string;
  sourceId?: number;
  addTs?: Date;
  adderId?: number;
  modderId?: number;
  isRemoved?: boolean;
  shipmentId?: number;
  modTs?: Date;
}
export class SmDestinationItemBatch {
  id?: number;
  itemBatchType?: string;
  productId?: number;
  sourceType?: string;
  sourceId?: number;
  addTs?: Date;
  adderId?: number;
  modderId?: number;
  isRemoved?: boolean;
  receivedQty?: number;
  receivedUnitId?: number;
  modTs?: Date;
}
export class SShopEmployee {
  id?: number;
  designation?: string;
  employeeId?: number;
}
export class SShop {
  id?: number;
  locationId?: number;
  isOnline?: boolean;
  name?: string;
}
export class SProductOfferItem {
  id?: number;
  productId?: number;
  productOfferId?: number;
  qty?: number;
  maxQty?: number;
  unitId?: number;
}
export class SProductOffer {
  id?: number;
  name?: string;
  desc?: string;
  price?: number;
  addTs?: Date;
  adderId?: number;
  modderId?: number;
  isRemoved?: boolean;
  validFromTs?: Date;
  validToTs?: Date;
  modTs?: Date;
}
export class NmNotificationSourceType {
  value?: string;
  text?: string;
}
export class NmNotificationNotificationCategory {
  notificationId?: number;
  notificationCategoryId?: number;
}
export class NmNotificationCategoryAgr {
  id?: number;
  total?: number;
  unread?: number;
  expired?: number;
  deleted?: number;
}
export class NmNotificationCategory {
  id?: number;
  name?: string;
}
export class NmNotification {
  id?: number;
  notificationSourceType?: string;
  subject?: string;
  body?: string;
  isRead?: boolean;
  isExpired?: boolean;
  isDeleted?: boolean;
  deletorId?: number;
  addTs?: Date;
  expTs?: Date;
  sourceId?: number;
}
export class HrmOrganisation {
  id?: number;
  name?: string;
  desc?: string;
  parentOrgId?: number;
  addTs?: Date;
  adderId?: number;
  modTs?: Date;
  modderId?: number;
  isRemoved?: boolean;
}
export class HrmEmployeeOrganisation {
  employeeId?: number;
  organisationId?: number;
  designationAtOrg?: string;
  designationDesc?: string;
  addTs?: Date;
  adderId?: number;
  modTs?: Date;
  modderId?: number;
  isRemoved?: boolean;
}
export class HrmEmployeeGroupOrganisation {
  employeeGroupId?: number;
  organisationId?: number;
}
export class HrmEmployeeGroup {
  id?: number;
  name?: string;
  desc?: string;
  parentGroupId?: number;
  addTs?: Date;
  adderId?: number;
  modTs?: Date;
  modderId?: number;
  isRemoved?: boolean;
}
export class HrmEmployeeEmployeeGroup {
  employeeId?: number;
  employeeGroupId?: number;
  designationAtGroup?: string;
  designationDesc?: string;
  addTs?: Date;
  adderId?: number;
  modTs?: Date;
  modderId?: number;
  isRemoved?: boolean;
}
export class HrmEmployee {
  id?: number;
  contactId?: number;
  addTs?: Date;
  adderId?: number;
  modTs?: Date;
  modderId?: number;
  isRemoved?: boolean;
}
export class GsUserSetting {
  userId?: number;
  currentThemeId?: number;
}
export class GsTheme {
  id?: number;
  title?: string;
  desc?: string;
  themePath?: string;
}
export class GsAppType {
  value?: string;
  text?: string;
}
export class GsAppSetting {
  companyName?: string;
  appId?: number;
  defaultCurrencyId?: string;
}
export class GsApp {
  id?: number;
  name?: string;
  appVersion?: string;
  appType?: string;
  userGroupId?: number;
}
export class FmVehicleType {
  value?: string;
  text?: string;
}
export class FmVehicleStatus {
  value?: string;
  text?: string;
}
export class FmVehicleLocation {
  id?: number;
  latitude?: number;
  longitude?: number;
}
export class FmVehicleCapacityUnitType {
  value?: string;
  text?: string;
}
export class FmVehicleCapacityUnitConvertion {
  sourceUnitId?: number;
  destinationUnitId?: number;
  multiplier?: number;
  addTs?: Date;
  adderId?: number;
  modderId?: number;
  modTs?: Date;
}
export class FmVehicleCapacityUnit {
  id?: number;
  name?: string;
  addTs?: Date;
  adderId?: number;
  modderId?: number;
  isDefault?: boolean;
  modTs?: Date;
  vehicleUnitType?: string;
  vehicleType?: string;
}
export class FmVehicleCapacity {
  vehicleId?: number;
  capacityUnitId?: number;
  capacity?: number;
}
export class FmVehicle {
  id?: number;
  name?: string;
  desc?: string;
  regNumber?: string;
  currentDriverId?: number;
  isInService?: boolean;
  status?: string;
  addTs?: Date;
  adderId?: number;
  modderId?: number;
  isRemoved?: boolean;
  driverAssignmentTs?: Date;
  modTs?: Date;
  vehicleType?: string;
}
export class FimTransactionType {
  value?: string;
  text?: string;
}
export class FimTransactionItemAgr {
  id?: number;
  total?: number;
}
export class FimTransactionItem {
  id?: number;
  transactionId?: number;
  itemBatchId?: number;
  price?: number;
  qty?: number;
  unitId?: number;
  discount?: number;
}
export class FimTransactionAmount {
  id?: number;
  totalBeforeDiscount?: number;
  discount?: number;
  total?: number;
}
export class FimTransaction {
  id?: number;
  type?: string;
  rct?: string;
  rst?: string;
  paymentId?: number;
  addTs?: Date;
  adderId?: number;
  modderId?: number;
  isRemoved?: boolean;
  ts?: Date;
  modTs?: Date;
}
export class FimPaymentType {
  value?: string;
  text?: string;
}
export class FimPaymentPartType {
  value?: string;
  text?: string;
}
export class FimPaymentPart {
  id?: number;
  totalAmt?: number;
  isComplete?: boolean;
  paymentPartType?: string;
}
export class FimPaymentAmount {
  id?: number;
  totalAmt?: number;
  receivedAmt?: number;
  isComplete?: boolean;
  transactionTs?: Date;
}
export class FimPayment {
  id?: number;
  type?: string;
}
export class FimCurrency {
  value?: string;
  text?: string;
}
export class FimCreditPayment {
  id?: number;
  type?: string;
  receivedAmt?: number;
  dueDate?: Date;
}
export class FimChequePayment {
  id?: number;
  type?: string;
  isBounced?: boolean;
  chequeId?: number;
}
export class FimCheque {
  id?: number;
  chequeNo?: string;
  accNo?: string;
  sourceNo?: string;
  footerNo?: string;
  accTitle?: string;
  chequeDate?: Date;
  issuerContactId?: number;
  amount?: number;
  bankId?: number;
}
export class FimCashPayment {
  id?: number;
  type?: string;
  receivedAmt?: number;
}
export class FimBankBranchPoc {
  bankBranchId?: number;
  contactId?: number;
}
export class FimBankBranch {
  id?: number;
  bankId?: number;
  addressId?: number;
}
export class FimBank {
  id?: number;
  name?: string;
  desc?: string;
}
export class DWarehouse {
  id?: number;
  locationId?: number;
  addTs?: Date;
  adderId?: number;
  modderId?: number;
  modTs?: Date;
}
export class DStoredItemBatch {
  id?: number;
  itemBatchType?: string;
  productId?: number;
  sourceType?: string;
  sourceId?: number;
  addTs?: Date;
  adderId?: number;
  modderId?: number;
  isRemoved?: boolean;
  productWarehouseStockId?: number;
  modTs?: Date;
}
export class DSellerType {
  value?: string;
  text?: string;
}
export class DSeller {
  id?: number;
  name?: string;
  commentsThreadId?: number;
  contactId?: number;
  addTs?: Date;
  adderId?: number;
  modderId?: number;
  rct?: string;
  rst?: string;
  modTs?: Date;
  sellerType?: string;
}
export class DRemovedItemBatch {
  id?: number;
  itemBatchType?: string;
  productId?: number;
  sourceType?: string;
  sourceId?: number;
  addTs?: Date;
  adderId?: number;
  modderId?: number;
  isRemoved?: boolean;
  removalReason?: string;
  modTs?: Date;
}
export class DRelativeStateProvType {
  value?: string;
  text?: string;
}
export class DRelativeCountryType {
  value?: string;
  text?: string;
}
export class DReceivedItemBatch {
  id?: number;
  itemBatchType?: string;
  productId?: number;
  sourceType?: string;
  sourceId?: number;
  addTs?: Date;
  adderId?: number;
  modderId?: number;
  isRemoved?: boolean;
  transactionId?: number;
  modTs?: Date;
  receptionTs?: Date;
}
export class DProductWarehouseStock {
  id?: number;
  qty?: number;
  unitId?: number;
  warehouseId?: number;
  productId?: number;
}
export class DProductUnitConvertion {
  sourceUnitId?: number;
  destinationUnitId?: number;
  multiplier?: number;
  addTs?: Date;
  adderId?: number;
  modderId?: number;
  modTs?: Date;
}
export class DProductUnit {
  id?: number;
  name?: string;
  productId?: number;
  addTs?: Date;
  adderId?: number;
  modderId?: number;
  isDefault?: boolean;
  modTs?: Date;
}
export class DProductStock {
  id?: number;
  qty?: number;
  unitId?: number;
  productId?: number;
}
export class DProductCategory {
  id?: number;
  name?: string;
  prodCount?: number;
  addTs?: Date;
  adderId?: number;
  modderId?: number;
  isRemoved?: boolean;
  modTs?: Date;
}
export class DProduct {
  id?: number;
  name?: string;
  desc?: string;
  productCategoryId?: number;
  barCode?: string;
  addTs?: Date;
  adderId?: number;
  modderId?: number;
  isRemoved?: boolean;
  modTs?: Date;
}
export class DItemRemovalHistory {
  itemId?: number;
  removerId?: number;
  ts?: Date;
}
export class DItemItemBatch {
  itemId?: number;
  batchId?: number;
}
export class DItemBatchType {
  value?: string;
  text?: string;
}
export class DItemBatchSourceType {
  value?: string;
  text?: string;
}
export class DItemBatchAgr {
  id?: number;
  qty?: number;
  unitId?: number;
  price?: number;
}
export class DItemBatch {
  id?: number;
  itemBatchType?: string;
  productId?: number;
  sourceType?: string;
  sourceId?: number;
  addTs?: Date;
  adderId?: number;
  modderId?: number;
  isRemoved?: boolean;
  modTs?: Date;
}
export class DItem {
  id?: number;
  prodId?: number;
  price?: number;
  addTs?: Date;
  adderId?: number;
  modderId?: number;
  isRemoved?: boolean;
  qty?: number;
  unitId?: number;
  expireTs?: Date;
  expireMargin?: number;
  isFixed?: boolean;
  isExpired?: boolean;
  modTs?: Date;
}
export class DCommentsThread {
  id?: number;
  isVisible?: boolean;
  isBlocked?: boolean;
}
export class DComment {
  id?: number;
  commentsThreadId?: number;
  parentCommentId?: number;
  addTs?: Date;
  adderId?: number;
  modderId?: number;
  isRemoved?: boolean;
  modTs?: Date;
  ts?: Date;
}
export class DBuyerType {
  value?: string;
  text?: string;
}
export class DBuyer {
  id?: number;
  name?: string;
  buyerType?: string;
  commentsThreadId?: number;
  contactId?: number;
  addTs?: Date;
  adderId?: number;
  modderId?: number;
  rct?: string;
  rst?: string;
  modTs?: Date;
}
export class CmStateProvince {
  id?: number;
  name?: string;
  countryId?: number;
}
export class CmRegion {
  id?: number;
  name?: string;
}
export class CmProfessionalInfo {
  id?: number;
  designation?: string;
  department?: string;
  moreInfo?: string;
  companyInfoId?: number;
}
export class CmPhone {
  id?: number;
  fieldType?: string;
  contactId?: number;
  name?: string;
  cityId?: number;
  phone?: string;
  addTs?: Date;
  adderId?: number;
  modTs?: Date;
  modderId?: number;
  isRemoved?: boolean;
}
export class CmPersonalInfo {
  id?: number;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  salutation?: string;
  moreInfo?: string;
}
export class CmNote {
  id?: number;
  text?: string;
}
export class CmLocationInfo {
  id?: number;
  isMerged?: boolean;
  addTs?: Date;
  adderId?: number;
  modderId?: number;
  isRemoved?: boolean;
  modTs?: Date;
  type?: string;
  name?: string;
  addressId?: number;
}
export class CmFax {
  id?: number;
  fieldType?: string;
  contactId?: number;
  name?: string;
  cityId?: number;
  fax?: string;
  addTs?: Date;
  adderId?: number;
  modTs?: Date;
  modderId?: number;
  isRemoved?: boolean;
}
export class CmEmail {
  id?: number;
  fieldType?: string;
  contactId?: number;
  name?: string;
  email?: string;
  addTs?: Date;
  adderId?: number;
  modTs?: Date;
  modderId?: number;
  isRemoved?: boolean;
}
export class CmCountryContinent {
  countryId?: number;
  continentId?: number;
}
export class CmCountry {
  id?: number;
  name?: string;
  regionId?: number;
  dialingCode?: number;
}
export class CmContinent {
  id?: number;
  name?: string;
}
export class CmContactType {
  value?: string;
  text?: string;
}
export class CmContactMerger {
  mainContactId?: number;
  mergedContactId?: number;
  addTs?: Date;
  adderId?: number;
  modderId?: number;
  isRemoved?: boolean;
  modTs?: Date;
}
export class CmContactFieldType {
  value?: string;
  text?: string;
}
export class CmContactField {
  id?: number;
  fieldType?: string;
  contactId?: number;
  name?: string;
  addTs?: Date;
  adderId?: number;
  modTs?: Date;
  modderId?: number;
  isRemoved?: boolean;
}
export class CmContactConnection {
  id?: number;
  fieldType?: string;
  contactId?: number;
  name?: string;
  connectionId?: number;
  title?: string;
  addTs?: Date;
  adderId?: number;
  modTs?: Date;
  modderId?: number;
  isRemoved?: boolean;
}
export class CmContact {
  id?: number;
  isMerged?: boolean;
  addTs?: Date;
  adderId?: number;
  modderId?: number;
  isRemoved?: boolean;
  modTs?: Date;
  type?: string;
}
export class CmCompanyInfo {
  id?: number;
  isMerged?: boolean;
  addTs?: Date;
  adderId?: number;
  modderId?: number;
  isRemoved?: boolean;
  modTs?: Date;
  type?: string;
  name?: string;
}
export class CmCity {
  id?: number;
  name?: string;
  stateProvinceId?: number;
  dialingCode?: number;
}
export class CmAddressContactField {
  addressId?: number;
  contactFieldId?: number;
}
export class CmAddress {
  id?: number;
  line1?: string;
  line2?: string;
  cityId?: number;
  zip?: number;
  latitude?: number;
  longitude?: number;
}
