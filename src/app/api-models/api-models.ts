namespace TrakGud.DAL.Models
{
	export interface ICmAddress
	{
		id: number;
		line1: string;
		line2: string;
		cityId: number;
		zip: number;
		latitude: number;
		longitude: number;
		city: ICmCity;
		cmAddressContactFields: ICmAddressContactField[];
		cmLocationInfos: ICmLocationInfo[];
		fimBankBranches: IFimBankBranch[];
	}
	export interface IFimBankBranch
	{
		id: number;
		bankId: number;
		addressId: number;
		address: ICmAddress;
		bank: IFimBank;
		fimBankBranchPocs: IFimBankBranchPoc[];
	}
	export interface IFimBankBranchPoc
	{
		bankBranchId: number;
		contactId: number;
		bankBranch: IFimBankBranch;
		contact: ICmContact;
	}
	export interface ICmContact
	{
		id: number;
		isMerged: boolean;
		addTs: Date;
		adderId: number;
		modderId: number;
		isRemoved: boolean;
		modTs: Date;
		type: string;
		adder: IUmUser;
		modder: IUmUser;
		typeNavigation: ICmContactType;
		cmNote: ICmNote;
		cmPersonalInfo: ICmPersonalInfo;
		cmProfessionalInfo: ICmProfessionalInfo;
		fmVehicle: IFmVehicle;
		cmContactFields: ICmContactField[];
		cmContactMergerMainContacts: ICmContactMerger[];
		cmContactMergerMergedContacts: ICmContactMerger[];
		cmEmails: ICmEmail[];
		cmFaxes: ICmFax[];
		cmPhones: ICmPhone[];
		dBuyers: IDBuyer[];
		dSellers: IDSeller[];
		fimBankBranchPocs: IFimBankBranchPoc[];
		fimCheques: IFimCheque[];
	}
	export interface IFimCheque
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
		bank: IFimBank;
		issuerContact: ICmContact;
		fimChequePayments: IFimChequePayment[];
	}
	export interface IFimChequePayment
	{
		id: number;
		type: string;
		isBounced: boolean;
		chequeId: number;
		cheque: IFimCheque;
		typeNavigation: IFimPaymentType;
	}
	export interface IFimPaymentType
	{
		value: string;
		text: string;
		fimCashPayments: IFimCashPayment[];
		fimChequePayments: IFimChequePayment[];
		fimCreditPayments: IFimCreditPayment[];
		fimPayments: IFimPayment[];
	}
	export interface IFimPayment
	{
		id: number;
		type: string;
		typeNavigation: IFimPaymentType;
		fimTransactions: IFimTransaction[];
	}
	export interface IFimTransaction
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
		adder: IUmUser;
		modder: IUmUser;
		payment: IFimPayment;
		rctNavigation: IDRelativeCountryType;
		rstNavigation: IDRelativeStateProvType;
		typeNavigation: IFimTransactionType;
		fimTransactionAmount: IFimTransactionAmount;
		dReceivedItemBatches: IDReceivedItemBatch[];
		fimTransactionItems: IFimTransactionItem[];
	}
	export interface IFimTransactionItem
	{
		id: number;
		transactionId: number;
		itemBatchId: number;
		price: number;
		qty: number;
		unitId: number;
		discount: number;
		itemBatch: IDItemBatch;
		transaction: IFimTransaction;
		unit: IDProductUnit;
		fimTransactionItemAgr: IFimTransactionItemAgr;
	}
	export interface IFimTransactionItemAgr
	{
		id: number;
		total: number;
		idNavigation: IFimTransactionItem;
	}
	export interface IDProductUnit
	{
		id: number;
		name: string;
		productId: number;
		addTs: Date;
		adderId: number;
		modderId: number;
		isDefault: boolean;
		modTs: Date;
		adder: IUmUser;
		modder: IUmUser;
		product: IDProduct;
		dItemBatchAgrs: IDItemBatchAgr[];
		dItems: IDItem[];
		dProductStocks: IDProductStock[];
		dProductUnitConvertionDestinationUnits: IDProductUnitConvertion[];
		dProductUnitConvertionSourceUnits: IDProductUnitConvertion[];
		dProductWarehouseStocks: IDProductWarehouseStock[];
		fimTransactionItems: IFimTransactionItem[];
		sProductOfferItems: ISProductOfferItem[];
		smDestinationItemBatches: ISmDestinationItemBatch[];
		smSourceItemBatches: ISmSourceItemBatch[];
	}
	export interface ISmSourceItemBatch
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
		adder: IUmUser;
		itemBatchTypeNavigation: IDItemBatchType;
		modder: IUmUser;
		product: IDProduct;
		shippedUnit: IDProductUnit;
		sourceTypeNavigation: IDItemBatchSourceType;
		smShipments: ISmShipment[];
	}
	export interface ISmShipment
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
		adder: IUmUser;
		destination: ISmShipmentLocation;
		destinationItemBatch: ISmDestinationItemBatch;
		modder: IUmUser;
		source: ISmShipmentLocation;
		sourceItemBatch: ISmSourceItemBatch;
		suppervisor: IUmUser;
		smMovingItemBatches: ISmMovingItemBatch[];
		smShipmentVehicles: ISmShipmentVehicle[];
	}
	export interface ISmShipmentVehicle
	{
		shipmentId: number;
		vehicleId: number;
		assignmentTs: Date;
		shipment: ISmShipment;
		vehicle: IFmVehicle;
	}
	export interface ISmMovingItemBatch
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
		adder: IUmUser;
		itemBatchTypeNavigation: IDItemBatchType;
		modder: IUmUser;
		product: IDProduct;
		shipment: ISmShipment;
		sourceTypeNavigation: IDItemBatchSourceType;
	}
	export interface ISmShipmentLocation
	{
		id: number;
		type: string;
		locationInfoId: number;
		locationInfo: ICmLocationInfo;
		typeNavigation: ISmShipmentLocationType;
		smShipmentDestinations: ISmShipment[];
		smShipmentSources: ISmShipment[];
	}
	export interface ISmShipmentLocationType
	{
		value: string;
		text: string;
		smShipmentLocations: ISmShipmentLocation[];
	}
	export interface IDItemBatchSourceType
	{
		value: string;
		text: string;
		dItemBatches: IDItemBatch[];
		dReceivedItemBatches: IDReceivedItemBatch[];
		dRemovedItemBatches: IDRemovedItemBatch[];
		dStoredItemBatches: IDStoredItemBatch[];
		smDestinationItemBatches: ISmDestinationItemBatch[];
		smMovingItemBatches: ISmMovingItemBatch[];
		smShippedItemBatches: ISmShippedItemBatch[];
		smSourceItemBatches: ISmSourceItemBatch[];
	}
	export interface ISmShippedItemBatch
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
		adder: IUmUser;
		itemBatchTypeNavigation: IDItemBatchType;
		modder: IUmUser;
		product: IDProduct;
		sourceTypeNavigation: IDItemBatchSourceType;
		vehicle: IFmVehicle;
	}
	export interface IDStoredItemBatch
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
		adder: IUmUser;
		itemBatchTypeNavigation: IDItemBatchType;
		modder: IUmUser;
		product: IDProduct;
		productWarehouseStock: IDProductWarehouseStock;
		sourceTypeNavigation: IDItemBatchSourceType;
	}
	export interface IDRemovedItemBatch
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
		adder: IUmUser;
		itemBatchTypeNavigation: IDItemBatchType;
		modder: IUmUser;
		product: IDProduct;
		sourceTypeNavigation: IDItemBatchSourceType;
	}
	export interface IDItemBatchType
	{
		value: string;
		text: string;
		dItemBatches: IDItemBatch[];
		dReceivedItemBatches: IDReceivedItemBatch[];
		dRemovedItemBatches: IDRemovedItemBatch[];
		dStoredItemBatches: IDStoredItemBatch[];
		smDestinationItemBatches: ISmDestinationItemBatch[];
		smMovingItemBatches: ISmMovingItemBatch[];
		smShippedItemBatches: ISmShippedItemBatch[];
		smSourceItemBatches: ISmSourceItemBatch[];
	}
	export interface ISmDestinationItemBatch
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
		adder: IUmUser;
		itemBatchTypeNavigation: IDItemBatchType;
		modder: IUmUser;
		product: IDProduct;
		receivedUnit: IDProductUnit;
		sourceTypeNavigation: IDItemBatchSourceType;
		smShipments: ISmShipment[];
	}
	export interface ISProductOfferItem
	{
		id: number;
		productId: number;
		productOfferId: number;
		qty: number;
		maxQty: number;
		unitId: number;
		product: IDProduct;
		productOffer: ISProductOffer;
		unit: IDProductUnit;
	}
	export interface ISProductOffer
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
		adder: IUmUser;
		modder: IUmUser;
		sProductOfferItems: ISProductOfferItem[];
	}
	export interface IDProductWarehouseStock
	{
		id: number;
		qty: number;
		unitId: number;
		warehouseId: number;
		productId: number;
		product: IDProduct;
		unit: IDProductUnit;
		warehouse: IDWarehouse;
		dStoredItemBatches: IDStoredItemBatch[];
	}
	export interface IDWarehouse
	{
		id: number;
		locationId: number;
		addTs: Date;
		adderId: number;
		modderId: number;
		modTs: Date;
		adder: IUmUser;
		location: ICmLocationInfo;
		modder: IUmUser;
		dProductWarehouseStocks: IDProductWarehouseStock[];
	}
	export interface IDProductUnitConvertion
	{
		sourceUnitId: number;
		destinationUnitId: number;
		multiplier: number;
		addTs: Date;
		adderId: number;
		modderId: number;
		modTs: Date;
		adder: IUmUser;
		destinationUnit: IDProductUnit;
		modder: IUmUser;
		sourceUnit: IDProductUnit;
	}
	export interface IDProductStock
	{
		id: number;
		qty: number;
		unitId: number;
		productId: number;
		product: IDProduct;
		unit: IDProductUnit;
	}
	export interface IDItem
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
		adder: IUmUser;
		modder: IUmUser;
		prod: IDProduct;
		unit: IDProductUnit;
		dItemRemovalHistory: IDItemRemovalHistory;
		dItemItemBatches: IDItemItemBatch[];
	}
	export interface IDItemItemBatch
	{
		itemId: number;
		batchId: number;
		batch: IDItemBatch;
		item: IDItem;
	}
	export interface IDItemRemovalHistory
	{
		itemId: number;
		removerId: number;
		ts: Date;
		item: IDItem;
		remover: IUmUser;
	}
	export interface IDItemBatchAgr
	{
		id: number;
		qty: number;
		unitId: number;
		price: number;
		idNavigation: IDItemBatch;
		unit: IDProductUnit;
	}
	export interface IDProduct
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
		adder: IUmUser;
		modder: IUmUser;
		productCategory: IDProductCategory;
		dItemBatches: IDItemBatch[];
		dItems: IDItem[];
		dProductStocks: IDProductStock[];
		dProductUnits: IDProductUnit[];
		dProductWarehouseStocks: IDProductWarehouseStock[];
		dReceivedItemBatches: IDReceivedItemBatch[];
		dRemovedItemBatches: IDRemovedItemBatch[];
		dStoredItemBatches: IDStoredItemBatch[];
		sProductOfferItems: ISProductOfferItem[];
		smDestinationItemBatches: ISmDestinationItemBatch[];
		smMovingItemBatches: ISmMovingItemBatch[];
		smShippedItemBatches: ISmShippedItemBatch[];
		smSourceItemBatches: ISmSourceItemBatch[];
	}
	export interface IDProductCategory
	{
		id: number;
		name: string;
		prodCount: number;
		addTs: Date;
		adderId: number;
		modderId: number;
		isRemoved: boolean;
		modTs: Date;
		adder: IUmUser;
		modder: IUmUser;
		dProducts: IDProduct[];
	}
	export interface IDItemBatch
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
		adder: IUmUser;
		itemBatchTypeNavigation: IDItemBatchType;
		modder: IUmUser;
		product: IDProduct;
		sourceTypeNavigation: IDItemBatchSourceType;
		dItemBatchAgr: IDItemBatchAgr;
		dItemItemBatches: IDItemItemBatch[];
		fimTransactionItems: IFimTransactionItem[];
	}
	export interface IDReceivedItemBatch
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
		adder: IUmUser;
		itemBatchTypeNavigation: IDItemBatchType;
		modder: IUmUser;
		product: IDProduct;
		seller: IDSeller;
		sourceTypeNavigation: IDItemBatchSourceType;
		transaction: IFimTransaction;
	}
	export interface IFimTransactionAmount
	{
		id: number;
		totalBeforeDiscount: number;
		discount: number;
		total: number;
		idNavigation: IFimTransaction;
	}
	export interface IFimTransactionType
	{
		value: string;
		text: string;
		fimTransactions: IFimTransaction[];
	}
	export interface IDRelativeStateProvType
	{
		value: string;
		text: string;
		dBuyers: IDBuyer[];
		dSellers: IDSeller[];
		fimTransactions: IFimTransaction[];
	}
	export interface IDRelativeCountryType
	{
		value: string;
		text: string;
		dBuyers: IDBuyer[];
		dSellers: IDSeller[];
		fimTransactions: IFimTransaction[];
	}
	export interface IFimCreditPayment
	{
		id: number;
		type: string;
		receivedAmt: number;
		dueDate: Date;
		typeNavigation: IFimPaymentType;
	}
	export interface IFimCashPayment
	{
		id: number;
		type: string;
		receivedAmt: number;
		typeNavigation: IFimPaymentType;
	}
	export interface IDSeller
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
		adder: IUmUser;
		commentsThread: IDCommentsThread;
		contact: ICmContact;
		modder: IUmUser;
		rctNavigation: IDRelativeCountryType;
		rstNavigation: IDRelativeStateProvType;
		sellerTypeNavigation: IDSellerType;
		dReceivedItemBatches: IDReceivedItemBatch[];
	}
	export interface IDSellerType
	{
		value: string;
		text: string;
		dSellers: IDSeller[];
	}
	export interface IDCommentsThread
	{
		id: number;
		isVisible: boolean;
		isBlocked: boolean;
		dBuyers: IDBuyer[];
		dComments: IDComment[];
		dSellers: IDSeller[];
	}
	export interface IDComment
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
		adder: IUmUser;
		commentsThread: IDCommentsThread;
		modder: IUmUser;
	}
	export interface IDBuyer
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
		adder: IUmUser;
		buyerTypeNavigation: IDBuyerType;
		commentsThread: IDCommentsThread;
		contact: ICmContact;
		modder: IUmUser;
		rctNavigation: IDRelativeCountryType;
		rstNavigation: IDRelativeStateProvType;
	}
	export interface IDBuyerType
	{
		value: string;
		text: string;
		dBuyers: IDBuyer[];
	}
	export interface ICmPhone
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
		adder: IUmUser;
		city: ICmCity;
		contact: ICmContact;
		fieldTypeNavigation: ICmContactFieldType;
		modder: IUmUser;
	}
	export interface ICmContactFieldType
	{
		value: string;
		text: string;
		cmContactFields: ICmContactField[];
		cmEmails: ICmEmail[];
		cmFaxes: ICmFax[];
		cmPhones: ICmPhone[];
	}
	export interface ICmFax
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
		adder: IUmUser;
		city: ICmCity;
		contact: ICmContact;
		fieldTypeNavigation: ICmContactFieldType;
		modder: IUmUser;
	}
	export interface ICmEmail
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
		adder: IUmUser;
		contact: ICmContact;
		fieldTypeNavigation: ICmContactFieldType;
		modder: IUmUser;
	}
	export interface ICmContactMerger
	{
		mainContactId: number;
		mergedContactId: number;
		addTs: Date;
		adderId: number;
		modderId: number;
		isRemoved: boolean;
		modTs: Date;
		adder: IUmUser;
		mainContact: ICmContact;
		mergedContact: ICmContact;
		modder: IUmRole;
	}
	export interface IUmRole
	{
		id: number;
		title: string;
		addTs: Date;
		adderId: number;
		modderId: number;
		isRemoved: boolean;
		modTs: Date;
		adder: IUmUser;
		modder: IUmUser;
		cmContactMergers: ICmContactMerger[];
		umRoleRights: IUmRoleRight[];
		umUserRoles: IUmUserRole[];
	}
	export interface IUmUserRole
	{
		userId: number;
		roleId: number;
		addTs: Date;
		adderId: number;
		modderId: number;
		isRemoved: boolean;
		modTs: Date;
		adder: IUmUser;
		modder: IUmUser;
		role: IUmRole;
		user: IUmUser;
	}
	export interface IUmRoleRight
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
		adder: IUmUser;
		modder: IUmUser;
		role: IUmRole;
	}
	export interface ICmContactField
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
		adder: IUmUser;
		contact: ICmContact;
		fieldTypeNavigation: ICmContactFieldType;
		modder: IUmUser;
		cmAddressContactFields: ICmAddressContactField[];
	}
	export interface IFmVehicle
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
		adder: IUmUser;
		idNavigation: ICmContact;
		modder: IUmUser;
		statusNavigation: IFmVehicleStatus;
		vehicleTypeNavigation: IFmVehicleType;
		fmVehicleLocation: IFmVehicleLocation;
		fmVehicleCapacities: IFmVehicleCapacity[];
		smShipmentVehicles: ISmShipmentVehicle[];
		smShippedItemBatches: ISmShippedItemBatch[];
	}
	export interface IFmVehicleCapacity
	{
		vehicleId: number;
		capacityUnitId: number;
		capacity: number;
		capacityUnit: IFmVehicleCapacityUnit;
		vehicle: IFmVehicle;
	}
	export interface IFmVehicleCapacityUnit
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
		adder: IUmUser;
		modder: IUmUser;
		vehicleTypeNavigation: IFmVehicleType;
		vehicleUnitTypeNavigation: IFmVehicleCapacityUnitType;
		fmVehicleCapacities: IFmVehicleCapacity[];
		fmVehicleCapacityUnitConvertionDestinationUnits: IFmVehicleCapacityUnitConvertion[];
		fmVehicleCapacityUnitConvertionSourceUnits: IFmVehicleCapacityUnitConvertion[];
	}
	export interface IFmVehicleCapacityUnitConvertion
	{
		sourceUnitId: number;
		destinationUnitId: number;
		multiplier: number;
		addTs: Date;
		adderId: number;
		modderId: number;
		modTs: Date;
		adder: IUmUser;
		destinationUnit: IFmVehicleCapacityUnit;
		modder: IUmUser;
		sourceUnit: IFmVehicleCapacityUnit;
	}
	export interface IFmVehicleCapacityUnitType
	{
		value: string;
		text: string;
		fmVehicleCapacityUnits: IFmVehicleCapacityUnit[];
	}
	export interface IFmVehicleLocation
	{
		id: number;
		latitude: number;
		longitude: number;
		idNavigation: IFmVehicle;
	}
	export interface IFmVehicleType
	{
		value: string;
		text: string;
		fmVehicleCapacityUnits: IFmVehicleCapacityUnit[];
		fmVehicles: IFmVehicle[];
	}
	export interface IFmVehicleStatus
	{
		value: string;
		text: string;
		fmVehicles: IFmVehicle[];
	}
	export interface ICmProfessionalInfo
	{
		id: number;
		designation: string;
		department: string;
		moreInfo: string;
		companyInfoId: number;
		companyInfo: ICmCompanyInfo;
		idNavigation: ICmContact;
	}
	export interface ICmCompanyInfo
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
		adder: IUmUser;
		modder: IUmUser;
		typeNavigation: ICmContactType;
		cmProfessionalInfos: ICmProfessionalInfo[];
	}
	export interface ICmPersonalInfo
	{
		id: number;
		firstName: string;
		middleName: string;
		lastName: string;
		salutation: string;
		moreInfo: string;
		idNavigation: ICmContact;
	}
	export interface ICmNote
	{
		id: number;
		text: string;
		idNavigation: ICmContact;
	}
	export interface ICmContactType
	{
		value: string;
		text: string;
		cmCompanyInfos: ICmCompanyInfo[];
		cmContacts: ICmContact[];
		cmLocationInfos: ICmLocationInfo[];
	}
	export interface IUmUser
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
		adder: IUmUser;
		employee: IHrmEmployee;
		modder: IUmUser;
		gsUserSetting: IGsUserSetting;
		cmCompanyInfoAdders: ICmCompanyInfo[];
		cmCompanyInfoModders: ICmCompanyInfo[];
		cmContactAdders: ICmContact[];
		cmContactFieldAdders: ICmContactField[];
		cmContactFieldModders: ICmContactField[];
		cmContactMergers: ICmContactMerger[];
		cmContactModders: ICmContact[];
		cmEmailAdders: ICmEmail[];
		cmEmailModders: ICmEmail[];
		cmFaxAdders: ICmFax[];
		cmFaxModders: ICmFax[];
		cmLocationInfoAdders: ICmLocationInfo[];
		cmLocationInfoModders: ICmLocationInfo[];
		cmPhoneAdders: ICmPhone[];
		cmPhoneModders: ICmPhone[];
		dBuyerAdders: IDBuyer[];
		dBuyerModders: IDBuyer[];
		dCommentAdders: IDComment[];
		dCommentModders: IDComment[];
		dItemAdders: IDItem[];
		dItemBatchAdders: IDItemBatch[];
		dItemBatchModders: IDItemBatch[];
		dItemModders: IDItem[];
		dItemRemovalHistories: IDItemRemovalHistory[];
		dProductAdders: IDProduct[];
		dProductCategoryAdders: IDProductCategory[];
		dProductCategoryModders: IDProductCategory[];
		dProductModders: IDProduct[];
		dProductUnitAdders: IDProductUnit[];
		dProductUnitConvertionAdders: IDProductUnitConvertion[];
		dProductUnitConvertionModders: IDProductUnitConvertion[];
		dProductUnitModders: IDProductUnit[];
		dReceivedItemBatchAdders: IDReceivedItemBatch[];
		dReceivedItemBatchModders: IDReceivedItemBatch[];
		dRemovedItemBatchAdders: IDRemovedItemBatch[];
		dRemovedItemBatchModders: IDRemovedItemBatch[];
		dSellerAdders: IDSeller[];
		dSellerModders: IDSeller[];
		dStoredItemBatchAdders: IDStoredItemBatch[];
		dStoredItemBatchModders: IDStoredItemBatch[];
		dWarehouseAdders: IDWarehouse[];
		dWarehouseModders: IDWarehouse[];
		fimTransactionAdders: IFimTransaction[];
		fimTransactionModders: IFimTransaction[];
		fmVehicleAdders: IFmVehicle[];
		fmVehicleCapacityUnitAdders: IFmVehicleCapacityUnit[];
		fmVehicleCapacityUnitConvertionAdders: IFmVehicleCapacityUnitConvertion[];
		fmVehicleCapacityUnitConvertionModders: IFmVehicleCapacityUnitConvertion[];
		fmVehicleCapacityUnitModders: IFmVehicleCapacityUnit[];
		fmVehicleModders: IFmVehicle[];
		hrmEmployeeAdders: IHrmEmployee[];
		hrmEmployeeEmployeeGroupAdders: IHrmEmployeeEmployeeGroup[];
		hrmEmployeeEmployeeGroupModders: IHrmEmployeeEmployeeGroup[];
		hrmEmployeeGroupAdders: IHrmEmployeeGroup[];
		hrmEmployeeGroupModders: IHrmEmployeeGroup[];
		hrmEmployeeModders: IHrmEmployee[];
		hrmEmployeeOrganisationAdders: IHrmEmployeeOrganisation[];
		hrmEmployeeOrganisationModders: IHrmEmployeeOrganisation[];
		hrmOrganisationAdders: IHrmOrganisation[];
		hrmOrganisationModders: IHrmOrganisation[];
		inverseAdder: IUmUser[];
		inverseModder: IUmUser[];
		nmNotifications: INmNotification[];
		sProductOfferAdders: ISProductOffer[];
		sProductOfferModders: ISProductOffer[];
		smDestinationItemBatchAdders: ISmDestinationItemBatch[];
		smDestinationItemBatchModders: ISmDestinationItemBatch[];
		smMovingItemBatchAdders: ISmMovingItemBatch[];
		smMovingItemBatchModders: ISmMovingItemBatch[];
		smShipmentAdders: ISmShipment[];
		smShipmentModders: ISmShipment[];
		smShipmentSuppervisors: ISmShipment[];
		smShippedItemBatchAdders: ISmShippedItemBatch[];
		smShippedItemBatchModders: ISmShippedItemBatch[];
		smSourceItemBatchAdders: ISmSourceItemBatch[];
		smSourceItemBatchModders: ISmSourceItemBatch[];
		umRightAdders: IUmRight[];
		umRightModders: IUmRight[];
		umRoleAdders: IUmRole[];
		umRoleModders: IUmRole[];
		umRoleRightAdders: IUmRoleRight[];
		umRoleRightModders: IUmRoleRight[];
		umUserGroupAdders: IUmUserGroup[];
		umUserGroupModders: IUmUserGroup[];
		umUserRightAdders: IUmUserRight[];
		umUserRightModders: IUmUserRight[];
		umUserRightUsers: IUmUserRight[];
		umUserRoleAdders: IUmUserRole[];
		umUserRoleModders: IUmUserRole[];
		umUserRoleUsers: IUmUserRole[];
		umUserUserGroupAdders: IUmUserUserGroup[];
		umUserUserGroupModders: IUmUserUserGroup[];
		umUserUserGroupUsers: IUmUserUserGroup[];
	}
	export interface IUmUserUserGroup
	{
		userId: number;
		userGroupId: number;
		addTs: Date;
		adderId: number;
		modTs: Date;
		modderId: number;
		isRemoved: boolean;
		adder: IUmUser;
		modder: IUmUser;
		user: IUmUser;
		userGroup: IUmUserGroup;
	}
	export interface IUmUserRight
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
		adder: IUmUser;
		modder: IUmUser;
		user: IUmUser;
	}
	export interface IUmUserGroup
	{
		id: number;
		title: string;
		addTs: Date;
		adderId: number;
		modTs: Date;
		modderId: number;
		isRemoved: boolean;
		adder: IUmUser;
		modder: IUmUser;
		gsApps: IGsApp[];
		umUserUserGroups: IUmUserUserGroup[];
	}
	export interface IGsApp
	{
		id: number;
		name: string;
		appVersion: string;
		appType: string;
		userGroupId: number;
		appTypeNavigation: IGsAppType;
		userGroup: IUmUserGroup;
		gsAppSetting: IGsAppSetting;
	}
	export interface IGsAppSetting
	{
		companyName: string;
		appId: number;
		defaultCurrencyId: string;
		app: IGsApp;
		defaultCurrency: IFimCurrency;
	}
	export interface IFimCurrency
	{
		value: string;
		text: string;
		gsAppSettings: IGsAppSetting[];
	}
	export interface IGsAppType
	{
		value: string;
		text: string;
		gsApps: IGsApp[];
	}
	export interface IUmRight
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
		adder: IUmUser;
		modder: IUmUser;
		umRightRightsSections: IUmRightRightsSection[];
	}
	export interface IUmRightRightsSection
	{
		rightId: number;
		rightsSectionId: number;
		right: IUmRight;
		rightsSection: IUmRightsSection;
	}
	export interface IUmRightsSection
	{
		id: number;
		title: string;
		parentSectionId: number;
		umRightRightsSections: IUmRightRightsSection[];
	}
	export interface INmNotification
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
		deletor: IUmUser;
		notificationSourceTypeNavigation: INmNotificationSourceType;
		nmNotificationNotificationCategories: INmNotificationNotificationCategory[];
	}
	export interface INmNotificationNotificationCategory
	{
		notificationId: number;
		notificationCategoryId: number;
		notification: INmNotification;
		notificationCategory: INmNotificationCategory;
	}
	export interface INmNotificationCategory
	{
		id: number;
		name: string;
		nmNotificationCategoryAgr: INmNotificationCategoryAgr;
		nmNotificationNotificationCategories: INmNotificationNotificationCategory[];
	}
	export interface INmNotificationCategoryAgr
	{
		id: number;
		total: number;
		unread: number;
		expired: number;
		deleted: number;
		idNavigation: INmNotificationCategory;
	}
	export interface INmNotificationSourceType
	{
		value: string;
		text: string;
		nmNotifications: INmNotification[];
	}
	export interface IHrmOrganisation
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
		adder: IUmUser;
		modder: IUmUser;
		hrmEmployeeGroupOrganisations: IHrmEmployeeGroupOrganisation[];
		hrmEmployeeOrganisations: IHrmEmployeeOrganisation[];
	}
	export interface IHrmEmployeeGroupOrganisation
	{
		employeeGroupId: number;
		organisationId: number;
		employeeGroup: IHrmEmployeeGroup;
		organisation: IHrmOrganisation;
	}
	export interface IHrmEmployeeOrganisation
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
		adder: IUmUser;
		employee: IHrmEmployee;
		modder: IUmUser;
		organisation: IHrmOrganisation;
	}
	export interface IHrmEmployeeGroup
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
		adder: IUmUser;
		modder: IUmUser;
		hrmEmployeeEmployeeGroups: IHrmEmployeeEmployeeGroup[];
		hrmEmployeeGroupOrganisations: IHrmEmployeeGroupOrganisation[];
	}
	export interface IHrmEmployeeEmployeeGroup
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
		adder: IUmUser;
		employee: IHrmEmployee;
		employeeGroup: IHrmEmployeeGroup;
		modder: IUmUser;
	}
	export interface IGsUserSetting
	{
		userId: number;
		currentThemeId: number;
		currentTheme: IGsTheme;
		user: IUmUser;
	}
	export interface IGsTheme
	{
		id: number;
		title: string;
		desc: string;
		themePath: string;
		gsUserSettings: IGsUserSetting[];
	}
	export interface IHrmEmployee
	{
		id: number;
		contactId: number;
		addTs: Date;
		adderId: number;
		modTs: Date;
		modderId: number;
		isRemoved: boolean;
		adder: IUmUser;
		contact: IHrmEmployee;
		modder: IUmUser;
		hrmEmployeeEmployeeGroups: IHrmEmployeeEmployeeGroup[];
		hrmEmployeeOrganisations: IHrmEmployeeOrganisation[];
		inverseContact: IHrmEmployee[];
		sShopEmployees: ISShopEmployee[];
		umUsers: IUmUser[];
	}
	export interface ISShopEmployee
	{
		id: number;
		designation: string;
		employeeId: number;
		employee: IHrmEmployee;
	}
	export interface IFimBank
	{
		id: number;
		name: string;
		desc: string;
		fimBankBranches: IFimBankBranch[];
		fimCheques: IFimCheque[];
	}
	export interface ICmLocationInfo
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
		adder: IUmUser;
		address: ICmAddress;
		modder: IUmUser;
		typeNavigation: ICmContactType;
		dWarehouses: IDWarehouse[];
		sShops: ISShop[];
		smShipmentLocations: ISmShipmentLocation[];
	}
	export interface ISShop
	{
		id: number;
		locationId: number;
		isOnline: boolean;
		name: string;
		location: ICmLocationInfo;
	}
	export interface ICmAddressContactField
	{
		addressId: number;
		contactFieldId: number;
		address: ICmAddress;
		contactField: ICmContactField;
	}
	export interface ICmCity
	{
		id: number;
		name: string;
		stateProvinceId: number;
		dialingCode: number;
		stateProvince: ICmStateProvince;
		cmAddresses: ICmAddress[];
		cmFaxes: ICmFax[];
		cmPhones: ICmPhone[];
	}
	export interface ICmStateProvince
	{
		id: number;
		name: string;
		countryId: number;
		country: ICmCountry;
		cmCities: ICmCity[];
	}
	export interface ICmCountry
	{
		id: number;
		name: string;
		regionId: number;
		dialingCode: number;
		region: ICmRegion;
		cmCountryContinents: ICmCountryContinent[];
		cmStateProvinces: ICmStateProvince[];
	}
	export interface ICmCountryContinent
	{
		countryId: number;
		continentId: number;
		continent: ICmContinent;
		country: ICmCountry;
	}
	export interface ICmContinent
	{
		id: number;
		name: string;
		cmCountryContinents: ICmCountryContinent[];
	}
	export interface ICmRegion
	{
		id: number;
		name: string;
		cmCountries: ICmCountry[];
	}
}
