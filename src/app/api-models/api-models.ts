namespace TrakGud.DAL.Models
{
	export class UmUserUserGroup
	{
		userId: number;
		userGroupId: number;
		addTs: Date;
		adderId: number;
		modTs: Date;
		modderId: number;
		isRemoved: boolean;
		adder: UmUser;
		modder: UmUser;
		user: UmUser;
		userGroup: UmUserGroup;
	}
	export class UmUserRole
	{
		userId: number;
		roleId: number;
		addTs: Date;
		adderId: number;
		modderId: number;
		isRemoved: boolean;
		modTs: Date;
		adder: UmUser;
		modder: UmUser;
		role: UmRole;
		user: UmUser;
	}
	export class UmUserRight
	{
		id: number;
		title: string;
		desc: string;
		isActive: boolean;
		addTs: Date;
		adderId: number;
		modderId: number;
		isRemoved: boolean;
		userId: number;
		modTs: Date;
		adder: UmUser;
		modder: UmUser;
		user: UmUser;
	}
	export class UmUserGroup
	{
		id: number;
		title: string;
		addTs: Date;
		adderId: number;
		modTs: Date;
		modderId: number;
		isRemoved: boolean;
		adder: UmUser;
		modder: UmUser;
		gsApps: GsApp[];
		umUserUserGroups: UmUserUserGroup[];
	}
	export class UmUser
	{
		id: number;
		username: string;
		passwordHash: string;
		isDisabled: boolean;
		fullName: string;
		employeeId: number;
		addTs: Date;
		adderId: number;
		modderId: number;
		isRemoved: boolean;
		modTs: Date;
		adder: UmUser;
		employee: HrmEmployee;
		modder: UmUser;
		gsUserSetting: GsUserSetting;
		cmCompanyInfoAdders: CmCompanyInfo[];
		cmCompanyInfoModders: CmCompanyInfo[];
		cmContactAdders: CmContact[];
		cmContactFieldAdders: CmContactField[];
		cmContactFieldModders: CmContactField[];
		cmContactMergers: CmContactMerger[];
		cmContactModders: CmContact[];
		cmEmailAdders: CmEmail[];
		cmEmailModders: CmEmail[];
		cmFaxAdders: CmFax[];
		cmFaxModders: CmFax[];
		cmLocationInfoAdders: CmLocationInfo[];
		cmLocationInfoModders: CmLocationInfo[];
		cmPhoneAdders: CmPhone[];
		cmPhoneModders: CmPhone[];
		dBuyerAdders: DBuyer[];
		dBuyerModders: DBuyer[];
		dCommentAdders: DComment[];
		dCommentModders: DComment[];
		dItemAdders: DItem[];
		dItemBatchAdders: DItemBatch[];
		dItemBatchModders: DItemBatch[];
		dItemModders: DItem[];
		dItemRemovalHistories: DItemRemovalHistory[];
		dProductAdders: DProduct[];
		dProductCategoryAdders: DProductCategory[];
		dProductCategoryModders: DProductCategory[];
		dProductModders: DProduct[];
		dProductUnitAdders: DProductUnit[];
		dProductUnitConvertionAdders: DProductUnitConvertion[];
		dProductUnitConvertionModders: DProductUnitConvertion[];
		dProductUnitModders: DProductUnit[];
		dReceivedItemBatchAdders: DReceivedItemBatch[];
		dReceivedItemBatchModders: DReceivedItemBatch[];
		dRemovedItemBatchAdders: DRemovedItemBatch[];
		dRemovedItemBatchModders: DRemovedItemBatch[];
		dSellerAdders: DSeller[];
		dSellerModders: DSeller[];
		dStoredItemBatchAdders: DStoredItemBatch[];
		dStoredItemBatchModders: DStoredItemBatch[];
		dWarehouseAdders: DWarehouse[];
		dWarehouseModders: DWarehouse[];
		fimTransactionAdders: FimTransaction[];
		fimTransactionModders: FimTransaction[];
		fmVehicleAdders: FmVehicle[];
		fmVehicleCapacityUnitAdders: FmVehicleCapacityUnit[];
		fmVehicleCapacityUnitConvertionAdders: FmVehicleCapacityUnitConvertion[];
		fmVehicleCapacityUnitConvertionModders: FmVehicleCapacityUnitConvertion[];
		fmVehicleCapacityUnitModders: FmVehicleCapacityUnit[];
		fmVehicleModders: FmVehicle[];
		hrmEmployeeAdders: HrmEmployee[];
		hrmEmployeeEmployeeGroupAdders: HrmEmployeeEmployeeGroup[];
		hrmEmployeeEmployeeGroupModders: HrmEmployeeEmployeeGroup[];
		hrmEmployeeGroupAdders: HrmEmployeeGroup[];
		hrmEmployeeGroupModders: HrmEmployeeGroup[];
		hrmEmployeeModders: HrmEmployee[];
		hrmEmployeeOrganisationAdders: HrmEmployeeOrganisation[];
		hrmEmployeeOrganisationModders: HrmEmployeeOrganisation[];
		hrmOrganisationAdders: HrmOrganisation[];
		hrmOrganisationModders: HrmOrganisation[];
		inverseAdder: UmUser[];
		inverseModder: UmUser[];
		nmNotifications: NmNotification[];
		sProductOfferAdders: SProductOffer[];
		sProductOfferModders: SProductOffer[];
		smDestinationItemBatchAdders: SmDestinationItemBatch[];
		smDestinationItemBatchModders: SmDestinationItemBatch[];
		smMovingItemBatchAdders: SmMovingItemBatch[];
		smMovingItemBatchModders: SmMovingItemBatch[];
		smShipmentAdders: SmShipment[];
		smShipmentModders: SmShipment[];
		smShipmentSuppervisors: SmShipment[];
		smShippedItemBatchAdders: SmShippedItemBatch[];
		smShippedItemBatchModders: SmShippedItemBatch[];
		smSourceItemBatchAdders: SmSourceItemBatch[];
		smSourceItemBatchModders: SmSourceItemBatch[];
		umRightAdders: UmRight[];
		umRightModders: UmRight[];
		umRoleAdders: UmRole[];
		umRoleModders: UmRole[];
		umRoleRightAdders: UmRoleRight[];
		umRoleRightModders: UmRoleRight[];
		umUserGroupAdders: UmUserGroup[];
		umUserGroupModders: UmUserGroup[];
		umUserRightAdders: UmUserRight[];
		umUserRightModders: UmUserRight[];
		umUserRightUsers: UmUserRight[];
		umUserRoleAdders: UmUserRole[];
		umUserRoleModders: UmUserRole[];
		umUserRoleUsers: UmUserRole[];
		umUserUserGroupAdders: UmUserUserGroup[];
		umUserUserGroupModders: UmUserUserGroup[];
		umUserUserGroupUsers: UmUserUserGroup[];
	}
	export class UmRoleRight
	{
		id: number;
		title: string;
		desc: string;
		isActive: boolean;
		addTs: Date;
		adderId: number;
		modderId: number;
		isRemoved: boolean;
		roleId: number;
		modTs: Date;
		adder: UmUser;
		modder: UmUser;
		role: UmRole;
	}
	export class UmRole
	{
		id: number;
		title: string;
		addTs: Date;
		adderId: number;
		modderId: number;
		isRemoved: boolean;
		modTs: Date;
		adder: UmUser;
		modder: UmUser;
		cmContactMergers: CmContactMerger[];
		umRoleRights: UmRoleRight[];
		umUserRoles: UmUserRole[];
	}
	export class UmRightsSection
	{
		id: number;
		title: string;
		parentSectionId: number;
		umRightRightsSections: UmRightRightsSection[];
	}
	export class UmRightRightsSection
	{
		rightId: number;
		rightsSectionId: number;
		right: UmRight;
		rightsSection: UmRightsSection;
	}
	export class UmRight
	{
		id: number;
		title: string;
		desc: string;
		isActive: boolean;
		addTs: Date;
		adderId: number;
		modderId: number;
		isRemoved: boolean;
		modTs: Date;
		adder: UmUser;
		modder: UmUser;
		umRightRightsSections: UmRightRightsSection[];
	}
	export class SmSourceItemBatch
	{
		id: number;
		itemBatchType: string;
		productId: number;
		sourceType: string;
		sourceId: number;
		addTs: Date;
		adderId: number;
		modderId: number;
		isRemoved: boolean;
		shippedQty: number;
		shippedUnitId: number;
		modTs: Date;
		adder: UmUser;
		itemBatchTypeNavigation: DItemBatchType;
		modder: UmUser;
		product: DProduct;
		shippedUnit: DProductUnit;
		sourceTypeNavigation: DItemBatchSourceType;
		smShipments: SmShipment[];
	}
	export class SmShippedItemBatch
	{
		id: number;
		itemBatchType: string;
		productId: number;
		sourceType: string;
		sourceId: number;
		addTs: Date;
		adderId: number;
		modderId: number;
		isRemoved: boolean;
		vehicleId: number;
		modTs: Date;
		adder: UmUser;
		itemBatchTypeNavigation: DItemBatchType;
		modder: UmUser;
		product: DProduct;
		sourceTypeNavigation: DItemBatchSourceType;
		vehicle: FmVehicle;
	}
	export class SmShipmentVehicle
	{
		shipmentId: number;
		vehicleId: number;
		assignmentTs: Date;
		shipment: SmShipment;
		vehicle: FmVehicle;
	}
	export class SmShipmentLocationType
	{
		value: string;
		text: string;
		smShipmentLocations: SmShipmentLocation[];
	}
	export class SmShipmentLocation
	{
		id: number;
		type: string;
		locationInfoId: number;
		locationInfo: CmLocationInfo;
		typeNavigation: SmShipmentLocationType;
		smShipmentDestinations: SmShipment[];
		smShipmentSources: SmShipment[];
	}
	export class SmShipment
	{
		id: number;
		sourceId: number;
		destinationId: number;
		isShipmentComplete: boolean;
		sourceItemBatchId: number;
		destinationItemBatchId: number;
		suppervisorId: number;
		addTs: Date;
		adderId: number;
		modderId: number;
		isRemoved: boolean;
		modTs: Date;
		adder: UmUser;
		destination: SmShipmentLocation;
		destinationItemBatch: SmDestinationItemBatch;
		modder: UmUser;
		source: SmShipmentLocation;
		sourceItemBatch: SmSourceItemBatch;
		suppervisor: UmUser;
		smMovingItemBatches: SmMovingItemBatch[];
		smShipmentVehicles: SmShipmentVehicle[];
	}
	export class SmMovingItemBatch
	{
		id: number;
		itemBatchType: string;
		productId: number;
		sourceType: string;
		sourceId: number;
		addTs: Date;
		adderId: number;
		modderId: number;
		isRemoved: boolean;
		shipmentId: number;
		modTs: Date;
		adder: UmUser;
		itemBatchTypeNavigation: DItemBatchType;
		modder: UmUser;
		product: DProduct;
		shipment: SmShipment;
		sourceTypeNavigation: DItemBatchSourceType;
	}
	export class SmDestinationItemBatch
	{
		id: number;
		itemBatchType: string;
		productId: number;
		sourceType: string;
		sourceId: number;
		addTs: Date;
		adderId: number;
		modderId: number;
		isRemoved: boolean;
		receivedQty: number;
		receivedUnitId: number;
		modTs: Date;
		adder: UmUser;
		itemBatchTypeNavigation: DItemBatchType;
		modder: UmUser;
		product: DProduct;
		receivedUnit: DProductUnit;
		sourceTypeNavigation: DItemBatchSourceType;
		smShipments: SmShipment[];
	}
	export class SShopEmployee
	{
		id: number;
		designation: string;
		employeeId: number;
		employee: HrmEmployee;
	}
	export class SShop
	{
		id: number;
		locationId: number;
		isOnline: boolean;
		name: string;
		location: CmLocationInfo;
	}
	export class SProductOfferItem
	{
		id: number;
		productId: number;
		productOfferId: number;
		qty: number;
		maxQty: number;
		unitId: number;
		product: DProduct;
		productOffer: SProductOffer;
		unit: DProductUnit;
	}
	export class SProductOffer
	{
		id: number;
		name: string;
		desc: string;
		price: number;
		addTs: Date;
		adderId: number;
		modderId: number;
		isRemoved: boolean;
		validFromTs: Date;
		validToTs: Date;
		modTs: Date;
		adder: UmUser;
		modder: UmUser;
		sProductOfferItems: SProductOfferItem[];
	}
	export class NmNotificationSourceType
	{
		value: string;
		text: string;
		nmNotifications: NmNotification[];
	}
	export class NmNotificationNotificationCategory
	{
		notificationId: number;
		notificationCategoryId: number;
		notification: NmNotification;
		notificationCategory: NmNotificationCategory;
	}
	export class NmNotificationCategoryAgr
	{
		id: number;
		total: number;
		unread: number;
		expired: number;
		deleted: number;
		idNavigation: NmNotificationCategory;
	}
	export class NmNotificationCategory
	{
		id: number;
		name: string;
		nmNotificationCategoryAgr: NmNotificationCategoryAgr;
		nmNotificationNotificationCategories: NmNotificationNotificationCategory[];
	}
	export class NmNotification
	{
		id: number;
		notificationSourceType: string;
		subject: string;
		body: string;
		isRead: boolean;
		isExpired: boolean;
		isDeleted: boolean;
		deletorId: number;
		addTs: Date;
		expTs: Date;
		sourceId: number;
		deletor: UmUser;
		notificationSourceTypeNavigation: NmNotificationSourceType;
		nmNotificationNotificationCategories: NmNotificationNotificationCategory[];
	}
	export class HrmOrganisation
	{
		id: number;
		name: string;
		desc: string;
		parentOrgId: number;
		addTs: Date;
		adderId: number;
		modTs: Date;
		modderId: number;
		isRemoved: boolean;
		adder: UmUser;
		modder: UmUser;
		hrmEmployeeGroupOrganisations: HrmEmployeeGroupOrganisation[];
		hrmEmployeeOrganisations: HrmEmployeeOrganisation[];
	}
	export class HrmEmployeeOrganisation
	{
		employeeId: number;
		organisationId: number;
		designationAtOrg: string;
		designationDesc: string;
		addTs: Date;
		adderId: number;
		modTs: Date;
		modderId: number;
		isRemoved: boolean;
		adder: UmUser;
		employee: HrmEmployee;
		modder: UmUser;
		organisation: HrmOrganisation;
	}
	export class HrmEmployeeGroupOrganisation
	{
		employeeGroupId: number;
		organisationId: number;
		employeeGroup: HrmEmployeeGroup;
		organisation: HrmOrganisation;
	}
	export class HrmEmployeeGroup
	{
		id: number;
		name: string;
		desc: string;
		parentGroupId: number;
		addTs: Date;
		adderId: number;
		modTs: Date;
		modderId: number;
		isRemoved: boolean;
		adder: UmUser;
		modder: UmUser;
		hrmEmployeeEmployeeGroups: HrmEmployeeEmployeeGroup[];
		hrmEmployeeGroupOrganisations: HrmEmployeeGroupOrganisation[];
	}
	export class HrmEmployeeEmployeeGroup
	{
		employeeId: number;
		employeeGroupId: number;
		designationAtGroup: string;
		designationDesc: string;
		addTs: Date;
		adderId: number;
		modTs: Date;
		modderId: number;
		isRemoved: boolean;
		adder: UmUser;
		employee: HrmEmployee;
		employeeGroup: HrmEmployeeGroup;
		modder: UmUser;
	}
	export class HrmEmployee
	{
		id: number;
		contactId: number;
		addTs: Date;
		adderId: number;
		modTs: Date;
		modderId: number;
		isRemoved: boolean;
		adder: UmUser;
		contact: HrmEmployee;
		modder: UmUser;
		hrmEmployeeEmployeeGroups: HrmEmployeeEmployeeGroup[];
		hrmEmployeeOrganisations: HrmEmployeeOrganisation[];
		inverseContact: HrmEmployee[];
		sShopEmployees: SShopEmployee[];
		umUsers: UmUser[];
	}
	export class GsUserSetting
	{
		userId: number;
		currentThemeId: number;
		currentTheme: GsTheme;
		user: UmUser;
	}
	export class GsTheme
	{
		id: number;
		title: string;
		desc: string;
		themePath: string;
		gsUserSettings: GsUserSetting[];
	}
	export class GsAppType
	{
		value: string;
		text: string;
		gsApps: GsApp[];
	}
	export class GsAppSetting
	{
		companyName: string;
		appId: number;
		defaultCurrencyId: string;
		app: GsApp;
		defaultCurrency: FimCurrency;
	}
	export class GsApp
	{
		id: number;
		name: string;
		appVersion: string;
		appType: string;
		userGroupId: number;
		appTypeNavigation: GsAppType;
		userGroup: UmUserGroup;
		gsAppSetting: GsAppSetting;
	}
	export class FmVehicleType
	{
		value: string;
		text: string;
		fmVehicleCapacityUnits: FmVehicleCapacityUnit[];
		fmVehicles: FmVehicle[];
	}
	export class FmVehicleStatus
	{
		value: string;
		text: string;
		fmVehicles: FmVehicle[];
	}
	export class FmVehicleLocation
	{
		id: number;
		latitude: number;
		longitude: number;
		idNavigation: FmVehicle;
	}
	export class FmVehicleCapacityUnitType
	{
		value: string;
		text: string;
		fmVehicleCapacityUnits: FmVehicleCapacityUnit[];
	}
	export class FmVehicleCapacityUnitConvertion
	{
		sourceUnitId: number;
		destinationUnitId: number;
		multiplier: number;
		addTs: Date;
		adderId: number;
		modderId: number;
		modTs: Date;
		adder: UmUser;
		destinationUnit: FmVehicleCapacityUnit;
		modder: UmUser;
		sourceUnit: FmVehicleCapacityUnit;
	}
	export class FmVehicleCapacityUnit
	{
		id: number;
		name: string;
		addTs: Date;
		adderId: number;
		modderId: number;
		isDefault: boolean;
		modTs: Date;
		vehicleUnitType: string;
		vehicleType: string;
		adder: UmUser;
		modder: UmUser;
		vehicleTypeNavigation: FmVehicleType;
		vehicleUnitTypeNavigation: FmVehicleCapacityUnitType;
		fmVehicleCapacities: FmVehicleCapacity[];
		fmVehicleCapacityUnitConvertionDestinationUnits: FmVehicleCapacityUnitConvertion[];
		fmVehicleCapacityUnitConvertionSourceUnits: FmVehicleCapacityUnitConvertion[];
	}
	export class FmVehicleCapacity
	{
		vehicleId: number;
		capacityUnitId: number;
		capacity: number;
		capacityUnit: FmVehicleCapacityUnit;
		vehicle: FmVehicle;
	}
	export class FmVehicle
	{
		id: number;
		name: string;
		desc: string;
		regNumber: string;
		currentDriverId: number;
		isInService: boolean;
		status: string;
		addTs: Date;
		adderId: number;
		modderId: number;
		isRemoved: boolean;
		driverAssignmentTs: Date;
		modTs: Date;
		vehicleType: string;
		adder: UmUser;
		idNavigation: CmContact;
		modder: UmUser;
		statusNavigation: FmVehicleStatus;
		vehicleTypeNavigation: FmVehicleType;
		fmVehicleLocation: FmVehicleLocation;
		fmVehicleCapacities: FmVehicleCapacity[];
		smShipmentVehicles: SmShipmentVehicle[];
		smShippedItemBatches: SmShippedItemBatch[];
	}
	export class FimTransactionType
	{
		value: string;
		text: string;
		fimTransactions: FimTransaction[];
	}
	export class FimTransactionItemAgr
	{
		id: number;
		total: number;
		idNavigation: FimTransactionItem;
	}
	export class FimTransactionItem
	{
		id: number;
		transactionId: number;
		itemBatchId: number;
		price: number;
		qty: number;
		unitId: number;
		discount: number;
		itemBatch: DItemBatch;
		transaction: FimTransaction;
		unit: DProductUnit;
		fimTransactionItemAgr: FimTransactionItemAgr;
	}
	export class FimTransactionAmount
	{
		id: number;
		totalBeforeDiscount: number;
		discount: number;
		total: number;
		idNavigation: FimTransaction;
	}
	export class FimTransaction
	{
		id: number;
		type: string;
		rct: string;
		rst: string;
		paymentId: number;
		addTs: Date;
		adderId: number;
		modderId: number;
		isRemoved: boolean;
		ts: Date;
		modTs: Date;
		adder: UmUser;
		modder: UmUser;
		payment: FimPayment;
		rctNavigation: DRelativeCountryType;
		rstNavigation: DRelativeStateProvType;
		typeNavigation: FimTransactionType;
		fimTransactionAmount: FimTransactionAmount;
		dReceivedItemBatches: DReceivedItemBatch[];
		fimTransactionItems: FimTransactionItem[];
	}
	export class FimPaymentType
	{
		value: string;
		text: string;
		fimCashPayments: FimCashPayment[];
		fimChequePayments: FimChequePayment[];
		fimCreditPayments: FimCreditPayment[];
		fimPayments: FimPayment[];
	}
	export class FimPaymentPartType
	{
		value: string;
		text: string;
		fimPaymentParts: FimPaymentPart[];
	}
	export class FimPaymentPart
	{
		id: number;
		totalAmt: number;
		isComplete: boolean;
		paymentPartType: string;
		paymentPartTypeNavigation: FimPaymentPartType;
	}
	export class FimPaymentAmount
	{
		id: number;
		totalAmt: number;
		receivedAmt: number;
		isComplete: boolean;
		transactionTs: Date;
	}
	export class FimPayment
	{
		id: number;
		type: string;
		typeNavigation: FimPaymentType;
		fimTransactions: FimTransaction[];
	}
	export class FimCurrency
	{
		value: string;
		text: string;
		gsAppSettings: GsAppSetting[];
	}
	export class FimCreditPayment
	{
		id: number;
		type: string;
		receivedAmt: number;
		dueDate: Date;
		typeNavigation: FimPaymentType;
	}
	export class FimChequePayment
	{
		id: number;
		type: string;
		isBounced: boolean;
		chequeId: number;
		cheque: FimCheque;
		typeNavigation: FimPaymentType;
	}
	export class FimCheque
	{
		id: number;
		chequeNo: string;
		accNo: string;
		sourceNo: string;
		footerNo: string;
		accTitle: string;
		chequeDate: Date;
		issuerContactId: number;
		amount: number;
		bankId: number;
		bank: FimBank;
		issuerContact: CmContact;
		fimChequePayments: FimChequePayment[];
	}
	export class FimCashPayment
	{
		id: number;
		type: string;
		receivedAmt: number;
		typeNavigation: FimPaymentType;
	}
	export class FimBankBranchPoc
	{
		bankBranchId: number;
		contactId: number;
		bankBranch: FimBankBranch;
		contact: CmContact;
	}
	export class FimBankBranch
	{
		id: number;
		bankId: number;
		addressId: number;
		address: CmAddress;
		bank: FimBank;
		fimBankBranchPocs: FimBankBranchPoc[];
	}
	export class FimBank
	{
		id: number;
		name: string;
		desc: string;
		fimBankBranches: FimBankBranch[];
		fimCheques: FimCheque[];
	}
	export class DWarehouse
	{
		id: number;
		locationId: number;
		addTs: Date;
		adderId: number;
		modderId: number;
		modTs: Date;
		adder: UmUser;
		location: CmLocationInfo;
		modder: UmUser;
		dProductWarehouseStocks: DProductWarehouseStock[];
	}
	export class DStoredItemBatch
	{
		id: number;
		itemBatchType: string;
		productId: number;
		sourceType: string;
		sourceId: number;
		addTs: Date;
		adderId: number;
		modderId: number;
		isRemoved: boolean;
		productWarehouseStockId: number;
		modTs: Date;
		adder: UmUser;
		itemBatchTypeNavigation: DItemBatchType;
		modder: UmUser;
		product: DProduct;
		productWarehouseStock: DProductWarehouseStock;
		sourceTypeNavigation: DItemBatchSourceType;
	}
	export class DSellerType
	{
		value: string;
		text: string;
		dSellers: DSeller[];
	}
	export class DSeller
	{
		id: number;
		name: string;
		commentsThreadId: number;
		contactId: number;
		addTs: Date;
		adderId: number;
		modderId: number;
		rct: string;
		rst: string;
		modTs: Date;
		sellerType: string;
		adder: UmUser;
		commentsThread: DCommentsThread;
		contact: CmContact;
		modder: UmUser;
		rctNavigation: DRelativeCountryType;
		rstNavigation: DRelativeStateProvType;
		sellerTypeNavigation: DSellerType;
		dReceivedItemBatches: DReceivedItemBatch[];
	}
	export class DRemovedItemBatch
	{
		id: number;
		itemBatchType: string;
		productId: number;
		sourceType: string;
		sourceId: number;
		addTs: Date;
		adderId: number;
		modderId: number;
		isRemoved: boolean;
		removalReason: string;
		modTs: Date;
		adder: UmUser;
		itemBatchTypeNavigation: DItemBatchType;
		modder: UmUser;
		product: DProduct;
		sourceTypeNavigation: DItemBatchSourceType;
	}
	export class DRelativeStateProvType
	{
		value: string;
		text: string;
		dBuyers: DBuyer[];
		dSellers: DSeller[];
		fimTransactions: FimTransaction[];
	}
	export class DRelativeCountryType
	{
		value: string;
		text: string;
		dBuyers: DBuyer[];
		dSellers: DSeller[];
		fimTransactions: FimTransaction[];
	}
	export class DReceivedItemBatch
	{
		id: number;
		itemBatchType: string;
		productId: number;
		sourceType: string;
		sourceId: number;
		addTs: Date;
		adderId: number;
		modderId: number;
		isRemoved: boolean;
		sellerId: number;
		transactionId: number;
		modTs: Date;
		receptionTs: Date;
		adder: UmUser;
		itemBatchTypeNavigation: DItemBatchType;
		modder: UmUser;
		product: DProduct;
		seller: DSeller;
		sourceTypeNavigation: DItemBatchSourceType;
		transaction: FimTransaction;
	}
	export class DProductWarehouseStock
	{
		id: number;
		qty: number;
		unitId: number;
		warehouseId: number;
		productId: number;
		product: DProduct;
		unit: DProductUnit;
		warehouse: DWarehouse;
		dStoredItemBatches: DStoredItemBatch[];
	}
	export class DProductUnitConvertion
	{
		sourceUnitId: number;
		destinationUnitId: number;
		multiplier: number;
		addTs: Date;
		adderId: number;
		modderId: number;
		modTs: Date;
		adder: UmUser;
		destinationUnit: DProductUnit;
		modder: UmUser;
		sourceUnit: DProductUnit;
	}
	export class DProductUnit
	{
		id: number;
		name: string;
		productId: number;
		addTs: Date;
		adderId: number;
		modderId: number;
		isDefault: boolean;
		modTs: Date;
		adder: UmUser;
		modder: UmUser;
		product: DProduct;
		dItemBatchAgrs: DItemBatchAgr[];
		dItems: DItem[];
		dProductStocks: DProductStock[];
		dProductUnitConvertionDestinationUnits: DProductUnitConvertion[];
		dProductUnitConvertionSourceUnits: DProductUnitConvertion[];
		dProductWarehouseStocks: DProductWarehouseStock[];
		fimTransactionItems: FimTransactionItem[];
		sProductOfferItems: SProductOfferItem[];
		smDestinationItemBatches: SmDestinationItemBatch[];
		smSourceItemBatches: SmSourceItemBatch[];
	}
	export class DProductStock
	{
		id: number;
		qty: number;
		unitId: number;
		productId: number;
		product: DProduct;
		unit: DProductUnit;
	}
	export class DProductCategory
	{
		id: number;
		name: string;
		prodCount: number;
		addTs: Date;
		adderId: number;
		modderId: number;
		isRemoved: boolean;
		modTs: Date;
		adder: UmUser;
		modder: UmUser;
		dProducts: DProduct[];
	}
	export class DProduct
	{
		id: number;
		name: string;
		desc: string;
		productCategoryId: number;
		barCode: string;
		addTs: Date;
		adderId: number;
		modderId: number;
		isRemoved: boolean;
		modTs: Date;
		adder: UmUser;
		modder: UmUser;
		productCategory: DProductCategory;
		dItemBatches: DItemBatch[];
		dItems: DItem[];
		dProductStocks: DProductStock[];
		dProductUnits: DProductUnit[];
		dProductWarehouseStocks: DProductWarehouseStock[];
		dReceivedItemBatches: DReceivedItemBatch[];
		dRemovedItemBatches: DRemovedItemBatch[];
		dStoredItemBatches: DStoredItemBatch[];
		sProductOfferItems: SProductOfferItem[];
		smDestinationItemBatches: SmDestinationItemBatch[];
		smMovingItemBatches: SmMovingItemBatch[];
		smShippedItemBatches: SmShippedItemBatch[];
		smSourceItemBatches: SmSourceItemBatch[];
	}
	export class DItemRemovalHistory
	{
		itemId: number;
		removerId: number;
		ts: Date;
		item: DItem;
		remover: UmUser;
	}
	export class DItemItemBatch
	{
		itemId: number;
		batchId: number;
		batch: DItemBatch;
		item: DItem;
	}
	export class DItemBatchType
	{
		value: string;
		text: string;
		dItemBatches: DItemBatch[];
		dReceivedItemBatches: DReceivedItemBatch[];
		dRemovedItemBatches: DRemovedItemBatch[];
		dStoredItemBatches: DStoredItemBatch[];
		smDestinationItemBatches: SmDestinationItemBatch[];
		smMovingItemBatches: SmMovingItemBatch[];
		smShippedItemBatches: SmShippedItemBatch[];
		smSourceItemBatches: SmSourceItemBatch[];
	}
	export class DItemBatchSourceType
	{
		value: string;
		text: string;
		dItemBatches: DItemBatch[];
		dReceivedItemBatches: DReceivedItemBatch[];
		dRemovedItemBatches: DRemovedItemBatch[];
		dStoredItemBatches: DStoredItemBatch[];
		smDestinationItemBatches: SmDestinationItemBatch[];
		smMovingItemBatches: SmMovingItemBatch[];
		smShippedItemBatches: SmShippedItemBatch[];
		smSourceItemBatches: SmSourceItemBatch[];
	}
	export class DItemBatchAgr
	{
		id: number;
		qty: number;
		unitId: number;
		price: number;
		idNavigation: DItemBatch;
		unit: DProductUnit;
	}
	export class DItemBatch
	{
		id: number;
		itemBatchType: string;
		productId: number;
		sourceType: string;
		sourceId: number;
		addTs: Date;
		adderId: number;
		modderId: number;
		isRemoved: boolean;
		modTs: Date;
		adder: UmUser;
		itemBatchTypeNavigation: DItemBatchType;
		modder: UmUser;
		product: DProduct;
		sourceTypeNavigation: DItemBatchSourceType;
		dItemBatchAgr: DItemBatchAgr;
		dItemItemBatches: DItemItemBatch[];
		fimTransactionItems: FimTransactionItem[];
	}
	export class DItem
	{
		id: number;
		prodId: number;
		price: number;
		addTs: Date;
		adderId: number;
		modderId: number;
		isRemoved: boolean;
		qty: number;
		unitId: number;
		expireTs: Date;
		expireMargin: number;
		isFixed: boolean;
		isExpired: boolean;
		modTs: Date;
		adder: UmUser;
		modder: UmUser;
		prod: DProduct;
		unit: DProductUnit;
		dItemRemovalHistory: DItemRemovalHistory;
		dItemItemBatches: DItemItemBatch[];
	}
	export class DCommentsThread
	{
		id: number;
		isVisible: boolean;
		isBlocked: boolean;
		dBuyers: DBuyer[];
		dComments: DComment[];
		dSellers: DSeller[];
	}
	export class DComment
	{
		id: number;
		commentsThreadId: number;
		parentCommentId: number;
		addTs: Date;
		adderId: number;
		modderId: number;
		isRemoved: boolean;
		modTs: Date;
		ts: Date;
		adder: UmUser;
		commentsThread: DCommentsThread;
		modder: UmUser;
	}
	export class DBuyerType
	{
		value: string;
		text: string;
		dBuyers: DBuyer[];
	}
	export class DBuyer
	{
		id: number;
		name: string;
		buyerType: string;
		commentsThreadId: number;
		contactId: number;
		addTs: Date;
		adderId: number;
		modderId: number;
		rct: string;
		rst: string;
		modTs: Date;
		adder: UmUser;
		buyerTypeNavigation: DBuyerType;
		commentsThread: DCommentsThread;
		contact: CmContact;
		modder: UmUser;
		rctNavigation: DRelativeCountryType;
		rstNavigation: DRelativeStateProvType;
	}
	export class CmStateProvince
	{
		id: number;
		name: string;
		countryId: number;
		country: CmCountry;
		cmCities: CmCity[];
	}
	export class CmRegion
	{
		id: number;
		name: string;
		cmCountries: CmCountry[];
	}
	export class CmProfessionalInfo
	{
		id: number;
		designation: string;
		department: string;
		moreInfo: string;
		companyInfoId: number;
		companyInfo: CmCompanyInfo;
		idNavigation: CmContact;
	}
	export class CmPhone
	{
		id: number;
		fieldType: string;
		contactId: number;
		name: string;
		cityId: number;
		phone: string;
		addTs: Date;
		adderId: number;
		modTs: Date;
		modderId: number;
		isRemoved: boolean;
		adder: UmUser;
		city: CmCity;
		contact: CmContact;
		fieldTypeNavigation: CmContactFieldType;
		modder: UmUser;
	}
	export class CmPersonalInfo
	{
		id: number;
		firstName: string;
		middleName: string;
		lastName: string;
		salutation: string;
		moreInfo: string;
		idNavigation: CmContact;
	}
	export class CmNote
	{
		id: number;
		text: string;
		idNavigation: CmContact;
	}
	export class CmLocationInfo
	{
		id: number;
		isMerged: boolean;
		addTs: Date;
		adderId: number;
		modderId: number;
		isRemoved: boolean;
		modTs: Date;
		type: string;
		name: string;
		addressId: number;
		adder: UmUser;
		address: CmAddress;
		modder: UmUser;
		typeNavigation: CmContactType;
		dWarehouses: DWarehouse[];
		sShops: SShop[];
		smShipmentLocations: SmShipmentLocation[];
	}
	export class CmFax
	{
		id: number;
		fieldType: string;
		contactId: number;
		name: string;
		cityId: number;
		fax: string;
		addTs: Date;
		adderId: number;
		modTs: Date;
		modderId: number;
		isRemoved: boolean;
		adder: UmUser;
		city: CmCity;
		contact: CmContact;
		fieldTypeNavigation: CmContactFieldType;
		modder: UmUser;
	}
	export class CmEmail
	{
		id: number;
		fieldType: string;
		contactId: number;
		name: string;
		email: string;
		addTs: Date;
		adderId: number;
		modTs: Date;
		modderId: number;
		isRemoved: boolean;
		adder: UmUser;
		contact: CmContact;
		fieldTypeNavigation: CmContactFieldType;
		modder: UmUser;
	}
	export class CmCountryContinent
	{
		countryId: number;
		continentId: number;
		continent: CmContinent;
		country: CmCountry;
	}
	export class CmCountry
	{
		id: number;
		name: string;
		regionId: number;
		dialingCode: number;
		region: CmRegion;
		cmCountryContinents: CmCountryContinent[];
		cmStateProvinces: CmStateProvince[];
	}
	export class CmContinent
	{
		id: number;
		name: string;
		cmCountryContinents: CmCountryContinent[];
	}
	export class CmContactType
	{
		value: string;
		text: string;
		cmCompanyInfos: CmCompanyInfo[];
		cmContacts: CmContact[];
		cmLocationInfos: CmLocationInfo[];
	}
	export class CmContactMerger
	{
		mainContactId: number;
		mergedContactId: number;
		addTs: Date;
		adderId: number;
		modderId: number;
		isRemoved: boolean;
		modTs: Date;
		adder: UmUser;
		mainContact: CmContact;
		mergedContact: CmContact;
		modder: UmRole;
	}
	export class CmContactFieldType
	{
		value: string;
		text: string;
		cmContactFields: CmContactField[];
		cmEmails: CmEmail[];
		cmFaxes: CmFax[];
		cmPhones: CmPhone[];
	}
	export class CmContactField
	{
		id: number;
		fieldType: string;
		contactId: number;
		name: string;
		addTs: Date;
		adderId: number;
		modTs: Date;
		modderId: number;
		isRemoved: boolean;
		adder: UmUser;
		contact: CmContact;
		fieldTypeNavigation: CmContactFieldType;
		modder: UmUser;
		cmAddressContactFields: CmAddressContactField[];
	}
	export class CmContactConnection
	{
		id: number;
		fieldType: string;
		contactId: number;
		name: string;
		connectionId: number;
		title: string;
		addTs: Date;
		adderId: number;
		modTs: Date;
		modderId: number;
		isRemoved: boolean;
		adder: UmUser;
		connection: CmContact;
		fieldTypeNavigation: CmContactFieldType;
		idNavigation: CmContactField;
		modder: UmUser;
	}
	export class CmContact
	{
		id: number;
		isMerged: boolean;
		addTs: Date;
		adderId: number;
		modderId: number;
		isRemoved: boolean;
		modTs: Date;
		type: string;
		adder: UmUser;
		modder: UmUser;
		typeNavigation: CmContactType;
		cmNote: CmNote;
		cmPersonalInfo: CmPersonalInfo;
		cmProfessionalInfo: CmProfessionalInfo;
		fmVehicle: FmVehicle;
		cmContactFields: CmContactField[];
		cmContactMergerMainContacts: CmContactMerger[];
		cmContactMergerMergedContacts: CmContactMerger[];
		cmEmails: CmEmail[];
		cmFaxes: CmFax[];
		cmPhones: CmPhone[];
		dBuyers: DBuyer[];
		dSellers: DSeller[];
		fimBankBranchPocs: FimBankBranchPoc[];
		fimCheques: FimCheque[];
	}
	export class CmCompanyInfo
	{
		id: number;
		isMerged: boolean;
		addTs: Date;
		adderId: number;
		modderId: number;
		isRemoved: boolean;
		modTs: Date;
		type: string;
		name: string;
		adder: UmUser;
		modder: UmUser;
		typeNavigation: CmContactType;
		cmProfessionalInfos: CmProfessionalInfo[];
	}
	export class CmCity
	{
		id: number;
		name: string;
		stateProvinceId: number;
		dialingCode: number;
		stateProvince: CmStateProvince;
		cmAddresses: CmAddress[];
		cmFaxes: CmFax[];
		cmPhones: CmPhone[];
	}
	export class CmAddressContactField
	{
		addressId: number;
		contactFieldId: number;
		address: CmAddress;
		contactField: CmContactField;
	}
	export class CmAddress
	{
		id: number;
		line1: string;
		line2: string;
		cityId: number;
		zip: number;
		latitude: number;
		longitude: number;
		city: CmCity;
		cmAddressContactFields: CmAddressContactField[];
		cmLocationInfos: CmLocationInfo[];
		fimBankBranches: FimBankBranch[];
	}
}
