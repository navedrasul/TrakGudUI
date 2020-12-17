    export interface CmAddress {
        new(): CmAddress;

        Id: number;
        Line1: string;
        Line2: string;
        CityId: number | null;
        Zip: number | null;
        Latitude: number | null;
        Longitude: number | null;

        City: CmCity;
        CmAddressContactFields: CmAddressContactField[];
        CmLocationInfos: CmLocationInfo[];
        FimBankBranches: FimBankBranch[];
}
